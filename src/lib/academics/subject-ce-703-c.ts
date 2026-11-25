/**
 * Academics - RGPV Civil Engineering 7th-semester subject: CE-703(C)
 * Integrated Waste Management.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries 3 body paragraphs, 5 bullets,
 * a diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce703c: AcademicSubject = {
  id: "ce-703-c",
  code: "CE-703(C)",
  title: "Integrated Waste Management",
  semester: "VII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to integrated waste management: the 3R hierarchy and the 2016 rule family, municipal systems from generation to routing, composting, biomethanation, thermal and landfill technology, hazardous and special streams, and the circular economy cases - Indore, IoT smart waste and PPP - that close the loop.",
  description:
    "Five units walk the waste chain end to end. Unit I builds the hierarchy and the regulatory frame - SWM Rules 2016 and its sister rules for hazardous, biomedical, e-waste, C&D and plastic waste. Unit II follows municipal waste from generation studies through characterization, source segregation, collection systems, transfer stations and route planning. Unit III masters the treatment bench - windrow and vermicomposting, biomethanation, RDF, incineration, pyrolysis, gasification and the engineered landfill with its leachate and gas controls. Unit IV handles the special streams - the TSDF for hazardous waste, CBWTF for biomedical waste, e-waste, C&D recycling and plastics. Unit V turns strategy into systems with circular economy thinking, waste-to-energy pathway choices, informal sector integration and the Indore, IoT and PPP case studies. Every section pairs a redrawable diagram with tables, worked numbers and the questions RGPV actually asks.",
  accentColor: "#84cc16",
  emoji: "IWM",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Hierarchy and Framework",
      summary:
        "The foundation unit: what solid waste is, how the waste hierarchy and 3R rank every management option, the five streams Indian law recognises - municipal, hazardous, biomedical, e-waste and construction and demolition - and the 2016 family of rules that governs each of them.",
      chapter: {
        number: "01",
        title: "Hierarchy and Framework",
        intro:
          "Unit I sets the frame for the whole subject. It defines solid waste and integrated waste management, climbs the waste hierarchy tier by tier from prevention to disposal, tours the five waste streams with their dedicated 2016 rules, and closes with the SWM Rules 2016 - the master regulation whose duties on generators, urban local bodies and pollution control boards shape every later unit.",
        inOneBreath:
          "Solid waste is any unwanted discarded material; integrated waste management selects and combines techniques across the whole chain rather than betting on one technology. The hierarchy ranks options - prevent, reduce, reuse, recycle, recover, dispose - and every decision should start at the top. India generates about 1.7 lakh tonnes of municipal waste a day across five statutory streams - municipal, hazardous, biomedical, e-waste and C&D - each governed by a 2016 rule under the Environment (Protection) Act, 1986, with SWM Rules 2016 mandating three-way source segregation, user fees and duties for every actor.",
        sections: [
          {
            number: "1.1",
            title: "Solid waste and the integrated management idea",
            body: [
              "Solid waste is any discarded material - garbage from homes, refuse from trade and institutions, street sweepings, silt from drains and industrial rejects - that is abandoned because it has lost its immediate use. Indian cities together generate about 1.7 lakh tonnes of municipal solid waste every day, close to 62 million tonnes a year, and the quantity climbs with population, incomes and packaging. Of this, roughly 95 per cent is collected, but only about half is scientifically processed; the rest is landfilled or simply unaccounted. Waste is thus both a service failure and a misplaced resource.",
              "Integrated waste management (IWM) answers that failure with a systems view: the careful selection and combination of techniques, technologies and management programmes to achieve specific waste objectives. No single option - not composting, not incineration, not landfilling - can handle a stream as mixed as municipal waste. IWM therefore blends source reduction, segregation, collection, biological and thermal processing, recycling and engineered disposal, tuned to the waste's character, the city's finances and the regulatory frame. The concept replaced the old disposal-centric mindset of collect-and-dump.",
              "The classic way to organise the subject is the chain of functional elements: waste generation, on-site storage and handling, collection, transfer and transport, processing and resource recovery, and final disposal. Each element is a decision point with its own engineering questions - how much, how stored, how collected, how hauled, how processed, what remains. The waste hierarchy introduced in the next section ranks the strategic choices across this chain, and the five units of this subject walk the chain element by element.",
            ],
            bullets: [
              "Solid waste under SWM Rules 2016 includes commercial and residential, institutional, municipal sweepings and silt - the rules define categories, not just household garbage.",
              "India generates about 1.7 lakh tonnes per day of MSW; roughly 95 per cent is collected, only about half is processed, and the gap is the sector's core problem.",
              "IWM combines options along the whole chain instead of chasing a single technology - it is a strategy, not a machine.",
              "The six functional elements - generation, storage, collection, transfer and transport, processing and recovery, disposal - organise the entire syllabus.",
              "Treating waste as a resource stream (nutrients, energy, materials) converts a liability into assets: compost, biogas, RDF and recyclables.",
            ],
            table: {
              caption: "The functional elements and the engineering question each one asks.",
              headers: ["Functional element", "Engineering question", "Later unit"],
              rows: [
                ["Generation and quantification", "How much waste, of what character, growing how fast?", "Unit II"],
                ["On-site storage and handling", "How should waste be segregated and stored at source?", "Unit II"],
                ["Collection", "What system, fleet and crew achieve full coverage?", "Unit II"],
                ["Transfer and transport", "When does a transfer station beat direct haul?", "Unit II"],
                ["Processing and recovery", "Compost, biogas, RDF or power - which route fits the waste?", "Units III and V"],
                ["Final disposal", "How is the engineered landfill designed and closed?", "Unit III"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The waste hierarchy",
              caption:
                "Preference falls from top to bottom - prevention first, engineered disposal last. Draw the arrow of preference in every strategy answer.",
              tiers: [
                { label: "Prevent and reduce", note: "most preferred - avoid creating waste" },
                { label: "Reuse", note: "keep products in service" },
                { label: "Recycle", note: "recover materials, including composting organics" },
                { label: "Recover", note: "energy from residual waste - biogas, RDF, power" },
                { label: "Dispose", note: "least preferred - engineered landfill of rejects" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the pyramid, not just the list",
              body: "Whenever a question asks about waste strategy, open with the hierarchy pyramid - five labelled tiers and a downward arrow of increasing volume and decreasing preference. Examiners look for the arrow and for one example per tier; a bare list drops a mark.",
            },
            keyTerms: [
              { term: "Solid waste", definition: "Any discarded material from residential, commercial, institutional and municipal sources that is abandoned and requires management." },
              { term: "Integrated waste management", definition: "The coordinated selection and combination of waste techniques and programmes to achieve specific objectives across the whole chain." },
              { term: "Functional elements", definition: "The six-stage chain of a waste system: generation, storage, collection, transfer and transport, processing and recovery, and disposal." },
            ],
            examQuestions: [
              {
                q: "Define integrated waste management. Explain the functional elements of a solid waste management system and support your answer with a neat diagram of the waste hierarchy.",
                marks: 7,
                outline: [
                  "Define solid waste and integrated waste management.",
                  "Explain why no single technology suffices - mixed character, cost, regulation.",
                  "List and explain the six functional elements one by one.",
                  "Draw the waste hierarchy pyramid with an arrow of preference.",
                  "Give one example per tier: prevention, reuse, recycling, recovery, disposal.",
                  "Connect the elements to real practice: segregation feeds composting; rejects feed landfill.",
                  "Conclude: IWM matches options to waste character, finances and rules.",
                ],
              },
              {
                q: "Define solid waste and name any four sources of solid waste in a city.",
                marks: 2,
              },
              {
                q: "Write India's municipal solid waste snapshot - daily generation, collection efficiency and processing share.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "The waste hierarchy and 3R",
            body: [
              "The waste hierarchy ranks management options in order of preference: prevention at the top, then reduction, reuse, recycling, energy recovery, and engineered disposal at the bottom. Prevention and reduction eliminate the waste before it exists - refusing a carry bag, buying concentrate, redesigning packaging. Reuse keeps a product in service - refillable bottles, donated clothing, repaired furniture. Recycling reprocesses materials - dry waste into new plastic, paper and metal, and wet waste into compost. Recovery captures energy from what remains; only the final rejects should be landfilled.",
              "The 3R slogan - reduce, reuse, recycle - is the hierarchy's upper half compressed. Reducing saves everything: raw material, manufacture energy, transport and disposal cost. Reusing preserves the product's embodied energy because the object itself survives. Recycling preserves material value but spends energy on collection, sorting and reprocessing. Each step down the hierarchy loses a little more value and demands a little more money, which is why regulation such as extended producer responsibility (EPR) pushes responsibility up the ladder to the producer who designs the waste in the first place.",
              "In practice the hierarchy is applied top-down: ask first whether waste can be avoided, then reused, then recycled, then recovered, and only then landfilled. SWM Rules 2016 embed this order - minimise generation, segregate at source, process the streams, and send only rejects to landfill. Economics sometimes inverts the pyramid - tipping fees are cheaper than segregation campaigns - but a city that skips to the bottom tier buys decades of leachate, methane and land costs. The hierarchy is a decision ladder, not a decoration for reports.",
            ],
            bullets: [
              "Prevention outranks everything - waste never created needs no collection, transport, treatment or disposal.",
              "Reuse retains product-level value; recycling retains only material value and pays reprocessing energy.",
              "Energy recovery (biogas, RDF, power) sits below recycling - burn or digest only what cannot be recycled.",
              "Disposal is the least preferred tier and must be engineered - a lined, gassed and capped landfill, never an open dump.",
              "Extended producer responsibility operationalises the upper tiers by making producers collect and recycle what they place on the market.",
            ],
            table: {
              caption: "Hierarchy tiers: action, example and what each tier preserves.",
              headers: ["Tier", "Action", "Example", "What is preserved"],
              rows: [
                ["Prevent / reduce", "Do not create the waste", "Refusing bags; refill systems", "All resources"],
                ["Reuse", "Use the item again as-is", "Refillable glass bottles", "Product and embodied energy"],
                ["Recycle", "Reprocess the material", "PET flake; wet waste to compost", "Material value"],
                ["Recover", "Extract energy from residual", "RDF to cement kilns; biogas", "Energy content"],
                ["Dispose", "Engineered landfill of rejects", "Lined cell with gas capture", "Land and safety only"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "One discarded item - which tier claims it?",
              caption:
                "The same item meets different fates depending on where in the hierarchy the decision is taken.",
              start: "A product reaches the end of its first use",
              branches: [
                { label: "Prevent at purchase", outcome: "Need never arises - the highest tier, zero downstream cost", good: true },
                { label: "Reuse or repair", outcome: "Product life extends; manufacture energy is retained", good: true },
                { label: "Recycle the material", outcome: "New raw material from the old; reprocessing energy spent", good: true },
                { label: "Landfill untreated", outcome: "Land consumed, methane and leachate liabilities created", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not invert the hierarchy",
              body: "A classic slip is writing energy recovery above recycling, or placing landfill above recovery because it looks simpler. The order is prevent - reuse - recycle - recover - dispose. Marks are reserved for the correct order plus a justified example at each tier.",
            },
            keyTerms: [
              { term: "Waste prevention", definition: "Actions at design or purchase stage that stop waste from being generated - the topmost tier of the hierarchy." },
              { term: "Reuse", definition: "Using a product again in its original form, retaining its embodied energy and material value." },
              { term: "Extended producer responsibility", definition: "The policy of making producers responsible for collecting and recycling their products at end of life, embodied in India's plastic and e-waste rules." },
            ],
            examQuestions: [
              {
                q: "Explain the waste hierarchy and the 3R philosophy with one example at each tier. How does extended producer responsibility push waste management up the hierarchy?",
                marks: 7,
                outline: [
                  "Draw the hierarchy pyramid - prevention to disposal - with the preference arrow.",
                  "Explain reduce with packaging and procurement examples.",
                  "Explain reuse with refill and repair examples.",
                  "Explain recycling, covering both material recycling and composting of organics.",
                  "Explain recovery (RDF, biogas, power) and why it sits below recycling.",
                  "Define EPR and cite the Plastic Waste Management Rules and E-Waste Rules.",
                  "Conclude: EPR shifts burden upstream, converting end-of-pipe problems into design decisions.",
                ],
              },
              {
                q: "Give two differences between reduce and recycle as waste management strategies.",
                marks: 2,
              },
              {
                q: "What is extended producer responsibility, and in which two Indian rules is it implemented?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Municipal and hazardous waste streams",
            body: [
              "Municipal solid waste is the bulk stream: household, market and institutional refuse. Its Indian signature is high organics - 40 to 60 per cent biodegradable - plus 6 to 10 per cent plastics, a few per cent each of paper, glass and metals, and a large inert fraction of silt, ash and construction debris. Moisture runs 40 to 60 per cent and the as-fired calorific value sits at only 3.5 to 7 MJ/kg, which is why imported incineration ideas struggle here. Per-capita generation spans roughly 0.3 to 0.6 kg per day and rises with income and city size.",
              "Hazardous waste is the opposite profile: smaller tonnage, concentrated danger. A waste is hazardous when it exhibits ignitability, corrosivity, reactivity or toxicity - the ICRT characteristics - or appears in the schedules of the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016. Indian industries - electroplating, pesticides, refineries, distilleries, pharma - generate roughly 8 million tonnes a year, tracked from cradle to grave. The Basel Convention governs its movement across borders, and India imports none for disposal.",
              "The two streams must never mix. A drum of spent solvent tipped into municipal bins contaminates the whole load, poisons compost and endangers collectors, while turning a municipal service problem into a criminal one. So the law builds two parallel worlds: municipal waste under a service framework run by urban local bodies with SWM Rules 2016, and hazardous waste under an authorisation framework run by state pollution control boards with manifests, TSDF disposal and statutory records. Mixing them is the fastest way to fail an audit.",
            ],
            bullets: [
              "Indian MSW: 40-60 per cent organics, high moisture, low calorific value - biology before fire is the natural route.",
              "Hazardous waste is defined by ICRT characteristics - ignitable, corrosive, reactive or toxic - or by schedule listing.",
              "India generates about 8 million tonnes of hazardous waste a year from process industries.",
              "Cradle-to-grave control: authorisation, multi-copy manifests and records follow hazardous waste to the TSDF.",
              "Never the twain shall mix - hazardous waste in municipal bins contaminates the entire chain and violates both rule families.",
            ],
            table: {
              caption: "ICRT characteristics with their working thresholds.",
              headers: ["Characteristic", "Working test", "Example waste"],
              rows: [
                ["Ignitability", "Flash point below about 60 deg C", "Waste solvents, spent paints"],
                ["Corrosivity", "pH at or below 2 or at/above 12.5, or corrodes steel", "Acid and alkali etching baths"],
                ["Reactivity", "Unstable, violent reaction with water or shock", "Old cyanide sludges, peroxides"],
                ["Toxicity", "Leachable metals or organics above thresholds (TCLP-type)", "Heavy-metal bearing sludges"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two streams, two parallel legal worlds",
              caption:
                "The comparison an examiner loves: same word waste, completely different control systems.",
              left: {
                heading: "Municipal solid waste",
                items: [
                  "Source: every household, shop and office",
                  "Volume: over 1.7 lakh tonnes per day",
                  "Hazard: low unit hazard, bulk nuisance",
                  "Law: SWM Rules 2016, a service duty",
                  "Institution: urban local body as service provider",
                ],
              },
              right: {
                heading: "Hazardous waste",
                items: [
                  "Source: scheduled industrial processes",
                  "Volume: about 8 million tonnes per year",
                  "Hazard: ICRT characteristics - acute danger",
                  "Law: HW (M&TM) Rules 2016, an authorisation regime",
                  "Institution: SPCB authorises and tracks to the TSDF",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "A guaranteed compare question",
              body: "Municipal versus hazardous waste appears as a full 7-marker or a 3-mark short in nearly every paper. Structure it as five rows - source, quantity, hazard, legal instrument, disposal route - and quote the ICRT characteristics with thresholds for full marks.",
            },
            keyTerms: [
              { term: "Hazardous waste", definition: "A waste exhibiting ignitability, corrosivity, reactivity or toxicity, or listed in the schedules of the HW Rules 2016." },
              { term: "Ignitability", definition: "The ICRT characteristic of a waste with a flash point below about 60 deg C, making it flammable." },
              { term: "Basel Convention", definition: "The global treaty controlling transboundary movement and disposal of hazardous waste, which India implements through its 2016 rules." },
            ],
            examQuestions: [
              {
                q: "Define hazardous waste. Explain the ICRT characteristics with thresholds, and contrast the management frameworks for hazardous and municipal solid waste in India.",
                marks: 7,
                outline: [
                  "Define hazardous waste per the HW (M&TM) Rules 2016.",
                  "Explain ignitability (flash point below about 60 deg C).",
                  "Explain corrosivity (pH 2 or less, 12.5 or more).",
                  "Explain reactivity and toxicity with examples.",
                  "Contrast quantity, sources and hazard profile with MSW.",
                  "Contrast the frameworks: ULB service duty versus SPCB authorisation, manifest and TSDF.",
                  "Conclude: the streams are managed in parallel and must never mix.",
                ],
              },
              {
                q: "Write the typical composition of Indian municipal solid waste with approximate percentages.",
                marks: 3,
              },
              {
                q: "Name any two industries that generate hazardous waste and one waste from each.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Biomedical, e-waste and C&D streams",
            body: [
              "Biomedical waste flows from hospitals, clinics, labs and vaccination drives. The WHO rule of thumb is that about 85 per cent of healthcare waste is general refuse, while roughly 15 per cent is infectious, sharp or chemical - the fraction that must be colour-coded, treated and tracked. Biomedical Waste Management Rules 2016 sort it into four categories - yellow, red, white and blue - each with a fixed treatment route. Untreated biomedical waste cannot be stored beyond 48 hours, a deadline that dictates collection logistics.",
              "Electronic waste is the fastest growing stream: discarded computers, phones, appliances and lamps. India is the world's third largest generator at well over a million tonnes a year. The value sits in printed circuit boards - a tonne of boards carries more gold than a tonne of gold ore - while the danger sits in lead, mercury, cadmium, chromium and brominated flame retardants. E-Waste (Management) Rules 2016 and their 2022 successor impose extended producer responsibility with tradable EPR certificates, registered dismantlers and recyclers, and rising recovery targets on producers.",
              "Construction and demolition waste is the heaviest stream by mass: concrete rubble, brick bats, soil, steel, timber and mixed debris from every site. Official estimates begin around 25-30 million tonnes a year and projections run past 100 million as construction booms; it consumes a quarter or more of big-city landfill volume. C&D Waste Management Rules 2016 require large generators to plan and deliver waste to processing facilities, where crushers convert rubble into recycled aggregate for paver blocks, sub-base and non-structural concrete.",
            ],
            bullets: [
              "Biomedical waste: about 15 per cent of healthcare output is hazardous - colour-coded into yellow, red, white and blue under the 2016 rules.",
              "The 48-hour rule: untreated biomedical waste may not be stored beyond two days, forcing tight collection cycles.",
              "E-waste: urban mining of circuit boards beats ore grades, but lead, mercury and cadmium make informal recycling toxic.",
              "C&D waste: the heaviest stream, 25-30 million tonnes a year at minimum, and a quarter of metropolitan landfill volume.",
              "Every stream has its own 2016 rule - BMW, E-Waste, C&D, Plastic and Hazardous - with SWM Rules 2016 as the municipal anchor.",
            ],
            table: {
              caption: "Special streams: governing rule, generator duty and destination.",
              headers: ["Stream", "Governing rule", "Key generator duty", "Typical destination"],
              rows: [
                ["Biomedical", "BMW Management Rules 2016", "Segregate into four colours at the ward", "CBWTF incinerator / autoclave"],
                ["E-waste", "E-Waste Rules 2016 / 2022", "Channel through authorised recyclers (EPR)", "Registered dismantler / recycler"],
                ["C&D waste", "C&D Waste Management Rules 2016", "Plan and deliver over 20 T/day to a facility", "Recycled aggregate plant"],
                ["Plastic", "Plastic Waste Management Rules 2016/2022", "Segregate dry; producers fund EPR", "Recyclers, RDF, roads"],
                ["Hazardous", "HW (M&TM) Rules 2016", "Authorisation and manifests", "TSDF secured landfill / incinerator"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Where each stream sits: volume versus hazard",
              caption:
                "Plot the streams on volume (up is more) against hazard level (right is worse) to pick control strategies.",
              axes: { x: "Hazard level (low to high)", y: "Generation volume (low to high)" },
              quadrants: [
                { label: "Municipal + C&D", note: "bulk streams, low unit hazard - service logistics dominate" },
                { label: "E-waste", note: "growing fast, toxic legacy - EPR and safe recycling" },
                { label: "Domestic hazardous", note: "small and dispersed - hard to capture from households" },
                { label: "Biomedical + industrial hazardous", note: "small tonnage, concentrated danger - tracking and treatment" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise the rule-year pairs",
              body: "All five special streams received their modern rules in 2016 - BMW, E-Waste, C&D, Plastic and Hazardous (M&TM) - with e-waste replaced in 2022 and plastics amended in 2022. Pairing stream with rule-year is instant marks in short questions.",
            },
            keyTerms: [
              { term: "Biomedical waste", definition: "Waste generated during diagnosis, treatment or immunisation that is infectious, sharp or chemically hazardous." },
              { term: "E-waste", definition: "Discarded electrical and electronic equipment, from computers to lamps, containing both valuable metals and toxic substances." },
              { term: "C&D waste", definition: "Debris from construction, renovation and demolition - concrete, masonry, soil, steel and wood - governed by its own 2016 rules." },
            ],
            examQuestions: [
              {
                q: "Describe the biomedical, e-waste and construction and demolition waste streams. For each, state the governing rule, the main hazards and the required management route.",
                marks: 7,
                outline: [
                  "Introduce the three special streams and why they need rules beyond SWM 2016.",
                  "Biomedical: sources, about 15 per cent hazardous, four colour categories, 48-hour rule.",
                  "E-waste: growth, toxic content - lead, mercury, cadmium - and EPR under 2016/2022 rules.",
                  "C&D: mass, landfill burden, duties of large generators under the 2016 rules.",
                  "State the treatment destinations: CBWTF, registered recyclers, aggregate plants.",
                  "Add the matrix insight: volume and hazard positions differ, so control strategies differ.",
                  "Conclude: segregation at source is the common entry point for all three.",
                ],
              },
              {
                q: "Why is e-waste called an urban mine? Give two reasons.",
                marks: 2,
              },
              {
                q: "What threshold of C&D waste generation triggers the duty to submit a waste management plan, and to whom is the waste delivered?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "SWM Rules 2016 and the regulatory architecture",
            body: [
              "The Environment (Protection) Act, 1986 is the umbrella; beneath it, the Solid Waste Management Rules, 2016 replaced the 2000 Municipal Solid Waste Rules and changed the philosophy. The 2016 rules are built on source segregation, distributed duties and polluter accountability: every generator must segregate into wet, dry and domestic hazardous streams, store waste in covered bins, and hand it over to authorised collectors - dumping or burning is prohibited and finable. The rules also extend beyond big cities to all statutory towns, census towns, notified areas and cantonments.",
              "Duties are distributed across actors. Waste generators must segregate, pay the user fee the local body notifies, and support door-to-door collection; bulk generators above 100 kg per day must process their wet waste on-site or make their own arrangements. Urban local bodies must organise segregated door-to-door collection, transport streams without mixing, establish processing and disposal facilities, integrate informal waste pickers and levying user fees. State pollution control boards authorise and monitor facilities, while the CPCB and MoEFCC set standards, inspect and report annually to the National Green Tribunal.",
              "The 2016 rule sits inside a harmonised family - the same year produced the biomedical, e-waste, plastic, C&D and hazardous waste rules - so generators, municipalities and boards read one consistent philosophy. Enforcement instruments include the user fee for services, spot fines for littering and open dumping, authorisation of processors, and monitoring cascades from ward to state to centre. For the exam, the duties of the waste generator and of the local authority are the two lists to memorise verbatim - they are asked as short and long questions alike.",
            ],
            bullets: [
              "SWM Rules 2016 under the Environment (Protection) Act 1986 replaced the 2000 MSW Rules and mandated three-way source segregation.",
              "Generator duties: segregate wet, dry and domestic hazardous; covered storage; user fee; no dumping or burning.",
              "Bulk generators above 100 kg per day must process wet waste on-site or arrange its processing.",
              "ULB duties: segregated door-to-door collection, processing facilities, integration of waste pickers, user fee system.",
              "The 2016 family - SWM, BMW, E-Waste, Plastic, C&D, Hazardous - creates one consistent philosophy across streams.",
            ],
            table: {
              caption: "Who owes what under SWM Rules 2016.",
              headers: ["Actor", "Key duties", "Enforcement handle"],
              rows: [
                ["Waste generator", "Three-way segregation, covered storage, fee payment", "Spot fine, user fee"],
                ["Bulk generator", "On-site wet-waste processing above 100 kg/day", "Authorisation, inspection"],
                ["Urban local body", "Segregated collection, transport, processing, disposal", "SPCB authorisation, state review"],
                ["SPCB / PCC", "Authorise facilities, monitor compliance", "Consent, closure directions"],
                ["CPCB and MoEFCC", "Standards, national inventory, annual reporting", "Directives, NGT oversight"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The regulatory stack of Indian waste law",
              caption:
                "Read top-down: one umbrella act, a rule family, then the institutions that implement it to the doorstep.",
              layers: [
                { label: "Environment (Protection) Act, 1986", note: "the umbrella statute" },
                { label: "SWM Rules 2016 + five sister rules", note: "BMW, e-waste, plastic, C&D, hazardous" },
                { label: "MoEFCC and CPCB", note: "policy, standards, national reporting" },
                { label: "SPCBs and pollution control committees", note: "authorisation and monitoring" },
                { label: "Urban local bodies and cantonments", note: "collection, processing, disposal services" },
                { label: "Generators, wards, SHGs, waste pickers", note: "segregation at source - where it all begins" },
              ],
            },
            callout: {
              type: "exam",
              title: "The two lists to know verbatim",
              body: "Duties of the waste generator and duties of the local authority are the most repeated questions from this unit. Write them as numbered lists - segregation into three streams, covered storage, user fee for generators; segregated collection, processing facilities, waste-picker integration, fees and fines for ULBs.",
            },
            keyTerms: [
              { term: "SWM Rules 2016", definition: "The master regulation for solid waste in India, mandating source segregation and distributing duties across generators, local bodies and boards." },
              { term: "User fee", definition: "The fee a local body may notify and collect from generators to fund solid waste services under the 2016 rules." },
              { term: "Bulk waste generator", definition: "A premises generating more than 100 kg of waste per day, obliged to process its wet waste on-site or through arranged facilities." },
            ],
            examQuestions: [
              {
                q: "Explain the salient features of the Solid Waste Management Rules, 2016, with the duties of waste generators and urban local bodies.",
                marks: 7,
                outline: [
                  "Context: EPA 1986 umbrella; 2016 rules replaced the 2000 MSW rules.",
                  "Philosophy shift: source segregation mandated, polluter accountability, beyond-metro coverage.",
                  "Duties of the generator: three-way segregation, covered storage, user fee, no burning or dumping.",
                  "Bulk generator rule: above 100 kg/day, on-site wet waste processing.",
                  "Duties of the ULB: segregated door-to-door collection, no-mixing transport, processing and disposal facilities.",
                  "ULB duties continued: waste-picker integration, user fee and spot fine systems.",
                  "Roles of SPCB, CPCB and MoEFCC in authorisation and monitoring.",
                ],
              },
              {
                q: "Into which streams must a household segregate its waste under SWM Rules 2016?",
                marks: 2,
              },
              {
                q: "Who is a bulk waste generator, and what extra obligation applies to one?",
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
      title: "Municipal Solid Waste Management",
      summary:
        "The municipal chain in order: how much waste is generated and how to measure it, what characterization reveals, how segregation at source works, how collection systems are organised, and how transfer stations and route planning move waste to the processing gate.",
      chapter: {
        number: "02",
        title: "Municipal Solid Waste Management",
        intro:
          "Unit II walks the municipal chain from bin to gate. It quantifies generation and projects it, characterizes the waste physically and chemically, imposes the discipline of source segregation, organises collection systems and their two-stage architecture, and finally decides when a transfer station pays for itself and how routes are designed to move every kilogram at least cost.",
        inOneBreath:
          "Municipal waste management starts with numbers: per-capita generation of 0.3-0.6 kg per day, measured by weighbridge studies, load counts or stratified sampling, then projected over a 20-year horizon. Characterization splits the stream physically - 40-60 per cent organics - and chemically - moisture, volatile solids, C/N around 25-30, calorific value 3.5-7 MJ/kg - to choose the treatment route. SWM Rules 2016 mandate three-way segregation into wet, dry and domestic hazardous; collection is 60-70 per cent of the budget and runs as a two-stage system of primary pickup and secondary haul; and beyond about 15-20 km of haul distance, transfer stations with compaction cut cost, while routing heuristics and GIS trim the kilometres.",
        sections: [
          {
            number: "2.1",
            title: "Generation and quantification",
            body: [
              "Everything in waste engineering starts with the quantity. Indian urban generation spans roughly 0.3 to 0.6 kg per capita per day, rising with income, city size, lifestyle and season - tourist towns peak in holiday months, and vegetable markets swing with market days. Aggregated, the country produces about 1.7 lakh tonnes per day. A design engineer converts these rates into a generation forecast: population times per-capita rate, both growing, over a design horizon of about twenty years that matches the life of landfills and processing plants.",
              "Quantification methods trade cost against accuracy. Weighbridge records at the disposal or processing site give the truest totals - gross vehicle weight minus tare - but capture only what is collected. Load-count analysis multiplies the number of trips by an average load per vehicle type when scales are absent. Per-capita extrapolation applies published or sampled rates to the served population. Household sampling studies - stratified by income zone, with 24-hour waste weighed per stratum - reveal composition and per-capita rates at source, and validate the other methods.",
              "Good practice treats quantity as a distribution, not a number: weekday versus weekend, monsoon versus summer, festival spikes and market-day peaks. Sampling design should cover each stratum - slum, middle-income, high-income, commercial - because generation and composition differ sharply. The output feeds every later decision: bin sizes, fleet numbers, composting capacity, landfill airspace. An underestimate of ten per cent becomes a ten per cent shortfall in plant capacity for two decades, so the study report must always state its basis, season and sample.",
            ],
            bullets: [
              "Per-capita generation in Indian cities: about 0.3-0.6 kg per day, growing with income and city size.",
              "Weighbridge studies at the gate give the most accurate collected-waste totals; load-count and per-capita methods are cheaper substitutes.",
              "Stratified household sampling - by income zone, with 24-hour weights - yields both per-capita rates and composition.",
              "Design horizon is about 20 years, matching plant and landfill life; both population and per-capita rates must be grown.",
              "Always report the basis: season, sample size and strata - quantity is a distribution, not a single figure.",
            ],
            codeExample: {
              language: "python",
              caption: "Projecting municipal waste generation over a ten-year horizon.",
              code: `# Project MSW generation for a design horizon
population = 520_000        # current city population
pop_growth = 0.031          # per year
per_capita = 0.45           # kg/capita/day today
rate_growth = 0.010         # per year, income effect

tpd_today = population * per_capita / 1000
print(f"Generation today: {tpd_today:.0f} TPD")

for year in range(1, 11):
    population *= (1 + pop_growth)
    per_capita *= (1 + rate_growth)
    tpd = population * per_capita / 1000
    print(f"Year {year:2d}: {tpd:8.0f} TPD")

# Sizing rule of thumb: plan processing capacity for
# the horizon-year generation plus a 10% margin.
`,
            },
            diagram: {
              kind: "flow",
              title: "A waste quantification study, step by step",
              caption:
                "The audit chain from study area to forecast - the sequence examiners reward in methodology answers.",
              steps: [
                { label: "Define study area", note: "wards, strata by income and trade" },
                { label: "Sample households and establishments", note: "24-hour waste, per stratum" },
                { label: "Weigh and sort samples", note: "quantity plus composition" },
                { label: "Derive per-capita rates", note: "cross-check against literature" },
                { label: "Validate at the weighbridge", note: "reconcile with collected tonnage" },
                { label: "Project over the horizon", note: "grow population and rate" },
              ],
            },
            callout: {
              type: "tip",
              title: "State the basis, always",
              body: "Quantification answers earn method marks for declaring assumptions: which season, how many samples, which strata. A bare tonnage figure without basis reads as guesswork; the same figure with a stated method reads as engineering.",
            },
            keyTerms: [
              { term: "Per-capita generation rate", definition: "Waste generated per person per day, typically 0.3-0.6 kg in Indian cities, the basis for all forecasts." },
              { term: "Load-count analysis", definition: "A quantification method that multiplies vehicle trips by average load per vehicle type when weighbridges are unavailable." },
              { term: "Design horizon", definition: "The planning period, usually about 20 years, over which generation is projected and facilities are sized." },
            ],
            examQuestions: [
              {
                q: "Explain the methods of quantifying municipal solid waste generation. Discuss the factors that affect per-capita generation and how a 20-year forecast is prepared.",
                marks: 7,
                outline: [
                  "Why quantification precedes design: bins, fleet, plants, landfill airspace.",
                  "Weighbridge method: gross minus tare at the processing gate; captures collected waste.",
                  "Load-count method: trips times average loads; cheap, moderate accuracy.",
                  "Per-capita extrapolation and stratified household sampling for source-side rates.",
                  "Factors: income, city size, season, tourism, market days, lifestyle and packaging.",
                  "Forecast mechanics: grow population and per-capita rate over the horizon.",
                  "Add a margin and state the study basis - season, sample, strata.",
                ],
              },
              {
                q: "Write the typical range of per-capita municipal waste generation in Indian cities.",
                marks: 2,
              },
              {
                q: "Why must a waste quantity study always state its season and strata? Give two reasons.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Physical and chemical characterization",
            body: [
              "Physical characterization answers what the waste is made of. A representative sample - built from collection points across zones, quartered down to a workable 50-100 kg - is hand-sorted into categories: food and garden waste, paper, plastics, glass, metals, textiles, leather, rubber, wood and inert. Indian results cluster around 40-60 per cent biodegradables, 6-10 per cent plastics, a few per cent each of paper, glass and metals, and 25-40 per cent inert. Results are reported on a wet-weight basis, with the sampling date, because composition swings with season.",
              "Chemical characterization answers how the waste will behave in each process. Moisture content (40-60 per cent) governs biological routes and drags calorific value down. Volatile solids and ash come from proximate analysis; the ultimate analysis reports carbon, hydrogen, nitrogen, sulphur, oxygen and chlorine - chlorine from PVC matters because it feeds dioxin formation in incinerators. The carbon-to-nitrogen ratio, ideally 25-30 for composting, and calorific value - measured in a bomb calorimeter - decide whether thermal processing is even possible. Density, 150-300 kg per cubic metre loose, sizes every bin, vehicle and compactor in the chain.",
              "Characterization is the bridge between waste and technology. High organics plus high moisture point to composting and biomethanation; an as-fired calorific value below about 7-8 MJ/kg means mass-burn incineration will need support fuel; heavy metals above limits disqualify compost routes. Indian mixed waste, at 3.5-7 MJ/kg and half its mass as organics, explains why the country's successes are biological and why imported thermal plants underperform. Every technology selection answer should open with the characterization table that justifies it.",
            ],
            bullets: [
              "Physical analysis: quarter a representative sample and hand-sort into ten-odd categories, reported on wet weight.",
              "Indian MSW signature: 40-60 per cent organics, high moisture 40-60 per cent, high density 150-300 kg per cubic metre loose.",
              "Proximate analysis gives moisture, volatile solids and ash; ultimate analysis gives C, H, N, S, O and Cl.",
              "C/N ratio 25-30 suits composting; calorific value 3.5-7 MJ/kg as fired sits below the mass-burn comfort zone.",
              "Chlorine from PVC flags dioxin risk in thermal routes; heavy metals can disqualify compost.",
            ],
            table: {
              caption: "Typical Indian municipal waste parameters and their engineering meaning.",
              headers: ["Parameter", "Typical value", "Why it matters"],
              rows: [
                ["Moisture content", "40-60 per cent", "Drives biology; kills combustion"],
                ["Organic fraction", "40-60 per cent", "Points to composting and biogas"],
                ["Loose density", "150-300 kg per cubic metre", "Sets vehicle and bin volumes"],
                ["C/N ratio", "20-40 (target 25-30)", "Composting recipe design"],
                ["Calorific value", "3.5-7 MJ/kg as fired", "Below the 7-8 MJ/kg mass-burn gate"],
                ["Chlorine", "Rises with PVC share", "Dioxin risk in incineration"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Physical versus chemical characterization",
              caption:
                "Two halves of one question: what is in the waste, and how will it behave in each technology.",
              left: {
                heading: "Physical analysis",
                items: [
                  "Question: what fractions are present",
                  "Method: quartering and hand sorting",
                  "Output: per cent organics, plastics, paper, inert",
                  "Decides: recycling potential and processing mix",
                  "Reported on wet-weight basis, by season",
                ],
              },
              right: {
                heading: "Chemical analysis",
                items: [
                  "Question: how the waste behaves in processes",
                  "Method: oven, muffle furnace, bomb calorimeter",
                  "Output: moisture, volatile solids, C/N, calorific value, Cl",
                  "Decides: composting recipe and thermal feasibility",
                  "Ultimate analysis adds C, H, N, S, O",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "The calorific gate decides the thermal answer",
              body: "Never recommend mass-burn incineration for Indian mixed waste without checking the gate: about 7-8 MJ/kg as fired. At 3.5-7 MJ/kg with half the mass as moisture, support fuel or RDF upgrading is mandatory - examiners specifically look for this threshold being quoted.",
            },
            keyTerms: [
              { term: "Proximate analysis", definition: "The determination of moisture, volatile solids, ash and fixed carbon in a waste sample." },
              { term: "Calorific value", definition: "The heat released on complete combustion, measured in a bomb calorimeter, reported as MJ/kg on an as-received or dry basis." },
              { term: "Carbon-to-nitrogen ratio", definition: "The mass ratio of carbon to nitrogen; about 25-30 is the target window for stable composting." },
            ],
            examQuestions: [
              {
                q: "Explain physical and chemical characterization of municipal solid waste. List the important parameters, their typical Indian values and their significance in technology selection.",
                marks: 7,
                outline: [
                  "Define characterization and its role in bridging waste to technology.",
                  "Physical method: representative sampling, quartering, hand sorting into categories.",
                  "Typical physical results: 40-60 per cent organics, 6-10 per cent plastics, large inert share.",
                  "Chemical parameters: moisture, volatile solids, ash (proximate).",
                  "C/N ratio target 25-30 and its role in composting.",
                  "Calorific value 3.5-7 MJ/kg versus the 7-8 MJ/kg mass-burn requirement.",
                  "Significance: biology-first strategy for Indian waste; chlorine and heavy-metal cautions.",
                ],
              },
              {
                q: "Define calorific value and state its units on an as-received basis for Indian MSW.",
                marks: 2,
              },
              {
                q: "Why is the moisture content of waste important for both composting and incineration? Give two effects.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Segregation at source and storage",
            body: [
              "Segregation at source is the pivot of the entire 2016 framework: every generator splits waste into three streams - wet (biodegradable kitchen and garden waste), dry (recyclables) and domestic hazardous (batteries, paint, medicines, e-scrap) - and stores each in covered bins until collection. Colour conventions follow the municipal practice of green for wet, blue for dry and black or red for hazardous. Rules prohibit throwing waste in the open, burning it, or placing it in community bins - door-to-door collection is the norm, and street vendors must keep segregated bins too.",
              "The reason is chemistry and economics in one. Mixed waste is worthless: organics contaminate recyclables, plastics contaminate compost feed, and the whole mass is only fit for landfill. Segregated wet waste becomes compost or biogas feed with contamination low enough for Fertiliser Control Order quality; segregated dry waste sells at its full recyclate value; isolated hazardous waste reaches proper channels. Segregation also cuts the volume destined for landfill by more than half in a typical Indian city - it is the single highest-leverage behaviour in the chain.",
              "Making it happen is behavioural engineering. Bulk generators above 100 kg per day must process wet waste on-site or arrange it - hotels, marriage gardens and large campuses host their own composters or biogas units. Cities deploy IEC campaigns, door-to-door mobilisation, spot fines and public rating schemes - Indore famously flagged compliant and non-compliant households green and red. Decentralised processing at ward level - colony composters, material recovery facilities - shortens the loop between source and sink and keeps the streams pure end to end.",
            ],
            bullets: [
              "Three-way segregation under SWM Rules 2016: wet, dry and domestic hazardous, stored in covered bins.",
              "Colour practice: green for wet, blue for dry, black or red for hazardous.",
              "Mixed waste destroys value: segregation unlocks FCO-grade compost, higher recyclate prices and clean RDF.",
              "Bulk generators above 100 kg per day must process wet waste on-site or make their own arrangements.",
              "Behaviour tools: IEC campaigns, flag-rating of households, spot fines and mohalla-level committees.",
            ],
            table: {
              caption: "The three segregated streams from door to destination.",
              headers: ["Bin colour", "Stream", "Typical contents", "Destination"],
              rows: [
                ["Green", "Wet / biodegradable", "Kitchen peels, garden trimmings", "Composting or biomethanation"],
                ["Blue", "Dry / recyclable", "Paper, plastics, metal, glass", "Material recovery and recyclers"],
                ["Black or red", "Domestic hazardous", "Batteries, paint, expired medicines", "Authorised hazardous handlers"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "One kitchen peel - three possible journeys",
              caption:
                "The same handful of peels can feed a compost plant or choke a drain, purely by which bin catches it.",
              start: "A household prepares vegetables",
              branches: [
                { label: "Green wet bin", outcome: "Collected daily - compost or biogas feed; nutrients recovered", good: true },
                { label: "Mixed or dry bin", outcome: "Contaminates recyclables; the load slides toward landfill", good: false },
                { label: "Drain or open dump", outcome: "Choked drains, vectors, monsoon flooding and GHG emissions", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Link segregation to everything downstream",
              body: "In any answer on composting, W2E or recycling, spend two lines on feedstock quality: segregated wet waste with low contamination is the precondition. This linkage - behaviour upstream, technology downstream - is what distinguishes a 7-mark answer from a 4-mark one.",
            },
            keyTerms: [
              { term: "Source segregation", definition: "The separation of waste into wet, dry and hazardous streams at the point of generation, mandated by SWM Rules 2016." },
              { term: "Domestic hazardous waste", definition: "Household items such as batteries, paint and expired medicines that must be kept separate from wet and dry streams." },
              { term: "Bulk waste generator", definition: "A premises generating over 100 kg of waste per day, required to process its wet waste on-site or arrange processing." },
            ],
            examQuestions: [
              {
                q: "Explain the system of source segregation prescribed by SWM Rules 2016 - the streams, colour coding, storage requirements and the benefits that flow from it.",
                marks: 7,
                outline: [
                  "State the mandate: every generator segregates at source under the 2016 rules.",
                  "Define the three streams: wet, dry, domestic hazardous, with examples.",
                  "Colour practice: green, blue, black/red; covered storage until collection.",
                  "Duties: no open dumping or burning; bulk generators above 100 kg/day process on-site.",
                  "Benefits: FCO-grade compost, full-value recyclables, clean RDF, lower landfill volume.",
                  "Enforcement: user fee, spot fines, public rating schemes such as Indore's flags.",
                  "Conclude: segregation is the pivot on which every downstream technology turns.",
                ],
              },
              {
                q: "Name any three items of domestic hazardous waste.",
                marks: 2,
              },
              {
                q: "How does segregation at source improve the quality of compost? Give two mechanisms.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Collection systems",
            body: [
              "Collection is the workhorse of the system - and its money pit, consuming 60-70 per cent of municipal waste budgets. The architecture is two-stage. Primary collection moves waste from the doorstep to the nearest holding point: bell-ringing auto-tippers, tricycles and small vehicles on fixed daily routes. Secondary collection moves it onward: from dhalas, covered depots and deep bins into compactors and tippers that haul to processing or disposal. Keeping the wet and dry streams in separate chambers throughout is a Rule requirement, not a courtesy.",
              "System types are matched to urban form. Door-to-door collection - the Indian norm under the 2016 rules - maximises coverage and enables segregation; community-bin systems serve scattered or commercial areas where door access fails; curbside collection suits planned layouts. Frequency is daily for wet waste and alternate days or weekly for dry. The fleet ranges from auto-tippers and battery carts for lanes to hydraulic compactors that raise loose density from roughly 200 towards 500 kg per cubic metre, multiplying effective payload. Street sweeping - increasingly mechanical and nocturnal on arterials - is part of the same service envelope.",
              "Performance is measured, not assumed. Coverage is the share of households on a collection route; collection efficiency is collected tonnage divided by generated tonnage - India stands near 95 per cent in big cities. Cost per tonne and cost per household compare delivery models; GPS tracks route adherence; and vehicle-utilisation audits expose idle fleet. When answers turn to improving collection, the levers are route rationalisation, segregation-preserving vehicles, crew incentives and the mohalla-level micro-plans that assign every lane a time window and every vehicle a stream.",
            ],
            bullets: [
              "Two-stage architecture: primary doorstep pickup by small vehicles, then secondary haul by compactors and tippers.",
              "Door-to-door is the mandated Indian norm; community bins serve commercial or inaccessible pockets.",
              "Compactors raise load density from about 200 toward 500 kg per cubic metre - payload per trip multiplies.",
              "Twin-chamber or stream-dedicated vehicles preserve segregation from door to processing gate.",
              "Metrics: coverage, collection efficiency (near 95 per cent in big Indian cities), cost per tonne, vehicle utilisation.",
            ],
            table: {
              caption: "Collection system types and where each fits.",
              headers: ["System", "How it works", "Best suited", "Watch-out"],
              rows: [
                ["Door-to-door", "Vehicle visits each premise on a fixed window", "Residential wards, the 2016-rule default", "Costly labour; needs route discipline"],
                ["Community bin", "Generators deposit at nearby covered bins", "Commercial zones, scattered housing", "Bin overflow if pickup slips"],
                ["Curbside", "Bins placed at kerb on collection morning", "Planned layouts, colonies", "Requires resident cooperation"],
                ["Sweeping + silt", "Manual or mechanical sweeping of streets", "Arterials, markets, pre-monsoon", "Silt mixes and raises inert load"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The two-stage collection chain",
              caption:
                "From the doorstep to the processing gate without breaking the segregated streams.",
              stages: [
                { label: "Generator", note: "three covered bins at source" },
                { label: "Primary pickup", note: "ghanti auto-tipper, daily window" },
                { label: "Secondary storage", note: "covered dhala or deep bins" },
                { label: "Bulk haul", note: "compactor or tipper, stream-dedicated" },
                { label: "Processing gate", note: "compost, MRF, RDF or landfill" },
              ],
            },
            callout: {
              type: "tip",
              title: "Structure collection answers around the two stages",
              body: "Define primary and secondary collection, give the vehicle types for each, then finish with the three metrics - coverage, efficiency and cost per tonne. This skeleton fits both the 7-marker and the short-question version.",
            },
            keyTerms: [
              { term: "Primary collection", definition: "The first stage: moving waste from the generator's doorstep to a secondary storage point using small vehicles." },
              { term: "Secondary storage", definition: "Covered depots, dhalas or deep bins where primary collection deposits waste before bulk haul." },
              { term: "Collection efficiency", definition: "Collected tonnage divided by generated tonnage - the headline service metric, about 95 per cent in large Indian cities." },
            ],
            examQuestions: [
              {
                q: "Describe primary and secondary collection systems for municipal solid waste. Compare door-to-door, community-bin and curbside systems, and state the performance metrics used.",
                marks: 7,
                outline: [
                  "Why collection dominates: 60-70 per cent of SWM budgets.",
                  "Primary collection: doorstep to dhala, vehicle types, daily windows.",
                  "Secondary collection: dhala to processing gate, compactors raising density.",
                  "Door-to-door: best coverage and segregation, labour-intensive.",
                  "Community bin and curbside: fit and failure modes.",
                  "Metrics: coverage, collection efficiency, cost per tonne, vehicle utilisation.",
                  "Note the no-mixing transport requirement of SWM Rules 2016.",
                ],
              },
              {
                q: "Define collection efficiency and write its typical value for large Indian cities.",
                marks: 2,
              },
              {
                q: "Why do compactors multiply the effective payload of a collection fleet? Explain with density values.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Transfer stations and route planning",
            body: [
              "When the processing site is close, vehicles haul waste directly. As cities sprawl, small collection vehicles spend their shift queueing at distant gates - and the arithmetic flips. A transfer station interposes: small vehicles unload quickly at the edge of the collection zone, waste is compacted into 15-30 tonne trailers, and long-haul tractors make few, heavy trips. The break-even rule of thumb: beyond about 15-20 km one-way, or a 30-minute haul, a station with compaction usually beats direct haul on cost per tonne-kilometre.",
              "Transfer station design is an exercise in flow and containment. A ramp delivers tippers to an elevated tipping floor; pushers or compactors load the trailers; quick-closing gates, odour suppression and leachate drains keep the neighbourhood on side - siting is political, and NIMBY resistance is the norm. Fire control, wheel washes and covered floors are standard. Variants range from small drop-off depots to large rail- or barge-served stations of megacities; in India, redesigned dhalas now serve as micro transfer points that also host material recovery.",
              "Routing cuts the kilometres between all these nodes. Objectives: minimise distance and time while respecting vehicle capacity, one-way streets, market hours and shift windows. Methods climb from manual clustering and experience, through heuristics like cluster-first-route-second and nearest-neighbour, to the Chinese postman formulation for street sweeping, where every street segment must be traversed at least once. GIS-based route optimisation routinely trims 10-30 per cent of fleet kilometres; GPS telemetry then audits reality against the plan and feeds monthly revisions. Routing and transfer decisions are made together, since every kilometre shifted from small vehicles to compacted long-haul trailers is the cheapest kilometre in the system.",
            ],
            bullets: [
              "Break-even rule: a transfer station with compaction pays beyond roughly 15-20 km one-way or a 30-minute haul.",
              "Station anatomy: ramp, tipping floor, pusher or compactor, quick-exit trailer bays, odour and leachate controls.",
              "Siting is the hard part - NIMBY resistance demands containment, aesthetics and community benefit sharing.",
              "Routing ladder: manual clustering, heuristics (cluster-first, nearest-neighbour), Chinese postman for sweeping.",
              "GIS optimisation trims 10-30 per cent of fleet kilometres; GPS telemetry audits and revises routes.",
            ],
            codeExample: {
              language: "python",
              caption: "A nearest-neighbour heuristic for a collection run through five wards.",
              code: `# Nearest-neighbour heuristic for a collection run
points = {
    "Depot":  (0, 0),
    "Ward A": (3, 4),
    "Ward B": (6, 1),
    "Ward C": (8, 5),
    "Ward D": (2, 7),
    "Market": (9, 8),
}

def dist(p, q):
    return ((p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2) ** 0.5

route = ["Depot"]
remaining = [p for p in points if p != "Depot"]
while remaining:
    here = route[-1]
    nxt = min(remaining, key=lambda p: dist(points[here], points[p]))
    route.append(nxt)
    remaining.remove(nxt)
route.append("Depot")          # return leg

total = sum(dist(points[a], points[b]) for a, b in zip(route, route[1:]))
print(" -> ".join(route))
print(f"Total distance: {total:.1f} km")
`,
            },
            diagram: {
              kind: "flow",
              title: "Deciding and operating the haul system",
              caption:
                "The engineer's decision ladder from mapping the city to monitoring the fleet.",
              steps: [
                { label: "Map generation and collection points", note: "GIS layer of wards and dhalas" },
                { label: "Compute per-trip haul time and distance", note: "include queueing at the gate" },
                { label: "Compare direct haul vs transfer cost", note: "per tonne-kilometre basis" },
                { label: "If transfer wins: compact and long-haul", note: "15-30 tonne trailers" },
                { label: "Optimise routes, then monitor", note: "GPS telemetry feeds revisions" },
              ],
            },
            callout: {
              type: "warning",
              title: "Hauling air is the hidden sin",
              body: "Uncompacted loose waste loads vehicles to volume capacity long before weight capacity - roughly 200 kg per cubic metre loose against legal axle limits. Always pair any transfer-station answer with the compaction argument, or the economics collapse.",
            },
            keyTerms: [
              { term: "Transfer station", definition: "A facility where small collection vehicles unload waste for compaction into large long-haul trailers, used when haul distance exceeds the break-even." },
              { term: "Break-even haul distance", definition: "The one-way distance - roughly 15-20 km in practice - beyond which transfer with compaction costs less than direct haul." },
              { term: "Chinese postman problem", definition: "The routing formulation that traverses every street segment at least once, applied to sweeping and door-to-door collection." },
            ],
            examQuestions: [
              {
                q: "What is a transfer station, and when does it become economical? Describe its components, design considerations and the routing methods used around it.",
                marks: 7,
                outline: [
                  "Define the transfer station and its place in the two-stage system.",
                  "Economics: small vehicles waste shift time on long hauls; cost per tonne-kilometre comparison.",
                  "Break-even: about 15-20 km one-way or 30 minutes of haul.",
                  "Components: ramp, tipping floor, compactor or pusher, trailer bays, odour and leachate control.",
                  "Siting and NIMBY management; fire, washes and covered operation.",
                  "Routing: clustering, nearest-neighbour and Chinese postman heuristics, then GIS optimisation.",
                  "Close with GPS monitoring and periodic route revision.",
                ],
              },
              {
                q: "State the rule-of-thumb break-even distance that justifies a transfer station.",
                marks: 2,
              },
              {
                q: "Distinguish primary transport from secondary transport in municipal waste management.",
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
      title: "Treatment and Disposal Technologies",
      summary:
        "The technology bench: aerobic composting and vermicomposting, biomethanation, RDF and incineration, pyrolysis and gasification, and the engineered sanitary landfill with its liner systems, leachate treatment and landfill gas management.",
      chapter: {
        number: "03",
        title: "Treatment and Disposal Technologies",
        intro:
          "Unit III is the heart of the subject - the conversion technologies. It begins with the biological bench (window and vermicomposting, then biomethanation with its four-stage microbiology), crosses the thermal bench (RDF and mass-burn incineration, then pyrolysis and gasification), and ends where every stream finally rests: the sanitary landfill, its layered barrier design, its leachate treatment and its gas collection.",
        inOneBreath:
          "Composting turns segregated wet waste into humus: windrows held at 50-60 per cent moisture and C/N 25-30 heat to 55-65 deg C in the thermophilic phase, killing pathogens before curing and screening; Eisenia fetida does the same job cool and slow in vermicomposting beds. Biomethanation runs the four-stage anaerobic chain - hydrolysis, acidogenesis, acetogenesis, methanogenesis - at pH 6.8-7.4 to yield 55-70 per cent methane biogas plus digestate. RDF densifies the dry fraction into 12-20 MJ/kg fuel for cement kilns; mass-burn incineration needs 850 deg C for two seconds and feed above 7-8 MJ/kg, which Indian mixed waste rarely is; pyrolysis and gasification convert sorted dry waste to char, oil and syngas. The sanitary landfill takes only the rejects: double liner, leachate collection and treatment, gas wells tapping 45-60 per cent methane, daily cover, phased closure and 15 years of post-closure care.",
        sections: [
          {
            number: "3.1",
            title: "Composting: windrow, in-vessel and vermi",
            body: [
              "Aerobic composting is controlled rotting. Microbes - bacteria, actinomycetes and fungi - oxidise the organics, and the heap runs a thermal arc: mesophilic start-up over the first days, a thermophilic peak at 55-65 deg C that kills pathogens and weed seeds, then cooling and curing. The control windows are tight: C/N around 25-30 to one, moisture 50-60 per cent, and enough aeration - by turning or forced air - to keep the process aerobic. Miss the windows and the heap sours or stalls; hit them and stable, dark, earthy compost emerges in six to ten weeks of active phase plus curing.",
              "Methods scale the same microbiology. Open windrows - long triangular piles turned every few days early, then weekly - are the municipal workhorse; aerated static piles replace turning with perforated pipes and blowers; in-vessel drums and tunnels compress the cycle into weeks with full odour and leachate capture, at capital cost. The classic Indian methods belong in every answer: the Indore method, pit-based, layered and turned, aerobic over about three months; the Bangalore method, unturned and anaerobic, layered with soil, slower at six to eight months. Product quality must meet Fertiliser Control Order limits for maturity, pathogens and heavy metals.",
              "Vermicomposting gives the same destination a cooler engine. Surface-feeding earthworms - Eisenia fetida, Eudrilus eugeniae, Perionyx excavatus - pass waste through their gut and excrete vermicasts rich in humus, enzymes and microbial life. Beds at 20-30 deg C and 60-70 per cent moisture convert feedstock in 45-60 days; oily, salty, acidic and citrus wastes are refused. Vermicompost commands a price premium for its fine structure and growth hormones, and the technology scales from a household bin to a ward-level shed - ideal for decentralised, bulk-generator and institutional use.",
            ],
            bullets: [
              "Process arc: mesophilic start, thermophilic peak 55-65 deg C (pathogen kill), cooling, curing.",
              "Control windows: C/N 25-30, moisture 50-60 per cent, aeration by turning or forced air.",
              "Windrows: turned every 2-3 days early, then weekly; aerated static piles use blowers and pipes.",
              "Indore method: pits, layers, turnings, aerobic, about 3 months; Bangalore method: unturned anaerobic, 6-8 months.",
              "Vermicomposting: Eisenia fetida at 20-30 deg C and 60-70 per cent moisture; harvest vermicompost at 45-60 days.",
            ],
            codeExample: {
              language: "python",
              caption: "Blending kitchen waste with dry leaves to hit the C/N target.",
              code: `# Blend kitchen waste with dry leaves to reach C/N 25-30
kitchen_cn = 15      # C:N of segregated kitchen waste
leaves_cn = 50       # C:N of dry leaves
target = 27          # chosen mid-window value

# mass fraction k of kitchen waste satisfying:
#   k*kitchen_cn + (1-k)*leaves_cn = target
k = (target - leaves_cn) / (kitchen_cn - leaves_cn)
print(f"Recipe: {k*100:.0f}% kitchen waste + {(1-k)*100:.0f}% dry leaves")

# Daily mix for a 1000 kg/day wet-waste stream:
wet = 1000 * k
dry = 1000 * (1 - k)
print(f"Daily mix: {wet:.0f} kg kitchen + {dry:.0f} kg leaves")

# Then check moisture: kitchen ~70%, leaves ~15%;
# this blend lands near the 50-60% composting window.
`,
            },
            diagram: {
              kind: "pipeline",
              title: "The windrow composting line",
              caption:
                "Six stations from segregated wet waste to bagged compost - draw the temperature profile alongside.",
              stages: [
                { label: "Feedstock reception", note: "segregated wet waste, rejects removed" },
                { label: "Recipe and windrow formation", note: "C/N 25-30, moisture 50-60%" },
                { label: "Active thermophilic phase", note: "55-65 deg C, turnings" },
                { label: "Curing", note: "4-8 weeks, temperature falls" },
                { label: "Screening", note: "oversize recycled, fines refined" },
                { label: "Mature compost", note: "FCO-grade product" },
              ],
            },
            callout: {
              type: "exam",
              title: "The temperature-time curve is the answer",
              body: "Whenever composting is asked, draw time on the x-axis and temperature on the y-axis: mesophilic rise, thermophilic plateau at 55-65 deg C, then cooling into curing. Label the phases and mark where pathogen kill and stabilisation happen - this one sketch carries half the marks.",
            },
            keyTerms: [
              { term: "Thermophilic phase", definition: "The high-temperature stage of composting at 55-65 deg C where pathogens and weed seeds are destroyed." },
              { term: "Vermicomposting", definition: "Composting driven by surface-feeding earthworms such as Eisenia fetida, producing nutrient-rich vermicasts at 20-30 deg C." },
              { term: "C/N ratio", definition: "The carbon-to-nitrogen ratio of the feedstock, maintained near 25-30 for efficient composting." },
            ],
            examQuestions: [
              {
                q: "Explain the process of aerobic windrow composting with its phases and control parameters. Compare windrow, in-vessel and vermicomposting, and mention the Indore and Bangalore methods.",
                marks: 7,
                outline: [
                  "Define composting as aerobic biological stabilisation of organics.",
                  "Draw the temperature-time curve: mesophilic, thermophilic 55-65 deg C, cooling, curing.",
                  "Control parameters: C/N 25-30, moisture 50-60 per cent, aeration and turning schedule.",
                  "Windrow method: pile geometry, turning frequency, area needs.",
                  "In-vessel: drums and tunnels, fast, odour-controlled, capital-heavy.",
                  "Vermicomposting: Eisenia fetida, 20-30 deg C, 45-60 days, premium product.",
                  "Indore (turned, aerobic, ~3 months) versus Bangalore (unturned anaerobic, 6-8 months).",
                ],
              },
              {
                q: "Why should the C/N ratio of a composting mix be about 25-30? What happens outside the window?",
                marks: 3,
              },
              {
                q: "Name the earthworm species most used in vermicomposting and one waste type it refuses.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Biomethanation",
            body: [
              "Biomethanation - anaerobic digestion - converts wet organics into methane using a four-stage microbial relay. Hydrolysis breaks complex polymers into sugars, amino acids and fatty acids; acidogenesis ferments those into volatile fatty acids; acetogenesis converts the acids to acetate, hydrogen and carbon dioxide; and slow-growing, oxygen-hating methanogens finally assemble biogas. The digester is a sensitive consortia: pH must hold at 6.8-7.4, alkalinity must buffer the acids, and temperature chooses the regime - mesophilic near 35 deg C, stable and common, or thermophilic near 55 deg C, faster but twitchy.",
              "The yield is what sells it. One tonne of segregated food and kitchen waste yields roughly 60-100 cubic metres of biogas at 55-70 per cent methane - about 6 kWh of thermal energy per cubic metre - plus a digestate that dewateres into excellent soil conditioner. Hydraulic retention times run 15-30 days in wet plants; feed needs 20-40 per cent solids for dry designs. The gas runs gensets, boilers, or - after upgrading and bottling - becomes bio-CNG for buses. Segregated feed is non-negotiable: plastics and grit jam pumps, and a single pH crash from overloading can take a digester weeks to recover.",
              "Configurations span scales: continuous stirred-tank reactors for municipal wet waste, plug-flow and covered lagoons for slurries, dry digesters for high-solids streams, and two-stage designs that separate acid and methane phases for difficult feed. India runs the full spectrum - from household floating-dome plants through community units to municipal facilities treating hundreds of tonnes a day, with cities like Indore operating biomethanation alongside composting. For the exam, the four stages with their substrates and products, plus the operating windows, are the marks.",
            ],
            bullets: [
              "Four stages: hydrolysis, acidogenesis, acetogenesis, methanogenesis - each with its own microbial guild.",
              "Operating windows: pH 6.8-7.4; mesophilic about 35 deg C or thermophilic about 55 deg C; HRT 15-30 days.",
              "Yield: about 60-100 cubic metres of biogas per tonne of segregated organics, at 55-70 per cent methane.",
              "Biogas uses: boiler and genset fuel directly, or upgraded to bio-CNG; digestate becomes soil conditioner.",
              "Feed discipline: source-separated organics only - plastics and grit kill pumps; overload causes pH crash.",
            ],
            table: {
              caption: "The four stages of anaerobic digestion.",
              headers: ["Stage", "Actors", "Substrate to product", "Failure mode"],
              rows: [
                ["Hydrolysis", "Hydrolytic bacteria", "Polymers to sugars and acids", "Lignin-rich feed slows it"],
                ["Acidogenesis", "Acidogens (fast)", "Sugars to volatile fatty acids", "VFA surge if unbalanced"],
                ["Acetogenesis", "Acetogens", "VFAs to acetate, H2, CO2", "H2 build-up blocks conversion"],
                ["Methanogenesis", "Methanogens (slow)", "Acetate and H2 to CH4 + CO2", "pH below 6.8 stalls them"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The four-stage anaerobic relay",
              caption:
                "A closed loop inside the digester - memorise the substrates and products at each station.",
              steps: [
                { label: "Hydrolysis", note: "polymers to monomers" },
                { label: "Acidogenesis", note: "monomers to volatile fatty acids" },
                { label: "Acetogenesis", note: "acids to acetate and hydrogen" },
                { label: "Methanogenesis", note: "acetate and H2 to methane" },
              ],
            },
            callout: {
              type: "warning",
              title: "The pH crash is the classic exam trap",
              body: "Overfeeding a digester floods it with volatile fatty acids; pH falls below 6.8 and the slow-growing methanogens stall, so acid accumulates further. Write the loop - VFA up, pH down, methanogens stall - and the remedies: reduce loading, add alkalinity, recover slowly.",
            },
            keyTerms: [
              { term: "Anaerobic digestion", definition: "The four-stage microbial conversion of organics to biogas in the absence of oxygen." },
              { term: "Hydraulic retention time", definition: "The average time feedstock spends in the digester, typically 15-30 days for wet systems." },
              { term: "Digestate", definition: "The nutrient-rich residue after digestion, dewatered and used as a soil conditioner." },
            ],
            examQuestions: [
              {
                q: "Explain biomethanation with the four stages of anaerobic digestion, their microorganisms and products, and the operating conditions for a stable digester.",
                marks: 7,
                outline: [
                  "Define biomethanation and its feed: segregated wet organics.",
                  "Stage 1 - hydrolysis: polymers to monomers by hydrolytic bacteria.",
                  "Stage 2 - acidogenesis: monomers to volatile fatty acids.",
                  "Stage 3 - acetogenesis: fatty acids to acetate and hydrogen.",
                  "Stage 4 - methanogenesis: acetate and H2 to methane and CO2.",
                  "Operating windows: pH 6.8-7.4, mesophilic 35 or thermophilic 55 deg C, HRT 15-30 days.",
                  "Outputs: 60-100 cubic metres biogas per tonne, 55-70 per cent methane, plus digestate.",
                ],
              },
              {
                q: "Write the composition and one end-use of biogas.",
                marks: 2,
              },
              {
                q: "Why does a thermophilic digester need closer control than a mesophilic one?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "RDF and incineration",
            body: [
              "Refuse-derived fuel upgrades the dry fraction into a commodity. Mixed or separately collected dry waste passes a preparation line - trommel screening, magnetic and eddy-current separation, shredding, drying and finally densification into pellets or cubettes, or sale as fluffy RDF. The product runs at 12-20 MJ/kg depending on plastic share - several times the raw waste value - and its favourite customer is the cement kiln, where co-processing substitutes coal in a furnace whose 1400-plus deg C conditions leave no residue. RDF grades run from coarse fluff to densified pellets.",
              "Mass-burn incineration is the alternative thermal route: waste feeds a moving grate, combusts, and a boiler recovers heat for a steam turbine. The regulatory heart is the two-second rule - flue gases must be held at or above 850 deg C for at least two seconds so dioxins and furans are destroyed. The feed gate is the catch: incineration wants an as-fired calorific value above about 7-8 MJ/kg and moisture below half. Indian mixed waste at 3.5-7 MJ/kg usually fails the gate, so plants lean on support fuel, dried RDF, or starve - the graveyard of Indian W2E proposals.",
              "The emission train and the ash close the loop. Urea or ammonia injection (SNCR) cuts NOx; a lime scrubber neutralises acid gases HCl and SOx; activated carbon captures mercury and dioxins; a bag house removes particulates before a monitored stack. Bottom ash recycles as aggregate where clean; fly ash, carrying trapped metals and dioxins, is hazardous and goes to secure disposal - roughly 3-5 per cent of input mass. Scale economies push plants to 300-500 tonnes per day minimum; power output runs about 500-650 kWh per tonne on good feed, and tariffs land well above solar, which is why the choice of thermal route must always be defended against the hierarchy.",
            ],
            bullets: [
              "RDF line: trommel, magnets, eddy-current, shredding, drying, densification - product at 12-20 MJ/kg.",
              "Co-processing in cement kilns is the premium RDF outlet: coal substitution, no residual ash.",
              "Incineration heart: 850 deg C for at least 2 seconds in the flue gas - the dioxin destruction rule.",
              "Feed gate: above 7-8 MJ/kg as fired; Indian mixed waste at 3.5-7 MJ/kg usually needs support fuel or RDF.",
              "Emission train: SNCR for NOx, lime scrubber for acid gas, activated carbon for dioxins and mercury, bag house for dust.",
            ],
            table: {
              caption: "The incineration flue-gas cleaning train.",
              headers: ["Stage", "Device", "Target pollutant"],
              rows: [
                ["NOx control", "SNCR - urea or ammonia injection", "Oxides of nitrogen"],
                ["Acid gas control", "Semi-dry lime scrubber", "HCl and SOx"],
                ["Trace pollutant control", "Activated carbon injection", "Mercury, dioxins, furans"],
                ["Particulate control", "Bag house (fabric filter)", "Dust and absorbed metals"],
                ["Residue", "Bottom ash recycle; fly ash secure disposal", "About 3-5 per cent of feed mass"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The mass-burn energy line",
              caption:
                "From tipping floor to monitored stack - the sketch that structures every incineration answer.",
              steps: [
                { label: "Reception and bunker mixing", note: "crane homogenises feed" },
                { label: "Moving-grate furnace", note: "850 deg C, 2-second rule" },
                { label: "Boiler heat recovery", note: "steam raised" },
                { label: "Turbine and generator", note: "about 500-650 kWh per tonne" },
                { label: "Flue-gas cleaning train", note: "SNCR, lime, carbon, bag house" },
                { label: "Monitored stack and ash out", note: "continuous emission monitoring" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the two numbers",
              body: "Two numbers unlock thermal questions: 850 deg C for 2 seconds (dioxin control) and 7-8 MJ/kg (the feed gate). Any Indian-context answer must then note that mixed waste at 3.5-7 MJ/kg fails the gate - support fuel, RDF, or segregation are the remedies.",
            },
            keyTerms: [
              { term: "Refuse-derived fuel", definition: "The combustible fraction of waste processed by screening, separation, shredding and drying into fluff or pellets of 12-20 MJ/kg." },
              { term: "Moving grate", definition: "The inclined stepped grate on which waste tumbles and combusts in a mass-burn incinerator." },
              { term: "Dioxins and furans", definition: "Persistent organic micropollutants formed in waste combustion, controlled by holding flue gas at 850 deg C for two seconds." },
            ],
            examQuestions: [
              {
                q: "With a neat flow diagram, explain a mass-burn incineration plant with energy recovery. Describe the flue-gas cleaning train and the conditions needed for its successful operation on Indian waste.",
                marks: 7,
                outline: [
                  "Draw the line: bunker, moving-grate furnace, boiler, turbine, gas cleaning, stack.",
                  "Combustion essentials: excess air, 850 deg C for 2 seconds for dioxin destruction.",
                  "Energy recovery: about 500-650 kWh per tonne on good feed.",
                  "Gas train: SNCR for NOx, lime scrubber for acid gases.",
                  "Activated carbon for mercury and dioxins; bag house for particulates.",
                  "Ash handling: bottom ash recycling, fly ash secure disposal.",
                  "Indian reality: feed at 3.5-7 MJ/kg fails the 7-8 MJ/kg gate - support fuel or RDF needed.",
                ],
              },
              {
                q: "Define refuse-derived fuel and state its typical calorific value range.",
                marks: 2,
              },
              {
                q: "Why do incineration plants in India often require auxiliary fuel? Explain with calorific values.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Pyrolysis and gasification",
            body: [
              "Pyrolysis is heating without oxygen - typically 400-600 deg C - so the feed decomposes rather than burns into three products: char, a condensable pyrolysis oil and a fuel gas. Slow pyrolysis maximises char (the biochar route); fast pyrolysis - high heating rates, seconds of residence - maximises oil. The reactions are endothermic: heat must come from outside. The feed must be sorted and dry - segregated plastics yield an oil-rich product, biomass yields char and gas, while metals and glass merely steal heat. Plastics-to-oil units are now a recognised route for non-recyclable polymer streams.",
              "Gasification is partial oxidation: the same organic matter reacts at 800-1200 deg C with a restricted supply of air, oxygen or steam, producing a synthesis gas of carbon monoxide and hydrogen with some methane. Air-blown gas gives a modest 4-6 MJ per normal cubic metre; oxygen or steam blowing raises it. After cooling, tar cracking and particulate filtration, the syngas runs engines or turbines at electrical efficiencies a mass-burn plant cannot match. The tar is the engineering villain - it condenses, coats and clogs unless the gas is hot-cleaned or cracked.",
              "For the exam, the pairing is the point. Pyrolysis: no oxygen, 400-600 deg C, external heat, products char, oil and gas. Gasification: sub-stoichiometric oxidant, 800-1200 deg C, products syngas and ash or slag. Both reward clean, sorted, dry feed and punish mixed wet waste; both are modular and suit small and medium towns, cluster-level plants and specific streams - biomass, RDF, sorted plastics. Neither is a licence to bypass the hierarchy: they sit on the recovery tier, after reduce, reuse and recycle.",
            ],
            bullets: [
              "Pyrolysis: zero oxygen, 400-600 deg C, externally heated; products are char, oil and gas.",
              "Slow pyrolysis maximises char (biochar); fast pyrolysis maximises condensable oil.",
              "Gasification: sub-stoichiometric air, oxygen or steam at 800-1200 deg C; product is CO + H2 syngas.",
              "Syngas heating value: about 4-6 MJ per normal cubic metre air-blown, higher with oxygen or steam.",
              "Both technologies demand sorted, dry feed and sit on the recovery tier - below recycling in the hierarchy.",
            ],
            table: {
              caption: "Pyrolysis versus gasification at a glance.",
              headers: ["Aspect", "Pyrolysis", "Gasification"],
              rows: [
                ["Oxygen supply", "None at all", "Sub-stoichiometric"],
                ["Temperature", "400-600 deg C", "800-1200 deg C"],
                ["Heat source", "External, endothermic", "Partial internal oxidation"],
                ["Main products", "Char, pyrolysis oil, gas", "Syngas (CO + H2) plus ash"],
                ["Best feed", "Sorted plastics, dry biomass", "RDF, biomass, sorted residues"],
                ["Key problem", "Oil upgrading and markets", "Tar formation and cleanup"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two thermal routes, two chemistries",
              caption:
                "The comparison table as a picture - oxygen, temperature, products and best feed in each panel.",
              left: {
                heading: "Pyrolysis",
                items: [
                  "No oxygen; external heat",
                  "400-600 deg C",
                  "Products: char, oil, fuel gas",
                  "Slow route maximises char",
                  "Feed: sorted plastics, biomass",
                ],
              },
              right: {
                heading: "Gasification",
                items: [
                  "Limited air, oxygen or steam",
                  "800-1200 deg C",
                  "Product: syngas (CO + H2)",
                  "Higher efficiency to power",
                  "Feed: RDF, biomass; tar is the villain",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Never call gasification burning",
              body: "Gasification is partial oxidation with less oxygen than needed for complete combustion - that distinction is the definition and examiners strike marks for calling it incineration under another name. The same discipline applies to pyrolysis: no oxygen at all.",
            },
            keyTerms: [
              { term: "Pyrolysis", definition: "Thermal decomposition of waste at 400-600 deg C in the complete absence of oxygen, yielding char, oil and gas." },
              { term: "Gasification", definition: "Conversion of waste at 800-1200 deg C with sub-stoichiometric air, oxygen or steam into a synthesis gas." },
              { term: "Syngas", definition: "The carbon-monoxide and hydrogen fuel gas produced by gasification, usable in engines and turbines after tar cleanup." },
            ],
            examQuestions: [
              {
                q: "Differentiate between pyrolysis and gasification with process conditions, products and suitable feedstock. Where do these technologies sit in the waste hierarchy?",
                marks: 7,
                outline: [
                  "Define pyrolysis: no oxygen, 400-600 deg C, external heat.",
                  "Pyrolysis products and variants: slow for char, fast for oil; plastics-to-oil.",
                  "Define gasification: sub-stoichiometric oxidant at 800-1200 deg C.",
                  "Gasification product: syngas, 4-6 MJ per normal cubic metre air-blown; tar cleanup.",
                  "Compare feed needs: both want sorted, dry streams; mixed wet waste fails.",
                  "Modularity and suitability for small towns and specific streams.",
                  "Hierarchy position: recovery tier, below recycling - not a bypass.",
                ],
              },
              {
                q: "What is synthesis gas, and what two gases is it mainly made of?",
                marks: 2,
              },
              {
                q: "Give two advantages of modular thermal plants over mass-burn incineration for small towns.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Sanitary landfill: design, leachate and gas",
            body: [
              "The sanitary landfill is the engineered end of the line - and under SWM Rules 2016, the end has shrunk: only inert rejects and process residues belong there, never mixed raw waste. Siting does the first engineering: geology of low permeability, groundwater well below the base, clear of floodplains and water bodies, buffered from habitation, and mindful of aerodrome bird-hazard restrictions. Operations then run as a sequence of cells: waste spread in thin layers, compacted to 700-900 kg per cubic metre, covered each day with 10-15 cm of soil to deter vectors, birds and fires, with intermediate cover between stages.",
              "The barrier system is the landfill's anatomy. From the bottom up: a prepared foundation; a composite liner of compacted clay - of the order of half a metre to a metre, permeability below one-billionth of a metre per second - beneath a 1.5 mm HDPE geomembrane; a gravel drainage layer with perforated pipes that route leachate to a sump for treatment; then the waste mass itself. The cap mirrors the base: a low-permeability final cover, a drainage layer and vegetated topsoil that shed rain rather than infiltrating it. Every layer exists to keep water out, leachate in, and gas controlled.",
              "Leachate and gas are the two live management streams. Young leachate is strong and ammoniarich; treatment options run from recirculation through the mass, to biological plants, to reverse osmosis and evaporation for old, salty leachate. Landfill gas - 45-60 per cent methane - is tapped by vertical wells on a header to a flare or a generator; generation peaks in the first five to fifteen years and decays over decades. The mass itself stabilises through five phases - aerobic, acid, unstable methanogenic, stable methanogenic and maturation - after which settlement eases. Closure is not the end: post-closure care - monitoring groundwater wells, gas probes and settlement - runs about 15 years before a park or solar farm can take over.",
            ],
            bullets: [
              "Only rejects and residues go to landfill under SWM Rules 2016 - never mixed raw waste.",
              "Barrier anatomy: compacted clay (about 0.5-1 m, k below 1e-9 m/s) plus 1.5 mm HDPE geomembrane.",
              "Leachate chain: gravel drainage to sump; treatment by recirculation, biological units, RO or evaporation.",
              "Landfill gas: 45-60 per cent methane, tapped by wells to flare or genset; peaks in years 5-15.",
              "Closure discipline: daily cover 10-15 cm, compaction to 700-900 kg per cubic metre, post-closure care about 15 years.",
            ],
            codeExample: {
              language: "python",
              caption: "A first-order estimate of methane generation from a closed landfill.",
              code: `import math

# First-order decay estimate of methane generation
M0 = 500_000     # tonnes of waste in place at closure
Lo = 100         # m3 methane per tonne, ultimate yield
k = 0.05         # per year, decay constant

print(f"Waste in place: {M0} t, ultimate yield {Lo} m3/t")
for t in [1, 5, 10, 20, 30]:
    q = M0 * Lo * k * math.exp(-k * t)   # m3 per year
    print(f"Year {t:2d}: {q/1e6:5.2f} million m3 methane")

# Reading: generation peaks early, then decays -
# gas wells must be maintained through the 15-year
# post-closure period and beyond.
`,
            },
            diagram: {
              kind: "layers",
              title: "Landfill cross-section, top to bottom",
              caption:
                "The labelled sketch that carries half the marks in any landfill question - reproduce it from memory.",
              layers: [
                { label: "Vegetated topsoil", note: "final cover surface" },
                { label: "Drainage and barrier cap", note: "sheds rain, limits infiltration" },
                { label: "Compacted waste cells", note: "lifts with 10-15 cm daily cover" },
                { label: "Leachate collection layer", note: "gravel with perforated pipes to sump" },
                { label: "Composite liner", note: "1.5 mm HDPE over compacted clay" },
                { label: "Foundation and monitoring", note: "groundwater wells and gas probes below" },
              ],
            },
            callout: {
              type: "exam",
              title: "The cross-section is the answer",
              body: "Landfill questions are sketch questions. Draw the section from vegetated cap to foundation, label every layer with dimensions - 1.5 mm geomembrane, clay liner, drainage gravel, daily cover - then add the gas well and leachate sump. A labelled drawing with the five stabilization phases earns the full span.",
            },
            keyTerms: [
              { term: "Sanitary landfill", definition: "An engineered disposal facility with liners, leachate collection, gas management, daily cover and post-closure monitoring." },
              { term: "Leachate", definition: "The contaminated liquid percolating through waste, collected by the drainage layer and treated before discharge." },
              { term: "Landfill gas", definition: "The 45-60 per cent methane biogas generated by anaerobic decomposition, collected by wells for flaring or power." },
            ],
            examQuestions: [
              {
                q: "Describe the design of a sanitary landfill with a neat cross-section. Explain leachate generation and its treatment, and landfill gas collection and use.",
                marks: 7,
                outline: [
                  "Role under SWM Rules 2016: rejects and residues only.",
                  "Siting criteria: geology, groundwater, floodplain and habitation buffers.",
                  "Draw the section: cap, drainage, waste cells, leachate layer, composite liner, foundation.",
                  "Liner details: 1.5 mm HDPE over compacted clay, k below 1e-9 m/s.",
                  "Operations: cell-wise filling, daily cover 10-15 cm, compaction 700-900 kg per cubic metre.",
                  "Leachate: recirculation, biological treatment, RO for old leachate.",
                  "Gas: 45-60 per cent methane, wells to flare or genset; five stabilization phases; 15-year post-closure care.",
                ],
              },
              {
                q: "Write the composition of landfill gas and state its one energy use.",
                marks: 2,
              },
              {
                q: "Why is daily cover applied on a working landfill face? Give two reasons.",
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
      title: "Hazardous and Special Wastes",
      summary:
        "The dangerous streams and their dedicated infrastructure: hazardous waste authorisation and the TSDF, biomedical waste colour categories and the CBWTF, e-waste and its EPR regime, C&D recycling into aggregate, and plastics under the 2022 framework.",
      chapter: {
        number: "04",
        title: "Hazardous and Special Wastes",
        intro:
          "Unit IV handles the streams that cannot ride the municipal system. Hazardous waste travels under manifests to a TSDF; biomedical waste moves in four colours through a CBWTF; e-waste flows through EPR-funded recyclers; C&D debris is reborn as aggregate; and plastics answer to the 2022 rule with credits, thickness norms and the single-use ban.",
        inOneBreath:
          "Hazardous waste is tracked cradle to grave: generators hold SPCB authorisation, every load moves on a multi-copy manifest, and the TSDF receives it - stabilising, incinerating or sealing it in a double-lined secured landfill. Biomedical waste is segregated into yellow, red, white and blue at the ward, held no more than 48 hours untreated, and processed at a CBWTF within a nominal 75 km radius by incineration at about 850 to 1050 deg C or autoclaving at 121 deg C. E-waste falls under the 2022 rules with EPR certificates and rising recovery targets on producers, C&D waste is crushed into recycled aggregate per IS 383, and plastic waste answers to thickness norms of 75 to 120 microns, the 1 July 2022 single-use ban and a credit-based EPR market.",
        sections: [
          {
            number: "4.1",
            title: "Hazardous waste and the TSDF",
            body: [
              "Hazardous waste management runs on a paper trail. Every generator of scheduled waste - the electroplater's acid sludge, the pesticide formulator's rejects, the refinery's oily residue - holds an authorisation from the state pollution control board, quantifies its waste in an inventory, and may neither dump it nor hand it to an unlicensed carrier. Each movement rides a multi-copy manifest: copies stay with the generator, transporter and receiver, and reach the boards, so a load can be traced from cradle to grave. India's industries generate roughly 8 million tonnes a year, and the manifest system is what keeps it visible.",
              "The TSDF - treatment, storage and disposal facility - is the destination the manifest names. Its components divide the load by hazard: a secured landfill for inorganic and stabilised wastes, built with double composite liners and leachate collection; an incinerator for combustible organics at 850-plus deg C; a stabilisation and solidification unit that chemically locks heavy metals into a cementitious matrix before landfilling; storage sheds for pending loads; and effluent treatment for site runoff. Member industries pay a gate fee, exactly as municipalities pay tipping fees - the TSDF is a business, disciplined by authorisation and audit.",
              "Engineering choices precede the gate. Waste can be minimised at source by process change; recycled where a market exists - the rules allow and encourage waste exchange between industries, one unit's byproduct becoming another's feedstock; or co-processed in cement kilns under CPCB guidelines, where high temperature destroys organics and the ash enters clinker. Before landfilling, pre-treatment - neutralisation, solidification, encapsulation - cuts leachability. Internationally, the Basel Convention governs transboundary movements, and India permits imports only for recovery, never for disposal.",
            ],
            bullets: [
              "Authorisation from the SPCB plus a waste inventory is the generator's entry ticket to the system.",
              "The manifest travels with every load - copies to generator, transporter, TSDF and the boards: cradle to grave.",
              "TSDF components: secured landfill with double liners, incinerator, stabilisation unit, storage sheds, ETP.",
              "Pre-treatment before landfill: neutralisation, solidification, encapsulation to cut leachability.",
              "Alternatives: waste exchange between industries and co-processing in cement kilns under CPCB guidelines.",
            ],
            codeExample: {
              language: "text",
              caption: "A hazardous waste manifest record (HW Rules 2016, Form 10 style).",
              code: `HAZARDOUS WASTE MANIFEST
-----------------------------------------------------
Generator          : Zenith Electroplaters, Indore (MP)
Authorization no.  : MP-ENV-2025-0147
Waste category    : Acid sludge from surface treatment
Quantity & pack   : 2.4 t in 12 labelled HDPE carboys
Transporter       : SafeChem Carriers, vehicle MP-09-GH-2244
Receiver          : TSDF Pithampur (authorized operator)
Copies to         : generator / transporter / receiver /
                    SPCB of origin and destination
Emergency contact : round-the-clock spill helpline
-----------------------------------------------------
Every copy must reconcile - the load is only closed
when the TSDF returns the confirmed copy to the
generator and the boards.
`,
            },
            diagram: {
              kind: "flow",
              title: "Cradle to grave: the hazardous waste chain",
              caption:
                "From authorized generator to monitored cell - the flow examiners expect with the manifest system.",
              steps: [
                { label: "Authorized generator", note: "inventory, labelling, packing" },
                { label: "Manifest + licensed carrier", note: "copies to all parties and boards" },
                { label: "TSDF reception and analysis", note: "verify against manifest" },
                { label: "Treat: incinerate or stabilize", note: "organics burned, metals locked" },
                { label: "Secured landfill cell", note: "double liner, leachate collected" },
                { label: "Closure and monitoring", note: "post-closure checks continue" },
              ],
            },
            callout: {
              type: "warning",
              title: "Cradle to grave means every signature",
              body: "The phrase is not decoration - the answer must show the manifest loop closing: the TSDF returns confirmation to the generator and the boards, so a missing load is detectable. If your chain does not loop back to the generator, the answer is incomplete.",
            },
            keyTerms: [
              { term: "TSDF", definition: "Treatment, storage and disposal facility - the authorized destination for hazardous waste with secured landfill, incinerator and stabilisation units." },
              { term: "Manifest system", definition: "The multi-copy document that tracks each hazardous waste movement from generator to disposal, closing the cradle-to-grave loop." },
              { term: "Solidification and stabilization", definition: "Pre-treatment that chemically or physically locks hazardous constituents into a stable matrix before secured landfilling." },
            ],
            examQuestions: [
              {
                q: "What is a TSDF? Describe its components, the manifest system that feeds it, and the pre-treatment and alternative options for hazardous waste.",
                marks: 7,
                outline: [
                  "Define TSDF and its role as the authorized destination.",
                  "Components: secured landfill with double composite liner and leachate collection.",
                  "Components continued: incinerator, stabilisation unit, storage sheds, effluent treatment.",
                  "Manifest system: copies to generator, transporter, receiver and boards - cradle to grave.",
                  "Pre-treatments: neutralisation, solidification, encapsulation to cut leachability.",
                  "Alternatives: waste exchange between industries; co-processing in cement kilns.",
                  "Close with Basel context and India's no-import-for-disposal stance.",
                ],
              },
              {
                q: "Explain the phrase cradle to grave in hazardous waste management.",
                marks: 2,
              },
              {
                q: "Name any two pre-treatment methods applied to hazardous waste before secured landfilling.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Biomedical waste and the CBWTF",
            body: [
              "Biomedical waste management begins at the ward, not the gate. Under the Biomedical Waste Management Rules 2016, healthcare facilities segregate into four colour-coded categories: yellow for infectious, anatomical and soiled waste plus expired medicines and chemical solids; red for contaminated but recyclable rubber and plastic such as gloves, tubings and bottles; white for untreated metallic sharps in puncture-proof boxes; and blue for glassware and metallic implants. Untreated waste may not be stored beyond 48 hours - the clock that drives every collection contract - and bags move under bar-code tracking.",
              "Most facilities do not treat their own waste - they subscribe to a CBWTF, a common biomedical waste treatment facility serving many hospitals and clinics within a nominal 75 km radius, which is what makes compliance affordable for small clinics. At the facility, the streams divide: yellow waste meets twin-chamber incineration at about 850 deg C primary and 1050 deg C secondary temperatures; red waste is autoclaved - about 121 deg C at 15 psi for 15-30 minutes, validated with chemical or biological indicators - or microwaved at 2450 MHz, then shredded to prevent reuse; white sharps are disinfected, mutilated and sent for metal recycling; blue glass is disinfected and recycled or landfilled. Ash and residues go to secured disposal.",
              "The system lives or dies on discipline inside the hospital. The occupier trains staff in segregation, provides personal protective equipment, pre-treats laboratory and infectious liquid waste before discharge, files annual reports, and maintains treatment records - during COVID, yellow-bag volumes surged and the 48-hour clock stressed every CBWTF in the country. Needle-stick injuries are the occupational shadow of poor sharps handling, which is why puncture-proof white containers and bedside mutilators are exam favourites as much as field realities.",
            ],
            bullets: [
              "Four colour categories under BMW Rules 2016: yellow, red, white (sharps), blue (glass and implants).",
              "The 48-hour rule: untreated biomedical waste may not be stored beyond two days.",
              "CBWTF: shared treatment within a nominal 75 km radius - the only affordable route for small clinics.",
              "Treatment routes: incineration near 850-1050 deg C; autoclave about 121 deg C at 15 psi; microwave at 2450 MHz.",
              "Occupier duties: ward-level segregation, PPE, training, lab-waste pre-treatment, annual reports.",
            ],
            table: {
              caption: "Biomedical waste colour categories and their treatment routes.",
              headers: ["Colour", "Contents", "Treatment and destination"],
              rows: [
                ["Yellow", "Infectious, anatomical, soiled waste; expired medicines", "Twin-chamber incineration or plasma pyrolysis"],
                ["Red", "Contaminated gloves, tubings, bottles (recyclable)", "Autoclave or microwave, then shred and recycle"],
                ["White", "Untreated metallic sharps in puncture-proof boxes", "Disinfect, mutilate, send to metal recycling"],
                ["Blue", "Glassware, vials, metallic implants", "Disinfect and recycle or dispose in landfill"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From ward to CBWTF: the biomedical chain",
              caption:
                "Colour-coded from the bedside, treated within 48 hours, recycled or safely disposed.",
              stages: [
                { label: "Ward segregation", note: "four colours at the point of generation" },
                { label: "Covered storage", note: "bar-coded bags, 48-hour clock" },
                { label: "Dedicated transport", note: "colour-coded, GPS-tracked vans" },
                { label: "CBWTF treatment", note: "incineration, autoclave or microwave" },
                { label: "Residue and recycling", note: "ash to secured landfill, metals recycled" },
              ],
            },
            callout: {
              type: "exam",
              title: "The colour table is pure marks",
              body: "Yellow, red, white, blue - with contents and treatment - is asked almost every year as a short table or part of a 7-marker. Write it as a four-row table and append the 48-hour rule and the 75 km CBWTF radius for the complete answer.",
            },
            keyTerms: [
              { term: "CBWTF", definition: "Common biomedical waste treatment facility serving multiple healthcare units within a nominal 75 km radius." },
              { term: "Yellow category", definition: "The biomedical waste stream of infectious, anatomical and soiled waste destined for incineration." },
              { term: "Autoclaving", definition: "Steam sterilisation at about 121 deg C and 15 psi, validated by indicators, used before shredding red-category waste." },
            ],
            examQuestions: [
              {
                q: "Explain the categorisation of biomedical waste under the BMW Rules 2016 with colour coding and treatment routes. What is a CBWTF and why is it preferred?",
                marks: 7,
                outline: [
                  "Context: about 15 per cent of healthcare waste is hazardous; 2016 rules replaced 1998 categories.",
                  "Yellow: infectious, anatomical, soiled, expired medicines - incineration.",
                  "Red: contaminated recyclable rubber and plastic - autoclave or microwave, shred, recycle.",
                  "White: metallic sharps in puncture-proof boxes - disinfect, mutilate, recycle.",
                  "Blue: glassware and implants - disinfect, recycle or landfill.",
                  "The 48-hour storage limit and bar-code tracking.",
                  "CBWTF: shared facility within about 75 km; economics for small clinics; occupier duties.",
                ],
              },
              {
                q: "State the maximum permitted storage time for untreated biomedical waste.",
                marks: 2,
              },
              {
                q: "Why are sharps collected in puncture-proof white containers? Give two reasons.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "E-waste management",
            body: [
              "Electronic waste is the fastest-growing waste stream on earth, and India is its third largest generator - well over a million tonnes a year, rising at double-digit rates as devices shorten lifecycles. The paradox is value versus toxicity in one chassis: printed circuit boards carry gold, silver, copper and palladium in concentrations that beat mined ore - the urban mining argument - while the same devices hold lead in solder and CRT glass, mercury in lamps and switches, cadmium in batteries, hexavalent chromium in metal finishes and brominated flame retardants in plastics. Managed well, e-waste is an ore; managed badly, a slow poison.",
              "The legal machine is extended producer responsibility. The E-Waste (Management) Rules 2016 made producers responsible for collection targets through authorised channels; the 2022 rules rebuilt the market: producers register on the CPCB portal, meet recycling targets that climb from 60 per cent of the quantity they place on the market, and satisfy them by buying EPR certificates from registered recyclers - a tradable credit not unlike carbon trading. The channel runs producers to consumers to collection systems to dismantlers to recyclers, each link registered and audited. Refurbishers extend life within the chain before the material ever becomes waste.",
              "The gap between law and ground truth is the informal sector. Much of India's e-waste still flows to backyard yards where cables are burned for copper and boards are leached in acid baths - releasing dioxins and heavy metals beside homes, often worked by children. The engineering response is layered: formal dismantling clusters with proper infrastructure, producer take-back systems, buy-back pricing that can outbid the informal chain, design-for-recycling on the product side, and awareness so consumers reach authorised collectors instead of the scrap dealer. EPR finance is meant to fund exactly this bridge.",
            ],
            bullets: [
              "India is the third largest e-waste generator: over a million tonnes a year, growing in double digits.",
              "Value and poison share one chassis - gold and copper beside lead, mercury, cadmium and flame retardants.",
              "2016 rules introduced EPR; 2022 rules created tradable EPR certificates and rising targets from 60 per cent.",
              "The chain - producer, consumer, collector, dismantler, recycler - is registered and audited end to end.",
              "The informal acid-and-fire stream is the core risk; formal clusters and buy-backs are the countermeasures.",
            ],
            table: {
              caption: "E-waste components: hazard and formal handling route.",
              headers: ["Component", "Hazard", "Formal route"],
              rows: [
                ["Printed circuit boards", "Lead solder, brominated flame retardants", "Mechanical dismantling, metal recovery"],
                ["CRT glass", "Lead in the funnel and faceplate", "Closed-loop glass recycling"],
                ["Batteries", "Cadmium, lithium, electrolytes", "Specialised battery recyclers"],
                ["Lamps and switches", "Mercury vapour", "Mercury retorting units"],
                ["Plastic housings", "Brominated flame retardants", "Sorted plastics recycling"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Formal versus informal e-waste recycling",
              caption:
                "The same boards meet two systems - one audits the chain, one burns it.",
              left: {
                heading: "Formal system",
                items: [
                  "Producer EPR funds collection",
                  "Registered dismantlers depollute first",
                  "Mechanical processing recovers metals",
                  "Emissions and effluents controlled",
                  "Workers protected and audited",
                ],
              },
              right: {
                heading: "Informal backyard",
                items: [
                  "Open cable burning for copper",
                  "Acid leaching of boards for gold",
                  "Dioxins and lead in the air and soil",
                  "Child labour, no protection",
                  "Value leaks, damage stays",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Name the toxic five in every hazard answer",
              body: "Lead, mercury, cadmium, hexavalent chromium and brominated flame retardants - writing these five with their component sources converts a vague hazard paragraph into a mark-earning one. Then name one formal countermeasure per hazard.",
            },
            keyTerms: [
              { term: "E-waste", definition: "Discarded electrical and electronic equipment, from IT devices to appliances, carrying both valuable metals and toxic substances." },
              { term: "EPR credits", definition: "Tradable certificates generated by registered recyclers and bought by producers to meet e-waste collection targets under the 2022 rules." },
              { term: "Urban mining", definition: "Recovering metals from waste streams - circuit boards carry gold at concentrations above those of mined ore." },
            ],
            examQuestions: [
              {
                q: "Discuss the hazards of e-waste and India's regulatory framework for its management. How does extended producer responsibility operate under the 2022 rules, and what is the role of the informal sector?",
                marks: 7,
                outline: [
                  "Scale: India third largest generator, over a million tonnes a year.",
                  "Hazards: lead, mercury, cadmium, chromium and flame retardants with component sources.",
                  "Value side: urban mining - circuit boards versus ore grades.",
                  "2016 rules: EPR and authorised collection channels.",
                  "2022 rules: EPR certificates, rising targets from 60 per cent, registered chain.",
                  "Informal sector: acid leaching and open burning - health and environmental damage.",
                  "Countermeasures: formal clusters, take-back, buy-back pricing, design for recycling.",
                ],
              },
              {
                q: "Define e-waste as covered by the Indian rules.",
                marks: 2,
              },
              {
                q: "What is an EPR credit under the E-Waste Rules 2022, and who buys them?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "C&D waste recycling",
            body: [
              "Construction and demolition waste is the heaviest stream in the city - concrete skeletons, brick bats, tiles, steel, timber, plaster and vast volumes of excavated soil. Official estimates begin around 25-30 million tonnes a year and true figures run far higher as construction booms; unmanaged, it buries scarce landfill airspace, chokes drains when dumped on roadsides, and suspends dust over whole neighbourhoods. The C&D Waste Management Rules 2016 assign responsibility: every large generator - above 20 tonnes a day or 300 tonnes per project - must submit a waste management plan and deliver to an authorised facility or process on-site.",
              "The recycling line is straightforward mining equipment applied to rubble. Waste arrives at a covered facility, where it is screened to remove timber, plastics and gypsum, then fed to jaw crushers and cones, magnet-separated for rebar steel, and graded by screens into recycled aggregate fractions. The products are proven: granular sub-base for roads, paver blocks, kerbstones, bricks and tiles, and - per IS 383 - recycled coarse aggregate blended up to a quarter into plain concrete. Excavated soil feeds brick and block making. Demand is the binding constraint, which is why public-works tenders that mandate recycled products are the policy that closes the loop.",
              "Delhi's Burari plant is the exam's case study: India's first C&D recycling facility, processing roughly 2,000 tonnes a day with sister plants taking the city's capacity past 4,500 tonnes daily. The circular economics are attractive - recycled aggregate sells well below virgin stone, at a fraction of the haul distance, and every tonne recycled is landfill airspace saved. Beyond plants, selective demolition - sequencing a teardown so concrete, steel and timber leave in separate streams - multiplies recovery, and on-site micro-crushers serve large projects without moving a truck across town.",
            ],
            bullets: [
              "C&D is the heaviest stream: at least 25-30 million tonnes a year, and a quarter of big-city landfill volume.",
              "Rules 2016 duty: generators above 20 T/day or 300 T/project must plan and deliver to authorised facilities.",
              "Processing line: screen, jaw-crush, magnet-separate, grade - recycled aggregate in multiple fractions.",
              "Products: sub-base, paver blocks, kerbs, and up to 25 per cent recycled coarse aggregate in plain concrete per IS 383.",
              "Case study: Delhi's Burari plant - about 2,000 TPD, city capacity past 4,500 TPD with sister plants.",
            ],
            table: {
              caption: "C&D fractions and their recycling products.",
              headers: ["Fraction", "Route", "Product"],
              rows: [
                ["Concrete and masonry", "Crush, magnet, screen", "Sub-base, pavers, recycled aggregate"],
                ["Steel and rebar", "Magnetic separation", "Scrap to steel mills"],
                ["Timber and formwork", "Manual sorting", "Reuse, boards, biomass"],
                ["Excavated soil", "Screen and stabilise", "Brick and block making"],
                ["Gypsum plaster", "Separated stream", "Gypsum recycling"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The C&D recycling line",
              caption:
                "From selective demolition to graded recycled aggregate - label each station in the exam sketch.",
              steps: [
                { label: "Demolition audit", note: "selective sequence, streams separated" },
                { label: "Segregated storage at site", note: "concrete, metal, timber apart" },
                { label: "Covered haul to facility", note: "no roadside dumping" },
                { label: "Crush, screen, magnet", note: "jaws then graded fractions" },
                { label: "Graded recycled aggregate", note: "sub-base, blocks, IS 383 blend" },
                { label: "Market via tenders", note: "public works mandate recycled products" },
              ],
            },
            callout: {
              type: "tip",
              title: "Quote Burari and IS 383",
              body: "Two references make a C&D answer look field-tested: the Burari plant with its 2,000-tonne-a-day scale, and IS 383 permitting up to 25 per cent recycled coarse aggregate in plain concrete. Add the 20-tonne generator threshold from the rules for a complete answer.",
            },
            keyTerms: [
              { term: "Recycled concrete aggregate", definition: "Crushed and graded concrete rubble reused as aggregate, permitted up to 25 per cent in plain concrete under IS 383." },
              { term: "Selective demolition", definition: "Sequenced teardown that separates concrete, steel and timber streams at source to maximise recovery." },
              { term: "C&D Waste Management Rules 2016", definition: "The rules obliging large generators to plan C&D waste and deliver it to authorised processing facilities." },
            ],
            examQuestions: [
              {
                q: "Explain the management of construction and demolition waste under the 2016 rules. Describe a C&D recycling facility, its products and the standards governing reuse, citing the Delhi experience.",
                marks: 7,
                outline: [
                  "Scale and problem: heaviest stream, landfill consumption, drain choking.",
                  "Rules 2016: plan and deliver duty for generators above 20 T/day or 300 T/project.",
                  "Facility line: screening, crushing, magnetic separation, grading.",
                  "Products: sub-base, paver blocks, kerbs, bricks.",
                  "IS 383: up to 25 per cent recycled coarse aggregate in plain concrete.",
                  "Delhi case: Burari about 2,000 TPD; city capacity past 4,500 TPD.",
                  "Enablers: tender mandates for recycled products; selective demolition.",
                ],
              },
              {
                q: "State the generator threshold that triggers the C&D waste management plan duty.",
                marks: 2,
              },
              {
                q: "List any three products made from recycled C&D material.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Plastic waste management",
            body: [
              "Plastic is the most visible stream and the most chemically varied. Society codes it one to seven: PET bottles, HDPE containers, PVC pipes and packaging, LDPE films, PP food tubs, PS foam and the catch-all seventh - and each resin behaves differently in recycling. India generates around 3.5 to 4 million tonnes of plastic waste a year, 6-10 per cent of municipal waste by mass. Thermoplastics melt and remould; thermosets and multilayer packaging (MLP) - the chips packet - fuse several polymers and foils and defeat mechanical recycling, which is why MLP is the stream the rules hunt.",
              "The Plastic Waste Management Rules, born in 2016 and rebuilt by the 2022 amendments, run on three pillars. First, EPR with plastic credits: producers, importers and brand owners register on the CPCB portal and meet collection targets by buying credits from registered recyclers. Second, thickness norms - carry bags must be at least 75 microns, stepping to 120 microns - because ultra-thin bags have no recycling economics. Third, the single-use plastic ban: from 1 July 2022, identified items - straws, stirrers, earbud sticks, plates, cutlery, decorative thermocol - were prohibited outright, chosen for their high litter value and low utility.",
              "Engineering the circularity is the third layer of the answer. Mechanical recycling runs baling, sorting by resin, washing, flaking and pelletising; outputs are strongest when mono-material streams stay clean, which returns to segregation. Downcycling absorbs the rest: waste plastic shredded into bitumen for roads at a few per cent substitution, boards, and co-processing as alternative fuel. Compostable plastics must meet standards and industrial composting conditions - dropping them in a home bin greenwashes rather than solves. The exam thread: resin diversity, credit-market EPR, the SUP list and dates, thickness norms, and honest treatment of MLP.",
            ],
            bullets: [
              "India generates about 3.5-4 million tonnes of plastic waste yearly - 6-10 per cent of MSW.",
              "Resin codes 1-7: PET, HDPE, PVC, LDPE, PP, PS and others - recyclability varies by resin.",
              "PWM Rules 2022: EPR with tradable plastic credits and rising collection targets on producers.",
              "Thickness norms: carry bags at least 75 microns, stepping to 120; SUP items banned from 1 July 2022.",
              "Multilayer packaging defeats mechanical recycling - the hardest fraction, targeted by EPR obligations.",
            ],
            table: {
              caption: "Resin codes and their recycling reality.",
              headers: ["Code", "Polymer", "Common product", "Recyclability"],
              rows: [
                ["1", "PET", "Bottles", "High - bottle-to-fibre loop"],
                ["2", "HDPE", "Rigid containers", "Good - pipes, crates"],
                ["3", "PVC", "Pipes, blister packs", "Poor - chlorine burden"],
                ["4", "LDPE", "Films and bags", "Moderate - if collected clean"],
                ["5", "PP", "Food tubs", "Good"],
                ["6", "PS", "Foam, cutlery", "Poor - banned as SUP"],
                ["7", "Other / MLP", "Multilayer pouches", "Very poor - co-processing route"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The plastic value loop",
              caption:
                "Six stations of circularity - the cycle the 2022 credit market is built to finance.",
              steps: [
                { label: "Design", note: "mono-material, less MLP" },
                { label: "Use", note: "reuse where possible" },
                { label: "Segregated dry collection", note: "keeps resin streams clean" },
                { label: "Sort by resin", note: "near-infrared or manual" },
                { label: "Wash and flake", note: "then pelletise" },
                { label: "New products", note: "close the loop, avoid downcycling" },
              ],
            },
            callout: {
              type: "exam",
              title: "Dates and microns are the short-question bank",
              body: "Single-use plastic ban: 1 July 2022. Carry-bag thickness: at least 75 microns, stepping to 120. EPR mechanism: plastic credits on the CPCB portal. These three facts answer half the plastic shorts ever set.",
            },
            keyTerms: [
              { term: "Single-use plastic", definition: "Identified high-litter, low-utility plastic items prohibited from 1 July 2022, including straws, cutlery and thermocol decor." },
              { term: "Plastic credit", definition: "The tradable EPR certificate generated by registered plastic recyclers and purchased by producers to meet targets." },
              { term: "Multilayer packaging", definition: "Pouches fusing several polymers and foils, defeating mechanical recycling and targeted by EPR obligations." },
            ],
            examQuestions: [
              {
                q: "Explain India's plastic waste management framework under the PWM Rules 2016 and 2022 amendments: EPR and credits, thickness norms, the single-use plastic ban and the treatment of multilayer packaging.",
                marks: 7,
                outline: [
                  "Scale: about 3.5-4 million tonnes a year; resin diversity as the core challenge.",
                  "EPR: producers register and meet rising collection targets.",
                  "Credit market: recyclers generate plastic credits, producers buy them.",
                  "Thickness norms: 75 micron minimum, stepping to 120 - why thickness matters economically.",
                  "SUP ban from 1 July 2022: list the banned categories.",
                  "MLP: why it defeats mechanical recycling; co-processing as the outlet.",
                  "Circularity loop: design, segregation, sorting, flaking, pellets - and honest limits of compostables.",
                ],
              },
              {
                q: "On which date were identified single-use plastic items banned in India? Name two such items.",
                marks: 2,
              },
              {
                q: "Why is multilayer packaging difficult to recycle mechanically? Give two reasons.",
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
      title: "Circular Economy and Future Directions",
      summary:
        "The systems layer: zero waste and circular economy thinking, waste-to-energy pathway selection, integration of the informal sector, the Indore and smart-waste case studies, and the PPP and financing models that make integrated waste management bankable.",
      chapter: {
        number: "05",
        title: "Circular Economy and Future Directions",
        intro:
          "Unit V lifts the lens from technologies to systems. It frames the circular economy and zero-waste goals, chooses among waste-to-energy pathways with honest feasibility gates, integrates the informal sector the rules mandate, extracts the transferable lessons of Indore and IoT-enabled smart waste, and closes with the PPP structures and financing instruments that fund the whole chain.",
        inOneBreath:
          "The circular economy replaces take-make-dispose with three principles - design out waste, keep materials in use at their highest value, and regenerate natural systems - tracked through the 9R ladder from refuse to recover, with zero waste defined as over 90 per cent diversion. Waste-to-energy chooses between biomethanation for segregated organics, RDF co-processing for dry fractions and mass burn only above the 7-8 MJ/kg gate, each with its own revenue stack of gate fees, power tariffs and carbon finance. The informal sector - over a million waste pickers recovering most of India's recyclables - must be integrated by rule through cooperatives like SWaCH Pune. Indore shows the whole system working: 100 per cent door-to-door collection and segregation, over 1,100 tonnes a day processed, legacy dumps bio-mined, seven straight Swachh Survekshan titles and IoT dashboards sustaining the gains - while PPP structures from service contracts to DBFOT and hybrid annuity, with tipping fees and EPR funds, make the economics bankable.",
        sections: [
          {
            number: "5.1",
            title: "Zero waste and the circular economy",
            body: [
              "The linear economy takes materials, makes products and dumps them - take, make, dispose. The circular economy closes the loop with three principles: design out waste and pollution, keep products and materials in use at their highest possible value, and regenerate natural systems. The Ellen MacArthur butterfly diagram splits the loops: technical cycles circulate products through reuse, repair, refurbishment, remanufacture and finally recycling, while biological cycles return organics safely to soil through composting and digestion. Value retention is the metric - each inner loop keeps more embedded energy and labour than the loop outside it.",
              "The 9R ladder makes the principles operational: refuse, rethink, reduce, reuse, repair, refurbish, remanufacture, repurpose, recycle - with energy recovery and disposal beneath as the tenth and eleventh fates. Zero waste is the ambitious application: the internationally used definition targets over 90 per cent diversion from landfill and incineration, pursued through city programmes - San Francisco's mandatory separation pushed diversion near 80 per cent, and Kamikatsu in Japan sorts household waste into dozens of categories to recycle about 80 per cent. Corporations adopt the same discipline through TRUE-type certifications that audit diversion streams.",
              "For India, circularity is policy as much as philosophy: NITI Aayog's strategy work set up sectoral committees - municipal waste among them - on resource efficiency and circular economy, aligned with SDG target 11.6 on municipal waste per capita and 12.5 on halving food waste and reducing waste through prevention and recycling by 2030. Tools include material flow analysis to find leakage, industrial symbiosis - the Kalundborg model where one plant's byproduct is another's feedstock - and business models such as product-as-service and take-back systems. The exam answer pairs the 9R ladder with one Indian example per rung.",
            ],
            bullets: [
              "Three circular principles: design out waste, keep materials at highest value, regenerate natural systems.",
              "The butterfly diagram: technical loops (reuse to recycle) and biological loops (compost, digestate).",
              "9R ladder: refuse, rethink, reduce, reuse, repair, refurbish, remanufacture, repurpose, recycle.",
              "Zero waste is defined as over 90 per cent diversion - Kamikatsu and San Francisco are the named cases.",
              "India anchors: NITI Aayog circular economy committees, SDG 11.6 and 12.5, industrial symbiosis at Kalundborg.",
            ],
            table: {
              caption: "Linear versus circular economy - the comparison frame.",
              headers: ["Aspect", "Linear economy", "Circular economy"],
              rows: [
                ["Material flow", "Take - make - dispose", "Take - make - use - return"],
                ["Value", "Destroyed at disposal", "Retained through loops"],
                ["Design goal", "Sell more units", "Durability, repair, disassembly"],
                ["Waste", "An externality", "A design failure"],
                ["Business model", "Ownership and volume", "Service, lease, take-back"],
                ["Metric", "Throughput", "Circularity rate and diversion"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The circular economy loop",
              caption:
                "Six stations of the closed loop - keep the loops tight and the value high.",
              steps: [
                { label: "Design", note: "design out waste, choose materials" },
                { label: "Produce and distribute", note: "cleaner processes, less packaging" },
                { label: "Use", note: "repair and reuse extend life" },
                { label: "Collect", note: "segregation makes loops possible" },
                { label: "Process", note: "remanufacture, recycle, compost" },
                { label: "Return", note: "materials re-enter production" },
              ],
            },
            callout: {
              type: "tip",
              title: "Structure circularity answers on the 9R ladder",
              body: "When asked how to achieve a circular economy, walk the 9R ladder top-down with one concrete example each - refuse straws, repair electronics, remanufacture cartridges - then close with the zero-waste 90 per cent diversion goal. The ladder is the skeleton that prevents a rambling answer.",
            },
            keyTerms: [
              { term: "Circular economy", definition: "An economic system that designs out waste, keeps products and materials in use at highest value, and regenerates natural systems." },
              { term: "Butterfly diagram", definition: "The Ellen MacArthur map of circular flows, separating technical cycles from biological nutrient cycles." },
              { term: "Zero waste", definition: "A target of over 90 per cent diversion of waste from landfill and incineration through reduction, reuse and recycling." },
            ],
            examQuestions: [
              {
                q: "Explain the concept of the circular economy with its principles and the 9R ladder. How do zero-waste goals and Indian policy initiatives apply these ideas to municipal waste?",
                marks: 7,
                outline: [
                  "Contrast linear take-make-dispose with the closed loop.",
                  "Principle 1: design out waste and pollution.",
                  "Principle 2: keep products and materials at highest value - the butterfly loops.",
                  "Principle 3: regenerate natural systems - compost and digestate.",
                  "Walk the 9R ladder with one example per rung.",
                  "Zero waste: over 90 per cent diversion; San Francisco and Kamikatsu.",
                  "India: NITI Aayog committees, SDG 11.6 and 12.5, segregation as the enabling policy.",
                ],
              },
              {
                q: "Define zero waste and state the diversion percentage it targets.",
                marks: 2,
              },
              {
                q: "Name any three Rs beyond the classic 3R, in correct order of preference.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Waste-to-energy: choosing the pathway",
            body: [
              "Waste-to-energy is a family, not a technology, and choosing the member is the engineering task. For segregated organics, biomethanation leads: about 60-100 cubic metres of biogas per tonne, at 55-70 per cent methane, plus marketable digestate. For dry, high-calorific fractions, RDF co-processing in cement kilns substitutes coal cleanly. Mass-burn incineration suits large, calorific streams - the feed gate is an as-fired value above about 7-8 MJ/kg, yielding roughly 500-650 kWh per tonne. Landfill gas capture sits last, recovering perhaps half the methane a dump generates. Each pathway has its feed, its gate and its revenue stack.",
              "Feasibility runs on three gates: quantity - mass-burn wants at least 300-500 tonnes per day for scale economics; quality - calorific value above the gate, moisture and chlorine controlled by segregation; and economics - a revenue stack of tipping or gate fees, power or biogas tariffs, RDF and compost sales, and climate finance. Capital costs for mass-burn run in the tens of crores per megawatt, and Indian tariffs for W2E power land well above solar, so every proposal must defend itself against the counterfactual - the same money spent on segregation, recycling and biological processing.",
              "The critique is part of the engineering. A 20-year waste-supply contract can lock a city into feeding the furnace, competing with recycling for the same dry fraction and dampening the incentive to reduce - which is why the hierarchy places energy recovery below recycling. Indian experience is cautionary: Delhi's cluster of plants and Jabalpur's RDF-based facility have fought mixed, wet, low-calorific feed all their lives, needing support fuel and subsidy; plants fed on properly segregated streams perform materially better. The honest exam answer: match the pathway to the stream - biogas the wet, co-process the dry, burn only what is left and genuinely calorific.",
            ],
            bullets: [
              "Biomethanation: 60-100 cubic metres of biogas per tonne of segregated organics - best for wet streams.",
              "RDF co-processing: cement-kiln coal substitution - the cleanest market for dry combustibles.",
              "Mass burn: feed gate 7-8 MJ/kg as fired; yields about 500-650 kWh per tonne; wants 300-500 TPD scale.",
              "Revenue stack: tipping fee, power or biogas tariff, RDF and compost sales, carbon or climate finance.",
              "Hierarchy discipline: energy recovery sits below recycling - never burn before recycling the stream.",
            ],
            table: {
              caption: "Waste-to-energy pathways compared.",
              headers: ["Pathway", "Best feed", "Yield", "Key constraint"],
              rows: [
                ["Biomethanation", "Segregated wet organics", "60-100 m3 biogas per tonne", "Feed purity; pH control"],
                ["RDF co-processing", "Dry high-CV fraction", "Coal substitution in kilns", "RDF quality and logistics"],
                ["Mass-burn incineration", "Mixed waste above 7-8 MJ/kg", "About 500-650 kWh per tonne", "Feed gate; capital scale"],
                ["Gasification / pyrolysis", "Sorted dry streams", "Syngas or fuel products", "Tar handling; feed prep"],
                ["Landfill gas capture", "Existing dumps", "Methane share of LFG", "Collection efficiency only"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "One tonne at the gate - which route claims it?",
              caption:
                "The routing decision that defines a city's W2E strategy - apply the gates, not the fashion.",
              start: "One tonne of municipal waste arrives",
              branches: [
                { label: "Segregated organics", outcome: "Biomethanation: 60-100 m3 biogas plus digestate - highest value from wet waste", good: true },
                { label: "Dry high-CV fraction", outcome: "RDF to cement kilns: coal displaced, no new stack in the city", good: true },
                { label: "Unsegregated mass burn", outcome: "Fails the 7-8 MJ/kg gate: support fuel, ash and emissions, fragile economics", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Recovery ranks below recycling",
              body: "The classic slip: presenting W2E as the best option. Energy recovery sits on the fourth tier of the hierarchy; a 7-mark answer must state that burning competes with recycling for dry feed and locks cities into supply contracts. Then defend each pathway by its feed gate.",
            },
            keyTerms: [
              { term: "Waste-to-energy", definition: "The family of technologies - digestion, RDF, combustion, gasification, LFG - that recover energy from waste that cannot be recycled." },
              { term: "Net calorific value", definition: "The usable heat content of waste as fired, the gate parameter - about 7-8 MJ/kg minimum for mass burn." },
              { term: "Co-processing", definition: "Use of waste-derived fuel in industrial furnaces such as cement kilns, substituting coal while destroying organics." },
            ],
            examQuestions: [
              {
                q: "Compare the waste-to-energy pathways - biomethanation, RDF, incineration and landfill gas - with their feed requirements, yields and constraints. Why have Indian mass-burn plants struggled?",
                marks: 7,
                outline: [
                  "Frame W2E as a family on the recovery tier of the hierarchy.",
                  "Biomethanation: segregated organics, 60-100 m3 biogas per tonne, digestate.",
                  "RDF: dry fraction to cement kilns, coal substitution, quality demands.",
                  "Mass burn: 7-8 MJ/kg feed gate, 500-650 kWh per tonne, 300-500 TPD scale.",
                  "Landfill gas: capture from existing dumps, efficiency limits.",
                  "Indian struggles: mixed wet waste at 3.5-7 MJ/kg fails the gate; support fuel and tariffs.",
                  "Conclusion: match pathway to stream; segregate before you burn.",
                ],
              },
              {
                q: "Where does waste-to-energy sit in the waste hierarchy, and why below recycling?",
                marks: 2,
              },
              {
                q: "Why is biomethanation usually the best energy route for Indian wet waste? Give two reasons.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "The informal sector and integration models",
            body: [
              "Before every formal system, the informal one was already recycling. India's waste pickers - well over a million people by most estimates - retrieve paper, plastic, metal and glass from bins, dumps and doorsteps, and pass them up a ladder of itinerant buyers, small scrap dealers and master dealers to industry. By recovering recyclables at essentially zero municipal cost, they subsidise every city's diversion rate; studies credit the informal chain with the bulk of India's material recovery. The workforce is disproportionately migrant and marginalised, women dominate the sorting lines, and the occupational toll is heavy: cuts and infections, toxic exposures, and piece-rate incomes without protection.",
              "SWM Rules 2016 turned this reality into a duty: local bodies shall integrate informal waste pickers and kabadiwalas into segregation, collection and processing - through SHGs and cooperatives, with identity cards and access to waste. The flagship model is Pune's SWaCH: a wholly worker-owned cooperative of thousands of waste pickers that collects door-to-door for lakhs of households, funded by user fees and material sales - proof that inclusion is a service model, not charity. Bengaluru's Hasiru Dala organises pickers for authorised collection and event-waste services; other cities issue ID cards, PPE, insurance and dedicated space in dhalas and material recovery facilities.",
              "The open questions are structural. PPP concessions that hand a private operator exclusive rights to waste can strip pickers of their raw material overnight - tenders must carve out the informal chain's streams or hire it. Mechanised sorting lines displace hand-sorting jobs unless transitions are planned. EPR funds - plastic credits, e-waste obligations - are the new, deep pool that can finance buy-back centres, safety equipment and social protection for the sector, if rules direct the money there. In any integration answer, cite SWaCH's numbers and the 2016 duty: recognition plus livelihoods plus higher recycling, all three at once.",
            ],
            bullets: [
              "Over a million waste pickers recover the majority of India's recyclables at zero municipal collection cost.",
              "The chain runs pickers to itinerant buyers to small dealers to master dealers to industry - each adding aggregation.",
              "SWM Rules 2016 duty: integrate pickers, kabadiwalas and SHGs into the formal system with IDs and access.",
              "SWaCH Pune: worker-owned cooperative serving lakhs of households - the flagship integration model.",
              "Risks: exclusive PPP concessions stripping access; mechanisation displacing sorters - EPR funds can finance just transition.",
            ],
            table: {
              caption: "Integration mechanisms and what each delivers.",
              headers: ["Mechanism", "What it does", "Example"],
              rows: [
                ["Worker cooperative", "Pickers own the collection service", "SWaCH, Pune"],
                ["Identity and registration", "Legal recognition, social schemes access", "City-wise ID drives"],
                ["Dedicated space in dhalas/MRFs", "Sheltered, safer sorting", "MRF integration clauses"],
                ["Authorised collection contracts", "Pickers deliver formal services", "Hasiru Dala, Bengaluru"],
                ["EPR-funded buy-back centres", "Fair prices, protective gear", "Plastic credit financing"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Exclusion versus integration",
              caption:
                "Two ways to treat the same workforce - the outcomes diverge on every axis.",
              left: {
                heading: "Exclusion model",
                items: [
                  "No ID or legal standing",
                  "Locked out of waste streams by PPPs",
                  "Middlemen capture the value",
                  "Unsafe work, no protection",
                  "City loses recycling capacity",
                ],
              },
              right: {
                heading: "Integration model",
                items: [
                  "Rules 2016 mandate recognition",
                  "Cooperatives hold service contracts",
                  "Direct access raises realisation",
                  "PPE, insurance, creches, training",
                  "Recycling rate and livelihoods rise together",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Cite SWaCH with numbers",
              body: "Any question on the informal sector earns its top band by citing one model concretely: SWaCH Pune, a worker-owned cooperative of thousands of pickers collecting door-to-door for lakhs of households on user fees. Add the 2016 integration duty and the EPR-financing idea, and the answer is complete.",
            },
            keyTerms: [
              { term: "Waste picker", definition: "A person who retrieves recyclables from waste streams for livelihood, recognised for integration by SWM Rules 2016." },
              { term: "Self-help group", definition: "A collective, often of women, through which municipalities contract waste work and extend social protection." },
              { term: "SWaCH model", definition: "Pune's wholly worker-owned cooperative of waste pickers delivering door-to-door collection - the flagship integration case." },
            ],
            examQuestions: [
              {
                q: "Discuss the role of the informal sector in Indian waste management and the mechanisms for its integration under SWM Rules 2016. Illustrate with the SWaCH Pune model.",
                marks: 7,
                outline: [
                  "Scale: over a million pickers recovering most recyclables at zero municipal cost.",
                  "The chain: pickers, itinerant buyers, small dealers, master dealers, industry.",
                  "Occupational hazards and the gender profile of sorting work.",
                  "The 2016 duty: integration through SHGs and cooperatives with IDs and access.",
                  "SWaCH Pune: worker-owned cooperative, lakhs of households, user-fee funded.",
                  "Risks: exclusive PPPs stripping access; mechanisation displacing sorters.",
                  "Forward path: EPR funds and tenders that reserve streams for the informal chain.",
                ],
              },
              {
                q: "Who is a waste picker, as recognised by SWM Rules 2016?",
                marks: 2,
              },
              {
                q: "How can a PPP concession harm the informal sector? Give two mechanisms.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Case study: Indore and smart waste systems",
            body: [
              "Indore is the exam's modern case study - a complete system turnaround. The trigger was crisis: in 2016, protests shut the Devguradiya trenching ground and forced the city to rebuild from the bin up. The Indore Municipal Corporation mapped every ward, set up mohalla committees, and moved to 100 per cent door-to-door collection with over 900 GPS-tracked vehicles and 100 per cent source segregation enforced through household flag ratings and spot fines. A city of about three million generating over 1,100 tonnes a day now runs a processing chain of composting, biomethanation and RDF for rejects - and the legacy dump itself was bio-mined, its lakhs of tonnes of old waste trommel-screened and the land reclaimed.",
              "The results stacked up as records: seven consecutive Swachh Survekshan titles as India's cleanest city, from 2017 through 2023. What makes Indore teachable is the mix: behavioural instruments (flags, mohalla meetings, night sweeping teams, a carry-bag ban), financial instruments (a user-fee model that funds operations), institutional continuity (leadership that survived election cycles), and hard infrastructure (transfer dhalas, processing plants, a remediated dumpsite). Technology was the amplifier, not the hero - GPS dashboards, QR-code feedback on collection vehicles, the Indore 311 complaint app, and mechanical road sweepers sustained what behaviour change had started.",
              "The smart-waste layer generalises. Fill-level sensors - ultrasonic units reporting fill percentage, temperature and tilt - let collection run on demand instead of fixed routes, cutting fleet kilometres and overflow events by double-digit percentages; fleets stream telemetry over low-power networks such as LoRaWAN or NB-IoT to route-optimisation dashboards; bins and vehicles carry RFID for traceability; and analytics flag chronic overflow spots for structural fixes. The honest limits are maintenance, sensor batteries and their own e-waste - and the Indore lesson stands: sensors on top of a working system add value; sensors on a broken one merely report the overflow in real time.",
            ],
            bullets: [
              "Trigger: the 2016 Devguradiya dump crisis forced a full system rebuild in Indore.",
              "System: 100 per cent door-to-door collection with 900+ GPS-tracked vehicles and 100 per cent segregation.",
              "Scale: about 3 million people, over 1,100 tonnes a day - composting, biomethanation and RDF chain.",
              "Legacy solved: the old dump bio-mined by trommel screening, land reclaimed.",
              "Smart layer: fill sensors, LoRaWAN or NB-IoT telemetry, RFID, dashboards - sustaining, not substituting, the system.",
            ],
            codeExample: {
              language: "text",
              caption: "A fill-level sensor payload on its way to the city dashboard.",
              code: `// Ultrasonic fill-level sensor -> MQTT -> routing dashboard
{
  "bin_id": "IN-IND-0442",
  "zone": "Vijay Nagar",
  "fill_pct": 87,
  "temperature_c": 34,
  "battery_pct": 72,
  "tilt": false,
  "ts": "2025-06-11T08:40:00+05:30"
}

// Dashboard rule: fill_pct >= 80 -> add bin to tomorrow's route;
// fill_pct < 20 for 3 days -> drop the stop and save the kilometres.
`,
            },
            diagram: {
              kind: "flow",
              title: "The Indore turnaround sequence",
              caption:
                "Six moves from crisis to seven straight titles - the order matters as much as the actions.",
              steps: [
                { label: "Crisis, 2016", note: "Devguradiya dump protests shut disposal" },
                { label: "Ward mapping and mobilisation", note: "mohalla committees, baseline surveys" },
                { label: "100% DD collection + segregation", note: "900+ vehicles, flags and fines" },
                { label: "Processing build-out", note: "compost, biomethanation, RDF" },
                { label: "Legacy dump bio-mined", note: "trommels reclaim the land" },
                { label: "Sustain with tech and fees", note: "GPS, 311 app, user fee - 7 titles" },
              ],
            },
            callout: {
              type: "exam",
              title: "Numbers make the case study",
              body: "Indore answers live on specifics: 1,100-plus tonnes a day, 900-plus tracked vehicles, 100 per cent door-to-door and segregation, lakhs of tonnes of legacy waste bio-mined, seven consecutive Swachh Survekshan titles 2017-2023. Quote at least four figures and name the sequence - crisis, collection, segregation, processing, remediation.",
            },
            keyTerms: [
              { term: "Swachh Survekshan", definition: "The national annual cleanliness survey in which Indore secured seven consecutive first places from 2017 to 2023." },
              { term: "Bio-mining of legacy waste", definition: "Excavating and trommel-screening old dump waste to recover soil, RDF and recyclables, reclaiming the land." },
              { term: "Fill-level sensor", definition: "An ultrasonic or optical IoT device reporting bin fill percentage to trigger demand-based collection." },
            ],
            examQuestions: [
              {
                q: "Present the Indore integrated waste management case study: the crisis, the interventions across collection, segregation, processing and legacy-waste remediation, and the results with figures. How did technology sustain the gains?",
                marks: 7,
                outline: [
                  "Setting: about 3 million people, over 1,100 tonnes a day.",
                  "Trigger: 2016 Devguradiya dump protests.",
                  "Collection: 100 per cent door-to-door, 900+ GPS-tracked vehicles.",
                  "Segregation: 100 per cent, via flags, mohalla committees and fines.",
                  "Processing: composting, biomethanation, RDF for rejects.",
                  "Legacy: dump bio-mined with trommels; land reclaimed.",
                  "Results and tech: seven straight titles, user fees, 311 app, dashboards.",
                ],
              },
              {
                q: "What is Swachh Survekshan, and how many consecutive titles has Indore won?",
                marks: 2,
              },
              {
                q: "Explain bio-mining of legacy waste and name the key equipment used.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "PPP models and financing",
            body: [
              "Why private participation: urban local bodies face thin own-revenue, overstretched staff and capital-hungry facilities, while the private sector brings finance, fleet and process discipline. The spectrum runs from light to deep. Service contracts buy a task - a collection route for one to three years. Management contracts hand over operations of an asset the city keeps. DBOT and DBFOT concessions - design-build-(finance)-operate-transfer - have the operator build and run a facility for 15-25 years on performance payments, then hand it back. BOO structures leave the asset with the operator; hybrid annuity models (HAM) split funding so government pays a capex share and the balance as indexed annuities, capping the operator's demand risk.",
              "Structuring is risk allocation. The waste-specific risks are demand risk - will the promised tonnage arrive, and at what calorific value; site risk - land handover and clearances; construction risk; offtake risk - who buys the compost, RDF or power, at what price; and payment risk - municipal arrears that starve operators. Payment mechanisms discipline the bargain: tipping or gate fees per tonne, availability and performance payments with deductions for missed KPIs - coverage, segregation quality, processed tonnage - and revenue rights over compost, RDF, biogas and recyclables. Independent engineers audit; escrow accounts protect; exit and step-in clauses pre-agree failure paths.",
              "Indian experience writes the warnings and the enablers. The warnings: mixed-waste supply starved several W2E and compost plants below design assumptions; payment delays broke others; tenders that ignored the informal sector caused social friction. The enablers: SBM-Urban 2.0 and Finance Commission grants fund capex gaps; viability gap funding sweetens concessions; the City Compost Policy offers market development assistance of Rs 1,500 per tonne to move compost; and EPR regimes now channel producer money - plastic and e-waste credits - into the system. The exam answer: name the models, draw the risk matrix, cite one success and one failure, and end with the payment stack.",
            ],
            bullets: [
              "The PPP ladder: service contract, management contract, DBOT/DBFOT, BOO, hybrid annuity - increasing private exposure.",
              "HAM: government funds a capex share, balance as indexed annuities - demand risk capped for the operator.",
              "Risk matrix: demand (tonnage and CV), site, construction, offtake price, municipal payment delay.",
              "Payment stack: tipping fee per tonne, performance-linked O&M payments, product revenues (compost, RDF, power).",
              "Enablers: SBM-U 2.0 grants, VGF, City Compost Policy assistance of Rs 1,500 per tonne, EPR credit money.",
            ],
            table: {
              caption: "PPP models for the waste sector at a glance.",
              headers: ["Model", "Scope with operator", "Typical term", "Payment basis"],
              rows: [
                ["Service contract", "One task, e.g. a collection route", "1-3 years", "Per tonne or per km"],
                ["Management contract", "Operate city assets and crews", "3-10 years", "Fixed plus performance fee"],
                ["DBOT / DBFOT", "Build, finance, operate, transfer", "15-25 years", "Tipping fee plus performance"],
                ["BOO", "Own and operate the facility", "Concession life", "Gate fee plus product sales"],
                ["Hybrid annuity (HAM)", "Build and operate, annuity-paid", "15+ years", "Annuity plus O&M payments"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the PPP model",
              caption:
                "Place each model by the private party's capital exposure against the risk transferred to it.",
              axes: { x: "Private capital exposure (low to high)", y: "Risk transferred to private party (low to high)" },
              quadrants: [
                { label: "Service contract", note: "task-wise, city keeps assets and demand risk" },
                { label: "BOO / merchant concession", note: "operator owns assets and carries market risk" },
                { label: "Management contract", note: "operations risk transfers, no capex" },
                { label: "Hybrid annuity model", note: "private builds and runs, annuity caps demand risk" },
              ],
            },
            callout: {
              type: "tip",
              title: "Risk allocation is the scoring skeleton",
              body: "PPP answers score on the risk matrix, not the definitions alone. Draw the risk list - demand, site, construction, offtake, payment - and assign each to city or operator, then show how the payment stack and escrow enforce it. Close with one Indian example of each outcome.",
            },
            keyTerms: [
              { term: "DBFOT", definition: "Design-build-finance-operate-transfer concession in which a private operator builds and runs a facility for its term, then transfers it to the city." },
              { term: "Tipping fee", definition: "The per-tonne gate fee paid to a processing or disposal facility for accepting waste." },
              { term: "Hybrid annuity model", definition: "A PPP where government funds part of the capital cost and pays the balance as performance-protected annuities, capping operator demand risk." },
            ],
            examQuestions: [
              {
                q: "Explain the PPP models applicable to solid waste management with their risk allocation and payment mechanisms. What financing instruments and Indian experiences have shaped the sector?",
                marks: 7,
                outline: [
                  "Rationale: ULB fiscal and capacity gaps; private finance and discipline.",
                  "The ladder: service contract, management contract, DBOT/DBFOT, BOO, HAM.",
                  "Risk matrix: demand (tonnage and CV), site, construction, offtake, payment delay.",
                  "Payments: tipping fee, performance-linked deductions, product revenue rights.",
                  "Safeguards: independent engineer, escrow, step-in and exit clauses.",
                  "Indian lessons: mixed-feed failures; SBM-U 2.0, VGF, compost MDA of Rs 1,500 per tonne.",
                  "EPR finance: plastic and e-waste credits as new revenue streams.",
                ],
              },
              {
                q: "Define tipping fee in waste concessions.",
                marks: 2,
              },
              {
                q: "How does the hybrid annuity model reduce demand risk for a private operator? Give two features.",
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
      heading: "Exam weightage - where to spend the hours",
      body: [
        "RGPV CE-703(C) papers spread marks across the regulatory frame of Unit I, the systems of Unit II, the technology bench of Unit III - which carries the heaviest load - and the special streams of Unit IV, with Unit V supplying case-study and concept questions. Allocate revision roughly by the weights below and keep one fully worked answer ready for each starred topic.",
      ],
      weightedTopics: [
        { topic: "Waste hierarchy, 3R and integrated waste management", weight: "6-10 marks", note: "Nearly every paper opens with it; draw the pyramid with arrows and one example per tier." },
        { topic: "SWM Rules 2016: duties, segregation, user fees", weight: "8-12 marks", note: "Generator and ULB duty lists are direct questions; memorise the six-rule family of 2016." },
        { topic: "Waste characterization: physical and chemical parameters", weight: "6-10 marks", note: "Carry the Indian MSW table (moisture, density, C/N, calorific value) into the hall - it anchors numericals." },
        { topic: "Collection, transfer stations and routing", weight: "6-8 marks", note: "Two-stage collection, the 15-20 km break-even and routing heuristics; one 7-marker or two shorts." },
        { topic: "Composting: windrow, in-vessel, vermi", weight: "10-14 marks", note: "The guaranteed 7-marker: temperature curve, C/N 25-30, moisture 50-60 per cent, Indore and Bangalore methods." },
        { topic: "Biomethanation: four stages and operating windows", weight: "8-12 marks", note: "Label the digestion cycle and quote pH 6.8-7.4, the temperature regimes and biogas composition." },
        { topic: "RDF, incineration and W2E feasibility", weight: "10-14 marks", note: "850 deg C for 2 seconds, the 7-8 MJ/kg feed gate, the emission train, and why Indian mixed waste struggles." },
        { topic: "Sanitary landfill: liner design, leachate, LFG", weight: "10-14 marks", note: "The cross-section sketch plus the five stabilisation phases; a labelled drawing is half the marks." },
        { topic: "TSDF, biomedical categories, e-waste EPR", weight: "8-12 marks", note: "Yellow/Red/White/Blue table, manifest cradle-to-grave, EPR credits - short-question gold." },
        { topic: "Circular economy, informal sector, Indore, PPP", weight: "6-10 marks", note: "Indore's numbers and the PPP risk matrix carry the Unit V answer; SWaCH Pune anchors inclusion." },
      ],
    },
    {
      id: "six-weeks",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week at two hours a day, the schedule covers every section twice - once for understanding, once for active recall - and reserves the final week for full papers, redrawn diagrams and the number stack.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - hierarchy and rules", tasks: ["Draw the waste hierarchy pyramid and write one example per tier from memory", "Tabulate the five waste streams against their 2016 rules and duties", "Memorise the generator and ULB duty lists under SWM Rules 2016"] },
        { week: "Week 2", focus: "Unit II - the municipal chain", tasks: ["Work through the generation-projection python logic by hand for a sample city", "Copy the Indian MSW parameter table twice; quiz yourself on units", "Trace the two-stage collection chain and the transfer-station break-even arithmetic"] },
        { week: "Week 3", focus: "Unit III part 1 - biology", tasks: ["Draw the composting temperature-time curve with all phases labelled", "Solve one C/N blending numerical warm-handed", "Redraw the four-stage anaerobic digestion cycle with substrates and products"] },
        { week: "Week 4", focus: "Unit III part 2 - thermal and landfill", tasks: ["Sketch the incineration line with the full emission train and the 850 deg C / 2 s rule", "Write the pyrolysis-versus-gasification comparison as a six-row table", "Reproduce the landfill cross-section with liner dimensions and the five stabilisation phases"] },
        { week: "Week 5", focus: "Unit IV - special streams", tasks: ["Recite the biomedical colour table and the 48-hour and 75 km rules", "List the e-waste toxic five with component sources, and the 2022 EPR credit idea", "Write the C&D and plastic answers with Burari, IS 383, the 75-micron norm and the SUP ban date"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Walk the 9R ladder and the W2E fork diagram from memory", "Write the Indore case with five figures and the PPP risk matrix", "Attempt two full papers under exam timing; review the slips list the same evening"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours",
      bullets: [
        "Redraw from memory: the waste hierarchy pyramid, the digestion cycle, the composting temperature curve, the incineration line with its emission train, the landfill cross-section and the biomedical colour table.",
        "Recite the number stack: C/N 25-30; moisture 50-60 per cent; thermophilic 55-65 deg C; pH 6.8-7.4; biogas 55-70 per cent methane; 850 deg C for 2 seconds; feed gate 7-8 MJ/kg; carry bags 75 micron; SUP ban 1 July 2022; post-closure care 15 years.",
        "Re-solve one C/N blend and one biogas or LFG estimate warm-handed - numericals reward warm hands.",
        "Recite the rule-year pairs: SWM, BMW, E-Waste, C&D, Plastic and Hazardous rules all 2016; e-waste replaced 2022, plastics amended 2022.",
        "Skim every section's keyTerms and callouts - together they are the short-question bank of the paper.",
        "Sleep. A rested 7-mark answer with a clean diagram beats a tired perfect one; in the morning review only the slips list below.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Open every answer with the one-line definition and the governing rule - the rule citation (SWM 2016, BMW 2016, PWM 2022) earns independent marks before any description.",
        "Draw before you write: hierarchy pyramid, digestion cycle, incineration line, landfill section. A labelled sketch rescues a weak paragraph and collects method marks.",
        "Justify technology choices with the Indian characterization numbers - moisture 40-60 per cent, calorific value 3.5-7 MJ/kg, organics 40-60 per cent - engineering judgment is what distinguishes the top band.",
        "Structure compare questions as tables: pyrolysis versus gasification, mesophilic versus thermophilic, formal versus informal recycling - two columns, five rows, done.",
        "Time-box: shorts in five minutes, 7-markers in fifteen; close each long answer with a two-line conclusion that names the rule or the case study - it is the last thing the examiner reads.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Writing burning for gasification - it is partial oxidation with sub-stoichiometric air; and calling pyrolysis combustion - no oxygen is present at all.",
        "Quoting European calorific values for Indian waste - Indian MSW runs 3.5-7 MJ/kg as fired, below the 7-8 MJ/kg mass-burn gate; mass burn needs support fuel or RDF.",
        "Inverting the waste hierarchy or placing energy recovery above recycling - the order is prevent, reuse, recycle, recover, dispose.",
        "Mixing up biomedical colours - sharps are white (puncture-proof boxes), blue is glassware and implants; and forgetting the 48-hour storage limit.",
        "Omitting units in numericals - biogas in cubic metres per tonne, calorific value in MJ/kg (multiply kcal/kg by about 4.187 for kJ/kg), density in kg per cubic metre.",
        "Calling an open dump a sanitary landfill - liners, daily cover, leachate collection and gas management must all appear, plus about 15 years of post-closure care.",
      ],
    },
  ],
};
