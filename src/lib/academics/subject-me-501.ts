/**
 * Academics - RGPV ME 5th-semester subject: ME-501 IC Engines.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me501: AcademicSubject = {
  id: "me-501",
  code: "ME-501",
  title: "IC Engines",
  semester: "V Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to internal combustion engines: SI and CI fundamentals with valve timing and air-standard cycles, combustion and fuels with knock and octane, carburettors to CRDI fuel systems, performance testing and emissions, and supercharging with modern trends from VVT to HCCI and hybrids.",
  description:
    "Five units walk from the machine itself - SI versus CI engines, two versus four strokes, real valve timing - through the ideal Otto, Diesel and Dual cycles that bound their efficiency. Unit II gets inside the flame: combustion stages, knock, octane and cetane numbers, and the alternative fuels CNG, LPG, biodiesel and hydrogen. Unit III follows the fuel from tank to cylinder through the carburettor, MPFI and CRDI, and lights it with battery-coil to coil-on-plug ignition. Unit IV puts the engine on the test bed: power, efficiencies, heat balance, the Morse test and emission control. Unit V multiplies everything with supercharging, turbocharging, intercooling, variable valve timing, HCCI and hybrid powertrains.",
  accentColor: "#ef4444",
  emoji: "IC",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Engine Fundamentals and Air-Standard Cycles",
      summary:
        "How an IC engine is built and classified, how the four strokes and their valve timing actually run, and how the Otto, Diesel and Dual ideal cycles put an efficiency ceiling over all of it.",
      chapter: {
        number: "01",
        title: "Fundamentals of IC Engines",
        intro:
          "Unit I lays the machine before the mathematics: what an IC engine is, how SI and CI engines differ at every level from fuel to emissions, how two-stroke and four-stroke cycles breathe and why port and valve timing diagrams look the way they do, and finally how the Otto, Diesel and Dual air-standard cycles let us compute an efficiency no real engine can beat.",
        inOneBreath:
          "An IC engine burns fuel inside the cylinder; SI engines induct a premixed petrol-air charge, compress it 6-12 times and light it with a spark, while CI engines compress air alone 14-22 times and inject diesel that self-ignites; the four-stroke cycle spends 720 degrees on suction, compression, power and exhaust, while the two-stroke fires every revolution through piston-controlled ports at the price of scavenging losses; real valve timing opens the intake before TDC and the exhaust before BDC with 15-30 degrees of overlap; and the Otto, Diesel and Dual air-standard cycles bound efficiency by 1 - 1/r^(gamma-1) and its cutoff-ratio cousins.",
        sections: [
          {
            number: "1.1",
            title: "Classification and the SI versus CI divide",
            body: [
              "An internal combustion engine burns fuel directly inside a working cylinder and converts the released heat into shaft work through a piston, connecting rod and crankshaft. Classification proceeds along several axes: by ignition method (spark ignition versus compression ignition), by working cycle (Otto or Diesel), by number of strokes (two or four), by fuel (petrol, diesel, gas, dual fuel), by cooling (air or water), by cylinder arrangement (inline, V, opposed, radial) and by valve or port control. The spark-versus-compression split is the deepest of these, because it decides the fuel, the compression ratio, the mixture preparation and almost every design decision that follows.",
              "The spark ignition (SI) engine inducts a homogeneous mixture of petrol vapour and air, compresses it to a ratio of only 6 to 12 (knock sets the ceiling), and ignites it with an electric spark timed about 20 deg before TDC. Combustion is a flame sweeping through a premixed charge at a modest pressure rise. The compression ignition (CI) engine compresses only air, to a ratio of 14 to 22, reaching about 700 to 900 K; finely atomised diesel is then injected near TDC and self-ignites on contact. Load control differs in kind: the SI engine throttles the mixture quantity while the CI engine simply meters more or less fuel into always-excess air.",
              "The consequences ripple through every system. SI engines are lighter, spin faster (small engines exceed 8000 rpm) and suit cheap small power, but knock caps their compression ratio and part-load throttling wastes pumping work. CI engines must be built heavily for peak pressures of 60 bar and above, yet reward the designer with brake thermal efficiencies of 35 to 40 percent against 25 to 30 percent for petrol. Emissions signatures differ as well: SI engines emit mainly CO, HC and NOx, while CI engines add particulate matter and smoke to NOx. Passenger cars and two-wheelers lean SI; trucks, buses, tractors, gen-sets and ships lean CI.",
            ],
            bullets: [
              "Classification axes: ignition (spark/compression), cycle (Otto/Diesel), strokes (2/4), fuel, cooling, cylinder arrangement, valve gear.",
              "SI engine: homogeneous petrol-air charge, spark ignition, CR 6-12 (knock limited), quantity governing via throttle.",
              "CI engine: air alone compressed to CR 14-22, injected diesel self-ignites, quality governing via fuel quantity.",
              "Efficiency gap: CI brake thermal 35-40% versus SI 25-30%, earned by the higher compression ratio and lean overall operation.",
              "Emission signature: SI = CO + HC + NOx; CI = NOx + particulate matter + smoke.",
            ],
            table: {
              caption: "Spark ignition versus compression ignition engines.",
              headers: ["Aspect", "Spark ignition (SI)", "Compression ignition (CI)"],
              rows: [
                ["Ignition", "Electric spark, ~20 deg BTDC", "Self-ignition of injected fuel"],
                ["Compression ratio", "6 to 12", "14 to 22"],
                ["Fuel", "Petrol, high octane", "Diesel, high cetane"],
                ["Mixture", "Homogeneous, near stoichiometric", "Heterogeneous, overall lean"],
                ["Peak pressure", "30-50 bar", "60-100 bar"],
                ["Load control", "Quantity governing (throttle)", "Quality governing (fuel metered)"],
                ["Brake thermal efficiency", "25-30%", "35-40%"],
                ["Construction", "Lighter, higher speed", "Heavier, robust, slower"],
                ["Emissions", "CO, HC, NOx", "NOx, PM, smoke"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two engines, two philosophies",
              caption:
                "Every subsystem of the engine follows from one choice: ignite with a spark, or ignite with compression.",
              left: {
                heading: "SI engine",
                items: [
                  "Petrol and air drawn in together",
                  "Spark plug launches a flame front",
                  "CR 6-12, capped by knock",
                  "Throttle trims charge quantity",
                  "CO, HC and NOx dominate",
                ],
              },
              right: {
                heading: "CI engine",
                items: [
                  "Only air is compressed",
                  "Injected spray self-ignites",
                  "CR 14-22, no knock limit",
                  "Fuel quantity sets the load",
                  "NOx, smoke and particulates dominate",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The SI-versus-CI comparison is a perennial long question. Lay it out as a table of eight points - ignition, CR, fuel, mixture, load control, speed, efficiency, emissions - and close with one line on why CI wins efficiency: the higher compression ratio plus lean overall operation.",
            },
            keyTerms: [
              { term: "Internal combustion engine", definition: "A heat engine in which fuel burns inside the working cylinder and the piston converts the released energy into shaft work." },
              { term: "Compression ratio", definition: "Ratio of cylinder volume at BDC to volume at TDC; it fixes the air-standard efficiency ceiling of the cycle." },
              { term: "Quality governing", definition: "Load control in CI engines by varying only the fuel injected per stroke, with unthrottled airflow." },
            ],
            examQuestions: [
              {
                q: "Compare spark ignition and compression ignition engines on at least eight points, and explain why the CI engine achieves higher thermal efficiency.",
                marks: 7,
                outline: [
                  "Introduce both engines, their fuels and ignition methods.",
                  "Compression ratio ranges and the reason each is limited (knock versus no knock).",
                  "Mixture preparation: homogeneous premixed versus heterogeneous spray.",
                  "Load control: quantity governing versus quality governing; peak pressures and construction.",
                  "Speed, weight, cost and application differences.",
                  "Efficiency comparison with numbers (25-30% vs 35-40%) traced to the compression ratio.",
                  "Close with the emission signatures of each.",
                ],
              },
              {
                q: "Define compression ratio. Why is it limited to about 10 in SI engines while CI engines use 14 to 22?",
                marks: 3,
              },
              {
                q: "What is meant by quality governing of a CI engine?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Two-stroke and four-stroke working cycles",
            body: [
              "The four-stroke cycle completes one power impulse in two crank revolutions - 720 degrees. In the suction stroke the piston descends with the intake valve open and draws in fresh charge; the compression stroke closes both valves and squeezes the charge to about one-tenth or less of its volume; the power stroke begins when ignition or injection occurs near TDC and the expanding gas drives the piston down; finally the exhaust stroke pushes the burned gases out past the open exhaust valve. Cam-operated valves time these events, and the valve gear adds parts, weight and height to the engine.",
              "The two-stroke cycle delivers a power stroke every revolution. Instead of poppet valves, the piston itself uncovers ports cut in the cylinder liner: an exhaust port, transfer ports and, in crankcase-scavenged petrol engines, an intake port. Approaching BDC the piston first opens the exhaust port so blowdown empties the cylinder; then the transfer ports open and a scavenging pump - the crankcase itself or an external blower - pushes fresh charge in, and this charge must also sweep the leftover exhaust gas out. Compression and expansion happen between port closing and port opening around TDC, which is why the two-stroke spends a large share of its stroke doing nothing but exchange gas.",
              "The doubling of firing frequency comes at a price. A two-stroke of equal size delivers about 1.6 to 1.8 times the four-stroke's power, not twice, because scavenging is imperfect: some fresh charge short-circuits straight out the exhaust (raising HC emissions and fuel consumption in petrol engines) while some exhaust stays behind diluting the next charge. Thermal efficiency is lower, and in crankcase-scavenged designs lubricating oil must be mixed with the petrol. Two-strokes therefore survive where compactness and weight per kW rule - mopeds, chainsaws, outboards - and as huge uniflow-scavenged marine diesels, where slow speed and disciplined port design recover the efficiency.",
            ],
            bullets: [
              "Four-stroke: suction, compression, power, exhaust - one power stroke per 720 degrees of crank rotation.",
              "Two-stroke: ports replace poppet valves; one power stroke per revolution (360 degrees).",
              "Scavenging types: cross-flow, loop and uniflow; uniflow (exhaust valve in head) is the most efficient.",
              "Power ratio: about 1.7 times for the same swept volume, not double, because of scavenging losses.",
              "Costs of the two-stroke: charge short-circuiting, high HC and oil consumption, lower thermal efficiency.",
            ],
            table: {
              caption: "Four-stroke versus two-stroke engines.",
              headers: ["Aspect", "Four-stroke", "Two-stroke"],
              rows: [
                ["Power strokes", "One per two revolutions", "One per revolution"],
                ["Valve gear", "Cam-operated poppet valves", "Liner ports, piston actuated"],
                ["Scavenging", "Not needed - dedicated exhaust stroke", "Essential - crankcase or blower"],
                ["Thermal efficiency", "Higher", "Lower (charge short-circuits)"],
                ["Specific output", "Baseline", "About 1.7x per litre"],
                ["Lubrication", "Separate sump", "Oil often premixed with petrol"],
                ["Typical use", "Cars, trucks, most bikes", "Mopeds, saws, outboards, marine diesels"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which cycle for which duty?",
              caption:
                "The two-stroke is not better or worse - it is a different trade, chosen (or rejected) by the application.",
              start: "Engine cycle selection by duty",
              branches: [
                {
                  label: "Four-stroke for transport",
                  outcome: "Efficiency and clean exhaust win wherever fuel cost and emission norms rule - cars, trucks, big bikes.",
                  good: true,
                },
                {
                  label: "Two-stroke petrol for handhelds",
                  outcome: "Light, cheap, runs in any orientation - chainsaws, mopeds, outboards.",
                  good: true,
                },
                {
                  label: "Two-stroke marine diesel",
                  outcome: "Uniflow scavenging at ~100 rpm recovers efficiency - the largest and most efficient engines on earth.",
                  good: true,
                },
                {
                  label: "Two-stroke car engine",
                  outcome: "Charge short-circuiting fails HC and CO norms - abandoned for road cars.",
                  good: false,
                },
              ],
            },
            callout: {
              type: "tip",
              title: "The 1.7 trap",
              body: "Answer 'compare two and four stroke engines' as a table, then add the qualifier line: power is about 1.7 times, not double, because of imperfect scavenging. Examiners specifically look for that qualifier - 'twice the power' costs a mark.",
            },
            keyTerms: [
              { term: "Scavenging", definition: "Replacing exhaust gas with fresh charge in a two-stroke engine using a pressure difference created by the crankcase or a blower." },
              { term: "Port", definition: "A window cut in the cylinder liner, opened and closed by the piston edge, used instead of poppet valves in two-stroke engines." },
              { term: "Uniflow scavenging", definition: "The two-stroke scheme with charge entering at one end and exhaust leaving at the other, giving the least mixing of fresh and burned gas." },
            ],
            examQuestions: [
              {
                q: "Describe the working of two-stroke and four-stroke engines, compare them on at least seven points, and explain why a two-stroke engine does not deliver twice the power of a four-stroke engine of equal size.",
                marks: 7,
                outline: [
                  "Explain the four strokes with their valve events over 720 degrees.",
                  "Explain port operation and scavenging in the two-stroke.",
                  "Comparison table: power strokes, valve gear, scavenging, efficiency, output, lubrication, use.",
                  "Explain scavenging losses: short-circuiting to exhaust and residual dilution.",
                  "Conclude the 1.6-1.8x power ratio from those losses.",
                  "Mention uniflow marine diesels as the exception that recovers efficiency.",
                ],
              },
              {
                q: "Why must a two-stroke engine use a scavenging pump while a four-stroke does not?",
                marks: 2,
              },
              {
                q: "Name the three scavenging arrangements and state which is the most efficient and why.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Valve timing and port timing diagrams",
            body: [
              "A valve timing diagram plots valve lift against crank angle around the 720 degrees of the four-stroke cycle. If valves opened and closed exactly at the dead centres the engine would breathe poorly: gas has inertia, flow takes time to establish, and the last exhaust only leaves if given a head start. Real engines therefore open the intake valve about 10 to 15 deg before TDC (IVO), close it 40 to 55 deg after BDC (IVC) so momentum keeps filling the cylinder, open the exhaust valve 40 to 60 deg before BDC (EVO) to exploit blowdown, and close it 5 to 15 deg after TDC (EVC).",
              "Around TDC at the end of the exhaust stroke, intake and exhaust valves are briefly open together - the valve overlap, typically 15 to 30 degrees. At high speed overlap helps: the departing exhaust column creates a suction that pulls fresh charge in, improving volumetric efficiency and purging residual gas. At idle the same overlap lets exhaust backwash into the intake, and the diluted charge burns unstably - which is why aggressive camshafts idle roughly. CI engines keep overlap modest to avoid losing charge, while turbocharged engines can tune overlap so that boost pressure scavenges the cylinder.",
              "Two-stroke engines substitute a port timing diagram, and because the piston drives the ports, the events are nearly symmetric about BDC. The exhaust port opens 45 to 60 deg before BDC; the transfer port opens slightly later, 40 to 55 deg before BDC, so blowdown drops cylinder pressure below transfer pressure before fresh charge enters and none of it is wasted backwards; after BDC the ports close in reverse order. Compression can only begin once every port is closed, which is why the effective compression ratio of a two-stroke is always smaller than its geometric ratio.",
            ],
            bullets: [
              "IVO 10-15 deg BTDC: flow starts before the piston descends, cutting induction lag.",
              "IVC 40-55 deg ABDC: ram charging packs extra charge at speed.",
              "EVO 40-60 deg BBDC: uses blowdown and gives the valve a running start against full flow.",
              "EVC 5-15 deg ATDC: the last exhaust leaves on piston displacement plus gas inertia.",
              "Valve overlap 15-30 deg: scavenges at speed but destabilises idle.",
            ],
            table: {
              caption: "Typical valve events with reasons.",
              headers: ["Event", "SI typical", "CI typical", "Reason"],
              rows: [
                ["IVO", "10-15 deg BTDC", "10-20 deg BTDC", "Early flow start"],
                ["IVC", "40-55 deg ABDC", "30-45 deg ABDC", "Ram charging at speed"],
                ["EVO", "40-55 deg BBDC", "45-60 deg BBDC", "Blowdown plus valve capacity"],
                ["EVC", "5-15 deg ATDC", "10-20 deg ATDC", "Exhaust column inertia"],
                ["Overlap", "15-25 deg", "15-30 deg", "Residual purge; CI keeps it small"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Valve events through the 720-degree cycle",
              caption: "Follow one cycle: each event is early or late on purpose, and the reasons are the marks.",
              steps: [
                { label: "IVO: 12 deg BTDC", note: "intake opens before TDC" },
                { label: "Intake stroke, IVC 48 deg ABDC", note: "ram effect keeps filling" },
                { label: "Compression, spark ~20 deg BTDC", note: "peak pressure lands 10-15 deg ATDC" },
                { label: "EVO: 50 deg BBDC", note: "blowdown begins" },
                { label: "Exhaust stroke, EVC 10 deg ATDC", note: "overlaps with the next IVO" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the circle",
              body: "The valve timing question is a drawing question: mark TDC and BDC, split the 720 degrees into four arcs, write each event with a typical value and a two-word reason. A labelled circle earns nearly full marks; a vague unlabelled sketch earns almost nothing.",
            },
            keyTerms: [
              { term: "Valve timing diagram", definition: "A circular plot of valve lift against crank angle over the 720 degrees of the four-stroke cycle." },
              { term: "Valve overlap", definition: "The crank angle window around exhaust TDC during which intake and exhaust valves are open together, typically 15-30 degrees." },
              { term: "Blowdown", definition: "The rapid discharge of cylinder gas that begins when the exhaust valve (or port) opens before BDC." },
            ],
            examQuestions: [
              {
                q: "Draw the actual valve timing diagram of a four-stroke engine, justify each valve event with typical crank angle values, and explain valve overlap with its advantages and disadvantages.",
                marks: 7,
                outline: [
                  "Define the diagram and contrast with theoretical (dead-centre) timing.",
                  "IVO with value and the induction-lag reason.",
                  "IVC with value and the ram-charging reason.",
                  "EVO with value and the blowdown reason.",
                  "EVC with value and the inertia reason.",
                  "Define overlap (15-30 deg): benefits at speed, drawbacks at idle.",
                  "Close with CI and turbocharged practice.",
                ],
              },
              {
                q: "What is valve overlap? State one advantage and one disadvantage.",
                marks: 2,
              },
              {
                q: "Why is the exhaust valve made to open well before BDC?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "The Otto cycle and air-standard analysis",
            body: [
              "Air-standard analysis replaces the messy reality of combustion with a clean thought experiment: a fixed mass of air behaves as an ideal gas, heat is added from an external reservoir instead of by burning fuel, exhaust is replaced by heat rejection, and specific heats stay constant. The Otto cycle models the SI engine with four internally reversible processes: isentropic compression 1-2, heat addition at constant volume 2-3 (the stand-in for very fast combustion near TDC), isentropic expansion 3-4, and constant-volume heat rejection 4-1 (the stand-in for the exhaust blowdown). The reward for these assumptions is an efficiency that depends on nothing but the compression ratio.",
              "The derivation is one line of algebra. Heat added at constant volume is cv(T3 - T2), heat rejected is cv(T4 - T1), so eta = 1 - (T4 - T1)/(T3 - T2). The isentropic relations give T2 = T1 x r^(gamma-1) and T3 = T4 x r^(gamma-1); the temperature ratios collapse and eta = 1 - 1/r^(gamma-1), where r is the compression ratio and gamma the ratio of specific heats (1.4 for cold air). For r = 8, eta = 56.5 percent; for r = 10, eta = 60.2 percent. Raising gamma, as lean mixtures effectively do, raises efficiency further - the ideal cycle's promise that real designers chase.",
              "Real engines collect roughly half of this promise. Specific heats rise with temperature, shrinking the effective gamma; heat leaks to the walls; combustion takes finite time around TDC instead of happening instantly at constant volume; the exhaust blowdown is irreversible; friction and pumping take their toll on top. A petrol engine with an air-standard figure near 58 percent delivers a brake thermal efficiency near 28 percent - a relative efficiency of about 50 percent. The value of the cycle is not its number but its trend: efficiency climbs with compression ratio until knock - the subject of Unit II - calls a halt.",
            ],
            bullets: [
              "Air-standard assumptions: ideal-gas air, fixed mass, external heat addition, no friction, constant specific heats.",
              "Four processes: isentropic compression, constant-volume heat addition, isentropic expansion, constant-volume rejection.",
              "eta = 1 - 1/r^(gamma-1): only the compression ratio and gamma matter.",
              "Numbers: r = 8 with gamma = 1.4 gives 56.5%; r = 10 gives 60.2%.",
              "Real engines reach about 50-60% of the air-standard value - the relative efficiency.",
            ],
            codeExample: {
              language: "python",
              caption: "Air-standard (Otto) efficiency for a range of compression ratios.",
              code: `# Air-standard (Otto) efficiency versus compression ratio
gamma = 1.4
for r in (6, 8, 10, 12):
    eta = 1 - 1 / r ** (gamma - 1)
    print(f"r = {r:2d}   eta_otto = {eta:.3f}")

# Same engine with a lean charge (higher effective gamma)
gamma = 1.5
for r in (6, 8, 10, 12):
    eta = 1 - 1 / r ** (gamma - 1)
    print(f"r = {r:2d}   eta_lean = {eta:.3f}")`,
            },
            diagram: {
              kind: "cycle",
              title: "The Otto cycle as a closed loop",
              caption: "Two isentropes and two constant-volume legs; the spark stands in for the heat-addition leg.",
              steps: [
                { label: "1-2 isentropic compression", note: "both valves shut; r = V1/V2" },
                { label: "2-3 heat added at constant volume", note: "models the near-TDC flame burn" },
                { label: "3-4 isentropic expansion", note: "the power stroke" },
                { label: "4-1 heat rejected at constant volume", note: "models the exhaust blowdown" },
              ],
            },
            callout: {
              type: "warning",
              title: "Keep the exponent straight",
              body: "State the air-standard assumptions before deriving - the derivation marks are tied to them. And remember gamma = cp/cv = 1.4 for cold air: writing r^gamma instead of r^(gamma-1) is the single most common slip in this derivation.",
            },
            keyTerms: [
              { term: "Air-standard cycle", definition: "An idealised cycle using air as the working fluid with external heat addition, used to bound real engine efficiency." },
              { term: "Isentropic process", definition: "A frictionless, adiabatic process of constant entropy; along it P x V^gamma stays constant." },
              { term: "Relative efficiency", definition: "Ratio of the actual indicated thermal efficiency to the corresponding air-standard efficiency, typically 50-60 percent." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of air-standard analysis and derive the air-standard efficiency of the Otto cycle. Compute the efficiency for r = 9 and gamma = 1.4.",
                marks: 7,
                outline: [
                  "List the assumptions: ideal gas, fixed mass, external heat transfer, constant specific heats.",
                  "Describe the four processes on a P-v diagram.",
                  "Write Q_in = cv(T3 - T2) and Q_out = cv(T4 - T1).",
                  "Apply the isentropic relations T2/T1 = r^(gamma-1) and T3/T4 = r^(gamma-1).",
                  "Simplify to eta = 1 - 1/r^(gamma-1).",
                  "Substitute r = 9: 9^0.4 = 2.41, eta = 58.5%.",
                  "Comment on why the real engine falls short (variable cp, heat loss, finite burn time).",
                ],
              },
              {
                q: "Why does raising gamma raise the Otto cycle efficiency?",
                marks: 2,
              },
              {
                q: "The heat addition of the Otto cycle occurs at constant volume. Which engine event does it represent, and why is that a good approximation?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Diesel and Dual cycles",
            body: [
              "The Diesel cycle swaps constant-volume heat addition for constant-pressure addition: air alone is compressed (state 2), fuel is injected and burns while the piston is already descending, so heat enters over a range of volumes measured by the cutoff ratio rho = V3/V2. This is exactly how a diesel engine works, and it is why the engine can run compression ratios of 14 to 22 - there is no premixed charge waiting to knock, and injection can be started and stopped at will. Isentropic compression, isentropic expansion and constant-volume heat rejection complete the cycle.",
              "The efficiency is eta = 1 - (1/r^(gamma-1)) x (rho^gamma - 1)/(gamma (rho - 1)). The bracketed factor exceeds one whenever rho exceeds one, so at the same compression ratio the Diesel cycle is always less efficient than the Otto - the two coincide only as rho approaches 1. For r = 16, rho = 2 and gamma = 1.4: r^(gamma-1) = 3.03, the bracket equals 1.17, and eta works out to about 61.4 percent. A larger cutoff ratio - dumping fuel late into the expansion stroke - drags efficiency down further, which is why over-fuelling a diesel hurts both economy and smoke.",
              "The Dual (limited-pressure) cycle splits heat addition: part at constant volume (2-3) and the rest at constant pressure (3-4), with pressure ratio alpha = P3/P2. It models the modern direct-injection diesel with pilot injection and sits between the Otto and Diesel extremes at the same compression ratio. The ranking reverses, however, when comparison is made at equal peak pressure and equal heat input - then the Diesel cycle leads, the Dual follows, and the Otto trails, because the Diesel spends its heat budget at lower pressure over more expansion volume. Ranking questions in both directions are exam favourites, so learn both directions cold.",
            ],
            bullets: [
              "Diesel cycle: constant-pressure heat addition, defined by cutoff ratio rho = V3/V2.",
              "eta_diesel = 1 - (1/r^(gamma-1)) x (rho^gamma - 1)/(gamma (rho - 1)).",
              "Same compression ratio: Otto > Dual > Diesel, merging as rho approaches 1.",
              "Same peak pressure and heat input: Diesel > Dual > Otto.",
              "Dual cycle: constant-volume part (alpha = P3/P2) plus constant-pressure part; best model of modern DI diesels.",
            ],
            table: {
              caption: "The three air-standard cycles compared.",
              headers: ["Aspect", "Otto", "Diesel", "Dual"],
              rows: [
                ["Heat addition", "Constant volume", "Constant pressure", "Part CV, part CP"],
                ["Governing ratios", "r only", "r and cutoff rho", "r, rho and alpha"],
                ["Ranking at same r", "Highest", "Lowest", "Between"],
                ["Ranking at same peak P", "Lowest", "Highest", "Between"],
                ["Compression ratio", "6-12", "14-22", "14-18 typical"],
                ["Models", "Petrol engine", "Slow-speed diesel", "Modern DI diesel"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Diesel cycle versus Dual cycle",
              caption: "Where the heat enters decides the efficiency - and the ranking flips with the comparison basis.",
              left: {
                heading: "Diesel cycle",
                items: [
                  "Heat added at constant pressure",
                  "Cutoff ratio rho = V3/V2 > 1",
                  "Fuel burns as the piston descends",
                  "Same r: efficiency below Otto",
                  "Same peak pressure: efficiency above Otto",
                ],
              },
              right: {
                heading: "Dual cycle",
                items: [
                  "Heat added part CV, part CP",
                  "Pressure ratio alpha = P3/P2",
                  "Caps the peak pressure rise",
                  "Sits between Otto and Diesel at same r",
                  "Best model of pilot-injection DI diesels",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Both rankings, both directions",
              body: "Memorise: at the same compression ratio, Otto > Dual > Diesel. At the same peak pressure and heat input, Diesel > Dual > Otto. Questions routinely ask you to prove the direction with P-v sketches - draw both cycles superposed and mark where the areas differ.",
            },
            keyTerms: [
              { term: "Cutoff ratio", definition: "The ratio V3/V2 of the Diesel cycle: how far the piston travels while heat is being added at constant pressure." },
              { term: "Dual cycle", definition: "A cycle with heat addition split between a constant-volume phase and a constant-pressure phase." },
              { term: "Pressure ratio (alpha)", definition: "P3/P2 in the Dual cycle: the pressure rise during the constant-volume part of heat addition." },
            ],
            examQuestions: [
              {
                q: "Describe the Diesel and Dual cycles, write their air-standard efficiencies, and compare the Otto, Diesel and Dual cycles (a) at the same compression ratio and (b) at the same peak pressure and heat input.",
                marks: 7,
                outline: [
                  "Describe the Diesel cycle processes and define the cutoff ratio.",
                  "Quote eta_diesel and show why the bracket exceeds one.",
                  "Describe the Dual cycle and define the pressure ratio alpha.",
                  "Ranking at the same r with reasoning: Otto > Dual > Diesel, merging as rho -> 1.",
                  "Ranking at the same peak pressure and heat input: Diesel > Dual > Otto.",
                  "Support both rankings with superposed P-v diagrams.",
                  "Conclude which cycle best models which real engine.",
                ],
              },
              {
                q: "Define cutoff ratio. How does increasing it move the Diesel cycle efficiency?",
                marks: 2,
              },
              {
                q: "Which real engine does the Dual cycle best represent, and why?",
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
      title: "Combustion and Fuels",
      summary:
        "What actually burns and how well: the stages of SI combustion and flame speed, knock and its control, octane and cetane as the two opposite fuel-quality yardsticks, and the alternative fuels - CNG, LPG, biodiesel and hydrogen - waiting to replace them.",
      chapter: {
        number: "02",
        title: "Combustion and Fuels",
        intro:
          "Unit II gets inside the flame. SI combustion proceeds through ignition lag, development, propagation and afterburning - until the end gas decides whether to wait for the flame or explode as knock. Fuel quality answers with the octane number; the CI engine inverts the problem, needing fuel that ignites instantly (cetane) and suffering diesel knock when it will not. The unit closes with the alternative-fuel catalogue - CNG, LPG, biodiesel and hydrogen - and the properties that decide each one's fate.",
        inOneBreath:
          "SI combustion has four stages - ignition lag (~0.5 ms), development, propagation (15-40 m/s turbulent) and afterburning; knock is autoignition of the end gas at 3-10 kHz, cured by octane, cooler charge, compact chambers and retarded spark; the octane number is percent iso-octane in n-heptane, with RON mild, MON severe and sensitivity = RON - MON; CI combustion runs ignition delay, uncontrolled, controlled and afterburning phases, and diesel knock is a too-long delay cured by cetane number, fine atomisation and pilot injection; and CNG, LPG, biodiesel and hydrogen trade calorific value, storage and ignition quality against petrol and diesel.",
        sections: [
          {
            number: "2.1",
            title: "Combustion in SI engines: stages and flame speed",
            body: [
              "Combustion in an SI engine is a race to consume the charge before the unburned end gas destroys itself. A high-voltage arc across the spark plug gap deposits 30 to 50 mJ of energy into a few cubic millimetres of mixture. Nothing dramatic happens at first: this ignition lag (Stage 1), lasting roughly half a millisecond, is a period of chemical preparation while a self-sustaining kernel forms. Once the kernel catches, the flame develops (Stage 2), propagates across the chamber as a wrinkled turbulent front (Stage 3), and finally the last pockets of mixture behind the front burn out in afterburning (Stage 4).",
              "Flame speed is the design lever. A laminar petrol flame crawls at well under 1 m/s, but turbulence wrinkles the front and pushes effective speeds to 15-40 m/s - conveniently rising almost in proportion to engine speed, which keeps burn duration roughly constant in crank-angle terms. Mixture strength matters too: the flame is fastest slightly rich, near an air-fuel ratio of 13:1, and slows sharply toward either flammability limit (about 8:1 and 20:1). Higher charge density and temperature, a compact chamber, squish-generated turbulence and a central plug that shortens the flame's journey all speed the burn further.",
              "Timing ties it together. The spark fires 20 to 30 deg before TDC so that peak pressure lands about 10 to 15 deg after TDC - roughly where expanding gas does the most work on the piston. If the flame runs late, effective expansion shrinks and exhaust temperature climbs; if it runs early, the piston fights the rising pressure. Even after the front reaches the far wall, several percent of the charge is still burning in afterburning. Whatever the flame has not reached in time is the end gas, and its fate - arrival of the flame or autoignition - decides whether the engine knocks, which is the next section's subject.",
            ],
            bullets: [
              "Stage 1 - ignition lag: about 0.5 ms of kernel formation with almost no pressure rise.",
              "Stage 2 - flame development: the kernel grows into a self-sustaining front.",
              "Stage 3 - propagation: turbulent front sweeps the chamber at 15-40 m/s.",
              "Stage 4 - afterburning: the last pockets behind the front complete combustion.",
              "Spark timed 20-30 deg BTDC so peak pressure lands 10-15 deg ATDC.",
            ],
            table: {
              caption: "The four stages of SI combustion.",
              headers: ["Stage", "Duration (approx.)", "Charge burned", "What happens"],
              rows: [
                ["Ignition lag", "~0.5 ms / ~10 deg", "Negligible", "Kernel forms; chemical delay"],
                ["Flame development", "~1 ms", "5-10%", "Kernel becomes a front"],
                ["Propagation", "~1-1.5 ms", "70-85%", "Turbulent front crosses the chamber"],
                ["Afterburning", "~0.5 ms", "Remaining 5-15%", "Last pockets consumed behind the front"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Four stages between spark and burned",
              caption: "From arc to afterburning - each stage has its own physics and its own exam line.",
              stages: [
                { label: "Ignition lag", note: "kernel forms, no pressure rise" },
                { label: "Flame development", note: "front becomes self-sustaining" },
                { label: "Propagation", note: "turbulent front at 15-40 m/s" },
                { label: "Afterburning", note: "last pockets consumed" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the trace",
              body: "Sketch the pressure-versus-crank-angle curve with the spark at 25 deg BTDC and mark all four stages on it. The labelled trace carries most of the marks in the 7-mark combustion question - more than any amount of prose.",
            },
            keyTerms: [
              { term: "Ignition lag", definition: "The delay between spark discharge and formation of a self-sustaining flame kernel, about 0.5 ms in a warm SI engine." },
              { term: "Turbulent flame speed", definition: "The effective speed of the wrinkled flame front, 15-40 m/s, roughly proportional to engine speed." },
              { term: "End gas", definition: "The portion of the charge farthest from the spark plug, last to burn and most vulnerable to autoignition." },
            ],
            examQuestions: [
              {
                q: "Explain the stages of combustion in an SI engine with the help of a pressure-crank angle diagram, and state the factors that govern flame speed.",
                marks: 7,
                outline: [
                  "Sketch the p-theta trace with the spark at ~25 deg BTDC.",
                  "Stage 1 ignition lag: duration and mechanism.",
                  "Stage 2 flame development.",
                  "Stage 3 propagation with turbulent flame speed values (15-40 m/s).",
                  "Stage 4 afterburning.",
                  "Flame speed factors: turbulence, mixture strength, temperature, density, chamber shape, plug position.",
                  "Why timing targets peak pressure at 10-15 deg ATDC.",
                ],
              },
              {
                q: "Why is the spark timed about 20-30 deg before TDC rather than at TDC?",
                marks: 3,
              },
              {
                q: "List four factors that increase flame speed in an SI engine.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Knock and detonation in SI engines",
            body: [
              "As the flame front advances it acts like a moving piston: it compresses and heats the unburned end gas ahead of it, adding perhaps 100-150 K to its temperature. If the flame reaches every part of the end gas first, combustion is normal. If instead the end gas reaches its autoignition temperature and has time for the pre-flame chemistry to run, it ignites spontaneously at many points at once - and the remaining chemical energy is released almost instantly. Pressure waves oscillate across the cylinder at 3 to 10 kHz, and the ear hears the metallic knock or ping.",
              "Knock punishes hardware. The pressure spikes strip the protective boundary layer off the walls, so heat transfer to the piston crown and head jumps; sustained knock can erode piston crowns, scuff bores, break rings and destroy spark plugs within minutes, and it promotes carbon deposits and pre-ignition on top of the rough running and power loss. Tendency rises with anything that heats or pressurises the end gas or slows the flame: high load, hot intake air, excessive spark advance, low octane fuel, deposits that raise the effective compression ratio, and lean mixtures that burn slowly.",
              "Control attacks the fuel, the engine and the operating point. Use higher-octane fuel; lower the compression ratio or retard the spark; cool the intake charge and the combustion chamber; design compact chambers with central plugs and squish to shorten the flame path; run slightly rich at full load to cool the charge chemically; and let a knock sensor close the loop by trimming spark advance at the first sign of ping. Note the paradox that runs through this whole unit: the SI engine fears a fuel that ignites too easily, while the CI engine demands one - opposite diagnoses, opposite prescriptions.",
            ],
            bullets: [
              "Knock = autoignition of the end gas before flame arrival; pressure oscillations at 3-10 kHz.",
              "Damage mode: boundary-layer destruction, local heat flux spikes, piston, ring and plug damage.",
              "Tendency rises with high load, hot intake, high CR, advanced spark, deposits and low octane.",
              "Engine fixes: compact chamber, central plug, squish, cooled head, moderate overlap.",
              "System fixes: knock-sensor feedback, slightly rich full-load mixture, higher-octane fuel.",
            ],
            table: {
              caption: "Knock control levers and their direction.",
              headers: ["Lever", "Direction", "Effect on knock tendency"],
              rows: [
                ["Octane number", "Raise", "End gas resists autoignition longer"],
                ["Compression ratio", "Lower", "Cooler, lower-pressure end gas"],
                ["Spark advance", "Retard", "Less time and temperature on the end gas"],
                ["Intake charge temperature", "Cool", "Slower pre-flame chemistry"],
                ["Chamber design", "Compact, central plug", "Shorter flame travel"],
                ["Mixture at full load", "Slightly rich", "Chemical cooling of the end gas"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "The end gas has four possible fates",
              caption: "Only the first is normal - and only the second is knock, a distinction exams love.",
              start: "End gas ahead of the flame front",
              branches: [
                {
                  label: "Consumed by the flame",
                  outcome: "Normal combustion: smooth pressure trace, full efficiency.",
                  good: true,
                },
                {
                  label: "Autoignites en masse",
                  outcome: "Detonation: 3-10 kHz pressure waves, audible ping, piston damage.",
                  good: false,
                },
                {
                  label: "Ignited by a hot surface",
                  outcome: "Pre-ignition: charge burns before the spark; timing control is lost.",
                  good: false,
                },
                {
                  label: "Burns after ignition-off",
                  outcome: "Run-on (dieseling): hot spots fire the idle charge after the key is off.",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Knock is not pre-ignition",
              body: "Knock is autoignition of end gas after the spark; pre-ignition is ignition before the spark by a hot surface. High octane helps knock but cannot fix a glowing deposit. State both definitions precisely - examiners specifically separate them.",
            },
            keyTerms: [
              { term: "Detonation", definition: "Abnormal combustion in which the unburned end gas autoignites, sending high-frequency pressure oscillations through the cylinder." },
              { term: "Pre-ignition", definition: "Ignition of the charge by a hot surface (deposit, plug tip, valve) before the spark occurs." },
              { term: "Auto-ignition temperature", definition: "The temperature at which a fuel-air mixture reacts fast enough to self-ignite without an external source." },
            ],
            examQuestions: [
              {
                q: "What is detonation in an SI engine? Explain its mechanism with a pressure diagram, its effects, and the fuel, engine and operating factors that control it.",
                marks: 7,
                outline: [
                  "Define knock versus normal combustion.",
                  "Mechanism: end-gas compression, pre-flame chemistry, autoignition, 3-10 kHz oscillations.",
                  "Effects: heat transfer spike, piston/ring/plug damage, power loss, pre-ignition.",
                  "Fuel factors: octane rating, additives.",
                  "Engine factors: compression ratio, chamber shape, plug position, cooling, spark advance.",
                  "Operating factors: load, speed, intake temperature, mixture strength.",
                  "Summarise modern closed-loop knock control.",
                ],
              },
              {
                q: "Distinguish between knock and pre-ignition.",
                marks: 3,
              },
              {
                q: "Why does knock tendency increase at high load and high intake temperature?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Octane rating and gasoline quality",
            body: [
              "The octane number measures a petrol's resistance to knock. It is defined by matching the test fuel's knock behaviour against blends of two reference hydrocarbons: iso-octane (2,2,4-trimethylpentane), assigned 100, and normal heptane, assigned 0. A fuel that knocks exactly like a blend of 95 percent iso-octane and 5 percent n-heptane has octane number 95. The comparison is made in a single-cylinder CFR variable-compression engine: the technician raises the compression ratio until a standard knock intensity appears, then brackets the sample with reference blends tested the same way.",
              "Two standard procedures give two numbers. The Research method runs the CFR engine at 600 rpm under mild conditions and yields the Research Octane Number (RON) - the optimistic figure posted on pumps in India. The Motor method runs 900 rpm with the mixture preheated to 149 C, punishing the fuel with severe, road-like conditions and yielding the Motor Octane Number (MON), always lower. The gap between them is the sensitivity (RON - MON), and their average, (RON + MON)/2, is the anti-knock index used at North American pumps. Indian regular petrol is specified at a minimum of 91 RON under BS-VI.",
              "Octane requirement grows about four to six numbers per unit of compression ratio, which is why efficiency-seeking engines demanded ever better fuel - historically via tetra-ethyl lead, now banned for its catalyst-poisoning lead, and today via aromatics, alcohols and ethers with high blending octane. Ethanol raises octane sharply though it lowers energy density per litre. The modern compromise is electronic knock control: a knock sensor lets the ECU hold spark advance right at the knock threshold, so an engine certified for 91 RON extracts near its maximum efficiency on regular fuel and converts any higher-octane fuel into extra advance, and therefore extra efficiency, automatically.",
            ],
            bullets: [
              "Octane number: percent iso-octane (100) in blend with n-heptane (0) that matches the fuel's knock.",
              "RON: Research method, 600 rpm, mild conditions; MON: Motor method, 900 rpm, mixture at 149 C.",
              "Sensitivity = RON - MON; anti-knock index = (RON + MON)/2.",
              "Each extra unit of compression ratio adds roughly 4-6 octane numbers to the requirement.",
              "Indian regular petrol: minimum 91 RON (BS-VI).",
            ],
            table: {
              caption: "Research versus Motor octane tests.",
              headers: ["Item", "Research method (RON)", "Motor method (MON)"],
              rows: [
                ["Engine speed", "600 rpm", "900 rpm"],
                ["Mixture temperature", "Unheated", "149 C"],
                ["Spark advance", "Fixed 13 deg BTDC", "Varied with compression ratio"],
                ["Severity", "Mild", "Severe (road-like)"],
                ["Result", "Higher number", "Lower number"],
                ["Same regular petrol", "91 RON", "About 82-84 MON"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two tests, one fuel",
              caption: "The same petrol scores differently because the tests are different - and the gap itself is a fuel property.",
              left: {
                heading: "Research method (RON)",
                items: [
                  "CFR engine at 600 rpm",
                  "Unheated intake mixture",
                  "Fixed spark advance",
                  "Mild conditions",
                  "Yields the higher number",
                ],
              },
              right: {
                heading: "Motor method (MON)",
                items: [
                  "CFR engine at 900 rpm",
                  "Mixture heated to 149 C",
                  "Spark advance varied with CR",
                  "Severe, road-like conditions",
                  "Yields the lower number",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Definitions as one-liners",
              body: "Two-markers love the definitions: iso-octane = 100, n-heptane = 0, sensitivity = RON - MON, anti-knock index = (RON + MON)/2. Write them as crisp one-liners you can reproduce without thinking.",
            },
            keyTerms: [
              { term: "Octane number", definition: "The knock resistance of a petrol expressed as the percentage of iso-octane in an iso-octane/n-heptane blend that knocks equally." },
              { term: "Sensitivity", definition: "The difference RON - MON; a large sensitivity means the fuel loses resistance under severe operating conditions." },
              { term: "Anti-knock index", definition: "The average of RON and MON, (RON + MON)/2, used as the posted road octane quality." },
            ],
            examQuestions: [
              {
                q: "Define octane number. Explain the Research and Motor methods, sensitivity and the anti-knock index, and discuss how fuel composition and engine design set the octane requirement.",
                marks: 7,
                outline: [
                  "Define the scale and the two reference fuels.",
                  "Describe the CFR engine and the matching procedure.",
                  "Research method conditions and result.",
                  "Motor method conditions and why MON is lower.",
                  "Define sensitivity and anti-knock index.",
                  "Octane requirement versus compression ratio (4-6 numbers per unit CR).",
                  "Comment on ethanol/aromatics and knock-sensor accommodation of higher-octane fuel.",
                ],
              },
              {
                q: "Name the reference fuels of the octane scale and their assigned numbers.",
                marks: 2,
              },
              {
                q: "Why is MON always lower than RON for the same fuel?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "CI combustion, delay period and the cetane number",
            body: [
              "In a CI engine only air is compressed - to 14-22 times its original volume, reaching roughly 40 to 50 bar and 700 to 900 K. Fuel is injected as a fine spray starting 15 to 25 deg before TDC, at pressures from 250 bar in old systems to about 2000 bar in common-rail ones; droplets of 10-100 microns must atomise, vaporise, mix with hot swirling air and ignite - all within about a millisecond. The structure of that spray - liquid core, vaporising sheath, flaring plumes - decides how completely and how cleanly the fuel burns.",
              "The pressure trace divides combustion into four phases. Ignition delay (phase 1, about 1 ms, or 15-25 deg of crank travel at road speeds) is physical plus chemical preparation with no heat release. When ignition finally occurs, everything prepared during the delay burns at once: this is the uncontrolled (premixed) combustion phase (2), a violent pressure spike that is the source of diesel knock. Injection is usually still in progress, so phase 3, controlled (diffusion) combustion, proceeds as smoothly as fuel and air can mix; phase 4, afterburning, consumes the remnants on the expansion stroke.",
              "Diesel knock is the mirror image of petrol knock: it happens when the fuel is too reluctant to ignite, stretching the delay while fuel accumulates in the chamber. The cure is the cetane number - the percentage of n-cetane (hexadecane, CN 100) blended with heptamethylnonane (CN 15) that matches the sample's ignition delay; BS-VI diesel specifies a minimum of 51. Shorter delays - high cetane, fine atomisation, swirl, hot air, pilot injection - soften the premixed spike. But fuel with excellent self-ignition quality is by definition terrible octane fuel: the two scales move in opposite directions, a fact exams never tire of.",
            ],
            bullets: [
              "Only air is compressed; fuel is injected at 250-2000 bar near TDC.",
              "Phase 1 ignition delay (~1 ms): atomise, vaporise, mix, pre-flame chemistry.",
              "Phase 2 uncontrolled combustion: the delay-period fuel burns at once - diesel knock.",
              "Phase 3 controlled (diffusion) combustion: burning paced by mixing, not by a flame speed.",
              "Cetane number: percent n-cetane in blend with heptamethylnonane (CN 15); BS-VI minimum 51.",
            ],
            table: {
              caption: "SI knock versus CI knock - the classic contrast.",
              headers: ["Aspect", "SI knock", "CI knock"],
              rows: [
                ["Root cause", "Fuel ignites too easily (end-gas autoignition)", "Fuel ignites too reluctantly (long delay)"],
                ["Fuel fix", "Higher octane", "Higher cetane"],
                ["Trigger", "Flame-front compression of the end gas", "Accumulated fuel igniting together"],
                ["Pressure trace", "Oscillations after a normal rise", "Sharp premixed spike at the start"],
                ["Other remedies", "Lower CR, retard spark, cooler intake", "Better atomisation, swirl, pilot injection"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Four phases of CI combustion",
              caption: "The delay period sets the violence of phase 2 - everything about diesel noise follows from it.",
              stages: [
                { label: "Ignition delay", note: "~1 ms; physical + chemical prep" },
                { label: "Uncontrolled combustion", note: "delay-period fuel burns - pressure spike" },
                { label: "Controlled combustion", note: "diffusion burning while injection continues" },
                { label: "Afterburning", note: "remnants burn on the expansion stroke" },
              ],
            },
            callout: {
              type: "exam",
              title: "The paradox is the answer",
              body: "'Compare knock in SI and CI engines' is a guaranteed long question. Build the whole answer around the paradox: the SI engine wants fuel that resists self-ignition, the CI engine wants fuel that self-ignites instantly - so octane and cetane are opposites, and so are the remedies.",
            },
            keyTerms: [
              { term: "Ignition delay", definition: "The time (or crank angle) between start of injection and start of combustion in a CI engine, about 1 ms." },
              { term: "Cetane number", definition: "Ignition quality of a diesel fuel: the percent n-cetane in a blend with heptamethylnonane giving the same delay." },
              { term: "Diffusion combustion", definition: "The phase in which fuel burns at the rate it mixes with air rather than at a flame speed." },
            ],
            examQuestions: [
              {
                q: "Explain the four stages of combustion in a CI engine with a pressure-crank angle diagram, define the cetane number, and explain diesel knock and its control.",
                marks: 7,
                outline: [
                  "Describe injection into compressed air (pressure, droplet size).",
                  "Phase 1 delay: physical and chemical components, ~1 ms.",
                  "Phase 2 uncontrolled combustion and the pressure spike.",
                  "Phase 3 controlled diffusion burning.",
                  "Phase 4 afterburning.",
                  "Define cetane number, reference fuels and the BS-VI minimum of 51.",
                  "Diesel knock cause and remedies; contrast with SI knock.",
                ],
              },
              {
                q: "Define cetane number and name its reference fuels.",
                marks: 2,
              },
              {
                q: "How does pilot injection in CRDI engines reduce combustion noise?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Alternative fuels: CNG, LPG, biodiesel and hydrogen",
            body: [
              "Three pressures push engines away from straight petrol and diesel: exhaust emissions and carbon targets, the price and import dependence of crude oil (India imports roughly 85 percent of its petroleum), and the wish for renewable content. A candidate fuel is judged on calorific value, volatility or boiling range, ignition quality (octane for spark-ignition use, cetane for compression-ignition use), flammability limits, toxicity, materials compatibility, and above all how easily it can be stored and distributed through existing or buildable infrastructure.",
              "Compressed natural gas (CNG) is mostly methane: it research-octanes above 120, burns lean and clean with almost no particulate, and stores at 200-250 bar in heavy cylinders - hence the tank-weight penalty carried by the Delhi bus fleet. Liquefied petroleum gas (LPG, autogas) is a propane-butane blend octaning near 110 that liquefies under mild pressure, giving lighter tanks than CNG; both gases cut CO and PM sharply but demand dedicated fuel systems and disciplined maintenance. Biodiesel - methyl esters of vegetable oils such as jatropha in India - runs in diesel engines at B5-B20 blends with almost no hardware change, with good cetane (50-65) and superior lubricity, but slightly lower calorific value (37-39 MJ/kg against 42.5 for diesel) and cold-flow limits set by its cloud point.",
              "Hydrogen is the cleanest endpoint: burning it yields only water, its laminar flame speed (about 2.9 m/s) is nearly eight times petrol's, its ignition energy is a tenth, and it octanes above 130 - yet those same wide flammability limits (4-74 percent in air) and its near-invisible flame make handling hazardous. Storage is the real obstacle: 700 bar composite tanks, cryogenic liquid at -253 C, or metal hydrides, each expensive and heavy. Running very lean cuts NOx to nearly nothing but caps power density. Until storage and infrastructure mature, hydrogen serves in trials (including hydrogen-CNG blends), while ethanol blending and biodiesel carry the renewable load at scale.",
            ],
            bullets: [
              "Drivers: emissions, energy security (about 85% crude import), renewable content.",
              "CNG: methane, RON above 120, lean burn and near-zero PM, 200-250 bar storage.",
              "LPG: propane-butane, RON near 110, liquid at mild pressure, lighter tanks.",
              "Biodiesel: methyl esters, CN 50-65, B5-B20 drop-in, CV 37-39 MJ/kg, cloud-point limit.",
              "Hydrogen: CV about 120 MJ/kg, flame 8x faster than petrol, but 700 bar or -253 C storage.",
            ],
            table: {
              caption: "Alternative fuels against the incumbents.",
              headers: ["Fuel", "CV (MJ/kg)", "Ignition quality", "Storage", "Main hurdle"],
              rows: [
                ["Petrol", "44", "RON ~91", "Liquid, ambient", "Baseline"],
                ["Diesel", "42.5", "CN 51+", "Liquid, ambient", "PM and NOx"],
                ["CNG", "50", "RON 120+", "200-250 bar gas", "Tank weight, range"],
                ["LPG", "46", "RON ~110", "Mild-pressure liquid", "Vapour lock, safety"],
                ["Biodiesel", "37-39", "CN 50-65", "Liquid, ambient", "Cloud point, NOx penalty"],
                ["Hydrogen", "120", "RON 130+", "700 bar / -253 C", "Storage and infrastructure"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Four pathways off petroleum",
              caption: "Three are deployable today; the fourth is a storage problem wearing a fuel's clothes.",
              start: "Alternative fuel pathway",
              branches: [
                {
                  label: "CNG",
                  outcome: "Proven at city scale: Delhi buses and autos; PM and CO nearly vanish.",
                  good: true,
                },
                {
                  label: "LPG autogas",
                  outcome: "Cheapest conversion per km in fleets; liquid tanks stay light.",
                  good: true,
                },
                {
                  label: "Biodiesel B5-B20",
                  outcome: "Drop-in diesel replacement that supports farmers; watch the cloud point.",
                  good: true,
                },
                {
                  label: "Hydrogen",
                  outcome: "Zero carbon at the tailpipe, but storage and fuelling networks remain immature.",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Calorific values to one decimal",
              body: "Memorise the calorific values: petrol 44, diesel 42.5, CNG 50, LPG 46, biodiesel 37-39, hydrogen about 120 MJ/kg. Numericals on range and tank size lean on these numbers, and mixing them up cascades through the whole answer.",
            },
            keyTerms: [
              { term: "CNG", definition: "Compressed natural gas, mostly methane stored at 200-250 bar; very high octane and near-zero particulate emissions." },
              { term: "Biodiesel", definition: "Methyl esters of vegetable oils used as diesel blend stock (B5-B20), with CN 50-65 and slightly lower calorific value than diesel." },
              { term: "Cloud point", definition: "The temperature at which wax crystals begin to form in a fuel and threaten filter flow - the practical cold limit for biodiesel." },
            ],
            examQuestions: [
              {
                q: "Discuss CNG, LPG, biodiesel and hydrogen as alternative fuels for IC engines, covering properties, merits, demerits, storage and the vehicle modifications each demands.",
                marks: 7,
                outline: [
                  "Open with the drivers: emissions, import dependence, renewable content.",
                  "CNG: octane, lean burn, PM/CO benefit, 200-250 bar tanks, power loss.",
                  "LPG: blend and octane, liquid storage, vapour-lock and safety handling.",
                  "Biodiesel: ester chemistry, cetane, B5-B20 blends, cloud point, NOx penalty.",
                  "Hydrogen: calorific value, flame speed, storage options, cost and NOx at stoichiometric.",
                  "Comparison table of CV and ignition quality.",
                  "Conclude on deployment realism in India.",
                ],
              },
              {
                q: "State two merits and two demerits of CNG against petrol.",
                marks: 3,
              },
              {
                q: "Why is hydrogen's very low ignition energy both a blessing and a risk?",
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
      title: "Fuel Supply, Injection and Ignition Systems",
      summary:
        "Delivering the right mixture at the right instant: air-fuel ratio requirements, the carburettor and its circuits, MPFI and CRDI electronic injection, and the ignition systems - battery-coil through CDI, DIS and coil-on-plug - that light the charge.",
      chapter: {
        number: "03",
        title: "Fuel Supply and Ignition",
        intro:
          "Unit III follows a drop of fuel from tank to flame. It begins with what the mixture must be at every operating point, shows how the carburettor metered it with nothing but venturi vacuum for a century, then replaces it with the sensors, ECU and port injectors of MPFI and the 2000-bar common rail of CRDI; it ends with ignition - from the contact-breaker coil to electronic switching, CDI, waste-spark DIS and coil-on-plug.",
        inOneBreath:
          "Petrol wants 14.7:1 at cruise, 8:1 at cold start, 12-13:1 at idle, enrichment on acceleration and 12.5-13:1 at full load; the carburettor meters by venturi depression from a float chamber through main, compensating, idle, accelerator and choke circuits but cannot hold lambda per cylinder; MPFI computes injector pulse width from speed-density air models with closed-loop lambda trim; CRDI holds 1600-2000 bar in a rail and shapes pilot, main and post injections through piezo injectors; and ignition evolved from points and condenser to Hall-pickup transistor switching, ECU advance maps, CDI, DIS waste spark and coil-on-plug.",
        sections: [
          {
            number: "3.1",
            title: "Mixture requirements and air-fuel ratio control",
            body: [
              "Stoichiometric combustion of petrol needs about 14.7 kg of air per kg of fuel; this 14.7:1 air-fuel ratio is the anchor of every mixture discussion. Leaner mixtures burn cooler and more economically; richer mixtures burn faster and hotter. Flame speed peaks slightly rich of stoichiometric near 13:1, so maximum power arrives at about 12.5-13:1 (every last molecule of oxygen consumed) while best economy arrives at about 16-17:1. The flammable band spans roughly 8:1 at the rich limit to 20:1 at the lean limit - beyond either, the flame will not propagate and the engine misfires.",
              "Each operating point demands its own mixture. Cold starting needs a very rich brew (about 8:1) because only the volatile fraction evaporates in a cold manifold. Idle needs about 12-13:1 to survive dilution by residual exhaust gas. Steady cruising wants 16-17:1 for economy. Sudden acceleration must enrich briefly - when the throttle snaps open, airflow responds instantly but fuel lags as manifold walls wet themselves, so the mixture leans out precisely when the driver wants more. Full throttle returns to 12.5-13:1 for maximum power and to hold exhaust temperature and knock in check. A fuel system must therefore swing its mixture across this entire map in milliseconds.",
              "The two engine families control load differently. The SI engine uses quantity governing: a throttle varies the amount of mixture inducted, so at part load the piston fights manifold vacuum - the pumping loss that wrecks part-load efficiency. The CI engine needs no throttle; it inducts full air at every load and governs by fuel quantity alone (quality governing), running overall lean from idle to rated power. Modern closed-loop SI systems hold exactly 14.7:1 at steady loads because the three-way catalyst of Unit IV only works there, enriching only for cold start, acceleration and full load.",
            ],
            bullets: [
              "Stoichiometric A/F for petrol about 14.7:1; flammability limits about 8:1 to 20:1.",
              "Maximum power near 12.5-13:1 (slightly rich); best economy near 16-17:1 (lean).",
              "Cold start about 8:1; idle 12-13:1; full throttle 12.5-13:1.",
              "Quantity governing (SI throttle) versus quality governing (CI fuel quantity).",
              "Closed loop holds 14.7:1 because that is where the three-way catalyst works.",
            ],
            table: {
              caption: "Mixture requirements across the operating range.",
              headers: ["Condition", "Approx. A/F", "Why"],
              rows: [
                ["Cold start", "8:1", "Only the volatile fraction evaporates when cold"],
                ["Idle", "12-13:1", "Compensates dilution by residual gas"],
                ["Cruise", "16-17:1", "Best economy zone"],
                ["Acceleration", "12-13:1 briefly", "Fuel lags airflow; walls wet with fuel"],
                ["Full load", "12.5-13:1", "Maximum power, cooler exhaust"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Air-fuel ratio across the load range",
              caption: "Rich at the extremes, lean in the middle - the shape every fuel system must reproduce.",
              steps: [
                { label: "Cold start: very rich (~8:1)", note: "poor vaporisation when cold" },
                { label: "Idle: 12-13:1", note: "dilution by residuals" },
                { label: "Cruise: 16-17:1", note: "economy zone" },
                { label: "Accelerate: enrich briefly", note: "fuel lags the airflow" },
                { label: "Full load: 12.5-13:1", note: "power zone" },
              ],
            },
            callout: {
              type: "exam",
              title: "The graph is the question",
              body: "Sketch air-fuel ratio against load from idle to full throttle, label the five zones with their ratios, and add one line on why the mixture must be rich at both extremes. That graph, properly labelled, is a standard long question.",
            },
            keyTerms: [
              { term: "Stoichiometric air-fuel ratio", definition: "The chemically correct mixture, about 14.7:1 for petrol, with no excess fuel or oxygen." },
              { term: "Lambda", definition: "Measured A/F divided by stoichiometric A/F; lambda 1 is stoichiometric, above 1 lean, below 1 rich." },
              { term: "Quality governing", definition: "CI-engine load control by varying fuel quantity with unthrottled airflow." },
            ],
            examQuestions: [
              {
                q: "Sketch the mixture requirements of an SI engine from starting to full load, explain why each region needs its air-fuel ratio, and contrast quantity and quality governing.",
                marks: 7,
                outline: [
                  "Define stoichiometric A/F and the flammability limits.",
                  "Cold-start requirement (poor vaporisation).",
                  "Idle requirement (residual-gas dilution).",
                  "Cruise economy requirement.",
                  "Acceleration enrichment (wall-wetting lag).",
                  "Full-load power requirement.",
                  "Quantity versus quality governing; catalyst needs lambda 1.",
                ],
              },
              {
                q: "Define stoichiometric air-fuel ratio for petrol.",
                marks: 2,
              },
              {
                q: "Why must the mixture be momentarily enriched on sudden throttle opening?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "The carburettor and its circuits",
            body: [
              "The carburettor meters fuel into a moving air stream using nothing but pressure differences. Air entering the venturi - a converging-diverging throat - must speed up; by Bernoulli's equation its static pressure falls, creating a depression at the narrowest section. A main jet connects the throat to a float chamber held at atmospheric pressure with a constant fuel level by a float-and-needle valve, so fuel is pushed through the jet roughly in proportion to the depression: more airflow, more vacuum, more fuel. Downstream, a throttle butterfly sets the airflow and with it the engine load; a choke butterfly upstream chokes the airflow to force a rich cold-start mixture.",
              "One jet cannot cover the whole range - a plain venturi richens the mixture as airflow grows - so carburettors stack circuits. The main circuit with its compensating jet and air-bleed emulsion tube flattens the high-flow curve. The idling circuit delivers fuel below the nearly closed throttle, where venturi vacuum is too weak, through the idle jet and a progression slot that carries the hand-off as the throttle cracks open. An accelerator pump squirts fuel to cover the wall-wetting lag on snap opening; the choke supplies cold-start richness; a power-enrichment system adds fuel at wide throttle. Sophisticated designs such as the Solex and the SU variable-choke add altitude and temperature compensation.",
              "Every weakness of the carburettor flows from single-point metering: it meters for the whole manifold and cannot correct cylinder-to-cylinder distribution differences, it is slow at transients, it drifts with air density, it suffers throttle-body icing in humid cold weather as evaporating fuel chills the body below freezing, and it can never hold the precise 14.7:1 that emission catalysts demand. That is why emissions legislation killed the carburettor on cars and replaced it with MPFI; it survives on two-wheelers, small gen-sets and classic engines where cost and simplicity still rule.",
            ],
            bullets: [
              "Venturi: throat velocity up, static pressure down - the depression that lifts fuel.",
              "Float chamber at constant head feeds the main jet against atmospheric reference.",
              "Circuits: main + compensating (emulsion), idle + progression, accelerator pump, choke, power enrichment.",
              "Icing risk: fuel evaporation chills the body below freezing in humid air.",
              "Fatal flaw for emissions: single-point metering cannot hold lambda 1 per cylinder.",
            ],
            table: {
              caption: "Carburettor circuits and their failure symptoms.",
              headers: ["Circuit", "Job", "Symptom if blocked"],
              rows: [
                ["Main + venturi", "Meters fuel with airflow", "No power above idle"],
                ["Compensating jet", "Flattens mixture at high flow", "Over-rich at speed, black smoke"],
                ["Idle + progression", "Fuel below a cracked throttle", "Engine dies at idle, flat tip-in"],
                ["Accelerator pump", "Covers the wall-wetting lag", "Flat spot on snap opening"],
                ["Choke", "Rich cold start", "Hard cold starts"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How a simple carburettor works",
              caption: "Bernoulli does the metering; every other device exists to correct what Bernoulli gets wrong.",
              steps: [
                { label: "Air enters, velocity rises in venturi", note: "static pressure drops at the throat" },
                { label: "Depression draws fuel from the float chamber", note: "through the main jet" },
                { label: "Emulsion tube shears fuel with air", note: "fine atomisation" },
                { label: "Mixture passes the throttle valve", note: "throttle sets the load" },
                { label: "Intake manifold distributes to cylinders", note: "the weak point" },
              ],
            },
            callout: {
              type: "tip",
              title: "Practise the sketch",
              body: "'Explain the simple carburettor with a sketch' is won by the drawing: venturi, float chamber, main jet, throttle, choke, each labelled. Practise producing that cross-section in under two minutes - it is worth more than any paragraph of prose.",
            },
            keyTerms: [
              { term: "Venturi depression", definition: "The drop in static pressure at a venturi throat, proportional to airflow, that draws and meters fuel." },
              { term: "Emulsion tube", definition: "A perforated tube that pre-mixes air with fuel before the main jet to stabilise mixture strength across the flow range." },
              { term: "Choke", definition: "A cold-start butterfly upstream of the venturi that restricts airflow and forces a rich mixture." },
            ],
            examQuestions: [
              {
                q: "Explain with a sketch the working of a simple carburettor, then describe the compensating devices: compensating jet, idle circuit, accelerator pump and choke.",
                marks: 7,
                outline: [
                  "Draw and label venturi, float chamber, main jet, throttle and choke.",
                  "Explain Bernoulli depression and the metering action.",
                  "Show why a plain carburettor richens at high flow.",
                  "Compensating jet and emulsion tube action.",
                  "Idle and progression circuit.",
                  "Accelerator pump and choke.",
                  "State the limitations that led to MPFI.",
                ],
              },
              {
                q: "Why does a carburettor need an accelerator pump?",
                marks: 2,
              },
              {
                q: "What is carburettor icing, and under what weather does it occur?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "MPFI: multi-point fuel injection",
            body: [
              "A multi-point fuel injection system puts an electromagnetic injector in each intake port, fed by an electric pump through a filter and a rail held at about 3-4 bar above manifold pressure. The ECU computes how long each injector must stay open. It reads the driver and the engine through sensors: the MAP sensor (manifold absolute pressure) or MAF meter plus intake air temperature for airflow, the throttle position sensor for demand rate, coolant temperature for warm-up corrections, the crankshaft position sensor for speed and phase, the oxygen (lambda) sensor in the exhaust for mixture feedback, and often a knock sensor for spark trim.",
              "In the speed-density method the ECU multiplies displacement, rpm, MAP and intake temperature through a volumetric-efficiency map to estimate inducted air mass, divides by the target A/F to get fuel mass, and converts that to a pulse width through the injector's flow rate. Battery-voltage correction (injectors open sluggishly when cold), warm-up enrichment, acceleration enrichment and canister purge all bias the base pulse. At steady state the lambda sensor closes the loop: a switching sensor at 14.7:1 lets the ECU dither short-term fuel trim until the catalyst sees stoichiometric exhaust, while long-term trim absorbs drift and ageing. Sequential injection times each shot just before its intake valve opens.",
              "Against the carburettor, MPFI buys per-cylinder metering, sharp transient response, precisely scheduled cold starts, closed-loop lambda control for the catalyst, altitude compensation, and a small but real economy gain - typically 5-10 percent - plus the ability to diagnose itself (OBD-II) and limp home when a sensor fails. The price is complexity: pump, injectors, sensors and ECU add cost that only emission law could justify. Maintenance centres on clean fuel, intact injector spray patterns and a healthy lambda sensor - a lazy sensor alone can cost 10-15 percent in fuel economy.",
            ],
            bullets: [
              "One injector per intake port; rail at 3-4 bar; ECU controls only the pulse width.",
              "Sensors: MAP/MAF, IAT, TPS, ECT, CKP, lambda (and knock).",
              "Speed-density: air mass from MAP, rpm, temperature and a volumetric-efficiency map.",
              "Closed loop: switching lambda sensor drives short- and long-term fuel trim to hold 14.7:1.",
              "Gains over the carburettor: per-cylinder metering, transients, 5-10% economy, OBD-II.",
            ],
            codeExample: {
              language: "python",
              caption: "Speed-density estimate of one injector's pulse width.",
              code: `# Speed-density estimate of injector pulse width (one cylinder, one cycle)
rpm, map_kpa, iat_k = 2400, 65, 310    # engine state from MAP, CKP and IAT
disp_l, ve, injector_g_s = 0.5, 0.88, 2.3
cold_start_multiplier = 1.0            # 1.0 warm; up to ~2.0 at -20 C

rho = map_kpa * 1000 / (287 * iat_k)   # intake air density, kg/m^3
air_g = rho * disp_l / 1000 * ve * 1000  # grams inhaled per intake event
fuel_g = air_g / 14.7 * cold_start_multiplier
pulse_ms = fuel_g / injector_g_s * 1000

print(f"air {air_g:.2f} g, fuel {fuel_g:.3f} g, pulse {pulse_ms:.2f} ms")
print(f"cycle time at {rpm} rpm: {60000 / rpm * 2:.1f} ms (four-stroke)")`,
            },
            diagram: {
              kind: "layers",
              title: "The MPFI control stack",
              caption: "Sensors feed computation; computation drives actuation; the lambda loop closes the stack.",
              layers: [
                { label: "Sensors", note: "MAP/MAF, TPS, ECT, CKP, lambda, knock" },
                { label: "ECU computation", note: "air mass model, fuel demand, pulse width" },
                { label: "Actuation", note: "injector drivers, fuel pump relay, spark" },
                { label: "Feedback", note: "lambda sensor trims the loop toward 14.7:1" },
              ],
            },
            callout: {
              type: "exam",
              title: "Every sensor, every signal",
              body: "The MPFI block diagram question wants every sensor named with its signal. Draw boxes: sensors in, ECU in the middle, injectors, pump and spark out - then draw the lambda loop as an arrow returning from the exhaust to the ECU.",
            },
            keyTerms: [
              { term: "Speed-density", definition: "Airflow estimation from MAP, rpm, temperature and a volumetric-efficiency map, used to compute fuel demand." },
              { term: "Pulse width", definition: "The milliseconds an injector stays open; it alone sets fuel quantity at fixed rail pressure." },
              { term: "Fuel trim", definition: "Closed-loop correction factors (short and long term) the ECU learns to hold lambda at 1." },
            ],
            examQuestions: [
              {
                q: "Draw the block diagram of an MPFI system, explain the function of each sensor and actuator, and describe closed-loop mixture control using the lambda sensor.",
                marks: 7,
                outline: [
                  "Layout: pump, filter, rail, port injectors, pressure regulator.",
                  "Sensors: MAP/MAF, TPS, ECT, CKP, lambda, knock.",
                  "Speed-density air-mass estimate and pulse-width computation.",
                  "Corrections: warm-up, acceleration, battery voltage.",
                  "Closed loop: switching lambda sensor, short and long term trim.",
                  "Why the catalyst demands stoichiometric exhaust.",
                  "Advantages over the carburettor.",
                ],
              },
              {
                q: "What is speed-density air metering?",
                marks: 3,
              },
              {
                q: "List four advantages of MPFI over a carburettor.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "CRDI: common rail diesel injection",
            body: [
              "In a conventional pump-line-nozzle diesel the injection pressure is tied to pump speed, so atomisation collapses at low rpm and each injection is a single shot timed by the pump cam. The common-rail idea severs that link: a mechanically driven high-pressure pump - typically a radial-piston unit - continuously charges an accumulator, the rail, to 1600-2000 bar. A pressure sensor on the rail feeds the ECU, which trims a fuel-metering valve on the pump to hold rail pressure on target across the whole speed-load map. Every injector then draws from the same constant-pressure reservoir.",
              "Each injector is a precision valve - solenoid or, better, a piezo stack - that opens on an ECU command alone. Because the command is electronic, injection is freely shaped in number, size and timing: a pilot shot of 1-2 mm3 lands a few crank degrees early to shorten the ignition delay and take the violence out of the premixed burn; the main shot follows at the optimum crank angle; post shots flush out soot late in the expansion stroke and, in diesels with a particulate filter, a late shot raises exhaust temperature for regeneration. Five or more injections per cycle are routine with piezo hardware.",
              "The payoff is the modern diesel: quiet cold idle (the pilot shot), high power density, low smoke, an optimised NOx-soot trade-off, and flat torque from low rpm because injection pressure no longer depends on engine speed. The price is manufacturing discipline - seat clearances of a few microns demand fuel filtered and water-separated to a standard older engines never met - plus high-pressure pump wear sensitivity and cost. Injector return lines carry leakage for lubrication and control, and troubleshooting starts with the rail-pressure trace.",
            ],
            bullets: [
              "Rail at 1600-2000 bar, decoupled from engine speed by an ECU-metered pump.",
              "Injectors: solenoid or piezo, opened by electronic command alone.",
              "Pilot injection shortens ignition delay - the diesel noise killer.",
              "Main and post shots shape heat release and clean up soot (and regenerate the DPF).",
              "Micron-level fuel cleanliness is the service critical point.",
            ],
            table: {
              caption: "Common rail versus conventional pump-line-nozzle injection.",
              headers: ["Aspect", "Pump-line-nozzle", "Common rail (CRDI)"],
              rows: [
                ["Pressure source", "Cam-driven jerk/distributor pump", "Independent rail charged by a pump"],
                ["Pressure at low rpm", "Falls with speed", "Held on target"],
                ["Injection events", "One per cycle", "Pilot + main + post"],
                ["Timing control", "Mechanical advance", "Free electronic map"],
                ["Noise", "Loud premixed knock", "Softened by the pilot shot"],
                ["Service", "Tolerant", "Micron-level filtration critical"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The CRDI fuel path",
              caption: "From tank to cylinder at 2000 bar - with the ECU shaping every shot on the way.",
              stages: [
                { label: "Tank and lift pump", note: "low-pressure feed, water separation" },
                { label: "High-pressure pump", note: "radial pistons, up to 2000 bar" },
                { label: "Common rail", note: "accumulator smooths the pulses" },
                { label: "Rail pressure control", note: "metering valve plus sensor loop" },
                { label: "Electronically triggered injectors", note: "pilot, main and post shots" },
              ],
            },
            callout: {
              type: "exam",
              title: "Numbers and keywords",
              body: "Write rail pressure with units (1600-2000 bar) and always mention pilot injection explicitly - 'multi-injection capability' is the phrase examiners scan for in CRDI answers.",
            },
            keyTerms: [
              { term: "Common rail", definition: "A shared high-pressure accumulator supplying all injectors, so injection pressure is independent of engine speed." },
              { term: "Pilot injection", definition: "A small fuel shot fired a few degrees before the main shot to shorten ignition delay and soften combustion noise." },
              { term: "Piezo injector", definition: "An injector whose needle is actuated by a rapidly expanding piezoelectric stack, allowing five-plus precise shots per cycle." },
            ],
            examQuestions: [
              {
                q: "Explain the layout and working of a common-rail diesel injection system with a block diagram, and compare it with conventional pump-line-nozzle injection.",
                marks: 7,
                outline: [
                  "Draw the tank-pump-rail-injector layout with the ECU.",
                  "Explain the rail as accumulator; 1600-2000 bar.",
                  "Pressure control loop: metering valve plus rail sensor.",
                  "Injector types: solenoid versus piezo.",
                  "Injection shaping: pilot, main, post.",
                  "Benefits: noise, low-rpm torque, emissions, economy.",
                  "Contrast with jerk-pump limits at low rpm.",
                ],
              },
              {
                q: "What is pilot injection and why does it reduce diesel noise?",
                marks: 3,
              },
              {
                q: "Give two reasons piezo injectors outperform solenoid ones.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Electronic ignition systems",
            body: [
              "The battery-coil ignition system is a magnetic amplifier. Current from the battery flows through the ignition coil's primary winding while the contact-breaker points are closed (the dwell period), building a magnetic field. When the cam opens the points, the field collapses and - thanks to a turns ratio near 100:1 - the secondary winding produces 15,000 to 25,000 V, enough to jump the plug gap. A capacitor (condenser) across the points prevents the arc that would otherwise burn them and lets the primary current die quickly, which is precisely what makes the spark hot. The distributor then routes each spark to the right cylinder in firing order.",
              "Mechanical points cap the system: they arc, pit and wear, retarding the timing by degrees over thousands of kilometres; at high rpm they float and cannot carry enough current for a fat spark; and the centrifugal and vacuum advance mechanisms that tailor timing to speed and load are crude two-input approximations of a two-dimensional map. Electronic ignition replaces the points with a wearless pickup - Hall-effect or inductive - that switches a power transistor handling the primary current. The ECU then reads rpm and load off a stored spark-advance map, trims with coolant temperature and knock-sensor feedback, and controls dwell precisely so the coil is fully charged at any speed.",
              "Several architectures build on this base. Capacitor-discharge ignition (CDI) charges a capacitor and dumps it through a transformer for a short, intense spark that survives very high rpm - standard on two-wheelers. Distributorless ignition (DIS) fires paired cylinders from one coil with a waste spark, deleting the distributor. Coil-on-plug mounts a small coil directly on each plug, deleting plug leads and enabling per-cylinder energy control and ion-sense misfire detection. The result is maintenance-free ignition with precise timing that neither drifts nor needs service through the life of the vehicle.",
            ],
            bullets: [
              "Coil = transformer: points break the primary current, the secondary makes 15-25 kV.",
              "Condenser: stops point arcing and speeds primary collapse - weak spark if it fails.",
              "Electronic pickup (Hall/inductive) plus transistor: no wear, higher energy, stable dwell.",
              "ECU advance maps replace centrifugal and vacuum mechanisms; knock sensor trims them.",
              "Families: CDI, DIS waste-spark, coil-on-plug.",
            ],
            table: {
              caption: "The evolution of ignition systems.",
              headers: ["System", "Trigger", "Advance control", "Remark"],
              rows: [
                ["Contact breaker", "Cam-opened points", "Centrifugal + vacuum", "Wears, drifts, needs gap setting"],
                ["Transistorized (TI)", "Hall/inductive pickup", "Electronic maps", "No point wear"],
                ["CDI", "Pickup plus SCR dump", "Electronic", "Short intense spark, high rpm"],
                ["DIS", "CKP/CMP sensors", "Full ECU map", "Waste spark, no distributor"],
                ["Coil-on-plug", "CKP/CMP sensors", "Full ECU map", "Per-cylinder control"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Points versus electronics",
              caption: "The whole ignition story in one contrast: what the pickup and transistor removed.",
              left: {
                heading: "Conventional coil ignition",
                items: [
                  "Points switch the primary current",
                  "Condenser prevents arcing",
                  "Centrifugal and vacuum advance",
                  "Distributor routes the spark",
                  "Points wear, pit and drift",
                ],
              },
              right: {
                heading: "Electronic ignition",
                items: [
                  "Hall or inductive pickup",
                  "Power transistor switches the primary",
                  "ECU spark-advance maps",
                  "Knock-sensor feedback trims",
                  "Maintenance-free and precise",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The condenser two-marker",
              body: "The condenser question is a classic: without it, the points arc, the primary current decays slowly (weak spark), and the contacts pit and burn. Two functions, three consequences - memorise the chain.",
            },
            keyTerms: [
              { term: "Dwell angle", definition: "The crank or cam degrees during which the ignition primary circuit is closed and the coil field is building." },
              { term: "Hall-effect pickup", definition: "A wearless magnetic sensor whose output pulse triggers the electronic ignition switch." },
              { term: "Waste spark", definition: "The DIS scheme firing paired cylinders together - one near TDC compression, the other harmlessly near TDC exhaust." },
            ],
            examQuestions: [
              {
                q: "Describe battery-coil ignition with a circuit diagram, explain the role of the condenser, and show how electronic ignition removes its limitations.",
                marks: 7,
                outline: [
                  "Circuit: battery, coil, points, condenser, distributor, plugs.",
                  "Dwell, field build, collapse, induced secondary voltage.",
                  "Condenser: no-arc plus fast current decay.",
                  "Limitations: point wear, float at rpm, crude advance.",
                  "Electronic pickup and transistor switching.",
                  "ECU maps plus knock feedback.",
                  "CDI, DIS and coil-on-plug as the evolution.",
                ],
              },
              {
                q: "State the two functions of the condenser in coil ignition.",
                marks: 2,
              },
              {
                q: "What is waste-spark distribution in DIS?",
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
      title: "Engine Performance and Testing",
      summary:
        "Proving the engine on the test bed: indicated, brake and friction power, the six efficiencies, specific fuel consumption, the heat balance sheet, the Morse test, and the emissions - CO, HC, NOx and particulate - with the catalytic converter and EGR that control them.",
      chapter: {
        number: "04",
        title: "Performance and Testing",
        intro:
          "Unit IV is the test-bed unit. It defines the power chain - indicated, brake, friction - and the mean effective pressures that normalise it; assembles the six efficiencies and the specific fuel consumption that invert them; books every kilojoule of fuel energy on the heat balance sheet; runs the Morse test to separate friction from gas work; and ends with what leaves the tailpipe - CO, HC, NOx and particulates - and the three-way catalyst, EGR and aftertreatment chain that tame them.",
        inOneBreath:
          "IP = p_mi L A n K, BP = 2 pi N T / 60, FP = IP - BP and eta_m = BP/IP at 70-90%; brake thermal efficiency is BP/(m_f CV) - 25-30% for SI, 35-40% for CI - and BSFC inverts it as 3600/(BSFC x CV); the heat balance splits fuel energy into brake (~30%), cooling (~30%), exhaust (~30%) and unaccounted; the Morse test cuts cylinders one at a time so each BP drop equals that cylinder's IP; and emissions - CO from rich mixture, HC from quench and crevices, NOx from hot oxygen, PM from rich sprays - are controlled by closed-loop lambda, the three-way catalyst, EGR and the DPF.",
        sections: [
          {
            number: "4.1",
            title: "Power and mean effective pressure: IP, BP and FP",
            body: [
              "Indicated power is the rate of work done on the pistons by the gas - the engine's own account, taken before friction takes its share. An indicator diagram (or its electronic descendant, cylinder pressure versus crank angle integrated over volume) yields the net work per cycle, and dividing by swept volume gives the indicated mean effective pressure (IMEP): the notional constant pressure that would do the same work over the same stroke. For a four-stroke engine IP = p_mi x L x A x n x K, with p_mi in kPa, L the stroke in metres, A the piston area, n the power strokes per second per cylinder (N/120), and K the number of cylinders.",
              "Brake power is what the dynamometer measures at the shaft: BP = 2 pi N T / 60, in kW with N in rpm and T in newton-metres. The difference between the two is friction power - piston rings, bearings, auxiliaries and pumping - so FP = IP - BP, and mechanical efficiency eta_m = BP/IP typically lands between 70 and 90 percent. Torque is read from a rope brake, hydraulic or eddy-current dynamometer by holding the stator on a load cell and measuring the reaction, or in the classic laboratory rig by rope, spring balance and dead weight.",
              "Mean effective pressure is the great normaliser: BMEP = BP / (L x A x n x K) is a pressure stripped of engine size, so a small turbo three-cylinder and a big naturally-aspirated six can be compared purely on breathing and combustion quality. Typical values: 10-12 bar for naturally-aspirated petrol, 15-20 bar for turbo petrol, 8-9 bar for naturally-aspirated diesel and 18-25 bar for turbo-diesel. Since torque is directly proportional to BMEP, and BMEP is limited by charge density and combustion quality, MEP is the honest index of how hard an engine works per litre of displacement.",
            ],
            bullets: [
              "IP = p_mi L A n K: in-cylinder gas power from the indicator diagram.",
              "BP = 2 pi N T / 60: shaft power from the dynamometer torque.",
              "FP = IP - BP; mechanical efficiency eta_m = BP/IP, typically 70-90%.",
              "IMEP = net cycle work / swept volume; BMEP is its brake counterpart.",
              "BMEP bands: NA petrol 10-12 bar, turbo petrol 15-20, NA diesel 8-9, turbo-diesel 18-25.",
            ],
            codeExample: {
              language: "python",
              caption: "IP, BP, friction power and mechanical efficiency from test data.",
              code: `# IP, BP, FP and mechanical efficiency of a 4-cylinder four-stroke
import math

pmi_bar, n_cyl = 6.0, 4
bore_mm, stroke_mm, rpm = 100, 120, 3000
torque_nm = 160

a = math.pi / 4 * (bore_mm / 1000) ** 2      # piston area, m^2
l = stroke_mm / 1000                          # stroke, m
n = rpm / 120                                 # power strokes per second per cylinder

ip = pmi_bar * 100 * l * a * n * n_cyl        # kPa x m^3/s = kW
bp = 2 * math.pi * rpm / 60 * torque_nm / 1000
fp = ip - bp

print(f"IP {ip:.1f} kW, BP {bp:.1f} kW, FP {fp:.1f} kW")
print(f"mechanical efficiency {bp / ip:.1%}")`,
            },
            diagram: {
              kind: "pyramid",
              title: "The power cascade",
              caption: "Every level down is the energy source for the level above; friction bleeds the steps in between.",
              tiers: [
                { label: "Brake power", note: "what the shaft delivers to the load" },
                { label: "Indicated power", note: "minus friction and pumping losses" },
                { label: "Fuel power input", note: "m_f x CV; combustion and heat losses below this" },
              ],
            },
            callout: {
              type: "warning",
              title: "Units murder numericals",
              body: "Fix conventions once: p_mi in kPa, L and A in metres, N in rpm, T in newton-metres, and n = N/120 for a four-stroke (N/60 for two-stroke). Write the formula, substitute with units shown beside each number, and the marks follow.",
            },
            keyTerms: [
              { term: "Indicated mean effective pressure", definition: "Net work per cycle divided by swept volume - a constant pressure that would produce the same work over the piston stroke." },
              { term: "Friction power", definition: "The difference IP - BP, consumed by rubbing, pumping and auxiliary losses." },
              { term: "Dynamometer", definition: "A loading device that absorbs engine output while measuring torque - rope brake, hydraulic or eddy-current type." },
            ],
            examQuestions: [
              {
                q: "Define IP, BP, FP, IMEP and BMEP. A four-cylinder four-stroke engine (bore 100 mm, stroke 120 mm) develops an IMEP of 6 bar at 3000 rpm; a dynamometer reads 160 N m. Find IP, BP, FP and mechanical efficiency.",
                marks: 7,
                outline: [
                  "Define each quantity with its formula.",
                  "A = pi/4 x 0.1^2 = 0.00785 m^2; n = 3000/120 = 25 strokes/s.",
                  "IP = 600 x 0.12 x 0.00785 x 25 x 4 = 56.5 kW.",
                  "BP = 2 pi x 3000 x 160 / 60 / 1000 = 50.3 kW.",
                  "FP = 56.5 - 50.3 = 6.2 kW.",
                  "eta_m = 50.3 / 56.5 = 89%.",
                  "Comment on where friction power goes (rings, bearings, pumping).",
                ],
              },
              {
                q: "Why is BMEP preferred over torque when comparing engines of different sizes?",
                marks: 3,
              },
              {
                q: "Write the relation between IP, BP and FP, and define mechanical efficiency.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Engine efficiencies: thermal, mechanical, relative, volumetric",
            body: [
              "Six efficiencies describe an engine, each answering a different question. Air-standard efficiency is the ideal cycle's score. Indicated thermal efficiency eta_it = IP / (m_f x CV) asks how well in-cylinder work follows the fuel: typically 35-45 percent. Brake thermal efficiency eta_bt = BP / (m_f x CV) is the customer's figure - about 25-30 percent for petrol, 35-40 percent for diesel. Mechanical efficiency eta_m = BP/IP (70-90 percent) prices the friction bill. Relative efficiency (efficiency ratio) eta_r = eta_it / eta_air (50-60 percent) measures how close real combustion comes to the ideal. Volumetric efficiency eta_v - actual air mass inhaled per cycle over the mass that would fill the swept volume at ambient - scores the breathing: 70-90 percent naturally aspirated.",
              "The efficiencies chain together. eta_bt = eta_it x eta_m: the brake figure is the indicated figure minus friction's share. And eta_it = eta_air x eta_r ties the real cycle to the textbook one. Specific fuel consumption inverts eta_bt: BSFC = m_f / BP, and with CV in kJ/kg, eta_bt = 3600 / (BSFC x CV). A petrol engine at BSFC 0.27 kg/kWh on CV 44000 kJ/kg runs at 3600/(0.27 x 44000) = 30 percent brake thermal efficiency; a diesel at 0.21 kg/kWh on CV 42000 runs at about 41 percent. One number, one division - but only if the units are already sorted.",
              "Volumetric efficiency is the multiplier every other improvement rides on: more air means more fuel burned means more MEP. It is measured with an air box and orifice meter (or a hot-wire meter), and it falls when the throttle closes (pumping), when the intake charge is hot, and when valve flow chokes at high rpm; it rises with tuned intake lengths, larger or more valves, VVT and, most of all, boost. Part-load throttling is why a big petrol engine loafing in city traffic posts 15 percent brake thermal efficiency while the same engine at wide-open throttle posts 30 - the pumping losses changed, not the chemistry.",
            ],
            bullets: [
              "eta_it = IP/(m_f CV): 35-45% typical; eta_bt = BP/(m_f CV): 25-30% SI, 35-40% CI.",
              "eta_m = BP/IP = 70-90%; the chain: eta_bt = eta_it x eta_m.",
              "eta_r = eta_it/eta_air = 50-60%: how far reality strays from the ideal cycle.",
              "eta_v = actual air / ideal air per cycle: 70-90% NA; boosted engines exceed 100% of ambient density.",
              "BSFC = m_f/BP and eta_bt = 3600/(BSFC x CV) with CV in kJ/kg.",
            ],
            table: {
              caption: "The six efficiencies at a glance.",
              headers: ["Efficiency", "Formula", "Typical", "Measures"],
              rows: [
                ["Air-standard", "Otto/Diesel cycle formula", "55-60%", "Ideal ceiling"],
                ["Indicated thermal", "IP / (m_f x CV)", "35-45%", "In-cylinder conversion"],
                ["Brake thermal", "BP / (m_f x CV)", "SI 25-30%, CI 35-40%", "Delivered at the shaft"],
                ["Mechanical", "BP / IP", "70-90%", "Friction bill"],
                ["Relative", "eta_it / eta_air", "50-60%", "Reality versus ideal"],
                ["Volumetric", "m_air actual / m_air ideal", "70-90% NA", "Breathing quality"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The efficiency stack",
              caption: "From the ideal ceiling at the top to the delivered brake figure at the bottom.",
              layers: [
                { label: "Air-standard efficiency", note: "the ideal cycle benchmark" },
                { label: "Relative efficiency", note: "eta_it = eta_air x eta_r" },
                { label: "Indicated thermal efficiency", note: "in-cylinder, friction ignored" },
                { label: "Mechanical efficiency", note: "eta_bt = eta_it x eta_m" },
                { label: "Brake thermal efficiency", note: "delivered at the shaft" },
              ],
            },
            callout: {
              type: "exam",
              title: "Formula first, then substitute",
              body: "Numericals on brake thermal efficiency and BSFC appear almost every session. Write eta_bt = BP/(m_f x CV) first, keep m_f in kg/s (divide kg/h by 3600), and convert CV once. Those two unit moves are where the marks die.",
            },
            keyTerms: [
              { term: "Brake thermal efficiency", definition: "Ratio of brake power to the rate of fuel energy supplied: BP / (m_f x CV)." },
              { term: "Volumetric efficiency", definition: "Ratio of the actual air mass inhaled per cycle to the mass that would occupy the swept volume at ambient conditions." },
              { term: "Relative efficiency", definition: "The ratio of indicated thermal to air-standard efficiency, measuring combustion and heat losses against the ideal cycle." },
            ],
            examQuestions: [
              {
                q: "Define air-standard, indicated thermal, brake thermal, mechanical, relative and volumetric efficiencies, give typical ranges for SI and CI engines, and show how they relate to each other and to BSFC.",
                marks: 7,
                outline: [
                  "Define each efficiency with its formula.",
                  "Typical values presented as a small table.",
                  "Derive eta_bt = eta_it x eta_m from the definitions.",
                  "State eta_it = eta_air x eta_r.",
                  "BSFC definition and the identity eta_bt = 3600/(BSFC x CV).",
                  "Worked number: petrol at 0.27 kg/kWh and CV 44000 gives 30%.",
                  "Explain why SI throttling hurts part-load eta_v and eta_bt.",
                ],
              },
              {
                q: "An engine runs at BSFC 0.25 kg/kWh on fuel of CV 44000 kJ/kg. Find its brake thermal efficiency.",
                marks: 3,
              },
              {
                q: "Why is volumetric efficiency below 100 percent even at wide-open throttle?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Specific fuel consumption and the heat balance sheet",
            body: [
              "Specific fuel consumption is fuel burned per unit of output - the inverse of efficiency made measurable: BSFC = m_f / BP in kg/kWh (or ISFC against indicated power). Petrol engines land near 0.25-0.30 kg/kWh, diesels near 0.19-0.24, and huge marine diesels brush 0.16. Plotting BSFC over speed and load draws the fuel map: islands of best economy sitting near 70-80 percent load around peak-torque speed, with consumption worsening in every direction - toward idle (fuel burned, nothing delivered) and toward high rpm (friction plus full-load enrichment).",
              "A heat balance sheet accounts for the fuel energy across its destinations over a trial period. Input is m_f x CV, with fuel weighed on a burette and CV from a bomb calorimeter. Brake work is BP measured on the dynamometer. Heat to cooling water is m_w x c_pw x (T_out - T_in) from the water meter and thermometers. Heat to exhaust is estimated as m_g x c_pg x (T_g - T_amb), with gas mass taken as air plus fuel (air from an orifice meter) and exhaust temperature from a thermocouple. Whatever closes the gap is 'unaccounted': radiation, friction heat not picked up by the water, incomplete combustion and instrument error.",
              "The typical full-load split: about 30 percent to brake power for petrol (35-40 for diesel), about 30 percent to cooling water, about 30 percent to exhaust, and 5-10 percent unaccounted. The sheet's value is diagnostic: exhaust loss invites a turbocharger, cooling loss a waste-heat boiler, and a fat unaccounted column points to poor instrumentation. It is also the standard sanity check on a test bed - if the streams do not sum to the input within about 5 percent, one of the measurements is wrong.",
            ],
            bullets: [
              "BSFC = m_f/BP in kg/kWh: petrol 0.25-0.30, diesel 0.19-0.24, marine 0.16.",
              "Fuel map: best-economy islands at 70-80% load near peak-torque speed.",
              "Input = m_f x CV; brake, cooling, exhaust streams each computed per hour then as percent.",
              "Cooling = m_w c_pw dT; exhaust = m_g c_pg (T_g - T_amb).",
              "Unaccounted = radiation + friction + incomplete combustion + error; should stay under 10%.",
            ],
            codeExample: {
              language: "python",
              caption: "Heat balance sheet for a one-hour engine trial.",
              code: `# Heat balance sheet for a one-hour petrol engine trial
fuel_kg, cv = 5.5, 44000.0            # kg/h and kJ/kg
bp_kw = 18.0                          # dynamometer reading
water_kg, t_rise = 700.0, 25.0        # kg/h, deg C
exh_kg, cp, exh_dt = 160.0, 1.05, 420.0

input_kw = fuel_kg * cv / 3600
cool_kw = water_kg * 4.187 * t_rise / 3600
exh_kw = exh_kg * cp * exh_dt / 3600
unacct_kw = input_kw - bp_kw - cool_kw - exh_kw

streams = [("brake power", bp_kw), ("cooling water", cool_kw),
           ("exhaust", exh_kw), ("unaccounted", unacct_kw)]
print(f"input {input_kw:.2f} kW from {fuel_kg} kg fuel")
for name, kw in streams:
    print(f"{name:12s} {kw:6.2f} kW  {kw / input_kw:5.1%}")`,
            },
            diagram: {
              kind: "flow",
              title: "Where the fuel energy goes",
              caption: "The heat balance at full load: three named streams and one honest residual.",
              steps: [
                { label: "Fuel energy 100%", note: "m_f x CV per hour" },
                { label: "Brake power ~30%", note: "measured on the dynamometer" },
                { label: "Cooling water ~30%", note: "m_w c_pw dT" },
                { label: "Exhaust ~30%", note: "m_g c_pg (T_g - T_amb)" },
                { label: "Unaccounted 5-10%", note: "radiation, friction, error" },
              ],
            },
            callout: {
              type: "exam",
              title: "Close the sheet",
              body: "The heat balance numerical is a guaranteed scorer if you work in one unit system: compute every stream in kJ/h or in kW, convert to percentages last, and write the closing line showing they total 100 percent. Examiners check for that line.",
            },
            keyTerms: [
              { term: "Brake specific fuel consumption", definition: "Fuel mass flow per unit of brake power, kg/kWh; the practical inverse of brake thermal efficiency." },
              { term: "Heat balance sheet", definition: "A per-hour account of fuel energy split among brake work, cooling water, exhaust and unaccounted losses." },
              { term: "Unaccounted losses", definition: "The residual of a heat balance: radiation, unmeasured friction, incomplete combustion and instrument error." },
            ],
            examQuestions: [
              {
                q: "In a one-hour trial a petrol engine consumed 5.5 kg of fuel (CV 44000 kJ/kg) and delivered 18 kW. Cooling water flowed at 700 kg/h rising 25 C; exhaust gases (160 kg/h, c_pg 1.05 kJ/kg K) left at 450 C against 30 C ambient. Draw the heat balance sheet.",
                marks: 7,
                outline: [
                  "Input: 5.5 x 44000 = 242000 kJ/h = 67.2 kW.",
                  "Brake: 18 kW = 64800 kJ/h (26.8%).",
                  "Cooling: 700 x 4.187 x 25 = 73270 kJ/h = 20.4 kW (30.3%).",
                  "Exhaust: 160 x 1.05 x 420 = 70560 kJ/h = 19.6 kW (29.2%).",
                  "Unaccounted: 67.2 - 18 - 20.4 - 19.6 = 9.2 kW (13.7%).",
                  "Present as a sheet with percentages summing to 100%.",
                  "Comment: unaccounted slightly high - radiation and friction heat.",
                ],
              },
              {
                q: "Define BSFC and quote typical SI and CI values.",
                marks: 3,
              },
              {
                q: "Why is exhaust heat the most recoverable of the engine's losses?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "The Morse test and performance testing",
            body: [
              "Indicated power can be read directly from cylinder pressure diagrams, but on a multi-cylinder engine there is a cheaper route: the Morse test. Run the engine steadily at a set speed and load and record the brake power. Then disable one cylinder - short its spark plug in a petrol engine, cut its injection in a diesel - while readjusting the dynamometer to hold the same speed, and record the new brake power. The drop in brake power equals the indicated power of the disabled cylinder, because that cylinder's friction and pumping work continue unchanged while its contribution to gas work vanishes.",
              "Why does the drop equal indicated - not brake - power? With cylinder 1 cut, the remaining cylinders still make their full indicated power, and total friction is essentially the same, for the dead cylinder still compresses, pumps and rubs. So BP(all) - BP(cut 1) = IP_1. Repeating for every cylinder gives total IP as the sum of the individual drops, and eta_m = BP / IP. Worked example: BP = 24.0 kW, and cutting cylinders 1 to 4 in turn gives 16.6, 16.4, 16.5 and 16.5 kW. The drops are 7.4, 7.6, 7.5 and 7.5 kW; IP = 30.0 kW; FP = 6.0 kW; mechanical efficiency = 80 percent.",
              "Assumptions bound the method: friction power must stay constant at fixed speed (approximately true), which is why the test fails on single-cylinder engines - cut the only cylinder and the engine stops - and weakens at light load where the dead cylinder's pumping share grows. Alternatives exist: the Willans line plots fuel consumption against BP at constant speed and extrapolates the straight line to zero fuel, the negative intercept being friction power; and the motoring test drives the unfired engine from a dynamometer to read friction directly. Performance testing completes the picture with characteristic curves: torque and BP against speed at full load, and BSFC against load at constant speed.",
            ],
            bullets: [
              "Cut one cylinder at a time; hold speed; the BP drop equals that cylinder's IP.",
              "Assumption: friction power unchanged by the cut (the dead cylinder still pumps and rubs).",
              "Total IP = sum of drops; FP = IP - BP; eta_m = BP/IP.",
              "Not applicable to single-cylinder engines; weak at light load.",
              "Alternatives: Willans line extrapolation, motoring test, direct indicator diagrams.",
            ],
            codeExample: {
              language: "python",
              caption: "Morse test computation from brake power readings.",
              code: `# Morse test: IP, FP and mechanical efficiency of a 4-cylinder engine
bp_all = 24.0                              # kW with all cylinders firing
bp_cut = [16.6, 16.4, 16.5, 16.5]          # kW with cylinder 1..4 cut in turn

ip_i = [round(bp_all - x, 2) for x in bp_cut]   # drop = IP of that cylinder
ip_total = sum(ip_i)
fp = ip_total - bp_all

print("IP per cylinder:", ip_i)
print(f"total IP {ip_total:.2f} kW, FP {fp:.2f} kW, eta_m {bp_all / ip_total:.1%}")`,
            },
            diagram: {
              kind: "cycle",
              title: "The Morse test as a loop",
              caption: "Repeat the loop once per cylinder; the drops add up to indicated power.",
              steps: [
                { label: "Steady run: record BP all firing", note: "fixed speed and load" },
                { label: "Cut cylinder 1", note: "spark or injection off" },
                { label: "Record BP, note the drop", note: "drop = IP of cylinder 1" },
                { label: "Repeat for each cylinder", note: "same speed, same load" },
                { label: "Sum the drops", note: "total IP = sum of drops" },
                { label: "Compute eta_m", note: "BP over IP; FP = IP - BP" },
              ],
            },
            callout: {
              type: "warning",
              title: "The drop is NOT friction power",
              body: "The most common Morse-test error is calling the brake power drop the friction power. It is the INDICATED power of the cut cylinder. Friction is what does not change during the test - that constancy is the entire logic of the method.",
            },
            keyTerms: [
              { term: "Morse test", definition: "A method of finding indicated power of a multi-cylinder engine by cutting out cylinders one at a time and summing the brake power drops." },
              { term: "Willans line", definition: "The near-linear plot of fuel consumption against brake power at constant speed; extrapolated to zero fuel it intercepts at minus friction power." },
              { term: "Motoring test", definition: "Driving the unfired engine by a dynamometer at test speed to measure friction power directly." },
            ],
            examQuestions: [
              {
                q: "Explain the Morse test with its assumptions. For a four-cylinder engine, BP is 24.0 kW with all firing, and 16.6, 16.4, 16.5 and 16.5 kW with cylinders 1-4 cut in turn at the same speed. Compute IP, FP and mechanical efficiency.",
                marks: 7,
                outline: [
                  "Describe the procedure: cut, hold speed, record BP.",
                  "Explain the logic: drop = IP of cut cylinder, friction unchanged.",
                  "Drops: 7.4, 7.6, 7.5, 7.5 kW.",
                  "IP = 30.0 kW.",
                  "FP = 30.0 - 24.0 = 6.0 kW.",
                  "eta_m = 24/30 = 80%.",
                  "State assumptions, the single-cylinder limitation, and name the Willans and motoring alternatives.",
                ],
              },
              {
                q: "Why does the Morse test fail for a single-cylinder engine?",
                marks: 2,
              },
              {
                q: "Explain the Willans line method of measuring friction power.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Engine emissions and pollution control",
            body: [
              "Petrol engines emit CO wherever the mixture runs rich (not enough oxygen to finish the CO2), unburned HC from wall quenching, crevice volumes, misfires and oil films, and NOx wherever flame temperature exceeds roughly 1500 C with spare oxygen and reaction time - the Zeldovich thermal mechanism. Diesel engines add particulate matter and smoke: fuel-rich pockets inside the diffusion flame pyrolyse into soot that mostly burns out later in the stroke. Sulphur in fuel makes SO2, and CO2 leaves in proportion to fuel burned. The signature tension: CO and HC fall as mixtures lean out, while NOx peaks just lean of stoichiometric - three pollutants pulling in three directions.",
              "India's BS-VI norms (in force April 2020, leapfrogging BS-V) cap CO, HC and NOx for petrol engines and add NOx, PM mass and particle-number limits for diesels, plus smoke opacity. The petrol engine's answer is the three-way catalytic converter: a ceramic honeycomb washcoated with platinum and palladium (oxidising CO and HC to CO2 and water) and rhodium (reducing NOx to nitrogen), which achieves both jobs simultaneously only within about 1 percent of stoichiometric - hence the closed-loop lambda control of section 3.3. The diesel, always lean, cannot use three-way chemistry: cooled EGR cuts NOx by diluting the charge and dropping flame temperature, a diesel oxidation catalyst cleans CO and HC, a particulate filter (DPF) traps and periodically regenerates soot, and selective catalytic reduction (SCR) with urea finishes NOx on heavy engines.",
              "The catalytic converter's anatomy explains its care: a cordierite honeycomb of some 60-90 cells per cm2, washcoated with alumina carrying ceria and zirconia oxygen-storage buffers, housed in stainless steel close to the engine. It lights off at 250-350 C - cold starts emit before then, which is why close-coupled converters and insulation shorten the sprint to light-off. Lead and sulphur poison the noble metals permanently, which is why unleaded petrol and low-sulphur diesel are legal preconditions for catalysts. EGR, typically 10-20 percent of the charge, roughly halves NOx at the cost of some smoke and fuel economy if overdone.",
            ],
            bullets: [
              "CO from rich mixture; HC from quench, crevices, misfire and oil; NOx from high temperature plus oxygen plus time.",
              "PM and smoke: rich pockets in diesel diffusion flames pyrolysing to soot.",
              "Three-way catalyst needs lambda within about 1% of 1 - closed-loop control is mandatory.",
              "Diesel route: cooled EGR + DOC + DPF, with SCR and urea for heavy duty.",
              "Light-off at 250-350 C; lead and sulphur poison Pt/Pd/Rh permanently.",
            ],
            table: {
              caption: "Pollutant sources and their controls.",
              headers: ["Pollutant", "Formed by", "Control device"],
              rows: [
                ["CO", "Rich mixture, incomplete oxidation", "Three-way catalyst or DOC"],
                ["HC", "Quench layers, crevices, misfire, oil film", "Three-way catalyst or DOC"],
                ["NOx", "Flame temperature above ~1500 C with spare O2", "EGR plus rhodium catalyst or SCR"],
                ["PM and smoke", "Rich pockets pyrolysing in diesel sprays", "DPF, finer atomisation, leaner limit"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The aftertreatment chain",
              caption: "What stands between the exhaust valve and the tailpipe on a modern vehicle.",
              stages: [
                { label: "Engine-out gases", note: "CO, HC, NOx (plus PM for diesel)" },
                { label: "EGR valve", note: "recirculates 10-20% - NOx down" },
                { label: "Three-way catalyst / DOC + DPF", note: "oxidise CO/HC, trap soot" },
                { label: "Lambda sensor feedback", note: "holds stoichiometric for the catalyst" },
                { label: "Tailpipe", note: "BS-VI limits met" },
              ],
            },
            callout: {
              type: "exam",
              title: "Why stoichiometric?",
              body: "'Why must the SI engine run at stoichiometric for its catalyst?' is a favourite: the oxidising reactions need oxygen, NOx reduction needs a reducing atmosphere, and only the narrow window near lambda 1 supplies both at once - which is exactly why the closed loop exists.",
            },
            keyTerms: [
              { term: "Three-way catalytic converter", definition: "A Pt/Pd/Rh catalyst converting CO and HC to CO2 and water while reducing NOx to nitrogen; effective only near lambda 1." },
              { term: "Exhaust gas recirculation", definition: "Feeding 10-20 percent of exhaust back to the intake to lower flame temperature and oxygen concentration, cutting NOx." },
              { term: "Light-off temperature", definition: "The catalyst temperature, about 250-350 C, at which conversion efficiency reaches 50 percent." },
            ],
            examQuestions: [
              {
                q: "Explain the formation of CO, HC, NOx and particulate emissions in SI and CI engines, then describe the construction and working of a three-way catalytic converter and the role of EGR.",
                marks: 7,
                outline: [
                  "Formation of each pollutant with its A/F dependence.",
                  "SI versus CI emission signatures.",
                  "Catalyst construction: honeycomb, washcoat, noble metals.",
                  "Oxidation and reduction chemistry of the three ways.",
                  "Why the lambda-1 window is required.",
                  "EGR mechanism, typical rates and trade-offs.",
                  "Add BS-VI context and the diesel DOC + DPF (+ SCR) chain.",
                ],
              },
              {
                q: "Why does EGR reduce NOx formation?",
                marks: 3,
              },
              {
                q: "Why does a three-way catalyst need stoichiometric exhaust?",
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
      title: "Supercharging and Modern Trends",
      summary:
        "Squeezing more from every litre: supercharging and its blower types, turbocharging and lag control, intercooling for density, variable valve timing and the Miller cycle, and the frontiers - HCCI combustion and hybrid-electric powertrains.",
      chapter: {
        number: "05",
        title: "Supercharging and Modern Trends",
        intro:
          "Unit V multiplies the engine. Supercharging and turbocharging push more air through the same displacement - one paying crank power for instant boost, the other recovering exhaust energy at the price of lag; intercooling converts that pressure back into density; variable valve timing reshapes the breathing to every operating point and enables the Miller cycle; and HCCI and hybrid powertrains attack the remaining losses from combustion quality and duty cycle.",
        inOneBreath:
          "Supercharging packs the cylinder at 1.5-3x density for 30-50% more power, with Roots, vane, screw and centrifugal blowers trading efficiency against response; the turbocharger drives its compressor from an exhaust turbine, with the wastegate and variable geometry managing lag; intercooling refunds the density that compression heat stole (about 22% at 2:1 boost); VVT phases, switches and lifts valves for torque, economy and the Miller cycle; HCCI burns a homogeneous lean charge by compression ignition with near-zero NOx but a control problem; and series, parallel and power-split hybrids add stop-start, regenerative braking and load levelling.",
        sections: [
          {
            number: "5.1",
            title: "Supercharging: purpose, effects and types",
            body: [
              "Supercharging pushes the cylinder's air supply past what atmosphere alone delivers: a compressor raises intake density, letting the engine burn proportionally more fuel in the same swept volume. The objects are power density (a smaller engine for the same output), altitude recovery (atmospheric density falls about 11 percent per 1000 m, so aircraft, hill gen-sets and high-altitude trucks derate badly without boost), and MEP: since power scales with charge mass, boost translates almost linearly into torque. CI engines welcome boost without any knock limit; SI engines must buy it with lower compression ratio, richer mixture or intercooling to stay under the knock threshold.",
              "Compressors come in two families. Positive-displacement blowers - the Roots (two meshing lobes, no internal compression, 50-60 percent efficient, cheap and noisy), the vane type, and the screw or Lysholm (internal compression, about 70 percent, quiet) - deliver near-constant boost from idle, at the cost of a mechanical drive that eats 10-15 percent of brake output. Dynamic compressors - the centrifugal, with efficiency up to 75-80 percent - are compact and love high speed, but boost climbs with the square of speed, starving low rpm. The mechanical drive off the crankshaft is the supercharger's defining trait and its tax.",
              "Effects on the engine: power up 30-50 percent at unchanged rpm; higher peak pressures and temperatures that demand heavier pistons, better materials and oil-cooled crowns; and thermal efficiency roughly unchanged to slightly better, since added pumping work is offset by reduced relative friction at higher load. On the answer sheet, 'objects and effects of supercharging' wants both sides of the ledger - gains in power, MEP and altitude performance set against the costs in drive power, heat load, weight and complexity - and always the SI-versus-CI knock asymmetry.",
            ],
            bullets: [
              "Objects: more power per litre, altitude recovery, higher MEP and torque.",
              "CI takes boost freely; SI must manage knock with intercooling, lower CR or rich mixture.",
              "Positive displacement: Roots (no internal compression, 50-60%), vane, screw (about 70%).",
              "Centrifugal: up to 75-80% efficient, but boost rises with speed squared - weak at low rpm.",
              "Mechanical drive consumes 10-15% of brake power - the supercharger's tax.",
            ],
            table: {
              caption: "Supercharger types compared.",
              headers: ["Type", "Principle", "Efficiency", "Drive", "Best for"],
              rows: [
                ["Roots", "Meshing lobes move fixed volumes", "50-60%", "Belt off crankshaft", "Low-rpm boost, low cost"],
                ["Vane", "Sliding vanes compress internally", "55-65%", "Belt or gear", "Moderate boost"],
                ["Screw (Lysholm)", "Intermeshing screws compress internally", "about 70%", "Belt", "Quiet OEM boost"],
                ["Centrifugal", "Impeller imparts kinetic energy", "70-80%", "Belt or gear", "High-rpm power"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Naturally aspirated versus supercharged",
              caption: "Boost buys power density and altitude recovery; it bills drive power and heat load.",
              left: {
                heading: "Naturally aspirated",
                items: [
                  "Charge at ambient density",
                  "MEP capped by volumetric efficiency",
                  "Derates about 1% per 100 m altitude",
                  "Simple, cheap, no added heat load",
                  "Power per litre: the baseline",
                ],
              },
              right: {
                heading: "Supercharged",
                items: [
                  "Charge at 1.5-3x ambient density",
                  "MEP limited by structure and knock",
                  "Altitude performance recovered",
                  "Heat load and drive-power penalty",
                  "30-50% more power per litre",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Two lists and four blowers",
              body: "'Objects and effects of supercharging' is a stock long question. Answer in two lists - gains (power, MEP, altitude) and costs (drive power, heat, weight, SI knock management) - then name the blower types with their efficiencies.",
            },
            keyTerms: [
              { term: "Supercharging", definition: "Forcing intake charge into the cylinder at above-atmospheric density to raise the mass of fuel burned per cycle." },
              { term: "Roots blower", definition: "A positive-displacement supercharger of two meshing lobes with no internal compression, 50-60 percent efficient." },
              { term: "Boost pressure", definition: "The gauge pressure of the delivered charge above ambient, typically 0.5-2 bar in road engines." },
            ],
            examQuestions: [
              {
                q: "What is supercharging? Explain its objects and effects on engine performance, and describe the types of superchargers with their relative merits.",
                marks: 7,
                outline: [
                  "Definition and the density-to-power link.",
                  "Objects: power density, altitude recovery, MEP.",
                  "Effects: power +30-50%, thermal and mechanical loading, efficiency.",
                  "SI knock management versus CI freedom.",
                  "Positive-displacement types: Roots, vane, screw.",
                  "Centrifugal: efficiency and its speed-squared behaviour.",
                  "Close with the drive-power penalty (10-15% of BP).",
                ],
              },
              {
                q: "Why do CI engines accept higher boost levels than SI engines?",
                marks: 3,
              },
              {
                q: "Which supercharger has no internal compression, and what does that cost it?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Turbocharging and turbo lag control",
            body: [
              "A turbocharger couples a radial-inflow exhaust turbine to a centrifugal compressor on one shaft, spinning typically 100,000-250,000 rpm in bearings fed by engine oil and often cooled by water too. The engine's exhaust - about 30-35 percent of fuel energy, the largest single loss on the heat balance sheet - expands through the turbine, and the extracted work drives the compressor that packs the intake. That exchange is why turbocharging is called free compared with the belt-driven supercharger: the energy was already on its way out of the engine.",
              "The catch is response. At low engine speed exhaust energy is thin, so the shaft spins slowly and boost is weak - turbo lag, the half-second to two-second hesitation on hard throttle. Engineers attack it with lighter wheels, twin-scroll turbines that keep exhaust pulses separate, variable-geometry turbos (VGT) whose movable vanes behave like a small turbine at low flow and a large one at high flow, sequential twin-turbos, and electrically assisted shafts. A wastegate - a bypass valve around the turbine - protects against overboost by dumping exhaust once target pressure is reached; a blow-off valve protects the compressor against surge when the throttle slams shut.",
              "Matching picks the frame: the compressor must sit in its high-efficiency island across the engine's airflow range without crossing the surge line at low flow - exactly why VGT and two-stage diesels exist. Turbo-diesels dominate trucks and increasingly cars because boost multiplies BMEP (18-25 bar in road diesels) while excess air keeps the engine smoke-free. Petrol turbos trade compression ratio (down to 9-10) against boost to stay under knock, enabling the downsizing fashion: a 1.0-litre three-cylinder turbo replacing a 1.6-litre four, matching its power while beating its consumption.",
            ],
            bullets: [
              "Shaft: exhaust turbine plus centrifugal compressor, 100,000-250,000 rpm, oil bearings.",
              "Recovers exhaust energy (30-35% of fuel input) - hence BSFC improves 5-10%.",
              "Turbo lag: weak exhaust energy at low rpm; fought with VGT, twin-scroll, sequential, e-assist.",
              "Wastegate limits boost; blow-off valve stops compressor surge on throttle lift.",
              "Matching: compressor stays in its efficiency island, clear of the surge line.",
            ],
            table: {
              caption: "Turbocharging versus mechanical supercharging.",
              headers: ["Aspect", "Mechanical supercharger", "Turbocharger"],
              rows: [
                ["Drive", "Crankshaft belt or gear", "Exhaust turbine"],
                ["Response", "Instant from idle", "Lag 0.5-2 s without VGT"],
                ["Fuel economy", "Slightly worse (drive power)", "Better by 5-10% (free energy)"],
                ["Low-rpm boost", "Full", "Weak"],
                ["Heat and plumbing", "Simple", "Hot side, oil and water cooling"],
                ["Typical use", "Sporty petrol, aircraft", "Diesels, downsized petrol"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The turbocharger energy path",
              caption: "Exhaust energy in, dense intake out - with the intercooler waiting downstream.",
              stages: [
                { label: "Exhaust manifold", note: "30-35% of fuel energy available" },
                { label: "Turbine wheel", note: "extracts pulse energy" },
                { label: "Common shaft", note: "up to 250,000 rpm" },
                { label: "Compressor wheel", note: "packs the intake to 0.5-2 bar" },
                { label: "Intercooler and manifold", note: "density recovered (next section)" },
              ],
            },
            callout: {
              type: "exam",
              title: "One difference explains everything",
              body: "'Compare turbocharging and supercharging' is a permanent fixture. Anchor the answer in the drive - exhaust turbine versus crankshaft - and let everything else (economy, lag, complexity, heat) follow logically from that single difference.",
            },
            keyTerms: [
              { term: "Turbocharger", definition: "A compressor driven by an exhaust-gas turbine on a common shaft, recovering exhaust energy to raise intake density." },
              { term: "Turbo lag", definition: "The delay in boost while the turbine accelerates from low exhaust energy at low engine speed." },
              { term: "Wastegate", definition: "A valve bypassing exhaust around the turbine to cap boost pressure at the control target." },
            ],
            examQuestions: [
              {
                q: "Explain turbocharging with a schematic. Compare it with mechanical supercharging, and explain turbo lag and the devices used to control it.",
                marks: 7,
                outline: [
                  "Layout: turbine, shaft, compressor, intercooler.",
                  "Energy logic: recovery of the exhaust loss; BSFC gain of 5-10%.",
                  "Boost 0.5-2 bar; shaft speeds up to 250,000 rpm.",
                  "Comparison table versus the supercharger: drive, response, economy.",
                  "Turbo lag explained physically.",
                  "Remedies: VGT, twin-scroll, sequential, electric assist.",
                  "Wastegate and blow-off valve functions.",
                ],
              },
              {
                q: "State the function of the wastegate.",
                marks: 2,
              },
              {
                q: "Why do turbochargers suit diesel engines especially well?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Intercooling and charge-air cooling",
            body: [
              "Compression heats the charge: for air (gamma 1.4) boosted 2:1 from 300 K, a perfect compressor would already exit near 365 K, and a real 70-percent-efficient one near 394 K. Since density is pressure divided by temperature times the gas constant, every degree of that heat cancels part of the boost - and the hotter charge also detonates more readily, raises NOx and pushes exhaust temperature up. An intercooler (aftercooler) is a heat exchanger fitted between compressor and manifold whose only job is to give that temperature back before the charge reaches the valves.",
              "The gains compound. With effectiveness 0.75 against 300 K ambient, our 394 K charge leaves the cooler at about 324 K - a density gain of about 22 percent at the same pressure, which is 22 percent more air to burn fuel with. Knock margin returns, so an SI engine can raise boost or compression ratio; NOx falls with flame temperature; the exhaust runs cooler, relaxing turbine and valve materials; and BSFC improves a few percent. The costs: a pressure drop of 0.02-0.08 bar through the core, added volume that lengthens boost response, packaging, and condensation in the charge in humid climates.",
              "Two architectures. Air-to-air intercoolers mount ahead of the radiator and exchange charge heat directly with oncoming air - simple, 0.6-0.8 effective, standard on road vehicles. Air-to-water units pass the charge through a liquid loop to a remote heat exchanger - compact, mountable anywhere, and able to run below ambient when the loop holds chilled coolant; they suit cramped engine bays, marine installations and top-end competition. Effectiveness is defined as (T_in - T_out)/(T_in - T_coolant), and in modern diesels the same packaging often hosts the EGR cooler in a combined unit.",
            ],
            bullets: [
              "Compression heating: 2:1 boost from 300 K exits near 394 K at 70% compressor efficiency.",
              "Intercooling to 324 K restores about 22% density at constant pressure.",
              "Knock margin up (SI), NOx and exhaust temperature down, BSFC a few percent better.",
              "Costs: 0.02-0.08 bar pressure drop, added volume (slower response), packaging, condensation.",
              "Air-to-air (front mount, 0.6-0.8 effective) versus air-to-water (compact, can go sub-ambient).",
            ],
            codeExample: {
              language: "python",
              caption: "Compressor outlet temperature and the intercooler density gain.",
              code: `# Compressor outlet temperature and intercooler density gain
t1, pr, eta_c = 300.0, 2.0, 0.70      # K, absolute pressure ratio, efficiency
gamma = 1.4
effectiveness, t_cool = 0.75, 300.0   # intercooler effectiveness, coolant/air K

t_isen = t1 * pr ** ((gamma - 1) / gamma)
t2 = t1 + (t_isen - t1) / eta_c       # real compressor outlet temperature
t3 = t2 - effectiveness * (t2 - t_cool)  # after the intercooler

density_gain = t2 / t3 - 1            # same pressure: mass scales with 1/T
print(f"compressor out {t2:.0f} K -> after intercooler {t3:.0f} K")
print(f"density gain from cooling: {density_gain:.1%}")`,
            },
            diagram: {
              kind: "flow",
              title: "What the intercooler returns",
              caption: "Pressure from the compressor, density from the cooler - the two-step every boost numerical runs on.",
              steps: [
                { label: "Compressor exit: hot, dense charge", note: "near 394 K at 2:1 boost" },
                { label: "Intercooler core", note: "rejects heat to air or water loop" },
                { label: "Charge cools toward ambient", note: "down to about 324 K" },
                { label: "Density rises about 22%", note: "pressure unchanged" },
                { label: "Manifold admits more air mass", note: "more fuel can burn per cycle" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two steps, one line each",
              body: "The intercooler numerical is always the same two steps: compute T2 from pressure ratio and compressor efficiency, then apply effectiveness to get T3 and the density ratio T2/T3. Both formulas fit on one line - memorise them as a pair.",
            },
            keyTerms: [
              { term: "Intercooler", definition: "A heat exchanger between compressor and engine that cools the charged air to raise its density; also called an aftercooler." },
              { term: "Effectiveness", definition: "The fraction of the maximum possible temperature drop achieved: (T_in - T_out)/(T_in - T_coolant)." },
              { term: "Charge density", definition: "Mass of air per unit volume of the intake charge; the direct multiplier on the fuel that can be burned per cycle." },
            ],
            examQuestions: [
              {
                q: "What is intercooling? Derive its effect on charge density and engine performance, and compare air-to-air and air-to-water charge coolers with applications.",
                marks: 7,
                outline: [
                  "Why compression heats the charge: isentropic relation plus efficiency.",
                  "Quantify the density loss at 2:1 boost.",
                  "Effectiveness definition and worked numbers (394 K to 324 K, ~22% gain).",
                  "Engine effects: knock margin, NOx, exhaust temperature, BSFC.",
                  "Air-to-air: construction, effectiveness and use.",
                  "Air-to-water: construction, sub-ambient capability and use.",
                  "Costs: pressure drop, volume, condensation.",
                ],
              },
              {
                q: "An intercooler cools the charge from 400 K to 330 K at constant pressure. What is the percentage gain in charge mass per cycle?",
                marks: 3,
              },
              {
                q: "Why is an intercooler placed after the compressor rather than before it?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Variable valve timing and lift",
            body: [
              "A fixed camshaft is a compromise signed at the drawing board: valve events optimal at 3000 rpm are wrong at 800 and wrong again at 6000. Idle wants almost no overlap - otherwise exhaust leaks back into the intake and destabilises the burn; full speed wants late intake closing so momentum keeps filling the cylinder, plus generous overlap to scavenge; part load wants the pumping penalty gone. Variable valve timing (VVT) moves the events to suit the operating point: phasing the cam (rotating it relative to the crank by up to 40-60 crank degrees), switching between cam profiles, or varying lift continuously.",
              "The mechanisms stack by capability. Intake-only phasing - a hydraulic vane phaser on the intake sprocket - is the cheap, common fitment. Dual phasing adds the exhaust cam, enabling internal EGR and overlap tuning. Profile switching (Honda VTEC's famous pin-locked rocker) swaps a mild low-ramp profile for a wild high-lift one above a threshold rpm. Full variable lift (BMW Valvetronic, Fiat MultiAir electro-hydraulic) throttles the engine with the intake valve itself, deleting the throttle butterfly and its pumping loss. And the Miller-cycle trick - closing the intake valve very late (or very early) so effective compression ratio falls below the expansion ratio - is VVT deployed for efficiency.",
              "Benefits land on every sheet: torque fattened across the range (typically 5-10 percent where it was thin), stable idle, 3-8 percent better fuel economy from reduced pumping and better charge motion, lower NOx through internal EGR, and quicker catalyst light-off by running hot at cold start. Constraints are real: hydraulic phasers need oil pressure and warm oil, so they park at a locked position at start-up; switching mechanisms add weight and complexity; and camless electromagnetic systems, long promised, remain niche. VVT is now standard on essentially every new petrol engine and central to the Miller-cycle turbo engines of the last decade.",
            ],
            bullets: [
              "Cam phasing rotates the cam up to about 60 crank degrees relative to the crank.",
              "Dual phasing enables internal EGR and overlap control; intake-only is the budget option.",
              "Profile switching (VTEC): two profiles, pin-locked rockers, one threshold rpm.",
              "Continuous variable lift (Valvetronic, MultiAir) replaces the throttle - pumping loss deleted.",
              "Late or early IVC = Miller cycle: effective compression ratio below the expansion ratio.",
            ],
            table: {
              caption: "VVT strategies and what each buys.",
              headers: ["Strategy", "What varies", "Mechanism", "Payoff"],
              rows: [
                ["Intake phasing", "IVO and IVC together", "Hydraulic vane phaser", "Torque shaping at low cost"],
                ["Dual phasing", "Both cams", "Two phasers", "Overlap control plus internal EGR"],
                ["Profile switch", "Lift and duration (2 profiles)", "Pin-locked rockers", "Economy lobe plus power lobe"],
                ["Variable lift", "Lift continuously", "Intermediate lever / electro-hydraulic", "Throttle deleted, pumping saved"],
                ["Miller timing", "IVC very late or early", "Phaser plus high-CR design", "Expansion ratio above compression"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The VVT capability ladder",
              caption: "Each tier up adds hardware but buys back another piece of the ideal valve event.",
              tiers: [
                { label: "Fully variable lift + timing", note: "throttle-less, Miller-capable" },
                { label: "Cam profile switching", note: "VTEC-style high/low lobes" },
                { label: "Dual cam phasing", note: "intake + exhaust, internal EGR" },
                { label: "Intake cam phasing only", note: "the baseline OEM fitment" },
                { label: "Fixed cam timing", note: "the compromise VVT escapes" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the cycle",
              body: "When explaining late intake valve closing, always name the Miller (Atkinson) cycle: the trapped charge is compressed less than the burned gas expands, so the engine keeps the expansion work while dodging the knock limit of a high geometric compression ratio - the trick behind modern turbo-petrol efficiency.",
            },
            keyTerms: [
              { term: "Cam phasing", definition: "Rotating a camshaft relative to the crankshaft by a hydraulic actuator to shift all its valve events earlier or later." },
              { term: "Variable valve lift", definition: "Changing valve lift height, and often duration, continuously - allowing throttle-less load control." },
              { term: "Miller cycle", definition: "A valve-timing strategy in which late (or early) intake closing makes the effective compression ratio smaller than the expansion ratio." },
            ],
            examQuestions: [
              {
                q: "What is variable valve timing? Explain cam phasing, profile switching and variable lift mechanisms, and discuss the benefits including the Miller-cycle effect of late intake valve closing.",
                marks: 7,
                outline: [
                  "Why fixed timing is a compromise (idle, mid-range and top-speed needs).",
                  "Cam phasing mechanism and its range.",
                  "Dual phasing and internal EGR.",
                  "Profile switching (VTEC) mechanism.",
                  "Continuous lift (Valvetronic, MultiAir) and throttle deletion.",
                  "Benefits: torque, 3-8% economy, NOx, idle quality.",
                  "Miller cycle: effective CR below expansion ratio and why that pays.",
                ],
              },
              {
                q: "Why does large valve overlap hurt idle quality?",
                marks: 3,
              },
              {
                q: "Name two production VVT mechanisms and state what each varies.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "HCCI and hybrid electric vehicles",
            body: [
              "Homogeneous charge compression ignition (HCCI) tries to marry the two engine families: prepare a homogeneous, very lean petrol-air mixture (lambda 2-4, unthrottled), then let compression heat - not a spark - ignite it everywhere at once. With no flame front there is no local high-temperature zone: bulk temperatures stay below the NOx threshold, so NOx is nearly eliminated, and with a premixed charge there is no diffusion-flame soot, so particulate matter vanishes. Efficiency approaches diesel levels thanks to the lean mixture, no throttle and a compression ratio free of the SI knock limit - the charge is too lean to knock.",
              "The catch is control. Nothing times the ignition: autoignition emerges from the whole thermodynamic history of the charge - intake temperature, residual fraction, compression ratio, injection timing, even wall deposits - so holding combustion at the right crank angle as load and weather change is a control problem of the hardest kind. High load brings violent heat-release rates that shake the engine; low load risks misfire; cold start needs help because the charge is too cold to autoignite; and the window between these limits is narrow. Production answers run dual-mode - SI at cold, low and high load, HCCI in the cruising band - or use a spark to herd the autoignition, as in Mazda's spark-controlled compression ignition (SPCCI).",
              "Hybridisation attacks efficiency from the other side: keep the engine at its best island and electrify everything else. Series hybrids run the engine as a generator, fully decoupled from the road; parallel hybrids add an electric machine on the shaft so both can drive the wheels; series-parallel (power-split) devices, like the planetary gear of the Prius, blend both paths. Full hybrids stop the engine at idle, recover braking energy into the battery through regenerative braking, and motor away silently; mild hybrids assist and restart but cannot drive alone. City fuel savings of 30-50 percent come mostly from idle elimination and load levelling - not from any change to the engine itself, which is why hybridisation and HCCI are complementary, not competing, trends.",
            ],
            bullets: [
              "HCCI: homogeneous, lambda 2-4 lean, autoignition by compression - no spark, no throttle.",
              "Emissions win: bulk temperature stays under the NOx threshold; no diffusion soot.",
              "Control nightmare: ignition timing emerges from temperature history, not from a trigger.",
              "Dual-mode and spark-assisted (SPCCI) are the production workarounds.",
              "Hybrids: series, parallel and power-split; stop-start, regenerative braking, load levelling.",
            ],
            table: {
              caption: "Hybrid architectures compared.",
              headers: ["Architecture", "Engine role", "Strength", "Drawback", "Example"],
              rows: [
                ["Series", "Generator only, decoupled", "Engine always at best BSFC", "Double energy conversion", "Nissan e-Power"],
                ["Parallel", "Drives wheels plus motor assist", "Simple add-on, highway efficient", "Engine tied to road load", "Honda IMA"],
                ["Power-split", "Splits power via planetary gear", "Both paths near optimal", "Complex control", "Toyota Prius"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The combustion landscape",
              caption: "Every engine is a point on two axes: how the charge is mixed and how it is ignited.",
              axes: { x: "Charge: homogeneous -> stratified", y: "Ignition: spark -> compression" },
              quadrants: [
                { label: "Conventional SI", note: "homogeneous + spark, throttled" },
                { label: "GDI stratified", note: "stratified + spark, lean at part load" },
                { label: "HCCI", note: "homogeneous + compression ignition, very lean" },
                { label: "Diesel CI", note: "heterogeneous + compression ignition" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the power flow",
              body: "The hybrid 7-marker wants block diagrams with arrows: engine, motor/generator, battery and wheels for series, parallel and power-split - and mark where power flows at cruise, at full acceleration and during braking. The arrows are the answer.",
            },
            keyTerms: [
              { term: "HCCI", definition: "Homogeneous charge compression ignition: a very lean premixed charge ignited by compression heat, with near-zero NOx and soot." },
              { term: "Power-split hybrid", definition: "A series-parallel architecture using a planetary gear set to blend engine and motor power paths." },
              { term: "Regenerative braking", definition: "Recovering vehicle kinetic energy as battery charge through the motor acting as a generator during deceleration." },
            ],
            examQuestions: [
              {
                q: "What is HCCI? Explain its principle, why it promises diesel-like efficiency with near-zero NOx and soot, the control problems that limit it, and how dual-mode and spark-assisted engines address those limits.",
                marks: 7,
                outline: [
                  "Definition and mixture preparation (lambda 2-4, unthrottled).",
                  "Autoignition without a spark; no flame front, no hot local zone.",
                  "Why NOx and PM nearly vanish (bulk temperature ceiling).",
                  "Why efficiency approaches diesel (lean, unthrottled, knock-free CR).",
                  "Control challenge: SOC emerges from temperature history, not a trigger.",
                  "Load-range and cold-start limits; pressure-rise rate at high load.",
                  "Dual-mode operation and SPCCI as production answers.",
                ],
              },
              {
                q: "Distinguish series and parallel hybrid architectures with one-line diagrams.",
                marks: 3,
              },
              {
                q: "What is regenerative braking and roughly how efficient is it?",
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
        "RGPV ME-501 papers lean heavily on numericals and diagrams: performance parameters and heat balance carry the marks, while valve timing, block diagrams and the comparison questions supply the dependable long questions. Allocate time in roughly the ratios below and keep one full numerical practice slot per unit.",
      ],
      weightedTopics: [
        { topic: "Performance numericals: IP, BP, FP, mechanical efficiency", weight: "10-14 marks", note: "One full numerical nearly every session; practise with strict unit discipline." },
        { topic: "Air-standard cycles: Otto/Diesel/Dual efficiency and rankings", weight: "8-12 marks", note: "Derivations plus both ranking rules; numericals on r and cutoff ratio." },
        { topic: "Knock and detonation: causes, effects, control", weight: "6-10 marks", note: "7-marker with the p-theta sketch; include the SI-versus-CI knock contrast." },
        { topic: "MPFI and CRDI block diagrams", weight: "6-10 marks", note: "Name every sensor and actuator; mention pilot injection and the lambda loop." },
        { topic: "Supercharging, turbocharging and intercooling", weight: "7-10 marks", note: "Blower types table, turbo-versus-super comparison, intercooler density numerical." },
        { topic: "Heat balance sheet and BSFC", weight: "7-10 marks", note: "Guaranteed numerical when efficiencies are not asked; must close to 100%." },
        { topic: "Valve timing and port timing diagrams", weight: "5-7 marks", note: "Labelled circle with typical values; asked in most sessions." },
        { topic: "Emissions, catalytic converter and EGR", weight: "5-8 marks", note: "Pollutant sources table plus three-way catalyst construction." },
        { topic: "Morse test and friction power", weight: "4-7 marks", note: "Procedure plus a drops calculation; state the assumptions." },
        { topic: "Two vs four stroke, scavenging, alternative fuels", weight: "4-8 marks", note: "Comparison table plus fuel properties; feeds the short-question bank." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week at two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - fundamentals and cycles", tasks: ["SI vs CI and two vs four stroke comparison tables", "Valve and port timing diagrams with typical values", "Otto, Diesel, Dual: derive efficiencies and both ranking rules"] },
        { week: "Week 2", focus: "Unit II - combustion and fuels", tasks: ["Four SI stages and flame-speed factors with the p-theta trace", "Knock mechanism, effects, controls; octane and cetane definitions", "Alternative fuel properties table (CV, octane, storage)"] },
        { week: "Week 3", focus: "Unit III - fuel supply and ignition", tasks: ["A/F requirement graph and carburettor circuits sketch", "MPFI block diagram with every sensor; speed-density pulse calc", "CRDI layout and pilot injection; ignition systems evolution"] },
        { week: "Week 4", focus: "Unit IV - performance and testing", tasks: ["Full IP/BP/FP/eta_m numericals (at least five problems)", "Heat balance sheet numericals that close to 100%", "Morse and Willans line problems; emission control chain"] },
        { week: "Week 5", focus: "Unit V - supercharging and trends", tasks: ["Supercharger types and effects; turbo versus super table", "Intercooler density numericals (T2, effectiveness, density gain)", "VVT mechanisms, Miller cycle; HCCI and hybrid block diagrams"] },
        { week: "Week 6", focus: "Full revision and past papers", tasks: ["Two full past papers under exam timing", "Redraw all 25 diagrams from memory against the section list", "Final pass on the slips list and your weakest numericals"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours",
      body: [
        "The final day is for consolidation, not new material. Everything below is designed to be reproducible from memory in the exam hall: formulas, values, diagrams and the traps that cost marks.",
      ],
      bullets: [
        "Rewrite the formula sheet from memory: IP, BP, all six efficiencies, BSFC, the heat balance streams, Morse drops.",
        "Redraw from memory: the valve timing circle, Otto/Diesel/Dual P-v traces, the Morse loop, MPFI and CRDI block diagrams, the turbo plus intercooler layout.",
        "Recite the comparison tables once each: SI vs CI, two vs four stroke, Otto vs Diesel vs Dual (both rankings), octane vs cetane, super vs turbo, series vs parallel hybrid.",
        "Re-read only the 7-mark outlines - they are compressed answers to the paper's most likely long questions.",
        "Skim the common slips list one last time; six traps are worth six easy marks.",
        "Stop studying by 11 pm and sleep at least seven hours - numerical accuracy decays faster than memory.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Numericals first: state the formula, substitute with units beside each number, box the answer. IP/BP/efficiency questions are the fastest 14 marks on the paper.",
        "Every diagram earns by its labels: the valve timing circle needs TDC/BDC and angle values; MPFI and CRDI block diagrams need every sensor named.",
        "Define before you draw or derive - definition lines are marked separately from the working in RGPV schemes.",
        "Time-box: 2-3 mark shorts in 4-5 minutes, 7-mark longs in 14-16 minutes, and hold the last 8 minutes for unit checks and closing the heat balance to 100%.",
        "When a comparison is asked (SI vs CI, two vs four stroke, Otto vs Diesel vs Dual, octane vs cetane, super vs turbo), answer as a table with the same point order for both sides.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Plugging BP into the indicated thermal efficiency (or IP into brake thermal) - the efficiency pair must match the power in the numerator.",
        "Mixing rpm and rps: n in IP = p_mi L A n K is power strokes per SECOND (N/120 for four-stroke), not rpm.",
        "Using the Otto formula 1 - 1/r^(gamma-1) on a Diesel cycle question - the cutoff-ratio bracket changes the answer.",
        "Reversing the rankings: same compression ratio gives Otto > Dual > Diesel, but same peak pressure and heat input reverses the order.",
        "Swapping octane and cetane roles - octane resists self-ignition (SI engines), cetane invites it (CI engines).",
        "Morse test: writing that the brake power drop equals friction power - it equals the INDICATED power of the cut cylinder.",
      ],
    },
  ],
};
