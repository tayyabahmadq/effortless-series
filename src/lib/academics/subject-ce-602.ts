/**
 * Academics - RGPV Civil Engineering 6th-semester subject: CE-602
 * Environmental Engineering I.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or python code sample, and
 * three exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce602: AcademicSubject = {
  id: "ce-602",
  code: "CE-602",
  title: "Environmental Engineering I",
  semester: "VI Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to environmental engineering for civil engineers: water demand and sources, the water treatment train, distribution networks analysed by Hardy Cross, sewer design and appurtenances, and biological wastewater treatment with BOD kinetics.",
  description:
    "Five units walk from water supply engineering - demand forecasting, intake structures and BIS 10500 quality - through the water treatment train of screening, sedimentation, coagulation, filtration and disinfection, into distribution systems analysed by the Hardy Cross method, then across wastewater collection with sewer hydraulics and appurtenances, and finally into wastewater treatment with BOD and COD kinetics, primary clarifiers, trickling filters, activated sludge, oxidation ponds and sludge disposal. Every section pairs the engineering concept with a worked calculation, a redrawable diagram, a python snippet where it fits, and the exam questions RGPV actually asks.",
  accentColor: "#10b981",
  emoji: "EN",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Water Supply Engineering",
      summary:
        "Quantifying how much water a city needs and where it comes from: per capita demand under IS 1172, population forecasting methods, surface and groundwater sources, intake structures, and BIS 10500 drinking water quality standards.",
      chapter: {
        number: "01",
        title: "Water Supply Engineering",
        intro:
          "Unit I frames the whole subject: how much water a community needs, how to forecast population to size the works, the surface and groundwater sources to tap, the intake structures that lift raw water, and the BIS 10500 standards the finished water must meet.",
        inOneBreath:
          "Total water demand is the sum of domestic, industrial, commercial, institutional, public, fire and losses, sized at 135 lpcd under IS 1172; population is forecast by arithmetic, geometric, incremental or logistic curves; sources are surface (rivers, reservoirs, canals) and groundwater (wells, infiltration galleries); intakes subdivide by location (river, reservoir, canal, lake) and by water level (submerged, wet, dry); and BIS 10500 lists physical, chemical and bacteriological limits - turbidity <= 5 NTU, total dissolved solids <= 500 mg/L, no E. coli in 100 mL.",
        sections: [
          {
            number: "1.1",
            title: "Water demand and its components",
            body: [
              "Water demand is the total quantity of water required to satisfy the needs of a community over a designed period, normally a day. It is the sum of domestic demand for drinking, cooking, bathing, flushing and gardening, industrial and commercial demand, institutional and public demand for schools, hospitals, parks and street washing, fire demand, and an allowance for losses and thefts. The design engineer sizes the source, treatment plant, pumps, pipes and reservoirs for the maximum daily demand of the design year, never the average, because peak hours and peak seasons drive capacity.",
              "IS 1172 - 1993 recommends 135 litres per capita per day (lpcd) for Indian towns with full flushing systems, broken down as 25 lpcd for cooking and drinking, 40 for bathing, 25 for flushing, 25 for washing clothes and utensils, and 15 for gardening and other uses. Of this supply about 80 per cent returns as wastewater - the basis for Unit IV design flow. Smaller or rural communities without sewerage may design at 70 to 100 lpcd. A town of 1 lakh at 135 lpcd needs 13.5 million litres per day plus peak and fire allowances before sizing any unit.",
              "Fire demand is computed by Kuichling's formula Q = 3182 sqrt(P) litres per minute for population P in thousands, by Freeman's Q = 1136 (P/10 + 10), or by the National Board of Fire Underwriters formula, whichever governs. Peak factors multiply the average daily demand: 2.5 for populations under 50,000, 1.5 to 2.0 for larger cities; the design hourly demand is 1.5 times the maximum daily demand. A distribution main must carry the peak hourly flow at a residual pressure of at least 10 to 15 m of head at fire hydrants so that hose streams reach upper storeys.",
            ],
            bullets: [
              "Total demand = domestic + industrial + commercial + institutional + public + fire + losses, all in lpcd.",
              "IS 1172 - 1993: 135 lpcd for towns with sewerage; 70-100 lpcd for smaller communities without.",
              "Fire demand by Kuichling: Q = 3182 sqrt(P) litres/min, P in thousands; alternatively Freeman or NBFU.",
              "Peak factor 2.5 for P under 50,000, 1.5-2.0 for larger; design hourly = 1.5 x maximum daily.",
              "Distribution must deliver peak hourly flow at >= 10-15 m head at fire hydrants and >= 12 m at the topmost fixture.",
              "About 80 per cent of supplied water returns as wastewater - the basis for Unit IV sewer design flow.",
            ],
            table: {
              caption: "Components of water demand and IS 1172 split for a town with sewerage.",
              headers: ["Component", "Share (lpcd)", "Examples"],
              rows: [
                ["Drinking and cooking", "25", "kitchen use"],
                ["Bathing", "40", "baths, ablutions"],
                ["Flushing", "25", "toilets, urinals"],
                ["Washing", "25", "clothes, utensils"],
                ["Gardening and misc.", "15", "gardens, car wash, pets"],
                ["Industrial / fire / losses", "extra", "design separately"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building total design demand from components",
              caption:
                "Average demand -> peak factor -> max daily -> peak hourly -> pipe and pump capacity.",
              steps: [
                { label: "Per capita demand x population = average daily", note: "135 lpcd x P" },
                { label: "Multiply by peak factor (1.5-2.5)", note: "max daily demand" },
                { label: "Add fire demand if governing", note: "Kuichling / Freeman" },
                { label: "Multiply by 1.5 for peak hourly", note: "design capacity" },
                { label: "Add 15 per cent losses allowance", note: "source / treatment size" },
              ],
            },
            callout: {
              type: "exam",
              title: "Carry the peak factor in every sizing step",
              body: "RGPV questions almost always ask you to compute maximum daily and peak hourly demand, not just average. State the average, multiply by the peak factor, then by 1.5 for the hourly peak. Skipping either multiplier costs both the arithmetic and the method marks.",
            },
            keyTerms: [
              { term: "Per capita demand (lpcd)", definition: "Litres per person per day; IS 1172 fixes 135 lpcd for Indian towns with sewerage." },
              { term: "Peak factor", definition: "Ratio of maximum daily demand to average daily demand; 2.5 for small towns, 1.5-2.0 for large cities." },
              { term: "Fire demand", definition: "Reserve discharge for firefighting computed by Kuichling, Freeman or NBFU formulae." },
            ],
            examQuestions: [
              {
                q: "Discuss the various components of water demand. Compute the design hourly demand for a city of 2 lakh population assuming 135 lpcd with a peak factor of 2.0.",
                marks: 7,
                outline: [
                  "List components: domestic, industrial, commercial, institutional, public, fire, losses.",
                  "State IS 1172: 135 lpcd with sewerage; break down into the five sub-components.",
                  "Average daily demand = 2,00,000 x 135 / 1e6 = 27 MLD.",
                  "Maximum daily demand = 27 x 2.0 = 54 MLD.",
                  "Design hourly demand = 54 x 1.5 = 81 MLD (or 937.5 L/s).",
                  "Compute fire demand: Kuichling Q = 3182 sqrt(200) = 45,000 L/min = 750 L/s and compare.",
                  "Conclude: distribution sized for peak hourly plus fire; source and treatment for max daily plus losses.",
                ],
              },
              {
                q: "State IS 1172 per capita demand and list its five sub-components.",
                marks: 3,
              },
              {
                q: "Write Kuichling's formula for fire demand and compute it for a population of 50,000.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Population forecasting methods",
            body: [
              "Every water supply scheme is designed for a future population, not the present one, because the works must serve the city 30 or 50 years after commissioning. The design period is typically 30 years for treatment units and distribution mains, 15 years for pumps and clear-water reservoirs, and 50 years for the source works. The forecast population is then multiplied by per capita demand and the peak factor to fix the design capacity. Forecasting methods differ in how they extrapolate the last census figures: arithmetic increase assumes constant rate, geometric increase assumes constant percentage rate, incremental increase adds an average increment to the arithmetic figure, and logistic growth curves follow a saturated S-shape.",
              "The arithmetic increase method gives the lower bound forecast: Pn = P0 + n x r, where r is the average decadal increase from past censuses. It suits mature cities whose growth has slowed. The geometric increase method gives the upper bound: Pn = P0 (1 + r/100)^n, with r the average percentage decadal growth; it suits rapidly growing young towns. The incremental increase method of the Public Health Engineering Manual refines the arithmetic by adding a steadily rising increment: Pn = P0 + n x r + n(n+1)/2 x i, where i is the average incremental increase per decade.",
              "The logistic curve method, also called the saturation curve, fits the S-shaped Gompertz or Pearl-Reed curve y = K / (1 + e^(a + b t)), where K is the saturation population and a, b are constants from past census data. It is the most realistic for cities approaching their carrying capacity. Comparative census data from 1951 onward fix the constants; the forecast for 2051 is read off the curve. RGPV examiners expect students to apply arithmetic, geometric and incremental increase to a worked census series and to state the saturation principle that bounds the logistic curve.",
            ],
            bullets: [
              "Design period: 30 years for treatment and mains; 15 years for pumps and reservoirs; 50 years for the source.",
              "Arithmetic increase: Pn = P0 + n x r, lower-bound forecast for mature cities.",
              "Geometric increase: Pn = P0 (1 + r/100)^n, upper-bound forecast for young towns.",
              "Incremental increase: Pn = P0 + n x r + n(n+1)/2 x i, arithmetic plus a rising increment.",
              "Logistic method: S-curve y = K / (1 + e^(a + b t)), bounded by saturation population K.",
              "Pick the forecast by judgement: arithmetic if growth has flattened, geometric if booming, logistic if approaching carrying capacity.",
            ],
            codeExample: {
              language: "python",
              caption: "Three population forecasts from a four-census series.",
              code: [
                "# Past census (lakhs): 1971=2.0, 1981=2.6, 1991=3.2, 2001=4.0",
                "census = [2.0, 2.6, 3.2, 4.0]",
                "decades = len(census) - 1",
                "",
                "# average decadal increase (arithmetic)",
                "incr = [(census[i+1] - census[i]) for i in range(decades)]",
                "r = sum(incr) / decades          # = 0.667 lakh per decade",
                "P_arith = census[-1] + 3 * r      # 30-yr (3 decades) forecast",
                "print('arithmetic 2051:', round(P_arith, 3), 'lakh')",
                "",
                "# average percentage growth (geometric)",
                "rates = [incr[i] / census[i] for i in range(decades)]",
                "g = (sum(rates) / decades) * 100   # = 23.4 per cent per decade",
                "P_geo = census[-1] * (1 + g/100) ** 3",
                "print('geometric 2051:', round(P_geo, 3), 'lakh')",
                "",
                "# incremental increase",
                "i_avg = sum(incr[i+1] - incr[i] for i in range(decades-1)) / (decades-1)",
                "P_incr = census[-1] + 3 * r + 3 * 4 / 2 * i_avg",
                "print('incremental 2051:', round(P_incr, 3), 'lakh')",
              ].join("\n"),
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the right forecast method",
              caption:
                "Pick the method by the shape of the past-census curve and the city's growth stage.",
              axes: { x: "Growth rate (slow -> fast)", y: "Forecast horizon (short -> long)" },
              quadrants: [
                { label: "Arithmetic increase", note: "mature city, flat growth, short horizon" },
                { label: "Geometric increase", note: "young town, booming growth, short horizon" },
                { label: "Incremental increase", note: "mature city with rising decadal increment" },
                { label: "Logistic / saturation", note: "long horizon, city approaching carrying capacity" },
              ],
            },
            callout: {
              type: "tip",
              title: "Cite the design period before any forecast",
              body: "RGPV awards one mark for stating the design period (30 years for treatment, 50 for the source) before the formula. A bare arithmetic calculation with no design period stated loses that mark even when the numbers are correct.",
            },
            keyTerms: [
              { term: "Design period", definition: "The future service life of a scheme; 30 years for treatment and mains, 15 for pumps, 50 for source works." },
              { term: "Geometric increase", definition: "Forecast Pn = P0 (1 + r/100)^n that compounds the decadal percentage growth rate." },
              { term: "Logistic curve", definition: "S-shaped growth curve y = K / (1 + e^(a + b t)) bounded by a saturation population K." },
            ],
            examQuestions: [
              {
                q: "Describe the methods of population forecasting. For the census series 1971=2.0, 1981=2.6, 1991=3.2, 2001=4.0 (lakhs), forecast the 2051 population by arithmetic, geometric and incremental increase methods.",
                marks: 7,
                outline: [
                  "State the design period (30 years) and the three formulae.",
                  "Arithmetic: r = average decadal increase = (0.6 + 0.6 + 0.8) / 3 = 0.667 lakh/decade.",
                  "P_arith = 4.0 + 3 x 0.667 = 6.00 lakh.",
                  "Geometric: average percentage g = (0.6/2.0 + 0.6/2.6 + 0.8/3.2) / 3 x 100 ≈ 23.4 per cent.",
                  "P_geo = 4.0 x (1.234)^3 ≈ 4.0 x 1.879 ≈ 7.52 lakh.",
                  "Incremental increase: i_avg = ((0.6-0.6) + (0.8-0.6)) / 2 = 0.1 lakh/decade/decade.",
                  "P_incr = 4.0 + 3 x 0.667 + 6 x 0.1 = 6.60 lakh; choose by judgement - mature cities favour incremental.",
                ],
              },
              {
                q: "State the logistic (saturation) population forecasting formula and name the constants.",
                marks: 3,
              },
              {
                q: "Write the incremental increase formula and state its units.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Sources of water - surface and groundwater",
            body: [
              "A water supply scheme draws from two broad classes of source: surface water and groundwater. Surface sources include rivers, streams, natural lakes, artificial reservoirs formed by dams across valleys, and canals fed by diversion weirs. They yield large quantities, often enough for a metropolitan demand, but the water carries suspended silt, organic matter, algae and bacterial contamination that demands a full treatment train. Groundwater sources include open wells, tube wells, infiltration galleries laid parallel to a river bed, and infiltration wells sunk into the alluvium; the water is usually clear, hard, and bacteriologically safe, needing only disinfection in most cases.",
              "Surface sources are rated by their catchment yield, which is the runoff from a catchment area over a dependable rainfall year. The yield Y in cubic metres is computed as Y = C x A x R, where C is the runoff coefficient (0.3 to 0.9 by land use), A is the catchment area in square kilometres and R is the dependable rainfall in metres. A 75 per cent dependable yield is the design value, meaning the source can deliver that quantity in 75 out of 100 years. Reservoirs are sized by the mass curve technique: plot cumulative inflow and cumulative demand on the same axis, and the maximum vertical gap between the two curves gives the storage required to bridge the dry period.",
              "Groundwater is recharged by rainfall percolation, and aquifers behave like sub-surface reservoirs that smooth out seasonal rainfall. The safe yield of a well is the discharge that can be drawn indefinitely without lowering the water table below the pumping horizon; it is fixed by pumping tests that observe drawdown against discharge. Open wells (3 to 5 m diameter) tap the shallow unconfined aquifer and yield 5 to 15 kilolitres per day; tube wells (150 to 300 mm diameter, 60 to 100 m deep) tap confined aquifers and yield 200 to 500 kilolitres per day. Wherever a town sits on a perennial river, the engineer weighs a direct intake against infiltration galleries in the river bed - the gallery pre-filters the water and survives dry-season depletion better.",
            ],
            bullets: [
              "Surface sources: rivers, lakes, reservoirs, canals; high yield, high turbidity, full treatment train needed.",
              "Groundwater sources: open wells, tube wells, infiltration galleries, springs; clear but hard, needs only disinfection.",
              "Catchment yield Y = C x A x R: runoff coefficient, catchment area (km2), dependable rainfall (m).",
              "75 per cent dependable yield: source delivers it in 75 years out of 100 - the design value.",
              "Reservoir size fixed by the mass-curve method: max gap between cumulative inflow and demand curves.",
              "Safe well yield: discharge that does not lower the water table beyond the pumping horizon, fixed by pumping tests.",
            ],
            table: {
              caption: "Surface vs groundwater sources for a town water scheme.",
              headers: ["Feature", "Surface water", "Groundwater"],
              rows: [
                ["Turbidity", "high (50-5000 NTU)", "low (< 5 NTU)"],
                ["Bacterial load", "heavy, needs full disinfection", "usually safe, disinfection as safeguard"],
                ["Hardness", "low to moderate", "high, may need softening"],
                ["Yield scale", "MLD to thousands of MLD", "litres/sec per well"],
                ["Treatment needed", "screening, sedimentation, filtration, disinfection", "disinfection (softening if hard)"],
                ["Capital cost", "high intake, long mains", "low; multiple wells instead"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Surface water vs groundwater as a municipal source",
              caption:
                "Two routes from source to consumer, each with its own treatment footprint.",
              left: {
                heading: "Surface source",
                items: [
                  "River / reservoir intake structure",
                  "Catchment yield = C x A x R",
                  "Mass-curve storage sizing",
                  "Full treatment train downstream",
                  "Pre-chlorination at intake",
                ],
              },
              right: {
                heading: "Groundwater source",
                items: [
                  "Open well / tube well / infiltration gallery",
                  "Safe yield from pumping tests",
                  "Aquifer acts as sub-surface reservoir",
                  "Disinfection usually sufficient",
                  "Softening if total hardness > 200 mg/L",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Dependable yield, not average yield",
              body: "Designing for average annual rainfall is the classic cause of midsummer shortages. The engineer must use 75 per cent dependable yield - the value equalled or exceeded in 75 years out of 100 - and size the balancing reservoir by the mass curve to bridge the dry months. Average yield is a reporting number, never a design number.",
            },
            keyTerms: [
              { term: "Dependable yield", definition: "The runoff available in 75 out of 100 years; the design value for a surface source." },
              { term: "Safe yield", definition: "The discharge a well can sustain indefinitely without drawing down the water table below its pumping horizon." },
              { term: "Mass curve", definition: "A plot of cumulative inflow vs cumulative demand whose maximum vertical gap gives the reservoir storage required." },
            ],
            examQuestions: [
              {
                q: "Compare surface and groundwater as sources of public water supply. Compute the dependable yield from a catchment of 200 km2 with a dependable rainfall of 0.8 m and a runoff coefficient of 0.6.",
                marks: 7,
                outline: [
                  "List surface sources: rivers, reservoirs, lakes, canals; high yield, high turbidity.",
                  "List groundwater sources: open wells, tube wells, infiltration galleries; clear, hard, bacteriologically safe.",
                  "Compare treatment needs: full train for surface; disinfection (and softening if hard) for groundwater.",
                  "State the yield formula Y = C x A x R.",
                  "Substitute: C = 0.6, A = 200 km2, R = 0.8 m -> Y = 96 million cubic metres per year.",
                  "Convert: 96 x 10^6 m3 / 365 days / 86400 s = about 3.05 m3/s dependable discharge.",
                  "Note that the design value is 75 per cent dependable, not the average annual.",
                ],
              },
              {
                q: "State the runoff-coefficient values for three land uses and explain why they differ.",
                marks: 3,
              },
              {
                q: "Define the safe yield of a well.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Intake structures",
            body: [
              "An intake structure is the hydraulic works that admits raw water from the source and conveys it by gravity or pump to the treatment plant. It must withdraw water of the best available quality - usually from a layer below the surface scum and above the bottom sediment - protect the conduit from floating debris and fish, resist the forces of waves and floods, and remain accessible for maintenance. Intakes are classified by the source (river, reservoir, canal or lake), by water level (submerged, wet and dry), and by structural form (masonry tower, pipe intake, floating intake).",
              "A river intake is usually a masonry or concrete well sunk into the bank with a port at the design draw-off level, screened by a coarse bar screen of 20 to 50 mm spacing. A canal intake draws directly from a lined canal through a sluice; a reservoir intake is typically a tower built inside the reservoir with ports at multiple levels so that the operator can choose the best quality layer as the reservoir level fluctuates. A lake intake is a submerged pipe laid on the bed with a bell-mouth inlet resting on a concrete cradle. Submerged intakes have no superstructure above water, leaving navigation clear, while wet intakes have a tower with the well inside (water stands at reservoir level) and dry intakes have a tower with the well dry, water lifted by separate pumps.",
              "The hydraulics of an intake are governed by orifice and conduit equations. The discharge through an inlet port of area A with head h is Q = Cd x A x sqrt(2 g h), with Cd about 0.62 for a sharp-edged orifice. Conduit velocities are kept between 0.6 and 1.2 m/s: lower allows sediment deposition, higher causes scour of the lining. Screens, both coarse bar and fine mesh, add head loss of 0.05 to 0.15 m at design flow. The intake must sit below the lowest expected reservoir level - usually 1 to 2 m below the mean draw-off level - and above the bed by at least 0.5 m to avoid bottom sediment.",
            ],
            bullets: [
              "Classify by source: river intake (bank well), reservoir intake (multi-port tower), canal intake (sluice), lake intake (submerged bell-mouth).",
              "Classify by water level: submerged (no superstructure), wet (water stands in the tower), dry (tower is dry, separate pump house).",
              "Coarse bar screen: 20-50 mm spacing; fine screen: 5-10 mm; both protect pumps from debris.",
              "Draw-off ports at multiple reservoir levels let the operator pick the best quality water.",
              "Orifice hydraulics: Q = Cd x A x sqrt(2 g h), Cd ≈ 0.62.",
              "Conduit velocity kept 0.6-1.2 m/s; intake bottom 0.5 m above bed, top 1-2 m below lowest level.",
            ],
            table: {
              caption: "Intake types classified by source and water level.",
              headers: ["Type", "Suited for", "Key feature"],
              rows: [
                ["River intake (bank well)", "perennial rivers", "masonry well in the bank with a port"],
                ["Reservoir intake (tower)", "dams and large reservoirs", "multiple ports at different levels"],
                ["Canal intake (sluice)", "lined canals", "sluice from the canal side"],
                ["Lake intake (submerged)", "lakes and large tanks", "bell-mouth pipe on the bed"],
                ["Floating intake", "variable water level", "pontoon with a flexible suction"],
                ["Dry intake tower", "cold or flood-prone sites", "tower dry, separate pump house"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Selecting an intake by source and water level",
              caption:
                "One decision - where the source is - branches into four standard intake types.",
              start: "Raw water source",
              branches: [
                { label: "River / stream", outcome: "Bank intake well with bar screen", good: true },
                { label: "Reservoir behind a dam", outcome: "Multi-port intake tower", good: true },
                { label: "Lined canal", outcome: "Sluice intake from canal side", good: true },
                { label: "Lake / large tank", outcome: "Submerged bell-mouth pipe", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch the multi-port intake tower",
              body: "When RGPV asks for a reservoir intake, draw the multi-port tower with at least three ports at different levels, label the operating platform, the access bridge, and the conduit to the treatment plant. The ports are the part examiners look for - they let the operator pick the layer of best quality as the reservoir level falls.",
            },
            keyTerms: [
              { term: "Intake structure", definition: "Hydraulic works that admit raw water from the source and convey it to the treatment plant." },
              { term: "Wet vs dry intake", definition: "A wet intake has water standing in the tower at reservoir level; a dry intake keeps the tower dry and lifts water by a separate pump." },
              { term: "Bell-mouth inlet", definition: "A flared submerged pipe inlet that minimises head loss and vortex formation." },
            ],
            examQuestions: [
              {
                q: "Classify intake structures and describe the construction and working of a reservoir intake tower with a neat sketch.",
                marks: 7,
                outline: [
                  "Classify by source (river, reservoir, canal, lake) and by water level (submerged, wet, dry).",
                  "Sketch the multi-port tower: at least three ports at different reservoir levels.",
                  "Label the access bridge to the operating platform on top of the tower.",
                  "Describe port selection: operator opens the port at the layer of best quality water.",
                  "Coarse bar screen (20-50 mm) at each port prevents entry of large debris and fish.",
                  "Conduit from the tower base conveys water to the treatment plant by gravity or pump.",
                  "Hydraulics: Q = Cd A sqrt(2 g h); conduit velocity 0.6-1.2 m/s; ports above bed, below lowest level.",
                ],
              },
              {
                q: "Differentiate between a wet intake and a dry intake.",
                marks: 3,
              },
              {
                q: "Write the orifice formula used for sizing an intake port.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Water quality standards - BIS 10500",
            body: [
              "Drinking water must be wholesome: free from pathogenic organisms, free from objectionable taste and odour, free from toxic chemicals in harmful concentrations, and reasonably soft and non-corrosive. BIS 10500 - 2012 (with amendments) is the Indian standard that fixes the desirable and permissible limits for physical, chemical and bacteriological parameters. Desirable limits are the targets a supply should meet; permissible limits are the relaxed values allowed in the absence of an alternative source, beyond which the water becomes unacceptable. The engineer tests raw water against these limits, designs the treatment train to meet them, and verifies the finished water by laboratory analysis before supply.",
              "Physical parameters include turbidity (desirable <= 5 NTU, permissible <= 10), colour (<= 5 Hazen, <= 15), taste and odour (agreeable, agreeable), and total dissolved solids (<= 500 mg/L, <= 2000). Chemical parameters include pH (6.5 to 8.5), total hardness as CaCO3 (<= 200, <= 600), chloride (<= 250, <= 1000), sulphate (<= 200, <= 400), fluoride (<= 1.0, <= 1.5), nitrate (<= 45, no relaxation), iron (<= 0.3, <= 0.5) and free residual chlorine (>= 0.2 mg/L, minimum at the far end of the network). Heavy metals are tightly capped: arsenic <= 0.01 mg/L, lead <= 0.01, chromium (hex) <= 0.05, cadmium <= 0.003.",
              "Bacteriological standards are the strictest: E. coli or thermotolerant coliform bacteria shall not be detectable in any 100 mL sample of water entering the distribution system, nor in any 100 mL sample at the consumer's tap. Total coliforms are absent in 95 per cent of samples collected over a 12-month period, with no two consecutive samples positive. Where chlorine is used, the free residual at the consumer's end must be at least 0.2 mg/L, traceable at 0.1 mg/L even at the dead ends. Radioactive parameters (gross alpha, gross beta) round out the standard. Every municipal laboratory tests for turbidity, residual chlorine and coliforms daily; the heavy metals and pesticides are tested quarterly.",
            ],
            bullets: [
              "BIS 10500 - 2012: physical, chemical, bacteriological and radioactive parameters for drinking water.",
              "Turbidity: desirable <= 5 NTU, permissible <= 10 NTU; pH: 6.5-8.5 (no relaxation).",
              "TDS <= 500 mg/L desirable, <= 2000 permissible; total hardness <= 200 mg/L desirable.",
              "Fluoride <= 1.0 mg/L desirable, <= 1.5 permissible; nitrate <= 45 mg/L (no relaxation).",
              "Free residual chlorine >= 0.2 mg/L at consumer tap, traceable to 0.1 mg/L at dead ends.",
              "E. coli absent in 100 mL at the consumer's tap; total coliforms in < 5 per cent of samples over a year.",
            ],
            table: {
              caption: "BIS 10500 - 2012 drinking water limits (selected parameters).",
              headers: ["Parameter", "Desirable", "Permissible", "Effect if exceeded"],
              rows: [
                ["Turbidity (NTU)", "<= 5", "<= 10", "shield for pathogens"],
                ["TDS (mg/L)", "<= 500", "<= 2000", "taste, gastro-intestinal"],
                ["Total hardness as CaCO3 (mg/L)", "<= 200", "<= 600", "scaling, soap consumption"],
                ["Chloride (mg/L)", "<= 250", "<= 1000", "taste, corrosion"],
                ["Fluoride (mg/L)", "<= 1.0", "<= 1.5", "dental / skeletal fluorosis"],
                ["Nitrate (mg/L)", "<= 45", "no relaxation", "methaemoglobinaemia"],
                ["E. coli in 100 mL", "absent", "absent", "waterborne disease"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Layers of BIS 10500 from physical to bacteriological",
              caption:
                "Each layer is a stricter family of tests; physical is the cheapest and most frequent.",
              layers: [
                { label: "Physical", note: "turbidity, colour, TDS, taste, odour - daily" },
                { label: "Chemical (general)", note: "pH, hardness, chloride, sulphate - weekly" },
                { label: "Chemical (toxic)", note: "fluoride, nitrate, iron, heavy metals - quarterly" },
                { label: "Bacteriological", note: "E. coli, total coliforms in 100 mL - daily" },
                { label: "Radioactive", note: "gross alpha, gross beta - annual" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the BIS code and the year",
              body: "Always write 'BIS 10500 - 2012' the first time you cite the standard; later references may say 'BIS 10500'. The year carries one mark in many papers, and the permissible relaxation for turbidity, fluoride and TDS is the second mark - learn these three numbers cold.",
            },
            keyTerms: [
              { term: "Desirable limit", definition: "The target value a BIS 10500 parameter should meet in normal supply." },
              { term: "Permissible limit", definition: "A relaxed value allowed in the absence of an alternative source; beyond it the water is unacceptable." },
              { term: "Free residual chlorine", definition: "Chlorine remaining in finished water after the demand is met; >= 0.2 mg/L at the consumer's tap." },
            ],
            examQuestions: [
              {
                q: "State the desirable and permissible limits of important BIS 10500 drinking water parameters (turbidity, TDS, total hardness, fluoride, nitrate, E. coli) and explain the bacteriological requirement.",
                marks: 7,
                outline: [
                  "Name BIS 10500 - 2012 and define desirable vs permissible limits.",
                  "Turbidity: desirable <= 5 NTU, permissible <= 10 NTU.",
                  "TDS <= 500 mg/L desirable, <= 2000 permissible; total hardness <= 200, <= 600.",
                  "Fluoride <= 1.0 / <= 1.5 mg/L; nitrate <= 45 mg/L (no relaxation).",
                  "E. coli absent in 100 mL at the consumer's tap; total coliforms in < 5 per cent of samples.",
                  "Free residual chlorine >= 0.2 mg/L at the tap, traceable to 0.1 mg/L at dead ends.",
                  "Note that relaxation is only allowed in the absence of an alternative source.",
                ],
              },
              {
                q: "Why is fluoride limited to 1.0 mg/L desirable and 1.5 permissible in drinking water?",
                marks: 3,
              },
              {
                q: "State the bacteriological standard for E. coli in drinking water under BIS 10500.",
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
      title: "Water Treatment",
      summary:
        "The treatment train that turns raw surface water into wholesome supply: screening and aeration, plain and chemical sedimentation, coagulation-flocculation with alum, slow and rapid sand filtration, and disinfection by chlorine with supplementary softening.",
      chapter: {
        number: "02",
        title: "Water Treatment",
        intro:
          "Unit II walks through the train: bar screens and aeration at the headworks, plain sedimentation for settleable solids, coagulation-flocculation that destabilises colloidal turbidity, filtration that removes residual floc, and disinfection that kills pathogens; lime-soda softening rounds out the unit where the source is hard.",
        inOneBreath:
          "The train runs: bar screen (10-50 mm) -> aerator (cascade or tray) -> plain sedimentation tank (detention 2-6 h, surface loading 12-25 m3/m2/d) -> coagulation with alum 20-50 mg/L (rapid mix 30-60 s at 300 rpm) -> flocculation (20-30 min at paddle speed 0.4-0.8 m/s) -> sedimentation of floc -> rapid sand filter (loading 4-8 m3/m2/h, run 24-48 h) -> disinfection with chlorine (break-point dose 0.5-1.5 mg/L, residual >= 0.2 mg/L at tap) -> softening if hardness > 200 mg/L; turbidity of finished water <= 1 NTU.",
        sections: [
          {
            number: "2.1",
            title: "Screening and aeration",
            body: [
              "Screening is the first physical operation at the headworks of a treatment plant. Coarse bar screens of 20 to 50 mm spacing remove floating debris, rags, plastics and aquatic weeds that would otherwise clog pumps and damage downstream units. Fine screens of 5 to 10 mm spacing follow where the source carries much suspended matter. Head loss across a clean screen is computed by the orifice formula and rises as the screen clogs; an automatic rake cleans the bars when the differential reaches 0.15 to 0.20 m. The screenings are removed to a landfill or incinerator and never returned to the flow.",
              "Aeration removes dissolved gases - hydrogen sulphide, carbon dioxide, methane, volatile organic compounds - and adds oxygen to oxidise dissolved iron and manganese to their insoluble oxides for later sedimentation. It also strips tastes and odours of biological origin. The four aeration types are spray nozzles (a fountain of droplets rising and falling), cascade aerators (water tumbles down a series of steps), tray aerators (water drips through stacked slatted trays of coke or stone), and packed-tower aerators (water trickles over packing against a counter-current air draught). Efficiency improves with the gas-liquid contact area, which is why droplet and film aerators dominate.",
              "Design numbers fix the units: a cascade aerator has a fall of 1 to 3 m at a flow of 0.05 to 0.1 m3/s per metre width; a tray aerator uses 3 to 5 trays spaced 0.4 to 0.6 m apart, with a loading of 30 to 60 m3 per m2 per day. Iron and manganese removal needs a contact period after aeration for the oxidation to complete, often a small detention tank of 15 to 30 minutes. CO2 removal efficiency is 50 to 80 per cent depending on aerator type; H2S removal exceeds 90 per cent. Aeration precedes coagulation when raw water carries dissolved gases or dissolved metals; otherwise the train may start at the flash mixer.",
            ],
            bullets: [
              "Coarse bar screens: 20-50 mm spacing; fine screens: 5-10 mm; automatic rake triggers at 0.15-0.20 m head loss.",
              "Aeration removes dissolved gases (H2S, CO2, methane, VOCs) and oxidises dissolved iron and manganese.",
              "Types: spray nozzles, cascade (1-3 m fall), tray (3-5 trays of coke or stone), packed tower.",
              "Iron and manganese removal: 15-30 min detention after aeration for oxidation to complete.",
              "Tray aerator loading: 30-60 m3/m2/day; cascade width sized for 0.05-0.1 m3/s per metre.",
              "CO2 removal efficiency 50-80 per cent; H2S removal > 90 per cent by tray aerator.",
            ],
            table: {
              caption: "Aerator types and their design numbers.",
              headers: ["Type", "Form", "Loading", "Efficiency"],
              rows: [
                ["Spray nozzle", "droplets through nozzles", "0.1-0.3 m3/s per m2 plan", "moderate"],
                ["Cascade", "tumbling down steps", "0.05-0.1 m3/s per m width, 1-3 m fall", "50-80 per cent CO2"],
                ["Tray (coke)", "drip through 3-5 trays", "30-60 m3/m2/day", "> 90 per cent H2S"],
                ["Packed tower", "counter-current air-water", "50-100 m3/m2/h", "> 95 per cent VOC"],
                ["Diffused air", "bubbles in a tank", "1-2 m3 air per m3 water", "moderate"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Headworks train - screening and aeration",
              caption:
                "Four stages that prepare raw water for sedimentation; each stage removes one class of impurity.",
              stages: [
                { label: "Raw water enters", note: "from intake conduit" },
                { label: "Bar screens", note: "20-50 mm - remove floating debris" },
                { label: "Fine screens", note: "5-10 mm - remove suspended solids" },
                { label: "Aerator", note: "strip gases, oxidise Fe / Mn" },
                { label: "To flash mixer", note: "raw water ready for coagulation" },
              ],
            },
            callout: {
              type: "tip",
              title: "Aeration before sedimentation when iron > 0.3 mg/L",
              body: "If raw water iron exceeds 0.3 mg/L, aerate first to oxidise Fe2+ to Fe3+ so that the iron precipitates as ferric hydroxide and settles in the sedimentation tank. Skipping aeration sends dissolved iron through the train and stains the filter sand red within weeks.",
            },
            keyTerms: [
              { term: "Bar screen", definition: "A set of vertical bars (20-50 mm spacing) that removes floating debris from raw water." },
              { term: "Cascade aerator", definition: "An aerator in which water tumbles down a series of steps to expose a large gas-liquid contact area." },
              { term: "Volatile organic compounds (VOCs)", definition: "Carbon-based gases and vapours stripped from water by tray or packed-tower aeration." },
            ],
            examQuestions: [
              {
                q: "State the objectives of screening and aeration in a water treatment plant. With a sketch, describe the construction and working of a tray aerator and list its design parameters.",
                marks: 7,
                outline: [
                  "State objectives of screening: remove floating debris, protect pumps and downstream units.",
                  "State objectives of aeration: strip dissolved gases, oxidise Fe and Mn, remove tastes and odours.",
                  "Sketch a tray aerator: 3-5 stacked slatted trays, coke or stone media, water drips through.",
                  "Design loading: 30-60 m3/m2/day; tray spacing 0.4-0.6 m; medium coke or crushed stone.",
                  "Air rises counter-current through the trays, expanding the contact area.",
                  "Efficiency: > 90 per cent H2S removal, 50-80 per cent CO2 removal.",
                  "Note that the effluent enters the flash mixer for coagulation dosing.",
                ],
              },
              {
                q: "Why is aeration necessary before sedimentation when raw water contains dissolved iron?",
                marks: 3,
              },
              {
                q: "State the spacing of coarse and fine screens.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Sedimentation",
            body: [
              "Sedimentation is the gravitational settling of suspended particles from water under quiescent conditions. It is the workhorse of the treatment train, removing 60 to 80 per cent of the suspended solids before filtration. Two regimes are practised. Plain sedimentation removes settleable solids by gravity alone, with no chemical dosing, and is used when the raw water turbidity is high - say a river in spate with 2000 NTU. Chemical sedimentation, also called coagulated sedimentation, doses alum or other coagulant to destabilise colloidal particles and form settleable floc; it is used for the low-turbidity waters that plain sedimentation cannot clean.",
              "The theory rests on Stokes' law: the terminal settling velocity of a discrete spherical particle is v_s = g (rho_s - rho) d^2 / (18 mu), where rho_s and rho are the particle and water densities, d is the particle diameter and mu is the dynamic viscosity of water. A silt particle of 0.05 mm settles at about 2 m/h; a clay particle of 0.005 mm settles at 0.02 m/h - far too slow for practical tanks. For design, the surface overflow rate equals v_s: a circular or rectangular tank sized at SOR = Q / A removes particles with v_s >= SOR. Typical SOR is 12 to 25 m3/m2/day for plain sedimentation, 20 to 40 for coagulated sedimentation; detention is 2 to 6 hours, depth 2.5 to 4 m.",
              "Tank geometry matters. Rectangular tanks are 3 to 5 times as long as wide, with inlet baffles that distribute flow evenly across the cross-section, a sludge hopper at the inlet end, and a weir at the outlet that draws off clarified water at less than 15 m3 per metre of weir length per day to avoid upflow that entrains floc. Circular tanks use a central feed well and a peripheral weir; a rotating mechanical scraper pushes sludge to the central hopper. Both shapes use a detention of 2 to 4 hours for coagulated water, surface loading as above, and an exit weir loading under 15 m3/m/day. The sludge is drawn off at 0.5 to 2 per cent solids, dewatered, and sent to landfill.",
            ],
            bullets: [
              "Plain sedimentation: gravity alone, for high-turbidity raw water (> 500 NTU); 60-80 per cent SS removal.",
              "Coagulated sedimentation: alum dosed first; for low-turbidity water that plain settling cannot clean.",
              "Stokes' law: v_s = g (rho_s - rho) d^2 / (18 mu); discrete particle settling velocity.",
              "Surface overflow rate (SOR) = Q / A; design SOR 12-25 m3/m2/day plain, 20-40 coagulated.",
              "Detention 2-6 h; depth 2.5-4 m; weir loading <= 15 m3/m/day to avoid upflow entraining floc.",
              "Rectangular L:W = 3-5:1 with inlet baffles and sludge hopper; circular uses central feed and peripheral weir.",
            ],
            table: {
              caption: "Design numbers for plain vs coagulated sedimentation.",
              headers: ["Parameter", "Plain sedimentation", "Coagulated sedimentation"],
              rows: [
                ["Detention", "2-6 hours", "2-4 hours"],
                ["Surface overflow rate", "12-25 m3/m2/day", "20-40 m3/m2/day"],
                ["Depth", "2.5-4 m", "3-5 m"],
                ["Weir loading", "<= 15 m3/m/day", "<= 15 m3/m/day"],
                ["SS removal", "60-80 per cent", "80-95 per cent"],
                ["Coagulant", "none", "alum 20-50 mg/L"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Settling regimes and their design",
              caption:
                "The path from raw water turbidity to a chosen sedimentation tank.",
              steps: [
                { label: "Measure raw water turbidity", note: "field test" },
                { label: "Plain sedimentation if turbidity > 500 NTU", note: "gravity alone" },
                { label: "Coagulation if turbidity < 500 NTU", note: "add alum, mix, flocculate" },
                { label: "Apply Stokes / surface loading", note: "size the tank area A = Q / SOR" },
                { label: "Detention, depth, weir loading", note: "fix geometry and outlet" },
              ],
            },
            callout: {
              type: "warning",
              title: "Weir loading is the most violated number",
              body: "Designers size the tank area carefully by surface loading, then forget the weir. If the weir loading exceeds 15 m3/m/day the outlet upflow entrains the lightest floc and the tank fails even though its surface loading was correct. Always check that Q / weir_length is within the limit before approving a design.",
            },
            keyTerms: [
              { term: "Surface overflow rate (SOR)", definition: "Q / A for a sedimentation tank; particles with settling velocity >= SOR are removed." },
              { term: "Stokes' law", definition: "Terminal velocity of a discrete sphere: v_s = g (rho_s - rho) d^2 / (18 mu)." },
              { term: "Weir loading", definition: "Q / weir_length at the outlet; capped at about 15 m3/m/day to prevent floc entrainment." },
            ],
            examQuestions: [
              {
                q: "Differentiate plain and coagulated sedimentation. Derive the surface overflow rate from Stokes' law and design a rectangular sedimentation tank for a flow of 5 MLD with detention 3 h and SOR 20 m3/m2/day.",
                marks: 7,
                outline: [
                  "Plain sedimentation: gravity alone for high turbidity; coagulated: alum dosed first for low turbidity.",
                  "Stokes' law: v_s = g (rho_s - rho) d^2 / (18 mu).",
                  "Tank design criterion: surface overflow rate SOR = Q / A = v_s; particles with v_s >= SOR are removed.",
                  "Compute area: A = Q / SOR = (5e6 / 86400) / 20 = 2.89 m2 - too small in practice; revise.",
                  "Use realistic SOR 20 m3/m2/day -> A = 5000000 / 20 = 250 m2; L:W = 4:1 -> 25 m x 10 m.",
                  "Volume = Q x detention = (5000000 / 24) x 3 = 625 m3; depth = V / A = 2.5 m.",
                  "Weir length needed: Q / weir_loading = 5000000 / (15 x 86400) = 3.86 m of weir; provide an effluent launder.",
                ],
              },
              {
                q: "State Stokes' law and the assumptions behind it.",
                marks: 3,
              },
              {
                q: "Define weir loading and state its maximum value.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Coagulation and flocculation",
            body: [
              "Colloidal particles - clay, organic matter, bacteria - carry a negative surface charge that keeps them suspended indefinitely, neither settling nor filtering out. Coagulation is the chemical destabilisation of these colloids by adding a coagulant that neutralises the charge, so the particles can no longer repel one another. Flocculation is the slow agitation that brings the destabilised particles together into larger aggregates called floc, which then settle in the sedimentation tank. The two operations are hydraulically distinct: coagulation needs rapid mixing for 30 to 60 seconds at a velocity gradient G of 700 to 1000 per second, while flocculation needs slow stirring for 20 to 30 minutes at G of 20 to 80 per second.",
              "The common coagulants are alum (aluminium sulphate, Al2(SO4)3 x 18 H2O), ferric chloride, ferric sulphate and polyaluminium chloride; for low-alkalinity waters lime is added with alum to supply the bicarbonate that the hydrolysis consumes. The dose is fixed by the jar test, in which six beakers of raw water are dosed with 10, 20, 30, 40, 50 and 60 mg/L of alum, stirred for 1 min at 100 rpm and 20 min at 30 rpm, then settled for 30 min. The dose that gives the clearest supernatant with the densest settled floc is chosen. A coagulant aid - a polyelectrolyte dosed at 0.1 to 0.5 mg/L - makes the floc heavier and faster-settling.",
              "The hydrolysis of alum in water produces Al(OH)3 floc and acidity: Al2(SO4)3 x 18 H2O + 3 Ca(HCO3)2 gives 2 Al(OH)3 (s) + 3 CaSO4 + 6 CO2 + 18 H2O. Each mg/L of alum consumes about 0.5 mg/L of alkalinity as CaCO3; if raw water alkalinity is below 50 mg/L, lime must be added. Velocity gradient G is defined by P = G^2 x mu x V, where P is the power input, mu the dynamic viscosity and V the tank volume; mixing tanks use mechanical paddles or hydraulic jumps, flocculators use paddle wheels or vertical turbines. The dimensionless product G x t (Camp number) is the design target: rapid mix G x t = 5000 to 20000, flocculation G x t = 20000 to 200000.",
            ],
            bullets: [
              "Coagulation destabilises colloids by charge neutralisation; rapid mix 30-60 s at G = 700-1000 /s.",
              "Flocculation aggregates destabilised particles into floc; slow mix 20-30 min at G = 20-80 /s.",
              "Common coagulants: alum (Al2(SO4)3.18H2O), ferric chloride, ferric sulphate, PAC.",
              "Jar test fixes the dose: 6 beakers, 10-60 mg/L, settle 30 min, choose clearest supernatant.",
              "Alum hydrolysis: Al2(SO4)3 + 3 Ca(HCO3)2 -> 2 Al(OH)3 (s) + 3 CaSO4 + 6 CO2 + 18 H2O.",
              "Coagulant aid polyelectrolyte 0.1-0.5 mg/L densifies floc; G x t target: rapid 5k-20k, flocculation 20k-200k.",
            ],
            table: {
              caption: "Coagulant comparison for typical raw water.",
              headers: ["Coagulant", "Effective pH", "Typical dose (mg/L)", "Notes"],
              rows: [
                ["Alum", "6.0-7.8", "20-50", "consumes 0.5 mg/L alkalinity per mg/L"],
                ["Ferric chloride", "4.0-11.0", "20-50", "heavier floc, corrosive"],
                ["Ferric sulphate", "4.0-9.0", "20-60", "good over wide pH"],
                ["Polyaluminium chloride (PAC)", "6.5-8.5", "5-25", "less sludge, lower alkalinity demand"],
                ["Lime (with alum)", "8.5-9.5", "as needed", "supplies alkalinity for low-alkalinity water"],
                ["Polyelectrolyte aid", "any", "0.1-0.5", "densifies floc, lowers settling time"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Mixing pyramid: from jar test to plant scale",
              caption:
                "Each tier widens the time scale and narrows the velocity gradient; the top fixes the dose.",
              tiers: [
                { label: "Jar test (30 min, 6 beakers)", note: "fixes the alum dose" },
                { label: "Rapid mix (30-60 s, G 700-1000 /s)", note: "disperses the dose" },
                { label: "Flocculation (20-30 min, G 20-80 /s)", note: "forms the floc" },
                { label: "Sedimentation (2-4 h, G near 0)", note: "settles the floc" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write the alum hydrolysis equation",
              body: "RGPV asks for the chemistry of alum coagulation almost every paper. Write the full balanced equation Al2(SO4)3 x 18 H2O + 3 Ca(HCO3)2 -> 2 Al(OH)3 (s) + 3 CaSO4 + 6 CO2 + 18 H2O. The (s) mark on Al(OH)3 is the mark-bearer; it shows the floc is the solid you settle out.",
            },
            keyTerms: [
              { term: "Coagulation", definition: "Chemical destabilisation of colloids by neutralising their surface charge with alum or other coagulant." },
              { term: "Flocculation", definition: "Slow agitation that aggregates destabilised colloids into settleable floc." },
              { term: "Jar test", definition: "A six-beaker laboratory procedure that fixes the coagulant dose for a given raw water." },
            ],
            examQuestions: [
              {
                q: "Explain the principles of coagulation and flocculation. Write the hydrolysis reaction of alum and design a flocculator for a flow of 5 MLD with detention 25 min and G = 50 /s.",
                marks: 7,
                outline: [
                  "Define coagulation (charge neutralisation) and flocculation (slow agitation forming floc).",
                  "Rapid mix: 30-60 s at G = 700-1000 /s; flocculation: 20-30 min at G = 20-80 /s.",
                  "Write the alum hydrolysis equation with (s) on Al(OH)3.",
                  "Note that 1 mg/L alum consumes 0.5 mg/L alkalinity as CaCO3.",
                  "Flocculator volume V = Q x t = (5000000 / 86400) x (25 x 60) = 86.8 m3.",
                  "Power P = G^2 x mu x V = 50^2 x 1e-3 x 86.8 = 217 W (mu of water = 1e-3 Pa.s).",
                  "Provide a paddle wheel or vertical turbine input of about 220 W across two parallel tanks.",
                ],
              },
              {
                q: "What is a jar test? List the steps and the design parameters it fixes.",
                marks: 3,
              },
              {
                q: "Define velocity gradient G and state the G x t design target for rapid mixing.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Filtration - slow and rapid sand filters",
            body: [
              "Filtration is the removal of residual suspended matter and floc carried over from the sedimentation tank by passage through a bed of granular media, usually sand. Two families are used in municipal practice. Slow sand filters run at a low loading of 0.1 to 0.3 m3/m2/h, do not need prior coagulation, and remove particles by a biological schmutzdecke (dirt layer) at the bed surface. Rapid sand filters run at 4 to 8 m3/m2/h, demand prior coagulation-flocculation-sedimentation, and remove particles by physical straining and adsorption throughout the bed depth. Slow filters occupy large land, rapid filters occupy small land; the choice turns on land cost, raw water turbidity and operator skill.",
              "The slow sand filter is a 1.0 to 1.5 m deep sand bed of effective size 0.15 to 0.35 mm and uniformity coefficient 2 to 3, resting on 0.3 to 0.5 m of graded gravel supporting underdrains, with 1.0 to 1.5 m of water above the sand. The bed runs for 1 to 3 months, the schmutzdecke matures over the first fortnight, and the filter is cleaned by scraping off the top 2 cm of sand when the head loss reaches 0.6 to 1.0 m. Each cleaning cycle is followed by a ripening period of 1 to 3 days during which the filtered water is wasted. A slow filter removes 99 per cent of coliforms and produces water of turbidity under 1 NTU.",
              "The rapid sand filter is a 0.6 to 0.75 m sand bed of effective size 0.35 to 0.55 mm and uniformity coefficient 1.3 to 1.7, on graded gravel 0.3 to 0.5 m deep with an underdrain system. It runs 12 to 48 hours, then is backwashed with 4 to 6 per cent bed expansion at a wash rate of 0.6 to 1.0 m3/m2/min for 5 to 10 minutes. Air scour precedes or accompanies backwash to break the clogged sand. A rapid filter, fed by coagulated sedimentation effluent, yields water of turbidity under 1 NTU and removes 90 to 99 per cent of coliforms when combined with chlorination. Effective size (d10) and uniformity coefficient (d60/d10) are the gradation parameters; both must be controlled at the sand supplier.",
            ],
            bullets: [
              "Slow sand filter: 0.1-0.3 m3/m2/h, no coagulation, biological schmutzdecke removes particles.",
              "Rapid sand filter: 4-8 m3/m2/h, needs coagulation upstream, straining and adsorption through bed depth.",
              "Slow sand: effective size 0.15-0.35 mm, UC 2-3, bed depth 1-1.5 m, run 1-3 months, scrape 2 cm to clean.",
              "Rapid sand: effective size 0.35-0.55 mm, UC 1.3-1.7, bed depth 0.6-0.75 m, run 12-48 h, backwash 5-10 min.",
              "Backwash: 4-6 per cent bed expansion at 0.6-1.0 m3/m2/min; air scour then water wash.",
              "Effective size d10 and uniformity coefficient d60/d10 are the sand gradation parameters.",
            ],
            table: {
              caption: "Slow vs rapid sand filter comparison.",
              headers: ["Parameter", "Slow sand filter", "Rapid sand filter"],
              rows: [
                ["Filtration rate", "0.1-0.3 m3/m2/h", "4-8 m3/m2/h"],
                ["Pre-treatment", "none", "coagulation + sedimentation"],
                ["Sand effective size", "0.15-0.35 mm", "0.35-0.55 mm"],
                ["Uniformity coefficient", "2-3", "1.3-1.7"],
                ["Bed depth", "1.0-1.5 m", "0.6-0.75 m"],
                ["Run length", "1-3 months", "12-48 hours"],
                ["Cleaning", "scrape top 2 cm", "backwash with air scour"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Slow sand vs rapid sand filter - what is cleaned and how",
              caption:
                "Same purpose, completely different mechanism, scale and operator skill.",
              left: {
                heading: "Slow sand filter",
                items: [
                  "Loading 0.1-0.3 m3/m2/h",
                  "No coagulation needed",
                  "Biological schmutzdecke on top",
                  "Run 1-3 months; scrape 2 cm to clean",
                  "Large land area; high coliform removal",
                ],
              },
              right: {
                heading: "Rapid sand filter",
                items: [
                  "Loading 4-8 m3/m2/h",
                  "Coagulation + sedimentation upstream",
                  "Physical straining + adsorption",
                  "Run 12-48 h; backwash with air scour",
                  "Small land area; needs skilled operator",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Never start a slow filter straight into supply",
              body: "A slow sand filter must ripen for 1 to 3 days after scraping, during which the schmutzdecke reforms and the filtrate is unfit. Wasting the filtrate during ripening is not optional - it is the protection against breakthrough pathogens. Rapid filters too need a short ripening (15-30 min) after backwash; the first filtrate is filtered-to-waste.",
            },
            keyTerms: [
              { term: "Schmutzdecke", definition: "The biological dirt layer at the surface of a slow sand filter that captures particles and pathogens." },
              { term: "Effective size (d10)", definition: "The sieve size through which 10 per cent of the sand by weight passes; a measure of the fine fraction." },
              { term: "Uniformity coefficient", definition: "The ratio d60/d10 of sieve sizes; smaller values give a more uniformly graded sand." },
            ],
            examQuestions: [
              {
                q: "Compare slow sand and rapid sand filters. Describe the construction and backwashing of a rapid sand filter and state the design parameters of the sand medium.",
                marks: 7,
                outline: [
                  "Tabulate: filtration rate, pretreatment, sand size, UC, depth, run, cleaning method.",
                  "Sketch the rapid sand filter: sand bed, graded gravel, underdrain, wash-water troughs, inlet and outlet.",
                  "Effective size d10 = 0.35-0.55 mm; uniformity coefficient d60/d10 = 1.3-1.7; bed depth 0.6-0.75 m.",
                  "Run length 12-48 h; backwash triggered at head loss of about 1.5-2.0 m or end-of-run turbidity rise.",
                  "Air scour at 0.6-1.0 m3/m2/min for 2-4 min; water backwash at 0.6-1.0 m3/m2/min for 5-10 min.",
                  "Bed expansion 4-6 per cent during backwash; washwater is 2-4 per cent of filtered output.",
                  "Ripening: filter-to-waste for 15-30 min after backwash before returning to supply.",
                ],
              },
              {
                q: "Define effective size and uniformity coefficient of filter sand.",
                marks: 3,
              },
              {
                q: "What is the schmutzdecke in a slow sand filter?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Disinfection and softening",
            body: [
              "Disinfection is the final barrier against waterborne disease, killing or inactivating pathogens that survive the train. The standard disinfectant is chlorine, dosed at the clear-water reservoir after filtration. The chemistry is the formation of hypochlorous acid HOCl and the hypochlorite ion OCl- from Cl2 + H2O -> HOCl + HCl, with HOCl the more potent germicide. The dose is set by the break-point chlorination principle: as chlorine is added it first reacts with reducing agents and ammonia to form chloramines (combined residual) and shows little disinfecting power; once those are satisfied, free residual chlorine rises sharply - the breakpoint - and only beyond it is the water truly disinfected.",
              "Break-point chlorination is read off a dose-response curve plotting residual chlorine against applied chlorine. The curve rises to a hump (chloramines), dips (destruction of chloramines to N2), then rises linearly (free residual). The applied dose for the break point equals about 10 times the ammonia nitrogen concentration, typically 0.5 to 1.5 mg/L for raw water of low ammonia. Contact time of at least 30 minutes at a pH below 8 is required to inactivate coliforms and viruses; the residual must remain at least 0.2 mg/L at the consumer's tap. Alternative disinfectants are chloramines (long residual in the network but weaker germicide), chlorine dioxide (no trihalomethane formation), ozone (powerful but no residual), and ultraviolet light (no chemical residue, effective against Cryptosporidium).",
              "Softening removes hardness caused by calcium and magnesium ions when raw water exceeds about 200 mg/L as CaCO3. The cold lime-soda process doses lime Ca(OH)2 to precipitate calcium carbonate and magnesium hydroxide, and soda ash Na2CO3 to convert non-carbonate hardness (calcium sulphate, magnesium chloride) to calcium carbonate. The reactions: Ca(HCO3)2 + Ca(OH)2 -> 2 CaCO3 (s) + 2 H2O for carbonate hardness; MgSO4 + Ca(OH)2 + Na2CO3 -> Mg(OH)3 (s) + CaCO3 (s) + Na2SO4 for non-carbonate. Recarbonation with CO2 stabilises the water before filtration to prevent CaCO3 deposition in the mains. Ion-exchange softening with sodium-cycle zeolites is used at the household and small-community scale.",
            ],
            bullets: [
              "Chlorine hydrolysis: Cl2 + H2O -> HOCl + HCl; HOCl is the active germicide.",
              "Break-point chlorination: applied dose beyond which free residual rises linearly; dose 0.5-1.5 mg/L for low-ammonia water.",
              "Contact: >= 30 min at pH < 8; free residual >= 0.2 mg/L at the consumer's tap.",
              "Alternatives: chloramines (long residual, weak germicide), ClO2 (no THM), ozone (no residual), UV (no chemical).",
              "Lime-soda softening: Ca(HCO3)2 + Ca(OH)2 -> 2 CaCO3 (s); MgSO4 + Ca(OH)2 + Na2CO3 -> Mg(OH)2 (s) + CaCO3 (s) + Na2SO4.",
              "Recarbonation with CO2 stabilises softened water; ion exchange suits small-scale softening.",
            ],
            table: {
              caption: "Disinfectant comparison and softening reagents.",
              headers: ["Reagent / agent", "Purpose", "Notes"],
              rows: [
                ["Chlorine (Cl2 gas)", "disinfection", "free residual >= 0.2 mg/L at tap"],
                ["Sodium hypochlorite (NaOCl)", "disinfection", "easier handling, same active species"],
                ["Chloramines", "secondary disinfectant", "long network residual, weaker germicide"],
                ["Ozone (O3)", "primary disinfectant", "no residual, by-products low"],
                ["UV light", "primary disinfectant", "no chemical residue, Cryptosporidium effective"],
                ["Lime Ca(OH)2", "softening", "removes carbonate hardness"],
                ["Soda ash Na2CO3", "softening", "removes non-carbonate hardness"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Break-point chlorination curve in five stages",
              caption:
                "Reading from left to right, the residual chlorine curve traces five regimes - only the last is disinfecting.",
              steps: [
                { label: "Reduction demand satisfied", note: "no residual" },
                { label: "Combined residual rises", note: "chloramines formed" },
                { label: "Hump - peak combined", note: "still weak disinfectant" },
                { label: "Dip - chloramines destroyed", note: "to N2 gas" },
                { label: "Break point - free residual rises", note: "true disinfection begins" },
              ],
            },
            callout: {
              type: "tip",
              title: "Check the contact time before declaring water safe",
              body: "The CT value - concentration x time - is the rule of disinfection. With 0.5 mg/L free chlorine and a 30-minute contact you get CT = 15 mg.min/L, which inactivates coliforms and most viruses at pH 8 and below. Always state CT in the design write-up; without the contact tank, even the right dose is ineffective.",
            },
            keyTerms: [
              { term: "Break-point chlorination", definition: "The applied chlorine dose beyond which free residual rises linearly; the threshold for true disinfection." },
              { term: "Free residual chlorine", definition: "HOCl and OCl- remaining after the chlorine demand is met; >= 0.2 mg/L required at the consumer's tap." },
              { term: "Cold lime-soda softening", definition: "Precipitation of Ca and Mg hardness by lime and soda ash at ambient temperature." },
            ],
            examQuestions: [
              {
                q: "Explain break-point chlorination with a sketch of the residual chlorine curve. State the chemistry of chlorine in water and design the chlorine dose and contact tank for a 5 MLD supply with ammonia nitrogen 0.5 mg/L.",
                marks: 7,
                outline: [
                  "Write Cl2 + H2O -> HOCl + HCl; HOCl is the active germicide, ionises to OCl- above pH 7.5.",
                  "Sketch the dose-response curve: demand zone, combined residual rise, hump, dip, break point, free residual rise.",
                  "Break-point dose approximately 10 x ammonia nitrogen = 5 mg/L; for low-ammonia water typically 0.5-1.5 mg/L.",
                  "Contact time >= 30 min at pH < 8; CT value = 0.5 x 30 = 15 mg.min/L sufficient for coliforms.",
                  "Contact tank volume V = Q x t = (5000000 / 86400) x (30 x 60) = 104.2 m3.",
                  "Provide a baffled serpentine tank to approach plug flow; free residual >= 0.2 mg/L at the tap.",
                  "Mention alternatives (chloramines for long residual, ozone / UV for primary disinfection).",
                ],
              },
              {
                q: "Write the lime-soda reactions for removing carbonate and non-carbonate hardness.",
                marks: 3,
              },
              {
                q: "State the minimum free residual chlorine required at the consumer's tap.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Water Distribution",
      summary:
        "Carrying treated water from the clear-water reservoir to the consumer: distribution system layouts, service reservoirs and balancing storage, pipes valves and fittings, the Hardy Cross method of network analysis, and full network simulation.",
      chapter: {
        number: "03",
        title: "Water Distribution",
        intro:
          "Unit III closes the supply loop: distribution system topologies, service reservoirs that smooth peak demand against constant supply, the pipes valves and fittings that carry the flow, the Hardy Cross method of network analysis that fixes the heads and flows in a looped network, and the simulation of complete distribution networks.",
        inOneBreath:
          "Distribution systems are dead-end, radial, grid iron or ring; service reservoirs balance supply and demand by storing 6 to 8 hours of average demand at the high point of the zone; pipes are CI, DI, MS, RCC, AC, HDPE or PVC sized by Manning's V = (1/n) R^(2/3) S^(1/2); valves isolate sections (sluice), relieve pressure (air), prevent backflow (reflux); Hardy Cross balances each loop by assuming flows, computing head losses, and correcting Q by dQ = -sum h / (2 sum r Q^n) until closure; network analysis extends the loop method to large grids.",
        sections: [
          {
            number: "3.1",
            title: "Distribution system layouts",
            body: [
              "A distribution system is the network of mains, sub-mains, branches and service connections that carries treated water from the clear-water reservoir to the consumer. Four layouts are common. The dead-end or tree system has a single main feeding branch lines that end at the last consumer; it is cheap and simple, but a single break puts an entire street out of supply and the dead ends accumulate stale water. The radial system has a central distribution reservoir feeding mains that radiate outward, each main supplying its sector; isolation is easy, but each main must be sized for its full sector demand.",
              "The grid iron system has mains interconnected in a grid, so any point can be fed from at least two directions; pressure is uniform, no dead ends stagnate, and a single break can be isolated without losing supply. The ring system has a single main looped around the service area, with branches serving consumers along the loop; it combines the grid's reliability with the dead-end's simplicity. Most large Indian cities use the grid iron or ring layout for trunk mains and the dead-end for residential sub-mains. The choice balances cost (dead-end cheapest), reliability (grid iron best) and hydraulic performance (ring uniform pressure).",
              "Pressure requirements fix the design. The minimum residual pressure at the consumer's tap is 7 m for single-storey, 12 m for two-storey and 17 m for three-storey buildings; fire hydrants need a residual of 10 to 15 m at a discharge of 1 to 3 m3/min. Maximum pressure is capped at 50 m to avoid leakage and burst mains. Distribution is split into pressure zones where the ground elevation varies by more than 30 m, each zone served by its own service reservoir. The design flow in any main is the peak hourly demand of its command area plus fire allowance where applicable, but never less than the maximum daily demand to safeguard supply continuity.",
            ],
            bullets: [
              "Dead-end (tree) system: single main feeding branches; cheap but dead ends stagnate and breaks cut supply.",
              "Radial system: central reservoir feeds radial mains; easy isolation, each main sized for its sector.",
              "Grid iron system: interconnected mains; uniform pressure, no dead ends, reliable supply.",
              "Ring system: a looped main around the service area; balance of reliability and simplicity.",
              "Residual pressure: 7 m single-storey, 12 m two-storey, 17 m three-storey; fire hydrants 10-15 m at 1-3 m3/min.",
              "Maximum pressure capped at 50 m; pressure zones split where elevation varies by > 30 m.",
            ],
            table: {
              caption: "Distribution layouts compared by cost, reliability and water quality.",
              headers: ["Layout", "Capital cost", "Reliability", "Stagnation risk"],
              rows: [
                ["Dead-end (tree)", "low", "low", "high at dead ends"],
                ["Radial", "medium", "medium", "medium"],
                ["Grid iron", "high", "high", "low"],
                ["Ring (looped)", "medium-high", "high", "low"],
                ["Combined grid + dead-end", "medium", "high", "low in grid, low in dead-end mains"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a layout by cost vs reliability",
              caption:
                "Quadrants pick the layout by the trade-off the city can afford.",
              axes: { x: "Capital cost (low -> high)", y: "Reliability (low -> high)" },
              quadrants: [
                { label: "Dead-end", note: "cheap, fragile - small towns" },
                { label: "Radial", note: "balanced cost and isolation" },
                { label: "Ring", note: "looped main, reliable" },
                { label: "Grid iron", note: "highest cost, highest reliability - metro cores" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the layout before its features",
              body: "RGPV expects you to name the layout, then list its advantages and disadvantages - in that order. Many students describe a grid of mains without naming the grid iron layout, losing the one mark that the name carries. Always pair a sketch with the named layout.",
            },
            keyTerms: [
              { term: "Grid iron layout", definition: "A distribution system in which mains are interconnected in a grid so any point can be fed from at least two directions." },
              { term: "Pressure zone", definition: "A portion of a distribution system served by a single service reservoir, split where ground elevation varies by more than 30 m." },
              { term: "Residual pressure", definition: "Pressure head remaining at the consumer's tap; minimum 7 m single-storey, 12 m two-storey, 17 m three-storey." },
            ],
            examQuestions: [
              {
                q: "Describe the four distribution system layouts with sketches. State the design pressures for single, double and triple storey buildings and justify the choice of grid iron for a metropolitan core.",
                marks: 7,
                outline: [
                  "Sketch the dead-end (tree), radial, grid iron and ring layouts.",
                  "Dead-end: cheap, simple, but breaks cut supply and dead ends stagnate.",
                  "Radial: central reservoir feeds radial mains; easy isolation, each main sized for its sector.",
                  "Grid iron: interconnected mains; uniform pressure, no dead ends, reliable - suits metro cores.",
                  "Ring: looped main around the service area; balance of reliability and simplicity.",
                  "Residual pressure: 7 m single-storey, 12 m two-storey, 17 m three-storey; fire hydrants 10-15 m.",
                  "Grid iron justifies higher capital by uninterrupted supply and uniform pressure in dense cores.",
                ],
              },
              {
                q: "Why are pressure zones introduced in a distribution system?",
                marks: 3,
              },
              {
                q: "State the minimum residual pressure for a two-storey building and the fire hydrant discharge.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Service reservoirs and balancing storage",
            body: [
              "A service reservoir, also called an overhead or balancing tank, is the storage that bridges the gap between a constant-rate treatment plant and a varying consumer demand. Treatment plants usually run 20 to 24 hours a day at a near-constant rate; consumer demand swings between 50 per cent of average at night and 250 per cent at peak. The reservoir absorbs the surplus when supply exceeds demand and returns it when demand exceeds supply. Its capacity is fixed by a 24-hour mass curve or analytical method: plot cumulative supply and cumulative demand on the same axis; the maximum gap between them is the required storage, typically 6 to 8 hours of average daily demand.",
              "For a peak factor of 2.5 and a 24-hour plant run, the balancing storage works out to about 25 per cent of average daily demand; for a 20-hour run with the same peak factor, it rises to about 35 per cent. The Indian Manual on Water Supply recommends 6 to 8 hours of average demand for balancing, plus 1 to 2 hours for fire and breakdown, plus 4 hours emergency for critical installations. A town of 1 lakh at 135 lpcd (13.5 MLD) therefore needs 3.4 to 4.5 ML of service reservoir storage. Distribution is split into pressure zones, each with its own reservoir, when the elevation varies by more than 30 m.",
              "Service reservoirs are RCC tanks, either elevated (overhead) or ground-level. Elevated tanks supply by gravity through the operating head between the water level in the tank and the consumer's tap; the staging height fixes the head. Ground-level reservoirs need a booster pumping station; they suit flat terrain where staging would be uneconomic. The tank has separate inlet and outlet pipes with valves, an overflow pipe at maximum water level, a drain pipe at the invert for emptying, a ventilator with a fly-proof mesh, and a ladder for inspection. Twin compartments allow one to be drained for cleaning without interrupting supply. Maximum water depth is 4 to 5 m to avoid stagnation and minimise hydrostatic load.",
            ],
            bullets: [
              "Service reservoir bridges constant supply and varying demand; capacity 6-8 h of average daily demand.",
              "Mass-curve method: max gap between cumulative supply and cumulative demand over 24 h.",
              "Components: inlet valve, outlet valve, overflow, drain, ventilator with mesh, ladder, twin compartments.",
              "Elevated tanks supply by gravity (head = staging height); ground-level tanks need booster pumps.",
              "Indian Manual: 6-8 h balancing + 1-2 h fire + 4 h emergency for critical installations.",
              "Maximum water depth 4-5 m to avoid stagnation; twin compartments for cleaning without interruption.",
            ],
            table: {
              caption: "Service reservoir capacity by source of demand.",
              headers: ["Component", "Hours of average demand", "Purpose"],
              rows: [
                ["Balancing", "6-8 h", "bridge supply vs demand swing"],
                ["Fire reserve", "1-2 h", "fighting fires"],
                ["Breakdown", "2-4 h", "treatment plant outage"],
                ["Emergency", "4 h", "critical installations"],
                ["Total typical", "8-15 h", "sum by installation class"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Service reservoir capacity built up in layers",
              caption:
                "Each layer is a purpose; the total depth is the sum the engineer provides.",
              layers: [
                { label: "Emergency reserve", note: "4 h - critical installations only" },
                { label: "Breakdown reserve", note: "2-4 h - treatment outage" },
                { label: "Fire reserve", note: "1-2 h - firefighting" },
                { label: "Balancing reserve", note: "6-8 h - supply vs demand swing" },
                { label: "Dead storage", note: "0.3-0.5 m - sediment and drain" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always compute the balancing reserve by mass curve",
              body: "Do not simply take 6 to 8 hours as a rule of thumb; RGPV expects you to plot cumulative supply against cumulative demand over 24 hours and read the maximum gap. The rule of thumb is a cross-check, not a design method - using it alone loses the method marks.",
            },
            keyTerms: [
              { term: "Service reservoir", definition: "Storage that bridges constant-rate supply from a treatment plant against varying consumer demand." },
              { term: "Balancing storage", definition: "The component of service reservoir capacity that absorbs the supply-demand swing, fixed by the 24-hour mass curve." },
              { term: "Mass curve", definition: "A plot of cumulative supply vs cumulative demand; the maximum gap gives the required balancing storage." },
            ],
            examQuestions: [
              {
                q: "Explain the functions of a service reservoir and determine its capacity for a town of 1 lakh population at 135 lpcd with peak factor 2.5, supply running 24 h/day at constant rate.",
                marks: 7,
                outline: [
                  "List functions: balance supply vs demand, fire reserve, breakdown reserve, emergency.",
                  "Average daily demand = 1,00,000 x 135 = 13.5 MLD; constant supply = 13.5e6 / 24 = 562.5 m3/h.",
                  "Peak demand = 13.5 x 2.5 / 24 = 1.406 m3/h per hour at peak; minimum (night) = 13.5 x 0.5 / 24 = 0.281 m3/h per hour.",
                  "Plot cumulative supply (linear) vs cumulative demand (variable) on the same axis over 24 h.",
                  "Maximum gap between the two curves is the balancing storage - about 25 per cent of average daily demand.",
                  "Balancing = 0.25 x 13.5 MLD = 3.4 ML; add fire 0.5 ML + breakdown 1.0 ML = 4.9 ML total capacity.",
                  "Provide as twin RCC compartments for cleaning without interrupting supply.",
                ],
              },
              {
                q: "List the components of a service reservoir and the purpose of each.",
                marks: 3,
              },
              {
                q: "What is the maximum water depth recommended in a service reservoir and why?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Pipes, valves and fittings",
            body: [
              "Distribution mains are made of cast iron (CI), ductile iron (DI), mild steel (MS), reinforced cement concrete (RCC), asbestos cement (AC, now phased out for health reasons), high-density polyethylene (HDPE) and unplasticised PVC (uPVC). CI and DI are ductile, durable and resistant to corrosion, used for trunk mains 80 to 600 mm diameter; MS pipes are used for large diameters above 600 mm under high pressure, with internal cement mortar lining and external bitumen coating for corrosion protection. RCC pipes (NP2, NP3, NP4 classes) are used for gravity mains where pressure is low; HDPE and PVC are used for sub-mains and service connections, light and easy to lay by trenching.",
              "Pipe hydraulics are governed by the Manning equation V = (1/n) R^(2/3) S^(1/2) or the Hazen-Williams equation V = 0.849 C R^0.63 S^0.54, with R the hydraulic radius and S the hydraulic gradient. Manning's n ranges from 0.010 for smooth HDPE to 0.013 for old CI; Hazen-Williams C from 150 for new HDPE down to 100 for old CI. Head loss per kilometre is computed as h_f = (V^2) / (some constant) and added across the network; minor losses at bends, valves and fittings are 5 to 10 per cent of the friction loss. Pipes are sized so that velocity is 0.6 to 1.5 m/s - lower risks deposition, higher risks scour of the lining and water hammer.",
              "Valves control flow and isolate sections for repair. Sluice (gate) valves isolate pipe sections; reflux (non-return) valves prevent backflow at pump discharges; air valves release trapped air at high points and admit air on drainage to prevent vacuum collapse; scour valves drain low points for maintenance; pressure-reducing valves step down pressure between zones. Fittings are the bends, tees, crosses, reducers and sockets that connect pipes; CI and DI fittings are flanged or spigot-and-socket, HDPE fittings are electrofusion-welded. Every fitting adds head loss expressed as an equivalent length of straight pipe: a 90 degree bend equals about 30 diameters, a fully open gate valve about 8 diameters, a tee in flow-through about 20 diameters.",
            ],
            bullets: [
              "Pipe materials: CI / DI (trunk mains 80-600 mm), MS (> 600 mm), RCC (gravity low-pressure), HDPE / uPVC (sub-mains and services).",
              "Manning: V = (1/n) R^(2/3) S^(1/2); n = 0.010 (HDPE) to 0.013 (old CI).",
              "Hazen-Williams: V = 0.849 C R^0.63 S^0.54; C = 150 (new HDPE) to 100 (old CI).",
              "Design velocity 0.6-1.5 m/s; minor losses at fittings taken as 5-10 per cent of friction loss.",
              "Valves: sluice (isolation), reflux (non-return), air (high points), scour (low points), pressure reducing (zones).",
              "Equivalent length: 90 deg bend = 30D, gate valve = 8D, tee flow-through = 20D - add to friction loss.",
            ],
            table: {
              caption: "Pipe materials and their hydraulic roughness.",
              headers: ["Material", "Manning n", "Hazen-Williams C", "Typical use"],
              rows: [
                ["HDPE / uPVC (new)", "0.010", "150", "sub-mains, services"],
                ["MS with mortar lining", "0.011", "140", "trunk mains > 600 mm"],
                ["CI / DI (new)", "0.012", "130", "trunk mains 80-600 mm"],
                ["RCC (NP2-NP4)", "0.013", "120", "gravity mains, low pressure"],
                ["CI (old, tuberculated)", "0.015", "100", "aged mains due for replacement"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Pipe hydraulics: Manning vs Hazen-Williams",
              caption:
                "Two empirical equations give the velocity; pick the one the syllabus quotes.",
              left: {
                heading: "Manning equation",
                items: [
                  "V = (1/n) R^(2/3) S^(1/2)",
                  "Used for full pipes and open channels",
                  "n = 0.010 to 0.015",
                  "Simpler, square-root gradient",
                  "Common in Indian textbooks",
                ],
              },
              right: {
                heading: "Hazen-Williams",
                items: [
                  "V = 0.849 C R^0.63 S^0.54",
                  "Used for pressurised water mains",
                  "C = 100 to 150",
                  "Empirical, water-only",
                  "Common in design software",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Old CI carries tubercules - lower the C value",
              body: "A common design slip is using C = 130 for an old cast iron main. Aged CI builds internal tubercules that drop C to 100 or below; the same main sized for C = 130 delivers far less than the design flow. Always quote the roughness by age and condition, not the catalogue value for new pipe.",
            },
            keyTerms: [
              { term: "Sluice valve", definition: "A gate valve used to isolate a pipe section for repair or maintenance." },
              { term: "Reflux valve", definition: "A non-return valve that allows flow in one direction only, used at pump discharges." },
              { term: "Equivalent length", definition: "Length of straight pipe that gives the same head loss as a fitting, e.g. 30D for a 90 deg bend." },
            ],
            examQuestions: [
              {
                q: "Classify pipes, valves and fittings used in a distribution system. Size a 2 km main to carry 5 MLD using Manning's equation with n = 0.012 and a hydraulic gradient of 1 in 200.",
                marks: 7,
                outline: [
                  "List pipe materials: CI, DI, MS, RCC, HDPE, uPVC with uses and roughness.",
                  "List valves: sluice, reflux, air, scour, pressure reducing.",
                  "List fittings: bends, tees, crosses, reducers, sockets; quote equivalent lengths.",
                  "Manning: V = (1/n) R^(2/3) S^(1/2); for a circular pipe running full R = D/4.",
                  "Q = 5e6 / 86400 = 0.579 m3/s; assume trial D = 0.35 m.",
                  "A = pi D^2 / 4 = 0.0962 m2; V = Q / A = 6.02 m/s - too high.",
                  "Recompute with D = 0.5 m: A = 0.196 m2; V = 2.95 m/s - still high; take D = 0.6 m: V = 2.05 m/s, acceptable.",
                ],
              },
              {
                q: "State the equivalent lengths of a 90 deg bend, a gate valve and a tee in flow-through.",
                marks: 3,
              },
              {
                q: "Write Manning's formula and state the n value for old cast iron.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Hardy Cross method of network analysis",
            body: [
              "The Hardy Cross method, published by Hardy Cross in 1936, is an iterative procedure for solving the heads and flows in a looped pipe network. The network is divided into closed loops; at each junction the algebraic sum of inflows and outflows is zero (continuity), and around each loop the algebraic sum of head losses is zero (energy). The method starts by assuming a flow distribution that satisfies continuity at every junction, computes the head loss in each pipe using h = r Q^n (n = 1.852 for Hazen-Williams, 2 for Manning/Darcy), and applies a correction dQ to every flow in the loop to drive the loop head-loss sum toward zero.",
              "The correction formula is dQ = - sum h / (n x sum (h / Q)), where the sum is over all pipes in the loop, h is the head loss with sign (clockwise positive, anticlockwise negative), and Q is the assumed flow in each pipe (signed). The correction is applied algebraically: clockwise flows get +dQ, anticlockwise get -dQ. For a pipe shared between two loops, the corrections of both loops are applied with their signs. Iteration continues until the absolute value of dQ is below a chosen tolerance, typically 0.01 L/s. For hand calculations two to four iterations suffice for small networks of two or three loops; software like EPANET extends the same logic to large grids.",
              "The method rests on three properties of head loss: it is single-valued in Q, its derivative d h / d Q equals n h / Q, and the function is monotonic. Hence a Taylor expansion of sum h around the assumed Qs gives the correction as the negative ratio of function value to its derivative. The exponent n = 1.852 for the Hazen-Williams head loss h = 10.67 L Q^1.852 / (C^1.852 D^4.87); n = 2 for Manning's h = (10.3 n^2 L Q^2) / D^(16/3) and for Darcy's h = f L V^2 / (2 g D). The method's chief merit is its simplicity: a pocket calculator and a sheet of paper suffice, and the iteration is self-correcting even when the initial assumption is poor.",
            ],
            bullets: [
              "Hardy Cross (1936): iterative method for heads and flows in a looped pipe network.",
              "Two principles: continuity at every junction (sum Q = 0), energy around every loop (sum h = 0).",
              "Head loss h = r Q^n; n = 1.852 (Hazen-Williams), n = 2 (Manning, Darcy).",
              "Correction dQ = - sum h / (n x sum (h / Q)); apply with sign: clockwise +dQ, anticlockwise -dQ.",
              "Iterate until |dQ| < tolerance (0.01 L/s) - 2 to 4 iterations for 2-3 loop networks.",
              "Shared pipes: corrections of both loops applied with their respective signs.",
            ],
            codeExample: {
              language: "python",
              caption: "One Hardy Cross iteration on a single loop of four pipes.",
              code: [
                "# Single loop: 4 pipes, head loss h_i = r_i * Q_i^n",
                "# Assume n = 2 (Manning / Darcy), flows clockwise positive",
                "n = 2",
                "pipes = [",
                "    {'name': 'AB', 'r': 0.5, 'Q': 0.40},   # litres per sec",
                "    {'name': 'BC', 'r': 0.7, 'Q': 0.30},",
                "    {'name': 'CD', 'r': 0.4, 'Q': -0.20},  # anticlockwise",
                "    {'name': 'DA', 'r': 0.6, 'Q': -0.30},",
                "]",
                "",
                "# compute head loss per pipe (signed)",
                "for p in pipes:",
                "    p['h'] = p['r'] * (p['Q'] ** n) * (1 if p['Q'] > 0 else -1)",
                "",
                "sum_h = sum(p['h'] for p in pipes)",
                "sum_h_over_Q = sum(abs(p['h'] / p['Q']) for p in pipes)",
                "dQ = -sum_h / (n * sum_h_over_Q)",
                "",
                "print(f'sum_h = {sum_h:+.4f} m  sum(h/Q) = {sum_h_over_Q:.4f}  dQ = {dQ:+.4f} L/s')",
                "",
                "# apply correction: clockwise +dQ, anticlockwise -dQ",
                "for p in pipes:",
                "    p['Q_new'] = p['Q'] + dQ if p['Q'] > 0 else p['Q'] - dQ",
                "    print(f\"{p['name']}: Q {p['Q']:+.3f} -> {p['Q_new']:+.3f} L/s\")",
              ].join("\n"),
            },
            diagram: {
              kind: "cycle",
              title: "Hardy Cross iteration cycle",
              caption:
                "Six steps round the loop; repeat until the correction falls below tolerance.",
              steps: [
                { label: "Assume flows satisfying continuity", note: "guess Qs at every pipe" },
                { label: "Compute head loss h = r Q^n", note: "signed for direction" },
                { label: "Sum h around the loop", note: "clockwise +, anticlockwise -" },
                { label: "Compute dQ = -sum h / (n x sum h/Q)", note: "Taylor expansion" },
                { label: "Apply dQ with sign", note: "clockwise +dQ, anticlockwise -dQ" },
                { label: "Check |dQ| < tolerance", note: "stop or iterate" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sign convention is the whole game",
              body: "Hardy Cross loses marks more from sign slips than from arithmetic. Fix a clockwise positive convention, write every assumed Q with its sign, compute h with the same sign, and apply the correction +dQ to clockwise and -dQ to anticlockwise. State the convention at the top of the answer - examiners reward the discipline.",
            },
            keyTerms: [
              { term: "Continuity", definition: "The principle that the algebraic sum of inflows and outflows at every junction in a network is zero." },
              { term: "Head loss coefficient r", definition: "A pipe constant expressing resistance; h = r Q^n, r combines length, diameter and roughness." },
              { term: "Iteration tolerance", definition: "The maximum |dQ| below which the Hardy Cross correction is deemed converged, typically 0.01 L/s." },
            ],
            examQuestions: [
              {
                q: "State the Hardy Cross method of pipe network analysis. Derive the correction formula dQ = -sum h / (n x sum h/Q) and apply one iteration to a single loop of four pipes.",
                marks: 7,
                outline: [
                  "State the two principles: continuity at junctions, energy closure around loops.",
                  "Assume an initial flow distribution that satisfies continuity.",
                  "Compute head loss h = r Q^n with n = 1.852 (Hazen-Williams) or 2 (Manning/Darcy).",
                  "Taylor expand sum h(Q) about the assumed Qs: sum h(Q+dQ) ≈ sum h + dQ x sum (dh/dQ).",
                  "Set the new sum to zero: dQ = -sum h / sum (dh/dQ) = -sum h / (n x sum (h/Q)).",
                  "Apply +dQ to clockwise flows and -dQ to anticlockwise; iterate to tolerance.",
                  "Demonstrate on a 4-pipe loop with numbers; report the new flows after one iteration.",
                ],
              },
              {
                q: "Why is n = 1.852 used with the Hazen-Williams equation in Hardy Cross?",
                marks: 3,
              },
              {
                q: "Write the Hardy Cross correction formula and define every symbol.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Network analysis and simulation",
            body: [
              "Beyond the hand method of Hardy Cross lies network analysis at the scale of an entire city. A municipal distribution grid may have thousands of pipes, hundreds of junctions and dozens of pumps and reservoirs; analysis is impossible by hand. Software such as EPANET (US EPA), WaterGEMS and KYPIPE model the network as a graph: pipes are edges, junctions are nodes; each pipe has length, diameter, roughness and minor loss coefficients; each junction has elevation and demand; each reservoir has a head; each pump has a head-discharge curve. The solver iterates continuity and energy closure across the whole graph, converging in seconds for grids of thousands of pipes.",
              "The simulation gives three outputs that the design engineer needs. First, the head and pressure at every junction, identifying low-pressure zones that need booster pumps or service reservoirs. Second, the flow and velocity in every pipe, identifying under-used mains (velocity below 0.3 m/s, stagnation risk) and over-used mains (velocity above 1.5 m/s, scour and water hammer risk). Third, the residence time of water in the network, the time from clear-water reservoir to consumer's tap, which sets the chlorine residual decay and the risk of microbial regrowth. Long residence times (over 24 to 48 hours) demand re-chlorination at intermediate stations or loop reconfiguration to remove dead ends.",
              "Extended-period simulation (EPS) takes the analysis beyond a single instant: it runs the model over 24, 48 or 168 hours with a varying demand pattern, returning the trajectory of tank levels, pump on-off cycles and pressures at critical nodes. The engineer uses EPS to size service reservoirs (confirm the 24-hour mass-curve storage), to schedule pumps (avoid peak electricity tariffs), and to verify that residual pressure stays above 12 m at the worst consumer through the peak hour. Calibrating the model against field pressure measurements - usually 20 to 30 loggers distributed across the zone - is essential; an uncalibrated model can be off by 10 to 20 m of pressure, which is the entire design margin.",
            ],
            bullets: [
              "EPANET / WaterGEMS / KYPIPE: graph model with pipes as edges, junctions as nodes.",
              "Inputs: pipe L, D, roughness; junction elevation and demand; reservoir head; pump curve.",
              "Outputs: head and pressure at every node; flow and velocity in every pipe; residence time.",
              "Stagnation risk if velocity < 0.3 m/s; scour and water hammer if velocity > 1.5 m/s.",
              "Residence time > 24-48 h needs re-chlorination or loop reconfiguration to remove dead ends.",
              "Extended-period simulation (EPS) runs 24-168 h with a demand pattern; calibrate against field loggers.",
            ],
            table: {
              caption: "Network simulation outputs and their design use.",
              headers: ["Output", "Threshold", "Design action"],
              rows: [
                ["Junction pressure", "< 12 m two-storey", "add booster or reservoir"],
                ["Pipe velocity", "< 0.3 m/s", "downsize or loop to remove dead end"],
                ["Pipe velocity", "> 1.5 m/s", "upsize or parallel main"],
                ["Residence time", "> 48 h", "re-chlorination station"],
                ["Tank level swing", "outside design band", "resize or adjust pump schedule"],
                ["Pump hours / day", "> 16 h", "add standby or re-schedule"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From network model to design action",
              caption:
                "Five stages of network analysis from graph build to design action.",
              steps: [
                { label: "Build the graph: pipes, junctions, pumps, reservoirs", note: "GIS and asset data" },
                { label: "Assign demands by junction and time", note: "from billing records" },
                { label: "Run steady-state or extended-period simulation", note: "EPANET solver" },
                { label: "Inspect pressures, velocities, residence times", note: "compare with thresholds" },
                { label: "Add boosters, rechlorination, parallel mains", note: "design actions" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always calibrate against field pressures",
              body: "An uncalibrated network model can be off by 10 to 20 m of pressure - the entire design margin. Place 20 to 30 pressure loggers across the zone, run the model for a week, and adjust pipe roughness and nodal demands until the simulated pressures match field readings within 2 m. A calibrated model is a design tool; an uncalibrated one is a guess.",
            },
            keyTerms: [
              { term: "Extended-period simulation (EPS)", definition: "A network simulation that runs over 24, 48 or 168 hours with a varying demand pattern, returning trajectories of tank levels and pressures." },
              { term: "Residence time", definition: "Time taken by water to travel from the clear-water reservoir to the consumer's tap; sets chlorine decay risk." },
              { term: "Model calibration", definition: "Adjusting pipe roughness and nodal demands until simulated pressures match field loggers within a target margin." },
            ],
            examQuestions: [
              {
                q: "Explain network analysis by Hardy Cross and by simulation software. State the outputs of an extended-period simulation and how each output drives a design action.",
                marks: 7,
                outline: [
                  "Hardy Cross solves small networks by hand; software extends the method to thousands of pipes.",
                  "EPANET model: pipes as edges, junctions as nodes with elevation and demand.",
                  "Solver iterates continuity and energy closure across the whole graph.",
                  "Outputs: head and pressure at every node; flow and velocity in every pipe; residence time.",
                  "Pressure < 12 m at a node drives booster pump or new service reservoir; velocity < 0.3 m/s drives downsizing or looping.",
                  "Residence time > 48 h drives re-chlorination; tank swing outside band drives resizing or pump re-scheduling.",
                  "EPS gives the trajectory; calibration against field loggers fixes the model accuracy.",
                ],
              },
              {
                q: "What is residence time in a distribution network and why does it matter?",
                marks: 3,
              },
              {
                q: "State two design thresholds from a network simulation output.",
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
      title: "Wastewater Engineering",
      summary:
        "Collecting and conveying the spent water of a city: quantity estimation from water demand, sewer design by self-cleansing velocities, sewer materials and joints, the appurtenances of manholes and inlets, and sewage pumping stations for low-lying zones.",
      chapter: {
        number: "04",
        title: "Wastewater Engineering",
        intro:
          "Unit IV mirrors the supply side: estimate the quantity of wastewater (about 80 per cent of water supplied), design sewers as circular pipes flowing partly full at self-cleansing velocity, choose materials and joints, build the manholes and inlets that admit flow and admit inspection, and lift sewage from low-lying zones by pumping stations.",
        inOneBreath:
          "Wastewater quantity is about 80 per cent of water demand plus infiltration of 10 to 30 m3 per km of sewer per day; design flow is peak (3 x dry weather flow) plus storm allowance in combined systems; sewers are circular, sized by Manning's V = (1/n) R^(2/3) S^(1/2), running half to two-thirds full at minimum 0.6 m/s self-cleansing velocity; materials are vitrified clay, RCC NP3, CI, HDPE; joints are spigot-socket, collar or mechanical; manholes at every change of direction, gradient or diameter and every 90 to 120 m on straight runs; pumping stations lift sewage from low-lying zones by submersible pumps with standby.",
        sections: [
          {
            number: "4.1",
            title: "Quantity of wastewater",
            body: [
              "The quantity of wastewater a city produces is fixed by its water demand and the losses along the supply. The rule of thumb is that about 80 per cent of the water supplied returns as wastewater - the 20 per cent lost goes to gardening, street washing, firefighting and leakage. For a town of 1 lakh at 135 lpcd, the daily water demand is 13.5 MLD, and the dry-weather flow (DWF) of wastewater is about 10.8 MLD, or 108 litres per capita per day. To this is added the infiltration of groundwater into the sewers through joints and cracks, at the rate of 10 to 30 cubic metres per kilometre of sewer per day depending on the water table and sewer condition.",
              "Design flow is the maximum expected flow the sewer must carry, computed as the peak factor times the DWF. For Indian towns, the peak factor of wastewater is 3 for small communities (under 50,000), 2.5 for medium (50,000 to 2 lakh) and 2 for large cities (over 2 lakh), reflecting the dampening of peaks as the population grows. The design flow of the trunk sewer for a 1 lakh town is therefore 2.5 x 10.8 = 27 MLD plus infiltration of perhaps 2 MLD, or 29 MLD total. In a combined sewerage system that also carries storm water, the design flow is DWF plus the storm runoff from a one-year-return-period rainfall; separate sewerage keeps storm water out, reducing the trunk size.",
              "The dry-weather flow has three sub-components: sanitary sewage from homes and institutions, industrial wastewater from factories, and infiltration. Sanitary sewage is computed as 80 per cent of water demand; industrial wastewater is the sum of factory discharges, often with its own peak factors and treatment requirements. Infiltration is added in proportion to sewer length. The quantity survey is the first input to sewer design: it fixes the design flow, which fixes the diameter, gradient and self-cleansing velocity. Infiltration rates rise with the age and joint quality of the sewer; a vitrified clay sewer with cement mortar joints leaks less than a brick sewer, and an HDPE sewer with welded joints approaches zero infiltration.",
            ],
            bullets: [
              "Wastewater ≈ 80 per cent of water supplied; DWF for a 1 lakh town at 135 lpcd is about 10.8 MLD.",
              "Infiltration: 10-30 m3 per km of sewer per day, added to the DWF.",
              "Peak factor: 3 (P < 50k), 2.5 (50k-2 lakh), 2 (P > 2 lakh).",
              "Design flow = peak factor x DWF + infiltration + (storm allowance if combined system).",
              "Components: sanitary sewage + industrial wastewater + infiltration.",
              "HDPE welded joints approach zero infiltration; old brick sewers leak most.",
            ],
            table: {
              caption: "Design flow components for a town of 1 lakh at 135 lpcd.",
              headers: ["Component", "Quantity", "How computed"],
              rows: [
                ["Water supplied", "13.5 MLD", "1,00,000 x 135 lpcd"],
                ["Sanitary sewage (DWF)", "10.8 MLD", "80 per cent of water supplied"],
                ["Infiltration", "≈ 2 MLD", "10-30 m3/km/day x 100 km"],
                ["Industrial", "case by case", "sum of factory discharges"],
                ["Peak design flow", "27-29 MLD", "2.5 x DWF + infiltration"],
                ["Combined with storm", "DWF + 1-yr storm", "for combined sewerage"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From water demand to sewer design flow",
              caption:
                "Four steps from water supplied to the trunk sewer design flow.",
              steps: [
                { label: "Water supplied (avg daily)", note: "135 lpcd x P" },
                { label: "Sanitary sewage = 80 per cent", note: "DWF" },
                { label: "Add infiltration", note: "10-30 m3/km/day x length" },
                { label: "Multiply by peak factor", note: "2.5 x DWF" },
                { label: "Add storm allowance if combined", note: "design flow" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always state the peak factor by population band",
              body: "The peak factor for wastewater depends on the population served: 3 for small, 2.5 for medium, 2 for large. Stating the band before applying the factor earns the method mark. A blanket 3 applied to a metro-sized sewer over-sizes it by 50 per cent - a costly error in design papers.",
            },
            keyTerms: [
              { term: "Dry-weather flow (DWF)", definition: "The sanitary sewage plus infiltration of a city on a dry day, about 80 per cent of water supplied." },
              { term: "Peak factor (wastewater)", definition: "Ratio of peak to average flow: 3 for P < 50k, 2.5 for 50k-2 lakh, 2 for P > 2 lakh." },
              { term: "Infiltration", definition: "Groundwater entering a sewer through joints and cracks, 10 to 30 m3 per km of sewer per day." },
            ],
            examQuestions: [
              {
                q: "Explain the components of wastewater quantity. Compute the design flow of a trunk sewer for a town of 1 lakh population at 135 lpcd, sewer length 80 km, peak factor 2.5.",
                marks: 7,
                outline: [
                  "Components: sanitary sewage, industrial, infiltration (and storm if combined).",
                  "Water supplied = 1,00,000 x 135 / 1e6 = 13.5 MLD.",
                  "Sanitary sewage DWF = 0.80 x 13.5 = 10.8 MLD.",
                  "Infiltration = 20 m3/km/day x 80 km = 1600 m3/day = 0.016 MLD (typical mid-range value).",
                  "Design flow = peak factor x DWF + infiltration = 2.5 x 10.8 + small infiltration.",
                  "Use infiltration 2 m3/km/day in some textbooks -> 0.16 MLD; total ≈ 27 + 0.16 = 27.2 MLD.",
                  "Add storm allowance if combined; otherwise trunk sized for 27-29 MLD.",
                ],
              },
              {
                q: "State the peak factor for wastewater by population band.",
                marks: 3,
              },
              {
                q: "Why is infiltration added to the dry-weather flow?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Sewer design - self-cleansing velocities",
            body: [
              "Sewers are designed to flow under gravity, as circular pipes running partly full - never full, because headspace is needed for ventilation. The two design constraints are self-cleansing velocity and capacity. Self-cleansing velocity is the minimum velocity at which suspended solids do not deposit on the invert; for sanitary sewers it is 0.6 m/s at minimum flow (n+1 of the design horizon), and 0.75 to 0.9 m/s at design (average) flow. For combined sewers carrying storm grit, the self-cleansing velocity rises to 1.0 m/s. Maximum velocity is capped at 3 m/s to avoid scour of the invert and wear of the pipe.",
              "The hydraulics of a circular pipe running partly full are governed by Manning's equation, with the hydraulic radius R = A / P computed for the partial-depth flow. For a circular pipe of diameter D running at depth d (d/D between 0 and 1), the area and wetted perimeter are functions of the central angle; tables (the B.J. or Izzard tables) give A, P, R, V and Q for each depth-to-diameter ratio. Maximum velocity occurs at d/D = 0.81 and maximum discharge at d/D = 0.95 - meaning a circular sewer running just under full carries more flow than one running exactly full, a quirk of the geometry. Sewers are sized to run at d/D between 0.5 and 0.7 at design flow, leaving headspace.",
              "The design procedure is: (i) compute design flow Q for the upstream end of the reach; (ii) choose a trial diameter D from the standard series (150, 200, 250, 300, 350, 400, 450, 600 mm and so on); (iii) compute the gradient S required to give self-cleansing velocity at minimum flow using Manning's V = (1/n) R^(2/3) S^(1/2); (iv) check that the depth-to-diameter ratio at design flow is between 0.5 and 0.7; (v) check that the velocity at design flow is below 3 m/s. The minimum diameter for a sanitary sewer in India is 150 mm to prevent clogging; manholes are placed at every change of direction, gradient or diameter and at every 90 to 120 m of straight run for cleaning and inspection.",
            ],
            bullets: [
              "Self-cleansing velocity: 0.6 m/s min flow, 0.75-0.9 m/s design flow (sanitary); 1.0 m/s combined.",
              "Maximum velocity capped at 3 m/s to avoid scour and wear.",
              "Sewers run partly full: d/D between 0.5 and 0.7 at design flow.",
              "Max velocity at d/D = 0.81, max discharge at d/D = 0.95 (geometric quirk).",
              "Manning: V = (1/n) R^(2/3) S^(1/2); use B.J. tables for partial-depth circular pipes.",
              "Min sanitary sewer diameter 150 mm; manholes at changes and every 90-120 m on straight runs.",
            ],
            table: {
              caption: "Self-cleansing velocity and design checks for sewers.",
              headers: ["Check", "Min", "Design target", "Max"],
              rows: [
                ["Velocity at min flow", "0.6 m/s", "0.6-0.75 m/s", "-"],
                ["Velocity at design flow", "0.75 m/s", "0.9-1.5 m/s", "3.0 m/s"],
                ["Depth-to-diameter (d/D)", "-", "0.5-0.7", "0.8"],
                ["Min diameter (sanitary)", "150 mm", "150-200 mm", "-"],
                ["Manhole spacing", "-", "90-120 m", "120 m straight run"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Sewer design procedure",
              caption:
                "Six stages from design flow to a checked diameter and gradient.",
              stages: [
                { label: "Compute design flow Q", note: "peak factor x DWF" },
                { label: "Trial diameter D", note: "standard series" },
                { label: "Gradient S for self-cleansing V", note: "Manning at min flow" },
                { label: "Check d/D at design Q", note: "between 0.5 and 0.7" },
                { label: "Check V at design Q", note: "below 3 m/s" },
                { label: "Fix manhole spacing", note: "every 90-120 m" },
              ],
            },
            callout: {
              type: "warning",
              title: "Self-cleansing velocity at MINIMUM flow, not design",
              body: "Self-cleansing velocity is checked at minimum flow (the night trough), not at design flow. A sewer may have a healthy 1.5 m/s at peak but stall at 0.3 m/s at night - and the deposition starts at night. Always verify V at the minimum expected flow before approving the gradient.",
            },
            keyTerms: [
              { term: "Self-cleansing velocity", definition: "Minimum velocity (0.6 m/s for sanitary sewers at minimum flow) that prevents deposition of solids on the invert." },
              { term: "Depth-to-diameter ratio (d/D)", definition: "The depth of flow expressed as a fraction of pipe diameter; design target 0.5 to 0.7." },
              { term: "B.J. tables", definition: "Hydraulic tables giving A, P, R, V, Q for a circular pipe at each depth-to-diameter ratio." },
            ],
            examQuestions: [
              {
                q: "State the principles of sewer design. Compute the diameter and gradient of a sanitary sewer carrying 30 L/s at design flow with d/D = 0.6 and n = 0.013.",
                marks: 7,
                outline: [
                  "State self-cleansing velocity (0.6 m/s min, 0.75-0.9 m/s design) and max 3 m/s.",
                  "State Manning V = (1/n) R^(2/3) S^(1/2); use circular-pipe partial-depth hydraulics.",
                  "For d/D = 0.6, from B.J. tables: A / D^2 = 0.443, R / D = 0.275 (approx).",
                  "Trial D = 0.3 m: A = 0.443 x 0.09 = 0.0399 m2; V = Q / A = 0.030 / 0.0399 = 0.75 m/s.",
                  "R = 0.275 x 0.3 = 0.0825 m; Manning: S = (V n / R^(2/3))^2 = (0.75 x 0.013 / 0.0825^(2/3))^2.",
                  "Compute: R^(2/3) = 0.0825^(2/3) ≈ 0.19; S = (0.75 x 0.013 / 0.19)^2 ≈ (0.0513)^2 ≈ 0.00263, or 1 in 380.",
                  "Check: V at design 0.75 m/s within target; d/D = 0.6 within band; gradient 1 in 380 acceptable.",
                ],
              },
              {
                q: "What is self-cleansing velocity and what are its values for sanitary and combined sewers?",
                marks: 3,
              },
              {
                q: "State the minimum diameter of a sanitary sewer and the maximum design velocity.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Sewer materials and joints",
            body: [
              "Sewer materials must resist the corrosive, abrasive and chemical environment of wastewater, carry the imposed ground and traffic loads, and remain watertight against infiltration and exfiltration over a design life of 50 to 100 years. The materials in common use are vitrified clay (VC), reinforced cement concrete (RCC, NP3 and NP4 classes), cast iron (CI), ductile iron (DI), asbestos cement (now phased out), high-density polyethylene (HDPE) and unplasticised PVC (uPVC). VC sewers suit small diameters (100 to 600 mm) in corrosive soils; RCC NP3 and NP4 suit trunk sewers (450 to 1800 mm) under heavy loads; HDPE and PVC suit small to medium diameters in trenching.",
              "Joints are as important as the pipe material: a leaky joint lets infiltration in or exfiltration out, undermines the surrounding soil and fails the line. Joint types are spigot-and-socket with cement mortar (rigid, for VC and RCC), spigot-and-socket with rubber ring (flexible, for RCC NP3 and DI), collar joint (two pipe ends butted inside a RCC collar, for plain RCC), mechanical joint (bolted gland, for CI), and butt-fusion or electrofusion (welded, for HDPE). Flexible joints accommodate ground movement and differential settlement without cracking; rigid joints need a stable founding soil. The sewer is laid on a 150 mm thick concrete cradle or sand bedding to distribute load; for unstable soils, the pipe is encased in a full 360 degree concrete cradle.",
              "Corrosion in sewers is dominated by hydrogen sulphide attack on the crown. Anaerobic bacteria in the slime layer reduce sulphate to H2S, which escapes to the crown above the water line; aerobic bacteria there oxidise H2S to sulphuric acid, which attacks the cement paste of concrete and mortar joints, eventually collapsing the crown. The remedy is ventilation (to keep the crown aerobic and dilute the H2S), sulphate-resistant cement (SRC) for concrete sewers, PVC or HDPE linings for aggressive reaches, and dosing of iron salts or peroxide at pumping stations to bind the sulphide. Vitrified clay, being chemically inert, is immune to crown corrosion and is preferred for long-life trunk sewers in warm climates.",
            ],
            bullets: [
              "Materials: VC (100-600 mm corrosive), RCC NP3 / NP4 (450-1800 mm trunk), CI / DI (under load), HDPE / uPVC (small-medium).",
              "Joint types: spigot-socket with mortar (rigid VC), rubber ring (flexible RCC/DI), collar (plain RCC), mechanical (CI), fusion (HDPE).",
              "Flexible joints tolerate settlement; rigid joints need stable founding.",
              "Bedding: 150 mm concrete cradle or sand; full 360 deg encasement in unstable soils.",
              "Crown corrosion: H2S -> H2SO4 by aerobic crown bacteria; attacks cement paste, collapses crown.",
              "Remedies: ventilation, SRC cement, PVC / HDPE linings, iron salt or peroxide dosing; VC is immune.",
            ],
            table: {
              caption: "Sewer materials and joint types compared.",
              headers: ["Material", "Diameter range", "Joint type", "Corrosion resistance"],
              rows: [
                ["Vitrified clay (VC)", "100-600 mm", "spigot-socket mortar", "excellent (inert)"],
                ["RCC NP3", "450-1200 mm", "spigot-socket rubber ring", "good (use SRC)"],
                ["RCC NP4", "600-1800 mm", "spigot-socket rubber ring", "good under heavy load"],
                ["CI / DI", "80-900 mm", "mechanical / rubber ring", "good (lined)"],
                ["HDPE", "100-1000 mm", "butt-fusion / electrofusion", "excellent"],
                ["uPVC", "100-300 mm", "rubber ring / solvent", "excellent"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Rigid vs flexible sewer joints",
              caption:
                "Two joint philosophies; the choice follows the soil and the load.",
              left: {
                heading: "Rigid joint",
                items: [
                  "Spigot-socket with cement mortar",
                  "VC and plain RCC pipes",
                  "No tolerance to settlement",
                  "Needs stable concrete cradle",
                  "Cracks if soil moves - leaks follow",
                ],
              },
              right: {
                heading: "Flexible joint",
                items: [
                  "Spigot-socket with rubber ring",
                  "RCC NP3, DI, HDPE, PVC",
                  "Tolerates differential settlement",
                  "Sand bedding suffices",
                  "Watertight over decades of service",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Crown corrosion is invisible until collapse",
              body: "Concrete sewer crown corrosion by H2S -> H2SO4 is silent: the invert looks fine while the crown thins year by year. The first sign is often a collapse. Specify SRC cement, ventilate the line, and inspect the crown by CCTV every 5 years - especially on trunk sewers in warm, low-velocity reaches where H2S builds up.",
            },
            keyTerms: [
              { term: "Spigot-and-socket joint", definition: "A joint in which the spigot end of one pipe enters the socket (bell) of the next; may be rigid (mortar) or flexible (rubber ring)." },
              { term: "Crown corrosion", definition: "Concrete sewer attack by sulphuric acid formed from H2S at the crown above the water line; collapses the crown over years." },
              { term: "Sulphate-resistant cement (SRC)", definition: "A cement with reduced C3A content used for concrete sewers exposed to sulphate and H2S attack." },
            ],
            examQuestions: [
              {
                q: "Classify sewer materials and joints. Explain crown corrosion in concrete sewers and state the preventive measures.",
                marks: 7,
                outline: [
                  "List materials: VC, RCC NP3/NP4, CI/DI, HDPE, uPVC with diameter ranges.",
                  "List joints: spigot-socket mortar (rigid), rubber ring (flexible), collar, mechanical, fusion.",
                  "Contrast rigid vs flexible: tolerance to settlement, bedding requirements.",
                  "Describe crown corrosion: anaerobic slime produces H2S; aerobic crown bacteria oxidise it to H2SO4.",
                  "H2SO4 attacks the calcium hydroxide and C-S-H of cement paste; the crown thins and collapses.",
                  "Prevention: ventilation, SRC cement, PVC / HDPE linings, iron salt or peroxide dosing at pumps.",
                  "Note that VC is chemically inert and immune - the material of choice for warm-climate trunk sewers.",
                ],
              },
              {
                q: "Why are flexible rubber-ring joints preferred over rigid mortar joints in unstable soils?",
                marks: 3,
              },
              {
                q: "State two preventive measures against crown corrosion.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Sewer appurtenances - manholes and inlets",
            body: [
              "Sewer appurtenances are the structures and fittings that allow a sewer to function, be inspected, and be maintained. The most important is the manhole: a masonry or RCC chamber built at intervals along the sewer, providing access for inspection, cleaning and the removal of obstructions. Manholes are placed at every change of alignment, gradient or diameter, at every junction of two or more sewers, and at every 90 to 120 m on straight runs. A straight sewer line between two manholes is called a sewer leg or reach; the length of the leg is fixed by the maximum distance a cleaning rod or CCTV camera can traverse from one access point.",
              "A standard manhole is a vertical shaft of diameter 900 to 1200 mm for shallow depths (under 1.5 m), or rectangular 1.2 by 1.8 m for deeper lines; for very deep sewers (over 5 m) the shaft is enlarged at the bottom to form a working chamber with a benching on which the operator stands. The manhole has a cast-iron or RCC cover with a frame at the road surface, a stepped ladder or cast-iron steps built into the wall, a channel in the invert matching the sewer diameter, and benching on either side sloped to the channel. Drop manholes are used when an incoming sewer enters at a much higher level than the outgoing, dissipating the energy of the fall in a vertical pipe.",
              "Street inlets admit surface runoff into a combined or storm sewer. They are placed at road intersections and low points, at intervals of 30 to 60 m along the road, with gully gratings of cast iron that catch leaves and debris. An inlet may discharge directly to the sewer or to a catch pit (a small sediment trap) that retains grit and floating matter before it enters the main. Other appurtenances are flush tanks (introduced at the head of a long sewer to flush it with water), lampholes (small vertical shafts for inspecting between manholes by lowering a lamp), inverted siphons (cast-iron pressure pipes that carry sewage under a river or obstruction), and storm-water overflows (weirs that spill excess flow from a combined sewer to a watercourse during heavy rain).",
            ],
            bullets: [
              "Manholes at every change of alignment, gradient, diameter, junction, and every 90-120 m on straight runs.",
              "Standard: 900-1200 mm dia for shallow (< 1.5 m), rectangular 1.2 x 1.8 m for deeper; working chamber if > 5 m.",
              "Drop manhole dissipates energy where incoming sewer enters much higher than outgoing.",
              "Street inlets admit runoff to combined / storm sewers at 30-60 m intervals.",
              "Catch pit retains grit and debris before the main sewer; flush tanks and lampholes aid maintenance.",
              "Inverted siphon: cast-iron pressure pipe carrying sewage under a river or obstruction.",
            ],
            table: {
              caption: "Sewer appurtenances and their purpose.",
              headers: ["Appurtenance", "Where placed", "Purpose"],
              rows: [
                ["Manhole", "every 90-120 m, changes", "inspection and cleaning"],
                ["Drop manhole", "steep invert drops", "energy dissipation"],
                ["Street inlet", "every 30-60 m on roads", "admit surface runoff"],
                ["Catch pit", "before the main", "trap grit and debris"],
                ["Lamphole", "between manholes", "visual inspection"],
                ["Inverted siphon", "under a river / obstruction", "pressure pipe below gravity line"],
                ["Storm overflow", "combined sewers", "spill excess to watercourse"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a manhole by invert drop",
              caption:
                "One design decision - the drop between incoming and outgoing inverts - branches into two manhole types.",
              start: "Incoming vs outgoing invert",
              branches: [
                { label: "Drop < 0.6 m", outcome: "Standard manhole with sloped benching", good: true },
                { label: "Drop 0.6-1.0 m", outcome: "Benching with vertical drop in chamber", good: true },
                { label: "Drop > 1.0 m", outcome: "Drop manhole with vertical pipe", good: true },
                { label: "Incoming higher + smaller", outcome: "Drop manhole with splash pad", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch the benching in every manhole",
              body: "RGPV examiners look for the benching in a manhole sketch: the channel shaped to match the sewer diameter, with haunches sloped at 1:1 to the chamber wall. Benchless manholes trap solids and stagnate - and a sketch without benching loses two marks even if the rest is right.",
            },
            keyTerms: [
              { term: "Manhole", definition: "A masonry or RCC chamber giving access to a sewer for inspection, cleaning and removal of obstructions." },
              { term: "Drop manhole", definition: "A manhole with a vertical pipe that dissipates the energy of an incoming sewer entering well above the outgoing invert." },
              { term: "Inverted siphon", definition: "A cast-iron pressure pipe that carries sewage under an obstruction such as a river, below the gravity line." },
            ],
            examQuestions: [
              {
                q: "State the locations and components of a manhole. With a sketch, describe a drop manhole and list the other sewer appurtenances.",
                marks: 7,
                outline: [
                  "Locations: every 90-120 m, change of alignment, gradient, diameter, junction of sewers.",
                  "Components: cover and frame, ladder / steps, channel, benching, working chamber if deep.",
                  "Sketch a drop manhole: incoming pipe higher, vertical drop pipe, splash pad, outgoing pipe lower.",
                  "Energy of the fall is dissipated in the vertical pipe; splash pad protects the invert.",
                  "Street inlets admit runoff at 30-60 m intervals; catch pit traps grit before the main.",
                  "Lampholes for inspection; flush tanks for cleaning; inverted siphons under obstructions.",
                  "Storm overflows spill excess combined flow to a watercourse during heavy rain.",
                ],
              },
              {
                q: "Why is benching provided inside a manhole?",
                marks: 3,
              },
              {
                q: "What is an inverted siphon and where is it used?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Sewage pumping stations",
            body: [
              "Sewage pumping stations lift wastewater from a low-lying zone to a higher elevation where gravity flow can resume, or pump it over a ridge to a distant treatment plant. They are needed where the natural ground profile does not allow a gravity sewer to follow the terrain - at the bottom of valleys, in flat lands where the gravity line would dig too deep, or where a treatment plant is sited above the city. The station consists of a wet well that receives the sewage, a dry well or pump room that houses the pumps, and the rising main that conveys the pumped sewage to the higher gravity line or to the treatment plant headworks.",
              "Pumps for raw sewage are of the centrifugal, non-clog type with closed impellers and large passages that pass solids up to 75 mm; submersible pumps are now the standard, with the motor and pump as a single unit lowered into the wet well on guide rails for easy removal. The station is sized with two to three pumps - one duty, one standby, one assist at peak - and each pump sized for the peak hourly flow. The wet well volume between start and stop levels is fixed by the cycle time: V = (T x Q) / 4, where T is the minimum cycle (5 to 15 min) and Q is the pump discharge, large enough to prevent motor overheating by too-frequent starts but small enough to prevent septicity.",
              "The rising main is designed for a velocity of 0.75 to 1.5 m/s - high enough to keep solids moving, low enough to avoid water hammer. Air valves at high points release trapped air and admit air on drainage; scour valves at low points drain the main for inspection. The main is laid below the frost line, with thrust blocks at every bend to resist the hydraulic thrust. Pumping stations include a standby power generator, an overflow to the nearest watercourse in the event of pump failure (with screening), and a ventilation system to remove H2S and methane. Submersible pumps have largely replaced the older dry-well centrifugal design because of simpler civil works, less odour and easier maintenance.",
            ],
            bullets: [
              "Pumping station: wet well (receives sewage), dry well or submersible pumps, rising main to higher level.",
              "Pumps: centrifugal non-clog, pass 75 mm solids; submersible motor-pump unit on guide rails.",
              "Configuration: 2-3 pumps (duty + standby + assist at peak); each sized for peak hourly flow.",
              "Wet well volume V = (T x Q) / 4, cycle T = 5-15 min - prevent motor overheating and septicity.",
              "Rising main: velocity 0.75-1.5 m/s; air valves at high points, scour valves at low points, thrust blocks at bends.",
              "Standby generator and emergency overflow (screened) to nearest watercourse for pump failure.",
            ],
            table: {
              caption: "Pumping station design parameters.",
              headers: ["Parameter", "Value", "Reason"],
              rows: [
                ["Pump type", "centrifugal non-clog", "pass solids up to 75 mm"],
                ["Number of pumps", "2-3 (duty + standby)", "reliability and peak assist"],
                ["Wet well cycle time", "5-15 min", "prevent motor overheating"],
                ["Rising main velocity", "0.75-1.5 m/s", "keep solids moving, avoid water hammer"],
                ["Standby power", "diesel generator", "continuous operation in outage"],
                ["Emergency overflow", "screened, to watercourse", "protect the wet well in failure"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Pumping station vertical build-up",
              caption:
                "From foundation to control room - the layers of a submersible pumping station.",
              layers: [
                { label: "Control room", note: "switchgear, generator, panels" },
                { label: "Rising main outlet", note: "to higher gravity line" },
                { label: "Wet well top level", note: "stop level for pumps" },
                { label: "Pump start level", note: "lead pump starts" },
                { label: "Submersible pumps", note: "on guide rails at invert" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the cycle-time formula",
              body: "RGPV awards a method mark for stating V = (T x Q) / 4 for the wet well volume. The factor 4 comes from the cycle's quarter-turn (fill at net rate, empty at full pump rate). Without the formula, a candidate who computes V by trial loses the mark even if the number is correct.",
            },
            keyTerms: [
              { term: "Wet well", definition: "The chamber of a pumping station that receives sewage and from which the pumps draw." },
              { term: "Rising main", definition: "The pressure pipe that conveys pumped sewage from a pumping station to a higher gravity line or treatment plant." },
              { term: "Pump cycle time", definition: "The interval between successive starts of a pump; minimum 5 to 15 min to prevent motor overheating." },
            ],
            examQuestions: [
              {
                q: "Describe the components and working of a sewage pumping station. State the cycle-time formula and design the wet well volume for a station with two pumps of 50 L/s each and a minimum cycle of 10 min.",
                marks: 7,
                outline: [
                  "Components: wet well, dry well or submersible pumps, rising main, control room, standby power.",
                  "Pumps: centrifugal non-clog, pass 75 mm solids; 2-3 pumps (duty + standby + assist).",
                  "Wet well volume V = (T x Q) / 4, T = cycle time, Q = pump discharge.",
                  "Substitute: T = 10 min = 600 s, Q = 50 L/s = 0.05 m3/s.",
                  "V = (600 x 0.05) / 4 = 7.5 m3 between start and stop levels.",
                  "Add standby pump capacity; provide submersible pumps on guide rails for easy removal.",
                  "Rising main velocity 0.75-1.5 m/s; air valves at highs, scour at lows, thrust blocks at bends.",
                ],
              },
              {
                q: "Why is the rising main velocity kept between 0.75 and 1.5 m/s?",
                marks: 3,
              },
              {
                q: "State the cycle-time formula for a wet well.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Wastewater Treatment",
      summary:
        "Treating the collected sewage to a quality safe for discharge: characteristics of sewage with BOD and COD, primary treatment by screens grit chamber and sedimentation, secondary biological treatment by trickling filters and activated sludge, oxidation ponds for natural treatment, and sludge treatment and disposal.",
      chapter: {
        number: "05",
        title: "Wastewater Treatment",
        intro:
          "Unit V closes the cycle: the characteristics of sewage measured by BOD, COD, suspended solids and coliforms; primary treatment that removes settleable solids by screens, grit chamber and primary sedimentation; secondary biological treatment by trickling filters and activated sludge that consumes the dissolved organics; oxidation ponds that use algae and sunlight; and sludge treatment by thickening, digestion and dewatering before disposal.",
        inOneBreath:
          "Sewage has BOD 200-400 mg/L (5-day 20 deg C), COD 400-800 mg/L, SS 300-600 mg/L, total coliforms 10^7 to 10^9 per 100 mL; primary treatment removes 30-40 per cent BOD and 60 per cent SS by screens, grit chamber (0.3 m/s, 0.2 m detention) and primary sedimentation (1.5-2.5 h, SOR 30-50 m3/m2/d); secondary biological treatment by trickling filter (1-2 m media, 1-4 m3/m2/d BOD loading) or activated sludge (4-8 h aeration, F/M 0.2-0.5, MLSS 1500-3000 mg/L, return sludge 25-50 per cent) removes 85-95 per cent BOD; oxidation ponds (1-1.5 m deep, 100-200 kg BOD/ha/d) suit small communities; sludge is thickened (4-6 per cent), digested (mesophilic 35 deg C, 30 days) and dewatered for disposal.",
        sections: [
          {
            number: "5.1",
            title: "Characteristics of sewage - BOD and COD",
            body: [
              "Sewage is the spent water of a community, carrying the organic and inorganic residues of domestic and industrial life. Its characteristics are expressed as physical (colour, odour, temperature, turbidity), chemical (pH, dissolved solids, chlorides, nitrogen, phosphorus), and bacteriological (total coliforms, E. coli). The most important chemical measures are the Biochemical Oxygen Demand (BOD) - the oxygen consumed by aerobic bacteria decomposing the organic matter over five days at 20 deg C - and the Chemical Oxygen Demand (COD) - the oxygen equivalent of the organic matter oxidised by a strong chemical (potassium dichromate) in acid. BOD reflects the biodegradable fraction; COD captures both biodegradable and refractory organics, so COD is always greater than BOD.",
              "The BOD test measures the dissolved oxygen (DO) of a sample before and after 5 days of incubation at 20 deg C in the dark. The first-order kinetics of BOD exertion are BOD_t = L0 (1 - 10^(-k1 t)), where L0 is the ultimate carbonaceous BOD, k1 the deoxygenation constant (typically 0.1 per day at 20 deg C for domestic sewage) and t is time. The 5-day BOD (BOD5) is about 68 per cent of the ultimate BOD. Domestic sewage has BOD5 of 200 to 400 mg/L, COD of 400 to 800 mg/L, suspended solids of 300 to 600 mg/L, and total coliforms of 10 million to one billion per 100 mL. The ratio COD / BOD is 1.5 to 3 for domestic sewage; a ratio above 3 suggests industrial discharge with refractory organics that resist biological treatment.",
              "BOD is the parameter that drives the design of every biological treatment unit: trickling filters, activated sludge and oxidation ponds are all sized on BOD loading. The test is slow (5 days) and has high variance; the COD test is fast (2 hours) and reproducible, and is used for plant control. The Indian Standard for discharge to inland surface waters (IS 2490) caps BOD at 30 mg/L for non-coastal waters and 100 mg/L for marine outfalls; the CPCB discharge standard for irrigation is 100 mg/L BOD. The DO of the receiving water must not drop below 4 mg/L (and not below 6 mg/L where fish propagation is intended), or the stream becomes septic.",
            ],
            bullets: [
              "BOD: oxygen consumed by aerobic bacteria in 5 days at 20 deg C; domestic sewage 200-400 mg/L.",
              "COD: oxygen equivalent of organics oxidised by K2Cr2O7 in acid; always >= BOD; 400-800 mg/L.",
              "BOD kinetics: BOD_t = L0 (1 - 10^(-k1 t)); k1 ≈ 0.1/day at 20 deg C; BOD5 ≈ 0.68 L0.",
              "COD / BOD ratio 1.5-3 domestic; above 3 suggests industrial refractory organics.",
              "IS 2490 discharge: BOD <= 30 mg/L (inland), <= 100 mg/L (marine outfall); DO >= 4 mg/L receiving.",
              "Total coliforms 10^7 to 10^9 per 100 mL in raw sewage - the parameter for disinfection.",
            ],
            codeExample: {
              language: "python",
              caption: "BOD and COD from a 5-day DO depletion test.",
              code: [
                "# Standard BOD5 test - depletion method",
                "# Sample: domestic sewage, diluted 1:100 with seeded dilution water",
                "D1 = 8.2   # DO of diluted sample on day 1, mg/L",
                "D2 = 4.0   # DO of diluted sample on day 5, mg/L",
                "B1 = 8.4   # DO of seeded blank on day 1",
                "B2 = 8.0   # DO of seeded blank on day 5",
                "P = 0.01   # sample fraction (1:100 dilution)",
                "",
                "# BOD5 = (D1 - D2) - (B1 - B2) x (1 - P)) / P",
                "seed_corr = (B1 - B2) * (1 - P)",
                "BOD5 = ((D1 - D2) - seed_corr) / P",
                "print(f'BOD5 = {BOD5:.1f} mg/L')   # expect ~ 376 mg/L",
                "",
                "# COD test - dichromate titration",
                "# FAS titrant normality and volumes",
                "N = 0.1            # N of FAS titrant",
                "V_blank = 25.0     # mL FAS for blank",
                "V_sample = 15.0    # mL FAS for digested sample",
                "V_sample_w = 20.0  # mL of original sample digested",
                "COD = (V_blank - V_sample) * N * 8000 / V_sample_w",
                "print(f'COD  = {COD:.1f} mg/L')   # expect ~ 400 mg/L",
                "",
                "# COD / BOD ratio and treatability flag",
                "ratio = COD / BOD5",
                "print(f'COD/BOD = {ratio:.2f}', '- biodegradable' if ratio < 3 else '- refractory')"
              ].join("\n"),
            },
            diagram: {
              kind: "flow",
              title: "BOD exertion over time and treatment thresholds",
              caption:
                "BOD_t = L0 (1 - 10^(-k1 t)) drives every biological unit; 5-day value is the design number.",
              steps: [
                { label: "Day 0: ultimate BOD L0 = BOD5 / 0.68", note: "≈ 350 to 600 mg/L domestic" },
                { label: "Day 1: BOD1 = L0 (1 - 10^(-0.1))", note: "≈ 0.21 L0" },
                { label: "Day 5: BOD5 ≈ 0.68 L0", note: "design parameter" },
                { label: "Day 20: BOD20 ≈ 0.99 L0", note: "near ultimate" },
                { label: "Discharge threshold: 30 mg/L", note: "IS 2490 inland surface water" },
              ],
            },
            callout: {
              type: "exam",
              title: "Carry the BOD kinetics equation",
              body: "RGPV expects the first-order BOD equation BOD_t = L0 (1 - 10^(-k1 t)) in any BOD question. State k1 ≈ 0.1 per day at 20 deg C, note that BOD5 ≈ 0.68 of the ultimate, and compute L0 from BOD5 before sizing any biological unit. Without the equation the calculation earns no method marks.",
            },
            keyTerms: [
              { term: "Biochemical Oxygen Demand (BOD)", definition: "Oxygen consumed by aerobic bacteria decomposing organic matter in a sample over 5 days at 20 deg C." },
              { term: "Chemical Oxygen Demand (COD)", definition: "Oxygen equivalent of the organic matter oxidised by potassium dichromate in acid; always >= BOD." },
              { term: "Ultimate BOD (L0)", definition: "The total carbonaceous oxygen demand exerted as t -> infinity; BOD5 is about 0.68 of L0 at k1 = 0.1." },
            ],
            examQuestions: [
              {
                q: "Define BOD and COD. State the first-order BOD kinetics and compute the 5-day BOD of a domestic sewage sample with ultimate BOD 500 mg/L and k1 = 0.1 per day at 20 deg C. Comment on its treatability.",
                marks: 7,
                outline: [
                  "Define BOD: oxygen consumed by aerobic bacteria over 5 days at 20 deg C.",
                  "Define COD: oxygen equivalent of organics oxidised by K2Cr2O7 in acid; always >= BOD.",
                  "State BOD_t = L0 (1 - 10^(-k1 t)); k1 ≈ 0.1/day at 20 deg C.",
                  "Substitute: BOD5 = 500 (1 - 10^(-0.5)) = 500 (1 - 0.316) = 500 x 0.684 = 342 mg/L.",
                  "Confirm BOD5 ≈ 0.68 L0; the value is typical of domestic sewage (200-400 mg/L).",
                  "Treatability: COD/BOD ratio 1.5-3 (domestic) means biodegradable; above 3 indicates refractory organics.",
                  "IS 2490 discharge cap: 30 mg/L (inland), 100 mg/L (irrigation) - both need biological treatment.",
                ],
              },
              {
                q: "Why is COD always greater than or equal to BOD?",
                marks: 3,
              },
              {
                q: "State the BOD5 value of typical domestic sewage.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Primary treatment - screens, grit chamber, sedimentation",
            body: [
              "Primary treatment removes the suspended and settleable solids from raw sewage by physical operations - no biological action. The train begins with screens: coarse bar screens of 50 to 100 mm spacing followed by fine screens of 6 to 25 mm spacing, both mechanically raked, that remove rags, plastics and floating matter that would damage downstream pumps and tanks. Screenings are typically 0.005 to 0.02 m3 per m3 of sewage; they are dewatered, then landfilled or incinerated. Comminutors, an alternative to fine screens, shred the screenings in place so they pass through with the flow.",
              "Grit chambers follow the screens. They remove the inorganic grit - sand, cinders, eggshells - that would otherwise abrade pumps and accumulate in digesters. A grit chamber is a long, narrow channel or aerated tank sized so that the velocity is held at 0.3 m/s - the velocity at which organic matter remains in suspension while grit settles. Detention is 30 to 60 seconds in a flow-through channel; aerated grit chambers (1 to 3 minutes detention) keep organic matter in suspension by the air, while grit settles. The settled grit is scraped or airlifted to a grit washer, dewatered and landfilled. The settled grit is 0.0005 to 0.005 m3 per m3 of sewage.",
              "Primary sedimentation removes the settleable organic solids - about 50 to 60 per cent of suspended solids and 30 to 40 per cent of BOD - as primary sludge. The tank is rectangular or circular, 3 to 5 m deep, with a detention of 1.5 to 2.5 hours and a surface overflow rate of 30 to 50 m3/m2/day for domestic sewage. Sludge is collected in a hopper at the inlet end of a rectangular tank or at the centre of a circular tank by a mechanical scraper, and pumped to the sludge digestion unit at 4 to 6 per cent solids. The settled sewage overflows a peripheral or end weir to the secondary treatment. Skimming removes scum and grease from the surface. Primary sedimentation alone reduces BOD by about 35 per cent, leaving 130 to 260 mg/L for the biological stage to consume.",
            ],
            bullets: [
              "Primary train: coarse bar screen (50-100 mm), fine screen (6-25 mm), grit chamber, primary sedimentation.",
              "Grit chamber velocity 0.3 m/s - inorganic grit settles, organic stays in suspension.",
              "Grit chamber detention: 30-60 s flow-through; 1-3 min aerated.",
              "Primary sedimentation: 1.5-2.5 h detention, SOR 30-50 m3/m2/day, depth 3-5 m.",
              "Removes 50-60 per cent SS, 30-40 per cent BOD; primary sludge 4-6 per cent solids.",
              "Comminutor alternative to fine screen: shreds screenings in place to pass downstream.",
            ],
            table: {
              caption: "Primary treatment units and their design numbers.",
              headers: ["Unit", "Detention / velocity", "Removal"],
              rows: [
                ["Coarse bar screen", "velocity 0.6-1.0 m/s", "rags, floating matter"],
                ["Fine screen", "velocity 0.4-0.6 m/s", "small solids 6-25 mm"],
                ["Grit chamber", "0.3 m/s, 30-60 s detention", "inorganic grit"],
                ["Aerated grit chamber", "1-3 min detention", "grit + keeps organics in suspension"],
                ["Primary sedimentation", "1.5-2.5 h, SOR 30-50 m3/m2/d", "50-60 per cent SS, 30-40 per cent BOD"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Primary treatment train",
              caption:
                "Six stages, all physical, that strip suspended and settleable solids before biology begins.",
              stages: [
                { label: "Raw sewage enters", note: "BOD 200-400 mg/L" },
                { label: "Coarse bar screen", note: "remove floating matter" },
                { label: "Fine screen / comminutor", note: "shred small solids" },
                { label: "Grit chamber", note: "0.3 m/s, settle inorganic grit" },
                { label: "Primary sedimentation", note: "1.5-2.5 h, settle organic solids" },
                { label: "Settled sewage to secondary", note: "BOD 130-260 mg/L" },
              ],
            },
            callout: {
              type: "warning",
              title: "Grit chamber velocity must be 0.3 m/s, not 'any low velocity'",
              body: "A common design slip is sizing the grit chamber for a velocity below 0.3 m/s, which allows organic solids to settle and contaminate the grit with putrescible matter. The 0.3 m/s value is critical: inorganic grit settles, organic matter stays in suspension. A parabolic flume or proportional weir holds the velocity at 0.3 m/s across the flow range.",
            },
            keyTerms: [
              { term: "Grit chamber", definition: "A tank or channel sized to hold the velocity at 0.3 m/s so inorganic grit settles while organic matter stays suspended." },
              { term: "Primary sedimentation", definition: "Gravity settling of organic suspended solids in 1.5-2.5 h, removing 30-40 per cent BOD and 50-60 per cent SS." },
              { term: "Comminutor", definition: "A shredding device that cuts screenings in place so they pass with the flow, an alternative to fine screens." },
            ],
            examQuestions: [
              {
                q: "Describe the units of primary treatment of sewage with their design parameters. Compute the surface overflow rate of a primary sedimentation tank for a flow of 5 MLD with diameter 20 m.",
                marks: 7,
                outline: [
                  "Train: coarse bar screen, fine screen / comminutor, grit chamber, primary sedimentation.",
                  "Bar screen: 50-100 mm spacing; fine screen 6-25 mm; both mechanically raked.",
                  "Grit chamber: velocity 0.3 m/s, detention 30-60 s (flow-through) or 1-3 min (aerated).",
                  "Primary sedimentation: 1.5-2.5 h detention, SOR 30-50 m3/m2/day, depth 3-5 m.",
                  "Area of circular tank = pi D^2 / 4 = 3.1416 x 400 / 4 = 314.16 m2.",
                  "SOR = Q / A = 5,000,000 / 314.16 / 86400 x 1000 = 0.184 m/h = 4.4 m/d; for design compare m3/m2/day.",
                  "SOR in m3/m2/day = 5,000,000 / 314.16 = 15.9 m3/m2/day - below the design range, hence the tank is over-sized; revise diameter downward to 14 m for SOR ≈ 32 m3/m2/day.",
                ],
              },
              {
                q: "Why is the velocity in a grit chamber held at 0.3 m/s?",
                marks: 3,
              },
              {
                q: "State the detention and SOR of a primary sedimentation tank.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Secondary treatment - trickling filters and activated sludge",
            body: [
              "Secondary treatment removes the dissolved and colloidal organic matter that primary sedimentation leaves behind, by the action of aerobic micro-organisms. Two biological processes dominate. The trickling filter is an attached-growth (biofilm) process: settled sewage trickles over a bed of stone or plastic media 1 to 2 m deep, and a biological film of bacteria, protozoa and fungi growing on the media oxidises the organic matter to CO2, water and new cells. The filter effluent passes through a secondary sedimentation tank (humus tank) that settles the sloughed biofilm as humus sludge; the treated effluent overflows for disinfection. Trickling filters are sized at a BOD loading of 100 to 400 g/m3/day (low-rate) or up to 1800 g/m3/day (high-rate).",
              "The activated sludge process is a suspended-growth process: settled sewage is mixed with a culture of aerobic bacteria (the mixed liquor suspended solids, MLSS, 1500 to 3000 mg/L) in an aeration tank for 4 to 8 hours, with air supplied by diffusers or mechanical aerators at 1 to 2 m3 air per m3 of sewage. The bacteria oxidise the organic matter to CO2, water and new cells; the mixture flows to a secondary clarifier where the activated sludge settles and is returned to the aeration tank inlet (return activated sludge, 25 to 50 per cent of inflow) to maintain the culture. Excess sludge (waste activated sludge) is drawn off for digestion. Design is by the food-to-microorganism ratio F/M = (Q S0) / (V X), with F/M = 0.2 to 0.5 for conventional activated sludge and 0.5 to 1.5 for high-rate.",
              "Both processes remove 85 to 95 per cent of BOD; the activated sludge process achieves the higher removal and the lower effluent BOD (under 20 mg/L) but demands continuous power for aeration and skilled operator attention. The trickling filter is robust to load variations and power cuts, with low operating cost but a larger footprint. Modifications of the activated sludge process are extended aeration (24 h detention, F/M 0.05-0.1, for small communities with no primary treatment), oxidation ditch (a looped aeration channel with rotor aerators), sequential batch reactor (one tank for aeration and settling in time sequence), and membrane bioreactor (activated sludge with membrane filtration, no secondary clarifier). Trickling filter modifications include high-rate, two-stage, and roughing filters ahead of activated sludge for high-strength industrial waste.",
            ],
            bullets: [
              "Trickling filter: attached growth on stone/plastic media 1-2 m deep; BOD loading 100-400 g/m3/day low-rate.",
              "Activated sludge: suspended growth in aeration tank 4-8 h, MLSS 1500-3000 mg/L, return sludge 25-50 per cent.",
              "F/M ratio = (Q S0) / (V X); 0.2-0.5 conventional, 0.5-1.5 high-rate, 0.05-0.1 extended aeration.",
              "Air supply: 1-2 m3 air per m3 sewage; diffusers or mechanical aerators.",
              "Both remove 85-95 per cent BOD; activated sludge lower effluent but higher power and skill.",
              "Modifications: extended aeration, oxidation ditch, SBR, MBR (activated sludge); high-rate, two-stage (trickling).",
            ],
            table: {
              caption: "Trickling filter vs activated sludge comparison.",
              headers: ["Parameter", "Trickling filter", "Activated sludge"],
              rows: [
                ["Growth type", "attached (biofilm)", "suspended (MLSS)"],
                ["BOD loading", "100-1800 g/m3/day", "F/M 0.2-1.5"],
                ["Aeration power", "natural / low", "high (1-2 m3 air/m3)"],
                ["Footprint", "large", "small"],
                ["Operator skill", "low", "high"],
                ["BOD removal", "85-90 per cent", "90-95 per cent"],
                ["Effluent BOD", "20-30 mg/L", "10-20 mg/L"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Attached-growth vs suspended-growth biology",
              caption:
                "Two routes to the same end - both consume the dissolved BOD aerobically.",
              left: {
                heading: "Trickling filter",
                items: [
                  "Biofilm on stone or plastic media",
                  "Settled sewage trickles over",
                  "Oxygen from natural draught",
                  "Humus sludge from secondary clarifier",
                  "Low power, robust to load swings",
                ],
              },
              right: {
                heading: "Activated sludge",
                items: [
                  "MLSS suspended in aeration tank",
                  "Settled sewage mixed with culture",
                  "Oxygen from diffusers or aerators",
                  "Return sludge and waste sludge",
                  "High power, demands operator skill",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "State F/M ratio when sizing an aeration tank",
              body: "The food-to-microorganism ratio F/M = (Q S0) / (V X) is the central design parameter for activated sludge. Always state it before computing the tank volume: F/M = 0.3 conventional, V = (Q S0) / (F/M x X). Without F/M, the volume calculation has no theoretical anchor and earns no method marks.",
            },
            keyTerms: [
              { term: "Trickling filter", definition: "An attached-growth biological reactor in which settled sewage trickles over a bed of stone or plastic media coated with a biofilm that oxidises BOD." },
              { term: "Activated sludge", definition: "A suspended-growth biological reactor in which settled sewage is mixed with a culture of aerobic bacteria (MLSS) in an aeration tank." },
              { term: "F/M ratio", definition: "Food-to-microorganism ratio = (Q S0) / (V X), the loading parameter of activated sludge; 0.2 to 0.5 for conventional plants." },
            ],
            examQuestions: [
              {
                q: "Compare trickling filter and activated sludge processes. Design the aeration tank volume for an activated sludge plant treating 5 MLD of settled sewage with influent BOD 250 mg/L, MLSS 2500 mg/L and F/M = 0.3.",
                marks: 7,
                outline: [
                  "Tabulate growth type, BOD loading, power, footprint, skill, BOD removal.",
                  "State the F/M formula: F/M = (Q x S0) / (V x X).",
                  "Substitute Q = 5e6 / 86400 = 0.579 m3/s -> use daily Q = 5000 m3/d.",
                  "Daily BOD load = Q x S0 = 5000 x 250 / 1000 = 1250 kg BOD/day.",
                  "V = (Q x S0) / (F/M x X) = 1250 / (0.3 x 2500 / 1000) = 1250 / 0.75 = 1667 m3.",
                  "Detention t = V / Q = 1667 / (5000 / 24) = 8.0 h (within the 4-8 h band).",
                  "Air supply: 1-2 m3 air per m3 sewage -> 5000 to 10000 m3 air per day.",
                ],
              },
              {
                q: "Define MLSS and return activated sludge.",
                marks: 3,
              },
              {
                q: "State the F/M ratio for conventional activated sludge.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Oxidation ponds and natural treatment",
            body: [
              "An oxidation pond, also called a waste stabilisation pond, is a shallow basin 1 to 1.5 m deep in which sewage is treated by natural processes - sunlight, algae, bacteria and wind - without mechanical aeration. The algae use sunlight to photosynthesise oxygen from CO2; the aerobic bacteria use this oxygen to oxidise the incoming BOD; the bacterial CO2 feeds the algae in a symbiotic cycle. The pond is sized at a BOD loading of 100 to 200 kg per hectare per day and a detention of 20 to 30 days; an aerobic pond keeps oxygen throughout the depth, while a facultative pond has an aerobic top layer and an anaerobic bottom where settled solids are digested.",
              "Facultative ponds are the most common, with a depth of 1 to 1.5 m, detention 20 to 30 days, and BOD loading 100 to 200 kg/ha/day for tropical climates. The green tint of the water indicates the algal population. Anaerobic ponds are deeper (2.5 to 4 m) and loaded at 200 to 500 kg BOD/ha/day; they have no algae, no dissolved oxygen, and rely on anaerobic bacteria to acidify and then methanise the organic matter, releasing methane and CO2. They are used as the first stage in series for high-strength industrial waste or for hot climates where methane recovery is feasible. Maturation ponds follow facultative ponds in series, mainly for pathogen (coliform) removal through sunlight UV, with detention 5 to 10 days.",
              "Oxidation ponds suit small to medium communities (under 50,000 population) where land is cheap and the climate is warm - conditions met across much of India. Their capital cost is the lowest of any secondary treatment (mostly earthwork and embankment), and operating cost is minimal (no power for aeration, no skilled operator). Removal is 80 to 90 per cent BOD and 95 to 99 per cent coliforms in a 3-pond series of 30 to 50 days total detention. The chief drawback is the land area: a town of 10,000 at 135 lpcd needs about 1.5 to 2 hectares of pond, often the largest single land use of the treatment works. The effluent carries algae that may clog irrigation emitters; harvesting or maturation pond design mitigates this. Constructed wetlands with reeds (Phragmites) extend the natural treatment concept for polishing after activated sludge.",
            ],
            bullets: [
              "Oxidation pond: 1-1.5 m deep, symbiotic algae-bacteria cycle, no mechanical aeration.",
              "BOD loading: 100-200 kg/ha/day facultative; 200-500 anaerobic; 20-30 days detention.",
              "Facultative pond: aerobic top + anaerobic bottom; most common design.",
              "Anaerobic pond: 2.5-4 m deep, methanogenic, used for high-strength industrial waste.",
              "Maturation pond: 5-10 days, pathogen removal by UV - coliform kill 95-99 per cent.",
              "Land: 1.5-2 ha for 10,000 people; lowest capital and operating cost of any secondary treatment.",
            ],
            table: {
              caption: "Pond types in a stabilisation series.",
              headers: ["Pond type", "Depth (m)", "Detention (d)", "BOD loading", "Purpose"],
              rows: [
                ["Anaerobic", "2.5-4.0", "1-5", "200-500 kg/ha/d", "high-strength pretreatment"],
                ["Facultative", "1.0-1.5", "20-30", "100-200 kg/ha/d", "BOD removal"],
                ["Maturation", "1.0-1.5", "5-10", "low", "coliform / pathogen removal"],
                ["Series of 3", "-", "30-50", "-", "BOD 80-90 per cent, coliform 95-99 per cent"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Algae-bacteria symbiosis in an oxidation pond",
              caption:
                "Sunlight drives the cycle - algae give O2 to bacteria, bacteria give CO2 to algae.",
              steps: [
                { label: "Sunlight on algae", note: "photosynthesis" },
                { label: "Algae release O2", note: "into the aerobic top layer" },
                { label: "Aerobic bacteria oxidise BOD", note: "consume the O2" },
                { label: "Bacteria release CO2", note: "and new biomass" },
                { label: "Algae use CO2", note: "more photosynthesis" },
                { label: "Settled solids anaerobic", note: "methanogenesis at the bottom" },
              ],
            },
            callout: {
              type: "tip",
              title: "Series of ponds beats a single large one",
              body: "A single facultative pond of 30 days detention performs worse than three ponds in series (anaerobic, facultative, maturation) of 10 days each. The series increases the coliform kill by an order of magnitude per pond and prevents short-circuiting. Always specify a series when land allows.",
            },
            keyTerms: [
              { term: "Oxidation pond", definition: "A shallow basin (1-1.5 m) in which algae and bacteria treat sewage symbiotically under sunlight without mechanical aeration." },
              { term: "Facultative pond", definition: "A pond with an aerobic top layer sustained by algae and an anaerobic bottom where settled solids are digested." },
              { term: "Maturation pond", definition: "A polishing pond after facultative treatment that removes pathogens by ultraviolet sunlight." },
            ],
            examQuestions: [
              {
                q: "Explain the working of an oxidation pond with a sketch. State the design parameters of a facultative pond and size the area for a town of 10,000 population at 135 lpcd with BOD loading 150 kg/ha/day.",
                marks: 7,
                outline: [
                  "Sketch a facultative pond: aerobic top with algae, anaerobic bottom with sludge.",
                  "State the symbiotic cycle: algae photosynthesise O2; bacteria use it to oxidise BOD and release CO2.",
                  "Design parameters: depth 1-1.5 m, detention 20-30 days, BOD loading 100-200 kg/ha/day.",
                  "Daily BOD load = 10,000 x 135 lpcd x 80 per cent returned x 0.27 g/L BOD ≈ 292 kg/d.",
                  "Use cleaner figure: BOD load = population x per capita BOD x 0.001 = 10000 x 0.040 kg/d = 400 kg/d; for 150 kg/ha/d loading, area = 400 / 150 = 2.67 ha.",
                  "Provide as series of 3 ponds (anaerobic, facultative, maturation) for 80-90 per cent BOD and 95-99 per cent coliform removal.",
                  "Note that oxidation ponds suit warm climates with cheap land and small to medium communities.",
                ],
              },
              {
                q: "What is the difference between facultative and anaerobic ponds?",
                marks: 3,
              },
              {
                q: "State the BOD loading for a facultative oxidation pond.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Sludge treatment and disposal",
            body: [
              "Sludge is the concentrated solids removed from primary sedimentation (primary sludge, 4 to 6 per cent solids) and from the secondary clarifier of biological treatment (secondary sludge, 0.5 to 1.5 per cent solids for activated sludge, 4 to 6 per cent for trickling filter humus). The volume of sludge is 1 to 2 per cent of the treated sewage volume but contains most of the pollutants removed. The sludge treatment train thickens, digests, dewateres and disposes of this sludge, with the dual aims of reducing volume and stabilising the organic matter. The four operations are thickening (gravity or dissolved-air flotation), digestion (anaerobic or aerobic), dewatering (centrifuge, belt press, drying beds) and disposal (land, landfill, incineration, agricultural use).",
              "Thickening reduces the water content and the volume. Gravity thickening in a circular tank at 0.5 to 1 m3/m2/h concentrates primary sludge from 1 to 4 per cent solids; dissolved-air flotation concentrates waste activated sludge from 0.5 to 4 per cent by attaching fine air bubbles to the floc. Anaerobic digestion is the heart of the train: a heated (mesophilic 35 deg C or thermophilic 55 deg C) closed tank of 20 to 30 days detention in which acid-forming bacteria hydrolyse the organics to volatile acids and methanogenic archaea convert them to biogas (60 to 70 per cent methane, 30 to 40 per cent CO2). The biogas is used for digester heating, electricity generation, or flared; the digested sludge is stabilised - it no longer putrefies - and is dewatered.",
              "Dewatering lifts the solids to 20 to 35 per cent for landfill or land application. Drying beds (sand and gravel underdrains) give 30 to 40 per cent solids in 10 to 20 days of dry climate; belt filter presses (mechanical pressure between two belts) give 15 to 25 per cent at high throughput; centrifuges (decanters) give 20 to 30 per cent. Disposal options are agricultural use (digested sludge as soil conditioner on non-food crops, with metal limits), landfill (co-disposal with municipal solid waste), incineration (for high-organic, low-metal sludge, with heat recovery) and dedicated land disposal (surface spreading on dedicated sites). The choice balances nutrient value, metal content, pathogen level, distance to land, and cost. The end-product of a well-run plant is a stabilised, dewatered cake safe for agriculture or landfill.",
            ],
            bullets: [
              "Primary sludge 4-6 per cent solids; waste activated sludge 0.5-1.5 per cent; humus 4-6 per cent.",
              "Sludge volume 1-2 per cent of treated sewage but carries most of the removed pollutants.",
              "Thickening: gravity (0.5-1 m3/m2/h) or DAF; concentrates primary to 4 per cent, WAS to 4 per cent.",
              "Anaerobic digestion: 20-30 days at 35 deg C (mesophilic) or 55 deg C (thermophilic); biogas 60-70 per cent CH4.",
              "Dewatering: drying beds 30-40 per cent, belt press 15-25 per cent, centrifuge 20-30 per cent solids.",
              "Disposal: agricultural use (metal limits), landfill, incineration (with heat recovery), dedicated land.",
            ],
            table: {
              caption: "Sludge treatment operations and their outputs.",
              headers: ["Operation", "Equipment", "Input solids", "Output solids"],
              rows: [
                ["Thickening", "gravity tank / DAF", "1 per cent", "4-6 per cent"],
                ["Digestion", "anaerobic heated digester", "4-6 per cent", "4-6 per cent (stabilised)"],
                ["Dewatering", "drying bed / belt press / centrifuge", "4-6 per cent", "20-35 per cent"],
                ["Disposal", "land / landfill / incinerator", "20-35 per cent", "soil amendment or ash"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Sludge volume shrinks as solids rise",
              caption:
                "Each tier of treatment lifts the solids content and cuts the volume to handle.",
              tiers: [
                { label: "Waste activated sludge", note: "0.5-1.5 per cent solids - large volume" },
                { label: "Thickened sludge", note: "4-6 per cent solids" },
                { label: "Digested sludge", note: "4-6 per cent, stabilised, biogas off-gassed" },
                { label: "Dewatered cake", note: "20-35 per cent - ready for disposal" },
              ],
            },
            callout: {
              type: "exam",
              title: "State mesophilic temperature and detention for digestion",
              body: "RGPV expects two numbers in any sludge digestion question: the mesophilic temperature of 35 deg C and the detention of 20 to 30 days. Without them, the design of the digester has no anchor. Also state the biogas yield (60 to 70 per cent methane) and its use for digester heating and electricity - the energy-recovery angle is one of the marks.",
            },
            keyTerms: [
              { term: "Sludge thickening", definition: "Gravity or flotation concentration of sludge from 1 to 4-6 per cent solids to reduce the volume downstream." },
              { term: "Anaerobic digestion", definition: "Heated (35 deg C mesophilic) closed-tank biological process that converts sludge organics to biogas (60-70 per cent methane) and stabilised residue." },
              { term: "Dewatering", definition: "Mechanical or gravity removal of water to lift sludge solids to 20-35 per cent for disposal." },
            ],
            examQuestions: [
              {
                q: "Describe the sludge treatment train. State the design parameters of anaerobic digestion and compute the digester volume for a plant producing 500 kg/d of dry solids thickened to 5 per cent.",
                marks: 7,
                outline: [
                  "Train: thickening -> digestion -> dewatering -> disposal.",
                  "Thickening: gravity or DAF to 4-6 per cent solids; digestion: 20-30 d at 35 deg C.",
                  "Biogas: 60-70 per cent methane; used for digester heating and power.",
                  "Dewatering: drying bed / belt press / centrifuge to 20-35 per cent solids.",
                  "Sludge volume at 5 per cent solids: V = 500 / 0.05 = 10,000 L = 10 m3/day.",
                  "Digester volume = 10 m3/d x 25 days detention = 250 m3 (single-stage mesophilic).",
                  "Provide a primary and secondary digester pair; capture biogas for heating.",
                ],
              },
              {
                q: "State the four sludge disposal options and the metal concern for agricultural use.",
                marks: 3,
              },
              {
                q: "What is the methane content of digester biogas?",
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
        "RGPV CE-602 papers typically spread 70 to 80 of the marks across water treatment (Unit II), distribution and Hardy Cross (Unit III), and wastewater treatment with BOD kinetics (Unit V), with water supply (Unit I) and sewerage (Unit IV) supplying the definitional and design short questions. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Water treatment train: screening, sedimentation, coagulation, filtration, disinfection", weight: "12-16 marks", note: "Sketch the train, quote Stokes / Manning / alum hydrolysis, then numbers." },
        { topic: "Hardy Cross method of network analysis with one iteration", weight: "10-14 marks", note: "Sign convention, h = r Q^n, dQ = -sum h / (n sum h/Q); practise a 4-pipe loop." },
        { topic: "BOD kinetics and BOD5 calculation; activated sludge / trickling filter design", weight: "10-14 marks", note: "BOD_t = L0 (1 - 10^(-k1 t)); F/M ratio for sizing the aeration tank." },
        { topic: "Sewer design by Manning's equation at self-cleansing velocity", weight: "8-10 marks", note: "Min V 0.6 m/s at min flow; d/D 0.5-0.7 at design; B.J. tables." },
        { topic: "Population forecasting - arithmetic, geometric, incremental, logistic", weight: "6-8 marks", note: "State design period first; carry n in decades." },
        { topic: "Water demand components, IS 1172, fire demand (Kuichling)", weight: "6-8 marks", note: "Apply peak factor; compute peak hourly plus fire." },
        { topic: "Intake structures, BIS 10500 limits", weight: "4-6 marks", note: "Sketch multi-port tower; quote turbidity, TDS, E. coli limits." },
        { topic: "Sludge treatment and anaerobic digestion", weight: "4-6 marks", note: "35 deg C mesophilic, 20-30 d detention, 60-70 per cent CH4." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - water supply", tasks: ["Water demand components, IS 1172, fire demand (Kuichling, Freeman)", "Population forecasting: arithmetic, geometric, incremental (2 examples each)", "Sources, intake structures, BIS 10500 limits"] },
        { week: "Week 2", focus: "Unit II - water treatment", tasks: ["Screening and aeration types; sedimentation theory and Stokes' law", "Coagulation-flocculation with jar test and alum hydrolysis", "Filtration: slow vs rapid sand; disinfection and break-point chlorination"] },
        { week: "Week 3", focus: "Unit III - distribution", tasks: ["Distribution layouts, pressure zones, residual pressures", "Service reservoirs and mass-curve balancing storage", "Hardy Cross method - 2 full iterations on 4-pipe loops"] },
        { week: "Week 4", focus: "Unit III + IV - network and sewerage", tasks: ["Network analysis software outputs; EPS and calibration", "Quantity of wastewater (80 per cent rule, infiltration, peak factor)", "Sewer design by Manning's equation; materials and joints"] },
        { week: "Week 5", focus: "Unit IV + V - appurtenances and treatment", tasks: ["Sewer appurtenances (manholes, drop manholes, inlets)", "Pumping stations: cycle-time formula and rising main sizing", "BOD / COD; primary treatment; trickling filter vs activated sludge"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Oxidation ponds and sludge digestion design numbers", "Revise all formulae: Stokes, Manning, Hardy Cross, BOD, F/M", "Two full past papers under time, with sketch practice"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Sketch every unit and tank before writing - RGPV awards 2 to 4 marks for a labelled diagram of a sedimentation tank, intake tower or manhole, even before the explanation.",
        "State the design period (30 years treatment, 50 years source) before any population forecast or sizing calculation - one mark rides on the period alone.",
        "Write the formula by name before substituting numbers: Stokes' law, Manning's equation, BOD_t = L0 (1 - 10^(-k1 t)), dQ = -sum h / (n x sum h/Q).",
        "Carry the units through the calculation: lpcd x population / 1e6 = MLD, m3/s = MLD x 1000 / 86400; lost unit conversions cost two to three marks per question.",
        "Hardy Cross: fix a clockwise positive sign convention at the top; sign slips lose more marks than arithmetic slips.",
        "Quote the BIS code number (BIS 10500 - 2012) the first time you cite the drinking water standard; later references may be short.",
        "Always state the verification step at the end of any design: check V at min flow for self-cleansing, check d/D at design flow, check residual pressure at the tap.",
        "Time-box: 2-3 mark shorts in 4-6 min, 7-mark questions in 14-18 min, last 10 min for the verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Forgetting the peak factor in demand sizing - average daily is never the design capacity.",
        "Using only the average rainfall, not the 75 per cent dependable yield, for source sizing.",
        "Skipping the contact time when stating a chlorine dose - CT value is the disinfection rule.",
        "Confusing the head loss exponent n between Hazen-Williams (1.852) and Manning (2) in Hardy Cross.",
        "Mixing the sign convention in Hardy Cross - clockwise positive must hold for both Q and h.",
        "Checking self-cleansing velocity at design flow, not at minimum (night) flow.",
        "Using the new-pipe roughness (C = 130) for an old cast iron main that has dropped to C = 100.",
        "Computing BOD5 as the ultimate BOD - the 5-day value is about 0.68 of L0 at k1 = 0.1.",
        "Sizing the grit chamber for a velocity below 0.3 m/s and contaminating the grit with organics.",
        "Forgetting to add infiltration (10-30 m3/km/day) to the dry-weather flow for sewer sizing.",
      ],
    },
  ],
};
