/**
 * Academics - RGPV B.Tech IV Semester subject: BT-401 Mathematics-III.
 *
 * Structure mirrors the other academic subjects: five units, one chapter per
 * unit, five numbered sections per chapter.  Each section carries three body
 * paragraphs, five bullets, three key terms, a diagram, a callout, a table or
 * Python code sample, and three exam questions (one 7-mark with a 5-point
 * outline plus two short questions).
 */

import type { AcademicSubject } from "./types";

export const bt401: AcademicSubject = {
  id: "bt-401",
  code: "BT-401",
  title: "Mathematics-III",
  semester: "IV Semester",
  program: "RGPV \u00b7 B.Tech (common to CSE and AI&DS)",
  tagline:
    "The complete visual guide to Mathematics-III: Laplace transforms and their inversion with applications, Fourier series and integrals, analytic functions and conformal mapping, complex integration with residues, and Z-transforms for discrete systems.",
  description:
    "Five units carry the engineering mathematics of the fourth semester: Laplace transforms and their use in solving linear ODEs, systems, circuits and vibrations; Fourier series, half-range expansions and Fourier transforms for signal analysis; the complex plane through analytic functions, Cauchy-Riemann equations and conformal mapping; and complex integration crowned by the residue theorem, closing with Z-transforms for discrete systems. Every section pairs the formal result with a worked example, a redrawable diagram, and exam-style questions matching RGPV patterns.",
  accentColor: "#fb7185",
  emoji: "M3",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Laplace Transforms",
      summary:
        "Definition and existence of the Laplace transform, its operational properties, standard and periodic pairs, transforms of derivatives and integrals, the Heaviside and Dirac delta functions, and the convolution theorem.",
      chapter: {
        number: "01",
        title: "Laplace Transforms",
        intro:
          "Unit I builds the Laplace transform from the defining integral through to the convolution theorem. The five sections cover the definition with existence conditions, the operational properties, transforms of standard and periodic functions, the derivative and integral rules that turn calculus into algebra, the Heaviside step and Dirac delta, and the convolution theorem that links product in the s-domain to a time-domain integral.",
        inOneBreath:
          "The Laplace transform of f(t) is the integral from 0 to infinity of e^(-s t) f(t) dt, existing when f is piecewise continuous and of exponential order; linearity, the s-shift, t-shift, scaling, multiplication by t^n and division by t extend a small table of standard pairs; transforms of derivatives obey L{f^(n)} = s^n F minus boundary terms; periodic functions of period T have F(s) equal to the one-period integral divided by 1 - e^(-s T); the Heaviside step u(t - a) shifts support and the Dirac delta samples at a point; and convolution (f star g)(t) has transform F(s) G(s).",
        sections: [
          {
            number: "1.1",
            title: "Definition, existence and properties",
            body: [
              "The Laplace transform of a function f(t) defined for t >= 0 is given by L{f(t)} = F(s) = integral from 0 to infinity of e^(-s t) f(t) dt, where s is a complex parameter. It maps a time-domain function into a function of the complex variable s, turning differential operations into algebraic ones. Existence requires f to be piecewise continuous on every finite interval [0, T] and of exponential order, meaning |f(t)| <= M e^(alpha t) for constants M and alpha whenever t is large enough. Under these conditions the defining integral converges absolutely for Re(s) > alpha, and F(s) is analytic in that half-plane.",
              "Five properties handle almost every exam problem. Linearity: L{a f + b g} = a F + b G. The first shifting theorem, called the s-shift, says L{e^(a t) f(t)} = F(s - a). The second shifting theorem, the t-shift, says L{u(t - a) f(t - a)} = e^(-a s) F(s). Change of scale: L{f(a t)} = (1/a) F(s/a) for a > 0. Multiplication by t^n gives L{t^n f(t)} = (-1)^n times the n-th derivative of F with respect to s. Division by t gives L{f(t)/t} = integral from s to infinity of F(u) du, provided the integral converges. These five properties plus a short table of standard pairs drive the bulk of RGPV Laplace questions.",
              "Worked example. Find L{t^2 e^(-3 t)}. Start from L{t^2} = 2/s^3, then apply the s-shift with a = -3 to obtain F(s - a) = F(s + 3) = 2/(s + 3)^3. A division example: find L{(sin t)/t}. Since L{sin t} = 1/(s^2 + 1), the division rule gives integral from s to infinity of du/(u^2 + 1), which is arctan u evaluated from s to infinity, that is pi/2 - arctan s. The pair (sin t)/t maps to pi/2 - arctan s, a result examiners ask for directly. These two examples show how the shifting and division properties extend a small table of standard transforms into a large catalogue of useful pairs.",
            ],
            bullets: [
              "Definition: F(s) = integral_0^infinity e^(-s t) f(t) dt; s is complex with Re(s) > alpha.",
              "Existence needs piecewise continuity on each [0, T] and exponential order |f(t)| <= M e^(alpha t).",
              "Linearity: L{a f + b g} = a F + b G is the operational foundation of the whole transform.",
              "Two shifts: s-shift L{e^(a t) f} = F(s - a); t-shift L{u(t - a) f(t - a)} = e^(-a s) F(s).",
              "Multiplication and division: L{t^n f} = (-1)^n d^n F / ds^n; L{f/t} = integral_s^infinity F(u) du.",
            ],
            table: {
              caption: "Standard Laplace transform pairs used throughout the unit.",
              headers: ["f(t)", "F(s) = L{f(t)}", "Region"],
              rows: [
                ["1", "1/s", "Re(s) > 0"],
                ["t^n, n non-negative integer", "n!/s^(n+1)", "Re(s) > 0"],
                ["e^(a t)", "1/(s - a)", "Re(s) > a"],
                ["sin(a t)", "a/(s^2 + a^2)", "Re(s) > 0"],
                ["cos(a t)", "s/(s^2 + a^2)", "Re(s) > 0"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From definition to a working transform catalogue",
              caption:
                "Five operational stages turn a piecewise continuous f(t) into a usable F(s).",
              stages: [
                { label: "Define F(s) and check existence", note: "piecewise continuous + exponential order" },
                { label: "Apply linearity", note: "combine known pairs linearly" },
                { label: "Use the two shifting theorems", note: "s-shift and t-shift" },
                { label: "Multiply by t^n or divide by t", note: "differentiate or integrate F" },
                { label: "Lookup against the standard table", note: "invert by recognition later" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise seven base pairs",
              body: "The seven pairs (1, t^n, e^(at), sin at, cos at, sinh at, cosh at) generate almost every question. Derive L{t^n e^(-at) sin bt} on demand by combining the multiplication rule with the s-shift, rather than memorising long catalogues.",
            },
            keyTerms: [
              { term: "Laplace transform", definition: "The integral F(s) = integral_0^infinity e^(-s t) f(t) dt of a function f(t) defined for t >= 0." },
              { term: "Exponential order", definition: "A function is of exponential order if |f(t)| <= M e^(alpha t) for some constants M, alpha and all large t." },
              { term: "Abscissa of convergence", definition: "The smallest real number sigma such that the Laplace integral converges for Re(s) > sigma." },
            ],
            examQuestions: [
              {
                q: "Define the Laplace transform, state the conditions for its existence, and prove the first and second shifting theorems. Use them to find L{t^2 e^(-3 t)} and L{(sin t)/t}.",
                marks: 7,
                outline: [
                  "Write the definition F(s) = integral_0^infinity e^(-s t) f(t) dt with s complex.",
                  "State existence conditions: piecewise continuity on each [0, T] and exponential order |f(t)| <= M e^(alpha t).",
                  "Prove the s-shift by substituting g(t) = e^(a t) f(t) into the defining integral.",
                  "Prove the t-shift by substituting u = t - a and using the Heaviside factor.",
                  "Apply the s-shift to L{t^2} = 2/s^3 with a = -3 to get 2/(s + 3)^3.",
                  "Apply the division rule to L{sin t} = 1/(s^2 + 1) and integrate to get pi/2 - arctan s.",
                  "Conclude with the region of convergence in each case.",
                ],
              },
              { q: "State the linearity property and use it to find L{3 e^(2 t) + 5 sin 4 t}.", marks: 2 },
              { q: "Find L{t^4} using the multiplication-by-t^n rule.", marks: 3 },
            ],
          },
          {
            number: "1.2",
            title: "Transforms of standard functions and periodic functions",
            body: [
              "Build the table of standard pairs from the definition by direct integration. L{1} = 1/s follows from integrating e^(-s t). L{t^n} = n!/s^(n+1) by repeated integration by parts. L{e^(a t)} = 1/(s - a) by a single substitution. The trigonometric pairs follow by integrating e^(-s t) sin(a t) and e^(-s t) cos(a t): L{sin(a t)} = a/(s^2 + a^2) and L{cos(a t)} = s/(s^2 + a^2). The hyperbolic pairs are L{sinh(a t)} = a/(s^2 - a^2) and L{cosh(a t)} = s/(s^2 - a^2), obtained by the same integration with sinh and cosh rewritten in terms of exponentials. These seven pairs are the backbone of every RGPV Laplace question.",
              "Periodic functions get a special formula. If f has period T, then L{f(t)} equals the integral over a single period divided by 1 - e^(-s T): F(s) = [integral from 0 to T of e^(-s t) f(t) dt] / (1 - e^(-s T)). The denominator captures the geometric series of repeated periods, and the numerator is the transform over one full cycle. Worked example: a square wave of period 2 that equals 1 on 0 < t < 1 and 0 on 1 < t < 2 has numerator integral from 0 to 1 of e^(-s t) dt = (1 - e^(-s))/s. Dividing by 1 - e^(-2 s) = (1 - e^(-s))(1 + e^(-s)) gives the closed form F(s) = 1 / [s (1 + e^(-s))]. Periodic-function transforms are frequent exam material.",
              "Combined pairs come from the shifting and multiplication rules. L{e^(-a t) sin(b t)} follows from the s-shift on L{sin(b t)}: it equals b / [(s + a)^2 + b^2]. L{e^(-a t) cos(b t)} equals (s + a) / [(s + a)^2 + b^2]. L{t e^(a t)} = 1/(s - a)^2 by multiplying L{e^(a t)} by t. L{t sin(a t)} = 2 a s / (s^2 + a^2)^2. These combined pairs appear throughout the worked ODEs of Unit II and in the damped-vibration problems of section 2.5. The lesson for the exam: derive on demand from the seven basics rather than memorising long catalogues of special cases.",
            ],
            bullets: [
              "Base pairs: L{1} = 1/s, L{t^n} = n!/s^(n+1), L{e^(a t)} = 1/(s - a).",
              "Trig pairs: L{sin at} = a/(s^2 + a^2); L{cos at} = s/(s^2 + a^2).",
              "Hyperbolic pairs: L{sinh at} = a/(s^2 - a^2); L{cosh at} = s/(s^2 - a^2).",
              "Periodic f of period T: F(s) = one-period integral divided by 1 - e^(-s T).",
              "Combined pair: L{e^(-a t) sin(b t)} = b / [(s + a)^2 + b^2] by the s-shift.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy confirms the seven base pairs and the periodic square-wave formula.",
              code: `from sympy import symbols, laplace_transform, sin, cos, exp, simplify
t, s, a = symbols('t s a', positive=True)
print(laplace_transform(1, t, s)[0])            # 1/s
print(laplace_transform(exp(-3*t), t, s)[0])    # 1/(s + 3)
print(laplace_transform(sin(2*t), t, s)[0])     # 2/(s**2 + 4)
print(laplace_transform(cos(2*t), t, s)[0])     # s/(s**2 + 4)
# Periodic square wave of period 2: value 1 on [0,1), 0 on [1,2)
num = (1 - exp(-s))/s
F_sq = num/(1 - exp(-2*s))
print(simplify(F_sq))                            # 1/(s*(1 + exp(-s)))`,
            },
            diagram: {
              kind: "matrix",
              title: "Standard pairs vs periodic-function transforms",
              caption:
                "Two axes: row kind (smooth vs discontinuous) and column kind (aperiodic vs periodic).",
              axes: { x: "Aperiodic vs periodic", y: "Smooth vs discontinuous" },
              quadrants: [
                { label: "Smooth aperiodic", note: "L{e^(a t)}, L{sin a t}, L{t^n}" },
                { label: "Smooth periodic", note: "L{sin a t}, L{cos a t} (built-in periodicity)" },
                { label: "Discontinuous aperiodic", note: "L{u(t - a)}, L{delta(t - a)} (section 1.4)" },
                { label: "Discontinuous periodic", note: "Square wave, sawtooth: one-period formula" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always simplify the periodic denominator",
              body: "After computing the one-period integral, factor 1 - e^(-s T) using 1 - e^(-s T) = (1 - e^(-s T/2))(1 + e^(-s T/2)) when the half-period structure allows. The square-wave simplification from 1 - e^(-2s) to (1 - e^(-s))(1 + e^(-s)) is the classic cancellation that earns the final mark.",
            },
            keyTerms: [
              { term: "Standard pair", definition: "A function and its known Laplace image used as a lookup entry to avoid direct integration, e.g. L{sin a t} = a/(s^2 + a^2)." },
              { term: "Periodic function", definition: "A function f with f(t + T) = f(t) for all t and a fixed period T > 0." },
              { term: "Square wave", definition: "A periodic signal alternating between two constant values, typically with equal or unequal half-periods." },
            ],
            examQuestions: [
              {
                q: "Derive L{sin(a t)} and L{cos(a t)} from the definition, and prove the formula L{f(t)} = (one-period integral) / (1 - e^(-s T)) for a periodic function of period T. Use it to find the Laplace transform of a square wave of period 2 with value 1 on (0, 1) and 0 on (1, 2).",
                marks: 7,
                outline: [
                  "Set up L{sin(a t)} = integral_0^infinity e^(-s t) sin(a t) dt and integrate by parts twice.",
                  "Solve for the integral to obtain a/(s^2 + a^2); similarly for cosine.",
                  "For periodic f, split the Laplace integral into a sum over periods of length T.",
                  "Pull the n-th period integral out by substitution u = t - nT and recognise the geometric series in e^(-s T).",
                  "Sum the geometric series to get the denominator 1 - e^(-s T) and the numerator as one-period integral.",
                  "Apply to the square wave: numerator is integral_0^1 e^(-s t) dt = (1 - e^(-s))/s.",
                  "Divide by 1 - e^(-2 s) = (1 - e^(-s))(1 + e^(-s)) and simplify to 1/[s (1 + e^(-s))].",
                ],
              },
              { q: "Find L{e^(-2 t) sin(3 t)} using the s-shift.", marks: 3 },
              { q: "Write down L{cosh(a t)} from the definition.", marks: 2 },
            ],
          },
          {
            number: "1.3",
            title: "Transforms of derivatives and integrals",
            body: [
              "Two operational rules make the Laplace transform the standard tool for linear differential equations. The derivative rule: L{f'(t)} = s F(s) - f(0), L{f''(t)} = s^2 F(s) - s f(0) - f'(0), and in general L{f^(n)(t)} = s^n F(s) - s^(n-1) f(0) - s^(n-2) f'(0) - ... - f^(n-1)(0). The initial values enter as boundary terms; the differential operator becomes multiplication by s in the s-domain. The integral rule is the inverse: L{integral from 0 to t of f(tau) d tau} = F(s)/s. Each rule is proved by one integration by parts in the defining integral, so the pair is exact.",
              "Why this matters in practice. A linear ODE with constant coefficients becomes an algebraic equation in F(s); the initial conditions enter naturally without a separate homogeneous-plus-particular decomposition, and the inverse transform recovers the time-domain solution. This is the entire strategy of Unit II. For Volterra integral equations of the form y(t) = f(t) + integral from 0 to t of k(t - tau) y(tau) d tau, the convolution theorem (section 1.5) converts the equation to Y(s) = F(s) / (1 - K(s)), giving a closed-form solution whenever the right-hand inverse is computable. The derivative and integral rules together turn the calculus of linear systems into algebra.",
              "Worked verification. Compute L{f''} when f(t) = cos(3 t) with f(0) = 1 and f'(0) = 0. Since F(s) = s/(s^2 + 9), the second-derivative rule gives s^2 F(s) - s f(0) - f'(0) = s^3/(s^2 + 9) - s. Combine over the common denominator: s^3/(s^2 + 9) - s = [s^3 - s(s^2 + 9)]/(s^2 + 9) = -9 s/(s^2 + 9). The check passes because f''(t) = -9 cos(3 t), and L{-9 cos(3 t)} = -9 s/(s^2 + 9). Every term in the formula has a concrete meaning: the s^n F(s) term is the transformed derivative, the boundary terms inject the initial conditions, and the consistency confirms the rule.",
            ],
            bullets: [
              "First derivative: L{f'} = s F - f(0) - one integration by parts in the definition.",
              "Second derivative: L{f''} = s^2 F - s f(0) - f'(0) - applies the rule twice.",
              "General n: L{f^(n)} = s^n F - s^(n-1) f(0) - ... - f^(n-1)(0).",
              "Integral rule: L{integral_0^t f(tau) d tau} = F(s)/s - the inverse of differentiation.",
              "Each boundary term carries one initial condition, so the ODE becomes algebraic in F.",
            ],
            table: {
              caption: "Operational rules for derivatives and integrals.",
              headers: ["Operation on f", "Laplace transform", "Boundary terms"],
              rows: [
                ["f'(t)", "s F(s) - f(0)", "f(0)"],
                ["f''(t)", "s^2 F(s) - s f(0) - f'(0)", "f(0), f'(0)"],
                ["f^(n)(t)", "s^n F(s) - sum of s^(n-1-k) f^(k)(0)", "f(0), ..., f^(n-1)(0)"],
                ["integral_0^t f(tau) d tau", "F(s)/s", "none"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How the derivative rule converts an ODE into algebra",
              caption:
                "Each arrow cites one rule; the ODE is solved in the s-domain and inverted back.",
              steps: [
                { label: "Take a linear ODE with initial values", note: "e.g. y'' + a y' + b y = f(t)" },
                { label: "Apply L to both sides", note: "use the derivative rule" },
                { label: "Collect terms in Y(s)", note: "boundary terms appear" },
                { label: "Solve algebraically for Y(s)", note: "pure algebra" },
                { label: "Invert to recover y(t)", note: "partial fractions or convolution" },
              ],
            },
            callout: {
              type: "exam",
              title: "Boundary terms carry the initial conditions",
              body: "When applying L{y''} = s^2 Y - s y(0) - y'(0), do not drop the boundary terms: they are exactly where the initial values of the ODE enter. Examiners dock marks for forgetting y(0) or y'(0), especially in second-order problems where both appear.",
            },
            keyTerms: [
              { term: "Derivative rule", definition: "L{f'(t)} = s F(s) - f(0); generalises to L{f^(n)} = s^n F minus boundary terms." },
              { term: "Integral rule", definition: "L{integral_0^t f(tau) d tau} = F(s)/s, the inverse of the derivative rule." },
              { term: "Boundary term", definition: "A term of the form s^(n-1-k) f^(k)(0) that injects an initial condition into the transformed equation." },
            ],
            examQuestions: [
              {
                q: "Prove the rules L{f'(t)} = s F(s) - f(0) and L{f''(t)} = s^2 F(s) - s f(0) - f'(0) by integration by parts, and state the general n-th derivative rule. Verify the second-derivative rule for f(t) = cos(3 t) with f(0) = 1 and f'(0) = 0.",
                marks: 7,
                outline: [
                  "Write L{f'} = integral_0^infinity e^(-s t) f'(t) dt and integrate by parts with u = e^(-s t), dv = f'(t) dt.",
                  "Use the boundary behaviour of e^(-s t) f(t) at 0 and infinity to obtain s F(s) - f(0).",
                  "Repeat the integration by parts to derive L{f''} = s^2 F - s f(0) - f'(0).",
                  "State the general rule L{f^(n)} = s^n F - s^(n-1) f(0) - ... - f^(n-1)(0).",
                  "For f = cos(3 t), write F(s) = s/(s^2 + 9).",
                  "Compute s^2 F - s - 0 = s^3/(s^2 + 9) - s and combine to -9 s/(s^2 + 9).",
                  "Verify by direct transform of f''(t) = -9 cos(3 t) and conclude the rule holds.",
                ],
              },
              { q: "Find L{integral_0^t sin(2 tau) d tau} using the integral rule.", marks: 3 },
              { q: "State the formula for L{f'''(t)} in terms of F(s) and the initial values.", marks: 2 },
            ],
          },
          {
            number: "1.4",
            title: "Unit step (Heaviside) and Dirac delta",
            body: [
              "The Heaviside unit step u(t - a) is zero for t < a and one for t >= a; it switches a function on at t = a. Its Laplace transform is L{u(t - a)} = e^(-a s)/s for a >= 0, the prototype of the second shifting theorem. A piecewise function built from steps, such as f(t) = u(t) - 2 u(t - 1) + u(t - 2), is rewritten as a sum of shifted pieces before transforming. The Heaviside function also gates other signals: L{u(t - a) f(t - a)} = e^(-a s) F(s) is the t-shift of section 1.1, and any rectangular pulse of width T equals u(t) - u(t - T).",
              "The Dirac delta is not a function in the classical sense but a generalised function (distribution) defined by its action under an integral: integral from -infinity to infinity of delta(t - a) f(t) dt = f(a). It models an ideal impulse of unit area concentrated at t = a. Its Laplace transform is L{delta(t - a)} = e^(-a s) for a >= 0, and L{delta(t)} = 1. The delta arises as the formal derivative of the Heaviside step, in the sense that d/dt of u(t - a) equals delta(t - a) in the distributional sense, which is consistent with the derivative rule applied to L{u(t - a)} = e^(-a s)/s.",
              "Worked example. A voltage v(t) = 3 delta(t - 2) + 5 u(t - 4) applied to a system has Laplace transform V(s) = 3 e^(-2 s) + 5 e^(-4 s)/s. The impulse term contributes a delayed exponential, the step term a delayed reciprocal. In a circuit with transfer function H(s), the output transform is Y(s) = H(s) V(s) and the time-domain response is found by convolution (section 1.5) or by partial fractions (section 2.1). The Heaviside and delta together model switching and impulse inputs: the former captures 'turn on at a', the latter 'strike at a', and their transforms tell the entire story in the s-domain.",
            ],
            bullets: [
              "Heaviside u(t - a) is 0 for t < a and 1 for t >= a; L{u(t - a)} = e^(-a s)/s.",
              "t-shift theorem: L{u(t - a) f(t - a)} = e^(-a s) F(s) - shift and gate together.",
              "Dirac delta is a distribution with integral delta(t - a) f(t) dt = f(a).",
              "Laplace of delta: L{delta(t - a)} = e^(-a s); L{delta(t)} = 1.",
              "Distributional derivative: d/dt of u(t - a) equals delta(t - a), consistent with the rules.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy handles Heaviside and DiracDelta via the t-shift rule.",
              code: `from sympy import symbols, laplace_transform, Heaviside, DiracDelta, exp
t, s, a = symbols('t s a', positive=True)
print(laplace_transform(Heaviside(t - a), t, s)[0])  # exp(-a*s)/s
print(laplace_transform(DiracDelta(t - a), t, s)[0])  # exp(-a*s)
print(laplace_transform(DiracDelta(t), t, s)[0])      # 1
# Piecewise pulse: 1 on [0, 2), 0 elsewhere
pulse = Heaviside(t) - Heaviside(t - 2)
print(laplace_transform(pulse, t, s)[0])              # (1 - exp(-2*s))/s`,
            },
            diagram: {
              kind: "compare",
              title: "Heaviside step vs Dirac delta",
              caption:
                "Two idealised inputs: one switches on, the other strikes at an instant.",
              left: {
                heading: "Heaviside u(t - a)",
                items: [
                  "Defined for all t; value 0 before a, 1 from a onward.",
                  "Models a switch turned on at t = a.",
                  "Transform: e^(-a s)/s.",
                  "Differentiable in the distributional sense; derivative is delta(t - a).",
                  "Builds rectangular pulses: u(t) - u(t - T).",
                ],
              },
              right: {
                heading: "Dirac delta(t - a)",
                items: [
                  "Distribution concentrated at t = a; zero elsewhere, unit area.",
                  "Models an ideal impulse at t = a.",
                  "Transform: e^(-a s).",
                  "Integral of delta(t - a) f(t) equals f(a) - the sampling property.",
                  "Arises as the derivative of u(t - a).",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Delta is a distribution, not a function",
              body: "The Dirac delta is not zero-everywhere-except-at-a with value infinity; that picture fails rigorously. Define it by the sampling property integral delta(t - a) f(t) dt = f(a). Examiners accept this operational definition, but a sentence acknowledging the distributional nature earns extra credit in proof-style questions.",
            },
            keyTerms: [
              { term: "Heaviside unit step", definition: "The function u(t - a) equal to 0 for t < a and 1 for t >= a, with transform e^(-a s)/s." },
              { term: "Dirac delta", definition: "A distribution concentrated at t = a with unit area, defined by the sampling property integral delta(t - a) f(t) dt = f(a)." },
              { term: "Distributional derivative", definition: "A derivative in the sense of distributions; d/dt of u(t - a) equals delta(t - a)." },
            ],
            examQuestions: [
              {
                q: "Define the Heaviside unit step u(t - a) and the Dirac delta delta(t - a). Derive L{u(t - a)} = e^(-a s)/s and L{delta(t - a)} = e^(-a s), and explain why d/dt of u(t - a) equals delta(t - a). Find the Laplace transform of f(t) = 3 delta(t - 2) + 5 u(t - 4).",
                marks: 7,
                outline: [
                  "Define u(t - a) as 0 for t < a and 1 for t >= a.",
                  "Compute L{u(t - a)} by splitting the integral at a; substitute u = t - a to get e^(-a s)/s.",
                  "Define delta(t - a) by its sampling property under an integral.",
                  "Use the sampling property to show L{delta(t - a)} = e^(-a s).",
                  "Justify the distributional derivative by applying L to d/dt u(t - a) and matching the formula.",
                  "Apply linearity: L{3 delta(t - 2)} = 3 e^(-2 s).",
                  "Apply the step transform: L{5 u(t - 4)} = 5 e^(-4 s)/s; sum to get the final answer.",
                ],
              },
              { q: "Express the rectangular pulse of width 2 starting at t = 0 using Heaviside functions and find its Laplace transform.", marks: 3 },
              { q: "Write the value of L{delta(t)}.", marks: 2 },
            ],
          },
          {
            number: "1.5",
            title: "Convolution theorem",
            body: [
              "The convolution of two functions f and g, both defined for t >= 0, is (f star g)(t) = integral from 0 to t of f(tau) g(t - tau) d tau. It is commutative: f star g = g star f, by the substitution u = t - tau. It is also associative and distributive over addition, making the set of (suitably well-behaved) functions on [0, infinity) into an algebra under convolution. The convolution answers the question 'what response does a linear time-invariant system produce to an arbitrary input, given its response to a delta impulse?' and is therefore central to engineering analysis.",
              "The convolution theorem: L{f star g} = F(s) G(s). The transform of a convolution is the product of the transforms. Equivalently, L^(-1){F(s) G(s)} = (f star g)(t), which gives an inversion route when F and G are individually invertible but their product is not. Proof sketch: write F(s) G(s) as a double integral of e^(-s(t1 + t2)) f(t1) g(t2) over the first quadrant, change variables to t = t1 + t2 and tau = t1, and reduce to a single outer integral over t whose integrand is the convolution. The change of variables is the technical heart of the proof.",
              "Worked example. Compute L^(-1){1 / [(s + 1)(s + 2)]} by convolution. We have F(s) = 1/(s + 1) giving f(t) = e^(-t), and G(s) = 1/(s + 2) giving g(t) = e^(-2 t). The convolution is integral from 0 to t of e^(-tau) e^(-2 (t - tau)) d tau = e^(-2 t) integral from 0 to t of e^(tau) d tau = e^(-2 t)(e^t - 1) = e^(-t) - e^(-2 t). This matches the partial-fraction result 1/(s + 1)(s + 2) = 1/(s + 1) - 1/(s + 2). Convolution is therefore an alternative to partial fractions whenever a product F(s) G(s) of invertible factors appears in the transform of an ODE or system response.",
            ],
            bullets: [
              "Convolution: (f star g)(t) = integral_0^t f(tau) g(t - tau) d tau; commutative.",
              "Convolution theorem: L{f star g} = F(s) G(s) - product in the s-domain.",
              "Inverse form: L^(-1){F G} = (f star g)(t) - an inversion route.",
              "Proof hinges on changing variables (t1, t2) -> (t = t1 + t2, tau = t1) in the double integral.",
              "Worked: L^(-1){1/[(s+1)(s+2)]} = e^(-t) - e^(-2 t) via convolution of two exponentials.",
            ],
            table: {
              caption: "Three ways to invert F(s) G(s) compared.",
              headers: ["Method", "When it is best", "Worked result"],
              rows: [
                ["Partial fractions", "F and G are rational with simple poles", "1/(s+1) - 1/(s+2)"],
                ["Convolution", "F and G invertible individually", "e^(-t) - e^(-2 t)"],
                ["Direct recognition", "Product matches a standard pair", "lookup result"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Convolution theorem in proof and in practice",
              caption:
                "Three stages: define, prove, invert. Use convolution as an alternative to partial fractions.",
              stages: [
                { label: "Define (f star g)(t)", note: "integral_0^t f(tau) g(t - tau) d tau" },
                { label: "Compute F(s) G(s) as a double integral", note: "first quadrant" },
                { label: "Change variables to t = t1 + t2", note: "single integral in t" },
                { label: "Recognise the inner integral as convolution", note: "outer factor is the Laplace kernel" },
                { label: "Invert products by convolution when fractions fail", note: "section 2.2" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two routes to the same inverse",
              body: "When asked to find L^(-1){1/[(s+1)(s+2)]}, present both methods: partial fractions giving e^(-t) - e^(-2 t) and convolution giving the same. Showing the agreement earns the proof-style marks and demonstrates command of the convolution theorem.",
            },
            keyTerms: [
              { term: "Convolution", definition: "The integral (f star g)(t) = integral_0^t f(tau) g(t - tau) d tau; commutative and associative." },
              { term: "Convolution theorem", definition: "L{f star g} = F(s) G(s); the transform of a convolution is the product of transforms." },
              { term: "Impulse response", definition: "The response h(t) of a linear time-invariant system to a delta input; the output to any input f is f star h." },
            ],
            examQuestions: [
              {
                q: "Define the convolution of two functions and prove the convolution theorem L{f star g} = F(s) G(s). Use it to find L^(-1){1 / [(s + 1)(s + 2)]} and verify against the partial-fraction result.",
                marks: 7,
                outline: [
                  "Define (f star g)(t) = integral_0^t f(tau) g(t - tau) d tau and note commutativity.",
                  "Write F(s) G(s) as a double integral over the first quadrant of e^(-s(t1 + t2)) f(t1) g(t2).",
                  "Change variables to t = t1 + t2 and tau = t1, with the Jacobian 1.",
                  "Reduce to a single outer integral over t; recognise the inner integral as (f star g)(t).",
                  "Conclude that L{f star g} = F(s) G(s).",
                  "Apply with F = 1/(s + 1) giving f = e^(-t), G = 1/(s + 2) giving g = e^(-2 t).",
                  "Compute the convolution integral to get e^(-t) - e^(-2 t), matching partial fractions.",
                ],
              },
              { q: "State the commutativity and associativity of convolution and explain why they hold.", marks: 3 },
              { q: "Write the convolution-based formula for L^(-1){F(s) G(s)}.", marks: 2 },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Inverse Laplace and Applications",
      summary:
        "Inverse Laplace transforms by properties and partial fractions, convolution-based inversion, the Laplace method for linear ODEs and systems, and applications to electrical circuits and mechanical vibrations.",
      chapter: {
        number: "02",
        title: "Inverse Laplace and Applications",
        intro:
          "Unit II turns the Laplace transform into a problem-solving tool. The five sections cover inversion by recognition and partial fractions, inversion by convolution, the worked solution of linear ODEs with constant coefficients, the solution of systems of ODEs, and the engineering applications to electrical circuits and damped mechanical vibrations.",
        inOneBreath:
          "The inverse Laplace transform recovers f(t) from F(s) by recognition of standard pairs, by partial fractions when F is rational, or by convolution when F factors into individually invertible pieces; a linear ODE with constant coefficients becomes an algebraic equation in Y(s) whose solution is inverted back; systems of ODEs yield a linear system in the s-domain solved by Cramer's rule; electrical circuits are modelled by KVL and KCL giving ODEs for current and charge; and mechanical vibrations give the damped harmonic oscillator y'' + 2 zeta omega y' + omega^2 y = F(t) whose response is decomposed into transient and steady-state parts.",
        sections: [
          {
            number: "2.1",
            title: "Inverse by properties and partial fractions",
            body: [
              "The inverse Laplace transform L^(-1){F(s)} is the function f(t) whose Laplace transform is F(s). It is unique up to null functions, so for engineering purposes 'the' inverse is well-defined. The simplest inversion route is recognition: match F(s) against the standard table of section 1.2 and use linearity, the s-shift, the t-shift and the multiplication-by-t rule to recover f(t). Worked example: L^(-1){(2 s + 5)/(s^2 + 4 s + 13)}. Complete the square in the denominator: s^2 + 4 s + 13 = (s + 2)^2 + 9. Rewrite the numerator as 2(s + 2) + 1, so the inverse is 2 e^(-2 t) cos(3 t) + (1/3) e^(-2 t) sin(3 t).",
              "Partial fractions are the workhorse when F(s) is a proper rational function, that is, the degree of the numerator is less than that of the denominator. Factor the denominator over the reals into linear factors (s - a) and irreducible quadratics (s^2 + b s + c), then write F(s) as a sum of simpler fractions. For distinct real roots, the partial fraction for the pole at s = a is A/(s - a) where A is the residue (s - a) F(s) evaluated at s = a. For repeated real roots, use A/(s - a) + B/(s - a)^2 + ... . For irreducible quadratic factors, write (C s + D)/(s^2 + b s + c) and complete the square.",
              "Worked example with repeated roots. Find L^(-1){(s + 3) / [(s + 1)^2 (s - 2)]}. The partial fraction form is A/(s + 1) + B/(s + 1)^2 + C/(s - 2). Multiply through and equate coefficients to find A = -2/9, B = -4/9, C = 5/9. The inverse is (-2/9) e^(-t) - (4/9) t e^(-t) + (5/9) e^(2 t). The repeated pole at s = -1 generates both an e^(-t) term and a t e^(-t) term - a general pattern: a pole of order k at s = a produces terms e^(a t), t e^(a t), ..., up to t^(k-1) e^(a t). Recognising this pattern accelerates every partial-fraction inversion.",
            ],
            bullets: [
              "Inverse by recognition: match F(s) against the table; use linearity and shifts to recover f(t).",
              "Partial fractions: factor the denominator into linear and irreducible quadratic factors.",
              "Residue at a simple pole a: A = (s - a) F(s) evaluated at s = a.",
              "Repeated pole of order k: produces e^(a t), t e^(a t), ..., t^(k-1) e^(a t).",
              "Quadratic factor: complete the square to combine exponential, sine and cosine in the inverse.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy inverts rational transforms by partial fractions automatically.",
              code: `from sympy import symbols, inverse_laplace_transform, apart, exp, sin, cos
s, t = symbols('s t', positive=True)
F1 = (2*s + 5)/(s**2 + 4*s + 13)
print(inverse_laplace_transform(F1, s, t))      # 2*exp(-2t)*cos(3t) + exp(-2t)*sin(3t)/3
F2 = (s + 3)/((s + 1)**2 * (s - 2))
print(apart(F2, s))                              # shows A/(s+1) + B/(s+1)**2 + C/(s-2)
print(inverse_laplace_transform(F2, s, t))      # combine exp(-t), t*exp(-t), exp(2t)`,
            },
            diagram: {
              kind: "flow",
              title: "Inversion decision tree",
              caption:
                "Three routes to the inverse, chosen by inspecting F(s).",
              steps: [
                { label: "Inspect F(s)", note: "match against the table first" },
                { label: "Recognition?", note: "apply shifts and multiplication rules" },
                { label: "Rational? Try partial fractions", note: "factor the denominator" },
                { label: "Quadratic? Complete the square", note: "combine exp, sin, cos" },
                { label: "Repeated pole? Use t e^(a t) pattern", note: "general pole-of-order-k rule" },
              ],
            },
            callout: {
              type: "tip",
              title: "Factor the denominator before anything else",
              body: "Before partial fractions, factor the denominator completely over the reals. A missed factor or a sign slip here propagates into every residue. Use the cover-up method to find residues at simple poles: cover (s - a) in F(s), substitute s = a, and the value is the residue.",
            },
            keyTerms: [
              { term: "Inverse Laplace transform", definition: "The function f(t) whose Laplace transform is F(s); unique up to null functions." },
              { term: "Partial fraction", definition: "Decomposition of a rational function into a sum of simpler fractions with denominators linear or irreducible quadratic." },
              { term: "Residue at a pole", definition: "The coefficient A of 1/(s - a) in the partial fraction at a simple pole s = a, computed as (s - a) F(s) at s = a." },
            ],
            examQuestions: [
              {
                q: "Explain the partial-fraction method for finding inverse Laplace transforms of rational functions, distinguishing simple real poles, repeated real poles, and irreducible quadratic factors. Find L^(-1){(s + 3) / [(s + 1)^2 (s - 2)]} and L^(-1){(2 s + 5)/(s^2 + 4 s + 13)}.",
                marks: 7,
                outline: [
                  "State the form of partial fractions for the three cases: simple, repeated, quadratic.",
                  "For the first problem, set up A/(s+1) + B/(s+1)^2 + C/(s-2) and clear denominators.",
                  "Solve the linear system for A = -2/9, B = -4/9, C = 5/9.",
                  "Write the inverse as (-2/9) e^(-t) - (4/9) t e^(-t) + (5/9) e^(2 t).",
                  "For the second problem, complete the square: s^2 + 4 s + 13 = (s + 2)^2 + 9.",
                  "Rewrite the numerator as 2(s + 2) + 1 and invert each piece.",
                  "Conclude with 2 e^(-2 t) cos(3 t) + (1/3) e^(-2 t) sin(3 t).",
                ],
              },
              { q: "Find L^(-1){3 / [s(s + 4)]} by partial fractions.", marks: 3 },
              { q: "State the cover-up method for finding a residue at a simple real pole.", marks: 2 },
            ],
          },
          {
            number: "2.2",
            title: "Convolution-based inversion",
            body: [
              "When F(s) does not simplify to a single standard pair and does not factor cleanly into rational pieces for partial fractions, convolution provides a third inversion route. The convolution theorem of section 1.5 says L^(-1){F(s) G(s)} = (f star g)(t), so any product F(s) G(s) of individually invertible factors has its inverse obtained as the convolution of the two time-domain factors. This route is particularly useful when F(s) carries a pole and G(s) carries an exponential factor like e^(-a s), the latter corresponding to a time shift in g(t).",
              "Worked example. Find L^(-1){s e^(-pi s) / (s^2 + 1)}. Write F(s) = s/(s^2 + 1) giving f(t) = cos t, and the factor e^(-pi s) corresponds to a t-shift by pi: g(t) = u(t - pi) f(t - pi) = u(t - pi) cos(t - pi). Using cos(t - pi) = -cos t, the inverse is -u(t - pi) cos t. The function is zero for t < pi and equal to -cos t for t >= pi. Convolution-based reasoning here is replaced by the t-shift, but the same logic applies when the second factor is more complex.",
              "A second worked example uses convolution directly. Find L^(-1){1 / [(s - 1)(s - 2)(s - 3)]}. Pair the first two factors: 1/[(s - 1)(s - 2)] has inverse e^(2 t) - e^t (verify by partial fractions). Then L^(-1){[1/((s-1)(s-2))] times [1/(s - 3)]} is the convolution of e^(2 t) - e^t with e^(3 t). The convolution integral splits into two: integral from 0 to t of [e^(2 tau) - e^(tau)] e^(3(t - tau)) d tau, which evaluates to a combination of e^(3 t), e^(2 t), and e^t. The same answer comes from partial fractions, confirming the convolution approach.",
            ],
            bullets: [
              "Convolution inversion: L^(-1){F G} = (f star g)(t) when both factors are invertible.",
              "Pairs naturally with the t-shift when an e^(-a s) factor multiplies F(s).",
              "Worked: L^(-1){s e^(-pi s)/(s^2 + 1)} = -u(t - pi) cos t.",
              "Useful when F(s) G(s) resists standard partial fractions.",
              "Verify convolution results against partial fractions whenever both routes are available.",
            ],
            table: {
              caption: "Three inversion routes and their signatures.",
              headers: ["Route", "Signature of F(s)", "Worked example"],
              rows: [
                ["Recognition", "matches a table pair", "(2 s)/(s^2 + 4) -> 2 cos(2 t)"],
                ["Partial fractions", "rational, factorable denominator", "1/[(s+1)(s+2)] -> e^(-t) - e^(-2 t)"],
                ["Convolution", "product of invertible factors", "1/[(s-1)(s-2)(s-3)]"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Inversion cycle: recognition, fractions, convolution",
              caption:
                "Each route fails gracefully into the next; verify by a second route when possible.",
              steps: [
                { label: "Try recognition", note: "match standard pair" },
                { label: "Try partial fractions", note: "factor denominator" },
                { label: "Try convolution", note: "split into F times G" },
                { label: "Combine with t-shift", note: "if e^(-a s) present" },
                { label: "Verify by a second route", note: "cross-check" },
              ],
            },
            callout: {
              type: "exam",
              title: "Pair e^(-a s) factors with the t-shift",
              body: "When F(s) carries a factor e^(-a s), do not throw it into convolution. Strip it off, invert the rest, and apply the t-shift theorem: L^(-1){e^(-a s) H(s)} = u(t - a) h(t - a). Mixing this with convolution without stripping is a common slip.",
            },
            keyTerms: [
              { term: "Convolution inversion", definition: "Recovering L^(-1){F(s) G(s)} as the convolution (f star g)(t) when both factors are invertible." },
              { term: "T-shift pairing", definition: "Stripping an e^(-a s) factor from F(s) and applying L^(-1){e^(-a s) H(s)} = u(t - a) h(t - a)." },
              { term: "Verification by second route", definition: "Cross-checking an inverse obtained by one method against another to confirm correctness." },
            ],
            examQuestions: [
              {
                q: "State the convolution theorem in inverse form and explain when convolution-based inversion is preferable to partial fractions. Use convolution (or the t-shift) to find L^(-1){s e^(-pi s) / (s^2 + 1)} and L^(-1){1 / [(s - 1)(s - 2)(s - 3)]}.",
                marks: 7,
                outline: [
                  "State L^(-1){F G} = (f star g)(t).",
                  "Explain that convolution is useful when F G resists partial fractions or carries shifts.",
                  "For the first problem, strip e^(-pi s) and invert s/(s^2 + 1) to cos t.",
                  "Apply the t-shift: u(t - pi) cos(t - pi) = -u(t - pi) cos t.",
                  "For the second, pair the first two factors and invert to e^(2 t) - e^t.",
                  "Convolve with e^(3 t) by computing the integral with substitution.",
                  "Combine into a sum of e^(3 t), e^(2 t), e^t and verify against partial fractions.",
                ],
              },
              { q: "Find L^(-1){e^(-2 s) / (s + 1)^2} using the t-shift.", marks: 3 },
              { q: "State the convolution theorem in both directions.", marks: 2 },
            ],
          },
          {
            number: "2.3",
            title: "Solving linear ODEs with Laplace (worked)",
            body: [
              "The Laplace method solves a linear ODE with constant coefficients in three steps. First, take the Laplace transform of both sides, applying the derivative rule to each term; the initial conditions enter through the boundary terms s f(0), f'(0), and so on. Second, solve the resulting algebraic equation in Y(s) for the unknown transform. Third, invert Y(s) by recognition, partial fractions or convolution to recover y(t). The method handles non-homogeneous terms such as delta impulses, step inputs and trigonometric forcing with the same machinery, a major advantage over the homogeneous-plus-particular split of classical methods.",
              "Worked example. Solve y'' + 4 y = sin(2 t) with y(0) = 0 and y'(0) = 0. Taking Laplace transforms gives s^2 Y + 4 Y = 2/(s^2 + 4), so Y(s) = 2 / (s^2 + 4)^2. To invert, use the convolution theorem: L^(-1){1/(s^2 + 4)} = (1/2) sin(2 t), so L^(-1){1/(s^2 + 4)^2} is the convolution of (1/2) sin(2 t) with itself, which evaluates to (1/8)[sin(2 t) - 2 t cos(2 t)]. Multiplying by 2 gives y(t) = (1/4)[sin(2 t) - 2 t cos(2 t)]. The t cos(2 t) term is the resonance growth: the forcing frequency matches the natural frequency and the response grows linearly.",
              "A second worked example with an impulse. Solve y'' + 2 y' + 5 y = delta(t - pi) with y(0) = 0, y'(0) = 0. Taking transforms gives (s^2 + 2 s + 5) Y = e^(-pi s), so Y(s) = e^(-pi s) / [(s + 1)^2 + 4]. The inverse without the shift is (1/2) e^(-t) sin(2 t). Applying the t-shift by pi gives y(t) = (1/2) u(t - pi) e^(-(t - pi)) sin(2(t - pi)). Since sin(2 t - 2 pi) = sin(2 t), this simplifies to (1/2) u(t - pi) e^(-(t - pi)) sin(2 t). The system is at rest until the impulse arrives at t = pi, then rings down with damping factor e^(-(t - pi)).",
            ],
            bullets: [
              "Three-step method: transform, solve algebraically for Y(s), invert back to y(t).",
              "Initial conditions enter through the boundary terms of the derivative rule.",
              "Non-homogeneous terms: sin, cos, exp, u(t - a), delta(t - a) all transform cleanly.",
              "Resonance example: y'' + 4 y = sin(2 t) produces a t cos(2 t) term that grows linearly.",
              "Impulse example: delta(t - pi) input causes the system to ring after the impulse time.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy solves the resonance ODE y'' + 4 y = sin(2 t) by Laplace.",
              code: `from sympy import symbols, Function, laplace_transform, solve, inverse_laplace_transform, sin, exp, DiracDelta, pi
t, s = symbols('t s', positive=True)
y = Function('y')
# y'' + 4 y = sin(2 t), y(0) = 0, y'(0) = 0
Y = symbols('Y')
eq = s**2 * Y + 4 * Y - 2/(s**2 + 4)   # transformed equation with zero ICs
Ysol = solve(eq, Y)[0]
print("Y(s) =", Ysol)                           # 2/(s**2 + 4)**2
ysol = inverse_laplace_transform(Ysol, s, t)
print("y(t) =", ysol)                           # (1/4)(sin(2t) - 2t cos(2t))`,
            },
            diagram: {
              kind: "pipeline",
              title: "Three-step Laplace method for linear ODEs",
              caption:
                "Transform, solve algebraically, invert. Initial conditions enter at step one.",
              stages: [
                { label: "Take L of both sides", note: "derivative rule injects ICs" },
                { label: "Solve algebraically for Y(s)", note: "linear equation" },
                { label: "Invert Y(s) by fractions or convolution", note: "standard pairs" },
                { label: "Read off transient and steady-state parts", note: "exp decay vs forced response" },
                { label: "Verify against initial conditions", note: "spot-check y(0), y'(0)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Watch for resonance terms",
              body: "When the forcing frequency matches a natural frequency, the inverse contains a term like t cos(omega t) or t sin(omega t). Recognise this from the repeated factor (s^2 + omega^2)^2 in Y(s). Examiners reward an explicit sentence identifying resonance.",
            },
            keyTerms: [
              { term: "Laplace method", definition: "The three-step procedure of transforming an ODE, solving algebraically for Y(s), and inverting to recover y(t)." },
              { term: "Resonance term", definition: "A term of the form t cos(omega t) or t sin(omega t) arising when the forcing frequency matches a natural frequency." },
              { term: "Impulse response", definition: "The solution y(t) of an ODE with a delta forcing term, characterising the system's reaction to an instantaneous input." },
            ],
            examQuestions: [
              {
                q: "Outline the three-step Laplace method for solving a linear ODE with constant coefficients. Solve y'' + 4 y = sin(2 t) with y(0) = y'(0) = 0, and identify the resonance term. Then solve y'' + 2 y' + 5 y = delta(t - pi) with y(0) = y'(0) = 0.",
                marks: 7,
                outline: [
                  "State the three steps: transform, solve algebraically, invert.",
                  "Apply L to y'' + 4 y = sin(2 t) with zero ICs to get (s^2 + 4) Y = 2/(s^2 + 4).",
                  "Solve Y = 2/(s^2 + 4)^2.",
                  "Invert by convolution: L^(-1){1/(s^2 + 4)^2} is the convolution of (1/2) sin(2 t) with itself.",
                  "Compute the convolution to obtain (1/8)[sin(2 t) - 2 t cos(2 t)], so y = (1/4)[sin(2 t) - 2 t cos(2 t)].",
                  "Identify the term -(1/2) t cos(2 t) as the resonance growth.",
                  "For the second problem, transform to (s^2 + 2 s + 5) Y = e^(-pi s), invert and apply the t-shift.",
                ],
              },
              { q: "Solve y' + 3 y = 1 with y(0) = 2 using the Laplace method.", marks: 3 },
              { q: "State the form of Y(s) when solving y'' + omega^2 y = F(s) with zero initial conditions.", marks: 2 },
            ],
          },
          {
            number: "2.4",
            title: "Solving systems of ODEs",
            body: [
              "A system of linear ODEs with constant coefficients couples several unknown functions. The Laplace method applies to each equation in turn, producing a linear algebraic system in the transforms Y_1(s), ..., Y_n(s). Solve that algebraic system by substitution or Cramer's rule, then invert each transform to recover y_1(t), ..., y_n(t). The initial conditions enter naturally through the derivative-rule boundary terms, just as for a single ODE, and the method handles non-homogeneous coupling terms, impulses and step inputs without any change in strategy.",
              "Worked example. Solve the coupled system x' = 2 x + y + t, y' = -x + 2 y + 1 with x(0) = 0 and y(0) = 0. Taking Laplace transforms gives s X = 2 X + Y + 1/s^2 and s Y = -X + 2 Y + 1/s. Rearrange: (s - 2) X - Y = 1/s^2 and X + (s - 2) Y = 1/s. Solve for X and Y by elimination: multiply the first by (s - 2) and add to get [(s - 2)^2 + 1] X = (s - 2)/s^2 + 1/s, so X = [(s - 2) + s] / [s^2 ((s - 2)^2 + 1)] = (2 s - 2) / [s^2 ((s - 2)^2 + 1)]. Invert by partial fractions to obtain x(t). A similar computation yields y(t).",
              "Cramer's rule streamlines the algebra. The determinant of the coefficient matrix is D = (s - 2)^2 + 1, and X = D_1 / D where D_1 is the determinant of the matrix with the first column replaced by the right-hand side. This route is faster for 3x3 systems and generalises cleanly. The inverse transforms give x(t) and y(t) as combinations of e^(2 t) cos t, e^(2 t) sin t, polynomials in t (from the 1/s^2 factor), and constants. The method handles electrical two-loop circuits and coupled mass-spring systems identically: write the coupled ODEs, transform, solve the linear system, invert.",
            ],
            bullets: [
              "Transform each ODE to obtain a linear algebraic system in Y_1(s), ..., Y_n(s).",
              "Initial conditions enter through the derivative-rule boundary terms.",
              "Solve the algebraic system by substitution or Cramer's rule.",
              "Invert each transform to recover y_1(t), ..., y_n(t).",
              "Method applies identically to coupled electrical circuits and mass-spring systems.",
            ],
            table: {
              caption: "Coupled system solution steps with worked dimensions.",
              headers: ["Step", "Operation", "Result"],
              rows: [
                ["1", "Transform each ODE", "algebraic system in X(s), Y(s)"],
                ["2", "Move IC terms to RHS", "(s - 2) X - Y = 1/s^2 etc."],
                ["3", "Solve algebraically (Cramer)", "X = D_1 / D, Y = D_2 / D"],
                ["4", "Invert each transform", "x(t), y(t) in terms of exp, sin, cos"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Stacked view of the coupled-system solution",
              caption:
                "Top layer is the time-domain system; each lower layer moves toward the explicit time-domain solution.",
              layers: [
                { label: "Coupled ODEs in x(t), y(t)", note: "initial conditions" },
                { label: "Algebraic system in X(s), Y(s)", note: "transform each equation" },
                { label: "Determinants D, D_1, D_2", note: "Cramer's rule" },
                { label: "X(s) = D_1 / D, Y(s) = D_2 / D", note: "isolated transforms" },
                { label: "x(t), y(t) by inversion", note: "exp, sin, cos combined" },
              ],
            },
            callout: {
              type: "tip",
              title: "Use Cramer's rule for 3x3 systems",
              body: "For systems of three coupled ODEs, substitution gets messy. Write the coefficient matrix, compute its determinant D, then each unknown's transform by Cramer's rule. The determinants telescope quickly because the off-diagonal structure is simple.",
            },
            keyTerms: [
              { term: "Coupled ODE system", definition: "A set of linear ODEs whose unknown functions appear in each other's equations, requiring joint solution." },
              { term: "Cramer's rule", definition: "A formula expressing each unknown of a linear system as a ratio of determinants, useful for systems of two or three equations." },
              { term: "Coefficient determinant", definition: "The determinant D of the algebraic system's coefficient matrix in the s-domain; appears in the denominator of each Y_i(s)." },
            ],
            examQuestions: [
              {
                q: "Outline the Laplace method for solving a system of two coupled linear ODEs. Solve x' = 2 x + y + t, y' = -x + 2 y + 1 with x(0) = y(0) = 0, using Cramer's rule if helpful, and state the form of x(t) and y(t).",
                marks: 7,
                outline: [
                  "State the four-step procedure: transform, rearrange with ICs, solve algebraically, invert.",
                  "Transform both equations to get s X = 2 X + Y + 1/s^2 and s Y = -X + 2 Y + 1/s.",
                  "Rearrange to (s - 2) X - Y = 1/s^2 and X + (s - 2) Y = 1/s.",
                  "Compute D = (s - 2)^2 + 1.",
                  "Use Cramer's rule to write X = D_1 / D, Y = D_2 / D.",
                  "State the form of x(t) and y(t) as combinations of e^(2 t) cos t, e^(2 t) sin t, and polynomial pieces.",
                  "Verify that the initial conditions x(0) = 0 and y(0) = 0 hold in the recovered solutions.",
                ],
              },
              { q: "Set up (do not solve) the Laplace-transformed system for x' = y + 1, y' = -x with x(0) = 0, y(0) = 1.", marks: 3 },
              { q: "State Cramer's rule for a 2x2 linear system.", marks: 2 },
            ],
          },
          {
            number: "2.5",
            title: "Applications to circuits and mechanical vibrations",
            body: [
              "Electrical circuits are the canonical application. For an RLC loop, Kirchhoff's voltage law gives L di/dt + R i + (1/C) integral i dt = v(t), where i is the current, v is the applied voltage, and L, R, C are inductance, resistance, capacitance. Differentiating once gives a second-order ODE in i with constant coefficients. With zero initial current and charge, the Laplace transform turns the equation into an algebraic one: (L s + R + 1/(C s)) I(s) = V(s), so I(s) = V(s) / (L s + R + 1/(C s)) = V(s) s C / (L C s^2 + R C s + 1). The denominator is the characteristic polynomial of the circuit; its roots determine whether the response is overdamped, critically damped, or underdamped.",
              "Mechanical vibrations give the damped harmonic oscillator. Newton's second law for a mass m on a spring of stiffness k with damping coefficient c gives m y'' + c y' + k y = F(t), where y(t) is the displacement and F(t) the applied force. In standard form, y'' + 2 zeta omega y' + omega^2 y = F(t)/m, where omega = sqrt(k/m) is the natural frequency and zeta = c / (2 sqrt(m k)) is the damping ratio. The Laplace transform gives Y(s) (s^2 + 2 zeta omega s + omega^2) = F(s)/m plus initial-condition terms, so Y(s) is a ratio whose denominator is the characteristic polynomial. The roots s = -zeta omega plus or minus omega sqrt(zeta^2 - 1) determine the response type.",
              "Worked example. A unit step voltage V(s) = 1/s is applied to an RLC loop with L = 1, R = 3, C = 1/2. Then I(s) = (1/s) times s C / (L C s^2 + R C s + 1) = C / (L C s^2 + R C s + 1). With the numerical values, I(s) = (1/2) / [(1/2) s^2 + (3/2) s + 1] = 1 / (s^2 + 3 s + 2) = 1/(s + 1) - 1/(s + 2). The current is i(t) = e^(-t) - e^(-2 t), a sum of two decaying exponentials - an overdamped response. The same template handles the underdamped case (complex roots give e^(-zeta omega t) sin(omega_d t)) and the forced sinusoidal case (steady-state plus transient).",
            ],
            bullets: [
              "RLC loop: L di/dt + R i + (1/C) integral i dt = v(t) -> second-order ODE in i.",
              "Transformed form: I(s) = V(s) s C / (L C s^2 + R C s + 1) with zero ICs.",
              "Damped oscillator: m y'' + c y' + k y = F(t); standard form with omega and zeta.",
              "Damping cases: overdamped (real roots), critically damped (repeated), underdamped (complex roots).",
              "Response decomposes into transient (decaying exp) and steady-state (forced sinusoid).",
            ],
            table: {
              caption: "Damping regimes for the second-order characteristic polynomial.",
              headers: ["Regime", "Condition on zeta", "Time-domain response shape"],
              rows: [
                ["Overdamped", "zeta > 1", "sum of two real exponentials"],
                ["Critically damped", "zeta = 1", "(A + B t) e^(-omega t)"],
                ["Underdamped", "0 < zeta < 1", "e^(-zeta omega t) sin(omega_d t)"],
                ["Undamped", "zeta = 0", "sin(omega t) pure oscillation"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Branching response of a second-order system",
              caption:
                "The damping ratio zeta selects the response family from the roots of the characteristic polynomial.",
              start: "Characteristic roots of s^2 + 2 zeta omega s + omega^2",
              branches: [
                { label: "Real distinct roots", outcome: "Overdamped: A e^(s1 t) + B e^(s2 t)", good: true },
                { label: "Repeated real root", outcome: "Critically damped: (A + B t) e^(-omega t)", good: true },
                { label: "Complex conjugate roots", outcome: "Underdamped: e^(-zeta omega t) sin(omega_d t)", good: true },
                { label: "Pure imaginary roots", outcome: "Undamped: sin(omega t) oscillation", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Mind the units and the initial charge",
              body: "When transforming the RLC equation, the integral term (1/C) integral i dt becomes (1/C)(I(s)/s + q(0)/s) where q(0) is the initial charge on the capacitor. Forgetting q(0) is the most common slip; with zero initial charge the term reduces to I(s)/(C s). Always write the initial-charge term explicitly before simplifying.",
            },
            keyTerms: [
              { term: "RLC loop equation", definition: "Kirchhoff's voltage law for a resistor-inductor-capacitor loop: L di/dt + R i + (1/C) integral i dt = v(t)." },
              { term: "Damping ratio", definition: "The dimensionless parameter zeta = c / (2 sqrt(m k)) that classifies the response of a damped oscillator as over-, critical, or underdamped." },
              { term: "Steady-state response", definition: "The part of the system response that persists as t -> infinity, typically a forced sinusoid matching the input frequency." },
            ],
            examQuestions: [
              {
                q: "Derive the Laplace-domain relation between current and voltage for a series RLC loop with zero initial current and charge, and explain how the characteristic polynomial determines the damping regime. Then solve for the current when a unit step voltage is applied to a loop with L = 1, R = 3, C = 1/2, and state the damping regime.",
                marks: 7,
                outline: [
                  "Write KVL: L di/dt + R i + (1/C) integral i dt = v(t).",
                  "Differentiate and transform to get (L s + R + 1/(C s)) I(s) = V(s).",
                  "Solve I(s) = V(s) s C / (L C s^2 + R C s + 1).",
                  "Identify the characteristic polynomial L C s^2 + R C s + 1 and link its roots to the damping regimes.",
                  "Substitute V(s) = 1/s, L = 1, R = 3, C = 1/2 to get I(s) = 1/(s^2 + 3 s + 2).",
                  "Factor and invert: i(t) = e^(-t) - e^(-2 t).",
                  "Conclude the response is overdamped because both roots are real and distinct.",
                ],
              },
              { q: "Write the standard form of the damped harmonic oscillator and define omega and zeta.", marks: 3 },
              { q: "State the response of an underdamped second-order system with zero input.", marks: 2 },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Fourier Series and Integrals",
      summary:
        "Fourier series of periodic functions with Euler coefficients, even and odd expansions and half-range series, harmonic analysis, the Fourier integral theorem, and Fourier transform pairs with signal-analysis applications.",
      chapter: {
        number: "03",
        title: "Fourier Series and Integrals",
        intro:
          "Unit III develops Fourier analysis from periodic series to integrals. The five sections cover the Fourier series with Euler coefficients, even and odd expansions and half-range series for finite-interval data, harmonic analysis of empirical waveforms, the Fourier integral theorem extending the series to non-periodic functions, and the sine and cosine Fourier transform pairs with applications to signal analysis.",
        inOneBreath:
          "A periodic function f of period 2 pi has Fourier series a_0/2 + sum (a_n cos n t + b_n sin n t) with Euler coefficients a_n = (1/pi) integral f cos n t dt and b_n = (1/pi) integral f sin n t dt; even functions have only cosine terms, odd only sine terms, and a function on (0, L) admits a half-range sine or cosine expansion by odd or even extension; harmonic analysis reconstructs a measured waveform from its first few harmonics; the Fourier integral theorem extends the series to non-periodic f via integral F(omega) e^(i omega t) d omega with F(omega) = (1/(2 pi)) integral f(t) e^(-i omega t) dt; and the sine and cosine transforms specialise this to real even or odd extensions.",
        sections: [
          {
            number: "3.1",
            title: "Fourier series and Euler coefficients",
            body: [
              "A function f(t) periodic with period 2 pi that is piecewise smooth admits the Fourier series f(t) = a_0/2 + sum from n = 1 to infinity of (a_n cos(n t) + b_n sin(n t)). The Euler coefficients are a_0 = (1/pi) integral from -pi to pi of f(t) dt, a_n = (1/pi) integral from -pi to pi of f(t) cos(n t) dt, and b_n = (1/pi) integral from -pi to pi of f(t) sin(n t) dt. The constant term a_0/2 is the average value of f over one period. For a function of period 2 L, replace pi by L everywhere and use cos(n pi t / L), sin(n pi t / L) in place of cos(n t), sin(n t).",
              "Convergence. Dirichlet's theorem says the Fourier series of a piecewise smooth periodic function converges to f(t) at every point of continuity and to the average of the left and right limits at a jump. So at a discontinuity, the Fourier series overshoots neither limit; it lands on the midpoint. The Gibbs phenomenon is the characteristic overshoot near a jump: the partial sums overshoot about 9 percent of the jump on each side, an effect that does not vanish as more terms are added but narrows in width. This is a standard exam point.",
              "Worked example. Find the Fourier series of f(t) = t^2 on (-pi, pi), extended periodically. Since t^2 is even, b_n = 0. Compute a_0 = (1/pi) integral from -pi to pi of t^2 dt = (2/pi)(pi^3/3) = 2 pi^2/3. For a_n, integrate by parts twice: a_n = (1/pi) integral from -pi to pi of t^2 cos(n t) dt = 4 (-1)^n / n^2. The Fourier series is t^2 = pi^2/3 + sum from n = 1 to infinity of [4 (-1)^n / n^2] cos(n t). Substituting t = pi gives the famous identity pi^2/6 = sum from n = 1 to infinity of 1/n^2, a Basel-problem corollary that examiners reward.",
            ],
            bullets: [
              "Periodic f of period 2 pi: series a_0/2 + sum (a_n cos nt + b_n sin nt).",
              "Euler coefficients: a_n = (1/pi) integral f cos nt dt; b_n = (1/pi) integral f sin nt dt.",
              "Period 2 L version: replace pi by L and use cos(n pi t/L), sin(n pi t/L).",
              "Dirichlet convergence: at a jump, the series converges to the midpoint of left and right limits.",
              "Gibbs phenomenon: about 9 percent overshoot near jumps, width narrows with more terms.",
            ],
            table: {
              caption: "Euler coefficient formulas for period 2 pi.",
              headers: ["Coefficient", "Formula", "Type of contribution"],
              rows: [
                ["a_0", "(1/pi) integral_{-pi}^{pi} f(t) dt", "average value (constant term)"],
                ["a_n", "(1/pi) integral_{-pi}^{pi} f(t) cos(n t) dt", "cosine harmonic"],
                ["b_n", "(1/pi) integral_{-pi}^{pi} f(t) sin(n t) dt", "sine harmonic"],
                ["a_n if f is even", "2/pi integral_0^pi f(t) cos(n t) dt", "b_n = 0"],
                ["b_n if f is odd", "2/pi integral_0^pi f(t) sin(n t) dt", "a_n = 0"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Computing a Fourier series step by step",
              caption:
                "Five stages from periodic f to the explicit series with convergence.",
              steps: [
                { label: "Identify the period 2 L", note: "set up cos(n pi t/L), sin(n pi t/L)" },
                { label: "Check parity of f", note: "even -> cosine only; odd -> sine only" },
                { label: "Compute a_0, a_n, b_n by integration", note: "Euler formulas" },
                { label: "Assemble the series", note: "a_0/2 + sum (a_n cos + b_n sin)" },
                { label: "Apply Dirichlet at jumps", note: "series converges to midpoint" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exploit parity before integrating",
              body: "If f is even, all b_n are zero and a_n = (2/pi) integral from 0 to pi of f(t) cos(n t) dt, halving the integration. If f is odd, all a_n are zero. Always declare the parity at the start of the answer; it earns a mark and saves computation time.",
            },
            keyTerms: [
              { term: "Fourier series", definition: "The trigonometric expansion a_0/2 + sum (a_n cos n t + b_n sin n t) of a piecewise smooth periodic function." },
              { term: "Euler coefficients", definition: "The integrals a_0, a_n, b_n giving the constant, cosine and sine harmonic amplitudes of a Fourier series." },
              { term: "Dirichlet conditions", definition: "Sufficient conditions (piecewise smooth, finite extrema, absolutely integrable) for the Fourier series to converge to f at continuity points and to the midpoint at jumps." },
            ],
            examQuestions: [
              {
                q: "State the Fourier series of a periodic function of period 2 pi and derive the Euler coefficient formulas. State Dirichlet's convergence theorem and the Gibbs phenomenon. Compute the Fourier series of f(t) = t^2 on (-pi, pi) and use it to evaluate sum from n = 1 to infinity of 1/n^2.",
                marks: 7,
                outline: [
                  "Write the series a_0/2 + sum (a_n cos n t + b_n sin n t).",
                  "Derive a_0, a_n, b_n by multiplying through by cos(k t) or sin(k t) and integrating, using orthogonality.",
                  "State Dirichlet's theorem: at continuity points the series converges to f(t); at jumps to the midpoint.",
                  "Describe Gibbs: partial sums overshoot about 9 percent near jumps.",
                  "Note t^2 is even so b_n = 0; compute a_0 = 2 pi^2/3.",
                  "Compute a_n = 4 (-1)^n / n^2 by two integrations by parts.",
                  "Set t = pi to obtain pi^2 = pi^2/3 + 4 sum 1/n^2, hence sum 1/n^2 = pi^2/6.",
                ],
              },
              { q: "Find the Fourier series of f(t) = t on (-pi, pi) and identify which coefficients vanish by parity.", marks: 3 },
              { q: "State the Euler formula for a_0 and explain its meaning as an average.", marks: 2 },
            ],
          },
          {
            number: "3.2",
            title: "Even and odd expansions and half-range series",
            body: [
              "Even functions have only cosine Fourier coefficients: a_n is non-zero, b_n is zero. Odd functions have only sine coefficients: b_n is non-zero, a_n is zero. This follows from the parity of cos and sin under t -> -t and the symmetry of the integration interval. The half-range series extends this idea to a function defined only on (0, L): we may extend it to (-L, L) as either an even or an odd function, then take the Fourier series of the extension. The even extension gives a half-range cosine series; the odd extension gives a half-range sine series. Both series represent the original function on (0, L) but differ outside it.",
              "Half-range cosine series: extend f on (0, L) to an even function on (-L, L); the Fourier series has only cosine terms with coefficients a_0 = (2/L) integral from 0 to L of f(t) dt and a_n = (2/L) integral from 0 to L of f(t) cos(n pi t / L) dt. Half-range sine series: extend f on (0, L) to an odd function on (-L, L); the series has only sine terms with b_n = (2/L) integral from 0 to L of f(t) sin(n pi t / L) dt. The two series agree with f on (0, L) but represent different extensions outside, so the choice is dictated by the boundary conditions of the physical problem.",
              "Worked example. Find the half-range sine series of f(t) = 1 on (0, pi). The coefficients are b_n = (2/pi) integral from 0 to pi of sin(n t) dt = (2/pi)(1 - (-1)^n)/n, which is 4/(n pi) for n odd and 0 for n even. The series is 1 = sum from k = 0 to infinity of [4 / ((2 k + 1) pi)] sin((2 k + 1) t) on (0, pi). At t = pi/2, the series gives 1 = (4/pi)(1 - 1/3 + 1/5 - ...), the Leibniz formula for pi/4 - a satisfying check. Half-range series are central to solving the heat and wave equations with prescribed boundary conditions, where the choice of sine or cosine series is dictated by whether the boundary value is zero (sine) or the derivative is zero (cosine).",
            ],
            bullets: [
              "Even f: cosine series only; odd f: sine series only - parity eliminates half the coefficients.",
              "Half-range cosine: even extension to (-L, L); coefficients a_n = (2/L) integral_0^L f cos(n pi t/L) dt.",
              "Half-range sine: odd extension to (-L, L); coefficients b_n = (2/L) integral_0^L f sin(n pi t/L) dt.",
              "Both series agree with f on (0, L) but represent different periodic extensions.",
              "Choice dictated by boundary conditions: zero value -> sine; zero derivative -> cosine.",
            ],
            table: {
              caption: "Choosing the right half-range series.",
              headers: ["Boundary condition", "Series to use", "Reason"],
              rows: [
                ["f(0) = f(L) = 0", "half-range sine", "sine vanishes at 0 and L"],
                ["f'(0) = f'(L) = 0", "half-range cosine", "derivative of cosine vanishes at 0 and L"],
                ["f(0) = 0 only", "half-range sine", "sine vanishes at 0"],
                ["No boundary data", "either; pick convenient", "extension differs outside (0, L)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Half-range cosine vs half-range sine extension",
              caption:
                "Two extensions of the same f on (0, L); each gives a different Fourier series outside the interval.",
              left: {
                heading: "Even extension (cosine series)",
                items: [
                  "Reflect f across the y-axis to (-L, 0).",
                  "Resulting function is even.",
                  "Series contains only cosine terms.",
                  "a_0, a_n use (2/L) integral_0^L f cos.",
                  "Best when f'(0) = f'(L) = 0.",
                ],
              },
              right: {
                heading: "Odd extension (sine series)",
                items: [
                  "Reflect f across the origin to (-L, 0).",
                  "Resulting function is odd.",
                  "Series contains only sine terms.",
                  "b_n uses (2/L) integral_0^L f sin.",
                  "Best when f(0) = f(L) = 0.",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Match the series to the boundary condition",
              body: "When solving PDEs by separation of variables, the spatial eigenfunctions are half-range sine or cosine series chosen to satisfy the boundary conditions. A zero boundary value selects sine; a zero derivative selects cosine. Mixing the choice breaks the boundary condition and voids the solution.",
            },
            keyTerms: [
              { term: "Half-range series", definition: "A Fourier series built by extending a function defined on (0, L) to either an even or odd function on (-L, L)." },
              { term: "Even extension", definition: "Reflecting f on (0, L) across the y-axis to produce an even function whose Fourier series has only cosine terms." },
              { term: "Odd extension", definition: "Reflecting f on (0, L) across the origin to produce an odd function whose Fourier series has only sine terms." },
            ],
            examQuestions: [
              {
                q: "Explain how to obtain the half-range cosine and half-range sine series of a function defined on (0, L). Derive the coefficient formulas for each, and find the half-range sine series of f(t) = 1 on (0, pi). Use the result to evaluate the Leibniz series 1 - 1/3 + 1/5 - ... at t = pi/2.",
                marks: 7,
                outline: [
                  "Define even and odd extensions of f on (0, L) to (-L, L).",
                  "Derive a_n = (2/L) integral_0^L f cos(n pi t/L) dt for the cosine series.",
                  "Derive b_n = (2/L) integral_0^L f sin(n pi t/L) dt for the sine series.",
                  "For f = 1 on (0, pi), compute b_n = (2/pi) integral_0^pi sin(n t) dt = (2/pi)(1 - (-1)^n)/n.",
                  "Identify the non-zero coefficients as b_{2k+1} = 4/((2k+1) pi).",
                  "Write the series 1 = (4/pi) sum_{k>=0} sin((2k+1) t)/(2k+1) on (0, pi).",
                  "Set t = pi/2: 1 = (4/pi)(1 - 1/3 + 1/5 - ...), hence the Leibniz series sums to pi/4.",
                ],
              },
              { q: "Find the half-range cosine series of f(t) = t on (0, pi).", marks: 3 },
              { q: "State which half-range series to use when f(0) = f(L) = 0.", marks: 2 },
            ],
          },
          {
            number: "3.3",
            title: "Harmonic analysis",
            body: [
              "Harmonic analysis reconstructs an empirically measured periodic waveform from samples by computing the first few Fourier coefficients numerically. Given N samples y_0, y_1, ..., y_{N-1} over one period of length 2 pi (so sample j is at t_j = 2 pi j / N), the trapezoidal-rule discretisation of the Euler integrals gives the approximate coefficients a_0 = (2/N) sum y_j, a_n = (2/N) sum y_j cos(n t_j), b_n = (2/N) sum y_j sin(n t_j), for n = 1, 2, ..., M with M typically much less than N/2. The reconstructed waveform is then a_0/2 + sum from n = 1 to M of (a_n cos(n t) + b_n sin(n t)), a trigonometric polynomial approximating the data.",
              "Harmonic analysis is widely used in power electronics, vibration monitoring and acoustics. A periodic voltage measured at N points per cycle is decomposed into a DC component (a_0/2), a fundamental at the cycle frequency, and harmonics at integer multiples of the fundamental. The amplitudes sqrt(a_n^2 + b_n^2) form the amplitude spectrum; the angles arctan(b_n / a_n) form the phase spectrum. Total harmonic distortion (THD) is the ratio of the RMS value of all harmonics above the fundamental to the RMS value of the fundamental; it quantifies how non-sinusoidal a waveform is and is regulated in power systems.",
              "Worked example. Suppose samples of a 1-periodic function over N = 12 equally spaced points give amplitudes suggesting dominant first and third harmonics. Computing a_1, b_1, a_3, b_3 by the trapezoidal sums and ignoring the small higher harmonics reconstructs the waveform as A_1 sin(t + phi_1) + A_3 sin(3 t + phi_3) plus the DC offset. Symmetries of the data can simplify the analysis: if y_j = y_{N-j}, the function is even and b_n = 0; if y_j = -y_{N-j}, it is odd and a_n = 0; if y_{j + N/2} = -y_j (half-wave symmetry), only odd harmonics appear. Recognising these symmetries before computing saves substantial work.",
            ],
            bullets: [
              "Trapezoidal rule gives a_0, a_n, b_n from N samples per period.",
              "Formulas: a_n = (2/N) sum y_j cos(n t_j); b_n = (2/N) sum y_j sin(n t_j).",
              "Amplitude spectrum: A_n = sqrt(a_n^2 + b_n^2); phase spectrum: phi_n = arctan(b_n / a_n).",
              "Total harmonic distortion measures non-sinusoidal content above the fundamental.",
              "Symmetries (even, odd, half-wave) zero out classes of coefficients before computing.",
            ],
            codeExample: {
              language: "python",
              caption: "Numerical harmonic analysis of 12 samples per period.",
              code: `import math
# 12 equally spaced samples of one period 0..2*pi
N = 12
t = [2*math.pi*j/N for j in range(N)]
y = [math.sin(tj) + 0.3*math.sin(3*tj) for tj in t]  # fundamental + 3rd harmonic
def coef(n):
    a = (2/N) * sum(y[j]*math.cos(n*t[j]) for j in range(N))
    b = (2/N) * sum(y[j]*math.sin(n*t[j]) for j in range(N))
    return a, b
for n in (1, 2, 3):
    a, b = coef(n)
    print(n, round(a, 4), round(b, 4), round(math.hypot(a, b), 4))
# Expect n=1 amplitude ~1.0; n=2 ~0; n=3 ~0.3`,
            },
            diagram: {
              kind: "pipeline",
              title: "From samples to a trigonometric reconstruction",
              caption:
                "Four numerical stages turn raw measurements into a low-harmonic approximation.",
              stages: [
                { label: "Sample N points per period", note: "t_j = 2 pi j / N" },
                { label: "Trapezoidal sums for a_n, b_n", note: "n up to M << N/2" },
                { label: "Compute amplitude and phase spectra", note: "A_n, phi_n" },
                { label: "Reconstruct trigonometric polynomial", note: "a_0/2 + sum_{n=1}^M" },
                { label: "Inspect symmetry to skip zero coefficients", note: "even, odd, half-wave" },
              ],
            },
            callout: {
              type: "tip",
              title: "Inspect symmetry before computing",
              body: "If the sample sequence satisfies y_j = y_{N-j} (even), y_j = -y_{N-j} (odd), or y_{j + N/2} = -y_j (half-wave symmetry), entire classes of coefficients are zero. Identifying the symmetry before computing the trapezoidal sums saves time and reduces arithmetic slips.",
            },
            keyTerms: [
              { term: "Harmonic analysis", definition: "Numerical reconstruction of a periodic waveform from its samples by computing truncated Fourier coefficients." },
              { term: "Amplitude spectrum", definition: "The set of amplitudes A_n = sqrt(a_n^2 + b_n^2) showing the magnitude of each harmonic." },
              { term: "Total harmonic distortion", definition: "The ratio of RMS harmonic content above the fundamental to the RMS of the fundamental, quantifying waveform non-sinusoidality." },
            ],
            examQuestions: [
              {
                q: "Describe the trapezoidal-rule formulas used in harmonic analysis to compute the Fourier coefficients a_0, a_n, b_n from N samples per period. Define the amplitude and phase spectra and total harmonic distortion. Given samples that exhibit half-wave symmetry, state which harmonics vanish and why.",
                marks: 7,
                outline: [
                  "Write the trapezoidal formulas a_n = (2/N) sum y_j cos(n t_j), b_n = (2/N) sum y_j sin(n t_j) with t_j = 2 pi j / N.",
                  "Write a_0 = (2/N) sum y_j for the constant term.",
                  "Define amplitude A_n = sqrt(a_n^2 + b_n^2) and phase phi_n = arctan(b_n / a_n).",
                  "Define THD as sqrt(sum_{n>=2} A_n^2) / A_1.",
                  "State half-wave symmetry: y_{j + N/2} = -y_j.",
                  "Show by the trigonometric identity cos(n(t + pi)) = (-1)^n cos(n t) that even harmonics vanish.",
                  "Conclude that only odd n contribute to a half-wave-symmetric waveform.",
                ],
              },
              { q: "Compute a_1 from 4 samples y_0 = 0, y_1 = 1, y_2 = 0, y_3 = -1 using the trapezoidal formula.", marks: 3 },
              { q: "Define total harmonic distortion in one sentence.", marks: 2 },
            ],
          },
          {
            number: "3.4",
            title: "Fourier integral theorem",
            body: [
              "For a non-periodic function f(t) defined on the whole real line and absolutely integrable (integral of |f(t)| dt over the real line is finite), the Fourier series is replaced by the Fourier integral. The theorem states that f(t) = (1/pi) integral from 0 to infinity of [integral from -infinity to infinity of f(x) cos(omega(t - x)) dx] d omega. Equivalently, f(t) = (1/(2 pi)) integral from -infinity to infinity of [integral from -infinity to infinity of f(x) e^(-i omega x) dx] e^(i omega t) d omega. The inner integral is the Fourier transform F(omega) and the outer integral is the inverse transform.",
              "The Fourier integral is the limit of the Fourier series as the period 2 L tends to infinity. As L grows, the discrete frequencies n pi / L become a continuum, and the sums over n become integrals over omega. The factor 1/(2 pi) in front of the double integral is a normalisation that depends on convention: alternative conventions put 1/sqrt(2 pi) on each integral so that the pair is symmetric. Conditions for the theorem are that f is piecewise smooth and absolutely integrable; at a discontinuity the integral converges to the midpoint of the left and right limits, exactly like the Fourier series.",
              "Worked specialisation. If f is even, the cosine form simplifies: f(t) = (2/pi) integral from 0 to infinity of [integral from 0 to infinity of f(x) cos(omega x) dx] cos(omega t) d omega, with the cosine transform F_c(omega) = integral from 0 to infinity of f(x) cos(omega x) dx and inverse f(t) = (2/pi) integral from 0 to infinity F_c(omega) cos(omega t) d omega. If f is odd, the sine form gives f(t) = (2/pi) integral from 0 to infinity F_s(omega) sin(omega t) d omega with F_s(omega) = integral from 0 to infinity f(x) sin(omega x) dx. These one-sided transforms appear in section 3.5 and are the basis of signal-analysis applications where signals are real-valued.",
            ],
            bullets: [
              "Fourier integral: extends the Fourier series to non-periodic absolutely integrable f.",
              "Complex form: f(t) = (1/(2 pi)) integral F(omega) e^(i omega t) d omega with F the transform.",
              "Limit of the Fourier series as the period tends to infinity; sums become integrals over omega.",
              "Conditions: piecewise smooth and absolutely integrable; midpoint convergence at jumps.",
              "Even f -> cosine transform pair; odd f -> sine transform pair on (0, infinity).",
            ],
            table: {
              caption: "Fourier integral theorem in its three forms.",
              headers: ["Form", "Forward transform", "Inverse"],
              rows: [
                ["Complex", "F(omega) = integral f(x) e^(-i omega x) dx", "f(t) = (1/(2 pi)) integral F(omega) e^(i omega t) d omega"],
                ["Cosine (even f)", "F_c = integral_0^inf f(x) cos(omega x) dx", "f(t) = (2/pi) integral_0^inf F_c cos(omega t) d omega"],
                ["Sine (odd f)", "F_s = integral_0^inf f(x) sin(omega x) dx", "f(t) = (2/pi) integral_0^inf F_s sin(omega t) d omega"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "From Fourier series to Fourier integral",
              caption:
                "Top layer is the periodic series; each lower layer generalises further toward the non-periodic integral.",
              layers: [
                { label: "Fourier series (periodic f, period 2 L)", note: "discrete frequencies n pi/L" },
                { label: "Limit as 2 L -> infinity", note: "discrete frequencies become a continuum" },
                { label: "Fourier integral theorem (non-periodic f)", note: "double integral form" },
                { label: "Specialisation: even or odd f", note: "cosine or sine transform pair" },
                { label: "Signal-analysis applications", note: "section 3.5" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the integrability condition",
              body: "The Fourier integral theorem requires absolute integrability: integral of |f(t)| dt over the real line must be finite. Stating this condition explicitly is worth a mark. A function like f(t) = 1 fails the condition and has no ordinary Fourier transform, only a distributional one (a delta at omega = 0).",
            },
            keyTerms: [
              { term: "Fourier integral theorem", definition: "The representation f(t) = (1/(2 pi)) integral F(omega) e^(i omega t) d omega of an absolutely integrable non-periodic function." },
              { term: "Fourier transform", definition: "The function F(omega) = integral from -infinity to infinity of f(x) e^(-i omega x) dx of an absolutely integrable f." },
              { term: "Absolutely integrable", definition: "The condition integral of |f(t)| dt over the real line being finite, required for the Fourier integral theorem." },
            ],
            examQuestions: [
              {
                q: "State the Fourier integral theorem in both real (cosine) form and complex form, and explain how it arises as the limit of the Fourier series when the period tends to infinity. State the conditions on f, and specialise the theorem to give the cosine transform pair for an even f.",
                marks: 7,
                outline: [
                  "State the cosine form f(t) = (1/pi) integral_0^inf [integral f(x) cos(omega(t - x)) dx] d omega.",
                  "State the complex form with F(omega) = integral f(x) e^(-i omega x) dx and inverse (1/(2 pi)) integral F e^(i omega t) d omega.",
                  "Take the Fourier series on (-L, L) with frequencies n pi/L and let L -> infinity.",
                  "Identify the discrete sum over n as approximating an integral in omega.",
                  "State the conditions: piecewise smooth and absolutely integrable.",
                  "Note midpoint convergence at jumps.",
                  "For even f, halve the domain and derive the cosine transform pair F_c and its inverse.",
                ],
              },
              { q: "Write the sine transform pair for an odd f.", marks: 3 },
              { q: "State the integrability condition required by the Fourier integral theorem.", marks: 2 },
            ],
          },
          {
            number: "3.5",
            title: "Fourier transform pairs and signal analysis",
            body: [
              "The Fourier transform pair consists of F(omega) = integral from -infinity to infinity of f(t) e^(-i omega t) dt and f(t) = (1/(2 pi)) integral from -infinity to infinity of F(omega) e^(i omega t) d omega. Key properties: linearity; time shift f(t - a) -> e^(-i omega a) F(omega); frequency shift e^(i omega_0 t) f(t) -> F(omega - omega_0); time scaling f(a t) -> (1/|a|) F(omega / a); convolution theorem F of (f star g) equals F times G; and Parseval's identity integral |f(t)|^2 dt = (1/(2 pi)) integral |F(omega)|^2 d omega. The energy spectrum |F(omega)|^2 describes how the signal's energy is distributed across frequencies.",
              "Standard transform pairs include the rectangular pulse rect(t/T) of width T transforming to T sinc(omega T / 2) where sinc(x) = sin(x) / x; the Gaussian f(t) = e^(-a t^2) transforming to itself up to a scale factor (a Gaussian in time is a Gaussian in frequency); the decaying exponential e^(-a t) u(t) transforming to 1/(a + i omega); and the impulse delta(t) transforming to a constant 1. These pairs are the working table for signal analysis and parallel the standard Laplace pairs of section 1.2. The sinc function appears whenever a rectangular pulse is transformed; the first zero of sinc at omega = 2 pi / T sets the bandwidth of the rectangular pulse.",
              "Applications to signal analysis. The energy spectrum |F(omega)|^2 of a signal measures how its energy is distributed across frequencies; Parseval's identity equates total energy in time and frequency domains. Filtering multiplies F(omega) by a transfer function H(omega) to attenuate unwanted bands; the inverse transform recovers the filtered signal. Modulation (multiplying by cos(omega_0 t) in time) shifts the spectrum to plus or minus omega_0, the basis of amplitude modulation in communications. The uncertainty principle bounds the product of time-domain duration and frequency-domain bandwidth from below: a short pulse has a wide spectrum, and a narrow spectral peak requires a long signal.",
            ],
            bullets: [
              "Pair: F(omega) = integral f e^(-i omega t) dt; inverse (1/(2 pi)) integral F e^(i omega t) d omega.",
              "Properties: linearity, time/frequency shift, scaling, convolution theorem, Parseval.",
              "Standard pairs: rect -> sinc, Gaussian -> Gaussian, e^(-at) u -> 1/(a + i omega), delta -> 1.",
              "Energy spectrum |F|^2; Parseval equates time and frequency energy.",
              "Filtering multiplies F by H; modulation shifts the spectrum by omega_0.",
            ],
            codeExample: {
              language: "python",
              caption: "Numerical Fourier transform of a Gaussian pulse.",
              code: `import math
# Continuous Gaussian e^(-a t^2) sampled at N points; FFT approximates F(omega)
N = 64; dt = 0.1
t = [(-N//2 + j) * dt for j in range(N)]
a = 1.0
f = [math.exp(-a * tj * tj) for tj in t]
# Cooley-Tukey FFT (textbook) approximates the discrete Fourier transform
F = dft(f)  # assume a helper implementing sum f[k] e^(-i 2 pi j k/N)
# Compare the magnitude of F at omega = 0 to sqrt(pi/a) = sqrt(pi)
print("F(0) approx", abs(F[0]) * dt)
print("Theory sqrt(pi/a) =", math.sqrt(math.pi/a))`,
            },
            diagram: {
              kind: "matrix",
              title: "Time-domain shape vs frequency-domain shape",
              caption:
                "Two axes: time localisation (narrow vs wide) and frequency spread (narrow vs wide).",
              axes: { x: "Narrow vs wide spectrum", y: "Short vs long signal" },
              quadrants: [
                { label: "Short signal, wide spectrum", note: "rectangular pulse -> sinc" },
                { label: "Long signal, narrow spectrum", note: "long sinusoid -> delta-like peak" },
                { label: "Short signal, narrow spectrum", note: "forbidden by uncertainty principle" },
                { label: "Long signal, wide spectrum", note: "noise-like signal" },
              ],
            },
            callout: {
              type: "tip",
              title: "Parseval links time and frequency energy",
              body: "Parseval's identity integral |f(t)|^2 dt = (1/(2 pi)) integral |F(omega)|^2 d omega lets you compute signal energy in whichever domain is convenient. In digital signal processing the discrete version is the unitary DFT's energy-preservation property.",
            },
            keyTerms: [
              { term: "Fourier transform pair", definition: "The forward transform F(omega) = integral f(t) e^(-i omega t) dt and its inverse (1/(2 pi)) integral F(omega) e^(i omega t) d omega." },
              { term: "Energy spectrum", definition: "The function |F(omega)|^2 giving the distribution of a signal's energy across frequencies." },
              { term: "Parseval's identity", definition: "The equality integral |f(t)|^2 dt = (1/(2 pi)) integral |F(omega)|^2 d omega linking time-domain and frequency-domain energy." },
            ],
            examQuestions: [
              {
                q: "State the Fourier transform pair and prove the convolution theorem F of (f star g) equals F times G. State Parseval's identity. Find the Fourier transform of the rectangular pulse rect(t/T) of width T and identify its first spectral zero.",
                marks: 7,
                outline: [
                  "Write the forward F(omega) = integral f e^(-i omega t) dt and the inverse.",
                  "Compute F of (f star g) by changing the order of integration.",
                  "Recognise the inner integral as e^(-i omega tau) g(tau) and factor out G(omega).",
                  "State Parseval: integral |f|^2 dt = (1/(2 pi)) integral |F|^2 d omega.",
                  "Define rect(t/T) = 1 for |t| < T/2, 0 otherwise.",
                  "Compute the integral directly to get F(omega) = T sinc(omega T / 2).",
                  "Identify the first zero at omega T / 2 = pi, i.e. omega = 2 pi / T.",
                ],
              },
              { q: "Find the Fourier transform of e^(-a t) u(t) for a > 0.", marks: 3 },
              { q: "State how multiplication by cos(omega_0 t) affects F(omega).", marks: 2 },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Analytic Functions and Complex Differentiation",
      summary:
        "Complex functions, limits, continuity and differentiability; the Cauchy-Riemann equations in Cartesian and polar form; analytic and harmonic functions; the Milne-Thomson method for constructing analytic functions; and elementary conformal mappings including w = z^2, 1/z and the Mobius transformation.",
      chapter: {
        number: "04",
        title: "Analytic Functions and Complex Differentiation",
        intro:
          "Unit IV enters the complex plane. The five sections cover limits, continuity and differentiability of complex functions; the Cauchy-Riemann equations in Cartesian and polar coordinates; analytic functions and their harmonic real and imaginary parts; the Milne-Thomson method that builds an analytic function from its real or imaginary part; and the elementary conformal mappings w = z^2, 1/z and the Mobius transform.",
        inOneBreath:
          "A complex function f = u + i v is differentiable at z_0 if the limit of [f(z) - f(z_0)]/(z - z_0) exists and is the same in every direction; this requires the Cauchy-Riemann equations u_x = v_y and u_y = -v_x (or u_r = (1/r) v_theta, v_r = -(1/r) u_theta in polar form) and continuous partials; if f is differentiable throughout a neighbourhood it is analytic, and then u and v are harmonic (satisfy Laplace's equation); Milne-Thomson constructs f(z) = integral phi(z, 0) dz + i integral psi(z, 0) dz from u = phi(x, y) and v = psi(x, y); and conformal maps w = z^2, 1/z and (a z + b)/(c z + d) preserve angles and map circles and lines to circles and lines.",
        sections: [
          {
            number: "4.1",
            title: "Complex functions, limits, continuity, differentiability",
            body: [
              "A complex function f(z) maps a subset of the complex plane to the complex plane; writing z = x + i y and w = u + + i v gives w = f(z) = u(x, y) + i v(x, y), a pair of real functions of two real variables. The limit of f(z) as z approaches z_0 is L if for every epsilon > 0 there is delta > 0 with |f(z) - L| < epsilon whenever 0 < |z - z_0| < delta; crucially, the limit must be the same regardless of the direction from which z approaches z_0. Continuity at z_0 means lim f(z) = f(z_0), equivalently u and v are continuous at (x_0, y_0).",
              "Differentiability in the complex sense is far more restrictive than in the real sense. The derivative f'(z_0) is the limit of [f(z) - f(z_0)] / (z - z_0) as z approaches z_0; this limit must exist and be the same for every direction of approach. Compare with the real derivative, which only considers two-sided approach along the real line. Worked example: f(z) = conjugate of z is not differentiable anywhere. Approaching along the real axis gives derivative 1; approaching along the imaginary axis gives derivative -1; the limit depends on direction, so it does not exist. In contrast f(z) = z^2 has derivative 2 z everywhere, by direct limit calculation.",
              "Differentiability at a single point is weak; the powerful notion is analyticity. A function is analytic at z_0 if it is differentiable at every point in some neighbourhood of z_0; a function analytic on the whole plane is called entire. Polynomials in z are entire; so are e^z, sin z, cos z, sinh z, cosh z. The function 1/z is analytic everywhere except at z = 0; log z is analytic everywhere except along a chosen branch cut. The next two sections formalise analyticity through the Cauchy-Riemann equations and the harmonic-property of u and v. The direction-independence of the complex limit is the deep reason why analytic functions enjoy their remarkable properties.",
            ],
            bullets: [
              "f(z) = u(x, y) + i v(x, y); a pair of real functions of two real variables.",
              "Complex limit must be the same for every direction of approach - directional independence.",
              "Differentiability: limit of [f(z) - f(z_0)]/(z - z_0) exists and is direction-independent.",
              "Conjugate of z is not differentiable anywhere: real-axis derivative 1, imaginary-axis derivative -1.",
              "Analytic at z_0 means differentiable in some neighbourhood; entire means analytic everywhere.",
            ],
            table: {
              caption: "Differentiability status of common complex functions.",
              headers: ["Function", "Differentiable where", "Analytic where"],
              rows: [
                ["z^2", "everywhere", "entire"],
                ["conjugate of z", "nowhere", "nowhere"],
                ["1/z", "z != 0", "z != 0"],
                ["e^z, sin z, cos z", "everywhere", "entire"],
                ["log z (principal branch)", "off the branch cut", "off the branch cut"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From complex function to analytic function",
              caption:
                "Each stage strengthens the requirement; only the last unlocks the powerful theorems.",
              steps: [
                { label: "Write f = u + i v", note: "two real functions of (x, y)" },
                { label: "Check continuity of u, v", note: "limit matches value" },
                { label: "Check differentiability at a point", note: "direction-independent limit" },
                { label: "Verify Cauchy-Riemann", note: "section 4.2" },
                { label: "Confirm analyticity in a neighbourhood", note: "differentiable throughout" },
              ],
            },
            callout: {
              type: "warning",
              title: "Complex differentiability is not real differentiability",
              body: "A function of two real variables can be differentiable in the real sense without being complex-differentiable. The conjugate function is real-smooth everywhere but complex-differentiable nowhere. Always check direction-independence of the limit, not just that the partial derivatives exist.",
            },
            keyTerms: [
              { term: "Complex derivative", definition: "The direction-independent limit of [f(z) - f(z_0)] / (z - z_0) as z approaches z_0." },
              { term: "Analytic function", definition: "A function differentiable at every point in some open neighbourhood of z_0." },
              { term: "Entire function", definition: "A function analytic on the whole complex plane, such as e^z or any polynomial in z." },
            ],
            examQuestions: [
              {
                q: "Define the limit, continuity and derivative of a complex function f(z), explaining the role of direction-independence. Show that f(z) = conjugate of z is not differentiable at any point, while f(z) = z^2 is differentiable everywhere. Define an analytic function and give two examples of entire functions.",
                marks: 7,
                outline: [
                  "State the epsilon-delta definition of the complex limit and note direction-independence.",
                  "Define continuity as lim f(z) = f(z_0) and link to continuity of u and v.",
                  "Write the difference quotient [f(z) - f(z_0)]/(z - z_0) and require direction-independent limit.",
                  "For conjugate of z, approach along real axis to get derivative +1 and along imaginary axis to get -1.",
                  "Conclude the limit depends on direction so conjugate of z is nowhere differentiable.",
                  "For z^2, expand (z + h)^2 - z^2 = 2 z h + h^2 and divide by h, limit 2 z exists in every direction.",
                  "Define analyticity; give e^z and z^2 as entire functions.",
                ],
              },
              { q: "State the difference between a function differentiable at a point and one analytic at a point.", marks: 3 },
              { q: "Name two entire functions and one function analytic everywhere except at z = 0.", marks: 2 },
            ],
          },
          {
            number: "4.2",
            title: "Cauchy-Riemann equations (Cartesian and polar)",
            body: [
              "The Cauchy-Riemann (C-R) equations are the necessary and sufficient condition for a complex function f(z) = u(x, y) + i v(x, y) to be differentiable at a point (given that the partial derivatives are continuous there). In Cartesian form they read u_x = v_y and u_y = -v_x. They are derived by requiring the derivative limit along the real axis (delta y = 0) to match the limit along the imaginary axis (delta x = 0). If both limits agree, the common value is f'(z) = u_x + i v_x = v_y - i u_y. The C-R equations are therefore a paired set of partial differential equations linking u and v.",
              "Polar form. Writing z = r e^(i theta), the C-R equations become u_r = (1/r) v_theta and v_r = -(1/r) u_theta. They arise from the same direction-independence applied to delta r and r delta theta. The derivative in polar form is f'(z) = e^(-i theta) (u_r + i v_r). Worked example: f(z) = z^n = r^n (cos(n theta) + i sin(n theta)) has u = r^n cos(n theta), v = r^n sin(n theta); check u_r = n r^(n-1) cos(n theta) and (1/r) v_theta = n r^(n-1) cos(n theta), matching; similarly v_r = -(1/r) u_theta. So z^n is analytic with derivative n z^(n-1), as expected.",
              "Worked example in Cartesian form. Test f(z) = x^2 - y^2 + i (2 x y), which is z^2 in disguise. We have u = x^2 - y^2, v = 2 x y; compute u_x = 2 x = v_y, u_y = -2 y = -v_x. The C-R equations hold everywhere with continuous partials, so f is entire and f'(z) = u_x + i v_x = 2 x + i 2 y = 2 z, matching the direct derivative of z^2. A counter-example: f(z) = x + i (-y) (the conjugate of z) has u = x, v = -y; then u_x = 1, v_y = -1, so u_x != v_y and C-R fails everywhere - consistent with the non-differentiability shown in section 4.1.",
            ],
            bullets: [
              "Cartesian C-R: u_x = v_y and u_y = -v_x; necessary for differentiability.",
              "Sufficient when the partial derivatives are continuous in a neighbourhood.",
              "Derivative: f'(z) = u_x + i v_x = v_y - i u_y at the point.",
              "Polar C-R: u_r = (1/r) v_theta and v_r = -(1/r) u_theta; f'(z) = e^(-i theta)(u_r + i v_r).",
              "Test f = z^2 and f = conjugate of z to verify the rule against direct computation.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy checks the Cauchy-Riemann equations for f(z) = z^2.",
              code: `from sympy import symbols, diff, simplify
x, y = symbols('x y', real=True)
# f(z) = z^2 = (x^2 - y^2) + i (2 x y); u and v:
u = x**2 - y**2
v = 2*x*y
ux, uy = diff(u, x), diff(u, y)
vx, vy = diff(v, x), diff(v, y)
print("u_x - v_y =", simplify(ux - vy))   # 0 -> first CR equation holds
print("u_y + v_x =", simplify(uy + vx))   # 0 -> second CR equation holds
print("f'(z) = u_x + i v_x =", simplify(ux), "+ i *", simplify(vx))  # 2x + i*2y = 2z`,
            },
            diagram: {
              kind: "compare",
              title: "Cartesian vs polar Cauchy-Riemann",
              caption:
                "Same condition, two coordinate systems; choose by the symmetry of the problem.",
              left: {
                heading: "Cartesian C-R",
                items: [
                  "u_x = v_y",
                  "u_y = -v_x",
                  "Requires continuous partials u_x, u_y, v_x, v_y.",
                  "Derivative f'(z) = u_x + i v_x.",
                  "Best when u, v are polynomials in x, y.",
                ],
              },
              right: {
                heading: "Polar C-R",
                items: [
                  "u_r = (1/r) v_theta",
                  "v_r = -(1/r) u_theta",
                  "Requires continuous partials in r, theta.",
                  "Derivative f'(z) = e^(-i theta) (u_r + i v_r).",
                  "Best when u, v are powers of r times cos(n theta).",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Always verify continuity of the partials",
              body: "Satisfying the C-R equations at a point is necessary but not sufficient; the partials must also be continuous in a neighbourhood. State this explicitly in exam answers: 'the partial derivatives are continuous and satisfy C-R, hence f is analytic at the point.' Examiners reward the explicit mention of sufficiency.",
            },
            keyTerms: [
              { term: "Cauchy-Riemann equations", definition: "The paired conditions u_x = v_y and u_y = -v_x (Cartesian) or u_r = (1/r) v_theta and v_r = -(1/r) u_theta (polar), necessary for complex differentiability." },
              { term: "Continuous partials", definition: "A sufficient additional condition with C-R for analyticity; the first partials of u and v must be continuous in a neighbourhood." },
              { term: "Direction-independence", definition: "The requirement that the difference-quotient limit is the same along every approach direction; the defining property of the complex derivative." },
            ],
            examQuestions: [
              {
                q: "Derive the Cauchy-Riemann equations in Cartesian form by equating the derivative limit along the real and imaginary axes. State the polar form. Test f(z) = x^2 - y^2 + i (2 x y) and f(z) = x - i y, and conclude which is analytic.",
                marks: 7,
                outline: [
                  "Write the difference quotient and approach along delta y = 0 to get f'(z) = u_x + i v_x.",
                  "Approach along delta x = 0 to get f'(z) = v_y - i u_y.",
                  "Equate real and imaginary parts to obtain u_x = v_y and u_y = -v_x.",
                  "State the polar form u_r = (1/r) v_theta, v_r = -(1/r) u_theta.",
                  "For f = (x^2 - y^2) + i(2 x y), compute u_x = 2 x = v_y and u_y = -2 y = -v_x; C-R holds with continuous partials, so f is entire.",
                  "For f = x - i y (conjugate of z), compute u_x = 1 and v_y = -1, so C-R fails everywhere.",
                  "Conclude the first function is analytic with f'(z) = 2 z; the second is nowhere differentiable.",
                ],
              },
              { q: "Write the Cauchy-Riemann equations in polar form and state f'(z) in terms of u_r, v_r.", marks: 3 },
              { q: "Give the sufficient condition, alongside C-R, for f to be analytic at a point.", marks: 2 },
            ],
          },
          {
            number: "4.3",
            title: "Analytic and harmonic functions",
            body: [
              "A function is analytic in a domain D if it is differentiable at every point of D. The deep consequence of the C-R equations is that if f = u + i v is analytic, then u and v are harmonic: each satisfies Laplace's equation, u_xx + u_yy = 0 and v_xx + v_yy = 0. This follows by differentiating the C-R equations: u_xx = v_yx and u_yy = -v_yx (with continuous second partials making the mixed partials equal), so u_xx + u_yy = 0. The same argument gives v_xx + v_yy = 0. Conversely, given a harmonic u on a simply-connected domain, a harmonic conjugate v exists such that u + i v is analytic; v is found by integration along paths in the plane.",
              "Harmonic functions have remarkable properties. They satisfy the mean-value property: u(z_0) equals the average of u over any circle centred at z_0 lying in the domain. They obey the maximum principle: a non-constant harmonic function cannot attain its maximum or minimum in the interior of its domain. They are infinitely differentiable. Worked example: u(x, y) = x^2 - y^2 is harmonic because u_xx = 2, u_yy = -2, sum zero. Find its harmonic conjugate: from u_x = 2 x = v_y integrate to get v = 2 x y + g(x); from u_y = -2 y = -v_x = -2 y - g'(x), so g'(x) = 0 and g is constant. Thus v = 2 x y (plus constant) and f = u + i v = z^2 + i C, recovering section 4.2's example.",
              "Harmonic functions arise physically as steady-state temperature distributions, electrostatic potentials in charge-free regions, and velocity potentials of incompressible irrotational fluid flow. The harmonic conjugate v then represents the corresponding stream function (in fluid flow) or the magnetic vector potential (in electromagnetism). Because analytic functions are locally the composition of a harmonic function with its harmonic conjugate, every analytic function encodes a pair of physical fields. The Milne-Thomson method of section 4.4 systematises the construction of f from u alone; here the link runs the other way, from analytic f to a harmonic pair (u, v).",
            ],
            bullets: [
              "Analytic in D: differentiable at every point of D.",
              "Harmonic: u satisfies Laplace's equation u_xx + u_yy = 0.",
              "If f = u + i v is analytic, both u and v are harmonic - by differentiating the C-R equations.",
              "Mean-value property and maximum principle characterise harmonic functions.",
              "Harmonic conjugate v exists for any harmonic u on a simply-connected domain.",
            ],
            table: {
              caption: "Properties of analytic and harmonic functions.",
              headers: ["Property", "Analytic f", "Harmonic u"],
              rows: [
                ["Differentiable", "everywhere in D", "not directly defined"],
                ["Laplace equation", "u, v both satisfy", "u_xx + u_yy = 0"],
                ["Mean-value property", "inherited via u, v", "u(z_0) = circle average"],
                ["Maximum principle", "modulus maximum on boundary", "interior max forbidden"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The hierarchy: analytic, harmonic, smooth",
              caption:
                "Each tier strengthens the previous. Analytic functions sit at the top.",
              tiers: [
                { label: "Analytic f = u + i v", note: "differentiable throughout D; both u, v harmonic" },
                { label: "Harmonic u", note: "satisfies Laplace; has a harmonic conjugate" },
                { label: "Smooth u, v", note: "infinitely differentiable real functions" },
              ],
            },
            callout: {
              type: "tip",
              title: "Solve for v by integration",
              body: "To find the harmonic conjugate of u, integrate u_x with respect to y to get v up to g(x), then use u_y = -v_x to fix g'(x) = 0. Always end with v + i C, the arbitrary imaginary constant that preserves analyticity.",
            },
            keyTerms: [
              { term: "Analytic function", definition: "A function differentiable at every point of an open domain D; equivalently, satisfies C-R with continuous partials throughout D." },
              { term: "Harmonic function", definition: "A twice continuously differentiable function u satisfying Laplace's equation u_xx + u_yy = 0." },
              { term: "Harmonic conjugate", definition: "A harmonic function v such that u + i v is analytic; exists for any harmonic u on a simply-connected domain." },
            ],
            examQuestions: [
              {
                q: "Prove that if f = u + i v is analytic, then u and v are harmonic. Define harmonic conjugate. Find the harmonic conjugate of u(x, y) = x^2 - y^2 and identify the resulting analytic function. State the mean-value property and the maximum principle for harmonic functions.",
                marks: 7,
                outline: [
                  "Assume f analytic with continuous second partials.",
                  "Differentiate u_x = v_y with respect to x: u_xx = v_yx.",
                  "Differentiate u_y = -v_x with respect to y: u_yy = -v_xy.",
                  "Use equality of mixed partials to add: u_xx + u_yy = 0; same for v.",
                  "Define harmonic conjugate: v harmonic with u + i v analytic.",
                  "For u = x^2 - y^2: integrate u_x = 2 x = v_y to v = 2 x y + g(x); use u_y = -2 y = -v_x to get g'(x) = 0; conclude v = 2 x y.",
                  "State the mean-value property and the maximum principle.",
                ],
              },
              { q: "Verify that u(x, y) = e^x cos y is harmonic.", marks: 3 },
              { q: "State the maximum principle for harmonic functions.", marks: 2 },
            ],
          },
          {
            number: "4.4",
            title: "Milne-Thomson method",
            body: [
              "The Milne-Thomson method constructs an analytic function f(z) from a known real part u(x, y) (or known imaginary part v(x, y)) without explicitly solving for the harmonic conjugate by path integration. Write f(z) = u(x, y) + i v(x, y). Substitute y = 0 and x = z to obtain u(z, 0); define phi(z) = u(z, 0). The Milne-Thomson formula states that f(z) = integral of phi(z) dz + i C, where the integration is with respect to z, and C is an arbitrary real constant. The formula is the practical recipe when u is given as a polynomial or simple expression in x and y.",
              "The symmetric version for known imaginary part: write psi(z) = v(z, 0); then f(z) = i integral of psi(z) dz + C, with C real. Both formulas derive from the C-R equations and the integration-by-parts logic of the harmonic-conjugate construction, but they package the work into a single substitution and integration. Worked example: given u(x, y) = x^3 - 3 x y^2 + 2 x + 1, compute phi(z) = u(z, 0) = z^3 + 2 z + 1. Integrate with respect to z: integral of (z^3 + 2 z + 1) dz = z^4/4 + z^2 + z. Thus f(z) = z^4/4 + z^2 + z + i C, where C is an arbitrary real constant.",
              "Verification. Differentiate f(z) = z^4/4 + z^2 + z to get f'(z) = z^3 + 2 z + 1. The real part of f' at z = x + i y is u_x, and the formula ensures u_x + i v_x = f'(z); the Milne-Thomson substitution automatically aligns the real part. The method extends to non-polynomial u by the same recipe but requires care with branch cuts when logarithms or fractional powers appear. For known v rather than u, swap roles and use the symmetric formula. The method's value in exams is speed: a single substitution, one integration, and the arbitrary imaginary constant closes the answer.",
            ],
            bullets: [
              "Milne-Thomson constructs f(z) from u(x, y) by substituting y = 0, x = z to get phi(z) = u(z, 0).",
              "Formula: f(z) = integral of phi(z) dz + i C, with C an arbitrary real constant.",
              "Symmetric version: if v is known, f(z) = i integral of psi(z) dz + C.",
              "Recipe: substitute, integrate, append the imaginary constant.",
              "Verify by differentiating f and checking that Re(f') gives u_x.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy performs the Milne-Thomson substitution and integration.",
              code: `from sympy import symbols, integrate, simplify
z = symbols('z')
# Given u(x, y) = x^3 - 3 x y^2 + 2 x + 1
# Substitute y = 0, x = z to obtain phi(z)
phi = z**3 + 2*z + 1
# Integrate with respect to z
f = integrate(phi, z)
print("phi(z) =", phi)
print("f(z)   =", f, "+ i C")
# Verify derivative real part is u_x at y = 0: f'(z) = z^3 + 2 z + 1
print("f'(z)  =", simplify(f.diff(z)))`,
            },
            diagram: {
              kind: "pipeline",
              title: "Milne-Thomson recipe in five stages",
              caption:
                "From the given real part u(x, y) to the analytic f(z) up to an imaginary constant.",
              stages: [
                { label: "Given u(x, y)", note: "harmonic real part" },
                { label: "Substitute y = 0, x = z", note: "obtain phi(z) = u(z, 0)" },
                { label: "Integrate phi(z) with respect to z", note: "antiderivative in z" },
                { label: "Append + i C", note: "arbitrary real constant" },
                { label: "Verify by differentiating f", note: "Re(f') = u_x at y = 0" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always end with + i C",
              body: "The Milne-Thomson construction produces f up to an additive imaginary constant i C because only the real part u was specified; any imaginary constant preserves Re(f). Examiners explicitly look for '+ i C' (or '+ C' if v was given) in the final answer; omitting it loses the closing mark.",
            },
            keyTerms: [
              { term: "Milne-Thomson method", definition: "A recipe constructing an analytic function f(z) from its real part u(x, y) by the substitution y = 0, x = z and integration: f(z) = integral of u(z, 0) dz + i C." },
              { term: "Phi(z) substitution", definition: "The intermediate function phi(z) = u(z, 0) obtained by setting y = 0 and x = z in the real part u(x, y)." },
              { term: "Arbitrary imaginary constant", definition: "The additive i C appearing in Milne-Thomson answers, reflecting that only the real part was specified." },
            ],
            examQuestions: [
              {
                q: "State the Milne-Thomson formula for constructing an analytic function f(z) from its real part u(x, y), and outline its derivation. Use it to construct f(z) given u(x, y) = x^3 - 3 x y^2 + 2 x + 1. Verify your answer by differentiation.",
                marks: 7,
                outline: [
                  "Write f(z) = u(x, y) + i v(x, y) and the C-R equations.",
                  "Substitute y = 0, x = z to obtain phi(z) = u(z, 0).",
                  "State the formula f(z) = integral of phi(z) dz + i C.",
                  "Compute phi(z) = z^3 + 2 z + 1 for the given u.",
                  "Integrate to get f(z) = z^4/4 + z^2 + z + i C.",
                  "Differentiate to obtain f'(z) = z^3 + 2 z + 1.",
                  "Verify Re(f'(z)) at y = 0 matches u_x(z, 0) = 3 z^2 + 2.",
                ],
              },
              { q: "State the symmetric Milne-Thomson formula for constructing f from a known imaginary part v(x, y).", marks: 3 },
              { q: "Why does the answer carry an arbitrary imaginary constant i C?", marks: 2 },
            ],
          },
          {
            number: "4.5",
            title: "Conformal mapping (elementary)",
            body: [
              "A conformal mapping is an analytic function f(z) whose derivative is non-zero at the point of interest; it preserves angles between curves and the orientation of small figures. Locally, f behaves like its linear approximation f(z_0) + f'(z_0) (z - z_0), a similarity transformation (rotation by arg f'(z_0) and scaling by |f'(z_0)|). Conformal maps are used to transform complicated domains into simple ones (typically the unit disk or upper half-plane), solve a boundary-value problem there, and transform the solution back. The Riemann mapping theorem guarantees that any simply-connected proper subdomain of the plane can be mapped conformally onto the unit disk.",
              "Three elementary conformal maps. (1) w = z^2 doubles angles at the origin and maps the upper half-plane to the plane slit along the positive real axis; it is conformal everywhere except at z = 0 where the derivative vanishes. Circles through the origin map to cardioids, hyperbolas to other conic sections. (2) w = 1/z is an inversion in the unit circle followed by reflection in the real axis; it maps circles and lines to circles and lines (generalised circles), and swaps the inside and outside of the unit circle. It is conformal everywhere except at z = 0, where it has a pole. (3) The Mobius transformation w = (a z + b) / (c z + d) with a d - b c non-zero maps the extended complex plane (the Riemann sphere) onto itself, taking generalised circles to generalised circles.",
              "Mobius transformations have rich geometry. They are bijective on the Riemann sphere, with inverse w = (d w_2 - b) / (-c w_2 + a) when the original is w = (a z + b) / (c z + d). Three distinct points in the z-plane determine a unique Mobius transformation by prescribing their images; the cross-ratio (z - z_1)(z_2 - z_3) / [(z - z_3)(z_2 - z_1)] is invariant under Mobius maps, a fact used to construct transformations between domains bounded by generalised circles. Worked example: find a Mobius map sending 0 -> 1, 1 -> infinity, infinity -> 0. The conditions force w = 1 / (1 - z); check w(0) = 1, w(1) = infinity, w(infinity) = 0. Conformal mapping is the geometric core of complex analysis and the practical tool of two-dimensional electrostatics and fluid dynamics.",
            ],
            bullets: [
              "Conformal: analytic with non-zero derivative; preserves angles and orientation locally.",
              "w = z^2 doubles angles at origin; conformal except at z = 0.",
              "w = 1/z inverts in unit circle and reflects; maps generalised circles to generalised circles.",
              "Mobius w = (a z + b)/(c z + d) with a d - b c != 0 maps the Riemann sphere onto itself.",
              "Three points and their images determine a unique Mobius transformation.",
            ],
            table: {
              caption: "Three elementary conformal maps compared.",
              headers: ["Map", "Where conformal", "Key geometric effect"],
              rows: [
                ["w = z^2", "z != 0", "doubles angles; maps upper half-plane to slit plane"],
                ["w = 1/z", "z != 0", "inverts in unit circle; swaps inside and outside"],
                ["Mobius (a z + b)/(c z + d)", "everywhere on Riemann sphere", "preserves generalised circles; cross-ratio invariant"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Conformal maps by purpose",
              caption:
                "Two axes: target domain (disk vs half-plane) and source geometry (polygon vs circle).",
              axes: { x: "Target: disk vs half-plane", y: "Source: polygon vs circle" },
              quadrants: [
                { label: "Polygon -> disk", note: "Schwarz-Christoffel (advanced)" },
                { label: "Circle -> disk", note: "Mobius transformation" },
                { label: "Polygon -> half-plane", note: "Schwarz-Christoffel + inversion" },
                { label: "Circle -> half-plane", note: "Mobius with one pole on the boundary" },
              ],
            },
            callout: {
              type: "tip",
              title: "Three points fix a Mobius map",
              body: "A Mobius transformation is determined by prescribing the images of three distinct points. Set up w = (a z + b)/(c z + d), substitute the three pairs, and solve for a, b, c, d up to a common factor. The cross-ratio (z - z_1)(z_2 - z_3) / [(z - z_3)(z_2 - z_1)] gives the answer directly.",
            },
            keyTerms: [
              { term: "Conformal mapping", definition: "An analytic function with non-zero derivative at the point of interest, preserving angles and orientation locally." },
              { term: "Mobius transformation", definition: "The map w = (a z + b)/(c z + d) with a d - b c non-zero, a bijection of the Riemann sphere mapping generalised circles to generalised circles." },
              { term: "Cross-ratio", definition: "The expression (z - z_1)(z_2 - z_3) / [(z - z_3)(z_2 - z_1)], invariant under Mobius transformations and used to construct them from three prescribed point pairs." },
            ],
            examQuestions: [
              {
                q: "Define a conformal mapping and state the condition under which an analytic function is conformal. Discuss the mappings w = z^2, w = 1/z and the Mobius transformation w = (a z + b)/(c z + d), stating where each is conformal. Find the Mobius transformation that sends 0 -> 1, 1 -> infinity, infinity -> 0.",
                marks: 7,
                outline: [
                  "Define conformal: analytic with f'(z_0) != 0, so angles and orientation are locally preserved.",
                  "For w = z^2, derivative 2 z vanishes only at z = 0; conformal elsewhere; doubles angles.",
                  "For w = 1/z, derivative -1/z^2 vanishes nowhere on C minus 0; conformal except at the pole z = 0.",
                  "For Mobius, derivative (a d - b c)/(c z + d)^2 is non-zero if a d - b c != 0; conformal everywhere on the Riemann sphere.",
                  "Set w(0) = 1, w(1) = infinity, w(infinity) = 0.",
                  "w(1) = infinity forces the denominator to vanish at z = 1, so c = -d (up to scale).",
                  "Solve to get w = 1/(1 - z), and verify the three prescribed values.",
                ],
              },
              { q: "State what is preserved by a Mobius transformation.", marks: 3 },
              { q: "Where does w = z^2 fail to be conformal, and why?", marks: 2 },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Complex Integration and Z-Transforms",
      summary:
        "Cauchy's integral theorem and formula, Taylor and Laurent series, residues and the residue theorem, evaluation of real integrals by contour integration, and Z-transforms with properties, inversion, and difference-equation applications.",
      chapter: {
        number: "05",
        title: "Complex Integration and Z-Transforms",
        intro:
          "Unit V closes the subject with complex integration and discrete transforms. The five sections cover Cauchy's integral theorem and formula, the Taylor and Laurent series expansions of analytic functions, residues and the residue theorem, the evaluation of real integrals by contour integration, and the Z-transform with its properties, inversion, and use in solving linear difference equations, closing with the relation between the Z-transform and the Laplace transform.",
        inOneBreath:
          "Cauchy's integral theorem says integral around a closed contour of an analytic function is zero; Cauchy's integral formula gives f(z_0) = (1/(2 pi i)) integral f(z)/(z - z_0) dz, generalising to derivatives; Taylor series of an analytic function about z_0 converges inside the largest disk free of singularities; Laurent series allows negative powers and converges in an annulus, isolating the principal part whose coefficient of (z - z_0)^(-1) is the residue; the residue theorem evaluates integrals around closed contours as 2 pi i times the sum of enclosed residues; real integrals of rational functions and trigonometric forms are evaluated by closing contours in the upper or lower half-plane; and the Z-transform Z{x_n} = sum x_n z^(-n) is the discrete counterpart of the Laplace transform, with properties mirroring linearity, shifting, and convolution, invertible by partial fractions or power series, and applied to linear difference equations.",
        sections: [
          {
            number: "5.1",
            title: "Cauchy's integral theorem and formula",
            body: [
              "Cauchy's integral theorem is the foundational result of complex integration. If f is analytic in a simply-connected domain D and C is a simple closed contour in D, then the integral of f(z) dz around C is zero. Equivalently, the integral of f between two points is path-independent in D, so f has an antiderivative F with F' = f throughout D. The theorem is proved under the hypothesis of continuous partials by applying Green's theorem to the real and imaginary parts and invoking the C-R equations; the more general version relaxes the continuity assumption by an approximation argument.",
              "Cauchy's integral formula is the direct corollary. If f is analytic inside and on a simple closed contour C oriented positively, and z_0 lies inside C, then f(z_0) = (1/(2 pi i)) integral around C of f(z)/(z - z_0) dz. Differentiating under the integral gives the generalized formula f^(n)(z_0) = (n!/(2 pi i)) integral around C of f(z)/(z - z_0)^(n+1) dz. These formulas express the values of f and its derivatives at interior points purely in terms of boundary values, a remarkable rigidity that has no real-variable analogue.",
              "Worked example. Compute integral around the unit circle of e^z / z dz. The integrand has a singularity at z = 0 inside the contour. By Cauchy's integral formula with z_0 = 0 and f(z) = e^z, the integral equals 2 pi i times f(0) = 2 pi i. A second example: integral around |z| = 2 of sin(z)/(z - 1)^3 dz. Here z_0 = 1 is inside the contour; the generalised formula with n = 2 gives (2!/(2 pi i)) times f''(1) where f = sin. The integral is 2 pi i times f''(1) = 2 pi i times (-sin 1). These examples show how Cauchy's formula converts a contour integral into a derivative evaluation - the basis of residue calculus in section 5.3.",
            ],
            bullets: [
              "Cauchy's integral theorem: integral of f dz around a closed contour in a simply-connected analytic domain is zero.",
              "Consequence: f has an antiderivative F with F' = f; integrals are path-independent.",
              "Cauchy's integral formula: f(z_0) = (1/(2 pi i)) integral_C f(z)/(z - z_0) dz.",
              "Generalised formula: f^(n)(z_0) = (n!/(2 pi i)) integral_C f(z)/(z - z_0)^(n+1) dz.",
              "Worked: integral_{|z|=1} e^z / z dz = 2 pi i; integral_{|z|=2} sin z/(z-1)^3 dz = -2 pi i sin 1.",
            ],
            table: {
              caption: "Two foundational results and their typical uses.",
              headers: ["Result", "Statement", "Typical use"],
              rows: [
                ["Cauchy's integral theorem", "integral_C f dz = 0 for f analytic in simply-connected D", "path independence; antiderivatives"],
                ["Cauchy's integral formula", "f(z_0) = (1/(2 pi i)) integral f(z)/(z - z_0) dz", "value at interior point from boundary"],
                ["Generalised formula", "f^(n)(z_0) = (n!/(2 pi i)) integral f(z)/(z - z_0)^(n+1) dz", "derivatives from boundary values"],
                ["Worked example", "integral_{|z|=1} e^z / z dz", "= 2 pi i (apply formula with f = e^z)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From Cauchy's theorem to residue calculus",
              caption:
                "Each result unlocks the next; the final residue theorem is the workhorse of section 5.3.",
              steps: [
                { label: "Cauchy's integral theorem", note: "integral_C f dz = 0" },
                { label: "Cauchy's integral formula", note: "value at z_0 from boundary" },
                { label: "Generalised formula", note: "derivatives from boundary" },
                { label: "Laurent series expansion", note: "section 5.2" },
                { label: "Residue theorem", note: "section 5.3" },
              ],
            },
            callout: {
              type: "exam",
              title: "Identify the singularity inside C before applying the formula",
              body: "Before invoking Cauchy's formula, list the singularities of the integrand and check which lie inside C. The formula applies only to those inside; singularities outside contribute nothing. A common slip is to count a singularity that lies on the contour itself, where the formula breaks down and the principal-value integral must be used instead.",
            },
            keyTerms: [
              { term: "Cauchy's integral theorem", definition: "The result that the integral of an analytic function around a simple closed contour in a simply-connected domain is zero." },
              { term: "Cauchy's integral formula", definition: "The formula f(z_0) = (1/(2 pi i)) integral_C f(z)/(z - z_0) dz expressing an interior value in terms of boundary values." },
              { term: "Simply-connected domain", definition: "A domain in which every closed curve can be continuously shrunk to a point without leaving the domain; required for Cauchy's theorem in its basic form." },
            ],
            examQuestions: [
              {
                q: "State Cauchy's integral theorem and Cauchy's integral formula, including the generalised form for derivatives. Use the formula to evaluate integral around |z| = 1 of e^z / z dz and integral around |z| = 2 of sin(z)/(z - 1)^3 dz.",
                marks: 7,
                outline: [
                  "State Cauchy's integral theorem with the hypothesis of analyticity in a simply-connected domain.",
                  "State Cauchy's integral formula f(z_0) = (1/(2 pi i)) integral_C f(z)/(z - z_0) dz.",
                  "State the generalised formula f^(n)(z_0) = (n!/(2 pi i)) integral_C f(z)/(z - z_0)^(n+1) dz.",
                  "For the first integral, identify z_0 = 0 inside |z| = 1 and f(z) = e^z.",
                  "Apply the formula to get 2 pi i times f(0) = 2 pi i.",
                  "For the second, identify z_0 = 1 inside |z| = 2, n = 2, f(z) = sin z.",
                  "Compute f''(1) = -sin 1 and conclude the integral is 2 pi i times (-sin 1) = -2 pi i sin 1.",
                ],
              },
              { q: "State the generalised Cauchy formula for the n-th derivative of an analytic function.", marks: 3 },
              { q: "Give the value of integral_C dz/(z - z_0) where C is a positively oriented circle around z_0.", marks: 2 },
            ],
          },
          {
            number: "5.2",
            title: "Taylor and Laurent series",
            body: [
              "A Taylor series of an analytic function f about z_0 is the power series f(z) = sum from n = 0 to infinity of a_n (z - z_0)^n with a_n = f^(n)(z_0)/n!. It converges inside the largest open disk centred at z_0 in which f is analytic, and diverges outside; the radius of convergence R is the distance from z_0 to the nearest singularity. Examples: e^z = sum z^n/n! about 0 with R = infinity; 1/(1 - z) = sum z^n about 0 with R = 1 (pole at z = 1); sin z and cos z have Taylor series with R = infinity. Taylor series of analytic functions coincide with their real-variable Taylor series when both apply.",
              "Laurent series generalises Taylor series by allowing negative powers: f(z) = sum from n = -infinity to infinity of a_n (z - z_0)^n, converging in an annulus r < |z - z_0| < R. The non-negative part is the analytic (regular) part; the negative part is the principal part, encoding the singularity at z_0. A removable singularity has no principal part; a pole of order m has a principal part ending at (z - z_0)^(-m); an essential singularity has infinitely many negative-power terms. The coefficient a_(-1) of (z - z_0)^(-1) is called the residue of f at z_0 and is the central object of section 5.3.",
              "Worked example. Expand f(z) = 1 / [(z - 1)(z - 2)] in a Laurent series valid in the annulus 1 < |z| < 2. Use partial fractions: 1/[(z - 1)(z - 2)] = -1/(z - 1) + 1/(z - 2). In the annulus 1 < |z| < 2, write 1/(z - 1) = (1/z) (1/(1 - 1/z)) = sum_{n >= 0} z^(-n-1) for |z| > 1, and 1/(z - 2) = -1/2 (1/(1 - z/2)) = -1/2 sum_{n >= 0} (z/2)^n for |z| < 2. Combining, the Laurent series is sum_{n >= 0} z^(-n-1) - (1/2) sum_{n >= 0} (z/2)^n, with negative powers from the first piece and non-negative from the second. The residue at z = 1 is the coefficient of (z - 1)^(-1) computed directly as limit (z - 1) f(z) at z = 1, which is 1/(1 - 2) = -1.",
            ],
            bullets: [
              "Taylor series: f(z) = sum a_n (z - z_0)^n with a_n = f^(n)(z_0)/n!; converges in the largest analytic disk.",
              "Radius of convergence R = distance from z_0 to the nearest singularity.",
              "Laurent series: f(z) = sum_{n=-infinity}^{infinity} a_n (z - z_0)^n; converges in an annulus.",
              "Principal part (negative powers) classifies the singularity: removable, pole of order m, essential.",
              "Residue at z_0 = coefficient a_(-1) of (z - z_0)^(-1) in the Laurent series.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy computes the Laurent series of 1/[(z-1)(z-2)] about z = 0.",
              code: `from sympy import symbols, series, apart, Rational
z = symbols('z')
F = 1/((z - 1)*(z - 2))
# Partial-fraction decomposition reveals the structure
print(apart(F, z))                       # -1/(z - 1) + 1/(z - 2)
# Taylor expansion of each piece about z = 0 for |z| < 1
print(series(-1/(z - 1), z, 0, 5))      # 1 + z + z^2 + z^3 + z^4 + O(z^5)
print(series(1/(z - 2), z, 0, 5))       # -1/2 - z/4 - z^2/8 - z^3/16 - z^4/32 + O(z^5)
# Combine to get the Laurent series in the annulus 1 < |z| < 2 by other expansions`,
            },
            diagram: {
              kind: "compare",
              title: "Taylor vs Laurent series",
              caption:
                "Taylor is a special case of Laurent with no principal part; Laurent allows singularities at z_0.",
              left: {
                heading: "Taylor series",
                items: [
                  "Powers: n = 0, 1, 2, ...",
                  "Converges in a disk |z - z_0| < R.",
                  "R = distance to nearest singularity.",
                  "Encodes analytic behaviour.",
                  "Examples: e^z, sin z, cos z about 0.",
                ],
              },
              right: {
                heading: "Laurent series",
                items: [
                  "Powers: n = ..., -2, -1, 0, 1, 2, ...",
                  "Converges in an annulus r < |z - z_0| < R.",
                  "Principal part classifies the singularity.",
                  "Coefficient a_(-1) is the residue.",
                  "Examples: 1/[(z-1)(z-2)] in 1 < |z| < 2.",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Match the expansion to the annulus",
              body: "When expanding 1/(z - a) as a geometric series, choose the form depending on the region: for |z| > |a| use (1/z) sum (a/z)^n; for |z| < |a| use (1/(-a)) sum (z/a)^n. Mixing the two produces a series converging in the wrong annulus and the wrong Laurent expansion.",
            },
            keyTerms: [
              { term: "Taylor series", definition: "The power series f(z) = sum a_n (z - z_0)^n with a_n = f^(n)(z_0)/n!, converging in the largest disk centred at z_0 in which f is analytic." },
              { term: "Laurent series", definition: "The two-sided series f(z) = sum from -infinity to infinity of a_n (z - z_0)^n converging in an annulus, with negative powers forming the principal part." },
              { term: "Residue", definition: "The coefficient a_(-1) of (z - z_0)^(-1) in the Laurent series of f about z_0; the central quantity in residue calculus." },
            ],
            examQuestions: [
              {
                q: "State the form of the Taylor and Laurent series of a function about z_0, and state the regions of convergence. Expand f(z) = 1/[(z - 1)(z - 2)] in a Laurent series valid in the annulus 1 < |z| < 2, and identify the residue of f at z = 1.",
                marks: 7,
                outline: [
                  "State the Taylor series with a_n = f^(n)(z_0)/n! and disk of convergence.",
                  "State the Laurent series with two-sided powers and annulus of convergence.",
                  "Decompose F = 1/[(z-1)(z-2)] by partial fractions into -1/(z-1) + 1/(z-2).",
                  "For 1 < |z|, expand -1/(z-1) = -(1/z) sum (1/z)^n.",
                  "For |z| < 2, expand 1/(z-2) = -(1/2) sum (z/2)^n.",
                  "Combine to write the Laurent series in the annulus 1 < |z| < 2.",
                  "Identify the residue at z = 1 as the limit (z - 1) F(z) at z = 1, equal to -1.",
                ],
              },
              { q: "Classify the singularity at z = 0 of f(z) = sin z / z.", marks: 3 },
              { q: "State the radius of convergence of the Taylor series of 1/(1 - z) about z = 0.", marks: 2 },
            ],
          },
          {
            number: "5.3",
            title: "Residues and residue theorem",
            body: [
              "The residue of a function f at an isolated singularity z_0 is the coefficient of (z - z_0)^(-1) in the Laurent expansion of f about z_0, denoted Res(f, z_0). For a pole of order m, the residue has a closed-form formula: Res(f, z_0) = (1/(m - 1)!) times the (m - 1)-th derivative of [(z - z_0)^m f(z)] evaluated at z = z_0. For a simple pole (m = 1), this reduces to Res(f, z_0) = limit as z -> z_0 of (z - z_0) f(z). For a ratio P/Q with Q having a simple zero at z_0 and P(z_0) non-zero, Res(P/Q, z_0) = P(z_0) / Q'(z_0), a frequently useful shortcut.",
              "The residue theorem. If f is analytic inside and on a simple closed contour C except for isolated singularities z_1, z_2, ..., z_n inside C, then the integral of f(z) dz around C equals 2 pi i times the sum of residues at those singularities: integral_C f(z) dz = 2 pi i times sum_{k=1}^{n} Res(f, z_k). The theorem converts a contour integral into a finite algebraic sum of residues, an enormous simplification. It is proved by deforming C into small circles around each singularity and applying the Laurent series term-by-term, with only the (z - z_0)^(-1) term contributing (the others integrate to zero around a full circle).",
              "Worked example. Evaluate integral around |z| = 2 of e^z / [(z - 1)(z - 3)] dz. The integrand has simple poles at z = 1 (inside) and z = 3 (outside the contour). At z = 1, Res = limit as z -> 1 of (z - 1) e^z / [(z - 1)(z - 3)] = e^1 / (1 - 3) = -e/2. By the residue theorem, the integral is 2 pi i times Res(f, 1) = 2 pi i times (-e/2) = -pi e i. A second-order pole example: Res of e^z / z^2 at z = 0 is the derivative of e^z at z = 0, that is 1, so the integral of e^z / z^2 around |z| = 1 is 2 pi i. These examples illustrate the systematic nature of the residue theorem: classify singularities, compute residues, sum, multiply by 2 pi i.",
            ],
            bullets: [
              "Residue at z_0 = coefficient a_(-1) of the Laurent series at z_0.",
              "Simple pole: Res(f, z_0) = limit (z - z_0) f(z).",
              "Pole of order m: Res = (1/(m-1)!) d^(m-1)/dz^(m-1) of [(z - z_0)^m f(z)] at z_0.",
              "Residue theorem: integral_C f dz = 2 pi i times sum of residues inside C.",
              "Ratio shortcut: Res(P/Q, z_0) = P(z_0)/Q'(z_0) for simple pole of Q.",
            ],
            table: {
              caption: "Residue formulas by singularity type.",
              headers: ["Singularity type", "Residue formula", "Worked example"],
              rows: [
                ["Simple pole", "limit (z - z_0) f(z)", "Res(e^z/(z-1), 1) = e"],
                ["Pole of order m", "(1/(m-1)!) d^(m-1)/dz^(m-1) [(z - z_0)^m f(z)]", "Res(e^z/z^2, 0) = 1"],
                ["Ratio P/Q, Q simple zero", "P(z_0)/Q'(z_0)", "Res(1/(z^2+1), i) = 1/(2i)"],
                ["Essential singularity", "coefficient of (z - z_0)^(-1) in Laurent", "Res(e^(1/z), 0) = 1"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Residue theorem workflow",
              caption:
                "A four-step cycle: classify, compute, sum, multiply by 2 pi i.",
              steps: [
                { label: "List singularities inside C", note: "by inspection or root-finding" },
                { label: "Classify each (removable, pole, essential)", note: "by Laurent or limits" },
                { label: "Compute each residue by the matching formula", note: "simple, order m, ratio" },
                { label: "Sum and multiply by 2 pi i", note: "the contour integral value" },
                { label: "Verify against direct integration if easy", note: "spot-check" },
              ],
            },
            callout: {
              type: "tip",
              title: "Use the ratio shortcut for simple poles of rational functions",
              body: "When the integrand is P(z)/Q(z) with Q having a simple zero at z_0 and P(z_0) non-zero, Res(P/Q, z_0) = P(z_0)/Q'(z_0). This avoids expanding in Laurent series and is faster than the limit definition for typical exam integrals like 1/(z^2 + 1) at z = i.",
            },
            keyTerms: [
              { term: "Residue", definition: "The coefficient a_(-1) of (z - z_0)^(-1) in the Laurent series of f at an isolated singularity z_0." },
              { term: "Residue theorem", definition: "The result that integral_C f(z) dz = 2 pi i times the sum of residues of f at singularities inside C." },
              { term: "Pole of order m", definition: "An isolated singularity z_0 of f where (z - z_0)^m f(z) is analytic and non-zero at z_0, with the Laurent principal part ending at (z - z_0)^(-m)." },
            ],
            examQuestions: [
              {
                q: "Define the residue of a function at an isolated singularity and state the formulas for the residue at a simple pole and at a pole of order m. State the residue theorem. Evaluate integral around |z| = 2 of e^z / [(z - 1)(z - 3)] dz and integral around |z| = 1 of e^z / z^2 dz.",
                marks: 7,
                outline: [
                  "Define the residue as the coefficient of (z - z_0)^(-1) in the Laurent series.",
                  "State Res at a simple pole: limit (z - z_0) f(z).",
                  "State Res at a pole of order m: (1/(m-1)!) d^(m-1)/dz^(m-1) of [(z - z_0)^m f(z)] at z_0.",
                  "State the residue theorem: integral_C f dz = 2 pi i times sum of residues inside C.",
                  "For the first integral, identify poles at z = 1 (inside |z| = 2) and z = 3 (outside).",
                  "Compute Res at z = 1: limit (z - 1) e^z/[(z-1)(z-3)] = e/(1 - 3) = -e/2.",
                  "Conclude the integral is 2 pi i times (-e/2) = -pi e i; for the second integral, Res(e^z/z^2, 0) = derivative of e^z at 0 = 1, so integral = 2 pi i.",
                ],
              },
              { q: "Compute Res(1/(z^2 + 1), i) using the ratio shortcut.", marks: 3 },
              { q: "State the residue theorem in one sentence.", marks: 2 },
            ],
          },
          {
            number: "5.4",
            title: "Evaluation of real integrals by contour",
            body: [
              "The residue theorem evaluates a wide class of real integrals by converting them into contour integrals. Three families of integrals are standard. (1) Integrals of rational functions over (-infinity, infinity): if P(x)/Q(x) is rational with Q having no real zeros and degree of Q at least two more than degree of P, then integral from -infinity to infinity of P(x)/Q(x) dx equals 2 pi i times the sum of residues of P/Q in the upper half-plane. Close the contour with a large semicircle in the upper half-plane; the arc contribution vanishes as its radius grows by the degree condition.",
              "(2) Integrals of the form integral from 0 to 2 pi of R(cos theta, sin theta) d theta where R is rational. Substitute z = e^(i theta); then cos theta = (z + 1/z)/2, sin theta = (z - 1/z)/(2 i), d theta = dz/(i z), and the integral becomes a contour integral around the unit circle of a rational function in z, evaluated by summing residues inside |z| = 1. (3) Integrals involving e^(i a x) times a rational function: use a closing semicircle in the upper half-plane if a > 0 (where the exponential decays on the arc by Jordan's lemma) and in the lower half-plane if a < 0.",
              "Worked example of type (1). Evaluate integral from -infinity to infinity of dx/(x^2 + 1). The integrand has poles at z = i and z = -i; only z = i lies in the upper half-plane. Res(1/(z^2 + 1), i) = limit (z - i)/(z^2 + 1) = limit 1/(z + i) = 1/(2 i). The integral equals 2 pi i times 1/(2 i) = pi. A type (2) example: integral from 0 to 2 pi of d theta/(5 + 4 cos theta). Substituting z = e^(i theta) gives integral around |z| = 1 of dz/(i z (5 + 2(z + 1/z))) = integral of dz/[i (2 z^2 + 5 z + 2)] = integral of dz/[i (2 z + 1)(z + 2)]. Only z = -1/2 lies inside |z| = 1; the residue is 1/[i (4(-1/2) + 5)] = 1/(3 i), giving 2 pi i times 1/(3 i) = 2 pi/3. These two templates cover the bulk of RGPV contour-integral questions.",
            ],
            bullets: [
              "Type 1: integral of rational P/Q over (-inf, inf) = 2 pi i times residues in upper half-plane.",
              "Degree condition: degree of Q at least degree of P + 2 so the arc contribution vanishes.",
              "Type 2: substitute z = e^(i theta) to convert 0..2 pi trig integrals to unit-circle contour integrals.",
              "Type 3: integrals with e^(i a x) close in the upper half-plane if a > 0 (Jordan's lemma).",
              "Worked: integral_{-inf}^{inf} dx/(x^2 + 1) = pi; integral_0^{2 pi} d theta/(5 + 4 cos theta) = 2 pi/3.",
            ],
            table: {
              caption: "Three standard contour-integral templates.",
              headers: ["Type", "Form of real integral", "Contour used"],
              rows: [
                ["1", "integral of P(x)/Q(x) over (-inf, inf)", "large semicircle in upper half-plane"],
                ["2", "integral_0^{2 pi} R(cos, sin) d theta", "unit circle |z| = 1"],
                ["3", "integral of e^(i a x) P(x)/Q(x) over (-inf, inf)", "semicircle in upper (a > 0) or lower (a < 0)"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Contour-integral evaluation workflow",
              caption:
                "From real integral to residue sum in five stages.",
              stages: [
                { label: "Identify the integral type", note: "rational, trig, or exponential" },
                { label: "Choose the closing contour", note: "semicircle or unit circle" },
                { label: "Locate poles inside the contour", note: "upper half-plane or |z| < 1" },
                { label: "Sum the residues inside", note: "use shortcut formulas" },
                { label: "Multiply by 2 pi i (or 1/i for type 2)", note: "verify arc vanishes" },
              ],
            },
            callout: {
              type: "warning",
              title: "Check the degree condition for type 1",
              body: "For type 1 integrals, the degree of Q must be at least two more than the degree of P, otherwise the contribution from the large semicircular arc does not vanish. Without this condition the contour method gives the wrong answer; verify it explicitly before applying the residue theorem.",
            },
            keyTerms: [
              { term: "Contour integration", definition: "The technique of evaluating real integrals by converting them to complex contour integrals and applying the residue theorem." },
              { term: "Jordan's lemma", definition: "The result that the integral of e^(i a z) over a large semicircle in the upper half-plane vanishes as the radius grows, for a > 0, under mild decay conditions on the rational factor." },
              { term: "Closing contour", definition: "The auxiliary contour (typically a semicircle or the unit circle) added to a real integral to form a closed contour suitable for the residue theorem." },
            ],
            examQuestions: [
              {
                q: "Describe the three standard families of real integrals evaluated by contour integration, stating the closing contour and the conditions for each. Evaluate integral from -infinity to infinity of dx/(x^2 + 1) and integral from 0 to 2 pi of d theta/(5 + 4 cos theta).",
                marks: 7,
                outline: [
                  "Describe type 1: integral of P/Q over (-inf, inf), closed by a large upper-half-plane semicircle, requiring degree(Q) >= degree(P) + 2.",
                  "Describe type 2: integral_0^{2 pi} R(cos, sin) d theta, mapped to the unit circle via z = e^(i theta).",
                  "Describe type 3: integrals with e^(i a x), closed in the upper half-plane if a > 0 by Jordan's lemma.",
                  "For the first integral, locate poles at z = i (inside) and z = -i (outside).",
                  "Compute Res(1/(z^2 + 1), i) = 1/(2 i).",
                  "Conclude the integral is 2 pi i times 1/(2 i) = pi.",
                  "For the second, substitute z = e^(i theta), locate the pole inside |z| = 1, compute the residue, and obtain 2 pi/3.",
                ],
              },
              { q: "State Jordan's lemma and the condition under which it applies.", marks: 3 },
              { q: "State the degree condition required for type 1 contour integrals.", marks: 2 },
            ],
          },
          {
            number: "5.5",
            title: "Z-transforms and difference equations",
            body: [
              "The (one-sided) Z-transform of a sequence x_n for n >= 0 is X(z) = Z{x_n} = sum from n = 0 to infinity of x_n z^(-n), where z is a complex variable. It is the discrete-time analogue of the Laplace transform and converges outside a circle |z| > R determined by the growth rate of x_n. Standard pairs include Z{1} = z/(z - 1) for |z| > 1, Z{a^n} = z/(z - a) for |z| > |a|, Z{n} = z/(z - 1)^2, Z{n a^n} = a z/(z - a)^2, and Z{cos(omega n)} = z(z - cos omega)/(z^2 - 2 z cos omega + 1). These pairs parallel the Laplace pairs of section 1.2.",
              "Properties mirror the Laplace transform. Linearity: Z{a x + b y} = a X + b Y. Time shift right: Z{x_(n-k)} = z^(-k) X(z) for the one-sided transform with zero initial values, plus initial-value terms if non-zero. Multiplication by a^n (scaling in z): Z{a^n x_n} = X(z/a). Multiplication by n: Z{n x_n} = -z dX/dz. Convolution theorem: Z{x_n star y_n} = X(z) Y(z), where (x star y)_n = sum_{k=0}^{n} x_k y_(n-k). Initial-value theorem x_0 = limit as z -> infinity of X(z) and final-value theorem limit x_n = limit (z - 1)/z times X(z) when the limit exists mirror the Laplace versions.",
              "Worked application. Solve the difference equation y_(n+1) - a y_n = 0 with y_0 = 1. Take Z-transforms: z Y(z) - z y_0 - a Y(z) = 0, so (z - a) Y = z y_0 = z, giving Y(z) = z/(z - a). Invert by recognition: y_n = a^n, the geometric sequence. A second-order example: y_(n+2) - 3 y_(n+1) + 2 y_n = 0 with y_0 = 1, y_1 = 2. Transforming gives z^2 Y - z y_0 - z y_1 - 3(z Y - z y_0) + 2 Y = 0; substitute initial values to get (z^2 - 3 z + 2) Y = z^2 - z; so Y = z(z - 1)/[(z - 1)(z - 2)] = z/(z - 2). Hence y_n = 2^n. The relation to the Laplace transform: under the substitution z = e^(s T) where T is the sampling period, the Z-transform of a sampled signal f(n T) corresponds to the Laplace transform of the impulse-sampled continuous signal. The Z-transform is therefore the Laplace transform viewed through a logarithmic change of variable, with the imaginary axis in the s-plane mapping to the unit circle in the z-plane.",
            ],
            bullets: [
              "Z-transform: X(z) = sum_{n=0}^{infinity} x_n z^(-n); converges for |z| > R.",
              "Standard pairs: Z{1} = z/(z - 1); Z{a^n} = z/(z - a); Z{n} = z/(z - 1)^2.",
              "Time shift: Z{x_(n-k)} = z^(-k) X(z) (with zero initial values).",
              "Convolution theorem: Z{x star y} = X(z) Y(z); initial and final value theorems hold.",
              "Relation to Laplace: z = e^(s T) maps the s-plane imaginary axis to the z-plane unit circle.",
            ],
            codeExample: {
              language: "python",
              caption: "SymPy computes Z-transforms and solves a first-order difference equation.",
              code: `from sympy import symbols, Function, ztransform, simplify, apart
n, z, a = symbols('n z a', positive=True)
x = Function('x')
# Z{a^n} = z/(z - a) for |z| > |a|
print(ztransform(a**n, n, z))               # (z/(z - a), |z| > |a|, True)
# Solve y_{n+1} - a y_n = 0 with y_0 = 1 by Z-transforms
Y = symbols('Y')
eq = z*Y - z*1 - a*Y                        # transformed equation with y_0 = 1
Ysol = simplify(eq)  # placeholder; solve symbolically
from sympy import solve
print(solve(z*Y - z - a*Y, Y))              # [z/(z - a)]
# Invert by recognition: y_n = a^n`,
            },
            diagram: {
              kind: "layers",
              title: "From continuous to discrete: Laplace and Z",
              caption:
                "Top layer is the continuous signal; each lower layer samples and changes variable.",
              layers: [
                { label: "Continuous signal f(t)", note: "Laplace transform F(s)" },
                { label: "Sampled signal f(n T)", note: "impulse sampling" },
                { label: "Substitution z = e^(s T)", note: "s-plane to z-plane" },
                { label: "Z-transform X(z) = sum x_n z^(-n)", note: "discrete counterpart" },
                { label: "Difference equations solved algebraically", note: "shift becomes z^(-k)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Match the shift formula to one-sided or two-sided",
              body: "The one-sided Z-transform of x_(n - k) is z^(-k) X(z) plus initial-value terms; the two-sided version is simply z^(-k) X(z). When solving difference equations with non-zero initial values, use the one-sided formula and include the initial terms explicitly. Mixing the two forms is a common slip that ruins the answer.",
            },
            keyTerms: [
              { term: "Z-transform", definition: "The series X(z) = sum_{n=0}^{infinity} x_n z^(-n) of a sequence x_n, the discrete-time analogue of the Laplace transform." },
              { term: "Difference equation", definition: "A relation of the form sum a_k y_(n+k) = f(n) defining a sequence recursively; solved by Z-transforms as ODEs are solved by Laplace." },
              { term: "Relation to Laplace", definition: "The substitution z = e^(s T) maps the Laplace variable s to the Z variable z, with the s-plane imaginary axis corresponding to the z-plane unit circle." },
            ],
            examQuestions: [
              {
                q: "Define the (one-sided) Z-transform of a sequence, state the standard pairs for x_n = 1, a^n, n, and the time-shift property. Use Z-transforms to solve y_(n+1) - a y_n = 0 with y_0 = 1, and y_(n+2) - 3 y_(n+1) + 2 y_n = 0 with y_0 = 1, y_1 = 2. State the relation between the Z-transform and the Laplace transform.",
                marks: 7,
                outline: [
                  "Define X(z) = sum_{n=0}^{infinity} x_n z^(-n) with region of convergence |z| > R.",
                  "State the standard pairs: Z{1} = z/(z-1), Z{a^n} = z/(z-a), Z{n} = z/(z-1)^2.",
                  "State the time-shift: Z{x_(n-k)} = z^(-k) X(z) plus initial terms (one-sided).",
                  "For the first equation, transform to z Y - z - a Y = 0 giving Y = z/(z - a).",
                  "Invert by recognition to y_n = a^n.",
                  "For the second equation, transform to (z^2 - 3 z + 2) Y = z^2 - z, factor and cancel to get Y = z/(z - 2).",
                  "Invert to y_n = 2^n; state the relation z = e^(s T) with the imaginary axis mapping to the unit circle.",
                ],
              },
              { q: "Find Z{cos(omega n)} using the standard pair.", marks: 3 },
              { q: "State the convolution theorem for Z-transforms.", marks: 2 },
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
        { topic: "Laplace transforms: properties, derivatives, convolution", weight: "high", note: "Foundation for Unit II; 7-mark questions every year." },
        { topic: "Inverse Laplace by partial fractions", weight: "high", note: "Standard 7-mark problem; repeated poles always tested." },
        { topic: "Solving linear ODEs by Laplace", weight: "high", note: "Worked problem with initial conditions; resonance term expected." },
        { topic: "Fourier series and Euler coefficients", weight: "high", note: "Compute coefficients by parity; half-range sine and cosine expansions." },
        { topic: "Cauchy-Riemann equations (Cartesian and polar)", weight: "high", note: "Proof and worked check; sufficient conditions." },
        { topic: "Analytic and harmonic functions", weight: "high", note: "Find harmonic conjugate; link to Laplace's equation." },
        { topic: "Residue theorem and contour integrals", weight: "high", note: "Evaluate real integrals of types 1, 2, 3; classify singularities." },
        { topic: "Z-transforms and difference equations", weight: "medium", note: "Standard pairs, shift property, solving first/second-order." },
        { topic: "Milne-Thomson method", weight: "medium", note: "Construct f from u; substitute y = 0, x = z." },
        { topic: "Conformal mapping (Mobius)", weight: "medium", note: "Three-point determination; cross-ratio." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        { week: "Week 1", focus: "Laplace transforms: definition and properties", tasks: ["Memorise the seven standard pairs and the five properties.", "Work 10 problems on shifting and multiplication/division rules.", "Derive L{(sin t)/t} and L{t^2 e^(-3 t)} from first principles."] },
        { week: "Week 2", focus: "Inverse Laplace and ODE solving", tasks: ["Practise partial fractions with simple, repeated and quadratic factors.", "Solve 8 ODEs by the three-step Laplace method, including a resonance case.", "Solve 2 coupled systems using Cramer's rule."] },
        { week: "Week 3", focus: "Fourier series and harmonic analysis", tasks: ["Compute Fourier series of t, t^2, and a square wave.", "Practise half-range sine and cosine expansions on (0, L).", "Run a trapezoidal-rule harmonic analysis on 12 samples."] },
        { week: "Week 4", focus: "Analytic functions and conformal mapping", tasks: ["Verify C-R equations in Cartesian and polar for five functions.", "Find harmonic conjugates of x^2 - y^2 and e^x cos y.", "Construct three analytic functions via Milne-Thomson."] },
        { week: "Week 5", focus: "Complex integration and residues", tasks: ["Apply Cauchy's integral formula to 5 contour integrals.", "Expand 1/[(z-1)(z-2)] in Laurent series in two annuli.", "Evaluate 6 real integrals by contour, covering all three types."] },
        { week: "Week 6", focus: "Z-transforms and revision", tasks: ["Solve 4 difference equations by Z-transforms.", "Revise all standard pairs of Laplace, Fourier and Z side by side.", "Take a full mock paper under timed conditions."] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Skim the seven standard Laplace pairs and the Z-transform pairs side by side to fix them in working memory.",
        "Re-derive the Cauchy-Riemann equations in both Cartesian and polar form once on paper.",
        "Rehearse the three-step Laplace method on one resonance ODE and one impulse ODE.",
        "Memorise the three residue formulas: simple pole, pole of order m, ratio shortcut P/Q.",
        "List the three contour-integral types with their closing contours and conditions.",
        "Practise the Milne-Thomson substitution once on a polynomial real part.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Start with the Laplace ODE or Fourier series problem; they carry the most marks and are mechanical.",
        "In any contour integral, list singularities inside C before computing residues.",
        "When computing Fourier coefficients, declare the parity of f first to halve the work.",
        "For Milne-Thomson answers, always close with + i C; for inverse Laplace, verify against one initial condition.",
        "Leave Z-transform and conformal-mapping problems for last; they are shorter and forgiving if the standard pairs are memorised.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Forgetting the boundary terms s f(0), f'(0) when transforming y'' and y''' in an ODE.",
        "Mixing the half-range sine and cosine choice with the boundary condition; sine needs zero values, cosine needs zero derivatives.",
        "Claiming analyticity from C-R alone without stating the sufficiency condition of continuous partials.",
        "Closing a type-1 contour integral when degree(Q) is not at least degree(P) + 2, missing the vanishing-arc condition.",
        "Dropping the arbitrary imaginary constant i C in a Milne-Thomson answer.",
        "Confusing one-sided and two-sided Z-transform shift formulas when initial values are non-zero.",
      ],
    },
  ],
};
