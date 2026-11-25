/**
 * Academics - RGPV ME 7th-semester subject: ME-703(A) Operation Research and Supply Chain.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me703a: AcademicSubject = {
  id: "me-703-a",
  code: "ME-703(A)",
  title: "Operation Research and Supply Chain",
  semester: "VII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to operations research for mechanical engineers: linear programming from formulation to sensitivity, transportation and assignment with VAM-MODI and the Hungarian method, CPM/PERT networks, EOQ-family inventory models, queueing theory, and the supply chain and logistics layer - bullwhip, forecasting, S&OP, routing, warehousing, SCOR and green SCM.",
  description:
    "Five units walk the classical OR spine first - LP formulation, simplex, duality and sensitivity, then transportation and assignment solved by VAM, MODI and the Hungarian method, and project networks through CPM, PERT and crashing. Unit III prices inventory with EOQ, EBQ, safety stock and ABC, then models waiting lines as M/M/1 and M/M/s queues. Units IV and V turn optimization outward: supply chain drivers and the bullwhip effect, forecasting and S&OP, lean versus agile strategies, distribution design, vehicle routing, warehousing, 3PL, the SCOR model and green supply chains. Every section pairs the theory with a worked example, a redrawable diagram and the questions RGPV actually asks.",
  accentColor: "#f59e0b",
  emoji: "OR",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Linear Programming and Optimization",
      summary:
        "The engine room of operations research: translating management problems into linear programs, solving them graphically and by the simplex method, handling artificial variables with Big-M and two-phase logic, reading the dual for shadow prices, and stress-testing the optimum with sensitivity analysis.",
      chapter: {
        number: "01",
        title: "Linear Programming and Optimization",
        intro:
          "Unit I builds the full linear programming toolkit: formulating decision problems with variables, objectives and constraints; solving two-variable models graphically; scaling to any size with the simplex method; coping with equalities and >= constraints through artificial variables; mirroring every primal with a dual whose prices have managerial meaning; and finishing with sensitivity analysis - the post-optimality questions every decision maker actually asks.",
        inOneBreath:
          "An LP maximizes or minimizes a linear objective over linear constraints and non-negative variables; the feasible region is a convex polytope and the optimum sits at a corner; the simplex method walks corner to corner guided by the Zj - Cj row and the minimum ratio test; artificial variables tamed by Big-M or two phases rescue infeasible starting points; duality transposes the model so every constraint prices a resource; and sensitivity analysis asks how far costs and right-hand sides can move before the optimal basis changes.",
        sections: [
          {
            number: "1.1",
            title: "LP formulation and the graphical method",
            body: [
              "Operations research begins with a translation exercise. A manager wants the best product mix, the cheapest shipping plan or the most profitable schedule, and linear programming turns that wish into algebra: decision variables x1, x2, ... measure the amounts under our control; an objective function Max or Min Z = c1x1 + c2x2 + ... scores every candidate plan; constraints such as x1 + x2 <= 12 capture the machine hours, materials and budgets that limit us; and non-negativity xj >= 0 keeps the answer physical. The model is honest only under four assumptions - proportionality, additivity, divisibility and certainty - and examiners award real marks for naming them.",
              "A two-product workshop fixes the pattern. A plant makes chairs and tables; a chair earns Rs 40 and a table Rs 30; assembly allows 12 hours with each item needing one hour, and machining allows 16 hours with chairs needing 2 hours and tables 1 hour. Writing x1 for chairs and x2 for tables gives Max Z = 40x1 + 30x2 subject to x1 + x2 <= 12, 2x1 + x2 <= 16 and x1, x2 >= 0. Every word problem yields to the same discipline: name the variables, price the objective, translate each resource sentence into one inequality, then check that units are consistent throughout.",
              "The graphical method solves any two-variable model exactly. Each constraint is a half-plane; their intersection is the feasible region, always a convex polygon because it is cut by straight lines. The corner point theorem guarantees the optimum sits at a vertex, so the method plots the region, lists its corner points and evaluates Z at each: for the workshop the corners are (0,0), (8,0), (4,8) and (0,12), giving Z = 0, 320, 400 and 360 - the optimum is 4 chairs and 8 tables for Rs 400. The iso-profit line Z = 40x1 + 30x2, slid outward parallel to itself, touches that same corner last. Unbounded, infeasible and multiple-optimum regions are the standard twists.",
            ],
            bullets: [
              "Decision variables x1, x2 measure the controllable quantities - always define them with units before anything else.",
              "Objective function: Max or Min Z = c1x1 + c2x2 + ... scores every candidate plan.",
              "Constraints translate each resource sentence (hours, material, budget, demand) into one inequality.",
              "Non-negativity xj >= 0 keeps the solution physical and is part of the model, not an afterthought.",
              "Four assumptions: proportionality (no step discounts), additivity (no interaction), divisibility (fractions allowed), certainty (data known).",
              "Corner point theorem: the optimum of an LP sits at a vertex of the convex feasible region.",
              "Iso-profit line: slide Z = c1x1 + c2x2 parallel to itself; the last vertex touched is optimal.",
              "The graphical method dies at three variables - which is exactly what the simplex method is for.",
            ],
            codeExample: {
              language: "python",
              caption:
                "The workshop LP solved the graphical way - evaluate the objective at every vertex of the feasible polygon.",
              code: `# Product mix LP: Max Z = 40x1 + 30x2 subject to
#   x1 + x2 <= 12   (assembly hours)
#   2x1 + x2 <= 16  (machining hours)
#   x1, x2 >= 0

corners = [(0, 0), (8, 0), (4, 8), (0, 12)]   # vertices of the region

def Z(point):
    return 40 * point[0] + 30 * point[1]

best = max(corners, key=Z)
print("optimal corner:", best, " Z =", Z(best))   # (4, 8) with Z = 400`,
            },
            diagram: {
              kind: "flow",
              title: "Formulating an LP - from words to optimum",
              caption: "The five moves every full-mark LP answer must show.",
              steps: [
                { label: "Define decision variables x1, x2", note: "units per product, honest symbols" },
                { label: "Write the objective Max/Min Z = c1x1 + c2x2" },
                { label: "Translate each limit into a constraint", note: "hours, material, demand caps" },
                { label: "Add xj >= 0 and draw the feasible region" },
                { label: "Slide the iso-profit line to the best corner", note: "the optimum sits at a vertex" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Half the marks of a formulation question live in the setup: name the variables ('let x1 = chairs made per week'), state the objective in words then in symbols, then list each constraint with its resource named. Examiners mark the algebra, but they award the translation.",
            },
            keyTerms: [
              { term: "Decision variable", definition: "A controllable quantity xj, measured in units of the product or activity it represents." },
              { term: "Objective function", definition: "The linear function Max/Min Z = c1x1 + c2x2 + ... that scores every feasible plan." },
              { term: "Feasible region", definition: "The convex set of points satisfying every constraint and non-negativity." },
              { term: "Corner point theorem", definition: "If an LP has a finite optimum, at least one optimal solution lies at a vertex of the feasible region." },
            ],
            examQuestions: [
              {
                q: "A furniture workshop makes chairs (profit Rs 40 each) and tables (Rs 30 each). Assembly allows 12 hours (each item needs 1 hour) and machining allows 16 hours (a chair needs 2 hours, a table 1). Formulate the LP, solve it graphically, and state the assumptions of linear programming.",
                marks: 7,
                outline: [
                  "Define x1 = chairs, x2 = tables per period; non-negativity x1, x2 >= 0.",
                  "Objective: Max Z = 40x1 + 30x2.",
                  "Constraints: x1 + x2 <= 12 (assembly), 2x1 + x2 <= 16 (machining).",
                  "Plot both lines and shade the polygon with corners (0,0), (8,0), (4,8), (0,12).",
                  "Evaluate Z: 0, 320, 400, 360 - maximum 400 at (4,8).",
                  "Confirm with the iso-profit line 40x1 + 30x2 sliding outward.",
                  "State assumptions: proportionality, additivity, divisibility, certainty.",
                ],
              },
              {
                q: "State the four assumptions of linear programming and say which one a step tariff on price violates.",
                marks: 3,
              },
              {
                q: "What is the corner point theorem, and why does it let a graphical search stop at vertices?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "The simplex method",
            body: [
              "The graphical method dies at three variables, and real plants have dozens. The simplex method scales by walking the same corners algebraically. First the model is converted to standard form: every <= constraint gains a slack variable, so x1 + x2 <= 12 becomes x1 + x2 + s1 = 12 with s1 >= 0 measuring unused capacity. A basic feasible solution sets enough variables to zero and solves the rest; geometrically it is a corner of the polytope. Setting x1 = x2 = 0 leaves s1 = 12, s2 = 16 - the do-nothing corner with Z = 0.",
              "Each iteration picks a better neighbour. The Zj - Cj row (the net evaluation row) measures how much profit one unit of each column would add; the most negative entry marks the entering variable. The leaving variable comes from the minimum ratio test: divide each right-hand side by the positive entries of the entering column and let the smallest ratio go - that basic variable hits zero first, exactly the constraint that blocks further movement. Pivoting on the key element row-reduces the tableau, and the cycle repeats until no negative Zj - Cj remains.",
              "On the workshop LP the story takes two iterations. Iteration one enters x1 (Zj - Cj = -40); ratios 12/1 = 12 and 16/2 = 8 send s2 out, landing at corner (8,0) with Z = 320. Iteration two enters x2 (net evaluation -10); the ratio test now evicts s1 and the tableau reads x1 = 4, x2 = 8, Z = 400 - the same optimum the picture found. The table below names every tableau element; the diagram shows the iteration as a cycle, which is exactly how it should be drawn in the exam.",
            ],
            bullets: [
              "Standard form: every <= constraint gains a slack variable, turning inequalities into equations.",
              "Basic feasible solution: set enough variables to zero and solve the rest - one corner of the polytope.",
              "Net evaluation row Zj - Cj: profit change per unit of each column; the most negative enters.",
              "Minimum ratio test: the smallest positive b/column entry picks the leaving variable.",
              "Pivot: divide the key row by the key element, then clear the rest of the entering column.",
              "Stop when every Zj - Cj >= 0 - the basis cannot be improved.",
              "Worked path: (0,0) to (8,0) at Z = 320, then to (4,8) at Z = 400 - two iterations on the workshop LP.",
            ],
            table: {
              caption: "Anatomy of a simplex tableau and the rule applied at each iteration.",
              headers: ["Tableau element", "What it tells you", "Rule at each iteration"],
              rows: [
                ["Cj row", "unit profit of every variable", "copy once from the model"],
                ["Zj - Cj (net evaluation)", "profit if one unit of column j enters, minus its direct profit", "most negative enters (max problem)"],
                ["Minimum ratio (b / key column)", "how far the entering variable can rise before a basic variable hits zero", "smallest non-negative ratio leaves"],
                ["Pivot (key) element", "intersection of entering column and leaving row", "reduce to 1, clear the column"],
                ["Stop condition", "no negative net evaluation remains", "optimal basis reached"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "One simplex iteration",
              caption: "Repeat until no negative net evaluation remains.",
              steps: [
                { label: "Read the Zj - Cj row", note: "profit foregone minus earned" },
                { label: "Enter the most negative column", note: "steepest improvement" },
                { label: "Minimum-ratio test picks the leaving row", note: "first basic variable to hit zero" },
                { label: "Pivot on the key element", note: "make it 1, clear the column" },
                { label: "Recompute and test optimality", note: "all Zj - Cj >= 0 means stop" },
              ],
            },
            callout: {
              type: "tip",
              title: "Show every tableau",
              body: "An answer that jumps from the model to 'optimum = 400' without the two iteration tables forfeits most method marks - simplex is marked row by row. Write the entering column, the ratio column and the pivot element explicitly at each step.",
            },
            keyTerms: [
              { term: "Slack variable", definition: "A non-negative variable added to a <= constraint to convert it into an equation; it measures unused resource." },
              { term: "Basic feasible solution", definition: "A solution with exactly m basic variables (some possibly zero) and the rest at zero - a corner of the feasible region." },
              { term: "Net evaluation row", definition: "The Zj - Cj row; its entries price each column's contribution to improvement." },
              { term: "Minimum ratio test", definition: "The rule that selects the leaving variable as the one hitting zero first as the entering variable grows." },
            ],
            examQuestions: [
              {
                q: "Solve by the simplex method, showing every tableau: Max Z = 40x1 + 30x2 subject to x1 + x2 <= 12, 2x1 + x2 <= 16, x1, x2 >= 0.",
                marks: 7,
                outline: [
                  "Convert to standard form with slacks s1, s2; initial basis (s1, s2) = (12, 16), Z = 0.",
                  "Iteration 1: Zj - Cj = (-40, -30, 0, 0); x1 enters; ratios 12/1 = 12 and 16/2 = 8; s2 leaves.",
                  "Pivot on 2; new basis x1 = 8, s1 = 4, Z = 320.",
                  "Iteration 2: net evaluation of x2 = -10; x2 enters; ratios 4/0.5 = 8 and 8/0.5 = 16; s1 leaves.",
                  "Pivot; final basis x1 = 4, x2 = 8, Z = 400.",
                  "Verify: all net evaluations >= 0 - optimal.",
                  "Cross-check against the graphical solution at corner (4,8).",
                ],
              },
              {
                q: "Explain the role of slack variables in converting an inequality into standard form.",
                marks: 2,
              },
              {
                q: "What does a tie in the minimum ratio test indicate, and why does it matter?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Big-M, two-phase method and special cases",
            body: [
              "Slack variables rescue <= constraints, but real models mix in equalities and >= constraints. A requirement like x1 + x2 >= 4 has no obvious starting corner, so we add an artificial variable a1 with value 4 and then force it to zero. The Big-M method prices the artificial at a huge penalty M in the objective, so simplex drives it out while optimizing the real objective in one pass - elegant, but M must dwarf every real cost or the arithmetic lies.",
              "The two-phase method is the cleaner alternative. Phase I replaces the original objective with Minimize W = the sum of all artificial variables; if the optimum W is zero, every artificial left the basis and the final tableau is a genuine basic feasible solution to the real problem. Phase II restores the true costs and runs ordinary simplex to optimality. If instead Phase I ends with W > 0, the problem is infeasible - no point satisfies all constraints - and no Phase II exists.",
              "Reading the final tableau for pathology is a favourite examiner move. Infeasibility shows as an artificial stuck in the basis at a positive level. Unboundedness shows when the entering column has no positive coefficient, so the ratio test finds no leaving row - the objective can grow forever and a constraint is missing. Degeneracy appears as a tie in the minimum ratio test: a corner where more than the usual number of constraints meet, with a zero-valued basic variable; iterations may stall or cycle. Alternative optima declare themselves when a nonbasic column ends with Zj - Cj exactly zero - every point on the joining edge is equally optimal.",
            ],
            bullets: [
              "Artificial variables supply a starting basis for equality and >= constraints - then must be driven out.",
              "Big-M prices artificials at a huge penalty in the objective, killing them while optimizing.",
              "Two-phase: Phase I minimizes the artificial sum; W = 0 certifies feasibility; Phase II optimizes the real objective.",
              "Infeasible: Phase I ends above zero - an artificial is stuck at positive level.",
              "Unbounded: the entering column has no positive entry, so the ratio test finds no leaving row.",
              "Degeneracy: tied minimum ratio - a zero-valued basic variable; may cycle, tamed by Bland's rule.",
              "Alternative optima: a nonbasic column ends with Zj - Cj exactly zero - every mix on that edge is equally optimal.",
            ],
            table: {
              caption: "The four special cases and how each announces itself in the tableau.",
              headers: ["Special case", "Signal in the tableau", "What it means"],
              rows: [
                ["Infeasible", "Phase I optimum > 0, or an artificial stays basic at a positive level", "no point satisfies all constraints - check the model"],
                ["Unbounded", "entering column has no positive coefficient for the ratio test", "objective grows forever - a constraint is missing"],
                ["Degenerate", "tie in the minimum ratio test (a basic variable is already zero)", "repeated corner; iterations may stall or cycle"],
                ["Alternative optima", "a nonbasic column has Zj - Cj = 0 at the optimum", "multiple optimal corners; any convex mix of them is optimal"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Two-phase method pipeline",
              caption: "Phase I buys a starting basis; Phase II optimizes the real objective.",
              stages: [
                { label: "Add artificial variables", note: "one per equality or >= constraint" },
                { label: "Phase I: minimize the sum of artificials", note: "real objective parked" },
                { label: "Feasibility gate", note: "optimum zero means a real basis exists" },
                { label: "Drop artificials, restore true costs", note: "or price them out with Big-M" },
                { label: "Phase II: run simplex to optimality" },
              ],
            },
            callout: {
              type: "warning",
              title: "Carry M as a symbol",
              body: "In Big-M answers, write M explicitly in every net-evaluation entry you compute. The classic slip is treating M as 1 after the first pivot - carry it as a symbol to the very end, and compare M-coefficients before ordinary ones.",
            },
            keyTerms: [
              { term: "Artificial variable", definition: "A variable with no physical meaning, inserted only to create an initial basis; it must leave the basis for the solution to be real." },
              { term: "Big-M method", definition: "A single-pass technique that penalizes artificial variables with a huge cost M so simplex expels them." },
              { term: "Two-phase method", definition: "A technique whose Phase I minimizes the artificial sum to find feasibility and whose Phase II optimizes the true objective." },
              { term: "Degeneracy", definition: "A basic feasible solution in which a basic variable equals zero, caused by more constraints than needed meeting at one corner." },
            ],
            examQuestions: [
              {
                q: "Explain the Big-M method and the two-phase method for handling artificial variables, and describe how infeasibility, unboundedness, degeneracy and alternative optima are each detected in a simplex tableau.",
                marks: 7,
                outline: [
                  "Why artificials: equality and >= constraints give no starting basis.",
                  "Big-M: price artificials at a huge penalty M so simplex expels them while optimizing.",
                  "Two-phase: Phase I minimizes the artificial sum; W = 0 certifies feasibility.",
                  "Phase II restores the real costs and optimizes.",
                  "Infeasible: Phase I optimum > 0 - an artificial remains basic at a positive level.",
                  "Unbounded: entering column with no positive ratio-test entry.",
                  "Degeneracy: tied minimum ratio with a zero basic variable; alternative optima: nonbasic Zj - Cj = 0 at the optimum.",
                ],
              },
              {
                q: "How is an unbounded solution recognized in the simplex tableau?",
                marks: 2,
              },
              {
                q: "An LP's Phase I ends with W = 6. What do you conclude, and what happens to Phase II?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Duality theory",
            body: [
              "Every linear program arrives with a shadow. The dual of a max problem is a min problem built by transposition: the primal's n variables become n dual constraints, its m constraints become m dual variables, the coefficient matrix A flips to A^T, the objective coefficients c become the dual's right-hand sides, and the primal's right-hand sides b become the dual's objective. The dual of the dual is the primal itself - a fact worth one free mark in almost every duality question.",
              "Duality theorems carry the economics. Weak duality says any feasible dual bounds the primal objective: for a max primal, every feasible dual value sits above it. Strong duality says that at the optimum the two values are equal. Complementary slackness adds the fine print: if a primal constraint is slack, its dual variable is zero; if a dual variable is positive, the matching primal constraint is tight. The dual variables y_i are shadow prices - the extra profit one more unit of resource i would buy - which is why planners and cost accountants care about the dual at all.",
              "Write the dual of the workshop LP and the mirror is visible. Max Z = 40x1 + 30x2 subject to x1 + x2 <= 12 and 2x1 + x2 <= 16 becomes Min W = 12y1 + 16y2 subject to y1 + 2y2 >= 40, y1 + y2 >= 30, y1, y2 >= 0. The optimal dual prices solve to y1 = 20, y2 = 10: one more assembly hour earns Rs 20, one more machining hour Rs 10, and W = 12(20) + 16(10) = 400 = Z, exactly the strong duality promise. The dual simplex method - which works from a dual-feasible tableau - completes the family and powers sensitivity analysis.",
            ],
            bullets: [
              "Dual construction: transpose A, swap the roles of b and c; m constraints become m dual variables.",
              "A max primal with <= constraints and x >= 0 maps to a min dual with >= constraints and y >= 0.",
              "Weak duality: any feasible dual bounds the primal objective (a max primal from above).",
              "Strong duality: at the optimum Z = W - the two problems agree on value.",
              "Complementary slackness: a slack primal constraint implies a zero dual variable, and vice versa.",
              "Shadow price y_i: the marginal profit of one more unit of resource i - the managerial meaning of duality.",
              "Dual simplex: starts dual-feasible and repairs primal infeasibility - the tool sensitivity analysis calls.",
            ],
            table: {
              caption: "Primal-dual correspondence - read one column, write the other.",
              headers: ["Primal (maximize)", "Dual (minimize)"],
              rows: [
                ["n decision variables", "n constraints"],
                ["m constraints", "m decision variables"],
                ["constraint matrix A", "transposed matrix A^T"],
                ["constraint i is <= (with x >= 0)", "variable y_i >= 0"],
                ["objective coefficients c", "right-hand sides of the dual"],
                ["right-hand sides b", "objective coefficients of the dual"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Primal and dual - mirror images",
              caption: "Same numbers, transposed roles; the dual of the dual is the primal.",
              left: {
                heading: "Primal (maximize)",
                items: [
                  "n decision variables",
                  "m constraints (<= typical)",
                  "coefficient matrix A",
                  "objective coefficients c",
                  "right-hand sides b",
                ],
              },
              right: {
                heading: "Dual (minimize)",
                items: [
                  "m decision variables y_i",
                  "n constraints (>= typical)",
                  "transposed matrix A^T",
                  "right-hand sides b become its objective",
                  "objective coefficients c become its RHS",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Write the dual of the following primal' is guaranteed marks: transposed dimensions, swapped roles of b and c, <= pairing with y >= 0. Then verify with weak/strong duality - one line of checking earns the final mark.",
            },
            keyTerms: [
              { term: "Dual problem", definition: "The LP obtained by transposing a primal; its optimal value equals the primal's optimum (strong duality)." },
              { term: "Shadow price", definition: "The optimal dual variable y_i - the change in the objective per extra unit of resource i." },
              { term: "Complementary slackness", definition: "At the optimum, a constraint is tight exactly when its dual partner is positive." },
              { term: "Weak duality", definition: "Every feasible dual value bounds every feasible primal value; equality holds only at optima." },
            ],
            examQuestions: [
              {
                q: "Write the dual of Max Z = 40x1 + 30x2 subject to x1 + x2 <= 12, 2x1 + x2 <= 16, x1, x2 >= 0; state weak duality, strong duality and complementary slackness; and interpret the optimal dual variables.",
                marks: 7,
                outline: [
                  "Introduce dual variables y1, y2 >= 0 for the two constraints.",
                  "Dual: Min W = 12y1 + 16y2 subject to y1 + 2y2 >= 40, y1 + y2 >= 30.",
                  "Weak duality: any feasible dual value bounds the primal objective from above.",
                  "Strong duality: at the optimum Z = W = 400.",
                  "Complementary slackness: slack primal constraint implies zero dual variable, and conversely.",
                  "Optimal duals y1 = 20, y2 = 10 are shadow prices - marginal value of assembly and machining hours.",
                  "Verify: 12(20) + 16(10) = 400 = Z.",
                ],
              },
              {
                q: "Define shadow price and give one planning use of it.",
                marks: 3,
              },
              {
                q: "State complementary slackness for a primal-dual pair.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Sensitivity analysis",
            body: [
              "The optimum is a snapshot; management lives in the movie. Sensitivity analysis - post-optimality analysis - asks how far the data can drift before the optimal basis changes, without re-solving the model from scratch. The answers arrive as allowable ranges: the objective coefficient of a nonbasic variable can rise until its Zj - Cj hits zero; a basic variable's cost can move within the range where every net evaluation stays non-negative; a right-hand side can shift while the revised basic values stay non-negative.",
              "Four standard probes cover most questions. Changing a cost coefficient tests whether the current mix still prices best. Changing a right-hand side tests feasibility - within its range the shadow price values the change; beyond it the basis turns infeasible and the dual simplex repairs it. Adding a new column (a new product) needs only its reduced cost: if Zj - Cj turns negative, the newcomer enters and beats the incumbent mix. Tightening a coefficient in the key column forces a partial recompute of that column and a fresh optimality check.",
              "The economics justify the machinery. In the workshop, machining capacity can be extended from 16 to 20 hours and the basis survives - the shadow price of Rs 10 per hour values the change at +Rs 40, and the recomputed plan (x1 = 8, x2 = 4) confirms Z = 440. The allowable range for that right-hand side is 12 to 24 hours; beyond 24 the basis must change and the price quietly falls as another constraint takes over. This is precisely how planners use LP: not as a one-shot answer but as a negotiating table where capacity, prices and products are stress-tested.",
            ],
            bullets: [
              "Cost range (nonbasic): the coefficient can rise until its Zj - Cj hits zero.",
              "Cost range (basic): all net evaluations must stay non-negative as the basic cost moves.",
              "RHS range: revised basic values must stay non-negative; outside it the basis is infeasible.",
              "Within the RHS range the shadow price values the change; outside it the price itself changes.",
              "New product/column: if its reduced cost is negative it beats the current mix - pivot it in.",
              "Worked case: machining hours 16 to 20 stay inside the range 12-24; +Rs 40 via the Rs 10 shadow price.",
              "Optimum thinking: buy capacity while its price is below the shadow price and the RHS stays inside its range.",
            ],
            table: {
              caption: "The standard sensitivity probes and the action each demands.",
              headers: ["Change", "Question to ask", "Action if the answer is no"],
              rows: [
                ["Objective coefficient of a nonbasic variable", "does its Zj - Cj stay >= 0?", "bring it into the basis"],
                ["Objective coefficient of a basic variable", "do all net evaluations stay >= 0?", "re-price the tableau and pivot"],
                ["Right-hand side b", "do all revised basic values stay >= 0?", "apply dual simplex or re-solve"],
                ["New decision variable (column)", "is its reduced cost >= 0?", "pivot it in - it improves the mix"],
                ["Key-column coefficient change", "is the basis still feasible and optimal?", "recompute the affected column and continue"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "The optimal tableau is done - now a parameter moves",
              caption: "Five minutes of sensitivity reasoning answers each what-if without re-solving.",
              start: "A coefficient, right-hand side or column changes after optimality",
              branches: [
                {
                  label: "Cost of a nonbasic variable drops, but its Zj - Cj stays >= 0",
                  outcome: "Basis unchanged - the same corner remains optimal",
                  good: true,
                },
                {
                  label: "RHS moves inside the range where every basic value stays >= 0",
                  outcome: "Shadow prices hold; recompute values, keep the basis",
                  good: true,
                },
                {
                  label: "RHS jumps past the allowable range",
                  outcome: "A basic variable turns negative - dual simplex repairs it",
                  good: false,
                },
                {
                  label: "A new column prices out with negative Zj - Cj",
                  outcome: "The current mix is beaten - pivot the new variable in",
                  good: false,
                },
              ],
            },
            callout: {
              type: "tip",
              title: "Quote ranges, not verdicts",
              body: "'c1 can rise to 50 before the basis changes' beats 'the solution is robust'. Shadow prices are valid only inside the RHS range - always state the price and its range together, or the answer is technically wrong.",
            },
            keyTerms: [
              { term: "Sensitivity analysis", definition: "Post-optimality study of how far model data can move before the optimal basis changes." },
              { term: "Allowable range", definition: "The interval over which a cost or right-hand side can vary while the current basis stays optimal (or feasible)." },
              { term: "Reduced cost", definition: "The net evaluation of a nonbasic variable - the amount its objective coefficient must improve before it enters the basis." },
              { term: "Post-optimality analysis", definition: "The umbrella term for what-if analysis performed on a solved model instead of re-solving it." },
            ],
            examQuestions: [
              {
                q: "For the workshop optimum x1 = 4, x2 = 8: examine (a) how far the profit of chairs can change without changing the optimal mix, (b) the effect of raising machining capacity from 16 to 20 hours, and (c) the meaning of a nonbasic product's reduced cost.",
                marks: 7,
                outline: [
                  "Set up the final-tableau relations between c1, c2 and the net evaluation row.",
                  "(a) c1 can vary while every nonbasic net evaluation stays >= 0; compute the interval.",
                  "(b) Recompute the basic values for b = (12, 20): they come out (8, 4) >= 0 - still feasible.",
                  "Within the range: the Rs 10 shadow price values 4 extra hours at +Rs 40, giving Z = 440.",
                  "State the allowable range 12 to 24 hours for the machining RHS; beyond it the basis changes.",
                  "(c) Reduced cost = the improvement needed in the objective coefficient before the variable enters.",
                  "Close: sensitivity analysis answers what-ifs without re-solving the LP.",
                ],
              },
              {
                q: "Define the reduced cost of a nonbasic variable.",
                marks: 2,
              },
              {
                q: "Why can a shadow price change when the right-hand side moves outside its allowable range?",
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
      title: "Transportation, Assignment and Network Models",
      summary:
        "Special-purpose algorithms that beat general simplex on structured problems: VAM initial solutions and MODI optimality for transportation, the Hungarian method for assignment, CPM for deterministic project scheduling with floats, PERT for uncertainty, and crashing to buy time at least cost.",
      chapter: {
        number: "02",
        title: "Transportation, Assignment and Network Models",
        intro:
          "Unit II applies LP structure to logistics-shaped problems: the transportation model ships from supply points to demand points, the assignment model matches workers to jobs one-to-one, and project networks sequence activities under precedence. Each gets a bespoke algorithm - VAM plus MODI, the Hungarian method, and CPM/PERT with crashing - that is faster and more transparent on exam paper than the plain simplex.",
        inOneBreath:
          "A transportation problem balances supply and demand across an m x n cost matrix; VAM seeds a strong starting solution, MODI prices rows and columns and loops shipments until every opportunity cost is non-negative; the assignment problem reduces to covering zeros after row and column reduction; CPM runs forward and backward passes to expose floats and the critical path; PERT averages three time estimates into te = (to + 4tm + tp)/6 with variance ((tp - to)/6)^2; and crashing compresses critical activities while the cost slope stays below the indirect cost saved.",
        sections: [
          {
            number: "2.1",
            title: "Transportation problem: formulation and initial solutions",
            body: [
              "A transportation problem ships a single commodity from m supply points to n demand points at minimum cost. The data is a cost matrix c_ij, row supplies a_i and column demands b_j; the LP chooses shipments x_ij >= 0 to satisfy every row and column total. Balanced problems - the sum of supplies equals the sum of demands - are the exam default; when they differ, a dummy row or column with zero costs absorbs the surplus. Any basic feasible solution holds exactly m + n - 1 allocated cells, a count worth checking before anything else.",
              "Three rules seed the first solution. The north-west corner method blindly fills from the top-left, exhausting each row then each column - bookkeeping in seconds, cost ignored. The least cost method greedily fills the cheapest open cell next. Vogel's approximation method (VAM) is the star: for every row and column compute the penalty - the difference between its two cheapest costs - and satisfy the row or column with the largest penalty first, because that penalty is the regret you would pay for ignoring it. Repeat, shrinking the matrix each time.",
              "A 2 x 3 example shows the spread. With supplies 15 and 25, demands 10, 20 and 10, and unit costs of 10, 2, 20 in row 1 and 5, 8, 9 in row 2, the north-west corner spends Rs 320, while least cost and VAM both land Rs 210 - which MODI will confirm is already optimal in the next section. VAM's path: the largest penalty is column 3 (11), so ship 10 into the cheapest cell (2,3); the next largest is row 1 (8), so ship 15 into (1,2); the rest closes at (2,1) and (2,2). Degeneracy - fewer than m + n - 1 allocated cells - is patched with a symbolic epsilon shipment.",
            ],
            bullets: [
              "Balanced problem: total supply equals total demand; otherwise add a zero-cost dummy row or column.",
              "A basic feasible solution holds exactly m + n - 1 allocated cells - count before anything else.",
              "North-west corner: fill from the top-left; seconds of work, usually the worst cost.",
              "Least cost method: fill the cheapest open cell next, respecting remaining supply and demand.",
              "VAM: row/column penalty = difference between the two cheapest costs; serve the largest penalty first.",
              "Penalty logic: the penalty is the regret of not using the cheapest cell in that row or column.",
              "VAM lands within a few percent of the optimum in practice - the standard exam starting rule.",
            ],
            table: {
              caption: "One 2 x 3 problem, three starting rules (supplies 15 and 25; demands 10, 20, 10).",
              headers: ["Method", "Allocation (cell: units)", "Total cost", "Verdict"],
              rows: [
                ["North-west corner", "(1,1):10 (1,2):5 (2,2):15 (2,3):10", "Rs 320", "fast but far from optimal"],
                ["Least cost", "(1,2):15 (2,1):10 (2,2):5 (2,3):10", "Rs 210", "greedy but effective"],
                ["Vogel's approximation", "(1,2):15 (2,1):10 (2,2):5 (2,3):10", "Rs 210", "penalty-driven; lands optimal here"],
                ["MODI check (Section 2.2)", "opportunity costs 11 and 17", "Rs 210 optimal", "VAM start confirmed optimal"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Transportation algorithm end to end",
              caption: "Every 7-mark transportation answer follows this spine.",
              steps: [
                { label: "Balance supply and demand", note: "zero-cost dummy if totals differ" },
                { label: "Find an initial BFS", note: "VAM - penalties point the greedy choice" },
                { label: "Check m + n - 1 basic cells", note: "add epsilon if short" },
                { label: "Run MODI and test deltas", note: "any negative delta invites improvement" },
                { label: "Loop and reallocate theta", note: "repeat until all deltas >= 0" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Before anything else, write 'm + n - 1 = 4 basic cells required' and count. A degenerate start that skips the epsilon fix makes every later MODI number wrong - and the examiner spots it at a glance.",
            },
            keyTerms: [
              { term: "Balanced transportation problem", definition: "A transportation model whose total supply equals total demand; unbalanced cases get a dummy row or column." },
              { term: "Dummy row/column", definition: "A zero-cost artificial source or destination added to absorb imbalance." },
              { term: "VAM penalty", definition: "The difference between a row's (or column's) two cheapest costs - the regret of ignoring its best cell." },
              { term: "Degeneracy (transportation)", definition: "Fewer than m + n - 1 allocated cells, repaired by an epsilon shipment in an independent empty cell." },
            ],
            examQuestions: [
              {
                q: "Given supplies (15, 25), demands (10, 20, 10) and unit costs [[10, 2, 20], [5, 8, 9]], find the initial basic feasible solution by (i) north-west corner, (ii) least cost and (iii) Vogel's approximation; compare costs and verify the allocation count.",
                marks: 7,
                outline: [
                  "Check balance: 15 + 25 = 10 + 20 + 10 = 40; m + n - 1 = 4 basic cells needed.",
                  "NWC: (1,1)=10, (1,2)=5, (2,2)=15, (2,3)=10 - cost Rs 320.",
                  "Least cost: (1,2)=15 first at cost 2, then (2,1)=10, (2,2)=5, (2,3)=10 - Rs 210.",
                  "VAM penalties: row1 = 8, row2 = 3, col1 = 5, col2 = 6, col3 = 11.",
                  "Largest penalty col3: allocate (2,3)=10; recompute and continue to (1,2)=15, (2,1)=10, (2,2)=5.",
                  "VAM total Rs 210 with exactly 4 basic cells.",
                  "Compare: NWC 320 versus LCM/VAM 210; the VAM start is optimal (verified by MODI in 2.2).",
                ],
              },
              {
                q: "Why is a dummy row or column added to a transportation problem, and what cost do its cells carry?",
                marks: 2,
              },
              {
                q: "Explain the penalty calculation in VAM and why the largest penalty is served first.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "MODI method and degeneracy",
            body: [
              "An initial solution is only a proposal; MODI (the modified distribution method) tests it and improves it. Set the row potentials u_i and column potentials v_j so that every basic cell satisfies u_i + v_j = c_ij. The system has m + n unknowns but only m + n - 1 basic cells, so one potential is anchored - set u1 = 0 - and the rest ripple out through the basic cells. Then every empty cell gets an opportunity cost delta_ij = c_ij - u_i - v_j: the extra cost per unit shipped through that cell.",
              "If every delta is non-negative the solution is optimal - shipping anywhere else would cost more. If some delta is negative, that cell improves the plan: trace its closed loop, the unique rectangular path that starts at the empty cell and turns only at basic cells. Ship theta units around the loop - positive at the entering cell and at alternating corners, negative at the others - where theta is the smallest shipment on the losing cells. Reallocate, recompute the potentials and repeat until no negative delta survives.",
              "The VAM solution of Section 2.1 closes the loop. With u1 = 0 the basic cells give v2 = 2, u2 = 6, v1 = -1 and v3 = 3; the two empty cells score delta_11 = 10 - 0 - (-1) = 11 and delta_13 = 20 - 0 - 3 = 17, both comfortably positive, so Rs 210 is optimal. Degeneracy - fewer than m + n - 1 basic cells - is patched by placing an epsilon shipment in an independent empty cell; and because the transportation problem is just a special LP, every simplex concept (basis, reduced cost, pivot) reappears wearing logistics clothes.",
            ],
            bullets: [
              "Anchor u1 = 0; every basic cell then gives ui + vj = c_ij to solve the potentials.",
              "Opportunity cost: delta_ij = c_ij - u_i - v_j on each empty cell.",
              "All deltas >= 0 certifies optimality - no empty cell can ship cheaper than the current plan.",
              "Most negative delta enters; its closed loop alternates plus and minus corners at basic cells.",
              "theta = smallest shipment on the losing corners; shift it around the loop and reallocate.",
              "Degeneracy fix: place epsilon in an independent empty cell to complete m + n - 1 basics.",
              "Transportation is a special LP: potentials are dual variables, deltas are reduced costs.",
            ],
            codeExample: {
              language: "python",
              caption: "MODI optimality check on the VAM solution of Section 2.1 - potentials, then deltas on the empty cells.",
              code: `# MODI check on a 2 x 3 problem. Basic cells must number
# m + n - 1 = 4 before the potentials are solvable.

alloc = {(0, 1): 15, (1, 0): 10, (1, 1): 5, (1, 2): 10}
cost = {(0, 0): 10, (0, 1): 2, (0, 2): 20,
        (1, 0): 5,  (1, 1): 8, (1, 2): 9}

m, n = 2, 3
u, v = {0: 0}, {}                    # anchor u1 = 0, ripple outward

while len(u) + len(v) < m + n:
    for (i, j), q in alloc.items():
        if i in u and j not in v:
            v[j] = cost[(i, j)] - u[i]
        elif j in v and i not in u:
            u[i] = cost[(i, j)] - v[j]

for (i, j), c in sorted(cost.items()):
    if (i, j) not in alloc:
        delta = c - u[i] - v[j]
        verdict = "ok" if delta >= 0 else "ENTERING"
        print("cell ({},{}): delta = {}".format(i + 1, j + 1, delta), verdict)`,
            },
            diagram: {
              kind: "cycle",
              title: "The MODI loop",
              caption: "One turn per improvement; stop when every opportunity cost is non-negative.",
              steps: [
                { label: "Set u1 = 0", note: "one row anchors all potentials" },
                { label: "Solve ui + vj = c_ij on basic cells", note: "m + n - 1 equations ripple out" },
                { label: "Score empty cells: delta_ij = c_ij - ui - vj" },
                { label: "Pick the most negative cell and trace its closed loop", note: "corners only at basic cells" },
                { label: "Shift theta around the loop", note: "theta = smallest losing shipment" },
              ],
            },
            callout: {
              type: "warning",
              title: "Loops turn only at basic cells",
              body: "A closed loop must turn only at basic cells (plus the entering cell). Loops drawn through other empty cells are invalid - this is the most common MODI error in RGPV scripts, and it silently invalidates every delta after it.",
            },
            keyTerms: [
              { term: "MODI method", definition: "The modified distribution method - computes row and column potentials to test a transportation solution for optimality." },
              { term: "Opportunity cost", definition: "delta_ij = c_ij - u_i - v_j: the extra cost per unit of using an empty cell; negative means improvement." },
              { term: "Closed loop", definition: "The unique rectangular path from an empty cell that turns only at basic cells, used to reallocate shipments." },
              { term: "Epsilon allocation", definition: "A symbolic near-zero shipment placed in an independent empty cell to repair degeneracy." },
            ],
            examQuestions: [
              {
                q: "For the VAM solution of the 2 x 3 problem (costs [[10, 2, 20], [5, 8, 9]]; allocations (1,2)=15, (2,1)=10, (2,2)=5, (2,3)=10), apply MODI: compute the potentials, evaluate every empty cell, and state whether the solution is optimal.",
                marks: 7,
                outline: [
                  "Confirm 4 = m + n - 1 basic cells; anchor u1 = 0.",
                  "Basic cells: v2 = 2 from (1,2); u2 = 8 - 2 = 6 from (2,2); v1 = 5 - 6 = -1 from (2,1); v3 = 9 - 6 = 3 from (2,3).",
                  "Empty cell (1,1): delta = 10 - 0 - (-1) = 11.",
                  "Empty cell (1,3): delta = 20 - 0 - 3 = 17.",
                  "Both deltas positive, so no entering cell exists - the solution is optimal at Rs 210.",
                  "State the criterion: all delta_ij >= 0 means optimal.",
                  "Note: a negative delta would trigger its closed loop with theta = smallest losing shipment.",
                ],
              },
              {
                q: "What is the role of the epsilon allocation in a degenerate transportation solution?",
                marks: 2,
              },
              {
                q: "State the formula for the number of basic cells in an m x n transportation problem and explain why it is not m x n.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Assignment problem and the Hungarian method",
            body: [
              "The assignment problem pairs n workers with n jobs one-to-one so that total cost is minimum - a transportation problem where every supply and demand equals one and every x_ij is 0 or 1. The Hungarian method exploits that structure. Step one: subtract each row's minimum from that row. Step two: subtract each column's minimum from that column. Both steps preserve the optimal assignment - they add constants to total cost - while creating zeros: cells that cost nothing relative to their row and column.",
              "Step three tests whether the zeros support an assignment: cover all zeros with the minimum number of horizontal and vertical lines. If n lines suffice, an independent set of n zeros exists - one per row and column - and reading off that set solves the problem. If fewer than n lines cover the zeros, step four adjusts: find the smallest uncovered value, subtract it from every uncovered element, add it to elements covered twice (at line intersections), and return to step three. Each adjustment grows the zero count until the test passes.",
              "Three variations complete the exam kit. A maximization assignment (profits, efficiencies) converts to minimization by subtracting every entry from the largest entry - the regret matrix. An impossible pairing - worker A cannot do job 3 - is priced with a prohibitive M so the method never selects it. A non-square problem adds a dummy row or column of zeros for the unmatched worker or job. The worked table below runs the whole method on a 3 x 3 cost matrix in four recorded steps.",
            ],
            bullets: [
              "Assignment = transportation with unit supplies and demands; every x_ij is 0 or 1.",
              "Row and column reduction preserve the optimal assignment while creating zeros.",
              "Cover-zero test: if n lines cover all zeros, an independent zero assignment exists.",
              "Adjustment: subtract the smallest uncovered value from uncovered cells, add it at intersections.",
              "Maximization: convert with the regret matrix - largest entry minus each entry.",
              "Impossible pairings: price them with a prohibitive M so they are never chosen.",
              "Unbalanced problem: add a dummy row or column of zeros for the unmatched side.",
            ],
            table: {
              caption: "Hungarian method on a 3 x 3 assignment (rows = workers A, B, C; columns = jobs; costs in hours).",
              headers: ["Step", "Operation", "Resulting matrix / outcome"],
              rows: [
                ["0", "Given cost matrix", "A: 9 2 7 / B: 6 4 3 / C: 5 8 1"],
                ["1", "Subtract row minima (2, 3, 1)", "A: 7 0 5 / B: 3 1 0 / C: 4 7 0"],
                ["2", "Subtract column minima (3, 0, 0)", "A: 4 0 5 / B: 0 1 0 / C: 1 7 0"],
                ["3", "Cover zeros with minimum lines", "three lines (row B, columns J2, J3) - equals n"],
                ["4", "Assign on independent zeros", "A to J2, B to J1, C to J3 - total cost 2 + 6 + 1 = 9"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Hungarian method stages",
              caption: "Row reduce, column reduce, cover zeros - repeat until lines equal n.",
              stages: [
                { label: "Balance to a square matrix", note: "dummy row/column if sides differ" },
                { label: "Row reduction then column reduction", note: "each row and column gets a zero" },
                { label: "Cover all zeros with minimum lines", note: "test: lines = n?" },
                { label: "Adjust by the smallest uncovered value", note: "when lines < n, loop back" },
                { label: "Assign on independent zeros", note: "one zero per row and column" },
              ],
            },
            callout: {
              type: "tip",
              title: "Write the conversion",
              body: "For maximization assignments, always write the conversion step: 'new matrix = largest element minus each entry'. Skipping the written conversion is the single most common lost mark on Hungarian questions - the examiner needs to see the regret matrix itself.",
            },
            keyTerms: [
              { term: "Hungarian method", definition: "A matrix-reduction algorithm that solves the assignment problem by creating and covering zeros." },
              { term: "Regret matrix", definition: "The minimization matrix obtained by subtracting each entry of a maximization problem from its largest entry." },
              { term: "Independent zeros", definition: "A set of zero cells with no two sharing a row or column - one per row and column forms an assignment." },
              { term: "Dummy row/column", definition: "A zero-cost row or column added to square up an unbalanced assignment." },
            ],
            examQuestions: [
              {
                q: "Solve by the Hungarian method, showing every matrix: costs A = [9, 2, 7], B = [6, 4, 3], C = [5, 8, 1] (rows = workers, columns = jobs). State the total cost of the optimal assignment.",
                marks: 7,
                outline: [
                  "Row reduction (minima 2, 3, 1): [7 0 5; 3 1 0; 4 7 0].",
                  "Column reduction (minima 3, 0, 0): [4 0 5; 0 1 0; 1 7 0].",
                  "Cover zeros with minimum lines: row B plus columns J2 and J3 - 3 lines = n.",
                  "Make independent assignments: A to J2, B to J1, C to J3.",
                  "Total cost = 2 + 6 + 1 = 9.",
                  "State the rule: lines = n means optimal; lines < n triggers the adjustment step.",
                  "Mention maximization (regret matrix) and dummy rows for unbalanced cases.",
                ],
              },
              {
                q: "How is a maximization assignment problem converted to minimization?",
                marks: 2,
              },
              {
                q: "What does it mean when the minimum number of covering lines is less than n?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "CPM: network construction and floats",
            body: [
              "CPM turns a precedence list into a network and reads the schedule out of it. In activity-on-arrow convention each activity is an arrow between two events (nodes); an activity cannot start until its tail event is realized. When two activities share start and end events purely for drawing convenience, or when a precedence cannot be drawn otherwise, a dummy activity with zero duration is inserted - and 'justify every dummy' is standing examiner instruction. Events are numbered left to right so that every arrow points from a smaller to a larger number (the Fulkerson rule).",
              "The forward pass pushes earliest times: each event's EST is the largest EFT among activities entering it, and the last event's EST is the project duration. The backward pass pulls latest times: each event's LFT is the smallest LST among leaving activities. Floats fall out of the two passes. Total float TF = LST - EST is the delay that pushes project completion; free float FF = EST(head) - EFT is the delay that disturbs no successor; the critical path is the chain of activities with TF = 0 - the longest path, and the only one the deadline can be measured on.",
              "A four-activity example runs the machinery. With activities A(1-2, 4 days), B(2-3, 6), C(2-4, 5) and D(3-4, 3): the forward pass gives ESTs of 0, 4, 10 and 13 - the project takes 13 days along A-B-D; C floats with 4 days of slack. The critical path A-B-D fixes the completion date, so management attention, expediting money and crashing effort all aim there - which is exactly where the next section spends it. Float is not idle time but risk buffer: spend it and the path silently becomes critical.",
            ],
            bullets: [
              "Activity-on-arrow: activities are arrows, events are nodes; arrows run from smaller to larger event numbers (Fulkerson rule).",
              "Dummy activity: a zero-duration arrow used only to fix precedence or keep numbering unique.",
              "Forward pass: EST of an event = largest EFT of entering activities; the last event's EST is the project duration.",
              "Backward pass: LFT of an event = smallest LST of leaving activities.",
              "Total float TF = LST - EST: the delay that pushes the project; TF = 0 marks the critical path.",
              "Free float FF = EST(head) - EFT: the delay that disturbs no successor at all.",
              "Critical path = the longest path - the only chain that fixes the completion date.",
            ],
            table: {
              caption: "Float formulas for any activity in an AOA network.",
              headers: ["Float", "Formula", "Meaning"],
              rows: [
                ["Total float", "TF = LST - EST = LFT - EFT", "delay that pushes project completion; shared with the whole path"],
                ["Free float", "FF = EST(head event) - EFT", "delay that delays no successor"],
                ["Independent float", "IF = EST(head) - LFT(tail) - duration", "delay safe even if predecessors are late; may be negative"],
                ["Interfering float", "TF - FF", "float whose consumption narrows successors' slack"],
                ["Critical activity", "TF = 0", "on the longest path - zero slack"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "CPM from precedence list to critical path",
              caption: "Deterministic durations; the float arithmetic tells the truth.",
              steps: [
                { label: "Draw the AOA network", note: "dummies only to fix precedence" },
                { label: "Number events (Fulkerson rule)" },
                { label: "Forward pass for EST/EFT", note: "project duration = max EFT" },
                { label: "Backward pass for LST/LFT", note: "min of successor LSTs" },
                { label: "Floats flag the critical path", note: "the TF = 0 chain is the longest path" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Justify every dummy activity in one line ('to preserve precedence between events 2 and 4'). Unexplained dummies lose a mark each, and the forward/backward passes must show every event's EST and LFT - write them beside the nodes.",
            },
            keyTerms: [
              { term: "Critical path", definition: "The longest path through the project network; its duration equals the project duration and its activities have zero total float." },
              { term: "Total float", definition: "LST - EST: the maximum delay of an activity that still lets the project finish on time." },
              { term: "Free float", definition: "EST(head) - EFT: the delay possible without delaying any successor." },
              { term: "Dummy activity", definition: "A zero-duration arrow used to represent precedence or uniqueness that real arrows cannot express." },
            ],
            examQuestions: [
              {
                q: "Draw the activity network for A(1-2, 4 days), B(2-3, 6), C(2-4, 5), D(3-4, 3). Perform the forward and backward passes, compute total and free floats, and identify the critical path and project duration.",
                marks: 7,
                outline: [
                  "Draw events 1 to 4 with activities on arrows; no dummy needed here.",
                  "Forward pass: EST(2) = 4, EST(3) = 10, EST(4) = max(13, 9) = 13 - duration 13 days.",
                  "Backward pass: LFT(4) = 13, LFT(3) = 10, LFT(2) = min(4, 8) = 4.",
                  "Floats: TF(A) = 0, TF(B) = 0, TF(D) = 0.",
                  "TF(C) = LST - EST = 8 - 4 = 4; FF(C) = EST(4) - EFT(C) = 13 - 9 = 4.",
                  "Critical path A-B-D with duration 13 days.",
                  "Interpret: C carries 4 days of buffer; spending it makes path A-C critical too.",
                ],
              },
              {
                q: "What is a dummy activity and when is it required in a CPM network?",
                marks: 2,
              },
              {
                q: "Distinguish total float from free float in one sentence each.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "PERT and project crashing",
            body: [
              "PERT admits that durations are guesses. Each activity gets three estimates - optimistic to, most likely tm, pessimistic tp - folded into a beta-distribution mean te = (to + 4tm + tp)/6 with variance ((tp - to)/6)^2. The network is then analysed with te values exactly as CPM: forward pass, backward pass, floats, critical path. The pay-off is probabilistic: the project duration is the sum of critical-path te values, its variance is the sum of critical-path variances, so completion probabilities come from z = (target - te_project)/sigma_project read against the normal table.",
              "Crashing trades money for time. Every activity has a normal duration with its normal cost and a crash duration with its crash cost; the cost slope (crash cost - normal cost)/(normal time - crash time) prices each day saved. The rule: crash the critical activity with the cheapest slope, one day at a time, as long as the slope is below the indirect cost saved per day - and stop when a second path turns critical (both must then be crashed together), when slopes exceed the saving, or when crash limits run out.",
              "A compact example prices the discipline. The 13-day network of Section 2.4 carries Rs 250 per day of indirect cost. Activity B can crash 2 days at slope Rs 200 and A 1 day at Rs 300, while C and D cannot crash. Crashing B both days saves (250 - 200) x 2 = Rs 100 and shortens the project to 11 days; crashing A next would cost Rs 300 to save Rs 250 - a loss - so 11 days is the optimum duration. Note how C, floating at 4 days, never enters the conversation: crashing non-critical work buys nothing but invoices.",
            ],
            bullets: [
              "PERT te = (to + 4tm + tp)/6 - a weighted mean under the beta distribution.",
              "Activity variance = ((tp - to)/6)^2; project variance = the sum along the critical path only.",
              "Completion probability: z = (target - te_project)/sigma_project read against the normal table.",
              "Cost slope = (crash cost - normal cost)/(normal time - crash time) - the price of one day saved.",
              "Crash rule: cheapest-slope critical activity first, while slope < the daily indirect cost saved.",
              "Stop when slopes exceed the saving, a second path turns critical, or crash limits run out.",
              "Crashing non-critical activities buys nothing - their float absorbs the compression.",
            ],
            table: {
              caption: "Crashing decision for the 13-day network (indirect cost Rs 250/day; critical path A-B-D).",
              headers: ["Activity", "Normal time", "Crash limit", "Slope (Rs/day)", "Decision"],
              rows: [
                ["A (1-2)", "4 days", "1 day", "300", "slope > Rs 250 saved - do not crash"],
                ["B (2-3)", "6 days", "2 days", "200", "cheapest on the critical path - crash both days"],
                ["C (2-4)", "5 days", "2 days", "500", "non-critical with 4 days float - never crash"],
                ["D (3-4)", "3 days", "0", "-", "crash-proof (fixed duration)"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "To crash or not to crash",
              caption: "Crashing is an economic decision, not an engineering reflex.",
              start: "A critical activity can be compressed at a known cost slope",
              branches: [
                {
                  label: "Slope < the daily indirect cost saved",
                  outcome: "Crash it - total project cost falls day by day",
                  good: true,
                },
                {
                  label: "Slope > the daily indirect cost saved",
                  outcome: "Crashing adds cost - the optimum duration has been passed",
                  good: false,
                },
                {
                  label: "A second path becomes critical in parallel",
                  outcome: "Both paths must be crashed together or the duration does not move",
                  good: false,
                },
                {
                  label: "The activity is already at its crash limit",
                  outcome: "No compression left - look elsewhere on the path",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Variance rides the critical path only",
              body: "Never add the variances of non-critical activities into the project variance, and never keep crashing past the point where a second path turns critical without crashing both. Each error costs about half the question's marks.",
            },
            keyTerms: [
              { term: "PERT expected time", definition: "te = (to + 4tm + tp)/6, the mean duration of an activity under the beta distribution." },
              { term: "Activity variance", definition: "((tp - to)/6)^2; summed along the critical path to obtain project variance." },
              { term: "Cost slope", definition: "(crash cost - normal cost)/(normal time - crash time): the direct cost of saving one day." },
              { term: "Optimum duration", definition: "The project duration at which total cost (direct + indirect) is minimum - the crashing target." },
            ],
            examQuestions: [
              {
                q: "For the 13-day network of Section 2.4 with indirect cost Rs 250/day: A can crash 1 day at slope Rs 300, B can crash 2 days at slope Rs 200, C and D cannot crash. Find the optimum project duration and net saving, and explain what changes if a second path becomes critical during crashing.",
                marks: 7,
                outline: [
                  "List slopes: A = 300, B = 200 (Rs/day); the critical path is A-B-D.",
                  "Crash the cheapest critical activity first: B at slope 200 < 250 - net saving Rs 50/day.",
                  "Crash B by its limit of 2 days: duration 11 days, cumulative saving Rs 100.",
                  "Next candidate A: slope 300 > 250 - crashing would add Rs 50/day - stop.",
                  "Optimum duration 11 days at net saving Rs 100.",
                  "Parallel-path caution: if path A-C also became critical, both paths need simultaneous crashing.",
                  "Non-critical C and D are never crashed - float absorbs their compression uselessly.",
                ],
              },
              {
                q: "Define cost slope and write its formula.",
                marks: 2,
              },
              {
                q: "An activity has to = 4, tm = 6 and tp = 16 days. Compute te and its variance.",
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
      title: "Inventory Control and Queueing Models",
      summary:
        "Stocking and waiting, both priced: EOQ and its production-batch and discount extensions, safety stock and reorder points under uncertainty, ABC classification for control effort, and queueing theory from single-server M/M/1 to multi-server M/M/s with Little's law tying lengths to times.",
      chapter: {
        number: "03",
        title: "Inventory Control and Queueing Models",
        intro:
          "Unit III models the two buffers every operation holds: inventory and queues. The EOQ family trades ordering cost against carrying cost, extends to gradual replenishment (EBQ) and quantity discounts, then adds uncertainty through safety stock and reorder points. ABC analysis allocates scarce control attention. Queueing theory then prices waiting itself - arrival rates, service rates and the system metrics Ls, Lq, Ws and Wq for one server and many.",
        inOneBreath:
          "EOQ orders Q* = sqrt(2DCo/Ch) so that ordering and holding costs break even; EBQ stretches the same logic to gradual production with the factor (1 - d/p); price breaks are evaluated by comparing total cost at each feasible order quantity; safety stock z x sigma of lead-time demand rides above the reorder point dL; ABC concentrates control on the few items that carry most value; queues settle into steady state only when lambda < mu, and Little's law L = lambda W connects queue lengths to waiting times in M/M/1 and M/M/s alike.",
        sections: [
          {
            number: "3.1",
            title: "Inventory costs and the EOQ model",
            body: [
              "Inventory exists because supply and demand refuse to synchronize - production runs want batches, customers want instant availability, lead times lag. Holding stock costs money: capital tied up, storage, insurance, obsolescence - together the carrying cost Ch, often 20-25% of item value per year. Ordering it also costs money: requisition, paperwork, receiving, set-up - the ordering cost Co per order. Shortage costs - lost sales, expediting, goodwill - complete the picture. Inventory management is the perpetual three-way trade among these.",
              "The economic order quantity resolves the two controllable costs. With annual demand D, order cost Co and carrying cost Ch per unit-year, the total relevant cost is TC = (D/Q)Co + (Q/2)Ch: ordering cost falls as Q grows, carrying cost rises. Setting the derivative to zero isolates Q* = sqrt(2DCo/Ch), the order size where the two costs break even - each then equals sqrt(2DCoCh)/2 and the total is sqrt(2DCoCh). For D = 10,000 units, Co = Rs 100 and Ch = Rs 2: Q* = 1000 units, 10 orders a year, and TC = Rs 2,000.",
              "The square root is the model's gift. Ordering 50% too much raises the total cost by only about 8%; even doubling the order size costs about 25% extra - so rough cost estimates still give workable policies, exactly what the sensitivity sweep in the code shows. The assumptions on the box: demand constant and known, instantaneous replenishment, no quantity discounts, no shortages. Section 3.2 relaxes replenishment and discounts; Section 3.3 adds uncertainty. The reorder point ROP = dL (demand rate times lead time) says when to press the button.",
            ],
            bullets: [
              "Three cost families: ordering (Co per order), carrying (Ch per unit-year), shortage (lost sales, expediting).",
              "Total relevant cost TC = (D/Q)Co + (Q/2)Ch - ordering falls, carrying rises as Q grows.",
              "EOQ: Q* = sqrt(2DCo/Ch) - the order size where the two costs break even.",
              "At Q*: ordering cost = holding cost = sqrt(2DCoCh)/2 each; total = sqrt(2DCoCh).",
              "Worked numbers: D = 10000, Co = 100, Ch = 2 give Q* = 1000, 10 orders/year, TC = Rs 2000.",
              "Square-root robustness: +50% on Q costs about 8% extra; doubled Q about 25% - rough data still works.",
              "Assumptions: constant known demand, instantaneous replenishment, no discounts, no shortages.",
              "Reorder point ROP = dL - the inventory level that triggers the next order.",
            ],
            codeExample: {
              language: "python",
              caption: "EOQ and its famous insensitivity: cost data is never exact, but the square root turns big errors into small ones.",
              code: `# EOQ with a sensitivity sweep.

D, Co, Ch = 10000, 100, 2     # units/yr, Rs per order, Rs per unit-yr

Q_star = (2 * D * Co / Ch) ** 0.5
TC_star = (2 * D * Co * Ch) ** 0.5   # ordering + holding at the optimum
print("EOQ =", Q_star, " orders/yr =", D / Q_star, " TC =", TC_star)

for factor in (0.5, 2.0):            # order half / double the optimum
    Q = Q_star * factor
    TC = D / Q * Co + Q / 2 * Ch
    print("Q =", Q, " TC =", TC,
          " penalty = {:.1%}".format(TC / TC_star - 1))`,
            },
            diagram: {
              kind: "cycle",
              title: "The EOQ saw-tooth cycle",
              caption: "Each cycle repeats: deplete, reorder, replenish - average inventory is Q/2.",
              steps: [
                { label: "Order Q* arrives", note: "stock jumps to the peak" },
                { label: "Stock drains at rate d" },
                { label: "Level crosses the reorder point", note: "order placed here" },
                { label: "Lead-time consumption continues" },
                { label: "New batch lands exactly at zero", note: "instantaneous replenishment assumed" },
              ],
            },
            callout: {
              type: "tip",
              title: "Assumptions first",
              body: "State the EOQ assumptions before the formula: constant known demand, instantaneous replenishment, no discounts, no shortages. The assumptions are worth 2 of the marks and take ten seconds to write.",
            },
            keyTerms: [
              { term: "Economic order quantity", definition: "Q* = sqrt(2DCo/Ch): the order size that minimizes the sum of ordering and carrying costs." },
              { term: "Carrying cost", definition: "The cost of holding one unit for one year - capital, storage, insurance, obsolescence." },
              { term: "Ordering cost", definition: "The fixed cost of placing and receiving one order, independent of its size." },
              { term: "Reorder point", definition: "ROP = dL: the stock level at which the next order must be triggered." },
            ],
            examQuestions: [
              {
                q: "Derive the EOQ formula from the total cost function and compute the optimum for D = 10,000 units/year, Co = Rs 100 per order, Ch = Rs 2 per unit-year. State the assumptions, the number of orders per year and the total relevant cost.",
                marks: 7,
                outline: [
                  "Write TC = (D/Q)Co + (Q/2)Ch and name each term.",
                  "Differentiate with respect to Q and set to zero: -DCo/Q^2 + Ch/2 = 0.",
                  "Solve: Q* = sqrt(2DCo/Ch) = sqrt(2 x 10000 x 100 / 2) = 1000 units.",
                  "Note the symmetry argument: ordering cost = holding cost at the optimum.",
                  "Orders per year = D/Q* = 10; cycle length about 5 weeks.",
                  "TC at optimum = sqrt(2DCoCh) = Rs 2000 (Rs 1000 of each cost).",
                  "Assumptions: constant known demand, instantaneous replenishment, no discounts, no shortages.",
                ],
              },
              {
                q: "If the ordering cost Co doubles, what happens to the EOQ and to the total relevant cost?",
                marks: 3,
              },
              {
                q: "List the assumptions of the basic EOQ model.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "EBQ and quantity discounts",
            body: [
              "When the firm makes the item itself, replenishment is gradual: stock builds at the production rate p while demand drains it at d (p > d), then decays alone until the next run. The batch formula gains a brake: EBQ = sqrt(2DCo/(Ch(1 - d/p))) and the peak inventory is Q(1 - d/p), not Q - because part of each batch is consumed as it is produced. Average stock is Q(1 - d/p)/2, and since the divisor (1 - d/p) is below one, EBQ always exceeds the matching purchase EOQ.",
              "Quantity discounts change the objective, not the mechanics. Purchase cost D x P was irrelevant to EOQ because it did not vary with Q; with price breaks it does. The procedure: compute the EOQ at each price's carrying cost (Ch is usually a percentage of price), check feasibility against the break's quantity range, raise infeasible orders to the lowest feasible quantity, and compare total cost TC = DP + (D/Q)Co + (Q/2)Ch at each candidate. The winner is not always the deepest discount - holding cost can eat the price gain.",
              "The worked table tells the story. Annual demand 5,000 units, Co = Rs 60, Ch = 20% of unit price, with breaks at 800 and 1500 units. At Rs 10 the EOQ of 548 is feasible and costs Rs 51,095 a year; at Rs 9.50 the EOQ of 562 is infeasible, so order the 800 minimum for Rs 48,635; at Rs 9.00 the EOQ of 577 is again infeasible, so order 1500 for Rs 46,550 - the winner, saving Rs 4,545 over the no-discount policy. Note the rule the table enforces: infeasible EOQs are always adjusted upward, never left in place.",
            ],
            bullets: [
              "Gradual replenishment: stock builds at p - d during production, drains at d afterwards.",
              "EBQ = sqrt(2DCo/(Ch(1 - d/p))) - always larger than the matching purchase EOQ.",
              "Peak inventory I_max = Q(1 - d/p); average = Q(1 - d/p)/2.",
              "Purchase cost enters the objective only when quantity discounts make it depend on Q.",
              "Discount procedure: EOQ at each price, feasibility check against the range, adjust upward if infeasible.",
              "Compare TC = DP + (D/Q)Co + (Q/2)Ch at each candidate - the deepest feasible break often wins.",
              "Trap: an infeasible EOQ is always raised to the range minimum, never left or lowered.",
            ],
            table: {
              caption: "Discount evaluation for D = 5000 units/yr, Co = Rs 60, Ch = 20% of price.",
              headers: ["Price break", "Unit price", "Ch (20%)", "EOQ", "Feasible?", "Order at", "Total annual cost"],
              rows: [
                ["0-799 units", "Rs 10", "Rs 2.00", "548", "yes", "548", "Rs 51,095"],
                ["800-1499", "Rs 9.50", "Rs 1.90", "562", "no - below the break", "800", "Rs 48,635"],
                ["1500 and above", "Rs 9.00", "Rs 1.80", "577", "no - below the break", "1500", "Rs 46,550"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "EOQ (instant) versus EBQ (gradual)",
              caption: "Same trade-off logic; the production model holds less average stock per cycle.",
              left: {
                heading: "EOQ - purchased items",
                items: [
                  "whole batch Q arrives at once",
                  "saw-tooth triangles",
                  "average stock Q/2",
                  "Q* = sqrt(2 D Co / Ch)",
                  "use when suppliers deliver complete lots",
                ],
              },
              right: {
                heading: "EBQ - made in-house",
                items: [
                  "stock builds at p - d while producing",
                  "trapezoid peaks at Q(1 - d/p)",
                  "average stock Q(1 - d/p)/2",
                  "Q* = sqrt(2 D Co / (Ch (1 - d/p)))",
                  "EBQ is larger than the matching EOQ",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "In discount questions, always show the feasibility check of each EOQ against its price range, then the adjusted Q. The comparison table - purchase + ordering + holding at each candidate - is the full-marks format.",
            },
            keyTerms: [
              { term: "Economic batch quantity", definition: "The production-lot version of EOQ for gradual replenishment: sqrt(2DCo/(Ch(1 - d/p)))." },
              { term: "Production rate factor", definition: "(1 - d/p): the fraction of each batch that survives as inventory because demand consumes the rest during production." },
              { term: "Price break", definition: "A quantity threshold at which the unit price drops; it makes purchase cost depend on Q." },
              { term: "Feasibility check", definition: "Verifying that the computed EOQ lies inside its price range; if not, adjust to the range minimum before costing." },
            ],
            examQuestions: [
              {
                q: "A firm manufactures a component at rate p = 20,000 units/year against demand d = 5,000 units/year. Set-up cost Co = Rs 100, Ch = Rs 2 per unit-year. Compute the EBQ and maximum inventory, and compare with the EOQ that would apply if the item were purchased with instantaneous delivery.",
                marks: 7,
                outline: [
                  "State the gradual-replenishment model and the factor (1 - d/p) = 1 - 0.25 = 0.75.",
                  "EBQ = sqrt(2 x 5000 x 100 / (2 x 0.75)) = sqrt(666,667) = about 816 units.",
                  "Maximum inventory I_max = Q(1 - d/p) = 816 x 0.75 = about 612 units.",
                  "Purchase EOQ = sqrt(2 x 5000 x 100 / 2) = 707 units - the EBQ is larger.",
                  "Average stock = I_max/2 = about 306 units; run length = Q/p = about 0.041 year.",
                  "Explain: part of each batch is consumed during production, so less is held per cycle.",
                  "Verify with TC = (D/Q)Co + (Q(1 - d/p)/2)Ch.",
                ],
              },
              {
                q: "Why is the EBQ always larger than the corresponding EOQ?",
                marks: 2,
              },
              {
                q: "Write the three steps for deciding the order quantity when a supplier offers two price breaks.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Safety stock, reorder point and ABC analysis",
            body: [
              "The EOQ world assumed certainty; the real world bills for it. During the lead time L the firm sells at rate d, so the reorder point ROP = dL covers average lead-time demand. Demand above average eats into safety stock SS = z x sigma_L, where sigma_L is the standard deviation of lead-time demand and z the service-level factor - 1.28 at 90%, 1.645 at 95%, 2.33 at 99%. The full trigger is ROP = dL + z x sigma_L; each extra sigma of protection costs holding money, so the service level is an economic choice, not a virtue.",
              "When sigma_L is not given directly, build it: with variable daily demand (sigma_d) and fixed lead time, sigma_L = sigma_d x sqrt(L); with variable lead time and fixed demand, sigma_L = d x sigma_Lt; when both vary, combine variances. ABC analysis then allocates attention. Ranking items by annual value (unit cost x annual usage) typically exposes a Pareto pattern: about 15% of items carry about 75% of value (A), 30% carry 20% (B), and 55% carry 5% (C). A items get tight control and frequent counts; C items get two-bin looseness.",
              "The classification is a policy table, not a moral one. A items: perpetual inventory records, monthly cycle counts, careful forecasting, senior buyers. B items: periodic review, standard EOQ rules, quarterly counts. C items: bulk purchases, min-max levels, annual counts. For critical spares the value ranking is complemented by VED - vital, essential, desirable - because a cheap part that stops a line is strategically an A. Modern ERP systems automate the arithmetic, but the ranking logic - effort follows money and criticality - is unchanged.",
            ],
            bullets: [
              "ROP = dL + SS: average lead-time demand plus safety stock.",
              "Safety stock SS = z x sigma_L; z = 1.28 (90%), 1.645 (95%), 2.33 (99%) service levels.",
              "sigma_L = sigma_d x sqrt(L) for variable demand with fixed lead time; combine variances when both vary.",
              "Service level is economic: each sigma of protection costs carrying money - choose it, do not maximize it.",
              "ABC ranks items by annual value (unit cost x annual usage) - a Pareto split of effort.",
              "A: about 15% of items, about 75% of value - tight control, frequent counts; B: about 30% items, 20% value.",
              "C: about 55% of items, about 5% of value - two-bin, bulk, loose control.",
              "VED (vital, essential, desirable) adds criticality for spares that value ranking under-ranks.",
            ],
            table: {
              caption: "ABC classification as a control policy.",
              headers: ["Class", "Share of items", "Share of annual value", "Control policy", "Count frequency"],
              rows: [
                ["A", "about 10-20%", "about 70-80%", "perpetual records, senior buyer, reviewed monthly", "monthly or continuous"],
                ["B", "about 30%", "about 15-20%", "periodic review, standard EOQ rules", "quarterly"],
                ["C", "about 50-60%", "about 5-10%", "bulk orders, two-bin, min-max", "annual"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "ABC classification pyramid",
              caption: "Few items carry most of the value - control effort should mirror the money.",
              tiers: [
                { label: "A - about 15% of items, about 75% of value", note: "tight control, monthly counts" },
                { label: "B - about 30% of items, about 20% of value", note: "periodic review, standard rules" },
                { label: "C - about 55% of items, about 5% of value", note: "two-bin, bulk, loose control" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorize three z values",
              body: "1.28 at 90%, 1.645 at 95%, 2.33 at 99%. RGPV frequently expects these without a normal table, and the three of them cover essentially every service level the papers ask for.",
            },
            keyTerms: [
              { term: "Safety stock", definition: "Stock held above expected lead-time demand to protect against variability; SS = z x sigma_L." },
              { term: "Reorder point", definition: "ROP = dL + z x sigma_L: the inventory level that triggers replenishment under uncertainty." },
              { term: "Service level", definition: "The probability of not stocking out during a cycle; it fixes the z multiplier." },
              { term: "ABC analysis", definition: "Ranking of inventory items by annual value so control effort follows the Pareto concentration." },
            ],
            examQuestions: [
              {
                q: "Daily demand for a spare averages 4 units with standard deviation 1.5; lead time is fixed at 9 days. Determine the reorder point and safety stock for a 95% service level, and explain how the item should be managed if it is an A-class item.",
                marks: 7,
                outline: [
                  "Lead-time demand = 4 x 9 = 36 units.",
                  "sigma_L = sigma_d x sqrt(L) = 1.5 x 3 = 4.5 units.",
                  "z at 95% = 1.645; safety stock = 1.645 x 4.5 = about 7.4 units.",
                  "ROP = 36 + 7.4 = about 43 units.",
                  "A-class management: perpetual records, tight cycle counts, careful forecasting, senior buyer.",
                  "Note the trade: each unit of safety stock costs Ch per year.",
                  "State the general rule ROP = dL + z x sigma_L and when variances must be combined.",
                ],
              },
              {
                q: "Give the ABC classification percentages for items and annual value, and the control policy for each class.",
                marks: 3,
              },
              {
                q: "What is cycle counting and why do A items get it monthly?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Queueing: the M/M/1 model",
            body: [
              "Queueing theory prices waiting. Customers arrive at rate lambda, join a line, receive service at rate mu and leave; Kendall's notation A/B/s compresses the assumptions - M/M/1 means memoryless (exponential) arrivals, memoryless service, one server and unlimited queue room. Arrivals are Poisson: the count in any interval follows the Poisson distribution and inter-arrival times are exponential. Queue disciplines - FIFO, LIFO, priority - and the population size complete the description. Steady state exists only if rho = lambda/mu < 1; at or above one the queue grows without bound.",
              "Birth-death algebra yields the operating characteristics. P0 = 1 - rho is the probability the system is empty. Ls = lambda/(mu - lambda) is the expected number in the system; Lq = lambda^2/(mu(mu - lambda)) the number waiting; Ws = 1/(mu - lambda) the total time in system; Wq = lambda/(mu(mu - lambda)) the waiting time alone. Little's law stitches them together: Ls = lambda x Ws and Lq = lambda x Wq - compute any two and the rest follow, a favourite exam verification.",
              "An ATM at rush hour makes it concrete. Arrivals 20 per hour, service 24 per hour: rho = 0.833, P0 = 0.167, Ls = 5 customers in the system, Lq = 4.17 waiting, Ws = 15 minutes end to end with 12.5 of them in line. If arrivals climb to 23 per hour - utilization 0.958 - waiting quintuples to about 57 minutes: waiting time is violently non-linear in rho, which is why slightly loaded systems feel fine and nearly loaded systems feel broken, and why capacity must be planned well below saturation.",
            ],
            bullets: [
              "Kendall notation A/B/s: arrival process / service process / number of servers.",
              "Poisson arrivals = exponential inter-arrival times - the memoryless pattern of random demand.",
              "Stability: rho = lambda/mu < 1, else no steady state and the queue grows without bound.",
              "P0 = 1 - rho; Ls = lambda/(mu - lambda); Lq = lambda^2/(mu(mu - lambda)).",
              "Ws = 1/(mu - lambda); Wq = lambda/(mu(mu - lambda)) - always state the units.",
              "Little's law: Ls = lambda x Ws and Lq = lambda x Wq - the free verification of every answer.",
              "Non-linearity: waiting time explodes as rho approaches 1 - plan capacity below saturation.",
            ],
            table: {
              caption: "M/M/1 formulas with the ATM example (lambda = 20/hr, mu = 24/hr).",
              headers: ["Characteristic", "Formula", "ATM value"],
              rows: [
                ["Probability system empty", "P0 = 1 - lambda/mu", "0.167"],
                ["Utilization", "rho = lambda/mu", "0.833"],
                ["Number in system", "Ls = lambda/(mu - lambda)", "5.00 customers"],
                ["Number in queue", "Lq = lambda^2/(mu(mu - lambda))", "4.17 customers"],
                ["Time in system", "Ws = 1/(mu - lambda)", "15 minutes"],
                ["Waiting time in queue", "Wq = lambda/(mu(mu - lambda))", "12.5 minutes"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Anatomy of a single-server queue",
              caption: "M/M/1 in Kendall notation: Poisson arrivals, exponential service, one server.",
              steps: [
                { label: "Calling population generates arrivals", note: "Poisson at rate lambda" },
                { label: "Join the queue", note: "FIFO, unlimited room" },
                { label: "Single server", note: "exponential service, rate mu" },
                { label: "Departure", note: "steady state needs lambda < mu" },
                { label: "Measure Ls, Lq, Ws, Wq", note: "Little's law links them: L = lambda W" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always begin with the stability check: 'rho = 20/24 = 0.833 < 1, steady state exists.' Then quote Little's law at the end as verification - Ls = lambda x Ws = 20 x 0.25 = 5. Two free marks in two lines.",
            },
            keyTerms: [
              { term: "Kendall notation", definition: "The A/B/s code describing arrival process, service process and server count of a queue." },
              { term: "Utilization factor", definition: "rho = lambda/mu: the fraction of time the server is busy; steady state needs rho < 1." },
              { term: "Little's law", definition: "L = lambda x W: the average number in a system equals the arrival rate times average time in it." },
              { term: "Steady state", definition: "The long-run equilibrium of a queue, existing only when the arrival rate is below the service rate." },
            ],
            examQuestions: [
              {
                q: "At an ATM, arrivals are Poisson at 20 per hour and service is exponential at 24 per hour. Compute rho, P0, Ls, Lq, Ws and Wq (state units), verify with Little's law, and comment on what happens as rho approaches 1.",
                marks: 7,
                outline: [
                  "Stability check: rho = 20/24 = 0.833 < 1.",
                  "P0 = 1 - rho = 0.167.",
                  "Ls = lambda/(mu - lambda) = 20/4 = 5 customers.",
                  "Lq = lambda^2/(mu(mu - lambda)) = 400/96 = 4.17 customers.",
                  "Ws = 1/(mu - lambda) = 0.25 hour = 15 minutes; Wq = Ws - 1/mu = 12.5 minutes.",
                  "Little: Ls = lambda x Ws = 20 x 0.25 = 5 - verified.",
                  "Comment: at lambda = 23 (rho = 0.958) Wq jumps to about 57 minutes - explosive growth near rho = 1.",
                ],
              },
              {
                q: "State Little's law and use it to derive Wq from Lq.",
                marks: 2,
              },
              {
                q: "What does rho = 1 mean operationally, and why is steady state then impossible?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Multi-server queues: M/M/s and applications",
            body: [
              "One server is a design choice, not a law. The M/M/s model routes one shared queue to s identical servers, each with rate mu; utilization drops to rho = lambda/(s mu). The algebra thickens - P0 sums a geometric head and an Erlang-C tail, and Lq = P0 x (s rho)^s x rho/(s! (1 - rho)^2) - but the four metrics follow the same Little's law machinery as before, with Ls = Lq + lambda/mu closing the set.",
              "Pooling is the model's headline. Eight arrivals an hour with 10-per-hour servers: a single M/M/1 line keeps every customer waiting 24 minutes on average; splitting arrivals into two separate M/M/1 lines of 4 each cuts that to 4 minutes; pooling both servers behind one M/M/2 queue cuts it again to about 1.1 minute - with the same two servers, same total capacity, same utilization. Shared queues keep every server busy while no line idles behind a slow customer, which is why airports, banks and toll plazos adopted the single-snake design.",
              "The cost model completes the design. Total system cost = cost of waiting (customers x time x value) + cost of service (servers x wage). The optimum s is the smallest server count whose marginal waiting-cost saving still covers one more wage - read off by evaluating Wq at s = 1, 2, 3 and so on. The framework extends to finite waiting rooms (M/M/1/K, lost customers), limited populations (M/M/1/N, machine repair) and non-exponential service (the M/G/1 Pollaczek-Khinchine formula), but the exam classics remain M/M/1 and M/M/s with a Little's law check.",
            ],
            bullets: [
              "M/M/s: one shared queue feeding s identical servers, each with rate mu.",
              "Utilization rho = lambda/(s mu); steady state still needs rho < 1.",
              "Lq = P0 (s rho)^s rho / (s! (1 - rho)^2), with P0 summing a geometric head and an Erlang tail.",
              "Ls = Lq + lambda/mu; Little's law still converts lengths to times.",
              "Pooling: one M/M/2 queue beats two separate M/M/1 lines at identical capacity - about 4x in the worked case.",
              "Cost model: minimize waiting cost + service cost; add servers while the marginal saving exceeds the wage.",
              "Extensions: M/M/1/K (finite room), M/M/1/N (finite population, machine repair), M/G/1 (general service).",
            ],
            table: {
              caption: "Pooling versus splitting with identical total capacity (lambda = 8/hr, mu = 10/hr per server).",
              headers: ["Configuration", "Utilization", "Lq", "Wq"],
              rows: [
                ["One M/M/1 server, all 8 arrivals/hour", "0.80", "3.20", "24.0 minutes"],
                ["Two separate M/M/1 lines, 4 arrivals/hour each", "0.40", "0.27", "4.0 minutes"],
                ["One M/M/2 queue, two pooled servers", "0.40", "0.15", "1.1 minutes"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Arrivals are climbing - three capacity moves",
              caption: "Pooling beats splitting; speeding the server needs technology.",
              start: "Utilization of the service system is drifting toward 1",
              branches: [
                {
                  label: "Pool demand into one shared queue with s servers (M/M/s)",
                  outcome: "Waiting time collapses super-linearly - the strongest lever",
                  good: true,
                },
                {
                  label: "Split arrivals into s separate single-server lines",
                  outcome: "One line idles while another grows - the pooling benefit is lost",
                  good: false,
                },
                {
                  label: "Raise the service rate mu with faster technology",
                  outcome: "Utilization falls below 1 - works when a faster process exists",
                  good: true,
                },
                {
                  label: "Do nothing because rho is still just under 1",
                  outcome: "Queues grow explosively as rho passes 1 - service collapses",
                  good: false,
                },
              ],
            },
            callout: {
              type: "tip",
              title: "The pooling comparison",
              body: "One M/M/2 versus two M/M/1 queues is a standing favourite: state both configurations' Wq, keep the total capacity identical, and conclude 'pooling cuts waiting nearly fourfold at the same cost'. The 2! in the Lq formula is where marks leak - carry it carefully.",
            },
            keyTerms: [
              { term: "Multi-server queue", definition: "A queueing system in which one line feeds s parallel identical servers - the M/M/s model." },
              { term: "Erlang C formula", definition: "The expression for the probability an arriving customer must wait in an M/M/s system; the tail term inside P0." },
              { term: "Pooling", definition: "Merging separate queues or servers so capacity is shared; it cuts waiting time at identical total capacity." },
              { term: "Finite-capacity queue", definition: "A queue with limited room (M/M/1/K); arrivals beyond K are lost." },
            ],
            examQuestions: [
              {
                q: "A bank can run either one shared queue to two tellers (M/M/2) or two separate queues each fed to its own teller. With total arrivals 8 per hour and each teller serving 10 per hour, compare the two designs on Lq and Wq and recommend one.",
                marks: 7,
                outline: [
                  "Separate queues: each line is M/M/1 with lambda = 4, mu = 10.",
                  "Each line: rho = 0.4, Lq = 16/(10 x 6) = 0.267, Wq = 0.0667 hour = 4 minutes.",
                  "Pooled M/M/2: rho = 8/20 = 0.4; P0 = [1 + 0.8 + 0.8^2/(2 x 0.6)]^-1 = 0.4286.",
                  "Lq = P0 x (s rho)^s x rho/(s! (1 - rho)^2) = 0.4286 x 0.64 x 0.4/0.72 = about 0.152.",
                  "Wq = Lq/lambda = about 0.019 hour = 1.1 minutes.",
                  "Compare: 4.0 versus 1.1 minutes at identical servers and utilization - pooling wins almost 4x.",
                  "Recommend the single shared queue; note the behavioural bonus of no wrong-line regret.",
                ],
              },
              {
                q: "In Kendall notation, what do the three fields of M/M/s denote?",
                marks: 2,
              },
              {
                q: "Give two service settings where a finite-capacity queue M/M/1/K models reality better than M/M/1.",
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
      title: "Supply Chain Management",
      summary:
        "The strategic layer: what a supply chain is and which flows it carries, the six drivers and the obstacles that strain them, the bullwhip effect and its four causes, forecasting methods with error metrics, sales and operations planning with aggregate strategies, and the lean-versus-agile design choice.",
      chapter: {
        number: "04",
        title: "Supply Chain Management",
        intro:
          "Unit IV zooms out from single decisions to the chain: its structure and three flows, the drivers a manager can actually tune - facilities, inventory, transport, information, sourcing, pricing - and the bullwhip distortion that poor coordination creates upstream. Forecasting supplies the demand signal, S&OP turns it into one agreed plan, and lean or agile design matches the chain to the product's uncertainty.",
        inOneBreath:
          "A supply chain moves materials forward and information and cash backward across suppliers, plants, distributors and retailers; six drivers trade efficiency against responsiveness; the bullwhip effect amplifies small consumer swings into factory chaos through demand-signal processing, order batching, price fluctuation and shortage gaming, countered by shared point-of-sale data, VMI and everyday low pricing; forecasts are smoothed, trended and error-checked with MAD and tracking signals; S&OP reconciles demand and supply monthly into one number; and Lee's uncertainty matrix picks efficient, risk-hedging, responsive or agile chains.",
        sections: [
          {
            number: "4.1",
            title: "Supply chain structure, drivers and obstacles",
            body: [
              "A supply chain is the network of organizations, people, activities, information and resources that moves a product from raw material to final customer. Three flows run through it: materials flow downstream (supplier to customer), while information and cash flow upstream (customer to supplier). The push-pull boundary marks where make-to-stock push meets order-driven pull: upstream of it, forecast-driven production pushes; downstream, actual orders pull. The cycle view decomposes the chain into four repeated cycles - customer order, replenishment, manufacturing and procurement - each a request-response pair.",
              "Six drivers are the levers a chain designer actually holds: facilities (where and what), inventory (how much, where), transportation (how, how fast), information (what is shared), sourcing (who does the work) and pricing (who is incentivized). Each driver can be tuned for efficiency (lower cost) or responsiveness (faster, more flexible) - central plants versus local sites, sea freight versus air, single-source cost versus dual-source resilience. Strategy means picking a position on every lever consistently: a chain tuned for cost on three drivers and speed on three others delivers neither.",
              "Obstacles keep the drivers from meshing: demand variability, longer lead times, product proliferation, fragmented ownership, price fluctuations and behavioural shortcuts like hoarding. The competitive test is fit: the chain must support the business's competitive strategy - a cost leader selling staples needs an efficient chain; a fashion retailer needs a responsive one; a semiconductor maker needs both. The remaining sections of this unit take the drivers one at a time: information distortion (bullwhip), the demand signal (forecasting), the plan that reconciles them (S&OP) and the overall design philosophy (lean versus agile).",
            ],
            bullets: [
              "Three flows: material downstream, information and cash upstream - mark them on any chain you draw.",
              "Cycle view: customer order, replenishment, manufacturing and procurement cycles - each a request-response pair.",
              "Push-pull boundary: forecast-driven push upstream, order-driven pull downstream.",
              "Six drivers: facilities, inventory, transportation, information, sourcing, pricing.",
              "Each driver tunes toward efficiency (cost) or responsiveness (speed, flexibility) - consistently.",
              "Obstacles: demand variability, long lead times, product proliferation, price swings, fragmented ownership.",
              "Strategic fit: the driver settings must serve the competitive strategy - cost leader or differentiator.",
            ],
            table: {
              caption: "The six supply chain drivers and their two tuning directions.",
              headers: ["Driver", "Efficiency lever", "Responsiveness lever"],
              rows: [
                ["Facilities", "few central plants and DCs", "many local sites close to customers"],
                ["Inventory", "lean stock, central pooling", "forward-positioned safety stock"],
                ["Transportation", "full truckloads, rail, sea", "express parcel, air freight"],
                ["Information", "batch data, cost-lean IT", "real-time POS sharing end to end"],
                ["Sourcing", "single low-cost supplier", "dual or multi-source with surge capacity"],
                ["Pricing", "stable low margin, long runs", "dynamic pricing to shape demand"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The chain and its three flows",
              caption: "Materials flow forward; information and cash flow back - every supply chain question starts here.",
              stages: [
                { label: "Tier-2/3 suppliers", note: "raw material, components" },
                { label: "Manufacturer", note: "converts and assembles" },
                { label: "Distributor / DC", note: "buffers and breaks bulk" },
                { label: "Retailer", note: "the face of the chain" },
                { label: "Customer", note: "the demand signal that drives everything" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Explain the three flows' wants material forward, information and cash backward - one sentence each. Then draw the chain and mark the push-pull boundary on it; the labelled drawing is worth more than a paragraph of prose.",
            },
            keyTerms: [
              { term: "Push-pull boundary", definition: "The point in the chain upstream of which forecast-driven push production runs and downstream of which order-driven pull runs." },
              { term: "Supply chain driver", definition: "One of six controllable levers - facilities, inventory, transport, information, sourcing, pricing - tuned between efficiency and responsiveness." },
              { term: "Cycle view", definition: "The decomposition of a chain into four repeating request-response cycles: customer order, replenishment, manufacturing, procurement." },
              { term: "Three flows", definition: "Material flowing downstream; information and cash flowing upstream through every link." },
            ],
            examQuestions: [
              {
                q: "Define a supply chain, explain its three flows with directions, describe the four cycle views, and locate the push-pull boundary in a make-to-order manufacturer.",
                marks: 7,
                outline: [
                  "Definition: the network of organizations, activities, information and resources from raw material to final customer.",
                  "Material flows downstream; information and cash flow upstream.",
                  "Cycles: customer order, replenishment, manufacturing, procurement - each a request-response pair.",
                  "Push: forecast-driven work upstream; pull: order-driven work downstream.",
                  "In make-to-order: the boundary sits at final assembly - components pushed, final product pulled.",
                  "Mark the boundary on a drawn chain (supplier - plant - DC - customer).",
                  "One sentence on why the boundary moves with product strategy.",
                ],
              },
              {
                q: "Name the six supply chain drivers and give one efficiency lever and one responsiveness lever for each.",
                marks: 3,
              },
              {
                q: "Distinguish push and pull processes with one example each.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "The bullwhip effect",
            body: [
              "The bullwhip effect is the amplification of demand variability as orders travel upstream: the consumer moves 5%, the retailer orders 10% more, the wholesaler 20%, the distributor 40%, and the factory ramps capacity 60%. Procter and Gamble named it after watching diaper orders - a stable consumer staple - whip its own suppliers. Each stage forecasts not on consumer demand but on the distorted order it receives, adds safety stock, and passes a more violent signal upward. The result: wild capacity swings, chronic overstock alternating with shortage, and every buffer the chain holds tuned to the wrong signal.",
              "Four mechanisms drive the whip, and naming them with their countermeasures is the classic 7-mark answer. Demand signal processing: each stage forecasts on downstream orders instead of end demand - countered by sharing point-of-sale data chain-wide. Order batching: full-truckload economics bunch smooth demand into lumpy orders - countered by smaller, more frequent EDI orders and vendor-managed inventory. Price fluctuation: promotions trigger forward buying and artificial spikes - countered by everyday low pricing and stable contracts. Rationing and shortage gaming: when supply is short, buyers inflate orders to grab allocation - countered by allocating on historical sales and sharing capacity information.",
              "The structural fixes share one idea: give every stage the same truth. EDI and shared dashboards move POS data upstream in real time; VMI lets the supplier - who sees true demand - manage the retailer's replenishment; CPFR formalizes joint forecasting; continuous replenishment kills batching; everyday low pricing kills promo spikes. Walmart's cross-docking plus supplier data-sharing and Campbell Soup's continuous replenishment program are the canonical case studies. Close the exam answer with the one-line moral: information replaces inventory - the cheapest buffer in the chain is shared data.",
            ],
            bullets: [
              "Amplification: small consumer swings grow at each upstream stage - the signature symptom.",
              "Cause 1 - demand signal processing: forecasting on downstream orders instead of end demand.",
              "Cause 2 - order batching: full-truck economics bunch smooth demand into lumps.",
              "Cause 3 - price fluctuation: promotions trigger forward buying and false spikes.",
              "Cause 4 - rationing and shortage gaming: buyers inflate orders when supply is allocated.",
              "Countermeasures: POS data sharing, EDI, smaller frequent orders, VMI, CPFR, everyday low pricing.",
              "Moral: information replaces inventory - shared data is the cheapest buffer in the chain.",
            ],
            table: {
              caption: "Bullwhip causes and their countermeasures - the standard 7-mark template.",
              headers: ["Cause", "How it distorts orders", "Countermeasure"],
              rows: [
                ["Demand signal processing", "each stage forecasts on the orders it sees, not on consumer demand", "share POS data and forecast one number chain-wide"],
                ["Order batching", "big periodic orders hide true demand rhythms", "EDI, smaller more frequent orders, VMI"],
                ["Price fluctuation", "forward buying on promotions swings orders", "everyday low pricing, limited promotions"],
                ["Rationing / shortage gaming", "inflated orders to grab scarce supply", "allocate by historical sales, share capacity data"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Amplification upstream - the bullwhip",
              caption: "The same +5% consumer swing becomes a factory stampede.",
              steps: [
                { label: "Consumer demand rises 5%", note: "the true signal" },
                { label: "Retailer orders +10%", note: "plus safety and promo stock" },
                { label: "Wholesaler orders +20%", note: "forecasts on distorted orders" },
                { label: "Distributor orders +40%", note: "batching and shortage gaming" },
                { label: "Factory output +60%", note: "capacity and overtime decided here" },
              ],
            },
            callout: {
              type: "tip",
              title: "A fixed template",
              body: "The bullwhip answer is a template: four causes, each with mechanism and countermeasure, one amplification figure, one case mention. Rehearse it as four pairs - cause and cure - and it never changes shape.",
            },
            keyTerms: [
              { term: "Bullwhip effect", definition: "Progressive amplification of demand variability as orders move upstream in a supply chain." },
              { term: "Demand signal processing", definition: "Forecasting on downstream order data rather than end-consumer demand, distorting the signal each stage passes on." },
              { term: "Vendor-managed inventory", definition: "The supplier monitors the buyer's stock and replenishes it - countering signal distortion and batching." },
              { term: "CPFR", definition: "Collaborative planning, forecasting and replenishment - a formal joint forecasting process across trading partners." },
            ],
            examQuestions: [
              {
                q: "Explain the bullwhip effect with an amplification example, describe its four causes with the mechanism of each, and give one countermeasure per cause.",
                marks: 7,
                outline: [
                  "Definition plus amplification: consumer +5% becomes factory +60% upstream.",
                  "Cause 1 - demand signal processing: forecasting on distorted orders; counter - share POS data chain-wide.",
                  "Cause 2 - order batching: full-truck and monthly cycles lump demand; counter - smaller frequent EDI orders, VMI.",
                  "Cause 3 - price fluctuation: promotions trigger forward buying; counter - everyday low pricing.",
                  "Cause 4 - rationing and shortage gaming: inflated orders under allocation; counter - allocate on historical sales, share capacity data.",
                  "Mention Pampers/diapers as the classic discovery case.",
                  "Moral: information replaces inventory - shared data is the cheapest buffer.",
                ],
              },
              {
                q: "What is vendor-managed inventory, and which bullwhip cause does it attack?",
                marks: 3,
              },
              {
                q: "Why does order batching distort the demand signal seen upstream?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Demand forecasting",
            body: [
              "Every downstream decision in this subject starts with a number: the forecast. Horizons set the tool - short-term (weeks) for scheduling and replenishment, medium (months to a year) for S&OP and capacity, long (years) for network design. Qualitative methods - Delphi rounds, market surveys, expert judgment, analogy from similar products - carry new products with no history. Quantitative methods assume the past rhymes: time-series models (naive, moving average, exponential smoothing, Holt and Winters extensions) extrapolate pattern; causal models (regression) explain demand from drivers like price and weather.",
              "Simple exponential smoothing is the workhorse: Ft+1 = alpha x Dt + (1 - alpha) x Ft, a recursive memory where alpha sets the trade - high alpha chases change, low alpha smooths noise. Trend needs Holt's two-parameter version, seasonality Winters' three. Accuracy is judged, not assumed: MAD (mean absolute deviation) averages the miss, MSE punishes large errors, MAPE scales error into a percentage for comparison across products, and the tracking signal (cumulative error / MAD) flags bias when it leaves roughly plus-minus 4.",
              "The worked example shows the discipline. Six months of demand 120, 135, 125, 140, 150, 145: a 3-month moving average forecasts 145; exponential smoothing with alpha = 0.2 walks from 120 to a forecast of about 134 with MAD near 12. Two errors no one should make: reporting in-sample accuracy as if it were a prediction, and letting a biased forecast ride because its MAD looks acceptable - check the tracking signal, then the residual pattern, then the method, in that order.",
            ],
            bullets: [
              "Horizons: short-term scheduling, medium-term S&OP, long-term network design - each with its own tools.",
              "Qualitative: Delphi, market surveys, expert judgment, analogy - for new products without history.",
              "Time series: naive, moving average, weighted MA, exponential smoothing, Holt (trend), Winters (season).",
              "Exponential smoothing: Ft+1 = alpha x Dt + (1 - alpha) x Ft - recursive memory set by alpha.",
              "Causal: regression links demand to drivers such as price, weather and promotions.",
              "Error metrics: MAD (average miss), MSE (squares punish outliers), MAPE (percentage, comparable).",
              "Tracking signal = cumulative error / MAD; leaving roughly plus-minus 4 flags bias.",
            ],
            codeExample: {
              language: "python",
              caption: "Two workhorse forecasts on six months of demand, plus MAD for the smoothing run.",
              code: `demand = [120, 135, 125, 140, 150, 145]

# 3-month moving average
ma3 = sum(demand[-3:]) / 3
print("3-month moving average:", ma3)          # 145.0

# Simple exponential smoothing, alpha = 0.2
alpha, F = 0.2, demand[0]
errors = []
for d in demand:
    errors.append(d - F)
    F = alpha * d + (1 - alpha) * F            # Ft+1 = aDt + (1-a)Ft
print("exp-smoothing forecast:", round(F, 1))  # 134.1

mad = sum(abs(e) for e in errors) / len(errors)
print("MAD of the smoothing run:", round(mad, 1))   # 11.8`,
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a forecasting method",
              caption: "Match the tool to the data you actually have and the horizon you actually need.",
              axes: { x: "Data richness (little history -> rich history)", y: "Horizon (short term -> long term)" },
              quadrants: [
                { label: "Judgment and Delphi", note: "new product, no history - structured expert opinion" },
                { label: "Causal / regression models", note: "long horizon - explain demand with drivers" },
                { label: "Naive and moving average", note: "stable demand, short horizon - keep it cheap" },
                { label: "Exponential smoothing family", note: "rich history, short horizon - weight the recent past" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Smoothing questions want the recursion shown: Ft+1 = alpha Dt + (1 - alpha) Ft with every step's value. Close with MAD and one line on alpha's trade-off - responsiveness versus stability.",
            },
            keyTerms: [
              { term: "Exponential smoothing", definition: "A recursive forecasting rule, Ft+1 = alpha x Dt + (1 - alpha) x Ft, weighting recent history more heavily as alpha grows." },
              { term: "Mean absolute deviation", definition: "MAD: the average size of forecast errors, ignoring sign - the standard quick accuracy check." },
              { term: "Tracking signal", definition: "Cumulative error divided by MAD; drifting beyond roughly plus-minus 4 indicates a biased forecast." },
              { term: "Delphi method", definition: "Iterative, anonymous expert rounds converging on a judgmental forecast for products without data." },
            ],
            examQuestions: [
              {
                q: "Demand for six periods is 120, 135, 125, 140, 150, 145. Forecast period 7 with (a) a 3-month moving average and (b) exponential smoothing with alpha = 0.2 initialized at 120; compute MAD for the smoothing run and discuss the choice of alpha.",
                marks: 7,
                outline: [
                  "(a) MA3 = (140 + 150 + 145)/3 = 145.",
                  "(b) Recursion Ft+1 = 0.2 Dt + 0.8 Ft from F1 = 120.",
                  "Walk the values: 120, 123, 123.4, 126.7, 131.4 to a forecast of about 134.1.",
                  "Errors: 0, 15, 2, 16.6, 23.3, 13.6 - MAD about 11.8.",
                  "Alpha trade-off: high alpha reacts fast but chases noise; low alpha smooths but lags.",
                  "Monitor with the tracking signal = cumulative error / MAD.",
                  "Neither method handles trend - Holt's method would add a trend component.",
                ],
              },
              {
                q: "Write the exponential smoothing recursion and explain the effect of raising alpha.",
                marks: 2,
              },
              {
                q: "Why is MAPE preferred to MAD when comparing accuracy across products?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Sales and operations planning",
            body: [
              "Sales and operations planning (S&OP) is the monthly process that turns forecasts, orders and capacity into one agreed plan. Five steps: refresh data and run the statistical baseline; demand review (sales adjusts for promotions and market intelligence); supply review (operations prices capacity scenarios); pre-S&OP reconciliation (cost the gaps and prepare options); executive S&OP (decide one number) - then execute and measure against it. The output is a single plan - units by family by month - that finance, sales, operations and procurement all commit to.",
              "Underneath S&OP sits aggregate planning: matching supply to demand over 6-18 months at family level, using the levers of inventory, workforce, overtime, subcontracting, backlog and pricing. The two pure strategies bracket the space. Level production sets output to average demand, building inventory in troughs and drawing it down in peaks - stable employment but carrying and shortage costs. Chase production moves output with demand - minimal inventory but hiring, layoff and training costs. Real plans are hybrids: a level core with seasonal overtime, or chase only for the volatile families.",
              "The exam arithmetic prices the strategies. Quarterly demand 900, 1500, 1200, 1400 (average 1250): a level plan produces 1250 each quarter - inventory peaks at 350 units after the slow quarter and lands at zero by year end, with no hiring or layoffs; a chase plan swings the workforce into Q2 and sheds it again, paying hiring and training instead of carrying cost. Whichever costs less across the cost elements wins, and the comparison table - strategy versus hiring, layoff, carrying, overtime, shortage - is the expected answer format. S&OP elevates that arithmetic into a monthly governance cadence with one number the whole company defends.",
            ],
            bullets: [
              "S&OP: monthly, cross-functional, one agreed plan of units by family by month.",
              "Five steps: data refresh, demand review, supply review, pre-S&OP reconciliation, executive S&OP.",
              "Aggregate planning horizon: 6-18 months, product families, every supply lever priced.",
              "Level strategy: constant output at average demand - stable jobs, inventory swings.",
              "Chase strategy: output tracks demand - minimal stock, hiring and layoff churn.",
              "Levers: inventory, workforce, overtime, subcontracting, backlog, pricing.",
              "Real plans are hybrids - a level core plus seasonal overtime usually wins the cost table.",
            ],
            table: {
              caption: "Chase versus level aggregate strategies.",
              headers: ["Aspect", "Chase strategy", "Level strategy"],
              rows: [
                ["Production follows", "demand each period", "constant average demand"],
                ["Inventory", "near zero", "absorbs peaks and valleys"],
                ["Workforce", "hire and lay off with every swing", "stable; overtime and idle time as buffers"],
                ["Cost profile", "hiring, layoff, training costs", "carrying and shortage costs"],
                ["Best when", "flexible labour pool, holding is expensive", "skilled staff, morale matters, holding is cheap"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The monthly S&OP cycle",
              caption: "Demand and supply plans are reconciled into one number, every month.",
              steps: [
                { label: "Refresh data and run the statistical forecast" },
                { label: "Demand review", note: "sales validates with market intelligence" },
                { label: "Supply review", note: "capacity and inventory scenarios" },
                { label: "Pre-S&OP reconciliation", note: "cost the gaps and options" },
                { label: "Executive S&OP", note: "one agreed plan, one number" },
                { label: "Execute and measure", note: "feeds next month's cycle" },
              ],
            },
            callout: {
              type: "tip",
              title: "Answers are cost tables",
              body: "Aggregate planning answers are cost tables: strategy versus (hiring + layoff + inventory + overtime + shortage) cost. Compute both pure strategies, then state which wins and why - the format itself is where the marks live.",
            },
            keyTerms: [
              { term: "Sales and operations planning", definition: "The monthly cross-functional process that produces one agreed plan of demand, supply and finance." },
              { term: "Chase strategy", definition: "An aggregate plan that varies production to track demand, trading inventory cost for workforce churn." },
              { term: "Level strategy", definition: "An aggregate plan that produces at constant average demand, absorbing variation in inventory." },
              { term: "Aggregate planning", definition: "Capacity planning over 6-18 months at product-family level, pricing all supply levers." },
            ],
            examQuestions: [
              {
                q: "Quarterly demand is 900, 1500, 1200 and 1400 units. Cost out a pure level plan (production 1250 per quarter), describe how a chase plan would differ, and state the cost elements each plan incurs and which suits a skilled workforce.",
                marks: 7,
                outline: [
                  "Level plan: produce 1250 per quarter - the annual average.",
                  "Inventory path: 350 after Q1, 100 after Q2, 150 after Q3, 0 after Q4.",
                  "Level costs: inventory carrying (peak 350 units) and any shortage risk - zero hiring/layoff.",
                  "Chase plan: output 900, 1500, 1200, 1400 - hiring into Q2, layoffs into Q3.",
                  "Chase costs: hiring, layoff, training; minimal carrying cost.",
                  "Skilled workforce argues for level (protect capability and morale); a flexible pool argues for chase.",
                  "Hybrids - level core plus overtime peaks - usually cheapest in practice.",
                ],
              },
              {
                q: "Name the five steps of the monthly S&OP cycle.",
                marks: 3,
              },
              {
                q: "What is a backlog cost, and which strategy risks it more?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Lean versus agile supply chains",
            body: [
              "Lean chains eliminate waste - the seven muda: overproduction, waiting, transport, over-processing, inventory, motion and defects. The tools are famous: just-in-time replenishment, kanban pull signals (produce only when a card authorizes it), heijunka (leveled production so mix and volume stop thrashing the line), SMED changeover reduction, kaizen improvement loops and supplier partnership to compress inbound lead times. Lean fits functional products with stable, predictable demand - groceries, cement, fasteners - where cost wins customers and the chain competes as a cost leader.",
              "Agile chains absorb volatility instead of eliminating it. The tools: postponement (delay final configuration until the customer orders - paint mixed in-store, processors binned to order), modular product design, a strategic decoupling point where push meets pull with a buffer, and quick-response replenishment. Agile fits innovative products - fashion, consumer electronics - where being late to trend costs more than being expensive. Fisher's framework states the fit rule: functional products want physically efficient chains; innovative products want market-responsive chains.",
              "Lee's uncertainty matrix adds the supply axis: low demand and supply uncertainty wants an efficient chain (staples); low demand uncertainty but high supply uncertainty wants risk-hedging (pooled buffers, multiple sources); high demand uncertainty with dependable supply wants a responsive chain (fashion basics); high on both wants an agile chain - semiconductors being the textbook case. Many real chains are leagile: lean upstream of the decoupling point, agile downstream. Zara and a cement maker sit on opposite corners of the same matrix, which is why their toolkits differ almost point by point. The exam answer pairs each quadrant with product examples and names the tools each deploys.",
            ],
            bullets: [
              "Lean: eliminate the seven muda; tools - JIT, kanban, heijunka, SMED, kaizen.",
              "Kanban rule: nothing is produced until a card authorizes it - pull, not push.",
              "Agile: absorb volatility; tools - postponement, modular design, decoupling point, quick response.",
              "Fisher: functional products want efficient chains; innovative products want responsive chains.",
              "Lee's matrix adds supply uncertainty: efficient, risk-hedging, responsive and agile quadrants.",
              "Leagile: lean upstream of the decoupling point, agile downstream - the common hybrid.",
              "Design rule: match the chain to the product's demand and supply uncertainty, not to fashion.",
            ],
            table: {
              caption: "Lean versus agile at a glance.",
              headers: ["Dimension", "Lean chain", "Agile chain"],
              rows: [
                ["Focus", "eliminate waste (muda)", "respond to volatile demand"],
                ["Trigger", "forecast-driven push", "order-driven pull from the decoupling point"],
                ["Inventory", "minimal, JIT replenishment", "buffer at the decoupling point"],
                ["Lead time", "reduced relentlessly", "short by design (postponement)"],
                ["Typical products", "functional, stable (groceries, cement)", "innovative, volatile (fashion, electronics)"],
                ["Signature tools", "kanban, heijunka, SMED", "postponement, modular design, quick response"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Lee's uncertainty matrix",
              caption: "Demand uncertainty against supply uncertainty picks the chain strategy.",
              axes: { x: "Supply uncertainty (low -> high)", y: "Demand uncertainty (low -> high)" },
              quadrants: [
                { label: "Efficient chain", note: "functional products: flour, cement, staples - compete on cost" },
                { label: "Risk-hedging chain", note: "stable demand, erratic supply - buffer and pool supply" },
                { label: "Responsive chain", note: "volatile demand, dependable supply - fashion basics" },
                { label: "Agile chain", note: "both uncertain - semiconductors, new electronics" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Pair lean and agile with product types and at least three tool names each, then place both on Lee's matrix. The drawn matrix with four labelled quadrants is what the 7-mark answer is built around - and mislabelling one quadrant is the common slip.",
            },
            keyTerms: [
              { term: "Lean", definition: "A chain philosophy that eliminates the seven wastes and serves stable demand at lowest cost." },
              { term: "Muda", definition: "The Japanese term for waste - overproduction, waiting, transport, over-processing, inventory, motion, defects." },
              { term: "Postponement", definition: "Delaying final product configuration until customer orders arrive, so variety is cheap." },
              { term: "Decoupling point", definition: "The strategic stock point where forecast-driven push hands over to order-driven pull." },
            ],
            examQuestions: [
              {
                q: "Compare lean and agile supply chains on objective, product type, inventory policy and signature tools, and place each on Lee's demand-supply uncertainty matrix with one industry example per quadrant.",
                marks: 7,
                outline: [
                  "Lean: eliminate the seven muda; JIT, kanban, heijunka, SMED - functional, stable-demand products.",
                  "Agile: absorb volatility - postponement, modular design, decoupling-point buffer, quick response.",
                  "Fisher's rule: functional products want efficient chains; innovative want responsive.",
                  "Lee's matrix: efficient (low demand, low supply uncertainty - staples); risk-hedging (low demand, high supply - pooled buffers).",
                  "Responsive (high demand, low supply - fashion); agile (high on both - semiconductors).",
                  "Leagile: lean upstream of the decoupling point, agile downstream.",
                  "Draw the matrix with quadrant examples - the diagram anchors the marks.",
                ],
              },
              {
                q: "Define postponement with one product example.",
                marks: 2,
              },
              {
                q: "What is the rule of a kanban card in a pull system?",
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
      title: "Logistics and Distribution Management",
      summary:
        "Executing the last mile and beyond: distribution network designs from drop-shipping to cross-docking, vehicle routing and the travelling salesman problem, warehouse functions and picking methods, third-party logistics and the SCOR reference model, and green supply chain management closing the loop - anchored by classic case studies.",
      chapter: {
        number: "05",
        title: "Logistics and Distribution Management",
        intro:
          "Unit V lands the strategy on the ground: choosing a distribution network shape, routing vehicles from a depot, designing warehouse throughput, deciding what to outsource to a 3PL, benchmarking with SCOR, and greening the chain through reverse logistics and circular material loops - each illustrated by the case studies - Toyota, Dell, Zara, Amazon, Amul and Walmart - that examiners love.",
        inOneBreath:
          "Distribution design trades inventory, transport and response time across drop-ship, distributor-storage, retail-storage and cross-dock shapes; routing heuristics - nearest neighbour, savings, sweep - build feasible vehicle tours that 2-opt untangles; a warehouse is a pipeline of receiving, putaway, storage, picking and shipping, with picking eating about half the cost; 3PLs sell logistics capability while SCOR standardizes plan-source-make-deliver-return metrics; and green SCM closes the loop with reverse logistics, recovery and circular sourcing.",
        sections: [
          {
            number: "5.1",
            title: "Distribution network design",
            body: [
              "Distribution design decides where stock sits between factory and customer, and it is a trade-off table, not a taste. The options: manufacturer storage with direct parcel shipping (drop-shipping) centralizes inventory and maximizes variety at the price of slow delivery and expensive last-mile transport; distributor storage with last-mile delivery forwards inventory into regional DCs for 1-2 day response at the price of more stock; retail storage with customer pickup is instant but scatters stock across thousands of sites; cross-docking holds product less than a day, sorting inbound truckloads straight into outbound routes.",
              "Three product facts choose the design: demand density (orders per square kilometre), value density (rupees per kilogram - cheap bulky goods cannot afford parcel freight) and urgency. High value density with sparse demand drops straight from the plant; dense fast-moving demand justifies forward DCs; urgent low-value items live in stores; predictable high-volume SKUs flow through cross-docks. Hub-and-spoke networks concentrate long-haul line-haul between hubs and radiate short spokes - the airline-and-parcel pattern that turns many thin flows into a few thick ones.",
              "E-commerce made the trade-offs visible. Amazon's answer evolved from drop-shipping books (central stock, one SKU family) to a dense network of fulfilment centres holding fast movers near demand, blended with supplier drop-ship for the long tail. Walmart pairs retail storage with grocery cross-docks. The design questions never change: response time promised, inventory pooled or positioned, transport mode economics, and the variety the catalog promises. Draw the options, price the four cost lines, recommend - that is the 7-mark format.",
            ],
            bullets: [
              "Drop-shipping: manufacturer holds stock, parcel carrier delivers - variety and pooled inventory, slow response.",
              "Distributor storage: forward DCs with last-mile delivery - fast response, more inventory sites.",
              "Retail storage with pickup: instant, but stock scattered across thousands of shelves.",
              "Cross-docking: sort inbound truckloads straight to outbound - under a day in the building.",
              "Hub-and-spoke: consolidate thin flows into thick line-hauls between hubs (parcel and airline pattern).",
              "Choosing facts: demand density, value density (Rs per kg) and urgency pick the design.",
              "The 7-mark format: options table (inventory, transport, response, variety) then a reasoned recommendation.",
            ],
            table: {
              caption: "Distribution options and their trade-offs.",
              headers: ["Design", "Inventory position", "Transport pattern", "Response time", "Best for"],
              rows: [
                ["Manufacturer storage + parcel (drop-ship)", "centralized at plants", "many small parcels", "1-4 days", "high-value, slow-moving, wide variety"],
                ["Distributor storage + last-mile", "forward regional DCs", "inbound TL, outbound van/parcel", "1-2 days", "fast movers in dense markets"],
                ["Retail storage + customer pickup", "thousands of stores", "TL to stores; customer travels", "instant", "urgent, low-value items"],
                ["Cross-dock hub", "held under 24 hours", "inbound TL sorted to outbound TL", "about 1 day", "predictable, high-volume SKUs"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Picking a distribution design",
              caption: "Value density, demand density and urgency decide - not habit.",
              start: "A new product line needs a distribution structure",
              branches: [
                {
                  label: "High value density, sparse urgent demand",
                  outcome: "Drop-ship from the plant - central stock, parcel carrier",
                  good: true,
                },
                {
                  label: "Fast movers in dense urban markets",
                  outcome: "Regional DC with cross-docking - short last mile, full trucks",
                  good: true,
                },
                {
                  label: "Low-value bulky goods by air-freight drop-ship",
                  outcome: "Transport cost swallows the margin - wrong design",
                  good: false,
                },
                {
                  label: "Every SKU stocked in every retail store",
                  outcome: "Slow movers freeze working capital across thousands of shelves",
                  good: false,
                },
              ],
            },
            callout: {
              type: "tip",
              title: "Price the trade-off",
              body: "Answer distribution-design questions with the trade-off table (inventory, transport, response, variety) and then recommend one design with two reasons. Never recommend without pricing the trade-off - a naked verdict earns little.",
            },
            keyTerms: [
              { term: "Cross-docking", definition: "Moving goods from inbound to outbound trailers with little or no storage, sorting in under a day." },
              { term: "Drop-shipping", definition: "Manufacturer-held inventory shipped directly to customers, usually via parcel carrier." },
              { term: "Hub-and-spoke", definition: "A network that consolidates flows through hubs so thin demands ride thick line-hauls." },
              { term: "Value density", definition: "Value per unit weight (Rs per kg); low value density cannot afford fast, expensive transport." },
            ],
            examQuestions: [
              {
                q: "Compare manufacturer-storage drop-shipping, distributor storage with carrier delivery, and retail storage with customer pickup on inventory, transport cost, response time and product variety. Recommend a design for (a) premium laptops and (b) bottled water for a city.",
                marks: 7,
                outline: [
                  "Drop-ship: centralized inventory, high variety, 1-4 day response, expensive parcel last mile.",
                  "Distributor storage: forward DCs, 1-2 day response, moderate variety, cheaper consolidated delivery.",
                  "Retail storage: instant availability, lowest variety per site, customer bears travel.",
                  "Cross-docking as the throughput variant for predictable high-volume SKUs.",
                  "Laptops: high value density, sparse demand - drop-ship from the plant or a single national DC.",
                  "Bottled water: low value density, dense predictable demand - regional DCs and retail storage.",
                  "Structure the answer as the trade-off table then the recommendation.",
                ],
              },
              {
                q: "What is cross-docking and what kind of SKUs suit it?",
                marks: 2,
              },
              {
                q: "Define value density and state its role in choosing the transport mode.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Vehicle routing and the travelling salesman problem",
            body: [
              "The travelling salesman problem (TSP) asks for the cheapest tour visiting every city exactly once and returning home; the vehicle routing problem (VRP) adds a depot, vehicle capacities, time windows and a fleet. Both are NP-hard: exact optimization explodes beyond a few dozen stops, so practice runs two phases - construct a feasible solution fast, then improve it. Construction heuristics: nearest neighbour (always drive to the closest unvisited stop) builds tours quickly but leaves awkward final legs; the sweep algorithm angles customers around the depot into clusters and routes each cluster; insertion methods grow routes stop by stop.",
              "The Clarke-Wright savings algorithm is the exam favourite. Merging depot trips 0-i-0 and 0-j-0 into one 0-i-j-0 tour saves s(i,j) = d(0,i) + d(0,j) - d(i,j). List all pair savings in descending order, merge greedily while capacity and time constraints hold, and a good multi-vehicle plan assembles itself. Improvement then untangles the result: 2-opt swaps two legs to remove route crossings; 3-opt and Or-opt relocate and reverse segments. Metaheuristics - tabu search, genetic algorithms, ant colony - power commercial routing engines, but the exam stops at savings plus 2-opt.",
              "The worked example runs nearest neighbour on five points. From depot 0 the nearest stop is 4 (8 km), then 1 (2 km), then 2 (3 km), then 3 (6 km), returning 19 km - a 38 km tour, quick but rarely optimal. The savings method on the same matrix merges the fattest depot legs first and typically trims the total. Routing is where supply chain theory meets fuel: a 10% shorter fleet route is a 10% cut in the largest controllable logistics cost, which is why serious operators re-optimize daily.",
            ],
            bullets: [
              "TSP: cheapest tour visiting every stop once and returning; VRP adds capacity, fleet and time windows.",
              "Both NP-hard - construction heuristics plus improvement, not exact search.",
              "Nearest neighbour: always drive to the closest unvisited stop - fast, weak final legs.",
              "Sweep: cluster customers by angle around the depot, then route each cluster.",
              "Clarke-Wright saving: s(i,j) = d(0,i) + d(0,j) - d(i,j); merge descending savings under capacity.",
              "2-opt: swap two legs to remove route crossings; 3-opt and Or-opt relocate segments.",
              "Metaheuristics (tabu, genetic, ant colony) power commercial engines - the exam stops at savings + 2-opt.",
            ],
            codeExample: {
              language: "python",
              caption: "Nearest-neighbour TSP from depot 0 over four stops - greedy, fast, and usually improvable.",
              code: `# Symmetric distance matrix; index 0 is the depot.

d = [
    [0, 12, 10, 19, 8],
    [12, 0, 3, 7, 2],
    [10, 3, 0, 6, 20],
    [19, 7, 6, 0, 4],
    [8, 2, 20, 4, 0],
]

tour, left = [0], set(range(1, 5))
while left:
    here = tour[-1]
    nxt = min(left, key=lambda j: d[here][j])
    tour.append(nxt)
    left.remove(nxt)
tour.append(0)                               # close the loop

length = sum(d[tour[i]][tour[i + 1]] for i in range(len(tour) - 1))
print("tour:", tour, " length:", length)     # 0-4-1-2-3-0, 38 km`,
            },
            diagram: {
              kind: "flow",
              title: "Routing workflow from demand to dispatch",
              caption: "Route construction is heuristic; improvement is where the savings live.",
              steps: [
                { label: "Fix the depot and geocode the customers" },
                { label: "Build the distance/time matrix" },
                { label: "Construct routes", note: "nearest neighbour, savings or sweep" },
                { label: "Enforce capacity and time windows" },
                { label: "Improve with 2-opt", note: "untangle crossing legs" },
                { label: "Dispatch and measure actuals", note: "feed the next planning cycle" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The savings formula s = d(0,i) + d(0,j) - d(i,j) is a free mark - write it before any numbers. Then show the merger order as a descending-savings list with running capacity checks beside it.",
            },
            keyTerms: [
              { term: "Travelling salesman problem", definition: "Find the minimum-cost tour that visits every node exactly once and returns to the start." },
              { term: "Vehicle routing problem", definition: "The TSP generalized to a fleet with capacities, time windows and depot constraints." },
              { term: "Savings algorithm", definition: "Clarke-Wright heuristic merging depot out-and-back trips when s(i,j) = d(0,i) + d(0,j) - d(i,j) is positive." },
              { term: "2-opt", definition: "An improvement move that removes two legs and reconnects the tour to eliminate crossings." },
            ],
            examQuestions: [
              {
                q: "Distances from depot 0 to stops 1, 2, 3, 4 are 12, 10, 19, 8; between stops: d(1,2)=3, d(1,3)=7, d(1,4)=2, d(2,3)=6, d(2,4)=20, d(3,4)=4. Build a tour by the nearest-neighbour rule from the depot, compute its length, then compute the saving s(2,3) of merging routes 0-2-0 and 0-3-0.",
                marks: 7,
                outline: [
                  "Nearest neighbour: from 0 drive to stop 4 (8 km) - the closest unvisited stop.",
                  "Then 1 (2 km), then 2 (3 km), then 3 (6 km), then return to the depot (19 km).",
                  "Tour 0-4-1-2-3-0 with length 8 + 2 + 3 + 6 + 19 = 38 km.",
                  "Write the saving formula s(i,j) = d(0,i) + d(0,j) - d(i,j).",
                  "s(2,3) = 10 + 19 - 6 = 23.",
                  "Note: in the full VRP, savings are merged in descending order subject to capacity.",
                  "Mention 2-opt as the follow-up improvement that removes route crossings.",
                ],
              },
              {
                q: "Why are TSP and VRP called NP-hard, and what does that mean for routing software?",
                marks: 3,
              },
              {
                q: "Write the Clarke-Wright saving expression and interpret a negative saving.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Warehousing and warehouse management",
            body: [
              "A warehouse is a pipeline, not a shed: receiving (check, count and grade inbound against the ASN and PO), putaway (move stock to its slot), storage (hold it), picking (retrieve items for orders), packing and shipping (stage and load to carrier cut-offs). Cross-dock facilities compress the pipeline to hours, sorting inbound directly to outbound; storage warehouses buffer days or months. Storage systems trade selectivity against density: selective racks (one pallet deep, instant access) at one extreme, drive-in and push-back racks in between, flow-through gravity lanes and automated AS/RS cranes at the dense extreme.",
              "Design decisions are velocity decisions. Slotting places A-class fast movers in the golden zone - waist-to-shoulder height on the outbound aisle - because travel is roughly half of pick time and golden-zone slots cut walking on the items picked most often. Picking methods scale throughput: discrete order picking (one picker, one order) for large orders; batch picking (one walk collects the same SKU for several orders) for small e-commerce orders; zone picking with conveyor hand-offs; wave picking synchronized to carrier cut-offs. S-shape (serpentine) routing walks every aisle once - pick-path design is literally a shortest-tour problem.",
              "Metrics close the loop: order cycle time (order to ship), picks per labour hour, inventory accuracy (counted versus system, target above 99.5%), dock-to-stock time and space utilization. Picking alone consumes roughly 55% of warehouse operating cost, which is why automation aims there first - goods-to-person systems (mobile robots, vertical lift modules, carousels) eliminate walking entirely. A WMS executes: it directs putaway by rule, releases waves, tracks every move by barcode or RFID and feeds the metrics back. Exam answers name the pipeline, the cost concentration and two automation moves.",
            ],
            bullets: [
              "Pipeline: receiving, putaway, storage, picking, packing and shipping - in that order, always.",
              "Storage spectrum: selective racks (access) through drive-in and push-back to AS/RS (density).",
              "Slotting: A-class fast movers in the golden zone - waist to shoulder height on the outbound aisle.",
              "Travel is about half of pick time; velocity-based slotting attacks exactly that half.",
              "Discrete picking: one picker, one order. Batch picking: one walk, many orders.",
              "Zone picking: fixed zones with conveyor hand-offs. Wave picking: release synchronized to carrier cut-offs.",
              "Picking eats roughly 55% of warehouse operating cost - where automation (goods-to-person) aims first.",
            ],
            table: {
              caption: "Picking methods and the order profiles that suit them.",
              headers: ["Method", "How it works", "Best when"],
              rows: [
                ["Discrete (single-order) picking", "one picker walks one complete order", "few large orders, high service priority"],
                ["Batch picking", "one walk collects the same SKU for several orders", "many small orders sharing items"],
                ["Zone picking", "pickers own zones; orders move zone to zone", "large warehouse, conveyor-supported"],
                ["Wave picking", "batches released in synchronized waves", "carrier cut-off driven e-commerce"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Throughput pipeline of a warehouse",
              caption: "Product flows left to right; each stage is a cost and speed decision.",
              stages: [
                { label: "Receiving", note: "check, count, grade inbound" },
                { label: "Putaway", note: "slot by velocity - A items in the golden zone" },
                { label: "Storage", note: "selective racks versus dense AS/RS" },
                { label: "Picking", note: "the cost centre - about 55% of spend" },
                { label: "Packing and shipping", note: "wave release meets carrier cut-offs" },
              ],
            },
            callout: {
              type: "tip",
              title: "Structure plus numbers",
              body: "Name the five pipeline stages in order, then say 'picking is about 55% of warehouse cost' and attach two picking methods to two order profiles. Numbers plus structure is the full answer; either alone is half.",
            },
            keyTerms: [
              { term: "Slotting", definition: "Assigning SKUs to storage locations by pick velocity so travel is minimized on the fastest movers." },
              { term: "AS/RS", definition: "Automated storage and retrieval system - crane- or robot-driven dense storage with software-directed movement." },
              { term: "Wave picking", definition: "Releasing batches of orders in synchronized waves aligned to outbound carrier cut-offs." },
              { term: "Warehouse management system", definition: "The software that directs putaway, releases picking waves and tracks every stock move." },
            ],
            examQuestions: [
              {
                q: "Describe the five stages of warehouse throughput, explain why picking dominates warehouse cost, and compare discrete, batch, zone and wave picking with one order profile each.",
                marks: 7,
                outline: [
                  "Pipeline: receiving, putaway, storage, picking, packing/shipping - a one-line role for each.",
                  "Picking is about 55% of operating cost; travel alone is about half of pick time.",
                  "Slotting: A items in the golden zone on the outbound aisle; velocity-based placement.",
                  "Discrete picking: one picker, one order - large orders, high service.",
                  "Batch picking: one walk collects a SKU for several orders - many small e-commerce orders.",
                  "Zone picking: fixed zones with conveyor hand-offs; wave picking: release synchronized to carrier cut-offs.",
                  "Close with metrics: order cycle time, picks per hour, inventory accuracy.",
                ],
              },
              {
                q: "Differentiate cross-docking from conventional storage warehousing.",
                marks: 2,
              },
              {
                q: "What is the golden zone in slotting and why does velocity decide it?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Third-party logistics and the SCOR model",
            body: [
              "Third-party logistics (3PL) outsources part or all of the logistics task - transport, warehousing, freight payment, customs, reverse logistics - to an asset-operating specialist. The make-or-buy logic: outsource what is neither a core competence nor scale-advantaged, buy flexibility (pay per use rather than own idle capacity), and convert fixed cost to variable. Risks: loss of control, dependency, interface costs, and the knowledge that walks out the door. A 4PL (lead logistics partner) goes further - orchestrating multiple 3PLs, owning the process and often the IT while staying asset-light itself.",
              "The SCOR model (Supply Chain Operations Reference) standardizes the process view: Plan (balance demand and supply chain-wide), Source (procure), Make (transform), Deliver (order to delivery) and Return (reverse logistics), with an Enable layer (IT, HR, performance management) underpinning all five. SCOR's levels descend from industry-generic process (level 1) to configuration (level 2) to detailed activity (level 3), and its real power is the metric suite attached to five performance attributes: reliability, responsiveness, agility, cost and asset management efficiency.",
              "Level-1 metrics benchmark the whole chain: perfect order fulfilment (delivered complete, on time, to the right place, with correct documentation and invoice) for reliability; order fulfilment cycle time for responsiveness; upside flexibility (weeks needed to absorb a 20% demand rise) for agility; total supply chain management cost as a share of revenue; and cash-to-cash cycle time with inventory turns for asset efficiency. The exam routine: name the five processes, name the five attributes, attach one metric to each - and note that benchmarking against the SCOR peer set converts internal numbers into competitive intelligence.",
            ],
            bullets: [
              "3PL: an asset-operating specialist selling transport, warehousing, freight and customs services.",
              "4PL/LLP: an asset-light orchestrator - manages 3PLs, owns the process and the IT layer.",
              "Make-or-buy: core competence, asset utilization, flexibility, control, fixed-to-variable conversion.",
              "SCOR processes: Plan, Source, Make, Deliver, Return - with Enable underpinning all five.",
              "SCOR levels: process (1), configuration (2), detailed activity (3) - the drill-down structure.",
              "Five attributes: reliability, responsiveness, agility, cost and asset management efficiency.",
              "Anchor metrics: perfect order fulfilment, order cycle time, upside flexibility, SCM cost share, cash-to-cash.",
            ],
            table: {
              caption: "SCOR level-1 metrics by performance attribute.",
              headers: ["Performance attribute", "Level-1 metric (illustrative)", "What it measures"],
              rows: [
                ["Reliability", "perfect order fulfilment", "orders delivered complete, on time, damage free, correctly documented"],
                ["Responsiveness", "order fulfilment cycle time", "average days from order receipt to delivery"],
                ["Agility", "upside supply chain flexibility", "weeks needed to absorb an unexpected 20% demand rise"],
                ["Cost", "total SCM cost as % of revenue", "the chain-wide cost of planning, sourcing, making, delivering, returning"],
                ["Asset management", "cash-to-cash cycle time", "speed of converting inventory investment back into cash"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "SCOR - the process layers of a chain",
              caption: "Plan sits above the four execution processes; Enable underpins all of them.",
              layers: [
                { label: "Plan", note: "balances demand and supply chain-wide" },
                { label: "Source", note: "procures goods and services" },
                { label: "Make", note: "transforms - make-to-stock or make-to-order" },
                { label: "Deliver", note: "order, warehouse, transport, invoice" },
                { label: "Return", note: "reverse logistics for defects and packaging" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "SCOR answers: five processes, five attributes, one metric each. The 3PL versus 4PL contrast - asset operator versus asset-light orchestrator - is the standard short question; answer it in exactly those terms.",
            },
            keyTerms: [
              { term: "Third-party logistics", definition: "An outsourced logistics provider operating transport, warehousing and related services for a fee." },
              { term: "Fourth-party logistics", definition: "An asset-light integrator that orchestrates multiple 3PLs and owns the planning process and IT." },
              { term: "SCOR", definition: "The Supply Chain Operations Reference model: plan, source, make, deliver and return processes with a standard metric suite." },
              { term: "Perfect order", definition: "An order delivered complete, on time, undamaged, to the right place, with correct documents and invoice." },
            ],
            examQuestions: [
              {
                q: "Describe the five SCOR processes and the Enable layer, attach one level-1 metric to each of the five performance attributes, and distinguish a 3PL from a 4PL with the make-or-buy factors for outsourcing logistics.",
                marks: 7,
                outline: [
                  "Processes: Plan, Source, Make, Deliver, Return; Enable underpins all five.",
                  "Attributes: reliability, responsiveness, agility, cost, asset management.",
                  "Metrics: perfect order fulfilment; order fulfilment cycle time; upside flexibility; total SCM cost share; cash-to-cash.",
                  "3PL: an asset-operating specialist selling transport, warehousing and related services.",
                  "4PL: an asset-light orchestrator managing multiple 3PLs and the process/IT layer.",
                  "Make-or-buy factors: core competence, asset utilization, flexibility, control, cost structure.",
                  "Close: benchmarking against SCOR peer sets turns metrics into strategy.",
                ],
              },
              {
                q: "Define a perfect order.",
                marks: 2,
              },
              {
                q: "Give two risks of outsourcing logistics to a 3PL.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Green SCM and case studies",
            body: [
              "Green supply chain management embeds environmental objectives alongside cost and service: eco-design (design for disassembly, recycled materials, minimal packaging), green sourcing (supplier environmental audits, certified inputs), cleaner production (energy efficiency, scrap reduction, closed-loop water), greener transport (mode shift from air to sea and rail, load consolidation, alternative fuels) and reverse logistics - the backward flow of returns, end-of-life products, packaging and e-waste for reuse, remanufacture, recycling or safe disposal.",
              "The circular economy reframes the chain as a loop: reduce material intensity, extend product life through service and remanufacture, and recover materials at end of life so they re-enter sourcing - closing the loop of the section diagram. Lifecycle assessment (LCA) quantifies impacts from cradle to grave and typically relocates the problem: for many products, use-phase energy dwarfs manufacturing, which pushes design toward efficiency rather than factory hygiene alone. The drivers are hard-nosed: regulation (extended producer responsibility, take-back mandates, carbon pricing), cost (waste is purchased material thrown away) and brand.",
              "The case capsules anchor the unit. Toyota pairs lean with deep supplier collaboration - waste elimination delivering cost and environmental gains together. Dell's assemble-to-order postponement keeps finished-goods risk near zero. Zara trades scale for speed: small batches, in-house quick sewing, twice-weekly replenishment - responsiveness as strategy. Amazon places inventory forward and forecasts relentlessly. Amul's farmer cooperative built a nationwide cold chain on coordination rather than capital. Walmart's cross-docking with EDI-linked supplier replenishment is the standing proof that information replaces inventory - the thesis of the whole subject. In the exam, name the company, the signature practice and the lesson in three lines; two capsules are enough for a 7-mark green SCM answer.",
            ],
            bullets: [
              "Green SCM embeds environment alongside cost and service across the whole chain.",
              "Elements: eco-design, green sourcing, cleaner production, greener transport, reverse logistics.",
              "Reverse logistics: returns, end-of-life products, packaging and e-waste flowing back for recovery.",
              "Circular economy: reduce, reuse, remanufacture, recycle, recover - the loop closes into sourcing.",
              "LCA quantifies cradle-to-grave impact; use-phase energy often dominates the total.",
              "Drivers: regulation (EPR, carbon pricing), cost (waste is bought material), brand and customer pressure.",
              "Case anchors: Toyota lean, Dell postponement, Zara speed, Amazon placement, Amul cold chain, Walmart cross-docking.",
            ],
            table: {
              caption: "Case capsules - one signature practice and one lesson each.",
              headers: ["Company", "Signature practice", "Lesson for the exam"],
              rows: [
                ["Toyota", "lean production, kanban pull, supplier collaboration", "waste elimination delivers cost and quality together"],
                ["Dell", "direct sales with assemble-to-order postponement", "postponement postpones cost and kills finished-goods risk"],
                ["Zara", "small batches, twice-weekly replenishment, quick in-house sewing", "speed replaces forecast accuracy - responsiveness as strategy"],
                ["Amazon", "dense fulfilment network, demand forecasting, forward placement", "forward inventory buys responsiveness at scale"],
                ["Amul", "farmer cooperative with a nationwide cold chain", "coordination and shared infrastructure beat capital-heavy giants"],
                ["Walmart", "cross-docking with EDI-linked supplier replenishment", "information replaces inventory - the anchor countermeasure"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Closing the loop - circular supply chain",
              caption: "Green SCM turns the one-way chain into a circle: recover, remanufacture, re-enter.",
              steps: [
                { label: "Source", note: "recycled and renewable inputs" },
                { label: "Make", note: "cleaner production, less energy and scrap" },
                { label: "Distribute", note: "denser loads, greener fuel, smart packaging" },
                { label: "Use", note: "efficient consumption, longer product life" },
                { label: "Return and recover", note: "collect, inspect, reuse, remanufacture, recycle" },
                { label: "Feed recovered material back to sourcing", note: "the loop closes" },
              ],
            },
            callout: {
              type: "tip",
              title: "Tie green to money",
              body: "Green SCM answers score when each initiative is tied to cost, risk or regulation - not to virtue. Attach one metric (waste reduced, freight consolidated, return rate recovered) to every initiative you name.",
            },
            keyTerms: [
              { term: "Reverse logistics", definition: "The backward flow of returns, end-of-life products and packaging for reuse, remanufacture or recycling." },
              { term: "Lifecycle assessment", definition: "A cradle-to-grave quantification of a product's environmental impact across all stages." },
              { term: "Circular economy", definition: "An economic model that closes material loops through reduce, reuse, remanufacture and recycle." },
              { term: "Extended producer responsibility", definition: "Regulation making the producer accountable for the product's end-of-life take-back and recovery." },
            ],
            examQuestions: [
              {
                q: "Explain green supply chain management and reverse logistics, describe the circular economy's closed loop, and give the green lesson of any two case studies.",
                marks: 7,
                outline: [
                  "Definition: environmental objectives embedded alongside cost and service across the chain.",
                  "Elements: eco-design, green sourcing, cleaner production, greener transport, reverse logistics.",
                  "Reverse logistics: backward flow of returns, end-of-life products, packaging and e-waste.",
                  "Circular loop: recovered materials re-enter sourcing - the forward chain closes into a circle.",
                  "LCA quantifies cradle-to-grave impact; use-phase energy often dominates.",
                  "Case 1 - Toyota: lean waste elimination delivers cost and environment together.",
                  "Case 2 - Walmart or Amazon: information and network design replace inventory and transport waste; attach the drivers (regulation, cost, brand).",
                ],
              },
              {
                q: "Define reverse logistics with two example flows.",
                marks: 2,
              },
              {
                q: "What is extended producer responsibility?",
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
        "RGPV ME-703(A) papers typically spread the marks across one big LP or network numerical, one transportation or assignment numerical, one inventory or queueing numerical, and a theory block from the supply chain half of the syllabus. Allocate revision time in roughly that ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Simplex method - full solve with every tableau", weight: "10-14 marks", note: "The signature OR question; practise three clean solves including one with >= or equality constraints." },
        { topic: "CPM/PERT - forward and backward passes, floats, probability, crashing", weight: "10-14 marks", note: "Almost every paper carries one network question; draw big and label every event." },
        { topic: "Transportation - VAM start plus MODI finish", weight: "10-12 marks", note: "Two-part answers; the m + n - 1 check catches most lost marks early." },
        { topic: "EOQ / EBQ with numbers and discount decisions", weight: "8-10 marks", note: "Formula, substitution, units - the fastest full-marks question on the paper." },
        { topic: "Assignment by the Hungarian method", weight: "7-10 marks", note: "Row-column reduction then the cover-zero test; handle maximization cases too." },
        { topic: "Queueing - M/M/1 and M/M/s with Little's law", weight: "7-10 marks", note: "Check rho < 1 first; memorize the four formula lines and the verification step." },
        { topic: "Duality and sensitivity analysis", weight: "7-10 marks", note: "Write-the-dual and what-if questions; shadow price interpretation is the favourite." },
        { topic: "Bullwhip effect and supply chain drivers", weight: "6-8 marks", note: "Four causes, four countermeasures - a fixed template answer." },
        { topic: "Forecasting - smoothing computation and error metrics", weight: "5-8 marks", note: "One exponential smoothing run with MAD/MAPE; know alpha's trade-off." },
        { topic: "Logistics, warehousing, 3PL, SCOR, green SCM", weight: "6-10 marks", note: "Unit V theory carries case-study questions; the six case capsules cover most asks." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus once for understanding and once for revision, ending with full papers under exam timing. Keep one running sheet of worked numericals - it becomes your last-day revision file.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - LP foundations", tasks: ["Formulate 6 word problems end to end (variables, objective, constraints)", "Graphical solutions including unbounded and infeasible cases", "Two full simplex solves with every tableau written out"] },
        { week: "Week 2", focus: "Unit I - completion", tasks: ["One Big-M and one two-phase solve, plus the four special cases", "Write the duals of five primals; interpret shadow prices", "Sensitivity ranges on a solved tableau (cost and RHS)"] },
        { week: "Week 3", focus: "Unit II - transportation and assignment", tasks: ["NWC, LCM and VAM on one matrix - compare costs", "Two MODI finishes including one degenerate case", "Hungarian method: one 3x3, one 4x4, one maximization"] },
        { week: "Week 4", focus: "Unit II networks + Unit III inventory", tasks: ["One 8-10 activity CPM with all three floats", "PERT expected times, variance, probability and one crashing decision", "EOQ and EBQ numericals plus one discount evaluation"] },
        { week: "Week 5", focus: "Unit III queueing + Unit IV chains", tasks: ["M/M/1 and M/M/s full evaluations with Little checks", "Safety stock and ROP numericals; an ABC table from data", "Bullwhip causes and countermeasures; one smoothing run with MAD"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Distribution designs, savings method and SCOR layers from memory", "Six case capsules rehearsed in five lines each", "Two full past papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      body: [
        "The final day is for consolidation, not new material. Rebuild the ten highest-yield artifacts from memory - the algorithms, not the anecdotes - and stop by early evening; OR papers reward a rested hand that computes without sign errors.",
      ],
      bullets: [
        "Redraw from memory: the simplex iteration cycle, the MODI loop, the Hungarian pipeline and the S&OP cycle - four diagrams that structure four whole questions.",
        "Recite the formula spine: EOQ and EBQ square roots, ROP with safety stock, te and variance in PERT, cost slope, and Ls/Lq/Ws/Wq for M/M/1.",
        "Re-solve one 2-variable simplex and one 2 x 3 MODI by hand - warm arithmetic is worth more than cold reading.",
        "Re-read the four bullwhip causes with their countermeasures and the six supply chain drivers - fixed template marks.",
        "Walk the SCOR layers (plan - source - make - deliver - return) and Lee's uncertainty matrix corners one last time.",
        "Sleep - the paper is compute-heavy, and fresh arithmetic makes fewer sign errors than a tired one.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Open numerical answers with the formula in symbols, then substitute - method marks attach to the symbolic line even when arithmetic slips.",
        "Show the feasibility checks: m + n - 1 allocations in transportation, rho < 1 in queueing, balanced rows in assignment - examiners look for them first.",
        "Draw network and distribution-design answers large and label every node and event; a cramped CPM network loses float marks to misreading.",
        "Name every algorithm stage you execute (row reduction, minimum ratio, forward pass) - named steps earn method marks that bare numbers do not.",
        "Time-box: 2-3 mark questions in 4-6 minutes, 7-mark questions in 15-18 minutes, and keep the last 10 minutes for a verification pass on all numericals.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Running MODI before checking m + n - 1 allocations - a degenerate start silently invalidates every potential and delta after it.",
        "Forgetting to anchor u1 = 0 (or any one potential) - the equations are underdetermined and every opportunity cost comes out wrong.",
        "Using EOQ total cost without purchase cost in quantity-discount questions - only the discount question makes purchase cost relevant.",
        "Adding variances of non-critical activities into the PERT project variance - sigma uses the critical chain only.",
        "Crashing a non-critical activity, or crashing past the point where a second path turns critical - the duration does not fall but the cost does rise.",
        "Mapping primal constraint senses to dual variable signs incorrectly - a max primal with <= constraints gives dual y >= 0; equality constraints give free dual variables.",
      ],
    },
  ],
};
