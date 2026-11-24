/**
 * Academics - RGPV Mechanical Engineering 3rd-semester lab: ME-306 Thermal
 * Engineering Lab (DLC-3).
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me306: AcademicSubject = {
  id: "me-306",
  code: "ME-306",
  title: "DLC-3 Thermal Engg Lab",
  semester: "III Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete hands-on guide to the RGPV third-semester thermal engineering laboratory: safety and instrumentation, IC engine performance tests, thermodynamics and fluids experiments, steam and refrigeration rigs, and heat transfer apparatus with a mini project.",
  description:
    "Five units walk the student through the workshop in lab-coat order. Unit I sets the safety culture, the report format and the calibration and uncertainty discipline that every later experiment depends on. Unit II runs the IC engine experiments - Morse test, valve and port timing, performance test, heat balance. Unit III handles thermodynamics and fluids: Boyle's law, bomb calorimeter, flash and fire points, Orsat and viscometer. Unit IV covers steam and refrigeration - throttling and separating calorimeters, the vapour compression test rig, COP and heat transfer. Unit V closes with heat transfer experiments - thermal conductivity, convection, heat exchangers, Stefan-Boltzmann - and a mini project that ties the term together.",
  accentColor: "#94a3b8",
  emoji: "TL",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Lab Safety and Instrumentation Overview",
      summary:
        "The substrate of every safe experiment: laboratory safety protocols and PPE, the standard lab report format, calibration of pressure and temperature instruments, and the uncertainty analysis that decides whether a result is worth reporting.",
      chapter: {
        number: "01",
        title: "Lab Safety and Instrumentation Overview",
        intro:
          "Unit I opens the lab with the discipline every later unit borrows: hazard identification and PPE selection, the eleven-part lab report, the calibration of pressure gauges and thermometers against traceable standards, and the root-sum-square propagation of uncertainties through computed results.",
        inOneBreath:
          "A thermal lab houses pressurised steam, rotating engines and fuels; safety follows the hierarchy elimination, substitution, engineering, administrative, PPE; the report has eleven parts with observations in pen; calibration compares an instrument to a traceable standard at five rising and five falling points; uncertainty propagates by root-sum-square from inputs to result, separating systematic from random errors.",
        sections: [
          {
            number: "1.1",
            title: "Lab safety protocols and workshop hazards",
            body: [
              "A thermal engineering laboratory houses pressurised boilers, rotating IC engines, electric dynamometers, hot steam lines and fuels such as diesel and petrol, each carrying a specific hazard. Safety protocols are the written rules that translate these hazards into safe routines: keep the workshop floor dry, never operate an engine without its guards in place, route high-pressure steam through properly secured flexible hoses, and isolate electrical supplies before opening a panel. Every experiment starts with a pre-start check of the rig, the surrounding area, the position of emergency stops and the location of the nearest fire extinguisher and first-aid box.",
              "Hazards are categorised so that the right control is chosen. Mechanical hazards come from rotating couplings, flywheels and fans; thermal hazards from hot surfaces, steam and exhaust pipes; electrical hazards from dynamometers and heaters running at 230 V or higher; chemical hazards from fuels, lubricants and cleaning solvents; and acoustic hazards from engines at full load which exceed 90 dB. Each hazard maps to a control in the hierarchy of risk: elimination, substitution, engineering controls such as guards and interlocks, administrative controls such as permits and standard operating procedures, and finally personal protective equipment as the last line of defence.",
              "A defensible lab culture treats every near-miss as a reportable event. When a pressure gauge needle overshoots its range, when a fuel line drips, or when an exhaust pipe glows red, the operator stops the rig, logs the observation in the register and notifies the supervisor before resuming work. The lab record book also notes the position of gas cut-off valves, the type of extinguisher (foam for liquid fuel, CO2 for electrical fires, dry powder for general use) and the assembly point for evacuation. This discipline keeps the workshop running safely across batches and protects both the equipment and the student.",
            ],
            bullets: [
              "Pre-start check: verify guards, fuel valve, emergency stop, fire extinguisher type and first-aid box before powering any rig.",
              "Hierarchy of risk control: elimination, substitution, engineering, administrative, PPE - never start at PPE alone.",
              "Mechanical hazards: rotating couplings, flywheels, fans - keep hands clear and loose clothing tucked away.",
              "Thermal hazards: steam lines, exhaust pipes, heaters above 60 C cause burns within a second of contact.",
              "Electrical hazards: 230 V or higher on dynamometers and heaters - isolate the supply and lock the isolator before opening any panel.",
            ],
            table: {
              caption: "Hazard classes encountered in the thermal engineering lab.",
              headers: ["Hazard class", "Source on the rig", "Primary control", "PPE layer"],
              rows: [
                ["Mechanical", "Flywheel, coupling, fan", "Guard and interlock", "Snug overalls, no loose sleeves"],
                ["Thermal", "Steam pipe, exhaust manifold", "Lagging and hot-surface labels", "Leather gloves, eye protection"],
                ["Electrical", "Dynamometer, heater coil", "Isolator and RCD trip", "Insulated boots, rubber gloves"],
                ["Chemical", "Diesel, petrol, solvents", "Closed fuel tank, ventilation", "Nitrile gloves, splash goggles"],
                ["Acoustic", "Engine at full load > 90 dB", "Acoustic enclosure", "Ear muffs rated NRR 25 dB"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Pre-start safety sequence for any thermal rig",
              caption:
                "Walk these five checks in order before pressing the start button.",
              steps: [
                { label: "Inspect rig and guards", note: "no loose parts, all shields in place" },
                { label: "Verify fuel and coolant lines", note: "no drips, valves correctly set" },
                { label: "Confirm electrical isolation", note: "main switch off until ready" },
                { label: "Check emergency stops and extinguisher", note: "reachable, type matches hazard" },
                { label: "Brief team and start", note: "one operator, one observer" },
              ],
            },
            callout: {
              type: "warning",
              title: "One operator, one observer",
              body: "The student who presses the start button must keep a hand on or near the emergency stop at all times; a second observer watches the gauge cluster and calls out any reading out of range. This two-person rule is the single most effective control against runaway engines and over-pressured vessels.",
            },
            keyTerms: [
              { term: "Hazard", definition: "Any source with the potential to cause harm - mechanical, thermal, electrical, chemical or acoustic." },
              { term: "Hierarchy of risk control", definition: "Elimination, substitution, engineering, administrative and PPE - apply in this order, never starting at PPE alone." },
              { term: "Emergency stop", definition: "A red mushroom-head button that cuts power and fuel instantly; tested before each session." },
            ],
            examQuestions: [
              {
                q: "List the major hazard classes present in a thermal engineering laboratory. For each class give two typical sources on an IC engine or boiler rig, the engineering or administrative control applied, and the PPE worn. Explain why PPE alone is not a sufficient control strategy.",
                marks: 7,
                outline: [
                  "Define a hazard and list five classes: mechanical, thermal, electrical, chemical, acoustic.",
                  "Mechanical sources: rotating flywheel, exposed coupling; controls: guards and interlocks; PPE: snug overalls.",
                  "Thermal sources: steam line, exhaust manifold; controls: lagging and labels; PPE: leather gloves.",
                  "Electrical sources: dynamometer, heater; controls: isolator and RCD; PPE: insulated boots.",
                  "Chemical sources: diesel fuel, solvents; controls: closed tank, ventilation; PPE: nitrile gloves.",
                  "Acoustic source: full-load engine > 90 dB; controls: enclosure; PPE: ear muffs.",
                  "Argue PPE is last line: it fails if the wearer removes it, so controls higher up the hierarchy must act first.",
                ],
              },
              {
                q: "State the five steps of the risk-control hierarchy in order and give one thermal-lab example of each.",
                marks: 3,
              },
              {
                q: "Name the correct extinguisher type for (a) a diesel pool fire and (b) an electrical panel fire.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Personal protective equipment for the thermal lab",
            body: [
              "Personal protective equipment is the last layer in the risk-control hierarchy, worn only after engineering and administrative controls are already in place. In the thermal engineering lab the standard PPE set comprises a cotton overall that resists brief flame contact, safety goggles that shield against fuel spray and flying debris, leather hand gloves for handling hot pipes and specimens, steel-toed safety shoes that protect against dropped tools and rolling cylinders, and ear muffs or plugs rated above 25 dB noise reduction for work near a running engine. Each item has a defined service interval; gloves with worn palms and goggles with scratched lenses must be replaced before the next session.",
              "The choice of glove material follows the hazard. Leather gloves resist hot surfaces up to about 200 C and protect against cuts from sharp metal edges; nitrile gloves resist diesel, petrol and lubricants for short contact but melt near hot surfaces, so they are never used on exhaust lines; heat-resistant aluminised gloves are reserved for work near furnaces or steam lines above 300 C. Eye protection has a similar hierarchy: clear polycarbonate goggles for general work, tinted goggles near welding arcs, and a full face shield when dispensing fuel under pressure or when operating a bomb calorimeter that holds a pressurised oxygen atmosphere.",
              "Respiratory protection matters in fuel-handling and exhaust-measurement experiments. A simple cloth mask filters dust during boiler ash cleaning; a half-mask respirator with organic vapour cartridges is required when transferring petrol or cleaning the carburettor of an SI engine; a self-contained breathing apparatus is reserved for confined-space boiler entry, which is normally beyond the scope of the third-semester lab. PPE only works when it fits and is actually worn; loose goggles that slide off the nose, oversized gloves that reduce grip, and ear muffs worn over a cap all leak the hazard in. A pre-session fit check, performed in front of a mirror, is a worthwhile one-minute investment.",
            ],
            bullets: [
              "Standard PPE set: cotton overall, polycarbonate goggles, leather gloves, steel-toed shoes, ear muffs - issued before each session.",
              "Glove ladder: leather up to 200 C, nitrile for fuels only, aluminised for furnace or high-pressure steam above 300 C.",
              "Eye protection ladder: clear goggles for general work, tinted near welding arcs, full face shield for fuel under pressure or bomb calorimeter.",
              "Respiratory ladder: cloth mask for dust, organic-vapour half-mask for petrol handling, SCBA for confined-space boiler entry.",
              "Pre-session fit check in a mirror: goggles seal on the face, gloves grip without slack, ear muffs cover the ear canal entirely.",
            ],
            table: {
              caption: "PPE selection by hazard on the thermal lab rigs.",
              headers: ["Body part", "Hazard", "PPE item", "Material / rating"],
              rows: [
                ["Eyes", "Fuel spray, debris", "Safety goggles", "Polycarbonate, side shield"],
                ["Hands", "Hot pipes up to 200 C", "Leather gloves", "Chrome-tanned leather"],
                ["Hands", "Diesel and lubricant", "Nitrile gloves", "Nitrile, 0.5 mm"],
                ["Feet", "Dropped tools", "Safety shoes", "Steel toe, oil-resistant sole"],
                ["Ears", "Full-load engine noise", "Ear muffs", "NRR 25 dB minimum"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "PPE selection vs hazard class",
              caption:
                "Match the body part at risk to the material rated for that hazard.",
              axes: { x: "Low thermal load -> High thermal load", y: "Low chemical load -> High chemical load" },
              quadrants: [
                { label: "Clear goggles + cotton overall", note: "general workshop work, low heat, no fuel spray" },
                { label: "Tinted goggles + leather gloves", note: "hot surfaces, exhaust lines, low fuel handling" },
                { label: "Face shield + nitrile gloves", note: "fuel dispensing, bomb calorimeter, low heat" },
                { label: "Aluminised gloves + face shield", note: "furnace work, high-pressure steam, solvents" },
              ],
            },
            callout: {
              type: "tip",
              title: "Fit matters more than rating",
              body: "An NRR 30 dB ear muff worn over a woollen cap may give only 15 dB of real attenuation. Always remove caps and hoods before fitting ear muffs, and replace the cushion foam when it stays compressed after a pinch - the rating is meaningless once the seal is lost.",
            },
            keyTerms: [
              { term: "PPE", definition: "Personal protective equipment - garments and devices worn to shield the body from residual hazards." },
              { term: "NRR", definition: "Noise reduction rating; the decibel attenuation of a hearing protector measured under standard laboratory conditions." },
              { term: "Interlock", definition: "A device that prevents machine start-up unless a guard or door is closed; an engineering control above PPE." },
            ],
            examQuestions: [
              {
                q: "Classify the personal protective equipment used in a thermal engineering laboratory according to the body part protected. For each item, state the material specification, the hazard it controls, and one reason why PPE alone cannot substitute for engineering and administrative controls.",
                marks: 7,
                outline: [
                  "List body parts: eyes, hands, feet, ears, respiratory.",
                  "Eyes: polycarbonate goggles with side shield; controls fuel spray and debris; rated for impact.",
                  "Hands: leather gloves up to 200 C, nitrile for fuels, aluminised for steam above 300 C; controls burns and chemical contact.",
                  "Feet: steel-toed, oil-resistant sole; controls dropped tools and slips on oiled floors.",
                  "Ears: ear muffs NRR 25 dB minimum; controls engine noise above 90 dB.",
                  "Respiratory: half-mask with organic-vapour cartridge for petrol; SCBA for confined space.",
                  "Argue PPE alone fails: wearer may remove it, fit may leak, material may degrade; engineering controls such as guards and interlocks act before the hazard reaches the body.",
                ],
              },
              {
                q: "State the glove material recommended for (a) an exhaust manifold at 150 C, (b) diesel handling, and (c) a steam pipe at 350 C. Justify each.",
                marks: 3,
              },
              {
                q: "Why is PPE considered the last line of defence in the risk-control hierarchy?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Lab report format and documentation",
            body: [
              "The lab record is the permanent evidence that an experiment was planned, performed, observed and analysed. A standard thermal-lab report has eleven parts: the title and experiment number, the date and group members, the objective, the apparatus list with calibration certificates, the theory in one or two paragraphs with governing equations, the procedure as a numbered sequence, the observations table, the sample calculation, the results with units, the discussion of errors, and the conclusion with answers to set questions. Every page is signed by the student and counter-signed by the supervisor, and the original is filed in the department archive at the end of the semester.",
              "The observations table is the most heavily scrutinised part because it is the only section that cannot be rewritten. Readings are entered as they are taken, in pen, with the instrument range and unit written at the head of each column; a reading struck out is crossed with a single line so the original remains legible, and the corrected value is initialled. The sample calculation walks one row of the observations through every governing equation, naming each symbol as it appears, so that a reader can repeat the arithmetic and obtain the same number. Reproducibility, not neatness, is the criterion: a tidy report that omits a single equation loses more marks than a messy one that shows every step.",
              "The discussion section converts results into understanding. It compares the measured value with the textbook or manufacturer value, states the percentage deviation, lists the sources of error in order of magnitude - instrument calibration, reading resolution, ambient drift, operator bias - and proposes one concrete improvement, such as a longer timing interval or a digital gauge with finer resolution. The conclusion is a single paragraph answering the experiment's objective in plain language: 'The Morse test on the four-cylinder petrol engine gave a brake power of 18.4 kW and a mechanical efficiency of 82 per cent.' Graphs are plotted on squared or millimetre paper, axes labelled with units, and best-fit lines drawn with a straight edge rather than by joining every point.",
            ],
            bullets: [
              "Eleven-part report: title, members, objective, apparatus, theory, procedure, observations, sample calc, results, discussion, conclusion.",
              "Observations are entered in pen as taken; struck values keep the original legible and the correction is initialled.",
              "Sample calculation walks one row through every equation, naming symbols - reproducibility beats neatness.",
              "Discussion lists percentage deviation, error sources ranked by magnitude, and one concrete improvement.",
              "Conclusion answers the objective in one paragraph with the measured value and its unit; graphs have labelled axes and a best-fit line.",
            ],
            table: {
              caption: "The eleven-part lab report and what each part carries.",
              headers: ["#", "Section", "What it contains"],
              rows: [
                ["1", "Title block", "Experiment number, group, date, supervisor sign"],
                ["2", "Objective", "One sentence stating what is measured"],
                ["3", "Apparatus", "Make, range, least count, calibration date"],
                ["4", "Theory", "Governing equations with symbol definitions"],
                ["5", "Procedure", "Numbered steps actually followed"],
                ["6", "Observations", "Raw readings in pen, units on each column"],
                ["7", "Sample calc", "One row worked through every equation"],
                ["8", "Results", "Final value with unit and uncertainty"],
                ["9", "Discussion", "Deviation, ranked errors, one improvement"],
                ["10", "Conclusion", "One paragraph answering the objective"],
                ["11", "References", "Textbook or data sheet cited"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From rig to archived report",
              caption:
                "The eleven sections of the lab record pass through this pipeline every session.",
              stages: [
                { label: "Plan and pre-check", note: "objective, apparatus, theory" },
                { label: "Run the experiment", note: "procedure and raw observations" },
                { label: "Sample calculation", note: "one row through every equation" },
                { label: "Results and discussion", note: "value, deviation, errors, fix" },
                { label: "Conclusion and sign-off", note: "answer the objective, archive" },
              ],
            },
            callout: {
              type: "exam",
              title: "The observations table is untouchable",
              body: "Examiners cross-check the sample calculation against the observations table, line by line. Never rewrite or type up observations after the session - the original pen entries with single-line strikeouts are the only acceptable evidence. A typed table that disagrees with the rough record loses the entire observations component.",
            },
            keyTerms: [
              { term: "Least count", definition: "The smallest reading reliably indicated by an instrument; governs the resolution error of every measurement." },
              { term: "Sample calculation", definition: "One full row of observations worked through every governing equation, naming each symbol, so the reader can reproduce the arithmetic." },
              { term: "Deviation", definition: "The percentage difference between the measured value and a reference or textbook value; reported in the discussion section." },
            ],
            examQuestions: [
              {
                q: "Describe the standard format of a thermal engineering laboratory report. State the purpose of each section, explain why the observations table must be written in pen during the session, and discuss what the sample calculation and discussion sections are expected to demonstrate.",
                marks: 7,
                outline: [
                  "List the eleven parts: title, objective, apparatus, theory, procedure, observations, sample calc, results, discussion, conclusion, references.",
                  "Title block carries experiment number, group, date, supervisor signature - the archival identifier.",
                  "Apparatus lists make, range, least count, calibration date - governs later uncertainty analysis.",
                  "Observations are raw readings; entered in pen as taken, struck errors kept legible and initialled.",
                  "Sample calculation walks one row through every governing equation, naming symbols, so the arithmetic is reproducible.",
                  "Discussion reports deviation from reference, ranks error sources, proposes one concrete improvement.",
                  "Argue pen-only observations prevent post-hoc tampering and preserve the chain of evidence.",
                ],
              },
              {
                q: "Define least count and uncertainty. If a pressure gauge has a 0-10 bar range and 50 divisions, state its least count.",
                marks: 3,
              },
              {
                q: "Why is a single-line strikeout preferred over erasing a wrong reading in the observations table?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Calibration of pressure gauge and thermometer",
            body: [
              "Calibration is the comparison of an instrument's reading against a standard of known accuracy, performed at several points across its range, so that a calibration curve and a correction table can be drawn. The dead-weight tester is the standard for pressure gauge calibration: a piston of known area carries certified weights, the oil pressure under the piston equals the weight divided by the area, and the gauge under test is connected to the same oil line. Readings are taken at five points on both the rising and falling scale to expose hysteresis, and the difference between the applied standard pressure and the gauge reading is the correction at that point.",
              "Thermometer calibration uses a stirred-liquid bath whose temperature is measured by a standard platinum resistance thermometer or a calibrated reference thermocouple. The bath is set to five points spanning the working range - typically ice point, 30 C, 60 C, 90 C and the steam point at 100 C - and at each point the test thermometer reading is compared with the reference after thermal equilibrium is reached. The ice point and steam point, prepared with distilled water and a correction for local atmospheric pressure, anchor the two ends of the scale; intermediate points reveal nonlinearity in the capillary or in the thermistor characteristic, which is then plotted as a correction chart and pasted beside the instrument.",
              "The calibration record is itself a short report: the date, the instrument serial number, the standard used with its traceability certificate, the five rising and five falling readings, the computed correction at each point, the maximum error and the linearity expressed as a percentage of full scale. A gauge or thermometer whose maximum error exceeds its accuracy class is rejected, tagged and sent for repair or replacement. Calibration intervals are set by usage - daily for a dynamometer load cell, monthly for a pressure gauge on a steam line, yearly for a reference thermometer - and the certificate is renewed before each interval expires, otherwise the experiment that depends on the instrument cannot be reported as calibrated.",
            ],
            bullets: [
              "Calibration compares an instrument's reading with a traceable standard at five or more points across its range.",
              "Dead-weight tester: pressure = weight / piston area; oil line transmits the standard to the gauge under test.",
              "Thermometer calibration: stirred bath with a platinum resistance reference; readings at ice, 30, 60, 90 and steam points.",
              "Rising and falling runs expose hysteresis; the larger of the two errors sets the correction at each point.",
              "Calibration certificate carries date, standard, readings, corrections, max error and accuracy class; renew before expiry.",
            ],
            table: {
              caption: "Calibration record for a 0-10 bar Bourdon gauge against a dead-weight tester.",
              headers: ["Standard (bar)", "Rising (bar)", "Falling (bar)", "Mean error", "Correction"],
              rows: [
                ["2.0", "2.05", "2.02", "+0.035", "-0.035"],
                ["4.0", "4.08", "4.04", "+0.060", "-0.060"],
                ["6.0", "6.10", "6.05", "+0.075", "-0.075"],
                ["8.0", "8.12", "8.06", "+0.090", "-0.090"],
                ["10.0", "10.15", "10.08", "+0.115", "-0.115"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The calibration loop",
              caption:
                "Five points rising, five points falling - repeat until the correction chart is stable.",
              steps: [
                { label: "Set standard pressure", note: "weight on the dead-weight piston" },
                { label: "Read test gauge", note: "at thermal and mechanical equilibrium" },
                { label: "Compute correction", note: "standard minus gauge reading" },
                { label: "Step to next point", note: "rising run then falling run" },
                { label: "Plot correction chart", note: "tag instrument with accuracy class" },
              ],
            },
            callout: {
              type: "warning",
              title: "Tap, then read",
              body: "Bourdon tubes stick. Tap the gauge gently with a finger before reading - the needle often moves 5-10 per cent of one division, which is exactly the size of the error you are trying to measure. Always record the post-tap reading as the observation, and note 'after tap' on the entry.",
            },
            keyTerms: [
              { term: "Calibration", definition: "Comparison of an instrument's reading with a traceable standard at several points across its range, producing a correction chart." },
              { term: "Dead-weight tester", definition: "A pressure standard in which certified weights on a piston of known area generate a known oil pressure." },
              { term: "Hysteresis", definition: "The difference between readings taken on the rising and falling scale at the same applied value, indicating internal friction." },
            ],
            examQuestions: [
              {
                q: "Describe the procedure for calibrating a Bourdon pressure gauge using a dead-weight tester. Explain why readings are taken on both rising and falling pressures, state how the correction and maximum error are computed, and explain how the calibration certificate is used in the uncertainty analysis of an experiment.",
                marks: 7,
                outline: [
                  "State the principle: standard pressure = weight / piston area; oil transmits to the test gauge.",
                  "List the apparatus: dead-weight tester, certified weights, oil reservoir, test gauge, bleed valve.",
                  "Take readings at five points on rising pressure, then five on falling pressure, tapping the gauge before each reading.",
                  "Compute correction = standard - gauge at each point; record mean of rising and falling.",
                  "Compute maximum error and express as percentage of full scale; compare with accuracy class.",
                  "State that hysteresis is the rising-minus-falling gap; large hysteresis signals a worn Bourdon tube.",
                  "Explain that the correction chart is later used to convert raw gauge readings to true pressures in uncertainty analysis.",
                ],
              },
              {
                q: "A dead-weight tester has a piston of area 1 cm squared. What mass is needed to generate a pressure of 5 bar (take g = 9.81 m per s squared)?",
                marks: 3,
              },
              {
                q: "Why are readings taken at both the ice point and the steam point when calibrating a thermometer?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Uncertainty analysis in measurements",
            body: [
              "Every measurement carries an uncertainty that reflects the limits of the instrument, the resolution of the readout, the stability of the environment and the bias of the observer. A thermal-lab measurement such as brake power combines several raw readings - speed, torque and fuel flow - and the uncertainty of the result is propagated from the uncertainties of these inputs. The standard scheme is the root-sum-square method: if a result R = f(x1, x2, ..., xn) and each xi has uncertainty u(xi), then u(R) equals the square root of the sum over i of (partial derivative of f with respect to xi times u(xi)) squared, assuming the inputs are independent.",
              "Sources are grouped into systematic and random. Systematic errors bias every reading the same way - a gauge that reads 0.2 bar high, a thermocouple with a fixed offset, a stopwatch that drifts - and are removed by calibration and correction; they do not reduce with averaging. Random errors fluctuate reading to reading - operator reaction time, ambient drafts, vibration - and are reduced by repeating the measurement and quoting the mean with its standard error. The total uncertainty of a single reading is the combination of the instrument's calibration uncertainty (systematic) and the scatter of repeated readings (random), again by root-sum-square, and is reported as result plus or minus u at a confidence level.",
              "A worked example makes the method concrete. The brake power of an engine is computed from BP = 2 pi N T / 60, with a speed N = 1500 rpm measured to plus or minus 5 rpm and a torque T = 86.4 N-m measured to plus or minus 1.2 N-m. The partial sensitivities are partial BP / partial N = 2 pi T / 60 and partial BP / partial T = 2 pi N / 60, so the relative uncertainty in BP equals the root-sum-square of the relative uncertainties in N and T - about 1.4 per cent. Reporting the result as BP = 13.6 kW plus or minus 0.2 kW tells the reader exactly what the measurement is worth.",
            ],
            bullets: [
              "Uncertainty is the band within which the true value is expected to lie; report results as value plus or minus u.",
              "Root-sum-square: u(R) = sqrt(sum (dR/dxi * u(xi))^2) for independent inputs xi.",
              "Systematic errors bias every reading the same way; removed by calibration, not by averaging.",
              "Random errors scatter reading to reading; reduced by repetition, reported as mean plus or minus standard error.",
              "Combine calibration uncertainty (systematic) with scatter (random) by root-sum-square to obtain total uncertainty.",
            ],
            table: {
              caption: "Uncertainty budget for a brake-power measurement BP = 2 pi N T / 60.",
              headers: ["Input", "Value", "Uncertainty", "Sensitivity", "Contribution"],
              rows: [
                ["N (rpm)", "1500", "5 rpm", "9.05 W per rpm", "45.2 W"],
                ["T (N-m)", "86.4", "1.2 N-m", "157.1 W per N-m", "188.5 W"],
                ["Combined", "-", "-", "root-sum-square", "193.8 W"],
                ["Result BP", "13 570 W", "194 W", "relative 1.4 per cent", "BP = 13.57 plus or minus 0.19 kW"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Systematic vs random uncertainty",
              caption:
                "The two families need different controls - calibration vs repetition.",
              left: {
                heading: "Systematic",
                items: [
                  "Bias every reading the same way",
                  "Removed by calibration and correction",
                  "Not reduced by averaging",
                  "Example: gauge reads 0.2 bar high",
                  "Report as fixed correction",
                ],
              },
              right: {
                heading: "Random",
                items: [
                  "Scatters reading to reading",
                  "Reduced by repetition and averaging",
                  "Reported as mean plus or minus standard error",
                  "Example: operator reaction time on a stopwatch",
                  "Distribution assumed normal",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Always propagate, never add worst-case",
              body: "Adding absolute worst-case uncertainties inflates the result by a factor of root n on average. Use the root-sum-square method, name the partial derivative used for each input, and state the assumption that inputs are independent. Examiners award marks for the propagation formula and the named sensitivities, not for a single inflated number.",
            },
            keyTerms: [
              { term: "Uncertainty", definition: "The band within which the true value of a measurement is expected to lie, reported as value plus or minus u." },
              { term: "Root-sum-square", definition: "The method of combining independent uncertainties by taking the square root of the sum of squared contributions." },
              { term: "Sensitivity", definition: "The partial derivative of a result with respect to an input; it scales that input's uncertainty into the result." },
            ],
            examQuestions: [
              {
                q: "Define systematic and random uncertainty. Derive the root-sum-square expression for the uncertainty of a result R = f(x1, x2, ..., xn) assuming independent inputs. Apply it to BP = 2 pi N T / 60 with N = 1500 plus or minus 5 rpm and T = 86.4 plus or minus 1.2 N-m, and report the result.",
                marks: 7,
                outline: [
                  "Define systematic (bias, calibration) and random (scatter, repetition) uncertainties.",
                  "State the assumption: inputs x1..xn are statistically independent.",
                  "Write u(R)^2 = sum (dR/dxi)^2 u(xi)^2 - the root-sum-square propagation.",
                  "Compute partial sensitivities: dBP/dN = 2 pi T / 60 and dBP/dT = 2 pi N / 60.",
                  "Substitute: dBP/dN = 9.05 W per rpm, dBP/dT = 157.1 W per N-m.",
                  "u(BP) = sqrt((9.05*5)^2 + (157.1*1.2)^2) = sqrt(2042 + 35533) = 194 W.",
                  "Report BP = 13.57 kW plus or minus 0.19 kW, a relative uncertainty of 1.4 per cent.",
                ],
              },
              {
                q: "A temperature is measured as 85 C plus or minus 1 C and a mass as 2.0 kg plus or minus 0.05 kg. If the result is the product m*T, compute the relative uncertainty.",
                marks: 3,
              },
              {
                q: "Why does averaging repeated readings reduce random uncertainty but not systematic uncertainty?",
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
      title: "Experiments on IC Engines",
      summary:
        "The IC engine experiments: Morse test on a multi-cylinder engine, valve and port timing diagrams, performance test for BP/IP/BMEP/SFC, the heat balance sheet, and the performance curves that diagnose engine wear.",
      chapter: {
        number: "02",
        title: "Experiments on IC Engines",
        intro:
          "Unit II runs the four classical IC engine experiments. The Morse test cuts each cylinder in turn to recover indicated power; the valve and port timing diagrams map the breathing events on 720- and 360-degree circles; the performance test computes BP, IP, BMEP and SFC across the load range; and the heat balance sheet partitions the fuel energy into work, cooling water, exhaust and unaccounted losses.",
        inOneBreath:
          "Morse test: cut one cylinder, BP drop equals that cylinder's IP; sum per-cylinder IPs for total IP, friction power = IP - BP, eta_mech = BP/IP; valve timing on a 720-degree circle for four-stroke, port timing on 360 for two-stroke; BP = 2 pi N T / 60, BMEP = 6 BP / (V_s N), SFC = m_fuel / BP; heat balance debits BP, cooling water, exhaust and unaccounted to the credit of fuel energy.",
        sections: [
          {
            number: "2.1",
            title: "Morse test on multi-cylinder SI engine",
            body: [
              "The Morse test determines the indicated power of a multi-cylinder engine without an indicator diagram, by cutting out one cylinder at a time and measuring the resulting drop in brake power. The test is run on a four-cylinder petrol engine coupled to an electric or hydraulic dynamometer at constant speed and constant throttle. First the total brake power BP_total is measured with all four cylinders firing. Then the spark of cylinder one is shorted; the engine slows, the dynamometer load is reduced to bring the speed back to the original value, and the new brake power BP1 is recorded. The difference BP_total - BP1 is the indicated power of cylinder one, IP1, because friction power is assumed constant.",
              "The same procedure is repeated for cylinders two, three and four, giving IP2, IP3 and IP4. The total indicated power is the sum IP = IP1 + IP2 + IP3 + IP4, and the friction power is FP = IP - BP_total. The mechanical efficiency is then eta_mech = BP_total / IP. Two assumptions are critical: the friction power of the engine does not change when a cylinder is cut, and the air-fuel ratio and ignition timing of the remaining cylinders stay constant. The first assumption is approximately true because pumping loss of the cut cylinder rises slightly, offsetting the small drop in mechanical friction; the net error is usually below five per cent.",
              "The test is unsuitable for single-cylinder engines because cutting the only cylinder stops the engine, and it is rarely applied to compression-ignition engines because cutting a diesel cylinder requires a fuel cut-off solenoid on the injector line rather than a shorted spark. A representative result on a 1500 cc four-cylinder petrol engine at 3000 rpm gives BP_total = 24 kW, BP1 = 17.8 kW, BP2 = 18.0 kW, BP3 = 17.9 kW and BP4 = 18.1 kW, so IP1 = 6.2, IP2 = 6.0, IP3 = 6.1 and IP4 = 5.9 kW, summing to IP = 24.2 kW; if this implies an implausibly high eta_mech, suspect a poorly-cut cylinder or a failing friction-power assumption.",
            ],
            bullets: [
              "Morse test cuts one cylinder at a time, measures BP drop, attributes the drop to that cylinder's IP.",
              "Total IP = sum of per-cylinder IP drops; friction power = IP - BP_total.",
              "Run at constant speed and throttle; bring the speed back by reducing dynamometer load after each cut.",
              "Assumptions: friction power unchanged when a cylinder is cut; air-fuel ratio of remaining cylinders stays constant.",
              "Single-cylinder engines cannot be tested; diesel engines need an injector-line fuel cut-off solenoid.",
            ],
            table: {
              caption: "Morse test data on a 1500 cc four-cylinder petrol engine at 3000 rpm.",
              headers: ["Cylinder cut", "BP (kW)", "IP of cut cyl (kW)", "Note"],
              rows: [
                ["None", "24.0", "-", "BP_total"],
                ["1", "17.8", "6.2", "spark shorted"],
                ["2", "18.0", "6.0", "spark shorted"],
                ["3", "17.9", "6.1", "spark shorted"],
                ["4", "18.1", "5.9", "spark shorted"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Morse test decision branches",
              caption:
                "Choose the cut method by engine type; reject the test for single-cylinder engines.",
              start: "Multi-cylinder engine on a dynamometer",
              branches: [
                { label: "Petrol (SI) engine", outcome: "Short the spark plug of the cut cylinder", good: true },
                { label: "Diesel (CI) engine", outcome: "Energise the injector-line fuel cut-off solenoid", good: true },
                { label: "Single-cylinder engine", outcome: "Test not applicable - engine stops", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Watch the friction-power assumption",
              body: "When the cut cylinder keeps pumping air, its pumping loss rises and partially offsets the saved mechanical friction. If the computed mechanical efficiency exceeds 0.95, suspect a poorly-cut cylinder or a sticking dynamometer and repeat the run - genuine eta_mech for a small petrol engine is typically 0.80 to 0.88.",
            },
            keyTerms: [
              { term: "Morse test", definition: "A method of measuring indicated power of a multi-cylinder engine by cutting each cylinder in turn and recording the brake-power drop." },
              { term: "Friction power", definition: "The power lost to mechanical and pumping friction, equal to indicated power minus brake power." },
              { term: "Mechanical efficiency", definition: "The ratio of brake power to indicated power, eta_mech = BP / IP." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of the Morse test for determining the indicated power of a multi-cylinder petrol engine. State the assumptions made, describe the step-by-step procedure, and show how friction power and mechanical efficiency are obtained from the readings.",
                marks: 7,
                outline: [
                  "State the principle: cutting one cylinder reduces total BP by that cylinder's IP at constant speed and throttle.",
                  "List apparatus: multi-cylinder SI engine, dynamometer, spark shorting switch, tachometer, fuel measurement.",
                  "Procedure: measure BP_total, then short cylinder 1, restore speed by reducing load, measure BP1, repeat for all cylinders.",
                  "Compute IP_i = BP_total - BP_i for each cylinder; sum to obtain IP.",
                  "Compute friction power FP = IP - BP_total and mechanical efficiency eta_mech = BP_total / IP.",
                  "State the two assumptions: friction power unchanged after cut; air-fuel ratio of firing cylinders unchanged.",
                  "Note limitations: not for single-cylinder engines; pumping loss of cut cylinder introduces a small error.",
                ],
              },
              {
                q: "In a Morse test on a four-cylinder engine, BP_total = 30 kW and the BP values after cutting cylinders 1-4 are 22, 22.4, 22.2 and 22.6 kW. Find IP, FP and eta_mech.",
                marks: 3,
              },
              {
                q: "Why is the Morse test not applied to a single-cylinder engine?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Valve timing and port timing diagrams",
            body: [
              "A valve timing diagram shows the crank-angle positions at which the inlet and exhaust valves of a four-stroke engine open and close, drawn on a circle representing one full cycle of 720 degrees - two crank revolutions. A representative four-stroke petrol engine opens the inlet valve at 10 degrees before top dead centre, closes it at 40 degrees after bottom dead centre to use the ramming effect of the incoming charge; opens the exhaust valve at 45 degrees before bottom dead centre to release the expanding gases early, and closes it at 10 degrees after top dead centre to scavenge the residual burnt gas. The overlap around top dead centre, when both valves are briefly open, is critical for scavenging at high speed and is shown by the overlap angle.",
              "A two-stroke engine replaces the valves with ports in the cylinder wall and uses the piston itself to uncover and cover them, so the timing diagram is drawn on a 360-degree circle representing one crank revolution. The transfer port opens at about 110 degrees after top dead centre, when the piston has moved far enough down to expose the port, and closes at 110 degrees before top dead centre as the piston rises again; the exhaust port opens earlier, at about 140 degrees after top dead centre, so that combustion pressure has dropped before the fresh charge enters. The port-timing diagram therefore shows the three events - transfer open, exhaust open, ignition - as bands on a single circle, with the symmetry of piston-driven timing.",
              "The valve or port timing is read off the engine flywheel, which is marked with top dead centre and degree graduations, and checked against the manufacturer's specification with a dial indicator on the valve stem or with a stroboscope on the flywheel. The measured timing is plotted on a circular diagram with the four strokes - suction, compression, power, exhaust - marked in quadrants, and any deviation from the specified opening angle is reported as a timing error. A retarded inlet valve costs volumetric efficiency at high speed; an advanced exhaust valve wastes fresh charge and raises fuel consumption; a worn timing chain or belt typically retards both valves together by five to ten degrees.",
            ],
            bullets: [
              "Valve timing diagram: 720-degree circle for a four-stroke; port timing: 360-degree circle for a two-stroke.",
              "Inlet opens before TDC and closes after BDC to exploit ramming; exhaust opens before BDC to release gases early.",
              "Valve overlap around TDC scavenges burnt gas at high speed; both valves briefly open.",
              "Two-stroke ports are symmetric about TDC and BDC because the piston itself uncovers them.",
              "Check timing with a dial indicator on the valve stem and a stroboscope on the marked flywheel.",
            ],
            table: {
              caption: "Representative valve and port timings.",
              headers: ["Event", "Four-stroke SI", "Four-stroke CI", "Two-stroke CI"],
              rows: [
                ["Inlet/transfer open", "10 deg BTDC", "5 deg BTDC", "110 deg ATDC"],
                ["Inlet/transfer close", "40 deg ABDC", "30 deg ABDC", "110 deg BTDC"],
                ["Exhaust open", "45 deg BBDC", "50 deg BBDC", "140 deg ATDC"],
                ["Exhaust close", "10 deg ATDC", "5 deg ATDC", "140 deg BTDC"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The four strokes mapped onto a 720-degree circle",
              caption:
                "Top layer is the full cycle; each lower layer is one stroke with its valve events.",
              layers: [
                { label: "Full cycle: 720 deg (two crank revolutions)", note: "suction, compression, power, exhaust" },
                { label: "Suction stroke (inlet valve open)", note: "IVO 10 BTDC to IVC 40 ABDC" },
                { label: "Compression + power (both valves shut)", note: "ignition near TDC of compression" },
                { label: "Exhaust stroke (exhaust valve open)", note: "EVO 45 BBDC to EVC 10 ATDC" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the circle before the angles",
              body: "In the exam, sketch the 720-degree circle as four quadrants first, then mark TDC and BDC, then write the opening and closing angles into the correct quadrant. A blank circle earns no marks; a labelled circle with the four strokes shaded earns the structure marks before any angle is written.",
            },
            keyTerms: [
              { term: "Valve timing diagram", definition: "A circular diagram showing crank-angle positions of valve opening and closing events over the 720-degree four-stroke cycle." },
              { term: "Valve overlap", definition: "The crank-angle period near TDC when both inlet and exhaust valves are open, used for scavenging." },
              { term: "Port timing", definition: "The two-stroke equivalent of valve timing, drawn on a 360-degree circle with piston-driven ports." },
            ],
            examQuestions: [
              {
                q: "Draw a neat valve timing diagram for a four-stroke petrol engine with representative values. Label each event with its crank angle, explain the reasons for inlet-valve lead and exhaust-valve lag, and define valve overlap. State how the diagram differs for a two-stroke engine.",
                marks: 7,
                outline: [
                  "Draw a 720-degree circle, mark TDC and BDC at top and bottom, label the four strokes in quadrants.",
                  "Mark inlet valve opens 10 deg BTDC, closes 40 deg ABDC.",
                  "Mark exhaust valve opens 45 deg BBDC, closes 10 deg ATDC.",
                  "Explain inlet lead: exploit ramming of incoming charge; inlet lag after BDC uses flow momentum.",
                  "Explain exhaust lead: release expanding gases early to reduce pumping work; exhaust lag scavenges residual gas.",
                  "Define valve overlap as the crank-angle period near TDC when both valves are open; high speed scavenging.",
                  "Contrast with two-stroke: 360-degree circle, piston-driven ports, symmetric about TDC/BDC.",
                ],
              },
              {
                q: "On a valve timing diagram, mark IVO 10 deg BTDC, IVC 40 deg ABDC, EVO 45 deg BBDC, EVC 10 deg ATDC and shade the valve overlap.",
                marks: 3,
              },
              {
                q: "Why is the port timing diagram of a two-stroke engine drawn on a 360-degree circle instead of 720 degrees?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Performance test on CI engine - BP, IP, BMEP, SFC",
            body: [
              "A performance test on a compression-ignition engine maps the engine's behaviour across its load range at constant speed. The engine is coupled to an electric or hydraulic dynamometer that applies a measurable torque; the brake torque is the product of the net load on the dynamometer and the arm length, and the brake power follows as BP = 2 pi N T / 60, where N is the rotational speed in revolutions per minute and T is the torque in newton-metres. The indicated power, when an indicator diagram is available, is the area of the p-V loop times the number of cycles per second, and the brake mean effective pressure follows from BMEP = 6 BP / (V_s * N) for a four-stroke engine, where V_s is the swept volume.",
              "The specific fuel consumption is the fuel mass flow divided by the brake power, SFC = m_fuel / BP, reported in kilograms per kilowatt-hour. The brake thermal efficiency follows from eta_brake = BP / (m_fuel * LHV), where LHV is the lower heating value of the fuel in joules per kilogram. The performance test records these quantities at eight to ten load points from no load to full load, and the results are plotted as BP, torque, SFC and eta_brake against load on a single sheet. A well-tuned CI engine shows SFC falling to a minimum around 80 per cent load and then rising slightly as over-fuelling at full load increases smoke.",
              "The Python snippet below shows the calculation pipeline for one load point. The brake torque is obtained from a dynamometer load W on a drum of radius R; the fuel mass consumed over a timed interval is converted to a mass flow; and the indicated power is taken from an earlier Morse test or p-V diagram. The mechanical and brake thermal efficiencies are then computed in a few lines, with every variable carrying its unit so the audit trail is preserved. Repeating the same calculation for every load point and printing a small table of load, BP, SFC and eta_brake is the standard first stage of producing the performance curves.",
            ],
            bullets: [
              "Brake power: BP = 2 pi N T / 60, with N in rpm and T in N-m, gives watts; divide by 1000 for kW.",
              "Brake mean effective pressure: BMEP = 6 BP / (V_s N) for four-stroke; V_s in cubic metres.",
              "Specific fuel consumption: SFC = m_fuel / BP, reported in kg per kWh; minimum near 80 per cent load.",
              "Brake thermal efficiency: eta_brake = BP / (m_fuel * LHV); LHV of diesel about 42 MJ per kg.",
              "Plot BP, torque, SFC and eta_brake against load on one sheet; SFC dips then rises at full load.",
            ],
            codeExample: {
              language: "python",
              caption: "BP, IP, BMEP and SFC for a CI engine from brake load and fuel flow.",
              code: [
                "import math",
                "",
                "N      = 1500.0       # engine speed, rpm",
                "W      = 490.0        # net brake load on the dynamometer, N",
                "R      = 0.5          # dynamometer arm radius, m",
                "m_fuel = 0.0105       # fuel consumed in the timed interval, kg",
                "t      = 60.0         # timed interval, s",
                "LHV    = 42_000_000   # lower heating value of diesel, J/kg",
                "",
                "# Brake torque and brake power: BP = 2*pi*N*T / 60  (watts)",
                "T_brake = W * R",
                "BP = 2.0 * math.pi * N * T_brake / 60.0",
                "",
                "# Indicated power from an earlier Morse test, in watts",
                "IP = 18_500.0",
                "",
                "# Brake-specific fuel consumption (kg/J); convert to kg/kWh later",
                "m_dot = m_fuel / t",
                "BSFC = m_dot / BP",
                "",
                "# Mechanical and brake thermal efficiencies",
                "eta_mech  = BP / IP",
                "eta_brake = BP / (m_dot * LHV)",
                "",
                "print(f\"BP        = {BP/1000:.2f} kW\")",
                "print(f\"IP        = {IP/1000:.2f} kW\")",
                "print(f\"eta_mech  = {eta_mech:.3f}\")",
                "print(f\"BSFC      = {BSFC*3.6e6:.2f} kg/kWh\")",
                "print(f\"eta_brake = {eta_brake:.3f}\")",
              ].join("\n"),
            },
            diagram: {
              kind: "flow",
              title: "From raw readings to performance curves",
              caption:
                "One calculation pipeline per load point; repeat for ten points and plot.",
              steps: [
                { label: "Read N, W, m_fuel, t", note: "from tachometer, load cell, fuel burette, stopwatch" },
                { label: "Compute T_brake = W*R", note: "torque in N-m" },
                { label: "Compute BP = 2 pi N T / 60", note: "brake power in watts" },
                { label: "Compute SFC and eta_brake", note: "fuel flow and LHV" },
                { label: "Plot BP, SFC, eta vs load", note: "one curve sheet per test" },
              ],
            },
            callout: {
              type: "exam",
              title: "Carry the units, carry the marks",
              body: "Examiners deduct marks when the unit chain breaks: torque must be in N-m, speed in rpm, swept volume in cubic metres, LHV in joules per kilogram. State each unit beside the variable in the calculation, convert at the end, and report the result as 'BP = 13.57 kW' rather than 'BP = 13.57'.",
            },
            keyTerms: [
              { term: "Brake power", definition: "The usable power at the engine shaft, BP = 2 pi N T / 60, measured by a dynamometer." },
              { term: "Brake mean effective pressure", definition: "A notional constant pressure that would produce the measured BP over the expansion stroke; BMEP = 6 BP / (V_s N) for four-stroke." },
              { term: "Specific fuel consumption", definition: "Fuel mass flow per unit brake power, SFC = m_fuel / BP; reported in kg per kWh." },
            ],
            examQuestions: [
              {
                q: "Describe the performance test on a single-cylinder CI engine coupled to a dynamometer. Derive the expressions for brake power, brake mean effective pressure and specific fuel consumption, and explain how brake thermal efficiency is obtained. Sketch the expected variation of SFC with load.",
                marks: 7,
                outline: [
                  "List apparatus: CI engine, dynamometer, tachometer, fuel burette and stopwatch, temperature gauges.",
                  "Define torque T = W * R and brake power BP = 2 pi N T / 60; substitute typical values.",
                  "Derive BMEP = 6 BP / (V_s N) for a four-stroke from work per cycle = BP * 60 / (N/2).",
                  "Define SFC = m_fuel / BP; give units kg/kWh; typical CI value 0.25-0.30 kg/kWh.",
                  "Define eta_brake = BP / (m_fuel * LHV); LHV of diesel about 42 MJ/kg.",
                  "Describe the test procedure: eight to ten loads at constant speed; record N, W, m_fuel, t at each.",
                  "Sketch SFC vs load: falls with load to a minimum near 80 per cent, rises slightly at full load due to over-fuelling and smoke.",
                ],
              },
              {
                q: "A CI engine develops 12 kW at 1500 rpm. The fuel consumed is 0.08 kg in 60 s. Find SFC and brake thermal efficiency (LHV = 42 MJ/kg).",
                marks: 3,
              },
              {
                q: "Define BMEP and write its expression for a four-stroke engine.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Heat balance sheet of CI engine",
            body: [
              "A heat balance sheet accounts for the energy supplied to an engine by the fuel and partitions it into useful work, cooling-water heat, exhaust-gas heat, and unaccounted losses. The energy supplied per second is Q_in = m_fuel * LHV, where m_fuel is the fuel mass flow rate. The energy converted to brake work is BP, expressed in the same units of joules per second. The heat carried away by the cooling water is Q_cw = m_cw * c_pw * (T_out - T_in), where m_cw is the cooling-water mass flow, c_pw the specific heat of water, and T_out and T_in the outlet and inlet temperatures.",
              "The heat carried away by the exhaust gas is Q_ex = (m_fuel + m_air) * c_pg * (T_ex - T_amb), where m_air is the induced air mass flow from an air box or orifice, c_pg the mean specific heat of exhaust gas at constant pressure taken as about 1.05 kJ per kg-K, T_ex the exhaust temperature downstream of the port, and T_amb the ambient. The unaccounted loss is the residual: Q_un = Q_in - BP - Q_cw - Q_ex, which lumps radiation and convection from the engine body, friction heat not removed by cooling water, incomplete combustion, and measurement errors. A complete balance sheet lists each term as both an absolute value in kilowatts and a percentage of Q_in.",
              "A representative heat balance for a CI engine at full load shows about 32 per cent to brake power, 30 per cent to cooling water, 30 per cent to exhaust gas, and 8 per cent unaccounted. The balance reveals where to attack inefficiency: a high exhaust share suggests a waste-heat boiler or a turbocharger; a high cooling-water share suggests improved combustion chamber insulation, the basis of low-heat-rejection engine research; a large unaccounted share warns of poor measurement, particularly of air flow, and is the single most common reason a heat balance fails to total 100 per cent. The balance is drawn at several loads to show how the partition shifts as the engine works harder.",
            ],
            bullets: [
              "Heat supplied: Q_in = m_fuel * LHV; partition into BP, cooling water, exhaust, unaccounted.",
              "Cooling-water heat: Q_cw = m_cw * c_pw * (T_out - T_in); measure flow by bucket-and-stopwatch.",
              "Exhaust heat: Q_ex = (m_fuel + m_air) * c_pg * (T_ex - T_amb); c_pg about 1.05 kJ per kg-K.",
              "Unaccounted: residual = Q_in - BP - Q_cw - Q_ex; radiation, friction, incomplete combustion, errors.",
              "Typical CI full-load partition: 32 per cent BP, 30 per cent cooling, 30 per cent exhaust, 8 per cent unaccounted.",
            ],
            table: {
              caption: "Heat balance sheet of a CI engine at full load (Q_in = 100 per cent).",
              headers: ["Credit", "kW", "%", "Debit", "kW", "%"],
              rows: [
                ["Heat in fuel", "37.5", "100", "Brake power", "12.0", "32.0"],
                ["-", "-", "-", "Cooling water", "11.3", "30.1"],
                ["-", "-", "-", "Exhaust gas", "11.2", "29.9"],
                ["-", "-", "-", "Unaccounted", "3.0", "8.0"],
                ["Total", "37.5", "100", "Total", "37.5", "100"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The heat-balance pyramid",
              caption:
                "Energy supplied at the base is partitioned upward - the brake-power apex is what the engine delivers.",
              tiers: [
                { label: "Brake power (32 %)", note: "useful shaft work" },
                { label: "Cooling water (30 %)", note: "removed by the water jacket" },
                { label: "Exhaust gas (30 %)", note: "sensible heat in the flue gas" },
                { label: "Unaccounted (8 %)", note: "radiation, friction, incomplete combustion" },
              ],
            },
            callout: {
              type: "warning",
              title: "A balance over 105 per cent means a wrong reading",
              body: "If the debits sum to more than the credit, the air flow or the fuel flow has been mis-measured - usually the air-box orifice manometer was read at the wrong limb. Re-measure the air flow, the cooling-water flow and the temperatures before recomputing. A clean balance totals 100 plus or minus 3 per cent.",
            },
            keyTerms: [
              { term: "Heat balance sheet", definition: "A statement partitioning the fuel energy supplied into brake power, cooling-water heat, exhaust heat and unaccounted losses." },
              { term: "Lower heating value (LHV)", definition: "The heat released per unit mass of fuel when the water vapour in the products remains uncondensed; diesel about 42 MJ/kg." },
              { term: "Unaccounted loss", definition: "The residual heat not traced to BP, cooling or exhaust; includes radiation, friction heat and measurement errors." },
            ],
            examQuestions: [
              {
                q: "Explain the construction of a heat balance sheet for a single-cylinder CI engine. Write the expressions for heat supplied, heat carried away by cooling water, heat carried away by exhaust gas, and unaccounted loss. Present a representative balance sheet in percentages and discuss the significance of each term.",
                marks: 7,
                outline: [
                  "State aim: account for all energy supplied as fuel; debit side sums to credit.",
                  "Heat supplied Q_in = m_fuel * LHV, with m_fuel in kg/s and LHV in J/kg.",
                  "Brake power BP from the dynamometer, in watts.",
                  "Cooling water Q_cw = m_cw * c_pw * (T_out - T_in); give c_pw = 4.18 kJ/kg-K.",
                  "Exhaust Q_ex = (m_fuel + m_air) * c_pg * (T_ex - T_amb); c_pg about 1.05 kJ/kg-K.",
                  "Unaccounted Q_un = Q_in - BP - Q_cw - Q_ex; include radiation, friction, incomplete combustion.",
                  "Present a percentage sheet: BP 32, CW 30, EX 30, unaccounted 8; note that a sheet over 105 per cent signals bad air-flow measurement.",
                ],
              },
              {
                q: "A CI engine consumes 3 kg/h of diesel (LHV = 42 MJ/kg) and develops 12 kW. Find the percentage of heat converted to brake power.",
                marks: 3,
              },
              {
                q: "What does the 'unaccounted loss' term in a heat balance sheet typically include?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Performance curves and efficiencies",
            body: [
              "The performance test data are plotted as a family of curves that together characterise the engine. Brake power and torque rise almost linearly with load at constant speed; the torque curve flattens near full load as the governor or throttle limits further increase. Specific fuel consumption falls from a high value at no load - where fuel is burned only to overcome friction and produce no useful work - to a minimum around 80 per cent of full load, then rises slightly at full load because the engine over-fuels to develop maximum torque. The brake thermal efficiency curve mirrors the SFC curve, peaking at the same mid-to-high load where SFC bottoms out.",
              "Mechanical efficiency rises with load because BP grows while friction power stays roughly constant, so the ratio BP / IP climbs from near zero at no load to a peak at full load. Volumetric efficiency, the ratio of induced air mass to the swept-volume air mass at ambient conditions, falls with speed because the induction time shortens; it is measured with an air box and an orifice of known discharge coefficient, where the pressure drop across the orifice gives the air flow rate. The relative efficiency compares the actual indicated thermal efficiency with the air-standard efficiency of the Otto or Diesel cycle, and is typically 50 to 60 per cent for a well-tuned engine.",
              "The curves are used diagnostically. A SFC curve that does not dip but rises monotonically suggests a worn fuel injection pump or a clogged injector; a torque curve that droops below the linear trend indicates the governor is cutting fuel early; a mechanical efficiency that plateaus at 70 per cent when the manufacturer quotes 85 per cent signals ring wear or low oil viscosity. Comparing the test curves with the manufacturer's data sheet, run at the same ambient temperature and barometric pressure, is the standard way to decide whether an engine needs overhaul or remains in serviceable condition.",
            ],
            bullets: [
              "BP and torque rise with load; SFC dips to a minimum near 80 per cent load, then rises.",
              "Mechanical efficiency rises with load: friction power roughly constant, BP grows, so BP/IP climbs.",
              "Volumetric efficiency = induced air mass / swept-volume air mass; falls with engine speed.",
              "Relative efficiency = indicated thermal efficiency / air-standard efficiency; typically 50-60 per cent.",
              "Diagnose wear from curve shape: monotonic SFC rise means injector fault; torque droop means early governor cut.",
            ],
            table: {
              caption: "Performance summary of a CI engine at 1500 rpm across the load range.",
              headers: ["Load (%)", "BP (kW)", "SFC (kg/kWh)", "eta_brake", "eta_mech"],
              rows: [
                ["0", "0.0", "infinite", "0.00", "0.00"],
                ["25", "3.0", "0.42", "0.20", "0.55"],
                ["50", "6.1", "0.30", "0.28", "0.72"],
                ["75", "9.0", "0.26", "0.32", "0.82"],
                ["100", "12.0", "0.28", "0.30", "0.88"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From test data to diagnostic curves",
              caption:
                "Each load point feeds the curve sheet; deviations from the manufacturer data flag wear.",
              stages: [
                { label: "Record N, W, m_fuel, t at each load", note: "8-10 load points, constant speed" },
                { label: "Compute BP, SFC, eta_brake per point", note: "use the formulas of section 2.3" },
                { label: "Plot BP, torque, SFC vs load", note: "single curve sheet, all axes labelled" },
                { label: "Overlay manufacturer curve", note: "same ambient temperature and pressure" },
                { label: "Flag deviations", note: "droop or monotonic rise means injector or governor fault" },
              ],
            },
            callout: {
              type: "tip",
              title: "The SFC dip is the design point",
              body: "The minimum-SFC load point is where the engine is most efficient at converting fuel into work - typically 70 to 85 per cent of full load. Generator sets and tractor engines are sized so that their continuous operating load sits at this minimum-SFC point, which is why a generator rated 10 kW is loaded to about 8 kW in practice.",
            },
            keyTerms: [
              { term: "Volumetric efficiency", definition: "The ratio of the mass of air actually induced to the mass that would fill the swept volume at ambient density." },
              { term: "Relative efficiency", definition: "The ratio of the actual indicated thermal efficiency to the air-standard efficiency of the ideal cycle." },
              { term: "Mechanical efficiency", definition: "The ratio of brake power to indicated power; rises with load because friction power is roughly constant." },
            ],
            examQuestions: [
              {
                q: "State the performance parameters measured in a CI engine test and explain the expected shape of each curve when plotted against load. Define volumetric efficiency and relative efficiency, and describe how the curve shape is used to diagnose injector or governor faults.",
                marks: 7,
                outline: [
                  "List parameters: BP, torque, SFC, eta_brake, eta_mech, eta_vol.",
                  "BP and torque rise with load; SFC falls to a minimum near 80 per cent load then rises slightly.",
                  "Mechanical efficiency rises with load because friction power is roughly constant.",
                  "Volumetric efficiency: m_air_actual / (rho_amb * V_s); falls with engine speed as induction time shortens.",
                  "Relative efficiency: indicated thermal efficiency / air-standard Otto or Diesel efficiency; typically 50-60 per cent.",
                  "Diagnosis: monotonic SFC rise suggests worn injector or pump; torque droop below linear trend means governor cuts fuel early.",
                  "Compare with the manufacturer's curve at the same ambient conditions to decide on overhaul.",
                ],
              },
              {
                q: "At a given load point the induced air mass per cycle is 0.9 of the swept-volume mass at ambient density. State the volumetric efficiency and one reason it is below unity.",
                marks: 3,
              },
              {
                q: "Why does mechanical efficiency rise with load at constant speed?",
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
      title: "Experiments on Thermodynamics and Fluids",
      summary:
        "Thermodynamics and fluids experiments: Boyle's law apparatus, the bomb calorimeter for calorific value, flash and fire point apparatus, the Orsat flue-gas analyser, and the Saybolt/Redwood viscometer.",
      chapter: {
        number: "03",
        title: "Experiments on Thermodynamics and Fluids",
        intro:
          "Unit III surveys five classic instruments. Boyle's law apparatus verifies p V = constant on a mercury-column sample. The bomb calorimeter measures the higher heating value of a fuel at constant volume in oxygen. The Pensky-Martens apparatus finds the flash and fire points. The Orsat apparatus analyses dry flue gas in three absorbent pipettes. The Saybolt or Redwood viscometer measures efflux time and converts it to kinematic viscosity.",
        inOneBreath:
          "Boyle's law: p V = constant for a fixed gas mass at constant temperature, verified on a mercury column; bomb calorimeter: m_fuel * CV = (W + m_water) c_pw delta T, with water equivalent W from benzoic acid; flash point is the lowest temperature giving a vapour flash, fire point sustains 5 seconds; Orsat: KOH absorbs CO2, pyrogallol O2, cuprous chloride CO, residual N2, all on dry basis; Saybolt: 60 ml in t seconds converted to centistokes.",
        sections: [
          {
            number: "3.1",
            title: "Boyle's law apparatus",
            body: [
              "Boyle's law states that for a fixed mass of gas at constant temperature, the pressure times the volume is constant: p V = constant, or equivalently p is inversely proportional to V. The apparatus verifies this law directly: a vertical glass tube contains a mercury column that traps a fixed mass of dry air above it, and a screw-driven reservoir raises or lowers the mercury level to change the pressure on the trapped gas. The pressure is the sum of atmospheric pressure, read from a barometer, and the mercury head, read from a scale beside the tube; the volume is the length of the trapped air column times the bore area, and is read as a length to avoid bore measurement.",
              "Readings are taken at five or more pressures by raising the reservoir in steps, letting the air reach thermal equilibrium with the room for a minute between steps, and recording (p, V) pairs. The product p * V is computed for each pair; for an ideal gas at constant temperature it should be constant within measurement uncertainty. A plot of p against 1/V should be a straight line through the origin, and a plot of log p against log V should be a straight line of slope minus one. Both plots are stronger evidence than the table of products because they expose a systematic trend that a single deviation might hide.",
              "Deviations from Boyle's law appear at high pressures where real gases differ from ideal, and at temperatures near the condensation point where the gas liquefies. For dry air at room temperature and pressures below about 5 bar, the deviation is below one per cent, well within the uncertainty of the apparatus. The chief experimental errors are a wet glass tube, which lets the trapped gas change composition by evaporation; a temperature drift between readings, which violates the constant-temperature assumption; and a parallax in reading the mercury meniscus, which shifts the pressure head. Each error is documented and its magnitude estimated in the report's uncertainty budget, so the law is verified within stated limits rather than claimed as exact.",
            ],
            bullets: [
              "Boyle's law: p V = constant for a fixed mass of gas at constant temperature; p inversely proportional to V.",
              "Apparatus: vertical glass tube, mercury column traps dry air; reservoir sets the pressure head.",
              "Pressure = atmospheric + mercury head; volume read as column length times bore area.",
              "Take 5+ pairs; check p*V constant; plot p vs 1/V (straight line) and log p vs log V (slope -1).",
              "Errors: wet tube, temperature drift, parallax; for dry air below 5 bar deviations are below 1 per cent.",
            ],
            table: {
              caption: "Boyle's law readings on a trapped air column at 25 C.",
              headers: ["p (cm Hg)", "V (cm of column)", "p * V"],
              rows: [
                ["76.0", "10.0", "760"],
                ["86.0", "8.85", "761"],
                ["96.0", "7.92", "761"],
                ["106.0", "7.17", "760"],
                ["116.0", "6.55", "760"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The Boyle's law verification workflow",
              caption:
                "From reservoir position to a log-log check of slope minus one.",
              steps: [
                { label: "Raise reservoir, set pressure", note: "atmospheric + mercury head" },
                { label: "Wait for thermal equilibrium", note: "1 minute between steps" },
                { label: "Read V as column length", note: "bore cancels in the ratio" },
                { label: "Compute p * V per pair", note: "should be constant" },
                { label: "Plot p vs 1/V and log p vs log V", note: "slope -1 confirms the law" },
              ],
            },
            callout: {
              type: "tip",
              title: "Plot the log-log check",
              body: "A constant p*V product can hide a small trend if the errors are random. The log p versus log V plot straightens the inverse relation and shows the slope directly - a slope of minus one within plus or minus 0.05 is far more convincing than five nearly equal products.",
            },
            keyTerms: [
              { term: "Boyle's law", definition: "At constant temperature, the pressure of a fixed mass of gas is inversely proportional to its volume: p V = constant." },
              { term: "Ideal gas", definition: "A gas that obeys p V = m R T exactly; dry air behaves nearly ideally below 5 bar at room temperature." },
              { term: "Parallax error", definition: "A reading error caused by viewing a scale at an angle; eliminated by aligning the eye with the meniscus." },
            ],
            examQuestions: [
              {
                q: "State Boyle's law. Describe the apparatus and the procedure to verify the law for a fixed mass of dry air. Present a set of five readings in a table, show that p*V is constant within experimental error, and state three sources of error with their remedies.",
                marks: 7,
                outline: [
                  "State the law: p inversely proportional to V at constant temperature, so p V = constant.",
                  "Describe the apparatus: vertical glass tube, mercury column, screw-driven reservoir, barometer, scale.",
                  "Procedure: trap a fixed mass of dry air, raise reservoir in five steps, wait for thermal equilibrium, record p and V.",
                  "Tabulate five (p, V) pairs and compute p*V; values should agree within uncertainty.",
                  "Plot p against 1/V - straight line through origin; plot log p vs log V - slope -1.",
                  "Errors: wet tube (dry the tube with a desiccant); temperature drift (allow 1 minute between steps); parallax (read at eye level).",
                  "Conclude the law is verified within the stated uncertainty for dry air below 5 bar.",
                ],
              },
              {
                q: "If p V = 760 units at 76 cm Hg and the pressure is raised to 96 cm Hg, what is the new volume? Assume constant temperature.",
                marks: 3,
              },
              {
                q: "Why is the volume of the trapped air read as a length rather than as a true volume?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Bomb calorimeter for calorific value",
            body: [
              "The bomb calorimeter measures the higher heating value of a solid or liquid fuel by burning a known mass at constant volume in an oxygen atmosphere and measuring the resulting temperature rise of a known mass of water. The apparatus is a thick-walled steel bomb of about 300 ml capacity, charged with oxygen at 25 bar, immersed in a calorimeter vessel containing two litres of water whose temperature is read to a thousandth of a degree by a Beckmann thermometer. A measured mass of fuel, about one gram, is placed in a crucible inside the bomb, ignited by a fused wire, and the temperature of the water is recorded every minute before, during and after the burn until the maximum is reached.",
              "The heat released by the fuel equals the heat absorbed by the water, the bomb, the vessel and the stirrer, collectively expressed through the water equivalent of the calorimeter W. The energy balance is m_fuel * CV = (W + m_water) * c_pw * (T_max - T_initial), where CV is the calorific value of the fuel, m_water is the mass of water in the vessel, c_pw the specific heat of water, and T_max and T_initial the corrected maximum and initial temperatures. The water equivalent W is found separately by burning a fuel of known calorific value, such as benzoic acid, in the same apparatus - a calibration run that establishes the heat capacity of the bomb and vessel once and for all.",
              "The cooling correction is essential because the calorimeter loses heat to the surroundings during the burn. The Dickinson or Regnault-Pfaundler correction extrapolates the cooling rate observed before ignition and after the peak back to the time of ignition, giving a corrected temperature rise that would have been observed in an ideal adiabatic calorimeter. A representative result for diesel gives a higher heating value of about 45 MJ per kg, slightly above the lower heating value quoted in engine tests because the bomb condenses the water vapour produced by combustion and recovers its latent heat. The bomb is rated for a maximum charge and oxygen pressure that must not be exceeded, and the lid bolts are torqued to a set value before each run.",
            ],
            bullets: [
              "Bomb calorimeter measures higher heating value: constant-volume combustion of a known fuel mass in oxygen.",
              "Energy balance: m_fuel * CV = (W + m_water) * c_pw * delta T; W is the water equivalent of the apparatus.",
              "Calibrate W by burning benzoic acid of known CV in the same apparatus.",
              "Apply the Dickinson cooling correction: extrapolate pre- and post-burn cooling rates to the ignition time.",
              "HHV for diesel about 45 MJ/kg; exceeds LHV because the bomb condenses the water vapour.",
            ],
            table: {
              caption: "Bomb calorimeter data for a 1.00 g diesel sample (water equivalent W = 550 g).",
              headers: ["Quantity", "Symbol", "Value", "Unit"],
              rows: [
                ["Fuel mass", "m_fuel", "1.00", "g"],
                ["Water mass", "m_water", "2000", "g"],
                ["Initial temp", "T_initial", "24.500", "C"],
                ["Corrected max", "T_max", "29.820", "C"],
                ["Calorific value", "CV", "44.4", "MJ/kg"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The bomb calorimeter run cycle",
              caption:
                "Calibrate, charge, fire, correct, compute - one full CV determination per cycle.",
              steps: [
                { label: "Calibrate with benzoic acid", note: "find water equivalent W" },
                { label: "Charge fuel and oxygen", note: "1 g fuel, 25 bar O2" },
                { label: "Fire and log temperature", note: "every minute until peak" },
                { label: "Apply cooling correction", note: "Dickinson extrapolation" },
                { label: "Compute CV", note: "(W + m_w) c_pw dT / m_fuel" },
              ],
            },
            callout: {
              type: "warning",
              title: "Pressure rating is non-negotiable",
              body: "The bomb is rated for a maximum oxygen pressure and a maximum fuel charge - typically 25 bar and 1 g of volatile fuel. Exceeding either can split the bomb. Torque the lid bolts to the marked value with a calibrated wrench before each run, and never stand over the bomb during ignition - the safety screen is there for a reason.",
            },
            keyTerms: [
              { term: "Bomb calorimeter", definition: "A constant-volume steel vessel in which a fuel is burnt in oxygen to measure its higher heating value from the temperature rise of a water bath." },
              { term: "Water equivalent", definition: "The mass of water that would absorb the same heat as the bomb, vessel and stirrer together; found by calibration with benzoic acid." },
              { term: "Cooling correction", definition: "A temperature correction, computed by the Dickinson or Regnault-Pfaundler method, that removes the heat leaked to the surroundings during the burn." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of a bomb calorimeter. Derive the expression for the calorific value of a fuel from the observed temperature rise, explain the need for the water equivalent and the cooling correction, and present a representative calculation for a diesel sample.",
                marks: 7,
                outline: [
                  "Describe the apparatus: steel bomb, oxygen at 25 bar, crucible, fused ignition wire, calorimeter vessel, water, Beckmann thermometer.",
                  "Derive m_fuel * CV = (W + m_water) * c_pw * (T_max - T_initial); solve for CV.",
                  "Define water equivalent W and state that it is found by calibration with benzoic acid of known CV.",
                  "Explain the cooling correction: extrapolate pre- and post-burn cooling rates to the ignition time (Dickinson).",
                  "Substitute representative values: 1 g fuel, 2000 g water, W = 550 g, delta T = 5.32 C.",
                  "Compute CV = 2550 * 4.18 * 5.32 / 0.001 = 44.4 MJ/kg.",
                  "Note that the bomb value is the higher heating value, exceeding the LHV by the latent heat of the condensed water vapour.",
                ],
              },
              {
                q: "A 0.8 g sample raises the temperature of 2000 g of water plus 600 g water equivalent by 5.0 C. Find the calorific value in MJ/kg (c_pw = 4.18 kJ/kg-K).",
                marks: 3,
              },
              {
                q: "Why is the calorific value from a bomb calorimeter called the higher heating value?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Flash point and fire point",
            body: [
              "The flash point of a liquid fuel is the lowest temperature at which it gives off enough vapour to form an ignitable mixture with air when a small test flame is passed over the surface; the fire point is the temperature at which the vapour continues to burn for at least five seconds after the test flame is removed. Both are safety properties that decide storage, transport and handling classification - a fuel with flash point above ambient is classed as combustible, while one with flash point below ambient is classed as flammable and must be stored in closed containers away from ignition sources. The Pensky-Martens closed-cup apparatus measures the flash point of diesel and lubricating oil; the Abel apparatus is used for lighter fuels.",
              "The Pensky-Martens apparatus consists of a brass cup holding the test fuel, a closed lid with a shutter, a pivoted test flame of standard size, and a stirrer driven by a motor. The cup is heated at a controlled rate of about 5 to 6 C per minute for fuels above 50 C, and 1 to 2 C per minute near the expected flash point, with the stirrer ensuring uniform temperature. At every degree rise the stirrer is paused, the shutter is opened and the test flame is dipped into the vapour space for one second; the lowest temperature at which a distinct flash is observed is the flash point. The fire point is found by continuing the test until the vapour ignites and burns for five seconds.",
              "Representative values are: petrol flash point -43 C (closed cup, very flammable, must be stored in closed vented cans), diesel flash point 52 to 80 C depending on grade (combustible, safer to handle), kerosene flash point 35 to 65 C, and lubricating oil flash point above 200 C. The flash point constrains engine starting and fuel system safety: a low-flash diesel in a hot engine bay risks vapour lock and fire; a high-flash fuel requires more cranking or a glow plug in cold weather. The flash point also falls sharply when diesel is contaminated with petrol, which is why a flash point test is the standard field check for fuel adulteration.",
            ],
            bullets: [
              "Flash point: lowest temperature giving enough vapour to flash on a test flame; fire point: vapour burns for 5 s.",
              "Pensky-Martens closed-cup apparatus for diesel and lubricating oil; Abel for lighter fuels.",
              "Heat 5-6 C/min, then 1-2 C/min near the flash point; pause, open shutter, dip test flame every degree.",
              "Petrol flash point -43 C; diesel 52-80 C; kerosene 35-65 C; lubricating oil above 200 C.",
              "Flash point falls sharply when diesel is adulterated with petrol - the standard field check for adulteration.",
            ],
            table: {
              caption: "Flash and fire points of common fuels (closed-cup, indicative).",
              headers: ["Fuel", "Flash point (C)", "Fire point (C)", "Class"],
              rows: [
                ["Petrol", "-43", "-40", "Flammable"],
                ["Kerosene", "40", "45", "Flammable"],
                ["High-speed diesel", "56", "62", "Combustible"],
                ["Light diesel oil", "66", "72", "Combustible"],
                ["Lubricating oil", "210", "225", "Combustible"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the flash-point apparatus",
              caption:
                "Match the cup and heater to the expected flash point range.",
              start: "Expected flash point of the sample",
              branches: [
                { label: "Below room temperature", outcome: "Abel closed-cup apparatus, refrigerated bath", good: true },
                { label: "Room temperature to 100 C", outcome: "Pensky-Martens closed-cup, electric heater", good: true },
                { label: "Above 100 C", outcome: "Cleveland open-cup apparatus", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Never test petrol in a Pensky-Martens",
              body: "The Pensky-Martens heater raises the cup above the flash point of petrol within seconds, and the closed-cup lid can vent a flammable vapour cloud onto the operator. Use the Abel apparatus for low-flash fuels, with the apparatus cooled and the operator behind a screen. Reading a wrong apparatus for the wrong fuel is the classic laboratory accident.",
            },
            keyTerms: [
              { term: "Flash point", definition: "The lowest temperature at which a liquid fuel gives off enough vapour to ignite momentarily when a test flame is passed over its surface." },
              { term: "Fire point", definition: "The temperature at which the vapour above the fuel ignites and burns for at least five seconds after the test flame is removed." },
              { term: "Closed-cup apparatus", definition: "A flash-point tester with a covered cup, such as Pensky-Martens, that measures the vapour-air mixture formed in a confined space." },
            ],
            examQuestions: [
              {
                q: "Define flash point and fire point. Describe the construction and working of the Pensky-Martens closed-cup apparatus, explain the heating procedure, and present the flash and fire points of petrol, kerosene, diesel and lubricating oil with their classification.",
                marks: 7,
                outline: [
                  "Define flash point (instant flash) and fire point (5-second sustained burn).",
                  "State that both are safety classifications, not performance parameters.",
                  "Describe the Pensky-Martens: brass cup, closed lid with shutter, pivoted test flame, motorised stirrer, controlled heater.",
                  "Procedure: heat at 5-6 C/min, then 1-2 C/min near the flash; pause stirrer, dip flame each degree.",
                  "Fire point: continue heating until vapour burns 5 s after flame removal.",
                  "Tabulate: petrol -43 C, kerosene 40 C, diesel 56 C, lubricating oil 210 C; class flammable vs combustible.",
                  "Note adulteration check: petrol in diesel lowers flash point sharply, the standard field test.",
                ],
              },
              {
                q: "Distinguish between flash point and fire point. Why is petrol classed as flammable and diesel as combustible?",
                marks: 3,
              },
              {
                q: "A diesel sample is suspected of adulteration with petrol. Which test would confirm this, and how?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Orsat apparatus for flue gas analysis",
            body: [
              "The Orsat apparatus measures the volumetric composition of dry flue gas from a boiler or engine exhaust, reporting the percentages of carbon dioxide, oxygen and the remainder taken as carbon monoxide plus nitrogen. Three pipettes absorb gases in turn: a potassium hydroxide solution absorbs carbon dioxide, an alkaline pyrogallol solution absorbs oxygen (and also carbon dioxide, hence the order matters), and a cuprous chloride solution in hydrochloric acid absorbs carbon monoxide. A graduated burette of 100 ml capacity, water-jacketed for temperature stability, holds the sample; after each absorption the residual volume is read, and the difference gives the volume of the absorbed component as a percentage of the original sample.",
              "The procedure begins by drawing a 100 ml sample of flue gas through a water-aspirator into the burette, with the gas first passing through a drying tube to remove water vapour so the analysis is on a dry basis. The three-way stopcock is then set to connect the burette to the first pipette, the gas is pushed back and forth through the absorbent several times by raising and lowering a levelling bottle, and the residual volume is read at constant pressure by levelling the water in the bottle and the burette. The same sequence is repeated for the second and third pipettes, with each absorption taking three to five minutes for completion; the residual after all three is reported as nitrogen by difference.",
              "The Orsat result diagnoses combustion quality. A high carbon dioxide reading, near 15 per cent for natural gas and 12 per cent for diesel, indicates efficient combustion with low excess air; a high oxygen reading indicates too much excess air, which carries heat up the stack and reduces boiler efficiency; a carbon monoxide reading above 0.5 per cent indicates incomplete combustion, usually from insufficient air or poor mixing, and calls for burner adjustment. The flue gas loss in a boiler is computed from the CO2 reading and the exhaust temperature using the Siegert formula, and the Orsat is the standard instrument for the periodic efficiency check of every boiler in service.",
            ],
            bullets: [
              "Orsat: volumetric analysis of dry flue gas for CO2, O2, CO + N2 by difference, in 100 ml sample.",
              "Three pipettes: KOH absorbs CO2, alkaline pyrogallol absorbs O2, cuprous chloride absorbs CO.",
              "Order matters: pyrogallol also absorbs CO2, so absorb CO2 first; sample dried before analysis.",
              "Pass gas back and forth through the absorbent 3-5 min; read residual at constant pressure.",
              "Diagnosis: high CO2 = efficient; high O2 = excess air; CO above 0.5 per cent = incomplete combustion.",
            ],
            table: {
              caption: "Orsat readings on three boiler exhausts.",
              headers: ["Sample", "CO2 (%)", "O2 (%)", "CO (%)", "N2 (%)", "Verdict"],
              rows: [
                ["A", "12.5", "3.0", "0.1", "84.4", "good combustion"],
                ["B", "9.0", "8.5", "0.2", "82.3", "excess air high"],
                ["C", "10.0", "5.0", "1.5", "83.5", "incomplete burn"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Orsat absorption sequence",
              caption:
                "Top layer is the dry flue gas sample; each lower layer removes one component.",
              layers: [
                { label: "100 ml dry flue gas sample", note: "CO2 + O2 + CO + N2" },
                { label: "Pass through KOH pipette", note: "absorbs CO2; read residual R1" },
                { label: "Pass through pyrogallol pipette", note: "absorbs O2; read residual R2" },
                { label: "Pass through cuprous chloride pipette", note: "absorbs CO; residual = N2" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always quote on a dry basis",
              body: "The Orsat sample is dried before analysis, so its percentages are on a dry basis - water vapour is excluded. Examiners deduct marks if a candidate mixes dry and wet basis percentages. State explicitly that the result is dry-basis and note that the wet-basis CO2 would be lower by the water-vapour fraction.",
            },
            keyTerms: [
              { term: "Orsat apparatus", definition: "A volumetric flue-gas analyser using three absorbent pipettes to measure CO2, O2 and CO on a dry basis." },
              { term: "Pyrogallol", definition: "An alkaline solution that absorbs oxygen; also absorbs CO2, so CO2 must be removed first." },
              { term: "Dry basis", definition: "A flue-gas analysis with water vapour removed from the sample; the standard basis for Orsat and boiler efficiency work." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of the Orsat apparatus for the analysis of dry flue gas. Name the three absorbents and the gas each absorbs, justify the order in which they are used, and explain how the analysis diagnoses boiler combustion quality.",
                marks: 7,
                outline: [
                  "Describe the apparatus: 100 ml graduated burette, water jacket, three pipettes, levelling bottle, three-way stopcock.",
                  "Name absorbents: KOH for CO2; alkaline pyrogallol for O2; cuprous chloride in HCl for CO.",
                  "Justify order: pyrogallol absorbs CO2 as well, so remove CO2 first; cuprous chloride is slow and used last.",
                  "Procedure: draw 100 ml through a drier, level pressure, pass sample through pipette 1, read residual, repeat for 2 and 3.",
                  "Report CO2 = 100 - R1, O2 = R1 - R2, CO = R2 - R3, N2 = R3, all on dry basis.",
                  "Diagnosis: high CO2 = good; high O2 = excess air; CO above 0.5 per cent = incomplete combustion.",
                  "Note that flue-gas loss is computed from CO2 reading and exhaust temperature by the Siegert formula.",
                ],
              },
              {
                q: "A 100 ml flue gas sample gives residual volumes of 87 ml after KOH, 80 ml after pyrogallol and 79 ml after cuprous chloride. Find CO2, O2, CO and N2 percentages.",
                marks: 3,
              },
              {
                q: "Why is the sample dried before it enters the Orsat burette?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Viscometer - Saybolt and Redwood",
            body: [
              "A viscometer measures the kinematic viscosity of a liquid, the resistance to flow under gravity, expressed in stokes or centistokes. The Saybolt and Redwood viscometers are efflux-type instruments: a cup of standard volume holds the oil at a controlled temperature, a calibrated orifice at the bottom is opened, and the time for 60 ml (Saybolt) or 50 ml (Redwood) to flow into a receiving flask is recorded. The flow time in seconds is converted to viscosity through empirical formulas - Saybolt seconds converted to centistokes by nu = 0.22 times seconds minus 180 divided by seconds, and Redwood seconds by a similar expression - and the oil grade is reported by its Saybolt or Redwood number at a standard temperature.",
              "The apparatus consists of an oil cup with a calibrated outflow tube, a bath with a stirrer and an electric heater to hold the cup at the test temperature, a thermometer in the oil and another in the bath, and a receiving flask marked at the effluent volume. The cup is filled with the oil, the bath is brought to the standard temperature - 40 C, 50 C, 100 C or 210 F depending on the grade - and after ten minutes of equilibration the cork is pulled and the stopwatch started. The efflux time is recorded to the nearest 0.1 second, and the test is repeated twice to average out timing scatter.",
              "Viscosity grades are the chief specification of a lubricating oil: an SAE 30 oil at 100 C has a kinematic viscosity of about 10 cSt; an SAE 40 about 13 cSt; an SAE 50 about 17 cSt. The viscosity index, computed from viscosities at 40 C and 100 C, measures how little the viscosity changes with temperature - a high index means a stable oil suitable for wide temperature ranges. The Saybolt and Redwood instruments have been largely replaced by the kinematic capillary viscometer in modern specifications, but they remain the standard test in the field because they need no calibration and produce a single, unambiguous number that a technician can compare with the oil grade printed on the drum.",
            ],
            bullets: [
              "Saybolt and Redwood viscometers measure efflux time of a standard oil volume at controlled temperature.",
              "Saybolt: 60 ml; Redwood: 50 ml; convert seconds to centistokes by empirical formulas.",
              "Apparatus: oil cup with calibrated orifice, bath with heater and stirrer, thermometer in oil and bath, receiving flask.",
              "Hold the oil at 40, 50, 100 C (or 210 F) for 10 min before pulling the cork; record efflux to 0.1 s.",
              "SAE 30 about 10 cSt at 100 C; SAE 40 about 13 cSt; viscosity index measures temperature stability.",
            ],
            table: {
              caption: "Efflux times and kinematic viscosities for three engine oils at 100 C.",
              headers: ["Oil grade", "Saybolt seconds", "Redwood seconds", "Viscosity (cSt)"],
              rows: [
                ["SAE 20", "60", "55", "5.6"],
                ["SAE 30", "110", "100", "10.0"],
                ["SAE 40", "143", "130", "13.0"],
                ["SAE 50", "186", "170", "17.0"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Selecting a viscometer by oil and temperature",
              caption:
                "Match the instrument to the oil grade and test temperature range.",
              axes: { x: "Light oil -> Heavy oil", y: "Low temperature -> High temperature" },
              quadrants: [
                { label: "Saybolt Universal, low temp", note: "light oils at 40 C; SAE 20 and below" },
                { label: "Saybolt Furol, high temp", note: "heavy fuel oils at 50 C and above" },
                { label: "Redwood No. 1, low temp", note: "light oils and kerosene at 30-50 C" },
                { label: "Redwood No. 2, high temp", note: "gear oils at 100 C and above" },
              ],
            },
            callout: {
              type: "tip",
              title: "Equilibrate before you pull the cork",
              body: "The efflux time depends steeply on temperature - one degree of drift can shift the Saybolt reading by several per cent. Always wait ten minutes after the bath reaches the set point so the oil in the cup is at the same temperature as the bath, and verify with the cup thermometer, not the bath thermometer.",
            },
            keyTerms: [
              { term: "Kinematic viscosity", definition: "The resistance of a fluid to flow under gravity, the ratio of dynamic viscosity to density, in stokes or centistokes." },
              { term: "Saybolt universal seconds", definition: "The time for 60 ml of oil to flow through the Saybolt orifice at a standard temperature; converted to centistokes empirically." },
              { term: "Viscosity index", definition: "A dimensionless number expressing the change of viscosity with temperature, computed from viscosities at 40 C and 100 C; higher is more stable." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of a Saybolt or Redwood viscometer. Explain how the efflux time is converted to kinematic viscosity, state the standard test temperatures, and discuss the significance of viscosity index for a lubricating oil.",
                marks: 7,
                outline: [
                  "Describe the apparatus: oil cup with calibrated orifice, bath with heater and stirrer, two thermometers, receiving flask.",
                  "Procedure: fill cup, bring bath to set temperature, equilibrate 10 min, pull cork, time efflux of 60 ml (Saybolt) or 50 ml (Redwood).",
                  "Convert Saybolt seconds to cSt by nu = 0.22 * t - 180 / t; give the analogous Redwood formula.",
                  "State standard temperatures: 40, 50, 100 C and 210 F, chosen by oil grade.",
                  "Quote typical values: SAE 30 about 10 cSt, SAE 40 about 13 cSt at 100 C.",
                  "Define viscosity index: computed from viscosity at 40 C and 100 C; higher means less temperature sensitivity.",
                  "Note that the Saybolt/Redwood numbers are field specifications; capillary viscometers are the modern lab standard.",
                ],
              },
              {
                q: "An oil gives 110 Saybolt seconds at 100 C. Convert this to centistokes using nu = 0.22 t - 180/t and identify a likely SAE grade.",
                marks: 3,
              },
              {
                q: "Why is the oil allowed ten minutes of equilibration before the cork is pulled?",
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
      title: "Experiments on Steam and Refrigeration",
      summary:
        "Steam and refrigeration experiments: throttling and separating calorimeters for steam dryness, the vapour compression refrigeration test rig, COP and second-law efficiency, and condenser/evaporator heat transfer.",
      chapter: {
        number: "04",
        title: "Experiments on Steam and Refrigeration",
        intro:
          "Unit IV covers the steam-side and the refrigeration-side of the lab. The throttling and separating calorimeters recover the dryness fraction of wet steam. The vapour compression refrigeration rig plots the four-state cycle on a p-h diagram. The COP analysis compares the actual to the Carnot limit. And the condenser and evaporator heat transfer measurements establish the overall heat-transfer coefficient U through Q = U A LMTD.",
        inOneBreath:
          "Dryness fraction x is the mass fraction of vapour in wet steam; throttling calorimeter uses h1 = h2 to give x = (h2 - h_f1) / h_fg1; separating calorimeter weighs the water removed; combined gives x = x1 * x2; vapour compression cycle: compressor, condenser, expansion, evaporator on a p-h diagram; COP = (h1 - h4) / (h2 - h1); Carnot COP = T_c / (T_h - T_c); heat exchangers: Q = U A LMTD.",
        sections: [
          {
            number: "4.1",
            title: "Throttling calorimeter and steam dryness",
            body: [
              "Wet steam from a boiler is a mixture of saturated water and saturated vapour; the dryness fraction x is the mass fraction of vapour, ranging from 0 (all water) to 1 (dry saturated steam). The throttling calorimeter estimates x by expanding a sample of wet steam through an orifice into a chamber at lower pressure, where the enthalpy before and after throttling is the same because throttling is a constant-enthalpy process. If the steam is initially wet at pressure p1 with dryness x, its enthalpy is h1 = h_f1 + x * h_fg1; after throttling to a low pressure p2 where it becomes superheated at temperature T2, its enthalpy h2 is read from superheated steam tables.",
              "Equating h1 = h2 gives x = (h2 - h_f1) / h_fg1, with all properties read at the respective pressures. The chamber pressure p2 and temperature T2 are measured with a pressure gauge and a thermocouple; the upstream pressure p1 is read at the sampling point; the saturation properties h_f1 and h_fg1 are read from saturated steam tables at p1. The method fails when the steam is too wet, because the throttled sample may still be wet at p2 - then it is not superheated and h2 cannot be read from the superheat table. The separating calorimeter, which mechanically separates the water from the vapour and weighs each, is then used in series to handle the wetter end.",
              "In a combined separating-and-throttling calorimeter, the wet steam first passes through a separating chamber where most of the free water is removed and weighed, then through the throttle to the superheat chamber. The dryness after the separator, x1, is computed from the mass of separated water and the mass of steam that continues; the dryness after the throttle, x2, is computed from the enthalpy balance as above; and the original dryness is the product x = x1 * x2. This combination handles the full range of wetness from x = 0.5 to x = 1 with an accuracy of about one per cent, which is sufficient for boiler acceptance tests and for routine checks on steam main condition.",
            ],
            bullets: [
              "Dryness fraction x: mass fraction of vapour in wet steam, 0 (all water) to 1 (dry saturated).",
              "Throttling: constant-enthalpy expansion through an orifice; wet steam becomes superheated at lower pressure.",
              "x = (h2 - h_f1) / h_fg1, where h2 is read from superheat tables at p2, T2.",
              "Fails when steam is too wet (still wet after throttle); use a separating calorimeter in series.",
              "Combined separator + throttle: x = x1 * x2; handles x from 0.5 to 1 with about 1 per cent accuracy.",
            ],
            table: {
              caption: "Throttling calorimeter computation for steam at 8 bar (x measured about 0.965).",
              headers: ["State", "p (bar)", "T (C)", "h (kJ/kg)"],
              rows: [
                ["1 wet upstream", "8.0", "170 sat", "721 + x * 2048"],
                ["2 superheated down", "1.0", "110", "2696 (superheat table)"],
                ["Balance h1 = h2", "-", "-", "721 + x * 2048 = 2696"],
                ["Solved x", "-", "-", "0.965"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Throttling calorimeter workflow",
              caption:
                "Sample, throttle, measure, look up, solve - five stages to a dryness fraction.",
              stages: [
                { label: "Sample wet steam at p1", note: "from the steam main via an insulated probe" },
                { label: "Throttle through orifice", note: "to a low pressure p2" },
                { label: "Measure p2 and T2", note: "gauge plus thermocouple" },
                { label: "Read h2 from superheat table", note: "interpolate if needed" },
                { label: "Solve x = (h2 - h_f1) / h_fg1", note: "saturated properties at p1" },
              ],
            },
            callout: {
              type: "warning",
              title: "The throttle fails on very wet steam",
              body: "If the throttled sample is still wet at p2 - that is, if T2 reads no more than T_sat at p2 - the method has failed because h2 cannot be read from the superheat table. Fit a separating calorimeter upstream of the throttle, or take the sample closer to the boiler outlet where the steam is drier.",
            },
            keyTerms: [
              { term: "Dryness fraction", definition: "The mass fraction of vapour in a wet steam mixture, x = m_vapour / (m_vapour + m_liquid), ranging from 0 to 1." },
              { term: "Throttling", definition: "A constant-enthalpy expansion through a restriction, used to estimate steam dryness from the post-throttle superheat." },
              { term: "Separating calorimeter", definition: "A chamber that mechanically separates water from vapour in wet steam and weighs each, used in series with a throttling calorimeter for very wet steam." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of the throttling calorimeter for measuring the dryness fraction of wet steam. Derive the expression x = (h2 - h_f1) / h_fg1, state when the method fails, and describe how a combined separating-and-throttling calorimeter extends the measurable range.",
                marks: 7,
                outline: [
                  "Define dryness fraction x and the enthalpy of wet steam h1 = h_f1 + x * h_fg1.",
                  "State that throttling is a constant-enthalpy process: h1 = h2.",
                  "After throttling to a low pressure p2 the steam becomes superheated at T2; read h2 from superheat tables.",
                  "Equate and solve: x = (h2 - h_f1) / h_fg1, with h_f1, h_fg1 from saturated tables at p1.",
                  "Failure: if the throttled sample is still wet at p2 (T2 <= T_sat at p2), h2 cannot be read from superheat table.",
                  "Combined separator + throttle: separator removes free water, weighs it; x1 from separator, x2 from throttle; overall x = x1 * x2.",
                  "State the accuracy of about 1 per cent and the range x = 0.5 to 1 handled by the combined unit.",
                ],
              },
              {
                q: "Steam at 8 bar is throttled to 1 bar and 110 C. Given h_f1 = 721 kJ/kg, h_fg1 = 2048 kJ/kg and h2 = 2696 kJ/kg, find the dryness fraction.",
                marks: 3,
              },
              {
                q: "Why does the throttling calorimeter fail for very wet steam?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Dryness fraction by separating calorimeter",
            body: [
              "The separating calorimeter is a mechanical device that removes the water droplets from a wet steam sample, weighs the separated water, and weighs or condenses the vapour that passes through, so that the dryness fraction follows directly as x = m_vapour / (m_vapour + m_water). The apparatus is a vertical steel chamber with an inner perforated funnel: the steam enters tangentially at the top, swirls around the chamber, and the water droplets, being heavier, are flung to the wall by centrifugal action and drain into a calibrated catch pot at the bottom; the vapour leaves through the central outlet, is condensed in a separate coil, and the condensate is collected and weighed.",
              "The dryness after the separator, x1, is the mass of vapour that passes through divided by the total mass of steam that entered; it is the dryness of the steam at the separator outlet, not at the boiler. Because the separator does not remove all the water - some droplets remain entrained in the vapour - the dryness measured by the separator alone is always an overestimate of the true dryness. A throttling calorimeter downstream measures the dryness of the vapour leaving the separator, x2, and the true upstream dryness is x = x1 * x2, the product of the two. This combined setup is the standard for boiler acceptance tests.",
              "The test runs for a fixed time, typically ten minutes, during which the steam main is sampled at a steady rate; the mass of water collected in the catch pot and the mass of condensate collected from the downstream coil are recorded. The sampling rate is held low - a few kilograms per hour - so the steam main is not disturbed and the separator works in its design range. The catch pot is drained before the test and read after; the condensate is collected in a tared flask weighed on a balance to the nearest gram. The reported dryness is the product x1 * x2 with an uncertainty budget that combines the timing, the weighing and the thermocouple errors of the throttle.",
            ],
            bullets: [
              "Separating calorimeter: tangential swirl flings water droplets to the wall; vapour leaves centrally.",
              "Dryness after separator x1 = m_vapour / (m_vapour + m_water); it overestimates true dryness.",
              "Some droplets remain entrained; downstream throttle measures x2 of the vapour leaving.",
              "True dryness x = x1 * x2; combined separator + throttle is standard for boiler acceptance.",
              "Run for 10 min at a few kg/h; weigh separated water and condensate; combine timing and weighing errors.",
            ],
            table: {
              caption: "Separating and throttling calorimeter readings on a 10-bar steam main.",
              headers: ["Measurement", "Value", "Unit"],
              rows: [
                ["Water separated, m_w", "0.18", "kg"],
                ["Condensate from throttle, m_v", "2.40", "kg"],
                ["x1 (separator)", "0.930", "-"],
                ["x2 (throttle, measured)", "0.985", "-"],
                ["x = x1 * x2", "0.916", "-"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a dryness-fraction method",
              caption:
                "Match the instrument to the expected dryness range.",
              start: "Expected dryness of the steam sample",
              branches: [
                { label: "x above 0.95", outcome: "Throttling calorimeter alone is sufficient", good: true },
                { label: "x between 0.85 and 0.95", outcome: "Combined separator + throttle", good: true },
                { label: "x below 0.85", outcome: "Separating calorimeter plus preheater", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "State which dryness you quote",
              body: "The separator measures x1 (after the separator, overestimate), the throttle measures x2 (also after the separator), and the true boiler dryness is x = x1 * x2. Examiners deduct marks when a candidate writes 'x = 0.93' without stating whether it is x1, x2 or the product. Always label the quantity.",
            },
            keyTerms: [
              { term: "Separating calorimeter", definition: "A mechanical chamber that removes water droplets from wet steam by centrifugal action and weighs them." },
              { term: "Dryness after separator", definition: "The ratio of vapour mass leaving the separator to total steam entering; an overestimate of true dryness." },
              { term: "Combined calorimeter", definition: "A separating calorimeter followed by a throttling calorimeter, giving true dryness as x = x1 * x2." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of a separating calorimeter. Explain why the dryness measured by the separator alone overestimates the true dryness, and show how a combined separating-and-throttling calorimeter gives the true value. Present a calculation with sample readings.",
                marks: 7,
                outline: [
                  "Describe the apparatus: tangential steam entry, swirl chamber, perforated inner funnel, calibrated catch pot.",
                  "Working: steam enters tangentially, water droplets flung to wall by centrifugal action, drain into catch pot.",
                  "Vapour leaves centrally; condensate collected downstream and weighed.",
                  "Compute x1 = m_v / (m_v + m_w); state that some droplets remain entrained so x1 overestimates.",
                  "Throttle downstream measures x2 of the vapour leaving the separator.",
                  "True dryness x = x1 * x2; substitute sample values x1 = 0.930, x2 = 0.985, x = 0.916.",
                  "Note this is the boiler-acceptance standard; quote uncertainty from timing, weighing and thermocouple.",
                ],
              },
              {
                q: "A separator collects 0.2 kg water and the downstream throttle measures x2 = 0.98 with 2.5 kg condensate. Compute x1 and x.",
                marks: 3,
              },
              {
                q: "Why does the separating calorimeter alone overestimate the dryness fraction?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Vapour compression refrigeration test rig",
            body: [
              "The vapour compression refrigeration cycle is the working cycle of every domestic refrigerator, air conditioner and cold-store plant. The test rig comprises four components connected in a closed loop: an electrically driven reciprocating compressor, an air-cooled finned condenser, an expansion device usually a capillary tube or thermostatic expansion valve, and an evaporator coil immersed in a chilled-water bath or fitted in a small insulated chamber. Pressure gauges and thermocouples are fitted at the compressor inlet and outlet, before and after the condenser, and before and after the expansion device, so the state of the refrigerant at every point of the cycle can be plotted on a p-h diagram.",
              "The cycle on a p-h diagram traces four processes. The compressor raises the low-pressure superheated vapour from the evaporator pressure to the condenser pressure along a constant-entropy line; the condenser rejects heat at constant pressure, first desuperheating then condensing then possibly subcooling the liquid; the expansion device throttles the high-pressure liquid to the low evaporator pressure at constant enthalpy, producing a wet mixture; the evaporator absorbs heat from the cooled space at constant pressure, boiling the refrigerant back to a dry or slightly superheated vapour. The refrigeration effect is the enthalpy rise across the evaporator, q_e = h1 - h4; the work input is the enthalpy rise across the compressor, w_c = h2 - h1.",
              "The coefficient of performance, COP = refrigeration effect / work input = (h1 - h4) / (h2 - h1), is the key performance number, typically 3 to 5 for a domestic refrigerator and 4 to 6 for an air conditioner. The test rig measures the refrigeration effect electrically by the heat input to a small heater in the chilled-water bath that balances the cooling load, and the compressor work electrically by a wattmeter on the motor. The two readings plus the p-h diagram give an energy balance that should close within five per cent; a larger gap indicates refrigerant leakage, faulty gauges, or insufficient subcooling before the expansion device.",
            ],
            bullets: [
              "Four components: compressor, condenser, expansion device (capillary or TXV), evaporator, in a closed loop.",
              "p-h diagram: constant-entropy compression, constant-pressure heat rejection, constant-enthalpy throttle, constant-pressure evaporation.",
              "Refrigeration effect q_e = h1 - h4; compressor work w_c = h2 - h1.",
              "COP = (h1 - h4) / (h2 - h1); typically 3-5 for a refrigerator, 4-6 for an air conditioner.",
              "Measure q_e by an electric heater balancing the load; w_c by a wattmeter; energy balance closes within 5 per cent.",
            ],
            table: {
              caption: "State points and properties for an R-134a refrigeration cycle.",
              headers: ["Point", "State", "p (bar)", "T (C)", "h (kJ/kg)"],
              rows: [
                ["1", "superheated vapour", "1.2", "0", "240"],
                ["2", "superheated vapour", "9.0", "60", "285"],
                ["3", "subcooled liquid", "9.0", "35", "100"],
                ["4", "wet mixture", "1.2", "-20", "100"],
                ["COP", "(h1 - h4) / (h2 - h1)", "-", "-", "3.11"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The vapour compression refrigeration cycle",
              caption:
                "Four components in a closed loop, drawn on a p-h diagram.",
              steps: [
                { label: "Compressor (1 to 2)", note: "constant-entropy compression, w_c = h2 - h1" },
                { label: "Condenser (2 to 3)", note: "constant-pressure heat rejection to ambient" },
                { label: "Expansion (3 to 4)", note: "constant-enthalpy throttle, h3 = h4" },
                { label: "Evaporator (4 to 1)", note: "constant-pressure heat absorption, q_e = h1 - h4" },
              ],
            },
            callout: {
              type: "tip",
              title: "Plot the cycle on a p-h diagram first",
              body: "When solving a refrigeration problem, sketch the p-h diagram with the saturation dome, mark the four state points, then read enthalpies from the refrigerant table. The picture prevents the classic error of confusing h3 (subcooled liquid) with h_g at the condenser pressure, which would underestimate the refrigeration effect.",
            },
            keyTerms: [
              { term: "Vapour compression cycle", definition: "A refrigeration cycle of compression, condensation, throttling and evaporation, drawn as a quadrilateral on a p-h diagram." },
              { term: "Coefficient of performance", definition: "COP = refrigeration effect / compressor work = (h1 - h4) / (h2 - h1); the efficiency metric for refrigerators." },
              { term: "Refrigeration effect", definition: "The heat absorbed per unit mass of refrigerant in the evaporator, q_e = h1 - h4, in kJ/kg." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of a vapour compression refrigeration test rig. Draw the cycle on a p-h diagram, label the four state points, write the expressions for the refrigeration effect, compressor work and coefficient of performance, and present a calculation with typical values.",
                marks: 7,
                outline: [
                  "List the four components: compressor, condenser, expansion device, evaporator; name the refrigerant.",
                  "Sketch the p-h diagram with the saturation dome; mark points 1 (evap outlet), 2 (compressor outlet), 3 (condenser outlet), 4 (evap inlet).",
                  "Process 1-2: constant-entropy compression; 2-3: constant-pressure heat rejection; 3-4: constant-enthalpy throttle; 4-1: constant-pressure evaporation.",
                  "Refrigeration effect q_e = h1 - h4; compressor work w_c = h2 - h1; COP = q_e / w_c.",
                  "Substitute R-134a values: h1 = 240, h2 = 285, h3 = h4 = 100, all in kJ/kg.",
                  "COP = (240 - 100) / (285 - 240) = 140 / 45 = 3.11.",
                  "Describe the test rig measurements: electric heater for q_e, wattmeter for w_c; balance closes within 5 per cent.",
                ],
              },
              {
                q: "A refrigeration cycle has h1 = 240, h2 = 290, h4 = 100 kJ/kg. Find the refrigeration effect, the compressor work and the COP.",
                marks: 3,
              },
              {
                q: "Why is the expansion device in a vapour compression cycle described as a constant-enthalpy throttle?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "COP and refrigeration cycle analysis",
            body: [
              "The coefficient of performance of a refrigeration cycle is the ratio of the useful effect - the heat removed from the cold space - to the cost - the work supplied to the compressor. The standard COP is the refrigerating COP just defined; for a heat pump operated for heating, the COP is the heat delivered to the hot space divided by the compressor work, equal to the refrigerating COP plus one because the heat delivered equals the heat absorbed plus the work input. The Carnot limit gives the maximum possible COP for given cold and hot reservoir temperatures: COP_Carnot = T_cold / (T_hot - T_cold), and the actual COP divided by this Carnot value is the second-law efficiency of the cycle.",
              "The actual COP falls below the Carnot value for several reasons: the compression is not isentropic, with an isentropic efficiency typically 0.7 to 0.8 for small reciprocating compressors; the throttling is irreversible and destroys exergy; the heat exchangers have finite temperature differences so the evaporator runs below the cold space and the condenser above the ambient; and pressure drops in piping and valves reduce the available pressure ratio. Each loss is quantified: the compressor loss by the isentropic efficiency, the throttle loss by the exergy destroyed in the expansion, the heat-exchanger loss by the temperature difference times the entropy generated. A complete cycle analysis reports the COP and the contributions of each loss to the gap from Carnot.",
              "The test rig produces a real cycle whose measured COP is typically 40 to 60 per cent of the Carnot value at the same operating temperatures. Improving the COP is the central engineering task: a larger evaporator or condenser reduces the temperature differences; a liquid-to-suction heat exchanger subcools the liquid before the expansion, raising the refrigeration effect; an electronic expansion valve controls the superheat tightly; a variable-speed compressor matches the capacity to the load. Each improvement is documented in a test report with the COP measured before and after, and the payback period computed from the cost of the modification and the saving in electrical energy over the year.",
            ],
            bullets: [
              "COP = useful effect / work input; refrigerating COP for cooling, heat-pump COP = refrigerating COP + 1.",
              "Carnot COP = T_cold / (T_hot - T_cold); actual COP / Carnot COP = second-law efficiency.",
              "Losses: non-isentropic compression (eta_is = 0.7-0.8), irreversible throttle, heat-exchanger temperature differences.",
              "Real rig COP is 40-60 per cent of Carnot at the same operating temperatures.",
              "Improvements: bigger heat exchangers, liquid-suction heat exchanger, electronic expansion valve, variable-speed compressor.",
            ],
            table: {
              caption: "COP breakdown for an R-134a domestic refrigerator at -10 C cold and 35 C hot.",
              headers: ["Quantity", "Value", "Note"],
              rows: [
                ["Carnot COP", "5.85", "T_c/(T_h-T_c) = 263/45"],
                ["Actual COP", "3.10", "measured on the test rig"],
                ["Second-law efficiency", "0.53", "3.10 / 5.85"],
                ["Compressor isentropic eff.", "0.75", "measured by p-h tracing"],
                ["Exergy destroyed in throttle", "12 kJ/kg", "T_amb * (s4 - s3)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Cycle analysis workflow",
              caption:
                "From state points to a labelled second-law efficiency in five stages.",
              steps: [
                { label: "Measure p, T at four points", note: "compressor, condenser, expansion, evaporator" },
                { label: "Read enthalpies and entropies", note: "from the refrigerant table" },
                { label: "Compute q_e, w_c, COP", note: "first-law quantities" },
                { label: "Compute Carnot COP", note: "from reservoir temperatures" },
                { label: "Report second-law efficiency", note: "actual / Carnot; quantify each loss" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always quote the second-law efficiency",
              body: "Quoting a COP of 3.1 alone is meaningless without the Carnot value for the same temperatures. Examiners want the ratio actual / Carnot - the second-law efficiency - which tells how much of the available exergy was used well. Always compute Carnot COP first, then the actual COP, then the ratio.",
            },
            keyTerms: [
              { term: "Coefficient of performance", definition: "The ratio of useful refrigeration effect to compressor work; the efficiency metric for refrigerators and heat pumps." },
              { term: "Carnot COP", definition: "The maximum possible COP for given cold and hot reservoir temperatures, T_c / (T_h - T_c)." },
              { term: "Second-law efficiency", definition: "The ratio of the actual COP to the Carnot COP for the same reservoir temperatures." },
            ],
            examQuestions: [
              {
                q: "Define the coefficient of performance of a refrigeration cycle and the Carnot limit. Describe the sources of irreversibility in a vapour compression cycle that reduce the actual COP below Carnot. Present a calculation showing the Carnot COP, the actual COP and the second-law efficiency for a domestic refrigerator.",
                marks: 7,
                outline: [
                  "Define COP_refrigerating = q_e / w_c and COP_heat_pump = q_h / w_c = COP_refrigerating + 1.",
                  "State Carnot COP = T_c / (T_h - T_c), with temperatures in kelvin.",
                  "List irreversibilities: non-isentropic compression, throttling, heat-exchanger temperature differences, pressure drops.",
                  "Quantify compressor loss by isentropic efficiency eta_is = (h2s - h1) / (h2 - h1), typically 0.7-0.8.",
                  "Quantify throttle loss by exergy destroyed = T_amb * (s4 - s3).",
                  "Compute Carnot COP for T_c = 263 K, T_h = 308 K: 263 / 45 = 5.85.",
                  "Compute actual COP = 3.10 (measured), second-law efficiency = 3.10 / 5.85 = 0.53.",
                ],
              },
              {
                q: "A refrigerator operates between -10 C and 35 C. Find the Carnot COP. If the actual COP is 3.1, find the second-law efficiency.",
                marks: 3,
              },
              {
                q: "Why is the heat-pump COP equal to the refrigerating COP plus one?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Condenser and evaporator heat transfer",
            body: [
              "The condenser rejects heat from the refrigerant to the ambient; the evaporator absorbs heat from the cooled space into the refrigerant. In a small refrigeration rig both are air-cooled finned-tube coils; in larger plants the condenser may be water-cooled shell-and-tube and the evaporator a flooded coil or a direct-expansion coil in an air-handling unit. The heat-transfer rate of either exchanger is Q = U A LMTD, where U is the overall heat-transfer coefficient, A the outside heat-transfer area, and LMTD the log-mean temperature difference between the refrigerant and the secondary fluid. The test rig measures Q on the secondary side by the air mass flow times the enthalpy rise across the coil, obtained from dry-bulb and wet-bulb thermometers before and after.",
              "On the refrigerant side, the condenser heat is the enthalpy drop from state 2 to state 3, Q_cond = m_ref * (h2 - h3), and the evaporator heat is the enthalpy rise from state 4 to state 1, Q_evap = m_ref * (h1 - h4). These two should equal the secondary-side measurements within the uncertainty budget; a discrepancy means the refrigerant mass flowmeter or the air-side measurement is wrong. The overall heat-transfer coefficient U is computed from the measured Q, the measured A and the LMTD, and compared with textbook correlations for finned-tube coils: a typical air-cooled condenser has U of 30 to 60 W per square metre-K, a direct-expansion evaporator 25 to 50 W per square metre-K.",
              "The evaporator's surface temperature is critical because it must stay above the dew point of the air being cooled if condensation - and the latent load that comes with it - is to be controlled; in an air conditioner the evaporator runs below the dew point deliberately, so moisture condenses on the fins and drains away, dehumidifying the air. The condenser surface must stay cool enough to reject heat at the design ambient temperature, which constrains the size and the fan duty. Fouling on either coil - dust on the condenser, frost on the evaporator - reduces U sharply, so the test rig is also used to measure the COP loss when the coils are dirty, the standard demonstration of why filters must be cleaned.",
            ],
            bullets: [
              "Condenser rejects Q_cond = m_ref (h2 - h3); evaporator absorbs Q_evap = m_ref (h1 - h4).",
              "Heat exchanger equation Q = U A LMTD; U typically 30-60 W per square metre-K for air-cooled condensers.",
              "Measure Q on the secondary side by air mass flow times enthalpy rise from dry- and wet-bulb temperatures.",
              "Evaporator below dew point dehumidifies; condenser temperature constrained by design ambient.",
              "Fouling - dust on condenser, frost on evaporator - reduces U sharply; the rig measures the COP loss.",
            ],
            table: {
              caption: "Heat-transfer parameters of an air-cooled condenser on the test rig.",
              headers: ["Quantity", "Symbol", "Value", "Unit"],
              rows: [
                ["Heat rejected", "Q", "1.8", "kW"],
                ["Heat-transfer area", "A", "6.0", "m^2"],
                ["LMTD", "delta T_lm", "12.0", "K"],
                ["Overall U", "Q / (A LMTD)", "25", "W/m^2-K"],
                ["Air flow", "m_dot_air", "0.18", "kg/s"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Condenser vs evaporator",
              caption:
                "Two exchangers, opposite heat-flow direction, same Q = U A LMTD form.",
              left: {
                heading: "Condenser",
                items: [
                  "Refrigerant gives up heat (2 to 3)",
                  "Refrigerant condenses at constant pressure",
                  "Secondary fluid warms: air or water",
                  "Surface above ambient temperature",
                  "Q_cond = m_ref (h2 - h3)",
                ],
              },
              right: {
                heading: "Evaporator",
                items: [
                  "Refrigerant picks up heat (4 to 1)",
                  "Refrigerant boils at constant pressure",
                  "Secondary fluid cools: air or brine",
                  "Surface below the cold-space temperature",
                  "Q_evap = m_ref (h1 - h4)",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Frost kills U",
              body: "A 1 mm layer of frost on the evaporator fins can drop U by 25 per cent and COP by 15 per cent. The test rig should demonstrate this: run the cooler at high humidity for an hour, measure the COP loss, then defrost and re-measure. The before-and-after COP is the most persuasive argument for an automatic defrost cycle.",
            },
            keyTerms: [
              { term: "Overall heat-transfer coefficient", definition: "The U in Q = U A LMTD; the conductance per unit area of an exchanger, combining refrigerant-side, wall and air-side resistances." },
              { term: "LMTD", definition: "Log-mean temperature difference, the effective driving temperature difference for a heat exchanger with counter-flow or parallel-flow." },
              { term: "Fouling factor", definition: "An extra thermal resistance added to U to account for dust, frost or scale on a heat exchanger surface; reduces the effective U." },
            ],
            examQuestions: [
              {
                q: "Derive the expression Q = U A LMTD for a heat exchanger and explain how it applies to the condenser and evaporator of a refrigeration test rig. Describe how the heat-transfer rate is measured on both the refrigerant and secondary sides, and how the overall U is obtained. Discuss the effect of fouling on U and COP.",
                marks: 7,
                outline: [
                  "State the exchanger equation Q = U A LMTD, with LMTD defined for counter-flow or parallel-flow.",
                  "Apply to the condenser: refrigerant rejects Q_cond = m_ref (h2 - h3); secondary air warms.",
                  "Apply to the evaporator: refrigerant absorbs Q_evap = m_ref (h1 - h4); secondary air cools.",
                  "Measure Q on the secondary side by m_dot_air * (h_out - h_in) from dry-bulb and wet-bulb thermometers.",
                  "Compute U = Q / (A * LMTD); quote typical values 30-60 W per square metre-K for air-cooled condensers.",
                  "Check that refrigerant-side and air-side Q agree within the uncertainty budget.",
                  "Discuss fouling: dust on condenser, frost on evaporator reduces U and COP; rig measures the loss.",
                ],
              },
              {
                q: "A condenser rejects 1.8 kW over 6 m^2 area with LMTD = 12 K. Find U. If fouling halves U, what is the new heat rejection at the same LMTD?",
                marks: 3,
              },
              {
                q: "Why does a layer of frost on the evaporator reduce the COP of the refrigerator?",
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
      title: "Experiments on Heat Transfer and Mini Project",
      summary:
        "Heat transfer experiments and a mini project: thermal conductivity of metals and insulators, natural and forced convection, parallel and counter flow heat exchangers, the Stefan-Boltzmann apparatus, and a team mini project that ties the term together.",
      chapter: {
        number: "05",
        title: "Experiments on Heat Transfer and Mini Project",
        intro:
          "Unit V closes the lab with the heat-transfer quartet and a capstone. The guarded hot-plate and Lee's disc measure thermal conductivity. The convection rig separates natural from forced convection through Nusselt-Rayleigh and Nusselt-Reynolds correlations. The heat exchanger experiment compares parallel and counter flow through LMTD and effectiveness-NTU. The Stefan-Boltzmann apparatus verifies radiative heat transfer. The mini project gives a team of students a full design-build-test-report cycle.",
        inOneBreath:
          "Thermal conductivity k in q = -k dT/dx; guarded hot-plate k = Q L / (A delta T) with a guard ring for axial heat flow; Lee's disc for poor conductors; convection Q = h A (T_s - T_f) with h from Nu-Re or Nu-Ra correlations; heat exchangers Q = U A LMTD, effectiveness epsilon = Q_actual / Q_max, NTU = U A / C_min; Stefan-Boltzmann Q = sigma A (T_h^4 - T_c^4) for black bodies; mini project lifecycle in six stages from proposal to viva.",
        sections: [
          {
            number: "5.1",
            title: "Thermal conductivity of metal and insulator",
            body: [
              "Thermal conductivity k is the material property that relates heat flux to temperature gradient in steady one-dimensional conduction, q = -k dT/dx; a metal conducts heat readily (k of copper 380, aluminium 200, mild steel 50 W per metre-K) and an insulator resists it (k of asbestos 0.15, glass wool 0.04, expanded polystyrene 0.035 W per metre-K). The guarded hot-plate apparatus measures k of an insulating slab in steady state: an electrically heated central plate is sandwiched between two identical slab samples, with guard heaters around the central plate ensuring that all the heat flows axially through the slabs and none escapes sideways; the steady-state temperatures on the hot and cold faces, the slab thickness, and the electrical power input give k directly.",
              "The formula for the guarded hot-plate is k = Q L / (A delta T), where Q is half the electrical power input (because the central plate feeds two slabs), L is the slab thickness, A the metering area of the central plate, and delta T the steady-state temperature difference between the hot and cold faces. Steady state is reached when the face temperatures do not change over thirty minutes; this can take several hours for thick insulators, and the test is run overnight with the apparatus in a temperature-controlled chamber. For metals, a steady-state axial heat-flow apparatus with a rod heated at one end and cooled at the other gives k from the linear temperature profile along the rod, with thermocouples spaced every few centimetres.",
              "The Lee's disc apparatus is the classical steady-state method for the conductivity of a poor conductor: a thin disc of the material is sandwiched between a steam chest on top and a brass disc of known mass and specific heat below; in steady state the heat conducted through the disc equals the heat lost by the brass disc to the room, and the cooling rate of the brass disc after the steam chest is removed gives the loss coefficient. The formula is k = m c d L / (A dT), where m and c are the mass and specific heat of the brass disc, d the cooling rate at the steady temperature, L the sample thickness, A the sample area and dT the temperature drop across the sample. Each variant of the apparatus yields k within five to ten per cent of the table value.",
            ],
            bullets: [
              "Conductivity k: q = -k dT/dx; metals 50-400 W per metre-K, insulators 0.03-0.2 W per metre-K.",
              "Guarded hot-plate: central heater between two slabs; guard heaters force axial heat flow.",
              "k = Q L / (A delta T), where Q is half the electrical power; steady state when faces hold for 30 min.",
              "Metal rod apparatus: axial flow with thermocouples every few cm; k from the linear temperature gradient.",
              "Lee's disc: steady conduction equals cooling rate of the brass disc; classical method for poor conductors.",
            ],
            table: {
              caption: "Thermal conductivity of common materials at room temperature.",
              headers: ["Material", "k (W/m-K)", "Use", "Apparatus"],
              rows: [
                ["Copper", "380", "heat exchanger tubes", "metal rod"],
                ["Aluminium", "200", "radiator fins", "metal rod"],
                ["Mild steel", "50", "engine block", "metal rod"],
                ["Asbestos", "0.15", "gasket, lagging", "Lee's disc"],
                ["Glass wool", "0.04", "wall insulation", "guarded hot plate"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The guarded hot-plate stack",
              caption:
                "Top layer is the cold plate; the central heater feeds two slabs symmetrically.",
              layers: [
                { label: "Cold plate (top)", note: "cooled by water or air" },
                { label: "Slab sample (top)", note: "thickness L, area A" },
                { label: "Central heater + guard ring", note: "power Q feeds two slabs" },
                { label: "Slab sample (bottom)", note: "mirror of top" },
                { label: "Cold plate (bottom)", note: "cooled symmetrically" },
              ],
            },
            callout: {
              type: "tip",
              title: "Wait for true steady state",
              body: "The conductivity formula assumes steady state - no temperature changes anywhere in the slab. For a 25 mm glass-wool slab this takes three to four hours; reading the temperatures earlier gives a k that is too high because the slab is still warming. Always wait for thirty minutes of unchanging face temperatures before recording.",
            },
            keyTerms: [
              { term: "Thermal conductivity", definition: "The material property in q = -k dT/dx relating steady heat flux to temperature gradient, in W per metre-K." },
              { term: "Guarded hot-plate", definition: "An apparatus with a central heater and guard ring that forces axial heat flow through two slab samples for steady-state k measurement." },
              { term: "Lee's disc", definition: "A classical steady-state apparatus for poor conductors, where conduction through a sample disc equals the cooling loss of a brass disc below." },
            ],
            examQuestions: [
              {
                q: "Define thermal conductivity. Describe the guarded hot-plate apparatus for measuring the conductivity of an insulating slab, derive k = Q L / (A delta T), and explain the role of the guard ring. Outline a separate method for measuring the conductivity of a metal rod.",
                marks: 7,
                outline: [
                  "Define thermal conductivity via Fourier's law q = -k dT/dx; give orders of magnitude for metals and insulators.",
                  "Describe the guarded hot-plate: central electric heater sandwiched between two identical slab samples.",
                  "State the role of the guard ring: ensures all heat from the central plate flows axially, none escapes sideways.",
                  "Derive k = Q L / (A delta T), with Q half the electrical input (two slabs fed), L the thickness, A the metering area.",
                  "Stress steady state: face temperatures unchanging for 30 minutes, often overnight in a temperature-controlled chamber.",
                  "Metal rod method: heat one end, cool the other, measure axial temperature gradient with thermocouples; k from q = -k dT/dx.",
                  "Quote typical k: copper 380, glass wool 0.04 W per metre-K; mention Lee's disc for poor conductors.",
                ],
              },
              {
                q: "A guarded hot plate dissipates 20 W through two 25 mm slabs of area 0.04 m^2 each, with delta T = 40 K. Find k.",
                marks: 3,
              },
              {
                q: "Why is the guard ring essential in the guarded hot-plate apparatus?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Natural convection and forced convection",
            body: [
              "Convection is heat transfer between a solid surface and a moving fluid; the rate is Q = h A (T_s - T_f), where h is the convective heat-transfer coefficient, A the surface area, and T_s, T_f the surface and fluid temperatures. Natural convection is driven by density differences in the fluid caused by the temperature difference itself: air heated by a hot plate rises, drawing cooler air in to replace it, and the convective coefficient for air in natural convection is 5 to 25 W per square metre-K. Forced convection is driven by an external means such as a fan or pump that moves the fluid past the surface, giving coefficients of 25 to 250 for air and 500 to 15 000 for water, because the fluid motion is far stronger.",
              "The classical test rig for natural convection is a vertical electrically heated plate or a horizontal heated wire in still air; the electrical power supplied equals the convective loss plus the radiation loss, and the latter is estimated from the Stefan-Boltzmann law and subtracted to leave the pure convection term. The Nusselt number, Nu = h L / k, correlates with the Rayleigh number, Ra = g beta (T_s - T_f) L^3 / (nu alpha), through empirical relations such as Nu = 0.59 Ra^{1/4} for a vertical plate in the laminar regime, which collapses data from many fluids and many scales onto one line. Forced convection rigs use a wind tunnel with a heated test section, a fan, and an orifice to measure the air velocity.",
              "The forced-convection correlation for flow over a flat plate is Nu = 0.0296 Re^{4/5} Pr^{1/3} in the turbulent regime and Nu = 0.664 Re^{1/2} Pr^{1/3} in the laminar regime, where Re is the Reynolds number and Pr the Prandtl number of the fluid. The test rig measures the convective h directly by the electrical power to the heater, the surface area, and the temperature difference, then plots Nu against Re on a log-log scale to verify the exponent of the correlation. The experiment demonstrates that doubling the air velocity doubles the laminar h but raises the turbulent h by a factor of 1.74, and that a rough surface trips the boundary layer into turbulence earlier, raising h sharply for a small pressure-drop penalty.",
            ],
            bullets: [
              "Newton's law: Q = h A (T_s - T_f); h is the convective heat-transfer coefficient.",
              "Natural convection h in air: 5-25 W per square metre-K; forced convection air 25-250, water 500-15 000.",
              "Nusselt Nu = h L / k; correlates with Rayleigh Ra for natural and Re, Pr for forced convection.",
              "Vertical plate natural: Nu = 0.59 Ra^{1/4} (laminar); forced turbulent: Nu = 0.0296 Re^{4/5} Pr^{1/3}.",
              "Test rig subtracts radiation from the electrical input to isolate pure convection; plot Nu vs Re on log-log.",
            ],
            table: {
              caption: "Convective heat-transfer coefficient ranges.",
              headers: ["Mode", "Fluid", "h (W/m^2-K)", "Typical application"],
              rows: [
                ["Natural", "air", "5-25", "radiator, transistor cooling"],
                ["Forced", "air", "25-250", "fan-cooled heat sink"],
                ["Natural", "water", "100-1000", "immersion heater"],
                ["Forced", "water", "500-15 000", "jacketed vessel, condenser"],
                ["Boiling", "water", "2500-50 000", "evaporator, kettle"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Natural vs forced convection",
              caption:
                "Axes: motion cause (natural to forced) and fluid (air to water).",
              axes: { x: "Natural -> Forced", y: "Air -> Water" },
              quadrants: [
                { label: "Natural, air", note: "h 5-25; radiator, transistor" },
                { label: "Forced, air", note: "h 25-250; fan-cooled heat sink" },
                { label: "Natural, water", note: "h 100-1000; immersion heater" },
                { label: "Forced, water", note: "h 500-15 000; jacketed vessel" },
              ],
            },
            callout: {
              type: "exam",
              title: "Subtract radiation first",
              body: "A heated plate in air loses heat by both convection and radiation; the electrical input is the sum. Estimate the radiation loss by sigma * epsilon * A * (T_s^4 - T_w^4) and subtract it before computing h, otherwise the convective coefficient is inflated by 20-40 per cent at surface temperatures above 100 C.",
            },
            keyTerms: [
              { term: "Convective heat-transfer coefficient", definition: "The h in Newton's law Q = h A (T_s - T_f); the conductance per unit area of the surface-fluid interface." },
              { term: "Nusselt number", definition: "Nu = h L / k; the dimensionless ratio of convective to conductive heat transfer across a layer of thickness L." },
              { term: "Rayleigh number", definition: "Ra = g beta (T_s - T_f) L^3 / (nu alpha); the dimensionless group governing natural convection." },
            ],
            examQuestions: [
              {
                q: "Distinguish between natural and forced convection. State the ranges of the convective heat-transfer coefficient for air and water in both modes. Derive the Nusselt-Rayleigh correlation for a vertical plate in laminar natural convection, and explain the experimental procedure to verify a forced-convection correlation in a wind tunnel.",
                marks: 7,
                outline: [
                  "Define convection by Newton's law Q = h A (T_s - T_f); distinguish natural (buoyancy) and forced (fan or pump).",
                  "Quote h ranges: natural air 5-25; forced air 25-250; forced water 500-15 000 W per square metre-K.",
                  "Define Nusselt Nu = h L / k; Rayleigh Ra = g beta (T_s - T_f) L^3 / (nu alpha).",
                  "State the laminar natural-convection correlation for a vertical plate: Nu = 0.59 Ra^{1/4}.",
                  "State the forced turbulent correlation: Nu = 0.0296 Re^{4/5} Pr^{1/3}.",
                  "Procedure: heat a plate electrically, measure Q_in, T_s, T_f; subtract radiation Q_rad = sigma eps A (T_s^4 - T_w^4); compute h.",
                  "Plot Nu vs Re (or Ra) on log-log; verify the slope matches the correlation exponent.",
                ],
              },
              {
                q: "A 0.1 m^2 plate at 100 C loses 200 W in air at 20 C, with radiation accounting for 50 W. Find the convective h.",
                marks: 3,
              },
              {
                q: "Why is the convective coefficient for water higher than that for air in both natural and forced convection?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Parallel and counter flow heat exchanger",
            body: [
              "A heat exchanger transfers heat from one fluid to another across a solid wall, without mixing. The two basic flow arrangements are parallel flow, in which the hot and cold fluids enter at the same end and move in the same direction, and counter flow, in which they enter at opposite ends and move in opposite directions. In a parallel-flow exchanger the temperature difference between the fluids is largest at the inlet and falls toward the outlet, where both fluids approach a common temperature; in a counter-flow exchanger the cold fluid can leave hotter than the hot fluid leaves, because the two fluids exchange heat across the entire length with a more uniform temperature difference, and the counter-flow arrangement transfers more heat for the same area and mass flows.",
              "The heat transferred is Q = U A LMTD, where the log-mean temperature difference LMTD is defined for parallel flow as ((T_h,in - T_c,in) - (T_h,out - T_c,out)) divided by the natural log of their ratio, and for counter flow as ((T_h,in - T_c,out) - (T_h,out - T_c,in)) divided by the natural log of their ratio. The LMTD captures the fact that the driving temperature difference varies along the exchanger; using the arithmetic mean would overestimate the heat transfer. For the same inlet and outlet temperatures and the same U and A, the counter-flow LMTD exceeds the parallel-flow LMTD, so counter flow is the preferred arrangement whenever the layout permits.",
              "The effectiveness-NTU method is used when one of the outlet temperatures is unknown; effectiveness epsilon = Q_actual / Q_max, where Q_max is the heat that would be transferred if the smaller-heat-capacity fluid underwent the maximum possible temperature change. NTU = U A / C_min is the number of transfer units, a dimensionless size parameter; the effectiveness is a function of NTU and the heat-capacity ratio C_r = C_min / C_max. For a counter-flow exchanger, epsilon = (1 - exp(-(1 - C_r) NTU)) / (1 - C_r exp(-(1 - C_r) NTU)); for parallel flow, epsilon = (1 - exp(-(1 + C_r) NTU)) / (1 + C_r). Counter flow has a higher effectiveness for the same NTU and is the more efficient use of area.",
            ],
            bullets: [
              "Parallel flow: both fluids enter same end, same direction; counter flow: opposite ends, opposite direction.",
              "Counter flow transfers more heat for the same area and mass flows - the preferred arrangement.",
              "Q = U A LMTD; LMTD = (delta T1 - delta T2) / ln(delta T1 / delta T2), with the appropriate end differences.",
              "Effectiveness epsilon = Q_actual / Q_max; NTU = U A / C_min; C_r = C_min / C_max.",
              "Counter-flow epsilon higher than parallel flow for the same NTU; preferred arrangement whenever layout permits.",
            ],
            table: {
              caption: "Comparison of parallel and counter flow for the same U, A and mass flows.",
              headers: ["Quantity", "Parallel flow", "Counter flow"],
              rows: [
                ["LMTD (K)", "30.0", "42.0"],
                ["Heat transferred (kW)", "5.4", "7.6"],
                ["Effectiveness", "0.45", "0.63"],
                ["Cold outlet (C)", "55", "68"],
                ["Hot outlet (C)", "70", "57"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Parallel flow vs counter flow",
              caption:
                "Temperature profiles along the two arrangements - counter flow keeps a higher mean difference.",
              left: {
                heading: "Parallel flow",
                items: [
                  "Both fluids enter at the same end",
                  "Hot and cold flow in the same direction",
                  "Large dT at inlet, small at outlet",
                  "Cold outlet cannot exceed hot outlet",
                  "Lower LMTD for given temperatures",
                ],
              },
              right: {
                heading: "Counter flow",
                items: [
                  "Fluids enter at opposite ends",
                  "Hot and cold flow in opposite directions",
                  "dT more uniform along the length",
                  "Cold outlet can exceed hot outlet",
                  "Higher LMTD; preferred arrangement",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Use LMTD when outlets are known, NTU when not",
              body: "The LMTD method needs all four inlet and outlet temperatures. If only three are known, switch to the effectiveness-NTU method: guess NTU from the geometry, compute epsilon, then back-calculate the missing temperature. Mixing the two methods in one solution is the commonest exam error.",
            },
            keyTerms: [
              { term: "LMTD", definition: "Log-mean temperature difference, the effective driving difference for a heat exchanger; (dT1 - dT2) / ln(dT1/dT2)." },
              { term: "Effectiveness", definition: "The ratio of actual heat transferred to the maximum possible, Q_actual / Q_max; a measure of exchanger utilisation." },
              { term: "NTU", definition: "Number of transfer units, U A / C_min; a dimensionless size parameter of a heat exchanger." },
            ],
            examQuestions: [
              {
                q: "Compare parallel and counter flow heat exchangers. Derive the LMTD expression for each arrangement, explain why counter flow transfers more heat for the same area and mass flows, and outline the effectiveness-NTU method for the case where one outlet temperature is unknown.",
                marks: 7,
                outline: [
                  "Define parallel flow (same end, same direction) and counter flow (opposite ends, opposite direction).",
                  "Write Q = U A LMTD; define LMTD = (dT1 - dT2) / ln(dT1 / dT2).",
                  "Parallel flow: dT1 = T_h,in - T_c,in, dT2 = T_h,out - T_c,out.",
                  "Counter flow: dT1 = T_h,in - T_c,out, dT2 = T_h,out - T_c,in.",
                  "Argue that counter-flow LMTD is larger than parallel for the same terminal temperatures, so Q is larger.",
                  "Define effectiveness epsilon = Q_actual / Q_max and NTU = U A / C_min; give the counter-flow formula.",
                  "State the rule: LMTD when all four temperatures are known, NTU when one is unknown.",
                ],
              },
              {
                q: "A counter-flow exchanger has hot in 90, hot out 60, cold in 25, cold out 55 (all in C). Compute the LMTD.",
                marks: 3,
              },
              {
                q: "Why is counter flow preferred over parallel flow for the same heat duty?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Stefan-Boltzmann apparatus",
            body: [
              "Thermal radiation is heat transfer by electromagnetic waves, requiring no medium; the Stefan-Boltzmann law states that a black body emits power per unit area equal to sigma T^4, where sigma is the Stefan-Boltzmann constant 5.67 times 10 to the minus 8 W per square metre-K^4 and T is the absolute temperature. A real surface emits epsilon times the black-body value, where epsilon is the emissivity (0 to 1). The test rig consists of a blackened circular hot plate electrically heated to a measured temperature, a water-cooled cold plate facing it, and a thermopile or radiometer that measures the heat flux received by the cold plate; the apparatus is in a vacuum or shielded chamber to suppress convection.",
              "The hot plate is brought to a steady temperature - 200 to 600 C is typical - and the heat flux at the cold plate is recorded; the net radiative heat transfer between two infinite parallel grey plates is Q = sigma A (T_h^4 - T_c^4) / (1/epsilon_h + 1/epsilon_c - 1), where epsilon_h and epsilon_c are the emissivities of the hot and cold plates. If both surfaces are nearly black, the denominator approaches one and the formula reduces to the simple Stefan-Boltzmann form. The experiment varies the hot plate temperature and plots the received flux against T_h^4; the slope gives sigma times the geometric and emissivity factor, and a comparison with the standard sigma value verifies the law.",
              "The test rig also measures the emissivity of unknown surfaces: a test disc of the unknown surface is heated to the same temperature as the blackened reference disc, and the radiometer reading for the unknown divided by the reading for the black reference gives the emissivity directly, because the geometry and temperature are identical. This comparison method is far more accurate than an absolute measurement, because the geometric factor and the thermopile calibration cancel in the ratio. The emissivity of polished aluminium is about 0.05, of oxidised steel about 0.7, of paint about 0.9, and of water 0.95 - the data explain why a polished aluminium radiation shield dramatically cuts heat transfer between two surfaces at different temperatures.",
            ],
            bullets: [
              "Stefan-Boltzmann: black body emits sigma T^4; real surface emits epsilon sigma T^4.",
              "sigma = 5.67e-8 W per square metre-K^4; emissivity epsilon ranges from 0 (polished metal) to 1 (black body).",
              "Net exchange between parallel grey plates: Q = sigma A (T_h^4 - T_c^4) / (1/eps_h + 1/eps_c - 1).",
              "Test rig: hot plate in vacuum or shielded chamber, cold plate with radiometer; plot flux vs T^4 to verify.",
              "Emissivity by comparison: heat unknown and black disc to same T; ratio of fluxes is epsilon_unknown.",
            ],
            table: {
              caption: "Emissivity of common surfaces at room temperature.",
              headers: ["Surface", "Emissivity", "Use"],
              rows: [
                ["Polished aluminium", "0.05", "radiation shield"],
                ["Polished copper", "0.04", "vacuum flask"],
                ["Oxidised steel", "0.70", "boiler tube"],
                ["Black paint", "0.95", "radiator finish"],
                ["Water", "0.95", "evaporative cooler"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Radiative exchange between grey plates",
              caption:
                "Top tier is the simplest case; lower tiers generalise.",
              tiers: [
                { label: "Black to black", note: "Q = sigma A (T_h^4 - T_c^4)" },
                { label: "Grey to black", note: "Q = eps_h sigma A (T_h^4 - T_c^4)" },
                { label: "Grey to grey", note: "Q = sigma A (T_h^4 - T_c^4) / (1/eps_h + 1/eps_c - 1)" },
                { label: "Real surfaces, view factor F", note: "Q = sigma A F (T_h^4 - T_c^4)" },
              ],
            },
            callout: {
              type: "warning",
              title: "Shield against convection",
              body: "A hot plate at 400 C in still air loses as much heat by convection as by radiation. The Stefan-Boltzmann apparatus must either run in a vacuum chamber or be fitted with a radiation shield that suppresses convection between the plates. Without this precaution the measured 'radiation' is mostly convection and the slope of flux vs T^4 is meaningless.",
            },
            keyTerms: [
              { term: "Stefan-Boltzmann law", definition: "A black body emits power per unit area sigma T^4, with sigma = 5.67e-8 W per square metre-K^4." },
              { term: "Emissivity", definition: "The ratio of a real surface's radiative emission to that of a black body at the same temperature, ranging from 0 to 1." },
              { term: "Radiometer", definition: "A thermopile-based sensor that measures the radiative heat flux incident on its surface, independent of the source." },
            ],
            examQuestions: [
              {
                q: "State the Stefan-Boltzmann law for black and grey bodies. Describe the construction of the Stefan-Boltzmann apparatus, derive the net radiative exchange between two parallel grey plates, and outline the comparison method to measure the emissivity of an unknown surface.",
                marks: 7,
                outline: [
                  "State sigma T^4 for a black body; epsilon sigma T^4 for a grey body.",
                  "Describe the apparatus: hot blackened plate, water-cooled cold plate, radiometer, shielded chamber or vacuum.",
                  "Derive net exchange: Q = sigma A (T_h^4 - T_c^4) / (1/eps_h + 1/eps_c - 1).",
                  "Reduce to sigma A (T_h^4 - T_c^4) when both surfaces are black.",
                  "Procedure: vary hot plate temperature, record radiometer flux, plot against T_h^4; slope verifies sigma.",
                  "Comparison for emissivity: heat unknown and black disc to same T; ratio of fluxes = epsilon_unknown.",
                  "Quote emissivities: polished aluminium 0.05, oxidised steel 0.7, black paint 0.95; explain radiation shield use.",
                ],
              },
              {
                q: "A black plate at 400 C faces a black plate at 20 C across 0.01 m^2 area. Find the net radiative heat transfer using sigma = 5.67e-8 W per square metre-K^4.",
                marks: 3,
              },
              {
                q: "Why must the Stefan-Boltzmann apparatus be evacuated or shielded from convection?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Mini project",
            body: [
              "The mini project is the capstone of the thermal lab, in which a team of three to four students designs, builds and tests a small thermal device that demonstrates one concept from the syllabus. Representative projects include a thermoelectric generator that converts waste heat from a kerosene lamp into electricity, a solar water heater with a measured efficiency, a Stirling engine running on a tea-light candle, a heat pipe demonstrator showing the transfer of heat from a hot end to a cold end with very low temperature drop, and an energy audit of the laboratory itself that quantifies the heat losses from the boiler, the engine test beds and the refrigeration rigs. The project carries the same weight as a full experiment in the term grade.",
              "The project lifecycle has six stages: the proposal, in which the team states the objective, the apparatus, the expected measurements and the safety plan; the design, with sketches, a bill of materials and a budget; the procurement and assembly, with weekly progress logs; the testing, with at least three runs and an uncertainty estimate on every measurement; the analysis, with results compared against a theoretical prediction; and the report and presentation, with the team defending its work in a viva before the class. The supervisor signs off each stage before the next begins, so the project does not collapse at the end of the term when the apparatus fails to perform - a single stage slipped by two weeks is recoverable; a whole project discovered broken in the last week is not.",
              "The marking rubric is shared with the class at the proposal stage. Originality and the quality of the experimental evidence carry the highest weight; a project that reproduces a textbook experiment with care earns a solid pass, but the high marks go to a team that takes a real problem - a noisy compressor, a leaking steam joint, a cold spot in the workshop - and produces a measured solution. Cost matters: a project built for less than one thousand rupees from scrap and standard components is preferred to an expensive kit. Safety, documentation, the viva and the team's individual contributions complete the rubric; every member must be able to answer questions on any part of the project, not only the part they personally built.",
            ],
            bullets: [
              "Mini project: team of 3-4 designs, builds and tests a small thermal device in six stages.",
              "Six stages: proposal, design, procurement/assembly, testing, analysis, report and viva.",
              "Testing: at least three runs with an uncertainty estimate on every measurement.",
              "Originality and quality of evidence carry the highest weight; cost under 1000 rupees preferred.",
              "Every member defends any part of the project in the viva; safety and documentation complete the rubric.",
            ],
            table: {
              caption: "Six stages of the mini-project lifecycle.",
              headers: ["Stage", "Deliverable", "Sign-off"],
              rows: [
                ["1 Proposal", "Objective, apparatus, measurements, safety plan", "supervisor"],
                ["2 Design", "Sketches, bill of materials, budget", "supervisor"],
                ["3 Assembly", "Procured parts, weekly progress logs", "supervisor"],
                ["4 Testing", "Three runs, uncertainty estimate", "supervisor"],
                ["5 Analysis", "Results vs theory, error discussion", "supervisor"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The mini-project lifecycle",
              caption:
                "Each stage is signed off before the next begins - a slip of one stage is recoverable; a slip of the whole is not.",
              steps: [
                { label: "Proposal", note: "objective, safety plan" },
                { label: "Design", note: "sketches, bill of materials, budget" },
                { label: "Assembly", note: "procurement, weekly logs" },
                { label: "Testing", note: "three runs, uncertainty" },
                { label: "Analysis and report", note: "results vs theory, viva" },
              ],
            },
            callout: {
              type: "exam",
              title: "Plan for failure",
              body: "A mini project that depends on a single part working perfectly on the first try will fail. Always have a fallback: a thermoelectric generator that gives half the predicted power still demonstrates the Seebeck effect; a Stirling engine that runs at half speed still demonstrates the cycle. A measured under-performance with a clear explanation earns more marks than a 'worked perfectly' claim with no data.",
            },
            keyTerms: [
              { term: "Mini project", definition: "A team capstone in the thermal lab in which a small device is designed, built, tested and reported over one semester." },
              { term: "Viva", definition: "An oral defence in which each team member answers questions on any part of the project, not only the part they built." },
              { term: "Marking rubric", definition: "A shared grid listing the criteria - originality, evidence, cost, safety, documentation, viva - and their weights for the project." },
            ],
            examQuestions: [
              {
                q: "Describe the six stages of the mini-project lifecycle in the thermal engineering lab. State the deliverable and the sign-off at each stage, explain why each stage is closed before the next begins, and discuss the marking rubric with emphasis on originality, evidence and safety.",
                marks: 7,
                outline: [
                  "List the six stages: proposal, design, assembly, testing, analysis, report and viva.",
                  "Proposal: objective, apparatus, expected measurements, safety plan; signed off by supervisor.",
                  "Design: sketches, bill of materials, budget; signed off before procurement.",
                  "Assembly: parts procured, weekly logs; signed off before testing.",
                  "Testing: at least three runs, uncertainty estimate on every measurement; signed off before analysis.",
                  "Analysis and report: results compared with theory; viva before the class.",
                  "Argue that closing each stage prevents a terminal failure in the last week; state the rubric weights.",
                ],
              },
              {
                q: "List three suitable mini-project topics for a thermal engineering lab, each demonstrating a different concept from the syllabus.",
                marks: 3,
              },
              {
                q: "Why must every team member be able to answer questions on any part of the project, not only their own?",
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
        "RGPV ME-306 lab papers typically spread the marks across the IC engine performance tests, the refrigeration cycle analysis, and the heat transfer experiments, with instrumentation and the mini project supplying the definitional and viva marks. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Performance test on CI engine: BP, IP, BMEP, SFC, heat balance", weight: "10-14 marks", note: "Almost guaranteed; practise the formula chain and one full heat-balance sheet." },
        { topic: "Vapour compression refrigeration: COP, Carnot limit, second-law efficiency", weight: "8-12 marks", note: "Sketch the p-h diagram, mark four state points, compute COP from enthalpies." },
        { topic: "Throttling and separating calorimeter: dryness fraction", weight: "8-10 marks", note: "Combined separator + throttle; x = x1 * x2 derivation is a standard 7-mark question." },
        { topic: "Heat exchanger LMTD and NTU: parallel and counter flow", weight: "8-10 marks", note: "One LMTD calculation and one effectiveness computation per paper." },
        { topic: "Calorific value by bomb calorimeter: water equivalent, cooling correction", weight: "6-8 marks", note: "Energy balance and Dickinson correction; carry the unit chain." },
        { topic: "Thermal conductivity: guarded hot-plate and Lee's disc", weight: "6-8 marks", note: "Derive k = Q L / (A delta T); explain the guard ring." },
        { topic: "Convection: natural vs forced, Nusselt-Rayleigh, Nusselt-Reynolds", weight: "6-8 marks", note: "Subtract radiation before computing h; one correlation per regime." },
        { topic: "Stefan-Boltzmann law and emissivity measurement", weight: "5-7 marks", note: "Net exchange between grey plates; comparison method for emissivity." },
        { topic: "Morse test on multi-cylinder engine: IP, FP, eta_mech", weight: "5-7 marks", note: "Cut one cylinder, measure BP drop, sum the per-cylinder IP." },
        { topic: "Valve and port timing diagrams; flash and fire points", weight: "4-6 marks", note: "Draw the 720-degree and 360-degree circles; name the apparatus by flash range." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every experiment of the syllabus twice - once for the procedure, once for the calculation - and reserves the final week for full viva practice under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - safety and instrumentation", tasks: ["Safety protocols, PPE selection, report format", "Calibration of pressure gauge and thermometer", "Uncertainty propagation - root-sum-square on BP and q_e"] },
        { week: "Week 2", focus: "Unit II - IC engines", tasks: ["Morse test: cut each cylinder, compute IP and eta_mech", "Valve and port timing diagrams on the flywheel", "Performance test: BP, IP, BMEP, SFC; one heat-balance sheet"] },
        { week: "Week 3", focus: "Unit III - thermodynamics and fluids", tasks: ["Boyle's law: 5 pairs, plot p vs 1/V and log p vs log V", "Bomb calorimeter: water equivalent with benzoic acid, then a diesel sample", "Orsat apparatus; Saybolt viscometer at 100 C"] },
        { week: "Week 4", focus: "Unit IV - steam and refrigeration", tasks: ["Throttling and separating calorimeter: x = x1 * x2", "Vapour compression rig: four state points, p-h diagram, COP", "Condenser and evaporator heat transfer: U A LMTD"] },
        { week: "Week 5", focus: "Unit V - heat transfer and project", tasks: ["Thermal conductivity: guarded hot-plate and Lee's disc", "Convection and heat exchanger: parallel vs counter, LMTD and NTU", "Stefan-Boltzmann; begin mini-project assembly"] },
        { week: "Week 6", focus: "Full revision and viva", tasks: ["Two full viva mocks with a partner", "Re-derive every formula on one A4 sheet", "Walk every apparatus from memory; finalise the project report"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Carry a single A4 sheet with the ten formula chains: BP, IP, BMEP, SFC, COP, x, k, h, LMTD, NTU.",
        "Re-draw the five diagrams from memory: valve timing, p-h refrigeration, Morse test fork, p-V Boyle, p-h grey plates.",
        "List the seven apparatus you have actually used, with their calibration certificates and least counts - the viva opens with one of these.",
        "Re-derive the root-sum-square uncertainty and apply it to one measurement in your record book.",
        "Re-read your mini-project report and prepare a one-minute spoken summary for the viva opener.",
        "Sleep seven hours; a tired student mixes up h1 and h4 on the p-h diagram and loses a 7-mark question.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Sketch the apparatus before writing the theory - a labelled diagram earns structure marks even if the prose is thin.",
        "Carry every unit through every calculation: BP in kW, SFC in kg/kWh, COP dimensionless, h in kJ/kg, k in W per metre-K.",
        "When asked for COP, also compute the Carnot COP and the second-law efficiency - examiners reward the comparison.",
        "For heat-balance and Morse-test questions, present the answer as a table that sums to 100 per cent or to the total IP.",
        "Reserve the last ten minutes for the verification pass: re-substitute one row of the observations into the final formula and confirm the arithmetic.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Confusing IP and BP in the Morse test - the drop in BP when a cylinder is cut equals that cylinder's IP, not its BP.",
        "Using the lower heating value in the bomb calorimeter - the bomb condenses the water vapour, so the result is the higher heating value.",
        "Reading h3 as h_g at the condenser pressure instead of the subcooled liquid enthalpy - this underestimates the refrigeration effect.",
        "Forgetting the Dickinson cooling correction in the bomb calorimeter - the uncorrected delta T is 3 to 5 per cent low.",
        "Using the arithmetic mean instead of the LMTD when the end temperature differences differ by more than a factor of two.",
        "Reporting the Orsat analysis on a wet basis when the sample was dried - state explicitly that the result is dry-basis.",
      ],
    },
  ],
};
