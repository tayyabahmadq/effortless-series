/**
 * Academics - RGPV ME 6th-semester subject: ME-601 Thermal Engineering
 * and Gas Dynamics.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or python numerical, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me601: AcademicSubject = {
  id: "me-601",
  code: "ME-601",
  title: "Thermal Engineering and Gas Dynamics",
  semester: "VI Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to applied thermodynamics for mechanical students: gas and steam power cycles, refrigeration and air conditioning, the psychrometric chart, compressible flow through nozzles and shocks, and the heat exchangers, boilers and steam plant equipment that tie the whole subject together.",
  description:
    "Five units walk from the air-standard Otto, Diesel, Dual and Brayton cycles with their regeneration, reheat and intercooling refinements, through the Rankine steam cycle with reheat and regeneration and the vapour compression and absorption refrigeration systems, into psychrometry, the chart processes and summer and winter air conditioning with cooling load estimation, then into gas dynamics - Mach number, stagnation properties, isentropic nozzle flow, choking and normal shocks - and finally heat exchanger design by LMTD and NTU, fire-tube and water-tube boilers with their mountings, steam turbines, condensers and cooling towers. Every section pairs theory with a redrawable diagram, a worked python numerical or a state-point table, and the questions RGPV actually asks.",
  accentColor: "#ef4444",
  emoji: "TE",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Gas Power Cycles",
      summary:
        "The ideal cycles behind every gas engine and turbine: air-standard assumptions, the Otto, Diesel and Dual cycles with their efficiency rankings on two different bases, the Brayton cycle for gas turbines, and the regeneration, reheat and intercooling refinements that push it toward the Ericsson ideal.",
      chapter: {
        number: "01",
        title: "Gas Power Cycles",
        intro:
          "Unit I idealizes gas-breathing machinery into closed loops of air: the Otto, Diesel and Dual cycles that stand for spark and compression ignition engines, the Brayton cycle that stands for the gas turbine, and the staged improvements - regeneration, reheat, intercooling - that lift Brayton efficiency step by step.",
        inOneBreath:
          "Air-standard analysis closes the loop with a fixed mass of perfect air, replaces combustion with heat addition and exhaust with heat rejection; the Otto cycle adds and rejects heat at constant volume and earns eta = 1 - 1/r^(gamma-1); the Diesel cycle adds heat at constant pressure through cut-off ratio rc and loses to Otto at the same compression ratio; the Dual cycle interpolates with a split addition; at the same peak pressure the ranking reverses to Diesel over Dual over Otto; the Brayton cycle adds and rejects heat at constant pressure with eta = 1 - 1/rp^((gamma-1)/gamma), suffers a heavy back work ratio, and gains from regeneration when T4 exceeds T2, from intercooling and reheat which pay fully only when combined with regeneration.",
        sections: [
          {
            number: "1.1",
            title: "Air-standard analysis and the Otto cycle",
            body: [
              "A real engine cycle resists clean analysis: the working fluid changes composition during combustion, valves open and close, heat leaks through cylinder walls, and burning takes finite time. The air-standard cycle strips all of this away with four assumptions: a fixed mass of air runs a closed loop; air is a calorically perfect ideal gas with constant specific heats; combustion is replaced by heat transfer from an external reservoir and exhaust by heat rejection to one; and every process is internally reversible. The result is an idealization against which real engines are measured, and its efficiency is an upper bound.",
              "The Otto cycle models the spark-ignition engine with four processes: 1-2 isentropic compression through the compression ratio r, 2-3 heat addition at constant volume, 3-4 isentropic expansion back to the starting volume, and 4-1 heat rejection at constant volume. Because both heat transfers occur at constant volume, the isentropic relations give T2/T1 = T3/T4 = r^(gamma-1), and the heat ratio q_out/q_in collapses to T1/T2. The efficiency is therefore eta = 1 - 1/r^(gamma-1), independent of how much heat is added - only the compression ratio and the ratio of specific heats matter.",
              "Numbers make the lesson stick. With r = 8 and gamma = 1.4, eta = 56.5%; raising r to 10 gives 60.2%, but the curve flattens while knock limits petrol engines to about r = 10-12. The mean effective pressure, MEP = net work per cycle divided by displacement volume, is the constant pressure that would deliver the same net work in a single stroke, and it is the honest basis for comparing engines of different sizes. Real spark-ignition engines deliver 25-35% against this 56% ideal because of heat transfer, finite-time combustion, flow losses and the falling ratio of specific heats at high temperature.",
            ],
            bullets: [
              "Air-standard assumptions: closed loop of a fixed air mass, perfect ideal gas with constant specific heats, heat addition and rejection replace combustion and exhaust, all processes internally reversible.",
              "Otto processes: 1-2 isentropic compression, 2-3 constant-volume heat addition, 3-4 isentropic expansion, 4-1 constant-volume heat rejection.",
              "eta_Otto = 1 - 1/r^(gamma-1): independent of the heat added; only the compression ratio and gamma appear.",
              "r = 8, gamma = 1.4 gives 56.5%; r = 10 gives 60.2% - knock, not thermodynamics, stops the climb.",
              "MEP = net work per cycle / swept volume: the comparison yardstick for engines of different sizes.",
            ],
            table: {
              caption: "Otto cycle processes and their governing relations.",
              headers: ["Process", "Nature", "Relation", "Energy",
              ],
              rows: [
                ["1-2", "Isentropic compression", "T v^(gamma-1) = const, p v^gamma = const", "w = cv(T1 - T2)"],
                ["2-3", "Constant-volume heat addition", "v = const (the spark)", "q_in = cv(T3 - T2)"],
                ["3-4", "Isentropic expansion", "T v^(gamma-1) = const", "w = cv(T3 - T4)"],
                ["4-1", "Constant-volume heat rejection", "v = const (the exhaust)", "q_out = cv(T4 - T1)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The Otto cycle as a loop of four processes",
              caption:
                "Walk the loop in this order on both PV and T-s diagrams - examiners check the arrows, not just the shapes.",
              steps: [
                { label: "1-2 Isentropic compression", note: "volume falls r times; T and p rise" },
                { label: "2-3 Constant-volume heat addition", note: "stands in for the spark" },
                { label: "3-4 Isentropic expansion", note: "the work stroke" },
                { label: "4-1 Constant-volume heat rejection", note: "stands in for exhaust" },
                { label: "Back to state 1", note: "eta depends only on r and gamma" },
              ],
            },
            callout: {
              type: "exam",
              title: "Derivation discipline",
              body: "Before any algebra, write the four processes with their relations and draw the PV and T-s diagrams with arrows. Then substitute T2 = T1 r^(gamma-1) and T4 = T3 / r^(gamma-1) explicitly - most lost marks come from using T3/T4 = r^(gamma-1) in the wrong direction. Finish with the substitution step: eta = 1 - q_out/q_in = 1 - cv T1 (T4/T1 - 1) / (cv T2 (T3/T2 - 1)) = 1 - T1/T2.",
            },
            keyTerms: [
              { term: "Air-standard cycle", definition: "An idealized closed cycle in which a fixed mass of perfect air replaces the real engine's working fluid and its combustion." },
              { term: "Compression ratio r", definition: "The ratio of cylinder volume at bottom dead centre to volume at top dead centre; the single lever on Otto efficiency." },
              { term: "Mean effective pressure", definition: "Net work per cycle divided by displacement volume - a hypothetical constant pressure doing the same work in one stroke." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of air-standard analysis and derive the efficiency of the Otto cycle in terms of the compression ratio. Evaluate the efficiency and MEP for r = 8, gamma = 1.4, T1 = 300 K and q_in = 1800 kJ/kg.",
                marks: 7,
                outline: [
                  "List the four air-standard assumptions.",
                  "Draw the PV and T-s diagrams with process arrows.",
                  "Write the four processes and their isentropic relations.",
                  "Show q_in = cv(T3 - T2) and q_out = cv(T4 - T1).",
                  "Use T2/T1 = T3/T4 = r^(gamma-1) to reduce eta = 1 - q_out/q_in to 1 - 1/r^(gamma-1).",
                  "Substitute: eta = 1 - 1/8^0.4 = 0.565.",
                  "Compute T2 = 300 x 8^0.4 = 685 K, T3 = 685 + 1800/0.718 = 3190 K, T4 = T3/8^0.4, net work = eta x q_in = 1017 kJ/kg, and MEP = w_net/(v1 - v2) with v1 = R T1/p1.",
                ],
              },
              {
                q: "Define mean effective pressure and explain why it is the fair basis for comparing engines of different sizes.",
                marks: 2,
              },
              {
                q: "An Otto cycle on air (gamma = 1.4) has a compression ratio of 10. Find the air-standard efficiency and the percentage gain over r = 8.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "The Diesel cycle and the cut-off ratio",
            body: [
              "The Diesel cycle idealizes the compression-ignition engine. Air alone is compressed through r = 14 to 22, hot enough to self-ignite injected fuel; because injection continues while the piston begins to retreat, heat addition is modelled at constant pressure rather than constant volume. The loop is 1-2 isentropic compression, 2-3 constant-pressure heat addition, 3-4 isentropic expansion and 4-1 constant-volume heat rejection. The cut-off ratio rc = v3/v2 measures how long injection lasts; real diesels cut off around rc = 1.5 to 3.",
              "Because the isentropic expansion now starts at v3 rather than v2, T4 = T3 (rc/r)^(gamma-1). Working the heat ratio through gives eta = 1 - (1/r^(gamma-1)) x (rc^gamma - 1)/(gamma (rc - 1)). The bracketed factor exceeds one whenever rc exceeds one, so at the same compression ratio the Diesel cycle always sits below the Otto cycle: stretching heat addition into the expansion stroke lowers the mean temperature at which heat is received. As rc approaches unity the bracket approaches one and the Diesel collapses onto the Otto cycle.",
              "Numbers fix the scale. At r = 18, gamma = 1.4, the rc = 1 limit gives eta = 68.5%; rc = 2 gives 63.2% and rc = 3 gives 57.7%. The diesel accepts this penalty because it can: its compression ratio is roughly double the knock-limited petrol value, so it still wins overall - which is why trucks and gensets run compression ignition. The Dual cycle of the next section splits heat addition between constant volume and constant pressure precisely to model engines that sit between the two philosophies.",
            ],
            bullets: [
              "Diesel processes: 1-2 isentropic compression, 2-3 constant-pressure heat addition, 3-4 isentropic expansion, 4-1 constant-volume rejection.",
              "Cut-off ratio rc = v3/v2: the fraction of the stroke during which fuel is injected; typical 1.5 to 3.",
              "eta_Diesel = 1 - (1/r^(gamma-1)) x (rc^gamma - 1)/(gamma (rc - 1)); the bracket is greater than 1, so Diesel trails Otto at the same r.",
              "rc -> 1 returns the Otto cycle; larger rc trades efficiency for work per cycle at fixed r.",
              "At r = 18: eta falls from 68.5% (rc = 1) to 57.7% (rc = 3) - yet the high r still beats the knock-limited petrol engine.",
            ],
            codeExample: {
              language: "python",
              caption: "Sweeping the cut-off ratio at r = 18: efficiency falls, work per cycle rises",
              code: `# Air-standard Diesel cycle: sweep the cut-off ratio at fixed r.
gamma, r = 1.4, 18.0
T1, P1, R = 300.0, 100.0, 0.287     # K, kPa, kJ/kg-K
cp, cv = 1.005, 0.718               # kJ/kg-K

def diesel(rc):
    T2 = T1 * r ** (gamma - 1)          # isentropic compression
    T3 = T2 * rc                        # constant-pressure addition
    T4 = T3 * (rc / r) ** (gamma - 1)   # expansion ratio is r/rc, not r
    q_in  = cp * (T3 - T2)
    q_out = cv * (T4 - T1)
    w = q_in - q_out
    v1 = R * T1 / P1
    mep = w / (v1 * (1 - 1 / r))
    return T3, q_in, q_out, w, mep

eta_otto = 1 - 1 / r ** (gamma - 1)
print("Otto limit at rc = 1:", round(eta_otto * 100, 1), "percent")
print("  rc   T3(K)  q_in  q_out  w_net  mep(kPa)  eta(%)")
for rc in (1.2, 1.5, 2.0, 2.5, 3.0):
    T3, qi, qo, w, mep = diesel(rc)
    print(f"{rc:4.1f} {T3:7.0f} {qi:6.0f} {qo:6.0f} {w:6.0f} {mep:9.0f} {100 * (1 - qo / qi):8.1f}")
`,
            },
            diagram: {
              kind: "flow",
              title: "The Diesel cycle: heat added while the piston moves",
              caption:
                "The one process that changes from Otto is 2-3 - pressure stays constant while volume grows to the cut-off point.",
              steps: [
                { label: "1-2 Isentropic compression", note: "air alone, r = 14 to 22" },
                { label: "2-3 Constant-pressure heat addition", note: "fuel injected as the piston retreats" },
                { label: "3-4 Isentropic expansion", note: "expansion ratio r/rc" },
                { label: "4-1 Constant-volume heat rejection", note: "valve opens at bottom dead centre" },
                { label: "Back to state 1", note: "rc = 1 recovers the Otto cycle" },
              ],
            },
            callout: {
              type: "warning",
              title: "The expansion-ratio trap",
              body: "The most common numerical slip in Diesel problems is writing T4 = T3 / r^(gamma-1). The expansion starts at v3, not v2: the correct relation is T4 = T3 (rc/r)^(gamma-1). Write v3 = rc x v2 on your diagram before touching the temperatures.",
            },
            keyTerms: [
              { term: "Cut-off ratio rc", definition: "v3/v2 - the ratio of cylinder volume at the end of heat addition to volume at the start; the Diesel cycle's second parameter." },
              { term: "Constant-pressure heat addition", definition: "The Diesel idealization of fuel burning while the piston recedes, so pressure is held by matching heat release to expansion." },
              { term: "Dual cycle", definition: "The intermediate cycle with heat addition split between constant-volume and constant-pressure portions." },
            ],
            examQuestions: [
              {
                q: "Describe the air-standard Diesel cycle with PV and T-s diagrams, derive its efficiency in terms of r and the cut-off ratio rc, and evaluate it for r = 18, rc = 2, gamma = 1.4.",
                marks: 7,
                outline: [
                  "Draw PV and T-s diagrams, labelling the constant-pressure heat addition 2-3.",
                  "Define r and rc; write the four processes.",
                  "T2 = T1 r^(gamma-1); T3 = T2 rc; T4 = T3 (rc/r)^(gamma-1).",
                  "q_in = cp(T3 - T2), q_out = cv(T4 - T1).",
                  "Reduce eta = 1 - q_out/q_in to 1 - (1/r^(gamma-1)) (rc^gamma - 1)/(gamma(rc - 1)).",
                  "Show the bracket exceeds 1 for rc > 1, so Diesel sits below Otto at the same r.",
                  "Substitute: 1/18^0.4 = 0.3147, bracket = (2^1.4 - 1)/1.4 = 1.171, eta = 1 - 0.368 = 63.2%.",
                ],
              },
              {
                q: "Define cut-off ratio. What happens to the Diesel cycle as the cut-off ratio approaches unity?",
                marks: 2,
              },
              {
                q: "Why can a compression-ignition engine run a compression ratio of 18 while a petrol engine cannot exceed about 10, and what does this buy in efficiency?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "The Dual cycle and the comparison question",
            body: [
              "The Dual cycle, or mixed cycle, splits heat addition into a constant-volume part 2-3 followed by a constant-pressure part 3-4: heat first jumps the pressure to p3 = beta p2, then holds that pressure while the piston moves. Its efficiency carries two parameters, the pressure ratio beta and the cut-off ratio rc, and it interpolates between the two classic cycles: beta large and rc near one approaches Otto; beta one and rc large approaches Diesel. Modern high-speed diesels with pilot injection genuinely follow this split, which is why the Dual cycle is not merely academic.",
              "Comparison questions come in two flavours, and the basis decides the answer. At the same compression ratio with the same heat input, the ranking is Otto over Dual over Diesel: constant-volume addition reaches the highest peak temperature, so heat is received at the highest mean temperature, exactly the Carnot intuition. At the same peak pressure with the same heat input, the ranking reverses to Diesel over Dual over Otto: the diesel can reach the specified peak pressure with a much higher compression ratio, so its expansion leg is far longer and the extra expansion more than repays the slower heat addition.",
              "The exam discipline is to state the basis before writing any ranking. Sketch the three cycles on one T-s diagram for each basis - at equal r the three loops share states 1 and 2, while at equal peak pressure the diesel loop is visibly taller and thinner, with its heat addition hugging lower temperatures but its expansion reaching much further. Two clean half-page sketches, each with the ranking written beside it, are worth more than a page of prose, and they are what the examiner scans for first.",
            ],
            bullets: [
              "Dual processes: 1-2 isentropic compression, 2-3 constant-volume heat addition (pressure ratio beta), 3-4 constant-pressure addition (cut-off rc), 4-5 isentropic expansion, 5-1 constant-volume rejection.",
              "Same compression ratio, same heat input: Otto > Dual > Diesel - highest mean temperature of heat addition wins.",
              "Same peak pressure, same heat input: Diesel > Dual > Otto - the diesel reaches that peak pressure with a much larger r, gaining expansion.",
              "Same peak pressure and peak temperature: Diesel > Dual > Otto, the third standard basis.",
              "State the comparison basis first; the ranking flips between the two common bases.",
            ],
            table: {
              caption: "Efficiency rankings of the three air-standard cycles - basis is everything.",
              headers: ["Comparison basis", "Ranking", "Reason"],
              rows: [
                ["Same compression ratio, same heat input", "Otto > Dual > Diesel", "Constant-volume addition gives the highest peak temperature and mean temperature of heat addition."],
                ["Same peak pressure, same heat input", "Diesel > Dual > Otto", "The diesel reaches the given peak pressure with a higher compression ratio, so its expansion ratio dominates."],
                ["Same peak pressure and peak temperature", "Diesel > Dual > Otto", "Longer expansion at comparable temperatures; the same argument in sharper form."],
              ],
            },
            diagram: {
              kind: "compare",
              title: "The same two engines, two verdicts",
              caption:
                "Write the basis above each ranking - the examiner awards the comparison marks for the correct basis, not the names.",
              left: {
                heading: "Same compression ratio",
                items: [
                  "All three loops share states 1 and 2",
                  "Otto peaks highest on the T-s diagram",
                  "Ranking: Otto > Dual > Diesel",
                  "Driver: mean temperature of heat addition",
                  "Classic SI-engine-friendly basis",
                ],
              },
              right: {
                heading: "Same peak pressure",
                items: [
                  "All three loops share state 1 and peak pressure",
                  "Diesel runs a far larger compression ratio",
                  "Ranking: Diesel > Dual > Otto",
                  "Driver: much longer expansion ratio",
                  "Classic CI-engine-friendly basis",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The two sketches that answer every comparison question",
              body: "Draw two superposed T-s diagrams: one with all cycles starting at the same 1 and 2 (same r), one with all cycles touching the same peak pressure line. Label each with its ranking. Then add one sentence of Carnot reasoning per sketch. This combination reliably collects full marks on the near-annual comparison question.",
            },
            keyTerms: [
              { term: "Dual cycle", definition: "The mixed cycle with heat addition split between constant-volume and constant-pressure segments." },
              { term: "Pressure ratio beta", definition: "p3/p2, the pressure rise during the constant-volume part of Dual-cycle heat addition." },
              { term: "Mean temperature of heat addition", definition: "The equivalent constant temperature at which the cycle's heat input could be received; raising it raises efficiency, the Carnot logic behind every ranking." },
            ],
            examQuestions: [
              {
                q: "Compare the Otto, Diesel and Dual air-standard cycles for the same compression ratio and the same heat input, and again for the same peak pressure and same heat input. Justify each ranking with T-s diagrams.",
                marks: 7,
                outline: [
                  "Draw the three cycles superposed on one T-s diagram sharing states 1 and 2 (same r).",
                  "Note Otto reaches the highest T3 for the same q_in; mean temperature of addition is highest.",
                  "Ranking at same r: Otto > Dual > Diesel, by Carnot reasoning on mean heat-addition temperature.",
                  "Draw the second diagram with all cycles at the same peak pressure.",
                  "Note the diesel attains that pressure with a much higher compression ratio.",
                  "Ranking at same peak pressure: Diesel > Dual > Otto, the longer expansion dominating.",
                  "Conclude: the verdict depends on the basis - state it before ranking.",
                ],
              },
              {
                q: "At the same compression ratio, which of Otto, Diesel and Dual is most efficient, and why?",
                marks: 2,
              },
              {
                q: "Sketch the Dual cycle on T-s coordinates and label the constant-volume and constant-pressure portions of heat addition.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "The Brayton cycle and the gas turbine",
            body: [
              "The Brayton cycle is the steady-flow counterpart of Otto: the gas turbine plant's compressor, combustor and turbine trace two isentropes joined by two constant-pressure heat transfers. Air enters at 1, is compressed to 2 through pressure ratio rp, burns at nearly constant pressure to 3, expands through the turbine to 4, and exhausts; closing the open loop with a cooler makes it a cycle for analysis. The efficiency of the ideal cycle is eta = 1 - 1/rp^((gamma-1)/gamma), the exact steady-flow twin of the Otto formula with rp^(gamma) playing the volume-ratio role.",
              "Gas turbines live with a brutal back work ratio: at rp = 8 between 300 K and 1400 K, the compressor absorbs about 244 kW per kg/s while the turbine delivers 630 - roughly 40% of the turbine output runs the compressor, against under 5% for the Rankine pump of Unit II. Specific work w = cp[(T3 - T4) - (T2 - T1)] is therefore as important as efficiency, and it peaks at an intermediate pressure ratio: differentiating shows the maximum occurs when T2 = T4 = sqrt(T1 T3), giving rp_opt = (T3/T1)^(gamma/(2(gamma-1))) - about 14.8 for 300 K and 1400 K.",
              "Regeneration attacks the exhaust loss. When turbine exhaust at T4 is hotter than compressor delivery at T2, a regenerator can preheat combustion air with thrown-away heat, cutting fuel for the same turbine inlet temperature. The ideal regenerative efficiency is eta = 1 - (T1/T3) rp^((gamma-1)/gamma), and it pays most at low pressure ratios: at rp = 8 with 300/1400 K it lifts efficiency from 44.8% to about 61%. But once rp is so high that T2 exceeds T4, the regenerator is idle - the built-in ceiling on the trick, which the next section's intercooling and reheat push back.",
            ],
            bullets: [
              "Brayton processes: 1-2 isentropic compression, 2-3 constant-pressure heat addition (combustor), 3-4 isentropic turbine expansion, 4-1 constant-pressure heat rejection (exhaust plus a notional cooler).",
              "eta_Brayton = 1 - 1/rp^((gamma-1)/gamma); for air this is 1 - 1/rp^0.286.",
              "Back work ratio 40-60% of turbine output - the defining burden of gas turbine plants.",
              "Maximum specific work at T2 = T4 = sqrt(T1 T3), i.e. rp_opt = (T3/T1)^(gamma/(2(gamma-1))).",
              "Regeneration works only while T4 > T2: eta_regen = 1 - (T1/T3) rp^((gamma-1)/gamma); idle above rp_opt.",
            ],
            codeExample: {
              language: "python",
              caption: "Brayton efficiency, specific work and the max-work pressure ratio (T1 = 300 K, T3 = 1400 K)",
              code: `# Brayton cycle sweep: eta, specific work, and regeneration.
gamma, cp = 1.4, 1.005
T1, T3 = 300.0, 1400.0            # K, metallurgy-limited turbine inlet
k = (gamma - 1) / gamma

def brayton(rp):
    T2 = T1 * rp ** k             # compressor delivery
    T4 = T3 / rp ** k             # turbine exhaust
    w = cp * ((T3 - T4) - (T2 - T1))
    eta = 1 - 1 / rp ** k
    eta_reg = 1 - (T1 / T3) * rp ** k   # ideal regenerator
    return T2, T4, w, eta, eta_reg

print("  rp   T2(K)  T4(K)  w(kW/kg)  eta(%)  eta_regen(%)")
for rp in (4, 8, 12, 16, 20):
    T2, T4, w, eta, er = brayton(rp)
    tag = f"{er * 100:6.1f}" if T2 < T4 else "  idle"
    print(f"{rp:4d} {T2:7.0f} {T4:6.0f} {w:9.0f} {eta * 100:8.1f} {tag:>10s}")

rp_opt = (T3 / T1) ** (gamma / (2 * (gamma - 1)))
print("max-work pressure ratio:", round(rp_opt, 1),
      "where T2 = T4 =", round((T1 * T3) ** 0.5, 0), "K")
`,
            },
            diagram: {
              kind: "cycle",
              title: "The Brayton cycle around one shaft",
              caption:
                "Compressor, combustor and turbine on a single shaft - the combustor is the only component where pressure must not fall.",
              steps: [
                { label: "Compressor 1-2", note: "isentropic; eats 40-60% of turbine work" },
                { label: "Combustor 2-3", note: "constant-pressure heat addition" },
                { label: "Turbine 3-4", note: "isentropic expansion drives both loads" },
                { label: "Exhaust / regenerator 4-1", note: "constant-pressure rejection; regenerator taps T4" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two numbers to carry into the exam",
              body: "For 300/1400 K: rp_opt = (T3/T1)^0.875 = 14.8, where specific work peaks because T2 = T4. And the regenerator pays only below that ratio - above it, T2 already exceeds T4 and preheating is impossible. One sentence each earns the discussion marks on nearly every Brayton question.",
            },
            keyTerms: [
              { term: "Back work ratio", definition: "Compressor work divided by turbine work; 40-60% in gas turbines versus a few percent in steam plants." },
              { term: "Pressure ratio rp", definition: "Compressor delivery pressure over inlet pressure; the single design variable of the ideal Brayton cycle." },
              { term: "Regenerator", definition: "A heat exchanger transferring turbine-exhaust heat to compressor-delivery air, cutting fuel burned for the same T3." },
            ],
            examQuestions: [
              {
                q: "Explain the Brayton cycle with a plant layout and T-s diagram, derive eta = 1 - 1/rp^((gamma-1)/gamma), define back work ratio, and find the pressure ratio for maximum specific work between 300 K and 1400 K.",
                marks: 7,
                outline: [
                  "Sketch compressor, combustor, turbine on one shaft; draw the T-s loop.",
                  "Write the four processes with the two isentropes in rp form: T2/T1 = T3/T4 = rp^((gamma-1)/gamma).",
                  "w_net = cp[(T3 - T4) - (T2 - T1)]; q_in = cp(T3 - T2).",
                  "Substitute the isentropic relations to get eta = 1 - 1/rp^((gamma-1)/gamma).",
                  "Define back work ratio and quote the 40-60% figure with the Rankine contrast.",
                  "Differentiate w_net: maximum when T2 = T4 = sqrt(T1 T3).",
                  "rp_opt = (T3/T1)^(gamma/(2(gamma-1))) = (1400/300)^0.875 = 14.8.",
                ],
              },
              {
                q: "Define back work ratio for a gas turbine plant and contrast it with the value in a steam plant.",
                marks: 2,
              },
              {
                q: "A Brayton cycle operates between 300 K and 1400 K with gamma = 1.4. At what pressure ratio is specific work maximum, and why does efficiency not peak there?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Regeneration, reheat and intercooling",
            body: [
              "Regeneration, done properly, is a duty for the exhaust: a counterflow heat exchanger transfers turbine-exhaust energy to compressor-delivery air before the combustor. The regenerator effectiveness measures how close the air actually gets to T4; each kelvin transferred is fuel unburned. The catch is thermodynamic arithmetic: the regenerator only works while T4 exceeds T2, so its value fades exactly as the pressure ratio climbs - high-rp aviation machines abandon it, while industrial machines at moderate rp with low turbine-inlet temperatures make it the core of their efficiency claim.",
              "Intercooling attacks the other half of the back work problem. Compressing in stages and cooling the air back to near T1 between stages walks the compression toward the isothermal ideal; with two stages, the minimum total work falls when the intermediate pressure is the geometric mean, p_i = sqrt(p1 p3), sharing the pressure ratio equally. Intercooling lowers compressor work and raises the mass flow per unit frontal area, but alone it actually lowers cycle efficiency slightly: the cheaper compression ends colder, so more fuel is needed to reach T3 - unless a regenerator is waiting to harvest the now-hotter exhaust.",
              "Reheat mirrors intercooling on the turbine side: expand partially, send the steam of gas back through a second combustor, and expand again. Turbine work rises sharply, but heat input rises almost in proportion, so reheat alone barely moves efficiency - its real payoff is the hotter, denser exhaust that a regenerator can now exploit, plus (in steam plants, Unit II) a drier exhaust. Stack regeneration, intercooling and reheat in the limit of infinitely many stages and the gas cycle closes onto the Ericsson cycle - isothermal compression and expansion with perfect regeneration - whose efficiency equals the Carnot value between the same temperature limits.",
            ],
            bullets: [
              "Regenerator: transfers exhaust heat to combustion air; effective only while T4 > T2; worthless at high pressure ratios.",
              "Regenerator effectiveness = actual air temperature rise / maximum possible rise (T4 - T2).",
              "Intercooling: stage the compression and cool between stages; minimum work at equal stage pressure ratios, p_i = sqrt(p1 p3).",
              "Reheat: stage the expansion and re-burn between stages; big turbine-work gain, efficiency payoff only with regeneration.",
              "All three together, staged infinitely fine, approach the Ericsson cycle - Carnot efficiency between the same T limits.",
            ],
            table: {
              caption: "The three Brayton refinements and what each one really does.",
              headers: ["Technique", "Where it acts", "Effect on work", "Effect on efficiency"],
              rows: [
                ["Regeneration", "Between exhaust and combustor inlet", "None directly", "Cuts q_in; large gain, only while T4 > T2"],
                ["Intercooling", "Between compressor stages", "Compressor work falls", "Slight loss alone; strong gain with regeneration"],
                ["Reheat", "Between turbine stages", "Turbine work rises", "Roughly neutral alone; strong gain with regeneration"],
                ["All three, staged", "Whole plant", "Net work up strongly", "Approaches Ericsson, i.e. Carnot in the limit"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Staging a gas turbine toward the Ericsson ideal",
              caption:
                "Each stage is justified by the one before it - the classic RGPV discussion question in five panels.",
              stages: [
                { label: "Simple Brayton", note: "eta near 30-40%, cheap, light" },
                { label: "Add regeneration", note: "biggest single step at moderate rp" },
                { label: "Add intercooling", note: "compressor work down; exhaust hotter" },
                { label: "Add reheat", note: "turbine work up; exhaust hotter still" },
                { label: "Many stages", note: "Ericsson limit: Carnot efficiency" },
              ],
            },
            callout: {
              type: "exam",
              title: "The sentence examiners want",
              body: "Write it verbatim: reheat and intercooling increase specific work but by themselves do not raise - and can slightly lower - cycle efficiency, because each adds heat input in proportion to work; their full efficiency benefit appears only when combined with regeneration, which harvests the hotter exhaust. That single sentence carries the discussion marks of this section.",
            },
            keyTerms: [
              { term: "Regenerator effectiveness", definition: "Actual air-side temperature rise divided by the maximum possible rise (T4 - T2); typically 0.7-0.9." },
              { term: "Intercooling", definition: "Cooling the working fluid between compression stages to reduce total compressor work toward the isothermal limit." },
              { term: "Ericsson cycle", definition: "The ideal gas cycle with isothermal compression and expansion plus perfect regeneration; Carnot-efficient between the same limits." },
            ],
            examQuestions: [
              {
                q: "Explain regeneration, intercooling and reheat as applied to gas turbine plants. State the condition for a regenerator to be useful, derive the equal-pressure-ratio rule for two-stage intercooling, and explain why intercooling and reheat improve efficiency only when combined with regeneration.",
                marks: 7,
                outline: [
                  "Regeneration: sketch the exchanger; condition T4 > T2; define effectiveness.",
                  "Show eta_regen = 1 - (T1/T3) rp^((gamma-1)/gamma) for the ideal case.",
                  "Intercooling: two-stage compression with p_i = sqrt(p1 p3) minimizes work.",
                  "Note intercooling alone raises specific work but ends compression colder - more fuel for the same T3.",
                  "Reheat: two-stage expansion raises turbine work; q_in rises nearly in proportion.",
                  "Both leave a hotter exhaust, which a regenerator converts into fuel saved.",
                  "Conclude with the Ericsson limit: infinite stages plus perfect regeneration give Carnot efficiency.",
                ],
              },
              {
                q: "State two advantages and one drawback of intercooling in a multistage compressor.",
                marks: 2,
              },
              {
                q: "Name the ideal cycle that intercooling, reheat and regeneration approach in the limit of infinitely many stages, and state its efficiency.",
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
      title: "Steam and Refrigeration Cycles",
      summary:
        "The steam side and the cold side of applied thermodynamics: the Rankine cycle and its reheat and regenerative refinements, the vapour compression refrigeration system on the P-h chart with subcooling and superheating, and the heat-driven vapour absorption systems - aqua-ammonia and lithium bromide-water.",
      chapter: {
        number: "02",
        title: "Steam and Refrigeration",
        intro:
          "Unit II turns from gases to phase-change working fluids: the Rankine cycle that powers the grid with superheated steam, its reheat and feedwater-heating upgrades, the vapour compression refrigeration loop that runs on the P-h chart, the subcooling and superheating refinements that raise COP, and the absorption cycles that replace the compressor with a thermal pump.",
        inOneBreath:
          "The Rankine cycle pumps liquid, boils it, superheats it, expands it through a turbine and condenses it, with pump work nearly free because liquid specific volume is small; reheat dries the exhaust and adds work; regeneration bleeds steam to feedwater heaters, raising the mean temperature of heat addition and efficiency by several points; the vapour compression cycle compresses dry vapour, condenses it, throttles it (constant enthalpy, not isentropic) and evaporates it, with COP = (h1 - h4)/(h2 - h1); subcooling the liquid raises refrigerating effect almost for free while useful superheat adds effect at the price of discharge temperature; and vapour absorption systems replace the compressor with an absorber, pump and generator, running on waste heat with aqua-ammonia needing a rectifier while lithium bromide-water runs under vacuum with water itself as the refrigerant.",
        sections: [
          {
            number: "2.1",
            title: "The Rankine cycle",
            body: [
              "Steam beats air as a working fluid because phase change carries enormous latent heat at nearly constant temperature: the boiler receives heat isothermally, the turbine extracts large work per kilogram, and a small pump returns the condensate. The Rankine cycle is the plant walk: 1-2 the feed pump raises liquid pressure isentropically, 2-3 the boiler plus superheater heats at constant pressure to the turbine inlet state, 3-4 the turbine expands isentropically into the condenser, 4-1 the condenser rejects heat at constant pressure back to saturated liquid. Each state is read from steam tables - the saturation tables at the condenser and boiler pressures, the superheat table at the turbine inlet.",
              "The analysis is a heat balance: w_t = h3 - h4, w_p = v_f (p2 - p1) - tiny, about 4 kJ/kg for a 40-bar boiler - and eta = (w_t - w_p)/(h3 - h2). For the classic 40 bar, 400 deg C, 0.1 bar cycle the enthalpies run 3213.6, 2144.0, 191.8 and 195.8 kJ/kg, giving eta = 35.3%. The turbine exit lands at dryness fraction x = 0.82; because droplets erode blades below about x = 0.88, the cycle is run with more superheat, or reheated - the practical hook for the next section.",
              "Why not the Carnot cycle with wet steam? Inside the vapour dome Carnot would be efficient, but its compressor would have to handle a two-phase mixture - erosion, miscontrol and poor efficiency - and its heat rejection would be pinned to the saturation temperature. Rankine deliberately leaves the dome: superheating raises the mean temperature of heat addition, and full condensation gives the pump pure liquid. The trade is textbook: a few points of efficiency surrendered to make every component buildable.",
            ],
            bullets: [
              "Rankine processes: 1-2 isentropic pump, 2-3 constant-pressure boiler plus superheater, 3-4 isentropic turbine, 4-1 constant-pressure condenser.",
              "Pump work w_p = v_f (p2 - p1): liquid specific volume is so small that w_p is under 1% of turbine work.",
              "eta = (h3 - h4 - w_p)/(h3 - h2); 40 bar/400 deg C/0.1 bar gives 35.3%.",
              "Turbine exit dryness should stay above about x = 0.88 to avoid blade erosion - motivates superheat and reheat.",
              "Rankine beats Carnot-in-the-dome for practicality: liquid pumping instead of two-phase compression.",
            ],
            table: {
              caption: "State points of the 40 bar / 400 deg C / 0.1 bar Rankine cycle.",
              headers: ["State", "Location", "Condition", "h (kJ/kg)"],
              rows: [
                ["1", "Condenser outlet", "Saturated liquid, 0.1 bar (45.8 deg C)", "191.8"],
                ["2", "Pump outlet", "Compressed liquid, 40 bar", "195.8"],
                ["3", "Turbine inlet", "Superheated, 40 bar, 400 deg C", "3213.6"],
                ["4", "Turbine exit", "Wet steam, x = 0.82 at 0.1 bar", "2144.0"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The Rankine cycle as a plant walk-through",
              caption:
                "Follow the arrows on the plant sketch and the T-s diagram together - both must carry the same state numbers.",
              steps: [
                { label: "Feed pump 1-2", note: "liquid; w = v dp, nearly free" },
                { label: "Boiler + superheater 2-3", note: "constant-pressure heat addition" },
                { label: "Turbine 3-4", note: "isentropic expansion to 0.1 bar" },
                { label: "Condenser 4-1", note: "constant-pressure rejection to saturated liquid" },
                { label: "Back to the pump", note: "the only component handling single-phase liquid" },
              ],
            },
            callout: {
              type: "exam",
              title: "The steam-table trail",
              body: "Show your table route in the margin: h1 = hf at 0.1 bar; h2 = h1 + v_f(p2 - p1); h3 from the 40-bar superheat table at 400 deg C; s3 = s4 takes you back to the 0.1-bar dome where x4 = (s3 - sf)/sfg and h4 = hf + x4 hfg. Interpolation lines earn method marks even when arithmetic slips.",
            },
            keyTerms: [
              { term: "Rankine cycle", definition: "The ideal steam power cycle: pump, boiler, turbine, condenser, with heat addition and rejection at constant pressure." },
              { term: "Dryness fraction x", definition: "Mass fraction of vapour in a wet mixture; turbine exhausts are kept above x = 0.88 to limit blade erosion." },
              { term: "Mean temperature of heat addition", definition: "The equivalent constant temperature receiving the boiler heat; superheat, reheat and regeneration all raise it." },
            ],
            examQuestions: [
              {
                q: "Describe the Rankine cycle with a plant sketch and T-s diagram, derive its efficiency, and evaluate it for a cycle with 40 bar / 400 deg C at turbine inlet and 0.1 bar condenser pressure (use steam tables).",
                marks: 7,
                outline: [
                  "Draw the plant and T-s diagrams with states 1-4 marked.",
                  "Read h1 = hf = 191.8 kJ/kg at 0.1 bar.",
                  "Pump work: w_p = v_f (p2 - p1) = 0.001010 x 3990 = 4.0 kJ/kg; h2 = 195.8.",
                  "h3 = 3213.6 kJ/kg, s3 = 6.769 kJ/kg-K from the 40-bar superheat table.",
                  "x4 = (s3 - sf)/sfg = 0.816; h4 = hf + x4 hfg = 2144.0 kJ/kg.",
                  "w_t = 1069.6 kJ/kg; eta = (1069.6 - 4.0)/(3213.6 - 195.8) = 35.3%.",
                  "Comment on x4 = 0.82 being below the erosion limit - the hook for reheat.",
                ],
              },
              {
                q: "Why is the feed pump work negligible in a Rankine cycle compared with the compressor work of a Brayton cycle?",
                marks: 2,
              },
              {
                q: "Why is the Carnot cycle impractical when the working fluid is wet steam?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Reheat and regenerative feed heating",
            body: [
              "Reheat sends the partially expanded steam back through the boiler: expand 40 bar to an intermediate pressure such as 4 bar, reheat to the original (or higher) temperature, then expand to the condenser. Specific work rises because a second heat addition re-primes the expansion, and the exhaust dryness climbs from x = 0.82 toward x = 0.97 - the erosion cure. Efficiency gains a few points as well, since the reheat leg adds heat at a respectable mean temperature; most large plants use one reheat, a few use two, trading fuel flexibility against pipe cost.",
              "Regenerative feed heating bleeds small fractions of steam from the turbine into feedwater heaters, so the feedwater enters the boiler hotter and less fuel is burned per kilogram of steam raised. In an open (direct-contact) heater the bled steam mixes with the condensate - a deaerator is the classic open heater, scrubbing out dissolved oxygen. In a closed heater the bled steam heats feedwater through a tube wall and drains onward, cascading to a lower pressure. Either way the mass balance on the heater fixes the bleed fraction y, and every quantity downstream carries the (1 - y) factor.",
              "Numbers close the argument. Take the 40 bar / 400 deg C cycle, reheat at 4 bar back to 400 deg C, and add one open feedwater heater at 4 bar. The heater balance y = (h_f4 - h_condensate)/(h_bleed - h_condensate) gives y = 0.165; turbine work is 1170 kJ/kg against 1070 for the simple cycle, and efficiency rises from 35.3% to 37.7%. Real subcritical plants stack six to eight heaters and land near 45%; supercritical once-through plants exceed 47% - every heater a small step up the mean-temperature ladder.",
            ],
            bullets: [
              "Reheat: expand - reheat to T_max - expand again; specific work up, exhaust dryness up (x = 0.82 to 0.97 in the worked example).",
              "Open heater: bled steam mixes with feedwater (deaerator duty); closed heater: heat transfers through tubes with cascaded drains.",
              "Heater mass balance fixes the bleed fraction y; downstream turbine work and heat input both carry (1 - y).",
              "Worked cycle: reheat at 4 bar plus one open heater lifts eta from 35.3% to 37.7%.",
              "Modern plants: 6-8 feedwater heaters reach about 45% subcritical; supercritical once-through exceeds 47%.",
            ],
            codeExample: {
              language: "python",
              caption: "Reheat-regenerative Rankine with one open feedwater heater (steam-table enthalpies)",
              code: `# 40 bar / 400 deg C, reheat at 4 bar to 400 deg C, open FWH at 4 bar.
# Enthalpies in kJ/kg, read from steam tables at each state.

h3 = 3213.6     # turbine inlet: 40 bar, 400 deg C
h4 = 2685.6     # isentropic expansion to 4 bar (s = 6.769)
h5 = 3273.8     # reheated to 400 deg C at 4 bar
h6 = 2504.4     # isentropic expansion to 0.1 bar (s = 7.899)
h7 = 191.8      # saturated liquid leaving the condenser
h8 = 192.2      # condensate pump to 4 bar
hf4 = 604.7     # saturated liquid at 4 bar: heater outlet target
h9 = 608.6      # feed pump from 4 to 40 bar

# Open-heater balance: y * h4 + (1 - y) * h8 = hf4
y = (hf4 - h8) / (h4 - h8)

wt = (h3 - h4) + (1 - y) * (h5 - h6)     # turbine work
wp = (1 - y) * (h8 - h7) + (h9 - hf4)    # pump work
qin = (h3 - h9) + (1 - y) * (h5 - h4)    # boiler + reheater
eta = (wt - wp) / qin

print(f"bleed fraction y        = {y:.3f}")
print(f"turbine work            = {wt:.1f} kJ/kg")
print(f"pump work               = {wp:.1f} kJ/kg")
print(f"heat input              = {qin:.1f} kJ/kg")
print(f"cycle efficiency        = {eta * 100:.1f} percent")
print("simple cycle (no reheat, no heater) = 35.3 percent")
`,
            },
            diagram: {
              kind: "pipeline",
              title: "Raising Rankine efficiency step by step",
              caption:
                "Each panel adds hardware and about two efficiency points - the standard progression question.",
              stages: [
                { label: "Simple cycle", note: "35.3% for 40 bar / 400 deg C" },
                { label: "Higher steam conditions", note: "more superheat and pressure" },
                { label: "Add reheat", note: "dry exhaust, more work" },
                { label: "Add feedwater heaters", note: "hotter feed, less fuel" },
                { label: "Modern subcritical plant", note: "6-8 heaters, about 45%" },
              ],
            },
            callout: {
              type: "warning",
              title: "The (1 - y) bookkeeping",
              body: "Once steam is bled at 4 bar, only (1 - y) kg per kg of boiler steam flows through the low-pressure turbine and the condenser. Forgetting the factor on either turbine work or heat input is the single most common numerical error in regenerative-cycle problems - write the mass flow on every stream arrow of your sketch.",
            },
            keyTerms: [
              { term: "Reheat cycle", definition: "A Rankine cycle in which partially expanded steam returns to the boiler for a second heat addition before final expansion." },
              { term: "Open feedwater heater", definition: "A direct-contact mixer where bled steam heats condensate; when placed for deaeration it is the deaerator." },
              { term: "Bleed fraction y", definition: "Kilograms of steam extracted per kilogram of boiler steam, fixed by the feedwater-heater energy balance." },
            ],
            examQuestions: [
              {
                q: "Explain reheat and regenerative feed heating as applied to steam power plants, differentiating open and closed heaters. Set up the mass and energy balances for one open heater and show how the bleed fraction is found.",
                marks: 7,
                outline: [
                  "Reheat: sketch; effects on specific work, exhaust dryness and efficiency.",
                  "Regeneration: bleed steam raises feedwater temperature, hence mean temperature of heat addition.",
                  "Open heater: direct mixing, deaerator example; closed heater: tube wall, cascaded drains.",
                  "Mass balance around the heater: y + (1 - y) = 1 kg of feedwater.",
                  "Energy balance: y h_bleed + (1 - y) h_condensate_in = h_feedwater_out.",
                  "Solve y = (h_f - h_c)/(h_b - h_c); quote y = 0.165 for the worked 4-bar heater.",
                  "Note downstream flows carry (1 - y); efficiency 35.3% to 37.7%.",
                ],
              },
              {
                q: "Differentiate between open and closed feedwater heaters, giving one application of each.",
                marks: 3,
              },
              {
                q: "State two effects of reheating steam on turbine exhaust condition and on specific work output.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Vapour compression refrigeration",
            body: [
              "The vapour compression refrigeration system (VCRS) runs the Rankine loop backwards with one deliberate downgrade: the turbine is replaced by a throttle valve. Expanding two-phase liquid-vapour would recover only a few kilojoules per kilogram while costing a turbine that survives droplets, so the capillary or expansion valve simply dissipates that potential work - an isenthalpic throttling from condenser pressure to evaporator pressure. The four components are the compressor, condenser, expansion valve and evaporator, and the cycle lives on the pressure-enthalpy chart because both heat transfers and the throttle map onto straight lines there.",
              "Walk the P-h loop with R-134a between -10 deg C evaporation and 40 deg C condensation. Saturated vapour leaves the evaporator at state 1 (h1 = 392.7 kJ/kg); isentropic compression takes it to about 48 deg C superheat at 10.16 bar (h2 = 428.0); the condenser desuperheats and liquefies it to saturated liquid (h3 = 256.4); the valve drops it to evaporator pressure at constant enthalpy (h4 = h3), flashing to x = 0.56; and the evaporator boils it back to saturated vapour, absorbing the refrigerating effect 136.3 kJ/kg.",
              "Performance arithmetic follows immediately: COP = refrigerating effect / compressor work = (h1 - h4)/(h2 - h1) = 136.3/35.3 = 3.86, and the mass flow for a duty Q is m = Q/(h1 - h4). One ton of refrigeration is 3.517 kW - the melting of one tonne of ice per day. Against the Carnot yardstick between -10 and 40 deg C, COP_Carnot = 263/50 = 5.26, so the cycle runs at 73% of the ideal - and the next section's subcooling and superheating close part of that gap.",
            ],
            bullets: [
              "VCRS components: compressor, condenser, expansion valve, evaporator; the throttle replaces the Rankine turbine because two-phase expansion recovers almost no work.",
              "P-h geometry: isobaric heat transfers are horizontal lines, the throttle is a vertical line at constant enthalpy, compression follows (ideally) a vertical isentrope.",
              "COP = (h1 - h4)/(h2 - h1); the R-134a example gives 136.3/35.3 = 3.86.",
              "Refrigerating effect h1 - h4 = 136.3 kJ/kg; throttle exit flash fraction x4 = 0.56.",
              "1 TR = 3.517 kW; mass flow m = Q/(h1 - h4); Carnot COP for -10/40 deg C is 5.26.",
            ],
            table: {
              caption: "R-134a states of the -10 / 40 deg C standard cycle.",
              headers: ["State", "Component exit", "Condition", "h (kJ/kg)"],
              rows: [
                ["1", "Evaporator outlet", "Saturated vapour, -10 deg C", "392.7"],
                ["2", "Compressor outlet", "Superheated, 10.16 bar, about 48 deg C", "428.0"],
                ["3", "Condenser outlet", "Saturated liquid, 40 deg C", "256.4"],
                ["4", "Evaporator inlet", "Flash mixture, x = 0.56 at -10 deg C", "256.4"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The VCRS loop and where the money is made",
              caption:
                "The evaporator earns the refrigerating effect; the compressor is the only consumer of paid work - everything else is plumbing.",
              steps: [
                { label: "Compressor 1-2", note: "isentropic; the only work input" },
                { label: "Condenser 2-3", note: "desuperheat + condense at 40 deg C" },
                { label: "Expansion valve 3-4", note: "constant enthalpy; flash to x = 0.56" },
                { label: "Evaporator 4-1", note: "boils at -10 deg C, absorbs the effect" },
              ],
            },
            callout: {
              type: "exam",
              title: "P-h chart first, numbers second",
              body: "Draw the dome, mark the two pressure lines, then run the vertical throttle and the near-vertical compression before writing any enthalpy. On the sketch label q_e = h1 - h4 and w_c = h2 - h1 directly - the COP expression then writes itself and the examiner can award the formula marks at a glance.",
            },
            keyTerms: [
              { term: "Refrigerating effect", definition: "Heat absorbed per kilogram in the evaporator, h1 - h4; the numerator of the COP." },
              { term: "Throttling (isenthalpic) expansion", definition: "Pressure drop at constant enthalpy through a valve or capillary; the irreversible stand-in for an expansion turbine." },
              { term: "Ton of refrigeration", definition: "3.517 kW - the rate of heat needed to melt one tonne of ice in 24 hours." },
            ],
            examQuestions: [
              {
                q: "Draw the P-h diagram of the vapour compression refrigeration cycle, explain why an expansion valve replaces an expansion turbine, derive the COP, and evaluate it for R-134a with h1 = 392.7, h2 = 428.0 and h3 = 256.4 kJ/kg.",
                marks: 7,
                outline: [
                  "Draw the dome with the two isobars; mark states 1-4.",
                  "Explain the throttle: tiny recoverable work in two-phase expansion, droplet damage, cost.",
                  "Process equations: q_e = h1 - h4, w_c = h2 - h1, q_r = h2 - h3, h3 = h4.",
                  "COP = (h1 - h4)/(h2 - h1); substitute: 136.3/35.3 = 3.86.",
                  "Flash fraction x4 = (h3 - hf)/hfg = 0.56 at -10 deg C.",
                  "Mass flow for a given duty: m = Q/(h1 - h4); example in tons.",
                  "Compare with Carnot COP 5.26 between the same temperatures: 73% of ideal.",
                ],
              },
              {
                q: "Why does the vapour compression system use a throttle valve instead of an expansion turbine?",
                marks: 2,
              },
              {
                q: "Define one ton of refrigeration and convert a 10 TR plant duty into kilowatts.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Subcooling, superheating and cycle refinements",
            body: [
              "Subcooling chills the liquid a few kelvin below the condensing temperature before the valve. Every kelvin of subcooling adds about cp_liquid kelvin-equivalents of refrigerating effect - with R-134a, 10 K of subcooling raises the effect from 136.3 to 151.4 kJ/kg, an 11% gain for zero extra compressor work, and the COP climbs from 3.86 to 4.29. Just as valuable, subcooled liquid cannot flash in the warm liquid line, so the expansion valve receives pure liquid instead of a starving vapour-liquid mix; sight-glass bubbles are the field symptom of missing subcooling.",
              "Superheating the suction vapour is more selective. Superheat gained inside the evaporator (useful superheat) is genuine refrigeration and adds to the effect; superheat picked up merely in the suction line adds nothing at the cold space but still protects the compressor from liquid slugging, which is why a few kelvin is always designed in. The cost is discharge temperature: each kelvin of superheat lands on the compressor outlet, a serious constraint for ammonia whose discharge is already hot, and a minor one for R-134a. Excessive suction superheat buys a small COP change at a large reliability price.",
              "Beyond these two knobs sit the architectural refinements. Two-stage compression with intercooling tames high pressure ratios (low-temperature stores, LNG pre-cooling); cascade systems stack two refrigerants around -80 deg C where a single fluid would collapse; economizers and flash tanks remove flash gas before the evaporator. Refrigerant selection adds its own constraints - ODP killed R-11 and R-12, GWP is retiring R-410A, and low-GWP fluids such as R-1234yf, ammonia and CO2 carry the future - with the safety classification (toxicity and flammability) deciding what may be installed where.",
            ],
            bullets: [
              "Subcooling: liquid cooled below T_cond; RE gains cp_liquid x deltaT_subcool with compressor work unchanged; 10 K on R-134a lifts COP from 3.86 to 4.29.",
              "Subcooling also prevents flash gas in the liquid line - bubbles at the sight glass mean lost capacity.",
              "Useful superheat (in the evaporator) adds refrigerating effect; non-useful (suction line) only protects against slugging.",
              "Every kelvin of superheat raises discharge temperature - the ammonia constraint, hardly a worry for R-134a.",
              "High pressure ratios: two-stage compression with intercooling; below about -60 deg C: cascade systems; refrigerant choice now runs on ODP, GWP and safety class.",
            ],
            codeExample: {
              language: "python",
              caption: "What 5 or 10 K of subcooling and superheat buy on the R-134a cycle",
              code: `# R-134a, -10 deg C evaporator, 40 deg C condenser.
h1s, h2s, h3s = 392.7, 428.0, 256.4     # standard cycle enthalpies
cp_v, cp_l = 0.90, 1.51                 # vapour / liquid cp, kJ/kg-K
w_comp = h2s - h1s                      # work input held constant

def cycle(subcool=0.0, superheat=0.0):
    h1 = h1s + cp_v * superheat         # useful superheat in the evaporator
    h2 = h1 + w_comp
    h3 = h3s - cp_l * subcool
    h4 = h3                             # throttle: constant enthalpy
    re = h1 - h4
    return re, re / (h2 - h1)

print("case                RE(kJ/kg)   COP")
for label, sc, sh in (("standard", 0, 0), ("subcool 5 K", 5, 0),
                      ("subcool 10 K", 10, 0), ("superheat 5 K", 0, 5),
                      ("sub+super 10+10", 10, 10)):
    re, cop = cycle(sc, sh)
    print(f"{label:18s} {re:9.1f} {cop:6.2f}")
`,
            },
            diagram: {
              kind: "fork",
              title: "Liquid line choices at the condenser exit",
              caption:
                "Two of the four options are free capacity; two quietly cost either capacity or compressor life.",
              start: "Saturated liquid leaves the condenser at 40 deg C: now what?",
              branches: [
                {
                  label: "Subcool 5-10 K before the valve",
                  outcome: "refrigerating effect up about 11% for no extra work; no flash gas in the line",
                  good: true,
                },
                {
                  label: "Add a few K of useful superheat in the evaporator",
                  outcome: "extra effect inside the cold space plus slugging protection",
                  good: true,
                },
                {
                  label: "Ship saturated liquid down a warm, long line",
                  outcome: "flash gas starves the expansion valve; capacity falls, bubbles at the sight glass",
                  good: false,
                },
                {
                  label: "Chase COP with heavy suction superheat",
                  outcome: "discharge temperature soars - valve and oil suffer, especially with ammonia",
                  good: false,
                },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch both effects on one P-h diagram",
              body: "Subcooling pushes state 3 left along the liquid line - the throttle line shifts left and the evaporator leg visibly lengthens. Superheating extends state 1 right along the isobar and the compression line stretches upward. Two arrows, labelled 'RE gain' and 'work penalty', are the whole discussion - practise drawing them blind.",
            },
            keyTerms: [
              { term: "Subcooling", definition: "Cooling the liquid refrigerant below its saturation temperature at condenser pressure before throttling." },
              { term: "Useful superheat", definition: "Superheating absorbed inside the evaporator, where it counts as refrigerating effect." },
              { term: "Cascade system", definition: "Two (or more) refrigeration cycles stacked in thermal series, each with its own refrigerant, for evaporator temperatures below about -60 deg C." },
            ],
            examQuestions: [
              {
                q: "Show the effects of subcooling and superheating on the vapour compression cycle with P-h sketches. Distinguish useful from non-useful superheat and discuss the effects on refrigerating effect, COP and discharge temperature.",
                marks: 7,
                outline: [
                  "Draw the standard P-h loop; add the subcooled state 3 left of the dome on the liquid line.",
                  "RE rises by cp_liquid x deltaT_subcool; compressor work unchanged; COP up.",
                  "Quote numbers: 10 K subcooling on R-134a takes COP from 3.86 to 4.29.",
                  "Flash-gas prevention in the liquid line as the field benefit.",
                  "Superheat: useful (in evaporator) adds effect; non-useful (suction line) adds none.",
                  "Discharge temperature rises with superheat - the ammonia limitation.",
                  "Conclude: a few K of each is standard design practice.",
                ],
              },
              {
                q: "What is flash gas in a refrigerant liquid line, and how does subcooling prevent it?",
                marks: 2,
              },
              {
                q: "Why is discharge temperature a design constraint for ammonia plants but hardly for R-134a plants?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Vapour absorption refrigeration",
            body: [
              "A vapour absorption system replaces the compressor with a thermal pump: the absorber, solution pump, generator and (for some pairs) a rectifier. Refrigerant vapour from the evaporator is absorbed by a liquid absorbent in the absorber, releasing heat; a small pump raises the now-rich solution to condenser pressure; the generator boils refrigerant back out of solution using waste heat, exhaust gas, solar heat or a gas burner. The result is a machine whose only mechanical work is a tiny solution pump - the 'thermal compressor' - and whose COP = Q_evaporator/Q_generator is a modest 0.5 to 0.8.",
              "Aqua-ammonia (NH3-H2O) is the industrial workhorse: ammonia refrigerates down to -30 deg C, water absorbs it eagerly, and the pair runs at 2 to 12 bar. Its burden is volatility of the absorbent - water vapour rides along with ammonia out of the generator - so an analyser and rectifier must strip water from the vapour before the condenser, or the valve and evaporator ice up. The pump work is genuinely negligible against the heat input, which is why absorption earns its keep wherever cheap heat exists: process plants, engine exhaust, solar collectors.",
              "Lithium bromide-water inverts the roles: water is the refrigerant, LiBr the absorbent, so the machine is a chiller limited to above-freezing temperatures (about 4-10 deg C) - exactly air-conditioning duty. LiBr is essentially non-volatile, so no rectifier is needed, but the machine lives under a deep vacuum (below about 0.1 bar absolute, since water boils cold only in vacuum) and fights crystallisation of the salt at high solution concentration. The domestic Electrolux refrigerator is the elegant extreme: a three-fluid, pump-free design in which hydrogen equalizes pressure between evaporator and condenser and gravity circulates the fluids - not one moving part.",
            ],
            bullets: [
              "Absorption replaces the compressor with absorber + pump + generator: the thermal compressor, driven by cheap heat instead of electricity.",
              "COP = Q_e/Q_g, typically 0.5-0.8; the only mechanical work is a small solution pump.",
              "NH3-H2O: refrigerant ammonia, absorbent water; needs analyser + rectifier because water is volatile; 2-12 bar; evaporates to -30 deg C.",
              "LiBr-H2O: refrigerant water, absorbent LiBr; no rectifier (LiBr non-volatile); deep vacuum; 4-10 deg C chilled water; crystallisation risk.",
              "Electrolux three-fluid domestic unit: hydrogen equalizes pressure, gravity circulates - zero moving parts.",
            ],
            table: {
              caption: "Aqua-ammonia versus lithium bromide-water absorption systems.",
              headers: ["Feature", "NH3-H2O system", "LiBr-H2O system"],
              rows: [
                ["Refrigerant", "Ammonia", "Water"],
                ["Absorbent", "Water (weak solution)", "Lithium bromide solution"],
                ["Rectifier", "Required (water is volatile)", "Not required (LiBr non-volatile)"],
                ["Pressure level", "2-12 bar", "Deep vacuum, below 0.1 bar abs"],
                ["Evaporator temperature", "-30 to +5 deg C", "4-10 deg C (water freezes below 0)"],
                ["COP", "0.5-0.7", "0.6-0.8"],
                ["Main risk", "Toxicity, high-side pressure", "Crystallisation, vacuum leaks"],
                ["Typical duty", "Cold stores, ice plants", "Air-conditioning chillers, hotels"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Aqua-ammonia versus lithium bromide-water",
              caption:
                "Same anatomy - absorber, pump, generator - different fluids, different hardware burden.",
              left: {
                heading: "NH3-H2O",
                items: [
                  "Ammonia refrigerates to -30 deg C",
                  "Water absorbent is volatile",
                  "Analyser + rectifier mandatory",
                  "Runs at 2-12 bar",
                  "Duty: industrial refrigeration",
                ],
              },
              right: {
                heading: "LiBr-H2O",
                items: [
                  "Water refrigerates only above 0 deg C",
                  "LiBr absorbent is non-volatile",
                  "No rectifier needed",
                  "Runs under deep vacuum",
                  "Duty: air-conditioning chillers",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Answer shape for absorption questions",
              body: "Open with the thermal-compressor sentence: the absorber-generator pair replaces the compressor, so the machine consumes heat and a few watts of pumping instead of kilowatts of shaft work. Then draw the block diagram with the solution loop and the standard refrigerant loop, then the fluid-pair specifics. That shape fits both the 7-mark question and the short ones.",
            },
            keyTerms: [
              { term: "Thermal compressor", definition: "The absorber-pump-generator assembly that raises refrigerant vapour pressure using heat instead of shaft work." },
              { term: "Rectifier (analyser)", definition: "The column stripping absorbent vapour from refrigerant leaving the generator in aqua-ammonia systems." },
              { term: "Electrolux refrigerator", definition: "The three-fluid, continuously operating absorption refrigerator with hydrogen equalizing pressure and no pump." },
            ],
            examQuestions: [
              {
                q: "Explain the ammonia-water vapour absorption refrigeration system with a neat sketch: the function of each component including the rectifier, the 'thermal compressor' analogy, and why its COP is inherently low. State a typical COP.",
                marks: 7,
                outline: [
                  "Draw the solution loop (absorber, pump, generator, throttle) plus the refrigerant loop (condenser, valve, evaporator).",
                  "Absorber: weak aqua absorbs NH3 vapour, rejecting heat - plays the suction side.",
                  "Pump raises rich solution pressure at negligible work.",
                  "Generator boils NH3 out using waste heat - plays the discharge side.",
                  "Rectifier/analyser strips water vapour to protect the valve and evaporator.",
                  "COP = Q_e/Q_g = 0.5-0.7; low because the separation step is thermally irreversible.",
                  "Applications where heat is cheap: exhaust, solar, process steam.",
                ],
              },
              {
                q: "Why does the lithium bromide-water system need no rectifier?",
                marks: 2,
              },
              {
                q: "Name the refrigerant, absorbent and pressure-equalizing gas in a domestic Electrolux refrigerator, and state why it needs no pump.",
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
      title: "Psychrometry and Air Conditioning",
      summary:
        "Moist air as a engineering fluid: DBT, WBT, relative humidity and dew point; the psychrometric chart and its six standard processes; the summer cooling-dehumidification plant and the winter heating-humidification plant; and the cooling load estimate that sizes the equipment.",
      chapter: {
        number: "03",
        title: "Psychrometry and Air Conditioning",
        intro:
          "Unit III treats atmospheric air as a mixture and works entirely on one chart: the property definitions, the Carrier equation route from two thermometer readings, the standard processes, the summer and winter air-conditioning plants that string those processes together, and the load estimate that fixes coil, airflow and refrigeration tonnage.",
        inOneBreath:
          "Moist air follows Dalton's law with partial pressures of dry air and water vapour; DBT is the ordinary thermometer reading, WBT the wet-wick reading that equals the adiabatic saturation temperature for air-water, dew point the condensation onset on cooling, RH = pv/pg the saturation ratio and W = 0.622 pv/(pt - pv) the moisture ratio per kilogram of dry air; two independent properties fix a point on the psychrometric chart whose standard processes are sensible heating and cooling along horizontal lines, humidification and dehumidification along verticals, cooling with dehumidification down the left toward the apparatus dew point, heating with humidification up to the right, adiabatic humidification up the constant-WBT line and adiabatic mixing dividing the joining line in inverse proportion of dry-air masses; the summer plant mixes fresh and return air, cools and dehumidifies below the dew point and reheats, the winter plant preheats, washes adiabatically and reheats, and the cooling load sums walls and roof by CLTD, glass by conduction and SHGF, people, lights, equipment, and ventilation latent and sensible to fix the tonnage and airflow.",
        sections: [
          {
            number: "3.1",
            title: "Psychrometric properties and measurement",
            body: [
              "Atmospheric air is a binary mixture: dry air plus water vapour, each obeying Dalton's law with its own partial pressure. Five properties define the state. Dry-bulb temperature (DBT) is the ordinary thermometer reading; wet-bulb temperature (WBT) is read by a thermometer whose bulb is wrapped in a wet wick, where evaporation cools the bulb until latent and sensible transport balance; the dew point is the temperature at which cooling at constant pressure first condenses vapour; relative humidity RH = pv/pg compares the vapour's partial pressure with its saturation pressure at the same DBT; and specific humidity (humidity ratio) W = 0.622 pv/(pt - pv) is the kilograms of vapour carried per kilogram of dry air.",
              "Two conventions matter in numericals. Enthalpy is quoted per kilogram of dry air, h = 1.006 t + W(2501 + 1.86 t) kJ/kg, adding the vapour's formation term 2501 at 0 deg C. And for the air-water pair the wet-bulb temperature measured with a sling psychrometer is numerically almost identical to the thermodynamic adiabatic saturation temperature, so WBT may be used directly in charts and balances - an accident of the pair's Lewis number that no other gas-vapour mixture shares.",
              "The measurement route runs from two readings to the full state. A sling psychrometer gives DBT and WBT; the Carrier equation converts them to vapour pressure, pv = pw - (pt - pw)(tdb - twb) x 0.00066 (1 + 0.00115 twb) with pw the saturation pressure at twb; then W, RH, dew point, enthalpy and specific volume follow in four lines of arithmetic. For 35 deg C DBT and 24 deg C WBT at sea level the route yields pv = 2.25 kPa, W = 14.1 g/kg, RH = 40%, dew point 19.2 deg C and h = 71.4 kJ/kg - exactly the worked case in the code.",
            ],
            bullets: [
              "Dalton's law: pt = pa + pv; each component behaves as if it alone occupied the volume.",
              "RH = pv/pg (at DBT) is a ratio of pressures; W = 0.622 pv/(pt - pv) is a ratio of masses - they answer different questions.",
              "WBT from a wet wick approximates the adiabatic saturation temperature for air-water vapour; true only for this pair.",
              "Enthalpy per kg of dry air: h = 1.006 t + W(2501 + 1.86 t).",
              "Carrier equation turns the two psychrometer readings into pv, after which every other property follows.",
            ],
            codeExample: {
              language: "python",
              caption: "From sling-psychrometer readings to the complete moist-air state",
              code: `# DBT 35 deg C, WBT 24 deg C, sea-level barometer.
pt = 101.325    # kPa

def p_sat(t):   # Buck-type fit, kPa
    return 0.61121 * 2.71828 ** (17.502 * t / (240.97 + t))

tdb, twb = 35.0, 24.0
pw = p_sat(twb)

# Carrier equation -> vapour pressure
pv = pw - (pt - pw) * (tdb - twb) * 0.00066 * (1 + 0.00115 * twb)

W   = 0.622 * pv / (pt - pv)                  # kg vapour per kg dry air
rh  = pv / p_sat(tdb)
h   = 1.006 * tdb + W * (2501 + 1.86 * tdb)   # kJ per kg dry air
v   = 0.287 * (tdb + 273.15) * (1 + 1.6078 * W) / pt

# Dew point: relax until saturation pressure equals pv
td = tdb
for _ in range(30):
    td = td - (p_sat(td) - pv) * 0.5

print(f"vapour pressure {pv:.2f} kPa")
print(f"W = {W * 1000:.1f} g/kg, RH = {rh * 100:.0f} percent")
print(f"dew point {td:.1f} deg C, h = {h:.1f} kJ/kg, v = {v:.3f} m3/kg")
`,
            },
            diagram: {
              kind: "flow",
              title: "From two thermometer readings to the full state",
              caption:
                "The five-step chain every psychrometry numerical walks - memorize the order and the Carrier equation.",
              steps: [
                { label: "Sling psychrometer", note: "read DBT and WBT" },
                { label: "Carrier equation", note: "convert to vapour pressure pv" },
                { label: "Humidity ratio", note: "W = 0.622 pv/(pt - pv)" },
                { label: "Relative humidity", note: "RH = pv / pg at DBT" },
                { label: "Dew point, h, v", note: "complete the state" },
              ],
            },
            callout: {
              type: "exam",
              title: "Which saturation pressure where",
              body: "pg in RH is always evaluated at the dry-bulb temperature; pw in the Carrier equation at the wet-bulb. Mixing the two is the commonest psychrometry slip. Write 'pg(35 deg C) = 5.63 kPa' and 'pw(24 deg C) = 2.98 kPa' explicitly before substituting - the labels alone prevent the error.",
            },
            keyTerms: [
              { term: "Wet-bulb temperature", definition: "Equilibrium temperature of a wetted surface over which air flows; for air-water it equals the adiabatic saturation temperature." },
              { term: "Dew point", definition: "Temperature at which vapour begins to condense when the mixture is cooled at constant total pressure and composition." },
              { term: "Humidity ratio W", definition: "Kilograms of water vapour per kilogram of dry air, 0.622 pv/(pt - pv); the chart's vertical axis." },
            ],
            examQuestions: [
              {
                q: "Define DBT, WBT, RH, dew point and specific humidity. For air at 35 deg C DBT and 24 deg C WBT at 101.325 kPa, determine the vapour pressure, humidity ratio, relative humidity, dew point and enthalpy.",
                marks: 7,
                outline: [
                  "Define each of the five properties in one line each.",
                  "pg(35 deg C) = 5.63 kPa; pw(24 deg C) = 2.98 kPa from tables.",
                  "Carrier equation: pv = 2.98 - (101.325 - 2.98)(11)(0.00066)(1.0276) = 2.25 kPa.",
                  "W = 0.622 x 2.25/(101.325 - 2.25) = 0.0141 kg/kg.",
                  "RH = 2.25/5.63 = 0.40.",
                  "Dew point: temperature whose saturation pressure is 2.25 kPa, about 19.2 deg C.",
                  "h = 1.006(35) + 0.0141(2501 + 1.86 x 35) = 71.4 kJ/kg dry air.",
                ],
              },
              {
                q: "Why does the wet-bulb thermometer read lower than the dry-bulb, and when are the two equal?",
                marks: 2,
              },
              {
                q: "Write the expression for the humidity ratio in terms of partial pressures and total pressure.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "The psychrometric chart and its processes",
            body: [
              "The psychrometric chart compresses the moist-air equation of state onto one sheet: DBT on the horizontal axis (typically 0 to 50 deg C), humidity ratio on the vertical, the 100% saturation curve as the left boundary, and families of constant RH, constant WBT (nearly coincident with constant enthalpy), constant volume and constant dew-point lines woven through. Any two independent properties fix a point; everything else is read off by interpolation. The chart is drawn for one total pressure - sea level - and is wrong at altitude unless corrected.",
              "Six standard processes cover almost every machine. Sensible heating runs horizontally right (W constant); sensible cooling horizontally left, valid only until the path grazes the saturation curve - beyond that, dehumidification begins. Humidification climbs vertically; dehumidification drops. Heating with humidification moves up-right, the winter duty; cooling with dehumidification moves down-left, the summer duty, aiming at the apparatus dew point on the saturation curve. Adiabatic (evaporative) humidification climbs up-left along a constant-WBT line: water evaporates using the air's own sensible heat, so DBT falls while W rises and enthalpy is nearly constant.",
              "Two composite rules complete the toolkit. When two streams mix adiabatically, the mixture point lies on the straight line joining them, dividing it in inverse proportion to the dry-air mass flows - the mixed state of every air handler follows from a ruler. And chemical dehumidification (silica gel, spray of strong solution) moves down-right along roughly constant enthalpy: moisture is absorbed, releasing heat that raises DBT. The sensible heat factor SHF = sensible load/total load measures the slope of any conditioning process line and is the number a coil designer computes first.",
            ],
            bullets: [
              "Chart skeleton: DBT horizontal, W vertical, saturation curve left boundary, families of RH, WBT/enthalpy, volume and dew-point lines; drawn for one barometric pressure.",
              "Sensible heating/cooling: horizontal at constant W; cooling stops at the saturation curve where dehumidification starts.",
              "Cooling + dehumidification (summer): down-left toward the apparatus dew point on the saturation curve.",
              "Heating + humidification (winter): up-right; adiabatic humidification: up-left along constant WBT at nearly constant enthalpy.",
              "Adiabatic mixing: mixture lies on the joining line, divided in inverse ratio of dry-air masses.",
              "SHF = sensible heat / total heat: the slope of the process line; chemical dehumidification runs down-right at constant h.",
            ],
            table: {
              caption: "Chart processes, directions and typical hardware.",
              headers: ["Process", "Chart direction", "What is constant", "Hardware"],
              rows: [
                ["Sensible heating", "Horizontal right", "W", "Hot-water / steam coil"],
                ["Sensible cooling", "Horizontal left", "W", "Coil above dew point"],
                ["Humidification", "Vertical up", "DBT (approx.)", "Steam injection"],
                ["Dehumidification", "Vertical down", "DBT (approx.)", "Chemical adsorber"],
                ["Cooling + dehumidifying", "Down-left toward ADP", "Nothing", "Chilled-water / DX coil"],
                ["Heating + humidifying", "Up-right", "Nothing", "Winter plant"],
                ["Adiabatic humidification", "Up-left along WBT line", "h (approx.), WBT", "Air washer"],
                ["Adiabatic mixing", "Point on joining line", "Energy + mass balances", "Mixing box"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The four quadrants of psychrometric processing",
              caption:
                "Every conditioning duty is a combination of a horizontal move and a vertical move - the quadrants name them.",
              axes: {
                x: "Dry-bulb temperature: falls to the left, rises to the right",
                y: "Humidity ratio: falls downward, rises upward",
              },
              quadrants: [
                { label: "Cooling + humidification", note: "evaporative cooling: up-left along constant WBT" },
                { label: "Heating + humidification", note: "winter air conditioning" },
                { label: "Cooling + dehumidification", note: "summer coil process toward the ADP" },
                { label: "Heating + dehumidification", note: "chemical adsorption, roughly constant h" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the skeleton in 60 seconds",
              body: "Practise drawing the empty chart: saturation curve, two RH lines, the diagonal WBT/enthalpy family and one horizontal sensible process with arrows. Ten seconds of axes, thirty of curves, twenty of process arrows - the same skeleton appears in at least one question every year, and a clean sketch collects marks even before the numbers.",
            },
            keyTerms: [
              { term: "Apparatus dew point (ADP)", definition: "The saturation-curve temperature a coil process aims at; the effective coil surface temperature for cooling with dehumidification." },
              { term: "Sensible heat factor", definition: "Ratio of sensible to total heat change of a process; the slope of the process line on the chart." },
              { term: "Adiabatic mixing", definition: "Combining two moist-air streams with no external heat; the mixture divides the joining line in inverse proportion to dry-air masses." },
            ],
            examQuestions: [
              {
                q: "Sketch the psychrometric chart and show with arrows: sensible heating, sensible cooling, humidification, dehumidification, cooling with dehumidification, adiabatic humidification and adiabatic mixing. State what remains constant in each and one application.",
                marks: 7,
                outline: [
                  "Draw axes, saturation curve and the constant-RH and constant-WBT families.",
                  "Sensible heating: horizontal right, W constant - preheat coils.",
                  "Sensible cooling: horizontal left until saturation - dry coils.",
                  "Humidifying/dehumidifying: vertical moves at constant DBT.",
                  "Cooling + dehumidification: down-left toward the ADP - summer coil.",
                  "Adiabatic humidification: up-left along constant WBT - air washer, cooling towers.",
                  "Mixing: point on the joining line, inverse mass ratio - mixing box; finish with SHF as the slope measure.",
                ],
              },
              {
                q: "Define sensible heat factor and state its value for a purely sensible process.",
                marks: 2,
              },
              {
                q: "Two air streams mix adiabatically. State where the mixture point lies on the chart and how the dry-air mass flows split it.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Summer air conditioning: cooling and dehumidification",
            body: [
              "Summer duty in a hot-humid climate is a down-left process: both temperature and moisture must fall. The plant mixes a little outdoor air with mostly return air, filters it, and passes it over a chilled-water or direct-expansion coil whose effective surface temperature - the apparatus dew point (ADP) - sits below the entering air's dew point, so the coldest surfaces condense moisture while the bulk of the air cools sensibly. The straight process line on the chart runs from the entering state toward the ADP on the saturation curve.",
              "Real coils do not touch every air molecule: the bypass factor BF is the fraction leaving essentially unconditioned, typically 0.05 to 0.3 depending on rows and face velocity. The off-coil state lies on the process line, a BF-fraction of the way back from the ADP: h_off = h_ADP + BF(h_in - h_ADP), and identically for W and t. A high latent load steepens the required process line; if its extension misses the saturation curve, no single coil can do the job and reheat must be added to rotate the line - the price of dry air.",
              "The worked example strings the whole arithmetic together. Return air at 25 deg C and 50% RH mixes 4:1 with 40 deg C outdoor air to give 28 deg C and 56.2 kJ/kg; a coil with ADP 12.8 deg C and BF = 0.15 delivers off-coil air at 15.1 deg C. With a room sensible load of 12 kW and a 10 K supply-room difference, the airflow is 1.20 kg of dry air per second and the coil load is 20.7 kW - 5.9 TR of refrigeration. The grand sensible heat factor, drawn from the mixed state to the ADP, is the line the coil must be able to follow.",
            ],
            bullets: [
              "Summer process: cool and dehumidify - the chart line runs from the mixed state toward the ADP on the saturation curve.",
              "ADP = effective coil surface temperature; it must sit below the entering air's dew point for moisture removal.",
              "Bypass factor BF: fraction of air leaving unchanged; off-coil state = ADP + BF x (entering - ADP), applied to t, W and h.",
              "If the process line misses the saturation curve, reheat is unavoidable - the penalty of a latent-heavy load.",
              "Worked plant: 4:1 mix gives 28 deg C; ADP 12.8 deg C with BF 0.15 gives off-coil 15.1 deg C; 12 kW RSH gives 1.20 kg/s and a 20.7 kW (5.9 TR) coil.",
            ],
            codeExample: {
              language: "python",
              caption: "Mixing, coil process and coil load for a small summer plant",
              code: `# Return 25 deg C / 50% RH, outdoor 40 deg C / 28 deg C WBT, mix 4:1.
ret = (25.0, 0.0099, 50.2)     # (t degC, W kg/kg, h kJ/kg da)
out = (40.0, 0.0158, 80.4)
f = 0.2                        # outdoor fraction

tm = ret[0] * (1 - f) + out[0] * f
wm = ret[1] * (1 - f) + out[1] * f
hm = ret[2] * (1 - f) + out[2] * f

adp = (12.8, 0.0093, 36.0)     # apparatus dew point, on saturation
bf = 0.15                      # bypass factor

to = adp[0] + bf * (tm - adp[0])
wo = adp[1] + bf * (wm - adp[1])
ho = adp[2] + bf * (hm - adp[2])

rsh = 12.0                                    # room sensible heat, kW
m_da = rsh / (1.005 * (ret[0] - to))          # kg dry air per s
coil = m_da * (hm - ho)                       # coil load, kW

print(f"mixed air: {tm:.1f} deg C, W={wm * 1000:.2f} g/kg, h={hm:.1f}")
print(f"off-coil:  {to:.1f} deg C, W={wo * 1000:.2f} g/kg, h={ho:.1f}")
print(f"airflow {m_da:.2f} kg/s; coil {coil:.1f} kW = {coil / 3.517:.1f} TR")
`,
            },
            diagram: {
              kind: "flow",
              title: "A summer air-conditioning plant, air side",
              caption:
                "Follow the air: every box is a psychrometric process, and the whole chain plots as one path on the chart.",
              steps: [
                { label: "Outdoor + return air", note: "mixed 4:1 in the mixing box" },
                { label: "Filter", note: "no state change" },
                { label: "Cooling coil", note: "below dew point: sensible + latent removal" },
                { label: "Reheat coil (if latent-heavy)", note: "rotates the line toward the ADP" },
                { label: "Fan and supply", note: "offsets fan heat; delivers to the space" },
              ],
            },
            callout: {
              type: "exam",
              title: "The GSHF line",
              body: "Draw the grand sensible heat factor line from the mixed-air state to the ADP before computing anything: if the line intersects the saturation curve, the coil can meet the duty in one pass; if it misses, reheat is mandatory. That single geometric test is regularly examined and takes ten seconds to apply.",
            },
            keyTerms: [
              { term: "Bypass factor", definition: "Fraction of air leaving a coil unconditioned; off-coil properties interpolate between ADP and entering state by this factor." },
              { term: "Grand sensible heat factor", definition: "Sensible-to-total ratio of the whole conditioning job from mixed state to ADP; the slope the coil must deliver." },
              { term: "Reheat", definition: "Deliberate post-coil heating that steepens the process line enough to reach the required ADP; the price of high latent load." },
            ],
            examQuestions: [
              {
                q: "Explain a summer air-conditioning system with a psychrometric chart, defining apparatus dew point and bypass factor. For return air at 25 deg C/50% RH mixed 4:1 with 40 deg C/28 deg C WBT outdoor air, an ADP of 12.8 deg C and bypass factor 0.15, find the off-coil state and the coil load for a 12 kW room sensible load.",
                marks: 7,
                outline: [
                  "Draw the plant and the chart process: mix point, coil line to ADP, off-coil point.",
                  "Define ADP and bypass factor.",
                  "Mixing by inverse mass ratio: tm = 28.0 deg C, hm = 56.2 kJ/kg, Wm = 11.1 g/kg.",
                  "Off-coil: to = 12.8 + 0.15(28.0 - 12.8) = 15.1 deg C; similarly ho = 39.0 kJ/kg.",
                  "Airflow from RSH: m = 12/(1.005 x (25 - 15.1)) = 1.20 kg/s.",
                  "Coil load: Q = m(hm - ho) = 1.20 x 17.2 = 20.7 kW.",
                  "Convert: 20.7/3.517 = 5.9 TR; note the GSHF line check for reheat necessity.",
                ],
              },
              {
                q: "Define apparatus dew point and state where it lies on the psychrometric chart.",
                marks: 2,
              },
              {
                q: "What does a bypass factor of 0.05 signify about a coil compared with one of 0.3?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Winter air conditioning and year-round systems",
            body: [
              "Winter duty inverts everything: heat and humidify. The classic plant preheats outdoor air (which is cold and, though possibly near saturation in W terms, carries little absolute moisture), washes it adiabatically or injects steam to raise the humidity ratio, then reheats to the supply temperature. On the chart the path runs right along a horizontal (preheat), up-left along the constant-WBT line (adiabatic humidification - DBT falls because evaporation takes its latent heat from the air itself), then right again (reheat) to the supply state.",
              "The washer is the interesting component because its water temperature reprograms it: circulating water at the air's wet-bulb temperature gives pure adiabatic humidification; water above the air's DBT adds both heat and moisture (heating and humidifying); water below the dew point cools and dehumidifies. A single spray chamber therefore covers three quadrants of the psychrometric matrix, which is why washing air, despite its hygiene burden, remains textbook equipment. Steam injection gives the vertical process with precise control and no carryover of legionella risk.",
              "Year-round plants add the control economy: face-and-bypass dampers let some air skip the coil instead of demanding chilled water modulation; the economizer (free-cooling) mode uses cold outdoor air directly when its enthalpy is below the return air's, saving refrigeration entirely. Comfort targets in India run near 25 deg C and 50-60% RH in summer, 20-22 deg C and 30-50% RH in winter - the lower winter bound avoids condensation on single glazing, the upper one avoids static and dryness, and the effective temperature concept reminds us that humidity, air motion and radiation shift perceived comfort several kelvin either side of the dry-bulb reading.",
            ],
            bullets: [
              "Winter path on the chart: preheat right, humidify up-left along constant WBT, reheat right to the supply state.",
              "Adiabatic humidification drops DBT while raising W: the latent heat comes from the air itself - the washer is not a heater.",
              "Washer water temperature sets the process: at WBT adiabatic; above DBT heating + humidifying; below dew point cooling + dehumidifying.",
              "Economizer (free cooling): when outdoor enthalpy is below return enthalpy, use outdoor air instead of refrigeration.",
              "Comfort bands: summer about 25 deg C / 50-60% RH, winter 20-22 deg C / 30-50% RH; effective temperature folds in humidity and air motion.",
            ],
            table: {
              caption: "Summer versus winter duty on the same plant.",
              headers: ["Parameter", "Summer plant", "Winter plant"],
              rows: [
                ["Objective", "25 deg C, 50-60% RH", "20-22 deg C, 30-50% RH"],
                ["Chart process", "Cooling + dehumidification, down-left", "Heating + humidification, up-right"],
                ["Primary coil", "Chilled water 5-7 deg C or DX", "Preheat coil, then washer or steam, then reheat"],
                ["Moisture control", "Condense on the ADP surface", "Evaporate in the washer or inject steam"],
                ["Energy economy", "Economizer when outdoor h is low", "Face-and-bypass instead of coil modulation"],
                ["Failure mode", "Reheat penalty when latent-heavy", "Over-humidification condensing on cold glass"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Summer versus winter duty on the same plant",
              caption:
                "One set of ducts and fans, two opposite chart journeys - the exam favourite for a single 7-mark answer.",
              left: {
                heading: "Summer",
                items: [
                  "Chart move: down-left toward ADP",
                  "Coil below dew point condenses water",
                  "Chilled water or DX refrigeration",
                  "Reheat only if latent-heavy",
                  "Economizer saves refrigeration",
                ],
              },
              right: {
                heading: "Winter",
                items: [
                  "Chart move: right, up-left, right",
                  "Washer or steam adds moisture",
                  "Hot-water or steam coils heat",
                  "Reheat sets supply temperature",
                  "Guard against condensation on glass",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Why the washer cools the air it humidifies",
              body: "The sentence that earns the discussion mark: in adiabatic humidification the enthalpy stays nearly constant, so every gram of evaporated water takes about 2500 kJ from the air's own sensible heat - DBT falls as W rises. Write it, then draw the constant-WBT line with both arrows on it.",
            },
            keyTerms: [
              { term: "Air washer", definition: "A spray chamber whose water temperature selects among adiabatic, heating and dehumidifying processes on the passing air." },
              { term: "Economizer cycle", definition: "Free-cooling control mode admitting outdoor air when its enthalpy is below the return air's, displacing refrigeration work." },
              { term: "Effective temperature", definition: "An comfort index combining temperature, humidity and air motion into one perceived-temperature number." },
            ],
            examQuestions: [
              {
                q: "With a plant sketch and psychrometric chart, explain a winter air-conditioning system: preheating, adiabatic humidification in an air washer and reheating. Explain why the dry-bulb temperature falls across the washer and how the washer's water temperature changes the process.",
                marks: 7,
                outline: [
                  "Sketch the plant: preheater, washer, reheater, fan, space.",
                  "Chart path: horizontal right (preheat), up-left along constant WBT (wash), horizontal right (reheat).",
                  "Adiabatic saturation: enthalpy nearly constant, latent drawn from sensible - DBT falls, W rises.",
                  "Water at WBT: pure adiabatic humidification.",
                  "Water above DBT: heating and humidifying; water below dew point: cooling and dehumidifying.",
                  "Reheat trims supply temperature to the room load.",
                  "Comfort band 20-22 deg C, 30-50% RH; note glass condensation limit.",
                ],
              },
              {
                q: "What is the economizer (free cooling) mode of an air handler, and when does it activate?",
                marks: 2,
              },
              {
                q: "State typical indoor design conditions for Indian summer and winter air conditioning.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Cooling load estimation",
            body: [
              "The cooling load is the rate at which heat must be removed to hold design conditions, and it sums eight streams: conduction through walls and roof, driven by sol-air temperature and tabulated as CLTD (cooling load temperature difference); conduction through glass; solar radiation through glass, tabulated as SHGF with shading coefficients; heat from people, split sensible (about 60-75 W seated office work) and latent (40-60 W); lighting at its connected watts times a use factor; equipment and machinery; infiltration through cracks; and the ventilation air's sensible and latent load from conditioning outdoor air to room state.",
              "Two distinctions keep the arithmetic honest. Heat gain is what enters the space; cooling load is what the coil sees - radiant gains (sun through glass, warm walls, lighting) land on surfaces first and reach the air only after the thermal mass releases them, tabulated through cooling load factors and making the load lag the gain by hours, which is why the design hour is typically 16:00. And diversity acknowledges that not everything peaks together: not all people present, not all lights on. A safety margin of 5-10% rides on top.",
              "The estimate orders the equipment. Room sensible heat divided by the sensible rise (about 1.005 times the supply-room temperature difference) fixes the mass flow of dry air; the room sensible heat factor RSHF = RSH/(RSH + RLH) is the slope the room process line must have; and the grand total, divided by 3.517, quotes the plant in tons. The worked office - 10 x 8 x 3.2 m, 12 occupants, 20 W per square metre of lighting, uninsulated walls and roof, 12 m2 of glass - totals about 12.3 kW, 3.5 TR, with a supply flow near 1.1 kg/s, as the code computes line by line.",
            ],
            bullets: [
              "Load components: walls and roof (CLTD), glass conduction, glass solar (SHGF x shading), people (sensible + latent), lights, equipment, infiltration, ventilation (sensible + latent).",
              "Heat gain is not cooling load: radiant components are stored and released later - the load curve lags the gain curve, peaking near 16:00 on the design day.",
              "RSHF = room sensible / room total: the slope of the room process line; airflow m = RSH/(1.005 x deltaT_supply).",
              "Diversity and a 5-10% margin keep the plant from being oversized for the one coincident peak.",
              "Worked office: about 12.3 kW = 3.5 TR with supply flow near 1.1 kg/s of dry air.",
            ],
            codeExample: {
              language: "python",
              caption: "Component-by-component cooling load for a 10 x 8 x 3.2 m office",
              code: `# Design hour 16:00; outside 40 deg C, room 25 deg C.
# Envelope: U x A x CLTD for walls and roof, glass split by mechanism.
walls = 1.7 * (2 * (10 + 8) * 3.2) * 12      # W: U=1.7, CLTD=12 K
roof  = 1.1 * 80 * 25                        # W: flat roof, CLTD=25 K
glass_cond  = 5.6 * 12 * 14                  # W: 12 m2, delta T = 14 K
glass_solar = 6.0 * 0.85 * 300               # W: 6 m2 sunlit, shaded SHGF
people_s = 12 * 60                           # W: sensible per person
people_l = 12 * 50                           # W: latent per person
lights = 80 * 20                             # W: 20 W/m2 of floor
equip  = 1500.0                              # W: computers and printers

m_vent = 12 * 2.5e-3                         # kg/s: 2.5 L/s per person
vent_s = m_vent * 1.005 * (40 - 25) * 1000   # W
vent_l = m_vent * 2500 * (0.0158 - 0.0099)   # W, latent from W difference

items = [("walls", walls), ("roof", roof),
         ("glass conduction", glass_cond), ("glass solar", glass_solar),
         ("people sensible", people_s), ("people latent", people_l),
         ("lights", lights), ("equipment", equip),
         ("ventilation s+l", vent_s + vent_l)]
total = sum(v for _, v in items) / 1000      # kW

print(f"{'item':20s}{'kW':>7}")
for k, v in items:
    print(f"{k:20s}{v / 1000:7.2f}")
print(f"{'total':20s}{total:7.2f} kW = {total / 3.517:.1f} TR")

rsh = (walls + roof + glass_cond + glass_solar + people_s
       + lights + equip + vent_s) / 1000
print(f"room sensible {rsh:.2f} kW; supply at 15 deg C:",
      round(rsh / (1.005 * 10), 2), "kg/s")
`,
            },
            diagram: {
              kind: "pyramid",
              title: "Where the cooling load hides",
              caption:
                "The worked office ordered by size - the envelope dominates in uninsulated Indian construction.",
              tiers: [
                { label: "Ventilation + infiltration", note: "about 0.9 kW in the example" },
                { label: "People (sensible + latent)", note: "about 1.3 kW" },
                { label: "Glass solar (SHGF)", note: "about 1.5 kW, 6 m2 sunlit" },
                { label: "Lights + equipment", note: "about 3.1 kW" },
                { label: "Walls + roof + glass conduction", note: "about 5.5 kW - the base of the pyramid" },
              ],
            },
            callout: {
              type: "warning",
              title: "Gain is not load",
              body: "Sunlight entering at noon is partly stored in the floor and walls and returns to the air at four in the afternoon - the cooling load at 16:00 exceeds the instantaneous solar gain then, while being less than the noon gain. Quote the storage lag (cooling load factors) whenever the question says 'cooling load' rather than 'heat gain'; examiners specifically look for the distinction.",
            },
            keyTerms: [
              { term: "CLTD", definition: "Cooling load temperature difference: a tabulated effective temperature difference that folds solar radiation and time lag into wall and roof conduction." },
              { term: "Room sensible heat factor", definition: "RSH divided by total room heat (RSH + RLH); the slope of the room condition line on the chart." },
              { term: "Cooling load vs heat gain", definition: "Heat gain enters the space; cooling load reaches the coil, delayed and reshaped by the thermal storage of surfaces." },
            ],
            examQuestions: [
              {
                q: "List the components of a cooling load and explain the distinction between heat gain and cooling load. Estimate the load for an office 10 x 8 x 3.2 m with 12 occupants, 20 W/m2 of lighting, walls U = 1.7 with CLTD 12 K, roof U = 1.1 with CLTD 25 K, 12 m2 of glass and 1.5 kW of equipment, and size the plant in tons.",
                marks: 7,
                outline: [
                  "List the eight components and define CLTD and SHGF.",
                  "Explain storage lag: radiant gains become load hours later; design hour 16:00.",
                  "Walls: 1.7 x 115.2 x 12 = 2.35 kW; roof: 1.1 x 80 x 25 = 2.2 kW.",
                  "Glass: conduction 0.94 kW + solar about 1.5 kW.",
                  "People 1.32 kW (split 0.72 sensible, 0.6 latent); lights 1.6 kW; equipment 1.5 kW.",
                  "Ventilation sensible + latent about 0.9 kW.",
                  "Total about 12.3 kW = 3.5 TR; RSH fixes airflow near 1.1 kg/s at 15 deg C supply.",
                ],
              },
              {
                q: "Differentiate between heat gain and cooling load.",
                marks: 2,
              },
              {
                q: "Define room sensible heat factor and state how it is used on the psychrometric chart.",
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
      title: "Gas Dynamics",
      summary:
      "Compressible flow from first principles: the speed of sound and the Mach number with the flow regimes they define, stagnation properties as the flow's reservoir state, isentropic flow through converging-diverging nozzles, the choking of mass flow at the throat, and the normal shock as the irreversible price of decelerating supersonic flow.",
      chapter: {
        number: "04",
        title: "Gas Dynamics",
        intro:
          "Unit IV changes the rules of fluid motion: density becomes a variable. The acoustic speed defines the Mach number and its regimes; stagnation properties give every stream a reference reservoir state; the area-Mach relation explains the de Laval nozzle; the critical pressure ratio explains choking; and the normal shock relations quantify what is lost when supersonic flow is forced to slow down.",
        inOneBreath:
          "Sound travels at a = sqrt(gamma R T), about 340 m/s in air at 15 deg C, and the Mach number M = V/a measures density-change importance, becoming significant above 0.3; a source moving supersonically confines its disturbance to a Mach cone of half angle asin(1/M); stagnation properties are the isentropic-rest values T0/T = 1 + (gamma - 1) M^2/2 and p0/p = (T0/T)^(gamma/(gamma-1)), with the critical state at M = 1 giving p*/p0 = 0.5283 for air; in a nozzle dA/A = (M^2 - 1) dV/V, so area must shrink while subsonic and grow while supersonic - hence the converging-diverging de Laval shape - with the area-Mach relation A/A* fixing exit Mach by area ratio and the throat choking mass flow at m = A* p0 sqrt(gamma/(R T0)) (2/(gamma+1))^((gamma+1)/(2(gamma-1))); lowering back pressure walks the nozzle through subsonic, internally-shocked and fully supersonic regimes until pe = pb at design, with over- and under-expansion outside; and a normal shock jumps p, T and density up, drops M below 1, keeps T0 constant but sacrifices stagnation pressure by p02/p01, quantified by the standard shock relations.",
        sections: [
          {
            number: "4.1",
            title: "Mach number, wave propagation and flow regimes",
            body: [
              "Below about a third of the speed of sound, air behaves as incompressible: the fractional density change scales with M^2/2, so at M = 0.3 it is only about 4.5% and Bernoulli's equation serves. Beyond that, density becomes an active variable and every relation of this unit replaces it. The acoustic speed a = sqrt(gamma R T) - about 340 m/s in air at 288 K, 1497 m/s in water - depends only on the gas and its absolute temperature, and the Mach number M = V/a is always formed with the local sound speed and local velocity.",
              "Wave propagation explains why the Mach number is the whole story. A stationary disturbance radiates spherical sound waves; a moving source outruns its own waves once V exceeds a, and the envelope of the emitted spheres becomes the Mach cone with half angle mu = asin(1/M). Inside the cone is the zone of action, where the disturbance is felt; outside, the zone of silence, which cannot be warned - a bullet arrives before its sound. At M = 2 the cone angle is 30 degrees; the same geometry governs supersonic aerofoils, whose every disturbance trails downstream of the point that made it.",
              "The regimes follow from the physics. Incompressible flow (M below 0.3) tolerates classical hydraulics; subsonic compressible flow (0.3 to 0.8) needs density corrections; transonic flow (0.8 to 1.2) mixes subsonic and supersonic patches, with shocks flickering on aerofoils and fan-blade tips; supersonic flow (1.2 to 5) is shock-and-expansion territory - nozzles, intakes, projectiles; hypersonic flow (above 5) adds real-gas heating, thin shock layers and boundary-layer-shock interaction for re-entry vehicles and scramjets. The compressors and fans of Units I and II live at the bottom three regimes; the nozzles of this unit, at the top two.",
            ],
            bullets: [
              "Acoustic speed a = sqrt(gamma R T): about 340 m/s in air at 15 deg C; a property of state, not of the flow.",
              "M = V/a with local values; density change scales as M^2/2, hence the M = 0.3 boundary at about 5%.",
              "Mach cone half angle mu = asin(1/M): 30 degrees at M = 2; zone of action inside, zone of silence outside.",
              "Regimes: incompressible below 0.3, subsonic to 0.8, transonic 0.8-1.2, supersonic to 5, hypersonic beyond 5.",
              "Transonic flow mixes both families on one blade - the regime fan and compressor designers fight.",
            ],
            table: {
              caption: "Mach-number regimes and their hardware.",
              headers: ["Regime", "Mach range", "Character", "Examples"],
              rows: [
                ["Incompressible", "below 0.3", "Density constant; Bernoulli valid", "Ventilation ducts, pumps"],
                ["Subsonic compressible", "0.3 - 0.8", "Density falls along the flow", "Compressor stages, process ducts"],
                ["Transonic", "0.8 - 1.2", "Mixed patches; shocks on blades", "Fan tips, propeller tips"],
                ["Supersonic", "1.2 - 5", "Shocks and expansion waves dominate", "Nozzles, intakes, missiles"],
                ["Hypersonic", "above 5", "Real-gas heating, thin shock layers", "Re-entry bodies, scramjets"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The Mach-number ladder",
              caption:
                "Everyday flow at the base, re-entry physics at the tip - each step adds one phenomenon.",
              tiers: [
                { label: "Hypersonic, M > 5", note: "real gas effects, ionisation, thin shock layers" },
                { label: "Supersonic, 1.2 - 5", note: "shocks, expansion fans, Mach cone" },
                { label: "Transonic, 0.8 - 1.2", note: "mixed patches, shock buffet" },
                { label: "Subsonic compressible, 0.3 - 0.8", note: "density matters, no waves yet" },
                { label: "Incompressible, M < 0.3", note: "the classical hydraulics of Units past" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two formulas, one sketch",
              body: "This section's marks are cheap if memorized cold: a = sqrt(gamma R T) with the 340 m/s anchor, and mu = asin(1/M) with the 30-degree example at M = 2. Add the Mach-cone sketch with the zone of action labelled - a two-minute answer that routinely appears as a short question.",
            },
            keyTerms: [
              { term: "Mach number", definition: "Local flow speed divided by local acoustic speed; the single parameter governing compressibility effects." },
              { term: "Mach angle mu", definition: "Half angle of the Mach cone, asin(1/M); the boundary between zones of action and silence." },
              { term: "Zone of silence", definition: "The region outside the Mach cone that a supersonic source's disturbances have not yet reached." },
            ],
            examQuestions: [
              {
                q: "Derive the velocity of sound in a perfect gas as a = sqrt(gamma R T), define the Mach number, and explain the Mach cone and zones of action and silence for a source moving at M = 2. Classify flow regimes with one example each.",
                marks: 7,
                outline: [
                  "Momentum and continuity across a weak pressure wave give dp/drho at constant entropy.",
                  "For a perfect gas, p = rho R T and the isentropic derivative gives a^2 = gamma R T.",
                  "Define M = V/a; quote 340 m/s in air at 288 K.",
                  "Moving source: wavefronts envelope into a cone of half angle mu = asin(1/M).",
                  "At M = 2, mu = 30 degrees; zone of action inside the cone, silence outside.",
                  "Regimes: incompressible below 0.3, subsonic, transonic, supersonic, hypersonic above 5.",
                  "Examples: ducts, compressor blades, fan tips, nozzles, re-entry vehicles.",
                ],
              },
              {
                q: "Why is compressibility neglected below M = 0.3? Support with the density-change estimate.",
                marks: 2,
              },
              {
                q: "An aircraft cruises at M = 2. Find its Mach angle and the distance ratio of the cone.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Stagnation properties and the critical state",
            body: [
              "The stagnation state is what a stream becomes if it is brought to rest isentropically - a reservoir-equivalent carrying all the flow's pressure and thermal potential. From the steady-flow energy equation, h0 = h + V^2/2, and for a perfect gas this converts to T0/T = 1 + (gamma - 1) M^2/2, with p0/p = (T0/T)^(gamma/(gamma-1)) and rho0/rho following the same exponent chain. Stagnation temperature is conserved through adiabatic flow with or without losses; stagnation pressure is conserved only if the deceleration is isentropic - every shock or friction event taxes it.",
              "The sonic state provides the second reference. Where M = 1, the starred properties follow by substitution: T*/T0 = 2/(gamma + 1) = 0.8333 for air, p*/p0 = (2/(gamma + 1))^(gamma/(gamma - 1)) = 0.5283, and rho*/rho0 = 0.6339. The number 0.5283 is the critical pressure ratio: whenever a reservoir exhausts through a constriction against a back pressure below 0.5283 p0, the throat runs sonic and the flow is choked - the pivot fact of the next two sections.",
              "Measurement closes the loop. A pitot tube facing subsonic flow reads p0 directly; the incompressible Bernoulli form under-reads dynamic pressure by about 5% at M = 0.3, which is exactly why that Mach number marks the compressible boundary. In supersonic flow a pitot probe sits behind a detached bow shock, so its reading obeys the Rayleigh pitot formula, which folds the shock's stagnation-pressure loss into the measurement. Numerically, at M = 2 the ratios are T0/T = 1.8, p0/p = 7.82 and rho0/rho = 4.35 - the table the code prints.",
            ],
            bullets: [
              "Stagnation = isentropic rest state: h0 = h + V^2/2; T0/T = 1 + (gamma - 1) M^2/2.",
              "p0/p = (T0/T)^(gamma/(gamma-1)); rho0/rho similarly - one exponent chain from one temperature ratio.",
              "T0 survives any adiabatic process; p0 survives only isentropic ones - shocks and friction tax p0 alone.",
              "Critical state at M = 1: p*/p0 = 0.5283 for air - the choking criterion.",
              "Pitot reads p0 in subsonic flow; in supersonic flow it sits behind a bow shock (Rayleigh pitot formula).",
            ],
            codeExample: {
              language: "python",
              caption: "Stagnation property ratios versus Mach number (gamma = 1.4)",
              code: `# The one table every gas-dynamics numerical begins with.
gamma = 1.4

def ratios(m):
    t = 1 + 0.5 * (gamma - 1) * m * m          # T0/T
    p = t ** (gamma / (gamma - 1))              # p0/p
    r = t ** (1 / (gamma - 1))                  # rho0/rho
    return t, p, r

print("   M    T0/T    p0/p    rho0/rho")
for m in (0.1, 0.3, 0.5, 0.8, 1.0, 1.5, 2.0, 3.0):
    t, p, r = ratios(m)
    print(f"{m:4.1f} {t:7.3f} {p:8.3f} {r:9.3f}")

print("critical ratio p*/p0 =", round(ratios(1.0)[1], 4))
print("at M = 0.3, p0/p - 1 =", f"{ratios(0.3)[1] - 1:.1%}",
      "- the incompressibility boundary")
`,
            },
            diagram: {
              kind: "flow",
              title: "Building the stagnation state",
              caption:
                "Energy first, then isentropy - the order of the derivation is the order examiners expect.",
              steps: [
                { label: "Moving stream: h and V", note: "steady flow energy applies" },
                { label: "h0 = h + V^2/2", note: "adiabatic, no work: h0 is conserved" },
                { label: "Isentropic deceleration to rest", note: "only this keeps p0 intact" },
                { label: "T0/T = 1 + 0.2 M^2 (air)", note: "one formula, chained to p0 and rho0" },
                { label: "Set M = 1 for the critical state", note: "p*/p0 = 0.5283: the choking gate" },
              ],
            },
            callout: {
              type: "exam",
              title: "Which property dies at a shock",
              body: "Across a normal shock: T0 unchanged (adiabatic), p0 reduced (irreversible), static p, T and rho all raised, Mach dropped below 1. Write this five-line table before any shock derivation - it anchors the algebra and is itself a two-mark short question most years.",
            },
            keyTerms: [
              { term: "Stagnation enthalpy h0", definition: "Enthalpy the stream would have at rest: h + V^2/2; conserved in adiabatic flow." },
              { term: "Critical pressure ratio", definition: "p*/p0 = (2/(gamma+1))^(gamma/(gamma-1)) = 0.5283 for air; the throat pressure ratio at choking." },
              { term: "Rayleigh pitot formula", definition: "The relation giving stagnation pressure behind a normal shock from the pitot and static readings in supersonic flow." },
            ],
            examQuestions: [
              {
                q: "Define stagnation properties and derive T0/T, p0/p and rho0/rho in terms of the Mach number for a perfect gas. Explain the critical state, evaluate p*/p0 for air, and compute all three ratios at M = 2.",
                marks: 7,
                outline: [
                  "Definition: isentropic deceleration to rest at steady state.",
                  "Energy equation: h0 = h + V^2/2; cp(T0 - T) = V^2/2.",
                  "Substitute V = M a and a^2 = gamma R T to get T0/T = 1 + (gamma - 1)M^2/2.",
                  "Isentropic chain: p0/p = (T0/T)^(gamma/(gamma-1)), rho0/rho = (T0/T)^(1/(gamma-1)).",
                  "Critical state: set M = 1; T*/T0 = 0.8333, p*/p0 = 0.5283 for air.",
                  "At M = 2: T0/T = 1.8, p0/p = 7.82, rho0/rho = 4.35.",
                  "Note T0 conserved adiabatically; p0 lost at shocks - forward reference.",
                ],
              },
              {
                q: "Why is stagnation pressure called the pressure potential of a compressible stream, and which processes conserve it?",
                marks: 2,
              },
              {
                q: "Compute T0/T and p0/p at M = 0.3 for gamma = 1.4 and comment on the incompressible assumption.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Isentropic nozzle flow and the area rule",
            body: [
              "A nozzle converts pressure (and thermal) energy into kinetic energy; a diffuser does the reverse. For incompressible flow the area-velocity relation is simple: shrink the pipe, speed the flow. Compressible flow splits the answer at M = 1. Combining continuity with Euler's momentum equation gives dA/A = (M^2 - 1) dV/V: with M below 1 the bracket is negative and subsonic flow accelerates in a shrinking passage, but with M above 1 the density falls faster than velocity rises, so supersonic flow needs a growing passage to keep accelerating.",
              "The de Laval nozzle therefore converges to a throat, where the area is minimum and, in the choked condition, M = 1, then diverges to supersonic speeds. The area-Mach relation quantifies the shape: A/A* = (1/M)[(2/(gamma+1))(1 + (gamma - 1)M^2/2)]^((gamma+1)/(2(gamma-1))), where A* is the throat area. A/A* is 1 at the throat by definition, 1.6875 at M = 2 and 4.235 at M = 3: supersonic Mach numbers are bought with rapidly growing area ratios - wind-tunnel supersonic sections look like trumpets for this reason.",
              "Mass flow pins the design. At the throat, m = A* p0 sqrt(gamma/(R T0)) (2/(gamma+1))^((gamma+1)/(2(gamma-1))) - about 904 kg per second per square metre of throat for air from a 5 bar, 500 K reservoir. Once the throat is sonic, the mass flow depends only on reservoir conditions and A*: lowering the back pressure cannot push more through, a phenomenon called choking that the next section dissects regime by regime. Steam-turbine passages, rocket engines and supersonic wind tunnels are all designed by this one relation plus the pressure ratio across the nozzle.",
            ],
            bullets: [
              "Nozzle accelerates, diffuser decelerates; in compressible flow the shape flips at M = 1.",
              "Area-velocity relation dA/A = (M^2 - 1) dV/V: subsonic accelerates while shrinking, supersonic while growing.",
              "de Laval nozzle: converging section to a sonic throat, then diverging to supersonic exit.",
              "A/A* = (1/M)[(2/(gamma+1))(1 + (gamma-1)M^2/2)]^((gamma+1)/(2(gamma-1))): 1.6875 at M = 2, 4.235 at M = 3.",
              "Choked mass flow depends only on A*, p0 and T0 - about 904 kg/(s m2) for air at 5 bar and 500 K.",
            ],
            codeExample: {
              language: "python",
              caption: "Area-Mach table and the choked mass flux",
              code: `# The de Laval nozzle design curves (gamma = 1.4, air).
gamma, R = 1.4, 287.0

def area_ratio(m):
    t = (2 / (gamma + 1)) * (1 + 0.5 * (gamma - 1) * m * m)
    return (1 / m) * t ** ((gamma + 1) / (2 * (gamma - 1)))

print("   M    A/A*")
for m in (0.2, 0.4, 0.6, 0.8, 1.0, 1.5, 2.0, 3.0):
    print(f"{m:4.1f} {area_ratio(m):8.3f}")

# Choked throat flux for a 5 bar, 500 K reservoir
p0, t0 = 5.0e5, 500.0
k = (2 / (gamma + 1)) ** ((gamma + 1) / (2 * (gamma - 1)))
flux = p0 * (gamma / (R * t0)) ** 0.5 * k
print("choked mass flux:", round(flux, 0), "kg per second per m2 of throat")
`,
            },
            diagram: {
              kind: "pipeline",
              title: "One de Laval nozzle, station by station",
              caption:
                "Area shrinks while subsonic, touches minimum at the throat, grows while supersonic - one duct, two behaviours.",
              stages: [
                { label: "Reservoir", note: "p0, T0 define the stagnation state" },
                { label: "Converging section", note: "M rises toward 1; still subsonic" },
                { label: "Throat A*", note: "M = 1 when choked; mass flow locks here" },
                { label: "Diverging section", note: "M > 1: density falls faster than V rises" },
                { label: "Exit plane", note: "area ratio fixes the design Mach" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorize three A/A* values",
              body: "A/A* = 1.6875 at M = 2 and 4.235 at M = 3 (gamma = 1.4). With the throat value of 1 these three numbers let you sanity-check any nozzle numerical instantly - and quoting them in a derivation earns the 'design insight' mark that pure algebra misses.",
            },
            keyTerms: [
              { term: "de Laval nozzle", definition: "A converging-diverging nozzle that accelerates a choked flow from subsonic to supersonic through a sonic throat." },
              { term: "Area-Mach relation", definition: "The isentropic relation linking A/A* to M; the design curve of every supersonic nozzle." },
              { term: "Choked flow", definition: "The condition, reached when the throat runs sonic, in which mass flow is fixed by reservoir conditions alone." },
            ],
            examQuestions: [
              {
                q: "Derive the area-Mach number relation for isentropic flow and explain why a nozzle delivering supersonic speed must be converging-diverging. Evaluate A/A* at M = 2 (gamma = 1.4) and the choked mass flux for a reservoir at 5 bar and 500 K with a 10 cm2 throat.",
                marks: 7,
                outline: [
                  "Combine continuity, Euler's equation and isentropic relations to get dA/A = (M^2 - 1) dV/V.",
                  "Interpret: subsonic accelerates in a shrinking area, supersonic in a growing one.",
                  "Integrate with the definition of the starred state to obtain A/A* = (1/M)[(2/(gamma+1))(1 + (gamma-1)M^2/2)]^((gamma+1)/(2(gamma-1))).",
                  "Substitute M = 2: A/A* = 1.6875.",
                  "Choked flux: m/A* = p0 sqrt(gamma/(R T0)) (2/(gamma+1))^((gamma+1)/(2(gamma-1))) = 904 kg/(s m2).",
                  "Throat 10 cm2 = 1e-3 m2 gives m = 0.90 kg/s.",
                  "Conclude: back pressure below 0.5283 p0 fixes this flow - choking.",
                ],
              },
              {
                q: "State the condition at the throat of a choked converging-diverging nozzle.",
                marks: 2,
              },
              {
                q: "Why does a subsonic diffuser have a diverging shape while a supersonic diffuser converges?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Choking and nozzle operating regimes",
            body: [
              "A simple convergent nozzle already shows choking. As back pressure falls, exit velocity and mass flow rise together - until the exit-plane pressure ratio reaches 0.5283 p0, where the exit Mach number hits one. Any further fall in back pressure cannot be transmitted upstream: the exit stays sonic, the jet expands outside the nozzle in a diamond pattern, and the mass flow is frozen at its choked value. The exit pressure no longer equals the back pressure - the first surprise of compressible flow.",
              "The converging-diverging nozzle walks six regimes as pb/p0 falls from unity. First, no flow. Second, subsonic throughout: the flow speeds up to a maximum below one at the throat, then decelerates in the divergent section (a diffuser), pe = pb. Third, at the critical ratio, the throat just reaches M = 1 but the divergent section still diffuses subsonically. Fourth, below critical: a normal shock stands inside the divergent section - supersonic to the shock, subsonic after it, with pe = pb restored. Fifth, the shock reaches the exit plane. Sixth, below the design ratio, the flow is fully supersonic and pe differs from pb: overexpanded (pe < pb) with oblique shocks at the lip, or underexpanded (pe > pb) with expansion fans.",
              "Design is the golden case: the area ratio is chosen so the isentropic exit pressure equals the back pressure, and no wave mars the flow inside or at the lip. Rockets live off this table - a sea-level-tested nozzle is overexpanded at ignition and reaches design altitude minutes later, and if the overexpansion is too severe the flow separates from the walls with a sideload jolt. The regime map of pressure ratio against pattern is the single most examined diagram of Unit IV, and it is best learned as the fork below.",
            ],
            bullets: [
              "Convergent nozzle: mass flow rises with falling pb only until the exit hits M = 1; then flow is choked and independent of pb.",
              "C-D regime 1-3: no flow, subsonic throughout, and critical flow with the throat at M = 1 but a diffusing divergent.",
              "Regime 4: normal shock inside the divergent - supersonic upstream of the shock, subsonic downstream, pe = pb.",
              "Regime 5-6: shock at the exit plane, then fully supersonic flow; overexpanded (pe < pb, oblique shocks) or underexpanded (pe > pb, expansion fans).",
              "Design condition: pe = pb with the area ratio matched - the flow is isentropic right to the lip.",
            ],
            table: {
              caption: "Operating regimes of a converging-diverging nozzle.",
              headers: ["pb/p0 (falling)", "Flow pattern", "M at throat", "Exit pressure"],
              rows: [
                ["1.0", "No flow", "0", "pe = p0"],
                ["Just below 1", "Subsonic throughout", "below 1", "pe = pb"],
                ["0.5283 (air)", "Throat sonic, divergent diffuses", "1", "pe = pb"],
                ["Below critical", "Normal shock inside divergent", "1", "pe = pb"],
                ["Near design", "Shock at exit plane, then fully supersonic", "1", "pe = pb at that point"],
                ["Below design", "Fully supersonic; over or under-expanded", "1", "pe differs from pb"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Lowering the back pressure on a C-D nozzle",
              caption:
                "One nozzle, six personalities - only the last branch is the clean supersonic design point.",
              start: "The nozzle is choked: pb/p0 keeps falling below 0.5283. What does the flow do?",
              branches: [
                {
                  label: "Slightly below critical: shock inside the divergent",
                  outcome: "supersonic to the shock, subsonic after; pe = pb; heavy stagnation-pressure loss",
                  good: false,
                },
                {
                  label: "Shock exactly at the exit plane",
                  outcome: "the last station where pe still equals pb; flow is supersonic to the lip",
                  good: false,
                },
                {
                  label: "Overexpanded: pe below pb",
                  outcome: "oblique shocks squeeze the jet; thrust loss and possible wall separation",
                  good: false,
                },
                {
                  label: "Design ratio: pe = pb",
                  outcome: "fully supersonic, isentropic to the lip, no waves - the design point",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Answer with the regime map",
              body: "For any 'describe the flow as back pressure falls' question, draw pressure along the nozzle axis for each regime rather than writing prose: flat-then-bumped lines for subsonic, a vertical pressure jump for the internal shock, and a sharp lip discontinuity for over/under-expansion. Six small sketches, one label each, reliably collect the full seven marks.",
            },
            keyTerms: [
              { term: "Choking", definition: "The saturation of mass flow once the minimum area reaches M = 1; downstream pressure loses influence." },
              { term: "Overexpanded flow", definition: "Exit pressure below back pressure: oblique shocks compress the jet to ambient." },
              { term: "Underexpanded flow", definition: "Exit pressure above back pressure: expansion fans let the jet finish its expansion outside." },
            ],
            examQuestions: [
              {
                q: "Describe, with pressure-distribution sketches, all operating regimes of a converging-diverging nozzle as the back pressure falls from p0 to below the design value, including the shock-in-divergent, shock-at-exit, overexpanded and underexpanded cases. Define the design condition.",
                marks: 7,
                outline: [
                  "pb = p0: no flow; then subsonic throughout with the divergent acting as a diffuser, pe = pb.",
                  "Critical ratio 0.5283 p0: throat reaches M = 1, divergent still diffuses subsonically.",
                  "Below critical: normal shock inside the divergent; pressure jumps, pe = pb.",
                  "Shock marches to the exit plane as pb falls further.",
                  "Below design: fully supersonic, pe differs from pb.",
                  "Overexpanded pe < pb (oblique shocks); underexpanded pe > pb (expansion fans).",
                  "Design: area ratio chosen so isentropic pe equals pb - no waves at the lip.",
                ],
              },
              {
                q: "State the critical pressure ratio for air and its significance.",
                marks: 2,
              },
              {
                q: "What are shock diamonds in a rocket exhaust and what causes them?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Normal shock waves",
            body: [
              "A normal shock is a front, only a few mean free paths thick, across which a supersonic stream abruptly becomes subsonic. Nothing crosses it gently: static pressure, temperature and density all jump up; velocity drops; and although the flow is adiabatic - stagnation temperature is unchanged - the process is violently irreversible, so entropy rises and stagnation pressure falls. There is no subsonic counterpart: run the relations backwards and they demand a spontaneous entropy decrease that the second law forbids.",
              "Three equations generate the whole algebra: continuity (rho1 V1 = rho2 V2), momentum (p1 + rho1 V1^2 = p2 + rho2 V2^2) and energy (T0 constant). Their solutions give M2^2 = (1 + (gamma-1)M1^2/2)/(gamma M1^2 - (gamma-1)/2), p2/p1 = 1 + 2gamma(M1^2 - 1)/(gamma + 1), and the chained T2/T1 and rho2/rho1; the Prandtl relation compresses it all to V1 V2 = a*^2. The strength of the shock is (p2 - p1)/p1, and the stagnation-pressure ratio p02/p01 - always below one - is the standard measure of the loss.",
              "At M1 = 2 in air the shock is already expensive: M2 = 0.577, p2/p1 = 4.5, T2/T1 = 1.687, rho2/rho1 = 2.67 and p02/p01 = 0.721 - a 28% loss of pressure potential across one centimetre of physics. As M1 grows the loss worsens fast, which is why supersonic intakes for engines work hard to decelerate flow through many weak oblique shocks instead of one strong normal one. The normal shock nevertheless earns its keep in compressors, blast waves and the pitot-probe bow shock of section 4.2; steam turbine? no - but steam nozzles see condensation shocks, its wet cousin.",
            ],
            bullets: [
              "Normal shock: thin, stationary (in shock-fixed coordinates), adiabatic, highly irreversible; supersonic in, subsonic out.",
              "Static p, T, rho jump up; velocity drops; T0 constant; p0 always falls; entropy always rises.",
              "M2^2 = (1 + (gamma-1)M1^2/2)/(gamma M1^2 - (gamma-1)/2); p2/p1 = 1 + 2gamma(M1^2 - 1)/(gamma + 1).",
              "Prandtl relation V1 V2 = a*^2: elegant cross-check on any shock calculation.",
              "M1 = 2 (air): M2 = 0.577, p2/p1 = 4.5, T2/T1 = 1.687, rho2/rho1 = 2.67, p02/p01 = 0.721 - a 28% loss.",
            ],
            codeExample: {
              language: "python",
              caption: "Normal shock property jumps versus upstream Mach (gamma = 1.4)",
              code: `# The standard shock table, computed from the three governing equations.
gamma = 1.4

def shock(m1):
    m2 = ((1 + 0.5 * (gamma - 1) * m1 * m1) /
          (gamma * m1 * m1 - 0.5 * (gamma - 1))) ** 0.5
    p = 1 + 2 * gamma / (gamma + 1) * (m1 * m1 - 1)
    rho = ((gamma + 1) * m1 * m1) / (2 + (gamma - 1) * m1 * m1)
    t = p / rho
    t0fac = ((1 + 0.5 * (gamma - 1) * m2 * m2) /
             (1 + 0.5 * (gamma - 1) * m1 * m1)) ** (gamma / (gamma - 1))
    p02_p01 = p * t0fac
    return m2, p, t, rho, p02_p01

print("  M1    M2    p2/p1  T2/T1  rho2/rho1  p02/p01")
for m1 in (1.1, 1.5, 2.0, 2.5, 3.0):
    m2, p, t, r, pl = shock(m1)
    print(f"{m1:4.1f} {m2:6.3f} {p:6.2f} {t:6.2f} {r:9.2f} {pl:9.3f}")

print("Prandtl check at M1 = 2: V1 V2 = a*^2,",
      "so M2 x (1 + 0.2 M2^2)^0.5 x 2.4^0.5 balances")
`,
            },
            diagram: {
              kind: "compare",
              title: "A normal shock, seen from both sides",
              caption:
                "Everything the examiner checks, one line per property - memorize this panel.",
              left: {
                heading: "Upstream (1)",
                items: [
                  "M1 greater than 1",
                  "Low static p, T, rho",
                  "p01 at its full value",
                  "Supersonic, low entropy",
                  "The stream that asked for trouble",
                ],
              },
              right: {
                heading: "Downstream (2)",
                items: [
                  "M2 below 1 (0.577 at M1 = 2)",
                  "p, T, rho all jumped up",
                  "p02 below p01 (0.721 at M1 = 2)",
                  "T0 unchanged - still adiabatic",
                  "Entropy up: the irreversibility bill",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Never reverse a normal shock",
              body: "The equations admit a mathematical solution with subsonic upstream and supersonic downstream, but it would decrease entropy - the second law vetoes it. If an exam question asks whether a shock can strengthen flow to supersonic, the one-word answer with the entropy argument is worth the full marks.",
            },
            keyTerms: [
              { term: "Normal shock", definition: "A plane discontinuity normal to the flow across which supersonic flow becomes subsonic with rising p, T, rho and entropy." },
              { term: "Prandtl relation", definition: "V1 V2 = a*^2 across a normal shock - velocity products and the critical speed." },
              { term: "Shock strength", definition: "The static pressure rise across the shock, (p2 - p1)/p1; grows roughly with M1^2." },
            ],
            examQuestions: [
              {
                q: "Starting from continuity, momentum and energy, derive the normal shock relations for M2, p2/p1, rho2/rho1 and T2/T1. Explain why stagnation temperature is constant but stagnation pressure falls, and evaluate all ratios at M1 = 2 for gamma = 1.4.",
                marks: 7,
                outline: [
                  "Write the three conservation equations across a stationary control volume.",
                  "Energy: T01 = T02 - adiabatic, no work.",
                  "Momentum plus continuity lead to M2^2 = (1 + 0.2 M1^2)/(1.4 M1^2 - 0.2).",
                  "p2/p1 = 1 + (2 gamma/(gamma+1))(M1^2 - 1) = 4.5 at M1 = 2.",
                  "rho2/rho1 = 2.667; T2/T1 = 1.687.",
                  "Entropy analysis: ds greater than 0 requires p02/p01 below 1; p02/p01 = 0.721 at M1 = 2.",
                  "Note M2 = 0.577 and the Prandtl check V1 V2 = a*^2.",
                ],
              },
              {
                q: "Can a normal shock occur in a subsonic stream? Justify with the entropy argument.",
                marks: 2,
              },
              {
                q: "State the Prandtl relation across a normal shock and use it to explain why the downstream flow must be subsonic.",
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
      title: "Heat Exchangers and Boilers",
      summary:
        "The hardware that closes the thermodynamic loops: heat exchanger analysis by LMTD and by effectiveness-NTU with fouling; fire-tube against water-tube boilers and their mountings and accessories; impulse and reaction steam turbines and their compounding; and the condensers and cooling towers that sink the rejected heat.",
      chapter: {
        number: "05",
        title: "Heat Exchangers, Boilers and Steam Plant",
        intro:
          "Unit V is the plant room: the double-pipe, shell-and-tube and cross-flow heat exchangers with their two design methods; the boilers that raise the steam, their safety mountings and efficiency accessories; the steam turbines that expand it through nozzles and blades; and the condensers and cooling towers that hand the rejected heat to the atmosphere.",
        inOneBreath:
          "A heat exchanger transfers Q = U A dT_lm between fluids whose terminal temperatures set the log-mean temperature difference, counterflow beating parallel flow because its driving force stays nearly uniform, and when outlet temperatures are unknown the effectiveness-NTU method rates the exchanger directly with eps = Q/Q_max and NTU = UA/C_min, while fouling layers cut U by adding resistances R_f that the design must prepay; boilers split into fire-tube types like Cochran and Lancashire for low pressure and water-tube types like Babcock-Wilcox and Benson for power duty, each carrying the mandatory mountings - water gauge, pressure gauge, safety valve, fusible plug, stop valve, feed check valve, blowdown - plus the accessories economiser, air preheater and superheater that lift efficiency; steam turbines convert enthalpy through nozzles and blading, impulse machines dropping all pressure in fixed nozzles and compounding by velocity (Curtis) or pressure (Rateau) while 50% reaction Parsons stages split the drop and run full admission; and the plant's cold end condenses the exhaust at about 0.05 bar in surface or jet condensers before cooling towers reject the heat to air by evaporation, quantified by range, approach, effectiveness and a water balance of evaporation, drift, blowdown and makeup.",
        sections: [
          {
            number: "5.1",
            title: "Heat exchangers and the LMTD method",
            body: [
              "Heat exchangers move heat between fluids separated by a wall, and their taxonomy is about flow arrangement: the double-pipe exchanger in parallel or counterflow, the shell-and-tube exchanger with baffles and multipass tube bundles, cross-flow exchangers with finned surfaces (car radiators, air-cooled condensers), and plate exchangers with their compact corrugated passages. The design question is sizing: given both fluids' flow rates and terminal temperatures, find the area. The energy balance gives Q = m_h cp (Th,in - Th,out) = m_c cp (Tc,out - Tc,in), and the rate equation needs a driving force.",
              "That driving force is not any single temperature difference, because the local difference varies exponentially along the exchanger. Integrating along the flow gives the log-mean temperature difference, LMTD = (dT1 - dT2)/ln(dT1/dT2), where dT1 and dT2 are the differences at the two ends - taken between fluids at the same end for parallel flow, at opposite ends for counterflow. Counterflow always wins: its differences stay more nearly equal, and its LMTD exceeds the parallel value for identical terminals; it also permits the cold outlet to leave hotter than the hot outlet. Multipass and cross-flow arrangements pay a correction factor F, about 0.75 to 0.95, to the counterflow LMTD.",
              "A worked oil cooler fixes the arithmetic. Oil cools from 120 to 80 deg C while water rises from 30 to 60 deg C, transferring 168 kW. Parallel flow: dT1 = 90, dT2 = 20, LMTD = 70/ln(4.5) = 46.5 K. Counterflow: dT1 = 60, dT2 = 50, LMTD = 10/ln(1.2) = 54.9 K - the same duty in 15% less area at U = 0.35 kW/m2-K (10.3 versus 8.7 m2). Two special cases complete the pattern: equal end differences give LMTD equal to that difference, and condensers and evaporators (one fluid isothermal) are identical in both arrangements.",
            ],
            bullets: [
              "Energy balance first: Q = m_h cp dT_h = m_c cp dT_c; both sides must agree before any rate equation.",
              "LMTD = (dT1 - dT2)/ln(dT1/dT2); differences paired at the same end (parallel) or opposite ends (counter).",
              "Counterflow LMTD exceeds parallel for the same terminals - and lets the cold outlet exceed the hot outlet.",
              "Multipass and cross-flow: multiply by the correction factor F (0.75-0.95) from standard charts.",
              "Worked oil cooler: parallel 46.5 K vs counter 54.9 K - counter saves about 15% of the area.",
            ],
            codeExample: {
              language: "python",
              caption: "Parallel versus counterflow LMTD for an oil cooler",
              code: `# Oil 120 -> 80 deg C (2 kg/s, cp 2.1), water 30 -> 60 deg C.
import math

th_in, th_out = 120.0, 80.0
tc_in, tc_out = 30.0, 60.0
U = 0.35                                  # kW/m2-K
Q = 2.0 * 2.1 * (th_in - th_out)          # kW

def lmtd(dt1, dt2):
    if abs(dt1 - dt2) < 1e-9:
        return dt1
    return (dt1 - dt2) / math.log(dt1 / dt2)

par = lmtd(th_in - tc_in, th_out - tc_out)     # same-end pairing
ctr = lmtd(th_in - tc_out, th_out - tc_in)     # opposite-end pairing

print(f"duty Q = {Q:.0f} kW")
print(f"parallel: LMTD {par:.1f} K, area {Q / (U * par):.1f} m2")
print(f"counter : LMTD {ctr:.1f} K, area {Q / (U * ctr):.1f} m2")
print(f"counter saves {100 * (1 - par / ctr):.1f} percent of the area")
`,
            },
            diagram: {
              kind: "compare",
              title: "Parallel versus counter flow",
              caption:
                "The two temperature profiles on the same axes - the counterflow gap stays fat, the parallel gap collapses.",
              left: {
                heading: "Parallel flow",
                items: [
                  "Both fluids enter the same end",
                  "dT starts large, collapses toward the outlet",
                  "Cold outlet cannot exceed hot outlet",
                  "Smaller LMTD: more area for the duty",
                  "Simpler headers, uniform tube expansion",
                ],
              },
              right: {
                heading: "Counterflow",
                items: [
                  "Fluids enter opposite ends",
                  "dT stays nearly uniform along the length",
                  "Cold outlet may exceed hot outlet",
                  "Larger LMTD: less area for the duty",
                  "The default choice when free to choose",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Pair the differences correctly",
              body: "Write the two terminal sketches before substituting: parallel pairs 120 with 30 and 80 with 60; counter pairs 120 with 60 and 80 with 30. The classic slip is using parallel pairing in a counterflow LMTD - the answer is plausible but wrong, and the sketch is the only reliable guard.",
            },
            keyTerms: [
              { term: "Log-mean temperature difference", definition: "The exact integrated average driving force of a heat exchanger: (dT1 - dT2)/ln(dT1/dT2)." },
              { term: "Counterflow", definition: "Arrangement with fluids flowing in opposite directions, maximizing LMTD and permitting temperature crossover." },
              { term: "Correction factor F", definition: "The multiplier applied to the counterflow LMTD for multipass and cross-flow arrangements, read from standard charts." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for the log-mean temperature difference in a parallel-flow heat exchanger and write the corresponding counterflow expression. Explain why counterflow gives a larger LMTD, and solve: oil cools 120 to 80 deg C while water heats 30 to 60 deg C with U = 0.35 kW/m2-K and 168 kW duty - find both areas.",
                marks: 7,
                outline: [
                  "State dQ = U dA (Th - Tc) and the two energy balances dTh = -dQ/(m_h cp), dTc = +dQ/(m_c cp).",
                  "Show (Th - Tc) varies exponentially with Q; separate variables and integrate between ends.",
                  "Obtain LMTD = (dT1 - dT2)/ln(dT1/dT2) with same-end pairing for parallel flow.",
                  "Write the counterflow pairing: dT1 = Th,in - Tc,out, dT2 = Th,out - Tc,in.",
                  "Parallel: (90 - 20)/ln(4.5) = 46.5 K.",
                  "Counter: (60 - 50)/ln(1.2) = 54.9 K - larger because the gap stays uniform.",
                  "Areas: 168/(0.35 x 46.5) = 10.3 m2 versus 168/(0.35 x 54.9) = 8.7 m2; counter saves 15%.",
                ],
              },
              {
                q: "What is the LMTD when both end temperature differences are equal, and when one fluid condenses at constant temperature?",
                marks: 2,
              },
              {
                q: "Why can the cold-fluid outlet temperature exceed the hot-fluid outlet temperature only in counterflow?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "The effectiveness-NTU method and fouling",
            body: [
              "LMTD sizes an exchanger when all four terminal temperatures are known - but the rating problem, 'here is an existing exchanger, what will it deliver?', hides the outlet temperatures inside the LMTD and demands iteration. The effectiveness-NTU method attacks from the other end. Effectiveness eps = actual transfer / maximum possible transfer, where Q_max = Cmin (Th,in - Tc,in); NTU = UA/Cmin is the exchanger's size measured in transfer capacity; and the capacity ratio Cr = Cmin/Cmax says which fluid changes temperature faster. Every arrangement has a closed-form eps(NTU, Cr).",
              "The two formulas to carry: counterflow eps = (1 - exp(-NTU(1 - Cr)))/(1 - Cr exp(-NTU(1 - Cr))) and parallel flow eps = (1 - exp(-NTU(1 + Cr)))/(1 + Cr). Their limits teach the physics: as NTU grows, counterflow effectiveness approaches one for any Cr, but parallel flow stalls at 1/(1 + Cr); when one fluid changes phase, Cr = 0 and both reduce to 1 - exp(-NTU). For NTU = 1.5 and Cr = 0.5, counterflow reaches eps = 0.69 against parallel's 0.60 - the same counterflow advantage the LMTD expressed, now in rating language.",
              "Fouling is the enemy the design must prepay. Deposits - scale, rust, biological film, soot - add a thermal resistance in series with the wall: 1/U_dirty = 1/U_clean + R_f, with fouling factors R_f tabulated by fluid and service (about 0.0001 to 0.0005 m2-K/W). A clean U of 1200 W/m2-K burdened with 0.0005 m2-K/W of combined fouling falls to 750 - a 37% capacity loss waiting to happen, which is why designs build in excess area and plants schedule cleaning. Oversize now, clean later: the two-line economics of every exchanger ever built.",
            ],
            bullets: [
              "Rating problem: outlet temperatures unknown - NTU method solves directly, LMTD needs iteration.",
              "eps = Q/Q_max with Q_max = Cmin (Th,in - Tc,in); NTU = UA/Cmin; Cr = Cmin/Cmax.",
              "Counterflow: eps = (1 - exp(-NTU(1 - Cr)))/(1 - Cr exp(-NTU(1 - Cr))); parallel: (1 - exp(-NTU(1 + Cr)))/(1 + Cr).",
              "Limits: counterflow eps -> 1 as NTU -> infinity; parallel capped at 1/(1 + Cr); Cr = 0 gives 1 - exp(-NTU).",
              "Fouling: 1/U_dirty = 1/U_clean + R_f; 0.0005 m2-K/W of deposits can cut U by more than a third.",
            ],
            codeExample: {
              language: "python",
              caption: "Effectiveness curves and the price of fouling",
              code: `# Rating comparison and fouling penalty.
import math

def eps_counter(ntu, cr):
    if cr < 1e-9:
        return 1 - math.exp(-ntu)
    return (1 - math.exp(-ntu * (1 - cr))) / (1 - cr * math.exp(-ntu * (1 - cr)))

def eps_parallel(ntu, cr):
    return (1 - math.exp(-ntu * (1 + cr))) / (1 + cr)

cr = 0.5
print("  NTU   eps(par %)   eps(ctr %)")
for ntu in (0.25, 0.5, 1.0, 1.5, 2.0, 4.0):
    print(f"{ntu:5.2f} {eps_parallel(ntu, cr) * 100:10.1f} {eps_counter(ntu, cr) * 100:10.1f}")
print(f"parallel ceiling as NTU -> inf: {100 / (1 + cr):.0f} percent")

# Fouling: both sides at 0.00025 m2-K/W on a clean U of 1200 W/m2-K
u_clean = 1200.0
rf_total = 0.00025 * 2
u_dirty = 1 / (1 / u_clean + rf_total)
print(f"dirty U = {u_dirty:.0f} W/m2-K, a loss of {100 * (1 - u_dirty / u_clean):.1f} percent")
`,
            },
            diagram: {
              kind: "flow",
              title: "Rating an exchanger with NTU",
              caption:
                "Four steps from geometry to outlet temperatures - the rating route that LMTD cannot walk directly.",
              steps: [
                { label: "Known: U, A, both C's, inlet temps", note: "the rating data set" },
                { label: "Compute NTU = UA/Cmin and Cr", note: "the two dimensionless groups" },
                { label: "eps from the arrangement formula", note: "counter, parallel or cross-flow" },
                { label: "Q = eps Cmin (Th,in - Tc,in)", note: "actual duty follows" },
                { label: "Energy balances give both outlets", note: "the numbers LMTD had to assume" },
              ],
            },
            callout: {
              type: "tip",
              title: "Choose the method by what is known",
              body: "All four terminal temperatures known: use LMTD (sizing). Outlets unknown: use eps-NTU (rating). Write this one sentence at the start of any exchanger question - it justifies the method choice, which is itself a marked step in RGPV papers.",
            },
            keyTerms: [
              { term: "Effectiveness", definition: "Ratio of actual heat transfer to the maximum thermodynamically possible, Q/Q_max." },
              { term: "NTU", definition: "Number of transfer units, UA/Cmin: the exchanger's transfer capacity as a dimensionless size." },
              { term: "Fouling factor", definition: "The added thermal resistance of deposits, R_f in m2-K/W, tabulated by fluid and service." },
            ],
            examQuestions: [
              {
                q: "Define effectiveness, NTU and capacity ratio for a heat exchanger, give the eps-NTU relations for counterflow and parallel flow, and explain when the NTU method is preferred to LMTD. Rate a counterflow exchanger with NTU = 1.5 and Cr = 0.5, then show the effect of a total fouling resistance of 0.0005 m2-K/W on a clean U of 1200 W/m2-K.",
                marks: 7,
                outline: [
                  "Define eps, NTU and Cr in symbols.",
                  "State both eps formulas and the Cr = 0 special case.",
                  "Method choice: LMTD for sizing, eps-NTU for rating - outlets unknown.",
                  "Compute: eps_ctr(1.5, 0.5) = (1 - exp(-0.75))/(1 - 0.5 exp(-0.75)) = 0.69.",
                  "Q = 0.69 x Cmin (Th,in - Tc,in); outlets from energy balances.",
                  "Fouling: 1/U_dirty = 1/1200 + 0.0005, so U_dirty = 750 W/m2-K.",
                  "Comment: about 37% capacity loss - the case for excess area and cleaning schedules.",
                ],
              },
              {
                q: "What is the maximum possible effectiveness of a parallel-flow exchanger as NTU tends to infinity?",
                marks: 2,
              },
              {
                q: "Why does fouling reduce the overall heat transfer coefficient even though the fluids are unchanged?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Boilers: fire tube, water tube, mountings and accessories",
            body: [
              "A boiler is a pressure vessel in which water receives heat from combustion and leaves as steam, and the first classification is structural. In fire-tube boilers - Cochran (vertical), Lancashire and Cornish (horizontal), the locomotive boiler - hot gases run through tubes immersed in a single large water shell: cheap, compact and forgiving, but limited to about 15-20 bar and modest steam rates because the large drum holds much stored energy. In water-tube boilers - Babcock and Wilcox with its header-and-drum layout, La Mont (forced circulation), Benson (once-through, supercritical) - water and steam run inside the tubes while gas sweeps outside: higher pressure and temperature, faster steam raising, and a failure mode that vents one small tube rather than one big drum.",
              "Mountings are the fittings a boiler may not legally run without, because each guards a distinct failure: the water-level indicator shows the drum level (fired dry, a shell fails); the pressure gauge reads steam pressure; the safety valve (spring, dead-weight or lever type) releases steam before pressure exceeds the limit; the fusible plug melts if the water level drops over the furnace crown and quenches the fire; the steam stop valve isolates and regulates the main supply; the feed check valve admits feedwater and prevents backflow; the blowdown valve purges sediments from the bottom. Accessories are optional efficiency hardware: the economiser preheats feedwater with flue gas, the air preheater warms combustion air (each roughly 20 deg C of air preheat saving about 1% fuel), and the superheater dries steam to the turbine-inlet state.",
              "Performance is quoted through equivalent evaporation: the steam a boiler would raise per kilogram of fuel from and at 100 deg C, equal to the actual evaporation times the factor of evaporation (h_steam - h_feed)/2257. Boiler efficiency is heat utilised in the steam divided by heat supplied by the fuel, and a test works it from measured evaporation, fuel burn rate and calorific value. Circulation completes the design picture: natural circulation driven by density difference in drums and risers up to about 160 bar, forced circulation beyond, and the Benson once-through design dispensing with the drum entirely at supercritical pressure.",
            ],
            bullets: [
              "Fire tube (Cochran, Lancashire, locomotive): gas in tubes, water in one shell; about 15-20 bar, small steam rate, cheap and compact.",
              "Water tube (Babcock-Wilcox, La Mont, Benson): water in tubes, gas outside; high pressure and rate, fast steaming, safer failure mode.",
              "Mountings (mandatory): water gauge, pressure gauge, safety valve, fusible plug, steam stop valve, feed check valve, blowdown valve.",
              "Accessories (efficiency): economiser, air preheater, superheater - each a few percent of fuel, together the difference between 70 and 90%+ plants.",
              "Equivalent evaporation = actual evaporation x factor of evaporation, with factor = (h_steam - h_feed)/2257.",
            ],
            table: {
              caption: "Boiler mountings and accessories: function and location.",
              headers: ["Item", "Class", "Function", "Location"],
              rows: [
                ["Water-level indicator", "Mounting", "Shows drum water level", "Front of the drum"],
                ["Pressure gauge", "Mounting", "Reads steam pressure", "Drum, via a siphon"],
                ["Safety valve", "Mounting", "Blows off excess steam", "Steam space of the drum"],
                ["Fusible plug", "Mounting", "Melts at low water, quenches fire", "Above the furnace crown"],
                ["Steam stop valve", "Mounting", "Regulates/isolates the main steam line", "On the steam outlet"],
                ["Feed check valve", "Mounting", "Admits feedwater, blocks backflow", "Feedwater inlet"],
                ["Blowdown valve", "Mounting", "Purges sediment and sludge", "Lowest point of the shell"],
                ["Economiser", "Accessory", "Preheats feedwater with flue gas", "In the flue gas path"],
                ["Air preheater", "Accessory", "Warms combustion air", "After the economiser"],
                ["Superheater", "Accessory", "Raises steam above saturation", "In the hottest gas zone"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Fire tube versus water tube",
              caption:
                "One question, two sketches - which fluid is inside the tubes decides everything else.",
              left: {
                heading: "Fire tube",
                items: [
                  "Hot gas inside the tubes",
                  "One big water shell: 15-20 bar ceiling",
                  "Cochran, Lancashire, locomotive",
                  "Slow to raise steam, large stored energy",
                  "Duty: process steam, small plants",
                ],
              },
              right: {
                heading: "Water tube",
                items: [
                  "Water and steam inside the tubes",
                  "100 bar and beyond, supercritical possible",
                  "Babcock-Wilcox, La Mont, Benson",
                  "Fast steaming, small water inventory",
                  "Duty: power stations, big process loads",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Mountings vs accessories: the defining sentence",
              body: "Mountings are fitted for safe operation and are mandatory by law; accessories are fitted for higher efficiency and are optional. Open any boiler answer with that sentence, then the seven mountings with one function each - the one-mark-per-item structure of this question is the easiest seven in Unit V.",
            },
            keyTerms: [
              { term: "Boiler mounting", definition: "A mandatory fitting for safe operation: water gauge, pressure gauge, safety valve, fusible plug, stop valve, feed check, blowdown." },
              { term: "Fire-tube boiler", definition: "A boiler in which combustion gases pass through tubes surrounded by water in a single shell; low pressure, small capacity." },
              { term: "Equivalent evaporation", definition: "Evaporation from and at 100 deg C per kg of fuel: actual evaporation times (h_steam - h_feed)/2257." },
            ],
            examQuestions: [
              {
                q: "Differentiate between fire-tube and water-tube boilers with one example and sketch of each, stating pressure and capacity limits. List the essential mountings with the function of each and name two accessories with their effect on efficiency.",
                marks: 7,
                outline: [
                  "Fire tube: gas in tubes, water in shell; Cochran/Lancashire; 15-20 bar; sketch.",
                  "Water tube: water in tubes, gas outside; Babcock-Wilcox; 100+ bar; sketch.",
                  "Compare pressure, capacity, steam-raising speed, safety and application in a table.",
                  "Mountings: water gauge, pressure gauge, safety valve, fusible plug, steam stop valve, feed check valve, blowdown valve - one function each.",
                  "Mountings are mandatory for safety; accessories are optional.",
                  "Accessories: economiser (feedwater preheat) and air preheater (about 1% fuel per 20 K).",
                  "Conclude with equivalent evaporation as the performance yardstick.",
                ],
              },
              {
                q: "State the function of a fusible plug and where it is fitted.",
                marks: 2,
              },
              {
                q: "Name the boiler associated with supercritical once-through operation and its key structural difference from drum boilers.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Steam turbines: impulse and reaction",
            body: [
              "A steam turbine turns enthalpy into shaft work through alternating nozzles and blades. In the impulse turbine (de Laval, Rateau, Curtis) all the pressure drop happens in the fixed nozzles: steam leaves as a high-velocity jet that the moving buckets deflect at essentially constant pressure, and the rotor is driven purely by momentum change. In the reaction turbine (Parsons) the pressure drop is shared between fixed and moving blades, both shaped as nozzles - the degree of reaction is typically 0.5 - so the steam accelerates through the moving blades too, and admission is full-circle rather than partial.",
              "The velocity triangles carry the analysis: absolute velocity V, blade velocity u = pi D N/60, relative velocity Vr, and the work per stage m u (V_w1 - V_w2) from the whirl components. For a simple impulse stage the utilization factor peaks at cos(alpha) when u/V1 = cos(alpha)/2 - a de Laval stage's jet can reach 1000 m/s while blades manage only about 300-400 m/s, so a single impulse stage wastes most of its kinetic energy. Compounding fixes this: velocity compounding (Curtis) passes one jet through two or three moving rows with fixed guide blades between; pressure compounding (Rateau) splits the pressure drop across many nozzle-plus-row stages, each running near its optimum ratio.",
              "Real turbines pay a tax of losses: nozzle and blade friction, leakage past blade tips and labyrinths, disc and windage friction, moisture loss when the expansion crosses the saturation line (droplets below about x = 0.88 erode blades - reheat, from Unit II, exists for this), leaving loss in the exit kinetic energy, and mechanical losses in bearings and gearing. Internal isentropic efficiency of large turbines runs 85 to 92%. Governing matches output to load - throttle control chokes all steam, nozzle-group control opens banks of nozzles, and bypass governing floods an overloaded machine - the control question that pairs with the turbine question on many papers.",
            ],
            bullets: [
              "Impulse: all pressure drop in fixed nozzles, buckets deflect at constant pressure; reaction: drop shared 50/50, moving blades are nozzles too.",
              "Velocity triangles: work per stage = m u (V_w1 - V_w2); optimum impulse ratio u/V1 = cos(alpha)/2.",
              "Single impulse stage wastes kinetic energy (jet about 1000 m/s vs blade about 300-400 m/s) - hence compounding.",
              "Velocity compounding (Curtis): one jet, several moving rows; pressure compounding (Rateau): many small stages.",
              "Moisture below x = 0.88 erodes blades - reheat exists largely to prevent it; internal efficiency 85-92%.",
            ],
            table: {
              caption: "Impulse versus reaction steam turbines.",
              headers: ["Parameter", "Impulse", "Reaction"],
              rows: [
                ["Pressure drop location", "Entirely in fixed nozzles", "Shared between fixed and moving blades"],
                ["Degree of reaction", "0", "About 0.5"],
                ["Moving-blade shape", "Symmetrical buckets", "Nozzle-shaped aerofoils"],
                ["Admission", "Partial", "Full circumference"],
                ["Compounding", "Velocity (Curtis) or pressure (Rateau)", "Many small Parsons stages"],
                ["Relative velocity in rotor", "Falls (friction only)", "Rises (nozzle action)"],
                ["Stage count / length", "Fewer, shorter", "Many, longer, more efficient"],
                ["Named examples", "de Laval, Curtis, Rateau", "Parsons, reaction HP/LP stages"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the staging for 40-bar steam",
              caption:
                "Three of the four branches are legitimate machines; the single-stage one is the trap.",
              start: "Steam arrives at 40 bar and must leave as shaft work. How do you stage it?",
              branches: [
                {
                  label: "Pressure-compounded impulse (Rateau)",
                  outcome: "each stage near optimum u/V1; high efficiency over many stages",
                  good: true,
                },
                {
                  label: "Velocity-compounded impulse (Curtis)",
                  outcome: "compact and cheap first stage; lower efficiency, popular for small power and governing",
                  good: true,
                },
                {
                  label: "50% reaction (Parsons)",
                  outcome: "uniform stages, full admission, best per-stage efficiency - a longer machine",
                  good: true,
                },
                {
                  label: "Single impulse stage, no compounding",
                  outcome: "jet near 1000 m/s against 300 m/s blades - most of the kinetic energy leaves with the steam",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Velocity triangles before prose",
              body: "Every turbine question begins with inlet and outlet velocity triangles sharing the common blade-velocity line u. Draw them, mark V1, Vr1, alpha and beta, then write w = m u (V_w1 + V_w2). The triangles are worth marks on their own and prevent the sign errors that ruin the arithmetic.",
            },
            keyTerms: [
              { term: "Degree of reaction", definition: "The fraction of the stage enthalpy drop occurring in the moving blades: zero for impulse, about 0.5 for Parsons stages." },
              { term: "Compounding", definition: "Staging a turbine - by pressure (Rateau) or velocity (Curtis) - so each stage runs near its optimum blade-speed ratio." },
              { term: "Utilization factor", definition: "Fraction of available kinetic energy converted to work in a stage; peaks at cos(alpha) for the ideal impulse stage." },
            ],
            examQuestions: [
              {
                q: "Differentiate between impulse and reaction steam turbines with velocity triangles, explaining velocity compounding (Curtis) and pressure compounding (Rateau). Derive the optimum blade-speed ratio for a simple impulse stage and state why compounding is necessary for high-pressure steam.",
                marks: 7,
                outline: [
                  "Impulse: all drop in nozzles, constant-pressure buckets; sketch triangles.",
                  "Reaction: 50% drop in moving blades, nozzle-shaped aerofoils; sketch triangles.",
                  "Work = m u (V_w1 + V_w2) from the whirl components.",
                  "For simple impulse, utilization = 2 u (V_w1 + V_w2)/V1^2; maximize to get u/V1 = cos(alpha)/2.",
                  "Numbers: jet about 1000 m/s, blades about 300-400 m/s - a single stage wastes most energy.",
                  "Curtis: one nozzle, two or three moving rows with fixed guides.",
                  "Rateau: many nozzle-plus-row stages, each at optimum; Parsons reaction as the efficient long alternative.",
                ],
              },
              {
                q: "Define degree of reaction and give its value for a Parsons stage.",
                marks: 2,
              },
              {
                q: "Why does wet steam below a dryness fraction of about 0.88 damage turbine blades, and which cycle modification prevents it?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Condensers and cooling towers",
            body: [
              "The condenser is where the Rankine cycle's low end is set: condensing at 0.05 to 0.1 bar (saturation 33 to 46 deg C) gives the turbine its largest expansion and the cycle its efficiency. Surface condensers keep steam and cooling water separate - steam condenses on the outside of tubes carrying water - so the condensate returns as clean boiler feed; jet condensers mix the two, cheaper but losing the condensate. Air is the enemy: it leaks in and, by Dalton's law, its partial pressure raises the condenser back-pressure while blanketing tubes with an insulating film, so a vacuum pump or steam ejector continuously extracts air at the coldest point of the condenser.",
              "Cooling towers reject the condenser's heat to the atmosphere by evaporation - a few percent of the circulating water carries away the latent heat of the rest. Natural-draught towers (the hyperbolic landmarks) use buoyancy; forced- and induced-draught towers use fans. Water rains over fill (splash or film packing) against an upward air stream, drift eliminators catch entrained droplets, and the cold sump collects the chilled water. Performance vocabulary: range = hot water minus cold water temperature; approach = cold water minus ambient wet-bulb; effectiveness = range/(range + approach); a tower that delivers 31 deg C water against a 27 deg C WBT with a 9 K range runs at 9/13 = 69%.",
              "The water balance closes the design: evaporation takes roughly 1% of circulation per 5.5 K of range (about 1.46 kg/s for the 3.5 MW worked example), drift escapes about 0.1-0.25% even with eliminators, and blowdown purges the salts that evaporation leaves behind, with cycles of concentration (about 4) fixing the blowdown rate by solids balance. Makeup = evaporation + drift + blowdown, about 1.9 kg/s in the example - and every kelvin shaved off the approach lowers the condenser pressure, returning turbine work worth far more than the fan and pump power the tower consumes.",
            ],
            bullets: [
              "Condenser duty: hold 0.05-0.1 bar at the turbine exhaust; surface condensers return clean feed, jet condensers lose it.",
              "Air is extracted at the coldest point: it raises back-pressure by its partial pressure and blankets tubes - vacuum pump or steam ejector.",
              "Tower terms: range = hot minus cold water; approach = cold water minus WBT; effectiveness = range/(range + approach).",
              "Evaporation loss about 1% of circulation per 5.5 K of range; drift 0.1-0.25% with eliminators.",
              "Cycles of concentration (about 4) fix blowdown; makeup = evaporation + drift + blowdown - about 1.9 kg/s in the 3.5 MW example.",
            ],
            codeExample: {
              language: "python",
              caption: "Cooling-tower water balance for a 3.5 MW condenser duty",
              code: `# Hot water in at 40 deg C, cold water out at 31 deg C, WBT 27 deg C.
q_kw = 3500.0          # condenser heat rejected
range_k = 9.0          # hot - cold water
cp_w = 4.186

circulation = q_kw / (cp_w * range_k)     # kg/s
evaporation = q_kw / 2400.0               # latent heat near 35 deg C
drift = 0.002 * circulation               # 0.2% with eliminators
cycles = 4

# Solids balance: blowdown + drift = evaporation / (cycles - 1)
blowdown = evaporation / (cycles - 1) - drift
makeup = evaporation + drift + blowdown

approach = 31.0 - 27.0
effectiveness = range_k / (range_k + approach)

print(f"circulation  {circulation:.1f} kg/s")
print(f"evaporation  {evaporation:.2f} kg/s "
      f"({100 * evaporation / circulation:.1f} percent of flow)")
print(f"drift {drift:.3f}, blowdown {blowdown:.2f}, makeup {makeup:.2f} kg/s")
print(f"approach {approach:.0f} K, effectiveness {effectiveness * 100:.0f} percent")
`,
            },
            diagram: {
              kind: "cycle",
              title: "The cooling-tower water loop",
              caption:
                "The plant's cold end as one closed loop - the only water that leaves is the evaporated fraction plus purge.",
              steps: [
                { label: "Condenser hot outlet", note: "40 deg C water to the tower" },
                { label: "Distribution and spray", note: "spreads water over the fill" },
                { label: "Fill packing", note: "thin films meet rising air; evaporation cools the rest" },
                { label: "Drift eliminators", note: "catch entrained droplets" },
                { label: "Cold basin", note: "31 deg C back to the condenser" },
                { label: "Makeup and blowdown", note: "replace evaporation, purge salts" },
              ],
            },
            callout: {
              type: "tip",
              title: "The four numbers of every cooling tower question",
              body: "Range, approach, effectiveness and cycles of concentration - define all four in symbols at the start, then compute. Approach is measured against the wet-bulb, never the dry-bulb; that single distinction is the most common mark-loser in Unit V's short questions.",
            },
            keyTerms: [
              { term: "Surface condenser", definition: "A condenser keeping steam and cooling water separate so condensate returns as boiler feed; needs continuous air extraction." },
              { term: "Cooling tower approach", definition: "Cold-water temperature minus ambient wet-bulb temperature - the tower's quality metric." },
              { term: "Cycles of concentration", definition: "Ratio of dissolved solids in circulating water to those in makeup; fixes the blowdown rate by solids balance." },
            ],
            examQuestions: [
              {
                q: "Explain a surface condenser with a sketch: why a vacuum is maintained, how and where air is removed, and define vacuum efficiency. Then explain a cooling tower with range, approach and effectiveness, and work the water balance for a 3.5 MW duty with 9 K range, 0.2% drift and 4 cycles of concentration.",
                marks: 7,
                outline: [
                  "Sketch: shell, tube nest, hotwell, air extraction point at the coldest corner.",
                  "Vacuum lowers turbine exhaust pressure, raising work; 0.05-0.1 bar typical.",
                  "Air raises back-pressure by partial pressure and blankets tubes - ejector or vacuum pump at the coldest point.",
                  "Vacuum efficiency = actual vacuum / maximum obtainable vacuum at the cooling-water inlet temperature.",
                  "Tower: range = 9 K, approach = cold water - WBT; effectiveness = range/(range + approach).",
                  "Evaporation = 3500/2400 = 1.46 kg/s; drift 0.19 kg/s; blowdown = 1.46/3 - 0.19 = 0.30 kg/s.",
                  "Makeup = 1.46 + 0.19 + 0.30 = 1.95 kg/s; circulation = 3500/(4.186 x 9) = 93 kg/s.",
                ],
              },
              {
                q: "Define approach and range for a cooling tower, and state which ambient temperature the approach is measured against.",
                marks: 2,
              },
              {
                q: "Why must air be continuously removed from a surface condenser?",
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
        "RGPV ME-601 papers typically spread 70-80 of the marks across the Rankine and air-standard cycle numericals, psychrometry, nozzle and shock analysis, and the heat exchanger methods, with boilers and plant equipment supplying the sketch-and-label long questions. Allocate revision time in roughly the same ratio and keep one full numerical practice slot per heavy unit.",
      ],
      weightedTopics: [
        { topic: "Rankine cycle with reheat and regeneration (numerical)", weight: "10-14 marks", note: "Near-annual; the steam-table trail and the (1 - y) bookkeeping are half the marks." },
        { topic: "Psychrometric properties and chart processes", weight: "8-12 marks", note: "Carrier-equation numericals plus the six-process chart sketch recur every session." },
        { topic: "VCRS on the P-h chart: COP, mass flow, subcooling and superheat", weight: "8-12 marks", note: "One full numerical almost every paper; draw the dome first." },
        { topic: "Isentropic nozzle flow, area-Mach and choking", weight: "8-12 marks", note: "A/A* values and the choked mass flux are formula-stable, fast marks." },
        { topic: "Normal shock relations", weight: "7-10 marks", note: "Derivation plus the property-jump table; quote the M1 = 2 row from memory." },
        { topic: "Otto, Diesel, Dual comparison on both bases", weight: "8-10 marks", note: "Two T-s sketches and two rankings - state the basis before writing the order." },
        { topic: "Brayton with regeneration, reheat and intercooling", weight: "8-10 marks", note: "The paired-improvement discussion question; rp_opt = (T3/T1)^0.875 anchors it." },
        { topic: "LMTD and NTU-effectiveness numericals", weight: "7-10 marks", note: "One of the two appears nearly every year; pairing the temperature differences correctly is everything." },
        { topic: "Boilers: fire vs water tube, mountings and accessories", weight: "6-8 marks", note: "Two labelled sketches plus the seven mountings with one function each." },
        { topic: "Steam turbines, condensers and cooling towers", weight: "6-8 marks", note: "Velocity triangles, compounding and the four tower numbers (range, approach, effectiveness, cycles)." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the final week for full-paper practice under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - air-standard cycles", tasks: ["Derive Otto, Diesel and Dual efficiencies; solve three MEP numericals", "Write both comparison rankings with T-s sketches from memory", "Run the Diesel cut-off and Brayton sweep scripts once each"] },
        { week: "Week 2", focus: "Unit I - gas turbines + Unit II start", tasks: ["Brayton efficiency and specific work; back work ratio discussion", "Regeneration, intercooling, reheat: the paired-improvement answer", "Begin Rankine: state table for 40 bar / 400 deg C end to end"] },
        { week: "Week 3", focus: "Unit II - steam and refrigeration", tasks: ["Reheat + one open FWH numerical with the (1 - y) factors", "VCRS P-h walk, COP and tonnage; subcooling/superheat effects", "Absorption systems: both fluid pairs, read once for the sketches"] },
        { week: "Week 4", focus: "Unit III - psychrometry", tasks: ["Carrier-equation numericals (three, blind)", "All chart processes plus mixing drawn on the empty skeleton", "Summer and winter plant walkthroughs; the office cooling-load estimate"] },
        { week: "Week 5", focus: "Unit IV - gas dynamics", tasks: ["Stagnation table and 0.5283 derivations; Mach cone sketch", "Area-Mach and choked flux numericals; the six nozzle regimes", "Normal shock relations and the M1 = 2 row by heart"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["LMTD parallel-vs-counter and eps-NTU numericals; fouling effect", "Boiler sketches, mountings list, turbine triangles, tower balance", "Two full past papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours before the paper",
      body: [
        "The final day is for consolidating sketches, formulas and rankings - not for reading new theory. Work through these six items in order and stop.",
      ],
      bullets: [
        "Redraw from memory: Rankine T-s with reheat and one FWH, the VCRS P-h loop, the empty psychrometric chart with all six processes, the C-D nozzle regime map, and the counterflow LMTD terminal sketch - these five cover half the paper.",
        "Recite the formula spine: Otto, Diesel, Brayton and Rankine efficiencies; COP; W = 0.622 pv/(pt - pv); T0/T and A/A*; p2/p1 and p02/p01; LMTD and eps-NTU.",
        "Rehearse the rankings: Otto > Dual > Diesel at the same r, reversed at the same peak pressure; counterflow beats parallel flow; regeneration pays only while T4 > T2.",
        "Walk one full numerical per heavy unit: Rankine with the open heater, VCRS with 10 K subcooling, nozzle A/A* with choked flux, LMTD parallel versus counter.",
        "Skim every 7-mark outline in this file once - the outlines are the answer skeletons.",
        "Sleep: the chart and velocity-triangle sketches need a rested hand.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Open every long answer with the labelled sketch - PV and T-s, P-h, psychrometric chart, nozzle, velocity triangles - the diagram earns marks before any prose is read.",
        "Numericals: formula, substitution with units, then computation. Bar-to-kPa, kJ-to-J and rpm conversions sink more marks than the physics does.",
        "For any comparison question, declare the basis first - same compression ratio or same peak pressure, parallel or counterflow - because the ranking depends on it.",
        "Steam-table readings: name the table (saturation or superheat) and show the interpolation line for method marks, even when the arithmetic later slips.",
        "Budget about 15 minutes per 7-mark question and 5 per short; keep the last 10 minutes for labelling diagrams and checking units.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Quoting Otto over Diesel when the question fixed peak pressure - the ranking flips with the comparison basis; always state it.",
        "Writing T4 = T3 / r^(gamma-1) in the Diesel cycle - expansion starts at v3, so T4 = T3 (rc/r)^(gamma-1).",
        "Dropping the (1 - y) factor after an extraction - low-pressure turbine work, reheater heat and condenser load all carry it.",
        "Treating the throttle as isentropic on the P-h chart - it is the vertical constant-enthalpy line; only compression is isentropic.",
        "Evaluating pg in RH = pv/pg at the wet-bulb temperature - it belongs at the dry-bulb; pw in the Carrier equation belongs at the wet-bulb.",
        "Assuming nozzle mass flow keeps rising as back pressure falls - once the throat runs sonic at 0.5283 p0, the flow is frozen at its choked value.",
        "Pairing temperatures the wrong way in counterflow LMTD - subtract hot-in minus cold-out at one end and hot-out minus cold-in at the other.",
      ],
    },
  ],
};
