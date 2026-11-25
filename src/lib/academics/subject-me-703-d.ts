/**
 * Academics - RGPV Mechanical Engineering 7th-semester subject:
 * ME-703(D) Reliability Engineering.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries 3 body paragraphs, 5 bullets,
 * one diagram, a callout, 3 key terms, a table or a Python code sample,
 * and three exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me703d: AcademicSubject = {
  id: "me-703-d",
  code: "ME-703(D)",
  title: "Reliability Engineering",
  semester: "VII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to reliability engineering for RGPV mechanical: from R(t), hazard rates and the bathtub curve through Weibull analysis, series-parallel and k-out-of-n systems, fault trees and FMECA, redundancy, derating and AGREE allocation, maintenance and spares, to accelerated life testing, censored data and Bayesian estimation.",
  description:
    "Five units walk from the four-element definition of reliability and its four interlocking functions through the exponential, Weibull, normal and lognormal life distributions, into system modelling with reliability block diagrams, k-out-of-n voting, fault trees and FMECA worksheets, on through the design and maintenance levers - redundancy, derating, AGREE allocation, RCM and Poisson spares - and finally into the test laboratory with HALT, Arrhenius and Eyring acceleration, censored-data estimation, Bayesian updating and software reliability growth. Every section pairs a worked numerical with a redrawable diagram and the exam questions RGPV actually asks.",
  accentColor: "#84cc16",
  emoji: "RE",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Reliability Fundamentals",
      summary:
        "The language of the whole subject: the four-element definition of reliability, the survivor function R(t) with its partners F(t) and f(t), the hazard rate, the bathtub curve and its three life phases, MTTF, MTBF, MTTR, and availability welded to maintainability.",
      chapter: {
        number: "01",
        title: "Reliability Fundamentals",
        intro:
          "Unit I defines what reliability means and builds the four functions that describe random life - density, distribution, survivorship and hazard - then walks through the bathtub curve with its three regions, the time metrics MTTF, MTBF and MTTR, and the uptime measure that ties reliability to maintainability: availability.",
        inOneBreath:
          "Reliability is the probability of performing a required function under stated conditions for a stated time; R(t) = P(T > t) = 1 - F(t) with f(t) = dF/dt; hazard h(t) = f(t)/R(t) and R(t) = exp(-integral of h); the bathtub curve joins infant mortality, useful life and wearout; MTTF is the area under R(t), equal to 1/lambda for the exponential law; MTBF = MTTF + MTTR for repairable items; and availability A = MTTF/(MTTF + MTTR).",
        sections: [
          {
            number: "1.1",
            title: "Reliability, R(t) and the definition that anchors everything",
            body: [
              "Reliability is the probability that an item will perform its required function without failure under stated operating and environmental conditions for a stated period of time. Every word is load-bearing. Probability makes it a number between zero and one, not a promise. Required function fixes the performance standard - a pump must deliver rated flow at rated head. Stated conditions tie the number to an environment: the same bearing rates very differently in a clean room and on a cement mill. Stated period sets the mission clock, and reliability always decays as that clock runs longer.",
              "Model the time to failure T as a continuous random variable. The cumulative distribution function F(t) = P(T <= t) is the probability of failure by age t, so the reliability or survivor function is its complement: R(t) = P(T > t) = 1 - F(t). The probability density f(t) = dF/dt spreads the failures over the time axis, and reliability is the upper tail of that density: R(t) equals the integral of f(u) from t to infinity. Every item begins life with R(0) = 1, and R(t) slides toward zero as age accumulates.",
              "A constant-failure-rate item makes the arithmetic concrete. Take lambda = 0.002 failures per hour, so R(t) = exp(-0.002 t). At t = 100 h the reliability is e^-0.2 = 0.8187, meaning about 82 of 100 such items still work. At t = 1000 h it is e^-2 = 0.1353, barely one in seven. Reliability is therefore always quoted with its conditions and mission time attached; the number 0.8187 alone means nothing without the 100-hour mission behind it. These same functions return in every later unit, so this vocabulary is the first thing to master.",
            ],
            bullets: [
              "Reliability: probability of performing the required function under stated conditions for a stated time - four elements, all examinable.",
              "R(t) = P(T > t) = 1 - F(t): the survivor function is the complement of the cumulative failure distribution.",
              "f(t) = dF/dt is the density of failures; R(t) is its upper tail, the integral of f from t to infinity.",
              "R(0) = 1 at birth and decays monotonically toward zero with age.",
              "Worked values at lambda = 0.002/h: R(100) = 0.8187, R(1000) = 0.1353 - mission time always travels with the number.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Computing R(t) and F(t) from a constant failure rate of 0.002 per hour.",
              code: `import math

lam = 0.002                      # constant failure rate, per hour

def R(t):                        # survivor function
    return math.exp(-lam * t)

def F(t):                        # CDF: failed by age t
    return 1 - R(t)

for t in [10, 100, 500, 1000]:
    print(f"t = {t:4d} h   R = {R(t):.4f}   F = {F(t):.4f}")

# t =   10 h   R = 0.9802   F = 0.0198
# t =  100 h   R = 0.8187   F = 0.1813
# t =  500 h   R = 0.3679   F = 0.6321
# t = 1000 h   R = 0.1353   F = 0.8647`,
            },
            diagram: {
              kind: "flow",
              title: "From life data to the four reliability functions",
              caption:
                "Each arrow is a transformation examiners ask for - learn all of them in both directions.",
              steps: [
                { label: "Observe failure times", note: "a sample of lives T" },
                { label: "Fit the density f(t)", note: "shape of deaths over time" },
                { label: "Integrate to F(t)", note: "cumulative failures by age t" },
                { label: "R(t) = 1 - F(t)", note: "the survivors' share" },
                { label: "h(t) = f(t)/R(t)", note: "hazard rate - next section" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The four-element definition is a standing 2-mark question. Write all four elements verbatim - probability, required function, stated conditions, stated time - and always attach the mission time when quoting any R(t) value.",
            },
            keyTerms: [
              { term: "Reliability", definition: "The probability that an item performs its required function under stated conditions for a stated period of time." },
              { term: "Survivor function R(t)", definition: "The probability that the time to failure exceeds t; equal to 1 - F(t)." },
              { term: "Time to failure T", definition: "The random variable describing an item's life; modelled by a continuous distribution." },
            ],
            examQuestions: [
              {
                q: "Define reliability, explaining each element of the definition. Derive the relationships between R(t), F(t) and f(t), and compute R(100) and R(1000) for a constant failure rate of 0.002 per hour.",
                marks: 7,
                outline: [
                  "State the definition: probability of performing the required function under stated conditions for a stated time.",
                  "Unpack the four elements with one example each (probability, function, conditions, time).",
                  "Define T, F(t) = P(T <= t) and R(t) = P(T > t) = 1 - F(t).",
                  "Show f(t) = dF/dt and R(t) as the integral of f(u) from t to infinity.",
                  "Note R(0) = 1 and monotone decay to zero.",
                  "Substitute: R(100) = e^-0.2 = 0.8187 and R(1000) = e^-2 = 0.1353.",
                  "Conclude: reliability numbers are meaningless without mission time and conditions.",
                ],
              },
              {
                q: "Distinguish between quality and reliability.",
                marks: 2,
              },
              {
                q: "The failure probability of a valve in 200 h of exponential life is 0.18. Find its reliability at 200 h, the failure rate, and the reliability at 400 h.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "The hazard rate function",
            body: [
              "The hazard rate h(t), also called the instantaneous failure rate, is the probability density of failure at age t given survival up to t. Formally h(t) = f(t)/R(t): the density of deaths divided by the fraction still alive. It is a conditional quantity - f(t) asks how likely a new item is to fail near age t, while h(t) asks how likely a survivor of age t is to fail in the next instant. Units are failures per hour, and typical values run from 10^-9 for mature electronics to 10^-3 for severely stressed mechanical parts.",
              "Two companion relations make the hazard a complete description of life. First, h(t) = -d/dt of ln R(t), so the survivor function decays at a pace set by the hazard. Second, integrating gives R(t) = exp of minus the integral of h(u) from 0 to t, and that accumulated integral is the cumulative hazard H(t). A constant hazard lambda collapses the general law to the familiar exponential R(t) = e^-lambda t, which is exactly why the exponential distribution dominates useful-life analysis.",
              "Fleet data yields the hazard rate directly. Suppose 100 pumps start service and 3 fail during hours 0 to 100, 5 during 100 to 200, 9 during 200 to 300 and 15 during 300 to 400. Multiply the average survivor count in each interval by the interval length to get exposure hours, then divide failures by exposure: the hazard climbs from 0.30 to 0.53 to 1.03 to 1.99 per 1000 hours. That steady rise is the fingerprint of wearout, developed fully in the next section.",
            ],
            bullets: [
              "h(t) = f(t)/R(t): the conditional failure density of an item known to be alive at age t.",
              "h(t) = -d/dt of ln R(t), and R(t) = exp(-H(t)) where H is the cumulative hazard.",
              "A constant hazard reproduces the exponential law R(t) = e^-lambda t.",
              "Units are failures per hour; hazard values, unlike reliabilities, can exceed one.",
              "Fleet estimate: failures during an interval divided by (average survivors x interval length).",
            ],
            table: {
              caption: "Hazard-rate estimate from 100 pumps entering service.",
              headers: ["Interval (h)", "Failures", "Average survivors", "Exposure (unit-h)", "Hazard (/1000 h)"],
              rows: [
                ["0-100", "3", "98.5", "9850", "0.30"],
                ["100-200", "5", "94.5", "9450", "0.53"],
                ["200-300", "9", "87.5", "8750", "1.03"],
                ["300-400", "15", "75.5", "7550", "1.99"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Computing a hazard rate from fleet records",
              caption: "The bookkeeping path from raw fleet data to a hazard-versus-age trend.",
              stages: [
                { label: "Snapshot the fleet", note: "100 pumps, ages known" },
                { label: "Count interval failures", note: "3 fail in 0-100 h" },
                { label: "Compute exposure", note: "average survivors x interval" },
                { label: "Divide", note: "h = failures / exposure" },
                { label: "Plot h versus age", note: "the trend names the phase" },
              ],
            },
            callout: {
              type: "tip",
              title: "Derivation worth memorizing",
              body: "h(t) = -d/dt ln R(t) is a three-line derivation from h = f/R with f = -dR/dt. It is asked almost every year as a 3-4 mark theory piece, and it converts freely between R and h in either direction.",
            },
            keyTerms: [
              { term: "Hazard rate", definition: "The instantaneous conditional failure rate h(t) = f(t)/R(t), in failures per unit time given survival to t." },
              { term: "Cumulative hazard H(t)", definition: "The integral of the hazard from 0 to t; R(t) = exp(-H(t))." },
              { term: "Exposure", definition: "Survivor-hours accumulated by a fleet over an interval; the denominator of every hazard estimate." },
            ],
            examQuestions: [
              {
                q: "Define the hazard rate h(t). Establish the relations h(t) = f(t)/R(t), R(t) = exp(-integral of h) and h(t) = -d/dt ln R(t), and explain how a hazard rate is estimated from grouped fleet data.",
                marks: 7,
                outline: [
                  "Define h(t) as the conditional failure density given survival to t.",
                  "Write f(t) = -dR/dt and divide by R(t) to obtain h = f/R.",
                  "Integrate h = -d(ln R)/dt to get R(t) = exp(-H(t)).",
                  "Show the constant-hazard special case gives the exponential law.",
                  "Construct the fleet table: interval failures, average survivors, exposure hours.",
                  "Compute h = failures/exposure for each interval and plot against age.",
                  "Interpret the trend: falling = infant mortality, flat = useful life, rising = wearout.",
                ],
              },
              {
                q: "State the units of hazard rate and explain how it differs from the failure density f(t).",
                marks: 2,
              },
              {
                q: "For R(t) = exp(-0.01 t^1.5), find the hazard rate function and evaluate it at t = 4 h.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "The bathtub curve",
            body: [
              "Plot the hazard rate of a homogeneous population against age and, for most engineered items, the curve sinks, flattens and finally climbs - the shape of a bathtub. The first region, infant mortality, has a falling hazard: manufacturing defects, poor welds, contaminated material and assembly errors kill the weak items early. The middle region, useful life, holds the hazard nearly constant; failures come from random overstress events rather than from aging. The final region, wearout, sees the hazard rise as fatigue cracks, corrosion, insulation degradation and plain mechanical wear catch up with the survivors.",
              "Each region has its own countermeasure. Burn-in and environmental stress screening run new items briefly at elevated stress so that infant deaths occur on the factory floor instead of in the customer's plant. During useful life the exponential model applies and maintenance is essentially corrective or condition-based - scheduled replacement buys nothing there. At wearout the strategy inverts: time-based replacement, overhaul or retirement must arrive before the climbing hazard does. Locating that point is precisely the job of the replacement-scheduling methods of Unit II.",
              "Numbers make the curve concrete. A mechanical assembly might show a hazard of 5.0 per 1000 h at delivery, falling to 0.4 by 200 hours, holding 0.4 through 10,000 hours of useful life, then climbing again - passing 1 per 1000 h around 13,000 hours. Integrating this piecewise hazard gives the cumulative hazard and hence R(t) at any age; the code below does exactly that. Not every device shows all three regions: electronics live almost entirely in useful life, while bearings and tires hurry into wearout.",
            ],
            bullets: [
              "Infant mortality: falling hazard from manufacturing and assembly defects; cured by burn-in and screening.",
              "Useful life: roughly constant hazard; random overstress failures; the exponential law's home ground.",
              "Wearout: rising hazard from fatigue, corrosion, abrasion and aging; cured by scheduled replacement or overhaul.",
              "The bathtub curve is a plot of hazard h(t) against time - never of the density f(t) or reliability R(t).",
              "Countermeasures differ per region: screening early, condition monitoring mid-life, time-based replacement late.",
            ],
            codeExample: {
              language: "python",
              caption:
                "A piecewise bathtub hazard integrated numerically to give R(t).",
              code: `import math

def hazard(t):
    """Bathtub hazard rate, per hour."""
    if t < 200:                                # infant mortality
        return (5.0 - 0.023 * t) * 1e-4        # 5.0e-4 falls to 0.4e-4
    if t <= 10000:                             # useful life
        return 0.4e-4                          # flat region
    return 0.4e-4 * (1 + 0.0006 * (t - 10000)) # wearout climbs

# integrate: R(t) = exp(-H(t)), H = integral of hazard
t, H, dt = 0.0, 0.0, 1.0
while t < 12000:
    H += hazard(t) * dt
    t += dt

print(f"H(12000) = {H:.3f} cumulative hazards")
print(f"R(12000) = {math.exp(-H):.3f}")
# H(12000) = 0.574, R(12000) = 0.563`,
            },
            diagram: {
              kind: "flow",
              title: "Three phases of a population's life",
              caption:
                "Read left to right: hazard falls, holds flat, then climbs - the bathtub in three labelled panels.",
              steps: [
                { label: "Infant mortality", note: "hazard falls - defects weeded out" },
                { label: "Useful life", note: "hazard flat - random stress failures" },
                { label: "Wearout", note: "hazard climbs - fatigue and corrosion" },
                { label: "Renewal point", note: "replace before wearout dominates" },
              ],
            },
            callout: {
              type: "warning",
              title: "Sketch the right curve",
              body: "Students repeatedly draw the probability density instead of the hazard curve. The bathtub is h(t) against t - low at first, dipping, flat, then rising. Label all three regions and mark where the exponential model is valid: the flat middle only.",
            },
            keyTerms: [
              { term: "Infant mortality", definition: "The early-life region of falling hazard, caused by manufacturing and assembly defects." },
              { term: "Useful life", definition: "The middle region of approximately constant hazard where random overstress failures dominate." },
              { term: "Wearout", definition: "The late-life region of rising hazard driven by fatigue, corrosion and mechanical wear." },
            ],
            examQuestions: [
              {
                q: "Draw and explain the bathtub curve. Label its regions, state the physical causes of failure in each region, and give the reliability engineering countermeasures appropriate to each.",
                marks: 7,
                outline: [
                  "Draw hazard h(t) versus time with three clearly labelled regions.",
                  "Infant mortality: falling hazard; causes - defects, workmanship, contamination.",
                  "Countermeasure for infancy: burn-in, environmental stress screening.",
                  "Useful life: constant hazard; causes - random overstress; exponential model applies.",
                  "Wearout: rising hazard; causes - fatigue, corrosion, abrasion, insulation aging.",
                  "Countermeasure for wearout: scheduled replacement, overhaul, design margin.",
                  "Note that not all items show all regions; electronics vs mechanical parts.",
                ],
              },
              {
                q: "Sketch the bathtub curve and mark the region in which the exponential distribution is a valid life model.",
                marks: 2,
              },
              {
                q: "Why is burn-in performed on electronic components? Which region of the bathtub curve does it eliminate, and what must be balanced while doing it?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "MTTF, MTBF and MTTR",
            body: [
              "For a non-repairable item - a bearing, a fuse, a lamp filament - life is a single number, and the mean of that life is the Mean Time To Failure, MTTF. It equals the expectation of T and has a beautiful graphical meaning: MTTF is the area under the reliability curve, the integral of R(t) from 0 to infinity. For the exponential law the integral collapses to 1/lambda: a failure rate of 0.001 per hour means an MTTF of 1000 hours. A tenfold more reliable item is simply one whose R(t) curve encloses ten times more area.",
              "Repairable items cycle between up and down states, and the clock splits into three metrics. Mean Time Between Failures, MTBF, is the average length of one full cycle; Mean Time To Repair, MTTR, is the average down portion; the up portion averages MTTF. Since one cycle is up time plus down time, MTBF = MTTF + MTTR. A pump with MTTF 990 h and MTTR 10 h therefore has MTBF 1000 h. MTTF describes the item's strength; MTTR describes the support organization standing behind it.",
              "Two traps surround these metrics. First, for the exponential distribution the reliability at t = MTTF is e^-1 = 0.368, not one half - by its own mean life, 63 percent of a population has already failed. The median life is ln 2 / lambda = 0.693 MTTF, the age at which reliability truly crosses one half. Second, MTBF is routinely misused for non-repairable parts: quoting an MTBF for a fuse is a category error, because the fuse never returns to service. Mean life is a promise about averages, never about any individual unit.",
            ],
            bullets: [
              "MTTF = integral of R(t) dt, the area under the survivor curve; 1/lambda for the exponential law.",
              "MTTR is the mean downtime per failure; MTBF is the mean length of a full up-down cycle.",
              "For repairable items MTBF = MTTF + MTTR - a cycle must contain both its halves.",
              "At t = MTTF the exponential reliability is e^-1 = 0.368, not 0.5; the median is 0.693 MTTF.",
              "MTTF suits non-repairable items; MTBF and MTTR only make sense for repairable ones.",
            ],
            table: {
              caption: "Time metrics for a pump with lambda = 0.001/h and MTTR = 10 h.",
              headers: ["Metric", "Applies to", "Formula", "Value"],
              rows: [
                ["MTTF", "non-repairable life", "integral of R(t) dt; 1/lambda if exponential", "1000 h"],
                ["MTBF", "repairable cycles", "MTTF + MTTR", "1010 h"],
                ["MTTR", "downtime", "mean repair duration", "10 h"],
                ["Median life", "both", "ln 2 / lambda (exponential)", "693 h"],
                ["R at t = MTTF", "both", "e^-1", "0.368"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Non-repairable versus repairable clocks",
              caption:
                "One life for a fuse; a repeating cycle of failures and repairs for a pump.",
              left: {
                heading: "Non-repairable item",
                items: [
                  "Single life T, then replacement",
                  "MTTF = mean of T",
                  "Exponential: MTTF = 1/lambda",
                  "Examples: bearing, filament, fuse",
                ],
              },
              right: {
                heading: "Repairable item",
                items: [
                  "Fail - repair - fail - repair cycles",
                  "MTBF = mean cycle length",
                  "MTBF = MTTF + MTTR",
                  "Examples: pump, generator, CNC machine",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The e^-1 trap",
              body: "'Find the reliability at t = MTTF' is the classic trap: the answer is e^-1 = 0.368, not 0.5. If the examiner wanted half the population, the question says median life, which for the exponential law is 0.693 MTTF. Quote both numbers and stay safe.",
            },
            keyTerms: [
              { term: "MTTF", definition: "Mean Time To Failure: the expected life of a non-repairable item; the area under R(t)." },
              { term: "MTBF", definition: "Mean Time Between Failures: the average length of one failure-repair cycle for a repairable item." },
              { term: "MTTR", definition: "Mean Time To Repair: the average downtime required to restore a failed item to service." },
            ],
            examQuestions: [
              {
                q: "Define MTTF, MTBF and MTTR. Show that MTTF equals the integral of R(t) dt and hence equals 1/lambda for the exponential law. A pump has MTTF 990 h and MTTR 10 h: find MTBF, and explain why MTTF is inappropriate for a fuse.",
                marks: 7,
                outline: [
                  "Define MTTF for non-repairable items and MTBF, MTTR for repairable ones.",
                  "Start from E[T] = integral of t f(t) dt; integrate by parts.",
                  "Obtain E[T] = integral of R(t) dt - the area under the survivor curve.",
                  "Substitute R = e^-lambda t to get MTTF = 1/lambda.",
                  "Compute the pump: MTBF = 990 + 10 = 1000 h.",
                  "Note R(MTTF) = e^-1 = 0.368 and median = 0.693 MTTF.",
                  "A fuse never returns to service, so it has an MTTF, never an MTBF.",
                ],
              },
              {
                q: "A component has a constant failure rate of 0.0025 per hour. Find its MTTF.",
                marks: 2,
              },
              {
                q: "Show that for the exponential distribution the reliability at t = MTTF equals e^-1, and express the median life in terms of MTTF.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Availability and maintainability",
            body: [
              "Availability is the proportion of time a repairable system is in working order: the probability that it is up at a random instant. For the steady-state alternating cycle of Section 1.4, inherent availability is A = MTTF/(MTTF + MTTR), equivalently MTBF/(MTBF + MTTR). A pump with MTTF 990 h and MTTR 10 h offers A = 0.99 - it is up 99 of every 100 hours. Availability welds two design disciplines together: reliability engineering stretches the numerator by delaying failure, while maintainability engineering shrinks the denominator by speeding repair.",
              "Maintainability is itself a probability: the chance that a failed item is restored within time t, conventionally M(t) = 1 - exp(-mu t) with repair rate mu = 1/MTTR. It is a design property, not an act of heroics: accessibility, modularity, built-in diagnostics and standard tooling decide how long repairs take. In practice availability comes in flavours - inherent (design only), achieved (adding preventive-maintenance downtime) and operational (adding spares delays, travel and administration). Operational availability is always the lowest of the three, and it is the one the customer experiences.",
              "The economics are vivid at fleet scale. A system at A = 0.99 is down 87.6 hours in an 8760-hour year; at A = 0.995 it is down 43.8 hours. Cutting MTTR from 10 h to 5 h in the pump example lifts availability exactly as much as doubling MTTF would - and a diagnostics kit is usually cheaper than a redesign. That leverage, 87.6 hours of production against a sensor package, is why maintainability earns its own line in every reliability budget. Quote availability always with its definition: an unqualified 99 percent can mean any of the three flavours.",
            ],
            bullets: [
              "Inherent availability A = MTTF/(MTTF + MTTR) = MTBF/(MTBF + MTTR).",
              "Maintainability M(t) = 1 - exp(-mu t) with mu = 1/MTTR; a probability of repair within t.",
              "Inherent vs achieved vs operational availability: design, design + PM, design + logistics.",
              "Operational availability is always the lowest and is what the user actually experiences.",
              "Two levers exist: raise MTTF (reliability) or cut MTTR (maintainability, diagnostics, spares).",
            ],
            codeExample: {
              language: "python",
              caption:
                "Availability and annual downtime for four MTTF/MTTR combinations.",
              code: `def availability(MTTF, MTTR):
    return MTTF / (MTTF + MTTR)

cases = [(990, 10), (1990, 10), (990, 5), (4990, 10)]
for MTTF, MTTR in cases:
    A = availability(MTTF, MTTR)
    down = 8760 * (1 - A)
    print(f"MTTF {MTTF:4d} h, MTTR {MTTR:2d} h -> "
          f"A = {A:.4f}, downtime {down:5.1f} h/yr")

# MTTF  990 h, MTTR 10 h -> A = 0.9900, downtime  87.6 h/yr
# MTTF 1990 h, MTTR 10 h -> A = 0.9950, downtime  43.8 h/yr
# MTTF  990 h, MTTR  5 h -> A = 0.9950, downtime  44.2 h/yr
# MTTF 4990 h, MTTR 10 h -> A = 0.9980, downtime  17.5 h/yr`,
            },
            diagram: {
              kind: "cycle",
              title: "The uptime-downtime loop",
              caption:
                "A repairable system lives on this wheel; availability is the fraction of the lap spent in the up arc.",
              steps: [
                { label: "Operate", note: "up for MTTF on average" },
                { label: "Fail", note: "the fault occurs" },
                { label: "Detect and diagnose", note: "downtime begins" },
                { label: "Repair or replace", note: "consumes MTTR" },
                { label: "Verify and restart", note: "back to operate" },
              ],
            },
            callout: {
              type: "tip",
              title: "The MTTR lever",
              body: "Halving MTTR gains the same availability as doubling MTTF - and diagnostics, modularity and better documentation are almost always cheaper than adding redundancy. When a question asks 'how would you improve availability', propose both levers with numbers.",
            },
            keyTerms: [
              { term: "Availability", definition: "The probability that a system is up at a random instant; A = MTTF/(MTTF + MTTR) in the steady state." },
              { term: "Maintainability", definition: "The probability that a failed item is restored to service within a specified time, M(t) = 1 - exp(-mu t)." },
              { term: "Operational availability", definition: "Availability including preventive maintenance, spares and administrative delays; always below inherent availability." },
            ],
            examQuestions: [
              {
                q: "Define availability and maintainability. Derive the steady-state availability A = MTTF/(MTTF + MTTR), compute A for MTTF 990 h and MTTR 10 h, and explain the difference between inherent, achieved and operational availability.",
                marks: 7,
                outline: [
                  "Define availability as the long-run fraction of up time.",
                  "Define maintainability M(t) = 1 - exp(-mu t), mu = 1/MTTR.",
                  "Argue the cycle: average up time MTTF, average down time MTTR.",
                  "A = up time / cycle time = MTTF/(MTTF + MTTR) = MTBF/(MTBF + MTTR).",
                  "Compute A = 990/1000 = 0.99; annual downtime = 87.6 h.",
                  "Inherent: design only; achieved: adds PM downtime; operational: adds logistics delay.",
                  "Rank the three and note operational is what the customer feels.",
                ],
              },
              {
                q: "Define maintainability and write its exponential expression, explaining each symbol.",
                marks: 2,
              },
              {
                q: "A server has MTBF 2000 h and MTTR 25 h. Find its availability and the expected downtime per year (8760 h).",
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
      title: "Life Distributions and Model Selection",
      summary:
        "The statistical engines of reliability: the four linked functions, the exponential law with its memoryless property, the two-parameter Weibull that morphs across the whole bathtub, the normal law for symmetric wearout, the lognormal for repair times - and how to choose between them.",
      chapter: {
        number: "02",
        title: "Life Distributions",
        intro:
          "Unit II equips the engineer with the four distributions that carry nearly every reliability calculation: the exponential law of random failures, the Weibull family that bends to any hazard shape, the normal law of symmetric wearout and the lognormal of repair times, closing with a disciplined procedure for matching a model to physics and data.",
        inOneBreath:
          "The exponential law has constant hazard and the memoryless property; the Weibull bends its hazard through beta - below 1 infant mortality, 1 exponential, above 1 wearout - with eta the e^-1 characteristic life and MTTF = eta x Gamma(1 + 1/beta); the normal models symmetric wearout through z = (t - mu)/sigma and R = 1 - Phi(z); the lognormal models repair times and crack growth with median e^mu and MTTF exp(mu + sigma^2/2); and model choice matches physics first, then probability plots and goodness-of-fit tests.",
        sections: [
          {
            number: "2.1",
            title: "Statistical foundations: percentiles and the four functions",
            body: [
              "Life testing produces scattered numbers - 120, 180, 190, 250, 300 hours - and a distribution is the machine that turns scatter into prediction. Treat time to failure T as a continuous random variable with density f(t). Its integral from zero to t is the CDF F(t), the fraction expected dead by age t; the complement is the survivor function R(t). Percentile lives compress this into engineering shorthand: the B-10 life is the age by which 10 percent of the population is expected to have failed - the number bearing catalogues quote as a conservative rating.",
              "Four functions - f, F, R and h - are one model viewed from four angles, and every arrow between them is examinable. F = 1 - R always. f = dF/dt, and by symmetry R is the integral of f from t to infinity. The hazard is the ratio h = f/R, and inverting gives R = exp(-integral of h). Given any single one of the four, the other three follow mechanically. Fluency in these transformations is the most transferable skill in the whole subject; Unit I introduced them, and every distribution in this unit exercises them.",
              "Data and model must also be told apart. The empirical reliability at age t is simply survivors divided by starters: with the five bearing lives above, two survive past 200 h, so the empirical R(200) = 0.4. The sample mean life is 208 h. A fitted distribution smooths such staircase functions into curves that extrapolate beyond the data - the entire point of modelling - but only a distribution that passes its fit checks deserves the name prediction. Plot first, test second, extrapolate last: that discipline closes this unit.",
            ],
            bullets: [
              "T is a continuous random variable; f, F, R and h are four views of the same life data.",
              "B-10 life: the age by which 10 percent of the population is expected to fail.",
              "Empirical reliability = survivors / starters at the age of interest - no model needed.",
              "Transformations: F = 1 - R, f = dF/dt, h = f/R, R = exp(-integral of h).",
              "Mean, median and mode of life data usually differ - skewed lives make the mean the riskiest summary.",
            ],
            table: {
              caption: "The four functions and their transformations.",
              headers: ["Function", "Meaning", "Definition", "Gives the others by"],
              rows: [
                ["f(t)", "density of failures at t", "f = dF/dt", "integrate for F"],
                ["F(t)", "probability of failure by t", "F = P(T <= t)", "1 - F = R"],
                ["R(t)", "probability of surviving t", "R = P(T > t)", "exp(-integral of h)"],
                ["h(t)", "instantaneous risk given alive", "h = f/R", "integrate for -ln R"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "One stack, four views of life data",
              caption:
                "Each layer is derived from the one below it - memorize the vertical arrows in both directions.",
              layers: [
                { label: "hazard h(t)", note: "instantaneous risk given survival" },
                { label: "reliability R(t)", note: "survivors' share at age t" },
                { label: "distribution F(t)", note: "cumulative failures by age t" },
                { label: "density f(t)", note: "raw density of deaths over time" },
              ],
            },
            callout: {
              type: "exam",
              title: "Transformation questions repeat yearly",
              body: "'Given h(t), obtain R(t)' and its cousins are near-certain 3-5 mark questions. Write the defining integral, substitute, and evaluate the constant from R(0) = 1. Practise all four directions until none of them needs thought.",
            },
            keyTerms: [
              { term: "Probability density function", definition: "f(t) = dF/dt; the curve whose areas give failure probabilities." },
              { term: "B-10 life", definition: "The age at which 10 percent of the population is expected to have failed; a catalogue rating." },
              { term: "Empirical reliability", definition: "Survivors divided by starters at an age, computed straight from data without any model." },
            ],
            examQuestions: [
              {
                q: "Explain the four functions used to describe random life - f(t), F(t), R(t) and h(t) - and derive all pairwise relations between them. Define the B-10 life and state its engineering use.",
                marks: 7,
                outline: [
                  "Define each function in words and symbols.",
                  "F = 1 - R; f = dF/dt; R as the tail integral of f.",
                  "h = f/R and its derivation as a conditional density.",
                  "Integrate h = -d(ln R)/dt to get R = exp(-H).",
                  "Invert: F from h, f from R by differentiation.",
                  "Define B-10 life: t such that F(t) = 0.10.",
                  "Use: conservative catalogue ratings, warranty and maintenance scheduling.",
                ],
              },
              {
                q: "Define the B-10 life of a bearing and state why catalogues quote it instead of the mean life.",
                marks: 2,
              },
              {
                q: "Five bearings lasted 120, 180, 190, 250 and 300 h. Estimate the empirical reliability at 200 h and the mean life of the batch.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "The exponential distribution and the memoryless property",
            body: [
              "The exponential distribution is the workhorse of useful-life reliability. Its density is f(t) = lambda e^-lambda t, its survivor function R(t) = e^-lambda t, and its hazard h(t) = lambda - a constant. One parameter therefore fixes everything: MTTF = 1/lambda, median = ln 2 / lambda = 0.693/lambda, and the mode sits at zero - the most probable failure age of a random-failure population being immediately after birth. The law emerges naturally whenever failures come from random overstress - shocks, transients, external events - rather than from aging.",
              "The exponential is the only continuous distribution with the memoryless property: an item that has survived t hours has exactly the same next-instant risk as a fresh one. Algebraically, the conditional survival R(t + s given survival to t) equals R(s) for every t. The proof is one line: the conditional survivor function is e^-lambda(t+s) divided by e^-lambda t, which cancels to e^-lambda s. The engineering consequence is severe: preventive replacement of a purely exponential item wastes perfectly good life, because the replacement is statistically no younger than the survivor it displaces.",
              "Numerically, take MTTF = 1250 h, so lambda = 0.0008 per hour. R(300) = e^-0.24 = 0.7866. The probability of failing between 300 and 600 h is the difference of survivors, R(300) - R(600) = 0.7866 - 0.6188 = 0.1678 - not R(600) alone, a classic slip. The exponential suits complex repaired systems in their useful life and any population dominated by external random stress; it never suits wearout, where age is the whole story and the hazard must rise.",
            ],
            bullets: [
              "f(t) = lambda e^-lambda t, R(t) = e^-lambda t, h(t) = lambda - one parameter runs the whole model.",
              "MTTF = 1/lambda; median = ln 2 / lambda = 0.693 MTTF; mode at zero.",
              "Memoryless: conditional survival cancels the age - survivors are statistically as good as new.",
              "Consequence: scheduled replacement of exponential items wastes life; run them or monitor them instead.",
              "Interval probabilities come from differences of R: P(fail in [a, b]) = R(a) - R(b).",
            ],
            codeExample: {
              language: "python",
              caption:
                "Exponential calculations at lambda = 0.0008/h, including the memoryless check.",
              code: `import math

lam = 0.0008                     # per hour (MTTF = 1250 h)
R = lambda t: math.exp(-lam * t)

print(f"R(300)           = {R(300):.4f}")
print(f"R(600)           = {R(600):.4f}")
print(f"fail in 300-600  = {R(300) - R(600):.4f}")
print(f"MTTF             = {1 / lam:.0f} h")
print(f"median           = {math.log(2) / lam:.1f} h")

def next_hours(s, age):
    """P(survive s more hours | already survived 'age')."""
    return math.exp(-lam * s)    # age cancels: memoryless

print(f"P(300 more | age 300) = {next_hours(300, 300):.4f}")
# equals R(300) for a new item - exactly the memoryless claim`,
            },
            diagram: {
              kind: "fork",
              title: "An item has survived 500 h - what happens next?",
              caption:
                "The memoryless question: does age carry information about the future? Only the model decides.",
              start: "Item survived 500 h. Forecast its hazard over the next 500 h.",
              branches: [
                { label: "Exponential life", outcome: "hazard stays flat at lambda - age carries no information", good: true },
                { label: "Wearout population (Weibull beta > 1)", outcome: "hazard rises with age - schedule replacement", good: false },
                { label: "Infant mortality (Weibull beta < 1)", outcome: "hazard falls - survivors are hardening", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "The memoryless proof",
              body: "Write P(T > t + s | T > t) = P(T > t + s)/P(T > t) = e^-lambda(t+s)/e^-lambda t = e^-lambda s. Then state the maintenance consequence: preventive replacement gains nothing for constant hazard. The proof plus the consequence is the standard 7-mark combination.",
            },
            keyTerms: [
              { term: "Exponential law", definition: "The life distribution R(t) = e^-lambda t with constant hazard; the model of random failures." },
              { term: "Memoryless property", definition: "Survival history does not change future risk; unique to the exponential among continuous laws." },
              { term: "Failure rate lambda", definition: "The constant hazard of the exponential law; its reciprocal is the MTTF." },
            ],
            examQuestions: [
              {
                q: "For the exponential distribution write f(t), R(t) and h(t). Prove the memoryless property and explain its consequence for preventive maintenance. A device has MTTF 1250 h: find R(300) and the probability of failure between 300 and 600 h.",
                marks: 7,
                outline: [
                  "Write f(t) = lambda e^-lambda t, R = e^-lambda t, h = lambda.",
                  "State the conditional survival definition P(T > t + s | T > t).",
                  "Divide the exponentials and cancel to obtain e^-lambda s - memoryless.",
                  "Consequence: replacement units are statistically identical to survivors, so PM adds nothing.",
                  "lambda = 1/1250 = 0.0008 per hour.",
                  "R(300) = e^-0.24 = 0.7866.",
                  "P(fail in 300-600) = R(300) - R(600) = 0.7866 - 0.6188 = 0.1678.",
                ],
              },
              {
                q: "Why is preventive replacement ineffective for an item with a constant failure rate?",
                marks: 2,
              },
              {
                q: "The reliability of a valve at 200 h is 0.82 under the exponential law. Find the failure rate and the median life.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "The Weibull distribution",
            body: [
              "The two-parameter Weibull distribution is the Swiss army knife of life modelling. Its survivor function is R(t) = exp of minus (t/eta)^beta, and its hazard is (beta/eta)(t/eta)^(beta - 1). The shape parameter beta decides the failure physics: beta below 1 gives a falling hazard, the infant-mortality region; beta equal to 1 recovers the exponential exactly; beta above 1 gives a rising hazard - wearout, with beta = 2 yielding the Rayleigh linear rise and beta near 3.5 giving a near-normal, symmetric life distribution.",
              "The scale parameter eta, the characteristic life, is the age at which R = e^-1 = 0.368 regardless of beta, because (eta/eta)^beta = 1. The MTTF is eta times Gamma(1 + 1/beta): for beta = 2 and eta = 1000 h the MTTF is 1000 x 0.8862 = 886 h, shorter than the characteristic life because the rising hazard skews lives downward. A third parameter t0 shifts the origin, modelling a guaranteed failure-free period - common in fatigue and corrosion problems where nothing happens before an incubation time.",
              "Weibull analysis earns its keep in plotting. Rank the failure times, convert ranks to median-rank reliabilities, plot ln t against ln of minus-ln R, and the points fall on a straight line whenever Weibull applies: the slope is beta and the intercept pins eta at the e^-1 crossing. For beta = 2, eta = 1000 h, R(500) = exp(-0.25) = 0.7788 and the hazard at 500 h is 2 x 500 / 10^6 = 0.001 per hour - numbers the plotted line reproduces without any distributional guesswork.",
            ],
            bullets: [
              "R(t) = exp(-(t/eta)^beta); hazard = (beta/eta)(t/eta)^(beta - 1).",
              "beta < 1 infant mortality, beta = 1 exponential, beta > 1 wearout - one family spans the bathtub.",
              "eta is the characteristic life: the age at which R = e^-1 = 0.368, independent of beta.",
              "MTTF = eta x Gamma(1 + 1/beta); for beta = 2 it is 0.886 eta.",
              "Weibull plot: ln(-ln R) against ln t is a straight line with slope beta - the standard fit check.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Weibull reliability, hazard and MTTF for beta = 2, eta = 1000 h.",
              code: `import math

beta, eta = 2.0, 1000.0          # wearout: linearly rising hazard

def R(t):
    return math.exp(-((t / eta) ** beta))

def h(t):
    return (beta / eta) * (t / eta) ** (beta - 1)

for t in [250, 500, 1000, 1500]:
    print(f"t = {t:4d} h   R = {R(t):.4f}   h = {h(t):.6f} /h")

MTTF = eta * math.gamma(1 + 1 / beta)
print(f"MTTF = {MTTF:.1f} h")

# Weibull plot point: x = ln t, y = ln(-ln R) lies on a line
x = math.log(500)
y = math.log(-math.log(R(500)))
print(f"plot point: ({x:.3f}, {y:.3f})")`,
            },
            diagram: {
              kind: "pipeline",
              title: "Weibull probability plotting in five stages",
              caption:
                "The analyst's routine: ranks, transforms, straight line, parameters.",
              stages: [
                { label: "Rank the lives", note: "order failures smallest to largest" },
                { label: "Median ranks", note: "R = 1 - (i - 0.3)/(N + 0.4)" },
                { label: "Transform axes", note: "x = ln t, y = ln(-ln R)" },
                { label: "Fit the line", note: "slope estimates beta" },
                { label: "Read parameters", note: "eta at the R = e^-1 crossing" },
              ],
            },
            callout: {
              type: "tip",
              title: "The beta table is free marks",
              body: "beta < 1 decreasing hazard, beta = 1 constant (exponential), beta > 1 increasing hazard - this three-row mapping is asked as a 2-3 mark short question almost every session. Attach one physical example to each row and bank the marks in thirty seconds.",
            },
            keyTerms: [
              { term: "Shape parameter beta", definition: "The Weibull parameter governing hazard trend: below 1 falling, 1 constant, above 1 rising." },
              { term: "Characteristic life eta", definition: "The Weibull scale parameter; the age at which reliability equals e^-1." },
              { term: "Weibull plot", definition: "A plot of ln(-ln R) against ln t; Weibull data fall on a straight line of slope beta." },
            ],
            examQuestions: [
              {
                q: "Write the reliability and hazard functions of the two-parameter Weibull distribution. Explain the roles of beta and eta, show how beta below 1, equal to 1 and above 1 reproduce the three bathtub regions, and compute R(500) and the MTTF for beta = 2, eta = 1000 h.",
                marks: 7,
                outline: [
                  "Write R(t) = exp(-(t/eta)^beta) and h(t) = (beta/eta)(t/eta)^(beta - 1).",
                  "eta: characteristic life, R(eta) = e^-1 for any beta.",
                  "beta < 1: hazard falls - infant mortality.",
                  "beta = 1: hazard constant - exponential, useful life.",
                  "beta > 1: hazard rises - wearout; beta = 2 is Rayleigh.",
                  "R(500) = exp(-(0.5)^2) = exp(-0.25) = 0.7788.",
                  "MTTF = 1000 x Gamma(1.5) = 886 h.",
                ],
              },
              {
                q: "What is the characteristic life of a Weibull item, and what is its reliability at that age?",
                marks: 2,
              },
              {
                q: "Show that the Weibull hazard is constant when beta = 1, and find the MTTF for beta = 2 and eta = 1000 h given Gamma(1.5) = 0.8862.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "The normal distribution as a failure model",
            body: [
              "When a single wearout mechanism averages many small contributions - abrasive wear thinning a liner, corrosion depleting a wall - lives cluster symmetrically about a mean, and the normal distribution models them well: T follows N(mu, sigma^2). The bell curve has no closed-form integral, so reliability work proceeds through the standard normal CDF Phi(z). Standardize the question with z = (t - mu)/sigma, then R(t) = 1 - Phi(z) = Phi(-z). The hazard of a normal life is small far below the mean and climbs steeply through it - wearout concentrated in time.",
              "The z-table carries the arithmetic. For mu = 800 h and sigma = 100 h: at t = 600 h, z = -2 and R = Phi(2) = 0.9772; at t = 700 h, z = -1 and R = 0.8413; at the mean itself, R = 0.5 by symmetry. Three table values - Phi(1) = 0.8413, Phi(2) = 0.9772, Phi(3) = 0.9987 - settle nearly every examination numerical. A replacement age of mu - 2 sigma keeps the failure probability near 2.3 percent, a common industrial rule of thumb.",
              "The normal law also sets replacement policy directly. If a 5 percent failure probability is tolerable, the corresponding z is -1.645 and parts are swapped at 800 - 164.5 = 635.5 h - before wearout can surprise the operator. The model has known limits: it assigns positive probability to negative lives, so it cannot describe infant mortality or heavily skewed populations, and it should never be extrapolated far beyond the data that suggested it. Within symmetric wearout batches - lamps, tires, brake liners - it performs admirably.",
            ],
            bullets: [
              "T ~ N(mu, sigma^2) fits symmetric wearout batches: lamps, tires, liners, machined-wear parts.",
              "Standardize with z = (t - mu)/sigma; then R(t) = 1 - Phi(z) = Phi(-z).",
              "No closed form for Phi - use the standard normal table; memorize Phi(1), Phi(2), Phi(3).",
              "Hazard is small far below mu and rises steeply through the mean - wearout in its purest form.",
              "Replacement scheduling: choose the tolerated failure fraction, invert the table, set t = mu + z sigma.",
            ],
            table: {
              caption: "Normal-law reliabilities from z = (t - mu)/sigma, with mu = 800 h, sigma = 100 h.",
              headers: ["Replacement age t", "z", "R(t)"],
              rows: [
                ["500 h (mu - 3 sigma)", "-3.0", "0.9987"],
                ["600 h (mu - 2 sigma)", "-2.0", "0.9772"],
                ["700 h (mu - 1 sigma)", "-1.0", "0.8413"],
                ["800 h (the mean)", "0", "0.5000"],
                ["900 h (mu + 1 sigma)", "1.0", "0.1587"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From a normal life law to a replacement schedule",
              caption:
                "Every normal-law numerical follows these five moves - practise them as one routine.",
              steps: [
                { label: "Fit mu and sigma", note: "from life data or the question" },
                { label: "Choose the risk", note: "e.g. 2.3% allowable failures" },
                { label: "Standardize", note: "z = (t - mu)/sigma" },
                { label: "Read the table", note: "R = 1 - Phi(z)" },
                { label: "Set the schedule", note: "replace at mu - 2 sigma" },
              ],
            },
            callout: {
              type: "exam",
              title: "Carry these table values",
              body: "Phi(1) = 0.8413, Phi(2) = 0.9772, Phi(3) = 0.9987 and the 5% point z = 1.645 cover nearly every RGPV numerical on the normal law. Write them at the top of your answer sheet the moment the question says 'normal'.",
            },
            keyTerms: [
              { term: "Standard normal CDF Phi(z)", definition: "The tabulated cumulative distribution of the standard normal variable z; the workhorse of normal-law reliability." },
              { term: "Standardized variable z", definition: "z = (t - mu)/sigma; converts any normal question into a standard-table lookup." },
              { term: "Mean life mu", definition: "The centre of a symmetric wearout distribution; the age at which R = 0.5." },
            ],
            examQuestions: [
              {
                q: "A wearout-dominated component has normally distributed life with mean 800 h and standard deviation 100 h. Using standard normal tables, find R(600), R(700) and R(800), and determine the replacement time that limits the failure probability to 5 percent (z = 1.645).",
                marks: 7,
                outline: [
                  "State the model T ~ N(800, 100^2) and the rule R(t) = 1 - Phi(z).",
                  "t = 600: z = -2, R = Phi(2) = 0.9772.",
                  "t = 700: z = -1, R = Phi(1) = 0.8413.",
                  "t = 800: z = 0, R = 0.5000 by symmetry.",
                  "For 5% failures: R = 0.95, so z = -1.645.",
                  "t = 800 - 1.645 x 100 = 635.5 h.",
                  "Interpret: replace before 635 h of service to bound failures at 5%.",
                ],
              },
              {
                q: "Give two physical situations in which the normal distribution is a reasonable life model, and one in which it fails badly.",
                marks: 2,
              },
              {
                q: "Explain why the normal distribution cannot describe early-life failures of a component population.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "The lognormal distribution and choosing a model",
            body: [
              "If the logarithm of life is normal, life itself is lognormal: ln T follows N(mu_l, sigma_l^2). The density is skewed hard to the right with a long tail - a few units live very much longer than the rest. Two formulas anchor it: the median is e^mu_l and the MTTF is exp(mu_l + sigma_l^2/2), always above the median because of the skew. The hazard rises to a peak and then declines, a shape matching crack-growth failures, semiconductor wearout and, classically, the durations of repair jobs.",
              "Repair times made the lognormal famous. Maintenance data are typically right-skewed - most jobs finish quickly, a few bog down for days - and lognormal paper straightens them into lines. If ln(repair time) is normal with mu_l = 3.0 and sigma_l = 0.5, the median repair is e^3 = 20.1 h, and the probability a job finishes within 30 h is Phi((ln 30 - 3)/0.5) = Phi(0.80) = 0.79. That quantity is precisely the maintainability M(30) of Section 1.5 - the connection that makes this distribution a maintainability tool as much as a life model.",
              "Choosing a model is a disciplined act, not a preference. First match the physics: random overstress suggests exponential; fatigue and wear suggest Weibull with beta above 1; symmetric batch wearout suggests normal; multiplicative processes and repair logs suggest lognormal. Then let the data vote: probability plots - Weibull, normal, exponential paper - and formal goodness-of-fit tests such as chi-square or Kolmogorov-Smirnov confirm or veto the shortlist. Re-fit after every new batch of field data, because distributions drift as designs and duty cycles change.",
            ],
            bullets: [
              "ln T ~ N(mu_l, sigma_l^2) defines the lognormal; the life density is right-skewed with a long tail.",
              "Median = e^mu_l; MTTF = exp(mu_l + sigma_l^2/2), always larger than the median.",
              "Hazard rises to a peak and then falls - the signature of crack-growth and multiplicative damage.",
              "The standard model for repair durations: lognormal maintainability curves feed M(t) directly.",
              "Model selection: physics first, probability plots second, chi-square or K-S tests to confirm.",
            ],
            table: {
              caption: "Life distributions and where each earns its keep.",
              headers: ["Distribution", "Hazard shape", "Typical use"],
              rows: [
                ["Exponential", "constant", "useful life, random overstress, repaired systems"],
                ["Weibull (beta > 1)", "rising", "fatigue, wear, bearings, general wearout"],
                ["Normal", "steep rise near mean", "symmetric batch wearout: lamps, tires, liners"],
                ["Lognormal", "rises then falls", "repair times, crack growth, semiconductor wearout"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Choosing a life distribution",
              caption:
                "Two doors into the same choice: the physics of the failure, and the shape of the data.",
              left: {
                heading: "Match the physics",
                items: [
                  "Random overstress -> exponential",
                  "Fatigue and wear -> Weibull, beta > 1",
                  "Symmetric batch wearout -> normal",
                  "Multiplicative crack growth -> lognormal",
                  "Repair durations -> lognormal",
                ],
              },
              right: {
                heading: "Check with the data",
                items: [
                  "Weibull plot: do points line up?",
                  "Exponential check: is ln R versus t straight?",
                  "Chi-square test on binned failures",
                  "Kolmogorov-Smirnov distance on raw lives",
                  "Re-fit after each new field batch",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Never default to the exponential",
              body: "The exponential is easy, and that is exactly the trap: quoting MTTF = 1/lambda for a wearout population understates early deaths and overstates late ones. Always plot the hazard trend first; if it is not flat, the exponential has no business in the answer.",
            },
            keyTerms: [
              { term: "Lognormal distribution", definition: "The distribution of T when ln T is normal; right-skewed with median e^mu and MTTF exp(mu + sigma^2/2)." },
              { term: "Median of a lognormal", definition: "e^mu_l - the 50% life; below the MTTF whenever sigma_l exceeds zero." },
              { term: "Goodness-of-fit test", definition: "A statistical check (chi-square, Kolmogorov-Smirnov) that a fitted distribution is consistent with the data." },
            ],
            examQuestions: [
              {
                q: "Describe the lognormal distribution: write its relationship to the normal, its median and MTTF, and its hazard shape. Explain why it is the standard model for repair times, and outline a systematic procedure for selecting a life distribution from failure data.",
                marks: 7,
                outline: [
                  "Define: ln T ~ N(mu_l, sigma_l^2); state the skewed density.",
                  "Median = e^mu_l; MTTF = exp(mu_l + sigma_l^2/2).",
                  "Hazard rises to a peak then declines - unimodal.",
                  "Repair jobs are right-skewed; lognormal paper linearizes crew data.",
                  "M(t) = Phi((ln t - mu_l)/sigma_l) - direct maintainability use.",
                  "Selection procedure: match failure physics to a shortlist.",
                  "Confirm with probability plots and chi-square / K-S tests; re-fit as data accrue.",
                ],
              },
              {
                q: "Write the expressions for the median and the MTTF of a lognormal random variable.",
                marks: 2,
              },
              {
                q: "The natural log of repair times is normal with mu = 3.0 and sigma = 0.5. Find the median repair time and the maintainability M(30).",
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
      title: "System Reliability Modeling",
      summary:
        "Blocks instead of parts: series chains that multiply reliabilities, parallel banks that multiply unreliabilities, k-out-of-n voting systems priced by the binomial law, the deductive fault tree with its gates and minimal cut sets, and the inductive FMECA worksheet with severity, occurrence, detection and the risk priority number.",
      chapter: {
        number: "03",
        title: "System Reliability",
        intro:
          "Unit III assembles components into systems. The reliability block diagram supplies the grammar - series, parallel and mixed configurations - the binomial law prices partial redundancy, the fault tree deduces top-event probability from causes, and FMECA inductively ranks failure modes by risk priority number. Together they are the analyst's complete toolkit for 'how reliable is the whole machine'.",
        inOneBreath:
          "Series multiplies reliabilities and lands below the weakest block; parallel multiplies unreliabilities and lands above the best; k-out-of-n prices voting with the binomial sum from i = k to n; the fault tree deduces top-event probability through OR gates (complement of all-clear) and AND gates (product) with minimal cut sets ranking causes; and FMECA inductively scores severity, occurrence and detection into the risk priority number RPN = S x O x D, checked against a criticality matrix.",
        sections: [
          {
            number: "3.1",
            title: "Series systems and the reliability block diagram",
            body: [
              "A reliability block diagram abstracts a system into blocks whose connections express reliability logic, not physical layout. The series configuration is the chain: every block must work for the system to work. For n independent blocks, reliabilities multiply: R_system = R1 x R2 x ... x Rn. Independence is the standing assumption - block failures must not influence one another - and stating it explicitly is worth marks. A series system is only as strong as its weakest link; in fact it is always weaker: the product lies below the smallest factor.",
              "Series logic punishes part count. Ten blocks of reliability 0.99 in series manage only 0.904; twenty manage 0.818. For exponential blocks a clean addition law holds: the system failure rate is the sum of the block rates, and system MTTF is one over that sum. Four blocks with rates 0.002, 0.005, 0.001 and 0.003 per hour therefore run at 0.011 per hour, an MTTF of 90.9 h. Complexity is thus a reliability expense, and part-count reduction pays twice - once in cost and once in survival.",
              "A worked comparison shows the leverage. Four subsystems with R = 0.98, 0.95, 0.99 and 0.97 in series deliver 0.98 x 0.95 x 0.99 x 0.97 = 0.894, below every one of its members. Upgrading the weakest block from 0.95 to 0.99 lifts the product to 0.931, while upgrading an already-strong block gains almost nothing. Improvement effort must therefore aim at the worst block first - the quantitative form of the weakest-link intuition, and the day-one rule of every reliability improvement program.",
            ],
            bullets: [
              "RBD blocks encode reliability logic; a series chain means every block must survive.",
              "R_series = product of block reliabilities, assuming independence - always state the assumption.",
              "R_series lies below the weakest block; upgrading the minimum block buys the most.",
              "Exponential blocks: rates add, MTTF_series = 1 / (sum of rates).",
              "Part count is a reliability expense: 0.99^20 = 0.818 - complexity quietly eats nines.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Series reliability of four blocks, plus the exponential rate-addition check.",
              code: `blocks = [0.98, 0.95, 0.99, 0.97]

R = 1.0
for i, r in enumerate(blocks, start=1):
    R *= r
    print(f"after block {i}: R = {R:.4f}")

print(f"system R = {R:.4f}  (weakest block alone = {min(blocks)})")

# exponential blocks: failure rates add in series
lams = [0.002, 0.005, 0.001, 0.003]      # per hour
print(f"series MTTF = {1 / sum(lams):.1f} h")
# 1 / 0.011 = 90.9 h`,
            },
            diagram: {
              kind: "flow",
              title: "The series chain that must not break",
              caption:
                "Four blocks in series: the system survives only if the signal passes through every one.",
              steps: [
                { label: "Subsystem A", note: "R = 0.98" },
                { label: "Subsystem B", note: "R = 0.95 - the weak link" },
                { label: "Subsystem C", note: "R = 0.99" },
                { label: "Subsystem D", note: "R = 0.97" },
                { label: "System", note: "R = product = 0.894" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the independence assumption",
              body: "Before multiplying any reliabilities, write 'assuming independent failures'. Examiners allocate a mark to the assumption itself, and without it the product law is simply false - shared-power-supply blocks, for instance, fail together.",
            },
            keyTerms: [
              { term: "Reliability block diagram", definition: "A diagram whose blocks and connections express the reliability logic of a system, independent of physical layout." },
              { term: "Series configuration", definition: "A block arrangement in which every block must work; reliability is the product of block reliabilities." },
              { term: "Independence assumption", definition: "The condition that block failures do not influence one another; required before multiplying reliabilities." },
            ],
            examQuestions: [
              {
                q: "Explain the reliability block diagram and derive the reliability of a series configuration of n independent units. Four units with R = 0.98, 0.95, 0.99 and 0.97 operate in series: compute the system reliability, show it lies below the weakest unit, and show that failure rates add for exponential units.",
                marks: 7,
                outline: [
                  "Define the RBD and contrast it with a physical schematic.",
                  "Series logic: system works only if all blocks work.",
                  "Multiply: R = 0.98 x 0.95 x 0.99 x 0.97 = 0.894.",
                  "Compare with min(R_i) = 0.95: the product is below every factor.",
                  "For exponential blocks write R_sys = exp(-sum of lambda_i t).",
                  "Conclude lambda_sys = sum of lambda_i and MTTF_sys = 1/sum.",
                  "Note the design lesson: upgrade the weakest block first.",
                ],
              },
              {
                q: "Why does adding a component in series always reduce system reliability?",
                marks: 2,
              },
              {
                q: "A series system has 20 identical units each of reliability 0.99. Find the system reliability, and the per-unit reliability needed to achieve system reliability 0.95.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Parallel systems and redundancy gain",
            body: [
              "The parallel configuration builds tolerance instead of chains: the system works if at least one block works. Failure therefore requires every block to fail, so unreliabilities multiply: R_parallel = 1 - (1 - R1)(1 - R2)...(1 - Rn). The complement-first structure is the formula's soul and the examiner's favourite trap - multiplying reliabilities here is the series mistake wearing a parallel costume. Parallel reliability always exceeds the best block: two pumps at 0.9 and 0.8 give 1 - 0.1 x 0.2 = 0.98, better than either pump alone.",
              "For identical exponential units the gains are explicit. Two units in active parallel have MTTF = 1/lambda x (1 + 1/2) = 3/(2 lambda) - one and a half times a single unit. Three units give 1 + 1/2 + 1/3 = 1.833 times; four give 2.083. The harmonic pattern shows diminishing returns: each additional unit buys less mean life than the last, so redundancy is bought one unit at a time against its cost, weight, space and detection hardware.",
              "Reliability, not just MTTF, improves at every instant. Three units of R = 0.90 give system 0.999; four give 0.9999 - the nines accumulate faster than the MTTF multiples suggest, because the tail, not the mean, is what parallel logic repairs. The price is real: duplicated hardware costs, weighs, consumes power and needs failure detection so a dead redundant unit is noticed before its partner follows it. These trade-offs are why redundancy is a design decision with a spreadsheet behind it, never a reflex - and why voting systems, next, exist.",
            ],
            bullets: [
              "Parallel logic: at least one block must survive; R = 1 - product of (1 - R_i).",
              "R_parallel always exceeds the best single block - complement first, then multiply.",
              "Two identical exponential units: MTTF = 3/(2 lambda); n units: (1/lambda)(1 + 1/2 + ... + 1/n).",
              "Diminishing returns: the third unit adds less mean life than the second, the fourth less again.",
              "Redundancy bills cost, weight, power and detection effort - always priced before purchase.",
            ],
            table: {
              caption: "Identical units of R = 0.90 added in active parallel.",
              headers: ["Units n", "System R", "MTTF multiple", "Reliability gain"],
              rows: [
                ["1", "0.900", "1.000", "-"],
                ["2", "0.990", "1.500", "0.090"],
                ["3", "0.999", "1.833", "0.009"],
                ["4", "0.9999", "2.083", "0.0009"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Series versus parallel at a glance",
              caption:
                "The two elemental configurations - which quantity multiplies is the whole exam point.",
              left: {
                heading: "Series - all must work",
                items: [
                  "R = R1 x R2 x ... x Rn",
                  "Result lies below the weakest block",
                  "Exponential blocks: rates add",
                  "Use: functional chains, signal paths",
                  "Improve by upgrading the worst block",
                ],
              },
              right: {
                heading: "Parallel - at least one works",
                items: [
                  "R = 1 - (1 - R1)(1 - R2)...(1 - Rn)",
                  "Result lies above the best block",
                  "MTTF gains shrink with each added unit",
                  "Use: redundant pumps, backup supplies",
                  "Improve by adding or diversifying units",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "The complement-first rule",
              body: "In parallel systems, multiply the unreliabilities, not the reliabilities - multiplying reliabilities is the series formula. Write '1 - (all fail)' as your first line; every parallel numerical in the paper then takes care of itself.",
            },
            keyTerms: [
              { term: "Parallel configuration", definition: "A block arrangement that survives while at least one block works; reliability is 1 minus the product of unreliabilities." },
              { term: "Redundancy", definition: "Duplicated function or hardware so that a single failure does not fail the mission." },
              { term: "Unreliability", definition: "The complement 1 - R of reliability; the quantity that multiplies in parallel logic." },
            ],
            examQuestions: [
              {
                q: "Derive the reliability of a parallel system of n independent units. Two pumps with reliabilities 0.9 and 0.8 run in parallel: compute the system reliability, and show that two identical exponential units in active parallel have MTTF = 3/(2 lambda).",
                marks: 7,
                outline: [
                  "Parallel logic: system fails only if every unit fails.",
                  "P(all fail) = (1 - R1)(1 - R2)...(1 - Rn).",
                  "R = 1 - product of unreliabilities.",
                  "Numbers: 1 - 0.1 x 0.2 = 0.98, above both 0.9 and 0.8.",
                  "For identical exponential units, integrate the survivor function or sum the Poisson terms.",
                  "Obtain MTTF = (1/lambda)(1 + 1/2) = 3/(2 lambda).",
                  "Generalize: n units give (1/lambda) x (1 + 1/2 + ... + 1/n).",
                ],
              },
              {
                q: "Two units of reliability 0.95 operate in parallel. Find the system reliability.",
                marks: 2,
              },
              {
                q: "Prove that in a parallel system of independent units the system reliability always exceeds the reliability of the best unit.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "k-out-of-n systems and mixed configurations",
            body: [
              "Many systems sit between series and parallel: they need some but not all of their units. A k-out-of-n system works when at least k of n identical units work, and the binomial law prices it: R equals the sum from i = k to n of C(n,i) R^i (1 - R)^(n - i). The familiar configurations are the boundary cases - n-out-of-n is the series chain, 1-out-of-n is the parallel bank - and everything between trades redundancy against voting strictness on a single formula.",
              "The 2-out-of-3 triplex is the classic instance. With unit reliability 0.9, the system survives if two or three units run: R = 3 x 0.9^2 x 0.1 + 0.9^3 = 0.243 + 0.729 = 0.972. That sits below the pure parallel value 0.999 but far above the series value 0.729, and it earns its keep in flight controls and reactor protection systems, where two independent channels must agree before a command is trusted - a single faulty channel can neither spuriously trip the system nor command it alone.",
              "Configurations also mix. Series-parallel networks decompose by collapsing inner blocks into equivalents until a single number remains. Bridge networks, which cross-connect parallel paths, resist such collapse and are evaluated by conditioning on the key bridge block: compute reliability with the bridge guaranteed good, with it guaranteed failed, and average the two weighted by its probability. Alternatively, enumerate minimal path sets - smallest block sets that keep the system up - or minimal cut sets, smallest sets that bring it down: exactly the machinery the fault tree formalizes next.",
            ],
            bullets: [
              "k-out-of-n: works if at least k of n units work; priced by the binomial sum over i >= k.",
              "Boundary cases: k = n is series, k = 1 is parallel - quote them, they are free marks.",
              "2-out-of-3 with R = 0.9 gives 0.972: between parallel 0.999 and series 0.729.",
              "Triplex voting blocks a single faulty channel from both spurious trips and lone commands.",
              "Series-parallel networks collapse from the inside out; bridge networks need conditioning or path/cut sets.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Binomial evaluation of every k-out-of-n configuration up to n = 4 at R = 0.90.",
              code: `from math import comb

def k_out_of_n(k, n, R):
    """Reliability of a k-out-of-n system of identical units."""
    return sum(comb(n, i) * R ** i * (1 - R) ** (n - i)
               for i in range(k, n + 1))

R = 0.90
for n in (2, 3, 4):
    for k in range(1, n + 1):
        print(f"{k}-out-of-{n}: R = {k_out_of_n(k, n, R):.4f}")

# highlights at n = 3:
#   1-out-of-3 = pure parallel -> 0.9990
#   2-out-of-3 = triplex voter -> 0.9720
#   3-out-of-3 = pure series   -> 0.7290`,
            },
            diagram: {
              kind: "fork",
              title: "Three units are installed - how many must run?",
              caption:
                "The k-out-of-n design decision in one picture: strictness versus tolerance.",
              start: "Three identical units are available. Set the survival rule.",
              branches: [
                { label: "All three (3-out-of-3)", outcome: "series chain, R = 0.729 - cheapest, zero tolerance", good: false },
                { label: "Any one (1-out-of-3)", outcome: "full parallel, R = 0.999 - heavy overdesign", good: false },
                { label: "Two of three (2-out-of-3)", outcome: "triplex voting, R = 0.972 - the balanced choice", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Quote the special cases",
              body: "When a question says k-out-of-n, immediately note that k = 1 gives parallel and k = n gives series. Those two lines anchor the formula, earn a mark each, and let you sanity-check any binomial evaluation against known endpoints.",
            },
            keyTerms: [
              { term: "k-out-of-n system", definition: "A configuration that works when at least k of its n identical units work; evaluated with the binomial law." },
              { term: "Binomial reliability formula", definition: "R = sum over i >= k of C(n,i) R^i (1 - R)^(n - i) for identical units." },
              { term: "Bridge network", definition: "A cross-connected RBD that cannot collapse by series-parallel reduction; evaluated by conditioning or path/cut sets." },
            ],
            examQuestions: [
              {
                q: "Define a k-out-of-n configuration and derive its reliability for identical units using the binomial law. Show that series and parallel systems are special cases, and compute the 2-out-of-3 reliability for unit reliability 0.9, comparing it with the 1-out-of-3 and 3-out-of-3 values.",
                marks: 7,
                outline: [
                  "Define: system works when at least k of n units work.",
                  "Write the binomial sum R = sum_{i=k}^{n} C(n,i) R^i (1-R)^(n-i).",
                  "k = n collapses to R^n - the series chain.",
                  "k = 1 collapses to 1 - (1-R)^n - the parallel bank.",
                  "Evaluate 2-out-of-3: 3 x 0.81 x 0.1 + 0.729 = 0.972.",
                  "Compare: 1-out-of-3 = 0.999, 3-out-of-3 = 0.729.",
                  "Interpret: voting trades some reliability for immunity to single-channel faults.",
                ],
              },
              {
                q: "Define a k-out-of-n system and give one industrial example of a 2-out-of-3 configuration.",
                marks: 2,
              },
              {
                q: "A 2-out-of-3 system has unit reliability 0.95. Write and evaluate its reliability expression.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Fault Tree Analysis",
            body: [
              "Fault Tree Analysis is deduction on paper: start from an undesired top event - 'no coolant delivered to the die' - and resolve it downward through gates into basic causes. The OR gate fires when any input occurs, capturing series-like vulnerability; the AND gate fires only when all inputs occur, capturing redundancy - the very parallel logic that protects a system. Basic events - component failures, human errors, external shocks - terminate the branches. An FTA is qualitative when it maps causes, quantitative when probabilities ride up the gates.",
              "Gate arithmetic is two formulas. For an OR gate with independent inputs of probabilities P1, P2 and so on, the output probability is 1 - (1 - P1)(1 - P2)..., the complement of all-clear; for an AND gate it is the product P1 x P2 x ... Minimal cut sets are the smallest combinations of basic events that trigger the top event; a first-order cut set - a single event acting alone - is a single point of failure and a redesign flag. Ranking cut sets by order and probability is the qualitative gold of the method.",
              "A worked tree: top event 'no coolant flow'. Pump failure (P = 0.01), valve failure (P = 0.02), or both controllers failing (each 0.01, a redundant pair feeding an AND gate at 0.0001) can cause it. The OR gives 1 - 0.99 x 0.98 x 0.9999 = 0.030. The minimal cut sets are {pump}, {valve} and {controller A, controller B} - two single-order sets demand attention first, which is exactly the reading an engineer wants from a page of probability.",
            ],
            bullets: [
              "FTA is deductive and top-down: top event resolved into causes through gates.",
              "OR gate output probability = 1 - product of (1 - P_i); AND gate output = product of P_i.",
              "Minimal cut set: the smallest set of basic events that together cause the top event.",
              "Order-1 cut sets are single points of failure - the first candidates for redesign.",
              "Common-cause events must never be treated as independent; declare them explicitly.",
              "FTA and RBD are duals: series blocks correspond to OR gates, parallel to AND gates.",
            ],
            table: {
              caption: "Fault-tree gates and their arithmetic.",
              headers: ["Gate", "Fires when", "Output probability", "RBD dual"],
              rows: [
                ["OR", "any input occurs", "1 - product of (1 - P_i)", "series chain"],
                ["AND", "all inputs occur", "product of P_i", "parallel redundancy"],
                ["Voting (k/n)", "at least k of n inputs", "binomial sum over i >= k", "k-out-of-n"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building and evaluating a fault tree",
              caption:
                "The analyst's path from a precisely worded top event to ranked cut sets.",
              steps: [
                { label: "Define the top event", note: "precise, measurable, undesired" },
                { label: "Identify immediate causes", note: "level below the top" },
                { label: "Connect through gates", note: "OR for alternatives, AND for combinations" },
                { label: "Expand to basic events", note: "component, human, external" },
                { label: "Evaluate and rank", note: "top probability + minimal cut sets" },
              ],
            },
            callout: {
              type: "exam",
              title: "Label the tree properly",
              body: "Draw the standard gate shapes, name them (OR, AND), and word the top event precisely - 'system fails to deliver rated coolant flow at rated pressure', not 'pump problem'. Vague top events and unnamed gates each cost marks.",
            },
            keyTerms: [
              { term: "Top event", definition: "The undesired system state whose causes a fault tree deduces; the root of the diagram." },
              { term: "Minimal cut set", definition: "The smallest combination of basic events that produces the top event; its size is its order." },
              { term: "Fault tree analysis", definition: "A deductive method that resolves a top event through logic gates into basic causes and their probabilities." },
            ],
            examQuestions: [
              {
                q: "Explain Fault Tree Analysis. Draw the fault tree for 'no coolant delivery' with events: pump failure 0.01, valve failure 0.02, and two redundant controllers each 0.01 failing together. Evaluate the top-event probability and list the minimal cut sets.",
                marks: 7,
                outline: [
                  "Define FTA: deductive, top-down, gate-structured.",
                  "Draw the top event and an OR gate over pump, valve and controller-pair branches.",
                  "Controllers in redundant pair: AND gate with both required, P = 0.01 x 0.01 = 0.0001.",
                  "OR gate arithmetic: 1 - (1 - 0.01)(1 - 0.02)(1 - 0.0001).",
                  "Compute: 1 - 0.99 x 0.98 x 0.9999 = 0.030.",
                  "List minimal cut sets: {pump}, {valve}, {controller A AND controller B}.",
                  "Rank: the two order-1 sets are single points of failure - redesign or monitor first.",
                ],
              },
              {
                q: "Differentiate between an OR gate and an AND gate in a fault tree, with one physical example of each.",
                marks: 2,
              },
              {
                q: "What is a minimal cut set? Why are order-1 cut sets singled out for redesign attention?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "FMECA and the Risk Priority Number",
            body: [
              "FMECA is induction where FTA is deduction: start at the component and ask what could go wrong. For each component the worksheet lists function, failure modes, failure causes, effects at three levels - local, next assembly and end effect - plus current detection controls. Severity (S), occurrence (O) and detection (D) are scored on ten-point scales: S = 10 is catastrophic, O = 10 near-certain, D = 10 means a defect is almost sure to escape to the customer. The FMEA becomes FMECA when criticality analysis ranks the modes.",
              "The Risk Priority Number multiplies the three scores: RPN = S x O x D, ranging from 1 to 1000. Modes are sorted by RPN and those above a management-set threshold earn corrective actions: design changes, added monitoring, better test coverage. The metric is honest arithmetic but crude statistics - S = 8, O = 4, D = 3 (RPN 96) and S = 3, O = 5, D = 8 (RPN 120) look similar on a sorted list while the first hides a near-catastrophe. Criticality matrices that plot severity against occurrence keep the severity axis visible.",
              "A pump FMECA extract shows the workflow. Bearing seizure: S = 8, O = 4, D = 3, RPN = 96. Seal leakage: S = 4, O = 7, D = 2, RPN = 56. Sensor drift: S = 3, O = 5, D = 8, RPN = 120. Raw RPN ranks sensor drift first, but the severity column insists the bearing outranks everything - a seizing bearing can stop the pump and the whole line. Actions follow the reading: temperature sensing on the bearing, a seal material upgrade, and automated self-checks for the sensor.",
            ],
            bullets: [
              "FMECA is inductive and bottom-up: component by component, mode by mode.",
              "Worksheet columns: function, failure mode, cause, effects (local, system, end), controls.",
              "S, O and D are 10-point scales: 10 = catastrophic, near-certain, undetectable respectively.",
              "RPN = S x O x D, range 1 to 1000; modes above a threshold earn corrective action.",
              "RPN arithmetic hides severity profiles - always re-rank against the criticality matrix.",
            ],
            table: {
              caption: "FMECA worksheet extract for a centrifugal pump.",
              headers: ["Component / mode", "Effect", "S", "O", "D", "RPN"],
              rows: [
                ["Bearing seizure", "pump stops, line down", "8", "4", "3", "96"],
                ["Seal leakage", "drip loss, floor hazard", "4", "7", "2", "56"],
                ["Sensor drift", "wrong readings, nuisance trips", "3", "5", "8", "120"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The FMECA workflow",
              caption:
                "Five stages from system definition to prioritized corrective actions.",
              stages: [
                { label: "Define system and functions", note: "boundaries, mission, standards" },
                { label: "List failure modes", note: "how each function can fail" },
                { label: "Trace effects and causes", note: "local to end effect" },
                { label: "Score S, O, D", note: "10-point anchored scales" },
                { label: "Compute RPN, act", note: "rank, threshold, verify fix" },
              ],
            },
            callout: {
              type: "exam",
              title: "RPN numericals are near-certain",
              body: "Memorize RPN = S x O x D with each scale's endpoints (1 and 10) and practise ranking three modes by RPN, then re-prioritizing by severity. Both orderings appear in the same question far more often than either alone.",
            },
            keyTerms: [
              { term: "Failure mode", definition: "The specific manner in which a component fails to perform its function." },
              { term: "Risk Priority Number", definition: "RPN = S x O x D on 10-point scales; the ranking metric of an FMECA." },
              { term: "Criticality analysis", definition: "The C in FMECA: ranking failure modes by consequence and probability, classically on a severity-occurrence matrix." },
            ],
            examQuestions: [
              {
                q: "Explain FMECA and its workflow. Define severity, occurrence and detection with their scale endpoints, define the RPN and its range, and construct the worksheet for a pump with modes (S, O, D): bearing seizure (8, 4, 3), seal leakage (4, 7, 2), sensor drift (3, 5, 8). Rank the modes for corrective action.",
                marks: 7,
                outline: [
                  "Define FMECA: inductive, bottom-up, worksheet-driven.",
                  "S: consequence 1 (none) to 10 (catastrophic); O: likelihood 1 (remote) to 10 (near-certain).",
                  "D: escape probability 1 (sure detection) to 10 (undetectable).",
                  "RPN = S x O x D, range 1 to 1000.",
                  "Compute: 96, 56 and 120; raw RPN order: sensor, bearing, seal.",
                  "Re-rank with severity: bearing (S = 8) leads despite lower RPN.",
                  "Actions: bearing temperature sensing, seal upgrade, sensor self-checks.",
                ],
              },
              {
                q: "Define the Risk Priority Number and state its maximum possible value.",
                marks: 2,
              },
              {
                q: "Two failure modes have RPN 120 and 96. Explain why the lower-RPN mode might still demand priority action.",
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
      title: "Design and Maintenance for Reliability",
      summary:
        "Engineering the numbers upward: active and standby redundancy, derating and stress-strength margins, AGREE reliability allocation, the maintenance spectrum from corrective through preventive to condition-based and reliability-centred maintenance, and Poisson spares provisioning for the store.",
      chapter: {
        number: "04",
        title: "Design and Maintenance for Reliability",
        intro:
          "Unit IV turns analysis into engineering decisions. Redundancy duplicates function, derating and design margins push stress away from strength, AGREE allocation divides a system target into subsystem budgets, maintenance policy is chosen by hazard shape and consequence, and Poisson arithmetic sizes the spares pool that keeps repaired fleets running.",
        inOneBreath:
          "Active redundancy runs all units with R = 1 - (1 - R)^n; standby switches in a spare with R = e^-Lt(1 + Lt) and MTTF = 2/lambda for a perfect switch; derating and stress-strength margins buy reliability at the drawing board with safety factor mean strength / mean stress; AGREE allocates system failure rate proportional to complexity n_i, tightened by importance w_i and operating time t_i; maintenance spans corrective, preventive and condition-based tasks chosen by hazard shape and the P-F interval under RCM's seven questions; and Poisson spares sizing sets stock S so lead-time demand rarely exceeds the shelf.",
        sections: [
          {
            number: "4.1",
            title: "Redundancy: active, standby and partial",
            body: [
              "Redundancy duplicates function so that one failure does not fail the mission. In active (hot) redundancy all units are energized from time zero - two pumps sharing load, twin power supplies feeding one rack. The active-parallel formulas of Unit III apply directly: R = 1 - (1 - R_unit)^n, with the caveat that load-sharing survivors may run harder and age faster, quietly eroding the textbook gain. Active redundancy's virtues are simplicity and instantaneous takeover; its cost is that backup hardware wears while it waits.",
              "In standby (cold) redundancy the backup is quiescent until a sensing and switching mechanism calls it. A perfect-switch, two-unit, exponential standby has R(t) = e^-lambda t x (1 + lambda t) and MTTF = 2/lambda - better than the active pair's 3/(2 lambda), because the spared unit does not accumulate age while idle. The Poisson view proves it: surviving on standby means zero or one failure by time t. Real switches fail, and with switch reliability R_sw the second term becomes lambda t x R_sw.",
              "Numbers frame the trade. With lambda = 0.001 per hour and t = 500 h: a single unit gives 0.607, an active pair 0.845, a perfect-switch standby 0.910, and the same standby with R_sw = 0.95 gives 0.895 - the imperfect switch costs more reliability than it cost to add the second unit. Warm standbys, partially energized, sit between the extremes. Redundancy is therefore the last design lever, pulled after simplification and derating, because every duplicated unit drags cost, weight, test burden and its own failure modes behind it.",
            ],
            bullets: [
              "Active redundancy: all units energized; R = 1 - (1 - R_unit)^n; takeover is instant.",
              "Cold standby: quiescent spare switched in on failure; perfect switch gives R = e^-Lt(1 + Lt), MTTF = 2/lambda.",
              "Switching is a new failure mode: multiply the second term by switch reliability R_sw.",
              "Load sharing erodes active-redundancy gains: survivors run harder and age faster.",
              "Redundancy follows simplification and derating in priority - it is the expensive lever.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Single unit versus active pair versus cold standby, with and without a reliable switch.",
              code: `import math

lam, t = 0.001, 500.0

R1 = math.exp(-lam * t)                          # single unit
R_active = 1 - (1 - R1) ** 2                     # active pair
R_standby = math.exp(-lam * t) * (1 + lam * t)   # perfect switch
R_sb_switch = math.exp(-lam * t) * (1 + lam * t * 0.95)

print(f"single unit   R = {R1:.4f}")
print(f"active pair   R = {R_active:.4f}")
print(f"cold standby  R = {R_standby:.4f}  (perfect switch)")
print(f"cold standby  R = {R_sb_switch:.4f}  (switch R = 0.95)")
print(f"standby MTTF  = {2 / lam:.0f} h vs active {1.5 / lam:.0f} h")`,
            },
            diagram: {
              kind: "compare",
              title: "Active versus standby redundancy",
              caption:
                "Two ways to duplicate function - the difference is what the backup does while it waits.",
              left: {
                heading: "Active (hot) redundancy",
                items: [
                  "All units energized from t = 0",
                  "R = 1 - (1 - R)^n - no switch needed",
                  "Takeover instant, no interruption",
                  "Backup ages while it idles",
                  "Load sharing may derate survivors",
                ],
              },
              right: {
                heading: "Standby (cold) redundancy",
                items: [
                  "Backup quiescent until failure",
                  "R = e^-Lt(1 + Lt) for two units",
                  "Needs sensing and switching gear",
                  "Switch itself can fail - model it",
                  "Spare accumulates no age",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "State the perfect-switch assumption",
              body: "Every standby derivation must open with 'assuming a perfect switch'. Then derive MTTF = 2/lambda from the Poisson probability of at most one failure. If the question mentions switching reliability, multiply the lambda t term by R_sw - examiners check exactly that factor.",
            },
            keyTerms: [
              { term: "Active redundancy", definition: "Redundancy with all units operating from time zero; the active-parallel formulas apply." },
              { term: "Standby redundancy", definition: "Redundancy with a quiescent spare switched in on failure; R = e^-Lt(1 + Lt) with a perfect switch." },
              { term: "Load sharing", definition: "Surviving units of an active redundant group carrying extra load, aging faster than the model assumes." },
            ],
            examQuestions: [
              {
                q: "Differentiate active and standby redundancy. Derive the reliability and MTTF of a two-unit cold standby system with a perfect switch and exponential units, extend the result to switch reliability R_sw, and compare with the active pair.",
                marks: 7,
                outline: [
                  "Active: all units on, R = 1 - (1 - R)^2, MTTF = 3/(2 lambda).",
                  "Standby: system survives if zero or one failure occurs by t.",
                  "Poisson: P(0) + P(1) = e^-Lt + Lt e^-Lt = e^-Lt(1 + Lt).",
                  "Integrate (or use Poisson means) to obtain MTTF = 2/lambda.",
                  "With imperfect switch: second term becomes Lt e^-Lt R_sw.",
                  "Numerical comparison at lambda = 0.001, t = 500: 0.607 / 0.845 / 0.910.",
                  "Conclude: standby beats active only when the switch is dependable.",
                ],
              },
              {
                q: "Why does a cold standby unit outlast an active redundant unit of the same design?",
                marks: 2,
              },
              {
                q: "A cold standby pair has lambda = 0.002/h with a perfect switch. Find the MTTF and the reliability at 200 h.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Design for reliability: derating and stress-strength margins",
            body: [
              "Reliability is designed in, not inspected in, and the design rules are older than the mathematics. Simplicity is the first: a series system multiplies part reliabilities, so every eliminated part removes a failure opportunity - the strongest single lever available. Standardization and proven parts are the second: a component with field history carries a known failure rate where a novelty carries only hope. Third is derating: operating parts below their rated stress - voltage, current, temperature, mechanical load - so that the inevitable scatter of strength never meets the applied stress.",
              "Stress-strength interference is the formal picture behind derating. Both applied stress and material strength are random variables with distributions; reliability is the probability that strength exceeds stress. The safety factor - mean strength over mean stress - is the crude summary; the safety margin, (mu_strength - mu_stress) divided by the combined standard deviation, measures separation in units of scatter and is what actually predicts failures. A shaft with strength N(600, 60^2) MPa under stress N(400, 40^2) MPa has safety factor 1.5 and safety margin 200/72.1 = 2.77.",
              "Derating levels are tabulated discipline: film capacitors held to 50 percent of rated voltage, relay contacts to 70 percent of rated current, transistor junctions to 85 deg C against a 110 deg C capability, rolling bearings to half their dynamic load rating. Margins so purchased are exactly what a HALT - Unit V - will later measure and widen. The whole program stacks as a pyramid: broad design rules at the base, analysis above them, testing above that, and field-data feedback sharpening every layer from the apex down.",
            ],
            bullets: [
              "Simplicity first: part-count reduction removes failure opportunities from the series chain.",
              "Derating: operate below rated stress - voltage, current, temperature, load - typically 50-80% of rating.",
              "Stress-strength interference: reliability = P(strength > stress) for two random distributions.",
              "Safety factor = mean strength / mean stress; safety margin normalizes their gap by total scatter.",
              "Design margins are measured and widened by HALT in Unit V - the loop closes there.",
            ],
            table: {
              caption: "Typical derating guidelines.",
              headers: ["Stress", "Rating", "Design limit", "Derating"],
              rows: [
                ["Capacitor voltage", "50 V", "25 V or less", "50%"],
                ["Relay contact current", "10 A", "7 A", "70%"],
                ["Junction temperature", "110 deg C", "85 deg C", "23 deg C margin"],
                ["Bearing dynamic load", "14 kN", "7 kN", "50%"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The reliability program stack",
              caption:
                "Broad design rules carry everything; each layer above sharpens the one below.",
              tiers: [
                { label: "Field data feedback", note: "warranty and fleet learning" },
                { label: "Reliability growth testing", note: "test, fix, re-test" },
                { label: "Analysis: FTA and FMECA", note: "find weaknesses on paper" },
                { label: "Design rules: derating and simplicity", note: "the broad base" },
              ],
            },
            callout: {
              type: "tip",
              title: "The cheapest reliability",
              body: "A part eliminated never fails, never needs spares and never needs screening. Before adding redundancy to any design, ask whether a simpler architecture could deliver the same target - the answer is yes surprisingly often, and it is always cheaper.",
            },
            keyTerms: [
              { term: "Derating", definition: "Operating a component below its rated stress level to extend life and lower failure rate." },
              { term: "Stress-strength interference", definition: "The overlap of stress and strength distributions; reliability is the probability strength exceeds stress." },
              { term: "Safety margin", definition: "(mu_strength - mu_stress) / combined standard deviation - separation measured in units of scatter." },
            ],
            examQuestions: [
              {
                q: "Explain stress-strength interference and define safety factor and safety margin. Describe derating with typical levels for voltage, current and temperature, and explain why part-count reduction raises system reliability.",
                marks: 7,
                outline: [
                  "Draw overlapping stress and strength densities; failures live in the overlap.",
                  "Reliability = P(strength > stress).",
                  "Safety factor = mean strength / mean stress - ignores scatter.",
                  "Safety margin = (mu_s - mu_st)/sqrt(sigma_strength^2 + sigma_stress^2).",
                  "Derating: capacitors 50% voltage, contacts 70% current, junctions 85 deg C vs 110 deg C.",
                  "Part-count reduction: series reliability multiplies, so fewer blocks = higher product.",
                  "Conclude: design-stage levers beat inspection-stage fixes on cost.",
                ],
              },
              {
                q: "Define derating and give one electrical and one mechanical example.",
                marks: 2,
              },
              {
                q: "A shaft has strength N(600, 60^2) MPa and sees stress N(400, 40^2) MPa. Compute the safety factor and the safety margin.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Reliability allocation and the AGREE method",
            body: [
              "Allocation (apportionment) runs the design process backwards: given a system reliability target, assign a sub-target to every subsystem. Equal allocation - dividing the goal evenly - ignores engineering reality: subsystems differ in complexity, criticality and duty. The AGREE method (Advisory Group on Reliability of Electronic Equipment) weights the split properly using three factors per subsystem: complexity n_i, the count of modules it contains; importance w_i, the probability that a failure of that subsystem actually fails the system; and operating time t_i, the hours it must run within the mission t.",
              "The AGREE formula assigns subsystem failure rate lambda_i = (n_i/N) x (lambda_s x t) / (w_i x t_i), where N is the total module count and lambda_s the target system rate, -ln R_s over t. The logic reads directly: a subsystem carrying a larger share of the system's modules should carry a proportionally larger share of its failure budget; a critical subsystem (high w_i) must be more reliable, so dividing by w_i tightens its budget; longer-running subsystems are assigned proportionally lower rates.",
              "Worked case: R_s = 0.90 for a 100-hour mission, so lambda_s = 0.00105 per hour. Subsystem A has 20 modules, importance 0.8 and runs the full mission; subsystem B has 30 modules and importance 1.0. Then lambda_A = 0.4 x 0.00105 / 0.8 = 0.000527 per hour, giving R_A = 0.949, and lambda_B = 0.6 x 0.00105 = 0.000632, giving R_B = 0.939. The importance-weighted failure probabilities sum back to the system target - the built-in verification that the allocation was performed correctly.",
            ],
            bullets: [
              "Allocation divides a system target into subsystem reliability budgets.",
              "AGREE factors: complexity n_i (module count), importance w_i, operating time t_i.",
              "Formula: lambda_i = (n_i/N) x (lambda_s t) / (w_i t_i) with lambda_s = -ln R_s / t.",
              "Importance w_i: probability that this subsystem's failure fails the system.",
              "Verification: the weighted failure fractions must reconstruct the system target - always show it.",
            ],
            codeExample: {
              language: "python",
              caption:
                "AGREE allocation of a 0.90 system target over two subsystems.",
              code: `import math

R_sys, t = 0.90, 100.0
lam_sys = -math.log(R_sys) / t      # target system failure rate

subs = [
    # name, modules n_i, importance w_i, operating time t_i
    ("power supply", 20, 0.8, 100.0),
    ("controller",   30, 1.0, 100.0),
]
N = sum(n for _, n, _, _ in subs)

for name, n, w, top in subs:
    lam_i = (n / N) * lam_sys * t / (w * top)
    print(f"{name:13s} lambda = {lam_i:.6f}/h"
          f"  R = {math.exp(-lam_i * top):.4f}")

# verification: importance-weighted failure fractions
check = 0.0
for _, n, w, top in subs:
    lam_i = (n / N) * lam_sys * t / (w * top)
    check += w * lam_i * top
print(f"weighted failure fraction = {check:.4f}"
      f"  (target {1 - R_sys:.4f})")`,
            },
            diagram: {
              kind: "pipeline",
              title: "AGREE allocation in five stages",
              caption:
                "From the system target to verified subsystem budgets.",
              stages: [
                { label: "Set system target", note: "R_s and mission time t" },
                { label: "Count complexity", note: "n_i modules per subsystem" },
                { label: "Rate importance", note: "w_i = P(sys fails | unit fails)" },
                { label: "Allocate rates", note: "the AGREE formula" },
                { label: "Verify and iterate", note: "weighted sum meets target" },
              ],
            },
            callout: {
              type: "exam",
              title: "The AGREE numerical pattern",
              body: "The question almost always gives two or three subsystems with n_i, w_i and t_i plus a system target. Compute lambda_s = -ln R_s/t first, then each lambda_i, then each R_i, and finish with the weighted-sum verification - the last line is frequently worth a mark of its own.",
            },
            keyTerms: [
              { term: "Reliability allocation", definition: "Apportioning a system reliability target among subsystems as design budgets." },
              { term: "Importance factor w_i", definition: "The probability that failure of subsystem i causes system failure; tightens its allocated budget." },
              { term: "AGREE method", definition: "An allocation scheme weighting subsystem failure rates by module count, importance and operating time." },
            ],
            examQuestions: [
              {
                q: "What is reliability allocation? Derive the AGREE allocation formula for subsystem failure rate in terms of complexity, importance and operating time, and allocate R_s = 0.90 over t = 100 h between two subsystems with n = 20 and 30 modules, importance 0.8 and 1.0, both operating the full mission.",
                marks: 7,
                outline: [
                  "Define allocation: top-down division of the system target.",
                  "Introduce n_i (complexity), w_i (importance), t_i (operating time), N = sum of n_i.",
                  "State lambda_s = -ln R_s / t = 0.00105 per hour for the 0.90/100 h target.",
                  "Formula: lambda_i = (n_i/N)(lambda_s t)/(w_i t_i).",
                  "Subsystem A: lambda = 0.4 x 0.00105 / 0.8 = 0.000527, R_A = 0.949.",
                  "Subsystem B: lambda = 0.6 x 0.00105 = 0.000632, R_B = 0.939.",
                  "Verify: sum of w_i(1 - R_i) reproduces 1 - R_s = 0.10.",
                ],
              },
              {
                q: "Define the importance factor used in AGREE allocation.",
                marks: 2,
              },
              {
                q: "Why is equal allocation of a system reliability target usually unsatisfactory? Give two weighting criteria that improve it.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Maintenance engineering: PM, CBM and RCM",
            body: [
              "Maintenance policy is a spectrum. Corrective maintenance - run to failure - suits cheap, non-critical, easily replaced items. Preventive maintenance (PM) replaces or overhauls at fixed intervals of time or usage. Condition-based maintenance (CBM) watches a degradation signal - vibration, oil particles, temperature, insulation resistance - and intervenes when the signal crosses a threshold. Each policy owns a region of the bathtub: PM belongs to rising hazard, CBM to monitorable degradation, corrective to flat hazard paired with trivial consequence.",
              "Two results discipline the choice. First, PM on an exponential item destroys value: the memoryless proof of Unit II means a scheduled replacement is statistically identical to the survivor it evicts - preventive replacement only pays when hazard is genuinely rising. Second, CBM lives or dies by the P-F interval: the time between a detectable potential failure P and the functional failure F. Vibration might betray a bearing months before seizure; temperature only hours. The monitoring interval must be comfortably shorter than the P-F interval, or the warning arrives too late to act on.",
              "Reliability-Centred Maintenance (RCM), born in the airlines from Nowlan and Heap's work, is the systematic wrapper. Seven questions per asset: what are the functions and standards; how can it fail; what causes each failure; what happens when it fails; what does the failure matter (hidden, safety, operational or non-operational consequence); what task is worth doing - on-condition, restoration, discard, redesign, or deliberate run-to-failure; and how the choice improves as field data returns. Plants report double-digit availability gains at flat cost - the quiet payoff of asking the seven questions in order.",
            ],
            bullets: [
              "Corrective, preventive and condition-based maintenance form the policy spectrum.",
              "PM pays only when hazard rises - the memoryless property makes it worthless on flat hazard.",
              "The P-F interval spans first detection (P) to functional failure (F); monitor well inside it.",
              "Optimal PM interval balances the cost of early replacement against the cost of failure.",
              "RCM asks seven questions per asset and matches tasks to consequence categories.",
              "Hidden failures need scheduled failure-finding tests - they reveal themselves only when called on.",
            ],
            table: {
              caption: "Maintenance strategy comparison.",
              headers: ["Strategy", "Trigger", "Best when", "Weakness"],
              rows: [
                ["Corrective (run to failure)", "the failure itself", "cheap, non-critical items", "unplanned downtime"],
                ["Preventive (PM)", "calendar or usage", "rising hazard, known life", "wastes life if hazard is flat"],
                ["Condition-based (CBM)", "monitor signal threshold", "monitorable degradation", "sensors and P-F interval needed"],
                ["RCM program", "consequence analysis", "critical, complex assets", "analysis effort upfront"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The maintenance task map",
              caption:
                "Two axes - what triggers the task and what the task does - place every maintenance choice.",
              axes: { x: "trigger: by the clock | by the condition", y: "action: replace or overhaul | inspect or monitor" },
              quadrants: [
                { label: "Fixed-interval PM", note: "clock-triggered replacement or overhaul" },
                { label: "Condition-based replace", note: "swap when a signal crosses the limit" },
                { label: "Scheduled inspection", note: "periodic checks and NDT routes" },
                { label: "Continuous monitoring", note: "sensors, alarms, trend dashboards" },
              ],
            },
            callout: {
              type: "exam",
              title: "Justify PM through the hazard",
              body: "Whenever asked to justify or criticize preventive maintenance, argue from the hazard shape: rising hazard justifies scheduled replacement; constant hazard makes it pure waste by the memoryless property. That single argument, correctly stated, carries most of the marks in maintenance questions.",
            },
            keyTerms: [
              { term: "Preventive maintenance", definition: "Replacement or overhaul at fixed intervals of time or usage, justified when hazard is rising." },
              { term: "Condition-based maintenance", definition: "Intervention when a monitored degradation signal crosses a threshold, inside the P-F interval." },
              { term: "P-F interval", definition: "The time between the first detectable potential failure P and the functional failure F." },
            ],
            examQuestions: [
              {
                q: "Explain corrective, preventive and condition-based maintenance. Show why preventive replacement is justified only for increasing hazard rates, describe the P-F interval, and outline the RCM decision process and its seven questions.",
                marks: 7,
                outline: [
                  "Define the three policies with one example each.",
                  "Memoryless property: on constant hazard, replacement units equal survivors statistically.",
                  "Conclusion: PM pays only when hazard rises - wearout region.",
                  "P-F interval: potential failure detectable at P, functional failure at F.",
                  "Monitoring interval must be shorter than P-F for the warning to be actionable.",
                  "RCM seven questions: functions, failure modes, causes, effects, consequences, tasks, refinement.",
                  "Task options: on-condition, restoration, discard, redesign, run-to-failure.",
                ],
              },
              {
                q: "Define the P-F interval and state its role in condition-based maintenance.",
                marks: 2,
              },
              {
                q: "Explain, using the memoryless property, why scheduled replacement of an exponential item wastes money.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Spares provisioning",
            body: [
              "Availability is decided on the shelf as much as in the design: a failed pump with no spare is down until procurement is. For a fleet of M similar items with constant failure rate lambda, the steady demand on the store is D = M x lambda spares per hour. Orders arrive after a lead time L - procurement and transport - during which demand keeps accumulating. The number of demands during lead time is Poisson with mean D x L, and that single number drives the entire stock decision.",
              "Stock level S covers demand during the lead time; stockout occurs when lead-time demand exceeds S. For a Poisson mean of 5 - say 50 pumps at lambda = 0.001 per hour and a 100-hour lead time - the cumulative Poisson gives P(demand <= 8) = 0.932, so S = 8 leaves a 6.8 percent stockout risk; S = 9 leaves 3.2 percent. Choosing S is then a stated-risk decision: pick the smallest S whose tail probability meets the target, and a 5 percent target here selects S = 9.",
              "Economics closes the loop: every spare ties up capital and shelf life while every stockout idles production, so the tail target should be priced, not guessed. Repairable items add a rotable dimension - a failed unit returns to service after repair and re-enters the pool, so stock can be sized against repair turnaround instead of procurement. Multi-echelon systems with base and depot stores extend the same Poisson logic, and models such as METRIC optimize the whole network. The examination version stays at one echelon: compute D x L, then cumulate the Poisson tail.",
            ],
            bullets: [
              "Spare-part demand: D = fleet size x failure rate, in spares per hour.",
              "Lead-time demand is Poisson with mean D x L - the sizing number.",
              "Stockout risk = P(demand > S) = Poisson tail above the stock level.",
              "Choose the smallest S whose tail probability meets the target risk (often 5%).",
              "Repairable rotables are sized against repair turnaround, not procurement lead time.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Poisson sizing of a spares pool for a 50-pump fleet with a 100-h lead time.",
              code: `import math

def poisson_cdf(k, m):
    """P(X <= k) for a Poisson random variable with mean m."""
    total = 0.0
    for i in range(k + 1):
        total += math.exp(-m) * m ** i / math.factorial(i)
    return total

M, lam, L = 50, 0.001, 100.0     # fleet, rate per hour, lead time
mean_demand = M * lam * L        # = 5 expected demands

print(f"mean lead-time demand = {mean_demand:.0f}")

for S in range(5, 11):
    risk = 1 - poisson_cdf(S, mean_demand)
    print(f"S = {S:2d}  stockout risk = {risk:.3f}")

# S = 9 is the smallest stock meeting a 5% risk target`,
            },
            diagram: {
              kind: "flow",
              title: "Sizing a spares pool",
              caption:
                "From fleet demand to a stock level with a stated risk - five moves, one decision.",
              steps: [
                { label: "Fleet demand", note: "D = M x lambda" },
                { label: "Lead-time exposure", note: "mean = D x L" },
                { label: "Pick stockout target", note: "e.g. 5%" },
                { label: "Cumulate the Poisson", note: "find the smallest S" },
                { label: "Review economics", note: "holding cost vs downtime cost" },
              ],
            },
            callout: {
              type: "tip",
              title: "Practise the Poisson tail by hand",
              body: "Compute D x L first - it is almost always a clean 2 to 6 in exam questions - then evaluate e^-m, m, m^2/2!, and so on, cumulating until the tail meets the target. Writing the terms in a table earns method marks even if arithmetic slips at the end.",
            },
            keyTerms: [
              { term: "Lead time", definition: "The delay between placing a spares order and its arrival; the exposure window for demand." },
              { term: "Safety stock", definition: "Inventory held above expected demand to bound the stockout probability at a chosen risk." },
              { term: "Stockout risk", definition: "The probability that lead-time demand exceeds the stock on the shelf; a Poisson tail." },
            ],
            examQuestions: [
              {
                q: "Explain spares provisioning for a repairable fleet. Derive the Poisson demand model over lead time and determine the smallest stock level for a 5% stockout risk when 50 units each fail at 0.001/h and the lead time is 100 h.",
                marks: 7,
                outline: [
                  "Demand rate D = M x lambda = 50 x 0.001 = 0.05 spares/h.",
                  "Lead-time demand is Poisson with mean D x L = 5.",
                  "Stockout risk = P(X > S) = 1 - cumulative Poisson at S.",
                  "Evaluate the CDF: P(X <= 8) = 0.932, so S = 8 risks 6.8%.",
                  "P(X <= 9) = 0.968, so S = 9 risks 3.2%.",
                  "Smallest S meeting 5%: S = 9 spares.",
                  "Note the economics: each extra spare trades capital against downtime.",
                ],
              },
              {
                q: "Why is spare-parts demand during lead time modeled as a Poisson random variable?",
                marks: 2,
              },
              {
                q: "Define safety stock and fill rate in a spares store, and state how they relate.",
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
      title: "Reliability Testing and Estimation",
      summary:
        "Proof on the bench: HALT and screening tests, accelerated life testing with the Arrhenius, Eyring and inverse-power models, censored-data analysis with total-time-on-test and Kaplan-Meier, Bayesian updating with beta priors, software reliability growth models, and integrated case studies.",
      chapter: {
        number: "05",
        title: "Testing and Estimation",
        intro:
          "Unit V moves into the laboratory and the field: the test families (HALT, ALT, screening), the acceleration models that map high stress to use conditions, the censoring schemes that make sense of unfinished tests, the Bayesian machinery that fuses prior belief with small samples, and the growth models that describe software as it is debugged - closing with case studies that braid all five units together.",
        inOneBreath:
          "HALT step-stresses prototypes to operational and destruct limits to widen margins; ALT extrapolates through the Arrhenius factor AF = exp[(Ea/k)(1/T_use - 1/T_test)], the Eyring pre-factor, or the inverse power law (V_test/V_use)^n; censored tests estimate MTTF as total time on test over failures, with Kaplan-Meier tracking reliability nonparametrically; Bayesian beta-binomial updating fuses prior and data into Beta(alpha + n - r, beta + r); and software reliability grows as Jelinski-Moranda steps or Goel-Okumoto's a(1 - e^-bt) accumulate fixes.",
        sections: [
          {
            number: "5.1",
            title: "HALT, burn-in and screening tests",
            body: [
              "Reliability testing divides by intent. Tests that measure - life tests and MTBF demonstration - run at rated conditions to estimate a number. Tests that improve - HALT, the Highly Accelerated Life Test - step-stress design prototypes far beyond specification, hunting weak links and measuring design margins rather than life. Tests that screen - burn-in and environmental stress screening (ESS) - run every production unit briefly at calibrated stress to precipitate the infant-mortality defects that would otherwise die in the customer's hands.",
              "HALT applies cold, heat, rapid thermal cycling, vibration and combined stresses in escalating steps until the product first stops working - the operational limit - and then stops working permanently - the destruct limit. The margins between specification, operational and destruct limits are the deliverable: a power supply specified to 70 deg C that operates to 90 deg C and destructs at 105 deg C carries margins that redesign can widen. HALT findings feed design fixes; after redesign, HASS (Highly Accelerated Stress Screen) applies a tempered version of the same stresses to production units.",
              "Screening must be calibrated, not merely harsh. Screening strength - the fraction of latent defectives removed - rises with stress, but so does damage to good units; the damage ratio, the fraction of useful life consumed in survivors, must stay negligible. A burn-in of 48 h at 60 deg C that removes 95 percent of latent defects while consuming 2 percent of good-unit life is a sound screen; doubling the stress to chase the last defects may kill good units along with the bad. Test planning - sample size, duration, accept criteria - turns these choices into documented, contractual decisions.",
            ],
            bullets: [
              "Test families: measure (life tests), improve (HALT), screen (burn-in, ESS, HASS).",
              "HALT: step stress prototypes to the operational limit, then the destruct limit.",
              "Margins between spec, operational and destruct limits are HALT's real product.",
              "HASS: the production-screen descendant of HALT, run at tempered stress levels.",
              "Screening strength (defectives removed) is traded against damage ratio (good life consumed).",
              "HALT is not pass/fail: it finds margins and weak links, and estimates no field life.",
            ],
            table: {
              caption: "Test types at a glance.",
              headers: ["Test", "Purpose", "Sample", "Stress"],
              rows: [
                ["HALT", "find margins and weak links", "design prototypes", "step stress to destruct"],
                ["HASS / ESS", "screen production defects", "all production units", "calibrated screen stress"],
                ["Burn-in", "remove infant mortality", "all production units", "elevated temperature, fixed hours"],
                ["ALT", "estimate use-level life", "prototypes", "fixed high stress + model"],
                ["MTBF demonstration", "verify a target", "production sample", "rated conditions"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the right test",
              caption:
                "Sample type and stress level together select the test family.",
              axes: { x: "sample: prototypes | production units", y: "stress: beyond spec | at spec levels" },
              quadrants: [
                { label: "HALT and ALT", note: "prototypes stressed beyond specification" },
                { label: "ESS, HASS, burn-in", note: "production units, calibrated screens" },
                { label: "Rated-condition life test", note: "prototypes at spec - true but slow" },
                { label: "Demonstration testing", note: "production sample at spec, pass/fail" },
              ],
            },
            callout: {
              type: "exam",
              title: "HALT versus ALT",
              body: "The 3-mark version: HALT improves the design by finding margins and weak links but estimates no life; ALT measures life by accelerating a known mechanism and extrapolating through a model. Say 'margins versus models' and the marks land.",
            },
            keyTerms: [
              { term: "HALT", definition: "Highly Accelerated Life Test: step-stress prototypes beyond spec to operational and destruct limits to expose margins." },
              { term: "Burn-in", definition: "A production screen running units briefly at elevated stress to precipitate infant-mortality defects." },
              { term: "Screening strength", definition: "The fraction of latent defectives removed by a screen, traded against damage to good units." },
            ],
            examQuestions: [
              {
                q: "Compare HALT, ALT, burn-in and ESS: objectives, samples, stress levels, and what each can and cannot tell you. Explain the operational and destruct limits revealed by HALT and how HASS follows from it.",
                marks: 7,
                outline: [
                  "HALT: prototypes, step stress beyond spec; purpose is margins and weak links.",
                  "Operational limit: stress where the product stops working but recovers.",
                  "Destruct limit: stress of permanent failure; the gap to spec is the margin.",
                  "ALT: prototypes, fixed high stress, physics model extrapolates use-level life.",
                  "Burn-in and ESS: all production units, calibrated stress, remove infant defects.",
                  "HASS: production screening derived from HALT findings, tempered stress.",
                  "Contrast: HALT improves design; ALT estimates life; screens protect the customer.",
                ],
              },
              {
                q: "Define the operational limit and the destruct limit found in a HALT.",
                marks: 2,
              },
              {
                q: "Why must a burn-in screen be calibrated? Define screening strength and damage ratio.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Accelerated life testing: Arrhenius and Eyring models",
            body: [
              "Use-condition life is often decades - far too long to test directly - so accelerated life testing (ALT) compresses time by running at elevated stress: temperature, voltage, humidity, pressure, load. The price of speed is a model: a physics-based acceleration law that maps test results back to field conditions. The acceleration factor AF is defined as life at use conditions divided by life at test conditions; sample sizes and test durations are then planned around the chosen stress and model, and every ALT number is only as trustworthy as the law behind its AF.",
              "For temperature-driven mechanisms - chemical degradation, diffusion, electromigration - the Arrhenius law says failure rate goes as exp(-Ea/kT), giving AF = exp[(Ea/k)(1/T_use - 1/T_test)] with k = 8.617e-5 eV/K. The Eyring model refines Arrhenius with a pre-exponential temperature factor, AF = (T_test/T_use) times the same exponential, and generalizes to combined stresses through extra terms. Non-thermal stresses follow the inverse power law: life goes as V^-n, so AF = (V_test/V_use)^n - the model for voltage stress on capacitors and load on bearings.",
              "Worked case: Ea = 0.7 eV, use at 25 deg C = 298 K, test at 125 deg C = 398 K. Then Ea/k = 8124 K, 1/298 - 1/398 = 0.000843, and AF = e^6.85 = about 940: a 1000-hour test at 125 deg C demonstrates roughly 940,000 hours at room temperature, with the Eyring pre-factor lifting the estimate toward 1260. Both rest on the assumption - always stated, sometimes true - that the failure mechanism is identical at both temperatures and only its pace changes. Violations surface as curved Arrhenius plots, the standard diagnostic for a mechanism change.",
            ],
            bullets: [
              "ALT buys time with stress; a physics model is the purchase price.",
              "Acceleration factor AF = life at use / life at test conditions.",
              "Arrhenius: AF = exp[(Ea/k)(1/T_use - 1/T_test)]; temperatures must be absolute (Kelvin).",
              "Eyring adds the pre-factor T_test/T_use and generalizes to combined stresses.",
              "Inverse power law: AF = (V_test/V_use)^n for voltage, load and other non-thermal stress.",
              "Core assumption: the same failure mechanism operates at test and use stress.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Arrhenius, Eyring and inverse-power acceleration factors for a 0.7 eV mechanism.",
              code: `import math

k = 8.617e-5          # Boltzmann constant, eV/K
Ea = 0.70             # activation energy, eV

def AF_arrhenius(T_use, T_test):
    return math.exp((Ea / k) * (1 / T_use - 1 / T_test))

def AF_eyring(T_use, T_test):
    return (T_test / T_use) * math.exp(
        (Ea / k) * (1 / T_use - 1 / T_test))

T_use, T_test = 298.0, 398.0    # 25 deg C and 125 deg C
af = AF_arrhenius(T_use, T_test)
print(f"Arrhenius AF = {af:.0f}")
print(f"Eyring AF    = {AF_eyring(T_use, T_test):.0f}")
print(f"1000 h at 398 K ~ {1000 * af:.0f} h at 298 K")

def AF_power(V_use, V_test, n):
    return (V_test / V_use) ** n

print(f"power-law AF (10 V over 5 V, n = 3) = "
      f"{AF_power(5.0, 10.0, 3):.0f}")`,
            },
            diagram: {
              kind: "flow",
              title: "Extrapolating from ALT to the field",
              caption:
                "Five steps from a hot, short test to a cool, long warranty number.",
              steps: [
                { label: "Test at high stress", note: "e.g. 125 deg C for 1000 h" },
                { label: "Fit life versus stress", note: "Arrhenius plot: ln life vs 1/T" },
                { label: "Extract Ea", note: "slope = Ea/k" },
                { label: "Compute AF", note: "use versus test conditions" },
                { label: "Predict use-level life", note: "test life x AF" },
              ],
            },
            callout: {
              type: "warning",
              title: "Kelvin first, always",
              body: "The most common ALT slip is plugging Celsius into the Arrhenius formula. Convert first: 25 deg C = 298 K, 125 deg C = 398 K. A Celsius computation is not approximately right - it is meaningless, and examiners zero the whole numerical for it.",
            },
            keyTerms: [
              { term: "Acceleration factor", definition: "The ratio of life at use conditions to life at test conditions under an acceleration model." },
              { term: "Activation energy Ea", definition: "The energy barrier of the failure mechanism; the slope parameter of the Arrhenius law, in eV." },
              { term: "Inverse power law", definition: "An acceleration model where life varies as stress to the negative power n, AF = (V_test/V_use)^n." },
            ],
            examQuestions: [
              {
                q: "Explain accelerated life testing. Derive the Arrhenius acceleration factor and compute AF for Ea = 0.7 eV between 25 deg C and 125 deg C (k = 8.617e-5 eV/K). State the Eyring model and the inverse power law, and say when each applies.",
                marks: 7,
                outline: [
                  "Define ALT and the acceleration factor AF = life_use / life_test.",
                  "Arrhenius rate law: rate proportional to exp(-Ea/kT).",
                  "Divide rates to obtain AF = exp[(Ea/k)(1/T_use - 1/T_test)].",
                  "Convert to Kelvin: 298 K and 398 K; Ea/k = 8124 K.",
                  "Compute 1/298 - 1/398 = 0.000843; AF = e^6.85 = about 940.",
                  "Eyring: pre-factor (T_test/T_use) times the Arrhenius exponential; combined-stress terms.",
                  "Inverse power law for voltage or load: AF = (V_test/V_use)^n; same-mechanism assumption.",
                ],
              },
              {
                q: "Define the acceleration factor of an accelerated life test.",
                marks: 2,
              },
              {
                q: "A 500-hour test at 85 deg C corresponds to how many hours at 25 deg C if AF = 20? State two assumptions this extrapolation hides.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Censoring and life-data analysis",
            body: [
              "Life tests rarely end with every unit failed - money and calendar run out first. Data so truncated are censored. Type I (time) censoring stops the test at a fixed clock time, so the number of failures is random. Type II (failure) censoring stops at the r-th failure, so the duration is random. Field data add multiple censoring: units retire, sell or are preventively replaced mid-study, each contributing a known survival time without a failure time. Left and interval censoring complete the taxonomy.",
              "Estimation must honour the censoring. For the exponential law, the maximum-likelihood estimator of MTTF is total time on test divided by the number of failures - and total time on test counts the running hours of survivors, censored units included. Five units tested to 1000 h with failures at 300, 550 and 800 h accumulate 300 + 550 + 800 + 1000 + 1000 = 3650 unit-hours, so the estimate is MTTF = 3650/3 = 1217 h. Dropping the survivors from the denominator would foolishly read 550 h - a two-fold error.",
              "The Kaplan-Meier product-limit estimator gives distribution-free reliability: at each failure time multiply (1 - d/n), with d the failures and n the units still at risk. In the example: R(300) = 4/5 = 0.8, R(550) = 0.8 x 3/4 = 0.6, R(800) = 0.6 x 2/3 = 0.4 - a staircase of reliabilities that honours censored withdrawals exactly. Plot it against a fitted Weibull curve and the residual gaps tell whether the fit deserves extrapolation; Kaplan-Meier never assumes a distribution, which is exactly why it is the workhorse of field data.",
            ],
            bullets: [
              "Type I censoring: stop at fixed time - the failure count is random.",
              "Type II censoring: stop at the r-th failure - the test duration is random.",
              "Field data are multiply censored: retirements and withdrawals are censoring events too.",
              "Exponential MLE: MTTF = total time on test / number of failures - survivors' hours count.",
              "Kaplan-Meier: multiply (1 - d/n) at each failure; distribution-free and censor-aware.",
              "Ignoring censored units biases MTTF estimates sharply downward.",
            ],
            table: {
              caption: "A time-censored test record (stopped at 1000 h).",
              headers: ["Unit", "Result", "Life or censor time", "Time on test"],
              rows: [
                ["U1", "failed", "300 h", "300 h"],
                ["U2", "failed", "550 h", "550 h"],
                ["U3", "failed", "800 h", "800 h"],
                ["U4", "censored", "1000 h", "1000 h"],
                ["U5", "censored", "1000 h", "1000 h"],
                ["Total", "3 failures", "-", "3650 h"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Type I versus Type II censoring",
              caption:
                "Two ways to stop a test early - one fixes the clock, the other fixes the information.",
              left: {
                heading: "Type I - time censored",
                items: [
                  "Stop the clock at fixed T",
                  "Number of failures is random",
                  "Test cost and duration predictable",
                  "Common in qualification runs",
                ],
              },
              right: {
                heading: "Type II - failure censored",
                items: [
                  "Stop at the r-th failure",
                  "Test duration is random",
                  "Fixed amount of failure information",
                  "Common in life experiments",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Count the survivors' hours",
              body: "In every censored-data numerical, write the exposure table first - failed units contribute their failure time, survivors contribute the full censoring time. 'Total time on test' means exactly that: every hour every unit ran, alive or not.",
            },
            keyTerms: [
              { term: "Censoring", definition: "Incomplete observation of life: a unit's exact failure time is unknown, only that it exceeded some time." },
              { term: "Type II censoring", definition: "Stopping a test at the r-th failure, making the duration random but the failure count fixed." },
              { term: "Total time on test", definition: "The sum of all unit-hours run, failures and censored survivors alike; the denominator of the exponential MLE." },
            ],
            examQuestions: [
              {
                q: "Explain Type I and Type II censoring with examples. For five units tested to 1000 h with failures at 300, 550 and 800 h and two survivors, estimate the MTTF by the exponential MLE and the Kaplan-Meier reliability at each failure time.",
                marks: 7,
                outline: [
                  "Type I: fixed stop time, random failure count; Type II: stop at r-th failure, random duration.",
                  "Build the exposure table: 300 + 550 + 800 + 1000 + 1000 = 3650 unit-hours.",
                  "MTTF = 3650/3 = 1217 h - survivors' hours included.",
                  "Kaplan-Meier at 300 h: 5 at risk, 1 fails, R = 4/5 = 0.8.",
                  "At 550 h: 4 at risk, 1 fails, R = 0.8 x 3/4 = 0.6.",
                  "At 800 h: 3 at risk, 1 fails, R = 0.6 x 2/3 = 0.4.",
                  "Contrast: dropping survivors gives 550 h - a biased, two-fold error.",
                ],
              },
              {
                q: "Distinguish right censoring from left censoring with one example of each.",
                marks: 2,
              },
              {
                q: "Why does ignoring censored observations bias an MTTF estimate downward?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Bayesian reliability estimation",
            body: [
              "Classical statistics treats a parameter as fixed and unknown, estimable only from this test's data; small samples then buy wide, often useless confidence intervals. The Bayesian approach treats the parameter - a reliability, a failure rate - as a random variable with a prior distribution encoding what was believed before the test: vendor data, earlier designs, engineering judgement. Bayes' theorem multiplies the prior by the likelihood of the observed data and normalizes, yielding a posterior distribution that fuses belief with evidence. The posterior is a full distribution, so its spread quantifies the remaining uncertainty - exactly what risk decisions consume.",
              "The beta-binomial pair is the reliability standard. The reliability R of pass/fail testing carries a Beta(alpha, beta) prior with mean alpha/(alpha + beta); after testing n units with r failures, the posterior is Beta(alpha + n - r, beta + r) - successes add to alpha, failures add to beta. The uniform prior Beta(1,1) is the hands-off choice, and the conjugacy (a beta posterior for a binomial likelihood) makes updating sequential: yesterday's posterior is today's prior as test batches arrive. Point estimates, credible intervals and predictive probabilities all read directly off the posterior.",
              "Worked case: a vendor quotes experience equivalent to Beta(4, 2) - prior mean 0.667. An in-house run of 20 units yields 1 failure. The posterior is Beta(23, 3), mean 23/26 = 0.885, standard deviation about 0.063. A uniform prior over the same data would give Beta(20, 2), mean 0.909 - the informed prior pulled the estimate down while the data pulled it up, precisely the arbitration Bayes promises. Small samples, vendor claims and warranty returns are its natural habitat.",
            ],
            bullets: [
              "Bayes: posterior is proportional to likelihood times prior; parameters are random variables.",
              "Beta prior on reliability: mean = alpha/(alpha + beta); Beta(1,1) is the uniform prior.",
              "Update rule: successes add to alpha, failures add to beta - Beta(alpha + n - r, beta + r).",
              "Conjugacy keeps every posterior a beta, so updating is sequential and cheap.",
              "The posterior spread, not just its mean, quantifies remaining uncertainty for decisions.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Beta-binomial update: vendor prior Beta(4, 2) plus a 20-unit test with 1 failure.",
              code: `def beta_stats(a, b):
    mean = a / (a + b)
    var = a * b / ((a + b) ** 2 * (a + b + 1))
    return mean, var ** 0.5

prior = (4, 2)              # vendor experience: mean 0.667
n, r = 20, 1                # in-house test: 20 units, 1 failure

post = (prior[0] + n - r,   # successes add to alpha
        prior[1] + r)       # failures add to beta

m, s = beta_stats(*prior)
print(f"prior  Beta(4, 2): mean {m:.3f}")

m, s = beta_stats(*post)
print(f"posterior Beta({post[0]}, {post[1]}):"
      f" mean {m:.3f}, sd {s:.3f}")

m, s = beta_stats(20, 2)
print(f"uniform prior -> Beta(20, 2): mean {m:.3f}")`,
            },
            diagram: {
              kind: "cycle",
              title: "The Bayesian updating loop",
              caption:
                "Each lap of the loop sharpens the estimate - the posterior never stops learning.",
              steps: [
                { label: "State the prior", note: "engineering belief as a distribution" },
                { label: "Run the test", note: "n units, r failures" },
                { label: "Update parameters", note: "alpha + n - r, beta + r" },
                { label: "Read the posterior", note: "mean, spread, credible bounds" },
                { label: "Feed the next round", note: "posterior becomes prior" },
              ],
            },
            callout: {
              type: "exam",
              title: "The update rule",
              body: "Successes add to alpha, failures add to beta - write it before touching numbers. The standard numerical gives a prior like Beta(4, 2) and a test like 20 units, 1 failure: the posterior is Beta(23, 3) with mean 23/26 = 0.885. Verify the direction: more successes raise the mean.",
            },
            keyTerms: [
              { term: "Prior distribution", definition: "The probability distribution encoding belief about a parameter before the current data are seen." },
              { term: "Posterior distribution", definition: "The updated distribution after multiplying the prior by the data likelihood and normalizing." },
              { term: "Conjugate prior", definition: "A prior family that yields a posterior in the same family - beta for binomial reliability data." },
            ],
            examQuestions: [
              {
                q: "Introduce the Bayesian approach to reliability estimation and contrast it with the classical approach. Derive the beta-binomial update and apply it: prior Beta(4, 2), test of 20 units with 1 failure - find the posterior and its mean, and compare with the uniform-prior result.",
                marks: 7,
                outline: [
                  "Classical: parameter fixed, estimate plus confidence interval from data alone.",
                  "Bayesian: parameter random; prior captures vendor or engineering knowledge.",
                  "State Bayes' theorem: posterior proportional to likelihood times prior.",
                  "Beta prior, binomial likelihood: posterior is Beta(alpha + n - r, beta + r).",
                  "Apply: Beta(4 + 19, 2 + 1) = Beta(23, 3).",
                  "Posterior mean = 23/26 = 0.885.",
                  "Uniform prior gives Beta(20, 2), mean 0.909 - the prior tempered the optimistic data.",
                ],
              },
              {
                q: "What is a conjugate prior? Name the conjugate prior for binomial reliability data.",
                marks: 2,
              },
              {
                q: "State two advantages of Bayesian methods in reliability testing.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Software reliability and integrated case studies",
            body: [
              "Software fails by a different physics: there is no wearout, no bathtub, no fatigue. Failures are latent design faults - wrong logic, missed boundary conditions - triggered by particular inputs. The reliability measure is failure intensity during execution, and it falls as testing finds and developers remove faults: reliability growth. The Jelinski-Moranda model assumes each fix perfectly removes one fault and the hazard drops by a fixed step per fix; the Goel-Okumoto model treats fault detection as a non-homogeneous Poisson process with mean value m(t) = a(1 - e^-bt) and intensity a b e^-bt.",
              "Hardware and software redundancy differ fundamentally. Two identical pumps genuinely back each other up; two copies of the same program share the same bugs and fail together - diversity, not duplication, is the software answer: different algorithms, teams or languages. Repair differs too: a repaired pump returns to roughly new condition, while a fixed program never regresses to that fault. Metrics likewise diverge: hardware quotes MTTF, R(t) and availability; software quotes failures per execution hour, remaining fault density and test coverage.",
              "Case studies knit the course together. An automotive warranty fleet: field failures Weibull-plotted (Unit II) revealed a wearout shape, beta 2.4, pinpointing a bearing batch; FMECA ranked the fix; derating plus HALT on the redesigned part raised the destruct margin by 30 deg C. A reactor protection triplex: 2-out-of-3 voting (Unit III) with FTA-verified elimination of order-1 cut sets. A spares pool for the same fleet: Poisson sizing (Unit IV) cut stockouts from 15 to 3 percent at lower inventory. Units I through V, in sequence, are exactly this loop in miniature.",
            ],
            bullets: [
              "Software faults are latent design errors triggered by inputs - no wearout, no bathtub.",
              "Reliability growth: failure intensity falls as testing removes faults.",
              "Jelinski-Moranda: hazard drops a fixed step per perfect fix, phi(N - i + 1) after i fixes.",
              "Goel-Okumoto: NHPP with m(t) = a(1 - e^-bt) and intensity a b e^-bt.",
              "Identical software copies fail together - diversity, not duplication, buys software redundancy.",
              "Software metrics: failures per execution hour, fault density, test coverage - not MTTF.",
            ],
            table: {
              caption: "Hardware versus software reliability.",
              headers: ["Aspect", "Hardware", "Software"],
              rows: [
                ["Failure cause", "wear, overstress, defects", "latent logic faults"],
                ["Hazard over time", "bathtub curve", "decreases as faults are fixed"],
                ["Repair", "restores condition", "redesign removes the fault permanently"],
                ["Identical redundancy", "genuine backup", "copies share the same bugs"],
                ["Typical metrics", "MTTF, R(t), availability", "failures per execution hour, coverage"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Hardware versus software reliability",
              caption:
                "Same word, different physics - the contrast examiners love to probe.",
              left: {
                heading: "Hardware reliability",
                items: [
                  "Wear and overstress drive failures",
                  "Bathtub hazard over calendar time",
                  "Repair restores original condition",
                  "Identical redundant units help",
                  "Models: exponential, Weibull, normal",
                ],
              },
              right: {
                heading: "Software reliability",
                items: [
                  "Faults are latent design errors",
                  "Hazard falls as testing removes bugs",
                  "A fix is permanent - no wearout",
                  "Copies of one program fail together",
                  "Models: Jelinski-Moranda, Goel-Okumoto",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The redundancy sound bite",
              body: "Memorize this line for vivas and short questions: 'Two identical hardware units are a backup; two identical software modules are the same bug twice.' Diversity - different teams, algorithms or implementations - is the software equivalent of redundancy.",
            },
            keyTerms: [
              { term: "Software reliability growth", definition: "The decrease of failure intensity over time as testing exposes and fixes remove design faults." },
              { term: "Jelinski-Moranda model", definition: "A growth model where each perfect fix removes one fault and the hazard falls by a fixed step." },
              { term: "Goel-Okumoto model", definition: "An NHPP growth model with mean value function m(t) = a(1 - e^-bt) and intensity a b e^-bt." },
            ],
            examQuestions: [
              {
                q: "Explain how software reliability differs from hardware reliability, and describe the Jelinski-Moranda and Goel-Okumoto models with their assumptions. Sketch a reliability growth curve and outline one industrial case study that integrates Weibull analysis, FMECA and HALT.",
                marks: 7,
                outline: [
                  "Contrast: design faults vs physical wear; no bathtub for software.",
                  "Software metric: failure intensity during execution, falling with fixes.",
                  "Jelinski-Moranda: N initial faults, perfect debugging, hazard phi(N - i + 1).",
                  "Goel-Okumoto: NHPP, m(t) = a(1 - e^-bt), intensity a b e^-bt.",
                  "Growth curve: intensity high, decaying, flattening as coverage saturates.",
                  "Redundancy contrast: identical copies fail together - use diversity.",
                  "Case study: warranty fleet Weibull (beta 2.4) -> FMECA ranking -> derating + HALT fix.",
                ],
              },
              {
                q: "State two ways in which software failure differs from hardware failure.",
                marks: 2,
              },
              {
                q: "Write the Goel-Okumoto mean value function and its failure intensity, naming the parameters.",
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
        "RGPV ME-703(D) papers typically spread 65-80 marks across system modelling (RBD, k-out-of-n, FTA, FMECA) and distribution work (Weibull and exponential), with fundamentals supplying definitions, distributions supplying short numericals, and Units IV-V sharing the remaining essay and numerical load. Allocate revision in roughly that ratio, and keep at least one full practice pass per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Weibull distribution: R(t), hazard, plotting, MTTF via Gamma", weight: "10-12 marks", note: "Near-guaranteed; practise 4-5 full parameter reads and the beta mapping." },
        { topic: "Series, parallel and k-out-of-n system reliability", weight: "10-12 marks", note: "Binomial numericals plus derivations; complement-first is the marks-saver." },
        { topic: "Fault tree analysis: gates, top-event probability, cut sets", weight: "7-10 marks", note: "Draw the tree with named gates; evaluate an OR over three branches." },
        { topic: "FMECA worksheet, S-O-D scales and RPN ranking", weight: "7-10 marks", note: "Build one full worksheet and re-rank by severity after RPN." },
        { topic: "Exponential law: memoryless proof, MTTF, interval probabilities", weight: "6-8 marks", note: "The proof plus the PM consequence is the standard 7-marker." },
        { topic: "Hazard rate: definition, transformations, fleet estimation", weight: "5-7 marks", note: "All four function transformations, both directions." },
        { topic: "Availability and maintainability", weight: "5-7 marks", note: "A = MTTF/(MTTF+MTTR) numericals plus the three flavours." },
        { topic: "AGREE reliability allocation", weight: "4-6 marks", note: "One allocation with verification; module fraction first." },
        { topic: "ALT: Arrhenius, Eyring, inverse power law", weight: "4-6 marks", note: "Kelvin conversion and one AF computation; mechanism assumption." },
        { topic: "Censoring, Poisson spares, Bayesian updates", weight: "4-6 marks", note: "Total time on test, Poisson tail sizing, beta-binomial update." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - fundamentals", tasks: ["Definitions, R(t)/F(t)/f(t) transformations, hazard rate derivations", "Bathtub curve sketch + fleet hazard table (2 exercises)", "MTTF/MTBF/MTTR and availability numericals (10 sums)"] },
        { week: "Week 2", focus: "Unit II - distributions part 1", tasks: ["Exponential: memoryless proof, interval probabilities (5 sums)", "Weibull: R, h, MTTF via Gamma (5 sums)", "One full Weibull plot with median ranks"] },
        { week: "Week 3", focus: "Unit II close + Unit III start", tasks: ["Normal z-table drills; lognormal repair-time sums", "Model selection essay: physics + goodness of fit", "Series and parallel numericals (10 sums, complement-first)"] },
        { week: "Week 4", focus: "Unit III - system modelling", tasks: ["k-out-of-n binomial evaluations (5 sums)", "Two fault trees drawn, evaluated, cut sets listed", "Two complete FMECA worksheets with re-ranking"] },
        { week: "Week 5", focus: "Unit IV - design and maintenance", tasks: ["Standby derivations + derating table memorized", "AGREE allocations (3 sums) and PM/CBM/RCM essays", "Poisson spares sizing (3 sums)"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["HALT/ALT theory; Arrhenius and Eyring AF numericals (5)", "Censoring MLE + Kaplan-Meier; beta-binomial updates; software models", "Two full past papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last-day rescue plan",
      bullets: [
        "Rewrite the formula sheet from memory: R/F/f/h transformations, MTTF integrals, availability, RPN, AGREE, Arrhenius AF, Poisson spares - whatever you cannot reproduce is tonight's revision.",
        "Redraw the four guaranteed sketches: bathtub curve, series and parallel RBDs, one fault tree, the FMECA worksheet skeleton.",
        "Drill the top six numericals: Weibull R(t), 2-out-of-3 binomial, parallel MTTF 3/(2 lambda), AGREE allocation, Arrhenius AF, Poisson spares sizing.",
        "Memorize the constants: Phi(1) = 0.8413, Phi(2) = 0.9772, ln 2 = 0.693, e^-1 = 0.368, k = 8.617e-5 eV/K.",
        "Skim every 7-mark outline in this guide - the first and last lines of each outline are what examiners read first and reward first.",
        "Sleep. A reliability paper rewards clean arithmetic, and a fresh 40-minute morning pass beats a tired 3 a.m. one every time.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "State assumptions before any calculation: independence for products, perfect switch for standby, exponential where MTTF = 1/lambda, identical mechanism for acceleration. Marks attach to assumptions.",
        "For every numerical: formula, substitution, computation, boxed answer with units (per hour, hours, dimensionless). Unit slips cost a mark each and compound.",
        "Label every sketch: bathtub regions, block reliabilities in RBDs, gate types in fault trees, S/O/D column heads in FMECA - unlabelled diagrams score half.",
        "Attempt the Weibull and RBD numericals early while arithmetic is fresh; keep the essay questions (RCM, FMECA, software reliability) for the second half.",
        "Time-box: 2-mark shorts in 3-4 minutes, 7-mark questions in 15 minutes, and reserve the final 10 minutes to re-check arithmetic on the big numericals.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Multiplying reliabilities in a parallel system - that is the series rule; complement first, then multiply.",
        "Using MTTF = 1/lambda for a Weibull item - only the exponential earns that shortcut; Weibull needs eta x Gamma(1 + 1/beta).",
        "Plugging Celsius into the Arrhenius formula - convert to Kelvin (25 deg C = 298 K) or the whole computation is void.",
        "Forgetting censored survivors' hours in total time on test - every unit's running time counts, alive or failed.",
        "Quoting standby MTTF = 2/lambda without stating the perfect-switch assumption, or without multiplying the switch factor when given.",
        "Treating RPN as a pure ranking number - two modes can share RPN 100 with wildly different severities; always re-check the S column.",
      ],
    },
  ],
};
