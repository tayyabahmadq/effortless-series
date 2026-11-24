/**
 * Academics - RGPV Civil Engineering 6th-semester subject: CE-603(A)
 * Water Resource Engineering.
 *
 * Structure mirrors the other RGPV subject files: 5 units -> one chapter
 * per unit -> 5 numbered sections per chapter (25 total).  Each section
 * carries 3 body paragraphs, 5+ bullets, a diagram, key terms, a callout,
 * a code sample (python) or a table, and three exam-style questions (one
 * 7-mark with outline + two shorts).  A separate studyPlan array drives
 * the per-subject "Guide Me" tab: exam-weighted topics, a six-week
 * schedule, last-day strategy, exam-hall tips, and common slips.
 */

import type { AcademicSubject } from "./types";

export const ce603a: AcademicSubject = {
  id: "ce-603-a",
  code: "CE-603(A)",
  title: "Water Resource Engineering",
  semester: "VI Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to water resource engineering for civil engineering: the hydrologic cycle and precipitation, runoff and the unit hydrograph, groundwater and well hydraulics, irrigation duty and efficiencies, and the dams, spillways and reservoirs that turn a river into a managed water supply.",
  description:
    "Five units walk from the hydrologic cycle and its water balance through the measurement of rainfall, evaporation and infiltration; into runoff and its controlling factors, the rainfall-runoff correlation, the storm hydrograph and the unit hydrograph plus the S-curve; below the surface to groundwater occurrence, aquifer classification, Darcy's law and steady radial flow to wells; across irrigated agriculture with its duty-delta-base period triangle and irrigation efficiencies; and finally to the structural side - classification of dams, gravity dam stability, earth dams and their failure modes, spillways and energy dissipators, and reservoir planning, sedimentation, head works and cross drainage works. Every section pairs the formal statement with a worked example, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#0ea5e9",
  emoji: "WR",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Hydrology Basics",
      summary:
        "The substrate of water-resource engineering: the hydrologic cycle and its water balance, the forms and measurement of precipitation, the loss paths of evaporation and transpiration, and the infiltration that partitions rainfall into soil moisture and surface runoff.",
      chapter: {
        number: "01",
        title: "Hydrology Basics",
        intro:
          "Unit I builds the vocabulary every later unit borrows: the hydrologic cycle and its water balance equation, the forms and measurement of precipitation by rain gauges averaged over a catchment, the loss paths of evaporation and transpiration estimated by pan and formula, and infiltration that partitions rainfall into soil moisture and surface runoff through Horton's decay.",
        inOneBreath:
          "The hydrologic cycle is the endless circulation of water driven by solar radiation and gravity, governed by the water balance P = E + R + change in storage; precipitation falls as rain, snow, sleet, hail or drizzle and is measured by non-recording and recording rain gauges whose point readings are averaged by arithmetic mean, Thiessen polygon or isohyetal methods; evaporation from pans and the Penman, Meyer and Blaney-Criddle equations plus transpiration combine as evapotranspiration with a pan coefficient of 0.6 to 0.8; and infiltration follows Horton's decay f(t) = fc + (f0 - fc) e^(-kt) with capacity falling toward a constant, or Philip's two-term equation f(t) = S/2 t^(-1/2) + A, measured by a double-ring infiltrometer that keeps flow vertical.",
        sections: [
          {
            number: "1.1",
            title: "Hydrologic cycle",
            body: [
              "Hydrology is the science that deals with the occurrence, distribution and movement of water on and below the surface of the earth and in the atmosphere. Its backbone is the hydrologic cycle, the endless circulation of water driven by solar radiation and gravity. Water evaporates from oceans, lakes and soils, rises as vapour, condenses into clouds, falls back as precipitation, runs off the land into streams, infiltrates into the soil and percolates to groundwater, and finally returns to the oceans where evaporation restarts the loop. Every component is measurable and every transfer carries a budget.",
              "The cycle is conventionally split into processes rather than stages because several operate simultaneously. Evaporation and transpiration lift water into the atmosphere; precipitation brings it back; interception by vegetation and depression storage hold part of it on the surface; infiltration moves it into the soil; percolation recharges groundwater; overland flow and interflow feed streams; and streamflow returns it to the sea. A water balance equation ties the pieces together: precipitation equals evaporation plus runoff plus change in storage. In any catchment the long-term average of storage change is near zero, so P approximately equals E plus R.",
              "Engineers use the cycle as the conceptual backbone of every water-resource project. A reservoir designer balances inflow (runoff) against evaporation loss and demand; an irrigation planner compares consumptive use against rainfall; a city hydrologist routes storm rainfall through infiltration and sewer flow. Mistaking one component for another - for example counting both rainfall and runoff without subtracting infiltration - double-credits the budget and inflates the design. The cycle also frames scale: a single storm is analysed in minutes, a water year in months, and a long-term yield study in decades, but the equation is the same.",
            ],
            bullets: [
              "Hydrology: science of occurrence, distribution and movement of water on, below and above the earth.",
              "Hydrologic cycle: endless water circulation powered by solar radiation and gravity.",
              "Seven processes: evaporation, transpiration, precipitation, interception, infiltration, percolation, runoff.",
              "Water balance: P = E + R + change in storage; long term, change in storage is near zero so P is about E + R.",
              "Evaporation and transpiration together form evapotranspiration, the atmospheric return path.",
              "Scale matters: a storm is minutes, a water year is months, a yield study is decades.",
              "Every water-resource project budgets one slice of the cycle.",
            ],
            table: {
              caption: "Processes of the hydrologic cycle and their store/reservoir.",
              headers: ["Process", "Direction", "Driven by", "Store"],
              rows: [
                ["Evaporation", "ocean/soil to atmosphere", "solar heat", "atmosphere"],
                ["Transpiration", "plants to atmosphere", "solar + biology", "atmosphere"],
                ["Precipitation", "atmosphere to land/sea", "gravity", "surface"],
                ["Infiltration", "surface to soil", "gravity + suction", "unsaturated zone"],
                ["Percolation", "soil to aquifer", "gravity", "groundwater"],
                ["Runoff", "land to streams to sea", "gravity", "oceans"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The hydrologic cycle as a closed loop",
              caption:
                "Solar energy and gravity power every arrow; the budget P = E + R + change in storage always closes.",
              steps: [
                { label: "Evaporation and transpiration", note: "vapour rises" },
                { label: "Condensation to clouds" },
                { label: "Precipitation" },
                { label: "Infiltration and percolation" },
                { label: "Runoff to streams to oceans" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Write the water-balance equation P = E + R + change in storage at the top of every hydrology answer, then name each term in the question. RGPV awards the equation marks separately from the worked numbers.",
            },
            keyTerms: [
              { term: "Hydrologic cycle", definition: "The endless circulation of water between atmosphere, land and sea driven by solar radiation and gravity." },
              { term: "Water balance", definition: "Equation P = E + R + change in storage that closes the budget for any catchment over any time." },
              { term: "Evapotranspiration", definition: "Combined loss of water as vapour from open water (evaporation) and from plants (transpiration)." },
            ],
            examQuestions: [
              {
                q: "Explain the hydrologic cycle with a neat sketch. State the water balance equation and describe each term, and apply it to a catchment of 2000 sq km with annual rainfall 100 cm, evapotranspiration 60 cm and no change in storage to estimate the average annual runoff.",
                marks: 7,
                outline: [
                  "Define hydrology and the hydrologic cycle, naming the driving forces: solar radiation and gravity.",
                  "List the processes: evaporation, transpiration, precipitation, interception, infiltration, percolation, runoff.",
                  "Draw the cycle sketch with arrows between atmosphere, land surface, soil and ocean.",
                  "State the water balance equation P = E + R + change in storage and define each term.",
                  "Substitute the numbers: P = 100 cm, E = 60 cm, change in storage = 0, so R = 40 cm.",
                  "Convert runoff depth to volume: 0.40 m x 2000 x 10^6 sq m = 8 x 10^8 cu m per year.",
                  "Conclude the catchment yields about 800 million cubic metres annually and discuss uncertainty in E measurement.",
                ],
              },
              {
                q: "Write the water balance equation and define each term.",
                marks: 2,
              },
              {
                q: "Name the seven major processes of the hydrologic cycle and state which two forces drive it.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Precipitation",
            body: [
              "Precipitation is all forms of water that fall from the atmosphere to the earth's surface - rain, snow, sleet, hail, drizzle and dew. It is the input term of the hydrologic budget and the principal source of freshwater on land. Precipitation forms when moist air rises, cools adiabatically to its dew point, condenses on nuclei into droplets or ice crystals, and grows by collision and coalescence until it is heavy enough to fall. The lifting mechanisms - convective, orographic, cyclonic or frontal - determine the intensity, duration and spatial extent of a storm.",
              "Precipitation is classified by its cause and by its form. Convective rain falls in short intense bursts from thunderstorms over a small area; orographic rain falls on the windward slope of a mountain range as air is forced upward; cyclonic or frontal rain accompanies the passage of a low-pressure system and covers a large area for many hours; and drizzle consists of fine droplets from stratus clouds. Snow contributes to the hydrologic budget through snowfall measurement and snowmelt routing, which is significant in Himalayan catchments where the bulk of annual yield arrives in spring and early summer.",
              "Engineers care about precipitation depth, intensity, duration, frequency and aerial distribution. A point measurement at a rain gauge is converted to an areal average by the arithmetic mean (when gauges are uniformly distributed), the Thiessen polygon method (weighted by polygon area) or the isohyetal method (contouring equal rainfall). Design storms for spillway capacity are derived from intensity-duration-frequency curves built from historic maxima. Getting precipitation right is the first and largest source of uncertainty in any hydrologic design, so the budget spent on gauge networks and radar is repaid in safer and cheaper structures.",
            ],
            bullets: [
              "Precipitation: all water falling from atmosphere - rain, snow, sleet, hail, drizzle, dew.",
              "Forms by lifting (convective, orographic, cyclonic, frontal), cooling, condensation, coalescence.",
              "Convective rain: short, intense, small area; orographic: windward slopes; cyclonic: large area, long duration.",
              "Measured as depth (cm or mm), intensity (mm/hr), duration (min or hr), frequency (return period).",
              "Areal averaging methods: arithmetic mean, Thiessen polygon, isohyetal.",
              "Design storms come from intensity-duration-frequency curves of historic maxima.",
              "Snowmelt routing is significant in Himalayan and snow-fed catchments.",
            ],
            table: {
              caption: "Forms of precipitation and their engineering significance.",
              headers: ["Form", "Droplet size", "Intensity", "Typical duration"],
              rows: [
                ["Drizzle", "< 0.5 mm", "low (< 1 mm/hr)", "hours"],
                ["Rain", "0.5 to 6 mm", "moderate to high", "minutes to hours"],
                ["Snow", "ice crystals", "variable", "hours"],
                ["Sleet", "ice + rain", "moderate", "short"],
                ["Hail", "> 5 mm ice", "very high briefly", "minutes"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Lifting mechanisms that produce precipitation",
              caption:
                "The mechanism of ascent fixes the intensity, duration and areal extent of a storm.",
              start: "Moist air mass",
              branches: [
                { label: "Convective", outcome: "Short intense thunderstorm over a small area", good: true },
                { label: "Orographic", outcome: "Persistent rain on windward slopes, rain shadow leeward", good: true },
                { label: "Cyclonic / Frontal", outcome: "Widespread moderate rain for many hours", good: true },
                { label: "Cyclonic drizzle", outcome: "Fine droplets from stratus over a large area", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Areal averaging",
              body: "RGPV almost always asks for the Thiessen polygon method. Practise drawing perpendicular bisectors between adjacent gauge pairs, marking the polygon around each gauge, measuring its area, and computing the weighted mean as sum of (rain x area) divided by total area.",
            },
            keyTerms: [
              { term: "Precipitation", definition: "All forms of water - rain, snow, sleet, hail, drizzle - falling from the atmosphere to the earth's surface." },
              { term: "Orographic rainfall", definition: "Rain produced when moist air is forced up a mountain barrier, falling on the windward slope." },
              { term: "Isohyetal method", definition: "Areal averaging of rainfall by drawing contours of equal rainfall depth and planimetering between them." },
            ],
            examQuestions: [
              {
                q: "Explain the various forms and types of precipitation. Describe the Thiessen polygon method and apply it to a catchment with four gauges recording 2.0, 3.5, 4.2 and 1.8 cm of rain over polygon areas of 25, 35, 30 and 10 sq km respectively.",
                marks: 7,
                outline: [
                  "Define precipitation and list its forms: rain, snow, sleet, hail, drizzle, dew.",
                  "Classify by lifting mechanism: convective, orographic, cyclonic, frontal.",
                  "State the need for areal averaging from point gauges.",
                  "Describe Thiessen polygon method: join gauges, draw perpendicular bisectors, form polygons.",
                  "Compute weights: areas 25, 35, 30, 10 sq km; total 100 sq km.",
                  "Weighted rainfall = (2.0*25 + 3.5*35 + 4.2*30 + 1.8*10) / 100 = (50 + 122.5 + 126 + 18) / 100 = 3.165 cm.",
                  "Compare with arithmetic mean (2.875 cm) and note Thiessen is preferred when gauges are uneven.",
                ],
              },
              {
                q: "Differentiate between convective and cyclonic rainfall.",
                marks: 2,
              },
              {
                q: "What is an isohyetal map? How is it used to compute mean rainfall over a catchment?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Rainfall measurement",
            body: [
              "Rainfall is measured by rain gauges, classified as non-recording and recording. A non-recording gauge is a simple cylindrical collector of standard diameter (127 mm in the Symons gauge) that catches rain; the observer measures the collected depth daily with a measuring stick. Recording gauges - tipping bucket, float type (syphon), weighing type - produce a continuous time-depth trace that gives intensity and duration directly. A dense network is required because point rainfall is highly variable in space and time; the World Meteorological Organization recommends one gauge per 520 sq km in plains and one per 15 to 30 sq km in hilly catchments.",
              "The tipping-bucket gauge is the commonest recording type for telemetry: a see-saw bucket of 0.2 mm capacity tips at each fill, sending an electrical pulse. The float type lifts a float in a chamber and traces a pen on a clock-driven drum; when the chamber fills, a syphon empties it and the trace returns to zero. The weighing gauge continuously weighs a bucket of caught rain on a spring and records the cumulative mass, which is convenient for snow. Each instrument has its latency, resolution and maintenance needs, and the choice is governed by climate and telemetry.",
              "Once point readings are collected, they must be checked for consistency before averaging. A double-mass curve plots the cumulative rainfall at a suspect station against the average of several base stations; a break in slope indicates a change in gauge exposure, location or observer, and the historical record is corrected by multiplying pre-break values by the ratio of slopes. Without this correction, a gauge that was moved or shielded differently would inject an artificial trend into the design rainfall. The corrected annual series is then used to fit a probability distribution and extract design rainfall of the chosen return period.",
            ],
            bullets: [
              "Non-recording gauge: Symons type, 127 mm diameter, daily staff reading.",
              "Recording gauges: tipping bucket (0.2 mm pulse), float/syphon, weighing type.",
              "WMO gauge density: 1 per 520 sq km in plains, denser in hilly areas.",
              "Tipping bucket suits telemetry; float type traces intensity; weighing type handles snow.",
              "Double-mass curve detects inconsistency from gauge relocation or shielding changes.",
              "Slope-break ratio corrects pre-break historical values to the new exposure.",
              "Corrected annual series feeds frequency analysis for design rainfall.",
            ],
            codeExample: {
              language: "python",
              caption: "Double-mass curve consistency check between a suspect gauge and a base group.",
              code: [
                "# Double-mass curve consistency check for one suspect gauge",
                "suspect_cum = [120, 245, 380, 500, 615, 720]   # mm cumulative",
                "base_cum    = [110, 230, 360, 480, 600, 720]   # mm cumulative avg of 4 base gauges",
                "",
                "def slope(a, b, i0, i1):",
                "    n  = i1 - i0 + 1",
                "    sx = sum(a[i0:i1+1]); sy = sum(b[i0:i1+1])",
                "    sxy = sum(a[i]*b[i] for i in range(i0, i1+1))",
                "    sxx = sum(a[i]**2 for i in range(i0, i1+1))",
                "    return (n*sxy - sx*sy) / (n*sxx - sx*sx)",
                "",
                "before = slope(suspect_cum, base_cum, 0, 2)",
                "after  = slope(suspect_cum, base_cum, 3, 5)",
                "print(f\"slope before={before:.3f}, after={after:.3f}\")",
                "print(f\"correction ratio (before/after) = {before/after:.3f}\")",
              ].join("\n"),
            },
            diagram: {
              kind: "pipeline",
              title: "From a rain gauge reading to a design rainfall",
              caption:
                "Each stage carries data forward; double-mass consistency and frequency analysis are the value-adds.",
              stages: [
                { label: "Catch rain in gauge", note: "non-recording or recording" },
                { label: "Daily / continuous record", note: "mm of depth" },
                { label: "Double-mass consistency check", note: "detect relocation or exposure change" },
                { label: "Areal averaging", note: "Thiessen / isohyetal" },
                { label: "Frequency analysis", note: "design rainfall for return period" },
              ],
            },
            callout: {
              type: "exam",
              title: "Recording-gauge internals",
              body: "Be ready to draw a section of the tipping-bucket gauge: the funnel, the two buckets on a pivot, the cam and the contact closure. A neat labelled sketch is the difference between a 3-mark and a 7-mark answer on 'describe a recording rain gauge'.",
            },
            keyTerms: [
              { term: "Non-recording rain gauge", definition: "A cylindrical collector (Symons type) whose daily catch is measured with a graduated stick." },
              { term: "Tipping-bucket gauge", definition: "A recording gauge in which a see-saw bucket of 0.2 mm capacity tips at each fill and records rainfall depth versus time." },
              { term: "Double-mass curve", definition: "A plot of cumulative station rainfall against cumulative group-average rainfall used to detect a change in station exposure." },
            ],
            examQuestions: [
              {
                q: "Describe with neat sketches the non-recording and the three recording types of rain gauges. Explain the double-mass curve technique and state its use.",
                marks: 7,
                outline: [
                  "Define a rain gauge and state that gauges are non-recording or recording.",
                  "Sketch the Symons non-recording gauge: 127 mm funnel, collector, measuring glass.",
                  "Describe the tipping-bucket: two buckets on pivot, 0.2 mm per tip, electrical pulse.",
                  "Describe the float (syphon) type: float in chamber, pen on clock drum, automatic syphon.",
                  "Describe the weighing type: bucket on spring, continuous mass record, suits snow.",
                  "Define the double-mass curve as cumulative X versus cumulative group average.",
                  "Explain that a slope break indicates a change in exposure, location or observer, and the ratio of slopes corrects the earlier record.",
                ],
              },
              {
                q: "Why is a recording rain gauge preferred for design-storm analysis?",
                marks: 2,
              },
              {
                q: "What is the recommended rain-gauge density for a plains catchment as per WMO norms? Why is a denser network needed in hilly regions?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Evaporation and transpiration",
            body: [
              "Evaporation is the process by which water is converted from the liquid to the vapour state and transferred from a surface to the atmosphere. It is the chief loss term in the hydrologic budget of any reservoir, lake or soil surface. The rate depends on net solar radiation, vapour-pressure deficit between the surface and the air, wind speed that carries vapour away, and the temperature of the water. The same physics drives transpiration, the escape of water vapour from plant leaves through stomata, which depends additionally on plant type, soil moisture and the leaf-area index.",
              "The two processes are jointly estimated as evapotranspiration (ET) because separating them in the field is impractical. Potential evapotranspiration (PET) is the loss that would occur if an unlimited water supply were available; actual evapotranspiration (AET) is limited by soil moisture and falls below PET in dry periods. Pan evaporation, measured by the Class A land pan or the Indian Standard (modified) pan, gives an index of open-water evaporation that is multiplied by a pan coefficient (0.6 to 0.8) to estimate reservoir evaporation. Empirical equations such as Penman, Blaney-Criddle, Hargreaves and Meyer convert meteorological data to ET estimates.",
              "Transpiration is measured by phytometers (sealed pots weighed to detect water loss), by lysimeters that weigh a soil monolith with vegetation, or inferred from sap-flow sensors and Bowen-ratio energy budgets. Consumptive use by a crop is the sum of transpiration plus the evaporation from the soil and intercepted water during the growing season. Reducing reservoir evaporation is a major water-resources concern: chemical films (cetyl alcohol), floating covers, windbreaks and managed shading each cut the loss by a few to a few tens of percent. In arid India the annual evaporation from a reservoir can exceed one metre, rivalling the intended use.",
            ],
            bullets: [
              "Evaporation: liquid to vapour transfer driven by net radiation, vapour deficit, wind, temperature.",
              "Transpiration: vapour escape from plant leaves through stomata, also depends on leaf area and soil moisture.",
              "Potential ET (PET): loss if water were unlimited; Actual ET (AET) limited by soil moisture.",
              "Pan evaporation: Class A land pan or Indian Standard pan; multiply by pan coefficient (0.6 to 0.8).",
              "Empirical ET equations: Penman, Blaney-Criddle, Hargreaves, Meyer, Thornthwaite.",
              "Phytometers and lysimeters measure transpiration and consumptive use directly.",
              "Annual reservoir evaporation in arid India can exceed 1 metre.",
            ],
            table: {
              caption: "Open-water evaporation versus plant transpiration.",
              headers: ["Aspect", "Evaporation", "Transpiration"],
              rows: [
                ["Surface", "open water, wet soil", "leaf stomata"],
                ["Driver", "radiation, vapour deficit, wind", "radiation, vapour deficit, soil moisture"],
                ["Measurement", "Class A pan, Meyer eqn", "phytometer, lysimeter, sap flow"],
                ["Control", "covers, films, windbreaks", "mulching, deficit irrigation"],
                ["Magnitude (arid India)", "1500 to 2500 mm/yr", "300 to 800 mm per crop"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Evaporation versus transpiration - same physics, different surface",
              caption:
                "Both depend on the vapour-pressure deficit; transpiration adds a biological gate.",
              left: {
                heading: "Evaporation",
                items: [
                  "Surface: open water or wet soil",
                  "Drivers: net radiation, vapour deficit, wind",
                  "Instrument: Class A pan, weighing gauge",
                  "Equations: Penman, Meyer, Dalton",
                  "Reduction: covers, films, windbreaks",
                ],
              },
              right: {
                heading: "Transpiration",
                items: [
                  "Surface: leaf stomata",
                  "Drivers: same plus soil moisture, leaf area",
                  "Instrument: phytometer, lysimeter, sap-flow",
                  "Equations: Penman-Monteith, Blaney-Criddle",
                  "Reduction: mulching, deficit irrigation",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Pan coefficient",
              body: "Always multiply the pan reading by a pan coefficient (0.70 for the Indian Standard pan) before reporting reservoir evaporation. The pan over-evaporates because its small volume heats faster than the lake; forgetting the coefficient is a classic lost-mark error.",
            },
            keyTerms: [
              { term: "Evapotranspiration (ET)", definition: "Combined loss of water to the atmosphere by evaporation from surfaces and transpiration from plants." },
              { term: "Potential evapotranspiration", definition: "The ET that would occur if soil water were freely available, computed from meteorological data alone." },
              { term: "Pan coefficient", definition: "Ratio of reservoir evaporation to pan evaporation, typically 0.60 to 0.80, applied to convert pan readings to lake loss." },
            ],
            examQuestions: [
              {
                q: "Distinguish between evaporation and transpiration. Describe a Class A evaporation pan and the Indian Standard pan, and explain how pan data is converted to reservoir evaporation. Compute reservoir evaporation for a month in which the Indian Standard pan recorded 220 mm.",
                marks: 7,
                outline: [
                  "Define evaporation and transpiration, list the meteorological drivers of each.",
                  "State that joint loss is evapotranspiration; PET and AET differ by water availability.",
                  "Sketch the Class A pan: 1210 mm diameter, 255 mm deep, above-ground on wooden frame.",
                  "Describe the Indian Standard (modified) pan: 1220 mm diameter, stilling well, painted white.",
                  "Define pan coefficient as lake/pan ratio, typically 0.70 for the IS pan.",
                  "Compute reservoir evaporation = 0.70 x 220 = 154 mm for the month.",
                  "Mention factors affecting pan coefficient: pan size, siting, paint, bird guard, wind exposure.",
                ],
              },
              {
                q: "Define potential and actual evapotranspiration. Why does AET fall below PET in a dry spell?",
                marks: 2,
              },
              {
                q: "Name any two empirical equations for estimating evapotranspiration and the variables each uses.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Infiltration",
            body: [
              "Infiltration is the entry of water into the soil surface and its downward movement through the unsaturated zone. It is the process that partitions rainfall at the ground surface into runoff (the excess) and soil moisture (the part that enters). The infiltration rate, expressed in mm/hr or cm/hr, starts high when the soil is dry and suction is strong, then decays as the wetting front advances and suction falls, finally approaching a constant rate equal to the permeability of the wetted soil. The maximum rate at which a given soil can absorb water at a given time is its infiltration capacity.",
              "Horton's equation describes the decay: f(t) = fc + (f0 - fc) e^(-kt), where f0 is the initial capacity, fc is the final constant capacity approached at large t, and k is a decay constant depending on soil and vegetation. Philip's two-term equation, f(t) = S/2 t^(-1/2) + A, treats infiltration as the sum of a sorptivity term dominating early and a conductivity term dominating late. Green-Ampt's piston model assumes a sharp wetting front and yields f(t) = K (1 + (head x porosity deficit)/depth to front). Each model is calibrated against double-ring infiltrometer data.",
              "Infiltration is measured in the field by single-ring or double-ring infiltrometers - the double ring is preferred because the outer ring buffers lateral spreading from the inner ring so that flow is vertical. The measured rate is plotted against time and fitted to Horton's or Philip's equation. Infiltration governs the rainfall-excess computation in any hydrologic model: a storm's effective rainfall is the depth above the infiltration capacity curve (with depression storage and interception subtracted). Sandy soils with high f reduce runoff and recharge groundwater; clayey soils with low f generate more runoff and require larger drainage design.",
            ],
            bullets: [
              "Infiltration: entry of water into the soil surface; partitions rainfall into runoff and soil moisture.",
              "Infiltration capacity: maximum rate the soil can absorb at a given time; decays toward a constant.",
              "Horton's equation: f(t) = fc + (f0 - fc) e^(-kt).",
              "Philip's equation: f(t) = S/2 t^(-1/2) + A (sorptivity plus conductivity term).",
              "Green-Ampt: sharp wetting front; f = K (1 + head*porosity_deficit / depth_to_front).",
              "Double-ring infiltrometer: outer ring buffers lateral spreading so inner flow is vertical.",
              "Effective rainfall = rainfall minus losses (infiltration, depression storage, interception).",
            ],
            codeExample: {
              language: "python",
              caption: "Horton's infiltration equation and cumulative infiltration by the trapezoidal rule.",
              code: [
                "import math",
                "",
                "# Horton's equation: f(t) = fc + (f0 - fc) * exp(-k * t)",
                "f0 = 6.0    # initial capacity, cm/hr",
                "fc = 1.2    # final capacity, cm/hr",
                "k  = 0.25  # 1/hr",
                "",
                "ts = [0.0, 0.5, 1.0, 2.0, 4.0]   # hours since rain began",
                "fs = [fc + (f0 - fc) * math.exp(-k * t) for t in ts]",
                "for t, f in zip(ts, fs):",
                "    print(f\"t={t:4.1f} h, f(t)={f:5.2f} cm/hr\")",
                "",
                "# Cumulative infiltration over 4 h by the trapezoidal rule",
                "F = 0.0",
                "for i in range(1, len(ts)):",
                "    F += 0.5 * (fs[i] + fs[i-1]) * (ts[i] - ts[i-1])",
                "print(f\"Cumulative infiltration over 4 h = {F:.2f} cm\")",
              ].join("\n"),
            },
            diagram: {
              kind: "layers",
              title: "Vertical zones through which infiltrated water descends",
              caption:
                "Each layer has its own moisture state; the wetting front advances downward with time.",
              layers: [
                { label: "Surface detention", note: "rainwater waiting to infiltrate" },
                { label: "Zone of aeration (vadose)", note: "soil moisture held by capillarity" },
                { label: "Capillary fringe", note: "above the water table, saturated by capillarity" },
                { label: "Zone of saturation", note: "groundwater; all pores filled" },
              ],
            },
            callout: {
              type: "warning",
              title: "Choose the right model",
              body: "Horton's empirical decay is fine for exam answers and short storms; Philip's and Green-Ampt's are physically based and preferred in distributed models. State which you are using and why - examiners reward the justification.",
            },
            keyTerms: [
              { term: "Infiltration capacity", definition: "The maximum rate at which a given soil can absorb water at a given time, decaying toward a constant as the soil saturates." },
              { term: "Horton's equation", definition: "An empirical decay law f(t) = fc + (f0 - fc) e^(-kt) describing the fall of infiltration capacity with time." },
              { term: "Double-ring infiltrometer", definition: "A field instrument with concentric rings that maintains vertical flow in the inner ring by buffering lateral spread from the outer ring." },
            ],
            examQuestions: [
              {
                q: "Define infiltration and infiltration capacity. State Horton's equation and explain each term. For a soil with f0 = 6 cm/hr, fc = 1.2 cm/hr and k = 0.25 per hr, compute the infiltration rate at t = 0, 1, 2 and 4 hours and estimate the cumulative infiltration over 4 hours by the trapezoidal rule.",
                marks: 7,
                outline: [
                  "Define infiltration and infiltration capacity; state the difference from percolation.",
                  "Write Horton's equation f(t) = fc + (f0 - fc) e^(-kt) and define f0, fc, k.",
                  "Compute f(0) = 6 cm/hr, f(1) = 1.2 + 4.8 e^-0.25 = 4.94 cm/hr.",
                  "Compute f(2) = 1.2 + 4.8 e^-0.5 = 4.11 cm/hr, f(4) = 1.2 + 4.8 e^-1 = 2.97 cm/hr.",
                  "Apply the trapezoidal rule over intervals 0-1, 1-2 and 2-4 hours.",
                  "F = 0.5*(6+4.94)*1 + 0.5*(4.94+4.11)*1 + 0.5*(4.11+2.97)*2 = 5.47 + 4.53 + 7.08 = 17.08 cm.",
                  "State that the result approaches 4*fc = 4.8 cm at very large times and comment on sandy vs clayey soils.",
                ],
              },
              {
                q: "Differentiate between infiltration and percolation.",
                marks: 2,
              },
              {
                q: "Describe a double-ring infiltrometer with a sketch and state why two rings are used.",
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
      title: "Runoff and Hydrograph",
      summary:
        "The surface component of the hydrologic cycle: runoff and its many controlling factors, the correlation of rainfall with runoff, the components of a storm hydrograph, and the unit hydrograph and S-curve that turn a unit of excess rain into a flood-routing tool.",
      chapter: {
        number: "02",
        title: "Runoff and Hydrograph",
        intro:
          "Unit II follows water from where it leaves the soil as runoff to where engineers use it for design. It covers the definition and components of runoff, the catchment and climatic factors that govern it, empirical rainfall-runoff correlations, the anatomy of a hydrograph with base flow separation, and the unit hydrograph plus its S-curve derivative that converts any excess rainfall into a direct-runoff hydrograph.",
        inOneBreath:
          "Runoff is the portion of rainfall that reaches a stream after surface detention and infiltration; it depends on climate (rainfall intensity, duration, distribution), catchment (size, slope, shape, soil, land use, storage) and antecedent moisture; rainfall-runoff correlations include Strange's table (good 25 percent, average 18 percent, bad 10 percent) and Inglis-De'Souza (R = 0.85 P - 30 for P > 30 inches); a storm hydrograph has a rising limb, peak, crest segment and recession limb with base flow separated by straight-line or N-day (N = 0.83 A^0.2) methods; the unit hydrograph is the 1-cm excess-rain hydrograph for a duration D, from which any storm's DRH follows by convolution; superposition of D-hour UHs shifted by D gives the S-curve, and its time derivative recovers a shorter-duration UH.",
        sections: [
          {
            number: "2.1",
            title: "Runoff",
            body: [
              "Runoff is the portion of rainfall that flows over the land surface and through the subsurface to reach a stream, and is the term of the hydrologic balance that a designer measures at a gauging station. It is the sum of overland flow (water that never infiltrates), interflow (water that infiltrates but moves laterally in the vadose zone), and base flow (groundwater that seeps into the channel). The rainfall excess, or direct runoff, is what remains of rainfall after subtracting interception, depression storage, evaporation and infiltration; it forms the storm hydrograph that rises and recedes with each rain.",
              "Runoff is expressed as a depth (cm) over the catchment, as a volume (cubic metres per year or ha-m), or as a discharge (cubic metres per second). The runoff coefficient is the ratio of runoff depth to rainfall depth over the same period, and varies from less than 0.10 for sandy, forested catchments to more than 0.80 for paved urban ones. For a catchment of area A in sq km and rainfall P in cm, the volume of runoff V = 0.01 * C * P * A * 10^6 cubic metres. Annual runoff coefficients are used to size irrigation reservoirs and to estimate water yield.",
              "The rainfall-runoff process is non-linear because soil moisture, vegetation and storm pattern change through the year. Antecedent moisture - the wetness of the soil before a storm - strongly affects how much of the next rain runs off: a storm following a wet week may produce twice the runoff of the identical storm on dry soil. Catchment slope, length of overland flow, drainage density, soil type, land cover and the shape of the catchment all modulate the response. Because of this complexity, runoff is estimated by empirical formulae (Strange, Inglis), by unit hydrographs, or by continuous simulation models such as SCS-CN and HEC-HMS.",
            ],
            bullets: [
              "Runoff = overland flow + interflow + base flow; direct runoff excludes base flow.",
              "Rainfall excess = rainfall minus interception, depression storage, evaporation, infiltration.",
              "Runoff coefficient = runoff depth / rainfall depth; ranges 0.10 (sandy forest) to 0.80 (urban).",
              "Volume formula: V = 0.01 * C * P * A * 10^6 cu m (A in sq km, P in cm).",
              "Antecedent moisture: wet-week storms produce up to twice the runoff of dry-soil storms.",
              "Empirical formulae: Strange's table, Inglis-De'Souza, Barlow, Khosla.",
              "Continuous simulation: SCS curve number, HEC-HMS, tank models.",
            ],
            table: {
              caption: "Components of total runoff and their origin.",
              headers: ["Component", "Flow path", "Time scale", "Contribution"],
              rows: [
                ["Overland flow", "surface", "minutes to hours", "storm peak"],
                ["Interflow", "shallow subsurface", "hours to days", "rising limb"],
                ["Base flow", "groundwater seepage", "days to months", "dry-weather flow"],
                ["Channel precipitation", "rain on stream", "minutes to hours", "small"],
                ["Direct runoff", "overland + interflow", "hours to days", "storm hydrograph"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Partitioning rainfall into losses and runoff",
              caption:
                "Subtract the losses to get the direct runoff that feeds the storm hydrograph.",
              steps: [
                { label: "Gross rainfall P" },
                { label: "Minus interception and depression storage", note: "surface losses" },
                { label: "Minus infiltration", note: "Horton / Green-Ampt" },
                { label: "Minus evaporation", note: "during storm, small" },
                { label: "Rainfall excess = direct runoff", note: "feeds the hydrograph" },
              ],
            },
            callout: {
              type: "exam",
              title: "Runoff coefficient",
              body: "Memorise the runoff-coefficient ranges for typical surfaces: 0.10-0.20 for sandy forested catchments, 0.20-0.40 for cultivated loam, 0.40-0.60 for clayey, and 0.70-0.90 for paved urban. RGPV often asks for a coefficient estimate from a description of a catchment.",
            },
            keyTerms: [
              { term: "Runoff", definition: "The portion of rainfall that flows over the surface and through the subsurface to reach a stream." },
              { term: "Runoff coefficient", definition: "Ratio of runoff depth to rainfall depth over the same period; varies from 0.10 for sandy forests to 0.80 for urban surfaces." },
              { term: "Base flow", definition: "The dry-weather flow of a stream sustained by groundwater seepage between storms." },
            ],
            examQuestions: [
              {
                q: "Define runoff. Explain its components and the factors that govern the runoff coefficient. For a 400 sq km catchment with annual rainfall of 90 cm and a runoff coefficient of 0.35, estimate the annual runoff volume and depth.",
                marks: 7,
                outline: [
                  "Define runoff as the part of rainfall reaching a stream; list the components: overland flow, interflow, base flow, channel precipitation.",
                  "Distinguish direct runoff (overland + interflow) from base flow.",
                  "Define the runoff coefficient C = runoff depth / rainfall depth, and list its ranges.",
                  "State the factors: soil type, slope, vegetation, land use, antecedent moisture, storm pattern.",
                  "Compute volume V = 0.01 * C * P * A * 10^6 = 0.01 * 0.35 * 90 * 400 * 10^6 = 1.26 x 10^8 cu m.",
                  "Compute depth = C * P = 0.35 * 90 = 31.5 cm over the catchment.",
                  "Comment that 31.5 cm out of 90 cm rainfall appears as runoff and the rest satisfies evaporation, infiltration and storage change.",
                ],
              },
              {
                q: "Differentiate between direct runoff and base flow.",
                marks: 2,
              },
              {
                q: "List any five factors that affect the runoff coefficient of a catchment.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Factors affecting runoff",
            body: [
              "The runoff from a catchment is governed by two large families of factors: climatic and physiographic. The climatic family includes rainfall characteristics (depth, intensity, duration, distribution and direction of storm movement) and the loss variables (evaporation, transpiration, soil moisture). The physiographic family includes the catchment's geometry (size, shape, slope, drainage density, stream order), its geology and soils (permeability, porosity, rock type), its land use and vegetation (forest, crops, urban cover), and its storage (lakes, swamps, depressions). Each factor nudges the runoff coefficient up or down and changes the shape of the hydrograph.",
              "Catchment size matters because larger basins spread a storm over more channel length and produce a flatter, slower hydrograph. Catchment shape - fan-shaped (wide near the outlet, narrow upstream) gives a sharp peak; elongated (narrow near the outlet, wide upstream) gives a flat, multi-peaked hydrograph. Slope governs how fast water reaches the channel: steep slopes give quick, sharp peaks; gentle slopes give slow, broad peaks. Drainage density - the ratio of total channel length to catchment area - is high in impermeable or arid catchments and low in permeable or forested ones; high density moves water quickly to the outlet.",
              "Soil type and land use are the engineer's controllable factors. Sandy soils infiltrate rapidly, reducing runoff and recharging groundwater; clayey soils do the opposite. Forests intercept rain, build organic soil, slow overland flow and encourage infiltration, all of which lower the runoff coefficient. Urbanisation - the substitution of impervious surfaces for vegetated ones - can double or triple the runoff coefficient and shorten the time-to-peak from hours to minutes; this is why city storm drains are sized for much higher instantaneous flows than rural channels of similar area. Antecedent moisture is the seasonal knob: a wet antecedent week raises runoff for the next storm.",
            ],
            bullets: [
              "Two factor families: climatic (rainfall + losses) and physiographic (geometry, soil, land use, storage).",
              "Rainfall: depth, intensity, duration, distribution, storm direction.",
              "Geometry: size, shape (fan vs elongated), slope, drainage density, stream order.",
              "Soils and geology: permeability, porosity, rock type; sandy soils lower runoff.",
              "Land use: forest lowers runoff, urban doubles or triples it.",
              "Storage: lakes, swamps, depressions attenuate the peak.",
              "Antecedent moisture: a wet prior week raises the runoff of the next storm.",
            ],
            table: {
              caption: "How selected factors nudge the runoff coefficient and time-to-peak.",
              headers: ["Factor", "Change", "Effect on coefficient", "Effect on time-to-peak"],
              rows: [
                ["Soil", "sandy to clayey", "increase", "decrease"],
                ["Land use", "forest to urban", "increase", "decrease"],
                ["Slope", "gentle to steep", "increase", "decrease"],
                ["Catchment size", "small to large", "small", "increase"],
                ["Drainage density", "low to high", "increase", "decrease"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Catchment factor influence on runoff",
              caption:
                "Top-left: low-coefficient, slow-peak; bottom-right: high-coefficient, fast-peak.",
              axes: { x: "Runoff coefficient (low to high)", y: "Time-to-peak (slow to fast)" },
              quadrants: [
                { label: "Forest, sandy, gentle slope", note: "low C, slow peak" },
                { label: "Forest, sandy, steep slope", note: "low C, fast peak" },
                { label: "Urban, clayey, gentle slope", note: "high C, slow peak" },
                { label: "Urban, clayey, steep slope", note: "high C, fast peak" },
              ],
            },
            callout: {
              type: "warning",
              title: "Urbanisation effects",
              body: "If a question asks about the effect of urbanisation, give numbers: the runoff coefficient rises from about 0.30 to 0.70 and time-to-peak falls by 50 to 70 percent. RGPV rewards a quantitative answer over a qualitative one.",
            },
            keyTerms: [
              { term: "Drainage density", definition: "Total length of stream channels per unit catchment area; high in impermeable or arid catchments." },
              { term: "Time-to-peak", definition: "The interval between the start of rainfall excess and the peak of the resulting hydrograph." },
              { term: "Antecedent moisture", definition: "The soil moisture present before a storm begins, which strongly raises or lowers the runoff of the next storm." },
            ],
            examQuestions: [
              {
                q: "Classify the factors affecting runoff from a catchment. Explain how soil type, land use, slope and urbanisation change the runoff coefficient and the shape of the storm hydrograph.",
                marks: 7,
                outline: [
                  "Classify factors into climatic (rainfall, evaporation) and physiographic (size, shape, slope, soil, land use, storage).",
                  "Describe rainfall factors: intensity, duration, distribution, storm direction; high intensity raises runoff.",
                  "Describe geometry: size, shape (fan vs elongated), slope, drainage density; steep slopes shorten time-to-peak.",
                  "Soils: sandy gives low runoff coefficient (0.10-0.20); clayey gives high (0.40-0.60).",
                  "Land use: forest intercepts, infiltrates, lowers coefficient; urbanisation doubles or triples it.",
                  "Antecedent moisture: a wet prior week raises runoff by 30 to 100 percent.",
                  "Sketch two hydrographs for the same storm on rural and urbanised catchments showing the contrast.",
                ],
              },
              {
                q: "Define drainage density. What does a high value indicate about a catchment?",
                marks: 2,
              },
              {
                q: "Explain how urbanisation changes the runoff coefficient and the time-to-peak of a catchment.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Rainfall-runoff correlation",
            body: [
              "Rainfall-runoff correlation is an empirical relation that converts a rainfall depth into a runoff depth for a catchment when no flow-gauging data is available. The simplest form is a linear regression R = a P + b fitted to annual pairs (P, R) of rainfall and runoff; for monsoon India, nonlinear forms such as R = a P^b and Strange's table (which gives runoff as a percentage of rainfall for good, average and bad catchments) are common. Inglis and De'Souza's formula for the Deccan, R = 0.85 P - 30 (in inches) for P > 30 inches, captures the threshold behaviour of monsoon rainfall.",
              "The correlation is calibrated on at least ten years of concurrent rainfall-runoff data; its quality is judged by the correlation coefficient and the standard error. Once fitted, the relation is used to estimate the runoff volume for an ungauged year of known rainfall, to extend a short runoff record by synthesising the runoff for the years of rainfall record alone, or to fill gaps in a runoff series. The runoff coefficient implied by the relation is the slope dR/dP, which for Strange's table rises with rainfall quality (good catchments give a larger fraction of rain as runoff) and which for Inglis-De'Souza rises linearly once the threshold of 30 inches is crossed.",
              "Care is needed because the correlation hides catchment change. A regression fitted on a forested catchment underestimates runoff once the same catchment is urbanised, because the underlying physics has changed. For this reason the relation is updated when land use changes substantially, and is supplemented by unit hydrographs for storm-scale routing. The correlation also breaks down at the event scale: two storms of the same total depth can produce very different runoff depending on intensity, duration and antecedent moisture, so annual or monthly correlations are more reliable than event-by-event ones. As a design tool the correlation is the first estimate that is then refined by simulation.",
            ],
            bullets: [
              "Rainfall-runoff correlation converts a rainfall depth into a runoff depth by an empirical relation.",
              "Linear form: R = a P + b; nonlinear: R = a P^b; tabular: Strange's good/average/bad.",
              "Inglis-De'Souza: R = 0.85 P - 30 (inches) for P > 30 inches on the Deccan.",
              "Calibrate on >= 10 years of concurrent data; judge by correlation coefficient and standard error.",
              "Use: extend short runoff records, fill gaps, estimate ungauged-year runoff.",
              "Implied runoff coefficient is dR/dP; rises with rainfall quality in Strange's table.",
              "Update when land use changes; event-scale correlations are unreliable.",
            ],
            codeExample: {
              language: "python",
              caption: "Linear rainfall-runoff regression R = aP + b with correlation coefficient r.",
              code: [
                "# Linear regression R = a*P + b from annual pairs",
                "P = [60, 70, 78, 82, 90, 95, 100, 110, 120, 135]  # cm rainfall",
                "R = [12, 18, 22, 25, 30, 33, 36, 42, 50, 60]      # cm runoff",
                "n  = len(P)",
                "sx = sum(P); sy = sum(R)",
                "sxx = sum(x*x for x in P)",
                "sxy = sum(x*y for x, y in zip(P, R))",
                "slope = (n*sxy - sx*sy) / (n*sxx - sx*sx)",
                "intercept = (sy - slope*sx) / n",
                "",
                "# Correlation coefficient r",
                "mx = sx/n; my = sy/n",
                "syy = sum((y - my)**2 for y in R)",
                "sxx2 = sum((x - mx)**2 for x in P)",
                "sxy2 = sum((x - mx)*(y - my) for x, y in zip(P, R))",
                "r = sxy2 / (sxx2**0.5 * syy**0.5)",
                "print(f\"R = {slope:.3f} * P + ({intercept:.3f})\")",
                "print(f\"correlation coefficient r = {r:.3f}\")",
              ].join("\n"),
            },
            diagram: {
              kind: "flow",
              title: "Building and using a rainfall-runoff correlation",
              caption:
                "Each step carries the catchment from data to a usable design relation.",
              steps: [
                { label: "Collect >= 10 yr of (P, R) pairs" },
                { label: "Plot scatter and inspect", note: "linear or nonlinear?" },
                { label: "Fit R = aP + b or R = aP^b", note: "least squares" },
                { label: "Check correlation r and standard error", note: "r >= 0.8 is acceptable" },
                { label: "Use to extend / fill / estimate", note: "update on land-use change" },
              ],
            },
            callout: {
              type: "exam",
              title: "Strange's table",
              body: "Memorise Strange's categories: a good catchment yields 25 percent of average rainfall as runoff, average 18 percent and bad 10 percent. RGPV often asks the candidate to read a runoff depth from Strange's table given a rainfall and a catchment quality.",
            },
            keyTerms: [
              { term: "Rainfall-runoff correlation", definition: "An empirical relation converting a rainfall depth into a runoff depth for a catchment, fitted to concurrent historical data." },
              { term: "Strange's table", definition: "An empirical Indian table giving runoff as a percentage of rainfall for good (25 percent), average (18 percent) and bad (10 percent) catchments." },
              { term: "Inglis-De'Souza formula", definition: "A nonlinear formula R = 0.85 P - 30 (in inches) for monsoon catchments of the Deccan, valid for P > 30 inches." },
            ],
            examQuestions: [
              {
                q: "What is a rainfall-runoff correlation? Describe Strange's table and the Inglis-De'Souza formula. For a catchment of 600 sq km with monsoon rainfall of 95 cm and an annual runoff coefficient of 0.30, estimate the runoff volume.",
                marks: 7,
                outline: [
                  "Define rainfall-runoff correlation and its purpose: convert P to R for ungauged years.",
                  "State the forms: linear R = aP + b, nonlinear R = aP^b, tabular (Strange).",
                  "Describe Strange's table: good 25 percent, average 18 percent, bad 10 percent of rainfall as runoff.",
                  "State Inglis-De'Souza: R = 0.85 P - 30 (in inches) for P > 30 inches on the Deccan.",
                  "Compute runoff depth = 0.30 * 95 = 28.5 cm over the catchment.",
                  "Convert to volume: 0.285 m * 600 * 10^6 sq m = 1.71 x 10^8 cu m.",
                  "Note that the relation is annual; storm-scale routing needs a unit hydrograph.",
                ],
              },
              {
                q: "State Strange's table categories for runoff estimation.",
                marks: 2,
              },
              {
                q: "Why is a rainfall-runoff correlation more reliable on annual than on event scale?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Hydrograph components",
            body: [
              "A hydrograph is a plot of stream discharge against time at a gauging station. For a storm it shows how a catchment transforms rainfall into a time-distributed outflow, and its shape is the integrated signature of all the catchment factors discussed in the previous sections. A storm hydrograph has three parts: the rising limb from the start of effective rainfall to the peak, the peak or crest segment representing maximum discharge, and the recession limb from the peak back to base flow. The rising limb is concave and steep, reflecting the gradual contribution of overland flow from distant parts of the catchment.",
              "The recession limb is conventionally split into the inflection point (the start of pure recession, when direct runoff has stopped), the falling limb (the slow drainage of channel storage), and the base-flow recession (the groundwater contribution). Base flow separation is the procedure of drawing a line on the hydrograph that splits total discharge into direct runoff (above the line) and base flow (below it). Common methods are the straight-line method (a horizontal line from start of rise to a point on the recession), the fixed-base or N-day method (N = 0.83 A^0.2 days, with A in sq km), and the variable-slope method that connects the start of rise and the end of base-flow recession by a concave curve.",
              "Two derived quantities are read off a separated hydrograph: the direct runoff volume, obtained by planimetering the area above the base-flow separation line and converting by the time step to cubic metres per second per unit time, and the time-to-peak (the lag from the centroid of the effective rainfall hyetograph to the hydrograph peak). The unit hydrograph, used in the next section, is built from this separated storm hydrograph and the corresponding effective rainfall hyetograph. Hydrograph shape is the central object of design flood estimation: a flood-control spillway is sized to pass the peak of a design-basis hydrograph derived from a design storm.",
            ],
            bullets: [
              "Hydrograph: discharge versus time at a gauging station; three parts: rising limb, peak, recession.",
              "Rising limb: concave, steep, reflects distant overland flow contributions.",
              "Recession limb: inflection point, falling limb, base-flow recession.",
              "Base flow separation: straight-line, N-day (N = 0.83 A^0.2), variable-slope methods.",
              "Direct runoff volume: area above the base-flow separation line, planimetered.",
              "Time-to-peak: lag from effective rainfall centroid to hydrograph peak.",
              "Unit hydrograph is built from a separated storm hydrograph and its effective-rain hyetograph.",
            ],
            table: {
              caption: "Components of a storm hydrograph.",
              headers: ["Component", "Time position", "Discharge", "Source"],
              rows: [
                ["Rising limb", "from start to peak", "increasing", "overland + interflow"],
                ["Peak", "maximum", "highest Q", "all contributing areas"],
                ["Crest segment", "around peak", "high", "channel + surface"],
                ["Recession limb", "peak to base", "decreasing", "channel storage drainage"],
                ["Base flow", "throughout", "low, steady", "groundwater seepage"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Anatomy of a storm hydrograph, left to right",
              caption:
                "Base-flow separation recovers the direct runoff that the unit hydrograph will model.",
              steps: [
                { label: "Start of rise", note: "rainfall excess begins" },
                { label: "Rising limb", note: "concave, steep" },
                { label: "Peak / crest", note: "maximum discharge" },
                { label: "Inflection point", note: "direct runoff ends" },
                { label: "Recession to base flow", note: "groundwater seepage" },
              ],
            },
            callout: {
              type: "exam",
              title: "N-day formula",
              body: "Memorise the empirical base-flow separation time N = 0.83 A^0.2 days, where A is catchment area in sq km. For a 625 sq km catchment, N is about 4 days. Use it in straight-line and N-day base-flow separation questions.",
            },
            keyTerms: [
              { term: "Hydrograph", definition: "A plot of stream discharge against time at a gauging station, showing how a catchment routes rainfall to outflow." },
              { term: "Base flow separation", definition: "Procedure of drawing a line on a storm hydrograph that splits total discharge into direct runoff and base flow." },
              { term: "Recession limb", definition: "The falling portion of a storm hydrograph from the peak back toward base flow, dominated by channel-storage drainage." },
            ],
            examQuestions: [
              {
                q: "Define a hydrograph. Draw a typical storm hydrograph and label its components. Explain the need for base-flow separation and describe any two methods.",
                marks: 7,
                outline: [
                  "Define a hydrograph as discharge versus time at a gauging station.",
                  "Draw the curve: rising limb, peak, crest segment, recession limb, base flow, with axis labels.",
                  "Label each component and identify its source: overland flow for rising limb, groundwater for base flow.",
                  "State the need for base-flow separation: to isolate the direct runoff that the unit hydrograph uses.",
                  "Describe the straight-line method: horizontal line from start of rise to a point N days after the peak.",
                  "Describe the N-day method with N = 0.83 A^0.2 days, ending at the point where the recession curves back to base flow.",
                  "State that direct runoff volume is the planimetered area above the separation line, converted to cubic metres per second times time.",
                ],
              },
              {
                q: "What is the rising limb of a hydrograph? Why is it concave?",
                marks: 2,
              },
              {
                q: "Define base flow. Describe the straight-line method of base-flow separation.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Unit hydrograph and S-curve",
            body: [
              "A unit hydrograph is the hydrograph of one unit depth (1 cm) of effective rainfall distributed uniformly over a catchment for a given duration (D hours). It is the linear, time-invariant response of the catchment: doubling the excess rain doubles every ordinate of the unit hydrograph, and two bursts of excess rain produce a direct-runoff hydrograph (DRH) obtained by superposition. Once derived for a duration D from a measured storm, the unit hydrograph is used to predict the DRH of any future storm of the same duration by convolution: each ordinate of the effective-rain hyetograph multiplies the unit hydrograph shifted by the storm time step, and the products are summed.",
              "The S-curve (or summation curve) is the hydrograph of an indefinitely continued 1-cm-per-D-hour effective rainfall, obtained by lagging and summing a sequence of D-hour unit hydrographs each shifted by D hours. Its ordinate at any time is the cumulative sum of unit-hydrograph ordinates up to that time. Differentiating the S-curve in time yields a unit hydrograph of shorter duration T (where T < D), which is the standard way to convert a 6-hour UH into a 3-hour or 1-hour UH. The S-curve is also used to derive the unit hydrograph of a different duration by combining S-curves built from two UHs of different durations.",
              "Unit hydrographs are derived from measured storm data by base-flow separating the storm hydrograph, dividing each DRH ordinate by the excess rainfall depth in cm, and adjusting any inconsistencies by smoothing. When no data is available, synthetic unit hydrographs are built from catchment characteristics using Snyder's, Gray's or the SCS dimensionless method, all of which relate the peak, the time-to-peak and the base width to catchment area, length and slope. The unit hydrograph is the workhorse of design-flood estimation: a design storm is convolved with a design unit hydrograph to produce the inflow design flood routed through a reservoir or past a spillway.",
            ],
            bullets: [
              "Unit hydrograph: response of a catchment to 1 cm of effective rain over duration D hours.",
              "Assumptions: uniform rainfall in space and time, linear response, time invariance.",
              "DRH of any storm = convolution of effective-rain hyetograph with the D-hour UH.",
              "S-curve: cumulative sum of D-hour UHs shifted by D each, representing infinite rain at 1 cm/D.",
              "Differentiating S-curve yields a shorter-duration UH (e.g. 6-hour UH to 3-hour UH).",
              "Synthetic UHs: Snyder's, Gray's, SCS dimensionless for ungauged catchments.",
              "Design flood = design storm convolved with design UH.",
            ],
            codeExample: {
              language: "python",
              caption: "Convolve a 1-hour unit hydrograph with a 2-block effective-rain hyetograph.",
              code: [
                "# Convolve a 1-hour UH with a 2-block effective-rain hyetograph",
                "uh = [0, 12, 38, 64, 52, 30, 14, 6, 0]   # m3/s per cm excess rain, 1-hour steps",
                "er = [2.0, 1.5]                          # 2 cm then 1.5 cm of excess rain",
                "",
                "# Direct runoff hydrograph by discrete convolution",
                "n_uh = len(uh); n_er = len(er)",
                "drh = [0.0] * (n_uh + n_er - 1)",
                "for i, e in enumerate(er):",
                "    for j, u in enumerate(uh):",
                "        drh[i + j] += e * u",
                "",
                "print(\"DRH (m3/s):\", [round(v, 1) for v in drh])",
                "print(f\"Peak direct runoff = {max(drh):.1f} m3/s\")",
              ].join("\n"),
            },
            diagram: {
              kind: "flow",
              title: "From a measured storm to a unit hydrograph, then to a design flood",
              caption:
                "The unit hydrograph is the linear kernel that converts any effective-rain hyetograph into a DRH.",
              steps: [
                { label: "Separate base flow from storm hydrograph", note: "obtain DRH" },
                { label: "Divide DRH by excess rain depth", note: "depth 1 cm -> UH of duration D" },
                { label: "Convolve UH with future ER hyetograph", note: "predict DRH" },
                { label: "Build S-curve by summation", note: "infinite rain at 1 cm/D" },
                { label: "Differentiate S-curve for shorter-duration UH", note: "6h to 3h to 1h" },
              ],
            },
            callout: {
              type: "warning",
              title: "Linearity assumption",
              body: "Unit-hydrograph theory assumes catchment response is linear and time-invariant. Real catchments are slightly non-linear - large floods move faster because channels widen. State the assumption and note its limitation; do not present the UH as a physical law.",
            },
            keyTerms: [
              { term: "Unit hydrograph", definition: "The direct-runoff hydrograph resulting from 1 cm of effective rainfall distributed uniformly over a catchment for a given duration D." },
              { term: "S-curve", definition: "The hydrograph produced by an indefinitely continued effective rainfall of 1 cm per D hours, obtained by summing shifted D-hour unit hydrographs." },
              { term: "Synthetic unit hydrograph", definition: "A unit hydrograph derived from catchment characteristics (area, length, slope) using Snyder, Gray or SCS methods for ungauged basins." },
            ],
            examQuestions: [
              {
                q: "Define a unit hydrograph. State its assumptions. Explain how a direct-runoff hydrograph is obtained from a unit hydrograph and a given effective-rain hyetograph, and outline the use of the S-curve to derive a unit hydrograph of shorter duration.",
                marks: 7,
                outline: [
                  "Define unit hydrograph (UH): DRH of 1 cm effective rain over duration D, uniform over the catchment.",
                  "State assumptions: uniform effective rain in space and time, linear response, time invariance.",
                  "State the principle of linearity: an m-cm excess rain produces m times the UH ordinates.",
                  "State the principle of superposition: two bursts sum to a DRH obtained by lagged addition.",
                  "Describe discrete convolution: DRH(k) = sum over i of ER(i) * UH(k - i).",
                  "Describe the S-curve as cumulative sum of D-hour UHs shifted by D hours.",
                  "Describe differentiation of the S-curve to derive a T-hour UH (T < D): UH_T = (S(t) - S(t - T)) / (D/T).",
                ],
              },
              {
                q: "State the two basic assumptions of unit-hydrograph theory.",
                marks: 2,
              },
              {
                q: "What is an S-curve? How is it used to derive a unit hydrograph of shorter duration?",
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
      title: "Groundwater",
      summary:
        "The subsurface branch of the cycle: occurrence and vertical zones of groundwater, the classification of aquifers, Darcy's law and hydraulic conductivity, types of wells and tube wells, and the steady radial-flow equations (Theim and Dupuit) for confined and unconfined aquifers.",
      chapter: {
        number: "03",
        title: "Groundwater",
        intro:
          "Unit III moves below the surface. It begins with the vertical zones of subsurface water, classifies aquifers by their boundaries and pressure, introduces Darcy's law and hydraulic conductivity as the law of groundwater motion, surveys open wells and tube wells with their construction methods, and ends with the steady radial flow to a well under confined and unconfined conditions using Theim's and Dupuit's equations.",
        inOneBreath:
          "Subsurface water occurs as soil moisture, vadose water, capillary fringe and groundwater in the zone of saturation; aquifers are confined between impermeable beds under piezometric pressure, unconfined with a free water table, leaky when semi-confined, or perched above a local impermeable lens; Darcy's law Q = K i A with hydraulic conductivity K ranging from 10^-8 m/day for clay to 10^3 m/day for clean gravel; wells are dug open wells (3 to 5 m diameter) or bored/driven/drilled tube wells into confined aquifers; and steady radial flow to a fully penetrating well in a confined aquifer follows Q = 2 pi K b (H - hw)/ln(R/rw) and in an unconfined aquifer follows Dupuit's Q = pi K (H^2 - hw^2)/ln(R/rw).",
        sections: [
          {
            number: "3.1",
            title: "Occurrence of groundwater",
            body: [
              "Below the earth's surface, water occurs in a vertical sequence of zones distinguished by their degree of saturation. From the surface downward these are the soil-water zone (the top metre or so held by root suction), the intermediate vadose zone (water in transit downward, held by capillarity), the capillary fringe (above the water table, saturated by capillary rise of perhaps 0.3 m in sand to 3 m in clay), and the zone of saturation (groundwater, all pores filled). The water table is the upper surface of the zone of saturation at atmospheric pressure; below it, water is under pressure that increases with depth.",
              "Groundwater is recharged by percolation from rainfall, by seepage from streams and lakes, and by return flow from irrigation; it is discharged by evapotranspiration where the water table is shallow, by seepage into streams (base flow), by springs, and by pumping from wells. The budget for an unconfined aquifer is: recharge equals pumping plus base flow plus evapotranspiration plus change in storage. Over a long period, natural recharge balances natural discharge and the water table fluctuates seasonally. Excessive pumping unbalances the budget: storage is mined, the water table falls, and in coastal aquifers seawater intrudes. Groundwater is therefore the slowest-moving and most over-tapped component of the hydrologic cycle.",
              "The residence time of groundwater ranges from months for shallow alluvium to thousands of years for deep confined aquifers, which makes contamination very persistent: a pollutant plume may take decades to traverse a few hundred metres. The porosity of a geological formation is the fraction of its bulk volume occupied by pores; specific yield is the fraction that drains under gravity (typically 0.10 to 0.30 for sands); specific retention is the fraction held against gravity by capillarity. An aquifer is water-bearing and permeable enough to yield water to a well; an aquiclude holds water but is too impermeable to yield it; an aquitard is semi-permeable and permits leakage.",
            ],
            bullets: [
              "Vertical zones: soil water, vadose (intermediate), capillary fringe, zone of saturation.",
              "Water table: upper surface of saturation at atmospheric pressure.",
              "Aquifer: water-bearing and permeable enough to yield to a well.",
              "Aquiclude: water-bearing but impermeable; aquitard: semi-permeable, leaks slowly.",
              "Porosity: fraction of bulk volume that is pore space.",
              "Specific yield: fraction draining under gravity; specific retention: fraction held by capillarity.",
              "Recharge = percolation + seepage + return irrigation flow; discharge = ET + base flow + springs + pumping.",
            ],
            table: {
              caption: "Vertical zones of subsurface water.",
              headers: ["Zone", "Saturation", "Typical depth", "Hold mechanism"],
              rows: [
                ["Soil water", "unsaturated", "0 to 1 m", "root suction"],
                ["Vadose / intermediate", "unsaturated", "1 m to a few m", "capillarity + gravity"],
                ["Capillary fringe", "saturated by capillarity", "0.3 to 3 m above WT", "capillary rise"],
                ["Zone of saturation", "saturated", "below water table", "gravity and pressure"],
                ["Confined aquifer", "saturated", "deep, between aquicludes", "piezometric pressure"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Vertical zones of subsurface water",
              caption:
                "The water table separates the vadose zone above from the zone of saturation below.",
              layers: [
                { label: "Soil water zone", note: "root suction; top 0 to 1 m" },
                { label: "Intermediate vadose zone", note: "water in transit downward" },
                { label: "Capillary fringe", note: "saturated by capillary rise above WT" },
                { label: "Zone of saturation (aquifer)", note: "groundwater; all pores filled" },
                { label: "Confining bed (aquiclude)", note: "impermeable; bounds the aquifer" },
              ],
            },
            callout: {
              type: "tip",
              title: "Specific yield vs porosity",
              body: "Specific yield is always less than porosity because some water is held by capillarity (specific retention). For sand: porosity about 0.35, specific yield about 0.25, specific retention about 0.10. Always give all three in an answer.",
            },
            keyTerms: [
              { term: "Water table", definition: "The upper surface of the zone of saturation, where water is at atmospheric pressure." },
              { term: "Specific yield", definition: "The fraction of bulk volume of an aquifer that drains under gravity; typically 0.10 to 0.30 for sands." },
              { term: "Aquiclude", definition: "A water-bearing formation that is too impermeable to transmit water to a well; it bounds confined aquifers." },
            ],
            examQuestions: [
              {
                q: "Describe the vertical distribution of subsurface water. Define water table, porosity, specific yield and specific retention, and explain how they relate to each other for a sandy aquifer.",
                marks: 7,
                outline: [
                  "List the vertical zones: soil water, vadose, capillary fringe, zone of saturation, with their depths and holding mechanism.",
                  "Define the water table as the upper surface of saturation at atmospheric pressure.",
                  "Define porosity n as the fraction of bulk volume occupied by pores.",
                  "Define specific yield Sy as the fraction draining under gravity, and specific retention Sr as the fraction held by capillarity.",
                  "State the relation n = Sy + Sr.",
                  "Give typical values for sand: n = 0.35, Sy = 0.25, Sr = 0.10; for clay: n = 0.50, Sy = 0.03, Sr = 0.47.",
                  "Sketch a vertical column from the surface to the zone of saturation labelling the zones.",
                ],
              },
              {
                q: "Distinguish between an aquifer, an aquiclude and an aquitard.",
                marks: 2,
              },
              {
                q: "Define specific yield and specific retention. How are they related to porosity?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Aquifer types",
            body: [
              "An aquifer is a permeable geological formation that stores and transmits water in usable quantities. Aquifers are classified by their water-bearing geometry and by the pressure of the water they contain. An unconfined aquifer has a free water table open to the atmosphere through the unsaturated zone above it; it is recharged directly by percolation from rainfall. A confined aquifer is bounded above and below by impermeable aquicludes and the water is under pressure greater than atmospheric: a well penetrating it rises to the piezometric surface, which is the imaginary continuation of the water level; if the piezometric surface lies above the ground, the well flows freely as an artesian well.",
              "A leaky aquifer is a confined aquifer whose bounding aquitard permits slow vertical leakage, so the aquifer is partially recharged or discharged through the aquitard. A perched aquifer is a small, local body of water sitting above the regional water table on a lens of impermeable material; it is unconfined in character but isolated and often exhausts quickly under pumping. Artesian conditions arise when the piezometric surface of a confined aquifer lies above the top of the aquifer; sub-artesian when it lies above the water table but below the ground; and flowing artesian when it lies above the ground. The hydraulic head in a confined aquifer is read from a piezometer, in an unconfined aquifer from an observation well tapping the water table.",
              "Aquifer materials range from alluvial sand and gravel (the most productive, with hydraulic conductivity of 10 to 100 m/day) to fractured sandstone and limestone (10^-3 to 10 m/day), to vesicular basalt and weathered crystalline rock (10^-5 to 1 m/day). The yield of a well depends on aquifer transmissivity (the product of hydraulic conductivity and saturated thickness) and storativity (the volume of water released per unit drop in head per unit area; 10^-3 to 10^-5 for confined, equal to specific yield for unconfined). A confined aquifer releases water mainly by elastic compression of the aquifer and expansion of water on pressure drop; an unconfined aquifer releases water by gravity drainage of pores. The two mechanisms give very different storativities.",
            ],
            bullets: [
              "Unconfined aquifer: free water table, recharged directly by percolation.",
              "Confined aquifer: bounded by aquicludes, water under pressure, piezometric surface.",
              "Artesian: piezometric surface above ground (well flows freely); sub-artesian: below ground.",
              "Leaky aquifer: bounded by aquitard that allows slow vertical leakage.",
              "Perched aquifer: small body above the regional water table on an impermeable lens.",
              "Transmissivity T = K * b (hydraulic conductivity times saturated thickness).",
              "Storativity: 10^-3 to 10^-5 confined; equal to specific yield unconfined.",
            ],
            table: {
              caption: "Classification of aquifers.",
              headers: ["Type", "Boundaries", "Pressure", "Recharge"],
              rows: [
                ["Unconfined", "free top", "atmospheric", "direct percolation"],
                ["Confined", "aquicludes top and bottom", "above atmospheric", "distant outcrop"],
                ["Leaky", "aquitard above", "above atmospheric", "through aquitard"],
                ["Perched", "impermeable lens below", "atmospheric", "local percolation"],
                ["Artesian (flowing)", "aquicludes", "above ground level", "distant outcrop"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Aquifer classification from common to specialised",
              caption:
                "Top tier: rare and special; base tier: the common aquifer of irrigation wells.",
              tiers: [
                { label: "Artesian (flowing)", note: "piezometric surface above ground" },
                { label: "Leaky / perched", note: "specialised geometry" },
                { label: "Confined", note: "piezometric pressure" },
                { label: "Unconfined", note: "free water table" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch the cross-section",
              body: "An aquifer question almost always rewards a labelled vertical cross-section showing unconfined, confined and perched aquifers, the piezometric surface, a flowing artesian well and a recharge outcrop. Practise this sketch until you can draw it from memory in three minutes.",
            },
            keyTerms: [
              { term: "Unconfined aquifer", definition: "An aquifer with a free water table open to the atmosphere through the vadose zone; recharged directly by percolation." },
              { term: "Confined aquifer", definition: "An aquifer bounded above and below by aquicludes with water under pressure greater than atmospheric." },
              { term: "Artesian well", definition: "A well in a confined aquifer whose piezometric surface lies above the ground, so the well flows freely." },
            ],
            examQuestions: [
              {
                q: "Classify aquifers with neat sketches. Distinguish confined and unconfined aquifers in terms of boundaries, pressure, recharge, storativity and type of well.",
                marks: 7,
                outline: [
                  "Define an aquifer as a permeable formation that stores and transmits usable water.",
                  "Classify: unconfined, confined, leaky, perched, artesian (flowing) and sub-artesian.",
                  "Sketch a vertical cross-section: vadose zone, water table, unconfined aquifer, aquiclude, confined aquifer, piezometric surface, artesian well, recharge outcrop.",
                  "Unconfined: free water table, atmospheric pressure, direct recharge, storativity = specific yield, dug well.",
                  "Confined: bounded by aquicludes, pressure above atmospheric, recharge at distant outcrop, storativity 10^-3 to 10^-5, tube well.",
                  "Artesian: piezometric surface above ground, well flows freely without pumping.",
                  "Perched: local impermeable lens, small body, exhausts quickly.",
                ],
              },
              {
                q: "What is a perched aquifer? Where does it form?",
                marks: 2,
              },
              {
                q: "Define transmissivity and storativity. State typical values for confined and unconfined aquifers.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Darcy's law and permeability",
            body: [
              "Darcy's law states that the volumetric rate of flow Q of water through a porous medium is proportional to the hydraulic gradient i and the cross-sectional area A normal to flow: Q = K i A, where K is the hydraulic conductivity (also called the coefficient of permeability) with units of velocity (m/day or cm/s). The discharge velocity v = Q/A = K i; the seepage velocity, the actual average velocity of water in the pores, is v_s = v / n where n is porosity, and is several times larger than the discharge velocity. Darcy's law is valid for laminar flow at Reynolds number less than about 1, which covers almost all natural groundwater motion.",
              "Hydraulic conductivity K depends on both the porous medium (pore size distribution, tortuosity, specific surface) and the fluid (viscosity and density). To separate these, the intrinsic permeability k is defined by K = k rho g / mu, where rho is fluid density, g is gravity and mu is dynamic viscosity; k has units of length squared and depends on the medium alone. Typical K values are 10 to 1000 m/day for clean gravel, 1 to 100 for clean sand, 10^-2 to 1 for silty sand, 10^-4 to 10^-2 for silt, and less than 10^-6 for unfractured clay. K is measured in the laboratory by a constant-head or falling-head permeameter, and in the field by pumping tests.",
              "Laboratory determination uses a constant-head permeameter for high-K soils (sand) - water flows under a fixed head difference and Q is measured - and a falling-head permeameter for low-K soils (silt, clay) - the head in a standpipe falls with time and K is computed from K = (a L / A t) ln(h0/h1). Field determination uses pumping tests: a well is pumped at constant rate Q until steady state, drawdown is measured in observation wells at various distances, and K (or transmissivity T = K b) is computed from the steady radial-flow formula. Darcy's law is the foundation of every groundwater-flow equation and every well-discharge formula studied in the next section.",
            ],
            bullets: [
              "Darcy's law: Q = K i A; discharge velocity v = K i; seepage velocity v_s = v / n.",
              "Valid for laminar flow at Reynolds number < 1, covering almost all natural groundwater.",
              "Hydraulic conductivity K depends on medium (pore size, tortuosity) and fluid (viscosity, density).",
              "Intrinsic permeability k = K mu / (rho g), units of length squared, medium-only.",
              "Typical K: clean gravel 10 to 1000 m/day, sand 1 to 100, silt 10^-4 to 10^-2, clay < 10^-6.",
              "Constant-head permeameter for sand (high K); falling-head for silt and clay (low K).",
              "Field K (or T = K b) from pumping tests with observation wells.",
            ],
            codeExample: {
              language: "python",
              caption: "Darcy's law: discharge, discharge velocity and seepage velocity through a sandy sample.",
              code: [
                "# Darcy's law: Q = K * i * A, with i = dh / L",
                "K        = 0.50    # m/day, clean sand",
                "dh       = 1.5     # m head difference",
                "L        = 12.0    # m flow length",
                "A        = 5.0     # m^2 cross-section",
                "porosity = 0.30",
                "",
                "i   = dh / L",
                "Q   = K * i * A              # m^3/day",
                "v   = Q / A                  # discharge velocity, m/day",
                "v_s = v / porosity           # seepage velocity, m/day",
                "",
                "print(f\"Hydraulic gradient i = {i:.4f}\")",
                "print(f\"Discharge Q           = {Q:.4f} m3/day\")",
                "print(f\"Discharge velocity v  = {v:.4f} m/day\")",
                "print(f\"Seepage velocity v_s  = {v_s:.4f} m/day\")",
              ].join("\n"),
            },
            diagram: {
              kind: "flow",
              title: "From a soil sample to a measured hydraulic conductivity",
              caption:
                "Each step adds a numerical result; the final K is used in well formulas.",
              steps: [
                { label: "Soil sample in permeameter", note: "constant head for sand" },
                { label: "Apply head difference dh over length L", note: "i = dh/L" },
                { label: "Measure discharge Q and area A", note: "v = Q/A" },
                { label: "Compute K = v / i", note: "Darcy's law" },
                { label: "Use K in field pumping tests", note: "T = K b" },
              ],
            },
            callout: {
              type: "exam",
              title: "Constant vs falling head",
              body: "Remember which permeameter suits which soil: constant head for high-K sand (large flow measurable), falling head for low-K silt/clay (slow flow needs time-tagged standpipe). Mixing them up is the commonest lost mark in lab-method questions.",
            },
            keyTerms: [
              { term: "Darcy's law", definition: "Empirical law Q = K i A stating that flow through a porous medium is proportional to hydraulic gradient and cross-sectional area." },
              { term: "Hydraulic conductivity", definition: "The constant K in Darcy's law, with units of velocity; depends on both porous medium and fluid properties." },
              { term: "Intrinsic permeability", definition: "Medium-only property k = K mu / (rho g) with units of length squared, separating medium from fluid effects." },
            ],
            examQuestions: [
              {
                q: "State Darcy's law and define each term. Explain how hydraulic conductivity is determined in the laboratory and in the field. Compute the discharge through a 5 m^2 sandy cross-section with K = 0.50 m/day, head difference 1.5 m and flow length 12 m.",
                marks: 7,
                outline: [
                  "State Darcy's law Q = K i A and define K (hydraulic conductivity), i (dh/L, hydraulic gradient) and A (cross-sectional area).",
                  "Mention validity: laminar flow at Re < 1; define discharge v = Q/A = K i and seepage v_s = v/n.",
                  "Describe constant-head permeameter: fixed head difference, Q measured, K = Q L / (A dh); for sand.",
                  "Describe falling-head permeameter: standpipe head falls from h0 to h1 in time t, K = (a L / A t) ln(h0/h1); for silt/clay.",
                  "Describe field pumping test: pump at Q, measure drawdown in observation wells, solve steady radial flow for T = K b.",
                  "Compute i = 1.5 / 12 = 0.125, then Q = 0.50 * 0.125 * 5 = 0.3125 m^3/day.",
                  "Comment on seepage velocity v_s = Q/(A*n) = 0.0625 / 0.30 = 0.21 m/day for porosity 0.30.",
                ],
              },
              {
                q: "Differentiate between hydraulic conductivity and intrinsic permeability.",
                marks: 2,
              },
              {
                q: "Describe a falling-head permeameter with a sketch and state where it is used.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Wells and tube wells",
            body: [
              "A well is a vertical hole dug or drilled into an aquifer to withdraw groundwater. Open wells (dug wells) are 3 to 5 metres in diameter, shallow, lined with masonry or concrete, and tap unconfined aquifers: their yield is small (a few thousand litres per day) and they are recharged by the aquifer around their base and sides. Tube wells are smaller in diameter (10 to 30 cm), drilled deep into confined or unconfined aquifers, fitted with a strainer and a submersible or centrifugal pump, and yield much more - a few hundred to several thousand litres per minute. A tube well assembly consists of the well casing, the strainer assembly that admits water, the pump housing and the pump itself.",
              "Tube wells are constructed by one of several methods: the percussion (cable-tool) method hammers a heavy bit to break the formation; the rotary method circulates drilling mud that carries cuttings up and supports the hole; the reverse rotary method pumps water down the annulus and up the drill pipe; and the auger method bores soft formations. After drilling, the casing and strainer are lowered, the annulus is gravel-packed to prevent sand entry, and the well is developed by surging, jetting or chemical treatment to remove fine material and improve yield. The choice of method is governed by formation hardness, depth, diameter and the available rig; rotary is the commonest for deep alluvial wells in India.",
              "A well's specific capacity is its discharge divided by the drawdown (litres per minute per metre of drawdown) and is the standard index of well performance; it declines with time as the aquifer is mined or the strainer clogs. The well's interference with neighbouring wells is its radius of influence: pumping lowers the piezometric surface in a cone around the well, and two wells closer than twice their combined radii of influence interfere and reduce each other's yield. Spacing of wells is therefore guided by the radius of influence computed from the steady radial flow equations. Well loss is the additional head lost in turbulent flow near the well screen and is separated from aquifer loss by a step-drawdown test.",
            ],
            bullets: [
              "Open (dug) well: 3 to 5 m diameter, shallow, unconfined aquifer, masonry-lined.",
              "Tube well: 10 to 30 cm diameter, deep, strainer and pump, large yield.",
              "Drilling methods: percussion (cable tool), rotary (direct and reverse), auger.",
              "Components: casing, strainer assembly, gravel pack, pump housing, pump.",
              "Development: surging, jetting, chemical treatment to remove fines and improve yield.",
              "Specific capacity = Q / s (litres/min/m of drawdown); index of well performance.",
              "Well interference: two wells closer than 2 x radius of influence reduce each other's yield.",
            ],
            table: {
              caption: "Open well versus tube well.",
              headers: ["Aspect", "Open well", "Tube well"],
              rows: [
                ["Diameter", "3 to 5 m", "10 to 30 cm"],
                ["Depth", "shallow (< 30 m)", "deep (50 to 300 m)"],
                ["Aquifer", "unconfined", "confined or deep unconfined"],
                ["Yield", "few thousand lpd", "hundreds to thousands lpm"],
                ["Lining", "masonry or RCC", "steel/PVC casing and strainer"],
                ["Pump", "centrifugal at top", "submersible or turbine"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Open well versus tube well - same job, very different scale",
              caption:
                "Diameter, depth and yield differ by an order of magnitude; aquifer type sets the choice.",
              left: {
                heading: "Open well",
                items: [
                  "Diameter 3 to 5 m, depth < 30 m",
                  "Masonry-lined, hand-dug or bored",
                  "Taps unconfined aquifer",
                  "Yield a few thousand litres per day",
                  "Top-mounted centrifugal pump",
                ],
              },
              right: {
                heading: "Tube well",
                items: [
                  "Diameter 10 to 30 cm, depth 50 to 300 m",
                  "Steel/PVC casing with strainer",
                  "Taps confined or deep unconfined aquifer",
                  "Yield hundreds to thousands of lpm",
                  "Submersible or vertical turbine pump",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Specific capacity",
              body: "Specific capacity = Q / s is the single best index of a well's health. Measure it annually; a slow decline signals clogging of the strainer or mining of the aquifer and prompts well redevelopment or a smaller pump duty.",
            },
            keyTerms: [
              { term: "Open well", definition: "A large-diameter, shallow, masonry-lined well tapping an unconfined aquifer and yielding a few thousand litres per day." },
              { term: "Tube well", definition: "A small-diameter, deep drilled well fitted with a strainer and a submersible pump, tapping confined or deep unconfined aquifers." },
              { term: "Specific capacity", definition: "The discharge of a well per unit drawdown (litres per minute per metre), the standard index of well performance." },
            ],
            examQuestions: [
              {
                q: "Distinguish between an open well and a tube well. Describe with a sketch the components of a tube well assembly and any two methods of tube-well construction.",
                marks: 7,
                outline: [
                  "List the differences: diameter, depth, aquifer, yield, lining, pump type, cost.",
                  "Sketch a tube well assembly: bore hole, casing pipe, strainer section, gravel pack, pump housing, submersible pump, discharge pipe.",
                  "Describe the percussion method: heavy bit breaks formation; bailers remove cuttings; suited to hard rock.",
                  "Describe the direct rotary method: rotating drill bit, mud circulation carries cuttings up and supports the wall; suited to deep alluvial wells.",
                  "Mention the reverse rotary variant: water flows down the annulus and up the drill pipe; suited to large-diameter shallow wells.",
                  "State that the strainer section is placed opposite the most permeable aquifer horizon.",
                  "Mention well development (surging, jetting) and gravel packing to prevent sand movement.",
                ],
              },
              {
                q: "Define specific capacity of a well. Why is it monitored over time?",
                marks: 2,
              },
              {
                q: "What is well interference? How does it influence the spacing of tube wells?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Well hydraulics - steady radial flow",
            body: [
              "Steady radial flow to a well describes the cone of depression that forms around a pumping well when pumping has continued long enough that drawdown stabilises in time. The water moves radially inward toward the well through a cylindrical surface of radius r and height equal to the saturated thickness b (confined) or to the local water-table height (unconfined). Applying Darcy's law Q = K i A to this geometry, with i = dh/dr and A = 2 pi r b for a confined aquifer, integrating from the well radius r_w (head h_w) to the radius of influence R (head H), yields Theim's equation for confined aquifers: Q = 2 pi K b (H - h_w) / ln(R / r_w).",
              "For an unconfined aquifer the saturated thickness varies from h_w at the well to H at the radius of influence, so the integration is over the height h itself; Dupuit's assumptions (negligible vertical flow, hydraulic gradient equal to the slope of the water table) lead to Q = pi K (H^2 - h_w^2) / ln(R / r_w). The drawdown s = H - h_w at the well is the well-pumping lift; if observation wells are available at distances r1 and r2 with heads h1 and h2, the field form Q = 2 pi K b (h2 - h1) / ln(r2/r1) for confined or Q = pi K (h2^2 - h1^2) / ln(r2/r1) for unconfined is used and K is solved from measured heads.",
              "The radius of influence R is the radial distance beyond which drawdown is negligible; it grows with pumping time and is estimated empirically by Sichardt's formula R = 3000 s sqrt(K) (with s in metres, K in m/s and R in metres) or by iteration from observation-well data. The equations assume a homogeneous, isotropic, horizontal, infinite aquifer, fully penetrating well and steady state; in practice steady state is rarely achieved and the unsteady Theis equation is needed for transient pumping. Nevertheless the steady equations give quick design estimates of well yield for a chosen drawdown, of drawdown for a chosen pump discharge, and of K from a steady pumping test - the three classic groundwater computations.",
            ],
            bullets: [
              "Steady radial flow: cone of depression stabilised in time; water moves radially inward.",
              "Theim confined: Q = 2 pi K b (H - h_w) / ln(R / r_w).",
              "Dupuit unconfined: Q = pi K (H^2 - h_w^2) / ln(R / r_w).",
              "Field form with two observation wells: Q = 2 pi K b (h2 - h1) / ln(r2/r1) confined.",
              "Radius of influence R grows with time; Sichardt: R = 3000 s sqrt(K) (m, m/s).",
              "Assumptions: homogeneous, isotropic, horizontal, infinite, fully penetrating well, steady state.",
              "Unsteady flow uses the Theis equation; steady equations give quick design estimates.",
            ],
            codeExample: {
              language: "python",
              caption: "Theim confined, Dupuit unconfined, and K from observation wells.",
              code: [
                "import math",
                "",
                "# Confined aquifer steady radial flow (Theim)",
                "K  = 12.0    # m/day",
                "b  = 20.0    # aquifer thickness, m",
                "H  = 35.0    # original piezometric head, m",
                "hw = 28.0    # head in the pumped well, m",
                "R  = 300.0   # radius of influence, m",
                "rw = 0.30    # well radius, m",
                "Q_conf = 2 * math.pi * K * b * (H - hw) / math.log(R / rw)",
                "print(f\"Confined well discharge Q = {Q_conf:.1f} m3/day\")",
                "",
                "# Unconfined (Dupuit)",
                "Hu  = 30.0",
                "hwu = 24.0",
                "Q_unconf = math.pi * K * (Hu**2 - hwu**2) / math.log(R / rw)",
                "print(f\"Unconfined well discharge Q = {Q_unconf:.1f} m3/day\")",
                "",
                "# Solve K from two observation wells (confined, pumped Q = 1200 m3/day)",
                "r1, h1 = 30.0, 33.0",
                "r2, h2 = 100.0, 34.5",
                "Q_obs   = 1200.0",
                "K_solved = Q_obs * math.log(r2/r1) / (2 * math.pi * b * (h2 - h1))",
                "print(f\"Solved K from observation wells = {K_solved:.2f} m/day\")",
              ].join("\n"),
            },
            diagram: {
              kind: "flow",
              title: "Deriving Theim's equation step by step",
              caption:
                "Each step is a single algebraic operation; the result is the well-discharge formula.",
              steps: [
                { label: "Assume steady radial flow to a fully penetrating well", note: "cone stabilised" },
                { label: "Apply Darcy's law Q = K i A", note: "A = 2 pi r b, i = dh/dr" },
                { label: "Separate variables: Q dr/r = 2 pi K b dh", note: "integrate both sides" },
                { label: "Integrate from r_w to R: Q ln(R/r_w) = 2 pi K b (H - h_w)", note: "field form" },
                { label: "Solve for Q: Q = 2 pi K b (H - h_w) / ln(R / r_w)", note: "Theim confined" },
              ],
            },
            callout: {
              type: "warning",
              title: "Natural log, not log10",
              body: "Theim and Dupuit equations use the natural logarithm ln(R/r_w). A common mistake is to use log10, which underestimates the denominator by a factor of 2.303 and overestimates Q by that same factor. Always write ln explicitly.",
            },
            keyTerms: [
              { term: "Cone of depression", definition: "The conical drawdown surface that forms around a pumping well as water is removed from the aquifer." },
              { term: "Theim equation", definition: "Steady radial-flow formula Q = 2 pi K b (H - h_w) / ln(R/r_w) for a fully penetrating well in a confined aquifer." },
              { term: "Dupuit's assumptions", definition: "Groundwater flow is horizontal and the hydraulic gradient equals the slope of the water table; used to derive the unconfined well equation." },
            ],
            examQuestions: [
              {
                q: "Derive the equation for steady radial flow to a fully penetrating well in a confined aquifer. State the assumptions. Compute the discharge from a well with K = 12 m/day, b = 20 m, H = 35 m, h_w = 28 m, R = 300 m, r_w = 0.30 m.",
                marks: 7,
                outline: [
                  "State the assumptions: homogeneous, isotropic, horizontal, infinite, confined aquifer; fully penetrating well; steady state; Darcy's law valid.",
                  "Consider an elemental cylinder of radius r and thickness dr around the well; cross-section A = 2 pi r b.",
                  "Apply Darcy's law: Q = K (dh/dr) (2 pi r b).",
                  "Separate variables: Q dr / r = 2 pi K b dh.",
                  "Integrate from r_w (head h_w) to R (head H): Q ln(R/r_w) = 2 pi K b (H - h_w).",
                  "Solve for Q: Q = 2 pi K b (H - h_w) / ln(R / r_w).",
                  "Substitute numbers: Q = 2 pi 12 20 (35-28) / ln(300/0.30) = 10556 / 6.908 = about 1528 m^3/day; conclude the well yields roughly 17.7 litres per second.",
                ],
              },
              {
                q: "State Dupuit's assumptions for unconfined flow.",
                marks: 2,
              },
              {
                q: "Write the formula for the radius of influence due to Sichardt and define its terms.",
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
      title: "Irrigation Engineering",
      summary:
        "The art of supplying water to crops: necessity and benefits of irrigation, flow versus lift irrigation, crop water requirement and consumptive use, the duty-delta-base period triangle, and the efficiencies that measure how much diverted water actually reaches the root zone.",
      chapter: {
        number: "04",
        title: "Irrigation Engineering",
        intro:
          "Unit IV frames irrigation as a water-balance problem for agriculture. It starts with the necessity, benefits and ill-effects of irrigation, separates flow irrigation (canal-fed by gravity) from lift irrigation (pumped), defines crop water requirement and consumptive use measured by Penman and Blaney-Criddle, introduces the duty-delta-base period triangle that converts canal discharge to field depth, and closes with conveyance, application and water-use efficiencies.",
        inOneBreath:
          "Irrigation is needed where rainfall is deficient, untimely or uneven, and it raises crop yield, fixes cropping pattern and gives protection against famine but causes waterlogging and salinity if overdone; flow irrigation delivers canal water by gravity and lift irrigation pumps from wells or rivers; crop water requirement is the total water needed for evapotranspiration plus leaching, estimated by Penman, Blaney-Criddle and Hargreaves; duty D (ha/cumec), delta (depth of water in cm) and base period B (days) satisfy delta = 8.64 B/D; and overall efficiency equals conveyance efficiency times application efficiency, typically 30-40 percent from reservoir to crop.",
        sections: [
          {
            number: "4.1",
            title: "Necessity of irrigation",
            body: [
              "Irrigation is the artificial application of water to soil to supply moisture needed for crop growth that natural rainfall does not provide adequately. It is necessary where rainfall is deficient in total amount (arid and semi-arid regions, less than about 750 mm per year), untimely (rainfall comes at the wrong phase of the crop calendar), or unevenly distributed (long dry spells between heavy falls). In India, where the monsoon concentrates 75 percent of annual rainfall in three months, irrigation is essential to raise a second (rabi) crop, to stabilise the kharif crop against mid-season dry spells, and to grow high-value crops such as sugarcane and vegetables that need assured water throughout.",
              "Beyond mere survival of the crop, irrigation brings several benefits. It raises crop yield by 30 to 100 percent compared to rain-fed cultivation, allows multiple crops per year (intensive cropping), fixes the cropping pattern so that high-value crops can be planned, protects against famine by stabilising production across years of deficient rainfall, generates rural employment during construction and operation, and supports allied industries such as agro-processing. In arid regions it converts barren land to productive cropland; in coastal saline tracts, controlled irrigation leaches salts from the root zone and reclaims soil. These benefits explain why public investment in irrigation has historically been among the largest line items of agricultural budgets.",
              "Irrigation also has ill-effects that must be managed. Over-irrigation raises the water table, waterlogs the root zone, excludes soil air and reduces crop yield; in arid regions, evaporation from a shallow water table leaves salts at the surface (secondary salinisation) and renders the land barren within years if not drained. Canal seepage and poor on-farm water control are the usual causes; the remedy is conjunctive use of canal and groundwater, lined canals, sub-surface drainage and regulated water pricing. Mosquito-borne disease, displacement by reservoirs and inequitable distribution between head-reach and tail-end farmers are also common social and environmental concerns. Good irrigation engineering balances the benefits against these ill-effects by design, operation and governance.",
            ],
            bullets: [
              "Irrigation: artificial water application where rainfall is deficient, untimely or uneven.",
              "Indian monsoon concentrates 75 percent of annual rain in 3 months; irrigation is essential for rabi.",
              "Benefits: higher yield, multiple cropping, fixed cropping pattern, famine protection, employment.",
              "Reclaims arid land and leaches salts from coastal saline tracts.",
              "Ill-effects: waterlogging, secondary salinisation, mosquito-borne disease, displacement.",
              "Remedy: conjunctive use, lined canals, sub-surface drainage, regulated pricing.",
              "Social concerns: inequitable distribution between head-reach and tail-end farmers.",
            ],
            table: {
              caption: "Benefits and ill-effects of irrigation.",
              headers: ["Aspect", "Benefit", "Ill-effect"],
              rows: [
                ["Crop yield", "30 to 100 percent higher", "waterlogging reduces yield"],
                ["Cropping", "multiple crops per year", "secondary salinisation in arid tracts"],
                ["Employment", "construction and operation work", "displacement by reservoirs"],
                ["Land", "reclaims arid and saline soils", "raises water table; waterlogging"],
                ["Health", "better nutrition", "mosquito-borne disease in standing water"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "When is irrigation necessary?",
              caption:
                "Three failure modes of rainfall each trigger the same remedy: supply water artificially.",
              start: "Rainfall on the crop",
              branches: [
                { label: "Deficient total", outcome: "less than 750 mm/yr; arid and semi-arid", good: false },
                { label: "Untimely", outcome: "right amount, wrong phase of crop calendar", good: false },
                { label: "Uneven distribution", outcome: "long dry spells between heavy falls", good: false },
                { label: "Adequate and timely", outcome: "no irrigation needed; rain-fed farming", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Waterlogging threshold",
              body: "A water table within 1 to 2 m of the surface is the waterlogging threshold for most crops. Beyond it, root-zone aeration fails and yields collapse. RGPV asks for this number and the remedial measures (sub-surface drainage, lining, conjunctive use).",
            },
            keyTerms: [
              { term: "Irrigation", definition: "The artificial application of water to soil to supply moisture that natural rainfall does not provide adequately for crop growth." },
              { term: "Waterlogging", definition: "A condition in which the water table rises into the root zone, excluding soil air and reducing crop yield." },
              { term: "Secondary salinisation", definition: "Accumulation of salts at the soil surface caused by evaporation from a shallow, irrigation-fed water table in arid regions." },
            ],
            examQuestions: [
              {
                q: "Explain the necessity of irrigation in India. Discuss its benefits and ill-effects, and suggest measures to control the ill-effects.",
                marks: 7,
                outline: [
                  "Define irrigation as artificial application of water to supplement deficient or untimely rainfall.",
                  "State the necessity: deficient rainfall (< 750 mm), untimely (wrong phase), uneven distribution (dry spells); India's monsoon concentrates 75 percent of rain in 3 months.",
                  "List benefits: 30 to 100 percent higher yield, multiple cropping, fixed cropping pattern, famine protection, rural employment, reclamation of arid and saline soils.",
                  "List ill-effects: waterlogging (water table within 1 to 2 m), secondary salinisation in arid tracts, mosquito-borne disease, displacement by reservoirs, inequitable head-reach vs tail-end distribution.",
                  "Remedial measures: lined canals reduce seepage; sub-surface drainage lowers the water table.",
                  "Conjunctive use of canal water and groundwater balances the budget; regulated pricing discourages overuse.",
                  "Conclude that irrigation engineering balances benefits against ill-effects by design, operation and governance.",
                ],
              },
              {
                q: "Define waterlogging. State the depth of the water table at which it is considered harmful.",
                marks: 2,
              },
              {
                q: "List any three ill-effects of irrigation and the corresponding remedial measures.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Flow irrigation",
            body: [
              "Flow irrigation delivers water to the field by gravity from a surface source - a river, reservoir or canal - and is distinguished from lift irrigation in which water is pumped from a well, river or reservoir. In a flow-irrigation system, a diversion head works (weir or barrage) raises the river level above the command area, an off-taking canal regulates flow into a main canal, which branches into distributaries, minors and field channels down to the outlet serving a group of farms. The water flows under gravity because every reach has a bed slope; the canals are designed to carry the design discharge at a non-silting, non-scouring velocity.",
              "Canals are classified by their lining (unlined earthen, lined with concrete, brick or membrane), by their alignment (ridge or watershed canal runs along the highest contour, contour canal runs along a contour with a single-side command, and side-slope canal runs roughly perpendicular to contours), and by their supply (permanent, branch and minor). The design of a canal involves fixing the discharge from crop water requirement and duty, choosing a trapezoidal section, computing the longitudinal slope from the terrain, and applying Manning's or Lacey's equations to fix the bed width and depth. The Kennedy and Lacey theories of stable channels, although empirical, are still the basis of unlined alluvial canal design in India.",
              "Lift irrigation complements flow irrigation in three situations: where the command area lies above the canal's full supply level, where the river bed is too low or seasonal for diversion, and where groundwater is the only reliable source. A lift-irrigation scheme pumps water from a sump or well to a delivery chamber above the command area, from where it is distributed by gravity through a pipe or minor canal; the operating cost (energy) makes lift irrigation several times costlier per hectare than flow. Conjunctive use - combining flow in the wet season and lift in the dry - minimises waterlogging and tail-end deprivation and is now the recommended practice for command areas with both surface and groundwater.",
            ],
            bullets: [
              "Flow irrigation: gravity supply from river, reservoir or canal; lift irrigation pumps water.",
              "Head works: weir or barrage; off-taking main canal, distributaries, minors, field channels.",
              "Canal alignment: watershed (ridge), contour (single-side command), side-slope.",
              "Lining: unlined earthen, concrete, brick, membrane; controls seepage and waterlogging.",
              "Design discharge from crop water requirement and duty; trapezoidal section; Manning's or Lacey's.",
              "Kennedy's critical velocity and Lacey's regime theory for unlined alluvial canals.",
              "Lift irrigation: above-canal command, low or seasonal river, or groundwater-only situations.",
            ],
            table: {
              caption: "Flow irrigation versus lift irrigation.",
              headers: ["Aspect", "Flow irrigation", "Lift irrigation"],
              rows: [
                ["Source", "river, reservoir, canal", "well, river sump, reservoir"],
                ["Energy", "gravity only", "pumped (electric/diesel)"],
                ["Cost/ha", "low capital, low O&M", "low capital, high energy"],
                ["Command", "below canal FSL", "above canal FSL or remote"],
                ["Suitability", "large commands, perennial source", "small commands, undulating terrain"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "A flow-irrigation system from head works to field",
              caption:
                "Each stage carries the design discharge one reach closer to the crop.",
              stages: [
                { label: "Diversion head works", note: "weir or barrage" },
                { label: "Main canal", note: "off-take at the head regulator" },
                { label: "Branch and distributary", note: "smaller discharge" },
                { label: "Minor and sub-minor", note: "delivery to outlet" },
                { label: "Field channel and crop", note: "rotational warabandi" },
              ],
            },
            callout: {
              type: "tip",
              title: "Watershed canal",
              body: "A watershed (ridge) canal commands the largest area on both sides because it follows the highest line of the terrain; water can flow by gravity to either side. RGPV asks the candidate to choose the best alignment for a given topographic sketch - pick the ridge line.",
            },
            keyTerms: [
              { term: "Flow irrigation", definition: "Gravity-fed irrigation that delivers water from a river, reservoir or canal to the field through a network of canals." },
              { term: "Watershed canal", definition: "A canal aligned along the highest line (ridge) of the terrain so that it commands both sides by gravity." },
              { term: "Conjunctive use", definition: "The combined planned use of surface water and groundwater to balance supply, control waterlogging and improve equity." },
            ],
            examQuestions: [
              {
                q: "Distinguish between flow and lift irrigation. Describe a typical flow-irrigation system from the head works to the field, and classify canals by alignment.",
                marks: 7,
                outline: [
                  "Define flow irrigation (gravity) and lift irrigation (pumped); state where each suits.",
                  "List the components of a flow system: diversion head works (weir/barrage), head regulator, main canal, branch, distributary, minor, sub-minor, field channel, outlet.",
                  "Describe the alignment classification: watershed (ridge), contour (single-side command), side-slope.",
                  "Describe the lining classification: unlined earthen, concrete-lined, brick-lined, membrane-lined.",
                  "State that the design discharge is fixed by crop water requirement and duty; trapezoidal section with non-silting, non-scouring velocity.",
                  "Mention Manning's, Kennedy's and Lacey's equations for stable channel design.",
                  "Conclude that lift is used above-canal command, low or seasonal river, or groundwater-only areas, and that conjunctive use is recommended.",
                ],
              },
              {
                q: "What is a watershed canal? Why does it command the largest area?",
                marks: 2,
              },
              {
                q: "Classify canals by alignment and give a one-line description of each type.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Crop water requirement",
            body: [
              "Crop water requirement is the total quantity of water that must be applied to a crop to satisfy its evapotranspiration plus the leaching requirement, over the entire growing season, expressed in depth (mm or cm) or volume (ha-m) per hectare. It is the sum of consumptive use (the water actually evapotranspired by the crop), the water needed to leach salts below the root zone in arid regions, the water needed to saturate the soil at the start of nursery or for land preparation (e.g. puddling for rice), and small losses in the field application. Consumptive use dominates and is the main driver of design.",
              "Consumptive use is estimated by direct methods (lysimeter, field-plot, soil-moisture sampling, inflow-outflow) or by climatic formulae that convert meteorological data to evapotranspiration. The Penman-Monteith equation, the FAO recommended standard, combines net radiation, temperature, wind, humidity and crop resistance into a physically complete ET estimate; the simpler Blaney-Criddle uses only mean temperature and daytime hours, ET = p (0.46 T + 8), in mm per month; Hargreaves uses temperature range and extraterrestrial radiation; the modified Penman dropped the crop resistance term. Each method gives reference ET for a standard grass; multiplying by a crop coefficient Kc (0.4 to 1.2) gives the crop's actual consumptive use at each growth stage.",
              "Crop coefficient Kc varies with crop type and growth stage: low at emergence (small leaf area), rising through the vegetative stage, peaking at mid-season when leaf area is maximum and falling again at senescence. The total seasonal consumptive use is the time integral of Kc x ET0 over the growing period. Effective rainfall - the portion of rainfall actually available to the crop after runoff and deep percolation - is subtracted from the consumptive use to give the net irrigation requirement; adding field-application and conveyance losses gives the gross irrigation requirement, which the canal or well must supply. A typical wheat crop in north India requires about 350 to 450 mm of net irrigation over a 140-day rabi season.",
            ],
            bullets: [
              "Crop water requirement = consumptive use + leaching + land preparation + field losses.",
              "Consumptive use dominates; estimated by lysimeter, soil sampling, or climatic formulae.",
              "Penman-Monteith: FAO standard; uses radiation, temperature, wind, humidity, crop resistance.",
              "Blaney-Criddle: ET = p (0.46 T + 8), mm/month, simple temperature method.",
              "Crop coefficient Kc: 0.4 to 1.2, low at emergence, peak at mid-season, falls at senescence.",
              "Net irrigation = consumptive use - effective rainfall.",
              "Gross irrigation = net irrigation / (application x conveyance efficiency).",
            ],
            codeExample: {
              language: "python",
              caption: "Blaney-Criddle monthly consumptive use for wheat and net irrigation requirement.",
              code: [
                "# Blaney-Criddle: ET0 = p * (0.46*T + 8), mm/month; CU = Kc * ET0",
                "months = [(\"Nov\", 22.0, 7.0, 0.40),",
                "          (\"Dec\", 17.0, 7.0, 0.70),",
                "          (\"Jan\", 14.0, 7.0, 0.90),",
                "          (\"Feb\", 17.0, 7.4, 1.00),",
                "          (\"Mar\", 22.0, 8.0, 0.85)]",
                "seasonal_cu = 0.0",
                "for name, T, p, Kc in months:",
                "    et0 = p * (0.46 * T + 8)",
                "    cu  = Kc * et0",
                "    seasonal_cu += cu",
                "    print(f\"{name}: T={T} C, ET0={et0:6.1f} mm, Kc={Kc}, CU={cu:6.1f} mm\")",
                "",
                "effective_rain = 40.0   # mm over the season",
                "net_irr = max(seasonal_cu - effective_rain, 0.0)",
                "print(f\"Seasonal consumptive use = {seasonal_cu:.1f} mm\")",
                "print(f\"Net irrigation requirement = {net_irr:.1f} mm\")",
              ].join("\n"),
            },
            diagram: {
              kind: "flow",
              title: "From climatic data to gross irrigation requirement",
              caption:
                "Each step adds one conversion; the last step sizes the canal or pump duty.",
              steps: [
                { label: "Weather data: T, R_n, wind, RH", note: "meteorological station" },
                { label: "Compute reference ET0", note: "Penman-Monteith / Blaney-Criddle" },
                { label: "Multiply by crop coefficient Kc", note: "growth-stage dependent" },
                { label: "Sum to seasonal consumptive use", note: "mm over the season" },
                { label: "Subtract effective rainfall; add losses", note: "gross irrigation requirement" },
              ],
            },
            callout: {
              type: "exam",
              title: "Penman-Monteith is the standard",
              body: "FAO-56 specifies the Penman-Monteith equation as the sole standard for computing reference ET0. State this fact in answers and only fall back to Blaney-Criddle or Hargreaves when data are missing; mention the fallback explicitly.",
            },
            keyTerms: [
              { term: "Crop water requirement", definition: "Total water applied to a crop over the season - consumptive use plus leaching, land preparation and field losses." },
              { term: "Consumptive use", definition: "Water actually evapotranspired by the crop, estimated by lysimeter or climatic formulae multiplied by a crop coefficient." },
              { term: "Crop coefficient Kc", definition: "Ratio of crop evapotranspiration to reference grass ET0; varies from 0.4 at emergence to 1.2 at mid-season peak." },
            ],
            examQuestions: [
              {
                q: "Define crop water requirement and consumptive use. Describe the Blaney-Criddle method for estimating consumptive use, and outline the steps from climatic data to gross irrigation requirement.",
                marks: 7,
                outline: [
                  "Define crop water requirement as total water applied: consumptive use + leaching + land preparation + field losses.",
                  "Define consumptive use as the water actually evapotranspired by the crop, the dominant term.",
                  "State the methods: direct (lysimeter, soil moisture, inflow-outflow) and climatic (Penman-Monteith, Blaney-Criddle, Hargreaves, Thornthwaite).",
                  "Write Blaney-Criddle: ET0 = p (0.46 T + 8), mm/month, with p daytime hours percent and T mean temperature in deg C.",
                  "Multiply ET0 by crop coefficient Kc (0.4 to 1.2) to get crop consumptive use at each growth stage.",
                  "Sum over the season to seasonal consumptive use; subtract effective rainfall for net irrigation requirement.",
                  "Divide net irrigation by application and conveyance efficiencies to get gross irrigation requirement that the canal must supply.",
                ],
              },
              {
                q: "Define crop coefficient Kc. How does it vary with crop growth stage?",
                marks: 2,
              },
              {
                q: "Distinguish between net and gross irrigation requirement.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Duty, delta and base period",
            body: [
              "Duty, delta and base period are the three linked quantities that convert a canal discharge into the field depth of water needed by a crop, and back. Duty D is the area irrigated by a unit discharge of water flowing continuously over the base period, expressed in hectares per cumec (ha/cumec). Delta is the total depth of water required by a crop over its base period, expressed in centimetres or millimetres. Base period B is the period over which irrigation water is required, expressed in days. The three are linked by the relation delta = 8.64 B / D, where delta is in metres, B is in days, D is in ha/cumec.",
              "The relation comes from a volume balance: a discharge of 1 cumec flowing for B days yields a volume of 1 x B x 86400 cubic metres (86400 = number of seconds in a day). Spread over D hectares (1 ha = 10000 sq m), the depth in metres is (86400 B) / (D * 10000) = 8.64 B / D. The same formula in cm is delta = 864 B / D, and in mm delta = 8640 B / D. So a crop with a base period of 100 days and a duty of 800 ha/cumec requires a delta = 8.64 * 100 / 800 = 1.08 m = 108 cm of water over its season.",
              "Duty varies along a canal: at the head of the canal (the headworks), duty is lowest because conveyance losses have not yet been incurred; at the outlet (the field), duty is highest; at the crop root zone, duty is between the two because application losses intervene. The Koru duty is a special duty for the initial saturation watering of rice. Higher duty means more area served per cumec and is achieved by lining canals, efficient field application, conjunctive use and night irrigation to reduce evaporation. Engineers design a canal by computing the crop delta from consumptive use, dividing by 8.64 B to get duty, multiplying by the area commanded to get the discharge.",
            ],
            bullets: [
              "Duty D: hectares irrigated by 1 cumec flowing continuously over the base period (ha/cumec).",
              "Delta: total depth of water required by a crop over its base period (cm or mm).",
              "Base period B: number of days over which irrigation water is required.",
              "Relation: delta (m) = 8.64 B / D; delta (cm) = 864 B / D; delta (mm) = 8640 B / D.",
              "Duty varies along canal: lowest at head, higher at outlet, intermediate at root zone.",
              "Koru duty: special duty for initial saturation watering of rice.",
              "Higher duty from lining, efficient application, conjunctive use, night irrigation.",
            ],
            table: {
              caption: "Worked duty, delta and base period examples.",
              headers: ["Crop", "B (days)", "D (ha/cumec)", "Delta (cm)"],
              rows: [
                ["Wheat", "120", "1800", "57.6"],
                ["Rice (paddy)", "100", "800", "108.0"],
                ["Sugarcane", "330", "750", "380.0"],
                ["Cotton", "200", "1500", "115.2"],
                ["Vegetables", "80", "1200", "57.6"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Linking duty, delta and base period",
              caption:
                "Volume balance on 1 cumec flowing for B days yields the relation delta = 8.64 B / D.",
              steps: [
                { label: "1 cumec for B days to volume", note: "V = 86400 B cu m" },
                { label: "Spread over D hectares", note: "area = D * 10000 sq m" },
                { label: "Depth = V / area", note: "delta (m) = 8.64 B / D" },
                { label: "Convert to cm or mm", note: "x 100 or x 1000" },
                { label: "Solve for any one unknown", note: "given the other two" },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorise the formula",
              body: "delta (m) = 8.64 B / D is the single most-tested formula in the irrigation unit. Use it as the bridge between the canal-discharge design question and the field-depth question. Always check the units of delta (m, cm, mm) before substituting.",
            },
            keyTerms: [
              { term: "Duty", definition: "Area irrigated by a unit discharge (1 cumec) flowing continuously over the base period, in hectares per cumec." },
              { term: "Delta", definition: "Total depth of water required by a crop over its base period, expressed in cm or mm." },
              { term: "Base period", definition: "The number of days over which a crop requires irrigation water from sowing to harvesting." },
            ],
            examQuestions: [
              {
                q: "Define duty, delta and base period. Derive the relation between them. Compute the duty for a crop with delta = 90 cm and base period 120 days, and the discharge required to irrigate 1500 ha.",
                marks: 7,
                outline: [
                  "Define duty D (ha/cumec), delta (total depth of water in cm or mm) and base period B (days).",
                  "Derive: 1 cumec flowing for B days yields 86400 B cu m; spread over D ha (D*10000 sq m) the depth in m is 8.64 B / D.",
                  "State the variants: delta (cm) = 864 B / D; delta (mm) = 8640 B / D.",
                  "Solve for D given delta = 90 cm and B = 120 days: D = 864 * 120 / 90 = 1152 ha/cumec.",
                  "Compute discharge for 1500 ha: Q = area / D = 1500 / 1152 = 1.30 cumec at the field outlet.",
                  "Mention that canal head discharge is larger by 1/conveyance efficiency (say 1.4) -> about 1.8 cumec at the headworks.",
                  "Comment on how duty can be raised (lining, efficient application, night irrigation).",
                ],
              },
              {
                q: "Define duty and delta. State the units of each.",
                marks: 2,
              },
              {
                q: "Why does duty vary along the length of a canal? Where is it highest?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Consumptive use and irrigation efficiency",
            body: [
              "Consumptive use is the water actually evapotranspired by the crop plus the small amount evaporated from the soil surface during the growing season. It is the irreducible water requirement - the part of irrigation water that the crop genuinely uses and that cannot be recovered - and is the design driver of crop water requirement. Consumptive use is estimated by direct methods (lysimeter, soil-moisture sampling, inflow-outflow) or by climatic formulae (Penman-Monteith, Blaney-Criddle, Hargreaves). For design purposes, consumptive use over a season ranges from 300 to 600 mm for cereals, 700 to 1200 mm for sugarcane, and 900 to 1500 mm for rice in sub-humid India.",
              "Irrigation efficiency measures how much of the diverted water actually benefits the crop, and is split into several components. Conveyance efficiency is the ratio of water delivered at the field outlet to that diverted at the canal head, typically 60 to 80 percent for unlined canals and 90 to 95 percent for lined. Application efficiency is the ratio of water stored in the root zone to that delivered to the field, depending on the method: 40 to 60 percent for wild flooding, 50 to 65 percent for furrow, 60 to 75 percent for border strip, 75 to 90 percent for sprinkler, and 85 to 95 percent for drip. Water-use efficiency is the crop yield per unit of water consumed, in kg per cubic metre.",
              "Overall project efficiency is the product of conveyance and application efficiency, typically 30 to 40 percent for an unlined surface scheme and 60 to 80 percent for a well-managed sprinkler or drip scheme. Raising efficiency is the cheapest source of new water: lining canals, switching from flooding to sprinkler or drip, scheduling irrigation by soil-moisture sensors rather than calendar, and pricing water volumetrically to discourage overuse. Conjunctive use of canal and groundwater reuses the seepage from the canal and reduces waterlogging. In water-scarce basins, raising efficiency by 10 percentage points frees up water equivalent to a new medium reservoir at a fraction of the cost, and is the backbone of modern demand management.",
            ],
            bullets: [
              "Consumptive use: water actually evapotranspired plus soil evaporation; irreducible; 300-600 mm for cereals.",
              "Conveyance efficiency: outlet / head discharge; 60-80 percent unlined, 90-95 percent lined.",
              "Application efficiency: root-zone stored / field delivered; 40-60 percent wild flooding, 75-90 percent sprinkler, 85-95 percent drip.",
              "Water-use efficiency: crop yield per unit water consumed, kg per cubic metre.",
              "Overall efficiency = conveyance x application; 30-40 percent unlined surface, 60-80 percent sprinkler/drip.",
              "Raise efficiency by lining, drip/sprinkler, sensor scheduling, volumetric pricing.",
              "10 percentage points of efficiency equals a new medium reservoir at fractional cost.",
            ],
            codeExample: {
              language: "python",
              caption: "Conveyance, application and overall irrigation efficiencies for a surface scheme.",
              code: [
                "# Irrigation efficiencies of a project",
                "water_diverted  = 100.0   # ha-m at canal head",
                "water_delivered = 82.0    # ha-m at field outlet (after conveyance losses)",
                "water_stored    = 60.0    # ha-m in root zone (after application losses)",
                "water_consumed  = 55.0    # ha-m evapotranspired by the crop",
                "",
                "conveyance  = water_delivered / water_diverted",
                "application = water_stored / water_delivered",
                "overall     = water_consumed / water_diverted   # ~ conveyance x application x crop",
                "print(f\"Conveyance efficiency  = {conveyance:.2%}\")",
                "print(f\"Application efficiency = {application:.2%}\")",
                "print(f\"Overall efficiency     = {overall:.2%}\")",
                "",
                "# Water-use efficiency: wheat yield over seasonal consumptive use",
                "yield_kg = 4500.0                 # 4.5 t/ha",
                "cu_depth_m = 0.45                 # 450 mm seasonal consumptive use",
                "area_sq_m  = 10000.0              # 1 hectare",
                "water_consumed_m3 = cu_depth_m * area_sq_m",
                "wue = yield_kg / water_consumed_m3",
                "print(f\"Water-use efficiency = {wue:.2f} kg/m3 of consumptive use\")",
              ].join("\n"),
            },
            diagram: {
              kind: "compare",
              title: "Application efficiency by irrigation method",
              caption:
                "Modern pressurised methods roughly double the efficiency of traditional surface flooding.",
              left: {
                heading: "Surface methods",
                items: [
                  "Wild flooding: 40 to 60 percent",
                  "Furrow: 50 to 65 percent",
                  "Border strip: 60 to 75 percent",
                  "Check basin: 55 to 70 percent",
                  "Low capital, high labour",
                ],
              },
              right: {
                heading: "Pressurised methods",
                items: [
                  "Sprinkler: 75 to 90 percent",
                  "Drip / trickle: 85 to 95 percent",
                  "Sub-surface drip: 90 to 95 percent",
                  "High capital, low labour",
                  "Suits undulating and sandy land",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Memorise the ranges",
              body: "Conveyance 60-80 percent unlined, 90-95 percent lined; application 40-60 percent flooding, 75-90 percent sprinkler, 85-95 percent drip; overall 30-40 percent surface, 60-80 percent pressurised. RGPV asks for these numbers verbatim.",
            },
            keyTerms: [
              { term: "Consumptive use", definition: "Water actually evapotranspired by the crop plus soil evaporation during the growing season; the irreducible water requirement." },
              { term: "Conveyance efficiency", definition: "Ratio of water delivered at the field outlet to that diverted at the canal head; 60-80 percent for unlined canals." },
              { term: "Overall project efficiency", definition: "Product of conveyance and application efficiencies; 30-40 percent for unlined surface schemes, 60-80 percent for pressurised schemes." },
            ],
            examQuestions: [
              {
                q: "Define consumptive use and irrigation efficiency. Describe the various irrigation efficiencies with typical values, and compute the overall efficiency for a scheme that diverts 100 ha-m, delivers 82 ha-m to the outlet and stores 60 ha-m in the root zone.",
                marks: 7,
                outline: [
                  "Define consumptive use as the water actually evapotranspired plus soil evaporation; state typical seasonal values (cereals 300-600 mm, sugarcane 700-1200 mm, rice 900-1500 mm).",
                  "Define irrigation efficiency and split into conveyance, application, water-use and overall efficiencies.",
                  "Conveyance = outlet / head diversion; 60-80 percent unlined, 90-95 percent lined.",
                  "Application = root zone stored / field delivered; 40-60 percent flooding, 75-90 percent sprinkler, 85-95 percent drip.",
                  "Overall efficiency = conveyance x application; 30-40 percent surface, 60-80 percent pressurised.",
                  "Compute conveyance = 82/100 = 0.82; application = 60/82 = 0.73; overall = 0.82 x 0.73 = 0.60 = 60 percent.",
                  "Suggest measures to raise efficiency: lining, drip, sensor scheduling, volumetric pricing, conjunctive use.",
                ],
              },
              {
                q: "Differentiate between consumptive use and crop water requirement.",
                marks: 2,
              },
              {
                q: "List the typical values of application efficiency for surface, sprinkler and drip irrigation.",
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
      title: "Dams and Reservoirs",
      summary:
        "The structural side of water resources: classification of dams by material and function, gravity dam analysis for overturning/sliding/stress, earth dams and their failure modes, spillways and energy dissipators, reservoir capacity by mass curve and area-capacity, sedimentation, and head works with cross drainage works.",
      chapter: {
        number: "05",
        title: "Dams and Reservoirs",
        intro:
          "Unit V is the structural complement to the hydrology of the previous four units. It classifies dams by material, function and head, analyses a gravity dam for overturning, sliding and principal stress, sketches earth dams with their zoned sections and failure modes, designs spillways as the safety valve of a reservoir with ogee profile and stilling basins, plans reservoir capacity by mass-curve and area-capacity methods, surveys sedimentation and its control, and ends with head works and the cross drainage works that carry canals across natural drains.",
        inOneBreath:
          "Dams are rigid (gravity, buttress, arch) or non-rigid (earth, rock-fill), and by function they are storage, diversion, detention or debris dams; a gravity dam resists overturning with a factor of safety of at least 1.5, sliding with at least 1.0, and principal stress at the toe must stay within allowable compressive stress while no tension is permitted at the heel; earth dams are homogeneous, zoned or diaphragm types and fail by piping, sloughing, overtopping or earthquake; spillways follow the ogee profile of a lower nappe and dissipate energy by hydraulic jump, roller buckets or ski jumps; reservoir capacity is found by mass-curve (cumulative inflow minus demand) or area-capacity methods; sedimentation reduces capacity at 0.5-1 percent per year; and head works (weir, barrage, undersluices) feed a canal network that crosses drains via aqueducts, syphon aqueducts, super passages and syphons.",
        sections: [
          {
            number: "5.1",
            title: "Classification of dams",
            body: [
              "A dam is a barrier constructed across a river or stream to impound water, raise its level and form a reservoir for irrigation, water supply, hydropower, flood control or recreation. Dams are classified by their structural material, by their function, by their head, and by their method of passing water. By material, the broad classes are rigid dams (concrete gravity, buttress, arch, prestressed) and non-rigid dams (earth fill and rock fill). The choice is governed by foundation condition, availability of construction material, topography, spillway requirement and cost; in India most large dams are concrete gravity or earth fill because the materials are widely available and the technology is well understood.",
              "By function, a storage dam impounds water for irrigation, water supply or power and may be high or medium; a diversion dam raises the river level just enough to divert flow into a canal (the barrage is its modern variant); a detention dam retards flood flows and releases them slowly; a debris dam traps sediment upstream of a storage dam; and a tailings dam stores mine waste. By head, dams are low (height less than about 15 m), medium (15 to 30 m) or high (above 30 m) - the height of a dam, measured from the lowest foundation to the top, governs the forces it must resist and the design scrutiny it receives. By method of passing water, a dam may be an overflow dam (water spills over its crest, e.g. a masonry spillway) or a non-overflow dam (water passes through a separate spillway).",
              "Gravity dams resist the horizontal water thrust by their own weight; they are massive triangular concrete sections with a vertical upstream face and a sloping downstream face, suited to sound rock foundations. Buttress dams reduce material by replacing the bulk of the gravity section with a deck supported by buttresses spaced along the foundation; they suit wider valleys. Arch dams transfer the water thrust to the abutments by arch action and are thin, economical and suited to narrow rocky gorges. Earth and rock-fill dams are embankments of compacted soil or rock with an impermeable core, suited to pervious or weak foundations and to wide valleys where the long crest makes concrete uneconomical. The choice is the first major decision of any dam project.",
            ],
            bullets: [
              "By material: rigid (concrete gravity, buttress, arch) and non-rigid (earth fill, rock fill).",
              "By function: storage, diversion (barrage), detention, debris, tailings.",
              "By head: low (< 15 m), medium (15-30 m), high (> 30 m) from lowest foundation to top.",
              "By method of passing water: overflow (spills over crest) vs non-overflow (separate spillway).",
              "Gravity dam: massive triangular concrete section; resists thrust by self-weight; rock foundation.",
              "Arch dam: thin, transfers thrust to abutments by arch action; narrow rocky gorge.",
              "Earth / rock-fill: embankment of compacted soil or rock with impermeable core; pervious foundation, wide valley.",
            ],
            table: {
              caption: "Classification of dams by material.",
              headers: ["Type", "Material", "Foundation", "Best site"],
              rows: [
                ["Gravity", "concrete (rigid)", "sound rock", "any valley"],
                ["Buttress", "concrete deck + buttresses", "rock", "wide valley"],
                ["Arch", "thin concrete", "strong rock abutments", "narrow gorge"],
                ["Earth fill", "compacted soil + impermeable core", "pervious or weak", "wide valley"],
                ["Rock fill", "rock + impermeable core/membrane", "variable", "wide valley, rock available"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a dam type by site condition",
              caption:
                "Two questions - foundation and valley width - direct the engineer to the right type.",
              start: "Dam site: foundation and valley",
              branches: [
                { label: "Narrow gorge, strong rock abutments", outcome: "Arch dam - thin and economical", good: true },
                { label: "Wide valley, sound rock foundation", outcome: "Concrete gravity dam", good: true },
                { label: "Wide valley, pervious or weak foundation", outcome: "Earth or rock-fill dam", good: true },
                { label: "Wide valley, rock available, pervious foundation", outcome: "Rock-fill dam with membrane", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch four dam sections",
              body: "RGPV rewards a single figure with four cross-sections - gravity, buttress, arch, earth - drawn to scale. Practise the sketches: the gravity triangle, the buttress buttressed deck, the thin arch with abutments, and the zoned earth section with core, shells and filters.",
            },
            keyTerms: [
              { term: "Gravity dam", definition: "A massive triangular concrete dam that resists horizontal water thrust by its own weight; suited to sound rock foundations." },
              { term: "Arch dam", definition: "A thin concrete dam curved in plan that transfers water thrust to the abutments by arch action; suited to narrow rocky gorges." },
              { term: "Earth-fill dam", definition: "A non-rigid embankment of compacted soil with an impermeable core, suited to pervious or weak foundations and wide valleys." },
            ],
            examQuestions: [
              {
                q: "Classify dams based on material, function and head. With neat sketches, distinguish between a gravity dam, an arch dam and an earth dam.",
                marks: 7,
                outline: [
                  "Define a dam as a barrier across a river to impound water and form a reservoir.",
                  "Classify by material: rigid (gravity, buttress, arch, prestressed) and non-rigid (earth, rock fill).",
                  "Classify by function: storage, diversion, detention, debris, tailings.",
                  "Classify by head: low (< 15 m), medium (15-30 m), high (> 30 m).",
                  "Sketch a gravity dam: triangular concrete section, vertical upstream, sloping downstream, broad base on rock.",
                  "Sketch an arch dam: thin, curved in plan, transferring thrust to abutments; suited to narrow gorge.",
                  "Sketch an earth dam: zoned embankment with impermeable core, shells, filters, rock toe; suited to pervious foundation and wide valley.",
                ],
              },
              {
                q: "Differentiate between an overflow dam and a non-overflow dam.",
                marks: 2,
              },
              {
                q: "Classify dams by function and give an example of each type.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Gravity dam analysis",
            body: [
              "A gravity dam is analysed for three failure modes: overturning about the toe, sliding along the foundation, and overstress in the body or at the foundation. The horizontal water thrust P acts at one-third height above the base and tends to overturn the dam about the downstream toe; the weight W of the dam acts through its centre of gravity and resists this overturning. Uplift U acts at the base, varying linearly from full hydrostatic at the heel to zero (or tailwater pressure) at the toe, and reduces the effective weight. The overturning factor of safety is the ratio of the stabilising moment (W times its lever arm to the toe, less U times its lever arm) to the overturning moment (P times its lever arm); the safe value is at least 1.5.",
              "Sliding is resisted by the friction between the base and the foundation: the resisting force is mu (W - U), where mu is the coefficient of friction (about 0.65 to 0.75 for concrete on rock), and the driving force is the horizontal thrust P minus any tailwater pressure. The sliding factor of safety mu (W - U) / P must be at least 1.0 in ordinary design and 1.5 with a keys-and-bond mechanism; if insufficient, a shear key, anchor bars or a sloped foundation increases resistance. Compressive stress at the toe is computed from the combined axial and bending stress: sigma = (W - U)/B + 6 M_e / B^2 per unit length, where B is the base width and M_e is the eccentric moment about the centroid; this must stay within the allowable compressive stress of the foundation or concrete.",
              "Tension at the heel is the third stress criterion: if the resultant of all forces falls outside the middle third of the base, the upstream face develops tension, which is forbidden in concrete gravity dams because joints open and uplift increases. The rule is that the resultant under the worst load combination (full reservoir, no tailwater, uplift) must pass within the middle third of the base for no tension. The principal stress at the toe, considering the downstream face slope, is sigma + (water pressure normal to the slope) and is the maximum stress in the dam body; it must stay within the allowable working stress of concrete. A gravity dam section is therefore iteratively sized for weight, base width and downstream slope to satisfy all three criteria.",
            ],
            bullets: [
              "Three failure modes: overturning about toe, sliding along base, overstress at toe or foundation.",
              "Forces: weight W (downward at CG), water thrust P (horizontal at 1/3 height), uplift U (linear from heel to toe).",
              "Overturning FOS = stabilising moment / overturning moment; safe value >= 1.5.",
              "Sliding FOS = mu (W - U) / P; safe value >= 1.0 (ordinary) or >= 1.5 with shear keys.",
              "No-tension rule: resultant must fall within the middle third of the base.",
              "Toe stress sigma = (W - U)/B + 6 M_e / B^2; must be within allowable compressive stress.",
              "Principal stress at toe considers downstream face slope; safe working stress of concrete governs.",
            ],
            codeExample: {
              language: "python",
              caption: "Overturning, sliding and base stress checks for a gravity dam section.",
              code: [
                "# Gravity dam stability check (per metre length)",
                "W  = 4500.0    # kN/m weight of dam (downward)",
                "U  = 600.0     # kN/m uplift (upward)",
                "P  = 800.0     # kN/m horizontal water thrust",
                "mu = 0.75      # coefficient of friction",
                "Mr = 18000.0   # kN-m/m stabilising moment about toe",
                "Mo = 7200.0    # kN-m/m overturning moment about toe",
                "",
                "F_overturn = Mr / Mo",
                "F_sliding  = mu * (W - U) / P",
                "",
                "# Base stresses: sigma_toe = net/B + 6*M_e/B^2; sigma_heel = net/B - 6*M_e/B^2",
                "B = 30.0",
                "net = W - U",
                "M_e = Mr - Mo                       # net moment about centroid (illustrative)",
                "sigma_toe  = net/B + 6*M_e/B**2",
                "sigma_heel = net/B - 6*M_e/B**2",
                "print(f\"Overturning FOS = {F_overturn:.2f}\")",
                "print(f\"Sliding FOS     = {F_sliding:.2f}\")",
                "print(f\"Toe stress      = {sigma_toe:.1f} kN/m^2\")",
                "print(f\"Heel stress     = {sigma_heel:.1f} kN/m^2 (must be >= 0 for no tension)\")",
              ].join("\n"),
            },
            diagram: {
              kind: "flow",
              title: "Three checks on a gravity dam section",
              caption:
                "Each check fails the dam in a different way; all three must pass simultaneously.",
              steps: [
                { label: "Compute forces W, U, P and lever arms", note: "free-body of dam" },
                { label: "Check overturning FOS = Mr / Mo", note: ">= 1.5" },
                { label: "Check sliding FOS = mu (W - U) / P", note: ">= 1.0" },
                { label: "Check no-tension rule: resultant in middle third", note: "heel stress >= 0" },
                { label: "Check toe stress within allowable", note: "concrete working stress" },
              ],
            },
            callout: {
              type: "warning",
              title: "Middle third rule",
              body: "The resultant of all forces on the base must fall within the middle third of the base width for no tension at the heel. Memorise the rule: eccentricity e <= B/6. Any tension opens joints, uplift enters, and the section must be thickened.",
            },
            keyTerms: [
              { term: "Overturning factor of safety", definition: "Ratio of the stabilising moment about the toe to the overturning moment; the safe value is at least 1.5." },
              { term: "Sliding factor of safety", definition: "Ratio of frictional resistance mu(W-U) to the horizontal thrust P; the safe value is at least 1.0, or 1.5 with shear keys." },
              { term: "Middle third rule", definition: "The resultant of all base forces must fall within the middle third of the base width for no tension at the heel of a gravity dam." },
            ],
            examQuestions: [
              {
                q: "List the forces acting on a gravity dam. Explain the three stability checks - overturning, sliding and stress - and state the safe values of each factor of safety.",
                marks: 7,
                outline: [
                  "List the forces: self-weight W (downward at the CG), water thrust P (horizontal at 1/3 height above base), uplift U (linear from full at heel to zero at toe), silt pressure, earthquake, wave pressure, ice pressure.",
                  "Define overturning about the toe and the stabilising moment; overturning FOS = (W*xw - U*xu) / (P*yp).",
                  "State the safe overturning FOS >= 1.5; if below, widen the base or flatten the downstream slope.",
                  "Define sliding along the base; sliding FOS = mu(W - U) / P.",
                  "State the safe sliding FOS >= 1.0 (ordinary) or >= 1.5 with shear keys; if below, add keys, anchors or a sloped foundation.",
                  "State the no-tension (middle third) rule: the resultant must lie within the middle third of the base; eccentricity e <= B/6.",
                  "State the toe stress criterion: sigma_toe = (W-U)/B + 6 M_e/B^2 must be within allowable compressive stress of concrete and foundation.",
                ],
              },
              {
                q: "What is uplift pressure on a gravity dam? How is it assumed to vary at the base?",
                marks: 2,
              },
              {
                q: "State the middle-third rule for a gravity dam and explain why tension at the heel is forbidden.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Earth dams",
            body: [
              "An earth dam is an embankment constructed of compacted natural soil across a river, with an impermeable core or membrane that prevents seepage through the body and an outer shell of stronger, pervious soil that stabilises the core. The three common types are the homogeneous dam (entirely one soil, suited only to small heights with internal drainage), the zoned dam (a central impermeable core of clay bounded by transition filters and shells of sand-gravel, suited to large heights), and the diaphragm dam (a thin impermeable membrane of concrete, asphalt or earth core through a pervious shell, suited when only limited impermeable material is available). The choice depends on the borrow materials, foundation permeability and dam height.",
              "Earth dams fail by four mechanisms against which they are designed. Piping is the internal erosion of fine particles along a seepage line; it is controlled by providing graded filters that allow water to pass but retain soil particles, by lowering the phreatic line with internal drainage (chimney drain, toe drain, horizontal blanket), and by keeping the seepage gradient below the soil's critical value. Overtopping occurs when the spillway is undersized or the freeboard is insufficient; a separate emergency spillway and adequate freeboard prevent it. Sloughing of the upstream or downstream slope occurs under rapid drawdown or saturation; it is controlled by flattening slopes and providing rip-rap on the upstream face. Earthquake cracking is mitigated by wider cores and flatter slopes.",
              "The phreatic line is the upper boundary of the saturated zone within the dam body; it is approximated by drawing a parabola (Casagrande's method) starting from a point on the upstream face about one-third of the water depth below the water surface, taking a correction at the entry, and ending at the downstream drain. The slope of the phreatic line at any point gives the seepage gradient, which must stay below the critical hydraulic gradient of the soil (about 1.0 for sand, lower for cohesive soils) to prevent piping. Seepage discharge through the dam is computed from the flow net or from approximate formulas such as Dupuit's q = K H^2 / (2 L) per unit length. The foundation must also be checked for seepage, with a cut-off or grout curtain if needed.",
            ],
            bullets: [
              "Earth dam types: homogeneous, zoned (core + shells + filters), diaphragm (thin membrane).",
              "Piping: internal erosion along seepage line; controlled by graded filters and drainage.",
              "Overtopping: spillway undersized or freeboard low; controlled by emergency spillway and freeboard.",
              "Sloughing: rapid drawdown or saturation; controlled by flatter slopes and rip-rap.",
              "Earthquake cracking: wider cores, flatter slopes.",
              "Phreatic line: upper boundary of saturation; approximated by Casagrande's parabola.",
              "Seepage below critical hydraulic gradient (about 1.0 for sand) prevents piping.",
            ],
            table: {
              caption: "Failure modes of earth dams and their control.",
              headers: ["Failure mode", "Cause", "Control measure"],
              rows: [
                ["Piping", "internal erosion along seepage", "graded filters, internal drainage"],
                ["Overtopping", "spillway too small", "emergency spillway, freeboard"],
                ["Sloughing (upstream)", "rapid drawdown", "flatter slope, rip-rap"],
                ["Sloughing (downstream)", "saturation above toe", "toe drain, horizontal blanket"],
                ["Earthquake cracking", "shaking, fault offset", "wider core, flatter slopes"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Homogeneous versus zoned earth dam sections",
              caption:
                "The zoned dam separates the impermeable core from the structural shells; drainage keeps the phreatic line low.",
              left: {
                heading: "Homogeneous earth dam",
                items: [
                  "Single compacted soil throughout",
                  "Suits small heights only",
                  "Phreatic line emerges on downstream face",
                  "Internal drain (blanket or chimney) added",
                  "Low cost, simple construction",
                ],
              },
              right: {
                heading: "Zoned earth dam",
                items: [
                  "Central clay core + sand-gravel shells",
                  "Transition filters between core and shell",
                  "Phreatic line kept inside the core",
                  "Chimney + toe drain lower saturation",
                  "Suits large heights; needs zoning materials",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Casagrande's parabola",
              body: "Memorise the entry correction: the phreatic line starts at a point 0.3 times the water depth below the water surface on the upstream face, then is corrected to meet the face smoothly. The parabola is the basic seepage tool and earns marks whenever you sketch an earth dam.",
            },
            keyTerms: [
              { term: "Earth dam", definition: "An embankment of compacted natural soil across a river, with an impermeable core or membrane and stabilising pervious shells." },
              { term: "Phreatic line", definition: "The upper boundary of the saturated zone within an earth dam; approximated by Casagrande's parabola for seepage analysis." },
              { term: "Piping", definition: "Internal erosion of fine particles along the seepage line within an earth dam, controlled by graded filters and adequate drainage." },
            ],
            examQuestions: [
              {
                q: "Classify earth dams. Describe the causes of failure of earth dams and the measures to control them. Explain with a sketch the role of the phreatic line and graded filters.",
                marks: 7,
                outline: [
                  "Classify earth dams: homogeneous, zoned, diaphragm (with membrane).",
                  "Sketch a zoned dam: central clay core, transition filters, sand-gravel shells, rock toe, freeboard, rip-rap.",
                  "List failure modes: piping (internal erosion), overtopping, sloughing (upstream rapid drawdown; downstream saturation), earthquake cracking, foundation seepage.",
                  "Piping control: graded filters, internal drainage (chimney and toe drains), keep seepage gradient below critical.",
                  "Overtopping control: emergency spillway, adequate freeboard, upstream slope protection.",
                  "Sloughing control: flatter slopes, rip-rap, controlled drawdown rate.",
                  "Describe the phreatic line as the upper boundary of saturation, drawn by Casagrande's parabola starting at 0.3 d below the water surface; slope at any point gives the seepage gradient.",
                ],
              },
              {
                q: "What is piping in an earth dam? How is it prevented?",
                marks: 2,
              },
              {
                q: "Differentiate between a homogeneous and a zoned earth dam.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Spillways",
            body: [
              "A spillway is the safety valve of a dam, designed to pass excess flood water safely past or through the structure without endangering it. Without an adequate spillway, a flood would overtop the dam, with catastrophic results for an earth dam and dangerous results even for a concrete one. Spillways are classified by their location and function: the main overflow spillway is built into the body of a concrete dam or in a saddle adjacent to it; a chute spillway carries water down a steep concrete trough to the river below; a side-channel spillway runs along the abutment and discharges into a chute; an ogee spillway has the profile of the lower nappe of a sharp-crested weir, giving a high discharge coefficient and no sub-atmospheric pressures.",
              "A siphon spillway primes automatically at a fixed head and discharges with a high coefficient; a shaft (morning-glory) spillway is a circular crest leading to a vertical shaft and a tunnel, suited to narrow gorges with limited crest length; a chute spillway suits earth dams where overflow is not possible. An emergency spillway is a separate, low-crest structure used only during extreme floods to protect the main spillway. The hydraulic design fixes the crest length L and the design head H from the standard weir equation Q = C_d L H^1.5, where C_d is about 2.2 in SI units for an ogee crest; the energy of the falling water must then be dissipated safely at the toe.",
              "Energy dissipation prevents scour of the downstream channel and toe. The commonest device is a stilling basin, a reinforced concrete apron with or without appurtenances (baffle blocks, end sills, chute blocks) in which the high-velocity flow forms a hydraulic jump that converts kinetic energy to turbulence and heat. The jump type is matched to the Froude number of the incoming flow: for F1 between 1 and 1.7 a weak jump forms (low efficiency), between 1.7 and 2.5 an oscillating jump, between 2.5 and 4.5 a steady but unstable jump, between 4.5 and 9 a stable steady jump (best efficiency), and above 9 a strong but rough jump. For very high heads, a flip bucket (ski-jump) launches the jet into the air where it breaks up and falls far from the toe; a roller bucket is a variant used when tailwater is high.",
            ],
            bullets: [
              "Spillway: safety valve of a dam to pass excess flood without damage.",
              "Types: overflow (ogee), chute, side-channel, siphon, shaft (morning-glory), emergency.",
              "Ogee profile: lower nappe of a sharp-crested weir; high discharge coefficient, no sub-atmospheric pressure.",
              "Discharge equation: Q = C_d L H^1.5, with C_d about 2.2 (SI) for ogee crest.",
              "Energy dissipators: stilling basin, flip bucket (ski-jump), roller bucket.",
              "Hydraulic jump classified by Froude number; stable steady jump at F1 between 4.5 and 9.",
              "Emergency spillway protects main spillway during extreme floods.",
            ],
            table: {
              caption: "Spillway types and their use.",
              headers: ["Type", "Best site", "Discharge formula", "Note"],
              rows: [
                ["Ogee overflow", "concrete dam", "Q = C_d L H^1.5", "profile of lower nappe"],
                ["Chute", "earth dam, saddle", "Q = C_d L H^1.5", "steep trough to river"],
                ["Side-channel", "narrow abutment", "Q = C_d L H^1.5", "flows along abutment to chute"],
                ["Siphon", "limited crest length", "auto-prime at fixed head", "high coefficient"],
                ["Shaft (morning-glory)", "narrow gorge", "Q = C_d (2 pi R) H^1.5", "circular crest, vertical shaft"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From a design flood to a stilling-basin design",
              caption:
                "Each step sizes one element of the spillway and its energy dissipator.",
              steps: [
                { label: "Choose design flood", note: "inflow design flood" },
                { label: "Route through reservoir", note: "outflow peak and head H" },
                { label: "Size crest length L", note: "Q = C_d L H^1.5" },
                { label: "Fix ogee profile and chute", note: "non-sub-atmospheric" },
                { label: "Design stilling basin", note: "match hydraulic jump to Froude number" },
              ],
            },
            callout: {
              type: "exam",
              title: "Ogee profile",
              body: "The ogee crest follows the lower nappe of a sharp-crested weir under the design head. Draw the nappe, then the crest just touching it. The discharge coefficient C_d is about 2.2 in SI; remember the formula Q = C_d L H^1.5 verbatim.",
            },
            keyTerms: [
              { term: "Spillway", definition: "The safety valve of a dam that passes excess flood water past or through the structure without damage." },
              { term: "Ogee spillway", definition: "An overflow spillway whose crest follows the lower nappe of a sharp-crested weir, giving a high discharge coefficient." },
              { term: "Stilling basin", definition: "A reinforced-concrete apron with appurtenances that dissipates the energy of the spillway flow by inducing a hydraulic jump." },
            ],
            examQuestions: [
              {
                q: "Classify spillways. Describe the ogee spillway and the standard discharge equation. Explain the need for energy dissipation and the use of a stilling basin.",
                marks: 7,
                outline: [
                  "Define a spillway as the safety valve of a dam that passes flood water safely.",
                  "Classify: overflow (ogee), chute, side-channel, siphon, shaft (morning-glory), emergency.",
                  "Describe the ogee profile as the lower nappe of a sharp-crested weir under the design head; no sub-atmospheric pressure; high C_d.",
                  "Write the discharge equation Q = C_d L H^1.5 with C_d about 2.2 in SI; define L (crest length) and H (design head).",
                  "State that the spillway design flood is routed through the reservoir to fix H and the corresponding outflow.",
                  "Explain the need for energy dissipation: high-velocity jet would scour the toe and channel.",
                  "Describe a stilling basin: reinforced apron with baffle blocks, end sill and chute blocks; hydraulic jump classified by Froude number (best at F1 4.5 to 9).",
                ],
              },
              {
                q: "Write the discharge formula for an ogee spillway and define each term.",
                marks: 2,
              },
              {
                q: "Classify hydraulic jumps by the incoming Froude number and name the most efficient range.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Reservoir planning, sedimentation and head works",
            body: [
              "Reservoir planning converts a streamflow series into a reservoir capacity that meets a stated demand with an acceptable reliability. The mass-curve method, due to Rippl, plots the cumulative inflow as a function of time and the cumulative demand as a straight line of the same slope; the maximum vertical gap between the two curves, with the demand line drawn tangentially below the inflow curve, gives the live storage required to sustain the demand through the critical dry period. The mass-curve ignores losses (evaporation, seepage) and assumes a fixed demand, so a sequent-peak algorithm or a simulation study refines it for design. The reservoir level-volume-area curves, from a topographic survey of the basin, convert storage to water level and to submerged area.",
              "Reservoir sedimentation is the gradual accumulation of sediment carried by the inflowing river, which reduces the live storage over the years. Trap efficiency - the fraction of incoming sediment retained by the reservoir - depends on the capacity-inflow ratio and approaches 100 percent for large reservoirs. Sediment is distributed between the dead storage below the sill of the lowest outlet and the live storage; sediment surveys with range lines, echosounding and inflow-outflow sampling measure the deposition. The dead storage, fixed at the volume expected to be filled over the design life (say 50 to 100 years), is allocated to sediment below the minimum drawdown level. Control of sedimentation is by catchment treatment (afforestation, check dams), sediment excludators and ejectors at the head works, and dredging.",
              "The head works is the structure at the head of a canal that diverts water from the river into the canal: a weir or barrage raises the river level, an undersluice keeps the pocket in front of the regulator free of sediment, a divide wall separates the undersluice from the weir, a silt excludator ejects coarse sediment from the water entering the canal, and a head regulator controls the discharge into the canal. The canal may have to cross natural drains and streams on its way to the command area; the cross-drainage works that carry canal water across these obstacles are the aqueduct (canal over the drain, drain in its original bed), the syphon aqueduct (canal over, drain under pressure through a barrel), the super-passage (canal under, drain over), the canal syphon (canal under pressure, drain over), and the level crossing (both at the same level, gated).",
            ],
            bullets: [
              "Mass-curve (Rippl): cumulative inflow minus cumulative demand; maximum gap gives live storage.",
              "Sequent-peak algorithm refines the mass-curve for variable demand and losses.",
              "Capacity-area-volume curves from topographic survey convert storage to level.",
              "Sedimentation reduces live storage; trap efficiency depends on capacity-inflow ratio.",
              "Dead storage allocated to sediment over the design life (50 to 100 years).",
              "Control: afforestation, check dams, silt excludators/ejectors, dredging.",
              "Cross-drainage works: aqueduct, syphon aqueduct, super-passage, canal syphon, level crossing.",
            ],
            table: {
              caption: "Cross-drainage works and their arrangement.",
              headers: ["Work", "Canal position", "Drain position", "When used"],
              rows: [
                ["Aqueduct", "above", "natural bed below", "canal bed higher than drain"],
                ["Syphon aqueduct", "above", "under pressure (barrel)", "drain bed higher, canal above"],
                ["Super-passage", "below", "above (over bridge)", "canal bed lower than drain"],
                ["Canal syphon", "under pressure", "above", "drain bed higher, canal below"],
                ["Level crossing", "same level", "same level", "canal and drain at same level"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choice of cross-drainage work by relative bed levels",
              caption:
                "Top-left: canal high, drain low; bottom-right: canal low, drain high.",
              axes: { x: "Drain bed level (low to high)", y: "Canal bed level (low to high)" },
              quadrants: [
                { label: "Aqueduct", note: "canal high, drain low" },
                { label: "Syphon aqueduct (drain pressured)", note: "canal high, drain higher" },
                { label: "Super-passage", note: "canal low, drain lower" },
                { label: "Canal syphon (canal pressured)", note: "canal low, drain higher" },
              ],
            },
            callout: {
              type: "exam",
              title: "Rippl's mass curve",
              body: "Draw the cumulative inflow curve as a wavy rising line; lay a transparent ruler tangent below it with slope equal to the demand; the maximum vertical gap between the two curves is the required live storage. Practise this procedure once or twice - it is a near-guaranteed exam question.",
            },
            keyTerms: [
              { term: "Mass-curve (Rippl)", definition: "A plot of cumulative inflow against time used to fix the live storage of a reservoir as the maximum gap between inflow and a tangential demand line." },
              { term: "Trap efficiency", definition: "The fraction of incoming sediment retained by a reservoir, dependent on the capacity-inflow ratio and approaching 100 percent for large reservoirs." },
              { term: "Cross-drainage works", definition: "Structures (aqueduct, syphon aqueduct, super-passage, canal syphon, level crossing) that carry a canal across natural drains and streams." },
            ],
            examQuestions: [
              {
                q: "Explain the mass-curve method of fixing reservoir capacity. Describe reservoir sedimentation and the measures to control it. Sketch and classify any three cross-drainage works.",
                marks: 7,
                outline: [
                  "Define reservoir planning and the goal: capacity meets demand at chosen reliability.",
                  "Describe Rippl's mass-curve: plot cumulative inflow vs time; draw a tangential demand line of slope equal to the demand; the maximum vertical gap between the two is the live storage.",
                  "Mention that sequent-peak algorithm and simulation refine the result for losses and variable demand.",
                  "Describe sedimentation: sediment carried by the inflow accumulates and reduces live storage; trap efficiency depends on capacity-inflow ratio.",
                  "State that dead storage below the minimum drawdown level is allocated to sediment over the design life.",
                  "List control measures: afforestation, check dams in catchment, silt excludator and ejector at head works, dredging.",
                  "Sketch three cross-drainage works: aqueduct (canal above, drain below), syphon aqueduct (canal above, drain through barrel), super-passage (canal below, drain above).",
                ],
              },
              {
                q: "Define trap efficiency of a reservoir. On what does it depend?",
                marks: 2,
              },
              {
                q: "Distinguish between an aqueduct and a syphon aqueduct with sketches.",
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
        "RGPV CE-603(A) papers typically spread 70-80 of the marks across the unit hydrograph and S-curve, well hydraulics (Theim and Dupuit), the duty-delta-base period triangle, and gravity dam stability, with hydrology definitions and irrigation efficiency supplying the definitional short questions that anchor every paper. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Unit hydrograph and S-curve (derivation, convolution, shorter-duration UH)", weight: "10-14 marks", note: "Almost guaranteed; practise 4-6 convolution traces and at least one S-curve differentiation." },
        { topic: "Well hydraulics - Theim (confined) and Dupuit (unconfined) steady radial flow", weight: "10-12 marks", note: "Show the integration step by step; the natural log in the denominator is the most-tested trap." },
        { topic: "Gravity dam analysis - overturning, sliding, middle third, base stress", weight: "8-10 marks", note: "Tabulate forces and lever arms; compute three FOS in the same answer." },
        { topic: "Duty, delta and base period - relation and numerical conversions", weight: "8-10 marks", note: "delta = 8.64 B / D is the bridge formula; substitute in m, cm and mm variants." },
        { topic: "Hydrograph components and base flow separation (straight-line, N-day)", weight: "6-8 marks", note: "Sketch the hydrograph first; N = 0.83 A^0.2 is the formula to quote." },
        { topic: "Precipitation measurement and Thiessen polygon method", weight: "6-8 marks", note: "Draw perpendicular bisectors; carry the weighted-mean arithmetic in the same answer." },
        { topic: "Darcy's law, hydraulic conductivity and permeameters", weight: "6-8 marks", note: "Constant head for sand, falling head for silt/clay; one numerical each." },
        { topic: "Infiltration - Horton's equation and cumulative infiltration", weight: "4-6 marks", note: "Practise a trapezoidal-rule cumulative infiltration computation." },
        { topic: "Irrigation efficiencies - conveyance, application, overall, water-use", weight: "4-6 marks", note: "Memorise the percent ranges for each irrigation method." },
        { topic: "Earth dam failure modes, phreatic line and Casagrande's parabola", weight: "4-6 marks", note: "Sketch a zoned section with filters; explain piping and overtopping control." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - hydrology basics", tasks: ["Hydrologic cycle, water balance equation, and a worked catchment budget", "Precipitation forms and the Thiessen polygon method (2 worked examples)", "Rain gauges (recording and non-recording), double-mass curve; infiltration and Horton's equation"] },
        { week: "Week 2", focus: "Unit II - runoff and hydrograph part 1", tasks: ["Runoff definition, components and runoff coefficient; one numerical", "Factors affecting runoff (climatic and physiographic) with a classification table", "Rainfall-runoff correlation: Strange's table, Inglis-De'Souza, linear regression fit"] },
        { week: "Week 3", focus: "Unit II - hydrograph part 2", tasks: ["Storm hydrograph components and base-flow separation (straight-line, N-day)", "Unit hydrograph derivation and DRH by convolution (3 traces)", "S-curve construction and derivation of a shorter-duration UH"] },
        { week: "Week 4", focus: "Unit III - groundwater", tasks: ["Vertical zones, water table, porosity, specific yield and retention", "Aquifer classification with a cross-section sketch; Darcy's law and permeameters", "Wells and tube wells; Theim (confined) and Dupuit (unconfined) steady radial flow, 3 numericals"] },
        { week: "Week 5", focus: "Unit IV - irrigation engineering", tasks: ["Necessity, benefits and ill-effects; flow vs lift irrigation", "Crop water requirement, Penman-Monteith and Blaney-Criddle (1 numerical)", "Duty-delta-base period triangle (2 numericals) and irrigation efficiencies (1 numerical)"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Classification of dams; gravity dam stability (overturning, sliding, middle third)", "Earth dams, phreatic line, spillways, ogee profile and stilling basin", "Reservoir mass-curve, sedimentation, head works and cross-drainage works; two full past papers under time"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy - the night before the exam",
      body: [
        "The last day is for condensing the syllabus onto one sheet of formulas and four sketches. Avoid learning anything new; consolidate what is already known.",
      ],
      bullets: [
        "Reread only the equations: P = E + R + change in storage, Horton, Darcy, Theim, Dupuit, delta = 8.64 B / D, gravity dam FOS.",
        "Sketch the four diagrams you are weakest at: storm hydrograph, unit hydrograph convolution, gravity dam section with forces, aquifer cross-section.",
        "Memorise the labels of a hydrograph: rising limb, peak, crest segment, recession limb, base flow; and the N = 0.83 A^0.2 base-flow separation time.",
        "Walk through one worked numerical end-to-end: unit hydrograph convolution OR Theim well discharge.",
        "List the classification tables from memory: dams, spillways, aquifers, wells, gauges, cross-drainage works - then check against the file.",
        "Sleep 7 hours; arrive with calculator, sharp pencils, eraser, scale and a French curve for hydrographs.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Always write the governing equation first (P = E + R + dS, Horton, Darcy, Theim, delta = 8.64 B / D, FOS) before substituting numbers - the equation earns method marks separately from the arithmetic.",
        "Sketch the system with labels - every hydrology, groundwater, dam and irrigation question earns diagram marks; a neat sketch is often worth two marks by itself.",
        "Convert units explicitly: cm of runoff to cubic metres per second, ha-m to cubic metres, mm/day to m/day, before final arithmetic - a missing conversion is the commonest lost mark.",
        "Name every law and equation you apply (Darcy, Theim, Dupuit, Horton, Blaney-Criddle, Penman-Monteith, Rippl) - cited formulas earn method marks even if the arithmetic later slips.",
        "Time-box: 2-mark definitions in 3 minutes, 3-mark shorts in 6 minutes, 7-mark questions in 15 minutes, and reserve the last 10 minutes to recheck arithmetic and units.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Confusing rainfall with effective rainfall - always subtract losses (infiltration, evaporation, depression storage, interception) before computing runoff or convolving a unit hydrograph.",
        "Mixing cm and m in the same computation - convert all depths to one unit and areas to square metres before multiplying; the duty-delta formula expects B in days, D in ha/cumec, and outputs delta in metres.",
        "Forgetting the natural log in Theim's equation - Q = 2 pi K b (H - hw) / ln(R/rw), not divided by (R/rw); using log10 overestimates Q by a factor of 2.303.",
        "Drawing the unit hydrograph in cm/hr units instead of m^3/s per cm of excess rain - the UH ordinate has units of discharge per unit excess rain depth, not a depth rate.",
        "Counting both base period and duty in days when duty is in hectares per cumec - duty x base period relates to delta via delta = 8.64 B / D, not by simple multiplication.",
        "Neglecting uplift in gravity dam stability - the net vertical force is W minus U, not just W; the sliding FOS is mu(W - U) / P, not mu W / P.",
      ],
    },
  ],
};
