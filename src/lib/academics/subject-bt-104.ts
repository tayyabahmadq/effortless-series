/**
 * Academics - RGPV First-Year Common subject: BT-104 Basic Electrical & Electronics.
 *
 * Five units span DC circuits, AC circuits, magnetic circuits and transformers,
 * electrical machines and installations, and electronics fundamentals. Every
 * section pairs the theory with a worked numerical and three exam-style
 * questions (one 7-mark with outline + two short questions) that the student
 * can reproduce in the exam hall.
 */

import type { AcademicSubject } from "./types";

export const bt104: AcademicSubject = {
  id: "bt-104",
  code: "BT-104",
  title: "Basic Electrical & Electronics",
  semester: "I Semester",
  program: "RGPV · First Year Common (all B.Tech branches)",
  tagline:
    "The complete visual guide to BT-104: DC circuits, AC circuits, magnetic circuits and transformers, electrical machines and installations, electronics fundamentals - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units span the whole of first-year electrical and electronics engineering. Unit I builds DC circuit analysis from Ohm's law through Kirchhoff's laws to Thevenin and Norton equivalents. Unit II moves to AC: phasors, impedance, resonance, power factor correction and three-phase basics. Unit III studies magnetic circuits and transformers with the EMF equation, equivalent circuit and efficiency. Unit IV surveys DC and induction motors, domestic wiring, earthing and safety devices. Unit V closes with semiconductor devices, rectifiers, op-amps and digital logic gates. Each section pairs the theory with a worked numerical and exam-style questions.",
  accentColor: "#fb923c",
  emoji: "EE",
  unitCount: 5,
  totalSections: 31,
  units: [
    // =================================================================
    // UNIT I - DC CIRCUITS
    // =================================================================
    {
      number: 1,
      roman: "I",
      title: "DC Circuits",
      summary:
        "Unit I builds the language of DC circuit analysis: charge, current, voltage, power and energy; Ohm's law; Kirchhoff's voltage and current laws; series and parallel resistor combinations; mesh and nodal analysis; source transformation and star-delta conversion; Thevenin's and Norton's theorems; and maximum power transfer. Every technique ends with a worked numerical the student can reproduce.",
      chapter: {
        number: "01",
        title: "DC Circuit Analysis",
        intro:
          "Unit I lays the foundation of circuit theory. Starting from charge, current, voltage, power and energy with Ohm's law, the chapter develops Kirchhoff's voltage and current laws, series-parallel resistor reduction, mesh and nodal analysis, source transformation, star-delta conversion, Thevenin's and Norton's theorems, and maximum power transfer - each technique ending with a worked numerical.",
        inOneBreath:
          "Charge Q (C), current I = dQ/dt (A), voltage V = W/Q (V), power P = V I (W), energy W = P t (J); Ohm's law V = I R for linear resistors; KCL sums currents at a node to zero, KVL sums voltages around a loop to zero; series resistors add, parallel conductances add; mesh writes KVL per loop, nodal writes KCL per node; source transformation swaps a V-source with series R for an I-source with parallel R; star-delta converts three-terminal resistor networks; Thevenin reduces any linear two-terminal network to V_th in series with R_th, Norton to I_N in parallel with R_N; maximum power transfer occurs when R_load = R_th, giving P_max = V_th^2 / (4 R_th).",
        sections: [
          // --- 1.1 ---
          {
            number: "1.1",
            title: "Charge, current, voltage, power, energy and Ohm's law",
            body: [
              "Electric charge Q, measured in coulombs, is the fundamental quantity of electricity; one electron carries approximately -1.6 x 10^-19 C. Current I = dQ/dt is the rate of flow of charge, measured in amperes where 1 A equals 1 C per second. Voltage V, measured in volts, is the work done per unit charge to move it between two points: V = W/Q, so 1 V = 1 J/C. In conventional current we assume positive charge flows from higher potential to lower, opposite to the actual electron drift. These three quantities anchor every circuit law that follows.",
              "Power P = V x I, measured in watts, is the rate of energy transfer; one watt is one joule per second. Energy W = P x t = V x I x t, measured in joules or commercially in kilowatt-hours where 1 kWh equals 3.6 x 10^6 J. Ohm's law states V = I R for a linear resistor: the voltage across an ideal resistor equals the current through it times its resistance R in ohms. Resistance arises from collisions between drifting electrons and the lattice ions, converting electrical energy into heat at the rate I^2 R - the basis of every heating element, lamp filament and current-limiting resistor.",
              "A worked numerical pins the definitions. A 12 V battery drives a 6 ohm resistor. By Ohm's law I = V/R = 12/6 = 2 A. Power dissipated P = V I = 12 x 2 = 24 W, equivalently I^2 R = 4 x 6 = 24 W or V^2/R = 144/6 = 24 W - all three formulas agree, a useful cross-check. Energy used in 30 minutes (0.5 h) is 24 W x 0.5 h = 12 Wh = 0.012 kWh. At Rs 8 per unit the cost is roughly 10 paise, which shows why even small loads add up over days of operation.",
              "Ohm's law is not universal: it applies only to linear (ohmic) materials. Diodes, varistors and incandescent lamps at start-up are non-ohmic, with V-I curves that bend. Resistance also depends on temperature: for metals R = R0 (1 + alpha (T - T0)) with alpha approximately 0.004 per degree for copper. Engineers exploit this temperature dependence in RTD sensors and fight it in precision instruments by using manganin (alpha near zero). Treat Ohm's law as a model with a defined domain, not a law of nature, and the exceptions become predictable rather than surprising.",
            ],
            bullets: [
              "Charge Q in coulombs; one electron carries -1.6 x 10^-19 C.",
              "Current I = dQ/dt in amperes; 1 A = 1 C/s by definition.",
              "Voltage V = W/Q in volts; 1 V = 1 J/C, the work per unit charge.",
              "Power P = V I = I^2 R = V^2/R in watts; energy W = V I t in joules.",
              "Ohm's law V = I R holds only for linear ohmic materials at fixed temperature.",
              "Resistance varies with temperature: R = R0 (1 + alpha (T - T0)).",
              "Commercial energy unit: 1 kWh = 3.6 x 10^6 J; bills price per kWh.",
            ],
            codeExample: {
              language: "python",
              caption: "Ohm's law and power calculator for a DC resistor",
              code: `def resistor_power(v, r, hours=0):
    i = v / r
    p = v * i
    return i, p, p * hours

i, p, e = resistor_power(v=12, r=6, hours=0.5)
print("current =", i, "A")
print("power =", p, "W")
print("energy =", e, "Wh")
# current = 2.0 A, power = 24.0 W, energy = 12.0 Wh`,
            },
            diagram: {
              kind: "flow",
              title: "From charge to energy - the spine of circuit theory",
              caption:
                "Each quantity feeds the next; voltage pushes current, their product is power, integrated over time gives energy.",
              steps: [
                { label: "Charge Q", note: "coulombs; the raw material" },
                { label: "Current I = dQ/dt", note: "rate of flow, amperes" },
                { label: "Voltage V = W/Q", note: "electrical push, volts" },
                { label: "Power P = V I", note: "watts; rate of transfer" },
                { label: "Energy W = P t", note: "joules or kilowatt-hours" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise the three power formulas",
              body: "P = V I, P = I^2 R and P = V^2/R are mutually equivalent only for a pure resistor. When the load has reactance, only P = V I cos(phi) survives; the I^2 R form still gives real power loss in the resistance, but V^2/R overestimates because V there is the resistor voltage, not the terminal voltage.",
            },
            keyTerms: [
              { term: "Charge", definition: "The quantity of electricity in coulombs; one electron carries -1.6 x 10^-19 C." },
              { term: "Current", definition: "Rate of flow of charge I = dQ/dt, measured in amperes (1 A = 1 C/s)." },
              { term: "Voltage", definition: "Work done per unit charge between two points V = W/Q, measured in volts." },
              { term: "Power", definition: "Rate of energy transfer P = V I, measured in watts (1 W = 1 J/s)." },
              { term: "Ohm's law", definition: "V = I R for a linear resistor with R in ohms; holds only for ohmic materials." },
            ],
            examQuestions: [
              {
                q: "Define charge, current, voltage, power and energy with SI units. State Ohm's law and derive the three equivalent expressions for power dissipated in a resistor. A 12 V battery drives a 6 ohm resistor for 30 minutes; find the current, power and energy consumed.",
                marks: 7,
                outline: [
                  "Define Q (C), I = dQ/dt (A), V = W/Q (V), P = V I (W), W = P t (J).",
                  "State Ohm's law V = I R with its domain (linear ohmic materials only).",
                  "Derive P = I^2 R by substituting V = I R into P = V I; derive P = V^2/R by eliminating I.",
                  "Compute I = 12/6 = 2 A from Ohm's law.",
                  "Compute P = 12 x 2 = 24 W; cross-check I^2 R = 4 x 6 = 24 W and V^2/R = 144/6 = 24 W.",
                  "Energy = 24 W x 1800 s = 43 200 J = 12 Wh = 0.012 kWh.",
                  "Note commercial billing at Rs 8/unit gives approximately Rs 0.10 for this period.",
                ],
              },
              {
                q: "A 100 W, 220 V bulb is switched on for 4 hours. Find the energy consumed in kWh and the current drawn.",
                marks: 3,
              },
              {
                q: "Convert 5 kWh into joules.",
                marks: 2,
              },
            ],
          },
          // --- 1.2 ---
          {
            number: "1.2",
            title: "Kirchhoff's voltage and current laws",
            body: [
              "Kirchhoff's current law (KCL) states that the algebraic sum of currents entering a node is zero: the sum of currents in equals the sum of currents out. It expresses conservation of charge - no charge accumulates at an ideal node. Kirchhoff's voltage law (KVL) states that the algebraic sum of voltages around any closed loop is zero, expressing conservation of energy: the energy gained from sources equals the energy lost in the passive elements. Together these two laws underwrite every circuit analysis method from mesh and nodal analysis to Thevenin reduction.",
              "Worked example. Consider a node where three branches meet: a 5 A source feeds in, a 2 A current leaves through one branch, and an unknown current I leaves through a third. By KCL, 5 = 2 + I, so I = 3 A outward. For KVL, take a single loop with a 12 V battery and two resistors of 4 ohm and 2 ohm in series. The current is the same everywhere: I = 12 / (4 + 2) = 2 A. Walking the loop clockwise: +12 - (4)(2) - (2)(2) = 12 - 8 - 4 = 0, which checks exactly. The battery's rise is consumed by the two resistor drops.",
              "Sign conventions matter. For KCL, take currents entering the node as positive and leaving as negative (or vice versa, but stay consistent). For KVL, walk the loop in one chosen direction; a voltage rise from a battery (negative to positive terminal in the walk direction) is positive, a drop across a resistor in the direction of current is negative. Equivalently, a resistor's voltage is +I R if you walk against the assumed current and -I R if you walk with it. Sticking to one convention - and writing it down at the top of the answer - prevents most sign errors that cost exam marks.",
              "KCL and KVL hold for any lumped circuit regardless of element type - linear or nonlinear, AC or DC, with or without sources. They fail only when the circuit's physical dimensions approach the wavelength of the signal, where distributed-element (transmission-line) theory takes over. In first-year problems the lumped assumption is always safe. The two laws are the axioms of circuit theory: every later theorem (Thevenin, Norton, superposition, maximum power) is derived from them, so the time spent drilling node and loop equations pays back through the rest of the syllabus.",
            ],
            bullets: [
              "KCL: algebraic sum of currents at a node is zero - conservation of charge.",
              "KVL: algebraic sum of voltages around a closed loop is zero - conservation of energy.",
              "KCL sign convention: currents in positive, currents out negative (stay consistent).",
              "KVL sign convention: voltage rises positive, voltage drops negative, walking one direction.",
              "Resistor drop walking with current: -I R; against current: +I R.",
              "KCL and KVL hold for any lumped circuit (linear, nonlinear, AC, DC).",
              "Distributed-element theory is needed only when circuit size approaches the signal wavelength.",
            ],
            table: {
              caption: "Sign conventions and scope for KCL and KVL.",
              headers: ["Law", "Scope", "Sign rule", "Conservation principle"],
              rows: [
                ["KCL", "node", "in +, out -", "charge"],
                ["KVL", "loop", "rise +, drop -", "energy"],
                ["Both", "lumped circuits", "stay consistent", "axioms of circuit theory"],
                ["Mesh analysis", "loop current", "KVL per loop", "derived from KVL"],
                ["Nodal analysis", "node voltage", "KCL per node", "derived from KCL"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "KCL at a node vs KVL around a loop",
              caption:
                "Two conservation laws, two scopes - one for the junction, one for the loop.",
              left: {
                heading: "KCL (node)",
                items: [
                  "Conservation of charge",
                  "Sum of currents in = sum out",
                  "Applies at every junction",
                  "Powers nodal analysis",
                  "Currents in amperes",
                ],
              },
              right: {
                heading: "KVL (loop)",
                items: [
                  "Conservation of energy",
                  "Sum of voltages around loop = 0",
                  "Applies around any closed path",
                  "Powers mesh analysis",
                  "Voltages in volts",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Sign conventions lose more marks than wrong algebra",
              body: "Pick one convention at the top of the answer (e.g. 'clockwise KVL, voltage rises positive') and stick to it for every loop. If a current comes out negative, that is fine - it just means the assumed direction was wrong. Do not flip signs mid-solution; a consistent sign convention is worth more marks than a clever shortcut.",
            },
            keyTerms: [
              { term: "Node", definition: "A junction of two or more circuit elements; KCL applies at every node." },
              { term: "Loop", definition: "Any closed path through circuit elements; KVL applies around any loop." },
              { term: "KCL", definition: "Algebraic sum of currents entering a node equals zero - conservation of charge." },
              { term: "KVL", definition: "Algebraic sum of voltages around any closed loop equals zero - conservation of energy." },
              { term: "Lumped circuit", definition: "A circuit small enough that voltage and current are well-defined at every point; required for KCL and KVL." },
            ],
            examQuestions: [
              {
                q: "State Kirchhoff's current law and Kirchhoff's voltage law, explaining the conservation principle each expresses. For a node with 5 A entering and 2 A leaving through one branch, find the current in the third branch. For a single-loop circuit with a 12 V source and 4 ohm, 2 ohm resistors in series, write the KVL equation and solve for the current.",
                marks: 7,
                outline: [
                  "State KCL: sum of currents at a node is zero (conservation of charge).",
                  "State KVL: sum of voltages around a closed loop is zero (conservation of energy).",
                  "KCL example: 5 = 2 + I, so I = 3 A outward from the node.",
                  "Draw the single-loop circuit and label the assumed current direction.",
                  "KVL clockwise: +12 - 4I - 2I = 0, i.e. 6I = 12.",
                  "Solve: I = 2 A; verify drops 4 x 2 = 8 V and 2 x 2 = 4 V sum to 12 V.",
                  "Cross-check by Ohm's law: I = V/(R1 + R2) = 12/6 = 2 A.",
                ],
              },
              {
                q: "Distinguish between a node and a loop in a circuit. State which Kirchhoff law applies to each.",
                marks: 3,
              },
              {
                q: "State the sign convention you would adopt for KVL in a clockwise direction around a loop containing a battery and two resistors in series.",
                marks: 2,
              },
            ],
          },
          // --- 1.3 ---
          {
            number: "1.3",
            title: "Series and parallel combinations of resistors",
            body: [
              "Resistors in series carry the same current; their equivalent resistance is the sum R_eq = R1 + R2 + R3 + ... because the same current encounters each resistance in turn. Resistors in parallel share the same voltage; their conductances add, so 1/R_eq = 1/R1 + 1/R2 + 1/R3 + ..., or for two resistors R_eq = R1 R2 / (R1 + R2). The series rule increases resistance, the parallel rule decreases it - a useful sanity check. In every combination the total power dissipated equals the sum of the individual powers, conserving energy.",
              "A worked example makes both rules concrete. Three resistors of 10, 20 and 30 ohm are connected in series across a 120 V supply. R_eq = 10 + 20 + 30 = 60 ohm, I = 120/60 = 2 A, and the voltage across the 10 ohm resistor is V = I R = 2 x 10 = 20 V (the voltage divider rule: V_x = V_supply x R_x / R_eq). If the same three resistors are in parallel across 120 V, R_eq = 1/(0.1 + 0.05 + 0.033) = 1/0.183 = 5.47 ohm; the total current is 120/5.47 = 21.9 A. The current through the 10 ohm branch alone is 120/10 = 12 A (the current divider rule).",
              "Voltage and current divider rules are worth memorising. Voltage divider for two series resistors: V1 = V x R1/(R1 + R2) - the larger resistor takes the larger share of the voltage. Current divider for two parallel resistors: I1 = I x R2/(R1 + R2) - the smaller resistor takes the larger share of the current, because conductance (1/R) is what adds in parallel. These two rules solve a large fraction of first-year problems without needing full mesh or nodal equations, and they are the everyday tool of analog circuit design for setting bias voltages and sensor gains.",
              "Network reduction is the systematic application of series-parallel combinations. Identify series pairs (same current) and collapse them; identify parallel pairs (same voltage) and collapse them; repeat until a single R_eq remains. Some networks - bridges and T-structures with no simple series or parallel pair - resist this approach and need star-delta conversion (section 1.5) or mesh-nodal analysis (section 1.4). The exam discipline is to label each reduction step, computing the intermediate R_eq at every stage, so a marker can follow the collapse and award method marks even if the final arithmetic slips.",
            ],
            bullets: [
              "Series resistors carry the same current; R_eq = R1 + R2 + R3 + ...",
              "Parallel resistors share the same voltage; 1/R_eq = 1/R1 + 1/R2 + ...",
              "Two-resistor parallel shortcut: R_eq = R1 R2 / (R1 + R2).",
              "Voltage divider: V1 = V x R1/(R1 + R2) - larger R takes larger V.",
              "Current divider: I1 = I x R2/(R1 + R2) - smaller R takes larger I.",
              "Total power in any combination equals the sum of individual powers.",
              "Networks with no simple series-parallel pair need star-delta or mesh-nodal analysis.",
            ],
            table: {
              caption: "Series vs parallel resistor combinations on 10, 20, 30 ohm at 120 V.",
              headers: ["Property", "Series", "Parallel"],
              rows: [
                ["Same quantity", "current through each", "voltage across each"],
                ["R_eq formula", "R1 + R2 + R3 = 60 ohm", "1/(1/10+1/20+1/30) = 5.47 ohm"],
                ["Total current", "120/60 = 2 A", "120/5.47 = 21.9 A"],
                ["V or I on 10 ohm", "V = 2 x 10 = 20 V", "I = 120/10 = 12 A"],
                ["Power on 10 ohm", "I^2 R = 4 x 10 = 40 W", "V^2/R = 1440 W"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Reducing a series-parallel network step by step",
              caption:
                "Identify, collapse, repeat - label every intermediate R_eq so the marker can follow.",
              stages: [
                { label: "Identify a series or parallel pair", note: "same current or same voltage" },
                { label: "Collapse to one equivalent R", note: "apply the matching formula" },
                { label: "Re-draw the simplified network", note: "label intermediate R_eq" },
                { label: "Repeat until single R_eq", note: "then compute I or V from source" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write the divider formulas by name",
              body: "When you use a voltage or current divider, write 'by the voltage divider rule, V1 = V x R1/(R1+R2)' before substituting numbers. Examiners award method marks for the named rule even if the arithmetic later slips. Bare numerical answers with no rule cited lose a full mark on most rubrics.",
            },
            keyTerms: [
              { term: "Series combination", definition: "Resistors carrying the same current; equivalent resistance is their sum." },
              { term: "Parallel combination", definition: "Resistors sharing the same voltage; equivalent conductance is the sum of individual conductances." },
              { term: "Voltage divider", definition: "Rule giving V across one series resistor as V_supply x R / R_eq." },
              { term: "Current divider", definition: "Rule giving I through one parallel resistor as I_total x R_other / (R1 + R2)." },
              { term: "Network reduction", definition: "Systematic collapse of series-parallel pairs until a single R_eq remains." },
            ],
            examQuestions: [
              {
                q: "Derive the expressions for equivalent resistance of resistors connected in series and in parallel. Three resistors of 10, 20 and 30 ohm are connected in series across a 120 V supply. Find the total current, the voltage across the 10 ohm resistor, and the total power dissipated.",
                marks: 7,
                outline: [
                  "Derive series: same current, V = V1 + V2 + V3 = I(R1+R2+R3), so R_eq = sum.",
                  "Derive parallel: same voltage, I = I1 + I2 + I3 = V(1/R1+1/R2+1/R3), so 1/R_eq = sum of 1/R.",
                  "Series R_eq = 10 + 20 + 30 = 60 ohm.",
                  "Total current I = 120/60 = 2 A.",
                  "Voltage across 10 ohm: V10 = I x 10 = 20 V (also by voltage divider 120 x 10/60 = 20 V).",
                  "Total power P = V I = 120 x 2 = 240 W (cross-check I^2 R_eq = 4 x 60 = 240 W).",
                  "Note: if in parallel, R_eq = 5.47 ohm and total current would be 21.9 A.",
                ],
              },
              {
                q: "State the voltage divider rule and use it to find the voltage across a 4 ohm resistor in series with a 6 ohm resistor across a 100 V supply.",
                marks: 3,
              },
              {
                q: "Find the equivalent resistance of two 10 ohm resistors connected in parallel.",
                marks: 2,
              },
            ],
          },
          // --- 1.4 ---
          {
            number: "1.4",
            title: "Mesh and nodal analysis (worked example)",
            body: [
              "Mesh analysis assigns a clockwise loop current to each independent mesh (window) of a planar circuit, then writes KVL around each mesh. The unknowns are the loop currents, and the number of equations equals the number of meshes. Nodal analysis assigns a voltage to each independent node (relative to a chosen reference/ground), then writes KCL at each node. The unknowns are the node voltages, and the number of equations equals the number of independent nodes minus one. Mesh suits circuits with few loops and many nodes; nodal suits circuits with few nodes and many loops.",
              "Worked mesh example. A two-mesh circuit: mesh 1 has V1 = 10 V source, R1 = 2 ohm in its own branch, and R3 = 6 ohm shared with mesh 2; mesh 2 has V2 = 20 V source, R2 = 4 ohm in its own branch, and the shared R3 = 6 ohm. Assume clockwise loop currents I1 and I2. KVL for mesh 1: 10 - 2 I1 - 6 (I1 - I2) = 0, giving 8 I1 - 6 I2 = 10. KVL for mesh 2: -20 - 4 I2 - 6 (I2 - I1) = 0 (walking clockwise against V2's rise), giving -6 I1 + 10 I2 = -20. The shared resistor appears as (I1 - I2) because the two loop currents flow through it in opposite directions.",
              "Solve the two equations. From mesh 1: 8 I1 - 6 I2 = 10. From mesh 2: -6 I1 + 10 I2 = -20. Multiply mesh 1 by 5 and mesh 2 by 3: 40 I1 - 30 I2 = 50 and -18 I1 + 30 I2 = -60. Adding: 22 I1 = -10, so I1 = -0.455 A (the negative sign means I1 actually flows counter-clockwise). Substitute back: 8(-0.455) - 6 I2 = 10, so -3.64 - 6 I2 = 10, giving I2 = -2.27 A (also counter-clockwise). The current through the shared 6 ohm resistor is I1 - I2 = -0.455 - (-2.27) = 1.82 A in the direction of I1.",
              "Nodal analysis of the same circuit would assign V_A at the node between R1, R3 and the V1 source, and V_B at the node between R2, R3 and the V2 source, with the bottom rail as reference. KCL at node A: (V_A - 10)/2 + V_A/6 + (V_A - V_B)/6 = 0 (currents leaving). The choice between mesh and nodal is pragmatic: mesh gives two equations here, nodal gives two as well, so either is fine. Use mesh when voltage sources dominate (fewer unknowns), nodal when current sources dominate.",
            ],
            bullets: [
              "Mesh analysis: assign a clockwise loop current per mesh, write KVL per mesh.",
              "Nodal analysis: assign a voltage per node (relative to ground), write KCL per node.",
              "Shared resistor in mesh: appears as (I1 - I2) because loop currents oppose there.",
              "Number of mesh equations = number of independent meshes (windows) in a planar circuit.",
              "Number of nodal equations = number of independent nodes minus one (reference).",
              "Choose mesh for voltage-source-heavy circuits, nodal for current-source-heavy circuits.",
              "Negative loop current just means the assumed clockwise direction was wrong - magnitudes stand.",
            ],
            codeExample: {
              language: "python",
              caption: "Solving the two-mesh DC circuit with numpy",
              code: `import numpy as np

# 8 I1 - 6 I2 = 10 ; -6 I1 + 10 I2 = -20
A = np.array([[8, -6], [-6, 10]])
b = np.array([10, -20])
I1, I2 = np.linalg.solve(A, b)

print("I1 =", round(I1, 3), "A")
print("I2 =", round(I2, 3), "A")
print("shared R current =", round(I1 - I2, 3), "A")
# I1 = -0.455 A, I2 = -2.273 A, shared = 1.818 A`,
            },
            diagram: {
              kind: "layers",
              title: "Mesh vs nodal analysis - two routes to the same currents",
              caption:
                "Both methods derive from Kirchhoff's laws; the choice depends on source types and topology.",
              layers: [
                { label: "Top: Kirchhoff's laws (KVL + KCL)", note: "the axioms" },
                { label: "Mesh analysis: KVL per loop current", note: "best for voltage-source circuits" },
                { label: "Nodal analysis: KCL per node voltage", note: "best for current-source circuits" },
                { label: "Solve the linear system", note: "by substitution, elimination, or matrix" },
              ],
            },
            callout: {
              type: "tip",
              title: "Label every element on your circuit diagram",
              body: "Before writing mesh or nodal equations, redraw the circuit with loop currents (circular arrows) or node voltages (V_A, V_B) clearly labelled. Examiners mark the diagram, the equations, the solution and the verification as four separate stages - a correct equation with a sign slip in the algebra still earns the equation marks.",
            },
            keyTerms: [
              { term: "Mesh", definition: "An independent loop (window) of a planar circuit that does not contain another loop inside it." },
              { term: "Loop current", definition: "A clockwise current assigned to each mesh in mesh analysis; shared resistors carry the difference of two loop currents." },
              { term: "Node voltage", definition: "The voltage at a node measured relative to a chosen reference (ground) node in nodal analysis." },
              { term: "Planar circuit", definition: "A circuit that can be drawn on a plane with no crossing wires; required for mesh analysis." },
            ],
            examQuestions: [
              {
                q: "Explain mesh analysis and nodal analysis, stating when each is preferred. For a two-mesh circuit with V1 = 10 V, R1 = 2 ohm, a shared R3 = 6 ohm, V2 = 20 V and R2 = 4 ohm, write the mesh equations and solve for the loop currents I1 and I2.",
                marks: 7,
                outline: [
                  "Define mesh analysis: clockwise loop current per mesh, KVL per mesh.",
                  "Define nodal analysis: node voltage relative to ground, KCL per node.",
                  "Mesh suits voltage-source circuits; nodal suits current-source circuits.",
                  "KVL mesh 1: 10 - 2 I1 - 6(I1 - I2) = 0, giving 8 I1 - 6 I2 = 10.",
                  "KVL mesh 2: -20 - 4 I2 - 6(I2 - I1) = 0, giving -6 I1 + 10 I2 = -20.",
                  "Solve: I1 = -0.455 A, I2 = -2.27 A (both negative = actually counter-clockwise).",
                  "Current through shared 6 ohm = I1 - I2 = 1.82 A in direction of I1.",
                ],
              },
              {
                q: "Write the KCL equation at a node where three resistors R1, R2, R3 meet, given node voltage V_A and reference ground.",
                marks: 3,
              },
              {
                q: "State one situation where nodal analysis is preferred over mesh analysis.",
                marks: 2,
              },
            ],
          },
          // --- 1.5 ---
          {
            number: "1.5",
            title: "Source transformation and star-delta conversion",
            body: [
              "Source transformation converts a practical voltage source (V in series with R) into an equivalent practical current source (I in parallel with the same R), or vice versa. The conversion rules are I = V/R and V = I x R, with the resistance unchanged. The direction of the current source arrow matches the positive terminal of the voltage source. This technique simplifies circuits by merging series resistances after converting to one source type, or by swapping to the type that lets a parallel combination collapse. It is exact for linear circuits and earns quick marks in problems that mix source types.",
              "Star-delta (Y-delta) conversion handles three-terminal resistor networks that cannot be collapsed by series-parallel rules alone. For a delta of R12, R23, R31, the equivalent star resistances are R1 = R12 R31 / (R12 + R23 + R31), R2 = R12 R23 / (sum), R3 = R23 R31 / (sum). For a star of R1, R2, R3, the equivalent delta resistances are R12 = R1 R2 + R2 R3 + R3 R1 divided by R3 (the opposite arm), and cyclically. When all three delta resistors are equal to R_delta, each star resistor is R_delta/3; when all three star resistors are equal to R_star, each delta resistor is 3 R_star.",
              "Worked example. A delta network has three equal 30 ohm resistors. Convert to star: each star resistor = 30/3 = 10 ohm. If this star feeds a circuit where the three outer terminals see sources, the reduced resistances make further series-parallel collapse possible. Conversely, a star of three equal 10 ohm resistors converts to a delta of three equal 3 x 10 = 30 ohm resistors. The conversion is essential for bridge circuits (like the Wheatstone bridge in its unbalanced form) and for three-phase systems analysed at the per-phase level (Unit II section 2.7).",
              "When to use each technique. Apply source transformation when a circuit mixes voltage and current sources and you want to unify them before collapsing. Apply star-delta conversion when a three-terminal cluster resists series-parallel reduction - typically in bridge networks or in Y-connected three-phase loads. Both transformations preserve terminal behaviour: the rest of the circuit cannot tell that the transformation occurred. Always compute the converted values explicitly (showing the formula and the substitution) so the marker can verify each step and award partial credit even if a later arithmetic error creeps in.",
            ],
            bullets: [
              "Source transformation: V with series R equals I = V/R with parallel R (same R).",
              "Current source arrow points from the positive terminal of the original voltage source.",
              "Star-delta converts three-terminal networks that series-parallel rules cannot collapse.",
              "Delta to star: R1 = R12 R31 / (R12 + R23 + R31); cyclic for R2, R3.",
              "Star to delta: R12 = (R1 R2 + R2 R3 + R3 R1) / R3; cyclic for R23, R31.",
              "Equal-delta R converts to equal-star R/3; equal-star R converts to equal-delta 3R.",
              "Both transformations preserve terminal behaviour - the rest of the circuit is unaffected.",
            ],
            table: {
              caption: "Star-delta and delta-star conversion formulas.",
              headers: ["Direction", "Formula", "Equal-value case"],
              rows: [
                ["Delta to star", "R1 = R12 R31 / sum", "R_star = R_delta / 3"],
                ["Star to delta", "R12 = (R1R2 + R2R3 + R3R1) / R3", "R_delta = 3 R_star"],
                ["Source V to I", "I = V / R, same R", "V = 10 V, R = 5 -> I = 2 A"],
                ["Source I to V", "V = I x R, same R", "I = 2 A, R = 5 -> V = 10 V"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a simplification technique",
              caption:
                "Source transformation unifies source types; star-delta collapses three-terminal clusters.",
              start: "A circuit resists series-parallel reduction",
              branches: [
                { label: "Mixed source types", outcome: "Apply source transformation to unify", good: true },
                { label: "Three-terminal cluster (bridge)", outcome: "Apply star-delta conversion", good: true },
                { label: "Multiple meshes, few nodes", outcome: "Apply mesh analysis", good: true },
                { label: "Many nodes, few meshes", outcome: "Apply nodal analysis", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Show the conversion formula before substituting",
              body: "Write 'R1 = R12 x R31 / (R12 + R23 + R31) = 30 x 30 / 90 = 10 ohm' as a single labelled line. Examiners look for the formula first (method mark), then the substitution (arithmetic mark). A bare 'R1 = 10 ohm' with no formula loses half the marks even if the number is correct.",
            },
            keyTerms: [
              { term: "Source transformation", definition: "Conversion between a V-source with series R and an I-source with parallel R using I = V/R; resistance is unchanged." },
              { term: "Star (Y) network", definition: "Three resistors each connected from a common central node to one of three outer terminals." },
              { term: "Delta network", definition: "Three resistors connected in a triangle between three terminals with no central node." },
              { term: "Star-delta conversion", definition: "Exact conversion between star and delta resistor networks using the reciprocal formulas above." },
            ],
            examQuestions: [
              {
                q: "Explain source transformation and star-delta conversion with formulas. A delta network has three equal resistors of 30 ohm each. Convert it to an equivalent star network. Also convert a 10 V source in series with 5 ohm to an equivalent current source.",
                marks: 7,
                outline: [
                  "State source transformation: I = V/R, same R; arrow from positive terminal.",
                  "State delta-to-star: R1 = R12 R31 / sum, cyclic; for equal delta, R_star = R_delta / 3.",
                  "Equal delta 30 ohm: each star resistor = 30/3 = 10 ohm.",
                  "Draw the star network with three 10 ohm resistors meeting at a central node.",
                  "Source transformation: I = V/R = 10/5 = 2 A in parallel with 5 ohm.",
                  "Draw the equivalent current source with arrow pointing from the original positive terminal.",
                  "Verify: converting back gives V = I x R = 2 x 5 = 10 V in series with 5 ohm - original recovered.",
                ],
              },
              {
                q: "Write the formulas for converting a star network of R1, R2, R3 into an equivalent delta network.",
                marks: 3,
              },
              {
                q: "State the condition under which source transformation is valid.",
                marks: 2,
              },
            ],
          },
          // --- 1.6 ---
          {
            number: "1.6",
            title: "Thevenin's and Norton's theorems (worked equivalent)",
            body: [
              "Thevenin's theorem states that any linear two-terminal network of sources and resistors, no matter how complex, can be replaced by an equivalent circuit consisting of a single voltage source V_th in series with a single resistance R_th. Norton's theorem is the dual: the same network can be replaced by a single current source I_N in parallel with a single resistance R_N. The two equivalents describe the same network: V_th = I_N x R_N, R_th = R_N, and I_N = V_th / R_th. Both reduce a complicated source network to two numbers, making load analysis trivial.",
              "Procedure for finding V_th: remove the load, find the open-circuit voltage across the two terminals where the load was connected. This may use mesh, nodal, or any convenient method. Procedure for R_th: deactivate all independent sources (replace voltage sources with short circuits, current sources with open circuits) and find the equivalent resistance looking into the two terminals. If the network contains dependent sources, R_th is found by applying a test source at the terminals and computing V_test / I_test, because simply deactivating independent sources is not enough. I_N is then the short-circuit current at the load terminals.",
              "Worked example. A network has a 12 V source in series with a 6 ohm resistor, feeding a load R_L through an additional 3 ohm series resistor. To find the Thevenin equivalent seen by R_L: remove R_L. V_th is the open-circuit voltage at the load terminals, which is the voltage across the 3 ohm resistor's open end - since no current flows through the 3 ohm with the load removed, the full 12 V appears at the terminal, so V_th = 12 V. For R_th, deactivate the 12 V source (short it): looking into the load terminals, the 6 ohm and 3 ohm are in series, giving R_th = 6 + 3 = 9 ohm. The Thevenin equivalent is 12 V in series with 9 ohm.",
              "For the Norton equivalent of the same network: I_N = V_th / R_th = 12/9 = 1.33 A, in parallel with R_N = R_th = 9 ohm. If a load R_L = 3 ohm is now connected across the equivalent, the load current is I_L = V_th / (R_th + R_L) = 12 / (9 + 3) = 1 A, and the load voltage is V_L = I_L x R_L = 1 x 3 = 3 V. These values match what the original circuit would deliver, confirming the equivalence. The Thevenin/Norton reduction is the foundation of maximum power transfer (section 1.7) and of every loaded-source calculation in the rest of the syllabus.",
            ],
            bullets: [
              "Thevenin: any linear two-terminal network equals V_th in series with R_th.",
              "Norton: the same network equals I_N in parallel with R_N.",
              "V_th = open-circuit voltage at the load terminals (load removed).",
              "R_th = equivalent resistance looking in, with independent sources deactivated.",
              "Deactivate: voltage sources -> short, current sources -> open.",
              "With dependent sources, find R_th by applying a test source (V_test / I_test).",
              "I_N = V_th / R_th; the two equivalents are interchangeable.",
            ],
            table: {
              caption: "Thevenin vs Norton equivalent - dual descriptions of the same network.",
              headers: ["Quantity", "Thevenin", "Norton"],
              rows: [
                ["Equivalent source", "V_th voltage source", "I_N current source"],
                ["Equivalent resistance", "R_th in series", "R_N in parallel (= R_th)"],
                ["Open-circuit voltage", "V_th", "I_N x R_N"],
                ["Short-circuit current", "V_th / R_th", "I_N"],
                ["Worked example", "12 V, 9 ohm series", "1.33 A, 9 ohm parallel"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Finding the Thevenin equivalent step by step",
              caption:
                "Two measurements - open-circuit voltage and deactivated-source resistance - fully specify the equivalent.",
              steps: [
                { label: "Remove the load R_L", note: "expose the two terminals" },
                { label: "Find V_th = open-circuit voltage", note: "mesh, nodal, or direct" },
                { label: "Deactivate independent sources", note: "V-sources shorted, I-sources opened" },
                { label: "Find R_th looking into terminals", note: "series-parallel or test source" },
                { label: "Draw V_th in series with R_th", note: "the equivalent is complete" },
              ],
            },
            callout: {
              type: "tip",
              title: "Use the test-source method for dependent sources",
              body: "When the network contains dependent (controlled) sources, deactivating independent sources alone does not give R_th. Apply a 1 V or 1 A test source at the load terminals, compute the resulting test current or test voltage with independent sources deactivated, and take R_th = V_test / I_test. This is the most common slip in Thevenin problems.",
            },
            keyTerms: [
              { term: "Thevenin voltage V_th", definition: "The open-circuit voltage at the load terminals of a linear two-terminal network with the load removed." },
              { term: "Thevenin resistance R_th", definition: "The equivalent resistance looking into the load terminals with all independent sources deactivated." },
              { term: "Norton current I_N", definition: "The short-circuit current at the load terminals; equals V_th / R_th." },
              { term: "Test source method", definition: "Finding R_th for circuits with dependent sources by applying a test V or I and computing V_test / I_test." },
            ],
            examQuestions: [
              {
                q: "State Thevenin's and Norton's theorems. For a network consisting of a 12 V source in series with a 6 ohm resistor, feeding a load through an additional 3 ohm series resistor, find the Thevenin and Norton equivalents seen by the load. Then compute the load current when R_L = 3 ohm.",
                marks: 7,
                outline: [
                  "State Thevenin: any linear two-terminal network = V_th in series with R_th.",
                  "State Norton: the same network = I_N in parallel with R_N.",
                  "Remove R_L; V_th = open-circuit voltage = 12 V (no current through 3 ohm, no drop).",
                  "Deactivate 12 V source (short it); R_th = 6 + 3 = 9 ohm (series from the terminals).",
                  "Thevenin equivalent: 12 V in series with 9 ohm.",
                  "Norton equivalent: I_N = 12/9 = 1.33 A in parallel with 9 ohm.",
                  "Load current with R_L = 3 ohm: I_L = 12 / (9 + 3) = 1 A; V_L = 3 V.",
                ],
              },
              {
                q: "Explain how you would find R_th for a network containing a dependent (controlled) source.",
                marks: 3,
              },
              {
                q: "State the relationship between the Thevenin and Norton equivalents of the same network.",
                marks: 2,
              },
            ],
          },
          // --- 1.7 ---
          {
            number: "1.7",
            title: "Maximum power transfer theorem and numericals",
            body: [
              "The maximum power transfer theorem states that a linear source network with Thevenin equivalent V_th and R_th delivers maximum power to a resistive load when R_load = R_th. The load power as a function of R_load is P_load = (V_th / (R_th + R_load))^2 x R_load, which peaks at R_load = R_th. At this match, the load voltage is V_th/2 (half of V_th, because R_load and R_th form an equal voltage divider), and the load current is V_th / (2 R_th). The maximum load power is P_max = V_th^2 / (4 R_th).",
              "Derivation sketch. Treat P_load = V_th^2 R_load / (R_th + R_load)^2 as a function of R_load. Differentiating with respect to R_load and setting the derivative to zero gives dP/dR_load = V_th^2 (R_th + R_load)^2 - V_th^2 R_load x 2 (R_th + R_load) all over (R_th + R_load)^4 = 0. The numerator simplifies to (R_th + R_load) - 2 R_load = R_th - R_load = 0, so R_load = R_th. Substituting back: P_max = V_th^2 R_th / (2 R_th)^2 = V_th^2 / (4 R_th). The efficiency at maximum power is exactly 50 per cent, because R_load and R_th dissipate equal power.",
              "Worked example. A source network has V_th = 12 V and R_th = 6 ohm. For maximum power transfer, choose R_load = R_th = 6 ohm. The load current is I = 12 / (6 + 6) = 1 A. The load voltage is V_load = 1 x 6 = 6 V. The load power is P_load = V_load x I = 6 x 1 = 6 W, matching the formula P_max = V_th^2 / (4 R_th) = 144 / 24 = 6 W. The source internally dissipates I^2 R_th = 1 x 6 = 6 W as well, so the total power drawn is 12 W and the efficiency is 6/12 = 50 per cent.",
              "Practical implications. Maximum power transfer is the design goal in audio amplifiers (impedance matching to speakers), in RF antenna coupling, and in sensor readout circuits where the signal is weak. It is emphatically not the goal in power transmission, where efficiency matters more than peak power - a power grid with R_load = R_th would waste half its energy as heat in the lines. The theorem also applies in AC form: for a complex source impedance Z_th = R + jX, maximum power transfer requires Z_load = R - jX (the complex conjugate), a result that drives antenna and transmission-line matching design.",
            ],
            bullets: [
              "Maximum power transfer: R_load = R_th for peak load power.",
              "P_max = V_th^2 / (4 R_th) - the matched-load power formula.",
              "At the match, load voltage = V_th/2 and load current = V_th / (2 R_th).",
              "Efficiency at maximum power is exactly 50 per cent.",
              "P_load(R_load) = V_th^2 R_load / (R_th + R_load)^2 - the curve to differentiate.",
              "Used in audio, RF and sensor matching; avoided in power transmission.",
              "AC form: for Z_th = R + jX, maximum power needs Z_load = R - jX (conjugate match).",
            ],
            table: {
              caption: "Load power vs R_load / R_th ratio for V_th = 12 V, R_th = 6 ohm.",
              headers: ["R_load / R_th", "R_load (ohm)", "I (A)", "P_load (W)", "Efficiency (%)"],
              rows: [
                ["0.5", "3", "12/9 = 1.33", "1.33^2 x 3 = 5.33", "33"],
                ["1.0 (match)", "6", "12/12 = 1.0", "1^2 x 6 = 6.0", "50"],
                ["2.0", "12", "12/18 = 0.67", "0.67^2 x 12 = 5.33", "67"],
                ["5.0", "30", "12/36 = 0.33", "0.33^2 x 30 = 3.33", "83"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Maximum power transfer - the matched-load condition",
              caption:
                "R_load = R_th is the peak; efficiency rises as R_load grows beyond the match, but power falls.",
              tiers: [
                { label: "Peak: R_load = R_th", note: "P_max = V_th^2 / (4 R_th), efficiency 50%" },
                { label: "Below match: R_load < R_th", note: "current high, voltage low, power sub-maximal" },
                { label: "Above match: R_load > R_th", note: "voltage high, current low, power sub-maximal" },
                { label: "Efficiency extreme: R_load >> R_th", note: "high efficiency, very low power" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not apply to power systems",
              body: "Maximum power transfer wastes 50 per cent of the generated power in the source resistance. Power grids, transformers and distribution systems are designed for R_load >> R_source to maximise efficiency, not peak power. Applying this theorem to a transmission-line problem is a classic exam error - check the context before invoking the match.",
            },
            keyTerms: [
              { term: "Maximum power transfer", definition: "Theorem stating peak load power occurs when R_load = R_th; load then receives V_th^2/(4 R_th)." },
              { term: "Matched load", definition: "A load whose resistance equals the source's Thevenin resistance, achieving maximum power transfer." },
              { term: "Conjugate match", definition: "The AC extension: for Z_th = R + jX, maximum power requires Z_load = R - jX." },
              { term: "Efficiency at match", definition: "Exactly 50 per cent at maximum power transfer; equal power dissipated in source and load." },
            ],
            examQuestions: [
              {
                q: "State and derive the maximum power transfer theorem. A source network has V_th = 12 V and R_th = 6 ohm. Find the value of R_load for maximum power transfer, the maximum load power, and the efficiency at this condition.",
                marks: 7,
                outline: [
                  "State the theorem: maximum power transfer when R_load = R_th.",
                  "Write P_load = V_th^2 R_load / (R_th + R_load)^2.",
                  "Differentiate and set dP/dR_load = 0; solve to get R_load = R_th.",
                  "For V_th = 12, R_th = 6: choose R_load = 6 ohm.",
                  "Load current I = 12 / (6 + 6) = 1 A; load voltage = 6 V.",
                  "P_max = V_load x I = 6 W; verify with formula V_th^2 / (4 R_th) = 144/24 = 6 W.",
                  "Efficiency = P_load / (V_th x I) = 6/12 = 50%; equal power dissipated in source and load.",
                ],
              },
              {
                q: "State the formula for maximum load power in terms of V_th and R_th, and give the efficiency at maximum power transfer.",
                marks: 3,
              },
              {
                q: "Why is maximum power transfer not used in electrical power transmission systems?",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT II - AC CIRCUITS
    // =================================================================
    {
      number: 2,
      roman: "II",
      title: "AC Circuits",
      summary:
        "Unit II moves to alternating current: sinusoidal quantities and their RMS, average, form and peak factors; phasor representation; R, L, C behaviour in AC with impedance and admittance; series and parallel RLC circuits with resonance; active, reactive and apparent power with power factor; power factor correction with worked capacitor sizing; and three-phase star and delta connections with line and phase quantities.",
      chapter: {
        number: "02",
        title: "AC Circuit Analysis",
        intro:
          "Unit II extends circuit theory to sinusoidal steady state. Instantaneous, RMS, average, form and peak factors characterise a sine wave; phasors represent it compactly; R, L and C respond with phase shifts captured by impedance Z = R + jX; series and parallel RLC circuits resonate at f_0 = 1/(2 pi sqrt(LC)); active, reactive and apparent power form the power triangle with power factor cos(phi); capacitor-based power factor correction improves efficiency; and three-phase star and delta connections deliver power at sqrt(3) x line quantities.",
        inOneBreath:
          "A sinusoid v = Vm sin(omega t + phi) has RMS Vm/sqrt(2), average 2 Vm/pi over half cycle, form factor 1.11 and peak factor 1.414; phasors encode amplitude and phase as V angle phi or a + jb; R carries in-phase current, L lags by 90 deg with X_L = omega L, C leads by 90 deg with X_C = 1/(omega C); impedance Z = R + jX, admittance Y = 1/Z = G + jB; series RLC resonance at omega_0 = 1/sqrt(LC) with Q = omega_0 L / R and bandwidth = omega_0/Q; active power P = V I cos(phi) W, reactive Q = V I sin(phi) VAR, apparent S = V I VA, power factor cos(phi) = P/S; PF correction adds a parallel capacitor C = P (tan phi1 - tan phi2) / (omega V^2); three-phase star has V_L = sqrt(3) V_ph and I_L = I_ph, delta has V_L = V_ph and I_L = sqrt(3) I_ph, power P = sqrt(3) V_L I_L cos(phi).",
        sections: [
          // --- 2.1 ---
          {
            number: "2.1",
            title: "Sinusoidal quantities: RMS, average, form factor, peak factor",
            body: [
              "An alternating quantity is described by its instantaneous value v = Vm sin(omega t + phi), where Vm is the peak (maximum) value, omega = 2 pi f is the angular frequency in radians per second, f is the frequency in hertz, and phi is the phase angle in radians. The waveform repeats every period T = 1/f seconds. The standard Indian domestic supply is v = 325 sin(314 t) V, corresponding to Vm = 325 V, f = 50 Hz and an RMS value of 230 V. Every AC measurement and calculation in the syllabus starts from this instantaneous form.",
              "The RMS (root mean square) value is the equivalent DC value that delivers the same average power to a resistor. For a sine wave V_rms = Vm / sqrt(2) = 0.707 Vm, derived by squaring the sine, averaging over one period (the mean of sin^2 is 1/2), and taking the square root. The average value over a full cycle is zero (symmetric positive and negative halves), so the half-cycle average V_avg = 2 Vm / pi = 0.637 Vm is used instead. For v = 325 sin(314 t): V_rms = 325/1.414 = 230 V and V_avg = 2 x 325 / 3.14 = 207 V.",
              "Form factor and peak factor are ratios that characterise the waveform shape. Form factor = V_rms / V_avg = (Vm/sqrt(2)) / (2 Vm/pi) = pi / (2 sqrt(2)) = 1.11 for a sine wave. Peak factor (also called crest factor) = Vm / V_rms = Vm / (Vm/sqrt(2)) = sqrt(2) = 1.414 for a sine wave. These factors are constant for a sine wave regardless of amplitude or frequency, and they differ for other waveforms (square wave has form factor = peak factor = 1; triangular wave has form factor 1.155 and peak factor 1.732). A meter calibrated for sine-wave RMS will misread a non-sine waveform by the form-factor ratio.",
              "Worked example. A voltage v = 170 sin(377 t) V is applied across a 100 ohm resistor. Vm = 170 V, omega = 377 rad/s (so f = 60 Hz, T = 16.7 ms). V_rms = 170/1.414 = 120 V. V_avg (half-cycle) = 2 x 170/3.14 = 108 V. Form factor = 120/108 = 1.11, peak factor = 170/120 = 1.42 (the small rounding difference from 1.414 is expected). The power dissipated in the resistor is P = V_rms^2 / R = 120^2 / 100 = 144 W, the same power a 120 V DC source would deliver. This equivalence is the whole point of RMS.",
            ],
            bullets: [
              "Instantaneous value: v = Vm sin(omega t + phi); omega = 2 pi f.",
              "RMS V_rms = Vm / sqrt(2) = 0.707 Vm for a sine wave - the DC-equivalent heating value.",
              "Average over full cycle is zero; half-cycle average V_avg = 2 Vm / pi = 0.637 Vm.",
              "Form factor = V_rms / V_avg = 1.11 for a sine wave (constant regardless of amplitude).",
              "Peak factor = Vm / V_rms = sqrt(2) = 1.414 for a sine wave.",
              "Indian domestic supply: v = 325 sin(314 t) V gives V_rms = 230 V at 50 Hz.",
              "Square wave: form factor = peak factor = 1; triangular: 1.155 and 1.732.",
            ],
            table: {
              caption: "RMS, average, form factor and peak factor for common waveforms.",
              headers: ["Waveform", "V_rms", "V_avg (half cycle)", "Form factor", "Peak factor"],
              rows: [
                ["Sine", "Vm/sqrt(2)", "2 Vm/pi", "1.11", "1.414"],
                ["Square", "Vm", "Vm", "1.00", "1.00"],
                ["Triangular", "Vm/sqrt(3)", "Vm/2", "1.155", "1.732"],
                ["Half-wave rectified sine", "Vm/2", "Vm/pi", "1.57", "2.00"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Deriving the RMS value of a sine wave",
              caption:
                "Square, average over one period, take the square root - the DC equivalent emerges.",
              steps: [
                { label: "Start: v = Vm sin(omega t)", note: "instantaneous value" },
                { label: "Square: v^2 = Vm^2 sin^2(omega t)", note: "power proportional to v^2" },
                { label: "Average over one period", note: "mean of sin^2 is 1/2" },
                { label: "V_rms^2 = Vm^2 / 2", note: "the squared RMS" },
                { label: "V_rms = Vm / sqrt(2)", note: "the DC-equivalent value" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always state which average you mean",
              body: "The full-cycle average of a sine wave is zero, which is useless for power. RGPV examiners expect V_avg = 2 Vm / pi (the half-cycle average) when form factor is asked. Write 'half-cycle average' explicitly to avoid losing a mark for ambiguity.",
            },
            keyTerms: [
              { term: "RMS value", definition: "The DC-equivalent value V_rms = Vm/sqrt(2) for a sine wave, delivering the same average power to a resistor." },
              { term: "Average value", definition: "Half-cycle average V_avg = 2 Vm/pi for a sine wave; the full-cycle average is zero." },
              { term: "Form factor", definition: "Ratio V_rms / V_avg = 1.11 for a sine wave; characterises waveform shape." },
              { term: "Peak factor", definition: "Ratio Vm / V_rms = sqrt(2) = 1.414 for a sine wave; also called crest factor." },
            ],
            examQuestions: [
              {
                q: "Define the RMS value, average value, form factor and peak factor of a sinusoidal quantity. Derive the RMS value of v = Vm sin(omega t). For v = 170 sin(377 t) V across a 100 ohm resistor, find V_rms, V_avg, form factor, peak factor and the power dissipated.",
                marks: 7,
                outline: [
                  "Define RMS as the DC-equivalent heating value; average as half-cycle mean; form factor = V_rms/V_avg; peak factor = Vm/V_rms.",
                  "Derive: square v to get Vm^2 sin^2(omega t); average over one period using mean of sin^2 = 1/2.",
                  "V_rms^2 = Vm^2 / 2, so V_rms = Vm / sqrt(2) = 0.707 Vm.",
                  "For v = 170 sin(377 t): Vm = 170, omega = 377, f = 60 Hz.",
                  "V_rms = 170/1.414 = 120 V; V_avg = 2 x 170/pi = 108 V.",
                  "Form factor = 120/108 = 1.11; peak factor = 170/120 = 1.42.",
                  "Power P = V_rms^2 / R = 14400/100 = 144 W.",
                ],
              },
              {
                q: "State the values of form factor and peak factor for a sinusoidal waveform.",
                marks: 3,
              },
              {
                q: "What is the significance of the RMS value in terms of power dissipation?",
                marks: 2,
              },
            ],
          },
          // --- 2.2 ---
          {
            number: "2.2",
            title: "Phasor representation of sinusoids",
            body: [
              "A phasor is a rotating vector that encodes the amplitude and phase of a sinusoid, freezing the rotation at t = 0 to give a static complex number. A voltage v = Vm sin(omega t + phi) is represented by the phasor V = V_rms angle phi (or Vm angle phi if peak phasors are used; RMS phasors are standard in power engineering). The angular frequency omega is common to all phasors in a single-frequency circuit and is carried separately. Adding two sinusoids of the same frequency then reduces to adding two complex numbers - a dramatic simplification over summing trigonometric expressions.",
              "Rectangular (a + jb) and polar (r angle theta) forms are two representations of the same phasor, related by a = r cos(theta), b = r sin(theta) and r = sqrt(a^2 + b^2), theta = arctan(b/a). The operator j represents a 90-degree counter-clockwise rotation: j x V shifts V by +90 deg, and 1/j = -j shifts by -90 deg. The key identity is j^2 = -1, so multiplication by j^2 is a 180-degree rotation (a sign flip). AC circuit algebra is therefore the algebra of complex numbers: impedances add in series like resistances, but each element carries its own phase.",
              "Worked example. Two voltages v1 = 100 sin(omega t) V and v2 = 60 sin(omega t + 60 deg) V are in series. As phasors (using peak values): V1 = 100 angle 0 deg = 100 + j0; V2 = 60 angle 60 deg = 60 cos(60) + j60 sin(60) = 30 + j52. The sum V = V1 + V2 = 130 + j52. Converting to polar: |V| = sqrt(130^2 + 52^2) = sqrt(16900 + 2704) = sqrt(19604) = 140 V; angle = arctan(52/130) = arctan(0.4) = 21.8 deg. So v_total = 140 sin(omega t + 21.8 deg) V - a single sinusoid whose amplitude and phase are read directly from the phasor sum.",
              "Phasor representation works because the derivative d/dt of sin(omega t + phi) is omega cos(omega t + phi) = omega sin(omega t + phi + 90 deg), which in phasor form is multiplication by j omega. The differential equations of AC circuits (v = L di/dt, i = C dv/dt) become algebraic: V = j omega L I and I = j omega C V. This is the bridge to impedance (section 2.3): the inductor's impedance is j omega L and the capacitor's is 1/(j omega C) = -j/(omega C). All of AC steady-state analysis then proceeds as complex-number arithmetic, which is why engineering calculators have dedicated polar-rectangular keys.",
            ],
            bullets: [
              "Phasor: V = V_rms angle phi; the rotation is frozen at t = 0.",
              "Rectangular V = a + jb; polar V = r angle theta; a = r cos theta, b = r sin theta.",
              "Conversion: r = sqrt(a^2 + b^2), theta = arctan(b/a).",
              "Operator j: 90-degree rotation; j^2 = -1; 1/j = -j.",
              "Adding sinusoids of the same frequency = adding their phasors.",
              "Derivative d/dt becomes multiplication by j omega in phasor form.",
              "RMS phasors are standard in power engineering; peak phasors in some textbooks.",
            ],
            table: {
              caption: "Phasor conversions and operations.",
              headers: ["Operation", "Formula", "Example"],
              rows: [
                ["Polar to rectangular", "a = r cos(theta), b = r sin(theta)", "60 angle 60 = 30 + j52"],
                ["Rectangular to polar", "r = sqrt(a^2+b^2), theta = arctan(b/a)", "130 + j52 = 140 angle 21.8"],
                ["Addition", "add real and imaginary parts separately", "(100+j0) + (30+j52) = 130+j52"],
                ["Multiplication by j", "rotate +90 deg", "j x 10 = 10 angle 90 = j10"],
                ["Multiplication by j omega L", "inductor voltage relation", "V_L = j omega L I"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Polar vs rectangular phasor forms",
              caption:
                "Same phasor, two representations - polar for magnitude/phase, rectangular for addition.",
              left: {
                heading: "Polar (r angle theta)",
                items: [
                  "Magnitude r and angle theta",
                  "Best for multiplication and division",
                  "Directly shows amplitude and phase",
                  "Used in power calculations",
                  "Example: 60 angle 60 deg",
                ],
              },
              right: {
                heading: "Rectangular (a + jb)",
                items: [
                  "Real part a, imaginary part b",
                  "Best for addition and subtraction",
                  "Needed when summing voltages/currents",
                  "Components are the in-phase and quadrature parts",
                  "Example: 30 + j52",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Keep angle units consistent",
              body: "Always state whether angles are in degrees or radians. In RGPV exams, degrees are standard (e.g. 60 deg, not 1.047 rad). When using arctan to recover an angle, check the quadrant: a phasor in the third quadrant (-a, -b) has arctan(b/a) in the first quadrant but the true angle is 180 + arctan(b/a).",
            },
            keyTerms: [
              { term: "Phasor", definition: "A complex number V = V_rms angle phi encoding the amplitude and phase of a sinusoid at a fixed frequency." },
              { term: "Polar form", definition: "Phasor as r angle theta; convenient for multiplication, division and reading magnitude/phase." },
              { term: "Rectangular form", definition: "Phasor as a + jb; convenient for addition and subtraction of sinusoids." },
              { term: "j operator", definition: "A 90-degree counter-clockwise rotation; j^2 = -1; the basis of AC complex algebra." },
            ],
            examQuestions: [
              {
                q: "Explain phasor representation of sinusoidal quantities. Convert between polar and rectangular forms. Two voltages v1 = 100 sin(omega t) V and v2 = 60 sin(omega t + 60 deg) V are in series. Find the resultant voltage using phasor addition.",
                marks: 7,
                outline: [
                  "Define a phasor as V = V_rms angle phi or Vm angle phi; omega is carried separately.",
                  "State conversions: a = r cos theta, b = r sin theta; r = sqrt(a^2+b^2), theta = arctan(b/a).",
                  "Explain the j operator as a 90-degree rotation; j^2 = -1.",
                  "V1 = 100 angle 0 = 100 + j0; V2 = 60 angle 60 = 30 + j52.",
                  "Sum: V = (100 + 30) + j(0 + 52) = 130 + j52.",
                  "Magnitude |V| = sqrt(130^2 + 52^2) = 140 V; angle = arctan(52/130) = 21.8 deg.",
                  "Resultant v = 140 sin(omega t + 21.8 deg) V.",
                ],
              },
              {
                q: "Convert the phasor 30 + j40 into polar form and state its magnitude and angle.",
                marks: 3,
              },
              {
                q: "What does multiplication by the operator j represent in phasor algebra?",
                marks: 2,
              },
            ],
          },
          // --- 2.3 ---
          {
            number: "2.3",
            title: "R, L, C behaviour in AC; impedance and admittance",
            body: [
              "In a pure resistor, the current and voltage are in phase: v = Vm sin(omega t) gives i = (Vm/R) sin(omega t). In a pure inductor, the current lags the voltage by 90 degrees because the inductor opposes changes in current (V = L di/dt): v = Vm sin(omega t) gives i = (Vm / X_L) sin(omega t - 90 deg), where X_L = omega L is the inductive reactance in ohms. In a pure capacitor, the current leads the voltage by 90 degrees because the capacitor opposes changes in voltage (i = C dv/dt): i = (Vm / X_C) sin(omega t + 90 deg), where X_C = 1/(omega C) is the capacitive reactance in ohms.",
              "Impedance Z generalises resistance to AC: Z = V/I in phasor form, with units of ohms. For a resistor Z_R = R (purely real); for an inductor Z_L = j omega L = j X_L (purely positive-imaginary, +90 deg); for a capacitor Z_C = 1/(j omega C) = -j/(omega C) = -j X_C (purely negative-imaginary, -90 deg). For a general series combination Z = R + j(X_L - X_C) = R + jX, where X = X_L - X_C is the net reactance. The magnitude |Z| = sqrt(R^2 + X^2) and the phase angle phi = arctan(X/R): positive phi means inductive (current lags), negative phi means capacitive (current leads).",
              "Admittance Y is the reciprocal of impedance: Y = 1/Z, with units of siemens (S). For a series R + jX, Y = 1/(R + jX) = (R - jX) / (R^2 + X^2) = G + jB, where G = R/(R^2+X^2) is the conductance and B = -X/(R^2+X^2) is the susceptance. Parallel circuits are easier in admittance: Y_total = Y1 + Y2 + Y3 (susceptances add for parallel branches, just as conductances do). A parallel RLC circuit has Y = 1/R + j(omega C - 1/(omega L)), and resonance occurs when the imaginary part is zero (section 2.4).",
              "Worked example. A series circuit has R = 100 ohm, L = 0.1 H and C = 100 microfarad, connected across a 230 V, 50 Hz supply. X_L = omega L = 2 pi x 50 x 0.1 = 31.4 ohm. X_C = 1/(omega C) = 1/(2 pi x 50 x 100 x 10^-6) = 31.8 ohm. Net reactance X = X_L - X_C = 31.4 - 31.8 = -0.4 ohm (slightly capacitive). Z = 100 - j0.4 ohm, |Z| = sqrt(10000 + 0.16) = 100.0 ohm, phi = arctan(-0.4/100) = -0.23 deg. I = V/|Z| = 230/100 = 2.3 A, leading by 0.23 deg - nearly unity power factor because L and C nearly cancel at this frequency.",
            ],
            bullets: [
              "Resistor: current and voltage in phase; Z_R = R.",
              "Inductor: current lags voltage by 90 deg; Z_L = j omega L = j X_L.",
              "Capacitor: current leads voltage by 90 deg; Z_C = -j/(omega C) = -j X_C.",
              "Impedance Z = R + jX; |Z| = sqrt(R^2 + X^2); phi = arctan(X/R).",
              "Admittance Y = 1/Z = G + jB; convenient for parallel circuits.",
              "X_L = omega L increases with frequency; X_C = 1/(omega C) decreases with frequency.",
              "Positive phi = inductive (current lags); negative phi = capacitive (current leads).",
            ],
            table: {
              caption: "R, L, C behaviour in AC circuits at frequency omega.",
              headers: ["Element", "Impedance Z", "Phase angle", "Reactance", "Current vs voltage"],
              rows: [
                ["Resistor R", "R (real)", "0 deg", "0", "in phase"],
                ["Inductor L", "j omega L", "+90 deg", "X_L = omega L", "current lags by 90 deg"],
                ["Capacitor C", "-j/(omega C)", "-90 deg", "X_C = 1/(omega C)", "current leads by 90 deg"],
                ["Series RLC", "R + j(X_L - X_C)", "arctan(X/R)", "X = X_L - X_C", "lag or lead by phi"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "R, L, C: phase behaviour quadrants",
              caption:
                "Quadrants map element type to current-voltage phase relationship. TL: in-phase, TR: lag, BL: lead, BR: mixed.",
              axes: { x: "current phase relative to voltage (lag <- -> lead)", y: "reactance sign (inductive <- -> capacitive)" },
              quadrants: [
                { label: "Resistor: in phase, X = 0", note: "R only, phi = 0" },
                { label: "Inductor: current lags 90 deg", note: "X_L positive, phi = +90" },
                { label: "Capacitor: current leads 90 deg", note: "X_C negative, phi = -90" },
                { label: "Series RLC: phi = arctan(X/R)", note: "mixed, sign of X decides" },
              ],
            },
            callout: {
              type: "warning",
              title: "Reactance depends on frequency",
              body: "X_L = omega L grows with frequency (inductors block high frequencies); X_C = 1/(omega C) shrinks with frequency (capacitors pass high frequencies). At DC (omega = 0), an inductor is a short and a capacitor is an open. At very high frequency, the roles reverse. Always compute X at the operating frequency before combining with R.",
            },
            keyTerms: [
              { term: "Impedance Z", definition: "Complex ratio V/I in AC; Z = R + jX with magnitude sqrt(R^2+X^2) and phase arctan(X/R)." },
              { term: "Reactance X", definition: "Imaginary part of impedance; X_L = omega L for inductors, X_C = 1/(omega C) for capacitors." },
              { term: "Admittance Y", definition: "Reciprocal of impedance Y = 1/Z = G + jB in siemens; convenient for parallel circuits." },
              { term: "Susceptance B", definition: "Imaginary part of admittance; B = -X/(R^2+X^2) for a series branch." },
            ],
            examQuestions: [
              {
                q: "Explain the behaviour of R, L and C in AC circuits, giving the impedance and phase relationship for each. Define impedance and admittance. A series circuit has R = 100 ohm, L = 0.1 H and C = 100 microfarad at 230 V, 50 Hz. Find the impedance, current and phase angle.",
                marks: 7,
                outline: [
                  "R: in phase, Z_R = R; L: current lags 90 deg, Z_L = j omega L; C: current leads 90 deg, Z_C = -j/(omega C).",
                  "Impedance Z = R + jX, |Z| = sqrt(R^2+X^2); admittance Y = 1/Z = G + jB.",
                  "X_L = 2 pi x 50 x 0.1 = 31.4 ohm; X_C = 1/(2 pi x 50 x 100e-6) = 31.8 ohm.",
                  "Net X = X_L - X_C = -0.4 ohm (slightly capacitive).",
                  "Z = 100 - j0.4 ohm; |Z| = sqrt(10000 + 0.16) = 100.0 ohm.",
                  "Phase phi = arctan(-0.4/100) = -0.23 deg (current leads by 0.23 deg).",
                  "I = 230/100 = 2.3 A, nearly in phase because L and C nearly cancel at 50 Hz.",
                ],
              },
              {
                q: "Write the expressions for inductive reactance X_L and capacitive reactance X_C, and state how each varies with frequency.",
                marks: 3,
              },
              {
                q: "Define admittance and state its unit.",
                marks: 2,
              },
            ],
          },
          // --- 2.4 ---
          {
            number: "2.4",
            title: "Series and parallel RLC circuits; resonance",
            body: [
              "A series RLC circuit has impedance Z = R + j(omega L - 1/(omega C)) = R + j(X_L - X_C). At a specific frequency the inductive and capacitive reactances cancel: omega_0 L = 1/(omega_0 C), giving the resonant angular frequency omega_0 = 1/sqrt(L C) and the resonant frequency f_0 = 1/(2 pi sqrt(L C)). At resonance Z = R (purely real, minimum magnitude), the current is maximum I_0 = V/R, and the voltage across L and C can each be Q times the supply voltage (where Q is the quality factor) even though they cancel in the total - this is the voltage magnification that makes series resonance useful in radio tuning.",
              "The quality factor Q = omega_0 L / R = 1/(omega_0 C R) measures the sharpness of the resonance. A high-Q circuit has a narrow, tall resonance peak (selective, low loss); a low-Q circuit has a broad, low peak (less selective). The bandwidth (the frequency range between the two half-power points where the current falls to I_0/sqrt(2)) is BW = omega_0 / Q. A parallel RLC circuit has admittance Y = 1/R + j(omega C - 1/(omega L)), and resonance again occurs at omega_0 = 1/sqrt(LC), but now the impedance is maximum (not minimum) and the current is minimum. Parallel resonance is used in filter circuits and in power-factor correction tanks.",
              "Worked example. A series RLC circuit has R = 10 ohm, L = 10 mH and C = 100 microfarad. The resonant frequency f_0 = 1/(2 pi sqrt(10 x 10^-3 x 100 x 10^-6)) = 1/(2 pi sqrt(10^-6)) = 1/(2 pi x 10^-3) = 159 Hz. At resonance, X_L = X_C = omega_0 L = 2 pi x 159 x 0.01 = 10 ohm. The quality factor Q = omega_0 L / R = 10/10 = 1. Bandwidth BW = f_0 / Q = 159/1 = 159 Hz - a broad, low-selectivity resonance because Q is low. With a supply of V = 20 V at resonance, I_0 = V/R = 20/10 = 2 A, and the voltage across L and C each is V_L = V_C = I_0 x X_L = 2 x 10 = 20 V, equal to the supply (Q = 1 means no magnification here).",
              "At resonance the energy oscillates between the magnetic field of the inductor (1/2 L i^2) and the electric field of the capacitor (1/2 C v^2), with the resistor dissipating the average power. The total stored energy at resonance is constant (it just sloshes between L and C), and Q = 2 pi x (stored energy) / (energy dissipated per cycle) - the original physical meaning of quality factor. Tuning a radio to a station is selecting one resonance frequency out of the spectrum; the higher the Q, the sharper the selection and the less adjacent-station interference.",
            ],
            bullets: [
              "Series RLC impedance: Z = R + j(X_L - X_C).",
              "Resonance when X_L = X_C: omega_0 = 1/sqrt(LC), f_0 = 1/(2 pi sqrt(LC)).",
              "At series resonance: Z = R (minimum), I = V/R (maximum), V_L = V_C = Q V.",
              "Quality factor Q = omega_0 L / R = 1/(omega_0 C R).",
              "Bandwidth BW = omega_0 / Q (or f_0 / Q); high Q means narrow, selective resonance.",
              "Parallel resonance: impedance maximum, current minimum; used in filters and tanks.",
              "Q = 2 pi x stored energy / energy dissipated per cycle (physical definition).",
            ],
            table: {
              caption: "Series vs parallel RLC resonance at f_0 = 1/(2 pi sqrt(LC)).",
              headers: ["Property", "Series resonance", "Parallel resonance"],
              rows: [
                ["Impedance at resonance", "Z = R (minimum)", "Z = maximum (= R for ideal)"],
                ["Current at resonance", "I = V/R (maximum)", "I = minimum"],
                ["Power factor", "unity (phi = 0)", "unity (phi = 0)"],
                ["Voltage across L, C", "Q x V (magnified)", "Q x I x R (magnified)"],
                ["Application", "radio tuning, voltage magnification", "filters, PF correction tanks"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Energy oscillation in a resonant RLC circuit",
              caption:
                "Energy sloshes between the inductor's magnetic field and the capacitor's electric field; the resistor bleeds the average power.",
              steps: [
                { label: "All energy in capacitor", note: "1/2 C v^2 at maximum" },
                { label: "Current rises, energy to L", note: "1/2 L i^2 grows" },
                { label: "All energy in inductor", note: "1/2 L i^2 at maximum" },
                { label: "Current falls, energy to C", note: "1/2 C v^2 grows" },
                { label: "Resistor dissipates per cycle", note: "Q = 2 pi x stored / dissipated" },
              ],
            },
            callout: {
              type: "exam",
              title: "Compute f_0 before anything else",
              body: "In any resonance problem, the first line of the answer should be 'f_0 = 1/(2 pi sqrt(LC)) = ... Hz'. Once f_0 is established, X_L = X_C follows immediately, and the rest of the calculation (Q, bandwidth, current) falls into place. Examiners look for this anchor computation as the method mark.",
            },
            keyTerms: [
              { term: "Resonance", definition: "The condition X_L = X_C at which a series RLC circuit has minimum impedance and a parallel RLC circuit has maximum impedance." },
              { term: "Resonant frequency", definition: "f_0 = 1/(2 pi sqrt(LC)); the frequency at which resonance occurs." },
              { term: "Quality factor Q", definition: "Q = omega_0 L / R; measures resonance sharpness; Q = 2 pi x stored energy / dissipated per cycle." },
              { term: "Bandwidth", definition: "BW = omega_0 / Q; the frequency span between the two half-power points of the resonance curve." },
            ],
            examQuestions: [
              {
                q: "Explain resonance in a series RLC circuit. Derive the resonant frequency and define the quality factor Q and bandwidth. For a series circuit with R = 10 ohm, L = 10 mH and C = 100 microfarad, find the resonant frequency, Q, bandwidth and the current at resonance if V = 20 V.",
                marks: 7,
                outline: [
                  "Define resonance: X_L = X_C, so Z = R (minimum), I = V/R (maximum).",
                  "Derive omega_0 = 1/sqrt(LC) from omega L = 1/(omega C); f_0 = 1/(2 pi sqrt(LC)).",
                  "Define Q = omega_0 L / R = 1/(omega_0 C R); bandwidth BW = omega_0 / Q.",
                  "f_0 = 1/(2 pi sqrt(10e-3 x 100e-6)) = 1/(2 pi x 10^-3) = 159 Hz.",
                  "X_L at resonance = omega_0 L = 2 pi x 159 x 0.01 = 10 ohm; Q = 10/10 = 1.",
                  "Bandwidth = f_0 / Q = 159/1 = 159 Hz (broad, low-selectivity resonance).",
                  "Current at resonance I_0 = V/R = 20/10 = 2 A; V_L = V_C = Q V = 20 V each.",
                ],
              },
              {
                q: "State the difference between series and parallel resonance in terms of impedance and current at resonance.",
                marks: 3,
              },
              {
                q: "Write the formula for the quality factor Q of a series RLC circuit.",
                marks: 2,
              },
            ],
          },
          // --- 2.5 ---
          {
            number: "2.5",
            title: "Power in AC circuits: active, reactive, apparent, power factor",
            body: [
              "In an AC circuit with voltage V and current I displaced by phase angle phi, three kinds of power are defined. Active (real) power P = V I cos(phi) is the power actually dissipated in the resistive part, measured in watts (W); it is the average over one cycle. Reactive power Q = V I sin(phi) is the power oscillating between source and reactive elements (L and C), measured in volt-amperes reactive (VAR); it does no useful work but loads the line. Apparent power S = V I is the product of RMS voltage and current, measured in volt-amperes (VA); it is the 'headline' power the equipment must handle.",
              "The power triangle visualises the relationship: S is the hypotenuse, P is the adjacent (horizontal) side, Q is the opposite (vertical) side, and phi is the angle between S and P. By Pythagoras S^2 = P^2 + Q^2, so S = sqrt(P^2 + Q^2). The power factor is cos(phi) = P/S, ranging from 0 (purely reactive, no useful power) to 1 (purely resistive, all power useful). An inductive load (motor, transformer) has a lagging power factor (current lags voltage); a capacitive load has a leading power factor. Utilities penalise low power factor because it forces them to size lines and transformers for the apparent power S even though only P does work.",
              "Worked example. A load draws 10 A at 230 V with a power factor of 0.8 lagging. Apparent power S = V I = 230 x 10 = 2300 VA. Active power P = V I cos(phi) = 2300 x 0.8 = 1840 W. The angle phi = arccos(0.8) = 36.9 deg, so sin(phi) = 0.6. Reactive power Q = V I sin(phi) = 2300 x 0.6 = 1380 VAR. Verify: S^2 = 2300^2 = 5,290,000; P^2 + Q^2 = 1840^2 + 1380^2 = 3,385,600 + 1,904,400 = 5,290,000 - checks. The load is inductive (lagging PF) because most motor and transformer loads are.",
              "The instantaneous power p(t) = v(t) x i(t) oscillates at twice the supply frequency and has a DC component equal to P plus an AC component oscillating between -S and +S (the reactive exchange). The average of p(t) over one cycle is P, the amplitude of the oscillating part is S, and the reactive amplitude is Q. This is why a wattmeter (which averages) reads P while an ammeter reads I (related to S) - they measure different aspects of the same flow. Improving the power factor (section 2.6) reduces S for the same P, shrinking the line current and the transformer rating needed.",
            ],
            bullets: [
              "Active power P = V I cos(phi) in watts - the useful, dissipated power.",
              "Reactive power Q = V I sin(phi) in VAR - oscillating, no useful work.",
              "Apparent power S = V I in VA - the headline rating power.",
              "Power factor cos(phi) = P/S; ranges from 0 to 1; unity for a pure resistor.",
              "Power triangle: S is hypotenuse, P adjacent, Q opposite; S^2 = P^2 + Q^2.",
              "Inductive load: lagging PF; capacitive load: leading PF.",
              "Utilities penalise low PF because lines and transformers must be sized for S, not P.",
            ],
            table: {
              caption: "Power quantities for V = 230 V, I = 10 A, PF = 0.8 lagging.",
              headers: ["Quantity", "Formula", "Value", "Unit"],
              rows: [
                ["Apparent power S", "V I", "2300", "VA"],
                ["Active power P", "V I cos(phi)", "1840", "W"],
                ["Reactive power Q", "V I sin(phi)", "1380", "VAR"],
                ["Phase angle phi", "arccos(PF)", "36.9", "deg"],
                ["Power factor", "P / S", "0.8", "lagging"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The power triangle",
              caption:
                "Apparent power S at the top; active P and reactive Q form the base angles. Power factor is cos(phi).",
              tiers: [
                { label: "Apparent power S = V I (VA)", note: "hypotenuse; the headline rating" },
                { label: "Active P = V I cos(phi) (W)", note: "useful, dissipated power" },
                { label: "Reactive Q = V I sin(phi) (VAR)", note: "oscillating, no useful work" },
                { label: "Power factor cos(phi) = P/S", note: "ranges 0 to 1; unity for pure R" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always specify lagging or leading",
              body: "A power factor of 0.8 is incomplete - it must be stated as '0.8 lagging' (inductive) or '0.8 leading' (capacitive). The distinction matters for power factor correction: a lagging PF needs a capacitor to compensate, a leading PF needs an inductor. RGPV examiners deduct a mark for omitting the qualifier.",
            },
            keyTerms: [
              { term: "Active power P", definition: "P = V I cos(phi) in watts; the average power dissipated in the resistance." },
              { term: "Reactive power Q", definition: "Q = V I sin(phi) in VAR; the oscillating power exchanged with reactive elements." },
              { term: "Apparent power S", definition: "S = V I in VA; the product of RMS voltage and current; sizes lines and transformers." },
              { term: "Power factor", definition: "cos(phi) = P/S; ranges 0 to 1; lagging for inductive loads, leading for capacitive." },
            ],
            examQuestions: [
              {
                q: "Define active power, reactive power, apparent power and power factor. Draw the power triangle and state the relationship S^2 = P^2 + Q^2. A load draws 10 A at 230 V with a power factor of 0.8 lagging. Find P, Q, S and the phase angle.",
                marks: 7,
                outline: [
                  "Define P = V I cos(phi) (W), Q = V I sin(phi) (VAR), S = V I (VA), PF = cos(phi) = P/S.",
                  "Draw the power triangle: S hypotenuse, P adjacent, Q opposite, phi between S and P.",
                  "State S^2 = P^2 + Q^2 by Pythagoras on the triangle.",
                  "S = 230 x 10 = 2300 VA; P = 2300 x 0.8 = 1840 W.",
                  "phi = arccos(0.8) = 36.9 deg; sin(phi) = 0.6.",
                  "Q = 2300 x 0.6 = 1380 VAR (positive, inductive).",
                  "Verify: sqrt(1840^2 + 1380^2) = sqrt(5,290,000) = 2300 VA - checks.",
                ],
              },
              {
                q: "State the units of active power, reactive power and apparent power, and explain why a low power factor is undesirable.",
                marks: 3,
              },
              {
                q: "Distinguish between a lagging and a leading power factor.",
                marks: 2,
              },
            ],
          },
          // --- 2.6 ---
          {
            number: "2.6",
            title: "Power factor correction (worked capacitor sizing)",
            body: [
              "Power factor correction adds a reactive element (usually a capacitor in parallel with an inductive load) to bring the power factor closer to unity, reducing the apparent power S for the same active power P. The benefit is a smaller line current: since S = V I and S shrinks while P is fixed, I shrinks proportionally, reducing copper losses (I^2 R) in the line and freeing transformer capacity. Industries are charged penalties for PF below about 0.9, so correction capacitors pay for themselves quickly in avoided penalties and reduced line losses.",
              "The capacitor sizing formula. A load draws active power P at PF cos(phi_1), and we want to raise the PF to cos(phi_2). The reactive power before correction is Q1 = P tan(phi_1); after correction it is Q2 = P tan(phi_2). The capacitor must supply the difference Q_C = Q1 - Q2 = P (tan(phi_1) - tan(phi_2)). Since Q_C = V^2 / X_C = V^2 x omega C, we get C = P (tan(phi_1) - tan(phi_2)) / (omega V^2). The capacitor is connected in parallel; it does not change the load's active power or voltage, only the source-side current and PF.",
              "Worked example. A 10 kW load operates at PF 0.7 lagging on a 400 V, 50 Hz supply. We want to raise the PF to 0.95 lagging. Before: cos(phi_1) = 0.7, phi_1 = arccos(0.7) = 45.57 deg, tan(phi_1) = 1.02. After: cos(phi_2) = 0.95, phi_2 = arccos(0.95) = 18.19 deg, tan(phi_2) = 0.329. Q_C = 10000 x (1.02 - 0.329) = 10000 x 0.691 = 6910 VAR. C = Q_C / (omega V^2) = 6910 / (2 pi x 50 x 400^2) = 6910 / (2 pi x 50 x 160000) = 6910 / 50,265,000 = 1.37 x 10^-4 F = 137 microfarad. So a 137 microfarad capacitor in parallel corrects the PF from 0.7 to 0.95.",
              "The line current before correction: S1 = P / cos(phi_1) = 10000/0.7 = 14,286 VA, so I1 = S1/V = 14286/400 = 35.7 A. After correction: S2 = 10000/0.95 = 10,526 VA, so I2 = 10526/400 = 26.3 A. The line current drops by 9.4 A (26 per cent reduction), saving I^2 R losses in the feeder and freeing 3760 VA of transformer capacity. Overcorrecting to a leading PF (adding too much capacitance) is harmful - it raises the current again and can cause overvoltage due to capacitor-excitation of motors. Always correct to a slightly lagging PF (0.95 is typical), never past unity.",
            ],
            bullets: [
              "PF correction adds a parallel capacitor to raise the PF toward unity.",
              "Benefit: smaller line current, lower I^2 R losses, freed transformer capacity.",
              "Capacitor sizing: C = P (tan(phi_1) - tan(phi_2)) / (omega V^2).",
              "Q_C = P (tan(phi_1) - tan(phi_2)) is the reactive power the capacitor must supply.",
              "Worked: 10 kW at 0.7 -> 0.95, 400 V 50 Hz needs C = 137 microfarad.",
              "Line current drops from 35.7 A to 26.3 A (26 per cent reduction).",
              "Never overcorrect past unity to a leading PF - it raises current and can overvoltage.",
            ],
            codeExample: {
              language: "python",
              caption: "Power factor correction capacitor calculator",
              code: `import math

def pf_correction(p, pf1, pf2, v, f):
    phi1 = math.acos(pf1)
    phi2 = math.acos(pf2)
    qc = p * (math.tan(phi1) - math.tan(phi2))
    omega = 2 * math.pi * f
    c = qc / (omega * v * v)
    s1 = p / pf1
    s2 = p / pf2
    return c * 1e6, s1 / v, s2 / v

c, i1, i2 = pf_correction(p=10000, pf1=0.7, pf2=0.95, v=400, f=50)
print("capacitor =", round(c, 1), "microfarad")
print("current before =", round(i1, 1), "A")
print("current after  =", round(i2, 1), "A")
# capacitor = 137.4 microfarad, before 35.7 A, after 26.3 A`,
            },
            diagram: {
              kind: "flow",
              title: "Power factor correction procedure",
              caption:
                "Compute the reactive gap, size the capacitor, verify the new line current.",
              steps: [
                { label: "Find phi_1 and phi_2", note: "arccos of old and new PF" },
                { label: "Compute Q_C = P (tan phi_1 - tan phi_2)", note: "reactive gap to fill" },
                { label: "Size C = Q_C / (omega V^2)", note: "parallel capacitor value" },
                { label: "Check new line current I2 = P/(V x PF2)", note: "should be smaller" },
                { label: "Stop at 0.95 lagging", note: "do not overcorrect past unity" },
              ],
            },
            callout: {
              type: "warning",
              title: "Compute angles in radians in code",
              body: "Python's math.tan and math.acos use radians, not degrees. A common coding error is to pass degrees directly. Always convert: radians = degrees x pi / 180, or use math.radians(). In handwritten exams, work in degrees and use a calculator's degree-mode trig functions.",
            },
            keyTerms: [
              { term: "Power factor correction", definition: "Adding a parallel capacitor to raise the PF toward unity, reducing line current for the same active power." },
              { term: "Reactive gap Q_C", definition: "Q_C = P (tan(phi_1) - tan(phi_2)); the reactive power the correction capacitor must supply." },
              { term: "Capacitor sizing formula", definition: "C = P (tan(phi_1) - tan(phi_2)) / (omega V^2); gives the parallel capacitance needed." },
              { term: "Overcorrection", definition: "Adding too much capacitance, pushing the PF past unity to leading; raises current and can overvoltage." },
            ],
            examQuestions: [
              {
                q: "Explain the need for power factor correction. Derive the formula for the capacitance required to improve the power factor from cos(phi_1) to cos(phi_2). A 10 kW load at PF 0.7 lagging on a 400 V, 50 Hz supply is to be corrected to 0.95 lagging. Find the capacitor value and the reduction in line current.",
                marks: 7,
                outline: [
                  "Explain: low PF means large S and large I for the same P, causing line losses and transformer overload.",
                  "Derive: Q1 = P tan(phi_1), Q2 = P tan(phi_2), so Q_C = P (tan phi_1 - tan phi_2).",
                  "Since Q_C = omega C V^2, C = P (tan phi_1 - tan phi_2) / (omega V^2).",
                  "phi_1 = arccos(0.7) = 45.57 deg, tan(phi_1) = 1.02; phi_2 = arccos(0.95) = 18.19 deg, tan(phi_2) = 0.329.",
                  "Q_C = 10000 x (1.02 - 0.329) = 6910 VAR.",
                  "C = 6910 / (2 pi x 50 x 400^2) = 6910 / 50,265,000 = 137 microfarad.",
                  "I1 = P/(V x PF1) = 35.7 A; I2 = P/(V x PF2) = 26.3 A; reduction 9.4 A (26 per cent).",
                ],
              },
              {
                q: "State two benefits of improving the power factor of an industrial load.",
                marks: 3,
              },
              {
                q: "Why is it not advisable to overcorrect the power factor past unity to a leading value?",
                marks: 2,
              },
            ],
          },
          // --- 2.7 ---
          {
            number: "2.7",
            title: "Three-phase basics: star, delta, line and phase quantities",
            body: [
              "A three-phase system uses three sinusoidal voltages displaced by 120 degrees, generated by three separate windings on the same alternator. The windings can be connected in star (Y) or delta. In a star connection, one end of each winding is joined at a common neutral point N, and the other ends form the three line terminals A, B, C. In a delta connection, the windings form a closed triangle, with the three junctions serving as the line terminals. The voltage across a single winding is the phase voltage V_ph; the voltage between two line terminals is the line voltage V_L.",
              "In a star-connected system, the line voltage is sqrt(3) times the phase voltage: V_L = sqrt(3) x V_ph. The line current equals the phase current: I_L = I_ph. The standard Indian three-phase supply is 400 V line-to-line, which corresponds to V_ph = 400/sqrt(3) = 230 V - the same 230 V used for single-phase domestic supply, taken between one line and the neutral. In a delta-connected system, the line voltage equals the phase voltage: V_L = V_ph, but the line current is sqrt(3) times the phase current: I_L = sqrt(3) x I_ph. These sqrt(3) relationships come from the 120-degree phase displacement between the three sinusoids.",
              "The total power in a balanced three-phase system (equal impedances in all three phases) is P = 3 x V_ph x I_ph x cos(phi) = sqrt(3) x V_L x I_L x cos(phi), where phi is the phase angle of each phase impedance. The reactive power is Q = sqrt(3) x V_L x I_L x sin(phi) and the apparent power is S = sqrt(3) x V_L x I_L. The factor sqrt(3) appears in the line-quantity formulas because the three phase powers add with 120-degree displacement, and the Pythagorean combination of two 120-degree-displaced equal quantities gives sqrt(3).",
              "Worked example. A balanced star-connected load draws 10 A per phase at a power factor of 0.8 lagging from a 400 V, 50 Hz three-phase supply. V_ph = V_L / sqrt(3) = 400/1.732 = 230 V. I_ph = I_L = 10 A (star). Per-phase power = V_ph x I_ph x cos(phi) = 230 x 10 x 0.8 = 1840 W. Total three-phase power P = 3 x 1840 = 5520 W, or equivalently P = sqrt(3) x V_L x I_L x cos(phi) = 1.732 x 400 x 10 x 0.8 = 5542 W (the small difference is rounding). If the same load were delta-connected, V_ph = V_L = 400 V and I_ph = V_ph / Z_ph would be higher, drawing sqrt(3) times more line current and three times more total power.",
            ],
            bullets: [
              "Three sinusoids displaced by 120 degrees; windings in star (Y) or delta.",
              "Star: V_L = sqrt(3) x V_ph; I_L = I_ph; neutral available.",
              "Delta: V_L = V_ph; I_L = sqrt(3) x I_ph; no neutral.",
              "Indian supply: 400 V line-to-line, 230 V line-to-neutral (star phase).",
              "Total power (balanced): P = sqrt(3) x V_L x I_L x cos(phi).",
              "Reactive Q = sqrt(3) x V_L x I_L x sin(phi); apparent S = sqrt(3) x V_L x I_L.",
              "Star-to-delta conversion of the same load draws three times more power (V_ph triples).",
            ],
            table: {
              caption: "Star vs delta three-phase connections (balanced load).",
              headers: ["Quantity", "Star (Y)", "Delta"],
              rows: [
                ["Line voltage V_L", "sqrt(3) x V_ph", "V_ph"],
                ["Line current I_L", "I_ph", "sqrt(3) x I_ph"],
                ["Phase voltage V_ph (at 400 V L-L)", "230 V", "400 V"],
                ["Neutral available", "yes", "no"],
                ["Total power P", "sqrt(3) V_L I_L cos(phi)", "sqrt(3) V_L I_L cos(phi)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Star (Y) vs delta three-phase connections",
              caption:
                "Star gives sqrt(3) step-down in voltage; delta gives sqrt(3) step-up in current. Power formula is identical.",
              left: {
                heading: "Star (Y) connection",
                items: [
                  "Common neutral point N",
                  "V_L = sqrt(3) x V_ph",
                  "I_L = I_ph",
                  "Neutral wire available",
                  "Used for distribution (230 V single-phase)",
                ],
              },
              right: {
                heading: "Delta connection",
                items: [
                  "Closed triangle, no neutral",
                  "V_L = V_ph",
                  "I_L = sqrt(3) x I_ph",
                  "No neutral wire",
                  "Used for transmission and motor windings",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The sqrt(3) factor is the whole topic",
              body: "Almost every three-phase question tests the sqrt(3) relationships: V_L = sqrt(3) V_ph in star, I_L = sqrt(3) I_ph in delta, and P = sqrt(3) V_L I_L cos(phi). Memorise these three formulas and you have 80 per cent of the marks in any three-phase problem. The factor 1.732 is sqrt(3) to three places.",
            },
            keyTerms: [
              { term: "Phase voltage V_ph", definition: "Voltage across one winding of a three-phase source or load." },
              { term: "Line voltage V_L", definition: "Voltage between any two line terminals of a three-phase system." },
              { term: "Star (Y) connection", definition: "Windings joined at a common neutral; V_L = sqrt(3) V_ph and I_L = I_ph." },
              { term: "Delta connection", definition: "Windings in a closed triangle; V_L = V_ph and I_L = sqrt(3) I_ph." },
              { term: "Balanced three-phase power", definition: "P = sqrt(3) V_L I_L cos(phi); equal impedances in all three phases." },
            ],
            examQuestions: [
              {
                q: "Explain star and delta connections in a three-phase system. Derive the relationships between line and phase voltages and currents for each. A balanced star-connected load draws 10 A per phase at PF 0.8 lagging from a 400 V supply. Find the phase voltage and the total three-phase power.",
                marks: 7,
                outline: [
                  "Describe star: common neutral, V_L = sqrt(3) V_ph, I_L = I_ph.",
                  "Describe delta: closed triangle, V_L = V_ph, I_L = sqrt(3) I_ph.",
                  "Derive V_L = sqrt(3) V_ph from the 120-degree phasor difference of two phase voltages.",
                  "For star at 400 V: V_ph = 400/sqrt(3) = 230 V.",
                  "I_ph = I_L = 10 A in star.",
                  "Per-phase power = 230 x 10 x 0.8 = 1840 W; total P = 3 x 1840 = 5520 W.",
                  "Verify with line formula: P = sqrt(3) x 400 x 10 x 0.8 = 5542 W (rounding).",
                ],
              },
              {
                q: "State the relationship between line current and phase current in a delta-connected balanced load.",
                marks: 3,
              },
              {
                q: "What is the phase voltage of a 400 V star-connected three-phase supply?",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT III - MAGNETIC CIRCUITS AND TRANSFORMERS
    // =================================================================
    {
      number: 3,
      roman: "III",
      title: "Magnetic Circuits and Transformers",
      summary:
        "Unit III parallels electric circuit theory with magnetic circuits: MMF, flux and reluctance; magnetic field intensity and flux density; Faraday's and Lenz's laws; hysteresis and eddy current losses with the Steinmetz equation; transformer construction, working principle and EMF equation; the equivalent circuit and phasor diagram; efficiency and regulation with worked numericals; and a brief on auto-transformers and instrument transformers (CT, PT).",
      chapter: {
        number: "03",
        title: "Magnetic Circuits and Transformers",
        intro:
          "Unit III draws the magnetic analogy to Ohm's law (MMF = flux x reluctance), states Faraday's and Lenz's laws of induction, quantifies core losses by the Steinmetz equation and eddy-current formula, develops the transformer from construction through the EMF equation E = 4.44 f N phi_m, builds the equivalent circuit and phasor diagram, and closes with efficiency, regulation, auto-transformers and instrument transformers.",
        inOneBreath:
          "MMF F = N I in ampere-turns drives flux phi (weber) through reluctance S = l/(mu A) in AT/Wb; magnetic Ohm's law phi = F/S; H = N I/l in A/m, B = mu H in tesla; Faraday's law e = -N dphi/dt; Lenz's law says induced EMF opposes the change; hysteresis loss P_h = k_h f B_max^n (Steinmetz, n ~ 1.6); eddy loss P_e = k_e f^2 B_max^2 t^2, reduced by laminations; transformer EMF E = 4.44 f N phi_m; turns ratio a = N1/N2 = V1/V2 = I2/I1; equivalent circuit has R1, X1, R_c, X_m, R2' = R2/a^2, X2' = X2/a^2; efficiency = output/(output + P_cu + P_core); regulation = (V_nl - V_fl)/V_fl; auto-transformer has a single tapped winding; CT steps down current, PT steps down voltage for measurement.",
        sections: [
          // --- 3.1 ---
          {
            number: "3.1",
            title: "Magnetic circuit concepts: MMF, flux, reluctance",
            body: [
              "A magnetic circuit is the path through which magnetic flux is guided, just as an electric circuit guides current. The magnetomotive force (MMF) F = N I is the drive, measured in ampere-turns (AT), where N is the number of coil turns and I is the current in amperes. The magnetic flux phi is the total magnetic field passing through a cross-section, measured in webers (Wb). The reluctance S opposes flux flow, measured in AT per weber: S = l / (mu A), where l is the magnetic path length, A is the cross-sectional area, and mu = mu_0 x mu_r is the permeability (mu_0 = 4 pi x 10^-7 H/m for free space, mu_r is the relative permeability of the core material).",
              "The magnetic Ohm's law phi = F / S is the direct analogy of V = I R: MMF plays the role of voltage, flux the role of current, reluctance the role of resistance. Series magnetic circuits (multiple core sections of different material or area) add reluctances, just as series resistors add. Air gaps have very high reluctance because mu_r = 1 for air (vs thousands for iron), so even a small gap dominates the total reluctance and limits the flux. Parallel magnetic paths add by reciprocal, like parallel resistors. This analogy lets every DC circuit technique transfer to magnetic design.",
              "Worked example. A magnetic core has N = 500 turns, I = 2 A, a mean path length l = 0.5 m, cross-section A = 0.001 m^2, and relative permeability mu_r = 1000. MMF F = N I = 500 x 2 = 1000 AT. Reluctance S = l / (mu_0 mu_r A) = 0.5 / (4 pi x 10^-7 x 1000 x 0.001) = 0.5 / (1.257 x 10^-6) = 397,900 AT/Wb. Flux phi = F / S = 1000 / 397900 = 2.51 x 10^-3 Wb = 2.51 mWb. Flux density B = phi / A = 2.51 x 10^-3 / 0.001 = 2.51 T - quite high, near the saturation limit of typical iron.",
              "The analogy has limitations. Magnetic circuits are nonlinear: mu_r varies with flux density (iron saturates), so reluctance is not constant but depends on the operating point. Fringing (flux bulging at air gaps) and leakage (flux escaping the core) add corrections of 5-20 per cent. Despite these caveats, the magnetic Ohm's law gives first-cut estimates accurate enough for exam problems and for sizing electromagnets, relays and transformer cores. The real design then refines the estimate with B-H curves and finite-element simulation, but the underlying phi = F/S skeleton is unchanged.",
            ],
            bullets: [
              "MMF F = N I in ampere-turns - the magnetic 'voltage'.",
              "Flux phi in webers - the magnetic 'current'.",
              "Reluctance S = l / (mu A) in AT/Wb - the magnetic 'resistance'.",
              "Magnetic Ohm's law: phi = F / S, directly analogous to V = I R.",
              "mu = mu_0 x mu_r; mu_0 = 4 pi x 10^-7 H/m; mu_r is 1000-5000 for iron, 1 for air.",
              "Air gaps dominate reluctance because mu_r = 1 there; even small gaps limit flux.",
              "Limitation: mu_r varies with B (saturation); magnetic circuits are nonlinear.",
            ],
            table: {
              caption: "Electric-to-magnetic circuit analogy.",
              headers: ["Electric", "Magnetic", "Formula", "Unit"],
              rows: [
                ["Voltage V", "MMF F", "F = N I", "ampere-turn (AT)"],
                ["Current I", "Flux phi", "phi = F / S", "weber (Wb)"],
                ["Resistance R", "Reluctance S", "S = l / (mu A)", "AT/Wb"],
                ["Conductance G = 1/R", "Permeance = 1/S", "Lambda = mu A / l", "Wb/AT"],
                ["Resistivity rho", "Reluctivity 1/mu", "1/(mu_0 mu_r)", "m/H"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Electric circuit vs magnetic circuit",
              caption:
                "Every DC circuit law transfers: V = I R becomes phi = F / S, series R adds, parallel R adds by reciprocal.",
              left: {
                heading: "Electric circuit",
                items: [
                  "Voltage V drives current I",
                  "V = I R (Ohm's law)",
                  "Resistance R = rho l / A",
                  "Series: R_total = R1 + R2",
                  "Power dissipated = I^2 R",
                ],
              },
              right: {
                heading: "Magnetic circuit",
                items: [
                  "MMF F drives flux phi",
                  "phi = F / S (magnetic Ohm's law)",
                  "Reluctance S = l / (mu A)",
                  "Series: S_total = S1 + S2",
                  "Energy stored = phi^2 S / 2",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Air gaps dominate the reluctance",
              body: "When a magnetic circuit has an air gap, compute its reluctance separately (S_gap = l_gap / (mu_0 A)) and add it to the iron reluctance. Because mu_r for iron is 1000-5000 times that of air, even a 1 mm gap can contribute more reluctance than 0.5 m of iron. Examiners test this by inserting a gap and checking that students do not ignore it.",
            },
            keyTerms: [
              { term: "MMF", definition: "Magnetomotive force F = N I in ampere-turns; the magnetic drive analogous to voltage." },
              { term: "Magnetic flux", definition: "Total magnetic field through a cross-section, phi = F / S, measured in webers." },
              { term: "Reluctance", definition: "Opposition to flux flow S = l/(mu A) in AT/Wb; analogous to resistance." },
              { term: "Permeability", definition: "mu = mu_0 mu_r; the ease with which a material supports magnetic flux." },
            ],
            examQuestions: [
              {
                q: "Define MMF, flux and reluctance. State the magnetic Ohm's law and draw the analogy with the electric circuit. A magnetic core has N = 500 turns, I = 2 A, mean path length 0.5 m, cross-section 0.001 m^2 and mu_r = 1000. Find the MMF, reluctance, flux and flux density.",
                marks: 7,
                outline: [
                  "Define F = N I (AT), phi (Wb), S = l/(mu A) (AT/Wb); state phi = F/S.",
                  "Draw analogy: V <-> F, I <-> phi, R <-> S; series and parallel rules match.",
                  "MMF F = 500 x 2 = 1000 AT.",
                  "mu = mu_0 mu_r = 4 pi x 10^-7 x 1000 = 1.257 x 10^-3 H/m.",
                  "S = 0.5 / (1.257e-3 x 0.001) = 397,900 AT/Wb.",
                  "phi = 1000 / 397900 = 2.51 x 10^-3 Wb = 2.51 mWb.",
                  "B = phi / A = 2.51e-3 / 0.001 = 2.51 T (near saturation for iron).",
                ],
              },
              {
                q: "Why does a small air gap in a magnetic circuit dominate the total reluctance?",
                marks: 3,
              },
              {
                q: "State the unit of MMF and the unit of reluctance.",
                marks: 2,
              },
            ],
          },
          // --- 3.2 ---
          {
            number: "3.2",
            title: "Magnetic field intensity, flux density, Faraday's and Lenz's laws",
            body: [
              "The magnetic field intensity H is the MMF per unit path length: H = N I / l, measured in amperes per metre (A/m). It is the cause; the magnetic flux density B is the effect, related by B = mu H, measured in tesla (T) where 1 T = 1 Wb/m^2. For free space mu_0 = 4 pi x 10^-7, so even a modest H of 1000 A/m gives B = 1.257 x 10^-3 T in air - tiny compared to the 1-2 T achievable in iron, which is why iron cores are used in virtually every electromagnetic device. The B-H curve (magnetisation characteristic) of a material is the empirical relationship between H and B, showing saturation at high H.",
              "Faraday's law of electromagnetic induction states that the EMF induced in a coil is proportional to the rate of change of flux linkage: e = -N dphi/dt, where N is the number of turns and dphi/dt is the rate of flux change. The negative sign is Lenz's law: the induced EMF drives a current whose magnetic field opposes the change in flux that produced it (conservation of energy). If the flux is increasing, the induced current opposes the increase; if decreasing, it opposes the decrease. Lenz's law is the reason a motor develops back-EMF and a generator needs mechanical input - the system resists the change that powers it.",
              "Worked example. A coil of N = 100 turns has its flux changed from 0 to 0.01 Wb in 0.1 seconds. The rate of change dphi/dt = 0.01/0.1 = 0.1 Wb/s. The induced EMF magnitude |e| = N dphi/dt = 100 x 0.1 = 10 V. The direction (by Lenz's law) is such that the induced current creates a flux opposing the original increase. If the flux were sinusoidal, phi = phi_m sin(omega t), then e = -N phi_m omega cos(omega t) = N phi_m omega sin(omega t + 90 deg), and the RMS value E = N phi_m omega / sqrt(2) = 4.44 f N phi_m (using omega = 2 pi f and 2 pi/sqrt(2) = 4.44) - the transformer EMF equation of section 3.4.",
              "Faraday's and Lenz's laws underlie every electromechanical device. A transformer's secondary voltage is induced by changing primary flux linking the secondary. A DC motor's back-EMF is induced by the armature conductors cutting field flux. An alternator's output is induced by rotating a coil in a magnetic field. An induction motor's rotor current is induced by the rotating field sweeping past the rotor bars. Even wireless charging and electric guitar pickups are Faraday induction. The sign from Lenz's law determines whether the device is a motor (mechanical output, electrical input) or a generator (electrical output, mechanical input) - the same machine, run differently.",
            ],
            bullets: [
              "Magnetic field intensity H = N I / l in A/m; the cause.",
              "Flux density B = mu H in tesla; the effect.",
              "mu_0 = 4 pi x 10^-7 H/m; mu_r is 1000-5000 for iron, 1 for air.",
              "Faraday's law: e = -N dphi/dt; EMF proportional to rate of change of flux linkage.",
              "Lenz's law: induced EMF drives a current opposing the flux change (energy conservation).",
              "Sinusoidal flux gives RMS E = 4.44 f N phi_m - the transformer EMF equation.",
              "Underlies transformers, motors, generators, induction motors, wireless charging.",
            ],
            table: {
              caption: "Magnetic field quantities and their units.",
              headers: ["Quantity", "Symbol", "Formula", "Unit"],
              rows: [
                ["Magnetic field intensity", "H", "N I / l", "A/m"],
                ["Flux density", "B", "mu H", "tesla (T) = Wb/m^2"],
                ["Magnetic flux", "phi", "B x A", "weber (Wb)"],
                ["MMF", "F", "N I", "ampere-turn (AT)"],
                ["Permeability", "mu", "mu_0 mu_r", "H/m"],
                ["Induced EMF", "e", "-N dphi/dt", "volt (V)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From MMF to induced EMF",
              caption:
                "Current drives MMF, MMF drives flux, changing flux induces EMF; Lenz's law sets the direction.",
              steps: [
                { label: "Current I in coil", note: "N turns" },
                { label: "MMF F = N I", note: "ampere-turns" },
                { label: "Field intensity H = F/l", note: "A/m" },
                { label: "Flux density B = mu H", note: "tesla" },
                { label: "Flux phi = B A", note: "weber" },
                { label: "EMF e = -N dphi/dt (Lenz)", note: "volts, opposes change" },
              ],
            },
            callout: {
              type: "exam",
              title: "The negative sign is Lenz's law",
              body: "Always write e = -N dphi/dt with the negative sign. Examiners look for the sign as evidence you understand Lenz's law (the induced EMF opposes the change). In magnitude-only problems you may drop it for the arithmetic, but the symbolic statement must include it. Explain the direction separately in words if the question asks for it.",
            },
            keyTerms: [
              { term: "Magnetic field intensity H", definition: "H = N I / l in A/m; the magnetic drive per unit path length." },
              { term: "Flux density B", definition: "B = mu H in tesla; the magnetic field per unit area." },
              { term: "Faraday's law", definition: "e = -N dphi/dt; the induced EMF is proportional to the rate of change of flux linkage." },
              { term: "Lenz's law", definition: "The induced EMF drives a current whose field opposes the change in flux; the negative sign in Faraday's law." },
            ],
            examQuestions: [
              {
                q: "Define magnetic field intensity H and flux density B, stating the relationship between them. State Faraday's law and Lenz's law of electromagnetic induction. A coil of 100 turns has its flux changed from 0 to 0.01 Wb in 0.1 s. Find the induced EMF and explain its direction by Lenz's law.",
                marks: 7,
                outline: [
                  "Define H = N I / l (A/m), B = mu H (T), with mu = mu_0 mu_r.",
                  "State Faraday's law e = -N dphi/dt; Lenz's law: induced current opposes the flux change.",
                  "Rate of change dphi/dt = 0.01 / 0.1 = 0.1 Wb/s.",
                  "EMF magnitude |e| = N dphi/dt = 100 x 0.1 = 10 V.",
                  "Sign by Lenz: flux is increasing, so induced current creates opposing flux.",
                  "Direction: by the right-hand rule, the induced current flows to oppose the increase.",
                  "Note: if flux were sinusoidal, E = 4.44 f N phi_m would give the RMS value.",
                ],
              },
              {
                q: "State the relationship between magnetic field intensity H and flux density B, and explain why iron is used as a core material.",
                marks: 3,
              },
              {
                q: "State Lenz's law and explain the significance of the negative sign in e = -N dphi/dt.",
                marks: 2,
              },
            ],
          },
          // --- 3.3 ---
          {
            number: "3.3",
            title: "Hysteresis and eddy current losses (Steinmetz equation)",
            body: [
              "When a magnetic core carries alternating flux, two energy losses appear in the iron. Hysteresis loss is the energy expended to repeatedly magnetise and demagnetise the core through its B-H loop each cycle; the area of the loop equals the energy lost per unit volume per cycle. Steinmetz's empirical equation quantifies it: P_h = k_h x f x B_max^n, where k_h is a material constant, f is the frequency, B_max is the peak flux density, and the exponent n (the Steinmetz exponent) is typically 1.5 to 2.5, around 1.6 for transformer steel. Hysteresis loss is proportional to frequency (one loop per cycle).",
              "Eddy current loss arises because the alternating flux induces circulating currents (eddy currents) in the core iron itself, which dissipate as I^2 R heating. The eddy current loss formula is P_e = k_e x f^2 x B_max^2 x t^2, where k_e is a material constant and t is the thickness of the laminations. Eddy loss is proportional to frequency squared (worse at high frequency) and to lamination thickness squared, which is why transformer cores are built from thin insulated laminations stacked together rather than from a solid block. Halving the lamination thickness reduces eddy loss by a factor of four.",
              "The total core loss (iron loss) is P_core = P_h + P_e = k_h f B_max^n + k_e f^2 B_max^2 t^2. At constant frequency and flux density, core loss is constant regardless of load - it depends only on voltage and frequency, so it is also called the constant loss or no-load loss. Separating the two losses experimentally is done by the separation-of-losses test: run the core at variable frequency with constant B_max (so P_h is proportional to f and P_e to f^2), plot P_core/f versus f, and the intercept gives k_h B_max^n while the slope gives k_e B_max^2 t^2. This separation guides core material selection and lamination design.",
              "Worked example. A transformer core has hysteresis loss of 200 W and eddy current loss of 100 W at 50 Hz. At 60 Hz with the same B_max: P_h scales linearly with f, so P_h(60) = 200 x 60/50 = 240 W. P_e scales with f^2, so P_e(60) = 100 x (60/50)^2 = 100 x 1.44 = 144 W. Total at 60 Hz = 240 + 144 = 384 W, up from 300 W at 50 Hz - a 28 per cent increase. This is why operating a 50 Hz transformer at 60 Hz is generally safe (lower B_max for the same V/f) but operating a 60 Hz transformer at 50 Hz can overheat (higher B_max drives up both losses).",
            ],
            bullets: [
              "Hysteresis loss P_h = k_h f B_max^n (Steinmetz); n ~ 1.6 for transformer steel.",
              "Energy per cycle = area of the B-H loop; P_h proportional to frequency.",
              "Eddy current loss P_e = k_e f^2 B_max^2 t^2; proportional to frequency squared.",
              "Laminations reduce eddy loss: halving thickness cuts P_e by factor of four.",
              "Total core loss P_core = P_h + P_e; constant at fixed V and f, independent of load.",
              "Separation test: at constant B_max, plot P_core/f vs f; intercept gives P_h/f slope.",
              "50 Hz transformer at 60 Hz is safe; 60 Hz at 50 Hz can overheat (B_max rises).",
            ],
            table: {
              caption: "Hysteresis vs eddy current loss comparison.",
              headers: ["Property", "Hysteresis loss", "Eddy current loss"],
              rows: [
                ["Formula", "k_h f B_max^n", "k_e f^2 B_max^2 t^2"],
                ["Frequency dependence", "linear in f", "quadratic in f^2"],
                ["Thickness dependence", "none", "quadratic in t^2"],
                ["Reduction method", "use grain-oriented steel", "use thin insulated laminations"],
                ["Physical origin", "B-H loop area per cycle", "circulating currents in the iron"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Iron loss decomposition",
              caption:
                "Two loss mechanisms stacked: hysteresis (frequency-linear) and eddy (frequency-squared); together they form the constant core loss.",
              layers: [
                { label: "Total iron (core) loss", note: "constant at fixed V, f" },
                { label: "Eddy current loss P_e = k_e f^2 B^2 t^2", note: "reduced by thin laminations" },
                { label: "Hysteresis loss P_h = k_h f B^n", note: "reduced by good steel" },
                { label: "B-H loop area = energy/cycle", note: "the physical origin of hysteresis" },
              ],
            },
            callout: {
              type: "warning",
              title: "Eddy loss scales as thickness squared",
              body: "A solid iron core would have enormous eddy currents. Transformer cores are laminated into sheets 0.35 mm thick, each insulated by a thin oxide or varnish layer, oriented parallel to the flux. The t^2 dependence means a 0.5 mm lamination has twice the eddy loss of a 0.35 mm one. Never substitute a solid core for a laminated one in an AC device.",
            },
            keyTerms: [
              { term: "Hysteresis loss", definition: "Energy dissipated cycling the core through its B-H loop; P_h = k_h f B_max^n (Steinmetz)." },
              { term: "Eddy current loss", definition: "I^2 R heating from circulating currents induced in the core; P_e = k_e f^2 B_max^2 t^2." },
              { term: "Steinmetz exponent n", definition: "Empirical exponent ~1.6 for transformer steel; relates hysteresis loss to peak flux density." },
              { term: "Core loss", definition: "P_core = P_h + P_e; the constant iron loss at fixed voltage and frequency, independent of load." },
            ],
            examQuestions: [
              {
                q: "Explain hysteresis and eddy current losses in a magnetic core. State the Steinmetz equation and the eddy current loss formula, and explain why transformer cores are laminated. A core has hysteresis loss 200 W and eddy loss 100 W at 50 Hz. Find the total core loss at 60 Hz with the same B_max.",
                marks: 7,
                outline: [
                  "Define hysteresis loss as B-H loop area per cycle; state P_h = k_h f B_max^n (n ~ 1.6).",
                  "Define eddy loss as I^2 R heating from circulating currents; state P_e = k_e f^2 B_max^2 t^2.",
                  "Explain laminations: t^2 dependence means thin insulated sheets cut eddy loss drastically.",
                  "At 50 Hz: P_h = 200 W, P_e = 100 W, total = 300 W.",
                  "At 60 Hz, same B_max: P_h scales with f, so P_h = 200 x 60/50 = 240 W.",
                  "P_e scales with f^2, so P_e = 100 x (60/50)^2 = 144 W.",
                  "Total at 60 Hz = 240 + 144 = 384 W (a 28 per cent rise).",
                ],
              },
              {
                q: "State how hysteresis and eddy current losses depend on frequency and flux density.",
                marks: 3,
              },
              {
                q: "Why are transformer cores made of thin insulated laminations rather than a solid block of iron?",
                marks: 2,
              },
            ],
          },
          // --- 3.4 ---
          {
            number: "3.4",
            title: "Transformer construction, working principle and EMF equation",
            body: [
              "A transformer is a static electromagnetic device that transfers AC electrical energy between two (or more) circuits at the same frequency but usually different voltages. It consists of a laminated iron core carrying two windings: the primary (N1 turns) connected to the source, and the secondary (N2 turns) connected to the load. The core provides a low-reluctance path for the alternating flux, and the two windings are linked by this mutual flux but are electrically isolated. There are no moving parts, which makes transformers highly efficient (95-99 per cent) and reliable.",
              "Working principle. When AC voltage V1 is applied to the primary, an alternating current I1 flows, producing an alternating flux phi in the core. This flux links the secondary winding and, by Faraday's law, induces an EMF E2 = -N2 dphi/dt in the secondary. The same flux links the primary, inducing a back-EMF E1 = -N1 dphi/dt that opposes V1. In an ideal transformer (no losses, no leakage), V1 = E1 and V2 = E2, and the voltage ratio equals the turns ratio: V1/V2 = N1/N2 = a (the turns ratio). The power balance P1 = P2 gives V1 I1 = V2 I2, so the current ratio is inverse: I1/I2 = N2/N1 = 1/a.",
              "The EMF equation. If the core flux is sinusoidal phi = phi_m sin(omega t), the induced EMF in either winding is e = -N dphi/dt = -N phi_m omega cos(omega t). The maximum EMF E_max = N phi_m omega = N phi_m x 2 pi f. The RMS value E = E_max / sqrt(2) = N phi_m x 2 pi f / sqrt(2) = 4.44 f N phi_m. So E1 = 4.44 f N1 phi_m and E2 = 4.44 f N2 phi_m, and the ratio E1/E2 = N1/N2 = a. This single equation E = 4.44 f N phi_m is the most important formula in transformer theory; it links frequency, turns, peak flux and RMS voltage.",
              "Worked example. A single-phase 50 Hz transformer has N1 = 400 primary turns and N2 = 50 secondary turns, with a peak core flux phi_m = 0.01 Wb. E1 = 4.44 x 50 x 400 x 0.01 = 888 V. E2 = 4.44 x 50 x 50 x 0.01 = 111 V. Turns ratio a = N1/N2 = 400/50 = 8, so V1/V2 = 8 (a step-down transformer from 888 V to 111 V). If the secondary delivers 20 A to a load, the primary current (ideal) is I1 = I2/a = 20/8 = 2.5 A, and the apparent power S = V2 I2 = 111 x 20 = 2220 VA = V1 I1 = 888 x 2.5 = 2220 VA - power is conserved (in the ideal case).",
            ],
            bullets: [
              "Transformer: static device transferring AC energy at different voltage, same frequency.",
              "Laminated iron core + primary (N1) + secondary (N2) windings; no moving parts.",
              "Working principle: AC primary current produces alternating flux; flux links secondary, induces EMF.",
              "Voltage ratio V1/V2 = N1/N2 = a (turns ratio); current ratio I1/I2 = N2/N1 = 1/a.",
              "EMF equation E = 4.44 f N phi_m (RMS); the key transformer formula.",
              "Ideal transformer: no losses, no leakage; V1 I1 = V2 I2 (power conserved).",
              "Step-down if a > 1 (N1 > N2); step-up if a < 1 (N1 < N2).",
            ],
            table: {
              caption: "Transformer EMF equation and turns-ratio relationships.",
              headers: ["Quantity", "Primary", "Secondary", "Ratio"],
              rows: [
                ["EMF (RMS)", "E1 = 4.44 f N1 phi_m", "E2 = 4.44 f N2 phi_m", "E1/E2 = N1/N2 = a"],
                ["Voltage", "V1 (ideal = E1)", "V2 (ideal = E2)", "V1/V2 = a"],
                ["Current", "I1", "I2", "I1/I2 = 1/a"],
                ["Apparent power", "S1 = V1 I1", "S2 = V2 I2", "S1 = S2 (ideal)"],
                ["Worked example", "888 V, 2.5 A", "111 V, 20 A", "a = 8 (step-down)"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Deriving the transformer EMF equation",
              caption:
                "Sinusoidal flux differentiates to a cosine; the 2 pi f / sqrt(2) factor gives 4.44.",
              stages: [
                { label: "Assume phi = phi_m sin(omega t)", note: "sinusoidal core flux" },
                { label: "Differentiate: dphi/dt = phi_m omega cos(omega t)", note: "Faraday's law" },
                { label: "Peak EMF E_max = N phi_m omega = 2 pi f N phi_m", note: "substitute omega = 2 pi f" },
                { label: "RMS E = E_max / sqrt(2)", note: "sine-wave RMS factor" },
                { label: "E = 4.44 f N phi_m", note: "2 pi / sqrt(2) = 4.44" },
              ],
            },
            callout: {
              type: "exam",
              title: "The 4.44 factor is 2 pi / sqrt(2)",
              body: "E = 4.44 f N phi_m comes from E_max = 2 pi f N phi_m and E = E_max/sqrt(2), so 2 pi/sqrt(2) = 4.44. If you forget the constant, derive it on the spot: 2 pi / 1.414 = 4.44. The formula is the single most asked transformer result in RGPV papers.",
            },
            keyTerms: [
              { term: "Transformer", definition: "A static electromagnetic device transferring AC energy between circuits at the same frequency but different voltage, via mutual flux linkage." },
              { term: "Turns ratio", definition: "a = N1/N2 = V1/V2 = I2/I1; the ratio of primary to secondary turns in an ideal transformer." },
              { term: "EMF equation", definition: "E = 4.44 f N phi_m; the RMS EMF induced in a winding of N turns by a sinusoidal peak flux phi_m at frequency f." },
              { term: "Step-down transformer", definition: "A transformer with N1 > N2 (a > 1), reducing voltage from primary to secondary." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working principle of a single-phase transformer. Derive the EMF equation E = 4.44 f N phi_m. A 50 Hz transformer has N1 = 400, N2 = 50 and phi_m = 0.01 Wb. Find E1, E2, the turns ratio and the primary current if the secondary delivers 20 A.",
                marks: 7,
                outline: [
                  "Construction: laminated iron core, primary (N1) and secondary (N2) windings, electrically isolated.",
                  "Working: AC primary current produces alternating flux; flux links secondary, induces EMF by Faraday's law.",
                  "Derive: phi = phi_m sin(omega t); e = -N dphi/dt = -N phi_m omega cos(omega t); E_max = 2 pi f N phi_m.",
                  "RMS E = E_max/sqrt(2) = (2 pi/sqrt(2)) f N phi_m = 4.44 f N phi_m.",
                  "E1 = 4.44 x 50 x 400 x 0.01 = 888 V; E2 = 4.44 x 50 x 50 x 0.01 = 111 V.",
                  "Turns ratio a = N1/N2 = 400/50 = 8 (step-down, V1/V2 = 8).",
                  "I1 = I2/a = 20/8 = 2.5 A; verify S = V1 I1 = 888 x 2.5 = 2220 VA = V2 I2.",
                ],
              },
              {
                q: "State the relationship between the voltage ratio and the turns ratio in an ideal transformer.",
                marks: 3,
              },
              {
                q: "Write the EMF equation of a transformer and state the meaning of each symbol.",
                marks: 2,
              },
            ],
          },
          // --- 3.5 ---
          {
            number: "3.5",
            title: "Equivalent circuit and phasor diagram of a transformer",
            body: [
              "A real transformer departs from the ideal in four ways: the windings have resistance R1 and R2 (copper loss); the windings have leakage reactance X1 and X2 (flux that links only one winding, not the core); the core requires a magnetising current through a shunt magnetising reactance X_m; and the core has iron loss modelled by a shunt resistance R_c. The equivalent circuit referred to the primary places R_c and X_m in parallel across the primary terminals (the magnetising branch), then R1 and X1 in series (primary copper and leakage), then an ideal transformer of ratio a, then R2 and X2 (secondary copper and leakage).",
              "To simplify analysis, the secondary quantities are referred to the primary: R2' = R2 / a^2, X2' = X2 / a^2, and the load impedance Z_L' = Z_L / a^2. After this referral, the ideal transformer disappears (it becomes 1:1), and the circuit reduces to R1 + jX1 in series with R2' + jX2' in series with Z_L', all fed through the magnetising branch. The total series resistance R_eq = R1 + R2' and total series reactance X_eq = X1 + X2' are measured by the short-circuit test. The magnetising branch parameters R_c and X_m are measured by the open-circuit test.",
              "The phasor diagram visualises the voltage drops. Take the secondary voltage V2 as the reference phasor along the positive real axis. The load current I2 lags or leads V2 by the load angle. The secondary EMF E2 = V2 + I2 R2 + j I2 X2 (the drops add vectorially). Referred to the primary, E1 = a E2. The primary voltage V1 = E1 + I1 R1 + j I1 X1, where I1 = I0 + I2' (I0 is the magnetising current, mostly reactive through X_m, with a small real component through R_c for the iron loss). The phasor diagram shows how each series drop tilts the V1 phasor away from V2.",
              "The equivalent circuit makes performance predictions straightforward. The copper loss is I1^2 R1 + I2^2 R2 = I1^2 R_eq (referred). The iron loss is V1^2 / R_c. The voltage regulation (section 3.6) comes from the series drops: at full load, V1 - V2' (referred) = I1 (R_eq cos(phi) + X_eq sin(phi)) approximately, for a lagging power factor. The efficiency follows from comparing the output power to the output plus copper and iron losses. Without the equivalent circuit, every one of these calculations would require solving the full coupled-coil equations; with it, they reduce to single-line arithmetic.",
            ],
            bullets: [
              "Four non-idealities: R1, R2 (copper loss); X1, X2 (leakage); R_c (iron loss); X_m (magnetising).",
              "Equivalent circuit: magnetising branch (R_c || X_m) + series R1, X1 + ideal transformer + R2, X2.",
              "Refer secondary to primary: R2' = R2/a^2, X2' = X2/a^2; ideal transformer vanishes.",
              "R_eq = R1 + R2' and X_eq = X1 + X2' measured by short-circuit test.",
              "R_c and X_m measured by open-circuit (no-load) test.",
              "Phasor diagram: V2 reference; E2 = V2 + I2 R2 + j I2 X2; V1 = E1 + I1 R1 + j I1 X1.",
              "Approximate regulation = I (R_eq cos(phi) + X_eq sin(phi)) / V, for lagging PF.",
            ],
            table: {
              caption: "Equivalent circuit parameters and how they are measured.",
              headers: ["Parameter", "Symbol", "Represents", "Measured by"],
              rows: [
                ["Primary resistance", "R1", "primary copper loss", "winding resistance test"],
                ["Secondary resistance (referred)", "R2' = R2/a^2", "secondary copper loss referred", "short-circuit test"],
                ["Total series resistance", "R_eq = R1 + R2'", "copper loss I^2 R_eq", "short-circuit test"],
                ["Total series reactance", "X_eq = X1 + X2'", "leakage flux drops", "short-circuit test"],
                ["Core loss resistance", "R_c", "iron loss V^2/R_c", "open-circuit test"],
                ["Magnetising reactance", "X_m", "flux-setting current", "open-circuit test"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Equivalent circuit parameter quadrants",
              caption:
                "Series vs shunt, primary vs referred-secondary; the four parameter families of a real transformer.",
              axes: { x: "series (left) <-> shunt (right)", y: "primary (top) <-> referred secondary (bottom)" },
              quadrants: [
                { label: "R1, X1 (primary series)", note: "copper and leakage, primary side" },
                { label: "R_c, X_m (shunt magnetising)", note: "iron loss and magnetising current" },
                { label: "R2', X2' (referred secondary series)", note: "R2/a^2, X2/a^2" },
                { label: "Z_L' (referred load)", note: "Z_L / a^2" },
              ],
            },
            callout: {
              type: "tip",
              title: "Refer everything to one side",
              body: "In any transformer calculation, refer all quantities to one side (usually the primary) using the a^2 factor for impedances. This eliminates the ideal transformer from the diagram and turns the problem into a single-loop series-parallel circuit. The a^2 arises because impedance Z = V/I, and V scales by a while I scales by 1/a, so Z scales by a^2.",
            },
            keyTerms: [
              { term: "Leakage reactance", definition: "Reactance X1, X2 modelling flux that links only one winding, not the core; causes voltage drop under load." },
              { term: "Magnetising branch", definition: "The shunt R_c and X_m representing iron loss and the magnetising current needed to set up the core flux." },
              { term: "Referred impedance", definition: "Secondary impedance scaled to the primary: Z' = Z/a^2; eliminates the ideal transformer from the circuit." },
              { term: "Equivalent resistance R_eq", definition: "R1 + R2' = R1 + R2/a^2; the total series resistance governing copper loss." },
            ],
            examQuestions: [
              {
                q: "Draw the equivalent circuit of a single-phase transformer referred to the primary and explain each parameter. Explain how the secondary resistance and reactance are referred to the primary. State which tests measure the series parameters and which measure the shunt parameters.",
                marks: 7,
                outline: [
                  "Draw: shunt R_c || X_m across primary, then series R1 + jX1, ideal transformer a:1, then R2 + jX2 and load.",
                  "Explain R1, R2 = winding resistances (copper loss); X1, X2 = leakage reactances.",
                  "Explain R_c = core (iron) loss resistance; X_m = magnetising reactance.",
                  "Refer secondary: R2' = R2/a^2, X2' = X2/a^2, Z_L' = Z_L/a^2 (impedance scales by a^2).",
                  "After referral, ideal transformer becomes 1:1 and the circuit is a single series-parallel network.",
                  "Short-circuit test (low voltage, rated current) measures R_eq = R1 + R2' and X_eq = X1 + X2'.",
                  "Open-circuit test (rated voltage, no load) measures R_c and X_m from the no-load power and current.",
                ],
              },
              {
                q: "Explain why the secondary impedance is divided by a^2 when referred to the primary.",
                marks: 3,
              },
              {
                q: "State which transformer test measures the magnetising branch parameters.",
                marks: 2,
              },
            ],
          },
          // --- 3.6 ---
          {
            number: "3.6",
            title: "Efficiency, regulation, auto-transformer, CT and PT",
            body: [
              "Efficiency is the ratio of output power to input power: eta = P_out / P_in = P_out / (P_out + P_losses). The losses are the copper loss P_cu = I2^2 R_eq (load-dependent, also called the variable loss) and the iron loss P_core = V^2/R_c (constant at rated voltage and frequency). Maximum efficiency occurs when P_cu = P_core, i.e. at a load where the variable loss equals the constant loss - typically at 50-80 per cent of full load for power transformers. The all-day efficiency (energy efficiency over 24 hours) is lower than the peak efficiency because the transformer spends much of the day lightly loaded, where the constant iron loss dominates.",
              "Voltage regulation is the change in secondary voltage from no-load to full-load, expressed as a percentage of the full-load voltage: regulation = (V_no_load - V_full_load) / V_full_load x 100 per cent. It depends on the series impedance R_eq and X_eq and on the load power factor. For a lagging PF, regulation = I (R_eq cos(phi) + X_eq sin(phi)) / V x 100 (positive, voltage drops on load). For a leading PF, the sin term is negative and regulation can be zero or even negative (voltage rises on load). A good transformer has 2-5 per cent regulation at unity PF.",
              "Worked example. A 10 kVA, 2300/230 V transformer has R_eq = 4 ohm (referred to primary), X_eq = 6 ohm, iron loss 80 W. At full load, unity PF: secondary current I2 = 10000/230 = 43.5 A; referred to primary I1 = 43.5/10 = 4.35 A. Copper loss = I1^2 R_eq = 4.35^2 x 4 = 75.7 W. Total loss = 75.7 + 80 = 155.7 W. Output = 10000 - 155.7 = 9844 W. Efficiency = 9844/10000 = 98.4 per cent. Regulation = I1 x R_eq / V1 = 4.35 x 4 / 2300 = 0.0076 = 0.76 per cent at unity PF. Maximum efficiency occurs when P_cu = P_core = 80 W, i.e. at I1 = sqrt(80/4) = 4.47 A, about full load.",
              "An auto-transformer has a single continuous winding with a tapping, so the primary and secondary share part of the winding. The power transfer is partly by conduction (direct electrical connection) and partly by induction, so an auto-transformer is smaller, cheaper and more efficient than a two-winding transformer of the same rating - but it does not isolate the circuits, so it cannot be used where isolation is required (e.g. between high-voltage lines and domestic supply). Instrument transformers are CT (current transformer) for stepping down line current to a safe measurable value (typically 1 A or 5 A for the meter) and PT (potential transformer) for stepping down line voltage (typically to 110 V). They isolate measurement and protection circuits from high-voltage lines.",
            ],
            bullets: [
              "Efficiency eta = P_out / (P_out + P_cu + P_core).",
              "Copper loss P_cu = I^2 R_eq (variable, load-dependent); iron loss P_core = V^2/R_c (constant).",
              "Maximum efficiency when P_cu = P_core (typically at 50-80 per cent of full load).",
              "Regulation = (V_nl - V_fl) / V_fl x 100 per cent.",
              "Lagging PF: regulation = I (R_eq cos(phi) + X_eq sin(phi)) / V; positive.",
              "Auto-transformer: single tapped winding; smaller, cheaper, no isolation.",
              "CT steps down current to 1 or 5 A; PT steps down voltage to 110 V; both isolate meters.",
            ],
            codeExample: {
              language: "python",
              caption: "Transformer efficiency and regulation calculator",
              code: `def transformer_eff_reg(s_va, v1, v2, r_eq, x_eq, p_core, pf):
    i1 = s_va / v1
    p_cu = i1 * i1 * r_eq
    p_out = s_va * pf
    p_in = p_out + p_cu + p_core
    eff = p_out / p_in * 100
    reg = i1 * (r_eq * pf + x_eq * ((1 - pf*pf)**0.5)) / v1 * 100
    return eff, reg, p_cu

eff, reg, pcu = transformer_eff_reg(
    s_va=10000, v1=2300, v2=230, r_eq=4, x_eq=6, p_core=80, pf=1.0)
print("efficiency =", round(eff, 2), "%")
print("regulation =", round(reg, 2), "%")
print("copper loss =", round(pcu, 1), "W")
# efficiency = 98.44 %, regulation = 0.76 %, copper loss = 75.7 W`,
            },
            diagram: {
              kind: "flow",
              title: "Transformer efficiency and regulation calculation",
              caption:
                "Two losses (copper + iron) reduce the output; the series drops cause the regulation.",
              steps: [
                { label: "Input P_in = V1 I1 cos(phi)", note: "primary power" },
                { label: "Subtract iron loss P_core", note: "constant, V^2/R_c" },
                { label: "Subtract copper loss P_cu = I^2 R_eq", note: "variable, load-dependent" },
                { label: "Output P_out = P_in - losses", note: "efficiency = P_out/P_in" },
                { label: "Regulation from series drops", note: "I(R_eq cos phi + X_eq sin phi)/V" },
              ],
            },
            callout: {
              type: "exam",
              title: "Maximum efficiency condition",
              body: "Maximum efficiency occurs when variable copper loss equals constant iron loss: I_max^2 R_eq = P_core. The load fraction for peak efficiency is sqrt(P_core / P_cu_full_load). This is a standard 7-mark question - always derive the condition by differentiating eta with respect to I and setting d(eta)/dI = 0.",
            },
            keyTerms: [
              { term: "Efficiency", definition: "eta = P_out / (P_out + P_cu + P_core); the ratio of useful output to input power." },
              { term: "Voltage regulation", definition: "(V_no_load - V_full_load) / V_full_load x 100 per cent; the drop under load." },
              { term: "Auto-transformer", definition: "A transformer with a single tapped winding shared by primary and secondary; smaller and more efficient but without isolation." },
              { term: "CT (current transformer)", definition: "Instrument transformer stepping down line current to 1 or 5 A for metering and protection." },
              { term: "PT (potential transformer)", definition: "Instrument transformer stepping down line voltage to 110 V for metering and protection." },
            ],
            examQuestions: [
              {
                q: "Define efficiency and voltage regulation of a transformer. Derive the condition for maximum efficiency. A 10 kVA, 2300/230 V transformer has R_eq = 4 ohm, X_eq = 6 ohm and iron loss 80 W. Find the full-load efficiency and regulation at unity power factor. Briefly explain auto-transformer, CT and PT.",
                marks: 7,
                outline: [
                  "Define eta = P_out/(P_out + P_cu + P_core); regulation = (V_nl - V_fl)/V_fl x 100.",
                  "Derive max eta: differentiate eta wrt I, set d(eta)/dI = 0, giving P_cu = P_core.",
                  "I1 = S/V1 = 10000/2300 = 4.35 A; P_cu = 4.35^2 x 4 = 75.7 W.",
                  "Total loss = 75.7 + 80 = 155.7 W; P_out = 10000 - 155.7 = 9844 W.",
                  "Efficiency = 9844/10000 = 98.4 per cent.",
                  "Regulation = I1 x R_eq / V1 = 4.35 x 4 / 2300 = 0.76 per cent (unity PF, sin term = 0).",
                  "Auto-transformer: single tapped winding, no isolation; CT steps down current; PT steps down voltage.",
                ],
              },
              {
                q: "State the condition for maximum efficiency of a transformer and the typical load fraction at which it occurs.",
                marks: 3,
              },
              {
                q: "Distinguish between a current transformer (CT) and a potential transformer (PT).",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT IV - ELECTRICAL MACHINES AND INSTALLATIONS
    // =================================================================
    {
      number: 4,
      roman: "IV",
      title: "Electrical Machines and Installations",
      summary:
        "Unit IV surveys rotating machines and domestic electrical practice. DC motors (shunt, series, compound) with speed control; three-phase induction motors with rotating field, slip, torque-slip characteristic and starters; single-phase motor types; domestic wiring and distribution boards; earthing by plate and pipe methods; safety devices (fuses, MCB, RCCB); and energy billing calculations.",
      chapter: {
        number: "04",
        title: "Electrical Machines and Installations",
        intro:
          "Unit IV moves from circuit theory to rotating machines and domestic installations. DC motors convert electrical to mechanical energy via the Lorentz force; three-phase induction motors use a rotating magnetic field and slip to develop torque; single-phase motors serve domestic loads; domestic wiring distributes power safely through distribution boards; earthing protects against insulation failure; fuses, MCBs and RCCBs guard against overcurrent and earth leakage; and energy billing ties it all back to the consumer's meter.",
        inOneBreath:
          "DC motor: F = B I L on armature conductors produces torque; back-EMF E_b = (phi Z N P)/(60 A); types are shunt (constant speed), series (high starting torque) and compound; speed control by flux (field), armature voltage, or series resistance; three-phase induction motor has a rotating field at N_s = 120 f/P rpm; slip s = (N_s - N)/N_s; torque peaks at standstill, falls to full-load torque near synchronous speed; starters (DOL, star-delta, auto-transformer) limit starting current; single-phase motors (split-phase, capacitor-start, shaded-pole) serve fans and pumps; domestic wiring types include cleat, casing, batten and conduit; earthing (plate or pipe) bonds the frame to ground; fuses melt on overcurrent, MCBs trip mechanically, RCCBs detect earth leakage; energy billing = sum of (watt x hours)/1000 x tariff per kWh.",
        sections: [
          // --- 4.1 ---
          {
            number: "4.1",
            title: "DC motor: principle, types, characteristics, speed control",
            body: [
              "A DC motor converts DC electrical energy into mechanical rotation. When a current-carrying conductor is placed in a magnetic field, the Lorentz force F = B I L acts on it, where B is the field flux density, I is the current and L is the conductor length in the field. In a motor armature, many conductors are wound on a rotor that rotates between field poles; the commutator reverses the current direction each half-turn so the force always pushes the rotor the same way, producing continuous torque. The back-EMF E_b = (phi Z N P) / (60 A) opposes the applied voltage, where phi is flux per pole, Z is total conductors, N is speed in rpm, P is poles and A is parallel paths.",
              "The voltage equation is V = E_b + I_a R_a, where V is the applied voltage, I_a is the armature current and R_a is the armature resistance. The power equation is V I_a = E_b I_a + I_a^2 R_a, where E_b I_a is the mechanical power developed and I_a^2 R_a is the armature copper loss. The torque is T = phi Z I_a P / (2 pi A), proportional to flux and armature current. DC motors are classified by how the field winding is connected to the armature: shunt (field in parallel with armature, constant flux, nearly constant speed), series (field in series with armature, flux proportional to I_a, high starting torque, speed varies widely), and compound (shunt + series, intermediate characteristics).",
              "Worked example. A 250 V DC shunt motor has armature resistance R_a = 0.5 ohm and draws I_a = 20 A at full load. The back-EMF E_b = V - I_a R_a = 250 - 20 x 0.5 = 250 - 10 = 240 V. The mechanical power developed P_mech = E_b I_a = 240 x 20 = 4800 W = 4.8 kW. The torque (at 1500 rpm) T = P_mech / omega = 4800 / (2 pi x 1500/60) = 4800 / 157 = 30.6 N-m. The armature copper loss I_a^2 R_a = 400 x 0.5 = 200 W, and the input power V I_a = 250 x 20 = 5000 W, so P_mech = 5000 - 200 = 4800 W, confirming the calculation.",
              "Speed control of DC motors is one of their main advantages. From N = (V - I_a R_a) / k phi, speed can be controlled by varying the applied voltage V (armature voltage control, smooth below base speed), by varying the field flux phi (field control, above base speed), or by adding series resistance in the armature circuit (cheap but wasteful, reduces speed by dropping voltage across the resistor). Shunt motors are controlled by field weakening for above-base-speed operation and by armature voltage for below-base-speed; series motors are controlled by series resistance or by diverting current around the field. The wide speed range and simple control explain why DC motors dominated variable-speed drives before power-electronic AC drives became competitive.",
            ],
            bullets: [
              "DC motor principle: F = B I L on armature conductors; commutator reverses current each half-turn.",
              "Back-EMF E_b = (phi Z N P)/(60 A); opposes the applied voltage.",
              "Voltage equation: V = E_b + I_a R_a; power: V I_a = E_b I_a + I_a^2 R_a.",
              "Torque T = phi Z I_a P / (2 pi A), proportional to flux and armature current.",
              "Shunt motor: constant flux, nearly constant speed; used in lathes, fans.",
              "Series motor: high starting torque, variable speed; used in trains, cranes.",
              "Speed control: armature voltage (below base), field flux (above base), series resistance (wasteful).",
            ],
            table: {
              caption: "DC motor types and their characteristics.",
              headers: ["Type", "Field connection", "Speed", "Torque", "Application"],
              rows: [
                ["Shunt", "parallel with armature", "nearly constant", "moderate", "lathes, fans, pumps"],
                ["Series", "in series with armature", "varies widely (high at light load)", "very high starting", "traction, cranes, hoists"],
                ["Compound (cumulative)", "shunt + aiding series", "droops slightly", "high starting, steady running", "rolling mills, elevators"],
                ["Compound (differential)", "shunt + opposing series", "nearly constant", "lower starting", "special drives"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Shunt vs series DC motor characteristics",
              caption:
                "Shunt: constant speed, moderate torque; series: speed falls as torque rises, high starting torque.",
              left: {
                heading: "Shunt motor",
                items: [
                  "Field winding in parallel with armature",
                  "Flux nearly constant (field current fixed)",
                  "Speed nearly constant from no-load to full-load",
                  "Moderate starting torque",
                  "Used where speed regulation matters",
                ],
              },
              right: {
                heading: "Series motor",
                items: [
                  "Field winding in series with armature",
                  "Flux proportional to armature current",
                  "Speed falls sharply as load increases",
                  "Very high starting torque",
                  "Never run unloaded (overspeed risk)",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Never run a series motor unloaded",
              body: "A series motor's speed is inversely proportional to flux; at no load, I_a and phi are tiny, so N rises without bound and the armature can fly apart mechanically. Always connect a series motor to its load (a fan, a wheel, a winch) before energising. This is why series motors are used in traction - the load is always present.",
            },
            keyTerms: [
              { term: "Back-EMF", definition: "E_b = (phi Z N P)/(60 A); the voltage induced in the armature opposing the applied voltage, proportional to speed and flux." },
              { term: "Shunt motor", definition: "DC motor with field winding in parallel with the armature; nearly constant speed, moderate torque." },
              { term: "Series motor", definition: "DC motor with field winding in series with the armature; high starting torque, speed varies widely with load." },
              { term: "Speed control", definition: "Adjusting motor speed by varying armature voltage (below base), field flux (above base), or series resistance." },
            ],
            examQuestions: [
              {
                q: "Explain the working principle of a DC motor and derive the expressions for back-EMF and torque. A 250 V DC shunt motor has R_a = 0.5 ohm and draws I_a = 20 A at 1500 rpm. Find the back-EMF, mechanical power developed and torque. Briefly explain shunt, series and compound motors and one method of speed control.",
                marks: 7,
                outline: [
                  "Principle: F = B I L on armature conductors; commutator reverses current for continuous torque.",
                  "Derive E_b = (phi Z N P)/(60 A); voltage equation V = E_b + I_a R_a; torque T = E_b I_a / omega.",
                  "E_b = 250 - 20 x 0.5 = 240 V.",
                  "Mechanical power P_mech = E_b I_a = 240 x 20 = 4800 W = 4.8 kW.",
                  "Torque T = 4800 / (2 pi x 1500/60) = 4800/157 = 30.6 N-m.",
                  "Shunt: parallel field, constant speed; series: series field, high starting torque; compound: both.",
                  "Speed control: vary armature voltage (below base), field flux (above base), or add series resistance.",
                ],
              },
              {
                q: "State the voltage equation of a DC motor and explain the significance of back-EMF.",
                marks: 3,
              },
              {
                q: "Why should a DC series motor never be started without a load?",
                marks: 2,
              },
            ],
          },
          // --- 4.2 ---
          {
            number: "4.2",
            title: "Three-phase induction motor: principle, slip, torque-slip, starters",
            body: [
              "A three-phase induction motor is the workhorse of industry: robust, cheap, self-starting and nearly maintenance-free. Its stator carries three windings displaced by 120 degrees in space, fed by three-phase supply. The currents in these windings produce a rotating magnetic field that sweeps around the stator interior at synchronous speed N_s = 120 f / P rpm, where f is the supply frequency and P is the number of poles. For a 50 Hz, 4-pole motor, N_s = 120 x 50 / 4 = 1500 rpm. The rotor (squirrel-cage or wound type) sits in this rotating field; the field sweeps past the rotor bars, inducing currents by transformer action, and those currents interact with the field to produce torque.",
              "Slip is the difference between synchronous speed and actual rotor speed, expressed as a fraction of synchronous speed: s = (N_s - N) / N_s. At standstill N = 0, so s = 1; at synchronous speed N = N_s, s = 0 (which never happens in a motor, since zero slip means zero induced current and zero torque). A typical full-load slip is 2-5 per cent, so a 4-pole 50 Hz motor runs at about 1440-1470 rpm at full load. The rotor frequency f_r = s x f (50 Hz at standstill, 1-2.5 Hz at full load). The torque-slip characteristic has three regions: high starting torque (s = 1), a pull-out (maximum) torque at s = 10-20 per cent, and a low-slip operating region near synchronous speed where torque rises almost linearly with slip.",
              "Worked example. A 4-pole, 50 Hz, three-phase induction motor runs at 1440 rpm at full load. Synchronous speed N_s = 120 x 50 / 4 = 1500 rpm. Slip s = (1500 - 1440) / 1500 = 60/1500 = 0.04 = 4 per cent. Rotor frequency f_r = s x f = 0.04 x 50 = 2 Hz. If the motor is started directly-on-line (DOL), the starting current can be 5-7 times the full-load current, which is why starters are used. A star-delta starter connects the stator in star at start (reducing phase voltage by sqrt(3), current by 3) and switches to delta for running once the motor is up to speed.",
              "Starters limit the starting current and provide smooth acceleration. Direct-on-line (DOL) starters apply full voltage directly - suitable only for small motors (below about 5 hp) on stiff supply systems. Star-delta starters reduce the starting voltage to V/sqrt(3) by connecting the stator in star at start, then switching to delta for running; starting current and torque are both reduced to one-third of DOL values. Auto-transformer starters use a tapped auto-transformer to apply 50-80 per cent of line voltage at start. Rotor resistance starters (for wound-rotor motors only) add external resistance in the rotor circuit, increasing starting torque while reducing starting current. The choice depends on motor size, supply stiffness, and the starting torque the load demands.",
            ],
            bullets: [
              "Stator: three windings at 120 deg; fed by 3-phase supply; produce rotating field.",
              "Synchronous speed N_s = 120 f / P rpm; e.g. 1500 rpm for 4-pole, 50 Hz.",
              "Slip s = (N_s - N)/N_s; typical full-load slip 2-5 per cent.",
              "Rotor frequency f_r = s x f; 50 Hz at standstill, 1-2.5 Hz at full load.",
              "Torque-slip: high at standstill, peaks at pull-out torque (s ~ 10-20 per cent), low near N_s.",
              "DOL starter: full voltage, only for small motors; starting current 5-7 x full-load.",
              "Star-delta starter: star at start (V/sqrt(3), current and torque 1/3), delta for running.",
            ],
            table: {
              caption: "Three-phase induction motor starters and their effects.",
              headers: ["Starter", "Starting voltage", "Starting current", "Starting torque", "Use"],
              rows: [
                ["DOL", "full V", "5-7 x FLC", "1.5-2 x FLT", "small motors (<5 hp)"],
                ["Star-delta", "V/sqrt(3)", "1/3 of DOL", "1/3 of DOL", "motors designed for delta running"],
                ["Auto-transformer", "50-80% of V", "0.25-0.64 of DOL", "0.25-0.64 of DOL", "large motors"],
                ["Rotor resistance", "full V", "reduced by R_ext", "increased", "wound-rotor motors only"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Torque-slip characteristic regions",
              caption:
                "Three operating zones: high starting torque at s=1, pull-out peak, low-slip running region near N_s.",
              steps: [
                { label: "Standstill: s = 1, high starting torque", note: "rotor frequency = f" },
                { label: "Acceleration: torque rises to pull-out", note: "s = 10-20 per cent" },
                { label: "Pull-out (maximum) torque", note: "beyond this the motor stalls" },
                { label: "Low-slip operating region", note: "torque proportional to slip" },
                { label: "Synchronous speed: s = 0, no torque", note: "motor cannot reach N_s" },
              ],
            },
            callout: {
              type: "tip",
              title: "Compute N_s before anything else",
              body: "The first step in any induction motor problem is computing N_s = 120 f / P. For 50 Hz: 2-pole -> 3000 rpm, 4-pole -> 1500 rpm, 6-pole -> 1000 rpm, 8-pole -> 750 rpm. Then slip s = (N_s - N)/N_s follows directly. Examiners look for this anchor calculation as the method mark.",
            },
            keyTerms: [
              { term: "Rotating magnetic field", definition: "The field produced by three-phase stator currents, sweeping the rotor at N_s = 120 f / P rpm." },
              { term: "Slip", definition: "s = (N_s - N)/N_s; the fractional speed difference between the rotating field and the rotor." },
              { term: "Pull-out torque", definition: "The maximum torque an induction motor can produce; if load exceeds this, the motor stalls." },
              { term: "Star-delta starter", definition: "A starter connecting the stator in star at start (reducing voltage and current to 1/3) then switching to delta for running." },
            ],
            examQuestions: [
              {
                q: "Explain the working principle of a three-phase induction motor. Define synchronous speed and slip. A 4-pole, 50 Hz motor runs at 1440 rpm. Find the synchronous speed, slip and rotor frequency. Explain the star-delta starter and one other starter.",
                marks: 7,
                outline: [
                  "Principle: three-phase stator currents produce a rotating field; field sweeps rotor bars, induces currents, torque develops.",
                  "Define N_s = 120 f/P rpm; slip s = (N_s - N)/N_s; rotor frequency f_r = s f.",
                  "N_s = 120 x 50/4 = 1500 rpm.",
                  "Slip s = (1500 - 1440)/1500 = 0.04 = 4 per cent.",
                  "Rotor frequency f_r = 0.04 x 50 = 2 Hz.",
                  "Star-delta starter: star at start (V/sqrt(3), current and torque 1/3 of DOL), delta for running.",
                  "Also describe DOL (full voltage, small motors only) or auto-transformer (tapped voltage).",
                ],
              },
              {
                q: "State the formula for synchronous speed of an induction motor and compute it for a 6-pole, 50 Hz machine.",
                marks: 3,
              },
              {
                q: "Why is a starter necessary for a three-phase induction motor?",
                marks: 2,
              },
            ],
          },
          // --- 4.3 ---
          {
            number: "4.3",
            title: "Single-phase motors (brief)",
            body: [
              "A single-phase motor cannot produce a rotating field by itself - a single winding fed by single-phase supply produces only a pulsating field, which can sustain rotation once started but cannot start it (the rotor sits at rest with no preferred direction). Single-phase motors therefore use an auxiliary starting winding or a shading coil to create a second field displaced in space and phase, producing a net rotating field at start. Once the rotor reaches about 75 per cent of synchronous speed, the auxiliary winding is often disconnected by a centrifugal switch, and the motor runs on the main winding alone.",
              "The split-phase motor uses a main running winding (low resistance, high inductance) and an auxiliary starting winding (high resistance, low inductance) in parallel. The current in the auxiliary winding leads the main current by 30-40 degrees, producing a weak rotating field at start. After start-up, a centrifugal switch disconnects the auxiliary winding. Capacitor-start motors improve on this by putting a capacitor in series with the auxiliary winding, giving a 70-80 degree phase split and much higher starting torque - used in compressors, pumps and small machine tools. Capacitor-run motors keep the capacitor in circuit permanently, giving smoother running and better power factor, used in fans and blowers.",
              "The shaded-pole motor uses a different principle entirely: a copper ring (the shading coil) is wrapped around a portion of each salient pole. The induced current in the shading coil delays the flux through that portion, creating a phase shift between the shaded and unshaded flux - a weak rotating field that starts the motor. Shaded-pole motors are very simple and cheap but have very low starting torque and efficiency (5-20 per cent), so they are used only in tiny loads: cooling fans in refrigerators, hair dryers, small record players. Universal motors (series-wound, AC/DC) are used where high speed is needed - vacuum cleaners, mixers, power tools - and are technically a type of series motor that works on AC because the field and armature currents reverse together.",
              "Worked example and selection guide. A ceiling fan (70-100 W) typically uses a capacitor-run single-phase motor because it needs quiet, efficient running at moderate torque with no heavy starting load. A refrigerator compressor (100-200 W) uses a capacitor-start motor because it needs high starting torque against the refrigerant head pressure. A small table fan (15-30 W) can use a shaded-pole motor because the load is trivial and the simplicity wins. A mixer grinder (300-500 W) uses a universal motor because it needs high speed (10,000-20,000 rpm) that only a series-type motor can deliver on single-phase supply. The motor type is chosen by matching the load's torque-speed requirement to the motor's characteristic.",
            ],
            bullets: [
              "Single-phase supply produces only pulsating field; needs an auxiliary start mechanism.",
              "Split-phase: main + high-resistance auxiliary winding; centrifugal switch cuts out auxiliary.",
              "Capacitor-start: capacitor in auxiliary for 70-80 deg phase split; high starting torque.",
              "Capacitor-run: capacitor stays in circuit; quieter, better PF, lower torque.",
              "Shaded-pole: copper ring on part of pole; very simple, low torque, low efficiency.",
              "Universal motor: series-wound, works on AC and DC; high speed; used in tools.",
              "Selection: ceiling fan = capacitor-run; fridge compressor = capacitor-start; tools = universal.",
            ],
            table: {
              caption: "Single-phase motor types and typical applications.",
              headers: ["Type", "Starting method", "Starting torque", "Typical power", "Application"],
              rows: [
                ["Split-phase", "high-R auxiliary winding", "low-moderate", "60-250 W", "small fans, blowers"],
                ["Capacitor-start", "capacitor in auxiliary", "high", "100-1000 W", "compressors, pumps"],
                ["Capacitor-run", "permanent capacitor", "moderate", "40-200 W", "ceiling fans"],
                ["Shaded-pole", "shading coil", "very low", "5-30 W", "tiny fans, fridge evaporator fans"],
                ["Universal", "series field", "high", "100-1000 W", "mixers, vacuum cleaners, drills"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a single-phase motor by load type",
              caption:
                "The starting torque and running speed requirement dictate the motor type.",
              start: "A single-phase load needs a motor",
              branches: [
                { label: "Trivial load (tiny fan)", outcome: "Shaded-pole motor", good: true },
                { label: "Quiet running, moderate torque", outcome: "Capacitor-run motor", good: true },
                { label: "High starting torque (compressor)", outcome: "Capacitor-start motor", good: true },
                { label: "Very high speed (tools)", outcome: "Universal motor", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Match the motor to the load's torque-speed curve",
              body: "Every load has a torque-speed requirement: fans need low starting torque but steady running; compressors need high starting torque; tools need high speed. Picking the cheapest motor that meets the starting requirement saves both capital and running cost. A capacitor-start motor in a fan is wasteful; a shaded-pole motor in a compressor will not start.",
            },
            keyTerms: [
              { term: "Split-phase motor", definition: "A single-phase motor using a high-resistance auxiliary starting winding, disconnected by a centrifugal switch after start-up." },
              { term: "Capacitor-start motor", definition: "A single-phase motor with a capacitor in the auxiliary winding, giving high starting torque for compressors and pumps." },
              { term: "Shaded-pole motor", definition: "A simple single-phase motor using a copper shading ring to produce a weak rotating field; very low torque and efficiency." },
              { term: "Universal motor", definition: "A series-wound motor that operates on both AC and DC; high speed, used in power tools and appliances." },
            ],
            examQuestions: [
              {
                q: "Explain why a single-phase induction motor is not self-starting. Describe the construction and working of a capacitor-start motor and a shaded-pole motor. State one typical application for each of the following: capacitor-start, capacitor-run, shaded-pole and universal motors.",
                marks: 7,
                outline: [
                  "A single winding produces only a pulsating field, not a rotating one; no preferred direction at standstill.",
                  "Capacitor-start: main winding + auxiliary with capacitor in series; 70-80 deg phase split; high starting torque; centrifugal switch cuts out auxiliary after start.",
                  "Shaded-pole: copper shading ring on part of each salient pole; induced current delays flux, creating a weak rotating field; very simple but low torque and efficiency.",
                  "Capacitor-start application: refrigerator compressor (high starting torque against head pressure).",
                  "Capacitor-run application: ceiling fan (quiet running, moderate torque).",
                  "Shaded-pole application: tiny cooling fans (e.g. fridge evaporator fan).",
                  "Universal motor application: mixer grinder, vacuum cleaner (high speed needed).",
                ],
              },
              {
                q: "State the function of the centrifugal switch in a single-phase motor.",
                marks: 3,
              },
              {
                q: "Why is a shaded-pole motor used only for very small loads?",
                marks: 2,
              },
            ],
          },
          // --- 4.4 ---
          {
            number: "4.4",
            title: "Domestic wiring, distribution board and earthing",
            body: [
              "Domestic wiring distributes electrical power from the service meter to the various loads in a building. Several wiring systems are used. Cleat wiring uses insulated cables cleated to walls with porcelain cleats - cheap but unsightly, used only for temporary installations. Casing and capping (wooden or PVC) encloses VIR (vulcanised India rubber) or PVC cables in a casing with a capping lid - neat and protectable, used for permanent domestic wiring. Batten wiring runs insulated cables on wooden battens fixed to walls - simple and common. Conduit wiring pulls insulated cables through metal or PVC pipes (conduits) embedded in walls or surface-mounted - the safest and most durable, used in modern buildings.",
              "A distribution board (DB) is the panel where the incoming supply is split into multiple circuits, each protected by a fuse or MCB. The DB houses the main switch (isolating the whole installation), the busbar distributing supply to sub-circuits (lighting, power, water heater, AC), and the protective devices for each sub-circuit. Each sub-circuit is designed so that a fault in one (a blown bulb, a tripped AC) does not black out the whole house. The number of sub-circuits is planned by load: lighting points are grouped (typically 800 W per sub-circuit), power points are grouped separately (typically 1000 W per sub-circuit), and heavy loads (geyser, AC, oven) get individual circuits.",
              "Earthing (grounding) connects the metal body of every electrical appliance to a low-resistance earth electrode buried in the ground. If insulation fails and the body comes into contact with a live conductor, the fault current flows to earth rather than through a person touching the body, and the large fault current trips the protective device (fuse or MCB) quickly, isolating the fault. Two common earthing methods are plate earthing (a copper or GI plate 60 x 60 x 3 mm buried at least 1.5 m deep, surrounded by charcoal and salt to reduce soil resistivity) and pipe earthing (a GI pipe 38-50 mm diameter and 2 m long driven into the ground, with a watering funnel to keep the soil moist). The earth resistance should be below 5 ohm for domestic installations and below 1 ohm for substations.",
              "The earth wire from the appliance body runs back to the DB earth busbar, which connects to the earth electrode by a low-resistance conductor. The third pin of a three-pin socket is the earth pin, longer than the live and neutral pins so it makes contact first when a plug is inserted and breaks last when withdrawn. The earthing system is the last line of defence against electric shock; a working earth with a sensitive RCCB (section 4.5) can clear a fault in under 30 milliseconds, fast enough to prevent ventricular fibrillation. Regular testing of the earth resistance (by an earth tester) is part of electrical safety audits.",
            ],
            bullets: [
              "Cleat wiring: cheapest, temporary; cables on porcelain cleats.",
              "Casing-capping: VIR/PVC cables in wooden or PVC casing; neat, permanent.",
              "Batten wiring: cables on wooden battens; simple and common.",
              "Conduit wiring: cables in metal or PVC pipes; safest, most durable; modern standard.",
              "Distribution board: main switch + busbar + fuses/MCBs per sub-circuit.",
              "Plate earthing: 60x60x3 mm Cu/GI plate at 1.5 m depth; charcoal and salt reduce resistivity.",
              "Pipe earthing: 38-50 mm GI pipe 2 m long, driven in; watering funnel keeps soil moist.",
              "Earth resistance should be below 5 ohm domestic, below 1 ohm substation.",
            ],
            table: {
              caption: "Domestic wiring systems compared.",
              headers: ["System", "Cost", "Durability", "Safety", "Use"],
              rows: [
                ["Cleat", "lowest", "low", "low", "temporary"],
                ["Casing-capping", "moderate", "moderate", "moderate", "permanent, low-cost"],
                ["Batten", "low", "moderate", "moderate", "simple permanent"],
                ["Conduit (surface)", "high", "high", "high", "modern buildings"],
                ["Conduit (concealed)", "highest", "very high", "very high", "premium installations"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Earthing and wiring hierarchy",
              caption:
                "From cheap temporary wiring at the base to safe concealed conduit at the top; earthing underpins all.",
              tiers: [
                { label: "Conduit wiring (concealed)", note: "safest, most durable, premium" },
                { label: "Conduit wiring (surface)", note: "safe, durable, modern standard" },
                { label: "Casing-capping and batten", note: "moderate, permanent" },
                { label: "Cleat wiring", note: "cheap, temporary only" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never bypass the earth pin",
              body: "Some users insert a matchstick or foil into the earth pin of a socket to make a 2-pin plug fit. This defeats the earthing system - if the appliance body goes live, the fault current has no path to earth and will flow through the next person who touches it. Always use a proper 3-pin plug with the earth wire connected to the appliance body.",
            },
            keyTerms: [
              { term: "Conduit wiring", definition: "Wiring system where insulated cables are pulled through metal or PVC pipes; the safest and most durable method." },
              { term: "Distribution board", definition: "Panel housing the main switch, busbar and protective devices (fuses or MCBs) that split the supply into sub-circuits." },
              { term: "Plate earthing", definition: "Earthing method using a copper or GI plate buried 1.5 m deep, surrounded by charcoal and salt to reduce resistivity." },
              { term: "Pipe earthing", definition: "Earthing method using a GI pipe 38-50 mm diameter driven 2 m into the ground, with a watering funnel." },
              { term: "Earth resistance", definition: "Resistance between the earth electrode and the surrounding soil; should be below 5 ohm for domestic installations." },
            ],
            examQuestions: [
              {
                q: "Explain four types of domestic wiring with one advantage and one disadvantage of each. Describe the construction of a distribution board. Explain plate earthing and pipe earthing, stating the typical earth resistance value for a domestic installation.",
                marks: 7,
                outline: [
                  "Cleat: cables on porcelain cleats; cheap, temporary, low safety.",
                  "Casing-capping: VIR/PVC in wooden or PVC casing; neat, moderate durability.",
                  "Batten: cables on wooden battens; simple, moderate safety.",
                  "Conduit: cables in metal/PVC pipes; safest, most durable, most expensive.",
                  "DB: main switch + busbar + fuses/MCBs per sub-circuit (lighting, power, heavy loads separated).",
                  "Plate earthing: 60x60x3 mm Cu/GI plate at 1.5 m depth, charcoal and salt reduce resistivity.",
                  "Pipe earthing: 38-50 mm GI pipe driven 2 m in, watering funnel; earth resistance below 5 ohm domestic.",
                ],
              },
              {
                q: "State the purpose of earthing the metal body of an electrical appliance.",
                marks: 3,
              },
              {
                q: "Name two materials used to reduce the earth resistance around an earth electrode.",
                marks: 2,
              },
            ],
          },
          // --- 4.5 ---
          {
            number: "4.5",
            title: "Safety devices (fuses, MCB, RCCB) and energy billing",
            body: [
              "Protective devices isolate faults before they cause fire or injury. A fuse is the simplest: a thin wire or strip of tin, lead or silver that melts when the current exceeds its rated value for long enough, breaking the circuit. Rewirable fuses (semi-enclosed) use a bare wire the user replaces; HRC (high rupturing capacity) fuses use a calibrated element in a sand-filled ceramic body, clearing high fault currents reliably. Fuses are cheap and reliable but one-shot - they must be replaced after every operation. An MCB (miniature circuit breaker) is a resettable electromagnetic and thermal device: a bimetallic strip responds to sustained overcurrent (thermal trip), and a solenoid responds to short-circuit current (magnetic trip).",
              "An RCCB (residual current circuit breaker, also called ELCB or GFCI) detects earth leakage by comparing the live and neutral currents: if they differ by more than the trip threshold (typically 30 mA for domestic), some current is leaking to earth through an unintended path (a person, a damp wall), and the RCCB trips within 30 milliseconds. RCCBs do not protect against overcurrent (they need an MCB or fuse in series for that) but they are the primary defence against electric shock. The combination MCB + RCCB in one device is called an RCBO (residual current breaker with overcurrent), common in modern domestic boards.",
              "Energy billing is based on the kilowatt-hour (kWh), the energy consumed by a 1 kW load running for 1 hour, equal to 3.6 x 10^6 J. The energy meter (a rotating-disc induction meter or a modern electronic meter) integrates the active power P = V I cos(phi) over time, displaying the accumulated kWh. The tariff is typically a fixed charge plus an energy charge per kWh, with slab rates (higher rate above 200 kWh per month) and sometimes a time-of-day surcharge. Worked example: a household runs 3 ceiling fans of 75 W each for 8 hours/day, 5 LED bulbs of 15 W each for 6 hours/day, a refrigerator of 250 W for 24 hours/day (with a 50 per cent duty cycle, so 12 effective hours), and a TV of 120 W for 5 hours/day. The daily energy is 3 x 75 x 8 + 5 x 15 x 6 + 250 x 12 + 120 x 5 = 1800 + 450 + 3000 + 600 = 5850 Wh = 5.85 kWh. Monthly (30 days) = 175.5 kWh. At Rs 7 per kWh, the bill is Rs 1228.50.",
              "The billing calculation illustrates why refrigerators dominate domestic consumption: they run 24 hours a day (albeit on a duty cycle), while fans and lights run only a few hours. Energy-saving measures (a 5-star refrigerator, LED bulbs, efficient fans) reduce the watt-hours directly. Power factor matters for industrial billing: large consumers are charged a kVAh (apparent energy) tariff or a penalty for low PF, which is why they install power factor correction capacitors (section 2.6). For domestic consumers on a kWh tariff, PF does not appear on the bill, but the utility still bears the line-loss cost of poor PF internally.",
            ],
            bullets: [
              "Fuse: thin wire melts on overcurrent; cheap, one-shot, must be replaced.",
              "HRC fuse: calibrated element in sand-filled ceramic body; clears high fault currents.",
              "MCB: bimetallic strip (thermal, sustained overcurrent) + solenoid (magnetic, short-circuit); resettable.",
              "RCCB: compares live and neutral currents; trips on earth leakage > 30 mA within 30 ms.",
              "RCBO: MCB + RCCB in one device; common in modern domestic boards.",
              "Energy meter integrates P = V I cos(phi) over time; displays accumulated kWh.",
              "1 kWh = 3.6 x 10^6 J; tariff is per kWh with slab rates for domestic consumers.",
            ],
            codeExample: {
              language: "python",
              caption: "Domestic energy billing calculator",
              code: `def monthly_bill(loads, hours, days=30, rate=7.0):
    daily_wh = sum(w * h for w, h in zip(loads, hours))
    monthly_kwh = daily_wh * days / 1000
    return monthly_kwh, monthly_kwh * rate

# watts and hours per day: 3 fans, 5 LEDs, fridge, TV
loads  = [75*3, 15*5, 250, 120]
hours  = [8,    6,    12,  5]
kwh, bill = monthly_bill(loads, hours)
print("monthly energy =", round(kwh, 1), "kWh")
print("monthly bill   = Rs", round(bill, 2))
# monthly energy = 175.5 kWh, bill = Rs 1228.50`,
            },
            diagram: {
              kind: "flow",
              title: "Energy billing calculation",
              caption:
                "Multiply wattage by hours for each load, sum, scale by days, multiply by the tariff rate.",
              steps: [
                { label: "List loads (W) and hours/day", note: "fans, lights, fridge, TV" },
                { label: "Daily energy = sum(W x h) in Wh", note: "watt-hours per day" },
                { label: "Monthly kWh = daily Wh x 30 / 1000", note: "convert to kWh" },
                { label: "Bill = monthly kWh x tariff", note: "Rs per kWh" },
                { label: "Apply slab rates if needed", note: "higher rate above 200 kWh" },
              ],
            },
            callout: {
              type: "tip",
              title: "Duty cycle for intermittent loads",
              body: "A refrigerator does not run its compressor 24 hours a day - it cycles on a thermostat with a typical duty cycle of 30-60 per cent. Multiply the rated wattage by the duty cycle (e.g. 250 W x 0.5 = 125 W effective) before computing energy. Forgetting the duty cycle overestimates the fridge's consumption by a factor of 2-3, a common exam slip.",
            },
            keyTerms: [
              { term: "Fuse", definition: "A protective device with a thin element that melts on overcurrent, breaking the circuit; one-shot, must be replaced." },
              { term: "MCB", definition: "Miniature circuit breaker; resettable device using a bimetallic strip (thermal) and solenoid (magnetic) to trip on overcurrent." },
              { term: "RCCB", definition: "Residual current circuit breaker; trips when live and neutral currents differ by more than 30 mA, protecting against earth leakage and shock." },
              { term: "Kilowatt-hour", definition: "Energy unit equal to 1 kW load running for 1 hour = 3.6 x 10^6 J; the basis of electrical billing." },
            ],
            examQuestions: [
              {
                q: "Explain the working of a fuse, an MCB and an RCCB, stating what fault each protects against. A household runs 3 fans of 75 W for 8 h/day, 5 LEDs of 15 W for 6 h/day, a 250 W refrigerator at 50 per cent duty cycle, and a 120 W TV for 5 h/day. Find the monthly energy consumption and the bill at Rs 7 per kWh.",
                marks: 7,
                outline: [
                  "Fuse: thin wire melts on overcurrent; protects against short circuits and overloads; one-shot.",
                  "MCB: bimetallic strip (thermal) + solenoid (magnetic); resettable; protects against overcurrent.",
                  "RCCB: compares live and neutral currents; trips on earth leakage > 30 mA; protects against shock.",
                  "Daily energy: fans 3 x 75 x 8 = 1800 Wh; LEDs 5 x 15 x 6 = 450 Wh.",
                  "Fridge: 250 x 0.5 (duty) x 24 = 3000 Wh; TV: 120 x 5 = 600 Wh.",
                  "Total daily = 1800 + 450 + 3000 + 600 = 5850 Wh = 5.85 kWh.",
                  "Monthly = 5.85 x 30 = 175.5 kWh; bill = 175.5 x 7 = Rs 1228.50.",
                ],
              },
              {
                q: "State two advantages of an MCB over a rewirable fuse.",
                marks: 3,
              },
              {
                q: "What fault condition does an RCCB detect that an MCB does not?",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT V - ELECTRONICS FUNDAMENTALS
    // =================================================================
    {
      number: 5,
      roman: "V",
      title: "Electronics Fundamentals",
      summary:
        "Unit V closes the syllabus with semiconductor devices and digital electronics. P-type and N-type materials form the PN junction diode; half-wave, full-wave and bridge rectifiers convert AC to DC; the zener diode regulates voltage; the BJT has CE, CB and CC configurations; the op-amp provides inverting and non-inverting amplification; logic gates (AND, OR, NOT, NAND, NOR, XOR) underpin digital systems; and number systems with combinational circuits (half and full adders) close the unit.",
      chapter: {
        number: "05",
        title: "Electronics Fundamentals",
        intro:
          "Unit V introduces the building blocks of electronics. Semiconductors (P-type, N-type) form the PN junction diode whose V-I characteristic enables rectification; half-wave, full-wave and bridge rectifiers convert AC to DC with quantified ripple and PIV; the zener diode regulates voltage; the BJT operates in three configurations; the op-amp amplifies with inverting and non-inverting gain formulas; logic gates implement Boolean functions; and number systems with half and full adders tie digital electronics to arithmetic.",
        inOneBreath:
          "Intrinsic silicon has equal electrons and holes; doping with trivalent boron gives P-type (holes majority), with pentavalent phosphorus gives N-type (electrons majority); a PN junction has a depletion region and conducts only in forward bias (anode positive) with a 0.7 V silicon knee; reverse bias gives a tiny leakage current until breakdown; the diode equation is I = I_s (e^(V/V_T) - 1) with V_T = 26 mV at room temperature; half-wave rectifier gives V_dc = V_m/pi with ripple factor 1.21 and PIV = V_m; full-wave center-tapped gives V_dc = 2 V_m/pi with ripple 0.482 and PIV = 2 V_m; bridge gives the same V_dc and ripple with PIV = V_m and no center tap; zener diode in reverse breakdown regulates voltage; BJT has NPN and PNP types with CE (voltage gain), CB (current gain < 1) and CC (current gain, voltage follower) configurations; ideal op-amp has infinite input impedance, zero output impedance, infinite open-loop gain; inverting amplifier gain = -R_f/R_1, non-inverting gain = 1 + R_f/R_1; logic gates AND, OR, NOT, NAND (universal), NOR (universal), XOR implement Boolean functions; binary-decimal-hex conversions; half adder sums two bits (Sum, Carry), full adder adds three bits including carry-in.",
        sections: [
          // --- 5.1 ---
          {
            number: "5.1",
            title: "Semiconductor basics and PN junction diode",
            body: [
              "Semiconductors are materials with conductivity between conductors (metals) and insulators, controllable by doping. Pure (intrinsic) silicon has four valence electrons per atom, forming covalent bonds with four neighbours; at room temperature a few bonds break thermally, giving equal numbers of free electrons and holes (vacant bond sites) that both carry current. Doping with a pentavalent impurity (phosphorus, arsenic) adds extra free electrons, making the material N-type (electrons are majority carriers, holes minority). Doping with a trivalent impurity (boron, gallium) leaves holes (missing electrons in bonds), making the material P-type (holes are majority carriers, electrons minority). Doping concentrations are typically 1 impurity atom per 10^6 to 10^8 silicon atoms.",
              "A PN junction forms when P-type and N-type material are joined. Diffusion of holes from P to N and electrons from N to P leaves a region near the junction depleted of mobile carriers - the depletion region - exposing fixed positive ions on the N side and fixed negative ions on the P side. This built-in potential (about 0.7 V for silicon) opposes further diffusion, establishing equilibrium. When an external voltage is applied positive to P (forward bias), it opposes the built-in potential, narrowing the depletion region and allowing large current once V exceeds 0.7 V. When positive to N (reverse bias), it aids the built-in potential, widening the depletion region and allowing only a tiny reverse saturation current I_s (microamperes) until breakdown.",
              "The diode V-I characteristic is described by the Shockley equation I = I_s (e^(V / (eta V_T)) - 1), where I_s is the reverse saturation current (typically nanoamperes for silicon), V_T = k T / q is the thermal voltage (about 26 mV at 300 K), and eta is the ideality factor (1-2). In forward bias above the knee (V ~ 0.7 V for Si, 0.3 V for Ge), current rises exponentially. In reverse bias, I is approximately -I_s until the reverse voltage reaches the breakdown value (typically 50-1000 V for rectifier diodes), at which point a large reverse current flows - this is the basis of the zener diode (section 5.3). The forward resistance is small (a few ohms dynamic), the reverse resistance is large (megaohms).",
              "Worked example. A silicon diode with I_s = 10 nA is forward-biased at V = 0.7 V at room temperature (V_T = 26 mV, eta = 1). The current I = 10^-8 x (e^(0.7/0.026) - 1) = 10^-8 x (e^26.9 - 1) = 10^-8 x (4.8 x 10^11 - 1) approx 4.8 A - a large forward current, confirming that 0.7 V is the conduction knee. At V = 0.6 V, I = 10^-8 x (e^23.1 - 1) approx 10^-8 x 1.08 x 10^10 = 0.108 A - ten times less current for a 0.1 V change, illustrating the exponential steepness. At V = -10 V (reverse), I approx -I_s = -10 nA, negligible. This exponential characteristic is why a diode acts as a one-way valve and why 0.7 V is the standard 'silicon diode drop' assumed in circuit analysis.",
            ],
            bullets: [
              "Intrinsic silicon: equal electrons and holes; conductivity low at room temperature.",
              "N-type: doped with pentavalent (P, As); electrons majority, holes minority.",
              "P-type: doped with trivalent (B, Ga); holes majority, electrons minority.",
              "PN junction: depletion region with built-in potential ~ 0.7 V for silicon.",
              "Forward bias (P positive): narrows depletion, large current above 0.7 V knee.",
              "Reverse bias (N positive): widens depletion, only tiny I_s until breakdown.",
              "Shockley equation: I = I_s (e^(V/(eta V_T)) - 1); V_T = 26 mV at 300 K.",
            ],
            table: {
              caption: "PN junction diode in forward vs reverse bias.",
              headers: ["Property", "Forward bias", "Reverse bias"],
              rows: [
                ["Polarity", "P positive, N negative", "P negative, N positive"],
                ["Depletion region", "narrows", "widens"],
                ["Current", "large (mA to A)", "tiny leakage I_s (nA to uA)"],
                ["Resistance", "low (few ohms dynamic)", "high (megaohms)"],
                ["Knee voltage", "0.7 V (Si), 0.3 V (Ge)", "breakdown voltage (50-1000 V)"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Semiconductor material quadrants",
              caption:
                "TL: intrinsic (balanced), TR: N-type (electron majority), BL: P-type (hole majority), BR: PN junction (depletion region).",
              axes: { x: "doping type (none <- -> doped)", y: "majority carrier (electrons <- -> holes)" },
              quadrants: [
                { label: "Intrinsic Si: equal e and h", note: "pure silicon, low conductivity" },
                { label: "N-type: electron majority", note: "pentavalent dopant (P, As)" },
                { label: "P-type: hole majority", note: "trivalent dopant (B, Ga)" },
                { label: "PN junction: depletion region", note: "built-in 0.7 V potential" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the knee voltage explicitly",
              body: "In any diode circuit problem, write 'silicon diode, so V_knee = 0.7 V' before using it. Examiners look for this assumption as a method mark. Using 0.3 V (germanium) without stating it, or forgetting the drop entirely, loses marks. The 0.7 V is an approximation of the exponential characteristic's inflection point, not a physical constant.",
            },
            keyTerms: [
              { term: "Doping", definition: "Adding a small concentration of impurity atoms (pentavalent for N-type, trivalent for P-type) to control semiconductor conductivity." },
              { term: "Depletion region", definition: "The region near a PN junction depleted of mobile carriers, exposing fixed ions and creating a built-in potential." },
              { term: "Forward bias", definition: "P-side positive, N-side negative; narrows the depletion region and allows large current above 0.7 V (Si)." },
              { term: "Shockley equation", definition: "I = I_s (e^(V/(eta V_T)) - 1); the exponential V-I characteristic of an ideal PN junction diode." },
            ],
            examQuestions: [
              {
                q: "Explain P-type and N-type semiconductors and the formation of a PN junction. Describe the V-I characteristic of a diode in forward and reverse bias, stating the knee voltage for silicon. A silicon diode with I_s = 10 nA is forward-biased at 0.7 V at room temperature (V_T = 26 mV). Estimate the current.",
                marks: 7,
                outline: [
                  "N-type: pentavalent dopant (P, As), electrons majority; P-type: trivalent dopant (B, Ga), holes majority.",
                  "PN junction: diffusion of carriers leaves a depletion region with fixed ions and ~ 0.7 V built-in potential.",
                  "Forward bias (P positive): narrows depletion, exponential current above 0.7 V knee for Si.",
                  "Reverse bias (N positive): widens depletion, only tiny I_s until breakdown.",
                  "State Shockley: I = I_s (e^(V/V_T) - 1) with V_T = 26 mV at 300 K.",
                  "I = 10^-8 x (e^(0.7/0.026) - 1) = 10^-8 x (e^26.9 - 1).",
                  "e^26.9 approx 4.8 x 10^11, so I approx 4.8 A (large, confirming the 0.7 V knee).",
                ],
              },
              {
                q: "Distinguish between a P-type and an N-type semiconductor, naming one dopant for each.",
                marks: 3,
              },
              {
                q: "State the knee voltage of a silicon diode and a germanium diode.",
                marks: 2,
              },
            ],
          },
          // --- 5.2 ---
          {
            number: "5.2",
            title: "Rectifiers: half-wave, full-wave, bridge",
            body: [
              "A rectifier converts AC to DC using the one-way conduction of a diode. A half-wave rectifier uses a single diode in series with the load: during the positive half-cycle the diode conducts and the load sees the input; during the negative half-cycle the diode blocks and the load sees zero. The output is a pulsating DC with only the positive half-cycles, giving an average (DC) output voltage V_dc = V_m / pi where V_m is the peak input voltage. The ripple factor (the ratio of RMS ripple to DC) is 1.21, meaning the ripple is larger than the DC itself - poor smoothing. The peak inverse voltage (PIV) across the diode is V_m.",
              "A full-wave rectifier uses two diodes with a center-tapped transformer. During the positive half-cycle, diode D1 conducts (D2 blocks); during the negative half-cycle, diode D2 conducts (D1 blocks). Both halves of the input are delivered to the load in the same polarity, giving V_dc = 2 V_m / pi (double the half-wave value, where V_m is the half-winding peak). The ripple factor is 0.482 (half the half-wave ripple, because the ripple frequency is doubled to 100 Hz for a 50 Hz input, making smoothing easier). The PIV is 2 V_m (each diode sees the full secondary voltage when the other conducts). The center tap is a disadvantage - the transformer needs a precisely balanced secondary.",
              "A bridge rectifier uses four diodes in a bridge arrangement and does not need a center-tapped transformer. During the positive half-cycle, diodes D1 and D2 conduct (D3 and D4 block); during the negative half-cycle, D3 and D4 conduct (D1 and D2 block). The output is the same as the full-wave: V_dc = 2 V_m / pi with ripple factor 0.482, but the PIV is only V_m (half the center-tap version) and the transformer is simpler (no center tap). The cost is two extra diodes and a slightly higher forward drop (two diode drops in series with the load at any instant). The bridge is the most common rectifier in modern power supplies.",
              "Worked example. A 230/12 V transformer feeds a bridge rectifier with a 1000 ohm load. The secondary RMS voltage is 12 V, so V_m = 12 x sqrt(2) = 17 V. V_dc = 2 x 17 / pi = 10.8 V. I_dc = V_dc / R_L = 10.8 / 1000 = 10.8 mA. Ripple factor = 0.482, so the RMS ripple voltage V_r = 0.482 x 10.8 = 5.2 V - still large, which is why a filter capacitor is added after the rectifier. The PIV per diode is V_m = 17 V (choose a diode rated at least 25 V to be safe). The ripple frequency is 100 Hz (twice the 50 Hz input). A capacitor filter charges to V_m on each peak and supplies the load between peaks, reducing ripple dramatically; a 1000 microfarad capacitor here would give a ripple of about 1 V.",
            ],
            bullets: [
              "Half-wave: one diode; V_dc = V_m/pi; ripple 1.21; PIV = V_m; uses only one half-cycle.",
              "Full-wave center-tap: two diodes; V_dc = 2 V_m/pi; ripple 0.482; PIV = 2 V_m.",
              "Bridge: four diodes; V_dc = 2 V_m/pi; ripple 0.482; PIV = V_m; no center tap.",
              "Ripple factor = RMS ripple / DC; lower is better; filter capacitors reduce it.",
              "PIV is the max reverse voltage across a diode; the diode must be rated above it.",
              "Bridge is the standard; full-wave center-tap needs a balanced transformer secondary.",
              "Filter capacitor: charges to V_m, supplies load between peaks; large C reduces ripple.",
            ],
            table: {
              caption: "Comparison of half-wave, full-wave and bridge rectifiers.",
              headers: ["Type", "Diodes", "V_dc", "Ripple factor", "PIV", "Transformer"],
              rows: [
                ["Half-wave", "1", "V_m/pi", "1.21", "V_m", "simple"],
                ["Full-wave CT", "2", "2 V_m/pi", "0.482", "2 V_m", "center-tapped"],
                ["Bridge", "4", "2 V_m/pi", "0.482", "V_m", "simple, no CT"],
                ["Ripple frequency (50 Hz in)", "-", "100 Hz (FW, bridge)", "-", "-", "-"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Half-wave vs full-wave vs bridge rectifiers",
              caption:
                "Three routes to DC: half-wave wastes half the cycle; full-wave CT needs a tap; bridge uses four diodes but no tap.",
              left: {
                heading: "Half-wave (1 diode)",
                items: [
                  "V_dc = V_m/pi = 0.318 V_m",
                  "Ripple factor 1.21 (poor)",
                  "PIV = V_m",
                  "Uses only positive half-cycle",
                  "Simplest, lowest component count",
                ],
              },
              right: {
                heading: "Bridge (4 diodes)",
                items: [
                  "V_dc = 2 V_m/pi = 0.637 V_m",
                  "Ripple factor 0.482 (better)",
                  "PIV = V_m (lower than CT)",
                  "Uses both half-cycles",
                  "No center tap needed; standard choice",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Always add a filter capacitor",
              body: "A bare rectifier produces pulsating DC with ripple equal to or larger than the DC value. A capacitor (typically 1000-4700 microfarad for a 1 A supply) in parallel with the load charges to V_m on each peak and discharges into the load between peaks, giving a smooth DC with ripple reduced to a few per cent. The ripple voltage is approximated by V_r = I_dc / (f_ripple x C).",
            },
            keyTerms: [
              { term: "Rectifier", definition: "A circuit using diodes to convert AC to pulsating DC; half-wave, full-wave or bridge." },
              { term: "Ripple factor", definition: "Ratio of RMS ripple voltage to DC voltage; measures the smoothness of rectified DC; lower is better." },
              { term: "PIV (peak inverse voltage)", definition: "The maximum reverse voltage appearing across a diode when it is not conducting; the diode must be rated above this." },
              { term: "Bridge rectifier", definition: "A four-diode full-wave rectifier needing no center-tapped transformer; the most common type." },
            ],
            examQuestions: [
              {
                q: "Draw the circuits of a half-wave rectifier and a bridge rectifier. Derive the DC output voltage and state the ripple factor and PIV for each. A 230/12 V transformer feeds a bridge rectifier with a 1000 ohm load. Find V_m, V_dc, I_dc and the PIV.",
                marks: 7,
                outline: [
                  "Draw half-wave: one diode in series with load; bridge: four diodes in diamond with load across.",
                  "Half-wave V_dc = V_m/pi (one half-cycle); bridge V_dc = 2 V_m/pi (both half-cycles).",
                  "Half-wave ripple 1.21, PIV = V_m; bridge ripple 0.482, PIV = V_m.",
                  "Secondary RMS = 12 V, so V_m = 12 x sqrt(2) = 17 V.",
                  "V_dc = 2 x 17/pi = 10.8 V.",
                  "I_dc = V_dc / R_L = 10.8 / 1000 = 10.8 mA.",
                  "PIV per diode in bridge = V_m = 17 V; choose a diode rated at least 25 V.",
                ],
              },
              {
                q: "Define ripple factor and state its value for a half-wave and a full-wave rectifier.",
                marks: 3,
              },
              {
                q: "State one advantage of a bridge rectifier over a full-wave center-tapped rectifier.",
                marks: 2,
              },
            ],
          },
          // --- 5.3 ---
          {
            number: "5.3",
            title: "Zener diode, voltage regulation and BJT configurations",
            body: [
              "A zener diode is a specially doped diode designed to operate safely in reverse breakdown. When the reverse voltage reaches the zener voltage V_Z (manufactured from 3.3 V to 200 V), the diode conducts heavily with a nearly constant voltage drop across it, regardless of current. This makes it ideal as a voltage regulator: placed in parallel with the load (with a series resistor R_s from the unregulated source), it clamps the load voltage to V_Z. If the input voltage rises or the load current falls, the zener draws more current; if the input falls or the load current rises, the zener draws less - keeping the load voltage nearly constant.",
              "Worked regulator example. A 12 V zener regulates a load that draws 20 mA from an input of 20 V. The series resistor R_s must drop 20 - 12 = 8 V while carrying the load current plus the zener current (take I_Z = 20 mA for good regulation). R_s = (V_in - V_Z) / (I_L + I_Z) = (20 - 12) / (0.020 + 0.020) = 8 / 0.040 = 200 ohm. Power dissipated in R_s = I^2 R = 0.04^2 x 200 = 0.32 W (use a 0.5 W resistor). Zener power = V_Z x I_Z = 12 x 0.020 = 0.24 W (use a 0.5 W zener). If the input drops to 18 V, R_s drops only 6 V at 40 mA (impossible: 6/200 = 30 mA, less than needed), so the zener current falls to 30 - 20 = 10 mA - still in regulation, but marginally. Below about 16 V input, the zener drops out of regulation.",
              "A bipolar junction transistor (BJT) is a three-terminal semiconductor device with two PN junctions: either NPN (a thin P-type base between two N-type emitter and collector regions) or PNP (a thin N-type base between two P-type regions). The three terminals are emitter (E, heavily doped), base (B, thin and lightly doped) and collector (C, moderately doped, large area). In active operation, a small base current I_B controls a large collector current I_C = beta x I_B, where beta (the current gain) is typically 50-400. The emitter current is I_E = I_B + I_C approx I_C. This current-controlled current source behaviour is the basis of BJT amplification.",
              "The three BJT configurations differ in which terminal is common to input and output. Common-emitter (CE): input at base, output at collector, emitter common; high voltage and current gain, moderate input impedance, output inverted - the most common amplifier. Common-base (CB): input at emitter, output at collector, base common; current gain slightly less than 1, high voltage gain, low input impedance - used in high-frequency amplifiers. Common-collector (CC, emitter follower): input at base, output at emitter, collector common; voltage gain slightly less than 1, high current gain, high input impedance, low output impedance, non-inverted - used as a buffer. The CE configuration's high gain and moderate impedance make it the workhorse of small-signal amplification.",
            ],
            bullets: [
              "Zener diode: operates in reverse breakdown at V_Z (3.3 to 200 V).",
              "Zener regulator: zener in parallel with load + series R_s; clamps V_load to V_Z.",
              "R_s = (V_in - V_Z) / (I_L + I_Z); size for worst-case input and load.",
              "BJT: NPN or PNP; three terminals E, B, C; I_C = beta x I_B (beta = 50-400).",
              "Common-emitter (CE): high voltage and current gain, inverted output; the standard amplifier.",
              "Common-base (CB): current gain < 1, high voltage gain, low input Z; high-frequency use.",
              "Common-collector (CC): voltage gain ~ 1, high current gain, non-inverted; buffer (emitter follower).",
            ],
            table: {
              caption: "BJT configurations comparison.",
              headers: ["Config", "Input", "Output", "Voltage gain", "Current gain", "Phase", "Use"],
              rows: [
                ["CE", "base", "collector", "high", "high (beta)", "inverted", "general amplifier"],
                ["CB", "emitter", "collector", "high", "< 1", "in phase", "high frequency"],
                ["CC", "base", "emitter", "< 1", "high (beta + 1)", "in phase", "buffer (impedance match)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Zener voltage regulator operation",
              caption:
                "The series resistor drops the excess voltage; the zener clamps the load voltage by absorbing or releasing current.",
              steps: [
                { label: "Input V_in (unregulated)", note: "may vary" },
                { label: "Series resistor R_s drops (V_in - V_Z)", note: "carries I_L + I_Z" },
                { label: "Zener clamps load to V_Z", note: "in reverse breakdown" },
                { label: "If V_in rises, I_Z rises", note: "zener absorbs the extra" },
                { label: "If V_in falls, I_Z falls", note: "zener releases; below dropout, regulation fails" },
              ],
            },
            callout: {
              type: "warning",
              title: "Check zener power dissipation",
              body: "The zener dissipates P_Z = V_Z x I_Z watts. At no load (I_L = 0), all the R_s current flows through the zener, maximising P_Z. Always size the zener's power rating for the no-load, maximum-input condition, not the full-load condition. A 12 V zener at 50 mA dissipates 0.6 W - a 0.5 W zener would fail. Use a 1 W zener.",
            },
            keyTerms: [
              { term: "Zener diode", definition: "A diode designed to operate in reverse breakdown at a specified voltage V_Z, used for voltage regulation." },
              { term: "Voltage regulator", definition: "A circuit using a zener in parallel with the load and a series resistor to keep the load voltage constant despite input or load variation." },
              { term: "BJT", definition: "Bipolar junction transistor (NPN or PNP); a current-controlled device with terminals emitter, base, collector; I_C = beta x I_B." },
              { term: "Common-emitter (CE)", definition: "BJT configuration with emitter common to input and output; high voltage and current gain, inverted output." },
            ],
            examQuestions: [
              {
                q: "Explain the working of a zener diode voltage regulator, deriving the value of the series resistor. A 12 V zener regulates a load drawing 20 mA from a 20 V input with I_Z = 20 mA. Find R_s and the power dissipated in R_s and the zener. Briefly describe the three BJT configurations (CE, CB, CC) with one property of each.",
                marks: 7,
                outline: [
                  "Zener operates in reverse breakdown at V_Z, maintaining nearly constant voltage across a wide current range.",
                  "Regulator circuit: zener in parallel with load, series R_s from unregulated input.",
                  "R_s = (V_in - V_Z) / (I_L + I_Z) = (20 - 12) / (0.020 + 0.020) = 200 ohm.",
                  "Power in R_s = I^2 R = 0.04^2 x 200 = 0.32 W (use 0.5 W resistor).",
                  "Zener power = V_Z x I_Z = 12 x 0.020 = 0.24 W (use 0.5 W zener).",
                  "CE: high voltage and current gain, inverted output, general amplifier.",
                  "CB: current gain < 1, high voltage gain, high frequency; CC: voltage gain ~ 1, buffer.",
                ],
              },
              {
                q: "State the relationship between base current, collector current and current gain beta in a BJT.",
                marks: 3,
              },
              {
                q: "Which BJT configuration is used as a buffer, and why?",
                marks: 2,
              },
            ],
          },
          // --- 5.4 ---
          {
            number: "5.4",
            title: "Operational amplifier: inverting and non-inverting amplifiers",
            body: [
              "An operational amplifier (op-amp) is a high-gain DC-coupled differential amplifier with two inputs (inverting '-' and non-inverting '+') and one output. The ideal op-amp has infinite open-loop gain (A_OL = infinity), infinite input impedance (no current into either input), zero output impedance, infinite bandwidth, and zero offset. Real op-amps (like the 741) approach these: A_OL ~ 10^5, input impedance ~ 1 megaohm, bandwidth limited. The output voltage is V_out = A_OL x (V_+ - V_-), so with infinite gain, the two inputs must be at the same voltage in any negative-feedback circuit - the virtual short principle that makes op-amp analysis simple.",
              "The inverting amplifier feeds the input through R_1 to the inverting input, with R_f as the feedback resistor from output to inverting input; the non-inverting input is grounded. By the virtual short, the inverting input sits at 0 V (virtual ground). The input current I = V_in / R_1 flows entirely through R_f (no current into the op-amp input), so V_out = -I x R_f = -(R_f / R_1) x V_in. The gain is A_v = -R_f / R_1, negative (inverted) and set entirely by the resistor ratio. Input impedance is R_1 (since the inverting input is at virtual ground). This is the most common op-amp circuit for precision amplification with a known, stable gain.",
              "The non-inverting amplifier feeds the input directly to the non-inverting input, with the inverting input fed by a voltage divider from the output: R_f from output to inverting input, R_1 from inverting input to ground. By the virtual short, the inverting input sits at V_in. The voltage divider gives V_- = V_out x R_1 / (R_1 + R_f), so V_in = V_out x R_1 / (R_1 + R_f), giving V_out = V_in x (1 + R_f / R_1). The gain is A_v = 1 + R_f / R_1, positive (non-inverted) and at least 1. Input impedance is very high (the op-amp's own input impedance), making this circuit ideal for buffering high-impedance sources like sensors.",
              "Worked example. An inverting amplifier has R_1 = 10 k ohm and R_f = 100 k ohm. The gain A_v = -R_f / R_1 = -100/10 = -10, so a 100 mV input gives V_out = -1.0 V. If the same resistors are used in a non-inverting configuration, the gain is A_v = 1 + R_f/R_1 = 1 + 10 = 11, so a 100 mV input gives V_out = +1.1 V. The voltage follower (or unity-gain buffer) is the non-inverting amplifier with R_f = 0 and R_1 = infinity (open): the output simply follows the input (A_v = 1) with very high input impedance and very low output impedance - used to isolate a high-impedance source from a low-impedance load without loading the source.",
            ],
            bullets: [
              "Ideal op-amp: infinite gain, infinite input Z, zero output Z, infinite bandwidth.",
              "Virtual short: in negative feedback, V_+ = V_- (both inputs at the same voltage).",
              "Inverting amplifier: gain A_v = -R_f / R_1; input Z = R_1; output inverted.",
              "Non-inverting amplifier: gain A_v = 1 + R_f / R_1; input Z very high; output in phase.",
              "Voltage follower: non-inverting with R_f = 0, R_1 open; gain = 1; buffer.",
              "Gain set entirely by external resistor ratios - stable and predictable.",
              "Real op-amp (741): A_OL ~ 10^5, input Z ~ 1 megaohm, limited bandwidth.",
            ],
            table: {
              caption: "Op-amp amplifier configurations.",
              headers: ["Config", "Gain A_v", "Input Z", "Phase", "Typical use"],
              rows: [
                ["Inverting", "-R_f / R_1", "R_1", "inverted (180 deg)", "precision amplifier"],
                ["Non-inverting", "1 + R_f / R_1", "very high", "in phase (0 deg)", "sensor amplifier"],
                ["Voltage follower", "1", "very high", "in phase", "buffer (impedance match)"],
                ["Worked inverting (R_f=100k, R_1=10k)", "-10", "10 k ohm", "inverted", "100 mV -> -1.0 V"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Inverting vs non-inverting op-amp amplifiers",
              caption:
                "Same resistors, two circuits: inverting gives -R_f/R_1, non-inverting gives 1 + R_f/R_1.",
              left: {
                heading: "Inverting amplifier",
                items: [
                  "Input through R_1 to '-' input",
                  "R_f feedback from output to '-'",
                  "'+' input grounded",
                  "Gain = -R_f / R_1",
                  "Input impedance = R_1",
                ],
              },
              right: {
                heading: "Non-inverting amplifier",
                items: [
                  "Input directly to '+' input",
                  "R_f from output to '-' input",
                  "R_1 from '-' to ground",
                  "Gain = 1 + R_f / R_1",
                  "Input impedance very high",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Apply the virtual short principle",
              body: "In any negative-feedback op-amp circuit, assume V_+ = V_- (the virtual short) and that no current enters either input. These two assumptions let you write the gain by inspection using only Kirchhoff's current law at the inverting node. The virtual short is the single most powerful op-amp analysis tool - master it and every configuration becomes a one-line derivation.",
            },
            keyTerms: [
              { term: "Op-amp", definition: "A high-gain DC-coupled differential amplifier with inverting and non-inverting inputs and one output; idealised as infinite-gain, infinite-input-impedance." },
              { term: "Virtual short", definition: "In negative feedback, the two op-amp inputs sit at the same voltage (V_+ = V_-) because the open-loop gain is infinite." },
              { term: "Inverting amplifier", definition: "Op-amp circuit with gain A_v = -R_f / R_1; input through R_1 to the inverting input, R_f as feedback." },
              { term: "Non-inverting amplifier", definition: "Op-amp circuit with gain A_v = 1 + R_f / R_1; input to the non-inverting input, very high input impedance." },
            ],
            examQuestions: [
              {
                q: "State the characteristics of an ideal op-amp and the virtual short principle. Derive the gain of an inverting amplifier and a non-inverting amplifier. For R_1 = 10 k ohm and R_f = 100 k ohm, find the output for a 100 mV input in each configuration.",
                marks: 7,
                outline: [
                  "Ideal op-amp: infinite gain, infinite input Z, zero output Z, infinite bandwidth, zero offset.",
                  "Virtual short: in negative feedback, V_+ = V_- and no current enters either input.",
                  "Inverting: V_- at virtual ground; I = V_in/R_1 flows through R_f; V_out = -I R_f = -(R_f/R_1) V_in.",
                  "Gain = -R_f/R_1 = -100/10 = -10; V_out = -10 x 0.1 = -1.0 V.",
                  "Non-inverting: V_- = V_in; divider gives V_in = V_out x R_1/(R_1+R_f); V_out = (1 + R_f/R_1) V_in.",
                  "Gain = 1 + 10 = 11; V_out = 11 x 0.1 = +1.1 V.",
                  "Note: voltage follower (R_f = 0, R_1 open) gives gain 1 for buffering.",
                ],
              },
              {
                q: "State the virtual short principle and explain why it holds for an op-amp with negative feedback.",
                marks: 3,
              },
              {
                q: "What is a voltage follower, and where is it used?",
                marks: 2,
              },
            ],
          },
          // --- 5.5 ---
          {
            number: "5.5",
            title: "Digital logic gates and universal gates",
            body: [
              "Digital logic gates implement Boolean functions on binary inputs (0 and 1, LOW and HIGH). The basic gates are AND (output 1 only if all inputs are 1), OR (output 1 if any input is 1), and NOT (output is the complement of the input). From these three, all other functions are built. NAND (NOT AND) and NOR (NOT OR) are universal gates: either one alone can implement AND, OR and NOT, and therefore any Boolean function - this matters in IC fabrication, where a single gate type simplifies the manufacturing process. XOR (exclusive OR) gives 1 if exactly one input is 1, used in arithmetic and parity circuits.",
              "Truth tables define each gate's behaviour for all input combinations. A two-input AND: 00->0, 01->0, 10->0, 11->1. OR: 00->0, 01->1, 10->1, 11->1. NOT: 0->1, 1->0. NAND: 00->1, 01->1, 10->1, 11->0 (complement of AND). NOR: 00->1, 01->0, 10->0, 11->0 (complement of OR). XOR: 00->0, 01->1, 10->1, 11->0. Boolean algebra lets us manipulate these functions: De Morgan's laws state that (A AND B)' = A' OR B' and (A OR B)' = A' AND B' - converting NAND to OR-with-inverted-inputs and vice versa. This is how NAND-only implementations of AND, OR and NOT are derived.",
              "Universal gate demonstrations. Using NAND only: NOT is A NAND A (both inputs tied together); AND is (A NAND B) NAND (A NAND B) - a NAND followed by a NOT; OR is (A NAND A) NAND (B NAND B) - NOT each input, then NAND (which by De Morgan is OR with inverted inputs, but the inverted inputs cancel). Similarly, NOR alone can build NOT (A NOR A), OR (A NOR B then NOT), and AND (NOT each, then NOR). This universality is why NAND and NOR gates are the building blocks of CMOS chip design - a complex processor is, at the transistor level, millions of NAND or NOR gates.",
              "Worked application. A half adder (covered fully in section 5.6) sums two single bits A and B. The sum bit is S = A XOR B (1 if exactly one input is 1); the carry bit is C = A AND B (1 only if both are 1). Implemented with one XOR gate and one AND gate, the half adder is the simplest combinational arithmetic circuit. A full adder extends this to three inputs (A, B, carry-in) using two XOR gates, two AND gates and one OR gate. Cascading n full adders gives an n-bit ripple-carry adder - the arithmetic unit of every simple CPU. Logic gates are the atoms of digital electronics; every computer, calculator and digital instrument is built from them.",
            ],
            bullets: [
              "AND: output 1 only if all inputs are 1.",
              "OR: output 1 if any input is 1.",
              "NOT: output is the complement of the input.",
              "NAND: complement of AND; universal gate.",
              "NOR: complement of OR; universal gate.",
              "XOR: output 1 if exactly one input is 1.",
              "De Morgan: (A AND B)' = A' OR B'; (A OR B)' = A' AND B'.",
            ],
            table: {
              caption: "Truth tables for two-input logic gates.",
              headers: ["A", "B", "AND", "OR", "NAND", "NOR", "XOR"],
              rows: [
                ["0", "0", "0", "0", "1", "1", "0"],
                ["0", "1", "0", "1", "1", "0", "1"],
                ["1", "0", "0", "1", "1", "0", "1"],
                ["1", "1", "1", "1", "0", "0", "0"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Logic gate hierarchy",
              caption:
                "Basic gates (AND, OR, NOT) at the base; universal gates (NAND, NOR) above; XOR and derived circuits at the top.",
              layers: [
                { label: "Derived circuits: adders, multiplexers", note: "built from gates below" },
                { label: "XOR: exclusive OR", note: "1 if exactly one input is 1" },
                { label: "Universal gates: NAND, NOR", note: "either alone implements any function" },
                { label: "Basic gates: AND, OR, NOT", note: "the three primitives" },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorise the truth tables",
              body: "The two-input truth tables for AND, OR, NAND, NOR and XOR (4 rows each) are the most frequently asked item in the digital electronics portion of the exam. Write them as a single combined table (inputs A, B in binary order 00, 01, 10, 11) and the gate outputs as columns. A combined table earns full marks for any single-gate question.",
            },
            keyTerms: [
              { term: "Logic gate", definition: "A digital circuit implementing a Boolean function on binary inputs; outputs are 0 or 1." },
              { term: "Universal gate", definition: "A gate (NAND or NOR) that can implement AND, OR and NOT, and therefore any Boolean function, on its own." },
              { term: "De Morgan's laws", definition: "(A AND B)' = A' OR B' and (A OR B)' = A' AND B'; convert NAND/NOR to OR/AND with inverted inputs." },
              { term: "XOR (exclusive OR)", definition: "A gate outputting 1 if exactly one input is 1; the basis of binary addition's sum bit." },
            ],
            examQuestions: [
              {
                q: "Draw the symbols and write the truth tables for AND, OR, NOT, NAND, NOR and XOR gates. State De Morgan's laws and explain why NAND is a universal gate. Show how to implement NOT and AND using only NAND gates.",
                marks: 7,
                outline: [
                  "Draw the standard symbols for AND, OR, NOT, NAND, NOR, XOR.",
                  "Write truth tables: AND (1 only if all 1), OR (1 if any 1), NOT (complement), NAND (AND complement), NOR (OR complement), XOR (1 if exactly one 1).",
                  "State De Morgan: (A AND B)' = A' OR B'; (A OR B)' = A' AND B'.",
                  "Explain universality: NAND alone can build NOT, AND, OR, hence any function.",
                  "NOT using NAND: tie both inputs together -> A NAND A = NOT A.",
                  "AND using NAND: (A NAND B) NAND (A NAND B) = NOT(A NAND B) = A AND B.",
                  "OR using NAND: (A NAND A) NAND (B NAND B) = NOT A NAND NOT B = A OR B (by De Morgan).",
                ],
              },
              {
                q: "State De Morgan's laws for two variables and verify one of them with a truth table.",
                marks: 3,
              },
              {
                q: "Write the truth table of a two-input XOR gate.",
                marks: 2,
              },
            ],
          },
          // --- 5.6 ---
          {
            number: "5.6",
            title: "Number systems and combinational circuits (half/full adder)",
            body: [
              "Digital electronics uses four number systems: binary (base 2, digits 0-1), octal (base 8, digits 0-7), decimal (base 10, digits 0-9) and hexadecimal (base 16, digits 0-9 then A-F). Each system's place value is a power of its base: binary 1011 = 1 x 2^3 + 0 x 2^2 + 1 x 2^1 + 1 x 2^0 = 8 + 0 + 2 + 1 = 11 in decimal. Hexadecimal compactly represents binary: each hex digit is 4 binary bits, so hex 0xB = binary 1011 = decimal 11. Conversions between bases are the first skill in digital electronics and underpin every later topic from addressing to ASCII.",
              "Decimal-to-binary conversion uses repeated division by 2, recording the remainders from bottom to top. Worked example: convert decimal 25 to binary. 25 / 2 = 12 remainder 1; 12 / 2 = 6 remainder 0; 6 / 2 = 3 remainder 0; 3 / 2 = 1 remainder 1; 1 / 2 = 0 remainder 1. Reading remainders bottom-up: 25 = 11001 in binary. Verify: 1 x 16 + 1 x 8 + 0 x 4 + 0 x 2 + 1 x 1 = 16 + 8 + 1 = 25. For hex, divide by 16: 25 / 16 = 1 remainder 9, so 25 = 0x19. Binary to hex groups bits in fours from the right: 11001 = 0001 1001 = 0x19. Binary to decimal is the weighted sum (as above).",
              "A half adder adds two single bits A and B, producing a sum S and a carry C. The sum S = A XOR B (1 if exactly one input is 1) and the carry C = A AND B (1 only if both are 1). Truth table: A=0, B=0 -> S=0, C=0; A=0, B=1 -> S=1, C=0; A=1, B=0 -> S=1, C=0; A=1, B=1 -> S=0, C=1. The half adder cannot accept a carry from a previous stage, so it only works for the least significant bit; a full adder extends it to three inputs (A, B, C_in), producing S = A XOR B XOR C_in and C_out = (A AND B) OR (C_in AND (A XOR B)). Truth table for full adder: 8 rows for the 3 inputs, with S and C_out columns.",
              "Cascading n full adders (each C_out to the next C_in) gives an n-bit ripple-carry adder - the simplest multi-bit binary adder, used in every simple CPU. The carry ripples from LSB to MSB, so the addition time grows with n. Faster adders (carry-lookahead, carry-skip) compute carries in parallel for speed. The full adder truth table: for A=1, B=1, C_in=0 -> S=0, C_out=1; for A=1, B=1, C_in=1 -> S=1, C_out=1 (the case where 1 + 1 + 1 = 3 = binary 11). These combinational circuits - built entirely from the logic gates of section 5.5 - are the arithmetic heart of digital computing.",
            ],
            bullets: [
              "Binary base 2, octal base 8, decimal base 10, hex base 16.",
              "Binary to decimal: weighted sum of bits x powers of 2.",
              "Decimal to binary: repeated division by 2, read remainders bottom-up.",
              "Hex = 4 binary bits per digit; 0xB = 1011 = decimal 11.",
              "Half adder: S = A XOR B, C = A AND B; adds two single bits.",
              "Full adder: S = A XOR B XOR C_in, C_out = AB + C_in(A XOR B); adds three bits.",
              "Ripple-carry adder: n full adders cascaded; carry propagates LSB to MSB.",
            ],
            codeExample: {
              language: "python",
              caption: "Decimal to binary and hex conversion",
              code: `def to_binary(n):
    bits = []
    while n > 0:
        bits.append(str(n % 2))
        n //= 2
    return "".join(reversed(bits)) or "0"

n = 25
print("decimal =", n)
print("binary  =", to_binary(n))
print("hex     =", hex(n))
# decimal = 25
# binary  = 11001
# hex     = 0x19`,
            },
            diagram: {
              kind: "flow",
              title: "Decimal to binary conversion by repeated division",
              caption:
                "Divide by 2, record remainders, read them bottom-up - the binary representation emerges.",
              steps: [
                { label: "Start with decimal N = 25", note: "the number to convert" },
                { label: "Divide by 2: 25/2 = 12 r 1", note: "remainder is LSB" },
                { label: "12/2 = 6 r 0; 6/2 = 3 r 0", note: "continue dividing" },
                { label: "3/2 = 1 r 1; 1/2 = 0 r 1", note: "stop when quotient is 0" },
                { label: "Read remainders bottom-up: 11001", note: "verify 16+8+1 = 25" },
              ],
            },
            callout: {
              type: "exam",
              title: "Group binary bits in fours for hex",
              body: "To convert a long binary string to hex, pad with leading zeros to a multiple of four bits, then translate each group of four to one hex digit: 11001 -> 0001 1001 -> 1 9 -> 0x19. This is far faster than converting through decimal and is the standard shortcut in exams and in engineering practice.",
            },
            keyTerms: [
              { term: "Binary number system", definition: "Base-2 system using digits 0 and 1; the native language of digital electronics." },
              { term: "Hexadecimal", definition: "Base-16 system using digits 0-9 and A-F; one hex digit represents 4 binary bits." },
              { term: "Half adder", definition: "Combinational circuit adding two single bits; S = A XOR B, C = A AND B; no carry input." },
              { term: "Full adder", definition: "Combinational circuit adding three bits (A, B, C_in); S = A XOR B XOR C_in, C_out = AB + C_in(A XOR B)." },
              { term: "Ripple-carry adder", definition: "n full adders cascaded to add n-bit numbers; carry propagates from LSB to MSB." },
            ],
            examQuestions: [
              {
                q: "Convert decimal 25 to binary and hexadecimal, showing all steps. Draw the truth table of a half adder and a full adder, stating the Boolean expressions for sum and carry. Explain how n full adders form an n-bit ripple-carry adder.",
                marks: 7,
                outline: [
                  "Decimal to binary: 25/2=12 r1, 12/2=6 r0, 6/2=3 r0, 3/2=1 r1, 1/2=0 r1; read bottom-up: 11001.",
                  "Verify: 16 + 8 + 1 = 25.",
                  "To hex: group bits in fours: 0001 1001 = 1 9 = 0x19; verify 1x16 + 9 = 25.",
                  "Half adder truth table: 00->S=0,C=0; 01->S=1,C=0; 10->S=1,C=0; 11->S=0,C=1.",
                  "Half adder expressions: S = A XOR B, C = A AND B.",
                  "Full adder: S = A XOR B XOR C_in, C_out = AB + C_in(A XOR B); 8-row truth table.",
                  "Ripple carry: cascade n full adders, each C_out to next C_in; carry propagates LSB to MSB.",
                ],
              },
              {
                q: "Convert the binary number 101101 to decimal.",
                marks: 3,
              },
              {
                q: "Write the Boolean expressions for the sum and carry of a full adder.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
  ],
  // ====================================================================
  // STUDY PLAN
  // ====================================================================
  studyPlan: [
    {
      id: "weights",
      heading: "Exam weight map",
      weightedTopics: [
        { topic: "Thevenin's and Norton's theorems with worked equivalents", weight: "8-10 marks", note: "Almost guaranteed in Unit I; practise finding V_th, R_th for 2-source circuits." },
        { topic: "AC power: active, reactive, apparent, power factor, PF correction", weight: "8-10 marks", note: "Compute P, Q, S from V, I, phi; size the correction capacitor from 0.7 to 0.95." },
        { topic: "Transformer EMF equation, equivalent circuit, efficiency", weight: "8-10 marks", note: "Derive E = 4.44 f N phi_m; compute efficiency and regulation with copper and iron losses." },
        { topic: "Three-phase star/delta, line vs phase, power formula", weight: "6-8 marks", note: "The sqrt(3) relationships and P = sqrt(3) V_L I_L cos(phi) are standard 7-mark material." },
        { topic: "Mesh and nodal analysis of 2-source circuits", weight: "6-8 marks", note: "Write KVL/KCL equations and solve a 2x2 system; label every step." },
        { topic: "PN junction diode V-I characteristic and rectifiers", weight: "6-8 marks", note: "Forward/reverse bias, knee voltage; half-wave vs bridge V_dc, ripple, PIV." },
        { topic: "Op-amp inverting and non-inverting amplifiers", weight: "5-7 marks", note: "Virtual short; gains -R_f/R_1 and 1 + R_f/R_1; compute output for given input." },
        { topic: "Induction motor: slip, torque-slip, starters", weight: "5-7 marks", note: "Compute N_s, s, f_r; describe star-delta starter and torque-slip regions." },
        { topic: "Magnetic circuits: MMF, flux, reluctance", weight: "4-6 marks", note: "Magnetic Ohm's law phi = F/S; analogy to electric circuits." },
        { topic: "Logic gates and number systems", weight: "4-6 marks", note: "Truth tables for AND/OR/NAND/NOR/XOR; decimal-binary-hex conversions." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        { week: "Week 1", focus: "Unit I - DC circuit fundamentals", tasks: ["Ohm's law, KCL/KVL, series-parallel reduction (3 worked numericals)", "Mesh and nodal analysis of 2-source circuits (4 problems)", "Source transformation and star-delta conversion (3 problems)"] },
        { week: "Week 2", focus: "Unit I theorems + Unit II AC basics", tasks: ["Thevenin and Norton equivalents with worked examples (5 problems)", "Maximum power transfer derivation and numericals", "Sinusoidal quantities: RMS, average, form factor, peak factor (3 problems)"] },
        { week: "Week 3", focus: "Unit II - AC circuits and power", tasks: ["Phasor representation and R/L/C impedance (4 problems)", "Series RLC resonance: compute f_0, Q, bandwidth (3 problems)", "Active/reactive/apparent power and PF correction capacitor sizing (4 problems)"] },
        { week: "Week 4", focus: "Unit II three-phase + Unit III magnetic/transformers", tasks: ["Three-phase star/delta line and phase quantities (3 problems)", "Magnetic circuits: MMF, flux, reluctance; Faraday and Lenz (4 problems)", "Transformer EMF equation and equivalent circuit (3 problems)"] },
        { week: "Week 5", focus: "Unit III efficiency + Unit IV machines", tasks: ["Transformer efficiency, regulation, auto-transformer, CT/PT (4 problems)", "DC motor: back-EMF, torque, types, speed control (3 problems)", "Induction motor: slip, torque-slip, starters; single-phase motors brief"] },
        { week: "Week 6", focus: "Unit IV installations + Unit V electronics + revision", tasks: ["Domestic wiring, earthing, safety devices, energy billing (2 worked bills)", "Semiconductor basics, PN junction, rectifiers, zener, BJT (4 problems)", "Op-amp amplifiers, logic gates, number systems; two full practice papers"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Skim every section's callout box - the exam tip, warning, or high-yield note is the distilled takeaway.",
        "Re-derive the four anchor formulas from memory: E = 4.44 f N phi_m, P = sqrt(3) V_L I_L cos(phi), C = P(tan phi_1 - tan phi_2)/(omega V^2), A_v = 1 + R_f/R_1.",
        "Redraw the five diagrams you find hardest from memory (Thevenin procedure, power triangle, transformer equivalent circuit, torque-slip curve, op-amp inverting amplifier).",
        "Practise four worked numericals cold: Thevenin of a 2-source circuit, PF correction from 0.7 to 0.95, transformer efficiency at full load, induction motor slip at 1440 rpm.",
        "Write the combined logic gate truth table (AND, OR, NAND, NOR, XOR) once from memory - it is the single most asked digital question.",
        "List the units and SI symbols you tend to confuse: VAR vs VA vs W, AT vs A/m, Wb vs T, henry vs farad.",
        "Sleep seven hours; an electrical paper rewards clear heads more than late-night cramming.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Start every numerical by writing the given data, the formula to be used, and the substitution on three separate lines - the marker awards method marks for the formula even if arithmetic later slips.",
        "For Thevenin problems, draw the circuit at three stages: original (load removed), V_th measurement, R_th with sources deactivated - three labelled diagrams earn three method marks.",
        "In AC problems, always state whether angles are in degrees or radians; RGPV expects degrees (e.g. 36.9 deg, not 0.644 rad).",
        "For transformer efficiency, compute copper loss and iron loss separately, then add - do not lump them. Examiners look for the explicit P_cu = I^2 R_eq and P_core = V^2/R_c lines.",
        "In power factor correction, write the capacitor formula C = P(tan phi_1 - tan phi_2)/(omega V^2) before substituting; the formula is worth two marks on its own.",
        "For three-phase problems, write V_L = sqrt(3) V_ph (star) or I_L = sqrt(3) I_ph (delta) as a labelled step before computing power.",
        "Time-box: 2-mark questions in 4 minutes, 3-mark in 6 minutes, 7-mark in 15 minutes; keep 10 minutes at the end for a verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes that cost easy marks",
      bullets: [
        "Forgetting the 0.7 V silicon diode drop in rectifier V_dc calculations - subtract it from V_m before dividing by pi.",
        "Using V_rms = V_m in power formulas instead of V_m/sqrt(2) - the RMS factor halves the voltage and quarters the power if missed.",
        "Computing R_th by shorting voltage sources but forgetting to open current sources - both must be deactivated.",
        "Writing PF = 0.8 without specifying 'lagging' or 'leading' - the qualifier is worth a mark and determines the correction method.",
        "Using 2 pi f instead of omega in the capacitor sizing formula, then forgetting to square V - the denominator must be omega x V^2.",
        "Confusing N_s = 120 f/P with N_s = 60 f/P - the 120 comes from the 60 (rpm/Hz) times the 2 poles per pole-pair.",
        "Mixing up the BJT configurations: CE inverts (gain -R_f/R_1 confusion), CB has current gain < 1, CC has voltage gain ~ 1 (buffer).",
        "Writing ripple factor of half-wave as 0.482 (it is 1.21) and of full-wave/bridge as 1.21 (it is 0.482) - they are swapped.",
      ],
    },
  ],
};
