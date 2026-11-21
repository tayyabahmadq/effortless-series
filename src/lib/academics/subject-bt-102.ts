/**
 * Academics - RGPV first-year common subject: BT-102 Mathematics-I.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or Python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 *
 * Content is fully ASCII: pi written "pi", superscripts written with caret
 * (x^2, lambda^2), arrows written "->", Greek spelled out (theta, phi),
 * no unicode math. Allowed non-ASCII: middle dot, em dash, en dash,
 * approx, ge, le, plus-minus.
 */

import type { AcademicSubject } from "./types";

export const bt102: AcademicSubject = {
  id: "bt-102",
  code: "BT-102",
  title: "Mathematics-I",
  semester: "I Semester",
  program: "RGPV \u00b7 First Year Common (all B.Tech branches)",
  tagline:
    "The complete visual guide to BT-102 Mathematics-I: differential calculus with mean value theorems, Taylor series and curvature; multivariable calculus with partials, Euler's theorem, Jacobians and Lagrange multipliers; matrices and linear algebra with rank, eigenvalues and Cayley-Hamilton; multiple integrals with order-changing, polar and spherical regions, beta and gamma functions; and vector calculus from gradient and curl through Green's, Stokes' and Gauss divergence theorems.",
  description:
    "Five units walk from single-variable differential calculus - Rolle, Lagrange, Cauchy, Taylor, Maclaurin, L'Hopital, extrema and curvature - into the multivariable world of partial derivatives, Euler's theorem, Jacobians and Lagrange multipliers, then across linear algebra with rank, consistency, inversion, eigenvalues and Cayley-Hamilton. The fourth unit builds up double and triple integrals with order-changing, polar and cylindrical coordinates, closing with the beta and gamma functions and their connecting identity. The final unit assembles vector calculus - gradient, divergence, curl, directional derivatives, line integrals, and the three integral theorems of Green, Stokes and Gauss divergence. Every section pairs the formal statement with a worked example, a redrawable diagram, and the questions RGPV actually asks.",
  accentColor: "#a78bfa",
  emoji: "M1",
  unitCount: 5,
  totalSections: 25,
  units: [
    // =========================================================================
    // UNIT I - DIFFERENTIAL CALCULUS
    // =========================================================================
    {
      number: 1,
      roman: "I",
      title: "Differential Calculus",
      summary:
        "Single-variable calculus at exam rigour: Rolle's, Lagrange's and Cauchy's mean value theorems; Taylor and Maclaurin series; L'Hopital's rule for indeterminate forms; maxima, minima and points of inflection; and curvature with the radius of curvature formula for cartesian, parametric and polar curves.",
      chapter: {
        number: "01",
        title: "Differential Calculus",
        intro:
          "Unit I revisits single-variable calculus with the rigour an engineer needs: the three mean value theorems that link average and instantaneous rates, the Taylor and Maclaurin series that approximate functions by polynomials, L'Hopital's rule for the 0/0 and infinity/infinity forms, the first and second derivative tests for maxima and minima, and the curvature formula that quantifies how sharply a plane curve bends.",
        inOneBreath:
          "Rolle says equal endpoints imply a horizontal tangent somewhere inside; Lagrange says some tangent parallels the endpoint chord with slope (f(b)-f(a))/(b-a); Cauchy generalises to two functions f and g with (f(b)-f(a))g'(c) = (g(b)-g(a))f'(c); Taylor writes f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)^2/2! + ... and Maclaurin takes a = 0 giving e^x = 1 + x + x^2/2! + ..., sin x = x - x^3/3! + ..., cos x = 1 - x^2/2! + ..., log(1+x) = x - x^2/2 + ...; L'Hopital handles 0/0 and inf/inf by differentiating numerator and denominator; maxima and minima live at critical points f'(x) = 0 and are classified by the sign of f'' or the sign change of f'; curvature kappa = |y''|/(1+y'^2)^(3/2) and radius rho = 1/kappa, with parametric and polar analogues.",
        sections: [
          {
            number: "1.1",
            title: "Rolle's, Lagrange's and Cauchy's mean value theorems",
            body: [
              "The mean value theorems link the average rate of change of a function over a closed interval with its instantaneous rate at some interior point. Rolle's theorem states that if f is continuous on the closed interval [a, b], differentiable on the open interval (a, b), and f(a) equals f(b), then there exists at least one point c in (a, b) such that f'(c) equals zero. Geometrically, a smooth curve whose chord has equal endpoints must have a horizontal tangent somewhere in between; algebraically, a differentiable function vanishing at two distinct points has a critical point between them.",
              "Lagrange's mean value theorem generalises Rolle by dropping the equal-endpoint condition. If f is continuous on [a, b] and differentiable on (a, b), there exists c in (a, b) with f'(c) equal to (f(b) minus f(a)) divided by (b minus a). The right side is the slope of the chord joining (a, f(a)) and (b, f(b)); the theorem asserts some tangent parallels that chord. Cauchy's mean value theorem further generalises by taking two functions f and g: there exists c in (a, b) with (f(b) minus f(a)) times g'(c) equal to (g(b) minus g(a)) times f'(c), provided g'(x) is never zero on (a, b).",
              "A worked example illustrates Lagrange. Take f(x) equals x squared on [1, 3]. The chord slope is (9 minus 1) divided by (3 minus 1), which equals 4. Setting f'(c) equal to 2c equal to 4 yields c equal to 2, lying inside (1, 3) as required. For Rolle, take f(x) equal to x squared minus 4 on [minus 2, 2]: f(minus 2) equals f(2) equals zero, so there is c with 2c equal to zero, giving c equal to zero inside the interval. These theorems underpin Taylor's theorem, error bounds in numerical methods, and monotonicity tests used throughout engineering analysis.",
            ],
            bullets: [
              "Rolle: cont on [a,b], diff on (a,b), f(a)=f(b) => f'(c)=0 for some interior c.",
              "Lagrange MVT: drop f(a)=f(b); conclusion f'(c) = (f(b)-f(a))/(b-a).",
              "Cauchy MVT: two functions f, g with g'(x) != 0 => (f(b)-f(a))g'(c) = (g(b)-g(a))f'(c).",
              "Geometric reading: some tangent is parallel to the endpoint chord.",
              "Worked: f(x)=x^2 on [1,3] gives chord slope 4 and c=2 in (1,3).",
            ],
            table: {
              caption: "Mean value theorems side by side.",
              headers: ["Theorem", "Hypotheses", "Conclusion", "Worked c"],
              rows: [
                ["Rolle", "cont [a,b], diff (a,b), f(a)=f(b)", "f'(c)=0", "x^2-4 on [-2,2]: c=0"],
                ["Lagrange", "cont [a,b], diff (a,b)", "f'(c)=(f(b)-f(a))/(b-a)", "x^2 on [1,3]: c=2"],
                ["Cauchy", "f,g diff (a,b), g'!=0", "(f(b)-f(a))g'(c)=(g(b)-g(a))f'(c)", "f=x^2,g=x on [1,3]: c=2"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Three theorems, increasing generality",
              caption:
                "Rolle specialises Lagrange (f(a)=f(b)); Lagrange specialises Cauchy (g(x)=x).",
              steps: [
                { label: "Rolle: f(a)=f(b) => f'(c)=0" },
                { label: "Lagrange: drop f(a)=f(b)", note: "f'(c) = (f(b)-f(a))/(b-a)" },
                { label: "Cauchy: two functions f, g", note: "general chord slope" },
              ],
            },
            callout: {
              type: "exam",
              title: "Verify hypotheses first",
              body: "Always verify the hypotheses before stating the conclusion. RGPV examiners dock marks if you write f'(c)=... without first confirming continuity on the closed interval and differentiability on the open interval; Cauchy additionally needs g'(x) != 0 throughout.",
            },
            keyTerms: [
              { term: "Rolle's theorem", definition: "If f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b), then some c in (a,b) satisfies f'(c)=0." },
              { term: "Lagrange MVT", definition: "Under continuity on [a,b] and differentiability on (a,b), some c in (a,b) satisfies f'(c)=(f(b)-f(a))/(b-a)." },
              { term: "Cauchy MVT", definition: "For differentiable f and g with g'(x)!=0 on (a,b), some c satisfies (f(b)-f(a))g'(c)=(g(b)-g(a))f'(c)." },
            ],
            examQuestions: [
              {
                q: "State and prove Rolle's theorem and Lagrange's mean value theorem. Verify Lagrange's theorem for f(x) = x^2 - 2x + 3 on [1, 3].",
                marks: 7,
                outline: [
                  "State Rolle's theorem with continuity, differentiability, and equal-endpoint hypotheses.",
                  "Prove Rolle: if f is constant then f'=0 everywhere; otherwise an extremum lies inside at c with f'(c)=0.",
                  "State Lagrange's MVT with continuity on [a,b] and differentiability on (a,b).",
                  "Prove Lagrange by applying Rolle to g(x) = f(x) - [(f(b)-f(a))/(b-a)](x-a).",
                  "Compute f(1)=2, f(3)=6; chord slope = (6-2)/(3-1) = 2.",
                  "f'(x)=2x-2; set 2x-2=2 giving x=2.",
                  "Confirm c=2 lies in (1,3), concluding the verification.",
                ],
              },
              {
                q: "State Cauchy's mean value theorem and show that it reduces to Lagrange's theorem when g(x) = x.",
                marks: 3,
              },
              {
                q: "Verify Rolle's theorem for f(x) = sin x on [0, pi].",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Taylor and Maclaurin series",
            body: [
              "Taylor's theorem expresses a smooth function f as an infinite polynomial plus a remainder. If f is infinitely differentiable at a point a, then f(x) equals f(a) plus f'(a) times (x minus a) plus f''(a) times (x minus a) squared over 2 factorial, plus f'''(a) times (x minus a) cubed over 3 factorial, and so on. The series converges to f(x) when the remainder term tends to zero as the order grows. The special case a equals zero gives the Maclaurin series, the expansion every engineer should know by heart for the four library functions.",
              "Four Maclaurin expansions anchor the syllabus. The exponential e^x equals 1 plus x plus x squared over 2 factorial plus x cubed over 3 factorial and so on, valid for every real x. Sine of x equals x minus x cubed over 3 factorial plus x to the fifth over 5 factorial and so on, an odd function. Cosine of x equals 1 minus x squared over 2 factorial plus x to the fourth over 4 factorial and so on, an even function. The natural logarithm log of (1 plus x) equals x minus x squared over 2 plus x cubed over 3 minus x to the fourth over 4, valid when the absolute value of x is less than 1.",
              "A worked expansion shows the method. To expand e^x times sine of x up to degree 3, multiply the two series: e^x truncated to 1 plus x plus x squared over 2 plus x cubed over 6, and sine x truncated to x minus x cubed over 6. Their product simplifies to x plus x squared plus one-third x cubed plus higher terms. The same product could be obtained by differentiating e^x sin x three times and evaluating at zero, but the multiplication of series is faster and less error prone. Series expansions power every calculator's sin, cos, and exp buttons and underpin numerical linear algebra.",
            ],
            bullets: [
              "Taylor about a: f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)^2/2! + ... ; remainder must vanish.",
              "Maclaurin is Taylor with a = 0; the four expansions to memorise.",
              "e^x = 1 + x + x^2/2! + x^3/3! + ... ; valid for all real x.",
              "sin x = x - x^3/3! + x^5/5! - ... (odd); cos x = 1 - x^2/2! + x^4/4! - ... (even).",
              "log(1+x) = x - x^2/2 + x^3/3 - ... ; valid for |x| < 1.",
            ],
            table: {
              caption: "Maclaurin expansions every engineer should know.",
              headers: ["Function", "Series (first four terms)", "Validity", "Parity"],
              rows: [
                ["e^x", "1 + x + x^2/2! + x^3/3!", "all real x", "neither"],
                ["sin x", "x - x^3/3! + x^5/5! - x^7/7!", "all real x", "odd"],
                ["cos x", "1 - x^2/2! + x^4/4! - x^6/6!", "all real x", "even"],
                ["log(1+x)", "x - x^2/2 + x^3/3 - x^4/4", "|x| < 1", "neither"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Building the Maclaurin series step by step",
              caption:
                "Each stage adds one more derivative evaluated at zero.",
              stages: [
                { label: "Write f(0)", note: "zeroth term" },
                { label: "Add f'(0) x", note: "first term" },
                { label: "Add f''(0) x^2/2!", note: "second term" },
                { label: "Add f'''(0) x^3/3!", note: "third term" },
                { label: "Sum the infinite series", note: "convergence check" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise the four expansions",
              body: "Memorise the four Maclaurin series cold: e^x, sin x, cos x, log(1+x). RGPV asks them as 'expand ... up to degree four' and you save two minutes by writing them directly instead of differentiating four times.",
            },
            keyTerms: [
              { term: "Taylor series", definition: "Expansion of f about a point a as f(a) + f'(a)(x-a) + f''(a)(x-a)^2/2! + ..." },
              { term: "Maclaurin series", definition: "Taylor series centred at a = 0; gives the standard expansions of e^x, sin x, cos x, log(1+x)." },
              { term: "Remainder term", definition: "The error left when the infinite series is truncated to a finite polynomial; must tend to zero for convergence." },
            ],
            examQuestions: [
              {
                q: "State Taylor's theorem with remainder. Expand e^x sin x up to terms of degree 3 using Maclaurin series and verify the coefficient of x^3.",
                marks: 7,
                outline: [
                  "State Taylor's theorem about a: f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)^2/2! + ... + R_n.",
                  "Define Maclaurin as a=0; write the general Maclaurin formula.",
                  "Write e^x = 1 + x + x^2/2 + x^3/6 + ... (up to degree 3).",
                  "Write sin x = x - x^3/6 + ... (up to degree 3).",
                  "Multiply the two truncated series term by term.",
                  "Collect coefficients: x + x^2 + (1/2 - 1/6)x^3 = x + x^2 + (1/3)x^3.",
                  "State the coefficient of x^3 is 1/3; verify by direct differentiation if time permits.",
                ],
              },
              {
                q: "Expand log(1+x) in powers of x up to degree 4 and state its validity range.",
                marks: 3,
              },
              {
                q: "Write the Maclaurin series for cos x up to the x^4 term.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "L'Hopital's rule",
            body: [
              "Indeterminate forms arise when direct substitution into a limit yields 0 divided by 0, infinity divided by infinity, zero times infinity, infinity minus infinity, zero to the power zero, infinity to the power zero, or one to the power infinity. Of these, the two quotient forms are handled directly by L'Hopital's rule, and the others are converted into quotient form first. L'Hopital's rule states that if the limit of f(x) divided by g(x) as x approaches a is of the form 0 divided by 0 or infinity divided by infinity, and if f and g are differentiable near a with g'(x) not zero, then the limit equals the limit of f'(x) divided by g'(x), provided the latter limit exists.",
              "The rule may be applied repeatedly. To evaluate the limit as x approaches zero of (x minus sine x) divided by x cubed, direct substitution gives 0 over 0. Differentiating numerator and denominator gives (1 minus cosine x) divided by 3 x squared, still 0 over 0. Differentiating again gives sine x divided by 6 x, still 0 over 0. A third differentiation gives cosine x divided by 6, whose limit is one-sixth. Three applications were needed; stopping early would have given a wrong answer. Always recheck the form after each differentiation and stop only when the limit is a finite number or clearly infinite.",
              "A second worked example shows the conversion of other forms. To evaluate the limit as x approaches zero from the positive side of x to the power x (which is zero to the power zero), take the natural logarithm: log of the limit equals the limit of x times log x, which is zero times minus infinity. Rewrite as log x divided by 1 over x, now infinity over infinity, and apply L'Hopital: derivative of log x is 1 over x, derivative of 1 over x is minus 1 over x squared, quotient is minus x, whose limit is zero. Since the log of the limit is zero, the original limit is e to the power zero, which equals one. Convert non-quotient forms to quotient form before applying the rule.",
            ],
            bullets: [
              "L'Hopital applies only to 0/0 and infinity/infinity quotient forms; check before each application.",
              "Other forms (0*inf, inf-inf, 0^0, inf^0, 1^inf) must be rewritten as a quotient first.",
              "The rule may be applied repeatedly until a determinate limit appears.",
              "Verify g'(x) != 0 near a and that the new limit exists before concluding.",
              "Worked: lim x->0 (x - sin x)/x^3 = 1/6 after three applications.",
            ],
            table: {
              caption: "Indeterminate forms and their reduction to L'Hopital.",
              headers: ["Form", "Reduction", "After reduction", "Example"],
              rows: [
                ["0/0", "none - apply L'Hopital", "0/0", "lim (x-sin x)/x^3"],
                ["inf/inf", "none - apply L'Hopital", "inf/inf", "lim (log x)/(1/x)"],
                ["0 * inf", "rewrite as quotient f / (1/g)", "0/0 or inf/inf", "lim x log x = lim log x / (1/x)"],
                ["0^0 or 1^inf", "take log, then rewrite", "0 * inf", "lim x^x: log -> x log x"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which path does the limit take?",
              caption:
                "Match the direct-substitution form to the correct treatment.",
              start: "Compute lim f(x) as x -> a by substitution",
              branches: [
                { label: "Already determinate", outcome: "Stop - write the value, no rule needed", good: true },
                { label: "0/0 or inf/inf", outcome: "Apply L'Hopital directly", good: true },
                { label: "0*inf, inf-inf, 0^0, inf^0, 1^inf", outcome: "Rewrite as quotient, then apply L'Hopital", good: true },
                { label: "Applied L'Hopital, still 0/0", outcome: "Differentiate again; repeat until determinate", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Recheck the form every time",
              body: "Check the form before EVERY differentiation. A common slip is applying L'Hopital to a limit that is already determinate (say 2/0), which yields a wrong answer. After each step, re-substitute before differentiating again.",
            },
            keyTerms: [
              { term: "Indeterminate form", definition: "An expression such as 0/0 or infinity/infinity obtained by direct substitution; its actual limit must be computed." },
              { term: "L'Hopital's rule", definition: "If lim f/g is 0/0 or inf/inf and f, g are differentiable, then lim f/g = lim f'/g' when the latter exists." },
              { term: "Reduction to quotient form", definition: "Algebraic manipulation converting 0*inf, inf-inf, 0^0, inf^0, 1^inf into 0/0 or inf/inf so L'Hopital applies." },
            ],
            examQuestions: [
              {
                q: "State L'Hopital's rule. Evaluate lim x->0 (x - sin x) / x^3, showing every application of the rule.",
                marks: 7,
                outline: [
                  "State L'Hopital: if lim f/g is 0/0 or inf/inf and f, g differentiable with g'!=0, then lim f/g = lim f'/g'.",
                  "Verify substitution gives 0/0: at x=0, numerator 0 - sin 0 = 0, denominator 0.",
                  "First application: differentiate num and den -> (1 - cos x) / (3x^2); still 0/0.",
                  "Second application: differentiate -> sin x / (6x); still 0/0.",
                  "Third application: differentiate -> cos x / 6; now determinate.",
                  "Substitute x=0: cos 0 / 6 = 1/6.",
                  "Conclude the limit equals 1/6; note three applications were needed.",
                ],
              },
              {
                q: "Evaluate lim x->0+ x^x by first taking logarithms.",
                marks: 3,
              },
              {
                q: "State two indeterminate forms other than 0/0 and infinity/infinity.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Maxima, minima and points of inflection",
            body: [
              "A function f has a local maximum at a point c if f(c) is greater than or equal to f(x) for all x near c, and a local minimum if f(c) is less than or equal to f(x) for all x near c. The search begins with the critical points: values of x where f'(x) equals zero or where f'(x) does not exist. The first derivative test examines the sign of f' on either side of a critical point: a change from positive to negative signals a local maximum, negative to positive a local minimum, and no sign change indicates neither. The second derivative test is often faster: at a critical point c with f'(c) equal to zero, if f''(c) is negative then c is a local maximum, if f''(c) is positive then c is a local minimum, and if f''(c) equals zero the test is inconclusive.",
              "A worked optimisation shows the method. A rectangular plot of fixed perimeter 100 metres is to enclose the maximum area. Let the sides be x and y; the constraint is 2x plus 2y equals 100, so y equals 50 minus x, and the area A equals x times (50 minus x) equals 50x minus x squared. Differentiating, dA/dx equals 50 minus 2x; setting to zero gives x equals 25 metres. The second derivative is minus 2, negative, confirming a maximum. The corresponding y is also 25 metres, so the rectangle of maximum area for a fixed perimeter is a square, with area 625 square metres.",
              "Points of inflection occur where the concavity changes, that is where f'' changes sign. A point with f''(x) equal to zero is a candidate but not automatically an inflection point; one must verify the sign change. For f(x) equals x cubed, f''(x) equals 6x, which changes sign at x equals zero, so the origin is an inflection point. For f(x) equals x to the fourth, f''(x) equals 12 x squared, which is non-negative on both sides of zero, so the origin is a minimum, not an inflection. Global extrema on a closed interval are found by comparing the values of f at all critical points inside and at the endpoints.",
            ],
            bullets: [
              "Critical points: f'(x)=0 or f'(x) undefined; only these can host local extrema.",
              "First derivative test: sign change of f' from + to - gives max, - to + gives min, no change gives neither.",
              "Second derivative test: f'(c)=0; f''(c)<0 => max, f''(c)>0 => min, f''(c)=0 => inconclusive.",
              "Inflection: f''(x) changes sign; f''(x)=0 alone is not enough.",
              "Worked: rectangle of perimeter 100 m has max area 625 m^2 when square (25 x 25).",
            ],
            table: {
              caption: "Derivative tests for extrema.",
              headers: ["Test", "Condition", "Conclusion"],
              rows: [
                ["First derivative", "f' changes + to - at c", "Local maximum at c"],
                ["First derivative", "f' changes - to + at c", "Local minimum at c"],
                ["Second derivative", "f'(c)=0, f''(c)<0", "Local maximum at c"],
                ["Second derivative", "f'(c)=0, f''(c)>0", "Local minimum at c"],
                ["Second derivative", "f'(c)=0, f''(c)=0", "Inconclusive; use first test"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Classifying a critical point",
              caption:
                "First and second derivative tests agree when f''(c) != 0.",
              axes: { x: "Sign of f''(c)", y: "Sign change of f'" },
              quadrants: [
                { label: "Maximum", note: "f' + to -, f'' < 0" },
                { label: "Minimum", note: "f' - to +, f'' > 0" },
                { label: "Inconclusive", note: "f'' = 0, use first test" },
                { label: "Not extremum", note: "no sign change in f'" },
              ],
            },
            callout: {
              type: "tip",
              title: "Set up before differentiating",
              body: "For word problems on maxima/minima, always write the constraint, express the objective in one variable, then differentiate. RGPV awards marks for the setup even if the arithmetic slips.",
            },
            keyTerms: [
              { term: "Local maximum", definition: "A point c where f(c) >= f(x) for all x in some neighbourhood of c." },
              { term: "Critical point", definition: "A point where f'(x)=0 or f'(x) does not exist; the only candidates for local extrema." },
              { term: "Point of inflection", definition: "A point where the concavity of f changes, detected by a sign change of f''." },
            ],
            examQuestions: [
              {
                q: "Find the dimensions of the rectangle of maximum area that can be enclosed by a fence of length 100 m. Use the second derivative test to confirm the maximum.",
                marks: 7,
                outline: [
                  "Let sides be x and y; constraint 2x + 2y = 100, so y = 50 - x.",
                  "Write area A = x(50 - x) = 50x - x^2.",
                  "Differentiate: dA/dx = 50 - 2x; set to zero => x = 25.",
                  "Compute y = 50 - 25 = 25; the rectangle is a square.",
                  "Second derivative: d^2A/dx^2 = -2 < 0, confirming maximum.",
                  "Maximum area = 25 * 25 = 625 square metres.",
                  "State the dimensions: 25 m by 25 m.",
                ],
              },
              {
                q: "Find the local extrema of f(x) = x^3 - 3x + 2 and classify each.",
                marks: 3,
              },
              {
                q: "Define a point of inflection and give one example.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Curvature and radius of curvature",
            body: [
              "Curvature measures how sharply a plane curve bends at a point. If the curve is given explicitly as y equals f of x, the curvature kappa at a point is given by the absolute value of the second derivative divided by the quantity one plus the first derivative squared raised to the three-halves power: kappa equals |y double prime| divided by (1 plus y prime squared) to the power three halves. The radius of curvature rho is the reciprocal of the curvature, rho equals one over kappa, the radius of the circle that best fits the curve at that point. A straight line has zero curvature and infinite radius; a small circle has large curvature and small radius.",
              "For curves given in parametric form x equals x of t, y equals y of t, the curvature formula generalises to kappa equals |x prime y double prime minus y prime x double prime| divided by (x prime squared plus y prime squared) to the power three halves. For the polar curve r equals r of theta, with x equals r cos theta and y equals r sin theta, the formula becomes kappa equals |r squared plus 2 times r prime squared minus r times r double prime| divided by (r squared plus r prime squared) to the power three halves. The centre of curvature lies along the normal at distance rho from the point.",
              "A worked example for the parabola y squared equals 4 a x illustrates the cartesian formula. Differentiating implicitly gives 2 y y prime equals 4 a, so y prime equals 2 a over y, and y double prime equals minus 2 a times y prime over y squared, simplifying to minus 4 a squared over y cubed. At the vertex the formula is indeterminate, so evaluate at the point (a, 2a): y prime equals 1, y double prime equals minus 1 over (2a). The curvature kappa equals (1 over 2a) divided by (1 plus 1) to the three-halves, which is 1 over (2a times 2 times sqrt(2)). The radius of curvature at (a, 2a) is therefore 4 a times sqrt(2).",
            ],
            bullets: [
              "Curvature kappa = |y''| / (1 + y'^2)^(3/2) for explicit y = f(x).",
              "Radius of curvature rho = 1 / kappa; large rho means nearly straight.",
              "Parametric: kappa = |x'y'' - y'x''| / (x'^2 + y'^2)^(3/2).",
              "Polar: kappa = |r^2 + 2(r')^2 - r r''| / (r^2 + (r')^2)^(3/2).",
              "Worked: at (a, 2a) on y^2 = 4ax, rho = 4a sqrt(2).",
            ],
            table: {
              caption: "Curvature formulas by curve type.",
              headers: ["Curve form", "Curvature kappa", "Example use"],
              rows: [
                ["Explicit y = f(x)", "|y''| / (1 + y'^2)^(3/2)", "y = x^2 at x=1"],
                ["Parametric x(t), y(t)", "|x'y'' - y'x''| / (x'^2 + y'^2)^(3/2)", "x=t^2, y=2t at t=1"],
                ["Polar r = r(theta)", "|r^2 + 2(r')^2 - r r''| / (r^2 + (r')^2)^(3/2)", "r = a(1+cos theta)"],
                ["Cartesian implicit", "convert to y = f(x) or parametric", "y^2 = 4ax at (a, 2a)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Three routes to the radius of curvature",
              caption:
                "Pick the formula that matches how the curve is given.",
              steps: [
                { label: "Explicit y = f(x)", note: "kappa = |y''| / (1 + y'^2)^(3/2)" },
                { label: "Parametric x(t), y(t)", note: "use the parametric formula" },
                { label: "Polar r = r(theta)", note: "use the polar formula" },
                { label: "Take reciprocal", note: "rho = 1 / kappa" },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorise three formulas",
              body: "Memorise three formulas: cartesian, parametric, polar. RGPV usually asks 'find the radius of curvature at a given point', so practise implicit differentiation for curves like y^2 = 4ax before the exam.",
            },
            keyTerms: [
              { term: "Curvature", definition: "The rate of change of the tangent angle with respect to arc length; measures how sharply a curve bends." },
              { term: "Radius of curvature", definition: "The reciprocal of curvature; the radius of the osculating circle at a point." },
              { term: "Osculating circle", definition: "The circle that best fits the curve at a point, with radius equal to the radius of curvature." },
            ],
            examQuestions: [
              {
                q: "State the formula for the radius of curvature of a curve y = f(x). Find the radius of curvature of the parabola y^2 = 4ax at the point (a, 2a).",
                marks: 7,
                outline: [
                  "State kappa = |y''| / (1 + y'^2)^(3/2) and rho = 1/kappa.",
                  "For y^2 = 4ax differentiate implicitly: 2y y' = 4a, so y' = 2a/y.",
                  "Differentiate again: y'' = -2a y' / y^2 = -4a^2 / y^3.",
                  "At (a, 2a): y' = 2a/(2a) = 1, y'' = -4a^2/(8a^3) = -1/(2a).",
                  "Compute kappa = (1/(2a)) / (1 + 1)^(3/2) = (1/(2a)) / (2*sqrt(2)).",
                  "So rho = 1/kappa = 4a*sqrt(2).",
                  "Conclude the radius of curvature at (a, 2a) is 4a sqrt(2).",
                ],
              },
              {
                q: "Find the curvature of y = e^x at x = 0.",
                marks: 3,
              },
              {
                q: "Write the parametric formula for curvature.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // =========================================================================
    // UNIT II - MULTIVARIABLE CALCULUS
    // =========================================================================
    {
      number: 2,
      roman: "II",
      title: "Multivariable Calculus",
      summary:
        "Functions of two and more variables, partial derivatives with Clairaut's theorem, Euler's theorem on homogeneous functions, Jacobians and the test for functional dependence, and constrained extrema via Lagrange multipliers.",
      chapter: {
        number: "02",
        title: "Multivariable Calculus",
        intro:
          "Unit II extends calculus to several variables: functions whose graphs are surfaces, partial derivatives and Clairaut's equality of mixed partials, Euler's identity for homogeneous functions, the Jacobian determinant that measures how transformations stretch area and detects functional dependence, and Lagrange multipliers that solve constrained optimisation problems.",
        inOneBreath:
          "A function of two variables z = f(x,y) has a surface graph; the limit at (a,b) exists only if every path agrees; partial derivatives df/dx and df/dy treat the other variable as constant; Clairaut says f_xy = f_yx under continuity; a homogeneous function of degree n satisfies f(tx,ty) = t^n f(x,y) and Euler's identity x f_x + y f_y = n f; the Jacobian J(u,v/x,y) = u_x v_y - u_y v_x measures area scaling and vanishes iff u, v are functionally dependent; Lagrange multipliers solve extrema of f subject to g=0 via the system f_x = lambda g_x, f_y = lambda g_y, g = 0.",
        sections: [
          {
            number: "2.1",
            title: "Functions of several variables",
            body: [
              "A function of two real variables, written z equals f of x comma y, assigns a real number to each ordered pair (x, y) in some domain of the plane. Geometrically, the graph of such a function is a surface in three-dimensional space: for each point (x, y) in the domain, the point (x, y, f(x, y)) lies on the surface. Examples include the paraboloid z equals x squared plus y squared, the saddle z equals x squared minus y squared, and the plane z equals a x plus b y plus c. Functions of three or more variables extend the idea but cannot be graphed directly; their algebra, however, parallels the two-variable case.",
              "Limits and continuity generalise. The limit of f(x, y) as (x, y) approaches (a, b) is L if f(x, y) can be made arbitrarily close to L whenever (x, y) is sufficiently close to (a, b), regardless of the path of approach. A function is continuous at (a, b) if the limit equals f(a, b). Path dependence is the chief trap: a limit exists only if every path gives the same value. The standard counterexample is f(x, y) equals x y divided by (x squared plus y squared) near (0, 0), which gives 0 along the axes and one-half along the line y equals x, proving the limit does not exist.",
              "Partial derivatives measure the rate of change in each coordinate direction separately. The partial derivative of f with respect to x at (a, b) is the limit as h approaches zero of (f(a plus h, b) minus f(a, b)) divided by h, treating y as the constant b. Geometrically, it is the slope of the curve cut from the surface by the plane y equals b. A function is differentiable at a point if it can be well approximated there by a linear function; differentiability implies continuity, but the existence of partial derivatives alone does not.",
            ],
            bullets: [
              "Function of two variables: z = f(x, y); graph is a surface in 3-space.",
              "Limit at (a,b) exists only if all paths of approach give the same value.",
              "Continuity at (a,b): lim f(x,y) = f(a,b).",
              "Partial derivative df/dx: differentiate w.r.t. x holding y constant; slope of a plane cut.",
              "Counterexample: xy/(x^2+y^2) gives 0 on axes, 1/2 on y=x; limit at (0,0) does not exist.",
            ],
            table: {
              caption: "Examples of two-variable functions and their surfaces.",
              headers: ["Function", "Surface", "Feature at origin"],
              rows: [
                ["z = x^2 + y^2", "paraboloid (bowl)", "minimum at (0,0)"],
                ["z = x^2 - y^2", "saddle (hyperbolic)", "saddle point at (0,0)"],
                ["z = sqrt(1 - x^2 - y^2)", "upper hemisphere", "maximum at (0,0)"],
                ["z = a x + b y + c", "plane", "no extremum"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "From one variable to several",
              caption:
                "Each layer adds a dimension but keeps the same algebraic rules.",
              layers: [
                { label: "f: R -> R (one variable)", note: "graph is a curve" },
                { label: "f: R^2 -> R (two variables)", note: "graph is a surface" },
                { label: "f: R^3 -> R (three variables)", note: "no direct graph" },
                { label: "Vector field f: R^n -> R^n", note: "Unit V topic" },
              ],
            },
            callout: {
              type: "warning",
              title: "Every path must agree",
              body: "A limit in two variables exists only if EVERY path gives the same value. To disprove a limit, exhibit two paths with different values; to prove one, use the squeeze theorem or polar substitution r -> 0.",
            },
            keyTerms: [
              { term: "Function of several variables", definition: "A rule assigning a real number to each point in a subset of R^n; for n=2 the graph is a surface." },
              { term: "Partial derivative", definition: "The derivative of f with respect to one variable holding the others constant; measures rate of change along a coordinate direction." },
              { term: "Differentiability", definition: "The function admits a good linear approximation at a point; stronger than the existence of partial derivatives." },
            ],
            examQuestions: [
              {
                q: "Define a function of two variables and its graph. Define the limit and continuity of f(x, y) at (a, b). Show that the limit of xy/(x^2 + y^2) as (x,y) -> (0,0) does not exist.",
                marks: 7,
                outline: [
                  "Define z = f(x, y); graph as surface {(x,y,z) : z = f(x,y)} in R^3.",
                  "Define limit: lim f(x,y) = L as (x,y) -> (a,b) means f is arbitrarily close to L near (a,b).",
                  "Define continuity: lim = f(a,b).",
                  "State the path test: a limit exists iff all paths give the same value.",
                  "Path 1 (y = 0): xy/(x^2+y^2) = 0/x^2 = 0, limit 0.",
                  "Path 2 (y = x): xy/(x^2+y^2) = x^2/(2x^2) = 1/2, limit 1/2.",
                  "Two paths give different limits (0 != 1/2); conclude the limit does not exist.",
                ],
              },
              {
                q: "Find the partial derivatives of f(x, y) = x^2 y + sin(xy) at (1, 0).",
                marks: 3,
              },
              {
                q: "Define the graph of a function of two variables and give one example.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Partial derivatives and Clairaut's theorem",
            body: [
              "The partial derivative of f with respect to x, written as a partial f over partial x or f sub x, is obtained by differentiating f with respect to x while treating y as a constant. For f(x, y) equals x cubed y squared plus e to the x y, f sub x equals 3 x squared y squared plus y times e to the x y, and f sub y equals 2 x cubed y plus x times e to the x y. Higher-order partials are defined recursively: f sub x x is the partial of f sub x with respect to x, f sub y y similarly, and the mixed partials f sub x y and f sub y x are the cross derivatives.",
              "Clairaut's theorem states that if the mixed partial derivatives f sub x y and f sub y x are continuous on an open set, then they are equal there. This collapses the four second-order partials into three distinct ones: f sub x x, f sub y y, and f sub x y equals f sub y x. The theorem is the working rule that lets engineers differentiate in any convenient order. For f(x, y) equals x squared sine y plus y cubed, f sub x equals 2x sine y, f sub x y equals 2x cosine y, f sub y equals x squared cosine y plus 3 y squared, and f sub y x equals 2x cosine y; the two mixed partials agree as Clairaut promises.",
              "The total differential captures how f changes when both variables change. For small increments dx and dy, the change in f is approximately df equals f sub x dx plus f sub y dy, an approximation accurate to first order. The chain rule extends to several variables: if x and y depend on t, then df over dt equals f sub x times dx over dt plus f sub y times dy over dt. If x and y depend on two other variables u and v, the chain rule produces df over du equals f sub x times dx over du plus f sub y times dy over du, and similarly for v.",
            ],
            bullets: [
              "Partial derivative df/dx: differentiate w.r.t. x with y fixed; analogously df/dy.",
              "Higher-order: f_xx, f_yy, f_xy, f_yx; under continuity f_xy = f_yx (Clairaut).",
              "Clairaut theorem reduces four second-order partials to three distinct ones.",
              "Total differential: df = f_x dx + f_y dy for small changes.",
              "Chain rule: df/dt = f_x dx/dt + f_y dy/dt when x, y depend on t.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy computes partials and verifies Clairaut's equality.",
              code: `from sympy import symbols, diff, exp, sin
x, y = symbols('x y')
f = x**3 * y**2 + exp(x*y)
fx = diff(f, x)
fy = diff(f, y)
fxy = diff(f, x, y)
fyx = diff(f, y, x)
print("f_x =", fx)
print("f_y =", fy)
print("f_xy == f_yx ?", fxy == fyx)`,
            },
            diagram: {
              kind: "compare",
              title: "Two ways to differentiate f(x, y) = x^3 y^2 + e^(xy)",
              caption:
                "Treat the other variable as a constant throughout.",
              left: {
                heading: "Differentiate w.r.t. x (y constant)",
                items: [
                  "d/dx of x^3 y^2 = 3x^2 y^2",
                  "d/dx of e^(xy) = y e^(xy) (chain rule)",
                  "f_x = 3x^2 y^2 + y e^(xy)",
                  "Then differentiate f_x w.r.t. y for f_xy",
                ],
              },
              right: {
                heading: "Differentiate w.r.t. y (x constant)",
                items: [
                  "d/dy of x^3 y^2 = 2 x^3 y",
                  "d/dy of e^(xy) = x e^(xy) (chain rule)",
                  "f_y = 2 x^3 y + x e^(xy)",
                  "Then differentiate f_y w.r.t. x for f_yx",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Treat the other variable as constant",
              body: "When differentiating with respect to x, treat y as a constant - including in exponents. A common slip is differentiating e^(xy) as e^(xy) forgetting the y factor from the chain rule.",
            },
            keyTerms: [
              { term: "Partial derivative", definition: "The derivative of f with respect to one variable holding the others constant; written df/dx or f_x." },
              { term: "Clairaut's theorem", definition: "If the mixed partials f_xy and f_yx are continuous on an open set, they are equal there." },
              { term: "Total differential", definition: "The linear approximation df = f_x dx + f_y dy for small changes in x and y." },
            ],
            examQuestions: [
              {
                q: "Define partial derivatives of f(x, y). State and prove Clairaut's theorem on mixed partial derivatives. Verify it for f(x, y) = x^3 y^2 + e^(xy).",
                marks: 7,
                outline: [
                  "Define f_x = lim h->0 [f(x+h, y) - f(x, y)] / h; f_y analogously.",
                  "State Clairaut: if f_xy and f_yx are continuous on an open set, they are equal.",
                  "Sketch proof: apply the mean value theorem twice and take limits.",
                  "Compute f_x = 3x^2 y^2 + y e^(xy) and f_y = 2x^3 y + x e^(xy).",
                  "Differentiate f_x w.r.t. y: f_xy = 6x^2 y + e^(xy) + xy e^(xy).",
                  "Differentiate f_y w.r.t. x: f_yx = 6x^2 y + e^(xy) + xy e^(xy).",
                  "Conclude f_xy = f_yx, verifying Clairaut for this function.",
                ],
              },
              {
                q: "Find the total differential of f(x, y) = x^2 y + sin(y) at (1, pi/2).",
                marks: 3,
              },
              {
                q: "State the chain rule for df/dt when x and y are functions of t.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Euler's theorem on homogeneous functions",
            body: [
              "A function f(x, y) is homogeneous of degree n if for every positive scalar t, f of t x comma t y equals t to the n times f of x comma y. The degree n can be any real number: a linear function a x plus b y is degree 1, a quadratic x squared plus x y plus y squared is degree 2, and the function x y divided by (x plus y) is degree 1 because replacing x and y by t x and t y gives t squared x y divided by t times (x plus y), which equals t times the original. Many physical quantities are homogeneous: kinetic energy is degree 2 in velocity, gravitational potential is degree minus 1 in distance.",
              "Euler's theorem on homogeneous functions states that if f is homogeneous of degree n and differentiable, then x times f sub x plus y times f sub y equals n times f. For three variables the identity extends to x f sub x plus y f sub y plus z f sub z equals n f. The proof differentiates f of t x comma t y with respect to t in two ways: directly as n t to the n minus 1 times f, and by the chain rule as x f sub x plus y f sub y evaluated at (t x, t y); setting t equal to 1 yields the identity. Euler's theorem is the engine behind dimensional analysis and scaling laws in engineering.",
              "A worked example. Let f(x, y) equal x squared plus y squared plus x y, homogeneous of degree 2. The partials are f sub x equals 2 x plus y and f sub y equals 2 y plus x. Euler's identity gives x times (2 x plus y) plus y times (2 y plus x) equals 2 times (x squared plus y squared plus x y). The left side expands to 2 x squared plus x y plus 2 y squared plus x y, which is 2 x squared plus 2 y squared plus 2 x y, exactly twice f, confirming Euler for degree 2. A common variant is the homogeneous function u equals x to the a times y to the b of degree a plus b; Euler's identity reads x a u over x plus y b u over y equals (a plus b) u.",
            ],
            bullets: [
              "Homogeneous degree n: f(tx, ty) = t^n f(x, y) for every t > 0.",
              "Linear function is degree 1; quadratic is degree 2; inverse-distance is degree -1.",
              "Euler's theorem: x f_x + y f_y = n f (and the 3-variable analogue).",
              "Proof: differentiate f(tx, ty) w.r.t. t two ways; equate; set t = 1.",
              "Worked: for f = x^2 + y^2 + xy, x f_x + y f_y = 2f.",
            ],
            table: {
              caption: "Homogeneity check by substitution.",
              headers: ["Function", "f(tx, ty)", "Degree n", "Euler LHS x f_x + y f_y"],
              rows: [
                ["x^2 + y^2 + xy", "t^2 f", "2", "2 f"],
                ["ax + by", "t f", "1", "f"],
                ["x/(x+y)", "f", "0", "0"],
                ["1/sqrt(x^2+y^2)", "f / t", "-1", "-f"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Degrees of homogeneity",
              caption:
                "Each tier shows a representative function.",
              tiers: [
                { label: "Degree 2: x^2 + y^2 + xy", note: "kinetic energy-like" },
                { label: "Degree 1: ax + by", note: "linear, cost functions" },
                { label: "Degree 0: x/(x+y)", note: "ratio, intensive" },
                { label: "Degree -1: 1/sqrt(x^2+y^2)", note: "potential" },
              ],
            },
            callout: {
              type: "exam",
              title: "Verify homogeneity first",
              body: "Before applying Euler, verify homogeneity by substituting (tx, ty). RGPV often gives a non-homogeneous function to trap students who apply Euler blindly.",
            },
            keyTerms: [
              { term: "Homogeneous function", definition: "A function satisfying f(tx, ty) = t^n f(x, y) for some degree n and every positive t." },
              { term: "Euler's theorem", definition: "For a differentiable homogeneous function of degree n, x f_x + y f_y = n f." },
              { term: "Degree of homogeneity", definition: "The exponent n in f(tx, ty) = t^n f(x, y); can be any real number." },
            ],
            examQuestions: [
              {
                q: "Define a homogeneous function of degree n. State and prove Euler's theorem for functions of two variables. Verify Euler's theorem for f(x, y) = x^2 + y^2 + xy.",
                marks: 7,
                outline: [
                  "Define: f is homogeneous of degree n if f(tx, ty) = t^n f(x, y) for every t > 0.",
                  "State Euler: if f is differentiable and homogeneous of degree n, then x f_x + y f_y = n f.",
                  "Prove: differentiate f(tx, ty) = t^n f(x, y) w.r.t. t; LHS by chain rule = x f_x(tx,ty) + y f_y(tx,ty); RHS = n t^(n-1) f.",
                  "Set t = 1: x f_x + y f_y = n f, completing the proof.",
                  "Compute f_x = 2x + y, f_y = 2y + x for f = x^2 + y^2 + xy.",
                  "LHS = x(2x+y) + y(2y+x) = 2x^2 + 2xy + 2y^2 = 2(x^2 + y^2 + xy) = 2f.",
                  "Conclude Euler is verified since n = 2.",
                ],
              },
              {
                q: "Determine whether f(x, y) = xy/(x+y) is homogeneous and find its degree.",
                marks: 3,
              },
              {
                q: "State Euler's theorem for a function of three variables.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Jacobians and functional dependence",
            body: [
              "The Jacobian of two functions u equals u of x comma y and v equals v of x comma y with respect to x and y is the determinant of the matrix of partial derivatives, written as partial of (u, v) over partial of (x, y) and equal to the determinant of the 2 by 2 matrix with rows (u sub x, u sub y) and (v sub x, v sub y). The Jacobian measures how a small area element in the (x, y) plane stretches or shrinks under the transformation to (u, v): the absolute value of the Jacobian is the ratio of the area in (u, v) to the area in (x, y). For the polar transformation x equals r cos theta, y equals r sin theta, the Jacobian of (x, y) over (r, theta) equals r.",
              "The chain rule for Jacobians mirrors the chain rule for derivatives: if u and v depend on r and s, which in turn depend on x and y, then the Jacobian of (u, v) over (x, y) equals the Jacobian of (u, v) over (r, s) times the Jacobian of (r, s) over (x, y). A Jacobian vanishes identically when its rows (or columns) are dependent; this is the test for functional dependence. If u and v are functionally dependent, there exists a relation F of u comma v equals zero connecting them.",
              "A worked example. Let u equals x plus y and v equals x minus y. The Jacobian of (u, v) over (x, y) is the determinant of the matrix with rows (1, 1) and (1, minus 1), which equals 1 times minus 1 minus 1 times 1, that is minus 2. Its absolute value 2 means a unit square in (x, y) maps to a region of area 2 in (u, v). For the polar map u equals x squared plus y squared, v equals 2 x y, the Jacobian of (u, v) over (r, theta) can be computed directly or via the chain rule using x and y as intermediates, illustrating the multiplicative property.",
            ],
            bullets: [
              "Jacobian J(u,v / x,y) = det[[u_x, u_y],[v_x, v_y]]; 2x2 determinant.",
              "|J| is the local area scaling factor under the map (x,y) -> (u,v).",
              "Chain rule: J(u,v / x,y) = J(u,v / r,s) * J(r,s / x,y).",
              "J = 0 identically => functional dependence: a relation F(u,v) = 0 exists.",
              "Polar: J(x,y / r,theta) = r; area element dA = r dr d(theta).",
            ],
            table: {
              caption: "Jacobian worked examples.",
              headers: ["Transformation", "Jacobian J", "|J| (area ratio)", "Note"],
              rows: [
                ["u = x+y, v = x-y", "-2", "2", "linear map"],
                ["x = r cos(theta), y = r sin(theta)", "r", "r", "polar; dA = r dr d(theta)"],
                ["u = x^2+y^2, v = 2xy", "4(x^2-y^2)", "4|x^2-y^2|", "non-linear"],
                ["u = x, v = 2x", "0", "0", "functionally dependent"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Computing and interpreting a Jacobian",
              caption:
                "From partials to a determinant to a scaling factor.",
              steps: [
                { label: "Compute u_x, u_y, v_x, v_y", note: "four partials" },
                { label: "Form the 2x2 determinant", note: "J = u_x v_y - u_y v_x" },
                { label: "Take absolute value", note: "|J| = area ratio" },
                { label: "Check J = 0?", note: "yes => functional dependence" },
              ],
            },
            callout: {
              type: "exam",
              title: "J = 0 means functional dependence",
              body: "To test functional dependence, compute the Jacobian and check if it vanishes identically. If yes, eliminate variables to find the explicit relation F(u,v)=0.",
            },
            keyTerms: [
              { term: "Jacobian", definition: "The determinant of the matrix of first partial derivatives of a transformation; measures local area scaling." },
              { term: "Functional dependence", definition: "Two functions are dependent iff their Jacobian vanishes identically; a relation F(u,v)=0 then exists." },
              { term: "Area element", definition: "The infinitesimal area in the new coordinates equals the absolute value of the Jacobian times the original area element." },
            ],
            examQuestions: [
              {
                q: "Define the Jacobian of (u, v) with respect to (x, y). State and verify the chain rule for Jacobians. Compute J(u, v / x, y) for u = x + y, v = x - y.",
                marks: 7,
                outline: [
                  "Define J(u,v / x,y) = det[[u_x, u_y],[v_x, v_y]] = u_x v_y - u_y v_x.",
                  "State chain rule: J(u,v / x,y) = J(u,v / r,s) * J(r,s / x,y).",
                  "Verify with an example: take u = r+s, v = r-s and r = x+y, s = x-y.",
                  "Compute u_x = 1, u_y = 1, v_x = 1, v_y = -1 for the given u, v.",
                  "Form J = (1)(-1) - (1)(1) = -2.",
                  "Take absolute value |J| = 2; area doubles under this map.",
                  "Conclude with the geometric meaning: unit square in (x,y) maps to area 2 in (u,v).",
                ],
              },
              {
                q: "Show that u = x^2 - y^2 and v = 2xy are functionally independent by computing their Jacobian.",
                marks: 3,
              },
              {
                q: "Write the polar Jacobian J(x,y / r,theta) and state its value.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Lagrange multipliers",
            body: [
              "Many optimisation problems ask for the extrema of a function f of x comma y subject to a constraint g of x comma y equals zero. The method of Lagrange multipliers introduces a new variable lambda and forms the Lagrangian L equals f minus lambda times g. The necessary conditions for a constrained extremum are the three equations f sub x equals lambda g sub x, f sub y equals lambda g sub y, and g equals zero. Solving these simultaneously yields candidate points (x, y) and the multiplier lambda; the value of f at these candidates is compared to find the constrained maximum or minimum.",
              "Geometrically, at a constrained extremum the gradient of f is parallel to the gradient of g, that is the level curve of f just touches the constraint curve g equals zero. The multiplier lambda measures the rate of change of the optimal value of f with respect to the constraint level, and is therefore the shadow price in economics and the sensitivity in engineering design. The method extends to two or more constraints by introducing one multiplier per constraint and adding the corresponding equations.",
              "A worked example. Find the dimensions of the rectangle of maximum area inscribed in the circle x squared plus y squared equals 1. The objective is A equals 4 x y (one quarter times four), and the constraint is g equals x squared plus y squared minus 1 equals 0. The conditions are 4 y equals lambda times 2 x, 4 x equals lambda times 2 y, and x squared plus y squared equals 1. Dividing the first two gives y over x equals x over y, so x squared equals y squared, hence x equals y (in the first quadrant). Substituting gives 2 x squared equals 1, so x equals y equals 1 over sqrt(2). The maximum area is 4 times one-half, which equals 2 square units, achieved by the inscribed square of side sqrt(2).",
            ],
            bullets: [
              "Constrained extremum of f subject to g=0: form L = f - lambda g.",
              "Necessary conditions: f_x = lambda g_x, f_y = lambda g_y, g = 0.",
              "Geometric: grad f parallel to grad g at the optimum (level curve tangent to constraint).",
              "lambda = sensitivity of optimum to the constraint level (shadow price).",
              "Worked: max area of rectangle in unit circle x^2+y^2=1 is 2 (square of side sqrt(2)).",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy solves the Lagrange system for the rectangle-in-circle problem.",
              code: `from sympy import symbols, Eq, solve, sqrt
x, y, lam = symbols('x y lam', real=True)
f = 4*x*y
g = x**2 + y**2 - 1
eqs = [Eq(f.diff(x), lam*g.diff(x)),
       Eq(f.diff(y), lam*g.diff(y)),
       Eq(g, 0)]
sol = solve(eqs, [x, y, lam], dict=True)
print(sol)`,
            },
            diagram: {
              kind: "cycle",
              title: "The Lagrange multiplier workflow",
              caption:
                "Four steps repeated until all candidates are found.",
              steps: [
                { label: "Form L = f - lambda g", note: "augmented objective" },
                { label: "Differentiate: L_x = 0, L_y = 0", note: "two equations" },
                { label: "Add constraint g = 0", note: "third equation" },
                { label: "Solve simultaneously", note: "candidate (x, y, lambda)" },
                { label: "Evaluate f at each candidate", note: "pick max/min" },
              ],
            },
            callout: {
              type: "tip",
              title: "Divide to eliminate lambda",
              body: "Solve the three Lagrange equations by dividing two of them to eliminate lambda first. This trick solves most RGPV two-variable problems in under a minute.",
            },
            keyTerms: [
              { term: "Lagrange multiplier", definition: "A scalar lambda introduced to convert a constrained optimisation into unconstrained equations f_x = lambda g_x etc." },
              { term: "Lagrangian", definition: "The augmented function L = f - lambda g whose stationary points give constrained extrema." },
              { term: "Constraint", definition: "An equation g(x, y) = 0 that the variables must satisfy; one multiplier is introduced per constraint." },
            ],
            examQuestions: [
              {
                q: "State the method of Lagrange multipliers for finding the extrema of f(x, y) subject to g(x, y) = 0. Use it to find the rectangle of maximum area inscribed in the circle x^2 + y^2 = 1.",
                marks: 7,
                outline: [
                  "State the Lagrangian L = f - lambda g and the necessary conditions f_x = lambda g_x, f_y = lambda g_y, g = 0.",
                  "For the rectangle in the unit circle: f = 4xy (area), g = x^2 + y^2 - 1 (constraint).",
                  "Compute partials: f_x = 4y, f_y = 4x, g_x = 2x, g_y = 2y.",
                  "Form equations: 4y = 2 lambda x, 4x = 2 lambda y, x^2 + y^2 = 1.",
                  "Divide first by second: y/x = x/y => x^2 = y^2 => x = y (positive quadrant).",
                  "Substitute into constraint: 2x^2 = 1 => x = y = 1/sqrt(2).",
                  "Compute area: 4 * (1/sqrt(2)) * (1/sqrt(2)) = 4 * 1/2 = 2; conclude max area = 2.",
                ],
              },
              {
                q: "Find the minimum value of f(x, y) = x^2 + y^2 subject to x + y = 1.",
                marks: 3,
              },
              {
                q: "State the geometric interpretation of the Lagrange multiplier condition.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // =========================================================================
    // UNIT III - MATRICES AND LINEAR SYSTEMS
    // =========================================================================
    {
      number: 3,
      roman: "III",
      title: "Matrices and Linear Systems",
      summary:
        "Linear algebra for engineers: matrix rank via row echelon form, consistency of linear systems, matrix inversion by elementary transformations, eigenvalues and eigenvectors, and the Cayley-Hamilton theorem applied to compute inverses and powers.",
      chapter: {
        number: "03",
        title: "Matrices and Linear Systems",
        intro:
          "Unit III develops the linear algebra every engineer uses: rank by echelon reduction, consistency of Ax = b by comparing ranks of the coefficient and augmented matrices, inversion of a non-singular matrix by row-reducing [A | I] to [I | A^(-1)], eigenvalues from the characteristic equation det(A - lambda I) = 0, and the Cayley-Hamilton theorem that lets the characteristic polynomial compute inverses and powers.",
        inOneBreath:
          "Rank = non-zero rows in echelon form, found by elementary row operations; Ax = b is consistent iff rank(A) = rank([A|b]), with n - rank free variables when consistent; the inverse comes from row-reducing [A | I] to [I | A^(-1)], possible iff det(A) != 0; eigenvalues are roots of det(A - lambda I) = 0 with eigenvectors solving (A - lambda I)v = 0, and sum = trace, product = det; Cayley-Hamilton says p(A) = 0 for the characteristic polynomial p, which yields A^(-1) = -(1/c_0)[A^(n-1) + c_{n-1} A^(n-2) + ... + c_1 I] when c_0 = det(A) != 0.",
        sections: [
          {
            number: "3.1",
            title: "Rank of a matrix by echelon form",
            body: [
              "The rank of a matrix A, written rank of A, is the maximum number of linearly independent row vectors (or column vectors) in A; the row rank and column rank are always equal. Operationally, the rank is the number of non-zero rows in the row echelon form of A, obtained by elementary row operations: swapping two rows, multiplying a row by a non-zero scalar, and adding a multiple of one row to another. These operations do not change the row space, hence preserve rank. A matrix of size m by n has rank at most the minimum of m and n; a square matrix of order n with rank n is called non-singular or full rank.",
              "To compute the rank, reduce A to row echelon form: the leading non-zero entry of each row lies strictly to the right of the leading entry of the row above, and all-zero rows sit at the bottom. Count the non-zero rows. As an example, take the 3 by 3 matrix with rows (1, 2, 3), (2, 4, 6), and (1, 1, 1). The second row is twice the first, so it is a dependent row. Subtract 2 times row 1 from row 2 to get a zero row; the echelon form has two non-zero rows, so the rank is 2.",
              "A worked example with more steps. Consider the 3 by 4 matrix with rows (1, 2, 1, 3), (2, 3, 4, 7), and (1, 1, 3, 4). Subtract 2 times row 1 from row 2 to get (0, -1, 2, 1). Subtract row 1 from row 3 to get (0, -1, 2, 1). Now subtract the new row 2 from row 3 to get a zero row. The echelon form has two non-zero rows, so the rank is 2. The rank tells how many independent equations the matrix represents: a system with rank r has r independent equations, the rest being redundant.",
            ],
            bullets: [
              "Rank = number of linearly independent rows = number of non-zero rows in echelon form.",
              "Elementary row operations (swap, scale, add multiple) preserve rank.",
              "Rank <= min(m, n); a square matrix with rank n is non-singular.",
              "Row echelon form: leading entry of each row strictly right of the one above; zero rows at bottom.",
              "Worked: 3x4 matrix with dependent rows has rank 2.",
            ],
            table: {
              caption: "Rank computation by row echelon form.",
              headers: ["Step", "Operation", "Result matrix (rows)", "Non-zero rows"],
              rows: [
                ["0", "original", "(1,2,1,3),(2,3,4,7),(1,1,3,4)", "3"],
                ["1", "R2 -> R2 - 2 R1", "(1,2,1,3),(0,-1,2,1),(1,1,3,4)", "3"],
                ["2", "R3 -> R3 - R1", "(1,2,1,3),(0,-1,2,1),(0,-1,2,1)", "3"],
                ["3", "R3 -> R3 - R2", "(1,2,1,3),(0,-1,2,1),(0,0,0,0)", "2 = rank"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Reducing a matrix to echelon form",
              caption:
                "Three operations, one goal: staircase shape.",
              steps: [
                { label: "Write the matrix", note: "any size" },
                { label: "Pivot on (1,1)", note: "scale or swap if zero" },
                { label: "Eliminate below pivot", note: "R_i -> R_i - a_i1 R_1" },
                { label: "Move to next column", note: "repeat for submatrix" },
                { label: "Count non-zero rows", note: "that is the rank" },
              ],
            },
            callout: {
              type: "exam",
              title: "Label every row operation",
              body: "When computing rank, label each row operation as R2 -> R2 - 2 R1. RGPV awards method marks for the labelled steps even if the final count is wrong.",
            },
            keyTerms: [
              { term: "Rank of a matrix", definition: "The number of linearly independent rows (equivalently columns); equals the number of non-zero rows in echelon form." },
              { term: "Row echelon form", definition: "A matrix shape with leading entries stair-stepping to the right and zero rows at the bottom; reached by elementary row operations." },
              { term: "Elementary row operation", definition: "Swapping two rows, scaling a row by a non-zero scalar, or adding a multiple of one row to another; preserves rank." },
            ],
            examQuestions: [
              {
                q: "Define the rank of a matrix. Find the rank of the 3x4 matrix [[1,2,1,3],[2,3,4,7],[1,1,3,4]] by reducing it to row echelon form.",
                marks: 7,
                outline: [
                  "Define rank as the number of linearly independent rows = non-zero rows in echelon form.",
                  "State the three elementary row operations that preserve rank.",
                  "Apply R2 -> R2 - 2 R1 to get row 2 = (0, -1, 2, 1).",
                  "Apply R3 -> R3 - R1 to get row 3 = (0, -1, 2, 1).",
                  "Apply R3 -> R3 - R2 to get row 3 = (0, 0, 0, 0).",
                  "The echelon form has 2 non-zero rows.",
                  "Conclude the rank of the matrix is 2.",
                ],
              },
              {
                q: "Find the rank of [[1,2,3],[2,4,6],[1,1,1]].",
                marks: 3,
              },
              {
                q: "State the three elementary row operations and explain why they preserve rank.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Consistency of linear systems",
            body: [
              "A system of linear equations written in matrix form as A x equals b is consistent if it has at least one solution, and inconsistent otherwise. The consistency test compares the rank of the coefficient matrix A with the rank of the augmented matrix [A | b]. If rank of A equals rank of [A | b] equals r, the system is consistent; if rank of A is less than rank of [A | b], it is inconsistent (no solution). When consistent, the number of free variables is n minus r where n is the number of unknowns; if r equals n the solution is unique, and if r is less than n the system has infinitely many solutions parameterised by n minus r free variables.",
              "The geometric picture for three equations in three unknowns is helpful. Three planes in space can intersect in a point (unique solution, rank 3), a line (infinitely many solutions, rank 2 with one free variable), a plane (rank 1, two free variables), or not at all (inconsistent, ranks differ). Parallel but distinct planes give inconsistency; coincident planes give a plane of solutions. The augmented-matrix rank test detects all these cases algebraically without needing the geometric picture.",
              "A worked example. Consider the system x plus 2 y plus 3 z equals 6, 2 x plus 4 y plus 6 z equals 12, and x plus y plus z equals 3. The coefficient matrix has rows (1, 2, 3), (2, 4, 6), (1, 1, 1). Row 2 is twice row 1, so the coefficient matrix has rank 2. The augmented matrix has rows (1, 2, 3, 6), (2, 4, 6, 12), (1, 1, 1, 3); row 2 is also twice row 1 in the augmented form, so the augmented rank is also 2. Both ranks equal 2, with n equals 3 unknowns, so the system is consistent with infinitely many solutions and one free variable.",
            ],
            bullets: [
              "Consistent iff rank(A) = rank([A | b]); inconsistent if rank(A) < rank([A | b]).",
              "If rank = n: unique solution; if rank < n: infinitely many solutions with n-r free variables.",
              "Homogeneous Ax = 0 is always consistent (trivial solution x = 0).",
              "For n=3: point (rank 3), line (rank 2), plane (rank 1), or none (inconsistent).",
              "Worked: ranks 2 and 2 with n=3 => infinitely many solutions, one free variable.",
            ],
            table: {
              caption: "Consistency outcomes for n unknowns.",
              headers: ["rank(A)", "rank([A|b])", "Outcome", "Free variables"],
              rows: [
                ["r", "r = n", "unique solution", "0"],
                ["r", "r < n", "infinitely many", "n - r"],
                ["r", "r+1 (or more)", "inconsistent", "none"],
                ["r < n", "r (homogeneous)", "non-trivial solutions", "n - r"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Four cases for a 3x3 system",
              caption:
                "Rank of A vs rank of [A|b] decides the outcome.",
              axes: { x: "rank comparison", y: "number of unknowns n" },
              quadrants: [
                { label: "Unique solution", note: "rank(A) = rank([A|b]) = n" },
                { label: "Inconsistent", note: "rank(A) < rank([A|b])" },
                { label: "Infinitely many", note: "rank(A) = rank([A|b]) < n" },
                { label: "Homogeneous", note: "Ax=0 always consistent" },
              ],
            },
            callout: {
              type: "warning",
              title: "Reduce the augmented matrix",
              body: "Always reduce the AUGMENTED matrix, not just A. Computing rank of A alone misses inconsistency caused by a contradictory equation.",
            },
            keyTerms: [
              { term: "Consistent system", definition: "A linear system Ax = b that has at least one solution; rank(A) = rank([A|b])." },
              { term: "Augmented matrix", definition: "The matrix [A | b] formed by appending the column b to the coefficient matrix A." },
              { term: "Free variable", definition: "A variable not pinned by a pivot; its value is chosen freely, parameterising the infinite solution set." },
            ],
            examQuestions: [
              {
                q: "State the condition for consistency of the linear system Ax = b in terms of rank. Test the consistency of x + 2y + 3z = 6, 2x + 4y + 6z = 12, x + y + z = 3 and describe the solution.",
                marks: 7,
                outline: [
                  "State: system is consistent iff rank(A) = rank([A|b]); unique iff equal to n.",
                  "Form coefficient matrix A and augmented [A|b].",
                  "Reduce [A|b]: row 2 = (2,4,6,12) is 2 * row 1.",
                  "After R2 -> R2 - 2 R1: row 2 becomes zero.",
                  "R3 -> R3 - R1: row 3 = (0,-1,-2,-3).",
                  "Both A and [A|b] have rank 2; n = 3.",
                  "Conclude consistent with infinitely many solutions; one free variable.",
                ],
              },
              {
                q: "Determine whether x + y + z = 6, x + 2y + 3z = 10, x + 2y + 3z = 12 is consistent.",
                marks: 3,
              },
              {
                q: "How many free variables does a consistent system of 4 unknowns with rank 2 have?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Inverse by elementary transformations",
            body: [
              "The inverse of a square matrix A, written A inverse, is the unique matrix satisfying A times A inverse equals A inverse times A equals the identity. A matrix has an inverse if and only if it is non-singular, equivalently its determinant is non-zero or its rank equals its order. To compute the inverse by elementary transformations, augment A with the identity matrix to form the partitioned matrix [A | I], then apply elementary row operations to reduce the left block to the identity; the right block then automatically becomes A inverse. The method works because each row operation is multiplication by an elementary matrix E, so the product of these matrices is A inverse.",
              "The procedure has a built-in check: if at any stage the left block produces a zero row, A is singular and the inverse does not exist. Each step targets one column: scale the pivot row to make the diagonal entry 1, then eliminate the off-diagonal entries in that column by subtracting multiples of the pivot row from the rows above and below. After processing all columns, the left block is the identity and the right block is A inverse. The cost is roughly 2 n cubed over 3 operations for an n by n matrix, comparable to Gaussian elimination.",
              "A worked example for a 2 by 2 matrix. Take A with rows (1, 2) and (3, 4). Form [A | I] with rows (1, 2, 1, 0) and (3, 4, 0, 1). Subtract 3 times row 1 from row 2: rows become (1, 2, 1, 0) and (0, -2, -3, 1). Scale row 2 by minus one-half: (0, 1, 3/2, -1/2). Subtract 2 times row 2 from row 1: (1, 0, -2, 1). The right block is now A inverse with rows (-2, 1) and (3/2, -1/2). Verify: A times A inverse equals the identity.",
            ],
            bullets: [
              "A^(-1) exists iff det(A) != 0 iff rank(A) = n.",
              "Method: augment [A | I], row-reduce left to I; right becomes A^(-1).",
              "Zero row in left block => singular; no inverse.",
              "Each step targets a column: scale pivot to 1, eliminate off-diagonal entries.",
              "Worked: A = [[1,2],[3,4]] gives A^(-1) = [[-2,1],[3/2,-1/2]].",
            ],
            table: {
              caption: "Row reduction for A = [[1,2],[3,4]].",
              headers: ["Step", "Operation", "Left block", "Right block"],
              rows: [
                ["0", "start", "[[1,2],[3,4]]", "[[1,0],[0,1]]"],
                ["1", "R2 -> R2 - 3 R1", "[[1,2],[0,-2]]", "[[1,0],[-3,1]]"],
                ["2", "R2 -> -1/2 R2", "[[1,2],[0,1]]", "[[1,0],[3/2,-1/2]]"],
                ["3", "R1 -> R1 - 2 R2", "[[1,0],[0,1]]", "[[-2,1],[3/2,-1/2]]"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Inverting a matrix by row reduction",
              caption:
                "Reduce the left block; the right block follows.",
              stages: [
                { label: "Form [A | I]", note: "augment with identity" },
                { label: "Scale pivot to 1", note: "for each column" },
                { label: "Eliminate off-diagonal", note: "zero out column" },
                { label: "Repeat for all columns", note: "n iterations" },
                { label: "Read off A^(-1)", note: "right block" },
              ],
            },
            callout: {
              type: "tip",
              title: "Verify by multiplication",
              body: "Always verify by multiplying A times the computed inverse. Two multiplications catch arithmetic slips that cost marks.",
            },
            keyTerms: [
              { term: "Inverse matrix", definition: "The matrix A^(-1) satisfying A A^(-1) = A^(-1) A = I; exists iff A is non-singular." },
              { term: "Elementary transformation", definition: "A row operation (swap, scale, or add multiple) viewed as multiplication by an elementary matrix." },
              { term: "Augmented reduction", definition: "Forming [A | I] and row-reducing the left block to I; the right block becomes A^(-1)." },
            ],
            examQuestions: [
              {
                q: "Explain how to find the inverse of a matrix by elementary row transformations. Find the inverse of [[1,2],[3,4]] and verify.",
                marks: 7,
                outline: [
                  "State: augment [A | I]; row-reduce left to I; right becomes A^(-1).",
                  "Form [A | I] = [[1,2,1,0],[3,4,0,1]].",
                  "Apply R2 -> R2 - 3 R1: row 2 becomes (0, -2, -3, 1).",
                  "Scale R2 -> -1/2 R2: row 2 becomes (0, 1, 3/2, -1/2).",
                  "Apply R1 -> R1 - 2 R2: row 1 becomes (1, 0, -2, 1).",
                  "Read off A^(-1) = [[-2, 1],[3/2, -1/2]].",
                  "Verify A A^(-1) = I: row 1 col 1 = 1*(-2) + 2*(3/2) = -2 + 3 = 1, etc.",
                ],
              },
              {
                q: "Find the inverse of [[2,1],[1,3]] by elementary row operations.",
                marks: 3,
              },
              {
                q: "State the condition for a square matrix to have an inverse.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Eigenvalues and eigenvectors",
            body: [
              "An eigenvalue of a square matrix A is a scalar lambda such that A v equals lambda v for some non-zero vector v called the eigenvector. Rearranging gives (A minus lambda I) v equals zero; for a non-trivial v to exist, the matrix A minus lambda I must be singular, so its determinant is zero. This gives the characteristic equation det of (A minus lambda I) equals zero, a polynomial in lambda whose roots are the eigenvalues. For each eigenvalue, the eigenvectors are the non-zero solutions of (A minus lambda I) v equals zero, found by row reduction.",
              "For a 2 by 2 matrix with rows (a, b) and (c, d), the characteristic equation is lambda squared minus (trace) lambda plus determinant equals zero, where trace is a plus d and determinant is a d minus b c. The two eigenvalues are lambda equals (trace plus or minus sqrt of trace squared minus 4 determinant) divided by 2. The sum of eigenvalues equals the trace and the product equals the determinant; these invariants are handy cross-checks. For larger matrices, the characteristic polynomial is computed by expansion along a row or column.",
              "A worked example. Take A with rows (2, 1) and (1, 2). The trace is 4 and the determinant is 3, so the characteristic equation is lambda squared minus 4 lambda plus 3 equals zero, with roots lambda equals 1 and lambda equals 3. For lambda equals 1, A minus I has rows (1, 1) and (1, 1); the eigenvector is any non-zero multiple of (1, minus 1). For lambda equals 3, A minus 3 I has rows (minus 1, 1) and (1, minus 1); the eigenvector is any non-zero multiple of (1, 1). Eigenvalues appear in vibrations, stability, principal stresses, and Google's PageRank.",
            ],
            bullets: [
              "Eigenvalue lambda and eigenvector v != 0 satisfy A v = lambda v.",
              "Characteristic equation: det(A - lambda I) = 0; roots are eigenvalues.",
              "For 2x2: lambda^2 - (trace) lambda + det = 0; sum = trace, product = det.",
              "Eigenvectors: solve (A - lambda I) v = 0 by row reduction.",
              "Worked: A = [[2,1],[1,2]] gives lambda = 1 (v = (1,-1)) and lambda = 3 (v = (1,1)).",
            ],
            table: {
              caption: "Eigenpairs for A = [[2,1],[1,2]].",
              headers: ["Eigenvalue", "A - lambda I", "Eigenvector equation", "Eigenvector"],
              rows: [
                ["1", "[[1,1],[1,1]]", "x + y = 0", "(1, -1)"],
                ["3", "[[-1,1],[1,-1]]", "-x + y = 0", "(1, 1)"],
                ["Check: sum", "1 + 3 = 4 = trace", "\u2014", "\u2014"],
                ["Check: product", "1 * 3 = 3 = det", "\u2014", "\u2014"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two eigenvalues of A = [[2,1],[1,2]]",
              caption:
                "Each eigenvalue yields its own eigenvector direction.",
              left: {
                heading: "lambda = 1",
                items: [
                  "A - I = [[1,1],[1,1]]",
                  "Row reduce: row 2 = row 1",
                  "Equation: x + y = 0",
                  "Eigenvector: (1, -1) or any multiple",
                ],
              },
              right: {
                heading: "lambda = 3",
                items: [
                  "A - 3I = [[-1,1],[1,-1]]",
                  "Row reduce: row 2 = -row 1",
                  "Equation: -x + y = 0",
                  "Eigenvector: (1, 1) or any multiple",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Cross-check with trace and det",
              body: "For a 2x2 matrix, always cross-check: sum of eigenvalues = trace, product = determinant. If your roots don't match, recompute the polynomial.",
            },
            keyTerms: [
              { term: "Eigenvalue", definition: "A scalar lambda such that A v = lambda v for some non-zero vector v." },
              { term: "Eigenvector", definition: "A non-zero vector v satisfying A v = lambda v for some scalar lambda." },
              { term: "Characteristic equation", definition: "det(A - lambda I) = 0; a polynomial whose roots are the eigenvalues of A." },
            ],
            examQuestions: [
              {
                q: "Define eigenvalue and eigenvector. Find the eigenvalues and eigenvectors of the matrix [[2,1],[1,2]].",
                marks: 7,
                outline: [
                  "Define eigenvalue lambda and eigenvector v != 0 via A v = lambda v.",
                  "Form characteristic equation det(A - lambda I) = 0.",
                  "For A = [[2,1],[1,2]]: trace = 4, det = 3; equation lambda^2 - 4 lambda + 3 = 0.",
                  "Solve: (lambda - 1)(lambda - 3) = 0; eigenvalues 1 and 3.",
                  "For lambda = 1: (A - I) = [[1,1],[1,1]]; eigenvector (1, -1).",
                  "For lambda = 3: (A - 3I) = [[-1,1],[1,-1]]; eigenvector (1, 1).",
                  "Verify: sum 4 = trace, product 3 = det.",
                ],
              },
              {
                q: "Find the eigenvalues of [[3,1],[2,4]].",
                marks: 3,
              },
              {
                q: "State two properties relating eigenvalues to the trace and determinant.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Cayley-Hamilton theorem",
            body: [
              "The Cayley-Hamilton theorem states that every square matrix satisfies its own characteristic equation. If the characteristic polynomial of A is p of lambda equals lambda to the n plus c sub n minus 1 lambda to the n minus 1 plus ... plus c sub 0, then p of A equals A to the n plus c sub n minus 1 A to the n minus 1 plus ... plus c sub 0 I equals the zero matrix. The theorem turns a polynomial identity in scalars into a matrix identity, and its main application is computing the inverse and powers of a matrix without direct expansion.",
              "To find A inverse, write the characteristic equation and multiply through by A inverse: A to the n minus 1 plus c sub n minus 1 A to the n minus 2 plus ... plus c sub 1 I plus c sub 0 A inverse equals zero. Solve for A inverse: A inverse equals minus one over c sub 0 times the quantity A to the n minus 1 plus c sub n minus 1 A to the n minus 2 plus ... plus c sub 1 I. This requires c sub 0 equals det of A to be non-zero, which is the same condition as A being non-singular. Higher powers A to the k for k at least n can also be reduced using the characteristic equation.",
              "A worked example. Take A with rows (1, 2) and (3, 4). The characteristic equation is lambda squared minus 5 lambda minus 2 equals zero (trace 5, determinant minus 2). By Cayley-Hamilton, A squared minus 5 A minus 2 I equals the zero matrix. Solving for A inverse: A inverse equals (1/2) times (A minus 5 I), which equals (1/2) times the matrix with rows (1 minus 5, 2) and (3, 4 minus 5), that is (1/2) times ((minus 4, 2), (3, minus 1)), giving A inverse with rows (minus 2, 1) and (3/2, minus 1/2). This matches the direct computation in section 3.3.",
            ],
            bullets: [
              "Cayley-Hamilton: every square matrix satisfies its own characteristic equation p(A) = 0.",
              "Characteristic polynomial p(lambda) = lambda^n + c_{n-1} lambda^{n-1} + ... + c_0.",
              "A^(-1) = -(1/c_0) [A^{n-1} + c_{n-1} A^{n-2} + ... + c_1 I]; requires c_0 = det(A) != 0.",
              "Higher powers A^k (k >= n) reduce via the characteristic equation.",
              "Worked: A = [[1,2],[3,4]], p = lambda^2 - 5 lambda - 2; A^(-1) = (A - 5I)/2.",
            ],
            codeExample: {
              language: "python",
              caption: "Cayley-Hamilton gives the inverse in one line.",
              code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
# characteristic polynomial: lambda^2 - 5 lambda - 2 = 0
# so A^2 = 5 A + 2 I, and A^(-1) = (A - 5 I) / 2
I = np.eye(2)
A_inv = (A - 5 * I) / 2
print("A inverse via CH:")
print(A_inv)
print("Check A @ A_inv:")
print(A @ A_inv)`,
            },
            diagram: {
              kind: "layers",
              title: "From characteristic equation to matrix identity",
              caption:
                "Each layer is one application of Cayley-Hamilton.",
              layers: [
                { label: "p(lambda) = det(A - lambda I)", note: "scalar polynomial" },
                { label: "p(A) = 0", note: "matrix identity (CH)" },
                { label: "Solve for A^(-1)", note: "requires c_0 != 0" },
                { label: "Reduce A^k for k >= n", note: "powers" },
              ],
            },
            callout: {
              type: "exam",
              title: "Plug A back in to verify",
              body: "After computing the characteristic equation, plug A back in to verify p(A) = 0. This two-minute check catches most algebraic slips and earns full marks for the Cayley-Hamilton statement.",
            },
            keyTerms: [
              { term: "Cayley-Hamilton theorem", definition: "Every square matrix satisfies its own characteristic equation p(A) = 0." },
              { term: "Characteristic polynomial", definition: "p(lambda) = det(A - lambda I); its roots are the eigenvalues of A." },
              { term: "Matrix inverse via CH", definition: "A^(-1) = -(1/c_0)[A^{n-1} + c_{n-1} A^{n-2} + ... + c_1 I] when c_0 != 0." },
            ],
            examQuestions: [
              {
                q: "State and prove the Cayley-Hamilton theorem for a 2x2 matrix. Use it to find the inverse of A = [[1,2],[3,4]].",
                marks: 7,
                outline: [
                  "State: every square matrix satisfies its own characteristic equation p(A) = 0.",
                  "For 2x2: characteristic p(lambda) = lambda^2 - (trace) lambda + det.",
                  "For A = [[1,2],[3,4]]: trace = 5, det = -2; p(lambda) = lambda^2 - 5 lambda - 2.",
                  "By Cayley-Hamilton: A^2 - 5 A - 2 I = 0.",
                  "Multiply by A^(-1): A - 5 I - 2 A^(-1) = 0.",
                  "Solve: A^(-1) = (A - 5 I) / 2.",
                  "Substitute: A^(-1) = [[-2, 1],[3/2, -1/2]].",
                ],
              },
              {
                q: "Verify Cayley-Hamilton for A = [[1,2],[3,4]] by direct computation of A^2.",
                marks: 3,
              },
              {
                q: "Express A^(-1) in terms of A and the characteristic coefficients.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // =========================================================================
    // UNIT IV - MULTIPLE INTEGRALS
    // =========================================================================
    {
      number: 4,
      roman: "IV",
      title: "Multiple Integrals",
      summary:
        "Multiple integrals: double integrals over cartesian regions with order-changing, polar coordinates with the Jacobian factor r, triple integrals over volumes including the tetrahedron shortcut, and the beta and gamma functions with their connecting identity.",
      chapter: {
        number: "04",
        title: "Multiple Integrals",
        intro:
          "Unit IV generalises integration to higher dimensions: double integrals over rectangular and non-rectangular regions evaluated as iterated integrals, the technique of changing the order of integration by re-sketching the region, polar coordinates for circular regions where dA becomes r dr d(theta), triple integrals over solids, and the special functions beta and gamma linked by B(m,n) = gamma(m) gamma(n) / gamma(m+n).",
        inOneBreath:
          "A double integral over R is an iterated integral with inner limits depending on the outer variable; Fubini's theorem allows either order on a rectangle; changing order requires recovering the region from the limits, sketching it, and re-expressing with roles swapped; polar coordinates x = r cos(theta), y = r sin(theta) give dA = r dr d(theta) with the extra factor r being the Jacobian; triple integrals extend to volumes, with the tetrahedron bounded by x/a + y/b + z/c = 1 having volume a*b*c/6; the beta function B(m,n) = int_0^1 x^(m-1) (1-x)^(n-1) dx and gamma function gamma(n) = int_0^inf x^(n-1) e^(-x) dx are linked by B(m,n) = gamma(m) gamma(n) / gamma(m+n), with gamma(n) = (n-1)! for integer n and gamma(1/2) = sqrt(pi).",
        sections: [
          {
            number: "4.1",
            title: "Double integrals in cartesian coordinates",
            body: [
              "The double integral of a function f of x comma y over a region R in the plane is the limit of a Riemann sum over finer and finer partitions of R. Written as the integral over R of f dA, it generalises the single integral to two dimensions and computes the volume under the surface z equals f of x comma y over the region R. For a rectangular region with x from a to b and y from c to d, the integral is evaluated as an iterated integral: integrate f with respect to y from c to d first, treating x as constant, then integrate the result with respect to x from a to b. Fubini's theorem guarantees the two orders give the same value for continuous f on a rectangle.",
              "For non-rectangular regions, the limits of the inner integral depend on the outer variable. If R is bounded below by y equals g sub 1 of x and above by y equals g sub 2 of x for x between a and b, the integral becomes the integral from a to b of the integral from g sub 1 of x to g sub 2 of x of f of x comma y d y d x. The region must be sketched before the limits are written; the inner limits may be functions of the outer variable, but the outer limits are constants.",
              "A worked example. Compute the integral of x plus y over the triangle bounded by y equals 0, y equals x, and x equals 1. The region has 0 at most x at most 1 and 0 at most y at most x. The inner integral with respect to y is the integral from 0 to x of (x plus y) d y, which equals x times y plus y squared over 2 evaluated from 0 to x, giving x squared plus one-half x squared equals three-halves x squared. The outer integral with respect to x is the integral from 0 to 1 of three-halves x squared d x, which equals one-half x cubed evaluated from 0 to 1, giving one-half. So the volume under the surface z equals x plus y over the triangle is one-half cubic unit.",
            ],
            bullets: [
              "Double integral over R: limit of Riemann sums; gives volume under z = f(x,y).",
              "Rectangle [a,b] x [c,d]: integrate w.r.t. y then x (or x then y); Fubini's theorem.",
              "Non-rectangular: inner limits are functions of outer variable; outer limits are constants.",
              "Always sketch the region before writing limits.",
              "Worked: integral of x+y over triangle (0<=x<=1, 0<=y<=x) equals 1/2.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy evaluates the double integral over the triangle.",
              code: `from sympy import symbols, integrate
x, y = symbols('x y')
# Integrate (x + y) over the triangle
# bounded by y=0, y=x, x=1
expr = x + y
# Inner: integrate w.r.t. y from 0 to x
inner = integrate(expr, (y, 0, x))
print("inner =", inner)
# Outer: integrate w.r.t. x from 0 to 1
outer = integrate(inner, (x, 0, 1))
print("double integral =", outer)`,
            },
            diagram: {
              kind: "flow",
              title: "Evaluating a double integral over a non-rectangular region",
              caption:
                "From sketch to iterated integral.",
              steps: [
                { label: "Sketch the region R", note: "boundaries and corners" },
                { label: "Choose order dy dx or dx dy", note: "depends on shape" },
                { label: "Write inner limits as functions", note: "of outer variable" },
                { label: "Write outer limits as constants", note: "from sketch" },
                { label: "Integrate inner then outer", note: "two single integrations" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch before you integrate",
              body: "Sketch the region before writing limits. A wrong sketch gives wrong inner limits even with correct integration.",
            },
            keyTerms: [
              { term: "Double integral", definition: "The two-dimensional extension of the Riemann integral; computes volume under a surface." },
              { term: "Iterated integral", definition: "A double integral evaluated by integrating with respect to one variable at a time, holding the other constant." },
              { term: "Fubini's theorem", definition: "For continuous f on a rectangle, the two orders of iterated integration give the same value." },
            ],
            examQuestions: [
              {
                q: "Evaluate the double integral of (x + y) over the triangle bounded by y = 0, y = x and x = 1.",
                marks: 7,
                outline: [
                  "Sketch the triangle: vertices (0,0), (1,0), (1,1).",
                  "Set up limits: 0 <= x <= 1, 0 <= y <= x.",
                  "Write the iterated integral: int_0^1 int_0^x (x + y) dy dx.",
                  "Compute inner: int_0^x (x + y) dy = x*y + y^2/2 from 0 to x = x^2 + x^2/2 = (3/2) x^2.",
                  "Compute outer: int_0^1 (3/2) x^2 dx = (1/2) x^3 from 0 to 1 = 1/2.",
                  "State the value of the double integral as 1/2.",
                  "Note the volume interpretation: volume under z = x + y over the triangle.",
                ],
              },
              {
                q: "Evaluate int_0^1 int_0^2 x y dx dy.",
                marks: 3,
              },
              {
                q: "State Fubini's theorem for a rectangle.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Changing the order of integration",
            body: [
              "Sometimes an iterated integral is hard or impossible in one order but easy in the other. Changing the order of integration reverses the order of d y d x to d x d y (or vice versa), which requires rewriting the limits by re-examining the region of integration. The key step is to recover the region R from the original limits, sketch it, then re-express the same region with the roles of x and y swapped. The value of the integral is unchanged by Fubini's theorem, but the algebra may simplify dramatically.",
              "The procedure is mechanical once the sketch is right. From the limits 0 at most x at most 1 and x squared at most y at most x, the region is bounded by y equals x (upper), y equals x squared (lower), x equals 0 and x equals 1. The intersection points are (0, 0) and (1, 1). To reverse the order, treat y as the outer variable from 0 to 1; for each y, x ranges from the left curve x equals y to the right curve x equals square root of y. The reversed integral is the integral from 0 to 1 of the integral from y to square root of y of f d x d y.",
              "A worked example where the swap rescues the computation. Evaluate the integral from 0 to 1 of the integral from x to 1 of e to the y squared over y d y d x. The inner integral has no elementary antiderivative in x. Recover the region: x from 0 to 1, y from x to 1, which is the triangle above y equals x in the unit square. Reversing: y from 0 to 1, x from 0 to y. The reversed integral is the integral from 0 to 1 of the integral from 0 to y of e to the y squared over y d x d y, which simplifies after the inner integration to the integral from 0 to 1 of e to the y squared d y. Substituting u equals y squared gives the answer (e minus 1) over 2.",
            ],
            bullets: [
              "Change of order: reverse dy dx to dx dy (or vice versa); value unchanged.",
              "Step 1: recover the region from the original limits; sketch it.",
              "Step 2: re-express the region with outer/inner roles swapped.",
              "New inner limits are functions of the new outer variable.",
              "Worked: int_0^1 int_x^1 e^(y^2) dy dx reverses to int_0^1 int_0^y e^(y^2) dx dy = (e-1)/2.",
            ],
            table: {
              caption: "Reversing limits for the region bounded by y = x and y = x^2.",
              headers: ["Order", "Outer var", "Outer limits", "Inner limits", "Boundaries used"],
              rows: [
                ["dy dx (orig)", "x", "0 to 1", "x^2 to x", "y=x^2 (lower), y=x (upper)"],
                ["dx dy (rev)", "y", "0 to 1", "y to sqrt(y)", "x=y (left), x=sqrt(y) (right)"],
                ["Intersection", "\u2014", "(0,0), (1,1)", "\u2014", "solve x^2 = x"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Changing the order of integration",
              caption:
                "Five stages from old limits to new integral.",
              stages: [
                { label: "Read old limits", note: "e.g. 0<=x<=1, x^2<=y<=x" },
                { label: "Sketch the region R", note: "boundaries and corners" },
                { label: "Find intersection points", note: "solve boundary curves" },
                { label: "Re-express with roles swapped", note: "outer becomes inner" },
                { label: "Write new iterated integral", note: "verify value matches" },
              ],
            },
            callout: {
              type: "warning",
              title: "Re-sketch after reversing",
              body: "Always re-sketch the region after reversing the order. Writing new limits from the old ones without sketching is the most common cause of wrong answers.",
            },
            keyTerms: [
              { term: "Change of order", definition: "Reversing the order of integration in an iterated integral by re-expressing the region's limits." },
              { term: "Region of integration", definition: "The planar domain R over which the double integral is taken; must be sketched before swapping order." },
              { term: "Fubini's theorem (applied)", definition: "Guarantees the two orders give the same value, so the swap is legitimate for continuous f." },
            ],
            examQuestions: [
              {
                q: "Explain the procedure for changing the order of integration. Evaluate int_0^1 int_x^1 e^(y^2) dy dx by reversing the order.",
                marks: 7,
                outline: [
                  "State the procedure: recover region from limits, sketch, re-express with swapped roles.",
                  "Original limits: x from 0 to 1, y from x to 1.",
                  "Sketch the region: triangle with vertices (0,0), (1,1), (0,1) above y = x in unit square.",
                  "Re-express: y from 0 to 1, x from 0 to y.",
                  "Write reversed integral: int_0^1 int_0^y e^(y^2) dx dy.",
                  "Compute inner: int_0^y e^(y^2) dx = y * e^(y^2).",
                  "Compute outer: int_0^1 y e^(y^2) dy; substitute u = y^2, du = 2y dy; result (e - 1)/2.",
                ],
              },
              {
                q: "Sketch the region and reverse the order for int_0^1 int_{x^2}^x f(x,y) dy dx.",
                marks: 3,
              },
              {
                q: "State when changing the order of integration is useful.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Double integrals in polar coordinates",
            body: [
              "For regions with circular symmetry, polar coordinates simplify the integral dramatically. The substitution x equals r cos theta, y equals r sin theta converts the area element d A into r d r d theta; the extra factor r is the Jacobian of the polar transformation. A double integral over a circular region R becomes the integral over the corresponding polar region of f of r cos theta comma r sin theta times r d r d theta. The polar limits describe r as a function of theta (or vice versa); typical regions are disks, sectors, and annuli.",
              "For a disk of radius a centred at the origin, the polar limits are 0 at most r at most a and 0 at most theta at most 2 pi. For a sector between angles alpha and beta, theta ranges from alpha to beta. For an annulus with inner radius a and outer radius b, r ranges from a to b. For a cardioid r equals a times (1 plus cos theta), r ranges from 0 to a times (1 plus cos theta). Always include the Jacobian factor r in the integrand; forgetting it is the single most common mistake in polar integration.",
              "A worked example. Compute the integral of (x squared plus y squared) over the disk of radius a centred at the origin. In polar, x squared plus y squared equals r squared, and the area element is r d r d theta. The integral becomes the integral from 0 to 2 pi of the integral from 0 to a of r squared times r d r d theta, which is the integral from 0 to 2 pi of the integral from 0 to a of r cubed d r d theta. The inner integral is one-quarter a to the fourth; multiplying by 2 pi gives one-half pi a to the fourth. This is the moment of inertia of a uniform disk about its centre.",
            ],
            bullets: [
              "Polar substitution: x = r cos(theta), y = r sin(theta); area element dA = r dr d(theta).",
              "The extra factor r is the Jacobian of the polar map; never omit it.",
              "Disk radius a: 0 <= r <= a, 0 <= theta <= 2 pi.",
              "Sector angles alpha, beta: alpha <= theta <= beta; annulus a <= r <= b.",
              "Worked: int of (x^2+y^2) over disk radius a = (pi/2) a^4.",
            ],
            table: {
              caption: "Common polar regions and their limits.",
              headers: ["Region", "r limits", "theta limits", "Example"],
              rows: [
                ["Disk radius a", "0 to a", "0 to 2 pi", "x^2 + y^2 <= a^2"],
                ["Sector (alpha,beta)", "0 to a", "alpha to beta", "pie slice"],
                ["Annulus (a,b)", "a to b", "0 to 2 pi", "washer"],
                ["Cardioid r = a(1+cos theta)", "0 to a(1+cos theta)", "0 to 2 pi", "heart shape"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the coordinate system",
              caption:
                "Match the region's symmetry to the coordinates.",
              axes: { x: "Region shape", y: "Boundary equations" },
              quadrants: [
                { label: "Cartesian", note: "rectangles, triangles; x,y limits" },
                { label: "Polar", note: "disks, sectors; r, theta limits" },
                { label: "Both work", note: "squares; pick easier" },
                { label: "Neither", note: "try parametric or numeric" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never forget the Jacobian r",
              body: "The single most common polar-integration mistake is forgetting the Jacobian factor r. Always write dA = r dr d(theta), not dr d(theta).",
            },
            keyTerms: [
              { term: "Polar coordinates", definition: "The pair (r, theta) with x = r cos(theta), y = r sin(theta); natural for circular regions." },
              { term: "Jacobian factor", definition: "The factor r that appears in dA = r dr d(theta); comes from the determinant of the polar transformation." },
              { term: "Area element in polar", definition: "dA = r dr d(theta); the extra r accounts for the stretching of area at larger radius." },
            ],
            examQuestions: [
              {
                q: "Explain the polar substitution for double integrals and derive the area element dA = r dr d(theta). Evaluate the integral of (x^2 + y^2) over the disk x^2 + y^2 <= a^2.",
                marks: 7,
                outline: [
                  "State polar substitution: x = r cos(theta), y = r sin(theta).",
                  "Compute Jacobian: J = det[[cos(theta), -r sin(theta)],[sin(theta), r cos(theta)]] = r.",
                  "So dA = r dr d(theta); never forget the factor r.",
                  "Convert integrand: x^2 + y^2 = r^2.",
                  "Set limits: 0 <= r <= a, 0 <= theta <= 2 pi.",
                  "Write integral: int_0^{2pi} int_0^a r^2 * r dr d(theta) = int_0^{2pi} int_0^a r^3 dr d(theta).",
                  "Evaluate: int_0^a r^3 dr = a^4/4; multiply by 2 pi giving pi a^4 / 2.",
                ],
              },
              {
                q: "Evaluate the double integral of 1 over the disk of radius 2 using polar coordinates.",
                marks: 3,
              },
              {
                q: "Write the polar Jacobian and the area element.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Triple integrals",
            body: [
              "The triple integral of a function f of x comma y comma z over a solid region V in three-dimensional space generalises the double integral to volumes. Written as the integral over V of f d V, it computes the total mass of a solid with density f, or the volume of V when f equals 1. For a rectangular box with x from a to b, y from c to d, z from e to f, the integral evaluates as an iterated integral in any of the six possible orders; Fubini's theorem guarantees they all agree for continuous f. For general solids, the inner limits are functions of the two outer variables, and the outer limits are constants.",
              "The choice of order matters for non-rectangular solids. If V is bounded below by z equals g sub 1 of x comma y and above by z equals g sub 2 of x comma y, with (x, y) in a planar region R, the integral becomes the integral over R of the integral from g sub 1 to g sub 2 of f d z d A. The planar region R is then handled as in section 4.1. For solids with cylindrical or spherical symmetry, cylindrical coordinates (r, theta, z) or spherical coordinates (rho, theta, phi) simplify the limits and the Jacobian.",
              "A worked example. Compute the volume of the tetrahedron bounded by the coordinate planes and the plane x plus y plus z equals 1. The tetrahedron has 0 at most x at most 1, 0 at most y at most 1 minus x, and 0 at most z at most 1 minus x minus y. The volume is the triple integral of 1, which equals the integral from 0 to 1 of the integral from 0 to 1 minus x of the integral from 0 to 1 minus x minus y of d z d y d x. The inner integral is 1 minus x minus y; the middle integral is the integral from 0 to 1 minus x of (1 minus x minus y) d y, which equals (1 minus x) squared over 2; the outer integral is the integral from 0 to 1 of (1 minus x) squared over 2 d x, which equals 1 over 6. So the tetrahedron's volume is one-sixth.",
            ],
            bullets: [
              "Triple integral over V: generalises double integral to 3D; computes mass or volume.",
              "Rectangular box: iterated integral in any of six orders; Fubini's theorem.",
              "For z between g_1(x,y) and g_2(x,y): integrate dz first over planar region R.",
              "Cylindrical (r,theta,z) and spherical (rho,theta,phi) for symmetric solids.",
              "Worked: volume of tetrahedron bounded by x+y+z=1 and coordinate planes is 1/6.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy computes the tetrahedron volume.",
              code: `from sympy import symbols, integrate
x, y, z = symbols('x y z')
# Volume of tetrahedron bounded by
# the plane x + y + z = 1 and the coordinate planes
inner = integrate(1, (z, 0, 1 - x - y))
middle = integrate(inner, (y, 0, 1 - x))
outer = integrate(middle, (x, 0, 1))
print("tetrahedron volume =", outer)`,
            },
            diagram: {
              kind: "fork",
              title: "Choosing coordinates for a triple integral",
              caption:
                "Match the solid's symmetry to the coordinate system.",
              start: "Identify the solid V",
              branches: [
                { label: "Box / rectangular", outcome: "Use cartesian (x, y, z)", good: true },
                { label: "Cylinder / axisymmetric", outcome: "Use cylindrical (r, theta, z)", good: true },
                { label: "Sphere / cone", outcome: "Use spherical (rho, theta, phi)", good: true },
                { label: "Tetrahedron", outcome: "Use cartesian with linear limits", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Tetrahedron shortcut",
              body: "For tetrahedra bounded by x/a + y/b + z/c = 1, the volume is a*b*c/6. Memorise this shortcut for fast exam answers.",
            },
            keyTerms: [
              { term: "Triple integral", definition: "The three-dimensional extension of the Riemann integral; computes total mass or volume over a solid." },
              { term: "Iterated triple integral", definition: "Evaluation by integrating with respect to one variable at a time, with inner limits depending on outer variables." },
              { term: "Volume element", definition: "dV in cartesian is dx dy dz; in cylindrical r dr d(theta) dz; in spherical rho^2 sin(phi) d(rho) d(theta) d(phi)." },
            ],
            examQuestions: [
              {
                q: "Set up and evaluate the triple integral for the volume of the tetrahedron bounded by the coordinate planes and the plane x + y + z = 1.",
                marks: 7,
                outline: [
                  "Sketch the tetrahedron with vertices (0,0,0), (1,0,0), (0,1,0), (0,0,1).",
                  "Set limits: 0 <= x <= 1, 0 <= y <= 1 - x, 0 <= z <= 1 - x - y.",
                  "Write the iterated integral: int_0^1 int_0^{1-x} int_0^{1-x-y} dz dy dx.",
                  "Compute inner: int_0^{1-x-y} dz = 1 - x - y.",
                  "Compute middle: int_0^{1-x} (1 - x - y) dy = (1-x)^2 / 2.",
                  "Compute outer: int_0^1 (1-x)^2 / 2 dx = 1/6.",
                  "Conclude the volume of the tetrahedron is 1/6 cubic unit.",
                ],
              },
              {
                q: "Express the volume element in cylindrical and spherical coordinates.",
                marks: 3,
              },
              {
                q: "State Fubini's theorem for a rectangular box.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Beta and gamma functions",
            body: [
              "The beta function is defined as B of m comma n equals the integral from 0 to 1 of x to the m minus 1 times (1 minus x) to the n minus 1 d x, valid for m and n positive. The gamma function is defined as gamma of n equals the integral from 0 to infinity of x to the n minus 1 times e to the minus x d x, valid for n positive; it generalises the factorial since gamma of n equals (n minus 1) factorial when n is a positive integer. Both functions appear in probability, statistics, and engineering whenever integrals with power or exponential factors arise.",
              "The two functions are related by the identity B of m comma n equals gamma of m times gamma of n divided by gamma of m plus n. This identity connects the bounded beta integral with the unbounded gamma integral and lets one compute beta values from gamma values, which are tabulated. Useful special values include gamma of one-half equals square root of pi, gamma of 1 equals 1, gamma of n equals (n minus 1) factorial, and the recursion gamma of n equals (n minus 1) times gamma of n minus 1. The reflection formula gamma of n times gamma of 1 minus n equals pi divided by sine of n pi extends gamma to non-integer arguments.",
              "A worked example. Evaluate the integral from 0 to 1 of x squared times (1 minus x) cubed d x. This matches the beta form B of m comma n with m equals 3 and n equals 4, so the integral equals B of 3 comma 4 equals gamma of 3 times gamma of 4 divided by gamma of 7. Using gamma of n equals (n minus 1) factorial: gamma of 3 equals 2, gamma of 4 equals 6, gamma of 7 equals 720. The value is 12 divided by 720, which equals 1 over 60. The same answer is obtainable by direct polynomial expansion, but the beta-gamma route is faster and generalises to non-integer exponents.",
            ],
            bullets: [
              "Beta: B(m,n) = int_0^1 x^(m-1) (1-x)^(n-1) dx; valid for m, n > 0.",
              "Gamma: gamma(n) = int_0^inf x^(n-1) e^(-x) dx; gamma(n) = (n-1)! for integer n.",
              "Relation: B(m,n) = gamma(m) gamma(n) / gamma(m+n).",
              "gamma(1/2) = sqrt(pi); recursion gamma(n) = (n-1) gamma(n-1).",
              "Worked: int_0^1 x^2 (1-x)^3 dx = B(3,4) = 2! * 3! / 6! = 1/60.",
            ],
            table: {
              caption: "Special values and identities for beta and gamma.",
              headers: ["Identity", "Value", "Use"],
              rows: [
                ["gamma(1)", "1", "base case"],
                ["gamma(n), n integer", "(n-1)!", "factorial link"],
                ["gamma(1/2)", "sqrt(pi)", "Gaussian integrals"],
                ["gamma(n) recursion", "(n-1) gamma(n-1)", "reduce any n"],
                ["B(m,n) = gamma(m)gamma(n)/gamma(m+n)", "formula", "beta from gamma"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Beta vs gamma functions",
              caption:
                "Bounded beta, unbounded gamma - connected by one identity.",
              left: {
                heading: "Beta function",
                items: [
                  "B(m,n) = int_0^1 x^(m-1) (1-x)^(n-1) dx",
                  "Defined for m, n > 0",
                  "Symmetric: B(m,n) = B(n,m)",
                  "Used in probability densities on [0,1]",
                  "Linked to gamma by B(m,n) = gamma(m)gamma(n)/gamma(m+n)",
                ],
              },
              right: {
                heading: "Gamma function",
                items: [
                  "gamma(n) = int_0^inf x^(n-1) e^(-x) dx",
                  "Defined for n > 0",
                  "gamma(n) = (n-1)! for positive integer n",
                  "Recursion: gamma(n) = (n-1) gamma(n-1)",
                  "gamma(1/2) = sqrt(pi)",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Memorise two special values",
              body: "Memorise gamma(1/2) = sqrt(pi) and the recursion gamma(n) = (n-1) gamma(n-1). Together they solve almost every RGPV beta-gamma question in one minute.",
            },
            keyTerms: [
              { term: "Beta function", definition: "B(m,n) = int_0^1 x^(m-1) (1-x)^(n-1) dx; defined for m, n > 0." },
              { term: "Gamma function", definition: "gamma(n) = int_0^inf x^(n-1) e^(-x) dx; generalises factorial: gamma(n) = (n-1)! for positive integers." },
              { term: "Beta-gamma relation", definition: "B(m,n) = gamma(m) gamma(n) / gamma(m+n); connects the two integral functions." },
            ],
            examQuestions: [
              {
                q: "Define the beta and gamma functions. Prove that B(m,n) = gamma(m) gamma(n) / gamma(m+n). Evaluate int_0^1 x^2 (1-x)^3 dx.",
                marks: 7,
                outline: [
                  "Define B(m,n) = int_0^1 x^(m-1) (1-x)^(n-1) dx.",
                  "Define gamma(n) = int_0^inf x^(n-1) e^(-x) dx.",
                  "State the relation B(m,n) = gamma(m) gamma(n) / gamma(m+n).",
                  "Sketch proof: write both gamma integrals as a double integral over a quadrant; change variables to u = x + y, v = x/(x+y); separate the integrals.",
                  "Identify m = 3, n = 4 in the given integral.",
                  "Compute gamma(3) = 2! = 2, gamma(4) = 3! = 6, gamma(7) = 6! = 720.",
                  "Result: B(3,4) = 2 * 6 / 720 = 12/720 = 1/60.",
                ],
              },
              {
                q: "Evaluate gamma(5/2) using the recursion and gamma(1/2) = sqrt(pi).",
                marks: 3,
              },
              {
                q: "State the recursion formula for the gamma function.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // =========================================================================
    // UNIT V - VECTOR CALCULUS
    // =========================================================================
    {
      number: 5,
      roman: "V",
      title: "Vector Calculus",
      summary:
        "Vector calculus: gradient, divergence and curl of scalar and vector fields; the directional derivative as grad phi dot u; line integrals and conservative fields; Green's theorem in the plane; and the two integral theorems of Stokes and Gauss divergence.",
      chapter: {
        number: "05",
        title: "Vector Calculus",
        intro:
          "Unit V builds the vector calculus of fields: the gradient of a scalar field, the divergence and curl of a vector field with their physical meanings, the directional derivative as the projection of the gradient, line integrals along curves and the path-independence of conservative fields, Green's theorem relating a plane boundary integral to an interior double integral, and the two three-dimensional theorems of Stokes and Gauss divergence.",
        inOneBreath:
          "Gradient grad phi = (phi_x, phi_y, phi_z) is a vector pointing in the direction of greatest increase; divergence div F = P_x + Q_y + R_z is a scalar measuring source or sink strength; curl F = del x F is a vector measuring rotation; the directional derivative D_u phi = grad phi . u is maximum in the direction of grad phi; a line integral int_C F . dr depends only on endpoints when F is conservative (curl F = 0); Green's theorem int_C (P dx + Q dy) = int_R (Q_x - P_y) dA converts a boundary integral into an interior double integral; Stokes generalises Green to int_C F . dr = int_S (curl F) . dS; Gauss divergence int_S F . dS = int_V div F dV converts a closed-surface flux into a volume integral of divergence.",
        sections: [
          {
            number: "5.1",
            title: "Gradient, divergence and curl",
            body: [
              "The gradient of a scalar field phi of x comma y comma z is the vector field grad phi equals (partial phi over partial x) i hat plus (partial phi over partial y) j hat plus (partial phi over partial z) k hat. The gradient points in the direction of the greatest rate of increase of phi, and its magnitude is that maximum rate. The divergence of a vector field F equals P i hat plus Q j hat plus R k hat is the scalar div F equals partial P over partial x plus partial Q over partial y plus partial R over partial z; it measures the net outflow per unit volume at a point, positive for a source and negative for a sink.",
              "The curl of F is the vector curl F equals the determinant of the matrix with rows (i hat, j hat, k hat), (partial over partial x, partial over partial y, partial over partial z), and (P, Q, R), which expands to (partial R over partial y minus partial Q over partial z) i hat plus (partial P over partial z minus partial R over partial x) j hat plus (partial Q over partial x minus partial P over partial y) k hat. The curl measures the rotational or shearing tendency of the field at a point; a field with zero curl everywhere is called irrotational, and a field with zero divergence everywhere is called solenoidal.",
              "Physical interpretations are essential. The gradient of temperature gives the direction of heat flow; the gradient of pressure gives the force per unit volume in fluid mechanics. The divergence of the velocity field of a fluid is the rate at which volume expands or contracts; for an incompressible fluid it is zero. The curl of the velocity field is the vorticity, twice the angular velocity of a fluid element. Maxwell's equations are written compactly using div and curl of the electric and magnetic fields.",
            ],
            bullets: [
              "Gradient of scalar: grad phi = (phi_x, phi_y, phi_z); points in direction of greatest increase.",
              "Divergence of vector: div F = P_x + Q_y + R_z; net outflow per unit volume (source/sink).",
              "Curl of vector: curl F = (R_y - Q_z, P_z - R_x, Q_x - P_y); rotational tendency.",
              "Irrotational: curl F = 0 everywhere; solenoidal: div F = 0 everywhere.",
              "Physical: grad T gives heat flow direction; div velocity = 0 for incompressible flow; curl velocity = vorticity.",
            ],
            table: {
              caption: "The three operators and their physical meaning.",
              headers: ["Operator", "Input -> output", "Formula", "Physical meaning"],
              rows: [
                ["Gradient", "scalar -> vector", "grad phi = (phi_x, phi_y, phi_z)", "direction of greatest increase"],
                ["Divergence", "vector -> scalar", "div F = P_x + Q_y + R_z", "net outflow; source/sink"],
                ["Curl", "vector -> vector", "curl F = del x F", "rotation; vorticity"],
                ["Laplacian", "scalar -> scalar", "del^2 phi", "diffusion; equilibrium"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The three vector operators",
              caption:
                "Each layer is one operator with its input and output type.",
              layers: [
                { label: "Gradient: scalar -> vector", note: "grad phi = (phi_x, phi_y, phi_z)" },
                { label: "Divergence: vector -> scalar", note: "div F = P_x + Q_y + R_z" },
                { label: "Curl: vector -> vector", note: "curl F = del x F" },
                { label: "Laplacian: scalar -> scalar", note: "del^2 phi = phi_xx + phi_yy + phi_zz" },
              ],
            },
            callout: {
              type: "tip",
              title: "Learn the del notation",
              body: "Memorise the three formulas in del notation: grad phi = del phi, div F = del dot F, curl F = del x F. RGPV often writes them this way.",
            },
            keyTerms: [
              { term: "Gradient", definition: "The vector of partial derivatives of a scalar field; points in the direction of greatest rate of increase." },
              { term: "Divergence", definition: "The scalar sum of partial derivatives of a vector field's components; measures net outflow per unit volume." },
              { term: "Curl", definition: "The vector formed by the cross product of the del operator with a vector field; measures rotational tendency." },
            ],
            examQuestions: [
              {
                q: "Define gradient, divergence and curl. Compute grad phi, div F and curl F for phi = x^2 y z and F = (y, z, x).",
                marks: 7,
                outline: [
                  "Define grad phi = (phi_x, phi_y, phi_z), div F = P_x + Q_y + R_z, curl F = del x F.",
                  "For phi = x^2 y z: phi_x = 2 x y z, phi_y = x^2 z, phi_z = x^2 y.",
                  "So grad phi = (2 x y z, x^2 z, x^2 y).",
                  "For F = (y, z, x): P = y, Q = z, R = x.",
                  "div F = d/dx(y) + d/dy(z) + d/dz(x) = 0 + 0 + 0 = 0.",
                  "curl F = (dR/dy - dQ/dz, dP/dz - dR/dx, dQ/dx - dP/dy) = (0 - 0, 0 - 0, 0 - 1) = (0, 0, -1).",
                  "Conclude F is solenoidal (div = 0) but not irrotational (curl != 0).",
                ],
              },
              {
                q: "Show that the curl of a gradient is zero for any scalar field phi.",
                marks: 3,
              },
              {
                q: "State the physical meaning of divergence of a velocity field.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Directional derivative",
            body: [
              "The directional derivative of a scalar field phi at a point in the direction of a unit vector u equals the rate of change of phi along that direction. Computed as D sub u phi equals grad phi dot u, it is the projection of the gradient onto the direction u. The maximum directional derivative equals the magnitude of the gradient and occurs when u points in the direction of grad phi; the minimum is the negative of that magnitude, in the opposite direction. Along a level surface of phi, the directional derivative is zero because the gradient is normal to level surfaces.",
              "The angle between two surfaces is the angle between their normal vectors, which are the gradients. For two surfaces F of x comma y comma z equals 0 and G of x comma y comma z equals 0 intersecting along a curve, the angle between the surfaces at a point of intersection is the angle between grad F and grad G, computed by the dot product formula cos theta equals (grad F dot grad G) divided by (magnitude of grad F times magnitude of grad G). The tangent to the curve of intersection is the cross product of the two gradients.",
              "A worked example. Find the directional derivative of phi equals x squared y squared plus z squared at the point (1, 1, 1) in the direction of the vector (1, 2, 2). First compute grad phi equals (2 x y squared, 2 x squared y, 2 z), which at (1, 1, 1) is (2, 2, 2). The given direction vector has magnitude sqrt of (1 plus 4 plus 4) equals 3, so the unit vector u equals (1/3, 2/3, 2/3). The directional derivative is (2, 2, 2) dot (1/3, 2/3, 2/3) equals 2/3 plus 4/3 plus 4/3 equals 10/3. The maximum directional derivative at this point is the magnitude of grad phi, which is sqrt of 12 equals 2 sqrt of 3.",
            ],
            bullets: [
              "Directional derivative: D_u phi = grad phi . u, where u is a unit vector.",
              "Max value = |grad phi|, in direction of grad phi; min = -|grad phi|, opposite.",
              "Always normalise the direction vector to unit length before computing.",
              "Angle between two surfaces = angle between their gradients (normals).",
              "Worked: D_u(x^2 y^2 + z^2) at (1,1,1) along (1,2,2) = 10/3.",
            ],
            table: {
              caption: "Directional derivative worked example at (1,1,1).",
              headers: ["Quantity", "Expression", "Value"],
              rows: [
                ["phi", "x^2 y^2 + z^2", "\u2014"],
                ["grad phi at (1,1,1)", "(2 x y^2, 2 x^2 y, 2 z)", "(2, 2, 2)"],
                ["direction v", "(1, 2, 2)", "magnitude 3"],
                ["unit u", "v / 3", "(1/3, 2/3, 2/3)"],
                ["D_u phi", "grad phi . u", "10/3"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Computing a directional derivative",
              caption:
                "Three steps: gradient, normalise, dot product.",
              steps: [
                { label: "Compute grad phi at the point", note: "three partials" },
                { label: "Normalise direction vector", note: "u = v / |v|" },
                { label: "Take dot product", note: "D_u phi = grad phi . u" },
                { label: "Compare with |grad phi|", note: "maximum value" },
              ],
            },
            callout: {
              type: "warning",
              title: "Normalise the direction vector",
              body: "Always normalise the direction vector before taking the dot product. The directional derivative is undefined along a non-unit vector; using (1, 2, 2) directly gives 6, the wrong answer.",
            },
            keyTerms: [
              { term: "Directional derivative", definition: "The rate of change of a scalar field in the direction of a unit vector u; equals grad phi dot u." },
              { term: "Unit vector", definition: "A vector of length 1; obtained by dividing any non-zero vector by its magnitude." },
              { term: "Level surface", definition: "A surface on which phi is constant; the gradient is normal to it and the directional derivative along it is zero." },
            ],
            examQuestions: [
              {
                q: "Define the directional derivative of a scalar field phi in the direction of a unit vector u. Find the directional derivative of phi = x^2 y^2 + z^2 at (1, 1, 1) in the direction of (1, 2, 2).",
                marks: 7,
                outline: [
                  "Define D_u phi = grad phi . u for unit vector u.",
                  "Compute grad phi = (2 x y^2, 2 x^2 y, 2 z).",
                  "Evaluate at (1, 1, 1): grad phi = (2, 2, 2).",
                  "Compute |v| = sqrt(1 + 4 + 4) = 3 for v = (1, 2, 2).",
                  "Normalise: u = (1/3, 2/3, 2/3).",
                  "Take dot product: (2)(1/3) + (2)(2/3) + (2)(2/3) = 2/3 + 4/3 + 4/3 = 10/3.",
                  "State maximum directional derivative = |grad phi| = sqrt(12) = 2 sqrt(3).",
                ],
              },
              {
                q: "Find the maximum directional derivative of phi = x y z at (1, 2, 3).",
                marks: 3,
              },
              {
                q: "Define a level surface and state the value of the directional derivative along it.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Line integrals",
            body: [
              "A line integral of a vector field F along a curve C from point A to point B is the integral of the tangential component of F along the curve. Written as the integral over C of F dot d r, it equals the integral from t equals a to t equals b of F of r of t dot r prime of t d t, where r of t parametrises the curve. For a scalar field phi, the line integral with respect to arc length is the integral over C of phi d s, the integral of phi times the speed r prime of t over the parameter interval. Line integrals compute work done by a force along a path, mass of a wire with variable density, and circulation of a fluid around a loop.",
              "The value of a line integral generally depends on the path taken from A to B. When the field F is conservative, that is F equals grad phi for some scalar potential phi, the line integral depends only on the endpoints: the integral over C of F dot d r equals phi of B minus phi of A, independent of the path. The criterion for F equals (P, Q) to be conservative in a simply connected region is that partial P over partial y equals partial Q over partial x; in three dimensions, F is conservative iff curl F equals zero.",
              "A worked example. Compute the line integral of F equals (y, x) along the parabola y equals x squared from (0, 0) to (1, 1). Parametrise the curve as r of t equals (t, t squared) with t from 0 to 1. Then r prime of t equals (1, 2 t) and F of r of t equals (t squared, t). The dot product is t squared times 1 plus t times 2 t equals 3 t squared. The integral from 0 to 1 of 3 t squared d t equals t cubed evaluated from 0 to 1, which is 1. The field F equals (y, x) equals grad of (x y), so the result equals phi of (1, 1) minus phi of (0, 0) equals 1, confirming path independence.",
            ],
            bullets: [
              "Line integral of vector F along C: int_C F . dr = int_a^b F(r(t)) . r'(t) dt.",
              "Scalar line integral: int_C phi ds; mass of wire with density phi.",
              "Path independence iff F is conservative (F = grad phi); criterion curl F = 0 (3D) or P_y = Q_x (2D).",
              "Work done by force F along path C is the line integral of F . dr.",
              "Worked: int_C (y, x) . dr along y = x^2 from (0,0) to (1,1) equals 1.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy evaluates the line integral of F = (y, x) along y = x^2.",
              code: `from sympy import symbols, integrate, Matrix
t = symbols('t')
r = Matrix([t, t**2])           # y = x^2
rprime = r.diff(t)              # tangent vector
F = Matrix([r[1], r[0]])        # F = (y, x)
integrand = F.dot(rprime)       # F . r'
result = integrate(integrand, (t, 0, 1))
print("line integral =", result)`,
            },
            diagram: {
              kind: "pipeline",
              title: "Evaluating a line integral step by step",
              caption:
                "From parametrisation to a single integral.",
              stages: [
                { label: "Parametrise the curve C", note: "r(t), t in [a,b]" },
                { label: "Compute r'(t)", note: "tangent vector" },
                { label: "Substitute F(r(t))", note: "field on the curve" },
                { label: "Take dot product F(r(t)) . r'(t)", note: "integrand" },
                { label: "Integrate over t", note: "single integral" },
              ],
            },
            callout: {
              type: "tip",
              title: "Check conservative first",
              body: "Before integrating, check if F is conservative (curl F = 0). If yes, skip parametrisation: the integral equals phi(B) - phi(A), a one-line computation.",
            },
            keyTerms: [
              { term: "Line integral", definition: "The integral of a vector or scalar field along a curve; computed by parametrising the curve." },
              { term: "Conservative field", definition: "A vector field F = grad phi for some scalar potential phi; line integrals are path-independent." },
              { term: "Potential function", definition: "A scalar field phi such that grad phi = F; its difference gives the line integral of a conservative F." },
            ],
            examQuestions: [
              {
                q: "Define the line integral of a vector field F along a curve C. Evaluate int_C (y dx + x dy) along the parabola y = x^2 from (0,0) to (1,1).",
                marks: 7,
                outline: [
                  "Define the line integral int_C F . dr = int_a^b F(r(t)) . r'(t) dt.",
                  "Parametrise the curve: r(t) = (t, t^2), t in [0, 1].",
                  "Compute r'(t) = (1, 2t).",
                  "Express F on the curve: F = (y, x) = (t^2, t).",
                  "Form the dot product: F . r' = t^2 * 1 + t * 2t = 3 t^2.",
                  "Integrate: int_0^1 3 t^2 dt = t^3 from 0 to 1 = 1.",
                  "Note F = grad(x y) is conservative, so result = phi(1,1) - phi(0,0) = 1 - 0 = 1, confirming path independence.",
                ],
              },
              {
                q: "State the condition for a vector field to be conservative in two dimensions.",
                marks: 3,
              },
              {
                q: "Define the line integral with respect to arc length.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Green's theorem in the plane",
            body: [
              "Green's theorem relates a line integral around a simple closed curve C in the plane to a double integral over the region R that C encloses. It states that the integral around C of P d x plus Q d y equals the double integral over R of (partial Q over partial x minus partial P over partial y) d A, provided C is traversed positively (counter-clockwise) and P, Q have continuous partial derivatives on R. The theorem converts a one-dimensional integral along a boundary into a two-dimensional integral over the interior, often simplifying computation.",
              "Green's theorem has two useful corollaries. The area of R can be computed as one-half of the line integral around C of (x d y minus y d x), or equivalently as the line integral of x d y, or of minus y d x. These formulas let one compute area from a boundary parametrisation without double integration. Green's theorem also underlies the criterion for path independence: a field (P, Q) is conservative in a simply connected region iff partial P over partial y equals partial Q over partial x, which is exactly the integrand of Green's theorem vanishing.",
              "A worked example. Verify Green's theorem for F equals (minus y, x) around the unit square with vertices (0, 0), (1, 0), (1, 1), (0, 1), traversed counter-clockwise. The line integral has four pieces. Bottom from (0,0) to (1,0): y equals 0, d y equals 0, so F dot d r equals minus y d x plus x d y equals 0. Right from (1,0) to (1,1): x equals 1, d x equals 0, so F dot d r equals d y, integral equals 1. Top from (1,1) to (0,1): y equals 1, d y equals 0, F dot d r equals minus d x, integral from 1 to 0 of minus d x equals 1. Left from (0,1) to (0,0): x equals 0, d x equals 0, F dot d r equals 0. Total line integral equals 2. The double integral of (partial Q over partial x minus partial P over partial y) equals (1 minus minus 1) equals 2 over the unit square of area 1, giving 2. Both sides agree.",
            ],
            bullets: [
              "Green's theorem: int_C (P dx + Q dy) = int_R (Q_x - P_y) dA; C counter-clockwise.",
              "Converts a boundary line integral into an interior double integral.",
              "Area formula: A = (1/2) int_C (x dy - y dx).",
              "Conservative criterion: P_y = Q_x iff F is conservative in a simply connected region.",
              "Worked: F = (-y, x) around unit square; line integral = 2, double integral = 2.",
            ],
            table: {
              caption: "Green's theorem verification for F = (-y, x) around the unit square.",
              headers: ["Side", "Parametrisation", "F . dr", "Integral"],
              rows: [
                ["Bottom (0,0)->(1,0)", "y=0, dy=0", "0", "0"],
                ["Right (1,0)->(1,1)", "x=1, dx=0", "dy", "1"],
                ["Top (1,1)->(0,1)", "y=1, dy=0", "-dx", "1"],
                ["Left (0,1)->(0,0)", "x=0, dx=0", "0", "0"],
                ["Total line integral", "\u2014", "\u2014", "2 (= double integral)"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Green's theorem at a glance",
              caption:
                "Boundary line integral equals interior double integral.",
              steps: [
                { label: "Closed curve C", note: "counter-clockwise" },
                { label: "Enclosed region R", note: "interior" },
                { label: "Line integral on C", note: "int (P dx + Q dy)" },
                { label: "Double integral on R", note: "int (Q_x - P_y) dA" },
                { label: "Equate the two", note: "Green's identity" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the orientation",
              body: "Always state the orientation (counter-clockwise) when applying Green's theorem. Reversing orientation flips the sign of the line integral.",
            },
            keyTerms: [
              { term: "Green's theorem", definition: "Relates the line integral of (P, Q) around a closed curve C to the double integral of (Q_x - P_y) over the enclosed region R." },
              { term: "Positive orientation", definition: "Counter-clockwise traversal of the boundary C, the convention Green's theorem requires." },
              { term: "Simply connected region", definition: "A region with no holes; needed for the conservative-field criterion P_y = Q_x." },
            ],
            examQuestions: [
              {
                q: "State Green's theorem in the plane. Verify it for F = (-y, x) around the unit square with vertices (0,0), (1,0), (1,1), (0,1).",
                marks: 7,
                outline: [
                  "State Green: int_C (P dx + Q dy) = int_R (Q_x - P_y) dA; C counter-clockwise.",
                  "Identify P = -y, Q = x for F = (-y, x).",
                  "Compute Q_x = 1, P_y = -1; integrand Q_x - P_y = 2.",
                  "Double integral over unit square (area 1): 2 * 1 = 2.",
                  "Parametrise the four sides; compute F.dr on each.",
                  "Sum the four line integrals: 0 + 1 + 1 + 0 = 2.",
                  "Conclude both sides equal 2, verifying Green's theorem.",
                ],
              },
              {
                q: "Use Green's theorem to find the area enclosed by the ellipse x^2/a^2 + y^2/b^2 = 1.",
                marks: 3,
              },
              {
                q: "State the area formula derived from Green's theorem.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Stokes' and Gauss divergence theorems",
            body: [
              "Stokes' theorem generalises Green's theorem to a curved surface S in three dimensions bounded by a closed space curve C. It states that the line integral of F around C equals the surface integral of the curl of F over S: the integral around C of F dot d r equals the surface integral over S of (curl F) dot d S, with C oriented consistently with the normal of S by the right-hand rule. Stokes' theorem says the circulation of F around the boundary equals the total curl flux through any spanning surface, so surfaces with the same boundary give the same answer.",
              "The Gauss divergence theorem relates the flux of a vector field through a closed surface S to the divergence of the field inside the volume V that S encloses. It states that the surface integral over S of F dot d S equals the triple integral over V of div F d V. The theorem converts a surface flux into a volume integral; for an incompressible fluid (div F equals 0) the net flux through any closed surface is zero. Both Stokes and Gauss are cornerstones of electromagnetism and fluid mechanics.",
              "A worked verification of Gauss. Let F equals (x, y, z) and V be the unit ball of radius 1. Then div F equals 1 plus 1 plus 1 equals 3. The triple integral of div F over the unit ball is 3 times the volume of the ball, which is 3 times four-thirds pi times 1 cubed equals 4 pi. The surface integral over the unit sphere of F dot d S: on the sphere F equals (x, y, z) equals the position vector, d S equals n d S equals the unit outward normal times d S, so F dot d S equals x squared plus y squared plus z squared equals 1 times d S, and the integral is the surface area of the unit sphere, 4 pi. Both sides equal 4 pi, verifying Gauss.",
            ],
            bullets: [
              "Stokes: int_C F . dr = int_S (curl F) . dS; C bounds the surface S.",
              "Gauss divergence: int_S F . dS = int_V div F dV; S is a closed surface bounding V.",
              "Stokes: circulation around boundary = total curl flux through spanning surface.",
              "Gauss: net flux through closed surface = total divergence inside; div F = 0 => zero net flux.",
              "Worked: F = (x, y, z), V = unit ball; both sides of Gauss equal 4 pi.",
            ],
            table: {
              caption: "Stokes and Gauss side by side.",
              headers: ["Theorem", "Boundary", "Interior", "Derivative"],
              rows: [
                ["Green", "closed plane curve C", "planar region R", "Q_x - P_y"],
                ["Stokes", "closed space curve C", "surface S bounded by C", "curl F"],
                ["Gauss", "closed surface S", "volume V inside S", "div F"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Stokes vs Gauss divergence theorem",
              caption:
                "Each pairs a boundary integral with an interior integral of a derivative.",
              left: {
                heading: "Stokes' theorem",
                items: [
                  "Line integral around boundary curve C",
                  "= surface integral of curl F over S",
                  "C is a curve, S is a surface bounded by C",
                  "Generalises Green's theorem to 3D",
                  "Orientation: right-hand rule",
                ],
              },
              right: {
                heading: "Gauss divergence theorem",
                items: [
                  "Surface integral over closed surface S",
                  "= volume integral of div F over V",
                  "S is closed, V is the volume inside",
                  "Used in Maxwell's equations, fluid flux",
                  "Orientation: outward normal",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Pair the operator with the integral",
              body: "Stokes uses CURL and a SURFACE integral; Gauss uses DIVERGENCE and a VOLUME integral. Mixing them up is the most common exam error - memorise the pairings.",
            },
            keyTerms: [
              { term: "Stokes' theorem", definition: "The line integral of F around C equals the surface integral of curl F over any surface S bounded by C." },
              { term: "Gauss divergence theorem", definition: "The flux of F through a closed surface S equals the triple integral of div F over the enclosed volume V." },
              { term: "Flux", definition: "The surface integral of the normal component of a vector field; measures flow through a surface." },
            ],
            examQuestions: [
              {
                q: "State Stokes' theorem and Gauss divergence theorem. Verify Gauss's divergence theorem for F = (x, y, z) over the unit sphere.",
                marks: 7,
                outline: [
                  "State Stokes: int_C F . dr = int_S (curl F) . dS.",
                  "State Gauss: int_S F . dS = int_V div F dV.",
                  "For F = (x, y, z): div F = 1 + 1 + 1 = 3.",
                  "Compute volume integral: int_V 3 dV = 3 * (4/3) pi * 1^3 = 4 pi.",
                  "On unit sphere: F = (x, y, z) = position vector = outward normal.",
                  "So F . dS = (x^2 + y^2 + z^2) dS = 1 * dS.",
                  "Surface integral = surface area of unit sphere = 4 pi. Both sides agree.",
                ],
              },
              {
                q: "State Stokes' theorem and identify each symbol.",
                marks: 3,
              },
              {
                q: "State Gauss divergence theorem and give one physical application.",
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
        { topic: "Eigenvalues and Cayley-Hamilton", weight: "14%", note: "Characteristic polynomial, eigenpairs, inverse via CH - two-step 7-mark questions" },
        { topic: "Taylor and Maclaurin series", weight: "12%", note: "e^x, sin x, cos x, log(1+x); product expansions; convergence" },
        { topic: "Maxima and minima", weight: "10%", note: "Word problems on optimal dimensions; first and second derivative tests" },
        { topic: "Changing order of integration", weight: "10%", note: "Sketch region, swap dy dx to dx dy; e^(y^2) trick" },
        { topic: "Green's, Stokes', Gauss theorems", weight: "14%", note: "Statement, condition, verify around a curve or surface" },
        { topic: "Rank and consistency", weight: "10%", note: "Echelon form; rank(A) vs rank([A|b]); free variables" },
        { topic: "Lagrange multipliers", weight: "8%", note: "Constrained extrema with one constraint" },
        { topic: "Jacobian", weight: "8%", note: "2x2 determinant; functional dependence test" },
        { topic: "L'Hopital", weight: "7%", note: "0/0, inf/inf; repeated application; reduction of other forms" },
        { topic: "Curvature and radius of curvature", weight: "7%", note: "Cartesian, parametric, polar formulas" },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        { week: "Week 1", focus: "Differential calculus foundations", tasks: ["State and prove Rolle, Lagrange, Cauchy; verify each for one function.", "Derive Taylor and Maclaurin series; memorise e^x, sin x, cos x, log(1+x).", "Practise 8 L'Hopital problems including 0^0 and inf^0 forms."] },
        { week: "Week 2", focus: "Extrema and curvature", tasks: ["Solve 10 maxima/minima word problems with second derivative test.", "Practise points of inflection; verify sign change of f''.", "Compute curvature and radius for cartesian, parametric and polar curves."] },
        { week: "Week 3", focus: "Multivariable calculus", tasks: ["Compute partial derivatives and verify Clairaut on 5 functions.", "Apply Euler's theorem to 5 homogeneous functions.", "Compute 5 Jacobians; test 3 pairs for functional dependence."] },
        { week: "Week 4", focus: "Matrices", tasks: ["Find rank of 10 matrices and check consistency of 5 systems.", "Compute 5 inverses by elementary transformations.", "Find eigenvalues and eigenvectors of 5 matrices; apply Cayley-Hamilton to 3 inverses."] },
        { week: "Week 5", focus: "Multiple integrals", tasks: ["Evaluate 10 double integrals over non-rectangular regions.", "Change order in 5 integrals; include the e^(y^2) example.", "Compute 5 polar and 5 triple integrals; memorise beta-gamma identities."] },
        { week: "Week 6", focus: "Vector calculus and revision", tasks: ["Compute grad, div, curl for 5 fields; find 5 directional derivatives.", "Evaluate 5 line integrals; verify Green's, Stokes', Gauss on simple regions.", "Take one full mock paper under timed conditions."] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Revise theorem statements verbatim: Rolle, Lagrange, Cauchy, Taylor, Euler, Green, Stokes, Gauss.",
        "Memorise the four Maclaurin expansions: e^x, sin x, cos x, log(1+x).",
        "Skim all 7-mark outlines; practise writing each in 8 minutes.",
        "Keep curvature, Jacobian, eigenvalue, and beta-gamma formulas on one cheat sheet.",
        "Practise two 2x2 and one 3x3 eigenvalue problem end to end.",
        "Sleep 7 hours; do not start a new topic the night before.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Read the question twice; underline whether it asks 'state', 'prove', 'verify', or 'evaluate'.",
        "For verify problems, state hypotheses, substitute, then conclude that the point lies in the interval.",
        "For matrix problems, label row operations R2 -> R2 - 2 R1 to earn method marks.",
        "For integrals, sketch the region before writing limits.",
        "If stuck on a 7-mark, write the statement and one line of setup for partial credit.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Stating Rolle's theorem without verifying f(a) = f(b).",
        "Forgetting that Lagrange requires differentiability on the OPEN interval (a, b).",
        "Writing Taylor's series without the remainder term in a proof question.",
        "Mixing up the rows and columns when computing a Jacobian.",
        "Applying L'Hopital to a form that is not 0/0 or infinity/infinity.",
        "Confusing the surface orientation of Stokes (curl) with the outward normal of Gauss (div).",
      ],
    },
  ],
};
