/**
 * Academics - RGPV Mechanical Engineering 8th-semester subject:
 * ME-803(B) Energy Conservation, Management and Audit.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or Python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me803b: AcademicSubject = {
  id: "me-803-b",
  code: "ME-803(B)",
  title: "Energy Conservation, Management and Audit",
  semester: "VIII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to energy conservation for RGPV mechanical engineering: the energy scenario and the EC Act, energy management and ISO 50001, audit methodology and financial appraisal, thermal and electrical conservation, and renewables with cogeneration.",
  description:
    "Five units walk from the global and Indian energy scenario through the Energy Conservation Act 2001, BEE programmes and the PAT scheme, into energy management practice - policy, Sankey accounting, SEC benchmarking, EnPIs and ISO 50001 - then through audit types, methodology, instruments, report writing and financial appraisal with payback, NPV and IRR. Unit IV digs into boilers, steam systems, furnaces, motors, lighting, transformers and compressors; Unit V closes with solar, wind, biomass, cogeneration and trigeneration, waste heat recovery equipment, fuel cells, storage and carbon trading. Every section pairs theory with a worked calculation, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#10b981",
  emoji: "EC",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Energy Scenario",
      summary:
        "Why conservation is national policy: the global and Indian energy scene, elasticity and the demand-supply gap, the Energy Conservation Act 2001, the Bureau of Energy Efficiency and the Perform, Achieve and Trade scheme.",
      chapter: {
        number: "01",
        title: "The Energy Scenario and the Law",
        intro:
          "Unit I sets the stage: how much energy the world and India consume, where the demand-supply gap comes from, and the legal machinery India built to close it - the Energy Conservation Act 2001, the Bureau of Energy Efficiency and the PAT scheme.",
        inOneBreath:
          "Fossil fuels still supply about 80% of world primary energy; India runs on coal, imports most of its crude, and its electricity demand grows about 5% a year; the cheapest unit of energy is the one never generated; the Energy Conservation Act 2001 created the BEE, designated consumers, energy managers and star labels; and the PAT scheme turns verified energy savings into tradable ESCerts.",
        sections: [
          {
            number: "1.1",
            title: "The global and Indian energy scenario",
            body: [
              "World primary energy use now runs at roughly 600 exajoules a year, and about 80% of it still comes from fossil fuels: oil supplies nearly 30%, coal 25-30% and natural gas 22-25%, with hydro, nuclear and renewables sharing the rest. Consumption is strikingly uneven - a handful of industrialised economies use several times the per-capita energy of developing ones. World per-capita electricity averages about 3,600 kWh a year, and demand growth has shifted decisively to Asia. The energy question is no longer only how much can be supplied, but how cleanly, how securely and at what cost.",
              "India's position is distinctive. Coal meets roughly half of primary commercial energy and about 70% of generated electricity; oil takes a second large share, and about 85% of crude is imported, tying the economy to price shocks. Per-capita electricity consumption is around 1,200-1,300 kWh per year - about a third of the world average - but it is climbing as incomes, urbanisation and industry grow, and electricity demand expands at roughly 5% per year. Peak deficit and energy deficit have narrowed, yet suppressed demand - loads that never get metered - keeps the true gap larger than statistics show.",
              "Conservation enters because the cheapest unit of energy is the one never generated. A saved megawatt-hour needs no fuel mine, no boiler, no transmission corridor and no emissions permit, and costs a fraction of new supply. India's answer has been institutional: the Energy Conservation Act of 2001, the Bureau of Energy Efficiency, the PAT scheme for industry, and national commitments - 500 GW of non-fossil capacity by 2030 and a 45% cut in GDP energy intensity against 2005 levels. For RGPV, this section is short-question gold: a handful of headline numbers anchors almost every paper.",
            ],
            bullets: [
              "World primary energy: fossil fuels ≈ 80%; oil ≈ 30%, coal ≈ 25-30%, gas ≈ 22-25% of the mix.",
              "India: coal ≈ half of primary commercial energy and ≈ 70% of generation; crude import dependence ≈ 85%.",
              "Per-capita electricity: world ≈ 3,600 kWh/yr vs India ≈ 1,200-1,300 kWh/yr, growing ≈ 5% per year.",
              "The gap appears as peak deficit (MW at the worst hour), energy deficit (kWh across the year) and suppressed demand.",
              "Conservation logic: a negawatt costs a fraction of a new megawatt - the cheapest, cleanest 'source'.",
              "Policy anchors: EC Act 2001, BEE, PAT, 500 GW non-fossil by 2030, energy intensity -45% vs 2005.",
            ],
            table: {
              caption: "Energy indicators: world vs India (approximate recent figures).",
              headers: ["Indicator", "World", "India", "Exam reading"],
              rows: [
                ["Primary energy leader", "oil + gas ≈ 55% of supply", "coal ≈ half of primary energy", "India runs on coal"],
                ["Per-capita electricity", "≈ 3,600 kWh/yr", "≈ 1,200-1,300 kWh/yr", "About one-third of world average"],
                ["Crude import dependence", "varies by bloc", "≈ 85% of consumption", "The energy-security driver"],
                ["Electricity demand growth", "≈ 1-2% per year", "≈ 5% per year", "Conservation buys time for supply"],
                ["Non-fossil capacity target", "-", "500 GW by 2030", "Panchamrit commitment at COP26"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From primary energy to useful work",
              caption: "Every conversion step takes a cut - conservation attacks each arrow.",
              steps: [
                { label: "Primary energy in", note: "coal, oil, gas, hydro, renewables" },
                { label: "Conversion", note: "boiler, turbine, engine - big losses" },
                { label: "Transmission and distribution", note: "line losses, steam pipe losses" },
                { label: "End-use equipment", note: "motors, furnaces, lamps, ovens" },
                { label: "Useful service", note: "often under half of what entered" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Short questions here ask for numbers, not essays. Memorise four: fossil share ≈ 80% of world primary energy; India per-capita electricity ≈ 1,200 kWh/yr; coal ≈ 70% of Indian generation; crude import dependence ≈ 85%. If unsure of a year, say 'recent' - wrong years cost more marks than honest approximations.",
            },
            keyTerms: [
              { term: "Primary energy", definition: "Energy in raw fuels as taken from nature - coal, crude, gas, hydro, uranium - before any conversion." },
              { term: "Energy intensity", definition: "Energy consumed per unit of GDP; a falling intensity means growth is decoupling from energy." },
              { term: "Negawatt", definition: "A watt of demand avoided through efficiency; supply-side capacity displaced by conservation." },
            ],
            examQuestions: [
              {
                q: "Describe the global and Indian energy scenario with key statistics, and explain why energy conservation is treated as a national resource in India.",
                marks: 7,
                outline: [
                  "World primary energy mix: fossil ≈ 80% (oil ≈ 30%, coal 25-30%, gas 22-25%).",
                  "Per-capita comparison: world ≈ 3,600 kWh/yr vs India ≈ 1,200-1,300 kWh/yr.",
                  "India specifics: coal ≈ 70% of generation, crude imports ≈ 85%, demand growth ≈ 5%/yr.",
                  "Demand-supply gap: peak deficit, energy deficit and suppressed demand.",
                  "Why conservation is a resource: negawatt cheaper than megawatt; no fuel, no grid, no emissions.",
                  "Institutional response: EC Act 2001, BEE, star labelling, PAT, 500 GW non-fossil target, -45% intensity by 2030.",
                  "Conclude: efficiency is the first fuel of national energy planning.",
                ],
              },
              { q: "What is energy intensity and why does policy track it more closely than total consumption?", marks: 2 },
              { q: "List four reasons why India's crude import dependence is treated as an energy-security concern.", marks: 3 },
            ],
          },
          {
            number: "1.2",
            title: "Energy demand, supply and the demand-supply gap",
            body: [
              "Energy demand is not an independent number; it is driven by population, urbanisation, industrial structure and income. The linkage is captured by energy elasticity - the ratio of percentage growth in energy demand to percentage growth of GDP. India historically ran elasticity near or above unity, meaning energy grew as fast as output; efficiency, a structural shift toward services and better technology have been pulling it toward 0.8. Forecasting therefore starts from a GDP growth assumption and an elasticity assumption, and every percentage point of elasticity saved is capital freed from power plants.",
              "Supply struggles to keep pace. Generation capacity needs capital and years to build; coal moves on congested rail corridors; transmission and distribution losses, though reduced, still exceed world best practice; and thermal plants compete for water. The deficit appears in two currencies: peak deficit, the megawatts short at the worst hour of the year, and energy deficit, the kilowatt-hours short across the whole year. Beneath both sits suppressed demand - the pumps, machines and homes that were never connected or never served - which the meter never records but the economy still pays for.",
              "Responses split into supply-side and demand-side. Supply-side answers - new plants, imports, renewables - are necessary but capital-hungry and slow. Demand-side management (DSM) attacks the other end: efficient lamps and pumps, load shifting to off-peak hours, time-of-day tariffs, and programmes run by utilities so that avoided demand replaces generation. Because a negawatt costs a fraction of a megawatt, DSM is the cheapest fast option. The code below projects a demand-supply gap under compound growth and shows how even a 1.5% demand-side correction narrows it - the arithmetic the whole subject rests on.",
            ],
            bullets: [
              "Energy elasticity = % growth of energy demand / % growth of GDP; India has moved near 1.0 to ≈ 0.8.",
              "Demand drivers: population, urbanisation, industrial growth, rising incomes, electrification.",
              "Supply constraints: fuel logistics, generation capex, finance, T&D losses, water for thermal plants.",
              "Peak deficit (MW at the worst hour) vs energy deficit (kWh across the year) - quote both.",
              "Suppressed demand: loads never metered because power was unavailable; the hidden gap.",
              "Demand-side management: utility-led efficient lamps, pump sets, load shifting and time-of-day tariffs.",
            ],
            codeExample: {
              language: "python",
              caption: "Projecting the demand-supply gap and the effect of demand-side efficiency (illustrative).",
              code: `# Project electricity demand vs supply and test a DSM correction
demand_2025 = 1_600_000     # GWh per year, base-year demand
growth = 0.05               # demand grows 5% per year
supply_growth = 0.04        # supply can only be added at 4% per year
years = 10

demand = demand_2025
supply = demand_2025 * 0.97  # small starting deficit
for y in range(1, years + 1):
    demand *= 1 + growth
    supply *= 1 + supply_growth
    print(f"Year +{y}: demand {demand:,.0f} GWh, "
          f"supply {supply:,.0f} GWh, gap {demand - supply:,.0f} GWh")

# DSM: efficiency decouples 1.5% per year from demand growth
efficient = demand_2025 * (1 + growth - 0.015) ** years
print(f"Demand with DSM: {efficient:,.0f} GWh")
print(f"Gap avoided by DSM: {demand - efficient:,.0f} GWh")`,
            },
            diagram: {
              kind: "fork",
              title: "India's response to a widening gap",
              caption: "The Act, the BEE and PAT all sit on the left-hand branches.",
              start: "Demand grows ≈ 5% per year while supply additions lag",
              branches: [
                { label: "Add supply only", outcome: "Capex-heavy, imports and emissions rise - the old path", good: false },
                { label: "Conserve first", outcome: "Negawatts at a fraction of new-generation cost", good: true },
                { label: "Standards and codes", outcome: "Star labels and ECBC lock savings into new stock", good: true },
                { label: "Renewables plus efficiency", outcome: "Targets met with a lower peak demand to serve", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Definition trap",
              body: "Never define conservation as 'using less energy'. The correct line is 'using energy more efficiently - the same service or product with less input'. Examiners specifically penalise the minimalist definition because it suggests deprivation rather than optimisation.",
            },
            keyTerms: [
              { term: "Energy elasticity", definition: "Ratio of percentage growth in energy demand to percentage growth in GDP." },
              { term: "Peak deficit", definition: "Shortfall in megawatts at the hour of highest demand in a period." },
              { term: "Demand-side management", definition: "Utility or user programmes that reduce or reshape demand - efficient equipment, load shifting, tariffs - displacing generation." },
            ],
            examQuestions: [
              {
                q: "Define energy elasticity and demand-side management. Explain how DSM helps close the demand-supply gap, with examples of DSM programmes.",
                marks: 7,
                outline: [
                  "Define energy elasticity with the ratio and India's ≈ 0.8-1.0 trend.",
                  "List demand drivers: population, urbanisation, industry, income.",
                  "Explain supply constraints: capex, fuel logistics, T&D losses, water.",
                  "Distinguish peak deficit, energy deficit and suppressed demand.",
                  "Define DSM and its instruments: efficient lamps, pump retrofits, load shifting, time-of-day tariffs.",
                  "Argue cost: a negawatt is cheaper and faster than a megawatt.",
                  "Conclude with UJALA-type examples where DSM avoided capacity.",
                ],
              },
              { q: "Distinguish peak deficit from energy deficit.", marks: 2 },
              { q: "List four demand-side management measures a distribution utility can run.", marks: 3 },
            ],
          },
          {
            number: "1.3",
            title: "The Energy Conservation Act, 2001",
            body: [
              "The Energy Conservation Act, 2001 is the legal foundation of everything this subject teaches. Enacted in 2001 and brought into force with effect from March 2002, it created, under Section 3, the Bureau of Energy Efficiency as the apex body, and empowered central and state governments to fix energy consumption norms for equipment, appliances and energy-intensive industries. The Energy Conservation (Amendment) Act, 2010 gave the BEE statutory teeth, strengthened State Designated Agencies, and - crucially - enabled the market-based mechanism that became the PAT scheme.",
              "Its operative provisions are worth memorising as a table. The Act lets the government notify standards for equipment and appliances, display labels, and prohibit the manufacture, sale or import of non-conforming items - the basis of star ratings. It defines designated consumers: energy-intensive units above notified thresholds, which must appoint certified energy managers, conduct periodic energy audits, and comply with consumption norms. It authorises the Energy Conservation Building Code for large commercial buildings, and prescribes penalties - after the 2010 amendment, up to Rs 10 lakh for a designated consumer, with additional daily penalties for continuing failure.",
              "The Act matters because it converted conservation from advice into obligation. It created a profession (certified energy managers and auditors), an enforcement chain (BEE and State Designated Agencies), a consumer-side compliance regime (designated consumers), and eventually a market (ESCerts under PAT). Later amendments continue to widen the net to residential buildings, transport and carbon markets. In the exam, pair each provision with its section number where you know it and with its effect where you do not - examiners reward the machinery, not the recitation of titles.",
            ],
            bullets: [
              "Enacted 2001, in force from March 2002; amended 2010 to strengthen BEE and SDAs and enable PAT.",
              "Section 3: establishes the Bureau of Energy Efficiency as the apex body.",
              "Equipment provisions: notify standards, mandate labels, prohibit non-conforming manufacture, sale or import.",
              "Designated consumers: appoint energy managers, conduct periodic audits, comply with notified norms.",
              "ECBC authorised for large commercial buildings - minimum energy performance at design stage.",
              "Penalties post-2010: up to Rs 10 lakh for designated consumers plus daily penalties for continuing failure.",
            ],
            table: {
              caption: "The EC Act 2001 at a glance (with the 2010 amendment).",
              headers: ["Provision", "What it mandates", "Effect"],
              rows: [
                ["Section 3", "Establishes the Bureau of Energy Efficiency", "BEE created 1 March 2002"],
                ["Equipment and appliance provisions", "Notify standards; display labels; prohibit non-conforming items", "Star-rating regime"],
                ["Designated consumer provisions", "Energy managers, periodic audits, compliance with norms", "Industry obligations incl. PAT"],
                ["Certification provisions", "National certification of energy managers and auditors", "The EM/EA profession"],
                ["Building code provision", "Energy Conservation Building Code for large buildings", "ECBC 2007, updated 2017"],
                ["Penalty provisions (2010)", "Penalty up to Rs 10 lakh plus daily penalties for continuing failure", "Enforcement teeth"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The EC Act institutional pyramid",
              caption: "One statute; a whole delivery machinery below it.",
              tiers: [
                { label: "Energy Conservation Act, 2001", note: "the statute" },
                { label: "Bureau of Energy Efficiency", note: "apex body, Section 3" },
                { label: "State Designated Agencies", note: "state-level enforcement" },
                { label: "Designated consumers", note: "managers, audits, norms" },
                { label: "Markets and codes", note: "star labels, ECBC, PAT, ESCerts" },
              ],
            },
            callout: {
              type: "tip",
              title: "Answer skeleton",
              body: "For 'salient features of the EC Act 2001', write four labelled blocks: (1) establishment and role of BEE, (2) standards, labelling and the ban on non-conforming equipment, (3) designated consumers and their duties, (4) ECBC and penalties. Close with one line on the 2010 amendment enabling PAT - that line usually carries the last mark.",
            },
            keyTerms: [
              { term: "Designated consumer", definition: "An energy-intensive consumer notified under the Act, bound to appoint an energy manager, audit energy use and meet notified norms." },
              { term: "ECBC", definition: "Energy Conservation Building Code - minimum energy performance requirements for large commercial buildings." },
              { term: "State Designated Agency", definition: "The state-level body responsible for enforcing the Act and coordinating with the BEE." },
            ],
            examQuestions: [
              {
                q: "Explain the salient features of the Energy Conservation Act, 2001 and the changes brought by the 2010 amendment.",
                marks: 7,
                outline: [
                  "Context: enacted 2001, in force March 2002; purpose to promote efficient use and conservation.",
                  "Section 3: creation of BEE as the apex implementing body.",
                  "Standards and labelling for equipment and appliances; ban on non-conforming items.",
                  "Designated consumers: thresholds, energy manager appointment, mandatory audits, norms.",
                  "Energy Conservation Building Code for large commercial buildings.",
                  "2010 amendment: statutory status for BEE, empowered SDAs, penalty enhancement (Rs 10 lakh plus daily), enabling of PAT.",
                  "Conclude: the Act converts conservation into an enforceable obligation and enables markets.",
                ],
              },
              { q: "Who is a designated consumer under the EC Act? State any two obligations.", marks: 2 },
              { q: "What is the Energy Conservation Building Code and to which buildings does it apply?", marks: 3 },
            ],
          },
          {
            number: "1.4",
            title: "The Bureau of Energy Efficiency",
            body: [
              "The Bureau of Energy Efficiency, established on 1 March 2002 under Section 3 of the Act, is the executive arm of Indian energy efficiency policy. Its stated mission is to institutionalise energy efficiency services and enable delivery mechanisms, acting under policy direction from a governing council chaired by the power minister. Its instruments are standards, labels, codes, certification, demonstration and market design - rarely subsidies alone. For an energy manager, BEE is simultaneously a regulator to satisfy, a certification body to qualify under, and a source of benchmarks and tools.",
              "Its flagship programmes form a clean list for the exam. Standards and labelling attaches star ratings to appliances - from refrigerators and air conditioners to fans, pumps and transformers - making efficiency visible at purchase. The Energy Conservation Building Code, first issued in 2007 and updated in 2017, sets minimum energy performance for large new commercial buildings, with Eco-Niwas Samhita extending the idea to homes. Demand-side management covers municipal water pumping, street lighting, agricultural pump sets and consumer campaigns such as LED distribution. Certification through national examinations creates the energy managers and auditors the Act demands, and cluster programmes take audits to small industry.",
              "The bureau's approach is to shift markets rather than chase individual savings: star labels change what manufacturers build and what buyers ask for; ECBC changes what architects draw; certification changes who industry trusts to audit it. Results are visible - the average appliance sold today sits several star levels above a decade ago, and ECBC compliance is becoming routine in municipal approval. Remember BEE as the pivot between the statute (this unit) and plant-level practice (Units II-V): every instrument it runs reappears later as an obligation or a tool inside the factory gate.",
            ],
            bullets: [
              "BEE established 1 March 2002 under Section 3 of the EC Act; governing council chaired by the power minister.",
              "Standards and labelling: star ratings on appliances - mandatory and voluntary schedules since 2006.",
              "ECBC 2007, updated 2017, for large new commercial buildings; Eco-Niwas Samhita 2018 extends to homes.",
              "DSM programmes: municipal and agriculture pumping, street lighting, consumer LED campaigns.",
              "National certification examinations for energy managers and energy auditors, running since 2004.",
              "SME cluster programmes: shared audits and subsidised technology upgradation.",
            ],
            table: {
              caption: "BEE's major programmes and their mechanisms.",
              headers: ["Programme", "Mechanism", "Coverage / result"],
              rows: [
                ["Standards and labelling", "Star rating on appliances, mandatory or voluntary", "Over two dozen appliance categories since 2006"],
                ["ECBC", "Code for large new commercial buildings", "2007, updated 2017; Eco-Niwas Samhita for homes"],
                ["Demand-side management", "Utility-run efficiency programmes", "Municipal pumps, street lighting, agriculture, LEDs"],
                ["Certification", "National examination since 2004", "Creates certified energy managers and auditors"],
                ["PAT implementation", "SEC targets and ESCert trading", "The industry mechanism detailed in Section 1.5"],
                ["SME clusters", "Cluster audits and technology upgradation", "Brings audit practice to small industry"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "BEE's programme pipeline",
              caption: "Each stage targets a different part of the energy system.",
              stages: [
                { label: "Standards and labelling", note: "star ratings on appliances" },
                { label: "ECBC", note: "new large commercial buildings" },
                { label: "Demand-side management", note: "municipal, agricultural, lighting" },
                { label: "Certification", note: "energy managers and auditors" },
                { label: "PAT", note: "industry targets with ESCert trading" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked about BEE, answer with the five-block pipeline: labelling, ECBC, DSM, certification, PAT. One concrete sentence per block - a named appliance, a code year, a programme example - converts a generic answer into a seven-mark answer.",
            },
            keyTerms: [
              { term: "Star rating", definition: "BEE's comparative 1-to-5-star label of appliance energy efficiency, based on notified test standards." },
              { term: "Eco-Niwas Samhita", definition: "The residential counterpart to ECBC - minimum energy performance for homes." },
              { term: "Certified energy manager", definition: "A professional who clears the BEE national examination and qualifies to be appointed under the Act." },
            ],
            examQuestions: [
              {
                q: "Describe the objectives of the Bureau of Energy Efficiency and its major programmes across appliances, buildings, utilities and industry.",
                marks: 7,
                outline: [
                  "Establishment: 1 March 2002 under Section 3; mission to institutionalise energy efficiency.",
                  "Standards and labelling: star ratings, mandatory and voluntary lists, effect on market.",
                  "ECBC: minimum energy performance for large commercial buildings; 2007 and 2017 versions.",
                  "DSM: municipal water and street lighting, agricultural pumps, LED distribution campaigns.",
                  "Certification: national examinations creating energy managers and auditors.",
                  "PAT: SEC targets for designated consumers with tradable ESCerts.",
                  "Conclude: BEE shifts whole markets rather than individual savings.",
                ],
              },
              { q: "What is a star rating, who issues it, and what does it tell a buyer?", marks: 2 },
              { q: "Name any four appliance categories covered by BEE's standards and labelling programme.", marks: 3 },
            ],
          },
          {
            number: "1.5",
            title: "The Perform, Achieve and Trade (PAT) scheme",
            body: [
              "Perform, Achieve and Trade is India's flagship market-based efficiency scheme for industry, launched in 2012 under the National Mission for Enhanced Energy Efficiency. PAT sets mandatory specific energy consumption (SEC) targets for designated consumers in energy-intensive sectors, verifies the results, and converts overachievement into tradable certificates. Cycle I ran from 2012 to 2015 covering 8 sectors - aluminium, cement, chlor-alkali, fertiliser, iron and steel, pulp and paper, textiles and thermal power plants - with 478 designated consumers, and the verified savings exceeded the notified target.",
              "The mechanics are exam-critical. Each designated consumer receives a baseline SEC, normalised for capacity and product mix from base-year data, and a target SEC implying a percentage reduction - typically about 4-8% depending on sector and plant. At cycle end, an accredited energy auditor verifies performance. A consumer who beats the target earns Energy Savings Certificates (ESCerts), each equal to one tonne of oil equivalent of energy saved; one who misses it must buy ESCerts in the market or face penalties. Trading happens on power exchanges, and the price discovers itself like any commodity.",
              "Later cycles broadened the net: Cycle II (2016-19) added sectors such as refineries, electricity distribution companies and railways, taking coverage past 600 designated consumers, and subsequent cycles continue the ratchet with tighter baselines. PAT's significance is that it converts efficiency into an asset class: energy saved becomes a certificate with a market price, so a board of directors can weigh a conservation project by certificate revenue as well as the fuel bill. In answers, always draw the loop - baseline, target, perform, verify, trade, next cycle - and connect it back to the Act's designated-consumer provisions.",
            ],
            bullets: [
              "PAT launched 2012 under the National Mission for Enhanced Energy Efficiency; the Act's market mechanism.",
              "Cycle I (2012-15): 8 sectors, 478 designated consumers; verified savings exceeded the target.",
              "Baseline SEC normalised from base-year data; target implies ≈ 4-8% reduction per consumer.",
              "ESCert = one tonne of oil equivalent of verified energy saved; issued only for overachievement.",
              "Under-achievers buy ESCerts or face penalties; trading on power exchanges sets the price.",
              "Cycle II (2016-19) expanded to ≈ 11 sectors and 600+ consumers, and the ratchet continues.",
            ],
            table: {
              caption: "PAT vocabulary the examiner expects.",
              headers: ["Element", "Meaning", "Illustrative example"],
              rows: [
                ["Designated consumer", "Notified energy-intensive unit bound by PAT", "A cement plant above notified thresholds"],
                ["Baseline SEC", "Normalised base-year specific energy consumption", "≈ 740 kcal/kg clinker"],
                ["Target SEC", "Mandatory SEC at cycle end", "≈ 705 kcal/kg clinker (about -5%)"],
                ["ESCert", "Certificate for savings beyond target; 1 ESCert = 1 toe", "Over-achiever sells, laggard buys"],
                ["M&V", "Independent measurement and verification", "Accredited energy auditor verifies"],
                ["Cycle", "Three-year compliance window", "Cycle I: 2012-15, 8 sectors, 478 DCs"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The PAT cycle",
              caption: "Three-year loops, sector by sector, each round ratcheting the target.",
              steps: [
                { label: "Establish baseline SEC", note: "normalised base-year data" },
                { label: "Notify target SEC", note: "per designated consumer" },
                { label: "Perform", note: "implement projects to cut SEC" },
                { label: "Verify", note: "accredited auditor M&V" },
                { label: "Trade ESCerts", note: "over-achievers sell, laggards buy" },
                { label: "Next cycle", note: "tighter baseline and target" },
              ],
            },
            callout: {
              type: "tip",
              title: "One-line anchors",
              body: "Two sentences guarantee marks here: 'One ESCert equals one tonne of oil equivalent of verified energy saved, issued only when a designated consumer beats its notified SEC target.' And: 'PAT is implemented by the BEE under the EC Act, with trading on power exchanges so the market, not the government, prices the saving.'",
            },
            keyTerms: [
              { term: "Specific energy consumption (SEC)", definition: "Energy consumed per unit of product or output - the quantity PAT regulates." },
              { term: "ESCert", definition: "Energy Savings Certificate equal to one tonne of oil equivalent of verified energy saved beyond the PAT target." },
              { term: "Measurement and verification (M&V)", definition: "Independent quantification of achieved savings against the baseline, required before ESCerts are issued." },
            ],
            examQuestions: [
              {
                q: "Explain the Perform, Achieve and Trade scheme: its objectives, cycle structure, ESCerts and how trading works for over- and under-achievers.",
                marks: 7,
                outline: [
                  "Origin: launched 2012 under NMEEE; implements the EC Act's market provisions.",
                  "Coverage: Cycle I - 8 sectors, 478 designated consumers, 2012-15.",
                  "Baseline and target: normalised SEC; reduction of roughly 4-8% notified per consumer.",
                  "Compliance: perform projects; accredited auditor verifies at cycle end.",
                  "ESCerts: 1 certificate = 1 toe of verified saving; issued only for overachievement.",
                  "Trading: laggards buy certificates on power exchanges or face penalties.",
                  "Conclude: efficiency becomes a tradeable asset; later cycles ratchet coverage and targets.",
                ],
              },
              { q: "What is an ESCert and what does one unit represent?", marks: 2 },
              { q: "How is the baseline SEC of a designated consumer established and why is it normalised?", marks: 3 },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Energy Management",
      summary:
        "Running energy as a business function: objectives and functions of energy management, the energy manager and policy, energy accounting with Sankey diagrams, SEC benchmarking and EnPIs, and the ISO 50001 management system.",
      chapter: {
        number: "02",
        title: "Energy Management Practice",
        intro:
          "Unit II turns conservation into management: what an energy manager is paid to do, the policy that empowers them, and the measurement toolkit - energy accounting with Sankey diagrams, benchmarking with specific energy consumption and EnPIs, and the ISO 50001 system that keeps it all improving.",
        inOneBreath:
          "Energy management is the judicious use of energy to maximise profit per unit of output; it runs through planning, organising, directing and controlling; the energy manager owns meters, data, audits and PAT compliance; the energy policy is top management's signed charter; energy accounting balances energy like money and draws it as a Sankey diagram; SEC benchmarking and EnPIs compare performance against baselines; and ISO 50001 wraps the whole discipline in a Plan-Do-Check-Act system.",
        sections: [
          {
            number: "2.1",
            title: "Energy management: meaning, objectives and functions",
            body: [
              "Energy management is the judicious and effective use of energy to maximise profits and minimise cost per unit of output - not the minimisation of energy for its own sake, but its optimisation as a resource. Its objectives read like any management function: secure the cheapest reliable supply, convert it efficiently, cut waste in distribution and end use, hold consumption per unit of product on a downward trend, comply with statutes such as the EC Act and PAT, and cut the environmental burden that follows every kilowatt-hour.",
              "The functions follow the classic management cycle. Planning sets the energy policy, objectives, targets and budgets. Organising creates the energy cell, appoints the energy manager, and installs the metering and data systems without which nothing is visible. Directing runs training, awareness campaigns, standard operating procedures and housekeeping drives. Controlling compares actual consumption against targets, investigates deviations and triggers corrective action - this is where monitoring-and-targeting tools such as CUSUM charts earn their keep. Sustaining closes the loop through management review.",
              "Two-thirds of industrial savings typically come from management and operating discipline, not new hardware: the boiler tuned to the right excess air, the compressor turned off on Sunday, the furnace door kept shut. But housekeeping decays, which is why energy management is designed as a permanent system - the same insight ISO 50001 formalises later in this unit. In the exam, the pyramid is the expected picture: policy on top for direction, housekeeping as the broad base everyone owns, and the functions of planning, organising, directing and controlling threaded through the middle layers.",
            ],
            bullets: [
              "Definition: judicious, effective use of energy to maximise profits - optimise, not merely minimise.",
              "Objectives: minimise cost per unit product, secure supply, cut waste, hold SEC on a downward trend.",
              "Planning function: energy policy, targets, budgets, audit calendar.",
              "Organising function: energy cell, energy manager, metering and data systems.",
              "Directing function: training, awareness campaigns, SOPs, housekeeping drives.",
              "Controlling function: monitor vs targets, investigate deviations, corrective action, management review.",
            ],
            table: {
              caption: "The four functions of energy management in practice.",
              headers: ["Function", "Typical activities", "Output"],
              rows: [
                ["Planning", "Set objectives, SEC targets, budgets, audit calendar", "Energy policy and annual plan"],
                ["Organising", "Energy cell, metering plan, roles and responsibilities", "Accountability and data systems"],
                ["Directing", "Training, campaigns, operating procedures, housekeeping", "Awareness and discipline"],
                ["Controlling", "Compare actuals vs targets, analyse deviations", "M&V reports and corrective action"],
                ["Sustaining", "Management review, reset targets, ISO 50001 cycle", "Continual improvement"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The energy management pyramid",
              caption: "Nothing above works without the layer below it.",
              tiers: [
                { label: "Policy and top-management commitment", note: "direction" },
                { label: "Organisation: manager and energy cell", note: "ownership" },
                { label: "Monitoring, metering, targeting", note: "data" },
                { label: "Audits and projects", note: "action" },
                { label: "Housekeeping and awareness", note: "the base everyone owns" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Define energy management and state its objectives' is a perennial 7-mark opener. Quote the definition verbatim, list objectives as a numbered list, then close with the four functions mapped to activities. The pyramid diagram earns the presentation mark that separates 6 from 7.",
            },
            keyTerms: [
              { term: "Energy management", definition: "The judicious and effective use of energy to maximise profits and competitiveness of an organisation." },
              { term: "Energy management system", definition: "The organised set of processes, responsibilities and resources through which an organisation manages energy - formalised by ISO 50001." },
              { term: "Good housekeeping", definition: "No-cost operating discipline - switch-offs, door closure, tune-ups, leak repair - that typically yields the first tranche of savings." },
            ],
            examQuestions: [
              {
                q: "Define energy management and discuss its objectives and functions in an industrial organisation.",
                marks: 7,
                outline: [
                  "Definition: judicious and effective use of energy to maximise profit per unit of output.",
                  "Objectives: cost per unit product, reliable supply, waste elimination, SEC reduction, compliance, emissions.",
                  "Function - planning: policy, targets, budgets, audit calendar.",
                  "Function - organising: energy cell, manager, metering, data systems.",
                  "Function - directing: training, awareness, SOPs, housekeeping.",
                  "Function - controlling: monitoring vs targets, deviation analysis, corrective action.",
                  "Conclude: management discipline, not just hardware, delivers and sustains savings.",
                ],
              },
              { q: "How does energy management differ from energy conservation?", marks: 2 },
              { q: "List four no-cost or low-cost housekeeping measures an energy manager should start with.", marks: 3 },
            ],
          },
          {
            number: "2.2",
            title: "The energy manager and the energy policy",
            body: [
              "The energy manager is the person the whole system runs through. Under the Act, designated consumers must appoint - at a sufficiently senior level - an energy manager, ideally certified through the BEE national examination, whose statutory duties include reporting energy data to the BEE and the state agency, keeping the plant audit-ready, driving compliance with norms, and building the internal pipeline of conservation projects. Day to day, the role owns meters and data, energy accounting, project justification, and the awareness campaigns that keep savings from decaying.",
              "The energy policy is the one-page charter that gives the manager authority. A credible industrial policy contains: a statement of top-management commitment; measurable objectives and targets (say, a stated percentage cut in SEC per year); the resources - budget, staff and instrumentation - committed to reach them; compliance obligations under the EC Act and PAT; procurement rules that buy on life-cycle cost rather than lowest price; and a dated management review that resets targets. Signed by the chief executive, it converts energy from a cost nobody owns into a performance indicator somebody answers for.",
              "Distinguish the manager from the energy auditor - a favourite two-mark distinction. The manager is internal, continuous, and accountable for performance; the auditor is typically external, episodic, and accountable for the numbers, certifying audits and PAT verification. They work best in sequence: the manager prepares data and implements findings, the auditor independently validates. Also distinguish policy from plan: the policy states intent and authority; the annual action plan states projects, owners, budgets and dates. Write both, review both, and let every project in the plan trace back to a line in the policy.",
            ],
            bullets: [
              "Designated consumers must appoint an energy manager - ideally BEE-certified - at senior level.",
              "Statutory duties: data reporting, audit readiness, compliance with norms, project pipeline.",
              "Day-to-day: meters and data, energy accounting, project justification, awareness campaigns.",
              "Energy policy elements: commitment, measurable targets, resources, compliance, procurement rules, review.",
              "Policy signed by top management converts energy into somebody's performance indicator.",
              "Manager (internal, continuous) vs auditor (external, certifies numbers) - exam's favourite distinction.",
            ],
            table: {
              caption: "What a credible industrial energy policy contains.",
              headers: ["Policy element", "Typical commitment", "Why it matters"],
              rows: [
                ["Top-management commitment", "Approve policy; review energy performance quarterly", "Policy fails without visible ownership"],
                ["Objectives and targets", "Reduce SEC by a stated % each year", "Gives the team a number to defend"],
                ["Resources", "Budget for meters, audits and the energy cell", "Words without money go nowhere"],
                ["Compliance", "Meet the EC Act, PAT and other legal requirements", "Statutory obligations stated up front"],
                ["Procurement", "Buy on life-cycle cost, not lowest price", "Locks efficiency into new equipment"],
                ["Review", "Annual management review; update policy", "Keeps the policy alive"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Energy manager vs energy auditor",
              caption: "One runs the system daily; the other certifies the numbers.",
              left: {
                heading: "Energy manager (in-house)",
                items: [
                  "Appointed by the designated consumer under the Act",
                  "Owns metering, SEC data and PAT compliance",
                  "Drives projects and housekeeping all year",
                  "Reports to top management",
                  "Qualified through the BEE certification examination",
                ],
              },
              right: {
                heading: "Energy auditor (external)",
                items: [
                  "Independent - usually an accredited firm",
                  "Conducts and signs energy audits",
                  "Validates savings and M&V for PAT",
                  "Serves multiple clients and sectors",
                  "Certified energy auditor: BEE exam plus audit experience",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Two-mark insurance",
              body: "Memorise the manager-vs-auditor distinction as a one-liner: 'The energy manager is the plant's continuous internal owner of energy performance; the energy auditor is the independent external professional who measures and certifies it.' It appears in some form almost every year.",
            },
            keyTerms: [
              { term: "Energy manager", definition: "The designated senior person responsible for energy data, audits, compliance and the conservation project pipeline of a plant." },
              { term: "Energy policy", definition: "Top management's signed statement of energy objectives, targets, resources and review commitments." },
              { term: "Energy cell", definition: "The cross-functional team - engineering, operations, finance - that executes the energy management programme." },
            ],
            examQuestions: [
              {
                q: "State the duties of an energy manager under the EC Act and list the essential elements of an industrial energy policy.",
                marks: 7,
                outline: [
                  "Context: designated consumers must appoint an energy manager; certification route via BEE exam.",
                  "Statutory duties: report data to BEE/SDA, comply with norms, keep plant audit-ready.",
                  "Operational duties: metering, energy accounting, project development, awareness.",
                  "Policy element: top-management commitment - the policy's authority.",
                  "Policy element: measurable objectives and targets with resources.",
                  "Policy elements: compliance obligations, life-cycle-cost procurement, dated review.",
                  "Conclude: policy gives authority; manager converts it into performance.",
                ],
              },
              { q: "Who appoints an energy manager and when is the appointment mandatory?", marks: 2 },
              { q: "Why must the energy policy be signed by the chief executive rather than the energy manager?", marks: 3 },
            ],
          },
          {
            number: "2.3",
            title: "Energy accounting and Sankey diagrams",
            body: [
              "Energy accounting applies the discipline of financial accounting to energy: every unit entering a defined boundary is measured, recorded and traced to its use or loss, so that the books balance. The common currency conversions must be memorised: 1 kWh = 860 kcal; 1 tonne of oil equivalent (toe) is about 10 Gcal, or 41.9 GJ, or 11.63 MWh. Once fuel, steam, electricity and compressed air are all expressed in one unit, consumption can be charged to cost centres exactly like money, and losses stand out as line items rather than anonymous costs.",
              "The Sankey diagram is energy accounting made visible: arrows whose widths are proportional to energy quantity, entering at the left, branching to end uses and shrinking through losses to the right. Constructing one forces the balance to close: define the boundary (a boiler house, a section, the whole plant), meter or estimate each stream, and reconcile to within about 5%. The classic plant picture - 100 units of fuel plus purchased power in, about 13 lost in the boiler, 3 in distribution, 45 in end-use equipment, and under half delivered as useful work - is redrawn in the flow diagram below.",
              "Sankeys earn their keep by ranking losses. A diagram that shows 9% going up the stack and 3% leaking from traps tells the energy manager exactly which project file to open first, and the same diagram, redrawn after implementation, becomes the proof of saving. Keep the account monthly, tie it to production so it becomes an SEC trend, and you have the backbone that every later tool - benchmarking, EnPIs, PAT baselines - hangs on. The code example builds one plant's numbers and prints the stage efficiencies the diagram would show.",
            ],
            bullets: [
              "Energy accounting: measure, record and balance every unit across a defined boundary, like money.",
              "Conversions to memorise: 1 kWh = 860 kcal; 1 toe ≈ 10 Gcal ≈ 41.9 GJ ≈ 11.63 MWh.",
              "Sankey diagram: arrow widths proportional to energy; inputs left, losses shrink the flow rightward.",
              "Balance must close to ≈ 5% - a bigger residual means a meter or an estimate is wrong.",
              "Classic plant picture: boiler ≈ -13%, distribution ≈ -3%, end use ≈ -45%, useful work < 50%.",
              "Redraw after implementation and the Sankey becomes proof of saving.",
            ],
            codeExample: {
              language: "python",
              caption: "Building the numbers behind a plant Sankey diagram (kWh per day).",
              code: `# Numbers behind a plant Sankey diagram (units: kWh/day)
fuel_in = 100_000            # fuel fired in the boiler
power_in = 8_000             # purchased electricity

stack_loss = 9_000           # flue gas carries heat up the stack
radiation = 2_500            # shell and piping surfaces
blowdown = 1_800             # water + heat blown down
steam_out = fuel_in - stack_loss - radiation - blowdown

distribution_loss = 3_200    # leaks, failed traps, bare pipes
at_process = steam_out - distribution_loss

motor_loss = power_in * 0.12             # motors and drives
end_use_efficiency = 0.55                # ovens, dryers, equipment
useful = at_process * end_use_efficiency + (power_in - motor_loss) * 0.75

print(f"Boiler efficiency: {steam_out / fuel_in:.1%}")
print(f"Steam delivered to process: {at_process:,.0f} kWh/day")
print(f"Useful energy: {useful:,.0f} kWh/day")
print(f"Overall plant efficiency: {useful / (fuel_in + power_in):.1%}")`,
            },
            diagram: {
              kind: "flow",
              title: "Reading a plant Sankey",
              caption: "Fuel enters at 100 plus 8 purchased; useful work leaves under half.",
              steps: [
                { label: "Fuel in: 100", note: "plus 8 of purchased power" },
                { label: "Boiler losses: -13", note: "stack, shell, blowdown" },
                { label: "Distribution: -3", note: "leaks, traps, insulation" },
                { label: "End-use losses: -45", note: "ovens, dryers, motors" },
                { label: "Useful work: ≈ 47", note: "conservation attacks every arrow above" },
              ],
            },
            callout: {
              type: "warning",
              title: "Balance or nothing",
              body: "A Sankey that does not close to within about 5% is not a Sankey - it is a guess with arrows. Before drawing, reconcile meters against bills and one instrument against another. Examiners ask 'how is a Sankey constructed?' and 'close the balance' is the step most answers forget.",
            },
            keyTerms: [
              { term: "Energy accounting", definition: "The measurement, recording and reconciliation of all energy entering, converting and leaving a defined boundary." },
              { term: "Sankey diagram", definition: "A flow diagram in which arrow widths are proportional to energy quantities, exposing where input energy is lost." },
              { term: "Energy balance", definition: "The statement equating energy input to useful output plus losses over a boundary and period." },
            ],
            examQuestions: [
              {
                q: "What is energy accounting? Explain the construction and use of a Sankey diagram with a plant example.",
                marks: 7,
                outline: [
                  "Define energy accounting: financial discipline applied to energy; cost-centre charging.",
                  "State unit conversions: 1 kWh = 860 kcal; 1 toe ≈ 10 Gcal ≈ 11.63 MWh.",
                  "Define the Sankey diagram: widths proportional to energy flow.",
                  "Construction steps: define boundary, meter streams, convert to one unit, balance to ≈ 5%.",
                  "Worked example: 100 fuel + 8 power in; -13 boiler, -3 distribution, -45 end use; ≈ 47 useful.",
                  "Uses: rank losses, target audits, prove post-implementation savings.",
                  "Conclude: the Sankey is the audit's front page.",
                ],
              },
              { q: "Convert 1 MWh into kcal and into tonnes of oil equivalent.", marks: 2 },
              { q: "Why must an energy balance be closed across a defined boundary before it is used for decisions?", marks: 3 },
            ],
          },
          {
            number: "2.4",
            title: "Benchmarking: specific energy consumption and EnPIs",
            body: [
              "Specific energy consumption - energy per unit of product, in kWh per tonne or kcal per kilogram - is the most used number in this subject because it makes plants of different sizes comparable. Benchmarking sets that SEC against three references: the plant's own best sustained period (internal), the sector's best plant (external), and the theoretical minimum from thermodynamics. The gap between a plant and its sector benchmark, multiplied by output, prices the improvement opportunity before any audit begins - which is why benchmarks decide where audit effort goes.",
              "Raw SEC misleads whenever production or weather shifts, so ISO 50006 formalises energy performance indicators. The simplest EnPI is the ratio itself; the regression EnPI fits energy as a function of the relevant variables - production, degree days, feed quality - so that deviations flag real performance change rather than volume change. The energy baseline (EnB) fixes the reference relationship for a stated period; performance in the reporting period is judged against it, normalised to comparable conditions. CUSUM charts then show cumulative drift, revealing when a process quietly degraded months before anyone noticed.",
              "Worked numbers beat prose. In the example below, monthly SEC swings between roughly 285 and 320 kWh per tonne, and the fitted regression separates fixed consumption - the plant's idle load - from variable consumption per tonne. The intercept is the leak to attack with scheduling and switch-offs; the slope improves with process efficiency. The matrix places plants on the SEC-versus-production map: the high-volume, high-SEC quadrant is the priority audit target because every kilowatt-hour saved there multiplies across the largest throughput - a one-line justification examiners reward.",
            ],
            bullets: [
              "SEC = energy per unit product (kWh/t, kcal/kg) - the subject's central ratio.",
              "Three benchmark references: own best, sector best, thermodynamic minimum.",
              "Gap to benchmark x output = the priced improvement opportunity.",
              "EnPI (ISO 50006): simple ratio or regression of energy on production, weather, feed quality.",
              "Energy baseline (EnB): the reference relationship against which reporting periods are judged.",
              "CUSUM of deviations exposes slow drift - degradation visible months earlier.",
            ],
            codeExample: {
              language: "python",
              caption: "Monthly SEC and a regression EnPI fitted on five months, tested on the sixth.",
              code: `# SEC per month plus a regression EnPI: fit Jan-May, predict June
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
production = [820, 760, 910, 880, 950, 700]    # tonnes
energy = [246_000, 238_000, 265_000, 258_000, 272_000, 224_000]  # kWh

for m, p, e in zip(months, production, energy):
    print(f"{m}: SEC = {e / p:,.0f} kWh/t")

# Least-squares fit on the first five months
x = production[:5]
y = energy[:5]
n = len(x)
sx = sum(x); sy = sum(y)
sxx = sum(v * v for v in x)
sxy = sum(a * b for a, b in zip(x, y))
slope = (n * sxy - sx * sy) / (n * sxx - sx * sx)
intercept = (sy - slope * sx) / n
print(f"EnPI model: energy = {slope:.0f} x production + {intercept:,.0f}")

pred_june = slope * production[5] + intercept
print(f"June predicted {pred_june:,.0f} kWh vs actual {energy[5]:,} kWh")
print(f"Genuine saving in June: {pred_june - energy[5]:,.0f} kWh")`,
            },
            diagram: {
              kind: "matrix",
              title: "Where a plant sits on the SEC map",
              caption: "The quadrants set the audit agenda: fix the top row, learn from the bottom right.",
              axes: { x: "Production volume ->", y: "Specific energy consumption ->" },
              quadrants: [
                { label: "Small and thirsty", note: "Low volume, high SEC - check part-load operation and idle running" },
                { label: "Priority audit target", note: "High volume, high SEC - every kWh saved here multiplies" },
                { label: "Steady state", note: "Low volume, low SEC - monitor, do not over-invest" },
                { label: "Benchmark plant", note: "High volume, low SEC - document practice and replicate" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When a numerical gives monthly energy and production, always compute SEC per month first, then explain in one line that a regression EnPI separates fixed from variable consumption. The intercept = fixed load, the slope = variable per tonne - examiners look for exactly those two words.",
            },
            keyTerms: [
              { term: "Specific energy consumption (SEC)", definition: "Energy consumed per unit of product or output, e.g. kWh per tonne." },
              { term: "EnPI", definition: "Energy performance indicator per ISO 50006 - a ratio or model relating energy use to relevant variables." },
              { term: "Energy baseline (EnB)", definition: "The reference energy-performance relationship for a stated period, against which future performance is compared." },
            ],
            examQuestions: [
              {
                q: "Explain specific energy consumption and energy performance indicators, and show how benchmarking is used to prioritise conservation effort.",
                marks: 7,
                outline: [
                  "Define SEC with units; why it makes plants comparable.",
                  "Three benchmark references: internal best, sector best, theoretical minimum.",
                  "Price the opportunity: (plant SEC - benchmark SEC) x annual output.",
                  "Define EnPI per ISO 50006: simple ratio and regression forms.",
                  "Explain normalisation: production, weather, product mix adjustments.",
                  "Energy baseline EnB: reference period; CUSUM drift detection.",
                  "Conclude: benchmarks rank plants, EnPIs judge change - together they target audits.",
                ],
              },
              { q: "Define EnPI and energy baseline as used in ISO 50006.", marks: 2 },
              { q: "A plant's SEC improved from 310 to 295 kWh/t while production rose 15%. Why might raw SEC mislead, and how do you check?", marks: 3 },
            ],
          },
          {
            number: "2.5",
            title: "ISO 50001 energy management systems",
            body: [
              "ISO 50001 is the international standard for energy management systems, first published in 2011 and revised in 2018. It does not mandate any efficiency level; it mandates the system that drives improvement: understand your energy use (the energy review), fix a baseline and indicators, set objectives and action plans, run operational controls, and review performance so the cycle repeats. Plan-Do-Check-Act is the engine, and energy performance - measurable, normalised, trended - is the output. Certification is voluntary but increasingly demanded by customers and lenders.",
              "The 2018 clause structure is worth memorising as a spine: Clause 4 (context of the organisation - interested parties, scope and boundaries), Clause 5 (leadership and the energy policy), Clause 6 (planning - energy review, baselines, EnPIs, objectives), Clause 7 (support - resources, competence, awareness, documented information), Clause 8 (operation - controls and the design and procurement decisions that lock in lifetime energy use), Clause 9 (performance evaluation - monitoring, measurement, internal audit, management review) and Clause 10 (improvement - nonconformity, corrective action, continual improvement).",
              "Two ideas distinguish ISO 50001 from its environmental cousin ISO 14001: energy is treated as a controllable input with measurable intensity, and procurement plus design receive their own requirements, because the cheapest savings are those specified before equipment is bought. In the exam, draw the PDCA wheel with the clause themes on each spoke, and be ready to define energy review, energy baseline and EnPI in one line each - these definitions are the standard short questions, and the 2018 revision's emphasis on data-driven decisions is the phrase that lifts an answer.",
            ],
            bullets: [
              "ISO 50001: first published 2011, revised 2018; certifiable, voluntary standard for an EnMS.",
              "Mandates the system, not an efficiency level: continual improvement of energy performance.",
              "Clause spine: context, leadership, planning, support, operation, performance evaluation, improvement.",
              "Clause 6 core objects: energy review, energy baseline (EnB), EnPIs, objectives and action plans.",
              "Clause 8 uniqueness: design and procurement must consider life-cycle energy use.",
              "PDCA is the engine; management review is the ratchet that resets targets.",
            ],
            table: {
              caption: "ISO 50001:2018 clause structure at a glance.",
              headers: ["Clause", "Theme", "Core requirement"],
              rows: [
                ["4", "Context", "Interested parties; EnMS scope and boundaries"],
                ["5", "Leadership", "Energy policy; top-management accountability"],
                ["6", "Planning", "Energy review, baselines, EnPIs, objectives, action plans"],
                ["7", "Support", "Resources, competence, awareness, documented information"],
                ["8", "Operation", "Operational control; design and procurement"],
                ["9", "Performance evaluation", "Monitoring, measurement, internal audit, management review"],
                ["10", "Improvement", "Nonconformity, corrective action, continual improvement"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "ISO 50001: the PDCA wheel",
              caption: "The 2018 standard runs Plan-Do-Check-Act on the energy system itself.",
              steps: [
                { label: "Plan", note: "energy review, baseline, EnPIs, objectives" },
                { label: "Do", note: "competence, controls, design and procurement" },
                { label: "Check", note: "measure EnPIs, internal audit" },
                { label: "Act", note: "corrective action, management review" },
                { label: "Improve", note: "reset baselines, raise targets" },
              ],
            },
            callout: {
              type: "tip",
              title: "Lift-line for answers",
              body: "One sentence reliably impresses: 'ISO 50001 differs from ISO 14001 because it manages energy as a measurable input whose intensity can be quantified, normalised and driven down, and it pushes control upstream into design and procurement, where lifetime energy use is decided.'",
            },
            keyTerms: [
              { term: "EnMS", definition: "Energy management system - the organised framework of processes and responsibilities ISO 50001 specifies." },
              { term: "Energy review", definition: "The analysis of energy sources, uses and consumption that identifies significant energy uses and saving opportunities." },
              { term: "Management review", definition: "Top management's periodic evaluation of EnMS performance that resets objectives and baselines." },
            ],
            examQuestions: [
              {
                q: "Describe the structure of ISO 50001:2018 and explain how the PDCA cycle drives continual improvement in energy performance.",
                marks: 7,
                outline: [
                  "Position the standard: 2011 first, 2018 revision; certifiable, voluntary.",
                  "Clause 4-5: context, scope, leadership and the energy policy.",
                  "Clause 6: energy review, baseline, EnPIs, objectives and action plans.",
                  "Clause 7-8: competence, awareness, operational control, design and procurement.",
                  "Clause 9-10: monitoring, internal audit, management review, improvement.",
                  "Explain PDCA mapping to the clauses; review resets baselines - the ratchet.",
                  "Conclude: system sustains savings that one-off audits cannot.",
                ],
              },
              { q: "What is an energy review under ISO 50001?", marks: 2 },
              { q: "Why do design and procurement receive their own requirements in ISO 50001?", marks: 3 },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Energy Audit",
      summary:
        "Finding the savings: audit types from walk-through to detailed, the phased audit methodology, the instrument kit, the report that carries the findings, and payback, NPV and IRR to fund them.",
      chapter: {
        number: "03",
        title: "The Energy Audit",
        intro:
          "Unit III is the audit itself: types of audit, the phased methodology, the instruments that make the plant legible, the report that sells the findings, and the financial appraisal - payback, NPV, IRR - that turns findings into sanctioned projects.",
        inOneBreath:
          "An energy audit verifies, monitors and analyses energy use; walk-through audits screen in days with spot instruments, detailed audits measure for weeks and produce ranked projects; the methodology runs preparation, measurement, analysis, reporting and follow-up; instruments range from power analyzers to flue gas analyzers and lux meters; the report layers an executive summary over evidence appendices; and payback, NPV and IRR decide which projects get funded.",
        sections: [
          {
            number: "3.1",
            title: "Energy audit: definition and types",
            body: [
              "An energy audit is the verification, monitoring and analysis of energy use, including verification of conservation measures already implemented. Its purpose is information with a decision attached: where energy is used, where it is wasted, what the waste costs, and what can be done about it at what return. Formally, it produces a quantitative report of energy consumption and an action plan of conservation opportunities with savings, costs and paybacks - the document on which every later unit of this subject acts.",
              "Audits come in depths. A walk-through (or preliminary) audit is a one-to-three-day screening: bills and production data reviewed, the plant toured with spot instruments - lux meter, infrared thermometer, flue gas analyzer, clamp meter - and a list of obvious no-cost and low-cost actions, plus a judgement on whether a detailed audit would pay. A detailed (targeted) audit is an instrumented study over weeks: power logging across duty cycles, flow and pressure measurements, energy and material balances per section, and a project report ranked by financials. Between them sit area-specific audits of a single system, such as steam or compressed air.",
              "Choosing the type is part of the auditor's craft: preliminary screens, detailed decides capital. Indian law adds compulsion - designated consumers must carry out periodic energy audits through an accredited energy auditor, and PAT makes verification annual business. A well-run plant alternates: walk-through every year, detailed audit every three years or before a major investment, and continuous self-audit by the energy manager in between. In answers, present the comparison as a table - objective, duration, data, instruments, output, cost - and close with one line on when each is chosen; that closing line separates a 5 from a 7.",
            ],
            bullets: [
              "Definition: verification, monitoring and analysis of energy use, with savings quantified and costed.",
              "Walk-through / preliminary: 1-3 days, bills plus spot readings, no-cost and low-cost action list.",
              "Detailed / targeted: weeks of instrumented trials, balances per section, ranked project report.",
              "Area audits: single-system studies - steam, compressed air, motors, lighting.",
              "Designated consumers face mandatory periodic audits through accredited energy auditors.",
              "Sequencing: annual walk-through, detailed every ≈ 3 years or before capital decisions.",
            ],
            table: {
              caption: "Walk-through vs detailed energy audit.",
              headers: ["Aspect", "Walk-through / preliminary", "Detailed / targeted"],
              rows: [
                ["Duration", "1-3 days on site", "Weeks, across duty cycles"],
                ["Data", "12-24 months of bills, spot readings", "Instrumented trials, logged data"],
                ["Instruments", "Lux meter, IR thermometer, clamp meter, flue gas analyzer", "Power analyzers, flow meters, data loggers"],
                ["Output", "No-cost / low-cost action list", "Ranked projects with payback, NPV, IRR"],
                ["Cost", "Minimal", "Significant; justified by the project pipeline"],
                ["When chosen", "Screening and annual checks", "Before capital sanctions or PAT claims"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two depths, one purpose",
              caption: "The type of audit is chosen by the decision it must support.",
              left: {
                heading: "Walk-through / preliminary",
                items: [
                  "1-3 days on site with bills in hand",
                  "Spot measurements: lux, temperature, flue gas",
                  "Runs alongside normal production",
                  "No-cost and low-cost action list",
                  "Screens whether a detailed audit will pay",
                ],
              },
              right: {
                heading: "Detailed / targeted",
                items: [
                  "Weeks of work across full duty cycles",
                  "Instrumented: power loggers, flow meters",
                  "Energy and mass balances per section",
                  "Project report with savings and financials",
                  "Basis for capital sanction and PAT claims",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Types of energy audit' is best answered as a labelled table - objective, duration, data, instruments, output, cost - plus one closing line: preliminary screens, detailed decides capital. If the question asks only for definitions, give both names for each type (walk-through = preliminary) - the double naming is often the point of the question.",
            },
            keyTerms: [
              { term: "Energy audit", definition: "The verification, monitoring and analysis of energy use, including verification of conservation measures." },
              { term: "Walk-through audit", definition: "A short screening audit using bills and spot measurements to list quick, low-cost actions." },
              { term: "Detailed audit", definition: "An instrumented audit producing energy balances and financially ranked conservation projects." },
            ],
            examQuestions: [
              {
                q: "Define energy audit. Differentiate between a walk-through and a detailed energy audit with respect to objective, duration, data, instruments and outputs.",
                marks: 7,
                outline: [
                  "Definition: verification, monitoring and analysis of energy use.",
                  "Purpose: locate waste, cost it, and propose financially justified remedies.",
                  "Walk-through: 1-3 days; bills, spot instruments; no-cost/low-cost list.",
                  "Detailed: weeks; logged instruments; energy and material balances.",
                  "Instruments contrast: spot kit vs power analyzers and flow meters.",
                  "Outputs contrast: action list vs ranked project report with payback and NPV.",
                  "Close: preliminary screens, detailed decides capital; DCs must audit periodically.",
                ],
              },
              { q: "State any two objectives of an energy audit.", marks: 2 },
              { q: "When does the EC Act make an energy audit mandatory, and who must conduct it?", marks: 3 },
            ],
          },
          {
            number: "3.2",
            title: "Energy audit methodology",
            body: [
              "A detailed energy audit runs in phases, and examiners expect the sequence quoted in order. Phase 1, preparation: define scope and boundary, collect background data - 12 to 24 months of fuel and electricity bills, production records, process flow diagrams, plant layout, prior audit reports - and do an initial walk-through to size the effort. Phase 2, the field phase: install instruments, run spot, short-term and long-term measurements across representative duty cycles, and build energy and material balances for each section. Phase 3, analysis and reporting: benchmark SEC, quantify losses, develop options with savings and costs, apply financial appraisal, and deliver the ranked report.",
              "Data collection has its own discipline. Historical data establishes the baseline and its normalisation - production mix, ambient conditions, capacity utilisation - so that later savings can be claimed fairly. Field data must be logged with the conditions under which it was taken, because a kilowatt reading without its load means nothing. Every measured quantity should be cross-checked: pump power against flow and head, steam flow against fuel, metered electricity against the bill; the example below shows the standard trick of flagging months whose SEC sits more than two standard deviations from the mean before accepting them as baseline.",
              "Analysis converts data to projects: each loss identified in the balances is matched with one or more options, and each option with savings, investment and payback. The audit does not end with the report - implementation, followed by measurement and verification of the claimed savings, is the final step; the loop only closes when the meter confirms the promise. Keep the phase names consistent in answers (preparation, measurement, analysis, reporting, implementation) and attach one concrete activity to each phase; a bare list of phase names earns half marks, the activities earn the rest.",
            ],
            bullets: [
              "Phase 1 preparation: scope, boundary, 12-24 months of bills and production data, initial walk-through.",
              "Phase 2 measurement: spot, short-term and long-term instruments across duty cycles; section balances.",
              "Phase 3 analysis: benchmark SEC, quantify losses, develop and cost options, financial appraisal.",
              "Reporting: ranked recommendations; implementation and M&V close the loop.",
              "Every reading is logged with its conditions - a kW without its load means nothing.",
              "Validate baseline data: flag SEC outliers beyond two standard deviations before accepting.",
            ],
            codeExample: {
              language: "python",
              caption: "Validating a year of billing data before accepting it as the audit baseline.",
              code: `# Flag months whose SEC is a statistical outlier before
# using the year as the baseline
bills = [   # (month, kWh, production in tonnes)
    ("Jan", 246_000, 820), ("Feb", 238_000, 760), ("Mar", 265_000, 910),
    ("Apr", 258_000, 880), ("May", 272_000, 950), ("Jun", 224_000, 700),
    ("Jul", 221_000, 690), ("Aug", 259_000, 890), ("Sep", 248_000, 830),
    ("Oct", 251_000, 850), ("Nov", 263_000, 920), ("Dec", 90_000, 800),
]
secs = [(m, e / p) for m, e, p in bills]
values = [s for _, s in secs]
mean = sum(values) / len(values)
sd = (sum((v - mean) ** 2 for v in values) / len(values)) ** 0.5

for m, s in secs:
    flag = "  <-- investigate" if abs(s - mean) > 2 * sd else ""
    print(f"{m}: SEC {s:.0f} kWh/t{flag}")
print(f"Mean SEC {mean:.0f}, standard deviation {sd:.0f} kWh/t")`,
            },
            diagram: {
              kind: "pipeline",
              title: "The energy audit pipeline",
              caption: "Phase boundaries matter in theory questions - quote them in order.",
              stages: [
                { label: "Preparation", note: "scope, data request, walk-through" },
                { label: "Measurement", note: "instruments, trials, balances" },
                { label: "Analysis", note: "SEC, benchmarks, savings estimates" },
                { label: "Reporting", note: "ranked projects with financials" },
                { label: "Implementation", note: "execution and follow-up M&V" },
              ],
            },
            callout: {
              type: "tip",
              title: "Marks live in the activities",
              body: "A bare list of phases earns half marks. Attach one concrete activity to each phase: 'Preparation - collect 24 months of bills'; 'Measurement - log power across duty cycles'; 'Analysis - benchmark SEC and cost each loss'; 'Reporting - rank by payback'; 'Implementation - M&V the savings'. Five activities, five marks.",
            },
            keyTerms: [
              { term: "Pre-audit phase", definition: "The preparation stage of an audit: scope, background data and an initial screening walk-through." },
              { term: "Energy balance", definition: "Reconciliation of energy input with useful output and losses over the audit boundary." },
              { term: "Baseline data", definition: "Normalised historical energy and production data against which savings are judged." },
            ],
            examQuestions: [
              {
                q: "Describe the step-by-step methodology of a detailed energy audit from preparation to implementation follow-up.",
                marks: 7,
                outline: [
                  "Phase 1 preparation: scope, boundary, 12-24 months of bills, process data, walk-through.",
                  "Phase 2a measurement: spot, short-term and long-term instruments across duty cycles.",
                  "Phase 2b balances: energy and material balance per section; cross-check meters.",
                  "Phase 3 analysis: benchmark SEC, quantify losses, develop options with savings and costs.",
                  "Financial appraisal: payback, NPV, IRR applied to each option.",
                  "Reporting: ranked recommendations with owners and assumptions.",
                  "Implementation and M&V: verify claimed savings; the audit loop closes at the meter.",
                ],
              },
              { q: "Name any six instruments carried in a detailed energy audit kit.", marks: 2 },
              { q: "Why should at least 12 months of billing data be collected before an audit?", marks: 3 },
            ],
          },
          {
            number: "3.3",
            title: "Audit instruments",
            body: [
              "Bills tell you what was bought; instruments tell you what is happening. Electrical measurements use power analyzers and clamp meters for kW, kVA, power factor and harmonics, often logged for days to catch duty cycles and idle loads. Combustion is read with a flue gas analyzer measuring oxygen, carbon monoxide and carbon dioxide, sometimes sulphur and nitrogen oxides, against flue temperature. Illuminance surveys use lux meters; air and gas flows use anemometers and pitot tubes with manometers; steam and water flows use ultrasonic flow meters clamped on the pipe; surface temperatures use infrared thermometers and thermal cameras; leaks use ultrasonic detectors; and shaft speeds use tachometers.",
              "Selection and handling carry as many marks as the list. Each instrument has a range and accuracy; readings outside the calibrated range are guesses, so zero and span-check before use and state the calibration status in the report. Spot measurements sample an instant - fine for steady loads such as lighting, useless for batch processes; short-term and logged measurements profile the load over time and reveal starts, idling and peaks that spot readings hide. Safety matters throughout: clamp CTs on live conductors, hot surfaces and rotating equipment all demand procedure.",
              "In practice, instruments cluster into surveys. A combustion survey pairs the flue gas analyzer with the infrared thermometer to tune excess air. A motor survey logs current and power against load to find oversized machines and throttling losses. A lighting survey walks the lux meter along a grid to compare measured illuminance against the recommended task level - the gap, times area, times hours, prices the relamping case. The flow diagram turns this into a discipline: define the parameter the decision needs, pick and calibrate the instrument, measure across the duty cycle, cross-check, and log with conditions.",
            ],
            bullets: [
              "Electrical: power analyzer and clamp meter - kW, kVA, PF, harmonics; log for days, not minutes.",
              "Combustion: flue gas analyzer - O2, CO, CO2 (and SOx/NOx) with flue temperature.",
              "Lighting: lux meter walked on a grid against recommended task illuminance.",
              "Flow and velocity: anemometer, pitot tube with manometer, ultrasonic flow meter for steam and water.",
              "Thermal: infrared thermometer and thermal camera for surface losses and insulation gaps.",
              "Others: ultrasonic leak detector (air, steam traps), tachometer (speed before affinity-law math).",
            ],
            table: {
              caption: "The audit instrument kit, grouped by parameter.",
              headers: ["Parameter", "Instrument", "Note for the exam"],
              rows: [
                ["kW, kVA, PF, harmonics", "Power analyzer / power quality analyzer", "Clamp CTs; log across duty cycles"],
                ["O2, CO, CO2 in flue gas", "Flue gas analyzer", "Tune to lowest O2 without CO"],
                ["Illuminance", "Lux meter", "Compare with recommended task lux"],
                ["Air velocity and flow", "Anemometer; pitot tube + manometer", "Traverse the duct for average"],
                ["Surface temperature", "Infrared thermometer, thermal camera", "Finds insulation gaps and hot spots"],
                ["Steam and water flow", "Ultrasonic flow meter", "Non-invasive; energy balance work"],
                ["Leaks", "Ultrasonic leak detector", "Compressed air and trap surveys"],
                ["Shaft speed", "Tachometer", "Needed before affinity-law calculations"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Field measurement discipline",
              caption: "Auditors lose credibility on uncalibrated instruments - keep this loop visible.",
              steps: [
                { label: "Define the parameter", note: "what decision needs this number?" },
                { label: "Select and calibrate", note: "zero and span check before use" },
                { label: "Measure across duty", note: "spot, short-term or logged" },
                { label: "Cross-check", note: "against bills or another meter" },
                { label: "Log with conditions", note: "load, temperature, production noted" },
              ],
            },
            callout: {
              type: "warning",
              title: "Calibration is not optional",
              body: "Never report readings from an uncalibrated instrument, and never quote a spot reading for a batch process. Examiners ask 'what precautions are taken during measurement?' - the answer is calibration status, representative duty, cross-checking and condition logging, in that order.",
            },
            keyTerms: [
              { term: "Power analyzer", definition: "An instrument measuring electrical power parameters - kW, kVA, power factor, harmonics - often with data logging." },
              { term: "Flue gas analyzer", definition: "An instrument measuring flue gas composition (O2, CO, CO2, SOx, NOx) and temperature to assess combustion." },
              { term: "Lux meter", definition: "A photometer measuring illuminance in lux for lighting surveys against recommended levels." },
            ],
            examQuestions: [
              {
                q: "List the instruments used in an energy audit grouped by the parameters they measure, and state one precaution in their use.",
                marks: 7,
                outline: [
                  "Electrical: power analyzer, clamp meter - kW, kVA, PF, harmonics.",
                  "Combustion: flue gas analyzer - O2, CO, CO2 with flue temperature.",
                  "Lighting: lux meter against recommended task illuminance.",
                  "Flow: anemometer, pitot tube with manometer, ultrasonic flow meter.",
                  "Thermal and others: IR thermometer, thermal camera, ultrasonic leak detector, tachometer.",
                  "Precautions: calibrated range, representative duty, logged conditions, cross-checks.",
                  "Close: spot for steady loads; logged data for batch and varying loads.",
                ],
              },
              { q: "Which instrument assesses combustion efficiency, and what exactly do you measure with it?", marks: 2 },
              { q: "What is a lux survey, and against what is its reading compared?", marks: 3 },
            ],
          },
          {
            number: "3.4",
            title: "The energy audit report",
            body: [
              "The audit report is the deliverable; a brilliant analysis that no director can read saves nothing. Good reports are layered by audience: a one-page executive summary stating the key findings, the savings on offer, the investment required and the paybacks; an energy consumption profile showing the billed picture, the Sankey and the SEC trend; system-wise findings for each major consumer - boiler, steam, compressed air, motors, lighting, HVAC; recommendations with financials; an implementation plan; and appendices carrying the raw data, instrument lists, assumptions and full calculations.",
              "Each layer has a reader. The executive summary is read by the plant head and finance - write it last, but print it first, and quantify everything: 'replacing the failed traps saves Rs X per year at a payback of Y months.' The consumption profile anchors everyone in the same numbers. System-wise findings carry the engineering detail and the measured evidence. Recommendations must be ranked - typically by simple payback for the short list and by net present value for capital items - each with savings, cost, payback, NPV and an owner.",
              "Quality marks a professional report: state assumptions (calorific value, operating hours, tariff), show sample calculations in the body and the rest in appendices, date every measurement, and declare instrument calibration. The implementation plan names responsibilities, sequences and the monitoring plan that will verify savings - measurement and verification turns the report's promises into the next year's Sankey improvement. In the exam, the layered structure is the expected sketch: executive summary on top because it is read first, appendices at the bottom because they are verified, and everything in between in the order a decision-maker would ask for it.",
            ],
            bullets: [
              "Layer the report by reader: executive summary first, appendices last.",
              "Executive summary: findings, savings, investment and paybacks - one quantified page.",
              "Energy consumption profile: billed data, Sankey, SEC trend - the shared numbers.",
              "System-wise findings: measured evidence per major consumer.",
              "Recommendations: ranked by payback (quick wins) and NPV (capital items), each with an owner.",
              "Appendices: raw data, instrument calibration, assumptions, full calculations.",
            ],
            table: {
              caption: "Report structure and who reads each chapter.",
              headers: ["Chapter", "What goes in", "Who reads it"],
              rows: [
                ["Executive summary", "Key findings, savings, investments, paybacks", "Plant head and finance - one page"],
                ["Energy consumption profile", "Bills breakup, Sankey, SEC trend", "Management and auditors"],
                ["System-wise findings", "Boiler, steam, air, motors, lighting evidence", "Engineering heads"],
                ["Recommendations", "Ranked options with savings and financials", "Finance and projects"],
                ["Implementation plan", "Timeline, owners, monitoring and verification", "Plant team"],
                ["Appendices", "Raw data, instruments, assumptions, calculations", "Verifiers and future audits"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of the audit report",
              caption: "Top layers get read; bottom layers get verified.",
              layers: [
                { label: "Executive summary", note: "findings, savings, paybacks - one page" },
                { label: "Energy consumption profile", note: "bills, Sankey, SEC trend" },
                { label: "System-wise findings", note: "boiler, steam, air, motors, lighting" },
                { label: "Recommendations with financials", note: "ranked by payback and NPV" },
                { label: "Appendices", note: "raw data, instruments, assumptions" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The report question is a structure question: six chapters, one content line each, plus a sentence on ranking logic (payback for quick wins, NPV for capital). 'Written last, printed first' about the executive summary is the phrase examiners quote back approvingly.",
            },
            keyTerms: [
              { term: "Executive summary", definition: "The one-page quantified digest of audit findings written for top management." },
              { term: "Recommendation ranking", definition: "Ordering audit options - typically by payback for short-list items and NPV for capital items." },
              { term: "Implementation plan", definition: "The chapter assigning owners, sequences and monitoring for each accepted recommendation." },
            ],
            examQuestions: [
              {
                q: "Draw up the structure of a detailed energy audit report and explain the content and purpose of each chapter.",
                marks: 7,
                outline: [
                  "Purpose: sell findings to management - layered by reader.",
                  "Executive summary: quantified findings, savings, paybacks; written last, read first.",
                  "Energy consumption profile: billed data, Sankey diagram, SEC trend.",
                  "System-wise findings: measured evidence per major consumer.",
                  "Recommendations: ranked options with savings, cost, payback, NPV, owner.",
                  "Implementation plan with monitoring and verification responsibilities.",
                  "Appendices: raw data, instruments, assumptions, calculations - the audit trail.",
                ],
              },
              { q: "Why is the executive summary written last but printed first?", marks: 2 },
              { q: "How should audit recommendations be ranked, and why use two different criteria?", marks: 3 },
            ],
          },
          {
            number: "3.5",
            title: "Financial appraisal: payback, NPV and IRR",
            body: [
              "Audit recommendations compete for the same capital as every other project, so they must speak finance. Simple payback - investment divided by annual net savings - is the first filter every plant applies; it is intuitive and quick, but ignores the time value of money, ignores everything after the payback period, and says nothing about project life. Payback ranks a queue of quick wins well, and fails exactly where energy projects are strongest: long-life equipment such as efficient motors and VFDs whose savings run for a decade.",
              "Discounted methods repair that. Net present value discounts each future net cash flow at the company's rate r and subtracts the investment: NPV = -C0 + sum of CFt/(1+r)^t. A positive NPV adds value; among competing options, take the highest. Internal rate of return is the discount rate at which NPV equals zero - found by trial rates and interpolation - and a project is accepted when IRR clears the hurdle rate. Return on investment and discounted payback complete the toolkit; all four belong in a detailed audit's financial chapter.",
              "Numbers make it real. A Rs 10 lakh compressed-air overhaul saving Rs 3.2 lakh a year pays back in 3.1 years - borderline for a maintenance budget. Discount five years of savings at 10% and the NPV is positive at about Rs 2.1 lakh, with an IRR near 18%, which clears most hurdle rates and sanctions the project. That is the whole argument of this section: payback screens, NPV decides. The Python below computes all three, and the fork diagram shows how the metrics sort proposals into fund-now, sanction-as-capital, redesign and hold categories.",
            ],
            bullets: [
              "Simple payback = investment / annual net saving; first filter, ignores time value and later years.",
              "NPV = -C0 + sum of CFt/(1+r)^t; accept when positive, compete by highest.",
              "IRR = the discount rate where NPV = 0; accept when above the hurdle rate; find by trial and interpolation.",
              "ROI and discounted payback complete the audit's financial toolkit.",
              "Worked case: Rs 10 lakh at Rs 3.2 lakh/yr -> payback 3.1 yr, NPV(10%) ≈ +Rs 2.1 lakh, IRR ≈ 18%.",
              "Rule: payback ranks the queue; NPV and IRR decide the final yes.",
            ],
            codeExample: {
              language: "python",
              caption: "Payback, NPV and IRR for a Rs 10 lakh conservation project.",
              code: `# Appraise a Rs 10 lakh project saving Rs 3.2 lakh per year
capex = 1_000_000
savings = [320_000] * 5          # five years of savings
rate = 0.10                      # company discount rate

payback = capex / savings[0]
print(f"Simple payback: {payback:.2f} years")

npv = -capex + sum(s / (1 + rate) ** (t + 1)
                   for t, s in enumerate(savings))
print(f"NPV at 10%: Rs {npv:,.0f}")

# IRR by bisection: the rate where NPV = 0
def npv_at(r):
    return -capex + sum(s / (1 + r) ** (t + 1)
                        for t, s in enumerate(savings))

lo, hi = 0.0, 1.0
for _ in range(60):
    mid = (lo + hi) / 2
    if npv_at(mid) > 0:
        lo = mid
    else:
        hi = mid
print(f"IRR: {mid:.1%}")`,
            },
            diagram: {
              kind: "fork",
              title: "Screening a Rs 10 lakh proposal",
              caption: "Payback ranks the queue; NPV and IRR decide the final yes.",
              start: "Audit proposes a compressed-air overhaul costing Rs 10 lakh",
              branches: [
                { label: "Payback under 2 years", outcome: "Quick win - fund from the maintenance budget", good: true },
                { label: "Long payback, strong NPV and IRR over hurdle", outcome: "Sanction as a capital project - lifecycle value", good: true },
                { label: "Negative NPV even after sensitivity", outcome: "Reject or redesign the scheme", good: false },
                { label: "Payback met but savings unverifiable", outcome: "Hold until an M&V plan exists", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Near-certain numerical",
              body: "A payback-plus-NPV numerical appears almost every year. Practise the cash-flow table: year, cash flow, discount factor 1/(1+r)^t, discounted cash flow, cumulative. Show the discount factors to three decimals and the NPV to the nearest rupee - method marks outnumber answer marks.",
            },
            keyTerms: [
              { term: "Simple payback", definition: "Investment divided by annual net savings; the time to recover the outlay, ignoring the time value of money." },
              { term: "Net present value", definition: "The discounted value of all future net cash flows minus the investment; positive NPV creates value." },
              { term: "Internal rate of return", definition: "The discount rate at which NPV is zero; the project's implicit earning rate, compared with the hurdle rate." },
            ],
            examQuestions: [
              {
                q: "A project costs Rs 10 lakh and saves Rs 3.2 lakh per year for five years. Compute the simple payback, the NPV at a 10% discount rate, and explain how the IRR is determined.",
                marks: 7,
                outline: [
                  "Simple payback = 10,00,000 / 3,20,000 = 3.12 years.",
                  "Set the cash-flow table: years 1-5, Rs 3.2 lakh each; year 0, -Rs 10 lakh.",
                  "Discount factors at 10%: 0.909, 0.826, 0.751, 0.683, 0.621.",
                  "Discounted savings total ≈ Rs 12.13 lakh; NPV ≈ +Rs 2.13 lakh.",
                  "Positive NPV: the project creates value at 10%.",
                  "IRR: trial rates - NPV = 0 between 15% and 20%; interpolate to ≈ 18%.",
                  "Conclude: IRR above typical hurdle rates -> accept; payback alone would have been borderline.",
                ],
              },
              { q: "Define internal rate of return.", marks: 2 },
              { q: "Two projects both pay back in three years. How do NPV and IRR separate them?", marks: 3 },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Thermal and Electrical Conservation",
      summary:
        "Where the fuel goes: boiler efficiency and combustion control, steam traps, insulation and blowdown, furnace losses, motor efficiency classes and VFDs, and lighting, transformers and compressed air.",
      chapter: {
        number: "04",
        title: "Conservation in the Plant",
        intro:
          "Unit IV walks the plant: boilers and combustion, steam systems with their traps and insulation, furnaces and their losses, motors with their efficiency classes and VFDs, and the electrical estate of lighting, transformers and compressed air.",
        inOneBreath:
          "Boiler efficiency is 100 minus itemised losses, with stack loss dominating and excess air as the lever; steam systems lose through failed traps, bare surfaces and blowdown, answered by trap surveys, economic insulation thickness and flash recovery; furnaces lose through flue gas, walls and open doors, answered by housekeeping, ceramic fibre and recuperators; motors come in classes IE1 to IE4 and VFDs exploit the cube-law relation between speed and power; and lighting, transformers and compressed air complete the electrical savings programme.",
        sections: [
          {
            number: "4.1",
            title: "Boiler efficiency and combustion control",
            body: [
              "The boiler is where most of the fuel enters most plants, so its efficiency is the subject's most examined calculation. The direct method divides heat output in steam by heat input in fuel - simple, but a two-point measurement whose errors cancel nothing, and it tells you nothing about why efficiency is low. The indirect (heat-loss) method instead itemises every loss - dry flue gas, evaporation of water formed from hydrogen in the fuel, moisture in fuel and in combustion air, radiation and convection from the shell, unburnt carbon in ash, and blowdown heat - and defines efficiency as 100 minus their sum.",
              "The stack loss dominates and is arithmetic: it rises with exit flue gas temperature and falls with carbon dioxide percentage, in the classic Siegert-type relation, loss proportional to (flue gas temperature minus air temperature) divided by percent CO2. Two audit rules of thumb follow. Every 22 deg C cut in exit gas temperature buys roughly 1% efficiency, which is why economisers and air preheaters pay; and every tightening of excess air cuts the mass of gas heated only to be thrown away. Hydrogen loss is unavoidable chemistry - about 9 kg of water forms per kg of hydrogen burned, and every kilogram leaves as vapour carrying its latent heat.",
              "Combustion control keeps the loss low continuously. Boilers need excess air - typically 10-30% over stoichiometric for oil and gas, more for solid fuels - because too little air makes carbon monoxide and soot, while too much simply heats and dumps nitrogen. O2 trim control reads the flue oxygen and trims the air damper continuously; portable analyzers let audits set the curve. The indirect method's numbers, computed below for an oil-fired boiler, land in the mid-to-high eighties on a GCV basis - and being loss-itemised, each percentage point can be assigned an owner and a remedy.",
            ],
            bullets: [
              "Direct method: efficiency = heat in steam / heat in fuel - simple but uninformative.",
              "Indirect method: efficiency = 100 - sum of itemised losses - the audit standard.",
              "Losses to list: dry flue gas, hydrogen in fuel, moisture in fuel and air, radiation, unburnt, blowdown.",
              "Stack loss follows a Siegert-type rule: proportional to (Tg - Ta)/%CO2.",
              "Rule of thumb: every 22 deg C cut in exit gas temperature ≈ 1% efficiency gain.",
              "Excess air: ≈ 10-30% for oil and gas; O2 trim keeps it at the minimum without CO.",
            ],
            codeExample: {
              language: "python",
              caption: "Indirect (heat-loss) efficiency of an oil-fired boiler.",
              code: `# Indirect (heat-loss) efficiency of an oil-fired boiler
flue_temp = 190        # deg C, after the economiser
air_temp = 30          # deg C, combustion air
co2_pct = 11.5         # dry flue gas CO2 percentage
fuel_gcv = 10_200      # kcal/kg of fuel oil
h2_in_fuel = 0.09      # fraction of hydrogen in the fuel

# Siegert-type stack loss (kcal/kg fuel), factor ≈ 48 for oil
stack_loss = 48 * (flue_temp - air_temp) / co2_pct

# Water formed from hydrogen leaves as vapour with its latent heat
h2_loss = 9 * h2_in_fuel * (584 + 0.45 * (flue_temp - 100))

radiation_loss = 0.015 * fuel_gcv     # shell and piping
unburnt_loss = 0.003 * fuel_gcv       # carbon in ash and soot

total = stack_loss + h2_loss + radiation_loss + unburnt_loss
print(f"Stack loss: {stack_loss:.0f} kcal/kg")
print(f"Hydrogen loss: {h2_loss:.0f} kcal/kg")
print(f"Total losses: {total:.0f} kcal/kg")
print(f"Boiler efficiency on GCV: {1 - total / fuel_gcv:.1%}")`,
            },
            diagram: {
              kind: "flow",
              title: "Indirect (heat-loss) efficiency in five moves",
              caption: "Efficiency is never measured directly - it is 100 minus the losses you itemise.",
              steps: [
                { label: "Measure flue gas", note: "O2/CO2 and temperature" },
                { label: "Compute stack loss", note: "Siegert-type formula" },
                { label: "Add fuel-based losses", note: "hydrogen, moisture in fuel and air" },
                { label: "Add radiation and unburnt", note: "shell surfaces, carbon in ash" },
                { label: "Efficiency = 100 - sum", note: "state GCV or NCV basis" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always name the basis: efficiency on GCV runs several points below efficiency on NCV because GCV includes the latent heat of water vapour. Examiners deduct marks for a bare percentage; write 'on GCV basis' or 'on NCV basis' beside every efficiency number in your answer.",
            },
            keyTerms: [
              { term: "Indirect method", definition: "Boiler efficiency found as 100 minus the sum of itemised heat losses." },
              { term: "Excess air", definition: "Air supplied beyond the stoichiometric requirement - 10-30% typical for oil and gas firing." },
              { term: "Stack loss", definition: "Heat carried away by flue gas; the dominant boiler loss, rising with exit temperature and excess air." },
            ],
            examQuestions: [
              {
                q: "Explain the direct and indirect methods of boiler efficiency testing with formulae, and state why the indirect method is preferred in energy audits.",
                marks: 7,
                outline: [
                  "Direct method: efficiency = heat output in steam / heat input in fuel; formula and measurements.",
                  "Limitations of direct: errors do not cancel; gives no loss breakdown.",
                  "Indirect method: efficiency = 100 - sum of losses.",
                  "Itemise losses: dry flue gas, hydrogen, moisture in fuel and air, radiation, unburnt, blowdown.",
                  "Stack loss: Siegert-type relation with (Tg - Ta) and %CO2; 22 deg C rule of thumb.",
                  "Why preferred: each loss is quantified, so each has a remedial project and an owner.",
                  "Close with typical values: oil-fired ≈ 85-88% on GCV.",
                ],
              },
              { q: "State the rule of thumb linking flue gas exit temperature to boiler efficiency.", marks: 2 },
              { q: "Why does excess air increase stack loss, and how much is normally used for oil firing?", marks: 3 },
            ],
          },
          {
            number: "4.2",
            title: "Steam systems: traps, insulation and blowdown",
            body: [
              "Between the boiler and the process, steam systems leak money through three holes. Failed steam traps pass live steam to the condensate line - a failed-open trap on a typical line wastes several kilograms of steam per hour, all of it boiler fuel. Leaks from flanges and valve stems are visible plumes whose cost is computed from orifice flow. And every bare or damaged-lagged surface radiates continuously; heat loss from an uninsulated surface can be an order of magnitude higher than from a properly lagged one, which is why standard surface-loss tables belong in every audit kit.",
              "Traps classify into mechanical, thermostatic and thermodynamic families. Mechanical traps - inverted bucket, float and thermostatic - distinguish steam from condensate by density; thermostatic traps - balanced pressure, bimetallic - by temperature; thermodynamic disc traps by the velocity difference between condensate and flash steam. Each has a preferred service and a characteristic failure mode: buckets lose their water seal and blow steam, bimetallics lag and back up condensate, discs cycle themselves to death. A trap survey tests each trap by temperature difference and ultrasonic listening, classifies it, and sizes the leak - the fork diagram is the survey's decision logic.",
              "Blowdown controls total dissolved solids in the boiler water - too little scales and corrodes, too much dumps hot water and treatment chemicals to drain. The remedies are quantification and recovery: compute the required blowdown from feed and boiler TDS, replace manual blows with continuous modulating control, and pass the blowdown through a flash tank whose vapour returns as low-pressure steam, then an exchanger that preheats feed water with the remaining hot condensate. Insulation, finally, is chosen by economic thickness - the thickness at which the sum of heat-loss cost and insulation cost is minimum - a definition examiners ask verbatim.",
            ],
            bullets: [
              "Three steam-side holes: failed traps (live steam to condensate line), leaks, bare surfaces.",
              "Trap families: mechanical (inverted bucket, float), thermostatic (bimetallic, balanced pressure), thermodynamic (disc).",
              "Failure modes: failed-open blows steam; failed-closed backs up condensate and risks water hammer.",
              "Trap survey: temperature difference plus ultrasonic test; classify and quantify each trap.",
              "Blowdown: TDS control; recover via flash tank (LP steam) plus heat exchanger preheating feed water.",
              "Economic thickness of insulation: total annual cost of heat loss plus insulation is minimum.",
            ],
            table: {
              caption: "Steam trap families, working principles and failure modes.",
              headers: ["Trap family", "Working principle", "Best use", "Failure mode to quote"],
              rows: [
                ["Inverted bucket (mechanical)", "Bucket floats on condensate, sinks under steam", "Steam mains, higher pressure", "Loses water seal and blows live steam"],
                ["Float and thermostatic (mechanical)", "Buoyant float valve plus air vent", "Heat exchangers, process loads", "Float sinks: trap passes steam"],
                ["Thermodynamic disc", "Flash steam velocity flips the disc", "Mains tracing, outdoor, small loads", "Rapid cycling wears seat, leaks"],
                ["Balanced pressure (thermostatic)", "Bellows expands at steam temperature", "Tracing, small equipment", "Bellows ruptures, fails open"],
                ["Bimetallic (thermostatic)", "Laminated metals bend with temperature", "Where subcooling is acceptable", "Slow response backs up condensate"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "A steam trap survey: what each finding means",
              caption: "Failed-open traps waste steam; failed-closed traps flood equipment.",
              start: "Ultrasonic and temperature check on each trap",
              branches: [
                { label: "Trap healthy", outcome: "Condensate passes, steam blocked - log and move on", good: true },
                { label: "Failed open (blowing steam)", outcome: "Live steam to the condensate line - replace immediately", good: false },
                { label: "Failed closed (backed up)", outcome: "Waterlogged exchanger and water hammer risk - replace", good: false },
                { label: "Leaking or rapid cycling", outcome: "Seat erosion - schedule replacement", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Definitions asked verbatim",
              body: "Two definitions appear as short questions: a steam trap ('an automatic valve that discharges condensate and air while preventing the passage of live steam') and economic thickness of insulation ('the thickness at which the total cost - heat loss cost plus insulation cost - is minimum'). Word-perfect answers earn full marks.",
            },
            keyTerms: [
              { term: "Steam trap", definition: "An automatic device that discharges condensate and non-condensables while blocking the passage of live steam." },
              { term: "Economic thickness of insulation", definition: "The insulation thickness at which the sum of annual heat-loss cost and insulation cost is minimum." },
              { term: "Blowdown", definition: "Removal of boiler water to control total dissolved solids, recoverable through flash tanks and heat exchangers." },
            ],
            examQuestions: [
              {
                q: "Classify steam traps with their working principles and failure modes, and outline the procedure of a steam trap survey.",
                marks: 7,
                outline: [
                  "Purpose of a trap: discharge condensate and air, hold back live steam.",
                  "Mechanical family: inverted bucket and float types - density difference.",
                  "Thermostatic family: balanced pressure and bimetallic - temperature difference.",
                  "Thermodynamic family: disc trap - velocity of flash steam.",
                  "Failure modes: failed open blows steam; failed closed floods equipment; cycling erodes seats.",
                  "Survey procedure: identify and number traps, test by temperature and ultrasound, classify, quantify steam loss, rank replacements by payback.",
                  "Close: failed-open traps are the commonest finding and the quickest payback.",
                ],
              },
              { q: "Define economic thickness of insulation.", marks: 2 },
              { q: "Explain how heat is recovered from boiler blowdown.", marks: 3 },
            ],
          },
          {
            number: "4.3",
            title: "Industrial furnaces: losses and efficiency",
            body: [
              "Industrial furnaces - for forging, reheating, heat treatment and melting - run far below boiler efficiency: 20-40% is common practice and anything above 50% is good. The reason is temperature: flue gases leave hot, walls are hot, openings radiate ferociously, and the stock itself radiates while waiting. Efficiency is evaluated like a boiler's, by heat balance: heat absorbed by the stock divided by heat supplied by fuel, with the losses itemised - flue gas (usually the largest), wall conduction and radiation, radiation through open doors and peepholes, unburnt fuel, and the idle-firing loss of a furnace held hot with nothing inside.",
              "Measurement mirrors the loss list: flue gas analyzer and pyrometer for exit temperature and excess air, surface pyrometer or thermal camera for wall losses, and stock temperature for heat actually absorbed. The remedies then stack in the order of cost. Housekeeping first - doors shut, peep sights covered, idle burners off, production scheduled so the furnace runs full. Then combustion tuning to the minimum excess air that avoids carbon monoxide. Then refractory upgrades - ceramic fibre modules cut wall loss and thermal mass together, which also shortens start-ups. Finally waste heat recovery: a recuperator returning flue-gas heat as preheated combustion air.",
              "The capital step carries the classic rules of thumb: every 100 deg C of combustion-air preheat saves roughly 5% of furnace fuel, and every 22 deg C of flue gas temperature drop is about 1% of input - the same physics the boiler section taught, at higher stakes. Load scheduling multiplies everything, because an empty hot furnace converts fuel to nothing at full rate. In answers, present the loss table with causes and remedies, then quote the pyramid: free housekeeping at the base, waste heat recovery at the apex, and let the numbers pick the order.",
            ],
            bullets: [
              "Typical furnace efficiency: 20-40% common; > 50% is good practice - far below boilers.",
              "Efficiency by heat balance: heat absorbed by stock / heat in fuel.",
              "Loss list: flue gas, wall conduction and radiation, open-door radiation, unburnt, idle firing.",
              "Rules of thumb: ≈ 100 deg C air preheat saves ≈ 5% fuel; 22 deg C flue drop ≈ 1% input.",
              "Ceramic fibre lining cuts both wall loss and thermal mass - faster start-ups too.",
              "Empty hot furnace = 100% loss: scheduling and switch-off discipline come before hardware.",
            ],
            table: {
              caption: "Furnace losses, causes and the remedy the examiner wants.",
              headers: ["Loss", "Typical cause", "Remedy"],
              rows: [
                ["Flue gas loss", "High excess air, high exit temperature", "Tune combustion; install a recuperator"],
                ["Wall and roof loss", "Thin or damaged refractory", "Re-line with ceramic fibre modules"],
                ["Opening loss", "Doors left open, peep sights uncovered", "Door discipline, interlocks, covered sights"],
                ["Unburnt loss", "Poor atomisation, wrong air-fuel ratio", "Burner maintenance and ratio control"],
                ["Stock idle radiation", "Hot stock waiting in the open", "Batch scheduling; insulated standby boxes"],
                ["Idle firing", "Furnace held hot with no stock", "Production-linked switch-off schedule"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The furnace improvement pyramid",
              caption: "Start at the base: free housekeeping before capital recovery.",
              tiers: [
                { label: "Waste heat recovery", note: "recuperators, preheated air - capital" },
                { label: "Combustion control", note: "air-fuel ratio, O2 trim - low cost" },
                { label: "Insulation and refractory", note: "ceramic fibre, door seals" },
                { label: "Scheduling and loading", note: "full charges, fewer cold starts" },
                { label: "Housekeeping", note: "doors shut, idle firing off - free" },
              ],
            },
            callout: {
              type: "tip",
              title: "Compare and contrast",
              body: "When a question covers both boilers and furnaces, state the one contrast that explains everything: furnaces run hotter, so their flue gas and radiation losses are structurally larger and their efficiencies structurally lower - which is exactly why recuperators were invented for furnaces first.",
            },
            keyTerms: [
              { term: "Furnace efficiency", definition: "Heat absorbed by the stock divided by heat supplied by fuel, evaluated by heat balance." },
              { term: "Charge scheduling", definition: "Planning furnace loads so the furnace runs full, minimising idle firing and cold starts." },
              { term: "Recuperator", definition: "A gas-to-gas heat exchanger that preheats combustion air using furnace flue gas." },
            ],
            examQuestions: [
              {
                q: "List the major heat losses of an industrial furnace with their causes and remedies, and explain how furnace efficiency is evaluated.",
                marks: 7,
                outline: [
                  "Definition: efficiency = heat absorbed by stock / heat input in fuel.",
                  "Flue gas loss: excess air and exit temperature; tune and recuperate.",
                  "Wall and roof loss: conduction plus radiation; ceramic fibre re-line.",
                  "Opening loss: radiation from doors and peeps; discipline and interlocks.",
                  "Unburnt and idle-firing losses: burner condition; production-linked switch-off.",
                  "Rules of thumb: 100 deg C preheat ≈ 5% fuel; 22 deg C flue drop ≈ 1% input.",
                  "Close with the improvement pyramid: housekeeping to waste heat recovery.",
                ],
              },
              { q: "State two rules of thumb for furnace fuel saving.", marks: 2 },
              { q: "Why do furnace efficiencies lag boiler efficiencies?", marks: 3 },
            ],
          },
          {
            number: "4.4",
            title: "Electric motors: efficiency classes and VFDs",
            body: [
              "Electric motors convert roughly 70% of industrial electricity into motion, so motor policy is energy policy. The IEC 60034-30-1 efficiency classification grades motors IE1 to IE4: IE1 standard, IE2 high, IE3 premium and IE4 super-premium, each a step of one to three efficiency points over the class below for a typical 11-90 kW machine. Two operational sins waste the rest: oversized motors running permanently at part load, where efficiency collapses, and rewound motors, which typically lose a point or two of efficiency with every rewind. Right-sizing plus IE3-or-better procurement is the baseline discipline.",
              "Where the load varies - fans, pumps and compressors throttled by dampers and valves - the affinity laws turn speed into money. Flow varies directly with speed, pressure with speed squared, and power with speed cubed. So a fan slowed to 80% speed draws about 51% of rated power instead of the roughly 90% that damper control absorbs, and at 70% speed about 34%. A variable frequency drive is therefore the single highest-return motor project in variable-load duty - with two caveats: static head limits the usable speed range in pumping systems, and drives introduce harmonics that may need filtering.",
              "Complete the motor programme with the rest of the checklist: correct power factor at the bus with capacitors so kVA demand falls, soft starters to cut starting stress, efficient transmissions (flat belts replaced by cogged belts), and preventive maintenance so unbalance and bearing friction do not quietly eat the gains. The worked example below prices a 45 kW fan conversion: average damper power against average VFD power across a realistic duty cycle, times hours, times tariff. Numbers like these - not adjectives - are what sanction VFD budgets, and the compare diagram is the figure to redraw in the exam.",
            ],
            bullets: [
              "Motors consume ≈ 70% of industrial electricity - the biggest electrical target.",
              "IEC 60034-30-1 classes: IE1 standard, IE2 high, IE3 premium, IE4 super-premium.",
              "Part-load operation and repeated rewinding are the two great motor sins.",
              "Affinity laws: flow varies with speed, pressure with speed^2, power with speed^3.",
              "At 80% speed a fan draws ≈ 51% power; at 70% speed ≈ 34% - damper control cannot approach this.",
              "Caveats: static head limits speed reduction; harmonics may need filters.",
            ],
            codeExample: {
              language: "python",
              caption: "Pricing a VFD conversion on a 45 kW fan with a realistic duty cycle.",
              code: `# Affinity laws at work: damper throttling vs VFD on a 45 kW fan
rated_kw = 45
hours = 6_000            # operating hours per year
tariff = 8               # Rs per kWh
duty = [                 # (flow %, hours %)
    (100, 20), (90, 30), (80, 30), (70, 20),
]

# Damper control: motor at full speed, power roughly follows flow
damper_kw = sum(rated_kw * (f / 100) * h / 100 for f, h in duty)

# VFD: power follows the cube of speed (flow)
vfd_kw = sum(rated_kw * (f / 100) ** 3 * h / 100 for f, h in duty)

saving = (damper_kw - vfd_kw) * hours * tariff
print(f"Average damper power: {damper_kw:.1f} kW")
print(f"Average VFD power: {vfd_kw:.1f} kW")
print(f"Annual saving: Rs {saving:,.0f}")`,
            },
            diagram: {
              kind: "compare",
              title: "Damper throttling vs VFD speed control",
              caption: "Same flow reduction, completely different power bill.",
              left: {
                heading: "Damper / valve throttling",
                items: [
                  "Motor runs at full speed always",
                  "Damper adds resistance and absorbs pressure",
                  "Power falls only roughly with flow",
                  "At 70% flow still ≈ 75-80% of rated power",
                  "Valve wear and noise as side effects",
                ],
              },
              right: {
                heading: "VFD speed control",
                items: [
                  "Motor speed follows the load",
                  "Affinity laws: power follows speed cubed",
                  "At 80% flow: ≈ 51% power; at 70%: ≈ 34%",
                  "Soft start cuts demand peaks and stress",
                  "Static head limits how low you can go",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The number to carry",
              body: "Memorise three points of the cube-law curve: 90% speed ≈ 73% power, 80% speed ≈ 51% power, 70% speed ≈ 34% power. A two-mark question asking 'what power does a fan draw at 80% speed' appears repeatedly, and 51% (or 0.8 cubed = 0.512) is the expected answer.",
            },
            keyTerms: [
              { term: "IE class", definition: "IEC 60034-30-1 efficiency grading of motors from IE1 (standard) to IE4 (super-premium)." },
              { term: "Affinity laws", definition: "Fan and pump laws: flow varies with speed, pressure with speed squared, power with speed cubed." },
              { term: "Static head", definition: "The fixed portion of a pumping system's head that limits how far speed - and therefore power - can be reduced." },
            ],
            examQuestions: [
              {
                q: "Explain motor efficiency classes IE1 to IE4 and show, using affinity laws, how variable frequency drives save energy in fans and pumps.",
                marks: 7,
                outline: [
                  "Context: motors ≈ 70% of industrial electricity load.",
                  "IEC 60034-30-1: define IE1 to IE4; each step worth 1-3 points of efficiency.",
                  "System losses: oversizing to part load; efficiency loss on each rewind.",
                  "Affinity laws: state all three - flow, pressure, power relations.",
                  "Worked numbers: 80% speed ≈ 51% power; 70% ≈ 34% vs damper ≈ 75-80%.",
                  "Applications: fans, pumps, compressors with varying load; soft-start benefit.",
                  "Caveats: static head in pumping; harmonics; then close on IE3 procurement policy.",
                ],
              },
              { q: "A fan is slowed to 75% of rated speed. What fraction of rated power does it ideally draw?", marks: 2 },
              { q: "Why do VFD savings shrink when a pumping system has high static head?", marks: 3 },
            ],
          },
          {
            number: "4.5",
            title: "Lighting, transformers and compressed air",
            body: [
              "Lighting is the easiest audit: count, measure, compare. Lamp efficacy - lumens per watt - now spans a generation: incandescent 10-15, compact fluorescent 45-60, tubular fluorescent 60-95 and LED 100-150 or more, so an LED retrofit typically halves lighting energy at equal or better illuminance. Illuminance, in lux, is lumens per square metre, checked against recommended task levels with a lux meter walked on a grid. Then delamp overlit areas, add occupancy and daylight sensors, clean fixtures, and move to task lighting - in that order, cheapest first.",
              "Transformers lose energy two ways: no-load (iron) losses, present whenever the transformer is energised, and load (copper) losses, rising with the square of load. At poor load factors the iron loss dominates, so right-sizing - retiring one of two parallel units at light load - and amorphous-core distribution transformers, which cut no-load losses by 60-70%, are the standard measures. Power factor correction and kVA demand management belong on the same electrical bill. Compressed air is the final target and the most expensive utility per useful unit: 20-30% of generated air leaks away, so leak surveys pay before anything else.",
              "After leaks, compressed air savings come from pressure, controls and heat. Cutting generation pressure to the minimum the process truly needs saves several percent of input power per bar or so; variable-speed compressors match generation to demand; sequencing controls stage multiple machines; and compressor waste heat can warm air or water rather than the sky. The table collects the standard measures with the savings they are usually credited; the layered diagram stacks them into a programme. Quote the headline numbers - 20-30% leak loss, 40-60% lighting saving, 60-70% no-load reduction - and each becomes a short question answered in advance.",
            ],
            bullets: [
              "Lamp efficacy ladder: incandescent 10-15, CFL 45-60, tubular fluorescent 60-95, LED 100-150 lm/W.",
              "Lux = lumens per square metre; survey with a meter on a grid against task levels, then delamp.",
              "Occupancy and daylight sensors trim lighting a further 10-30%.",
              "Transformer losses: no-load (iron) constant, load (copper) with load squared; right-size and consider amorphous cores.",
              "Compressed air: 20-30% lost to leaks; survey and repair before any capital measure.",
              "Cut air pressure to the process minimum; recover compressor heat; sequence multiple machines.",
            ],
            table: {
              caption: "Standard electrical conservation measures and credited savings.",
              headers: ["Area", "High-impact measure", "Typical saving quoted"],
              rows: [
                ["Lighting", "LED retrofit with delamping to task lux", "40-60% of lighting load"],
                ["Lighting controls", "Occupancy and daylight sensors", "10-30% further on lighting"],
                ["Transformers", "Right-size; amorphous core at low load factor", "30-70% of no-load loss"],
                ["Compressed air", "Leak survey and repair; minimum pressure", "20-30% of compressor energy"],
                ["Reactive power", "Correct power factor to ≈ 0.98 at the bus", "Removes PF penalty, frees kVA"],
                ["HVAC", "Set-point discipline and ECBC-level envelope", "20-30% of cooling energy"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The electrical conservation stack",
              caption: "Attack any layer - but meter everything you change.",
              layers: [
                { label: "Lighting", note: "LED retrofits, delamp to task lux, controls" },
                { label: "Transformers", note: "right-size, amorphous core, load factor" },
                { label: "Compressed air", note: "leaks, minimum pressure, heat recovery" },
                { label: "Motors and drives", note: "IE3 plus, VFDs where load varies" },
                { label: "Metering and power factor", note: "sub-metering, APFC, kVA demand" },
              ],
            },
            callout: {
              type: "warning",
              title: "Costliest utility warning",
              body: "Compressed air is the most expensive energy carrier in a plant - often eight to ten units of electricity per unit of mechanical energy delivered at the point of use. Treat every leak as a cash leak, and never specify compressed air for jobs a brush or a blower can do.",
            },
            keyTerms: [
              { term: "Lamp efficacy", definition: "Lumens of light delivered per watt of electricity consumed by the lamp." },
              { term: "No-load loss", definition: "Transformer iron loss, present whenever it is energised, independent of load." },
              { term: "Utilisation factor", definition: "The fraction of lamp lumens that actually reaches the working plane in a lighting installation." },
            ],
            examQuestions: [
              {
                q: "Discuss energy conservation measures in the lighting, transformer and compressed air systems of an industrial plant, with typical savings.",
                marks: 7,
                outline: [
                  "Lighting: efficacy ladder incandescent to LED; LED retrofit halves load.",
                  "Lighting: lux survey, delamping, occupancy and daylight controls.",
                  "Transformers: no-load vs load losses; right-sizing parallel units.",
                  "Transformers: amorphous cores cutting no-load loss 60-70%; PF correction.",
                  "Compressed air: 20-30% leak loss; survey by ultrasonic detection.",
                  "Compressed air: minimum pressure, VSD machines, heat recovery.",
                  "Close with typical savings numbers for each area.",
                ],
              },
              { q: "Define lamp efficacy and compare LED with tubular fluorescent lamps.", marks: 2 },
              { q: "Why do distribution transformers waste energy even with no load connected?", marks: 3 },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Renewable and Cogeneration",
      summary:
        "Beyond the fence: solar PV and thermal, wind and biomass, cogeneration and trigeneration, waste heat recovery equipment, fuel cells and storage, and carbon trading with industry case studies.",
      chapter: {
        number: "05",
        title: "Renewables, Cogeneration and Markets",
        intro:
          "Unit V widens the lens: solar, wind and biomass; cogeneration and trigeneration; waste heat recovery equipment from recuperators to heat pipes; fuel cells and storage; and the carbon markets that pay for verified reductions.",
        inOneBreath:
          "India receives 4-7 kWh per square metre per day of solar radiation; PV delivers it through modules, inverters and net meters at a performance ratio near 80%, while solar thermal collectors deliver 60-75% as direct heat; wind power follows the cube of velocity; biomass viability is fuel logistics; cogeneration converts 75-85% of one fuel into power plus heat, and trigeneration adds cooling; waste heat is graded by temperature and matched to recuperators, heat pipes or heat pumps; and carbon markets pay for verified reductions, with PAT's ESCerts as India's domestic variant.",
        sections: [
          {
            number: "5.1",
            title: "Solar energy: photovoltaic and thermal",
            body: [
              "India receives solar radiation of roughly 4-7 kWh per square metre per day, and the resource exceeds any conceivable demand. Photovoltaic conversion turns it straight into direct current: modules of silicon cells at about 18-22% module efficiency, strings feeding an inverter at 96-98%, the whole chain derated by soiling, wiring and temperature to a performance ratio of roughly 75-85%. Net metering settles the exported surplus against the imported deficit, which is what makes rooftop economics work for a plant whose load curve peaks in daylight.",
              "Solar thermal harvests heat instead of electrons and is far more efficient at it: flat plate and evacuated tube collectors deliver 60-75% of incident energy as hot water at 60-80 deg C, with evacuated tubes holding efficiency better in cold and cloudy weather. Applications ladder up by temperature: water heating and drying, industrial process heat and desalination through concentrating collectors, and concentrating solar power for electricity at scale. The choice is first-law simple - if the need is heat, buy heat directly rather than electricity to make heat.",
              "Sizing is the standard numerical. Daily load in kilowatt-hours divided by peak sun hours and system efficiency gives the required kilowatt-peak; multiply by module rating for module count and by module area for roof area; annual generation then follows. The example below sizes a 400 kWh/day plant load and lands near 96 kWp - about 176 modules and some 460 square metres of roof - figures consistent with real installations. For the exam, quote the chain - modules, inverter, net meter, load, yield check - and be ready to define performance ratio in one line.",
            ],
            bullets: [
              "India's resource: ≈ 4-7 kWh/m^2/day; solar capacity is now measured in tens of GW.",
              "PV chain: modules (18-22%) -> inverter (96-98%) -> net meter -> load or export.",
              "Performance ratio ≈ 75-85% after soiling, wiring and temperature derates.",
              "Net metering: export and import settled, which anchors rooftop economics.",
              "Solar thermal: flat plate and evacuated tube collectors at 60-75% efficiency for 60-80 deg C water.",
              "Sizing chain: kWh/day / (peak sun hours x system efficiency) = kWp; then modules and area.",
            ],
            codeExample: {
              language: "python",
              caption: "Sizing a rooftop PV array for a 400 kWh/day plant load.",
              code: `# Size a rooftop PV array for a 400 kWh/day weekday load
daily_kwh = 400
peak_sun_hours = 5.2        # typical for central India
system_eff = 0.80           # soiling, wiring, inverter derates

required_kw = daily_kwh / (peak_sun_hours * system_eff)
print(f"Array size needed: {required_kw:.1f} kWp")

# Modules, area and annual generation
module_wp = 545
count = required_kw * 1000 / module_wp
area = count * 2.6          # m^2 of roof per module
print(f"Modules: {count:.0f}  (about {area:,.0f} m^2 of roof)")

gen_year = required_kw * peak_sun_hours * 365 * system_eff
print(f"Annual generation: {gen_year:,.0f} kWh")`,
            },
            diagram: {
              kind: "flow",
              title: "A rooftop PV system, end to end",
              caption: "Each element derates the chain - size for delivered kWh, not nameplate.",
              steps: [
                { label: "PV modules", note: "DC output at given irradiance and temperature" },
                { label: "Inverter", note: "DC to AC at ≈ 96-98%" },
                { label: "Net meter", note: "export and import settled" },
                { label: "Plant loads", note: "daytime load first, export the rest" },
                { label: "Yield check", note: "performance ratio ≈ 75-85%" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The PV sizing numerical has a fixed shape: divide daily kWh by peak sun hours and system efficiency to get kWp, then scale to modules and area. State peak sun hours as an assumption (≈ 5-6 for most of India) and performance ratio ≈ 80% - the numbers then carry themselves.",
            },
            keyTerms: [
              { term: "Peak sun hours", definition: "Equivalent hours per day at 1 kW/m^2 irradiance; ≈ 4-7 across India." },
              { term: "Performance ratio", definition: "Actual AC energy delivered divided by the energy the nameplate DC array would yield at reference irradiance." },
              { term: "Evacuated tube collector", definition: "A solar thermal collector with concentric vacuum tubes that cut losses, suited to higher temperatures." },
            ],
            examQuestions: [
              {
                q: "Explain the working and applications of solar PV and solar thermal systems, and outline how a rooftop PV system is sized.",
                marks: 7,
                outline: [
                  "PV principle: photovoltaic conversion in silicon cells; module efficiency 18-22%.",
                  "System chain: array, inverter at 96-98%, net metering, load or export.",
                  "Performance ratio 75-85%: soiling, wiring, temperature derates.",
                  "Solar thermal: flat plate vs evacuated tube collectors, 60-75% efficiency.",
                  "Applications ladder: water heating, drying, process heat, concentrating power.",
                  "Sizing: daily kWh / (peak sun hours x efficiency) = kWp; modules and roof area follow.",
                  "Worked example: 400 kWh/day at 5.2 PSH and 80% -> ≈ 96 kWp.",
                ],
              },
              { q: "What is net metering in a rooftop PV installation?", marks: 2 },
              { q: "Distinguish a flat plate collector from an evacuated tube collector.", marks: 3 },
            ],
          },
          {
            number: "5.2",
            title: "Wind and biomass energy systems",
            body: [
              "Wind power is cubic: the power in moving air equals 0.5 times air density times swept area times velocity cubed, so a 25% rise in wind speed nearly doubles available power. A turbine starts generating at its cut-in speed (about 3-4 m/s), reaches rated output around 11-15 m/s, and shuts down at cut-out (about 25 m/s) to protect itself; because wind is intermittent, a machine delivers its rating only about 20-35% of the year - its capacity factor. Site selection is therefore everything: wind corridors, hub height, land and grid access decide viability long before the turbine does.",
              "Biomass is stored solar energy in fuel form - agro residues, bagasse, wood and process waste. Thermal routes dominate: direct combustion to raise steam (the sugar-mill bagasse boiler), gasification converting solid fuel into a combustible producer gas driving engines or turbines at roughly 18-22% electrical efficiency, and cogeneration combining both. Fuel logistics rule the economics: density, seasonality and moisture content decide the viable collection radius, and fuel must typically be dried before gasification. Methane from digesters adds a wet-route option for effluents and cattle waste.",
              "India's numbers anchor the short questions: wind capacity stands around 45-48 GW, concentrated in Gujarat and Tamil Nadu; bagasse cogeneration in sugar mills exports surplus power to the grid; and biomass gasifier programmes electrify villages and SME clusters. The selection matrix is the practical tool: capital intensity against fuel and site dependence sorts the options - solar water heating as the cheap first step, PV almost anywhere with a roof, wind only where a measured corridor exists, biomass where fuel logistics are solved. Quote the cube law and the moisture caveat, and both technology families are covered.",
            ],
            bullets: [
              "Wind power = 0.5 x air density x swept area x velocity cubed - the cube law rules.",
              "Operating band: cut-in ≈ 3-4 m/s, rated ≈ 11-15 m/s, cut-out ≈ 25 m/s.",
              "Capacity factor 20-35%: intermittency means rating is delivered only part of the year.",
              "Biomass routes: combustion to steam, gasification to producer gas (18-22% electric), digestion to methane.",
              "Biomass viability = fuel logistics: density, seasonality, moisture, collection radius.",
              "India: wind ≈ 45-48 GW (Gujarat, Tamil Nadu); bagasse cogen exports power from sugar mills.",
            ],
            table: {
              caption: "Renewable options compared for plant-level decisions.",
              headers: ["Technology", "Working scale", "Ballpark performance", "India note"],
              rows: [
                ["Solar PV", "1 kW rooftop to GW parks", "Module 18-22%; PR ≈ 75-85%", "Tens of GW installed and growing fast"],
                ["Solar thermal", "Domestic to process heat", "Collectors 60-75% efficient", "Hot water and drying first choices"],
                ["Wind", "kW turbines to multi-MW farms", "Capacity factor 20-35%", "≈ 45-48 GW; Gujarat and Tamil Nadu corridors"],
                ["Biomass gasifier", "kW to a few MW", "Engine route ≈ 18-22% electric", "Agro-residue and SME cluster fuel"],
                ["Bagasse cogeneration", "Sugar-mill scale", "Steam plus power, surplus exported", "Mills turned into power suppliers"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the right renewable for a site",
              caption: "Capital intensity vs fuel and site dependence sorts the options fast.",
              axes: { x: "Capital intensity ->", y: "Fuel / site dependence ->" },
              quadrants: [
                { label: "Biomass gasifier", note: "moderate capex, but fuel logistics decide viability" },
                { label: "Wind farm", note: "high capex; needs a measured corridor and grid access" },
                { label: "Solar thermal", note: "low capex, low fuel needs - water heating first" },
                { label: "Solar PV", note: "capex falling fast; works almost anywhere with a roof" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two constants to quote",
              body: "Wind: power follows the cube of velocity - so site selection is 90% of the economics. Biomass: moisture content kills efficiency - fuel must be dried before gasification. One line each, and both families are covered in any long answer.",
            },
            keyTerms: [
              { term: "Cut-in speed", definition: "The wind speed, about 3-4 m/s, at which a turbine begins generating." },
              { term: "Biomass gasification", definition: "Partial combustion of biomass to produce a combustible producer gas for engines or boilers." },
              { term: "Capacity factor", definition: "Actual annual energy generated divided by the energy the rating would deliver at full output." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for power available in wind and explain the operating speed ranges of a wind turbine. Outline the main biomass-to-energy routes with one application each.",
                marks: 7,
                outline: [
                  "Kinetic energy of air mass: P = 0.5 x rho x A x V^3; define each term.",
                  "Cube law: 25% more wind speed nearly doubles power.",
                  "Betz limit as the theoretical ceiling on extraction.",
                  "Operating band: cut-in 3-4 m/s, rated 11-15 m/s, cut-out ≈ 25 m/s.",
                  "Capacity factor 20-35% - intermittency and siting implications.",
                  "Biomass routes: combustion to steam, gasification to producer gas, digestion to methane.",
                  "Applications: bagasse cogeneration, gasifier-based village electrification.",
                ],
              },
              { q: "Why does available wind power rise with the cube of velocity?", marks: 2 },
              { q: "Why must biomass fuel be dried before gasification?", marks: 3 },
            ],
          },
          {
            number: "5.3",
            title: "Cogeneration and trigeneration",
            body: [
              "Cogeneration - combined heat and power - generates electricity and useful heat from the same fuel in one sequence, and the efficiency gain is dramatic: a condensing power station converts about 30-40% of fuel to electricity and rejects the rest as latent heat, while a cogeneration plant delivering power plus process steam converts 75-85% of the fuel to use. The sizing variable is the heat-to-power ratio, the kilowatts of heat demanded per kilowatt of electricity, which fixes the choice of prime mover and turbine arrangement.",
              "Two configurations matter. In the topping cycle - the common industrial case - fuel is burned first for power (steam turbine, gas turbine or engine) and the exhaust or back-pressure steam supplies process heat. In the bottoming cycle, high-temperature process heat comes first (furnaces, kilns) and the waste heat generates electricity in a waste-heat-recovery boiler and turbine. Steam-turbine plants choose back-pressure machines, which exhaust all steam to process, or extraction-condensing machines, which balance process demand and power export. Trigeneration adds a vapour absorption chiller on the low-grade exhaust heat, so one fuel buys electricity, heat and cooling.",
              "Economics turn on spark spread - the price ratio of purchased electricity to fuel burned - and on utilisation: cogeneration pays when heat demand is steady, and suffers when it is seasonal; sugar mills run campaigns, so bagasse plants bank fuel and schedule accordingly. The example below does the exam arithmetic: a biomass topping cycle delivering 22% of fuel as electricity and 55% as process heat, compared with grid import at 30% generation efficiency plus a separate 75% boiler, shows primary-energy savings of about a third. Draw the layers diagram - electricity, heat, cooling stacked on a single fuel input - and label the percentages.",
            ],
            bullets: [
              "Cogeneration: one fuel, sequential power plus useful heat - overall efficiency 75-85%.",
              "Condensing power station alone: ≈ 30-40% - the rejected heat is the opportunity.",
              "Topping cycle: power first, exhaust steam to process (steam turbine, gas turbine, engine).",
              "Bottoming cycle: process heat first, waste heat to power through an HRBG-turbine chain.",
              "Machine choice: back-pressure turbine (all steam to process) vs extraction-condensing (export).",
              "Trigeneration: vapour absorption chiller on low-grade heat adds cooling to the outputs.",
            ],
            codeExample: {
              language: "python",
              caption: "Topping-cycle cogeneration vs separate grid import plus boiler.",
              code: `# Topping-cycle cogen vs separate grid power + steam boiler
fuel_kg_hr = 2_000          # biomass fuel consumption
gcv = 3_400                 # kcal/kg, biomass
fuel_kw = fuel_kg_hr * gcv / 860     # kcal/h to kW (1 kWh = 860 kcal)

steam_turbine_eta = 0.22    # fuel -> electricity
elec_kw = fuel_kw * steam_turbine_eta

# Back-pressure turbine exhausts steam still carrying process heat
process_heat_kw = fuel_kw * 0.55     # delivered to the process
cogen_useful = elec_kw + process_heat_kw
print(f"Electricity: {elec_kw:.0f} kW, process heat: {process_heat_kw:.0f} kW")
print(f"Cogen overall efficiency: {cogen_useful / fuel_kw:.1%}")

# Separate route: grid at 30% generation efficiency, boiler at 75%
boiler_fuel_kw = process_heat_kw / 0.75
primary = elec_kw / 0.30 + boiler_fuel_kw
print(f"Separate route primary energy: {primary:,.0f} kW")
print(f"Primary energy saved by cogen: {1 - fuel_kw / primary:.1%}")`,
            },
            diagram: {
              kind: "layers",
              title: "Trigeneration: one fuel, three services",
              caption: "Every kWh of fuel exits as electricity, heat or cooling - losses squeezed last.",
              layers: [
                { label: "Electricity", note: "prime mover or back-pressure turbine" },
                { label: "Process heat", note: "HRSG steam or hot water" },
                { label: "Cooling", note: "vapour absorption machine on exhaust heat" },
                { label: "Fuel input", note: "biomass, gas or engine fuel - the only purchase" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the schematic",
              body: "Cogeneration answers live or die by the sketch: fuel in, prime mover, generator, HRSG, process steam out - label the energy percentages on each arrow. Then give the one-line definitions: topping = power first, bottoming = heat first; and 'heat-to-power ratio fixes the scheme'.",
            },
            keyTerms: [
              { term: "Cogeneration", definition: "Sequential generation of electricity and useful heat from the same fuel in one installation." },
              { term: "Topping cycle", definition: "Cogeneration in which fuel generates power first and the exhaust supplies process heat." },
              { term: "Heat-to-power ratio", definition: "The ratio of heat demand to electricity demand; the sizing variable for cogeneration schemes." },
            ],
            examQuestions: [
              {
                q: "With schematics, differentiate topping and bottoming cogeneration cycles, and explain trigeneration and the heat-to-power ratio.",
                marks: 7,
                outline: [
                  "Define cogeneration: one fuel, sequential power and heat; overall efficiency 75-85%.",
                  "Topping cycle: sketch fuel -> prime mover -> power; exhaust -> HRSG -> process steam.",
                  "Bottoming cycle: process heat first (furnace, kiln); waste heat -> boiler -> turbine.",
                  "Machine choice: back-pressure vs extraction-condensing turbines.",
                  "Trigeneration: vapour absorption chiller adds cooling from low-grade heat.",
                  "Heat-to-power ratio: definition and its role in selecting the prime mover.",
                  "Close with economics: spark spread and steady heat demand; sugar-mill example.",
                ],
              },
              { q: "Define heat-to-power ratio.", marks: 2 },
              { q: "Why does a back-pressure turbine suit process plants with steady steam demand?", marks: 3 },
            ],
          },
          {
            number: "5.4",
            title: "Waste heat recovery, fuel cells and storage",
            body: [
              "Waste heat is graded by temperature, and the grade chooses the equipment. High-grade sources above about 650 deg C - furnace and kiln exhausts - suit recuperators (gas-to-gas exchangers preheating combustion air) and regenerators (checker bricks storing heat alternately). Medium streams from about 230 to 650 deg C suit waste heat boilers and metallic recuperators. Low-grade streams below about 230 deg C - condenser water, engine jackets, warm exhaust - need economisers, heat pipes or, when the heat must be lifted to a useful temperature, heat pumps.",
              "Two devices carry the exam's working-detail questions. The heat pipe is a sealed tube lined with a capillary wick: working fluid evaporates at the hot end, condenses at the cold end, and the wick returns the liquid - a heat conveyor with no moving parts, tolerant of dusty and corrosive gases, transferring heat at effective conductivities hundreds of times that of copper. The heat pump is a vapour-compression cycle run for heating duty: it absorbs low-grade heat in its evaporator and delivers it warmer at its condenser, each unit of electricity moving three to five units of heat (its coefficient of performance), but only across a small temperature lift.",
              "The rest of the family earns a line each: economisers preheat boiler feed water from flue gas; heat wheels exchange heat between air streams; condensing recovery squeezes latent heat from water vapour below the dew point, at the price of acid corrosion. Fuel cells convert hydrogen or fuel directly to electricity electrochemically - proton exchange membrane, phosphoric acid, molten carbonate and solid oxide variants, 40-60% electrical efficiency and up to about 85% with heat recovery - with no combustion and near-zero local emissions. Energy storage completes the conservation story: batteries, thermal stores, pumped hydro and flywheels let intermittent renewables and waste heat be used when they are worth most.",
            ],
            bullets: [
              "Grade the source: high > 650 deg C, medium 230-650, low < 230 - the grade picks the equipment.",
              "High grade: recuperators and regenerators preheating combustion air.",
              "Heat pipe: sealed tube, wick return, no moving parts - handles dusty and corrosive gas.",
              "Heat pump: upgrades low-grade heat at COP 3-5, but only across a small temperature lift.",
              "Economisers preheat feed water; condensing recovery extracts latent heat but risks corrosion.",
              "Fuel cells: electrochemical conversion, 40-60% electrical, ≈ 85% with heat recovery.",
            ],
            table: {
              caption: "Waste heat recovery equipment matched to source temperature.",
              headers: ["Equipment", "Best source temperature", "What it does", "Exam hook"],
              rows: [
                ["Recuperator (metallic)", "700-1,100 deg C flue gas", "Preheats combustion air, shell-and-tube", "Double-pass raises effectiveness"],
                ["Regenerator", "Up to ≈ 1,400 deg C", "Checker bricks store heat alternately", "Flips flow every few minutes"],
                ["Heat pipe", "100-350 deg C exhaust", "Two-phase sealed pipe moves heat, no moving parts", "Handles dusty, corrosive gas"],
                ["Heat pump", "30-60 deg C waste heat", "Upgrades to 80-90 deg C at COP 3-5", "Pays only when the lift is small"],
                ["Economiser", "Boiler flue gas 200-350 deg C", "Preheats feed water", "22 deg C drop ≈ 1% fuel saving"],
                ["Condensing recovery", "Below the gas dew point", "Recovers latent heat of water vapour", "Watch acid condensate corrosion"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "A heat pump upgrading waste heat",
              caption: "The exam favourite: where each degree of lift costs electricity.",
              stages: [
                { label: "Waste heat source", note: "30-60 deg C exhaust or condenser water" },
                { label: "Evaporator", note: "working fluid boils at low pressure" },
                { label: "Compressor", note: "electric lift raises temperature" },
                { label: "Condenser", note: "delivers 80-90 deg C useful heat" },
                { label: "Expansion valve", note: "cycle repeats; COP 3-5" },
              ],
            },
            callout: {
              type: "exam",
              title: "Working-detail questions",
              body: "Two questions recur: 'explain the construction and working of a heat pipe' (sealed tube, wick, evaporation-condensation cycle, no moving parts) and 'explain a heat pump with COP' (evaporator, compressor, condenser, expansion valve; COP = heat delivered / work input). Prepare both as labelled diagrams with the four components named.",
            },
            keyTerms: [
              { term: "Recuperator", definition: "A heat exchanger that continuously transfers heat from exhaust gas to incoming combustion air." },
              { term: "Heat pipe", definition: "A sealed, wick-lined tube that moves heat by evaporation and condensation of a working fluid with no moving parts." },
              { term: "COP", definition: "Coefficient of performance - heat delivered by a heat pump per unit of work input, typically 3-5." },
            ],
            examQuestions: [
              {
                q: "Classify waste heat recovery equipment by source temperature and explain the construction and working of a heat pipe and a heat pump.",
                marks: 7,
                outline: [
                  "Grade waste heat: high, medium, low with temperature bands.",
                  "High grade: recuperators and regenerators; preheated combustion air.",
                  "Medium and low grade: waste heat boilers, economisers, heat pipes, heat pumps.",
                  "Heat pipe: sealed tube, capillary wick, evaporation-condensation loop; no moving parts; handles dusty gas.",
                  "Heat pump: four components; lifts 30-60 deg C heat to 80-90 deg C at COP 3-5.",
                  "Note the limits: heat pumps pay only for small temperature lift.",
                  "Close: matching grade to equipment is the design rule; fuel cells add electrochemical option.",
                ],
              },
              { q: "Name two high-temperature waste heat recovery devices.", marks: 2 },
              { q: "How does a fuel cell differ from a heat engine in converting fuel energy?", marks: 3 },
            ],
          },
          {
            number: "5.5",
            title: "Carbon trading and case studies",
            body: [
              "Carbon trading prices the environmental externality of energy. The Kyoto Protocol created three flexible mechanisms: the Clean Development Mechanism, under which a project in a developing country that reduces emissions below a verified baseline earns certified emission reductions; Joint Implementation between developed countries; and international emissions trading of assigned amounts. One CER equals one tonne of carbon dioxide equivalent. The project cycle is the exam sequence: establish the baseline, implement, monitor, verify, issue, trade - with additionality, proving the reduction would not have happened anyway, as the gate that keeps credits honest.",
              "The European Union Emissions Trading System is the largest compliance market, capping and auctioning allowances to industry; voluntary markets sell offsets to corporates outside any cap. Prices swing, so carbon revenue must be treated as a bonus on a sound energy case, never its justification. India's domestic analogue is PAT: the ESCert, worth one tonne of oil equivalent of verified energy saving, trades on power exchanges exactly as a carbon credit does - energy rather than emissions, but the same market architecture of cap, verify and trade.",
              "Case studies convert the theory into answers. The UJALA programme distributed LED bulbs at population scale, cutting residential lighting load and avoiding generation capacity. Sugar mills cogenerate on bagasse and export surplus power to the grid, turning a waste stream into revenue. Cement plants under PAT have pushed specific energy consumption toward and below 700 kcal per kilogram of clinker in the best cases and installed waste heat recovery power. Steel plants generate power from furnace and coke-oven gas. Each case answers the same question - what worked and why: efficiency first, market revenue on top, verified savings as the currency.",
            ],
            bullets: [
              "Kyoto mechanisms: Clean Development Mechanism, Joint Implementation, International Emissions Trading.",
              "One CER = one tonne of CO2 equivalent reduced below a verified baseline.",
              "Project cycle: baseline -> implement -> monitor -> verify -> issue -> trade.",
              "Additionality: the project must prove the reduction would not have happened anyway.",
              "EU ETS is the largest compliance market; voluntary markets serve corporates outside caps.",
              "PAT's ESCert (1 toe of verified saving) is India's domestic, energy-based variant.",
            ],
            table: {
              caption: "Market mechanisms and their units.",
              headers: ["Mechanism", "Unit and basis", "Status in one line"],
              rows: [
                ["Clean Development Mechanism", "CER = 1 tCO2e reduced vs baseline", "Kyoto project mechanism; India was a leading host"],
                ["Joint Implementation", "ERU between developed countries", "Kyoto Annex B parties"],
                ["International Emissions Trading", "Assigned amount units", "Country-to-country cap and trade"],
                ["EU ETS", "Allowances auctioned under a cap", "World's largest compliance market"],
                ["PAT ESCert trading", "1 ESCert = 1 toe saved beyond target", "India's domestic energy market"],
                ["Voluntary markets", "Offsets bought by corporates", "Prices swing; verify the standard"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "How a carbon project earns and sells credits",
              caption: "One full loop from baseline to bank - quote it in order.",
              steps: [
                { label: "Establish baseline", note: "emissions without the project" },
                { label: "Implement project", note: "efficiency, renewables, fuel switch" },
                { label: "Monitor", note: "data per the monitoring plan" },
                { label: "Verify", note: "third-party validation" },
                { label: "Issue credits", note: "CER or voluntary units" },
                { label: "Trade and reinvest", note: "revenue funds the next project" },
              ],
            },
            callout: {
              type: "tip",
              title: "Units are the marks",
              body: "Two unit confusions cost easy marks: one CER is one tonne of CO2 equivalent (emissions avoided); one ESCert is one tonne of oil equivalent (energy saved). Write both definitions side by side in any carbon-trading answer and the distinction question is already answered.",
            },
            keyTerms: [
              { term: "CER", definition: "Certified Emission Reduction - one tonne of CO2-equivalent reduced below a verified baseline under the CDM." },
              { term: "Additionality", definition: "The requirement that a carbon project's reductions would not have occurred without the project and its revenue." },
              { term: "ESCert", definition: "Energy Savings Certificate under PAT, equal to one tonne of oil equivalent of verified energy saving." },
            ],
            examQuestions: [
              {
                q: "Explain the Kyoto flexible mechanisms and the carbon credit project cycle. How does India's PAT ESCert market differ from carbon markets?",
                marks: 7,
                outline: [
                  "Context: Kyoto Protocol and its three flexible mechanisms.",
                  "CDM: developing-country projects earn CERs; 1 CER = 1 tCO2e.",
                  "JI and International Emissions Trading in one line each.",
                  "Project cycle: baseline, additionality, implementation, monitoring, verification, issuance, trade.",
                  "Compliance vs voluntary markets; EU ETS as the largest compliance market.",
                  "PAT ESCerts: 1 toe of verified energy saving; traded on power exchanges.",
                  "Contrast: CER prices emissions avoided; ESCert prices energy saved - same architecture.",
                ],
              },
              { q: "What does one CER represent?", marks: 2 },
              { q: "Describe two energy conservation case studies from Indian industry and their key savings.", marks: 3 },
            ],
          },
        ],
      },
    },
  ],
  studyPlan: [
    {
      id: "weights",
      heading: "Exam weightage - where the hours go",
      body: [
        "RGPV ME-803(B) papers spread their marks across the audit methodology, the financial numericals and the boiler-cogeneration-WHR core, with scenario and management definitions supplying the short questions that anchor every paper. Allocate revision time in roughly that ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Energy audit types, methodology and instruments", weight: "10-12 marks", note: "The guaranteed long question - quote phases in order and the instrument table with parameters." },
        { topic: "Financial appraisal: payback, NPV, IRR numericals", weight: "7-10 marks", note: "One cash-flow table question appears almost every year; practise discounting to three decimals." },
        { topic: "Boiler efficiency: direct vs indirect, combustion control", weight: "8-10 marks", note: "Itemise losses in order; Siegert-type stack loss sums; state GCV or NCV basis." },
        { topic: "Cogeneration and trigeneration", weight: "7-9 marks", note: "Draw the schematic; energy-balance numbers earn the final marks; define heat-to-power ratio." },
        { topic: "Waste heat recovery equipment", weight: "6-8 marks", note: "Classify by source temperature; heat pipe and heat pump working details are favourites." },
        { topic: "EC Act 2001, BEE and PAT", weight: "6-8 marks", note: "Provisions with effects, star labelling, ESCert logic - short and long forms both appear." },
        { topic: "Energy management, Sankey, SEC, EnPIs, ISO 50001", weight: "6-8 marks", note: "Definitions are short-question gold; the PDCA diagram is expected in every ISO answer." },
        { topic: "Motors: IE classes, VFDs, affinity laws", weight: "5-7 marks", note: "The 80%-speed-gives-51%-power calculation recurs; carry the three-point cube-law curve." },
        { topic: "Steam systems: traps, insulation, blowdown", weight: "4-6 marks", note: "Trap families table plus the economic-thickness definition asked verbatim." },
        { topic: "Renewables and carbon trading", weight: "4-6 marks", note: "Compare technologies briefly; know the cube law, sizing chain, and CER vs ESCert units." },
      ],
    },
    {
      id: "six-weeks",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - scenario and the law", tasks: ["Global vs India numbers; elasticity and gap arithmetic", "EC Act provisions with the 2010 amendment", "BEE programmes and the PAT cycle diagram"] },
        { week: "Week 2", focus: "Unit II - energy management", tasks: ["Objectives and four functions; manager vs auditor", "Unit conversions; build one full Sankey balance", "SEC, EnPI regression, ISO 50001 PDCA"] },
        { week: "Week 3", focus: "Unit III part 1 - the audit", tasks: ["Audit types table; methodology phases in order", "Instrument kit grouped by parameter", "Report structure by reader"] },
        { week: "Week 4", focus: "Unit III part 2 + boiler start", tasks: ["Payback, NPV, IRR - three full numericals", "Direct vs indirect boiler efficiency; loss itemisation", "Combustion control and excess-air reasoning"] },
        { week: "Week 5", focus: "Unit IV - thermal and electrical", tasks: ["Trap families, insulation, blowdown recovery", "Furnace losses table and improvement pyramid", "IE classes, VFD cube-law sums, lighting/transformer/compressor measures"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["PV sizing; wind cube law; biomass routes", "Cogeneration energy balance; WHR equipment table", "Two full past papers under time"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last day before the exam",
      body: [
        "The last day is for retrieval, not reading. Run this list once in the morning and once at night; everything on it is either a definition asked verbatim or a numerical shape that recurs.",
      ],
      bullets: [
        "Reread the audit methodology phases and the instrument table - the highest-yield two pages in the subject.",
        "Redo one payback-NPV-IRR numerical end to end with the discount-factor table.",
        "Memorise five numbers: India per-capita electricity ≈ 1,200 kWh/yr; coal ≈ 70% of generation; 1 kWh = 860 kcal; 22 deg C flue drop ≈ 1% boiler efficiency; 1 ESCert = 1 toe.",
        "Redraw four sketches by hand: plant Sankey, ISO 50001 PDCA wheel, topping-cycle cogeneration, heat pump.",
        "Revise the trap families and WHR equipment tables as five-bullet lists each.",
        "Sleep - this paper rewards legible, structured, labelled answers over last-hour cramming.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Open 7-mark answers with the definition line, then the labelled diagram, then numbered points - structure is marked before content.",
        "Write units at every step - kW, kcal/kg, kWh/t, deg C - naked numbers lose method marks in every numerical.",
        "State assumptions before computing (GCV basis, discount rate, operating hours, tariff); assumptions earn marks even when arithmetic slips.",
        "Draw Sankey, PDCA, cogeneration and heat-pump diagrams with a ruler and label the arrows with values - a labelled sketch is worth a paragraph.",
        "Time-box: 2-mark shorts in 4-5 minutes, 7-mark longs in 15 minutes, and keep the last 10 minutes to recheck NPV and efficiency arithmetic.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Mixing GCV and NCV bases inside one boiler calculation - efficiency differs by several points between them; declare the basis.",
        "Quoting affinity laws for power as 'proportional to speed' instead of speed cubed - at 80% speed power is ≈ 51%, not 80%.",
        "Calling every audit 'detailed' - walk-through, preliminary and detailed are distinct types with distinct outputs.",
        "Computing NPV without discounting year zero, or quoting IRR without showing the two trial rates and interpolation.",
        "Confusing ESCerts (1 toe of energy saved) with CERs (1 tCO2e of emissions avoided) - write both definitions before answering.",
        "Writing 'more insulation is always better' - the exam answer is economic thickness, where heat-loss cost plus insulation cost is minimum.",
      ],
    },
  ],
};
