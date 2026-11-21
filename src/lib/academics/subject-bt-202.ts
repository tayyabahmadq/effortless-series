/**
 * Academics - RGPV First Year common subject: BT-202 Mathematics-II.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const bt202: AcademicSubject = {
  id: "bt-202",
  code: "BT-202",
  title: "Mathematics-II",
  semester: "II Semester",
  program: "RGPV \u00b7 First Year Common (all B.Tech branches)",
  tagline:
    "The complete visual guide to Mathematics-II for first-year B.Tech: first-order differential equations, higher-order linear ODEs, Laplace transforms, series solutions and special functions, and partial differential equations.",
  description:
    "Five units walk through first-order differential equations - separable, linear, Bernoulli, exact, and applied - into higher-order linear ODEs with complementary function and particular integral techniques, across Laplace transforms and their ODE-solving power, through series solutions and the Legendre and Bessel special functions, and into partial differential equations formed by elimination and solved by Lagrange's method and separation of variables. Each section pairs a clear statement with a worked example, a redrawable diagram, and the exam questions RGPV actually asks. Initial-condition handling, the auxiliary equation's three cases, and the discriminant classification of PDEs are emphasised throughout, because RGPV returns to them in every paper.",
  accentColor: "#818cf8",
  emoji: "M2",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "First-Order Differential Equations",
      summary:
        "The opening unit: separable and homogeneous equations, the linear integrating-factor method, the Bernoulli substitution, exact equations with their potential function, and the classical applications of Newton's cooling, exponential growth, and the R-L circuit.",
      chapter: {
        number: "01",
        title: "First-Order Differential Equations",
        intro:
          "Unit I builds the vocabulary of rate processes. Sections move from the simplest separable and homogeneous equations through the integrating-factor recipe for linear ODEs and the Bernoulli substitution that linearises a power-law nonlinearity, into exact equations and their potential function, and finally to Newton's cooling, growth and decay, and the series R-L circuit.",
        inOneBreath:
          "A first-order ODE relates y to dy/dx; separable equations split into f(y) dy = g(x) dx and integrate; homogeneous equations use v = y/x; linear equations use the integrating factor IF = e^(integral P dx); Bernoulli equations use v = y^(1-n); exact equations satisfy partial M/partial y = partial N/partial x and have a potential function u; and applications include Newton's cooling dT/dt = -k(T-A), exponential growth dP/dt = kP, and the R-L circuit L di/dt + R i = V.",
        sections: [
          {
            number: "1.1",
            title: "Separable and homogeneous equations",
            body: [
              "A first-order ordinary differential equation relates an unknown function y(x) to its first derivative dy/dx. The simplest family is separable: an equation that can be written as f(y) dy = g(x) dx, where the variables are isolated on opposite sides. Solving it is mechanical: integrate both sides. The constant of integration appears once and is fixed by an initial condition. Many textbook models, from exponential decay to logistic growth, are first met as separable equations because physical rates often split into a part depending only on the state and a part depending only on the input.",
              "A homogeneous first-order equation is one of the form dy/dx = F(y/x); the right-hand side is a function of the ratio y/x alone, not of x and y separately. The substitution v = y/x (so y = vx and dy/dx = v + x dv/dx) collapses the equation to a separable one in v and x, which is then solved by the standard procedure and back-substituted. Test for homogeneity by replacing x with kx and y with ky: if every term carries the same power of k, the equation qualifies.",
              "A worked example makes the recipe concrete. Solve x dy/dx = y + sin(y/x). Rewriting gives dy/dx = (y + sin(y/x))/x = (v + sin v) after substituting y = vx. Then v + x dv/dx = v + sin v, so x dv/dx = sin v, which separates to dv/sin v = dx/x. Integrating both sides yields log|tan(v/2)| = log|x| + C, and back-substituting v = y/x gives the implicit solution tan(y/(2x)) = Cx where C absorbs the constants. RGPV examinations typically ask one separable and one homogeneous problem for seven marks.",
            ],
            bullets: [
              "Separable ODE: rearrange to f(y) dy = g(x) dx and integrate both sides; one constant of integration.",
              "Test for homogeneity: replace x by kx, y by ky; if every term scales by the same power of k, the equation is homogeneous.",
              "Substitute v = y/x (so dy/dx = v + x dv/dx) to turn dy/dx = F(y/x) into a separable ODE in v and x.",
              "After solving for v, back-substitute y = vx to obtain the solution in the original variables.",
              "Apply the initial condition only after the general solution is assembled, never during intermediate integration.",
            ],
            table: {
              caption: "Classifying first-order ODEs",
              headers: ["Form", "Test", "Method", "Example"],
              rows: [
                ["dy/dx = g(x) h(y)", "separable", "integrate both sides", "dy/dx = x y"],
                ["dy/dx = F(y/x)", "homogeneous", "substitute v = y/x", "x dy/dx = y + x^2"],
                ["dy/dx + P(x) y = Q(x)", "linear", "integrating factor", "dy/dx + y = x"],
                ["M dx + N dy = 0 with My = Nx", "exact", "potential function", "2xy dx + x^2 dy = 0"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Solving a separable or homogeneous ODE",
              caption:
                "Each arrow cites one step - exactly the discipline an exam answer needs.",
              steps: [
                { label: "Identify the type: separable or homogeneous", note: "by inspection" },
                { label: "Separate variables (or substitute v = y/x)", note: "algebra" },
                { label: "Integrate both sides", note: "apply standard tables" },
                { label: "Back-substitute v = y/x if used", note: "return to original variables" },
                { label: "Apply the initial condition", note: "fix the constant" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "RGPV frequently asks problems like dy/dx = (x^2 + y^2)/(xy). Rewrite the right side as (1 + (y/x)^2)/(y/x), confirm it is a function of y/x alone, set v = y/x, then separate and integrate. Show every algebraic step - examiners award marks for the substitution and the separated form, not just the final answer.",
            },
            keyTerms: [
              { term: "Separable equation", definition: "A first-order ODE that can be written f(y) dy = g(x) dx, allowing direct integration of both sides." },
              { term: "Homogeneous function of degree n", definition: "A function f(x,y) satisfying f(kx, ky) = k^n f(x,y) for every constant k." },
              { term: "Substitution v = y/x", definition: "The change of variable that reduces dy/dx = F(y/x) to a separable equation in v and x." },
            ],
            examQuestions: [
              {
                q: "Solve x dy/dx = y + sin(y/x) using an appropriate substitution; classify the equation.",
                marks: 7,
                outline: [
                  "Identify the equation as homogeneous: dy/dx = (y + sin(y/x))/x = F(y/x).",
                  "Substitute y = vx, so dy/dx = v + x dv/dx.",
                  "Simplify to v + x dv/dx = v + sin v, giving x dv/dx = sin v.",
                  "Separate variables: dv/sin v = dx/x, then integrate both sides.",
                  "Back-substitute v = y/x and apply the log identity to get tan(y/(2x)) = Cx.",
                ],
              },
              {
                q: "State the test for homogeneity of a first-order ODE and give one example.",
                marks: 2,
              },
              {
                q: "Solve the separable equation dy/dx = e^(x+y) given y(0) = 0.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Linear first-order ODE and the integrating factor",
            body: [
              "A first-order linear ODE in standard form is dy/dx + P(x) y = Q(x), where P and Q are given functions of x alone. Linearity means y and dy/dx appear to the first power and not multiplied together; if a term contains y^2, sin(y), or y * dy/dx the equation is nonlinear. Linear equations are the workhorses of engineering: a charging capacitor, a cooling fin, and a stirred-tank mixer all reduce to dy/dx + P(x) y = Q(x). A single integrating factor solves every member of this family, regardless of how complicated P and Q look.",
              "The integrating factor is IF = e^(integral of P(x) dx). Multiply through by IF and observe a perfect derivative: d/dx (IF * y) = IF * Q(x). Integrating both sides gives IF * y = integral of IF * Q(x) dx + C, hence y = (1/IF) [integral of IF * Q dx + C]. The genius of the method is that the factor e^(integral P dx) is chosen precisely to make the left side collapse into d/dx(IF * y); it is the product rule running backwards. Always take P(x) from the standard form, never from any other arrangement.",
              "Worked example. Solve dy/dx + (2/x) y = x^2 with y(1) = 1. Here P = 2/x, so IF = e^(integral of 2/x dx) = e^(2 ln x) = x^2. Multiplying through: x^2 dy/dx + 2x y = x^4, and the left is exactly d/dx(x^2 y). Integrate: x^2 y = integral of x^4 dx = x^5/5 + C, so y = x^3/5 + C/x^2. Apply y(1) = 1: 1 = 1/5 + C, so C = 4/5, giving the particular solution y = x^3/5 + 4/(5 x^2). The same recipe handles every linear first-order RGPV problem.",
            ],
            bullets: [
              "Standard form: dy/dx + P(x) y = Q(x); linearity requires y and dy/dx to the first power.",
              "Integrating factor IF = e^(integral P(x) dx); always extract P from standard form.",
              "Multiplying by IF turns the left side into d/dx(IF * y), the product rule in reverse.",
              "General solution: y = (1/IF) [integral of IF * Q(x) dx + C].",
              "Apply the initial condition after forming the general solution to fix the single constant C.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy solves a linear first-order ODE with an integrating factor",
              code: `from sympy import symbols, Function, dsolve, Eq, exp, integrate
x = symbols('x')
y = Function('y')(x)
# linear first-order: dy/dx + (2/x) y = x^2
eq = Eq(y.diff(x) + (2/x)*y, x**2)
sol = dsolve(eq, y)
print(sol)
# -> Eq(y(x), x**3/5 + C1/x**2)`,
            },
            diagram: {
              kind: "pipeline",
              title: "Integrating-factor recipe in four stages",
              caption: "Standard form, then IF, then perfect derivative, then integrate.",
              stages: [
                { label: "Write in standard form", note: "coefficient of dy/dx is 1" },
                { label: "Compute IF = e^(integral P dx)" },
                { label: "Multiply and spot d/dx(IF y) = IF Q" },
                { label: "Integrate and divide by IF" },
              ],
            },
            callout: {
              type: "warning",
              title: "Always divide to standard form first",
              body: "Do not read P(x) from an equation still in non-standard form. The ODE x dy/dx + 2y = x^3 must first be divided by x to give dy/dx + (2/x) y = x^2; only then does P = 2/x and IF = x^2. Skipping the divide-by-coefficient step is the single most common mistake in RGPV scripts.",
            },
            keyTerms: [
              { term: "Linear ODE", definition: "An equation in which the unknown function and its derivatives appear only to the first power and not multiplied together." },
              { term: "Integrating factor", definition: "The multiplier IF = e^(integral P dx) that turns the left side of dy/dx + P y = Q into a perfect derivative." },
              { term: "Standard form", definition: "dy/dx + P(x) y = Q(x), with the coefficient of dy/dx equal to one." },
            ],
            examQuestions: [
              {
                q: "Derive the integrating factor for dy/dx + P(x) y = Q(x) and hence solve x dy/dx + 2y = x^3 with y(1) = 1.",
                marks: 7,
                outline: [
                  "Write standard form: dy/dx + (2/x) y = x^2 by dividing by x.",
                  "Identify P(x) = 2/x and compute IF = e^(integral 2/x dx) = x^2.",
                  "Multiply through: x^2 dy/dx + 2x y = x^4.",
                  "Recognise left side as d/dx(x^2 y) and integrate both sides.",
                  "Obtain x^2 y = x^5/5 + C, hence y = x^3/5 + C/x^2.",
                  "Apply y(1) = 1 to get C = 4/5, giving y = x^3/5 + 4/(5 x^2).",
                ],
              },
              {
                q: "Define an integrating factor and write its formula for dy/dx + P(x) y = Q(x).",
                marks: 2,
              },
              {
                q: "Solve dy/dx + y = e^(-x) using the integrating-factor method.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Bernoulli equation",
            body: [
              "A Bernoulli equation has the form dy/dx + P(x) y = Q(x) y^n, where n is a real constant not equal to 0 or 1 (the cases n = 0 and n = 1 are already linear and separable respectively, so the substitution would be redundant). The presence of y^n on the right makes the equation nonlinear, but a single algebraic substitution linearises it. Bernoulli equations model processes where a state grows or decays proportionally to itself but is also damped by a power of itself, such as logistic population growth with a harvesting term or chemical reaction rates with inhibition.",
              "The substitution is v = y^(1-n). Differentiating: v = y^(1-n) implies dv/dx = (1-n) y^(-n) dy/dx. Divide the original equation by y^n to obtain y^(-n) dy/dx + P(x) y^(1-n) = Q(x); substituting v and dv/dx gives dv/dx + (1-n) P(x) v = (1-n) Q(x), which is linear in v and x. Solve by the integrating-factor method of Section 1.2, then back-substitute v = y^(1-n) to recover y. The factor (1-n) appears in both the new P and the new Q; forgetting it is the classic slip.",
              "Worked example. Solve dy/dx + (1/x) y = x y^2. Here n = 2, so 1 - n = -1 and the substitution is v = y^(-1) = 1/y. Dividing by y^2 gives y^(-2) dy/dx + (1/x) y^(-1) = x, hence dv/dx - (1/x) v = x where v = 1/y. The integrating factor is IF = e^(integral -1/x dx) = 1/x, so d/dx(v/x) = 1, giving v/x = x + C and v = x^2 + Cx. Back-substitute: 1/y = x^2 + Cx, so y = 1/(x^2 + Cx). Verify by substitution: the equation is satisfied identically.",
            ],
            bullets: [
              "Bernoulli form: dy/dx + P(x) y = Q(x) y^n with n not 0 or 1.",
              "Substitute v = y^(1-n); divide the original by y^n before substituting.",
              "Transformed equation: dv/dx + (1-n) P(x) v = (1-n) Q(x), linear in v.",
              "Solve the linearised equation with the integrating-factor method.",
              "Back-substitute v = y^(1-n) and apply the initial condition if given.",
            ],
            table: {
              caption: "How Bernoulli becomes linear",
              headers: ["Step", "Original", "After v = y^(1-n)"],
              rows: [
                ["Form", "dy/dx + P y = Q y^n", "dv/dx + (1-n) P v = (1-n) Q"],
                ["Type", "nonlinear", "linear"],
                ["Tool", "Bernoulli substitution", "integrating factor"],
                ["Recover y", "y from v", "y = v^(1/(1-n))"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Bernoulli solve cycle",
              caption: "Four rotating steps that always end at the general solution.",
              steps: [
                { label: "Identify n", note: "n not 0 or 1" },
                { label: "Divide by y^n" },
                { label: "Substitute v = y^(1-n)" },
                { label: "Solve linear ODE for v" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The Bernoulli question is a near-certain RGPV fixture. The script: divide by y^n, substitute v = y^(1-n), solve the linear equation in v, back-substitute. Practice the algebra so the (1-n) multiplier never gets dropped - that single factor is worth two marks.",
            },
            keyTerms: [
              { term: "Bernoulli equation", definition: "A first-order ODE of the form dy/dx + P(x) y = Q(x) y^n with n neither 0 nor 1." },
              { term: "Linearising substitution", definition: "v = y^(1-n), which converts a Bernoulli ODE into a linear ODE in v." },
              { term: "Power-law nonlinearity", definition: "The y^n term that makes the equation nonlinear but still reducible to linear form." },
            ],
            examQuestions: [
              {
                q: "Solve dy/dx + (1/x) y = x y^2 using the Bernoulli substitution; show every algebraic step.",
                marks: 7,
                outline: [
                  "Identify n = 2 and compute 1 - n = -1.",
                  "Divide the equation by y^2: y^(-2) dy/dx + (1/x) y^(-1) = x.",
                  "Substitute v = y^(-1) so dv/dx = -y^(-2) dy/dx, giving dv/dx - (1/x) v = x.",
                  "Compute IF = e^(integral -1/x dx) = 1/x and multiply: d/dx(v/x) = 1.",
                  "Integrate: v/x = x + C, so v = x^2 + Cx.",
                  "Back-substitute v = 1/y to obtain y = 1/(x^2 + Cx).",
                ],
              },
              {
                q: "Reduce the Bernoulli equation dy/dx + P(x) y = Q(x) y^n to a linear equation; state the substitution.",
                marks: 3,
              },
              {
                q: "State the standard form of a Bernoulli equation and the values of n for which it is already linear or separable.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Exact equations",
            body: [
              "An exact differential equation has the form M(x,y) dx + N(x,y) dy = 0 where the left side is the total differential of some function u(x,y); that is, du = M dx + N dy with M = partial u / partial x and N = partial u / partial y. By the equality of mixed partial derivatives, exactness requires partial M / partial y = partial N / partial x throughout a simply connected region. When this condition holds, the equation integrates immediately to u(x,y) = C, and the problem reduces to reconstructing u from its two partial derivatives.",
              "Reconstruct u by integrating M with respect to x (holding y constant) to obtain u = integral M dx + h(y), where the constant of integration is an unknown function of y. Differentiate this u with respect to y, compare with N, and solve for h'(y); integrate once more to find h(y). Verify the exactness condition before starting - if partial M/partial y differs from partial N/partial x, the equation is not exact and an integrating factor must be sought to make it so. Common integrating factors depend only on x or only on y and are derived from (partial M/partial y - partial N/partial x) / N or its negative counterpart.",
              "Worked example. Solve (2xy + 3) dx + (x^2 - 1) dy = 0. Here M = 2xy + 3 and N = x^2 - 1, so partial M/partial y = 2x and partial N/partial x = 2x - exact. Integrate M with respect to x: u = x^2 y + 3x + h(y). Differentiate with respect to y: partial u/partial y = x^2 + h'(y). Match with N = x^2 - 1 to get h'(y) = -1, hence h(y) = -y. The general solution is u = x^2 y + 3x - y = C, or x^2 y + 3x - y = C.",
            ],
            bullets: [
              "Exact equation: M dx + N dy = 0 with M = u_x and N = u_y for some potential u.",
              "Exactness test: partial M / partial y = partial N / partial x in a simply connected region.",
              "Reconstruct u by integrating M dx, leaving an unknown h(y); then match partial u / partial y to N.",
              "If not exact, search for an integrating factor depending only on x or only on y.",
              "General solution: u(x,y) = C, an implicit relation between x and y.",
            ],
            table: {
              caption: "Integrating-factor candidates when the ODE is not exact",
              headers: ["Test expression", "IF depends on", "Formula"],
              rows: [
                ["(My - Nx)/N = f(x)", "x only", "IF = e^(integral f(x) dx)"],
                ["(Nx - My)/M = g(y)", "y only", "IF = e^(integral g(y) dy)"],
                ["Both ratios depend on x and y", "needs deeper test", "try homogeneous or other IF"],
                ["My = Nx already", "no IF needed", "equation is exact"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Reconstructing the potential u",
              caption: "A mechanical four-step procedure for any exact equation.",
              steps: [
                { label: "Check My = Nx", note: "exactness test" },
                { label: "Integrate M dx", note: "u = integral M dx + h(y)" },
                { label: "Differentiate u wrt y" },
                { label: "Match with N, solve for h'(y)" },
                { label: "Integrate h'(y), write u = C" },
              ],
            },
            callout: {
              type: "warning",
              title: "Check exactness before integrating",
              body: "Always check exactness before integrating. Integrating M dx when the test fails produces a solution that does not satisfy the original equation and forfeits all marks. If partial M/partial y and partial N/partial x differ, first seek an integrating factor.",
            },
            keyTerms: [
              { term: "Exact differential", definition: "A differential form M dx + N dy that equals du for some function u, so integrating yields u = C." },
              { term: "Potential function", definition: "The function u whose partial derivatives supply M and N in an exact equation." },
              { term: "Mixed partial test", definition: "The criterion partial M/partial y = partial N/partial x that verifies exactness." },
            ],
            examQuestions: [
              {
                q: "Define an exact differential equation; solve (2xy + 3) dx + (x^2 - 1) dy = 0 and verify exactness.",
                marks: 7,
                outline: [
                  "Define exact: M dx + N dy = du with M = u_x, N = u_y.",
                  "State the test partial M / partial y = partial N / partial x.",
                  "Identify M = 2xy + 3, N = x^2 - 1 and compute both partials as 2x, confirming exactness.",
                  "Integrate M dx to get u = x^2 y + 3x + h(y).",
                  "Differentiate u with respect to y and match with N to find h'(y) = -1, hence h(y) = -y.",
                  "Write the general solution x^2 y + 3x - y = C.",
                ],
              },
              {
                q: "State the exactness criterion and explain why it follows from equality of mixed partials.",
                marks: 3,
              },
              {
                q: "Determine whether (y cos x) dx + (sin x) dy = 0 is exact; justify.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Applications: growth, cooling, and the R-L circuit",
            body: [
              "First-order ODEs are the natural language of rate processes. Newton's law of cooling states that the rate of change of an object's temperature T is proportional to the difference between T and the ambient temperature A: dT/dt = -k (T - A). With A constant, the equation is linear and separable; the solution T(t) = A + (T0 - A) e^(-kt) shows exponential relaxation toward the ambient temperature. Exponential growth and decay follow the same template with dP/dt = k P, giving P(t) = P0 e^(kt); a negative k models radioactive decay, drug elimination, and capacitor discharge.",
              "The R-L circuit is a classical electrical application. Kirchhoff's voltage law on a resistor R and inductor L in series with a source V(t) gives L di/dt + R i = V(t), a linear first-order ODE for the current i(t). With a constant source V, the integrating factor is e^(Rt/L); the solution i(t) = V/R + (i(0) - V/R) e^(-Rt/L) rises exponentially toward the steady value V/R with time constant L/R. Switching off the source gives an exponential decay with the same time constant, predicting how quickly the magnetic field collapses.",
              "A worked cooling problem. A body at 90 C is placed in a room at 20 C; after 5 minutes the temperature is 60 C. Find the temperature after 10 minutes. Solve dT/dt = -k(T - 20) to get T(t) = 20 + 70 e^(-kt). Use T(5) = 60: 60 = 20 + 70 e^(-5k), so e^(-5k) = 4/7 and k = (1/5) ln(7/4). Then T(10) = 20 + 70 (4/7)^2 = 20 + 70 * 16/49 ≈ 20 + 22.86 = 42.86 C. This is the standard RGPV Newton-cooling template - memorise the form T = A + (T0 - A) e^(-kt).",
            ],
            bullets: [
              "Newton's cooling: dT/dt = -k(T - A); solution T = A + (T0 - A) e^(-kt).",
              "Growth/decay: dP/dt = k P; solution P = P0 e^(kt) - k positive for growth, negative for decay.",
              "R-L circuit: L di/dt + R i = V; time constant tau = L/R.",
              "Always identify the rate law from the physical statement before solving the ODE.",
              "Match the initial condition at t = 0 to fix the single integration constant.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy solves Newton's law of cooling symbolically",
              code: `from sympy import symbols, Function, dsolve, Eq
t, k, A = symbols('t k A')
T = Function('T')(t)
# Newton cooling: dT/dt = -k (T - A)
eq = Eq(T.diff(t), -k*(T - A))
sol = dsolve(eq, T)
print(sol)
# -> Eq(T(t), A + (C1 - A)*exp(-k*t))`,
            },
            diagram: {
              kind: "fork",
              title: "Which application model fits?",
              caption: "Match the physical statement to the right first-order ODE.",
              start: "Physical situation",
              branches: [
                { label: "Rate proportional to value", outcome: "dy/dt = k y (growth/decay)", good: true },
                { label: "Rate proportional to difference from ambient", outcome: "Newton's cooling", good: true },
                { label: "Voltage balances inductance and resistance", outcome: "L di/dt + R i = V", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "RGPV application questions reward setup as much as solution. Always write the rate equation explicitly, name the variables, and apply the initial condition with full numerical substitution. A clean derivation of T(t) = A + (T0 - A) e^(-kt) plus a correct final number earns all seven marks even if arithmetic slips late.",
            },
            keyTerms: [
              { term: "Time constant", definition: "For a first-order linear system, the reciprocal of the rate coefficient; in an R-L circuit, tau = L/R." },
              { term: "Steady-state solution", definition: "The particular value the unknown approaches as t -> infinity, e.g. V/R in an R-L circuit." },
              { term: "Rate law", definition: "A differential equation expressing the rate of change of a quantity in terms of its current state." },
            ],
            examQuestions: [
              {
                q: "A body at 90 C cools in a room at 20 C; its temperature is 60 C after 5 minutes. Find the temperature after 10 minutes.",
                marks: 7,
                outline: [
                  "State Newton's law: dT/dt = -k(T - A) with A = 20.",
                  "Solve to obtain T(t) = 20 + C e^(-kt).",
                  "Apply T(0) = 90 to get C = 70, so T(t) = 20 + 70 e^(-kt).",
                  "Apply T(5) = 60: 60 = 20 + 70 e^(-5k), hence e^(-5k) = 4/7.",
                  "Compute e^(-10k) = (4/7)^2 = 16/49.",
                  "Substitute: T(10) = 20 + 70 * 16/49 ≈ 42.86 C.",
                ],
              },
              {
                q: "Write the differential equation governing a series R-L circuit with constant voltage V.",
                marks: 2,
              },
              {
                q: "The rate of decay of a drug is proportional to its amount. If 50 mg drops to 25 mg in 4 hours, find the amount after 8 hours.",
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
      title: "Higher-Order Linear ODEs",
      summary:
        "The complementary function with its three root cases, the particular integral by undetermined coefficients and variation of parameters, the Cauchy-Euler equation with its log-carrying solutions, and the mass-spring-damped system tying ODE constants to physical behaviour.",
      chapter: {
        number: "02",
        title: "Higher-Order Linear ODEs",
        intro:
          "Unit II moves from first order to higher order, the natural habitat of vibrational and circuit models. The complementary function is built from the auxiliary equation's roots; the particular integral is found by undetermined coefficients for elementary right-hand sides or variation of parameters for general ones. The Cauchy-Euler equation generalises the recipe to variable coefficients, and the mass-spring-damped system shows the theory in action.",
        inOneBreath:
          "For a linear constant-coefficient ODE, y = e^(m x) gives the auxiliary equation; distinct real roots give C e^(m x), repeated roots give (C1 + C2 x) e^(m x), complex roots alpha ± i beta give e^(alpha x)(C1 cos beta x + C2 sin beta x); the particular integral y_p is found by undetermined coefficients (modify the guess if it duplicates y_c) or variation of parameters (u1' = -y2 R / W, u2' = y1 R / W); the Cauchy-Euler equation uses y = x^m with auxiliary a m(m-1) + b m + c = 0; and the mass-spring-damped system m y'' + c y' + k y = F(t) is classified by the damping ratio zeta = c/(2 sqrt(mk)).",
        sections: [
          {
            number: "2.1",
            title: "Complementary function and the auxiliary equation",
            body: [
              "A linear ODE with constant coefficients has the form a_n y^(n) + a_(n-1) y^(n-1) + ... + a_0 y = R(x), where the a_i are constants. The homogeneous case R(x) = 0 is solved first; its general solution is called the complementary function y_c. Substitute y = e^(m x) to obtain the auxiliary equation a_n m^n + ... + a_1 m + a_0 = 0, a polynomial whose roots dictate the form of y_c. For each distinct real root m, the term e^(m x) appears; for repeated roots of multiplicity r, the terms e^(m x), x e^(m x), ..., x^(r-1) e^(m x) appear, guaranteeing linearly independent solutions.",
              "Complex roots come in conjugate pairs alpha ± i beta. Each pair contributes e^(alpha x) (C1 cos(beta x) + C2 sin(beta x)) to the complementary function, derived by Euler's formula e^((alpha ± i beta) x) = e^(alpha x) (cos(beta x) ± i sin(beta x)) and absorbing the imaginary unit into new constants. Engineers favour this form because it exposes the oscillation frequency beta and the growth/decay rate alpha directly. For a second-order equation the auxiliary equation is quadratic, so its three cases - two real distinct roots, a repeated root, or a complex conjugate pair - exhaust the possibilities.",
              "Worked example. Solve y'' - 4y' + 13y = 0. The auxiliary equation is m^2 - 4m + 13 = 0, with discriminant 16 - 52 = -36, so m = (4 ± 6i)/2 = 2 ± 3i. This is a complex pair with alpha = 2 and beta = 3, giving y_c = e^(2x) (C1 cos 3x + C2 sin 3x). As a check, substitute y = e^(2x) cos 3x and confirm both sides vanish. The three cases - distinct real, repeated, and complex - should be drilled until the auxiliary equation is automatic; RGPV almost always tests this with a 7-mark question.",
            ],
            bullets: [
              "Substitute y = e^(m x) to obtain the auxiliary equation a_n m^n + ... + a_0 = 0.",
              "Distinct real root m: contributes e^(m x) to y_c.",
              "Repeated real root of multiplicity r: contributes e^(m x), x e^(m x), ..., x^(r-1) e^(m x).",
              "Complex pair alpha ± i beta: contributes e^(alpha x) (C1 cos beta x + C2 sin beta x).",
              "y_c always has n linearly independent constants for an nth-order equation.",
            ],
            table: {
              caption: "Building y_c from auxiliary equation roots",
              headers: ["Root of aux eq", "Term in y_c", "Example"],
              rows: [
                ["real distinct m", "C e^(m x)", "m = 3 -> C e^(3x)"],
                ["real repeated, multiplicity 2", "(C1 + C2 x) e^(m x)", "m = 2 twice"],
                ["complex pair alpha ± i beta", "e^(alpha x)(C1 cos beta x + C2 sin beta x)", "2 ± 3i"],
                ["pure imaginary ± i beta", "C1 cos beta x + C2 sin beta x", "± 2i"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Three cases for a quadratic auxiliary equation",
              caption: "The discriminant b^2 - 4ac picks the case and the form of y_c.",
              axes: { x: "Discriminant", y: "Root type" },
              quadrants: [
                { label: "Two real distinct", note: "b^2 - 4ac > 0" },
                { label: "Repeated", note: "b^2 - 4ac = 0" },
                { label: "Complex pair", note: "b^2 - 4ac < 0" },
                { label: "Use case", note: "all three yield y_c" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always write the auxiliary equation, factorise it explicitly, and state the case (distinct / repeated / complex) before writing y_c. Examiners award marks for the case classification, not just the final expression. For repeated roots, listing the x-multiplied terms earns the full multiplicity marks.",
            },
            keyTerms: [
              { term: "Complementary function", definition: "The general solution of the associated homogeneous equation; the backbone of the full solution." },
              { term: "Auxiliary equation", definition: "The polynomial a_n m^n + ... + a_0 = 0 obtained by substituting y = e^(m x) into the homogeneous ODE." },
              { term: "Complex conjugate roots", definition: "A pair alpha ± i beta of the auxiliary equation, producing damped sinusoidal terms in y_c." },
            ],
            examQuestions: [
              {
                q: "Solve y'' - 4y' + 13y = 0 and classify the auxiliary equation's roots.",
                marks: 7,
                outline: [
                  "Write the auxiliary equation m^2 - 4m + 13 = 0.",
                  "Compute the discriminant: 16 - 52 = -36, negative.",
                  "Identify the case as complex conjugate roots.",
                  "Find roots m = (4 ± sqrt(-36))/2 = 2 ± 3i, so alpha = 2, beta = 3.",
                  "Write y_c = e^(2x) (C1 cos 3x + C2 sin 3x).",
                  "Verify by substituting one term, e.g. y = e^(2x) cos 3x.",
                ],
              },
              {
                q: "Write the form of y_c for an equation whose auxiliary equation has roots 2, 2, -1, and 1 ± i.",
                marks: 3,
              },
              {
                q: "State Euler's formula and explain how it converts complex exponential solutions into sine and cosine form.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Particular integral by undetermined coefficients",
            body: [
              "For the non-homogeneous equation a_n y^(n) + ... + a_0 y = R(x), the general solution is y = y_c + y_p, where y_c is the complementary function and y_p is any particular solution. The method of undetermined coefficients constructs y_p by guessing a form matching R(x) with unknown constants, then solving for those constants by substitution. The method works only when R(x) is a polynomial, an exponential, a sine or cosine, or a sum or product of these; for arbitrary R(x) one must resort to variation of parameters.",
              "Each form of R(x) suggests a template: for a polynomial of degree k, guess a general polynomial of degree k; for e^(a x), guess A e^(a x); for sin or cos, guess A cos + B sin; for products like e^(a x) sin(b x), combine the templates multiplicatively. The crucial modification rule applies when a term of the guess duplicates a term of y_c: multiply that part of the guess by x (or x^2 for a double duplication) so the modified guess stays linearly independent of the homogeneous solutions. Failing to apply this rule is the most common student error.",
              "Worked example. Solve y'' + y = e^(2x). The auxiliary equation m^2 + 1 = 0 gives m = ± i, so y_c = C1 cos x + C2 sin x. Since e^(2x) does not appear in y_c, guess y_p = A e^(2x). Substitute: y_p'' = 4 A e^(2x), so 4 A e^(2x) + A e^(2x) = e^(2x), giving 5A = 1 and A = 1/5. The full solution is y = C1 cos x + C2 sin x + (1/5) e^(2x). For y'' + y = sin x, the guess A cos x + B sin x duplicates y_c, so multiply by x: y_p = x (A cos x + B sin x), then substitute to solve for A and B.",
            ],
            bullets: [
              "General solution: y = y_c + y_p, with y_p any single particular solution.",
              "Templates: polynomial -> polynomial; e^(a x) -> A e^(a x); sin/cos -> A cos + B sin.",
              "Modification rule: if a guess term duplicates y_c, multiply by x (or x^2 for a double duplicate).",
              "Apply the method only for R(x) of polynomial/exponential/sinusoidal type.",
              "Solve for the unknown coefficients by substituting y_p into the full ODE and matching powers.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy solves y'' + y = e^(2x) by undetermined coefficients",
              code: `from sympy import symbols, Function, dsolve, Eq, exp
x = symbols('x')
y = Function('y')(x)
# solve y'' + y = e^(2x) by undetermined coefficients
eq = Eq(y.diff(x, 2) + y, exp(2*x))
sol = dsolve(eq, y)
print(sol)
# -> Eq(y(x), C1*sin(x) + C2*cos(x) + exp(2*x)/5)`,
            },
            diagram: {
              kind: "pipeline",
              title: "Undetermined coefficients pipeline",
              caption: "From y_c to a fully assembled general solution.",
              stages: [
                { label: "Solve for y_c", note: "auxiliary equation" },
                { label: "Guess y_p template", note: "match R(x)" },
                { label: "Modify if duplicating y_c", note: "multiply by x" },
                { label: "Substitute and solve coefficients" },
                { label: "Write y = y_c + y_p" },
              ],
            },
            callout: {
              type: "warning",
              title: "The modification rule is where marks vanish",
              body: "If R(x) = sin x and y_c contains sin x, guessing A sin x + B cos x without the x factor yields 0 = sin x on substitution - an impossible equation. Always check the guess against y_c before substituting.",
            },
            keyTerms: [
              { term: "Particular integral", definition: "Any single solution y_p of the non-homogeneous equation; combined with y_c to give the general solution." },
              { term: "Undetermined coefficients", definition: "A method that guesses a form for y_p with unknown constants and solves for them by substitution." },
              { term: "Modification rule", definition: "Multiply the guess by x (or higher power) when it duplicates a complementary-function term." },
            ],
            examQuestions: [
              {
                q: "Solve y'' + y = e^(2x) by the method of undetermined coefficients.",
                marks: 7,
                outline: [
                  "Solve homogeneous: auxiliary m^2 + 1 = 0, m = ± i.",
                  "Write y_c = C1 cos x + C2 sin x.",
                  "Note e^(2x) is not in y_c, so guess y_p = A e^(2x).",
                  "Compute y_p'' = 4 A e^(2x) and substitute: 4A + A = 1.",
                  "Solve A = 1/5.",
                  "Write full solution y = C1 cos x + C2 sin x + (1/5) e^(2x).",
                ],
              },
              {
                q: "Explain why the guess A sin x + B cos x must be modified when solving y'' + y = sin x; give the correct guess.",
                marks: 3,
              },
              {
                q: "State the guess for y_p when R(x) is a polynomial of degree 3 and the equation is second order with constant coefficients.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Variation of parameters",
            body: [
              "Variation of parameters is a general method for finding a particular solution y_p of a linear non-homogeneous ODE once y_c is known. Unlike undetermined coefficients, it works for any continuous R(x). Write y_c = C1 y1 + C2 y2 for a second-order equation, then replace the constants with functions of x: y_p = u1(x) y1 + u2(x) y2. The Wronskian W = y1 y2' - y1' y2 measures the linear independence of y1 and y2; if W = 0 the method fails, indicating y1 and y2 are not a fundamental set.",
              "Impose the condition u1' y1 + u2' y2 = 0 (a clever choice that simplifies the algebra), so that y_p' = u1 y1' + u2 y2'. Substituting y_p into the standard-form equation y'' + p(x) y' + q(x) y = R(x) yields a second condition u1' y1' + u2' y2' = R(x). Solving these two equations gives u1' = -y2 R / W and u2' = y1 R / W. Integrate to recover u1 and u2, then assemble y_p = u1 y1 + u2 y2. The method is general but algebra-heavy, so RGPV reserves it for cases where undetermined coefficients cannot be applied.",
              "Worked example. Solve y'' + y = sec x on (-pi/2, pi/2). The complementary function is y_c = C1 cos x + C2 sin x, with y1 = cos x, y2 = sin x. The Wronskian W = cos x * cos x - (-sin x) * sin x = 1. Then u1' = -y2 R / W = -sin x sec x = -tan x, so u1 = -integral of tan x dx = ln|cos x|. And u2' = y1 R / W = cos x sec x = 1, so u2 = x. Hence y_p = ln|cos x| * cos x + x * sin x, and the general solution is y = C1 cos x + C2 sin x + cos x ln|cos x| + x sin x.",
            ],
            bullets: [
              "Variation of parameters works for any continuous R(x); undetermined coefficients does not.",
              "Replace constants C1, C2 in y_c with functions u1(x), u2(x): y_p = u1 y1 + u2 y2.",
              "Impose u1' y1 + u2' y2 = 0; the substitution then yields u1' y1' + u2' y2' = R.",
              "Wronskian W = y1 y2' - y1' y2; if W = 0 the method fails.",
              "Formulas: u1 = -integral (y2 R / W) dx, u2 = integral (y1 R / W) dx.",
            ],
            table: {
              caption: "Choosing a method for y_p",
              headers: ["Aspect", "Undetermined coefficients", "Variation of parameters"],
              rows: [
                ["Scope of R(x)", "poly/exp/sin/cos only", "any continuous R(x)"],
                ["Setup effort", "guess template", "find y_c, compute W"],
                ["Integration", "none beyond solving constants", "two integrals required"],
                ["RGPV use", "default for simple R(x)", "sec x, tan x, ln x type R(x)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Variation of parameters recipe",
              caption: "Five steps from y_c to the full general solution.",
              steps: [
                { label: "Find y_c = C1 y1 + C2 y2", note: "solve homogeneous" },
                { label: "Compute Wronskian W", note: "must be nonzero" },
                { label: "Set u1' = -y2 R / W, u2' = y1 R / W" },
                { label: "Integrate to find u1, u2" },
                { label: "Assemble y = y_c + u1 y1 + u2 y2" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise the two formulas",
              body: "Memorise u1' = -y2 R / W and u2' = y1 R / W. They reduce the method to mechanical integration and earn all the algebra marks even if one of the integrals resists evaluation in closed form.",
            },
            keyTerms: [
              { term: "Variation of parameters", definition: "A general method for finding y_p by promoting the constants of y_c to functions of x." },
              { term: "Wronskian", definition: "The determinant W = y1 y2' - y1' y2 that tests linear independence of two solutions." },
              { term: "Fundamental set", definition: "A pair of linearly independent solutions whose Wronskian is nonzero everywhere on the interval." },
            ],
            examQuestions: [
              {
                q: "Solve y'' + y = sec x by variation of parameters.",
                marks: 7,
                outline: [
                  "Solve homogeneous: y_c = C1 cos x + C2 sin x.",
                  "Identify y1 = cos x, y2 = sin x and compute W = cos^2 x + sin^2 x = 1.",
                  "Apply formulas u1' = -y2 R / W = -sin x sec x = -tan x.",
                  "Integrate: u1 = ln|cos x|.",
                  "Compute u2' = y1 R / W = cos x sec x = 1, integrate to u2 = x.",
                  "Write y = C1 cos x + C2 sin x + cos x ln|cos x| + x sin x.",
                ],
              },
              {
                q: "State the two conditions used to derive the variation-of-parameters formulas for u1' and u2'.",
                marks: 3,
              },
              {
                q: "Define the Wronskian of two functions y1 and y2 and state what W = 0 implies.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Cauchy-Euler equation",
            body: [
              "A Cauchy-Euler (or equidimensional) equation has the form a_n x^n y^(n) + ... + a_1 x y' + a_0 y = R(x), where each term pairs a power of x with the derivative of matching order. Such equations appear in radial problems with cylindrical or spherical symmetry, where x represents a radius. The substitution x = e^t (or t = ln x) converts the equation into one with constant coefficients because the operator x d/dx transforms into d/dt. Solve the transformed constant-coefficient equation by the standard auxiliary equation, then return via x = e^t.",
              "For the second-order homogeneous case a x^2 y'' + b x y' + c y = 0, substituting y = x^m gives the auxiliary equation a m (m-1) + b m + c = 0, or a m^2 + (b - a) m + c = 0. Three cases mirror the constant-coefficient theory: distinct real roots give y_c = C1 x^(m1) + C2 x^(m2); a repeated root gives y_c = (C1 + C2 ln x) x^m; and complex roots alpha ± i beta give y_c = x^alpha (C1 cos(beta ln x) + C2 sin(beta ln x)). The logarithms and log-trigonometric functions are the fingerprints of Cauchy-Euler solutions.",
              "Worked example. Solve x^2 y'' + 3x y' + y = 0 for x > 0. Substitute y = x^m to obtain m(m-1) + 3m + 1 = 0, i.e. m^2 + 2m + 1 = 0, so (m+1)^2 = 0 and m = -1 (repeated). The complementary function is y_c = (C1 + C2 ln x) x^(-1) = (C1 + C2 ln x) / x. For the non-homogeneous case one typically divides through by x^2 and applies variation of parameters or undetermined coefficients after transforming with x = e^t. RGPV favours the homogeneous Cauchy-Euler problem with repeated or complex roots for 7-mark questions.",
            ],
            bullets: [
              "Cauchy-Euler form: a_n x^n y^(n) + ... + a_0 y = R(x); each term pairs x^k with y^(k).",
              "Substitute y = x^m to get the auxiliary equation a m(m-1) + b m + c = 0 for the second-order case.",
              "Distinct roots: y_c = C1 x^(m1) + C2 x^(m2).",
              "Repeated root: y_c = (C1 + C2 ln x) x^m.",
              "Complex roots alpha ± i beta: y_c = x^alpha (C1 cos(beta ln x) + C2 sin(beta ln x)).",
            ],
            table: {
              caption: "Cauchy-Euler vs constant-coefficient solutions",
              headers: ["Case", "Constant coeff.", "Cauchy-Euler"],
              rows: [
                ["Distinct real m1, m2", "C1 e^(m1 x) + C2 e^(m2 x)", "C1 x^(m1) + C2 x^(m2)"],
                ["Repeated m", "(C1 + C2 x) e^(m x)", "(C1 + C2 ln x) x^m"],
                ["Complex alpha ± i beta", "e^(alpha x)(C1 cos + C2 sin)", "x^alpha (C1 cos(beta ln x) + C2 sin(beta ln x))"],
                ["Trial substitution", "y = e^(m x)", "y = x^m"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Transforming a Cauchy-Euler equation",
              caption: "From variable-coefficient ODE to a solved y_c.",
              layers: [
                { label: "Original: a x^2 y'' + b x y' + c y = 0", note: "variable coefficients" },
                { label: "Substitute y = x^m", note: "trial solution" },
                { label: "Auxiliary: a m(m-1) + b m + c = 0", note: "algebraic equation" },
                { label: "Solve for m, write y_c", note: "powers, logs, log-trig" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "In a Cauchy-Euler problem, write the auxiliary equation in the form a m(m-1) + b m + c = 0 explicitly. Students often drop the m(m-1) factor and solve a m^2 + b m + c = 0 instead, which is wrong and forfeits every mark. Show the substitution y = x^m, y' = m x^(m-1), y'' = m(m-1) x^(m-2) before assembling the auxiliary equation.",
            },
            keyTerms: [
              { term: "Cauchy-Euler equation", definition: "An ODE whose terms pair x^k with the kth derivative, solved by substituting y = x^m." },
              { term: "Equidimensional operator", definition: "The combination x d/dx that becomes d/dt under the substitution x = e^t." },
              { term: "Logarithmic solution term", definition: "The ln x multiplier that arises from a repeated root of the Cauchy-Euler auxiliary equation." },
            ],
            examQuestions: [
              {
                q: "Solve x^2 y'' + 3x y' + y = 0 and classify the auxiliary equation's roots.",
                marks: 7,
                outline: [
                  "Identify the equation as Cauchy-Euler.",
                  "Substitute y = x^m, y' = m x^(m-1), y'' = m(m-1) x^(m-2).",
                  "Substitute into the ODE: x^2 * m(m-1) x^(m-2) + 3x * m x^(m-1) + x^m = 0.",
                  "Simplify by dividing by x^m: m(m-1) + 3m + 1 = 0.",
                  "Factorise: m^2 + 2m + 1 = (m+1)^2 = 0, repeated root m = -1.",
                  "Write y_c = (C1 + C2 ln x) x^(-1) = (C1 + C2 ln x)/x.",
                ],
              },
              {
                q: "Derive the auxiliary equation of a x^2 y'' + b x y' + c y = 0 by substituting y = x^m.",
                marks: 3,
              },
              {
                q: "State the form of y_c for a Cauchy-Euler equation whose auxiliary equation has complex roots alpha ± i beta.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Mass-spring-damped system",
            body: [
              "A mass m attached to a spring of stiffness k and moving through a damper with coefficient c obeys m y'' + c y' + k y = F(t), where y(t) is displacement and F(t) the external force. This single linear ODE with constant coefficients captures an immense range of engineering systems: an RLC circuit (with m -> L, c -> R, k -> 1/C), a building swaying under wind load, a shaft vibrating in a bearing, and an instrument's needle settling. Solving it requires only the auxiliary equation plus a particular integral, but the physical interpretation of the constants determines the regime.",
              "The behaviour is governed by the damping ratio zeta = c / (2 sqrt(m k)). For zeta < 1 the system is underdamped and oscillates with decaying amplitude at the damped frequency omega_d = sqrt(k/m - c^2/(4m^2)); for zeta = 1 it is critically damped and returns to equilibrium in minimum time without oscillating; for zeta > 1 it is overdamped and slowly creeps back without oscillation. The complementary function e^(-alpha t) (C1 cos omega_d t + C2 sin omega_d t) for the underdamped case shows both decay rate alpha = c/(2m) and oscillation frequency omega_d.",
              "Worked example. A 1 kg mass on a spring with k = 16 N/m has a damper with c = 6 Ns/m. The equation is y'' + 6 y' + 16 y = 0. The auxiliary equation m^2 + 6m + 16 = 0 has roots m = -3 ± sqrt(9 - 16) = -3 ± i sqrt(7). With alpha = -3 and omega_d = sqrt(7), the response is y(t) = e^(-3t) (C1 cos(sqrt 7 t) + C2 sin(sqrt 7 t)). Since zeta = 6 / (2 sqrt(1 * 16)) = 6/8 = 0.75 < 1, the system is underdamped: oscillatory decay with time constant 1/3 second and damped period 2 pi / sqrt(7) seconds.",
            ],
            bullets: [
              "Mass-spring-damper: m y'' + c y' + k y = F(t); linear constant-coefficient ODE.",
              "Damping ratio: zeta = c / (2 sqrt(m k)); classifies underdamped, critical, overdamped.",
              "Underdamped (zeta < 1): y_c = e^(-alpha t) (C1 cos omega_d t + C2 sin omega_d t).",
              "Critically damped (zeta = 1): returns to equilibrium fastest without oscillation.",
              "Overdamped (zeta > 1): slow non-oscillatory return to equilibrium.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy solves the damped oscillator and shows the response",
              code: `from sympy import symbols, Function, dsolve, Eq
t = symbols('t')
y = Function('y')(t)
# 1 kg mass, k = 16 N/m, c = 6 Ns/m
eq = Eq(y.diff(t, 2) + 6*y.diff(t) + 16*y, 0)
sol = dsolve(eq, y)
print(sol)
# -> e^(-3t) (C1 cos(sqrt(7) t) + C2 sin(sqrt(7) t))`,
            },
            diagram: {
              kind: "fork",
              title: "Damping regimes from the auxiliary equation",
              caption: "The damping ratio zeta selects one of three response regimes.",
              start: "Solve m^2 + (c/m) m + k/m = 0",
              branches: [
                { label: "zeta < 1: complex roots", outcome: "Underdamped, oscillates with decay", good: true },
                { label: "zeta = 1: repeated root", outcome: "Critically damped, fastest return", good: true },
                { label: "zeta > 1: two real roots", outcome: "Overdamped, slow creep back", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Convert parameters before solving",
              body: "Convert the physical parameters m, c, k into the auxiliary equation coefficients before solving. The damping ratio zeta = c/(2 sqrt(mk)) then predicts the case: less than 1 -> complex roots (underdamped), equal to 1 -> repeated root (critical), greater than 1 -> real distinct roots (overdamped).",
            },
            keyTerms: [
              { term: "Damping ratio zeta", definition: "The ratio c / (2 sqrt(m k)) that classifies a mass-spring system's response regime." },
              { term: "Damped frequency omega_d", definition: "The oscillation rate of an underdamped system, omega_d = sqrt(omega_0^2 - alpha^2)." },
              { term: "Natural frequency omega_0", definition: "The undamped oscillation rate sqrt(k/m) of the mass-spring system." },
            ],
            examQuestions: [
              {
                q: "A 1 kg mass on a spring with k = 16 N/m and damper c = 6 Ns/m obeys y'' + 6 y' + 16 y = 0. Solve and state the damping regime.",
                marks: 7,
                outline: [
                  "Compute damping ratio zeta = 6 / (2 sqrt(1*16)) = 6/8 = 0.75.",
                  "Conclude underdamped since zeta < 1.",
                  "Write auxiliary equation m^2 + 6m + 16 = 0.",
                  "Compute roots m = -3 ± sqrt(9 - 16) = -3 ± i sqrt(7).",
                  "Identify alpha = -3, omega_d = sqrt(7).",
                  "Write y(t) = e^(-3t) (C1 cos(sqrt 7 t) + C2 sin(sqrt 7 t)).",
                ],
              },
              {
                q: "Define the damping ratio and explain how it determines underdamped, critical, and overdamped regimes.",
                marks: 3,
              },
              {
                q: "State the analogies between an RLC circuit and a mass-spring-damper system (m, c, k -> L, R, 1/C).",
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
      title: "Laplace Transforms",
      summary:
        "Definition and properties of the Laplace transform, transforms of derivatives and integrals, the unit step and Dirac delta, the convolution theorem, and the four-step recipe for solving linear ODEs with initial conditions in the s-domain.",
      chapter: {
        number: "03",
        title: "Laplace Transforms",
        intro:
          "Unit III shifts the framework from time-domain calculus to s-domain algebra. The Laplace transform maps a function f(t) to a function F(s), turning differentiation into multiplication by s and convolution into multiplication of transforms. The unit step and Dirac delta model switched and impulsive forcing, and the four-step recipe converts initial-value ODE problems into algebra.",
        inOneBreath:
          "The Laplace transform of f is F(s) = integral_0^infty e^(-st) f(t) dt; linearity, first shift L{e^(at) f(t)} = F(s-a), and multiplication-by-t L{t^n f} = (-1)^n F^(n)(s) extend a basic table; derivative formulas L{f'} = s F - f(0), L{f''} = s^2 F - s f(0) - f'(0) bring down initial conditions; the unit step u(t-a) and Dirac delta delta(t-a) model switching and impulses; the convolution theorem L{f * g} = F G supports inverse transforms; and the four-step recipe (transform, substitute initials, solve for Y, invert) solves linear IVPs in algebra.",
        sections: [
          {
            number: "3.1",
            title: "Definition and properties",
            body: [
              "The Laplace transform of a function f(t) defined for t >= 0 is the integral L{f(t)} = F(s) = integral from 0 to infinity of e^(-s t) f(t) dt, where s is a complex parameter. The transform exists whenever f is piecewise continuous and of exponential order, meaning |f(t)| grows no faster than M e^(a t). The result is a function of s alone, turning calculus in the time domain into algebra in the frequency domain. Standard transforms of common functions - 1, t, e^(a t), cos(at), sin(at) - should be memorised as a table.",
              "Three linearity properties make the transform a tool: L{a f + b g} = a F + b G for constants a, b. The first shifting property L{e^(a t) f(t)} = F(s - a) handles multiplication by an exponential; the second shifting property L{u(t-a) f(t-a)} = e^(-a s) F(s) handles time delays, where u is the unit step. Multiplication by t^n satisfies L{t^n f(t)} = (-1)^n F^(n)(s), an nth derivative of F. These three rules combine to extend a small table of basic transforms into a powerful toolkit.",
              "A worked example. Find L{t sin(2t)}. From the table L{sin(2t)} = 2/(s^2 + 4). Apply multiplication-by-t with n = 1: L{t sin(2t)} = -d/ds (2/(s^2 + 4)). The derivative is 2 * (-2s) / (s^2 + 4)^2 = -4s/(s^2 + 4)^2, so L{t sin(2t)} = -(-4s/(s^2 + 4)^2) = 4s/(s^2 + 4)^2. Combining properties fluently is the daily bread of RGPV Laplace questions, and the multiplication-by-t rule is the most heavily tested property.",
            ],
            bullets: [
              "Definition: L{f(t)} = F(s) = integral from 0 to infinity of e^(-s t) f(t) dt.",
              "Existence: f must be piecewise continuous and of exponential order.",
              "Linearity: L{a f + b g} = a F + b G.",
              "First shift: L{e^(a t) f(t)} = F(s - a).",
              "Multiplication by t^n: L{t^n f(t)} = (-1)^n F^(n)(s).",
            ],
            table: {
              caption: "Basic Laplace pairs to memorise",
              headers: ["f(t)", "F(s)", "Region of convergence"],
              rows: [
                ["1", "1/s", "s > 0"],
                ["t^n (n non-negative integer)", "n! / s^(n+1)", "s > 0"],
                ["e^(a t)", "1/(s - a)", "s > a"],
                ["sin(a t)", "a / (s^2 + a^2)", "s > 0"],
                ["cos(a t)", "s / (s^2 + a^2)", "s > 0"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Applying the multiplication-by-t rule",
              caption: "From f(t) inside t f(t) to the final transform.",
              stages: [
                { label: "Identify f(t) inside t f(t)", note: "extract f(t)" },
                { label: "Look up F(s) from table", note: "e.g. sin at -> a/(s^2+a^2)" },
                { label: "Differentiate F wrt s", note: "n times for t^n" },
                { label: "Multiply by (-1)^n", note: "gives L{t^n f(t)}" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "RGPV loves the multiplication-by-t rule combined with sin or cos. Memorise L{sin at} = a/(s^2 + a^2) and L{cos at} = s/(s^2 + a^2); then L{t sin at} = 2 a s/(s^2 + a^2)^2 and L{t cos at} = (s^2 - a^2)/(s^2 + a^2)^2. Apply the derivative-with-respect-to-s rule to confirm each.",
            },
            keyTerms: [
              { term: "Laplace transform", definition: "The integral operator that maps a time-domain function f(t) to a frequency-domain function F(s)." },
              { term: "Exponential order", definition: "A growth bound |f(t)| <= M e^(a t) sufficient for the Laplace integral to converge." },
              { term: "First shifting property", definition: "The identity L{e^(a t) f(t)} = F(s - a), shifting the transform in the s-domain." },
            ],
            examQuestions: [
              {
                q: "Define the Laplace transform and derive L{t sin(2t)} using the multiplication-by-t property.",
                marks: 7,
                outline: [
                  "Write the definition F(s) = integral_0^infty e^(-s t) f(t) dt.",
                  "State the multiplication-by-t rule: L{t f(t)} = -dF/ds.",
                  "Recall L{sin(2t)} = 2/(s^2 + 4) from the standard table.",
                  "Compute d/ds (2/(s^2 + 4)) = -4s/(s^2 + 4)^2.",
                  "Apply the rule: L{t sin(2t)} = -(-4s/(s^2 + 4)^2) = 4s/(s^2 + 4)^2.",
                  "State conditions for existence (exponential order, piecewise continuity).",
                ],
              },
              {
                q: "State and prove the first shifting property L{e^(a t) f(t)} = F(s - a).",
                marks: 3,
              },
              {
                q: "Write the Laplace transforms of 1, t, e^(a t), sin(at), and cos(at).",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Transforms of derivatives and integrals",
            body: [
              "The Laplace transform converts differentiation into multiplication by s, which is its central engineering value. For a function with continuous derivatives: L{f'(t)} = s F(s) - f(0), L{f''(t)} = s^2 F(s) - s f(0) - f'(0), and in general L{f^(n)(t)} = s^n F(s) - s^(n-1) f(0) - ... - f^(n-1)(0). Each derivative contributes a factor s and brings down one initial condition. The result is that an nth-order linear ODE with initial conditions transforms into an algebraic equation in F(s), solvable without solving the ODE directly.",
              "The transform of an integral is the dual property: L{integral from 0 to t of f(u) du} = F(s) / s. Division by s in the s-domain corresponds to integration in the time domain, just as multiplication by s corresponds to differentiation. Together these two properties convert an integral-differential equation into pure algebra. The initial conditions enter through the derivative formulas only; the integral formula carries no initial-condition terms because the lower limit is fixed at 0.",
              "Worked example. Take L{f'(t)} for f(t) = e^(-3t) with f(0) = 1. Directly, f'(t) = -3 e^(-3t), so L{f'(t)} = -3/(s + 3). By the formula: L{f'(t)} = s F(s) - f(0) = s/(s + 3) - 1 = (s - (s + 3))/(s + 3) = -3/(s + 3). Both agree, confirming the formula. In a typical ODE-solving context, applying the derivative formula converts y'' + 4 y' + 4 y = 0 with y(0) = 1, y'(0) = 0 into (s^2 + 4s + 4) Y(s) = s + 4, giving Y(s) = (s + 4)/(s + 2)^2 = 1/(s + 2) + 2/(s + 2)^2 - ready for inverse transform.",
            ],
            bullets: [
              "L{f'(t)} = s F(s) - f(0).",
              "L{f''(t)} = s^2 F(s) - s f(0) - f'(0).",
              "L{f^(n)(t)} = s^n F(s) - sum of initial-condition terms.",
              "L{integral from 0 to t of f(u) du} = F(s) / s.",
              "Each derivative contributes one factor of s and one initial condition.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy verifies the derivative-of-transform identity",
              code: `from sympy import symbols, Function, laplace_transform, exp
t, s = symbols('t s')
f = exp(-3*t)
F = laplace_transform(f, t, s)[0]
print("F(s) =", F)
# F(s) = 1/(s + 3)
# Verify L{f'(t)} = s F(s) - f(0) = s/(s+3) - 1 = -3/(s+3)
print("s*F - 1 =", s*F - 1)`,
            },
            diagram: {
              kind: "compare",
              title: "Differentiation vs integration under Laplace",
              caption: "Each operation in time has a dual in the s-domain.",
              left: {
                heading: "Differentiation",
                items: [
                  "multiplies by s",
                  "subtracts f(0)",
                  "n-th derivative: s^n factor",
                  "each step adds an initial condition",
                ],
              },
              right: {
                heading: "Integration",
                items: [
                  "divides by s",
                  "no initial condition",
                  "n-fold integration: divide by s^n",
                  "lower limit fixed at 0",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Line up initials before substituting",
              body: "When transforming an ODE, write the initial conditions explicitly next to each derivative before assembling the algebraic equation. A common slip is forgetting y'(0) in the f'' formula, which silently corrupts the entire solution. Lining up s^2 Y - s y(0) - y'(0) with the actual numbers avoids this.",
            },
            keyTerms: [
              { term: "Transform of a derivative", definition: "The identity L{f'(t)} = s F(s) - f(0), turning differentiation into multiplication by s." },
              { term: "Initial-condition term", definition: "The subtracted value s^(n-1-k) f^(k)(0) that accompanies each derivative of order n." },
              { term: "Transform of an integral", definition: "The identity L{integral_0^t f(u) du} = F(s)/s, the dual of the derivative rule." },
            ],
            examQuestions: [
              {
                q: "State the Laplace transform of f''(t) and use it to convert y'' + 4 y' + 4 y = 0, y(0) = 1, y'(0) = 0 into an algebraic equation for Y(s); solve for Y(s).",
                marks: 7,
                outline: [
                  "State L{y''} = s^2 Y - s y(0) - y'(0) and L{y'} = s Y - y(0).",
                  "Substitute initial conditions: L{y''} = s^2 Y - s, L{y'} = s Y - 1.",
                  "Assemble: (s^2 Y - s) + 4 (s Y - 1) + 4 Y = 0.",
                  "Collect: (s^2 + 4s + 4) Y = s + 4.",
                  "Solve: Y(s) = (s + 4) / (s + 2)^2.",
                  "Decompose as Y(s) = 1/(s + 2) + 2/(s + 2)^2 ready for inversion.",
                ],
              },
              {
                q: "Derive L{f'(t)} = s F(s) - f(0) from the definition of the Laplace transform.",
                marks: 3,
              },
              {
                q: "State the formula for L{integral from 0 to t of f(u) du} and one application.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Unit step and Dirac delta",
            body: [
              "The unit step function u(t - a) is 0 for t < a and 1 for t >= a; it switches on a function at time t = a. Its Laplace transform is L{u(t - a)} = e^(-a s) / s for a >= 0, and more generally L{u(t - a) f(t - a)} = e^(-a s) F(s), the second shifting theorem. The unit step models sudden switches in engineering systems: a voltage source applied at t = a, a piecewise-defined forcing function, or a square pulse. Combining two unit steps produces a rectangular pulse of specified width and height.",
              "The Dirac delta function delta(t - a) is an idealised impulse concentrated entirely at t = a; it is zero everywhere except at t = a and integrates to 1 over any interval containing a. It is the derivative of the unit step in a distributional sense. Its key property is the sifting integral: integral from -infinity to infinity of f(t) delta(t - a) dt = f(a). The Laplace transform is L{delta(t - a)} = e^(-a s) for a >= 0; for the impulse at the origin, L{delta(t)} = 1, the simplest possible transform.",
              "A worked example. Find the response of a system with transfer function H(s) = 1/(s^2 + 1) to an impulse at t = 0. The output transform is Y(s) = H(s) * L{delta(t)} = 1/(s^2 + 1) * 1 = 1/(s^2 + 1), whose inverse Laplace transform is y(t) = sin t. An impulse at t = a instead would give Y(s) = e^(-a s)/(s^2 + 1), so y(t) = u(t - a) sin(t - a) by the second shifting theorem. The impulse response is the system's natural behaviour revealed in pure form, a central concept in control theory.",
            ],
            bullets: [
              "Unit step u(t - a): 0 for t < a, 1 for t >= a; models sudden switching.",
              "Second shifting theorem: L{u(t - a) f(t - a)} = e^(-a s) F(s).",
              "Dirac delta delta(t - a): zero except at t = a; integrates to 1.",
              "Sifting property: integral of f(t) delta(t - a) dt = f(a).",
              "Laplace transforms: L{u(t-a)} = e^(-a s)/s, L{delta(t-a)} = e^(-a s).",
            ],
            table: {
              caption: "Transform pairs for switched and impulsive functions",
              headers: ["f(t)", "F(s)", "Use"],
              rows: [
                ["u(t - a)", "e^(-a s)/s", "delayed switch-on"],
                ["u(t - a) f(t - a)", "e^(-a s) F(s)", "second shifting theorem"],
                ["delta(t - a)", "e^(-a s)", "impulse at t = a"],
                ["delta(t)", "1", "impulse at origin"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Modelling a piecewise forcing function",
              caption: "Express any piecewise input using unit step functions.",
              steps: [
                { label: "Identify switch points", note: "t = a, t = b, ..." },
                { label: "Write f(t) using u(t - a)", note: "sum of shifted pieces" },
                { label: "Apply second shifting theorem", note: "e^(-a s) F(s)" },
                { label: "Combine transforms algebraically" },
              ],
            },
            callout: {
              type: "warning",
              title: "Treat the delta as a distribution",
              body: "The Dirac delta is not a function in the elementary sense - its value at t = a is not finite. Treat it as a distribution: state its defining properties (zero off a, integral 1, sifting) and apply L{delta(t - a)} = e^(-a s). Avoid writing delta(0) = infinity; examiners prefer the rigorous distributional framing.",
            },
            keyTerms: [
              { term: "Unit step function", definition: "A function that is 0 before t = a and 1 from t = a onward, modelling an abrupt switch." },
              { term: "Dirac delta function", definition: "An idealised impulse at t = a that is zero elsewhere and integrates to 1, the derivative of the unit step." },
              { term: "Sifting property", definition: "The integral identity that extracts f(a) when f is convolved with delta(t - a)." },
            ],
            examQuestions: [
              {
                q: "Define the unit step and Dirac delta functions; derive their Laplace transforms and state the sifting property.",
                marks: 7,
                outline: [
                  "Define u(t - a) as 0 for t < a and 1 for t >= a.",
                  "Derive L{u(t - a)} = integral from a to infinity of e^(-s t) dt = e^(-a s)/s.",
                  "Define delta(t - a) as the derivative of u(t - a) with integral 1.",
                  "State the sifting property: integral f(t) delta(t - a) dt = f(a).",
                  "Use integration by parts or limiting argument to derive L{delta(t - a)} = e^(-a s).",
                  "Note L{delta(t)} = 1 and the second shifting theorem L{u(t-a) f(t-a)} = e^(-a s) F(s).",
                ],
              },
              {
                q: "Express the rectangular pulse of height 1 from t = 1 to t = 3 using unit step functions and find its Laplace transform.",
                marks: 3,
              },
              {
                q: "State the sifting property of the Dirac delta and one physical interpretation.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Convolution theorem",
            body: [
              "The convolution of two functions f and g is the integral (f * g)(t) = integral from 0 to t of f(u) g(t - u) du. It blends one function with a reversed and shifted copy of the other; commutativity f * g = g * f follows by the substitution v = t - u. Convolution appears whenever a system's response to an input is built by superposition - a linear time-invariant system's output to an arbitrary input is the input convolved with the impulse response. The operation generalises the sum of products at a single instant into a weighted history.",
              "The convolution theorem states L{f * g} = F(s) G(s): convolution in time becomes multiplication in the s-domain. Equivalently, L^(-1){F(s) G(s)} = (f * g)(t), giving a powerful inverse-transform technique. When a product F(s) G(s) cannot be split by partial fractions, identifying F(s) and G(s) as known transforms and computing their convolution in time yields the inverse. The theorem also underpins transfer function multiplication: cascaded systems have transfer functions that multiply, equivalent to impulse responses that convolve.",
              "Worked example. Find L^(-1){1 / ((s + 1)(s + 2))} by convolution. Take F(s) = 1/(s + 1) and G(s) = 1/(s + 2), so f(t) = e^(-t) and g(t) = e^(-2t). The convolution is integral from 0 to t of e^(-u) e^(-2(t - u)) du = e^(-2t) integral from 0 to t of e^u du = e^(-2t) (e^t - 1) = e^(-t) - e^(-2t). As a check, partial fractions give 1/((s+1)(s+2)) = 1/(s+1) - 1/(s+2), whose inverse is e^(-t) - e^(-2t) - matching the convolution result exactly.",
            ],
            bullets: [
              "Convolution: (f * g)(t) = integral from 0 to t of f(u) g(t - u) du.",
              "Commutativity: f * g = g * f.",
              "Convolution theorem: L{f * g} = F(s) G(s).",
              "Inverse form: L^(-1){F(s) G(s)} = (f * g)(t).",
              "Use when partial fractions are impractical or when the input is arbitrary.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy evaluates a convolution integral directly",
              code: `from sympy import symbols, exp, integrate, simplify
t, u = symbols('t u')
f = exp(-u)
g = exp(-2*(t - u))
# convolution integral_0^t f(u) g(t-u) du
conv = integrate(f * g, (u, 0, t))
print(simplify(conv))
# -> exp(-t) - exp(-2*t)`,
            },
            diagram: {
              kind: "cycle",
              title: "Convolution workflow",
              caption: "Four rotating steps for any product F(s) G(s).",
              steps: [
                { label: "Spot F(s) G(s) product", note: "resists partial fractions" },
                { label: "Look up f(t) and g(t)" },
                { label: "Write convolution integral", note: "integral_0^t f(u) g(t-u) du" },
                { label: "Evaluate and simplify" },
              ],
            },
            callout: {
              type: "tip",
              title: "Reach for convolution when partial fractions stall",
              body: "When facing an inverse Laplace transform of a product F(s) G(s) that resists partial fractions, immediately think convolution. Identify F and G as known transforms, write the convolution integral, and evaluate. The method is slower than partial fractions but always works for known transforms.",
            },
            keyTerms: [
              { term: "Convolution", definition: "The integral (f * g)(t) = integral_0^t f(u) g(t - u) du, a blended history of two functions." },
              { term: "Convolution theorem", definition: "The identity L{f * g} = F(s) G(s) linking time convolution to s-domain multiplication." },
              { term: "Impulse response", definition: "The system output to a Dirac delta input; convolving it with any input yields the system output." },
            ],
            examQuestions: [
              {
                q: "State and prove the convolution theorem; use it to find L^(-1){1 / ((s + 1)(s + 2))}.",
                marks: 7,
                outline: [
                  "Define convolution (f * g)(t) = integral_0^t f(u) g(t - u) du.",
                  "State the theorem L{f * g} = F(s) G(s).",
                  "Sketch the proof: swap order of integration in L{(f*g)(t)} over the triangular region 0 <= u <= t.",
                  "Identify F(s) = 1/(s + 1), G(s) = 1/(s + 2), so f(t) = e^(-t), g(t) = e^(-2t).",
                  "Compute (f * g)(t) = integral_0^t e^(-u) e^(-2(t-u)) du = e^(-2t) (e^t - 1).",
                  "Simplify to e^(-t) - e^(-2t) and verify with partial fractions.",
                ],
              },
              {
                q: "Prove that convolution is commutative: f * g = g * f.",
                marks: 3,
              },
              {
                q: "Define the impulse response of a linear time-invariant system and its role in convolution.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Solving ODEs with Laplace transforms",
            body: [
              "The Laplace transform method solves linear ODEs with constant coefficients and given initial conditions in a uniform four-step recipe: take the Laplace transform of both sides, apply the derivative formulas to bring down s and initial conditions, solve the resulting algebraic equation for Y(s), and take the inverse Laplace transform by partial fractions or convolution. The method's strength is that initial conditions enter naturally through the derivative formulas, eliminating the need to determine constants after the fact.",
              "Step 3 produces Y(s) = (transform of forcing function + initial-condition terms) / (characteristic polynomial in s). The denominator is exactly the auxiliary-equation polynomial of Section 2.1 evaluated at s. The numerator contains the initial conditions and the Laplace transform of the right-hand side. Partial fraction decomposition splits Y(s) into simpler terms whose inverses are in the standard table. For discontinuous forcing - unit steps, pulses, impulses - the method shines, since the transforms of those functions are simple exponentials.",
              "Worked example. Solve y'' + 4 y = sin(2t), y(0) = 0, y'(0) = 0. Transform: s^2 Y - s y(0) - y'(0) + 4 Y = 2/(s^2 + 4), giving Y(s) = 2 / ((s^2 + 4)^2). Using the identity L{(sin 2t - 2t cos 2t)/8} = 2/(s^2 + 4)^2 (derivable via multiplication-by-t or convolution), the inverse is y(t) = (sin 2t - 2t cos 2t) / 8. This shows resonance: the forcing frequency matches the natural frequency 2, and the t cos(2t) term grows linearly - the telltale signature of undamped resonance in the response.",
            ],
            bullets: [
              "Step 1: Laplace-transform both sides of the ODE.",
              "Step 2: Apply derivative formulas; bring down s and initial conditions.",
              "Step 3: Solve algebraically for Y(s) - characteristic polynomial in denominator.",
              "Step 4: Invert Y(s) by partial fractions or convolution.",
              "Initial conditions enter naturally; no need to solve for constants later.",
            ],
            table: {
              caption: "Classical vs Laplace method for solving linear ODEs",
              headers: ["Aspect", "Classical method", "Laplace method"],
              rows: [
                ["Initial conditions", "applied after solving", "enter via derivative formulas"],
                ["Discontinuous forcing", "tedious piecewise work", "handles via unit step and delta"],
                ["Tool", "auxiliary equation + y_p", "algebra in s-domain"],
                ["Best for", "general solutions", "IVPs with discontinuous forcing"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Laplace solve pipeline",
              caption: "Four stages turn an IVP into an inverted solution.",
              stages: [
                { label: "Transform both sides", note: "apply derivative rules" },
                { label: "Solve for Y(s)", note: "algebra in s-domain" },
                { label: "Partial fractions / convolution", note: "decompose" },
                { label: "Inverse-transform", note: "use standard table" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The Laplace method is RGPV's preferred way to solve ODEs with initial conditions because it packages the initial data into the algebra. Memorise the four steps and write each step explicitly. For a 7-mark problem, four lines of algebra plus a partial-fraction decomposition earn the full marks even if one coefficient slips.",
            },
            keyTerms: [
              { term: "Laplace method", definition: "A four-step recipe for solving linear ODEs with initial conditions using s-domain algebra." },
              { term: "Characteristic polynomial", definition: "The polynomial in s (from the homogeneous part) that forms the denominator of Y(s)." },
              { term: "Resonance term", definition: "A term proportional to t cos or t sin that grows linearly, arising when forcing frequency matches natural frequency." },
            ],
            examQuestions: [
              {
                q: "Solve y'' + 4 y = sin(2t), y(0) = 0, y'(0) = 0 by the Laplace transform method.",
                marks: 7,
                outline: [
                  "Apply L to both sides: s^2 Y - s y(0) - y'(0) + 4 Y = 2/(s^2 + 4).",
                  "Substitute initial conditions: (s^2 + 4) Y = 2/(s^2 + 4).",
                  "Solve for Y(s) = 2 / (s^2 + 4)^2.",
                  "Use the identity L{(sin 2t - 2t cos 2t)/8} = 2/(s^2 + 4)^2 (derive via multiplication-by-t or convolution).",
                  "Invert: y(t) = (sin 2t - 2t cos 2t) / 8.",
                  "Note the resonance term t cos 2t growing linearly because forcing matches natural frequency 2.",
                ],
              },
              {
                q: "Explain why the Laplace method is preferred for solving ODEs with initial conditions.",
                marks: 3,
              },
              {
                q: "State the role of partial fractions in the final step of the Laplace method.",
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
      title: "Series Solutions and Special Functions",
      summary:
        "Power series about an ordinary point with recurrence relations, the Frobenius method and its three indicial-equation cases, the Legendre equation with Rodrigues' formula and orthogonality, the Bessel equation with first and second kind functions, and a brief on orthogonality of special functions.",
      chapter: {
        number: "04",
        title: "Series Solutions and Special Functions",
        intro:
          "Unit IV enters territory where the auxiliary equation no longer suffices. When the coefficients of y'' + P y' + Q y = 0 are not analytic, one seeks a series solution. Power series work at ordinary points; Frobenius generalises to regular singular points via an indicial equation. Legendre and Bessel equations give rise to the special functions of mathematical physics, and their orthogonality relations underpin Fourier-type expansions.",
        inOneBreath:
          "A point x0 is ordinary if P and Q are analytic there; substitute y = sum a_n (x-x0)^n, equate coefficients, derive a recurrence, and two free constants give two independent series solutions; a regular singular point (where (x-x0) P and (x-x0)^2 Q are analytic) requires Frobenius with trial y = (x-x0)^r sum a_n (x-x0)^n and an indicial equation in r; the three cases (non-integer, repeated, integer difference) govern the second solution's logarithmic structure; the Legendre equation produces polynomials P_n with Rodrigues' formula; the Bessel equation produces J_v and Y_v; and orthogonality relations support Fourier-Legendre and Fourier-Bessel expansions.",
        sections: [
          {
            number: "4.1",
            title: "Power series about an ordinary point",
            body: [
              "When a linear second-order ODE y'' + P(x) y' + Q(x) y = 0 has coefficients P and Q that are not analytic at a point x0, the substitution y = e^(m x) of Chapter 2 fails. The series solution method instead assumes y = sum from n=0 to infinity of a_n (x - x0)^n and substitutes into the ODE, equating coefficients of like powers of (x - x0). A point x0 is ordinary if P and Q are analytic there; otherwise it is a singular point. At an ordinary point, the series converges in some neighbourhood of x0 and yields two linearly independent solutions.",
              "The substitution procedure is mechanical. Write y = sum a_n (x - x0)^n, y' = sum n a_n (x - x0)^(n-1), y'' = sum n(n-1) a_n (x - x0)^(n-2). Substitute these into the ODE, shift indices so all sums run over the same power of (x - x0), and equate the coefficient of each power to zero. This yields a recurrence relation that expresses a_n in terms of earlier coefficients. Two initial coefficients a_0 and a_1 remain free, generating two linearly independent solutions: one even-style and one odd-style when the ODE is symmetric.",
              "Worked example. Solve y'' + x y = 0 about x0 = 0 (the Airy equation, up to sign). Since P = 0 and Q = x are analytic everywhere, x0 = 0 is ordinary. Substitute y = sum a_n x^n and y'' = sum n(n-1) a_n x^(n-2). The ODE becomes sum n(n-1) a_n x^(n-2) + x sum a_n x^n = 0, i.e. sum (n+2)(n+1) a_(n+2) x^n + sum a_n x^(n+1) = 0. Shifting indices and equating gives the recurrence a_(n+2) = -a_(n-1) / ((n+2)(n+1)) for n >= 1, with a_2 = 0. The free coefficients a_0, a_1 generate the two independent series.",
            ],
            bullets: [
              "Ordinary point x0: P and Q are analytic at x0; series solution converges nearby.",
              "Trial solution: y = sum a_n (x - x0)^n; substitute and equate coefficients.",
              "Recurrence relation: expresses a_n in terms of earlier a_k, with a_0 and a_1 free.",
              "Two free coefficients yield two linearly independent solutions.",
              "Singular point: at least one of P, Q is not analytic; needs the Frobenius method.",
            ],
            table: {
              caption: "Classifying points for y'' + P y' + Q y = 0",
              headers: ["Point type", "Condition", "Method"],
              rows: [
                ["Ordinary", "P and Q analytic at x0", "power series sum a_n (x - x0)^n"],
                ["Regular singular", "(x - x0) P and (x - x0)^2 Q analytic", "Frobenius series"],
                ["Irregular singular", "neither condition holds", "advanced methods"],
                ["Example ordinary", "x0 = 0 for y'' + x y = 0", "power series"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Power-series solution at an ordinary point",
              caption: "From verifying analyticity to writing the first terms.",
              steps: [
                { label: "Verify x0 is ordinary", note: "P, Q analytic" },
                { label: "Substitute y = sum a_n (x - x0)^n" },
                { label: "Shift indices, equate coefficients" },
                { label: "Derive recurrence for a_n" },
                { label: "Compute a_2, a_3, ... and write the series" },
              ],
            },
            callout: {
              type: "tip",
              title: "The recurrence is everything",
              body: "Once you have the recurrence, the coefficients follow mechanically. Always write the recurrence clearly with the index range, then compute the first few coefficients (a_2, a_3, a_4) to show the pattern; examiners reward this concrete work even if the closed form is not requested.",
            },
            keyTerms: [
              { term: "Ordinary point", definition: "A point x0 at which both P and Q are analytic, allowing a power-series solution about x0." },
              { term: "Recurrence relation", definition: "The relation between coefficients a_n and earlier a_k obtained by equating powers of (x - x0)." },
              { term: "Power series solution", definition: "A solution of the form sum a_n (x - x0)^n obtained by substituting into the ODE." },
            ],
            examQuestions: [
              {
                q: "Define ordinary and singular points; solve y'' + x y = 0 by the power-series method about x = 0 and write the recurrence.",
                marks: 7,
                outline: [
                  "Define ordinary point: P and Q analytic at x0.",
                  "Identify P = 0, Q = x as analytic at x = 0, so 0 is ordinary.",
                  "Substitute y = sum a_n x^n and y'' = sum n(n-1) a_n x^(n-2) into the ODE.",
                  "Re-index sums to common power x^n and equate coefficients.",
                  "Derive recurrence a_(n+2) = -a_(n-1) / ((n+2)(n+1)) for n >= 1, with a_2 = 0.",
                  "Write the first few coefficients in terms of a_0 and a_1 to expose two independent solutions.",
                ],
              },
              {
                q: "Define ordinary point and singular point of y'' + P(x) y' + Q(x) y = 0 with one example each.",
                marks: 3,
              },
              {
                q: "State the form of the trial power-series solution about an ordinary point x0.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Frobenius method",
            body: [
              "A point x0 is a regular singular point of y'' + P(x) y' + Q(x) y = 0 if (x - x0) P(x) and (x - x0)^2 Q(x) are both analytic at x0; otherwise the singularity is irregular. At a regular singular point the power-series method fails because the recurrence breaks down, but a slight generalisation - the Frobenius method - works. The trial solution is y = (x - x0)^r sum from n=0 to infinity of a_n (x - x0)^n, where r is an unknown real or complex number called the index. Substituting yields an indicial equation for r alongside a recurrence for a_n.",
              "The indicial equation is a quadratic in r obtained from the lowest power of (x - x0) after substitution. Its two roots r1 and r2 (assume r1 >= r2 in real part) determine the solution form. If r1 - r2 is not an integer, two independent Frobenius solutions exist with indices r1 and r2. If r1 = r2, only one solution comes directly from the trial form; the second involves a logarithmic term ln(x - x0). If r1 - r2 is a positive integer, the second solution may also contain a logarithm. The three cases exhaust the possibilities.",
              "Worked example (sketch). The Bessel equation x^2 y'' + x y' + (x^2 - v^2) y = 0 has a regular singular point at x = 0 because x P = 1 and x^2 Q = x^2 - v^2 are analytic. The Frobenius trial y = x^r sum a_n x^n leads to the indicial equation r^2 - v^2 = 0, so r = ± v. For non-integer v, two independent series solutions J_v(x) and J_(-v)(x) emerge. For integer v the second solution acquires a logarithmic term and is denoted Y_v(x), the Bessel function of the second kind.",
            ],
            bullets: [
              "Regular singular point: (x - x0) P and (x - x0)^2 Q both analytic at x0.",
              "Frobenius trial: y = (x - x0)^r sum a_n (x - x0)^n.",
              "Indicial equation: quadratic in r from the lowest-power coefficient.",
              "Three cases: r1 - r2 not integer (two solutions); r1 = r2 (log term); r1 - r2 integer (possible log term).",
              "Bessel and Legendre equations have regular singular points and are solved by Frobenius.",
            ],
            table: {
              caption: "Solution form by root structure of the indicial equation",
              headers: ["Root structure", "Number of solutions", "Second solution"],
              rows: [
                ["r1 - r2 not integer", "two direct Frobenius series", "sum with index r2"],
                ["r1 = r2 (repeated)", "one direct, one with log", "logarithmic term ln(x - x0)"],
                ["r1 - r2 positive integer", "one direct, one may have log", "check recurrence for breakdown"],
                ["r1 - r2 zero or integer", "Frobenius + log", "Y_v type in Bessel"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Three cases from the indicial equation",
              caption: "The difference of roots r1 - r2 selects the second solution's form.",
              start: "Solve indicial equation r^2 + ... = 0",
              branches: [
                { label: "r1 - r2 not integer", outcome: "two independent Frobenius series", good: true },
                { label: "r1 = r2 (repeated)", outcome: "second solution has ln(x - x0)", good: true },
                { label: "r1 - r2 positive integer", outcome: "second solution may have a log term", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The indicial equation and its three cases are an RGPV favourite. Always write the indicial equation explicitly and classify the case (distinct non-integer, repeated, integer difference) before writing the solution form. The logarithmic second solution for repeated or integer-difference roots earns two extra marks if mentioned.",
            },
            keyTerms: [
              { term: "Regular singular point", definition: "A singular point x0 at which (x - x0) P and (x - x0)^2 Q are analytic." },
              { term: "Indicial equation", definition: "The quadratic in r obtained from the lowest-power coefficient in the Frobenius substitution." },
              { term: "Index r", definition: "The exponent in the Frobenius trial solution (x - x0)^r; its values determine the solution structure." },
            ],
            examQuestions: [
              {
                q: "Define regular singular point; explain the Frobenius method and its three cases with reference to the indicial equation.",
                marks: 7,
                outline: [
                  "Define regular singular point: (x - x0) P and (x - x0)^2 Q analytic at x0.",
                  "State the Frobenius trial y = (x - x0)^r sum a_n (x - x0)^n.",
                  "Explain that substituting yields an indicial equation (quadratic in r) and a recurrence.",
                  "Describe case 1: r1 - r2 not an integer - two independent Frobenius series.",
                  "Describe case 2: r1 = r2 - second solution contains ln(x - x0).",
                  "Describe case 3: r1 - r2 a positive integer - second solution may contain a logarithmic term.",
                  "Mention Bessel's equation as an example with a regular singular point at 0.",
                ],
              },
              {
                q: "State the conditions under which a point x0 is a regular singular point of y'' + P y' + Q y = 0.",
                marks: 3,
              },
              {
                q: "Write the form of the Frobenius trial solution and identify the index r.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Legendre equation and Rodrigues' formula",
            body: [
              "The Legendre equation is (1 - x^2) y'' - 2x y' + n(n + 1) y = 0, where n is a real parameter. It arises from Laplace's equation in spherical coordinates when the solution is axially symmetric. The points x = ±1 are regular singular, but x0 = 0 is ordinary, so a power-series solution about 0 exists. For non-negative integer n, the solution becomes a polynomial of degree n called the Legendre polynomial P_n(x). The first few are P_0(x) = 1, P_1(x) = x, P_2(x) = (3x^2 - 1)/2, P_3(x) = (5x^3 - 3x)/2, P_4(x) = (35x^4 - 30x^2 + 3)/8.",
              "Rodrigues' formula gives a compact closed form for Legendre polynomials: P_n(x) = (1 / (2^n n!)) d^n/dx^n (x^2 - 1)^n. It generates all P_n from a single differentiating operation on the simple polynomial (x^2 - 1)^n. From Rodrigues' formula follow the orthogonality relation integral from -1 to 1 of P_m(x) P_n(x) dx = 0 for m not equal to n, and the normalisation integral from -1 to 1 of (P_n(x))^2 dx = 2/(2n + 1). Orthogonality makes Legendre polynomials the natural basis for expanding functions on [-1, 1].",
              "Recurrence relations connect consecutive polynomials, the most useful being (n + 1) P_(n+1)(x) = (2n + 1) x P_n(x) - n P_(n-1)(x), which generates P_(n+1) from P_n and P_(n-1). Bonnet's recurrence, as it is called, lets you compute P_n from the seeds P_0 = 1 and P_1 = x without differentiating high-order polynomials. Legendre polynomials appear in potential theory, electrostatics of a charged sphere, and the multipole expansion of a distant field. RGPV asks for the equation, the first three polynomials, and Rodrigues' formula.",
            ],
            bullets: [
              "Legendre equation: (1 - x^2) y'' - 2x y' + n(n+1) y = 0.",
              "Legendre polynomials P_n arise for non-negative integer n: P_0 = 1, P_1 = x, P_2 = (3x^2 - 1)/2.",
              "Rodrigues' formula: P_n(x) = (1/(2^n n!)) d^n/dx^n (x^2 - 1)^n.",
              "Orthogonality: integral from -1 to 1 of P_m P_n dx = 0 for m != n; norm = 2/(2n + 1).",
              "Bonnet's recurrence: (n + 1) P_(n+1) = (2n + 1) x P_n - n P_(n-1).",
            ],
            table: {
              caption: "First five Legendre polynomials",
              headers: ["n", "P_n(x)", "Degree"],
              rows: [
                ["0", "1", "0"],
                ["1", "x", "1"],
                ["2", "(3x^2 - 1)/2", "2"],
                ["3", "(5x^3 - 3x)/2", "3"],
                ["4", "(35x^4 - 30x^2 + 3)/8", "4"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Building Legendre polynomials",
              caption: "From two seeds to a full orthogonal basis.",
              tiers: [
                { label: "P_0 = 1, P_1 = x", note: "seeds" },
                { label: "Rodrigues' formula", note: "closed form generator" },
                { label: "Bonnet's recurrence", note: "P_(n+1) from P_n and P_(n-1)" },
                { label: "Orthogonality on [-1, 1]", note: "basis for expansions" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Memorise P_0, P_1, P_2, P_3, P_4 - five lines, two marks. Also memorise Rodrigues' formula and Bonnet's recurrence; they are the three things RGPV asks about Legendre polynomials. Stating the orthogonality relation adds a fourth easy mark.",
            },
            keyTerms: [
              { term: "Legendre polynomial", definition: "A polynomial solution P_n(x) of the Legendre equation for non-negative integer n." },
              { term: "Rodrigues' formula", definition: "The closed form P_n(x) = (1/(2^n n!)) d^n/dx^n (x^2 - 1)^n generating all Legendre polynomials." },
              { term: "Orthogonality relation", definition: "The integral identity showing distinct Legendre polynomials are orthogonal on [-1, 1]." },
            ],
            examQuestions: [
              {
                q: "State the Legendre equation; derive P_2(x) using Rodrigues' formula and state the orthogonality relation.",
                marks: 7,
                outline: [
                  "State the Legendre equation: (1 - x^2) y'' - 2x y' + n(n+1) y = 0.",
                  "Write Rodrigues' formula P_n(x) = (1/(2^n n!)) d^n/dx^n (x^2 - 1)^n.",
                  "For n = 2: P_2(x) = (1/(4 * 2!)) d^2/dx^2 (x^2 - 1)^2 = (1/8) d^2/dx^2 (x^4 - 2x^2 + 1).",
                  "Compute first derivative: 4x^3 - 4x; second derivative: 12x^2 - 4.",
                  "Multiply: P_2(x) = (1/8)(12x^2 - 4) = (3x^2 - 1)/2.",
                  "State orthogonality: integral from -1 to 1 of P_m P_n dx = 0 for m != n, and 2/(2n+1) for m = n.",
                ],
              },
              {
                q: "State Bonnet's recurrence relation and use it to compute P_3(x) from P_2 and P_1.",
                marks: 3,
              },
              {
                q: "Write Rodrigues' formula for Legendre polynomials and the values of P_0, P_1, P_2.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Bessel equation and functions",
            body: [
              "The Bessel equation of order v is x^2 y'' + x y' + (x^2 - v^2) y = 0. It arises from Laplace's equation in cylindrical coordinates, in vibration of a circular membrane, and in heat conduction in a long cylinder. The point x = 0 is a regular singular point, so the Frobenius method applies. For non-integer v the two linearly independent solutions are J_v(x) and J_(-v)(x), the Bessel functions of the first kind of order v and -v. Each is an infinite series with terms alternating in sign and involving (x/2)^(v + 2k) / (k! Gamma(k + v + 1)).",
              "For integer v = n, J_(-n)(x) = (-1)^n J_n(x), so the two first-kind solutions are no longer independent. The second independent solution is the Bessel function of the second kind Y_n(x), also called the Neumann function, which contains a logarithmic term and diverges at x = 0. The general solution is then y = C1 J_n(x) + C2 Y_n(x). The zeros of J_n(x) - there are infinitely many, all real - are the natural frequencies of a circular drumhead, an application that ties the abstract series to a tangible physical tone.",
              "Bessel functions satisfy a wealth of recurrences: J_(v-1)(x) + J_(v+1)(x) = (2v/x) J_v(x) and J_(v-1)(x) - J_(v+1)(x) = 2 J_v'(x). They are orthogonal on [0, a] with respect to the weight x: integral from 0 to a of x J_v(alpha_m x) J_v(alpha_n x) dx = 0 for m not equal to n, where alpha_m are the positive zeros of J_v. This orthogonality supports Fourier-Bessel series expansions for functions on a disk. RGPV expects students to write the equation, identify J_v as a Frobenius solution, and state the recurrence.",
            ],
            bullets: [
              "Bessel equation: x^2 y'' + x y' + (x^2 - v^2) y = 0; regular singular at 0.",
              "Bessel functions of first kind J_v(x) and J_(-v)(x) for non-integer v.",
              "For integer v = n, second solution is Y_n(x) (Neumann function) with a logarithmic term.",
              "Recurrence: J_(v-1) + J_(v+1) = (2v/x) J_v.",
              "Orthogonality on [0, a] with weight x supports Fourier-Bessel series.",
            ],
            table: {
              caption: "Solution structure of the Bessel equation",
              headers: ["Order v", "Independent solutions", "Behaviour at 0"],
              rows: [
                ["non-integer", "J_v(x), J_(-v)(x)", "both finite for v > 0"],
                ["integer n", "J_n(x), Y_n(x)", "Y_n diverges logarithmically"],
                ["v = 0", "J_0, Y_0", "J_0(0) = 1, Y_0 diverges"],
                ["half-integer", "J_(1/2), J_(-1/2) via sin/cos", "elementary forms"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "From Bessel equation to its solutions",
              caption: "From equation to indicial roots to first and second kind functions.",
              layers: [
                { label: "Bessel equation: x^2 y'' + x y' + (x^2 - v^2) y = 0", note: "regular singular at 0" },
                { label: "Frobenius trial y = x^r sum a_n x^n", note: "indicial r = ± v" },
                { label: "First kind J_v(x), J_(-v)(x)", note: "non-integer v: independent" },
                { label: "Second kind Y_v(x)", note: "integer v: log term" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "RGPV Bessel questions usually ask for the equation, the form of J_v, and the recurrence relation. Memorise the series form J_v(x) = sum (x/2)^(v+2k) (-1)^k / (k! Gamma(k+v+1)) and the recurrence J_(v-1) + J_(v+1) = (2v/x) J_v. Stating Y_n's logarithmic nature earns an extra mark.",
            },
            keyTerms: [
              { term: "Bessel function of the first kind", definition: "The Frobenius series solution J_v(x) of the Bessel equation, converging for x > 0." },
              { term: "Bessel function of the second kind", definition: "The second solution Y_n(x) for integer order, containing a logarithmic term." },
              { term: "Zero of a Bessel function", definition: "A value of x at which J_v(x) = 0; these correspond to natural frequencies of circular membranes." },
            ],
            examQuestions: [
              {
                q: "State the Bessel equation of order v; explain how the Frobenius method yields J_v(x) and discuss the case of integer v.",
                marks: 7,
                outline: [
                  "State the equation x^2 y'' + x y' + (x^2 - v^2) y = 0.",
                  "Identify x = 0 as a regular singular point.",
                  "Apply Frobenius: trial y = x^r sum a_n x^n with indicial r^2 - v^2 = 0, so r = ± v.",
                  "For non-integer v, obtain two independent solutions J_v(x) and J_(-v)(x).",
                  "For integer v = n, J_(-n) = (-1)^n J_n, so a second independent solution Y_n(x) with a log term is required.",
                  "Write the general solution y = C1 J_v + C2 Y_v for integer order.",
                ],
              },
              {
                q: "State one recurrence relation connecting Bessel functions J_(v-1), J_v, and J_(v+1).",
                marks: 3,
              },
              {
                q: "Write the standard form of the Bessel equation and identify its singular points.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Orthogonality of special functions",
            body: [
              "Orthogonality of special functions generalises the orthogonality of sines and cosines in Fourier series. Two functions f and g are orthogonal on an interval [a, b] with weight w(x) if integral from a to b of w(x) f(x) g(x) dx = 0. Legendre polynomials are orthogonal on [-1, 1] with weight 1; Bessel functions J_v(alpha_n x) are orthogonal on [0, a] with weight x, where alpha_n are the positive zeros of J_v; the trigonometric functions sin(n pi x / L) and cos(n pi x / L) are orthogonal on [0, L] with weight 1, the foundation of Fourier series.",
              "Orthogonality turns function expansion into projection. Any piecewise smooth function f on [a, b] can be expanded as f(x) = sum c_n phi_n(x), where {phi_n} is an orthogonal set and c_n = (integral of w f phi_n) / (integral of w phi_n^2). The denominator is the squared norm of phi_n. For Legendre polynomials, c_n = ((2n + 1)/2) integral from -1 to 1 of f(x) P_n(x) dx. For Bessel functions, c_n involves an integral with weight x divided by (a^2/2) (J_(v+1)(alpha_n a))^2.",
              "The practical consequence is the Sturm-Liouville theory: a wide class of second-order ODEs with boundary conditions has orthogonal eigenfunction sets that form complete bases. Solving a PDE by separation of variables (Section 5.4) leads to a Sturm-Liouville problem whose eigenfunctions - sines, Legendre, or Bessel - are the natural basis for expanding the initial condition. RGPV asks students to state the orthogonality relation for Legendre or Bessel functions and to compute one or two coefficients of a simple expansion; the deep theory is reserved for mathematics majors.",
            ],
            bullets: [
              "Orthogonality with weight: integral from a to b of w f g dx = 0.",
              "Legendre: orthogonal on [-1, 1] with weight 1.",
              "Bessel J_v(alpha_n x): orthogonal on [0, a] with weight x; alpha_n are zeros of J_v.",
              "Fourier series uses orthogonal sin(n pi x / L) and cos(n pi x / L) on [0, L].",
              "Sturm-Liouville theory: orthogonal eigenfunctions form a complete basis.",
            ],
            table: {
              caption: "Three classical orthogonal sets at a glance",
              headers: ["Family", "Interval", "Weight", "Norm"],
              rows: [
                ["Legendre P_n", "[-1, 1]", "1", "2/(2n + 1)"],
                ["Bessel J_v(alpha_n x)", "[0, a]", "x", "(a^2/2) J_(v+1)(alpha_n a)^2"],
                ["Trigonometric", "[0, L]", "1", "L/2 (for sin/cos)"],
                ["Chebyshev T_n", "[-1, 1]", "1/sqrt(1 - x^2)", "pi/2 (n >= 1)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Legendre vs Bessel orthogonality",
              caption: "Different intervals, weights, and norms define each family.",
              left: {
                heading: "Legendre P_n",
                items: [
                  "interval [-1, 1]",
                  "weight w = 1",
                  "norm 2/(2n+1)",
                  "axisymmetric spherical problems",
                ],
              },
              right: {
                heading: "Bessel J_v",
                items: [
                  "interval [0, a]",
                  "weight w = x",
                  "alpha_n zeros of J_v",
                  "cylindrical problems",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Coefficients come from the norm",
              body: "The orthogonality relation is the key to expansion coefficients. Always write c_n = (integral w f phi_n) / (integral w phi_n^2) and identify both w and phi_n for the specific family. The numerator is a single integral; the denominator is the norm, which for Legendre is 2/(2n+1).",
            },
            keyTerms: [
              { term: "Orthogonality with weight", definition: "The condition integral_a^b w(x) f(x) g(x) dx = 0 characterising orthogonal functions." },
              { term: "Norm of a function", definition: "The squared integral integral_a^b w(x) phi(x)^2 dx, used to normalise basis functions." },
              { term: "Sturm-Liouville problem", definition: "A second-order ODE eigenvalue problem whose eigenfunctions form an orthogonal basis." },
            ],
            examQuestions: [
              {
                q: "State the orthogonality relations for Legendre polynomials and Bessel functions; explain how orthogonality is used to expand a function.",
                marks: 7,
                outline: [
                  "Define orthogonality with weight: integral_a^b w(x) f(x) g(x) dx = 0.",
                  "State Legendre: integral from -1 to 1 of P_m P_n dx = 0 for m != n; equals 2/(2n+1) for m = n.",
                  "State Bessel: integral from 0 to a of x J_v(alpha_m x) J_v(alpha_n x) dx = 0 for m != n.",
                  "Write the expansion formula f(x) = sum c_n phi_n(x).",
                  "Give the coefficient formula c_n = (integral w f phi_n) / (integral w phi_n^2).",
                  "For Legendre specifically, c_n = ((2n+1)/2) integral_(-1)^1 f(x) P_n(x) dx.",
                  "Mention Sturm-Liouville theory as the underlying framework.",
                ],
              },
              {
                q: "Define orthogonality with weight and write the normalisation integral for P_n on [-1, 1].",
                marks: 3,
              },
              {
                q: "State one application of orthogonality of special functions.",
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
      title: "Partial Differential Equations",
      summary:
        "Formation of PDEs by eliminating arbitrary constants and functions, Lagrange's method for first-order linear PDEs, classification of second-order PDEs by the discriminant, separation of variables, and the one-dimensional wave and heat equations.",
      chapter: {
        number: "05",
        title: "Partial Differential Equations",
        intro:
          "Unit V lifts the theory to functions of several variables. PDEs are formed by eliminating arbitrary constants and functions from given relations; first-order linear PDEs are solved by Lagrange's auxiliary equations; second-order linear PDEs are classified as elliptic, parabolic, or hyperbolic by the discriminant; separation of variables reduces the wave and heat equations to ODEs whose solutions are superpositions of orthogonal modes.",
        inOneBreath:
          "A PDE relates a function of several variables to its partial derivatives; eliminating n constants yields an nth-order PDE; Lagrange's method for P p + Q q = R writes dx/P = dy/Q = dz/R, integrates twice for u and v, and gives F(u, v) = 0; a second-order PDE A z_xx + 2 B z_xy + C z_yy + ... = 0 is elliptic if B^2 - AC < 0, parabolic if = 0, hyperbolic if > 0; separation of variables assumes z = X(x) T(t), produces an eigenvalue problem in X, and superposes product solutions; the wave equation z_tt = c^2 z_xx and heat equation z_t = alpha^2 z_xx yield Fourier sine series.",
        sections: [
          {
            number: "5.1",
            title: "Formation of PDEs by elimination",
            body: [
              "A partial differential equation (PDE) is an equation involving an unknown function of two or more independent variables and its partial derivatives. Most engineering PDEs arise by eliminating arbitrary functions or constants from a relation among the variables. Eliminating n arbitrary constants from a relation F(x, y, z, c1, ..., c_n) = 0 produces an nth-order PDE; eliminating one arbitrary function from a relation z = f(x, y, phi(x, y)) produces a first-order PDE. The order of the resulting PDE equals the number of constants or functions eliminated.",
              "The procedure is mechanical: differentiate the given relation with respect to each independent variable, then combine the resulting equations algebraically to remove the arbitrary constants or functions. For example, eliminating the constants a and b from z = (x + a)(y + b) gives p = y + b and q = x + a, so the product p q equals (y + b)(x + a) = z, yielding the first-order PDE z = p q. Eliminating the function F from z = x^2 F(y/x) gives the homogeneous first-order PDE x p + y q = 2z. These formation problems are RGPV staples.",
              "A second worked example. Form the PDE by eliminating arbitrary functions from z = f(x) + g(y). Differentiate: p = f'(x), q = g'(y); differentiating again, r = partial^2 z / partial x^2 = f''(x), t = partial^2 z / partial y^2 = g''(y), and s = partial^2 z / partial x partial y = 0. The PDE is s = 0, or partial^2 z / partial x partial y = 0, a second-order equation whose general solution is z = f(x) + g(y) - exactly the starting point. This bidirectional path - form the PDE, then solve it - is a recurring RGPV theme.",
            ],
            bullets: [
              "PDE: relation involving an unknown function of several variables and its partial derivatives.",
              "Eliminating n constants yields an nth-order PDE.",
              "Eliminating one arbitrary function yields a first-order PDE.",
              "Standard notation: p = z_x, q = z_y, r = z_xx, s = z_xy, t = z_yy.",
              "RGPV favourite: form z = p q from z = (x + a)(y + b).",
            ],
            table: {
              caption: "Forming PDEs by elimination",
              headers: ["Given relation", "Eliminate", "PDE"],
              rows: [
                ["z = (x + a)(y + b)", "constants a, b", "z = p q"],
                ["z = ax + by + ab", "constants a, b", "z = x p + y q + p q (Clairaut)"],
                ["z = f(x) + g(y)", "functions f, g", "s = 0 (i.e. z_xy = 0)"],
                ["z = x^2 F(y/x)", "function F", "x p + y q = 2 z"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Forming a PDE by elimination",
              caption: "Four steps from a relation with arbitrary elements to a PDE.",
              steps: [
                { label: "Start: relation with constants/functions", note: "e.g. z = (x+a)(y+b)" },
                { label: "Differentiate wrt x and y", note: "compute p, q" },
                { label: "Eliminate the arbitrary elements" },
                { label: "Write the PDE; state order and degree" },
              ],
            },
            callout: {
              type: "tip",
              title: "Write every derivative explicitly",
              body: "When forming a PDE, write each differentiation explicitly before eliminating. Examiners award marks for the chain of derivatives as well as the final PDE. State the order and degree of the resulting PDE at the end - these are quick extra marks often overlooked.",
            },
            keyTerms: [
              { term: "Partial differential equation", definition: "An equation relating a function of several variables to its partial derivatives." },
              { term: "Elimination method", definition: "Differentiating a relation with arbitrary constants or functions and combining to remove them." },
              { term: "Standard PDE notation", definition: "p = z_x, q = z_y, r = z_xx, s = z_xy, t = z_yy used throughout Unit V." },
            ],
            examQuestions: [
              {
                q: "Form the PDE by eliminating the arbitrary constants a and b from z = (x + a)(y + b).",
                marks: 7,
                outline: [
                  "Differentiate z = (x + a)(y + b) partially with respect to x: p = y + b.",
                  "Differentiate partially with respect to y: q = x + a.",
                  "Multiply p and q: p q = (y + b)(x + a) = z by the original relation.",
                  "Write the PDE z = p q.",
                  "State that it is first order and first degree.",
                  "Note the order equals the number of constants eliminated (two would give second order, but here both appear in p and q).",
                ],
              },
              {
                q: "Define order and degree of a PDE; give one example each.",
                marks: 2,
              },
              {
                q: "Form the PDE by eliminating arbitrary functions from z = f(x) + g(y).",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "First-order linear PDEs: Lagrange's method",
            body: [
              "A first-order linear PDE of the form P p + Q q = R, where P, Q, R are functions of x, y, z, is solved by Lagrange's method. The key idea is to introduce a one-parameter family of curves called characteristic curves, along which the PDE becomes an ODE. The Lagrange auxiliary equations are dx/P = dy/Q = dz/R; solving any two of these pairs yields two independent integrals u(x, y, z) = c1 and v(x, y, z) = c2. The general solution is then F(u, v) = 0, where F is an arbitrary function - the PDE analogue of the two arbitrary constants of a second-order ODE.",
              "The auxiliary equations are tackled by choosing convenient multipliers or by spotting exact differentials. Sometimes the method of grouping works directly: pair dx/P = dy/Q and integrate; then pair dy/Q = dz/R or use a combination like (a dx + b dy)/(a P + b Q) = dz/R if the denominator simplifies. The method of multipliers picks multipliers l, m, n so that l P + m Q + n R = 0, making l dx + m dy + n dz an exact differential that integrates immediately. Choosing good multipliers is the art of the method.",
              "Worked example. Solve (y - z) p + (z - x) q = x - y. The Lagrange auxiliary equations are dx/(y - z) = dy/(z - x) = dz/(x - y). Use the multipliers 1, 1, 1: dx + dy + dz = (y - z + z - x + x - y) dt = 0, so dx + dy + dz = 0, integrating to x + y + z = c1. Use the multipliers x, y, z: x dx + y dy + z dz = (x(y - z) + y(z - x) + z(x - y)) dt = 0, so x dx + y dy + z dz = 0, integrating to x^2 + y^2 + z^2 = c2. The general solution is F(x + y + z, x^2 + y^2 + z^2) = 0.",
            ],
            bullets: [
              "Lagrange's equation: P p + Q q = R, with P, Q, R functions of x, y, z.",
              "Auxiliary equations: dx/P = dy/Q = dz/R.",
              "Two independent first integrals u = c1, v = c2 give the general solution F(u, v) = 0.",
              "Method of multipliers: choose l, m, n with l P + m Q + n R = 0 to expose an exact differential.",
              "Spotting dx + dy + dz = 0 or x dx + y dy + z dz = 0 by symmetry is common.",
            ],
            table: {
              caption: "Useful multiplier combinations for Lagrange's method",
              headers: ["Multipliers", "Yields", "First integral"],
              rows: [
                ["(1, 1, 1)", "dx + dy + dz = 0", "x + y + z = c1"],
                ["(x, y, z)", "x dx + y dy + z dz = 0", "x^2 + y^2 + z^2 = c2"],
                ["(a, b, c) with aP + bQ + cR = 0", "a dx + b dy + c dz exact", "integral = c3"],
                ["(1/x, 1/y, 1/z) if symmetric", "d(ln xyz) = 0", "xyz = c4"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Lagrange's method pipeline",
              caption: "From auxiliary equations to the general solution F(u, v) = 0.",
              stages: [
                { label: "Write dx/P = dy/Q = dz/R", note: "auxiliary equations" },
                { label: "Pick multipliers", note: "try 1,1,1 and x,y,z" },
                { label: "Integrate to find u, v", note: "two first integrals" },
                { label: "Write F(u, v) = 0", note: "general solution" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Lagrange's method is the most heavily tested PDE technique in RGPV. Memorise the recipe: write the auxiliary equations, choose multipliers (often (1, 1, 1) and (x, y, z)), integrate twice, write F(u, v) = 0. Practise the symmetric case (y - z) p + (z - x) q = (x - y) cold.",
            },
            keyTerms: [
              { term: "Lagrange's method", definition: "A technique for solving first-order linear PDEs via characteristic (auxiliary) equations." },
              { term: "Auxiliary equations", definition: "The system dx/P = dy/Q = dz/R whose integrations yield the first integrals of the PDE." },
              { term: "First integral", definition: "A function u(x, y, z) constant along characteristic curves; two independent ones define the solution." },
            ],
            examQuestions: [
              {
                q: "Solve (y - z) p + (z - x) q = x - y by Lagrange's method.",
                marks: 7,
                outline: [
                  "Write Lagrange's auxiliary equations dx/(y - z) = dy/(z - x) = dz/(x - y).",
                  "Use multipliers (1, 1, 1): dx + dy + dz = (y - z + z - x + x - y) dt = 0, so dx + dy + dz = 0.",
                  "Integrate: x + y + z = c1, the first integral u.",
                  "Use multipliers (x, y, z): x dx + y dy + z dz = 0, so d(x^2 + y^2 + z^2)/2 = 0.",
                  "Integrate: x^2 + y^2 + z^2 = c2, the second integral v.",
                  "Write the general solution F(x + y + z, x^2 + y^2 + z^2) = 0.",
                ],
              },
              {
                q: "State Lagrange's auxiliary equations for P p + Q q = R and explain how the general solution is formed.",
                marks: 3,
              },
              {
                q: "Define the characteristic curves of a first-order linear PDE.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Classification of second-order PDEs",
            body: [
              "A second-order linear PDE in two variables has the form A z_xx + 2 B z_xy + C z_yy + (lower-order terms) = 0, where A, B, C are functions of x and y. The character of the equation is determined by the discriminant B^2 - A C: if B^2 - A C < 0 the equation is elliptic; if B^2 - A C = 0 it is parabolic; if B^2 - A C > 0 it is hyperbolic. The classification governs which boundary data are appropriate and which physical phenomena the equation models.",
              "Elliptic equations describe equilibrium states - Laplace's equation z_xx + z_yy = 0 (A = 1, B = 0, C = 1, discriminant -1 < 0) governs steady-state temperature, electrostatic potential, and incompressible irrotational flow. Parabolic equations describe diffusion - the heat equation z_t = alpha^2 z_xx (A = 1, B = 0, C = 0 at fixed t, discriminant 0) governs heat conduction and similar spreading processes. Hyperbolic equations describe waves - the wave equation z_tt = c^2 z_xx (A = -c^2 or 1, B = 0, C = -1 or 1, discriminant c^2 > 0) governs strings, membranes, and sound.",
              "The classification is invariant under smooth change of independent variables: a non-degenerate coordinate transformation preserves the sign of B^2 - A C. This invariance underlies the canonical-form reduction, in which a coordinate transformation reduces the PDE to one of three standard forms: u_xx + u_yy = 0 (elliptic), u_yy = u_x (parabolic, with x playing the role of time), or u_xx - u_yy = 0 (hyperbolic). RGPV asks for the classification of a given PDE and occasionally the canonical form; the discriminant computation is the central skill.",
            ],
            bullets: [
              "General second-order linear PDE: A z_xx + 2 B z_xy + C z_yy + ... = 0.",
              "Discriminant: B^2 - A C determines the type.",
              "Elliptic (B^2 - A C < 0): Laplace, Poisson - equilibrium phenomena.",
              "Parabolic (B^2 - A C = 0): heat equation - diffusion phenomena.",
              "Hyperbolic (B^2 - A C > 0): wave equation - propagation phenomena.",
            ],
            table: {
              caption: "Three PDE families at a glance",
              headers: ["Type", "Discriminant", "Example", "Phenomenon"],
              rows: [
                ["Elliptic", "B^2 - AC < 0", "Laplace z_xx + z_yy = 0", "equilibrium"],
                ["Parabolic", "B^2 - AC = 0", "Heat z_t = alpha^2 z_xx", "diffusion"],
                ["Hyperbolic", "B^2 - AC > 0", "Wave z_tt = c^2 z_xx", "wave propagation"],
                ["Canonical form", "after transform", "u_xx + u_yy, u_yy = u_x, u_xx - u_yy", "reduced standard"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Three PDE types by discriminant",
              caption: "The sign of B^2 - AC picks the type and the canonical form.",
              axes: { x: "Discriminant sign", y: "Phenomenon" },
              quadrants: [
                { label: "Elliptic", note: "B^2 - AC < 0: Laplace, equilibrium" },
                { label: "Parabolic", note: "B^2 - AC = 0: heat, diffusion" },
                { label: "Hyperbolic", note: "B^2 - AC > 0: wave, propagation" },
                { label: "Canonical forms", note: "u_xx + u_yy, u_yy = u_x, u_xx - u_yy" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The classification question is a guaranteed 7-mark fixture. Memorise the discriminant B^2 - A C and the three cases with one example equation each: Laplace for elliptic, heat for parabolic, wave for hyperbolic. State the physical phenomenon modelled by each - examiners reward the linkage.",
            },
            keyTerms: [
              { term: "Discriminant B^2 - A C", definition: "The quantity that classifies a second-order linear PDE as elliptic, parabolic, or hyperbolic." },
              { term: "Elliptic PDE", definition: "A PDE with negative discriminant, modelling equilibrium states such as Laplace's equation." },
              { term: "Canonical form", definition: "A simplified standard form of the PDE obtained by a coordinate transformation." },
            ],
            examQuestions: [
              {
                q: "Classify the second-order PDE A z_xx + 2 B z_xy + C z_yy + ... = 0; give one example each of elliptic, parabolic, and hyperbolic equations with physical phenomena they model.",
                marks: 7,
                outline: [
                  "Write the general second-order linear PDE: A z_xx + 2 B z_xy + C z_yy + ... = 0.",
                  "Define the discriminant B^2 - A C.",
                  "Elliptic case: B^2 - A C < 0; example Laplace's equation z_xx + z_yy = 0; models steady-state temperature.",
                  "Parabolic case: B^2 - A C = 0; example heat equation z_t = alpha^2 z_xx; models heat diffusion.",
                  "Hyperbolic case: B^2 - A C > 0; example wave equation z_tt = c^2 z_xx; models vibrating strings.",
                  "Mention that the classification is invariant under smooth coordinate change.",
                ],
              },
              {
                q: "Classify the PDE z_xx + 2 z_xy + z_yy = 0 and give its canonical form.",
                marks: 3,
              },
              {
                q: "State the discriminant used to classify a second-order linear PDE and the three cases.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Separation of variables",
            body: [
              "Separation of variables is the standard method for solving linear PDEs on simple domains with boundary conditions. The idea is to assume a product solution z(x, y) = X(x) Y(y) (or z(x, t) = X(x) T(t)) and substitute into the PDE. The PDE separates into two ODEs, one in X and one in Y (or T), connected by a separation constant. Each ODE is solved by the methods of Units I and II; the product solutions are then combined by superposition to satisfy the boundary and initial conditions.",
              "The choice of separation constant is dictated by the boundary conditions. For the heat equation z_t = alpha^2 z_xx on [0, L] with z(0, t) = z(L, t) = 0, substituting z = X T gives T'/(alpha^2 T) = X''/X = -lambda. The X ODE X'' + lambda X = 0 with X(0) = X(L) = 0 has non-trivial solutions only for lambda = (n pi/L)^2, giving X_n = sin(n pi x / L). The corresponding T_n = e^(-alpha^2 (n pi/L)^2 t) decays exponentially, the higher modes decaying faster.",
              "The general solution is the superposition z(x, t) = sum from n=1 to infinity of b_n sin(n pi x / L) e^(-alpha^2 (n pi/L)^2 t), with coefficients b_n determined by Fourier sine expansion of the initial condition z(x, 0) = f(x). The recipe is identical for the wave equation (with cos and sin in time) and Laplace's equation in a rectangle (with hyperbolic functions in one direction). The separation constant becomes the eigenvalue of a Sturm-Liouville problem, linking the method to the orthogonality theory of Section 4.5.",
            ],
            bullets: [
              "Assume product z(x, t) = X(x) T(t) and substitute into the PDE.",
              "Divide by X T to separate into two ODEs connected by a separation constant.",
              "Solve the X ODE with boundary conditions to get eigenvalues and eigenfunctions.",
              "Solve the T ODE for each eigenvalue.",
              "Superpose product solutions; expand initial condition in the eigenfunction basis.",
            ],
            table: {
              caption: "Outcomes of separation for classical PDEs",
              headers: ["PDE", "Spatial ODE", "Temporal ODE"],
              rows: [
                ["Heat: z_t = alpha^2 z_xx", "X'' + lambda X = 0", "T' + alpha^2 lambda T = 0"],
                ["Wave: z_tt = c^2 z_xx", "X'' + lambda X = 0", "T'' + c^2 lambda T = 0"],
                ["Laplace (rectangle): z_xx + z_yy = 0", "X'' + lambda X = 0", "Y'' - lambda Y = 0"],
                ["Laplace (polar): r R'' + R' + ...", "Bessel-type", "trigonometric"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Separation of variables workflow",
              caption: "Five rotating steps from ansatz to a fully matched solution.",
              steps: [
                { label: "Assume z = X(x) T(t)", note: "product ansatz" },
                { label: "Substitute and divide by XT", note: "separation" },
                { label: "Solve X ODE with BCs", note: "eigenvalues, eigenfunctions" },
                { label: "Solve T ODE for each eigenvalue" },
                { label: "Superpose; match initial condition" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The full separation-of-variables derivation - product ansatz, separation, eigenvalue problem, superposition, Fourier coefficient - is a 7-mark RGPV fixture. Practice writing all five stages explicitly. Examiners reward the boundary-condition-driven choice of sine (Dirichlet) vs cosine (Neumann) eigenfunctions.",
            },
            keyTerms: [
              { term: "Separation of variables", definition: "A method assuming z = X(x) T(t) to split a PDE into ODEs." },
              { term: "Separation constant", definition: "The constant (often denoted -lambda) appearing when dividing the PDE by X T." },
              { term: "Eigenfunction", definition: "A non-trivial solution X_n of the spatial ODE satisfying the boundary conditions." },
            ],
            examQuestions: [
              {
                q: "Solve the heat equation z_t = alpha^2 z_xx on [0, L] with z(0, t) = z(L, t) = 0 and z(x, 0) = f(x) by separation of variables.",
                marks: 7,
                outline: [
                  "Substitute z = X(x) T(t) into z_t = alpha^2 z_xx and divide by X T to get T'/(alpha^2 T) = X''/X = -lambda.",
                  "Solve X'' + lambda X = 0 with X(0) = X(L) = 0: eigenvalues lambda_n = (n pi/L)^2, eigenfunctions X_n = sin(n pi x / L).",
                  "Solve T' + alpha^2 lambda_n T = 0 to get T_n = e^(-alpha^2 (n pi/L)^2 t).",
                  "Write product solutions z_n = sin(n pi x/L) e^(-alpha^2 (n pi/L)^2 t).",
                  "Superpose: z(x, t) = sum b_n sin(n pi x/L) e^(-alpha^2 (n pi/L)^2 t).",
                  "Match z(x, 0) = f(x): b_n = (2/L) integral_0^L f(x) sin(n pi x/L) dx (Fourier sine coefficients).",
                ],
              },
              {
                q: "Explain how boundary conditions determine the eigenvalues in separation of variables.",
                marks: 3,
              },
              {
                q: "State the product ansatz used in separation of variables for z_t = alpha^2 z_xx.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "One-dimensional wave and heat equations",
            body: [
              "The one-dimensional wave equation z_tt = c^2 z_xx describes transverse vibrations of a stretched string of length L with wave speed c = sqrt(T/rho), T the tension and rho the linear density. With fixed ends z(0, t) = z(L, t) = 0 and initial shape z(x, 0) = f(x), initial velocity z_t(x, 0) = g(x), separation of variables yields z(x, t) = sum [a_n cos(n pi c t / L) + b_n sin(n pi c t / L)] sin(n pi x / L). The a_n and b_n are Fourier sine coefficients of f and g/(n pi c/L) respectively; each term is a standing wave with frequency n c/(2 L).",
              "The one-dimensional heat equation z_t = alpha^2 z_xx describes temperature in a rod of length L with thermal diffusivity alpha^2 = k/(rho c_p). With ends held at zero z(0, t) = z(L, t) = 0 and initial temperature z(x, 0) = f(x), the solution is z(x, t) = sum b_n sin(n pi x / L) e^(-alpha^2 (n pi/L)^2 t). The Fourier sine coefficients b_n come from f(x). Higher modes decay faster, so the temperature profile smooths rapidly toward the steady zero state - the physical signature of diffusion.",
              "Worked example. A string of length L = pi with fixed ends starts from rest (g = 0) with initial shape f(x) = sin(2x). The wave equation z_tt = c^2 z_xx has c arbitrary. By orthogonality, only the n = 2 term survives, giving z(x, t) = sin(2x) cos(2 c t). Similarly, the heat equation z_t = alpha^2 z_xx with the same initial condition yields z(x, t) = sin(2x) e^(-4 alpha^2 t), decaying exponentially at rate 4 alpha^2. These single-mode solutions display the wave's oscillation and the heat's decay in their purest forms.",
            ],
            bullets: [
              "Wave equation: z_tt = c^2 z_xx; speed c = sqrt(T/rho); describes string vibration.",
              "Heat equation: z_t = alpha^2 z_xx; diffusivity alpha^2 = k/(rho c_p); describes heat conduction.",
              "Wave solution: standing waves with frequencies n c / (2 L).",
              "Heat solution: exponential decay with rates alpha^2 (n pi/L)^2.",
              "Coefficients from Fourier sine series of the initial shape f(x).",
            ],
            codeExample: {
              language: "python",
              caption: "Single-mode heat solution on [0, pi] in SymPy",
              code: `from sympy import symbols, sin, exp
x, t, alpha = symbols('x t alpha')
# Heat equation with single-mode initial shape on [0, pi]
n = 2
z = sin(n*x) * exp(-alpha**2 * n**2 * t)
print("z(x, t) =", z)
# z(x, t) = sin(2x) exp(-4 alpha^2 t)`,
            },
            diagram: {
              kind: "compare",
              title: "Wave vs heat solutions",
              caption: "One oscillates and conserves energy; the other decays.",
              left: {
                heading: "Wave z_tt = c^2 z_xx",
                items: [
                  "standing wave modes",
                  "cos/sin in time",
                  "frequencies n c/(2 L)",
                  "energy conserved",
                ],
              },
              right: {
                heading: "Heat z_t = alpha^2 z_xx",
                items: [
                  "decaying modes",
                  "exponential in time",
                  "rates alpha^2 (n pi/L)^2",
                  "energy dissipates",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The wave and heat equations are the most-tested PDE applications in RGPV. Memorise both solutions in series form and the role of each Fourier coefficient. For a single-mode initial condition like f(x) = sin(2x), the series collapses to one term - these are the standard textbook examples.",
            },
            keyTerms: [
              { term: "Wave equation", definition: "The PDE z_tt = c^2 z_xx governing transverse vibrations of a string; c is the wave speed." },
              { term: "Heat equation", definition: "The PDE z_t = alpha^2 z_xx governing heat diffusion; alpha^2 is the thermal diffusivity." },
              { term: "Standing wave", definition: "A product solution sin(n pi x/L) cos(n pi c t/L) representing a mode of vibration of a string." },
            ],
            examQuestions: [
              {
                q: "Derive the solution of the one-dimensional wave equation z_tt = c^2 z_xx with fixed ends and initial conditions z(x, 0) = f(x), z_t(x, 0) = g(x).",
                marks: 7,
                outline: [
                  "Assume z = X(x) T(t); substitute to get T''/(c^2 T) = X''/X = -lambda.",
                  "Solve X'' + lambda X = 0 with X(0) = X(L) = 0: lambda_n = (n pi/L)^2, X_n = sin(n pi x/L).",
                  "Solve T'' + c^2 lambda_n T = 0: T_n = a_n cos(n pi c t/L) + b_n sin(n pi c t/L).",
                  "Form product and superpose: z(x, t) = sum [a_n cos(n pi c t/L) + b_n sin(n pi c t/L)] sin(n pi x/L).",
                  "Match z(x, 0) = f(x): a_n = (2/L) integral_0^L f(x) sin(n pi x/L) dx.",
                  "Match z_t(x, 0) = g(x): b_n = (2/(n pi c)) integral_0^L g(x) sin(n pi x/L) dx.",
                ],
              },
              {
                q: "Solve the heat equation z_t = alpha^2 z_xx on [0, pi] with zero boundary conditions and initial temperature z(x, 0) = sin(2x).",
                marks: 3,
              },
              {
                q: "State the physical meaning of the constants c and alpha^2 in the wave and heat equations.",
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
      id: "weights",
      heading: "Exam weight map",
      weightedTopics: [
        { topic: "Complementary function (auxiliary equation)", weight: "Very high", note: "Almost every paper; practise all three cases" },
        { topic: "Laplace transforms: properties and solving ODEs", weight: "Very high", note: "Two questions common; derivative formulas are key" },
        { topic: "First-order ODEs (linear, Bernoulli, exact)", weight: "High", note: "Integrating factor and Bernoulli substitution guaranteed" },
        { topic: "Separation of variables for heat and wave", weight: "High", note: "Full derivation is a 7-mark fixture" },
        { topic: "Lagrange's method for first-order PDE", weight: "High", note: "Multipliers (1,1,1) and (x,y,z) standard" },
        { topic: "Classification of second-order PDEs", weight: "High", note: "Discriminant B^2 - AC; one question certain" },
        { topic: "Cauchy-Euler equation", weight: "Medium-high", note: "Repeated and complex roots tested" },
        { topic: "Variation of parameters", weight: "Medium", note: "sec x, tan x type R(x)" },
        { topic: "Legendre and Bessel functions", weight: "Medium", note: "Equation + Rodrigues' + recurrence" },
        { topic: "Series solutions (power series, Frobenius)", weight: "Medium", note: "Indicial equation cases" },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        {
          week: "Week 1",
          focus: "First-order ODEs",
          tasks: [
            "Master separable, homogeneous, linear, Bernoulli, and exact classifications",
            "Drill integrating-factor problems with initial conditions",
            "Solve Newton cooling and R-L circuit applications",
          ],
        },
        {
          week: "Week 2",
          focus: "Higher-order linear ODEs",
          tasks: [
            "Practise complementary function for distinct, repeated, and complex roots",
            "Undetermined coefficients with the modification rule",
            "Variation of parameters for sec x and tan x type R(x)",
          ],
        },
        {
          week: "Week 3",
          focus: "Cauchy-Euler and applications",
          tasks: [
            "Cauchy-Euler homogeneous with log terms",
            "Mass-spring-damped classification via damping ratio",
            "Full linear ODE revision: y = y_c + y_p",
          ],
        },
        {
          week: "Week 4",
          focus: "Laplace transforms",
          tasks: [
            "Memorise the standard transform table and properties",
            "Practise derivative formulas and initial-value ODEs",
            "Convolution theorem and unit step / Dirac delta problems",
          ],
        },
        {
          week: "Week 5",
          focus: "Series solutions and special functions",
          tasks: [
            "Power series about ordinary points with recurrence",
            "Frobenius method: indicial equation and three cases",
            "Legendre polynomials, Rodrigues' formula, Bessel functions",
          ],
        },
        {
          week: "Week 6",
          focus: "PDEs and revision",
          tasks: [
            "Formation of PDEs by elimination",
            "Lagrange's method and PDE classification",
            "Separation of variables for wave and heat equations; full mock paper",
          ],
        },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Skim your personal error log; redo only problems you got wrong before.",
        "Memorise the Laplace transform table, the auxiliary equation cases, and Rodrigues' formula cold.",
        "Practise three full 7-mark questions: auxiliary equation, Lagrange's method, separation of variables.",
        "Revise classification of PDEs by discriminant; one question is near-certain.",
        "Write the standard forms of y_c for distinct, repeated, complex, and Cauchy-Euler cases on one page.",
        "Sleep seven hours; arrive early with calculator, identity card, and admit card.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Read the whole paper first; mark the three 7-mark questions you will attempt with full derivations.",
        "Start with the question you know best; confidence on the first problem carries through.",
        "Write every algebraic step explicitly - RGPV awards method marks even if the final number is wrong.",
        "For derivation questions, state definitions first, then the theorem, then the proof steps in order.",
        "Reserve the last fifteen minutes to check auxiliary equation roots, signs, and constants of integration.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Forgetting the modification rule in undetermined coefficients when the guess duplicates y_c.",
        "Dropping the (1 - n) factor in the Bernoulli substitution.",
        "Reading P(x) from non-standard form instead of dividing through first.",
        "Writing a m^2 + b m + c = 0 for Cauchy-Euler instead of a m(m-1) + b m + c = 0.",
        "Forgetting initial-condition terms in L{y''} = s^2 Y - s y(0) - y'(0).",
        "Confusing discriminant sign: elliptic < 0, parabolic = 0, hyperbolic > 0.",
      ],
    },
  ],
};
