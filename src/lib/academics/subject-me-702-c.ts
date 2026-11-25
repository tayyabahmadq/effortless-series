/**
 * Academics - RGPV ME 7th-semester subject: ME-702(C) Power Plant Engineering.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or Python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me702c: AcademicSubject = {
  id: "me-702-c",
  code: "ME-702(C)",
  title: "Power Plant Engineering",
  semester: "VII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to power plant engineering for mechanical engineers: fundamentals and economics, steam plants from Rankine improvements to cogeneration, hydro, gas and diesel plants, nuclear and renewable systems, and the tariff, control and emission-control questions RGPV actually asks.",
  description:
    "Five units walk from how a power plant is classified and how its load curve drives every design decision, through the steam power plant - Rankine cycle improvements, high-pressure boilers, turbines, condensers, cooling towers and cogeneration - then across hydro, gas turbine and diesel plants with the combined cycle that marries them. Unit IV handles fission physics, PWR, BWR, PHWR and fast breeders beside solar and wind plants, and Unit V closes with tariff methods, depreciation, SCADA automation, ESP and FGD emission control, carbon capture and Indian case studies. Every section pairs theory with a redrawable diagram, a numerical or comparison table, and exam questions with full marking outlines.",
  accentColor: "#10b981",
  emoji: "PP",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Fundamentals of Power Plants",
      summary:
        "The vocabulary and the arithmetic of the whole subject: how plants are classified, what a load curve and a load duration curve tell the designer, the load, demand, diversity and use factors that quantify performance, how a site is chosen, and how the economics of a generated unit are built.",
      chapter: {
        number: "01",
        title: "Plant Types, Load Curves and Economics",
        intro:
          "Unit I builds the frame every later unit hangs on: the classification of power plants by fuel and by duty, the load curve that records what consumers actually demand hour by hour, the family of factors - load, demand, diversity, capacity, use - that condense that curve into numbers, the site selection logic that matches a plant to its fuel and water, and the fixed-versus-variable cost structure that explains why a high load factor is worth money.",
        inOneBreath:
          "A power plant converts fuel or natural energy to electricity through a prime mover and a generator; plants are classified by energy source (steam, hydro, nuclear, gas, diesel, solar, wind) and by duty (base load, peak load, standby); the load curve plots demand against time, its area is the units generated, and its peak is the maximum demand; the load duration curve reorders the same ordinates in descending magnitude; load factor is average load over maximum demand and is always less than one; diversity factor is the sum of individual maximum demands over the system maximum demand and always exceeds one; site selection trades fuel logistics, water, land, ash disposal and transmission distance; and the cost of a unit is fixed charges plus variable charges divided by the units generated - so a higher load factor spreads fixed charges thinner.",
        sections: [
          {
            number: "1.1",
            title: "Power plants and their classification",
            body: [
              "A power plant is an industrial facility that converts energy locked in a fuel or available in nature into electrical energy, and every conversion chain passes through a rotating prime mover. In a coal-fired station, chemical energy is released as heat in the furnace, the boiler turns that heat into high-pressure steam, the turbine extracts mechanical work from the expanding steam, and the generator converts the rotation into three-phase electricity at 50 Hz. Between the plant busbar and the consumer stand transformers, transmission lines and switchgear, so the plant engineer must also step up, protect and meter the energy created. The efficiency of each link compounds, which is why even a one percent gain in the boiler or turbine is pursued so keenly.",
              "Classification follows two axes. By energy source, conventional plants are the steam or thermal plant burning coal, lignite or gas, the hydroelectric plant using stored water, the nuclear plant using fission heat, the gas turbine plant and the diesel plant; non-conventional plants use solar photovoltaic or thermal conversion, wind, biomass, geothermal, tidal and wave energy, and fuel cells. By duty on the load curve, a base load plant runs nearly continuously at high load factor, a peak load plant starts fast and runs few hours, and a standby or reserve plant exists for emergencies. A pumped storage hydro plant is the classic peak-looper: it pumps water up in cheap hours and generates in dear ones.",
              "The Indian mix illustrates why classification matters. Coal-fired stations still supply more than half of the electricity generated, nuclear holds a small but strategic share built on indigenous heavy-water reactors, gas turbines provide flexible mid-merit capacity, and solar and wind have grown from rounding errors to tens of gigawatts each. Each type occupies a niche defined by its capital cost per kilowatt, its fuel or resource cost, its start-up time and its capacity factor. Choosing the right plant for the right slice of the load curve is the central design decision this subject keeps returning to, and examiners reward answers that connect classification to duty on the grid.",
            ],
            bullets: [
              "Energy chain: fuel or natural energy to heat, heat to steam or gas, expansion to shaft work in the prime mover, rotation to electricity in the generator, then transformation and transmission to consumers.",
              "Conventional sources: steam (coal, lignite, gas-fired boilers), hydro, nuclear, gas turbine and diesel; non-conventional: solar PV and CSP, wind, biomass, geothermal, tidal, wave and fuel cells.",
              "By duty: base load plants (high load factor, cheap energy - coal, nuclear, run-of-river hydro), peak load plants (fast start - gas turbines, pumped storage) and standby or reserve plants.",
              "A pumped storage plant is both a consumer and a generator: it levels the load curve by pumping at valley hours and generating at peak hours.",
              "Plant selection trades specific capital cost (Rs per kW), fuel cost per kWh, start-up time, capacity factor and site constraints against the shape of the system load curve.",
            ],
            table: {
              caption: "Principal plant types at a glance.",
              headers: ["Plant type", "Energy source", "Typical unit size", "Start-up", "Usual grid role"],
              rows: [
                ["Steam (coal)", "Coal / lignite chemical energy", "250-800 MW", "Hours", "Base load"],
                ["Hydro", "Stored water potential", "50-1000 MW", "Minutes", "Base or peak"],
                ["Nuclear", "U-235 / Pu-239 fission", "220-1000 MW", "Days", "Base load"],
                ["Gas turbine", "Natural gas / liquid fuel", "30-400 MW", "Minutes", "Peak and mid-merit"],
                ["Diesel", "Fuel oil in CI engines", "2-50 MW", "Seconds to minutes", "Standby, remote"],
                ["Solar PV / wind", "Irradiance / kinetic wind", "1-300 MW blocks", "Instant / variable", "Must-take energy"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From fuel to grid: the energy conversion chain",
              caption:
                "Every power plant, whatever its fuel, walks energy down this chain - the prime mover is the pivot.",
              steps: [
                { label: "Fuel or natural energy input", note: "coal, uranium, water head, wind" },
                { label: "Conversion to working fluid heat", note: "boiler, reactor core, receiver" },
                { label: "Expansion in the prime mover", note: "turbine or engine: shaft work" },
                { label: "Generator converts rotation", note: "3-phase AC at 50 Hz" },
                { label: "Transformer and grid delivery", note: "step-up, transmission, metering" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Classification is asked almost every session, either as a 2-mark list or as the first half of a 7-mark question. Answer on two axes - by energy source (conventional vs non-conventional, with one example each) and by duty (base, peak, standby, with the reason each suits its slot). Close with one line on the Indian installed mix to show application.",
            },
            keyTerms: [
              { term: "Power plant", definition: "An assembly of equipment that converts energy from a fuel or natural source into electrical energy." },
              { term: "Prime mover", definition: "The rotating machine (turbine or engine) that converts fluid or heat energy into mechanical shaft work." },
              { term: "Base load plant", definition: "A plant that runs almost continuously at high load factor because its energy is cheap, e.g. coal or nuclear stations." },
            ],
            examQuestions: [
              {
                q: "Classify power plants on any two bases, giving one example of each class, and explain which type serves base load and which serves peak load in a modern grid.",
                marks: 7,
                outline: [
                  "Define a power plant as an energy conversion facility with a prime mover and generator.",
                  "Classification by energy source: conventional - steam, hydro, nuclear, gas turbine, diesel; non-conventional - solar, wind, biomass, geothermal, tidal, fuel cell.",
                  "Classification by duty: base load, peak load, standby, pumped storage as peak-looper.",
                  "Explain why coal and nuclear suit base load (cheap unit energy, slow start).",
                  "Explain why gas turbines and pumped storage suit peaks (minutes of start-up).",
                  "State the plant selection factors: capital cost per kW, fuel cost, start-up time, capacity factor, site.",
                  "Close with the Indian mix: coal-dominated generation, rising solar and wind, small nuclear share.",
                ],
              },
              {
                q: "Differentiate between a base load plant and a peak load plant with one example of each.",
                marks: 2,
              },
              {
                q: "List any five non-conventional sources of energy and name one device or plant used for each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Load curve and load duration curve",
            body: [
              "The load curve is the plot of load on a power station against time, usually over twenty-four hours, with load in megawatts on the vertical axis and hours on the horizontal. It is the station's fingerprint: it shows the maximum demand, the minimum load, and the units generated as the area under the curve. A residential feeder peaks in the evening and sags at night; an industrial estate holds a flat plateau through the shift; a mixed urban system shows a morning ramp and a sharper evening peak. Reading this shape correctly is the first skill of plant operation and planning.",
              "The load duration curve carries exactly the same ordinates rearranged in descending order of magnitude, so the time axis now answers the question: for how many hours did the load exceed a given value? The area under the load duration curve still equals the units generated, because rearranging ordinates does not change their sum. A segmented load duration curve divides the area into rectangles representing base, intermediate and peak energy, and drawing a horizontal capacity line on it shows instantly which hours the station can serve and where a second unit or an external purchase must carry the load.",
              "Both curves are working tools, not decoration. The maximum demand read from them sizes the installed capacity, the average-to-peak ratio gives the load factor, and the valley depth argues for pumped storage or time-of-day tariffs. Unit commitment - deciding which machines run when - is scheduled against the load duration curve so that the most efficient units take the base rectangle and quick-start plant covers the sliver of peak hours. Examiners expect the sketch of both curves, the area-equals-energy argument, and at least three planning uses stated crisply.",
            ],
            bullets: [
              "Load curve: load (MW) versus time, drawn hourly for a day, weekly or annually; its peak is the maximum demand and its area is the units generated.",
              "Minimum load, valley hours and evening peak identify when cheap base energy and expensive peak energy are needed.",
              "Load duration curve: the same load ordinates rearranged in descending order; for each duration the curve gives the load exceeded during that duration.",
              "Area is preserved: rearranging ordinates changes nothing, so the area under the LDC still equals the energy generated.",
              "Uses: capacity and number of units, load factor computation, unit commitment, maintenance scheduling, and designing tariffs such as time-of-day rates.",
            ],
            codeExample: {
              language: "python",
              caption: "Daily load curve statistics and the load duration curve.",
              code: `# Daily load data for a small industrial feeder (MW)
hourly_load = [22, 21, 20, 20, 21, 24, 30, 38, 44, 46, 45, 42,
               40, 41, 43, 47, 52, 55, 50, 44, 38, 32, 27, 24]

units_mwh = sum(hourly_load)          # area under the load curve
max_demand = max(hourly_load)         # peak of the curve
avg_load = units_mwh / 24
load_factor = avg_load / max_demand

print(f"Units generated : {units_mwh} MWh")
print(f"Maximum demand  : {max_demand} MW")
print(f"Average load    : {avg_load:.2f} MW")
print(f"Load factor     : {load_factor:.2f}")

# Load duration curve: sort the same loads in descending order
ldc = sorted(hourly_load, reverse=True)
print("Top five LDC ordinates:", ldc[:5])
base_hours = sum(1 for x in ldc if x >= 30)
print(f"Load exceeded 30 MW for {base_hours} hours")`,
            },
            diagram: {
              kind: "flow",
              title: "Building a load duration curve",
              caption:
                "Same data, two pictures - and the area under both curves is the energy generated.",
              steps: [
                { label: "Record the load every hour", note: "24 ordinates from the feeder SCADA" },
                { label: "Plot load against time", note: "this is the load curve" },
                { label: "Read peak and area", note: "maximum demand and units generated" },
                { label: "Reorder the ordinates descending", note: "magnitude now drives the x-axis" },
                { label: "Load duration curve emerges", note: "base block below, peak sliver at the left" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch discipline",
              body: "In the exam, draw both curves side by side on the same load scale, mark maximum demand, minimum load and the area on each, and write one sentence that the areas are equal. That sentence is often a separately-awarded point.",
            },
            keyTerms: [
              { term: "Load curve", definition: "A plot of load against time showing the variation of demand on a station over a chosen period." },
              { term: "Load duration curve", definition: "The load curve rearranged with ordinates in descending order of magnitude, giving the hours for which each load is exceeded." },
              { term: "Maximum demand", definition: "The greatest load on the station over the period, read as the peak of the load curve." },
            ],
            examQuestions: [
              {
                q: "Define the load curve and the load duration curve. With neat sketches, explain the information each provides and its uses in the planning and operation of a power station.",
                marks: 7,
                outline: [
                  "Define the load curve with its axes and a typical daily sketch.",
                  "Mark maximum demand, minimum load, valley and evening peak on the sketch.",
                  "State that the area under the load curve equals the units generated.",
                  "Define the load duration curve and describe its construction by descending rearrangement.",
                  "Draw the LDC and show base, intermediate and peak energy segments.",
                  "Prove the areas of the two curves are equal since rearranging ordinates preserves their sum.",
                  "List uses: capacity sizing, load factor, unit commitment, maintenance windows, tariff design.",
                ],
              },
              {
                q: "What does the area under a daily load curve represent, and what does its peak represent?",
                marks: 2,
              },
              {
                q: "Distinguish between a load curve and a load duration curve in two points each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Performance factors: load, demand, diversity and use",
            body: [
              "The load factor is the ratio of average load to maximum demand over a period, and it is always less than one because no consumer draws full demand every hour. A load factor of 0.7 means the station earned only seventy percent of the revenue its peak capacity could have billed, while still paying full fixed charges on that capacity - so every point of load factor is money. Demand factor is the ratio of maximum demand to connected load, a consumer-side number that tells how much of the wired apparatus is actually used together. Both factors convert the shape of the load curve into single design numbers.",
              "Diversity factor is the ratio of the sum of individual maximum demands to the system maximum demand, and it is always greater than one because individual peaks do not coincide. It is the planner's gift: a feeder serving many consumers needs less installed capacity than the arithmetic sum of their peaks. On the supply side, the plant capacity factor compares actual energy with the energy the plant capacity could have produced over the whole period, while the plant use factor divides by the hours the plant actually ran, exposing forced outages and idle reserve. Reserve capacity is installed capacity minus maximum demand, held for outages and growth.",
              "Typical values anchor the numbers: a residential feeder may show a load factor of 0.4 to 0.6 while a continuous-process industry approaches 0.9; nuclear stations hold capacity factors above 0.8, coastal coal stations 0.6 to 0.75, solar parks near 0.2 because night is not optional, and wind farms 0.25 to 0.35. These figures drive tariff design, reserve policy and generation-mix planning alike. Numerical questions give maximum demand with two or three factors and ask for the rest, so the formula sheet in the table below plus careful unit bookkeeping earns full marks every session.",
            ],
            bullets: [
              "Load factor = average load / maximum demand, always less than one; higher load factor means lower cost per unit because fixed charges spread over more energy.",
              "Demand factor = maximum demand / connected load, a consumer-side measure of how much of the wired load is used together.",
              "Diversity factor = sum of individual maximum demands / coincident system maximum demand, always greater than one; it reduces the capacity a feeder must install.",
              "Plant capacity factor = actual energy / (plant capacity x hours of period); plant use factor = actual energy / (plant capacity x hours actually run).",
              "Reserve capacity = installed capacity - maximum demand, carried for unit outages, maintenance and demand growth.",
            ],
            table: {
              caption: "The factor family: formulas, typical values and meaning.",
              headers: ["Factor", "Formula", "Typical value", "What it tells"],
              rows: [
                ["Load factor", "avg load / max demand", "0.4-0.9", "How flat the load curve is"],
                ["Demand factor", "max demand / connected load", "0.4-0.8", "How much wired load peaks together"],
                ["Diversity factor", "sum of individual max demands / system max demand", "> 1 (1.2-2.0)", "Peak non-coincidence across consumers"],
                ["Plant capacity factor", "energy / (capacity x 8760 h)", "0.2 (solar) to 0.9 (nuclear)", "Utilisation of installed capacity"],
                ["Plant use factor", "energy / (capacity x running hours)", "0.6-0.9", "Utilisation while running"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Demand-side factors vs supply-side factors",
              caption:
                "The same load curve feeds two families of numbers - one about consumers, one about the plant.",
              left: {
                heading: "Demand side (consumer)",
                items: [
                  "Connected load: sum of ratings of all apparatus",
                  "Maximum demand: largest coincident draw",
                  "Demand factor: max demand / connected load",
                  "Diversity factor: individual peaks vs system peak",
                  "Load factor: average / maximum demand",
                ],
              },
              right: {
                heading: "Supply side (station)",
                items: [
                  "Installed capacity: nameplate of all units",
                  "Reserve capacity: installed minus maximum demand",
                  "Plant capacity factor: energy over full-period potential",
                  "Plant use factor: energy over running-hour potential",
                  "Availability: hours able to run / total hours",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Formula sheet that pays",
              body: "Learn all five formulas verbatim with their inequality directions: load factor and demand factor stay below one, diversity factor stays above one. Examiners test exactly this asymmetry in 2-mark questions, and the numerical always chains two or three of the formulas together.",
            },
            keyTerms: [
              { term: "Load factor", definition: "The ratio of average load to maximum demand over a period; it is always less than one." },
              { term: "Diversity factor", definition: "The ratio of the sum of individual maximum demands to the coincident system maximum demand; it is always greater than one." },
              { term: "Plant capacity factor", definition: "The ratio of actual energy generated to the energy that could have been generated at plant capacity over the period." },
            ],
            examQuestions: [
              {
                q: "A generating station has a maximum demand of 40 MW, a load factor of 60 percent, a plant capacity factor of 50 percent and a plant use factor of 80 percent. Determine the reserve capacity, the annual energy generated and the operating hours per year.",
                marks: 7,
                outline: [
                  "Write the four formulas: load factor, plant capacity factor, plant use factor, reserve.",
                  "Average load = load factor x maximum demand = 0.60 x 40 = 24 MW.",
                  "Annual energy = average load x 8760 h = 24 x 8760 = 210240 MWh.",
                  "Plant capacity = energy / (capacity factor x 8760) = 210240 / (0.50 x 8760) = 48 MW.",
                  "Reserve capacity = 48 - 40 = 8 MW.",
                  "Operating hours = energy / (capacity x use factor) = 210240 / (48 x 0.80) = 5475 hours.",
                  "Comment that the station idles or is under maintenance for the remaining 3285 hours, which is why the use factor exceeds the capacity factor.",
                ],
              },
              {
                q: "Define demand factor and diversity factor. Why is the diversity factor always greater than one?",
                marks: 2,
              },
              {
                q: "Explain in three sentences why a higher load factor reduces the cost per unit generated.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Site selection for power plants",
            body: [
              "Every site decision balances the cost of moving fuel against the cost of moving electricity. The general factors are land of adequate area at reasonable price with sound foundations, abundant water for boiler make-up and condenser cooling, transport links by rail or waterway for fuel and heavy equipment, proximity to or distance from the load centre, availability of skilled labour, and a grid interconnection point. Add statutory layers: environmental clearance, ash utilisation commitments, and for nuclear stations an exclusion zone and emergency planning radius. A site that fails on water or fuel logistics can erase its cheap land advantage within a few years of operation.",
              "Each plant type adds its own demands. A coal-fired steam plant wants either the pit-head, beside the mine with cheap fuel and long transmission lines, or the load centre, beside the consumers with heavy coal railage and thousands of tonnes of ash daily needing dyke land. A hydro station needs a catchment with dependable rainfall, a valley profile that stores water behind a dam at high head, geologically stable abutments, and acceptance of submergence and resettlement. A nuclear station demands cooling water, low population density, low seismic hazard and controlled emergency zones. Diesel and gas plants are forgiving: small footprint, quick build, best sited near the load.",
              "Indian geography displays every pattern. Supercritical pit-head stations cluster in the eastern and central coal belts; coastal stations in Gujarat and Tamil Nadu run on imported coal brought by capesize vessels; Himalayan hydro developments fight geology and silting; and the nuclear fleet sits on both coasts for condenser water. Recent practice weighs environmental cost explicitly: flue-gas desulphurisation retrofits, zero liquid discharge norms and fly ash utilisation targets all follow from siting near sensitive airsheds. In the exam, tie each factor to a plant type instead of writing one generic list - that is exactly what distinguishes a 5-mark answer from a 7-mark one.",
            ],
            bullets: [
              "General factors: land area and price, foundations, water quantity and quality, fuel transport, road and rail access, labour, and grid interconnection.",
              "Steam plant: coal linkage or pit-head location, ash dyke land, and roughly 2000 tonnes of water per hour for a 500 MW unit's condenser circuit.",
              "Hydro plant: dependable catchment, storage volume, gross head, dam abutment geology, submergence and resettlement, sediment management.",
              "Nuclear plant: cooling water, sparse population with exclusion zone, low seismicity, and emergency planning distances to cities.",
              "Statutory layer: environmental impact assessment and clearance, ash utilisation plan, water and air consent, and for nuclear, regulator-approved siting.",
            ],
            table: {
              caption: "Siting demands by plant type.",
              headers: ["Requirement", "Steam (coal)", "Hydro", "Nuclear"],
              rows: [
                ["Key resource", "Coal linkage + cooling water", "Head + dependable flow", "Cooling water"],
                ["Land", "Large + ash dykes", "Valley + submergence", "Moderate + exclusion zone"],
                ["Geology", "Bearing capacity for boiler", "Stable abutments, low seepage", "Low seismic hazard"],
                ["Distance from load", "Pit-head far or load-centre near", "Often remote, long lines", "Buffered but grid-connected"],
                ["Special constraint", "Ash utilisation, airshed", "Resettlement, sediment", "Emergency planning radius"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Siting a 2000 MW station: which arguments win",
              caption: "Each branch is a siting philosophy - check its outcome before committing.",
              start: "A 2000 MW generating station must be sited",
              branches: [
                { label: "Pit-head siting beside the coal mine", outcome: "cheapest fuel for plant life, long transmission lines to load", good: true },
                { label: "Load-centre siting with rail coal linkage", outcome: "short lines but daily coal and ash logistics at city gates", good: true },
                { label: "Hydro site with firm head and storage", outcome: "clean peaking energy; submergence and resettlement to manage", good: true },
                { label: "Nuclear site upwind of a dense city, short of water", outcome: "rejected: cooling demand and emergency zone unmet", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Generic lists lose marks",
              body: "Do not write one factor list for all plants. The 7-mark question names the plant type, so structure the answer as general factors first, then the type-specific factors, and close with the pit-head versus load-centre trade for steam, or the submergence issue for hydro.",
            },
            keyTerms: [
              { term: "Load centre", definition: "The region of concentrated demand near which a plant can be sited to shorten transmission lines." },
              { term: "Pit-head station", definition: "A thermal station sited adjacent to the coal mine to minimise fuel transport cost." },
              { term: "Ash dyke", definition: "An engineered pond area where fly ash and bottom ash from a coal plant are stored in slurry form." },
            ],
            examQuestions: [
              {
                q: "Discuss the factors governing the selection of a site for a coal-fired steam power plant, and compare pit-head siting with load-centre siting.",
                marks: 7,
                outline: [
                  "Open with the governing trade: cost of moving fuel versus cost of moving electricity.",
                  "Land: area for plant, colony and ash dykes; price; bearing capacity.",
                  "Fuel: coal linkage, mine proximity, rail or waterway capacity.",
                  "Water: quantity for condenser and make-up, quality, source dependability.",
                  "Ash disposal: dyke land, utilisation commitments, environmental clearance.",
                  "Transmission: distance to load, grid interconnection, right of way.",
                  "Compare pit-head (cheap fuel, long lines, ash near mines) with load-centre (short lines, heavy coal haulage, urban airshed) and conclude which suits Indian coal belts.",
                ],
              },
              {
                q: "State any four factors specific to the siting of a hydroelectric plant.",
                marks: 2,
              },
              {
                q: "What is a pit-head power station? Give one advantage and one disadvantage.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Economics of power generation",
            body: [
              "The cost of electricity splits into three behaviours. Fixed costs - interest on capital, depreciation, insurance, taxes, salaries of permanent staff - do not move with output; they are charged against the plant's very existence. Variable costs - fuel, cooling water, consumables, ash handling chemicals - move almost linearly with the units generated. Between them sit semi-fixed costs such as maintenance spares and support fuel that step with operating hours rather than energy. Capital cost itself, expressed as specific capital cost in rupees per kilowatt, is raised before the first unit flows and recovered through these charges over plant life.",
              "Cost per unit is total annual cost divided by annual units, and this one line explains the industry's obsession with load factor. At a 50 percent load factor the fixed charges are spread over half as many units as at full load, so the same station produces markedly costlier electricity at the lower factor. The running Python example below quantifies the effect: a 500 MW station with a fixed charge of four billion rupees a year and fuel at Rs 2.20 per unit sees its unit cost fall steeply as load factor climbs from 0.5 to 0.9. This is also why off-peak energy is sold cheap and why pump-storage exists to reshape the curve.",
              "Three engineering metrics translate design into money. Heat rate, in kilojoules per kilowatt-hour, multiplies by fuel price to give the variable cost - a 2500 kJ/kWh gross heat rate at imported coal prices dominates the tariff. Auxiliary consumption, typically 6 to 9 percent of gross generation for coal plants, is power the station spends on itself. Availability and plant load factor complete the picture investors price. Compare technologies: solar has near-zero variable cost with high capital per kW, coal is mid on both, and gas is quick to build but hostage to fuel price - the same economics again expressed as technology choice.",
            ],
            bullets: [
              "Fixed costs (interest, depreciation, insurance, taxes, permanent staff) are independent of generation; variable costs (fuel, water, consumables) scale with energy.",
              "Semi-fixed costs such as maintenance spares scale with operating hours; the three-way split is a favourite 7-mark distinction.",
              "Cost per unit = (annual fixed + annual variable cost) / annual units generated; a higher load factor spreads fixed charges over more units and lowers it.",
              "Heat rate (kJ/kWh) times fuel price gives variable cost per unit; auxiliary consumption of 6-9 percent is the station's own draw.",
              "Specific capital cost (Rs per kW) orders the technologies: solar high capital and zero fuel, coal mid, gas low capital and fuel-heavy.",
            ],
            codeExample: {
              language: "python",
              caption: "How load factor drives the cost per unit.",
              code: `# Annual cost of a 500 MW thermal station (illustrative Rs figures)
capacity_mw = 500
fixed_cost = 4.0e9          # interest, depreciation, salaries, insurance (Rs/yr)
variable_rate = 2.2         # fuel + consumables (Rs per kWh)

for load_factor in (0.5, 0.7, 0.9):
    energy_kwh = capacity_mw * 1000 * 8760 * load_factor
    cost_per_unit = (fixed_cost + variable_rate * energy_kwh) / energy_kwh
    print(f"LF {load_factor:.1f} -> {energy_kwh/1e9:.2f} billion kWh, "
          f"cost Rs {cost_per_unit:.2f} per unit")`,
            },
            diagram: {
              kind: "pyramid",
              title: "Anatomy of the cost of a generated unit",
              caption:
                "Capital charges crown the stack; the fuel block at the base is the only part that scales with every unit sold.",
              tiers: [
                { label: "Capital charges", note: "interest on loan + depreciation" },
                { label: "Fixed O and M", note: "salaries, insurance, taxes" },
                { label: "Semi-fixed", note: "maintenance spares, support fuel" },
                { label: "Variable charges", note: "coal, water, ash chemicals - scales with kWh" },
              ],
            },
            callout: {
              type: "tip",
              title: "Numerical blueprint",
              body: "The standard numerical gives capacity, annual fixed cost and variable rate, then asks cost per unit at two load factors. Write the single formula first, tabulate the two cases, and finish with one sentence explaining why the fixed cost per unit falls - that sentence is usually a full mark.",
            },
            keyTerms: [
              { term: "Fixed cost", definition: "The component of generation cost that is independent of the units generated, e.g. interest, depreciation and permanent staff." },
              { term: "Variable cost", definition: "The component that scales with energy generated, chiefly fuel, water and consumables." },
              { term: "Heat rate", definition: "Fuel energy in kilojoules consumed per kilowatt-hour of electricity generated; it fixes the variable cost of a thermal unit." },
            ],
            examQuestions: [
              {
                q: "Distinguish between fixed, semi-fixed and variable costs of power generation with two examples each, and show by a numerical example how the load factor affects the cost per unit.",
                marks: 7,
                outline: [
                  "Define fixed cost with examples: interest, depreciation, insurance, taxes, permanent salaries.",
                  "Define semi-fixed cost with examples: maintenance spares, operating labour that steps with hours.",
                  "Define variable cost with examples: fuel, cooling water, chemicals, part of maintenance.",
                  "Write cost per unit = (fixed + variable) / units generated.",
                  "Take a worked example: 500 MW, fixed Rs 400 crore, variable Rs 2.20 per unit, compare LF 0.5 and 0.9.",
                  "Show the unit cost falling as load factor rises, with both numbers computed.",
                  "Conclude: high load factor spreads fixed charges, hence off-peak tariffs and pumped storage to flatten the curve.",
                ],
              },
              {
                q: "Define heat rate and specific capital cost, and state their units.",
                marks: 2,
              },
              {
                q: "Why does the cost per unit generated fall as the load factor rises? Answer in two or three sentences.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Steam Power Plants",
      summary:
        "The heart of the subject: the Rankine cycle and its reheat and regenerative improvements, the high-pressure boilers that feed it - La Mont, Benson, Loeffler, Velox - impulse and reaction turbines with their compounding, condensers and vacuum systems, and the cooling towers and cogeneration schemes that squeeze the last of the fuel's value.",
      chapter: {
        number: "02",
        title: "Steam Cycles, Boilers, Turbines and Condensing Plant",
        intro:
          "Unit II assembles the modern steam station piece by piece. It opens with the ideal Rankine cycle on the T-s plane and the three levers that lift it - superheat, reheat and regenerative feed heating. It then walks the high-pressure boiler family that makes such steam possible, the impulse and reaction turbines with their velocity triangles and compounding, the condenser that anchors the cycle at vacuum, and the cooling tower and cogeneration schemes that decide how much of the fuel's heat is finally sold rather than rejected.",
        inOneBreath:
          "The Rankine cycle pumps condensate, boils it, superheats it, expands it through the turbine and condenses it at vacuum; efficiency rises with boiler pressure, superheat temperature and lower condenser pressure until exhaust moisture sets the limit; reheat returns partially expanded steam to the boiler for a second expansion, regeneration bleeds steam to heat feedwater in closed or open heaters, and together with supercritical pressures they push efficiencies past 45 percent; high-pressure boilers abandon natural circulation - La Mont forces it with a pump, Benson evaporates water in one pass with no drum, Loeffler evaporates by mixing superheated bled steam, and Velox burns under pressure with a gas turbine-driven compressor; turbines split into impulse stages dropping pressure in fixed nozzles and reaction stages sharing the drop with moving blades, compounded by pressure (Rateau) or velocity (Curtis) to keep blade speeds sane; the surface condenser holds vacuum, recovers condensate and defines vacuum efficiency and terminal temperature difference; and the cooling tower rejects the cycle's low-grade heat by evaporation while cogeneration sells it instead, lifting fuel utilisation from about 40 percent to 75-85 percent.",
        sections: [
          {
            number: "2.1",
            title: "Rankine cycle and its improvements",
            body: [
              "The ideal Rankine cycle is the constitutional document of every steam station. Condensate leaves the condenser as saturated liquid at the vacuum pressure, the feed pump raises it to boiler pressure at almost constant volume, the boiler and superheater add heat to make it dry superheated steam, the turbine expands it back to condenser pressure doing work, and the condenser returns it to liquid by rejecting latent heat to cooling water. On the T-s diagram the cycle is a rounded rectangle whose tall right side is the superheat leg. Thermal efficiency is net turbine work minus pump work over heat added, all expressed through enthalpies picked off the steam tables.",
              "Three levers lift the efficiency. Raising boiler pressure and superheat temperature raises the mean temperature of heat addition, which is what the second law rewards, but high pressure alone thickens exhaust moisture and erodes last-stage blades - so superheat tempers it. Lowering condenser pressure, fixed by cooling water temperature, cheaply gains a few points but risks air leakage and freezing in cold climates. The real workhorses are reheat and regeneration. Reheat returns the partially expanded steam to the boiler at roughly a quarter of boiler pressure, resuperheats it to the original temperature and expands it again, cutting exhaust moisture below about 12 percent while adding work.",
              "Regeneration bleeds small fractions of steam from intermediate turbine stages and lets them heat the feedwater in closed or open heaters instead of rejecting all their heat in the condenser. With five to eight heaters the feedwater reaches 250 to 300 deg C before entering the economiser, the irreversibility of feeding cold water to a hot boiler shrinks, and efficiency climbs several points. Modern practice stacks all levers: supercritical pressures near 250 bar, main and reheat temperatures of 600 deg C, and a full regenerative train push gross efficiencies beyond 45 percent. The Python sketch below evaluates a representative cycle and shows how small pump work is beside turbine work - the reason a 7-mark derivation never drops it but a 2-mark estimate may.",
            ],
            bullets: [
              "Ideal Rankine: pump (liquid compression), boiler plus superheater (heat addition), turbine (expansion), condenser (heat rejection) - efficiency written entirely in enthalpies.",
              "Superheat raises the mean temperature of heat addition and keeps exhaust moisture safe; higher boiler pressure helps until moisture limits it.",
              "Lower condenser pressure, set by cooling water temperature, buys efficiency cheaply; every millibar of vacuum is watched by the heat-rate engineer.",
              "Reheat: expand to an intermediate pressure, resuperheat to the original temperature, expand again - dry exhaust plus extra work.",
              "Regeneration: bled steam heats feedwater in open and closed heaters toward 250-300 deg C, cutting condenser rejection and raising efficiency several points.",
            ],
            codeExample: {
              language: "python",
              caption: "Ideal Rankine cycle from representative enthalpies.",
              code: `# Ideal Rankine cycle, representative enthalpies in kJ/kg
h1 = 191.8     # saturated liquid leaving condenser at 0.1 bar
h2 = 201.9     # feed pump exit, h2 = h1 + v*(p2 - p1)
h3 = 3348.0    # superheated steam entering the turbine
h4 = 2240.0    # wet steam after expansion back to 0.1 bar

w_turbine = h3 - h4          # turbine work per kg of steam
w_pump = h2 - h1             # feed pump work
q_in = h3 - h2               # heat added in boiler + superheater

efficiency = (w_turbine - w_pump) / q_in
back_work_ratio = w_pump / w_turbine

print(f"Turbine work   : {w_turbine:.1f} kJ/kg")
print(f"Pump work      : {w_pump:.1f} kJ/kg")
print(f"Heat added     : {q_in:.1f} kJ/kg")
print(f"Cycle efficiency: {efficiency:.3f} ({efficiency*100:.1f} %)")
print(f"Back work ratio: {back_work_ratio:.3f}")`,
            },
            diagram: {
              kind: "cycle",
              title: "The Rankine cycle as a closed loop",
              caption:
                "Four components in a loop: the condenser's vacuum is the cycle's foundation, the boiler's superheat its ceiling.",
              steps: [
                { label: "Feed pump", note: "raises condensate to boiler pressure" },
                { label: "Boiler and superheater", note: "heat addition at high pressure" },
                { label: "Turbine", note: "expansion to condenser vacuum" },
                { label: "Condenser", note: "rejects latent heat, returns to liquid" },
                { label: "Hotwell", note: "condensate storage and feed suction" },
              ],
            },
            callout: {
              type: "exam",
              title: "The T-s sketch is mandatory",
              body: "Every Rankine answer opens with the flow diagram and the T-s plot, states numbered 1-4 and matching. Draw the saturated liquid and vapour domes first, then the cycle inside them. Marks are awarded for correct dome shape and for numbering that matches your enthalpy equations.",
            },
            keyTerms: [
              { term: "Rankine cycle", definition: "The ideal vapour power cycle of pump, boiler, turbine and condenser, analysed through enthalpies on the T-s plane." },
              { term: "Reheating", definition: "Returning partially expanded steam to the boiler for resuperheating before a second expansion, reducing exhaust moisture." },
              { term: "Regeneration", definition: "Heating feedwater with bled turbine steam in open or closed heaters to raise the mean temperature of heat addition." },
            ],
            examQuestions: [
              {
                q: "Draw the flow and T-s diagrams of the ideal Rankine cycle, derive its thermal efficiency, and explain how reheating and regenerative feed heating improve plant performance.",
                marks: 7,
                outline: [
                  "Draw the component flow diagram with state points 1-4.",
                  "Draw the T-s diagram with the saturation dome and the four processes.",
                  "Write turbine work, pump work and heat added in enthalpy terms.",
                  "Assemble the efficiency expression and note that pump work is small but retained.",
                  "Explain reheat: intermediate pressure return, moisture control, extra work; typical gain of a few points.",
                  "Explain regeneration: bled steam, open and closed heaters, feedwater to 250-300 deg C, reduced condenser rejection.",
                  "Close with modern practice: supercritical pressure, 600 deg C class steam, efficiencies above 45 percent.",
                ],
              },
              {
                q: "State two effects of increasing the boiler pressure on Rankine cycle performance.",
                marks: 2,
              },
              {
                q: "Explain why the condenser operates under vacuum and what this buys in cycle efficiency.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "High-pressure boilers: La Mont, Benson, Loeffler, Velox",
            body: [
              "Above roughly 120 bar the density difference between steam and water grows too small for natural circulation to push water reliably through evaporator tubes, and the boiler must be forced. Forced circulation and high pressure pay twice: heat transfer coefficients stay high in smaller tubes, so the boiler is compact and light, and the steam it produces is hotter, which the cycle efficiency rewards. The classical family - La Mont, Benson, Loeffler and Velox - each solved the forcing problem differently, and their ideas still breathe inside today's supercritical once-through units.",
              "The La Mont boiler uses a steam-separated drum and a circulation pump that drives water through the evaporating tubes at several times the steam output, with the mixture separating in the drum and the surplus returning to the pump suction. The Benson boiler abandons the drum entirely: feedwater is pumped above critical pressure and evaporates in a single pass through the tubes, so what leaves is either steam or water at full pressure with no recirculation - a once-through design, sensitive to deposits and demanding on water chemistry. The Loeffler boiler fears scale more than pumps: it bleeds superheated steam and injects it into an evaporator drum to evaporate feedwater by mixing, sparing the evaporating surfaces from contact with impure water. The Velox burns fuel under pressure so that flue gas velocity and heat transfer are high, the compressed gases expanding through a gas turbine that drives the combustion air compressor.",
              "Compare their personalities. La Mont guarantees circulation but pays pump power and start-up complexity. Benson is the ancestor of every modern once-through supercritical boiler and needs no drum, but deposition in a single pass raises metal temperature fast. Loeffler suits feedwater of doubtful quality but carries the complexity of steam-driven evaporation. Velox is compact enough for ships but lives on clean gaseous fuel. Indian supercritical blocks of 660 and 800 MW descend directly from the Benson concept: 250 bar, 600 deg C class steam, and water treatment of pharmaceutical purity. Sketch each boiler's distinguishing circuit - that sketch is what the examiner scans for.",
            ],
            bullets: [
              "Why high pressure: natural circulation weakens above about 120 bar as the steam-water density difference shrinks; forcing the flow keeps small-tube heat transfer high.",
              "La Mont: centrifugal pump circulates water through evaporator tubes at a circulation ratio of several times output; drum separates the mixture.",
              "Benson: once-through above critical pressure; no drum, no recirculation; water becomes steam in a single pass - ancestor of supercritical boilers.",
              "Loeffler: evaporates feedwater by mixing with superheated bled steam in a drum, protecting evaporating surfaces from scaling water.",
              "Velox: pressurised combustion gives high gas velocities and heat transfer; flue gas expands through a gas turbine driving the air compressor - extremely compact.",
            ],
            table: {
              caption: "The high-pressure boiler family compared.",
              headers: ["Boiler", "Circulation", "Distinguishing feature", "Chief demerit"],
              rows: [
                ["La Mont", "Forced, with drum", "Pump drives water round evaporator tubes", "Circulation pump power and start-up care"],
                ["Benson", "Once-through, no drum", "Single pass from water to supercritical steam", "Deposit-sensitive; needs very pure water"],
                ["Loeffler", "Steam-driven evaporation", "Superheated bled steam evaporates feedwater by mixing", "Complex steam circulation circuit"],
                ["Velox", "Pressurised combustion", "Gas turbine driven by flue gas runs the air compressor", "Best with clean gaseous fuel only"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Benson once-through water path",
              caption:
                "No drum anywhere in the line - the feed pump's pressure carries water to steam in one pass.",
              steps: [
                { label: "Feed pump", note: "raises water above critical pressure" },
                { label: "Economiser", note: "preheats toward saturation" },
                { label: "Evaporating tubes", note: "water converts to steam in one pass" },
                { label: "Superheater", note: "steam raised to 570 deg C class" },
                { label: "Turbine stop and control valves", note: "steam delivered to the turbine" },
              ],
            },
            callout: {
              type: "tip",
              title: "One sketch per boiler",
              body: "For each of the four boilers, memorise its single distinguishing circuit: La Mont's pump-and-drum loop, Benson's straight once-through line, Loeffler's bled-steam evaporator, Velox's gas turbine on the flue path. Name the circuit and the boiler is identified - this is how the 7-mark question is marked.",
            },
            keyTerms: [
              { term: "Forced circulation boiler", definition: "A boiler in which a pump drives water or steam through the tubes instead of relying on natural circulation." },
              { term: "Once-through boiler", definition: "A boiler in which water converts completely to steam in a single pass, with no drum or recirculation." },
              { term: "Supercritical steam", definition: "Steam generated above the critical pressure of 221 bar, where liquid and vapour phases are indistinguishable." },
            ],
            examQuestions: [
              {
                q: "Explain with a neat sketch the construction and working of the La Mont boiler, and state its merits and demerits.",
                marks: 7,
                outline: [
                  "State why high pressure defeats natural circulation.",
                  "Draw the sketch: feed pump, economiser, circulation pump, evaporator tubes, steam separating drum, superheater.",
                  "Explain working: pump drives water round the evaporating loop at a circulation ratio of several times output.",
                  "Steam separates in the drum; surplus water returns to the circulation pump suction.",
                  "Merits: compact, high evaporation rate, smaller tubes, quick steam raising.",
                  "Demerits: circulation pump power, deposits in tubes, careful start-up supervision.",
                  "Close with lineage: forced circulation ideas matured into the once-through Benson and modern supercritical boilers.",
                ],
              },
              {
                q: "How does the Benson boiler differ from a drum-type boiler, and what does it demand of water quality?",
                marks: 3,
              },
              {
                q: "Which problem of forced-circulation boilers does the Loeffler design address, and how?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Steam turbines, impulse and reaction, compounding",
            body: [
              "The steam turbine converts enthalpy into shaft work in two movements: expansion and momentum exchange. In an impulse stage, all the pressure drop happens in fixed nozzles, which convert enthalpy into a high-velocity jet, and the moving blades merely deflect the jet, changing its momentum and absorbing force at essentially constant pressure. In a reaction stage the pressure drop is shared between the fixed and moving blade rows, so the moving blades also act as nozzles and experience an additional reaction thrust - the Parsons turbine is the fifty-percent reaction classic where fixed and moving rows drop equal enthalpy. Velocity triangles, one at inlet and one at outlet, encode both designs and are the examiner's favourite object.",
              "Compounding exists because a single stage cannot absorb a modern enthalpy drop. One stage dropping boiler-to-condenser pressure would demand blade speeds no material tolerates - de Laval's single-wheel turbine survives only in small ratings. Pressure compounding, the Rateau scheme, divides the total drop across several impulse stages in series, each pair of nozzle row and blade row seeing a fraction. Velocity compounding, the Curtis stage, keeps one nozzle row but absorbs the fast jet in two or three moving blade rows separated by fixed guide blades that redirect without pressure change. Real machines blend both schemes with reaction blading in the low-pressure cylinder and a Curtis or Rateau control stage at the high-pressure inlet.",
              "Real turbines lose work at every interface: nozzle and blade friction, leakage through gland seals and blade tip clearances, wetness drag in the last stages, leaving loss at the exhaust hood, and mechanical friction. The reheat factor - the ratio of the sum of stage isentropic drops to the overall isentropic drop - partially repays these losses and typically sits near 1.04 to 1.08. Internal efficiencies of 85 to 90 percent are routine, with governing by throttle, nozzle group or bypass control matching output to load. Sketch two velocity triangles and the compounding schemes correctly and the 7 marks are largely banked; the numerical traps are always the blade speed ratio and the diagram directions.",
            ],
            bullets: [
              "Impulse stage: entire pressure drop in fixed nozzles; moving blades deflect the jet at nearly constant pressure - de Laval principle.",
              "Reaction stage: pressure drop shared between fixed and moving rows; the Parsons fifty-percent design drops equal enthalpy in each.",
              "Compounding by pressure (Rateau): the total drop is split across several impulse stages in series, keeping blade speeds moderate.",
              "Compounding by velocity (Curtis): one nozzle row, then two or three moving rows with fixed guide blades between them absorbing the fast jet.",
              "Losses and metrics: nozzle and blade friction, leakage, wetness and leaving losses; reheat factor 1.04-1.08; internal efficiency 85-90 percent; throttle or nozzle governing.",
            ],
            table: {
              caption: "Impulse versus reaction stages.",
              headers: ["Aspect", "Impulse", "Reaction"],
              rows: [
                ["Pressure drop", "Fixed nozzles only", "Shared by fixed and moving rows"],
                ["Moving blades", "Nozzles not needed; deflect jet", "Act as nozzles too"],
                ["Blade shape", "Symmetric profile", "Aerofoil, converging passage"],
                ["Stage count for same drop", "Fewer, larger drops", "Many small drops"],
                ["Typical duty", "HP control and Curtis stages", "HP-LP cylinder blading (Parsons)"],
                ["Efficiency at part load", "Falls faster", "Flatter, suits variable load"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Identify the turbine stage from where the pressure drops",
              caption: "One question - where does the steam expand - classifies every stage.",
              start: "A pressure drop must become shaft work",
              branches: [
                { label: "All drop in the fixed nozzles", outcome: "impulse stage - blades deflect the jet only", good: true },
                { label: "Drop shared between fixed and moving rows", outcome: "50 percent reaction (Parsons) stage", good: true },
                { label: "One nozzle row feeding two or three moving rows", outcome: "Curtis velocity-compounded stage", good: true },
                { label: "Entire drop across moving blades alone", outcome: "not a practical design - no workable entry swirl", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Velocity triangles decide the paper",
              body: "The classic 7-mark question asks impulse versus reaction with velocity triangles. Draw the two triangles on a common u line, mark V1, Vr1 and the work done as u times the change of whirl velocity, and state the optimum blade-speed ratio for an impulse stage as roughly 0.5 cosine of the nozzle angle. Missing triangles caps the answer at half marks.",
            },
            keyTerms: [
              { term: "Impulse turbine", definition: "A turbine in which the whole pressure drop occurs in fixed nozzles and the moving blades only deflect the steam jet." },
              { term: "Reaction turbine", definition: "A turbine in which the pressure drop is shared between fixed and moving blade rows, the moving rows acting as nozzles as well." },
              { term: "Compounding", definition: "Dividing the total enthalpy drop over multiple stages, by pressure (Rateau) or by velocity (Curtis), to keep blade speeds within material limits." },
            ],
            examQuestions: [
              {
                q: "Differentiate between impulse and reaction steam turbines with sketches and velocity triangles, and explain pressure compounding and velocity compounding with diagrams.",
                marks: 7,
                outline: [
                  "Impulse principle: pressure drop in fixed nozzles; draw the stage with velocity triangles.",
                  "Reaction principle: drop shared with moving blades; draw the aerofoil passage and its triangles.",
                  "Tabulate differences: drop location, blade shape, stage count, part-load behaviour.",
                  "Why compounding: single-stage blade speed would exceed material limits.",
                  "Pressure compounding (Rateau): sketch several nozzle-blade pairs sharing the drop.",
                  "Velocity compounding (Curtis): sketch one nozzle row, two moving rows and a fixed guide row.",
                  "State the optimum blade-speed ratio for an impulse stage and its effect on efficiency.",
                ],
              },
              {
                q: "Define degree of reaction and state its value for a Parsons stage.",
                marks: 2,
              },
              {
                q: "State two reasons why compounding of steam turbine stages is necessary.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Condensers and vacuum systems",
            body: [
              "The condenser anchors the bottom of the Rankine cycle. By condensing exhaust steam at the lowest pressure the cooling water temperature permits - typically 0.05 to 0.1 bar, a vacuum of about 92 to 95 percent of a perfect one - it maximises the enthalpy drop through the turbine and therefore the work extracted from every kilogram of steam. It also recovers the condensate, which is distilled water worth its weight in boiler longevity, and returns it to the feed train. Each millibar of lost vacuum is heat rate wasted, which is why plants instrument the condenser more closely than almost any other component.",
              "Condensers split into two clans. Jet condensers - low-level, high-level and ejector types - spray cooling water directly into the exhaust steam; contact condenses the mixture, and heat transfer is violent and efficient, but the condensate mixes with the cooling water and is lost to the cycle, so jet condensers serve only small or marine plant where water is plentiful and feedwater quality forgiving. Surface condensers are shell-and-tube exchangers: steam washes over the outside of thousands of tubes carrying cooling water in two passes, condensate drops to the hotwell as pure water, and air is extracted at the coldest corner by steam-jet ejectors or vacuum pumps. Regenerative and evaporative variants refine the same idea.",
              "Performance is watched through three numbers. Vacuum efficiency compares the attained vacuum with the maximum the cooling water temperature allows. The circulating water temperature rise, typically 8 to 10 K, and the terminal temperature difference between steam and outlet cooling water, a healthy 3 to 8 K, together diagnose fouling and air binding: a rising TTD shouts dirty tubes, while a cold air cooler zone and rising dissolved oxygen shout air in-leakage. Air is the vacuum's enemy because it partial-pressures the steam and blankets tubes with an insulating film. Design details - divided water boxes permitting half-side cleaning while running, titanium tubes for seawater, and deaeration downstream - complete the story examiners want.",
            ],
            bullets: [
              "Purpose of the condenser: hold the lowest practical exhaust pressure, recover pure condensate for the boiler, and deaerate the feed train.",
              "Jet condensers (low-level, high-level, ejector): cooling water mixes with steam; cheap and compact, but condensate is lost to the cycle.",
              "Surface condensers: steam condenses outside tubes, cooling water flows inside; condensate recovered pure; air extracted by ejectors or vacuum pumps.",
              "Key metrics: vacuum efficiency = attained vacuum / max attainable; circulating water rise 8-10 K; terminal temperature difference 3-8 K.",
              "Air is the enemy: it raises back pressure and blankets tubes; rising TTD means fouling, rising dissolved oxygen means air in-leakage.",
            ],
            table: {
              caption: "Jet versus surface condensers.",
              headers: ["Aspect", "Jet condenser", "Surface condenser"],
              rows: [
                ["Heat transfer", "Direct contact with sprayed water", "Through tube walls, no contact"],
                ["Cooling water needed", "More, and of any quality", "Less; quality matters for tubes"],
                ["Condensate", "Lost into the cooling water", "Fully recovered as pure feed"],
                ["Vacuum attainable", "Limited by mixing", "Higher, with air extraction"],
                ["Cost and maintenance", "Cheap, simple", "Costly tubes, fouling watch"],
                ["Application", "Small and marine plant", "Every utility steam station"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Condensate path in a regenerative feed train",
              caption:
                "From turbine exhaust back to the boiler - the hotwell starts a journey that ends in bled-steam heating and deaeration.",
              steps: [
                { label: "Turbine exhaust enters the condenser shell", note: "washed over the tube bundle" },
                { label: "Condensate collects in the hotwell", note: "pure water at vacuum" },
                { label: "Extraction pump to low-pressure heaters", note: "bled steam raises its temperature" },
                { label: "Deaerator strips dissolved gases", note: "oxygen below 5-7 parts per billion" },
                { label: "Boiler feed pump and economiser", note: "back to the boiler at full pressure" },
              ],
            },
            callout: {
              type: "warning",
              title: "The condenser does not create vacuum",
              body: "Write carefully: condensing steam collapses its own volume and creates the vacuum; the condenser merely maintains it by continuously condensing and removing air through ejectors. Saying the pump or ejector 'creates' the vacuum is the classic conceptual error examiners look for.",
            },
            keyTerms: [
              { term: "Vacuum efficiency", definition: "The ratio of the vacuum actually maintained in a condenser to the maximum vacuum possible with the given cooling water inlet temperature." },
              { term: "Surface condenser", definition: "A shell-and-tube condenser in which steam condenses on tube surfaces while cooling water flows inside, keeping the two streams separate." },
              { term: "Terminal temperature difference", definition: "The difference between the saturation temperature of exhaust steam and the outlet temperature of circulating cooling water; a fouling and air-leakage diagnostic." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of a surface condenser with a neat sketch, define vacuum efficiency and terminal temperature difference, and state the effects of air leakage on condenser performance.",
                marks: 7,
                outline: [
                  "State the functions: vacuum, condensate recovery, deaeration.",
                  "Sketch the shell, tube bundle, water boxes, hotwell, air cooling zone and ejector.",
                  "Working: steam on the shell side, cooling water in two passes inside tubes, condensate to hotwell.",
                  "Define vacuum efficiency with the ideal vacuum from cooling water inlet temperature.",
                  "Define terminal temperature difference with healthy values of 3-8 K.",
                  "Air leakage effects: raised back pressure, blanketing of tubes, falling vacuum efficiency, increased dissolved oxygen.",
                  "Mention divided water boxes and online tube cleaning as practice.",
                ],
              },
              {
                q: "Give two advantages of a surface condenser over a jet condenser.",
                marks: 2,
              },
              {
                q: "Why must condensate be deaerated before it re-enters the boiler, and where is this done?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Cooling towers and cogeneration",
            body: [
              "When a plant cannot once-through its cooling water to a river or sea, the cooling tower closes the loop, rejecting the condenser's low-grade heat to the atmosphere almost entirely by evaporation. Its three defining numbers are the cooling range, the drop in water temperature across the tower, equal to condenser outlet minus inlet temperature; the approach, the cold water temperature above the ambient wet bulb, the tower's true quality metric; and the effectiveness, range over range plus approach. Natural draught towers pull air with the buoyancy of their own warm plume through a hyperbolic concrete shell a hundred metres tall; mechanical draught towers force or induce the airflow with fans, cheaper to build and far more compact per megawatt.",
              "Water balance is where the numerical marks live. Evaporation loss runs about 1.5 percent of circulation per 10 deg C of range; drift, the water carried out as droplets, is held near 0.05 percent by eliminators; and blowdown is purged to keep dissolved solids from concentrating past the chosen cycles of concentration. Make-up equals evaporation plus drift plus blowdown. The fill - splash or film - spreads water into thin sheets so a few degrees of approach are won with modest fan power. In the exam, write the heat balance across the tower and the make-up equation before touching numbers, and state that performance is set by wet bulb, not dry bulb, temperature.",
              "Cogeneration sells the reject heat instead of evaporating it. In a topping cycle, fuel first makes electricity and the exhaust or bled steam then serves process heat: a back-pressure turbine discharges its whole exhaust at process pressure, while a pass-out turbine bleeds the process steam and condenses the remainder. In a bottoming cycle, a furnace or process releases heat first and only the tail generates power. Because heat demand is met without extra fuel, the fuel utilisation factor climbs from about 40 percent in a condensing station to 75 or 85 percent in a well-matched cogeneration plant - the reason sugar mills burning bagasse, paper mills, textile complexes and petrochemical works all run their own steam cycles. The Python below works a tower balance; the same discipline earns the cogeneration numericals.",
            ],
            bullets: [
              "Cooling range = hot water in minus cold water out; approach = cold water minus ambient wet bulb; effectiveness = range / (range + approach).",
              "Natural draught: hyperbolic concrete shell, buoyancy-driven air, no fans, huge capital; mechanical draught: fan-driven, compact, higher running cost.",
              "Water balance: make-up = evaporation (about 1.5% per 10 deg C of range) + drift (about 0.05%) + blowdown to hold cycles of concentration.",
              "Fill types - splash and film - extend the water surface; eliminators cut drift; wet bulb temperature fixes the tower's limit.",
              "Cogeneration: topping cycles (back-pressure or pass-out turbines) and bottoming cycles lift fuel utilisation from about 40 percent to 75-85 percent in sugar, paper and chemical plants.",
            ],
            codeExample: {
              language: "python",
              caption: "Cooling tower heat and water balance.",
              code: `# Cooling tower design check (typical values)
hot_water_c, cold_water_c, wet_bulb_c = 40.0, 31.0, 26.0

cooling_range = hot_water_c - cold_water_c
approach = cold_water_c - wet_bulb_c
effectiveness = cooling_range / (cooling_range + approach)

circulation_m3h = 25000.0
evaporation_pct = 0.15 * cooling_range   # approx 1.5% per 10 deg C range
drift_pct = 0.05                          # drift eliminators fitted
cycles = 4.0                              # cycles of concentration

blowdown_pct = evaporation_pct / (cycles - 1) - drift_pct
makeup_pct = evaporation_pct + drift_pct + blowdown_pct
makeup_m3h = makeup_pct / 100.0 * circulation_m3h

print(f"Range {cooling_range:.1f} deg C, approach {approach:.1f} deg C")
print(f"Effectiveness {effectiveness:.2f}")
print(f"Make-up {makeup_pct:.2f}% of circulation"
      f" = {makeup_m3h:.0f} m3/h")`,
            },
            diagram: {
              kind: "cycle",
              title: "The cooling tower water loop",
              caption:
                "A closed recirculating loop: every kilogram of steam condensed in the condenser is matched by water cooled in the tower.",
              steps: [
                { label: "Warm water leaves the condenser", note: "about 40 deg C" },
                { label: "Distribution system sprays it over fill", note: "splash or film surface" },
                { label: "Air flows across the water film", note: "natural draught or fans" },
                { label: "Evaporation cools the water", note: "latent heat leaves with the plume" },
                { label: "Cold basin water returns to the condenser", note: "approach above wet bulb" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two equations, most of the marks",
              body: "Tower numericals are solved by two lines: the heat balance (water heat loss equals evaporation latent heat plus air enthalpy rise) and make-up = evaporation + drift + blowdown. Cogeneration numericals reduce to energy input equals power plus useful heat over fuel input. Write both symbolically before substituting - method marks attach to the symbols.",
            },
            keyTerms: [
              { term: "Cooling range", definition: "The difference between the temperatures of water entering and leaving a cooling tower." },
              { term: "Approach", definition: "The difference between the cold water temperature leaving a tower and the ambient wet bulb temperature; the tower's quality metric." },
              { term: "Cogeneration", definition: "Sequential production of electrical power and useful heat from the same fuel, raising the fuel utilisation factor far above condensing operation." },
            ],
            examQuestions: [
              {
                q: "Define cooling range, approach and effectiveness of a cooling tower. Compare natural and mechanical draught towers, and write the tower water balance for make-up, evaporation, drift and blowdown.",
                marks: 7,
                outline: [
                  "Define range, approach and effectiveness with a sketch of the tower.",
                  "Natural draught: hyperbolic concrete shell, buoyant plume, no fan power, large capital.",
                  "Mechanical draught: forced and induced fan types, compact, higher energy and maintenance.",
                  "Fill types and drift eliminators in one line each.",
                  "Write make-up = evaporation + drift + blowdown, with evaporation about 1.5% per 10 deg C of range.",
                  "Explain cycles of concentration controlling blowdown.",
                  "Conclude that wet bulb temperature - not dry bulb - fixes the tower limit, and give typical range and approach values.",
                ],
              },
              {
                q: "Differentiate between topping and bottoming cycles of cogeneration with one example each.",
                marks: 2,
              },
              {
                q: "Compare back-pressure and pass-out turbines as cogeneration prime movers.",
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
      title: "Hydro, Gas and Diesel Power Plants",
      summary:
        "The prime movers beyond steam: hydroelectric schemes and the Pelton, Francis and Kaplan turbine families they select by head; gas turbine plants on the Brayton cycle with regeneration, intercooling and reheat; diesel plants and their supporting systems; and the combined cycle that stacks a gas turbine above a steam cycle to approach 60 percent efficiency.",
      chapter: {
        number: "03",
        title: "Water Power, Gas Turbines and Diesel Generation",
        intro:
          "Unit III broadens the prime-mover repertoire. Hydro plants convert stored water's potential into rotation, with Pelton, Francis and Kaplan turbines chosen by head and specific speed, and pumped storage levelling the daily curve. Gas turbine plants run the Brayton cycle, whose regeneration, intercooling and reheat modifications form the most analytically satisfying 7-mark questions in the paper. Diesel plants supply standby and remote power with five support systems around a compact engine, and the combined cycle weds gas turbine exhaust to a steam cycle through the heat recovery steam generator.",
        inOneBreath:
          "Hydro power is 9.81 times discharge times net head times overall efficiency in kilowatts; high-head schemes drive Pelton impulse wheels with a jet velocity near 0.98 root 2gH and buckets at about 0.46 of jet speed, medium heads suit the Francis mixed-flow reaction turbine inside a spiral casing with wicket gates and a draft tube, and low heads with large discharge suit the Kaplan axial machine with its flat part-load curve; the draft tube recovers kinetic energy and permits the runner to sit above tailrace, while cavitation threatens wherever local pressure falls to vapour pressure; gas turbines run the Brayton cycle with compressor, combustor and turbine and a punishing back-work ratio near half, improved by regeneration, intercooling and reheat - each alone hurting efficiency, all three together raising it; diesel plants wrap five systems - fuel, lubrication, cooling, starting air and intake-exhaust - around a quick-starting engine for standby and remote duty; and the combined cycle recovers gas turbine exhaust in an HRSG to raise steam for a bottoming turbine, lifting efficiency from the mid-thirties to 55 percent and beyond.",
        sections: [
          {
            number: "3.1",
            title: "Hydroelectric plants and the Pelton turbine",
            body: [
              "Hydroelectric generation converts the potential energy of stored water into electricity, and the governing relation is compact: power in kilowatts equals 9.81 times discharge in cubic metres per second times net head in metres times overall efficiency. Plants are classified by head - high above about 250 m, medium 30 to 250 m, low below 30 m - and by layout: run-of-river stations take the flow as it comes, storage stations dam a reservoir to firm it through seasons, and pumped storage stations buy cheap off-peak energy to lift water and sell it back at peak. Each cubic metre per second at a hundred metres of head is very nearly a megawatt, a handy exam check.",
              "The water path is standard: a catchment feeds the reservoir behind the dam; an intake with trash racks leads to a pressure tunnel; a surge tank opens to atmosphere to absorb the water hammer of load rejection and protect the penstock; the steel penstock drops to the powerhouse; and after the turbine the tailrace returns water to the river. Governing is hydraulic on the spear valve, which changes jet diameter to follow load, with a deflector standing by to bend the jet clear of the buckets during sudden rejection, because closing the spear too fast would wreck the penstock with pressure rise.",
              "The Pelton wheel is the high-head impulse turbine: one or more jets, each accelerated in a nozzle to Cv root 2gH, strike double-hemispherical buckets carrying a central splitter ridge that divides the jet and turns it through about 165 degrees so it leaves with almost no residual velocity. The optimum bucket speed is about 0.46 times jet velocity, fixing wheel diameter against rotational speed. Specific speed of a single jet runs about 10 to 35 in SI units, so Pelton territory is the Himalayan high fall with modest discharge; more jets raise specific speed proportionally. The Python snippet sizes a typical unit, and every number in it - jet velocity, bucket speed, wheel rpm - is a standard 7-mark numerical result.",
            ],
            bullets: [
              "Hydro power: P = 9.81 x Q x H x overall efficiency (kW, with Q in m3/s and H in m); classification by head - high, medium, low - and by layout - run-of-river, storage, pumped storage.",
              "Water path essentials: catchment and reservoir, dam, intake with trash rack, surge tank against water hammer, penstock, powerhouse, tailrace.",
              "Governing: spear valve changes jet diameter to follow load; a deflector bends the jet clear of buckets on sudden rejection to spare the penstock.",
              "Pelton wheel: impulse turbine for high head and low discharge; jet velocity = Cv root (2gH) with Cv near 0.98; buckets turn the jet about 165 degrees.",
              "Optimum bucket speed is about 0.46 times jet velocity; single-jet specific speed roughly 10-35 (SI); up to six jets on vertical-axis units raise it proportionally.",
            ],
            codeExample: {
              language: "python",
              caption: "Sizing a Pelton wheel for a high-head site.",
              code: `import math

g = 9.81
gross_head = 500.0             # m
net_head = 0.95 * gross_head   # 5% penstock friction loss
Cv = 0.98                      # nozzle velocity coefficient

jet_velocity = Cv * math.sqrt(2 * g * net_head)
bucket_speed = 0.46 * jet_velocity      # optimum u just below V/2

wheel_diameter = 1.8           # m
rpm = 60 * bucket_speed / (math.pi * wheel_diameter)

flow_per_jet = 1.5             # m3/s
hydraulic_kw = 1000 * g * flow_per_jet * net_head / 1000.0
shaft_kw = 0.88 * hydraulic_kw  # overall efficiency

print(f"Jet velocity {jet_velocity:.1f} m/s, u = {bucket_speed:.1f} m/s")
print(f"Wheel speed {rpm:.0f} rpm")
print(f"Hydraulic {hydraulic_kw:.0f} kW -> shaft {shaft_kw:.0f} kW per jet")`,
            },
            diagram: {
              kind: "pipeline",
              title: "Water path of a high-head Pelton scheme",
              caption:
                "From reservoir to tailrace: the surge tank is the component examiners ask you to justify.",
              stages: [
                { label: "Reservoir and dam", note: "storage firms the flow" },
                { label: "Surge tank", note: "absorbs water hammer" },
                { label: "Penstock", note: "steel conduit under full head" },
                { label: "Nozzle and spear valve", note: "pressure to jet velocity" },
                { label: "Pelton runner", note: "buckets turn the jet" },
                { label: "Tailrace", note: "water returned to the river" },
              ],
            },
            callout: {
              type: "exam",
              title: "The selection table is expected",
              body: "Learn the turbine selection ladder by specific speed: Pelton 10-35, Francis 60-300, Kaplan 300-1000 (SI, kW-m units), with Pelton above 250 m head, Francis 30-250 m and Kaplan below 30 m. A two-mark question on this ladder appears almost every session, and the 7-mark Pelton question expects it as context.",
            },
            keyTerms: [
              { term: "Gross head", definition: "The vertical difference between the water level at the intake and the tailrace level at the turbine exit, before friction losses." },
              { term: "Specific speed", definition: "The speed of a geometrically similar turbine developing unit power under unit head; it fixes the turbine type for a site." },
              { term: "Pumped storage plant", definition: "A hydro station that pumps water to an upper reservoir during cheap hours and generates during peak hours, levelling the load curve." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a Pelton wheel with a neat sketch and velocity triangles, and derive the condition for maximum efficiency in terms of bucket speed and jet velocity.",
                marks: 7,
                outline: [
                  "Classify the Pelton as an impulse turbine for high head, low discharge; single-jet specific speed 10-35.",
                  "Sketch nozzle with spear valve, buckets with splitter ridge, casing and brake jet.",
                  "Jet velocity from Cv root (2gH); draw inlet and outlet velocity triangles on the common u line.",
                  "Work per kg equals the change of whirl velocity times u; exit whirl ideally zero.",
                  "Show maximum efficiency when bucket speed is about half jet speed (0.46 with losses).",
                  "Governing: spear valve for load following, deflector for sudden rejection.",
                  "State multi-jet practice and the Himalayan high-head suitability.",
                ],
              },
              {
                q: "What is the function of a surge tank in a hydroelectric plant?",
                marks: 2,
              },
              {
                q: "Define specific speed and state its range for Pelton, Francis and Kaplan turbines.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Francis and Kaplan turbines",
            body: [
              "Reaction turbines keep the water pressurised as it passes through the runner, so the pressure drop happens partly on the blades themselves and the machine runs full of water. The Francis turbine is the mixed-flow design of the medium heads, 30 to 250 m: a spiral casing distributes flow evenly around a stay ring, adjustable guide vanes - wicket gates - control both direction and quantity, the runner admits water radially and discharges it axially, and the draft tube below recovers the leaving kinetic energy. Specific speed runs 60 to 300 in SI units. Its part-load efficiency is decent but falls at deep throttling because the fixed runner passages were shaped for one flow.",
              "The draft tube deserves its own paragraph because it is the answer to two questions at once. As a diverging passage from runner exit to tailrace, it converts the residual kinetic energy of the exit flow into pressure rise, letting the machine use a larger exit velocity without losing head, and it permits the runner to be installed above the tailrace level - safe from flooding - while still exploiting the full head down to the water surface. Conical and elbow shapes are standard. But the draft tube also creates cavitation risk: at runner exit the local pressure is lowest, and if it approaches the vapour pressure of water, bubbles form and collapse violently on the blades. Thoma's cavitation number compares the available suction head with the turbine's critical value; the cure is installing the runner deeper below tailrace.",
              "The Kaplan turbine is the low-head, large-discharge extreme: axial flow through a propeller runner whose blades rotate on their own hubs, paired with the adjustable wicket gates. Because both blade angle and gate opening adapt, the Kaplan holds a flat efficiency curve across a wide load range where the fixed-blade propeller collapses at part load. Specific speed runs 300 to 1000, and the machine earns its living on run-of-river and canal drops with heads below about 30 m. Bulb and tubular variants put the generator inside the water passage for the very lowest heads, including tidal service. In the exam, the Francis sketch with its spiral casing and draft tube and the Kaplan's flat part-load curve are the two scoring exhibits.",
            ],
            bullets: [
              "Reaction turbines drop pressure across the runner and run water-filled; Francis is mixed-flow for medium heads (30-250 m, specific speed 60-300 SI).",
              "Spiral casing distributes flow uniformly; stay vanes and adjustable guide vanes (wicket gates) set flow direction and quantity.",
              "Draft tube: diverging passage recovering exit kinetic energy as pressure, and allowing the runner to sit above tailrace without head loss.",
              "Cavitation threatens at runner exit where pressure is lowest; Thoma's number against the critical value decides safe submergence depth.",
              "Kaplan: axial flow with adjustable runner blades plus gates - flat part-load efficiency; specific speed 300-1000; suits heads below 30 m and bulb installations.",
            ],
            table: {
              caption: "Francis versus Kaplan.",
              headers: ["Feature", "Francis", "Kaplan"],
              rows: [
                ["Flow through runner", "Mixed: radial in, axial out", "Purely axial"],
                ["Head range", "30-250 m", "Below about 30 m"],
                ["Specific speed (SI)", "60-300", "300-1000"],
                ["Runner blades", "Fixed", "Adjustable on the hub"],
                ["Part-load efficiency", "Good, falls when throttled", "Flat across a wide band"],
                ["Typical service", "Storage and canal medium-head", "Run-of-river, tidal, bulb units"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Water path through a Francis turbine",
              caption:
                "Spiral casing to draft tube: every component in this line is a labelled mark in the sketch question.",
              steps: [
                { label: "Penstock delivers water", note: "full operating head" },
                { label: "Spiral casing", note: "distributes flow evenly around the stay ring" },
                { label: "Guide vanes", note: "wicket gates set angle and throttle flow" },
                { label: "Runner", note: "mixed-flow passage extracts pressure and kinetic energy" },
                { label: "Draft tube", note: "recovers velocity head, sets the runner above tailrace" },
                { label: "Tailrace", note: "back to the river" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the spiral",
              body: "In the Francis 7-mark question, the spiral casing must look like a spiral tapering around the runner, with stay vanes, guide vanes, runner and draft tube all labelled, and an arrow showing flow direction. Then one sentence on draft tube function and one on cavitation - those two sentences are separately awarded.",
            },
            keyTerms: [
              { term: "Draft tube", definition: "A diverging passage at reaction turbine exit that converts kinetic energy into pressure rise and allows the runner to be set above tailrace level." },
              { term: "Cavitation", definition: "Formation and violent collapse of vapour bubbles in low-pressure zones of a hydraulic machine, eroding blade surfaces." },
              { term: "Wicket gates", definition: "The adjustable guide vanes surrounding a reaction turbine runner that regulate both the direction and quantity of flow." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a Francis turbine with a neat sketch, and derive the function of the draft tube. Why does cavitation occur and how is it prevented?",
                marks: 7,
                outline: [
                  "Position Francis as the medium-head mixed-flow reaction turbine, specific speed 60-300.",
                  "Sketch spiral casing, stay vanes, guide vanes, runner and draft tube with flow arrows.",
                  "Working: pressure energy converts progressively in gates and runner; water fills all passages.",
                  "Guide vane governing for load changes.",
                  "Draft tube: kinetic-to-pressure recovery and runner setting above tailrace; conical and elbow types.",
                  "Cavitation at runner exit when local pressure nears vapour pressure; Thoma's number and critical sigma.",
                  "Prevention: deeper runner setting, smoother blades, cavitation-resistant material.",
                ],
              },
              {
                q: "State two differences between a propeller turbine and a Kaplan turbine.",
                marks: 2,
              },
              {
                q: "Why does cavitation occur at the runner exit of a reaction turbine, and what is the remedy?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Gas turbine plants and Brayton cycle improvements",
            body: [
              "The open-cycle gas turbine plant is three machines on one shaft line: an axial compressor ingesting ambient air and raising it to the combustion pressure, a combustor where fuel burns continuously to reach firing temperatures of 1100 to 1500-plus deg C permitted by blade cooling and materials, and a turbine that expands the gas back to atmosphere while producing two to three times the power the compressor consumes. The Brayton cycle's thermal efficiency for ideal air-standard analysis is one over the pressure ratio raised to gamma-minus-one over gamma, and its defining burden is the back work ratio: roughly half of turbine output is eaten by the compressor, so component efficiency losses bite gas turbines far harder than steam plants.",
              "Improvements exploit the one luxury the Brayton cycle has - a hot exhaust. Regeneration routes the exhaust, still 450 to 550 deg C, through a heat exchanger that preheats compressed air before the combustor, cutting fuel for the same firing temperature and adding five to ten efficiency points when the pressure ratio is moderate. Intercooling cools the air between compressor stages, shrinking compressor work; reheating reheats the gas between turbine stages, adding turbine work. The exam's famous subtlety is that intercooling and reheating by themselves lower thermal efficiency - they push more heat rejection - and only in combination with regeneration do all three raise it. Optimum pressure ratio shifts accordingly, small with regeneration, large without.",
              "In practice the gas turbine is the fleet's athlete. Simple-cycle efficiency sits near 30 to 38 percent, with regenerative and recuperative designs higher; hot-day output falls with air density, and compressor fouling shows quickly as heat rate drift, so online washing and inlet chilling are routine. Aeroderivative engines start in minutes and serve peak and reserve duty; heavy frame machines anchor combined cycle blocks. Indian gas stations, built for domestic and imported gas, have lived through fuel supply swings that shaped their duty cycle - a real-world reminder that cycle diagrams are only half the story. The Python model below prices regeneration honestly, with real component efficiencies.",
            ],
            bullets: [
              "Open-cycle plant: compressor, combustor, turbine on one line; ideal Brayton efficiency = 1 - 1 / rp^((gamma-1)/gamma); firing temperature is blade-material limited.",
              "Back work ratio near 0.5: the compressor consumes about half the turbine output, so component efficiencies dominate plant performance.",
              "Regeneration: exhaust at 450-550 deg C preheats compressed air; fuel saved for the same firing temperature; five to ten efficiency points at moderate pressure ratio.",
              "Intercooling cuts compressor work; reheating adds turbine work; each alone lowers thermal efficiency and only pays when combined with regeneration.",
              "Practice: simple-cycle efficiency 30-38 percent; hot days cut output with air density; aeroderivative units start in minutes for peak duty.",
            ],
            codeExample: {
              language: "python",
              caption: "Brayton cycle with regeneration and real component efficiencies.",
              code: `# Air-standard Brayton cycle with a regenerator
import math

cp, k = 1.005, 1.4
t1 = 300.0                 # ambient air, K
rp = 12.0                  # pressure ratio
t3 = 1400.0                # turbine inlet temperature, K
eta_c, eta_t = 0.85, 0.88 # compressor and turbine isentropic efficiencies
regen_eff = 0.75           # regenerator effectiveness

t2 = t1 * rp ** ((k - 1) / k) / eta_c
t4 = t3 * (1 - eta_t * (1 - rp ** (-(k - 1) / k)))

w_compressor = cp * (t2 - t1)
w_turbine = cp * (t3 - t4)
w_net = w_turbine - w_compressor

t5 = t2 + regen_eff * (t4 - t2)   # air preheated by exhaust
q_in = cp * (t3 - t5)
efficiency = w_net / q_in

print(f"Compressor exit {t2:.1f} K, turbine exit {t4:.1f} K")
print(f"Back work ratio {w_compressor / w_turbine:.2f}")
print(f"Net work {w_net:.1f} kJ/kg")
print(f"Cycle efficiency {efficiency:.3f}")`,
            },
            diagram: {
              kind: "cycle",
              title: "The regenerative Brayton cycle",
              caption:
                "The regenerator sits between compressor and combustor, trading exhaust heat for fuel.",
              steps: [
                { label: "Axial compressor", note: "raises air to combustion pressure" },
                { label: "Regenerator", note: "absorbs exhaust heat into the compressed air" },
                { label: "Combustor", note: "firing temperature set by blade limits" },
                { label: "Gas turbine", note: "expansion, two parts work, one drives the compressor" },
                { label: "Exhaust through regenerator", note: "gives up heat, then the stack" },
              ],
            },
            callout: {
              type: "warning",
              title: "The trap that fails a paper",
              body: "Writing that intercooling or reheating alone improves thermal efficiency is the single most penalised error in this unit. The correct chain is: intercooling and reheat increase specific work but send exhaust out hotter, so efficiency falls; add regeneration to harvest that hotter exhaust, and all three together raise both work and efficiency. State this explicitly.",
            },
            keyTerms: [
              { term: "Back work ratio", definition: "The ratio of compressor work to turbine work in a gas turbine plant, typically about one half." },
              { term: "Regeneration", definition: "Preheating compressed air with hot turbine exhaust in a heat exchanger before combustion, saving fuel." },
              { term: "Intercooling", definition: "Cooling the working fluid between compressor stages to reduce the compression work." },
            ],
            examQuestions: [
              {
                q: "Describe the Brayton cycle with regeneration, intercooling and reheating, showing the effect of each modification on net work and thermal efficiency, and explain why the three must be used together.",
                marks: 7,
                outline: [
                  "Draw the open-cycle plant layout and the T-s diagram with numbered states.",
                  "Write the ideal efficiency expression and note the back work ratio near 0.5.",
                  "Regeneration: heat exchanger placement, effectiveness, fuel saving; efficiency gain at moderate pressure ratio.",
                  "Intercooling: between compressor stages; compressor work falls; specific work rises.",
                  "Reheating: between turbine stages; turbine work rises; exhaust leaves hotter.",
                  "Show that intercooling or reheat alone lowers thermal efficiency because exhaust leaves hotter.",
                  "Conclude: regeneration harvests the hotter exhaust, and only the combination raises both work and efficiency.",
                ],
              },
              {
                q: "Why is the back work ratio of a gas turbine plant high, and what does it imply for component efficiencies?",
                marks: 2,
              },
              {
                q: "State the effect of a hot ambient day on gas turbine output and heat rate, and name two countermeasures.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Diesel power plants",
            body: [
              "The diesel power plant wraps a compression-ignition engine - large, slow or medium speed, usually two-stroke, often burning heavy fuel oil - around a generator and supports it with five systems. Capacities are modest, from a couple of megawatts to about fifty per unit, but no other plant starts so fast or follows load so willingly, which fixes its duty: standby and emergency service, peak shaving, remote and island supply, mobile plants, and black-start duty for larger stations. Nuclear stations keep dedicated emergency diesel generators because a grid blackout must never find them without power for pumps.",
              "The five systems earn the sketch marks. The fuel system stores and settles oil, cleans it through filters and centrifuges, and injects it at 200 to well over 1000 bar by individual pumps or common rail, with a governor matching fuel quantity to load. The lubrication system force-feeds oil to bearings, liners and turbocharger under pressure, cooled in its own heat exchanger. The cooling system is a closed jacket-water circuit holding liner temperatures safe, rejecting heat through a radiator or heat exchanger. The starting system admits compressed air at 20 to 30 bar into working cylinders in firing order; and the intake and exhaust system filters air, silences both ends, and usually turbocharges - a heat balance sheet shows roughly a third of fuel energy to the shaft, a third to exhaust and jacket heat, much of it recoverable.",
              "The economics balance out cleanly. On the credit side: capital cost per kilowatt is the lowest of any plant, start-up takes seconds to minutes, part-load efficiency is excellent, cooling water demand is small, and no ash or large land footprint. On the debit side: fuel oil is the costliest energy per kilowatt-hour in the fleet, lubricating oil consumption and maintenance are high, noise and vibration need management, and engine life between overhauls is short against a steam turbine's decades. Hence the rule the exam repeats: diesel plant is for standby, remote and peak duty where energy cost matters less than availability - and heat balance sheets recover some of the penalty.",
            ],
            bullets: [
              "Plant duty: standby and emergency, peak shaving, remote and island grids, mobile sets, black-start service; unit sizes 2-50 MW; two-stroke medium-speed engines on heavy fuel.",
              "Fuel system: storage and settling tanks, filters and centrifuge, injection at 200-1000+ bar by pump or common rail, governor on fuel quantity.",
              "Lubrication: forced feed to bearings and liners through an oil cooler; cooling: closed jacket-water circuit with radiator or heat exchanger.",
              "Starting by compressed air at 20-30 bar admitted in firing order; intake filtered, exhaust silenced, turbocharging standard.",
              "Merits: lowest capital per kW, seconds-fast start, fine part-load efficiency, little water; Demerits: costly fuel, high maintenance and lube oil, noise, short overhaul life.",
            ],
            table: {
              caption: "The five systems of a diesel power plant.",
              headers: ["System", "Main equipment", "Function"],
              rows: [
                ["Fuel", "Tanks, filters, centrifuge, injection pump", "Store, clean and inject metered fuel"],
                ["Lubrication", "Oil pump, cooler, filters", "Force-feed oil to bearings and liners"],
                ["Cooling", "Jacket water circuit, radiator or exchanger", "Hold liner and head temperatures safe"],
                ["Starting", "Air receiver, admission valves", "20-30 bar air turns the engine from rest"],
                ["Air and exhaust", "Filters, silencers, turbocharger", "Clean intake, low noise, recovered exhaust work"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Support systems stacked around the engine-generator",
              caption:
                "The 7-mark sketch: engine set in the middle, all five systems labelled around it.",
              layers: [
                { label: "Engine-generator set", note: "common bed plate, flywheel, coupling" },
                { label: "Fuel system", note: "storage, cleaning, injection, governing" },
                { label: "Lubrication circuit", note: "pump, cooler, filters" },
                { label: "Jacket cooling circuit", note: "closed water loop with exchanger" },
                { label: "Compressed-air starting", note: "receiver and admission valves" },
                { label: "Intake and exhaust", note: "filters, silencers, turbocharger" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch with systems labelled",
              body: "The 7-mark layout question is marked by checklist: engine-generator in the centre, then one clearly labelled block and one-line function each for fuel, lubrication, cooling, starting and intake-exhaust. Add a heat balance line (about 36 percent to shaft, a third to jacket and exhaust heat) and the answer is complete.",
            },
            keyTerms: [
              { term: "Supercharging", definition: "Supplying the engine with air above atmospheric density, usually by exhaust-driven turbocharger, to raise power output." },
              { term: "Heat balance sheet", definition: "An account of how fuel energy divides among shaft work, cooling, exhaust, radiation and unaccounted losses." },
              { term: "Standby plant", definition: "A plant held ready to start and carry load when the main supply fails or peaks beyond it." },
            ],
            examQuestions: [
              {
                q: "Describe the general layout of a diesel power plant with its essential systems, and state its advantages, limitations and typical applications.",
                marks: 7,
                outline: [
                  "Draw the layout: engine-generator set with the five support systems around it.",
                  "Fuel system: storage, cleaning, injection and governing in one or two lines.",
                  "Lubrication, cooling and starting systems, each with equipment and function.",
                  "Intake, exhaust and turbocharging; mention exhaust heat recovery.",
                  "Heat balance: roughly 36 percent shaft, a third jacket plus exhaust heat.",
                  "Advantages: lowest capital per kW, fast start, part-load economy, small water need.",
                  "Limitations and applications: costly fuel and upkeep; standby, peak, remote and island duty.",
                ],
              },
              {
                q: "Why are diesel plants used mainly for standby, peak and remote duty rather than base load?",
                marks: 2,
              },
              {
                q: "What is supercharging in a diesel engine, and why is it almost universal in generating sets?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Combined cycle power plants",
            body: [
              "The combined cycle stacks two heat engines on one fuel input. The gas turbine takes the top, converting fuel at 1100 to 1600 deg C firing temperatures into 30 to 40 percent efficiency and exhausting gas still near 550 to 600 deg C - far too hot to waste. The heat recovery steam generator, a bank of economiser, evaporator and superheater surfaces arranged along the gas path, raises steam in that exhaust, and a bottoming steam turbine converts it. Overall efficiency becomes the gas turbine share plus the unrecovered remainder times the steam cycle's share of it, which is why the fleet runs 50 to 58 percent and the newest large blocks exceed 60 - the highest of any thermal plant.",
              "The HRSG is the marriage contract, and its vocabulary is examinable. Multipressure designs carry high, intermediate and low pressure drums to extract heat at matching temperature levels; once-through variants follow the Benson philosophy. The pinch point, the difference between the gas temperature leaving the evaporator and the saturation temperature, sizes the surface - a small pinch recovers more heat but costs more tube, and 8 to 15 K is typical. Duct burners can supplement firing to raise steam output for load peaks, and condensate preheating closes the loop with the steam plant's feed train. On the gas side, inlet air cooling and advanced turbine classes raise the top cycle, which the bottoming cycle inherits as richer exhaust.",
              "Configuration and duty complete the picture. A 1-on-1 block pairs one gas turbine with one HRSG and one steam turbine; 2-on-1 and 3-on-1 blocks share the steam turbine for better economics at scale. The combined cycle's virtues suit the renewable era: fast starts, steep ramp rates and two-shift tolerance let it follow solar and wind, while its modest specific emissions and water needs - dry cooling is common - ease siting. Indian examples anchor the theory: NTPC's Anta, Auraiya, Kawas and Gandhar stations, and several private regasified-LNG blocks on both coasts, run this cycle; quoting one as a case study converts a theory answer into an applied one.",
            ],
            bullets: [
              "Concept: gas turbine topping cycle plus HRSG-recovered steam bottoming cycle on a single fuel input; overall efficiency = eta_GT + (1 - eta_GT) x recovered share x eta_ST.",
              "Fleet efficiency 50-58 percent, the highest of any thermal plant; the newest large frames exceed 60 percent.",
              "HRSG: economiser, evaporator and superheater surfaces along the gas path; multipressure or once-through; duct burners for supplementary firing.",
              "Pinch point: gas temperature leaving the evaporator minus saturation temperature; small pinch recovers more heat but costs surface (8-15 K typical).",
              "Blocks are 1-on-1, 2-on-1 or 3-on-1; fast start and ramping suit renewable-heavy grids; Indian examples include Anta, Auraiya, Kawas and Gandhar.",
            ],
            codeExample: {
              language: "python",
              caption: "Combined cycle efficiency from the two shares.",
              code: `# Combined cycle efficiency from gas and steam shares
eta_gt = 0.34                  # gas turbine, simple cycle, LHV basis
recovery_share = 0.75          # fraction of GT exhaust heat usable in HRSG
eta_st = 0.32                  # steam turbine on the recovered heat

recovered = (1 - eta_gt) * recovery_share
eta_cc = eta_gt + recovered * eta_st

print(f"Simple gas cycle : {eta_gt*100:.1f} %")
print(f"Recovered heat   : {recovered*100:.1f}% of fuel input")
print(f"Combined cycle   : {eta_cc*100:.1f} %")`,
            },
            diagram: {
              kind: "pipeline",
              title: "The two trains of a combined cycle block",
              caption:
                "Gas train on top, steam train beneath: the HRSG is where the handover happens.",
              stages: [
                { label: "Gas turbine", note: "compressor, combustor, expander on one shaft" },
                { label: "GT generator", note: "about a third of fuel energy to power" },
                { label: "HRSG", note: "exhaust heat raises multipressure steam" },
                { label: "Steam turbine", note: "bottoming cycle on recovered heat" },
                { label: "Condenser and feed train", note: "condensate returns to the HRSG" },
              ],
            },
            callout: {
              type: "exam",
              title: "Derive, then number",
              body: "The 7-mark question wants the efficiency expression derived in two lines - gas turbine share plus unrecovered remainder times steam share - then a worked number (say eta_GT 0.34, recovery 0.75, eta_ST 0.32 giving about 0.50) and three advantages over simple cycle. Sketch the block with HRSG dead centre; the pinching of gas and steam temperatures around it is what the diagram is testing.",
            },
            keyTerms: [
              { term: "Heat recovery steam generator", definition: "A boiler that raises steam from gas turbine exhaust heat, coupling the topping and bottoming cycles." },
              { term: "Pinch point", definition: "The smallest temperature difference between the exhaust gas and the steam-water mixture inside an HRSG evaporator; it sizes the heat transfer surface." },
              { term: "Combined cycle efficiency", definition: "The overall efficiency of a gas-plus-steam plant: gas turbine share plus the unrecovered remainder times the bottoming cycle share." },
            ],
            examQuestions: [
              {
                q: "Explain the layout and working of a combined cycle power plant with a neat sketch, derive its overall efficiency, and state its advantages over a simple gas turbine plant.",
                marks: 7,
                outline: [
                  "Sketch the block: gas turbine, HRSG, steam turbine, condenser, with both generators.",
                  "Working: gas train first, exhaust at 550-600 deg C enters the HRSG, steam raised at several pressures.",
                  "Derive efficiency = eta_GT + (1 - eta_GT) x recovery share x eta_ST.",
                  "Insert representative numbers to show 50-58 percent overall.",
                  "Define pinch point and its effect on HRSG surface and cost.",
                  "Advantages: highest thermal efficiency, better heat rate, lower emissions per kWh, compact footprint.",
                  "Operational flexibility: fast start and ramping to support solar and wind; name an Indian station.",
                ],
              },
              {
                q: "Define the pinch point of an HRSG and state a typical value.",
                marks: 2,
              },
              {
                q: "State two reasons why combined cycle plants suit grids with large solar and wind capacity.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Nuclear and Renewable Power Plants",
      summary:
        "Fission physics and reactor essentials; the PWR, BWR and PHWR families and their Indian fleet; the fast breeder reactor, reactor safety philosophy and waste; solar photovoltaic and thermal plants with storage; and wind power plants from the Betz limit to grid integration.",
      chapter: {
        number: "04",
        title: "Fission to Photon: Reactors, Solar and Wind",
        intro:
          "Unit IV switches fuel from chemical to nuclear and then to the sun and wind. It begins with the fission chain reaction and the reactor components that tame it, compares the pressurised and boiling water reactors with India's heavy-water standard design, and follows the fast breeder through its sodium circuits before treating safety as an engineering system - defence in depth. The renewable half covers photovoltaic and concentrating solar plants with molten salt storage and wind turbines whose power equation is a cube law capped by the Betz limit.",
        inOneBreath:
          "A thermal neutron splitting U-235 releases about 200 MeV and 2-3 fresh neutrons; the effective multiplication factor k = 1 is criticality, held by boron or cadmium control rods; moderators - light water, heavy water, graphite - slow neutrons to thermal energies; coolants carry the fragment heat away; PWRs hold primary water liquid at about 155 bar and raise secondary steam in steam generators, BWRs boil the core and run a single radioactive loop, and PHWRs burn natural uranium in heavy water with online refuelling; fast breeders skip the moderator, convert blanket U-238 to Pu-239 with breeding ratio above one, and cool with liquid sodium in two loops; safety is defence in depth through five barriers from fuel matrix to emergency planning; solar PV turns photons into DC at 18-22 percent module efficiency while CSP focuses heat into trough or tower receivers with molten salt storage for evening supply; and wind power rises with the cube of velocity to a Betz ceiling of 59.3 percent between cut-in near 3-4 m/s and cut-out near 25 m/s.",
        sections: [
          {
            number: "4.1",
            title: "Nuclear fission and reactor essentials",
            body: [
              "Nuclear power rests on one event: a slow neutron absorbed by a U-235 nucleus forms an excited compound nucleus that splits into two radioactive fragments plus two or three fresh neutrons and about 200 MeV of energy, most of it as fragment kinetic energy that stops within millimetres as heat in the fuel. If each fission releases enough neutrons that exactly one goes on to cause another fission, the chain reaction is critical - the effective multiplication factor k equals one - and the reactor holds steady power. Above one it grows, below one it dies, and control is simply the management of that balance.",
              "The reactor is a machine of six well-named parts. Fuel - ceramic uranium dioxide pellets, enriched a few percent in U-235 for light-water reactors, natural uranium for heavy-water designs, or mixed oxide with plutonium - sits in zirconium-alloy cladding tubes. The moderator, light water, heavy water or graphite, slows the fast fission neutrons to thermal energies at which U-235 fissions eagerly. The coolant - water, heavy water, carbon dioxide, helium or liquid sodium - removes the heat to the steam cycle. Control rods of boron carbide or cadmium swallow neutrons on demand and drop fully within seconds on a scram. A reflector bounces stray neutrons back into the core; shielding of concrete and steel protects workers; and the containment building closes the whole system against the outside.",
              "The energy density explains the economics and the anxiety alike: one kilogram of U-235 fully fissioned releases about 24 million kilowatt-hours of heat, the equivalent of roughly 2700 tonnes of coal, and a refuelling cycle therefore lasts a year or more. Burnup, measured in gigawatt-days per tonne, tracks how hard the fuel has worked, and spent fuel still carries more than ninety percent of its original energy, which is why reprocessing and fast breeders matter to resource-poor programmes. India's three-stage strategy - natural-uranium heavy-water reactors first, plutonium-fuelled fast breeders second, thorium breeders third - is a direct answer to this arithmetic and a favourite long-question finale.",
            ],
            bullets: [
              "Fission: thermal neutron plus U-235 splits the nucleus into fragments, 2-3 neutrons and about 200 MeV, mostly deposited as heat in the fuel.",
              "Criticality: effective multiplication factor k = 1 sustains steady power; control rods of boron carbide or cadmium trim k and drop fully on scram.",
              "Moderator - light water, heavy water, graphite - slows fast neutrons to thermal energies; coolant carries fission heat to the steam cycle.",
              "Fuel is UO2 ceramic pellets (enriched 3-5 percent for light water, natural in PHWR, or MOX) sealed in zircaloy cladding; reflector, shielding and containment complete the machine.",
              "Energy density: 1 kg of U-235 fissioned equals roughly 2700 tonnes of coal; burnup in GWd per tonne tracks fuel duty; spent fuel retains most of its energy.",
            ],
            table: {
              caption: "Reactor components and their materials.",
              headers: ["Component", "Function", "Typical materials"],
              rows: [
                ["Fuel", "Source of fissile atoms and heat", "UO2 pellets, enriched or natural, MOX"],
                ["Moderator", "Slow neutrons to thermal energies", "Light water, heavy water, graphite"],
                ["Coolant", "Transfer core heat to steam cycle", "Light/heavy water, CO2, helium, sodium"],
                ["Control rods", "Absorb neutrons, trim power, scram", "Boron carbide, cadmium, Ag-In-Cd"],
                ["Cladding", "Contain fission products", "Zircaloy, stainless steel"],
                ["Reflector and shield", "Return neutrons, absorb radiation", "Graphite, steel, concrete"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From one neutron to a controlled chain reaction",
              caption:
                "Each step is either the physics of fission or the engineering that keeps k equal to one.",
              steps: [
                { label: "Thermal neutron meets U-235", note: "absorption forms a compound nucleus" },
                { label: "Nucleus splits", note: "about 200 MeV plus 2-3 fast neutrons" },
                { label: "Fragments stop as heat", note: "kinetic energy becomes fuel heat" },
                { label: "Moderator slows the fresh neutrons", note: "to thermal energies" },
                { label: "Control rods trim the surplus", note: "k held at one; coolant exports the heat" },
              ],
            },
            callout: {
              type: "exam",
              title: "Labelled schematic wins",
              body: "The 7-mark reactor question is a labelled diagram question: draw core, fuel rods, moderator, control rods, coolant circuit, reflector, shielding and containment, then give one function line each. Define k and state that criticality is k = 1 - those two definitions are frequently separately awarded marks.",
            },
            keyTerms: [
              { term: "Nuclear fission", definition: "The splitting of a heavy nucleus on neutron absorption, releasing about 200 MeV and fresh neutrons that sustain a chain reaction." },
              { term: "Moderator", definition: "A light-nucleus material - light water, heavy water or graphite - that slows fast neutrons to thermal energies without absorbing many." },
              { term: "Effective multiplication factor", definition: "The ratio of neutrons in one generation to those in the previous one; unity is criticality." },
            ],
            examQuestions: [
              {
                q: "Explain the essential components of a nuclear reactor and their functions with a labelled sketch, and describe how the chain reaction is controlled.",
                marks: 7,
                outline: [
                  "Open with fission: U-235 plus neutron gives fragments, 2-3 neutrons, about 200 MeV.",
                  "Define the effective multiplication factor; k = 1 is critical operation.",
                  "Draw the labelled schematic: core with fuel rods, moderator, control rods, coolant loop, reflector, shield, containment.",
                  "Fuel: UO2 pellets in zircaloy, enrichment choices, MOX.",
                  "Moderator and coolant functions with one material example each.",
                  "Control rods: boron carbide or cadmium; gradual trimming and full-drop scram.",
                  "Close with energy density - 1 kg U-235 equals about 2700 t coal - and burnup.",
                ],
              },
              {
                q: "What is the function of the moderator, and why must it be light-nucleus material?",
                marks: 2,
              },
              {
                q: "Define the effective multiplication factor and state what subcritical, critical and supercritical mean.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Reactor types: PWR, BWR and PHWR",
            body: [
              "The pressurised water reactor is the world's default. Its primary loop holds light water at about 155 bar - far above saturation - so it never boils despite core outlet temperatures near 320 deg C; a pressurizer sets and cushions that pressure. Two to four steam generators pass the primary heat to a secondary loop that raises steam at roughly 60 to 70 bar for a conventional turbine island that stays free of radioactivity. Fuel is uranium dioxide enriched three to five percent. The design's virtues - two separated loops, mature supply chains, negative moderator temperature feedback - have made it the majority of world capacity, including the VVER units at Kudankulam in India.",
              "The boiling water reactor deletes the steam generator: water boils in the core at about 70 bar, moisture separators and dryers inside the vessel polish the steam, and it drives the turbine directly. One loop instead of two means fewer components, lower capital and a pressure vessel that doubles as boiler, but the turbine hall works in a controlled-radiation zone and the cycle pays about two points of thermal efficiency, settling near 32 to 33 percent. Control rods enter from beneath the vessel through the drive mechanisms, and recirculation flow adjusts power smoothly.",
              "The pressurised heavy water reactor, the Canadian CANDU lineage that India adopted and scaled, is the resource strategist's machine. Heavy water as moderator and coolant spends so few neutrons on absorption that natural uranium works as fuel, freeing the programme from enrichment plants. Horizontal pressure tubes run through a low-pressure calandria of moderator, so refuelling happens online, machine to machine, without shutdowns - the reason PHWR capacity factors run high. Its costs are paid in heavy water inventory and a positive void coefficient that demands fast-acting shutdown systems. India's fleet spans 220, 540 and 700 MWe indigenous units; sketching all three loops of a PWR beside the single loop of a BWR and the calandria of a PHWR is the highest-yield drawing exercise in this unit.",
            ],
            bullets: [
              "PWR: primary light water at about 155 bar never boils; steam generators pass heat to a secondary steam loop; turbine island stays non-radioactive; 3-5 percent enriched fuel.",
              "BWR: direct cycle - steam generated in the core at about 70 bar drives the turbine; one loop, lower cost, radioactive turbine hall, efficiency about 32-33 percent.",
              "PHWR: heavy water moderator and coolant, natural uranium fuel, horizontal pressure tubes in a calandria, online refuelling - India's standard design.",
              "Neutron economy: heavy water absorbs so few neutrons that enrichment is unnecessary; the price is a large heavy water inventory and a positive void coefficient.",
              "Thermal efficiency of water reactors sits near 30-33 percent, capped by steam conditions; Kudankulam's VVER 1000 MWe units are India's largest PWRs.",
            ],
            table: {
              caption: "PWR, BWR and PHWR compared.",
              headers: ["Feature", "PWR", "BWR", "PHWR"],
              rows: [
                ["Coolant and moderator", "Light water / light water", "Light water / light water", "Heavy water / heavy water"],
                ["Fuel enrichment", "3-5 percent", "2-3 percent", "Natural uranium"],
                ["Steam generation", "Secondary loop, steam generators", "In-core, direct cycle", "Separate steam generators"],
                ["Refuelling", "Offline, batch", "Offline, batch", "Online, pressure tubes"],
                ["Loops", "Two", "One", "Two, plus calandria"],
                ["Indian examples", "Kudankulam VVER", "Tarapur BWR-1 and 2", "Kakrapar, Kaiga, RAPS fleet"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "PWR's two loops versus BWR's one",
              caption:
                "The steam generator is the whole difference - and it decides whether the turbine hall is a radiation zone.",
              left: {
                heading: "PWR - two loops",
                items: [
                  "Primary water at about 155 bar, never boils",
                  "Pressurizer cushions primary pressure",
                  "Steam generators separate the loops",
                  "Turbine hall stays non-radioactive",
                  "Secondary steam near 60-70 bar",
                ],
              },
              right: {
                heading: "BWR - direct cycle",
                items: [
                  "Core boils water at about 70 bar",
                  "Moisture separators and dryers in the vessel",
                  "Single loop to the turbine",
                  "Turbine hall is a controlled zone",
                  "Fewer components, lower capital cost",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Draw the loops",
              body: "In PWR versus BWR questions, draw both vessel-section sketches side by side, arrow the coolant paths, and circle the steam generator on the PWR side - then state the radiation-zone consequence in one sentence. For PHWR, draw the horizontal calandria with a few pressure tubes and label online refuelling machines.",
            },
            keyTerms: [
              { term: "PWR", definition: "Pressurised water reactor: light water held liquid at about 155 bar transfers core heat through steam generators to a separate secondary steam loop." },
              { term: "BWR", definition: "Boiling water reactor: water boils in the core at about 70 bar and the steam drives the turbine directly in a single loop." },
              { term: "PHWR", definition: "Pressurised heavy water reactor: heavy water moderator and coolant permit natural uranium fuel and online refuelling through horizontal pressure tubes." },
            ],
            examQuestions: [
              {
                q: "Compare the pressurised water reactor and the boiling water reactor with neat sketches of their coolant circuits, and explain why the pressurised heavy water reactor suits the Indian programme.",
                marks: 7,
                outline: [
                  "PWR sketch: vessel, 155 bar primary loop, pressurizer, steam generator, secondary loop.",
                  "BWR sketch: core boiling at about 70 bar, separators, direct steam to turbine.",
                  "List differences: loops, radioactivity of turbine hall, pressure, efficiency, capital.",
                  "PHWR: heavy water moderator and coolant, natural uranium, calandria with pressure tubes.",
                  "Online refuelling and high capacity factor.",
                  "Neutron economy argument: no enrichment needed - the resource logic for India.",
                  "Mention the fleet: 220/540/700 MWe indigenous units and Kudankulam VVERs.",
                ],
              },
              {
                q: "State two advantages of heavy water as a moderator.",
                marks: 2,
              },
              {
                q: "What is online refuelling, which reactor uses it, and what does it do to capacity factor?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Fast breeder reactors and reactor safety",
            body: [
              "A breeder makes more fuel than it burns. Fast neutrons, unmoderated, convert the fertile blanket of U-238 into fissile Pu-239 - and thorium into U-233 - so a reactor with breeding ratio above one leaves more fissile material in its core and blankets than it consumed. The fast breeder reactor therefore has no moderator at all: the core is small and dense, power density is high, and the coolant must move heat without slowing neutrons - liquid sodium does it superbly, with heat transfer worthy of a metal and negligible moderation. Because sodium reacts violently with water, the primary radioactive sodium passes its heat to a secondary clean sodium loop, which alone feeds the steam generators; two loops buy isolation.",
              "India's Prototype Fast Breeder Reactor at Kalpakkam, 500 MWe on mixed-oxide fuel with a breeding ratio near 1.05 to 1.1, is the second stage of the national strategy; its commissioning turns a decade of physics into engineering practice. The doubling time - years for the fissile inventory to double - is the breeder's economic clock, computed straight from the breeding ratio and burn rate as the Python example shows. Safety of the breeder is managed with the same doctrine as every reactor, only sharper: defense in depth, engineered safety systems and negative reactivity feedbacks that shut the physics down as temperature rises.",
              "Defense in depth is five barriers deep, from the ceramic fuel matrix and its cladding, through the coolant pressure boundary and the containment building, to siting exclusion zones and off-site emergency plans. Engineered systems back the barriers: the emergency core cooling system floods the core if the coolant is lost, and a scram drives all rods in within seconds. Reactor history grades the doctrine: Three Mile Island proved containment works but operators can be confused; Chernobyl warned about positive void coefficients and missing containment; Fukushima taught station-blackout and flood design. Waste closes the loop - spent fuel reprocessed, high-level waste vitrified in glass, stored and tracked for geological disposal - and the AERB licenses every Indian step.",
            ],
            bullets: [
              "Breeding: fast neutrons convert blanket U-238 to Pu-239 (or Th-232 to U-233); breeding ratio above one means more fissile out than in.",
              "FBR traits: no moderator, compact dense core, high power density; liquid sodium coolant transfers heat superbly without slowing neutrons.",
              "Two sodium loops isolate radioactive primary sodium from the water side of the steam generators; PFBR at Kalpakkam is 500 MWe on MOX fuel.",
              "Doubling time - years for the fissile inventory to double - follows from breeding ratio and burn rate; the Python example computes it.",
              "Safety doctrine: defense in depth through five barriers, ECCS, scram in seconds, negative feedbacks; waste vitrified for geological disposal; AERB is the Indian regulator.",
            ],
            codeExample: {
              language: "python",
              caption: "Breeding ratio and doubling time.",
              code: `# Fissile economics of a fast breeder
breeding_ratio = 1.12          # fissile produced / fissile burnt
initial_fissile_t = 3.0       # tonnes of fissile in core + blankets

yearly_burn_t = 0.25 * initial_fissile_t   # 25% of inventory per year
net_gain_t = yearly_burn_t * (breeding_ratio - 1.0)
doubling_time_yr = initial_fissile_t / net_gain_t

print(f"Net fissile gain : {net_gain_t:.3f} t per year")
print(f"Doubling time    : {doubling_time_yr:.0f} years")`,
            },
            diagram: {
              kind: "layers",
              title: "Defense in depth: the five barriers",
              caption:
                "Safety is architecture, not an accessory - each layer assumes the one inside may fail.",
              layers: [
                { label: "Fuel matrix", note: "ceramic pellets hold most fission products" },
                { label: "Cladding", note: "zircaloy tubes seal the rest" },
                { label: "Coolant pressure boundary", note: "vessel and pipework" },
                { label: "Containment building", note: "filtered leaks, missile shield" },
                { label: "Exclusion zone and emergency plans", note: "siting and off-site response" },
              ],
            },
            callout: {
              type: "warning",
              title: "Name the barrier, not the buzzword",
              body: "Safety answers that say only 'defense in depth' score poorly. Write the five levels explicitly - fuel and cladding, coolant boundary, containment, on-site emergency response, off-site emergency planning - then attach one engineered system to each level, such as ECCS to the coolant boundary and scram to the physics itself.",
            },
            keyTerms: [
              { term: "Breeding ratio", definition: "The ratio of fissile material produced to fissile material consumed; above one, the reactor breeds fuel." },
              { term: "SCRAM", definition: "The rapid automatic insertion of all control rods, shutting down the chain reaction within seconds." },
              { term: "Defence in depth", definition: "The layering of physical barriers and emergency response levels so that no single failure can release radioactivity." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a fast breeder reactor with its sodium circuits, define breeding ratio and doubling time, and describe the defence-in-depth safety philosophy.",
                marks: 7,
                outline: [
                  "Why fast spectrum: no moderator, breeding of blanket U-238 to Pu-239.",
                  "Sketch core and blanket, primary sodium loop, secondary sodium loop, steam generator.",
                  "Working: dense MOX core, sodium heat transfer, isolation by the secondary loop.",
                  "Define breeding ratio; state PFBR values near 1.05-1.1 and its 500 MWe scale.",
                  "Define doubling time and compute it from ratio and burn rate.",
                  "Defense in depth: five levels from fuel matrix to off-site plans; ECCS and scram.",
                  "Close with waste practice: reprocessing, vitrification, geological disposal.",
                ],
              },
              {
                q: "Explain the five levels of defence in depth with one engineered example each.",
                marks: 3,
              },
              {
                q: "Why is liquid sodium the chosen coolant for fast breeder reactors?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Solar power plants",
            body: [
              "Solar energy arrives at the earth at about 1361 watts per square metre at the top of the atmosphere and near 1000 at the ground on a clear noon; India's plains average four to five kilowatt-hours per square metre per day. Photovoltaic conversion turns photons directly into current: light excites electron-hole pairs across a silicon junction, modules convert at 18 to 22 percent efficiency, and strings feed inverters that track the maximum power point and deliver grid-frequency alternating current. Utility blocks are built from strings to a 33 kV collection system, then stepped up for transmission; land demand runs about two hectares per megawatt, and losses come from soiling, temperature and mismatch, not just the cell.",
              "Concentrating solar power runs the same fuel through a thermal machine instead. Parabolic troughs focus light on receiver tubes carrying synthetic oil near 390 deg C; central towers surround a receiver where molten salt reaches 565 deg C; linear Fresnel and dish-Stirling complete the family. All concentrate direct beam radiation - so they need clear skies, not just sunshine - and their great advantage is storage: two-tank molten salt systems hold six to ten hours of full-load heat, letting the turbine run after sunset through the evening peak. Power towers with storage reach capacity factors near fifty percent, far above the roughly twenty percent of one-axis PV.",
              "Indian practice shows both routes at scale. Bhadla in Rajasthan, around 2.2 gigawatts across phases, and Pavagada in Karnataka, about 2 gigawatts, sit on the world leaderboard of parks; tariffs fell dramatically through the last decade's auctions, making new solar cheaper than new coal generation. Grid integration is now the design frontier: forecasting, ramping reserves, and co-located batteries shape tenders, and hybrid solar-wind-storage parks smooth the supply. For the exam, the PV-versus-CSP comparison table plus one storage paragraph and one named park is a complete 7-mark answer.",
            ],
            bullets: [
              "Resource: solar constant about 1361 W/m2, ground-level peak near 1000 W/m2; India averages 4-5 kWh/m2/day over large areas.",
              "PV chain: modules (18-22 percent) in strings, MPPT inverters to AC, 33 kV collection, step-up transformer to the grid; land about 2 ha per MW.",
              "CSP: parabolic troughs with oil near 390 deg C, power towers with molten salt near 565 deg C, linear Fresnel and dish-Stirling; need direct beam irradiance.",
              "Storage is CSP's edge: two-tank molten salt gives 6-10 hours of evening generation, lifting capacity factors toward 50 percent.",
              "Indian parks: Bhadla (about 2.2 GW, Rajasthan) and Pavagada (about 2 GW, Karnataka); integration via forecasting, batteries and hybrid parks.",
            ],
            table: {
              caption: "Solar PV versus concentrating solar power.",
              headers: ["Feature", "Solar PV", "Solar thermal (CSP)"],
              rows: [
                ["Conversion", "Photovoltaic, direct to DC", "Concentrated heat to steam cycle"],
                ["Resource needed", "Global irradiance", "Direct beam irradiance only"],
                ["Storage", "Batteries, still costly", "Molten salt, 6-10 hours"],
                ["Water demand", "Panel washing only", "Mirror wash plus cooling"],
                ["Cost trend", "Cheapest new generation", "Higher, viable with storage"],
                ["Capacity factor", "About 20 percent", "25-50 percent with storage"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Sunlight to grid in a utility PV plant",
              caption:
                "Four conversions between photon and electron - the inverter is the brain of the chain.",
              steps: [
                { label: "PV modules convert photons to DC", note: "strings at 800-1500 V" },
                { label: "Inverters track maximum power", note: "MPPT and 50 Hz synthesis" },
                { label: "LV/MV transformer", note: "strings collected to 33 kV" },
                { label: "Substation step-up", note: "to transmission voltage" },
                { label: "Grid dispatch balances output", note: "forecasting and ramp management" },
              ],
            },
            callout: {
              type: "exam",
              title: "The comparison carries the marks",
              body: "Structure the 7-mark solar answer as: PV principle and chain, CSP types with temperatures and fluids, then the table-style comparison points - resource, storage, water, cost, capacity factor - and finish with molten salt storage as the differentiator and one Indian park named. Sketches of a trough unit and a PV string each earn drawing marks.",
            },
            keyTerms: [
              { term: "Irradiance", definition: "The instantaneous power of solar radiation received per square metre of surface, in watts per square metre." },
              { term: "Parabolic trough", definition: "A CSP collector that focuses direct beam radiation onto a receiver tube along its focal line, heating a working fluid." },
              { term: "Molten salt storage", definition: "Two-tank thermal storage of nitrate salts near 290 and 565 deg C that lets a CSP plant generate after sunset." },
            ],
            examQuestions: [
              {
                q: "Compare solar photovoltaic and concentrating solar thermal power plants with layout diagrams, and explain the role of thermal storage in CSP.",
                marks: 7,
                outline: [
                  "PV principle: photon to electron-hole pair, module efficiencies 18-22 percent.",
                  "PV plant chain: strings, MPPT inverters, 33 kV collection, step-up.",
                  "CSP families: trough with oil near 390 deg C, tower with salt near 565 deg C, Fresnel, dish-Stirling.",
                  "Sketch one trough unit with receiver tube and tracking.",
                  "Molten salt storage: two tanks, 6-10 hours of evening generation.",
                  "Comparison points: resource, storage, water, cost, capacity factor.",
                  "Close with Indian parks Bhadla and Pavagada and grid-integration trends.",
                ],
              },
              {
                q: "Why does a CSP plant with storage achieve a higher capacity factor than a PV plant of the same rating?",
                marks: 2,
              },
              {
                q: "What is a maximum power point tracker and where does it sit in the plant?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Wind power plants",
            body: [
              "Wind power is a cube law. The power in moving air is one half times air density times swept area times wind velocity cubed, so a doubling of wind speed carries eight times the energy - which is why hub height, siting and forecasting dominate wind economics. No turbine can capture it all: the Betz limit caps the extractable fraction at 59.3 percent, the quotient of momentum theory, and real rotors deliver 75 to 85 percent of that. Capacity factors run 20 to 35 percent onshore and 40 to 50 offshore; the power curve - zero below cut-in near 3 to 4 m/s, rated output by 10 to 13 m/s, shutdown at cut-out near 25 m/s - is the machine's signature.",
              "Anatomy is standard and examinable. The rotor carries three blades with full-span pitch control, pitching to spill power above rated wind and to feather in a storm; the nacelle houses the main shaft, a step-up gearbox or a direct-drive generator, the converter that fixes output to 50 hertz, and the yaw system that keeps the rotor facing the wind; the tower lifts the rotor into faster, cleaner air. Horizontal-axis machines own utility scale; vertical-axis designs survive in niches. Offshore plants pay for foundations and submarine cabling with steadier, stronger winds and freedom from land conflict - and bigger rotors, now beyond 250 metres diameter.",
              "India is among the world's largest wind nations, with more than 40 gigawatts installed: Tamil Nadu's Muppandal and Tirunelveli clusters pioneered the industry, and Gujarat and Rajasthan lead new capacity. Grid integration is the engineering frontier - wind is variable and partly unpredictable, so forecasting, scheduling and renewable energy control centres now dispatch it like a plant, not a nuisance. Repowering old low-capacity machines on excellent sites, wake-effect-aware layout design, and hybrid wind-solar-storage tenders complete the modern picture. The Python below turns the cube law into numbers every student should be able to quote.",
            ],
            bullets: [
              "Power equation: P = 0.5 x rho x A x V^3 - the cube law makes siting and hub height everything; swept area grows with the square of diameter.",
              "Betz limit: 59.3 percent of wind energy is the theoretical maximum extractable; real roters achieve 75-85 percent of it.",
              "Power curve: cut-in near 3-4 m/s, rated output by 10-13 m/s, cut-out near 25 m/s with storm feathering.",
              "Anatomy: three pitched blades, nacelle with gearbox or direct drive, converter for 50 Hz, yaw drive, tall tower; horizontal axis dominates.",
              "India: over 40 GW installed - Muppandel and Tirunelveli in Tamil Nadu, new parks in Gujarat and Rajasthan; forecasting, scheduling and repowering are current themes.",
            ],
            codeExample: {
              language: "python",
              caption: "Wind power and the Betz limit across speeds.",
              code: `# Power available from a rotor (Betz limit)
import math

rho = 1.225                  # air density, kg/m3 at 15 deg C
diameter = 100.0             # rotor diameter, m
area = math.pi * diameter**2 / 4.0

for v in (4.0, 8.0, 12.0):   # wind speeds, m/s
    p_wind = 0.5 * rho * area * v**3
    p_betz = 0.593 * p_wind
    print(f"V = {v:4.1f} m/s -> wind power {p_wind/1e6:6.1f} MW, "
          f"Betz cap {p_betz/1e6:6.1f} MW")`,
            },
            diagram: {
              kind: "pipeline",
              title: "Energy path of a wind turbine generator",
              caption:
                "From moving air to 50 hertz: the converter decouples rotor speed from the grid.",
              stages: [
                { label: "Rotor blades", note: "lift forces harvest kinetic energy" },
                { label: "Main shaft and gearbox", note: "step-up to generator speed" },
                { label: "Generator", note: "mechanical to electrical conversion" },
                { label: "Converter", note: "fixes frequency to 50 Hz at any rotor speed" },
                { label: "Step-up transformer", note: "feeds the farm collection grid" },
              ],
            },
            callout: {
              type: "tip",
              title: "Cube-law numericals",
              body: "The standard numerical gives rotor diameter and two wind speeds and asks how power changes. Compute area once, apply the cube of the speed ratio, and state the Betz cap explicitly. A favourite 2-mark trap asks the percentage gain when wind speed rises 20 percent - the answer is 1.2 cubed, about 73 percent, not 20.",
            },
            keyTerms: [
              { term: "Betz limit", definition: "The theoretical maximum fraction of wind kinetic energy a rotor can extract: 59.3 percent, or 16/27." },
              { term: "Cut-in speed", definition: "The lowest wind speed at which the turbine begins to generate useful power, typically 3-4 m/s." },
              { term: "Power curve", definition: "The turbine's output power against wind speed, rising cubically to rated output, then flat, then zero at cut-out." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a horizontal-axis wind turbine with a sketch, write the wind power equation and the Betz limit, and describe the power curve between cut-in and cut-out speeds.",
                marks: 7,
                outline: [
                  "Resource and equation: P = 0.5 rho A V^3; note the cube law's siting consequences.",
                  "Sketch: rotor with three pitched blades, nacelle with gearbox, generator, converter, yaw drive, tower.",
                  "Working: blades generate lift, shaft turns gearbox and generator, converter fixes 50 Hz.",
                  "State the Betz limit 59.3 percent and that real rotors reach 75-85 percent of it.",
                  "Draw the power curve: cut-in 3-4 m/s, rated 10-13 m/s, cut-out 25 m/s.",
                  "Pitch and yaw control functions in two lines.",
                  "Close with Indian clusters and integration measures: forecasting, repowering, hybrids.",
                ],
              },
              {
                q: "Why does wind power grow with the cube of wind speed, and what does a 20 percent rise in speed do to available power?",
                marks: 2,
              },
              {
                q: "Distinguish onshore and offshore wind plants on three counts.",
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
      title: "Economics, Control and Environment",
      summary:
        "The commercial and environmental close of the course: tariff methods and their design rules, depreciation and replacement funding, SCADA and plant automation, particulate and gas emission control with ESP and FGD, carbon capture routes, and structured Indian case studies from NTPC's supercritical fleet to Bhadla and PFBR.",
      chapter: {
        number: "05",
        title: "Money, Data and Emissions",
        intro:
          "Unit V prices, controls and cleans the plant. Tariff methods recover fixed and variable costs fairly across consumer classes; depreciation methods - straight line, diminishing balance, sinking fund - accumulate the replacement fund on sound actuarial footing; SCADA and the automation pyramid run the plant from field instruments to dispatch centres; electrostatic precipitators, FGD and low-NOx systems strip the flue gas; and carbon capture routes plus structured case studies close the course with an eye on India's energy transition.",
        inOneBreath:
          "A good tariff recovers cost, rewards efficiency and stays simple; flat, straight meter, block meter, two-part (fixed plus energy), power factor and three-part tariffs arrange those trade-offs, with time-of-day slabs mirroring the load curve; depreciation allocates capital cost over life - straight line in equal instalments (C - S) / n, diminishing balance as a fixed percentage of falling book value, and the sinking fund as annual deposits A = (C - S) i / ((1+i)^n - 1) compounding to the replacement sum; SCADA runs the automation pyramid from field sensors through PLCs and RTUs to the HMI, historian and EMS, optimising combustion and scheduling maintenance; the flue gas train passes furnace, air preheater, ESP at 99.5+ percent particulate capture, induced draught fan, FGD scrubbing SO2 into gypsum, and the stack with continuous monitoring; carbon capture splits into post-combustion amines, pre-combustion gasification with shift, and oxy-fuel combustion, each paying a 7-10 point efficiency penalty; and case studies - NTPC supercriticals, PHWRs and PFBR, Bhadla, Muppandal - turn the syllabus into evidence.",
        sections: [
          {
            number: "5.1",
            title: "Tariff and its methods",
            body: [
              "A tariff is the rate structure under which consumers are billed, and its design rules come before its types. A good tariff recovers the full cost of generation, transmission and distribution including a fair return on capital; it is fair between consumer classes; it rewards economical use of the system by signalling when energy is cheap; it is simple to understand and cheap to administer; and it stays stable enough for consumers to plan against. Because a plant's cost splits into fixed charges, which follow demand, and variable charges, which follow energy, most practical tariffs charge for both kilowatt of demand and kilowatt-hour of energy.",
              "The methods arrange those charges differently. The simple flat rate charges one figure per load or per appliance regardless of consumption - simple, but blind to quantity and cost-causation. The straight meter rate bills a uniform price per unit through a meter; better, but a large consumer pays the same per unit as a small one despite cheaper marginal supply. The block meter rate steps the price down, or occasionally up, across successive blocks of consumption, encouraging or restraining use; two-part tariffs add a fixed demand charge per kilowatt or per connection to the energy rate, which suits industrial consumers whose demand drives capacity; the three-part tariff adds an explicit customer charge on top. Power factor clauses bill on kVA or penalise a poor factor because reactive current heats the system without delivering energy.",
              "Indian practice layers all of this with public policy. Time-of-day tariffs split the day into peak, normal and off-peak slabs that mirror the load curve, shifting flexible loads to valley hours; industrial and commercial classes cross-subsidise agricultural and domestic supply; open access lets large consumers contract generation directly while paying wheeling charges; and green tariffs offer renewable-backed supply at a premium. The numerical centre of gravity is the two-part bill - maximum demand charge plus energy charge plus, sometimes, a fuel adjustment - and a worked example with numbers substituted in the formula is worth rehearsing twice before the exam.",
            ],
            bullets: [
              "Desirable tariff: recover full cost with fair return, fair between classes, reward economical use, simple, stable - list these five verbatim.",
              "Flat rate: one price per appliance or load, no meter; simple but blind to quantity and cost-causation.",
              "Straight meter rate: uniform price per kWh; block meter rate: price steps across consumption slabs; two-part: fixed demand charge plus energy charge.",
              "Three-part tariff adds a customer charge; power factor tariff bills kVA or penalises poor factor to recover reactive-current costs.",
              "Indian layer: time-of-day slabs, cross-subsidy, open access with wheeling charges, and green tariffs for renewable-backed supply.",
            ],
            table: {
              caption: "Tariff methods compared.",
              headers: ["Type", "Components", "Merit", "Demerit", "Suited to"],
              rows: [
                ["Flat rate", "One rate per load/appliance", "Very simple", "Ignores consumption", "Small rural loads"],
                ["Straight meter", "Uniform Rs per kWh", "Meters use", "Ignores capacity cost", "Residential"],
                ["Block meter", "Stepped Rs per kWh by slab", "Encourages or restrains use", "Bandwidth disputes", "Domestic, small commercial"],
                ["Two-part", "Rs/kW demand + Rs/kWh", "Cost-causative", "Needs MD metering", "Industrial"],
                ["Three-part + ToD", "Customer + demand + ToD energy", "Signals system shape", "Most complex", "Large industrial, HT consumers"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Mapping the tariff family on two axes",
              caption:
                "Whether a demand charge exists, and whether the energy rate varies with quantity - that is the whole taxonomy.",
              axes: { x: "demand charge absent to demand charge present", y: "energy rate uniform to energy rate varying" },
              quadrants: [
                { label: "Simple flat rate", note: "one bill per appliance; no meter" },
                { label: "Two-part tariff", note: "Rs per kW of demand plus Rs per kWh" },
                { label: "Block meter rate", note: "price steps by consumption slab" },
                { label: "Three-part tariff with ToD", note: "customer + demand + time-varying energy" },
              ],
            },
            callout: {
              type: "exam",
              title: "The two-part numerical",
              body: "Expect a bill calculation: demand charge x maximum demand plus energy charge x units, sometimes with a fuel adjustment. Write the formula symbolically, substitute in a table, and add one sentence on why the demand charge exists - because fixed charges follow capacity, not energy. The characteristics of a good tariff are a separate 3-mark list; learn all five.",
            },
            keyTerms: [
              { term: "Tariff", definition: "The rate structure and methods by which consumers are charged for electrical energy and the capacity used to supply it." },
              { term: "Two-part tariff", definition: "A tariff with a fixed charge proportional to maximum demand plus a running charge per unit of energy consumed." },
              { term: "Time-of-day tariff", definition: "A tariff whose energy price varies by period of the day, reflecting the true cost shape of the load curve." },
            ],
            examQuestions: [
              {
                q: "State the desirable characteristics of a tariff and explain the flat rate, straight meter rate, block meter rate and two-part tariffs with one merit and one demerit each. Which classes suit the two-part tariff and why?",
                marks: 7,
                outline: [
                  "List the five characteristics: cost recovery with fair return, fairness between classes, economy signalling, simplicity, stability.",
                  "Flat rate: definition, merit simple, demerit blind to consumption.",
                  "Straight meter rate: uniform Rs/kWh, merit meters use, demerit ignores capacity.",
                  "Block meter rate: stepped slabs, merit shapes use, demerit slab disputes.",
                  "Two-part: Rs/kW plus Rs/kWh with formula; cost-causation logic.",
                  "Name industrial and large commercial consumers as suited, with the demand-metering reason.",
                  "Mention power factor and ToD clauses as modern refinements with one line each.",
                ],
              },
              {
                q: "Write the expression for a two-part tariff bill and define each term.",
                marks: 2,
              },
              {
                q: "Why is a power factor clause included in industrial tariffs?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Depreciation and economic evaluation",
            body: [
              "Depreciation is the loss of value of an asset from wear, age and obsolescence, and accounting for it is not bookkeeping ritual: the plant must accumulate, over its life, the money that will replace it. The vocabulary is small - original cost C, salvage or scrap value S after disposal, useful life n years, book value at any date - and every method allocates the net depreciable amount C minus S across those years differently. Causes worth two marks: physical wear of parts, passage of time on standby assets, and obsolescence when newer technology makes the old uneconomic before it is worn out.",
              "The straight line method charges an equal instalment every year: D equals C minus S over n, book value falls linearly to salvage, and the method is simple and audit-friendly - its weakness is that it ignores both the time value of money and the heavier real depreciation of early years. The diminishing balance method applies a fixed percentage to the falling book value, charging early years heavily and tapering later; it never writes the asset fully down, and the percentage is set from the life and a chosen terminal ratio. The sinking fund method is the actuary's answer: an equal annual deposit A, invested at compound interest i, accumulates to exactly C minus S by year n, so A equals C minus S times i over the quantity one plus i to the n minus one. The deposit is smaller than the straight line instalment - the Python example shows roughly half - because interest does the rest of the work.",
              "Economic evaluation puts the same time-value discipline into investment choice. Simple payback divides first cost by annual saving and ignores everything after; the net present value method discounts each year's net cash flow at the cost of capital and accepts projects with positive total; the benefit-cost ratio and internal rate of return summarise the same stream in single figures. A replacement numerical, an insulation-upgrade case or a cogeneration-versus-grid comparison are typical applications. Learn the sinking fund formula's shape - the examiner checks the denominator's compound factor as often as the numbers.",
            ],
            bullets: [
              "Depreciation: loss of value from wear, age and obsolescence; the replacement fund must accumulate during life, so method choice is an engineering-economic decision.",
              "Straight line: D = (C - S) / n - equal instalments, linear book value, simple, but ignores the time value of money.",
              "Diminishing balance: fixed percentage of falling book value - heavy early charges, tapering later, never fully written off.",
              "Sinking fund: A = (C - S) i / ((1 + i)^n - 1) - deposits compound to the replacement sum; smaller than the straight line instalment.",
              "Evaluation tools: simple payback, net present value at the cost of capital, benefit-cost ratio, internal rate of return.",
            ],
            codeExample: {
              language: "python",
              caption: "Straight line versus sinking fund depreciation.",
              code: `# Replacement funding for a plant component
cost = 100_000_000.0          # original cost, Rs
scrap = 10_000_000.0          # salvage after removal, Rs
life = 20                     # useful life, years
rate = 0.06                   # compound interest on the fund

straight_line = (cost - scrap) / life
sinking_fund = (cost - scrap) * rate / ((1 + rate) ** life - 1)

print(f"Straight-line annual charge: Rs {straight_line:,.0f}")
print(f"Sinking-fund annual deposit : Rs {sinking_fund:,.0f}")
print(f"Ratio SF / SL               : {sinking_fund / straight_line:.2f}")
print(f"Fund accumulates to Rs {(cost - scrap):,.0f} at year {life}")`,
            },
            diagram: {
              kind: "compare",
              title: "Straight line versus sinking fund",
              caption:
                "One charges the same every year; the other lets interest carry half the burden.",
              left: {
                heading: "Straight line",
                items: [
                  "Equal instalment (C - S) / n",
                  "Book value falls linearly",
                  "Simple and audit friendly",
                  "Ignores time value of money",
                  "Fund builds too slowly for early replacement",
                ],
              },
              right: {
                heading: "Sinking fund",
                items: [
                  "Deposit A = (C - S) i / ((1+i)^n - 1)",
                  "Compounding does part of the work",
                  "Fund reaches C - S exactly at year n",
                  "Recognises the time value of money",
                  "Replacement cash ready on schedule",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Formulas verbatim",
              body: "Depreciation is a formula-paper topic: D = (C - S) / n for straight line and A = (C - S) i / ((1+i)^n - 1) for the sinking fund must appear symbol-perfect with every symbol defined. Numericals usually give cost, scrap, life and interest rate and ask for the annual charge under both methods - practise one with life 20 and rate 6 percent, the classic combination.",
            },
            keyTerms: [
              { term: "Depreciation", definition: "The loss in value of an asset due to wear, ageing and obsolescence over its useful life." },
              { term: "Sinking fund", definition: "A fund built by equal annual deposits earning compound interest so that the replacement sum is ready at the end of asset life." },
              { term: "Salvage value", definition: "The net amount recoverable from an asset at the end of its useful life, after removal and disposal costs." },
            ],
            examQuestions: [
              {
                q: "Explain the straight line, diminishing balance and sinking fund methods of depreciation with formulas and a worked example, and state the merits of each.",
                marks: 7,
                outline: [
                  "Define depreciation and its causes: wear, age, obsolescence; define C, S, n.",
                  "Straight line: D = (C - S) / n; book value falls linearly; worked numbers.",
                  "Diminishing balance: fixed percentage on falling book value; heavy early charges; formula for the percentage.",
                  "Sinking fund: A = (C - S) i / ((1+i)^n - 1); derivation idea from the compound amount.",
                  "Compute both charges for a worked example, e.g. cost Rs 10 crore, scrap Rs 1 crore, n 20, i 6 percent.",
                  "Compare: straight line simple, diminishing balance realistic early, sinking fund time-value sound.",
                  "Conclude with which suits regulated utilities and why.",
                ],
              },
              {
                q: "Differentiate between depreciation and obsolescence.",
                marks: 2,
              },
              {
                q: "Write the sinking fund annual deposit formula and define every symbol.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "SCADA and plant automation",
            body: [
              "A modern power plant is measured before it is managed. Instrumentation senses temperature, pressure, flow, level, vibration, shaft position and water chemistry; transmitters carry the signals as 4-20 mA loops or digital fieldbus messages; and controllers - distributed control systems for continuous loops, programmable logic controllers for sequence and interlock - close the feedback that no human hand could. Above the controllers sits SCADA, supervisory control and data acquisition: the system that gathers the plant's state, presents it to operators, logs it, alarms on it and issues setpoints down.",
              "The architecture is a pyramid of five levels. At the base, field devices - sensors, transmitters, actuators and drives. Above them, the control level of PLCs and DCS controllers executing regulatory loops and protection sequences. The communication layer, increasingly fibre with IEC 61850 and 60870-104 protocols, links controllers to the SCADA servers; the human-machine interface and engineering stations display and configure; and at the top the historian, optimisers and the energy management system in the dispatch centre give plant data commercial meaning. Redundancy at every level and strictly zoned cyber security - because a plant is critical infrastructure - are part of the design, not accessories.",
              "The payback is measured in heat rate and availability. Combustion trim and sootblowing optimisation tune the boiler continuously; load-following and automatic generation control let the plant obey the grid; condition monitoring of bearings and valves turns maintenance from calendar-driven to predictive; and sequence-of-events recorders reconstruct every trip to the millisecond. On the network side, renewable forecasting, battery dispatch and demand response all live on SCADA's data spine, which is why the examiner wants both the pyramid sketch and the integration story - automation is now the nervous system of the whole power system, not just the turbine hall.",
            ],
            bullets: [
              "Instrumentation layer: sensors for T, P, flow, level, vibration and chemistry; 4-20 mA and fieldbus transmitters; DCS for continuous loops, PLC for sequence and interlock.",
              "SCADA = supervisory control and data acquisition: acquires plant state, presents it, alarms, logs and issues setpoints - supervision, not replacement, of operators.",
              "Automation pyramid: field devices, controllers, communication, HMI and engineering, then historian and EMS at dispatch level.",
              "Protocols and integrity: IEC 61850 and 60870-104 over fibre, redundant servers, zoned cyber security for critical infrastructure.",
              "Benefits: combustion and sootblowing optimisation, automatic generation control, predictive maintenance from condition data, millisecond trip records.",
            ],
            table: {
              caption: "Elements of the SCADA chain.",
              headers: ["Element", "Level", "Role"],
              rows: [
                ["Sensors and transmitters", "Field", "Measure and communicate process variables"],
                ["PLC / DCS controllers", "Control", "Close loops, run sequences and interlocks"],
                ["RTU", "Substation / remote", "Telemetry and telecontrol at remote sites"],
                ["Communication network", "Transport", "Fibre, IEC 61850 / 60870-104 links"],
                ["HMI and historian", "Supervision", "Displays, alarms, trends, data storage"],
                ["EMS / AGC", "Dispatch", "System-level optimisation and load following"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The automation pyramid",
              caption:
                "Data rises, commands fall - every level speaks to the two beside it through defined protocols.",
              layers: [
                { label: "Field devices", note: "sensors, transmitters, actuators, drives" },
                { label: "Control level", note: "PLC and DCS controllers, loops and interlocks" },
                { label: "SCADA supervision", note: "HMI, alarms, engineering, real-time database" },
                { label: "Historian and optimisers", note: "trends, heat-rate and maintenance analytics" },
                { label: "EMS and dispatch", note: "automatic generation control, scheduling" },
              ],
            },
            callout: {
              type: "tip",
              title: "Pyramid plus protocols",
              body: "Draw the five-level pyramid with one device example per level, then name IEC 61850 for substation communication and mention redundancy and cyber zoning in a closing line. The 7-mark answer is judged on level names, one example each, and one function sentence per level - keep it that tight.",
            },
            keyTerms: [
              { term: "SCADA", definition: "Supervisory control and data acquisition: the system that monitors and controls plant and network equipment from remote terminals." },
              { term: "RTU", definition: "Remote terminal unit: a field device that gathers telemetry and executes telecontrol commands at substations and remote sites." },
              { term: "HMI", definition: "Human-machine interface: the operator's window of displays, alarms and trends into the SCADA system." },
            ],
            examQuestions: [
              {
                q: "Explain the architecture and functions of SCADA in a power plant, with a diagram of its levels from field devices to the energy management system.",
                marks: 7,
                outline: [
                  "Define SCADA: supervision plus data acquisition over the plant and network.",
                  "Draw the pyramid: field devices, controllers, communication, HMI, historian and EMS.",
                  "Field level: sensors and transmitters, one example of each signal type.",
                  "Control level: PLC for sequence and interlock, DCS for continuous loops, RTU for remote sites.",
                  "Communication: fibre, IEC 61850 and 60870-104, redundancy.",
                  "Functions: display, alarms, trends, logging, setpoint issue, automatic generation control.",
                  "Benefits: heat-rate optimisation, predictive maintenance, cyber zoning for critical infrastructure.",
                ],
              },
              {
                q: "What is the difference between a PLC and an RTU in a SCADA system?",
                marks: 2,
              },
              {
                q: "State two plant-level optimisations that SCADA data enables.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Emission control: ESP, FGD and ash management",
            body: [
              "A coal plant's flue gas carries particulate matter, sulphur dioxide, oxides of nitrogen, carbon monoxide, mercury and carbon dioxide, and Indian norms tightened on all but the last: particulate limits of 30 to 50 milligrams per normal cubic metre, SO2 stepped by plant size from 100 to 600, NOx of 300 to 600, mercury near 0.003, plus water draw and consumption limits, all monitored continuously by stack instruments. The control train is standard and sequential - dust first, then gases, then the stack - and every stage is examinable.",
              "The electrostatic precipitator is the particulate workhorse. Discharge electrodes hang at negative 40 to 70 kilovolts in a corona that ionises the gas; dust particles charge negative and migrate to positive collecting plates; rapping systems shake both into hoppers. Efficiency runs above 99.5 percent and follows the Deutsch relation, one minus exponential of migration velocity times collecting area over gas flow, so performance is bought with plate area and lost to high-resistivity ash, which back-coronas and re-entrains - conditioning with sulphur trioxide or ammonia, and flue gas humidification, fix it. Fabric filter baghouses compete at fine sizes; wet ESPs polish after scrubbers. For SO2, the wet limestone process scrubs flue gas with a limestone slurry, air oxidising the product to gypsum - calcium sulphate - at 90 to 95 percent removal, saleable to cement plants; spray-dry and dry sorbent variants suit water-scarce sites. NOx is attacked in the furnace first by low-NOx burners and overfire air, then selectively catalytic reduction with ammonia if needed.",
              "Ash is a stream, not a waste: a typical Indian unit sends about four fifths of its ash out as fly ash, handled in lean or dense phase pneumatic systems to silos and dykes, and utilisation in cement, bricks, roads and agriculture is mandated with targets that rose over the years. The flue gas train orders the equipment - furnace, superheater and reheater, economiser, air preheater, ESP, induced draught fan, FGD, stack - and drawing it in that order with one line each is the highest-scoring sketch of the unit. The retrofit programme across the Indian fleet, with FGD towers rising beside old stations, is the current chapter of this story.",
            ],
            bullets: [
              "Coal plant pollutants: particulate, SO2, NOx, CO, mercury; Indian 2015 norms set limits per plant size with continuous stack monitoring.",
              "ESP: corona at -40 to -70 kV charges particles negative; migration to positive plates; rapping to hoppers; efficiency above 99.5 percent per the Deutsch relation.",
              "Resistivity rules ESP performance: high-resistivity ash back-coronas and re-entrains; gas conditioning and humidification restore collection.",
              "FGD: wet limestone scrubbing with air oxidation to gypsum (calcium sulphate) at 90-95 percent removal; spray-dry and dry sorbent variants for water-scarce sites.",
              "NOx: low-NOx burners and overfire air in the furnace, selective catalytic reduction with ammonia downstream; ash utilised in cement, bricks and roads by mandate.",
            ],
            table: {
              caption: "Emission control technologies.",
              headers: ["Technology", "Pollutant", "Principle", "Removal", "Note"],
              rows: [
                ["ESP", "Particulate", "Corona charging and plate migration", "> 99.5%", "Resistivity sensitive"],
                ["Fabric filter", "Particulate", "Filtration on bag cake", "> 99.9%", "Fine dust specialist"],
                ["Wet limestone FGD", "SO2", "Absorption then oxidation to gypsum", "90-95%", "Gypsum to cement"],
                ["SCR", "NOx", "Ammonia over catalyst", "80-90%", "Polishing stage"],
                ["Low-NOx burners", "NOx", "Staged combustion temperature control", "30-50%", "In-furnace measure"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The flue gas treatment train",
              caption:
                "Dust first, then gases, then the stack - the order is fixed by temperature and chemistry.",
              stages: [
                { label: "Furnace and boiler passes", note: "combustion and heat recovery" },
                { label: "Economiser and air preheater", note: "last heat recovered from gas" },
                { label: "Electrostatic precipitator", note: "fly ash charged, plates collected" },
                { label: "Induced draught fan", note: "balances furnace draught, pulls the train" },
                { label: "FGD absorber", note: "limestone slurry scrubs SO2 to gypsum" },
                { label: "Stack with CEMS", note: "continuous emission monitoring" },
              ],
            },
            callout: {
              type: "exam",
              title: "The ESP 7-mark is a fixture",
              body: "Sketch the ESP with discharge electrodes between collecting plates, write the charging-migration-rapping sequence, quote the Deutsch efficiency relation with its terms defined, and name resistivity and back corona as the performance villain. Finish with one line on FGD chemistry: SO2 plus limestone plus oxygen gives gypsum - the equation itself is often a full mark.",
            },
            keyTerms: [
              { term: "Electrostatic precipitator", definition: "A device that charges fly ash particles in a corona field and collects them on plates, removing over 99.5 percent of particulate from flue gas." },
              { term: "Flue gas desulphurisation", definition: "The scrubbing of SO2 from flue gas, typically with limestone slurry that is oxidised to saleable gypsum." },
              { term: "Fly ash", definition: "The fine ash carried out with flue gas, captured in ESP fields and utilised in cement, bricks and roads." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of an electrostatic precipitator with a sketch, state the Deutsch efficiency relation, and discuss the factors that affect its performance.",
                marks: 7,
                outline: [
                  "Place the ESP in the flue gas train between air preheater and ID fan.",
                  "Sketch: discharge electrodes between grounded collecting plates, hopper below, transformer-rectifier set.",
                  "Working: corona ionises gas at -40 to -70 kV; particles charge and migrate to plates; rapping drops ash to hoppers.",
                  "Write efficiency = 1 - exp(-wA/Q) and define migration velocity, plate area, gas flow.",
                  "Factors: ash resistivity (back corona), gas velocity and temperature, particle size distribution.",
                  "Remedies: gas conditioning, humidification, larger specific collection area.",
                  "Close with FGD chemistry and NOx measures in one line each.",
                ],
              },
              {
                q: "Write the chemistry of wet limestone FGD and name its byproduct and one use.",
                marks: 2,
              },
              {
                q: "Name two in-furnace measures for NOx control and one downstream polishing system.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Carbon capture and Indian case studies",
            body: [
              "Coal-fired generation emits roughly 0.9 to 1.0 kilogram of carbon dioxide per kilowatt-hour and gas roughly 0.4, and decarbonising existing thermal fleets focuses attention on carbon capture and storage. Three routes dominate. Post-combustion capture scrubs CO2 from flue gas with amine solvents such as MEA and MDEA, absorbing at cool temperatures, releasing at hot - it bolts onto existing plants, captures 85 to 95 percent, but the reboiler steam costs seven to ten efficiency points. Pre-combustion capture gasifies coal to synthesis gas, shifts carbon monoxide to CO2 and hydrogen, separates the CO2 and burns hydrogen in a turbine. Oxy-fuel combustion burns fuel in oxygen with recycled flue gas so the exhaust is almost pure CO2 and water, condensed away without chemistry.",
              "Case studies convert theory into evidence, and five capsules cover the syllabus. NTPC, the largest generator, runs a supercritical retrofit-and-build programme showing emission control at fleet scale. The Kakrapar and Kaiga PHWR stations with the Kalpakkam prototype fast breeder display the three-stage nuclear logic carried into practice. Bhadla solar park, about 2.2 gigawatts across Rajasthan phases, shows land assembly, tariff competition and grid evacuation solved together; the Muppandal and Tirunelveli wind clusters show how early industrial policy seeded a manufacturing base; and a private combined-cycle block such as those on regasified LNG on the west coast shows flexible gas generation in a renewable-heavy grid. Quote capacity, technology, the constraint it solved and one learning from each.",
              "The outlook ties the course together. India's non-fossil capacity targets demand thermal plants that start, ramp and two-shift; pumped storage and batteries will shape the load they chase; green hydrogen may inherit the flexibility duty later. Capture economics remain the open question - penalties of eight points are heavy against cheap solar - so utilisation, mineralisation and synthetic fuels are studied alongside storage in saline aquifers. In the exam, structure every case study answer the same way: context, capacity and technology, engineering constraint, outcome and learning - five lines, five marks, no padding.",
            ],
            bullets: [
              "Emission intensity: coal about 0.9-1.0 kg CO2 per kWh, gas about 0.4; capture targets the flue gas where it is densest.",
              "Post-combustion: amine absorption at 85-95 percent capture; reboiler steam costs 7-10 efficiency points; retrofit-friendly.",
              "Pre-combustion: gasify to syngas, water-gas shift to CO2 and hydrogen, separate, burn hydrogen - suited to IGCC-type new build.",
              "Oxy-fuel: burn in oxygen with recycled flue gas so exhaust is CO2 and water only; air separation is the energy cost.",
              "Case-study capsules: NTPC supercritical retrofits, PHWR plus PFBR three-stage nuclear, Bhadla solar, Muppandal wind, LNG combined-cycle blocks - each with capacity, technology, constraint, learning.",
            ],
            table: {
              caption: "Carbon capture routes compared.",
              headers: ["Route", "Where CO2 is removed", "Capture level", "Efficiency penalty", "Maturity"],
              rows: [
                ["Post-combustion amine", "Flue gas after the boiler", "85-95%", "7-10 points", "Demonstrated at scale"],
                ["Pre-combustion (IGCC)", "Syngas after water-gas shift", "90%+", "Plant complexity", "Demonstration phase"],
                ["Oxy-fuel", "Exhaust of oxygen firing", "> 95%", "Air separation duty", "Pilot scale"],
                ["Direct air capture", "Ambient air", "N/A (dilute source)", "Very high energy", "Emerging"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Cutting CO2 from a 500 MW coal unit",
              caption:
                "Three engineering routes and one dead end - name the penalty for whichever you choose.",
              start: "A 500 MW coal unit must cut CO2 deeply",
              branches: [
                { label: "Post-combustion amine scrubbing", outcome: "bolt-on retrofit, 90% capture, 8-point efficiency penalty", good: true },
                { label: "Pre-combustion gasification with shift", outcome: "new IGCC plant, hydrogen burned in the turbine", good: true },
                { label: "Oxy-fuel firing with CO2 recycle", outcome: "exhaust nearly all CO2 and water, condensed apart", good: true },
                { label: "Skip capture, buy offsets only", outcome: "emissions continue at source - burden shifting, not reduction", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "No capture is free",
              body: "Every capture route answer must state its energy penalty: about 7-10 efficiency points for amines, air-separation duty for oxy-fuel, added complexity for pre-combustion. Writing 'capture with no downside' reads as textbook copying; quoting the penalty and the steam source that pays it reads as engineering.",
            },
            keyTerms: [
              { term: "Carbon capture and storage", definition: "The separation of CO2 from plant flue or fuel streams, its compression, transport and permanent geological storage." },
              { term: "Post-combustion capture", definition: "Removal of CO2 from flue gas after combustion, typically by amine solvent absorption and thermal regeneration." },
              { term: "IGCC", definition: "Integrated gasification combined cycle: coal gasified to syngas fuelling a gas turbine, with the steam cycle on the waste heat boiler." },
            ],
            examQuestions: [
              {
                q: "Explain the three routes of carbon capture from thermal power plants with sketches, discuss the efficiency penalty of each, and outline the transport and storage options for the captured CO2.",
                marks: 7,
                outline: [
                  "Set the context: coal emits about 0.9-1.0 kg CO2 per kWh.",
                  "Post-combustion: amine absorption and regeneration sketch; 85-95% capture; reboiler steam penalty of 7-10 points.",
                  "Pre-combustion: gasifier, shift reactor, CO2 separation, hydrogen turbine; IGCC context.",
                  "Oxy-fuel: oxygen firing with recycled flue gas; exhaust of CO2 and water; air separation duty.",
                  "Compare the routes in one line each: retrofitability, penalty, maturity.",
                  "Transport and storage: pipelines, saline aquifers, depleted fields; utilisation as cement, synthetic fuels.",
                  "Conclude on economics against cheap renewables and the retrofit question for the Indian fleet.",
                ],
              },
              {
                q: "Why does amine-based capture reduce plant output, and where does the energy come from?",
                marks: 2,
              },
              {
                q: "Write a short structured note on any one Indian renewable park or advanced plant as a case study.",
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
        "RGPV ME-702(C) papers concentrate marks in the prime movers and their cycles: turbines (steam, hydro, gas) and the Rankine and Brayton improvements carry the bulk of the 7-mark questions, while fundamentals and economics supply the definitions and numericals that anchor every session. Allocate revision in roughly this ratio and keep one full numerical practice slot per unit.",
      ],
      weightedTopics: [
        { topic: "Steam turbines: impulse vs reaction, velocity triangles, compounding", weight: "8-10 marks", note: "Draw the two triangle sets every practice session; the Curtis and Rateau sketches are separately marked." },
        { topic: "Rankine cycle with reheat and regeneration on T-s", weight: "7-10 marks", note: "Derive efficiency, then one paragraph per improvement with numbers." },
        { topic: "Hydraulic turbines: Pelton, Francis, Kaplan selection and working", weight: "8-10 marks", note: "Specific speed ladder plus one full sketch per machine." },
        { topic: "Load curve, load duration curve and factor numericals", weight: "7-9 marks", note: "Five formulas verbatim; the chained numerical is near-certain." },
        { topic: "Gas turbine: regeneration, intercooling, reheat effects", weight: "7-9 marks", note: "The together-vs-alone efficiency argument is the marked subtlety." },
        { topic: "ESP construction and working with Deutsch relation", weight: "5-7 marks", note: "Flue gas train sketch plus the resistivity caveat." },
        { topic: "Condensers: surface condenser sketch, vacuum efficiency, TTD", weight: "5-7 marks", note: "Jet vs surface comparison table carries 2-3 marks on its own." },
        { topic: "Reactor types: PWR vs BWR vs PHWR sketches", weight: "6-8 marks", note: "Loop diagrams decide; add the heavy-water resource argument for India." },
        { topic: "Cooling towers and cogeneration numericals", weight: "5-7 marks", note: "Range, approach, effectiveness, water balance; two-part cogen energy balance." },
        { topic: "Tariff methods and depreciation formulas", weight: "5-7 marks", note: "Characteristics list plus straight line and sinking fund with numbers." },
      ],
    },
    {
      id: "six-weeks",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with about two hours a day, this schedule covers every section twice - once for understanding with sketches, once for revision against past questions - and reserves the final week for full-length numerical practice under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - fundamentals and economics", tasks: ["Classification on both axes; load curve and LDC sketches", "All five factor formulas plus two chained numericals", "Site selection per plant type; fixed vs variable cost example"] },
        { week: "Week 2", focus: "Unit II - Rankine and boilers", tasks: ["Rankine T-s with reheat and regeneration paragraphs", "La Mont, Benson, Loeffler, Velox circuits - one sketch each", "Numerical: cycle efficiency from enthalpies"] },
        { week: "Week 3", focus: "Unit II - turbines and condensing plant", tasks: ["Impulse vs reaction with velocity triangles (draw thrice)", "Rateau and Curtis compounding; surface condenser sketch", "Cooling tower balance and cogeneration numericals"] },
        { week: "Week 4", focus: "Unit III - hydro, gas, diesel", tasks: ["Pelton, Francis, Kaplan: sketches plus specific speed ladder", "Brayton with regeneration, intercooling, reheat - T-s and argument", "Diesel five systems; combined cycle derivation and numbers"] },
        { week: "Week 5", focus: "Unit IV - nuclear and renewable", tasks: ["Reactor components; PWR/BWR/PHWR loop diagrams", "FBR sodium circuits; defence in depth five levels", "Solar PV vs CSP with storage; wind cube law and Betz numericals"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Tariff methods and characteristics; depreciation formulas with numbers", "SCADA pyramid; ESP working and flue gas train", "Two full past papers under time; case-study capsules rehearsed"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      body: [
        "The final day is for consolidation, not new material. Rebuild the ten highest-yield artifacts from memory, check them against the section diagrams, and stop by early evening - power plant papers reward a rested hand that can draw.",
      ],
      bullets: [
        "Redraw from memory: Rankine T-s with reheat and regen, velocity triangles, Pelton and Francis sketches, PWR vs BWR loops, ESP, flue gas train.",
        "Recite the five factor formulas with their inequality directions (load factor and demand factor below one, diversity above one).",
        "Rewrite the three formula lines: sinking fund, Deutsch efficiency, wind power with Betz cap.",
        "Re-read the specific speed ladder (Pelton 10-35, Francis 60-300, Kaplan 300-1000) and the turbine-by-head ladder with it.",
        "Rehearse the case-study capsules: five lines each for NTPC supercriticals, PHWR and PFBR, Bhadla, Muppandal, and one combined-cycle block.",
        "Sleep: the paper is drawing-heavy, and a fresh hand draws cleaner velocity triangles than a tired one.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Open every 7-mark answer with the sketch or T-s diagram - examiners scan for the labelled figure first and questions without it cap near half marks.",
        "Write formulas symbolically before substituting numbers, and carry units through each line; method marks attach to the symbols, not the arithmetic.",
        "For turbine questions, draw inlet and outlet velocity triangles on a common blade-speed line and mark the whirl velocity change - the work expression follows in one line.",
        "Name components when you draw them: an unlabelled spiral casing or calandria earns nothing; five labelled parts earn five marks.",
        "Time-box: 2-mark questions in 4-5 minutes, 7-mark questions in 15-18 minutes, and hold the last 10 minutes to finish half-drawn sketches and check formulas.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Saying intercooling or reheating alone raises Brayton efficiency - each alone lowers it; only with regeneration does the trio raise both work and efficiency.",
        "Drawing the load duration curve in chronological order - it must be reordered by descending magnitude, and the area-equality argument stated.",
        "Forgetting the inequality directions: load factor and demand factor stay below one, diversity factor stays above one.",
        "Writing that the ejector or pump 'creates' condenser vacuum - condensing steam collapses its own volume; the condenser maintains the vacuum.",
        "Dropping pump work from the Rankine efficiency numerator - keep it; steam cycle back work is small but it is not zero.",
        "Quoting capture or park capacities without a technology line - numbers without the constraint and learning read as memorised filler.",
      ],
    },
  ],
};
