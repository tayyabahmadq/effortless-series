/**
 * Academics - RGPV Civil Engineering 7th-semester subject: CE-702(B)
 * Environmental Engineering-II.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries three body paragraphs, five
 * bullets, a diagram, three key terms, a callout, a table or python code
 * sample, and three exam-style questions (one 7-mark with outline plus two
 * shorts).
 */

import type { AcademicSubject } from "./types";

export const ce702b: AcademicSubject = {
  id: "ce-702-b",
  code: "CE-702(B)",
  title: "Environmental Engineering-II",
  semester: "VII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to Environmental Engineering-II: air and noise pollution and their control, solid and e-waste management, industrial wastewater treatment, and the legislation, EIA and audit framework that binds it all together.",
  description:
    "Five units walk from air pollutants, ambient standards and the classic control devices - settling chambers, cyclones, bag filters, scrubbers and ESPs - through the decibel scale, zone-wise noise limits and barriers, into solid waste characteristics, composting, incineration, RDF and sanitary landfills under the SWM and e-waste rules, then across industrial wastewater pretreatment, heavy metals, aerobic and anaerobic biology and CETPs, and finally through the Water, Air and Environment Protection Acts, EIA, environmental audit, the NGT and its landmark cases. Every section pairs the theory with a worked numerical, a redrawable diagram and the questions RGPV actually asks.",
  accentColor: "#059669",
  emoji: "EN2",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Air Pollution",
      summary:
        "The air we breathe and the machinery that keeps it breathable: what pollutants are, where they come from and what they do, the standards that define clean air, and the workhorses of control - settling chambers and cyclones, bag filters and scrubbers, the electrostatic precipitator, and the chemistry of gaseous pollutant control.",
      chapter: {
        number: "01",
        title: "Air Pollution and Its Control",
        intro:
          "Unit I defines the pollutant zoo and then equips you to clean it. Sections 1.1 and 1.2 build the vocabulary - primary versus secondary pollutants, natural versus anthropogenic sources, effects on health and materials, and the NAAQS numbers that anchor every standard question. Sections 1.3 through 1.5 march through the control hardware in the order exam papers love: gravity and centrifugal separation, then fabric filtration and wet scrubbing, then corona charging in the electrostatic precipitator, and finally absorption, adsorption and incineration for the gases.",
        inOneBreath:
          "Air pollution is contaminants in harmful quantity and duration; classify by origin, physical state and formation stage; SO2, NOx, CO, particulates, VOCs and lead are the classic primaries while ozone, PAN and acid aerosols are secondary; NAAQS 2009 fixes PM10 at 100/60, PM2.5 at 60/40, SO2 at 80/50 and NO2 at 80/40 ug/m3; settling chambers catch coarse dust, cyclones spin out particles above about 10 microns, bag filters collect on a dust cake sized by the air-to-cloth ratio, venturi scrubbers capture fine dust and gases at high pressure drop, ESPs charge and collect on plates with efficiency 1 - exp(-wA/Q); gases go by absorption, adsorption, incineration or condensation.",
        sections: [
          {
            number: "1.1",
            title: "Air pollutants and their sources",
            body: [
              "Air pollution is the presence in the ambient atmosphere of one or more contaminants in quantities and durations that harm life, damage property or impair enjoyment - the classic textbook definition. A pollutant is classified along three axes. By origin: natural (volcanic ash, sea spray, pollen, forest fires) or anthropogenic (industry, transport, mining, agriculture). By physical state: gaseous or particulate. By formation stage: primary pollutants, which enter the air directly - particulate matter, sulphur dioxide, oxides of nitrogen, carbon monoxide, volatile organic compounds and heavy metals - and secondary pollutants, which form afterwards in the atmosphere.",
              "Sources are further grouped as point (a stack), line (a highway) and area (a city block of burning refuse). Sulphur dioxide comes from burning sulphur-bearing coal and oil and from non-ferrous smelters. Nitrogen oxides form whenever combustion air is heated above about 1300 deg C - power boilers, engines, kilns. Carbon monoxide signals incomplete combustion: idling vehicles, badly tuned furnaces, crop-residue burning. Particulate matter is raised by combustion, construction, quarrying and road dust; volatile organics evaporate from solvents, fuels and chemical processes; lead once came chiefly from petrol additives now phased out in India.",
              "Secondary pollutants carry the examination weight. Nitrogen dioxide photolyses in morning sunlight; the freed atomic oxygen combines with molecular oxygen to make ozone, which reacts with volatile organics to yield peroxyacetyl nitrate (PAN) - the irritant cocktail of photochemical (Los Angeles type) smog, worst on warm, sunny, calm days. Sulphur dioxide and nitrogen oxides oxidise over hours to days, dissolve and return as acid rain. The fatal London smog of December 1952 - coal smoke trapped under an inversion, thousands of excess deaths - and the 1984 Bhopal methyl isocyanate release bookend the scale of episodes every air quality law now guards against.",
            ],
            bullets: [
              "Primary versus secondary: primary pollutants are emitted as such (PM, SO2, NOx, CO, VOCs, lead); secondary ones form in air (ozone, PAN, acid aerosols).",
              "Natural sources: volcanoes, forest fires, sea spray, pollen, dust storms; anthropogenic sources: industry, transport, mining, agriculture, waste burning.",
              "Source geometry governs dispersion: point (stack), line (traffic corridor), area (city, burning fields).",
              "SO2 comes from sulphur-bearing fuel and smelters; NOx from any flame hotter than about 1300 deg C; CO from incomplete combustion.",
              "Episodes worth citing: London 1952 (inversion plus coal smoke) and Bhopal 1984 (industrial release of methyl isocyanate).",
            ],
            table: {
              caption: "Six classical primary pollutants, their chief sources and typical source controls.",
              headers: ["Pollutant", "Chief sources", "Typical control at source"],
              rows: [
                ["Particulate matter", "boilers, kilns, road dust, construction", "cyclone, bag filter, ESP"],
                ["Sulphur dioxide", "coal and oil combustion, smelters", "low-sulphur fuel, flue gas desulphurisation"],
                ["Oxides of nitrogen", "high-temperature combustion, engines", "low-NOx burners, SCR, catalytic converters"],
                ["Carbon monoxide", "incomplete combustion, idling traffic", "tuned burners, catalytic converters"],
                ["Volatile organics", "solvents, fuel handling, leaks", "vapour recovery, carbon adsorption"],
                ["Lead", "leaded petrol (phased out), battery works", "cleaner fuel, bag filters on smelters"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From emission to impact",
              caption: "The pathway every control strategy tries to interrupt as early as possible.",
              steps: [
                { label: "Emission at source", note: "stack, tailpipe, fugitive" },
                { label: "Plume rise and dilution", note: "buoyancy and wind" },
                { label: "Transport downwind", note: "stability class decides spread" },
                { label: "Chemical transformation", note: "ozone, PAN, acid aerosols" },
                { label: "Receptor exposure", note: "people, crops, materials" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Classification questions appear almost every year. Give all three axes - natural versus anthropogenic, gaseous versus particulate, primary versus secondary - with one named example each, and close with the photochemical smog chain for the full-mark finish.",
            },
            keyTerms: [
              { term: "Air pollution", definition: "Presence of contaminants in ambient air in amounts and durations harmful to humans, materials or the environment." },
              { term: "Primary pollutant", definition: "A substance emitted directly in harmful form, e.g. SO2 from a boiler stack." },
              { term: "Secondary pollutant", definition: "A substance formed in the atmosphere by reaction of primary pollutants, e.g. ozone and PAN in photochemical smog." },
            ],
            examQuestions: [
              {
                q: "Define air pollution. Classify air pollutants on any three bases with examples, and explain how photochemical smog is formed.",
                marks: 7,
                outline: [
                  "Define air pollution: contaminant, quantity, duration, harm.",
                  "Basis 1 - origin: natural (volcanic ash, pollen) versus anthropogenic (industry, vehicles).",
                  "Basis 2 - physical state: gaseous (SO2, NOx, CO) versus particulate (dust, smoke, aerosol).",
                  "Basis 3 - formation stage: primary versus secondary, one example each.",
                  "Photochemical smog: NO2 photolysis gives atomic oxygen; O plus O2 gives ozone.",
                  "Ozone plus VOCs gives PAN; conditions - sunlight, calm, warm - and effects.",
                  "Contrast briefly with London-type reducing smog of 1952.",
                ],
              },
              {
                q: "Distinguish between primary and secondary air pollutants with two examples of each.",
                marks: 2,
              },
              {
                q: "Compare London smog and Los Angeles smog in terms of causes, composition and season.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Effects of air pollution and ambient air quality standards",
            body: [
              "Effects on human health track pollutant chemistry. Carbon monoxide binds haemoglobin about two hundred times more strongly than oxygen, forming carboxyhaemoglobin that starves tissues of oxygen. Sulphur dioxide and fine particulate provoke bronchoconstriction and chronic bronchitis; PM2.5 slips past the body's filters into alveoli and blood, driving asthma, heart disease and strokes. Nitrogen dioxide inflames airways; ozone and PAN irritate mucous membranes and crack rubber and textiles; lead is a neurotoxin with no safe exposure in children. Vegetation suffers chlorosis and necrosis, and sulphur dioxide blackens and corrodes limestone - the concern behind the Taj Trapezium litigation.",
              "Ambient standards cap pollutant concentrations in outdoor air regardless of source. India's National Ambient Air Quality Standards (NAAQS), notified in 2009 under the Environment (Protection) Act, cover twelve pollutants across land-use classes - industrial, residential-rural-other and ecologically sensitive - with averaging times from one hour to a year. Key limits are PM10 at 100 micrograms/m3 (24 h) and 60 (annual), PM2.5 at 60 and 40, SO2 at 80 and 50, NO2 at 80 and 40, with carbon monoxide at 2 to 4 milligrams/m3. Continuous monitoring through CAAQMS stations feeds the public Air Quality Index.",
              "The AQI converts monitored concentrations into a 0-500 index across six colour-coded categories - good to severe - so citizens can act. Distinguish ambient standards (concentrations in breathing air) from emission standards (mass leaving a stack, e.g. particulate 50-150 milligrams/m3 for many industries), which the Air Act enforces through consent conditions. The WHO's 2021 guidelines are far tighter - PM2.5 annual 5 against the Indian 40 - and several Indian cities dominate the world's most-polluted lists. For the examination, quote Indian NAAQS numbers with averaging times, never WHO numbers, as 'the standards'.",
            ],
            bullets: [
              "CO forms carboxyhaemoglobin; PM2.5 reaches alveoli and blood; SO2 and NO2 inflame airways; lead damages the developing nervous system.",
              "Non-health damage: crop chlorosis and necrosis, rubber cracking by ozone, limestone corrosion by SO2 (Taj Trapezium case).",
              "NAAQS 2009: twelve pollutants, land-use based, dual averaging; quote PM10 100/60, PM2.5 60/40, SO2 80/50, NO2 80/40 ug/m3.",
              "Ambient standard protects breathing air; emission standard caps what leaves the stack - consent conditions enforce the latter.",
              "AQI: 0-500 scale, six categories good to severe, driven by CAAQMS continuous monitoring data.",
            ],
            table: {
              caption: "NAAQS 2009 limits for the most-quoted pollutants (micrograms/m3 unless noted).",
              headers: ["Pollutant", "Averaging time", "Limit"],
              rows: [
                ["PM2.5", "24 h / annual", "60 / 40"],
                ["PM10", "24 h / annual", "100 / 60"],
                ["Sulphur dioxide", "24 h / annual", "80 / 50"],
                ["Oxides of nitrogen", "24 h / annual", "80 / 40"],
                ["Carbon monoxide", "8 h / 1 h", "2 mg/m3 / 4 mg/m3"],
                ["Ozone", "8 h / 1 h", "100 / 180"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "NAAQS 2009 versus WHO 2021 guideline values",
              caption: "WHO tightened sharply in 2021; Indian standards remain the binding exam numbers.",
              left: {
                heading: "India NAAQS 2009",
                items: [
                  "PM2.5 annual: 40 ug/m3",
                  "PM2.5 24 h: 60 ug/m3",
                  "PM10 annual: 60 ug/m3",
                  "NO2 annual: 40 ug/m3",
                  "SO2 24 h: 80 ug/m3",
                ],
              },
              right: {
                heading: "WHO 2021 guidelines",
                items: [
                  "PM2.5 annual: 5 ug/m3",
                  "PM2.5 24 h: 15 ug/m3",
                  "PM10 annual: 15 ug/m3",
                  "NO2 annual: 10 ug/m3",
                  "SO2 24 h: 40 ug/m3",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Do not mix guideline families",
              body: "Candidates lose marks quoting WHO 2005 or 2021 values as Indian standards. Unless the question says otherwise, 'ambient air quality standards' means NAAQS 2009 notified under the Environment (Protection) Act - write the Indian numbers with their averaging times.",
            },
            keyTerms: [
              { term: "NAAQS", definition: "National Ambient Air Quality Standards, notified 2009 under the EP Act: maximum permissible pollutant concentrations by averaging time and land use." },
              { term: "Ambient versus emission standard", definition: "Ambient caps concentration in outdoor air; emission caps the mass released from a specific source such as a stack." },
              { term: "Air Quality Index", definition: "A 0-500 public communication scale converting monitored concentrations into six colour-coded health categories." },
            ],
            examQuestions: [
              {
                q: "Explain the effects of particulate matter, SO2, NO2, CO and lead on human health, plants and materials, and state the NAAQS 2009 for these pollutants.",
                marks: 7,
                outline: [
                  "Health: PM2.5 in alveoli drives COPD and cardiac disease; SO2 causes bronchoconstriction; NO2 inflames airways.",
                  "CO: carboxyhaemoglobin and oxygen starvation; lead: neurotoxicity in children.",
                  "Plants: chlorosis, necrosis, yield loss; materials: limestone corrosion, rubber cracking.",
                  "Define ambient standard and its legal basis (EP Act, 2009 notification).",
                  "Quote PM10 100/60, PM2.5 60/40, SO2 80/50, NO2 80/40 ug/m3 with averaging times.",
                  "CO limits 2-4 mg/m3; note the land-use classes.",
                  "Conclude with the AQI as the public-facing tool.",
                ],
              },
              {
                q: "Distinguish ambient air quality standards from emission standards with one example each.",
                marks: 2,
              },
              {
                q: "What is the Air Quality Index and what are its categories?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Particulate control: settling chambers and cyclones",
            body: [
              "Particle size, not mass, decides the collector. Gravitational settling chambers are long, wide boxes through which dusty gas crawls at 0.3-1.5 m/s; particles heavier than air settle out of the horizontal stream the way grit falls from a slow river. Designed properly they capture most material above roughly 50-100 microns, cut the overall dust load by 40-60%, and waste less than 25 mm of water gauge in pressure drop. That makes them cheap first-stage roughers ahead of cyclones, bag filters or precipitators - never final collectors, because fine dust simply exits with the gas.",
              "The cyclone replaces gravity with centrifugal force. Gas enters a cylindrical barrel tangentially at 10-20 m/s and spins several turns; each particle is flung outward with a force of m v2/r, hundreds of times gravity, plastering dust onto the wall, down which it slides into a hopper while cleaned gas escapes up the central vortex finder. Efficiency exceeds 90% above 10 microns but collapses below about 5; pressure drops run 40-150 mm water gauge. Small-diameter multiple cyclones spin faster and catch finer dust at the cost of higher pressure drop and clogging risk with sticky fly ash.",
              "Design revolves around the cut diameter d50 - the particle collected at 50% efficiency: d50 = sqrt(9 mu W / (2 pi N_e v_i (rho_p - rho_g))), with W the inlet width, N_e the effective number of turns, v_i the inlet velocity and rho the densities. Plugging typical numbers (mu = 1.85 x 10-5 Pa s, W = 0.15 m, N_e = 5, v_i = 15 m/s, rho_p = 2000 kg/m3) gives a d50 of about 5 microns - the classic worked result. Watch dust loading, temperature limits on fan placement, erosion of the wall opposite the inlet, and air seals on the hopper to stop re-entrainment.",
            ],
            bullets: [
              "Settling chamber: gravity separation at 0.3-1.5 m/s, useful above about 50-100 microns at 40-60% efficiency; pre-cleaner only.",
              "Cyclone mechanism: tangential entry spins gas at 10-20 m/s; centrifugal force m v2/r throws particles to the wall and hopper.",
              "Cut diameter d50: the size captured at 50% efficiency; scales with the square root of inlet width, falls with inlet velocity.",
              "Efficiency above 90% for 10-micron dust but poor below 5 microns; pressure drop 40-150 mm water gauge.",
              "Small parallel multicyclones catch finer dust but need balanced flows and clean, non-sticky dust to avoid plugging.",
            ],
            codeExample: {
              language: "python",
              caption: "Theoretical cyclone cut diameter from the standard formula.",
              code: `import math

mu = 1.85e-5          # gas viscosity, Pa s
W = 0.15              # inlet width, m
Ne = 5.0              # effective number of turns
vi = 15.0             # inlet velocity, m/s
rho_p, rho_g = 2000.0, 1.2   # particle and gas density, kg/m3

num = 9.0 * mu * W
den = 2.0 * math.pi * Ne * vi * (rho_p - rho_g)
d50 = math.sqrt(num / den)

print(f"d50 = {d50 * 1e6:.1f} microns")    # about 5.2 microns`,
            },
            diagram: {
              kind: "pipeline",
              title: "How a cyclone separates dust",
              caption: "Five stations of the spin - reproduce as a labelled sketch in the exam.",
              stages: [
                { label: "Tangential inlet", note: "dusty gas at 10-20 m/s" },
                { label: "Outer vortex forms", note: "several effective turns" },
                { label: "Centrifugal separation", note: "particles flung to wall" },
                { label: "Wall and hopper", note: "dust slides down, air-locked" },
                { label: "Vortex finder exit", note: "clean gas leaves upward" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the cyclone in section with four labels - tangential inlet, vortex finder, barrel and dust hopper. Sketches carry easy marks, and examiners check the inlet direction because reversing it turns the machine into a poor mixer.",
            },
            keyTerms: [
              { term: "Settling chamber", definition: "A widened duct where slow gas lets particles settle by gravity; removes coarse dust above about 50 microns." },
              { term: "Cyclone separator", definition: "A cylindrical-conical device using a swirling vortex and centrifugal force to throw particles to the wall for collection." },
              { term: "Cut diameter (d50)", definition: "The particle size a collector captures with 50% efficiency; the standard single-number rating of a cyclone." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of a cyclone separator with a neat sketch. Define cut diameter and state the merits and demerits of cyclones.",
                marks: 7,
                outline: [
                  "Sketch: tangential inlet, barrel, cone, vortex finder, dust hopper with airlock.",
                  "Working: outer vortex, centrifugal force m v2/r, particle migration to the wall.",
                  "Gas spirals up the inner vortex and exits; dust slides to the hopper.",
                  "Define d50; give the theoretical formula and the meaning of each symbol.",
                  "Merits: no moving parts, dry collection, cheap, handles hot and dusty gas.",
                  "Demerits: poor below 5 microns, erosion, fan power for fine collection, unsuitable for sticky dust.",
                  "Applications: pre-cleaner ahead of ESP or bag filter in boilers, cement, foundries.",
                ],
              },
              {
                q: "Why is a gravitational settling chamber called a pre-cleaner rather than a final collector?",
                marks: 2,
              },
              {
                q: "Compare a single large cyclone with a battery of small multicyclones.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Fabric filters and wet scrubbers",
            body: [
              "A fabric filter - the baghouse - pushes dusty gas through woven or felted sleeves; the fabric is only the initial sieve, because within minutes a dust cake builds on the surface and it is the cake that captures even sub-micron particles at better than 99.5% efficiency. Sizing rests on the air-to-cloth ratio: gas volume divided by fabric area, typically 1-2 m/min for pulse-jet cleaning and below 1 for shaker or reverse-air units. Bags of polyester serve to about 150 deg C, aramid to about 200 and glass fibre with PTFE coating to about 260 - hotter gas must be cooled before the bags.",
              "Cleaning keeps pressure drop, and power bills, sane: shakers flex the bags offline, reverse-air units gently back-flush whole compartments, and pulse-jet blasts compressed air down each bag in milliseconds while the unit stays online. Wet scrubbers attack particles with liquid instead of fabric. A spray tower passes slow gas through falling droplets for coarse capture at low pressure drop; the venturi scrubber accelerates gas to 60-150 m/s at a throat, shattering scrubbing liquor into a fine mist whose droplets sweep out sub-micron particulate - at a punishing 500-2500 mm water gauge, but with simultaneous absorption of gaseous pollutants such as SO2 when the liquor is alkaline.",
              "Trade-offs decide the choice. Bag filters deliver the finest dry collection but fear heat, sparks, moisture and sticky or combustible dust, and carry bag-replacement budgets. Scrubbers tolerate hot, wet, corrosive gas and remove gases and particles together, but they produce a sludge or wastewater stream that itself needs treatment, demand corrosion-proof construction and can plume with saturated gas. The worked sizing below - number of bags for a 45,000 m3/h stream - is the standard exam pattern: compute area from the air-to-cloth ratio, divide by one bag's area, round up, and add a spare compartment.",
            ],
            bullets: [
              "In a baghouse the dust cake does the final filtering - efficiency above 99.5% even for sub-micron particles.",
              "Air-to-cloth ratio = gas flow divided by fabric area; 1-2 m/min for pulse jet, below 1 m/min for shaker and reverse-air cleaning.",
              "Cleaning systems: shaker (offline), reverse air (gentle, compartment-wise), pulse jet (online, compressed-air burst).",
              "Venturi scrubber: 60-150 m/s throat velocity atomises liquor; captures sub-micron dust but at 500-2500 mm water gauge.",
              "Scrubbers remove gases and particles together but generate a sludge or wastewater needing its own treatment.",
            ],
            codeExample: {
              language: "python",
              caption: "From gas flow to a bill of materials for a pulse-jet baghouse.",
              code: `# Baghouse sizing: fabric area and number of bags
Q = 45_000 / 60.0        # gas flow, m3/min
acr = 1.2                # air-to-cloth ratio, m/min (pulse jet)
gross = Q / acr          # required fabric area, m2
area = gross * 1.10      # 10% reserve for maintenance rows

d, L = 0.16, 2.5         # bag diameter and length, m
bag_area = 3.1416 * d * L

n_bags = int(area / bag_area) + 1
print(f"fabric area = {area:.0f} m2, bags = {n_bags}")   # about 548 bags`,
            },
            diagram: {
              kind: "fork",
              title: "Will the fabric filter hold the 50 mg/m3 stack limit?",
              caption: "Design and discipline decisions that make or break baghouse compliance.",
              start: "Dusty gas at 45,000 m3/h routed to a new baghouse",
              branches: [
                {
                  label: "Pulse-jet cleaning at a 1.2 m/min air-to-cloth ratio",
                  outcome: "Outlet dust below 20 mg/m3 with stable pressure drop",
                  good: true,
                },
                {
                  label: "Air-to-cloth ratio pushed to 3 m/min to save fabric",
                  outcome: "Fine dust bleeds through; the limit is breached",
                  good: false,
                },
                {
                  label: "Torn bag left undetected between compartments",
                  outcome: "Visible stack emission and a show-cause notice",
                  good: false,
                },
                {
                  label: "Pre-coating plus a daily pressure-drop log",
                  outcome: "Cake builds correctly; 99.9% collection sustained",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The number-of-bags numerical appears again and again: area = flow / air-to-cloth ratio, bags = area / (pi x d x L), then round up. Write the units at every step - examiners award method marks for them.",
            },
            keyTerms: [
              { term: "Air-to-cloth ratio", definition: "Gas volume flowing per unit of filter fabric area (m/min); the primary baghouse sizing parameter." },
              { term: "Pulse-jet cleaning", definition: "Short bursts of compressed air down each bag that dislodge the dust cake while the compartment stays online." },
              { term: "Venturi scrubber", definition: "A scrubber that atomises liquid at a high-velocity throat for fine-particle capture and gas absorption." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a fabric filter (baghouse) with a sketch. Describe its cleaning mechanisms and compare it with a wet scrubber.",
                marks: 7,
                outline: [
                  "Sketch: housing, tube sheet, bags, hopper, inlet and outlet plenums.",
                  "Working: cake formation on the fabric performs the fine filtration; 99%+ efficiency.",
                  "Define air-to-cloth ratio and typical values by cleaning type.",
                  "Cleaning: shaker, reverse-air, pulse-jet, with relative merits.",
                  "Fabric choice versus temperature: polyester, aramid, glass fibre.",
                  "Bag filter merits: finest dry collection; demerits: temperature, fire and moisture limits.",
                  "Scrubber contrast: handles wet hot gas and pollutants together but yields sludge at high pressure drop.",
                ],
              },
              {
                q: "Define air-to-cloth ratio and state a typical pulse-jet value.",
                marks: 2,
              },
              {
                q: "Explain, with a sketch, how a venturi scrubber captures sub-micron particles.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Electrostatic precipitators and gaseous pollutant control",
            body: [
              "An electrostatic precipitator charges dust and lets an electric field move it. A transformer-rectifier drives the discharge electrodes at 40-70 kV negative, producing a corona that floods the gas lane with ions; particles collide with ions, charge negatively within milliseconds, then migrate across the field to grounded collecting plates, where they stick as a layer eventually knocked off by rapping into the hopper. Pressure drop is trivial - under 25 mm water gauge - efficiency reaches 99-99.9% on fly ash, and the hardware serves gas above 400 deg C, which is why every large Indian power station owns one.",
              "Performance is summarised by the Deutsch-Anderson equation, efficiency = 1 - exp(-w A / Q), where w is the migration (drift) velocity, typically 5-15 cm/s, A the collecting-plate area and Q the gas flow; the ratio A/Q is the specific collection area. The exponential shape means each extra 'nine' of efficiency costs plate area disproportionately. Resistivity is the hidden villain: moderately resistive ash releases cleanly on rapping; low-resistivity dust loses charge and re-entrains, while high-resistivity ash from low-sulphur coal builds an insulating layer that back-coronas and collapses efficiency.",
              "Gaseous pollutants need chemistry, not electricity. Absorption packs a tower and irrigates it - limestone slurry scrubbing SO2 from flue gas is the standard desulphurisation route. Adsorption passes gas through activated carbon beds that trap VOCs and mercury and can be regenerated or replaced. Thermal incineration oxidises combustible gases and odours around 750 deg C, catalytic units do the same near 350 deg C; condensation chills high-concentration vapour streams for recovery. A modern train chains the devices - pre-cleaner, precipitator, scrubber, then stack - each stage matched to one pollutant class.",
            ],
            bullets: [
              "ESP chain: corona ionisation, particle charging, field-driven migration to grounded plates, rapping, hopper removal.",
              "Deutsch-Anderson: efficiency = 1 - exp(-w A/Q); each additional nine of efficiency costs disproportionate plate area.",
              "Drift velocity 5-15 cm/s; pressure drop under 25 mm water gauge; service above 400 deg C; 99-99.9% on fly ash.",
              "Resistivity rules: too low re-entrains the dust, too high back-coronas; low-sulphur coal ash is the classic troublemaker.",
              "Gases: absorption (limestone FGD), adsorption (activated carbon for VOCs and mercury), thermal and catalytic incineration, condensation.",
            ],
            codeExample: {
              language: "python",
              caption: "Deutsch-Anderson efficiency and the plate area demanded by each extra nine.",
              code: `import math

w = 0.08          # drift velocity, m/s (8 cm/s, typical fly ash)
Q = 120.0         # gas flow, m3/s

for A in (5000.0, 7950.0):
    eta = 1.0 - math.exp(-w * A / Q)
    print(f"A = {A:.0f} m2 -> efficiency {eta * 100:.1f}%")

# plate area needed for 99.5%:
A_req = -(Q / w) * math.log(1.0 - 0.995)
print(f"plates needed for 99.5%: {A_req:.0f} m2")   # about 7947 m2`,
            },
            diagram: {
              kind: "cycle",
              title: "The repeating life of dust inside an ESP",
              caption: "Five stages looping continuously while gas flows through the lanes.",
              steps: [
                { label: "Corona ionisation", note: "40-70 kV at the wire" },
                { label: "Particle charging", note: "ions attach in milliseconds" },
                { label: "Migration", note: "field drags particle to plate" },
                { label: "Deposition", note: "dust layer builds on plate" },
                { label: "Rapping", note: "layer cracks and falls to hopper" },
              ],
            },
            callout: {
              type: "warning",
              title: "Adsorption is not absorption",
              body: "Adsorption is capture on a solid surface such as activated carbon; absorption is dissolution into a liquid. Mixing the two words in the SO2-scrubbing or VOC-control answer is one of the most common ways to lose a full mark band.",
            },
            keyTerms: [
              { term: "Corona discharge", definition: "A localised ionising glow around the high-voltage electrode that floods the gas with ions for particle charging." },
              { term: "Migration (drift) velocity", definition: "The speed at which a charged particle crosses the electric field to the collecting plate - the w of the Deutsch equation." },
              { term: "Adsorption", definition: "Capture of gas molecules on a solid surface such as activated carbon, as distinct from absorption into a liquid." },
            ],
            examQuestions: [
              {
                q: "Explain the principle, construction and working of an electrostatic precipitator with a sketch. Write the Deutsch-Anderson equation and discuss its implications, then list merits and demerits.",
                marks: 7,
                outline: [
                  "Principle: corona charging plus field-driven migration to grounded plates.",
                  "Sketch: discharge electrodes, collecting plates, hopper, transformer-rectifier set, rappers.",
                  "Working in order: ionisation, charging, migration, deposition, rapping.",
                  "Deutsch equation: efficiency = 1 - exp(-wA/Q); define each symbol with units.",
                  "Implication: plate area grows exponentially with each extra nine of efficiency.",
                  "Merits: very high efficiency, tiny pressure drop, high-temperature, huge gas flows.",
                  "Demerits: high capital cost, resistivity sensitivity, high-voltage safety, ozone generation.",
                ],
              },
              {
                q: "Differentiate between adsorption and absorption with one example of each.",
                marks: 2,
              },
              {
                q: "Why is an ESP preferred over a bag filter for a large thermal power station?",
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
      title: "Noise Pollution",
      summary:
        "Sound as an environmental problem: the logarithmic decibel scale and A-weighting, the zone-wise limits of the Noise Rules 2000, the sources that dominate urban exposure, and the source-path-receiver control strategy - ending with barrier physics and the making of a noise map.",
      chapter: {
        number: "02",
        title: "Noise Pollution and Its Control",
        intro:
          "Unit II turns air pressure ripples into enforceable numbers. Section 2.1 builds the decibel scale and its descriptors; 2.2 writes the zone-wise standards; 2.3 inventories the sources; 2.4 organises controls into the source-path-receiver hierarchy; and 2.5 engineers barriers with the Fresnel number before walking the five steps of a noise map.",
        inOneBreath:
          "Lp = 20 log10(p/p0) with p0 = 20 micropascals; doubling energy adds 3 dB and a tenfold increase adds 10; standards read in dB(A) after A-weighting; L_eq, L10, L50, L90 and Ldn describe fluctuating noise; zones are limited to 75/70, 65/55, 55/45 and 50/40 dB(A) day and night; traffic dominates urban exposure; control runs source (silencers, enclosures), path (distance, barriers, zoning) and receiver (protection, rotation); barriers work by breaking the line of sight with a Fresnel number N = 2 delta / lambda and give 5-15 dB; noise mapping is source inventory, ISO 9613-2 propagation modelling, validation, contours and action.",
        sections: [
          {
            number: "2.1",
            title: "The decibel scale and noise measurement",
            body: [
              "Sound is a tiny, fast pressure ripple riding on atmospheric pressure. The healthy ear spans an astonishing range - from the 20-micropascal threshold of hearing to the 20 pascal threshold of pain, a factor of a million - so acoustics compresses it logarithmically: sound pressure level Lp = 20 log10(p / p0) decibels, with p0 = 20 micropascals. The decibel is dimensionless and logarithmic: doubling sound energy adds just 3 dB, multiplying energy by ten adds 10 dB, and a 10 dB rise sounds roughly twice as loud. The ear registers equal ratios, not equal differences.",
              "Because the ear is relatively deaf to low frequencies at ordinary levels, instruments apply A-weighting, a filter mimicking human response; nearly every standard is written in dB(A). Levels add energetically, not arithmetically - 85, 87 and 90 dB together give 10 log10(10^8.5 + 10^8.7 + 10^9.0), about 92.6 dB. For fluctuating noise we use the equivalent continuous level L_eq, the steady level carrying the same energy, plus statistical descriptors: L10, exceeded 10% of the time, tracks peaky traffic; L50 is the median; L90 the background. Ldn averages the 24-hour L_eq with a 10 dB penalty on night hours.",
              "Measurement discipline matters as much as mathematics. A Class 1 sound level meter to IEC 61672 - calibrated before and after the survey, windshielded, held about 1.2 m above ground away from reflecting surfaces - is the reference instrument; dosimeters log a worker's personal dose. Ambient monitoring reports L_eq over defined day and night windows at the complainant's property line. Reference numbers anchor intuition: a quiet library sits near 30 dB(A), conversation at 60, busy traffic at 80-85, a jackhammer at 100, a jet at takeoff near 120-130 - the last already past the pain line.",
            ],
            bullets: [
              "Lp = 20 log10(p/p0) dB with p0 = 20 micropascals - the ear's million-fold range compressed into 0-120 dB.",
              "Log rules: doubling energy adds 3 dB; ten times energy adds 10 dB; 10 dB is a rough subjective doubling of loudness.",
              "A-weighting mimics ear sensitivity; regulations are written in dB(A).",
              "Descriptors: L_eq (energy average), L10/L50/L90 (statistical), Ldn (night penalty of 10 dB).",
              "Field kit: Class 1 SLM per IEC 61672, calibrator, windshield, and dosimeters for personal exposure.",
            ],
            codeExample: {
              language: "python",
              caption: "Decibel addition, L_eq from samples, and Ldn with the night penalty.",
              code: `import math

def add_db(levels):
    total = sum(10 ** (L / 10.0) for L in levels)
    return 10.0 * math.log10(total)

print(add_db([85, 87, 90]))              # 92.6 dB

hourly = [72, 75, 68, 80, 77, 73, 69, 82, 76, 71]
L_eq = add_db(hourly) - 10.0 * math.log10(len(hourly))
print(f"10-sample L_eq = {L_eq:.1f} dB")   # about 76.5 dB

# day-night level: 16 h at 74 dB, 8 night h at 65 dB (+10 penalty)
Ldn = add_db([74] * 16 + [75] * 8) - 10.0 * math.log10(24)
print(f"Ldn = {Ldn:.1f} dB")                # about 74.4 dB`,
            },
            diagram: {
              kind: "pipeline",
              title: "From sound wave to a defensible dB(A) number",
              caption: "The instrument chain hidden inside one field reading.",
              stages: [
                { label: "Pressure fluctuations", note: "20 micropascal reference" },
                { label: "A-weighting network", note: "ear-like frequency filter" },
                { label: "RMS detection", note: "Fast or Slow time constant" },
                { label: "Energy integration", note: "L_eq over the window" },
                { label: "Calibrated readout", note: "dB(A) on a Class 1 meter" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Two machines running at 90 dB each do not give 180 dB - they give 93 dB. The 3-doubling rule and the 10-doubling rule are the whole basis of every noise numerical RGPV has ever set; state them before any calculation.",
            },
            keyTerms: [
              { term: "Sound pressure level", definition: "Lp = 20 log10(p/p0) dB relative to the 20 micropascal reference pressure; the basic acoustic quantity." },
              { term: "A-weighting", definition: "A frequency filter shaped like the ear's sensitivity at moderate levels; makes standards read in dB(A)." },
              { term: "Equivalent continuous level", definition: "The steady sound level carrying the same acoustic energy as the actual fluctuating noise over the period." },
            ],
            examQuestions: [
              {
                q: "Define sound pressure level and write its expression. Explain why the decibel scale is used, the meaning of A-weighting, and how sound levels are added.",
                marks: 7,
                outline: [
                  "Pressure range 20 micropascal to 20 pascal; linear units unusable.",
                  "Define Lp = 20 log10(p/p0) with reference and units; dB is dimensionless.",
                  "Consequences: doubling energy adds 3 dB; ten times adds 10 dB.",
                  "A-weighting: ear response; standards in dB(A).",
                  "Addition formula 10 log10(sum of 10^(Li/10)); worked 85 + 87 + 90 = 92.6 dB.",
                  "Descriptors: L_eq, L10/L50/L90, Ldn with its 10 dB night penalty.",
                  "Instruments: Class 1 SLM, calibrator, dosimeter.",
                ],
              },
              {
                q: "Two identical machines each produce 90 dB. What is the total level? Justify your answer.",
                marks: 2,
              },
              {
                q: "Explain L10, L50 and L90 and their use in traffic noise studies.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Noise standards and zone-wise limits",
            body: [
              "India regulates ambient noise through the Noise Pollution (Regulation and Control) Rules 2000, framed under the Environment (Protection) Act. Four land-use zones carry day (6 am to 10 pm) and night (10 pm to 6 am) ceilings in dB(A): industrial 75/70, commercial 65/55, residential 55/45 and silence zones 50/40. A silence zone is an area of at least 100 m around hospitals, educational institutions, courts and religious places, declared by the competent authority, in which honking, loudspeakers and industrial construction are prohibited outright.",
              "At the workplace the Factories Act framework caps exposure: 90 dB(A) over eight hours, with permitted duration halving for every 5 dB rise, alongside mandatory hearing protection and audiometric surveillance above the action level. Product rules cut the other end of the problem: motor vehicles must meet drive-by noise limits at manufacture, generator sets are certified with acoustic enclosures, and firecrackers are capped at 125 dB(A) measured at 4 m. Loudspeakers in public spaces need written authority and are barred between 10 pm and 6 am under the Rules.",
              "Enforcement sits with the State Boards and the district administration: measurement at the complainant's boundary with a calibrated meter, followed by directions, closure or prosecution, with penalties flowing from Section 15 of the EP Act; later amendments tightened festival and construction-night rules. For engineers these numbers are design targets: an EIA prediction or a barrier design for a road near a residential colony is judged against 55/45 dB(A). The WHO's 2018 environmental noise guideline - road traffic below 53 dB Lden - shows how much headroom remains.",
            ],
            bullets: [
              "Noise Rules 2000 under the EP Act: industrial 75/70, commercial 65/55, residential 55/45, silence 50/40 dB(A) day/night.",
              "Day runs 6 am to 10 pm, night 10 pm to 6 am; silence zone means a declared 100 m belt around hospitals, schools, courts, religious places.",
              "Occupational: 90 dB(A) for 8 h, exposure time halving per 5 dB, protection and audiometry required.",
              "Product caps: certified vehicles and DG set enclosures; firecrackers limited to 125 dB(A) at 4 m.",
              "Loudspeaker curfew 10 pm to 6 am; enforced by SPCBs and district authority with penalties under EPA Section 15.",
            ],
            table: {
              caption: "Ambient noise limits under the Noise Pollution (Regulation and Control) Rules, 2000.",
              headers: ["Zone", "Day, dB(A)", "Night, dB(A)", "Signature sources"],
              rows: [
                ["Industrial", "75", "70", "machinery, DG sets, blowers"],
                ["Commercial", "65", "55", "markets, traffic, PA systems"],
                ["Residential", "55", "45", "domestic life, neighbourhood traffic"],
                ["Silence", "50", "40", "declared belts around hospitals, courts, schools"],
                ["Occupational (8 h)", "90", "-", "factory floor exposure cap under the Factories Act"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The zone-time grid of ambient limits",
              caption: "Two axes generate all eight numbers worth memorising.",
              axes: { x: "Day (6 am-10 pm) versus night (10 pm-6 am)", y: "Receptor sensitivity: high versus low" },
              quadrants: [
                { label: "Residential day: 55 dB(A)", note: "homes, schools, hospitals" },
                { label: "Residential night: 45 dB(A)", note: "strictest common window" },
                { label: "Industrial day: 75 dB(A)", note: "process sheds and yards" },
                { label: "Industrial night: 70 dB(A)", note: "night shifts only" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The eight zone numbers (75/70, 65/55, 55/45, 50/40) are a near-certain short question. Memorise them as pairs and always attach the day and night windows - a limit quoted without its time window is treated as an incomplete answer.",
            },
            keyTerms: [
              { term: "Noise Pollution Rules 2000", definition: "Rules under the EP Act fixing zone-wise day and night ambient noise limits and restricting loudspeaker use." },
              { term: "Silence zone", definition: "A declared belt of at least 100 m around hospitals, educational institutions, courts and religious places carrying the strictest limits." },
              { term: "Ldn", definition: "Day-night level: the 24-hour energy average with a 10 dB penalty on night hours, used in community noise assessment." },
            ],
            examQuestions: [
              {
                q: "State the ambient noise standards for different zones in India and explain how the Noise Pollution Rules 2000 enforce them.",
                marks: 7,
                outline: [
                  "Legal basis: Noise Pollution (Regulation and Control) Rules 2000 under the EP Act.",
                  "Four zones with day/night values: 75/70, 65/55, 55/45, 50/40 dB(A).",
                  "Define the day and night windows; define the silence zone and its 100 m belt.",
                  "Restrictions: loudspeaker curfew, construction hours, vehicle and DG set product limits.",
                  "Enforcement: SPCB and district authority measurement at the receptor boundary.",
                  "Penalty route through EPA Section 15 and closure directions.",
                  "Link to design: EIA and barrier targets use the same numbers.",
                ],
              },
              {
                q: "Define a silence zone and list two prohibited activities within it.",
                marks: 2,
              },
              {
                q: "Write the occupational noise exposure limits and the protective measures they mandate.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Sources of noise pollution",
            body: [
              "Road traffic is the dominant urban source: engines, exhausts and above all tyre-road interaction, which grows with speed and heavy-vehicle share, holding 75-85 dB(A) on main corridors through the day. Aircraft are the loudest single events - 120-140 dB(A) near a runway at takeoff - and dictate airport noise zones and flight-path restrictions; railways add horn blasts around 110 dB(A) and wheel squeal on curves. Because traffic never fully stops, its noise defines the urban background on which every other source rides.",
              "Fixed sources cluster in industry and construction. Blowers, compressors, generators and looms in factories routinely reach 90-100 dB(A) at the operator's ear; pile drivers, jackhammers, excavators and concrete mixers peak above 100 dB(A) on sites, where compressed schedules push work into evenings. The neighbourhood tier is the most resented: loudspeakers at festivals and weddings, vehicle horns in traffic, barking dogs and domestic gadgets - modest in level but concentrated in the night window when the 45 dB(A) residential ceiling applies.",
              "Sources are characterised not just by level but by spectrum and timing. Traffic rumble is low-frequency and penetrates walls with ease; construction is broadband and impulsive; horns and firecrackers are transient spikes that a slow L_eq understates - which is why impulsive noise is regulated more strictly. An inventory of sources with position, sound power level and temporal pattern is the raw material of every noise map and abatement plan: it says which source to attack first, in which time window, with which control from the next section.",
            ],
            bullets: [
              "Traffic: 75-85 dB(A) on arterials; level climbs with speed, heavy-vehicle share and road roughness; low-frequency rumble penetrates facades.",
              "Aircraft: 120-140 dB(A) near runways, driving airport noise zones and curfews; railways add 110 dB(A) horn events.",
              "Industry: compressors, blowers, DG sets and looms at 90-100 dB(A) at the operator position.",
              "Construction: pile driving and breaking above 100 dB(A), often forced into night windows by schedules.",
              "Neighbourhood: loudspeakers, horns and crackers - lower level but night-time concentration makes them the top complaint.",
            ],
            table: {
              caption: "Typical levels of common sources (free-field, indicative).",
              headers: ["Source", "Level, dB(A)", "Temporal character"],
              rows: [
                ["Quiet library", "30", "steady, ambient floor"],
                ["Normal conversation", "55-60", "steady, close range"],
                ["Arterial road traffic", "75-85", "continuous with peaks"],
                ["Diesel generator set", "90-100", "steady with tonal components"],
                ["Jackhammer / pile driver", "100-110", "impulsive"],
                ["Jet aircraft at takeoff", "120-130", "transient, high energy"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Who owns the urban noise problem?",
              caption: "Contribution to community exposure - attack the base first.",
              tiers: [
                { label: "Road traffic", note: "largest exposed population" },
                { label: "Neighbourhood and horns", note: "top complaint driver at night" },
                { label: "Construction", note: "intense but local, temporary" },
                { label: "Industry", note: "steady, zone-contained" },
                { label: "Aircraft and rail", note: "fewest people, loudest events" },
              ],
            },
            callout: {
              type: "tip",
              title: "How to structure source answers",
              body: "Classify every source answer by mobility (fixed versus mobile), setting (transport, industrial, construction, neighbourhood) and time pattern (continuous, intermittent, impulsive) - three axes, examples on each, and the answer writes itself.",
            },
            keyTerms: [
              { term: "Sound power level", definition: "Lw, the total acoustic power a source radiates in dB re 1 picowatt; a property of the source alone." },
              { term: "Impulsive noise", definition: "Short-duration spikes (horns, hammering, crackers) whose energy slow meters understate; regulated more strictly." },
              { term: "Urban background (L90)", definition: "The level exceeded 90% of the time, representing the steady ambient from distant sources." },
            ],
            examQuestions: [
              {
                q: "Classify the sources of noise pollution with typical levels and spectral character, and explain why traffic noise dominates urban exposure.",
                marks: 7,
                outline: [
                  "Classify by mobility: mobile (road, rail, air) versus fixed (industry, construction).",
                  "Traffic: engine, tyre-road and exhaust; growth with speed and heavy vehicles; 75-85 dB(A).",
                  "Aircraft and rail: event levels and corridor effects; airport zones.",
                  "Industrial machinery and DG sets at 90-100 dB(A); construction above 100 dB(A).",
                  "Neighbourhood sources: loudspeakers, horns, crackers - night-time concentration.",
                  "Spectral point: low-frequency traffic noise penetrates buildings; impulsive spikes annoy more.",
                  "Conclude: ubiquity and 24-hour persistence make traffic the dominant exposure.",
                ],
              },
              {
                q: "Why is night-time noise more annoying than the same level by day?",
                marks: 2,
              },
              {
                q: "Explain why tyre-road noise, rather than the engine, dominates at highway speeds.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Noise control: source, path and receiver",
            body: [
              "Control at the source is the most effective because every decibel saved there is saved everywhere. Good practice starts with quieter specification - low-noise fans and burners, proper balancing and alignment, worn-bearing replacement - then adds engineering: reactive silencers (expansion chambers and resonators) on engine exhausts, dissipative silencers (lined ducts) for fans, flexible mounts and inertia blocks isolating vibration, damping sheets on ringing panels, and total acoustic enclosures - the packaged type around a DG set buys 20-25 dB of relief when ventilation and exhaust are properly treated.",
              "On the path, distance is the cheapest attenuator - a point source falls 6 dB per doubling of distance, a line source 3 dB - exploited by zoning and master plans that separate industries, arterials and hospitals. Barriers and earth berms block the direct line of sight, a screening building row can serve as one, and dense green belts are pleasant but yield only a few decibels. At the receiver, protection is the last resort: ear plugs attenuate roughly 15-25 dB(A) and earmuffs up to 40 when fitted correctly, backed by administrative controls - job rotation, exposure-hour limits and audiometric monitoring.",
              "A worked chain shows the arithmetic. A source with sound power level 105 dB radiates over a hard yard: at 40 m, Lp = 105 - 20 log10(40) - 11, about 62 dB(A); an 8 dB barrier along the path brings 54 dB(A), inside the 55 dB(A) residential day limit - but only while the barrier holds the line of sight. Source-path-receiver is the framework examiners reward: list methods under each head, give one number per head, and never present personal protection as the primary strategy.",
            ],
            bullets: [
              "Source controls: quieter specification, maintenance, reactive and dissipative silencers, vibration isolation, damping, enclosures giving 20-25 dB.",
              "Path controls: distance (6 dB per doubling for point sources), barriers and berms, zoning and layout, green belts worth a few dB.",
              "Receiver controls: ear plugs 15-25 dB(A), earmuffs to about 40 dB(A), with correct fit and training.",
              "Administrative layer: job rotation, exposure caps, audiometry - the hearing conservation programme.",
              "Hierarchy: source first, path next, receiver last - protection alone is a compliance failure, not a strategy.",
            ],
            codeExample: {
              language: "python",
              caption: "Spherical spreading plus barrier insertion loss checked against the 55 dB(A) limit.",
              code: `import math

Lw = 105.0                 # sound power level, dB re 1 pW
r = 40.0                   # distance from source, m

Lp = Lw - 20.0 * math.log10(r) - 11.0
print(f"at {r:.0f} m: {Lp:.1f} dB(A)")      # about 62.0 dB(A)

for IL in (0.0, 8.0):       # barrier insertion loss
    print(f"barrier +{IL:.0f} dB -> {Lp - IL:.1f} dB(A)")

limit = 55.0                # residential day limit
print("meets residential day limit:", Lp - 8.0 <= limit)   # True`,
            },
            diagram: {
              kind: "layers",
              title: "The layered defence against noise",
              caption: "Attack each layer in order - the higher the layer, the cheaper each decibel saved.",
              layers: [
                { label: "Source: quiet by design", note: "silencers, isolation, enclosures" },
                { label: "Path: distance and barriers", note: "zoning, berms, screening buildings" },
                { label: "Receiver: personal protection", note: "plugs, muffs, limited exposure" },
                { label: "Administration: manage the exposure", note: "rotation, audiometry, training" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Marking schemes for 'explain methods of noise control' are literally organised source-path-receiver. Use the three headings, two methods each, one quantified example per heading - that structure is worth half the marks before any content.",
            },
            keyTerms: [
              { term: "Silencer (muffler)", definition: "A reactive or dissipative device fitted to an exhaust or duct that reflects or absorbs sound while passing the flow." },
              { term: "Acoustic enclosure", definition: "A close-fitting, ventilated, lined box around a machine giving 20-25 dB(A) reduction when openings are treated." },
              { term: "Hearing conservation programme", definition: "The occupational package: monitoring, engineering controls, protection, training and audiometric follow-up." },
            ],
            examQuestions: [
              {
                q: "Discuss noise control measures at source, along the path and at the receiver, giving engineering examples with typical reductions.",
                marks: 7,
                outline: [
                  "Frame the hierarchy: source most effective, receiver least reliable.",
                  "Source: quiet specification, maintenance, reactive versus dissipative silencers.",
                  "Source continued: vibration isolation, damping, enclosures with numbers (20-25 dB).",
                  "Path: distance law (6 dB per doubling), barriers, zoning, green belts.",
                  "Receiver: plugs and muffs with attenuation ranges, fit and training.",
                  "Administrative: rotation, exposure limits, audiometry.",
                  "Close with a worked example: source level, distance, barrier, compliance check.",
                ],
              },
              {
                q: "Differentiate reactive and dissipative silencers with one application of each.",
                marks: 2,
              },
              {
                q: "Explain the role of green belts in noise control and their limitations.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Noise barriers and noise mapping",
            body: [
              "A barrier works by breaking the line of sight: sound that would travel straight must now diffract over the top edge or around the ends, and each detour costs energy. Performance is governed by the Fresnel number N = 2 delta / lambda - twice the path difference divided by the wavelength - converted to attenuation through relations such as Maekawa's; well-designed walls deliver 5-15 dB insertion loss with diminishing returns beyond about 15-20 dB no matter how high they grow. Height should just sever the source-receiver sight line with margin; the barrier must be long enough to stop end-around leakage, dense (surface mass at least 20 kg/m2) and ideally absorptive on the source side.",
              "Earth berms blend into landscapes and perform comparably to walls; vegetation alone, despite its reputation, is nearly worthless acoustically unless tens of metres deep and dense. Noise mapping is the systematic companion: a model of sound levels across an area, drawn as contours. The recipe is fixed - inventory the sources (traffic counts by class, speed, road surface), build a propagation model per ISO 9613-2 with geometric spreading, ground and air absorption, barriers and meteorological corrections, validate against measurements, then output contours and exposure statistics such as dwellings above 55/45 dB(A).",
              "Software such as CadnaA, SoundPLAN and Lima automates the arithmetic on city-scale grids, and the CPCB's continuous noise monitoring network across the metros feeds exactly such assessments. Maps drive action: silent-zone enforcement, heavy-vehicle rerouting, corridor barriers and facade insulation programmes - and, redrawn after intervention, they document the benefit. Uncertainty comes from source data quality and meteorology, so good practice revisits strategic maps on a fixed cycle. For the exam, write the five mapping steps and two uses; the Fresnel principle carries the barrier half of the question.",
            ],
            bullets: [
              "Barrier physics: diffraction over the broken line of sight; the Fresnel number N = 2 delta / lambda links geometry to insertion loss.",
              "Realistic performance: 5-15 dB for well-designed walls; caps near 20 dB regardless of extra height.",
              "Design rules: sever the sight line with margin, surface mass at least 20 kg/m2, absorptive face, long enough to stop end leakage.",
              "Earth berms perform like walls with better landscape value; vegetation belts alone give only a few decibels.",
              "Noise mapping: source inventory, ISO 9613-2 propagation model, validation, contour output, exposure statistics - then action planning.",
            ],
            table: {
              caption: "Barrier types and realistic insertion losses.",
              headers: ["Barrier", "Typical insertion loss, dB", "Notes"],
              rows: [
                ["Absorptive wall (timber, concrete, panel)", "5-15", "absorptive face limits reflections"],
                ["Reflective wall", "5-10", "care needed where opposite receptors exist"],
                ["Earth berm", "5-12", "landscape-friendly, wide footprint"],
                ["Dense vegetation belt (30 m or more)", "3-5", "amenity value beyond acoustics"],
                ["Screening building row", "10-20", "planning-level barrier"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Barrier audit beside a highway colony",
              caption: "The geometry and material decisions that decide whether a barrier actually pays.",
              start: "Highway at the colony boundary; the 55 dB(A) day limit applies",
              branches: [
                {
                  label: "Wall height severs the sight line to first-floor windows",
                  outcome: "8-12 dB relief and colony compliance",
                  good: true,
                },
                {
                  label: "Wall stops short of the last receptor angle",
                  outcome: "end diffraction leaks noise; under 3 dB",
                  good: false,
                },
                {
                  label: "Reflective face parallel to housing across the road",
                  outcome: "reflection shifts the problem to the far side",
                  good: false,
                },
                {
                  label: "Absorptive face and Fresnel-tuned height",
                  outcome: "meets the 55/45 dB(A) day-night limits",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Noise mapping' has graduated from optional to favourite short note. Answer with purpose (exposure assessment, action planning), the five steps, and one output (contour map, exposure count) - software names are worth a half-mark each, not more.",
            },
            keyTerms: [
              { term: "Fresnel number", definition: "N = 2 delta / lambda, the path-difference-to-wavelength ratio that governs barrier diffraction and hence insertion loss." },
              { term: "Insertion loss", definition: "The decibel drop at a receiver caused solely by inserting a barrier between source and receiver." },
              { term: "Noise map", definition: "A contour representation of predicted or measured sound levels over an area, used to manage community exposure." },
            ],
            examQuestions: [
              {
                q: "Explain the principle and design considerations of noise barriers, and outline the procedure for preparing a noise map of an urban area.",
                marks: 7,
                outline: [
                  "Principle: break the line of sight and force diffraction; energy lost per detour.",
                  "Fresnel number N = 2 delta / lambda and Maekawa-type attenuation; 5-15 dB realistic.",
                  "Design: height, length against end leakage, surface mass at least 20 kg/m2, absorptive face.",
                  "Berms versus walls; the true worth of vegetation.",
                  "Mapping: source inventory with counts, speeds, surfaces.",
                  "Propagation model per ISO 9613-2: spreading, absorptions, barriers, meteorology; validation.",
                  "Outputs: contours and exposure counts; uses: silent zones, rerouting, barrier siting.",
                ],
              },
              {
                q: "What is a noise map and why do cities prepare one?",
                marks: 2,
              },
              {
                q: "Why does a vegetation strip perform poorly as a noise barrier?",
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
      title: "Solid Waste Management",
      summary:
        "Everything a city throws away and where it goes: the types and characteristics of solid waste, the collection chain and composting, thermal treatment with energy recovery and RDF, the engineered anatomy of a sanitary landfill, and the E-Waste and Solid Waste Management Rules 2016 that govern it all.",
      chapter: {
        number: "03",
        title: "Municipal and Special Wastes",
        intro:
          "Unit III follows the waste stream from dustbin to final sink. Section 3.1 characterises the material and what each property dictates; 3.2 moves it - collection logistics, then the biology of composting; 3.3 burns what biology cannot use and conditions the rest into RDF; 3.4 buries the residue behind clay and HDPE; and 3.5 closes with the two 2016 rulebooks and the extended responsibility of producers.",
        inOneBreath:
          "Solid waste is municipal, industrial, hazardous, biomedical, e-waste and construction debris; Indian MSW runs 0.3-0.6 kg per capita per day with 40-55% organics, 40-60% moisture and 800-1800 kcal/kg; collection eats 60-70% of budgets; composting wants a C/N of 25-30, moisture 50-60% and thermophilic weeks at 55-70 deg C; incineration needs about 1500 kcal/kg as fired, so RDF pellets of 2600-4000 kcal/kg or cement-kiln co-processing carry the thermal route; the landfill is the last resort behind 60 cm clay, 1.5 mm HDPE, leachate collection and a capped closure; and the SWM and E-Waste Rules 2016 put segregation on every generator and end-of-life responsibility on every producer.",
        sections: [
          {
            number: "3.1",
            title: "Types and characteristics of solid waste",
            body: [
              "Solid waste is classified by source. Municipal solid waste - the subject of the SWM Rules 2016 - gathers residential, commercial, institutional and street-sweeping refuse; industrial process waste and its hazardous fraction follow separate rules, while biomedical waste in its colour-coded bags, e-waste, construction and demolition debris, slaughterhouse and agricultural residues each ride their own channels. Indian cities generate 0.3-0.6 kg per capita per day - a half-million-person city handles 150-300 tonnes daily - and the mix is dominated by organics, which is the single most consequential fact of Indian waste management.",
              "Indian MSW runs 40-55% biodegradable, roughly 30% inert silt and ash, and single-digit fractions of paper, plastic, glass and metal; moisture sits at 40-60% and loose density at 150-250 kg/m3, rising to 400-500 kg/m3 in collection vehicles. The calorific value as collected is only about 800-1800 kcal/kg - far below the roughly 1500 needed for self-sustaining combustion - which is why composting and RDF conditioning lead processing choices. Chemical character is summarised by proximate and ultimate analyses (moisture, volatile matter, ash, fixed carbon; carbon, hydrogen, nitrogen, sulphur, oxygen) and the carbon-to-nitrogen ratio that governs composting.",
              "Characterisation is not academic. C/N decides the compost recipe, calorific value decides whether incineration or RDF makes sense, moisture governs drying needs, and the inert fraction sizes the landfill. The SWM Rules oblige civic bodies to characterise waste periodically and to process wet and dry streams separately, so the sampling protocol - representative loads, sorted into standard component categories, repeated across seasons - directly shapes plant design. Seasonal swings, from festival surges to monsoon wetting, must be captured too, or the city builds a plant for a waste that does not exist.",
            ],
            bullets: [
              "By source: municipal, industrial, hazardous, biomedical, e-waste, construction and demolition debris, agricultural - each with its own rules.",
              "Indian generation: 0.3-0.6 kg per capita per day; composition 40-55% organics, about 30% inerts, single-digit recyclables.",
              "Physical character: moisture 40-60%, loose density 150-250 kg/m3, collection density 400-500 kg/m3.",
              "Calorific value as collected 800-1800 kcal/kg - too low for mass-burn without support fuel or drying.",
              "C/N ratio of 20-40 in raw MSW governs composting; proximate and ultimate analysis govern thermal options.",
            ],
            table: {
              caption: "Characteristics of Indian MSW and what each dictates.",
              headers: ["Characteristic", "Typical value", "Planning implication"],
              rows: [
                ["Per-capita generation", "0.3-0.6 kg/day", "collection fleet and landfill sizing"],
                ["Organic fraction", "40-55%", "compost and biogas potential"],
                ["Moisture", "40-60%", "drying needed before RDF or incineration"],
                ["Calorific value", "800-1800 kcal/kg", "support fuel for mass burn; RDF conditioning"],
                ["Inert fraction", "about 30%", "landfill volume demand"],
                ["C/N ratio", "20-40", "composting blend design"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The municipal solid waste stream",
              caption: "The chain along which the SWM Rules 2016 assign duties - generation to final sink.",
              steps: [
                { label: "Generation", note: "households, commerce, institutions" },
                { label: "Source segregation", note: "wet, dry, domestic hazardous, sanitary" },
                { label: "Primary collection", note: "door-to-door, auto-tippers" },
                { label: "Transfer and transport", note: "bins, transfer stations, compactors" },
                { label: "Processing", note: "compost, RDF, biogas, incineration" },
                { label: "Residue to landfill", note: "rejects and inerts only" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Classification and characteristics of MSW' is a recurring 7-marker. Quote the ranges - organics 40-55%, moisture 40-60%, CV 800-1800 kcal/kg - and attach each characteristic to the processing choice it dictates.",
            },
            keyTerms: [
              { term: "Municipal solid waste", definition: "Everyday discards from households, commerce, institutions and street sweeping, regulated under the SWM Rules 2016." },
              { term: "Calorific value", definition: "Heat released on complete combustion (kcal/kg); decides thermal treatment viability - RDF pellets reach 2600-4000." },
              { term: "Biomedical waste", definition: "Wastes from healthcare sorted into colour-coded categories under the Bio-Medical Waste Management Rules 2016." },
            ],
            examQuestions: [
              {
                q: "Classify solid wastes by source and present the physical and chemical characteristics of Indian municipal solid waste with typical values.",
                marks: 7,
                outline: [
                  "Classification: municipal, industrial, hazardous, biomedical, e-waste, construction and demolition, agricultural.",
                  "One line on each class and its governing rule.",
                  "Generation rate 0.3-0.6 kg per capita per day and its use in planning.",
                  "Composition: organics 40-55%, inerts about 30%, recyclables single-digit.",
                  "Physical: moisture 40-60%, densities loose and in-vehicle; chemical: proximate, ultimate, C/N.",
                  "Calorific value 800-1800 kcal/kg and its consequence for thermal routes.",
                  "Link each characteristic to the processing option it favours.",
                ],
              },
              {
                q: "Why is Indian MSW considered unsuitable for direct mass-burn incineration?",
                marks: 2,
              },
              {
                q: "Distinguish physical from chemical characteristics of solid waste with examples.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Collection, transport and composting",
            body: [
              "Collection absorbs 60-70% of municipal solid waste budgets, so its engineering is mostly logistics. The Rules mandate door-to-door primary collection of segregated waste - auto-tippers and small vehicles feed secondary bins or transfer stations, from which compactors and tippers haul to processing sites; transfer economics beat direct hauling once the one-way distance grows beyond roughly 20 km. Route planning, bin sizing and crew scheduling are the classic optimisation targets, and the 2016 Rules add enforcement teeth: user fees for service and spot fines for non-segregation and littering, with bulk generators made to process their own wet waste.",
              "Composting converts the segregated wet fraction to humus with aerobic microbes. The recipe targets a carbon-to-nitrogen ratio of 25-30, moisture 50-60% and good porosity; the windrow method lays shredded waste in piles about 3 m wide and 1.5-2 m high, turned every few days to re-aerate. The pile heats into the thermophilic band, 55-70 deg C, which kills pathogens and weed seeds; temperature falls after 4-6 weeks, signalling maturation, then 3-4 weeks of curing finish the product before screening and bagging. Vermicomposting passes the same material through earthworm beds - slower but gentler - and the old Bangalore pit method composts anaerobically in trenches.",
              "Quality decides the market. The Fertiliser Control Order caps heavy metals and moisture in marketable compost, so a city whose feedstock carries mixed waste fails at the laboratory even when the biology worked. Field practice: blend high-carbon and high-nitrogen feedstocks to hit the recipe (the worked example below), recirculate leachate from the platform, manage odour and vectors with prompt covering, and send rejects - plastics, rags, inerts - to RDF or landfill. Composting diverts roughly half of Indian MSW from burial, which is why every SWM plan begins with it.",
            ],
            bullets: [
              "Collection chain: door-to-door primary, secondary bins or transfer stations, long-haul compactors; 60-70% of SWM budgets.",
              "SWM Rules 2016 tools: user fees for service, spot fines for littering and non-segregation, bulk-generator duties.",
              "Composting recipe: C/N 25-30, moisture 50-60%, thermophilic window 55-70 deg C for pathogen kill.",
              "Windrow method: piles about 3 m by 1.5-2 m, turned every few days, 4-6 weeks active plus 3-4 weeks curing.",
              "Vermicomposting uses earthworms; the Bangalore pit method is the anaerobic traditional variant.",
            ],
            codeExample: {
              language: "python",
              caption: "Weighted C/N blending to hit the 25-30 window before windrowing.",
              code: `# Blending feedstocks to the composting C/N target
leaves_cn, leaves_kg = 55.0, 500.0    # carbon-rich bulking waste
grass_cn, grass_kg = 15.0, 0.0        # nitrogen-rich green waste

target = 30.0
# (55 * 500 + 15 * x) / (500 + x) = 30  ->  solve for x
x = leaves_kg * (leaves_cn - target) / (target - grass_cn)
print(f"grass clippings needed: {x:.0f} kg")     # 833 kg

blend = (leaves_cn * leaves_kg + grass_cn * x) / (leaves_kg + x)
print(f"blend C/N = {blend:.1f}")                 # 30.0`,
            },
            diagram: {
              kind: "cycle",
              title: "The composting loop",
              caption: "Wet-fraction processing as a repeating cycle - each pass returns organics to soil.",
              steps: [
                { label: "Blend and shred", note: "C/N tuned to 25-30" },
                { label: "Build windrow", note: "3 m wide, 1.5-2 m high" },
                { label: "Thermophilic phase", note: "55-70 deg C with turning" },
                { label: "Curing", note: "temperature falls, 3-4 weeks" },
                { label: "Screen and bag", note: "rejects to RDF or landfill" },
                { label: "Soil application", note: "humus returns to land" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Two composting numericals recur: the C/N blend (weighted average, then solve for the missing mass) and 'factors affecting composting' (C/N, moisture, aeration, temperature, particle size). Answer the factors question with the number attached to each factor.",
            },
            keyTerms: [
              { term: "Windrow composting", definition: "Aerobic composting in long piles turned at intervals to re-aerate and control temperature and moisture." },
              { term: "C/N ratio", definition: "Carbon-to-nitrogen ratio of the feedstock; 25-30 is ideal for rapid, odour-free composting." },
              { term: "Vermicomposting", definition: "Composting by earthworms acting on organic waste; slower than windrows but yields fine, pathogen-poor vermicompost." },
            ],
            examQuestions: [
              {
                q: "Describe the composting process with its controlling factors, and compare the windrow, vermicomposting and Bangalore pit methods.",
                marks: 7,
                outline: [
                  "Define composting: aerobic microbial stabilisation of organics into humus.",
                  "Factors: C/N 25-30, moisture 50-60%, aeration and turning, temperature, particle size, pH.",
                  "Windrow method: dimensions, turning, thermophilic phase, duration, curing.",
                  "Vermicomposting: worms, bedding, gentle conditions, product quality.",
                  "Bangalore pit method: anaerobic trenching, long duration, land intensive.",
                  "Pathogen destruction logic: 55-70 deg C sustained kills pathogens and weed seeds.",
                  "Product: FCO quality norms, screening, market; rejects to RDF or landfill.",
                ],
              },
              {
                q: "Why must windrows be turned regularly?",
                marks: 2,
              },
              {
                q: "Why is source segregation essential to compost quality?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Incineration, energy recovery and RDF",
            body: [
              "Incineration burns waste to an inert ash and, ideally, recovers the heat. Modern units dry and then combust the charge in a primary chamber at 650-800 deg C and burn the gases in a secondary chamber at a minimum of 850 deg C with two seconds' residence - the rule's dioxin guard - under 50-150% excess air. Outputs split into bottom ash (15-25% by mass), fly ash captured by the flue-gas cleaning train of dust collector, acid-gas scrubber and activated carbon, and hot gas raising steam for power at 18-25% efficiency, monitored continuously at the stack.",
              "Economics hinge on calorific value: autogenous burning needs roughly 1500 kcal/kg or better as fired, and Indian mixed MSW at 800-1800 with 40-60% moisture usually fails that test - the Timarpur plant's failure is the standard citation. Refuse-derived fuel fixes the feed instead of the furnace: shred, dry, remove inerts magnetically and by air classification, then pelletise; the pellets climb to 2600-4000 kcal/kg, store and transport like coal, and co-fire in cement kilns and boilers. Co-processing in kilns is now the preferred route because the extreme temperature destroys organics completely and the ash binds into clinker.",
              "Choice between composting, RDF and mass burn follows the waste character of section 3.1: high organics with low calorific value favours biological routes; a value above roughly 1500-2000 kcal/kg after drying makes thermal options viable; whatever remains - inerts and rejects - goes to the engineered landfill. Indian waste-to-energy plants at Okhla (Delhi) and Jabalpur have run at mixed fortune, hemmed in by feedstock quality and emission protests; strict stack norms, including dioxin limits, apply with continuous monitoring. The Dulong estimate below converts an ultimate analysis into a first-pass heating value.",
            ],
            bullets: [
              "Incineration: primary chamber 650-800 deg C, secondary at least 850 deg C with 2 s residence; excess air 50-150%.",
              "Streams: bottom ash 15-25%, fly ash from the cleaning train, steam at 18-25% power efficiency.",
              "Autogenous combustion needs about 1500 kcal/kg as fired; Indian mixed MSW usually fails - the Timarpur lesson.",
              "RDF chain: shred, dry, sort (magnetics, air classification), pelletise; product 2600-4000 kcal/kg.",
              "Co-processing in cement kilns is the preferred RDF use - organics destroyed, ash absorbed into clinker.",
            ],
            codeExample: {
              language: "python",
              caption: "Dulong higher heating value, then the moisture-and-ash knockdown to as-fired terms.",
              code: `# Dulong estimate of higher heating value (kcal/kg, dry basis)
C, H, O, S = 26.0, 3.5, 20.0, 0.15     # mass percent, dry basis

hhv = 81.0 * C + 342.5 * (H - O / 8.0) + 22.5 * S
print(f"HHV (dry) = {hhv:.0f} kcal/kg")           # about 2450 kcal/kg

# as-received knockdown for 40% moisture and 22% ash:
M, ash = 40.0, 22.0
as_fired = hhv * (100.0 - M - ash) / 100.0
print(f"as-fired estimate = {as_fired:.0f} kcal/kg")   # about 930 kcal/kg`,
            },
            diagram: {
              kind: "compare",
              title: "Two thermal routes for the dry fraction",
              caption: "Mass burn treats everything; RDF fixes the fuel first.",
              left: {
                heading: "Mass-burn incineration",
                items: [
                  "Mixed waste fed as received",
                  "Grate furnace plus 850 deg C secondary chamber",
                  "Steam boiler and turbine train",
                  "Flue-gas cleaning: dust collector, scrubber, carbon",
                  "Needs CV near 1500 kcal/kg as fired",
                ],
              },
              right: {
                heading: "RDF route",
                items: [
                  "Shred, dry and sort the feed first",
                  "Pellets of 2600-4000 kcal/kg",
                  "Co-fire in cement kilns or boilers",
                  "Ash binds into clinker inside kilns",
                  "Adds processing cost and a product to sell",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked why incineration struggles in India, answer with three numbers and one case: calorific value 800-1800 kcal/kg and moisture 40-60% against the roughly 1500 needed - hence the Timarpur closure and the pivot to RDF and co-processing.",
            },
            keyTerms: [
              { term: "Incineration", definition: "Controlled high-temperature combustion of waste to sterile ash and flue gas, with heat recovery where economics allow." },
              { term: "Refuse-derived fuel (RDF)", definition: "Processed MSW - shredded, dried, inert-free and pelletised - with calorific value lifted to 2600-4000 kcal/kg." },
              { term: "Co-processing", definition: "Use of waste-derived fuel in industrial processes such as cement kilns, where heat destroys organics and ash enters clinker." },
            ],
            examQuestions: [
              {
                q: "Explain the incineration process for municipal solid waste with its design and operating requirements, and describe the flue-gas cleaning train.",
                marks: 7,
                outline: [
                  "Purpose: volume reduction, sterile ash, energy recovery.",
                  "Stages on the grate: drying, ignition, combustion, burnout.",
                  "Operating box: primary 650-800, secondary at least 850 deg C, 2 s residence, 50-150% excess air.",
                  "Waste acceptance: CV about 1500 kcal/kg as fired; Indian MSW usually below.",
                  "Residues: bottom ash, fly ash and APC residues as the hazardous streams.",
                  "Flue-gas train: dust collector, acid-gas scrubber, activated carbon for dioxins and mercury, CEMS.",
                  "Indian experience: Timarpur failure; Okhla and Jabalpur operating experience.",
                ],
              },
              {
                q: "Define refuse-derived fuel and state two advantages over raw MSW.",
                marks: 2,
              },
              {
                q: "What is co-processing in cement kilns, and why is it preferred?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Sanitary landfill design",
            body: [
              "A sanitary landfill is an engineered, operated and closed facility - daily soil cover, leachate control, gas management, monitoring - as opposed to an open dump. Siting screens candidates on: a buffer from habitation (about 500 m), distance from water bodies, exclusion of the 100-year floodplain, groundwater at least 2 m below the intended base, soils for cover material, haul distance, access and wind direction over neighbours. Construction follows one of three geometries: the area method on flat ground, the trench method where soil is plentiful, and the ramp method on sloping terrain.",
              "The cross-section examiners want is the barrier sandwich. From the base up: prepared subgrade; a composite liner of at least 60 cm compacted clay (permeability about 10^-9 m/s or lower) under a 1.5 mm HDPE geomembrane; a 300 mm gravel drainage blanket with perforated leachate pipes leading to a sump and treatment plant; then the waste itself, compacted in thin lifts within daily cells and capped with 10-15 cm of daily soil cover. The final cover mirrors the logic above the waste - compacted clay cap, drainage layer and 45-60 cm of vegetative soil - so rain runs off rather than in.",
              "Operation and end-state matter as much as concrete. Decomposing waste yields landfill gas, roughly half methane, which must be collected by wells for flaring or power before it migrates or fires. Leachate - high-BOD, ammonium-rich, metal-laden liquid - demands its own treatment by recirculation, membranes or co-treatment. Stormwater cut-off drains keep run-on out, monitoring wells up- and down-gradient watch groundwater, and after closure the site needs a care and monitoring period of at least 15 years, often reused as a park. The volume arithmetic below is the standard planning numerical.",
            ],
            bullets: [
              "Siting screens: habitation buffer about 500 m, off the 100-year floodplain, water table 2 m or more below base, cover soil, haul distance.",
              "Construction methods: area (flat ground), trench (soil-rich sites), ramp (sloping ground).",
              "Barrier system: 60 cm or more compacted clay (about 10^-9 m/s) plus 1.5 mm HDPE, over a 300 mm leachate collection blanket.",
              "Daily cover of 10-15 cm on every cell; final cover of clay, drainage layer and 45-60 cm vegetative soil.",
              "Gas about half methane - collect and flare or generate; leachate gets its own treatment; post-closure care 15 years or more.",
            ],
            codeExample: {
              language: "python",
              caption: "Twenty-year airspace and footprint from per-capita generation.",
              code: `# Landfill airspace and footprint for a mid-size city
population = 500_000
rate_kg = 0.40                    # kg per capita per day
waste_tpd = population * rate_kg / 1000.0     # 200 t/day

compacted = 750.0                 # kg/m3 after compaction
cover_factor = 1.15               # daily and intermediate cover allowance

years = 20
vol = waste_tpd / compacted * 365 * years * cover_factor
print(f"airspace demand = {vol:,.0f} m3")    # about 2.24 million m3

height = 15.0                     # design filling height, m
footprint = vol / height
print(f"footprint = {footprint / 10_000:.1f} hectares")   # about 14.9 ha`,
            },
            diagram: {
              kind: "layers",
              title: "The landfill barrier sandwich",
              caption: "Base liner to final cover - the cross-section worth full marks.",
              layers: [
                { label: "Vegetative soil (45-60 cm)", note: "final cover, shedding runoff" },
                { label: "Drainage layer", note: "keeps water off the clay cap" },
                { label: "Clay cap plus geomembrane", note: "seals the top" },
                { label: "Compacted waste cells", note: "lifts with daily soil cover" },
                { label: "Leachate collection blanket", note: "300 mm gravel with perforated pipes" },
                { label: "Composite base liner", note: "60 cm clay + 1.5 mm HDPE" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the cross-section in exam order - subgrade, clay, HDPE, gravel blanket with pipes, waste lifts with daily cover, clay cap, drainage, vegetative soil - and label the two numbers 60 cm and 1.5 mm. Labels are marks.",
            },
            keyTerms: [
              { term: "Sanitary landfill", definition: "An engineered waste disposal facility with liner, leachate collection, gas management, daily cover and monitoring, unlike an open dump." },
              { term: "Leachate", definition: "Liquid percolating through waste, carrying dissolved and suspended pollutants; collected, then treated or recirculated." },
              { term: "Composite liner", definition: "A compacted clay layer (60 cm or more, permeability about 10^-9 m/s) working with a geomembrane (1.5 mm HDPE) beneath the waste." },
            ],
            examQuestions: [
              {
                q: "Explain the criteria for selecting a landfill site and describe, with a sketch, the design components of a sanitary landfill.",
                marks: 7,
                outline: [
                  "Siting: habitation buffer, floodplain exclusion, water table depth, soil, haul, access, wind.",
                  "Sketch: liner system, leachate collection, gas wells, cap, monitoring wells.",
                  "Base: composite liner of 60 cm clay plus 1.5 mm HDPE, gravel blanket with pipes to a sump.",
                  "Operation: cell construction, lifts, daily cover 10-15 cm, compaction.",
                  "Gas management: collection, flaring or power; landfill gas about half methane.",
                  "Leachate treatment and stormwater cut-off drains.",
                  "Closure: final cover, 15-year post-closure monitoring, end use.",
                ],
              },
              {
                q: "State the purpose of daily cover in a landfill.",
                marks: 2,
              },
              {
                q: "Characterise landfill leachate and name two treatment options.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "E-waste and the SWM Rules 2016",
            body: [
              "E-waste - discarded electrical and electronic equipment - is the fastest growing waste stream in India, already past the million-tonne-a-year mark and third largest in the world. Its danger and value live in the same box: lead in cathode-ray-tube glass and solder, mercury in lamps and flat-panel backlights, cadmium in chips and batteries, brominated flame retardants in plastics - alongside gold, silver, palladium and copper worth recovering. The bulk of Indian e-waste still flows through the informal sector, where crude acid leaching and open burning recover metal at a dreadful cost to workers and soil.",
              "The E-Waste (Management) Rules 2016 answered with Extended Producer Responsibility: producers must finance and organise take-back, with collection targets rising from 30% toward 70% of the quantity they place on the market; the rules mandate authorised dismantlers and recyclers, registration with the CPCB, reduction of hazardous substances in new equipment and consumer awareness duties. The 2022 successor rules recast the targets as tradeable EPR certificates in an online registry. Collection centres, refurbishers and consumers all have defined roles, and the State Boards police the chain.",
              "The Solid Waste Management Rules 2016 replaced the 2000 municipal rules and widened the net far beyond municipalities. Every generator - households, institutions, gated communities, hotels, event organisers - must segregate at source into wet (biodegradable), dry (recyclable) and domestic hazardous streams plus wrapped sanitary waste; open burning is banned; bulk generators process their own wet waste; user fees fund the service and spot fines punish violations. Landfilling is demoted to the last resort - only non-usable inert and processing rejects may be buried, waste with calorific value of 1500 kcal/kg or higher must go to thermal routes, and legacy dumps must be remediated.",
            ],
            bullets: [
              "E-waste toxins: lead (CRT glass, solder), mercury (lamps, backlights), cadmium, brominated flame retardants; valuables: gold, silver, palladium, copper.",
              "The informal sector handles the bulk of Indian e-waste - acid leaching and open burning poison workers and soil.",
              "EPR under the 2016 rules: producers fund take-back with targets rising from 30% toward 70%; the 2022 rules use tradeable EPR certificates.",
              "SWM Rules 2016: source segregation into wet, dry and domestic hazardous streams plus sanitary waste, for every generator.",
              "Landfill demoted to last resort: inerts and rejects only; calorific value at or above 1500 kcal/kg goes to thermal routes; legacy dumps to be remediated.",
            ],
            table: {
              caption: "Hazards hidden in common e-waste items.",
              headers: ["Item", "Hazardous constituent", "Chief concern"],
              rows: [
                ["CRT monitors and TVs", "lead in glass and frit", "neurotoxic leachate"],
                ["Flat panels and lamps", "mercury in backlights", "neurotoxic vapour, water pollution"],
                ["Printed circuit boards", "lead solder, cadmium, flame retardants", "leaching and dioxins if burnt"],
                ["Batteries", "cadmium, lithium, nickel", "soil contamination, fire risk"],
                ["Mixed plastic housings", "brominated flame retardants", "dioxin formation on burning"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The recovery hierarchy the rules encode",
              caption: "Preferred order for e-waste and municipal waste alike - top first.",
              tiers: [
                { label: "Reduce / RoHS", note: "design out toxics, build to last" },
                { label: "Reuse", note: "refurbish and donate working items" },
                { label: "Recycle", note: "authorised dismantlers recover metals" },
                { label: "Recover", note: "energy from non-recyclables" },
                { label: "Dispose", note: "engineered landfill of last resort" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "EPR is the single most examined acronym in Unit III. Define it - the producer bears end-of-life responsibility through take-back and rising targets - and tag it to the E-Waste Rules 2016 in the same sentence.",
            },
            keyTerms: [
              { term: "Extended Producer Responsibility", definition: "The obligation on producers to organise and finance collection and recycling of their products at end of life, through take-back and rising targets." },
              { term: "Source segregation", definition: "Household-level separation of waste into wet, dry and domestic hazardous streams, mandated by the SWM Rules 2016." },
              { term: "RoHS", definition: "Restriction of Hazardous Substances: limits on toxic constituents (lead, mercury, cadmium, brominated flame retardants) in new electronic products." },
            ],
            examQuestions: [
              {
                q: "State the salient features of the Solid Waste Management Rules 2016 and the duties they assign to waste generators and local bodies.",
                marks: 7,
                outline: [
                  "Context: replaced the 2000 rules; scope extended beyond municipalities to all generators.",
                  "Generator duties: three-stream segregation plus sanitary waste, no burning, user fees.",
                  "Bulk generators: on-site wet-waste processing; duties of event organisers.",
                  "Local body duties: door-to-door collection, processing facilities, spot fines, awareness.",
                  "Processing order: compost or biogas first; thermal route for CV at or above 1500 kcal/kg.",
                  "Landfill: only inerts and rejects; siting and liner requirements.",
                  "Legacy dump remediation and annual reporting.",
                ],
              },
              {
                q: "Define Extended Producer Responsibility.",
                marks: 2,
              },
              {
                q: "List the hazardous constituents of e-waste and their health effects.",
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
      title: "Industrial Wastewater",
      summary:
        "Industrial effluent on its way to the standards: what makes it different from sewage, the conditioning trio of equalization, neutralization and oil separation, the chemistry of heavy metals, the biology - aerobic and anaerobic - that eats the organics, and the shared economics of CETPs against CPCB's Schedule VI limits.",
      chapter: {
        number: "04",
        title: "Industrial Wastewater Treatment",
        intro:
          "Unit IV designs the flowsheet. Section 4.1 characterises the waste and reads the BOD/COD ratio; 4.2 conditions the flow - damp it, neutralise it, strip its oil; 4.3 precipitates, exchanges and recovers its metals; 4.4 lets microbes finish the organics, anaerobically when the load pays for it; and 4.5 sets the finish line - the general and sector standards, and the CETP model for clusters that cannot treat alone.",
        inOneBreath:
          "Industrial effluent is stronger, wilder and more toxic than sewage: a BOD/COD ratio above 0.4 is biodegradable, below 0.3 refractory; equalize for 4-12 hours, neutralise to pH 6.5-8.5 with lime, take free oil by API separator and emulsified oil by DAF; metals precipitate as hydroxides at pH 8-11 with Cr(VI) reduced first at pH 2-3; biology runs aerobic below a few thousand mg/L and anaerobic above it, the UASB turning out 0.35 m3 methane per kg COD destroyed; and discharge faces Schedule VI - BOD 30 to streams, 350 to sewers - or the cluster route of a CETP.",
        sections: [
          {
            number: "4.1",
            title: "Characteristics of industrial wastewater",
            body: [
              "Industrial wastewater departs from domestic sewage in every parameter at once: it can be a hundred times stronger, hot, strongly acidic or alkaline, coloured, saline, oily or toxic. Distillery spent wash carries 40,000-70,000 mg/L of BOD; tannery effluent brings chromium, sulphide and high dissolved salts; textile dyeing discharges colour and refractory organics; electroplating rinse water holds chromium, nickel, zinc and cyanide; dairy and pulp-and-paper wastes are strong but largely biodegradable. Treatment design therefore starts from a full characterisation: flow, pH, temperature, BOD, COD, TSS, TDS, oil and grease, phenols, cyanide, ammonia, nutrients, metals and toxicity.",
              "Two laboratory numbers do the heavy lifting. BOD, the five-day 20 deg C biochemical demand, measures what microbes will eat; COD, the dichromate demand in two hot hours, measures nearly everything oxidisable - so COD equals or exceeds BOD, and their ratio diagnoses treatability: 0.4-0.8 marks readily biodegradable waste, below about 0.3 signals refractory organics needing chemical or advanced steps. Sampling deserves equal care: grab samples catch spills and batch dumps, but 24-hour flow-proportional composites - several, spanning the production cycle - are what a design is built on. Loads in kg/day, not concentrations alone, size the plant.",
              "Toxicity reshapes the flowsheet. Dissolved copper and chromium at even a few mg/L poison biological systems, so metal-bearing streams are split off and pretreated before mixing; concentrated first-rinse baths are segregated from dilute rinses, and stormwater gets its own drains. India's CPCB sets sector-specific standards - for tanneries, distilleries, pulp mills, dyeing - on top of the general standards, and pushes water-intensive sectors toward zero liquid discharge. The treatability matrix below is the first slide of every flowsheet meeting: biodegradability against toxicity routes each stream to biology, chemistry or segregation.",
            ],
            bullets: [
              "Strength extremes: distillery spent wash BOD 40,000-70,000 mg/L; tannery brings Cr, sulphide and TDS; plating brings Cr, Ni, Zn and cyanide.",
              "BOD: 5-day, 20 deg C, biological; COD: dichromate, 2 h, near-total; COD is always at least BOD.",
              "BOD/COD of 0.4-0.8 means biodegradable; below about 0.3 means refractory, needing chemical or advanced oxidation steps.",
              "Sampling: flow-proportional 24-hour composites across production cycles; grab samples only for spills and batches.",
              "Design on loads (kg/day); toxic metal streams segregated and pretreated before the biological stage.",
            ],
            table: {
              caption: "Signature pollutants by industry (typical ranges, mg/L unless noted).",
              headers: ["Industry", "Signature pollutants", "Typical BOD"],
              rows: [
                ["Distillery (spent wash)", "extreme organics, colour, potassium", "40,000-70,000"],
                ["Tannery", "chromium, sulphide, TDS, pH swings", "1,000-2,000"],
                ["Textile dyeing", "colour, refractory COD, salts", "200-800"],
                ["Dairy", "readily biodegradable organics, fats", "1,500-3,000"],
                ["Electroplating", "Cr(VI), Ni, Zn, Cd, cyanide", "low (toxic, not organic)"],
                ["Pulp and paper", "lignin, fibres, chlorinated organics", "1,000-3,000"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Treatability matrix: routing the stream",
              caption: "Biodegradability against toxicity - the first decision of any flowsheet.",
              axes: { x: "BOD/COD ratio: high (left) versus low (right)", y: "Toxicity: low (top) versus high (bottom)" },
              quadrants: [
                { label: "Conventional biology", note: "ASP, UASB - dairy, pulp" },
                { label: "Chemical and advanced", note: "coagulation, AOP, carbon - dye house" },
                { label: "Pretreat, then biology", note: "dilute and acclimate - phenolic streams" },
                { label: "Segregate and recover", note: "metals precipitation, ZLD - plating" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "BOD versus COD - definitions, test conditions, values, and the significance of the ratio - is one of the most repeated questions in this paper. Learn the numbers 0.4-0.8 and 0.3 and what each means for the flowsheet.",
            },
            keyTerms: [
              { term: "COD", definition: "Chemical oxygen demand: the oxygen equivalent of matter oxidised by hot dichromate; measures nearly all organics in two hours." },
              { term: "BOD/COD ratio", definition: "Biodegradable-fraction indicator: 0.4-0.8 means readily biodegradable, below about 0.3 refractory." },
              { term: "Composite sample", definition: "A sample built from portions collected over time, ideally proportional to flow, representing the average waste." },
            ],
            examQuestions: [
              {
                q: "Distinguish between BOD and COD, explain the significance of the BOD/COD ratio, and outline the sampling programme needed to characterise an industrial effluent.",
                marks: 7,
                outline: [
                  "BOD: 5-day, 20 deg C, microbial oxygen demand; measures biodegradable matter.",
                  "COD: dichromate reflux, two hours; measures almost all oxidisable matter.",
                  "COD is always at least BOD; a ratio of 0.4-0.8 marks biodegradable waste.",
                  "Ratio below 0.3: refractory - coagulation, advanced oxidation or adsorption needed.",
                  "Sampling: grab for batches and spills; composite for design.",
                  "Composite: flow-proportional, 24 hours, repeated across production cycles.",
                  "Report as loads (kg/day) and characterise metals, phenols, cyanide and TDS.",
                ],
              },
              {
                q: "Why must industrial effluent samples be composited rather than grabbed for design purposes?",
                marks: 2,
              },
              {
                q: "Name the characteristic pollutants of tannery and electroplating effluents.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Equalization, neutralization and oil separation",
            body: [
              "Industrial effluent never arrives steady: batch dumps, shift cleanouts and rinse cycles swing flow and concentration through the day. An equalization tank - a stirred, sometimes aerated, holding basin sized for roughly 4-12 hours of average flow - absorbs those swings so downstream units see nearly constant flow, pH and load. Biological reactors, coagulant doses and membranes all fail on shock, so equalization buys the stability everything else assumes; it also pre-aerates and pre-mixes segregated streams and doubles as emergency dump volume during spills.",
              "Neutralisation comes next, because biology lives between pH 6.5 and 8.5 and precipitation chemistry demands specific windows. Acid wastes meet lime - cheapest, though it makes a calcium sludge - or caustic soda when sludge is unacceptable; alkaline wastes are dosed with sulphuric acid; limestone beds polish mildly acidic flows; and where one plant's acid meets another's alkali, mutual neutralisation is free. Control is a feedback loop - pH probe, dosing pump, mix tank, well-mixed reaction zone - plus the stoichiometry worked per cubic metre, as in the code example below.",
              "Oil and grease ride in three forms. Free oil floats and yields to gravity: the API separator, a long quiet channel designed by Stokes' law, removes droplets above about 0.15 mm at refinery scale, and coalescing plate packs shorten it. Emulsified oil needs chemistry - de-emulsifiers, coagulants or a pH swing break the droplet films - then dissolved air flotation lifts the floc with micro-bubbles down to 10-20 mg/L residual. Dissolved oil simply joins the organic load for biology or carbon. The classic refinery train runs API, then CPI, then DAF, then biology.",
            ],
            bullets: [
              "Equalization: 4-12 h stirred storage damping flow, load and pH swings; every downstream unit depends on it.",
              "Neutralisation agents: lime (cheap, sludge), caustic (no sludge, costly), limestone beds (mild acid); mutual acid-alkali blending where streams allow.",
              "API separator: gravity removal of free oil droplets above about 0.15 mm, designed from Stokes' law.",
              "DAF: chemical de-emulsification then micro-bubble flotation down to 10-20 mg/L residuals.",
              "Refinery order: API, then CPI or DAF, then biological - free oil first, emulsified second, dissolved with the organics.",
            ],
            codeExample: {
              language: "python",
              caption: "Stoichiometric lime demand for a pH 2.5 rinse stream at 60 m3/day.",
              code: `# Lime dose to neutralise an acid rinse stream
H = 10 ** (-2.5)        # pH 2.5 -> mol/L of acidity
Q = 60.0                # m3/day
MW_lime = 74.0          # Ca(OH)2, g/mol; gives 2 mol OH- per mol

pure_kg = H / 2.0 * MW_lime * Q * 1000.0 / 1000.0
print(f"pure lime = {pure_kg:.1f} kg/day")        # 7.0 kg/day

purity = 0.85
print(f"commercial lime = {pure_kg / purity:.1f} kg/day")   # 8.3 kg/day`,
            },
            diagram: {
              kind: "pipeline",
              title: "The pretreatment train before biology",
              caption: "Each stage conditions the next - the order is not negotiable.",
              stages: [
                { label: "Flow equalization", note: "4-12 h damping" },
                { label: "pH neutralisation", note: "lime dosed to 6.5-8.5" },
                { label: "Oil and grease removal", note: "API / CPI / DAF" },
                { label: "Metals pretreatment", note: "precipitation, cyanide oxidation" },
                { label: "Biological treatment", note: "stable feed, stable biology" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Order matters and examiners test it: equalize before neutralising (so the dose stabilises), remove oil before biology (or the biomass smothers), precipitate metals before the biological stage (or they poison it). One mark per correct ordering argument.",
            },
            keyTerms: [
              { term: "Equalization tank", definition: "A stirred holding basin that flattens flow and concentration fluctuations, typically 4-12 hours of average flow." },
              { term: "API separator", definition: "A gravity channel designed by Stokes' law that skims free oil droplets larger than about 0.15 mm from refinery effluent." },
              { term: "Dissolved air flotation", definition: "Clarification by micro-bubbles released from pressurised recycle water, lifting chemically de-emulsified oil and floc." },
            ],
            examQuestions: [
              {
                q: "Explain the purpose and design considerations of equalization and neutralization in an industrial effluent treatment plant, and describe the methods of oil removal.",
                marks: 7,
                outline: [
                  "Why equalize: shock loads destroy biology and chemistry; stabilise flow, pH and load.",
                  "Design: 4-12 h retention from the diurnal pattern; aeration and mixing; emergency volume.",
                  "Neutralisation: agents - lime, caustic, limestone, mutual - with pros and cons.",
                  "Control loop: pH probe, dosing pump, reaction and mix zones; stoichiometric calculation.",
                  "Oil: free (API by Stokes), emulsified (de-emulsify then DAF), dissolved (biology or carbon).",
                  "API versus CPI: coalescing plates shorten the separator.",
                  "Refinery train order: API, CPI, DAF, biological.",
                ],
              },
              {
                q: "Distinguish free, emulsified and dissolved oil with their removal routes.",
                marks: 2,
              },
              {
                q: "Why is neutralisation performed before biological treatment?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Heavy metal removal",
            body: [
              "Metals do not degrade - they only change address. Chromium rides tannery and plating effluent, nickel and zinc the plate shops, lead the smelters and battery breakers, mercury the chlor-alkali and instrument wastes, cadmium the pigment and plating lines. Discharge limits are correspondingly brutal for inland waters: lead and hexavalent chromium at 0.1 mg/L, mercury at 0.01, cadmium 2, nickel 3, zinc 15. Bioaccumulation made the point historically - mercury at Minamata, cadmium in the itai-itai paddies - and makes metals the first stream every flowsheet segregates.",
              "Hydroxide precipitation is the workhorse: raise pH to 8-11 with lime and metals drop as hydroxides in a clarifier. Two catches shape the exam questions. First, hexavalent chromium will not precipitate usefully - reduce it first to trivalent with sodium bisulphite or sulphur dioxide at pH 2-3, then precipitate the hydroxide near pH 8. Second, zinc and chromium are amphoteric: push pH past about 11 and they redissolve - there is a window, not a plateau. Sulphide precipitation reaches far lower residuals where permits demand it, at the price of H2S risk and finer solids; ion exchange and adsorption polish; reverse osmosis serves the zero-liquid-discharge ambitions of plating and dyeing parks.",
              "Cyanide deserves its own line because it complexes metals and poisons everything: oxidise it first - alkaline chlorination to cyanate and then to nitrogen - before any precipitation is attempted. The settled metal sludge is itself a hazardous waste: thickened, filter-pressed and consigned to an authorised facility, or routed to metal recovery by electrowinning or cementation where volumes justify it. Process selection is simply the gap between concentration and limit: two to five times over, precipitation suffices; an order of magnitude, add ion exchange; total reuse demanded, membranes and evaporators.",
            ],
            bullets: [
              "Metals bioaccumulate and never degrade - Minamata (mercury) and itai-itai (cadmium) are the case names.",
              "Inland limits: Pb and Cr(VI) 0.1 mg/L, Hg 0.01, Cd 2, Ni 3, Zn 15 under the EP Rules Schedule VI.",
              "Hydroxide precipitation at pH 8-11; amphoteric Zn and Cr redissolve above about pH 11 - mind the window.",
              "Cr(VI): reduce at pH 2-3 with bisulphite or SO2 to Cr(III), then precipitate as hydroxide near pH 8.",
              "Cyanide is oxidised first (alkaline chlorination); the sludge is hazardous waste - dewater, secure-landfill or recover.",
            ],
            table: {
              caption: "Routes to the limit for common metals.",
              headers: ["Metal", "Inland limit, mg/L", "Preferred route"],
              rows: [
                ["Chromium (VI)", "0.1", "reduce at pH 2-3, then hydroxide at pH 8"],
                ["Lead", "0.1", "hydroxide at pH 8-9"],
                ["Mercury", "0.01", "sulphide precipitation, ion exchange, carbon"],
                ["Cadmium", "2", "hydroxide or sulphide with carbon polish"],
                ["Nickel", "3", "hydroxide at pH 10-11; ion-exchange polish"],
                ["Zinc", "15", "hydroxide, mindful of amphoteric redissolution"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Plating rinse: will the train make the limit?",
              caption: "The decision points that decide compliance in metal-bearing effluent.",
              start: "Mixed plating rinse carrying Cr(VI), Zn and cyanide",
              branches: [
                {
                  label: "Cyanide oxidised, Cr(VI) reduced at pH 2.5, then lime to pH 8",
                  outcome: "all metals meet their limits",
                  good: true,
                },
                {
                  label: "Direct lime dosing of the chromate rinse",
                  outcome: "Cr(VI) stays dissolved; the limit is breached",
                  good: false,
                },
                {
                  label: "pH pushed to 12 to catch everything at once",
                  outcome: "zinc and chromium redissolve; limits breached",
                  good: false,
                },
                {
                  label: "Hydroxide sludge filter-pressed to an authorised handler",
                  outcome: "compliant closure of the metal loop",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The Cr(VI) two-step is the most repeated metal question: reduce at low pH, precipitate at pH 8 - and never lime a chromate stream directly. Write both pH values; they are the marks.",
            },
            keyTerms: [
              { term: "Hydroxide precipitation", definition: "Raising pH to 8-11 with lime so dissolved metals settle as hydroxide sludge in a clarifier." },
              { term: "Amphoteric metal", definition: "A metal (zinc, chromium) whose hydroxide redissolves in strongly alkaline conditions, closing the useful pH window." },
              { term: "Ion exchange", definition: "Swap of dissolved ions onto resin sites; polishes metal residuals far below precipitation limits, with a regenerant to manage." },
            ],
            examQuestions: [
              {
                q: "Compare the methods for removing dissolved heavy metals from industrial wastewater, and explain the special treatment required for hexavalent chromium and cyanide.",
                marks: 7,
                outline: [
                  "Why special: non-degradable, bioaccumulative, strict limits (Pb 0.1, Hg 0.01 mg/L).",
                  "Hydroxide precipitation: chemistry, pH window 8-11, clarifier, sludge.",
                  "Amphoteric behaviour of Zn and Cr: redissolution above about pH 11.",
                  "Sulphide precipitation: lower residuals, H2S handling, finer solids.",
                  "Ion exchange and adsorption: polishing below precipitation limits.",
                  "Cr(VI) train: reduce at pH 2-3, precipitate at pH 8; cyanide: alkaline chlorination first.",
                  "Sludge: hazardous waste - dewater, secure disposal or metal recovery.",
                ],
              },
              {
                q: "Why must hexavalent chromium be reduced before precipitation?",
                marks: 2,
              },
              {
                q: "Give two merits and two demerits of ion exchange for metal removal.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Biological treatment of industrial wastes",
            body: [
              "Aerobic systems - activated sludge and its variants, trickling filters, membrane bioreactors - oxidise organics to biomass and carbon dioxide within hours, tolerating BOD up to a few thousand mg/L; extended aeration suits slowly biodegradable loads, high-rate variants strong ones. Industrial feeds, though, are usually nutrient-poor: microbes want roughly a 100:5:1 ratio of BOD to nitrogen to phosphorus, and dairy, pulp and chemical wastes often starve on nitrogen, so urea and DAP are dosed like fertiliser. Toxic shocks, salinity swings and sludge bulking complete the operator's triad of worries; equalization and pretreatment are the prophylactics.",
              "Above a few thousand mg/L of COD the economics flip to anaerobic. The UASB reactor - upflow anaerobic sludge blanket - pushes effluent upward through a blanket of granular microbes at 8-12 hours' retention, loading 8-16 kg COD per cubic metre per day; gas lifts through a gas-liquid-solid separator while treated water overflows and the granules sink back. The prize is energy: 0.35 m3 of methane per kg of COD destroyed, so a distillery digesting spent wash exports biogas instead of buying blower power, and a small aerobic stage polishes the remaining few hundred mg/L downstream. Anaerobic lagoons and hybrid reactors cover the low-technology end.",
              "Refractory and toxic fractions still pass. Textile colour, lignin and spent-wash melanoidins survive conventional biology, so trains continue with coagulation, activated carbon, advanced oxidation or membrane steps; phenol and cyanide demand acclimatised cultures or chemical pretreatment. The selection logic is the exam skeleton: strength (COD above a few thousand favours anaerobic), temperature (warm wastes suit digestion), energy (the biogas credit), sludge yield (anaerobic makes far less), space, and always a polishing stage before the standards of the next section. The worked example below is the biogas numerical.",
            ],
            bullets: [
              "Aerobic plants (ASP, trickling filter, MBR) suit moderate strength; they need BOD:N:P near 100:5:1, so dose urea and DAP on industrial feeds.",
              "Anaerobic wins above a few thousand mg/L COD: energy-positive, low sludge yield, warm-feed friendly.",
              "UASB: upflow through a granular blanket, 8-12 h retention, 8-16 kg COD per m3 per day, GLS separator on top.",
              "Energy credit: 0.35 m3 methane per kg COD destroyed - distillery spent wash becomes biogas.",
              "Refractory residuals (colour, lignin, melanoidins) need coagulation, carbon, advanced oxidation or membranes after biology.",
            ],
            codeExample: {
              language: "python",
              caption: "From COD destroyed to methane, biogas and continuous power.",
              code: `# Biogas and power from an anaerobic plant
COD_in, removal = 12_000.0, 0.85     # kg/day, fraction removed

cod_removed = COD_in * removal        # 10,200 kg/day
ch4 = 0.35 * cod_removed              # m3 methane per day
biogas = ch4 / 0.65                   # at 65% methane

print(f"methane = {ch4:,.0f} m3/day")
print(f"biogas  = {biogas:,.0f} m3/day")

kwh_thermal = ch4 * 10.0              # about 10 kWh per m3 CH4
kw_elec = kwh_thermal * 0.38 / 24.0   # 38% conversion, continuous
print(f"electric potential = {kw_elec:.0f} kW")   # about 565 kW`,
            },
            diagram: {
              kind: "layers",
              title: "Inside a UASB reactor",
              caption: "One vessel, five zones - sketch it top to bottom.",
              layers: [
                { label: "Gas collection dome", note: "biogas off-take" },
                { label: "GLS separator", note: "gas, liquid and solids part ways" },
                { label: "Settling zone", note: "granules return to the blanket" },
                { label: "Sludge blanket", note: "granular biomass, main conversion" },
                { label: "Distribution zone", note: "influent spread at the base" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The aerobic-versus-anaerobic 7-marker wants four contrasts: loading and strength, energy balance (blower cost versus biogas credit), sludge yield, and start-up sensitivity. Close with 'anaerobic then aerobic polishing' as the standard strong-waste train.",
            },
            keyTerms: [
              { term: "UASB", definition: "Upflow anaerobic sludge blanket reactor: influent rises through granular biomass, with a GLS separator returning solids and collecting biogas." },
              { term: "Granular sludge", definition: "Dense, settleable microbial aggregates in UASB and EGSB reactors that resist washout at high loading." },
              { term: "Nutrient balance", definition: "The BOD:N:P ratio (about 100:5:1) that must be supplemented with urea and DAP on nutrient-poor industrial feeds." },
            ],
            examQuestions: [
              {
                q: "Compare aerobic and anaerobic biological treatment for industrial wastewater, and describe the working of a UASB reactor with a sketch.",
                marks: 7,
                outline: [
                  "Aerobic: oxygen-driven, hours of detention, moderate strength, high sludge, blower energy.",
                  "Anaerobic: no oxygen, high loading per cubic metre, biogas, low sludge yield.",
                  "Decision driver: COD above a few thousand mg/L favours anaerobic.",
                  "UASB sketch: inlet distribution, blanket, GLS separator, gas dome, effluent weir.",
                  "Granules: dense settleable biomass; 8-12 h retention, 8-16 kg COD/m3/day.",
                  "Energy: 0.35 m3 methane per kg COD removed; distillery worked example.",
                  "Polishing: remaining BOD and COD to an aerobic or chemical stage.",
                ],
              },
              {
                q: "Why are urea and DAP added to industrial activated-sludge plants?",
                marks: 2,
              },
              {
                q: "Draw a UASB reactor and label its parts.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "CETP and CPCB discharge standards",
            body: [
              "A common effluent treatment plant lets a cluster of small units - dyeing and bleaching houses, electroplaters, tanneries - share one treatment works, one consent and one operating crew that none could afford alone. Classic estates sit at Jajmau (Kanpur) for tanneries, Tirupur for knitwear dyeing, Ankleshwar and Patancheru for chemicals. The feed decides the fate: homogeneous clusters behave like one large industry, while heterogeneous estates brew incompatible streams - chromium meeting sulphide, acids meeting cyanide - and shock each other daily unless member units pre-segregate and the CETP equalizes hard.",
              "India's standards hang off Schedule VI of the Environment (Protection) Rules: general limits by receiving body. For inland surface waters: pH 5.5-9.0, BOD 30, TSS 100, oil and grease 10, phenols 1 mg/L; for discharge into public sewers the same parameters relax - BOD 350, TSS 600, oil and grease 20, phenols 5 - because the municipal STP treats again downstream. Sector-specific standards, the 'minimum national standards', tighten the screws for tanneries, distilleries, pulp mills and thermal plants; consents under the Water Act embed whichever number binds, and online continuous effluent monitoring systems now report to the boards in real time.",
              "The frontier is zero liquid discharge: Tamil Nadu's Tirupur dyeing cluster was ordered to recycle every drop through membrane trains and evaporators, and distilleries must compost or concentrate their spent wash rather than shed it. CETP economics remain fragile - user charges, hidden dilution and finger-pointing among members - so boards audit inlet meters per member unit. For the exam: the CETP rationale, advantages and problems; then recite the Schedule VI table; then explain why sewer standards are looser - that triple answers most of what Unit IV asks.",
            ],
            bullets: [
              "CETP: shared treatment, consent and O&M for SME clusters - Jajmau, Tirupur, Ankleshwar and Patancheru are the case names.",
              "Heterogeneous clusters risk incompatible shocks (chromium with sulphide, acid with cyanide) - member-level segregation and strong equalization are survival.",
              "Schedule VI inland limits: pH 5.5-9.0, BOD 30, TSS 100, oil and grease 10, phenol 1 mg/L; sewers relax to BOD 350, TSS 600, O&G 20, phenol 5.",
              "Sector-specific minimum national standards override where stricter - tannery, distillery, pulp, thermal.",
              "OCEMS telemetry and zero-liquid-discharge mandates (Tirupur dyeing, distillery spent wash) are the enforcement frontier.",
            ],
            table: {
              caption: "General discharge standards, EP Rules Schedule VI (mg/L except pH).",
              headers: ["Parameter", "Inland surface water", "Public sewer"],
              rows: [
                ["pH", "5.5 - 9.0", "5.5 - 9.0"],
                ["BOD (5-day)", "30", "350"],
                ["TSS", "100", "600"],
                ["Oil and grease", "10", "20"],
                ["Phenolic compounds", "1", "5"],
                ["Hexavalent chromium", "0.1", "2.0"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Individual ETP versus CETP",
              caption: "Two organisational answers to the same treatment duty.",
              left: {
                heading: "Individual ETP",
                items: [
                  "Full capital and O&M per unit",
                  "Suits large, uniform-flow factories",
                  "Unit controls and owns its stream",
                  "Accountability simple: one consent",
                  "Duplicates expertise across units",
                ],
              },
              right: {
                heading: "CETP",
                items: [
                  "Shared capital, crew and laboratory",
                  "Built for small-industry clusters",
                  "Mixed streams: shock-load risk",
                  "One metered inlet per member",
                  "User-charge disputes and dilution games",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Why are sewer standards more lenient than stream standards?' is a perennial 3-marker: the municipal STP provides further treatment before the receiving water - hence BOD 350 rather than 30 - but the STP itself must still meet 30 at its own outfall.",
            },
            keyTerms: [
              { term: "CETP", definition: "Common effluent treatment plant serving a cluster of small industries with shared treatment, consent and operations." },
              { term: "General standards", definition: "Schedule VI of the EP Rules: parameter limits by receiving body - inland surface water, public sewer, land, sea." },
              { term: "OCEMS", definition: "Online continuous effluent monitoring system streaming treated-effluent quality to the regulator in real time." },
            ],
            examQuestions: [
              {
                q: "What is a CETP? Explain its rationale, advantages and problems, and state the general standards for discharge of industrial effluent into inland surface waters and public sewers.",
                marks: 7,
                outline: [
                  "Definition: shared plant for SME clusters; name the Indian examples.",
                  "Rationale: economies of scale, shared expertise, single monitoring point.",
                  "Advantages: affordability, professional O&M, easier regulation.",
                  "Problems: incompatible streams, shock loads, cost recovery, dilution gaming.",
                  "Remedies: member pretreatment, metered inlets, strong equalization.",
                  "Schedule VI inland: pH 5.5-9.0, BOD 30, TSS 100, O&G 10, phenol 1.",
                  "Sewer relaxations: BOD 350, TSS 600, O&G 20, phenol 5 - the STP treats again.",
                ],
              },
              {
                q: "Why is BOD limited to 350 mg/L for sewers but 30 mg/L for streams?",
                marks: 2,
              },
              {
                q: "What is zero liquid discharge, and which sectors face it?",
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
      title: "Legislation and Audit",
      summary:
        "The legal spine of the subject: the Water Act 1974 and the Air Act 1981 with their boards and consents, the umbrella Environment (Protection) Act 1986 and its family of rules, the EIA and audit processes that police projects, and the National Green Tribunal applying absolute liability, polluter pays and precaution through the landmark cases.",
      chapter: {
        number: "05",
        title: "Environmental Legislation and Audit",
        intro:
          "Unit V is the statute book. Section 5.1 takes the Water Act's boards, consents and closure powers; 5.2 mirrors them in the Air Act with its control areas and 1987 amendment; 5.3 climbs the EP Act umbrella to the rules that govern Units I-IV; 5.4 brackets a project's life with EIA before and audit after; and 5.5 hands the whole system to the NGT and the cases that named the principles.",
        inOneBreath:
          "The Water Act 1974 created the CPCB and SPCBs with consents under Sections 25-26 and closure powers under 33A; the Air Act 1981 declared control areas, demands consent under Section 21 and since 1987 counts noise among pollutants; the EP Act 1986, born of Bhopal under Article 253, is the umbrella whose Section 7 prohibits exceedance and whose Section 15 punishes with five years or a lakh plus daily fines; EIA (notification 2006) predicts impacts in stages from screening to clearance while environmental audit verifies performance afterwards; and the NGT, under its 2010 Act, applies absolute liability, polluter pays and precaution from the oleum, Bichhri, Vellore and Taj Trapezium cases.",
        sections: [
          {
            number: "5.1",
            title: "The Water (Prevention and Control of Pollution) Act, 1974",
            body: [
              "The Water Act was India's first modern pollution statute, passed in 1974 under Article 252 - Parliament legislating a state subject at the states' request - because rivers refused to respect boundaries. Its object is the prevention and control of water pollution and the maintaining or restoring of the wholesomeness of water, and it created the machinery still used today: the Central Board (CPCB) for national standards, basin studies and coordination, and a State Board in every state for consents, inspections and enforcement. The 1988 amendment sharpened penalties and added closure powers.",
              "The operational core is the consent system. Section 24 prohibits knowingly letting poisonous, noxious or polluting matter into any stream, well or sewer; Sections 25 and 26 require consent to establish before construction and consent to operate before discharge, and consents carry conditions on standards, sampling points and returns. Boards wield sampling powers (Section 21), entry and inspection (Section 23), emergency clean-up powers (Section 32 - remove the pollutant and recover costs) and court applications to restrain apprehended pollution (Section 33); the 1988 amendment's Section 33A lets a board direct closure, or cut the electricity and water, of a defaulter. Penalties under Section 41 run from one and a half to six years with fine, with daily fines for continuing contravention.",
              "Practice turns on machinery more than philosophy. Industries are categorised red, orange, green and white by pollution potential, fixing consent validity and fees; applications flow through the boards' online systems, with consent to establish granted before construction and consent to operate renewed on performance. Compliance today is data-driven: flow meters and online effluent quality feed board dashboards, and a violation trips show-cause, closure directions and prosecution in that order. The Act's limits - water being a state subject, overlapping with the EP Act, uneven board capacity - set up the later statutes of this unit.",
            ],
            bullets: [
              "Enacted 1974 under Article 252 (state request) - the first of the modern pollution statutes; amended 1988.",
              "Institutions: CPCB (standards, basin studies, coordination) and SPCBs (consents, inspection, enforcement).",
              "Consent system: establish (S.25) and operate (S.26); conditions carry standards and sampling obligations.",
              "Board powers: sampling S.21, entry and inspection S.23, emergency S.32, restraining pollution S.33, closure directions S.33A.",
              "Penalties S.41: one and a half to six years with fine, plus daily fines while the contravention continues.",
            ],
            table: {
              caption: "The Water Act's working sections.",
              headers: ["Section", "Power", "Who uses it"],
              rows: [
                ["24", "prohibition on polluting matter into streams, wells, sewers", "basis of prosecution"],
                ["25 - 26", "consent to establish and to operate discharges", "every industry"],
                ["21", "taking samples of water or effluent", "board inspector"],
                ["23", "entry and inspection of premises", "board inspector"],
                ["32", "emergency measures: remove pollutant, recover cost", "board"],
                ["33 / 33A", "restrain apprehended pollution; closure and utility cuts", "board and court"],
                ["41", "penalties: 1.5 to 6 years plus fines", "court"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The consent-and-enforcement cycle of the Water Act",
              caption: "From application to closure - the path every Indian factory walks.",
              steps: [
                { label: "Apply for consents", note: "establish before construction" },
                { label: "Board scrutiny", note: "categorisation, site, process" },
                { label: "Consent with conditions", note: "standards, sampling point, returns" },
                { label: "Continuous monitoring", note: "flow and OCEMS data to board" },
                { label: "Show cause on violation", note: "opportunity to reply" },
                { label: "Directions or prosecution", note: "S.33A closure or S.41 penalty" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Constitution and functions of the CPCB or SPCB is the evergreen Water Act question: advisory, standard-setting, research, training, basin studies, information and coordination - written as a list, with the key sections named beside them.",
            },
            keyTerms: [
              { term: "Consent to establish and operate", definition: "The twin Water Act permissions: establish before construction, operate before discharge, each carrying enforceable conditions." },
              { term: "State Pollution Control Board", definition: "The state-level regulator under the Water Act granting consents, inspecting premises, sampling effluents and enforcing standards." },
              { term: "Section 33A directions", definition: "The post-1988 power of a board to direct closure, stoppage or the cutting of electricity and water to a polluting unit." },
            ],
            examQuestions: [
              {
                q: "Explain the salient provisions of the Water (Prevention and Control of Pollution) Act 1974, including the powers and functions of the Central and State Boards.",
                marks: 7,
                outline: [
                  "Background: Article 252 route, objects of the Act, 1988 amendment.",
                  "Institutions: constitution of the CPCB and the SPCBs.",
                  "Functions of the CPCB: standards, basin programmes, coordination, research, training.",
                  "Functions of the SPCB: consents, inspection, sampling, enforcement.",
                  "Prohibitions: S.24; the consent machinery of S.25-26.",
                  "Enforcement: S.21 sampling, S.23 entry, S.32 emergency, S.33 and 33A directions.",
                  "Penalties S.41 and the red-orange-green categorisation in practice.",
                ],
              },
              {
                q: "State the purpose of Section 33A of the Water Act.",
                marks: 2,
              },
              {
                q: "List the functions of the Central Pollution Control Board.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "The Air (Prevention and Control of Pollution) Act, 1981",
            body: [
              "The Air Act arrived in 1981 to honour the commitments India made at the 1972 Stockholm Conference, again legislated through the states. It reuses the Water Act machinery - the same boards wear the second hat - but adds air-specific instruments. States declare air pollution control areas (Section 19); within them no industrial plant may be constructed or operated without the board's consent (Section 21), and no emission may exceed the notified standards (Section 22). The 1987 amendment modernised the statute: noise entered the definition of 'air pollutant', penalties hardened, and Section 31A gave boards the power to direct closure, stoppage or regulation of electricity and water.",
              "The Act also reaches mobile sources: Section 20 lets boards test vehicle emissions and instruct the registering authority, which pairs with the Central Motor Vehicle Rules' limits. Sampling of emissions runs under Section 25 with the analysis reported under Section 26; entry and inspection run under Section 23. Consent practice mirrors the Water Act - establish, then operate, with conditions on stack heights, emission standards and monitoring - and most boards now issue both consents from a single application, which is why factories speak of the two-in-one consent.",
              "Where the two statutes differ is the exam's favourite comparison: the Air Act's jurisdiction begins with a declared control area rather than everywhere at once; noise rides inside it as a pollutant; and vehicular pollution - outside the Water Act's world entirely - sits squarely inside it. Penalties under Section 37 run up to six years for operating without consent or exceeding standards. Enforcement landmarks came through litigation: the Taj Trapezium case forced industries around Agra onto cleaner fuels, and the Supreme Court's orders on Delhi's air repeatedly invoked this Act's machinery. The fork below draws a consent decision.",
            ],
            bullets: [
              "Stockholm 1972 commitment; the Water Act boards double as air boards; amended 1987.",
              "Control areas declared under S.19; consent to construct and operate under S.21; emission limits under S.22.",
              "1987 additions: noise is an air pollutant; S.31A closure and utility-cut directions; stiffer penalties.",
              "Vehicular arm: S.20 testing and instructions to the motor vehicles authority.",
              "Penalties under S.37 up to six years for consent-less operation or exceedance.",
            ],
            table: {
              caption: "Water Act versus Air Act - the comparison examiners ask for.",
              headers: ["Feature", "Water Act 1974", "Air Act 1981"],
              rows: [
                ["Trigger of jurisdiction", "any stream, well or sewer", "declared control areas (S.19)"],
                ["Consent sections", "25 - 26", "21"],
                ["Core prohibition", "polluting matter into water (S.24)", "emissions beyond standards (S.22)"],
                ["Closure directions", "S.33A (1988)", "S.31A (1987)"],
                ["Mobile sources", "not covered", "S.20 vehicle testing"],
                ["Noise", "not covered", "included since 1987"],
                ["Penalty section", "41", "37"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Consent to operate in a control area",
              caption: "How an air consent application resolves.",
              start: "Application for consent to operate an industrial plant",
              branches: [
                {
                  label: "Emission details accepted and stack norms met",
                  outcome: "consent granted with monitoring conditions",
                  good: true,
                },
                {
                  label: "Plant commissioned without consent",
                  outcome: "offence under S.21 read with S.37",
                  good: false,
                },
                {
                  label: "Stack sampling shows exceedance",
                  outcome: "S.31A directions, possibly closure",
                  good: false,
                },
                {
                  label: "Control equipment upgraded and re-sampled clean",
                  outcome: "consent restored or renewed",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Two 1987 facts carry easy marks: noise became an air pollutant, and Section 31A brought closure directions to match the Water Act's 33A. A short question on either is answered in two lines - write both dates and section numbers.",
            },
            keyTerms: [
              { term: "Air pollution control area", definition: "An area declared by the state government under Section 19, within which the Air Act's consent and emission rules operate." },
              { term: "Section 31A directions", definition: "The Air Act's 1987 power of boards to direct closure, stoppage or regulation of electricity, water or other services." },
              { term: "Continuous emission monitoring", definition: "Instrumented stack monitoring (CEMS) that reports particulate and gas concentrations to the regulator continuously." },
            ],
            examQuestions: [
              {
                q: "State the salient provisions of the Air (Prevention and Control of Pollution) Act 1981 and the changes made by the 1987 amendment. How does it differ from the Water Act?",
                marks: 7,
                outline: [
                  "Origin: Stockholm commitment, 1981, state-subject route; the same boards act as air boards.",
                  "S.19 control areas; S.21 consent to construct and operate; S.22 emission standards.",
                  "Enforcement: S.23 entry, S.25 sampling, S.26 analysis reports.",
                  "1987 amendment: noise as a pollutant, S.31A directions, stiffer penalties.",
                  "Vehicular arm: S.20 testing and instructions to the registering authority.",
                  "Differences from the Water Act: control-area trigger, noise, mobile sources, penalty sections.",
                  "Practice: Taj Trapezium and the Delhi air litigation as enforcement landmarks.",
                ],
              },
              {
                q: "Since when, and by which amendment, is noise treated as an air pollutant in India?",
                marks: 2,
              },
              {
                q: "State three differences between the Air Act and the Water Act.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "The Environment (Protection) Act, 1986",
            body: [
              "The Bhopal gas disaster of December 1984 exposed the two earlier acts' gaps - slow, state-by-state enforcement and no umbrella for hazardous substances - and Parliament answered in 1986 with the Environment (Protection) Act, passed under Article 253 to implement the Stockholm decisions. It is an umbrella and a backstop: 'environment' is defined broadly (air, water, land and their interrelationship with humans, other creatures, plants and property), the Centre may act where the older statutes are silent, and everything from the EIA notification to the waste rules hangs off its rule-making and standard-setting powers.",
              "The working sections are few and sharp. Section 3 gives the Centre sweeping power to plan, coordinate and set standards; Section 5 lets it issue directions that bind any person, officer or authority; Sections 6 and 8 authorise the rules and the hazardous-substances regime. Section 7 is the general prohibition - no pollutant beyond standards into the environment - and Section 15 the penalty: up to five years' imprisonment or one lakh rupees, with five thousand a day for continuing offences; Section 19 importantly lets a citizen approach the court after sixty days' notice, the seed of Indian environmental public-interest litigation.",
              "Everything the earlier units of this subject regulated - noise, solid waste, e-waste, hazardous waste, biomedical waste, plastic, construction debris, coastal zones, environmental clearance - is subordinate legislation under this one Act, which is why examiners call it the most powerful and the most general of the statutes. Its breadth is also its vice: delegated rules do the real work, enforcement still depends on the same boards, and since 2011 the National Green Tribunal reviews its violations. Answer 'umbrella act' questions with Article 253, Bhopal, Section 7 and the rules list - the layers diagram below is that answer drawn.",
            ],
            bullets: [
              "The post-Bhopal statute of 1986 under Article 253 (Stockholm implementation) - umbrella over the Water and Air Acts.",
              "Section 3: the Centre's power to set standards and restrict activities; Section 5: directions binding on all.",
              "Section 7: no discharge of pollutants beyond standards - the general prohibition.",
              "Section 15: up to five years or one lakh rupees, plus five thousand a day for continuing offences; Section 19 citizen suits after sixty days' notice.",
              "All modern rules - waste, e-waste, noise, the EIA notification, coastal zones - are delegated legislation under this Act.",
            ],
            table: {
              caption: "The rule family under the EP Act (as amended).",
              headers: ["Instrument", "Year", "Domain"],
              rows: [
                ["Environment (Protection) Rules", "1986", "general standards, Schedule VI limits"],
                ["Noise Pollution (Regulation and Control) Rules", "2000", "zone-wise noise limits"],
                ["Hazardous and Other Wastes Rules", "2016", "hazardous waste management"],
                ["Bio-Medical Waste Management Rules", "2016", "healthcare waste"],
                ["Solid Waste Management Rules", "2016", "municipal solid waste"],
                ["E-Waste (Management) Rules", "2016", "e-waste and EPR"],
                ["EIA Notification", "2006", "environmental clearance process"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "One act, many instruments",
              caption: "The EP Act umbrella - each layer derived from the one above.",
              layers: [
                { label: "Environment (Protection) Act 1986", note: "Article 253 umbrella" },
                { label: "EP Rules 1986 with Schedule VI", note: "general standards" },
                { label: "Media and waste rules", note: "noise, solid, e-waste, hazardous, biomedical" },
                { label: "Activity notifications", note: "EIA 2006, coastal zones" },
                { label: "Enforcement layer", note: "boards, S.5 directions, NGT review" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Why is the EP Act called umbrella legislation?' is a guaranteed short answer: the Bhopal trigger, Article 253 power, coverage of all media, gap-filling over the 1974 and 1981 acts, and the family of delegated rules. Five points, five marks.",
            },
            keyTerms: [
              { term: "Umbrella act", definition: "A statute covering a whole field broadly so that gaps and new threats fall within it - the EP Act 1986 for Indian environment law." },
              { term: "Article 253", definition: "The constitutional power under which Parliament legislates to implement international agreements - the EP Act's legislative base." },
              { term: "Section 15 (EPA)", definition: "The penalty provision: up to five years or one lakh rupees, plus daily fines of five thousand for continuing contravention." },
            ],
            examQuestions: [
              {
                q: "Explain the circumstances that led to the enactment of the Environment (Protection) Act 1986 and describe its salient provisions.",
                marks: 7,
                outline: [
                  "Trigger: Bhopal 1984 exposed the enforcement gaps of the 1974 and 1981 acts.",
                  "Basis: Article 253, Stockholm implementation; passed in 1986.",
                  "Breadth: the definition of environment; umbrella over all media.",
                  "Section 3 and Section 5: standard-setting and binding directions.",
                  "Section 7 prohibition and Section 8 hazardous substances.",
                  "Section 15 penalties; Section 19 citizen standing after a sixty-day notice.",
                  "Delegated instruments: the 2016 rule family and the EIA notification 2006.",
                ],
              },
              {
                q: "State the penalty provided under Section 15 of the EP Act.",
                marks: 2,
              },
              {
                q: "Name any six rules or notifications issued under the EP Act 1986.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "EIA and environmental audit",
            body: [
              "Environmental impact assessment is the ex-ante instrument: a systematic study, before clearance, of what a proposed project will do to air, water, land, ecology and people, and what will be done about it. Born under NEPA 1969 in the United States, it entered India through the 1994 notification and now runs under the EIA Notification 2006: Category A projects - large mines, refineries, big dams and thermal stations - are appraised by the central Expert Appraisal Committee, Category B by the state authority, B1 with a full EIA and B2 usually on rapid assessment with conditions. The stages: screening, scoping into Terms of Reference, a three-season baseline, impact prediction, public hearing, appraisal, clearance with conditions, and post-clearance compliance.",
              "Environmental audit is the ex-post twin: a documented, periodic, objective check of an operating unit's performance against its obligations. Since the 1992 environmental audit scheme, Indian industries file an annual environmental statement - water and raw-material balances, emissions, effluents, hazardous waste and compliance - with the State Board. Audits come in flavours: compliance audits against consents and clearance conditions, management and systems audits against ISO 14001's plan-do-check-act cycle, site assessments, and due-diligence audits before transactions. The loop - preparation, checklist-based fieldwork, verified findings, corrective action plans, follow-up - is what turns inspection into management.",
              "The two tools bracket a project's life: EIA predicts and conditions before the first concrete is poured, and audit verifies and corrects once the plant runs, with six-monthly compliance reports on clearance conditions stitching them together. The benefits are practical: early design changes are cheap, liabilities surface before they become prosecutions, and resource accounting often pays for the audit itself. The 2020 draft EIA rules stirred exactly the controversy an exam answer should mention - post-facto clearance and diluted public hearings - before concluding that monitoring strength, not paperwork volume, is the system's real test.",
            ],
            bullets: [
              "EIA: ex-ante prediction of impacts; its Indian home is the EIA Notification 2006 under the EP Act.",
              "Categories: A appraised centrally; B by the state - B1 full study, B2 rapid with conditions.",
              "Stages: screening, scoping and ToR, three-season baseline, impact prediction, public hearing, appraisal, clearance with conditions.",
              "Environmental audit: ex-post, documented and periodic; the annual environmental statement goes to the SPCB under the 1992 scheme.",
              "ISO 14001's plan-do-check-act loop powers management audits; six-monthly compliance reports connect EIA to audit.",
            ],
            table: {
              caption: "EIA versus environmental audit.",
              headers: ["Dimension", "EIA", "Environmental audit"],
              rows: [
                ["Timing", "before clearance (ex-ante)", "during operation (ex-post)"],
                ["Subject", "a proposed project", "an operating facility"],
                ["Legal basis", "EIA Notification 2006", "1992 audit scheme; consent conditions"],
                ["Output", "EIA report, EMP, clearance conditions", "audit statement, findings, action plan"],
                ["Team", "consultant with the proponent", "internal or third-party auditors"],
                ["Follow-up", "six-monthly compliance reports", "corrective actions and the next cycle"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The project life-cycle loop: EIA to audit",
              caption: "Prediction feeds operation; audit feeds correction - one continuous loop.",
              steps: [
                { label: "Screening and scoping", note: "category and Terms of Reference" },
                { label: "Baseline and prediction", note: "three seasons of data" },
                { label: "Public hearing and appraisal", note: "concerns on record" },
                { label: "Clearance with EMP", note: "conditions bind construction and operation" },
                { label: "Operation and monitoring", note: "six-monthly compliance reports" },
                { label: "Audit and corrective action", note: "closes the loop back to the EMP" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Differentiate EIA from environmental audit' is near-certain: answer with a six-row comparison (timing, subject, legal basis, output, team, follow-up) and one sentence on how the six-monthly compliance report links them.",
            },
            keyTerms: [
              { term: "EIA", definition: "Environmental impact assessment: the pre-clearance study of a proposed project's impacts and their mitigation, under the 2006 notification." },
              { term: "EMP", definition: "Environmental management plan: the mitigation and monitoring commitments that become clearance conditions." },
              { term: "Environmental audit", definition: "A periodic, objective, documented evaluation of an operating unit's environmental performance against its obligations." },
            ],
            examQuestions: [
              {
                q: "Describe the EIA process under the 2006 notification, including categorisation and stages, and explain how environmental audit complements it.",
                marks: 7,
                outline: [
                  "Define EIA and its object; origin in NEPA 1969, Indian notifications 1994 then 2006.",
                  "Categorisation: A central, B state; B1 versus B2.",
                  "Stage sequence: screening, scoping, ToR, three-season baseline.",
                  "Impact prediction and significance; the EMP; public hearing rules.",
                  "Appraisal and clearance conditions; six-monthly compliance reporting.",
                  "Audit: definition, the 1992 scheme, annual statement contents.",
                  "Link: EIA predicts, audit verifies; corrective action closes the loop.",
                ],
              },
              {
                q: "Differentiate Category A and Category B projects under the EIA Notification 2006.",
                marks: 2,
              },
              {
                q: "State the objectives and contents of an environmental audit.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "The National Green Tribunal and landmark cases",
            body: [
              "The National Green Tribunal, created by the NGT Act 2010 and sitting since 2011, is India's dedicated environmental court, born of Rio Principle 13's call for adequate liability regimes and the Law Commission's 186th report. It dispenses environmental justice through a chairperson, judicial members and expert members, from a principal bench in Delhi and zonal benches at Pune, Bhopal, Chennai, Kolkata and Ahmedabad. It hears claims under seven statutes - the Water, Air, Environment (Protection), Forest Conservation, Wildlife, Public Liability Insurance and Biodiversity Acts - with the powers of a civil court, granting relief, compensation and restitution of damaged environments.",
              "Its docket rides on principles the Supreme Court grafted onto Indian law. Absolute liability - no exceptions for industry, however careful - was laid down after the 1985 oleum gas leak in Delhi (M.C. Mehta v. Union of India, 1987). The polluter pays principle funded the Bichhri village clean-up order of 1996. Vellore Citizens (1996) read the precautionary principle into Indian law, and the Taj Trapezium case (1996) moved the industries around Agra to cleaner fuels. The NGT has since applied these to everything from Ganga sewage to floodplain encroachments, awarding compensation and ordering restoration rather than mere injunctions.",
              "Against the ordinary courts, the NGT offers specialists on the bench, simplified civil procedure, time discipline and jurisdiction over compensation that civil courts lose wherever the seven statutes apply; applications must ordinarily come within six months of the cause of action, extendable to a year. Its critiques are equally examinable: pending caseloads, expert-member shortages and uneven execution of orders. Write the answer as composition, jurisdiction, powers and one case per principle - and the comparison with the conventional court route completes the picture below.",
            ],
            bullets: [
              "NGT Act 2010, benches since 2011: principal bench in Delhi plus zonal benches; judicial and expert members together.",
              "Jurisdiction over seven statutes: Water, Air, EP, Forest Conservation, Wildlife, Public Liability Insurance, Biodiversity.",
              "Civil-court powers; relief, compensation and restitution; applications within six months of the cause of action, extendable to a year.",
              "Principles with cases: absolute liability (oleum, 1987), polluter pays (Bichhri, 1996), precautionary (Vellore, 1996), clean fuel (Taj Trapezium, 1996).",
              "Contrast with civil courts: specialist bench, simplified procedure, time discipline; critique: arrears and execution gaps.",
            ],
            table: {
              caption: "Landmark cases and the principles they fixed.",
              headers: ["Case", "Year", "Principle", "Order worth quoting"],
              rows: [
                ["M.C. Mehta v. Union of India (oleum gas)", "1987", "absolute liability", "no-defence liability for hazardous industry"],
                ["Bichhri village case", "1996", "polluter pays", "industry to fund the remediation"],
                ["Vellore Citizens Welfare Forum", "1996", "precautionary principle", "tanneries to treat or close"],
                ["Taj Trapezium case", "1996", "sustainable development", "industries shifted to cleaner fuel"],
                ["Ganga pollution case", "2017", "environmental restitution", "sewage treatment and fines along the river"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Environmental dispute: two doors",
              caption: "Civil court versus NGT - the choice that shapes the case.",
              left: {
                heading: "Civil / High Court",
                items: [
                  "writ or PIL with procedural rigour",
                  "generalist judiciary",
                  "long timelines typical",
                  "relief: injunctions and damages",
                  "barred where the NGT Act covers the claim",
                ],
              },
              right: {
                heading: "National Green Tribunal",
                items: [
                  "expert plus judicial members",
                  "civil-court powers, simpler procedure",
                  "compensation and restitution orders",
                  "zonal benches close to the sites",
                  "six-month disposal discipline",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Pair each principle with its case in one line: absolute liability - oleum 1987; polluter pays - Bichhri 1996; precautionary - Vellore 1996. Examiners check the pairing, not the prose around it.",
            },
            keyTerms: [
              { term: "Absolute liability", definition: "Liability without exception or 'reasonable care' defence, imposed on hazardous industries after the 1987 oleum gas ruling." },
              { term: "Polluter pays principle", definition: "The polluter bears the cost of prevention and remediation, applied in the Bichhri clean-up order of 1996." },
              { term: "National Green Tribunal", definition: "India's specialised environmental forum (NGT Act 2010) with civil-court powers over seven statutes, granting relief, compensation and restitution." },
            ],
            examQuestions: [
              {
                q: "Describe the composition, jurisdiction and powers of the National Green Tribunal, and illustrate any two environmental principles it applies with their leading cases.",
                marks: 7,
                outline: [
                  "Genesis: Rio Principle 13, the Law Commission's 186th report, NGT Act 2010.",
                  "Composition: chairperson, judicial and expert members; principal and zonal benches.",
                  "Jurisdiction: the seven Acts; the six-month limitation, extendable to a year.",
                  "Powers: those of a civil court; relief, compensation and restitution of the environment.",
                  "Principle 1: absolute liability - the oleum gas case of 1987 - no defences.",
                  "Principle 2: polluter pays - Bichhri 1996 - remediation funded by industry.",
                  "Add the precautionary principle (Vellore) and Taj Trapezium for the development balance.",
                ],
              },
              {
                q: "State the polluter pays principle in two lines.",
                marks: 2,
              },
              {
                q: "What is absolute liability, and in which case was it laid down?",
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
        "RGPV CE-702(B) papers typically spread the marks across the control devices, solid waste processing, the legislation trio and the two measurement topics (dB math and BOD/COD), with the remaining units supplying the definitional short questions that anchor every paper. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Particulate control devices: cyclone, bag filter, ESP, scrubber", weight: "10-14 marks", note: "Sketch plus working plus efficiency is the paper's bank question; the ESP Deutsch numerical recurs." },
        { topic: "Solid waste: characteristics, composting, sanitary landfill", weight: "10-12 marks", note: "Draw the liner cross-section; the C/N blend and landfill volume numericals are standard." },
        { topic: "Legislation trio: Water 1974, Air 1981, EP 1986, with NGT", weight: "10-12 marks", note: "Section numbers, penalties and the compare table; at least one unit is guaranteed." },
        { topic: "BOD vs COD and industrial wastewater characteristics", weight: "8-10 marks", note: "Ratio interpretation plus sampling; appears in almost every paper." },
        { topic: "NAAQS 2009 and effects of air pollutants", weight: "8-10 marks", note: "Quote Indian values with averaging times; effects per pollutant." },
        { topic: "Noise: decibel scale, addition, zone standards", weight: "8-10 marks", note: "The dB addition numerical is nearly certain; memorise 75/70 down to 50/40." },
        { topic: "EIA process and environmental audit", weight: "6-8 marks", note: "Stages, A/B categories and the EIA-versus-audit difference table." },
        { topic: "Heavy metal removal and Cr(VI) treatment", weight: "6-8 marks", note: "The two-step reduction and precipitation pH values are the marks." },
        { topic: "Aerobic versus anaerobic treatment, UASB, biogas", weight: "6-8 marks", note: "The 0.35 m3 methane per kg COD numerical and the UASB sketch." },
        { topic: "CETP, Schedule VI discharge standards, ZLD", weight: "4-6 marks", note: "Why sewer limits are looser; name the classic clusters." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - pollutants, effects, standards", tasks: ["Classification axes, source tables, smog types", "Health and material effects per pollutant", "NAAQS table with averaging times; AQI categories"] },
        { week: "Week 2", focus: "Unit I - control devices", tasks: ["Settling chamber and cyclone with the d50 numerical", "Baghouse sizing and venturi scrubber sketch", "ESP working plus the Deutsch-Anderson calculation"] },
        { week: "Week 3", focus: "Unit II - noise", tasks: ["dB scale, addition, L_eq and Ldn numericals (two daily)", "Zone-wise standards and silence zone", "Source-path-receiver controls, barriers, mapping steps"] },
        { week: "Week 4", focus: "Unit III - solid waste", tasks: ["Characteristics table and its planning implications", "Composting factors and the C/N blend numerical", "Incineration, RDF and the landfill cross-section from memory"] },
        { week: "Week 5", focus: "Unit IV - industrial wastewater", tasks: ["BOD/COD interpretation and the treatability matrix", "Pretreatment train order; lime dose numerical", "Metals two-step chemistry, UASB, biogas calculation, Schedule VI"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Three acts: sections, penalties, compare table", "EIA stages, audit difference, NGT cases with principles", "Two full past papers under time"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "First hour to the control devices: cyclone sketch, baghouse sizing, the Deutsch equation - the highest-yield 7-mark territory in the paper.",
        "Second hour to Unit V: the sections and penalties of the three acts (24/25/26, 33A, 31A, 15) with one case per principle.",
        "Memorise the eight noise numbers as pairs - 75/70, 65/55, 55/45, 50/40 dB(A) - with the day and night windows.",
        "Re-draw the landfill cross-section and label 60 cm clay and 1.5 mm HDPE; the labels are the marks.",
        "Run the dB-addition and BOD/COD one-liners once; write the 3 dB rule and the 0.4-0.8 window at the top of your rough sheet.",
        "Keep thirty minutes for the NAAQS table (100/60, 60/40, 80/50, 80/40) - quick, certain short-question marks.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Answer device questions as: labelled sketch, working in four steps, efficiency equation, merits, demerits - that structure is the marking scheme.",
        "Quote every standard with its averaging time and receiving body; a limit without context earns partial credit at best.",
        "Cite section numbers in legislation answers (24, 25, 33A, 31A, 15) - they substitute for detail you cannot recall elsewhere.",
        "Show units at every numerical step (mg/L, m3/min, kg/day); method marks survive arithmetic slips.",
        "For comparison questions (BOD/COD, aerobic/anaerobic, EIA/audit, Water/Air Act), answer in a drawn table rather than paragraphs.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Adding decibels arithmetically: 90 dB plus 90 dB is 93 dB, not 180 - use 10 log10 of the summed energies.",
        "Writing WHO guideline values in place of NAAQS - the examiner wants PM2.5 at 60/40, not 15/5.",
        "Confusing adsorption (capture on a carbon surface) with absorption (dissolution into a liquid) in gaseous control answers.",
        "Liming a chromate stream directly - Cr(VI) must be reduced at pH 2-3 before hydroxide precipitation near pH 8.",
        "Treating the EP Act as replacing the Water and Air Acts - it supplements them; write 'umbrella, not repeal'.",
        "Calling an open dump a sanitary landfill - without liner, leachate collection and daily cover there are no marks.",
      ],
    },
  ],
};
