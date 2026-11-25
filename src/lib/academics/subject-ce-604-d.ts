/**
 * Academics - RGPV Civil Engineering 6th-semester subject: CE-604(D)
 * Operation Research.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or Python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 *
 * Running worked examples thread through the units: one LP (max Z = 3x1 + 4x2)
 * from formulation to duality, one transportation matrix from NWC to MODI,
 * one 14-day project from CPM to crashing and levelling, one M/M/1 - M/M/s
 * pair, and one inventory/replacement chain from EOQ to discounted EUAC.
 */

import type { AcademicSubject } from "./types";

export const ce604d: AcademicSubject = {
  id: "ce-604-d",
  code: "CE-604(D)",
  title: "Operation Research",
  semester: "VI Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to operations research for civil engineering: linear programming from formulation to duality, transportation and assignment, CPM/PERT network analysis, queuing and game theory, and inventory and replacement models - every topic with a worked numerical, a redrawable diagram and the questions RGPV actually asks.",
  description:
    "Five units walk the full OR toolkit. Unit I builds linear programming - formulation, the graphical method, the simplex algorithm for maximisation and minimisation with Big M and two-phase handling of artificial variables, and duality with shadow prices. Unit II moves to the special network LPs: transportation problems solved from north-west corner and Vogel starts through the MODI optimality test, degeneracy and unbalance, and the Hungarian assignment method. Unit III schedules projects with CPM and PERT - critical paths, floats, crashing and resource levelling. Unit IV models waiting lines (M/M/1 and M/M/s) and two-person zero-sum games with saddle points, dominance and graphical solutions. Unit V controls stock with EOQ, EBQ, quantity discounts and safety stock, and times replacement decisions for failing items and ageing equipment with and without the time value of money.",
  accentColor: "#f59e0b",
  emoji: "OR",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Linear Programming",
      summary:
        "The foundation of the whole subject: what operations research is and how it models decisions, how a two-variable LP is solved on a graph, how the simplex algorithm iterates from one basic feasible solution to the next for both maximisation and minimisation, and how every primal LP casts a dual whose variables price the constraints.",
      chapter: {
        number: "01",
        title: "Linear Programming",
        intro:
          "Unit I builds the general optimisation machinery that Units II and V specialise. It opens with the methodology of operations research and the art of LP formulation, solves a product-mix problem graphically to establish the corner-point theorem, mechanises the same search as the simplex algorithm, extends simplex to minimisation problems that need artificial variables (Big M and two-phase), and closes with duality - the correspondence that turns constraints into prices.",
        inOneBreath:
          "Operations research applies the scientific method to allocation decisions: define the problem, build a model, solve, validate, implement. A linear program maximises a linear objective over linear constraints plus non-negativity; its optimum sits at a corner of the convex feasible region, which the graphical method exploits for two variables and simplex mechanises with slack variables, a Cj - Zj entering rule, a minimum-ratio leaving rule and Gauss-Jordan pivots. Minimisation flips signs or uses Zj - Cj; equality and greater-than-or-equal rows need artificial variables that Big M penalises with -M or two-phase drives to zero in phase I. Every LP has a dual - transpose the matrix, swap b and c, flip the optimisation sense - and at the optimum the two objective values coincide, the dual variables being the shadow prices of the resources.",
        sections: [
          {
            number: "1.1",
            title: "Operations research methodology and LP formulation",
            body: [
              "Operations research is the application of scientific method - observation, hypothesis, quantitative analysis - to problems of allocating scarce resources. Born in the Second World War when Allied commands asked mathematicians to improve radar deployment and convoy routing, the discipline moved into industry after 1945 and now underpins production planning, logistics, scheduling and finance. Its hallmarks are a measurable objective (profit to maximise, cost to minimise, time to shorten), explicit constraints, and a search for the best - not merely acceptable - decision. It is interdisciplinary by construction, borrowing from mathematics, statistics, economics and computing.",
              "The methodology runs in five phases, usually drawn as a loop. First define the problem: identify the decision variables, the objective and the constraints in the language of the client. Second construct a mathematical model that expresses those elements in symbols. Third solve the model - analytically if a formula exists, numerically or algorithmically otherwise. Fourth validate the solution by checking that the model reproduces known behaviour and that the answer is implementable. Fifth implement and control: put the decision to work, monitor it, and return to the model when conditions drift. Models themselves are classified as linear or non-linear, deterministic or stochastic, static or dynamic.",
              "Linear programming is the workhorse model. A firm makes two products: x1 yields Rs 3 profit per unit and x2 yields Rs 4. Fabrication has 4 hours available and each unit of either product takes 1 hour, so x1 + x2 is at most 4. Finishing has 6 hours and consumes 1 hour per unit of x1 and 3 per unit of x2, so x1 + 3x2 is at most 6. The LP is: maximise Z = 3x1 + 4x2 subject to those two constraints and x1, x2 at least 0. LP rests on four assumptions: proportionality (costs and profits scale linearly), additivity (activities do not interact), divisibility (fractional answers are acceptable) and certainty (parameters are known constants).",
            ],
            bullets: [
              "Operations research: the scientific method applied to optimal decision-making under constraints; wartime origins, industry adoption after 1945.",
              "Five phases: define the problem, construct the model, solve, validate, implement and control - a feedback loop, not a straight line.",
              "Model types: linear vs non-linear, deterministic vs stochastic, static vs dynamic - LP is linear, deterministic and static.",
              "LP components: decision variables, a linear objective function, linear constraints, and non-negativity restrictions.",
              "Four LP assumptions: proportionality, additivity, divisibility and certainty - examiners ask for them by name.",
              "Running example (used through Unit I): maximise Z = 3x1 + 4x2 subject to x1 + x2 ≤ 4, x1 + 3x2 ≤ 6, x1, x2 ≥ 0.",
            ],
            table: {
              caption:
                "Formulating the product-mix situation as a linear program.",
              headers: ["Component", "Mathematical form", "Managerial meaning"],
              rows: [
                ["Decision variables", "x1, x2 = units of products 1 and 2", "the quantities management controls"],
                ["Objective function", "maximise Z = 3x1 + 4x2", "profit contribution in rupees"],
                ["Constraint 1", "x1 + x2 ≤ 4", "fabrication hours available"],
                ["Constraint 2", "x1 + 3x2 ≤ 6", "finishing hours available"],
                ["Non-negativity", "x1, x2 ≥ 0", "production cannot be negative"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The five phases of an operations research study",
              caption:
                "A loop, not a pipeline forever - validation failures and drift in the field send the analyst back to earlier stages.",
              stages: [
                { label: "Define the problem", note: "objectives, constraints, decision variables" },
                { label: "Construct the model", note: "translate the situation into mathematics" },
                { label: "Solve the model", note: "analytical or numerical solution" },
                { label: "Validate and verify", note: "does it reproduce known behaviour?" },
                { label: "Implement and control", note: "apply, monitor, update with feedback" },
              ],
            },
            callout: {
              type: "exam",
              title: "Formulation is the guaranteed question",
              body: "RGPV almost always opens the OR paper with a formulation question - product mix, diet, blending or scheduling. Write the four parts in order and label them: variables, objective, constraints, non-negativity. Marks are awarded for the structure, so never jump straight to numbers.",
            },
            keyTerms: [
              { term: "Operations research", definition: "The scientific method applied to decision problems involving the allocation of scarce resources." },
              { term: "Decision variables", definition: "The unknown quantities (x1, x2, ...) whose values the decision maker must choose." },
              { term: "Feasible solution", definition: "Any set of variable values satisfying all constraints and non-negativity; the feasible region is the set of all of them." },
              { term: "Optimal solution", definition: "The feasible solution that gives the best value of the objective function." },
            ],
            examQuestions: [
              {
                q: "Define operations research and explain its methodology and characteristics. Formulate the following as a linear program: a firm makes two products with profits Rs 3 and Rs 4 per unit; fabrication allows 4 hours with each unit of either product taking 1 hour, and finishing allows 6 hours with each unit of product 1 taking 1 hour and each unit of product 2 taking 3 hours.",
                marks: 7,
                outline: [
                  "Define OR: scientific method for optimal decisions under constraints; wartime origins.",
                  "List the characteristics: measurable objective, explicit constraints, interdisciplinarity, optimisation orientation.",
                  "Describe the five phases: define, model, solve, validate, implement and control.",
                  "Introduce decision variables x1 and x2 as the units produced of each product.",
                  "Write the objective: maximise Z = 3x1 + 4x2.",
                  "Write the constraints: x1 + x2 ≤ 4 (fabrication) and x1 + 3x2 ≤ 6 (finishing).",
                  "Add non-negativity x1, x2 ≥ 0 and state the four LP assumptions briefly.",
                ],
              },
              {
                q: "State the assumptions of linear programming.",
                marks: 3,
              },
              {
                q: "Distinguish between a feasible solution and an optimal solution of a linear program.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Graphical solution of LP problems",
            body: [
              "Every LP with exactly two decision variables can be solved on graph paper, which is why the graphical method anchors Unit I: it makes the geometry that simplex later mechanises visible. Treat each constraint as an equation and draw its straight line; decide which side is feasible by testing a convenient point, usually the origin; and shade that side. The feasible region is the intersection of all the half-planes together with the non-negativity axes - and it is always a convex polygon, because the intersection of half-planes cannot bend inwards.",
              "The corner-point theorem does the rest: if a bounded LP has an optimal solution, one optimum occurs at an extreme point (corner) of the feasible region. So instead of searching the interior, evaluate Z at each vertex. For the running example the corners are (0, 0), (4, 0), (0, 2) and the intersection of x1 + x2 = 4 with x1 + 3x2 = 6, which solves to (3, 1). Z takes the values 0, 12, 8 and 13 there, so the optimum is x1 = 3, x2 = 1 with Z = 13. The ISO-profit line alternative draws Z = 3x1 + 4x2 for a trial value and slides it parallel until it last touches the region - the same vertex.",
              "Minimisation problems (a cheapest diet, for instance) follow identical steps with the direction of improvement reversed: choose the corner with the smallest Z. The graphical method also exposes the degenerate cases examiners love. If the half-planes share no common region the LP is infeasible; if the region is open in the improving direction the solution is unbounded (usually a sign of a missing constraint); if the ISO-profit line is parallel to an edge, every point on that edge is optimal (multiple optima); and a constraint that never touches the region is redundant. The method's limit is obvious: it cannot handle three or more variables - simplex removes that ceiling in the next section.",
            ],
            bullets: [
              "Draw each constraint as a line, then shade the feasible side - test with the origin whenever it is not on the line.",
              "The feasible region of an LP is a convex polygon (the intersection of half-planes cannot bend inwards).",
              "Corner-point theorem: if an optimum exists, at least one lies at a vertex of the feasible region.",
              "Running example corners: (0,0) Z = 0, (4,0) Z = 12, (0,2) Z = 8, (3,1) Z = 13 - the optimum.",
              "ISO-profit line: slide Z = constant parallel to itself; the last contact point is optimal.",
              "Special cases: infeasible (no region), unbounded (open region), multiple optima (edge parallel to ISO-profit), redundant constraint (never touches the region).",
            ],
            table: {
              caption:
                "Corner-point evaluation for maximise Z = 3x1 + 4x2 with x1 + x2 ≤ 4 and x1 + 3x2 ≤ 6.",
              headers: ["Corner (x1, x2)", "How obtained", "Z = 3x1 + 4x2"],
              rows: [
                ["(0, 0)", "origin - both constraints slack", "0"],
                ["(4, 0)", "x1 + x2 = 4 cuts the x1-axis", "12"],
                ["(3, 1)", "intersection of the two constraint lines", "13 - optimum"],
                ["(0, 2)", "x1 + 3x2 = 6 cuts the x2-axis", "8"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Solving a two-variable LP graphically",
              caption:
                "Five moves from algebra to answer - the geometry that simplex mechanises without the picture.",
              steps: [
                { label: "Plot each constraint", note: "treat it as an equation and draw the line" },
                { label: "Shade the feasible side", note: "test the origin" },
                { label: "Mark the feasible region", note: "common to all half-planes - a convex polygon" },
                { label: "List the corner points", note: "intersections of binding constraints" },
                { label: "Evaluate Z at each corner", note: "the optimum sits at the best vertex" },
              ],
            },
            callout: {
              type: "tip",
              title: "Label the corners on the diagram",
              body: "In the exam, draw the region large, label each vertex with its coordinates, and present the Z-evaluation as a small table. The diagram carries method marks even if one arithmetic slip corrupts the final answer.",
            },
            keyTerms: [
              { term: "Corner-point theorem", definition: "If a bounded LP has an optimal solution, at least one optimum occurs at a vertex of the feasible region." },
              { term: "ISO-profit line", definition: "A line of constant objective value, slid parallel to itself until it last touches the feasible region." },
              { term: "Unbounded solution", definition: "The feasible region is open in the direction of improvement, so Z can grow without limit." },
            ],
            examQuestions: [
              {
                q: "State the corner-point theorem and solve graphically: maximise Z = 3x1 + 4x2 subject to x1 + x2 ≤ 4, x1 + 3x2 ≤ 6, x1, x2 ≥ 0. Indicate the feasible region and the optimal point on your sketch.",
                marks: 7,
                outline: [
                  "State the theorem: an optimum of a bounded LP occurs at a vertex of the convex feasible region.",
                  "Draw x1 + x2 = 4 through (4, 0) and (0, 4); draw x1 + 3x2 = 6 through (6, 0) and (0, 2).",
                  "Test the origin in each inequality and shade the correct half-planes.",
                  "Identify the feasible polygon with corners (0,0), (4,0), (3,1) and (0,2).",
                  "Solve the two equations simultaneously: subtract to get 2x2 = 2, so x2 = 1 and x1 = 3.",
                  "Evaluate Z: 0, 12, 8 and 13 at the four corners.",
                  "Conclude the optimum is x1 = 3, x2 = 1 with Z = 13, and mark it on the sketch.",
                ],
              },
              {
                q: "Explain the terms infeasible and unbounded as applied to linear programs, with one example of each.",
                marks: 3,
              },
              {
                q: "How does a minimisation LP differ from a maximisation LP when solved graphically?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Simplex method: maximisation",
            body: [
              "The graphical method dies at three variables; the simplex algorithm, invented by Dantzig in 1947, scales to thousands. Its insight is geometric: because the optimum lies at a vertex, the algorithm can walk from vertex to vertex, improving Z at each step, and stop when no neighbouring vertex is better. Algebraically each vertex is a basic feasible solution. Convert every constraint to an equation by adding a slack variable (s1 for the first row, s2 for the second); a basic solution sets n of the variables to zero and solves the square system for the rest. The origin - all slacks basic, all decisions zero - starts the journey.",
              "Each iteration is a fixed ritual. The Cj - Zj row (net evaluation) measures how much Z improves per unit of each non-basic variable; for a maximisation problem the most positive Cj - Zj column enters the basis. The leaving variable is chosen by the minimum-ratio test: divide the right-hand sides by the positive entries of the entering column and pick the smallest, because that row hits zero first and keeps every variable non-negative. Then pivot - Gauss-Jordan elimination making the entering column a unit vector - and recompute. Optimality arrives when every Cj - Zj is at or below zero.",
              "The running example needs exactly two iterations. With Cj - Zj = (3, 4, 0, 0) initially, x2 enters (4 is largest); the ratios 4/1 = 4 and 6/3 = 2 send the s2 row out. After the pivot the Cj - Zj of x1 revives to 5/3, so x1 enters and the s1 row leaves (ratios 3 against 6). The final tableau reads x1 = 3, x2 = 1, Z = 13 - the same corner the graph found. Ties in the ratio test warn of degeneracy; a zero Cj - Zj on a non-basic variable at the optimum signals alternative optima; and an entering column with no positive entry means the LP is unbounded.",
            ],
            bullets: [
              "Slack variables turn inequalities into equations and provide the first basis - the origin as the starting basic feasible solution.",
              "Entering rule (maximisation): the column with the most positive Cj - Zj (net evaluation) joins the basis.",
              "Leaving rule: the minimum of RHS divided by positive entering-column entries - the row that exhausts first.",
              "Pivot: Gauss-Jordan elimination that makes the entering column a unit vector, then recompute Cj - Zj.",
              "Optimality: stop when every Cj - Zj ≤ 0 for a maximum (every Zj - Cj ≤ 0 for a minimum).",
              "Running example: two iterations take the tableau from (0, 0) to (3, 1) with Z = 13, matching the graph.",
              "Diagnostics: ratio tie - degeneracy; zero Cj - Zj on a non-basic column - alternative optima; no positive ratio - unbounded.",
            ],
            codeExample: {
              language: "python",
              caption:
                "The two simplex pivots that solve max Z = 3x1 + 4x2 with x1 + x2 ≤ 4 and x1 + 3x2 ≤ 6.",
              code: `def pivot(t, r, c):
    """Gauss-Jordan pivot on row r, column c of tableau t."""
    p = t[r][c]
    t[r] = [v / p for v in t[r]]
    for i in range(len(t)):
        if i != r:
            f = t[i][c]
            t[i] = [a - f * b for a, b in zip(t[i], t[r])]
    return t

# columns: x1, x2, s1, s2, right-hand side
T = [[1, 1, 1, 0, 4],      # s1 row:  x1 +  x2 + s1      = 4
     [1, 3, 0, 1, 6]]      # s2 row:  x1 + 3x2      + s2 = 6

# Iteration 1: Cj - Zj = (3, 4, 0, 0), so x2 enters;
# ratios 4/1 = 4 and 6/3 = 2, so the s2 row (row 1) leaves.
T = pivot(T, 1, 1)
print(T)   # [0.667, 0, 1, -0.333, 2] and [0.333, 1, 0, 0.333, 2] (rounded)

# Iteration 2: Cj - Zj of x1 is 3 - 4/3 = 5/3 > 0, so x1 enters;
# ratios 2/(2/3) = 3 and 2/(1/3) = 6, so the s1 row (row 0) leaves.
T = pivot(T, 0, 0)
print(T)   # [1, 0, 1.5, -0.5, 3] and [0, 1, -0.5, 0.5, 1]

print("x1 = 3, x2 = 1, Z =", 3 * 3 + 4 * 1)   # 13, same as the graph`,
            },
            diagram: {
              kind: "cycle",
              title: "One turn of the simplex wheel",
              caption:
                "Spin the wheel until the Cj - Zj row clears of positives - each revolution lands on a better vertex.",
              steps: [
                { label: "Read the Cj - Zj row", note: "net contribution of every variable" },
                { label: "Choose the entering variable", note: "most positive Cj - Zj for a maximum" },
                { label: "Run the ratio test", note: "smallest RHS over positive column entry leaves" },
                { label: "Pivot", note: "Gauss-Jordan on the entering column" },
                { label: "Test optimality", note: "all Cj - Zj at or below zero - else spin again" },
              ],
            },
            callout: {
              type: "exam",
              title: "Show every column of every tableau",
              body: "Simplex questions are marked step by step. Draw the full tableau each iteration - basis, body columns, RHS, ratio column and the Cj - Zj row - and state the entering and leaving variables in words before pivoting. A clean tableau trail earns partial credit even if a late arithmetic slip appears.",
            },
            keyTerms: [
              { term: "Slack variable", definition: "A non-negative variable added to a less-than-or-equal constraint to convert it into an equation." },
              { term: "Basic feasible solution", definition: "A basic solution (n variables at zero, the rest solved) in which every variable is non-negative; geometrically, a vertex." },
              { term: "Cj - Zj row", definition: "The net-evaluation row: the change in Z per unit increase of each non-basic variable." },
            ],
            examQuestions: [
              {
                q: "Explain the simplex algorithm and use it to solve: maximise Z = 3x1 + 4x2 subject to x1 + x2 ≤ 4, x1 + 3x2 ≤ 6, x1, x2 ≥ 0. Write every tableau.",
                marks: 7,
                outline: [
                  "Introduce slack variables s1, s2 and write the standard form with the initial basis (s1, s2) = (4, 6).",
                  "State the entering rule: for a maximum, the most positive Cj - Zj enters the basis.",
                  "State the leaving rule: minimum ratio of RHS to positive entering-column entries.",
                  "Iteration 1: x2 enters (Cj - Zj = 4); ratios 4 and 2, so the second row leaves; pivot on 3.",
                  "Iteration 2: Cj - Zj of x1 becomes 5/3 > 0, so x1 enters; ratios 3 and 6, so the first row leaves; pivot on 2/3.",
                  "Final tableau: x1 = 3, x2 = 1, slacks zero; all Cj - Zj ≤ 0, so the solution is optimal.",
                  "Conclude Z = 13 and note it agrees with the graphical solution of section 1.2.",
                ],
              },
              {
                q: "What is the role of the minimum-ratio test in the simplex method?",
                marks: 3,
              },
              {
                q: "How does the simplex method detect (a) an unbounded and (b) an alternative optimal solution?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Minimisation, artificial variables and the Big M and two-phase methods",
            body: [
              "Minimisation problems arrive in two dresses. A cost-minimising LP can be converted to maximisation by maximising -Z and negating the result at the end, or solved directly with the optimality criterion flipped (stop when every Zj - Cj is at or below zero). The deeper obstacle is the constraint type. Slack variables fit only less-than-or-equal rows. A greater-than-or-equal row such as x1 + x2 ≥ 2 becomes x1 + x2 - s1 = 2 after subtracting a surplus variable s1 - and now no obvious starting basis exists, because setting the decisions to zero leaves s1 = -2, which is infeasible.",
              "The repair is the artificial variable: add a brand-new non-negative variable a1 to patch the equation, exactly one per equality or surplus row. Artificial variables have no business in the final answer, so the Big M method prices them out of the market by giving each a profit of -M (minus an enormous number) in a maximisation - or a cost of +M when minimising. No rational pivot will keep an artificial basic when a real alternative exists, so they drain out of the basis. If an artificial variable remains basic at a positive level in the final tableau, the original problem is infeasible: the constraints contradict each other. The method's weakness is arithmetic - huge M values distort ratios and invite rounding errors in hand computation.",
              "The two-phase method splits the same job into two clean problems. Phase I replaces the real objective with minimise W = sum of all artificial variables. If the phase I optimum is W > 0, some artificial is stuck positive and the problem is infeasible - stop. If W = 0, every artificial has left the basis (or sits at zero and is dropped); the current basis is feasible for the real problem. Phase II restores the original objective function and continues ordinary simplex from that basis. The comparison table summarises: Big M is one combined run, two-phase is longer but numerically safer - and exam questions ask precisely for both routes.",
            ],
            bullets: [
              "Minimisation options: maximise -Z, or use the Zj - Cj criterion and stop when all Zj - Cj ≤ 0.",
              "Surplus variables (subtracted) convert greater-than-or-equal rows to equations but leave no starting basis.",
              "Artificial variables: one per equality or surplus row, purely computational, must finish at zero.",
              "Big M: give artificials a profit of -M (maximisation) so the algorithm expels them; +M when minimising.",
              "Infeasibility signal: an artificial variable basic and positive in the final tableau (Big M) or W > 0 at the end of phase I.",
              "Two-phase: phase I minimises the artificial sum; phase II continues with the real objective from the phase I basis.",
            ],
            table: {
              caption: "Big M versus two-phase for handling artificial variables.",
              headers: ["Aspect", "Big M method", "Two-phase method"],
              rows: [
                ["Core idea", "penalise artificials with -M in the objective", "phase I minimises the sum of the artificials"],
                ["When preferred", "quick hand solutions, small problems", "large problems or when M distorts arithmetic"],
                ["Objective used", "one combined objective from the start", "an artificial objective first, the real one second"],
                ["Infeasibility test", "artificial basic and positive at the end", "phase I optimum W > 0"],
                ["Length", "single set of iterations", "two sets - longer but numerically cleaner"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the route through a minimisation problem",
              caption:
                "The constraint pattern decides the machinery before the first tableau is drawn.",
              start: "Standard form needs a starting basic feasible solution",
              branches: [
                { label: "every constraint is ≤ with non-negative RHS", outcome: "slack variables give the basis directly - plain simplex from iteration one", good: true },
                { label: "equalities or ≥ rows present", outcome: "add surplus plus artificial variables and penalise them with -M (Big M)", good: true },
                { label: "M is too large or distorting", outcome: "two-phase method: phase I minimises the artificial sum, phase II solves the real problem", good: true },
                { label: "artificial stays basic and positive at the end", outcome: "the problem is infeasible - the constraints admit no solution", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Never leave artificials in the answer",
              body: "A positive artificial variable in the final basis is not a quirky solution - it is proof of infeasibility, worth stating explicitly. And in two-phase, remember to drop the artificial columns (or forbid their re-entry) before phase II begins; forgetting this is the most common lost mark in this topic.",
            },
            keyTerms: [
              { term: "Surplus variable", definition: "A non-negative variable subtracted from a greater-than-or-equal constraint to convert it into an equation." },
              { term: "Artificial variable", definition: "A computational variable added to an equality or surplus row to create a starting basis; it must end at zero." },
              { term: "Big M method", definition: "Handling artificials by assigning them an enormous penalty cost M so the simplex algorithm drives them out of the basis." },
            ],
            examQuestions: [
              {
                q: "Why are artificial variables needed in the simplex method? Explain the Big M and two-phase methods and compare them, mentioning how each detects infeasibility.",
                marks: 7,
                outline: [
                  "Explain why surplus variables leave no starting basis for ≥ and equality rows.",
                  "Define artificial variables: one per offending row, added to create an identity basis.",
                  "Big M: assign -M profit to artificials in a maximum (+M cost in a minimum) and solve one combined problem.",
                  "Big M infeasibility test: an artificial basic at a positive level in the final tableau.",
                  "Two-phase: phase I minimises W = sum of artificials with a fresh objective row.",
                  "Phase I outcome: W = 0 gives a feasible basis; W > 0 proves infeasibility - stop.",
                  "Phase II restores the original objective and continues simplex; conclude with the comparison (length vs numerical safety).",
                ],
              },
              {
                q: "Convert the constraint 2x1 + x2 ≥ 10 into standard form for the simplex method.",
                marks: 2,
              },
              {
                q: "In the two-phase method, what do you do with the artificial variables once phase I ends with W = 0?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Duality in linear programming",
            body: [
              "Every linear program - call it the primal - carries a shadow called the dual, and the pairing is symmetric: the dual of the dual is the primal. For a primal maximisation with n variables and m less-than-or-equal constraints, the dual is a minimisation with m variables and n greater-than-or-equal constraints; the constraint matrix is transposed; the primal objective coefficients cj become the dual right-hand sides; and the primal right-hand sides bi become the dual objective coefficients. The dual variables y1, ..., y2 are not algebraic curiosities - they are shadow prices, the maximum worth of one extra unit of each resource.",
              "Write the dual of the running example: maximise Z = 3x1 + 4x2 subject to x1 + x2 ≤ 4 and x1 + 3x2 ≤ 6. The dual minimises W = 4y1 + 6y2 subject to y1 + y2 ≥ 3 (worth of the resources consumed by one unit of product 1 must cover its profit) and y1 + 3y2 ≥ 4, with y1, y2 ≥ 0. Solving gives y1 = 2.5, y2 = 0.5 and W = 13 - exactly the primal optimum. No coincidence: the strong duality theorem says optimal Z equals optimal W. The shortcut is the final simplex tableau of section 1.3: the Zj values under the slack columns are the shadow prices (2.5 and 0.5), read off without solving the dual separately.",
              "Three theorems organise the theory. Weak duality: any feasible primal and dual pair sandwich the optimum (c x ≤ b y for the max-min pair), so any dual-feasible solution certifies a bound. Strong duality: if one problem has a finite optimum, so does the other, and the values coincide. Complementary slackness: a positive primal variable forces the matching dual constraint to be tight, and a slack primal constraint forces a zero dual variable - both hold in our example, since x1 and x2 are positive and both primal constraints bind. Practically, duality gives sensitivity analysis (how much Z rises per extra hour of fabrication: Rs 2.5), an alternative that is smaller when the primal has many constraints, and the pricing interpretation managers actually use.",
            ],
            bullets: [
              "Dual construction: transpose A, swap b and c, reverse the optimisation sense (max becomes min), flip constraint and variable signs.",
              "Shadow price: the dual variable yi - the improvement in Z from one extra unit of resource i (y1 = 2.5, y2 = 0.5 in the running example).",
              "Weak duality: every feasible primal objective ≤ every feasible dual objective - a free optimality certificate.",
              "Strong duality: at the optimum, Z = W (both equal 13 in the running example).",
              "Complementary slackness: positive primal variable implies a tight dual constraint; slack primal constraint implies a zero dual variable.",
              "Shortcut: the shadow prices are the Zj entries under the slack columns of the final simplex tableau.",
            ],
            table: {
              caption: "Primal-to-dual correspondence for a maximisation primal.",
              headers: ["Primal (maximise)", "Dual (minimise)"],
              rows: [
                ["n decision variables", "n dual constraints"],
                ["m constraints", "m dual variables"],
                ["objective coefficients cj", "right-hand sides of the dual constraints"],
                ["right-hand sides bi", "dual objective coefficients"],
                ["constraint i of the ≤ type", "dual variable yi ≥ 0"],
                ["variable xj ≥ 0", "dual constraint j of the ≥ type"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "The primal and its dual, side by side",
              caption:
                "Same optimum from two directions: allocate products, or price resources. Strong duality guarantees the two answers meet.",
              left: {
                heading: "Primal (maximise)",
                items: [
                  "n variables xj, each ≥ 0",
                  "m constraints of the ≤ type",
                  "objective coefficients cj in Z",
                  "right-hand sides bi as resource stocks",
                  "running example optimum: Z = 13 at (3, 1)",
                ],
              },
              right: {
                heading: "Dual (minimise)",
                items: [
                  "m variables yi, each ≥ 0",
                  "n constraints of the ≥ type",
                  "right-hand sides cj as demand floors",
                  "objective coefficients bi as resource worths",
                  "same optimum: W = 13 at (2.5, 0.5)",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Dual questions are formula questions",
              body: "Learn the correspondence table by heart and write the dual mechanically: one dual variable per primal constraint, one dual constraint per primal variable, transpose the coefficients, swap b with c, flip max to min. Then verify with the running example - W must come to 13. Examiners award the bulk of the marks for the structure, not the solving.",
            },
            keyTerms: [
              { term: "Dual problem", definition: "The paired LP obtained by transposing the constraint matrix, exchanging b and c, and reversing the optimisation sense." },
              { term: "Shadow price", definition: "The optimal dual variable: the rate at which the optimal objective improves per additional unit of a resource." },
              { term: "Complementary slackness", definition: "At the optimum, a positive primal variable implies a binding dual constraint and vice versa." },
            ],
            examQuestions: [
              {
                q: "State the rules for writing the dual of a linear program. Write the dual of: maximise Z = 3x1 + 4x2 subject to x1 + x2 ≤ 4, x1 + 3x2 ≤ 6, x1, x2 ≥ 0, verify that optimal Z = optimal W = 13, and explain the economic meaning of the dual variables.",
                marks: 7,
                outline: [
                  "State the correspondence rules: one dual variable per primal constraint, one dual constraint per primal variable, transpose, swap b and c, flip the sense.",
                  "Write the dual: minimise W = 4y1 + 6y2.",
                  "Dual constraints: y1 + y2 ≥ 3 and y1 + 3y2 ≥ 4 with y1, y2 ≥ 0.",
                  "Solve: both constraints bind - subtract to get 2y2 = 1, so y2 = 0.5 and y1 = 2.5.",
                  "Compute W = 4(2.5) + 6(0.5) = 13, equalling the primal optimum.",
                  "Quote strong duality: optimal Z = optimal W.",
                  "Interpret y1 = 2.5 and y2 = 0.5 as shadow prices of fabrication and finishing hours.",
                ],
              },
              {
                q: "State the complementary slackness conditions.",
                marks: 3,
              },
              {
                q: "Where in the final simplex tableau of a maximisation problem do you read the values of the dual variables?",
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
      title: "Transportation and Assignment Problems",
      summary:
        "Two special linear programs with network structure: the transportation problem of moving units from sources to destinations at minimum cost - initial solutions by north-west corner, least cost and Vogel, improved by the MODI method, with dummies for imbalance and epsilon for degeneracy - and the assignment problem of pairing jobs to workers, solved by the Hungarian method.",
      chapter: {
        number: "02",
        title: "Transportation and Assignment",
        intro:
          "Unit II specialises the LP machinery to distribution and pairing problems whose constraint matrix is all zeros and ones. The transportation problem ships from supply sources to demand destinations at minimum cost; three starting heuristics of increasing quality (north-west corner, least cost, Vogel) hand over to the MODI optimality test built on dual variables u and v. Unbalanced problems take dummy rows or columns, and degenerate ones take an epsilon allocation. The assignment problem - one worker to one job - gets its own algorithm: the Hungarian method of row and column reductions, zero-covering and adjustment.",
        inOneBreath:
          "A transportation problem minimises total shipping cost from m sources with supplies to n destinations with demands; a balanced problem has total supply equal to total demand and exactly m + n - 1 basic cells. Start with north-west corner (fast, cost-blind), least cost (greedy) or Vogel's penalties (best start). Test optimality with MODI: set u1 = 0, solve ui + vj = cij on basic cells, compute deltas ui + vj - cij on the rest - all non-positive means optimal, otherwise enter the most positive cell, trace its closed loop, shift theta and repeat. Supply above demand needs a dummy destination, demand above supply a dummy source; fewer basic cells than m + n - 1 is degeneracy - park an epsilon in an independent cell. The assignment problem pairs n jobs to n workers one-to-one; the Hungarian method row-reduces, column-reduces, covers zeros with a minimum number of lines, and adjusts uncovered cells until lines equal n, then reads the answer off independent zeros.",
        sections: [
          {
            number: "2.1",
            title: "The transportation problem: formulation and north-west corner and least-cost starts",
            body: [
              "The transportation problem ships a single commodity from m sources, each with a supply ai, to n destinations, each with a demand bj, at unit cost cij per unit shipped from i to j. The decision variables xij are the shipment quantities; the objective minimises total cost, and the constraints say every source empties and every destination is filled. It is a linear program with a special all-zero-or-one structure, but ordinary simplex wastes that structure - dedicated algorithms exploit it. A problem is balanced when total supply equals total demand; every basic feasible solution then has exactly m + n - 1 basic (allocated) cells, the count that MODI will later rely on.",
              "The north-west corner method builds a first solution without glancing at the costs. Start in the top-left cell, allocate the minimum of the row supply and the column demand, cross out whichever is exhausted (both on a tie - remember that moment), and move right or down to the next cell. On the running data - supplies 50, 70 and 30, demands 30, 60 and 60, costs as in the table - the method yields five allocations totalling Rs 1030. Speed is its only virtue: the start ignores the cost matrix entirely, so it can be arbitrarily far from optimal.",
              "The least-cost method is greedier: scan the whole matrix for the cheapest cell, allocate as much as possible there, cross out the exhausted row or column, and repeat on the survivors. On the same data it allocates first to the Rs 4 cell (S1 to D3), then the Rs 5 and Rs 6 cells, finishing at Rs 790 - a dramatic improvement. Vogel's approximation (next section) usually lands closer still. Keep the hierarchy in mind for viva questions: north-west corner is fastest, least cost is moderate, VAM gives the best start - and any start is only a launch pad for the MODI optimality test of section 2.3.",
            ],
            bullets: [
              "Formulation: minimise the sum of cij xij subject to row supplies, column demands and xij ≥ 0.",
              "Balanced problem: total supply equals total demand; every basic feasible solution has m + n - 1 allocated cells.",
              "North-west corner: allocate top-left, exhaust row or column, move right or down - no reference to costs (start cost Rs 1030).",
              "Least cost: repeatedly allocate to the globally cheapest surviving cell (start cost Rs 790 on the same data).",
              "Degeneracy warning: a simultaneous row-column exhaustion leaves fewer than m + n - 1 allocations - section 2.4 repairs it.",
              "Every initial solution is provisional: the MODI method either certifies optimality or improves it.",
            ],
            table: {
              caption:
                "North-west corner start for supplies (50, 70, 30) and demands (30, 60, 60); entries show quantity @ unit cost. Total = Rs 1030.",
              headers: ["", "D1 (30)", "D2 (60)", "D3 (60)", "Supply 50 / 70 / 30"],
              rows: [
                ["S1", "30 @ Rs 6", "20 @ Rs 10", "-", "exhausted after D2"],
                ["S2", "-", "40 @ Rs 5", "30 @ Rs 9", "exhausted after D3"],
                ["S3", "-", "-", "30 @ Rs 6", "exhausted - D3 met"],
                ["Check", "30 met", "60 met", "60 met", "5 allocations = m + n - 1"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The quality ladder of starting solutions",
              caption:
                "Speed and quality trade off: the bottom rung is instant, the top rung usually sits nearest the optimum.",
              tiers: [
                { label: "VAM start", note: "penalty-driven - usually closest to the optimum" },
                { label: "Least-cost start", note: "greedy on the cheapest cells - middle quality" },
                { label: "North-west corner start", note: "ignores costs entirely - fastest, farthest" },
              ],
            },
            callout: {
              type: "tip",
              title: "Count allocations before anything else",
              body: "After any start, count the filled cells and compare with m + n - 1. If they match, MODI can proceed; if not, you are degenerate and must place an epsilon (section 2.4) before the optimality test. Examiners check this count first.",
            },
            keyTerms: [
              { term: "Transportation problem", definition: "An LP that minimises total shipping cost from supply sources to demand destinations." },
              { term: "Balanced problem", definition: "A transportation problem in which total supply equals total demand." },
              { term: "Basic cells", definition: "The allocated cells of a basic feasible solution - exactly m + n - 1 of them in a non-degenerate balanced problem." },
            ],
            examQuestions: [
              {
                q: "Explain the transportation problem and its formulation. For supplies (50, 70, 30), demands (30, 60, 60) and the cost matrix of the table above, obtain initial basic feasible solutions by the north-west corner rule and the least-cost method and compare the costs.",
                marks: 7,
                outline: [
                  "Define the model: minimise total cij xij subject to supply and demand constraints.",
                  "State the balance condition and the m + n - 1 basic-cell count.",
                  "North-west corner: allocate 30 to (S1, D1), 20 to (S1, D2), then 40 and 30 across S2, and 30 to (S3, D3).",
                  "Sum the north-west corner cost: 180 + 200 + 200 + 270 + 180 = Rs 1030.",
                  "Least cost: allocate 50 to the Rs 4 cell (S1, D3), then 60 to Rs 5 (S2, D2), and finish the remaining cells.",
                  "Sum the least-cost total (Rs 790) and confirm five allocations each time.",
                  "Conclude: least cost beats north-west corner by Rs 240; both remain to be tested by MODI.",
                ],
              },
              {
                q: "Why does a balanced transportation problem have exactly m + n - 1 basic cells?",
                marks: 3,
              },
              {
                q: "Write the mathematical formulation of the transportation problem.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Vogel's approximation method (VAM)",
            body: [
              "Vogel's approximation method starts where intuition does: with regret. If a row's cheapest cell costs Rs 4 and its next cheapest Rs 10, allocating outside the Rs 4 cell costs at least Rs 6 extra per unit - that difference is the row's penalty. VAM computes a penalty for every live row and column (second-cheapest minus cheapest cost among cells that can still be used), then forces allocation where neglect would hurt most: in the row or column with the largest penalty, it fills that line's cheapest cell as far as supply and demand allow, crosses out the exhausted line, and recomputes.",
              "On the running data the first-round penalties are 2, 2 and 2 for the rows and 1, 5 and 5 for the columns. Column D3 (penalty 5) wins; its cheapest live cell S1-D3 at Rs 4 takes 50 units, finishing S1. Recomputing shrinks the problem each round: D2's penalty of 6 next sends 60 units into the Rs 5 cell S2-D2; then D3's penalty of 3 places 10 more at S3-D3; D1's residual penalty allocates 10 at S2-D1 and 20 at S3-D1. Five allocations, total Rs 790 - tied with least cost here, but on most matrices VAM starts closer to the optimum, and quite often its start is already optimal.",
              "VAM's discipline explains its quality: it never lets a high-regret line drift, so it avoids both the cost-blindness of the north-west corner and the tunnel vision of pure least cost. The price is bookkeeping - penalties must be recomputed after every allocation, and ties (equal largest penalties) must be broken by convention, usually taking the first or the one with the cheapest cell. Watch for degeneracy: whenever an allocation exhausts a row and a column together, record a zero allocation in the next cell or place an epsilon so the basic-cell count stays at m + n - 1.",
            ],
            bullets: [
              "Penalty = second-cheapest minus cheapest cost among the live cells of a row or column - the regret of ignoring the best cell.",
              "Allocate in the line with the largest penalty, at its cheapest surviving cell.",
              "Cross out exhausted lines, recompute all penalties, and repeat until every demand is met.",
              "Tie-break by convention (first largest, or the line whose cheapest cell is cheapest overall) - state your rule in the exam.",
              "Running data: VAM finishes at Rs 790 with five allocations, tied with least cost and usually better in general.",
              "Degeneracy watch: simultaneous row-column exhaustion needs a recorded zero or an epsilon allocation.",
            ],
            codeExample: {
              language: "python",
              caption:
                "A complete VAM loop on the running matrix - it lands at Rs 790 with five allocations.",
              code: `def vam(costs, supply, demand):
    """Vogel's approximation: allocate where the penalty (regret) is
    largest, at that line's cheapest cell, until demand is exhausted."""
    m, n = len(supply), len(demand)
    supply, demand = supply[:], demand[:]
    plan = [[0] * n for _ in range(m)]
    while any(s > 0 for s in supply) and any(d > 0 for d in demand):
        penalties = []
        for i in range(m):
            if supply[i] > 0:
                live = sorted(costs[i][j] for j in range(n) if demand[j] > 0)
                if len(live) >= 2:
                    penalties.append((live[1] - live[0], "row", i))
        for j in range(n):
            if demand[j] > 0:
                live = sorted(costs[i][j] for i in range(m) if supply[i] > 0)
                if len(live) >= 2:
                    penalties.append((live[1] - live[0], "col", j))
        if not penalties:            # one cell left - finish directly
            i = next(k for k in range(m) if supply[k] > 0)
            j = next(k for k in range(n) if demand[k] > 0)
            plan[i][j] = min(supply[i], demand[j])
            break
        best = max(penalties)
        if best[1] == "row":
            i = best[2]
            j = min((costs[i][k], k) for k in range(n) if demand[k] > 0)[1]
        else:
            j = best[2]
            i = min((costs[k][j], k) for k in range(m) if supply[k] > 0)[1]
        q = min(supply[i], demand[j])
        plan[i][j] = q
        supply[i] -= q
        demand[j] -= q
    return plan

costs = [[6, 10, 4],
         [7, 5, 9],
         [8, 11, 6]]
supply, demand = [50, 70, 30], [30, 60, 60]

plan = vam(costs, supply, demand)
for row in plan:
    print(row)     # [0, 0, 50] / [10, 60, 0] / [20, 0, 10]
total = sum(plan[i][j] * costs[i][j] for i in range(3) for j in range(3))
print("total cost Rs", total)     # 790`,
            },
            diagram: {
              kind: "flow",
              title: "One round of Vogel's approximation method",
              caption:
                "Penalty, allocate, adjust, recompute - the loop repeats until the last demand cell is filled.",
              steps: [
                { label: "Compute penalties", note: "each live row and column: second-cheapest minus cheapest" },
                { label: "Pick the largest penalty", note: "the line that punishes bad placement most" },
                { label: "Allocate its cheapest cell", note: "the minimum of remaining supply and demand" },
                { label: "Adjust and delete", note: "cross out exhausted rows or columns" },
                { label: "Recompute and repeat", note: "until all demand is met" },
              ],
            },
            callout: {
              type: "exam",
              title: "Show the penalty table every round",
              body: "VAM answers live or die on the penalty computation. Redraw the small penalty table (row penalties and column penalties) after every allocation, circle the maximum, and name the cell chosen. Skipping the intermediate penalty tables is the fastest way to lose half the marks on a full VAM question.",
            },
            keyTerms: [
              { term: "Penalty (VAM)", definition: "The difference between the two cheapest costs in a row or column: the regret of not using its best cell." },
              { term: "Vogel's approximation method", definition: "An initial-solution heuristic that repeatedly allocates in the highest-penalty line at its cheapest cell." },
              { term: "Initial basic feasible solution", definition: "A first transportation solution with m + n - 1 allocations, ready for the optimality test." },
            ],
            examQuestions: [
              {
                q: "Explain the concept of penalty in Vogel's approximation method and use VAM to find an initial basic feasible solution for the transportation problem with supplies (50, 70, 30), demands (30, 60, 60) and the cost matrix [[6, 10, 4], [7, 5, 9], [8, 11, 6]].",
                marks: 7,
                outline: [
                  "Define the penalty: second-cheapest minus cheapest cost in each live row and column.",
                  "Round 1 penalties: rows 2, 2, 2; columns 1, 5, 5 - choose column D3 (penalty 5).",
                  "Allocate 50 at (S1, D3) at Rs 4 - S1 is exhausted; recompute.",
                  "Round 2: column D2 penalty 6 - allocate 60 at (S2, D2) at Rs 5; D2 done.",
                  "Round 3: column D3 penalty 3 - allocate 10 at (S3, D3) at Rs 6.",
                  "Finish: 10 at (S2, D1) at Rs 7 and 20 at (S3, D1) at Rs 8.",
                  "Total cost Rs 790 with five allocations - compare with north-west corner's Rs 1030.",
                ],
              },
              {
                q: "Why does VAM usually give a better starting solution than the north-west corner rule?",
                marks: 3,
              },
              {
                q: "How are ties between equal penalties resolved in VAM?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Testing optimality: the MODI (u-v) method",
            body: [
              "MODI - the modified distribution method, also called the u-v method - is duality specialised to transportation. Each row i carries a dual variable ui and each column j a vj; for every basic cell the pair must satisfy ui + vj = cij. One dual value may be fixed freely (set u1 = 0), and because a non-degenerate solution has exactly m + n - 1 basic cells, the equations determine every other ui and vj uniquely. For the VAM solution of section 2.2 the values come out as u = (0, 1, 2) and v = (6, 4, 4) - three and three unknowns from five equations, solved by walking the basic cells one at a time.",
              "The dual pair prices the unused routes. For a non-basic cell (i, j) the opportunity cost is delta_ij = ui + vj - cij: what the implied dual price of that route exceeds its actual cost. In a minimisation problem a positive delta means the route is underpriced - shipping through it would cut total cost - so the solution is optimal exactly when every delta is at or below zero. On the running solution the four non-basic cells score 0, -6, -4 and -5: all non-positive, so the Rs 790 plan is already optimal. (The zero on S1-D1 is a bonus: an alternative optimum exists at the same cost.)",
              "When some delta is positive, the algorithm improves. Enter the most positive delta cell and trace the unique closed loop that starts and ends there, turning only at basic cells with right-angle moves. Alternate plus and minus signs around the loop (the entering cell takes plus), and let theta be the smallest allocation on a minus cell; shift theta around the loop, driving one minus cell to zero - it leaves the basis. Recompute the u's and v's and the deltas and repeat. The stepping-stone method does the same work by tracing a loop for every unused cell - identical answers, far more labour, which is why MODI is the exam-room method of choice.",
            ],
            bullets: [
              "MODI equations: ui + vj = cij for every basic cell; set u1 = 0 and solve the rest.",
              "Running values: u = (0, 1, 2), v = (6, 4, 4) from the VAM plan's five basic cells.",
              "Opportunity cost: delta_ij = ui + vj - cij for each non-basic cell - the hidden saving on that route.",
              "Optimality rule (minimisation): optimal when every delta ≤ 0; here the deltas are 0, -6, -4 and -5, so Rs 790 is optimal.",
              "A zero delta on a non-basic cell reveals an alternative optimum at the same cost.",
              "Improvement: enter the most positive delta cell, trace its closed loop, shift theta = smallest minus allocation, recompute.",
              "Stepping-stone is the same logic with a loop per unused cell - MODI reaches identical answers with less writing.",
            ],
            table: {
              caption:
                "MODI check on the VAM plan (basic cells: S1-D3, S2-D1, S2-D2, S3-D1, S3-D3; u = (0, 1, 2), v = (6, 4, 4)).",
              headers: ["Non-basic cell", "ui + vj", "Cost cij", "Delta = ui + vj - cij", "Verdict"],
              rows: [
                ["S1 - D1", "0 + 6 = 6", "6", "0", "alternative optimum exists"],
                ["S1 - D2", "0 + 4 = 4", "10", "-6", "no saving"],
                ["S2 - D3", "1 + 4 = 5", "9", "-4", "no saving"],
                ["S3 - D2", "2 + 4 = 6", "11", "-5", "no saving"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The MODI optimality wheel",
              caption:
                "Solve the duals, price the unused routes, and either stop or swing theta around a closed loop and spin again.",
              steps: [
                { label: "Set u1 = 0", note: "one dual value is free to fix" },
                { label: "Solve ui + vj = cij", note: "walk the basic cells until all u and v are known" },
                { label: "Compute the deltas", note: "ui + vj - cij on every non-basic cell" },
                { label: "All deltas at or below zero?", note: "yes - optimal; no - the most positive cell enters" },
                { label: "Shift around the closed loop", note: "alternate plus and minus theta, then recompute" },
              ],
            },
            callout: {
              type: "warning",
              title: "Degeneracy breaks the u-v equations",
              body: "If allocations fall below m + n - 1, the basic cells cannot determine all the u's and v's and MODI stalls. Do not guess values - repair the degeneracy first with an epsilon allocation (section 2.4), then solve the equations. Writing a full set of u's and v's from an under-counted plan is a classic silent error.",
            },
            keyTerms: [
              { term: "MODI method", definition: "The u-v optimality test for transportation solutions using row and column dual variables." },
              { term: "Opportunity cost (delta)", definition: "For a non-basic cell, ui + vj - cij: the implied saving of routing units through that cell." },
              { term: "Closed loop", definition: "The unique rectilinear cycle through a non-basic cell and basic cells, used to reallocate theta with alternating signs." },
            ],
            examQuestions: [
              {
                q: "Explain the MODI (u-v) method and use it to test whether the VAM solution of section 2.2 (allocations S1-D3 = 50, S2-D1 = 10, S2-D2 = 60, S3-D1 = 20, S3-D3 = 10) is optimal for the given cost matrix. If not optimal, improve it.",
                marks: 7,
                outline: [
                  "State the equations ui + vj = cij for basic cells and fix u1 = 0.",
                  "Solve: v3 = 4, then u3 = 2, v1 = 6, u2 = 1 and v2 = 4.",
                  "Compute deltas for non-basic cells: S1-D1 gives 0, S1-D2 gives -6, S2-D3 gives -4, S3-D2 gives -5.",
                  "Apply the optimality rule: for minimisation, all deltas ≤ 0 means optimal.",
                  "Conclude the plan is optimal at Rs 790.",
                  "Note the zero delta on S1-D1: an alternative optimal solution exists.",
                  "Mention the improvement step (enter most positive delta, closed loop, theta shift) for the general case.",
                ],
              },
              {
                q: "What is a closed loop in a transportation solution, and what are the rules for tracing it?",
                marks: 3,
              },
              {
                q: "Distinguish between the MODI method and the stepping-stone method.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Unbalanced and degenerate transportation problems",
            body: [
              "Real data rarely balances. When total supply exceeds total demand, some stock will remain undelivered; when demand exceeds supply, some destination will be short. The repair is a dummy - a fictitious destination (for excess supply) or a fictitious source (for excess demand) carrying exactly the surplus, with zero unit costs when shortfall costs nothing and with real penalty costs when it does. The dummy behaves like any other row or column: the starting heuristics allocate to it, it counts in m + n - 1, and MODI prices it. After the dummy is added, the problem is balanced and the ordinary machinery runs.",
              "Degeneracy is the subtler disease: a basic feasible solution with fewer than m + n - 1 positive allocations. It is born in two ways. A starting heuristic can exhaust a row and a column simultaneously - the next allocation must then be recorded as a zero-valued basic cell. And a MODI reallocation can drive two minus cells to zero together, so the entering loop cannot complete its alternation. The consequence is the same: too few equations ui + vj = cij to determine all the duals, and closed loops that refuse to close.",
              "The cure is epsilon. Place a very small positive allocation in one unused cell chosen so that it is independent (creates no closed loop with existing basic cells) and unlocks the remaining dual equations, then treat it as basic throughout. If degeneracy reappears at a later iteration - it can - place a fresh epsilon. Two exam habits: check the allocation count immediately after every start and after every reallocation, and if a tie in the leaving-cell choice is what caused the degeneracy, remember that resolving ties arbitrarily can simply move the problem. A one-line diagnosis ('5 allocations = m + n - 1, non-degenerate, MODI can proceed') is worth stating explicitly at each stage.",
            ],
            bullets: [
              "Unbalanced, supply > demand: add a dummy destination whose demand is the surplus, with zero (or penalty) costs.",
              "Unbalanced, demand > supply: add a dummy source whose supply is the shortfall, same cost treatment.",
              "The dummy is an ordinary row or column: it receives allocations and counts in m + n - 1.",
              "Degeneracy: fewer than m + n - 1 allocated cells - the u-v equations cannot be solved and loops may not close.",
              "Causes: simultaneous row-column exhaustion during the start, or a tie in a MODI reallocation.",
              "Cure: an epsilon allocation in an independent unused cell that unlocks the remaining equations; re-apply if degeneracy returns.",
            ],
            table: {
              caption: "Diagnosis and remedy for the two pathologies.",
              headers: ["Situation", "Diagnosis", "Remedy"],
              rows: [
                ["Supply exceeds demand", "unbalanced problem", "add a dummy destination with the surplus demand and zero costs"],
                ["Demand exceeds supply", "unbalanced problem", "add a dummy source with the shortfall supply and zero (or penalty) costs"],
                ["Allocations below m + n - 1", "degenerate solution", "place epsilon in an independent unused cell and treat it as basic"],
                ["Row and column exhausted together", "degenerate start", "record the next allocation as a zero basic cell and continue"],
                ["MODI cannot solve all ui, vj", "degeneracy striking mid-test", "re-place epsilon in a cell that unlocks the remaining equations"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Count the basic cells, then decide",
              caption:
                "One count against m + n - 1 routes the problem: straight to MODI, an epsilon patch, or a dummy first.",
              start: "Count the basic allocations and compare with m + n - 1",
              branches: [
                { label: "equal to m + n - 1", outcome: "non-degenerate - solve for ui and vj and run MODI directly", good: true },
                { label: "fewer than m + n - 1", outcome: "degenerate - park an epsilon allocation in an independent unused cell, then continue", good: true },
                { label: "supply and demand totals differ", outcome: "unbalanced - add a dummy row or column with zero costs first, then restart", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Dummy costs are not always zero",
              body: "If the question attaches a shortage penalty or a storage cost to undelivered units, those figures go into the dummy row or column - not zeros. Read the problem statement for such rates; assuming zero costs when a penalty is given flips the optimal plan completely.",
            },
            keyTerms: [
              { term: "Dummy row or column", definition: "A fictitious source or destination added to balance an unbalanced transportation problem." },
              { term: "Degenerate solution", definition: "A basic feasible solution with fewer than m + n - 1 positive allocations." },
              { term: "Epsilon allocation", definition: "An arbitrarily small positive allocation placed in an independent cell to repair degeneracy." },
            ],
            examQuestions: [
              {
                q: "Explain unbalanced and degenerate transportation problems with their causes and remedies. Illustrate with a 2 x 2 example where the north-west corner method exhausts a row and a column simultaneously.",
                marks: 7,
                outline: [
                  "Define unbalanced: total supply differs from total demand.",
                  "Remedy: dummy destination (supply excess) or dummy source (demand excess) with appropriate costs.",
                  "Define degenerate: fewer than m + n - 1 allocations in a basic feasible solution.",
                  "Cause 1: simultaneous exhaustion of a row and column during a start.",
                  "Cause 2: a tie between two leaving cells during a MODI reallocation.",
                  "Consequence: u-v equations underdetermined; closed loops break.",
                  "Remedy: epsilon in an independent unused cell; re-apply if degeneracy recurs - illustrate on the 2 x 2 example.",
                ],
              },
              {
                q: "A problem has supply 100 and demand 90. What adjustment do you make before solving?",
                marks: 2,
              },
              {
                q: "State two situations in which a transportation solution becomes degenerate.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "The assignment problem and the Hungarian method",
            body: [
              "The assignment problem pairs n workers with n jobs, one worker per job, so that total cost is minimum. It looks like a transportation problem with unit supplies and demands - and technically it is, but a hopelessly degenerate one: only n of the n-squared cells are ever basic, far below the 2n - 1 the transportation algorithms expect. Solving it as a transportation problem works but wastes effort. The Hungarian method, published by Kuhn in 1955 honouring Konig and Egervary, exploits the problem's own structure: adding or subtracting a constant from any row or column changes every complete assignment by the same total, so it never changes which assignment is best.",
              "That invariance powers the algorithm. Step one: row reduction - subtract each row's minimum from that row. Step two: column reduction - subtract each column's minimum. Zeros now mark relatively cheap cells. Step three: cover all zeros with the minimum number of horizontal and vertical lines (Konig's theorem guarantees this equals the maximum number of independent zeros). If the lines number n, an optimal assignment sits on independent zeros - one zero per row and column, no two sharing a line - and the answer is read off. If fewer than n lines, adjust: find the smallest uncovered value, subtract it from every uncovered cell, add it to every doubly covered (crossed) cell, and return to the covering step.",
              "Variations fill the exam papers. An unbalanced problem (more jobs than workers) takes a dummy row or column of zeros. A maximisation problem (profits instead of costs) is converted by subtracting every entry from the largest entry of the matrix - the assignment minimising the converted matrix maximises the original. A forbidden assignment (a worker who cannot do a job) receives a prohibitively large cost M. On the worked 3 x 3 matrix of the code example, row and column reduction alone expose three independent zeros, and the optimal pairing (worker 1 to job 2, worker 2 to job 1, worker 3 to job 3) costs Rs 9 - confirmed by brute force over all six permutations.",
            ],
            bullets: [
              "Assignment model: one-to-one pairing of n workers to n jobs minimising total cost - a degenerate transportation problem.",
              "Row reduction and column reduction shift costs without changing the optimal assignment (adding or subtracting row/column constants is harmless).",
              "Cover all zeros with the minimum number of lines; by Konig's theorem this equals the maximum number of independent zeros.",
              "Lines = n: read the optimal assignment from independent zeros. Lines < n: subtract the smallest uncovered value everywhere uncovered, add it at crossings, re-cover.",
              "Unbalanced: add a dummy row or column of zeros. Maximisation: subtract all entries from the matrix maximum. Forbidden cell: cost M.",
              "Worked matrix [[9,2,7],[6,4,3],[5,8,1]]: optimal cost Rs 9 with worker 1 to job 2, worker 2 to job 1, worker 3 to job 3.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Hungarian reductions on a 3 x 3 cost matrix, with a brute-force check of the optimum.",
              code: `from itertools import permutations

def row_reduce(a):
    """Subtract each row's minimum from that row."""
    return [[v - min(row) for v in row] for row in a]

def col_reduce(a):
    """Subtract each column's minimum from that column."""
    cols = list(zip(*a))
    cols = row_reduce(cols)
    return [list(row) for row in zip(*cols)]

def best_assignment(a):
    """Brute-force check over every one-to-one assignment."""
    n = len(a)
    return min((sum(a[i][p[i]] for i in range(n)), p)
               for p in permutations(range(n)))

costs = [[9, 2, 7],
         [6, 4, 3],
         [5, 8, 1]]

after_rows = row_reduce(costs)
print(after_rows)   # [[7, 0, 5], [3, 1, 0], [4, 7, 0]]
after_cols = col_reduce(after_rows)
print(after_cols)   # [[4, 0, 5], [0, 1, 0], [1, 7, 0]]
# three independent zeros: (1,2), (2,1), (3,3) - assign there

print(best_assignment(costs))
# (9, (1, 0, 2)): worker 1 -> job 2, worker 2 -> job 1,
# worker 3 -> job 3, total cost Rs 9`,
            },
            diagram: {
              kind: "pipeline",
              title: "The Hungarian method, stage by stage",
              caption:
                "Reduce, cover, and adjust until the minimum line count reaches n - then read the pairing off the independent zeros.",
              stages: [
                { label: "Balance the matrix", note: "dummy row or column of zeros if the counts differ" },
                { label: "Row reduction", note: "subtract each row minimum" },
                { label: "Column reduction", note: "subtract each column minimum" },
                { label: "Cover the zeros", note: "minimum lines; if lines = n, assign on independent zeros" },
                { label: "Adjust and repeat", note: "smallest uncovered value out, back in at crossings" },
              ],
            },
            callout: {
              type: "exam",
              title: "Profit matrices must be converted first",
              body: "Assignment questions alternate between cost and profit wording. Before any reduction, check the sense: for maximisation, subtract every entry from the largest entry in the matrix and state that you did so. Students who reduce a profit matrix directly produce a confidently wrong answer worth almost nothing.",
            },
            keyTerms: [
              { term: "Assignment problem", definition: "The problem of pairing n agents to n tasks one-to-one so that total cost (or profit) is optimised." },
              { term: "Hungarian method", definition: "The assignment algorithm using row and column reductions and minimum zero-covering lines." },
              { term: "Independent zeros", definition: "Zeros in the reduced matrix no two of which share a row or column; they mark the optimal assignment." },
            ],
            examQuestions: [
              {
                q: "Explain the Hungarian method for the assignment problem and solve the cost matrix [[9, 2, 7], [6, 4, 3], [5, 8, 1]], showing every reduction and covering step.",
                marks: 7,
                outline: [
                  "State the invariance: subtracting row or column constants leaves the optimal assignment unchanged.",
                  "Row reduction: subtract 2, 3 and 1 to get [[7,0,5],[3,1,0],[4,7,0]].",
                  "Column reduction: subtract column minima 3, 0, 0 to get [[4,0,5],[0,1,0],[1,7,0]].",
                  "Cover the zeros with the minimum number of lines - three lines suffice, so lines = n = 3.",
                  "Select independent zeros at (1,2), (2,1) and (3,3).",
                  "Read the assignment: worker 1 to job 2, worker 2 to job 1, worker 3 to job 3.",
                  "Total cost = 2 + 6 + 1 = Rs 9; verify against the original matrix.",
                ],
              },
              {
                q: "How do you convert a maximisation assignment problem into the standard form?",
                marks: 2,
              },
              {
                q: "What is done in the Hungarian method when the minimum number of covering lines is less than n?",
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
      title: "Network Analysis",
      summary:
        "Project management mathematics: drawing activity-on-arrow networks and running CPM's forward and backward passes, PERT's three time estimates with probability of completion by a target date, the four floats that measure scheduling slack, crashing along the time-cost trade-off, and levelling or smoothing the resource profile.",
      chapter: {
        number: "03",
        title: "Network Analysis",
        intro:
          "Unit III turns OR onto projects. CPM draws the project as a network of activities and events, then runs a forward pass for earliest times and a backward pass for latest times; their differences are the floats, and the chain of zero-float activities is the critical path. PERT overlays uncertainty with three time estimates per activity, converts them to expected times and variances, and answers probability questions through the normal curve. Crashing spends money to buy time along the cheapest critical slopes, and resource levelling smooths the manpower profile without disturbing the critical chain.",
        inOneBreath:
          "Draw the activity-on-arrow network from the precedence list, number events by the Fulkerson rule, run the forward pass (earliest start of an activity = the largest earliest finish of its predecessors; the project duration is the largest finish at the terminal event) and the backward pass (latest finish = the smallest latest start of successors). Total float = latest start minus earliest start; free float protects successors; independent float protects both directions; interfering float is total minus free. The zero-float chain is the critical path. PERT replaces each duration with te = (to + 4tm + tp)/6 and variance ((tp - to)/6)^2; the project expected time and variance come from the critical path, and Z = (Ts - Te)/sigma converts a target date into a probability. Crashing computes cost slopes (crash minus normal cost over time saved), crashes the cheapest critical activity while its slope is below the daily indirect saving, and rechecks for new critical paths. Resource levelling shifts non-critical activities within float to flatten the manpower histogram; smoothing schedules under a fixed resource ceiling.",
        sections: [
          {
            number: "3.1",
            title: "Project networks and CPM",
            body: [
              "CPM - the critical path method, developed in 1957 on Du Pont plant maintenance - represents a project as a network in which arrows are activities consuming time and nodes are events marking instants. The input is a table of activities with durations and immediate predecessors; the network must respect every precedence, have a single start and a single end event, and contain no loops. When two activities share both start and end events, or a precedence cannot be drawn without one, a dummy activity of zero duration is inserted purely to keep the logic unambiguous. Events are numbered so every arrow points from a smaller number to a larger one - the Fulkerson rule.",
              "The forward pass computes earliest times. An activity's earliest start is the largest earliest finish among its predecessors (zero if it has none); its earliest finish adds its duration. Walking the running project - A (4 days) and B (6) in parallel, C (3) after A, E (4) after A, D (5) after B, F (2) after C and E, G (3) after D and F - the earliest finish at the terminal event is 14 days: that is the minimum possible project duration. The backward pass mirrors it with latest times: an activity's latest finish is the smallest latest start among its successors (the project duration at the terminal event); latest start subtracts the duration.",
              "The two passes pair up to expose slack - the subject of section 3.3 - and to identify the critical path: the chain of activities whose earliest and latest times coincide, so any delay there delays the project. In the running project only B, D and G satisfy this, and B-D-G (6 + 5 + 3 = 14 days) is the critical path; A-E-F-G at 13 days and A-C-F-G at 12 days are near-critical and worth watching. CPM assumes durations are known with confidence - reasonable for construction with historical databases. When durations are genuinely uncertain, PERT (next section) takes over.",
            ],
            bullets: [
              "Activities are time-consuming arrows; events are instantaneous nodes; dummies (zero duration) exist only to preserve logic.",
              "Fulkerson rule: number events so every arrow runs from a smaller to a larger number.",
              "Forward pass: earliest start = max of predecessors' earliest finishes; earliest finish = earliest start + duration.",
              "Backward pass: latest finish = min of successors' latest starts; latest start = latest finish - duration.",
              "Running project: A(4), B(6), C(3), D(5), E(4), F(2), G(3) - duration 14 days.",
              "Critical path: the zero-float chain B-D-G = 14 days; near-critical A-E-F-G = 13 days.",
            ],
            table: {
              caption:
                "The running project: durations, predecessors and the forward pass.",
              headers: ["Activity", "Duration (days)", "Predecessors", "Earliest start", "Earliest finish"],
              rows: [
                ["A", "4", "-", "0", "4"],
                ["B", "6", "-", "0", "6"],
                ["C", "3", "A", "4", "7"],
                ["D", "5", "B", "6", "11"],
                ["E", "4", "A", "4", "8"],
                ["F", "2", "C, E", "8", "10"],
                ["G", "3", "D, F", "11", "14"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From activity list to critical path",
              caption:
                "The CPM production line - the same five stages every network question in the paper will demand.",
              stages: [
                { label: "List activities", note: "durations and immediate predecessors" },
                { label: "Draw the network", note: "events as nodes, activities as arrows, dummies where logic demands" },
                { label: "Number the events", note: "Fulkerson rule: head number above tail number" },
                { label: "Forward pass", note: "earliest start and finish; project duration at the end event" },
                { label: "Backward pass", note: "latest start and finish; floats and the critical path emerge" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw big, label every event",
              body: "Network diagrams earn their marks through the numbers written beside events: earliest time on the left box half, latest time on the right. A cramped diagram with missing event labels cannot be marked generously even if the logic is right - and dummies must be drawn dashed and labelled.",
            },
            keyTerms: [
              { term: "Activity", definition: "A time-consuming task of the project, drawn as an arrow in activity-on-arrow networks." },
              { term: "Dummy activity", definition: "A zero-duration arrow inserted only to keep precedence logic or numbering unambiguous." },
              { term: "Forward pass", definition: "The left-to-right computation of earliest start and finish times; the terminal earliest finish is the project duration." },
            ],
            examQuestions: [
              {
                q: "Construct the CPM network for the activities A(4), B(6), C(3), D(5), E(4), F(2), G(3) with predecessors: A and B none, C and E after A, D after B, F after C and E, G after D and F. Run the forward and backward passes and identify the critical path and project duration.",
                marks: 7,
                outline: [
                  "Draw the network: A and B leave the start event; C and E follow A; D follows B; F merges C and E; G merges D and F.",
                  "Forward pass: EFT of A = 4, B = 6, C = 7, E = 8, so F starts at 8 and ends 10.",
                  "D runs 6 to 11; G starts at max(11, 10) = 11 and finishes 14 - project duration 14 days.",
                  "Backward pass from 14: G latest start 11; D latest finish 11, start 6; F latest finish 11, start 9.",
                  "C latest finish 9, start 6; E latest finish 9, start 5; A latest finish 5, start 1; B latest 0 to 6.",
                  "Zero-float chain: B (0-6), D (6-11), G (11-14).",
                  "Conclude: critical path B-D-G, 14 days; A-E-F-G at 13 days is near-critical.",
                ],
              },
              {
                q: "What is a dummy activity and when is it required?",
                marks: 2,
              },
              {
                q: "State the Fulkerson rule for numbering events.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "PERT: three time estimates and probability of completion",
            body: [
              "PERT - the program evaluation and review technique, built for the Polaris missile programme in 1958 - admits what CPM denies: durations are guesses. For every activity three estimates are collected: the optimistic time to (everything goes right), the most likely time tm (the usual case), and the pessimistic time tp (everything that can go wrong, does). The model treats each duration as a beta-distributed random variable whose mean is te = (to + 4tm + tp)/6 - the four-to-one weighting reflects the dominance of the most likely value - and whose variance is ((tp - to)/6)^2, so the spread between optimism and pessimism measures the risk.",
              "The project inherits its statistics from the critical path. The expected project length Te is the sum of the expected times along the critical path, and - assuming activities are independent - the project variance is the sum of the same activities' variances, with sigma its square root. Because the sum of many activities trends to normality, the probability of finishing by a target date Ts is read from the standard normal curve: Z = (Ts - Te)/sigma, then look up P(Z ≤ z). On the running path of four activities A(3, 6, 9), B(6, 9, 12), C(9, 12, 15), D(3, 6, 9), each has te of 6, 9, 12 and 6 days with variance 1, so Te = 33 days and sigma = 2 days. A promise of 35 weeks gives Z = 1, hence an 84.13 per cent chance of on-time completion.",
              "Read the numbers like a manager. There is a fifty per cent chance of finishing within Te itself - quoting Te as a commitment is a coin toss. Each extra sigma of promise buys roughly 34, 14 and 2 more percentage points of safety (84, 98 and beyond). Two caveats belong in a full answer: the merge event bias - when several near-critical paths converge, the true completion probability drops below the single-path calculation - and the independence assumption, which real projects routinely violate (rain delays everything at once). PERT is event-oriented and probabilistic; CPM is activity-oriented, deterministic and (in the next-but-one section) trades time against cost.",
            ],
            bullets: [
              "Three estimates per activity: optimistic to, most likely tm, pessimistic tp.",
              "Expected time te = (to + 4tm + tp)/6; variance = ((tp - to)/6)^2; sigma is the square root of the variance.",
              "Project statistics come from the critical path: Te = sum of te, variance = sum of variances (independence assumed).",
              "Probability of meeting target Ts: Z = (Ts - Te)/sigma, then the normal table.",
              "Running path: te values 6, 9, 12, 6 give Te = 33 days, variances 1 each give sigma = 2 days.",
              "Ts = 35 days gives Z = 1 and a probability of 0.8413 - about 84 per cent.",
              "Caveats: merge-event bias lowers the true probability; correlated activities break the independence assumption.",
            ],
            codeExample: {
              language: "python",
              caption:
                "PERT statistics for the four-activity critical path and the probability of finishing within 35 days.",
              code: `import math

def pert(to, tm, tp):
    """Expected time and variance from the three PERT estimates."""
    te = (to + 4 * tm + tp) / 6
    var = ((tp - to) / 6) ** 2
    return te, var

# critical path A -> B -> C -> D (in days)
acts = {"A": (3, 6, 9), "B": (6, 9, 12),
        "C": (9, 12, 15), "D": (3, 6, 9)}

Te, var = 0.0, 0.0
for name, (o, m, p) in acts.items():
    t, v = pert(o, m, p)
    Te += t
    var += v
    print(name, "te =", t, " variance =", v)
# A te = 6.0 variance = 1.0   B te = 9.0 variance = 1.0
# C te = 12.0 variance = 1.0  D te = 6.0 variance = 1.0

sigma = math.sqrt(var)
print("Te =", Te, "days, sigma =", sigma)   # 33.0 days, 2.0 days

Ts = 35                       # promised completion time
z = (Ts - Te) / sigma
prob = 0.5 * (1 + math.erf(z / math.sqrt(2)))
print("Z =", z, " P(finish by day 35) =", round(prob, 4))
# Z = 1.0  P = 0.8413 - about an 84 per cent chance`,
            },
            diagram: {
              kind: "flow",
              title: "From three guesses to a probability",
              caption:
                "The PERT chain: estimates become expectations, expectations become a project distribution, and the normal curve prices the promise.",
              steps: [
                { label: "Collect to, tm, tp", note: "three estimates per activity" },
                { label: "te = (to + 4tm + tp) / 6", note: "beta-distribution mean" },
                { label: "Variance = ((tp - to) / 6)^2", note: "per activity" },
                { label: "Add along the critical path", note: "Te and total variance; sigma is its square root" },
                { label: "Z = (Ts - Te) / sigma", note: "read the probability from the normal table" },
              ],
            },
            callout: {
              type: "warning",
              title: "Sum variances, not sigmas",
              body: "The classic PERT slip is adding the standard deviations along the path. Only variances add under independence; the path sigma is the square root of the summed variances. Also compute Z with the target minus Te - reversing the subtraction flips the tail and turns 84 per cent into 16.",
            },
            keyTerms: [
              { term: "PERT", definition: "Program evaluation and review technique: a probabilistic network method using three time estimates per activity." },
              { term: "Expected time (te)", definition: "The beta-distribution mean (to + 4tm + tp)/6 used as the activity duration." },
              { term: "Z-score (PERT)", definition: "The standard normal deviate (Ts - Te)/sigma that converts a target date into a completion probability." },
            ],
            examQuestions: [
              {
                q: "Explain the three PERT time estimates and the underlying assumptions. For the critical path of activities A(3,6,9), B(6,9,12), C(9,12,15) and D(3,6,9) days, find the expected project length, its standard deviation and the probability of completing the project within 35 days.",
                marks: 7,
                outline: [
                  "Define to, tm and tp and the beta-distribution assumption with statistical independence of activities.",
                  "Compute te for each activity: 6, 9, 12 and 6 days.",
                  "Expected project length Te = 6 + 9 + 12 + 6 = 33 days.",
                  "Compute each variance ((tp - to)/6)^2 = 1 and sum to 4.",
                  "Standard deviation sigma = square root of 4 = 2 days.",
                  "Z = (35 - 33)/2 = 1.0.",
                  "From the normal table, P(Z ≤ 1.0) = 0.8413 - about an 84 per cent chance; note the 50 per cent chance at Te itself.",
                ],
              },
              {
                q: "Write the formulae for expected time and variance of an activity in PERT.",
                marks: 2,
              },
              {
                q: "What is merge-event bias in PERT analysis?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Critical path and the four floats",
            body: [
              "Float is the currency of scheduling: how long an activity can slip without damaging something. Total float TF = LST - EST = LFT - EFT measures delay against the project itself - an activity with total float 2 can start two days late and the project still finishes on time. Free float FF = EST of the successors - EFT of the activity measures delay against the next activities only: slippage within free float consumes no one else's slack. Independent float, the most conservative, discounts help from predecessors too: max(0, EST of successor - LFT of predecessor - duration). Interfering float completes the family: TF - FF, the portion of total float that steals slack from successors.",
              "The running project makes the distinctions concrete. Activity A has EST 0, EFT 4, LST 1 and LFT 5: total float 1, but free float 0 - its delay of one day eats directly into the floats of C and E. Activity C has total float 2 yet free float only 1, because F cannot start before day 8 regardless. E shows the same pattern (TF 1, FF 0), while F has TF 1 and FF 1. B, D and G - the critical activities - have every float zero. Note how floats are shared along a chain: A, E and F together guard only the single day separating their 13-day path from the 14-day critical path.",
              "Floats drive every downstream technique. Resource levelling (section 3.5) shifts non-critical activities within their free floats to flatten manpower histograms. Payment and delay-claim analysis in civil contracts argues in total floats. Negative total float appears whenever an imposed deadline is shorter than the critical path - the project is already late by that much, and crashing (section 3.4) is the standard response. In the exam, present floats in the full table format (EST, EFT, LST, LFT, TF, FF per activity) - the table itself carries marks before any interpretation begins.",
            ],
            bullets: [
              "Total float: LST - EST (equivalently LFT - EFT) - delay tolerable without delaying the project.",
              "Free float: successors' EST minus the activity's EFT - delay tolerable without touching any successor's float.",
              "Independent float: max(0, successor EST - predecessor LFT - duration) - safe even if predecessors are maximally late.",
              "Interfering float: total float minus free float - the part that must come out of the successors' allowance.",
              "Critical activities (B, D, G here) have all floats zero; the critical path is the zero-float chain.",
              "Floats are shared along a path: A, E and F jointly guard only one day in the running project.",
              "Negative total float signals an imposed deadline shorter than the critical path - crash or renegotiate.",
            ],
            table: {
              caption:
                "Complete float table for the running project (durations, earliest and latest times, total and free float).",
              headers: ["Activity", "Duration", "EST", "EFT", "LST", "LFT", "Total float", "Free float"],
              rows: [
                ["A", "4", "0", "4", "1", "5", "1", "0"],
                ["B", "6", "0", "6", "0", "6", "0", "0"],
                ["C", "3", "4", "7", "6", "9", "2", "1"],
                ["D", "5", "6", "11", "6", "11", "0", "0"],
                ["E", "4", "4", "8", "5", "9", "1", "0"],
                ["F", "2", "8", "10", "9", "11", "1", "1"],
                ["G", "3", "11", "14", "11", "14", "0", "0"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Critical versus non-critical activities",
              caption:
                "The critical chain carries the project; everything else buys flexibility - and every rupee of that flexibility has a name.",
              left: {
                heading: "Critical (B, D, G)",
                items: [
                  "every float is zero",
                  "earliest times equal latest times",
                  "a one-day delay delays the project one day",
                  "cannot move for resource levelling",
                  "drawn bold or red on the network",
                ],
              },
              right: {
                heading: "Non-critical (A, C, E, F)",
                items: [
                  "total float of 1 or 2 days",
                  "can slip within the float",
                  "free float protects successors only",
                  "shiftable to smooth the resource profile",
                  "float is shared along the whole chain",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The float table is the answer",
              body: "Questions asking for floats expect the full seven-column table: activity, duration, EST, EFT, LST, LFT, TF, FF. Build it directly from the two passes of section 3.1 and total each float row from the pass columns - arithmetic slips are far more common here than conceptual ones.",
            },
            keyTerms: [
              { term: "Total float", definition: "The delay an activity can absorb without delaying the project: LST - EST." },
              { term: "Free float", definition: "The delay an activity can absorb without delaying the earliest start of any successor." },
              { term: "Critical path", definition: "The longest path through the network; its activities have zero total float and set the project duration." },
            ],
            examQuestions: [
              {
                q: "Define total float, free float, independent float and interfering float, and compute all of them for the activities of the running project (A 4, B 6, C 3, D 5, E 4, F 2, G 3 days with the precedences of section 3.1).",
                marks: 7,
                outline: [
                  "Define total float: LST - EST, the delay the project itself can absorb.",
                  "Define free float: successors' EST minus the activity's EFT.",
                  "Define independent float: successor EST - predecessor LFT - duration, floored at zero.",
                  "Define interfering float: total float minus free float.",
                  "Reproduce the pass values from section 3.1 for all seven activities.",
                  "Tabulate: A TF 1 FF 0; C TF 2 FF 1; E TF 1 FF 0; F TF 1 FF 1; B, D, G all zero.",
                  "Identify the critical path B-D-G (zero floats) and note that independent floats here are all zero.",
                ],
              },
              {
                q: "What does a negative total float indicate, and how is it dealt with?",
                marks: 3,
              },
              {
                q: "The total float of an activity is 4 days and its free float is 1 day. What is its interfering float?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Project crashing: the time-cost trade-off",
            body: [
              "Every activity carries two durations and two costs. The normal time is the cheap, unhurried duration with its normal cost; the crash time is the shortest technically possible duration, bought at a crash cost. The cost slope - (crash cost - normal cost)/(normal time - crash time) - prices each day saved: for the running project's critical activities the slopes are Rs 2000 per day for B (6 to 4 days for Rs 9000 to Rs 13000), Rs 3000 for D (5 to 3 days for Rs 8000 to Rs 14000) and Rs 2000 for G (3 to 2 days for Rs 6000 to Rs 8000). Meanwhile indirect costs - overheads, supervision, equipment hire - accrue per calendar day, here Rs 2500. Total cost is direct plus indirect, and it is U-shaped in duration.",
              "Crashing is a greedy loop. Crash the critical activity with the cheapest slope first, one time unit at a time, because only critical work shortens the project. After every crash, recheck the critical path: the shortened path may hand criticality to another (in this project A-E-F-G at 13 days waits one day behind), and if two paths become critical simultaneously, both must be crashed together - compare the summed slopes against the daily saving. Stop when the cheapest available slope is at least the indirect saving per day, because further crashing raises total cost.",
              "The running project walks the loop cleanly. The normal schedule costs Rs 23000 direct + 14 days at Rs 2500 = Rs 58000 total. Crash G one day (slope 2000 < 2500): 13 days, Rs 57500. Crash B its two days (slope 2000 each): 12 days at Rs 57000, then 11 days at Rs 56500. The next cheapest critical slope is D at Rs 3000, which exceeds the Rs 2500 daily saving - stop. Optimum duration is 11 days at Rs 56500, not the maximum crash of 9 days (which would cost more than it saves). The crashing table - step, activity crashed, duration, direct, indirect, total - is the expected exam presentation.",
            ],
            bullets: [
              "Cost slope = (crash cost - normal cost)/(normal time - crash time): the rupees per day saved.",
              "Running slopes: B Rs 2000/day, D Rs 3000/day, G Rs 2000/day; indirect cost Rs 2500/day.",
              "Only critical activities can shorten the project - crashing non-critical work buys nothing.",
              "Crash cheapest-first, one time unit at a time, and recheck the critical path after every step.",
              "Two simultaneous critical paths must be crashed in parallel - compare the summed slopes with the daily saving.",
              "Stop when the cheapest slope ≥ the indirect saving; optimum: 11 days at Rs 56500 (normal 14 days at Rs 58000).",
            ],
            codeExample: {
              language: "python",
              caption:
                "Cost slopes and the crashing ladder for the running project.",
              code: `INDIRECT = 2500                    # overhead, Rs per day

def slope(tn, tc, cn, cc):
    """Cost slope: extra rupees per day saved by crashing."""
    return (cc - cn) / (tn - tc)

# critical activities: (normal time, crash time, normal cost, crash cost)
B = (6, 4, 9000, 13000)
D = (5, 3, 8000, 14000)
G = (3, 2, 6000, 8000)

print("slope B:", slope(*B))     # 2000.0 Rs/day
print("slope D:", slope(*D))     # 3000.0 Rs/day
print("slope G:", slope(*G))     # 2000.0 Rs/day

duration, direct = 14, 23000     # normal schedule
print(duration, "days: total Rs", direct + INDIRECT * duration)
# 14 days: total Rs 58000

# step 1: crash G one day (slope 2000 < saving 2500)
duration, direct = 13, direct + slope(*G) * 1
print(duration, "days: total Rs", direct + INDIRECT * duration)
# 13 days: total Rs 57500

# step 2: crash B two days (2000 < 2500 each day)
duration, direct = duration - 2, direct + slope(*B) * 2
print(duration, "days: total Rs", direct + INDIRECT * duration)
# 11 days: total Rs 56500

# next cheapest critical slope is D at 3000 > 2500: stop
print("optimum: 11 days at Rs 56500")`,
            },
            diagram: {
              kind: "flow",
              title: "The crashing decision loop",
              caption:
                "Crash cheap, recheck, repeat - the loop halts the moment a saved day costs more than it pays.",
              steps: [
                { label: "Normal schedule and costs", note: "direct per activity, indirect per day" },
                { label: "Compute cost slopes", note: "(crash cost - normal cost) / (normal time - crash time)" },
                { label: "Crash the cheapest critical activity", note: "one time unit at a time" },
                { label: "Recheck the critical path", note: "new paths may turn critical" },
                { label: "Stop at the total-cost minimum", note: "when the cheapest slope exceeds the daily saving" },
              ],
            },
            callout: {
              type: "warning",
              title: "The optimum is not the fastest possible",
              body: "Crashing questions end at the total-cost minimum, not the shortest duration. When the cheapest available slope exceeds the daily indirect saving, every further day saved costs more than it returns - state that comparison explicitly, because continuing to crash 'for safety' is exactly the error examiners plant as a distractor.",
            },
            keyTerms: [
              { term: "Cost slope", definition: "The extra direct cost per unit of time saved by crashing an activity." },
              { term: "Crashing", definition: "Shortening the project by reducing activity durations along the critical path at extra cost." },
              { term: "Optimum duration", definition: "The project duration at which the sum of direct and indirect costs is minimum." },
            ],
            examQuestions: [
              {
                q: "Explain project crashing and the concept of cost slope. For the running project with critical activities B (normal 6 days, crash 4, costs Rs 9000 and Rs 13000), D (5 to 3 days, Rs 8000 to Rs 14000) and G (3 to 2 days, Rs 6000 to Rs 8000), normal duration 14 days, direct cost Rs 23000 and indirect cost Rs 2500 per day, find the optimum duration and minimum total cost.",
                marks: 7,
                outline: [
                  "Define crashing and cost slope with the formula.",
                  "Compute slopes: B (13000-9000)/(6-4) = 2000; D = 3000; G = 2000 Rs per day.",
                  "Normal: 14 days, direct 23000 + indirect 35000 = Rs 58000.",
                  "Crash G one day (slope 2000 < saving 2500): 13 days, Rs 57500.",
                  "Crash B two days (2000 < 2500 each): 12 days Rs 57000, then 11 days Rs 56500; check the near-critical path stays non-critical.",
                  "Next cheapest slope D = 3000 > 2500 - further crashing increases total cost.",
                  "Conclude: optimum 11 days at Rs 56500; present the crashing table.",
                ],
              },
              {
                q: "Why must the critical path be re-examined after every crashing step?",
                marks: 3,
              },
              {
                q: "Define cost slope and write its formula.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Resource levelling and resource smoothing",
            body: [
              "CPM schedules time; sites must also schedule people. Laying the network's activities on a calendar (the Gantt or bar chart) produces a resource profile: total demand per period when every activity starts at its earliest time. Early-start profiles are usually jagged - recruitment spikes followed by idle troughs - and jagged profiles are expensive: hired-then-fired crews, mobilised-then-idle machines. The two smoothing techniques differ in what they hold fixed: levelling keeps the project duration fixed and flattens the profile using floats; smoothing (resource-limited scheduling) keeps a resource ceiling fixed and lets the duration grow if it must. Beware: some textbooks interchange the names - define whichever you use.",
              "The running demonstration is deliberately minimal. Activities A, B and C are critical and sequential pairs: A and B run days 1-4 with 4 men each, C runs days 5-8 with 4 men. Non-critical D (4 days, 4 men, total float 4) could start at day 1, stacking 12 men on days 1-4 and leaving 4 on days 5-8. Shifting D to days 5-8 - entirely within its float, delaying nothing - levels the profile to a uniform 8 men every day: the peak drops by one third with zero time cost. The mechanics generalise: identify the peak periods, list the non-critical activities running there, and slide them within their free floats (total float if successors can also shift) until the histogram flattens.",
              "The technique has limits worth stating in a full answer. Critical activities cannot move at all - if the peak consists only of critical work, levelling within the fixed duration is impossible and the options become overtime, additional shifts, subcontracting or logic changes. A late-start schedule (every activity at its latest start) is often already flatter than the early-start one and is the standard first trial. And when the resource ceiling is absolutely fixed - one crane, one batching plant - the problem becomes resource-constrained scheduling: delay the lower-priority activities, accept the extension, and re-run the network to find the new critical path and the new floats.",
            ],
            bullets: [
              "Resource profile: total demand per period from the time-scaled network (bar chart).",
              "Levelling: duration fixed - shift non-critical activities within floats to flatten peaks.",
              "Smoothing: resource ceiling fixed - schedule under the limit and accept duration growth if needed.",
              "Some books swap the two names - always define the version you are applying.",
              "Running demo: D shifted within its float cuts the peak from 12 men (days 1-4) to a uniform 8 men.",
              "Critical activities cannot be shifted; persistent peaks force overtime, subcontracting or logic changes.",
              "The late-start schedule is often flatter than the early-start schedule - try it first.",
            ],
            table: {
              caption:
                "Levelling the demo project: A and B (days 1-4, 4 men each) critical, C (days 5-8, 4 men) critical, D (4 days, 4 men) with 4 days float.",
              headers: ["Period (days)", "Early-start demand", "Levelled demand", "Comment"],
              rows: [
                ["1 - 4", "A 4 + B 4 + D 4 = 12", "A 4 + B 4 = 8", "D was stacked on the critical pair"],
                ["5 - 8", "C 4 = 4", "C 4 + D 4 = 8", "the trough is filled by D's float"],
                ["Peak", "12 men", "8 men", "peak cut by one third, duration unchanged at 8 days"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Which technique, under which constraint?",
              caption:
                "The deadline and the resource ceiling together pick the tool - or reveal that only plain CPM is needed.",
              axes: { x: "Project deadline", y: "Resource ceiling" },
              quadrants: [
                { label: "Deadline fixed, ceiling imposed", note: "most constrained: level within floats, then renegotiate scope or time" },
                { label: "Deadline fixed, no ceiling", note: "classic levelling: shift non-critical work within floats to flatten the profile" },
                { label: "Deadline flexible, ceiling imposed", note: "smoothing: schedule under the limit and accept a longer project" },
                { label: "Deadline flexible, no ceiling", note: "plain CPM early-start schedule is sufficient" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the histogram before and after",
              body: "Resource questions are marked on the histogram: period-by-period bars for the early-start schedule, the shifted activities arrowed across, and the levelled profile drawn beside it. Annotate the peak values (12 to 8 in the demo) - those two numbers are the answer.",
            },
            keyTerms: [
              { term: "Resource profile", definition: "The histogram of total resource demand per period implied by a schedule." },
              { term: "Resource levelling", definition: "Rescheduling non-critical activities within their floats to reduce resource fluctuations at fixed duration." },
              { term: "Resource smoothing", definition: "Scheduling under a fixed resource limit, extending the duration when the ceiling demands it." },
            ],
            examQuestions: [
              {
                q: "Differentiate resource levelling and resource smoothing. For a project whose critical activities A and B occupy days 1-4 with 4 men each and critical activity C occupies days 5-8 with 4 men, while non-critical activity D (4 days, 4 men, total float 4) is scheduled on days 1-4, level the resource profile and state the change in peak demand.",
                marks: 7,
                outline: [
                  "Define levelling: fixed duration, floats used to flatten the profile.",
                  "Define smoothing: fixed resource ceiling, duration may extend.",
                  "Draw the early-start histogram: 12 men on days 1-4, 4 men on days 5-8.",
                  "Identify D as the only shiftable activity, with 4 days of float.",
                  "Shift D to days 5-8, entirely within its float - no successor delayed, duration unchanged.",
                  "Draw the levelled histogram: a uniform 8 men across all 8 days.",
                  "Conclude: peak reduced from 12 to 8 men (one third) at zero cost in time.",
                ],
              },
              {
                q: "Why can critical activities never be shifted during resource levelling?",
                marks: 2,
              },
              {
                q: "What options remain when a resource peak consists only of critical activities?",
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
      title: "Queuing Theory and Game Theory",
      summary:
        "Two models of conflict and congestion: queuing theory with its arrival-service structure, Kendall notation and the M/M/1 and M/M/s performance measures, and two-person zero-sum game theory with pure strategies at the saddle point and mixed strategies found through dominance and the graphical method.",
      chapter: {
        number: "04",
        title: "Queuing and Game Theory",
        intro:
          "Unit IV models situations where entities interact - customers waiting for servers, players contesting a payoff. The queuing half defines the arrival process, queue discipline and service mechanism, encodes them in Kendall notation, and derives the steady-state measures of the M/M/1 and multi-server M/M/s models with Little's law binding them together. The game half sets up two-person zero-sum games as payoff matrices, locates pure-strategy saddle points through maximin and minimax, and - when no saddle exists - reduces the matrix by dominance and solves mixed strategies graphically.",
        inOneBreath:
          "A queuing system is arrivals (Poisson at rate lambda), a queue with a discipline (usually first-come-first-served) and service channels (exponential at rate mu each), written in Kendall notation A/B/s. M/M/1 needs rho = lambda/mu below 1, and then P0 = 1 - rho, Pn = (1 - rho) rho^n, Ls = rho/(1 - rho), Lq = rho^2/(1 - rho), Ws = 1/(mu - lambda), Wq = lambda/(mu(mu - lambda)), with Little's law linking Ls = lambda Ws and Lq = lambda Wq. M/M/s replaces the formulas with the P0 sum and Lq = P0 a^s rho/(s!(1 - rho)^2) where a = lambda/mu and rho = lambda/(s mu). A two-person zero-sum game is a payoff matrix; maximin (best of the row minima) equal to minimax (best of the column maxima) gives a saddle point and pure strategies; otherwise dominance deletes inferior rows and columns, and 2 x n or m x 2 games solve graphically by minimising the upper envelope over the mixing probability, the 2 x 2 case by the oddments formulas.",
        sections: [
          {
            number: "4.1",
            title: "Queuing systems and Kendall notation",
            body: [
              "Queues are the mathematics of waiting: customers (people, machines, trucks, data packets) arrive at a facility, wait if all servers are busy, receive service and leave. The model has five components. The calling population is the pool of potential customers (effectively infinite when one defection does not change arrival rates). The arrival process is usually the Poisson stream - customers arriving one at a time, independently, at average rate lambda - which is equivalent to exponential inter-arrival times. The queue holds the waiting customers under a discipline: first-come-first-served, last-come-first-served, service-in-random-order or priority classes. The service mechanism is the number of parallel channels s and the service-time distribution, classically exponential with rate mu per server. Capacity and population limits complete the description.",
              "Kendall's notation compresses all of it into A/B/s, extended to six positions: arrival process, service distribution, servers, capacity, calling population and discipline - the last three defaulting to infinity, infinity and FCFS. The symbol M (Markov, i.e. exponential) marks the memoryless case; D is deterministic (constant); Ek is Erlang-k; G is any general distribution. M/M/1 therefore reads: Poisson arrivals, exponential service, one server, unlimited capacity and queue length - the model the next two sections quantify. M/D/2 would be Poisson arrivals, constant service, two servers.",
              "The key behavioural quantity is the traffic intensity: for a single server, rho = lambda/mu, the fraction of time the server is busy. If rho is at least 1, the queue never settles - arrivals outrun service and the waiting line grows without bound, so no steady state exists. Every formula in this unit is a steady-state (long-run average) statement and presupposes rho < 1. Transient behaviour - the first hour after opening, say - requires different mathematics and appears in this course only as a definition. The next section derives the M/M/1 measures; the section after generalises to s servers.",
            ],
            bullets: [
              "Five components: calling population, arrival process, queue discipline, service mechanism, system capacity.",
              "Poisson arrivals at rate lambda equal exponential inter-arrival times - the standard assumption.",
              "Disciplines: FCFS (the default), LCFS, SIRO and priority classes.",
              "Kendall notation A/B/s with extensions for capacity, population and discipline; M = exponential, D = deterministic, Ek = Erlang-k, G = general.",
              "Traffic intensity rho = lambda/mu for one server - steady state requires rho < 1.",
              "M/M/1: Poisson arrivals, exponential service, single server, unlimited queue - the reference model.",
            ],
            table: {
              caption: "Reading Kendall notation, position by position.",
              headers: ["Position", "Symbols", "Meaning"],
              rows: [
                ["1: arrival process", "M / D / Ek / G", "exponential, constant, Erlang-k or general inter-arrival times"],
                ["2: service pattern", "M / D / Ek / G", "the same code for the service-time distribution"],
                ["3: number of servers", "s = 1, 2, 3, ...", "parallel service channels"],
                ["4: system capacity", "N or infinite", "maximum customers allowed in the system"],
                ["5: calling population", "finite or infinite", "size of the customer source"],
                ["6: queue discipline", "FCFS / LCFS / SIRO / priority", "order of service (default FCFS)"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Anatomy of a queuing system",
              caption:
                "Customers flow left to right; every Kendall symbol labels exactly one stage of this pipeline.",
              stages: [
                { label: "Calling population", note: "the source of customers - finite or infinite" },
                { label: "Arrival process", note: "Poisson stream at rate lambda; exponential gaps" },
                { label: "Queue and discipline", note: "waiting line under FCFS, LCFS, SIRO or priority" },
                { label: "Service mechanism", note: "s channels, each exponential at rate mu" },
                { label: "Departures", note: "system output - rate lambda again in steady state" },
              ],
            },
            callout: {
              type: "tip",
              title: "Decode the notation before computing",
              body: "Half the queuing battle is translation. Write out in words what the notation asserts - M/M/2/10 means Poisson arrivals, exponential service, two servers, room for ten customers - before touching a formula. Questions frequently change only one symbol, and misreading it wastes the entire answer.",
            },
            keyTerms: [
              { term: "Kendall notation", definition: "The A/B/s shorthand describing arrival process, service distribution and number of servers." },
              { term: "Traffic intensity (rho)", definition: "The offered load per server: lambda/mu for one server; steady state requires it below 1." },
              { term: "Queue discipline", definition: "The rule selecting which waiting customer is served next - FCFS by default." },
            ],
            examQuestions: [
              {
                q: "Describe the structure of a queuing system with its components, explain Kendall's notation with examples, and define the conditions for steady state.",
                marks: 7,
                outline: [
                  "List the components: calling population, arrival process, queue, discipline, service mechanism, capacity.",
                  "Describe Poisson arrivals and the exponential inter-arrival equivalence at rate lambda.",
                  "State the disciplines: FCFS, LCFS, SIRO, priority.",
                  "Explain the A/B/s notation and the symbol set M, D, Ek, G.",
                  "Illustrate: M/M/1, M/D/3, M/Ek/1 with meanings.",
                  "Define traffic intensity rho = lambda/mu and the steady-state condition rho < 1.",
                  "Contrast steady state (long-run averages) with transient behaviour.",
                ],
              },
              {
                q: "Interpret the notation M/D/2 as applied to a queuing system.",
                marks: 2,
              },
              {
                q: "What happens to an M/M/1 queue when lambda exceeds mu?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "The M/M/1 model and its performance measures",
            body: [
              "The M/M/1 model - Poisson arrivals at rate lambda, exponential service at rate mu, one server, unlimited queue, FCFS - is the atom of queuing theory. Under rho = lambda/mu < 1 the system settles into steady state with a geometric distribution of system size: Pn = (1 - rho) rho^n, so the probability the system is empty is P0 = 1 - rho and the probability of more than k customers is rho to the power k + 1. From this single distribution every operational measure follows: the expected number in the system Ls = rho/(1 - rho), the expected number waiting in the queue Lq = rho^2/(1 - rho) (equivalently rho times Ls), and through Little's law the times: Ws = Ls/lambda = 1/(mu - lambda) and Wq = Lq/lambda = lambda/(mu(mu - lambda)).",
              "Little's law deserves its own line: Ls = lambda Ws and Lq = lambda Wq hold for far more general systems than M/M/1, saying only that the average number in a place equals the arrival rate times the average time spent there. In the exam it converts between the four measures instantly - and it rescues answers when only one of them can be computed. The probability an arriving customer must wait at all is simply rho (the server-busy fraction), and the probability the queue holds more than three customers is rho^4.",
              "Work the standard numbers once and reuse them. With lambda = 6 per hour and mu = 10 per hour: rho = 0.6 (the server is busy 60 per cent of the time), Ls = 1.5 customers, Lq = 0.9, Ws = 1/(10 - 6) hours = 15 minutes, Wq = 9 minutes, P(wait) = 0.6 and P(more than 3 in system) = 0.1296. The design question flips the logic: to hold the average queue wait at 5 minutes, solve 6/(mu(mu - 6)) ≤ 1/12 to get mu at least 12 per hour - doubling the service rate cuts the average wait by nearly half, because waiting time is hyperbolic in the slack mu - lambda.",
            ],
            bullets: [
              "Steady-state size: Pn = (1 - rho) rho^n with P0 = 1 - rho; P(more than k) = rho^(k + 1).",
              "Numbers: Ls = rho/(1 - rho), Lq = rho^2/(1 - rho); note Lq = rho x Ls.",
              "Times: Ws = 1/(mu - lambda), Wq = lambda/(mu(mu - lambda)); Ws = Wq + 1/mu.",
              "Little's law: Ls = lambda Ws, Lq = lambda Wq - valid well beyond M/M/1.",
              "Worked pair: lambda = 6/h, mu = 10/h gives rho 0.6, Ls 1.5, Lq 0.9, Ws 15 min, Wq 9 min.",
              "Design: Wq ≤ 5 min forces mu ≥ 12/h - waiting time is hyperbolic in the slack mu - lambda.",
              "P(an arrival must wait) = rho - the server-busy fraction.",
            ],
            codeExample: {
              language: "python",
              caption:
                "All five M/M/1 measures for lambda = 6 and mu = 10 per hour, plus the design inversion.",
              code: `def mm1(lam, mu):
    """Steady-state M/M/1 measures (lam and mu in the same time unit)."""
    rho = lam / mu                    # utilisation - must be < 1
    Ls = rho / (1 - rho)              # expected number in system
    Lq = rho ** 2 / (1 - rho)         # expected number in queue
    Ws = 1 / (mu - lam)               # time in system
    Wq = lam / (mu * (mu - lam))      # time waiting in queue
    return rho, Ls, Lq, Ws, Wq

rho, Ls, Lq, Ws, Wq = mm1(lam=6, mu=10)     # per hour
print("rho =", rho)                    # 0.6
print("Ls =", Ls, " Lq =", Lq)          # 1.5 and 0.9
print("Ws =", Ws * 60, "minutes")       # 15.0
print("Wq =", Wq * 60, "minutes")       # 9.0
print("P(wait) =", rho)                 # 0.6
print("P(more than 3 in system) =", rho ** 4)   # 0.1296

# Design: what mu keeps the average queue wait at 5 minutes?
# 6 / (mu (mu - 6)) = 1/12  ->  mu^2 - 6 mu - 72 = 0  ->  mu = 12
rho2, Ls2, Lq2, Ws2, Wq2 = mm1(lam=6, mu=12)
print("with mu = 12: Wq =", Wq2 * 60, "minutes")   # 5.0`,
            },
            diagram: {
              kind: "flow",
              title: "The M/M/1 formula chain",
              caption:
                "One ratio begets a distribution, the distribution begets lengths, and Little's law begets times.",
              steps: [
                { label: "rho = lambda / mu", note: "must be below 1 for steady state" },
                { label: "P0 = 1 - rho", note: "system empty; Pn = (1 - rho) rho^n" },
                { label: "Ls = rho / (1 - rho)", note: "expected number in the system" },
                { label: "Lq = rho^2 / (1 - rho)", note: "expected number waiting" },
                { label: "Little's law", note: "Ws = Ls / lambda and Wq = Lq / lambda" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the units of every answer",
              body: "Queuing marks die on units. If lambda and mu are per hour, Ws and Wq come out in hours - convert to minutes and say so. And always begin by checking rho < 1: writing 'no steady state exists' when rho ≥ 1 is itself a complete, mark-earning answer.",
            },
            keyTerms: [
              { term: "M/M/1 model", definition: "Poisson arrivals, exponential service, one server, unlimited capacity, FCFS discipline." },
              { term: "Little's law", definition: "L = lambda W: the average number in a system equals the arrival rate times the average time in it." },
              { term: "Utilisation (rho)", definition: "The fraction of time the server is busy: lambda/mu in M/M/1." },
            ],
            examQuestions: [
              {
                q: "State the steady-state formulas of the M/M/1 queue and compute Ls, Lq, Ws and Wq for lambda = 6 customers per hour and mu = 10 per hour. What service rate would hold the average queue waiting time at 5 minutes?",
                marks: 7,
                outline: [
                  "State the model assumptions briefly: Poisson arrivals, exponential service, one server, FCFS.",
                  "Compute rho = 6/10 = 0.6 and confirm steady state.",
                  "Ls = rho/(1 - rho) = 1.5 customers.",
                  "Lq = rho^2/(1 - rho) = 0.9 customers.",
                  "Ws = 1/(mu - lambda) = 0.25 h = 15 minutes; Wq = Ws - 1/mu = 9 minutes.",
                  "Verify with Little's law: Ls = lambda Ws and Lq = lambda Wq.",
                  "Design: 6/(mu(mu - 6)) = 1/12 gives mu^2 - 6mu - 72 = 0, so mu = 12 per hour.",
                ],
              },
              {
                q: "State and explain Little's law.",
                marks: 3,
              },
              {
                q: "In an M/M/1 queue, what is the probability that an arriving customer has to wait?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "The multi-server model M/M/s",
            body: [
              "Real facilities run parallel servers: bank tellers, toll booths, hospital beds. The M/M/s model keeps Poisson arrivals at rate lambda and exponential service at rate mu per server, with s servers drawing from a single queue. Two ratios organise it. The offered load a = lambda/mu measures the work arriving in server-time units. The utilisation per server is rho = lambda/(s mu) - the fraction busy - and steady state requires rho < 1, that is, lambda < s mu. The empty-system probability is P0 = 1 divided by the sum of the first s terms a^n/n! plus the tail term (a^s/s!)(1/(1 - rho)).",
              "The queue-length formula then reads Lq = P0 a^s rho / (s! (1 - rho)^2), and the rest cascades as before: Wq = Lq/lambda, Ws = Wq + 1/mu and Ls = Lq + a (the last because the number in service averages a). The formulas look worse than they behave. Worked: lambda = 8 per hour, mu = 5 per hour, s = 2. Then a = 1.6, rho = 0.8, P0 = 1/(1 + 1.6 + 1.28 x 5) = 1/9, Lq = 2.84, Wq = 0.356 hours = 21.3 minutes, Ls = 4.44 and Ws = 33.3 minutes.",
              "The comparison that examiners relish: one faster server or two slower ones? At the same utilisation 0.8, a single M/M/1 server with mu = 10 gives Lq = 3.2 and Wq = 24 minutes - the two-server queue (Wq = 21.3 minutes) waits less despite each server being slower. Pooling beats speed for waiting time, though the single fast server needs one salary. Staffing decisions balance the waiting cost (customers x time x rate) against the service cost (servers x wages); the standard question - how many servers to add - is answered by computing Wq and Lq for successive s until the marginal server saves less in waiting cost than it costs.",
            ],
            bullets: [
              "M/M/s: single queue, s parallel exponential servers; offered load a = lambda/mu erlangs.",
              "Steady state requires rho = lambda/(s mu) < 1.",
              "P0 = 1/[sum of a^n/n! for n = 0 to s-1 + (a^s/s!)(1/(1 - rho))].",
              "Lq = P0 a^s rho/(s! (1 - rho)^2); then Wq = Lq/lambda, Ws = Wq + 1/mu, Ls = Lq + a.",
              "Worked: lambda 8/h, mu 5/h, s 2 gives a 1.6, rho 0.8, P0 = 1/9, Lq 2.84, Wq 21.3 min.",
              "Same utilisation, one fast server (mu = 10): Wq = 24 min - pooling two slower servers wins.",
              "Staffing rule: add servers until the waiting cost saved falls below the server cost added.",
            ],
            table: {
              caption:
                "M/M/1 versus M/M/s at the same utilisation 0.8 (lambda = 8 per hour): two servers of mu = 5 against one of mu = 10.",
              headers: ["Measure", "M/M/1: mu = 10", "M/M/s: s = 2, mu = 5"],
              rows: [
                ["Utilisation", "rho = 8/10 = 0.8", "rho = 8/(2 x 5) = 0.8"],
                ["System empty", "P0 = 1 - rho = 0.2", "P0 = 1/9 = 0.111"],
                ["Queue length", "Lq = rho^2/(1 - rho) = 3.2", "Lq = P0 a^s rho/(s! (1 - rho)^2) = 2.84"],
                ["Queue wait", "Wq = Lq/lambda = 24 min", "Wq = Lq/lambda = 21.3 min"],
                ["Number in system", "Ls = Lq + rho = 4.0", "Ls = Lq + a = 4.44"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The M/M/s solution stack",
              caption:
                "Build from the top: stability, then P0, then Lq - every lower layer reuses the one above.",
              layers: [
                { label: "Stability: rho = lambda / (s mu) < 1", note: "otherwise no steady state" },
                { label: "Offered load a = lambda / mu", note: "work arriving in server-time units" },
                { label: "P0 from the steady-state sum", note: "first s terms plus the geometric tail" },
                { label: "Lq = P0 a^s rho / (s! (1 - rho)^2)", note: "expected queue length" },
                { label: "Wq = Lq / lambda, then Ws and Ls", note: "Little's law completes the set" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not substitute s x mu into M/M/1 formulas",
              body: "The commonest M/M/s error is replacing mu by s mu in the single-server formulas. The queue forms differently with parallel servers: P0 and Lq have genuinely different forms. Use the layered stack - a, rho, P0, Lq - and never skip writing P0, since every later number inherits its value.",
            },
            keyTerms: [
              { term: "M/M/s model", definition: "Poisson arrivals, exponential service, s parallel servers fed by one queue." },
              { term: "Offered load (a)", definition: "lambda/mu: the average number of busy servers, in erlangs." },
              { term: "Pooling", definition: "Serving one common queue from several servers - it reduces waiting time compared with separate queues at the same load." },
            ],
            examQuestions: [
              {
                q: "Explain the M/M/s queuing model and compute P0, Lq, Wq, Ls and Ws for lambda = 8 customers per hour, mu = 5 per hour per server and s = 2. Compare the queue wait with a single server of rate 10 per hour at the same utilisation.",
                marks: 7,
                outline: [
                  "State the model: single queue, two exponential servers; compute a = 1.6 and rho = 0.8 < 1.",
                  "P0 = 1/[1 + 1.6 + (1.6^2/2)(1/(1 - 0.8))] = 1/9.",
                  "Lq = P0 a^s rho/(s! (1 - rho)^2) = (1/9)(2.56)(0.8)/(2 x 0.04) = 2.84.",
                  "Wq = Lq/lambda = 2.84/8 = 0.356 h = 21.3 minutes.",
                  "Ls = Lq + a = 4.44; Ws = Wq + 1/mu = 0.556 h = 33.3 minutes.",
                  "Single server: M/M/1 with mu = 10 gives Lq = 3.2 and Wq = 24 minutes.",
                  "Conclude: pooling the two slower servers waits less at the same utilisation.",
                ],
              },
              {
                q: "Define the offered load and state the steady-state condition of the M/M/s model.",
                marks: 3,
              },
              {
                q: "Write the expression for P0 in the M/M/s model.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Two-person zero-sum games and the saddle point",
            body: [
              "Game theory models conflict. The setting the syllabus cares about is the two-person zero-sum game: two players, A and B, where whatever A wins B loses - the payoffs sum to zero, so the matrix of A's gains fully describes the game. Each player chooses a strategy, simultaneously and without communication; a pure strategy is a fixed choice (always row 2), a mixed strategy a randomisation (row 1 with probability p). The payoff matrix is written from A's viewpoint: positive entries are A's gains, and B's best outcomes are the small entries.",
              "Player A reasons with maximin: for each row, the worst that can happen is the row minimum; A guarantees the largest of these minima. Player B, the loser, reasons with minimax: for each column, the worst (for B) is the column maximum; B holds A down to the smallest of these maxima. When the maximin equals the minimax, the common value v is the value of the game and the corresponding cell is the saddle point - an entry that is simultaneously the minimum of its row and the maximum of its column. Neither player can improve by deviating: the saddle is an equilibrium in pure strategies.",
              "Test the worked matrix [[4, 1, 3], [3, 2, 4], [2, 1, 5]]: row minima are 1, 2, 1 so the maximin is 2 (row A2); column maxima are 4, 2, 5 so the minimax is 2 (column B2). They coincide: the saddle point is (A2, B2) with value 2 - A wins 2 units, B loses 2, and both play pure strategies forever. When maximin is strictly below minimax, no saddle exists and pure strategies are exploitable; the solution must be mixed (section 4.5). A game with value 0 is fair. Note the payoff convention question: if the matrix is stated from B's viewpoint or payoffs are costs, the roles reverse - read the question before labelling.",
            ],
            bullets: [
              "Two-person zero-sum: A's gain is exactly B's loss; the payoff matrix is written from A's viewpoint.",
              "Maximin (A): the largest of the row minima - the amount A can guarantee.",
              "Minimax (B): the smallest of the column maxima - the ceiling B can enforce on A.",
              "Saddle point: maximin = minimax; the entry is the minimum of its row and the maximum of its column.",
              "Worked matrix [[4,1,3],[3,2,4],[2,1,5]]: maximin 2 at A2, minimax 2 at B2 - saddle value 2.",
              "No saddle (maximin < minimax): mixed strategies are compulsory - section 4.5.",
              "Value 0 means a fair game; the payoff convention (gains or costs) must be checked in the question.",
            ],
            table: {
              caption:
                "Locating the saddle point of the payoff matrix - row minima against column maxima.",
              headers: ["", "B1", "B2", "B3", "Row minimum"],
              rows: [
                ["A1", "4", "1", "3", "1"],
                ["A2", "3", "2", "4", "2 - maximin"],
                ["A3", "2", "1", "5", "1"],
                ["Column maximum", "4", "2 - minimax", "5", "saddle = 2 at (A2, B2)"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Saddle point or mixed strategies?",
              caption:
                "One comparison settles it: if the security levels coincide the game is solved in pure strategies.",
              start: "Compute maximin (best row minimum) and minimax (best column maximum)",
              branches: [
                { label: "maximin = minimax", outcome: "saddle point exists: pure strategies and the common value v solve the game", good: true },
                { label: "maximin < minimax", outcome: "no saddle: reduce by dominance and solve mixed strategies (graphical method or LP)", good: true },
                { label: "maximin > minimax", outcome: "impossible - recheck the row minima and column maxima", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Show the rim work",
              body: "Saddle-point questions are marked on the rim: append the row-minimum column, append the column-maximum row, circle the maximin and minimax, then compare. State the conclusion in one sentence - 'saddle point at (A2, B2), value of the game 2' - because the verbal answer is what the examiner ticks.",
            },
            keyTerms: [
              { term: "Zero-sum game", definition: "A game in which the payoffs of the players sum to zero - one's gain is the other's loss." },
              { term: "Saddle point", definition: "A payoff entry that is the minimum of its row and the maximum of its column; maximin equals minimax there." },
              { term: "Value of the game", definition: "The expected payoff at equilibrium: the common maximin-minimax value when a saddle exists." },
            ],
            examQuestions: [
              {
                q: "Explain two-person zero-sum games, the maximin and minimax principles and the saddle point. For the payoff matrix [[4, 1, 3], [3, 2, 4], [2, 1, 5]] (payoffs to player A), determine whether a saddle point exists and find the value of the game.",
                marks: 7,
                outline: [
                  "Define the setting: two players, A's gain = B's loss, matrix from A's viewpoint.",
                  "State the maximin principle: A secures the best of the row minima.",
                  "State the minimax principle: B caps A at the best of the column maxima.",
                  "Row minima: 1, 2, 1 - maximin = 2 (row A2).",
                  "Column maxima: 4, 2, 5 - minimax = 2 (column B2).",
                  "Maximin = minimax = 2: saddle point at (A2, B2).",
                  "Conclude: value of the game 2 with pure strategies A2 and B2; verify the entry is its row minimum and column maximum.",
                ],
              },
              {
                q: "When is a game called fair?",
                marks: 2,
              },
              {
                q: "Distinguish between pure and mixed strategies.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Dominance rules and the graphical solution of 2 x n and m x 2 games",
            body: [
              "Large games shrink before they solve. The dominance principle: no rational player keeps a strategy that another strategy never underperforms. From A's viewpoint (the maximiser), row R1 dominates row R2 if every entry of R1 is at least the matching entry of R2 - R2 can be deleted. From B's viewpoint (the minimiser, who prefers small entries), column C1 dominates column C2 if every entry of C1 is at most the matching entry of C2 - C2 goes. Dominance is applied iteratively: after each deletion new dominances may appear, shrinking the matrix until it is small enough to solve - ideally 2 x 2, or 2 x n and m x 2 for the graphical method.",
              "The graphical method solves games where one player has exactly two strategies. For a 2 x n game, A mixes row 1 with probability p and row 2 with 1 - p. Against each pure column of B, A's expected payoff is a straight line in p; plot all n lines, and A's guaranteed payoff is the upper envelope (the worst line at each p). A maximises this guarantee: the minimax point of the upper envelope fixes p and the value v, and only the two lines crossing there matter - they form a 2 x 2 subgame solved by the mixed-strategy formulas. For m x 2 the picture duals: B's expected loss lines are plotted against its mixing probability, the lower envelope is B's guarantee, and B maximises at its top point.",
              "The 2 x 2 algebra is worth memorising: for a matrix [[a, b], [c, d]], the denominator D = a + d - b - c; then A plays row 1 with probability (d - c)/D, B plays column 1 with probability (d - b)/D, and the value is (ad - bc)/D. On [[2, 5], [3, 1]]: D = -5, so p = 0.4, B's column-1 probability is 0.8, and v = (2 - 15)/(-5) = 2.6. Check: A's mix returns 2.6 against either pure column, and B's mix loses 2.6 against either pure row. The oddments method (subtract across, swap, normalise) reproduces the same numbers and is a fast exam cross-check.",
            ],
            bullets: [
              "Row dominance (A, maximiser): delete a row whose every entry is ≤ the matching entry of another row.",
              "Column dominance (B, minimiser): delete a column whose every entry is ≥ the matching entry of another column.",
              "Apply iteratively - each deletion can expose new dominances; always state which strategy deletes which.",
              "2 x n graphical: plot expected payoff lines against p; take the upper envelope; minimise it - the minimax point gives p and v.",
              "m x 2 graphical: lower envelope of B's expected-loss lines, maximised - the dual picture.",
              "2 x 2 formulas: D = a + d - b - c; p = (d - c)/D; q = (d - b)/D; v = (ad - bc)/D.",
              "Worked game [[2,5],[3,1]]: p = 0.4, q = 0.8, value 2.6 - verify by multiplying the mixes.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Mixed-strategy solution of the 2 x 2 game [[2, 5], [3, 1]] with a verification pass.",
              code: `def mixed_2x2(a, b, c, d):
    """Mixed strategies and value for the 2 x 2 game
    [[a, b], [c, d]] with payoffs to the row player A."""
    den = a + d - b - c
    p = (d - c) / den          # P(A plays row 1)
    q = (d - b) / den          # P(B plays column 1)
    v = (a * d - b * c) / den  # value of the game
    return p, q, v

p, q, v = mixed_2x2(2, 5, 3, 1)
print("A plays row 1 with p =", p)      # 0.4
print("B plays column 1 with q =", q)   # 0.8
print("value of the game v =", v)       # 2.6

# verification: A's mix must earn v against both pure columns
print("vs col 1:", p * 2 + (1 - p) * 3)   # 2.6
print("vs col 2:", p * 5 + (1 - p) * 1)   # 2.6
# and B's mix must lose v against both pure rows
print("vs row 1:", q * 2 + (1 - q) * 5)   # 2.6
print("vs row 2:", q * 3 + (1 - q) * 1)   # 2.6`,
            },
            diagram: {
              kind: "flow",
              title: "Solving a game without a saddle point",
              caption:
                "Shrink by dominance, then draw - the envelope converts a game into a one-variable optimisation.",
              steps: [
                { label: "Apply dominance rules", note: "delete dominated rows (A) and columns (B)" },
                { label: "Classify the size", note: "2 x n or m x 2 - larger games need an LP" },
                { label: "Plot expected payoff lines", note: "against the mixing probability p" },
                { label: "Take the correct envelope", note: "upper envelope for 2 x n; lower for m x 2" },
                { label: "Minimise (or maximise) the envelope", note: "the turning point gives the mix and the value" },
              ],
            },
            callout: {
              type: "warning",
              title: "Dominance direction depends on the player",
              body: "A dominates rows by bigger-or-equal entries; B dominates columns by smaller-or-equal entries. Reversing the column rule (deleting the better column for B) is the most frequent slip in this topic - write which player each deletion serves before you strike anything out.",
            },
            keyTerms: [
              { term: "Dominance rule", definition: "A rational player discards a strategy that another strategy never underperforms; the dominated row or column is deleted." },
              { term: "Graphical method", definition: "Solving 2 x n or m x 2 games by plotting expected payoffs against the mixing probability and optimising the envelope." },
              { term: "Mixed strategy", definition: "A randomised choice among a player's pure strategies, specified by probabilities." },
            ],
            examQuestions: [
              {
                q: "State the dominance rules for reducing a game matrix and solve the game with payoff matrix [[2, 5], [3, 1]] by finding the optimal mixed strategies of both players and the value of the game. Verify your answer.",
                marks: 7,
                outline: [
                  "State the row rule (A deletes rows dominated by bigger-or-equal entries) and the column rule (B deletes columns dominated by smaller-or-equal).",
                  "Check dominance on [[2,5],[3,1]]: none applies - the matrix is already 2 x 2.",
                  "Confirm no saddle: row minima 2 and 1, column maxima 3 and 5; maximin 1 < minimax 3 - mixed strategies needed.",
                  "Write D = a + d - b - c = 2 + 1 - 5 - 3 = -5.",
                  "A: p = (d - c)/D = (1 - 3)/(-5) = 0.4 for row 1.",
                  "B: q = (d - b)/D = (1 - 5)/(-5) = 0.8 for column 1.",
                  "Value v = (ad - bc)/D = (2 - 15)/(-5) = 2.6; verify A earns 2.6 against both columns and B loses 2.6 against both rows.",
                ],
              },
              {
                q: "Explain the graphical method of solving a 2 x n game.",
                marks: 3,
              },
              {
                q: "What does it mean for one strategy to dominate another?",
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
      title: "Inventory Control and Replacement Theory",
      summary:
        "Holding the right stock and replacing at the right time: the EOQ model and its cost balance, the economic batch quantity under gradual supply, quantity discounts with reorder level and safety stock, individual versus group replacement of suddenly failing items, and the economic life of equipment with and without the time value of money.",
      chapter: {
        number: "05",
        title: "Inventory and Replacement",
        intro:
          "Unit V closes the course with two timing problems. Inventory control balances ordering cost against holding cost - the EOQ square-root formula for instantaneous delivery, the EBQ variant when production trickles in, price-break analysis when discounts reward bulk, and safety stock with the reorder level when demand or lead time wobbles. Replacement theory times exchanges: items that fail suddenly are handled by individual or group replacement policies compared period by period, and ageing equipment is retired when its equivalent uniform annual cost, discounted properly, is minimised.",
        inOneBreath:
          "Inventory carries four costs - holding Ch per unit per year, ordering Co per order, purchase and shortage - and the EOQ Q* = sqrt(2 D Co / Ch) equalises the first two, giving total variable cost sqrt(2 D Co Ch); at Q* the ordering and holding components are equal and the total-cost curve is flat nearby. Gradual supply replaces Q by the maximum stock Q(1 - d/p), giving EBQ = sqrt(2 D Co / (Ch (1 - d/p))). Quantity discounts require computing the EOQ at each price, adjusting infeasible EOQs up to the qualifying break quantity, and comparing full totals (purchase + ordering + holding) across candidates. Reorder level = expected lead-time demand + safety stock, with safety stock z sigma over the lead time for a chosen service level. Items that fail suddenly compare individual replacement (failures per period = N divided by average life, costed individually) against group replacement at a fixed interval (bulk cost plus in-cycle failures); the interval with the least average cost per period wins. Ageing equipment is replaced when the average annual cost (no discounting) or the equivalent uniform annual cost (present worth times the capital recovery factor, with discounting) stops falling.",
        sections: [
          {
            number: "5.1",
            title: "Economic order quantity (EOQ)",
            body: [
              "Inventory ties up money, space and insurance, yet running out stops production and loses sales. Four cost families frame the problem: holding costs Ch (capital, storage, insurance, obsolescence - so many rupees per unit per year), ordering costs Co (clerical processing, transport - so much per order regardless of size), the purchase cost itself, and shortage costs. The classical EOQ model assumes demand D is known and constant over the year, the whole order arrives at once when stock hits zero, the lead time is constant, no quantity discounts apply and no shortages are allowed. Only two costs then vary with the order size Q: ordering, at (D/Q)Co per year, and holding, at (Q/2)Ch per year since stock cycles between Q and 0 with average Q/2.",
              "Minimising their sum is one line of calculus (or the observation that the minimum lies where the two components cross): Q* = sqrt(2 D Co / Ch), the economic order quantity. At Q* the annual ordering cost and the annual holding cost are equal - each half of the total variable cost sqrt(2 D Co Ch). For the running numbers D = 5000 units per year, Co = Rs 90 per order, Ch = Rs 10 per unit per year: Q* = sqrt(2 x 5000 x 90/10) = 300 units, about 16.7 orders a year, a cycle of roughly 22 days, and a minimum variable cost of Rs 3000 per year (1500 ordering + 1500 holding).",
              "The model's most practical property is robustness. The total-cost curve is flat near the optimum - ordering 240 units instead of 300 (20 per cent low) raises the annual cost from Rs 3000 to only Rs 3075, about 2.5 per cent - so managers round Q* to pack sizes, truckloads or convenient review periods without meaningful penalty. Derivations and extensions follow the same template: relax instant delivery and the EBQ appears (section 5.2); relax the fixed price and price breaks appear (5.3); relax certainty and safety stock appears (5.3). Every extension modifies the same two-cost balance, which is why the EOQ derivation is the most repeated derivation in the paper.",
            ],
            bullets: [
              "Cost families: holding Ch (per unit per year), ordering Co (per order), purchase, shortage.",
              "EOQ assumptions: known constant demand, instantaneous replenishment, fixed lead time, no discounts, no shortages.",
              "Annual costs at order size Q: ordering (D/Q)Co and holding (Q/2)Ch - average stock is Q/2.",
              "EOQ formula: Q* = sqrt(2 D Co / Ch); total variable cost at Q* is sqrt(2 D Co Ch).",
              "At Q*, annual ordering cost equals annual holding cost (Rs 1500 each in the running example).",
              "Running numbers: D 5000, Co 90, Ch 10 give Q* = 300 units, 16.7 orders/year, cycle about 22 days, cost Rs 3000/year.",
              "Robustness: the total-cost curve is flat near Q* - a 20 per cent error in Q costs only about 2.5 per cent extra.",
            ],
            codeExample: {
              language: "python",
              caption:
                "EOQ and its full cost picture for D = 5000 units/year, Co = Rs 90, Ch = Rs 10.",
              code: `import math

def eoq(D, Co, Ch):
    """D = annual demand, Co = cost per order,
    Ch = holding cost per unit per year."""
    return math.sqrt(2 * D * Co / Ch)

D, Co, Ch = 5000, 90, 10
Q = eoq(D, Co, Ch)
orders = D / Q
print("EOQ =", Q)                          # 300.0 units
print("orders per year =", orders)         # 16.67
print("cycle length =", round(365 / orders), "days")   # 22 days

ordering = orders * Co
holding = (Q / 2) * Ch
print("ordering cost =", ordering)          # 1500.0
print("holding cost =", holding)            # 1500.0 - equal at Q*
print("total variable cost =", ordering + holding)   # 3000.0

# robustness: ordering 240 instead of 300 raises cost by 2.5 per cent
Q2 = 240
print(D / Q2 * Co + Q2 / 2 * Ch)            # 3075.0`,
            },
            diagram: {
              kind: "matrix",
              title: "The EOQ cost landscape",
              caption:
                "Two costs pull against each other; their crossing is the optimum - and the neighbourhood is forgiving.",
              axes: { x: "Order quantity Q", y: "Cost behaviour" },
              quadrants: [
                { label: "Q well below EOQ", note: "ordering cost dominates - too many small orders" },
                { label: "Q well above EOQ", note: "holding cost dominates - capital and storage pile up" },
                { label: "Q = EOQ", note: "ordering equals holding - total cost minimum" },
                { label: "Q near EOQ", note: "the total-cost curve is flat - small errors cost little" },
              ],
            },
            callout: {
              type: "exam",
              title: "Derivation marks come first",
              body: "The EOQ question almost always says 'derive'. Write total cost = (D/Q)Co + (Q/2)Ch, differentiate, set the derivative to zero, and solve for Q - then substitute the numbers. Jumping straight to the formula forfeits the derivation marks even with a correct number.",
            },
            keyTerms: [
              { term: "Economic order quantity", definition: "The order size minimising the sum of annual ordering and holding costs: sqrt(2 D Co / Ch)." },
              { term: "Holding cost (Ch)", definition: "The cost of carrying one unit in stock for a year: capital, storage, insurance, obsolescence." },
              { term: "Ordering cost (Co)", definition: "The fixed cost of placing and receiving one order, independent of its size." },
            ],
            examQuestions: [
              {
                q: "Derive the economic order quantity formula, state the assumptions of the model, and compute the EOQ, the number of orders per year and the minimum total variable cost for annual demand 5000 units, ordering cost Rs 90 per order and holding cost Rs 10 per unit per year.",
                marks: 7,
                outline: [
                  "List the assumptions: constant known demand, instant replenishment, fixed lead time, no discounts, no shortages.",
                  "Write the annual costs: ordering (D/Q)Co and holding (Q/2)Ch.",
                  "Differentiate the total with respect to Q and set it to zero: -DCo/Q^2 + Ch/2 = 0.",
                  "Solve: Q* = sqrt(2 D Co / Ch).",
                  "Substitute: Q* = sqrt(2 x 5000 x 90 / 10) = 300 units.",
                  "Orders per year = 5000/300 = 16.7; cycle about 22 days.",
                  "Minimum variable cost = sqrt(2 D Co Ch) = Rs 3000, split equally as 1500 + 1500.",
                ],
              },
              {
                q: "Why are ordering and holding costs equal at the EOQ?",
                marks: 3,
              },
              {
                q: "State any three assumptions of the classical EOQ model.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Economic batch quantity (EBQ) with gradual supply",
            body: [
              "Factories rarely receive a year's supply in one truck; production builds stock while demand drains it. In the EBQ (economic batch quantity, or production-run) model the batch of size Q is produced at rate p per year while demand continues at rate d per year (with p above d, or stock only falls). During the run of length Q/p, stock climbs at the net rate p - d; when production stops, it falls at rate d until the next run. The peak is therefore not Q but Q(1 - d/p): with the running numbers p = 22500 and d = 9000, a batch of 500 peaks at only 300 units.",
              "The cost balance shifts accordingly. Average stock is Q(1 - d/p)/2, so annual holding cost is that times Ch, while setup (ordering) cost stays (D/Q)Co per year - Co now a machine setup cost. Setting the derivative to zero gives EBQ = sqrt(2 D Co / (Ch (1 - d/p))). The (1 - d/p) factor shrinks the denominator below 1, so EBQ always exceeds the plain EOQ for the same data - sensible, because the effective holding burden is lighter when stock never reaches Q.",
              "Work the numbers: D = 9000 units per year, p = 22500 per year, Co = Rs 50 per setup, Ch = Rs 6 per unit per year. EBQ = sqrt(2 x 9000 x 50/(6 x 0.6)) = sqrt(250000) = 500 units. The machine produces a batch in Q/p = 500/22500 of a year - about 8 days - and the cycle spans Q/D = 500/9000 of a year, about 20 days: twelve of those days the machine is free for other work. Annual setup cost is 18 runs at Rs 50 = Rs 900, and annual holding cost is (300/2) x 6 = Rs 900 - equal again at the optimum. As p grows towards infinity (instant delivery), (1 - d/p) approaches 1 and EBQ collapses back to EOQ, which is exactly the previous section.",
            ],
            bullets: [
              "Gradual supply: stock builds at net rate p - d during the run (length Q/p), then drains at rate d.",
              "Maximum inventory is Q(1 - d/p), not Q; average inventory is half of that.",
              "EBQ = sqrt(2 D Co / (Ch (1 - d/p))) - always larger than the plain EOQ for the same data.",
              "Running numbers: D 9000, p 22500, Co 50, Ch 6 give EBQ = 500 units, peak stock 300.",
              "Run length Q/p is about 8 days; cycle Q/D about 20 days - the machine idles 12 days per cycle.",
              "At the optimum, annual setup cost = annual holding cost = Rs 900.",
              "As p approaches infinity, (1 - d/p) approaches 1 and EBQ reduces to EOQ.",
            ],
            codeExample: {
              language: "python",
              caption:
                "EBQ and the run-cycle calendar for D = 9000, p = 22500, Co = Rs 50, Ch = Rs 6.",
              code: `import math

def ebq(D, Co, Ch, P):
    """D = annual demand, Co = setup cost per run,
    Ch = holding cost per unit per year, P = annual production
    rate (P must exceed D)."""
    return math.sqrt(2 * D * Co / (Ch * (1 - D / P)))

D, Co, Ch, P = 9000, 50, 6, 22500
Q = ebq(D, Co, Ch, P)
imax = Q * (1 - D / P)        # maximum inventory level
runs = D / Q
print("EBQ =", Q)                        # 500.0 units
print("maximum stock =", imax)           # 300.0 - not Q!
print("runs per year =", runs)           # 18.0
print("run length =", round(Q / P * 365), "days")     # 8 days
print("cycle length =", round(Q / D * 365), "days")   # 20 days
print("setup cost =", runs * Co)         # 900.0
print("holding cost =", (imax / 2) * Ch) # 900.0 - equal at the optimum`,
            },
            diagram: {
              kind: "compare",
              title: "EOQ versus EBQ: what the stock profile looks like",
              caption:
                "One factor - (1 - d/p) - separates the two models, and it appears in both the peak stock and the formula.",
              left: {
                heading: "EOQ - instantaneous supply",
                items: [
                  "the whole batch arrives at once",
                  "stock peaks at Q",
                  "average stock = Q/2",
                  "cycle time = Q/D",
                  "Q* = sqrt(2 D Co / Ch)",
                ],
              },
              right: {
                heading: "EBQ - gradual supply",
                items: [
                  "stock builds at rate p - d during the run",
                  "peak stock = Q(1 - d/p)",
                  "average stock = Q(1 - d/p)/2",
                  "run length Q/p inside a Q/D cycle",
                  "EBQ = sqrt(2 D Co / (Ch (1 - d/p)))",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Never hold Q/2 in the EBQ model",
              body: "The classic EBQ slip is carrying the EOQ average stock Q/2 into the batch model. Stock never reaches Q when production and consumption overlap - the peak is Q(1 - d/p) and every holding-cost figure must build on it. If your maximum stock equals your batch size, you have solved an EOQ problem by mistake.",
            },
            keyTerms: [
              { term: "Economic batch quantity", definition: "The production run size minimising setup plus holding cost when stock builds gradually: sqrt(2 D Co/(Ch(1 - d/p)))." },
              { term: "Production rate (p)", definition: "The annual rate at which the machine produces during a run; must exceed the demand rate d." },
              { term: "Setup cost", definition: "The fixed cost of preparing a production run - the EBQ analogue of the ordering cost." },
            ],
            examQuestions: [
              {
                q: "Derive the economic batch quantity formula for gradual supply and compute the EBQ, the maximum inventory level, the number of runs per year and the cycle length for annual demand 9000 units, production rate 22500 units per year, setup cost Rs 50 per run and holding cost Rs 6 per unit per year.",
                marks: 7,
                outline: [
                  "Describe the stock profile: build at p - d for Q/p, then drain at d.",
                  "Maximum inventory = Q(1 - d/p); average = Q(1 - d/p)/2.",
                  "Annual costs: setup (D/Q)Co + holding Q(1 - d/p)Ch/2.",
                  "Differentiate and solve: EBQ = sqrt(2 D Co / (Ch (1 - d/p))).",
                  "Substitute: 1 - 9000/22500 = 0.6, so EBQ = sqrt(900000/3.6) = 500 units.",
                  "Maximum stock = 500 x 0.6 = 300 units; runs per year = 9000/500 = 18.",
                  "Run length about 8 days, cycle about 20 days; setup and holding costs equal at Rs 900.",
                ],
              },
              {
                q: "Why is the EBQ always larger than the EOQ for the same demand and costs?",
                marks: 3,
              },
              {
                q: "Write the expression for the maximum inventory level in the EBQ model.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Quantity discounts, reorder level and safety stock",
            body: [
              "Suppliers reward bulk: the unit price falls as the order quantity crosses break points. The EOQ logic must then admit the purchase cost, and the holding cost often becomes a percentage of price, so it moves with the discount band too. The procedure is mechanical: compute the EOQ at each price using that band's holding cost; discard infeasible EOQs (those falling outside their own band); assemble the candidate list - each feasible EOQ plus every higher break quantity - and compare full annual totals (purchase + ordering + holding) across the candidates.",
              "Work the numbers: D = 10000 units per year, Co = Rs 100 per order, Ch = 20 per cent of price per unit per year, with breaks at 500 units (price Rs 9.50) and 800 units (price Rs 8), below which the price is Rs 10. The EOQ at Rs 10 is sqrt(2 x 10000 x 100/2) = 1000 units - infeasible, since Rs 10 applies only below 500. At Rs 9.50 the EOQ is 1026 units, infeasible for the 500-799 band. At Rs 8 the EOQ is sqrt(2000000/1.6) = 1118 units, feasible. Comparing totals: 1118 units at Rs 8 costs about Rs 81789 (purchase 80000 + ordering 894 + holding 894), while the break quantity 800 at Rs 8 costs Rs 81890 and 500 at Rs 9.50 costs Rs 97475 - so order 1118 units at Rs 8.",
              "When demand or lead time is uncertain, stockouts enter the model through the reorder level. ROL = expected demand during the lead time + safety stock. With demand 40 units per day and a 10-day lead time, the expected lead-time demand is 400 units; adding safety stock of 26 units (sized as z sigma over the lead time - for a 95 per cent service level with daily sigma 5, z = 1.65 and 1.65 x 5 x sqrt(10) is about 26) gives ROL = 426 units: replenish the moment stock touches 426. Safety stock costs its own holding but buys service; the optimal buffer equates the marginal holding cost with the expected stockout cost, and the service level percentage is the language of that trade-off in practice.",
            ],
            bullets: [
              "Price breaks make purchase cost and (price-linked) holding cost depend on the order size band.",
              "Procedure: EOQ at each price, drop infeasible ones, add higher break quantities, compare full totals.",
              "Running data: EOQ 1000 at Rs 10 (infeasible), 1026 at Rs 9.50 (infeasible), 1118 at Rs 8 (feasible).",
              "Best candidate: 1118 units at Rs 8, total about Rs 81789 - beating the 800-unit break (Rs 81890).",
              "Reorder level = expected lead-time demand + safety stock.",
              "Running ROL: 40/day x 10 days = 400, plus 26 safety units = 426 units.",
              "Safety stock = z x sigma over the lead time (z from the service level: 1.65 for 95 per cent).",
            ],
            table: {
              caption:
                "Price-break analysis for D = 10000, Co = Rs 100, Ch = 20 per cent of price.",
              headers: ["Price band", "Unit price", "Ch", "EOQ", "Feasible?", "Annual total"],
              rows: [
                ["0 - 499", "Rs 10", "Rs 2.0", "1000", "no - outside band", "-"],
                ["500 - 799", "Rs 9.50", "Rs 1.9", "1026", "no - outside band", "-"],
                ["800 and above", "Rs 8", "Rs 1.6", "1118", "yes", "about Rs 81789"],
                ["Break candidate: 800", "Rs 8", "Rs 1.6", "-", "candidate", "Rs 81890"],
                ["Break candidate: 500", "Rs 9.50", "Rs 1.9", "-", "candidate", "Rs 97475"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "The price-break decision",
              caption:
                "Compute the EOQ at every price; what survives decides the candidate list for the total-cost comparison.",
              start: "EOQ computed at each price level",
              branches: [
                { label: "EOQ lies inside its own band", outcome: "candidate: order the EOQ itself at that price", good: true },
                { label: "EOQ falls below its band", outcome: "candidate: the minimum quantity that earns the price - bulk buys the discount", good: true },
                { label: "several candidates collected", outcome: "compare full totals (purchase + ordering + holding) at each and order the cheapest", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Always compare full totals",
              body: "Students stop at the deepest discount and order its minimum quantity - but the biggest batch can lose on holding. The answer is the candidate with the least total annual cost including purchase; the table with all candidates compared is what the examiner wants to see.",
            },
            keyTerms: [
              { term: "Price break", definition: "A quantity threshold at which the supplier's unit price drops." },
              { term: "Reorder level", definition: "The stock level that triggers a new order: expected lead-time demand plus safety stock." },
              { term: "Safety stock", definition: "Buffer inventory held above expected lead-time demand to absorb variability at a chosen service level." },
            ],
            examQuestions: [
              {
                q: "Explain the quantity discount model and determine the best order quantity for annual demand 10000 units, ordering cost Rs 100, holding cost 20 per cent of unit price, with prices Rs 10 (0-499), Rs 9.50 (500-799) and Rs 8 (800 and above). Also define reorder level and safety stock.",
                marks: 7,
                outline: [
                  "State the method: EOQ per price band, feasibility check, candidate list, full-total comparison.",
                  "EOQ at Rs 10: sqrt(2 x 10000 x 100/2) = 1000 - infeasible for the 0-499 band.",
                  "EOQ at Rs 9.50: sqrt(2000000/1.9) = 1026 - infeasible for 500-799.",
                  "EOQ at Rs 8: sqrt(2000000/1.6) = 1118 - feasible.",
                  "Candidates: 1118 at Rs 8 and the break quantities 800 at Rs 8, 500 at Rs 9.50.",
                  "Totals: 1118 gives about Rs 81789 (80000 + 894 + 894); 800 gives Rs 81890; 500 gives Rs 97475.",
                  "Order 1118 units at Rs 8; define ROL = lead-time demand + safety stock (e.g. 400 + 26 = 426 units).",
                ],
              },
              {
                q: "Define reorder level and write its formula.",
                marks: 2,
              },
              {
                q: "Daily demand is 40 units with standard deviation 5 and the lead time is 10 days. Find the safety stock for a 95 per cent service level (z = 1.65) and the reorder level.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Replacement of items that fail suddenly: individual and group replacement",
            body: [
              "Some items - lamps, resistors, bearings - work perfectly and then die without warning. Two policies compete. Individual replacement replaces each item the moment it fails. Group replacement replaces the entire population at a fixed interval (say every n weeks), plus individual replacements for failures occurring before the next group date. Group replacement exploits bulk labour: replacing all 1000 lamps in one scaffold erection costs far less per lamp than 1000 separate call-outs. The data input is the mortality table - the fraction of items failing in each period of life.",
              "The running mortality data: of 1000 new bulbs, 100 fail in week 1 (10 per cent), 225 in week 2 (25 per cent of the survivors), 338 in week 3 (half the survivors) and the last 337 in week 4. The average life is (100 x 1 + 225 x 2 + 338 x 3 + 337 x 4)/1000 = 2.912 weeks, so a pure individual policy replaces about 343 bulbs per week - at Rs 4 each, roughly Rs 1374 per week. Group replacement costs Rs 1 per bulb in bulk. (The simplified table counts failures of the original cohort only - the renewal-chain refinement adds failures of the replacements themselves and shifts the optimum slightly.)",
              "Compare intervals by average weekly cost. Group replacement every week: 1000 x 1 + 100 x 4 = Rs 1400 per week. Every 2 weeks: 1000 + 325 x 4 = Rs 2300, or Rs 1150 per week. Every 3 weeks: 1000 + 663 x 4 = Rs 3652, or about Rs 1217 per week. Every 4 weeks: Rs 5000, or Rs 1250 per week. The minimum is the 2-week policy at Rs 1150 per week - about 16 per cent cheaper than pure individual replacement. The decision rule generalises: list the candidate intervals, compute total cost per cycle, divide by the cycle length, and pick the least average; always compare against individual-only as the baseline.",
            ],
            bullets: [
              "Sudden failure items: no warning, so policy is statistical - mortality table in, cost per period out.",
              "Individual policy: failures per week = population / average life; 1000/2.912 = 343 per week here.",
              "Group policy: bulk replacement every n periods plus individual replacements of in-cycle failures.",
              "Mortality data: failures 100, 225, 338, 337 over weeks 1-4; average life 2.912 weeks.",
              "Costs: bulk Rs 1 per bulb, individual Rs 4 per bulb.",
              "Interval comparison: 1400 (n = 1), 1150 (n = 2), 1217 (n = 3), 1250 (n = 4) per week - optimum n = 2.",
              "The simplified calculation counts original-cohort failures; the renewal-chain version adds failures of replacements.",
            ],
            table: {
              caption:
                "Group replacement intervals for 1000 bulbs (bulk cost Rs 1 per bulb, individual Rs 4).",
              headers: ["Group interval", "Bulk cost", "In-cycle failures x Rs 4", "Total per cycle", "Average per week"],
              rows: [
                ["1 week", "Rs 1000", "100 x 4 = Rs 400", "Rs 1400", "Rs 1400"],
                ["2 weeks", "Rs 1000", "325 x 4 = Rs 1300", "Rs 2300", "Rs 1150 - optimum"],
                ["3 weeks", "Rs 1000", "663 x 4 = Rs 2652", "Rs 3652", "about Rs 1217"],
                ["4 weeks", "Rs 1000", "1000 x 4 = Rs 4000", "Rs 5000", "Rs 1250"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Choosing between individual and group replacement",
              caption:
                "Mortality to failure rate to cost table - the interval with the least average weekly cost wins.",
              steps: [
                { label: "Build the mortality table", note: "fraction of items failing in each period of life" },
                { label: "Compute the average life", note: "expected lifetime from the failure distribution" },
                { label: "Cost the individual policy", note: "failures per period x individual replacement cost" },
                { label: "Cost group intervals", note: "bulk cost plus in-cycle failures, divided by the interval" },
                { label: "Pick the least average cost", note: "compare against individual-only as the baseline" },
              ],
            },
            callout: {
              type: "exam",
              title: "Present the interval table",
              body: "The full-credit presentation is the four-column interval table: interval, bulk cost, in-cycle failure cost, average per period. Compute the average life first (it fixes the individual-policy baseline), then fill the table row by row and circle the minimum. State the assumption about failures of replacements in one line.",
            },
            keyTerms: [
              { term: "Individual replacement", definition: "The policy of replacing each item immediately upon its failure." },
              { term: "Group replacement", definition: "The policy of replacing the whole population at a fixed interval plus failures in between." },
              { term: "Mortality table", definition: "The distribution of item failures by period of life, the input to replacement analysis." },
            ],
            examQuestions: [
              {
                q: "Explain individual and group replacement policies for items that fail suddenly. For 1000 bulbs with failures 100, 225, 338 and 337 in weeks 1 to 4, bulk replacement cost Rs 1 per bulb and individual replacement Rs 4 per bulb, find the optimal group replacement interval.",
                marks: 7,
                outline: [
                  "Define both policies and note the bulk-labour advantage of group replacement.",
                  "Compute the average life: (100 + 450 + 1014 + 1348)/1000 = 2.912 weeks.",
                  "Individual policy baseline: 1000/2.912 = 343 failures per week, about Rs 1374 per week.",
                  "Group every week: 1000 + 400 = Rs 1400 per week.",
                  "Group every 2 weeks: 1000 + 1300 = Rs 2300, i.e. Rs 1150 per week.",
                  "Group every 3 and 4 weeks: about Rs 1217 and Rs 1250 per week.",
                  "Conclude: the 2-week group policy at Rs 1150 per week beats individual replacement; state the cohort assumption.",
                ],
              },
              {
                q: "What is a mortality table and how is it used in replacement analysis?",
                marks: 3,
              },
              {
                q: "Why can group replacement be cheaper than replacing items individually?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Equipment replacement with and without the time value of money",
            body: [
              "Machines age expensively: maintenance and running costs rise each year while the resale value falls. The replacement question is when to trade in. Without the time value of money, the method is average annual cost: total the purchase plus running costs over n years, subtract the resale proceeds, divide by n - and find the n that minimises it. A quick shortcut identifies the same turning point: keep the machine while next year's running cost stays below the current average, replace once it exceeds it. The method is simple arithmetic and exam-friendly, but it treats a rupee in year 5 as equal to one today.",
              "Discounting repairs that. Convert every outflow to present worth at rate i - purchase now, running costs discounted at (1 + i)^t, resale recovered at its discounted value - then spread the present worth into equal annual payments using the capital recovery factor CRF = i(1 + i)^n / ((1 + i)^n - 1). The result is the equivalent uniform annual cost (EUAC) of keeping the machine n years; the economic life is the n with the least EUAC. The modern framing compares the defender's marginal cost of one more year against the challenger's minimum EUAC: replace when the defender's next year costs more than the challenger's best annual figure.",
              "Work the numbers: a machine costs Rs 20000, running costs are Rs 3000, 5000, 7000, 12000 and 16000 over five years, resale values are Rs 12000, 8000, 5000, 3000 and 1500, and i = 10 per cent. The EUACs work out to about Rs 13000, 11666, 11405, 12071 and 13010 for lives of one to five years: the minimum is at three years, so replace every three years. Note how the numbers behave - heavy early depreciation pushes year 1 high, rising maintenance pushes later years up, and the minimum sits between. Ignoring the time value would weight those late running costs fully and typically shorten the recommended life; discounting lightens them and lengthens it.",
            ],
            bullets: [
              "Without TVM: average annual cost = (purchase + running costs - resale) / n; replace at the minimising n.",
              "Shortcut: replace when next year's running cost exceeds the current average annual cost.",
              "With TVM: discount all outflows at rate i to present worth, then multiply by the capital recovery factor.",
              "CRF = i(1 + i)^n / ((1 + i)^n - 1); EUAC = present worth x CRF.",
              "Economic life: the n minimising EUAC; replace when the defender's marginal year exceeds the challenger's EUAC.",
              "Running numbers: Rs 20000 machine, running 3000-16000, resale 12000-1500, i = 10 per cent.",
              "EUAC by year: about 13000, 11666, 11405, 12071, 13010 - minimum at n = 3 years.",
            ],
            codeExample: {
              language: "python",
              caption:
                "EUAC by economic life for the running machine (i = 10 per cent), with the CRF machinery exposed.",
              code: `def crf(i, n):
    """Capital recovery factor: present worth to equal annual cost."""
    return i * (1 + i) ** n / ((1 + i) ** n - 1)

def euac(price, running, salvage, i, n):
    """Equivalent uniform annual cost of keeping the machine n years."""
    pw = price
    for t in range(1, n + 1):
        pw += running[t - 1] / (1 + i) ** t
    pw -= salvage[n - 1] / (1 + i) ** n
    return pw * crf(i, n)

price = 20000
running = [3000, 5000, 7000, 12000, 16000]    # rising maintenance
salvage = [12000, 8000, 5000, 3000, 1500]     # falling resale
i = 0.10

for n in range(1, 6):
    print(n, "year(s): EUAC Rs", round(euac(price, running, salvage, i, n)))
# 1 -> 13000, 2 -> 11666, 3 -> 11405, 4 -> 12071, 5 -> 13010
# the EUAC is least for n = 3: replace every three years`,
            },
            diagram: {
              kind: "compare",
              title: "Two ways to time the trade-in",
              caption:
                "Simple averaging against discounted EUAC - same data, different verdicts on when late costs bite.",
              left: {
                heading: "Without time value of money",
                items: [
                  "add purchase, running and resale amounts directly",
                  "divide by years kept - average annual cost",
                  "replace when the average stops falling",
                  "simple arithmetic, quick in the exam hall",
                  "treats a rupee in year 5 as one today - typically shortens the life",
                ],
              },
              right: {
                heading: "With time value of money",
                items: [
                  "discount every outflow at rate i",
                  "present worth of keeping the machine n years",
                  "multiply by CRF to get the EUAC",
                  "replace at the minimum EUAC (n = 3 in the example)",
                  "lightens late costs - typically lengthens the economic life",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Show the discount factors",
              body: "EUAC answers collapse without the paper trail. Write the discount factors (1.1, 1.21, 1.331, ...), the present-worth line for each candidate life, the CRF used, and the final multiplication. Four decimal places on factors is enough - but unshown factors mean unmarked steps.",
            },
            keyTerms: [
              { term: "Economic life", definition: "The replacement age that minimises the equivalent uniform annual cost of owning and running equipment." },
              { term: "Capital recovery factor", definition: "The multiplier i(1 + i)^n/((1 + i)^n - 1) converting a present worth into equal annual payments." },
              { term: "EUAC", definition: "Equivalent uniform annual cost: the discounted annualised total of purchase, running and resale flows." },
            ],
            examQuestions: [
              {
                q: "Explain the replacement of equipment whose running costs increase with age, with and without considering the time value of money. For a machine costing Rs 20000 with running costs Rs 3000, 5000, 7000, 12000 and 16000, resale values Rs 12000, 8000, 5000, 3000 and 1500 and interest 10 per cent, find the economic life by the EUAC method.",
                marks: 7,
                outline: [
                  "Present the without-TVM method: average annual cost and the replace-when-rising rule.",
                  "Present the with-TVM method: discount outflows, apply the capital recovery factor.",
                  "Write CRF(10 per cent, n) for n = 1 to 5: 1.1, 0.5762, 0.4021, 0.3155, 0.2638.",
                  "Compute present worths year by year, subtracting discounted resale.",
                  "Compute EUAC = PW x CRF: about 13000, 11666, 11405, 12071, 13010.",
                  "Identify the minimum at n = 3 years.",
                  "Conclude: replace every three years; note that ignoring TVM would weight late costs fully and change the answer.",
                ],
              },
              {
                q: "Write the formula for the capital recovery factor.",
                marks: 2,
              },
              {
                q: "State the rule for deciding replacement when the time value of money is ignored.",
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
      id: "weights",
      heading: "Exam weight map",
      body: [
        "RGPV CE-604(D) papers are numerical-first: almost every unit carries one long worked method plus a couple of short definitions. The simplex - MODI - PERT triangle dominates the long questions because each supports a full 10-mark computation with visible steps, while game theory and replacement alternate as the surprise long question. Prepare one perfect worked answer per family - formulation, simplex tableau trail, VAM plus MODI, Hungarian, PERT probability, crashing ladder, M/M/1 chain, saddle point, EOQ with discount, group replacement table, EUAC table - and the paper becomes an assembly job.",
      ],
      weightedTopics: [
        { topic: "LP formulation and graphical solution", weight: "6-8 marks", note: "The guaranteed opener: variables-objective-constraints structure plus a corner-point table with the four special cases." },
        { topic: "Simplex method (max, min, Big M, two-phase)", weight: "8-10 marks", note: "Full tableau trail expected; know both the -M penalty route and the phase I - phase II route." },
        { topic: "Duality and shadow prices", weight: "5-7 marks", note: "Correspondence table, writing the dual, and reading shadow prices from the final tableau's slack columns." },
        { topic: "Transportation: IBFS methods, MODI, degeneracy, unbalance", weight: "10-12 marks", note: "VAM start plus MODI test is the classic long question; epsilon and dummy handling ride along as sub-parts." },
        { topic: "Assignment by the Hungarian method", weight: "7-9 marks", note: "Reduction steps, line-covering test, and the three variations: unbalanced, maximisation, forbidden cells." },
        { topic: "CPM/PERT: network, floats, crashing, levelling", weight: "10-12 marks", note: "The heaviest unit: forward and backward passes, the float table, PERT probability and the crashing ladder." },
        { topic: "Queuing: M/M/1 and M/M/s measures", weight: "7-9 marks", note: "The formula chain with a worked numerical; the staffing comparison (two slow vs one fast server) is a favourite twist." },
        { topic: "Game theory: saddle point, dominance, graphical 2 x n / m x 2", weight: "7-9 marks", note: "Rim work for the saddle, dominance deletions, and the mixed-strategy formulas with verification." },
        { topic: "Inventory: EOQ, EBQ, discounts, safety stock", weight: "8-10 marks", note: "Derivation plus numerical; the (1 - d/p) factor and the price-break candidate table are the differentiators." },
        { topic: "Replacement: individual/group and equipment with/without TVM", weight: "7-9 marks", note: "The interval comparison table and the EUAC table - both pure method marks once the formats are memorised." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Assuming five days a week at one to two hours, this schedule covers every unit once for understanding and once for revision, closing with timed papers. Maintain one running formula sheet and one worked-example register - each perfect answer you copy becomes a template you can reproduce under exam pressure.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - formulation, graphical, simplex maximisation", tasks: ["Formulate five situations (product mix, diet, blending, scheduling, investment) in the four-part pattern", "Solve three LPs graphically, including one minimisation and one special case", "Run two simplex maximisations end to end with full tableaus"] },
        { week: "Week 2", focus: "Unit I - minimisation and duality", tasks: ["Work one Big M and one two-phase problem; write the comparison table from memory", "Convert three primal-dual pairs in both directions", "Read shadow prices from your week-1 final tableaus and verify with the dual"] },
        { week: "Week 3", focus: "Unit II - transportation and assignment", tasks: ["Solve one matrix with all three starts (NWC, least cost, VAM) and rank them", "Run MODI to optimality including one closed-loop reallocation", "Solve one Hungarian 4 x 4 with a dummy and one maximisation conversion"] },
        { week: "Week 4", focus: "Unit III - CPM, PERT, crashing, levelling", tasks: ["Draw, number and pass two networks; build full float tables", "Work two PERT probability questions with the Z table", "Complete one crashing ladder and one levelling histogram"] },
        { week: "Week 5", focus: "Unit IV - queuing and games", tasks: ["Compute full M/M/1 chains for three rate pairs; invert one for a design target", "Work one M/M/s problem and the two-servers-versus-one comparison", "Find saddle points in four matrices; solve two dominance-plus-graphical games"] },
        { week: "Week 6", focus: "Unit V - inventory and replacement, then revision", tasks: ["Derive EOQ and EBQ; solve one discount problem and one safety-stock sizing", "Build one group-replacement interval table and one EUAC table", "Sit two full past papers under time; mark yourself against the weight map"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Redraw from memory: the corner-point table, one full simplex tableau pair, the VAM penalty table, the network with both passes, the crashing ladder, the M/M/1 formula chain and the EOQ cost picture.",
        "Recite the formula spine: Q* = sqrt(2DCo/Ch), EBQ with (1 - d/p), Ls, Lq, Ws, Wq, te = (to + 4tm + tp)/6, Z = (Ts - Te)/sigma, CRF = i(1+i)^n/((1+i)^n - 1).",
        "Re-solve one problem of each family cold: a two-iteration simplex, a VAM plus MODI, a PERT probability, a price-break EOQ.",
        "Rehearse the decision one-liners: entering variable = most positive Cj - Zj; crash the cheapest critical slope first; saddle = maximin = minimax; replace at the minimum EUAC.",
        "Keep units attached everywhere - lambda and mu per hour, costs in rupees per year - and write them into every final answer line.",
        "Sleep: numerical papers punish tired arithmetic far more than they reward one extra hour of rereading.",
      ],
    },
    {
      id: "exam-hall",
      heading: "In the exam hall",
      examTips: [
        "Scan the paper first and bank the three full-method questions (simplex, MODI, PERT or crashing) - they are worth the most and need the most space and time.",
        "Write the formula line before every substitution - partial credit follows the formula even when the arithmetic slips.",
        "Box every final answer: optimal Z, minimum cost, critical path, EOQ, value of the game - and label it in words.",
        "If an iteration goes wrong, keep the layout clean and continue - method marks are awarded per correct step, not only at the end.",
        "Budget by marks: a 7-mark question earns about 12 minutes, a 2-mark short about 3; never let one simplex iteration swallow twenty.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips",
      bullets: [
        "Mixing the optimality rules between maximisation and minimisation simplex (Cj - Zj versus Zj - Cj) mid-solution.",
        "Forgetting the m + n - 1 allocation count in transportation - MODI then silently fails on a degenerate plan.",
        "Dropping the (1 - d/p) factor in EBQ, or holding Q/2 as average stock when supply is gradual.",
        "Adding sigmas instead of variances along the PERT critical path.",
        "Treating M/M/s as M/M/1 with mu replaced by s mu - the P0 and Lq forms are genuinely different.",
        "Crashing a non-critical activity, or crashing past the point where a second path turns critical without rechecking.",
      ],
    },
  ],
};
