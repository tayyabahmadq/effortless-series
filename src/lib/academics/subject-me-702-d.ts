/**
 * Academics - RGPV ME 7th-semester elective: ME-702(D) Advance Machine Design.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me702d: AcademicSubject = {
  id: "me-702-d",
  code: "ME-702(D)",
  title: "Advance Machine Design",
  semester: "VII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to Advance Machine Design for RGPV Mechanical: design optimization and reliability, creep and fatigue, pressure vessels and piping, IC engine components, and FEA-driven design case studies.",
  description:
    "Five units walk from formal design optimization - objectives, constraints, Lagrange multipliers and KKT conditions - through reliability engineering with the bathtub curve, Weibull fitting and series-parallel arithmetic, into the failure mechanics of creep (Larson-Miller) and fatigue (S-N curves, Marin factors, Miner's rule, Paris law, fracture toughness), then the pressure-boundary sequence from thin shells and Lame's thick cylinders to compound shrink fits, autofrettage, IS 2825 and piping flexibility, the sizing of pistons, connecting rods, crankshafts, flywheels and valve gear, and finally the finite element workflow - meshing, boundary conditions, verification - that carries topology optimization and DFM/DFA into real automotive and aerospace case studies. Every section pairs theory with a worked numeric, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#0ea5e9",
  emoji: "AD",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Optimization and Reliability",
      summary:
        "The design-as-mathematics unit: stating an optimization problem with objectives, variables and constraints; solving it graphically, with Lagrange multipliers, KKT conditions or numerical solvers; then quantifying survival - reliability metrics and the bathtub curve, Weibull fitting of failure data, and the series-parallel arithmetic that builds system reliability.",
      chapter: {
        number: "01",
        title: "Optimization and Reliability in Machine Design",
        intro:
          "Unit I turns design decisions into mathematics. Sections 1.1 and 1.2 formalize the optimization problem - design variables, objective functions, behaviour and side constraints - and the solution toolbox, from graphical contours through Lagrange multipliers and KKT conditions to numerical solvers. Sections 1.3 to 1.5 shift from 'best' to 'survives': reliability definitions and the bathtub curve, the Weibull distribution that fits mechanical failure data, and the series-parallel arithmetic that combines component reliabilities into system numbers.",
        inOneBreath:
          "Optimization: minimize f(x) subject to g(x) ≤ 0, h(x) = 0 and side bounds; optima sit on active constraints; Lagrange multipliers solve equality-constrained problems (grad f = lambda grad g), KKT conditions extend to inequalities, and SLSQP-class solvers industrialize both. Reliability: R(t) = 1 - F(t) with hazard rate h = f/R; the bathtub curve screens infant mortality, rides the useful life and plans for wear-out; Weibull R = exp(-(t/eta)^beta) fits every failure physics with beta as its signature; series systems multiply reliabilities, parallel systems multiply unreliabilities, and mixed blocks collapse from the inside out.",
        sections: [
          {
            number: "1.1",
            title: "Design optimization - objective, variables and constraints",
            body: [
              "Optimization turns design from iteration into mathematics. A design problem is written as: minimize an objective function f(x) over the design variables x = [x1, x2, ...], subject to inequality constraints g(x) ≤ 0, equality constraints h(x) = 0, and side bounds that keep each variable inside stock sizes or physical limits. The design variables are the numbers the designer is free to change - a bar diameter, a shell thickness, a spring index. Everything else - loads, material properties and geometry already fixed by the layout - enters the problem as data, never as a decision.",
              "The objective encodes what 'best' means: minimum mass, minimum cost, maximum stiffness or maximum reliability. The constraints encode what 'acceptable' means: stresses below allowable values, deflection limits, buckling margins, frequency targets and manufacturable sizes. A design that satisfies every constraint is feasible, and the set of all such designs is the feasible region. The optimum is the feasible design with the smallest objective. Most engineering optima sit on constraint boundaries - an active constraint - because material is added only until the weakest check is just satisfied.",
              "Classification guides the solver. Problems are unconstrained or constrained, linear or nonlinear in the variables, single- or multi-objective, and deterministic or stochastic. Convex problems own a single global optimum; nonconvex ones hide local optima that gradient searches find and cannot escape. A worked anchor: the lightest round tie rod carrying a tensile load P has mass proportional to d^2, the stress constraint 4P/(pi d^2) ≤ sigma_allow fixes the diameter, and the answer is then rounded up to the next standard bar - a permanent reminder that real optima are discrete.",
            ],
            bullets: [
              "Design variables x: the free decisions - diameters, thicknesses, lengths, spring indices.",
              "Objective f(x): the merit function - mass, cost, deflection or reliability to minimize or maximize.",
              "Behaviour constraints g(x) ≤ 0: physics checks rewritten as stress, deflection, buckling or frequency limits.",
              "Side constraints: lower and upper bounds from stock sizes, packaging space and standard components.",
              "Active constraint: one satisfied as an equality at the optimum - the binding physical limit of the design.",
            ],
            table: {
              caption: "Anatomy of an optimization problem, mapped onto a light tie rod.",
              headers: ["Element", "Mathematical form", "Tie-rod instance"],
              rows: [
                ["Design variables", "x = [x1, x2, ...]", "bar diameter d and free length L"],
                ["Objective", "minimize f(x)", "mass m = rho pi d^2 L / 4"],
                ["Behaviour constraint", "g(x) ≤ 0", "4P/(pi d^2) - sigma_allow ≤ 0"],
                ["Side constraint", "x_L ≤ x ≤ x_U", "6 mm ≤ d ≤ 40 mm (stock bar)"],
                ["Optimum", "feasible with least f", "smallest d satisfying every constraint"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From design brief to optimum in five steps",
              caption: "The formulation discipline that examiners reward in any optimization question.",
              steps: [
                { label: "Identify the design variables", note: "what can actually change" },
                { label: "Write the objective f(x)", note: "mass, cost, deflection" },
                { label: "List constraints g, h and side bounds", note: "physics + stock limits" },
                { label: "Solve: graphical, Lagrange or numerical", note: "match method to class" },
                { label: "Verify and round to standards", note: "check active constraint" },
              ],
            },
            callout: {
              type: "exam",
              title: "Marks live in the formulation",
              body: "In any 'formulate the optimization problem' question, marks split roughly as: variables (1), objective (1-2), each constraint family (1 each), classification (1). Write the tie-rod example in full mathematical form, not in prose - the equations themselves are the answer.",
            },
            keyTerms: [
              { term: "Design variable", definition: "A quantity the designer is free to choose, such as a diameter, thickness or length." },
              { term: "Objective function", definition: "The merit measure (mass, cost, deflection) to be minimized or maximized over the design space." },
              { term: "Active constraint", definition: "A constraint satisfied as a strict equality at the optimum; it sets the binding limit." },
            ],
            examQuestions: [
              {
                q: "State the general form of a constrained design optimization problem, explaining design variables, the objective function, and behaviour and side constraints. Formulate the minimum-mass design of a round tie rod of length L carrying an axial load P with an allowable stress, and identify the active constraint at the optimum.",
                marks: 7,
                outline: [
                  "Write: minimize f(x) subject to g(x) ≤ 0, h(x) = 0, x_L ≤ x ≤ x_U",
                  "Define design variable, objective, behaviour and side constraint in one line each",
                  "Tie rod: variable x = d; objective mass = rho pi d^2 L / 4",
                  "Stress constraint 4P/(pi d^2) ≤ sigma_allow, rewritten as g(d) ≤ 0",
                  "Side bound d ≥ d_min from available bar stock",
                  "Solve d = sqrt(4P/(pi sigma_allow)); the stress constraint is active",
                  "Round up to standard size and re-verify every constraint",
                ],
              },
              {
                q: "Define the feasible region and an active constraint, with a two-variable sketch.",
                marks: 3,
              },
              {
                q: "Give two examples each of side constraints and behaviour constraints in machine design.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Solution methods - graphical, Lagrange multipliers and numerical search",
            body: [
              "Solution begins with classification. Two-variable problems yield to the graphical method: plot the objective contours and the constraint boundaries, and the optimum is the contour tangent to the feasible region or a corner where constraints intersect. With equality constraints and smooth functions, the method of Lagrange multipliers converts constrained minimization into root-finding: solve grad f = lambda grad g together with the constraints. The multiplier lambda then prices the constraint - it reports how much the optimum improves per unit of relaxation, which is exactly the information a design review wants.",
              "Inequality constraints need the Karush-Kuhn-Tucker (KKT) conditions: stationarity of the Lagrangian, primal feasibility, dual feasibility (multipliers non-negative) and complementary slackness (a constraint either binds or carries a zero multiplier). Numerical methods industrialize the search: sequential quadratic programming, interior-point and penalty-function methods handle large nonlinear problems, while genetic algorithms and particle swarms probe nonconvex, discontinuous spaces where gradients fail. Every iterative solver demands a sensible starting point, well-scaled variables and a stated convergence tolerance.",
              "A classic worked example: minimize the surface area of a closed box of fixed volume V. Lagrange's equations give x = y = z = V^(1/3) - the cube - and the symmetric optimum falls out of the mathematics free of charge. In practice scipy.optimize.minimize with method SLSQP and a constraints list solves the tie-rod class of problems in milliseconds; the engineering skill lies in formulating a clean objective and then trusting-but-verifying the solver with a graphical cross-check and a sensitivity read on the reported multipliers.",
            ],
            bullets: [
              "Graphical method: two variables, contours plus constraint boundaries; the optimum lands on a corner or tangent point.",
              "Lagrange multipliers: grad f = lambda grad g for equality constraints; lambda is the shadow price of the constraint.",
              "KKT conditions: extend Lagrange to inequalities - feasibility, non-negative multipliers, complementary slackness.",
              "Penalty functions: add squared-constraint penalties to f and solve unconstrained; simple but ill-conditioned at large penalties.",
              "Global versus local: gradient methods converge to the nearest optimum; multi-start or genetic search hunts the global one.",
            ],
            codeExample: {
              language: "python",
              caption: "Constrained optimization of a tie rod with scipy",
              code: `import numpy as np
from scipy.optimize import minimize

# Lightest round tie rod: mass tracks d^2
def mass(x):
    d = x[0]
    return d * d

cons = [
    # stress: 4P/(pi d^2) <= 120 MPa with P = 40 kN
    {"type": "ineq", "fun": lambda x: 120e6 - 4 * 40e3 / (np.pi * x[0] ** 2)},
    # side bound: bar stock floor of 6 mm
    {"type": "ineq", "fun": lambda x: x[0] - 0.006},
]
res = minimize(mass, x0=[0.02], constraints=cons, method="SLSQP")
print("optimal d =", round(res.x[0] * 1000, 2), "mm")`,
            },
            diagram: {
              kind: "fork",
              title: "Choosing a solution method",
              caption: "Classification first - the method follows from the problem class.",
              start: "The optimization problem is stated",
              branches: [
                { label: "Two variables, simple constraints", outcome: "Graphical contours show the optimum at a constraint corner", good: true },
                { label: "Equality constraints, smooth functions", outcome: "Lagrange multipliers: solve grad f = lambda grad g", good: true },
                { label: "Inequalities, nonlinear", outcome: "KKT conditions, or SLSQP in code - the industrial route", good: true },
                { label: "Random trial tweaking", outcome: "Stalls at a local, often infeasible, point with no sensitivity data", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Scale before you solve",
              body: "Non-dimensionalize the variables (d in metres next to stresses in pascals makes any solver sick). Scale each variable to order one, solve, then unscale - and always report the active constraints and multipliers beside the optimum, because that sensitivity table is what designers actually use.",
            },
            keyTerms: [
              { term: "Lagrange multiplier", definition: "A scalar pricing an equality constraint; it measures objective improvement per unit of constraint relaxation." },
              { term: "KKT conditions", definition: "The first-order necessary conditions for optimality with inequality constraints: stationarity, feasibility, dual feasibility, complementary slackness." },
              { term: "Penalty function", definition: "A technique that adds constraint-violation terms to the objective so an unconstrained solver can be used." },
            ],
            examQuestions: [
              {
                q: "Explain the method of Lagrange multipliers and use it to minimize the surface area of a closed rectangular box of volume 1000 cm^3. State the physical meaning of the multiplier.",
                marks: 7,
                outline: [
                  "Set up: minimize S = 2(xy + yz + zx) subject to xyz = V",
                  "Lagrangian L = S + lambda (V - xyz)",
                  "Stationarity: dS/dx - lambda yz = 0 and cyclic counterparts",
                  "Divide equations pairwise to prove x = y = z",
                  "Side = V^(1/3) = 10 cm; minimum S = 600 cm^2",
                  "lambda = dS/dV: marginal surface area per unit volume",
                  "Comment: symmetric problems deliver symmetric optima",
                ],
              },
              {
                q: "State the KKT complementary-slackness condition in words.",
                marks: 2,
              },
              {
                q: "Why do penalty-function methods become ill-conditioned at large penalty values?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Reliability fundamentals - hazard rate, MTBF and the bathtub curve",
            body: [
              "Reliability is the probability that a component performs its intended function for a stated time under stated conditions: R(t) = 1 - F(t), where F is the cumulative failure distribution and its derivative f the density. The hazard rate h(t) = f(t)/R(t) is the instantaneous failure rate of the items still surviving, and it tells a clearer story than the density alone. For repairable systems the mean time between failures (MTBF) and the ratio MTBF/(MTBF + MTTR), called availability, describe the whole operate-and-maintain cycle rather than a single life.",
              "The bathtub curve summarizes a lifetime. Hazard falls through the infant-mortality region as manufacturing defects are screened out, stays roughly constant through the useful life, and climbs in the wear-out region as fatigue, creep, wear and corrosion collect their dues. A constant hazard leads to the exponential reliability law R(t) = e^(-lambda t) with MTBF = 1/lambda - a memoryless model in which a healthy component is no better than a used one. Mechanical design lives mostly in the wear-out region, which is why aging aircraft and rotating machinery earn scheduled inspections.",
              "Numbers anchor the idea. If lambda = 1000 failures per million hours, MTBF is 1000 hours and reliability at one MTBF is e^(-1) ≈ 0.368 - the 63.2 percent failure point. Screening and burn-in flatten the early branch, derating and material upgrades flatten the late one, and scheduled overhaul replaces parts before the wear-out climb begins. Reliability targets are set at system level using the series-parallel arithmetic of Section 1.5, and per-component budgets are then allocated downward - a discipline the next two sections make quantitative.",
            ],
            bullets: [
              "Reliability R(t): probability of survival to time t; R = 1 - F.",
              "Hazard rate h(t) = f(t)/R(t): instantaneous failure rate of the survivors - the diagnostic curve.",
              "Exponential law: constant hazard gives R = e^(-lambda t) and MTBF = 1/lambda, memoryless.",
              "Bathtub curve: infant mortality, useful life, wear-out - one screen, one flat floor, one climb.",
              "Availability A = MTBF/(MTBF + MTTR): the uptime fraction for repairable systems.",
            ],
            table: {
              caption: "The four reliability quantities and how they connect.",
              headers: ["Quantity", "Formula", "Reads as"],
              rows: [
                ["Reliability R(t)", "1 - F(t)", "probability the part still works at t"],
                ["Hazard rate h(t)", "f(t) / R(t)", "instantaneous failure rate of survivors"],
                ["Exponential R", "exp(-lambda t)", "constant-hazard useful-life model"],
                ["MTBF", "1 / lambda", "mean time between failures (repairable)"],
                ["Availability A", "MTBF / (MTBF + MTTR)", "fraction of calendar time up"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The bathtub curve as a three-stage pipeline",
              caption: "Hazard rate versus time: each stage has its own physics and its own design response.",
              stages: [
                { label: "Infant mortality", note: "falling hazard - screen with burn-in and QA" },
                { label: "Useful life", note: "constant hazard - random overloads, derate" },
                { label: "Wear-out", note: "climbing hazard - fatigue, creep, wear; overhaul" },
              ],
            },
            callout: {
              type: "exam",
              title: "Label the axes",
              body: "Sketch the bathtub curve with axes labelled hazard rate against time, mark all three regions, and write the design response beside each: screening, derating, scheduled overhaul. A correctly labelled sketch with responses carries half the marks of this evergreen question.",
            },
            keyTerms: [
              { term: "Reliability", definition: "The probability that an item performs its required function for a stated period under stated conditions." },
              { term: "Hazard rate", definition: "The instantaneous failure rate of surviving items, h(t) = f(t)/R(t)." },
              { term: "MTBF", definition: "Mean time between failures of a repairable item; the reciprocal of the constant failure rate." },
            ],
            examQuestions: [
              {
                q: "Define reliability, failure density, hazard rate and MTBF, derive the relations among them, and explain the bathtub curve with a labelled sketch, giving the design response to each region.",
                marks: 7,
                outline: [
                  "R(t) = 1 - F(t); f(t) = dF/dt",
                  "h(t) = f(t)/R(t); constant hazard integrates to R = e^(-lambda t)",
                  "MTBF = integral of R dt = 1/lambda in the exponential case",
                  "Sketch hazard versus time with three labelled regions",
                  "Infant mortality - screening, burn-in, incoming quality",
                  "Useful life - random failures; derating and margin",
                  "Wear-out - fatigue, creep, wear; scheduled overhaul and inspection",
                ],
              },
              {
                q: "Distinguish MTBF and MTTF.",
                marks: 2,
              },
              {
                q: "Why is the exponential model called memoryless, and when does it fail in practice?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "The Weibull distribution for component reliability",
            body: [
              "The Weibull distribution is the workhorse of mechanical reliability because its shape parameter bends to every failure physics. The two-parameter model gives R(t) = exp(-(t/eta)^beta), where beta is the shape parameter (the Weibull modulus) and eta the scale, or characteristic life - the age at which reliability is e^(-1) ≈ 0.368. A third parameter can shift the origin to represent a guaranteed minimum life. Unlike the exponential law, Weibull hazard is not constant: it falls for beta < 1, stays flat at beta = 1, and climbs like a wear-out mechanism for beta > 1.",
              "Fitting is a plotting exercise. Take n failure or censor times, assign median ranks F_i ≈ (i - 0.3)/(n + 0.4), and plot ln ln(1/R) against ln t. Weibull data fall on a straight line: the slope is beta and the intercept yields eta. A steep line (beta between 3 and 10) means a consistent, single failure mode; a shallow or dog-legged line means mixed modes or a batch problem. Bearing life conventions quote B10 - the age at which 10 percent of the population has failed - read straight off the fitted line.",
              "Design reads beta as the physics signature. Beta below 1 flags manufacturing scatter or infant mortality; beta near 1 suggests random overloads; beta above 2 is aging - fatigue spalling, wear or creep. With beta and eta known, the mean life is eta Gamma(1 + 1/beta), and reliability targets translate into inspection intervals or replacement periods. The Weibull plot is also the fastest forensic tool after a field failure: one straight line tells whether the supplier, the design or the duty deserves the blame.",
            ],
            bullets: [
              "Two-parameter Weibull: R(t) = exp(-(t/eta)^beta); eta is the characteristic life at R = 36.8 percent.",
              "Shape beta: < 1 infant mortality, = 1 random (exponential), > 1 wear-out - the physics signature.",
              "Median-rank plotting: ln ln(1/R) against ln t is a straight line with slope beta.",
              "B10 life: the age at 10 percent failed - the bearing industry's quoted figure.",
              "Curvature or a knee in the plot means mixed failure modes - re-stratify the data before fitting.",
            ],
            codeExample: {
              language: "python",
              caption: "Weibull reliability, MTTF and B10 life",
              code: `from math import exp, gamma, log

def weibull_r(t, beta, eta):
    # R(t) = exp(-(t/eta)^beta)
    return exp(-(t / eta) ** beta)

def weibull_mtff(beta, eta):
    return eta * gamma(1 + 1 / beta)

beta, eta = 2.0, 5000.0     # wear-out shape, characteristic life in hours
print("R(1000 h) =", round(weibull_r(1000, beta, eta), 4))
print("MTTF      =", round(weibull_mtff(beta, eta), 0), "h")

# B10 life: R = 0.90  ->  t = eta * (-ln 0.90)^(1/beta)
b10 = eta * (-log(0.90)) ** (1 / beta)
print("B10 life  =", round(b10), "h")`,
            },
            diagram: {
              kind: "flow",
              title: "Fitting Weibull to failure data",
              caption: "The median-rank regression that turns a list of failure times into a design statement.",
              steps: [
                { label: "Collect failure and censor times" },
                { label: "Assign median ranks", note: "F_i = (i - 0.3)/(n + 0.4)" },
                { label: "Plot ln ln(1/R) vs ln t", note: "Weibull probability paper" },
                { label: "Fit the line", note: "slope = beta, intercept gives eta" },
                { label: "Read B10 and the beta verdict", note: "diagnose the failure physics" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorize 36.8 percent",
              body: "At t = eta the Weibull reliability is exactly e^(-1) = 0.368 - the same 36.8 that appears at one MTBF in the exponential law. Examiners love asking for that number, and quoting it with the derivation is a free mark in any Weibull question.",
            },
            keyTerms: [
              { term: "Weibull modulus", definition: "The shape parameter beta; its value identifies infant mortality, random or wear-out failure behaviour." },
              { term: "Characteristic life", definition: "The scale parameter eta - the age at which Weibull reliability equals 36.8 percent." },
              { term: "B10 life", definition: "The age at which 10 percent of a population is expected to have failed; the standard bearing-life quote." },
            ],
            examQuestions: [
              {
                q: "Write the two-parameter Weibull reliability function, explain the physical meaning of beta and eta, describe the median-rank plotting method for estimating them from failure data, and state how beta diagnoses the failure mode.",
                marks: 7,
                outline: [
                  "R(t) = exp(-(t/eta)^beta); define t, beta, eta",
                  "eta: characteristic life, R(eta) = 36.8 percent",
                  "beta regimes: below 1, equal to 1, above 1, with examples",
                  "Median ranks F_i = (i - 0.3)/(n + 0.4)",
                  "Plot ln ln(1/R) against ln t: slope beta, intercept gives eta",
                  "B10 read-off; mean life = eta Gamma(1 + 1/beta)",
                  "Curvature means mixed modes - separate the populations",
                ],
              },
              {
                q: "Define B10 life.",
                marks: 2,
              },
              {
                q: "A batch shows beta = 0.8. What does this indicate, and what action follows?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "System reliability - series, parallel and mixed configurations",
            body: [
              "Components combine into systems, and the topology decides the arithmetic. In a series system every component must work: R_sys = R1 x R2 x ... x Rn, so the system is weaker than its weakest part - five parts at 0.9 each give 0.59. In a parallel (active redundancy) system only one survivor is needed: R_sys = 1 - (1 - R1)(1 - R2)...(1 - Rn), so two 0.9 parts give 0.99 and three give 0.999. Reliability is bought with copies; cost, weight and load-sharing issues are the invoice that arrives with them.",
              "Real architectures mix the two. A 2-out-of-3 voting system works while any two of its three channels survive, and with equal channel reliabilities p its reliability follows the binomial sum over j from k to n. Series-parallel blocks are evaluated by collapsing inner parallels first, then the series chains, then repeating outward - the same reduction technique used for series-parallel spring and resistor networks. Standby redundancy, where a switch activates a spare, beats active redundancy but adds the switch's own unreliability to the ledger.",
              "Allocation closes the design loop. Given a system target, the engineer allocates component budgets: costly redundancy goes where failure is catastrophic or where single-component reliability is hard to raise, and the allocation is iterated as field data arrives. Two caveats keep the arithmetic honest. Parallel elements rarely share load equally, so a '0.999' pair may age faster than two independents. And common-cause failures - one event killing all channels, such as a shared power bus or a fire - must be separated, or the multiplication flatters the design.",
            ],
            bullets: [
              "Series: R_sys = product of R_i - the weakest-link rule; the system falls below its worst component.",
              "Parallel active redundancy: R_sys = 1 - product of (1 - R_i); copies buy nines.",
              "k-out-of-n: binomial sum over j from k to n of C(n,j) p^j (1-p)^(n-j).",
              "Block reduction: collapse inner parallel and series blocks outward, exactly like resistor networks.",
              "Common-cause failure: one event defeats all channels - separate supplies, separation, diversity.",
            ],
            codeExample: {
              language: "python",
              caption: "Series, parallel and voting-system reliability",
              code: `from math import comb

def series(r):
    out = 1.0
    for r_i in r:
        out *= r_i
    return out

def parallel(r):
    q = 1.0
    for r_i in r:
        q *= (1 - r_i)
    return 1 - q

p, n, k = 0.9, 3, 2
two_of_three = sum(comb(n, j) * p ** j * (1 - p) ** (n - j)
                   for j in range(k, n + 1))

print("three 0.9 in series  :", round(series([0.9] * 3), 4))
print("three 0.9 in parallel:", round(parallel([0.9] * 3), 4))
print("2-out-of-3 voting    :", round(two_of_three, 4))`,
            },
            diagram: {
              kind: "compare",
              title: "Series chain versus parallel redundancy",
              caption: "The two elementary topologies - multiplication versus complementation.",
              left: {
                heading: "Series - weakest link",
                items: [
                  "R_sys = R1 R2 ... Rn",
                  "system reliability below the worst component",
                  "one failure stops the system",
                  "cheap, light, no switching",
                  "improve the weakest block first",
                ],
              },
              right: {
                heading: "Parallel - graceful degradation",
                items: [
                  "R_sys = 1 - (1-R1)(1-R2)...(1-Rn)",
                  "system reliability above the best component",
                  "one failure tolerated",
                  "costly, heavy, load-sharing caveats",
                  "separate common-cause events",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Draw the block diagram first",
              body: "In mixed-configuration questions, draw the reliability block diagram before any arithmetic, collapse inner blocks outward, and state the formula at each step. Examiners allocate method marks for the reduction order even when a number slips.",
            },
            keyTerms: [
              { term: "Series system", definition: "A configuration in which all components must survive; system reliability is the product of component reliabilities." },
              { term: "Active redundancy", definition: "Parallel components all operating, so any single survivor maintains function." },
              { term: "k-out-of-n system", definition: "A system that functions when at least k of its n components survive." },
            ],
            examQuestions: [
              {
                q: "Derive the reliability expressions for series and parallel systems of n components, and evaluate a system in which two 0.95 components operate in parallel, feeding a 0.99 component in series.",
                marks: 7,
                outline: [
                  "Series: joint survival probability - the product rule",
                  "Parallel: complement of all-fail probability",
                  "Parallel block: 1 - (0.05)^2 = 0.9975",
                  "System: 0.9975 x 0.99 = 0.9875",
                  "Comment: the series element now dominates the loss budget",
                  "Sketch the reliability block diagram beside the arithmetic",
                  "Mention load-sharing and common-cause caveats",
                ],
              },
              {
                q: "Define a 2-out-of-3 system and give one engineering application.",
                marks: 3,
              },
              {
                q: "Why is a series system called the weakest-link configuration?",
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
      title: "Creep and Fatigue",
      summary:
        "The failure-mechanics unit: creep stages and the Larson-Miller extrapolation for hot service; fatigue from S-N curves, Marin corrections and notch sensitivity to cumulative damage by Miner's rule; crack growth by the Paris law; and the linear-elastic fracture mechanics of K, KIC and tolerable flaw sizes.",
      chapter: {
        number: "02",
        title: "Creep and Fatigue Design",
        intro:
          "Unit II is about time and cracks. Section 2.1 handles creep - the three-stage strain-time curve, its mechanisms, and the Larson-Miller parameter that extrapolates rupture life from short tests. Sections 2.2 and 2.3 handle fatigue: the S-N curve with its endurance limit and Marin factors, then Miner's linear damage rule for variable-amplitude spectra. Sections 2.4 and 2.5 turn to existing flaws: crack growth by the Paris law and the stress-intensity framework of K, KIC and critical crack size.",
        inOneBreath:
          "Creep: time-dependent strain above about 0.4 Tm; primary decelerating, secondary steady (the design rate), tertiary accelerating to rupture; Larson-Miller T(C + log10 t_r) with C about 20 for steels collapses rupture data onto one master curve. Fatigue: initiation, striation growth, final fast fracture; steels show an endurance limit near 0.5 Sut while aluminium never does; Marin factors ka kb kc kd ke Se' correct the specimen datum to the part. Spectra: D = sum n_i/N_i with failure at 1 - rainflow first, Goodman for mean stress. Cracks: da/dN = C(delta K)^m with delta K = Y delta sigma sqrt(pi a); fracture when K = KIC, and the tolerable flaw is a_crit = (KIC/(Y sigma))^2/pi.",
        sections: [
          {
            number: "2.1",
            title: "Creep - stages, mechanisms and the Larson-Miller parameter",
            body: [
              "Creep is time-dependent, permanent deformation under sustained load, significant when the homologous temperature exceeds roughly 0.4 of the melting point in Kelvin - steam and gas turbines, boiler tubes, exhaust valves and reactor components. A constant-stress creep test plots strain against time and shows three stages: primary creep with a decreasing rate as the material work-hardens, secondary creep at a steady minimum rate where hardening and recovery balance, and tertiary creep where necking, grain-boundary voids and oxidation accelerate the strain until rupture at time t_r.",
              "Mechanisms map onto the stages. Dislocation glide dominates at lower temperatures; climb-controlled glide and diffusion flow (Nabarro-Herring through the grains, Coble along the boundaries) carry the secondary stage; grain-boundary sliding feeds the cavitation that kills the tertiary stage. Design keys on the secondary rate: it fixes the creep strain accumulated over the service life, and components are sized so that this strain stays inside the clearances - a turbine blade growing into its casing is a creep failure even without rupture.",
              "Extrapolation uses the Larson-Miller parameter, LMP = T(C + log10 t_r), with T absolute and t_r the rupture life in hours; C is about 20 for steels. All rupture data for one material collapse onto a single master curve of stress against LMP, so short tests at high temperature predict lives of 100,000 hours at service temperature. Given a stress, read LMP off the master curve and solve for t_r - the standard boiler and turbine homework. Design margins then come from comparing the applied stress with the allowable stress taken from that master curve at the required life.",
            ],
            bullets: [
              "Creep matters above roughly 0.4 Tm (Kelvin) - turbines, boilers, exhaust valves.",
              "Three stages: primary (decelerating), secondary (steady minimum rate), tertiary (accelerating to rupture).",
              "Secondary rate sizes the part: strain over the design life must fit the running clearances.",
              "Larson-Miller: LMP = T(C + log10 t_r), C ≈ 20 for steels; master-curve extrapolation.",
              "Tertiary is design-forbidden: void coalescence and necking give no useful warning.",
            ],
            table: {
              caption: "Creep stages - behaviour, mechanism and design meaning.",
              headers: ["Stage", "Strain rate", "Dominant mechanism", "Design note"],
              rows: [
                ["Primary", "decreasing", "work hardening beats recovery", "short - usually ignored in sizing"],
                ["Secondary", "constant, minimum", "balanced glide, climb, diffusion", "sets the design strain rate"],
                ["Tertiary", "accelerating", "necking, grain-boundary voids", "end of useful life - avoid entirely"],
                ["Rupture", "very fast", "instability", "life t_r is the design output"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Creep under constant load",
              caption: "The strain-time curve every examiner expects, drawn as a sequence.",
              steps: [
                { label: "Load applied", note: "instant elastic strain" },
                { label: "Primary creep", note: "rate decreases - hardening" },
                { label: "Secondary creep", note: "steady minimum rate" },
                { label: "Tertiary creep", note: "voids and necking" },
                { label: "Rupture at t_r", note: "life from the master curve" },
              ],
            },
            callout: {
              type: "warning",
              title: "LMP units discipline",
              body: "Larson-Miller arithmetic fails when T is in Celsius or the logarithm is natural. State T in Kelvin, t_r in hours, log base 10 and C ≈ 20 for steels - then carry the units line through the exam working. One wrong unit scale moves the answer by hundreds of degrees.",
            },
            keyTerms: [
              { term: "Creep", definition: "Time-dependent permanent deformation under sustained load, significant above about 0.4 of the melting point." },
              { term: "Secondary creep rate", definition: "The steady minimum strain rate that fixes the creep strain accumulated over the design life." },
              { term: "Larson-Miller parameter", definition: "LMP = T(C + log10 t_r), a time-temperature combination that collapses rupture data onto one master curve." },
            ],
            examQuestions: [
              {
                q: "Describe the three stages of creep with a strain-time sketch, name the dominant mechanism in each stage, and explain the Larson-Miller parameter. Compute the 10,000-hour rupture temperature for a steel with LMP = 19,500 and C = 20.",
                marks: 7,
                outline: [
                  "Define creep and the homologous temperature limit of about 0.4 Tm",
                  "Sketch strain against time at constant stress; label stages and t_r",
                  "Primary: work hardening; secondary: recovery balance; tertiary: voids and necking",
                  "Design on the secondary rate and the clearance strain",
                  "LMP = T(C + log10 t_r), C ≈ 20, T in Kelvin",
                  "Worked: T = 19500/(20 + log10 10^4) = 19500/24 = 812.5 K",
                  "Master-curve use and the safety factor on stress",
                ],
              },
              {
                q: "Why must turbine blades be checked for creep even when stresses are far below yield?",
                marks: 3,
              },
              {
                q: "State two microstructural features that improve creep resistance.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Fatigue and the S-N curve - endurance limit and Marin factors",
            body: [
              "Fatigue is failure by crack growth under repeated loads, at stresses far below yield, and it accounts for the large majority of mechanical service failures. The anatomy is three-act: initiation at a stress concentration - a fillet, keyway, weld toe or machining mark - stage II growth in striations perpendicular to the maximum tensile stress, and a final fast-fracture area when the remaining ligament can no longer carry the peak load. Rotating-bending tests on polished specimens produce the S-N (Wohler) curve of stress amplitude against cycles to failure.",
              "Steels show an endurance limit Se' near 0.5 Sut: below it, life is effectively infinite. Aluminium and most other non-ferrous alloys show no true knee, so design quotes a fatigue strength at, say, 5 x 10^8 cycles. The specimen datum must then be corrected to the real component by Marin factors: surface finish ka, size kb, load type kc, temperature kd and reliability ke, giving Se = ka kb kc kd ke Se'. Stress concentrations enter separately through Kf, the fatigue notch factor, softened from Kt by the notch sensitivity q.",
              "The S-N curve splits the design world. Above about 10^3 cycles, stress-life design reads the allowable amplitude straight off the curve, interpolating on log-log axes between 10^3 cycles (roughly 0.9 Sut) and 10^6 (the endurance limit). Below 10^3, plastic strains dominate and strain-life methods take over. Shafting, springs and weldments are the classic S-N applications; the next two sections extend the curve to variable amplitudes and to parts that already contain cracks.",
            ],
            bullets: [
              "Fatigue anatomy: initiation at a notch, stage II striation growth, final fast fracture.",
              "Endurance limit Se' ≈ 0.5 Sut for steels; infinite life below it.",
              "Aluminium has no true endurance limit - quote fatigue strength at 5 x 10^8 cycles.",
              "Marin factors: Se = ka kb kc kd ke Se' - surface, size, load, temperature, reliability.",
              "Fatigue notch factor Kf = 1 + q(Kt - 1): sharp notches fully sensitive, blunt ones not.",
            ],
            table: {
              caption: "Marin correction factors - what they fix and typical magnitudes.",
              headers: ["Factor", "Corrects for", "Typical value / range"],
              rows: [
                ["ka surface", "finish versus the polished datum", "machined steel ≈ 0.8 - 0.9"],
                ["kb size", "larger sections contain larger flaws", "50 mm round bending ≈ 0.85"],
                ["kc load", "bending datum versus axial or torsion", "axial ≈ 0.85"],
                ["kd temperature", "strength shifts with temperature", "≈ 1 near room, falls when hot"],
                ["ke reliability", "scatter in the S-N population", "99 percent survival ≈ 0.81"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The stress-life design pyramid",
              caption: "Cycle count decides which regime - and which method - governs.",
              tiers: [
                { label: "Infinite life (N ≥ 10^6)", note: "design below the endurance limit Se" },
                { label: "Finite life (10^3 - 10^6)", note: "log-log interpolation on the S-N curve" },
                { label: "Low-cycle fatigue (N < 10^3)", note: "strain-life with plastic strains" },
              ],
            },
            callout: {
              type: "warning",
              title: "Aluminium has no endurance limit",
              body: "The two most punished slips: designing an aluminium part 'below the endurance limit' (there is none - quote a fatigue strength at 5 x 10^8 cycles), and applying the notch factor Kf to the strength side instead of the stress side. Kf multiplies the applied stress; Marin factors correct the strength.",
            },
            keyTerms: [
              { term: "Endurance limit", definition: "The stress amplitude below which a steel's fatigue life is effectively infinite; about half the ultimate tensile strength." },
              { term: "Marin factors", definition: "The surface, size, load, temperature and reliability corrections that scale the specimen endurance limit to the real component." },
              { term: "Fatigue notch factor", definition: "Kf = 1 + q(Kt - 1): the stress concentration effect on fatigue strength, softened by notch sensitivity." },
            ],
            examQuestions: [
              {
                q: "Sketch typical S-N diagrams for steel and aluminium, explain the endurance limit, and describe the Marin correction of the rotating-bending endurance limit. Compute Se for a machined 50 mm shaft with Se' = 300 MPa, ka = 0.85, kb = 0.85, kc = 1.",
                marks: 7,
                outline: [
                  "Axes: fully reversed stress amplitude versus cycles, log-log",
                  "Steel knee near 10^6 cycles; Se' ≈ 0.5 Sut",
                  "Aluminium keeps falling - fatigue strength at 5 x 10^8 cycles",
                  "Marin chain: Se = ka kb kc kd ke Se'",
                  "Compute: 300 x 0.85 x 0.85 = 216.75 ≈ 217 MPa",
                  "Apply Kf on the stress side, never the strength side",
                  "Conclude with the infinite-life versus finite-life decision",
                ],
              },
              {
                q: "Why does surface finish reduce fatigue strength far more than static strength?",
                marks: 3,
              },
              {
                q: "Define notch sensitivity q and its two limiting values.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Variable-amplitude loading and Miner's cumulative damage rule",
            body: [
              "Real machines rarely see constant-amplitude loading, and the Palmgren-Miner linear damage hypothesis extends S-N thinking to spectra. Each cycle block of amplitude sigma_i and count n_i consumes damage d_i = n_i / N_i, where N_i is the life at that amplitude from the S-N curve; failure is postulated when the damage sum D = sum of all d_i reaches one. Damage is treated as additive and order-independent: high loads neither harden nor soften the material for the low loads that follow.",
              "The spectrum must first be reduced to blocks. Rainflow counting extracts full cycles and half cycles from a complex history by its turning points, pairing hysteresis loops the way the material actually experiences them; the reservoir method gives the same answer as a picture. Each counted cycle is binned by amplitude, N_i is read from the S-N curve, and the damage table sums. A safe design keeps D below one with a stated margin; practical guidance often allows D between about 0.3 and 1.0 because fatigue scatter is wide.",
              "The hypothesis is crude but load-bearing. It ignores sequence effects - a single overload can blunt a crack tip and retard growth through crack closure, which is why measured Miner sums in tests scatter from below 0.5 to above 2. It also ignores mean stress, which must first be handled by a Goodman or Gerber correction before the amplitude enters the S-N curve. For exam and design purposes the recipe is fixed: rainflow the history, correct the mean stress, bin, sum, compare with one, then apply the factor of safety on life or on damage as the specification demands.",
            ],
            bullets: [
              "Miner's rule: D = sum of n_i/N_i; failure postulated when D = 1.",
              "Rainflow counting extracts cycles from random history via hysteresis loops; the reservoir method is its picture.",
              "Order independence is assumed - overload retardation and coaxing are ignored.",
              "Mean stress handled first by Goodman or Gerber, then the amplitude enters S-N.",
              "Scatter is wide: critical designs often target D ≤ 0.3 rather than D < 1.",
            ],
            codeExample: {
              language: "python",
              caption: "Miner damage sum for a three-block spectrum",
              code: `# Load spectrum after rainflow counting
spectrum = [
    (350, 2000),    # (stress amplitude MPa, cycles)
    (280, 8000),
    (200, 40000),
]
sn_life = {         # S-N life N_i at each amplitude
    350: 18000,
    280: 60000,
    200: 500000,
}

damage = 0.0
for amp, n in spectrum:
    d = n / sn_life[amp]
    damage += d
    print(amp, "MPa:", n, "/", sn_life[amp], "=", round(d, 4))

print("total damage D =", round(damage, 3))
print("verdict        :", "OK (D < 1)" if damage < 1 else "failed - redesign")`,
            },
            diagram: {
              kind: "cycle",
              title: "The Miner damage loop",
              caption: "Per block: count, read life, damage, accumulate - and compare with one.",
              steps: [
                { label: "Define load blocks", note: "rainflow-count the history" },
                { label: "Read N_i from the S-N curve", note: "at each amplitude" },
                { label: "Damage per block", note: "d_i = n_i / N_i" },
                { label: "Accumulate D", note: "sum across all blocks" },
                { label: "Compare with 1", note: "safe if D < 1, margin if D ≤ 0.3" },
              ],
            },
            callout: {
              type: "exam",
              title: "Present the damage table",
              body: "Answer Miner questions as a table with columns amplitude, n_i, N_i and n_i/N_i, then a total row and a one-line verdict with the assumptions (linear, order-independent) and two limitations. The table format itself signals competence and prevents arithmetic slips.",
            },
            keyTerms: [
              { term: "Damage ratio", definition: "The fraction of life consumed by a load block: n_i/N_i, summed across the spectrum to D." },
              { term: "Rainflow counting", definition: "A cycle-extraction algorithm that reduces a random load history into constant-amplitude blocks." },
              { term: "Load spectrum", definition: "The statistical description of stress amplitudes and counts experienced in service." },
            ],
            examQuestions: [
              {
                q: "State Miner's linear cumulative damage rule, list its assumptions and limitations, and apply it to a spectrum of 2000 cycles at 350 MPa (N = 18000) and 8000 cycles at 280 MPa (N = 60000).",
                marks: 7,
                outline: [
                  "D = sum of n_i/N_i; failure postulated at D = 1",
                  "Assumptions: linear, order-independent, constant amplitude per block",
                  "Block 1 damage: 2000/18000 = 0.111",
                  "Block 2 damage: 8000/60000 = 0.133",
                  "Total D = 0.244 - safe with margin",
                  "Limitations: sequence effects, mean stress, scatter roughly 0.5 - 2.0",
                  "Improvements: rainflow extraction plus Goodman correction first",
                ],
              },
              {
                q: "What does rainflow counting do, and why is it needed before Miner summation?",
                marks: 3,
              },
              {
                q: "Give two limitations of Miner's rule.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Crack growth and the Paris law",
            body: [
              "Once a crack exists, design switches from S-N life to crack growth rate. The Paris-Erdogan law states that per cycle the crack extends by da/dN = C (delta K)^m, where delta K is the stress-intensity range at the crack tip and C and m are material constants, with m typically 2 to 4 for metals. On log-log axes the growth curve shows a threshold delta K_th below which cracks do not grow, a straight Paris regime, and a steep final climb as K_max approaches the fracture toughness.",
              "The driving range is delta K = Y delta sigma sqrt(pi a), with Y the geometry factor and delta sigma the stress range. Integrating the Paris law from an initial size a_i to a final size a_f gives the cyclic life; with Y and delta sigma constant, the closed form is N = [a_f^(1 - m/2) - a_i^(1 - m/2)] / [(1 - m/2) C (Y delta sigma sqrt(pi))^m] for m not equal to 2. Because m exceeds 1, life is consumed disproportionately in the early, small-crack regime - halving a_i can multiply the remaining life several-fold, which is why surface finishing and NDT sensitivity are fatigue investments.",
              "This is the mathematics of inspection. Non-destructive testing bounds a_i, toughness sets a_f through a_f = (KIC/(Y sigma_max))^2 / pi, and the integrated curve of crack length against cycles schedules inspections at a stated fraction of the remaining life. Units are the classic trap: with a in metres and delta K in MPa sqrt(m), the constant C carries awkward units that change with m - always state them. Paris law plus KIC (next section) is the damage-tolerance philosophy used across aircraft structures.",
            ],
            bullets: [
              "Paris law: da/dN = C (delta K)^m, with m ≈ 2 - 4 for metals.",
              "Driving force: delta K = Y delta sigma sqrt(pi a) - geometry times stress range times crack size.",
              "Threshold delta K_th: below it cracks stay dormant - mercy for benign spectra.",
              "Life integral: most life is spent at small a; shrinking a_i pays disproportionately.",
              "Units discipline: the units of C depend on m - quote metres and MPa sqrt(m) throughout.",
            ],
            codeExample: {
              language: "python",
              caption: "Numerical integration of the Paris law",
              code: `import numpy as np

C, m = 6.9e-12, 3.0        # steel, a in m, dK in MPa sqrt(m)
Y, dsigma = 1.12, 120.0    # edge crack, stress range in MPa
a = np.linspace(0.002, 0.050, 200001)   # a_i to a_f, metres

dadn = C * (Y * dsigma * np.sqrt(np.pi * a)) ** m
# trapezoid rule on 1/(da/dN)
N = float(np.sum(0.5 * (1.0 / dadn[1:] + 1.0 / dadn[:-1]) * np.diff(a)))
print("life from 2 mm to 50 mm:", round(N), "cycles")`,
            },
            diagram: {
              kind: "flow",
              title: "From initial flaw to inspection schedule",
              caption: "The damage-tolerance pipeline built on the Paris law.",
              steps: [
                { label: "Bound a_i by NDT", note: "or assume a crack" },
                { label: "Compute delta K each cycle", note: "Y delta sigma sqrt(pi a)" },
                { label: "Integrate Paris law for a(N)", note: "life curve" },
                { label: "Set a_f from KIC", note: "a_f = (KIC/(Y sigma))^2 / pi" },
                { label: "Schedule inspections", note: "fraction of remaining life" },
              ],
            },
            callout: {
              type: "warning",
              title: "C changes with m",
              body: "The Paris constant C is not a pure number - its units are (length/cycle) divided by (stress-intensity)^m, so every change of unit system changes C. Quote C and m as a pair with their units, and never mix millimetres with metres inside one integration.",
            },
            keyTerms: [
              { term: "Crack growth rate", definition: "The crack extension per cycle, da/dN, governed in stage II by C(delta K)^m." },
              { term: "Threshold stress-intensity range", definition: "delta K_th, below which a fatigue crack remains dormant." },
              { term: "Damage tolerance", definition: "The design philosophy that assumes cracks exist and manages them with growth analysis and scheduled inspections." },
            ],
            examQuestions: [
              {
                q: "State the Paris law, explain each term, and outline the integration that yields crack-growth life N from initial crack a_i to critical a_f. Explain why reducing the initial flaw size has a disproportionate effect on life.",
                marks: 7,
                outline: [
                  "da/dN = C (delta K)^m with delta K = Y delta sigma sqrt(pi a)",
                  "Regimes: threshold, straight Paris line, fast fracture near KIC",
                  "Separate variables: dN = da / [C (Y delta sigma sqrt(pi a))^m]",
                  "Integrate a_i to a_f; closed form for constant Y and delta sigma",
                  "m > 1: early small-crack life dominates; halve a_i, life multiplies",
                  "a_f from toughness: a_f = (KIC/(Y sigma))^2 / pi",
                  "Inspection interval set at a fraction of N",
                ],
              },
              {
                q: "What is delta K_th and its design significance?",
                marks: 2,
              },
              {
                q: "Why must C and m always be quoted with their unit system?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Stress intensity factor and fracture toughness",
            body: [
              "Linear elastic fracture mechanics (LEFM) quantifies how a crack amplifies stress. Near the tip, the elastic stress field scales as sigma = K / sqrt(2 pi r), and the stress intensity factor K = Y sigma sqrt(pi a) bundles load, crack size and geometry into a single intensity. Three crack-opening modes exist - I (opening), II (in-plane shear) and III (tearing) - and mode I governs almost all design. K is a crack-driving parameter of the geometry; the material's resistance to it is the fracture toughness KIC.",
              "KIC is the critical plane-strain value at which a pre-cracked specimen fractures, measured under strict thickness and size rules; thick sections and low temperatures suppress ductility and lower the apparent toughness. The failure criterion is simply K = KIC, rearranged into a tolerable flaw size a_crit = [KIC/(Y sigma)]^2 / pi. High toughness and low design stress buy large tolerable flaws, while high strength usually costs toughness - the fundamental trade of high-strength materials. The plastic zone size r_p ≈ (K/sigma_y)^2 / (6 pi) flags where LEFM is losing validity.",
              "Design then chooses the governing criterion. A part with small flaws stressed above yield fails by plastic collapse, not fracture; a brittle material or a large flaw fails at K = KIC well below yield; and leak-before-break design ensures a through-wall crack grows stably and weeps visibly before it becomes unstable - the pressure-vessel philosophy that links this unit to Unit III. Combined with the Paris law, KIC turns NDT findings into inspection mathematics: the same triple - K, KIC and crack growth - underwrites damage-tolerant certification of aircraft structures.",
            ],
            bullets: [
              "K = Y sigma sqrt(pi a): geometry factor times stress times crack size - the driving parameter.",
              "Modes I, II and III; design is almost always mode I (opening).",
              "KIC: plane-strain fracture toughness - a material property under strict size rules.",
              "Failure criterion K = KIC; tolerable flaw a_crit = (KIC/(Y sigma))^2 / pi.",
              "Leak-before-break: a through flaw weeps visibly before it runs unstably.",
            ],
            table: {
              caption: "Geometry factors Y for common crack configurations.",
              headers: ["Configuration", "Y", "Note"],
              rows: [
                ["Centre crack, wide plate", "1.00", "the textbook datum"],
                ["Edge crack in a wide plate", "≈ 1.12", "the free surface boosts K"],
                ["Penny-shaped embedded crack", "2/pi ≈ 0.64", "deep interior flaw"],
                ["Double-edge cracked plate", "≈ 1.12 - 1.20", "two free surfaces"],
                ["Semi-elliptical surface flaw", "≈ 0.7 - 1.0", "depends on depth-to-length"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Failure mode map - yield or fracture?",
              caption: "Crack size against applied stress decides which criterion governs the design.",
              axes: { x: "applied stress (left: below yield · right: above yield)", y: "flaw size (top: small · bottom: large)" },
              quadrants: [
                { label: "Safe - inspect", note: "small flaw, low stress; track with the Paris law" },
                { label: "Yield governs", note: "small flaw, high stress; design on sigma_y" },
                { label: "Fracture governs", note: "large flaw, low stress; KIC sets a_crit" },
                { label: "Reject", note: "large flaw, high stress; resize or replace" },
              ],
            },
            callout: {
              type: "exam",
              title: "K versus KIC",
              body: "One sentence earns a standing mark: K is what the geometry and load apply to the crack; KIC is what the material can resist. Then compute a_crit = (KIC/(Y sigma))^2 / pi with the units carried through - most 7-mark fracture questions end exactly there.",
            },
            keyTerms: [
              { term: "Stress intensity factor", definition: "K = Y sigma sqrt(pi a): the crack-tip field amplitude applied by load and geometry." },
              { term: "Fracture toughness", definition: "KIC, the critical plane-strain stress intensity a material resists before fast fracture." },
              { term: "Plane strain", definition: "The thick-section constraint state under which KIC is a valid, size-independent material property." },
            ],
            examQuestions: [
              {
                q: "Define the stress intensity factor and the fracture toughness KIC, distinguish them clearly, and compute the critical crack length in a wide plate with Y = 1, sigma = 300 MPa and KIC = 60 MPa sqrt(m).",
                marks: 7,
                outline: [
                  "K = Y sigma sqrt(pi a); near-tip field sigma = K/sqrt(2 pi r)",
                  "K: applied geometry-load parameter; KIC: material resistance",
                  "Failure criterion K = KIC",
                  "a_crit = (KIC/sigma)^2 / pi = (60/300)^2 / pi",
                  "= 0.04/pi = 0.0127 m = 12.7 mm",
                  "Plane strain needs code-specified thickness; thin sheets appear tougher",
                  "Comment: with small flaws, yield governs instead of fracture",
                ],
              },
              {
                q: "Name and sketch the three crack-opening modes.",
                marks: 2,
              },
              {
                q: "What is leak-before-break, and where is the philosophy applied?",
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
      title: "Pressure Vessels and Piping",
      summary:
        "The containment unit: thin-shell membrane stresses and design thickness; Lame's equations for thick walls with their diminishing returns; compound shrink fits and autofrettage that beat those returns; the IS 2825 design-by-rule sequence from material to hydrostatic test; and the load families, expansion arithmetic and hardware of piping systems.",
      chapter: {
        number: "03",
        title: "Pressure Vessels and Piping",
        intro:
          "Unit III designs the pressure boundary. Sections 3.1 and 3.2 build the stress story - thin-cylinder membrane stresses and design thickness first, then Lame's thick-wall equations with their bore-peaked distributions. Section 3.3 engineers the residual-stress strategies (compound shrink fits, autofrettage, wire winding) that overcome thick-wall limits. Sections 3.4 and 3.5 turn to practice: the IS 2825 code sequence for unfired vessels, and the piping-side load families, thermal-expansion arithmetic and flexibility hardware.",
        inOneBreath:
          "Thin shell (t/D ≤ 1/20): hoop pD/(2t), longitudinal pD/(4t), sphere pD/(4t); thickness t = pD/(2fE) + CA. Thick wall: Lame's sigma_r = A - B/r^2 and sigma_h = A + B/r^2; the bore peaks at p(k^2 + 1)/(k^2 - 1) with k = Ro/Ri, and doubling thickness stalls as the bore peak approaches p - so pre-stress the wall: shrink-fit interference for compound cylinders, autofrettage overstrain, or wire winding. IS 2825 sequences it by rule: allowable stress, shell and head thickness, opening compensation, flanges, supports, hydrostatic test. Piping: sustained, displacement and occasional loads; delta L = alpha L delta T and F = E A alpha delta T unless loops, bellows or clever routing absorb it.",
        sections: [
          {
            number: "3.1",
            title: "Thin cylinders - membrane stresses and shell design",
            body: [
              "A thin pressure vessel is one whose wall thickness is a small fraction of the diameter - the working rule is t/D ≤ 1/20. The membrane approximation then treats the wall as a stretched skin: stress is uniform through the thickness and the radial stress (at most equal to p) is neglected against the membrane stresses. Equilibrium of a longitudinal half gives the hoop stress sigma_h = pD/(2t); equilibrium of the closed end gives the longitudinal stress sigma_l = pD/(4t). The hoop stress is therefore exactly twice the longitudinal stress, and circumferential seams are the critical welds.",
              "A spherical shell carries pD/(4t) in every direction - there is no weak seam direction, which is why storage spheres are structurally efficient. Thin-cylinder analysis also yields the elastic growth under pressure: diametral strain and volume change, which matter for liner fits and gauge studies. Design converts analysis into thickness: t = pD/(2 f E) + CA, where f is the allowable stress, E the welded joint efficiency and CA a corrosion allowance added because the code expects the wall to thin over the vessel life. Standard plate thicknesses are then selected upward from the computed minimum.",
              "The failure history of thin shells is a lesson in secondary stresses. Openings cut the hoop-carrying material, so nozzles need compensation; heads and shell junctions generate discontinuity (bending) stresses that die away within a short axial length - St. Venant's principle at work; and thin walls buckle under external pressure even when the tensile check passes comfortably. A disciplined exam answer states the assumptions (t/D limit, uniform wall), derives both membrane stresses with a labelled element sketch, and closes with the thickness decision including joint efficiency and corrosion allowance.",
            ],
            bullets: [
              "Thin-shell rule: t/D ≤ 1/20; radial stress neglected, stress uniform through the wall.",
              "Hoop stress pD/(2t); longitudinal pD/(4t) - hoop is exactly twice and governs.",
              "Sphere: pD/(4t) in every direction - no weak seam.",
              "Design thickness: t = pD/(2 f E) + CA - joint efficiency and corrosion allowance included.",
              "Secondary effects (openings, junctions, external pressure) need their own checks.",
            ],
            table: {
              caption: "Thin-shell stress summary.",
              headers: ["Geometry / quantity", "Stress or size", "Note"],
              rows: [
                ["Cylinder - hoop", "pD/(2t)", "governs the shell; critical seam"],
                ["Cylinder - longitudinal", "pD/(4t)", "half of hoop"],
                ["Sphere", "pD/(4t)", "uniform biaxial tension"],
                ["Radial stress", "|sigma_r| ≤ p", "neglected in thin theory"],
                ["Design thickness", "pD/(2 f E) + CA", "E = joint efficiency, CA = allowance"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Sizing a thin shell",
              caption: "From design pressure to selected plate in five moves.",
              steps: [
                { label: "Set design pressure", note: "with the code margin" },
                { label: "Choose material and E", note: "allowable f, joint efficiency" },
                { label: "t = pD/(2 f E) + CA", note: "minimum thickness" },
                { label: "Round to standard plate", note: "check t/D ≤ 1/20" },
                { label: "Detail heads and openings", note: "compensation, buckling checks" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the stress element",
              body: "Always draw the wall element with sigma_h circumferential and sigma_l axial, and label the free bodies used for each derivation (longitudinal half for hoop, closed end for longitudinal). The two small sketches convert a formula dump into a derivation and collect the method marks.",
            },
            keyTerms: [
              { term: "Hoop stress", definition: "The circumferential membrane stress in a pressurized shell; pD/(2t) for a thin cylinder." },
              { term: "Joint efficiency", definition: "The strength fraction of a welded seam, reducing the allowable stress in the thickness formula." },
              { term: "Corrosion allowance", definition: "Extra thickness added so the vessel stays code-compliant after expected thinning in service." },
            ],
            examQuestions: [
              {
                q: "Derive the hoop and longitudinal stresses in a thin cylindrical shell with labelled sketches, and design the thickness for D = 1 m, p = 2 MPa, f = 100 MPa, E = 0.85 and CA = 2 mm. Verify the thin-shell assumption.",
                marks: 7,
                outline: [
                  "Assumption t/D ≤ 1/20; free-body sketches of both halves",
                  "Hoop: equilibrium of the longitudinal half gives pD/(2t)",
                  "Longitudinal: end-cap equilibrium gives pD/(4t)",
                  "t = pD/(2 f E) + CA = (2 x 1000)/(2 x 100 x 0.85) + 2",
                  "= 11.76 + 2 = 13.76 mm, select 14 mm plate",
                  "Check t/D = 14/1000 = 0.014 ≤ 0.05 - thin theory valid",
                  "Circumferential seam governs since hoop = 2 x longitudinal",
                ],
              },
              {
                q: "Why is the hoop stress twice the longitudinal stress in a thin cylinder?",
                marks: 3,
              },
              {
                q: "Write the stress in a thin spherical vessel and comment on its efficiency versus a cylinder.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Thick cylinders and Lame's equations",
            body: [
              "When t/D exceeds about 1/20 the radial stress is no longer a bit player: it varies from -p at the bore to zero outside and reaches magnitudes comparable to the allowable. Lame's solution for a thick cylinder under axisymmetric pressure assumes that plane cross-sections remain plane and that stresses depend only on the radius. Equilibrium of an annular element, together with displacement compatibility, integrates to sigma_r = A - B/r^2 and sigma_h = A + B/r^2, with the constants A and B fixed by the pressure boundary conditions at the two surfaces.",
              "For internal pressure p only, the constants give a maximum hoop stress at the bore of sigma_h = p (k^2 + 1)/(k^2 - 1), with k = Ro/Ri, alongside a compressive radial stress peaking at -p; both decay across the wall. The maximum shear stress by Tresca is tau_max = p k^2/(k^2 - 1), also at the bore. The sobering lesson is the limit: as k grows without bound the bore hoop stress falls only towards p - doubling the wall does not double the pressure capability, which is why plain thick walls stall and the compound strategies of the next section exist.",
              "The Tresca or von Mises criterion converts the stress pair into an equivalent stress for ductile vessel steels, and the allowable-pressure formula follows once f is chosen. Numerically, the distribution matters to fatigue and crack initiation: the bore sees the peak, so surface finish, cold work or an induced compressive residual stress at the bore are the cheapest strength upgrades available. Lame's arithmetic also transfers directly to press and shrink fits, where the interface pressure is computed from exactly these equations - the bridge to Section 3.3.",
            ],
            bullets: [
              "Thick wall when t/D > 1/20: radial stress counts and varies through the wall.",
              "Lame: sigma_r = A - B/r^2 and sigma_h = A + B/r^2; constants from pressure boundary conditions.",
              "Bore peak: sigma_h = p(k^2 + 1)/(k^2 - 1) with k = Ro/Ri; sigma_r = -p at the bore.",
              "Tresca shear at the bore: tau_max = p k^2/(k^2 - 1).",
              "Diminishing returns: as k grows without bound the bore hoop only approaches p.",
            ],
            codeExample: {
              language: "python",
              caption: "Lame stress distribution across a thick wall",
              code: `Ri, Ro, p = 0.10, 0.20, 20.0    # radii in m, pressure in MPa
B = p * Ri ** 2 * Ro ** 2 / (Ro ** 2 - Ri ** 2)
A = B / Ro ** 2                  # from sigma_r(Ro) = 0

print(" r(m)   sigma_r   sigma_h   (MPa)")
for r in (Ri, 0.15, Ro):
    s_r = A - B / r ** 2
    s_h = A + B / r ** 2
    print(round(r, 2), round(s_r, 2), round(s_h, 2))
# bore hoop 33.3 MPa, outer hoop 13.3 MPa - peak at the bore`,
            },
            diagram: {
              kind: "flow",
              title: "Lame's solution route",
              caption: "How the thick-wall stress field is built from equilibrium and compatibility.",
              steps: [
                { label: "Equilibrium of an annular element" },
                { label: "Assume stresses depend on r alone", note: "plane sections stay plane" },
                { label: "Integrate", note: "A ± B/r^2 pattern appears" },
                { label: "Apply pressure BCs", note: "sigma_r(Ri) = -p, sigma_r(Ro) = 0" },
                { label: "Evaluate the bore peak", note: "check Tresca at the bore" },
              ],
            },
            callout: {
              type: "warning",
              title: "Sign of the constants",
              body: "The classic slip is swapping A and B so the bore hoop stress comes out compressive. Sanity anchor: internal pressure must put the bore into hoop tension, with sigma_r = -p at the bore and zero outside. If your sketch shows the opposite, the constants are flipped - check against that anchor before proceeding.",
            },
            keyTerms: [
              { term: "Lame's equations", definition: "The thick-wall stress solution sigma_r = A - B/r^2, sigma_h = A + B/r^2 for axisymmetric pressure." },
              { term: "Radial stress", definition: "The through-wall compressive stress, running from -p at the bore to zero at the outer surface." },
              { term: "Maximum shear criterion", definition: "Tresca's yield rule; for a thick wall it peaks at the bore as p k^2/(k^2 - 1)." },
            ],
            examQuestions: [
              {
                q: "Derive Lame's equations for a thick cylinder under internal pressure, sketch the stress distribution across the wall, and compute the bore and outer-surface hoop stresses for Ri = 100 mm, Ro = 200 mm and p = 20 MPa.",
                marks: 7,
                outline: [
                  "Assumptions: axisymmetry, plane sections, stresses functions of r",
                  "Element equilibrium: d(sigma_r)/dr = (sigma_h - sigma_r)/r",
                  "Integrate with compatibility to the A ± B/r^2 forms",
                  "Boundary conditions sigma_r(Ri) = -p and sigma_r(Ro) = 0 give A, B",
                  "Bore: sigma_h = 20(4 + 1)/(4 - 1) = 33.3 MPa; outer: 13.3 MPa",
                  "Tresca at bore: tau_max = 20 x 4/3 = 26.7 MPa",
                  "Sketch: hoop peaks at bore and decays; radial runs -p to 0",
                ],
              },
              {
                q: "Why does increasing wall thickness beyond a point stop helping a plain thick cylinder?",
                marks: 3,
              },
              {
                q: "Write the Tresca maximum shear stress at the bore of a thick cylinder under internal pressure.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Compound cylinders, shrink fits and autofrettage",
            body: [
              "Lame's diminishing returns have an engineered answer: pre-stress the wall so the bore starts in compression. In a compound (shrink-fit) cylinder the outer shell is heated, slipped over the inner and allowed to cool; the diametral interference produces an interface pressure that compresses the bore and tensions the outer surface before a single pascal of working pressure is applied. When the working pressure arrives, its Lame stresses superpose on the residual pattern, the bore peak is much lower, and the wall material works far more uniformly.",
              "Design arithmetic is superposition. The interference delta for given radii and interface pressure p' comes from radial displacement compatibility of the two cylinders, using Lame's equations with E and nu for each material. Sum the shrink stresses and the pressure stresses pointwise across both walls; the combined maximum shear is then compared with the criterion at each critical radius. The ideal design equalizes the maximum shear in the inner and outer cylinders - balanced usage of both materials - a classic optimization with one elegant answer.",
              "Autofrettage achieves the same residual pattern without a second cylinder: the bore is pressurized beyond yield - often to an overstrain of 30 to 70 percent of the wall - so a plastic layer forms; on unloading, the elastic outer layers squeeze the yielded zone into residual compression. Gun barrels, common-rail fuel accumulators and hypercompressor cylinders are autofrettaged in production. Wire winding wraps tensioned wire over the bore to the same end. All three routes trade manufacturing complexity for pressure capability that plain geometry simply cannot deliver.",
            ],
            bullets: [
              "Goal: residual compression at the bore before working pressure is ever applied.",
              "Shrink fit: interference creates interface pressure p' and a compressive bore residual.",
              "Superposition: shrink stresses plus pressure stresses, checked at both walls.",
              "Ideal compound design equalizes the maximum shear in the inner and outer cylinders.",
              "Autofrettage: self-induced residual stress by over-pressurizing past yield, then unloading.",
            ],
            table: {
              caption: "Bore-stress strategies compared.",
              headers: ["Strategy", "Bore stress pattern", "Typical use"],
              rows: [
                ["Single thick wall", "peak tension at bore, decaying outward", "low to moderate pressure"],
                ["Compound shrink fit", "residual compression cancels part of the peak", "very high pressure, gun barrels"],
                ["Autofrettage", "self-induced compression by overstrain", "common rail, hypercompressors"],
                ["Wire winding", "outer wrap pre-compresses the wall", "large or long vessels"],
                ["Multilayer welded", "several thin shells shrunk together", "large process vessels"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The superposition stack",
              caption: "How a compound cylinder earns its extra pressure - three stress stories layered.",
              layers: [
                { label: "Shrink-fit residual", note: "bore compression, outer tension" },
                { label: "Working pressure", note: "bore tension peak (Lame)" },
                { label: "Combined pattern", note: "peaks cancel at the bore" },
                { label: "Result", note: "higher safe pressure, uniform wall usage" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch the three curves",
              body: "The 7-mark compound-cylinder answer is three superposed hoop-stress curves - shrink only, pressure only, combined - with the bore value arrowed on each. Practise drawing them in one pass; the sketch demonstrates the entire concept faster than any paragraph of algebra.",
            },
            keyTerms: [
              { term: "Interference fit", definition: "An assembly whose diametral overlap generates contact pressure after assembly." },
              { term: "Interface pressure", definition: "The contact pressure between shrunk cylinders that creates the residual stress field." },
              { term: "Autofrettage", definition: "Deliberate over-pressurization past yield so elastic springback leaves the bore in residual compression." },
            ],
            examQuestions: [
              {
                q: "Explain with stress-distribution sketches why a compound cylinder can carry more pressure than a single wall of the same total thickness, and describe the autofrettage process and its applications.",
                marks: 7,
                outline: [
                  "Single wall: bore peak with the Lame limit toward p",
                  "Compound: interference creates p' - bore compression, outer tension",
                  "Superpose working pressure: the peaks cancel at the bore",
                  "Sketches: shrink-only, pressure-only, combined distributions",
                  "Design aim: equal maximum shear in both cylinders",
                  "Autofrettage: press past yield, unload, elastic springback compresses the bore",
                  "Applications: gun barrels, common-rail accumulators, hypercompressors",
                ],
              },
              {
                q: "Define autofrettage in two lines.",
                marks: 2,
              },
              {
                q: "State the design objective when proportioning a two-layer compound cylinder.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Pressure vessel design to IS 2825",
            body: [
              "IS 2825 is the Indian code for unfired pressure vessels - the design-by-rule playbook that turns shell theory into tabulated formulas, allowable stresses and mandatory checks. Its logic runs: pick a material from the permitted grades; look up the allowable stress, which already embeds the safety factors on tensile and yield data; then size each element - cylindrical shell, heads, flat covers, nozzles - by closed-form rules; then repair the damage that openings cause through compensation (reinforcement) rules; detail flanges and gaskets from standard tables; and close with supports and a hydrostatic proof test.",
              "The cylindrical-shell rule is thin-cylinder arithmetic in code clothing: the allowable stress f and the welded joint efficiency E both enter the denominator, and where tube holes riddle the shell, a ligament efficiency replaces E. Ligaments are what remain of the wall between rows of holes, and their efficiency measures how much hoop-carrying metal survives. Joint efficiency itself depends on weld type and the extent of radiographic inspection - double-welded butt joints with full radiography earn the highest E, which is why inspection grade and wall thickness trade against each other in real designs.",
              "Heads complete the geometry: flat covers are thick and cheap; torispherical and ellipsoidal heads trade depth for thickness; hemispherical heads are the thinnest and deepest. Openings: the code demands that the metal removed near a hole be replaced - by excess wall, a reinforcement pad or a thickened nozzle neck - within a defined compensation zone. The hydrostatic test at the code multiple of design pressure (around 1.3 times) proves workmanship and gross sizing, not fine stress. Documentation - drawings, calculation sheets, material certificates, weld records - is part of the deliverable, because vessels are legal artefacts.",
            ],
            bullets: [
              "Design by rule: tabulated allowable stresses with built-in safety factors.",
              "Shell thickness: allowable f and joint (or ligament) efficiency E both in the denominator.",
              "Heads: flat (thick, cheap), torispherical, ellipsoidal, hemispherical (thin, deep).",
              "Openings: compensation rule - replace the removed metal within the reinforcement zone.",
              "Hydrostatic test near 1.3 x design pressure, plus a full documentation trail.",
            ],
            table: {
              caption: "The IS 2825 design sequence as a checklist.",
              headers: ["Code item", "Typical check", "Bites when"],
              rows: [
                ["Shell thickness", "code formula with weld joint efficiency", "seam quality is overestimated"],
                ["Head thickness", "flat versus dished formulas differ widely", "flat heads turn out brutally thick"],
                ["Openings", "removed metal replaced (compensation)", "nozzle lands near a seam"],
                ["Supports", "saddle or skirt plus local shell stresses", "thin shells wrinkle at saddles"],
                ["Hydrostatic test", "test at the code multiple of design p", "leaks and gross errors surface here"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The IS 2825 design stack",
              caption: "Each layer of the code builds on the one below it.",
              layers: [
                { label: "Materials and allowable stress", note: "permitted grades, embedded safety factors" },
                { label: "Shell and head thickness", note: "design-by-rule formulas" },
                { label: "Openings and reinforcement", note: "compensation area rule" },
                { label: "Flanges, gaskets, bolting", note: "standard tables" },
                { label: "Supports and hydrostatic test", note: "with full documentation" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sequence is the answer",
              body: "A code question is answered as an ordered list: design conditions, material and allowable stress, shell thickness, head selection, opening compensation, flanges, supports, hydrostatic test - one line of 'what and why' each. Closing with the role of joint efficiency and the compensation rule shows the two ideas examiners most want named.",
            },
            keyTerms: [
              { term: "Design-by-rule", definition: "Code design through prescribed formulas and tabulated allowables rather than detailed analysis." },
              { term: "Ligament efficiency", definition: "The fraction of wall remaining between rows of holes, replacing joint efficiency in perforated shells." },
              { term: "Compensation of openings", definition: "The code requirement to replace, within a reinforcement zone, the metal removed by an opening." },
            ],
            examQuestions: [
              {
                q: "Outline the design sequence for a coded unfired pressure vessel per IS 2825 from material selection to hydrostatic test, explaining the role of joint efficiency and the compensation rule for openings.",
                marks: 7,
                outline: [
                  "Design conditions: pressure, temperature, corrosion allowance, volume",
                  "Material grade and the code allowable stress f",
                  "Shell and head thickness rules; head-type trade-offs",
                  "Joint efficiency E and its dependence on weld type and radiography",
                  "Nozzle openings: compensation area rule and pad design",
                  "Flanges and gaskets from standards; supports and saddle stresses",
                  "Hydrostatic test and the documentation package",
                ],
              },
              {
                q: "Why must vessel openings be compensated?",
                marks: 3,
              },
              {
                q: "Why is a flat head much thicker than a dished head of the same diameter?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Piping systems - loads, thermal expansion and supports",
            body: [
              "Piping fails from loads the pressure calculation never sees. The sustained set - internal pressure plus the dead weight of pipe, fluid and insulation - is carried by hangers and guides. The displacement set is thermal: a restrained steel run grows by delta L = alpha L delta T, and if both ends are anchored the growth converts into an axial compressive force F = E A alpha delta T. For a modest 30 m run of 6 inch pipe with an 80 C rise, that is about 29 mm of growth and an anchor force of roughly 700 kN - enough to crush gaskets and lift equipment off its feet. Occasional loads add wind, seismic and relief-thrust events, and pump vibration adds the fatigue dimension.",
              "The mitigation toolbox is geometric. Expansion loops (U-bends) and natural L-routing convert axial growth into gentle bending of the pipe itself, cutting anchor forces by orders of magnitude; bellows expansion joints absorb growth with near-zero force but demand guides and pressure-thrust anchors; cold spring pre-stretches the line at erection to centre the stress range about zero. Spring hangers carry weight while following thermal movement, anchors fix points, and guides prevent the line from buckling sideways. Analysis software classifies stresses as sustained, displacement and occasional, each with its own allowable.",
              "Design order matters: route for flexibility first, then compute. A straight anchor-to-anchor run is the enemy, and one or two bends usually solve the problem without any hardware. Where equipment nozzles limit loads, their allowable forces and moments come from the equipment standard, and the piping is soft-landed onto the nozzle. Water hammer and acoustic resonance close the picture with dynamic checks. For the exam, the anchor-force arithmetic (alpha, E, A, delta T) plus a labelled expansion-loop sketch answers most questions.",
            ],
            bullets: [
              "Sustained loads: internal pressure plus dead weight of pipe, fluid and insulation.",
              "Thermal: delta L = alpha L delta T; restrained force F = E A alpha delta T.",
              "Expansion loops and L-routing convert growth into gentle bending - the cheapest fix.",
              "Bellows joints need guides and pressure-thrust anchors; cold spring centres the range.",
              "Stress classes: sustained, displacement and occasional - separate allowables for each.",
            ],
            codeExample: {
              language: "python",
              caption: "Thermal growth and the fully restrained anchor force",
              code: `alpha, E = 12e-6, 200e9     # per deg C, Pa
L, dT = 30.0, 80.0          # m, deg C
D, t = 0.1683, 0.00711      # 6 in sch 40: OD and wall, m
A = 3.1416 * (D - t) * t    # cross-section area, m^2

dL_mm = alpha * L * dT * 1000        # free expansion, mm
F_kN = E * A * alpha * dT / 1000     # restrained anchor force
print("free expansion =", round(dL_mm, 1), "mm")
print("anchor force   =", round(F_kN), "kN")
# ~29 mm of growth; ~690 kN if the run cannot breathe`,
            },
            diagram: {
              kind: "fork",
              title: "A straight restrained run heats up",
              caption: "What the piping designer can do with 29 mm of unwanted growth.",
              start: "30 m run, delta T = 80 C, both ends anchored",
              branches: [
                { label: "Leave it straight and stiff", outcome: "Anchor force near 700 kN; gaskets crushed, equipment overloaded", good: false },
                { label: "Add an expansion loop (U-bend)", outcome: "Growth becomes gentle bending; anchor forces drop to a few kN", good: true },
                { label: "Fit a bellows expansion joint", outcome: "Near-zero anchor load, but guides and thrust anchors become mandatory", good: true },
                { label: "Re-route with natural L-bends", outcome: "Cheap - the geometry itself supplies the flexibility", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Compute the anchor force before trusting gaskets",
              body: "Students routinely quote delta L and forget F = E A alpha delta T. Run the number once: a few hundred kilonewtons is the norm for long restrained runs. That single figure justifies every expansion loop you will ever draw, and examiners ask for it explicitly.",
            },
            keyTerms: [
              { term: "Thermal expansion stress", definition: "The stress produced when restrained piping is heated; governed by E alpha delta T." },
              { term: "Expansion loop", definition: "A U-shaped bend that absorbs thermal growth through bending flexibility." },
              { term: "Spring hanger", definition: "A support that carries pipe weight while permitting thermal movement." },
            ],
            examQuestions: [
              {
                q: "Classify the loads on a process piping system, derive the anchor force for a fully restrained straight run of 30 m steel pipe (alpha = 12e-6, E = 200 GPa, A = 3600 mm^2) with delta T = 80 C, and describe three mitigation strategies with sketches.",
                marks: 7,
                outline: [
                  "Classes: sustained, displacement (thermal), occasional, plus dynamic",
                  "delta L = alpha L delta T = 28.8 mm of free growth",
                  "F = E A alpha delta T = 200e9 x 3.6e-3 x 12e-6 x 80 ≈ 690 kN",
                  "Mitigation 1: expansion loop - flexibility replaces force",
                  "Mitigation 2: bellows joint - near-zero force, needs guides and thrust anchors",
                  "Mitigation 3: natural routing / cold spring",
                  "Sketch: anchored straight run versus looped run with force arrows",
                ],
              },
              {
                q: "Why do bellows expansion joints need guides?",
                marks: 3,
              },
              {
                q: "What is a spring hanger and where is it used?",
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
      title: "IC Engine Components",
      summary:
        "The engine-hardware unit: piston, connecting rod, crankshaft, flywheel and valve gear - each reduced to its loads, its classical checks and its failure modes, from crown thickness and skirt thrust to two-plane rod buckling, crank fillets, turning-moment energy and valve spring surge.",
      chapter: {
        number: "04",
        title: "IC Engine Components",
        intro:
          "Unit IV sizes the moving heart of the engine. Section 4.1 designs the piston - crown, barrel, bosses and skirt - against gas load and heat flux. Section 4.2 treats the connecting rod as a strut in two planes, with the Ixx = 4 Iyy design condition as its centrepiece. Section 4.3 walks the crankshaft's pin, web and journal checks, fillet fatigue and balancing. Section 4.4 converts the turning-moment diagram into flywheel inertia and rim mass. Section 4.5 times the breathing with the valve gear and its float and surge limits.",
        inOneBreath:
          "Piston: seal, transmit, conduct - crown bending and heat flux, hoop barrel, pin bearing pressure, skirt thrust N = F tan(phi), ovality against seizure. Rod: compression, inertia tension and whipping; pinned X-X (Le = L) and fixed Y-Y (Le = L/2) buckling equalized by Ixx = 4 Iyy; big-end bolts preloaded past the inertia load. Crank: pin bending between webs, journal torsion, web cantilever, fillet fatigue (roll the fillets), counterweights for rotating plus about half the reciprocating mass, torsional damper. Flywheel: Cs = (omega1 - omega2)/omega, delta E from the TMD running integral, I = deltaE/(omega^2 Cs), rim mass m = I/R^2 with peripheral speed capped. Valve gear: cam-to-valve chain, rocker ratio, spring force against float at overspeed, surge above the cam harmonics, exhaust valve alloys.",
        sections: [
          {
            number: "4.1",
            title: "Piston design",
            body: [
              "The piston seals the combustion chamber, takes the gas load, and pumps heat out of the chamber - three jobs at once. Aluminium alloys dominate (low density, thermal conductivity about three times that of cast iron), with cast iron or steel rings, and composite or steel crowns in heavy engines. The design elements: the crown, which resists gas-pressure bending and conducts the heat flux; the barrel and ring lands, which carry hoop pressure and seat the rings; the pin bosses, which react the pin load; and the skirt, which carries side thrust and keeps the piston aligned in the liner.",
              "Loads drive the checks. Peak gas pressure p bends the crown like a flat plate and loads the barrel in hoop; the thrust reaction N ≈ F tan(phi) presses the skirt against the liner with an allowable bearing pressure as the criterion; the pin bears on its bosses with a permitted pressure on the projected area. Heat flows crown to rings to liner to coolant (partly through the skirt and oil splash), so crown thickness is a thermal decision as much as a strength one: too thick stores heat and raises crown temperature, too thin burns through and cracks.",
              "Failure modes read like a design checklist: crown burning and thermal cracking (heat), ring-land collapse (pressure), pin-boss cracking (bearing pressure plus fit), skirt scuffing and seizure (thrust, ovality, thermal expansion) and piston slap (clearance control). The design answers follow directly: crown thickness from bending plus a thermal gradient limit, adequate boss length, skirt ovality and coatings, and clearances sized for the operating temperature. In the exam, answer in the fixed order: gas force, crown check, hoop check, thrust and bearing check, thermal sanity.",
            ],
            bullets: [
              "Three functions: seal the gas, transmit the force, conduct the heat.",
              "Crown: gas-pressure bending plus heat flux - thickness is thermal as well as structural.",
              "Skirt: side thrust N ≈ F tan(phi) on the projected area, with ovality against seizure.",
              "Pin boss: bearing-pressure check on the projected pin area.",
              "Heat path: crown to rings to liner to coolant; aluminium helps threefold over iron.",
            ],
            table: {
              caption: "Piston elements - governing load and check.",
              headers: ["Element", "Governing load", "Check"],
              rows: [
                ["Crown", "gas pressure bending + heat flux", "crown thickness for stress and gradient"],
                ["Barrel / ring land", "gas pressure hoop", "wall thickness, groove strength"],
                ["Pin boss", "pin bearing pressure", "boss length and pin diameter"],
                ["Skirt", "side thrust N ≈ F tan(phi)", "bearing area, ovality, scuffing margin"],
                ["Ring pack", "radial pressure + gas flow", "ring width, tension, oil control"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The piston load path",
              caption: "From gas pressure to the liner and coolant in five hops.",
              steps: [
                { label: "Gas pressure on the crown" },
                { label: "Crown bending + heat into the rings", note: "structural + thermal" },
                { label: "Pin load through the bosses" },
                { label: "Side thrust on the skirt", note: "N = F tan(phi)" },
                { label: "Liner and coolant carry it away" },
              ],
            },
            callout: {
              type: "exam",
              title: "Answer in load order",
              body: "Structure every piston answer as: functions and materials, then crown (bending plus thermal), then barrel hoop, then pin-boss bearing, then skirt thrust and ovality, closing with the heat path sketch. That order mirrors the examiner's mark scheme and prevents omissions under time pressure.",
            },
            keyTerms: [
              { term: "Piston crown", definition: "The gas-loaded top face of the piston, sized for bending stress and heat conduction." },
              { term: "Skirt", definition: "The load-bearing cylindrical section that carries side thrust against the liner." },
              { term: "Pin boss", definition: "The reinforced hubs that carry the piston pin's bearing load." },
            ],
            examQuestions: [
              {
                q: "List the functions and materials of a piston, describe the loads on the crown, barrel, pin bosses and skirt, and outline the design checks for each including the thermal path.",
                marks: 7,
                outline: [
                  "Functions: seal the gas, transmit the force, conduct the heat",
                  "Materials: aluminium alloys and why; cast iron and steel variants",
                  "Crown: bending under p plus thermal gradient; thickness decision",
                  "Barrel and lands: hoop load and ring seating",
                  "Bosses: pin bearing pressure criterion on the projected area",
                  "Skirt: thrust bearing pressure, ovality, running clearance",
                  "Heat path sketch: crown to rings to liner to coolant",
                ],
              },
              {
                q: "Why are pistons made oval rather than perfectly round?",
                marks: 3,
              },
              {
                q: "Why do modern designs prefer floating piston pins?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Connecting rod design",
            body: [
              "The connecting rod converts reciprocating piston motion into crank rotation and lives under conflicting loads: a near-axial compressive peak close to the gas-force maximum, an axial tension near TDC from inertia, and transverse inertia bending (whipping) as the rod swings. It is designed as a strut - a column carrying compression with an eccentric, fluctuating load - plus a beam for whipping, plus two bearings at its small and big ends. Forged steel is the default; the section between the ends is an I-section, deep in the plane of rotation to fight bending where it is worst.",
              "The two-plane buckling trick defines the section. In the plane of rotation (about X-X) the rod is treated as pinned at both ends: effective length L, critical load pi^2 E Ixx/L^2. In the perpendicular plane (about Y-Y) the rod is treated as fixed-fixed: effective length L/2, critical load 4 pi^2 E Iyy/L^2. Sizing the I-section so that Ixx ≈ 4 Iyy makes both planes buckle at the same load - the section becomes simultaneously optimal in both directions, which is exactly why the profile is deeper than it is wide.",
              "Ends and fasteners complete the design. The small end is a bushing boss; the big end splits into rod and cap joined by two bolts whose preload must exceed the inertia load so the joint never separates - bolt fatigue from under-preloading is the classic field failure. The cap sees bending; the rod bolts are sized on the inertia load at TDC with a generous factor, and the joint faces are serrated or tongue-and-grooved so the bolts carry no shear. The full check list: Euler or Rankine loads in both planes, whipping bending stress, bearing pressures at both ends, bolt preload and cap stiffness.",
            ],
            bullets: [
              "Loads: gas compression, inertia tension near TDC, and whipping (transverse inertia) bending.",
              "Plane X-X: pinned-pinned ends, Le = L, Euler load with Ixx.",
              "Plane Y-Y: fixed-fixed ends, Le = L/2, Euler load with Iyy.",
              "Design condition Ixx ≈ 4 Iyy: both planes equally strong - hence the deep I-section.",
              "Big-end bolts: preload beyond the inertia load so the joint never breathes; fatigue-critical.",
            ],
            codeExample: {
              language: "python",
              caption: "Two-plane buckling check for a connecting rod",
              code: `import numpy as np

L, E = 0.30, 207e9            # rod length m, steel Pa
Ixx, Iyy = 5.2e-8, 1.3e-8     # m^4 with Ixx = 4 * Iyy
P = 45e3                      # peak compressive load, N

def euler_cr(I, Le):
    return np.pi ** 2 * E * I / Le ** 2

Pcr_xx = euler_cr(Ixx, L)         # pinned-pinned, in plane
Pcr_yy = euler_cr(Iyy, L / 2)     # fixed-fixed, across plane
print("Pcr about x-x:", round(Pcr_xx / 1000), "kN")
print("Pcr about y-y:", round(Pcr_yy / 1000), "kN")
print("FoS against P:", round(Pcr_xx / P, 1))
# equal critical loads: the Ixx = 4 Iyy condition works`,
            },
            diagram: {
              kind: "compare",
              title: "Buckling in the two rod planes",
              caption: "Why the I-section is proportioned so that Ixx = 4 Iyy.",
              left: {
                heading: "About X-X (in the plane of rotation)",
                items: [
                  "end condition: pinned-pinned",
                  "effective length Le = L",
                  "bending stiffness Ixx (large - flanges apart)",
                  "Pcr = pi^2 E Ixx / L^2",
                  "whipping bending also acts in this plane",
                ],
              },
              right: {
                heading: "About Y-Y (perpendicular)",
                items: [
                  "end condition: fixed-fixed",
                  "effective length Le = L/2",
                  "bending stiffness Iyy (one quarter of Ixx)",
                  "Pcr = 4 pi^2 E Iyy / L^2",
                  "equal strength when Ixx = 4 Iyy",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The Ixx = 4 Iyy derivation",
              body: "This is the most frequently asked rod question: equate pi^2 E Ixx/L^2 with 4 pi^2 E Iyy/L^2 and cancel - the condition Ixx = 4 Iyy falls out in two lines. Practise it with the end-condition sketches; the pair of sketches plus the cancellation is the whole answer.",
            },
            keyTerms: [
              { term: "Whipping stress", definition: "Transverse inertia bending stress induced in the rod as it swings about the crank centre." },
              { term: "Effective length", definition: "The column length adjusted for end fixity: L for pinned-pinned, L/2 for fixed-fixed." },
              { term: "Big-end bolts", definition: "The cap fasteners sized on inertia load and preloaded so the split joint never separates." },
            ],
            examQuestions: [
              {
                q: "Explain the loads on a connecting rod and its design as a strut in two perpendicular planes, deriving the condition Ixx = 4 Iyy for its I-section, and list the checks on the big end and its bolts.",
                marks: 7,
                outline: [
                  "Loads: gas compression, inertia tension at TDC, whipping bending",
                  "Plane X-X: pinned ends, Le = L, Pcr = pi^2 E Ixx / L^2",
                  "Plane Y-Y: fixed ends, Le = L/2, Pcr = 4 pi^2 E Iyy / L^2",
                  "Equate the two: Ixx = 4 Iyy - equal strength in both planes",
                  "Sketch the I-section with both axes marked",
                  "Big end: cap bending; bolts sized on inertia, preload greater than load",
                  "Check list: buckling, whipping, bearing pressures, bolt fatigue",
                ],
              },
              {
                q: "Why is the connecting-rod section an I rather than a solid rectangle?",
                marks: 3,
              },
              {
                q: "Why must big-end bolts be preloaded beyond the inertia load?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Crankshaft design",
            body: [
              "The crankshaft turns reciprocating thrust into torque while being a stiff, well-balanced, fatigue-proof beam. Its anatomy: main journals ride in the block; crank pins (rod journals) carry the connecting rods; webs connect journals to pins; and counterweights oppose the rotating masses plus a chosen fraction of the reciprocating ones. Each firing event bends the pin between the webs, twists the journal train with the torque pulse, and hammers the bearings - three simultaneous actions concentrated at the fillets, exactly where stress concentration lives.",
              "Checks follow the loads. Pin and journal diameters come from bearing pressure (load on projected area) and from torsional shear combined with bending; web proportions (thickness and width) come from bending plus direct compression acting on the web as a short cantilever; fillet radii come from fatigue, because nearly all crank failures initiate at pin or journal fillets - hence fillet rolling, induction hardening and generous radii as the manufacturing levers. Torsional vibration closes the design: the shaft train has torsional natural frequencies that firing harmonics can excite, so viscous or tuned-rubber dampers and the flywheel's inertia set the margin.",
              "Balancing: counterweights cancel the rotating inertia of the pins and webs and, conventionally, about half the reciprocating mass, leaving residual primary and secondary forces to be handled by the engine arrangement - inline fours shake at secondary order while sixes and twelves largely self-cancel. Manufacturing routes: forged steel for volume (grain flow follows the fillets), machined billet for low-volume premium parts, and cast iron for cost-sensitive designs. In the exam, answer in the order: loads, pin and web checks, fillet fatigue, balancing, torsional damper.",
            ],
            bullets: [
              "Anatomy: main journals, crank pins, webs, counterweights.",
              "Pin and journal diameter: bearing pressure plus combined bending and torsion.",
              "Web: short cantilever under the pin load - thickness and width checks.",
              "Fillet fatigue: stress concentration; fight it with radii, rolling and hardening.",
              "Torsional vibration: natural frequencies against firing harmonics - dampers and flywheel inertia.",
            ],
            table: {
              caption: "Crankshaft checks - load basis and design lever.",
              headers: ["Check", "Load basis", "Design lever"],
              rows: [
                ["Pin bearing", "peak gas force on projected area", "pin diameter x length"],
                ["Journal bearing", "mean plus alternating loads", "journal diameter, oil film"],
                ["Web bending", "pin load on the web cantilever", "web thickness and width"],
                ["Torsion", "torque pulse through the journals", "journal diameter, overlap"],
                ["Fillet fatigue", "stress concentration at radii", "large radii, rolling, nitriding"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From firing pressure to crank geometry",
              caption: "The crankshaft design sequence.",
              steps: [
                { label: "Gas force becomes pin load" },
                { label: "Pin bends between the webs", note: "flat cantilever action" },
                { label: "Torque pulse twists the journals" },
                { label: "Size pin and journal", note: "bearing pressure + shear" },
                { label: "Counterweights and fillet checks", note: "balance + fatigue close it" },
              ],
            },
            callout: {
              type: "tip",
              title: "Fillets are the whole story",
              body: "When in doubt about what fails a crankshaft, answer 'the fillets'. Quote the mechanism - bending plus torsion cycling at the stress concentration - and the two cures: geometric (bigger radii, undercut fillets) and mechanical (fillet rolling, induction hardening for compressive residual stress). That pairing earns the applied-knowledge marks.",
            },
            keyTerms: [
              { term: "Counterweight", definition: "A mass on the web opposing rotating and part of the reciprocating inertia to balance the crank." },
              { term: "Torsional vibration", definition: "Angular oscillation of the shaft train excited by firing harmonics near its natural frequencies." },
              { term: "Fillet rolling", definition: "Cold-rolling the journal fillets to impart compressive residual stress and fatigue life." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of a crankshaft and the forces acting on the crank pin and web during firing, and outline the design checks including fatigue and torsional-vibration considerations.",
                marks: 7,
                outline: [
                  "Anatomy sketch: journal, pin, web, counterweight",
                  "Firing: the pin load bends between webs; torque twists the journals",
                  "Pin check: bearing pressure on projected area; combined stress",
                  "Web check: bending plus compression as a short cantilever",
                  "Fillets: Kt concentration; rolling and hardening as levers",
                  "Counterweights: rotating plus about half the reciprocating mass",
                  "Torsional damper and flywheel inertia close the design",
                ],
              },
              {
                q: "Why are crankshaft fillets rolled?",
                marks: 2,
              },
              {
                q: "What do counterweights balance, and why only part of the reciprocating mass conventionally?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Flywheel design",
            body: [
              "The flywheel is an energy buffer. Between firing pulses the engine torque swings wildly, and the flywheel's inertia keeps the speed inside a band set by the coefficient of fluctuation Cs = (omega_1 - omega_2)/omega_mean. The turning-moment diagram plots torque against crank angle over one full cycle; the mean-torque line divides it into energy given out above and taken back below; and the maximum fluctuation of energy delta E is the largest cumulative swing - E_max minus E_min of the running integral of (T - T_mean). The governing relation is then I = delta E / (omega^2 Cs).",
              "For a rim-type flywheel almost all the inertia lives in the rim (I ≈ m R^2, with R the mean rim radius), so the required rim mass follows once R is chosen; hub and spokes contribute little but must transmit the torque. The rim is also a rotating ring under centrifugal stress sigma ≈ rho v^2, so peripheral speed is capped by material - conservative practice for cast iron sits around 25 to 30 m/s, with steel allowing more - and burst is the failure mode to respect. Disc flywheels and dual-mass flywheels (which additionally filter torsional pulses from the driveline) are the modern variants.",
              "Numerically the method is table- or software-driven: sample torque every few degrees of crank rotation, integrate (T - T_mean) cumulatively, read delta E as the range of the running sum, then pick Cs from the application - 0.002 to 0.005 for generators, looser for crude machinery - and compute I. A quick hand check: the areas of the TMD above and below the mean line must balance over the cycle, and delta E must equal the largest gap between them. The exam version is exactly this pipeline with a given turning-moment diagram.",
            ],
            bullets: [
              "Cs = (omega1 - omega2)/omega_mean - the speed-fluctuation budget the application sets.",
              "delta E = E_max - E_min of the cumulative (T - T_mean) integral on the turning-moment diagram.",
              "I = delta E/(omega^2 Cs); for a rim flywheel I ≈ m R^2, so the rim mass follows.",
              "Rim stress sigma ≈ rho v^2 caps peripheral speed; burst is the failure mode to respect.",
              "Application sets Cs: generators tight (0.002-0.005), punch presses and crude machinery loose.",
            ],
            codeExample: {
              language: "python",
              caption: "From torque samples to flywheel rim mass",
              code: `import numpy as np

theta = np.linspace(0, 4 * np.pi, 721)      # one four-stroke cycle
T = 90.0 * np.sin(0.5 * theta) ** 8 - 24.6  # N.m, mean near zero
Tmean = T.mean()

# cumulative trapezoid of (T - Tmean)
net = np.concatenate([[0.0], np.cumsum(
    np.diff(theta) * ((T - Tmean)[1:] + (T - Tmean)[:-1]) / 2)])
deltaE = net.max() - net.min()

N, Cs, R = 1800, 0.03, 0.40                 # rpm, Cs, rim radius m
omega = N * np.pi / 30
I = deltaE / (omega ** 2 * Cs)
print("deltaE =", round(deltaE), "J")
print("I      =", round(I, 3), "kg m^2")
print("rim m  =", round(I / R ** 2, 1), "kg")`,
            },
            diagram: {
              kind: "cycle",
              title: "Energy around a four-stroke cycle",
              caption: "The flywheel alternately stores and returns energy through the four strokes.",
              steps: [
                { label: "Suction", note: "small torque demand - flywheel gives energy" },
                { label: "Compression", note: "large demand - flywheel gives more" },
                { label: "Expansion (power)", note: "big pulse - flywheel stores energy" },
                { label: "Exhaust", note: "small demand - flywheel gives again" },
              ],
            },
            callout: {
              type: "exam",
              title: "The running-integral method",
              body: "Do not eyeball the TMD areas: tabulate angle and torque, integrate (T - T_mean) cumulatively, and report delta E as max minus min of that column. The method earns full marks on a diagram you have never seen before, and it is immune to the area-guessing slips that cost half the class their flywheel marks.",
            },
            keyTerms: [
              { term: "Coefficient of fluctuation", definition: "The permitted fractional speed swing (omega1 - omega2)/omega over one cycle." },
              { term: "Turning-moment diagram", definition: "Torque plotted against crank angle over a cycle; the source of the energy fluctuation." },
              { term: "Maximum fluctuation of energy", definition: "delta E, the range of the cumulative integral of (T - T_mean) over the cycle." },
            ],
            examQuestions: [
              {
                q: "Define the coefficient of fluctuation of speed and the maximum fluctuation of energy, derive I = deltaE/(omega^2 Cs), and design the rim mass for delta E = 1800 J, N = 1800 rpm, Cs = 0.03 and R = 0.4 m.",
                marks: 7,
                outline: [
                  "Define Cs and delta E from the TMD running integral",
                  "Energy balance: delta E = I omega^2 Cs - derive",
                  "omega = 2 pi N/60 = 188.5 rad/s",
                  "I = 1800/(188.5^2 x 0.03) = 1.69 kg m^2",
                  "Rim mass m = I/R^2 = 1.69/0.16 = 10.6 kg",
                  "Check rim stress: v = omega R = 75 m/s - flag cast iron, prefer steel",
                  "Comment: hub and spokes add only a few percent",
                ],
              },
              {
                q: "Why is most flywheel mass placed in the rim?",
                marks: 2,
              },
              {
                q: "What does a dual-mass flywheel achieve that a single mass cannot?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Valve gear - valves, springs, cams and rockers",
            body: [
              "The valve gear times the breathing. The chain runs camshaft lobe to tappet (and pushrod in OHV engines) to rocker arm to valve, with the spring closing the valve and keeping the whole train in contact at speed. The design variables: the lift law (profile smoothness - acceleration, not lift, is the limit), the rocker ratio, spring force and natural frequency, valve head geometry, seat angle (commonly 45 deg), stem diameter, and materials - hardenable martensitic alloys for intake, austenitic or nickel superalloys for exhaust, with sodium cooling and face coatings for heavy duty.",
              "At high speed the enemy is valve float: the decelerating valve demands more force than the spring can supply, the train separates, and the valve lands uncontrolled - so the spring must be sized for the overspeed condition, not just rated speed. The spring's natural frequency must also sit well above the cam's significant harmonics to avoid surge, which pushes designers toward variable-pitch or dual springs and lightweight valves and retainers. The rocker is a short beam with a boss - bending plus contact at both ends - and the cam-lobe contact is a rolling-sliding Hertzian contact that pits when the oil film or the radius of curvature is poor.",
              "Timing is the system-level view: the valve-timing diagram (suction, compression, power and exhaust events against crank angle, with overlap near TDC) trades volumetric efficiency against idle quality and emissions. Wear modes: seat recession (especially on LPG and CNG fuels), face guttering, stem scuffing, guide wear and tip wear. The checks to quote in an answer: float margin at overspeed, surge margin against cam harmonics, rocker bending and boss bearing, seat and face contact stress, guide bearing pressure, and cam contact stress. In the exam, a labelled sketch of the chain plus these checks is the complete answer.",
            ],
            bullets: [
              "Kinematic chain: cam to tappet (to pushrod) to rocker to spring-closed valve.",
              "Valve float: spring force below the deceleration demand - separation and bounce at overspeed.",
              "Spring surge: natural frequency must clear the cam harmonics - dual or variable-pitch springs.",
              "Exhaust valves demand austenitic or superalloy material, hard seats, sometimes sodium cooling.",
              "Timing diagram: overlap trades volumetric efficiency against idle quality and emissions.",
            ],
            table: {
              caption: "Valve gear elements - failure mode and design lever.",
              headers: ["Element", "Failure mode", "Design lever"],
              rows: [
                ["Valve head", "thermal + seating impact", "head thickness, 45 deg seat angle"],
                ["Seat insert", "wear and recession", "hard-facing alloy selection"],
                ["Valve spring", "surge and fatigue", "natural frequency vs cam harmonics"],
                ["Rocker arm", "bending and boss wear", "section modulus, ratio"],
                ["Cam lobe", "contact fatigue (pitting)", "curvature radius, oil film"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The valve train as a kinematic chain",
              caption: "Each stage transforms the cam's lift into flow, and each has its own failure mode.",
              stages: [
                { label: "Cam lobe", note: "profile defines the lift law" },
                { label: "Tappet and pushrod", note: "translate the lift" },
                { label: "Rocker arm", note: "lever ratio multiplies lift" },
                { label: "Valve spring", note: "closes; must not surge" },
                { label: "Valve and seat", note: "seal the combustion" },
              ],
            },
            callout: {
              type: "warning",
              title: "Springs are sized at overspeed",
              body: "The standard slip is designing the valve spring at rated speed. Engines briefly overspeed, and float margin is defined there: compute the required force from the valve mass times the cam's peak deceleration at maximum speed, then add margin. A spring that is fine at 6000 rpm can float at 6500.",
            },
            keyTerms: [
              { term: "Valve float", definition: "Loss of contact in the valve train at high speed when spring force falls below the deceleration demand." },
              { term: "Spring surge", definition: "Resonant vibration of the valve spring excited by cam harmonics near its natural frequency." },
              { term: "Valve overlap", definition: "The crank angle period near TDC when both valves are partly open, aiding scavenging." },
            ],
            examQuestions: [
              {
                q: "Sketch the valve gear of a poppet-valve engine, explain the function of each element, and discuss the design requirements of the valve spring including surge and valve float.",
                marks: 7,
                outline: [
                  "Labelled sketch: cam, tappet, pushrod, rocker, valve, spring, guide, seat",
                  "One-line function for each element",
                  "Spring duty: close the valve and keep contact through deceleration",
                  "Float: required force = m x a at overspeed; margin calculation",
                  "Surge: natural frequency above cam harmonics; remedies",
                  "Materials: intake versus exhaust valve alloys",
                  "Check list: rocker bending, seat stress, guide pressure, cam contact",
                ],
              },
              {
                q: "What is valve overlap and why is it used?",
                marks: 3,
              },
              {
                q: "Why are exhaust valves made of a different alloy than intake valves?",
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
      title: "FEA and Design Case Studies",
      summary:
        "The digital-design unit: the FEA pipeline from discretization and shape functions to K u = F; meshing strategy, quality metrics and convergence; boundary conditions and the verification ladder; topology optimization disciplined by DFM and DFA; and two case studies - automotive and aerospace - that show the whole workflow end to end.",
      chapter: {
        number: "05",
        title: "FEA and Design Case Studies",
        intro:
          "Unit V is the modern toolkit. Section 5.1 builds the FEA pipeline - discretization, element stiffness, assembly and solution - with a two-spring model you can run by hand. Section 5.2 polishes meshing: element families, quality gates, refinement and the convergence study. Section 5.3 disciplines boundary conditions and result verification. Section 5.4 adds topology optimization and the DFM/DFA pass that turns a load-path sketch into a production part. Section 5.5 closes with automotive and aerospace case studies that reuse everything from Units I to IV.",
        inOneBreath:
          "FEA: divide into elements joined at nodes, interpolate with shape functions, assemble K u = F, constrain, solve, recover stress - the two-spring model runs the whole loop by hand. Meshing: tet10 over tet4, hex where sweepable, shells for thin walls; refine where gradients live; sharp corners and point loads are singularities; converge on the quantity of interest, not the picture. Verify: reactions equal loads, the deformed shape is sane, a hand calc is close, the mesh is converged; validate against test. Optimize: minimize compliance at a volume fraction, interpret to clean CAD, pass DFM and DFA, re-verify. Case studies: one spine from road-load spectra to certification, whatever the industry.",
        sections: [
          {
            number: "5.1",
            title: "FEA fundamentals - discretization and the stiffness route",
            body: [
              "Finite element analysis cuts a continuum into pieces - elements joined at nodes - assumes a simple displacement field inside each element through shape functions, and enforces equilibrium via the principle of minimum potential energy or virtual work. Element stiffness matrices assemble into a global system K u = F; boundary conditions remove rigid-body motion; the solver returns nodal displacements u; strains follow from displacement gradients and stresses from the constitutive law. The spring analogy makes the entire pipeline transparent, and every commercial solver still walks these same five steps.",
              "Element families map onto geometry: truss and beam elements (1D) for frames and shafts; plane-stress, plane-strain and axisymmetric 2D elements for flat or revolved parts; shells for thin-walled structures; and 3D tetrahedra or hexahedra for complex solids. Each node carries the degrees of freedom its element family defines - translations, plus rotations for beams and shells. Choosing the family is the first and most consequential modelling decision: a shell model of a vessel is hundreds of times cheaper than a solid model of the same vessel, and an axisymmetric model of a Lame cylinder is almost free.",
              "A two-spring example fixes the mechanics. Two springs in series (k1, k2), fixed at one end and pulled at the other, assemble into a 3x3 global stiffness matrix; deleting the fixed row and column and solving the remaining 2x2 system gives both free displacements, and multiplying K by u recovers the reaction - which must equal the applied load, the first check of any analysis. The same loop - assemble, constrain, solve, recover - scales unchanged to a million elements, which is why the discipline of the tiny model transfers exactly to the industrial one.",
            ],
            bullets: [
              "Pipeline: discretize, element stiffness from shape functions, assemble K u = F, solve, recover stress.",
              "Element families: 1D truss and beam, 2D plane and axisymmetric, shell, 3D solid - match to geometry.",
              "Nodes carry degrees of freedom; element-family choice is the biggest cost and accuracy lever.",
              "Boundary conditions remove rigid-body motion; loads enter through F.",
              "The two-spring model reproduces every step - learn it by hand once.",
            ],
            codeExample: {
              language: "python",
              caption: "A two-spring FEA in numpy",
              code: `import numpy as np

k1, k2 = 2000.0, 3000.0        # N/mm springs in series
K = np.zeros((3, 3))
for k, (i, j) in ((k1, (0, 1)), (k2, (1, 2))):
    ke = k * np.array([[1, -1], [-1, 1]])
    K[np.ix_([i, j], [i, j])] += ke

# node 0 fixed; 500 N pulls node 2
free = [1, 2]
u = np.zeros(3)
u[free] = np.linalg.solve(K[np.ix_(free, free)], [0.0, 500.0])
R = K @ u
print("u1, u2      =", np.round(u[1:], 4), "mm")
print("reaction R0 =", round(R[0], 1), "N  (equilibrium check)")`,
            },
            diagram: {
              kind: "layers",
              title: "The FEA stack",
              caption: "Top layer is what you touch; every layer below is enforced mathematics.",
              layers: [
                { label: "Pre-processing", note: "geometry, mesh, materials, loads" },
                { label: "Element stiffness", note: "shape functions, virtual work" },
                { label: "Assembly", note: "global K and F" },
                { label: "Solution", note: "K u = F after boundary conditions" },
                { label: "Post-processing", note: "displacements, stresses, checks" },
              ],
            },
            callout: {
              type: "tip",
              title: "Reactions first, always",
              body: "The first number to inspect in any FEA result is not stress - it is the reaction sum. If reactions do not match applied loads, loads or constraints are wrong and everything downstream is fiction. This habit, learned on the two-spring model, scales to every industrial run.",
            },
            keyTerms: [
              { term: "Node", definition: "A connection point between elements where degrees of freedom are solved." },
              { term: "Shape function", definition: "The interpolation that describes displacement inside an element from nodal values." },
              { term: "Stiffness matrix", definition: "The assembled system K relating nodal displacements to nodal forces." },
            ],
            examQuestions: [
              {
                q: "Explain the finite element method in machine design - discretization, shape functions, assembly and solution - and illustrate with two springs in series (k1 = 2000, k2 = 3000 N/mm) fixed at one end and pulled by 500 N at the other, solving for displacements and the reaction.",
                marks: 7,
                outline: [
                  "Idea: divide, assume fields per element, enforce equilibrium",
                  "Element stiffness of a spring: k[[1,-1],[-1,1]]",
                  "Assembly into the 3x3 global K; sketch node numbering",
                  "Apply the fixed boundary condition; solve the 2x2 system",
                  "u1 = 0.25 mm, u2 = 0.4167 mm for the given numbers",
                  "Reaction R = K u gives -500 N - the equilibrium check",
                  "Comment: the identical loop runs any size model",
                ],
              },
              {
                q: "When is an axisymmetric model valid?",
                marks: 3,
              },
              {
                q: "What degrees of freedom does a beam element carry?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Meshing - element choice, quality and convergence",
            body: [
              "A mesh is a hypothesis: it states where the solution is allowed to be complex. Element choice trades cost against accuracy - linear tets are cheap but notoriously stiff (use quadratic tet10 instead), hexahedra are accurate where you can sweep them, and shells and beams collapse dimensionality where the physics permits. Quality metrics police the geometry: aspect ratio near one, low skewness, a positive Jacobian, no warped faces - because each element's shape functions assume a well-shaped parent element mapped onto the physical shape.",
              "Density follows the gradients. Fillets, holes, weld toes and contact patches need local refinement; quiet regions deserve coarse elements - a uniformly fine mesh is money burned. Singularities lurk: point loads, point restraints and perfectly sharp re-entrant corners produce stresses that climb without limit as elements shrink, so the professional fix is to model the real radius or spread the load over a small patch. Convergence is then proved by a study: refine h-wise or raise order p-wise until the quantity of interest - a peak stress, a stiffness, a natural frequency - moves less than a few percent.",
              "Averaged (nodal) stress contours are a presentation convenience that can hide peaks: unaveraged (element) contours that look like patchwork are the honest view, and a large nodal-to-element gap is discretization error made visible. A hot spot that appears exactly at a point load or restraint is a modelling artefact, not a stress. Defeaturing removes fillets that do not matter - but never the one that carries the peak. The professional habit: mesh, refine locally, publish the convergence table, and report the number on the mesh it converged on, not the prettiest picture.",
            ],
            bullets: [
              "Element choice: tet10 over tet4; hex where sweepable; shells and beams to cut degrees of freedom.",
              "Quality gates: aspect ratio, skewness, Jacobian, warpage - reject ugly elements.",
              "Refine where gradients live: fillets, holes, contacts - never uniformly everywhere.",
              "h-refinement shrinks elements; p-refinement raises order; both must be shown to converge.",
              "Sharp corners, point loads and point restraints are singularities - model a radius or a patch instead.",
            ],
            table: {
              caption: "Element selection guide.",
              headers: ["Element family", "Best use", "Watch-outs"],
              rows: [
                ["Beam / bar (1D)", "long frames, shafts", "only as good as its end releases"],
                ["Shell", "thin-walled tanks, panels", "needs a clean midsurface"],
                ["Plane 2D", "flat brackets of uniform thickness", "plane stress versus plane strain choice"],
                ["Axisymmetric", "pressure vessels, Lame problems", "no out-of-plane loads allowed"],
                ["Solid (hex / tet)", "complex 3D parts", "tet4 is too stiff - use tet10"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "The fillet stress is not converging",
              caption: "The four moves - two professional, two fatal.",
              start: "Peak stress keeps changing as the mesh refines",
              branches: [
                { label: "h-refine locally at the fillet", outcome: "Error falls quickly in the hot zone only - the default professional fix", good: true },
                { label: "p-refine: raise element order", outcome: "Same degrees of freedom buy accuracy on smooth geometry", good: true },
                { label: "Refine everything uniformly", outcome: "Ten times the cost for one percent of gain outside the hot zone", good: false },
                { label: "Trust the smooth averaged contour", outcome: "Averaging hides the peak; the reported fatigue life is fiction", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Averaged contours lie",
              body: "Nodal-averaged stress plots spread each element's share over its neighbours and can erase a peak at a fillet or a weld toe. Always check the unaveraged (element) contour before signing off a stress: if the two pictures disagree strongly, the mesh - not the part - still needs work.",
            },
            keyTerms: [
              { term: "Aspect ratio", definition: "The longest element edge divided by the shortest; near one is healthy, above about five is suspect." },
              { term: "h-refinement", definition: "Convergence by reducing element size in the regions of high gradient." },
              { term: "Convergence study", definition: "Refinement iterations tracking a quantity of interest until it changes by less than a few percent." },
            ],
            examQuestions: [
              {
                q: "Discuss meshing strategy in FEA - element selection, quality metrics, mesh density and singularity avoidance - and describe a convergence study with the criterion for stopping.",
                marks: 7,
                outline: [
                  "Family choice by geometry and dimensionality",
                  "tet4 is too stiff - use tet10; hex and shell advantages",
                  "Quality metrics with target values (aspect, skew, Jacobian)",
                  "Local refinement at gradients; the cost argument",
                  "Singularities: point loads, sharp notches; their remedies",
                  "Convergence: monitor the quantity of interest; stop under about 5 percent change",
                  "Averaged versus unaveraged contours as a diagnostic",
                ],
              },
              {
                q: "Distinguish h- and p-refinement.",
                marks: 2,
              },
              {
                q: "Why should a point load on a 3D mesh not be trusted?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Boundary conditions, loads and result verification",
            body: [
              "Boundary conditions are where analyses are won or quietly lost. A fixed support is infinitely stiff - rarely true of any real interface. Symmetry must be exact: on a mirror plane of a solid, normal displacement is fixed and tangential motion stays free; exploiting symmetry cuts model size by half or more. Loads can be forces (concentrated - singularity risk on solids), pressures (safe and realistic), prescribed displacements (robust when the load path stiffness is uncertain) or bolt preloads. St. Venant's principle forgives boundary-condition crudeness at a distance of roughly one characteristic dimension, so load introductions may be idealized if the region of interest sits far enough away.",
              "Verification asks whether we solved the equations right; validation asks whether we solved the right equations. The verification ladder, rung by rung: check units, materials and properties; confirm that reactions equal applied loads (equilibrium); animate the deformed shape and ask whether the structure moves as it should; compare the displacement magnitude with a hand estimate; check that the peak stress sits at the expected feature rather than at an artefact; and demonstrate mesh convergence of the reported quantity. Validation then compares against a physical test or measured strains.",
              "Over-constraint is the classic silent error: fixing both supports of a structure that in reality expands stiffens it and mis-loads the real load path - every redundant constraint manufactures fictitious strength. Contacts and bolted joints add their own pathologies - penetration, chattering, and load transfer through fringes of nodes. Documentation - assumptions, idealizations, the boundary-condition rationale and the convergence evidence - is what turns a colourful plot into an engineering record. For the exam: define verification versus validation, list the ladder in order, and give one over-constraint example with its consequence.",
            ],
            bullets: [
              "Boundary types: fixed, displacement, contact and symmetry (normal fixed, tangential free).",
              "Over-constraint stiffens the model and hides the real load path - the silent error.",
              "Prefer pressure and distributed loads; point loads on solids are singular.",
              "St. Venant: boundary-condition detail fades about one characteristic dimension away.",
              "Verification = solved the equations right; validation = solved the right equations, against test.",
            ],
            table: {
              caption: "The result-verification checklist.",
              headers: ["Check", "Pass criterion"],
              rows: [
                ["Reaction sum", "equals applied loads within about 1 percent"],
                ["Deformed shape", "moves the way the part physically should"],
                ["Displacement magnitude", "same order as the hand estimate"],
                ["Peak stress location", "at the known hot spot, not at a load artefact"],
                ["Mesh convergence", "quantity of interest moves under about 5 percent on refinement"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The verification ladder",
              caption: "Climb in order - no rung may be skipped before signing off.",
              steps: [
                { label: "Check units, materials, contacts" },
                { label: "Reactions versus applied loads", note: "equilibrium" },
                { label: "Animate the deformed shape", note: "does it make sense" },
                { label: "Compare with a hand formula", note: "same order of magnitude" },
                { label: "Show mesh convergence", note: "under about 5 percent drift" },
                { label: "Sign off with documented assumptions" },
              ],
            },
            callout: {
              type: "tip",
              title: "The deformed-shape animation",
              body: "Two minutes of animating the deformed shape catches more errors than any single number: reversed loads, forgotten constraints and upside-down pressure all show up as motion that 'looks wrong'. Train the eye - it is the cheapest verification tool in the entire pipeline.",
            },
            keyTerms: [
              { term: "Over-constraint", definition: "Adding restraints the real structure does not have, stiffening the model and mis-loading the load path." },
              { term: "St. Venant's principle", definition: "The differences caused by load idealization die away within about one characteristic dimension." },
              { term: "Validation", definition: "Confirming the model represents reality by comparison with physical test data." },
            ],
            examQuestions: [
              {
                q: "Explain the boundary conditions used in FEA, the risk of over-constraint, and the difference between verification and validation. Describe a step-by-step result-verification procedure for a static structural analysis.",
                marks: 7,
                outline: [
                  "Boundary types with examples; symmetry rules",
                  "Over-constraint example: both-ends-fixed beam with thermal growth",
                  "St. Venant's one-dimension distance rule",
                  "Verification: reactions, deformed shape, hand calc, convergence",
                  "Validation: correlation with test and strain gauges",
                  "The ladder listed in order with pass criteria",
                  "Documentation as the deliverable",
                ],
              },
              {
                q: "Why must the sum of reactions equal the applied loads?",
                marks: 2,
              },
              {
                q: "State the symmetry boundary condition on a mirror plane of a 3D solid.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Topology optimization with DFM and DFA",
            body: [
              "Topology optimization answers a blunt question: given a design space, loads and fixtures, where should the material live? The algorithm removes low-stiffness material to minimize compliance (equivalently, maximize stiffness) subject to a volume or mass fraction, with extra constraints - symmetry, draw direction, minimum member size - that keep the result manufacturable. The output is a load-path sketch in grey density; the engineer redraws it as clean CAD, and the redrawn part is then verified by conventional FEA, because the optimized blob is a mathematical suggestion, not a drawing.",
              "Design for manufacture (DFM) and design for assembly (DFA) discipline the redesign. DFM asks: fewest parts, standard materials and stock, process-appropriate shapes - draft angles for casting, generous radii for forging, tool access for machining, build direction and support strategy for additive. DFA, in the Boothroyd-Dewhurst tradition, scores parts on handling (symmetry, size, freedom from tangling) and on insertion (self-locating, no re-orientation needed); the DFA index is the theoretical minimum part count divided by the actual part count. Each eliminated fastener removes cost at every stage - purchase, storage, assembly and inspection.",
              "Additive manufacturing unlocked the genre commercially: lattices, organic load paths and consolidated assemblies that casting could never produce are now printable, and aerospace brackets and automotive suspension parts routinely land 30 to 60 percent lighter than the machined baseline. The loop closes with a design-for-X pass and a re-analysis: optimize, interpret, DFM/DFA, verify, iterate. In the exam, the workflow sketch - design space to optimized layout to interpreted CAD to verified part - plus one worked example is the complete answer.",
            ],
            bullets: [
              "Topology optimization: minimize compliance at a volume fraction, with manufacturing constraints.",
              "The output is a load-path sketch - interpret it into clean CAD, then re-verify with FEA.",
              "DFM: part count, standardization and process-appropriate geometry (draft, radii, build direction).",
              "DFA: handling and insertion scores; DFA index = minimum part count / actual part count.",
              "AM unlocked the genre: lattices and organic paths, 30-60 percent mass cuts in practice.",
            ],
            table: {
              caption: "Design-for-X scorecard.",
              headers: ["Focus", "Key question", "Lever"],
              rows: [
                ["DFM - part count", "can two parts become one?", "integrate, delete fasteners"],
                ["DFM - process", "cast, forge, machine or print?", "draft angles, radii, tool access"],
                ["DFA - handling", "can it be grasped and fed easily?", "symmetry, no tangling"],
                ["DFA - insertion", "does it self-locate?", "chamfers, poka-yoke features"],
                ["DFR - reliability", "where does it fail first?", "redundancy, inspection plan"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The optimized design loop",
              caption: "Optimization, interpretation, manufacture discipline and verification - until both mass and margin hold.",
              steps: [
                { label: "Define design space", note: "loads, fixtures, keep-out zones" },
                { label: "Run topology optimization", note: "compliance target at a mass fraction" },
                { label: "Interpret load paths into CAD", note: "clean-up, symmetry" },
                { label: "DFM and DFA pass", note: "draft, min members, part count" },
                { label: "Verify the real part with FEA", note: "then iterate" },
              ],
            },
            callout: {
              type: "tip",
              title: "Interpret, then re-verify",
              body: "The single most common professional slip is reporting stress on the raw optimization output. The grey blob is not the part. Once geometry is redrawn - with fillets, uniform sections and real features - the stress state changes, and the verified number belongs to the redrawn CAD, never to the density plot.",
            },
            keyTerms: [
              { term: "Topology optimization", definition: "Material distribution in a design space that minimizes compliance subject to a volume constraint." },
              { term: "Compliance", definition: "The strain-energy measure minimized as the stiffness objective in topology optimization." },
              { term: "DFA index", definition: "Theoretical minimum part count divided by actual part count; a measure of assembly efficiency." },
            ],
            examQuestions: [
              {
                q: "Describe the topology optimization workflow in structural design, including the role of manufacturing constraints, and explain how DFM and DFA principles are applied when converting the result into a production part.",
                marks: 7,
                outline: [
                  "Define design space, keep-out zones, loads and fixtures",
                  "Objective: minimize compliance; constraint: volume fraction",
                  "Manufacturing constraints: symmetry, draw direction, min member size",
                  "Interpretation: load paths to CAD cleanup to re-analysis",
                  "DFM: process choice, draft, radii, tolerances",
                  "DFA: part-count reduction, self-locating features",
                  "Worked example: bracket about 40 percent lighter, then verified",
                ],
              },
              {
                q: "What is compliance as an objective function?",
                marks: 2,
              },
              {
                q: "State two DFA guidelines for part handling.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Case studies - automotive and aerospace design",
            body: [
              "Case studies compress the whole course into one workflow: loads, concepts, analysis, optimization, validation. An automotive suspension control arm starts from road-load spectra - pothole, braking, cornering and curb-strike events recorded over instrumented miles - which set the load-case matrix; the concept is a forging or casting in steel or aluminium; topology and shape optimization trim the mass; fatigue life is verified against the spectra with Miner damage; and the part is tooled for volume production, where per-unit cost rules every decision.",
              "Aerospace turns the dials the other way: volumes are small, mass is money forever (fuel burn over decades), and the certification basis - static strength, fatigue and damage tolerance with mandated inspections - shapes everything. A pylon or wing fitting is machined from forged Ti-6Al-4V or 7075 plate; KIC and Paris-law data (Unit II) set the inspectable flaw sizes; FEA margins are documented and traceable; and a full-scale article is tested to demonstrate the analysis. Traceability of every billet, heat treatment and machining step is part of the product itself.",
              "The transferable lesson is the shared spine: model the duty honestly (spectra, not one static load), analyse with the right elements and boundary conditions (Unit V's discipline), design against the governing failure mode (yield, fatigue, creep or fracture - chosen by component and duty), optimize within manufacturing reality, and validate with test. The differences between the industries are of degree - volume, cost model, certification and materials - not of kind. Examiners reward the workflow plus two contrasting case studies far above any list of disconnected facts.",
            ],
            bullets: [
              "Spine: duty spectrum, concept, FEA, optimize, verify fatigue, validate by test.",
              "Automotive: volume production, per-part cost, road-load durability, cast or forged aluminium or steel.",
              "Aerospace: mass and certification dominate; damage tolerance sets inspection intervals.",
              "Same failure toolbox - yield, S-N with Miner, Paris and KIC, creep - selected by duty.",
              "Documentation depth differs: warranty data versus certified traceability.",
            ],
            table: {
              caption: "Two case studies at a glance.",
              headers: ["Aspect", "Automotive control arm", "Aerospace fitting"],
              rows: [
                ["Volume", "100,000+ per year", "tens to hundreds"],
                ["Cost driver", "per-part cost", "mass and certification"],
                ["Material", "forged or cast Al / steel", "Ti-6Al-4V, 7075, composites"],
                ["Loads", "road-load spectra: pothole, braking, curb strike", "manoeuvre plus pressurization cases"],
                ["Margin basis", "warranty durability", "damage tolerance with inspections"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Automotive versus aerospace design drivers",
              caption: "One workflow, opposite dials - cost per unit versus mass per certificate.",
              left: {
                heading: "Automotive drivers",
                items: [
                  "millions of parts - unit cost rules",
                  "stamped and cast processes with long tooling lives",
                  "road-load durability spectra from test miles",
                  "warranty and mass-market targets",
                ],
              },
              right: {
                heading: "Aerospace drivers",
                items: [
                  "hundreds of parts - mass rules",
                  "machined forgings, titanium and composites",
                  "damage tolerance with mandated inspections",
                  "certification evidence and full traceability",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The case-study template",
              body: "Answer any case-study question with the five-beat template: duty and loads, concept and material, analysis and optimization, governing failure mode and its check, validation and production. Then bolt on one automotive and one aerospace example. The template shows systems thinking, which is what the question is really testing.",
            },
            keyTerms: [
              { term: "Road-load data", definition: "Measured load-time histories from instrumented vehicle miles, binned into durability load cases." },
              { term: "Damage tolerance", definition: "Certification philosophy assuming flaws exist, managed by crack growth analysis and scheduled inspection." },
              { term: "Certification basis", definition: "The regulatory set of static, fatigue and damage-tolerance requirements a design must demonstrate." },
            ],
            examQuestions: [
              {
                q: "Walk through the design process of an automotive suspension control arm from load data to production, and contrast its drivers with those of an aerospace structural fitting.",
                marks: 7,
                outline: [
                  "Duty: road-load spectra defining the load-case matrix",
                  "Concept: forging versus casting; material choice",
                  "Analysis: FEA model, boundary conditions, hot spots",
                  "Optimization: topology and shaping within process limits",
                  "Fatigue: Miner damage on the spectra; durability sign-off",
                  "Aerospace contrast: mass, KIC and Paris damage tolerance, certification, traceability",
                  "Close: both paths end in validation testing",
                ],
              },
              {
                q: "What is road-load data?",
                marks: 2,
              },
              {
                q: "Why does damage tolerance force scheduled inspections?",
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
        "RGPV Advance Machine Design papers draw across all five units, but the pattern is stable: Unit III's cylinder theory and Unit II's fatigue and fracture kit supply the long derivations and numerics, Unit IV supplies component-design questions with fixed checklists, and Units I and V supply shorter formulation, reliability and FEA notes. Derivation-plus-numeric questions (Lame, thin shells, Paris, flywheel) are the highest-yield preparation because their templates repeat almost unchanged.",
      ],
      weightedTopics: [
        { topic: "Lame's equations for thick cylinders", weight: "~ 10-12 marks", note: "Derivation + bore and outer stresses + distribution sketch; the Unit III banker." },
        { topic: "Thin cylinder stresses and shell thickness design", weight: "~ 7 marks", note: "Two free bodies, then t = pD/(2fE) + CA with joint efficiency." },
        { topic: "S-N curve, endurance limit and Marin factors", weight: "~ 7 marks", note: "Steel versus aluminium sketch; Se = ka kb kc kd ke Se' computation." },
        { topic: "Miner's rule with a load spectrum", weight: "~ 7 marks", note: "Damage-table format with assumptions and limitations named." },
        { topic: "Paris law and crack-growth life", weight: "~ 7 marks", note: "Integral form, units discipline, inspection-interval logic." },
        { topic: "Stress intensity factor and KIC", weight: "~ 7 marks", note: "K versus KIC distinction plus a_crit = (KIC/(Y sigma))^2/pi." },
        { topic: "Creep stages and Larson-Miller parameter", weight: "~ 7 marks", note: "Strain-time sketch plus one LMP extrapolation number." },
        { topic: "Series-parallel system reliability", weight: "~ 5-7 marks", note: "Products and complements; mixed-block reduction with a block diagram." },
        { topic: "Connecting rod as a strut (Ixx = 4 Iyy)", weight: "~ 7 marks", note: "Two-plane buckling derivation; the Unit IV favourite." },
        { topic: "Flywheel sizing and piston checks", weight: "~ 7-10 marks", note: "I = deltaE/(omega^2 Cs) to rim mass; piston loads in fixed order." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming about 90 minutes a day, five days a week, this schedule gives every unit a concept pass and a numeric pass, and reserves the final week for full papers. Derivation practice (Lame, Paris, flywheel) is deliberately front-loaded so each gets a second pass before the exam; the FEA unit is placed last so the workflow ideas stay fresh.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - optimization and reliability", tasks: ["Formulate three problems (variables, objective, constraints) end to end", "Solve one Lagrange box problem and state the KKT conditions", "Bathtub curve, hazard and MTBF relations rewritten from memory", "Weibull: median-rank plot by hand for 5 failure times", "Series, parallel and 2-out-of-3 numerics computed twice"] },
        { week: "Week 2", focus: "Unit II - creep and S-N fatigue", tasks: ["Creep stages sketch plus mechanisms per stage", "Two Larson-Miller extrapolations worked with T in Kelvin", "S-N curve drawn for steel and aluminium; Marin chain applied", "Kf and notch sensitivity: three short problems", "One full Marin computation with a 50 mm shaft"] },
        { week: "Week 3", focus: "Unit II - damage and fracture", tasks: ["One Miner damage table from a three-block spectrum", "Rainflow counting explained with a reservoir sketch", "Paris law: one numerical integration and one closed form", "K versus KIC: two a_crit computations with Y factors", "Failure-mode map (yield versus fracture) redrawn from memory"] },
        { week: "Week 4", focus: "Unit III - vessels and piping", tasks: ["Thin cylinder derivation plus two thickness designs with E and CA", "Lame's equations derived cold; bore and outer stresses for k = 2", "Compound cylinder three-curve sketch; autofrettage in five lines", "IS 2825 sequence listed as a checklist with joint efficiency role", "Piping: anchor-force numeric plus loop and bellows sketches"] },
        { week: "Week 5", focus: "Unit IV - engine components", tasks: ["Piston: loads and checks recited in exam order", "Connecting rod: Ixx = 4 Iyy derivation plus a two-plane numeric", "Crankshaft: pin, web, journal checks and fillet cures", "Flywheel: one full TMD running-integral problem to rim mass", "Valve gear: chain sketch, float and surge margins, materials"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Two-spring FEA solved by hand; element-family table rewritten", "Meshing, convergence and verification ladder as short-note drills", "Topology optimization plus DFM/DFA workflow sketch", "One automotive and one aerospace case study written in template form", "Two full past papers under exam time, then rewrite weak answers"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Recite the formula clusters cold: pD/(2t) and pD/(4t); Lame's A ± B/r^2 with the bore peaks; Se = ka kb kc kd ke Se'; D = sum n_i/N_i; da/dN = C(delta K)^m; I = deltaE/(omega^2 Cs); R_series = product of R_i; LMP = T(C + log10 t_r).",
        "Redraw from memory: the thick-wall stress distribution, the S-N pair (steel and aluminium), the bathtub curve, the creep curve, the turning-moment running integral, and the yield-versus-fracture map.",
        "Two speed drills under 10 minutes each: one Lame bore-plus-outer stress pair, and one a_crit = (KIC/(Y sigma))^2/pi.",
        "Recompute the two worked numerics you are least sure of - the flywheel rim mass and the Miner damage sum - without notes.",
        "Read only the tables and callouts of Units III to V: they are the compressed course, and each row is a potential short question.",
        "Sleep on schedule: this paper rewards clean substitution and labelled sketches over last-minute breadth.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      examTips: [
        "Draw first: the stress element, the Lame distribution, the TMD, the bathtub curve or the reliability block diagram - the labelled sketch anchors structure marks before any number appears.",
        "Answer in the fixed order: definition, formula with symbols defined, one substitution line carrying units, the boxed answer, and a one-line design comment.",
        "Carry units on every substitution: MPa = N/mm^2 for shell formulas; K in MPa sqrt(m); T in Kelvin with t_r in hours for Larson-Miller; pinned X-X and fixed Y-Y for the rod.",
        "State assumptions before solving: t/D ≤ 1/20, C ≈ 20 for steels, plane strain for KIC, order-independence for Miner - each named assumption is an earned mark.",
        "Time-box: 2-3 mark questions inside 5 minutes, 7-mark answers inside 15, and hold the last 10 minutes to re-check one complete numerical from data to answer.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Using thin-cylinder formulas on a thick wall (skipping the t/D ≤ 1/20 test), or forgetting joint efficiency E and corrosion allowance in the shell thickness.",
        "Swapping Lame's constants so the bore hoop stress comes out compressive - internal pressure always puts the bore into hoop tension.",
        "Quoting an endurance limit for aluminium - there is none; quote fatigue strength at 5 x 10^8 cycles, and apply Kf on the stress side only.",
        "Mixing millimetres and metres inside the Paris law - the constant C changes with m, so the entire life number becomes wrong.",
        "Adding reliabilities instead of multiplying them (or unreliabilities instead of multiplying complements) in series-parallel blocks.",
        "Reporting flywheel inertia without checking rim peripheral speed, or interpreting the raw topology-optimization output instead of the redrawn CAD.",
      ],
    },
  ],
};
