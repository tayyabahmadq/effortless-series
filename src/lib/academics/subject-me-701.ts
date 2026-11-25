/**
 * Academics - RGPV ME 7th-semester subject: ME-701 Heat and Mass Transfer.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or Python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me701: AcademicSubject = {
  id: "me-701",
  code: "ME-701",
  title: "Heat and Mass Transfer",
  semester: "VII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to heat and mass transfer for mechanical engineering: conduction through walls, cylinders and fins, convection with its boundary layers and correlations, boiling, condensation and heat exchanger design, radiation networks with shields, and the diffusion-driven world of cooling towers and drying.",
  description:
    "Five units walk from Fourier's law and the electrical analogy, through composite walls, the critical insulation radius and fins, into lumped-capacitance transients; then convection's boundary layers and dimensionless numbers arm you for flat-plate, tube and natural-convection correlations; unit three boils and condenses its way to LMTD and NTU heat-exchanger design; unit four covers blackbody laws, view factors, gray-surface networks and radiation shields; and unit five closes with Fick's law, transport analogies, cooling towers, drying and coupled case studies - every section pairing worked numbers with a redrawable diagram and the exam questions RGPV actually asks.",
  accentColor: "#f59e0b",
  emoji: "HT",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Conduction",
      summary:
        "The foundation of the subject: the three modes of heat transfer, Fourier's law, the electrical analogy that turns walls, cylinders and composites into resistance chains, the critical radius of insulation, fins as bought area, and the lumped-capacitance shortcut for transient problems.",
      chapter: {
        number: "01",
        title: "Conduction: Fourier's law, composites, fins and transients",
        intro:
          "Unit I builds the vocabulary every later unit borrows: the three modes and their governing laws, one-dimensional steady conduction through plane walls, cylinders and composite systems by the resistance analogy, the counterintuitive critical radius of insulation, extended surfaces (fins) judged by efficiency and effectiveness, and transient conduction where the Biot number decides between one lumped temperature and a whole temperature field.",
        inOneBreath:
          "Heat flows down the temperature gradient at a rate fixed by conductivity and geometry; steady problems become resistance chains with L/(kA), ln(r2/r1)/(2 pi k L) and 1/(hA) in series; insulating a cylinder peaks the heat loss at the critical radius r_c = k/h; fins add area where the coefficient h is small and are judged by efficiency and effectiveness; and a solid whose Biot number is below 0.1 cools as one lumped temperature with the exponential time constant rho c V/(h A).",
        sections: [
          {
            number: "1.1",
            title: "Modes of heat transfer and Fourier's law",
            body: [
              "Heat transfer answers the question thermodynamics never asks: not just how much heat moves between states, but how fast, along which path, and at what temperature cost. Three mechanisms carry it. Conduction is energy handed from molecule to molecule through a solid - or through a fluid at rest - with no bulk movement. Convection is conduction supercharged by transport: the moving fluid itself carries energy to and from the surface. Radiation is energy emitted as electromagnetic waves and needs no medium at all - it crosses the vacuum between the sun and the earth. Every real plant runs all three at once; the engineer's first job is spotting which one sets the rate.",
              "Conduction obeys Fourier's law: the heat rate q equals -k A dT/dx, where k is the thermal conductivity, A the area normal to the flow, and dT/dx the temperature gradient. The minus sign enforces the second law - heat flows down the gradient, from hot to cold, never uphill. Conductivity spans four orders of magnitude: about 400 W/m-K for copper, 50 for steel, 0.7 for brick, 0.61 for still water and a mere 0.026 for air - which is why a metal handrail feels colder than a wooden bench on the same morning. Dividing k by rho c gives the thermal diffusivity alpha, which measures how quickly a material's temperature responds when it is heated.",
              "A worked flux: a brick wall (k = 0.7 W/m-K) 0.2 m thick with 770 K across it passes q/A = 0.7 x 770/0.2 = 2695 W/m2 - nearly three kilowatts through every square metre. Multiply by area and hours and the furnace fuel bill follows. The same law sizes insulation, predicts interface temperatures and finds losses from buried pipes. In exams the mode question is usually definitional: state the three modes with one example each, give the governing law for each, and identify the controlling mode in a described plant. Later units build directly on this - convection adds a moving boundary layer, radiation adds a fourth-power law.",
            ],
            bullets: [
              "Conduction: molecular energy exchange through solids or stagnant fluids; no bulk motion; governed by Fourier's law.",
              "Convection: conduction plus advection; a moving fluid sweeps energy across the surface, quantified by Newton's law of cooling q = h A (Ts - T infinity).",
              "Radiation: electromagnetic emission needing no medium; every surface above 0 K emits, and net exchange grows with T^4.",
              "Fourier's law q = -k A dT/dx: the minus sign points the flux from hot to cold, satisfying the second law.",
              "Conductivity ladder (W/m-K): copper ≈ 400, steel ≈ 50, brick ≈ 0.7, water ≈ 0.61, air ≈ 0.026 - conductors beat insulators by a factor of 10,000.",
            ],
            table: {
              caption: "Thermal conductivity of common materials near room temperature.",
              headers: ["Material", "k (W/m-K)", "Role in plant"],
              rows: [
                ["Copper", "401", "heat sink bases, calorimeters"],
                ["Mild steel", "50", "pipe walls, pressure parts"],
                ["Brick masonry", "0.7", "building and furnace walls"],
                ["Water (still)", "0.61", "process liquid"],
                ["Glass wool", "0.04", "insulation wraps"],
                ["Air (still)", "0.026", "window gaps, cavity walls"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Heat leaves a hot surface - which mode sets the rate?",
              caption:
                "Four situations, four controlling modes. The last branch is the trap examiners love.",
              start: "A hot surface must lose heat. What controls?",
              branches: [
                { label: "Solid or stagnant layer", outcome: "Conduction - the material's k and thickness set the rate", good: true },
                { label: "Fluid moving over the surface", outcome: "Convection - the thin boundary layer is the bottleneck", good: true },
                { label: "Line of sight to another surface", outcome: "Radiation - no medium needed, grows with T^4", good: true },
                { label: "Vacuum gap assumed to block heat", outcome: "Trap: radiation crosses vacuum freely - estimate it before dismissing it", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "State each mode with its governing law (Fourier, Newton's law of cooling, Stefan-Boltzmann) before touching any numbers. RGPV markers allocate a full mark per correctly stated law, and the clause asking you to identify the controlling mode in a described plant is usually worth one more.",
            },
            keyTerms: [
              { term: "Conduction", definition: "Energy transfer by molecular interaction through a solid or stationary fluid, with no bulk motion." },
              { term: "Thermal conductivity (k)", definition: "The proportionality constant in Fourier's law; a material property in W/m-K measuring how readily heat conducts." },
              { term: "Thermal diffusivity (alpha)", definition: "k divided by rho c; how fast a material's temperature changes when heat is added, in m2/s." },
            ],
            examQuestions: [
              {
                q: "Define the three modes of heat transfer with one practical example of each, state their governing laws, and compute the heat flux through a 0.2 m brick wall (k = 0.7 W/m-K) whose faces sit at 800 C and 30 C.",
                marks: 7,
                outline: [
                  "Define conduction, convection and radiation with an example each (furnace wall, water jacket, boiler flame).",
                  "State Fourier's law q = -k A dT/dx and explain the negative sign.",
                  "State Newton's law of cooling q = h A (Ts - T infinity) and define h with units.",
                  "State the Stefan-Boltzmann law E = sigma T^4 and note that no medium is needed.",
                  "Compute the flux: q/A = 0.7 x (800 - 30)/0.2 = 2695 W/m2.",
                  "Note that in practice this conduction sits in series with outside convection and radiation.",
                  "Conclude with a units check and the kW total after multiplying by any given area.",
                ],
              },
              {
                q: "Why does a metal railing feel much colder than a wooden bench on a winter morning even though both are at the same temperature?",
                marks: 2,
              },
              {
                q: "Distinguish between thermal conductivity and thermal diffusivity, giving units of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "One-dimensional steady conduction: wall, cylinder and composites",
            body: [
              "For a plane wall of conductivity k, thickness L and area A carrying steady one-dimensional heat, Fourier's law integrates to q = k A (T1 - T2)/L, and the temperature profile between the faces is a straight line. The result invites the electrical analogy: temperature difference is voltage, heat rate is current, and the ratio L/(k A) behaves exactly like a resistor. Stack several layers - firebrick, insulation, steel shell - and the resistances simply add in series: q = (T_in - T_out) divided by the sum of all resistances. Each layer then holds a temperature drop proportional to its share of the total, so a thin insulating layer can dominate an entire wall.",
              "Composite cylinders - pipes, lagged steam mains, insulated cables - need more care because the area grows with radius. Integrating Fourier's law across the annulus gives R = ln(r2/r1)/(2 pi k L), and a composite pipe sums one logarithmic term per layer. Interface temperatures follow from resistance ratios exactly as in the wall, so the hottest brick face is found without solving anything twice. Real joints add contact resistance: no two surfaces touch perfectly, microscopic gaps block conduction, and a dry pressed joint can add a resistance worth centimetres of steel. Grease, soft gaskets and higher contact pressure cut it down.",
              "Worked example, run in the code below: a 900 C furnace behind 0.23 m firebrick (k = 1.1), 0.05 m mineral wool (k = 0.04) and 6 mm steel (k = 50), with inside and outside film coefficients of 35 and 8 W/m2-K over 12 m2. The resistances total 0.1344 K/W and the loss is about 6.4 kW, with the wool layer carrying 78 percent of the drop. That audit tells a plant engineer exactly where an extra centimetre of lagging pays. The spherical shell completes the family with R = (1/r1 - 1/r2)/(4 pi k).",
            ],
            bullets: [
              "Plane wall: q = k A (T1 - T2)/L, with a linear temperature profile for constant k.",
              "Electrical analogy: delta T acts as voltage, q as current, R = L/(kA) as resistance.",
              "Series composites: R_total = sum of L_i/(k_i A); the biggest resistance takes the biggest temperature drop.",
              "Cylinder: R = ln(r2/r1)/(2 pi k L); never use the plane-wall form with an averaged area.",
              "Contact resistance: microscopic air gaps at joints; reduced by grease, gaskets or higher clamping pressure.",
            ],
            codeExample: {
              language: "python",
              caption: "Python: audit of a three-layer composite furnace wall, films included.",
              code: `# Steady heat loss through a three-layer composite furnace wall
k = [1.1, 0.04, 50.0]      # W/m-K: firebrick, mineral wool, steel
L = [0.23, 0.05, 0.006]    # m
A = 12.0                   # m2
T_in, T_out = 900.0, 40.0  # deg C
h_in, h_out = 35.0, 8.0    # W/m2-K

R_film_in = 1.0 / (h_in * A)
R_film_out = 1.0 / (h_out * A)
R_layers = [l / (kk * A) for l, kk in zip(L, k)]
R_total = R_film_in + sum(R_layers) + R_film_out

q = (T_in - T_out) / R_total
print(f"R_total = {R_total:.4f} K/W")
print(f"Heat loss = {q/1000:.2f} kW")

# Temperatures down the stack: each drop is q x resistance
T_stack = [T_in]
for R in [R_film_in] + R_layers + [R_film_out]:
    T_stack.append(T_stack[-1] - q * R)
labels = ["gas", "brick face", "wool face", "shell", "ambient"]
for lab, t in zip(labels, T_stack):
    print(f"{lab:>10s}: {t:6.0f} C")`,
            },
            diagram: {
              kind: "layers",
              title: "The furnace wall as a resistance sandwich",
              caption:
                "Index 0 is the hot side; every layer is one series resistance in the heat path.",
              layers: [
                { label: "Hot gas film (h = 35 W/m2-K)", note: "R = 1/(h A)" },
                { label: "Firebrick, 0.23 m, k = 1.1", note: "carries a modest drop" },
                { label: "Mineral wool, 0.05 m, k = 0.04", note: "78 percent of the total resistance" },
                { label: "Steel shell, 6 mm, k = 50", note: "negligible drop" },
                { label: "Ambient air film (h = 8)", note: "R = 1/(h A)" },
              ],
            },
            callout: {
              type: "warning",
              title: "The logarithm is the mark",
              body: "For cylinders the resistance is ln(r2/r1)/(2 pi k L). Students who average the areas or reuse L/(kA) lose the mark even when the arithmetic is right - writing the correct logarithmic form carries the method marks on its own.",
            },
            keyTerms: [
              { term: "Thermal resistance", definition: "The ratio of temperature difference to heat rate (K/W): L/(kA) for a wall, ln(r2/r1)/(2 pi k L) for a cylinder." },
              { term: "Contact resistance", definition: "Extra resistance at an imperfect joint caused by microscopic air gaps between the surfaces." },
              { term: "Composite wall", definition: "Several layers in series; resistances add and each temperature drop shares out in proportion to resistance." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for steady one-dimensional heat conduction through a composite cylindrical wall (a steam pipe with two lagging layers) and explain how the interface temperatures are located.",
                marks: 7,
                outline: [
                  "Start from Fourier's law written in cylindrical coordinates.",
                  "Separate variables and integrate from r1 to r2: q = 2 pi k L (T1 - T2)/ln(r2/r1).",
                  "Write the resistance form R = ln(r2/r1)/(2 pi k L).",
                  "Extend to layers: R_total = sum of ln(r_i+1/r_i)/(2 pi k_i L).",
                  "State q = (T_in - T_out)/R_total.",
                  "Locate an interface: T_interface = T_in - q x (resistances encountered before it).",
                  "Add film resistances 1/(hA) at both surfaces to complete the chain.",
                ],
              },
              {
                q: "Why must the plane-wall resistance formula never be applied to a pipe using an averaged area?",
                marks: 2,
              },
              {
                q: "A composite wall is made of layers A and B in series. Which layer shows the larger temperature drop, and why?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Critical radius of insulation",
            body: [
              "On a flat wall, insulation always cuts the loss: the area stays fixed while the resistance grows in proportion to thickness. A pipe is different. Wrapping insulation of conductivity k around a tube of outer radius r1 raises the conduction resistance ln(r/r1)/(2 pi k L), but it also enlarges the outer surface, cutting the convection resistance 1/(2 pi r L h). The two trends fight each other. Starting from a small bare tube, the first wraps shrink the convection term faster than the conduction term grows - and the heat loss actually rises.",
              "The crossover - the maximum of the loss curve - is the critical radius r_c = k/h for a cylinder and 2k/h for a sphere, where k belongs to the insulation and h to the outer surface. Below r_c, adding insulation increases the loss; above it, the loss falls, eventually sinking under the bare-tube value. The code below traces the curve for a 10 mm radius tube insulated with k = 0.15 material in air with h = 10 W/m2-K: r_c is 15 mm, the loss peaks there, and roughly 25 mm of wrap is needed before the loss drops back below the bare-tube figure.",
              "The paradox is an asset in two places. Electrical wiring must stay cool: PVC sheathing (k ≈ 0.15-0.2 W/m-K) raises a thin cable's effective radius toward its critical value, improving heat dissipation while providing electrical insulation - cables deliberately run near r_c. Steam and refrigerant lines, the opposite case, use thick lagging of low k on large pipes so the starting radius sits well above r_c and every added centimetre pays. Exam answers must state which k and which h the formula uses; using the pipe metal's conductivity instead of the insulation's is the classic slip.",
            ],
            bullets: [
              "Plane wall: insulation always reduces q because the area is unchanged.",
              "Cylinder: insulation trades rising conduction resistance (ln r) against falling convection resistance (1/r).",
              "Critical radius: r_c = k/h for cylinders and 2k/h for spheres - the heat loss peaks exactly at r_c.",
              "Small tubes and wires can sit below r_c, so a thin wrap first increases the loss.",
              "Cable sheathing exploits r_c: electrical insulation that also improves cooling.",
            ],
            codeExample: {
              language: "python",
              caption: "Python: heat loss versus insulation radius for a thin tube.",
              code: `import math

# Does insulation always help? A 10 mm radius tube, thin lagging
k_ins = 0.15       # W/m-K, insulation
h = 10.0           # W/m2-K, outside natural convection
r1 = 0.010         # m, outer radius of the bare tube
T_s, T_inf = 150.0, 30.0   # deg C (tube surface, ambient)
L_tube = 1.0       # m

r_c = k_ins / h
print(f"Critical radius r_c = k/h = {r_c*1000:.0f} mm")
print(f"Bare radius = {r1*1000:.0f} mm: adding wrap first INCREASES loss")

for r2 in (0.010, 0.015, 0.020, 0.025, 0.030):
    R_cond = math.log(r2 / r1) / (2 * math.pi * k_ins * L_tube)
    R_conv = 1.0 / (2 * math.pi * r2 * L_tube * h)
    q = (T_s - T_inf) / (R_cond + R_conv)
    print(f"r = {r2*1000:3.0f} mm -> q = {q:5.1f} W")`,
            },
            diagram: {
              kind: "flow",
              title: "Walking the critical-radius curve",
              caption:
                "Trace of heat loss against outer radius for a tube that starts below its critical radius.",
              steps: [
                { label: "r2 = r1: the bare tube", note: "only convection resists" },
                { label: "r2 grows toward k/h", note: "convection resistance falls faster than conduction rises - q climbs" },
                { label: "r2 = r_c = k/h", note: "peak heat loss" },
                { label: "r2 beyond r_c", note: "the logarithmic term wins - q falls" },
                { label: "r2 near 2.5 r_c in this case", note: "q finally drops below the bare-tube loss" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Write r_c = k_insulation/h_outside before substituting. The recurring RGPV numerical gives a thin tube, a low h and a cheap insulant, then asks for the loss at two radii - draw the curve, mark r_c, and compare the two points on it.",
            },
            keyTerms: [
              { term: "Critical radius of insulation", definition: "The outer radius k/h at which heat loss from an insulated cylinder (or 2k/h for a sphere) is maximum." },
              { term: "Economic insulation thickness", definition: "The thickness minimising the sum of fuel cost and insulation cost; for most plant it lies far beyond r_c." },
              { term: "Lagging", definition: "Insulating wrap applied to pipes and vessels, sized starting from the critical-radius analysis." },
            ],
            examQuestions: [
              {
                q: "Derive an expression for the critical radius of insulation on a cylinder and discuss its practical importance for insulated pipes and electric cables.",
                marks: 7,
                outline: [
                  "Write the total resistance R = ln(r/r1)/(2 pi k L) + 1/(2 pi r L h).",
                  "Note the two opposing terms as r increases.",
                  "Set dR/dr = 0.",
                  "Obtain r_c = k/h and confirm it is a minimum of R, hence a maximum of q.",
                  "Interpret: r1 < r_c means added insulation first increases the loss.",
                  "Numerical illustration: r1 = 10 mm, k = 0.15 W/m-K, h = 10 W/m2-K gives r_c = 15 mm.",
                  "Applications: steam pipes lie above r_c so lagging always pays; PVC-sheathed cables sit near r_c so the wrap both insulates and cools.",
                ],
              },
              {
                q: "What is the critical radius of insulation for a sphere?",
                marks: 2,
              },
              {
                q: "A 5 mm radius cable is covered with 3 mm of plastic (k = 0.2 W/m-K). Will the covering raise or lower the cable's heat dissipation in air with h ≈ 15 W/m2-K?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Fins and extended surfaces",
            body: [
              "When the fluid-side coefficient h is small - nearly always gases - the cheapest fix is area: attach fins to the surface. A fin is an extended surface that conducts heat from its base and sheds it along its flanks. For a straight fin of uniform cross-section Ac and perimeter P, an energy balance on a slice gives the fin equation d2T/dx2 - m2 (T - T infinity) = 0 with m = sqrt(h P/(k Ac)). For an infinitely long fin the solution decays exponentially along the fin and the heat leaving the base is q = sqrt(h P k Ac) (T_base - T infinity).",
              "Real fins end at a finite tip that also convects; the standard trick is the corrected length L_c = L + Ac/P, which converts a convective tip into an adiabatic one with negligible error. Boundary conditions select the solution: prescribed tip temperature (a thermometer well), adiabatic tip (the measured-rod experiment), infinite fin (a long thin needle). Two figures of merit govern design. Fin efficiency eta_f is the actual fin duty divided by what the fin would pass if its whole surface sat at base temperature - a healthy 0.6 to 0.95. Fin effectiveness epsilon_f is the fin duty divided by what the bare base area alone would pass - a fin earns its keep only above 2 to 5.",
              "Design rules follow straight from the equations. Use high-conductivity material - aluminium, occasionally copper - because k sits under the square root in m; a long fin is wasted past about 4/m, where the tail is already at fluid temperature. Put fins on the side with the small h: on a water-to-air cooler, that is the air side, always. Thin, closely spaced fins buy area cheaply, but if the spacing falls below about twice the boundary-layer thickness the layers merge and choke the flow. The table collects the metrics examiners ask for, and the pyramid shows how they nest.",
            ],
            bullets: [
              "Fin equation: d2T/dx2 = m2 (T - T infinity), with m = sqrt(hP/(k Ac)) - the fin's decay constant.",
              "Infinite fin: T - T infinity = (T_base - T infinity) e^(-m x); q_base = sqrt(h P k Ac) (T_base - T infinity).",
              "Corrected length L_c = L + Ac/P converts a convective tip into an adiabatic one.",
              "Efficiency eta_f: actual fin duty over the duty if the whole fin sat at base temperature (0.6-0.95 typical).",
              "Effectiveness epsilon_f: fin duty over the bare-base duty; add fins only when it exceeds 2-5.",
            ],
            table: {
              caption: "Fin performance vocabulary at a glance.",
              headers: ["Metric", "Definition", "Healthy range or rule"],
              rows: [
                ["Effectiveness", "q_fin / (h x bare base area x delta T)", "≥ 2-5, else the fin is dead weight"],
                ["Efficiency", "q_fin / (h x total fin area x delta T)", "0.6-0.95 for good designs"],
                ["Overall surface efficiency", "1 - (A_fin/A_total)(1 - eta_f)", "0.7-0.9 for finned arrays"],
                ["Corrected length", "L_c = L + Ac/P", "use with tanh(m L_c) for adiabatic tips"],
                ["Useful length", "about 4/m", "beyond it the fin carries almost nothing"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "From one fin's worth to a finned surface",
              caption:
                "Narrow top: the per-fin payoff question. Broad base: the whole wall with fins plus exposed root.",
              tiers: [
                { label: "Effectiveness", note: "is this fin worth its own base area? (per-fin payoff)" },
                { label: "Efficiency", note: "how much of this fin's area actually works?" },
                { label: "Overall surface efficiency", note: "fins plus exposed root together" },
              ],
            },
            callout: {
              type: "warning",
              title: "The denominator mix-up",
              body: "Effectiveness divides by the bare base area; efficiency divides by the total fin area. Swapping the two denominators is the single most common fin error in RGPV papers - label the formula you are using before substituting anything.",
            },
            keyTerms: [
              { term: "Fin effectiveness", definition: "Ratio of fin heat transfer to the heat transfer that would occur from the bare base area alone." },
              { term: "Fin efficiency", definition: "Ratio of actual fin heat transfer to what the fin would pass if its entire surface were at base temperature." },
              { term: "Corrected length", definition: "L + Ac/P, letting a fin with a convective tip be analysed as one with an adiabatic tip." },
            ],
            examQuestions: [
              {
                q: "Derive the differential equation for heat flow in a straight fin of uniform cross-section, solve it for an infinitely long fin, and obtain the expression for the heat dissipated from the base.",
                marks: 7,
                outline: [
                  "Balance conduction in and out of a slice against convection from its perimeter.",
                  "Define excess temperature theta = T - T infinity and m2 = hP/(k Ac).",
                  "Write d2theta/dx2 - m2 theta = 0.",
                  "Apply the infinite-fin condition theta = 0 as x goes to infinity.",
                  "Solve: theta = theta_base e^(-m x).",
                  "Differentiate at the base: q_base = -k Ac dT/dx at 0 = sqrt(hP k Ac) theta_base.",
                  "State the design meaning: fins pay when k is high and h is small (gas sides).",
                ],
              },
              {
                q: "Define fin effectiveness and state the criterion that decides whether a fin is worth adding.",
                marks: 3,
              },
              {
                q: "Why are automobile radiators made of aluminium with fins on the air side only?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Transient conduction and lumped capacitance",
            body: [
              "Quenching a hot billet, warming a cold pipe, a thermocouple responding to a step - all are transient problems where temperature depends on both position and time. The crucial question is whether the solid's internal conduction resistance matters. The Biot number Bi = h L_c/k compares the surface resistance to the internal resistance, with L_c = V/A the characteristic length. When Bi < 0.1 the internal gradients stay below about five percent and the whole body can be treated as a single lumped temperature - the lumped-capacitance method.",
              "The lumped energy balance - the rate of internal energy loss equals convection out of the surface - gives an elegant exponential decay: (T - T infinity) = (T_i - T infinity) exp(-t/tau) with time constant tau = rho c V/(h A). The body covers 63 percent of its journey to equilibrium in one tau and 95 percent in three. To find when a body reaches a target temperature, invert the exponential: t = tau ln((T_i - T infinity)/(T - T infinity)). The code below times a 40 mm steel ball quenched from 850 C in oil: tau is about a minute, so it passes 400 C in under a minute and 200 C in under two.",
              "When Bi exceeds 0.1, the centre lags the surface and charts or series solutions enter: the one-term approximation gives the centre temperature as A1 exp(-lambda1^2 Fo) with Fourier number Fo = alpha t/L_c^2, the coefficients read from the Biot number. Very thick bodies whose surface is suddenly changed behave as semi-infinite solids with error-function temperature profiles. The design lever is visible in the numbers: small, high-conductivity bodies under a fierce h lump beautifully - which is exactly how a thermocouple bead is built for fast response. Sketch the cooling curve and mark tau on every answer.",
            ],
            bullets: [
              "Biot number: Bi = h L_c/k with L_c = V/A; internal versus surface resistance.",
              "Lumped validity: Bi < 0.1 keeps internal gradients below about 5 percent.",
              "Lumped solution: exponential decay with tau = rho c V/(h A); 63 percent in one tau, 95 percent in three.",
              "Inverse problem: time to reach T is t = tau ln((Ti - T infinity)/(T - T infinity)).",
              "Bi ≥ 0.1: Heisler charts or the one-term series, with Fo = alpha t/L_c^2.",
            ],
            codeExample: {
              language: "python",
              caption: "Python: quench of a 40 mm steel ball - Biot check and cooling times.",
              code: `import math

# Lumped-capacitance quench of a 40 mm steel ball
d = 0.04                  # m
k_ball = 50.0             # W/m-K
rho, c = 7850.0, 460.0    # kg/m3, J/kg-K
h = 400.0                 # W/m2-K
T_i, T_inf = 850.0, 60.0  # deg C

V = math.pi * d**3 / 6
A = math.pi * d**2
L_c = V / A                          # = d/6
Bi = h * L_c / k_ball
print(f"L_c = {L_c*1000:.1f} mm   Bi = {Bi:.3f}")

if Bi < 0.1:
    tau = rho * c * V / (h * A)      # time constant, s
    for T_target in (400.0, 200.0):
        t = tau * math.log((T_i - T_inf) / (T_target - T_inf))
        print(f"{T_target:.0f} C reached after {t/60:.1f} min")
else:
    print("Lumped model invalid - use Heisler charts")`,
            },
            diagram: {
              kind: "fork",
              title: "Can you lump it?",
              caption:
                "One dimensionless number decides between a one-line solution and a field problem.",
              start: "Compute Bi = h L_c / k",
              branches: [
                { label: "Bi < 0.1", outcome: "Lumped model: one temperature everywhere, exponential decay with tau = rho c V/(h A)", good: true },
                { label: "Bi ≥ 0.1", outcome: "Lumped model misleads: the centre lags the surface - switch to Heisler charts or the one-term series", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always compute Bi first and state what it implies before choosing a model. Papers repeatedly hand you a 'nice' number that fails the check; the examiner awards the Biot computation itself, and the rest of the marks follow only if you chose the right branch of this fork.",
            },
            keyTerms: [
              { term: "Biot number", definition: "h L_c/k: the ratio of internal conduction resistance to external convection resistance." },
              { term: "Time constant (tau)", definition: "rho c V/(h A): the time for the excess temperature to fall to 1/e of its initial value in lumped cooling." },
              { term: "Fourier number", definition: "alpha t/L_c^2: dimensionless time, the ratio of heat conducted to heat stored." },
            ],
            examQuestions: [
              {
                q: "A steel ball 40 mm in diameter (k = 50 W/m-K, rho = 7850 kg/m3, c = 460 J/kg-K), initially at 850 C, is quenched in oil at 60 C with h = 400 W/m2-K. Check the Biot number, select a model, and find the time to reach 400 C.",
                marks: 7,
                outline: [
                  "Compute L_c = V/A = d/6 = 6.67 mm.",
                  "Compute Bi = h L_c/k = 0.053 < 0.1, so the lumped model is valid.",
                  "Compute tau = rho c V/(h A), about 60 s.",
                  "Write (T - T infinity)/(T_i - T infinity) = exp(-t/tau).",
                  "Invert: t = tau ln((850-60)/(400-60)), about 51 s.",
                  "Quote the 63 percent / one-tau behaviour as a check.",
                  "Comment: had Bi exceeded 0.1, Heisler charts would be required.",
                ],
              },
              {
                q: "Define the Fourier number and state its physical meaning.",
                marks: 2,
              },
              {
                q: "Why should a thermocouple bead be small and made of high-conductivity material?",
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
      title: "Convection",
      summary:
        "Convection from first principles: velocity and thermal boundary layers, the dimensionless numbers that organise experiments, and the working correlations for forced flow over flat plates, forced flow inside tubes, and natural convection.",
      chapter: {
        number: "02",
        title: "Convection: boundary layers and correlations",
        intro:
          "Unit II explains why convection coefficients are what they are: the no-slip wall where only conduction survives, the two boundary layers and their Prandtl-number relationship, dimensional analysis producing Re, Pr, Gr and Nu, and the correlation toolkit - laminar and turbulent flat plates, Dittus-Boelter for tubes, and the C-n constants of natural convection.",
        inOneBreath:
          "A boundary layer grows from the leading edge and the heat transfer coefficient is fixed by the temperature gradient at the wall; Reynolds decides laminar or turbulent, Prandtl fixes the thermal layer's relative thickness, and Grashof replaces Reynolds when buoyancy drives the flow; flat-plate and tube correlations deliver Nu = C Re^m Pr^n, natural convection follows Nu = C (Gr Pr)^n, and every coefficient is recovered as h = Nu k/L.",
        sections: [
          {
            number: "2.1",
            title: "Boundary layers and the convective mechanism",
            body: [
              "Convection is conduction at the wall plus transport by the stream. Because of the no-slip condition the fluid in contact with the surface is at rest, so right at the wall heat can only conduct: h equals -k times the wall temperature gradient divided by (T_s - T infinity). The velocity boundary layer is the region where velocity grows from zero at the wall to 99 percent of the free stream; for laminar flow over a plate its thickness grows as delta ≈ 5 x/sqrt(Re_x). The thermal boundary layer is defined the same way for temperature, using a 99 percent recovery of the wall-to-stream difference.",
              "The two layers usually differ, and their ratio is fixed by the Prandtl number. For Pr ≈ 1 (all gases) they nearly coincide; for Pr >> 1 (oils) the thermal layer is much thinner and the wall gradient steeper; for liquid metals with Pr << 1 heat diffuses far beyond the velocity layer. Along the plate the local coefficient h_x falls as x^(-1/2) in laminar flow because the layer thickens; at Re_x ≈ 5 x 10^5 transition trips the layer turbulent, mixing improves dramatically, and h_x jumps before decaying more slowly, as x^(-1/5). The average coefficient over a fully laminar plate is exactly twice the local value at the trailing edge.",
              "Inside tubes the same physics meets a ceiling: the layer grows until it fills the duct, after which the flow is fully developed and h settles to a constant. Entry lengths are about 0.05 Re D in laminar flow and roughly ten diameters in turbulent. Every later correlation in this unit is really a boundary-layer statement: thin the layer - higher velocity, turbulence, interrupted surfaces - and h rises. That is why compact exchanger cores use louvred fins and why rough pipes transfer heat better than smooth ones, at the price of pumping power.",
            ],
            bullets: [
              "No slip: fluid at the wall is stationary; only conduction crosses the last micron, so h is set by the wall gradient.",
              "Velocity layer: grows as delta ≈ 5x/sqrt(Re_x) in laminar flow; thermal layer likewise with the 99 percent rule.",
              "Prandtl number sets the ratio: delta_thermal/delta ≈ Pr^(-1/3) in laminar flow.",
              "Local h_x falls as x^(-1/2) laminar and x^(-1/5) turbulent; transition near Re_x = 5 x 10^5.",
              "Pipe flow: boundary layers merge in the entry region; fully developed h is constant along the tube.",
            ],
            table: {
              caption: "Laminar versus turbulent boundary layers on a flat plate.",
              headers: ["Feature", "Laminar", "Turbulent"],
              rows: [
                ["Layer thickness", "delta ≈ 5x/sqrt(Re_x)", "delta ≈ 0.37 x Re_x^(-0.2)"],
                ["Local h_x", "falls as x^(-1/2)", "falls as x^(-1/5)"],
                ["Transition", "ends near Re_x = 5 x 10^5", "begins near Re_x = 5 x 10^5"],
                ["Wall shear", "small", "several times laminar"],
                ["Mixing", "molecular only", "eddy-dominated - steeper wall gradients"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The boundary-layer sandwich over a flat plate",
              caption:
                "Read top (free stream) to bottom (wall): nearly all the resistance lives in the bottom two layers.",
              layers: [
                { label: "Free stream", note: "U infinity, T infinity - unaware of the plate" },
                { label: "Boundary-layer edge", note: "99 percent of the free-stream value recovered" },
                { label: "Outer / buffer region", note: "turbulent bursts once tripped" },
                { label: "Viscous sublayer", note: "steepest gradients - conduction only" },
                { label: "Wall", note: "no slip, no temperature jump" },
              ],
            },
            callout: {
              type: "tip",
              title: "Define h the rigorous way",
              body: "Whenever a question asks you to define the heat transfer coefficient, give h = -k (dT/dy) at the wall divided by (Ts - T infinity). It is the exact definition, it explains every correlation that follows, and it is routinely worth a mark on its own.",
            },
            keyTerms: [
              { term: "Velocity boundary layer", definition: "The region adjacent to a wall where velocity rises from zero to 99 percent of the free-stream value." },
              { term: "Thermal boundary layer", definition: "The region where the fluid temperature changes from the wall value to 99 percent of the free-stream value." },
              { term: "No-slip condition", definition: "The fluid in immediate contact with a solid surface has zero velocity relative to that surface." },
            ],
            examQuestions: [
              {
                q: "Explain the velocity and thermal boundary layers for flow over a flat plate, define the heat transfer coefficient from the wall temperature gradient, and discuss how the Prandtl number fixes the relative thickness of the two layers.",
                marks: 7,
                outline: [
                  "Define the velocity boundary layer with the 99 percent criterion and no-slip.",
                  "Define the thermal boundary layer similarly.",
                  "Write h = -k (dT/dy) at the wall divided by (Ts - T infinity).",
                  "Explain the growth of delta with x (≈ 5x/sqrt(Re_x)).",
                  "Relate delta_thermal/delta to Pr: thinner thermal layer for oils (Pr >> 1), thicker for liquid metals (Pr << 1).",
                  "Consequence: h_x falls as x^(-1/2) in laminar flow.",
                  "Mention transition near Re = 5 x 10^5 and the jump in h it brings.",
                ],
              },
              {
                q: "Why is the thermal boundary layer thinner than the velocity layer for engine oil but thicker for liquid sodium?",
                marks: 3,
              },
              {
                q: "What is meant by fully developed flow in a pipe, and how long is the entry region?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Dimensional analysis: Re, Pr, Gr and Nu",
            body: [
              "Convection experiments throw out dozens of variables - velocity, length, viscosity, conductivity, density, gravity, expansion coefficient. Dimensional analysis compresses them into a handful of dimensionless groups that collapse test data onto single curves. The stars: Reynolds Re = rho V L/mu, the ratio of inertial to viscous forces, which decides laminar or turbulent; Prandtl Pr = nu/alpha, the ratio of momentum diffusivity to thermal diffusivity, a pure fluid property; Grashof Gr = g beta delta T L^3/nu^2, buoyancy over viscosity, the natural-convection twin of Re; and Nusselt Nu = h L/k, the dimensionless wall temperature gradient - the group every experiment sets out to compute.",
              "Their physical stories matter in vivas. Nu = 1 means conduction alone across the layer - so a Nusselt of 300 means convection carries 300 times what pure conduction would. Pr ≈ 0.7 for all gases is a gift: one gas correlation serves them all. Liquid metals (Pr ≈ 0.004-0.03) diffuse heat faster than momentum; oils (Pr up to 10,000) do the reverse. The Rayleigh number Ra = Gr Pr governs natural convection, and the Stanton number St = h/(rho V c_p) = Nu/(Re Pr) measures how much of the stream's heat-carrying capacity the wall is actually capturing. Forced-convection correlations take the form Nu = C Re^m Pr^n; natural-convection ones take Nu = C (Gr Pr)^n.",
              "The derivation RGPV keeps asking for: h depends on D, V, rho, mu, c_p and k - seven variables (including h) spanning four dimensions, so expect three Pi groups. Buckingham Pi with rho, D and V (or mu) as repeating variables yields the groups, which re-arrange into precisely Nu = C Re^m Pr^n, with C, m and n fixed by experiment. The method - choose repeating variables, form each Pi term by eliminating dimensions, then name the groups - is worth practising twice before the exam. The matrix below fixes which group answers which physical question.",
            ],
            bullets: [
              "Re = rho V L/mu: inertial over viscous forces; fixes the flow regime.",
              "Pr = nu/alpha: momentum over thermal diffusivity; a fluid fingerprint (gases ≈ 0.7, water ≈ 7, oils 100+).",
              "Gr = g beta deltaT L^3/nu^2: buoyancy over viscosity; replaces Re when no pump drives the flow.",
              "Nu = h L/k: dimensionless wall gradient; Nu = 1 is pure conduction.",
              "Ra = Gr Pr drives natural convection; St = Nu/(Re Pr) measures the wall's share of the stream's heat capacity.",
            ],
            table: {
              caption: "The dimensionless toolkit of convection.",
              headers: ["Group", "Definition", "Physical meaning"],
              rows: [
                ["Reynolds", "rho V L / mu", "inertial forces over viscous forces"],
                ["Prandtl", "nu / alpha", "momentum diffusivity over thermal diffusivity"],
                ["Grashof", "g beta deltaT L^3 / nu^2", "buoyancy force over viscous force"],
                ["Rayleigh", "Gr x Pr", "the natural-convection driving group"],
                ["Nusselt", "h L / k", "convection over conduction across the layer"],
                ["Stanton", "h / (rho V c_p)", "heat captured over heat carried by the stream"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Which number answers which question?",
              caption:
                "Along the top: how the flow is driven. Down the side: driver or result. Pr tags along inside both result boxes as the fluid fingerprint.",
              axes: { x: "forced driver (left) to buoyant driver (right)", y: "driver (top) to result (bottom)" },
              quadrants: [
                { label: "Re - inertia over viscosity", note: "sets the regime for forced flow" },
                { label: "Gr - buoyancy over viscosity", note: "sets the regime for natural flow" },
                { label: "Nu = C Re^m Pr^n", note: "the answer for forced convection" },
                { label: "Nu = C (Gr Pr)^n", note: "the answer for natural convection" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The Buckingham Pi derivation of Nu = C Re^m Pr^n for forced convection appears year after year. Memorise the repeating-variable choice (rho, D, V or mu), form the Pi products one dimension at a time, and name each group as it appears.",
            },
            keyTerms: [
              { term: "Nusselt number", definition: "h L/k: the dimensionless temperature gradient at the wall; the ratio of convection to conduction across the layer." },
              { term: "Prandtl number", definition: "nu/alpha: the ratio of momentum diffusivity to thermal diffusivity; a property of the fluid alone." },
              { term: "Grashof number", definition: "g beta deltaT L^3/nu^2: the ratio of buoyancy to viscous forces; the natural-convection counterpart of Re." },
            ],
            examQuestions: [
              {
                q: "Using the Buckingham Pi theorem, show that forced-convection heat transfer can be expressed as Nu = C Re^m Pr^n.",
                marks: 7,
                outline: [
                  "List the variables: h with D, V, rho, mu, c_p, k - seven variables.",
                  "Four dimensions (M, L, T, theta) so expect 7 - 4 = 3 Pi terms.",
                  "Choose repeating variables, for example rho, D and V.",
                  "Form Pi_1 with h, Pi_2 with mu, Pi_3 with k, eliminating dimensions one at a time.",
                  "Identify Pi_1 = h D/k = Nu, Pi_2 = rho V D/mu = Re, Pi_3 = mu c_p/k = Pr.",
                  "Write Pi_1 = f(Pi_2, Pi_3), i.e. Nu = C Re^m Pr^n.",
                  "State that C, m and n are fixed by experiment for each geometry.",
                ],
              },
              {
                q: "Interpret a Nusselt number of 250 for crossflow over a tube.",
                marks: 3,
              },
              {
                q: "State typical Prandtl numbers for gases, water and oils.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Forced convection over a flat plate",
            body: [
              "Flat-plate correlations anchor forced convection. For laminar flow with properties at the film temperature, the local value is Nu_x = 0.332 Re_x^0.5 Pr^(1/3) and the plate average is Nu_L = 0.664 Re_L^0.5 Pr^(1/3) - exactly twice the trailing-edge local value. Beyond transition at Re ≈ 5 x 10^5 the turbulent local value is Nu_x = 0.0296 Re_x^0.8 Pr^(1/3), and a plate that starts laminar and ends turbulent averages Nu_L = (0.037 Re_L^0.8 - 871) Pr^(1/3), the mixed-correlation workhorse of exam numericals.",
              "Worked example: air at 25 m/s along a 1 m plate with film properties k = 0.026 W/m-K, nu = 1.5e-5 m2/s and Pr = 0.71. Then Re_L = 25 x 1/1.5e-5 = 1.67 x 10^6, so the layer trips turbulent partway along. The mixed correlation gives Nu ≈ 2360 and h ≈ 61 W/m2-K - the characteristic tens-scale for air, three orders of magnitude below condensing steam. Raising velocity helps only weakly (h grows as V^0.8); adding area helps linearly, which is why air sides are finned.",
              "Three habits secure the marks. Evaluate properties at the film temperature (T_s + T infinity)/2 unless told otherwise. Name the regime before quoting the correlation - a 0.332 in a turbulent problem is a guaranteed deduction. And for very low Pr (liquid metals) the standard correlations fail; the low-Pr form Nu_x = 0.565 (Re_x Pr)^0.5 takes over, a reminder that every correlation carries a validity range like an engineering specification. If only part of a plate is heated, an unheated starting length shifts the thermal layer, though most exam problems quietly ignore it.",
            ],
            bullets: [
              "Laminar local: Nu_x = 0.332 Re_x^0.5 Pr^(1/3); the plate average is 0.664 Re_L^0.5 Pr^(1/3).",
              "Turbulent local: Nu_x = 0.0296 Re_x^0.8 Pr^(1/3).",
              "Mixed plate: Nu_L = (0.037 Re_L^0.8 - 871) Pr^(1/3), transition at 5 x 10^5.",
              "Properties at the film temperature (Ts + T infinity)/2 - the default rule.",
              "Liquid metals need low-Pr correlations; the standard forms overpredict badly there.",
            ],
            table: {
              caption: "Flat-plate correlations (smooth plate, properties at film temperature).",
              headers: ["Regime", "Correlation", "Valid for"],
              rows: [
                ["Laminar, local", "Nu_x = 0.332 Re_x^0.5 Pr^(1/3)", "Re_x < 5 x 10^5"],
                ["Laminar, average", "Nu_L = 0.664 Re_L^0.5 Pr^(1/3)", "whole plate laminar"],
                ["Turbulent, local", "Nu_x = 0.0296 Re_x^0.8 Pr^(1/3)", "Re_x > 5 x 10^5"],
                ["Mixed, average", "Nu_L = (0.037 Re_L^0.8 - 871) Pr^(1/3)", "trips at 5 x 10^5"],
                ["Liquid metal, local", "Nu_x = 0.565 (Re_x Pr)^0.5", "Pr << 1"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Choosing and applying a plate correlation",
              caption:
                "The five moves of every flat-plate numerical - do them in this order and the marks follow.",
              steps: [
                { label: "Fix the film temperature, read properties", note: "k, nu, Pr at (Ts + T infinity)/2" },
                { label: "Compute Re_L = V L/nu", note: "also Re_x if local values are asked" },
                { label: "Select and name the regime", note: "laminar, turbulent or mixed" },
                { label: "Evaluate Nu from the correlation", note: "watch local (0.332) versus average (0.664)" },
                { label: "h = Nu k/L, then q = h A (Ts - T infinity)", note: "state the area basis used" },
              ],
            },
            callout: {
              type: "warning",
              title: "The factor-of-two trap",
              body: "0.332 is the local coefficient, 0.664 is the plate average. Underline the word 'average' or 'local' in the question before picking a formula - mixing them up is the most frequent single arithmetic error in this chapter.",
            },
            keyTerms: [
              { term: "Film temperature", definition: "The average of surface and free-stream temperatures, (Ts + T infinity)/2, at which external-flow properties are evaluated." },
              { term: "Local heat transfer coefficient", definition: "h_x at a particular distance x from the leading edge; falls as x^(-1/2) in laminar flow." },
              { term: "Mixed boundary layer", definition: "A plate whose layer starts laminar and trips turbulent partway along; handled by the (0.037 Re^0.8 - 871) correlation." },
            ],
            examQuestions: [
              {
                q: "Air at 25 m/s and 20 C flows along a flat plate 1 m long maintained at 80 C. Taking film properties k = 0.028 W/m-K, nu = 1.8e-5 m2/s and Pr = 0.70, compute the average heat transfer coefficient and the total heat transfer from a plate 1 m wide.",
                marks: 7,
                outline: [
                  "Film temperature = 50 C; the properties given already apply there.",
                  "Re_L = 25 x 1/1.8e-5 ≈ 1.39 x 10^6: turbulent, so use the mixed correlation.",
                  "Nu_L = (0.037 Re_L^0.8 - 871) Pr^(1/3).",
                  "Compute Re_L^0.8 ≈ 82,000 and hence Nu_L ≈ 1920.",
                  "h = Nu_L k/L ≈ 54 W/m2-K.",
                  "Area = 1 m x 1 m; q = h A (80 - 20) ≈ 3.2 kW.",
                  "Comment on the regime and on property evaluation at film temperature.",
                ],
              },
              {
                q: "Why are fluid properties evaluated at the film temperature in external flows?",
                marks: 2,
              },
              {
                q: "Distinguish the local and average heat transfer coefficients on a flat plate, and give their ratio for a fully laminar plate.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Forced convection inside tubes",
            body: [
              "Inside a tube the boundary layer cannot grow forever - it fills the duct and the flow becomes fully developed. There, laminar flow yields Nu = 3.66 for constant wall temperature and 4.36 for constant heat flux. Turbulent flow above Re ≈ 10,000 is the industrial workhorse: the Dittus-Boelter correlation Nu = 0.023 Re^0.8 Pr^n with n = 0.4 when the fluid is heated and 0.3 when it is cooled. When properties swing widely between wall and bulk, Sieder-Tate adds a viscosity-ratio correction; the Gnielinski equation covers the awkward transition band with better accuracy.",
              "Non-circular ducts enter the same formulas through the hydraulic diameter D_h = 4A/P_wetted. The code below cools 0.5 kg/s of water from 80 to 50 C in a 25 mm tube whose wall sits at 30 C: the Reynolds number is about 73,000, Pr ≈ 2.3, and Dittus-Boelter with n = 0.3 gives Nu ≈ 227 and h ≈ 5900 W/m2-K - the thousands-scale typical of water. Removing 62.7 kW then needs about 4 m of tube, found from the duty divided by h, perimeter and the LMTD between bulk and wall.",
              "The scaling rule h varies as V^0.8/D^0.2 explains tube-side design. Doubling velocity raises h about 75 percent, and small-bore tubes beat large ones at equal velocity - but pressure drop grows steeply (roughly as V^1.75 in turbulent flow), so pumping power is the price of transfer. Short tubes under about sixty diameters deserve an entry-length correction, and fouling will later add a resistance the clean correlation never saw. When an examiner asks for the tube-flow correlation by name, Dittus-Boelter with its exponent rule is the expected answer.",
            ],
            bullets: [
              "Fully developed laminar: Nu = 3.66 (constant wall temperature) or 4.36 (constant heat flux).",
              "Dittus-Boelter: Nu = 0.023 Re^0.8 Pr^n - n = 0.4 for heating, 0.3 for cooling, Re > 10^4.",
              "Sieder-Tate or Gnielinski when viscosity varies strongly or Re sits near transition.",
              "Hydraulic diameter D_h = 4A/P_wetted brings non-circular ducts into the same formulas.",
              "Scaling: h varies as V^0.8 / D^0.2 - pumping power is the price of velocity.",
            ],
            codeExample: {
              language: "python",
              caption: "Python: water cooled in a tube with Dittus-Boelter, then the required length.",
              code: `import math

# Water cooled in a tube - Dittus-Boelter correlation
mdot = 0.5                # kg/s
D = 0.025                 # m
T_in, T_out = 80.0, 50.0  # deg C water, bulk mean 65 C
k, mu, cp, rho = 0.65, 3.5e-4, 4180.0, 980.0
T_wall = 30.0             # deg C, cooled wall

A_c = math.pi * D**2 / 4
V = mdot / (rho * A_c)
Re = rho * V * D / mu
Pr = mu * cp / k
print(f"Re = {Re:,.0f}   Pr = {Pr:.2f}")

n = 0.3  # fluid is COOLED (use 0.4 if heated)
Nu = 0.023 * Re**0.8 * Pr**n
h = Nu * k / D
print(f"Nu = {Nu:.0f}   h = {h:.0f} W/m2-K")

q = mdot * cp * (T_in - T_out)          # W to remove
dT1, dT2 = T_in - T_wall, T_out - T_wall
LMTD = (dT1 - dT2) / math.log(dT1 / dT2)
L = q / (h * math.pi * D * LMTD)        # required length
print(f"Duty {q/1e3:.1f} kW, LMTD {LMTD:.1f} K")
print(f"Required tube length {L:.2f} m")`,
            },
            diagram: {
              kind: "pipeline",
              title: "Tube-side duty, stage by stage",
              caption:
                "The standard pipeline from bulk properties to required tube length.",
              stages: [
                { label: "Bulk properties", note: "at the mean fluid temperature" },
                { label: "Re = rho V D / mu", note: "use D_h for non-circular ducts" },
                { label: "Pick the correlation", note: "3.66/4.36, Dittus-Boelter, Sieder-Tate or Gnielinski" },
                { label: "Nu to h = Nu k/D", note: "watch the heating/cooling exponent" },
                { label: "q = h A delta T", note: "solve for the required length via LMTD" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Write the exponent rule out loud: 0.4 for a fluid being heated, 0.3 for a fluid being cooled. RGPV numericals almost always cool a hot stream, and quoting n = 0.3 with a one-line justification is a mark in itself.",
            },
            keyTerms: [
              { term: "Bulk temperature", definition: "The mixed-mean fluid temperature at a cross-section; the reference for tube-flow properties." },
              { term: "Hydraulic diameter", definition: "D_h = 4 x flow area / wetted perimeter; the effective diameter that carries non-circular ducts into standard correlations." },
              { term: "Dittus-Boelter correlation", definition: "Nu = 0.023 Re^0.8 Pr^n, the standard turbulent tube-flow correlation for moderate temperature differences." },
            ],
            examQuestions: [
              {
                q: "Water flows at 0.5 kg/s through a 25 mm diameter tube and is cooled from 80 C to 50 C by a wall at 30 C. Using bulk properties k = 0.65 W/m-K, mu = 3.5e-4 Pa-s, c_p = 4180 J/kg-K and rho = 980 kg/m3, estimate h and the required tube length.",
                marks: 7,
                outline: [
                  "Mean bulk temperature 65 C; compute velocity from mass flow and area (about 1.04 m/s).",
                  "Re = rho V D/mu ≈ 7.3 x 10^4 - turbulent.",
                  "The fluid is cooled, so use n = 0.3 in Dittus-Boelter.",
                  "Nu = 0.023 Re^0.8 Pr^0.3 ≈ 227.",
                  "h = Nu k/D ≈ 5900 W/m2-K.",
                  "Duty q = m c_p (80 - 50) ≈ 62.7 kW.",
                  "LMTD between fluid and wall = (50 - 20)/ln(50/20) ≈ 32.7 K; A = q/(h LMTD) ≈ 0.32 m2, so L ≈ 4.1 m.",
                ],
              },
              {
                q: "State the Nusselt numbers for fully developed laminar flow in a circular tube under constant wall temperature and constant heat flux.",
                marks: 2,
              },
              {
                q: "Define the hydraulic diameter and give its value for an annulus with inner radius a and outer radius b.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Natural (free) convection",
            body: [
              "Natural convection needs no pump: density differences drive the flow. A hot vertical wall warms the adjacent air, the air lightens, buoyancy lifts it, and a boundary layer builds from the bottom edge exactly as in forced flow - but the velocity is created by the very temperature difference it transports. The driving potential gathers into the Grashof number Gr = g beta delta T L^3/nu^2; combined with Pr it forms the Rayleigh number Ra = Gr Pr, the single grouping of natural convection. On a vertical plate the layer stays laminar below Ra ≈ 10^9 and turns turbulent above it.",
              "The workhorse form is Nu = C (Gr Pr)^n with C and n read from a small table by geometry and Ra range. For a laminar vertical plate, Nu = 0.59 Ra^0.25, so h grows only as (delta T)^0.25 and falls gently with height (h varies as L^-0.25); once turbulent, Nu ≈ 0.13 Ra^(1/3) and h becomes independent of height. Worked example: a 0.3 m plate at 90 C in 30 C air, film properties at 60 C (k = 0.028 W/m-K, nu = 1.9e-5 m2/s, Pr = 0.71, beta = 1/333 K^-1) gives Gr ≈ 1.3 x 10^8 and Ra ≈ 9 x 10^7 - laminar - so Nu ≈ 58 and h ≈ 5.4 W/m2-K. Those feeble numbers are why still air is an insulator.",
              "Geometry matters: a hot horizontal plate loses more with its hot face upward (the plume escapes freely) than downward (it sits under a stagnant cushion), and enclosed cavities - double glazing, wall air gaps - follow their own correlations because the circulation is trapped between the surfaces. When a fan does move the fluid but Gr/Re^2 is near one, natural and forced effects are comparable and must be combined. Applications are everywhere heat must move silently: transformers, room radiators, electronic enclosures, solar collectors - and the fin spacing of a passive heat sink is fixed by keeping adjacent natural-convection layers from merging.",
            ],
            bullets: [
              "Buoyancy-driven: no external velocity; the delta T itself creates and sustains the flow.",
              "Gr and Ra = Gr Pr replace Re; a vertical plate stays laminar below Ra ≈ 10^9.",
              "Nu = C (Gr Pr)^n with C and n from the geometry table (0.59 and 1/4 for a laminar vertical plate).",
              "Laminar: h varies as (deltaT)^0.25; turbulent: h varies as (deltaT)^(1/3) and independent of height.",
              "Cavities (double glazing) and hot-face-up/down plates need their own constants.",
            ],
            table: {
              caption: "Constants for Nu = C (Gr Pr)^n, common geometries.",
              headers: ["Geometry", "C", "n", "Ra range"],
              rows: [
                ["Vertical plate, laminar", "0.59", "1/4", "10^4 to 10^9"],
                ["Vertical plate, turbulent", "0.13", "1/3", "10^9 to 10^12"],
                ["Horizontal cylinder", "0.53", "1/4", "10^4 to 10^9"],
                ["Horizontal plate, hot face up", "0.54", "1/4", "10^5 to 10^7"],
                ["Horizontal plate, hot face down", "0.27", "1/4", "10^5 to 10^10"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Laminar versus turbulent natural convection",
              caption:
                "Same physics, different exponents - and a different sensitivity to height.",
              left: {
                heading: "Laminar (Ra < 10^9)",
                items: [
                  "Smooth, ordered up-flow along the plate",
                  "Nu = 0.59 Ra^0.25",
                  "h varies as (deltaT)^0.25 and as L^-0.25",
                  "Layer thickens steadily upward",
                ],
              },
              right: {
                heading: "Turbulent (Ra > 10^9)",
                items: [
                  "Erratic plumes, strong mixing",
                  "Nu ≈ 0.13 Ra^(1/3)",
                  "h varies as (deltaT)^(1/3), independent of height",
                  "h jumps at the transition point",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Estimate the heat loss from a hot plate or pipe by natural convection is a recurring 7-mark numerical. The marks live in the setup: correct film temperature, correct C and n from the table, and the correct length (height for plates, diameter for cylinders). The arithmetic is almost an afterthought.",
            },
            keyTerms: [
              { term: "Buoyancy force", definition: "The net upward force on lighter fluid in a gravity field; the driver of natural convection." },
              { term: "Rayleigh number", definition: "Ra = Gr x Pr; above about 10^9 on a vertical plate the natural-convection layer turns turbulent." },
              { term: "Combined convection", definition: "The regime where buoyancy and pump-driven inertia both matter, roughly when Gr/Re^2 ≈ 1." },
            ],
            examQuestions: [
              {
                q: "A vertical plate 0.3 m high at 90 C stands in still air at 30 C. Using film properties at 60 C (k = 0.028 W/m-K, nu = 1.9e-5 m2/s, Pr = 0.71, beta = 1/333 1/K), estimate the natural-convection heat transfer coefficient and the heat loss per square metre.",
                marks: 7,
                outline: [
                  "Compute Gr = g beta deltaT L^3/nu^2 with delta T = 60 K.",
                  "Gr ≈ 1.3 x 10^8; Ra = Gr Pr ≈ 9 x 10^7 - laminar.",
                  "Select C = 0.59 and n = 1/4 from the table.",
                  "Nu = 0.59 Ra^0.25 ≈ 58.",
                  "h = Nu k/L ≈ 5.4 W/m2-K.",
                  "q/A = h delta T ≈ 325 W/m2.",
                  "Comment: laminar, so h rises only as (deltaT)^0.25.",
                ],
              },
              {
                q: "Why does a hot horizontal plate transfer more heat with its hot face upward than downward?",
                marks: 3,
              },
              {
                q: "When must natural convection be considered alongside forced convection in a flowing stream?",
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
      title: "Boiling, Condensation and Heat Exchangers",
      summary:
        "Phase change at both ends of the thermal chain: the pool-boiling curve with its critical heat flux, Nusselt's film-condensation theory, and the two heat-exchanger design methods - LMTD for sizing and effectiveness-NTU for rating - with selection practice and fouling allowances.",
      chapter: {
        number: "03",
        title: "Boiling, condensation and heat exchangers",
        intro:
          "Unit III is where heat transfer earns its keep in industry: the boiling curve and its burnout point, dropwise versus film condensation with the Nusselt theory that sizes condensers, and the heat exchangers that marry two fluids - their hardware families, the LMTD method for design when terminal temperatures are known, and the NTU-effectiveness method for rating when they are not.",
        inOneBreath:
          "Pool boiling walks from natural convection through nucleate boiling to burnout at the critical heat flux and finally an insulating film; condensation drapes cold surfaces in a liquid film whose conduction Nusselt theory predicts; heat exchangers obey q = U A F LMTD when all four terminal temperatures are known and fall back on the effectiveness-NTU relations when they are not; and hardware choice follows duty, pressure, temperature approach and cleanability, with fouling margins built into U.",
        sections: [
          {
            number: "3.1",
            title: "Pool boiling regimes",
            body: [
              "Boiling is convection with a phase change at a solid surface: vapour bubbles nucleate, grow, detach and carry latent heat away. In pool boiling the liquid is otherwise still and the only driving variable is the wall excess temperature delta T_e = T_wall - T_sat. The boiling curve - heat flux (or h) plotted against delta T_e - walks through four regimes. Up to about 5 C excess the liquid merely circulates by natural convection, without bubbles. From 5 to about 30 C comes nucleate boiling: bubbles form at surface cavities, stir the thermal layer violently, and h climbs into the tens of thousands of W/m2-K.",
              "The nucleate peak is the critical heat flux, roughly 1 MW/m2 for water at atmospheric pressure (Zuber's analysis predicts it). Push delta T_e beyond it and the game reverses: transition boiling alternates wetting and vapour blanketing so h falls, and above roughly 120 C excess a stable vapour film wraps the heater. Vapour is a poor conductor, so the surface temperature runs away to levels that melt heater wires - the burnout that destroyed many an early kettle element and, on the scale of nuclear fuel, sets the safety limit on reactor power.",
              "Rohsenow's correlation predicts nucleate boiling from a fluid-surface combination constant and fluid properties, while film boiling is treated as conduction across a vapour film plus radiation through it. Applications read straight off the curve: kettle reboilers and evaporators run just below CHF for maximum h; quench baths control delta T_e to ride the nucleate regime during hardening; spray cooling of electronics exploits the same peaks; and the Leidenfrost dance of water drops on a red-hot pan is film boiling made visible. Every exam answer should include the labelled curve with all four regimes and CHF marked.",
            ],
            bullets: [
              "Pool boiling: liquid heated below a surface with no bulk flow; delta T_e = Twall - Tsat drives everything.",
              "Four regimes - natural convection, nucleate, transition, film - with CHF at the nucleate peak.",
              "Nucleate boiling delivers the highest coefficients commonly met (up to 10^4-10^5 W/m2-K for water).",
              "CHF ≈ 1 MW/m2 for water at 1 atm: beyond it h collapses - the burnout point.",
              "Leidenfrost effect: film boiling lets droplets skitter on a pan far above Tsat.",
            ],
            table: {
              caption: "Pool boiling of water at 1 atm (representative values).",
              headers: ["Regime", "delta T_e (C)", "h (W/m2-K)", "Character"],
              rows: [
                ["Natural convection", "0-5", "≈ 100-1000", "no bubbles, gentle circulation"],
                ["Nucleate", "5-30", "5000 to ≈ 50,000", "bubbles stir the layer - the design regime"],
                ["Transition", "30-120", "falls toward 2000", "unstable wetting and vapour patches"],
                ["Film", "> 120", "≈ 300-1200 plus radiation", "vapour blanket insulates the heater"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Walking the boiling curve",
              caption:
                "Read left to right as the wall superheat rises; mark CHF before writing anything else.",
              steps: [
                { label: "delta Te 0-5 C: natural convection", note: "no vapour; Nu = C Ra^n applies" },
                { label: "5-30 C: nucleate boiling", note: "h climbs steeply - the designer's regime" },
                { label: "≈ 30 C: critical heat flux", note: "the peak - the burnout boundary" },
                { label: "30-120 C: transition", note: "vapour patches; h falls" },
                { label: "> 120 C: film boiling", note: "stable vapour jacket; radiation joins in" },
              ],
            },
            callout: {
              type: "warning",
              title: "Burnout is counterintuitive",
              body: "Increasing the wall superheat beyond CHF lowers h and can melt the heater. Explain it as a vapour blanket, not a mystery: the boiling-curve sketch with all four regimes labelled is worth half the marks on its own.",
            },
            keyTerms: [
              { term: "Pool boiling", definition: "Boiling in an otherwise quiescent liquid, with wall excess temperature as the only driving variable." },
              { term: "Critical heat flux", definition: "The peak heat flux of nucleate boiling (≈ 1 MW/m2 for water at 1 atm); beyond it transition boiling and possible burnout begin." },
              { term: "Excess temperature", definition: "delta T_e = T_wall - T_sat, the abscissa of the boiling curve." },
            ],
            examQuestions: [
              {
                q: "Describe the regimes of pool boiling with a labelled boiling curve, and explain why operation beyond the critical heat flux is dangerous.",
                marks: 7,
                outline: [
                  "Define pool boiling and excess temperature.",
                  "Sketch heat flux (or h) versus delta T_e with four regimes.",
                  "Natural convection (0-5 C): no bubbles, coefficients from Nu-C Ra correlations.",
                  "Nucleate (5-30 C): bubble nucleation at cavities, h up to 10^4-10^5 W/m2-K.",
                  "CHF peak ≈ 1 MW/m2 for water at 1 atm (Zuber prediction).",
                  "Transition and film boiling: vapour blanketing lowers h and wall temperature runs away - burnout.",
                  "Applications: reboilers just below CHF; quench control; nuclear safety limits.",
                ],
              },
              {
                q: "Why is nucleate boiling the preferred operating regime for thermal equipment?",
                marks: 3,
              },
              {
                q: "What is the Leidenfrost effect?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Condensation and the Nusselt film theory",
            body: [
              "Condensation is boiling run backwards: vapour touching a surface below T_sat releases its latent heat and turns to liquid. Dropwise condensation - droplets nucleate, grow, roll off and expose fresh surface - transfers heat superbly (h up to 40,000-100,000 W/m2-K for steam) but needs promoter coatings that poison or wear quickly, so plants cannot rely on it. Film condensation, the default, blankets the surface with a continuous liquid sheet that drains under gravity. The film is the resistance, and condenser design is film-conduction design.",
              "Nusselt's 1916 theory idealises the film: laminar flow, a linear temperature profile across it, saturated vapour at the interface with no shear, and constant properties. The result for a vertical plate of height L is the average coefficient h = 0.943 [rho_l g (rho_l - rho_v) h_fg k^3 / (mu L (T_sat - T_w))]^(1/4). The film thickens downward like a boundary layer, so h falls with height. A film Reynolds number Re_f = 4 m''/mu (m'' the drainage flow per unit width) marks the transition to turbulence near 1800, after which ripples and mixing raise h again.",
              "Horizontal tubes beat vertical ones: the drainage path is a circumference rather than a height, the film stays thin, and h varies as D^(-1/4). Condensers therefore lay their tubes horizontally; in a vertical bank, condensate from the tube above rains onto the one below, thickening its film and shaving h tier by tier (roughly as N^(-1/6) down a column of N tubes). Enhancement tricks such as grooved surfaces that sweep condensate aside by surface tension buy further multiples. Examiners want the assumptions listed before the formula - they carry marks of their own.",
            ],
            bullets: [
              "Dropwise h is 5-10 times film h but is unsustainable; design rests on film condensation.",
              "Nusselt assumptions: laminar film, linear temperature profile, saturated vapour, no interfacial shear, constant properties.",
              "Vertical plate: h_avg = 0.943 [rho g (rho_l - rho_v) h_fg k^3/(mu L deltaT)]^(1/4).",
              "Film Reynolds Re_f = 4 m''/mu; turbulence beyond about 1800 improves h.",
              "Horizontal tubes: h varies as D^(-1/4); tube banks lose h roughly as N^(-1/6) down a column.",
            ],
            table: {
              caption: "Film versus dropwise condensation (steam near 1 atm).",
              headers: ["Aspect", "Film", "Dropwise"],
              rows: [
                ["Form", "continuous liquid sheet", "discrete droplets that coalesce and roll"],
                ["Typical h (W/m2-K)", "5000-15,000", "40,000-100,000"],
                ["Occurrence", "the default on clean surfaces", "needs promoters; short-lived"],
                ["Design basis", "yes - Nusselt theory", "no; treated as an uncertain bonus"],
                ["Resistance", "conduction across the film", "tiny droplet conduction paths"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a condensing film on a vertical plate",
              caption:
                "The film thickens downward; every bit of latent heat passes by conduction through it.",
              layers: [
                { label: "Saturated vapour", note: "at T_sat, supplying latent heat" },
                { label: "Vapour-liquid interface", note: "no shear (Nusselt assumption)" },
                { label: "Condensate film", note: "grows with x; conduction across, drainage down" },
                { label: "Cold wall", note: "at T_w below Tsat" },
                { label: "Coolant inside", note: "removes the latent heat" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "List the Nusselt assumptions before quoting h_avg: laminar film, linear profile, saturated vapour, zero interfacial shear, constant properties. The assumptions are separately marked; the formula alone earns half the question.",
            },
            keyTerms: [
              { term: "Film condensation", definition: "Condensation forming a continuous liquid film that drains under gravity; the design basis for condensers." },
              { term: "Dropwise condensation", definition: "Condensation as discrete droplets on a non-wettable surface, giving much higher h but hard to sustain." },
              { term: "Film Reynolds number", definition: "Re_f = 4 m''/mu based on drainage flow per unit width; transition to turbulence near 1800." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of Nusselt's theory of laminar film condensation on a vertical plate and give the resulting average coefficient, explaining each symbol.",
                marks: 7,
                outline: [
                  "Define film condensation and the film as the resistance.",
                  "Assumption 1: laminar, gravity-driven film.",
                  "Assumption 2: linear temperature profile across the film.",
                  "Assumption 3: saturated vapour at the interface with zero shear.",
                  "Assumption 4: constant properties; subcooling and vapour inertia neglected.",
                  "Result: h_avg = 0.943 [rho g (rho_l - rho_v) h_fg k^3/(mu L delta T)]^(1/4) - define every symbol.",
                  "State the film Reynolds number and the turbulent modification beyond 1800.",
                ],
              },
              {
                q: "Why are condenser tubes mounted horizontally rather than vertically?",
                marks: 3,
              },
              {
                q: "Why is dropwise condensation not used as the design basis for condensers?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Heat exchangers and the LMTD method",
            body: [
              "A heat exchanger moves heat from one fluid to another across a wall. The families: shell-and-tube for pressure and dirty service, gasketed plate packs for close approaches, compact finned cores for gases, double pipe for small duties. Flow arrangement matters as much as hardware. In parallel flow both streams enter together and their outlet temperatures converge; in counterflow they oppose each other and the driving force stays healthier along the length - counterflow always achieves a higher LMTD for the same terminal temperatures and can even cross the temperatures, cooling the hot stream below the cold outlet.",
              "Because the temperature difference varies along the exchanger, the design equation uses the log mean temperature difference: LMTD = (delta T1 - delta T2)/ln(delta T1/delta T2), with delta T1 and delta T2 the differences at the two ends. Then q = U A F LMTD, where U assembles all resistances - both films, the wall and fouling - and F (never above 1) corrects for crossflow and multipass layouts, read from charts. If the two end differences happen to be equal, the LMTD collapses to that common value - a favourite trick question.",
              "The code below sizes a counterflow oil cooler: oil 120 to 70 C, water 35 to 55 C, U = 340 W/m2-K (clean), duty 42 kW, F = 0.92 for a one-shell-pass layout. The end differences pair to 65 K and 35 K, LMTD ≈ 48.4 K, and the area comes to about 2.8 m2. Pair the ends correctly - in counterflow the differences are taken at opposite ends - or the LMTD comes out wrong and the whole design follows it. When outlet temperatures are unknown, switch to the NTU method of the next section.",
            ],
            bullets: [
              "Parallel flow: outlets converge; counterflow: healthier driving force, can cross temperatures.",
              "LMTD = (dT1 - dT2)/ln(dT1/dT2), the true average driving force along the exchanger.",
              "Design equation q = U A F LMTD; F ≤ 1 from charts for crossflow and multipass.",
              "U combines both films, the wall and fouling: 1/(U A) is the sum of resistances.",
              "LMTD method: use when all four terminal temperatures are known (design or sizing).",
            ],
            codeExample: {
              language: "python",
              caption: "Python: sizing a counterflow oil cooler by LMTD.",
              code: `import math

# Sizing a counterflow oil cooler by LMTD
T_h_in, T_h_out = 120.0, 70.0    # hot oil, deg C
T_c_in, T_c_out = 35.0, 55.0     # cooling water, deg C
U = 340.0                        # W/m2-K, clean
q_duty = 42.0e3                  # W
F = 0.92                         # one shell pass correction

# Counterflow: pair the differences at OPPOSITE ends
dT1 = T_h_in - T_c_out           # 65 K
dT2 = T_h_out - T_c_in           # 35 K
LMTD = (dT1 - dT2) / math.log(dT1 / dT2)

A = q_duty / (U * F * LMTD)
print(f"dT1 = {dT1:.0f} K, dT2 = {dT2:.0f} K")
print(f"Counterflow LMTD = {LMTD:.1f} K")
print(f"Area required = {A:.2f} m2")

# Parallel flow, for contrast (pair at the SAME ends)
dp1 = T_h_in - T_c_in            # 85 K
dp2 = T_h_out - T_c_out          # 15 K
LMTD_p = (dp1 - dp2) / math.log(dp1 / dp2)
print(f"Parallel-flow LMTD = {LMTD_p:.1f} K")`,
            },
            diagram: {
              kind: "pipeline",
              title: "Sizing an exchanger with LMTD",
              caption:
                "Five stages from terminal temperatures to surface area - the standard design pipeline.",
              stages: [
                { label: "Fix terminal temperatures", note: "all four, from duty and heat balances" },
                { label: "Pair the end differences", note: "counterflow pairs opposite ends" },
                { label: "LMTD = (dT1 - dT2)/ln(dT1/dT2)", note: "check the equal-differences case" },
                { label: "Assemble U", note: "both films + wall + fouling" },
                { label: "A = q/(U F LMTD)", note: "F from the arrangement chart" },
              ],
            },
            callout: {
              type: "warning",
              title: "Pair the ends correctly",
              body: "The top LMTD error is pairing the wrong ends in counterflow. Draw the temperature-position sketch and label dT1 and dT2 at the two ends before touching the logarithm - the sketch is quick insurance against losing every subsequent mark.",
            },
            keyTerms: [
              { term: "LMTD", definition: "The logarithmic mean of the end temperature differences; the effective driving force substituted in q = U A LMTD." },
              { term: "Fouling factor", definition: "An added thermal resistance (m2-K/W) representing deposits; it keeps U realistic between cleanings." },
              { term: "Correction factor F", definition: "A multiplier (≤ 1) applied to the counterflow LMTD for crossflow and multipass arrangements, read from charts." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for the log mean temperature difference in a counterflow heat exchanger, and size one: oil cooled 120 to 70 C by water heated 35 to 55 C, duty 42 kW, U = 340 W/m2-K.",
                marks: 7,
                outline: [
                  "Sketch both temperature profiles along the exchanger.",
                  "Define dT1 and dT2 at the two ends (counterflow: opposite ends).",
                  "Integrate q = U dA dT along the exchanger to obtain q = U A LMTD.",
                  "LMTD = (dT1 - dT2)/ln(dT1/dT2) = (65 - 35)/ln(65/35) ≈ 48.4 K.",
                  "A = q/(U LMTD) = 42000/(340 x 48.4) ≈ 2.6 m2 before any F correction.",
                  "Mention F < 1 for multipass or crossflow arrangements (≈ 0.9 typical).",
                  "Comment on why counterflow beats parallel flow for the same terminals.",
                ],
              },
              {
                q: "Show that the LMTD reduces to the arithmetic difference when both end differences are equal.",
                marks: 3,
              },
              {
                q: "Why can a counterflow exchanger cool the hot outlet below the cold outlet temperature?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "The NTU-effectiveness method",
            body: [
              "Design (sizing) knows all four terminal temperatures; rating a built exchanger does not - the outlets must be found. The effectiveness method handles rating. Effectiveness epsilon is the actual duty over the maximum possible duty, where q_max = C_min (T_h,in - T_c,in) and C = m c_p is each stream's capacity rate; the stream with the smaller C - call it C_min - limits the exchange. Two new groups organise the problem: NTU = U A/C_min, a measure of the exchanger's dimensionless size, and the capacity ratio C_r = C_min/C_max.",
              "For counterflow, epsilon = (1 - exp[-NTU(1 - C_r)])/(1 - C_r exp[-NTU(1 - C_r)]); for parallel flow, epsilon = (1 - exp[-NTU(1 + C_r)])/(1 + C_r). Two limits are worth memorising: a condenser or boiler has C_r = 0 and epsilon = 1 - exp(-NTU), while equal capacity rates in counterflow give epsilon = NTU/(1 + NTU), which approaches but never reaches 1 - and parallel flow with C_r = 1 can never exceed 0.5. Charts plot epsilon against NTU for each arrangement with C_r as the running parameter.",
              "The code below rates a counterflow exchanger: C_h = 4200 and C_c = 6000 W/K, U A = 3840 W/K, inlets 150 and 30 C. NTU comes to 0.91 with C_r = 0.70, giving epsilon ≈ 0.51, a duty of about 258 kW, and outlets near 88.5 and 73 C. Beyond NTU ≈ 3 the curves flatten - added area buys almost nothing, the classic economic lesson of exchanger design. The rule: LMTD when the outlets are known, NTU when they are not; both describe exactly the same physics.",
            ],
            bullets: [
              "epsilon = q_actual / (C_min (Th,in - Tc,in)): actual over maximum possible duty.",
              "NTU = U A/C_min is the dimensionless exchanger size; C_r = C_min/C_max.",
              "Counterflow and parallel-flow epsilon relations differ; parallel never beats 1/(1 + C_r).",
              "Special cases: C_r = 0 gives 1 - exp(-NTU); C_r = 1 counterflow gives NTU/(1 + NTU).",
              "Curves flatten past NTU ≈ 3: more area, almost no gain.",
            ],
            codeExample: {
              language: "python",
              caption: "Python: rating a counterflow exchanger with the NTU method.",
              code: `import math

# Rating a counterflow exchanger - NTU method
C_h = 4200.0   # W/K hot stream
C_c = 6000.0   # W/K cold stream
U, A = 320.0, 12.0
T_h_in, T_c_in = 150.0, 30.0   # deg C

C_min, C_max = min(C_h, C_c), max(C_h, C_c)
C_r = C_min / C_max
NTU = U * A / C_min
print(f"C_r = {C_r:.2f}   NTU = {NTU:.2f}")

eff = (1 - math.exp(-NTU * (1 - C_r))) / (
    1 - C_r * math.exp(-NTU * (1 - C_r)))
print(f"Effectiveness = {eff:.3f}")

q = eff * C_min * (T_h_in - T_c_in)
T_h_out = T_h_in - q / C_h
T_c_out = T_c_in + q / C_c
print(f"Duty = {q/1e3:.1f} kW")
print(f"Hot out {T_h_out:.1f} C, cold out {T_c_out:.1f} C")`,
            },
            diagram: {
              kind: "flow",
              title: "Rating an exchanger with NTU",
              caption:
                "Five moves from capacity rates to outlet temperatures - no outlet data needed.",
              steps: [
                { label: "Compute C_h and C_c; pick C_min and C_r", note: "C = m c_p for each stream" },
                { label: "NTU = U A/C_min", note: "the exchanger's dimensionless size" },
                { label: "Pick the epsilon-NTU relation for the arrangement", note: "counter, parallel, cross or shell-pass" },
                { label: "q = epsilon C_min (Th,in - Tc,in)", note: "duty without knowing the outlets" },
                { label: "Outlets from energy balances", note: "Th,out = Th,in - q/C_h; Tc,out = Tc,in + q/C_c" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Identify C_min before anything else - it sets both q_max and NTU. Then name the flow arrangement: the epsilon-NTU relations differ for parallel, counter and crossflow, and quoting the wrong one voids the numerical however tidy the algebra.",
            },
            keyTerms: [
              { term: "Effectiveness", definition: "The ratio of actual duty to the maximum possible duty C_min (Th,in - Tc,in)." },
              { term: "NTU", definition: "Number of transfer units, U A/C_min; the dimensionless size of an exchanger." },
              { term: "Capacity ratio", definition: "C_min/C_max; zero for a phase-change stream and 1 for equal capacity rates." },
            ],
            examQuestions: [
              {
                q: "Define effectiveness and NTU for a heat exchanger, give the epsilon-NTU relation for counterflow, and rate an exchanger with C_h = 4200 W/K, C_c = 6000 W/K, U A = 3840 W/K, hot inlet 150 C and cold inlet 30 C.",
                marks: 7,
                outline: [
                  "Define C = m c_p; C_min = 4200 and C_max = 6000 W/K, so C_r = 0.7.",
                  "NTU = U A/C_min ≈ 0.91.",
                  "Write epsilon = (1 - exp[-NTU(1-Cr)])/(1 - Cr exp[-NTU(1-Cr)]).",
                  "Substitute to get epsilon ≈ 0.51.",
                  "q_max = C_min x 120 = 504 kW; q = epsilon q_max ≈ 258 kW.",
                  "Outlets: Th,out ≈ 88.5 C and Tc,out ≈ 73 C.",
                  "Note the NTU ≈ 3 flattening as the economic limit of added area.",
                ],
              },
              {
                q: "What is the maximum possible effectiveness of a parallel-flow exchanger with C_r = 1, and why?",
                marks: 3,
              },
              {
                q: "When is the NTU method preferred over the LMTD method?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Heat exchanger selection, fouling and design practice",
            body: [
              "Choosing hardware is a matching exercise. High pressure, dirty fluids or big duty point to shell-and-tube with a removable bundle; two liquids wanting a close temperature approach and easy cleaning point to a gasketed plate pack; a gas stream - with its feeble h of 50-100 W/m2-K - points to a compact finned core that puts area exactly where the resistance is; a small high-pressure duty may need nothing more than a double-pipe unit. Materials follow the fluids: stainless steel for chemicals, titanium for seawater, copper alloys for fresh water.",
              "Fouling - sediment, scale, biological growth, corrosion products - coats surfaces between cleanings. Design adds a fouling factor (a resistance in m2-K/W, per stream) to the U calculation, which is why a real U is often half the clean value, and oversurfacing of 10-30 percent buys run time. Velocity is the double-edged sword: higher velocity raises h and scrubs deposits away but multiplies pumping power steeply and risks erosion, so liquid velocities between 1 and 2.5 m/s are common practice on both sides of the compromise.",
              "Detail decisions carry exam marks too. Baffles set the shell-side velocity and support the tubes - their spacing and cut are genuine design variables. Tube pitch and the number of passes tune velocity on each side; a temperature cross warns you to switch to counterflow or add passes; and the economic optimum trades capital (area) against running cost (pumping), usually landing where the pressure drop hits the allowed budget. A selection answer that names the duty, the fluids, the arrangement and one justification per choice reads like a professional memorandum - and scores like one.",
            ],
            bullets: [
              "Match hardware to duty: shell-and-tube (pressure, dirty), plate (close approach), compact (gases), double pipe (small duty).",
              "Fouling factors add resistance between cleanings; expect the real U well below the clean U.",
              "Oversurface of 10-30 percent buys run length before the next cleaning.",
              "Velocity trade: high V raises h and limits foubling but costs pumping power and erosion.",
              "Baffles control shell-side velocity and support the tube bundle; spacing is a design variable.",
            ],
            table: {
              caption: "Heat exchanger families at a glance.",
              headers: ["Type", "Best for", "Typical clean U (W/m2-K)", "Watch-outs"],
              rows: [
                ["Shell-and-tube", "high pressure, dirty service, large duty", "300-1000", "bypass leakage, big footprint"],
                ["Gasketed plate", "liquid-liquid, close approach, cleaning", "2000-5000", "gasket temperature and pressure limits"],
                ["Compact finned core", "gas streams", "100-400", "fin efficiency, fin fouling"],
                ["Double pipe", "small duty, high pressure", "300-1200", "many units in parallel for large duty"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing an exchanger for the duty",
              caption:
                "Four service situations and the hardware each one demands - with the classic wrong turn marked.",
              start: "The duty is on the table. Which hardware?",
              branches: [
                { label: "Gas on one side (h ≈ 50-100)", outcome: "Compact finned core: extend area on the gas side", good: true },
                { label: "Gas side handled with plain bare tubes", outcome: "Area demand explodes - cost and size follow it", good: false },
                { label: "Two liquids, close approach", outcome: "Gasketed plate pack: high U, opens for cleaning", good: true },
                { label: "High pressure or fouling service", outcome: "Shell-and-tube with a removable bundle", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Selection answers are checklists",
              body: "Selection questions are marked point by point: name the exchanger type, give one hardware reason (pressure, approach, cleanability, h-ratio between sides), and mention the fouling allowance. Four crisp justifications beat a page of prose.",
            },
            keyTerms: [
              { term: "Fouling factor", definition: "An added thermal resistance representing deposits, in m2-K/W, included in the U chain between cleanings." },
              { term: "Oversurfacing", definition: "Extra area, typically 10-30 percent above the clean-duty requirement, to cover fouling growth." },
              { term: "Temperature cross", definition: "A risky state where the cold outlet would exceed the hot outlet; it signals the need for counterflow or more passes." },
            ],
            examQuestions: [
              {
                q: "Compare shell-and-tube, plate and compact heat exchangers for construction, service and performance, and explain how fouling is allowed for in design.",
                marks: 7,
                outline: [
                  "Shell-and-tube: tube bundle in a shell; high pressure and dirty service; U ≈ 300-1000 W/m2-K.",
                  "Plate: corrugated plates with gaskets; close approach; U ≈ 2000-5000; limited T and P.",
                  "Compact: finned cores; ideal for gas streams; fin efficiency matters.",
                  "Selection criteria list: pressure, temperature, approach, cleanability, cost.",
                  "Fouling types: scaling, sedimentation, biological, corrosion products.",
                  "Design allowance: fouling resistances in the U chain; oversurface 10-30 percent.",
                  "Velocity compromise: fouling suppression against pumping power and erosion.",
                ],
              },
              {
                q: "Name four types of fouling with one example each.",
                marks: 2,
              },
              {
                q: "Why are baffles fitted in shell-and-tube heat exchangers?",
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
      title: "Radiation",
      summary:
        "The mode that needs no medium: blackbody laws and their constants, the geometry of view factors, exchange between black and gray surfaces through the radiation network, and the shields that tame high-temperature exchange.",
      chapter: {
        number: "04",
        title: "Radiation: laws, geometry and networks",
        intro:
          "Unit IV handles electromagnetic heat transfer: the blackbody benchmark with Planck, Wien and Stefan-Boltzmann laws, view factors and their algebra, net exchange between black surfaces, the gray-surface radiation network built from surface and space resistances, and radiation shields from thermocouple wells to spacecraft sunshields.",
        inOneBreath:
          "Every surface emits at sigma T^4 with its peak wavelength fixed by Wien's law; view factors route the emission between surfaces; black surfaces exchange q = A F sigma (T1^4 - T2^4); gray surfaces add radiosity and the resistances (1 - e)/(eA) and 1/(A F) into a solvable network; and each low-emissivity shield inserted between two surfaces cuts the exchange toward q divided by (n + 1).",
        sections: [
          {
            number: "4.1",
            title: "Blackbody radiation: Planck, Wien and Stefan-Boltzmann",
            body: [
              "Every surface above absolute zero emits electromagnetic energy, and the slice that matters thermally runs from about 0.1 to 100 micrometres. A blackbody is the perfect benchmark: it absorbs all incident radiation and, at a given temperature, emits the maximum possible at every wavelength. The idea is no fantasy - a cavity with a small hole traps almost every ray that enters it, and the radiation leaking back out has the ideal spectrum. Furnace interiors and instrument calibration sources are built exactly this way.",
              "Three laws organise the emission. Planck's law gives the spectral distribution - emissive power per unit wavelength - with a steep short-wavelength cutoff and a long-wavelength tail. Wien's displacement law locates the peak: lambda_max T = 2898 micrometre-K, so the sun (≈ 5800 K) peaks near 0.5 micrometres in the visible, while a furnace at 1500 K peaks near 1.9 micrometres in the infrared. Integrating Planck's spectrum over all wavelengths yields the Stefan-Boltzmann law: E_b = sigma T^4 with sigma = 5.67 x 10^-8 W/m2-K4 - a 1500 K blackbody emits about 287 kW/m2.",
              "Kirchhoff's law closes the loop: at thermal equilibrium a surface's emissivity equals its absorptivity, so good absorbers are good emitters. Real surfaces are graded by emissivity e between 0 and 1, and those with e roughly constant across wavelengths are treated as gray. Selective coatings exploit the wavelength split - solar collectors absorb short-wave sunlight strongly (e ≈ 0.95) while emitting weakly in their own infrared (e ≈ 0.1), so they stay hot. Applications: thermography, lamp filaments at 2800 K peaking in the near-infrared (hence their poor lighting efficiency), and radiation pyrometers reading temperature from afar.",
            ],
            bullets: [
              "Thermal radiation spans roughly 0.1-100 micrometres; it crosses vacuum at the speed of light.",
              "Blackbody: perfect absorber and maximum emitter; approximated by a cavity with a small hole.",
              "Wien: lambda_max T = 2898 micrometre-K - hotter bodies peak at shorter wavelengths.",
              "Stefan-Boltzmann: E_b = sigma T^4, sigma = 5.67e-8 W/m2-K4; T must be in kelvin.",
              "Kirchhoff: emissivity equals absorptivity at equilibrium; selective coatings beat both directions.",
            ],
            table: {
              caption: "The four blackbody laws.",
              headers: ["Law", "Statement", "Use"],
              rows: [
                ["Planck", "spectral emissive power E_b(lambda) = C1/lambda^5 / (exp(C2/(lambda T)) - 1)", "spectral distribution at a temperature"],
                ["Wien", "lambda_max T = 2898 micrometre-K", "peak wavelength; colour of hot bodies"],
                ["Stefan-Boltzmann", "E_b = sigma T^4, sigma = 5.67e-8 W/m2-K4", "total emission; net exchange"],
                ["Kirchhoff", "epsilon = alpha at thermal equilibrium", "links absorption and emission for real surfaces"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Three laws, one spectrum",
              caption:
                "Planck describes the curve, Wien finds its peak, Stefan-Boltzmann integrates it - and Kirchhoff connects it to real surfaces.",
              stages: [
                { label: "Planck's law", note: "energy versus wavelength at a given T" },
                { label: "Wien's law", note: "where the curve peaks" },
                { label: "Stefan-Boltzmann", note: "area under the curve: E_b = sigma T^4" },
                { label: "Kirchhoff", note: "real surfaces: epsilon = alpha" },
              ],
            },
            callout: {
              type: "warning",
              title: "Kelvin or nothing",
              body: "Substituting Celsius into T^4 is the most committed radiation error in the book. Convert first, then raise to the fourth power - and quote sigma = 5.67 x 10^-8 W/m2-K4 with its units to earn the constant's mark.",
            },
            keyTerms: [
              { term: "Blackbody", definition: "An ideal surface that absorbs all incident radiation and emits the maximum possible at each wavelength and temperature." },
              { term: "Stefan-Boltzmann law", definition: "Total blackbody emission E_b = sigma T^4, with sigma = 5.67 x 10^-8 W/m2-K4." },
              { term: "Wien's displacement law", definition: "The peak wavelength varies inversely with temperature: lambda_max T = 2898 micrometre-K." },
            ],
            examQuestions: [
              {
                q: "State Planck's, Wien's and Stefan-Boltzmann's laws of radiation, explain their interrelation, and compute the total emissive power and peak wavelength of a blackbody at 1500 K.",
                marks: 7,
                outline: [
                  "State Planck's law: the spectral distribution of blackbody emission.",
                  "Wien: lambda_max = 2898/1500 ≈ 1.93 micrometres, in the infrared.",
                  "Stefan-Boltzmann: E_b = sigma T^4.",
                  "Compute T^4 = 5.06 x 10^12 K4.",
                  "E_b = 5.67e-8 x 5.06e12 ≈ 287,000 W/m2.",
                  "Note that integrating Planck gives Stefan-Boltzmann and differentiating gives Wien.",
                  "Mention Kirchhoff for real surfaces to close the answer.",
                ],
              },
              {
                q: "Why does a cavity with a small hole behave like a blackbody?",
                marks: 3,
              },
              {
                q: "The human body at about 306 K emits at what peak wavelength?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "View factors and radiation geometry",
            body: [
              "How much of the radiation leaving surface 1 lands directly on surface 2? The view factor F_12 answers: the fraction of diffuse radiation from 1 that is intercepted by 2. It is pure geometry - no temperatures, no surface properties enter it. Two theorems do most of the work. Reciprocity: A1 F_12 = A2 F_21, always. Summation: inside an enclosure, the fractions leaving any surface must add to one; and a flat or convex surface sees nothing of itself (F_11 = 0), while a concave one does see itself.",
              "Standard charts tabulate the classics: directly opposed rectangles, perpendicular rectangles sharing an edge, and coaxial parallel disks. Everything else is built by algebra. Superposition splits a target: the radiation from 1 to a composite surface (2+3) is the sum of 1-to-2 and 1-to-3 - applied together with reciprocity, this solves the unknown factors of an enclosure. Worked example: a small flat disk under a hemispherical dome sees the dome with F = 1 (it sees nothing else); a person in a large room approximates a small convex body in a big enclosure, so F toward the room is effectively 1.",
              "The crossed-string method handles pairs of very long parallel surfaces: the factors come from the lengths of the diagonal and side 'strings' stretched between the end points. Precision matters in furnace work, in radiation pyrometry (a sensor sees part wall and part flame) and in solar collector layouts. Exam questions rarely need integration: they need the two theorems plus one chart value. Write the reciprocity equation for every surface pair and the summation for each surface, count equations against unknowns, and solve - a small linear system, every time.",
            ],
            bullets: [
              "View factor F_12: the fraction of diffuse radiation leaving 1 that strikes 2 directly - geometry only.",
              "Reciprocity: A1 F_12 = A2 F_21, always.",
              "Summation: in an enclosure the F_1j add to 1; F_11 = 0 for flat or convex surfaces.",
              "Decomposition: F_1(2+3) = F_12 + F_13, then reciprocity to finish the system.",
              "Charts for opposed/perpendicular rectangles and coaxial disks; crossed strings for long parallel surfaces.",
            ],
            table: {
              caption: "View factor relations with instant uses.",
              headers: ["Relation", "Statement", "Typical use"],
              rows: [
                ["Reciprocity", "A1 F12 = A2 F21", "flip known factors to unknown ones"],
                ["Summation", "sum of F1j = 1 in an enclosure", "find the last unknown factor"],
                ["Self-view", "F11 = 0 flat/convex, > 0 concave", "concave cavities see themselves"],
                ["Decomposition", "F1(2+3) = F12 + F13", "split targets to match chart cases"],
                ["Small in large", "F12 ≈ 1 for a small body in a big room", "object losing heat to its surroundings"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "View factor algebra on an enclosure",
              caption:
                "The recipe: list, sum, reciprocate, look up, solve - never integrate in an exam.",
              steps: [
                { label: "List every surface in the enclosure", note: "including reradiating walls" },
                { label: "Write summation for each surface", note: "the F_ij along each row add to 1" },
                { label: "Write reciprocity for each pair", note: "Ai F_ij = Aj F_ji" },
                { label: "Pull chart values for standard pairs", note: "rectangles, disks" },
                { label: "Solve the small linear system", note: "unknowns balance equations" },
              ],
            },
            callout: {
              type: "warning",
              title: "Concave surfaces see themselves",
              body: "F_11 is greater than zero for the inside of a cup, a cavity or a cylinder bore. Leaving it at zero breaks the summation rule and every factor computed after it - inspect the curvature first, then write the equations.",
            },
            keyTerms: [
              { term: "View factor", definition: "The fraction of diffusely emitted radiation leaving one surface that directly reaches another." },
              { term: "Reciprocity theorem", definition: "A1 F_12 = A2 F_21; it lets known factors be flipped into unknown ones." },
              { term: "Enclosure", definition: "A set of surfaces completely surrounding a space, so that the summation rule applies to each surface." },
            ],
            examQuestions: [
              {
                q: "Define the view factor, prove the reciprocity theorem, and state the summation rule. Two opposed parallel squares of side 1 m lie 1 m apart, and the chart value of the factor between them is 0.20: verify the reciprocity and find where the remaining radiation from one square goes.",
                marks: 7,
                outline: [
                  "Define F_12 as the fraction of diffuse radiation from 1 intercepted by 2.",
                  "Reciprocity from the double integral over both areas: A1 F12 = A2 F21.",
                  "Summation: an enclosure forces the F_1j to add to 1.",
                  "Self-view: flat squares have F11 = 0.",
                  "Chart lookup at a/c = 1 and b/c = 1 gives F12 = 0.20.",
                  "Equal areas mean F12 = F21, consistent with reciprocity.",
                  "The remaining 0.80 of surface 1's emission goes to the surrounding environment.",
                ],
              },
              {
                q: "What is the view factor from a small flat disk to the hemispherical dome placed over it?",
                marks: 2,
              },
              {
                q: "State the decomposition rule and use it to express the factor from surface 1 to a composite target surface (2 + 3).",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Radiation exchange between black surfaces",
            body: [
              "Between black surfaces the bookkeeping is clean: all arriving radiation is absorbed, none is reflected. The net exchange from 1 to 2 is q_12 = A1 F_12 sigma (T1^4 - T2^4) - the view factor carries the geometry, sigma T^4 carries the emission. For a black surface the radiosity (the total leaving flux) equals the emissive power E_b, which is why no further terms appear. The formula follows from counting what 1 sends toward 2 and what 2 sends back toward 1: the difference is the net one-way flow. Radiation needs no medium, so this exchange continues across vacuum and through transparent gases unchanged.",
              "Two benchmarks are worth memorising. Large parallel plates (F = 1 each way): q/A = sigma (T1^4 - T2^4). A small object in a large room (F from object to room ≈ 1): q = A_object sigma (T_object^4 - T_room^4) - the small-body-in-black-surroundings staple. Worked example: plates at 800 K and 500 K exchange 5.67e-8 x (4.096e11 - 6.25e10), which is about 19.7 kW/m2 - radiation at industrial temperature outruns a natural-convection film by an order of magnitude.",
              "Multi-surface enclosures extend the pattern: surface i exchanges with every other surface j, and its net loss is the sum over all pairs of A_i F_ij sigma (Ti^4 - Tj^4). This pairwise structure is the seed of the radiation-network method for gray surfaces in the next section, and it explains furnace design: the stock sees flames, roof and walls with different factors and temperatures. It also explains thermocouple error in a hot gas stream - the probe reads low because it 'sees' cool walls - a problem fixed by shields, examined at the end of this unit.",
            ],
            bullets: [
              "Black exchange: q_12 = A1 F_12 sigma (T1^4 - T2^4); radiosity equals E_b for a black surface.",
              "Large parallel plates: q/A = sigma (T1^4 - T2^4).",
              "Small body in large surroundings: q = A sigma (T^4 - T_sur^4) with F ≈ 1.",
              "Enclosure: the net for surface i is the sum over all pairs of A_i F_ij sigma (Ti^4 - Tj^4).",
              "T^4 in kelvin; the difference of fourth powers, never the fourth power of a difference.",
            ],
            table: {
              caption: "Standard black-surface exchanges.",
              headers: ["Configuration", "View factor", "Net exchange"],
              rows: [
                ["Large parallel plates", "F12 = F21 = 1", "q/A = sigma (T1^4 - T2^4)"],
                ["Small body in a large room", "F12 ≈ 1", "q = A1 sigma (T1^4 - T2^4)"],
                ["Inner convex body inside an enclosure", "F12 = 1, F21 = A1/A2", "q = A1 sigma (T1^4 - T2^4)"],
                ["Concentric spheres or cylinders", "as above (inner sees only outer)", "q = A1 sigma (T1^4 - T2^4)"],
                ["Arbitrary pair in an enclosure", "from charts and algebra", "q = A1 F12 sigma (T1^4 - T2^4)"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Photons in the loop",
              caption:
                "Radiation exchange as a cycle: what one surface emits, the other absorbs and returns; the imbalance is the net flow.",
              steps: [
                { label: "Surface 1 emits sigma T1^4", note: "over its whole hemisphere" },
                { label: "Fraction F12 reaches surface 2", note: "pure geometry" },
                { label: "Black surface 2 absorbs all of it", note: "alpha = 1" },
                { label: "Surface 2 emits sigma T2^4 back", note: "fraction F21 returns the favour" },
                { label: "Net = A1 F12 sigma (T1^4 - T2^4)", note: "the fourth-power imbalance" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never (T1 - T2)^4",
              body: "The difference of fourth powers is not the fourth power of the difference - at 800 K and 500 K the wrong form is off by about 45 percent. Write T1^4 - T2^4 and expand only if the arithmetic demands it.",
            },
            keyTerms: [
              { term: "Radiosity", definition: "Total radiation leaving a surface per unit area - emitted plus reflected; equals E_b for a black surface." },
              { term: "Irradiation", definition: "Total radiation incident on a surface per unit area." },
              { term: "Net radiation exchange", definition: "The difference between what two surfaces exchange both ways; A F sigma (T1^4 - T2^4) for black surfaces." },
            ],
            examQuestions: [
              {
                q: "Derive the net radiation exchange between two black surfaces and apply it to large parallel plates at 800 K and 500 K; compare the result with typical natural convection from the hot plate.",
                marks: 7,
                outline: [
                  "Define a black surface and note radiosity J = E_b.",
                  "Write what leaves 1 toward 2: A1 F12 sigma T1^4.",
                  "Write the return: A2 F21 sigma T2^4.",
                  "Apply reciprocity to combine: q = A1 F12 sigma (T1^4 - T2^4).",
                  "For large parallel plates F12 = 1, so q/A = sigma (T1^4 - T2^4).",
                  "Numbers: 5.67e-8 x (4.096 - 0.625) x 10^11 ≈ 19.7 kW/m2.",
                  "Compare: natural convection at h ≈ 5-10 W/m2-K over 300 K gives 1.5-3 kW/m2 - radiation dominates at high temperature.",
                ],
              },
              {
                q: "Define radiosity and irradiation for any surface.",
                marks: 3,
              },
              {
                q: "Why does radiation usually dominate over convection in furnaces?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Gray surfaces and the radiation network",
            body: [
              "Real surfaces reflect as well as absorb, and the accounting needs one more variable: radiosity J = emitted + reflected = epsilon E_b + (1 - epsilon) G, where G is the irradiation arriving at the surface. For a gray surface (epsilon constant with wavelength) the electrical analogy of Unit I returns in a new guise. Each surface carries a surface resistance (1 - epsilon)/(epsilon A); each pair of views carries a space resistance 1/(A1 F_12). The driving potentials are the E_b values, sigma T^4 - the analogy is exact: heat flows from high E_b to low E_b through the resistances.",
              "The two-surface solution assembles the three resistances in series: q = sigma (T1^4 - T2^4)/[(1-e1)/(e1 A1) + 1/(A1 F12) + (1-e2)/(e2 A2)]. For large parallel plates this collapses to q/A = sigma (T1^4 - T2^4)/(1/e1 + 1/e2 - 1). The code below runs plates with e1 = 0.8 and e2 = 0.6 at 800 K and 500 K: about 20.5 kW over 2 m2, barely half the black-surface value - emissivity, not area, is the lever. A reradiating (insulated) surface joins a network with no net heat of its own: its J simply floats between its neighbours.",
              "Enclosures with three or more surfaces solve exactly like DC circuits: write a node balance for each J, add the reradiating condition where it applies, and solve the simultaneous equations. Applications reward the discipline: furnace walls, cryogenic tank linings, thermocouple shields, radiation thermometers. One caveat travels with the method: real emissivities vary with wavelength, so band-averaged values are used, and polished metals (e ≈ 0.03-0.1) can shut radiation almost off - which is exactly why they are chosen for insulation and shields.",
            ],
            bullets: [
              "Gray surface: epsilon independent of wavelength; Kirchhoff lets alpha = epsilon.",
              "Radiosity J = epsilon E_b + (1 - epsilon) G - emission plus reflection.",
              "Surface resistance (1 - e)/(e A); space resistance 1/(A1 F12).",
              "Two-surface network: q = sigma (T1^4 - T2^4) divided by the sum of the three resistances.",
              "Reradiating surface: insulated, zero net exchange, its J floats between neighbours.",
            ],
            codeExample: {
              language: "python",
              caption: "Python: two large gray parallel plates through the resistance network.",
              code: `# Two large gray parallel plates via the resistance network
sigma = 5.67e-8   # W/m2-K4

e1, e2 = 0.8, 0.6
A = 2.0                    # m2, F12 = 1 for large plates
T1, T2 = 800.0, 500.0      # K

R1 = (1 - e1) / (e1 * A)   # surface resistance, plate 1
R2 = (1 - e2) / (e2 * A)   # surface resistance, plate 2
R12 = 1.0 / (A * 1.0)      # space resistance, F12 = 1
R_total = R1 + R12 + R2

driving = sigma * (T1**4 - T2**4)
q = driving / R_total
print(f"R1 = {R1:.3f}  R2 = {R2:.3f}  R12 = {R12:.3f} (1/m2)")
print(f"Driving potential = {driving:.0f} W/m2")
print(f"Net exchange q = {q:.0f} W over {A} m2")

q_black = A * sigma * (T1**4 - T2**4)
print(f"If both plates were black: q = {q_black:.0f} W")`,
            },
            diagram: {
              kind: "flow",
              title: "Solving a gray-surface network",
              caption:
                "The network method in five moves - identical discipline to a DC circuit.",
              steps: [
                { label: "Draw the circuit", note: "E_b nodes, J nodes, resistances between" },
                { label: "Surface resistances (1 - e)/(e A)", note: "zero for black surfaces" },
                { label: "Space resistance 1/(A1 F12)", note: "geometry only" },
                { label: "Drive with sigma (T1^4 - T2^4)", note: "the battery across the ends" },
                { label: "Solve the series/parallel circuit for q", note: "standard network analysis" },
              ],
            },
            callout: {
              type: "warning",
              title: "J is not E_b",
              body: "For gray surfaces the radiosity J differs from the emissive power E_b. Students who push sigma T^4 straight across a space resistance are doing black-surface exchange and silently dropping the surface resistances - which is exactly where the emissivity marks live.",
            },
            keyTerms: [
              { term: "Gray surface", definition: "A surface whose emissivity is approximately constant with wavelength; alpha = epsilon by Kirchhoff's law." },
              { term: "Radiosity", definition: "Total radiation leaving a surface: emission plus reflection, J = epsilon E_b + (1 - epsilon) G." },
              { term: "Surface resistance", definition: "(1 - epsilon)/(epsilon A): the price a surface pays for imperfect emission." },
            ],
            examQuestions: [
              {
                q: "Explain the radiation-network method and use it to find the net exchange per square metre between two large parallel gray plates with e1 = 0.8 and e2 = 0.6 at 800 K and 500 K.",
                marks: 7,
                outline: [
                  "Define gray surface and radiosity J.",
                  "Draw the network: E_b1 - J1 - J2 - E_b2.",
                  "Surface resistances: (1 - e1)/(e1 A1) and (1 - e2)/(e2 A2).",
                  "Space resistance 1/(A1 F12) with F12 = 1.",
                  "Series result: q = sigma(T1^4 - T2^4)/[sum of the three].",
                  "For parallel plates per unit area: q/A = sigma(T1^4 - T2^4)/(1/e1 + 1/e2 - 1).",
                  "Numbers: 19680/1.917 ≈ 10.3 kW/m2, against 19.7 kW/m2 if both were black.",
                ],
              },
              {
                q: "Write the expression for the radiosity of an opaque gray surface and define each term.",
                marks: 3,
              },
              {
                q: "What is a reradiating surface, and what condition replaces its energy balance in the network?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Radiation shields and multi-layer insulation",
            body: [
              "A radiation shield is a low-emissivity barrier inserted between two exchanging surfaces. In steady state it absorbs and re-emits exactly as much as it receives - zero net storage - but it splits the fourth-power difference into two smaller drops and inserts two extra surface resistances. The simplest case, two large parallel plates with one shield identical to them (all emissivity e), halves the exchange: q_shield = q_bare/2, and n such shields cut it to q_bare divided by (n + 1).",
              "The shield's own temperature settles wherever the fluxes balance - between the plate temperatures, and closer to the hotter plate if its emissivity is lower. Stacking multiplies the resistances: multi-layer insulation wraps spacecraft and cryogenic vessels in 20-40 aluminized polymer layers, each pair adding surface resistances until the apparent conductivity drops to around 10^-5 W/m-K - but only under vacuum, because gas conduction between the layers shorts the stack instantly. That is why MLI lives inside vacuum jackets.",
              "Shields also correct measurement: a bare thermocouple in a hot gas stream reads low because it exchanges radiation with the cooler walls; a single shielded probe cuts the error several-fold, and doubling the shields roughly halves what remains. Furnace doors use chained metal curtains as shields, and spacecraft sunshields stack the idea to extremes - the James Webb telescope keeps a hot sunlit side near 350-400 K and 40 K instruments apart with just five aluminized layers. Examiners want the derivation of the (n + 1) factor for equal-emissivity shields, which is one line of resistance-counting.",
            ],
            bullets: [
              "A shield takes no net heat: it re-emits everything, floating at a temperature between the plates.",
              "One shield of the same emissivity halves the exchange; n shields give q divided by (n + 1).",
              "Shield effectiveness lives in the surface resistances: low-e coatings are everything.",
              "MLI: 20-40 layers in vacuum approach an apparent conductivity near 10^-5 W/m-K.",
              "Thermocouple shields cut radiation error in gas streams; curtains shield furnace openings.",
            ],
            table: {
              caption: "Radiation shields in service.",
              headers: ["Application", "Arrangement", "Benefit"],
              rows: [
                ["Thermocouple shield", "thin cylinder around the junction", "cuts probe-to-wall exchange, reducing reading error"],
                ["Cryogenic MLI", "20-40 aluminized layers, vacuum-jacketed", "near-zero apparent conductivity around tanks"],
                ["Furnace door curtain", "chained metal strips or screens", "protects operators, cuts wall losses"],
                ["Spacecraft sunshield", "five layered reflectors (JWST)", "hot sun side versus 40 K instruments"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "With and without a shield",
              caption:
                "Same plates, one extra surface - the resistance chain doubles while the driving potential stays fixed.",
              left: {
                heading: "Bare plates",
                items: [
                  "two surface resistances only",
                  "q0 = sigma (T1^4 - T2^4) divided by (1/e1 + 1/e2 - 1)",
                  "the full fourth-power drop across one gap",
                  "maximum loss",
                ],
              },
              right: {
                heading: "One shield inserted",
                items: [
                  "four surface resistances in two gaps",
                  "identical shield halves the flow: q0/2",
                  "shield temperature floats between T1 and T2",
                  "n shields: q0 divided by (n + 1)",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Derive the (n + 1) reduction once, carefully: each identical shield adds one full set of surface resistances while the driving sigma(T1^4 - T2^4) stays fixed. The count is the answer - quote it for any n they name.",
            },
            keyTerms: [
              { term: "Radiation shield", definition: "A low-emissivity interposed surface that adds radiative resistances while absorbing no net heat." },
              { term: "Multilayer insulation", definition: "Many aluminized radiation shields in vacuum; apparent conductivity near 10^-5 W/m-K." },
              { term: "Shield temperature", definition: "The floating equilibrium temperature a shield settles at by balancing its incoming and outgoing radiation." },
            ],
            examQuestions: [
              {
                q: "Two large parallel plates exchange radiation. Derive the exchange rate when one radiation shield of the same emissivity as both plates is inserted, and generalise the result to n shields.",
                marks: 7,
                outline: [
                  "Write the bare exchange: q0 = A sigma (T1^4 - T2^4)/(1/e1 + 1/e2 - 1).",
                  "Insert a shield: two gaps in series, shield at some T3.",
                  "Each gap has its own resistance sum; steady state equalises the fluxes.",
                  "Add the resistances: the total is twice the single-gap sum for identical emissivities.",
                  "Conclude q1 = q0/2.",
                  "Generalise: n identical shields give qn = q0/(n + 1).",
                  "Applications: MLI in vacuum, thermocouple shields, furnace curtains.",
                ],
              },
              {
                q: "Why must radiation shields have low emissivity to be effective?",
                marks: 2,
              },
              {
                q: "Why does multilayer insulation require a vacuum to work?",
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
      title: "Mass Transfer",
      summary:
        "Heat transfer's twin discipline: Fick's law and Stefan diffusion, the transport analogies that convert convection knowledge into mass transfer coefficients, and the industrial workhorses - cooling towers and dryers - plus coupled case studies.",
      chapter: {
        number: "05",
        title: "Mass transfer: diffusion, analogies and applications",
        intro:
          "Unit V mirrors heat transfer in a second currency: mass. Fick's law parallels Fourier's law, Stefan's problem handles a stagnant partner, the Reynolds and Chilton-Colburn analogies convert every Unit II correlation into a mass transfer coefficient, and the unit closes with cooling towers, drying and case studies where heat and mass transfer operate together.",
        inOneBreath:
          "Species diffuse down concentration gradients at rates fixed by D_AB; Stefan's logarithm handles a stagnant partner; Sherwood, Schmidt and the Chilton-Colburn analogy convert heat-transfer knowledge into mass-transfer coefficients; a cooling tower rejects plant heat by evaporating a small fraction of water against the wet-bulb limit; and drying runs through constant- and falling-rate periods with the surface pinned at the wet-bulb temperature.",
        sections: [
          {
            number: "5.1",
            title: "Fick's law of diffusion",
            body: [
              "Heat transfer has a twin: mass transfer, the movement of a species from high to low concentration. Molecular diffusion is conduction's mirror - Fick's law says the molar flux N_A = -D_AB dC_A/dx, with D_AB the mass diffusivity in m2/s. Where Fourier's law moves energy down a temperature gradient, Fick's law moves species down a concentration gradient. Typical magnitudes: about 10^-5 m2/s for gas pairs and 10^-9 for solutes in liquids - four orders apart, which is why liquid-phase operations need enormous contact times and interfacial areas.",
              "For a binary gas the ideal-gas law converts concentrations into partial pressures: N_A = (D_AB/(R T L)) (p_A1 - p_A2) for equimolar counterdiffusion, where each mole of A moving one way is balanced by a mole of B the other way, as on a distillation tray. When B is stagnant - water evaporating into still air in a tube - the accounting changes and the flux becomes N_A = (D_AB P/(R T L)) ln((P - p_A2)/(P - p_A1)), Stefan's problem. The code below runs it: at 25 C the water surface supplies p_A1 = 2339 Pa while dry air sweeps the tube mouth; the logarithm adds about 2 percent over the linear form in this dilute case, and far more in concentrated vapours.",
              "Applications thread the whole unit: drying, humidification, gas absorption, distillation, membrane separations, and the carburising of steel where carbon diffuses into iron. Concentration boundary layers mirror thermal boundary layers in convective mass transfer, which is the bridge of the next section. The exam pattern is stable: state Fick's law, convert between the concentration and partial-pressure forms, then run Stefan's problem with numbers - the logarithm is where the marks separate the memorisers from the understanders.",
            ],
            bullets: [
              "Fick's law: N_A = -D_AB dC_A/dx; flux flows down the concentration gradient.",
              "D_AB in m2/s: about 10^-5 for gases and 10^-9 in liquids - slow by design.",
              "Equimolar counterdiffusion: N_A = D_AB (p_A1 - p_A2)/(R T L) - the linear form.",
              "Stagnant partner (Stefan): N_A = (D_AB P/(R T L)) ln((P - p_A2)/(P - p_A1)).",
              "Concentration boundary layer: the mass-transfer twin of the thermal boundary layer.",
            ],
            codeExample: {
              language: "python",
              caption: "Python: Stefan diffusion - water evaporating into stagnant air.",
              code: `import math

# Stefan diffusion: water evaporating into stagnant air
D_ab = 2.6e-5             # m2/s, vapour in air at 25 C
P, T = 101325.0, 298.0    # Pa, K
R = 8314.0                # J/(kmol-K)
L = 0.15                  # m of gas column in the tube
p_a1 = 2339.0             # Pa, vapour pressure at the 20 C water surface
p_a2 = 0.0                # Pa, dry air sweeps the tube mouth

C = P / (R * T)                     # total molar concentration, kmol/m3
N_a = (D_ab * C / L) * math.log((P - p_a2) / (P - p_a1))
print(f"Total concentration C = {C:.4f} kmol/m3")
print(f"Molar flux N_A = {N_a:.2e} kmol/m2-s")
print(f"Mass flux = {N_a * 18.0:.2e} kg/m2-s")

# The (wrong) linear form, for comparison
N_lin = D_ab * C * (p_a1 - p_a2) / (P * L)
print(f"Linear form reads {100 * (1 - N_lin / N_a):.1f}% low")`,
            },
            diagram: {
              kind: "compare",
              title: "Conduction and diffusion: one mathematics, two physics",
              caption:
                "Every conduction result has a diffusion twin - swap the driving force and the transport property.",
              left: {
                heading: "Heat conduction",
                items: [
                  "Fourier: q = -k A dT/dx",
                  "driving potential: temperature",
                  "transport property: k (W/m-K)",
                  "storage term: rho c per unit volume",
                ],
              },
              right: {
                heading: "Mass diffusion",
                items: [
                  "Fick: N_A = -D_AB A dC_A/dx",
                  "driving potential: concentration",
                  "transport property: D_AB (m2/s)",
                  "storage term: concentration itself",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Stefan's logarithm",
              body: "Whenever the non-diffusing species is stagnant, the flux carries a logarithm: ln((P - p_A2)/(P - p_A1)). Substituting the linear difference ratio underestimates the flux and is the most common error in RGPV mass-transfer numericals.",
            },
            keyTerms: [
              { term: "Fick's law", definition: "Molar flux proportional to the negative concentration gradient: N_A = -D_AB dC_A/dx." },
              { term: "Diffusivity (D_AB)", definition: "The proportionality constant of diffusion, in m2/s; fixed by the species pair, the medium, temperature and pressure." },
              { term: "Equimolar counterdiffusion", definition: "Equal and opposite molar fluxes of A and B - the basis of the linear flux form." },
            ],
            examQuestions: [
              {
                q: "State Fick's law, distinguish equimolar counterdiffusion from diffusion through a stagnant gas, and derive the Stefan expression. Water evaporates in a 0.15 m tube at 25 C (D_AB = 2.6e-5 m2/s, vapour pressure at the surface = 2339 Pa); estimate the molar flux.",
                marks: 7,
                outline: [
                  "State Fick's law and the units of D_AB.",
                  "Equimolar counterdiffusion: N_A = D_AB (p_A1 - p_A2)/(R T L).",
                  "Stagnant B: B's flux is zero, so a bulk drift of A appears.",
                  "Integrate to get N_A = (D_AB P/(R T L)) ln((P - p_A2)/(P - p_A1)).",
                  "Substitute: C = P/RT ≈ 0.0409 kmol/m3.",
                  "N_A ≈ 1.7 x 10^-8 kmol/m2-s.",
                  "Compare with the linear form: about 2 percent lower here; the gap widens for concentrated vapours.",
                ],
              },
              {
                q: "Compare the orders of magnitude of D_AB for gases and liquids, and state the design consequence.",
                marks: 3,
              },
              {
                q: "State Fick's law with the units of every quantity in it.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Convective mass transfer and the transport analogies",
            body: [
              "When a stream flows over a surface, species cross the concentration boundary layer much as heat crosses the thermal one, and a convective mass transfer coefficient k_c (in m/s) appears: N_A = k_c (C_A,surface - C_A,bulk). The dimensionless twins follow immediately: Sherwood Sh = k_c L/D_AB (the mass Nusselt), Schmidt Sc = nu/D_AB (the mass Prandtl), and Lewis Le = alpha/D_AB = Sc/Pr, which measures how heat and mass diffuse relative to each other in the same medium.",
              "The great practical gift is the analogy between the transports. Reynolds noted that in turbulent flow the same eddies carry momentum, heat and mass; Chilton-Colburn quantified it: j_H = St Pr^(2/3) equals j_D = (k_c/V) Sc^(2/3), and both run close to f/2, half the friction factor. The consequence is enormous: any heat-transfer correlation becomes a mass-transfer correlation by swapping Nu for Sh and Pr for Sc. For air-water vapour the Lewis number is near 1, so h and k_c are simply proportional - the Lewis relation that underlies wet-bulb thermometry, cooling-tower analysis and every psychrometric calculation in the unit.",
              "Applications: packing sizes in cooling towers and absorption columns, drying-rate prediction, evaporation losses from open water. Limits matter and are examinable: the analogies assume small mass flux (so the transferred species does not distort the boundary layer), single-phase flow without separation, and no chemical reaction inside the layer; where these fail, measured mass-transfer data are needed. The pipeline shows the standard exam route from friction factor to flux - each arrow is one formula worth one mark.",
            ],
            bullets: [
              "Convective mass transfer: N_A = k_c x delta C, with k_c in m/s.",
              "Sherwood Sh = k_c L/D_AB (mass Nusselt); Schmidt Sc = nu/D_AB (mass Prandtl).",
              "Reynolds analogy: the same eddies carry momentum, heat and mass in turbulent flow.",
              "Chilton-Colburn: j_H = j_D ≈ f/2, with j_D = (k_c/V) Sc^(2/3).",
              "Swap trick: replace Nu by Sh and Pr by Sc in any heat correlation to get a mass one.",
            ],
            table: {
              caption: "Counterpart quantities in heat and mass transfer.",
              headers: ["Item", "Heat transfer", "Mass transfer"],
              rows: [
                ["Driving potential", "temperature difference", "concentration difference"],
                ["Transport property", "k (W/m-K)", "D_AB (m2/s)"],
                ["Diffusivity", "alpha = k/(rho c)", "D_AB"],
                ["Transfer coefficient", "h (W/m2-K)", "k_c (m/s)"],
                ["Property ratio", "Pr = nu/alpha", "Sc = nu/D_AB"],
                ["Result group", "Nu = h L/k", "Sh = k_c L/D_AB"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From friction data to mass flux",
              caption:
                "The Chilton-Colburn route: measure or predict the momentum loss, read off the mass transfer.",
              stages: [
                { label: "Friction factor f", note: "from flow conditions or charts" },
                { label: "j_D ≈ f/2", note: "Chilton-Colburn analogy" },
                { label: "k_c = j_D V Sc^(-2/3)", note: "mass transfer coefficient, m/s" },
                { label: "N_A = k_c x delta C", note: "flux from the concentration difference" },
                { label: "Cross-check with Sh = j_D Re Sc^(1/3)", note: "dimensionless sanity check" },
              ],
            },
            callout: {
              type: "tip",
              title: "The swap table is the unit's key",
              body: "Memorise the swap: Nu to Sh, Pr to Sc, h to k_c. Every forced-convection correlation you already own from Unit II - flat plate, tube, packed bed - now solves Unit V problems. That single insight is worth more than a page of memorised formulas.",
            },
            keyTerms: [
              { term: "Sherwood number", definition: "Sh = k_c L/D_AB: convective mass transfer relative to diffusion across the layer; the mass-transfer Nusselt." },
              { term: "Schmidt number", definition: "Sc = nu/D_AB: momentum diffusivity over mass diffusivity; the mass-transfer Prandtl." },
              { term: "Chilton-Colburn analogy", definition: "j_H = j_D ≈ f/2, linking friction, heat and mass transfer in turbulent flow." },
            ],
            examQuestions: [
              {
                q: "Define the Sherwood, Schmidt and Lewis numbers, state the Reynolds and Chilton-Colburn analogies, and explain how a heat-transfer correlation is used to predict a mass transfer coefficient.",
                marks: 7,
                outline: [
                  "Define Sc = nu/D_AB and Sh = k_c L/D_AB with their meanings.",
                  "Define Le = alpha/D_AB = Sc/Pr.",
                  "Reynolds analogy: identical eddy transport of momentum, heat and mass (best near Pr ≈ Sc ≈ 1).",
                  "Chilton-Colburn: j_H = St Pr^(2/3), j_D = (k_c/V) Sc^(2/3), with j_H = j_D ≈ f/2.",
                  "The swap rule: replace Nu by Sh and Pr by Sc in any correlation.",
                  "Example: the flat-plate Nu = 0.664 Re^0.5 Pr^(1/3) becomes Sh = 0.664 Re^0.5 Sc^(1/3).",
                  "Lewis relation for air-water (Le ≈ 1): h/k_c ≈ rho c_p.",
                ],
              },
              {
                q: "Why is the Lewis number central to air-water vapour processes?",
                marks: 3,
              },
              {
                q: "Give the units of the mass transfer coefficient k_c and of the diffusivity D_AB.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Cooling towers",
            body: [
              "A cooling tower rejects waste heat by evaporating a small fraction of the circulating water: each kilogram evaporated carries away about 2400 kJ of latent heat, so a 1-2 percent evaporative loss cools the whole stream by as much as a 6-12 K sensible drop would. The cold-water temperature cannot pass the ambient wet-bulb temperature; the approach - cold water minus wet bulb - is the tower's quality metric, typically 3-8 K, while the range is simply the hot minus the cold water temperature.",
              "Construction: hot water sprays over fill (splash or film packing) that spreads it into thin sheets and droplets; air moves counter to it - drawn by fans in mechanical towers, and by buoyancy alone in the tall hyperbolic natural-draught towers of power stations. Contact plus mass transfer does the actual cooling, and the driving force is the enthalpy difference between saturated air at the water temperature and the actual air stream - the Merkel equation integrates this along the tower and defines its NTU, the tower characteristic kaV/L. The water balance must close: makeup equals evaporation plus drift (droplets carried out) plus blowdown (deliberate purge that stops dissolved solids accumulating).",
              "Performance is rated by effectiveness = range/(hot water - wet bulb) and by the approach; charts of tower characteristic against the water-to-air ratio L/G match packing to duty. Chemical treatment controls scaling and Legionella; drift eliminators strip droplets from the exhaust. Exams want a labelled flow sketch, the definitions of range and approach, and the evaporation-loss arithmetic - the rest is recognition of the fill types and the natural versus mechanical draught choice.",
            ],
            bullets: [
              "Evaporation carries ≈ 2400 kJ/kg: a 1-2 percent water loss removes plant-scale heat.",
              "Range = hot minus cold water; approach = cold water minus ambient wet bulb (3-8 K typical).",
              "The wet bulb is the floor: cold water can approach it but never cross it.",
              "Merkel method: integrate the enthalpy driving force along the fill; tower NTU = kaV/L.",
              "Makeup = evaporation + drift + blowdown; blowdown controls dissolved solids.",
            ],
            table: {
              caption: "Cooling tower families.",
              headers: ["Type", "Air mover", "Suitable duty", "Notes"],
              rows: [
                ["Natural draught", "buoyancy in a hyperbolic shell", "very large power-plant loads", "no fan power; huge capital"],
                ["Induced-draft counterflow", "fan at the outlet", "standard industrial duty", "best approach; fan handles saturated air"],
                ["Forced draft", "fan at the inlet", "medium duties", "recirculation risk; cheaper fan"],
                ["Crossflow", "fan on the side", "easy-maintenance sites", "lower pumping head; larger footprint"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Once around the tower",
              caption:
                "Water and air chase each other through the fill; evaporation pays the cooling bill.",
              steps: [
                { label: "Hot water sprays over the fill", note: "spread into films and droplets" },
                { label: "Air enters at the basin and rises counter to it", note: "natural or mechanical draught" },
                { label: "A small fraction of water evaporates", note: "latent heat leaves the water stream" },
                { label: "Cooled water collects in the cold basin", note: "pumped back to the plant" },
                { label: "Warm moist air exhausts at the top", note: "drift eliminators strip droplets" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Definitions first: range, approach, effectiveness, evaporation loss. Then the sketch - hot water in at the top, air in at the bottom, fill in between, basin below. Labelled, the sketch earns nearly a mark per word; unlabelled, it is decoration.",
            },
            keyTerms: [
              { term: "Cooling range", definition: "Hot minus cold water temperature - the duty the tower performs on the circulating stream." },
              { term: "Approach", definition: "Cold-water temperature minus ambient wet-bulb temperature; the tower's closeness to the theoretical limit." },
              { term: "Blowdown", definition: "Deliberate purge of circulating water to limit the build-up of dissolved solids." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of a forced-draught cooling tower with a labelled sketch, define range and approach, and explain why the cooled water cannot reach the wet-bulb temperature.",
                marks: 7,
                outline: [
                  "Sketch: hot-water distribution at the top, fill, fan, basin, drift eliminators.",
                  "Hot water sprays over the fill; air flows counter to it through the packing.",
                  "Evaporation of a small fraction removes the latent heat - the actual cooling mechanism.",
                  "Define range = T_hot - T_cold and approach = T_cold - T_wetbulb.",
                  "Wet bulb is the limit: the driving force vanishes there, and finite packing needs a finite approach.",
                  "Water balance: makeup = evaporation + drift + blowdown.",
                  "Mention the Merkel NTU (kaV/L) as the tower characteristic used for sizing.",
                ],
              },
              {
                q: "Distinguish drift from blowdown in a cooling tower.",
                marks: 2,
              },
              {
                q: "Why is film fill more compact than splash fill for the same duty?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Drying",
            body: [
              "Drying removes a liquid - nearly always water - from a wet solid by supplying its latent heat through the surface. Moisture vocabulary comes first: total moisture splits into equilibrium moisture (the solid's steady partner at given air conditions) and free moisture (the removable part); bound water hides in capillaries and cells and dries below the free-surface rate, while unbound water behaves like water on a free surface. Drying stops - asymptotically - at the equilibrium moisture content set by the surrounding air.",
              "The drying curve plots rate against remaining free moisture. After a short warm-up, the constant-rate period holds the surface effectively saturated: evaporation happens at the wet-bulb temperature and the rate is fixed by external convection - N_c ≈ h (T_air - T_wet bulb)/lambda per unit area, a Unit II formula doing Unit V work. At the critical moisture content the surface begins to starve; the falling-rate period takes over, controlled by internal diffusion as moisture migrates out through the solid, and the rate decays toward zero at equilibrium.",
              "Times follow by integrating the curve: the constant-rate stretch is linear in moisture removed, but the falling-rate stretch - often linearised for exam purposes - dominates the total time and hence the equipment size. Hardware matches the feed: tray dryers for batches, rotary drums for granular solids, fluidised beds for free-flowing particles, spray dryers that turn a liquid feed directly into powder in seconds, and freeze drying for pharma and food that cannot take heat. Selection questions want the feed-form logic, not brand names.",
            ],
            bullets: [
              "Constant-rate period: surface saturated, dries at the wet-bulb temperature; N = h (T_air - T_wb)/lambda.",
              "Critical moisture content: the transition from external to internal control.",
              "Falling-rate period: internal diffusion limits; it dominates total drying time.",
              "Bound versus unbound, and free versus equilibrium moisture - define before computing.",
              "Dryer selection follows feed form: tray, rotary, fluidised bed, spray, freeze.",
            ],
            table: {
              caption: "Matching dryers to feeds.",
              headers: ["Dryer", "Feed form", "Residence", "Notes"],
              rows: [
                ["Tray (batch)", "solids, pastes", "hours", "simple, labour-heavy"],
                ["Rotary", "granular, crystals", "minutes", "continuous; needs dust control"],
                ["Fluidised bed", "free-flowing granules", "seconds to minutes", "excellent mixing; elutriation"],
                ["Spray", "liquids, slurries", "seconds", "powder directly from liquid"],
                ["Freeze (batch)", "heat-sensitive solids", "hours", "sublimation under vacuum"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The drying curve, period by period",
              caption:
                "Read as a journey in free moisture content, from wet feed to equilibrium.",
              steps: [
                { label: "Warm-up: surface reaches the wet-bulb temperature", note: "short" },
                { label: "Constant-rate period", note: "surface saturated; external control by h and the air" },
                { label: "Critical moisture content", note: "the surface starts to dry out" },
                { label: "Falling-rate period", note: "internal diffusion limits the supply" },
                { label: "Equilibrium moisture", note: "rate falls to zero; drying stops" },
              ],
            },
            callout: {
              type: "tip",
              title: "The bridge formula",
              body: "The constant-rate expression N = h (T_air - T_wet bulb)/lambda is the exam's favourite bridge: one line of Unit II convection delivering a Unit V drying rate. Quote it with the wet-bulb logic and both units' marks arrive together.",
            },
            keyTerms: [
              { term: "Critical moisture content", definition: "The moisture at which the surface stops staying saturated and the drying rate begins to fall." },
              { term: "Constant-rate period", definition: "The drying stage controlled by external heat and mass transfer, with the surface at the wet-bulb temperature." },
              { term: "Equilibrium moisture", definition: "The moisture a solid finally holds in given air; no free moisture exists beyond it." },
            ],
            examQuestions: [
              {
                q: "Describe the drying-rate curve for a wet solid, distinguishing the constant- and falling-rate periods, and derive the expression for the constant rate of drying.",
                marks: 7,
                outline: [
                  "Define free, equilibrium, bound and unbound moisture.",
                  "Sketch rate versus moisture: warm-up, constant-rate, falling-rate.",
                  "Constant-rate: the surface stays saturated at the wet-bulb temperature.",
                  "Energy balance at the surface: h (T_air - T_wb) = N x lambda.",
                  "Hence N = h (T_air - T_wb)/lambda per unit area.",
                  "Critical moisture: the transition; the falling period is governed by internal diffusion.",
                  "Drying time is the integral of dX/N; the falling period dominates it.",
                ],
              },
              {
                q: "Distinguish bound from unbound moisture with one example of each.",
                marks: 2,
              },
              {
                q: "Why does the drying surface sit at the wet-bulb temperature during the constant-rate period?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Case studies in combined heat and mass transfer",
            body: [
              "Real equipment couples every mode at once, and the working skill is diagnosis. A cooling tower is convection plus evaporation across a water film; a spray dryer adds radiation from hot walls to convection from the drying air; a hot wet ingot standing on a mill floor loses heat by convection, radiation and evaporation simultaneously. The method: list the active modes, write each governing law, identify the controlling resistance - the one whose improvement would shrink the total rate most - and design against that.",
              "Three canonical cases repay study. Water evaporating from a pan in still air (Stefan diffusion plus natural convection) sets the textbook evaporation number. The wet-bulb thermometer is coupled heat and mass in equilibrium: the same surface gains sensible heat from the air and loses the latent heat of evaporation; setting the two fluxes equal - with the Lewis relation h/k_c ≈ rho c_p - fixes the wet-bulb temperature. The heat pipe is a sealed phase-change loop: evaporation at the hot end, condensation at the cold end, wick return of the liquid; its effective conductivity runs a hundred times copper's, the standard answer for cooling cramped electronics and spacecraft instruments.",
              "Case-study questions in RGPV are structured essays: describe the equipment, name the coupled modes, write the governing equations, then either solve a small numerical or explain qualitatively what happens when one parameter moves - more air, higher temperature, smaller droplets. The matrix below places the classics, and the table gives the governing link to quote in each. Practise each case once and the exam question becomes an assembly job.",
            ],
            bullets: [
              "Diagnose first: list the active modes and find the controlling resistance.",
              "Air-water processes: the Lewis relation h/k_c ≈ rho c_p ties the heat and mass coefficients.",
              "Wet-bulb temperature: sensible inflow equals latent outflow at the surface - a coupled balance.",
              "Heat pipes: evaporation-condensation loop with wick return; effective conductivity far above copper's.",
              "The psychrometric chart maps every air-water state these operations move between.",
            ],
            table: {
              caption: "Canonical combined heat and mass transfer cases.",
              headers: ["Case", "Coupled modes", "Governing link", "Design lever"],
              rows: [
                ["Cooling tower", "convection + evaporation", "Lewis relation (Le ≈ 1)", "fill area and air rate"],
                ["Spray dryer", "convection + radiation + evaporation", "wet-bulb surface balance", "inlet air temperature, droplet size"],
                ["Heat pipe", "conduction + evaporation-condensation", "capillary wick circulation", "working fluid and wick design"],
                ["Air-conditioning coil", "sensible + latent cooling", "psychrometric chart", "coil surface temperature (dew point)"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Where does the control sit?",
              caption:
                "Phase change along the top, controlling resistance down the side - locate your problem before writing equations.",
              axes: { x: "no phase change (left) to evaporation/condensation (right)", y: "heat side controls (top) to mass side controls (bottom)" },
              quadrants: [
                { label: "Recuperator: sensible convection", note: "pure heat duty - no mass transfer" },
                { label: "Film condenser", note: "phase change, but the liquid film (heat side) is the resistance" },
                { label: "Gas absorption column", note: "no phase change; mass transfer is the whole job" },
                { label: "Cooling tower / spray dryer", note: "evaporation with mass transfer in control" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Structure case answers in four moves: equipment sketch, active modes named, governing equation per mode, then the coupled balance. Four moves, four marks - and the coupled balance (usually the wet-bulb or Lewis relation) is precisely the one students skip.",
            },
            keyTerms: [
              { term: "Lewis relation", definition: "For air-water vapour, h/k_c ≈ rho c_p, linking the heat and mass transfer coefficients when Le ≈ 1." },
              { term: "Heat pipe", definition: "A sealed device transferring heat by internal evaporation and condensation with capillary return; effective conductivity far above metals." },
              { term: "Wet-bulb temperature", definition: "The equilibrium temperature of a wet surface where sensible heat gain balances latent heat loss." },
            ],
            examQuestions: [
              {
                q: "A wet surface in a moving air stream exchanges both heat and mass. Develop the coupled energy balance at the surface and show how it fixes the wet-bulb temperature, using the Lewis relation.",
                marks: 7,
                outline: [
                  "Sensible heat to the surface: q_s = h (T_air - T_s).",
                  "Latent heat carried away by evaporation: q_l = m'' x lambda.",
                  "The mass flux m'' = k_c (C_s,sat - C_air) from the concentrations.",
                  "Steady surface: q_s = q_l.",
                  "Introduce the Lewis relation h/k_c ≈ rho c_p for air-water.",
                  "Show T_s settles below T_air at the wet-bulb temperature.",
                  "Consequence: constant-rate drying and the cooling-tower limit share this same balance.",
                ],
              },
              {
                q: "What is a heat pipe and why is its effective conductivity so high?",
                marks: 3,
              },
              {
                q: "Why does the Lewis relation simplify air-water calculations?",
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
      heading: "Exam weightage - where the marks live",
      body: [
        "RGPV ME-701 papers concentrate roughly two-thirds of the marks in heat exchangers, conduction resistance chains, fins, radiation networks and mass transfer numericals, with boiling, condensation and convection correlations supplying the dependable seven-mark questions. Allocate revision time in about the same ratio, and keep one full numerical slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Heat exchangers: LMTD sizing and NTU rating", weight: "10-14 marks", note: "Near-certain full numerical; practise one counterflow design and one rating problem per paper." },
        { topic: "Composite walls/cylinders and the electrical analogy", weight: "8-12 marks", note: "Resistance chains with interface temperatures; include films and fouling." },
        { topic: "Fins: equation, efficiency, effectiveness", weight: "7-10 marks", note: "Derivation for the infinite fin plus metric definitions; the denominator mix-up costs half the marks." },
        { topic: "Radiation networks and shields", weight: "8-12 marks", note: "Two-surface gray exchange and the (n + 1) shield factor are recurring favourites." },
        { topic: "Conduction transients and lumped capacitance", weight: "6-9 marks", note: "Biot check then exponential cooling; a numerical almost every year." },
        { topic: "Forced convection: plate and tube correlations", weight: "8-10 marks", note: "Name the regime, quote the correlation, then numbers; film and bulk property rules are marked." },
        { topic: "Natural convection with the C-n constants", weight: "6-8 marks", note: "Gr/Ra computation then table constants; a hot-plate or hot-pipe estimate is standard." },
        { topic: "Boiling curve, CHF and condensation", weight: "6-10 marks", note: "Labelled boiling curve with regimes; Nusselt assumptions with the vertical-plate formula." },
        { topic: "Blackbody laws: Planck, Wien, Stefan-Boltzmann", weight: "5-8 marks", note: "Statement plus peak-wavelength and T^4 computations; kelvin discipline." },
        { topic: "Mass transfer: Fick, Stefan, analogies, cooling tower", weight: "8-12 marks", note: "Stefan's logarithm, the swap trick, tower definitions with a labelled sketch." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for radiation, mass transfer and full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - steady conduction", tasks: ["Fourier's law, conductivity and diffusivity; six flux problems", "Plane, composite and cylindrical resistances; interface temperatures", "Critical radius: derive r_c and trace one wire case end to end"] },
        { week: "Week 2", focus: "Unit I - fins and transients", tasks: ["Fin equation: derive, solve infinite and adiabatic-tip cases", "Efficiency and effectiveness numericals (five problems)", "Lumped capacitance with Biot checks; Heisler chart reading practice"] },
        { week: "Week 3", focus: "Unit II - forced convection", tasks: ["Boundary layers and dimensionless groups; the Buckingham Pi derivation", "Flat-plate correlations (local/average, laminar/turbulent): six problems", "Tube flow: Dittus-Boelter sizing with hydraulic diameter"] },
        { week: "Week 4", focus: "Unit II natural + Unit III phase change", tasks: ["Natural convection C-n table; hot plate and hot pipe estimates", "Boiling curve with the CHF discussion; Nusselt condensation formula", "One condenser-side numerical from start to finish"] },
        { week: "Week 5", focus: "Unit III - heat exchangers", tasks: ["LMTD: counter and parallel sizing with F factors (four problems)", "NTU rating: epsilon relations and outlet temperatures (four problems)", "Selection and fouling short-answer drill"] },
        { week: "Week 6", focus: "Unit IV + Unit V + revision", tasks: ["Blackbody laws, view factor algebra, network problems, shield factor", "Fick and Stefan diffusion; the analogy swap drill; tower and drying definitions", "Two full past papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last day before the exam",
      body: [
        "One evening, one page per unit. The goal is not new learning but making the five formula families impossible to fumble under pressure - everything below fits on two sides of a sheet.",
      ],
      bullets: [
        "Redraw the composite-resistance chain (wall, cylinder, sphere) with all three resistance formulas side by side.",
        "Recite the correlation card: 0.332/0.664/0.0296/0.037-871 for plates, 3.66/4.36/0.023 for tubes, the C-n table for natural convection.",
        "Sketch the boiling curve and label all four regimes plus the critical heat flux point.",
        "Write the radiation essentials: the sigma value, the kelvin rule, surface and space resistances, the shield factor 1/(n + 1).",
        "Rehearse the mass-transfer pair: Stefan's logarithm and the Nu-to-Sh swap with Pr to Sc.",
        "Check the calculator, the allowed formula sheet and the C-to-K conversion habit before sleeping - not in the hall.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Convert to kelvin before any T^4 computation - the classic 45 percent error lives here.",
        "Name every correlation and its validity range before substituting numbers; named steps earn method marks even if arithmetic slips.",
        "Draw the thermal circuit or temperature-position sketch first; it prevents the end-pairing mistake in LMTD questions.",
        "Carry units line by line; examiners award the method when a slip happens if the working is visible.",
        "Time-box: 2-3 mark questions in 4-5 minutes, 7-markers in about 15, and keep the last 10 minutes to re-check the two biggest numericals.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Computing (T1 - T2)^4 instead of T1^4 - T2^4 in radiation exchange.",
        "Using the local coefficient (0.332) where the average (0.664) is asked, or the reverse.",
        "Pairing the wrong ends for the counterflow LMTD differences.",
        "Substituting the pipe metal's k in the critical-radius formula instead of the insulation's k.",
        "Forgetting the fouling resistances (and the wall) when assembling U for an exchanger.",
        "Replacing Stefan's logarithm with the linear difference ratio when the second gas is stagnant.",
      ],
    },
  ],
};
