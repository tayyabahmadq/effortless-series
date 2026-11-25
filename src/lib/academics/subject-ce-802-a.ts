/**
 * Academics - RGPV Civil Engineering 8th-semester subject: CE-802(A)
 * Engineering Hydrology.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce802a: AcademicSubject = {
  id: "ce-802-a",
  code: "CE-802(A)",
  title: "Engineering Hydrology",
  semester: "VIII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to engineering hydrology for RGPV VIII-semester civil engineering: water budgets and precipitation analysis, evaporation and infiltration losses, runoff and the unit hydrograph, flood routing, and flood frequency with drought management.",
  description:
    "Five units follow water from cloud to sea: the hydrologic cycle written as a catchment water budget, rain gauges and the arithmetic, Thiessen and isohyetal averaging methods with double-mass consistency checks; evaporation by pans, Penman and Blaney-Criddle beside infiltration by Horton and Green-Ampt with phi and W loss indices; runoff components, the rational method, SCS curve numbers, flow duration and mass curves, and the unit hydrograph built from base-flow-separated storm records; S-curves, IUHs, Snyder's synthetic hydrograph, and Muskingum and level-pool routing; closing with Gumbel and log-Pearson III flood frequency, structural and non-structural flood control, forecasting systems and drought indices. Every section pairs theory with a worked numerical, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#0ea5e9",
  emoji: "HY",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Hydrologic Cycle and Precipitation",
      summary:
        "The engine room of the subject: the hydrologic cycle and its water budget, how rain forms and how rain gauges measure it, converting point readings to catchment averages by the arithmetic, Thiessen and isohyetal methods, and auditing record consistency with the double mass curve.",
      chapter: {
        number: "01",
        title: "The Hydrologic Cycle and Precipitation",
        intro:
          "Unit I sets the frame: the endless circulation of water between ocean, atmosphere and land, written as the quantitative budget P = R + E + dS that every later unit draws on; the instruments that catch rain; the three averaging methods that turn station depths into catchment depths; and the double mass curve that tells an honest record from a broken one.",
        inOneBreath:
          "The hydrologic cycle is a closed solar-powered loop of evaporation, condensation, precipitation, interception, infiltration and runoff; the water budget P = R + E + G + dS is continuity over a catchment, with 1 cm over 1 km2 equal to 10,000 m3; rain is caught in non-recording Symons gauges and in tipping-bucket, weighing or float-siphon recorders; point depths become catchment averages through the arithmetic, Thiessen (area-weighted polygon) and isohyetal (contour) methods; and the double mass curve, a plot of cumulative station rainfall against cumulative neighbour-average rainfall, exposes inconsistent records and repairs them by slope-ratio correction.",
        sections: [
          {
            number: "1.1",
            title: "Engineering hydrology and the hydrologic cycle",
            body: [
              "Hydrology is the science of the occurrence, circulation and distribution of the earth's water; engineering hydrology is its applied face - estimating floods for spillways and culverts, yields for reservoirs and water-supply schemes, and drainage for cities and highways. The organising picture is the hydrologic cycle: solar energy lifts water by evaporation and transpiration, winds carry the vapour, cooling condenses it into clouds, and precipitation returns it to land and sea, where interception, infiltration, storage and runoff split it again. The cycle is closed - no water is created or lost - and that single fact is why every hydrologic computation is a continuity statement.",
              "The global inventory explains where the water sits. About 97% of all water is in the oceans, roughly 2% is locked in ice caps and glaciers, about 0.6% is groundwater, and a mere 0.02% fills lakes and rivers; the atmosphere holds only about 0.001% at any moment. Yet that sliver of atmospheric water delivers roughly a metre of rain-depth equivalent over the globe every year, because it is the fast lane of the cycle: residence times run about 9 days in the atmosphere, weeks in rivers, months in soil moisture and centuries to millennia in oceans and deep groundwater.",
              "Because the cycle is closed, hydrology is a bookkeeping science: for any control volume and period, inflow equals outflow plus change in storage. That is the water budget of the next section, and every later unit - losses in Unit II, runoff in Unit III, routed floods in Unit IV, extremes in Unit V - is one more ledger opened on the same account. In monsoon India, with about 75% of the annual rain compressed into June-September, this bookkeeping decides dam sizes, city drainage and drought policy alike.",
            ],
            bullets: [
              "Hydrology: occurrence, movement and distribution of the earth's water; engineering hydrology applies it to design - dams, drainage, water supply, flood control.",
              "The hydrologic cycle is a closed, solar-powered circulation: evaporation, condensation, precipitation, interception, infiltration, percolation, runoff and storage.",
              "Global inventory: about 97% of water in oceans, 2% in ice, 0.6% as groundwater; the atmosphere holds a mere 0.001% - but it is the fast lane of the cycle.",
              "Residence time: about 9 days in the atmosphere, weeks in rivers, months in soil moisture, centuries in deep groundwater - the shorter the stay, the faster the renewal.",
              "Monsoon India: roughly 75% of annual rainfall arrives in the four months June to September, so storage, flood control and drought management dominate practice.",
            ],
            table: {
              caption: "Global water distribution and typical residence times.",
              headers: ["Reservoir", "Share of all water", "Typical residence time"],
              rows: [
                ["Oceans", "about 97%", "about 3,000 years"],
                ["Ice caps and glaciers", "about 2%", "hundreds to many thousands of years"],
                ["Groundwater", "about 0.6%", "weeks to 10,000 years"],
                ["Lakes and rivers", "about 0.02%", "months to years"],
                ["Soil moisture", "about 0.005%", "one month to a year"],
                ["Atmosphere", "about 0.001%", "about 9 days"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The hydrologic cycle",
              caption:
                "The loop every hydrology paper redraws; label every arrow and the energy source in your exam sketch.",
              steps: [
                { label: "Evaporation from oceans and lakes", note: "solar energy drives the pump" },
                { label: "Condensation and cloud formation", note: "moisture lifted and cooled" },
                { label: "Precipitation as rain or snow" },
                { label: "Interception and infiltration", note: "canopy storage, soil entry" },
                { label: "Runoff to streams and rivers", note: "overland and channel flow" },
                { label: "Return to the ocean", note: "groundwater storage en route" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the cycle, earn the marks",
              body: "'Explain the hydrologic cycle with a neat sketch' recurs constantly. Draw the sun, ocean, land mass and cloud, then label evaporation, transpiration, condensation, precipitation, interception, infiltration, runoff and groundwater return - an unlabelled sketch forfeits half the marks.",
            },
            keyTerms: [
              { term: "Hydrologic cycle", definition: "The continuous solar-powered circulation of water among oceans, atmosphere and land through evaporation, condensation, precipitation and runoff." },
              { term: "Residence time", definition: "Average time a water molecule spends in a given store - about 9 days in the atmosphere, centuries in deep groundwater." },
              { term: "Engineering hydrology", definition: "The applied branch of hydrology used for civil design: flood estimation, reservoir yield, drainage, water supply and irrigation planning." },
            ],
            examQuestions: [
              {
                q: "Define hydrology and engineering hydrology. Explain the hydrologic cycle with a neat sketch, labelling every process, and give the global distribution of water with typical residence times.",
                marks: 7,
                outline: [
                  "Define hydrology and its applied branch with two applications each.",
                  "Sketch the cycle: ocean, land, cloud, sun, and labelled arrows for all eight processes.",
                  "State that the cycle is closed and solar-powered - the basis of continuity.",
                  "Give the distribution: oceans 97%, ice 2%, groundwater 0.6%, surface water 0.02%, atmosphere 0.001%.",
                  "Quote residence times: atmosphere about 9 days, rivers weeks, groundwater centuries.",
                  "Close with the continuity idea P = R + E + dS that all later units use.",
                ],
              },
              {
                q: "State the global distribution of the earth's water among oceans, ice, groundwater and the atmosphere.",
                marks: 2,
              },
              {
                q: "List any six processes of the hydrologic cycle and name the energy source that drives it.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "The water budget equation",
            body: [
              "Take a catchment as a control volume and a water year as the control period: mass conservation writes the water budget P = R + E + G + dS, where P is precipitation, R is streamflow out of the catchment, E is evaporation plus transpiration, G is net groundwater flux across the boundary, and dS is the change in storage. Storage bundles soil moisture, snowpack, lakes, reservoirs and groundwater; over long enough periods the storage change averages to zero, and the budget collapses to rainfall equals runoff plus evaporation.",
              "A worked budget makes the units concrete. A 100 km2 catchment receives 120 cm of rain in a year. The conversion rule is 1 cm of depth over 1 km2 equals 0.01 million cubic metres (10,000 m3), so the input is 120 Mm3. Gauging shows 48 cm of runoff (48 Mm3) and climate data suggest 60 cm of evapotranspiration (60 Mm3); with no net groundwater leak, the balance must sit in storage: dS = 120 - 48 - 60 = +12 cm, or 12 Mm3 - a wet year in which aquifers and soil moisture gained. Every term is the same bookkeeping in a different unit.",
              "Water budgets are the master tool of water-resources assessment: reservoir yield studies, irrigation planning and catchment health checks all start from one. The catch is error: P, R and E are measured by different instruments with different accuracies, so residuals absorb both real storage change and measurement noise. All-India scale, with a mean annual rainfall of about 117 cm, the same equation audits how much of the national water resource runs off, evaporates or recharges - and how much a changing monsoon shifts the ledger.",
            ],
            bullets: [
              "Continuity for a catchment: P = R + E + G + dS over any control period - inputs equal outputs plus change in storage.",
              "Every term is a depth over an area: 1 cm of rainfall over 1 km2 equals 0.01 million cubic metres (10,000 m3).",
              "Storage dS bundles soil moisture, snow, lakes, reservoirs and groundwater; over long periods it averages to zero.",
              "Worked budget: P = 120 cm, R = 48 cm, ET = 60 cm, dS = +12 cm over a 100 km2 catchment - 120, 48, 60 and 12 Mm3.",
              "Applications: reservoir yield, irrigation planning, water-resources assessment and auditing gauged data for leaks.",
            ],
            table: {
              caption: "Annual water budget of a 100 km2 catchment (1 cm over 1 km2 = 0.01 Mm3).",
              headers: ["Component", "Depth (cm)", "Volume (Mm3)", "Role"],
              rows: [
                ["Precipitation P", "120", "120", "input"],
                ["Runoff R", "48", "48", "output"],
                ["Evapotranspiration E", "60", "60", "output"],
                ["Change in storage dS", "+12", "+12", "residual - wet-year gain"],
                ["Net groundwater flux G", "0", "0", "assumed balanced"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Closing a catchment water budget",
              caption: "The audit sequence for any control volume and period.",
              steps: [
                { label: "Fix control volume and period", note: "catchment divide, one water year" },
                { label: "Measure rainfall P and streamflow R" },
                { label: "Estimate evapotranspiration E" },
                { label: "Assess net groundwater flux G" },
                { label: "Close with dS and audit residuals", note: "a large residual flags bad data" },
              ],
            },
            callout: {
              type: "tip",
              title: "The one conversion to memorise",
              body: "1 cm over 1 km2 = 10,000 m3 = 0.01 Mm3 converts every water-budget numerical. State it once at the top of your answer, then convert each depth to a volume in a column - the examiner can then award method marks line by line.",
            },
            keyTerms: [
              { term: "Water budget equation", definition: "P = R + E + G + dS: mass conservation written for a catchment over a chosen period." },
              { term: "Control volume", definition: "The fixed region - here a catchment - over which inflows, outflows and storage change are balanced." },
              { term: "Change in storage (dS)", definition: "The net gain or loss of water held in soil, snow, lakes, reservoirs and groundwater during the period." },
            ],
            examQuestions: [
              {
                q: "State the water budget equation for a catchment, define each term with units, and apply it: annual rainfall 120 cm, runoff 48 cm, evapotranspiration 60 cm, no net groundwater flux - find the change in storage as a depth and as a volume over a 100 km2 catchment.",
                marks: 7,
                outline: [
                  "Write P = R + E + G + dS and define each term with units (cm and Mm3).",
                  "State the conversion: 1 cm over 1 km2 = 0.01 Mm3.",
                  "Substitute: dS = 120 - 48 - 60 - 0 = 12 cm.",
                  "Convert: 12 cm over 100 km2 = 12 Mm3.",
                  "Interpret: a wet year - catchment storage gained water.",
                  "Note the assumptions: no net groundwater leak, residuals absorb measurement error.",
                ],
              },
              {
                q: "Convert 75 mm of runoff depth over a 60 km2 catchment into million cubic metres.",
                marks: 2,
              },
              {
                q: "Why does the storage term vanish from long-term average water budgets? What then remains of the equation?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Precipitation and rain gauges",
            body: [
              "Precipitation is water falling from clouds as drizzle, rain, snow, sleet or hail, with dew and frost as minor surface gains. Formation needs three ingredients - a moisture supply, a lifting-and-cooling mechanism, and condensation nuclei - and the mechanism classifies the rain: convection lifts hot humid air into thunderstorms, mountains force air up the windward slope in orographic rain, and converging air masses slide over one another in cyclonic or frontal systems. Indian hydrology lives on a monsoon blend of orographic and cyclonic rain.",
              "Measurement splits into non-recording and recording gauges. The Symons-type non-recording gauge collects rain through a 127 mm mouth into a bottle read daily with a measuring glass - cheap, so networks are dense. Recording gauges add the time dimension: the tipping-bucket gauge tips a small seesaw every 0.25 mm and logs pulses, ideal for intensity; the weighing gauge traces accumulated mass on a clock-driven chart and copes with snow and sleet; the float-siphon gauge records the rising level in a chamber that periodically dumps. Network norms run about one gauge per 500 km2 of plains, denser in hills, with roughly a tenth of stations recording.",
              "Errors matter because every downstream analysis inherits them. Wind eddies around an elevated rim under-catch by several percent - the reason ground-level, shielded gauges are the reference; wetting losses cling to the funnel, evaporation steals from the receiver between readings, and splash can go either way. Siting rules follow: open, level ground, clear of buildings and trees, rim at a standard height. Section 1.5 shows how to audit whether a gauge's record stayed consistent through moves and exposure changes.",
            ],
            bullets: [
              "Precipitation forms: drizzle, rain, snow, sleet, hail, dew and frost; rain drives Indian hydrology.",
              "Formation requires moisture, a lifting-cooling mechanism (convective, orographic or cyclonic) and condensation nuclei.",
              "Non-recording Symons gauge: 127 mm mouth, bottle read daily; recording gauges: tipping bucket (0.25 mm per tip), weighing and float-siphon types.",
              "Errors: wind eddies, wetting of the funnel, evaporation and splash - ground-level shielded gauges are the reference standard.",
              "Network density: about one gauge per 500 km2 of plains, denser in hilly or heavy-rainfall regions, with roughly 10% recording gauges.",
            ],
            table: {
              caption: "Rain gauge types at a glance.",
              headers: ["Gauge", "Recording principle", "Output", "Merit"],
              rows: [
                ["Symons non-recording", "none - manual daily read", "daily total depth", "simple, cheap, dense networks"],
                ["Tipping bucket", "magnet pulse per 0.25 mm tip", "digital hyetograph", "intensity data, telemetry-friendly"],
                ["Weighing", "spring balance vs time", "mass chart", "handles snow and sleet"],
                ["Float-siphon", "float rise in a chamber", "level chart with siphon dump", "continuous trace"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Siting a rain gauge station",
              caption: "The same instrument reads differently depending only on where it stands.",
              start: "Installing a rain gauge",
              branches: [
                { label: "Open, level site with rim at standard height over short grass", outcome: "True catch; records comparable across the network", good: true },
                { label: "Roof or wall-adjacent exposure", outcome: "Wind eddies and splash bias the catch systematically low", good: false },
                { label: "Sheltered hollow beside trees and buildings", outcome: "Interception and drip-in contaminate the record", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Wind is the biggest gauge thief",
              body: "An unshielded elevated rim can under-catch by 5 to 15 percent, and the loss grows with wind speed and drop size. Whenever a numerical mentions an exposed or rooftop gauge, state the wind error and its direction - examiners plant it deliberately.",
            },
            keyTerms: [
              { term: "Precipitation", definition: "All water deposited from the atmosphere on the earth's surface: drizzle, rain, snow, sleet, hail, dew and frost." },
              { term: "Hyetograph", definition: "A plot of rainfall intensity or depth against time - the record a recording gauge produces directly." },
              { term: "Tipping-bucket gauge", definition: "A recording rain gauge in which a seesaw bucket tips and registers a pulse for every 0.25 mm of rain." },
            ],
            examQuestions: [
              {
                q: "Describe with sketches the working of the non-recording gauge and the three types of recording rain gauges, and state the errors of rainfall measurement with their remedies.",
                marks: 7,
                outline: [
                  "Symons gauge: 127 mm mouth, bottle, daily measuring-cylinder read.",
                  "Tipping bucket: 0.25 mm seesaw tips with pulse count - gives intensity.",
                  "Weighing gauge: mass on a clock chart - handles snow and sleet.",
                  "Float-siphon: float chamber trace with automatic siphon dump.",
                  "Errors: wind eddies, wetting, evaporation, splash in and out.",
                  "Remedies: shielded ground-level installation, standard rim height, siting rules.",
                  "Close with network density: about 1 per 500 km2, tenth recording.",
                ],
              },
              {
                q: "What is a hyetograph, and which gauge produces it directly?",
                marks: 2,
              },
              {
                q: "Distinguish convective, orographic and cyclonic precipitation, with one Indian example region each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Mean areal precipitation: arithmetic, Thiessen and isohyetal methods",
            body: [
              "Every hydrologic computation needs a catchment-average rainfall depth, but gauges see only points. Three estimators bridge the gap. The arithmetic mean simply averages station depths - fair only for flat terrain with an even, dense network. The Thiessen polygon method weights each gauge by the area of its polygon, built by drawing perpendicular bisectors between stations; it is objective and repeatable but blind to topography. The isohyetal method draws contours of equal rainfall (isohyets), planimeters the area between successive isohyets, and averages the bounding isohyets over each band - the most accurate in mountainous country and the one that honours orographic gradients.",
              "A worked comparison settles the choice. Four gauges A, B, C and D read 62, 41, 33 and 47 mm, with Thiessen polygon areas 38, 22, 30 and 10 km2 of a 100 km2 catchment. The arithmetic mean is (62+41+33+47)/4 = 45.8 mm. The Thiessen mean is (62x38 + 41x22 + 33x30 + 47x10)/100 = 4718/100 = 47.2 mm - the wetter north-eastern gauge controls more area, so the average rises. An isohyetal analysis of the same storm, averaging bands between isohyets drawn at 5 mm intervals, gives about 48.4 mm.",
              "The differences here are under 6%, but on steep catchments they exceed 20%, which is why the isohyetal method earns its effort in the hills and Thiessen is the workhorse elsewhere. A related practical problem is the missing record: estimate it from three or four surrounding stations by their simple average when their normal annual rainfalls differ little, and by the normal-ratio method - weighting each neighbour by the ratio of normal rainfalls - when they differ by more than about 10%.",
            ],
            bullets: [
              "Areal reduction turns point depths into a catchment average: arithmetic, Thiessen polygon and isohyetal methods.",
              "Arithmetic: the simple station average - justified only for flat terrain and an even, dense network.",
              "Thiessen: perpendicular bisectors build polygons; each gauge is weighted by its polygon area share - objective but topography-blind.",
              "Isohyetal: interpolate equal-rainfall contours and average over inter-isohyetal bands - best in mountainous catchments.",
              "Missing data: use the average of nearby stations, or the normal-ratio method when normal annuals differ by more than about 10%.",
            ],
            codeExample: {
              language: "python",
              caption: "Thiessen weighting for a 100 km2 catchment with four gauges (rain in mm, areas in km2).",
              code: `# Thiessen polygon weighting: mean areal precipitation
gauges = [
    ("A", 62.0, 38.0),   # (name, rainfall mm, polygon area km2)
    ("B", 41.0, 22.0),
    ("C", 33.0, 30.0),
    ("D", 47.0, 10.0),
]
total_area = sum(a for _, _, a in gauges)
mean_p = sum(p * a for _, p, a in gauges) / total_area

for name, p, a in gauges:
    w = a / total_area
    print(f"{name}: weight {w:.2f}, contribution {p * w:5.1f} mm")

arith = sum(p for _, p, _ in gauges) / len(gauges)
print(f"Total area: {total_area:.0f} km2")
print(f"Thiessen mean rainfall: {mean_p:.1f} mm")
print(f"Arithmetic mean for comparison: {arith:.1f} mm")`,
            },
            diagram: {
              kind: "compare",
              title: "Thiessen polygons versus isohyets",
              caption: "Two ways to weight the same four gauges - pick by terrain and data richness.",
              left: {
                heading: "Thiessen polygon method",
                items: [
                  "Join gauges, draw perpendicular bisectors",
                  "Polygons assign each area to one gauge",
                  "Weight = polygon area / total area",
                  "Objective and repeatable, but no topographic sense",
                  "Suited to rolling terrain and sparse networks",
                ],
              },
              right: {
                heading: "Isohyetal method",
                items: [
                  "Draw isohyets through all station values",
                  "Planimeter the inter-isohyetal areas",
                  "Average the bounding isohyets per band",
                  "Honours orographic rainfall gradients",
                  "Most accurate, but demands skill and data",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Show the weighted-sum line",
              body: "In numericals write P = sum of (Pi x Ai) / sum of Ai with your numbers substituted, then the single-line arithmetic - 4718/100 = 47.2 mm. Most marks are lost when students quote the formula but never substitute; the substitution is the answer.",
            },
            keyTerms: [
              { term: "Thiessen polygon", definition: "The area cell around a rain gauge built from perpendicular bisectors; its area share weights the gauge's rainfall." },
              { term: "Isohyet", definition: "A contour of equal rainfall depth drawn from station values across a region." },
              { term: "Normal-ratio method", definition: "Estimating missing rainfall by weighting neighbour rainfalls by the ratios of long-term normal rainfalls." },
            ],
            examQuestions: [
              {
                q: "Explain the Thiessen polygon method and compute the mean areal rainfall for gauges A-D reading 62, 41, 33 and 47 mm with polygon areas 38, 22, 30 and 10 km2; compare with the arithmetic mean and state when each method is preferred.",
                marks: 7,
                outline: [
                  "Construction: join stations, perpendicular bisectors, polygons.",
                  "Weighting formula: P = sum (Pi x Ai) / sum Ai.",
                  "Substitute: (2356 + 902 + 990 + 470)/100 = 47.2 mm.",
                  "Arithmetic mean: 183/4 = 45.8 mm.",
                  "Comparison: Thiessen reflects area control; arithmetic ignores it.",
                  "State preferences: arithmetic for flat, dense networks; isohyetal for hills.",
                ],
              },
              {
                q: "Define an isohyet and outline the isohyetal method of estimating mean areal rainfall.",
                marks: 2,
              },
              {
                q: "A station's daily record is missing. The normal annual rainfalls of the station and its three neighbours differ by about 20%. Which estimation method applies, and why?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "The double mass curve and record consistency",
            body: [
              "A gauge's record is consistent if it keeps a stable relation with its neighbours through time; it is accurate if it measures the true depth. Gauges move, cities grow over exposures, funnels get dented - and the record silently breaks. The double mass curve detects this: plot cumulative rainfall of the suspect station against the cumulative average rainfall of a group of five to ten nearby base stations. If the relation is a single straight line, the record is consistent; a break in slope dates the change, because base stations absorbing regional climate swings together will not kink on their own.",
              "Correction follows the slope ratio. Suppose a station's mass-curve slope is 1.00 from 1980 to 2004 but drops to 0.80 from 2005, the year the gauge was relocated to a sheltered courtyard. The post-2005 records are systematically low, so multiply each by 1.00/0.80 = 1.25 to rebuild a homogeneous series: 2005's recorded 800 mm becomes 1000 mm on the original exposure. Always correct toward the longer, original segment unless there is reason to trust the new site more.",
              "Respect the limits. The test detects inconsistency, never inaccuracy - a gauge can be wrong by a constant factor yet perfectly consistent, and the curve will not blink. Base stations must themselves be consistent, homogeneous in climate and close by, or their own wobbles masquerade as the suspect's. The same mass-curve logic extends beyond rain: cumulative streamflow versus cumulative rainfall audits a catchment's response, exposing land-use change or regulation that creeps into a gauge's behaviour.",
            ],
            bullets: [
              "Double mass curve: cumulative station rainfall plotted against cumulative average rainfall of surrounding base stations.",
              "A single straight line means a consistent record; a break in slope dates a change in gauge location or exposure.",
              "Correction: multiply post-break values by the ratio of the slopes - slopes 1.00 and 0.80 give a factor of 1.25.",
              "Base stations must be consistent, climatologically homogeneous and nearby - typically five to ten of them.",
              "The test checks consistency, not accuracy: a gauge can be perfectly consistent and still wrong.",
            ],
            table: {
              caption: "A double-mass audit of a relocated gauge.",
              headers: ["Period", "Mass-curve slope", "Interpretation", "Correction"],
              rows: [
                ["1980-2004", "1.00", "consistent, original site", "none"],
                ["2005-2020", "0.80", "gauge relocated to a sheltered site", "multiply annual values by 1.25"],
                ["After correction", "1.00 restored", "homogeneous series rebuilt", "merged record usable for design"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Running a double-mass analysis",
              caption: "From raw annual values to a corrected, homogeneous record.",
              steps: [
                { label: "Pick 5-10 stable neighbour stations" },
                { label: "Accumulate annual rainfall: station and base average" },
                { label: "Plot cumulative pairs" },
                { label: "Fit segments and locate the slope break" },
                { label: "Correct later data by the slope ratio", note: "1.00 / 0.80 = 1.25 here" },
              ],
            },
            callout: {
              type: "exam",
              title: "Consistency is not accuracy",
              body: "A standing two-mark trap: consistent means the gauge keeps a stable relation with its neighbours; accurate means it measures the true depth. The double mass curve certifies only the first - write the distinction explicitly and the marks are safe.",
            },
            keyTerms: [
              { term: "Double mass curve", definition: "A plot of a station's cumulative rainfall against the cumulative average of base stations, used to test record consistency." },
              { term: "Base stations", definition: "A group of nearby, mutually consistent stations whose average absorbs regional climate variation." },
              { term: "Slope break", definition: "The kink in a double mass curve that dates a change in a station's location or exposure." },
            ],
            examQuestions: [
              {
                q: "What is a double mass curve? Explain its use in checking the consistency of a rainfall record and describe the correction of records when the slope changes from 1.0 to 0.8.",
                marks: 7,
                outline: [
                  "Define the plot: cumulative station rainfall vs cumulative base-station average.",
                  "State base-station rules: 5-10, nearby, homogeneous, themselves consistent.",
                  "Interpret the straight line and the slope break with a sketch.",
                  "Correction factor = 1.0/0.8 = 1.25 applied to all post-break values.",
                  "Illustrate: a recorded 800 mm becomes 1000 mm.",
                  "Distinguish consistency from accuracy and note the test's limit.",
                ],
              },
              {
                q: "Why must the base stations in a double mass analysis be consistent themselves?",
                marks: 2,
              },
              {
                q: "Distinguish between the consistency and the accuracy of a rain gauge record. Which one does the double mass curve test?",
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
      title: "Evaporation and Infiltration",
      summary:
        "The losses between cloud and river: Dalton's law and pan measurement of evaporation, the Penman and Blaney-Criddle estimation equations, Horton's decay and Green-Ampt's wetting-front models of infiltration, and the phi and W indices that collapse a storm's losses into one effective-rainfall rate.",
      chapter: {
        number: "02",
        title: "Evaporation and Infiltration",
        intro:
          "Unit II accounts for the water lost between cloud and channel: evaporation and its pan measurement, the Penman and Blaney-Criddle estimation equations, infiltration described by Horton's empirical decay and Green-Ampt's physically-based wetting front, and the phi and W indices that reduce a whole storm's losses to a single rate ready for unit hydrograph work.",
        inOneBreath:
          "Evaporation obeys a Dalton-type law E = K (es - ea) f(u) and is measured with pans (Class A coefficient 0.70, Colorado sunken 0.78); Penman combines an energy term and an aerodynamic term as (delta H + gamma Ea)/(delta + gamma) while Blaney-Criddle needs only temperature and daylight hours as U = K F with F = sum (t p)/100; infiltration capacity decays by Horton's f = fc + (f0 - fc) e^(-kt) or follows Green-Ampt's piston front f = K (1 + (theta_s - theta_i) psi_f / F); and the phi index is the uniform loss rate that makes storm excess equal direct runoff, with the W index the same after removing initial abstraction.",
        sections: [
          {
            number: "2.1",
            title: "Evaporation: process, factors and pan measurement",
            body: [
              "Evaporation is vaporisation at a water surface - molecules gain enough energy to escape as vapour, consuming about 2.45 MJ of latent heat per kilogram of water. The rate is set by the vapour pressure deficit between the saturated surface and the overlying air, and Dalton expressed this as E = K (es - ea) f(u): evaporation grows with the deficit and with wind speed, which sweeps away the saturated layer hugging the water. Sunlight supplies the energy; without an energy budget, no deficit can be exploited.",
              "The factor list follows the physics. Vapour pressure deficit is the direct driver; temperature raises the saturation pressure es and speeds molecules; wind removes humid air and renews the gradient; net radiation is the fuel supply; atmospheric pressure weakly opposes escape. Depth matters through thermal inertia - deep lakes evaporate into autumn as stored heat leaks out - and dissolved salt lowers the surface's vapour pressure: about 1% less evaporation for every 1% of salt. Exposed area scales the total loss linearly.",
              "Measurement is by evaporation pans. The US Class A pan - 1.21 m diameter, 255 mm deep, on an open timber frame - over-reads lakes because of rim heating and shallowness, so lake evaporation = pan evaporation x 0.70. The Colorado sunken pan (0.92 m square, 0.46 m deep, rim 50 mm above ground) is closer to lake conditions with a coefficient near 0.78, and Indian observatories run similar pans with coefficients around 0.75 to 0.80. A pan reading of 8 mm/day therefore means about 5.6 mm/day of true lake loss - the correction is the whole point.",
            ],
            bullets: [
              "Evaporation is vaporisation at a water surface; it consumes about 2.45 MJ of latent heat per kilogram of water.",
              "Dalton-type law: E = K (es - ea) f(u) - the rate grows with vapour pressure deficit and wind speed.",
              "Factors: net radiation, temperature, humidity, wind, atmospheric pressure, water depth, salinity and exposed area.",
              "Pans measure it: US Class A pan (1.21 m diameter, 255 mm deep) with pan coefficient about 0.70; Colorado sunken pan about 0.78.",
              "Lake evaporation = pan evaporation x pan coefficient; salinity cuts evaporation roughly 1% for every 1% dissolved salt.",
            ],
            table: {
              caption: "Standard evaporation pans and their lake coefficients.",
              headers: ["Pan", "Size", "Setting", "Pan coefficient"],
              rows: [
                ["US Class A", "1.21 m diameter x 255 mm deep", "on a timber frame in the open", "about 0.70"],
                ["Colorado sunken", "0.92 m square x 0.46 m deep", "sunk, rim 50 mm above ground", "about 0.78"],
                ["Indian standard pan", "about 1.22 m diameter x 255 mm deep", "above ground on a frame", "0.75-0.80"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "From pan reading to lake loss",
              caption: "The coefficient is not optional - the pan is a measuring device with a calibration.",
              start: "A Class A pan reads 8.0 mm/day",
              branches: [
                { label: "Multiply by 0.70 to get 5.6 mm/day", outcome: "Pan-coefficient route - the standard, defensible answer", good: true },
                { label: "Report the raw 8.0 mm/day as lake evaporation", outcome: "Pan over-reads by 30-45%; reservoir designs become bloated", good: false },
                { label: "Apply the coefficient, then cut 5% for a brackish lake", outcome: "Salinity adjustment - about 1% less evaporation per 1% salt", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Pan evaporation is not lake evaporation",
              body: "Always quote the coefficient with its direction: pans read higher than lakes (Class A about 40% higher). Forgetting the coefficient is the single most common Unit II numerical slip - and the examiner almost always plants the pan value as the bait.",
            },
            keyTerms: [
              { term: "Evaporation", definition: "Vaporisation at a water surface, consuming about 2.45 MJ of latent heat per kilogram of water." },
              { term: "Pan coefficient", definition: "Ratio of lake evaporation to pan evaporation - about 0.70 for the Class A pan." },
              { term: "Vapour pressure deficit", definition: "The gap es - ea between saturation vapour pressure at the surface and actual vapour pressure of the air - Dalton's driving force." },
            ],
            examQuestions: [
              {
                q: "State Dalton's law of evaporation, discuss the factors affecting evaporation, and estimate lake evaporation from a Class A pan reading of 8 mm/day, including a salinity adjustment of 5%.",
                marks: 7,
                outline: [
                  "Write E = K (es - ea) f(u) and define the terms.",
                  "Factors: deficit, wind, radiation, temperature, pressure, depth, salinity, area - one line each.",
                  "Note the energy role: about 2.45 MJ per kilogram of water evaporated.",
                  "Describe the Class A pan and its 0.70 coefficient.",
                  "Lake evaporation = 8.0 x 0.70 = 5.6 mm/day.",
                  "Salinity: 5% salt cuts the estimate a further 5% to about 5.3 mm/day.",
                ],
              },
              {
                q: "Define pan coefficient. What is its value for the Class A pan?",
                marks: 2,
              },
              {
                q: "Why does a shallow pan overestimate the evaporation from a deep lake?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Estimating evaporation and evapotranspiration: Penman and Blaney-Criddle",
            body: [
              "Where no pan (or no interest in pan artifacts) exists, equations estimate evaporation and evapotranspiration from weather data. Two families dominate. Energy-aerodynamic combination methods combine the radiation driving evaporation with the air's drying power; temperature-based empirical methods trade accuracy for data poverty. The target variable is usually potential evapotranspiration (PET) - the demand the atmosphere makes when water is never limiting - which irrigation and reservoir studies convert into crop water requirements.",
              "Penman's equation is the classic combination method: E = (delta H + gamma Ea) / (delta + gamma). Here H is net radiation expressed as equivalent evaporation, Ea is the aerodynamic drying term built from wind speed and vapour pressure deficit, delta is the slope of the saturation vapour pressure curve at mean air temperature, and gamma is the psychrometric constant, about 0.66 kilopascal per degree C. The two terms are weighted by their own sensitivities: in humid, windy weather Ea dominates; in clear, hot, still weather the radiation term H carries the day. The price is data: sunshine, temperature, humidity and wind all enter.",
              "Blaney-Criddle is the data-poor workhorse for monthly consumptive use: U = K F, where F = sum over months of (t x p)/100, t is mean monthly air temperature (degrees F in the original) and p is the month's percentage of annual daylight hours, both easily obtained from a table of latitude. K is a consumptive-use coefficient for the crop and season. Meyer's aerodynamic formula - vapour pressures plus a wind function - covers lake evaporation in the same spirit. Choose by data availability: Penman where a full weather station exists, Blaney-Criddle where only a thermometer does.",
            ],
            bullets: [
              "Penman is a combination method: an energy term (net radiation) plus an aerodynamic term (wind and vapour deficit), weighted by delta and gamma.",
              "E = (delta H + gamma Ea) / (delta + gamma); delta is the slope of the saturation vapour pressure curve, gamma the psychrometric constant.",
              "Blaney-Criddle: U = K x F with F = sum of (t x p)/100 over months - t is mean air temperature, p the month's share of annual daylight hours.",
              "Penman needs radiation, temperature, humidity and wind; Blaney-Criddle needs only temperature and latitude - pick by data availability.",
              "Both estimate potential evapotranspiration - the atmospheric demand - which converts to crop water requirement by a crop coefficient.",
            ],
            table: {
              caption: "Estimation methods compared.",
              headers: ["Method", "Family", "Data required", "Typical use"],
              rows: [
                ["Penman", "energy-aerodynamic combination", "sunshine, temperature, humidity, wind", "reservoir and irrigation design; highest accuracy"],
                ["Blaney-Criddle", "temperature-based empirical", "monthly mean temperature + daylight percentage", "monthly irrigation planning; moderate accuracy"],
                ["Meyer", "aerodynamic", "vapour pressures + wind speed", "lake evaporation estimates"],
                ["Pan x coefficient", "direct measurement", "daily pan record", "quick operational estimates"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Inside the Penman equation",
              caption: "Read top to bottom: the answer, its weighting, and its two drivers.",
              layers: [
                { label: "Result: evaporation in mm/day" },
                { label: "Weighting: divide by (delta + gamma)" },
                { label: "Aerodynamic term: gamma x Ea - wind and vapour pressure deficit" },
                { label: "Energy term: delta x H - net radiation at the surface" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise Penman as a shape",
              body: "Learn 'energy term plus wind term, all over (delta + gamma)', then define each symbol in one line. The equation statement with symbols carries half the marks of any Penman question - numericals on it are rare, derivation-style explanations are routine.",
            },
            keyTerms: [
              { term: "Potential evapotranspiration", definition: "The evaporation plus transpiration that would occur if water were never limiting - the atmosphere's demand." },
              { term: "Psychrometric constant", definition: "gamma, about 0.66 kilopascal per degree C; links the wet-bulb depression to the vapour pressure deficit." },
              { term: "Consumptive use", definition: "Total water used by a crop in evapotranspiration over a period - Blaney-Criddle's output U." },
            ],
            examQuestions: [
              {
                q: "Write the Penman equation, define every term, explain why it is called a combination method, and compare its data needs and accuracy with the Blaney-Criddle method.",
                marks: 7,
                outline: [
                  "Write E = (delta H + gamma Ea)/(delta + gamma).",
                  "Define H (net radiation as evaporation equivalent) and Ea (wind + deficit drying term).",
                  "Define delta (slope of es curve at mean temperature) and gamma (psychrometric constant).",
                  "Justify 'combination': energy-balance term plus aerodynamic term.",
                  "State Blaney-Criddle: U = K F, F = sum (t p)/100.",
                  "Compare data needs: full weather station vs temperature and latitude; accuracy highest vs moderate.",
                ],
              },
              {
                q: "Write the Blaney-Criddle formula for monthly consumptive use and define the factor F.",
                marks: 2,
              },
              {
                q: "What is potential evapotranspiration, and why is it the standard demand variable in irrigation planning?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Infiltration and the Horton equation",
            body: [
              "Infiltration is water's entry into soil through the surface, and the infiltration capacity f(t) is the maximum rate the soil can absorb at time t; actual infiltration is the lesser of capacity and rainfall intensity. Capacity starts high on a dry soil - large pores empty, suction strong - and decays as pores fill, colloids swell and entrapped air blocks, until it flattens to a final steady rate. Controls include texture and structure, initial moisture, vegetal cover (roots keep paths open), compaction, entrapped air, water quality and temperature; final capacities run about 20-30 mm/h for sands down to 1-5 mm/h for clays.",
              "Horton's equation captures the decay: f(t) = fc + (f0 - fc) e^(-kt), with f0 the initial capacity, fc the final capacity and k the decay constant per hour - a larger k means a faster fall. Cumulative infiltration follows by integration: F(t) = fc t + (f0 - fc)(1 - e^(-kt))/k. Worked example: f0 = 60 mm/h, fc = 10 mm/h, k = 2 per hour. At t = 0.5 h, f = 10 + 50 x e^(-1) = 28.4 mm/h and F = 5 + 25(1 - e^(-1)) = 20.8 mm; capacity falls below a 20 mm/h storm when 20 = 10 + 50 e^(-2t), that is at t = 0.80 h.",
              "Measurement is dominated by the double-ring infiltrometer: an inner ring (about 300 mm diameter) is ponded and its water-level drop timed, while a buffered outer ring (about 600 mm) also ponded forces the inner ring's flow to go vertically down instead of spreading laterally - without the outer ring the apparent rate is too high. Rainfall simulators and water-balance or basin-analysis methods extend the scale. Point measurements vary wildly across a field, so several sites are averaged before any basin statement.",
            ],
            bullets: [
              "Infiltration capacity f(t) is the soil's maximum intake rate; actual infiltration = min(rainfall intensity, capacity).",
              "Horton: f(t) = fc + (f0 - fc) e^(-kt) - capacity decays from f0 toward final fc at rate constant k per hour.",
              "Cumulative: F(t) = fc t + (f0 - fc)(1 - e^(-kt))/k - integrate the rate before quoting depths.",
              "Worked: f0 = 60, fc = 10 mm/h, k = 2 per hour gives f at 30 min = 28.4 mm/h and F = 20.8 mm.",
              "Double-ring infiltrometer: the ponded outer ring buffers lateral seepage so the inner ring measures vertical intake only.",
            ],
            codeExample: {
              language: "python",
              caption: "Horton infiltration: rate, cumulative depth, and the time capacity drops below a storm intensity.",
              code: `import math

# Horton model: f(t) = fc + (f0 - fc) * exp(-k t)
f0, fc, k = 60.0, 10.0, 2.0        # mm/h, mm/h, per hour

def rate(t):
    return fc + (f0 - fc) * math.exp(-k * t)

def cumulative(t):
    return fc * t + (f0 - fc) * (1 - math.exp(-k * t)) / k

for t in (0.0, 0.25, 0.5, 0.75, 1.0):          # hours
    print(f"t = {t:4.2f} h   f = {rate(t):6.1f} mm/h   F = {cumulative(t):6.1f} mm")

# When does capacity fall below a 20 mm/h storm?
t_eq = -math.log((20.0 - fc) / (f0 - fc)) / k
print(f"Capacity drops to 20 mm/h at t = {t_eq:.2f} h")
print(f"F at that moment = {cumulative(t_eq):.1f} mm")`,
            },
            table: {
              caption: "Typical infiltration capacities by soil (indicative ranges).",
              headers: ["Soil", "Initial f0 (mm/h)", "Final fc (mm/h)"],
              rows: [
                ["Sand", "50-100", "20-30"],
                ["Loam", "30-60", "10-20"],
                ["Silt loam", "20-40", "5-10"],
                ["Clay", "5-20", "1-5"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From storm to rainfall excess",
              caption: "Capacity versus intensity decides what the soil keeps and what runs.",
              steps: [
                { label: "Compare intensity i with capacity f(t)" },
                { label: "Early storm: i < f, everything soaks in" },
                { label: "Capacity decays toward fc" },
                { label: "After crossing: excess = i - f(t)" },
                { label: "Excess depths build overland flow", note: "the input to Unit III hydrographs" },
              ],
            },
            callout: {
              type: "exam",
              title: "Rate AND depth",
              body: "Horton numericals almost always ask for both the rate f at a time and the cumulative F. Quote the integrated formula F(t) = fc t + (f0 - fc)(1 - e^(-kt))/k as a step - deriving it from the rate equation is a method mark, plugging numbers alone is not.",
            },
            keyTerms: [
              { term: "Infiltration capacity", definition: "The maximum rate at which soil can absorb water at a given time; actual infiltration equals min(intensity, capacity)." },
              { term: "Horton equation", definition: "f(t) = fc + (f0 - fc) e^(-kt): empirical exponential decay of infiltration capacity toward a final rate." },
              { term: "Double-ring infiltrometer", definition: "Two concentric ponded rings; the outer ring's buffer makes the inner ring's measured intake vertical." },
            ],
            examQuestions: [
              {
                q: "Write the Horton infiltration equation, explain its parameters, and for f0 = 60 mm/h, fc = 10 mm/h and k = 2 per hour compute the infiltration rate and cumulative infiltration at 30 minutes; find when capacity falls below a 20 mm/h storm.",
                marks: 7,
                outline: [
                  "Write f(t) = fc + (f0 - fc) e^(-kt) and define f0, fc, k.",
                  "Rate at 0.5 h: 10 + 50 e^(-1) = 28.4 mm/h.",
                  "Integrate to get F(t) = fc t + (f0 - fc)(1 - e^(-kt))/k.",
                  "Cumulative at 0.5 h: 5 + 25(1 - e^(-1)) = 20.8 mm.",
                  "Set 20 = 10 + 50 e^(-2t) and solve: t = 0.80 h.",
                  "State limits: empirical constants, point measurement, spatial variability.",
                ],
              },
              {
                q: "Why does a double-ring infiltrometer need an outer ring?",
                marks: 2,
              },
              {
                q: "State any four factors affecting infiltration capacity.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "The Green-Ampt infiltration model",
            body: [
              "Green-Ampt replaces Horton's curve-fitting with physics. Picture infiltration as a piston: a sharp wetting front moves downward, with saturated soil above it (water content theta_s) and undisturbed soil below at the initial water content theta_i. The assumptions are demanding - uniform soil, uniform initial water content, a ponded surface and a piston front with no diffusion - but they buy an equation whose every parameter can be measured in a laboratory.",
              "The model reads f = K (1 + (theta_s - theta_i) psi_f / F). K is saturated hydraulic conductivity, psi_f is the suction head at the wetting front, (theta_s - theta_i) is the fillable pore space and F is cumulative infiltration since ponding began. The bracket explains the whole behaviour: early in the storm F is small, the suction term is huge and intake is fast; as F grows the suction term fades and f sinks toward the final rate K. Worked: K = 3.6 mm/h (about 0.001 cm/s), (theta_s - theta_i) = 0.35, psi_f = 200 mm. At F = 20 mm: f = 3.6 (1 + 0.35 x 200/20) = 16.2 mm/h; at F = 100 mm: f = 3.6 (1 + 0.7) = 6.1 mm/h.",
              "Because K, theta and psi are soil properties rather than fitted constants, Green-Ampt powers physics-based models - the infiltration module of SWMM-style urban drainage software, for example - where Horton's empiricism would need local recalibration for every soil. The price is the idealisation: real fronts smear by diffusion, and layered or cracked soils violate the uniformity assumption. Alongside Horton's pragmatism and the phi index of the next section, it completes the toolbox for turning a storm into effective rainfall.",
            ],
            bullets: [
              "Green-Ampt pictures a sharp wetting front moving down like a piston over uniform soil at initial water content theta_i.",
              "f = K (1 + (theta_s - theta_i) psi_f / F): K saturated conductivity, psi_f front suction, F cumulative infiltration.",
              "Early on, F is small so the suction term dominates; as F grows, f approaches the final rate K.",
              "Worked: K = 3.6 mm/h, (theta_s - theta_i) = 0.35, psi_f = 200 mm give f = 16.2 mm/h at F = 20 mm and 6.1 mm/h at F = 100 mm.",
              "Unlike Horton's fitted constants, K, theta and psi are measurable soil properties - the reason physics-based models prefer it.",
            ],
            table: {
              caption: "Green-Ampt parameters and their typical magnitudes.",
              headers: ["Symbol", "Meaning", "Typical value"],
              rows: [
                ["K", "saturated hydraulic conductivity", "3.6 mm/h (about 0.001 cm/s)"],
                ["theta_s - theta_i", "fillable pore space above the front", "0.30-0.40"],
                ["psi_f", "wetting-front suction head", "50-300 mm"],
                ["F", "cumulative infiltration since ponding", "grows with time"],
                ["f", "infiltration rate", "starts high, tends to K"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The Green-Ampt soil column at time t",
              caption: "The piston picture, top to bottom from ponded surface to dry soil.",
              layers: [
                { label: "Ponded water at the surface" },
                { label: "Saturated zone: theta = theta_s, conductivity K" },
                { label: "Sharp wetting front: suction psi_f" },
                { label: "Undisturbed soil below: theta = theta_i" },
              ],
            },
            callout: {
              type: "tip",
              title: "A three-mark short in four lines",
              body: "Green-Ampt appears most often as a short question: state the assumptions (uniform soil, uniform initial water content, ponded surface, sharp front), write the equation, define the symbols. Practise reproducing exactly that - it is the fastest full-mark answer in Unit II.",
            },
            keyTerms: [
              { term: "Wetting front", definition: "The sharp boundary Green-Ampt assumes between saturated soil above and soil at initial water content below." },
              { term: "Suction head (psi_f)", definition: "Capillary tension at the wetting front that pulls water downward; typically tens to hundreds of mm of head." },
              { term: "Saturated hydraulic conductivity (K)", definition: "The steady infiltration rate a fully wetted soil transmits - Green-Ampt's asymptotic f." },
            ],
            examQuestions: [
              {
                q: "State the Green-Ampt infiltration model with its assumptions, define each parameter, and compute f for K = 3.6 mm/h, (theta_s - theta_i) = 0.35 and psi_f = 200 mm at F = 20 mm and F = 100 mm; explain the trend.",
                marks: 7,
                outline: [
                  "Assumptions: uniform soil, uniform theta_i, ponded surface, sharp piston front.",
                  "Write f = K (1 + (theta_s - theta_i) psi_f / F) and define symbols.",
                  "At F = 20: f = 3.6 (1 + 70/20) = 3.6 x 4.5 = 16.2 mm/h.",
                  "At F = 100: f = 3.6 (1 + 70/100) = 3.6 x 1.7 = 6.1 mm/h.",
                  "Explain: suction term fades as F grows, so f tends to K.",
                  "Contrast with Horton: measurable parameters versus fitted constants.",
                ],
              },
              {
                q: "State the assumptions of the Green-Ampt model.",
                marks: 3,
              },
              {
                q: "Show from the Green-Ampt equation that f approaches K for large cumulative infiltration.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Infiltration loss indices: the phi and W indices",
            body: [
              "Unit hydrograph work needs the effective rainfall - the storm's share that shows up as direct runoff - but a real hyetograph's losses vary hour by hour. The phi index collapses them into one number: the constant loss rate, in mm/h, for which the total excess rainfall equals the observed direct runoff depth of the same storm. Hours with rainfall below phi lose everything; hours above it contribute their excess. It is a lumped, basin-average bookkeeping device, not a physical law - and it works precisely because the hydrograph analysis only needs a consistent split.",
              "A worked storm shows the iteration. Hourly rainfalls are 5, 20, 25 and 12 mm (total 62 mm) and the separated direct runoff is 30 mm, so excess must be 30 mm. Try phi = 8 mm/h: excesses are 0 + 12 + 17 + 4 = 33 mm - too much. Try phi = 9: excesses are 0 + 11 + 16 + 3 = 30 mm - exact. So phi = 9 mm/h, and the first hour's entire 5 mm was lost. Excess falls as phi rises, so the iteration always converges; a bisection or trial table finds the answer in two or three steps.",
              "The W index refines the same idea by removing initial abstraction Ia - interception, depression storage and early wetting - before spreading the rest: W = (P - Q - Ia)/te, where te is the duration of excess-producing rainfall. Because initial losses are taken out of the accounting, W is less than or equal to phi. Both indices change from storm to storm and season to season on the same basin, which is their known weakness; their strength is a one-parameter bridge from the gross rain a gauge records to the effective rain a unit hydrograph demands.",
            ],
            bullets: [
              "Phi index: the uniform loss rate that makes total excess rainfall equal the direct runoff depth from the same storm.",
              "Solve by iteration: excess depth falls as phi rises; stop when excess equals the observed direct runoff.",
              "Worked: hourly rain 5, 20, 25, 12 mm with direct runoff 30 mm gives phi = 9 mm/h; hour one is fully lost.",
              "W index: W = (P - Q - Ia)/te removes initial abstraction Ia from the accounting, so W is less than or equal to phi.",
              "Both indices are lumped basin averages - storm- and season-dependent; used to build effective rainfall hyetographs for unit hydrograph work.",
            ],
            table: {
              caption: "Phi index iteration for the worked storm (direct runoff = 30 mm).",
              headers: ["Hour", "Gross rainfall (mm)", "Loss at phi = 9 (mm)", "Excess (mm)"],
              rows: [
                ["1", "5", "5", "0"],
                ["2", "20", "9", "11"],
                ["3", "25", "9", "16"],
                ["4", "12", "9", "3"],
                ["Total", "62", "32", "30"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "Bisection search for the phi index of a 4-hour storm.",
              code: `# Finding the phi index for a 4-hour storm
gross = [5.0, 20.0, 25.0, 12.0]      # mm per hour
direct_runoff = 30.0                  # mm, from hydrograph separation

def excess_total(phi):
    return sum(max(0.0, p - phi) for p in gross)

lo, hi = 0.0, max(gross)
for _ in range(50):                   # bisection on phi
    mid = (lo + hi) / 2
    if excess_total(mid) > direct_runoff:
        lo = mid                      # too much excess: raise phi
    else:
        hi = mid
phi = (lo + hi) / 2

print(f"phi index = {phi:.2f} mm/h")
for i, p in enumerate(gross, 1):
    print(f"hour {i}: rain {p:5.1f} mm, excess {max(0.0, p - phi):5.2f} mm")
print(f"total excess = {excess_total(phi):.1f} mm (target {direct_runoff:.0f})")`,
            },
            diagram: {
              kind: "flow",
              title: "Finding the phi index",
              caption: "The iteration loop that converts a gross hyetograph into an effective one.",
              steps: [
                { label: "Draw the gross rainfall hyetograph" },
                { label: "Guess a phi and clip: excess = (P - phi) per hour" },
                { label: "Sum excess and compare with direct runoff" },
                { label: "Raise phi if excess is too large", note: "iterate to converge" },
                { label: "Effective rainfall hyetograph for Unit III" },
              ],
            },
            callout: {
              type: "exam",
              title: "The table is the answer",
              body: "Phi index numericals are near-guaranteed. Lay out columns hour / rain / loss / excess, fill two candidate phis (8 then 9 in the classic version), and end with the check-sum line: 30 mm excess = direct runoff. The check line is what turns a calculation into a full-mark answer.",
            },
            keyTerms: [
              { term: "Phi index", definition: "The uniform loss rate (mm/h) for which total excess rainfall equals the direct runoff depth of the storm." },
              { term: "W index", definition: "Refined loss index W = (P - Q - Ia)/te, excluding initial abstraction from the accounting." },
              { term: "Effective rainfall", definition: "The part of gross rainfall that becomes direct runoff - the unit hydrograph's input." },
            ],
            examQuestions: [
              {
                q: "Define the phi index and determine it for a storm of hourly depths 5, 20, 25 and 12 mm that produced 30 mm of direct runoff; state how the W index differs from the phi index.",
                marks: 7,
                outline: [
                  "Define phi as the uniform loss rate matching excess to direct runoff.",
                  "Total rainfall 62 mm; target excess 30 mm.",
                  "Trial phi = 8: excess = 0 + 12 + 17 + 4 = 33 mm - too much.",
                  "Trial phi = 9: excess = 0 + 11 + 16 + 3 = 30 mm - exact.",
                  "Present the hour/rain/loss/excess table with totals.",
                  "W index: W = (P - Q - Ia)/te; W is less than or equal to phi since Ia is removed.",
                ],
              },
              {
                q: "Define effective rainfall. How does it differ from gross rainfall?",
                marks: 2,
              },
              {
                q: "Why is the W index always less than or equal to the phi index for the same storm?",
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
      title: "Runoff and Streamflow",
      summary:
        "Water into the channel: the components and measurement of runoff, peak-flow estimation by the rational method and the SCS curve number, the flow duration curve's regime portrait and the mass curve's reservoir sizing, and the flood hydrograph dissected by base flow separation into the unit hydrograph.",
      chapter: {
        number: "03",
        title: "Runoff and Streamflow",
        intro:
          "Unit III follows water into the channel: what runoff is made of and how current meters and rating curves measure it, how peak flows are estimated by the rational method and the SCS curve number, how a flow duration curve characterises a whole regime and a mass curve sizes a reservoir, and how a flood hydrograph is dissected into base flow and direct runoff to expose the unit hydrograph.",
        inOneBreath:
          "Runoff is surface flow, interflow and base flow, gauged by the velocity-area method with the 0.6-depth rule and converted to discharge by a rating curve; the rational method peaks small catchments as Qp = C i A/3.6 with i read from the IDF curve at duration tc; SCS-CN gives Q = (P - Ia)^2/(P - Ia + S) with S = 25400/CN - 254; a flow duration curve ranks daily flows to read the dependable Q95 while a mass curve's maximum deficit sizes storage; and the flood hydrograph separates by N = 0.83 A^0.2 days into base flow plus a direct runoff hydrograph whose division by excess depth yields the unit hydrograph.",
        sections: [
          {
            number: "3.1",
            title: "Runoff: components and streamflow measurement",
            body: [
              "Runoff is the portion of precipitation that appears in streams. It arrives as four components: channel precipitation falling directly on water, surface (overland) runoff from rainfall excess, interflow creeping laterally through the soil, and base flow released from groundwater. The first three make quick flow; base flow is the delayed memory of past rains. Generation follows two routes - infiltration-excess overland flow where intense rain beats dry soil (Hortonian, common in semi-arid and urban catchments) and saturation-excess flow where valley soils are already full and rain has nowhere to go (Dunne, the humid-monsoon route).",
              "Factors split into climatic and physiographic. Climate sets intensity, duration and areal distribution of storms plus antecedent moisture - a wet catchment responds almost twice as fast. Physiography sets area, shape (a fan-shaped basin concentrates tributaries and peaks fast; an elongated one spreads them), slope, soil and geology, land use and drainage density; urbanisation, sealing surfaces and piping drains, is the classic amplifier of small-catchment peaks. Indian basins running monsoon storms lean on all of these at once.",
              "Measurement is the velocity-area method. Stage is read from staff gauges or recorded by float and bubble gauges; velocity comes from cup or propeller current meters on verticals - the mean velocity is well approximated by the single reading at 0.6 depth (from surface) on shallow rivers, or the average of the 0.2 and 0.8 depth readings on deeper ones. Discharge is summed as velocity times sub-area across the section, and the stage-discharge rating curve converts a continuous stage record into a continuous flow record; extrapolation beyond measured floods needs logarithmic or conveyance methods and honest caveats.",
            ],
            bullets: [
              "Runoff = channel precipitation + surface runoff + interflow + base flow; the first three make quick flow, base flow the delayed part.",
              "Generation: infiltration-excess overland flow on intense storms over dry soil; saturation-excess flow where valley soils are already wet.",
              "Climatic drivers: intensity, duration, distribution and antecedent moisture; physiographic: area, shape, slope, soil, land use, drainage density.",
              "Mean velocity: one point at 0.6 depth, or the average of the 0.2 and 0.8 depth readings on deeper rivers.",
              "Discharge = sum of (mean velocity x sub-area) across verticals; the rating curve converts continuous stage into continuous flow.",
            ],
            table: {
              caption: "Runoff components and their hydrograph seats.",
              headers: ["Component", "Source", "Typical travel time", "Hydrograph position"],
              rows: [
                ["Channel precipitation", "rain on the water surface", "minutes", "early rise"],
                ["Surface runoff", "rainfall excess over land", "minutes to hours", "rising limb and peak"],
                ["Interflow", "lateral soil flow", "hours to days", "shoulder and early recession"],
                ["Base flow", "groundwater release", "weeks to months", "the whole recession"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Runoff components by arrival time",
              caption: "Fastest at the top - the order they pile into a hydrograph.",
              layers: [
                { label: "Surface runoff - minutes to hours", note: "drives the peak" },
                { label: "Interflow - hours to days", note: "through the soil profile" },
                { label: "Base flow - weeks to months", note: "groundwater release" },
                { label: "Deep groundwater - seasons", note: "the long memory of past wet years" },
              ],
            },
            callout: {
              type: "exam",
              title: "Map components to limbs",
              body: "Pair every runoff component with its position on the hydrograph - surface runoff to the rising limb and peak, interflow to the shoulder, base flow to the recession. Examiners look for that mapping, not just a list of names copied from a definition.",
            },
            keyTerms: [
              { term: "Runoff", definition: "The part of precipitation that reaches streams - channel precipitation, surface flow, interflow and base flow." },
              { term: "Base flow", definition: "The groundwater-fed portion of streamflow that sustains rivers between storms." },
              { term: "Rating curve", definition: "The stage-discharge relation at a gauging site that converts recorded stage to discharge." },
            ],
            examQuestions: [
              {
                q: "Describe the components of runoff and the factors affecting it, and explain the velocity-area method of streamflow measurement with the 0.6-depth rule and the stage-discharge rating curve.",
                marks: 7,
                outline: [
                  "List the four components; separate quick flow from base flow.",
                  "Climatic factors: intensity, duration, distribution, antecedent moisture.",
                  "Physiographic factors: area, shape, slope, soil, land use, drainage density.",
                  "Current meter and the 0.6-depth rule (or 0.2 and 0.8 average).",
                  "Mid-section discharge: sum of velocity x sub-area across verticals.",
                  "Rating curve converts stage to flow; note extrapolation caution.",
                ],
              },
              {
                q: "State the 0.6-depth rule for mean velocity in a river vertical.",
                marks: 2,
              },
              {
                q: "Distinguish infiltration-excess from saturation-excess overland flow.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "The rational method for peak discharge",
            body: [
              "For small catchments - a practical ceiling of about 50 km2 - the rational method converts a design storm into a peak flow: Qp = C i A / 3.6, with Qp in m3/s, the runoff coefficient C dimensionless, rainfall intensity i in mm/h and area A in km2. Its assumptions are worth quoting: rainfall uniform over the catchment and steady at intensity i, duration at least the time of concentration, C constant through the storm, and the catchment responding linearly with no storage - so the peak occurs when the whole area contributes at tc.",
              "The workflow feeds itself. Time of concentration comes from the flow path - Kirpich's formula, tc = 0.01947 L^0.77 S^(-0.385) minutes, from path length L in metres and slope S. Intensity is read from the intensity-duration-frequency curve of the site at duration tc and the chosen return period - never at the total storm duration. C comes from land cover: about 0.90 for asphalt, 0.60 for roofs and drives, 0.30 for sandy lawns, area-weighted when mixed. Worked urban catchment: composite C = 0.73, A = 0.9 km2, L = 1200 m, S = 0.02 give tc = 21 min; the IDF curve gives i = 77 mm/h at 25-year return; Qp = 0.73 x 77 x 0.9/3.6 = 14.1 m3/s.",
              "The method's honesty lies in knowing its limits: it gives a peak only - no hydrograph, no volume, no routing or storage - so it sizes storm drains, culverts and inlets, not reservoirs. Return period selection is a risk decision (the next unit's frequency tools formalise it), and C lumps every loss process into one number. For anything larger or shaped differently, move to unit hydrographs (Unit III continued) or SCS-CN with a dimensionless hydrograph.",
            ],
            bullets: [
              "Qp = C i A / 3.6 with i in mm/h and A in km2 gives the peak in m3/s - the 3.6 is a unit conversion, not a constant.",
              "Assumptions: uniform, steady rainfall lasting at least tc; constant C; linear response; negligible storage.",
              "Kirpich: tc = 0.01947 L^0.77 S^(-0.385) minutes from flow-path length L (m) and slope S.",
              "Read i from the IDF curve at duration = tc and the design return period - peak intensity coincides with full-area contribution.",
              "Worked urban catchment: composite C = 0.73, tc = 21 min, i = 77 mm/h, A = 0.9 km2, so Qp = 14.1 m3/s.",
            ],
            codeExample: {
              language: "python",
              caption: "Rational method with Kirpich time of concentration, IDF interpolation and a composite C.",
              code: `# Rational method: peak discharge for a small urban catchment
def kirpich_tc(length_m, slope):
    """Time of concentration in minutes (Kirpich, SI form)."""
    return 0.01947 * length_m ** 0.77 * slope ** (-0.385)

# Site IDF curve (25-year return period): duration (min) -> intensity (mm/h)
idf = {10: 105.0, 20: 78.0, 30: 62.0, 45: 48.0, 60: 39.0}

def interp_idf(minutes):
    keys = sorted(idf)
    for t0, t1 in zip(keys, keys[1:]):
        if t0 <= minutes <= t1:
            f = (minutes - t0) / (t1 - t0)
            return idf[t0] + f * (idf[t1] - idf[t0])
    return idf[keys[0]] if minutes < keys[0] else idf[keys[-1]]

subareas = [   # (area km2, runoff coefficient C)
    (0.50, 0.90),   # asphalt streets
    (0.30, 0.60),   # roofs and driveways
    (0.10, 0.30),   # lawns on sandy soil
]
A = sum(a for a, _ in subareas)
C = sum(c * a for a, c in subareas) / A      # composite coefficient

L, S = 1200.0, 0.02                          # flow path length (m), slope
tc = kirpich_tc(L, S)
i = interp_idf(tc)
Q = C * i * A / 3.6                          # m3/s

print(f"composite C = {C:.2f}, area = {A:.2f} km2")
print(f"tc = {tc:.0f} min, i = {i:.0f} mm/h")
print(f"peak discharge Qp = {Q:.1f} m3/s")`,
            },
            diagram: {
              kind: "flow",
              title: "The rational method workflow",
              caption: "From toposheet to drain diameter in five steps.",
              steps: [
                { label: "Delineate catchment and longest flow path" },
                { label: "Compute tc (Kirpich)" },
                { label: "Read IDF intensity at duration tc, design T" },
                { label: "Build composite C from land cover" },
                { label: "Qp = C i A / 3.6 and size the drain", note: "check downstream capacity" },
              ],
            },
            callout: {
              type: "exam",
              title: "The duration trap",
              body: "Always read the IDF curve at duration = time of concentration, not at the storm's total duration - the peak needs every part of the catchment contributing at once. And write the 3.6 with its units (mm/h, km2, m3/s) so the conversion is visibly deliberate.",
            },
            keyTerms: [
              { term: "Time of concentration (tc)", definition: "Travel time of water from the hydraulically most remote point of the catchment to the outlet." },
              { term: "Runoff coefficient (C)", definition: "The fraction of rainfall that appears as runoff - about 0.9 for asphalt to 0.3 for sandy lawns." },
              { term: "IDF curve", definition: "Intensity-duration-frequency relation giving design rainfall intensity for a duration and return period." },
            ],
            examQuestions: [
              {
                q: "Explain the rational method with its assumptions; for a 0.9 km2 catchment of asphalt (0.5 km2, C 0.90), roofs (0.3 km2, C 0.60) and lawns (0.1 km2, C 0.30) with tc = 21 min and i = 77 mm/h, compute the peak discharge.",
                marks: 7,
                outline: [
                  "Write Qp = C i A/3.6 with units for every symbol.",
                  "State assumptions: uniform steady rain of duration at least tc, constant C, no storage.",
                  "Composite C = (0.45 + 0.18 + 0.03)/0.9 = 0.73.",
                  "Substitute: Qp = 0.73 x 77 x 0.9/3.6.",
                  "Result: Qp = 14.1 m3/s.",
                  "State validity (A under about 50 km2) and one limitation.",
                ],
              },
              {
                q: "Write Kirpich's formula for time of concentration with units of each variable.",
                marks: 2,
              },
              {
                q: "State any three limitations of the rational method.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "The SCS curve number method",
            body: [
              "Where no gauge exists, the Soil Conservation Service curve number method turns a design storm into a runoff depth from three lookups. The relation is Q = (P - Ia)^2 / (P - Ia + S) for P greater than Ia, zero otherwise, with initial abstraction Ia = 0.2 S and potential maximum retention S = 25400/CN - 254 (both in mm). The curve number CN - between about 30 and 100 - rises with imperviousness, runoff-prone soils and wet antecedent conditions; CN = 100 means everything runs off.",
              "CN is assembled from land use, hydrologic soil group and antecedent moisture condition. Soil groups run A (deep sands and gravel, high infiltration) through B and C to D (heavy clays and high water tables, very slow). AMC classes I to III describe the preceding season's wetness and shift CN up or down. Worked: CN = 80 gives S = 25400/80 - 254 = 63.5 mm and Ia = 12.7 mm; a P = 100 mm storm then yields Q = 87.3^2/(87.3 + 63.5) = 50.5 mm. Raise CN to 90 and the same storm yields about 72.7 mm - the method's sensitivity to CN is its whole game.",
              "The method's reach is enormous: paired with the SCS dimensionless unit hydrograph it produces full design hydrographs (the TR-55 lineage), and Indian watershed programmes map CN over entire districts. Its weaknesses mirror its strengths - a single lumped number hides spatial pattern, the 0.2 S abstraction is a convention rather than a law, and AMC shifts of one class move answers materially. Treat CN as a hypothesis to be checked against any observed event, not a property of nature.",
            ],
            bullets: [
              "SCS-CN: Q = (P - Ia)^2 / (P - Ia + S) for P > Ia, zero otherwise, with Ia = 0.2 S.",
              "Potential retention S = 25400/CN - 254 mm ties the curve number to storage: CN 80 gives S = 63.5 mm.",
              "CN tables key on land use, hydrologic soil group (A sands to D clays) and antecedent moisture condition AMC I-III.",
              "Worked: CN 80 and P = 100 mm give Ia = 12.7 mm and Q = 50.5 mm; raising CN to 90 lifts Q to about 72.7 mm.",
              "Widely used for ungauged watersheds, usually paired with the SCS dimensionless unit hydrograph for full design hydrographs.",
            ],
            codeExample: {
              language: "python",
              caption: "SCS-CN runoff depths for a range of curve numbers and storm depths.",
              code: `# SCS curve number: runoff depth from storm rainfall
def scs_runoff(P, CN, Ia_ratio=0.2):
    """P in mm; returns direct runoff depth in mm."""
    S = 25400.0 / CN - 254.0        # potential retention (mm)
    Ia = Ia_ratio * S               # initial abstraction (mm)
    if P <= Ia:
        return 0.0
    return (P - Ia) ** 2 / (P - Ia + S)

for CN in (65, 75, 80, 90):
    row = [f"{scs_runoff(p, CN):5.1f}" for p in (50, 100, 150)]
    print(f"CN {CN}: Q (mm) for P = 50/100/150 mm -> {', '.join(row)}")

# Wet-season check: AMC III lifts CN 80 to about 91
print(f"AMC III (CN 91), P = 100 mm -> Q = {scs_runoff(100.0, 91.0):.1f} mm")`,
            },
            table: {
              caption: "Hydrologic soil groups behind the curve number.",
              headers: ["Soil group", "Infiltration", "Typical soils", "Effect on CN"],
              rows: [
                ["A", "high even when wet", "deep sand, gravel", "lowest CNs"],
                ["B", "moderate", "shallow loess, sandy loam", "low CNs"],
                ["C", "slow", "clay loam, shallow loam", "moderate CNs"],
                ["D", "very slow", "heavy clays, high water table", "highest CNs"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Assigning a curve number",
              caption: "CN is an assembly, not a guess.",
              start: "Assign a CN to a catchment",
              branches: [
                { label: "Combine land use, soil group and AMC from tables", outcome: "A documented CN any reviewer can reproduce", good: true },
                { label: "Use one blanket CN for a mixed basin", outcome: "One wrong number propagates through the whole design", good: false },
                { label: "Skip the wet-season AMC correction", outcome: "Monsoon storms are underestimated for AMC III conditions", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the pair together",
              body: "Write Q = (P - Ia)^2/(P - Ia + S) and S = 25400/CN - 254 as a pair - one without the other leaves the numerical half-finished. Then substitute stepwise: S, then Ia = 0.2 S, then Q.",
            },
            keyTerms: [
              { term: "Curve number (CN)", definition: "An index between 30 and 100 combining land use, soil group and antecedent moisture; 100 means total runoff." },
              { term: "Potential maximum retention (S)", definition: "S = 25400/CN - 254 mm; the theoretical maximum depth the catchment can hold back." },
              { term: "Antecedent moisture condition (AMC)", definition: "Classes I-III describing the catchment's wetness before the storm; shifts CN up or down." },
            ],
            examQuestions: [
              {
                q: "Explain the SCS curve number method: give the runoff equation and the S-CN relation, and compute the runoff depth for P = 100 mm on CN 80 and on CN 90, commenting on the sensitivity.",
                marks: 7,
                outline: [
                  "Write Q = (P - Ia)^2/(P - Ia + S) with Ia = 0.2 S.",
                  "Write S = 25400/CN - 254 mm.",
                  "CN 80: S = 63.5 mm, Ia = 12.7 mm, P - Ia = 87.3 mm.",
                  "Q = 87.3^2/(87.3 + 63.5) = 50.5 mm.",
                  "CN 90: S = 28.2 mm, Ia = 5.6 mm, Q = 72.7 mm.",
                  "Comment: one soil-class error moves Q by over 20 mm - hence AMC and soil mapping care.",
                ],
              },
              {
                q: "What are hydrologic soil groups A to D, and how do they affect the curve number?",
                marks: 3,
              },
              {
                q: "Why is the SCS-CN method so widely used for ungauged basins?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Flow duration and mass curves",
            body: [
              "Two curves summarise a river's economy. The flow duration curve (FDC) plots discharge against the percentage of time it is equalled or exceeded, built by ranking all daily flows of the record in descending order and plotting each against m/(n+1) x 100 - the exceedance probability of its rank. It reads like a supply contract: Q50 is the median, and the dependable flow Q95 (or Q90) is what the river guarantees 95% of the time - the number water-supply intakes and mini-hydro plants are sized on.",
              "The FDC's shape diagnoses the catchment. A steep curve means flashy behaviour - floods and dry spells, quick runoff over impermeable ground; a flat curve means storage in lakes, snowpack, groundwater or regulation smoothing the year. Regulated rivers change shape below dams (flatter), and a shifting FDC across decades exposes creeping abstractions or land-use change. Environmental flows borrow the same curve: a rule that a certain percentage of natural Q95 must stay in the channel.",
              "The mass curve (Rippl curve) sizes reservoirs. Cumulative inflow volume is plotted against time, and a demand line of slope equal to the required draft is superimposed; the required storage is the maximum cumulative deficit between demand and inflow. Worked: six months of inflow 1, 2, 3, 12, 8 and 4 Mm3 against a steady demand of 4 Mm3 per month run up a deficit of 6 Mm3 by month three - the reservoir that survives this year needs 6 Mm3 of storage, drawn fully at the drought's bottom. The sequent peak algorithm generalises the same logic over multi-year records.",
            ],
            bullets: [
              "FDC: rank daily flows descending and plot against exceedance probability m/(n+1) - a full portrait of the regime.",
              "Q95 is the dependable flow: water supply and hydropower size on it; Q50 is the median.",
              "Steep FDC = flashy catchment with quick runoff; flat FDC = strong base flow, lakes or regulation.",
              "Mass curve: cumulative inflow vs time with the demand line - required storage equals the maximum cumulative deficit.",
              "Worked: inflows 1, 2, 3, 12, 8, 4 Mm3 against 4 Mm3 monthly demand need 6 Mm3 of storage, fully drawn by month three.",
            ],
            table: {
              caption: "Mass-curve storage computation for the worked example (demand 4 Mm3/month).",
              headers: ["Month", "Inflow (Mm3)", "Cum. inflow", "Cum. demand", "Deficit"],
              rows: [
                ["1", "1", "1", "4", "3"],
                ["2", "2", "3", "8", "5"],
                ["3", "3", "6", "12", "6 (maximum)"],
                ["4", "12", "18", "16", "-2 (surplus)"],
                ["5", "8", "26", "20", "-6"],
                ["6", "4", "30", "24", "-6"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two curves, two jobs",
              caption: "The FDC answers 'how often'; the mass curve answers 'how much storage'.",
              left: {
                heading: "Flow duration curve",
                items: [
                  "Rank flows; plot Q vs % time equalled or exceeded",
                  "Read Q50, Q95 and the dependable flow for design",
                  "Shape reveals flashiness or regulation",
                  "Basis for firm power and yield studies",
                  "Baseline for environmental flow rules",
                ],
              },
              right: {
                heading: "Mass (Rippl) curve",
                items: [
                  "Cumulative volume plotted against time",
                  "Superimpose the demand line at draft slope",
                  "Maximum deficit = required storage",
                  "Tangents give full-and-empty timings",
                  "Sequent peak algorithm extends it to long records",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The two reads examiners love",
              body: "Practise two numerical formats until they are reflexes: dependable flow Q95 read off an FDC, and required storage as the maximum deficit on a mass curve. Both are short numericals that appear repeatedly and both take under five minutes when the table is set out properly.",
            },
            keyTerms: [
              { term: "Flow duration curve", definition: "A plot of discharge against the percentage of time it is equalled or exceeded, built from ranked daily flows." },
              { term: "Dependable flow (Q95)", definition: "The flow available 95% of the time - the design flow for water supply and hydropower." },
              { term: "Mass curve", definition: "A plot of cumulative inflow against time, used with a demand line to size reservoir storage." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and uses of a flow duration curve, and the mass curve method of determining reservoir storage, with a worked example for monthly inflows 1, 2, 3, 12, 8 and 4 Mm3 against a demand of 4 Mm3 per month.",
                marks: 7,
                outline: [
                  "FDC construction: rank descending, plotting position m/(n+1).",
                  "Read Q50 and dependable Q95; state uses - yield, hydropower, environmental flows.",
                  "Interpret shape: steep = flashy; flat = regulated or base-flow rich.",
                  "Mass curve procedure: cumulative inflow, demand line, maximum deficit.",
                  "Tabulate: deficit grows 3, 5, 6 and peaks at 6 Mm3 in month three.",
                  "Required storage = 6 Mm3; state the repetition-of-record assumption.",
                ],
              },
              {
                q: "Define dependable flow. Which exceedance percentage usually represents it?",
                marks: 2,
              },
              {
                q: "What does a steep flow duration curve indicate about a catchment's behaviour?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "The flood hydrograph, base flow separation and the unit hydrograph",
            body: [
              "The flood hydrograph plots discharge against time at a station through a storm. Its anatomy is fixed: a rising limb convex upward as the catchment wets up, a crest segment around the peak, and a recession limb that drains storage exponentially after rain stops; inflection points mark where supply hands over to pure depletion. Shape is a joint product of storm (depth, duration, intensity, areal distribution) and basin (shape, slope, soil, stream density, storage) - so the hydrograph is the catchment's signature.",
              "Analysis begins by splitting base flow from direct runoff. The straight-line method joins the start of the rise to a point on the recession N days after the peak, with N = 0.83 A^0.2 (A in km2) - for a 180 km2 catchment, N = 0.83 x 180^0.2 = 2.3 days. Everything above the line is the direct runoff hydrograph (DRH); everything below is base flow. The gross rainfall hyetograph is split the same way with the phi index (section 2.5) into an effective rainfall hyetograph (ERH), and the check is volume equality: the area under the DRH equals effective rainfall depth times catchment area.",
              "The unit hydrograph is the payoff: the DRH resulting from 1 cm (some texts 1 mm) of effective rainfall of a specified duration D, uniformly distributed over the catchment at uniform intensity. Its three assumptions - time invariance (the response does not change with season), linearity (proportionality and superposition: double the rain doubles the DRH, and storms add) and uniform spatial distribution - are exam staples. Derivation divides a storm's DRH ordinates by the excess depth in cm; application convolves the resulting UH with any design ERH. Unit IV builds the S-curve, IUH and synthetic versions on this base.",
            ],
            bullets: [
              "A flood hydrograph has a rising limb, crest segment and recession limb; inflection points mark storage turnarounds.",
              "Straight-line base flow separation: join the rise start to the recession point N days after the peak, N = 0.83 A^0.2 days (A in km2).",
              "For A = 180 km2, N = 0.83 x 180^0.2 = 2.3 days; the DRH volume must equal effective rainfall x area.",
              "Unit hydrograph: the DRH from 1 cm of effective rainfall of duration D, uniform over the catchment at uniform intensity.",
              "Assumptions: time invariance, linearity (proportionality plus superposition) and uniform spatial distribution of effective rainfall.",
            ],
            table: {
              caption: "Base flow separation methods compared.",
              headers: ["Method", "Procedure", "Best suited for"],
              rows: [
                ["Straight line", "join the start of rise to the recession N days after the peak", "quick exam and routine work"],
                ["Fixed base", "project the master recession back from the peak-time inflection", "studies needing consistency"],
                ["Master recession", "shift and match the basin's own depletion curve", "research-grade separation"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Deriving a unit hydrograph",
              caption: "One storm in, a reusable kernel out.",
              steps: [
                { label: "Separate base flow from the storm hydrograph" },
                { label: "DRH = total hydrograph - base flow" },
                { label: "Convert gross rain to effective rain (phi index)" },
                { label: "Divide DRH ordinates by excess depth in cm" },
                { label: "UH of duration D - verify volume = 1 cm x area", note: "Unit IV converts durations" },
              ],
            },
            callout: {
              type: "exam",
              title: "The assumptions are the question",
              body: "'State the assumptions of the unit hydrograph' is a standing short question. Write the three as named bullet lines - time invariance, linearity (proportionality and superposition), uniform distribution - then lead the definition with '1 cm of effective rainfall of duration D'.",
            },
            keyTerms: [
              { term: "Unit hydrograph", definition: "The direct runoff hydrograph from 1 cm of effective rainfall of a given duration, uniform over the catchment." },
              { term: "Base flow separation", definition: "Splitting a hydrograph into direct runoff and the groundwater-fed base flow, e.g. by the straight-line method." },
              { term: "Direct runoff hydrograph (DRH)", definition: "The storm hydrograph after base flow removal - the unit hydrograph's raw material." },
            ],
            examQuestions: [
              {
                q: "Define the unit hydrograph, state its assumptions, and outline its derivation from a single-storm hydrograph including straight-line base flow separation for a 180 km2 catchment.",
                marks: 7,
                outline: [
                  "Define: DRH from 1 cm effective rainfall of duration D, uniform over the basin.",
                  "Assumptions: time invariance; linearity (proportionality, superposition); uniform distribution.",
                  "Separate base flow: N = 0.83 x 180^0.2 = 2.3 days after the peak.",
                  "Obtain DRH and the ERH via the phi index.",
                  "Divide DRH ordinates by excess depth in cm.",
                  "Verify volume: UH area x 1 cm equals catchment area equivalent; then superposition applies to any storm.",
                ],
              },
              {
                q: "Write the expression for N in straight-line base flow separation and evaluate it for A = 180 km2.",
                marks: 2,
              },
              {
                q: "What is an effective rainfall hyetograph, and why must its volume match the DRH volume?",
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
      title: "Hydrograph Analysis",
      summary:
        "The toolbox that turns one gauged hydrograph into any design hydrograph: S-curve duration conversion, the instantaneous unit hydrograph and Nash's cascade, Snyder's synthetic relations for ungauged basins, and Muskingum and level-pool routing of floods down channels and through reservoirs.",
      chapter: {
        number: "04",
        title: "Hydrograph Analysis and Flood Routing",
        intro:
          "Unit IV is the design engine of hydrology: the S-curve converts a unit hydrograph between durations, the IUH strips duration away entirely and Nash's cascade gives it parameters, Snyder's relations synthesise a unit hydrograph where no gauge ever ran, and the Muskingum and level-pool (modified Puls) methods route the resulting flood down a channel and through a reservoir.",
        inOneBreath:
          "The S-curve superposes D-hour unit hydrographs to an equilibrium discharge of 2.78 A/D m3/s and converts durations as [S(t) - S(t - tR)] x D/tR; its zero-duration limit is the IUH, fitted by Nash's cascade from UH moments with n = mean^2/variance and k = variance/mean; Snyder synthesises ungauged basins with tp = Ct (L Lc)^0.3, tr = tp/5.5 and Qp = 2.78 Cp A/tp; Muskingum routes channels with S = K [x I + (1 - x) O] marching as O2 = C0 I2 + C1 I1 + C2 O1; and reservoirs route by level pool with I1 + I2 + (2S1/dt - O1) = 2S2/dt + O2 on the storage-indication curve.",
        sections: [
          {
            number: "4.1",
            title: "The S-curve and change of duration",
            body: [
              "The S-curve is the hydrograph produced by effective rainfall of intensity 1/D cm per hour lasting forever - equivalently, the D-hour unit hydrograph repeated back to back indefinitely. It is built by superposition: add a second D-hour UH lagged by D hours, a third lagged by 2D, and so on until the sum flattens. The flat top is the equilibrium discharge, and it is pure continuity: 1 cm spread over A km2 in every D hours delivers 10,000 x A m3 per 3600 x D seconds, that is 2.78 A/D m3/s - for A = 300 km2 and D = 6 h, exactly 139 m3/s.",
              "The S-curve's power is duration conversion. To get the UH of any duration tR, lag the S-curve by tR and subtract: the difference, multiplied by D/tR, is the new UH whose volume is 1 cm by construction. Halving the duration doubles the factor - the 3-hour UH from a 6-hour S-curve is [S(t) - S(t-3)] x 2. In practice you read S-curve ordinates at tR intervals, subtract in a table, scale, and check that the resulting hydrograph's depth is 1 cm before using it.",
              "Two more uses matter. First, the limit of tR toward zero is the instantaneous unit hydrograph of the next section - the S-curve is the bridge between UH families. Second, the technique audits itself: subtraction of two large, nearly equal S-curve tails oscillates where the original UH data are noisy, so a jagged result is a warning about the derivation rather than a design number. Quote the volume check in every answer; it is the cheapest mark on the page.",
            ],
            bullets: [
              "S-curve: the hydrograph from continuous effective rainfall at 1 cm per D hours - built by superposing D-hour UHs lagged by D.",
              "It rises to an equilibrium discharge of 2.78 A / D m3/s (A in km2, D in hours): A = 300, D = 6 gives 139 m3/s.",
              "Duration change: UH of duration tR = [S(t) - S(t - tR)] x D / tR - subtract the lagged S-curve, then rescale.",
              "Halving the duration doubles the subtraction factor: a 6-hour S-curve pair yields the 3-hour UH as difference x 2.",
              "As tR tends to zero the bracket collapses to the IUH - the S-curve is the bridge between UH families.",
            ],
            table: {
              caption: "S-curve quantities for a 300 km2 catchment, D = 6 h.",
              headers: ["Quantity", "Relation", "Value"],
              rows: [
                ["S-curve equilibrium discharge", "2.78 A / D", "139 m3/s"],
                ["Any-duration UH", "[S(t) - S(t - tR)] x D/tR", "volume always 1 cm"],
                ["Equilibrium timing", "after about one UH base length", "S-curve flat thereafter"],
                ["IUH limit", "tR -> 0", "the derivative of S"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building and using the S-curve",
              caption: "Superpose, flatten, lag, subtract, rescale.",
              steps: [
                { label: "Take the D-hour unit hydrograph" },
                { label: "Add copies lagged by D hours", note: "superposition" },
                { label: "S-curve flattens at 2.78 A / D" },
                { label: "Lag by tR and subtract" },
                { label: "Rescale by D / tR - the new-duration UH" },
              ],
            },
            callout: {
              type: "exam",
              title: "Derive the 2.78",
              body: "Do not just quote 2.78 A/D - derive it: 1 cm over A km2 is 10,000 x A m3, delivered every 3600 x D seconds, giving 10,000 A/(3600 D) = 2.78 A/D m3/s. The three-line derivation is a guaranteed mark in every S-curve question.",
            },
            keyTerms: [
              { term: "S-curve", definition: "The hydrograph from continuous effective rainfall at 1 cm per D hours, built by superposing D-hour unit hydrographs." },
              { term: "Equilibrium discharge", definition: "The S-curve's flat top, 2.78 A/D m3/s, set by continuity alone." },
              { term: "Change of duration", definition: "Converting a UH to duration tR by [S(t) - S(t - tR)] x D/tR." },
            ],
            examQuestions: [
              {
                q: "Define the S-curve, derive its equilibrium discharge, and show how a 3-hour unit hydrograph is obtained from a 6-hour S-curve for a 300 km2 catchment.",
                marks: 7,
                outline: [
                  "Define the S-curve as the response to endless 1 cm per D hours rainfall.",
                  "Construct by lagged superposition of the 6-hour UH.",
                  "Derive equilibrium: 10,000 A/(3600 D) = 2.78 A/D = 139 m3/s.",
                  "Lag the S-curve by 3 h and subtract.",
                  "Multiply the difference by D/tR = 2.",
                  "Check volume = 1 cm over the catchment; mention the IUH limit.",
                ],
              },
              {
                q: "What is the equilibrium discharge of an S-curve, and what sets it?",
                marks: 2,
              },
              {
                q: "Give two practical uses of the S-curve technique.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "The instantaneous unit hydrograph and Nash's model",
            body: [
              "Shrink the effective rainfall to an instantaneous pulse of unit depth and the catchment responds with its instantaneous unit hydrograph - the pure kernel of a linear basin, free of any duration choice. A D-hour UH is simply the D-hour average of the IUH, and conversely the IUH is the small-tR limit of S-curve differences. Because the catchment is treated as linear, any effective rainfall hyetograph is convolved with the IUH: scale the kernel by each pulse's depth, lag by each pulse's time, add - the DRH is the sum.",
              "Nash's cascade gives the IUH an analytically convenient shape: the catchment behaves as n identical linear reservoirs in series, each routing its inflow with a storage constant k hours. The result is u(t) = t^(n-1) e^(-t/k) / (k^n Gamma(n)), a gamma-shaped curve whose mean is nk and variance nk^2. Fitting from a gauged UH is therefore moment bookkeeping: n = mean^2/variance and k = variance/mean. Worked: a UH with mean 4 h and variance 5 h^2 gives n = 16/5 = 3.2 and k = 1.25 h, placing the peak at tp = (n-1)k = 2.75 h.",
              "Other routes to the IUH exist and appear in exams as names. Clark's model routes a time-area histogram through one linear reservoir; the geomorphological IUH (GIUH) sets Nash's n and k from stream-order statistics - Horton's ratios measured off a toposheet - extending IUH methods to ungauged basins. The standing limitation is linearity itself: real catchments respond faster when wetter and slower when dry, so extreme events stretch the assumption; for design storms within observed experience, the linear kernel holds well.",
            ],
            bullets: [
              "IUH: the unit hydrograph for zero-duration (instantaneous) excess rainfall - the pure catchment response function.",
              "A D-hour UH is the D-hour average of the IUH; conversely the IUH is the small-tR limit of S-curve differences.",
              "Nash cascade: n linear reservoirs in series give u(t) = t^(n-1) e^(-t/k) / (k^n Gamma(n)).",
              "Moment fitting: mean = nk and variance = nk^2, so n = mean^2/variance and k = variance/mean.",
              "Worked: a UH with mean 4 h and variance 5 h^2 gives n = 3.2, k = 1.25 h and a peak at (n-1)k = 2.75 h.",
            ],
            table: {
              caption: "Four routes to an IUH.",
              headers: ["Route", "Core idea", "Data needed"],
              rows: [
                ["S-curve limit", "let duration tR shrink to zero in [S(t) - S(t-tR)] D/tR", "one good D-hour UH"],
                ["Nash cascade", "n identical linear reservoirs, moments fitted", "UH mean and variance"],
                ["Clark model", "time-area histogram routed through a linear reservoir", "basin shape, K, time-area curve"],
                ["GIUH", "geomorphology sets the Nash parameters", "stream orders and lengths from maps"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Convolution with the IUH",
              caption: "The linear catchment as a kernel machine.",
              stages: [
                { label: "Effective rainfall pulses", note: "hyetograph blocks" },
                { label: "Scale the IUH by each pulse depth" },
                { label: "Lag by each pulse's time" },
                { label: "Superpose all contributions" },
                { label: "Direct runoff hydrograph", note: "the convolution output" },
              ],
            },
            callout: {
              type: "tip",
              title: "Moments first, always",
              body: "Nash numericals start from moments: compute the UH's mean and variance (about the time axis, using ordinates) before touching n and k. Students who jump straight into the gamma formula with no moments lose the method marks that the three-step chain - moments, parameters, peak time - is designed to award.",
            },
            keyTerms: [
              { term: "Instantaneous unit hydrograph (IUH)", definition: "The response to an instantaneous unit depth of effective rainfall - the catchment's linear kernel." },
              { term: "Nash cascade", definition: "A model of the catchment as n identical linear reservoirs in series, each with storage constant k." },
              { term: "Convolution", definition: "Scaling, lagging and summing the IUH against an effective rainfall hyetograph to build the DRH." },
            ],
            examQuestions: [
              {
                q: "Define the instantaneous unit hydrograph, explain Nash's cascade model, and fit n and k to a UH with mean 4 h and variance 5 h^2; find the time to peak.",
                marks: 7,
                outline: [
                  "Define the IUH as the zero-duration UH; note the D-hour UH is its average.",
                  "Present Nash: u(t) = t^(n-1) e^(-t/k)/(k^n Gamma(n)).",
                  "Moment relations: mean = nk, variance = nk^2.",
                  "n = mean^2/variance = 16/5 = 3.2.",
                  "k = variance/mean = 1.25 h.",
                  "Peak time tp = (n - 1)k = 2.75 h; state the linearity limitation.",
                ],
              },
              {
                q: "How is a D-hour unit hydrograph related to the IUH?",
                marks: 2,
              },
              {
                q: "Name two conceptual models used to derive an IUH and state one data requirement of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Snyder's synthetic unit hydrograph",
            body: [
              "Ungauged basins still need design hydrographs, and synthetic unit hydrographs build them from map-measurable morphology. Snyder's relations, calibrated on Appalachian basins in 1938, connect three basin measurements to the UH's headline features. The basin lag is tp = Ct (L x Lc)^0.3 hours, where L is the length from outlet to basin divide along the main stream and Lc the length to a point opposite the basin's centroid; Ct is a regional coefficient, about 1.4-1.7 in SI units (km), fixed from gauged neighbours.",
              "The standard duration follows at once: tr = tp/5.5, and the peak discharge of the standard-duration UH is Qp = 2.78 Cp A/tp, with Cp another regional coefficient (commonly 0.4-0.8 in Indian practice) and A the area in km2. Widths at 50% and 75% of the peak - W50 and W75 - then fix the hydrograph's shape, and a base of roughly 2.7 tp closes the sketch. When the design needs a different duration tR, the lag is revised: tpr = (21/22) tp + tR/4.",
              "Worked: A = 250 km2, L = 35 km, Lc = 18 km, with Ct = 1.5 and Cp = 0.6 adopted from regional gauges. Then L x Lc = 630, (630)^0.3 = 6.9, tp = 1.5 x 6.9 = 10.4 h; tr = 10.4/5.5 = 1.9 h; Qp = 2.78 x 0.6 x 250/10.4 = 40 m3/s; and for a 6-hour design storm the revised lag is tpr = (21/22)(10.4) + 6/4 = 11.4 h. Snyder's coefficients are regional by construction - never present Ct and Cp as universal constants, and always credit them to calibration.",
            ],
            bullets: [
              "Snyder: basin lag tp = Ct (L x Lc)^0.3 - L to the divide along the stream, Lc to the point opposite the centroid, Ct regional.",
              "Standard duration tr = tp/5.5; peak flow of the standard UH: Qp = 2.78 Cp A/tp.",
              "Worked: A = 250 km2, L = 35 km, Lc = 18 km, Ct = 1.5, Cp = 0.6 give tp = 10.4 h, tr = 1.9 h, Qp = 40 m3/s.",
              "A different design duration revises the lag: tpr = (21/22) tp + tR/4; for tR = 6 h, tpr = 11.4 h.",
              "W50 and W75 - the widths at half and three-quarter peak - complete the shape; Ct and Cp must be regionalised from gauged basins.",
            ],
            table: {
              caption: "Snyder worked example (A = 250 km2, L = 35 km, Lc = 18 km, Ct = 1.5, Cp = 0.6).",
              headers: ["Quantity", "Formula", "Value"],
              rows: [
                ["Regional coefficients", "from gauged neighbours", "Ct = 1.5, Cp = 0.6"],
                ["Basin lag tp", "Ct (L x Lc)^0.3", "10.4 h"],
                ["Standard duration tr", "tp / 5.5", "1.9 h"],
                ["Peak Qp", "2.78 Cp A / tp", "40 m3/s"],
                ["Lag of the 6-h UH", "(21/22) tp + tR/4", "11.4 h"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Snyder's synthetic UH step by step",
              caption: "From toposheet to sketchable design hydrograph.",
              steps: [
                { label: "Measure A, L, Lc from the toposheet" },
                { label: "tp = Ct (L x Lc)^0.3 with regional Ct" },
                { label: "Standard duration tr = tp/5.5" },
                { label: "Peak Qp = 2.78 Cp A/tp" },
                { label: "Shape with W50, W75; adjust lag if the duration differs", note: "tpr = (21/22)tp + tR/4" },
              ],
            },
            callout: {
              type: "exam",
              title: "Units beside every substitution",
              body: "Write the units of every Snyder variable - km, km2, hours, m3/s - beside each substitution. Unit slips (L in miles, A in hectares) are how these numericals die, and the examiner's marking scheme explicitly follows the substitution lines.",
            },
            keyTerms: [
              { term: "Synthetic unit hydrograph", definition: "A UH built from basin morphology and regional relations rather than from recorded storms." },
              { term: "Basin lag (tp)", definition: "Time from rainfall centroid to hydrograph peak; Snyder sets it as Ct (L x Lc)^0.3." },
              { term: "Regional coefficient", definition: "Ct and Cp, calibrated from gauged basins hydrometeorologically similar to the study catchment." },
            ],
            examQuestions: [
              {
                q: "Explain Snyder's method for deriving a synthetic unit hydrograph and apply it: A = 250 km2, L = 35 km, Lc = 18 km, Ct = 1.5, Cp = 0.6; find tp, tr, Qp and the lag of the 6-hour UH.",
                marks: 7,
                outline: [
                  "State why synthetic UHs exist (ungauged basins) and define L, Lc.",
                  "tp = 1.5 x (35 x 18)^0.3 = 1.5 x 6.9 = 10.4 h.",
                  "tr = tp/5.5 = 1.9 h.",
                  "Qp = 2.78 x 0.6 x 250/10.4 = 40 m3/s.",
                  "Revised lag for 6 h: tpr = (21/22)(10.4) + 1.5 = 11.4 h.",
                  "Mention W50/W75 for shape and regional calibration of Ct, Cp.",
                ],
              },
              {
                q: "Why are synthetic unit hydrographs needed? Name one alternative to Snyder's approach.",
                marks: 2,
              },
              {
                q: "What do L and Lc represent in Snyder's equations, and how are they measured?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Muskingum channel routing",
            body: [
              "Flood routing tracks a hydrograph from one river section to another, and hydrologic routing does it through storage. In a channel reach the water surface is a wedge: rising floods store more at the upstream end, falling floods store less. Muskingum writes total storage as S = K [x I + (1 - x) O], where K is the travel time through the reach and x the wedge coefficient - x = 0 makes storage depend only on outflow (a reservoir-like reach with a flat pool), while values up to about 0.3 mark natural rivers with a real wedge; the theoretical ceiling is 0.5.",
              "Combine that storage law with continuity and a small algebra yields the routing equation O2 = C0 I2 + C1 I1 + C2 O1, with C0 = (dt/K - 2x)/D, C1 = (dt/K + 2x)/D and C2 = (2(1-x) - dt/K)/D, all over the common D = 2(1-x) + dt/K; the three coefficients sum to 1, a built-in check. Worked: K = 2 h, x = 0.25, dt = 1 h gives dt/K = 0.5 and D = 2.0, so C0 = 0 and C1 = C2 = 0.5 - the outflow at each step is simply the average of the previous inflow and previous outflow. Routing an inflow that peaks at 120 m3/s produces an outflow peaking near 95 m3/s about two hours later.",
              "Calibration comes from a recorded flood: plot observed storage against the weighted flow [xI + (1-x)O] for trial values of x, and pick the x whose loop collapses to the straightest line; its slope is K. Numerics need care: choose dt between 2Kx and 2K(1-x) or C0 turns negative and the routing spuriously amplifies. The Muskingum-Cunge variant computes the parameters from channel hydraulics; the method remains the workhorse for river forecasting and dam-breach downstream studies.",
            ],
            bullets: [
              "Channel storage = prism (steady part) + wedge (rising or falling front): S = K [x I + (1 - x) O].",
              "K is the travel time through the reach; x weights the wedge: x = 0 for a reservoir-like reach, up to about 0.3 in natural rivers.",
              "Routing: O2 = C0 I2 + C1 I1 + C2 O1 with C0 + C1 + C2 = 1; for K = 2 h, x = 0.25, dt = 1 h: C0 = 0, C1 = C2 = 0.5.",
              "Worked routing: an inflow peak of 120 m3/s emerges near 95 m3/s about two hours later - attenuation plus lag.",
              "Calibrate x by the straightest storage-vs-weighted-flow loop, then read K as the slope; keep dt between 2Kx and 2K(1 - x).",
            ],
            codeExample: {
              language: "python",
              caption: "Muskingum routing of a flood wave through a reach (K = 2 h, x = 0.25, dt = 1 h).",
              code: `# Muskingum routing of a flood wave through a channel reach
def muskingum_coeffs(K, x, dt):
    d = 2.0 * (1.0 - x) + dt / K          # common denominator
    C0 = (dt / K - 2.0 * x) / d
    C1 = (dt / K + 2.0 * x) / d
    C2 = (2.0 * (1.0 - x) - dt / K) / d
    return C0, C1, C2

K, x, dt = 2.0, 0.25, 1.0                  # hours
C0, C1, C2 = muskingum_coeffs(K, x, dt)
print(f"C0={C0:.3f} C1={C1:.3f} C2={C2:.3f} sum={C0 + C1 + C2:.3f}")

inflow = [20, 30, 50, 80, 120, 100, 70, 45, 30, 20]   # m3/s, hourly
outflow = [inflow[0]]
for I1, I2 in zip(inflow, inflow[1:]):
    O2 = C0 * I2 + C1 * I1 + C2 * outflow[-1]
    outflow.append(O2)

for t, (i, o) in enumerate(zip(inflow, outflow)):
    print(f"t={t:2d} h   inflow {i:6.1f}   outflow {o:6.1f} m3/s")
print(f"peak attenuation: {max(inflow):.0f} -> {max(outflow):.1f} m3/s")`,
            },
            diagram: {
              kind: "pipeline",
              title: "The Muskingum workflow",
              caption: "Calibrate, discretise, march.",
              stages: [
                { label: "Calibrate K and x from a past flood" },
                { label: "Choose dt inside the stability band" },
                { label: "Compute C0, C1, C2" },
                { label: "March O2 = C0 I2 + C1 I1 + C2 O1" },
                { label: "Attenuated, lagged outflow", note: "feed it to the next reach" },
              ],
            },
            callout: {
              type: "exam",
              title: "Show the sum check",
              body: "Write the three coefficient formulas in full, then verify C0 + C1 + C2 = 1 on your numbers. It is one line of arithmetic that proves the routing table cannot silently leak mass - and examiners award it as a method mark.",
            },
            keyTerms: [
              { term: "Prism and wedge storage", definition: "Muskingum splits reach storage into the steady prism plus a wedge that swells on the rising limb and shrinks on the fall." },
              { term: "Wedge coefficient (x)", definition: "Weight on inflow in S = K[xI + (1-x)O]; zero for reservoir-like reaches, up to about 0.3 in natural channels." },
              { term: "Travel time (K)", definition: "Muskingum storage constant - the slope of the storage versus weighted-flow line." },
            ],
            examQuestions: [
              {
                q: "Derive the Muskingum routing equation from S = K [x I + (1 - x) O] and route one step for K = 2 h, x = 0.25, dt = 1 h with I1 = 20, I2 = 30 and O1 = 20 m3/s; state the physical meaning of x.",
                marks: 7,
                outline: [
                  "Present the storage equation and its prism-plus-wedge meaning.",
                  "Write continuity: (I1 + I2)/2 - (O1 + O2)/2 = (S2 - S1)/dt.",
                  "Substitute the storage law and regroup to the O2 form.",
                  "Compute coefficients: dt/K = 0.5, D = 2.0, so C0 = 0, C1 = C2 = 0.5.",
                  "O2 = 0 x 30 + 0.5 x 20 + 0.5 x 20 = 20 m3/s.",
                  "State x meaning and the dt stability band 2Kx < dt < 2K(1-x).",
                ],
              },
              {
                q: "What do K and x represent physically in the Muskingum method?",
                marks: 3,
              },
              {
                q: "State the rule for choosing the routing interval dt in Muskingum routing and why it matters.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Reservoir routing by the level-pool method",
            body: [
              "A reservoir routes differently from a channel: its surface stays (nearly) level, so storage is a unique function of elevation, and outflow - over a spillway or through gates - is a function of elevation only. Level-pool routing, usually called the modified Puls method, marches the continuity equation I - O = dS/dt through the flood. The algebra regroups it into the working equation I1 + I2 + (2S1/dt - O1) = 2S2/dt + O2: at every step the left side is known, and a prepared curve converts the right side into the new outflow.",
              "The curve is the storage-indication relation: for each elevation, compute storage S from topographic curves and outflow O from the spillway law (a weir: Q = C L H^1.5, with C about 1.7 for a broad crest), then tabulate 2S/dt + O against O. As an illustration, a 10 m crest-length spillway over a reservoir whose storage grows 0, 2, 5, 9 and 14 Mm3 across the first four metres gives outflows 0, 17, 48, 88 and 136 m3/s and indication values 0, 1128, 2826, 5088 and 7914 m3/s (at dt = 1 h). Entering the curve with each step's left side reads O2 and hence the new level - repeat until the flood passes.",
              "Two signatures of reservoir routing earn marks when stated. The outflow peak occurs where the outflow hydrograph crosses the inflow recession - not at the inflow peak - because until crossing, inflow still exceeds outflow and the pool keeps rising. And the routed peak is attenuated and lagged relative to the inflow, which is the entire point: flood-control reservoirs are sized by exactly this computation under a design flood, dam-safety studies run the probable maximum flood through the same loop, and urban detention basins are its small cousins.",
            ],
            bullets: [
              "Level-pool routing: outflow depends only on reservoir level; continuity I - O = dS/dt drives the march.",
              "Modified Puls working equation: I1 + I2 + (2S1/dt - O1) = 2S2/dt + O2 - everything on the left is known each step.",
              "Build the storage-indication curve 2S/dt + O vs O from elevation-storage and elevation-discharge (spillway) data.",
              "Outflow peaks where the outflow hydrograph crosses the inflow recession - not at the inflow peak.",
              "Uses: flood-cushion sizing, probable-maximum-flood checks for dam safety, and urban detention basin design.",
            ],
            table: {
              caption: "Storage-indication curve for an illustrative reservoir (dt = 1 h; spillway Q = 1.7 x 10 x H^1.5).",
              headers: ["Level (m)", "Storage (Mm3)", "Spillway head (m)", "Outflow (m3/s)", "2S/dt + O (m3/s)"],
              rows: [
                ["100.0", "0", "0", "0", "0"],
                ["101.0", "2", "1", "17", "1128"],
                ["102.0", "5", "2", "48", "2826"],
                ["103.0", "9", "3", "88", "5088"],
                ["104.0", "14", "4", "136", "7914"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "One step of level-pool routing",
              caption: "The loop repeats hour by hour to the end of the flood.",
              steps: [
                { label: "Start with level H1, outflow O1" },
                { label: "Compute 2S1/dt - O1 from storage" },
                { label: "Add the inflows I1 + I2" },
                { label: "Enter the storage-indication curve" },
                { label: "Read O2 and H2, repeat", note: "march to the end of the flood" },
              ],
            },
            callout: {
              type: "exam",
              title: "Derivation marks live in the regrouping",
              body: "Start from continuity, write the finite difference over dt, multiply through by 2/dt and regroup knowns and unknowns to reach I1 + I2 + (2S1/dt - O1) = 2S2/dt + O2. Examiners award the regrouping step specifically - it is the only algebra in the method.",
            },
            keyTerms: [
              { term: "Level-pool routing", definition: "Reservoir routing assuming a horizontal water surface, so both storage and outflow are functions of elevation alone." },
              { term: "Modified Puls equation", definition: "I1 + I2 + (2S1/dt - O1) = 2S2/dt + O2 - the regrouped continuity equation marched step by step." },
              { term: "Storage-indication curve", definition: "The prepared relation of 2S/dt + O against O that converts each step's known left side into the new outflow." },
            ],
            examQuestions: [
              {
                q: "Derive the modified Puls (level-pool) routing equation and outline the procedure of reservoir routing using the storage-indication curve, stating when the outflow peak occurs.",
                marks: 7,
                outline: [
                  "Start from continuity I - O = dS/dt.",
                  "Write the finite-difference form over dt and multiply through by 2/dt.",
                  "Regroup to I1 + I2 + (2S1/dt - O1) = 2S2/dt + O2.",
                  "Describe curve construction from elevation-storage and spillway discharge data.",
                  "March: left side known, enter curve, read O2 and H2, repeat.",
                  "Outflow peaks where the outflow hydrograph crosses the inflow recession.",
                ],
              },
              {
                q: "Why is the wedge coefficient x equal to zero in reservoir-type storage routing?",
                marks: 2,
              },
              {
                q: "When does the outflow from a routed reservoir attain its peak, and why?",
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
      title: "Flood and Drought",
      summary:
        "The extremes: return period and risk with Gumbel's extreme-value method, log-Pearson III frequency analysis, structural and non-structural flood control with case studies, flood forecasting systems, and drought classification with indices from percent-of-normal to SPI and PDSI.",
      chapter: {
        number: "05",
        title: "Flood and Drought Management",
        intro:
          "Unit V manages the extremes: flood magnitudes tied to return periods through Gumbel's extreme-value and the log-Pearson III distributions, the structural and non-structural measures that control floods with the failures that taught their limits, forecasting systems that buy lead time from telemetry to siren, and the classification, indices and Indian case studies of drought.",
        inOneBreath:
          "Return period T carries annual exceedance probability 1/T and n-year risk 1 - (1 - 1/T)^n; Gumbel estimates XT = mean + K sd with K = (yT - yn)/sn and yT = -ln[-ln(1 - 1/T)], while log-Pearson III fits a gamma to base-10 logs and reads XT = 10^(zbar + K sigma_z); flood control pairs structural works (cushion reservoirs, embankments, channel improvement, detention basins) with non-structural zoning, forecasting, insurance and proofing - always mindful of the levee effect; forecasting chains telemetry through rainfall-runoff and routing models to graded warnings through the CWC network; and drought is meteorological, hydrological, agricultural or socioeconomic, tracked by percent of normal, PDSI and SPI, with Maharashtra 1972, all-India 2002 and Chennai 2019 as case studies.",
        sections: [
          {
            number: "5.1",
            title: "Flood frequency analysis and Gumbel's method",
            body: [
              "Frequency analysis converts a record of annual maximum floods into design magnitudes. The return period T is the average recurrence interval: the probability that the T-year flood is exceeded in any year is p = 1/T, and the probability it strikes at least once in an n-year design life is the risk R = 1 - (1 - 1/T)^n. Intuition fails here - a 50-year flood has a 45% chance of occurring within 30 years. The annual maximum series (one peak per year) is standard for high return periods; partial-duration series keep every flood above a threshold.",
              "Gumbel's method fits the extreme-value type I distribution to annual maxima: XT = mean + K sd, with the frequency factor K = (yT - yn)/sn. Here yT = -ln[-ln(1 - 1/T)] is the reduced variate, and yn and sn are Gumbel's reduced mean and standard deviation for the record length n, read from his tables. Worked for a 20-year record with mean 1260 m3/s and standard deviation 292 m3/s (yn = 0.5236, sn = 1.0628): y50 = 3.90 gives K = 3.18 and X50 = 1260 + 928 = 2190 m3/s; y100 = 4.60 gives K = 3.83 and X100 = 2380 m3/s.",
              "Procedure and caution travel together. Plot the record on Gumbel probability paper; if the points bow away from a straight line, the fit - and every extrapolation built on it - is suspect. Short records make the tails almost arbitrary: the confidence band on a 100-year estimate from 20 years of data is wide enough to matter for a spillway decision. Indian practice at the Central Water Commission uses both Gumbel and log-Pearson III (next section) for major basins precisely so that two lenses bracket the truth.",
            ],
            bullets: [
              "Return period T: annual exceedance probability p = 1/T; a 50-year flood has a 2% chance each and every year.",
              "Risk over an n-year life: R = 1 - (1 - 1/T)^n - a 50-year event is 45% likely within 30 years.",
              "Gumbel (EV1): XT = mean + K sd with K = (yT - yn)/sn and yT = -ln[-ln(1 - 1/T)].",
              "Worked: n = 20, mean 1260 m3/s, sd 292 m3/s (yn = 0.5236, sn = 1.0628): X50 = 2190 and X100 = 2380 m3/s.",
              "Annual maximum series is standard for high return periods; check the fit on Gumbel paper before trusting extrapolations.",
            ],
            codeExample: {
              language: "python",
              caption: "Gumbel frequency analysis of a 20-year annual maximum series, plus life-risk.",
              code: `import math

# Gumbel (EV1) frequency analysis of annual maximum floods
peak_flows = [820, 1140, 1560, 990, 1730, 1210, 1380, 1020, 1650, 880,
              1310, 1490, 940, 1700, 1150, 1270, 1580, 1050, 1420, 910]
n = len(peak_flows)
mean = sum(peak_flows) / n
var = sum((x - mean) ** 2 for x in peak_flows) / (n - 1)
sd = math.sqrt(var)

yn, sn = 0.5236, 1.0628          # Gumbel table values for n = 20

def K(return_period):
    yT = -math.log(-math.log(1.0 - 1.0 / return_period))
    return (yT - yn) / sn

print(f"n = {n}, mean = {mean:.0f} m3/s, sd = {sd:.0f} m3/s")
for T in (25, 50, 100):
    print(f"T = {T:3d} yr: K = {K(T):.2f}, flood = {mean + K(T) * sd:.0f} m3/s")

# Risk that the 50-year flood occurs at least once in 30 years
T, life = 50, 30
risk = 1 - (1 - 1 / T) ** life
print(f"risk of a T={T} flood within {life} yr = {risk * 100:.0f}%")`,
            },
            diagram: {
              kind: "flow",
              title: "The Gumbel workflow",
              caption: "From record to design flood in five steps.",
              steps: [
                { label: "Assemble the annual maximum peaks" },
                { label: "Compute mean and standard deviation" },
                { label: "Reduced variate yT for each design T" },
                { label: "K = (yT - yn)/sn, then XT = mean + K sd" },
                { label: "Plot on Gumbel paper and check linearity" },
              ],
            },
            callout: {
              type: "exam",
              title: "Look up yn and sn",
              body: "yn and sn depend on record length - for n = 20 they are 0.5236 and 1.0628. Using the large-sample approximations (0.577 and 1.2825) on a 20-year record is the classic half-mark loss; quote the table values you used.",
            },
            keyTerms: [
              { term: "Return period (T)", definition: "The average recurrence interval of an event; its annual exceedance probability is 1/T." },
              { term: "Annual maximum series", definition: "The series of the single largest flood of each year - the standard input to frequency analysis." },
              { term: "Gumbel distribution", definition: "The extreme-value type I law fitted to annual maxima; XT = mean + K sd with K from reduced variates." },
            ],
            examQuestions: [
              {
                q: "Explain return period and risk, and estimate the 50- and 100-year floods by Gumbel's method for a 20-year record with mean 1260 m3/s and standard deviation 292 m3/s (yn = 0.5236, sn = 1.0628).",
                marks: 7,
                outline: [
                  "Define T with p = 1/T; write the risk formula R = 1 - (1 - 1/T)^n.",
                  "Write XT = mean + K sd with K = (yT - yn)/sn.",
                  "y50 = -ln[-ln(0.98)] = 3.90; K50 = (3.90 - 0.5236)/1.0628 = 3.18.",
                  "X50 = 1260 + 3.18 x 292 = 2190 m3/s.",
                  "y100 = 4.60; K100 = 3.83; X100 = 2380 m3/s.",
                  "Caution: 20-year record, wide confidence bands on both estimates.",
                ],
              },
              {
                q: "Define return period and write the formula for the risk of an event over an n-year design life.",
                marks: 3,
              },
              {
                q: "What is the probability that a 100-year flood occurs in any given year, and in a 30-year life?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Log-Pearson type III frequency analysis",
            body: [
              "Log-Pearson III changes coordinates before fitting: take base-10 logarithms of the annual peaks, then fit a Pearson type III - a three-parameter gamma - to the log values. The estimate reads XT = 10^(zbar + K sigma_z), where zbar and sigma_z are the mean and standard deviation of the logs, G their skewness, and K a frequency factor read from tables keyed on both G and T. The logs tame the wild right skew of flood populations, and the explicit skew parameter lets the distribution bend to the data instead of the theory.",
              "Worked: a station's log-peak statistics are zbar = 3.10, sigma_z = 0.25 and G = 0. For T = 100 with zero skew the tables give the normal quantile K = 2.326, so z100 = 3.10 + 2.326 x 0.25 = 3.68 and X100 = 10^3.68 = about 4800 m3/s. Skew moves the answer: a negative G of -0.4 cuts K100 to about 1.9 and the estimate to 10^3.575 = about 3760 m3/s - a 22% drop from the skew alone. When station records are short, generalized (regional) skew - a map value blended with the station value, the practice codified in US Bulletin 17 - steadies G.",
              "The method's standing is institutional: log-Pearson III has been the US federal standard for flood-frequency studies for decades, and Indian major-project studies use it alongside Gumbel. Its cleanest special case earns a short question: with G = 0 the Pearson III becomes the normal distribution, so the method collapses to the lognormal. Whatever the method, never stop at log space - the flood is the antilog, and quoting 3.68 m3/s as a design value is an instant zero.",
            ],
            bullets: [
              "LP3 fits a Pearson III (gamma) distribution to base-10 logs of annual peaks: XT = 10^(zbar + K sigma_z).",
              "K comes from tables keyed on return period and skew G; with G = 0 the method collapses to the lognormal distribution.",
              "Worked: zbar = 3.10, sigma_z = 0.25, G = 0: K100 = 2.326 gives z = 3.68 and X100 = about 4800 m3/s.",
              "Skew matters: G = -0.4 lowers K100 to about 1.9 and the estimate to about 3760 m3/s - a 22% swing on skew alone.",
              "Generalized (regional) skew blends station and map values - the standard practice of US Bulletin 17 and of major Indian studies.",
            ],
            table: {
              caption: "Frequency methods compared.",
              headers: ["Method", "Fitted to", "Skewness handling", "Standing"],
              rows: [
                ["Gumbel EV1", "raw annual peaks", "fixed by theory (about 1.14)", "Indian practice favourite; simple, conservative tails"],
                ["Log-Pearson III", "log10 of peaks", "explicit G from data and region", "US federal standard for flood studies"],
                ["Lognormal", "log10 of peaks", "zero (LP3 special case)", "quick screening"],
                ["Normal", "raw peaks", "none", "poor fit to flood tails"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a frequency method",
              caption: "The record decides the lens.",
              start: "Annual maximum series in hand",
              branches: [
                { label: "Long record, trustworthy log-skew: log-Pearson III", outcome: "Flexible skew with regional support - the standard estimate", good: true },
                { label: "Short record but Gumbel paper plots straight: Gumbel EV1", outcome: "Simple, well tabulated - the Indian practice workhorse", good: true },
                { label: "Fit a normal curve to the raw peaks", outcome: "Floods are right-skewed - the tail is badly under-read", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Never skip the antilog",
              body: "The answer is X = 10^(zbar + K sigma_z). Quoting the log-space value 3.68 as 'the 100-year flood' is the most brutal slip in Unit V - three marks of computation followed by a zero because the last line was never written.",
            },
            keyTerms: [
              { term: "Log-Pearson type III", definition: "Frequency method fitting a gamma distribution to base-10 logs of annual peaks: XT = 10^(zbar + K sigma_z)." },
              { term: "Skewness coefficient (G)", definition: "Third moment of the log-peak series; shifts K and hence the design estimate - negative skew lowers it." },
              { term: "Generalized skew", definition: "A regional map value of skew blended with the station value to steady short records." },
            ],
            examQuestions: [
              {
                q: "Outline the log-Pearson III method and estimate the 100-year flood for zbar = 3.10, sigma_z = 0.25 and G = 0 (K100 = 2.326); state how the answer changes for G = -0.4 (K100 about 1.9).",
                marks: 7,
                outline: [
                  "Transform peaks: z = log10 X; compute zbar, sigma_z, G.",
                  "Read K from LP3 tables for the given T and G.",
                  "z100 = 3.10 + 2.326 x 0.25 = 3.68.",
                  "Antilog: X100 = 10^3.68 = about 4800 m3/s.",
                  "With G = -0.4: z = 3.10 + 1.9 x 0.25 = 3.575, X = about 3760 m3/s.",
                  "Note G = 0 gives the lognormal special case; mention generalized skew.",
                ],
              },
              {
                q: "Why are flood peaks transformed to logarithms before frequency fitting?",
                marks: 3,
              },
              {
                q: "What does the log-Pearson III method reduce to when the skew G is zero?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Flood control: structural and non-structural measures",
            body: [
              "India counts about 40 million hectares as flood-prone - roughly one-eighth of its area - and the response toolbox splits in two. Structural measures physically manage the water: storage reservoirs holding a flood cushion above the conservation pool, embankments and levees confining flow between banks, channel improvement (widening, straightening, desilting) raising conveyance, detention basins temporarily parking urban runoff, and bypass or diversion channels escorting peaks past cities. Watershed management upstream - contour bunding, afforestation - delays and shrinks hillslope runoff.",
              "Non-structural measures manage the people and the damage rather than the water: flood plain zoning that reserves high-risk bands for parks and playing fields instead of hospitals, forecasting and warning systems that buy time, flood insurance that prices and shares residual risk, flood proofing (raised plinths, platforms, stilts, removable shutters), and preparedness - evacuation routes, shelters, drills. The two families trade strengths: structural works deliver protection up to a design level and then fail suddenly; non-structural measures cut exposure at every magnitude but demand enforcement and acceptance.",
              "Case studies teach the trade. The Kosi's eastern embankment breached in August 2008, inundating roughly 3,000 km2 of north Bihar and affecting about three million people - a structure maintained past its design life failing at its weakest link. The Damodar Valley Corporation (1948), India's first multipurpose project, showed the reservoir-plus-cushion route. The levee effect is the standing warning: perceived safety invites development behind embankments, so the inevitable exceedance - when it comes - inflicts record damage. Modern doctrine blends both families and even gives rivers room.",
            ],
            bullets: [
              "Structural: storage reservoirs with flood cushion, embankments and levees, channel improvement, detention basins and bypass diversions.",
              "Non-structural: flood plain zoning, forecasting and warning, flood insurance, flood proofing and emergency preparedness.",
              "Structural works protect up to the design flood - beyond it failures are sudden; non-structural measures cut exposure at every level.",
              "Levee effect: perceived safety invites development behind embankments, so the inevitable exceedance inflicts record damage.",
              "Case studies: the 2008 Kosi breach flooded about 3,000 km2 in Bihar; the 1948 Damodar Valley Corporation pioneered multipurpose flood cushions in India.",
            ],
            table: {
              caption: "Flood control measures with their watch-outs.",
              headers: ["Measure", "Family", "Action", "Watch-out"],
              rows: [
                ["Flood-cushion reservoir", "structural", "stores the peak, releases it slowly", "submergence, cost, sedimentation"],
                ["Embankment / levee", "structural", "confines flow between banks", "breach risk and the levee effect"],
                ["Channel improvement", "structural", "raises conveyance, drains faster", "faster waves punish downstream reaches"],
                ["Detention basin", "structural", "temporarily holds urban runoff", "siltation eats the volume"],
                ["Flood plain zoning", "non-structural", "keeps high-damage uses off hazard bands", "enforcement and political resistance"],
                ["Forecasting + insurance", "non-structural", "warns, then shares residual risk", "no physical protection at all"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Protecting a flood-prone town",
              caption: "The choice is not structural OR non-structural - it is the mix.",
              start: "A flood-prone town demands protection",
              branches: [
                { label: "Balanced mix: cushioned reservoir, zoned flood plain, working warnings", outcome: "Risk falls at every flood magnitude", good: true },
                { label: "Levees raised after each flood as the only tool", outcome: "The levee effect compounds damage when the design flood is exceeded", good: false },
                { label: "Flood proofing and insurance while land use is reformed", outcome: "Cheap, immediate cuts in exposure", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Classification answers are table answers",
              body: "'Classify flood control measures' wants both families, one example each, and one drawback each - a two-column table with a drawback column is the fastest full-mark layout. Close with the levee effect and one case study for the distinguishing marks.",
            },
            keyTerms: [
              { term: "Flood plain zoning", definition: "Regulating land use so that damage-prone activities stay off the highest-risk bands of the flood plain." },
              { term: "Levee effect", definition: "The growth of exposure behind embankments as perceived safety invites development, magnifying damage when the design flood is exceeded." },
              { term: "Flood cushion", definition: "Empty storage reserved in a reservoir above the normal pool to absorb incoming flood peaks." },
            ],
            examQuestions: [
              {
                q: "Classify flood control measures into structural and non-structural, explaining each with one example and one limitation, and discuss the levee effect with reference to the 2008 Kosi breach.",
                marks: 7,
                outline: [
                  "Structural list with the function of each (cushion, confinement, conveyance, detention, diversion).",
                  "Non-structural list (zoning, forecasting, insurance, proofing, preparedness).",
                  "State the design-level trade-off: sudden failure beyond the design flood.",
                  "Define the levee effect and its damage amplification.",
                  "Kosi 2008: embankment breach, about 3,000 km2 inundated, about three million affected.",
                  "Cite DVC 1948 as the multipurpose cushion example; conclude with the mixed strategy.",
                ],
              },
              {
                q: "Define flood plain zoning and name one practical obstacle to it.",
                marks: 2,
              },
              {
                q: "What is a flood cushion, and how does a reservoir use it during a design flood?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Flood forecasting and warning",
            body: [
              "A flood forecast is a prediction of stage, discharge and arrival time at a vulnerable point, made early enough to act on. The system is a chain: hydrometeorological inputs (telemetered rain and river gauges, weather radar, satellite rainfall estimates), transmission to a forecasting centre, a model run, forecaster scrutiny, and a warning that reaches communities who know what to do. Every link can fail, and the chain's value equals its weakest link - a perfect forecast nobody hears is worth nothing.",
              "Techniques scale from correlation to full models. Upstream-downstream stage correlation pairs a gauged upstream level with the downstream stage one travel time later - simple, robust, and the basis of most river-stage forecasts. Rainfall-runoff models, often unit-hydrograph based, convert forecast or observed rain into a basin hydrograph for 12-48 hour lead times; routing models (Muskingum in its forecasting dress) translate a gauged wave down a reach; reservoir inflow models drive pre-release decisions to protect the flood cushion. India's Central Water Commission operates more than 300 flood forecasting stations on the major rivers, and modern runs add ensemble rainfall and satellite nowcasting.",
              "Warnings are graded: warning, danger and high-flood levels at each station trigger escalating district responses - from preparatory alerts to evacuation and rescue. The dissemination chain runs from the CWC and state agencies through district administration to villages by siren, SMS and broadcast media. The payoff is concrete: a 48-hour inflow forecast lets a dam pre-release and keep its cushion empty; a 24-hour river warning empties a flood plain of people and livestock. Forecast verification - scoring each season's forecasts against what happened - is what turns the system from a ritual into a service.",
            ],
            bullets: [
              "A flood forecast = predicted stage or discharge, at a defined point, with enough lead time to act.",
              "Inputs: telemetered rain and river gauges, radar and satellite; the chain runs data to model to warning to response.",
              "Techniques: upstream-downstream stage correlation, unit-hydrograph rainfall-runoff models, Muskingum-type routing and reservoir inflow models.",
              "India's Central Water Commission runs more than 300 flood forecasting stations on the major rivers.",
              "Warning levels - warning, danger and high flood - trigger graded district responses from preparatory evacuation to rescue.",
            ],
            table: {
              caption: "Forecast types and their lead times.",
              headers: ["Forecast type", "Basis", "Typical lead time", "Use"],
              rows: [
                ["Stage correlation", "upstream gauge vs downstream stage with travel time", "6-24 h", "riverside towns"],
                ["Rainfall-runoff (UH)", "calibrated unit hydrograph on forecast rain", "12-48 h", "basin-wide alerts"],
                ["Routing-based", "Muskingum or hydrodynamic wave translation", "hours to 2 days", "downstream reaches"],
                ["Reservoir inflow", "rain-runoff plus routing to the dam", "24-72 h", "pre-releases and cushion management"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "End-to-end flood forecasting",
              caption: "Six stages from sensor to evacuation - the response closes the loop.",
              stages: [
                { label: "Telemetry: rain and stage sensors" },
                { label: "Quality control and assimilation" },
                { label: "Model run: rainfall-runoff + routing" },
                { label: "Forecaster scrutiny, warning levels" },
                { label: "Dissemination: CWC, district, community" },
                { label: "Response: pre-release, evacuation" },
              ],
            },
            callout: {
              type: "tip",
              title: "Close the loop",
              body: "Forecasting answers must end at response: data, model, warning, action. A 48-hour inflow forecast that triggers a pre-release, or a 24-hour stage warning that empties a flood plain - one concrete example of the chain completing itself is worth a paragraph of generic description.",
            },
            keyTerms: [
              { term: "Lead time", definition: "The interval between issue of a forecast and the forecast event's arrival - the window for action." },
              { term: "Flood warning", definition: "The graded public notice (warning, danger, high flood) issued when forecast stages cross defined levels." },
              { term: "Inflow forecast", definition: "Prediction of reservoir inflow used to schedule pre-releases and preserve the flood cushion." },
            ],
            examQuestions: [
              {
                q: "Explain the elements of a flood forecasting system, the techniques used, and its role in flood management in India.",
                marks: 7,
                outline: [
                  "Define a forecast: stage/discharge/time at a point with usable lead time.",
                  "Elements: data network, transmission, modelling, warning, response.",
                  "Techniques: stage correlation, UH-based rainfall-runoff, routing, reservoir inflow models.",
                  "India: CWC network of more than 300 stations on major rivers.",
                  "Graded warning levels and the dissemination chain.",
                  "One worked benefit: 48-h inflow forecast enables pre-release; note verification.",
                ],
              },
              {
                q: "Define lead time in flood forecasting.",
                marks: 2,
              },
              {
                q: "Name any three techniques used in flood forecasting with one line on how each works.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Drought: classification, indices and case studies",
            body: [
              "Drought is a creeping deficit, and the classification follows the ledger it empties. Meteorological drought is rainfall deficit - a common yardstick calls a season with rainfall below 75% of the long-period normal a drought, and below 50% acute. Hydrological drought is the lagged shortfall in streams, reservoirs and groundwater. Agricultural drought is soil-moisture stress during critical crop stages - a matter of timing as much as total. Socioeconomic drought arrives when demand for water and its goods outstrips supply. In India, where roughly two-thirds of the cropped area is rain-fed, all four arrive together in a bad monsoon year.",
              "Indices quantify the deficit. Percent-of-normal rainfall is the simplest. The aridity index writes the moisture gap as (P - PET)/PET. The Palmer Drought Severity Index (PDSI) runs a soil water balance and grades from about -4 (extreme drought) to +4 (extreme wet) - physically grounded but slow. The Standardised Precipitation Index (SPI) fits a gamma distribution to rainfall at 1, 3, 6 and 12-month scales and transforms it to a standard normal scale: values below -2 are extremely dry, and because it is dimensionless it compares across regions, seasons and durations - its chief advantage. Satellite NDVI tracks vegetation greenness as a live agricultural stress signal.",
              "India's case studies anchor the theory. The 1972 Maharashtra drought was famine-scale and reshaped relief and employment policy. In 2002, July rainfall across the country fell about 49% below normal - a single failed monsoon month that cut foodgrain output sharply and exposed the agriculture sector's July dependence. Chennai's 2019 'Day Zero' saw its four reservoirs nearly empty, with water ferried by train - hydrological drought arriving in a metropolitan economy. Management now runs on monitoring, drought contingency cropping, water budgeting, tank and aquifer recharge, and insurance; a changing climate raises the frequency of each case's return.",
            ],
            bullets: [
              "Four types: meteorological, hydrological, agricultural and socioeconomic drought - each with its own indicator and lag.",
              "Meteorological yardstick: seasonal rainfall below 75% of the long-period normal flags drought; below 50% is acute.",
              "PDSI: a water-balance index from about -4 (extreme drought) to +4; slow to build and slow to release.",
              "SPI: gamma-fitted rainfall standardised onto a mean-zero scale at 1, 3, 6 and 12 months - comparable across regions and seasons.",
              "Cases: Maharashtra 1972 famine-scale drought; the 2002 all-India July rainfall deficit of about 49%; Chennai's 2019 Day Zero.",
            ],
            table: {
              caption: "Drought indices compared.",
              headers: ["Index", "What it tracks", "Scale", "Strength"],
              rows: [
                ["Percent of normal", "seasonal rainfall vs normal", "one percentage", "simplest to compute and communicate"],
                ["Aridity index", "(P - PET)/PET moisture gap", "monthly", "links water to energy demand"],
                ["PDSI", "soil-moisture water balance", "-4 to +4", "physically grounded"],
                ["SPI", "standardised rainfall", "typically -3 to +3 at multi-scales", "comparable everywhere, any duration"],
                ["NDVI", "vegetation greenness from satellites", "images", "live crop-stress signal"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "From rainfall deficit to socioeconomic drought",
              caption: "Each layer feeds the one above it; the base is where every drought starts.",
              tiers: [
                { label: "Socioeconomic: demand outstrips supply" },
                { label: "Hydrological: streams, tanks and wells decline" },
                { label: "Agricultural: soil moisture fails the crop" },
                { label: "Meteorological: rainfall below normal", note: "the base of every drought" },
              ],
            },
            callout: {
              type: "exam",
              title: "Types AND indices",
              body: "Drought questions are two questions in one: classify the four types, then explain any two indices with their scales (PDSI -4 to +4; SPI standardised and multi-scale). Both halves carry separate marks - answering only the classification caps you at half.",
            },
            keyTerms: [
              { term: "Meteorological drought", definition: "Rainfall deficiency against the long-period normal - below 75% of normal is a common criterion." },
              { term: "SPI", definition: "Standardised Precipitation Index: gamma-fitted rainfall transformed to a standard scale at 1-12 month windows." },
              { term: "PDSI", definition: "Palmer Drought Severity Index: a soil water-balance index graded from about -4 (extreme drought) to +4." },
            ],
            examQuestions: [
              {
                q: "Classify droughts and explain any two drought indices (PDSI and SPI) with their scales; illustrate with one Indian case study.",
                marks: 7,
                outline: [
                  "Define the four types: meteorological, hydrological, agricultural, socioeconomic.",
                  "PDSI: soil water balance, scale -4 to +4, slow-moving.",
                  "SPI: gamma fit standardised at 1, 3, 6, 12 months; below -2 extreme; comparable across regions.",
                  "Case: 2002 all-India July deficit about 49%, or Chennai 2019 Day Zero.",
                  "Add one management line: monitoring, contingency cropping, recharge, insurance.",
                  "Close with the climate-change intensification remark.",
                ],
              },
              {
                q: "What is the chief advantage of the SPI over percent-of-normal rainfall?",
                marks: 3,
              },
              {
                q: "Define agricultural drought.",
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
        "RGPV CE-802(A) papers lean hard on numericals: the unit hydrograph family, frequency analysis and routing together usually carry half the paper, with losses and runoff estimation anchoring the rest. Allocate revision in that ratio and keep one full worked example per formula family.",
      ],
      weightedTopics: [
        { topic: "Unit hydrograph: derivation, assumptions, applications", weight: "10-12 marks", note: "The most reliable long question on the paper - practise one full derivation from a storm hydrograph." },
        { topic: "Flood frequency: Gumbel and log-Pearson III", weight: "8-10 marks", note: "Table-based numericals plus the risk formula; the antilog step is where marks die." },
        { topic: "Muskingum and reservoir routing", weight: "8-10 marks", note: "One coefficient derivation and one routing table between them appear almost every year." },
        { topic: "Evaporation: factors, pans, Penman and Blaney-Criddle", weight: "6-8 marks", note: "State Dalton's law and both equations with symbols; a pan numerical is common." },
        { topic: "Infiltration: Horton and Green-Ampt with phi/W indices", weight: "6-8 marks", note: "Rate-plus-cumulative numericals; the phi iteration table is near-guaranteed." },
        { topic: "Areal precipitation and the double mass curve", weight: "6-8 marks", note: "One Thiessen or isohyetal computation plus the consistency-test explanation." },
        { topic: "Runoff estimation: rational method and SCS-CN", weight: "6-8 marks", note: "Both formulas with units; worked numbers for a small catchment." },
        { topic: "Flood control, forecasting and drought indices", weight: "6-8 marks", note: "Classification questions with case studies; keep Kosi 2008 and Chennai 2019 ready." },
        { topic: "Hydrograph components and base flow separation", weight: "5-7 marks", note: "Label the sketch and quote N = 0.83 A^0.2." },
        { topic: "S-curve, IUH (Nash) and Snyder's synthetic UH", weight: "5-7 marks", note: "Small numericals: equilibrium discharge, moment fitting, lag computation." },
      ],
    },
    {
      id: "six-weeks",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week at two hours a day, this plan touches every section twice - once for understanding, once for revision - and reserves the final week for full papers under timing. Keep a running formula sheet from day one; it becomes your last-day file.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - cycle, budget, gauges, averaging", tasks: ["Write the water budget equation and work one full Mm3 conversion set", "Redraw the hydrologic cycle and all four rain gauge sketches from memory", "Solve one Thiessen numerical and one double-mass correction"] },
        { week: "Week 2", focus: "Unit II - evaporation and infiltration", tasks: ["Dalton's law, factor list, pan coefficients table", "Penman and Blaney-Criddle equations with every symbol defined", "Work Horton rate and cumulative numericals; state Green-Ampt and solve one phi index storm"] },
        { week: "Week 3", focus: "Unit III - runoff estimation", tasks: ["Rational method with Kirpich tc and IDF reading", "SCS-CN: two worked depths and the AMC adjustment", "FDC and mass curve: one dependable-flow read and one storage deficit"] },
        { week: "Week 4", focus: "Units III-IV - the unit hydrograph family", tasks: ["Base flow separation and one full UH derivation", "S-curve construction and one duration change", "IUH: fit Nash n and k from moments"] },
        { week: "Week 5", focus: "Unit IV - routing", tasks: ["Snyder worked example with the W50/W75 sketch", "Muskingum coefficients and one full routing table", "Modified Puls derivation and the storage-indication curve"] },
        { week: "Week 6", focus: "Unit V + full papers", tasks: ["Gumbel and LP3 worked estimates plus the risk formula", "Flood control classification and drought indices revision", "Two full mock papers under 3-hour timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Recite the three anchor equations aloud: P = R + E + G + dS, Q = (P - Ia)^2/(P - Ia + S) and Qp = C i A/3.6 - they open most papers.",
        "Redraw from memory: the hydrologic cycle, the flood hydrograph with base flow separation, and the Muskingum storage loop.",
        "Re-work the five signature numbers: Thiessen 47.2 mm, phi = 9 mm/h, SCS Q = 50.5 mm, Muskingum peak 120 to 95 m3/s, Gumbel X50 = 2190 m3/s.",
        "Write once each: the UH assumptions, S-curve equilibrium 2.78 A/D, and the Nash moment formulas n = mean^2/variance, k = variance/mean.",
        "Skim the case studies: Kosi 2008 breach, DVC 1948, Maharashtra 1972, all-India 2002, Chennai 2019.",
        "Stop new material by evening - an early night buys more marks than a skimmed final unit; recall beats exposure on exam day.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      examTips: [
        "First five minutes: mark the numericals you can finish cold - worked numbers score faster than essays, and every formula family has a template.",
        "Every 7-mark answer runs the same skeleton: definition, formula with symbols, worked substitution, one labelled sketch, one limitation - in that order.",
        "Carry the units through: m3/s, mm/h, km2 and hours beside every substitution; the 3.6 in the rational method is a unit statement, not decoration.",
        "Quote the standard values where they exist: pan coefficient 0.70, N = 0.83 A^0.2, equilibrium 2.78 A/D - examiners reward quoted numbers over vague prose.",
        "Time-box: shorts in 4-6 minutes, 7-mark questions in 14-18, and hold 10 minutes at the end to verify volumes and antilogs - the two classic slip points.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes that cost easy marks",
      bullets: [
        "Forgetting the pan coefficient and reporting pan evaporation as lake evaporation - Class A pans over-read by about 40%.",
        "Reading the IDF curve at storm duration instead of the time of concentration in rational-method numericals.",
        "Quoting Horton's f(t) without its cumulative integral when the question asks for infiltration depth.",
        "Stopping at log space in log-Pearson III - the flood is 10^(zbar + K sigma_z), never the log value 3.68 itself.",
        "Treating return periods as certainties: a 100-year flood has a 1% annual chance and about a 26% chance within any 30-year life.",
        "Presenting embankments as a complete flood solution without the levee effect and breach risk - classification answers demand drawbacks.",
      ],
    },
  ],
};
