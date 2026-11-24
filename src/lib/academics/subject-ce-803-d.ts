/**
 * Academics - RGPV Civil Engineering 8th-semester subject: CE-803(D)
 * Integrated Water Management.
 *
 * Structure mirrors other authored subjects: units -> one chapter per unit ->
 * numbered sections. Each section carries 3 body paragraphs (~100 words
 * each), 5 bullets, a diagram, a callout, 3 key terms, 3 exam questions
 * (one 7-mark with outline plus two shorts), and a practical element (a
 * python code sample or a table). Python code samples are written as a
 * single template-literal string per the authoring rules.
 */

import type { AcademicSubject } from "./types";

export const ce803d: AcademicSubject = {
  id: "ce-803-d",
  code: "CE-803(D)",
  title: "Integrated Water Management",
  semester: "VIII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to integrated water management for civil engineers: water resources and IWRM, urban-rural water supply, wastewater treatment and reuse, stormwater and flood management, and groundwater-watershed-rainwater harvesting for a climate-resilient future.",
  description:
    "Five units walk from the water resources of India and the Dublin-IWRM framework through urban-rural water supply, source development and conventional-advanced treatment, into sewerage, primary-secondary-tertiary treatment and reuse, then across stormwater drainage, BMPs and structural-non-structural flood management with sponge-city concepts, and finally into groundwater, managed aquifer recharge, watershed conservation, rainwater harvesting with Neeru-Meeru, Karnataka and Rajasthan case studies, and the desalination-water-energy-climate frontier. Every section pairs the formal method with a worked example, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#0ea5e9",
  emoji: "IW",
  unitCount: 5,
  totalSections: 25,
  units: [
    // ============== UNIT I - WATER RESOURCES AND INTEGRATED MANAGEMENT ==============
    {
      number: 1,
      roman: "I",
      title: "Water Resources and Integrated Management",
      summary:
        "The foundation of the subject: the water resources of India and their skewed distribution, the IWRM framework and its enabling principles, the four Dublin Principles that govern water as a resource, river basin management as the operational unit, and the governance regime anchored in the National Water Policy 2012.",
      chapter: {
        number: "01",
        title: "Water Resources and Integrated Management",
        intro:
          "Unit I builds the vocabulary every later unit borrows: the water balance of India across surface and groundwater, the IWRM framework that integrates land, water and institutions, the four Dublin Principles that redefined water as a finite economic good, river basin management as the natural planning unit, and the governance stack of policies, laws and the National Water Policy 2012.",
        inOneBreath:
          "India receives about 4,000 bcm of rainfall yet only 1,123 bcm is utilizable; per-capita availability has fallen below the water-stress threshold of 1,700 cubic metres; IWRM integrates land and water development across sectors under the Dublin Principles - fresh water is finite, water development should be participatory, women play a central role, and water has an economic value; the river basin is the planning unit; and the National Water Policy 2012 anchors governance with prioritisation of drinking water, ecological flows, and integrated basin-level planning.",
        sections: [
          {
            number: "1.1",
            title: "Water resources of India",
            body: [
              "India receives an average annual rainfall of about 1,170 mm, yielding a total water resource of roughly 4,000 billion cubic metres when both surface and groundwater components are combined. Of this, only about 1,123 bcm is the utilizable portion, partitioned into 690 bcm of surface water and 433 bcm of replenishable groundwater. The spatial and temporal distribution is highly skewed: nearly 75 per cent of the annual rainfall arrives during the southwest monsoon from June to September, and a handful of basins such as the Ganga, Brahmaputra and Meghna carry the bulk of the runoff.",
              "The country is organised into 22 major river basins, of which the Ganga, Indus, Brahmaputra, Godavari, Krishna and Cauvery are the largest by catchment. Per-capita water availability has fallen from 5,177 cubic metres in 1951 to about 1,486 cubic metres in 2021, placing India firmly in the water-stressed category defined by the Falkenmark indicator of 1,700 cubic metres per person per year. Interstate disputes such as the Cauvery and Krishna conflicts underscore the political salience of basin-level allocation, while climate change shifts snowmelt and rainfall patterns in Himalayan and peninsular basins.",
              "Groundwater underwrites more than 60 per cent of irrigated area and 85 per cent of rural drinking water supply, but extraction has outstripped recharge in Punjab, Haryana, Rajasthan and western Uttar Pradesh, with many blocks falling in the over-exploited category. The Central Ground Water Board monitors about 6,500 assessment units, and the 2022 assessment classified roughly 14 per cent as over-exploited and 4 per cent as critical. Integrated water management therefore starts with a basin-level water balance that accounts for rainfall, evaporation, runoff, infiltration, baseflow and human abstractions - the foundation on which all later units build.",
            ],
            bullets: [
              "Total rainfall resource is about 4,000 bcm; only 1,123 bcm is utilizable (690 surface + 433 groundwater).",
              "Per-capita availability fell from 5,177 to about 1,486 cubic metres, below the 1,700 water-stress threshold.",
              "22 major basins; Ganga, Brahmaputra, Godavari, Krishna, Indus and Cauvery carry the bulk of runoff.",
              "About 75 per cent of rainfall arrives in the southwest monsoon from June to September.",
              "Groundwater feeds 60 per cent of irrigation and 85 per cent of rural drinking water; 14 per cent of blocks are over-exploited.",
              "Falkenmark indicator: a per-capita availability below 1,700 cubic metres per year signals water stress.",
            ],
            table: {
              caption: "Basin-wise water availability of India (indicative).",
              headers: ["Basin", "Catchment (sq km)", "Annual flow (bcm)", "Utilizable (bcm)"],
              rows: [
                ["Ganga", "8,61,452", "525", "250"],
                ["Godavari", "3,12,812", "110", "76"],
                ["Brahmaputra", "1,86,980", "537", "24"],
                ["Krishna", "2,58,948", "78", "58"],
                ["Cauvery", "81,155", "21", "19"],
                ["All India", "32,87,263", "1,869", "690 + 433"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From rainfall to utilizable water - the basin balance",
              caption:
                "Each arrow loses or partitions water; integrated management targets the leaky stages first.",
              steps: [
                { label: "Rainfall 4,000 bcm", note: "1,170 mm average over 3.29 million sq km" },
                { label: "Evaporation + infiltration", note: "about 2,130 bcm leaves surface system" },
                { label: "Surface runoff 1,869 bcm", note: "carried by 22 major basins" },
                { label: "Utilizable surface 690 bcm", note: "limited by storage and diversion" },
                { label: "Utilizable groundwater 433 bcm", note: "replenishable, 14 per cent over-exploited" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the numbers examiners want",
              body: "RGPV answer scripts reward the headline figures: 4,000 bcm total rainfall, 1,123 bcm utilizable, 1,170 mm mean rainfall, and the Falkenmark threshold of 1,700 cubic metres. Memorise these four and the 22-basin count - they are the spine of almost every water-resources answer.",
            },
            keyTerms: [
              { term: "Falkenmark indicator", definition: "Per-capita water availability threshold; below 1,700 cubic metres per year signals water stress." },
              { term: "Utilizable water", definition: "The portion of total water that can be economically diverted for beneficial use after losses." },
              { term: "River basin", definition: "The drainage area of a river and its tributaries, treated as the natural unit for water planning." },
              { term: "Over-exploited block", definition: "A groundwater assessment unit where annual extraction exceeds net recharge." },
            ],
            examQuestions: [
              {
                q: "Discuss the water resources of India with reference to rainfall distribution, basin-wise availability, utilizable potential, per-capita availability and the present water-stress status. Support your answer with relevant data.",
                marks: 7,
                outline: [
                  "State total rainfall (about 4,000 bcm), average (1,170 mm), and utilizable split (690 surface + 433 groundwater).",
                  "Explain skewed distribution: 75 per cent in southwest monsoon; Ganga-Brahmaputra basins carry bulk of runoff.",
                  "List the 22 major basins; name the six largest with catchment areas.",
                  "Give per-capita trend: 5,177 cubic metres (1951) to about 1,486 (2021).",
                  "Apply Falkenmark threshold of 1,700 to conclude India is water-stressed.",
                  "Cite groundwater status: 14 per cent blocks over-exploited, especially Punjab, Haryana, Rajasthan.",
                  "Close with the implication: integrated basin-level planning is mandatory, not optional.",
                ],
              },
              {
                q: "Define the Falkenmark water stress indicator and state the threshold values.",
                marks: 2,
              },
              {
                q: "Name any five major river basins of India and one interstate dispute.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Integrated Water Resource Management (IWRM): principles",
            body: [
              "Integrated Water Resource Management, abbreviated IWRM, is a process that promotes the coordinated development and management of water, land and related resources in order to maximise the resultant economic and social welfare in an equitable manner without compromising the sustainability of vital ecosystems. The definition, codified by the Global Water Partnership, deliberately balances three competing goals - economic efficiency, social equity and ecological sustainability - and treats them as the three legs of one stool: weaken any leg and the structure collapses.",
              "The three legs translate into operational principles. Economic efficiency means water is allocated to its highest-value use, with prices that reflect scarcity and opportunity cost. Social equity means universal access for drinking, sanitation and livelihoods, with particular attention to the poor and the tail-end farmer. Ecological sustainability means that the allocations protect environmental flows, water quality, wetlands and the entire hydrological cycle. The enabling environment for IWRM rests on three pillars: an enabling policy framework, an institutional framework that coordinates across sectors, and a management framework built on data, plans and stakeholder participation.",
              "In India, IWRM implementation surfaces through the National Water Mission, the Namami Gange programme, and basin-level organisations such as the Brahmaputra Board and the Cauvery Management Board. Practical instruments include participatory irrigation management through water user associations, demand-side management through metering and tariff reform, supply augmentation through watershed works, and ecosystem protection through e-flow notification. The challenge remains institutional: water is a state subject under the Constitution, while rivers cross state boundaries, so true integration requires both vertical centre-state coordination and horizontal inter-ministerial coordination.",
            ],
            bullets: [
              "IWRM definition: coordinated development of water, land and related resources for equitable welfare without compromising ecosystems.",
              "Three Es: economic efficiency, social equity, ecological sustainability - the three legs of the stool.",
              "Three pillars: enabling policy, institutional framework, management instruments (data, plans, participation).",
              "Indian instruments: National Water Mission, Namami Gange, water user associations, e-flow notification.",
              "Water is a State subject in India; rivers cross states - integration needs vertical and horizontal coordination.",
              "Demand-side management: metering, tariff reform, water-efficient fixtures, leakage control.",
            ],
            codeExample: {
              language: "python",
              caption: "Score a water-use plan against the three E-principles of IWRM.",
              code: `# Score a water-use plan against the three E-principles of IWRM
# Each axis is scored 1 (poor) to 5 (excellent) by a review panel
plan = {
    "name": "Basin-A allocation 2030",
    "efficiency":   4,   # prices reflect scarcity, water markets piloted
    "equity":       3,   # tail-end farmers still under-served
    "sustainability": 4, # e-flows notified for the estuary
}

def iwrm_score(plan):
    e = plan["efficiency"]
    q = plan["equity"]
    s = plan["sustainability"]
    weakest = min(e, q, s)            # the stool collapses on the weakest leg
    overall = (e + q + s) / 3
    verdict = "pass" if weakest >= 3 else "revise"
    return {"overall": round(overall, 2), "weakest": weakest, "verdict": verdict}

report = iwrm_score(plan)
print(f"{plan['name']}: overall={report['overall']}, weakest={report['weakest']}, verdict={report['verdict']}")
# Basin-A allocation 2030: overall=3.67, weakest=3, verdict=pass
`,
            },
            diagram: {
              kind: "pyramid",
              title: "The IWRM stool and its three legs",
              caption:
                "The wider the base of equity, the more stable the structure; sustainability is the capstone.",
              tiers: [
                { label: "Sustainability", note: "ecosystem and e-flow protection - the capstone" },
                { label: "Efficiency", note: "allocations reflect scarcity and value" },
                { label: "Equity", note: "universal access for drinking and livelihoods - the broadest base" },
              ],
            },
            callout: {
              type: "tip",
              title: "Name the legs, then name the pillars",
              body: "Examiners often conflate the three E-principles (efficiency, equity, sustainability) with the three pillars (policy, institutions, management). State both sets clearly in any IWRM answer - 'the three Es are the goals, the three pillars are the enabling environment' - to capture the full marks.",
            },
            keyTerms: [
              { term: "IWRM", definition: "Coordinated development and management of water, land and related resources for equitable welfare without compromising ecosystems." },
              { term: "Three E-principles", definition: "Economic efficiency, social equity and ecological sustainability - the competing goals IWRM balances." },
              { term: "Enabling environment", definition: "The policy, institutional and management framework that makes integrated water management operational." },
            ],
            examQuestions: [
              {
                q: "Define Integrated Water Resource Management. Explain its three E-principles and the three enabling pillars, and outline how IWRM is being implemented in India with examples.",
                marks: 7,
                outline: [
                  "State the Global Water Partnership definition verbatim.",
                  "List the three Es: economic efficiency, social equity, ecological sustainability.",
                  "Explain each E with one example (pricing for efficiency, tail-end access for equity, e-flows for sustainability).",
                  "List the three enabling pillars: policy framework, institutional framework, management instruments.",
                  "Give Indian implementation: National Water Mission, Namami Gange, basin organisations, water user associations.",
                  "Note the constitutional complication: water is a State subject while rivers cross states.",
                  "Conclude: integration needs both vertical (centre-state) and horizontal (inter-ministerial) coordination.",
                ],
              },
              {
                q: "List the three E-principles of IWRM with one example each.",
                marks: 3,
              },
              {
                q: "What are the three pillars of the enabling environment for IWRM?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Dublin Principles",
            body: [
              "The Dublin Principles were articulated at the International Conference on Water and the Environment held in Dublin in January 1992, the preparatory meeting that fed into the Rio Earth Summit later that year. The conference produced four guiding principles that have shaped global water policy ever since and that underpin the IWRM framework. Their brevity is deliberate: each principle fits on a single line and yet carries enough policy weight to drive decades of legislation, tariff reform and institutional redesign across both developed and developing countries.",
              "Principle 1 states that fresh water is a finite and vulnerable resource, essential to sustain life, development and the environment. Principle 2 states that water development and management should be based on a participatory approach, involving users, planners and policy-makers at all levels. Principle 3 states that women play a central part in the provision, management and safeguarding of water. Principle 4 states that water has an economic value in all its competing uses and should be recognised as an economic good, with the vital caveat that the right of all people to safe drinking water at an affordable price is accepted as a basic human right.",
              "The principles have direct operational consequences. Principle 1 forces basin-level planning and the protection of source watersheds. Principle 2 mandates water user associations, stakeholder consultations and transparent data sharing. Principle 3 has driven the formation of women-led water committees in rural supply programmes such as the Maharashtra Jalswarajya. Principle 4 is the most contested: it justifies volumetric tariffs, irrigation service fees and pollution charges, but always paired with a lifeline or free minimum to protect the poor - the dual-track that the National Water Policy 2012 also endorses.",
            ],
            bullets: [
              "Dublin 1992 ICWE produced four principles; they are the policy backbone of IWRM.",
              "Principle 1: fresh water is a finite and vulnerable resource, essential to life, development and environment.",
              "Principle 2: water development and management should be participatory, involving users at all levels.",
              "Principle 3: women play a central part in provision, management and safeguarding of water.",
              "Principle 4: water has an economic value in all uses and should be recognised as an economic good.",
              "Affordable drinking water is a basic human right - the lifeline tariff caveat on Principle 4.",
              "Operational consequences: basin planning, water user associations, women-led committees, volumetric tariffs.",
            ],
            table: {
              caption: "The four Dublin Principles and their operational instruments.",
              headers: ["Principle", "Core message", "Operational instrument"],
              rows: [
                ["Principle 1", "Fresh water is finite and vulnerable", "Basin planning, source protection, e-flows"],
                ["Principle 2", "Participatory approach", "Water user associations, stakeholder forums"],
                ["Principle 3", "Women central to water", "Women-led village water committees"],
                ["Principle 4", "Water has economic value", "Volumetric tariff with lifeline block"],
                ["Caveat", "Safe drinking water is a human right", "Subsidised minimum block, free standposts"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The four Dublin Principles stack into policy",
              caption:
                "Top layer is the contested economic-good principle; the lower layers secure life and participation.",
              layers: [
                { label: "Principle 4: economic good + human right", note: "tariffs with lifeline block" },
                { label: "Principle 3: women central", note: "gender-balanced water committees" },
                { label: "Principle 2: participatory management", note: "users, planners, policy-makers" },
                { label: "Principle 1: finite and vulnerable resource", note: "basin planning, source protection" },
              ],
            },
            callout: {
              type: "exam",
              title: "Principle 4 always carries the caveat",
              body: "Examiners deliberately probe the most contested principle. When you state 'water has an economic value', add the immediate caveat that affordable drinking water is a basic human right. Without the caveat, the answer reads as privatisation advocacy and loses marks for missing the Dublin framing.",
            },
            keyTerms: [
              { term: "Dublin Principles", definition: "The four guiding principles on fresh water articulated at the 1992 ICWE that underpin IWRM." },
              { term: "Economic good", definition: "Principle 4's classification of water as a resource whose competing uses carry economic value." },
              { term: "Lifeline tariff", definition: "A subsidised minimum volume of water provided at low or zero price to protect the basic human right." },
            ],
            examQuestions: [
              {
                q: "State the four Dublin Principles on water and the environment. Explain each principle with its operational instrument and the human-right caveat attached to Principle 4.",
                marks: 7,
                outline: [
                  "Set the context: Dublin 1992 ICWE, preparatory to Rio Earth Summit.",
                  "Principle 1: fresh water is finite and vulnerable - basin planning, source protection, e-flows.",
                  "Principle 2: participatory approach - water user associations, stakeholder forums.",
                  "Principle 3: women central to water - women-led committees (Maharashtra Jalswarajya example).",
                  "Principle 4: water has economic value - volumetric tariffs, irrigation fees, pollution charges.",
                  "State the caveat: safe drinking water at affordable price is a basic human right - lifeline block.",
                  "Conclude: the four principles together drive the IWRM framework and National Water Policy 2012.",
                ],
              },
              {
                q: "State Dublin Principle 4 and the human-right caveat attached to it.",
                marks: 2,
              },
              {
                q: "How does Principle 3 translate into Indian rural water supply programmes?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "River basin management",
            body: [
              "A river basin is the entire drainage area of a river and its tributaries, bounded by the watershed divide that separates it from neighbouring basins. It is the natural unit for water management because every drop that falls within its boundary leaves only through the basin outlet, evaporation or abstraction; nothing crosses the divide on the surface. River basin management therefore treats the basin as a single system, planning upstream-downstream linkages, surface-groundwater interactions, water quality and quantity, and the competing demands of irrigation, hydropower, domestic supply, industry and ecology within one framework.",
              "The classical instruments of river basin management are the River Basin Plan and the River Basin Organisation. The plan integrates a hydrological water balance, a demand assessment, a supply-side portfolio of storage and diversion works, a demand-side portfolio of efficiency and reuse, a water quality management plan, a flood management plan, and an environmental flow allocation. The organisation, exemplified by the Tennessee Valley Authority in the United States, the Murray-Darling Basin Authority in Australia and the Cauvery Management Board in India, is the institution that implements the plan, allocates water between riparian states, monitors flows and resolves disputes.",
              "River basin management in India is evolving. The Central Water Commission monitors flows at over 1,300 gauge stations; the Central Ground Water Board monitors about 6,500 units; and the National Water Development Agency pursues inter-basin transfer through the interlinking of rivers programme. The Namami Gange programme is the flagship basin restoration, combining sewage treatment plants, industrial effluent control, river-front development and afforestation. The challenges are familiar: water is a State subject, riparian disputes go to tribunals, and data sharing between states remains uneven - so basin organisations are advisory more than they are authoritative.",
            ],
            bullets: [
              "River basin: the drainage area bounded by the watershed divide; the natural unit for water planning.",
              "River Basin Plan integrates water balance, demand, supply, efficiency, water quality, floods and e-flows.",
              "River Basin Organisation: TVA (USA), Murray-Darling (Australia), Cauvery Management Board (India).",
              "Namami Gange: flagship Indian basin restoration - sewage, effluent, river-front, afforestation.",
              "CWC monitors over 1,300 gauge stations; CGWB monitors about 6,500 groundwater units.",
              "Interlinking of rivers programme pursued by the National Water Development Agency.",
              "Water is a State subject; interstate disputes go to tribunals under the ISRWD Act 1956.",
            ],
            codeExample: {
              language: "python",
              caption: "A simplified monthly basin water balance for a 25,000 sq km catchment.",
              code: `# Simplified monthly basin water balance for a 25,000 sq km catchment
area_sqkm = 25000
rainfall_mm = 1100            # annual average
months = ["Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"]
# Monthly rainfall distribution (fraction of annual)
dist = [0.18, 0.28, 0.22, 0.10, 0.06, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.03]

P_annual = rainfall_mm * area_sqkm * 1000 / 1e9   # bcm
print(f"Annual rainfall volume: {P_annual:.2f} bcm")

et_fraction = 0.45      # evapotranspiration
baseflow_fraction = 0.20
abstraction_fraction = 0.15
outflow_fraction = 1 - et_fraction - baseflow_fraction - abstraction_fraction

def monthly_balance(frac):
    p = P_annual * frac
    return {
        "rain": round(p, 3),
        "ET": round(p * et_fraction, 3),
        "baseflow": round(p * baseflow_fraction, 3),
        "abstraction": round(p * abstraction_fraction, 3),
        "outflow": round(p * outflow_fraction, 3),
    }

for m, f in zip(months, dist):
    b = monthly_balance(f)
    print(f"{m}: rain={b['rain']:.3f} ET={b['ET']:.3f} base={b['baseflow']:.3f} abst={b['abstraction']:.3f} out={b['outflow']:.3f} bcm")
`,
            },
            diagram: {
              kind: "cycle",
              title: "The river basin planning cycle",
              caption:
                "Each pass refines the basin plan; the cycle typically runs on a five-year horizon.",
              steps: [
                { label: "Hydrological water balance", note: "rainfall, runoff, infiltration, baseflow" },
                { label: "Demand assessment", note: "irrigation, domestic, industry, ecology" },
                { label: "Supply-portfolio design", note: "storage, diversion, inter-basin transfer" },
                { label: "Allocation and dispute resolution", note: "riparian shares, tribunal awards" },
                { label: "Monitoring and review", note: "CWC and CGWB data feeds next cycle" },
              ],
            },
            callout: {
              type: "warning",
              title: "Basin organisation is advisory, not authoritative",
              body: "Because water is a State subject in India, basin organisations cannot compel riparian states to release water; they recommend and monitor, but enforcement flows from tribunal awards under the ISRWD Act 1956. Always state this institutional limit in any basin-management answer.",
            },
            keyTerms: [
              { term: "River basin", definition: "The drainage area of a river and its tributaries bounded by the watershed divide." },
              { term: "River Basin Organisation", definition: "The institution that implements the basin plan and allocates water between riparian states." },
              { term: "Environmental flow", definition: "The quantity, timing and quality of water required to sustain freshwater ecosystems and human livelihoods dependent on them." },
            ],
            examQuestions: [
              {
                q: "Explain river basin management as the natural unit of water planning. Describe the River Basin Plan and the River Basin Organisation with examples from India and abroad, and discuss the institutional challenges.",
                marks: 7,
                outline: [
                  "Define river basin and the watershed divide - why it is the natural planning unit.",
                  "Describe the River Basin Plan: water balance, demand, supply, efficiency, water quality, floods, e-flows.",
                  "Describe the River Basin Organisation: implementation, allocation, monitoring, dispute resolution.",
                  "Give global examples: Tennessee Valley Authority (USA), Murray-Darling Basin Authority (Australia).",
                  "Give Indian examples: Cauvery Management Board, Namami Gange, NWDA interlinking of rivers.",
                  "State the institutional challenge: water is a State subject, disputes go to tribunals under ISRWD Act 1956.",
                  "Conclude: basin organisations are advisory more than authoritative in the Indian context.",
                ],
              },
              {
                q: "List the components of a River Basin Plan.",
                marks: 3,
              },
              {
                q: "Name two River Basin Organisations, one Indian and one international.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Water governance and National Water Policy 2012",
            body: [
              "Water governance is the set of political, social, economic and administrative systems that develop and manage water resources and deliver water services at all levels of society. It encompasses the laws, policies, institutions and finance that decide who gets water, when, how much and at what price; it also includes the informal norms that govern village tanks, kuhl channels and farmer-managed irrigation in many parts of India. Good governance is judged by five attributes: transparency, accountability, participation, predictability and responsiveness - the same five that mark any well-run public system.",
              "The National Water Policy 2012 is the third iteration of India's national framework, succeeding the 1987 and 2002 policies. Its salient features are a clear prioritisation of water use - drinking water and sanitation first, then ecology, then agriculture, then industry - followed by the recognition of water as an economic good, the call for a national water framework law, the mandatory periodic re-assessment of groundwater resources, the promotion of inter-basin transfers where feasible, the emphasis on rainwater harvesting and watershed development, and the encouragement of community-based management through water user associations and panchayat-level committees.",
              "The policy also flags climate change as a strategic driver and calls for adaptation in storage, demand management and crop patterns. It pushes for water-footprint audits in industry, equitable pricing with lifeline blocks, and the restoration of urban water bodies. Critics note that national policies are advisory since water is a State subject, and that several states have not yet notified state water policies aligned with the 2012 framework. The path to effective governance therefore runs through centre-state dialogue, model laws such as the Model Groundwater Bill 2016, and the gradual professionalisation of urban and rural water utilities.",
            ],
            bullets: [
              "Water governance: political, social, economic and administrative systems for water at every level.",
              "Five governance attributes: transparency, accountability, participation, predictability, responsiveness.",
              "National Water Policy 2012 is the third iteration after 1987 and 2002.",
              "Use priority: drinking and sanitation first, then ecology, then agriculture, then industry.",
              "NWP 2012 features: water as economic good, national framework law, groundwater re-assessment, inter-basin transfer.",
              "Promotes rainwater harvesting, watershed development, water user associations, urban body restoration.",
              "Model Groundwater Bill 2016 is the centre-state template for groundwater regulation.",
            ],
            table: {
              caption: "Salient features of the National Water Policy 2012.",
              headers: ["Feature", "Provision", "Operational implication"],
              rows: [
                ["Prioritisation", "Drinking > ecology > agriculture > industry", "Sectoral allocation order in plans"],
                ["Economic good", "Water recognised as an economic good", "Volumetric tariff with lifeline block"],
                ["Framework law", "National water framework law called for", "Model bills for state adoption"],
                ["Groundwater", "Periodic re-assessment mandated", "Annual CGWB assessment cycle"],
                ["Inter-basin transfer", "Promoted where feasible", "Interlinking of rivers programme"],
                ["Climate change", "Adaptation in storage and crops", "National Water Mission action plans"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Governance quality against policy adoption",
              caption:
                "The top-right quadrant is the goal - strong policy formally adopted and well governed.",
              axes: { x: "Policy adoption", y: "Governance quality" },
              quadrants: [
                { label: "Policy on paper only", note: "low adoption, weak governance" },
                { label: "Goal: adopted and well governed", note: "high adoption, strong governance" },
                { label: "Stalled", note: "low adoption, strong governance" },
                { label: "Adopted but poorly governed", note: "high adoption, weak governance" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always state the priority order verbatim",
              body: "The use-priority order of NWP 2012 - drinking and sanitation, ecology, agriculture, industry - is a frequent 2-mark question. Memorise it in that exact sequence; reversing any two pairs loses the whole mark even when the substance is correct.",
            },
            keyTerms: [
              { term: "Water governance", definition: "The political, social, economic and administrative systems that develop and manage water and deliver services at every level." },
              { term: "National Water Policy 2012", definition: "India's third national water framework, setting priorities, principles and instruments for water management." },
              { term: "Model Groundwater Bill 2016", definition: "Centre-issued template for state groundwater regulation that supports participatory aquifer management." },
            ],
            examQuestions: [
              {
                q: "Define water governance and list its five attributes. State the salient features of the National Water Policy 2012 with its water-use priority order, and comment on the gap between policy and implementation.",
                marks: 7,
                outline: [
                  "Define water governance - political, social, economic, administrative systems.",
                  "List the five attributes: transparency, accountability, participation, predictability, responsiveness.",
                  "Set context: NWP 2012 is the third iteration after 1987 and 2002.",
                  "State the priority order verbatim: drinking and sanitation, ecology, agriculture, industry.",
                  "List other features: water as economic good, national framework law, groundwater re-assessment, inter-basin transfer, rainwater harvesting.",
                  "Comment on the gap: water is a State subject, several states lack aligned policies.",
                  "Close with the path forward: centre-state dialogue, Model Groundwater Bill 2016, utility professionalisation.",
                ],
              },
              {
                q: "State the water-use priority order of NWP 2012.",
                marks: 2,
              },
              {
                q: "List any three salient features of the National Water Policy 2012.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ============== UNIT II - WATER SUPPLY AND DISTRIBUTION ==============
    {
      number: 2,
      roman: "II",
      title: "Water Supply and Distribution",
      summary:
        "The engine of public water service: urban and rural supply systems, source development from surface and groundwater with intake works, conventional and advanced treatment, distribution network design with continuous versus intermittent supply, non-revenue water reduction, and the smart water grid.",
      chapter: {
        number: "02",
        title: "Water Supply and Distribution",
        intro:
          "Unit II builds the supply-side infrastructure: the contrast between urban and rural systems, the development of surface and groundwater sources with intake works, the conventional treatment train of aeration-coagulation-flocculation-sedimentation-filtration-disinfection and its advanced variants, the design of distribution networks choosing between continuous and intermittent supply, the diagnosis and reduction of non-revenue water, and the smart water grid that integrates sensors, SCADA and demand-side intelligence.",
        inOneBreath:
          "Urban supply is a piped loop of source, treatment, clear-water reservoir, elevated service reservoir and distribution; rural supply favours hand-pumps, mini-piped schemes and overhead tanks; source development spans river intakes, reservoirs and infiltration galleries; conventional treatment runs aeration, coagulation with alum, flocculation, sedimentation, rapid sand filtration and chlorination; advanced treatment adds ozonation, activated carbon and membrane filtration; distribution is designed on Hardy-Cross or EPANET for continuous supply or sectorised for intermittent; non-revenue water is the sum of real losses (leaks) and apparent losses (meter errors, theft); and the smart water grid layers AMR meters, SCADA, pressure management and leak-noise loggers.",
        sections: [
          {
            number: "2.1",
            title: "Urban and rural water supply systems",
            body: [
              "An urban water supply system is a centralised engineered loop: a raw-water intake on a river, reservoir or infiltration gallery lifts water by low-lift pumps to a treatment plant; the treated water enters a clear-water reservoir; high-lift pumps push it through a transmission main to an elevated or ground-level service reservoir; and gravity or booster pumps distribute it through primary, secondary and tertiary mains to the consumer's tap. The same skeleton serves a city of 50,000 or 50 million; only the unit processes, the storage sizing and the network topology scale.",
              "Rural supply in India has historically relied on three layers: point sources such as hand-pumps and dug wells for scattered habitations; mini-piped schemes with an overhead tank and stand-posts for villages of a few thousand; and multi-village schemes with extended transmission mains for clusters that share a distant source. The Jal Jeevan Mission, launched in 2019, has dramatically shifted this picture by setting a target of functional household tap connections for every rural household by 2024, moving the rural standard from stand-posts to in-house taps and from hand-pump quality to treatment-assured potable water.",
              "Service-level benchmarks distinguish the two regimes. CPHEEO guidelines prescribe 135 litres per capita per day for urban domestic supply with a residual pressure at the tap of 7 to 17 metres; rural supply is designed for 55 to 70 litres per capita per day under the National Rural Drinking Water Programme. Both regimes confront the same trinity of challenges: source reliability under climate stress, water quality from fluoride, arsenic, iron, salinity and bacteriological contamination, and the financial sustainability of the operating utility. The shift to household-level connections and metered tariffs is the central reform of the decade.",
            ],
            bullets: [
              "Urban system: intake - treatment - clear-water reservoir - service reservoir - distribution mains.",
              "Low-lift pumps feed the plant; high-lift pumps feed the transmission main; gravity or boosters distribute.",
              "Rural layers: hand-pumps, mini-piped schemes with stand-posts, multi-village schemes with transmission.",
              "Jal Jeevan Mission (2019) targets functional household tap connections for every rural household.",
              "CPHEEO urban benchmark: 135 lpcd with 7 to 17 m residual pressure at the tap.",
              "Rural benchmark: 55 to 70 lpcd under the National Rural Drinking Water Programme.",
              "Quality contaminants of concern: fluoride, arsenic, iron, salinity, bacteria.",
            ],
            table: {
              caption: "Urban versus rural water supply benchmarks.",
              headers: ["Parameter", "Urban (CPHEEO)", "Rural (NRDWP)"],
              rows: [
                ["Demand", "135 lpcd", "55 to 70 lpcd"],
                ["Residual pressure", "7 to 17 m at tap", "5 to 10 m at stand-post"],
                ["Storage", "1/2 to 1 day clear-water", "1 to 2 days overhead"],
                ["Connection type", "House service connection", "Stand-post or house tap"],
                ["Treatment level", "Full conventional plant", "Disinfection, with defluoridation where needed"],
                ["Operating entity", "City utility / PHED", "Gram panchayat / VWSC"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The urban supply pipeline from river to tap",
              caption:
                "Six stages, two pumping lifts, one gravity distribution - the urban loop.",
              stages: [
                { label: "Intake works", note: "river, reservoir or infiltration gallery" },
                { label: "Low-lift pump station", note: "raw water to plant" },
                { label: "Treatment plant", note: "conventional or advanced train" },
                { label: "Clear-water reservoir", note: "0.5 to 1 day storage" },
                { label: "High-lift pumps + transmission", note: "to service reservoir" },
                { label: "Service reservoir + distribution", note: "gravity or booster to taps" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the CPHEEO and NRDWP numbers",
              body: "The two headline numbers - 135 lpcd for urban (CPHEEO) and 55 to 70 lpcd for rural (NRDWP) - appear in almost every supply-system question. Memorise them with the residual pressure figures (7 to 17 m urban, 5 to 10 m rural) to anchor the answer in concrete benchmarks.",
            },
            keyTerms: [
              { term: "Clear-water reservoir", definition: "Treated-water storage at the plant, sized for 0.5 to 1 day of demand." },
              { term: "Service reservoir", definition: "Elevated or ground-level storage at the distribution end, balancing peak demand against supply." },
              { term: "Jal Jeevan Mission", definition: "2019 national programme targeting functional household tap connections for every rural household." },
            ],
            examQuestions: [
              {
                q: "Compare urban and rural water supply systems in India with reference to layout, demand benchmarks, storage, treatment level and operating entities. Mention the Jal Jeevan Mission.",
                marks: 7,
                outline: [
                  "Sketch the urban loop: intake - treatment - clear-water reservoir - service reservoir - distribution.",
                  "Describe rural layers: hand-pumps, mini-piped schemes, multi-village schemes.",
                  "Compare demand: 135 lpcd urban (CPHEEO) vs 55 to 70 lpcd rural (NRDWP).",
                  "Compare residual pressure: 7 to 17 m urban vs 5 to 10 m rural.",
                  "Compare storage, treatment level, connection type and operating entity.",
                  "Introduce the Jal Jeevan Mission 2019 as the rural reform shifting stand-posts to household taps.",
                  "Conclude with common challenges: source reliability, water quality, financial sustainability.",
                ],
              },
              {
                q: "State the CPHEEO per-capita demand and residual pressure for urban supply.",
                marks: 2,
              },
              {
                q: "List the three historical layers of rural water supply in India.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Source development and intake works",
            body: [
              "Source development begins with the choice between surface and groundwater. Surface sources - rivers, reservoirs, lakes and canals - offer large volumes but bring seasonal variability, sediment load and pollution. Groundwater sources - dug wells, borewells and infiltration galleries - offer consistent quality and natural filtration but limited yield and vulnerability to over-extraction. The choice is governed by a yield-reliability-quality-cost matrix: a city weighing 100 MLD demand against a 90 per cent reliable river yield of 80 MLD will either augment with a reservoir, supplement with groundwater, or curtail demand.",
              "Intake works are the engineered structures that admit raw water from a surface source to the conveyance system. A river intake typically has a port or trumpet-shaped inlet set below the lowest low-water level, fitted with screens to exclude debris and fish, and protected by a sump from where low-lift pumps lift water to the treatment plant. A reservoir intake is often a multi-level tower with ports at different elevations so that the best-quality layer can be drawn as the reservoir level fluctuates through the year. An infiltration gallery is a horizontal porous pipe laid under a river bed that abstracts water through the natural sand filter.",
              "Design considerations for intakes include the hydraulic capacity to pass the design peak flow, the prevention of bed load and floating debris entry, the reliability under all seasons and flood stages, the avoidance of air entrainment and vortex formation, and the ease of maintenance through stop-logs, gates and cleaning ports. Indian practice follows IS 9116 for river intakes and CPHEEO manual for general intake design. Climate adaptation now demands that intakes be designed for shifted low-flow and flood scenarios, and that critical intakes have redundancy through a backup source or an off-stream reservoir.",
            ],
            bullets: [
              "Surface sources: rivers, reservoirs, lakes, canals - large volume, variable, polluted.",
              "Groundwater sources: dug wells, borewells, infiltration galleries - consistent quality, limited yield.",
              "River intake: trumpet inlet, screens, sump, low-lift pumps; set below lowest low-water level.",
              "Reservoir intake: multi-level tower with ports to draw the best-quality layer.",
              "Infiltration gallery: horizontal porous pipe under a river bed, natural sand filtration.",
              "Design criteria: peak capacity, debris exclusion, vortex avoidance, ease of maintenance.",
              "IS 9116 covers river intakes; CPHEEO manual covers general intake design.",
            ],
            codeExample: {
              language: "python",
              caption: "Choose a surface intake elevation from a reservoir stage-duration curve.",
              code: `# Choose a surface intake elevation from a reservoir stage-duration curve
# Stages recorded over 30 years at 10% exceedance intervals
stages_m = [125.0, 128.0, 130.5, 132.0, 133.5, 134.8, 135.9, 136.8, 137.6, 138.4]
exceed_pct = [90, 80, 70, 60, 50, 40, 30, 20, 10, 0]   # % of time stage is at or above

design_reliability = 95   # we want water 95% of days
# lowest stage exceeded design_reliability% of time
import bisect
# exceed_pct is descending; find the stage that satisfies reliability
chosen_stage = None
for s, p in zip(stages_m, exceed_pct):
    if p >= design_reliability:
        chosen_stage = s
        break
print(f"Stage that satisfies {design_reliability}% reliability: {chosen_stage} m")

# Place the top intake port 0.5 m below the chosen stage,
# and additional ports every 2 m below to access better quality layers.
top_port = chosen_stage - 0.5
ports = [round(top_port - 2*i, 2) for i in range(5)]
print(f"Multi-level intake port elevations (m): {ports}")
`,
            },
            diagram: {
              kind: "flow",
              title: "Intake selection workflow",
              caption:
                "Walk through reliability, quality and debris checks before fixing the intake elevation.",
              steps: [
                { label: "Demand and reliability target", note: "MLD and 95 per cent days" },
                { label: "Stage-duration curve", note: "30-year record, 10 per cent intervals" },
                { label: "Set top port below reliable stage", note: "0.5 m clearance" },
                { label: "Add lower ports for quality", note: "every 2 m below" },
                { label: "Screen, sump and low-lift pump", note: "IS 9116 design" },
              ],
            },
            callout: {
              type: "warning",
              title: "Design for shifted climates, not historic flows",
              body: "Many Indian intakes designed on 1970s flow series now fail in summer because snowmelt and rainfall have shifted. Always add a redundancy check - backup source, off-stream storage or curtailed demand - so that a 1-in-20 dry year does not starve the city. Examiners reward the climate-adaptation note explicitly.",
            },
            keyTerms: [
              { term: "Intake works", definition: "Engineered structures that admit raw water from a surface source to the conveyance system." },
              { term: "Infiltration gallery", definition: "A horizontal porous pipe laid under a river bed that abstracts water through natural sand filtration." },
              { term: "Stage-duration curve", definition: "A plot of water level against the percentage of time that level is equalled or exceeded." },
            ],
            examQuestions: [
              {
                q: "Describe source development options for an urban water supply. Explain the design of a river intake and a reservoir intake with sketches, and state the design criteria and IS code relevant.",
                marks: 7,
                outline: [
                  "Contrast surface and groundwater sources via yield, reliability, quality and cost.",
                  "Describe river intake: trumpet inlet, screens, sump, low-lift pumps, set below lowest low-water level.",
                  "Describe reservoir intake: multi-level tower with ports at different elevations.",
                  "Mention infiltration gallery as a groundwater-surface hybrid.",
                  "List design criteria: peak capacity, debris exclusion, vortex avoidance, maintenance.",
                  "Cite IS 9116 for river intakes and the CPHEEO manual for general design.",
                  "Add climate-adaptation note: design for shifted low-flow and flood scenarios with redundancy.",
                ],
              },
              {
                q: "What is an infiltration gallery and where is it used?",
                marks: 2,
              },
              {
                q: "List any three design criteria for a river intake.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Conventional water treatment",
            body: [
              "Conventional water treatment is the train of unit processes that converts a raw surface water with turbidity, colour, bacteria and dissolved organics into potable water meeting IS 10500. The standard sequence is aeration, coagulation with alum or ferric chloride, flocculation, sedimentation, rapid sand filtration and disinfection with chlorine. Each unit process targets a specific impurity class: aeration strips dissolved gases and odours; coagulation destabilises colloidal particles; flocculation aggregates them into settleable flocs; sedimentation settles the flocs; filtration removes residual flocs and particulates; disinfection kills pathogens.",
              "Coagulation is governed by the Jar test, which determines the optimum coagulant dose - typically 20 to 50 mg per litre of alum for turbid surface waters. Rapid mixing for 30 to 60 seconds disperses the coagulant; flocculation proceeds in 20 to 30 minutes with gentle paddle mixing at a velocity gradient G of 20 to 80 per second to build flocs of 0.5 to 1 mm. Sedimentation tanks are designed for a surface overflow rate of 12 to 18 cubic metres per square metre per day and a detention time of 2 to 4 hours. Rapid sand filters run at 5 to 10 metres per hour and are backwashed every 24 to 48 hours.",
              "Disinfection by chlorination targets the 4-log reduction of bacteria and viruses. The breakpoint chlorination curve shows the rising residual as dose increases through the chloramines zone, then a dip at breakpoint, then a linear rise of free residual. Design ensures a free residual of 0.2 to 0.5 mg per litre at the far end of the distribution system after a contact time of 30 minutes. Where taste, odour or trihalomethane formation is a concern, pre-ozonation and activated carbon are added as advanced steps; the conventional train remains the workhorse of Indian cities because of its robustness and moderate cost.",
            ],
            bullets: [
              "Conventional train: aeration, coagulation, flocculation, sedimentation, filtration, disinfection.",
              "Coagulant dose set by Jar test - 20 to 50 mg per litre of alum typical.",
              "Rapid mix: 30 to 60 seconds; flocculation: 20 to 30 min at G of 20 to 80 per second.",
              "Sedimentation: overflow rate 12 to 18 m3/m2/day, detention time 2 to 4 hours.",
              "Rapid sand filter: 5 to 10 m/h filtration, backwash every 24 to 48 hours.",
              "Chlorination: free residual 0.2 to 0.5 mg/L after 30 min contact, 4-log pathogen reduction.",
              "IS 10500 is the drinking water specification; advanced steps add ozonation and activated carbon.",
            ],
            table: {
              caption: "Conventional treatment unit processes with design parameters.",
              headers: ["Unit", "Target impurity", "Design parameter"],
              rows: [
                ["Aeration", "Dissolved gases, odours", "2 to 3 m cascade drop"],
                ["Coagulation", "Colloids, colour", "Jar-test dose, 30 to 60 s mix"],
                ["Flocculation", "Aggregation of flocs", "20 to 30 min, G = 20 to 80 per s"],
                ["Sedimentation", "Settleable flocs", "12 to 18 m3/m2/d, 2 to 4 h"],
                ["Rapid sand filter", "Residual flocs", "5 to 10 m/h, 24 to 48 h run"],
                ["Chlorination", "Pathogens", "0.2 to 0.5 mg/L residual, 30 min"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Coagulant choice fork by raw-water turbidity",
              caption:
                "Dose and coagulant depend on turbidity, colour and alkalinity - the Jar test resolves the choice.",
              start: "Raw water at the head of the plant",
              branches: [
                { label: "low turbidity < 10 NTU, high colour", outcome: "use alum or PACl with a small dose, possibly polymer aid", good: true },
                { label: "moderate turbidity 10 to 100 NTU", outcome: "alum 20 to 50 mg/L, conventional train works well", good: true },
                { label: "very high turbidity > 500 NTU in monsoon", outcome: "pre-sedimentation plus higher alum dose, sometimes ferric chloride", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Always name the Jar test for coagulant dose",
              body: "Examiners specifically look for the Jar test as the method that sets alum dose. State the procedure - six beakers with increasing dose, 1 minute rapid mix at 100 rpm, 10 to 20 minutes slow mix at 20 to 40 rpm, 30 minutes settling - then read the optimum as the lowest dose giving a clear supernatant.",
            },
            keyTerms: [
              { term: "Coagulation", definition: "Destabilisation of colloidal particles by adding a coagulant such as alum, followed by rapid mixing." },
              { term: "Breakpoint chlorination", definition: "The dose beyond which added chlorine appears as free residual, after oxidising ammonia and organics." },
              { term: "Jar test", definition: "A bench-scale procedure that determines the optimum coagulant dose for a given raw water." },
            ],
            examQuestions: [
              {
                q: "Describe the conventional water treatment train with sketch. Give the design parameters of each unit, the role of the Jar test, and the principle of breakpoint chlorination.",
                marks: 7,
                outline: [
                  "List the train: aeration, coagulation, flocculation, sedimentation, filtration, disinfection.",
                  "Give aeration purpose and 2 to 3 m cascade drop.",
                  "State coagulation: Jar-test alum dose 20 to 50 mg/L, 30 to 60 s rapid mix.",
                  "State flocculation: 20 to 30 min, G = 20 to 80 per second.",
                  "State sedimentation: 12 to 18 m3/m2/d overflow, 2 to 4 h detention.",
                  "State filtration: 5 to 10 m/h rapid sand, backwash every 24 to 48 h.",
                  "Explain breakpoint chlorination and the 0.2 to 0.5 mg/L free residual target.",
                ],
              },
              {
                q: "Define breakpoint chlorination.",
                marks: 2,
              },
              {
                q: "List the design parameters of a rapid sand filter.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Advanced treatment and distribution network design",
            body: [
              "Advanced treatment steps are added when raw water carries contaminants that the conventional train cannot remove: pesticides and industrial organics, dissolved salts, hardness, heavy metals, or pathogens of concern such as Cryptosporidium and Giardia that resist chlorine. The advanced toolkit includes pre-ozonation for oxidation of organics and iron-manganese, granular activated carbon adsorption for pesticides and taste-odour compounds, ion exchange for nitrate and hardness, reverse osmosis for salinity and fluoride, and ultrafiltration or membrane bioreactors for pathogen barrier.",
              "Distribution network design begins with the layout of pipes forming loops so that any pipe failure can be served by an alternate path. Pipe diameters are sized using the Hardy-Cross method of successive adjustments or, more commonly today, by network solvers such as EPANET that compute heads and flows under any demand pattern. Key design inputs are the peak factor (typically 2.0 to 2.7 times the average daily demand), the simultaneous-demand factor for buildings, the minimum residual pressure of 7 to 17 metres at the tap, the maximum velocity of 1.5 to 3 metres per second to limit headloss, and the fire-flow requirement of 5 to 15 cubic metres per minute at any hydrant.",
              "Continuous supply maintains pressure in the network 24 hours a day, ensuring water quality at the consumer's tap but requiring high source capacity, tight leakage control and metered tariffs. Intermittent supply, common in Indian cities, runs the network only for a few hours a day, with consumers storing water in household tanks; it lowers apparent demand but causes negative pressures, backflow contamination, pipe corrosion from air-water cycling and inequitable distribution favouring upstream consumers. The shift from intermittent to continuous, sector by sector, is the single highest-leverage reform for water quality and equity in Indian urban supply.",
            ],
            bullets: [
              "Advanced steps: ozonation, activated carbon, ion exchange, reverse osmosis, ultrafiltration.",
              "Targets: pesticides, dissolved salts, hardness, heavy metals, Cryptosporidium, Giardia.",
              "Network layout: loops so any pipe failure has an alternate path.",
              "Hardy-Cross method of successive adjustments or EPANET network solver.",
              "Peak factor 2.0 to 2.7 times average; minimum residual pressure 7 to 17 m at tap.",
              "Maximum velocity 1.5 to 3 m/s; fire flow 5 to 15 m3/min at any hydrant.",
              "Continuous supply: better quality and equity; intermittent supply: lower demand but backflow risk.",
            ],
            codeExample: {
              language: "python",
              caption: "Hardy-Cross headloss balance on a simple two-loop distribution network.",
              code: `# Hardy-Cross headloss balance on a simple two-loop distribution network
# Each pipe: (length m, diameter mm, C of Hazen-Williams, assumed flow L/s, sign in loop)
# Hazen-Williams headloss: h = 10.67 * L * Q^1.852 / (C^1.852 * D^4.87)  (Q in m3/s, D in m)
pipes = {
    1: {"L": 600, "D": 0.300, "C": 100, "Q": 30.0},   # loop A only, clockwise +
    2: {"L": 500, "D": 0.250, "C": 100, "Q": 20.0},   # shared, sign + in A, - in B
    3: {"L": 700, "D": 0.300, "C": 100, "Q": 25.0},   # loop B only, clockwise +
    4: {"L": 500, "D": 0.200, "C": 100, "Q": 15.0},   # loop A only
    5: {"L": 600, "D": 0.200, "C": 100, "Q": 15.0},   # loop B only
}

def hw_hl(L, D, C, Q_Ls):
    Q = Q_Ls / 1000.0   # to m3/s
    return 10.67 * L * (Q**1.852) / ((C**1.852) * (D**4.87))

def correction(loop_pipes, signs):
    # Hardy-Cross: dQ = - sum(sign*h) / (1.852 * sum(sign*h/Q))
    num = 0.0
    den = 0.0
    for pid, s in zip(loop_pipes, signs):
        p = pipes[pid]
        h = s * hw_hl(p["L"], p["D"], p["C"], p["Q"])
        num += h
        den += (1.852 * h / p["Q"])
    if den == 0:
        return 0.0
    return -num / den

# Two iterations on loop A (pipes 1, 2, 4) signs +, +, -
for it in range(2):
    dQ_A = correction([1, 2, 4], [+1, +1, -1])
    for pid, s in zip([1, 2, 4], [+1, +1, -1]):
        pipes[pid]["Q"] += s * dQ_A
    print(f"iter {it+1}: loop A correction = {dQ_A:.4f} L/s")

for pid in [1, 2, 3, 4, 5]:
    p = pipes[pid]
    print(f"pipe {pid}: Q={p['Q']:.2f} L/s, headloss={hw_hl(p['L'], p['D'], p['C'], p['Q']):.3f} m")
`,
            },
            diagram: {
              kind: "compare",
              title: "Continuous versus intermittent supply",
              caption:
                "Continuous supply wins on quality and equity; intermittent wins only on apparent demand.",
              left: {
                heading: "Continuous supply",
                items: [
                  "24-hour pressure at the tap",
                  "Water quality preserved at consumer end",
                  "Equitable - upstream and downstream both served",
                  "Requires tight leakage control and metered tariff",
                  "Higher source capacity needed",
                ],
              },
              right: {
                heading: "Intermittent supply",
                items: [
                  "Few hours of supply per day",
                  "Household storage shifts burden to consumer",
                  "Negative pressure causes backflow contamination",
                  "Air-water cycling accelerates pipe corrosion",
                  "Inequitable - upstream consumers favoured",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Always argue continuous vs intermittent with the trade-off",
              body: "Examiners expect the trade-off, not just the description. State that intermittent supply lowers apparent demand but causes backflow, corrosion and inequity; continuous supply raises source-capacity needs but solves quality and equity. Conclude that the shift from intermittent to continuous, sector by sector, is the highest-leverage Indian reform.",
            },
            keyTerms: [
              { term: "Hardy-Cross method", definition: "A successive-approximation technique that balances headloss around network loops to find pipe flows." },
              { term: "Peak factor", definition: "The ratio of peak hourly demand to average daily demand, typically 2.0 to 2.7 for urban supply." },
              { term: "Intermittent supply", definition: "A distribution regime where the network is pressurised only for a few hours per day, requiring household storage." },
            ],
            examQuestions: [
              {
                q: "Explain advanced water treatment steps and when they are needed. Describe the design of a distribution network with the Hardy-Cross method, and compare continuous versus intermittent supply.",
                marks: 7,
                outline: [
                  "List advanced steps: ozonation, GAC, ion exchange, RO, ultrafiltration.",
                  "State the contaminants each step targets: pesticides, salts, Cryptosporidium, fluoride.",
                  "Describe network layout: loops for alternate paths; pipe sizing by Hardy-Cross or EPANET.",
                  "Give design inputs: peak factor 2.0 to 2.7, residual pressure 7 to 17 m, velocity 1.5 to 3 m/s, fire flow.",
                  "Define continuous supply: 24-hour pressure, better quality and equity, higher source capacity.",
                  "Define intermittent supply: few hours per day, household storage, backflow and corrosion risks.",
                  "Conclude: sector-wise shift from intermittent to continuous is the highest-leverage reform.",
                ],
              },
              {
                q: "State the peak factor and minimum residual pressure used in distribution design.",
                marks: 2,
              },
              {
                q: "List any three advanced treatment steps and the contaminants they remove.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Non-revenue water reduction and smart water grid",
            body: [
              "Non-revenue water, abbreviated NRW, is the volume of water produced by a utility that does not earn revenue - the difference between the system input volume and the billed authorised consumption. NRW has two components. Real losses are the physical leaks from mains, service connections and reservoirs; apparent losses are the non-physical losses from meter inaccuracies, unauthorised consumption, data-handling errors and unbilled authorised use. A typical Indian city reports NRW of 30 to 50 per cent; the international best-practice benchmark is 15 per cent, and the CPHEEO target for Indian cities is 20 per cent.",
              "NRW reduction follows a structured methodology. First, a water audit quantifies system input, authorised consumption, real and apparent losses using the IWA water balance. Second, district metered areas are carved out with inflow and outflow meters, and the minimum night flow into each DMA reveals the leakage level. Third, active leakage control sends acoustic loggers and crews to pinpoint and repair bursts before they surface. Fourth, pressure management reduces leakage by lowering average and transient pressures through pressure-reducing valves. Fifth, meter replacement and theft crackdowns tackle apparent losses.",
              "The smart water grid layers digital intelligence on this physical network. AMR and IoT meters transmit consumption data to a SCADA head-end; acoustic and pressure sensors stream leakage and burst signals; hydraulic models simulate the network in near real-time; analytics engines flag anomalies and predict failures; and consumer apps display usage and bills. Indian pilots in cities such as Pune, Surat and Hyderabad integrate these layers; the smart grid's promise is sustained low NRW, faster leak response, equitable pressure and demand-side engagement that locks in the savings from the NRW campaign.",
            ],
            bullets: [
              "NRW = system input minus billed authorised consumption; typical Indian city 30 to 50 per cent.",
              "Real losses: physical leaks from mains, service connections, reservoirs.",
              "Apparent losses: meter inaccuracies, theft, data errors, unbilled authorised use.",
              "IWA water balance structures the audit; CPHEEO target is 20 per cent NRW.",
              "District metered areas with minimum night flow reveal leakage level per DMA.",
              "Acoustic loggers + pressure reducing valves = active leakage control.",
              "Smart water grid: AMR or IoT meters, SCADA, sensors, analytics, consumer apps.",
            ],
            table: {
              caption: "IWA water balance for NRW diagnosis.",
              headers: ["System input", "Authorised consumption", "Losses"],
              rows: [
                ["Billed authorised", "Metered + unmetered", "Revenue-generating"],
                ["Unbilled authorised", "Municipal, firefighting", "No revenue"],
                ["Apparent loss", "Meter inaccuracy, theft", "Non-physical"],
                ["Real loss", "Leakage on mains and services", "Physical"],
                ["Revenue water", "Billed authorised", "Target: maximise"],
                ["NRW", "Unbilled authorised + apparent + real", "Target: minimise"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The smart water grid stack",
              caption:
                "The physical network underlies sensors, communications, analytics and the consumer app.",
              layers: [
                { label: "Consumer app and billing", note: "usage display, alerts, payments" },
                { label: "Analytics and hydraulic model", note: "leak prediction, anomaly flags" },
                { label: "SCADA and communications", note: "AMR or IoT, LoRaWAN, 4G" },
                { label: "Sensors and meters", note: "flow, pressure, acoustic, water quality" },
                { label: "Physical network", note: "mains, valves, reservoirs, service connections" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always split NRW into real and apparent losses",
              body: "A common slip is to treat NRW as just 'leakage'. Examiners look for the real-vs-apparent split, the IWA water balance and the minimum-night-flow DMA technique. State all three explicitly - the audit, the DMA, the active leakage control trio - to claim the full marks.",
            },
            keyTerms: [
              { term: "Non-revenue water (NRW)", definition: "The difference between system input volume and billed authorised consumption; the sum of real losses, apparent losses and unbilled authorised use." },
              { term: "District metered area (DMA)", definition: "A discrete zone of the distribution network with measured inflow and outflow, used to isolate and quantify leakage." },
              { term: "Minimum night flow", definition: "The lowest flow into a DMA between 2 am and 4 am, used as a proxy for leakage since legitimate night use is minimal." },
            ],
            examQuestions: [
              {
                q: "Define non-revenue water and split it into real and apparent losses with examples. Describe a structured NRW reduction methodology and the layers of a smart water grid.",
                marks: 7,
                outline: [
                  "Define NRW: system input minus billed authorised consumption.",
                  "Split into real losses (leaks) and apparent losses (meter, theft, data errors).",
                  "Cite the Indian context: 30 to 50 per cent typical; CPHEEO target 20 per cent.",
                  "Step 1: IWA water audit to quantify components.",
                  "Step 2: carve district metered areas; use minimum night flow as leakage proxy.",
                  "Step 3: active leakage control with acoustic loggers; step 4: pressure management with PRVs.",
                  "Describe the smart grid: IoT meters, SCADA, sensors, analytics, consumer apps; cite Pune/Surat/Hyderabad.",
                ],
              },
              {
                q: "Distinguish between real losses and apparent losses in a water audit.",
                marks: 2,
              },
              {
                q: "List any three layers of a smart water grid.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ============== UNIT III - WASTEWATER TREATMENT AND REUSE ==============
    {
      number: 3,
      roman: "III",
      title: "Wastewater Treatment and Reuse",
      summary:
        "The closing of the urban water cycle: sewerage systems for collection, conveyance and pumping, the secondary treatment variants of ASP, trickling filter, UASB and MBR, the tertiary processes for nutrient removal and membrane separation, and the spectrum of reuse from industry and agriculture to urban and indirect potable, anchored by decentralised treatment.",
      chapter: {
        number: "03",
        title: "Wastewater Treatment and Reuse",
        intro:
          "Unit III builds the wastewater cycle: the sewerage system of collection, conveyance and pumping with separate and combined sewers; the primary-secondary-tertiary treatment train; the secondary variants of activated sludge, trickling filter, UASB and MBR; the tertiary nutrient removal of nitrification-denitrification and phosphorus precipitation, and the membrane processes of UF and RO; the reuse spectrum from industrial cooling and agriculture to urban horticulture and indirect potable; and the decentralised treatment paradigm for peri-urban and rural clusters.",
        inOneBreath:
          "Sewerage collects wastewater through lateral, sub-main and trunk sewers designed for self-cleansing velocity of 0.6 to 0.9 m/s, with pumping stations at low points; primary treatment removes settleable solids in 1.5 to 2 hours; secondary biological treatment follows the activated sludge process at F/M 0.2 to 0.5 and MLSS 1500 to 3000 mg/L, the trickling filter at 0.1 to 0.4 kg BOD/m3/d, UASB at 5 to 15 kg COD/m3/d, and the MBR combining aeration with membrane separation; tertiary treatment removes nitrogen and phosphorus by nitrification-denitrification and chemical precipitation; and reuse ranges from industrial cooling to indirect potable through groundwater recharge.",
        sections: [
          {
            number: "3.1",
            title: "Sewerage systems: collection, conveyance and pumping",
            body: [
              "A sewerage system collects wastewater from households, commercial premises and industries and conveys it to a treatment plant. The network is hierarchical: building sewers discharge into laterals, laterals into sub-mains, sub-mains into trunk sewers, and trunk sewers into the treatment-plant inlet or an outfall. Sewers flow by gravity wherever possible, following the natural slope of the terrain; where gravity is not feasible, pumping stations lift the wastewater to a higher contour for continued gravity flow. The design peak factor of 2.0 to 3.0 times the average dry-weather flow accounts for diurnal variation.",
              "Design of sewers follows self-cleansing criteria. The minimum velocity of 0.6 metres per second at average flow, or 0.9 metres per second at peak flow, prevents deposition of settleable solids; the maximum velocity of 3 metres per second prevents scour of the pipe invert. Manning's equation governs the hydraulic design; typical sewer materials are RCC, HDPE and vitrified clay. Separate sewerage systems carry sanitary sewage in one network and stormwater in another, keeping the treatment plant sized to dry-weather flow; combined sewers carry both in one network, common in older cities but now discouraged because wet-weather overloads bypass treatment.",
              "Pumping stations are sited at low points or at the termination of long gravity runs. A typical station has a wet well to collect wastewater, submersible or centrifugal pumps in a dry well, a valve manifold and a rising main to the next gravity sewer or to the plant. Standby capacity of at least one pump ensures continuity; emergency overflow storage holds wet-weather surcharge. The CPHEEO manual on sewerage and sewage treatment, IS 1742 and IS 7758 govern Indian design practice. Sizing the wet well on a cycle of 5 to 15 minutes avoids septicity from long detention.",
            ],
            bullets: [
              "Network hierarchy: building sewer - lateral - sub-main - trunk sewer - plant inlet.",
              "Sewers flow by gravity; pumping stations lift to a higher contour when needed.",
              "Self-cleansing: minimum 0.6 m/s at average, 0.9 m/s at peak; maximum 3 m/s.",
              "Peak factor 2.0 to 3.0 times average dry-weather flow for diurnal variation.",
              "Separate sewers carry sanitary and storm in distinct networks; combined sewers in one.",
              "Pumping station: wet well, dry well, submersible pumps, valve manifold, rising main.",
              "CPHEEO manual, IS 1742 and IS 7758 govern Indian sewerage design.",
            ],
            table: {
              caption: "Separate versus combined sewerage systems.",
              headers: ["Aspect", "Separate system", "Combined system"],
              rows: [
                ["Networks", "Two: sanitary and storm", "One: both together"],
                ["Treatment load", "Dry-weather flow only", "Wet-weather overload"],
                ["Overflow risk", "None at plant", "CSO to receiving waters"],
                ["Capital cost", "Higher (two networks)", "Lower per kilometre"],
                ["Maintenance", "Two systems to clean", "One system, larger pipes"],
                ["Indian preference", "Mandated for new schemes", "Legacy in old city cores"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Sewerage collection pipeline from house to plant",
              caption:
                "Five stages, one pumping lift at the low point - the standard gravity-led sewerage layout.",
              stages: [
                { label: "Building sewer", note: "100 to 150 mm diameter" },
                { label: "Lateral sewer", note: "150 to 250 mm, in the street" },
                { label: "Sub-main", note: "250 to 450 mm, sub-catchment" },
                { label: "Pumping station", note: "wet well + submersible pumps" },
                { label: "Trunk sewer to plant", note: "450 mm and above" },
              ],
            },
            callout: {
              type: "warning",
              title: "Self-cleansing velocity is non-negotiable",
              body: "A common slip is to size sewers only on capacity and forget self-cleansing. A sewer that flows too slowly deposits solids and turns septic; a sewer that flows too fast scours its invert. Always state the 0.6 m/s minimum at average flow and the 3 m/s maximum - both bounds define the design.",
            },
            keyTerms: [
              { term: "Self-cleansing velocity", definition: "The minimum sewer velocity of about 0.6 m/s at average flow that prevents deposition of solids." },
              { term: "Separate sewerage", definition: "A system with two distinct networks for sanitary sewage and stormwater." },
              { term: "Combined sewer overflow", definition: "The discharge of mixed sewage and stormwater to receiving waters when a combined system is overloaded." },
            ],
            examQuestions: [
              {
                q: "Describe a sewerage system with its network hierarchy and pumping stations. Give the self-cleansing criteria, the design peak factor, and the choice between separate and combined sewers with their advantages.",
                marks: 7,
                outline: [
                  "Describe hierarchy: building sewer - lateral - sub-main - trunk - plant.",
                  "State gravity-led flow with pumping at low points.",
                  "State self-cleansing: 0.6 m/s at average, 0.9 m/s at peak, 3 m/s maximum.",
                  "Give peak factor 2.0 to 3.0 times average dry-weather flow.",
                  "Describe separate sewers: two networks, plant sized to dry-weather flow.",
                  "Describe combined sewers: one network, CSO risk, legacy in old cities.",
                  "Cite CPHEEO manual, IS 1742 and IS 7758 as governing codes.",
                ],
              },
              {
                q: "Define self-cleansing velocity and state its limits.",
                marks: 2,
              },
              {
                q: "List any three differences between separate and combined sewerage.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Primary and secondary treatment: ASP and trickling filter",
            body: [
              "Primary treatment removes settleable and floatable solids from raw sewage by screening, grit removal and plain sedimentation. Screens trap rags and plastics, grit chambers capture sand and gravel at a velocity of 0.3 metres per second that keeps organics in suspension, and primary sedimentation tanks remove 50 to 60 per cent of suspended solids and 30 to 40 per cent of BOD in a detention time of 1.5 to 2 hours at a surface overflow rate of 25 to 35 cubic metres per square metre per day. The settled primary sludge is sent to digestion; the effluent flows to secondary treatment.",
              "The activated sludge process is the dominant secondary treatment. Aeration tanks hold the wastewater mixed with return activated sludge for 4 to 8 hours, with diffused or mechanical aeration supplying oxygen to the aerobic heterotrophic biomass. The food-to-microorganism ratio F/M, typically 0.2 to 0.5 kg BOD per kg MLSS per day, controls the loading; the mixed-liquor suspended solids MLSS of 1500 to 3000 mg per litre controls the biomass inventory. The sludge recirculation ratio of 0.25 to 0.5 returns settled sludge from the secondary clarifier. The process removes 85 to 95 per cent of BOD but generates surplus sludge that needs wasting.",
              "The trickling filter is the older attached-growth alternative. Wastewater is distributed over a bed of stone or plastic media coated with a biofilm; as it trickles down, the biofilm oxidises the organic matter. Standard-rate filters load 0.1 to 0.4 kg BOD per cubic metre per day of media and recirculate little; high-rate filters load 0.4 to 1.0 kg BOD per cubic metre per day with 1 to 3 recirculation ratios. Trickling filters consume less energy than activated sludge but need more land and produce a slightly lower effluent quality. The choice turns on energy cost, land availability, operator skill and the desired BOD removal.",
            ],
            bullets: [
              "Primary treatment: screening, grit removal, plain sedimentation.",
              "Grit chamber: 0.3 m/s velocity, retains sand, lets organics pass.",
              "Primary sedimentation: 25 to 35 m3/m2/d, 1.5 to 2 h detention, removes 30 to 40 per cent BOD.",
              "Activated sludge: F/M 0.2 to 0.5, MLSS 1500 to 3000 mg/L, 4 to 8 h aeration, 85 to 95 per cent BOD removal.",
              "Return activated sludge ratio 0.25 to 0.5; surplus sludge is wasted.",
              "Trickling filter: standard rate 0.1 to 0.4 kg BOD/m3/d; high rate 0.4 to 1.0 with recirculation.",
              "ASP higher energy, lower land; trickling filter lower energy, more land.",
            ],
            codeExample: {
              language: "python",
              caption: "Activated sludge aeration tank sizing from BOD load and design F/M ratio.",
              code: `# Activated sludge aeration tank sizing from BOD load and design F/M ratio
Q = 10000          # m3/day influent flow
BOD_in = 250       # mg/L influent BOD
BOD_eff = 20       # mg/L target effluent BOD (after secondary clarifier)

MLSS = 2500        # mg/L target mixed-liquor suspended solids
FM = 0.3           # kg BOD applied per kg MLSS per day
RAS_ratio = 0.40   # return activated sludge ratio

# 1. BOD load applied to aeration tank
BOD_load = Q * (BOD_in / 1000.0)     # kg/day (since mg/L * m3 = g)
print(f"BOD load applied: {BOD_load:.1f} kg/day")

# 2. Required MLSS inventory
M = BOD_load / FM                    # kg
print(f"Required MLSS inventory: {M:.1f} kg")

# 3. Aeration tank volume
V = M / (MLSS / 1000.0)              # m3
print(f"Aeration tank volume: {V:.1f} m3")

# 4. Hydraulic retention time
HRT = V / Q * 24                     # hours
print(f"Hydraulic retention time: {HRT:.2f} h")

# 5. Return sludge flow
Q_RAS = RAS_ratio * Q
print(f"Return activated sludge flow: {Q_RAS:.1f} m3/d")

# 6. Estimated BOD removal
BOD_removal = (BOD_in - BOD_eff) / BOD_in * 100
print(f"Estimated BOD removal: {BOD_removal:.1f} per cent")
`,
            },
            diagram: {
              kind: "cycle",
              title: "The activated sludge cycle",
              caption:
                "Influent, aeration, settling, return and waste - the loop that maintains the biomass inventory.",
              steps: [
                { label: "Influent to aeration tank", note: "primary effluent" },
                { label: "Aerobic aeration 4 to 8 h", note: "F/M 0.2 to 0.5, MLSS 1500 to 3000 mg/L" },
                { label: "Secondary clarifier", note: "settle biomass, 1.5 to 2 h detention" },
                { label: "Return activated sludge", note: "ratio 0.25 to 0.5" },
                { label: "Waste sludge to digestion", note: "maintains steady MLSS" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always quote F/M, MLSS and the recirculation ratio",
              body: "An ASP answer without the three control numbers reads as a description, not a design. Memorise F/M 0.2 to 0.5, MLSS 1500 to 3000 mg/L and recirculation ratio 0.25 to 0.5, and pair them with the 4 to 8 hour aeration and 85 to 95 per cent BOD removal to claim the full marks.",
            },
            keyTerms: [
              { term: "Activated sludge process", definition: "An aerobic suspended-growth secondary treatment where a biomass of heterotrophs is recirculated to oxidise BOD." },
              { term: "F/M ratio", definition: "The food-to-microorganism ratio: kg BOD applied per kg MLSS per day, typically 0.2 to 0.5." },
              { term: "Trickling filter", definition: "An attached-growth secondary treatment where wastewater trickles over a biofilm-coated media." },
            ],
            examQuestions: [
              {
                q: "Describe the primary treatment of sewage and the activated sludge process with design parameters. Compare ASP with the trickling filter in terms of loading, energy, land and effluent quality.",
                marks: 7,
                outline: [
                  "Primary treatment: screening, grit chamber, primary sedimentation with 25 to 35 m3/m2/d and 1.5 to 2 h.",
                  "State removals: 50 to 60 per cent SS, 30 to 40 per cent BOD in primary.",
                  "Describe ASP: aeration 4 to 8 h, F/M 0.2 to 0.5, MLSS 1500 to 3000 mg/L.",
                  "Give recirculation ratio 0.25 to 0.5 and 85 to 95 per cent BOD removal.",
                  "Describe trickling filter: standard rate 0.1 to 0.4 kg BOD/m3/d; high rate 0.4 to 1.0 with recirculation.",
                  "Compare energy, land, operator skill and effluent quality.",
                  "Conclude with the choice criteria: energy cost, land availability, BOD target.",
                ],
              },
              {
                q: "State the design F/M ratio and MLSS range for the activated sludge process.",
                marks: 2,
              },
              {
                q: "List any three differences between ASP and trickling filter.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "UASB and MBR secondary treatment variants",
            body: [
              "The Upflow Anaerobic Sludge Blanket reactor, abbreviated UASB, is the workhorse of warm-climate anaerobic secondary treatment. Wastewater enters at the bottom and rises through a dense blanket of granular sludge at 5 to 15 kg COD per cubic metre per day organic loading, with a hydraulic retention time of 6 to 10 hours. The biomass converts 65 to 80 per cent of the COD to biogas - a methane-rich mix of 60 to 75 per cent CH4 - which is captured in the gas-solid-liquid separator at the top. UASB operates without oxygen, consumes little energy, and produces biogas; it produces a relatively poor effluent needing polishing.",
              "The Membrane Bioreactor, MBR, combines the activated sludge process with submerged or external microfiltration or ultrafiltration membranes. The membrane replaces the secondary clarifier, decoupling the solids retention time from the hydraulic retention time and allowing MLSS to be raised to 8000 to 12000 mg per litre. The result is a very high quality effluent with BOD below 5 mg per litre, total suspended solids below 1 mg per litre, and effective removal of bacteria and protozoa. The trade-offs are membrane fouling, higher energy for scouring air, periodic chemical cleaning, and higher capital cost - the right price for reuse-grade effluent in a small footprint.",
              "UASB and MBR occupy opposite ends of the secondary treatment spectrum. UASB is low-energy, low-cost, suited to high-strength warm wastewater in tropical cities, with biogas as a co-benefit; the Kanpur and Delhi UASB plants are flagship Indian examples. MBR is high-energy, high-quality, suited to space-constrained sites where the effluent is destined for reuse; the Pune and Bangalore MBRs serve industrial parks and urban horticulture. The choice between them, and alongside ASP and trickling filters, follows the matrix of influent strength, climate, land, energy cost, reuse intent and operator skill.",
            ],
            bullets: [
              "UASB: upflow anaerobic sludge blanket, granular sludge, 6 to 10 h HRT.",
              "Organic loading 5 to 15 kg COD/m3/d; COD removal 65 to 80 per cent.",
              "Biogas yield 60 to 75 per cent methane; captured in gas-solid-liquid separator.",
              "MBR: activated sludge plus submerged or external UF membrane, replaces clarifier.",
              "MLSS raised to 8000 to 12000 mg/L; effluent BOD below 5 mg/L, TSS below 1 mg/L.",
              "MBR trade-offs: membrane fouling, scouring air, chemical cleaning, higher capital cost.",
              "Kanpur and Delhi UASB plants; Pune and Bangalore MBRs for industrial parks.",
            ],
            table: {
              caption: "UASB versus MBR for secondary treatment.",
              headers: ["Parameter", "UASB", "MBR"],
              rows: [
                ["Process type", "Anaerobic suspended", "Aerobic membrane"],
                ["Energy demand", "Very low", "High (scouring air)"],
                ["Loading", "5 to 15 kg COD/m3/d", "F/M 0.1 to 0.3, MLSS 8000 to 12000"],
                ["Effluent BOD", "60 to 100 mg/L (needs polishing)", "Below 5 mg/L"],
                ["Footprint", "Moderate", "Compact"],
                ["Co-benefit", "Biogas (60 to 75 per cent CH4)", "Reuse-grade effluent"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Secondary treatment choice by influent and reuse intent",
              caption:
                "Pick UASB for warm strong waste; MBR when reuse is the goal and land is tight.",
              start: "Primary effluent entering secondary treatment",
              branches: [
                { label: "warm, high-strength, biogas wanted", outcome: "UASB reactor with polishing pond; Kanpur and Delhi model", good: true },
                { label: "reuse intent, tight footprint, higher budget", outcome: "MBR with submerged UF; Pune and Bangalore model", good: true },
                { label: "conventional city, low reuse", outcome: "ASP or trickling filter - the default choice", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "UASB effluent always needs polishing",
              body: "A frequent slip is to present UASB as a standalone solution. Its effluent at 60 to 100 mg/L BOD does not meet discharge standards; a polishing step - facultative aerated lagoon, duckweed pond or final sand filter - is mandatory. Always pair UASB with its polishing stage in the answer.",
            },
            keyTerms: [
              { term: "UASB", definition: "Upflow Anaerobic Sludge Blanket reactor: a high-rate anaerobic treatment using a granular sludge blanket." },
              { term: "Membrane bioreactor (MBR)", definition: "A process combining activated sludge with microfiltration or ultrafiltration membranes for reuse-grade effluent." },
              { term: "Gas-solid-liquid separator", definition: "The three-phase device at the top of a UASB that separates biogas, sludge and treated effluent." },
            ],
            examQuestions: [
              {
                q: "Describe the UASB reactor and the Membrane Bioreactor with their design parameters, effluent quality, advantages and limitations. State when each is the preferred secondary treatment.",
                marks: 7,
                outline: [
                  "Describe UASB: upflow, granular sludge blanket, 6 to 10 h HRT.",
                  "Give UASB loading 5 to 15 kg COD/m3/d and 65 to 80 per cent COD removal.",
                  "Note biogas 60 to 75 per cent CH4 captured in gas-solid-liquid separator.",
                  "Cite Indian examples: Kanpur and Delhi UASB plants.",
                  "Describe MBR: activated sludge plus submerged or external UF, replaces clarifier.",
                  "Give MBR MLSS 8000 to 12000 mg/L, effluent BOD below 5 mg/L, TSS below 1 mg/L.",
                  "Compare: UASB low-energy, needs polishing; MBR high-energy, reuse-grade, compact.",
                ],
              },
              {
                q: "Why does a UASB effluent need a polishing step?",
                marks: 2,
              },
              {
                q: "State the MLSS range and effluent BOD of an MBR.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Tertiary treatment: nutrient removal and membrane processes",
            body: [
              "Tertiary treatment polishes secondary effluent to remove residual organics, suspended solids, nutrients and dissolved salts that secondary treatment cannot address. The driver is increasingly the discharge standard for nitrogen and phosphorus to prevent eutrophication of receiving waters, and the intent to reuse the water for industrial, agricultural or urban purposes. The tertiary toolkit splits into nutrient removal processes, depth and membrane filtration, and advanced oxidation.",
              "Nutrient removal targets nitrogen and phosphorus. Nitrogen is removed by nitrification - the aerobic oxidation of ammonia to nitrite then nitrate by Nitrosomonas and Nitrobacter - followed by denitrification, the anoxic reduction of nitrate to nitrogen gas by heterotrophs using the BOD of the wastewater as carbon source. Phosphorus is removed biologically through polyphosphate-accumulating organisms in an anaerobic-aerobic sequence, or chemically by precipitation with alum, ferric chloride or lime. The combined processes deliver effluent total nitrogen below 10 mg per litre and total phosphorus below 1 mg per litre when designed tightly.",
              "Membrane processes separate dissolved constituents by size and pressure. Microfiltration and ultrafiltration remove suspended solids, bacteria and some viruses at trans-membrane pressures of 0.1 to 2 bar. Nanofiltration softens water and removes multivalent ions and dissolved organics at 3 to 10 bar. Reverse osmosis removes monovalent ions and dissolved salts at 10 to 80 bar. MBR effluent can be fed directly to RO for indirect potable reuse; the NEWater plants of Singapore, reusing sewage for drinking-water augmentation, are the global benchmark. Indian pilots in Chennai and Nagpur follow the same sequence for industrial and urban reuse.",
            ],
            bullets: [
              "Tertiary treatment removes residual organics, SS, nutrients and dissolved salts.",
              "Nitrification: aerobic ammonia to nitrite to nitrate by Nitrosomonas and Nitrobacter.",
              "Denitrification: anoxic nitrate to nitrogen gas, uses wastewater BOD as carbon source.",
              "Biological phosphorus removal via polyphosphate-accumulating organisms in anaerobic-aerobic sequence.",
              "Chemical phosphorus removal by alum, ferric chloride or lime precipitation.",
              "UF pressure 0.1 to 2 bar; nanofiltration 3 to 10 bar; reverse osmosis 10 to 80 bar.",
              "Singapore NEWater is the global benchmark for indirect potable reuse.",
            ],
            codeExample: {
              language: "python",
              caption: "Estimate RO permeate recovery and concentrate TDS for a reuse train.",
              code: `# Estimate RO permeate recovery and concentrate TDS for a reuse train
feed_flow = 1000        # m3/day secondary effluent to RO
feed_TDS = 1200         # mg/L TDS of secondary effluent
recovery = 0.75         # fraction of feed recovered as permeate
salt_rejection = 0.97   # 97 per cent of salts rejected by the membrane

permeate_flow = feed_flow * recovery
concentrate_flow = feed_flow - permeate_flow
permeate_TDS = feed_TDS * (1 - salt_rejection)
salt_in_concentrate = feed_flow * feed_TDS * salt_rejection / 1000.0   # kg/d
concentrate_TDS = salt_in_concentrate / concentrate_flow * 1000.0       # mg/L

print(f"Permeate flow: {permeate_flow:.1f} m3/d at TDS {permeate_TDS:.1f} mg/L")
print(f"Concentrate flow: {concentrate_flow:.1f} m3/d at TDS {concentrate_TDS:.1f} mg/L")
print(f"Permeate is {permeate_TDS:.0f} mg/L TDS - within reuse and drinking-water range")
# Concentrate TDS is the figure to compare against discharge standards before disposal.
`,
            },
            diagram: {
              kind: "layers",
              title: "The membrane separation stack",
              caption:
                "Each layer rejects smaller constituents at higher pressure - from microfiltration up to RO.",
              layers: [
                { label: "Reverse osmosis", note: "10 to 80 bar; rejects monovalent ions and salts" },
                { label: "Nanofiltration", note: "3 to 10 bar; softens, removes organics" },
                { label: "Ultrafiltration", note: "0.5 to 2 bar; removes viruses and colloids" },
                { label: "Microfiltration", note: "0.1 to 0.5 bar; removes bacteria and SS" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always pair nitrification with denitrification",
              body: "Nitrification alone converts ammonia to nitrate but does not remove nitrogen from the system. The student who states 'nitrification followed by denitrification under anoxic conditions, using wastewater BOD as the carbon source' captures both the biology and the carbon economy, and earns the full marks.",
            },
            keyTerms: [
              { term: "Nitrification", definition: "The aerobic biological oxidation of ammonia to nitrite then nitrate by Nitrosomonas and Nitrobacter." },
              { term: "Denitrification", definition: "The anoxic biological reduction of nitrate to nitrogen gas, using wastewater BOD as the carbon source." },
              { term: "Reverse osmosis", definition: "A high-pressure membrane process, 10 to 80 bar, that removes dissolved salts from water." },
            ],
            examQuestions: [
              {
                q: "Explain tertiary treatment of wastewater. Describe biological nutrient removal for nitrogen and phosphorus, and the membrane processes of UF, NF and RO with their pressures and applications.",
                marks: 7,
                outline: [
                  "Define tertiary treatment as polishing secondary effluent for discharge or reuse.",
                  "Nitrogen removal: nitrification (aerobic, Nitrosomonas/Nitrobacter) then denitrification (anoxic, BOD as carbon).",
                  "Phosphorus removal: biological via PAOs in anaerobic-aerobic sequence or chemical by alum/ferric/lime.",
                  "State effluent targets: TN below 10 mg/L, TP below 1 mg/L.",
                  "Microfiltration/ultrafiltration: 0.1 to 2 bar, removes bacteria and viruses.",
                  "Nanofiltration 3 to 10 bar; reverse osmosis 10 to 80 bar removes monovalent ions.",
                  "Cite Singapore NEWater and Indian pilots in Chennai and Nagpur for indirect potable reuse.",
                ],
              },
              {
                q: "Distinguish between nitrification and denitrification.",
                marks: 2,
              },
              {
                q: "List the four membrane processes in order of pressure and the constituent each removes.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Wastewater reuse and decentralized treatment",
            body: [
              "Wastewater reuse closes the urban water cycle. Treated effluent replaces fresh water for low-grade uses, releases upstream fresh water for high-grade uses, and reduces discharge load on receiving waters. The reuse spectrum is graded by quality: industrial reuse for cooling towers and boiler feed; agricultural reuse for irrigation of non-edible and fodder crops; urban reuse for horticulture, vehicle washing, fire-fighting and construction; aquifer recharge via infiltration basins or injection wells for indirect potable reuse; and direct potable reuse, the most stringent, practised only in Windhoek and a few advanced plants.",
              "Quality requirements rise with the use. Industrial cooling requires BOD below 10 mg per litre and low suspended solids; agricultural irrigation demands helminth egg counts below 1 per litre to protect farmers; urban reuse needs tertiary filtration and disinfection with a residual chlorine above 1 mg per litre; indirect potable reuse via aquifer recharge requires RO plus advanced oxidation plus activated carbon to remove trace organics and pharmaceuticals. Indian reuse guidelines under the National Mission for Clean Ganga specify quality for each end use, and the CPCB has notified discharge standards for treated effluent.",
              "Decentralised treatment places compact plants close to the source of generation - a residential colony, a school, a market, an industrial park - avoiding the cost of long sewer networks and enabling local reuse. Package plants based on extended aeration, sequencing batch reactors or MBRs serve populations from a few hundred to a few thousand. Decentralised systems are well suited to peri-urban layouts, hill towns and the fringes of metropolitan areas where trunk sewers are absent. Their success depends on a clear operations and maintenance contract; the common failure mode is the plant that runs well for the first year and then degrades because no one owns the long-term O and M.",
            ],
            bullets: [
              "Reuse spectrum: industrial cooling, agricultural irrigation, urban horticulture, aquifer recharge, potable.",
              "Industrial cooling requires BOD below 10 mg/L and low suspended solids.",
              "Agricultural irrigation requires helminth egg count below 1 per litre for farmer safety.",
              "Urban reuse: tertiary filtration plus disinfection, residual chlorine above 1 mg/L.",
              "Indirect potable reuse via recharge requires RO plus advanced oxidation plus activated carbon.",
              "Singapore NEWater and Windhoek direct potable are the global benchmarks.",
              "Decentralised plants: extended aeration, SBR, MBR; serve a colony or industrial park locally.",
            ],
            table: {
              caption: "Reuse applications with quality requirements.",
              headers: ["Reuse type", "Quality required", "Treatment train"],
              rows: [
                ["Industrial cooling", "BOD < 10, low SS", "Secondary plus tertiary filtration"],
                ["Agriculture", "Helminth eggs < 1/L", "Secondary plus maturation ponds"],
                ["Urban horticulture", "Tertiary + disinfection", "Secondary plus sand filter + chlorine"],
                ["Aquifer recharge", "RO + AOP + GAC", "MBR plus RO plus advanced oxidation"],
                ["Direct potable", "Drinking water spec", "Multiple barriers, Windhoek model"],
                ["Construction dust control", "Low solids", "Secondary effluent, no extra step"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Reuse quality against end-use risk",
              caption:
                "The further to the top-right, the higher the treatment barrier required.",
              axes: { x: "End-use risk", y: "Quality required" },
              quadrants: [
                { label: "Construction, dust control", note: "low quality, low risk" },
                { label: "Indirect potable recharge", note: "high quality, high risk" },
                { label: "Industrial cooling", note: "moderate quality, low risk" },
                { label: "Agricultural irrigation", note: "moderate quality, moderate risk" },
              ],
            },
            callout: {
              type: "warning",
              title: "Decentralised plants fail on O and M, not design",
              body: "A common exam and field error is to praise decentralised plants on capital cost alone. Their failure mode is operations: the contractor delivers a working plant, then no one owns the multi-year O and M contract. Always pair the design with a 5-to-15-year O and M arrangement backed by a clear operator, or the plant will degrade.",
            },
            keyTerms: [
              { term: "Indirect potable reuse", definition: "Reuse of highly treated wastewater to augment drinking-water sources via aquifer recharge or reservoir augmentation." },
              { term: "Helminth egg", definition: "An indicator organism for parasitic worms in treated effluent used for agricultural irrigation." },
              { term: "Decentralised treatment", definition: "Compact treatment plants placed close to the source, serving a colony, institution or industrial park for local reuse." },
            ],
            examQuestions: [
              {
                q: "Explain wastewater reuse with the spectrum of end uses and the quality required for each. Discuss decentralised treatment, its suitability and the common failure mode.",
                marks: 7,
                outline: [
                  "List the reuse spectrum: industrial, agricultural, urban, aquifer recharge, potable.",
                  "State quality for industrial cooling: BOD below 10 mg/L.",
                  "State quality for agriculture: helminth eggs below 1 per litre.",
                  "State urban reuse: tertiary filtration plus disinfection, residual above 1 mg/L.",
                  "State indirect potable: RO plus advanced oxidation plus activated carbon; cite NEWater.",
                  "Define decentralised treatment: package plants serving colonies, schools, industrial parks.",
                  "State the failure mode: weak O and M contracts; recommend 5 to 15 year contracts.",
                ],
              },
              {
                q: "Why is helminth egg count monitored for agricultural reuse?",
                marks: 2,
              },
              {
                q: "List any three reuse applications with their quality requirement.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ============== UNIT IV - STORMWATER AND FLOOD MANAGEMENT ==============
    {
      number: 4,
      roman: "IV",
      title: "Stormwater and Flood Management",
      summary:
        "The hydraulics of urban rain: separate versus combined drainage systems, stormwater characteristics and BMPs of permeable pavement and rain gardens, structural flood management with embankments and reservoirs, non-structural measures of forecasting and zoning, and the urban-flood problem with causes, mitigation and sponge-city concepts.",
      chapter: {
        number: "04",
        title: "Stormwater and Flood Management",
        intro:
          "Unit IV builds the stormwater and flood machinery: the choice between separate and combined urban drainage, the characteristics of stormwater runoff, the BMPs of permeable pavement, rain gardens and retention-detention ponds that detain and treat runoff at source, the structural flood arsenal of embankments, reservoirs and channelisation, the non-structural stack of forecasting, flood zoning and insurance, and the urban-flood diagnosis that drives sponge-city concepts.",
        inOneBreath:
          "Urban drainage is separate or combined; stormwater is computed by the rational method Q = 0.28 C i A; BMPs detain and treat at source via permeable pavement, rain gardens, retention and detention ponds, green roofs and bioswales; structural flood measures raise embankments, moderate floods with reservoirs, and speed conveyance by channelisation; non-structural measures forecast with hydrological models, zone the floodplain to limit damage, and insure residual risk; and urban flooding is caused by impervious expansion, lost water bodies and choked drains - mitigated by the sponge-city concept of permeable surfaces, restored wetlands and decentralised storage.",
        sections: [
          {
            number: "4.1",
            title: "Urban drainage: separate versus combined systems",
            body: [
              "Urban drainage collects and conveys stormwater runoff from rainfall on the built environment. Two systems are practised. The combined sewer carries sanitary sewage and stormwater in the same pipe, common in the older cores of Mumbai, Kolkata and Chennai; it is economical per kilometre of pipe but overloads the treatment plant in wet weather, discharging combined sewer overflows to receiving waters. The separate sewer uses two distinct networks - a sanitary sewer for dry-weather flow and a stormwater drain for rainfall runoff - keeping the treatment plant sized to dry-weather flow and protecting water quality, at the cost of two pipe networks.",
              "Stormwater is computed by the rational method, in which the peak discharge Q in cubic metres per second equals 0.28 times the runoff coefficient C, the rainfall intensity i in millimetres per hour, and the catchment area A in square kilometres. The runoff coefficient C captures the fraction of rainfall that becomes runoff: 0.1 to 0.3 for parks and open soil, 0.5 to 0.7 for residential lots, and 0.7 to 0.9 for dense commercial and industrial pavements. The time of concentration, the longest travel time from the catchment boundary to the design point, sets the rainfall duration used to read the intensity from an intensity-duration-frequency curve.",
              "Design recurrence intervals are 1 to 5 years for minor systems (the underground pipe network that carries routine storms), 5 to 10 years for the major system (the overland flow paths that carry extreme storms), and 50 to 100 years for river-training works. The shift to separate systems, especially in new urban developments, is the contemporary Indian practice, paired with BMPs at source to attenuate the peak and treat the first flush. The CPHEEO manual on stormwater drainage and IS 7784 govern design.",
            ],
            bullets: [
              "Combined sewer: sanitary and storm in one pipe; overflows in wet weather (CSO).",
              "Separate sewer: two networks; treatment plant sized to dry-weather flow.",
              "Rational method: Q = 0.28 x C x i x A, with Q in m3/s.",
              "Runoff coefficient C: 0.1 to 0.3 open, 0.5 to 0.7 residential, 0.7 to 0.9 commercial.",
              "Time of concentration sets the duration used to read intensity from an IDF curve.",
              "Recurrence: minor 1 to 5 yr, major 5 to 10 yr, river training 50 to 100 yr.",
              "CPHEEO stormwater manual and IS 7784 govern Indian drainage design.",
            ],
            table: {
              caption: "Design recurrence intervals for urban drainage components.",
              headers: ["System", "Component", "Recurrence (years)"],
              rows: [
                ["Minor", "Underground pipe network", "1 to 5"],
                ["Major", "Overland flow paths", "5 to 10"],
                ["Mid", "Roadside open drains", "2 to 10"],
                ["River training", "Embankments and channels", "50 to 100"],
                ["Storage", "Detention ponds", "10 to 25"],
                ["BMPs at source", "Permeable pavement, rain gardens", "1 to 2 (frequent storms)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Rational method workflow",
              caption:
                "Walk the catchment from coefficient to peak discharge - the universal urban-drainage calculation.",
              steps: [
                { label: "Catchment area A (sq km)", note: "from survey or GIS" },
                { label: "Runoff coefficient C", note: "weighted by land use" },
                { label: "Time of concentration", note: "longest travel time to design point" },
                { label: "Intensity i from IDF curve", note: "return period chosen" },
                { label: "Peak Q = 0.28 C i A", note: "design discharge" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the rational formula with units",
              body: "Q = 0.28 C i A is the formula examiners expect, with Q in cubic metres per second, i in millimetres per hour and A in square kilometres. State the units alongside the formula; a unit slip on i or A loses the calculation mark even when the structure is right.",
            },
            keyTerms: [
              { term: "Combined sewer", definition: "A sewer carrying sanitary sewage and stormwater in the same pipe, common in older cities." },
              { term: "Runoff coefficient C", definition: "The fraction of rainfall that becomes runoff, varying by land use from 0.1 to 0.9." },
              { term: "Time of concentration", definition: "The longest travel time for water to flow from the catchment boundary to the design point." },
            ],
            examQuestions: [
              {
                q: "Compare combined and separate urban drainage systems. State the rational method for peak stormwater discharge with units, and discuss design recurrence intervals for minor, major and river-training systems.",
                marks: 7,
                outline: [
                  "Describe combined sewer: one pipe, CSO risk, older city cores.",
                  "Describe separate sewer: two networks, treatment sized to dry-weather flow.",
                  "State the rational formula Q = 0.28 x C x i x A with units (m3/s, mm/h, sq km).",
                  "Explain runoff coefficient C by land use: 0.1 to 0.3 open, 0.5 to 0.7 residential, 0.7 to 0.9 commercial.",
                  "Define time of concentration and its role in selecting intensity from an IDF curve.",
                  "State recurrence intervals: minor 1 to 5 yr, major 5 to 10 yr, river training 50 to 100 yr.",
                  "Cite CPHEEO manual and IS 7784 as governing codes; note shift to separate plus BMPs.",
                ],
              },
              {
                q: "State the rational formula with units for each variable.",
                marks: 2,
              },
              {
                q: "List runoff coefficients for three land-use types.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Stormwater characteristics and BMPs",
            body: [
              "Stormwater runoff from urban catchments carries a pollutant load picked up from roads, roofs and yards: sediments, oil and grease, heavy metals from tyre and brake wear, nutrients from lawn fertilisers, bacteria from pet waste, and trash. The first flush - the initial 5 to 10 millimetres of runoff - carries a disproportionate share of the pollutant load, often 50 to 70 per cent, because it washes the accumulated dry deposition. Treatment of stormwater therefore targets the first flush before it reaches the receiving water.",
              "Best Management Practices, BMPs, are the structural and non-structural measures that detain, infiltrate and treat stormwater at or near the source. Structural BMPs include permeable pavement that allows infiltration through the wearing surface, rain gardens and bioretention cells that filter runoff through engineered soil and vegetation, green roofs that detain rainfall on the building, bioswales that convey and infiltrate along linear corridors, and retention and detention ponds that hold runoff for gradual release. Detention ponds dry out between storms; retention ponds maintain a permanent pool for treatment and amenity.",
              "Design of BMPs follows the storage volume needed to capture the design storm - often the first 25 millimetres of rainfall - and the drawdown time of 24 to 72 hours that empties the storage before the next storm. Infiltration BMPs require soils with infiltration rates above 15 millimetres per hour and a clearance of 1 metre above the seasonal high water table. When arranged in a treatment train - permeable pavement discharging to a rain garden discharging to a detention pond - BMPs achieve 80 to 95 per cent sediment removal and 40 to 70 per cent nutrient removal, far better than any single end-of-pipe device.",
            ],
            bullets: [
              "Stormwater pollutants: sediments, oil and grease, heavy metals, nutrients, bacteria, trash.",
              "First flush: initial 5 to 10 mm carries 50 to 70 per cent of the pollutant load.",
              "BMPs: structural devices that detain, infiltrate and treat runoff at source.",
              "Permeable pavement: infiltrates through wearing surface to sub-base storage.",
              "Rain garden / bioretention: engineered soil and vegetation filter runoff.",
              "Detention ponds dry between storms; retention ponds maintain a permanent pool.",
              "Treatment train: permeable pavement to rain garden to detention pond removes 80 to 95 per cent sediment.",
            ],
            codeExample: {
              language: "python",
              caption: "Size a rain garden for a 200 sq m rooftop catchment using first-flush capture.",
              code: `# Size a rain garden for a 200 sq m rooftop catchment using first-flush capture
catchment_area = 200        # sq m of rooftop
design_capture = 0.025      # 25 mm first-flush depth = 0.025 m
runoff_coeff = 0.90         # roof coefficient
infiltration_rate = 0.020   # 20 mm/h soil infiltration
drawdown_hours = 48         # 48 h permitted drawdown

# 1. Runoff volume to capture
V = catchment_area * design_capture * runoff_coeff
print(f"Capture volume needed: {V:.2f} m3")

# 2. Rain garden area for 150 mm ponding depth + 300 mm soil storage
ponding = 0.15              # m
soil_storage = 0.30        # m
porosity = 0.35             # void ratio of engineered soil mix
effective_depth = ponding + soil_storage * porosity
area_needed = V / effective_depth
print(f"Effective storage depth: {effective_depth:.2f} m")
print(f"Rain garden area needed: {area_needed:.2f} sq m")

# 3. Check drawdown
drawdown_time = (ponding + soil_storage) / (infiltration_rate / 1000.0)
print(f"Estimated drawdown time: {drawdown_time:.1f} h (limit {drawdown_hours})")

# 4. Footprint ratio
ratio = area_needed / catchment_area * 100
print(f"Rain garden is {ratio:.1f} per cent of the rooftop catchment area")
`,
            },
            diagram: {
              kind: "pyramid",
              title: "The BMP treatment train pyramid",
              caption:
                "Pick the source BMP at the base; escalate upward only when the source BMP saturates.",
              tiers: [
                { label: "Detention or retention pond", note: "end-of-catchment storage and polishing" },
                { label: "Bioswale or green roof", note: "convey or building-scale detention" },
                { label: "Rain garden and permeable pavement", note: "source infiltration and filtration - the broad base" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always cite the first flush",
              body: "Examiners look for the first-flush concept: the initial 5 to 10 millimetres of runoff carry 50 to 70 per cent of the pollutant load. BMPs are sized to capture this first flush; stating this explicitly transforms a generic answer into a design-grade one.",
            },
            keyTerms: [
              { term: "First flush", definition: "The initial 5 to 10 mm of stormwater runoff that carries a disproportionate share of accumulated pollutants." },
              { term: "Bioretention cell", definition: "A landscaped depression with engineered soil and vegetation that filters stormwater through root zone and media." },
              { term: "Detention pond", definition: "A basin that temporarily stores stormwater and releases it gradually, drying out between storms." },
            ],
            examQuestions: [
              {
                q: "Explain the characteristics of urban stormwater with the first-flush concept. Describe the structural BMPs of permeable pavement, rain garden, bioswale and retention/detention pond, and the treatment-train design.",
                marks: 7,
                outline: [
                  "List stormwater pollutants: sediments, oil, heavy metals, nutrients, bacteria, trash.",
                  "Define first flush: 5 to 10 mm carries 50 to 70 per cent of pollutant load.",
                  "Permeable pavement: infiltrates through wearing surface to sub-base.",
                  "Rain garden and bioretention: engineered soil plus vegetation filter runoff.",
                  "Bioswale and green roof: convey and detain at corridor or building scale.",
                  "Retention vs detention pond: permanent pool vs dry-between-storms.",
                  "Treatment train: source to corridor to end-of-catchment removes 80 to 95 per cent sediment.",
                ],
              },
              {
                q: "Define the first flush of stormwater.",
                marks: 2,
              },
              {
                q: "List any three structural BMPs and the function of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Structural flood management",
            body: [
              "Structural flood management raises engineering works to confine, moderate or convey floodwaters. The classical arsenal comprises embankments, reservoirs and channelisation. Embankments, also called levees or bunds, are raised earth or concrete structures along a river that confine floodwater within the channel up to the design flood level; they protect the adjoining floodplain but raise water levels upstream and shift the problem downstream if not paired with storage. Reservoirs store floodwater during the peak and release it gradually after the storm, moderating the downstream hydrograph by peak shaving.",
              "Channelisation widens, deepens or lines a river channel to increase its conveyance and speed the passage of floodwater. Concrete lining raises velocities to 2 to 4 metres per second, preventing overbank spill but accelerating downstream peaks and scouring the next reach. Spillways and diversion channels move excess water around vulnerable reaches or into offline storage basins. The design flood for structural works is taken as the 1-in-50, 1-in-100 or 1-in-500 year event depending on the consequence of failure; urban protection typically targets 1-in-100.",
              "Indian practice illustrates each element. The Damodar Valley Corporation reservoirs moderate floods in the Damodar basin; the Yamuna and Gandak embankments protect Delhi and Bihar reaches; the Gorewada and Poondi reservoirs protect Nagpur and Chennai; and diversion channels such as the Buckingham Canal carry floodwater around vulnerable urban reaches. Each site balances capital cost, available land and the consequence of failure when the design flood is exceeded. Structural measures reduce the probability of flooding but cannot eliminate it - the residual risk above the design flood is what non-structural measures in the next section address.",
            ],
            bullets: [
              "Structural arsenal: embankments, reservoirs, channelisation, diversion channels.",
              "Embankments (levees, bunds): confine flood within channel up to design level.",
              "Reservoirs: peak shaving by storing flood and releasing gradually after storm.",
              "Channelisation: widen, deepen or line; concrete lining raises velocity to 2 to 4 m/s.",
              "Design flood: 1-in-50, 1-in-100 or 1-in-500 year event by consequence of failure.",
              "Urban protection typically targets 1-in-100 year flood.",
              "Indian examples: DVC reservoirs, Yamuna embankments, Buckingham Canal diversion.",
            ],
            table: {
              caption: "Structural flood measures with design and effect.",
              headers: ["Measure", "Function", "Design parameter", "Indian example"],
              rows: [
                ["Embankment", "Confine flood in channel", "Design flood level + freeboard", "Yamuna, Gandak"],
                ["Reservoir", "Store and release", "1-in-100 year flood routing", "Damodar, Poondi"],
                ["Channelisation", "Increase conveyance", "Velocity 2 to 4 m/s lined", "Tapi in Surat"],
                ["Diversion channel", "Bypass vulnerable reach", "Capacity of design flood", "Buckingham Canal"],
                ["Detention basin", "Offline storage", "Volume of flood surplus", "Gorewada, Nagpur"],
                ["Spillway", "Pass excess flow", "1-in-500 year safety", "Hirakud, Bhakra"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Structural measure choice by site constraint",
              caption:
                "Pick the measure that fits the site - reservoirs need storage; embankments need space.",
              start: "Design flood at the vulnerable reach",
              branches: [
                { label: "upstream storage available", outcome: "reservoir for peak shaving; flood routing by hydrograph", good: true },
                { label: "narrow floodplain, space available", outcome: "embankment with freeboard to confine the design flood", good: true },
                { label: "no storage, no space, dense city", outcome: "channelisation and diversion - residual risk remains", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Structural measures shift, not solve, floods",
              body: "An embankment that confines the design flood raises water levels upstream and shifts excess downstream; a channelised reach accelerates the peak to the next reach. Always state the residual risk above the design flood - it is the bridge to the non-structural measures of section 4.4.",
            },
            keyTerms: [
              { term: "Embankment", definition: "A raised earth or concrete structure along a river that confines floodwater within the channel up to a design level." },
              { term: "Peak shaving", definition: "The reduction of the peak of a flood hydrograph by storing inflow in a reservoir and releasing it gradually." },
              { term: "Channelisation", definition: "The widening, deepening or lining of a river channel to increase its flood conveyance." },
            ],
            examQuestions: [
              {
                q: "Describe structural flood management with embankments, reservoirs and channelisation. State the design flood concept and give Indian examples of each measure, with their limitations.",
                marks: 7,
                outline: [
                  "List the arsenal: embankments, reservoirs, channelisation, diversion.",
                  "Embankments: confine flood to design level with freeboard; example Yamuna.",
                  "Reservoirs: peak shaving by storing and releasing; example Damodar Valley.",
                  "Channelisation: widen, deepen, line to 2 to 4 m/s; example Tapi in Surat.",
                  "Define design flood: 1-in-50, 1-in-100 or 1-in-500 by consequence of failure.",
                  "Cite Indian examples: DVC, Gandak embankment, Buckingham Canal diversion.",
                  "State the limitation: structural measures shift and reduce but do not eliminate risk.",
                ],
              },
              {
                q: "Define peak shaving in flood routing.",
                marks: 2,
              },
              {
                q: "List any three structural flood measures with one Indian example each.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Non-structural flood management",
            body: [
              "Non-structural flood management reduces flood damage without constraining the flood itself. The toolkit comprises forecasting and warning, floodplain zoning, insurance, building codes, and emergency preparedness. Forecasting couples hydrological models of rainfall-runoff with hydraulic models of river routing to predict the stage and timing at vulnerable points, often 24 to 72 hours ahead; the Central Water Commission's flood-forecasting network covers over 300 stations on major Indian rivers and issues real-time bulletins in the monsoon.",
              "Floodplain zoning regulates land use on the floodplain so that high-value, high-occupancy uses are kept out of the most frequent flood zones. The classic three-band plan reserves the high-frequency band (frequent floods) for parks and agriculture, the medium-frequency band for low-density residential with flood-proofing, and the low-frequency band for high-density development. Building codes raise the plinth above the design flood level, require flood-proofing of utilities, and enforce elevated electricals. Insurance transfers residual risk: the farmer or householder pays a premium in exchange for compensation when flood damage exceeds a deductible.",
              "India's experience with non-structural measures has been mixed. The National Flood Commission, the Rashtriya Barh Ayog 1980, recommended zoning and insurance, but few states have notified floodplain zoning regulations. The Pradhan Mantri Fasal Bima Yojana now covers crop loss from floods in many states; the Restructured Weather-Based Crop Insurance Scheme covers excess rainfall. Disaster management under the Disaster Management Act 2005, with the NDMA at the centre and SDMAs at the state level, institutionalises emergency preparedness - the framework that ties forecasting to evacuation, relief and post-flood recovery.",
            ],
            bullets: [
              "Non-structural toolkit: forecasting, zoning, insurance, building codes, preparedness.",
              "Forecasting: hydrological plus hydraulic models predict stage 24 to 72 hours ahead.",
              "CWC network covers over 300 flood-forecasting stations on major Indian rivers.",
              "Floodplain zoning: high-frequency band for parks, medium for residential, low for dense.",
              "Building codes: plinth above design flood level, flood-proof utilities, elevated electricals.",
              "Crop insurance: PM Fasal Bima Yojana and RWBCIS cover flood and excess rainfall.",
              "Disaster Management Act 2005: NDMA at centre, SDMAs at states institutionalise preparedness.",
            ],
            codeExample: {
              language: "python",
              caption: "Issue a flood warning when the forecast river stage crosses alert and danger levels.",
              code: `# Issue a flood warning when the forecast river stage crosses alert and danger levels
station = "Yamuna at Delhi Old Railway Bridge"
alert_level = 204.5      # m above mean sea level - prepare for evacuation
danger_level = 205.5     # m - issue evacuation order
extreme_flood = 207.0    # m - unprecedented, emergency mode

# Forecast hydrograph: hours from now -> stage in m
forecast = [
    (0,   203.0),
    (6,   204.0),
    (12,  204.8),
    (18,  205.7),
    (24,  206.0),
    (30,  205.4),
    (36,  204.6),
    (48,  203.5),
]

def classify(stage):
    if stage >= extreme_flood:
        return "EXTREME FLOOD - emergency mode"
    if stage >= danger_level:
        return "DANGER - issue evacuation order"
    if stage >= alert_level:
        return "ALERT - prepare for evacuation"
    return "NORMAL - no action"

peak = max(forecast, key=lambda x: x[1])
warning = classify(peak[1])
print(f"Station: {station}")
print(f"Peak forecast: {peak[1]:.2f} m at +{peak[0]} h")
print(f"Warning level: {warning}")

# Walk the hydrograph and print first crossing of each threshold
for hr, st in forecast:
    print(f"  +{hr:>2} h: stage = {st:.2f} m -> {classify(st)}")
`,
            },
            diagram: {
              kind: "compare",
              title: "Structural versus non-structural flood management",
              caption:
                "Structural measures reduce flood probability; non-structural measures reduce flood damage.",
              left: {
                heading: "Structural measures",
                items: [
                  "Embankments, reservoirs, channelisation",
                  "Reduce probability of flooding",
                  "Capital-intensive, long life",
                  "Residual risk above design flood",
                  "Examples: DVC, Yamuna bund",
                ],
              },
              right: {
                heading: "Non-structural measures",
                items: [
                  "Forecasting, zoning, insurance, codes",
                  "Reduce damage when flooding occurs",
                  "Lower capital, institutional",
                  "Need legal and social acceptance",
                  "Examples: CWC forecasts, PMFBY",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Always pair structural with non-structural",
              body: "Examiners reward answers that explicitly bridge the two: structural measures reduce the probability of flooding, non-structural measures reduce the damage when floods exceed the design. State that the residual risk above the design flood is what non-structural measures address - the link from section 4.3 to 4.4.",
            },
            keyTerms: [
              { term: "Floodplain zoning", definition: "Regulation of land use on the floodplain to keep high-value, high-occupancy uses out of frequent flood zones." },
              { term: "Flood forecasting", definition: "Coupled hydrological and hydraulic modelling that predicts river stage and timing at vulnerable points." },
              { term: "Residual risk", definition: "The flood risk that remains above the design standard of structural measures, addressed by non-structural tools." },
            ],
            examQuestions: [
              {
                q: "Explain non-structural flood management with forecasting, floodplain zoning, insurance and building codes. Discuss the Indian institutional framework and the link to structural measures.",
                marks: 7,
                outline: [
                  "List the toolkit: forecasting, zoning, insurance, building codes, preparedness.",
                  "Forecasting: hydrological + hydraulic models; 24 to 72 h ahead; CWC network of 300+ stations.",
                  "Floodplain zoning: three bands - high frequency for parks, medium for low-density, low for dense.",
                  "Building codes: plinth above design flood, flood-proof utilities, elevated electricals.",
                  "Insurance: PMFBY and RWBCIS for crop loss; household schemes for assets.",
                  "Institutional: Disaster Management Act 2005; NDMA at centre, SDMAs at states.",
                  "Bridge to structural: residual risk above design flood is the rationale for non-structural.",
                ],
              },
              {
                q: "Distinguish between flood forecasting and floodplain zoning.",
                marks: 2,
              },
              {
                q: "List any three non-structural flood measures.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Urban flooding: causes, mitigation and sponge cities",
            body: [
              "Urban flooding is the inundation of built-up areas from rainfall that the drainage system cannot carry. The causes are familiar: rapid expansion of impervious surfaces (roofs, roads, pavements) that converts infiltration into runoff; loss of natural storage as lakes, tanks and wetlands are filled for construction; choking of drains by solid waste, silt and encroachments; under-design of stormwater networks for the changed land use; and intense convective rainfall events exacerbated by climate change. Indian cities - Mumbai in 2005, Chennai in 2015, Bengaluru in 2022 - illustrate the compound failure of these factors.",
              "Mitigation follows a four-part strategy. First, restore the lost blue-green infrastructure: desilt and reconnect lakes, revive nalas and wetlands, and protect them with buffer zones. Second, retrofit the drainage network: increase capacities to current land use, separate stormwater from sewage, and install pumping stations for tide-gated or low-relief outfalls. Third, manage stormwater at source through BMPs of permeable pavement, rain gardens and recharge structures, reducing the volume that ever reaches the drain. Fourth, build resilience through forecasting, early warning, flood-proofed critical infrastructure, and an informed citizenry.",
              "The sponge-city concept, developed in China from 2014, packages these measures into a citywide paradigm: a city that absorbs, stores, seeps and purifies rainwater like a sponge rather than shedding it through concrete drains. The sponge-city toolkit is 70 per cent of rainfall captured at source, 30 per cent reaching drains, with green roofs, permeable pavements, bioswales, rain gardens, wetland parks and underground storage tanks woven into the urban fabric. The Chinese pilots in Wuhan, Jinan and Chongqing are tracking measurable reductions in flood peaks; the approach is now being adapted to Indian cities under the Atal Mission for Rejuvenation and Urban Transformation (AMRUT) and the Smart Cities Mission.",
            ],
            bullets: [
              "Urban flooding causes: impervious expansion, lost water bodies, choked drains, under-design, intense rainfall.",
              "Mumbai 2005, Chennai 2015, Bengaluru 2022 - compound failure examples.",
              "Mitigation: restore blue-green, retrofit drainage, BMPs at source, build resilience.",
              "Lost lakes and wetlands must be desilted, reconnected and protected by buffer zones.",
              "Stormwater should be separated from sewage; pumping stations handle low-relief outfalls.",
              "Sponge city concept (China 2014): absorb, store, seep and purify at source.",
              "Indian adaptation via AMRUT and Smart Cities Mission.",
            ],
            table: {
              caption: "Urban flooding causes and mitigation pairing.",
              headers: ["Cause", "Effect", "Mitigation response"],
              rows: [
                ["Impervious expansion", "Runoff coefficient rises to 0.7+", "Permeable pavement, rain gardens"],
                ["Lost lakes and tanks", "Natural storage removed", "Restore and reconnect water bodies"],
                ["Choked drains", "Capacity halved by silt and waste", "Desilting and waste management"],
                ["Under-design", "Network sized for old land use", "Retrofit and separate networks"],
                ["Intense rainfall", "Convective storms overwhelm system", "Source BMPs, sponge-city approach"],
                ["Low-relief outfalls", "Tide-gated drainage fails", "Pumping stations at outfalls"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Urban flood mitigation pipeline",
              caption:
                "Four stages from diagnosis to resilience - the contemporary urban-flood playbook.",
              stages: [
                { label: "Diagnose the cause mix", note: "impervious area, lost lakes, drain choking" },
                { label: "Restore blue-green", note: "desilt and reconnect lakes and nalas" },
                { label: "Retrofit drainage", note: "increase capacity, separate storm, add pumps" },
                { label: "BMPs at source", note: "permeable pavement, rain gardens, recharge" },
                { label: "Build resilience", note: "forecast, warn, flood-proof critical assets" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always cite one Indian and one global example",
              body: "Examiners look for grounded examples. Cite one Indian urban flood - Mumbai 2005, Chennai 2015 or Bengaluru 2022 - and one global paradigm - the Chinese sponge city since 2014. The pair anchors the abstract causes and mitigation in real practice.",
            },
            keyTerms: [
              { term: "Urban flooding", definition: "Inundation of built-up areas from rainfall that the urban drainage system cannot convey, caused by impervious expansion and lost storage." },
              { term: "Sponge city", definition: "A citywide paradigm that absorbs, stores, seeps and purifies rainwater through green infrastructure rather than shedding it through concrete drains." },
              { term: "Blue-green infrastructure", definition: "The network of water bodies, wetlands and green spaces that provides natural flood storage and treatment in cities." },
            ],
            examQuestions: [
              {
                q: "Explain the causes of urban flooding with Indian examples. Describe the four-part mitigation strategy and the sponge-city concept, and state how it is being adapted in India.",
                marks: 7,
                outline: [
                  "List causes: impervious expansion, lost water bodies, choked drains, under-design, intense rainfall.",
                  "Cite Indian examples: Mumbai 2005, Chennai 2015, Bengaluru 2022.",
                  "Mitigation 1: restore blue-green infrastructure (desilt and reconnect lakes).",
                  "Mitigation 2: retrofit drainage (increase capacity, separate storm, add pumps).",
                  "Mitigation 3: BMPs at source (permeable pavement, rain gardens, recharge).",
                  "Mitigation 4: build resilience (forecasting, flood-proof critical assets, informed citizens).",
                  "Sponge city: China 2014, 70 per cent capture at source; Indian adaptation via AMRUT and Smart Cities.",
                ],
              },
              {
                q: "Define the sponge-city concept.",
                marks: 2,
              },
              {
                q: "List any three causes of urban flooding in India.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ============== UNIT V - GROUNDWATER, WATERSHED AND RAINWATER HARVESTING ==============
    {
      number: 5,
      roman: "V",
      title: "Groundwater, Watershed and Rainwater Harvesting",
      summary:
        "The closing frontier of integrated water management: groundwater occurrence and over-exploitation with managed aquifer recharge, the watershed concept with soil and water conservation measures, rooftop and surface rainwater harvesting with recharge structures, the Neeru-Meeru, Karnataka and Rajasthan case studies, and the future of desalination, water-energy nexus and climate resilience.",
      chapter: {
        number: "05",
        title: "Groundwater, Watershed and Rainwater Harvesting",
        intro:
          "Unit V closes the integrated water cycle: the occurrence of groundwater in confined and unconfined aquifers and the over-exploitation that has put 14 per cent of Indian blocks in the red; managed aquifer recharge as the engineered supplement; the watershed as the natural planning unit with check dams, contour bunding and gully control; rooftop, surface and recharge-structure rainwater harvesting; the Neeru-Meeru, Karnataka Watershed and Rajasthan case studies; and the future frontier of desalination, the water-energy nexus and climate resilience.",
        inOneBreath:
          "Groundwater occurs in unconfined and confined aquifers with porosity and specific yield determining storage; over-exploitation when extraction exceeds recharge affects 14 per cent of Indian blocks; managed aquifer recharge (MAR) supplements natural recharge through infiltration basins, injection wells and check dams; a watershed is the natural hydrological unit for soil and water conservation managed by check dams, contour bunding, gully control and vegetative measures; rainwater harvesting captures rooftop or surface runoff for direct use or recharge via pits, trenches and wells; Neeru-Meeru in Telangana, Karnataka Watershed and Rajasthan taankas are flagship case studies; and the future frontier is desalination, water-energy nexus and climate resilience.",
        sections: [
          {
            number: "5.1",
            title: "Groundwater: occurrence, recharge and over-exploitation",
            body: [
              "Groundwater is the subsurface water occupying the voids of soil and rock below the water table. An unconfined aquifer has a free water table as its upper boundary, recharged directly by rainfall percolation; a confined aquifer is bounded above and below by impermeable layers and is under pressure, so a well tapping it flows artesian if the head exceeds the ground level. The hydraulic properties that govern groundwater are porosity (the fraction of bulk volume that is void), specific yield (the fraction that drains under gravity) and hydraulic conductivity (the ease with which water moves through the medium, in metres per day).",
              "Recharge is the process by which water enters the saturated zone from the surface, by direct percolation of rainfall, by seepage from streams and canals, and by return flow from irrigation. Natural recharge in India averages about 433 billion cubic metres per year; it varies sharply by climate, geology and land use, with sandy alluvial plains recharging much faster than hard-rock peninsular areas. Estimation methods include the water-balance approach, the tritium injection method, the chloride mass balance, and the rising-water-table method monitored through observation wells by the Central Ground Water Board.",
              "Over-exploitation occurs when extraction exceeds recharge over a sustained period, causing a steady decline in water levels and a deterioration in quality. The 2022 CGWB assessment classified about 14 per cent of India's 6,500-plus assessment units as over-exploited, concentrated in Punjab, Haryana, Rajasthan, Delhi and western Uttar Pradesh - the heartland of the Green Revolution's tube-well economy. Consequences include drying of shallow wells, increased pumping costs, intrusion of saline water in coastal aquifers, and the abandonment of over-pumped blocks. The remedy combines supply augmentation (MAR, watershed works), demand management (drip irrigation, crop diversification), and regulation (notifying over-exploited blocks under the Environment Protection Act).",
            ],
            bullets: [
              "Unconfined aquifer: free water table; confined aquifer: bounded by impermeable layers, under pressure.",
              "Hydraulic properties: porosity, specific yield, hydraulic conductivity (m/day).",
              "Natural recharge averages 433 bcm per year in India.",
              "Recharge estimation: water balance, tritium, chloride mass balance, rising water table.",
              "CGWB monitors about 6,500 assessment units; 2022 assessment: 14 per cent over-exploited.",
              "Over-exploitation concentrated in Punjab, Haryana, Rajasthan, Delhi, western UP.",
              "Remedy: supply augmentation (MAR), demand management (drip), regulation (notified blocks).",
            ],
            table: {
              caption: "Hydraulic properties of typical aquifer materials.",
              headers: ["Material", "Porosity (per cent)", "Specific yield (per cent)", "K (m/day)"],
              rows: [
                ["Coarse gravel", "25 to 35", "20 to 28", "100 to 1000"],
                ["Coarse sand", "30 to 40", "20 to 30", "10 to 100"],
                ["Fine sand", "30 to 40", "10 to 20", "1 to 10"],
                ["Silt", "35 to 50", "1 to 5", "0.01 to 1"],
                ["Clay", "40 to 60", "0.1 to 1", "Below 0.001"],
                ["Sandstone (fractured)", "5 to 30", "5 to 15", "0.1 to 10"],
                ["Basalt (weathered)", "5 to 20", "1 to 8", "0.1 to 5"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From rainfall to groundwater - the recharge pathway",
              caption:
                "Each step partitions water; the residual percolating below the root zone recharges the aquifer.",
              steps: [
                { label: "Rainfall on the catchment", note: "annual average 1,170 mm in India" },
                { label: "Interception and evaporation", note: "loss to atmosphere, 20 to 40 per cent" },
                { label: "Surface runoff", note: "carried by drains and streams" },
                { label: "Root-zone ET and soil moisture", note: "transpiration by vegetation" },
                { label: "Deep percolation to aquifer", note: "natural recharge, 433 bcm nationally" },
              ],
            },
            callout: {
              type: "warning",
              title: "Over-exploitation has regional fingerprints",
              body: "A frequent slip is to treat over-exploitation as a uniform national problem. The 14 per cent of over-exploited blocks is concentrated in Punjab, Haryana, Rajasthan, Delhi and western UP - the tube-well heartland. Always name the regions to claim the geography marks; the alluvial plains and hard-rock peninsular areas behave very differently.",
            },
            keyTerms: [
              { term: "Unconfined aquifer", definition: "An aquifer with a free water table as its upper boundary, directly recharged by rainfall percolation." },
              { term: "Specific yield", definition: "The fraction of an aquifer's volume that drains under gravity, the volume actually available for pumping." },
              { term: "Over-exploited block", definition: "A CGWB assessment unit where annual groundwater extraction exceeds net recharge." },
            ],
            examQuestions: [
              {
                q: "Describe the occurrence of groundwater in unconfined and confined aquifers with hydraulic properties. Explain natural recharge and over-exploitation in India with the 2022 CGWB status and remedial measures.",
                marks: 7,
                outline: [
                  "Define unconfined and confined aquifers, water table and artesian flow.",
                  "Give hydraulic properties: porosity, specific yield, hydraulic conductivity with units.",
                  "Explain recharge sources: rainfall, stream seepage, canal seepage, irrigation return flow.",
                  "Cite national recharge of about 433 bcm and estimation methods.",
                  "State 2022 CGWB assessment: about 14 per cent of 6,500+ units over-exploited.",
                  "Name the regions: Punjab, Haryana, Rajasthan, Delhi, western UP.",
                  "List remedies: MAR, watershed works, drip irrigation, crop diversification, notified blocks.",
                ],
              },
              {
                q: "Distinguish between porosity and specific yield.",
                marks: 2,
              },
              {
                q: "List any three methods of groundwater recharge estimation.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Managed Aquifer Recharge (MAR)",
            body: [
              "Managed Aquifer Recharge, abbreviated MAR, is the deliberate engineered augmentation of groundwater recharge to supplement natural recharge. MAR serves three purposes: storing surplus surface water underground for later recovery, restoring depleted aquifers and reversing declining water levels, and improving water quality through the natural filtration of the vadose zone and aquifer matrix. The five principal MAR methods are infiltration basins, injection wells, percolation tanks, check dams and stream-channel modifications, each chosen by site geology, source water availability and intended use.",
              "Infiltration basins are shallow, flat, vegetated basins that receive treated surface water or stormwater and let it percolate through the vadose zone into the unconfined aquifer. Recharge rates of 0.3 to 3 metres per day are typical in sandy soils; basins require periodic drying and scraping to remove clogging layers. Injection wells pump treated water directly into a confined aquifer through a well, achieving recharge in settings where the confining layer prevents surface infiltration; recharge rates of 500 to 5,000 cubic metres per day per well are common, but water quality must be high to avoid aquifer clogging and contamination.",
              "Percolation tanks and check dams are smaller-scale MAR methods suited to hard-rock and semi-arid regions. A percolation tank is an earthen embankment across a small stream that impounds runoff and lets it percolate through the tank bed; a check dam is a low masonry or concrete wall across a gully or stream that slows flow and promotes infiltration. The Indira Gandhi Canal command area, the Saurashtra recharge movement in Gujarat, and the Maharashtra percolation tank programme are Indian flagship MAR initiatives. Design balances the available runoff, the percolation rate of the tank bed, and the aquifer transmissivity, so that the impounded water recharges the aquifer rather than evaporating.",
            ],
            bullets: [
              "MAR: deliberate engineered augmentation of groundwater recharge.",
              "Three purposes: storage for recovery, restoration of depleted aquifers, water quality improvement.",
              "Five methods: infiltration basins, injection wells, percolation tanks, check dams, stream modifications.",
              "Infiltration basins: 0.3 to 3 m/d recharge in sandy soils; periodic drying to remove clogging.",
              "Injection wells: 500 to 5,000 m3/d per well; high water quality required to prevent clogging.",
              "Percolation tanks and check dams suit hard-rock and semi-arid regions.",
              "Indian flagships: Indira Gandhi Canal, Saurashtra recharge, Maharashtra percolation tanks.",
            ],
            codeExample: {
              language: "python",
              caption: "Estimate recharge from a percolation tank over a monsoon month.",
              code: `# Estimate recharge from a percolation tank over a monsoon month
tank_area = 5000         # sq m water-spread area
infiltration_rate = 0.30 # m/d percolation rate of tank bed (sandy loam)
wet_days = 18            # days with standing water in the month
monthly_rain = 0.40      # m of rainfall on the tank in the month
evaporation = 0.15       # m of evaporation in the month
runoff_inflow = 12000    # m3 runoff into the tank in the month

# Water balance on the tank over the month
# Inflow: runoff + rainfall on tank
# Outflow: evaporation + infiltration
inflow = runoff_inflow + monthly_rain * tank_area
evap_vol = evaporation * tank_area
infilt_vol = infiltration_rate * wet_days * tank_area
outflow = evap_vol + infilt_vol
net = inflow - outflow

print(f"Inflow: runoff {runoff_inflow} m3 + rain {monthly_rain*tank_area:.0f} m3 = {inflow:.0f} m3")
print(f"Outflow: evap {evap_vol:.0f} m3 + infiltrate {infilt_vol:.0f} m3 = {outflow:.0f} m3")
print(f"Net change in storage: {net:.0f} m3")
print(f"Recharge to aquifer this month: {infilt_vol:.0f} m3")

# Aquifer-head response (rough): recharge area = 0.5 sq km, specific yield 0.15
sy = 0.15
area_aquifer = 500_000   # sq m
rise = infilt_vol / (area_aquifer * sy)
print(f"Estimated water-table rise: {rise*1000:.1f} mm over the month")
`,
            },
            diagram: {
              kind: "cycle",
              title: "The MAR cycle from source to recovery",
              caption:
                "Capture, treat, infiltrate or inject, store, recover - the closed loop of MAR.",
              steps: [
                { label: "Capture source water", note: "surface runoff, treated wastewater" },
                { label: "Pre-treatment", note: "settling, filtration, disinfection" },
                { label: "Infiltration or injection", note: "basin, well, check dam" },
                { label: "Aquifer storage and attenuation", note: "quality improves through vadose zone" },
                { label: "Recovery by pumping", note: "for irrigation or supply" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always pre-treat the source water",
              body: "A common slip is to present MAR as 'just dig a basin and let water in'. Source water must be pre-treated - settling, filtration and often disinfection - before infiltration or injection, especially for injection wells where aquifer clogging is irreversible. State the pre-treatment stage explicitly in any MAR design answer.",
            },
            keyTerms: [
              { term: "Managed Aquifer Recharge (MAR)", definition: "The deliberate engineered augmentation of groundwater recharge to store, restore or improve water." },
              { term: "Infiltration basin", definition: "A shallow vegetated basin that percolates treated surface water through the vadose zone into an unconfined aquifer." },
              { term: "Injection well", definition: "A well that pumps treated water directly into a confined aquifer where surface infiltration is prevented." },
            ],
            examQuestions: [
              {
                q: "Define Managed Aquifer Recharge and its purposes. Describe the methods of infiltration basins, injection wells, percolation tanks and check dams with their design parameters and Indian examples.",
                marks: 7,
                outline: [
                  "Define MAR and its three purposes: storage, restoration, quality.",
                  "Infiltration basins: 0.3 to 3 m/d in sandy soils; periodic drying to manage clogging.",
                  "Injection wells: 500 to 5,000 m3/d per well; high source water quality essential.",
                  "Percolation tanks: earthen embankment across small stream; suited to semi-arid hard-rock.",
                  "Check dams: low masonry wall across gully; slows flow and promotes infiltration.",
                  "Cite Indian flagships: Indira Gandhi Canal, Saurashtra, Maharashtra percolation tanks.",
                  "Note the pre-treatment requirement before infiltration or injection.",
                ],
              },
              {
                q: "Why is pre-treatment required for MAR injection wells?",
                marks: 2,
              },
              {
                q: "List any three MAR methods with one Indian example each.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Watershed management: concept and conservation measures",
            body: [
              "A watershed is the geographic area that drains to a common outlet - a stream, river or reservoir - bounded by the ridge line that separates it from neighbouring watersheds. Watershed management is the planned manipulation of one or more watershed attributes - vegetation, soil, water, land use - to achieve specific objectives such as increasing infiltration, reducing erosion, augmenting groundwater, improving agricultural productivity and restoring ecosystems. The unit is hydrological, the action integrated: a watershed plan addresses forests, farmland, grazing land, water bodies and settlements in one framework.",
              "Soil and water conservation measures fall into three families. Engineering measures include contour bunds (earthen embankments along contours to slow runoff), contour trenches (to trap runoff on slopes), check dams (low walls across gullies to arrest erosion and promote infiltration), gully control structures (loose-stone, gabion or drop structures that stabilise headcuts), and percolation tanks. Vegetative measures include grassed waterways, agroforestry, cover crops and vegetative barriers along contours. Agronomic measures include contour cultivation, strip cropping, mulching and crop rotation, which reduce splash erosion and improve soil structure.",
              "The economic and ecological dividends of watershed management are well documented in India. The Sukhomajri project in Haryana, initiated in the 1970s, restored a degraded watershed through check dams and social fencing, raising the water table and crop yields. The watershed programmes of the Ministry of Rural Development - Drought Prone Areas Programme, Desert Development Programme, and the Integrated Watershed Management Programme consolidated in 2009 - have treated over 50 million hectares. Watershed development has emerged as the principal rural water-security instrument of the country, integrating conservation, livelihoods and climate adaptation.",
            ],
            bullets: [
              "Watershed: geographic area draining to a common outlet, bounded by the ridge line.",
              "Watershed management: integrated manipulation of vegetation, soil, water and land use.",
              "Engineering measures: contour bunds, contour trenches, check dams, gully control, percolation tanks.",
              "Vegetative measures: grassed waterways, agroforestry, cover crops, vegetative barriers.",
              "Agronomic measures: contour cultivation, strip cropping, mulching, crop rotation.",
              "Sukhomajri project (Haryana, 1970s) is a flagship restoration case.",
              "MoRD programmes (DPAP, DDP, IWMP) have treated over 50 million hectares in India.",
            ],
            table: {
              caption: "Soil and water conservation measures and their purpose.",
              headers: ["Measure family", "Example", "Purpose"],
              rows: [
                ["Engineering", "Contour bund", "Slow runoff, promote infiltration"],
                ["Engineering", "Check dam", "Arrest gully erosion, recharge aquifer"],
                ["Engineering", "Gully control structure", "Stabilise headcut, prevent migration"],
                ["Vegetative", "Grassed waterway", "Convey runoff safely, prevent scour"],
                ["Vegetative", "Agroforestry", "Reduce splash, improve soil structure"],
                ["Agronomic", "Contour cultivation", "Reduce sheet erosion on slopes"],
                ["Agronomic", "Strip cropping", "Trap sediment, slow runoff"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The watershed conservation pyramid",
              caption:
                "Agronomic measures at the base; escalate to vegetative and engineering only when the base saturates.",
              tiers: [
                { label: "Engineering measures", note: "check dams, gully control, percolation tanks" },
                { label: "Vegetative measures", note: "grassed waterways, agroforestry, cover crops" },
                { label: "Agronomic measures", note: "contour cultivation, strip cropping, mulching - the broad base" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always state the watershed is the planning unit",
              body: "Examiners look for the integrated planning principle: the watershed, not the village or the field, is the unit of action because hydrology ignores administrative boundaries. State this explicitly and pair it with the three-family measure taxonomy (engineering, vegetative, agronomic) to claim the full marks.",
            },
            keyTerms: [
              { term: "Watershed", definition: "The geographic area that drains to a common outlet, bounded by the ridge line." },
              { term: "Contour bund", definition: "An earthen embankment constructed along a contour to slow runoff and promote infiltration." },
              { term: "Check dam", definition: "A low masonry or gabion wall across a gully that arrests erosion, traps sediment and promotes recharge." },
            ],
            examQuestions: [
              {
                q: "Define a watershed and watershed management. Classify soil and water conservation measures into engineering, vegetative and agronomic families with examples, and cite Indian watershed programmes.",
                marks: 7,
                outline: [
                  "Define watershed: area draining to common outlet, bounded by ridge line.",
                  "State the integrated principle: watershed is the planning unit, not the village.",
                  "Engineering measures: contour bunds, contour trenches, check dams, gully control, percolation tanks.",
                  "Vegetative measures: grassed waterways, agroforestry, cover crops, vegetative barriers.",
                  "Agronomic measures: contour cultivation, strip cropping, mulching, crop rotation.",
                  "Cite the Sukhomajri project (Haryana) as a flagship restoration case.",
                  "Cite MoRD programmes: DPAP, DDP, IWMP - treated over 50 million hectares.",
                ],
              },
              {
                q: "Distinguish between contour bund and check dam.",
                marks: 2,
              },
              {
                q: "List any three agronomic measures for soil conservation.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Rainwater harvesting: rooftop, surface and recharge structures",
            body: [
              "Rainwater harvesting is the collection and storage of rainwater for direct use or for recharge of groundwater, before it reaches the drainage network. Three modes are practised. Rooftop harvesting collects rainfall from house, school or factory roofs through gutters and downpipes into a storage tank for direct use; surface harvesting collects runoff from open ground, courtyards or paved surfaces into surface or underground tanks; and recharge harvesting directs runoff into the ground through pits, trenches, wells or percolation tanks to augment the aquifer rather than store at the surface.",
              "Rooftop system design sizes the tank for the catchment area, the runoff coefficient of the roof, the rainfall depth at the chosen reliability, and the demand pattern. For a 100 square metre roof with a runoff coefficient of 0.8 and a 20-millimetre design storm, the harvestable volume is 1.6 cubic metres per storm; sizing the tank for the longest dry spell captures the maximum water. Water quality from clean roofs is good with a first-flush diverter that discards the initial 0.2 to 0.5 millimetres of rain carrying dust and bird droppings; filtration through a sand-gravel bed or a slow sand filter polishes the stored water for drinking.",
              "Recharge structures include recharge pits (1 to 2 metre diameter, 2 to 3 metre deep filled with pebbles and sand), recharge trenches (long narrow excavations along contours), and abandoned dugwells refilled with filter media to channel rooftop runoff to the aquifer. The choice depends on soil permeability, depth to water table and the volume of water to be recharged. Indian legislation has made rainwater harvesting mandatory in Tamil Nadu, Andhra Pradesh, Telangana, Karnataka, Rajasthan and New Delhi for buildings above a threshold plot size; the Chennai experience post-2002 illustrates a city-scale impact on the aquifer.",
            ],
            bullets: [
              "Three modes: rooftop, surface, recharge harvesting.",
              "Rooftop harvesting: roof, gutters, downpipes, storage tank, first-flush diverter.",
              "Volume = roof area x runoff coefficient x rainfall depth; size tank for longest dry spell.",
              "First-flush diverter discards 0.2 to 0.5 mm of rain carrying dust and bird droppings.",
              "Recharge structures: pits (1 to 2 m dia), trenches, abandoned dugwells with filter media.",
              "Tamil Nadu's 2003 rainwater harvesting ordinance is a flagship city-scale case.",
              "Mandatory in TN, AP, Telangana, Karnataka, Rajasthan, New Delhi above plot thresholds.",
            ],
            codeExample: {
              language: "python",
              caption: "Size a rooftop rainwater harvesting tank for a 100 sq m roof in a monsoon climate.",
              code: `# Size a rooftop rainwater harvesting tank for a 100 sq m roof in a monsoon climate
roof_area = 100            # sq m
runoff_coeff = 0.85        # metal or tiled roof with gutters
mean_rain = 950            # mm/year, semi-arid monsoon
dry_spell_days = 40        # longest dry spell to bridge
per_capita_demand = 10     # litres/day for the household of 4
family = 4

# 1. Annual harvestable volume
harvest_annual = roof_area * (mean_rain / 1000.0) * runoff_coeff   # m3
print(f"Annual harvestable volume: {harvest_annual:.1f} m3 ({harvest_annual*1000:.0f} L)")

# 2. Daily demand of the family
daily_demand = per_capita_demand * family     # litres/day
print(f"Household demand: {daily_demand} L/day")

# 3. Tank sized to bridge the longest dry spell
tank_volume = daily_demand * dry_spell_days   # litres
print(f"Tank volume needed (dry-spell bridge): {tank_volume} L = {tank_volume/1000:.1f} m3")

# 4. First-flush diverter sizing - discard first 0.4 mm of each storm
first_flush_mm = 0.4
first_flush_L = roof_area * first_flush_mm    # L per storm (1 mm over 1 sq m = 1 L)
print(f"First-flush diverter: {first_flush_L:.1f} L per storm")

# 5. Check coverage
days_covered = harvest_annual * 1000 / daily_demand
print(f"If annual harvest used daily: covers about {days_covered:.0f} days of family demand")
`,
            },
            diagram: {
              kind: "matrix",
              title: "Harvesting mode by catchment and use",
              caption:
                "Top-right: rooftop for direct use; bottom-left: surface for recharge; each mode serves a purpose.",
              axes: { x: "Catchment quality", y: "Intended use" },
              quadrants: [
                { label: "Surface runoff for recharge", note: "low quality, indirect use via aquifer" },
                { label: "Rooftop for direct use", note: "high quality, treated for potable or non-potable" },
                { label: "Surface for non-potable storage", note: "moderate quality, gardening and washing" },
                { label: "Paved courtyard for storage", note: "moderate quality, regulated use" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always pair rooftop with first-flush diverter",
              body: "A common slip is to design the tank without the first-flush diverter. The initial 0.2 to 0.5 millimetres of rain carry the bulk of dust, bird droppings and leaf debris from the roof; a diverter that discards this initial volume is essential for any potable use of harvested rainwater. Always state the diverter explicitly in a rooftop design.",
            },
            keyTerms: [
              { term: "Rooftop rainwater harvesting", definition: "Collection of rainfall from roof surfaces through gutters and downpipes into storage for direct use." },
              { term: "First-flush diverter", definition: "A device that discards the initial 0.2 to 0.5 mm of rainfall carrying dust and debris from the roof." },
              { term: "Recharge pit", definition: "A 1 to 2 m diameter, 2 to 3 m deep excavation filled with filter media that channels runoff into the aquifer." },
            ],
            examQuestions: [
              {
                q: "Explain rainwater harvesting with the three modes of rooftop, surface and recharge harvesting. Describe the design of a rooftop system with first-flush diverter and a recharge pit, and cite Indian mandatory legislation.",
                marks: 7,
                outline: [
                  "Define rainwater harvesting and the three modes: rooftop, surface, recharge.",
                  "Rooftop system: roof, gutters, downpipes, storage tank, first-flush diverter.",
                  "Volume formula: roof area x runoff coefficient x rainfall depth; size tank for dry spell.",
                  "First-flush diverter discards 0.2 to 0.5 mm carrying dust and bird droppings.",
                  "Recharge structures: pits (1 to 2 m dia), trenches, abandoned dugwells.",
                  "Cite Tamil Nadu 2003 ordinance and mandatory legislation in AP, Telangana, Karnataka, Rajasthan, Delhi.",
                  "Note the Chennai city-scale impact on the aquifer post-2002.",
                ],
              },
              {
                q: "What is a first-flush diverter and why is it used?",
                marks: 2,
              },
              {
                q: "List any three recharge structures used in rainwater harvesting.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Case studies and future: desalination, water-energy nexus, climate resilience",
            body: [
              "Three flagship case studies define Indian integrated water management. Neeru-Meeru, launched in Telangana in 2000, is a community-based watershed and recharge programme that constructed over 50,000 percolation tanks, check dams and recharge pits, raising water tables across semi-arid districts. The Karnataka Watershed Development Project, also known as Sujala, treated over 1 million hectares through participatory soil and water conservation, raising crop yields and groundwater levels and becoming a global benchmark documented by the World Bank. Rajasthan's traditional taanka and khadin systems, revived in the Thar Desert, capture rooftop and runoff water for drinking and agriculture with low-cost, locally-built structures.",
              "The future frontier has three axes. Desalination, particularly reverse osmosis of seawater and brackish groundwater, supplies coastal cities in Tamil Nadu (Nemmeli and Minjur plants) and Gujarat; energy is the principal cost, with 3 to 5 kilowatt-hours per cubic metre of seawater RO, so desalination pairs naturally with renewable energy. The water-energy nexus recognises that water carries energy (pumping, treatment, distribution) and energy carries water (thermal plant cooling); the Indian farmer's free or subsidised tube-well power is the nexus policy knot, with separate feeders and metered tariffs as the reform response.",
              "Climate resilience closes the subject. Climate change shifts the timing and intensity of rainfall, raises evapotranspiration demand, accelerates glacier melt in the Himalayan basins, and increases the frequency of extreme storms and droughts. Resilient water management combines supply diversification (desalination, MAR, inter-basin transfer), demand management (efficient fixtures, drip irrigation, drought-resistant crops), nature-based solutions (wetland restoration, urban greening), and adaptive governance (real-time data, scenario planning, flexible allocations). Integrated water management, the Dublin principles and the National Water Policy 2012 converge here - the subject's full circle.",
            ],
            bullets: [
              "Neeru-Meeru (Telangana 2000): over 50,000 percolation tanks, check dams, recharge pits.",
              "Karnataka Sujala: over 1 million hectares treated, World Bank-documented benchmark.",
              "Rajasthan taanka and khadin: traditional rooftop and runoff systems of the Thar Desert.",
              "Seawater RO desalination: 3 to 5 kWh per m3; Nemmeli and Minjur plants in Tamil Nadu.",
              "Water-energy nexus: free tube-well power is the policy knot; separate feeders and metered tariffs the reform.",
              "Climate change shifts rainfall, raises ET, melts glaciers, increases storms and droughts.",
              "Resilience: diversify supply, manage demand, restore nature, govern adaptively.",
            ],
            table: {
              caption: "Three Indian integrated water management case studies.",
              headers: ["Case", "Region", "Approach", "Impact"],
              rows: [
                ["Neeru-Meeru", "Telangana", "Community recharge works", "Water tables rose across semi-arid districts"],
                ["Sujala", "Karnataka", "Participatory watershed", "1+ million hectares treated, yields up"],
                ["Taanka/Khadin", "Rajasthan", "Traditional rooftop and runoff", "Drinking and farm water in Thar Desert"],
                ["Nemmeli RO", "Tamil Nadu", "Seawater desalination", "100 MLD supply to Chennai"],
                ["Jal Jeevan Mission", "Pan-India", "Rural household taps", "Functional tap connections to every village"],
                ["Namami Gange", "Ganga basin", "Basin restoration", "Sewage treatment, river-front, afforestation"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Past case studies versus future frontier",
              caption:
                "The lessons of Neeru-Meeru, Sujala and Thar feed the future of desalination, nexus and climate.",
              left: {
                heading: "Past case studies",
                items: [
                  "Neeru-Meeru in Telangana",
                  "Sujala in Karnataka",
                  "Taanka and khadin in Rajasthan",
                  "Community-driven, low-cost",
                  "Built on local participation",
                ],
              },
              right: {
                heading: "Future frontier",
                items: [
                  "Seawater and brackish desalination",
                  "Water-energy nexus reform",
                  "Climate-resilient adaptation",
                  "Renewable energy pairing",
                  "Adaptive, data-driven governance",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Always close with the climate-resilience bridge",
              body: "Examiners reward answers that close the loop: the Dublin Principles and IWRM (Unit I) converge with the supply diversification, demand management, nature-based solutions and adaptive governance of climate resilience (Unit V). State this convergence explicitly - it is the integration that names the subject.",
            },
            keyTerms: [
              { term: "Desalination", definition: "The removal of dissolved salts from seawater or brackish water by reverse osmosis or distillation for potable supply." },
              { term: "Water-energy nexus", definition: "The recognition that water carries energy for pumping and treatment, and energy carries water for cooling, with coupled policy implications." },
              { term: "Climate-resilient water management", definition: "An approach that diversifies supply, manages demand, restores nature and governs adaptively under climate uncertainty." },
            ],
            examQuestions: [
              {
                q: "Discuss three Indian case studies in integrated water management - Neeru-Meeru, Karnataka Sujala and Rajasthan taanka-khadin. Outline the future frontier of desalination, water-energy nexus and climate resilience, and link back to IWRM and the Dublin Principles.",
                marks: 7,
                outline: [
                  "Neeru-Meeru (Telangana 2000): over 50,000 recharge structures, water tables rose.",
                  "Sujala (Karnataka): 1+ million hectares treated participatorily, World Bank-documented.",
                  "Taanka and khadin (Rajasthan): traditional rooftop and runoff systems of the Thar.",
                  "Desalination: seawater RO at 3 to 5 kWh/m3; Nemmeli and Minjur plants cited.",
                  "Water-energy nexus: free tube-well power the policy knot; separate feeders the reform.",
                  "Climate resilience: diversify supply, manage demand, restore nature, govern adaptively.",
                  "Bridge to Unit I: IWRM and Dublin Principles converge in climate-resilient management.",
                ],
              },
              {
                q: "State the energy cost of seawater reverse osmosis desalination.",
                marks: 2,
              },
              {
                q: "List any three Indian case studies in integrated water management.",
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
        "RGPV CE-803(D) papers typically spread 70 to 80 marks across water treatment design, wastewater secondary treatment variants, stormwater drainage and flood management, and groundwater-rainwater harvesting; the remaining marks come from IWRM and Dublin Principles, governance and NWP 2012, and case studies. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Conventional water treatment train and design parameters", weight: "10-14 marks", note: "Almost guaranteed; practise the full train with parameters and the Jar test." },
        { topic: "Activated sludge process and trickling filter comparison", weight: "8-12 marks", note: "Quote F/M, MLSS, recirculation ratio and BOD removals." },
        { topic: "Stormwater drainage: rational method, BMPs, first flush", weight: "8-12 marks", note: "Q = 0.28 C i A and a BMP treatment train; first-flush sizing." },
        { topic: "Wastewater reuse and decentralised treatment", weight: "8-10 marks", note: "Reuse spectrum with quality requirements; cite NEWater and Indian pilots." },
        { topic: "River basin management and IWRM principles", weight: "8-10 marks", note: "Dublin Principles, three Es and three pillars; basin plan components." },
        { topic: "Groundwater occurrence, recharge and over-exploitation", weight: "8-10 marks", note: "Aquifer types, 14 per cent over-exploited blocks, regions named." },
        { topic: "Urban and rural water supply systems", weight: "6-8 marks", note: "135 lpcd urban, 55-70 lpcd rural; Jal Jeevan Mission." },
        { topic: "Structural and non-structural flood management", weight: "6-8 marks", note: "Embankment/reservoir/channelisation plus forecasting/zoning/insurance." },
        { topic: "Watershed management and rainwater harvesting", weight: "6-8 marks", note: "Engineering/vegetative/agronomic families; rooftop tank sizing with first-flush." },
        { topic: "National Water Policy 2012 and case studies", weight: "4-6 marks", note: "Priority order verbatim; Neeru-Meeru, Sujala, Rajasthan taanka-khadin." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - water resources and IWRM", tasks: ["Water resources of India: numbers and basins", "IWRM principles, three Es and three pillars", "Dublin Principles, river basin management, NWP 2012"] },
        { week: "Week 2", focus: "Unit II - water supply and distribution", tasks: ["Urban and rural supply benchmarks; intake works", "Conventional treatment train and Jar test", "Advanced treatment, distribution, NRW and smart grid"] },
        { week: "Week 3", focus: "Unit III - wastewater treatment", tasks: ["Sewerage systems and pumping stations", "ASP and trickling filter design parameters", "UASB, MBR, tertiary nutrient removal and membranes"] },
        { week: "Week 4", focus: "Unit III reuse + Unit IV stormwater", tasks: ["Wastewater reuse spectrum and decentralised plants", "Urban drainage and rational method", "Stormwater BMPs, first flush and treatment train"] },
        { week: "Week 5", focus: "Unit IV floods + Unit V groundwater", tasks: ["Structural and non-structural flood management", "Urban flooding, sponge cities", "Groundwater occurrence, recharge and over-exploitation"] },
        { week: "Week 6", focus: "Unit V close + full revision", tasks: ["MAR, watershed and rainwater harvesting", "Case studies and future: desalination, nexus, climate", "Two full past papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day revision strategy",
      body: [
        "The last day before the exam is for high-yield revision only - the numbers, the formulas, the priority orders and the case-study names. Walk through this checklist once and trust the depth you have built over the six-week schedule.",
      ],
      bullets: [
        "Memorise the headline numbers: 4,000 bcm rainfall, 1,123 bcm utilizable, 1,170 mm mean, 1,700 Falkenmark.",
        "Quote CPHEEO 135 lpcd urban and NRDWP 55 to 70 lpcd rural with residual pressure 7 to 17 m.",
        "Quote the rational formula Q = 0.28 C i A with units and the runoff coefficients by land use.",
        "Quote ASP numbers: F/M 0.2 to 0.5, MLSS 1500 to 3000 mg/L, recirculation 0.25 to 0.5, 85 to 95 per cent BOD removal.",
        "Quote the NWP 2012 priority order verbatim: drinking and sanitation, ecology, agriculture, industry.",
        "Memorise the Dublin Principles' four statements with the human-right caveat on Principle 4.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Sketch the layout first - intake, treatment train, distribution, sewerage, drainage - and label every unit before writing parameters. The sketch earns structure marks.",
        "Quote the governing IS code for each system: IS 10500 for drinking water, IS 9116 for intakes, IS 1742 and 7758 for sewers, IS 7784 for stormwater.",
        "Always state the design flood recurrence interval when answering flood questions: 1-in-50, 1-in-100 or 1-in-500 by consequence of failure.",
        "Pair structural with non-structural flood measures in any flood answer; the residual risk above the design flood is the explicit bridge.",
        "Time-box: 2/3-mark questions in 4-6 minutes, 7-mark questions in 14-18 minutes, and keep the last 10 minutes for the verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Treating NRW as 'just leakage' - it splits into real losses (leaks) and apparent losses (meters, theft); state the IWA balance.",
        "Quoting Q = C i A without units - the 0.28 constant only holds for Q in m3/s, i in mm/h, A in sq km.",
        "Listing nitrification without denitrification - nitrogen is not removed until nitrate is reduced to nitrogen gas.",
        "Presenting UASB as a standalone solution - its 60 to 100 mg/L BOD effluent needs a polishing step.",
        "Designing a rooftop rainwater system without a first-flush diverter - the initial 0.2 to 0.5 mm carries the bulk of dust and bird droppings.",
        "Reversing the NWP 2012 priority order - the exact sequence is drinking and sanitation, ecology, agriculture, industry.",
      ],
    },
  ],
};
