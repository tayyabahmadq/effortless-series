/**
 * Academics - RGPV Civil Engineering 3rd-semester subject: CE-306
 * Study of Historical & Ancient Civil Engineering Practices.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce306: AcademicSubject = {
  id: "ce-306",
  code: "CE-306",
  title: "Study of Historical & Ancient Civil Engineering Practices",
  semester: "III Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The visual guide to India's civil engineering heritage - from Indus Valley town planning and Ashokan pillars through Mughal monuments and colonial railways to ancient stepwells and the lessons they hold for modern sustainable engineering.",
  description:
    "Five units trace the evolution of civil engineering practice on the Indian subcontinent: the grid-planned cities and brick standardisation of the Indus Valley and Vedic period, the Mauryan and Gupta achievements in pillars, stupas, rock-cut caves and metallurgy, the Indo-Islamic mastery of the Qutub Minar and Taj Mahal, the colonial-era bridges, railways, canals and institutional buildings, and finally the indigenous water systems - stepwells, tanks, qanats and rainwater harvesting - whose principles underpin modern sustainable design. Every section pairs the historical record with an exam-ready outline, a redrawable diagram, and the questions RGPV actually asks.",
  accentColor: "#a78bfa",
  emoji: "HC",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Indus Valley and Vedic Period",
      summary:
        "The earliest chapter of Indian civil engineering - the grid-planned cities of Mohenjo-daro and Harappa with their drainage, water supply and brick standardisation, and the Vedic-period wattle-and-daub gramas with their geometrically precise altars and gnomon-based cardinal alignment.",
      chapter: {
        number: "01",
        title: "Indus Valley and Vedic Engineering",
        intro:
          "Unit I begins at 2600 BCE with the world's first planned cities: Mohenjo-daro and Harappa, their grid streets, covered drains, ring wells and 4:2:1 modular brick. It closes with the Vedic gramas of 1500-500 BCE, where wattle-and-daub huts surrounded the geometrically precise brick altar (vedi) of the Agnicayana ritual, and the Sulba-sutras gave the world's earliest statement of the Pythagorean relation.",
        inOneBreath:
          "An Indus city was grid-planned with a citadel mound to the west and lower town to the east; houses were courtyard-centred fired-brick blocks opening onto lanes; covered street drains at 1:80 gradient carried house wastewater to an out-fall beyond the city wall; wells were sunk as brick rings of wedge-shaped bricks; the 4:2:1 modular brick (280 x 140 x 70 mm) was standard across hundreds of kilometres; the Vedic grama was timber-and-thatch huts around a cattle pen; the vedi altar was five layers of fired brick in falcon shape; the Sulba-sutras gave the Pythagorean relation; and the gnomon-and-shadow method fixed cardinal directions.",
        sections: [
          {
            number: "1.1",
            title: "Town planning - Mohenjo-daro and Harappa",
            body: [
              "The Indus Valley Civilisation, dated from about 2600 BCE to 1900 BCE, set the world's first benchmark for planned urbanism. Excavations at Mohenjo-daro in Sindh and Harappa in Punjab reveal grid-aligned streets running roughly north-south and east-west, with lanes branching at right angles. The cities covered hundreds of hectares and housed tens of thousands of residents under a disciplined civic order rare for its era. Houses were uniform in footprint, mostly courtyard-centred blocks opening onto lanes rather than main streets. Larger structures sat on the high citadel mound to the west while the lower town held the residential blocks, producing the bipartite citadel-and-lower-town plan that became a template.",
              "The Great Bath of Mohenjo-daro, a 12 by 7 metre brick-lined tank sealed with bitumen and served by a well and a drain, is the earliest known public water structure. Adjacent rooms suggest ritual bathing, while the granary blocks nearby point to municipal storage of grain. Streets were widened at intersections to ease cart movement, and street lighting through oil lamps placed in wall niches has been inferred from soot marks. House drains connected to soak jars and street drains through chutes, with inspection covers at corners. The standard of public works implies a central authority, even though no palace or temple has been firmly identified.",
              "Surveying instruments were simple but effective - cords stretched over pegs kept streets straight, and a standard length measure (the Indus foot of about 33.5 cm) appears on shell and copper scales. Layouts followed a module: housing blocks measured roughly 12 by 6 Indus feet, and street widths clustered around 1.8, 3.6 and 7.2 metres, suggesting a binary doubling of a base lane. The grid was not dogmatic - it bent to avoid older features and to align with river channels - but the underlying geometry held across hundreds of kilometres, indicating that planning knowledge travelled with the surveyor-craftsmen of the Indus cities.",
            ],
            bullets: [
              "Grid street pattern aligned to cardinal directions, with major arteries 7.2 m wide and lanes 1.8 m.",
              "Bipartite zoning: high citadel mound (west) for public buildings and lower town (east) for housing.",
              "Courtyard houses of similar footprint opened onto lanes, not main streets, controlling dust and noise.",
              "Great Bath at Mohenjo-daro: 12 x 7 m tank, bitumen-sealed, fed by a well and drained by a covered channel.",
              "Standard length unit (Indus foot ≈ 33.5 cm) kept brick and block dimensions uniform across distant sites.",
            ],
            table: {
              caption: "Town-planning elements at Mohenjo-daro and Harappa.",
              headers: ["Element", "Mohenjo-daro", "Harappa"],
              rows: [
                ["Citadel feature", "Great Bath + granary", "Granary + working platforms"],
                ["Street width", "up to 9 m", "up to 7 m"],
                ["Drain grade", "1:80 to 1:100", "1:60 to 1:100"],
                ["House unit", "courtyard + 4-6 rooms", "courtyard + 3-5 rooms"],
                ["Brick ratio", "4:2:1 (L:W:H)", "4:2:1 (L:W:H)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Indus city layout pipeline",
              caption: "From grid survey to occupied block - the steps that produced an Indus city.",
              steps: [
                { label: "Survey: pegs and cords set cardinal grid" },
                { label: "Citadel mound raised on west" },
                { label: "Lower town blocks laid on module" },
                { label: "Streets + drains cut between blocks" },
                { label: "Courtyard houses built to standard" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked about Indus town planning, sketch the bipartite plan (citadel west, lower town east) and label the Great Bath, granary, main street and house drain. RGPV awards four marks for the sketch alone, then three for the brick ratio (4:2:1) and standard unit (≈ 33.5 cm).",
            },
            keyTerms: [
              { term: "Citadel mound", definition: "Raised western sector holding public structures such as the Great Bath and granaries." },
              { term: "Lower town", definition: "Eastern residential sector of an Indus city laid on a grid of streets and lanes." },
              { term: "Indus foot", definition: "Standard linear measure ≈ 33.5 cm used to fix brick and block dimensions." },
            ],
            examQuestions: [
              {
                q: "Describe the town planning of Mohenjo-daro with a sketch and list the engineering features that distinguish it as the world's earliest planned city.",
                marks: 7,
                outline: [
                  "Sketch the bipartite plan: citadel mound (west), lower town (east), main street, house drain.",
                  "State the grid alignment: streets N-S and E-W; lane widths 1.8, 3.6 and 7.2 m on a doubling module.",
                  "Name the Great Bath: 12 x 7 m, bitumen-sealed, fed by a well and drained by a covered channel.",
                  "Cite the brick ratio 4:2:1 (L:W:H) and the standard Indus foot (≈ 33.5 cm).",
                  "Describe the covered street drain at 1:80 gradient with removable slabs and inspection holes.",
                  "Note the granary blocks as evidence of municipal grain storage and a central authority.",
                  "Conclude that planning knowledge travelled with surveyor-craftsmen across hundreds of kilometres.",
                ],
              },
              {
                q: "What was the length-width-height ratio of the standard Indus brick?",
                marks: 2,
              },
              {
                q: "Explain the function of the Great Bath at Mohenjo-daro and list three engineering features that made it watertight.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Drainage systems of the Indus cities",
            body: [
              "The Indus drainage system has no contemporary rival in the ancient world. Every house had its own brick-lined soak pit or drain connected by a chute to a street drain; street drains, often 30 to 60 cm deep and covered with dressed limestone or terracotta slabs, ran beneath the lanes at a gradient of about 1 in 80 to 1 in 100. Inspection holes at corners allowed municipal workers to clear blockages. Soak jars and cesspools intercepted solids before they entered the main channel. The system was gravity-driven: drains were laid below the floor level of houses and sloped toward the river or an out-fall drain beyond the city wall.",
              "Drain covers were removable slabs - some shaped as flat bricks, others as dressed stone lids with lifting knobs - allowing routine cleaning. The structures used the same standardised fired bricks that built the houses, ensuring interchangeable spares. At intersections the channels stepped down to maintain head and prevent backflow. Sumps collected grit and heavy solids; periodic cleaning is implied by the absence of thick silt deposits in the excavated sections. Water-tight joints were achieved with gypsum mortar and bitumen seals at critical points, especially where drains passed through walls.",
              "The vertical hierarchy of the system is what examiners expect students to describe. From the bottom up: an earthen bedding, a brick invert laid in two courses, vertical brick side walls rising 30 to 60 cm, removable cover slabs, and finally the lane paving above. House drains tied in at the side wall through a small orifice; street mains converged into an out-fall drain outside the city. Compared with contemporaneous Mesopotamia, where drains were often open and unlined, the Indus system stands out as a closed, modular, maintenance-friendly network - a planning choice that protected public health and kept streets trafficable through the monsoon.",
            ],
            bullets: [
              "House drain: brick-lined chute connecting the bathing platform to the street drain.",
              "Street drain: 30-60 cm deep, covered with removable limestone or terracotta slabs.",
              "Gradient of 1:80 to 1:100 maintained gravity flow; sumps trapped grit and solids.",
              "Inspection holes at corners allowed municipal cleaning without dismantling covers.",
              "Joints sealed with gypsum mortar and bitumen where drains passed through walls.",
            ],
            codeExample: {
              language: "text",
              caption: "Vertical layers of an Indus street drain (top to base).",
              code: [
                "Layer 5 (top)    Lane paving - baked brick on edge",
                "Layer 4          Removable cover slabs (limestone or terracotta)",
                "Layer 3          Vertical brick side walls (30-60 cm)",
                "Layer 2          Brick invert in two courses",
                "Layer 1 (base)   Earthen bedding, rammed and graded 1:80",
              ].join("\n"),
            },
            diagram: {
              kind: "layers",
              title: "Indus street drain - vertical build-up",
              caption: "Each layer above is the top layer in the renderer; reading down is from lane to bedding.",
              layers: [
                { label: "Lane paving", note: "baked brick on edge" },
                { label: "Removable cover slabs", note: "limestone or terracotta" },
                { label: "Brick side walls", note: "30-60 cm deep" },
                { label: "Brick invert", note: "two courses" },
                { label: "Earthen bedding", note: "rammed, graded 1:80" },
              ],
            },
            callout: {
              type: "warning",
              title: "Common slip",
              body: "Students describe the drain as 'open at the top'. Indus street drains were covered with removable slabs - the very feature that made them maintenance-friendly. Always sketch the cover slabs; the vertical layering is the part RGPV marks most heavily.",
            },
            keyTerms: [
              { term: "Soak pit", definition: "Brick-lined pit that receives house wastewater and lets it percolate into the soil." },
              { term: "Out-fall drain", definition: "Main drain beyond the city wall that receives street drain discharge." },
              { term: "Inspection hole", definition: "Corner opening in a covered drain that admits cleaning tools without lifting the whole cover." },
            ],
            examQuestions: [
              {
                q: "Describe the drainage system of Mohenjo-daro. Include a sketch of a typical house-to-street drain section and list the engineering features that made it the most advanced ancient system.",
                marks: 7,
                outline: [
                  "Sketch the vertical layers: lane paving, cover slabs, side walls, brick invert, earthen bedding.",
                  "State the gradient 1:80 to 1:100 and explain gravity flow from house to out-fall.",
                  "Note the removable limestone or terracotta cover slabs and the inspection holes at corners.",
                  "Describe soak jars and cesspools that intercepted solids before the main channel.",
                  "Mention gypsum mortar and bitumen seals at wall penetrations for water-tightness.",
                  "Compare with contemporaneous Mesopotamia: Indus drains are closed, modular and maintenance-friendly.",
                  "Conclude with the public-health benefit of trafficable streets through the monsoon.",
                ],
              },
              {
                q: "What was the typical gradient of an Indus street drain?",
                marks: 2,
              },
              {
                q: "Name three materials used for water-tight joints in Indus drains.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Water supply of the Indus cities",
            body: [
              "Indus cities drew their water from wells, both public and private. Mohenjo-daro alone has yielded over 700 wells, often one for every few houses, sunk through brick rings into the water table 6 to 10 metres below. Brick ring wells remained the standard water source on the subcontinent for two millennia. The wells were lined with wedge-shaped fired bricks set in a circle, with the diameter narrowing as the well deepened; the technique prevented collapse and filtered silt. Some houses had their own well in a corner of the courtyard, while public wells stood at street intersections for those without private access.",
              "Bathing platforms in nearly every house discharged into the house drain through a jar-shaped trap that caught hair and solids. The Great Bath, fed by a large well in its eastern gallery and drained by a corbelled tunnel, used the same supply chain at monumental scale. Water was drawn by rope and bucket, carried in earthenware pots, and stored in jars lined with bitumen to prevent seepage. There is no evidence of pressurised pipes - the Indus engineers worked entirely with gravity - but the placement of wells on the highest ground ensured that drainage flowed away from the source and reduced contamination.",
              "Hygiene was engineered into the routine of every household. The bathroom was built against an outer wall with a sloped brick floor and a small drain opening cut through the wall; the opening was fitted with a terracotta socket to admit cleaning water. Streets carried no open sewage; covered drains kept traffic and pedestrians clear. The proportion of bathing rooms to houses approaches 1:1 at Mohenjo-daro, a ratio unmatched anywhere in the ancient world until the Roman thermae. The supply chain - well, bucket, storage jar, bathing platform, drain, street main, out-fall - was simple, gravity-driven, and universal.",
            ],
            bullets: [
              "Mohenjo-daro had ≈ 700 wells, roughly one for every 12 houses.",
              "Wells lined with wedge-shaped fired bricks; diameter narrowed with depth to prevent collapse.",
              "Great Bath fed by a well in its eastern gallery and drained by a corbelled tunnel.",
              "House bathing platforms sloped to a drain fitted with a terracotta socket.",
              "No pressurised pipes: the entire supply chain was gravity-driven from well to out-fall.",
            ],
            codeExample: {
              language: "text",
              caption: "Indus domestic water supply chain - source to out-fall.",
              code: [
                "Source      : Brick ring well (6-10 m deep)",
                "Lifting     : Rope + earthenware bucket",
                "Storage     : Bitumen-lined jar in courtyard",
                "Use         : Bathing platform (sloped brick floor)",
                "Trap        : Jar-shaped solid interceptor",
                "House drain : Brick chute through wall",
                "Street main : Covered drain, gradient 1:80",
                "Out-fall    : Discharge beyond city wall",
              ].join("\n"),
            },
            diagram: {
              kind: "pipeline",
              title: "Indus water supply pipeline",
              caption: "Source to out-fall - five stages, all gravity-driven.",
              stages: [
                { label: "Brick ring well" },
                { label: "Bucket lift" },
                { label: "Bitumen-lined storage jar" },
                { label: "Bathing platform" },
                { label: "Street drain + out-fall" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Sketch the supply chain as a five-stage pipeline and label the well depth (6-10 m), the bitumen seal and the 1:80 drain gradient. RGPV gives two marks for naming the Great Bath well and a third for the jar-trap that intercepted solids.",
            },
            keyTerms: [
              { term: "Brick ring well", definition: "Well lined with wedge-shaped fired bricks set in a narrowing circle to prevent collapse." },
              { term: "Bathing platform", definition: "Sloped brick floor against an outer wall discharging through a terracotta-socket drain." },
              { term: "Corbelled tunnel", definition: "Drain built by overlapping brick courses inward until they meet, used under the Great Bath." },
            ],
            examQuestions: [
              {
                q: "Explain the water supply system of Mohenjo-daro from source to out-fall. Draw a sketch of a domestic supply chain and describe the engineering of the Great Bath.",
                marks: 7,
                outline: [
                  "State the well count: ≈ 700 at Mohenjo-daro, one per roughly 12 houses.",
                  "Describe brick ring well construction: wedge-shaped fired bricks, diameter narrowing with depth.",
                  "Sketch the supply chain: well -> bucket -> bitumen-lined jar -> bathing platform -> house drain -> street main -> out-fall.",
                  "Note the jar-shaped trap that intercepted hair and solids before the house drain.",
                  "Describe the Great Bath: fed by a well in its eastern gallery, drained by a corbelled tunnel.",
                  "State that no pressurised pipes were used; the whole chain was gravity-driven.",
                  "Mention the 1:1 ratio of bathing rooms to houses, unmatched until Roman thermae.",
                ],
              },
              {
                q: "How many wells have been excavated at Mohenjo-daro?",
                marks: 2,
              },
              {
                q: "Describe the construction of a brick ring well and explain why the diameter narrows with depth.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Brick standardisation of the Indus Valley",
            body: [
              "The Indus brick is the most famous artefact of standardisation in the ancient world. Across hundreds of kilometres and several centuries, the ratio of length to width to height was held at 4:2:1 - a typical full brick measured 280 by 140 by 70 mm. Three modular sizes were used: full, three-quarter and half, all in the same 4:2:1 proportion, so a wall could be built up with bond patterns that placed every joint in a staggered line. Bricks were fired, not sun-dried, achieving a compressive strength that still stands after four millennia; their uniform red colour indicates controlled kiln temperatures around 800 to 900 degrees Celsius.",
              "Standardisation extended beyond dimensions. Mortar was a gypsum-based lime plaster, occasionally supplemented with bitumen in wet locations. Brick surfaces were lightly struck to provide a key for plaster. Bonding followed the English bond rule (long-and-short face alternation) centuries before it was named in Europe. Coursing heights were kept at one brick plus one mortar joint, giving a uniform 80 to 90 mm lift per course. Surveys at Harappa, Mohenjo-daro, Kalibangan and Lothal show less than 5 per cent dimensional variation between bricks from different sites, a remarkable tolerance for any period.",
              "The benefits of this system were structural, economic and logistical. Structurally, the 4:2:1 ratio lets a brick be split cleanly into halves or quarters for infill, while the bonded overlap distributes load evenly. Economically, the same kiln could supply a house, a drain and a city wall, simplifying procurement. Logistically, the small brick size suited head-load transport - workers carried bricks in baskets on their heads, and the standard weight (about 4.5 kg) was tuned to human ergonomics. The pyramid of brick sizes from full down to three-quarter and half reflects a hierarchy of purpose, with the smaller sizes filling bond gaps at corners and jambs.",
            ],
            bullets: [
              "Standard ratio 4:2:1 (L:W:H); full brick ≈ 280 x 140 x 70 mm.",
              "Three modular sizes: full, three-quarter, half - all in the same ratio.",
              "Fired bricks (not sun-dried) at 800-900 degrees Celsius; reddish colour from controlled kiln.",
              "Gypsum-lime mortar with bitumen in wet locations; English bond coursing.",
              "Course height of one brick + one mortar joint ≈ 80-90 mm; < 5 per cent variation between sites.",
            ],
            codeExample: {
              language: "text",
              caption: "Indus brick module pyramid - largest to smallest.",
              code: [
                "Full brick        280 x 140 x 70 mm   (ratio 4:2:1)",
                "Three-quarter     210 x 140 x 70 mm   (length 3/4 of full)",
                "Half brick        140 x 140 x 70 mm   (length 1/2 of full)",
                "Quarter brick      70 x 140 x 70 mm   (length 1/4 of full)",
              ].join("\n"),
            },
            diagram: {
              kind: "pyramid",
              title: "Indus brick module hierarchy",
              caption: "Narrowest tier on top: from full brick down to quarter, all in 4:2:1 ratio.",
              tiers: [
                { label: "Quarter brick (70 mm)", note: "infill at jambs" },
                { label: "Half brick (140 mm)", note: "bond closure" },
                { label: "Three-quarter (210 mm)", note: "corner return" },
                { label: "Full brick (280 mm)", note: "main coursing" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always state the 4:2:1 ratio and the typical dimensions (280 x 140 x 70 mm). RGPV expects the firing temperature range (800-900 degrees Celsius) and one mortar type (gypsum-lime). Without these the answer drops from 7 marks to 4.",
            },
            keyTerms: [
              { term: "Modular brick", definition: "Brick proportioned in the 4:2:1 ratio so that halves, three-quarters and quarters all fit a single bond pattern." },
              { term: "English bond", definition: "Brickwork pattern alternating stretcher and header courses to distribute load evenly." },
              { term: "Gypsum-lime mortar", definition: "Bind material used between Indus bricks, with bitumen added in wet locations." },
            ],
            examQuestions: [
              {
                q: "Describe the brick standardisation of the Indus Valley Civilisation. Give the modular sizes, ratio, bond pattern and mortar, and explain why the system was both structurally and economically efficient.",
                marks: 7,
                outline: [
                  "State the 4:2:1 ratio and the full-brick dimensions 280 x 140 x 70 mm.",
                  "List the four modular sizes: full, three-quarter, half, quarter - all in 4:2:1.",
                  "Mention firing at 800-900 degrees Celsius with a uniform red colour from controlled kilns.",
                  "Identify the mortar as gypsum-lime with bitumen added in wet locations.",
                  "Name the English bond (alternating stretcher and header courses).",
                  "Explain the structural benefit: split cleanly into halves/quarters; bonded overlap distributes load.",
                  "Explain the economic and logistical benefit: same kiln serves house, drain and wall; head-load transport at ≈ 4.5 kg per brick.",
                ],
              },
              {
                q: "State the length-width-height ratio of the standard Indus brick.",
                marks: 2,
              },
              {
                q: "Why was the diameter of an Indus well narrowed with depth? Relate the answer to brick module sizes.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Vedic-period construction",
            body: [
              "Vedic-period construction (about 1500 to 500 BCE) stood in sharp contrast to the urban Indus tradition. The early Vedic people were semi-nomadic pastoralists whose settlements - known as gramas - consisted of timber and thatch huts arranged around a cattle pen. Houses were circular or rectangular wattle-and-daub structures: a timber frame of posts and beams was plastered inside and out with mud mixed with straw, and roofed with grass thatch or bamboo matting. There were no streets or drains; the unit of planning was the family homestead. The Sama Veda and later texts describe the vedi - a ritual altar of brick or earth - as the most carefully dimensioned structure of the period.",
              "The Vedic altar is the period's engineering peak. For the Agnicayana ritual, the vedi was built in five layers of specially fired bricks totalling 1,000 to 1,008 units, arranged in a falcon-shaped plan with a square tail and outstretched wings. The Satapatha Brahmana specifies brick dimensions in angulas (≈ 1.8 cm each) and demands that each layer's area be exactly equal, requiring progressively larger bricks in upper layers to compensate for the smaller central cells. This was applied geometry: the Vedic priests used the Sulba-sutras, appendices that gave construction rules and approximate doubling and squaring of areas - the world's earliest statement of what we now call the Pythagorean relation.",
              "Secular construction evolved over the period. By the late Vedic phase, kings lived in assembly halls (sabha) and longhouses built of dressed timber posts on stone foundations, with mud-brick walls and tiled roofs. Towns emerged in the Gangetic plain around 600 BCE, with the gramas growing into nigamas (market towns) and later fortified capitals. The compass directions were ritually fixed using the gnomon (sanku) and the shadow method - the same method used today to find true north. Vedic construction thus introduced three engineering tools that survived into historic India: standardised fired brick, geometric methods for area and proportion, and the alignment of structures to cardinal directions using solar observation.",
            ],
            bullets: [
              "Gramas were semi-nomadic settlements of timber-and-thatch wattle-and-daub huts around a cattle pen.",
              "Agnicayana altar: 5 layers, ≈ 1,000-1,008 fired bricks, in falcon shape with square tail and wings.",
              "Satapatha Brahmana specified brick dimensions in angulas (≈ 1.8 cm) and equal layer areas.",
              "Sulba-sutras gave the world's earliest statement of the Pythagorean relation for right triangles.",
              "Gnomon (sanku) + shadow method fixed cardinal directions - still used for true north today.",
            ],
            table: {
              caption: "Indus urbanism vs Vedic construction - key contrasts.",
              headers: ["Aspect", "Indus Valley", "Vedic period"],
              rows: [
                ["Settlement type", "Grid-planned city", "Grama of huts"],
                ["Material", "Fired brick + gypsum mortar", "Timber, mud, thatch"],
                ["Public works", "Drains, wells, bath", "Altar (vedi), sabha"],
                ["Mathematics", "Modular 4:2:1 ratio", "Sulba geometry, Pythagorean"],
                ["Heritage", "Urban hygiene", "Cardinal alignment via gnomon"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Indus urbanism vs Vedic construction",
              caption: "Two parallel traditions - one city-bound, one ritual-bound.",
              left: {
                heading: "Indus Valley",
                items: [
                  "Grid-planned city, fired brick",
                  "Covered drains and ring wells",
                  "4:2:1 modular brick system",
                  "Great Bath and granary",
                  "Authority-driven civic order",
                ],
              },
              right: {
                heading: "Vedic period",
                items: [
                  "Grama of huts, wattle-and-daub",
                  "Vedi altar with 5 brick layers",
                  "Sulba-sutra geometry",
                  "Gnomon alignment to true north",
                  "Ritual-driven proportions",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "Pair the two traditions as 'Indus: city of brick, Vedic: altar of geometry'. The contrast itself is a popular 7-mark question - sketch a small grid for Indus and a small falcon altar for Vedic, then list three items each.",
            },
            keyTerms: [
              { term: "Grama", definition: "Semi-nomadic Vedic settlement of timber-and-thatch huts arranged around a cattle pen." },
              { term: "Vedi", definition: "Ritual altar of fired brick, built in five layers for the Agnicayana rite." },
              { term: "Sulba-sutras", definition: "Vedic appendices giving construction rules and an early statement of the Pythagorean relation." },
            ],
            examQuestions: [
              {
                q: "Compare Indus Valley urbanism with Vedic-period construction. Cover settlement type, material, public works, mathematics and ritual alignment, and explain which elements of Vedic engineering survived into historic India.",
                marks: 7,
                outline: [
                  "Settlement: grid-planned Indus city vs Vedic grama of huts around a cattle pen.",
                  "Material: fired Indus brick with gypsum mortar vs Vedic timber, mud and thatch.",
                  "Public works: Indus drains, wells and Great Bath vs Vedic vedi altar and sabha.",
                  "Mathematics: 4:2:1 modular brick vs Sulba-sutra geometry and Pythagorean relation.",
                  "Ritual alignment: Indus cardinal grid vs Vedic gnomon-and-shadow method.",
                  "Note the Agnicayana altar: 5 layers, ≈ 1,000 bricks, falcon shape with equal areas.",
                  "Conclude with the surviving Vedic tools: fired brick, geometric proportion, solar cardinal alignment.",
                ],
              },
              {
                q: "What was the vedi and how many brick layers did the Agnicayana altar contain?",
                marks: 2,
              },
              {
                q: "Explain the gnomon-and-shadow method used in Vedic construction to fix cardinal directions.",
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
      title: "Mauryan and Gupta Era",
      summary:
        "From Ashoka's monolithic sandstone pillars and the Sanchi stupa's worship cycle through Buddhist rock-cut Chaitya halls and the Kailasa top-down excavation to the first free-standing Gupta temples and the 7.2 m iron pillar of Delhi - a 1,000-year arc of structural and metallurgical innovation.",
      chapter: {
        number: "02",
        title: "Mauryan and Gupta Engineering",
        intro:
          "Unit II opens in the third century BCE with Ashoka's monolithic pillars - polished, dowelled and crowned with carved animal capitals. It walks through the Sanchi stupa, the Buddhist rock-cut Chaitya halls and Viharas, the Hindu and Jain rock-cut tradition culminating in the Kailasa temple at Ellora, and finally the Gupta temples from Temple 17 Sanchi to the Deogarh Dashavatara, alongside the iron pillar of Delhi - a chemistry marvel that has not rusted in 1,600 years.",
        inOneBreath:
          "Ashokan pillars are monolithic sandstone shafts 12-15 m tall, joined to their capital by a copper dowel in molten lead and polished with oil, iron oxide and leather; the Sanchi stupa is a solid hemispherical dome 16.5 m across with a harmika and three-tier chhatra, worshipped by clockwise circumambulation at two levels; rock-cut architecture moved from face-in Mauryan caves to top-down Hindu excavation (Kailasa, 30 m high, 200,000 tonnes removed); Gupta temples evolved from flat-roofed square shrine to curved shikhara with ambulatory; and the Delhi iron pillar of 7.2 m and 6 tonnes has stood 1,600 years unrusted thanks to misawite film from 0.1 per cent phosphorus.",
        sections: [
          {
            number: "2.1",
            title: "Ashokan pillars",
            body: [
              "The Ashokan pillars, erected between roughly 268 and 232 BCE by the Mauryan emperor Ashoka, are monolithic sandstone shafts weighing up to 50 tonnes and standing 12 to 15 metres tall. Quarried at Chunar near Varanasi, the shafts were dragged on rollers, polished to a mirror finish that still survives, and erected at sites from Sanchi to Sarnath to Lauria Nandangarh. Each pillar carries edicts in Brahmi script advocating dharma, and is crowned by a capital - typically a single carved animal (lion, elephant, bull, horse) standing on a bell-shaped abacus derived from the Persian lotus-and-bell capital. The Sarnath lion capital is now the national emblem of India.",
              "The engineering of these pillars is a study in monolithic design. The shaft is a single piece of sandstone with a slightly tapering profile, the lower diameter about 0.8 metres and the upper about 0.6 metres. The base is set into a stone socket in the ground without mortar; stability comes from the shaft's own weight and the broad, flat base distributing load on rammed earth. The capital is a separate piece joined to the shaft by a copper dowel set in molten lead - a clever detail that allowed transport in two halves and a weather-tight joint that has survived 2,200 monsoons. The polish, called the Mauryan polish, was achieved with a mixture of oil and iron oxide rubbed with leather.",
              "The erection technique is the most contested part of the engineering. Two main theories compete: ramp-and-roller, where the shaft was hauled up an earthen ramp until it slid into the socket; and counterweight-tilt, where one end was anchored and the other raised with ropes over an A-frame until vertical. Each pillar also had a design choice to make: whether to use the Sarnath-style four-lion capital, the Sanchi-style single lion, the Rampurva bull, or the Sankissa elephant. The choice appears to have been determined by the local significance of the animal to the site - lion for Buddhist sites of the Buddha's first sermon, bull for agrarian regions, elephant for the Buddha's conception site.",
            ],
            bullets: [
              "Monolithic sandstone shafts 12-15 m tall, weighing up to 50 tonnes, quarried at Chunar.",
              "Mauryan polish: mirror finish achieved with oil, iron oxide and leather.",
              "Capital joined to shaft by a copper dowel set in molten lead.",
              "Sarnath lion capital - four lions back-to-back - is India's national emblem.",
              "Erection: ramp-and-roller or counterweight-tilt over an A-frame.",
            ],
            codeExample: {
              language: "text",
              caption: "Anatomy of an Ashokan pillar (top to base).",
              code: [
                "Capital       : single carved animal on a bell-shaped abacus",
                "Dowel joint   : copper dowel in molten lead",
                "Shaft         : monolithic sandstone, taper 0.8 m -> 0.6 m",
                "Polish        : oil + iron oxide + leather buffing",
                "Base          : broad flat foot in a stone socket, no mortar",
                "Foundation    : rammed earth pad below the socket",
              ].join("\n"),
            },
            diagram: {
              kind: "fork",
              title: "Capital design choices for Ashokan pillars",
              caption: "One shaft, four crowns - the animal chosen matched the significance of the site.",
              start: "Ashokan shaft + abacus",
              branches: [
                { label: "Four-lion (Sarnath)", outcome: "Buddhist site of the first sermon", good: true },
                { label: "Single lion (Sanchi/Vaisali)", outcome: "Buddhist relic shrine", good: true },
                { label: "Bull (Rampurva)", outcome: "Agrarian region", good: true },
                { label: "Elephant (Sankissa)", outcome: "Buddha's conception site", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked about Ashokan pillars, name four sites (Sarnath, Sanchi, Rampurva, Sankissa), the dowel-and-lead joint, and the Mauryan polish recipe. RGPV gives two marks for the Sarnath lion capital and the national-emblem link, which most answers omit.",
            },
            keyTerms: [
              { term: "Monolithic shaft", definition: "Single stone column, taper 0.8 m to 0.6 m, weighing up to 50 tonnes." },
              { term: "Mauryan polish", definition: "Mirror finish on sandstone achieved with oil, iron oxide and leather." },
              { term: "Bell-shaped abacus", definition: "Persian-derived capital component carrying the carved animal crown." },
            ],
            examQuestions: [
              {
                q: "Describe the engineering of an Ashokan pillar from quarry to erection. Include the shaft dimensions, joint detail, polish recipe and capital design choices.",
                marks: 7,
                outline: [
                  "State dimensions: monolithic shaft 12-15 m tall, lower diameter 0.8 m tapering to 0.6 m, weight up to 50 tonnes.",
                  "Identify the quarry at Chunar near Varanasi and transport by rollers.",
                  "Describe the copper dowel set in molten lead that joins capital to shaft.",
                  "Give the Mauryan polish recipe: oil, iron oxide and leather buffing.",
                  "Explain the foundation: broad flat foot in a stone socket on rammed earth, no mortar.",
                  "Name the four capital choices: four-lion (Sarnath), single lion (Sanchi), bull (Rampurva), elephant (Sankissa).",
                  "State the erection theories: ramp-and-roller or counterweight-tilt over an A-frame.",
                ],
              },
              {
                q: "How was the capital joined to the shaft of an Ashokan pillar?",
                marks: 2,
              },
              {
                q: "Name four Ashokan pillar sites and the animal carved at each.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "The Great Stupa at Sanchi",
            body: [
              "The Great Stupa at Sanchi, originally commissioned by Ashoka in the third century BCE and enlarged in stone by the Shungas in the second century BCE, is the most complete surviving Buddhist stupa. The dome (anda, 'egg') is a solid hemisphere of brick and rubble faced with dressed sandstone, 16.5 metres in diameter at the base and originally about 11 metres high. It sits on a double platform (medhi) accessed by a double staircase, and is encircled by a processional path (pradakshina-patha) enclosed by a stone railing (vedika) with four carved gateways (toranas) at the cardinal points. The whole ensemble sits on a hilltop near Vidisha in Madhya Pradesh.",
              "The engineering of the dome is one of controlled mass and skin. The core is earth and rubble with a brick framework, faced with a thick layer of sandstone plaster keyed to the core by stone ribs. Around the dome's shoulder runs a stone harmika - a square railing representing the abode of the gods - and from its centre rises a three-tier stone umbrella (chhatra) on a central post. The post passes through the dome into a foundation box at the centre of the medhi, anchoring the umbrella against wind. Relic caskets were placed in a small chamber at the dome's centre, accessible only through a narrow shaft from the top - a deliberate choice to make the relic both central and unreachable.",
              "Worship was circumambulatory. The devotee entered through one of the four toranas, walked clockwise around the pradakshina-patha, ascended the double stair to the upper circumambulatory at the dome's base, and completed a second clockwise circuit there. The cycle - enter, circumambulate lower, ascend, circumambulate upper, exit - mirrors the symbolic ascent of the devotee toward enlightenment. The toranas themselves are marvels of ivory-like stone carving, mortised and tenoned without mortar. The whole stupa is therefore an exercise in two engineering disciplines: mass-and-skin dome construction, and the planning of a processional route that turns a static object into a moving ritual.",
            ],
            bullets: [
              "Great Stupa Sanchi: solid hemispherical brick-and-rubble dome, 16.5 m diameter, ≈ 11 m high.",
              "Dome faced with sandstone plaster keyed by stone ribs to a brick-and-rubble core.",
              "Harmika (square railing) + three-tier chhatra (umbrella) on a central post anchored to a foundation box.",
              "Four toranas at cardinal points; double staircase to upper pradakshina-patha.",
              "Worship cycle: enter torana - circumambulate lower - ascend - circumambulate upper - exit.",
            ],
            table: {
              caption: "Components of the Great Stupa at Sanchi.",
              headers: ["Component", "Location", "Function"],
              rows: [
                ["Anda (dome)", "Above medhi", "Holds relic casket in central chamber"],
                ["Medhi", "Around dome base", "Raised platform, double stair access"],
                ["Pradakshina-patha", "Enclosed by vedika", "Clockwise circumambulation"],
                ["Torana", "Four cardinal gates", "Entry and carved iconography"],
                ["Harmika + chhatra", "Top of dome", "Square railing + three-tier umbrella"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Sanchi stupa worship cycle",
              caption: "The four-step clockwise circumambulation that turns a static dome into a ritual route.",
              steps: [
                { label: "Enter torana" },
                { label: "Lower pradakshina (clockwise)" },
                { label: "Ascend double stair" },
                { label: "Upper pradakshina (clockwise)" },
                { label: "Exit through opposite torana" },
              ],
            },
            callout: {
              type: "warning",
              title: "Common slip",
              body: "Students draw the stupa as a perfect hemisphere without the harmika or chhatra. Always sketch the square harmika and the three-tier umbrella on top - they are the parts that mark the relic axis, and RGPV awards two marks for them.",
            },
            keyTerms: [
              { term: "Anda", definition: "The hemispherical dome of a stupa, holding the relic casket in a central chamber." },
              { term: "Pradakshina-patha", definition: "Clockwise processional path around a stupa, enclosed by a railing." },
              { term: "Harmika", definition: "Square railing on the dome's shoulder, marking the relic axis." },
            ],
            examQuestions: [
              {
                q: "Describe the Great Stupa at Sanchi with a labelled sketch. Cover the dome, medhi, pradakshina-patha, toranas, harmika and chhatra, and explain the worship cycle.",
                marks: 7,
                outline: [
                  "Sketch the dome (anda), medhi, vedika railing, four toranas, harmika and three-tier chhatra.",
                  "State the dome dimensions: 16.5 m diameter at base, ≈ 11 m high.",
                  "Describe the mass-and-skin dome: brick-and-rubble core, sandstone plaster keyed by stone ribs.",
                  "Explain the relic casket in a central chamber reachable only by a narrow top shaft.",
                  "Describe the harmika + three-tier chhatra on a central post anchored to a foundation box.",
                  "Name the four toranas at the cardinal points and the double staircase to the upper path.",
                  "Trace the worship cycle: enter torana, lower pradakshina, ascend, upper pradakshina, exit.",
                ],
              },
              {
                q: "What is the diameter of the Sanchi stupa dome at the base?",
                marks: 2,
              },
              {
                q: "How is the relic casket protected inside the stupa? Explain the central post and foundation box.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Rock-cut architecture",
            body: [
              "Indian rock-cut architecture began in the Mauryan period with the Barabar caves in Bihar, dedicated by Ashoka and his grandson Dasharatha to Ajivika ascetics around 250 BCE. These four caves - Lomas Rishi, Sudama, Karan Chaupar and Visvakarma - are small, highly polished rectangular halls cut into a granite hillside, each with an elephant-shaped doorway echoing the entrance of a wooden predecessor. The technique was subtractive: the mason carved inward from a vertical face, removing rock to leave a chamber, and polished the interior with the same Mauryan technique used for the pillars. The Barabar caves established the discipline that would later produce the Chaitya halls and Viharas of the Buddhists.",
              "The Buddhist rock-cut tradition flowered from the second century BCE to the sixth century CE. Chaitya halls, such as those at Karle, Bhaja and Bedsa in the Western Ghats, are long apsidal prayer halls cut into basalt, with a vaulted ceiling, side aisles separated by columns, and a small stupa at the apsidal end. Viharas are square monastic cells around a central hall. At Ajanta, 30 caves were cut into a horseshoe cliff between the second and fifth centuries CE; the famous painted interiors used tempera on a mud-and-lime plaster keyed by a rough chiselled surface. The engineering feat is the precision of the chisel work: ceiling curves, column capitals and doorway profiles were carved without error from a single rock mass, working from a master template.",
              "The Hindu and Jain rock-cut tradition followed from the sixth century CE onward. The Kailasa temple at Ellora, cut top-down from a single basalt outcrop under the Rashtrakuta king Krishna I around 756-773 CE, is the largest monolithic excavation in the world: a freestanding temple 30 metres high, carved with all its towers, pillars, sculptures and court walls by removing some 200,000 tonnes of rock. The technique is unique - excavation begins at the roof peak and works downward, leaving the temple as a positive form in a deep trench. The Mamallapuram rathas of the Pallavas, five monolithic temples carved from pink granite boulders, are smaller cousins that demonstrate the same subtractive discipline applied to free-standing rock.",
            ],
            bullets: [
              "Barabar caves (Bihar): Mauryan-period granite chambers, polished interior, ≈ 250 BCE.",
              "Chaitya hall: apsidal prayer hall with vaulted ceiling, side aisles and a stupa at the apse.",
              "Vihara: square monastic hall surrounded by cells; Ajanta viharas have tempera wall paintings.",
              "Kailasa temple Ellora: monolithic top-down excavation, 30 m high, ≈ 200,000 tonnes removed.",
              "Mamallapuram rathas: five monolithic Pallava temples carved from free-standing boulders.",
            ],
            codeExample: {
              language: "text",
              caption: "Rock-cut excavation: three methods, three eras.",
              code: [
                "Face-in (Mauryan and Buddhist):",
                "  Start at vertical face, carve inward.",
                "  Used for: Chaitya halls, Viharas, Barabar caves.",
                "",
                "Top-down (Hindu, Rashtrakuta):",
                "  Start at hill peak, carve downward.",
                "  Used for: Kailasa temple Ellora.",
                "",
                "Free-standing (Pallava):",
                "  Carve from a surface boulder, no surrounding rock.",
                "  Used for: Mamallapuram rathas.",
              ].join("\n"),
            },
            diagram: {
              kind: "layers",
              title: "Rock-cut cave architecture - layers of a Chaitya hall",
              caption: "Index 0 is the top layer in the renderer; the rock-face is the highest visible plane.",
              layers: [
                { label: "Vaulted ceiling", note: "barrel vault, chiselled smooth" },
                { label: "Side columns + aisles", note: "separating nave from aisles" },
                { label: "Central nave", note: "long apsidal prayer hall" },
                { label: "Apsidal stupa", note: "focus of devotion at far end" },
                { label: "Rock-mass floor", note: "polished basalt, water-drained" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "Three excavation methods, three eras: face-in for Mauryan/Buddhist (Barabar, Ajanta), top-down for Hindu (Kailasa Ellora), free-standing for Pallava (Mamallapuram). State the method before naming the example - RGPV awards the method mark first.",
            },
            keyTerms: [
              { term: "Chaitya hall", definition: "Apsidal Buddhist prayer hall cut into rock, with a stupa at the apse end." },
              { term: "Top-down excavation", definition: "Method of carving a temple from the roof peak downward into a single rock mass." },
              { term: "Vihara", definition: "Square Buddhist monastery cut into rock, with cells around a central hall." },
            ],
            examQuestions: [
              {
                q: "Explain the development of Indian rock-cut architecture from the Barabar caves to the Kailasa temple. Cover the three excavation methods, two examples each, and the engineering of a Chaitya hall.",
                marks: 7,
                outline: [
                  "Begin with the Barabar caves (Bihar, ≈ 250 BCE): face-in method, polished granite, Mauryan period.",
                  "Describe the Buddhist tradition: Chaitya halls at Karle, Bhaja and Bedsa with vaulted ceiling and apsidal stupa.",
                  "Note Viharas at Ajanta with tempera paintings on mud-and-lime plaster keyed by chiselled surface.",
                  "Explain the top-down Hindu method at Kailasa Ellora (Krishna I, 756-773 CE), 30 m high, 200,000 tonnes removed.",
                  "Mention the free-standing Pallava rathas at Mamallapuram.",
                  "Detail the Chaitya hall layers: vaulted ceiling, side columns, central nave, apsidal stupa, rock-mass floor.",
                  "Conclude that all three methods are subtractive, working from a master template without error.",
                ],
              },
              {
                q: "Which Rashtrakuta king built the Kailasa temple at Ellora?",
                marks: 2,
              },
              {
                q: "Describe the subtractive excavation of a Chaitya hall from a basalt cliff face.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Gupta temples",
            body: [
              "The Gupta period (about 320-550 CE) is the watershed when free-standing Hindu temples emerged as a distinct structural type. Earlier shrines had been temporary or rock-cut; the Guptas built the first dressed-stone temples that have survived. The earliest, such as Temple 17 at Sanchi, is a flat-roofed square shrine with a plain masonry wall and a porch supported on four pillars. By the mid-fifth century, temples at Tigawa, Bhitargaon and Eran had grown a small superstructure (shikhara) above the sanctum. The Bhitargaon brick temple near Kanpur is the earliest surviving complete Gupta temple with a curved shikhara, terracotta panels and a flat-roofed porch.",
              "Gupta temple architecture is the foundation of every later north Indian temple. The plan is a square sanctum (garbhagriha) holding the cult image, preceded by a small pillared porch (mandapa). The superstructure evolved from a flat slab through a stepped pyramid (as at Nachna) to a curved shikhara (as at Bhitargaon). Walls were dressed stone or brick, plastered and decorated with terracotta or stone panels showing Vishnu, Shiva, Durga and scenes from the Ramayana. The Dashavatara temple at Deogarh, attributed to the late Gupta period, is the earliest known temple with a square sanctum surrounded by an ambulatory path (pradakshina) and a doorway flanked by river-goddess panels.",
              "The structural engineering of the Gupta temples introduced three durable innovations. First, the sanctum was built with a flat stone slab roof, supported by stone beams spanning the small square chamber; this avoided the risk of a corbelled dome and let later builders pile a shikhara above. Second, the porch used four free-standing columns with a stone lintel - the same post-and-lintel system that carried all Indian temple architecture until steel and RCC arrived. Third, the foundations were deep, dressed-stone pads that distributed the column loads onto rammed earth; at Deogarh the base is a tall platform (pitha) that lifts the temple above flood level. These three moves define a Hindu temple for the next 1,500 years.",
            ],
            bullets: [
              "Temple 17 Sanchi: flat-roofed square shrine + pillared porch, earliest surviving Gupta temple.",
              "Bhitargaon brick temple: curved shikhara, terracotta panels, near Kanpur.",
              "Garbhagriha (sanctum) + mandapa (porch) plan: foundation of all later north Indian temples.",
              "Post-and-lintel system: four free-standing columns with stone lintels carry the porch.",
              "Pitha platform raises temple above flood level (Deogarh); deep stone pads distribute loads.",
            ],
            table: {
              caption: "Four Gupta temples and their key features.",
              headers: ["Temple", "Material", "Roof/Superstructure", "Plan"],
              rows: [
                ["Temple 17, Sanchi", "Dressed stone", "Flat slab roof", "Square sanctum + porch"],
                ["Tigawa", "Stone", "Flat + small shikhara", "Square sanctum + porch"],
                ["Bhitargaon", "Brick + terracotta", "Curved shikhara", "Square sanctum + porch"],
                ["Deogarh Dashavatara", "Stone", "Curved shikhara", "Square sanctum + ambulatory"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Gupta temple evolution - 2x2 of plan vs roof",
              caption: "Quadrant order: top-left, top-right, bottom-left, bottom-right.",
              axes: { x: "Plan complexity (simple square to ambulatory)", y: "Roof evolution (flat to curved shikhara)" },
              quadrants: [
                { label: "Flat roof, simple square", note: "Temple 17 Sanchi (early 5th c.)" },
                { label: "Flat roof, ambulatory", note: "Tigawa (mid 5th c.)" },
                { label: "Curved shikhara, simple square", note: "Bhitargaon (mid 5th c.)" },
                { label: "Curved shikhara, ambulatory", note: "Deogarh Dashavatara (late 5th c.)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the 2x2 matrix of plan versus roof and place each of the four temples in its quadrant. RGPV gives three marks for the matrix itself and one each for naming the temple in each cell - far more efficient than a paragraph per temple.",
            },
            keyTerms: [
              { term: "Garbhagriha", definition: "The inner sanctum of a Hindu temple, a square chamber holding the cult image." },
              { term: "Shikhara", definition: "The superstructure above a temple sanctum, evolving from flat slab to curved tower in the Gupta period." },
              { term: "Mandapa", definition: "The pillared porch preceding the sanctum of a Hindu temple." },
            ],
            examQuestions: [
              {
                q: "Describe the evolution of the Gupta temple from Temple 17 Sanchi to the Deogarh Dashavatara temple. Use a 2x2 matrix of plan versus roof, and explain the three structural innovations of the period.",
                marks: 7,
                outline: [
                  "Set up the 2x2 matrix: x-axis plan (simple square vs ambulatory), y-axis roof (flat vs curved shikhara).",
                  "Place Temple 17 Sanchi in the flat-roof, simple-square quadrant (early 5th century).",
                  "Place Tigawa in the flat-roof, ambulatory quadrant (mid 5th century).",
                  "Place Bhitargaon in the curved-shikhara, simple-square quadrant (mid 5th century, brick).",
                  "Place Deogarh Dashavatara in the curved-shikhara, ambulatory quadrant (late 5th century).",
                  "Explain innovation 1: flat stone slab roof on stone beams over the sanctum allows a shikhara above.",
                  "Explain innovation 2: post-and-lintel porch with four free-standing columns on a stone lintel; innovation 3: deep dressed-stone foundation pads with a pitha platform at Deogarh.",
                ],
              },
              {
                q: "Where is the Bhitargaon temple and what is its principal building material?",
                marks: 2,
              },
              {
                q: "Explain the post-and-lintel system used in the porch of a Gupta temple.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Mauryan and Gupta metallurgy",
            body: [
              "Mauryan and Gupta metallurgy produced some of the largest and most durable metal objects in the ancient world. The iron pillar of Delhi, standing 7.2 metres tall and weighing over 6 tonnes, was erected in the fourth century CE, probably during the Gupta period, in the courtyard of the Quwwat-ul-Islam mosque. Its surface bears a Sanskrit inscription to Vishnu and the name of King Chandra. The pillar has stood in the open for 1,600 years without rusting, owing to a thin film of misawite - a compound of iron, oxygen and hydrogen - that formed naturally in the presence of phosphorus in the iron and now protects the underlying metal from further corrosion.",
              "The pillar was forged in a single piece from a bloom of wrought iron heated in a charcoal furnace. Blacksmiths hammered the bloom into a cylindrical billet, then drew it out by repeated heating and hammering into the final 7.2-metre shaft, building it up by forge-welding short sections end-to-end. The forge-weld technique is visible in horizontal lines on the surface. The chemistry of the pillar is just as remarkable: it is 99.7 per cent pure wrought iron with about 0.1 per cent phosphorus, which reacts with atmospheric moisture to form a protective phosphate layer rather than porous rust. The high purity prevented the formation of galvanic cells that would have accelerated corrosion.",
              "Gupta metallurgy extended beyond iron. Copper and bronze were cast for ritual vessels, statues and coins by the lost-wax (cire perdue) method, in which a wax model is coated in clay, the wax melted out and molten metal poured into the cavity. The Sultanganj Buddha, a 2-metre tall copper statue from the seventh century, was cast by this method in a single pour - a feat of furnace and mould engineering. Zinc was smelted at Zawar in Rajasthan from the ninth century, producing the brass for which India became famous. Iron was also used for structural beams - the Konark Sun Temple (13th century) had iron beams spanning 10 metres - and for cannon in the medieval period. The skills formed a hierarchy, from the master founder at the top to the smelter and the smith at the base.",
            ],
            bullets: [
              "Iron pillar Delhi: 7.2 m tall, > 6 tonnes, ≈ 99.7% pure wrought iron with 0.1% phosphorus.",
              "Misawite film (iron-oxygen-hydrogen + phosphate) protects the pillar from rusting for 1,600 years.",
              "Forge-welding: short billets drawn out by repeated heating and hammering into the 7.2 m shaft.",
              "Lost-wax (cire perdue) casting used for copper statues: Sultanganj Buddha (7th c., 2 m tall).",
              "Zinc smelting at Zawar (Rajasthan) from 9th century produced the brass India became famous for.",
            ],
            codeExample: {
              language: "text",
              caption: "Iron pillar of Delhi - chemistry summary.",
              code: [
                "Element           Content         Effect",
                "------------------------------------------------",
                "Iron (Fe)         ≈ 99.7%         Base metal",
                "Phosphorus (P)    ≈ 0.10%         Forms protective phosphate film",
                "Carbon (C)        < 0.05%         Low carbon = wrought (not cast) iron",
                "Sulphur (S)       trace           No significant effect",
                "Slag inclusions   visible         From forge-welding; not detrimental",
              ].join("\n"),
            },
            diagram: {
              kind: "pyramid",
              title: "Mauryan and Gupta metallurgical skill hierarchy",
              caption: "Master founder at the apex, smelter and smith at the base - the skill levels behind Gupta metalwork.",
              tiers: [
                { label: "Master founder (cire perdue)", note: "Sultanganj Buddha scale" },
                { label: "Master smith (forge-weld)", note: "Iron pillar scale" },
                { label: "Caster (statues, coins, vessels)", note: "Lost-wax series work" },
                { label: "Smelter (iron, copper, zinc)", note: "Charcoal furnaces, Zawar zinc" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "RGPV expects three named metals (iron, copper, zinc) and one named example each (Delhi pillar, Sultanganj Buddha, Zawar zinc). The chemistry of the pillar (99.7% Fe, 0.1% P, misawite film) is the part that earns the last two marks.",
            },
            keyTerms: [
              { term: "Misawite", definition: "Iron-oxygen-hydrogen film with phosphate that protects the Delhi iron pillar from corrosion." },
              { term: "Forge-welding", definition: "Joining of iron billets by repeated heating and hammering into a single shaft." },
              { term: "Lost-wax casting", definition: "Method in which a wax model is coated in clay, melted out, and replaced by molten metal." },
            ],
            examQuestions: [
              {
                q: "Explain the manufacturing technique and corrosion resistance of the iron pillar of Delhi. Cover the chemistry, forge-welding, and the role of phosphorus, and place Gupta metallurgy in the wider context of copper, zinc and lost-wax casting.",
                marks: 7,
                outline: [
                  "State the dimensions: 7.2 m tall, > 6 tonnes, erected 4th c. CE, probably Gupta.",
                  "Describe the chemistry: ≈ 99.7% pure wrought iron with 0.1% phosphorus, low carbon.",
                  "Explain the misawite film (iron-oxygen-hydrogen + phosphate) that prevents rusting for 1,600 years.",
                  "Describe forge-welding: bloom heated in a charcoal furnace, hammered to a billet, drawn out into the 7.2 m shaft by joining sections.",
                  "Note that high purity prevented galvanic cells and the porous rust they cause.",
                  "Place the pillar in the wider Gupta context: copper statues by lost-wax (Sultanganj Buddha).",
                  "Mention zinc smelting at Zawar (Rajasthan) from the 9th century producing brass.",
                ],
              },
              {
                q: "What is the height and approximate weight of the Delhi iron pillar?",
                marks: 2,
              },
              {
                q: "Describe the lost-wax method as used for the Sultanganj Buddha.",
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
      title: "Indo-Islamic Architecture",
      summary:
        "From the Qutub Minar's 72.5 m brick-and-stone taper and Tughlaqabad's seven-layer defensive pipeline through the Lodi garden tomb with its double dome and the Mughal Red Fort's matrix of public-private and sandstone-marble to the Taj Mahal's 90-well foundation, pietra dura inlay and four signature techniques.",
      chapter: {
        number: "03",
        title: "Indo-Islamic Engineering",
        intro:
          "Unit III covers Indo-Islamic engineering from 1199 CE to 1653 CE. The Qutub Minar shows the taper-and-bond minar; Tughlaqabad fort shows the seven-layer defensive pipeline; Lodi tombs show the octagonal vs square plan with double dome and chhajja; the Mughal Red Fort shows the integration of palace, fort and water channel; and the Taj Mahal shows the well foundation, double dome, brick scaffold and pietra dura inlay - the high point of pre-modern Indian construction.",
        inOneBreath:
          "The Qutub Minar (72.5 m high, base 14.3 m tapering to 2.7 m) was begun by Aibak in 1199 and finished by Iltutmish in 1229, with the top two marble-sandstone storeys added by Firoz Shah in 1368; Tughlaqabad fort (6.5 sq km, 52 bastions) had a seven-layer defensive pipeline from ditch to kill-chamber; Lodi tombs came in octagonal (Mohammad Shah) and square (Bara Khamba) plans with the first double dome in India; the Red Fort of Delhi (103 ha, 2.4 km wall) by Ustad Ahmad Lahauri had a sequence of palaces along the Nahr-i-Bihisht water channel; and the Taj Mahal (1632-1653) by the same architect used a 90-well foundation, a 23 m double dome, a brick scaffold, and pietra dura inlay of lapis, jade, carnelian, onyx and malachite.",
        sections: [
          {
            number: "3.1",
            title: "The Qutub Minar",
            body: [
              "The Qutub Minar, begun by Qutb-ud-din Aibak in 1199 CE and completed by Iltutmish in 1229, is the world's tallest brick minaret: 72.5 metres high, with a base diameter of 14.3 metres tapering to 2.7 metres at the top. The tower stands in the Qutub complex in south Delhi, alongside the Quwwat-ul-Islam mosque built from the stones of 27 demolished Hindu and Jain temples. The minar has five storeys separated by projecting balconies on corbelled brackets; the first three storeys are built of red and buff sandstone faced over a solid rubble core, and the top two storeys were added by Firoz Shah Tughlaq in 1368 in marble and sandstone after a lightning strike damaged the crown.",
              "The engineering of the Qutub Minar is a study in taper and bond. The minar is built as a fluted cylindrical shaft with alternating semicircular and angular flutes (24 on the ground storey, 22 on the second, alternating on the upper storeys) creating a visually enriched surface that also stiffens the wall against wind. The taper ratio of about 1:5 (base diameter to height) keeps the centre of gravity low; the massive rubble core provides the dead weight that resists overturning. Each storey is crowned by a corbelled bracket balcony supported by muqarnas-style honeycomb corbels; the storeys are joined by a spiral staircase of 379 steps inside the shaft. Bell-and-chain carvings, lotus borders and Arabic inscriptions in Kufic and Naskh scripts decorate the exterior.",
              "The construction process itself is a five-stage flow: quarry the sandstone at Agra-grade beds, dress and number the blocks at the quarry, transport them by cart and bullock to the site, lay them in lime mortar over the rubble core, and finally carve the inscriptions and brackets in situ. The reuse of Hindu temple spoils in the adjoining mosque - columns with bells, pots and chains, capitals with hanging lotus buds - is visible in the Quwwat-ul-Islam court, where the original builders simply stacked Hindu pillars roofed with square Hindu slabs to create an instant mosque. Later rulers added the Alai Darwaza gate (1311 CE), the Alai Minar (an unfinished rival twice the Qutub's planned base), and the Iron Pillar of Delhi - moved here in the 13th century from its original location.",
            ],
            bullets: [
              "Qutub Minar: 72.5 m high, base 14.3 m tapering to 2.7 m; begun 1199, completed 1229.",
              "Five storeys separated by corbelled bracket balconies; top two added by Firoz Shah Tughlaq in 1368.",
              "First three storeys red/buff sandstone over rubble core; fluted shaft with 24/22 flutes stiffens the wall.",
              "Spiral staircase of 379 steps; lime mortar bond between dressed blocks.",
              "Quwwat-ul-Islam mosque: spoils of 27 demolished Hindu and Jain temples stacked as an instant mosque.",
            ],
            table: {
              caption: "Construction stages of the Qutub Minar and its later additions.",
              headers: ["Year", "Patron", "Work"],
              rows: [
                ["1199 CE", "Qutb-ud-din Aibak", "Foundation + first storey"],
                ["1229 CE", "Iltutmish", "Completion up to fourth storey"],
                ["1311 CE", "Alauddin Khalji", "Alai Darwaza gateway"],
                ["1368 CE", "Firoz Shah Tughlaq", "Top two marble-sandstone storeys"],
                ["Unfinished", "Alauddin Khalji", "Alai Minar (planned double the base)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Qutub Minar construction flow",
              caption: "From quarry to carved inscription - five stages repeated on each storey.",
              steps: [
                { label: "Quarry sandstone at Agra-grade beds" },
                { label: "Dress and number blocks at quarry" },
                { label: "Transport by cart to site" },
                { label: "Lay over rubble core in lime mortar" },
                { label: "Carve inscriptions and brackets in situ" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Quote the height (72.5 m) and the two patron names (Aibak, Iltutmish). The 379-step spiral staircase and the 1:5 taper ratio are the two technical facts RGPV looks for after the basic dimensions. Sketch the fluted profile with the corbelled balconies.",
            },
            keyTerms: [
              { term: "Taper ratio", definition: "Base diameter to height ratio of about 1:5 keeping the Qutub Minar's centre of gravity low." },
              { term: "Corbelled bracket balcony", definition: "Projecting storey separator supported on honeycomb corbels without mortar." },
              { term: "Quwwat-ul-Islam", definition: "First Delhi mosque built from the spoils of 27 demolished Hindu and Jain temples." },
            ],
            examQuestions: [
              {
                q: "Describe the Qutub Minar with a labelled sketch. Cover its dimensions, storeys, materials, taper and bond, the spiral staircase, and the patronage from Aibak to Firoz Shah Tughlaq.",
                marks: 7,
                outline: [
                  "State dimensions: 72.5 m high, base 14.3 m tapering to 2.7 m at top.",
                  "Sketch the fluted shaft with five storeys and corbelled bracket balconies.",
                  "Describe materials: red and buff sandstone over rubble core; top two storeys marble + sandstone.",
                  "Note the taper ratio 1:5 keeping the centre of gravity low.",
                  "Mention the spiral staircase of 379 steps joining the storeys.",
                  "Cite patrons: Aibak (1199), Iltutmish (1229), Firoz Shah Tughlaq (1368 top two storeys).",
                  "Mention the adjoining Quwwat-ul-Islam mosque built from spoils of 27 Hindu and Jain temples.",
                ],
              },
              {
                q: "How many steps does the spiral staircase inside the Qutub Minar contain?",
                marks: 2,
              },
              {
                q: "Explain the construction flow of a single storey of the Qutub Minar from quarry to inscribed finish.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Tughlaqabad fort",
            body: [
              "Tughlaqabad fort, built by Ghiyas-ud-din Tughlaq between 1321 and 1325 CE, is the most imposing fortified complex of early Indo-Islamic Delhi. The fort covers 6.5 square kilometres on a rocky outcrop south of the city, with a 10 to 15 metre high rubble-and-stone curtain wall topped by battlements and punctuated by 52 semi-circular bastions. The plan is a sloping parallelogram, with the citadel on the highest point in the south, the palaces in the middle, and the city of residents in the lower north. A vast artificial lake - now partly dry - was dammed on the south-east to supply water and to act as a moat. The fort was built in a record four years; the speed came from a disciplined division of labour under the sultan's personal command.",
              "Tughlaqabad's engineering is best seen in its defensive pipeline. From the outside in: a deep rock-cut ditch at the base of the wall, a sloping glacis to deflect siege ladders, a massive battered curtain wall of random rubble faced with dressed quartzite, round bastions every 40 metres able to enfilade attackers, crenellated parapets with machicolations for dropping stones or boiling oil on climbers, and an inner gate complex with a right-angled turn that exposed the right (unshielded) flank of any attacker. Each gate was a self-contained kill-chamber: the visitor passed through an outer arch, into a covered courtyard, then through an inner arch - all under fire from upper galleries. Three concentric layers of walls - outer city, inner palace, citadel - allowed defenders to fall back in stages.",
              "The water supply system completed the defense pipeline. Rainwater from the rocky outcrop was caught in a network of stone channels that fed into a series of step-down tanks, terminating in the large artificial lake. Wells within the palace and citadel provided water if the outer supply was cut by siege. The lake itself was dammed by a 6 kilometre long earthen embankment with stone revetments, impounding a water surface of roughly 100 hectares. Within the fort, the palace quarters had underground cooling chambers (tah-khana) ventilated by air vents; the sultan's private apartments had a wind-catcher (badgir) opening to the south-west monsoon. The integrated pipeline of ditch, glacis, wall, bastions, parapets, gate, and water supply made Tughlaqabad nearly impregnable.",
            ],
            bullets: [
              "Tughlaqabad fort: 6.5 sq km, 10-15 m high curtain wall, 52 bastions, built 1321-1325 CE.",
              "Sloping glacis deflected siege ladders; battered curtain wall of random rubble faced with quartzite.",
              "Three concentric walls: outer city, inner palace, citadel - allowed staged defence.",
              "Right-angled gate turn exposed the attacker's unshielded right flank.",
              "Artificial lake (≈ 100 ha) impounded by a 6 km earthen dam; wells and tah-khana completed supply.",
            ],
            codeExample: {
              language: "text",
              caption: "Tughlaqabad defensive pipeline (outer to inner).",
              code: [
                "Layer 7  Outer : Rock-cut ditch (dry moat)",
                "Layer 6        : Sloping glacis - deflects siege ladders",
                "Layer 5        : Battered curtain wall (rubble + quartzite face)",
                "Layer 4        : Round bastions every 40 m - enfilade fire",
                "Layer 3        : Crenellated parapet with machicolations",
                "Layer 2        : Right-angled gate turn + kill-chamber",
                "Layer 1  Inner : Three concentric walls (city, palace, citadel)",
              ].join("\n"),
            },
            diagram: {
              kind: "pipeline",
              title: "Tughlaqabad defensive pipeline",
              caption: "Outer to inner - seven stages that a besieging army had to survive.",
              stages: [
                { label: "Rock-cut ditch" },
                { label: "Sloping glacis" },
                { label: "Battered curtain wall" },
                { label: "Round bastions" },
                { label: "Machicolated parapet" },
                { label: "Right-angled gate kill-chamber" },
              ],
            },
            callout: {
              type: "warning",
              title: "Common slip",
              body: "Students describe Tughlaqabad as 'a single thick wall'. It has three concentric walls (city, palace, citadel) and seven defensive layers from ditch to kill-chamber. Always sketch the pipeline - RGPV awards one mark per layer named.",
            },
            keyTerms: [
              { term: "Glacis", definition: "Sloping earth or stone apron in front of a fortress wall that deflects siege ladders and rolling stone." },
              { term: "Machicolation", definition: "Projecting parapet opening through which stones or boiling liquid could be dropped on attackers." },
              { term: "Tah-khana", definition: "Underground cooling chamber in Tughlaqabad palaces, ventilated by air vents." },
            ],
            examQuestions: [
              {
                q: "Describe the defensive engineering of Tughlaqabad fort. Include its seven-layer pipeline from ditch to kill-chamber, the three concentric walls, and the water supply system.",
                marks: 7,
                outline: [
                  "State the basics: 6.5 sq km, 10-15 m high curtain wall, 52 bastions, built 1321-1325 CE.",
                  "List the seven defensive layers: ditch, glacis, battered wall, round bastions, machicolated parapet, right-angled gate, kill-chamber.",
                  "Explain the right-angled gate turn exposing the attacker's unshielded right flank.",
                  "Describe the three concentric walls (outer city, inner palace, citadel) and staged defence.",
                  "Mention the 40-metre bastion spacing for enfilade fire along the wall.",
                  "Describe the water supply: stone channels to step-down tanks and the artificial lake.",
                  "Note the 6 km earthen dam impounding ≈ 100 ha and the tah-khana cooling chambers.",
                ],
              },
              {
                q: "What was the area enclosed by Tughlaqabad fort?",
                marks: 2,
              },
              {
                q: "Explain the right-angled gate turn and the kill-chamber concept in Tughlaqabad.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Lodi tombs",
            body: [
              "The Lodi dynasty (1451-1526 CE) produced a distinct genre of tomb architecture in Delhi, set in what is now the Lodi Gardens. Earlier Delhi sultans had largely been buried in unmarked graves, in keeping with orthodox Islamic reluctance to commemorate the dead with monumental tombs. The Lodis, of Afghan origin, broke with this and built large domed octagonal and square mausoleums, the earliest of their kind in India. The tomb of Mohammad Shah (last of the Sayyids, died 1444) is the earliest in the gardens; the Lodi examples include the tombs of Sikandar Lodi (1517), Ibrahim Lodi (1526) and the unfinished tomb of Sikandar's son. Each stands on a high plinth in a garden setting, with a wide dome on a high drum.",
              "Lodi tombs come in two plans: octagonal and square. The octagonal type, exemplified by Mohammad Shah's tomb, has eight sides each with a deep arched recess, three arched openings on the cardinal sides, a verandah running round the central chamber, and a broad dome on a 9-metre high drum with a finial. The square type, exemplified by the Bara Khamba tomb and Sikandar Lodi's tomb (which combines both), is a square chamber with four arched openings on each face, a verandah, and a dome on an octagonal drum achieved through corner squinches. Both types use dressed grey quartzite for the walls and red sandstone for the domes and details, producing the characteristic two-tone appearance.",
              "Compared with earlier Indo-Islamic tombs, the Lodi tombs stand out for three features: their garden setting, their double dome (an inner dome visible from inside, an outer dome visible from outside), and their Hindu-derived chhajja (overhanging eaves) and chhatris (small kiosks) at the corners. Earlier tombs like Balban's (1287) had been plain square chambers; the Lodi tombs add the garden, the chhajja and the corner chhatris, and begin the experiment with the double dome that culminates in the Taj Mahal. The Lodi tomb is therefore a stepping stone between the stark Tughlaq mausoleum and the Mughal garden tomb. The Badshah Ashokan pillar of Firoz Shah at Khirki, the Shish Gumbad and the Bara Gumbad are contemporary monuments that share the same idiom.",
            ],
            bullets: [
              "Lodi tombs (1451-1526) in Lodi Gardens, Delhi: earliest monumental garden tombs in India.",
              "Two plans: octagonal (Mohammad Shah, Sikandar Lodi) and square (Bara Khamba).",
              "Dressed grey quartzite walls + red sandstone domes and details - characteristic two-tone.",
              "Double dome: inner dome visible inside, outer dome visible outside - precursor of Taj Mahal.",
              "Hindu-derived chhajja (eaves) and chhatris (corner kiosks) on an Islamic plan.",
            ],
            codeExample: {
              language: "text",
              caption: "Octagonal vs square Lodi tomb - anatomy side by side.",
              code: [
                "Feature           Octagonal tomb              Square tomb",
                "---------------------------------------------------------------",
                "Plan              8 sides, deep recesses      4 sides, 4 arches each",
                "Example           Mohammad Shah tomb          Bara Khamba tomb",
                "Drum              Circular, 9 m high          Octagonal via squinches",
                "Dome              Broad, red sandstone        Broader, red sandstone",
                "Verandah          Around central chamber      Around central chamber",
                "Corners           Chhatris at 8 corners       Chhatris at 4 corners",
              ].join("\n"),
            },
            diagram: {
              kind: "compare",
              title: "Octagonal vs square Lodi tomb",
              caption: "Two plans, one idiom - the eight-sided and four-sided Lodi mausoleum compared.",
              left: {
                heading: "Octagonal",
                items: [
                  "8 sides with deep arched recesses",
                  "3 arched openings on cardinal sides",
                  "Verandah around central chamber",
                  "Dome on circular drum, 9 m high",
                  "Example: Mohammad Shah tomb",
                ],
              },
              right: {
                heading: "Square",
                items: [
                  "4 sides, 4 arches on each face",
                  "Corner squinches to octagonal drum",
                  "Verandah around central chamber",
                  "Dome on octagonal drum",
                  "Example: Bara Khamba tomb",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "Lodi tombs sit at the midpoint of the tomb-evolution timeline: Tughlaq plain square chamber (Balban, 1287) -> Lodi octagonal/square with garden and double dome (Mohammad Shah, 1444; Sikandar, 1517) -> Mughal garden tomb (Humayun, 1572; Taj Mahal, 1653). State the lineage, then the comparison.",
            },
            keyTerms: [
              { term: "Octagonal plan", definition: "Lodi tomb plan with eight sides, deep arched recesses and a dome on a high circular drum." },
              { term: "Squinch", definition: "Arch or corbel across a corner of a square chamber that supports an octagonal drum." },
              { term: "Double dome", definition: "Two domes - an inner low dome and an outer higher dome - separated by a hollow space." },
            ],
            examQuestions: [
              {
                q: "Compare the octagonal and square Lodi tomb types. Cover the plan, drum, dome, verandah and corner treatment, and place Lodi tombs in the evolution from Tughlaq to Mughal.",
                marks: 7,
                outline: [
                  "Set up the comparison: octagonal (Mohammad Shah) vs square (Bara Khamba).",
                  "Octagonal plan: 8 sides, deep arched recesses, 3 arched openings on cardinal sides.",
                  "Square plan: 4 sides, 4 arches per face, corner squinches to an octagonal drum.",
                  "Both have a verandah around the central chamber and a broad red sandstone dome.",
                  "Note the materials: grey quartzite walls, red sandstone domes (two-tone).",
                  "Describe the three innovations: garden setting, double dome, chhajja and chhatris.",
                  "Place Lodi tombs in the lineage: Tughlaq (Balban 1287) -> Lodi -> Mughal (Humayun 1572, Taj 1653).",
                ],
              },
              {
                q: "Name two Lodi tombs in the Lodi Gardens of Delhi.",
                marks: 2,
              },
              {
                q: "Explain the function of the squinch and the double dome in a Lodi tomb.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Mughal fort-palace: the Red Fort of Delhi",
            body: [
              "The Red Fort (Lal Qila) of Delhi, built by Shah Jahan between 1639 and 1648 as the palace-fortress of his new capital Shahjahanabad, is the high point of Mughal fort-palace engineering. The fort covers 103 hectares on the right bank of the Yamuna, with a 2.4 kilometre long curtain wall of dressed red sandstone rising 18 to 33 metres high. The wall is battered, with a string course at mid-height; round bastions at the corners and two principal gates (Lahori and Delhi) on the west. Inside, the fort is divided into two zones: the private residential quarter (fort) and the public ceremonial quarter (palace), separated by the Naqqar Khana drum house. The whole complex was designed by the architect Ustad Ahmad Lahauri, who later designed the Taj Mahal.",
              "The palace buildings are arranged in a sequence along the east-west axis, each with a view of the river. From the Lahori Gate the visitor enters the Chatta Chowk (covered bazaar), passes through the Naqqar Khana into the Diwan-i-Aam (Hall of Public Audience, a forty-pillared hall with a marble throne alcove), then the Naubat Khana, the Rang Mahal (the harem, painted and once cooled by a marble water channel - the Nahr-i-Bihisht, 'stream of paradise'), the Khas Mahal (the emperor's private apartments with the Mussaman Burj projection), the Diwan-i-Khas (Hall of Private Audience, with the famous Peacock Throne and the Persian couplet 'if there be paradise on earth'), and finally the Moti Masjid (pearl mosque, 1659) and the Hammams (royal baths). Each palace is built of white marble set against red sandstone walls.",
              "The water engineering of the Red Fort is one of its most admired features. The Nahr-i-Bihisht, fed by a branch of the Shahi Nahar canal from the Yamuna upstream of the fort, ran through the centre of the palace buildings, cooling the air and feeding marble pools and fountains. The water was lifted by a Persian wheel at the upstream end and distributed through copper and terracotta pipes; excess water drained to the river. The Diwan-i-Khas once had a fountain shaped like the sun, with a copper bowl mounted on a gilded pillar, fed by hidden copper pipes - a feat of concealed plumbing. The Hammams had both hot and cold water, with a furnace beneath the marble floor feeding copper coils in the hot bath. The fort's matrix of public-ceremonial vs private-residential buildings and the integration of running water through every space is the central engineering achievement.",
            ],
            bullets: [
              "Red Fort Delhi: 103 hectares, 2.4 km wall, 18-33 m high; built 1639-1648 by Shah Jahan.",
              "Architect Ustad Ahmad Lahauri (also designed Taj Mahal); two principal gates: Lahori and Delhi.",
              "Palace sequence: Chatta Chowk - Naqqar Khana - Diwan-i-Aam - Rang Mahal - Khas Mahal - Diwan-i-Khas - Moti Masjid.",
              "Nahr-i-Bihisht ('stream of paradise'): marble water channel fed by Shahi Nahar, cooled palaces.",
              "Diwan-i-Khas housed Peacock Throne; Hammams had hot/cold water with copper coils under marble.",
            ],
            table: {
              caption: "Principal buildings of the Red Fort, Delhi.",
              headers: ["Building", "Function", "Material"],
              rows: [
                ["Diwan-i-Aam", "Hall of Public Audience", "Red sandstone + marble throne alcove"],
                ["Diwan-i-Khas", "Hall of Private Audience", "White marble, Peacock Throne"],
                ["Rang Mahal", "Harem, painted, water-cooled", "Red sandstone + plaster"],
                ["Khas Mahal", "Emperor's private apartments", "White marble, Mussaman Burj"],
                ["Moti Masjid", "Private mosque (1659)", "White marble"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Red Fort - public vs private and stone vs marble",
              caption: "Quadrant order: top-left, top-right, bottom-left, bottom-right.",
              axes: { x: "Function (public to private)", y: "Material (sandstone to marble)" },
              quadrants: [
                { label: "Public, sandstone", note: "Chatta Chowk, Naqqar Khana" },
                { label: "Public, marble", note: "Diwan-i-Aam throne alcove" },
                { label: "Private, sandstone", note: "Rang Mahal (harem)" },
                { label: "Private, marble", note: "Diwan-i-Khas, Khas Mahal, Moti Masjid" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Use the 2x2 matrix of function (public vs private) and material (sandstone vs marble) to place each building. RGPV expects the architect's name (Ustad Ahmad Lahauri) and the canal name (Nahr-i-Bihisht); both are commonly missed.",
            },
            keyTerms: [
              { term: "Nahr-i-Bihisht", definition: "Marble water channel running through the Red Fort palaces, fed by the Shahi Nahar canal." },
              { term: "Diwan-i-Khas", definition: "Hall of Private Audience in the Red Fort, of white marble, holding the Peacock Throne." },
              { term: "Mussaman Burj", definition: "Octagonal projection from the Khas Mahal, the emperor's private balcony overlooking the Yamuna." },
            ],
            examQuestions: [
              {
                q: "Describe the Red Fort of Delhi. Cover the wall dimensions, palace sequence, water engineering, and the architect; place each principal building on a 2x2 matrix of function vs material.",
                marks: 7,
                outline: [
                  "State dimensions: 103 hectares, 2.4 km curtain wall, 18-33 m high, two principal gates.",
                  "Name the architect Ustad Ahmad Lahauri (also designed the Taj Mahal).",
                  "Trace the palace sequence: Chatta Chowk, Naqqar Khana, Diwan-i-Aam, Rang Mahal, Khas Mahal, Diwan-i-Khas, Moti Masjid.",
                  "Draw the 2x2 matrix: function (public vs private) by material (sandstone vs marble).",
                  "Place buildings: Chatta Chowk (public, sandstone); Diwan-i-Khas (private, marble); Rang Mahal (private, sandstone); Moti Masjid (private, marble).",
                  "Describe the Nahr-i-Bihisht water channel fed by the Shahi Nahar, cooling the palaces.",
                  "Note the Hammams with hot/cold water heated by copper coils beneath the marble floor.",
                ],
              },
              {
                q: "Who was the architect of the Red Fort of Delhi?",
                marks: 2,
              },
              {
                q: "Explain the Nahr-i-Bihisht water channel and how it cooled the palace buildings.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Taj Mahal construction techniques",
            body: [
              "The Taj Mahal at Agra, built by Shah Jahan between 1632 and 1653 as a mausoleum for his wife Mumtaz Mahal, is the most studied building in Indo-Islamic architecture. The complex stands on a 313-metre square platform (chabutara) on the right bank of the Yamuna, with the mausoleum in the centre, a mosque on the west, the jawab (mirror hall) on the east, and four minarets at the platform corners. The mausoleum is a square plan 56.7 metres on a side, with chamfered corners forming an irregular octagon, topped by a 23-metre high double dome on a 7-metre high drum; the inner dome, visible from inside, is lower to keep the interior proportion intimate, while the outer dome rises to give the exterior silhouette.",
              "The foundation engineering is the unsung miracle. The mausoleum sits on a deep well foundation: 90 masonry wells of 1.5 metre diameter were sunk into the sandy Yamuna bank to the water table, filled with rubble and mortar, and topped with a stone grillage; the platform was then built above the grillage. The wells distribute the load of about 40,000 tonnes of marble and sandstone through the sand to the water-bearing layer, which provides buoyant support during the monsoon. The choice of a riverside site was deliberate: the Yamuna keeps the wells moist and prevents the timber components (none here, but at other sites) from decay, and the river provides the silvery foreground that defines the silhouette.",
              "The construction was organised as a pyramid of skills and operations. At the base were the labourers who dug the wells and carried rubble; above them, masons who cut and dressed the Makrana marble; above, inlayers who cut the semi-precious stones (lapis, carnelian, jade, onyx, malachite) into floral and calligraphic patterns and fixed them into the marble with shell-lime mortar; above, carpenters and scaffolders who built the brick scaffold that enclosed the whole mausoleum (so vast it was said to have taken 20 years to dismantle); and at the apex, the calligrapher Amanat Khan and the architect Ustad Ahmad Lahauri. The 21-year project used a workforce of about 20,000, with materials brought by 1,000 elephants from across Asia. The double dome, the well foundation, the brick scaffold and the pietra dura inlay are the four signature techniques.",
            ],
            bullets: [
              "Taj Mahal: 1632-1653, square chabutara 313 m side, mausoleum 56.7 m square, 23 m high double dome.",
              "Well foundation: 90 masonry wells (1.5 m diameter) sunk to water table, topped with stone grillage.",
              "Makrana marble with pietra dura inlay: lapis, carnelian, jade, onyx, malachite set in shell-lime mortar.",
              "Brick scaffold enclosed the whole mausoleum; estimated 20 years to dismantle.",
              "Architect Ustad Ahmad Lahauri; calligrapher Amanat Khan; ≈ 20,000 workers, 1,000 elephants.",
            ],
            codeExample: {
              language: "text",
              caption: "Taj Mahal construction pyramid - skill levels from labourer to architect.",
              code: [
                "Apex      Architect (Ustad Ahmad Lahauri) + calligrapher (Amanat Khan)",
                "Tier 4    Carpenters and scaffolders (brick scaffold, ≈ 20 yr dismantle)",
                "Tier 3    Inlayers - pietra dura with lapis, jade, carnelian, onyx, malachite",
                "Tier 2    Masons - cut and dress Makrana marble",
                "Base      Labourers - dig wells, carry rubble, mix shell-lime mortar",
              ].join("\n"),
            },
            diagram: {
              kind: "pyramid",
              title: "Taj Mahal construction skill pyramid",
              caption: "Narrowest tier at top - the architect and calligrapher; broadest at base - the labourer.",
              tiers: [
                { label: "Architect + calligrapher", note: "Lahauri + Amanat Khan" },
                { label: "Carpenters + scaffolders", note: "Brick scaffold" },
                { label: "Pietra dura inlayers", note: "Semi-precious stone inlay" },
                { label: "Marble masons", note: "Makrana dressing" },
                { label: "Labourers", note: "Wells, rubble, mortar" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The four signature techniques - double dome, 90-well foundation, brick scaffold, pietra dura inlay - are worth one mark each. The 21-year duration and 20,000-worker scale earn the last three marks. Always name the architect (Lahauri) and the calligrapher (Amanat Khan).",
            },
            keyTerms: [
              { term: "Well foundation", definition: "Foundation of 90 masonry wells sunk to the water table and topped with a stone grillage for the Taj Mahal." },
              { term: "Double dome", definition: "Inner lower dome for interior proportion and outer higher dome for exterior silhouette." },
              { term: "Pietra dura", definition: "Italian-derived inlay of semi-precious stones (lapis, jade, carnelian) in marble using shell-lime mortar." },
            ],
            examQuestions: [
              {
                q: "Describe the construction techniques of the Taj Mahal. Cover the well foundation, double dome, brick scaffold, and pietra dura inlay, and place the workforce on a pyramid of skill levels.",
                marks: 7,
                outline: [
                  "State the basics: 1632-1653, 313 m square chabutara, mausoleum 56.7 m square, 23 m double dome on 7 m drum.",
                  "Describe the well foundation: 90 masonry wells of 1.5 m diameter sunk to the water table, topped with a stone grillage.",
                  "Explain the double dome: inner lower dome for interior proportion, outer higher dome for silhouette.",
                  "Describe the brick scaffold that enclosed the whole mausoleum, estimated 20 years to dismantle.",
                  "Detail the pietra dura inlay: lapis, carnelian, jade, onyx, malachite in Makrana marble with shell-lime mortar.",
                  "Draw the skill pyramid: architect (Lahauri) + calligrapher (Amanat Khan) at apex; carpenters/scaffolders; inlayers; masons; labourers at base.",
                  "Conclude with scale: 21-year project, ≈ 20,000 workers, 1,000 elephants.",
                ],
              },
              {
                q: "Name the architect and the calligrapher of the Taj Mahal.",
                marks: 2,
              },
              {
                q: "Explain why a riverside site was chosen for the Taj Mahal foundation.",
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
      title: "Colonial and Pre-Independence",
      summary:
        "British-era civil engineering from 1830 to 1947 - railway bridges built by pneumatic caisson, the railway network from Bombay to Thane (1853) onward, perennial irrigation canals with warabandi rotation, the Gothic Revival Victoria Terminus with its four layered systems, and the colonial to post-independence transition from load-bearing masonry to RCC frame.",
      chapter: {
        number: "04",
        title: "Colonial Engineering",
        intro:
          "Unit IV walks the colonial-era engineering that connected India - the steel truss and cantilever bridges (Old Yamuna 1867, Howrah 1943), the railway network (53,000 km by 1947) and its construction pipeline, the perennial irrigation canals with their warabandi rotation, Victoria Terminus Bombay (1887) by F.W. Stevens with its four layered systems, and the colonial-post-independence transition from IISc Bangalore's load-bearing granite to the RCC-frame IITs.",
        inOneBreath:
          "The first Indian railway ran from Bombay to Thane (34 km, 1853); British-era bridges used pneumatic caissons with compressed-air excavation below the riverbed; the Howrah Bridge (1943) has a 457 m main span, 26,500 tonnes of steel and 6.5 million rivets; the railway construction pipeline ran survey-earthwork-bridges-track-stations-signals at 100 km per year at peak; perennial irrigation canals had trapezoidal sections at 1:5000-1:10000 slope with warabandi rotation; Victoria Terminus (1887) by F.W. Stevens has four layered systems (foundation raft, structural masonry, jack-arch floors, Gothic skin); and the post-independence IITs shifted to RCC frame with brick infill and mud-phuska roof insulation.",
        sections: [
          {
            number: "4.1",
            title: "British-era railway bridges",
            body: [
              "British colonial bridge-building in India, from about 1830 to 1947, was driven by the railway network's appetite for spans across the Ganges, Yamuna, Brahmaputra and their tributaries. Early bridges were masonry arches - the bridge at Serampore (1832) over a Hooghly distributary was among the first - but the dominant type from the 1860s onward was the steel truss girder bridge on masonry piers. The Old Naini Bridge at Allahabad (1865), the Alexandra Bridge over the Chenab, and the great Howrah cantilever (1943) at Calcutta show the progression. The Howrah Bridge, with a 457-metre main span, four pedestal bearings and no pier in the river, was the longest cantilever in the world at completion; it used 26,500 tonnes of high-tensile steel assembled with 6.5 million rivets.",
              "The construction flow was a disciplined five-stage process. First, the river was surveyed by boat, with depth soundings taken in the dry season to locate the deepest scour channel; the pier foundations were then sunk by pneumatic caisson, airtight iron cylinders lowered to the riverbed through which compressed air was pumped so that labourers could excavate the sand from inside. Second, the well foundation was filled with concrete and topped with a stone pier; pier spacing was set by the steel girder length available. Third, the girders - truss, plate, or cantilever depending on span - were pre-assembled on the bank. Fourth, the assembled girder was launched across by incremental cantilever launch or, for short spans, by floating on barges. Fifth, the deck and rail were fixed and the bridge load-tested by a column of locomotives before opening.",
              "The engineering of these bridges was driven by the need to resist two Indian river conditions: monsoon scour and seismic load. Pneumatic caissons were sunk until they met a sand layer dense enough to resist scour; pier shapes were streamlined to deflect floodwaters. Expansion joints accommodated the temperature range from 0 to 50 degrees Celsius; steel was specified with high manganese content to resist fatigue from the cyclic loading of trains. The Howrah Bridge, designed by the firm Rendel Palmer and Tritton, used a cantilever truss to avoid obstructing the river with a central pier - the alternative chosen for the Old Yamuna Bridge at Delhi (1867), which has 12 piers in the river and creates a major navigation hazard. Bridges like the Godavari Arch at Rajahmundry (1897) and the Kaigram bridge on the Brahmaputra show the maturation of the discipline.",
            ],
            bullets: [
              "Howrah Bridge 1943: 457 m main span, no river pier, 26,500 t steel, 6.5 million rivets.",
              "Old Yamuna Bridge Delhi 1867: 12 masonry piers in the river, twin-track rail-and-road deck.",
              "Pneumatic caissons: airtight iron cylinders with compressed air to excavate sand below water.",
              "Girder launch: incremental cantilever launch from one bank, or float-and-lift on barges.",
              "Load test before opening: a column of locomotives rolled across at 5 km/h to verify the deck.",
            ],
            table: {
              caption: "Five British-era bridges in India.",
              headers: ["Bridge", "Year", "Type", "Main span"],
              rows: [
                ["Serampore", "1832", "Masonry arch", "≈ 30 m"],
                ["Old Naini, Allahabad", "1865", "Truss on masonry piers", "≈ 100 m"],
                ["Old Yamuna, Delhi", "1867", "Truss on 12 river piers", "≈ 60 m"],
                ["Godavari Arch, Rajahmundry", "1897", "Steel arch", "≈ 90 m"],
                ["Howrah, Calcutta", "1943", "Cantilever truss", "457 m"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "British-era steel bridge construction flow",
              caption: "Survey to load test - the five-stage process repeated on every major span.",
              steps: [
                { label: "River survey + sounding for scour channel" },
                { label: "Sink pneumatic caisson + concrete well foundation" },
                { label: "Build masonry pier to girder springing level" },
                { label: "Pre-assemble steel truss on bank + launch across" },
                { label: "Fix deck, rail, and load-test with locomotives" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "RGPV expects three bridge types (masonry arch, truss on masonry piers, cantilever) and three named examples. The pneumatic caisson is the technical highlight - describe the airtight cylinder, the compressed air, and the manual excavation of sand below the riverbed.",
            },
            keyTerms: [
              { term: "Pneumatic caisson", definition: "Airtight iron cylinder sunk to a riverbed, with compressed air pumped in so labourers can excavate sand from inside." },
              { term: "Cantilever truss", definition: "Steel girder type used for the Howrah Bridge, anchored at both banks with no river pier." },
              { term: "Incremental launch", definition: "Method of assembling a steel girder on one bank and pushing it out across the gap in stages." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of British-era railway bridges in India. Cover the five-stage flow, the pneumatic caisson foundation, the girder launch, and the load test, with examples from the Old Yamuna and Howrah bridges.",
                marks: 7,
                outline: [
                  "Set the scene: 1830-1947, three bridge types - masonry arch, truss on masonry piers, cantilever.",
                  "Trace the five-stage flow: survey, caisson, pier, girder launch, load test.",
                  "Describe the pneumatic caisson: airtight iron cylinder, compressed air, manual sand excavation.",
                  "Note the well foundation filled with concrete and topped with a stone pier.",
                  "Explain girder launch: incremental cantilever launch from the bank, or float-and-lift on barges.",
                  "Cite the Old Yamuna Bridge (1867, 12 river piers) and the Howrah Bridge (1943, 457 m cantilever).",
                  "Mention the locomotive load test at 5 km/h before opening to traffic.",
                ],
              },
              {
                q: "What is the main span of the Howrah Bridge and how many rivets were used?",
                marks: 2,
              },
              {
                q: "Explain how a pneumatic caisson allows foundation excavation below a riverbed.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "The Indian railway network",
            body: [
              "The Indian railway network, begun in 1853 with the 34-kilometre line from Bombay to Thane, was the largest civil engineering project in 19th-century India. By 1900 the network had grown to nearly 40,000 kilometres, by 1947 to about 53,000. The engineering was conducted by British firms under the Public Works Department on behalf of private companies such as the East Indian Railway, the Great Indian Peninsular Railway and the Bengal-Nagpur Railway, each with its own gauge (broad, metre or narrow). The construction pipeline began with route survey: topographical mapping at 1:63,360 by triangulation, levelling by dumpy level to design the gradients (1 in 100 to 1 in 200 maximum), and selection of station sites at intervals of 30 to 50 kilometres.",
              "Once the alignment was set, construction followed a strict pipeline. Earthwork: cuttings and embankments built by manual labour (up to 30,000 workers per 100 km of line), with embankments compacted by bullock-carts rolling back and forth. Bridges and culverts: masonry arches for spans up to 12 metres, steel girders above; in flood-prone areas, multi-span wells. Track laying: wooden or steel sleepers laid on ballast of broken stone, with iron (later steel) rails at 50 or 60 pounds per yard, spiked to sleepers by track gangs working to a chord alignment. Stations: brick buildings with platform, goods shed, loco shed and turntable. Signalling: initially ball-and-pole semaphore, later electrically interlocked.",
              "The civil engineering challenge was the Indian climate. Embankments in black-cotton soil (a swelling clay) needed flat side slopes of 1.5:1 and stone-pitched protection, since the clay swells by 50 per cent on wetting. Cuttings in the Deccan trap required blasting. The Bhor Ghat incline on the GIP line south of Bombay descended 470 metres in 16 kilometres at 1 in 37, requiring special banking locomotives and four tunnel sections. The rail bridge over the Yamuna at Delhi (1867), the Victoria Bridge over the Chenab, and the Dapoorie viaduct (the first in India) all represent the application of the pipeline at scale. The railways brought standardisation to Indian engineering: bridge design, station architecture, gauge, sleepers, signals and rolling stock all converged on British standards, creating a unified technical system.",
            ],
            bullets: [
              "First line: Bombay to Thane, 34 km, 1853; by 1947 the network reached ≈ 53,000 km.",
              "Survey: 1:63,360 triangulation; maximum gradient 1:100 to 1:200; station intervals 30-50 km.",
              "Earthwork by 30,000 workers per 100 km; embankment compacted by bullock-cart rolling.",
              "Bhor Ghat incline: 470 m drop in 16 km at 1:37; needed banking locos and four tunnels.",
              "Black-cotton soil embankments: 1.5:1 side slopes + stone pitching for swelling clay.",
            ],
            codeExample: {
              language: "text",
              caption: "Railway construction pipeline - survey to signalling.",
              code: [
                "Stage 1  Survey    : 1:63,360 triangulation + levelling",
                "Stage 2  Earthwork : cuttings + embankments (compacted by bullock-carts)",
                "Stage 3  Bridges   : masonry arch < 12 m, steel girder above; multi-span wells",
                "Stage 4  Track     : sleepers + ballast + 50-60 lb/yd rail on chord alignment",
                "Stage 5  Stations  : brick building + platform + goods shed + loco shed",
                "Stage 6  Signals   : ball-and-pole semaphore, later electric interlocking",
              ].join("\n"),
            },
            diagram: {
              kind: "pipeline",
              title: "Railway construction pipeline",
              caption: "Survey to signals - six stages, executed at 100 km a year at peak.",
              stages: [
                { label: "Route survey (1:63,360)" },
                { label: "Earthwork + embankments" },
                { label: "Bridges and culverts" },
                { label: "Track laying" },
                { label: "Stations" },
                { label: "Signalling" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "Three facts that RGPV looks for: first line (1853, Bombay-Thane, 34 km); maximum gradient (1:100 to 1:200); and one difficult incline (Bhor Ghat, 1:37). State these in order to anchor the answer.",
            },
            keyTerms: [
              { term: "Broad gauge", definition: "Railway gauge of 1676 mm used on the principal main lines of British India." },
              { term: "Black-cotton soil", definition: "Swelling clay that expands up to 50 per cent on wetting, requiring flat embankment slopes." },
              { term: "Banking locomotive", definition: "Extra locomotive attached at the rear of a train to push it up a steep incline such as the Bhor Ghat." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of the Indian railway network under the British. Cover the six-stage pipeline, the route survey standards, the earthwork, the bridge types, and one difficult incline (Bhor Ghat).",
                marks: 7,
                outline: [
                  "Open with the first line: Bombay to Thane, 34 km, 1853; by 1947 ≈ 53,000 km.",
                  "State the survey standards: 1:63,360 triangulation; maximum gradient 1:100 to 1:200; station interval 30-50 km.",
                  "Describe the six-stage pipeline: survey, earthwork, bridges, track, stations, signals.",
                  "Note the earthwork: 30,000 workers per 100 km, embankments compacted by bullock-cart rolling.",
                  "Cover bridge types: masonry arch < 12 m, steel girder above; multi-span wells in flood areas.",
                  "Describe track: sleepers on stone ballast, 50-60 lb/yd rail on chord alignment.",
                  "Cite the Bhor Ghat incline: 470 m drop in 16 km at 1:37, banking locos, four tunnels.",
                ],
              },
              {
                q: "When and where was the first Indian railway line opened, and what was its length?",
                marks: 2,
              },
              {
                q: "Why do embankments on black-cotton soil need flat side slopes and stone pitching?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "British-era irrigation canals",
            body: [
              "British-era irrigation canal engineering transformed Indian agriculture and famine response. The Upper Ganges Canal (opened 1854), the Lower Ganges Canal (1878), the Agra Canal (1873), the Sirhind Canal (1882), the Krishna and Godavari delta systems, and the Triple Canal Project in Punjab (Upper Jhelum, Upper Chenab, Lower Bari Doab, 1915-1923) together brought some 30 million acres under canal irrigation by 1947. The engineering model was the perennial canal: a headworks (weir or anicut) across the river, a regulator admitting a fixed discharge into the main canal, the main canal carrying the water along the watershed, branch canals distributing to distributaries, and minors and watercourses delivering to fields by gravity.",
              "The canal system was an exercise in precise hydraulic engineering. The main canal was designed for a discharge measured in cusecs (cubic feet per second), with a trapezoidal cross-section, lined in masonry or earth depending on the soil. The longitudinal slope was held at about 1:5000 to 1:10000, steep enough to keep silt moving but gentle enough to prevent scour. Falls (vertical drops) were built where the canal needed to lose elevation, often combined with navigation locks; the Madhya Ganga Canal had 28 masonry falls. Cross-drainage works - aqueducts carrying the canal over a natural stream, and super-passages carrying the stream over the canal - were the most complex structures, designed for both the canal discharge and the design flood of the cross-drainage stream.",
              "The irrigation cycle followed the agricultural year. In the kharif (monsoon) season the canal supplemented rainfall; in the rabi (winter) season it carried the main water supply. At each cropping cycle, the watercourse was opened on a strict rotation - the 'warabandi' system, in which each farmer received water for a fixed number of hours proportional to his landholding. The canal's cycle of headworks intake, main canal flow, distributary rotation, watercourse delivery, field application, and return drainage back to the river closed the loop. The Sone Canal system (1879) in Bihar was the first to use a fully lined main canal; the Krishna delta system (1855) was the earliest anicut-based delta irrigation. The Mettur Dam (1934) on the Cauvery, the Sutlej Valley Canals (1927-1933) and the Sukkur Barrage (1932) on the Indus extended the pipeline to the largest scale of any colonial-era system.",
            ],
            bullets: [
              "Upper Ganges Canal opened 1854; by 1947 ≈ 30 million acres under canal irrigation.",
              "Perennial canal: headworks (weir/anicut) - regulator - main canal - branches - distributaries - watercourses.",
              "Main canal slope 1:5000 to 1:10000; trapezoidal cross-section; masonry-lined or earth.",
              "Warabandi: rotational water delivery, hours proportional to landholding.",
              "Cross-drainage works: aqueducts (canal over stream) and super-passages (stream over canal).",
            ],
            table: {
              caption: "Five British-era irrigation canal systems.",
              headers: ["System", "Year", "River", "Headworks"],
              rows: [
                ["Upper Ganges Canal", "1854", "Ganga at Haridwar", "Weir"],
                ["Agra Canal", "1873", "Yamuna", "Weir at Okhla"],
                ["Sirhind Canal", "1882", "Sutlej at Ropar", "Weir"],
                ["Sutlej Valley Canals", "1933", "Sutlej", "Barrage at Ferozepur"],
                ["Sukkur Barrage", "1932", "Indus", "Barrage + 7 canals"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Perennial canal irrigation cycle",
              caption: "From river intake to field to return drain - the warabandi rotation loop.",
              steps: [
                { label: "River intake at headworks" },
                { label: "Main canal along watershed" },
                { label: "Distributary + warabandi rotation" },
                { label: "Watercourse to field" },
                { label: "Field application + return drain" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the canal cycle as a closed loop. RGPV expects the names of three systems (Upper Ganges, Sirhind, Sukkur), the warabandi rotation principle, and the design slope (1:5000 to 1:10000). Cross-drainage works (aqueduct and super-passage) earn the last two marks.",
            },
            keyTerms: [
              { term: "Anicut", definition: "A masonry weir built across a river to raise the water level so that a canal can be fed by gravity." },
              { term: "Warabandi", definition: "Rotational system of canal water delivery in which each farmer receives water for hours proportional to his landholding." },
              { term: "Cross-drainage work", definition: "Structure (aqueduct or super-passage) that carries a canal and a natural stream across each other." },
            ],
            examQuestions: [
              {
                q: "Describe the engineering of a British-era perennial irrigation canal. Cover the headworks, the main canal slope and section, the distributary system, the warabandi rotation, and cross-drainage works, with three named systems.",
                marks: 7,
                outline: [
                  "Set the scale: Upper Ganges Canal 1854; ≈ 30 million acres under canal irrigation by 1947.",
                  "List the perennial canal parts: headworks (weir/anicut), regulator, main canal, branches, distributaries, watercourses.",
                  "State the main canal slope (1:5000 to 1:10000) and trapezoidal section, masonry-lined or earth.",
                  "Describe the warabandi rotation: hours proportional to landholding, per cropping cycle.",
                  "Explain cross-drainage works: aqueduct (canal over stream) and super-passage (stream over canal).",
                  "Name three systems: Upper Ganges Canal (1854), Sirhind Canal (1882), Sukkur Barrage (1932).",
                  "Close with the irrigation cycle: kharif supplement, rabi main supply, return drainage to the river.",
                ],
              },
              {
                q: "What is the warabandi system of canal water distribution?",
                marks: 2,
              },
              {
                q: "Distinguish between an aqueduct and a super-passage as cross-drainage works.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Victoria Terminus, Bombay",
            body: [
              "Victoria Terminus (now Chhatrapati Shivaji Maharaj Terminus) in Bombay, completed in 1887 to designs by Frederick William Stevens, was the headquarters of the Great Indian Peninsular Railway and the largest colonial-era building in India. The station covers 1.05 hectares; its central dome rises 53 metres, and the building accommodated the headquarters offices of the GIP Railway, ticket halls, waiting rooms and departure platforms. The architecture is Gothic Revival with Italianate and Mughal elements: pointed arches, ribbed vaults, gargoyles, stained glass, and a profusion of carved detail in Porbandar stone and Coorla basalt. The central dome is ribbed, crowned by a 4.5-metre statue of Progress, and was originally painted in red and gold.",
              "The engineering of Victoria Terminus was the integration of four layered systems. At the base, the foundation is a raft of rubble masonry on the soft Bombay basalt, deep enough to support the 53-metre tower. Above the foundation, the structural frame is load-bearing masonry walls and stone columns - no steel frame was used, although by 1887 steel frames were becoming common in Chicago. Above the structural frame, the floor and roof system is a hybrid of masonry jack arches between iron beams (a fireproof floor system also used in the New York Times building) and timber-truss roofs over the platforms. Above the floors, the architectural envelope is the carved stone skin - pointed Gothic arches, ribbed vaults, a profusion of statuary representing the seasons, the castes of India and the railways themselves.",
              "Stevens coordinated the architectural programme with the engineering programme in a vertical layering. The lowest layer is the railway platform, with through tracks beneath steel trusses; the second is the ticket hall and departure concourse; the third is the GIP Railway headquarters office; the fourth is the central tower with the dome and the Statue of Progress. The plan is a C-shape opening to the platforms, with the central hall as the focus. The interior uses Italian marble, red sandstone and stained glass. The detailing is encyclopaedic: every column capital carries a different carving; the roundels in the spandrels represent the continents and the sciences; the lions, tigers and peacocks mark the meeting of British and Indian iconography. The 10-year construction used 2,500 workers and was the most expensive colonial building in India.",
            ],
            bullets: [
              "Victoria Terminus Bombay: 1887, architect F.W. Stevens, 1.05 ha site, 53 m central dome.",
              "Gothic Revival with Mughal elements: Porbandar stone + Coorla basalt, ribbed vaults, stained glass.",
              "Foundation: rubble masonry raft on soft Bombay basalt, deep enough for 53 m tower.",
              "Floor system: masonry jack arches between iron beams (fireproof) - same as New York Times.",
              "Statue of Progress (4.5 m) crowns the dome; construction used 2,500 workers over 10 years.",
            ],
            codeExample: {
              language: "text",
              caption: "Victoria Terminus - vertical layers of the building (bottom to top).",
              code: [
                "Layer 4 (apex)    Statue of Progress (4.5 m) on ribbed dome",
                "Layer 3           GIP Railway HQ offices (carved stone facade)",
                "Layer 2           Ticket hall + departure concourse",
                "Layer 1 (base)    Railway platforms with through tracks beneath steel trusses",
                "Foundation        Rubble masonry raft on Bombay basalt",
              ].join("\n"),
            },
            diagram: {
              kind: "layers",
              title: "Victoria Terminus - four layered systems",
              caption: "Index 0 renders as the top layer; reading down is from dome to foundation.",
              layers: [
                { label: "Architectural envelope (Gothic stone skin)", note: "Statuary, arches, vaults" },
                { label: "Floor and roof system", note: "Jack arches between iron beams + timber trusses" },
                { label: "Structural frame", note: "Load-bearing masonry walls and stone columns" },
                { label: "Foundation raft", note: "Rubble masonry on Bombay basalt" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "VT = four layered systems stacked: foundation raft -> structural masonry -> fireproof jack-arch floors -> Gothic stone skin. Name the architect (F.W. Stevens) and the statue (Progress) and you have three easy marks.",
            },
            keyTerms: [
              { term: "Jack arch", definition: "Shallow masonry arch spanning between iron beams, used as a fireproof floor system at Victoria Terminus." },
              { term: "Gothic Revival", definition: "Architectural style of pointed arches, ribbed vaults and ornate carving, used by Stevens for Victoria Terminus." },
              { term: "Statue of Progress", definition: "4.5-metre crowning figure on the central dome of Victoria Terminus, originally painted red and gold." },
            ],
            examQuestions: [
              {
                q: "Describe Victoria Terminus, Bombay. Cover its dimensions, the architect, the four layered systems (foundation, structure, floor, skin), and the integration of architectural and engineering programmes.",
                marks: 7,
                outline: [
                  "State the basics: 1887, architect F.W. Stevens, 1.05 ha site, 53 m central dome.",
                  "Identify the four layered systems: foundation, structural frame, floor/roof, architectural envelope.",
                  "Describe the foundation raft: rubble masonry on soft Bombay basalt, deep enough for the 53 m tower.",
                  "Describe the structural frame: load-bearing masonry walls and stone columns (no steel frame).",
                  "Describe the floor/roof system: masonry jack arches between iron beams (fireproof) + timber trusses over platforms.",
                  "Describe the architectural envelope: Porbandar stone + Coorla basalt, pointed arches, ribbed vaults, Statue of Progress.",
                  "Note the C-shaped plan opening to platforms and the 10-year, 2,500-worker construction.",
                ],
              },
              {
                q: "Who was the architect of Victoria Terminus and what statue crowns its dome?",
                marks: 2,
              },
              {
                q: "Explain the jack-arch floor system used at Victoria Terminus and why it is called fireproof.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Indian Institutes buildings",
            body: [
              "The Indian Institutes buildings - the Indian Institute of Science at Bangalore (founded 1909), the Indian Institutes of Technology (IITs, from 1951 onward), and the older presidency colleges and universities of Bombay, Calcutta and Madras (1857-1860) - represent the architectural expression of colonial and post-colonial science and engineering education. The IISc Bangalore campus, designed in an Indo-Saracenic style by the firm C.F. Stevens and Otto Koenigsberger, hosts the Main Building (1917) with its distinctive clock tower, the Chemistry department (1920s) and the Physics department (1930s) - all in dressed Bangalore granite with Mughal arches, chhajjas and chhatris. The early IITs (Kharagpur 1951, Bombay 1958, Madras 1959, Kanpur 1959, Delhi 1961) were planned in the post-independence period with American, British, German and Russian collaboration respectively.",
              "The engineering of these campuses reflects two distinct traditions, best understood by comparison. The colonial-era institutes (IISc, the universities) used load-bearing masonry in dressed stone or brick, with span limited by the post-and-lintel or masonry arch; floors were jack arches on iron beams, roofed with timber trusses or shallow masonry vaults; climate control was by deep verandahs, chhajjas and cross-ventilated corridors. The post-independence IITs used RCC frame construction with brick infill, spanning classrooms and laboratories up to 12 metres with portal frames; floor slabs were RCC two-way slabs on columns, roofs were flat RCC with mud-phuska insulation; climate control was by deep verandahs in early IITs and by air conditioning in the 1970s extensions. The post-independence shift from masonry to RCC frame is the central engineering transition.",
              "The architecture of the institutes was deliberate: each campus was planned as a 'campus of learning' with academic quadrangle, residential hostels, faculty housing, library, workshop and playing fields, in the manner of Cambridge or MIT. The IIT Kharagpur campus, on the site of the Hijli Detention Camp, was the first; the master plan was by Werner M. Moser of the Federal Institute of Technology Zurich, with American academic advice. The IIT Bombay campus at Powai was designed by the American firm Gropius and Konrad Wachsmann; the IIT Madras campus by the German architect Otto Koenigsberger, with help from the West German government; the IIT Kanpur campus was planned with American collaboration under the Kanpur Indo-American Programme. The early IITs thus combined Indo-Saracenic roots (in IISc Bangalore) with international modernism (in IIT Bombay and IIT Kanpur), creating a stylistic contrast that frames the transition from colonial to post-colonial engineering education.",
            ],
            bullets: [
              "IISc Bangalore founded 1909; Main Building 1917 with clock tower in Indo-Saracenic style.",
              "IIT Kharagpur (1951) first IIT, on the Hijli Detention Camp site; master plan by Werner M. Moser.",
              "IIT Bombay (1958) at Powai, IIT Madras (1959) by Otto Koenigsberger with West German help.",
              "Colonial-era institutes: load-bearing masonry, jack-arch floors, deep verandahs for climate.",
              "Post-independence IITs: RCC frame with brick infill, two-way slabs, mud-phuska roof insulation.",
            ],
            table: {
              caption: "Colonial-era vs post-independence institute buildings.",
              headers: ["Aspect", "Colonial era (IISc)", "Post-independence (IIT)"],
              rows: [
                ["Structure", "Load-bearing masonry", "RCC frame with brick infill"],
                ["Floor", "Jack arch on iron beams", "RCC two-way slab on columns"],
                ["Roof", "Timber truss or masonry vault", "Flat RCC + mud-phuska insulation"],
                ["Climate", "Deep verandahs and chhajjas", "Verandahs (early) / AC (later)"],
                ["Plan", "Academic quadrangle", "Academic quadrangle + hostels"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Colonial vs post-independence institute buildings",
              caption: "Two traditions, one mission - masonry to RCC frame.",
              left: {
                heading: "Colonial era (IISc)",
                items: [
                  "Load-bearing dressed granite",
                  "Jack-arch floors on iron beams",
                  "Timber truss or masonry vault roof",
                  "Indo-Saracenic style with chhajjas",
                  "Deep verandahs for climate",
                ],
              },
              right: {
                heading: "Post-independence (IIT)",
                items: [
                  "RCC frame with brick infill",
                  "Two-way RCC slab on columns",
                  "Flat RCC roof + mud-phuska",
                  "International modernist style",
                  "Verandahs (early) then air conditioning",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always compare colonial and post-independence institutes on five axes: structure, floor, roof, climate, plan. The five-axis comparison earns five marks out of seven; the two remaining marks go to naming one example of each (IISc and an IIT).",
            },
            keyTerms: [
              { term: "Indo-Saracenic", definition: "Architectural style blending Indian (Mughal, chhajja, chhatri) and Gothic elements, used at IISc Bangalore." },
              { term: "RCC frame", definition: "Reinforced concrete column-and-beam frame with brick infill, the structural type of post-independence IITs." },
              { term: "Mud-phuska", definition: "Traditional roof insulation of mud and straw laid over flat RCC to reduce heat gain." },
            ],
            examQuestions: [
              {
                q: "Compare the architecture and engineering of colonial-era (IISc Bangalore) and post-independence (IIT) institute buildings. Cover structure, floor, roof, climate control and plan, with named examples of each tradition.",
                marks: 7,
                outline: [
                  "Set up the comparison: colonial-era IISc (1909) vs post-independence IITs (Kharagpur 1951 onward).",
                  "Structure: load-bearing dressed masonry at IISc vs RCC frame with brick infill at IITs.",
                  "Floor: jack arches on iron beams at IISc vs RCC two-way slab on columns at IITs.",
                  "Roof: timber truss or masonry vault at IISc vs flat RCC with mud-phuska at IITs.",
                  "Climate: deep verandahs and chhajjas at IISc vs verandahs (early) then air conditioning at IITs.",
                  "Plan: academic quadrangle at IISc, extended with hostels and faculty housing at IITs.",
                  "Conclude that the post-independence shift from masonry to RCC frame is the central engineering transition.",
                ],
              },
              {
                q: "Which was the first IIT and on what site was it established?",
                marks: 2,
              },
              {
                q: "Explain the structural transition from load-bearing masonry to RCC frame in Indian institute buildings.",
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
      title: "Ancient Water Management and Sustainability",
      summary:
        "India's indigenous water systems - stepwells (baoli, vav, kund), tanks and their cascades, qanat-style underground galleries (khadin, naula, surangam), rooftop and surface rainwater harvesting, and the five lessons (decentralisation, integration, materials, climate, circular water) they offer to modern sustainable engineering.",
      chapter: {
        number: "05",
        title: "Ancient Water Management and Sustainability",
        intro:
          "Unit V closes the subject with India's ancient water-management heritage and its modern relevance: the multi-storey stepwell (Rani-ki-Vav, Adalaj, Chand Baori), the tank cascade of Tamil Nadu, the qanat-style khadin and surangam, the harvest-use-recharge cycle of the rooftop kund and the johad, and finally the five lessons that map traditional practice onto the modern vocabulary of GRIHA, IGBC and LEED.",
        inOneBreath:
          "A stepwell (baoli, vav, kund) is a multi-storey reverse-pyramid excavation with 50-150 steps descending to the water table; a tank (kund, eri, cheruvu) is an earthen embankment impounding runoff with a plug-hole sluice for depth control; Tamil Nadu's tank cascade buffers floods through 10-20 linked tanks along a drainage line; the qanat and its Indian variants (khadin, naula, surangam) are gravity-driven underground galleries at 1:1000-1:1500 with negligible evaporation; traditional rainwater harvesting follows the harvest-use-recharge cycle on three design principles (decentralisation, integration, seasonality); and the five lessons for modern sustainable engineering map traditional practice to GRIHA, IGBC and LEED credits.",
        sections: [
          {
            number: "5.1",
            title: "Stepwells - baoli, vav and kund",
            body: [
              "Stepwells (called baoli in north India, vav in Gujarat, kund or kalyani in the south) are India's most distinctive hydraulic structure. They are wells dug into the ground with a stepped gallery descending to the water table, often with a series of pillared pavilions (mandapas) at each level for rest, prayer and social gathering. The earliest known stepwells date from the Gupta period (4th-6th century CE); the genre flowered in the medieval period, particularly in Gujarat and Rajasthan where the water table is deep and rainfall is sparse. The Rani-ki-Vav at Patan (11th century, Queen Udayamati), the Adalaj stepwell near Ahmedabad (1499), the Dada Hari ni Vav (1499) and the Chand Baori at Abhaneri (8th-9th century) are the most famous.",
              "The engineering of a stepwell is a multi-storey excavation. The well is dug as a deep rectangular pit, typically 20 to 30 metres deep, with the aquifer at the bottom and an open shaft at one end for ventilation and water drawing. The opposite end carries a broad staircase of 50 to 150 steps, descending through four to seven storeys of pillared galleries. The galleries are corbelled or true-arched stone construction; the side walls are dressed stone on rubble core; the columns are Hindu in profile, often carved with images of Ganesha, Vishnu, Shiva and the river goddesses Ganga and Yamuna. The whole structure is a reverse pyramid of light and air: each descending storey narrows, so the lowest gallery, at water level, is intimate and cool - a thermal refuge in summer.",
              "Stepwells served three functions: water storage, social space, and climate refuge. The water was kept clean by the deep filter of earth and stone; access steps allowed carriers to descend as the water table fluctuated through the year. The galleries hosted travellers, pilgrims and villagers in the hot season; women used them as a private meeting place during their daily water-fetch. The choice of plan was determined by three design forks: the audience (royal or village), the soil (compact sandstone or soft alluvium), and the water table (deep or shallow). Royal stepwells like Rani-ki-Vav and Adalaj used multi-storey galleries and elaborate carving; village kunds used a simple circular or square plan with a single staircase. The genre declined under the British, who saw them as unhygienic; recent restoration efforts have revived the most famous examples.",
            ],
            bullets: [
              "Stepwell names: baoli (north), vav (Gujarat), kund or kalyani (south).",
              "Rani-ki-Vav Patan 11th c. + Adalaj 1499 + Chand Baori Abhaneri 8th-9th c. are the most famous.",
              "Multi-storey pit: 20-30 m deep, 50-150 steps, 4-7 storeys of pillared galleries, ventilation shaft at the back.",
              "Reverse pyramid: galleries narrow with depth, keeping the lowest level cool and intimate.",
              "Three design forks: audience (royal/village), soil (sandstone/alluvium), water table (deep/shallow).",
            ],
            table: {
              caption: "Four famous stepwells and their features.",
              headers: ["Stepwell", "Period", "Location", "Plan"],
              rows: [
                ["Chand Baori, Abhaneri", "8th-9th c.", "Rajasthan", "Square, 4 sides of steps"],
                ["Rani-ki-Vav, Patan", "11th c.", "Gujarat", "Linear, multi-storey"],
                ["Adalaj", "1499", "Gujarat", "Octagonal, 5 storeys"],
                ["Dada Hari ni Vav", "1499", "Ahmedabad", "Linear, 5 storeys"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Stepwell design forks",
              caption: "One well, three design choices - audience, soil, water table depth.",
              start: "Stepwell commission",
              branches: [
                { label: "Royal (Rani-ki-Vav)", outcome: "Multi-storey galleries, carved columns", good: true },
                { label: "Village kund", outcome: "Simple square or circular plan", good: true },
                { label: "Sandstone site (Abhaneri)", outcome: "Square, 4 sides of steps", good: true },
                { label: "Alluvium site (Gujarat vavs)", outcome: "Linear, deep galleries", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always list three names (baoli, vav, kund) and three examples (Rani-ki-Vav, Adalaj, Chand Baori). The design forks (audience, soil, water table) earn three marks; the multi-storey reverse-pyramid description earns the rest.",
            },
            keyTerms: [
              { term: "Baoli", definition: "North Indian name for a stepwell, a stepped gallery well dug to the water table." },
              { term: "Vav", definition: "Gujarati name for a stepwell, typically multi-storey with pillared galleries." },
              { term: "Mandapa", definition: "Pillared pavilion at each level of a stepwell, used for rest and ritual." },
            ],
            examQuestions: [
              {
                q: "Describe the architecture and engineering of an Indian stepwell. Cover the multi-storey plan, the reverse-pyramid section, the three design forks, and four named examples from different regions.",
                marks: 7,
                outline: [
                  "Define the type: a stepped gallery well descending to the water table, with pillared mandapas at each level.",
                  "Describe the multi-storey pit: 20-30 m deep, 50-150 steps, 4-7 storeys, ventilation shaft at the back.",
                  "Explain the reverse-pyramid section: galleries narrow with depth, keeping the lowest level cool.",
                  "List the three design forks: audience (royal/village), soil (sandstone/alluvium), water table (deep/shallow).",
                  "Name the four examples: Chand Baori Abhaneri (8th-9th c.), Rani-ki-Vav Patan (11th c.), Adalaj (1499), Dada Hari ni Vav (1499).",
                  "Note the three functions: water storage, social space, climate refuge.",
                  "Mention the decline under British rule and the recent restoration of famous examples.",
                ],
              },
              {
                q: "Name three regional terms for a stepwell in India.",
                marks: 2,
              },
              {
                q: "Explain the reverse-pyramid section of a stepwell and how it provides thermal comfort.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Tanks - kund, eri and the cascade system",
            body: [
              "Tanks (called kund in Rajasthan, eri in Tamil Nadu, cheruvu in Andhra, pushkarini in temple complexes) are the most widespread indigenous water-harvesting structure in India. They are earthen or masonry embankments built across a natural drainage line, impounding runoff from a 5 to 50 square kilometre catchment. South India alone has some 120,000 tanks; the Tamil country, particularly around Chennai and Tirunelveli, has chains of tanks each feeding the next, called 'system tanks'. The grand temple tanks of South India - the Kamalalayam at Tiruvarur (one of the largest in Asia), the tank at Rameswaram, and the Surya tank at Modhera in Gujarat - are religious and hydraulic structures combined: a square or rectangular masonry tank, with steps on all sides, a central shrine, and an inlet fed by a feeder canal.",
              "The engineering of a tank follows a five-stage pipeline. First, the catchment is surveyed and the drainage line identified by walking the slope; the tank site is selected where the embankment can be shortest and the storage largest. Second, the embankment (bund) is built of earth compacted in layers, with a stone-pitched upstream face to resist wave action and a waste weir to release excess flood. Third, a sluice at the deepest point of the tank controls the outflow into the command area; a stone shaft with a series of plug holes allows the operator to draw water from any chosen depth. Fourth, the command area below the tank is divided into plots served by a distribution channel, often using the same warabandi rotation as the British canals. Fifth, surplus water from one tank is discharged into the next tank in the chain, completing the cascade.",
              "Tamil Nadu's tank cascade system is the most studied. A chain of 10 to 20 tanks runs along a drainage line from the headwater to the sea; each tank fills in the monsoon, supplies its command area for the rabi crop, and passes surplus to the next. The chain acts as a buffer: floods in the upper catchment are absorbed step by step, with each tank holding back a portion of the flow. The system, developed by the Cholas (9th-13th century), survives in modified form today. The temple tanks of South India are smaller but follow the same engineering: a square masonry tank with steps on all sides, an inlet feeder canal from a local catchment, and an underground recharge system that feeds the surrounding wells. The Modhera Surya tank (1026) is a masterpiece of solar-aligned temple-tank engineering, with the temple's spire casting a shadow on the tank on the equinoxes.",
            ],
            bullets: [
              "Tanks (kund, eri, cheruvu, pushkarini): ≈ 120,000 in South India alone.",
              "Embankment: earth bund with stone-pitched upstream face and waste weir for flood release.",
              "Sluice shaft with plug holes: draws water from any chosen depth of the tank.",
              "Tamil Nadu tank cascade: 10-20 tanks along a drainage line, each feeding the next.",
              "Temple tanks: square masonry with steps on all sides, central shrine, feeder canal (Modhera Surya 1026).",
            ],
            codeExample: {
              language: "text",
              caption: "Tank engineering pipeline - catchment to cascade.",
              code: [
                "Stage 1  Catchment survey : walk the drainage line, select tank site",
                "Stage 2  Bund construction : earth embankment, stone-pitched face, waste weir",
                "Stage 3  Sluice            : stone shaft with plug holes for depth control",
                "Stage 4  Command area      : distribution channel + warabandi rotation",
                "Stage 5  Cascade           : surplus to next tank in chain",
              ].join("\n"),
            },
            diagram: {
              kind: "pipeline",
              title: "Tank engineering pipeline",
              caption: "Catchment survey to cascade overflow - five stages of indigenous tank irrigation.",
              stages: [
                { label: "Catchment survey" },
                { label: "Bund with waste weir" },
                { label: "Sluice with plug holes" },
                { label: "Command area + warabandi" },
                { label: "Cascade to next tank" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "Tanks = five stages: catchment - bund - sluice - command - cascade. The plug-hole sluice is the technical detail RGPV looks for; the cascade concept earns the last two marks. Always name three regional terms (kund, eri, cheruvu).",
            },
            keyTerms: [
              { term: "Eri", definition: "Tamil term for a tank, an earthen embankment impounding runoff for irrigation." },
              { term: "Sluice shaft", definition: "Vertical stone shaft with plug holes that allows water to be drawn from any chosen depth of a tank." },
              { term: "Tank cascade", definition: "Chain of 10-20 tanks along a drainage line, each passing surplus water to the next." },
            ],
            examQuestions: [
              {
                q: "Describe the engineering of an Indian tank system. Cover the five-stage pipeline (catchment, bund, sluice, command, cascade), the Tamil Nadu cascade concept, and three regional names for a tank.",
                marks: 7,
                outline: [
                  "List three regional names: kund (Rajasthan), eri (Tamil Nadu), cheruvu (Andhra).",
                  "Trace the five-stage pipeline: catchment survey, bund with waste weir, sluice with plug holes, command area, cascade.",
                  "Describe the embankment: earth bund, stone-pitched upstream face, waste weir for flood release.",
                  "Explain the plug-hole sluice shaft that allows drawing water from any chosen depth.",
                  "Describe the Tamil Nadu cascade: 10-20 tanks along a drainage line, each feeding the next.",
                  "Explain the flood-buffer function: each tank holds back a portion of the upper catchment flow.",
                  "Note the Chola origin (9th-13th century) and the temple-tank variant (Modhera Surya 1026).",
                ],
              },
              {
                q: "What is the function of the plug-hole sluice in a traditional tank?",
                marks: 2,
              },
              {
                q: "Explain the Tamil Nadu tank cascade and how it buffers floods.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Qanat-style systems - khadin, naula and surangam",
            body: [
              "The qanat - an underground horizontal gallery tapping a hillside aquifer and carrying water by gravity to a plain - is most associated with Persia, but variants exist across the Indian subcontinent. The Persian qanat itself was introduced into Balochistan and Sindh by medieval Persian settlers; the city of Jaisalmer in the Thar Desert used a related system called the khadin, in which a long earthen embankment across a gently sloping catchment collects runoff that percolates into the sand and is later drawn from wells downstream. The naula of the Himalayan foothills - a small covered gallery tapping a hillside spring - is another regional variant. Surangams of Kerala's Kasaragod district, hand-dug horizontal tunnels into laterite hills, are a tropical version of the same idea: underground, gravity-driven, evaporation-minimising water transport.",
              "The engineering of a qanat is a masterful exercise in passive hydraulics. A mother well is dug upslope into the aquifer; from its base, a gently sloping gallery (gradient 1:1000 to 1:1500) is dug horizontally toward the plain, with a series of vertical shafts at intervals of 20 to 50 metres for ventilation and spoil removal. The gallery emerges at the surface at the delivery point, where the water is collected in a cistern or channel. Because the gallery is underground, evaporation is negligible; because the flow is gravity-driven, no pumps are needed; because the aquifer is tapped at its mother well, the water is filtered by the natural soil and clean. The discharge is modest (5 to 50 litres per second) but constant year-round, providing a reliable water supply in arid regions.",
              "The Indian variants share the same principles. The khadin of Jaisalmer is a long earthen embankment (typically 1 to 2 km) across a 5 to 20 sq km catchment; runoff collects behind the embankment, percolates into the sandy soil, and emerges as subsurface flow at wells downstream - the village of Khadin Sukh, with its 500-year-old system, is the type example. The surangams of Kasaragod are 30 to 100 metre horizontal tunnels dug into laterite hills, with the inlet at a spring and the outlet at a small cistern; one surangam can irrigate 1 to 2 hectares for a family. The naulas of Kumaon are smaller still - covered stone galleries 5 to 15 metres long, tapping a spring for a single village. All four variants follow a five-stage flow: locate the aquifer (or spring), dig the mother well, drive the gallery, dig ventilation shafts, deliver to cistern or channel.",
            ],
            bullets: [
              "Qanat (Persia), khadin (Jaisalmer), naula (Kumaon), surangam (Kerala) are Indian variants of the qanat.",
              "Mother well upslope; gently sloping gallery (1:1000 to 1:1500) to the delivery point.",
              "Vertical shafts at 20-50 m intervals for ventilation and spoil removal.",
              "Constant gravity-driven discharge of 5-50 litres/second; negligible evaporation underground.",
              "Khadin: 1-2 km earthen embankment across catchment; runoff percolates to downstream wells.",
            ],
            codeExample: {
              language: "text",
              caption: "Qanat five-stage flow - aquifer to delivery.",
              code: [
                "Stage 1  Locate aquifer  : upslope geological survey, test wells",
                "Stage 2  Mother well      : vertical shaft to the water table",
                "Stage 3  Gallery          : horizontal tunnel, slope 1:1000 to 1:1500",
                "Stage 4  Ventilation      : vertical shafts at 20-50 m intervals",
                "Stage 5  Delivery         : outlet at surface, cistern or open channel",
              ].join("\n"),
            },
            diagram: {
              kind: "flow",
              title: "Qanat-style system - five-stage flow",
              caption: "From aquifer to delivery - a passive, gravity-driven, evaporation-free water supply.",
              steps: [
                { label: "Locate aquifer (upslope survey)" },
                { label: "Dig mother well to water table" },
                { label: "Drive gallery at 1:1000 to 1:1500" },
                { label: "Sink ventilation shafts at 20-50 m" },
                { label: "Deliver to cistern or channel" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "RGPV expects four named Indian variants (qanat, khadin, naula, surangam) and the gallery gradient (1:1000 to 1:1500). The 'passive' label - no pumps, no evaporation, year-round discharge - is the slogan that earns two easy marks.",
            },
            keyTerms: [
              { term: "Qanat", definition: "Underground gently-sloping gallery tapping a hillside aquifer and carrying water by gravity to the plain." },
              { term: "Khadin", definition: "Jaisalmer system of a long earthen embankment across a catchment, with runoff percolating to downstream wells." },
              { term: "Surangam", definition: "Hand-dug horizontal tunnel into a laterite hill of Kerala, tapping a spring for 1-2 hectares of irrigation." },
            ],
            examQuestions: [
              {
                q: "Describe the qanat system and its Indian variants. Cover the five-stage flow, the gallery gradient, the ventilation shafts, and four named regional variants (qanat, khadin, naula, surangam).",
                marks: 7,
                outline: [
                  "Define the qanat: underground horizontal gallery tapping a hillside aquifer, gravity-driven.",
                  "Trace the five-stage flow: locate aquifer, dig mother well, drive gallery, sink ventilation shafts, deliver.",
                  "State the gallery gradient: 1:1000 to 1:1500, with vertical shafts at 20-50 m intervals.",
                  "Note the discharge: 5-50 litres per second, constant year-round, negligible evaporation.",
                  "Name the four Indian variants: qanat (Persia/Balochistan), khadin (Jaisalmer), naula (Kumaon), surangam (Kerala).",
                  "Describe the khadin: 1-2 km earthen embankment, runoff percolates to downstream wells.",
                  "Mention the surangam: 30-100 m horizontal tunnel in laterite, irrigating 1-2 hectares.",
                ],
              },
              {
                q: "What is the typical gradient of a qanat gallery?",
                marks: 2,
              },
              {
                q: "Explain how the khadin of Jaisalmer provides subsurface irrigation without pumps.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Traditional rainwater harvesting",
            body: [
              "Traditional rainwater harvesting in India divides into two types: rooftop collection and surface catchment collection. Rooftop harvesting is ancient in Rajasthan, where every house in Jaisalmer, Bikaner and Jodhpur has a sloped roof draining to a kund - a circular masonry cistern of 5 to 50 cubic metres, plastered inside with lime and sealed at the rim to keep out dust. The kund's narrow neck holds a sieve to filter leaves; a small drain at the bottom allows periodic cleaning. The water stored in a kund can last a family through the nine-month dry season. Similar systems exist in the tiled-roof housing of Kerala, where a thoni (large earthen pot) collects the first monsoon rainwater for drinking.",
              "Surface catchment harvesting is the more ambitious system. The tank cascade of Tamil Nadu, the khadin of Jaisalmer, the check dam (gully plug) networks of the Aravalli hills, the bawri of Rajasthan (a small stepwell fed by runoff), and the johad of Alwar district - revived dramatically by the Tarun Bharat Sangh movement in the 1980s - all harvest runoff from a defined catchment and store it for irrigation and recharge. A johad is a simple crescent-shaped earthen embankment across a gully, 100 to 500 metres long and 1 to 3 metres high, that catches monsoon runoff and lets it percolate into the aquifer, raising the water table across a 5 to 10 sq km area. Five hundred johads revived the Arvari river in Alwar, demonstrating the power of distributed traditional systems.",
              "The harvest-use-recharge cycle closes the loop. Rainwater is harvested from a roof or catchment, used directly for drinking or impounded in a tank for irrigation, and the surplus recharges the aquifer through percolation pits, wells and tank beds. The cycle mirrors the natural hydrological cycle but compresses it into the village scale. The traditional system has three design principles: decentralisation (every house and village has its own system), integration (the same structure serves harvesting, storage, recharge and social functions), and seasonality (the structures are sized for the monsoon surplus, with the dry season drawing down the stored water). Modern rainwater harvesting policy in India - mandated by the Tamil Nadu Municipal Laws (2003) and similar state laws - draws directly on these traditional principles, adapting them to urban buildings.",
            ],
            bullets: [
              "Rooftop harvesting in Rajasthan: sloped roof drains to a kund (circular masonry cistern, 5-50 cu m).",
              "Tank cascade, khadin, johad (Alwar, 500+ revived by Tarun Bharat Sangh in the 1980s).",
              "Johad: crescent earthen embankment 100-500 m long, 1-3 m high, raises water table over 5-10 sq km.",
              "Harvest-use-recharge cycle: rooftop to cistern to aquifer; decentralised and integrated.",
              "Modern mandate: Tamil Nadu Municipal Laws (2003) require rainwater harvesting in new buildings.",
            ],
            codeExample: {
              language: "text",
              caption: "Harvest-use-recharge cycle - the traditional rainwater loop.",
              code: [
                "Step 1  Harvest   : Rooftop drain or surface catchment runoff",
                "Step 2  Filter    : Sieve at kund neck or percolation pit",
                "Step 3  Store     : Kund (5-50 cu m) or tank for the dry season",
                "Step 4  Use       : Drinking, domestic, or irrigation draw-down",
                "Step 5  Recharge  : Surplus percolates into the aquifer, raises wells",
              ].join("\n"),
            },
            diagram: {
              kind: "cycle",
              title: "Harvest-use-recharge rainwater cycle",
              caption: "Five-step closed loop at the village scale - the principle behind Indian traditional water management.",
              steps: [
                { label: "Harvest (rooftop or catchment)" },
                { label: "Filter (sieve or percolation pit)" },
                { label: "Store (kund or tank)" },
                { label: "Use (drinking or irrigation)" },
                { label: "Recharge (aquifer and wells)" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "Three design principles to quote verbatim: decentralisation, integration, seasonality. The Arvari river revival in Alwar by Tarun Bharat Sangh (Rajendra Singh, Magsaysay Award 2001) is the live example RGPV expects when asked about modern revival of traditional systems.",
            },
            keyTerms: [
              { term: "Kund", definition: "Rajasthani circular masonry cistern of 5-50 cu m, plastered with lime, fed by rooftop rainwater." },
              { term: "Johad", definition: "Crescent-shaped earthen embankment across a gully that catches monsoon runoff and recharges the aquifer." },
              { term: "Percolation pit", definition: "Stone-filled pit at the foot of a downpipe that filters rooftop runoff into the aquifer." },
            ],
            examQuestions: [
              {
                q: "Describe traditional rainwater harvesting systems of India. Cover rooftop (kund) and surface (johad) types, the harvest-use-recharge cycle, and the three design principles; cite the Arvari river revival as a case.",
                marks: 7,
                outline: [
                  "Define the two types: rooftop collection (Rajasthan kund, Kerala thoni) and surface catchment (johad, khadin, tank cascade).",
                  "Describe the kund: circular masonry cistern 5-50 cu m, lime-plastered, narrow neck with sieve, 9-month supply.",
                  "Describe the johad: crescent earthen embankment 100-500 m long, 1-3 m high, recharges aquifer over 5-10 sq km.",
                  "Trace the harvest-use-recharge cycle: harvest, filter, store, use, recharge.",
                  "State the three design principles: decentralisation, integration, seasonality.",
                  "Cite the Arvari river revival in Alwar: 500+ johads by Tarun Bharat Sangh, Rajendra Singh Magsaysay 2001.",
                  "Note the modern mandate: Tamil Nadu Municipal Laws (2003) on rainwater harvesting in new buildings.",
                ],
              },
              {
                q: "What is a kund and what is its typical capacity?",
                marks: 2,
              },
              {
                q: "Explain the design principles of decentralisation, integration and seasonality in traditional rainwater harvesting.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Lessons for modern sustainable engineering",
            body: [
              "Traditional Indian civil engineering practices offer five lessons for modern sustainable design: decentralisation, integration, materials efficiency, climate responsiveness, and circular water management. Decentralisation: rather than a few large dams and central treatment plants, the traditional approach spread storage across thousands of small tanks, stepwells and kunds, each serving its locality - a model that fits the modern call for distributed infrastructure. Integration: the same structure served multiple functions - the stepwell was water source, social space and climate refuge; the temple tank was religious, hydraulic and ecological. Materials efficiency: Indus brick standardisation, Ashokan monolithic stone, Gupta dressed-stone temples, and the mud-phuska roof insulation of the post-independence IITs all show the use of local materials with minimal embodied energy.",
              "Climate responsiveness is the fourth lesson. The Indus city was oriented to the cardinal directions to control solar gain; the Lodi tomb used the chhajja and chhatri for shading and ventilation; the tah-khana and badgir of Tughlaqabad were passive cooling chambers; the Mughal Nahr-i-Bihisht used running water to cool the Red Fort palaces; the stepwell was a thermal refuge in the desert summer. None of these used mechanical air conditioning. The post-independence IITs with deep verandahs and mud-phuska roofs were the last examples; the modern glass-and-AC campus breaks the lineage. The fifth lesson is circular water management: the harvest-use-recharge cycle of the kund, tank and khadin closed the water loop at the village scale - the same principle modern green building rating systems (GRIHA, IGBC, LEED) reward with credits.",
              "The matrix of lessons maps traditional practice to modern sustainability. Decentralisation maps to distributed infrastructure and microgrids; integration maps to mixed-use development; materials efficiency maps to low-embodied-energy design; climate responsiveness maps to passive cooling and bioclimatic design; circular water management maps to closed-loop plumbing and zero-liquid-discharge. Ancient practices thus anticipate the modern sustainability vocabulary by a thousand years. The challenge for the modern engineer is to translate the traditional principles into the modern context: a 21st-century building cannot be a stepwell, but it can apply the harvest-use-recharge cycle; a new campus cannot be a Mughal fort, but it can apply the Nahr-i-Bihisht water-cooling principle. The historical study is therefore not nostalgia but a source of design intelligence - the explicit thesis of CE-306.",
            ],
            bullets: [
              "Decentralisation: thousands of small tanks/kunds rather than a few large dams.",
              "Integration: one structure serves storage, social, religious and climatic functions.",
              "Materials efficiency: local stone, brick, mud-phuska with minimal embodied energy.",
              "Climate responsiveness: chhajja, chhatri, tah-khana, badgir, Nahr-i-Bihisht - all passive cooling.",
              "Circular water: harvest-use-recharge cycle maps to GRIHA/IGBC/LEED credits today.",
            ],
            codeExample: {
              language: "text",
              caption: "Lessons matrix - traditional practice vs modern sustainability term.",
              code: [
                "Traditional practice          Modern sustainability term",
                "------------------------------------------------------------",
                "Decentralised tanks/kunds     Distributed infrastructure",
                "Multi-functional stepwell     Mixed-use development",
                "Local stone + mud-phuska      Low embodied energy design",
                "Chhajja, chhatri, badgir      Passive cooling + bioclimatic",
                "Harvest-use-recharge cycle    Closed-loop + zero-liquid-discharge",
              ].join("\n"),
            },
            diagram: {
              kind: "matrix",
              title: "Lessons matrix - traditional vs modern sustainable engineering",
              caption: "Quadrant order: top-left, top-right, bottom-left, bottom-right.",
              axes: { x: "Scale (decentralised to centralised)", y: "Function (single to multi)" },
              quadrants: [
                { label: "Decentralised, multi-function", note: "Stepwell, tank cascade, temple tank" },
                { label: "Centralised, multi-function", note: "Mughal fort with Nahr-i-Bihisht" },
                { label: "Decentralised, single-function", note: "Rooftop kund, village naula" },
                { label: "Centralised, single-function", note: "British canal headworks and barrage" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "End your answer with the thesis: 'traditional practices anticipate modern sustainability vocabulary by a thousand years'. The five-lesson structure (decentralisation, integration, materials, climate, circular water) is the framework RGPV expects; map each to a traditional example and a modern equivalent for full marks.",
            },
            keyTerms: [
              { term: "Embodied energy", definition: "Total energy used to extract, manufacture, transport and install a material - low for traditional stone, brick and mud." },
              { term: "Passive cooling", definition: "Building design that maintains comfort without mechanical air conditioning, using shading, ventilation and thermal mass." },
              { term: "GRIHA", definition: "Indian green building rating system (Green Rating for Integrated Habitat Assessment) that credits traditional principles like rainwater harvesting." },
            ],
            examQuestions: [
              {
                q: "Discuss five lessons that traditional Indian civil engineering practices offer to modern sustainable engineering. Cover decentralisation, integration, materials efficiency, climate responsiveness and circular water management, mapping each to a traditional example and a modern equivalent.",
                marks: 7,
                outline: [
                  "State the five lessons: decentralisation, integration, materials efficiency, climate responsiveness, circular water.",
                  "Decentralisation: thousands of small tanks/kunds vs a few large dams; maps to distributed infrastructure.",
                  "Integration: stepwell as water source + social space + climate refuge; maps to mixed-use development.",
                  "Materials efficiency: Indus brick, Ashokan stone, mud-phuska; maps to low embodied energy design.",
                  "Climate responsiveness: chhajja, chhatri, tah-khana, badgir, Nahr-i-Bihisht; maps to passive cooling.",
                  "Circular water: harvest-use-recharge cycle of kund/tank/khadin; maps to closed-loop and zero-liquid-discharge.",
                  "Close with the thesis: traditional practices anticipate modern sustainability vocabulary by a thousand years - the explicit thesis of CE-306.",
                ],
              },
              {
                q: "Name two green building rating systems used in India today.",
                marks: 2,
              },
              {
                q: "Explain how the Nahr-i-Bihisht of the Red Fort illustrates the principle of climate-responsive passive cooling.",
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
        "RGPV CE-306 papers typically spread 70 to 80 of the marks across three clusters: Indus Valley town planning and water systems (Units I and V), Indo-Islamic monuments with construction techniques (Unit III), and the comparative evolution of structures across eras (Units II and IV). Allocate revision time to the heaviest clusters first, but keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Indus town planning - Mohenjo-daro grid, drains, brick standardisation", weight: "8-10 marks", note: "Sketch the bipartite plan and the 4:2:1 brick module; both are almost guaranteed." },
        { topic: "Stepwells (baoli/vav/kund) and tank systems", weight: "8-10 marks", note: "Multi-storey reverse-pyramid section and the cascade concept; the Unit V anchor." },
        { topic: "Qutub Minar and Taj Mahal construction techniques", weight: "8-10 marks", note: "Dimensions, well foundation, double dome, pietra dura; name the architect and calligrapher." },
        { topic: "Rock-cut architecture (Chaitya hall + Kailasa temple)", weight: "6-8 marks", note: "Three excavation methods; label the layers of a Chaitya hall." },
        { topic: "Ashokan pillars and Sanchi stupa", weight: "6-8 marks", note: "Dowel-and-lead joint, Mauryan polish, worship cycle around the stupa." },
        { topic: "British bridges and the pneumatic caisson", weight: "6-8 marks", note: "Howrah dimensions, five-stage flow, caisson excavation below riverbed." },
        { topic: "Railway construction pipeline (Bombay-Thane, Bhor Ghat)", weight: "5-7 marks", note: "Six stages, gradient standards, black-cotton soil embankment." },
        { topic: "British-era irrigation canals and warabandi", weight: "5-7 marks", note: "Perennial canal parts, slope (1:5000-1:10000), tank cascade." },
        { topic: "Gupta temples and the post-and-lintel system", weight: "4-6 marks", note: "2x2 matrix of plan vs roof; name four temples." },
        { topic: "Lessons for modern sustainable engineering", weight: "4-6 marks", note: "Five lessons and their matrix mapping to GRIHA/IGBC/LEED." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - Indus Valley and Vedic", tasks: ["Mohenjo-daro grid plan, drains, brick 4:2:1 module", "Indus water supply and Vedic altar construction", "Sketch the bipartite plan and the Sulba-sutra geometry"] },
        { week: "Week 2", focus: "Unit II - Mauryan and Gupta", tasks: ["Ashokan pillars (joint, polish, capital choices)", "Sanchi stupa worship cycle and rock-cut architecture", "Gupta temples on the 2x2 matrix; Delhi iron pillar chemistry"] },
        { week: "Week 3", focus: "Unit III - Indo-Islamic", tasks: ["Qutub Minar dimensions and construction flow", "Tughlaqabad defensive pipeline; Lodi tomb comparison", "Red Fort matrix and Taj Mahal four signature techniques"] },
        { week: "Week 4", focus: "Unit IV - Colonial", tasks: ["British bridges: pneumatic caisson and five-stage flow", "Railway pipeline (survey to signalling) + Bhor Ghat incline", "Irrigation canals (warabandi, cascade) and Victoria Terminus layers"] },
        { week: "Week 5", focus: "Unit V - Water management", tasks: ["Stepwells (Rani-ki-Vav, Adalaj, Chand Baori) and design forks", "Tank pipeline and Tamil Nadu cascade", "Qanat-style systems + harvest-use-recharge cycle + lessons matrix"] },
        { week: "Week 6", focus: "Full revision + past papers", tasks: ["Sketch-only pass: redraw every diagram from memory", "Five-axis comparisons (Indus vs Vedic, colonial vs IIT, octagonal vs square)", "Two full past papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Pick the six anchor diagrams and redraw each from memory: Indus grid, Sanchi cycle, Tughlaqabad pipeline, Taj pyramid, British bridge flow, stepwell fork.",
        "Memorise the four signature numbers: 4:2:1 brick ratio, 72.5 m Qutub height, 457 m Howrah span, 7.2 m Delhi iron pillar height.",
        "Write the 7-mark outlines for the six most likely questions (one per unit) in single-line bullet form, not full paragraphs.",
        "List the architect and calligrapher names you tend to forget: Ustad Ahmad Lahauri, Amanat Khan, F.W. Stevens, Otto Koenigsberger.",
        "Revise the three rating systems and three regional tank terms (kund, eri, cheruvu) - cheap two-mark questions, easy to lose.",
        "Sleep seven hours; arrive 30 minutes early; carry two pens, a sharp pencil, an eraser and a 30 cm scale for the sketches.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Begin every answer with a labelled sketch - RGPV awards diagram marks first, then content. A bare diagram with five labels often scores more than a full paragraph without one.",
        "Quote dimensions verbatim: 72.5 m Qutub, 457 m Howrah, 7.2 m iron pillar, 4:2:1 brick ratio. Numbers earn method marks even when the narrative is thin.",
        "Name patrons and architects: Ashoka, Aibak, Iltutmish, Firoz Shah, Shah Jahan, Ustad Ahmad Lahauri, F.W. Stevens. Names anchor the historical context that RGPV rewards.",
        "For comparison questions (Indus vs Vedic, colonial vs IIT, octagonal vs square), use the 2x2 matrix or two-column compare diagram - never write two parallel paragraphs.",
        "Time-box: 2-mark in 4 min, 3-mark in 6 min, 7-mark in 15 min; keep the last 10 minutes for checking the sketches and the names.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Describing the Indus drain as 'open' - it was covered with removable slabs, the very feature that made it maintenance-friendly.",
        "Drawing the Sanchi stupa as a bare hemisphere - always add the harmika (square railing) and the three-tier chhatra on the central post.",
        "Quoting Taj Mahal construction without the well foundation - 90 masonry wells on a stone grillage, the unsung miracle that bears 40,000 tonnes.",
        "Confusing octagonal and square Lodi tombs - octagonal has 8 sides + circular drum; square has 4 sides + octagonal drum via squinch.",
        "Writing 'black-cotton soil' without the slope (1.5:1) and the stone-pitching protection - the swelling-clay behaviour is the point.",
        "Listing lessons for modern engineering without naming a rating system - GRIHA, IGBC, LEED are the modern equivalents that close the answer.",
      ],
    },
  ],
};
