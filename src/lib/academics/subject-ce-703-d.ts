/**
 * Academics - RGPV Civil Engineering 7th-semester subject: CE-703(D) Building Services.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 *
 * Five units: plumbing and water supply; electrical and lighting; HVAC;
 * vertical transport and fire safety; acoustics, communications, automation.
 */

import type { AcademicSubject } from "./types";

export const ce703d: AcademicSubject = {
  id: "ce-703-d",
  code: "CE-703(D)",
  title: "Building Services",
  semester: "VII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to building services for civil engineers: plumbing and water supply, electrical and lighting design, HVAC, vertical transport and fire safety, and the acoustics, communications and automation that make a modern building smart and green.",
  description:
    "Five units walk from water demand, storage and drainage through electrical supply, wiring, earthing and the lumen method of lighting design, into thermal comfort, heat load estimation, ventilation and air conditioning systems, then up elevators, escalators, fire detection, sprinklers and escape planning, and finally into room acoustics, sound insulation, CCTV, access control, smart buildings and green certifications. Every section pairs the working formula with a worked example, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#38bdf8",
  emoji: "BS",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Plumbing and Water Supply",
      summary:
        "Getting water in and waste out: demand estimation, storage and pumping, distribution layouts and pipe sizing, fixtures and hot water systems, and building drainage with traps, vents and disposal.",
      chapter: {
        number: "01",
        title: "Plumbing and Water Supply",
        intro:
          "Unit I sizes every pipe in the building. It starts with how much water people use and how demand varies across the day, then stores it (sump and overhead tank) and moves it (pumps or hydro-pneumatic sets), distributes it through pipe networks sized by fixture units, heats it for bathing and kitchens, and finally drains the soil, waste and rainwater safely away through traps, stacks, vents and sewers.",
        inOneBreath:
          "Design demand starts from 135 LPCD for fully plumbed homes and peaks at 2.5-3 times the average hourly rate; storage splits between an underground sump and an overhead tank of about one-third of daily demand; pumps lift water against static head plus friction; distribution layouts - dead-end, grid-iron, radial - carry water sized by Hunter fixture units with velocities kept under about 2 m/s; hot water comes from storage, instantaneous, solar or heat-prompt systems stored at 60 deg C; and drainage runs through 50 mm trap seals, vented stacks and inspection chambers to the municipal sewer or a septic tank.",
        sections: [
          {
            number: "1.1",
            title: "Water demand estimation",
            body: [
              "Every building consumes water for drinking, cooking, bathing, flushing, laundry, cleaning and gardening, and the first task of plumbing design is to predict how much. Demand is expressed as litres per capita per day (LPCD). CPHEEO and NBC guidance put domestic demand at about 135 LPCD for houses with full plumbing, of which flushing alone claims 30-45 LPCD. Non-domestic occupancies differ sharply: offices need roughly 40-45 LPCD per employee for an eight-hour day, day schools 20-40 per student, and hospitals 300-450 per bed because laundry, kitchens and clinical use dominate.",
              "Demand is never steady, so averages are multiplied by peak factors. Hourly consumption in the morning and evening runs 2.5-3 times the average hourly rate, the maximum day is about 1.8 times the average day, and seasonal variation adds another 1.2-1.3 factor in summer. Fire demand is a separate, enormous flow fixed by formulas such as Kuichling's Q = 3180 sqrt(P) litres per minute with P the population in thousands; it governs city mains and hydrant design rather than house plumbing. At the city scale, arithmetic, geometric-increase and incremental-increase methods forecast the population that fixes the design horizon.",
              "Worked example. A five-storey apartment block houses 160 residents: 160 x 135 = 21,600 L/day, about 21.6 kL. Adding gardening at 5 percent and losses at 10 percent gives roughly 24.8 kL/day. The peak hour draws about 10-12 percent of daily demand in one hour - say 2.8 kL/h, which is about 0.8 L/s - and that flow sizes the down-take pipe and the booster pump. These figures then drive storage sizing in section 1.2 and pipe diameters in section 1.3, so a careless LPCD assumption propagates through the whole design.",
            ],
            bullets: [
              "Per capita demand is measured in LPCD; 135 LPCD is the CPHEEO baseline for fully plumbed Indian homes.",
              "Flushing alone claims 30-45 LPCD - dual-flush and low-flush fixtures cut this by half.",
              "Non-domestic rates: offices 40-45 LPCD per person, day schools 20-40 per student, hospitals 300-450 per bed.",
              "Peak factors: hourly 2.5-3 x average, maximum day about 1.8 x, seasonal 1.2-1.3 x.",
              "Fire demand formulas: Kuichling's Q = 3180 sqrt(P) L/min (P in thousands) and the National Board formula.",
              "Population forecasting - arithmetic, geometric-increase, incremental-increase - fixes the design horizon of municipal schemes.",
              "Worked chain: 160 residents x 135 LPCD = 21.6 kL/day; with losses about 25 kL/day; peak hour about 2.8 kL/h = 0.8 L/s.",
            ],
            table: {
              caption: "Typical water demand rates by occupancy (CPHEEO / NBC guidance).",
              headers: ["Occupancy", "Typical rate", "Notes"],
              rows: [
                ["Residence (full plumbing)", "135 LPCD", "Flushing 30-45 LPCD within this figure"],
                ["Hostel", "90-135 LPCD", "Shared kitchens lower the per-head demand"],
                ["Office (8-hour day)", "40-45 LPCD per person", "No bathing; canteen adds separately"],
                ["Day school", "20-40 LPCD per student", "Meals and flush type decide the value"],
                ["Hospital", "300-450 LPCD per bed", "Laundry, kitchens and clinical use dominate"],
                ["Hotel", "250-400 LPCD per bed", "Laundry and restaurants push the high end"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From headcount to design flow",
              caption: "The five-step chain every demand numerical walks through.",
              steps: [
                { label: "Count occupants", note: "residents, staff or students" },
                { label: "Apply LPCD rate", note: "match the occupancy class" },
                { label: "Add gardening and losses", note: "10-15 percent" },
                { label: "Apply peak factor", note: "2.5-3 on the average hour" },
                { label: "Read the design flow", note: "sizes pumps and down-take pipes" },
              ],
            },
            callout: {
              type: "exam",
              title: "The 135 number earns marks",
              body: "RGPV answers score on quoted standards. Always write 'about 135 LPCD per CPHEEO for fully plumbed residences', name the occupancy rate you use, and state the peak factor before multiplying. A bare final number with no stated rate loses the method marks even if the arithmetic is right.",
            },
            keyTerms: [
              { term: "Per capita demand", definition: "Water required per person per day in litres (LPCD), the starting point of all supply design." },
              { term: "Peak factor", definition: "Ratio of maximum hourly (or daily) demand to the corresponding average; 2.5-3 hourly for residences." },
              { term: "Fire demand", definition: "The large reserve flow for firefighting, estimated by formulas such as Kuichling's Q = 3180 sqrt(P) L/min." },
              { term: "Population forecasting", definition: "Arithmetic, geometric and incremental methods that project demand over the design period." },
            ],
            examQuestions: [
              {
                q: "Estimate the daily and peak-hour water demand for a five-storey apartment block housing 160 residents at 135 LPCD, allowing 5 percent for gardening and 10 percent for losses with a 2.5 peak factor on the average hour. State the CPHEEO basis and one fire-demand formula used at city scale.",
                marks: 7,
                outline: [
                  "State the design rate: 135 LPCD for fully plumbed residences per CPHEEO.",
                  "Daily demand = 160 x 135 = 21,600 L/day = 21.6 kL.",
                  "Add gardening 5 percent and losses 10 percent: 21.6 x 1.15 = about 24.8 kL/day.",
                  "Average hour = 24.8 / 24 = about 1.03 kL/h; peak hour = 2.5 x = about 2.6 kL/h.",
                  "Convert to flow: 2600 L / 3600 s = about 0.72 L/s design flow.",
                  "Name Kuichling's formula Q = 3180 sqrt(P) L/min for city fire demand.",
                  "Conclude how the numbers feed storage and pipe sizing in later sections.",
                ],
              },
              {
                q: "Define per capita demand and state its CPHEEO value for fully plumbed houses.",
                marks: 2,
              },
              {
                q: "Why must designers apply hourly and daily peak factors instead of average demand? Give typical values.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Water storage and pumping",
            body: [
              "Storage serves three purposes: balancing (letting a small pump or a weak municipal main serve a large peak), breakdown reserve (water when supply or power fails), and firefighting reserve. Common Indian practice puts one to one-and-a-half days of demand in the underground sump - sized to survive the municipal supply hours - and about one-third of daily demand in the overhead tank (OHT) on the terrace, which also supplies the gravity head for most fixtures and feeds the terrace hydrant or hose reel.",
              "Two pressure schemes exist. The classic one pumps from sump to OHT and lets gravity feed the floors below - cheap, simple, and self-protecting. The hydro-pneumatic alternative keeps a pressure vessel and variable-frequency-drive pumps delivering constant pressure at every tap, ideal for tall towers where an OHT is a structural and aesthetic burden. Pump head equals static lift plus friction plus residual pressure, and motor power follows P = 0.00981 x Q x H / efficiency in kW with Q in L/s and H in metres. Installations use one duty plus one standby pump.",
              "Worked example. The 25 kL/day block of section 1.1 needs an OHT of about one-third daily demand: 8.3 kL, so build 9-10 kL. Refilling 10 kL in 2 hours needs 10,000/7200 = about 1.4 L/s. With the tank water level at +21 m and friction plus residual of 9 m, total head is 30 m; motor power = 0.00981 x 1.4 x 30 / 0.55 = about 0.75 kW, so fit a 1 kW pump with a standby. A sump of 25 kL covers a one-day interruption, and the terrace tank doubles as the fire reserve.",
            ],
            bullets: [
              "Balancing storage lets a small pump serve a large peak; breakdown reserve covers supply and power failures.",
              "Rule of thumb: OHT about 1/3 of daily demand; sump 1-1.5 days, tuned to municipal supply hours.",
              "Pump head = static lift + friction losses + residual head at the highest fixture.",
              "Pump power (kW) = 0.00981 x Q (L/s) x H (m) / pump efficiency - memorise this compact form.",
              "Duty-standby pairs (one working, one spare) prevent dry taps during maintenance or failure.",
              "Hydro-pneumatic (VFD) sets give constant pressure floor-wise but need power backup and skilled upkeep.",
              "Worked: 10 kL OHT refilled in 2 h at 1.4 L/s against 30 m head = about 0.75 kW motor input.",
            ],
            codeExample: {
              language: "python",
              caption: "Sizing the booster pump for the worked apartment block.",
              code: `def pump_power(flow_lps, static_m, friction_m, efficiency):
    """Input power for a building booster pump."""
    head_m = static_m + friction_m
    kw = 0.00981 * flow_lps * head_m / efficiency
    return head_m, kw

head, kw = pump_power(flow_lps=1.4, static_m=21, friction_m=9, efficiency=0.55)
print("Total head:", round(head, 1), "m")
print("Motor input:", round(kw, 2), "kW - fit the next standard rating")
refill_h = 10000 / 1.4 / 3600
print("Refill check: 1.4 L/s fills a 10 kL tank in", round(refill_h, 1), "hours")`,
            },
            diagram: {
              kind: "fork",
              title: "How will the building get its pressure?",
              caption: "Three legitimate answers - and one shortcut that fails.",
              start: "Sump water must reach the topmost tap",
              branches: [
                {
                  label: "Overhead tank + gravity",
                  outcome: "Cheap, simple, keeps a fire reserve on the terrace; the classic low-rise and mid-rise answer",
                  good: true,
                },
                {
                  label: "Hydro-pneumatic VFD set",
                  outcome: "Constant pressure at every floor with no terrace load; needs power backup and maintenance skill",
                  good: true,
                },
                {
                  label: "Direct municipal pressure",
                  outcome: "Works only where street pressure reliably exceeds building height; private boosters on mains are illegal",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Protect the pump from running dry",
              body: "Every sump needs low-level float switches that cut the pump before the suction strainer gulps air - dry running destroys seals within minutes. Pair them with high-level cutoffs at the OHT so the pump stops on a full tank, and test both floats at handover, not after the first burnt motor.",
            },
            keyTerms: [
              { term: "Balancing storage", definition: "Tank volume that lets steady pumping meet fluctuating draw-off." },
              { term: "Hydro-pneumatic system", definition: "Pressure vessel plus VFD pumps delivering constant supply pressure without an overhead tank." },
              { term: "Pump head", definition: "Static lift plus friction losses plus residual pressure, in metres of water." },
              { term: "Duty-standby", definition: "Two pumps of equal rating, one operating and one spare, for reliability." },
            ],
            examQuestions: [
              {
                q: "Explain the purposes of water storage in buildings and size the overhead tank, sump and booster pump for a residential block consuming 25 kL/day: OHT one-third of daily demand, refill in 2 hours, tank at +21 m with 9 m of friction and residual losses and 55 percent pump efficiency.",
                marks: 7,
                outline: [
                  "List the three purposes: balancing, breakdown reserve, firefighting reserve.",
                  "OHT = 25/3 = about 8.3 kL; provide 9-10 kL.",
                  "Refill flow = 10,000 L / (2 x 3600 s) = about 1.4 L/s.",
                  "Total head = 21 + 9 = 30 m.",
                  "Power = 0.00981 x 1.4 x 30 / 0.55 = about 0.75 kW; select 1 kW with standby.",
                  "Sump: 1-1.5 days = 25-38 kL depending on municipal supply hours.",
                  "Mention float protection and duty-standby arrangement to close.",
                ],
              },
              {
                q: "Differentiate between duty and standby pumps in a building water system.",
                marks: 2,
              },
              {
                q: "Why is a hydro-pneumatic pumping set preferred in high-rise buildings? State two limitations.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Distribution layouts and pipe sizing",
            body: [
              "Water must reach every fixture at adequate pressure - roughly 5-15 m of head at the tap - and two feeding patterns achieve it. Upfeed systems rely on street pressure and serve only the lowest floors; downfeed (gravity) systems hang from the overhead tank and dominate Indian practice. Layouts differ too: dead-end (tree) systems are cheap but leave stagnant dead legs, grid-iron (ring) layouts loop the building for better pressure and flushing ability, and radial systems fan out from a central manifold, common in premium plumbing.",
              "Materials and velocities shape the network. GI steel is traditional but corrodes; CPVC and PPR plastics, HDPE and composite pipes now dominate for their corrosion-free joints. Velocity limits protect the system: about 0.6-1.2 m/s on pump suction to avoid cavitation, 1-2 m/s in distribution lines, and never above about 3 m/s or the flow whistles and erodes fittings. Every size change, valve and meter adds a fitting loss that feeds back into the pump head calculation.",
              "Sizing converts fixture counts to probable simultaneous flow. Each fixture carries Hunter fixture units - a lavatory 2, kitchen sink 2-3, shower 2, bathtub 4, WC flush cistern 3, flush valve a heavy 10 - and a branch total of, say, 10 units maps to a probable flow of about 0.35-0.4 L/s on Hunter's curve, because not everything runs at once. A 25 mm pipe at 1.5 m/s carries about 0.74 L/s, so it serves the branch with margin. Friction charts or Hazen-Williams then verify head loss per 100 m against the residual pressure available.",
            ],
            bullets: [
              "Downfeed (gravity from OHT) is the standard Indian pattern; upfeed works only where street pressure is strong.",
              "Layouts: dead-end (tree), grid-iron (ring) and radial (manifold) - grid-iron flushes best, dead-end is cheapest.",
              "Materials: GI, CPVC, PPR, HDPE and composite - plastic wins on corrosion and jointing speed.",
              "Velocity limits: suction 0.6-1.2 m/s, distribution 1-2 m/s, hard ceiling about 3 m/s for noise and erosion.",
              "Fixture units measure probable demand: lavatory 2, sink 2-3, shower 2, bathtub 4, WC cistern 3, flush valve 10.",
              "Hunter's curve converts total fixture units to the probable simultaneous flow used for sizing.",
              "Hazen-Williams or friction charts verify head loss; residual pressure at the topmost fixture must stay about 5-15 m.",
            ],
            table: {
              caption: "Typical fixture units and minimum supply sizes.",
              headers: ["Fixture", "Fixture units", "Min supply (mm)", "Note"],
              rows: [
                ["Lavatory (wash basin)", "2", "12-15", "Aerators limit discharge to about 0.1 L/s"],
                ["Kitchen sink", "2-3", "15", "Hot and cold branches each"],
                ["Shower", "2", "15", "Pressure-balancing valve prevents scald"],
                ["Bathtub", "4", "20", "High draw rate dominates branch sizing"],
                ["WC flushing cistern", "3", "15", "Dual-flash cisterns discharge 3-6 L"],
                ["WC flush valve", "10", "25", "Needs a dedicated branch and firm pressure"],
                ["Washing machine", "4", "15", "Hose bib with vacuum breaker"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Sizing a supply pipe, stage by stage",
              caption: "Fixture units to a verified diameter - the sequence examiners reward.",
              stages: [
                { label: "List fixtures on the branch", note: "count each type" },
                { label: "Total the fixture units", note: "Hunter loading units" },
                { label: "Read probable flow", note: "simultaneous-demand curve" },
                { label: "Pick a trial diameter", note: "keep velocity under about 2 m/s" },
                { label: "Check friction loss", note: "Hazen-Williams per 100 m" },
                { label: "Confirm residual head", note: "5-15 m at the highest fixture" },
              ],
            },
            callout: {
              type: "exam",
              title: "Fixture units, not fixture counts",
              body: "The classic slip is adding flows of all fixtures arithmetically. Buildings never draw everything at once: convert fixture units to probable simultaneous flow via Hunter's curve, size for that, and only then check the worst single draw (usually a flush valve) separately.",
            },
            keyTerms: [
              { term: "Fixture unit", definition: "Hunter's dimensionless loading unit expressing a fixture's probable demand." },
              { term: "Hunter's curve", definition: "Graph mapping total fixture units to probable simultaneous flow in L/s." },
              { term: "Downfeed system", definition: "Gravity distribution from an overhead tank through down-take pipes." },
              { term: "Grid-iron layout", definition: "Looped distribution giving two-way feed, better pressure and self-flushing." },
              { term: "Hazen-Williams formula", definition: "Empirical relation used to compute friction head loss in water pipes." },
            ],
            examQuestions: [
              {
                q: "Describe the distribution systems used inside buildings (upfeed, downfeed, dead-end, grid-iron, radial) and explain pipe sizing by fixture units, showing how a branch serving a WC cistern, a lavatory, a shower and a kitchen sink (total 10 units) is sized.",
                marks: 7,
                outline: [
                  "Define upfeed and downfeed; state that downfeed from an OHT is standard practice.",
                  "Compare dead-end, grid-iron and radial layouts on cost, pressure and dead legs.",
                  "List fixture units: WC cistern 3, lavatory 2, shower 2, sink 2-3 - total about 10.",
                  "Read Hunter's curve: 10 units gives a probable flow of about 0.35-0.4 L/s.",
                  "Trial diameter: 25 mm carries about 0.74 L/s at 1.5 m/s - adequate.",
                  "Verify friction loss with Hazen-Williams and residual head of 5-15 m at the highest fixture.",
                  "Conclude with material choice (CPVC/PPR vs GI) and velocity limits.",
                ],
              },
              {
                q: "Define a fixture unit and state the value assigned to a bathtub.",
                marks: 2,
              },
              {
                q: "Why is flow velocity in building water pipes limited to about 2 m/s? State two consequences of exceeding it.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Plumbing fixtures and hot water supply",
            body: [
              "Fixtures are the visible end of plumbing: wash basins, kitchen sinks, bathtubs, showers, WCs, urinals and floor (nahani) traps. Every fixture below the sewer level needs a trap - a bent pipe holding a water seal at least 50 mm deep - in P, Q or S shapes to block sewer gas. WCs come as washdown or siphonic, with dual-flush cisterns discharging about 3 L on the small and 6 L on the large flush, and water-efficient aerators and low-flow showers trim the 135 LPCD budget noticeably without changing user habits.",
              "Hot water demand in residences runs 30-45 L per person per day at 60 deg C. Generation options: storage heaters (electric element or gas burner in an insulated tank), instantaneous geysers that heat on flow, solar systems with flat-plate (FPC) or evacuated-tube (ETC) collectors plus electric backup, and heat-pump water heaters with a coefficient of performance of 3-4. Store distribution water at 60 deg C - it kills Legionella bacteria - and blend down to 45-50 deg C at the point of use with anti-scald mixing valves.",
              "Worked sizing. A family of four needing 40 L each per day at 60 deg C consumes 160 L/day. Rule-of-thumb solar sizing is about 1 sq m of collector per 50-60 L of daily hot water, so 2.5-3 sq m of ETC collector with a 150-200 L tank covers the load, with a 2-3 kW electric element for monsoon days. Long pipe runs deserve a recirculation loop so hot water arrives in seconds, and every hot pipe needs insulation - bare 15 mm pipework sheds several watts per metre continuously.",
            ],
            bullets: [
              "Traps - P, Q and S shapes - hold a water seal of at least 50 mm to block sewer gases.",
              "Dual-flush cisterns: about 3 L small flush and 6 L full flush, halving the flushing component of 135 LPCD.",
              "Hot water demand: 30-45 L per person per day at 60 deg C for residences.",
              "Generation choices: storage tank, instantaneous geyser, solar FPC/ETC with backup, or heat pump (COP 3-4).",
              "Store at 60 deg C against Legionella; deliver 45-50 deg C through anti-scald mixing valves.",
              "Solar rule of thumb: about 1 sq m of collector per 50-60 L of daily demand - 4 people need 2.5-3 sq m.",
              "Insulate all hot pipes and consider a recirculation loop where runs are long.",
            ],
            table: {
              caption: "Minimum trap and outlet sizes for common fixtures.",
              headers: ["Fixture", "Trap size (mm)", "Seal depth", "Note"],
              rows: [
                ["Wash basin", "32", "50 mm min", "P-trap against wall"],
                ["Kitchen sink", "40", "50 mm min", "Grease trap ahead in commercial kitchens"],
                ["Shower / bathtub", "40", "50 mm min", "Floor trap serves the shower area"],
                ["WC (siphonic)", "100 built-in", "Integral", "S-trap to ground or P-trap to stack"],
                ["Floor trap (nahani)", "65-75", "50 mm min", "Grating flush with floor"],
                ["Urinal (stall)", "40-50", "50 mm min", "Waterless types save 1-3 L per use"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the hot water system",
              caption: "Volume of demand against site conditions picks the technology.",
              axes: {
                x: "Daily hot water volume (low to high)",
                y: "Sun and tariff conditions (favourable to poor)",
              },
              quadrants: [
                {
                  label: "Small demand, favourable sun",
                  note: "Solar FPC with 150 L tank and a 2 kW backup element",
                },
                {
                  label: "Large demand, favourable sun",
                  note: "Solar ETC bank with heat-pump backup; payback in 4-6 years",
                },
                {
                  label: "Small demand, poor conditions",
                  note: "Instantaneous electric geyser, 3-6 kW; gas where piped",
                },
                {
                  label: "Large demand, poor conditions",
                  note: "Storage calorifier on a boiler, or plate heat exchanger for hotels",
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Sixty degrees is a health rule, not a preference",
              body: "Legionella pneumophila multiplies in warm (25-45 deg C) stored water and kills through inhaled aerosols from showers. Storage tanks must hold 60 deg C, and the blended 45-50 deg C delivery protects users from scalding. An answer that omits Legionella control loses easy marks in any hot-water question.",
            },
            keyTerms: [
              { term: "Trap seal", definition: "The water plug (minimum 50 mm) in a trap that blocks sewer gas passage." },
              { term: "Dual-flush cistern", definition: "WC cistern offering about 3 L and 6 L flushes to save water." },
              { term: "Solar water heater", definition: "FPC or ETC collectors that absorb solar radiation to heat storage water." },
              { term: "Calorifier", definition: "Heat exchanger producing hot water from a primary boiler or steam source." },
              { term: "Legionella control", definition: "Storing hot water at 60 deg C to prevent bacterial growth." },
            ],
            examQuestions: [
              {
                q: "Describe the plumbing fixtures used in residential buildings with their trap requirements, and explain hot water generation systems. Size a solar water heater for a family of four needing 40 L per person per day at 60 deg C, and state the Legionella control measure.",
                marks: 7,
                outline: [
                  "List fixtures and typical trap sizes: basin 32 mm, sink 40 mm, WC 100 mm, seal 50 mm minimum.",
                  "Explain trap function - P, Q, S shapes and the water seal principle.",
                  "Hot water demand = 4 x 40 = 160 L/day at 60 deg C.",
                  "Solar rule: 1 sq m collector per 50-60 L/day gives 2.5-3 sq m plus a 150-200 L tank.",
                  "Provide a 2-3 kW electric backup element for cloudy days.",
                  "State storage at 60 deg C for Legionella and 45-50 deg C delivery via mixing valve.",
                  "Add insulation of pipes and a recirculation loop for long runs.",
                ],
              },
              {
                q: "Sketch P-trap and S-trap and state the minimum depth of the water seal.",
                marks: 2,
              },
              {
                q: "Why should hot water be stored at 60 deg C but delivered at about 45 deg C?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Building drainage systems",
            body: [
              "Drainage removes three streams: soil water from WCs and urinals, waste water from basins, sinks and appliances, and stormwater from roofs and yards. Two classic arrangements organize them. The one-pipe system runs a single 100 mm stack receiving soil and waste with deep-seal traps and generous venting; the two-pipe system keeps separate soil and waste stacks, each vented, joining at the ground drain - older British practice, more pipe but easier fault-finding. Every fixture keeps its 50 mm seal, and an intercepting trap at the last manhole separates the building from the sewer.",
              "Design is gradients and venting. Horizontal branches run steeper as they shrink: about 1 in 40 for 100 mm pipes, 1 in 60 for 150 mm, and 1 in 80 for 200-230 mm, keeping a self-cleansing velocity near 0.75-0.9 m/s without scouring. Stacks terminate as vent pipes through the roof so that discharges cannot siphon the traps below; branch ventilating pipes protect isolated fixtures. Inspection chambers or manholes at every bend and junction allow rodding, and gully traps catch sullage from yards and kitchens.",
              "At the boundary, the choice is municipal sewer or on-site disposal. Where no sewer exists, a septic tank - about 0.12 cubic m of liquid capacity per user plus sludge storage, desludged every one to two years - settles and digests, and the effluent soaks away in a soak pit or dispersion trench sized by soil percolation. Grease traps protect kitchen lines, and roof drainage needs down-takes sized for a rainfall intensity of 75-100 mm/h. Drainage laid to correct gradient and vented properly is invisible; done wrong it gurgles, siphons and stinks.",
            ],
            bullets: [
              "Three streams: soil (WC), waste (basins, sinks) and stormwater - keep storm out of the sewer where possible.",
              "One-pipe system: single stack, deep seals, heavy venting; two-pipe: separate soil and waste stacks.",
              "Trap seals of 50 mm minimum; intercepting trap at the final manhole before the sewer.",
              "Gradients: 1 in 40 for 100 mm, 1 in 60 for 150 mm, 1 in 80 for 200-230 mm drains - self-cleansing 0.75-0.9 m/s.",
              "Vent pipes through the roof prevent self-siphonage and back-pressure from destroying seals.",
              "Inspection chambers at bends and junctions; gully traps for yard sullage; grease traps for kitchens.",
              "Septic tank: about 0.12 cu m per user plus sludge room, desludged every 1-2 years, effluent to a soak pit.",
              "Roof down-takes sized for 75-100 mm/h rainfall intensity.",
            ],
            codeExample: {
              language: "text",
              caption: "Two-pipe vs one-pipe drainage - sketch plan for the answer book.",
              code: `TWO-PIPE SYSTEM (soil and waste kept separate)

  roof vent                       roof vent
     |                                |
  [ soil stack 100 mm ]       [ waste stack 50-75 mm ]
     |      WC                        |    basin, sink
     +------+----+                    +-----+----+
            |    gully trap ----------------+
            |                                |
      [ inspection chamber ] --------- [ IC ]
                          |
                   municipal sewer

ONE-PIPE SYSTEM: every fixture joins the single 100 mm stack;
each trap needs a 50 mm minimum seal and the stack vents at the top.`,
            },
            diagram: {
              kind: "flow",
              title: "The journey of building sewage",
              caption: "Fixture to final disposal - each arrow is a design decision.",
              steps: [
                { label: "Fixture + trap", note: "50 mm seal blocks gas" },
                { label: "Branch drain", note: "1 in 40 for 100 mm" },
                { label: "Soil / waste stack", note: "vented above roof" },
                { label: "Inspection chamber", note: "at bends and junctions" },
                { label: "Sewer or septic tank", note: "intercepting trap in between" },
              ],
            },
            callout: {
              type: "warning",
              title: "Trap seals die quietly",
              body: "Self-siphonage (water rushing past a trap pulls the seal out), back-pressure (compression in an unvented stack blows it out) and evaporation in unused fixtures all destroy seals. The fix is ventilation and a 50 mm minimum seal depth - an exam answer must name both the cause and the cure.",
            },
            keyTerms: [
              { term: "Soil and waste water", definition: "Soil is discharge from WCs and urinals; waste is from basins, sinks and appliances." },
              { term: "One-pipe system", definition: "Single stack receiving soil and waste together, with deep-seal traps and venting." },
              { term: "Intercepting trap", definition: "Trap at the last manhole separating the house drain from the public sewer." },
              { term: "Self-siphonage", definition: "Loss of trap seal caused by water velocity sucking the seal water out." },
              { term: "Septic tank", definition: "On-site settling and digestion chamber followed by a soak-away for the effluent." },
            ],
            examQuestions: [
              {
                q: "Explain one-pipe and two-pipe drainage systems with sketches, stating trap requirements and branch gradients. Describe the septic tank and soak-pit arrangement for a building not connected to a municipal sewer.",
                marks: 7,
                outline: [
                  "Define soil, waste and stormwater streams.",
                  "Sketch the one-pipe system: single 100 mm stack, deep-seal traps, vent at top.",
                  "Sketch the two-pipe system: separate soil and waste stacks joining at the ground drain.",
                  "State 50 mm minimum trap seal and the intercepting trap at the final chamber.",
                  "Gradients: 1 in 40 (100 mm), 1 in 60 (150 mm), 1 in 80 (200-230 mm) for self-cleansing flow.",
                  "Septic tank: capacity about 0.12 cu m per user plus sludge storage; desludge every 1-2 years.",
                  "Soak pit or dispersion trench sized by percolation test; mention grease trap for kitchens.",
                ],
              },
              {
                q: "What is a trap seal and what is its minimum depth in building drainage?",
                marks: 2,
              },
              {
                q: "Why are vent pipes provided in drainage systems? Name two mechanisms that destroy trap seals.",
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
      title: "Electrical and Lighting",
      summary:
        "Powering and lighting the building: supply and distribution, wiring and earthing, illumination quantities and lux levels, the lumen method of design, and lamps, luminaires and daylighting.",
      chapter: {
        number: "02",
        title: "Electrical and Lighting",
        intro:
          "Unit II follows electricity from the 11 kV feeder to the desk lamp and daylight from the sky to the work plane. It covers single- and three-phase supply, main panels and distribution boards; wiring systems, protective devices and earthing; the photometric quantities and recommended lux levels; the lumen method that sizes a lighting installation; and the lamp families, luminaires and daylighting factors that finish the job.",
        inOneBreath:
          "The utility supplies 11 kV to a transformer stepping down to 415 V three-phase or 230 V single-phase at 50 Hz; power flows through the main panel, bus risers and floor distribution boards to final circuits wired in PVC conduit and protected by MCBs, MCCBs and 30 mA RCCBs over an earthing system of pipe or plate electrodes kept below 5 ohms; illumination is measured in lumens, candela, lux and luminance with recommended levels from 30 lux in stores to 500 lux on drafting desks; the lumen method sizes installations as N = E x A / (F x UF x MF) using room index and utilization factors; and lamps - incandescent, fluorescent, HID and LED - combine with daylight factor and its sky, external and internal components to light the building.",
        sections: [
          {
            number: "2.1",
            title: "Power supply and distribution",
            body: [
              "Electricity enters as an 11 kV high-voltage feeder to a plinth or room substation, where a transformer steps it down to 415 V three-phase, 50 Hz - each phase sitting 230-240 V above neutral. Small loads up to roughly 5-10 kW take a single-phase supply; anything larger, and certainly whole buildings, take three-phase, whose three live conductors let large motors start smoothly and balance the network. Very large consumers prefer the HT connection and their own transformer because energy charges per unit are lower and voltage can be regulated on site.",
              "The distribution chain is strict: service main, energy meter (a trivector meter for HT consumers), main panel with an incomer MCCB and busbar, risers or bus trunking up the building, a distribution board per floor or zone with grouped MCBs, and finally the circuits serving lights, fans, sockets and motors. Estimation distinguishes connected load (everything switched on at once) from maximum demand (what actually coincides), linked by a demand factor of roughly 0.4-0.7; standby comes from a diesel generator with automatic changeover and UPS or inverter backup for critical loads.",
              "Worked example. A small office has 80 kW of connected load; with a demand factor of 0.6 the maximum demand is 48 kW. At 0.8 power factor that is 60 kVA, drawing 48,000 / (1.732 x 415 x 0.8) = about 84 A per phase at 415 V three-phase - so a 100 A, four-pole incomer MCCB with margin, a 75-100 kVA transformer headroom and a 62.5 kVA (50 kW) DG set for standby. Balancing the three phases keeps the neutral current low and the metering honest.",
            ],
            bullets: [
              "Utility supply: 11 kV feeder to an on-site transformer giving 415 V three-phase / 230 V single-phase at 50 Hz.",
              "Single phase serves small loads (to about 5-10 kW); three phase is standard for buildings and motors.",
              "HT (11 kV) supply with an owned transformer cuts energy tariffs for large consumers.",
              "Distribution chain: meter - main panel MCCB - bus riser - floor DBs with MCBs - final circuits.",
              "Demand factor = maximum demand / connected load, typically 0.4-0.7; size cables and transformers on demand.",
              "Standby: DG set with automatic changeover (ATS) plus UPS or inverter for critical and life-safety loads.",
              "Worked: 80 kW connected at 0.6 factor = 48 kW demand = 60 kVA at 0.8 pf = about 84 A per phase.",
            ],
            table: {
              caption: "Single-phase versus three-phase supply.",
              headers: ["Aspect", "Single phase 230 V", "Three phase 415 V"],
              rows: [
                ["Conductors", "Phase + neutral + earth", "3 phases + neutral + earth"],
                ["Typical load", "Up to about 5-10 kW", "Above 10 kW up to MW scale"],
                ["Motors", "Only fractional-kilowatt motors", "Lifts, pumps and AHUs start smoothly"],
                ["Metering", "Simple whole-current meter", "CT-operated LT meter or HT trivector meter"],
                ["Network effect", "Unbalances the distribution feeder", "Loads spread across three phases"],
                ["Tariff", "Higher rate per unit", "Lower HT rate with own transformer"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "From the grid to the desk lamp",
              caption: "The single-line hierarchy - draw it top to bottom in the exam.",
              layers: [
                { label: "Utility 11 kV HV feeder", note: "HT supply to the premises" },
                { label: "Transformer 11 kV / 415 V + HT panel", note: "steps down, protects and meters" },
                { label: "Main LT panel", note: "incomer MCCB, busbar, outgoing feeders" },
                { label: "Floor distribution boards", note: "MCB groups per circuit" },
                { label: "Final circuits", note: "lights, fans, sockets, motors, DG/UPS changeover" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the single-line diagram",
              body: "Questions on 'describe the electrical distribution in a building' are diagram questions: sketch the chain utility - transformer - main panel - DB - circuit, label every switchgear item (MCCB, MCB, RCCB), and mark where the meter and the DG changeover sit. Labels earn the marks; prose alone does not.",
            },
            keyTerms: [
              { term: "Connected load", definition: "Sum of the ratings of all equipment installed in the building." },
              { term: "Demand factor", definition: "Ratio of maximum demand to connected load, typically 0.4-0.7." },
              { term: "MCCB", definition: "Moulded-case circuit breaker - the heavy incomer and feeder protection device." },
              { term: "Trivector meter", definition: "HT metering instrument recording active, reactive and apparent energy." },
              { term: "Single-line diagram", definition: "Condensed schematic showing the distribution chain one-line-per-phase." },
            ],
            examQuestions: [
              {
                q: "Describe the electric supply and distribution arrangement of a multi-storey building with a single-line diagram, explaining the role of the transformer, main panel, distribution boards and protective devices. Differentiate single-phase and three-phase supply.",
                marks: 7,
                outline: [
                  "State the incoming supply: 11 kV feeder to an on-site transformer, 415/230 V, 50 Hz output.",
                  "Draw the chain: meter - incomer MCCB - bus riser - floor DBs - final circuits.",
                  "Explain the transformer and HT panel, and why large consumers prefer HT supply.",
                  "Compare single-phase (small loads) and three-phase (balanced building supply, motor starting).",
                  "Describe the main panel and DB: MCCBs, MCB groups, busbar, future spare ways.",
                  "Mention demand factor 0.4-0.7 linking connected load to maximum demand.",
                  "Close with standby: DG set with ATS and UPS for critical loads.",
                ],
              },
              {
                q: "Define demand factor and state its typical range in buildings.",
                marks: 2,
              },
              {
                q: "Why do large buildings take an 11 kV supply with their own transformer instead of an LT connection?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Wiring systems, protection and earthing",
            body: [
              "Wiring has evolved from cleat and casing-capping systems to the modern default: copper conductors with FRLS PVC insulation inside PVC conduit - surface-mounted where exposed to view, recessed in walls and slabs for aesthetics, with flexible metallic conduit for final drops to machinery and armoured cable for buried or outdoor runs. Conductor sizing obeys two masters: current-carrying capacity (a 1.0 sq mm copper wire carries about 11 A, 1.5 sq mm about 14 A, 2.5 sq mm about 18.5 A) and voltage drop, normally limited to about 3 percent on branch circuits and 5 percent overall.",
              "Protection layers every level: rewirable and HRC fuses at the legacy end; MCBs with B, C or D tripping curves for lighting, general and motor circuits; MCCBs at feeders; and the 30 mA residual-current device (RCCB or ELCB) that compares live and neutral currents and trips within milliseconds when the difference leaks through a human body. Earthing completes the safety chain: pipe earthing (a 38 mm GI pipe about 2 m deep), plate earthing (a GI or copper plate in a charcoal-and-salt pit) and strip earthing for large grids - tested to keep earth electrode resistance below about 5 ohms, and below 1 ohm for substation grids.",
              "Worked circuit check. A 3 kW storage geyser at 230 V draws 3000/230 = about 13 A; with a 1.25 diversity margin the design current is 16 A, so a 16 A MCB on a 2.5 sq mm copper circuit is correct. A split air conditioner of 1.5 TR drawing about 9 A takes a 20 A, C-curve MCB on 4.0 sq mm for starting-current tolerance. Every socket circuit runs through a 30 mA RCCB, and the earth wire - never smaller than half the phase conductor - bonds every metal enclosure, conduit and panel to the electrode pit.",
            ],
            bullets: [
              "Modern wiring: FRLS copper cable in surface or recessed PVC conduit; armoured cable for buried runs.",
              "Cable capacity: 1.0 sq mm about 11 A, 1.5 sq mm about 14 A, 2.5 sq mm about 18.5 A, 4.0 sq mm about 25 A.",
              "Voltage drop limits: about 3 percent on branch circuits, 5 percent from meter to the farthest point.",
              "MCB curves B (lighting), C (general and motor), D (high inrush); MCCBs at feeder level.",
              "RCCB/ELCB trips at 30 mA of live-neutral imbalance - the personal-shock guard.",
              "Earthing: pipe (38 mm GI, 2 m deep), plate (charcoal-salt pit) and strip; earth resistance below about 5 ohms.",
              "Worked: 3 kW geyser = 13 A, on a 16 A MCB and 2.5 sq mm copper circuit.",
            ],
            codeExample: {
              language: "text",
              caption: "A typical residential floor distribution-board schedule.",
              code: `DISTRIBUTION BOARD DB-3 (residential floor)

Circuit  Load                   Current  MCB        Cable
L1       Lights, 10 points      3 A      6 A  C     1.0 sq mm Cu
L2       Fans + exhaust         3 A      6 A  C     1.0 sq mm Cu
P1       6 A sockets, 6 points  5 A      16 A C     2.5 sq mm Cu
P2       16 A sockets, 2 points 10 A     20 A C     4.0 sq mm Cu
WH       Water heater 3 kW      13 A     16 A C     2.5 sq mm Cu
AC       Split AC 1.5 TR        9 A      20 A C     4.0 sq mm Cu

Incomer: 40 A double-pole RCCB, 30 mA sensitivity
Earthing: two GI pipe electrodes bonded to a common pit, tested below 5 ohm
 Spare ways: 20 percent kept for future circuits`,
            },
            diagram: {
              kind: "flow",
              title: "From fault to safe isolation",
              caption: "How the protective chain clears a live-to-earth fault.",
              steps: [
                { label: "Insulation fails", note: "live touches conduit or enclosure" },
                { label: "Fault current flows", note: "through the earth continuity conductor" },
                { label: "MCB overcurrent trip", note: "magnetic element clears high current" },
                { label: "RCCB senses 30 mA imbalance", note: "residual current, millisecond trip" },
                { label: "Supply isolated, person safe", note: "bonded enclosure never rises far above earth" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never defeat the 30 mA device",
              body: "Bridging or omitting the RCCB to 'stop nuisance trips' converts every earth fault into a potential electrocution. Nuisance trips mean moisture in a geyser or a degraded neutral - fix the cause. In the exam, always draw the RCCB upstream of all socket circuits and state its 30 mA rating.",
            },
            keyTerms: [
              { term: "Conduit wiring", definition: "Insulated conductors drawn inside surface or recessed PVC or metal conduit." },
              { term: "MCB curve (B/C/D)", definition: "Instantaneous tripping characteristic matched to lighting, general or high-inrush loads." },
              { term: "RCCB", definition: "Residual-current device tripping on a 30 mA live-neutral imbalance to protect people." },
              { term: "Pipe vs plate earthing", definition: "Electrode systems using a buried GI pipe or a GI/copper plate pit to reach low resistance." },
              { term: "Voltage drop limit", definition: "About 3 percent on branch circuits and 5 percent overall to keep equipment within rating." },
            ],
            examQuestions: [
              {
                q: "Compare the wiring systems used in buildings and describe plate, pipe and strip earthing with sketches. Explain the working of an MCB and a 30 mA RCCB, and size the circuit for a 3 kW water heater at 230 V.",
                marks: 7,
                outline: [
                  "Compare cleat, casing-capping and conduit systems; recommend FRLS cable in PVC conduit.",
                  "State cable sizing by current capacity and voltage drop (3 percent branch, 5 percent total).",
                  "Sketch pipe earthing (38 mm GI pipe, 2 m) and plate earthing (charcoal-salt pit) with the earth pit section.",
                  "State earth electrode resistance below about 5 ohms (1 ohm for substation grids).",
                  "MCB: thermal element for overload, magnetic element for short circuit; curves B, C, D.",
                  "RCCB: compares live and neutral currents, trips at 30 mA within milliseconds.",
                  "Geyser: 3000/230 = 13 A; design 16 A MCB on 2.5 sq mm copper.",
                ],
              },
              {
                q: "How does an RCCB protect a person from electric shock? State its standard sensitivity.",
                marks: 2,
              },
              {
                q: "State the permissible voltage drop in building wiring and explain why it is limited.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Illumination quantities and lux levels",
            body: [
              "Light is measured in a family of related quantities. Luminous flux, the lumen, is total light energy weighted to the eye's sensitivity; luminous intensity, the candela, is flux per solid angle in a given direction; illuminance, the lux, is lumens falling per square metre of surface; and luminance, in candela per square metre, is what the eye actually perceives of a surface. Illuminance from a point source follows the inverse-square and cosine law, E = I cos(theta) / d squared - doubling the distance quarters the lux.",
              "Quality matters as much as quantity. Colour temperature in kelvin runs from 2700 K warm (relaxing, homes) through 4000-4500 K neutral (offices) to 6500 K daylight (shops, precision work); the colour rendering index measures how faithfully colours appear, with CRI 80 or better expected indoors. Uniformity - the ratio of minimum to average illuminance - should stay above about 0.6-0.7 so the eye is not constantly re-adapting, and glare from bare lamps or bright reflections must be limited by shielding and correct mounting.",
              "Recommended levels come from IS 3646 and the NBC: about 100-150 lux for corridors and stairs, 150-200 for living rooms, 300 for classroom and office desks, up to 500 for proofreading and drafting, and 30-75 for parking and stores. A quick check shows the scale of the task: a 0.75 m x 1.5 m desk at 300 lux receives about 340 lumens on the working plane, which one modern LED downlight of 3600 delivered lumens can spread over several desks - subject to the utilization losses section 2.4 quantifies.",
            ],
            bullets: [
              "Four quantities: lumen (flux), candela (intensity), lux (illuminance = lm per sq m), candela per sq m (luminance).",
              "Inverse-square law: E = I cos(theta) / d squared - distance and angle both cut illuminance.",
              "Colour temperature: 2700 K warm, 4000-4500 K neutral, 6500 K daylight - match to task and mood.",
              "CRI 80+ indoors; lower CRI (HPS street lamps) distorts colours badly.",
              "Uniformity: minimum-to-average illuminance above about 0.6-0.7 to avoid harsh adaptation.",
              "Recommended lux (IS 3646 / NBC): stairs 100-150, living 150, classroom and office 300, drafting 500, parking 30-75.",
              "Sanity check: a desk at 300 lux over 1.1 sq m receives about 340 lumens.",
            ],
            table: {
              caption: "Recommended illuminance levels (IS 3646 / NBC typical values).",
              headers: ["Space", "Typical lux", "Notes"],
              rows: [
                ["Corridor, stairs, lift lobby", "100-150", "Night levels may drop to 50 lux"],
                ["Living / hotel room", "150", "Task lamps add 300 locally"],
                ["Classroom / office desk", "300", "Up to 500 for drafting and proofreading"],
                ["Kitchen work counter", "300", "Under-cabinet strips work best"],
                ["Precision assembly, drawing", "500-1000", "Local task lighting preferred"],
                ["Parking, stores, plant rooms", "30-75", "Motion-dimmed LED saves energy"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The photometric family",
              caption: "From source output to eye sensation - know each level's unit.",
              tiers: [
                { label: "Luminance - cd per sq m", note: "what the eye sees" },
                { label: "Illuminance - lux", note: "lm per sq m on a surface" },
                { label: "Luminous intensity - candela", note: "flux per solid angle" },
                { label: "Luminous flux - lumen", note: "total output of the source" },
              ],
            },
            callout: {
              type: "exam",
              title: "Definitions with units are separate marks",
              body: "RGPV marks definition lines individually. Write all four quantities - lumen, candela, lux, candela per sq m - each with its unit and one use, then the inverse-square law with the cosine factor. Candidates who write only 'light level' in lux lose three of the four definition marks.",
            },
            keyTerms: [
              { term: "Lumen", definition: "SI unit of luminous flux - total light output weighted to eye sensitivity." },
              { term: "Lux", definition: "Illuminance of one lumen per square metre of surface." },
              { term: "Candela", definition: "Luminous intensity in a given direction, one lumen per steradian." },
              { term: "Luminance", definition: "Apparent brightness of a surface in candela per square metre." },
              { term: "CRI", definition: "Colour rendering index (0-100) measuring fidelity of colour appearance under a source." },
            ],
            examQuestions: [
              {
                q: "Define luminous flux, luminous intensity, illuminance and luminance with units, state the inverse-square law of illumination, and list recommended illuminance values for a classroom, office desk, corridor and parking area.",
                marks: 7,
                outline: [
                  "Luminous flux: lumen, total light emitted.",
                  "Luminous intensity: candela, flux per unit solid angle.",
                  "Illuminance: lux, lumens per square metre received.",
                  "Luminance: candela per sq m, the eye's sensation of a surface.",
                  "Inverse-square law: E = I cos(theta) / d squared; explain distance and tilt effects.",
                  "Recommended levels: classroom/office 300 lux (500 for drafting), corridor 100-150, parking 30-75.",
                  "Add quality notes: CRI 80+, uniformity 0.6-0.7, glare control.",
                ],
              },
              {
                q: "Distinguish between lumen and lux with one example.",
                marks: 2,
              },
              {
                q: "What is uniformity of illuminance and why is a minimum-to-average ratio of about 0.6 recommended?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Lumen method of lighting design",
            body: [
              "The lumen method converts a target illuminance into a luminaire count in one formula: N = E x A / (F x UF x MF), where E is the design lux, A the room area, F the lamp lumens per luminaire, UF the utilization factor and MF the maintenance factor. UF comes from photometric tables indexed by the room index k = L x W / (hm x (L + W)) - hm being the mounting height of luminaires above the work plane - and by the surface reflectances, typically 70 percent ceiling, 50 percent walls and 20 percent floor for ordinary interiors.",
              "The maintenance factor, commonly 0.8 for clean rooms and 0.7 for dusty ones, pre-pays for lamp lumen depreciation and dirt on luminaires so the installation still meets target near relamping. Worked example: a classroom 9 m x 6 m with a work plane at 0.8 m and luminaires at 2.8 m gives hm = 2.0 m, so the room index k = 54 / (2 x 15) = 1.8 and the UF table yields about 0.60. With 300 lux target, 3600-lumen LED luminaires and MF 0.8: N = 300 x 54 / (3600 x 0.60 x 0.8) = 9.4, so provide 10 luminaires.",
              "Layout and verification finish the job. Ten luminaires in two rows of five give spacings of 9/5 = 1.8 m along the room and 6/2 = 3.0 m across; the spacing-to-mounting-height ratio of 3.0/2.0 = 1.5 sits exactly on the usual limit for acceptable uniformity, and perimeter luminaires go within about half a spacing of the walls. Connected load is 10 x 36 W = 360 W, a lighting power density of 6.7 W per sq m - comfortably inside ECBC limits for classrooms - and the check confirms the method as an exam-ready five-minute routine.",
            ],
            bullets: [
              "Core formula: N = E x A / (F x UF x MF) - write it before anything else in the answer.",
              "Room index k = L x W / (hm x (L + W)); hm = luminaire height minus work-plane height.",
              "UF from tables against room index and reflectances (70/50/20 typical); larger, brighter rooms lift UF.",
              "MF 0.8 clean / 0.7 dirty covers lumen depreciation and dirt; never take MF = 1 in real design.",
              "Worked: 9 x 6 m classroom, k = 1.8, UF 0.60, E 300 lux, F 3600 lm, MF 0.8 gives N = 9.4, round to 10.",
              "Spacing rule: spacing <= 1.5 x hm for uniformity; walls within half a spacing of the outer row.",
              "Check the load: 10 x 36 W = 360 W = 6.7 W per sq m, well inside ECBC classroom limits.",
            ],
            codeExample: {
              language: "python",
              caption: "Classroom lighting by the lumen method, end to end.",
              code: `def lumens_method(length_m, width_m, target_lux, lumens_per_lum, uf, mf):
    area = length_m * width_m
    n = target_lux * area / (lumens_per_lum * uf * mf)
    return area, n

room_index = 9 * 6 / (2.0 * (9 + 6))     # k = L*W / (hm*(L+W))
area, n = lumens_method(9, 6, 300, 3600, 0.60, 0.80)
print("Room index k =", round(room_index, 2), "-> UF 0.60 from tables")
print("Area =", round(area, 1), "sq m")
print("Luminaires N =", round(n, 1), "-> provide 10 in 2 rows of 5")
print("Spacing 1.8 m x 3.0 m; ratio 3.0 / 2.0 = 1.5, at the limit")
print("Load =", 10 * 36, "W =", round(10 * 36 / area, 1), "W per sq m")`,
            },
            diagram: {
              kind: "pipeline",
              title: "The lumen method as a pipeline",
              caption: "Five stages from standard to layout - reproduce them in order.",
              stages: [
                { label: "Fix target lux E", note: "IS 3646 / NBC table" },
                { label: "Measure area and hm", note: "hm = luminaire - work plane" },
                { label: "Room index -> UF", note: "with 70/50/20 reflectances" },
                { label: "Apply N = E x A / (F x UF x MF)", note: "round up" },
                { label: "Verify spacing and LPD", note: "S <= 1.5 hm; ECBC check" },
              ],
            },
            callout: {
              type: "exam",
              title: "The formula is half the marks",
              body: "Write N = E x A / (F x UF x MF) first, define every symbol with units, then substitute. Examiners award the formula, the room-index calculation, the substitution and the rounding as separate steps - a bare answer of '10 luminaires' scores almost nothing.",
            },
            keyTerms: [
              { term: "Lumen method", definition: "Average-illuminance design procedure giving the number of luminaires needed." },
              { term: "Utilization factor", definition: "Fraction of lamp lumens reaching the work plane, from room index and reflectances." },
              { term: "Maintenance factor", definition: "Allowance (0.7-0.8) for lumen depreciation and dirt between cleanings." },
              { term: "Room index", definition: "k = L x W / (hm x (L + W)), the room's proportions that index the UF table." },
              { term: "Spacing-to-height ratio", definition: "Spacing divided by mounting height; kept at or below about 1.5 for uniformity." },
            ],
            examQuestions: [
              {
                q: "A classroom 9 m x 6 m is to be lit to 300 lux on a work plane 0.8 m above the floor with LED luminaires of 3600 lm mounted at 2.8 m. Taking reflectances 70/50/20 (UF = 0.60) and MF = 0.80, determine the number of luminaires by the lumen method, propose a layout, and verify the spacing rule.",
                marks: 7,
                outline: [
                  "Write the formula N = E x A / (F x UF x MF) with symbols defined.",
                  "Area A = 9 x 6 = 54 sq m; mounting height hm = 2.8 - 0.8 = 2.0 m.",
                  "Room index k = 9 x 6 / (2.0 x (9 + 6)) = 1.8, so UF = 0.60.",
                  "Substitute: N = 300 x 54 / (3600 x 0.60 x 0.80) = 9.4.",
                  "Round up to 10 luminaires - always round up.",
                  "Layout: 2 rows of 5; spacings 1.8 m and 3.0 m; ratio 3.0/2.0 = 1.5 at the limit.",
                  "Verify load: 10 x 36 W = 6.7 W per sq m, inside ECBC limits.",
                ],
              },
              {
                q: "Define utilization factor and maintenance factor. State typical values for a clean office.",
                marks: 2,
              },
              {
                q: "Why must the computed number of luminaines always be rounded up, and why is the spacing-to-height ratio limited?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Lamps, luminaires and daylighting",
            body: [
              "Lamp families span a factor of ten in efficacy. Incandescent and halogen lamps convert little power to light - 10-25 lm/W - but render colours perfectly (CRI 100) and dim warmly; fluorescent T5 and T8 tubes reach 60-95 lm/W with 8,000-15,000 hour lives; high-intensity discharge lamps serve outdoors, with high-pressure sodium superbly efficient (90-140 lm/W) but colour-blind (CRI 20-25) and metal halide balanced at 75-100 lm/W with good colour; and LED, at 100-160 lm/W with 25,000-50,000 hour lives and CRI 70-90, now dominates every new installation.",
              "A luminaire is the complete fitting: housing, optical control, electrical gear and mounting. Distribution types - direct, semi-direct, indirect and general diffuse - trade efficiency against glare and ceiling brightness; photometric polar curves describe the distribution; IP ratings grade sealing against dust and water for wet areas; and emergency luminaires with integral batteries guard escape routes. A modern economy drives the choice: an 18-20 W LED tube replaces a 36 W fluorescent for the same delivered light, cutting about 45 percent of lighting energy.",
              "Daylight is free light with a design formula: the daylight factor DF = (indoor illuminance at a point / simultaneous unobstructed outdoor horizontal illuminance) x 100 percent, composed of the sky component (SC) directly seen, the externally reflected component (ERC) from opposite buildings, and the internally reflected component (IRC) bouncing within the room. Offices and classrooms target DF around 2-5 percent; deep plans fail without light shelves, anidolic reflectors or skylights, and unshaded west glass imports glare and heat - so fins and overhangs are part of lighting design, and photocell dimming lets electric light fade in as sky light fades out.",
            ],
            bullets: [
              "Efficacy ladder: incandescent 10-15, halogen 20-25, CFL 45-65, fluorescent 60-95, HPS 90-140, LED 100-160 lm/W.",
              "Lamp life: incandescent about 1,000 h; fluorescent 8,000-15,000; LED 25,000-50,000 h.",
              "HPS wins streets but CRI 20-25 kills colour; metal halide and LED render truly.",
              "Luminaire types by distribution: direct, semi-direct, indirect, diffuse; polar curves describe them.",
              "IP ratings (e.g. IP65) seal luminaires for wet and dusty locations; emergency fittings light escape routes.",
              "LED substitution: an 18-20 W LED tube replaces a 36 W fluorescent - about 45 percent energy saved.",
              "Daylight factor DF = SC + ERC + IRC; targets about 2-5 percent in offices and classrooms.",
              "Shading - fins, overhangs, light shelves - is lighting design: it keeps glare and solar heat out while DF stays.",
            ],
            table: {
              caption: "Lamp families compared.",
              headers: ["Lamp", "Efficacy (lm/W)", "Life (hours)", "CRI", "Typical use"],
              rows: [
                ["Incandescent / halogen", "10-25", "1,000-4,000", "100", "Homes, dimming, display"],
                ["Fluorescent T5 / T8", "60-95", "8,000-15,000", "60-90", "Offices, classrooms"],
                ["CFL", "45-65", "6,000-10,000", "about 80", "Home retrofit"],
                ["High-pressure sodium", "90-140", "15,000-24,000", "20-25", "Street and area lighting"],
                ["Metal halide", "75-100", "10,000-20,000", "65-90", "Stadia, facades, halls"],
                ["LED", "100-160", "25,000-50,000", "70-90", "All modern applications"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Electric light versus daylight toolkits",
              caption: "Two sources, two design checklists - both belong in the answer.",
              left: {
                heading: "Electric light toolkit",
                items: [
                  "Choose lamp by efficacy, life, CRI and dimming need",
                  "Pick luminaire distribution: direct, indirect, wash",
                  "Respect IP ratings in wet, dusty and outdoor zones",
                  "Dim with photocells where daylight contributes",
                  "Plan emergency luminaires on every escape route",
                ],
              },
              right: {
                heading: "Daylight toolkit",
                items: [
                  "Target DF about 2-5 percent of outdoor illuminance",
                  "DF = sky + externally reflected + internally reflected components",
                  "Size glazing by visible transmittance, not just glass area",
                  "Shade with fins, overhangs and light shelves against glare",
                  "Skylights and courts light deep industrial plans",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The daylight factor needs 'simultaneous'",
              body: "DF divides the indoor reading by the outdoor illuminance measured at the same instant under the same sky - not an annual average. Define it that way, split it into SC + ERC + IRC, and name the three components: the definition line and the components line are separate marks in every RGPV paper that asks this.",
            },
            keyTerms: [
              { term: "Efficacy", definition: "Lumens delivered per watt of input power, lm/W." },
              { term: "Daylight factor", definition: "Ratio of indoor to simultaneous unobstructed outdoor illuminance, in percent." },
              { term: "Sky component", definition: "Part of DF received directly from the patch of sky visible at the point." },
              { term: "IP rating", definition: "Ingress-protection code grading a luminaire's sealing against dust and water." },
              { term: "Luminaire", definition: "Complete lighting unit - housing, optics, gear and mounting." },
            ],
            examQuestions: [
              {
                q: "Compare the common lamp families (incandescent, fluorescent, HPS, metal halide, LED) on efficacy, life and colour rendering, and explain luminaire distribution types. Define the daylight factor and its three components, stating typical design targets for offices.",
                marks: 7,
                outline: [
                  "Tabulate efficacy: 10-15 incandescent, 60-95 fluorescent, 90-140 HPS, 100-160 LED lm/W.",
                  "Compare life: about 1,000 h incandescent to 25,000-50,000 h LED.",
                  "CRI: 100 incandescent, 20-25 HPS, 70-90 LED - state the colour penalty of HPS.",
                  "Luminaire distribution: direct, semi-direct, indirect, diffuse - efficiency vs glare trade.",
                  "Define DF = (E indoor / E outdoor simultaneous) x 100 percent.",
                  "Components: sky component + externally reflected + internally reflected.",
                  "Targets: about 2-5 percent DF in offices and classrooms; shading keeps glare in check.",
                ],
              },
              {
                q: "Define luminous efficacy and state the value range for LED lamps.",
                marks: 2,
              },
              {
                q: "Why do LED tubes replace fluorescent tubes of the same rating? Give one energy figure.",
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
      title: "HVAC",
      summary:
        "Comfort and climate machinery: thermal comfort and psychrometry, heat load estimation, ventilation, air conditioning systems from split to VRF and central plant, and ducts, refrigeration cycles and building management systems.",
      chapter: {
        number: "03",
        title: "HVAC - Heating, Ventilation and Air Conditioning",
        intro:
          "Unit III explains how a building stays comfortable. It opens with the six factors of thermal comfort and the psychrometric chart, quantifies the heat loads that a plant must remove, moves air for health through natural and mechanical ventilation, compares window, split, VRF and central air conditioning systems, and closes with duct design, the vapour-compression refrigeration cycle and the BMS that runs it all.",
        inOneBreath:
          "Comfort depends on air temperature, mean radiant temperature, humidity, air velocity, clothing and activity, and the comfort zone near 23-26 deg C and 40-60 percent relative humidity; the plant removes heat gains from the envelope (U x A x delta T), solar radiation through glass, ventilated and infiltrated air, people, lights and equipment, sized in tons of refrigeration where 1 TR = 3.517 kW; ventilation supplies fresh air by cross-draft, stack effect or fans at measured air changes per hour; air conditioning scales from window and split units through VRF systems to chilled-water central plant; and refrigeration runs the compressor-condenser-expansion-evaporator loop that BMS controllers monitor and optimize.",
        sections: [
          {
            number: "3.1",
            title: "Thermal comfort and psychrometry",
            body: [
              "Comfort is a bundle of six factors: air temperature, mean radiant temperature (MRT), relative humidity, air velocity, clothing insulation (clo) and activity level (met). Air around 23-26 deg C at 40-60 percent RH satisfies most sedentary, lightly dressed people in summer; winter tolerance shifts to 20-23 deg C. MRT explains why a person shivers beside a cold glass facade on a warm day, air movement of 0.2-0.5 m/s extends the acceptable band in naturally ventilated buildings, and a gymnasium needs far more cooling per person than a reading room because metabolism drives the balance.",
              "The psychrometric chart maps moist air on one diagram: dry-bulb temperature along the x-axis, humidity ratio up the y-axis, with curved relative-humidity lines, wet-bulb temperature lines sloping across, and dew point, enthalpy and specific volume readable by alignment. Processes become lines: sensible heating and cooling run horizontally, humidification and dehumidification vertically, adiabatic evaporative cooling climbs along a wet-bulb line, and a cooling coil with dehumidification drops down and left, below the dew point where moisture condenses out.",
              "Worked comparison of two Indian climates. Hot-dry air at 34 deg C and 20 percent RH (a Delhi May afternoon) improves dramatically through an evaporative cooler: along the wet-bulb line to about 26 deg C and 65 percent RH - no refrigeration needed. Hot-humid air at 32 deg C and 75 percent RH (Chennai) is already near saturation, so evaporative cooling cannot help; the chart shows the only path to comfort runs down the saturation limit - a cooling coil chilled below the dew point that removes latent heat as condensate. One chart, two strategies, and the exam answer is the pair of traced lines.",
            ],
            bullets: [
              "Six comfort factors: air temperature, mean radiant temperature, humidity, air velocity, clothing (clo), activity (met).",
              "Typical comfort zone: 23-26 deg C and 40-60 percent RH for sedentary summer conditions.",
              "Air movement 0.2-0.5 m/s extends comfort; above about 0.8 m/s it feels like a draught.",
              "Psychrometric chart axes: dry-bulb temperature and humidity ratio; RH, wet-bulb, enthalpy and dew point align on it.",
              "Sensible processes horizontal; latent vertical; evaporative cooling along wet-bulb lines.",
              "Hot-dry climates: evaporative cooling works - 34 deg C at 20 percent RH becomes about 26 deg C at 65 percent.",
              "Hot-humid climates: cool below the dew point to dehumidify; evaporative cooling fails near saturation.",
            ],
            table: {
              caption: "Comfort factors, typical ranges and the effect of exceeding them.",
              headers: ["Factor", "Typical comfort range", "Beyond the range"],
              rows: [
                ["Air temperature", "23-26 deg C (summer conditioned)", "Drowsiness and complaints beyond 28 deg C"],
                ["Mean radiant temperature", "close to air temperature", "Radiant asymmetry near cold glass or hot roofs"],
                ["Relative humidity", "40-60 percent", "Above 70 percent feels muggy; below 30 percent dries eyes"],
                ["Air velocity", "0.2-0.5 m/s", "Above 0.8 m/s, papers fly and draughts annoy"],
                ["Clothing insulation", "0.5-1.0 clo seasonally", "Wrong dress defeats any HVAC system"],
                ["Activity (met)", "1.0-1.2 met office work", "Densities of people demand extra cooling"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Reading the chart as four strategies",
              caption: "Temperature against humidity picks the comfort action.",
              axes: {
                x: "Dry-bulb temperature (low to high)",
                y: "Humidity (low to high)",
              },
              quadrants: [
                { label: "Cold + dry", note: "Sensible heating: room heater, panel radiator, warmer MRT" },
                { label: "Cold + humid", note: "Heating plus gentle ventilation; watch condensation on cold surfaces" },
                { label: "Hot + dry", note: "Evaporative cooling shines - the desert cooler path" },
                { label: "Hot + humid", note: "Refrigeration: cool below dew point to dehumidify" },
              ],
            },
            callout: {
              type: "exam",
              title: "Six factors, then the chart",
              body: "Answers on thermal comfort are marked factor by factor: name all six with units (clo and met included), state the 23-26 deg C / 40-60 percent RH zone, then sketch the psychrometric chart with at least the DBT and humidity axes plus RH curves, and trace one heating and one cooling-dehumidification line on it.",
            },
            keyTerms: [
              { term: "Mean radiant temperature", definition: "Weighted average temperature of surrounding surfaces controlling radiant exchange." },
              { term: "clo and met", definition: "Units of clothing insulation and metabolic activity used in comfort analysis." },
              { term: "Psychrometric chart", definition: "Diagram of moist-air properties relating DBT, humidity, RH, wet bulb, enthalpy." },
              { term: "Evaporative cooling", definition: "Adiabatic process adding moisture along a wet-bulb line, cooling hot-dry air." },
              { term: "Dew point", definition: "Temperature at which air reaches saturation and condensation begins." },
            ],
            examQuestions: [
              {
                q: "Explain the factors affecting thermal comfort and state a typical comfort zone. Describe the psychrometric chart and trace on it (i) sensible heating, (ii) evaporative cooling, and (iii) cooling with dehumidification, indicating why evaporative cooling fails in humid climates.",
                marks: 7,
                outline: [
                  "List the six factors: air temperature, MRT, RH, air velocity, clothing, activity.",
                  "State the zone: about 23-26 deg C and 40-60 percent RH for sedentary summer occupancy.",
                  "Sketch the chart: DBT x-axis, humidity ratio y-axis, RH curves, wet-bulb lines.",
                  "Trace (i): horizontal line right for sensible heating.",
                  "Trace (ii): climb along a constant wet-bulb line - hot-dry air improves, 34 deg C / 20 percent to about 26 deg C / 65 percent.",
                  "Trace (iii): line down and left below the dew point; condensate removes latent heat.",
                  "Conclude: humid air is near saturation, so wet-bulb depression is too small for evaporative cooling.",
                ],
              },
              {
                q: "Why is the wet-bulb temperature always lower than the dry-bulb temperature (except at saturation)?",
                marks: 2,
              },
              {
                q: "A visitor complains of discomfort near a fully glazed west facade on a mild day. Which comfort factor is responsible and what is the remedy?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Heat load estimation",
            body: [
              "A cooling plant must remove every watt that enters the room. The components: conduction through walls, roof and glass (Q = U x A x delta T for each envelope element); solar gain through glazing (glass area times shading coefficient times solar heat gain factor, several hundred watts per square metre on a west facade); outside air brought in by ventilation and leakage (sensible heat about 1.2 W per L/s per degree of temperature difference, and latent heat about 3 W per L/s per gram per kg of moisture removed); people (roughly 115 W each seated - 70 sensible plus 45 latent); and the full wattage of lights and equipment.",
              "Sophisticated methods sharpen the estimate: cooling-load temperature differences (CLTD) replace plain delta T to account for solar radiation and wall time lag, and the radiant time series spreads instantaneous gains over hours. A safety factor of 5-10 percent absorbs the unknowables. Quick sanity checks: interior offices run near 3-5 kW per 100 sq m, sun-baked residential rooms need about 1 TR per 10-12 sq m, and 1 TR = 3.517 kW = 3024 kcal/h - the conversion every numerical hangs on.",
              "Worked example, a 5 m x 4 m x 3 m interior office room. Envelope: U = 1.7 W per sq m K over 60 sq m of wall and roof at 10 K difference gives 1020 W. Glass solar: 2 sq m of west glass at 300 W per sq m gives 600 W. Ventilation: 40 L/s of outside air at 8 K difference gives 1.2 x 40 x 8 = 384 W. People: 4 x 115 = 460 W. Lights 300 W and equipment 400 W. Total 3164 W; with a 7 percent margin, 3.4 kW = 0.96 TR - so a 1.0 TR split unit, matching the interior-zone rule of about 1 TR per 20-25 sq m.",
            ],
            bullets: [
              "Load components: envelope conduction (U x A x delta T), solar through glass, ventilation and infiltration, people, lights, equipment.",
              "Ventilation load: about 1.2 W per (L/s x K) sensible and 3 W per (L/s x g/kg) latent.",
              "People: about 115 W each seated - 70 W sensible plus 45 W latent.",
              "CLTD and radiant-time methods add solar and thermal-lag realism to plain conduction.",
              "Safety factor 5-10 percent on the summed load; 1 TR = 3.517 kW = 3024 kcal/h.",
              "Rules of thumb: interior office 3-5 kW per 100 sq m; sunlit residential room about 1 TR per 10-12 sq m.",
              "Worked: 20 sq m office sums to about 3.2 kW = 0.9 TR - provide a 1.0 TR unit.",
            ],
            codeExample: {
              language: "python",
              caption: "Room cooling load summed component by component.",
              code: `U, A, dt = 1.7, 60, 10          # wall + roof assembly, W per sq m K
envelope = U * A * dt           # conduction gain
solar = 2 * 300                 # 2 sq m west glass at 300 W per sq m
vent = 1.2 * 40 * 8             # 40 L/s outside air, 8 K difference
people = 4 * 115                # seated occupants, sensible + latent
power = 300 + 400               # lights plus equipment
total = envelope + solar + vent + people + power
print("Envelope:", envelope, "W")
print("Ventilation:", vent, "W")
print("Total:", round(total), "W")
print("With 7 percent margin:", round(total * 1.07), "W")
print("Plant:", round(total * 1.07 / 3.517, 2), "TR - provide a 1.0 TR unit")`,
            },
            diagram: {
              kind: "flow",
              title: "From load list to plant size",
              caption: "Sum, inflate, convert, select - the numerical's four moves.",
              steps: [
                { label: "List the six gain components", note: "envelope, solar, air, people, lights, equipment" },
                { label: "Sum in watts", note: "sensible and latent separately if asked" },
                { label: "Add 5-10 percent safety", note: "absorbs assumptions" },
                { label: "Divide by 3.517", note: "watts to tons of refrigeration" },
                { label: "Pick next standard plant size", note: "never round down" },
              ],
            },
            callout: {
              type: "exam",
              title: "1 TR = 3.517 kW is the hinge",
              body: "Most heat-load numericals are won or lost on the conversion. Write 1 TR = 3.517 kW = 3024 kcal/h at the top of the working, tabulate each component's watts with its formula, and finish with the TR figure rounded up to a standard plant size - examiners expect the rounding sentence.",
            },
            keyTerms: [
              { term: "Ton of refrigeration", definition: "Cooling rate of 3.517 kW (3024 kcal/h), originally melting one ton of ice per day." },
              { term: "U-value", definition: "Overall heat transfer coefficient of a construction, W per sq m per K." },
              { term: "Solar heat gain factor", definition: "Solar intensity through glazing used with shading coefficient to size glass loads." },
              { term: "Infiltration", definition: "Uncontrolled leakage of outside air through cracks, adding sensible and latent load." },
              { term: "CLTD", definition: "Cooling-load temperature difference - corrected delta T capturing solar gain and time lag." },
            ],
            examQuestions: [
              {
                q: "Enumerate the heat gains entering an air-conditioned room and estimate the cooling load in TR for a 5 m x 4 m x 3 m office: walls and roof 60 sq m at U = 1.7 W per sq m K with 10 K difference, 2 sq m west glass at 300 W per sq m, 40 L/s outside air at 8 K difference, four seated occupants at 115 W each, lights 300 W and equipment 400 W. Apply a 7 percent margin.",
                marks: 7,
                outline: [
                  "List components: conduction, solar, ventilation, people, lights, equipment.",
                  "Envelope: 1.7 x 60 x 10 = 1020 W.",
                  "Solar: 2 x 300 = 600 W.",
                  "Ventilation sensible: 1.2 x 40 x 8 = 384 W.",
                  "People: 4 x 115 = 460 W; lights + equipment = 700 W.",
                  "Sum = 3164 W; with margin 3164 x 1.07 = 3386 W.",
                  "Convert: 3386 / 3.517 = 0.96 TR - provide a 1.0 TR split unit.",
                ],
              },
              {
                q: "Define one ton of refrigeration and give its value in kW.",
                marks: 2,
              },
              {
                q: "Distinguish sensible heat gain from latent heat gain with one example each.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Ventilation systems",
            body: [
              "Ventilation replaces stale indoor air with fresh outdoor air to dilute carbon dioxide, odours, volatile organics and moisture, and to remove excess heat. Standards are quantitative: ASHRAE 62.1 asks for about 2.5 L/s per person plus 0.3 L/s per sq m in offices, and CO2 held near 1000 ppm is the practical indicator of adequate supply. Rates are also quoted as air changes per hour - ACH = 3600 x Q (L/s) / volume - which is how exhaust fans for toilets and kitchens are actually specified.",
              "Natural ventilation exploits wind and buoyancy. Cross-ventilation needs inlets and outlets on opposite or adjacent walls, roughly equal free areas, and a narrow plan - useful to about 12-15 m depth; stack effect drives flow through low inlets and high outlets connected by atria, solar chimneys or roof ventilators, working hardest when the indoor-outdoor temperature difference is large. Mechanical systems add control: exhaust-only for toilets and kitchens (simple, but it depressurizes), supply-only for positive pressurization, balanced supply-and-exhaust for conditioned buildings, and heat-recovery ventilators that pre-condition incoming air using outgoing air in sealed modern envelopes.",
              "Worked fan selection. A toilet 3 m x 2 m x 2.7 m (16.2 cu m) at 10 ACH needs 162 cu m/h = 45 L/s - a standard 150 mm exhaust fan. Typical requirements: toilets 6-12 ACH, domestic kitchens 10-15 and commercial kitchens 20-30 ACH (through hoods), car parks about 6 ACH controlled by CO sensors, offices 4-8 ACH. The design decision is always natural first - free, silent, resilient - with mechanical backup where climate, depth of plan, noise or pollution force it.",
            ],
            bullets: [
              "Purpose: dilute CO2, odours and VOCs, control moisture, remove heat; CO2 near 1000 ppm signals adequacy.",
              "ASHRAE 62.1 office rates: about 2.5 L/s per person plus 0.3 L/s per sq m.",
              "ACH = 3600 x Q (L/s) / room volume in cu m - the exhaust-fan language.",
              "Cross-ventilation: opposite-wall openings, equal free area, effective to about 12-15 m plan depth.",
              "Stack effect: buoyancy through low inlets and high outlets - atria, solar chimneys, roof ventilators.",
              "Mechanical options: exhaust-only, supply-only (pressurization), balanced, and heat-recovery ventilation.",
              "Typical ACH: toilets 6-12, domestic kitchens 10-15, commercial 20-30, car parks about 6, offices 4-8.",
              "Worked: 16.2 cu m toilet at 10 ACH = 45 L/s, so one 150 mm exhaust fan.",
            ],
            table: {
              caption: "Typical ventilation rates by space.",
              headers: ["Space", "Typical ACH", "Driver"],
              rows: [
                ["Toilets and bath rooms", "6-12", "Odour and moisture - always exhaust"],
                ["Domestic kitchen", "10-15", "Cooking fumes and heat"],
                ["Commercial kitchen", "20-30", "Grease and steam through hoods"],
                ["Basement car park", "about 6", "CO dilution, ideally CO-sensor controlled"],
                ["Offices", "4-8", "Per-person rates per ASHRAE 62.1"],
                ["Plant rooms / battery rooms", "6-12", "Heat removal; hydrogen dilution for batteries"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "How should this space breathe?",
              caption: "One decision, four defensible answers - and the trap.",
              start: "A space needs fresh air",
              branches: [
                {
                  label: "Natural cross + stack",
                  outcome: "Zero energy and silent; works for mild climates and plans up to about 12-15 m deep",
                  good: true,
                },
                {
                  label: "Mechanical exhaust only",
                  outcome: "Simple fans for toilets and kitchens; depressurizes, so plan the make-up air path",
                  good: true,
                },
                {
                  label: "Balanced supply-exhaust with heat recovery",
                  outcome: "Best IAQ and economy for sealed, conditioned buildings; costs more upfront",
                  good: true,
                },
                {
                  label: "Sealed windows, no design",
                  outcome: "CO2 climbs past 1000 ppm; stuffiness, complaints and drowsiness follow",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Exhaust-only needs make-up air",
              body: "A powerful kitchen or toilet exhaust in a tight building starves the fan - air then sneaks in through the building's worst path, down chimneys and drain stacks. Every exhaust design must state its make-up air route: a transfer grille, a door undercut or a dedicated supply fan.",
            },
            keyTerms: [
              { term: "Air changes per hour", definition: "Volume of air supplied per hour divided by room volume." },
              { term: "Cross-ventilation", definition: "Wind-driven flow between openings on opposite or adjacent walls." },
              { term: "Stack effect", definition: "Buoyancy-driven ventilation through low inlets and high outlets." },
              { term: "ASHRAE 62.1", definition: "The ventilation standard giving per-person and per-area outdoor-air rates." },
              { term: "Heat recovery ventilator", definition: "Exchanger pre-conditioning supply air with exhaust air energy." },
            ],
            examQuestions: [
              {
                q: "Compare natural and mechanical ventilation systems for buildings. Explain cross-ventilation and stack effect with sketches, and size an exhaust fan for a toilet 3 m x 2 m x 2.7 m requiring 10 air changes per hour.",
                marks: 7,
                outline: [
                  "Define ventilation and its purpose: CO2, odour, moisture and heat control.",
                  "Natural: cross-ventilation sketch (opposite openings) and stack effect (low inlet, high outlet, atrium/chimney).",
                  "State plan-depth limits (about 12-15 m) and the temperature-difference driver of stack flow.",
                  "Mechanical: exhaust-only, supply-only, balanced, heat-recovery - one line each.",
                  "Fan sizing: volume = 3 x 2 x 2.7 = 16.2 cu m; at 10 ACH, flow = 162 cu m/h.",
                  "Convert: 162 cu m/h = 45 L/s - select a 150 mm exhaust fan.",
                  "Mention make-up air and CO2 near 1000 ppm as the adequacy check.",
                ],
              },
              {
                q: "Define air changes per hour and calculate the ACH given 45 L/s into a 16.2 cu m room.",
                marks: 2,
              },
              {
                q: "Explain the stack effect and state one building feature designed to exploit it.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Air conditioning systems",
            body: [
              "AC systems scale with the building. Window units (0.75-2 TR) squeeze the whole refrigeration cycle into one box in a wall. Split systems (1-4 TR) separate a slim indoor unit from a noisy outdoor compressor, and inverter drives modulate compressor speed to match load. Packaged units (5-25 TR) serve shops and restaurants from rooftops. VRF (variable refrigerant flow, or VRV) systems run one outdoor unit to 2-60+ indoor units, metering refrigerant to each zone and even moving heat between simultaneously cooling and heating zones.",
              "At the top sit central chilled-water plants: a chiller (centrifugal, screw or reciprocating compressor, or absorption machines running on waste heat) cools water, chilled-water pipes feed air-handling units (AHUs) and fan-coil units (FCUs), and a cooling tower rejects heat outdoors. Selection is a trade: chillers reach COP 5.0-6.5 at large duty but need plant rooms, water treatment and skilled operators; splits are cheap to buy but poor at part load and zone control; VRF hits IPLV coefficients of 4-5 with per-zone metering that tenants love, making it the default for multi-floor offices and hotels.",
              "Worked selection. A five-storey office totaling 300 kW (about 85 TR): forty split units would clutter the facade and fight for electrical headroom; a single chiller plus AHUs suits a single-owner corporate campus; but for a multi-tenant tower where each floor bills separately, two VRF systems per floor with heat-recovery outdoor units give zone control, metering and redundancy - a chiller failure then floors one plant, while a VRF failure touches a handful of indoor units. The exam answer is this matched logic, not a memorised favourite.",
            ],
            bullets: [
              "The ladder: window (0.75-2 TR), split (1-4 TR), package (5-25 TR), VRF (4-100+ TR), chilled-water central plant (50-1000+ TR).",
              "VRF/VRV: one outdoor unit, many indoor units, refrigerant metered per zone, heat-recovery versions move heat between zones.",
              "Central plant: chiller - chilled water - AHU/FCU - cooling tower; COP 5.0-6.5 at large duty.",
              "Inverter (variable-speed) compressors track load and lift seasonal efficiency (IPLV 4-5 for VRF).",
              "Absorption chillers run on waste heat or gas where electricity is scarce or costly.",
              "Selection drivers: duty, zone count and metering, electrical headroom, plant-room space, maintenance skill.",
              "Worked logic: 85 TR multi-tenant office -> per-floor VRF; single-owner campus -> chiller plus AHUs.",
            ],
            table: {
              caption: "AC system families compared.",
              headers: ["System", "Capacity", "Best for", "Typical COP"],
              rows: [
                ["Window unit", "0.75-2 TR", "Small rooms, retrofits", "2.8-3.2"],
                ["Split (inverter)", "1-4 TR", "Homes, small offices", "3.0-3.8"],
                ["Packaged / rooftop", "5-25 TR", "Shops, restaurants, halls", "3.0-3.5"],
                ["VRF / VRV", "4-100+ TR", "Multi-zone offices, hotels", "3.8-4.5 (IPLV higher)"],
                ["Chilled-water central", "50-1000+ TR", "Campuses, malls, hospitals", "5.0-6.5 (chiller)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Chilled-water plant versus VRF system",
              caption: "The two workhorses of large buildings, side by side.",
              left: {
                heading: "Central chilled water",
                items: [
                  "Chiller cools water; water cools air",
                  "Cooling tower rejects heat outdoors",
                  "AHUs and FCUs serve each zone",
                  "Sweet spot above roughly 100 TR",
                  "Needs plant room, piping, water treatment",
                ],
              },
              right: {
                heading: "VRF refrigerant system",
                items: [
                  "Outdoor unit conditions refrigerant directly",
                  "Branch pipes feed many indoor units",
                  "Inverter compressors track the load",
                  "Per-zone control and tenant metering are easy",
                  "Long refrigerant runs demand careful design",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Name the system by its parts",
              body: "When asked to 'explain VRF' or 'describe a central plant', name every component in the chain - chiller or outdoor unit, the heat-transfer medium (water or refrigerant), AHU or indoor units, and the heat rejection path (cooling tower or condenser fan). Components named in order earn one mark each.",
            },
            keyTerms: [
              { term: "VRF / VRV", definition: "Variable refrigerant flow system metering refrigerant to many indoor units from one outdoor unit." },
              { term: "Chiller", definition: "Machine cooling water for distribution to AHUs and FCUs in central plants." },
              { term: "AHU and FCU", definition: "Air-handling unit (central, ducted) and fan-coil unit (local water-fed zone cooler)." },
              { term: "COP and IPLV", definition: "Coefficient of performance at rated duty; integrated part-load value across the season." },
              { term: "Absorption chiller", definition: "Chiller using heat (gas, steam, waste heat) instead of a mechanical compressor." },
            ],
            examQuestions: [
              {
                q: "Classify air conditioning systems used in buildings from window units to central plants, explaining the working of a VRF system and a chilled-water plant. Recommend a system for a five-storey multi-tenant office of about 85 TR with justification.",
                marks: 7,
                outline: [
                  "Ladder of systems: window, split, package, VRF, chilled-water central.",
                  "Give capacity ranges and one application each.",
                  "VRF: single outdoor unit, refrigerant branch piping, indoor units per zone, inverter compressors, heat recovery.",
                  "Central plant: chiller - chilled water - AHU/FCU - cooling tower; COP 5-6.5.",
                  "Compare on zone control, metering, efficiency and maintenance.",
                  "Recommend per-floor VRF for the multi-tenant tower: tenant metering and redundancy.",
                  "Note the chiller alternative for a single-owner campus - show the trade, not a favourite.",
                ],
              },
              {
                q: "What is VRF air conditioning? State its two chief advantages over split units.",
                marks: 2,
              },
              {
                q: "Differentiate a chiller from a packaged unit and name the heat-rejection device each uses.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Ducts, fans, refrigeration cycle and BMS",
            body: [
              "Ducts distribute conditioned air. Galvanized-iron sheet ducts - rectangular where headroom is tight, round where friction must fall - are sized by the equal-friction method at about 0.8-1.0 Pa per metre: low-velocity mains run 5-8 m/s, branches 3-5 m/s, and aspect ratios stay under 4:1 to limit pressure loss and flutter. Volume-control dampers balance the network, fire dampers close where ducts cross fire walls, and thermal plus acoustic insulation clads everything through occupied space. Diffusers and grilles turn duct air into a comfortable room air pattern.",
              "Fans move the air, and the fan laws govern them: flow varies directly with speed, pressure with speed squared, and power with speed cubed - which is why variable-frequency drives on fans and pumps return outsized savings at part load. The refrigeration cycle beneath it all has four stations: the compressor raises refrigerant to hot high-pressure gas; the condenser rejects that heat to outdoor air or cooling-tower water; the expansion device throttles the liquid so pressure and temperature collapse; and the evaporator boils the cold refrigerant, absorbing heat from room air or chilled water. Refrigerants in service include R-32 and R-410A (with R-22 phased out) and ammonia in industrial plants.",
              "The building management system (BMS) closes the loop. Field sensors - temperature, humidity, CO2, duct static pressure, filter differential - feed direct-digital controllers running PID loops; a supervisory head-end schedules equipment, trends data, raises alarms and enforces cause-and-effect logic such as 'smoke detector trips the AHU'. Open protocols BACnet and Modbus let chillers, VRF, meters and lighting join one dashboard, and IoT sensors extend the same spine wirelessly. A competent BMS typically returns 10-30 percent of HVAC energy through schedules, resets and fault detection.",
            ],
            bullets: [
              "Duct materials: GI sheet; rectangular saves headroom, round minimizes friction; aspect ratio <= 4:1.",
              "Equal-friction sizing at about 0.8-1.0 Pa per m; low-velocity mains 5-8 m/s, branches 3-5 m/s.",
              "Dampers: VCDs for balancing, fire dampers where ducts cross fire-rated walls or floors.",
              "Fan laws: flow with N, pressure with N squared, power with N cubed - the VFD savings engine.",
              "Vapour-compression cycle: compressor - condenser - expansion device - evaporator, and back.",
              "Refrigerants: R-32 and R-410A current, R-22 phased out, ammonia for industrial duty.",
              "BMS: sensors - DDC controllers (PID) - supervisory dashboards; BACnet and Modbus protocols.",
              "BMS payback: 10-30 percent HVAC energy savings from schedules, resets and fault detection.",
            ],
            codeExample: {
              language: "text",
              caption: "BMS point list for one air-handling unit - the integrator's contract line items.",
              code: `AHU-01 POINT LIST (typical BMS scope)

AI  Supply air temperature       -> PID output to chilled-water valve
AI  Return air temperature       -> room energy trend
AI  Mixed / outside air temp     -> economizer changeover decision
AI  Filter differential pressure -> alarm above 250 Pa
AI  CO2 in return duct           -> demand-controlled ventilation setpoint
AO  Chilled-water valve 0-10 V   -> supply air at 13 deg C
AO  Supply fan VFD 0-10 V        -> duct static pressure at 250 Pa
DO  Fan start / stop             -> schedule 07:00-19:00 weekdays
DO  Fire trip                    -> stops fan on duct smoke detector
Trend: kWh, run-hours, alarm log pushed to the head-end dashboard`,
            },
            diagram: {
              kind: "cycle",
              title: "The vapour-compression refrigeration cycle",
              caption: "Four stations, one loop - draw it clockwise and label each state.",
              steps: [
                { label: "Compressor", note: "low-pressure vapour in, hot high-pressure gas out" },
                { label: "Condenser", note: "reject heat to air or cooling-tower water" },
                { label: "Expansion device", note: "throttle: pressure and temperature collapse" },
                { label: "Evaporator", note: "cold refrigerant boils, absorbing room heat" },
                { label: "Suction line", note: "vapour returns; the loop repeats" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the loop, then the laws",
              body: "Sketch the cycle with all four components and arrows, labelling refrigerant state (vapour/liquid, hot/cold) at every point - the sketch is worth most of the marks. If fan laws are asked, state all three ratios (N, N squared, N cubed) explicitly; writing only 'power rises' earns nothing.",
            },
            keyTerms: [
              { term: "Equal friction method", definition: "Duct-sizing procedure holding friction loss per metre constant along the run." },
              { term: "Fire damper", definition: "Fusible-link or motorized damper closing a duct where it crosses a fire barrier." },
              { term: "Fan affinity laws", definition: "Flow, pressure and power varying with speed to the first, second and third power." },
              { term: "Vapour-compression cycle", definition: "Compressor-condenser-expansion-evaporator loop at the heart of mechanical cooling." },
              { term: "DDC controller", definition: "Direct-digital controller executing PID loops in a BMS." },
            ],
            examQuestions: [
              {
                q: "Describe the vapour-compression refrigeration cycle with a labelled sketch, stating the function of each component and two current refrigerants. Explain duct sizing by the equal-friction method and state the fan affinity laws with their energy consequence.",
                marks: 7,
                outline: [
                  "Draw the loop: compressor, condenser, expansion device, evaporator, suction line.",
                  "Compressor: raises pressure and temperature of the vapour.",
                  "Condenser: rejects heat to air or cooling-tower water; liquid forms.",
                  "Expansion device: throttles liquid; pressure and temperature fall sharply.",
                  "Evaporator: cold refrigerant boils, absorbing heat from air or chilled water.",
                  "Refrigerants: R-32, R-410A; R-22 phased out; ammonia industrial.",
                  "Equal friction at 0.8-1.0 Pa/m; fan laws Q with N, p with N squared, P with N cubed - hence VFD savings.",
                ],
              },
              {
                q: "Where are fire dampers provided in a ducted HVAC system and why?",
                marks: 2,
              },
              {
                q: "State the three fan affinity laws and explain why a small speed reduction saves disproportionate power.",
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
      title: "Vertical Transport and Fire Safety",
      summary:
        "Moving people up and getting them out safely: traction and hydraulic elevators, capacity and speed planning, escalators and moving walks, fire detection and alarm, and suppression, compartmentation and means of escape under NBC Part 4.",
      chapter: {
        number: "04",
        title: "Vertical Transport and Fire Safety",
        intro:
          "Unit IV runs the building in two directions. Upward: the machinery of elevators - traction and hydraulic - planned by round-trip time, handling capacity and interval, and the escalators and moving walks that carry crowds. And downward, in emergency: detectors and alarm systems that give early warning, sprinklers and hydrants that fight the fire, compartmentation that contains it, and the protected escape routes that NBC Part 4 demands.",
        inOneBreath:
          "Traction elevators hang car and counterweight (about 40-50 percent of rated load) from ropes over a sheave and serve every height, while hydraulic plungers push low-rise and heavy-duty cars; planning fixes the round trip time from travel, door and passenger-transfer components, then handling capacity HC = 300 x car load x number of cars / RTT and interval = RTT / cars are checked against 11-15 percent of population per five minutes and 25-40 second intervals; escalators at 30 degrees and 0.5 m/s carry about 6000 persons per hour per metre of width but are never means of egress; and fire safety layers prevention, detection (smoke and heat detectors, addressable panels), suppression (sprinklers at 68 deg C bulbs, hydrants, risers), compartmentation (fire doors, dampers, stops) and escape (travel distance limits, protected pressurized stairs, refuge areas) per NBC Part 4.",
        sections: [
          {
            number: "4.1",
            title: "Elevators: traction and hydraulic",
            body: [
              "An elevator is a system, not a box: the hoistway (shaft), the car in its sling, guide rails, landing and car doors, a machine room (traditionally), and safety kit - overspeed governor, safety gear that grips the rails, buffers at the pit. Traction elevators hang the car and a counterweight from steel ropes over a motor-driven sheave. Geared machines serve up to about 2.5 m/s; gearless machines run the tall towers at 2.5-10 m/s. The counterweight, set near car weight plus 40-50 percent of rated load, balances the motor so most of the work is friction.",
              "Hydraulic elevators drop the ropes: a pump forces oil into a cylinder, and a plunger pushes the car up (holes are drilled for direct 1:1 plungers; holeless and roped 2:1 versions avoid the drilled well). Speeds stay 0.15-1.0 m/s and travel 2-6 stops, but the design carries heavy loads gracefully - freight, hospital beds, low-rise public buildings - with only a small cabinet beside the pit instead of an overhead machine room. The price is energy: the pump lifts every upward trip, and oil carries environmental obligations.",
              "Selection follows the building. For 6-25 storey residential and office towers, the machine-room-less (MRL) gearless traction elevator is today's default - efficient, compact, quick to install. Hydraulic remains right for 2-5 stop freight and heavy-duty service where headroom is scarce. Beyond 25 storeys, speeds climb through 2.5-6 m/s, destination control groups passengers by floor, and sky lobbies with shuttle lifts split very tall stacks. Shaft geometry - pit depth, overhead clearance, tolerances - is fixed early in the architectural design, so the lift consultant arrives before the drawings freeze.",
            ],
            bullets: [
              "System parts: hoistway, car and sling, guide rails, doors, machine room, governor, safety gear, buffers.",
              "Traction: ropes over a sheave; geared to about 2.5 m/s, gearless for 2.5-10 m/s towers.",
              "Counterweight set near car weight plus 40-50 percent of rated load - the efficiency secret.",
              "Hydraulic: pump and plunger push the car; 0.15-1.0 m/s, 2-6 stops, superb for freight.",
              "Hydraulic pros: no overhead machine room, heavy loads; cons: energy-hungry up-trips, oil risk.",
              "MRL gearless traction is the default for 6-25 storey residential and office buildings.",
              "High-rise: 2.5-6 m/s, destination control, sky lobbies and shuttle lifts.",
            ],
            table: {
              caption: "Traction versus hydraulic elevators.",
              headers: ["Aspect", "Traction (geared / gearless)", "Hydraulic"],
              rows: [
                ["Travel", "10-300+ m", "2-25 m typical"],
                ["Speed", "0.5-10 m/s", "0.15-1.0 m/s"],
                ["Drive", "Motor + sheave + ropes + counterweight", "Pump + cylinder and plunger"],
                ["Energy", "Efficient - counterweight balances the load", "Pump lifts every up-trip; higher running cost"],
                ["Machine room", "Overhead room, or none for MRL", "Small cabinet at pit level"],
                ["Best use", "Passenger towers of every height", "Freight, hospitals, low-rise heavy duty"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which drive suits this shaft?",
              caption: "Match the drive to rise, duty and headroom.",
              start: "A shaft must be equipped",
              branches: [
                {
                  label: "MRL gearless traction",
                  outcome: "Default for 6-25 storey residential and office towers; compact, efficient, quick to install",
                  good: true,
                },
                {
                  label: "Geared traction with machine room",
                  outcome: "Robust and serviceable choice for mid-rise freight and hospitals",
                  good: true,
                },
                {
                  label: "Hydraulic",
                  outcome: "Right for 2-5 stops, heavy goods or shafts where headroom is scarce",
                  good: true,
                },
                {
                  label: "One traction car for a 20-floor tower",
                  outcome: "A single car cannot serve the population; queues and complaints are guaranteed",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "The counterweight is the answer's centre",
              body: "Whenever asked 'why are traction lifts efficient' or 'explain the counterweight', state the sizing rule - car weight plus about 40-50 percent of rated load - and explain that the motor then sees only the imbalance, so the system recovers energy on down-trips. Then contrast the hydraulic pump lifting full weight every trip.",
            },
            keyTerms: [
              { term: "Counterweight", definition: "Mass balancing car plus 40-50 percent of rated load, cutting traction motor duty." },
              { term: "Traction sheave", definition: "Grooved drive wheel over which the suspension ropes run." },
              { term: "Machine-room-less (MRL)", definition: "Traction elevator design embedding the machine in the hoistway." },
              { term: "Overspeed governor", definition: "Speed-monitoring device triggering the safety gear if the car overruns." },
              { term: "Holeless hydraulic", definition: "Hydraulic design with a roped or twin-cylinder plunger avoiding a drilled well." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of traction and hydraulic elevators with sketches, explaining the function of the counterweight and the safety devices. State the application range of each type and the role of MRL designs.",
                marks: 7,
                outline: [
                  "Sketch a traction hoistway: machine, sheave, ropes, car, counterweight, rails, governor.",
                  "Explain counterweight sizing (car + 40-50 percent load) and the balancing benefit.",
                  "Geared vs gearless machines with speed ranges 0.5-2.5 and 2.5-10 m/s.",
                  "Sketch hydraulic: pump, cylinder, plunger; holeless and roped variants.",
                  "Compare travel, speed, energy and machine-room needs in a table.",
                  "Safety devices: overspeed governor, safety gear, buffers, door protection.",
                  "Applications: MRL traction for 6-25 storeys; hydraulic for freight and low-rise.",
                ],
              },
              {
                q: "State the purpose of the counterweight in a traction elevator.",
                marks: 2,
              },
              {
                q: "Why are hydraulic elevators preferred for freight and low-rise buildings? Give two limitations.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Elevator planning: capacity, speed and handling",
            body: [
              "Planning converts building population into cars. Rated load converts to persons at 75 kg each (a 1000 kg car holds 13); speed rises with the building: 1.0-1.75 m/s for residential, 1.6-2.5 m/s for offices, 2.5-6 m/s for tall towers. Population comes from area - roughly one person per 10-12 sq m gross in offices, per 25-30 sq m of residential sale area - and the grade of service is stated as two numbers: the percentage of population carried in the busiest five minutes (11-15 percent for offices) and the average interval between cars (25-40 seconds).",
              "Round-trip time (RTT) assembles the journey: acceleration-cruise-deceleration travel up and down, a door-open-and-close cycle of about 5 seconds at each probable stop, and passenger transfer of about 1-2 seconds per boarding or leaving passenger. The probable number of stops follows from the floors served and the passenger count. Handling capacity then follows: HC = 300 x passengers per car x number of cars / RTT, in persons per five minutes, and interval = RTT / number of cars.",
              "Worked example. An eight-storey office of 500 sq m per floor houses about 8 x 500 / 12 = 333 people; 15 percent in five minutes demands 50 persons. Trial: two cars of 8 passengers at 1.75 m/s with 25 m of travel give RTT of about 85 s (travel 36 s, probable 6-7 stops x 5 s doors, 16 s transfer). HC = 300 x 8 x 2 / 85 = 56 persons per five minutes - capacity passes; interval = 85/2 = 42 s, slightly over the office target, so specify 1.75 m/s (not 1.0) or add a third car, and tall towers would zone the stacks.",
            ],
            bullets: [
              "Rated load to persons at 75 kg each: a 1000 kg car carries 13 persons.",
              "Speed by building: residential 1.0-1.75, offices 1.6-2.5, tall towers 2.5-6 m/s.",
              "Population density: offices about 1 person per 10-12 sq m gross; flats per sale area.",
              "Grade of service: 11-15 percent of population per 5 minutes in offices; interval 25-40 s.",
              "RTT components: travel up and down + door cycle (about 5 s) per probable stop + passenger transfer (1-2 s each).",
              "HC = 300 x passengers per car x cars / RTT (persons per 5 min); interval = RTT / cars.",
              "Worked: 333-person office, 2 cars x 8 persons, RTT 85 s -> HC 56 per 5 min, interval 42 s.",
            ],
            codeExample: {
              language: "python",
              caption: "Round-trip time and handling capacity for the worked office.",
              code: `def round_trip(floors, travel_m, speed, passengers, door_s=5.0):
    stops = 0.7 * floors + 1              # probable stops, Poisson estimate
    travel = 2 * travel_m / (0.8 * speed) # up + down, ramping allowance
    doors = stops * door_s
    transfer = 2 * passengers             # board + leave
    return travel + doors + transfer

rtt = round_trip(floors=8, travel_m=25, speed=1.75, passengers=8)
hc = 300 * 8 * 2 / rtt                    # 2 cars, persons per 5 min
interval = rtt / 2
print("RTT =", round(rtt), "s")
print("HC =", round(hc), "persons per 5 min (target 50)")
print("Interval =", round(interval), "s (office target 25-40 s)")
print("Verdict: capacity passes; trim RTT or add a car for interval")`,
            },
            diagram: {
              kind: "pipeline",
              title: "Lift planning in five moves",
              caption: "Population to car count - the sequence examiners test.",
              stages: [
                { label: "Estimate population", note: "area per person by occupancy" },
                { label: "Set grade of service", note: "percent per 5 min + interval target" },
                { label: "Compute RTT for a trial car", note: "travel + doors + transfer" },
                { label: "Check handling capacity", note: "HC = 300 x car x n / RTT" },
                { label: "Tune cars and speed", note: "interval vs cost trade-off" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the formula and the targets",
              body: "Lift numericals are formula questions: write RTT components, then HC = 300 x Q x n / RTT, then interval = RTT / n, and close by comparing each result with its target (11-15 percent per 5 minutes; 25-40 s). The comparison sentence is what converts arithmetic into an engineering answer.",
            },
            keyTerms: [
              { term: "Round trip time", definition: "Total time for a car's journey: travel, door cycles and passenger transfer." },
              { term: "Handling capacity", definition: "Persons carried per five minutes: 300 x car load x cars / RTT." },
              { term: "Interval", definition: "Average waiting time proxy: RTT divided by the number of cars." },
              { term: "Grade of service", definition: "Design standard pairing five-minute handling with interval target." },
              { term: "Zoning", definition: "Splitting a tower's floors among lift groups (or sky lobbies) to cut travel." },
            ],
            examQuestions: [
              {
                q: "An eight-storey office with 500 sq m per floor houses about 333 people. Using 15 percent five-minute handling as the criterion, check whether two cars of 8 persons at 1.75 m/s with an RTT of 85 s are adequate, compute the interval, and recommend adjustment if the interval target is 30-40 seconds.",
                marks: 7,
                outline: [
                  "Population: 8 x 500 / 12 = about 333 persons.",
                  "Required handling: 15 percent x 333 = about 50 persons per 5 minutes.",
                  "Write HC = 300 x passengers x cars / RTT.",
                  "Substitute: 300 x 8 x 2 / 85 = 56 persons per 5 min - capacity adequate.",
                  "Interval = RTT / cars = 85 / 2 = 42.5 s.",
                  "Compare with the 25-40 s target: slightly high for offices.",
                  "Recommend: hold 1.75 m/s and accept, or add a third car (interval 28 s), or zone the building.",
                ],
              },
              {
                q: "Define interval in lift design and state the target range for offices.",
                marks: 2,
              },
              {
                q: "List the three components of round trip time and state a typical value for each.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Escalators and moving walks",
            body: [
              "An escalator is a staircase on a chain: a inclined steel truss carries a tracked step band driven by a motor, each step combed into the floor at the landings by comb plates; a synchronized handrail rides the balustrade; and the drive, brakes and emergency stops live in the truss. Standard geometry is a 30 degree inclination (35 degrees for low-rise, low-traffic retrofit; 27.3 degrees in older installations) with step widths of 600, 800 or 1000 mm and speeds of 0.5-0.65 m/s.",
              "Capacity is the selling point. A 1000 mm escalator at 0.5 m/s is rated near 6000 persons per hour theoretically (about 1.33 persons per step); real-world flow averages 60-75 percent of that, so plan on 4000-4500 persons per hour per unit. Moving walks flatten the geometry to 0-12 degrees, run 0.5-0.9 m/s, and move 8000-10000 persons per hour on wide pallets with luggage - airports and metros pair them with escalators so passengers walk-on, not step-on.",
              "Planning and safety decide success. Locate banks where pedestrian desire lines already run, never dumping passengers into a queue or a crossing flow; criss-cross arrangements stack efficiently over many floors while parallel banks read clearly in two-level spaces. Vertical rise per unit is typically 3-6 m. Safety features - skirt brushes, missing-step detection, handrail entry protection, comb-plate switches - are standard, but the governing rule is egress: escalators are never counted as means of escape and shut down on fire alarm, converting to fixed stairs, so exit stairs are always sized independently.",
            ],
            bullets: [
              "Anatomy: inclined truss, step band on chain drive, comb plates, synchronized handrail, balustrade.",
              "Standard geometry: 30 degree inclination; 600/800/1000 mm step widths; 0.5-0.65 m/s speed.",
              "Capacity: 1000 mm at 0.5 m/s rates near 6000 persons/h; plan on 60-75 percent in practice.",
              "Moving walks: 0-12 degree incline, 0.5-0.9 m/s, 8000-10000 persons/h on wide pallets.",
              "Arrangements: criss-cross (compact over many floors) versus parallel banks (clear two-level flow).",
              "Safety kit: skirt brushes, missing-step detectors, handrail entry guards, comb-plate switches.",
              "Escalators are NOT means of egress: they stop on fire alarm; exit stairs are sized separately.",
            ],
            table: {
              caption: "Elevator versus escalator versus moving walk.",
              headers: ["Aspect", "Elevator", "Escalator", "Moving walk"],
              rows: [
                ["Movement", "Vertical", "30-35 degree incline", "0-12 degree incline"],
                ["Speed", "0.5-10 m/s", "0.5-0.65 m/s", "0.5-0.9 m/s"],
                ["Capacity", "6-26 persons per trip", "About 6000 persons/h per 1000 mm", "8000-10000 persons/h wide belt"],
                ["Energy", "Intermittent, counterweighted", "Continuous drive while in service", "Continuous drive"],
                ["Egress credit", "Counted in some codes", "Not counted as egress", "Not counted"],
                ["Best use", "All buildings", "Metros, malls, short rises", "Airports, long corridors"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Sizing an escalator installation",
              caption: "From pedestrian forecast to installed banks.",
              steps: [
                { label: "Forecast one-way peak flow", note: "persons per 15 min from the transport study" },
                { label: "Pick width and speed", note: "600/800/1000 mm; 0.5-0.65 m/s" },
                { label: "Apply practical factor", note: "60-75 percent of theoretical" },
                { label: "Units in parallel", note: "flow / practical capacity, round up" },
                { label: "Place up and down banks", note: "clear desire lines, no exit queues" },
              ],
            },
            callout: {
              type: "warning",
              title: "Escalators stop when it matters most",
              body: "Fire alarm stops escalators by design - a burning machine must not carry people into smoke - and codes exclude them from egress capacity. Every answer on escalator planning must end with the exit-stair sentence; omitting it is the most common mark-loser in this topic.",
            },
            keyTerms: [
              { term: "Truss", definition: "Inclined steel frame carrying the escalator machinery and step band." },
              { term: "Comb plate", definition: "Toothed landing plate meshing with step treads to prevent entrapment." },
              { term: "Balustrade", definition: "Side cladding carrying the synchronized handrail." },
              { term: "Criss-cross arrangement", definition: "Up and down escalators stacked diagonally over successive floors, saving footprint." },
              { term: "Practical capacity", definition: "60-75 percent of theoretical persons per hour actually achieved." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of an escalator with a sketch, stating standard inclination, widths and speeds. Explain the criss-cross and parallel arrangements, estimate the practical carrying capacity of a 1000 mm unit at 0.5 m/s, and state why escalators are not accepted as means of egress.",
                marks: 7,
                outline: [
                  "Sketch the truss, step band, comb plates, handrail, balustrade and drive.",
                  "Standards: 30 degrees typical (35 low-traffic), widths 600/800/1000 mm, speeds 0.5-0.65 m/s.",
                  "Capacity: theoretical about 6000 persons/h for 1000 mm at 0.5 m/s.",
                  "Practical: 60-75 percent, i.e. 4000-4500 persons/h.",
                  "Arrangements: sketch criss-cross (compact, multi-floor) and parallel (clear two-level banks).",
                  "Location rules: desire lines, no exit queues, rise per unit typically 3-6 m.",
                  "Egress: stopped on fire alarm and excluded from escape calculations - stairs sized independently.",
                ],
              },
              {
                q: "State the standard inclination and speed range of public escalators.",
                marks: 2,
              },
              {
                q: "Distinguish an escalator from a moving walk and give one application of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Fire detection and alarm systems",
            body: [
              "Fire grows through stages - incipient smoldering, visible flaming, full involvement - and detection pays by catching the earliest. Smoke detectors lead: ionisation types sense the invisible combustion particles of fast flaming fires, photoelectric (optical) types scatter light off the visible smoke of slow smoldering; heat detectors follow as fixed-temperature elements (typically 57-60 deg C) or rate-of-rise elements (about 8 deg C per minute) for kitchens and dusty spaces where smoke devices would nuisance-trip; flame detectors watch UV/IR signatures; and aspirating systems sniff sampled air through laser chambers for the highest-sensitivity rooms.",
              "Architecture separates conventional from addressable systems. Conventional panels wire detectors in zones - a fault or alarm names the zone, not the device - suiting small buildings. Addressable loops give every detector, manual call point and sounder a unique identity; the panel reports the exact device, logs events, runs programmable cause-and-effect, and analogue-addressable sensors even report their smoke value continuously so drift compensation suppresses false alarms. Notification layers sounders (about 65 dB minimum, or 5 dB above ambient), visual beacons where hearing is impaired, and voice evacuation for malls, airports and towers.",
              "Cause-and-effect is the intelligence: a stairwell smoke confirmation can stop AHUs to avoid smoke pumping, home the lifts to the ground floor, release fail-safe doors, start stair pressurization fans, and transmit to the fire brigade panel. NBC 2016 Part 4 requires fire alarm systems in high-rise buildings (above 15 m) and in assembly, mercantile and storage occupancies by threshold. Manual call points at every exit and staircase (travel distance to a call point typically within 30-45 m) give occupants the manual override, and emergency lighting on escape routes - powered from batteries for one to three hours - keeps the route legible when the mains dies.",
            ],
            bullets: [
              "Fire stages: incipient (smoke) - flaming (heat and smoke) - full growth; detect at the earliest stage.",
              "Ionisation smoke detectors: fast flaming fires; photoelectric: visible smoldering smoke.",
              "Heat detectors: fixed temperature (57-60 deg C) and rate-of-rise (about 8 deg C per minute).",
              "Aspirating (ASD) systems sample air through pipes for server rooms and museums.",
              "Conventional panels alarm by zone; addressable loops identify the exact device and log events.",
              "Notification: sounders at 65 dB or 5 dB above ambient, beacons, voice evacuation for large spaces.",
              "Cause-and-effect: AHU stop, lift homing, door release, stair pressurization, brigade panel.",
              "Manual call points at exits and stairs; emergency lighting with 1-3 h battery autonomy.",
            ],
            table: {
              caption: "Detector types and where each belongs.",
              headers: ["Detector", "Senses", "Best for", "Caveat"],
              rows: [
                ["Ionisation smoke", "Invisible combustion particles", "Fast flaming fires, paper stores", "Weak on smoldering; tiny radioactive source"],
                ["Photoelectric smoke", "Light scattered by visible smoke", "Corridors, wards, slow smoldering", "Dust and insects cause nuisance alarms"],
                ["Fixed-temperature heat", "57-60 deg C element", "Kitchens, boiler rooms", "Responds late"],
                ["Rate-of-rise heat", "About 8 deg C per minute", "Garages, kitchens", "Misses slow heat build-up"],
                ["Aspirating (ASD)", "Sampled air in a laser chamber", "Server rooms, archives", "Higher cost; pipe design needed"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Addressable fire alarm architecture",
              caption: "Field devices up to the brigade interface - draw it as a stack.",
              layers: [
                { label: "Fire command centre", note: "annunciation + brigade interface panel" },
                { label: "Control panel", note: "loop cards, cause-and-effect logic, event log" },
                { label: "Addressable loop", note: "each device reports an identity and value" },
                { label: "Field devices", note: "detectors, call points, sounders, interfaces to HVAC and lifts" },
                { label: "Power", note: "mains + 24 V batteries: 24-72 h standby, 30 min alarm" },
              ],
            },
            callout: {
              type: "exam",
              title: "Conventional vs addressable is a stock question",
              body: "Learn the one-line contrast: conventional alarms a zone, addressable alarms a named device with programmable cause-and-effect and an event log. Add three examples of cause-and-effect (AHU stop, lift homing, door release) - the examples carry the remaining marks.",
            },
            keyTerms: [
              { term: "Ionisation vs photoelectric", definition: "Smoke detector families sensing invisible particles vs visible smoke by light scatter." },
              { term: "Addressable loop", definition: "Signalling circuit on which every device carries a unique address." },
              { term: "Manual call point", definition: "Break-glass alarm switch located at exits and stair entrances." },
              { term: "Cause-and-effect matrix", definition: "Programmed rules mapping confirmed events to automatic responses." },
              { term: "Voice evacuation", definition: "Loudspeaker messaging replacing bells in large or complex occupancies." },
            ],
            examQuestions: [
              {
                q: "Classify fire detectors with their principles of operation and suitability, and compare conventional and addressable alarm systems. Explain three cause-and-effect actions a fire panel executes on confirmed alarm, citing the NBC Part 4 requirement for high-rises.",
                marks: 7,
                outline: [
                  "Detector families: ionisation, photoelectric, fixed-temperature, rate-of-rise, flame, aspirating.",
                  "State principle and one suitable room for each; note nuisance-trip limits in kitchens.",
                  "Conventional: zone-level identification, lower cost, small buildings.",
                  "Addressable: per-device identity, event log, analogue values, drift compensation.",
                  "Cause-and-effect examples: stop AHUs, home lifts to ground, release fail-safe doors, start pressurization fans.",
                  "Voice evacuation and emergency lighting for escape routes (1-3 h batteries).",
                  "NBC 2016 Part 4: fire alarm required for buildings above 15 m and assembly occupancies.",
                ],
              },
              {
                q: "Distinguish a fixed-temperature detector from a rate-of-rise detector.",
                marks: 2,
              },
              {
                q: "State the purpose of manual call points and their typical placement rule.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Suppression, compartmentation and escape",
            body: [
              "Water systems fight most building fires. Wet risers - 100-150 mm risers charged from fire pumps, with 63 mm landing valves on every floor - and down-comers fed from the terrace tank give the brigade attack points; hose reels offer first-aid 25 mm jets to occupants; yard hydrants ring the site. Sprinklers are automatic: glass-bulb heads rated 68 deg C (57 deg C quick-response for life-safety zones) open one by one over the fire, discharging at design densities from about 2.25 L/min per sq m in light hazard to 7.5-10+ in storage, fed by a dedicated tank, pump and alarm valve set.",
              "Where water destroys what it protects - server rooms, archives, control rooms - clean agents (HFC-227ea/FM-200, Novec 1230) or CO2 flood the volume instead; kitchens add wet-chemical hood systems; fuel stores take foam. Compartmentation contains whatever burns: fire-resistant walls and floors subdivide the building into compartments, fire doors rated 30-120 minutes with self-closers hold the line, fire dampers seal duct penetrations, fire-stops collar cable and pipe sleeves, and cavity barriers choke hidden voids - all tested as assemblies, not single materials.",
              "Escape, under NBC 2016 Part 4, is quantified generosity. Exits must be remote from each other; maximum travel distance runs about 22-45 m by occupancy and hazard with sprinklers buying extra metres; exit and stair widths follow roughly 5 mm of clear width per person, with stair widths of 1250-2000 mm by occupant load; stairs are pressurized to about 50 Pa to keep smoke out of the protected route; fire lifts serve firefighters; high-rises provide refuge areas for mobility-impaired occupants. One sentence closes every design: prevention first, then detect, suppress, contain, escape - in that order.",
            ],
            bullets: [
              "Water systems: wet risers with 63 mm landing valves, hose reels, yard hydrants, terrace-tank down-comers.",
              "Sprinklers: 68 deg C glass bulbs (57 quick response); design densities from 2.25 L/min/sq m (light hazard) upward.",
              "Clean agents (FM-200, Novec) and CO2 for server rooms and archives; foam for fuel; wet chemical for kitchen hoods.",
              "Compartmentation: rated walls and floors, 30-120 min fire doors with closers, fire dampers, fire-stops, cavity barriers.",
              "Escape per NBC Part 4: remote exits, travel distance about 22-45 m by occupancy, sprinklers buying metres.",
              "Exit width about 5 mm per person; stairs 1250-2000 mm; pressurize stairs to about 50 Pa.",
              "Fire lifts for brigade use; refuge areas in high-rises for assisted evacuation.",
            ],
            table: {
              caption: "Fire protection elements and typical ratings.",
              headers: ["Element", "Typical rating / spec", "Why it exists"],
              rows: [
                ["Fire door in a compartment wall", "60-120 min", "Holds flame and smoke inside the compartment"],
                ["Fire damper at a duct crossing", "90-120 min, fusible link", "Stops smoke riding the air duct"],
                ["Fire-stop around a pipe sleeve", "Rated seal system", "No unnoticed hole through the barrier"],
                ["Sprinkler head", "68 deg C bulb", "Automatic discharge over the fire origin"],
                ["Landing valve", "63 mm on wet riser", "Brigade attack line at each floor"],
                ["Pressurized stair", "about 50 Pa", "Keeps smoke out of the escape route"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The layers of fire safety",
              caption: "Prevention at the top, escape at the base - design them in order.",
              tiers: [
                { label: "Prevent", note: "materials, housekeeping, hot-work permits" },
                { label: "Detect and alarm", note: "earliest warning saves lives" },
                { label: "Suppress", note: "sprinklers, hydrants, clean agents" },
                { label: "Contain", note: "compartments, doors, dampers, stops" },
                { label: "Escape", note: "protected stairs, travel limits, refuge" },
              ],
            },
            callout: {
              type: "exam",
              title: "Cite NBC 2016 Part 4",
              body: "Fire-safety answers gain authority by citation: name NBC 2016 Part 4 for compartmentation, travel distance, exit widths and stair pressurization, and mention the 15 m high-rise threshold for mandatory fire alarm and refuge provisions. Generic answers without the code name read as guesses.",
            },
            keyTerms: [
              { term: "Wet riser", definition: "Permanently charged riser pipe with landing valves serving each floor." },
              { term: "Design density", definition: "Sprinkler discharge rate in L/min per sq m over the assumed operating area." },
              { term: "Fire compartment", definition: "Fire-rated enclosure limiting fire spread between building subdivisions." },
              { term: "Travel distance", definition: "Distance from any point to the nearest exit, capped by code by occupancy." },
              { term: "Stair pressurization", definition: "Maintaining about 50 Pa in escape stairs to exclude smoke." },
            ],
            examQuestions: [
              {
                q: "Describe a sprinkler system and the wet-riser arrangement for a multi-storey building, and explain fire compartmentation with its elements (doors, dampers, stops). State the NBC Part 4 requirements for means of escape: travel distance, exit width and stair pressurization.",
                marks: 7,
                outline: [
                  "Sprinklers: 68 deg C glass-bulb heads, density 2.25-10 L/min/sq m by hazard, tank-pump-alarm valve set.",
                  "Wet riser: 100-150 mm charged riser, 63 mm landing valves each floor, fire pump and terrace tank.",
                  "Add hose reels and yard hydrants for first-aid and brigade attack.",
                  "Compartmentation: rated walls/floors, 30-120 min fire doors with closers, fire dampers, fire-stops, cavity barriers.",
                  "Clean-agent systems for server rooms (FM-200, Novec, CO2).",
                  "Escape per NBC Part 4: remote exits; travel distance about 22-45 m by occupancy; about 5 mm width per person.",
                  "Pressurized stairs (about 50 Pa), fire lifts and refuge areas in high-rises.",
                ],
              },
              {
                q: "Distinguish a fire door from a fire damper and state where each is installed.",
                marks: 2,
              },
              {
                q: "Why are escape stairs pressurized, and to what pressure?",
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
      title: "Acoustics, Communications and Automation",
      summary:
        "Sounding, signalling and sensing the building: room acoustics and reverberation, sound insulation, CCTV and communication systems, access control and security, and smart buildings with IoT, energy management and green certifications.",
      chapter: {
        number: "05",
        title: "Acoustics, Communications and Automation",
        intro:
          "Unit V tunes the building for ears, data and energy. It opens with sound itself - reverberation by Sabine's formula and the difference between absorption and insulation - then wires the building for telephone, data, public address and CCTV; secures it with layered access control and intrusion detection; and finally connects everything into smart-building platforms with IoT sensors, energy-management strategies and the green certifications that rate the result.",
        inOneBreath:
          "Reverberation time follows Sabine's T = 0.161 V / A with A the total absorption in sabins, tuned to about 1 second for speech and 1.5-2 seconds for music; sound insulation obeys the mass law - doubling mass adds about 5-6 dB of transmission loss - improved by cavities, double glazing and floating floors, and never confused with absorption; structured cabling runs MDF to IDF to outlet with Wi-Fi filling in; PA systems run 100-volt lines with zones; CCTV chains IP cameras through PoE switches to NVR storage sized at 10.8 GB per day per Mbps of bitrate; access control layers perimeter, building, zone, room and asset with card, PIN and biometric credentials released fail-safe on fire; and smart buildings close the loop - IoT sensors, BACnet and Modbus, dashboards with fault detection - toward IGBC, LEED, GRIHA and ECBC compliance.",
        sections: [
          {
            number: "5.1",
            title: "Room acoustics and reverberation",
            body: [
              "Sound is pressure vibration in the 20 Hz to 20 kHz band, and the ear hears it on a logarithmic decibel scale where each 10 dB step sounds roughly twice as loud. In a room, a listener receives direct sound, then early reflections shaping clarity, then a decaying reverberant tail. The tail's length is the reverberation time RT60 - the time for sound to decay 60 dB after the source stops - and Sabine's formula fixes it: T = 0.161 V / A, with V the room volume in cubic metres and A the total absorption in sabins, each surface contributing area times its absorption coefficient (0 to 1).",
              "Optimum reverberation matches use: classrooms and lecture halls about 0.6-1.0 s, drama theatres 0.9-1.2 s, concert halls 1.5-2.2 s by volume, and studios 0.3-0.5 s. Too short a tail sounds dead and exposes a weak voice; too long drowns consonants and blurs music. Design distributes absorption deliberately - rear walls get thick panels to kill slap-back echo, side walls alternate absorption with diffusion to keep liveliness, and parallel hard surfaces get broken up to prevent flutter echo.",
              "Worked example. A seminar hall of 600 cu m has 60 sq m sabins of absorption: T = 0.161 x 600 / 60 = 1.61 s - muddy for speech. Target 1.0 s needs A = 0.161 x 600 / 1.0 = 96.6 sq m sabins, so about 37 sq m of additional absorption must be added; at a panel coefficient of 0.95 that is roughly 39 sq m of panel - about fifty 0.6 m x 1.2 m boards on the rear wall and ceiling perimeter. The check: T falls to 0.161 x 600 / 96.6 = 1.0 s, exactly the target.",
            ],
            bullets: [
              "Audible band 20 Hz-20 kHz; decibel scale is logarithmic - +10 dB sounds about twice as loud.",
              "RT60: time for a 60 dB decay after the source stops.",
              "Sabine's formula: T = 0.161 V / A (V in cu m, A in sq m sabins).",
              "Absorption coefficient alpha runs 0 (reflective) to 1 (fully absorptive); A = sum of area x alpha.",
              "Optimum RT: speech 0.6-1.0 s, drama 0.9-1.2 s, concert 1.5-2.2 s, studios 0.3-0.5 s.",
              "Design placement: rear wall absorption against echo, side walls diffused, no parallel bare surfaces (flutter).",
              "Worked: 600 cu m hall, A = 60 -> T = 1.61 s; add about 39 sq m of alpha-0.95 panel for T = 1.0 s.",
            ],
            codeExample: {
              language: "python",
              caption: "Sabine's formula as a design loop for the seminar hall.",
              code: `def reverberation(volume_m3, absorption_m2):
    return 0.161 * volume_m3 / absorption_m2

V = 600
existing_A = 60
target = 1.0
print("Existing RT =", round(reverberation(V, existing_A), 2), "s")
A_needed = 0.161 * V / target
extra = (A_needed - existing_A) / 0.95   # panels at alpha 0.95
print("Absorption needed:", round(A_needed, 1), "sq m sabin")
print("Add about", round(extra), "sq m of panel:",
      round(extra / 0.72), "boards of 0.6 x 1.2 m")
print("Check RT after:", round(reverberation(V, existing_A + extra * 0.95), 2), "s")`,
            },
            diagram: {
              kind: "cycle",
              title: "The acoustic design loop",
              caption: "Five stations around one target - iterate until the room sounds right.",
              steps: [
                { label: "Fix use and volume", note: "speech, drama or music" },
                { label: "Set target RT", note: "0.6-1.0 s speech; 1.5-2.2 s music" },
                { label: "Compute existing RT", note: "Sabine: 0.161 V / A" },
                { label: "Add or tune absorption", note: "rear wall first, then ceiling band" },
                { label: "Check echo and flutter", note: "break parallel hard surfaces" },
              ],
            },
            callout: {
              type: "exam",
              title: "Formula, units, then numbers",
              body: "Write T = 0.161 V / A with units (cu m and sq m sabins) before substituting anything. Then show the rearrangement A = 0.161 V / T for the design direction - examiners award the algebra and the panel count separately, and a missing-unit answer caps at half marks.",
            },
            keyTerms: [
              { term: "Reverberation time (RT60)", definition: "Time for sound energy to decay 60 dB after the source stops." },
              { term: "Absorption coefficient", definition: "Fraction of incident sound energy absorbed by a surface, 0 to 1." },
              { term: "Sabin", definition: "Unit of absorption: one square metre of perfect absorber." },
              { term: "Echo", definition: "Distinct delayed reflection, typically beyond about 50 ms delay." },
              { term: "Flutter echo", definition: "Rapid repeated reflection between parallel hard surfaces." },
            ],
            examQuestions: [
              {
                q: "Define reverberation time, state and explain Sabine's formula, and give optimum values for speech and music rooms. A seminar hall of 600 cu m has 60 sq m sabins of absorption: find the existing RT and the added alpha-0.95 panel area needed to reach 1.0 s.",
                marks: 7,
                outline: [
                  "Define RT60: time for a 60 dB decay.",
                  "Sabine: T = 0.161 V / A; define V and A (sum of area x alpha).",
                  "Optimum RT: speech 0.6-1.0 s, concert 1.5-2.2 s by volume.",
                  "Existing: T = 0.161 x 600 / 60 = 1.61 s.",
                  "Required absorption: A = 0.161 x 600 / 1.0 = 96.6 sq m sabins.",
                  "Deficit 36.6 sabins / 0.95 = about 39 sq m of panel - about fifty 0.6 x 1.2 m boards.",
                  "Check: T = 0.161 x 600 / 96.6 = 1.0 s; place panels on rear wall and ceiling perimeter.",
                ],
              },
              {
                q: "State the optimum reverberation time range for a lecture hall and for a concert hall.",
                marks: 2,
              },
              {
                q: "Why is absorptive treatment concentrated on the rear wall of an auditorium?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Sound insulation",
            body: [
              "Insulation and absorption answer different questions and the exam loves the distinction. Absorption tames sound already inside a room (alpha, sabins, section 5.1); insulation blocks sound crossing a boundary. Airborne sound - speech, music, traffic - travels as air pressure and dies against mass; impact sound - footsteps, dropped objects - enters the structure and travels through it. Transmission loss is the metric: TL = 10 log(1 / tau) dB, where tau is the fraction of energy transmitted; a wall of TL 50 dB passes one hundred-thousandth of the incident energy.",
              "The mass law governs: doubling the surface mass (or the frequency) lifts TL by about 5-6 dB. So 115 mm plastered brick (about 200 kg/sq m) reaches near 45 dB, 230 mm brick (about 400 kg/sq m) near 50 dB, while a single 4 mm glass pane (10 kg/sq m) manages only 25-28 dB. The clever escape from mass is the cavity: double-leaf walls on staggered studs, double glazing with unequal panes (e.g. 6-12-6 mm) and an absorptive-lined gap, and resiliently supported boards each add isolation by decoupling, at a fraction of the weight.",
              "Practice and its traps. Impact sound needs the floating floor - a screed on a resilient layer isolating footfall from the slab - measured by the impact insulation class. Flanking paths (sound bypassing the wall through connected floors and soffits) cap any wall's performance, and a single unsealed penetration undoes it: even small openings cut several dB, so acoustic doors need perimeter seals and drops. A machine room at 95 dB beside an office needing 45 dBA demands about 50 dB of construction - 230 mm masonry with a sealed heavy door - and WHO keeps bedrooms near 30 dBA.",
            ],
            bullets: [
              "Insulation blocks sound crossing boundaries; absorption tames sound inside - never confuse them.",
              "Airborne sound vs impact sound - mass law fights the first, resilient isolation the second.",
              "Transmission loss TL = 10 log(1 / tau) in dB; 50 dB passes one part in 100,000.",
              "Mass law: doubling mass or frequency adds about 5-6 dB.",
              "Typical TL: 115 mm brick about 45 dB; 230 mm about 50 dB; single 4 mm glass 25-28 dB.",
              "Cavity construction beats mass: double-leaf walls, double glazing with unequal panes, resilient boards.",
              "Floating screeds fix impact noise (IIC ratings); flanking paths and unsealed holes cap performance.",
              "Design check: 95 dB machine room to a 45 dBA office needs about 50 dB construction.",
            ],
            table: {
              caption: "Approximate airborne insulation of common constructions.",
              headers: ["Construction", "Surface mass (kg/sq m)", "TL (dB)", "Note"],
              rows: [
                ["115 mm brick, plastered", "about 200", "45", "Everyday partition"],
                ["230 mm brick, plastered", "about 400", "50", "Heavy duty, single leaf"],
                ["Single 4 mm float glass", "10", "25-28", "Poor at low frequency"],
                ["Double glazing 6-12-6 mm", "30", "32-35", "Unequal panes improve isolation"],
                ["150 mm RCC + floating screed", "375", "about 50 airborne", "Screed lifts impact rating to IIC 55+"],
                ["2 x 12 mm gypsum, 75 mm wool cavity", "40", "40-45", "Lightweight - only if sealed"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Insulation versus absorption",
              caption: "The exam's favourite confusion, settled side by side.",
              left: {
                heading: "Insulation (barrier)",
                items: [
                  "Blocks sound crossing a boundary",
                  "Measured as transmission loss or STC in dB",
                  "Governed by mass, decoupling and sealing",
                  "Fixed at construction; costly to retrofit",
                  "The answer to: machine room beside an office",
                ],
              },
              right: {
                heading: "Absorption (taming)",
                items: [
                  "Reduces buildup within one room",
                  "Measured as alpha and added sabins",
                  "Governed by porous area and thickness",
                  "Retrofittable as panels, baffles, ceilings",
                  "The answer to: echoey classroom or lobby",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "A small hole steals many decibels",
              body: "Transmission loss collapses at unsealed penetrations - a 10 percent open area can cut a 45 dB wall toward single figures. Every exam answer on insulation should end with the sealing sentence: perimeter door seals, filled service holes, and gasketted back boxes. And never write 'absorptive panels will insulate the room' - that confuses the two concepts and loses the whole step.",
            },
            keyTerms: [
              { term: "Transmission loss", definition: "10 log(1/tau) dB - the dB reduction of sound power through a construction." },
              { term: "Mass law", definition: "Empirical rule: TL rises about 5-6 dB per doubling of mass or frequency." },
              { term: "STC", definition: "Sound transmission class - single-number lab rating of airborne insulation." },
              { term: "Impact insulation class", definition: "Single-number rating of a floor's resistance to footfall-type noise." },
              { term: "Flanking transmission", definition: "Sound bypassing the separating element through connected structure." },
            ],
            examQuestions: [
              {
                q: "Differentiate airborne and impact sound insulation, state the mass law with typical TL values for brick and glass, and describe the construction measures - cavities, double glazing, floating floors - that improve insulation. Explain why absorption treatment cannot substitute for insulation.",
                marks: 7,
                outline: [
                  "Airborne: pressure waves, fought by mass and cavities; impact: structure-borne, fought by resilience.",
                  "TL = 10 log(1 / tau); state the meaning in dB.",
                  "Mass law: +5-6 dB per doubling of mass or frequency.",
                  "Values: 115 mm brick about 45 dB, 230 mm about 50 dB, 4 mm glass 25-28 dB.",
                  "Cavity measures: double-leaf staggered-stud walls, unequal-pane double glazing with absorptive lining.",
                  "Floating screed for impact noise (IIC); sealing and flanking control as the practical limits.",
                  "Absorption changes reverberation within a room; it cannot stop energy crossing a barrier.",
                ],
              },
              {
                q: "Define transmission loss and state the mass-law increment per doubling of mass.",
                marks: 2,
              },
              {
                q: "Why do double-glazed windows use panes of unequal thickness?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Communication systems and CCTV",
            body: [
              "Structured cabling is the building's nervous system. The carrier enters at the main distribution frame (MDF); backbone cabling - fibre or Cat 6 - rises through riser shafts to intermediate distribution frames (IDF) on each floor; horizontal Cat 6 runs extend to outlets within a 90 m permanent-link limit; Wi-Fi access points, surveyed for a signal edge near -65 dBm, unshackle the laptops. Telephony rides the same cable as IP (VoIP) through an IP-PBX, and the public-address system organizes itself in zones over 100-volt loudspeaker lines, with the fire alarm able to override for evacuation announcements.",
              "CCTV watches the same floors. Analogue cameras over coax are legacy; IP cameras on Power-over-Ethernet dominate - fixed domes for corridors and lobbies, bullets for perimeters, PTZ for operator patrols, panoramic fisheye for wide halls, and ANPR units at gates reading number plates. Resolution (2-12 MP), low-light sensitivity and wide dynamic range fix image quality; a video management system (VMS) records, analyses (line-crossing, loitering, face) and raises alarms; retention typically runs 30-90 days.",
              "Storage is the quiet numerical. Bitrate times time gives volume: one camera at 4 Mbps records 4 x 10.8 = about 43 GB per day, so eight cameras retained 30 days need 8 x 43 x 30 = about 10.4 TB raw - motion-triggered recording and H.265 compression commonly halve it, and RAID adds a mirror. Worked design: a 40-camera campus at an average 2 Mbps with 60 percent motion activity stores about 40 x 2 x 10.8 x 30 x 0.6 = about 15.5 TB per month - two 16 TB NVR shelves with RAID cover it.",
            ],
            bullets: [
              "Structured cabling: MDF - backbone (fibre / Cat 6) - floor IDFs - horizontal runs within 90 m.",
              "Wi-Fi planned by survey: coverage edge near -65 dBm; APs on the same cable plant.",
              "IP telephony (VoIP) and EPABX/PBX run voice as data on the same network.",
              "PA systems: 100 V line speakers in zones; fire alarm overrides for evacuation messages.",
              "IP cameras on PoE: fixed dome, bullet, PTZ, panoramic fisheye, ANPR at gates.",
              "VMS records and analyses (line crossing, loitering); retention typically 30-90 days.",
              "Storage rule: GB per day = bitrate (Mbps) x 10.8 per camera.",
              "Worked: 8 cameras at 4 Mbps for 30 days = about 10.4 TB raw; motion and H.265 halve it.",
            ],
            table: {
              caption: "Camera types and their applications.",
              headers: ["Camera", "Best use", "Note"],
              rows: [
                ["Fixed dome", "Lobbies, corridors", "Discreet; lens choice sets coverage"],
                ["Bullet", "Perimeter, facade", "Visible deterrent; weatherproof housing"],
                ["PTZ", "Yards, large open areas", "Operator patrols; auto-tracking"],
                ["Panoramic fisheye", "Halls, intersections", "One lens, no blind spot; dewarped in VMS"],
                ["ANPR", "Gates, parking entries", "Plate reading with allow-list logic"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The signal chain of a campus system",
              caption: "From field device to archive - each arrow is procurement scope.",
              steps: [
                { label: "Field devices", note: "cameras, readers, sensors" },
                { label: "Edge switches (PoE)", note: "power plus data on one cable" },
                { label: "NVR / VMS servers", note: "record, analyse, alarm" },
                { label: "Monitoring wall", note: "live patrol by operators" },
                { label: "Storage tier", note: "30-90 day retention, RAID" },
              ],
            },
            callout: {
              type: "exam",
              title: "The 10.8 GB rule",
              body: "Storage numericals collapse to one line: GB per day per camera = bitrate in Mbps x 10.8. Derive it once (1 Mbps x 86,400 s = 86,400 Mb = 10.8 GB) and every CCTV question becomes two multiplications. Always finish with the RAID sentence - a mirrored array doubles the raw figure.",
            },
            keyTerms: [
              { term: "MDF and IDF", definition: "Main and intermediate distribution frames - the wiring closets of structured cabling." },
              { term: "100 V line PA", definition: "Loudspeaker distribution standard using step-up transformers for long runs." },
              { term: "PoE", definition: "Power over Ethernet - one cable carrying power and data to cameras and APs." },
              { term: "VMS", definition: "Video management software recording, displaying and analysing camera streams." },
              { term: "ANPR", definition: "Automatic number-plate recognition at gates and parking entries." },
            ],
            examQuestions: [
              {
                q: "Describe the structured cabling system of a multi-storey building (MDF, IDFs, horizontal cabling) and the architecture of an IP CCTV system with its camera types. Estimate the storage for 8 cameras at 4 Mbps each retained 30 days, and state two measures that reduce it.",
                marks: 7,
                outline: [
                  "Structured cabling: MDF at entry, backbone fibre/Cat 6 risers, IDF per floor, 90 m horizontal limit.",
                  "Wi-Fi APs and VoIP share the same cable plant.",
                  "IP CCTV: PoE cameras to edge switches to NVR/VMS to monitoring wall.",
                  "Camera types: fixed dome, bullet, PTZ, fisheye, ANPR - one line each.",
                  "Storage: GB/day = Mbps x 10.8; per camera 4 x 10.8 = 43.2 GB.",
                  "Total: 8 x 43.2 x 30 = about 10.4 TB raw.",
                  "Reductions: motion-triggered recording and H.265 compression roughly halve it; RAID mirrors add disks.",
                ],
              },
              {
                q: "What is a 100-volt line PA system and where is it used?",
                marks: 2,
              },
              {
                q: "State the typical retention period for CCTV recordings and one reason it is fixed.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Access control and building security",
            body: [
              "Security is layered, and each layer buys time: the perimeter (fencing, lighting, barriers, ANPR), the site (patrols, cameras), the building shell (doors, turnstiles, the visitor desk), interior zones (readers, interlocks) and the asset itself (rack locks, vaults, safes). Entry through any layer needs authentication by factors - knowledge (a PIN), possession (a card or phone) and being (biometrics) - and multi-factor authentication stacks two or more, which is why a card plus a fingerprint guards the server room while a PIN alone guards a locker.",
              "An access system is a small decision machine: a credential presented at a reader, wired to a controller that checks the credential, the door, the time zone and the anti-passback state before energizing the lock - magnetic hold-opens (about 600 lb hold), electric strikes or turnstiles - and writes every event to an audit trail. Cards range from clonable 125 kHz proximity to encrypted smart cards (MIFARE DESFire) and mobile credentials over NFC/BLE. Biometrics bring the FAR/FRR trade-off: tightening the threshold blocks impostors but exasperates genuine users; templates, not images, are stored to soften privacy law.",
              "The life-safety override is non-negotiable: on fire alarm, escape doors fail-safe - they unlock, because people outrank assets - while asset doors may fail-secure, releasing on request-to-exit hardware. Intrusion detection layers passive-infrared and dual-tech motion sensors, door contacts and glass-break detectors in zones onto a panel monitored at a central station. Design finishes with deterrence through layout: CPTED - natural surveillance, clear sightlines, territorial marking - that reduces the burden every technical layer must otherwise carry; and parking entries pair boom barriers with tags and ANPR.",
            ],
            bullets: [
              "Layers: perimeter - site - building - zone - asset; each layer delays and detects.",
              "Authentication factors: knowledge (PIN), possession (card, phone), being (biometric); MFA stacks two or more.",
              "System chain: reader - controller (rules, time zones, anti-passback) - lock - audit trail.",
              "Lock types: magnetic hold-open (about 600 lb), electric strike, turnstile, boom barrier.",
              "Cards: 125 kHz prox (clonable) -> MIFARE DESFire (encrypted) -> mobile NFC/BLE credentials.",
              "Biometrics: FAR/FRR threshold trade-off; store templates, not images, for privacy.",
              "Fire alarm forces fail-safe unlock on escape doors; asset doors may fail-secure.",
              "Intrusion: PIR and dual-tech sensors, door contacts, glass-break detectors, zoned panel, central monitoring.",
            ],
            table: {
              caption: "Credential technologies compared.",
              headers: ["Credential", "Strength", "Weakness", "Use"],
              rows: [
                ["PIN only", "Nothing to carry", "Shared, observed over the shoulder", "Low-risk doors, lockers"],
                ["125 kHz prox card", "Fast and cheap", "Cloned in seconds", "Legacy sites only"],
                ["Smart card (DESFire)", "Encrypted, mutual authentication", "Cost, key management", "Corporate SSO and cashless"],
                ["Mobile (NFC / BLE)", "Remote revoke, no new plastic", "Battery dependency", "Modern offices, hotels"],
                ["Biometric (face, fingerprint)", "Cannot be lent or lost", "FAR/FRR tuning, privacy law", "Server rooms, vaults"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Concentric rings of protection",
              caption: "Outermost ring at the top - each inner ring assumes the last one slowed the intruder.",
              layers: [
                { label: "Perimeter", note: "fencing, lighting, ANPR, barriers" },
                { label: "Site", note: "patrols, camera coverage, vehicle checks" },
                { label: "Building shell", note: "doors, turnstiles, visitor desk" },
                { label: "Interior zones", note: "readers, interlocks (man-traps)" },
                { label: "Asset", note: "rack locks, vaults, safes" },
              ],
            },
            callout: {
              type: "warning",
              title: "Fail-safe, not fail-secure, on escape doors",
              body: "The examinable distinction: on power loss or fire alarm, an escape door must fail-safe (unlock - life first), while a server-room door may fail-secure with inside request-to-exit hardware. Any design that mag-locks a required exit without fire-alarm release violates code and loses the question's safety mark.",
            },
            keyTerms: [
              { term: "FAR and FRR", definition: "False-accept and false-reject rates trading security against convenience in biometrics." },
              { term: "Anti-passback", definition: "Rule preventing a credential entering twice without exiting (or vice versa)." },
              { term: "Fail-safe vs fail-secure", definition: "Unlock-on-power-loss (escape doors) vs stay-locked (asset doors)." },
              { term: "Man-trap (interlock)", definition: "Pair of doors never open together, guarding high-security rooms." },
              { term: "CPTED", definition: "Crime prevention through environmental design - surveillance and layout as deterrents." },
            ],
            examQuestions: [
              {
                q: "Explain the layered approach to building security and the three authentication factors with examples. Describe the architecture of an access control system from reader to audit trail, and state the fail-safe requirement for escape doors on fire alarm.",
                marks: 7,
                outline: [
                  "Layers: perimeter, site, building shell, interior zone, asset - draw concentric rings.",
                  "Factors: knowledge (PIN), possession (card/phone), being (biometric); MFA for server rooms.",
                  "Architecture: reader - controller (rules, time zones, anti-passback) - lock - audit trail server.",
                  "Lock types: maglock about 600 lb, electric strike, turnstile, boom barrier.",
                  "Compare credentials: prox vs smart card vs mobile vs biometric (one line each).",
                  "Intrusion layer: PIR/dual-tech, contacts, glass-break, zoned panel, central monitoring.",
                  "Fire alarm -> fail-safe unlock of escape doors; asset doors fail-secure with exit hardware.",
                ],
              },
              {
                q: "What is anti-passback in access control?",
                marks: 2,
              },
              {
                q: "Distinguish fail-safe from fail-secure locks and state where each is used.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Smart buildings, IoT and green certifications",
            body: [
              "A smart building runs its services as one optimized organism. The stack has four tiers: sensing (wired and wireless IoT devices - temperature, humidity, CO2, occupancy, kWh and water meters), network (the IP backbone speaking BACnet and Modbus to controllers, LoRaWAN or Zigbee to battery sensors), control (direct-digital controllers executing PID and rule logic), and the platform (dashboards, trending, alarms, fault detection and analytics, increasingly a digital twin for what-if testing). Integration is the point: HVAC, lighting, lifts, meters and security on one screen instead of six silos.",
              "Energy management strategies are where the money returns: schedules that match plant run-hours to real occupancy; occupancy-based setbacks; CO2 demand-controlled ventilation that breathes only when people are present; variable-frequency drives riding the fan and pump laws; chiller staging optimized across the load curve; tariff-aware load shifting and peak shaving; and solar self-consumption timed to the sun. Fault detection and diagnostics catches the silent wasters - simultaneous heating and cooling, stuck valves, drifting sensors - and metering granularity makes the savings verifiable. Competent implementations typically return 10-30 percent of building energy.",
              "Green certifications grade the outcome. IGBC (CII's Indian Green Building Council) rates Indian homes, campuses and cities from Certified to Platinum; LEED (USGBC, administered globally by GBCI) scores location, water, energy, materials and indoor environment on a 110-point scale to Platinum; GRIHA (TERI with MNRE) is India's national rating, weighting passive design and climate responsiveness; ECBC (BEE) is the mandatory energy code baseline with ECB+ and Super ECBC tiers; and WELL adds occupant health. A smart metered building earns certification points almost automatically - you cannot manage, or certify, what you do not measure.",
            ],
            bullets: [
              "Stack tiers: sensing - network - control - platform; one dashboard over HVAC, lighting, lifts, security.",
              "Protocols: BACnet and Modbus for controllers; LoRaWAN, Zigbee and Wi-Fi for wireless IoT sensors.",
              "Energy strategies: schedules, occupancy setbacks, CO2 demand-controlled ventilation, VFDs, chiller staging.",
              "Fault detection and diagnostics catches simultaneous heat/cool, stuck valves, sensor drift.",
              "Typical verified savings: 10-30 percent of building energy from a competent BMS/EMS.",
              "Tariff-aware control: load shifting, peak shaving, solar self-consumption.",
              "Certifications: IGBC (India, CII), LEED (USGBC, 110 points), GRIHA (TERI/MNRE), ECBC (BEE code), WELL (health).",
              "Rule of the age: metering granularity makes both savings and certifications provable.",
            ],
            table: {
              caption: "Green building rating systems at a glance.",
              headers: ["System", "Run by", "Focus", "Scale"],
              rows: [
                ["IGBC", "CII - Indian Green Building Council", "Indian climate, codes and practice", "Certified to Platinum"],
                ["LEED", "USGBC / GBCI", "Global best practice", "40-110 points to Platinum"],
                ["GRIHA", "TERI with MNRE", "National rating; passive design first", "Star bands of 5"],
                ["ECBC", "BEE, Government of India", "Minimum energy code", "Compliant / ECB+ / Super ECBC"],
                ["WELL", "IWBI", "Occupant health and wellbeing", "Bronze to Platinum"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The smart building maturity ladder",
              caption: "Most buildings sit at the bottom two rungs - each rung up multiplies the savings.",
              tiers: [
                { label: "Autonomous", note: "self-tuning, predictive, net-zero ready" },
                { label: "Optimized", note: "analytics, dashboards, fault detection" },
                { label: "Integrated", note: "one platform, cross-system rules" },
                { label: "Automated", note: "schedules and controllers running" },
                { label: "Connected", note: "meters and sensors reporting" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the platforms and the ratings",
              body: "Smart-building answers score on named parts: protocols (BACnet, Modbus), strategies (demand-controlled ventilation, VFDs, peak shaving), savings (10-30 percent) and certifications (IGBC, LEED, GRIHA, ECBC) each with a one-line identity. A generic paragraph about 'computers controlling the building' earns almost nothing.",
            },
            keyTerms: [
              { term: "IoT sensing layer", definition: "Networked sensors (temperature, CO2, occupancy, meters) feeding the platform." },
              { term: "BACnet / Modbus", definition: "Open communication protocols letting diverse equipment share one BMS." },
              { term: "Demand-controlled ventilation", definition: "Modulating outside air by CO2 measurement - air only when people are present." },
              { term: "Fault detection and diagnostics", definition: "Analytics flagging equipment faults and energy waste automatically." },
              { term: "ECBC", definition: "Energy Conservation Building Code of India, the mandatory energy baseline." },
            ],
            examQuestions: [
              {
                q: "Explain the layered architecture of a smart building (sensing, network, control, platform) and the energy-management strategies it enables, naming relevant protocols. Describe IGBC, LEED, GRIHA and ECBC in one line each and state the typical energy savings a BMS delivers.",
                marks: 7,
                outline: [
                  "Layer 1 sensing: IoT temperature, CO2, occupancy, kWh and water meters.",
                  "Layer 2 network: IP backbone with BACnet/Modbus; LoRaWAN/Zigbee wireless.",
                  "Layer 3 control: DDC controllers executing PID and rule logic.",
                  "Layer 4 platform: dashboards, trending, alarms, fault detection, digital twins.",
                  "Strategies: schedules, occupancy setbacks, DCV by CO2, VFDs, chiller staging, peak shaving.",
                  "Certifications: IGBC (CII, India), LEED (USGBC 110-point), GRIHA (TERI/MNRE), ECBC (BEE code).",
                  "Savings: typically 10-30 percent of building energy, verifiable by metering.",
                ],
              },
              {
                q: "What is demand-controlled ventilation and which sensor drives it?",
                marks: 2,
              },
              {
                q: "State the purpose of ECBC and its tiers above compliance.",
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
        "RGPV CE-703(D) papers mix one or two full numericals (heat load, lumen method, water demand, lift planning or reverberation) with theory spreads across fire safety, AC systems and plumbing. Roughly 70 percent of marks live in five numerical families and the fire-safety unit - allocate revision time in that ratio and keep one practice slot for each unit.",
      ],
      weightedTopics: [
        { topic: "Heat load estimation and TR sizing (Unit III)", weight: "8-10 marks", note: "The most reliable numerical; practise one full room load with all six components and the 3.517 kW conversion." },
        { topic: "Fire detection, alarm and suppression (Unit IV)", weight: "8-10 marks", note: "Detector types, addressable vs conventional, sprinklers and hydrants, NBC Part 4 escape rules." },
        { topic: "Lumen method lighting design (Unit II)", weight: "7-9 marks", note: "Room index to UF to N = E x A / (F x UF x MF); verify spacing and LPD at the end." },
        { topic: "Water demand, storage and pump sizing (Unit I)", weight: "7-9 marks", note: "135 LPCD, one-third-day OHT, pump head and power - one composite numerical." },
        { topic: "AC systems: window to VRF to central plant (Unit III)", weight: "6-8 marks", note: "A labelled comparison table plus selection logic for a named building earns full marks." },
        { topic: "Elevator planning: RTT and handling capacity (Unit IV)", weight: "6-8 marks", note: "Population to cars via HC = 300 x Q x n / RTT; state the interval targets." },
        { topic: "Reverberation by Sabine's formula (Unit V)", weight: "6-8 marks", note: "T = 0.161 V/A with a panel count; memorise optimum RT by room use." },
        { topic: "Wiring, DB schedule and earthing (Unit II)", weight: "5-7 marks", note: "Single-line diagram, MCB/RCCB roles, plate vs pipe earthing sketch." },
        { topic: "Drainage systems, traps and gradients (Unit I)", weight: "5-7 marks", note: "One-pipe vs two-pipe sketch with vent pipe, IC and intercepting trap." },
        { topic: "Smart buildings, BMS and green ratings (Unit V)", weight: "4-6 marks", note: "Layered architecture plus IGBC/GRIHA/LEED one-liners; naming ECBC earns credit." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers all 25 sections twice - once for understanding, once for revision - and reserves the last week for timed papers and the formula sheet.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - plumbing and water supply", tasks: ["Demand numerical: 135 LPCD chain with losses and peak factors", "Storage and pump sizing (OHT, sump, head, power) end to end", "Fixture units and pipe sizing; traps, gradients and drainage sketches"] },
        { week: "Week 2", focus: "Unit II - electrical and lighting", tasks: ["Single-line diagram, DB schedule, MCB/RCCB and earthing sketches", "Photometric definitions with units; lux-level table by heart", "Two lumen-method numericals including layout verification"] },
        { week: "Week 3", focus: "Unit III part 1 - comfort, load, ventilation", tasks: ["Comfort factors and psychrometric chart traces", "Two full heat-load numericals with TR conversion", "Ventilation: ACH fan sizing, natural vs mechanical sketches"] },
        { week: "Week 4", focus: "Unit III part 2 + catch-up", tasks: ["AC system comparison table and selection logic", "Refrigeration cycle and fan laws; BMS point-list reading", "Redo the weakest numerical of weeks 1-3 under time"] },
        { week: "Week 5", focus: "Unit IV - vertical transport and fire", tasks: ["Traction vs hydraulic sketches with counterweight logic", "One RTT/handling-capacity numerical in full", "Detector table, sprinkler system, NBC Part 4 escape rules"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Sabine numerical plus insulation vs absorption contrast", "CCTV storage numerical; access-control layers and fail-safe rule", "Two full past papers under exam timing; rewrite the formula sheet"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last day before the exam",
      body: [
        "One evening, six moves - each takes about twenty minutes and together they refresh every high-yield item.",
      ],
      bullets: [
        "Rewrite the five formulas from memory: demand chain, pump power (0.00981 x Q x H / eta), N = E x A / (F x UF x MF), HC = 300 x Q x n / RTT, and Sabine's T = 0.161 V / A.",
        "Redraw the five exam sketches: electrical single-line diagram, one-pipe vs two-pipe drainage, vapour-compression cycle, lift-planning pipeline, and the layers of fire safety.",
        "Memorise the numbers table: 135 LPCD, 1 TR = 3.517 kW, 50 mm trap seal, 68 deg C sprinkler bulb, 0.8-1.0 Pa per m duct friction, RT about 1 s for speech.",
        "Rehearse three comparison tables aloud: traction vs hydraulic, central plant vs VRF, addressable vs conventional.",
        "Skim the code names you must cite: NBC 2016 Part 4 (fire), IS 3646 (lux), ASHRAE 62.1 (ventilation), ECBC (energy), IGBC/GRIHA/LEED.",
        "Close the books by early evening and take a twenty-minute recall walk through the five units in order - sleep consolidates what the walk retrieved.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Open with the numericals you own - heat load, lumen method, RTT or Sabine - while your formulas are freshest; theory can absorb leftover time, never the reverse.",
        "Write every formula with symbols and units before substituting: the formula line, the substitution and the result are marked separately in RGPV schemes.",
        "Sketch with labels, not art: a labelled freehand diagram (single-line, drainage, refrigeration cycle, security layers) outscores a beautiful unlabeled one every time.",
        "Quote the standard by name - NBC Part 4, IS 3646, ASHRAE 62.1, CPHEEO, ECBC - each citation is a cheap half-mark and signals professional knowledge.",
        "Budget 14-18 minutes per 7-mark question and keep the final 10 minutes for the rounding and units pass: TR rounded up, lux vs lumen checked, dB vs alpha never mixed.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Confusing absorption (alpha, sabins, room acoustics) with insulation (TL, dB, barriers) - they answer different questions and examiners hunt this swap.",
        "Dropping UF or MF from the lumen method - both must divide the flux; forgetting one doubles the luminaire count.",
        "Sizing pumps and pipes on average instead of peak demand - the design flow is 2.5-3 times the average hour.",
        "Quoting RTT without door and passenger-transfer components - travel time alone is only half the round trip.",
        "Counting escalators as means of egress - codes exclude them and they stop on fire alarm; exits are stairs only.",
        "Writing units loosely: lux not lumens for levels, TR not kW for plant (state the 3.517 conversion), ohms not volts for earth resistance.",
      ],
    },
  ],
};
