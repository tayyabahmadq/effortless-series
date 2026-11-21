/**
 * Academics - RGPV First-Year Common subject: BT-201 Engineering Physics.
 *
 * Five units cover wave optics, quantum mechanics, solid-state and
 * semiconductor physics, lasers, and fibre optics with electromagnetism.
 * Every section pairs the theory with a worked numerical example, a
 * redrawable diagram, and three exam-style questions (one 7-mark with
 * outline plus two short questions) that the student can reproduce in
 * the RGPV theory exam.
 */

import type { AcademicSubject } from "./types";

export const bt201: AcademicSubject = {
  id: "bt-201",
  code: "BT-201",
  title: "Engineering Physics",
  semester: "II Semester",
  program: "RGPV · First Year Common (all B.Tech branches)",
  tagline:
    "The complete visual guide to BT-201 Engineering Physics: wave optics from Young's fringes to polarised light, quantum mechanics from photoelectric effect to Schrodinger's equation, solid-state physics from Miller indices to band theory, lasers from Einstein coefficients to the He-Ne tube, and fibre optics with Maxwell's equations - every topic paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units span the B.Tech first-year physics syllabus. Unit I builds wave optics through interference, diffraction and polarization. Unit II introduces quantum mechanics via photoelectric effect, Compton scattering, de Broglie waves, Heisenberg uncertainty and the Schrodinger equation. Unit III covers solid-state physics including Miller indices, packing fractions, Bragg's law, band theory and semiconductors. Unit IV develops lasers from Einstein coefficients through ruby, He-Ne and semiconductor lasers. Unit V closes with fibre optics, total internal reflection, numerical aperture, attenuation and Maxwell's equations. Every section pairs the formal theory with a worked numerical, a redrawable diagram, and three exam-style questions.",
  accentColor: "#22d3ee",
  emoji: "PH",
  unitCount: 5,
  totalSections: 25,
  units: [
    // =================================================================
    // UNIT I - WAVE OPTICS
    // =================================================================
    {
      number: 1,
      roman: "I",
      title: "Wave Optics",
      summary:
        "Unit I builds wave optics from interference through diffraction to polarization. Young's double-slit gives the fringe-width formula, Newton's rings use a thin air film between a lens and a plate, single-slit diffraction yields the minima condition, the diffraction grating adds resolving power, and polarization closes the unit with Brewster's and Malus's laws.",
      chapter: {
        number: "01",
        title: "Wave Optics",
        intro:
          "Unit I develops the wave picture of light. Young's double-slit establishes interference and the fringe width formula; thin-film interference produces Newton's rings; single-slit Fraunhofer diffraction yields the minima condition and central-maximum width; the diffraction grating adds resolving power via the Rayleigh criterion; and polarization closes the unit with Brewster's law and Malus's law.",
        sections: [
          // --- 1.1 ---
          {
            number: "1.1",
            title: "Interference and Young's double-slit",
            body: [
              "Young's double-slit experiment, performed by Thomas Young in 1801, gave the first decisive evidence that light is a wave. A monochromatic source illuminates a narrow slit S that acts as a coherent source for two parallel slits S1 and S2 separated by a small distance d. Light from S1 and S2 spreads by diffraction and overlaps on a screen placed at distance D from the slit plane, where D is much larger than d. Since the two waves originate from the same parent slit they maintain a constant phase difference and at every point on the screen they superpose to produce equally spaced bright and dark bands called interference fringes.",
              "At a point P on the screen at distance x from the central maximum, the path difference between the two waves is S2P minus S1P. For D much larger than d and for small angles, this path difference simplifies to (x times d) divided by D. Constructive interference gives a bright fringe when the path difference equals an integer multiple of wavelength lambda, so (x times d) divided by D equals n times lambda with n taking values 0, 1, 2 and so on. Destructive interference gives a dark fringe when the path difference equals a half-integer multiple of lambda.",
              "The fringe width beta is the distance between two consecutive bright or two consecutive dark fringes. From the bright fringe condition, beta equals (lambda times D) divided by d. For sodium light of wavelength 589.3 nm, slit separation 0.5 mm and screen distance 1.0 m, the fringe width is (589.3 times 10^-9 times 1.0) divided by (0.5 times 10^-3), which is about 1.18 mm. If white light replaces monochromatic light, every wavelength forms its own pattern: the central fringe remains white while the others become coloured, violet on the inner side and red on the outer.",
            ],
            bullets: [
              "Coherent sources: same frequency, constant phase difference; produced here by dividing one wavefront with two slits.",
              "Path difference at point P: (x*d)/D, valid for D >> d and small angles.",
              "Bright fringe: path difference = n*lambda (n = 0, +/-1, +/-2 ...); dark fringe: (n + 1/2)*lambda.",
              "Fringe width beta = (lambda*D)/d; increase D or decrease d to widen fringes.",
              "White light fringes: central fringe white, others coloured violet-inward to red-outward.",
            ],
            codeExample: {
              language: "python",
              caption: "Young's double-slit fringe width and fringe count per cm.",
              code:
                `# Young's double-slit fringe width
# Sodium D-line, slit separation, screen distance
wavelength = 589.3e-9   # metres, sodium D-line
d = 0.5e-3              # metres, slit separation
D = 1.0                 # metres, screen distance
beta = (wavelength * D) / d
print("Fringe width = %.3f mm" % (beta * 1e3))
# Fringe width = 1.179 mm
n_in_1cm = 0.01 / beta
print("Fringes in 1 cm = %.1f" % n_in_1cm)`,
            },
            diagram: {
              kind: "flow",
              title: "How interference fringes form",
              caption:
                "Coherent light through two slits overlaps on a screen to give alternating bright and dark bands.",
              steps: [
                { label: "Monochromatic source" },
                { label: "Single slit S", note: "ensures coherence" },
                { label: "Slits S1, S2 separation d", note: "two coherent sources" },
                { label: "Screen at distance D", note: "D >> d" },
                { label: "Fringes beta = (lambda*D)/d", note: "bright at n*lambda" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always state D >> d and the small-angle approximation before writing path difference = (x*d)/D. RGPV deducts a mark for skipping the approximation step.",
            },
            keyTerms: [
              { term: "Coherent sources", definition: "Two sources emitting waves of the same frequency and a constant phase difference between them." },
              { term: "Path difference", definition: "The difference in optical path length travelled by two waves to a common observation point." },
              { term: "Fringe width", definition: "The distance between two consecutive bright or dark fringes; beta = (lambda*D)/d." },
            ],
            examQuestions: [
              {
                q: "Describe Young's double-slit experiment. Derive an expression for the fringe width and explain how the fringe pattern changes when (a) the slit separation is halved, (b) white light is used in place of monochromatic light.",
                marks: 7,
                outline: [
                  "Draw setup: source, single slit S, double slits S1 and S2 of separation d, screen at distance D.",
                  "State coherence: S1 and S2 derived from one parent source, hence constant phase difference.",
                  "Derive path difference S2P - S1P = (x*d)/D under D >> d and small-angle approximation.",
                  "Bright fringe at (x*d)/D = n*lambda; dark at (x*d)/D = (n + 1/2)*lambda.",
                  "Fringe width beta = (lambda*D)/d; worked numerical with sodium 589.3 nm, d = 0.5 mm, D = 1 m gives beta ~ 1.18 mm.",
                  "Halving d doubles beta; white light gives a white central fringe and coloured higher orders (violet inward, red outward).",
                  "Conclude that interference demonstrates the wave nature of light.",
                ],
              },
              {
                q: "In Young's experiment the fringe width is 0.30 mm. What is the new fringe width if the slit separation is halved without changing D or lambda?",
                marks: 2,
              },
              {
                q: "Two slits 0.20 mm apart are illuminated by light of wavelength 600 nm. Calculate the fringe width on a screen 1.0 m away.",
                marks: 3,
              },
            ],
          },
          // --- 1.2 ---
          {
            number: "1.2",
            title: "Thin-film interference and Newton's rings",
            body: [
              "When a plano-convex lens of large radius of curvature R is placed with its curved face on a flat glass plate, a thin air film of gradually increasing thickness is trapped between the two glass surfaces. Illuminating this assembly from above with monochromatic light of wavelength lambda produces a pattern of concentric bright and dark circular rings centred on the point of contact, known as Newton's rings. The rings arise from interference between light reflected from the lower surface of the lens and light reflected from the upper surface of the plate, the two beams having traversed different optical paths.",
              "At a point where the air film thickness is t, the path difference between the two reflected rays is 2t plus lambda by 2, the extra half-wavelength coming from the phase reversal at the lower (denser) reflecting surface. For the dark rings, this total equals an integer multiple of lambda: 2t plus lambda by 2 equals n lambda, giving 2t equals (n minus one half) lambda. Using the geometry of the lens surface, the radius r_n of the n-th dark ring satisfies r_n squared equals R times lambda times (n minus one half).",
              "More commonly the diameter D_n of the n-th dark ring is quoted, leading to D_n squared equals 4 times R times lambda times (n minus one half). For a lens of radius 100 cm and sodium light of wavelength 589.3 nm, the diameter of the 5th dark ring is the square root of (4 times 1.0 times 589.3 times 10^-9 times 4.5), about 3.25 mm. Newton's rings are used to measure the wavelength of light when R is known, or to determine R of an unknown lens when lambda is known, and to test the flatness of an optical surface by inspecting the regularity of the rings.",
            ],
            bullets: [
              "Setup: plano-convex lens of radius R on a flat glass plate, illuminated from above with monochromatic light.",
              "Path difference between reflected rays: 2t + lambda/2 (extra half from phase reversal at lower denser surface).",
              "Dark ring condition: 2t = (n - 1/2)*lambda; bright ring condition: 2t = n*lambda.",
              "Radius of n-th dark ring: r_n = sqrt(R*lambda*(n - 1/2)); diameter D_n = sqrt(4*R*lambda*(n - 1/2)).",
              "Plot of D_n^2 vs n is a straight line of slope 4*R*lambda; measures lambda if R known, or R if lambda known.",
            ],
            table: {
              caption: "Newton's rings conditions and the corresponding ring-radius formulas.",
              headers: ["Quantity", "Condition", "Formula"],
              rows: [
                ["Dark ring (reflected)", "2t + lambda/2 = n*lambda", "r_n = sqrt(R*lambda*(n - 1/2))"],
                ["Bright ring (reflected)", "2t + lambda/2 = (n + 1/2)*lambda", "r_n = sqrt(R*lambda*n)"],
                ["Diameter of n-th dark ring", "from above", "D_n = sqrt(4*R*lambda*(n - 1/2))"],
                ["Diameter of n-th bright ring", "from above", "D_n = sqrt(4*R*lambda*n)"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Layers in the air-film assembly of Newton's rings",
              caption:
                "Light reflects from the lower lens surface and the upper plate surface; the two reflected beams interfere.",
              layers: [
                { label: "Plano-convex lens (radius R)", note: "upper glass surface" },
                { label: "Air film of thickness t", note: "increases outward from contact point" },
                { label: "Lower lens surface (reflection 1)", note: "no phase reversal here" },
                { label: "Top of glass plate (reflection 2)", note: "phase reversal of pi adds lambda/2" },
                { label: "Reflected beams combine", note: "dark ring when 2t + lambda/2 = n*lambda" },
              ],
            },
            callout: {
              type: "tip",
              title: "Tip",
              body: "Plot D_n squared versus n: the slope is 4*R*lambda. A straight line through the origin is the cleanest way to find lambda or R experimentally.",
            },
            keyTerms: [
              { term: "Newton's rings", definition: "Concentric circular interference fringes formed by the thin air film between a plano-convex lens and a flat glass plate." },
              { term: "Path difference in a thin film", definition: "2t plus lambda/2 for reflected light, the extra half-wavelength coming from phase reversal at the lower denser surface." },
              { term: "Diameter of dark ring", definition: "D_n = sqrt(4*R*lambda*(n - 1/2)), where R is the lens radius and n the ring number." },
            ],
            examQuestions: [
              {
                q: "Describe the formation of Newton's rings by reflected light. Derive expressions for the radius and diameter of the n-th dark ring and explain how the wavelength of light can be measured using this setup.",
                marks: 7,
                outline: [
                  "Describe setup: plano-convex lens of radius R on a glass plate, illuminated from above with monochromatic light of wavelength lambda.",
                  "Write path difference 2t + lambda/2; explain the extra half-wavelength from phase reversal at the lower (denser) surface.",
                  "Dark ring condition: 2t + lambda/2 = n*lambda, giving 2t = (n - 1/2)*lambda.",
                  "Geometry of lens surface: r_n^2 = 2*R*t = R*lambda*(n - 1/2).",
                  "Diameter D_n = 2*r_n = sqrt(4*R*lambda*(n - 1/2)).",
                  "Plot D_n^2 vs n is a straight line of slope 4*R*lambda; if R known, lambda follows.",
                  "Applications: measure R of an unknown lens, test optical flatness; central spot is dark by reflection.",
                ],
              },
              {
                q: "Why is the central spot in Newton's rings dark in reflected light?",
                marks: 2,
              },
              {
                q: "In a Newton's rings experiment with lambda = 589.3 nm and R = 100 cm, find the diameter of the 5th dark ring.",
                marks: 3,
              },
            ],
          },
          // --- 1.3 ---
          {
            number: "1.3",
            title: "Single-slit diffraction",
            body: [
              "Diffraction is the bending of light around the edges of an obstacle or aperture; it becomes pronounced when the aperture size is comparable to the wavelength. When monochromatic light passes through a single narrow slit of width a, the geometric shadow is not sharp but is surrounded by a pattern of alternating bright and dark bands on either side of a wide central bright maximum. The central maximum is the brightest and widest band; the secondary maxima on either side are progressively fainter. The pattern results from interference between Huygens wavelets emanating from different points across the slit width.",
              "To locate the minima, divide the slit into two equal halves. Wavelets from corresponding points in the two halves travel paths differing by half a wavelength and cancel in pairs, producing darkness at angles satisfying a sin theta equals n lambda, where n takes values plus or minus 1, plus or minus 2 and so on. The central maximum extends from the first minimum on one side to the first minimum on the other; its angular half-width is lambda divided by a, and the linear width on a screen at distance D is 2 lambda D divided by a.",
              "The secondary maxima lie approximately halfway between consecutive minima and have intensities only a few percent of the central maximum; the first secondary is about 4.5 percent, the second about 1.6 percent. For sodium light of wavelength 589.3 nm passing through a slit of width 0.1 mm and observed on a screen 1.0 m away, the width of the central maximum is 2 times 589.3 times 10^-9 times 1.0 divided by 0.1 times 10^-3, which is about 11.8 mm. Narrowing the slit widens the pattern, confirming that light, like sound, bends around obstacles whose size is comparable to its wavelength.",
            ],
            bullets: [
              "Diffraction: bending of light around obstacles or apertures of size comparable to wavelength.",
              "Minima condition: a*sin(theta) = n*lambda, n = +/-1, +/-2 ... (n = 0 is the central maximum, NOT a minimum).",
              "First minimum at sin(theta) = lambda/a; central maximum width = 2*D*lambda/a on a screen at distance D.",
              "Central maximum is brightest and widest; first secondary maximum is only ~4.5% of central intensity.",
              "Narrower slit gives a wider pattern - direct evidence of the wave nature of light.",
            ],
            codeExample: {
              language: "python",
              caption: "Single-slit central maximum width for sodium light through a 0.1 mm slit.",
              code:
                `# Single-slit diffraction: central maximum width
# Sodium light through a 0.1 mm slit
wavelength = 589.3e-9   # metres
a = 0.1e-3              # metres, slit width
D = 1.0                 # metres, screen distance
# First minimum at a*sin(theta) = lambda
theta1 = wavelength / a        # small-angle rad
width = 2 * D * theta1         # full central max width
print("Central max width = %.2f mm" % (width * 1e3))
# Central max width = 11.79 mm`,
            },
            diagram: {
              kind: "flow",
              title: "Single-slit Fraunhofer diffraction setup",
              caption:
                "Monochromatic light through a narrow slit produces a wide central maximum flanked by faint secondary maxima.",
              steps: [
                { label: "Monochromatic source" },
                { label: "Slit of width a", note: "single narrow slit" },
                { label: "Path difference a*sin(theta)", note: "across the slit" },
                { label: "Minima at a*sin(theta) = n*lambda", note: "n = +/-1, +/-2 ..." },
                { label: "Central maximum width 2*lambda*D/a", note: "brightest band" },
              ],
            },
            callout: {
              type: "warning",
              title: "Common slip",
              body: "n = 0 is the central maximum, NOT a minimum. The minima start at n = +/-1 in a*sin(theta) = n*lambda. Quoting n = 0 as a minimum is a frequent one-mark loss.",
            },
            keyTerms: [
              { term: "Diffraction", definition: "Bending of light around the edges of an obstacle or aperture of size comparable to the wavelength." },
              { term: "Central maximum", definition: "The bright band at the centre of a single-slit diffraction pattern, of angular half-width lambda/a and linear width 2*D*lambda/a." },
              { term: "First minimum", definition: "Occurs at a*sin(theta) = lambda, defining the edges of the central maximum." },
            ],
            examQuestions: [
              {
                q: "Explain the phenomenon of diffraction at a single slit. Derive the condition for minima and obtain an expression for the width of the central maximum.",
                marks: 7,
                outline: [
                  "Define diffraction and distinguish Fraunhofer (parallel rays) from Fresnel.",
                  "Setup: monochromatic light through a narrow slit of width a, observed on a screen at distance D.",
                  "Divide slit into two halves; wavelets from corresponding points cancel when path difference a*sin(theta) = n*lambda, n = +/-1, +/-2 ...",
                  "n = 0 gives the central maximum, not a minimum.",
                  "First minimum at sin(theta) = lambda/a; linear position y ~ D*lambda/a.",
                  "Width of central maximum = 2*D*lambda/a (between first minima on each side).",
                  "Worked numerical: lambda = 589.3 nm, a = 0.1 mm, D = 1 m gives width ~ 11.8 mm.",
                ],
              },
              {
                q: "State the condition for the first minimum in single-slit diffraction.",
                marks: 2,
              },
              {
                q: "Light of wavelength 500 nm passes through a slit of width 0.05 mm. Find the angular width of the central maximum.",
                marks: 3,
              },
            ],
          },
          // --- 1.4 ---
          {
            number: "1.4",
            title: "Diffraction grating and resolving power",
            body: [
              "A diffraction grating is an arrangement of a very large number N of equally spaced parallel slits, ruled on a glass or metal plate with a typical spacing of the order of 10^-6 m. When monochromatic light is incident normally on a transmission grating, each slit diffracts the light and the diffracted beams from all the slits interfere. For a slit spacing d (the grating element), the condition for a principal maximum in direction theta is d sin theta equals n lambda, where n is the order of the spectrum taking values 0, plus or minus 1, plus or minus 2 and so on.",
              "The number of principal maxima is limited because sin theta cannot exceed 1; the maximum order is the integer part of d divided by lambda. Between two principal maxima there are N minus 1 minima and N minus 2 weak secondary maxima, so as N increases the principal maxima become sharp and bright while the secondary maxima fade. The resolving power RP of a grating measures its ability to separate two close wavelengths; by the Rayleigh criterion, two wavelengths are just resolved when the principal maximum of one falls on the first minimum of the other.",
              "This gives RP equals n times N, where n is the order and N is the total number of illuminated slits. A grating with 6000 lines per centimetre ruled over a width of 2 cm has N equal to 12000; in second order its resolving power is 24000, allowing it to separate the sodium D-lines at 589.0 nm and 589.6 nm. The resolving power can also be written as lambda divided by delta lambda, so the smallest wavelength difference delta lambda that the grating can separate is lambda divided by (n times N).",
            ],
            bullets: [
              "Grating: many (N) equally spaced slits with spacing d; principal maxima at d*sin(theta) = n*lambda.",
              "Order n is limited by d/lambda; between two principal maxima lie N-1 minima and N-2 weak secondary maxima.",
              "Resolving power RP = lambda/delta(lambda) = n*N (Rayleigh criterion).",
              "RP is raised by illuminating more slits (larger N) or by using a higher order (larger n).",
              "Worked: 6000 lines/cm over 2 cm -> N = 12000; in 2nd order RP = 24000 (resolves the sodium D-lines).",
            ],
            table: {
              caption: "Principal maxima, resolving power and worked values for a 6000 lines/cm grating, 2 cm wide.",
              headers: ["Property", "Formula", "Worked value"],
              rows: [
                ["Grating element d", "1 / (lines per unit length)", "1.67e-6 m"],
                ["Principal maxima", "d*sin(theta) = n*lambda", "n=1 at 589 nm: theta ~ 20.6 deg"],
                ["Total illuminated slits N", "lines per cm * width", "12000"],
                ["Resolving power RP", "n*N", "n=2 -> RP = 24000"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Resolving power depends on order and number of slits",
              caption:
                "Best resolution is achieved in high order with many illuminated slits; RP = n*N.",
              axes: { x: "Number of slits N (low -> high)", y: "Order n (low -> high)" },
              quadrants: [
                { label: "Low N, low n", note: "poor resolution, RP small" },
                { label: "High N, low n", note: "narrow principal maxima, RP ~ N" },
                { label: "Low N, high n", note: "broad maxima, RP ~ n" },
                { label: "High N, high n", note: "best resolution, RP = n*N" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "RP = n*N, NOT n times lines-per-cm. N is the total number of slits actually illuminated, equal to the grating width times the line density. Multiply by the order n to get the resolving power.",
            },
            keyTerms: [
              { term: "Diffraction grating", definition: "An arrangement of a large number N of equally spaced parallel slits used to disperse light into spectra." },
              { term: "Grating equation", definition: "d*sin(theta) = n*lambda, where d is the grating element and n the order." },
              { term: "Resolving power", definition: "RP = lambda/delta(lambda) = n*N; the ability of a grating to separate two close wavelengths by the Rayleigh criterion." },
            ],
            examQuestions: [
              {
                q: "What is a diffraction grating? Derive the grating equation and obtain an expression for its resolving power. State the Rayleigh criterion for resolution.",
                marks: 7,
                outline: [
                  "Define a diffraction grating as a large number N of equally spaced slits with spacing d (the grating element).",
                  "Derive principal maxima condition d*sin(theta) = n*lambda, n = 0, +/-1, +/-2 ...",
                  "Note N-1 minima and N-2 weak secondary maxima between two principal maxima; principals sharpen as N grows.",
                  "Define resolving power RP = lambda/delta(lambda).",
                  "State Rayleigh criterion: two wavelengths just resolved when principal maximum of one falls on first minimum of the other.",
                  "Derive RP = n*N.",
                  "Worked: 12000 lines, second order -> RP = 24000, resolves sodium D-lines at 589.0 and 589.6 nm.",
                ],
              },
              {
                q: "Define the resolving power of a grating and state the Rayleigh criterion.",
                marks: 2,
              },
              {
                q: "A grating has 6000 lines per cm and is 2 cm wide. Calculate its resolving power in the second order.",
                marks: 3,
              },
            ],
          },
          // --- 1.5 ---
          {
            number: "1.5",
            title: "Polarization - Brewster's law and Malus's law",
            body: [
              "Polarization is the property of transverse waves that restricts the vibrations of the disturbance to a single plane. Light is a transverse electromagnetic wave: the electric field vector is perpendicular to the direction of propagation. In ordinary light from the sun, a lamp or a candle, the electric field oscillates rapidly in all directions in the plane perpendicular to the ray, and the light is said to be unpolarized. A polarizer such as a tourmaline crystal or a polaroid sheet transmits only the component of the electric field along its transmission axis, producing linearly polarized light and absorbing the rest as heat.",
              "When unpolarized light is reflected from a transparent dielectric surface such as glass or water, the reflected beam is partially polarized, with the electric field preferentially perpendicular to the plane of incidence. At one particular angle of incidence, called Brewster's angle theta_B, the reflected beam is completely polarized in this direction and the reflected and refracted rays are perpendicular to each other. Brewster's law states that tan theta_B equals mu, the refractive index of the medium. For glass of mu equal to 1.5, theta_B equals arctan 1.5, which is about 56 degrees 19 minutes; for water it is about 53 degrees.",
              "When linearly polarized light falls on an analyser whose transmission axis makes an angle theta with the polarization direction of the incident beam, the transmitted intensity I equals I_0 times cos squared theta, where I_0 is the incident intensity. This is Malus's law. At theta equal to 0 the analyser transmits the full beam; at theta equal to 90 degrees it blocks it completely. Polarizers find wide application in anti-glare sunglasses, LCD displays, photoelastic stress analysis, and in determining the concentration of optically active sugar solutions in a polarimeter, where the rotation of the plane of polarization is proportional to concentration and path length.",
            ],
            bullets: [
              "Polarization: restriction of electric field vibrations to one direction; light is a transverse EM wave.",
              "Brewster's law: tan(theta_B) = mu; reflected light is fully polarized at theta_B; reflected and refracted rays are perpendicular.",
              "Malus's law: I = I_0*cos^2(theta), theta between polarizer and analyser transmission axes.",
              "Unpolarized light through a polarizer loses half its intensity: I = I_0/2.",
              "Applications: anti-glare sunglasses, LCD displays, polarimetry, photoelastic stress analysis.",
            ],
            table: {
              caption: "Brewster angle and polarization state for common dielectrics.",
              headers: ["Material", "Refractive index mu", "Brewster angle theta_B", "Typical use"],
              rows: [
                ["Water", "1.33", "53.1 deg", "anti-glare on water surfaces"],
                ["Crown glass", "1.52", "56.7 deg", "polarizing beam-splitter cubes"],
                ["Diamond", "2.42", "67.5 deg", "high-reflectance polarizers"],
                ["Quartz", "1.54", "57.0 deg", "polarimeter windows"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Polarized vs unpolarized light",
              caption:
                "Polarization restricts the electric field vibrations to one direction.",
              left: {
                heading: "Unpolarized",
                items: [
                  "Electric field in all directions perpendicular to propagation",
                  "Sun, lamp, candle - natural sources",
                  "Symmetric intensity through any polaroid rotation",
                  "No preferential axis",
                  "Half energy lost through a polarizer",
                ],
              },
              right: {
                heading: "Polarized",
                items: [
                  "Electric field along one direction only",
                  "Laser, reflected at Brewster angle, polaroid output",
                  "Intensity varies as cos^2(theta) through analyser",
                  "Has a defined polarization axis",
                  "Used in LCDs, sunglasses, stress analysis",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always specify which angle is which: theta_B is the angle of incidence from the normal in Brewster's law tan(theta_B) = mu; theta in Malus's law is between the polarizer and analyser transmission axes. Mixing them up loses easy marks.",
            },
            keyTerms: [
              { term: "Polarization", definition: "Restriction of the electric field vibrations of a transverse wave to a single plane." },
              { term: "Brewster's law", definition: "tan(theta_B) = mu; at this angle of incidence the reflected light is completely polarized." },
              { term: "Malus's law", definition: "I = I_0*cos^2(theta), giving the transmitted intensity through an analyser at angle theta to a polarizer." },
            ],
            examQuestions: [
              {
                q: "Explain the phenomenon of polarization of light. State and prove Brewster's law and Malus's law. Mention two applications of polarized light.",
                marks: 7,
                outline: [
                  "Define polarization as restriction of E-field vibrations to one direction; light is a transverse EM wave.",
                  "Distinguish unpolarized, partially polarized and linearly polarized light.",
                  "State Brewster's law tan(theta_B) = mu; reflected light is fully polarized at theta_B.",
                  "Show reflected and refracted rays are perpendicular at theta_B.",
                  "State Malus's law I = I_0*cos^2(theta), theta between polarizer and analyser axes.",
                  "Worked: glass mu = 1.5 -> theta_B ~ 56.3 deg; for I_0 = 10 W/m^2 and theta = 60 deg, I = 2.5 W/m^2.",
                  "Applications: anti-glare sunglasses, LCD displays, polarimetry, photoelastic stress analysis.",
                ],
              },
              {
                q: "State Brewster's law. What is the Brewster angle for glass of refractive index 1.5?",
                marks: 2,
              },
              {
                q: "Unpolarized light of intensity I_0 passes through two polarizers whose axes make 60 deg. What is the output intensity?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT II - QUANTUM MECHANICS
    // =================================================================
    {
      number: 2,
      roman: "II",
      title: "Quantum Mechanics",
      summary:
        "Unit II introduces quantum mechanics. The photoelectric effect establishes the photon and Einstein's equation; the Compton effect shows photons carry momentum; de Broglie extends wave-particle duality to matter; Heisenberg uncertainty sets the limits of measurement; and the Schrodinger equation applied to a particle in a box shows how confinement quantizes energy.",
      chapter: {
        number: "02",
        title: "Quantum Mechanics",
        intro:
          "Unit II develops quantum mechanics from the photon concept. The photoelectric effect gives Einstein's equation K_max = h*f - phi; the Compton effect confirms photon momentum; de Broglie extends wave-particle duality to matter; Heisenberg's uncertainty principle sets measurement limits; and the time-independent Schrodinger equation applied to a particle in a one-dimensional infinite well yields quantized energy levels.",
        sections: [
          // --- 2.1 ---
          {
            number: "2.1",
            title: "Photoelectric effect and Einstein's equation",
            body: [
              "When light of suitable frequency falls on a metal surface, electrons are emitted from the surface; this phenomenon is the photoelectric effect, discovered by Hertz in 1887 and explained by Einstein in 1905. Classical wave theory could not account for three observed facts: emission is instantaneous (no time lag even at low intensity), the kinetic energy of the emitted electrons depends on the frequency of the incident light and not on its intensity, and below a certain threshold frequency f0 no electrons are emitted however intense the light. Einstein explained these by treating light as a stream of energy quanta called photons.",
              "Each photon carries energy h times f, where h is Planck's constant and f the frequency. When a photon strikes the metal, it is wholly absorbed by a single electron. If the photon energy exceeds the work function phi of the metal (the minimum energy needed to liberate an electron from the surface), the electron escapes with kinetic energy equal to h f minus phi. Einstein's photoelectric equation is K_max equals h f minus phi. The threshold frequency f0 is defined by h f0 equals phi, so for frequencies below f0 no emission occurs; for higher frequencies K_max rises linearly with f.",
              "The stopping potential V0 is the retarding voltage needed to stop even the fastest photoelectron: K_max equals e times V0, giving e V0 equals h f minus phi, or V0 equals (h divided by e) times f minus phi divided by e. A plot of V0 against f is a straight line whose slope gives h divided by e (about 4.14 times 10^-15 V*s) and whose intercept on the frequency axis gives f0. For caesium, phi is about 2.0 eV so f0 is 4.8 times 10^14 Hz; for zinc phi is about 4.3 eV, so light of wavelength longer than 290 nm cannot eject electrons.",
            ],
            bullets: [
              "Photoelectric effect: light on a metal surface ejects electrons (called photoelectrons).",
              "Einstein equation: K_max = h*f - phi, where phi is the work function of the metal.",
              "Threshold frequency f0 = phi/h; no emission below f0 however intense the light.",
              "Stopping potential V0 = K_max/e; plot V0 vs f is linear with slope h/e ~ 4.14e-15 V*s.",
              "Cannot be explained by wave theory - confirms the photon nature of light.",
            ],
            codeExample: {
              language: "python",
              caption: "Stopping potential and threshold frequency for caesium.",
              code:
                `# Photoelectric effect: stopping potential vs frequency
h = 6.63e-34           # J*s, Planck constant
e = 1.602e-19          # C, electron charge
phi_eV = 2.0           # work function in eV (caesium)
phi = phi_eV * e       # in joules
f = 7.0e14             # Hz, incident light frequency
K_max = h * f - phi
V0 = K_max / e
print("Threshold f0 = %.2e Hz" % (phi / h))
print("Stopping potential V0 = %.2f V" % V0)
# f0 = 4.81e14 Hz, V0 = 0.90 V`,
            },
            diagram: {
              kind: "pyramid",
              title: "Photoelectric effect: the factors that decide emission",
              caption:
                "Photoemission depends on photon energy, the metal's work function, and the resulting stopping potential.",
              tiers: [
                { label: "Photon energy h*f", note: "must exceed work function phi" },
                { label: "Work function phi", note: "Cs ~ 2 eV, Zn ~ 4.3 eV" },
                { label: "Threshold frequency f0 = phi/h", note: "below f0, no emission regardless of intensity" },
                { label: "Stopping potential V0 = (h*f - phi)/e", note: "slope of V0 vs f gives h/e" },
              ],
            },
            callout: {
              type: "tip",
              title: "Tip",
              body: "Plot V0 vs f: the slope is h/e ~ 4.14e-15 V*s. Memorising this value lets you cross-check any photoelectric numerical instantly.",
            },
            keyTerms: [
              { term: "Photoelectric effect", definition: "Emission of electrons from a metal surface when light of frequency above a threshold falls on it." },
              { term: "Work function", definition: "The minimum energy needed to liberate an electron from the surface of a metal." },
              { term: "Stopping potential", definition: "The retarding voltage V0 that stops even the fastest photoelectron; K_max = e*V0." },
            ],
            examQuestions: [
              {
                q: "State the laws of the photoelectric effect. Derive Einstein's photoelectric equation and explain how Planck's constant can be determined from a plot of stopping potential versus frequency.",
                marks: 7,
                outline: [
                  "State the four laws: instantaneous emission, threshold frequency, K_max depends on frequency not intensity, photocurrent proportional to intensity above f0.",
                  "Explain the failure of wave theory (predicts time lag and intensity dependence of K_max).",
                  "Einstein's photon picture: photon of energy h*f absorbed by a single electron.",
                  "Einstein's equation K_max = h*f - phi, with phi the work function.",
                  "Threshold frequency f0 = phi/h; below f0 no emission.",
                  "Stopping potential V0 = (h/e)*f - phi/e; slope of V0 vs f gives h/e, intercept gives -phi/e.",
                  "Worked: caesium phi = 2.0 eV -> f0 = 4.81e14 Hz; for f = 7e14 Hz, V0 = 0.90 V.",
                ],
              },
              {
                q: "Define work function and threshold frequency.",
                marks: 2,
              },
              {
                q: "The work function of a metal is 2.0 eV. Find the threshold wavelength for photoelectric emission.",
                marks: 3,
              },
            ],
          },
          // --- 2.2 ---
          {
            number: "2.2",
            title: "Compton effect",
            body: [
              "When a beam of X-rays of wavelength lambda is scattered by free or loosely bound electrons in a graphite target, the scattered X-rays consist of two components: one of the same wavelength lambda (unchanged, due to scattering by tightly bound inner electrons that take the whole atom with them) and another of slightly longer wavelength lambda prime (due to scattering by nearly free outer electrons). The wavelength shift delta lambda equals lambda prime minus lambda depends only on the scattering angle theta and not on the wavelength of the incident X-rays or the nature of the target. This is the Compton effect, observed by Arthur Compton in 1923.",
              "Treating the X-ray photon as a particle of energy h times f and momentum h divided by lambda, and applying relativistic conservation of energy and momentum to the elastic collision between the photon and a stationary free electron, Compton derived delta lambda equals (h divided by m times c) times (1 minus cos theta), where m is the electron rest mass. The factor h divided by m c is the Compton wavelength of the electron and equals 2.43 times 10^-12 m, or 0.0243 Angstrom. The shift is zero at theta equal to 0 (forward scattering) and equals twice the Compton wavelength at theta equal to 180 degrees.",
              "As a worked example, X-rays of wavelength 0.709 Angstrom scattered at 90 degrees have shift 0.0243 times (1 minus cos 90) which is 0.0243 times 1 equals 0.0243 Angstrom; the scattered wavelength is therefore 0.709 plus 0.0243 equals 0.733 Angstrom. The recoiling electron carries off the lost photon energy as kinetic energy. The Compton effect confirmed that photons carry momentum as well as energy, settling the wave-particle debate in favour of wave-particle duality and earning Compton the 1927 Nobel Prize in Physics. It is the basis for Compton scattering gamma-ray detectors in modern medical and nuclear physics.",
            ],
            bullets: [
              "Compton effect: scattered X-rays have a longer wavelength than the incident beam; shift depends only on angle.",
              "Photon carries momentum p = h/lambda as well as energy E = h*f.",
              "Compton shift formula: delta lambda = (h/(m*c))*(1 - cos theta); h/(m*c) = 0.0243 A is the Compton wavelength of the electron.",
              "Shift is zero at theta = 0 (forward) and equals 2*0.0243 A at theta = 180 deg (back-scatter).",
              "Confirms wave-particle duality of radiation; basis of gamma-ray detectors in nuclear physics.",
            ],
            codeExample: {
              language: "python",
              caption: "Compton shift for X-rays scattered at 0, 45, 90 and 180 degrees.",
              code:
                `# Compton shift for X-rays at scattering angles
import math
h = 6.63e-34          # J*s
m = 9.11e-31          # kg, electron rest mass
c = 3.0e8             # m/s
lambda_in = 0.709e-10 # metres (0.709 Angstrom)
wl_c = h / (m * c)    # Compton wavelength ~ 2.43e-12 m
for deg in (0, 45, 90, 180):
    dlam = wl_c * (1 - math.cos(math.radians(deg)))
    print("theta=%3d deg  shift=%.4f A  lambda'=%.4f A"
          % (deg, dlam*1e10, (lambda_in+dlam)*1e10))`,
            },
            diagram: {
              kind: "flow",
              title: "Compton scattering process",
              caption:
                "A photon hits a stationary electron and scatters with a longer wavelength; the electron recoils.",
              steps: [
                { label: "Incident photon (lambda, p = h/lambda)", note: "X-ray energy ~ keV" },
                { label: "Hits stationary electron", note: "free or loosely bound" },
                { label: "Scattered photon (lambda' > lambda)", note: "shift = (h/mc)*(1 - cos theta)" },
                { label: "Recoil electron", note: "carries kinetic energy" },
                { label: "Energy and momentum conserved", note: "relativistic equations" },
              ],
            },
            callout: {
              type: "warning",
              title: "Common slip",
              body: "The Compton shift formula uses the electron rest mass m = 9.11e-31 kg, NOT the electron mass at the operating energy. The Compton wavelength h/(m*c) is fixed at 0.0243 Angstrom.",
            },
            keyTerms: [
              { term: "Compton effect", definition: "Increase in wavelength of X-rays when scattered by free or loosely bound electrons." },
              { term: "Compton wavelength", definition: "h/(m*c) = 2.43e-12 m for the electron; the natural scale of the Compton shift." },
              { term: "Photon momentum", definition: "p = h/lambda; light carries momentum as well as energy, the basis of Compton scattering." },
            ],
            examQuestions: [
              {
                q: "What is the Compton effect? Derive an expression for the Compton shift in wavelength and verify it for X-rays of wavelength 0.709 Angstrom scattered at 90 degrees.",
                marks: 7,
                outline: [
                  "Define Compton effect: increase in wavelength of X-rays on scattering by free electrons.",
                  "Note classical wave theory predicts no shift; the photon model is required.",
                  "Treat photon as a particle of energy h*f and momentum h/lambda; electron initially at rest.",
                  "Apply relativistic conservation of energy and momentum in two dimensions.",
                  "Derive delta lambda = (h/(m*c))*(1 - cos theta).",
                  "Identify the Compton wavelength of the electron h/(m*c) = 0.0243 Angstrom.",
                  "Worked: lambda = 0.709 A at theta = 90 deg gives delta = 0.0243 A; scattered wavelength = 0.733 A.",
                ],
              },
              {
                q: "Define the Compton wavelength of the electron and give its value.",
                marks: 2,
              },
              {
                q: "Calculate the Compton shift for scattering at 180 degrees.",
                marks: 3,
              },
            ],
          },
          // --- 2.3 ---
          {
            number: "2.3",
            title: "de Broglie wavelength",
            body: [
              "In 1924 Louis de Broglie proposed that matter, like light, has a dual nature: every particle of momentum p is associated with a wave of wavelength lambda given by lambda equals h divided by p, where h is Planck's constant. For a particle of mass m moving with velocity v much smaller than the speed of light, the momentum is m v and the de Broglie wavelength becomes lambda equals h divided by (m times v). This hypothesis was confirmed by Davisson and Germer in 1927, who observed diffraction of electrons by a nickel crystal, exactly as de Broglie had predicted.",
              "For an electron accelerated through a potential difference of V volts, the kinetic energy gained is e V equals (one half) m v squared, where e is the electronic charge and m the electron mass. Substituting v equal to square root of (2 e V divided by m) into the de Broglie relation gives lambda equals h divided by square root of (2 m e V). Putting in the numerical values h equal to 6.63 times 10^-34 J*s, m equal to 9.1 times 10^-31 kg and e equal to 1.6 times 10^-19 C, the formula simplifies to lambda equals 12.27 divided by square root of V Angstrom.",
              "As a worked example, an electron accelerated through 150 V has lambda equal to 12.27 divided by square root of 150, which equals 12.27 divided by 12.25, about 1.00 Angstrom, comparable to the interatomic spacing in crystals. This is why electron diffraction can probe crystal structures just as X-ray diffraction does. The wave nature of the electron underlies the working of the electron microscope, whose resolving power is far greater than an optical microscope because the de Broglie wavelength of the electron is thousands of times shorter than visible light. The de Broglie relation is the cornerstone of wave mechanics.",
            ],
            bullets: [
              "de Broglie hypothesis: every particle of momentum p has an associated wave of wavelength lambda = h/p.",
              "For an electron through V volts: lambda = h/sqrt(2*m*e*V) = 12.27/sqrt(V) Angstrom.",
              "At V = 150 V, lambda ~ 1.00 A, comparable to interatomic spacing in crystals.",
              "Confirmed by the Davisson-Germer electron diffraction experiment (1927).",
              "Underlies the electron microscope: shorter lambda gives much higher resolving power than optical microscopes.",
            ],
            codeExample: {
              language: "python",
              caption: "de Broglie wavelength of an electron through 50, 100, 150 and 1000 volts.",
              code:
                `# de Broglie wavelength of an electron through V volts
import math
h = 6.63e-34          # J*s
m = 9.11e-31          # kg
e = 1.602e-19         # C
for V in (50, 100, 150, 1000):
    lam = h / math.sqrt(2 * m * e * V)
    print("V=%4d V  ->  lambda = %.3f Angstrom"
          % (V, lam * 1e10))
# V=  50 V -> lambda = 1.735 A
# V= 150 V -> lambda = 1.003 A  (matches 12.27/sqrt(V) A)`,
            },
            diagram: {
              kind: "fork",
              title: "Wave-particle duality of the electron",
              caption:
                "Whether an electron behaves as a wave or a particle depends on the experiment performed on it.",
              start: "An electron at energy E and momentum p",
              branches: [
                { label: "Treat as wave", outcome: "lambda = h/p, used in electron microscopy and diffraction", good: true },
                { label: "Treat as particle", outcome: "trajectory in a CRT, fine for low-energy beams", good: true },
                { label: "Ignore duality", outcome: "miss diffraction effects, wrong predictions at small scales", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "For an electron through V volts the shortcut lambda = 12.27/sqrt(V) Angstrom saves time. Verify with V = 150 V giving lambda = 1.00 A, comparable to interatomic spacing.",
            },
            keyTerms: [
              { term: "de Broglie wavelength", definition: "lambda = h/p, the wavelength associated with any particle of momentum p." },
              { term: "Wave-particle duality", definition: "Matter and radiation both exhibit wave and particle properties depending on the experiment." },
              { term: "Electron diffraction", definition: "Diffraction of electrons by crystals, confirming de Broglie's hypothesis (Davisson-Germer 1927)." },
            ],
            examQuestions: [
              {
                q: "State de Broglie's hypothesis. Derive an expression for the de Broglie wavelength of an electron accelerated through a potential V volts and verify it for V = 150 V.",
                marks: 7,
                outline: [
                  "State de Broglie hypothesis: every particle of momentum p has an associated wave of wavelength lambda = h/p.",
                  "Mention confirmation by the Davisson-Germer electron diffraction experiment (1927).",
                  "For an electron of mass m through V volts: kinetic energy e*V = (1/2)*m*v^2.",
                  "Momentum p = m*v = sqrt(2*m*e*V).",
                  "Substitute into de Broglie: lambda = h/sqrt(2*m*e*V).",
                  "Simplify numerically: lambda = 12.27/sqrt(V) Angstrom.",
                  "Worked: V = 150 V -> lambda = 12.27/sqrt(150) = 1.00 A, comparable to interatomic spacing, hence electron diffraction.",
                ],
              },
              {
                q: "An electron is accelerated through 100 V. What is its de Broglie wavelength?",
                marks: 2,
              },
              {
                q: "Calculate the de Broglie wavelength of a 1 g bullet moving at 300 m/s. Comment on the result.",
                marks: 3,
              },
            ],
          },
          // --- 2.4 ---
          {
            number: "2.4",
            title: "Heisenberg uncertainty principle",
            body: [
              "In 1927 Werner Heisenberg stated that it is impossible to measure simultaneously both the position and the momentum of a particle with arbitrary precision. The product of the uncertainties in position (delta x) and momentum (delta p) is always greater than or equal to hbar divided by 2, where hbar is h divided by 2 pi. The relation delta x times delta p greater than or equal to hbar divided by 2 is the Heisenberg uncertainty principle. The principle is not a statement about poor instruments but a fundamental limit set by the wave nature of matter: a particle localized to a small region necessarily has a spread in momentum.",
              "A second conjugate pair is energy and time: delta E times delta t greater than or equal to hbar divided by 2. An excited state with a short lifetime delta t has an inherent uncertainty in its energy delta E, which is observed as the natural linewidth of the spectral line it emits. The uncertainty principle explains why an electron confined in an atom does not collapse into the nucleus: such localization would give it a huge momentum and hence kinetic energy, making the bound state energetically unfavourable. It also explains the nonzero ground-state energy of a particle in a box.",
              "As a numerical estimate, take an electron confined to within 10^-10 m, the size of a hydrogen atom. Then delta p is at least hbar divided by (2 times delta x), equal to 1.05 times 10^-34 divided by (2 times 10^-10), about 5 times 10^-25 kg*m/s, giving a velocity uncertainty of order 5 times 10^5 m/s. By contrast, a cricket ball of mass 0.16 kg known to within 10^-6 m has delta p of order 5 times 10^-29 kg*m/s and a velocity uncertainty of order 3 times 10^-28 m/s, utterly negligible. The principle is significant only for particles of very small mass confined to very small regions.",
            ],
            bullets: [
              "Heisenberg uncertainty: delta x * delta p >= hbar/2, with hbar = h/(2*pi).",
              "Energy-time form: delta E * delta t >= hbar/2 (explains natural linewidth of spectral lines).",
              "Fundamental limit, not a measurement artefact - arises from the wave nature of matter.",
              "Significant for electrons in atoms (~10^-10 m) and nuclei (~10^-15 m); negligible for cricket balls.",
              "Explains the nonzero ground-state energy of a particle in a box; electron cannot collapse into the nucleus.",
            ],
            table: {
              caption: "Heisenberg uncertainty in three worked settings.",
              headers: ["System", "delta x", "delta p (kg*m/s)", "Interpretation"],
              rows: [
                ["Electron in hydrogen atom", "10^-10 m", "~ 5e-25", "velocity spread ~ 5e5 m/s; quantum regime"],
                ["Electron in a 1 nm box", "10^-9 m", "~ 5e-26", "ground-state KE ~ 0.04 eV"],
                ["Proton confined to a nucleus", "10^-15 m", "~ 5e-20", "nuclear energies of MeV scale"],
                ["Cricket ball (0.16 kg)", "10^-6 m", "~ 5e-29", "negligible; classical regime"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Heisenberg uncertainty: the two conjugate pairs",
              caption:
                "Position-momentum and energy-time are the two most examined conjugate pairs.",
              left: {
                heading: "Position x and momentum p",
                items: [
                  "delta x * delta p >= hbar/2",
                  "Most commonly asked in RGPV",
                  "Tight for electron in atom (~10^-10 m)",
                  "Loose for a thrown cricket ball",
                  "Used to estimate ground-state energy of hydrogen",
                ],
              },
              right: {
                heading: "Energy E and time t",
                items: [
                  "delta E * delta t >= hbar/2",
                  "Explains natural linewidth of spectral lines",
                  "Short-lived states have broad energy",
                  "Used to estimate excited-state lifetimes",
                  "Comes from Fourier conjugacy of E = h*f",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Tip",
              body: "Uncertainty is significant only for very light particles in very small regions. For a cricket ball the delta is unmeasurable - classical mechanics is safe there.",
            },
            keyTerms: [
              { term: "Uncertainty principle", definition: "delta x * delta p >= hbar/2; simultaneous position and momentum cannot be known to arbitrary precision." },
              { term: "hbar", definition: "Reduced Planck constant h/(2*pi), approximately 1.05e-34 J*s." },
              { term: "Conjugate variables", definition: "Pairs like x-p and E-t whose product of uncertainties is bounded below by hbar/2." },
            ],
            examQuestions: [
              {
                q: "State Heisenberg's uncertainty principle. Apply it to estimate the minimum kinetic energy of an electron confined to a one-dimensional region of size L = 10^-10 m (the hydrogen atom scale).",
                marks: 7,
                outline: [
                  "State the principle: delta x * delta p >= hbar/2, with hbar = h/(2*pi).",
                  "Mention the energy-time form delta E * delta t >= hbar/2.",
                  "Explain that this is a fundamental limit, not a measurement artefact.",
                  "Apply to an electron confined to delta x = L: delta p >= hbar/(2*L).",
                  "Minimum kinetic energy ~ (delta p)^2 / (2*m) = hbar^2/(8*m*L^2).",
                  "Numerical: L = 10^-10 m -> KE ~ 0.38 eV (consistent with hydrogen ground state energy of order eV).",
                  "Conclude: electron cannot sit in the nucleus; localization raises its energy.",
                ],
              },
              {
                q: "Write the position-momentum uncertainty relation in terms of hbar.",
                marks: 2,
              },
              {
                q: "An electron is confined to a region of size 10^-9 m. Estimate the minimum uncertainty in its momentum.",
                marks: 3,
              },
            ],
          },
          // --- 2.5 ---
          {
            number: "2.5",
            title: "Schrodinger equation and particle in a box",
            body: [
              "The Schrodinger equation, formulated by Erwin Schrodinger in 1926, is the fundamental wave equation of non-relativistic quantum mechanics. The time-dependent form is i times hbar times the partial derivative of psi with respect to t equals the operator H acting on psi, where psi is the wavefunction, i is the square root of minus 1, and H is the Hamiltonian operator representing total energy. For a particle of mass m moving in a potential V, the time-independent Schrodinger equation is minus hbar squared divided by 2m times the second partial derivative of psi with respect to x plus V times psi equals E times psi, where E is the total energy.",
              "The simplest non-trivial application is the particle in a one-dimensional infinite potential well of width L, also called a particle in a box. Inside the box, V is zero; at the walls and outside, V is infinite. The particle cannot exist outside the box, so psi is zero at the walls x equal to 0 and x equal to L. Solving the Schrodinger equation inside the box with these boundary conditions gives quantized energy levels E_n equals n squared times h squared divided by (8 m L squared), where the quantum number n takes positive integer values 1, 2, 3 and so on.",
              "The corresponding normalized wavefunctions are psi_n equals square root of (2 divided by L) times sin (n pi x divided by L). The ground state E_1 is nonzero, in agreement with the uncertainty principle: a confined particle cannot have zero kinetic energy. As n increases the number of nodes inside the box increases; there are n minus 1 nodes for the n-th state. For an electron in a 1 nm box, E_1 equals (1 squared times h squared) divided by (8 times m times L squared) about 0.38 eV, and the next level E_2 equals 4 times E_1 about 1.5 eV. These ideas lead directly to the band theory of solids in Unit III.",
            ],
            bullets: [
              "Time-independent Schrodinger equation: -(hbar^2/2m)*d^2(psi)/dx^2 + V*psi = E*psi.",
              "Particle in a 1-D infinite well of width L: V = 0 inside, infinity at walls; boundary psi(0) = psi(L) = 0.",
              "Quantized energy levels: E_n = n^2*h^2/(8*m*L^2), n = 1, 2, 3 ...",
              "Wavefunctions: psi_n = sqrt(2/L)*sin(n*pi*x/L); (n-1) nodes inside the box.",
              "Ground state E_1 is nonzero - consistent with the Heisenberg uncertainty principle.",
            ],
            codeExample: {
              language: "python",
              caption: "First three energy levels of an electron in a 1 nm infinite well.",
              code:
                `# Particle in a box: first three energy levels
import math
h = 6.63e-34          # J*s
m = 9.11e-31          # kg, electron mass
L = 1.0e-9            # metres, box width = 1 nm
e = 1.602e-19         # C, for eV conversion
E1 = h**2 / (8 * m * L**2)
for n in (1, 2, 3):
    En = n**2 * E1
    print("n=%d  E = %.3e J  =  %.3f eV"
          % (n, En, En / e))
# E1 ~ 6.0e-20 J ~ 0.376 eV`,
            },
            diagram: {
              kind: "layers",
              title: "Particle in a 1-D infinite potential well",
              caption:
                "The infinite walls at x = 0 and x = L quantize the allowed energies of the confined particle.",
              layers: [
                { label: "Infinite walls at x = 0 and x = L", note: "V = infinity outside, V = 0 inside" },
                { label: "Allowed wavelengths: lambda_n = 2L/n", note: "n = 1, 2, 3 ..." },
                { label: "Energy levels E_n = n^2*h^2/(8*m*L^2)", note: "ground state E_1 is nonzero" },
                { label: "Wavefunctions psi_n = sqrt(2/L)*sin(n*pi*x/L)", note: "nodes at walls, (n-1) nodes inside" },
                { label: "Quantum number n", note: "n = 0 is forbidden (zero energy not allowed)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "In a particle in a box, the boundary conditions psi(0) = psi(L) = 0 are what quantize the energy. State them first, then write the general solution, then apply them to get k*L = n*pi.",
            },
            keyTerms: [
              { term: "Schrodinger equation", definition: "The wave equation of non-relativistic quantum mechanics; i*hbar*d(psi)/dt = H*psi (time-dependent form)." },
              { term: "Particle in a box", definition: "A particle confined to a 1-D infinite potential well; energy levels are E_n = n^2*h^2/(8*m*L^2)." },
              { term: "Quantization", definition: "Discrete allowed values of energy (or other observable) arising from boundary conditions on the wavefunction." },
            ],
            examQuestions: [
              {
                q: "Write the time-independent Schrodinger equation. Apply it to a particle in a one-dimensional infinite potential well of width L and obtain the energy levels and the normalized wavefunctions.",
                marks: 7,
                outline: [
                  "Write the time-independent Schrodinger equation: -(hbar^2/2m)*d^2(psi)/dx^2 + V*psi = E*psi.",
                  "For the infinite well: V = 0 inside (0 < x < L), V = infinity at x = 0 and x = L.",
                  "Inside the well the equation reduces to d^2(psi)/dx^2 + k^2*psi = 0 with k^2 = 2*m*E/hbar^2.",
                  "General solution psi = A*sin(k*x) + B*cos(k*x); boundary conditions psi(0) = psi(L) = 0 force B = 0 and k*L = n*pi.",
                  "Quantized energies: E_n = n^2*h^2/(8*m*L^2), n = 1, 2, 3 ...",
                  "Normalized wavefunctions: psi_n = sqrt(2/L)*sin(n*pi*x/L).",
                  "Note E_1 is nonzero (uncertainty principle) and there are n-1 nodes inside the box.",
                ],
              },
              {
                q: "Write the boundary conditions for a particle in an infinite potential well.",
                marks: 2,
              },
              {
                q: "Find the ratio of the energies of the first two excited states to the ground state in a particle-in-a-box.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT III - SOLID STATE AND SEMICONDUCTOR PHYSICS
    // =================================================================
    {
      number: 3,
      roman: "III",
      title: "Solid State and Semiconductor Physics",
      summary:
        "Unit III covers solid-state physics. Crystal lattices and Miller indices label planes; packing fractions compare SC, BCC and FCC; Bragg's law governs X-ray diffraction; band theory distinguishes conductors, semiconductors and insulators; and doping introduces n-type and p-type materials, with the Hall effect revealing carrier type.",
      chapter: {
        number: "03",
        title: "Solid State and Semiconductor Physics",
        intro:
          "Unit III moves from crystal structure to semiconductor devices. Miller indices label lattice planes; packing fractions quantify SC, BCC and FCC; Bragg's law governs X-ray diffraction; band theory classifies solids into conductors, semiconductors and insulators; and doping with group III or V impurities, characterised by the Hall effect, turns intrinsic semiconductors into useful devices.",
        sections: [
          // --- 3.1 ---
          {
            number: "3.1",
            title: "Crystal lattice and Miller indices",
            body: [
              "A crystal is a solid in which the constituent atoms, ions or molecules are arranged in a regular, repeating three-dimensional pattern called a crystal lattice. A lattice is an infinite array of points such that the environment of each point is identical; the smallest repeating unit that fills space by translation is the unit cell. The unit cell is described by three primitive vectors a, b, c and the angles alpha, beta, gamma between them, giving seven crystal systems and 14 Bravais lattices. Cubic lattices (simple, body-centred, face-centred) are the most important for engineering physics because most metals and semiconductors crystallize in cubic structures.",
              "Miller indices are a compact notation for labelling the orientation of a crystal plane. The recipe is: find the intercepts of the plane on the three crystallographic axes a, b, c in units of the lattice constants; take the reciprocals of these intercepts; clear fractions by multiplying by the least common multiple; enclose the resulting smallest integers in round brackets as (h k l). A plane parallel to an axis has intercept at infinity, whose reciprocal is zero. Negative indices are written with a bar over the number, so (1 1 bar-1) means the plane cuts the c-axis on the negative side.",
              "As worked examples, the plane with intercepts 1, 1, infinity on the a, b, c axes has reciprocals 1, 1, 0 and Miller indices (1 1 0); the plane with intercepts 1, one half, one third has reciprocals 1, 2, 3 and Miller indices (1 2 3); the plane with intercepts a, 2b, infinity gives indices (2 1 0). The interplanar spacing d for cubic crystals of lattice constant a is given by d squared equals a squared divided by (h squared plus k squared plus l squared). Miller indices are essential in X-ray diffraction (next section) because Bragg's law relates d to the diffraction angle.",
            ],
            bullets: [
              "Crystal lattice: regular 3-D array of points with identical environment; smallest repeating unit is the unit cell.",
              "Unit cell described by vectors a, b, c and angles alpha, beta, gamma; 7 systems, 14 Bravais lattices.",
              "Miller indices (h k l): reciprocals of intercepts on a, b, c axes, cleared to smallest integers.",
              "Plane parallel to an axis -> intercept at infinity -> reciprocal 0 -> index 0 along that axis.",
              "Interplanar spacing (cubic): d = a / sqrt(h^2 + k^2 + l^2); essential for Bragg's law.",
            ],
            table: {
              caption: "Miller index computation for four planes in a cubic crystal.",
              headers: ["Intercepts (a, b, c)", "Reciprocals", "Cleared to integers", "Miller indices (h k l)"],
              rows: [
                ["1, 1, infinity", "1, 1, 0", "1, 1, 0", "(1 1 0)"],
                ["1, 1/2, infinity", "1, 2, 0", "1, 2, 0", "(1 2 0)"],
                ["1, 1/2, 1/3", "1, 2, 3", "1, 2, 3", "(1 2 3)"],
                ["a, 2b, infinity", "1, 1/2, 0", "2, 1, 0", "(2 1 0)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Miller indices: from intercepts to (h k l)",
              caption:
                "The standard recipe for labelling a crystal plane in four steps.",
              steps: [
                { label: "Find intercepts on a, b, c axes", note: "in units of lattice constants" },
                { label: "Take reciprocals", note: "infinity -> 0" },
                { label: "Clear fractions to smallest integers", note: "multiply by LCM" },
                { label: "Enclose in (h k l) brackets", note: "negative index shown with a bar" },
                { label: "Worked: (1, 1/2, infinity) -> (2 1 0)", note: "cuts a at a, b at 2b, parallel to c" },
              ],
            },
            callout: {
              type: "tip",
              title: "Tip",
              body: "A plane parallel to an axis has intercept at infinity, so its Miller index along that axis is 0. This is the fastest way to spot (1 0 0), (1 1 0) and (1 1 1).",
            },
            keyTerms: [
              { term: "Crystal lattice", definition: "A regular three-dimensional array of points with identical environment; the framework of a crystal." },
              { term: "Miller indices", definition: "A set of three integers (h k l) labelling a crystal plane, obtained from reciprocals of intercepts." },
              { term: "Interplanar spacing", definition: "Distance d between adjacent parallel lattice planes; for cubic crystals d = a/sqrt(h^2 + k^2 + l^2)." },
            ],
            examQuestions: [
              {
                q: "Define Miller indices. Describe the procedure for finding the Miller indices of a crystal plane and work out the indices for planes with intercepts (i) 1, 1, infinity (ii) 1, 1/2, 1/3 (iii) a, 2b, infinity on the crystallographic axes.",
                marks: 7,
                outline: [
                  "Define Miller indices as the reciprocals of the intercepts made by a plane on the crystallographic axes, reduced to smallest integers.",
                  "Procedure: find intercepts in units of lattice constants; take reciprocals (infinity -> 0); clear fractions; enclose in (h k l).",
                  "Negative indices are written with a bar over the number.",
                  "Plane (i): intercepts 1, 1, infinity -> reciprocals 1, 1, 0 -> indices (1 1 0).",
                  "Plane (ii): intercepts 1, 1/2, 1/3 -> reciprocals 1, 2, 3 -> indices (1 2 3).",
                  "Plane (iii): intercepts a, 2b, infinity -> 1, 1/2, 0 -> 2, 1, 0 -> indices (2 1 0).",
                  "Mention use of Miller indices in Bragg's law and in describing crystal cleavage planes.",
                ],
              },
              {
                q: "What is the Miller index of a plane parallel to the b and c axes?",
                marks: 2,
              },
              {
                q: "The intercepts of a plane on the a, b, c axes are 2, 3, infinity. Find its Miller indices.",
                marks: 3,
              },
            ],
          },
          // --- 3.2 ---
          {
            number: "3.2",
            title: "Packing fraction of cubic lattices",
            body: [
              "The packing fraction (or atomic packing factor) of a crystal is the fraction of the total volume of the unit cell that is actually occupied by the atoms, treating each atom as a hard sphere of radius r touching its nearest neighbours. It is a measure of how efficiently the atoms fill space. The packing fraction equals (number of atoms per unit cell times volume of one atom) divided by the volume of the unit cell. Higher packing fraction means denser crystal and usually higher density and ductility; lower packing fraction means more empty space and typically lower density.",
              "In a simple cubic (SC) lattice there is one atom per unit cell (eight corner atoms each shared by eight cells), the atomic radius r equals a divided by 2, and the packing fraction is pi divided by 6, about 0.52 or 52 percent. In a body-centred cubic (BCC) lattice there are two atoms per cell (eight corners plus one body centre), the relation 4r equals a times square root of 3 holds, and the packing fraction is pi times square root of 3 divided by 8, about 0.68 or 68 percent. Only polonium among the elements crystallizes as simple cubic; iron, chromium and tungsten are BCC.",
              "In a face-centred cubic (FCC) lattice there are four atoms per cell (eight corners plus six face centres each shared by two cells), the relation 4r equals a times square root of 2 holds, and the packing fraction is pi divided by (3 times square root of 2), about 0.74 or 74 percent, the densest possible packing of identical spheres. The hexagonal close-packed (HCP) structure also achieves 74 percent. Aluminum, copper, gold, lead and nickel are FCC; magnesium, zinc and titanium are HCP. Knowing the packing fraction and the atomic radius lets one predict the density of a metal from its crystal structure.",
            ],
            bullets: [
              "Packing fraction = (atoms per cell * volume of one atom) / volume of unit cell.",
              "SC: 1 atom per cell, r = a/2; packing fraction = pi/6 ~ 52%.",
              "BCC: 2 atoms per cell, 4r = sqrt(3)*a; packing fraction = sqrt(3)*pi/8 ~ 68%.",
              "FCC: 4 atoms per cell, 4r = sqrt(2)*a; packing fraction = pi/(3*sqrt(2)) ~ 74%.",
              "FCC and HCP both achieve 74% - the densest possible packing of identical spheres.",
            ],
            table: {
              caption: "Atomic packing in cubic lattices.",
              headers: ["Lattice", "Atoms per cell", "r vs a relation", "Packing fraction"],
              rows: [
                ["Simple cubic (SC)", "1", "r = a/2", "pi/6 ~ 52%"],
                ["Body-centred cubic (BCC)", "2", "4r = sqrt(3)*a", "sqrt(3)*pi/8 ~ 68%"],
                ["Face-centred cubic (FCC)", "4", "4r = sqrt(2)*a", "pi/(3*sqrt(2)) ~ 74%"],
                ["Hexagonal close-packed (HCP)", "2 per primitive cell", "ideal c/a = 1.633", "~ 74%"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Packing fraction: how much space atoms fill",
              caption:
                "From the loosest to the densest packing of identical spheres in cubic lattices.",
              tiers: [
                { label: "Simple cubic (SC): 52%", note: "atoms at cube corners only" },
                { label: "Body-centred cubic (BCC): 68%", note: "extra atom at the body centre" },
                { label: "Face-centred cubic (FCC): 74%", note: "atoms at corners and face centres" },
                { label: "Hexagonal close-packed (HCP): 74%", note: "same density as FCC, different stacking" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Memorise the three numbers 52, 68 and 74 percent for SC, BCC and FCC. They appear as a one-line short question and also inside the 7-mark derivation.",
            },
            keyTerms: [
              { term: "Packing fraction", definition: "Fraction of unit cell volume actually occupied by atoms; SC 52%, BCC 68%, FCC 74%." },
              { term: "Unit cell", definition: "The smallest repeating unit of a crystal that fills space by translation." },
              { term: "Nearest-neighbour distance", definition: "Distance between a given atom and its closest neighbour; 2r in SC, sqrt(3)*a/2 in BCC, a/sqrt(2) in FCC." },
            ],
            examQuestions: [
              {
                q: "Define atomic packing fraction. Calculate the packing fraction for simple cubic, body-centred cubic and face-centred cubic lattices. Which structure has the highest packing fraction?",
                marks: 7,
                outline: [
                  "Define packing fraction = (atoms per cell * volume of one atom) / volume of unit cell.",
                  "SC: 1 atom per cell, r = a/2, packing fraction = (4/3)*pi*r^3 / a^3 = pi/6 ~ 52%.",
                  "BCC: 2 atoms per cell, 4r = sqrt(3)*a, packing fraction = 2*(4/3)*pi*r^3 / a^3 = sqrt(3)*pi/8 ~ 68%.",
                  "FCC: 4 atoms per cell, 4r = sqrt(2)*a, packing fraction = 4*(4/3)*pi*r^3 / a^3 = pi/(3*sqrt(2)) ~ 74%.",
                  "FCC has the highest packing fraction (tied with HCP at 74%).",
                  "Examples: polonium SC; alpha-Fe, Cr, W are BCC; Al, Cu, Au, Ni are FCC.",
                  "Conclude: higher packing fraction means denser crystal and usually higher ductility.",
                ],
              },
              {
                q: "How many atoms per unit cell are there in a BCC lattice?",
                marks: 2,
              },
              {
                q: "Calculate the packing fraction of a simple cubic lattice.",
                marks: 3,
              },
            ],
          },
          // --- 3.3 ---
          {
            number: "3.3",
            title: "X-ray diffraction and Bragg's law",
            body: [
              "When a beam of X-rays of wavelength lambda strikes a crystal, the X-rays are scattered by the electrons of the atoms in the crystal. Because the wavelength of X-rays (about 0.1 to 10 Angstrom) is comparable to the interatomic spacing in crystals (about 1 Angstrom), the crystal acts as a three-dimensional diffraction grating. W. H. Bragg and W. L. Bragg in 1913 showed that the scattered X-rays reinforce only in certain directions, producing sharp intensity maxima called Bragg peaks. The Braggs derived a simple law connecting the angle of incidence, the interplanar spacing d and the wavelength.",
              "Consider a set of parallel lattice planes with interplanar spacing d. Two parallel X-ray beams incident at angle theta (measured from the plane, not the normal) are reflected from two successive planes. The path difference between the two reflected rays is 2 d sin theta, since the lower beam travels an extra 2 d sin theta to reach and return from the lower plane. Constructive interference, and hence a Bragg peak, occurs when this path difference equals an integer multiple of the wavelength: 2 d sin theta equals n lambda, where n is the order of reflection taking values 1, 2, 3 and so on.",
              "As a worked example, for a crystal with interplanar spacing d equal to 3.0 Angstrom and X-rays of wavelength lambda equal to 1.5 Angstrom, Bragg's law gives sin theta equals n lambda divided by (2 d) equals n times 1.5 divided by 6.0, so sin theta equals 0.25 n. For the first order (n equal to 1), theta equals arcsin 0.25, about 14 degrees 29 minutes; for the second order (n equal to 2), theta equals about 30 degrees; for the third order, about 48 degrees 35 minutes. Bragg's law is the basis of X-ray crystallography, used to determine crystal structures, identify unknown materials and study stress.",
            ],
            bullets: [
              "Bragg's law: 2*d*sin(theta) = n*lambda; theta is the glancing angle, d the interplanar spacing.",
              "Bragg's law is just constructive interference of X-rays reflected from successive crystal planes.",
              "Maximum order n_max = floor(2*d/lambda); always check sin(theta) <= 1 before quoting an angle.",
              "For d = 3.0 A, lambda = 1.5 A: 1st order theta ~ 14.5 deg, 2nd 30 deg, 3rd 48.6 deg.",
              "Basis of X-ray crystallography: structure determination, phase identification, stress measurement.",
            ],
            codeExample: {
              language: "python",
              caption: "Bragg angles for first three orders with d = 3.0 A, lambda = 1.5 A.",
              code:
                `# Bragg's law: angle for various orders
import math
d = 3.0e-10           # metres, interplanar spacing
lam = 1.5e-10         # metres, X-ray wavelength (1.5 A)
for n in (1, 2, 3):
    sin_th = n * lam / (2 * d)
    if sin_th <= 1.0:
        th = math.degrees(math.asin(sin_th))
        print("n=%d  ->  theta = %.2f deg" % (n, th))
    else:
        print("n=%d  ->  no Bragg peak (sin>1)" % n)
# n=1 -> 14.48 deg, n=2 -> 30.00 deg, n=3 -> 48.59 deg`,
            },
            diagram: {
              kind: "pipeline",
              title: "Bragg's law: from X-ray beam to diffraction peak",
              caption:
                "X-rays scattered from successive crystal planes reinforce only at the Bragg angle.",
              stages: [
                { label: "X-ray beam of wavelength lambda", note: "incident on crystal" },
                { label: "Hits parallel planes of atoms", note: "interplanar spacing d" },
                { label: "Path difference 2*d*sin(theta)", note: "between adjacent planes" },
                { label: "Constructive at 2*d*sin(theta) = n*lambda", note: "n = 1, 2, 3 ..." },
                { label: "Detector records intensity peak", note: "scan theta to map all planes" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always check sin(theta) <= 1 before quoting a Bragg angle. If n*lambda > 2*d, that order does not exist - say so explicitly and move to the next order.",
            },
            keyTerms: [
              { term: "Bragg's law", definition: "2*d*sin(theta) = n*lambda; condition for constructive interference of X-rays reflected from crystal planes." },
              { term: "Interplanar spacing", definition: "Distance d between successive parallel planes of atoms in a crystal." },
              { term: "Bragg peak", definition: "Sharp intensity maximum in X-ray diffraction at an angle satisfying Bragg's law." },
            ],
            examQuestions: [
              {
                q: "State and derive Bragg's law of X-ray diffraction. Calculate the angles at which the first three orders of reflection occur for X-rays of wavelength 1.5 Angstrom incident on a crystal with interplanar spacing 3.0 Angstrom.",
                marks: 7,
                outline: [
                  "State Bragg's law: 2*d*sin(theta) = n*lambda, with d the interplanar spacing and n the order.",
                  "Derivation: two parallel X-ray beams at glancing angle theta on successive lattice planes of spacing d.",
                  "Path difference between the two reflected rays = 2*d*sin(theta).",
                  "Constructive interference (Bragg peak) when 2*d*sin(theta) = n*lambda.",
                  "Given d = 3.0 A, lambda = 1.5 A: sin(theta) = n*1.5/(2*3.0) = 0.25*n.",
                  "n = 1: theta = arcsin(0.25) ~ 14.48 deg; n = 2: 30.00 deg; n = 3: 48.59 deg.",
                  "Mention applications: crystal structure determination, phase identification, stress measurement.",
                ],
              },
              {
                q: "Write Bragg's law and identify each symbol.",
                marks: 2,
              },
              {
                q: "X-rays of wavelength 1.0 A are incident on a crystal with d = 2.5 A. What is the maximum order of reflection possible?",
                marks: 3,
              },
            ],
          },
          // --- 3.4 ---
          {
            number: "3.4",
            title: "Band theory of solids",
            body: [
              "The band theory of solids explains why some materials conduct electricity well, others are insulators, and a third class - the semiconductors - lies in between. When N atoms are brought together to form a crystal, the Pauli exclusion principle forces their outermost energy levels to split into N closely spaced levels, which merge into a quasi-continuous band. The highest occupied band at absolute zero is the valence band, separated from the next higher empty (or partly empty) band - the conduction band - by a forbidden energy gap E_g in which no electron can exist.",
              "In conductors (metals) the valence band is either partly filled or it overlaps the conduction band, so electrons can be accelerated by even a tiny electric field; the resistivity of copper is about 1.7 times 10^-8 ohm*m at room temperature. In insulators the valence band is completely full and the conduction band empty, with a large forbidden gap (E_g greater than 3 eV; diamond has E_g equal to 5.5 eV); thermal energy at room temperature is only about 0.026 eV, far too small to excite electrons across the gap. Insulators like glass, mica and diamond have resistivities above 10^10 ohm*m.",
              "Semiconductors have a small forbidden gap: germanium has E_g equal to 0.72 eV and silicon E_g equal to 1.1 eV. At absolute zero they behave as insulators, but at room temperature a few electrons gain enough thermal energy to jump from the valence band to the conduction band, leaving behind an equal number of positively charged holes in the valence band. Both electrons and holes contribute to conduction. Unlike metals, the conductivity of a pure semiconductor increases with temperature because more electron-hole pairs are thermally generated. Doping with impurities, as in the next section, controls the conductivity and turns semiconductors into useful devices.",
            ],
            bullets: [
              "N atoms in a crystal -> N atomic levels broaden into a band; gap = forbidden energy range.",
              "Conductor: no gap; valence band partly filled or overlapping conduction band (Cu, Ag, Al).",
              "Insulator: gap > 3 eV (diamond 5.5 eV); thermal energy at 300 K is only ~0.026 eV, cannot excite.",
              "Semiconductor: gap ~ 1 eV (Si 1.1, Ge 0.72); thermal excitation produces electron-hole pairs.",
              "Conductivity of semiconductor rises with T (more carriers); of metal falls with T (more phonon scattering).",
            ],
            table: {
              caption: "Band-gap classification of solids at room temperature.",
              headers: ["Class", "Band gap Eg", "Resistivity (ohm*m)", "Examples"],
              rows: [
                ["Conductor", "0 (overlap)", "~ 10^-8", "Cu, Ag, Al"],
                ["Semiconductor", "0.7 - 1.1 eV", "~ 10^-3 to 1", "Ge (0.72), Si (1.1)"],
                ["Insulator", "> 3 eV", "> 10^10", "diamond (5.5), glass"],
                ["Superconductor (T < Tc)", "0", "0", "Nb, YBCO"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Band gap separates conductors, semiconductors and insulators",
              caption:
                "The width of the forbidden gap determines the electrical behaviour of a solid.",
              left: {
                heading: "Conductor",
                items: [
                  "No forbidden gap (overlap or half-filled band)",
                  "Valence band = conduction band",
                  "Resistivity ~ 10^-8 ohm*m",
                  "Free electrons at all temperatures",
                  "Examples: copper, silver, aluminum",
                ],
              },
              right: {
                heading: "Semiconductor vs Insulator",
                items: [
                  "Semiconductor: Eg ~ 1 eV (Si 1.1, Ge 0.72)",
                  "Insulator: Eg > 3 eV (diamond 5.5)",
                  "Semiconductor: conductivity rises with temperature",
                  "Insulator: virtually no free carriers at room temperature",
                  "Doping a semiconductor turns it into a device",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Tip",
              body: "Conductor: no gap; semiconductor: small gap (~1 eV); insulator: large gap (>3 eV). This one-line summary covers 80 percent of band-theory short questions.",
            },
            keyTerms: [
              { term: "Valence band", definition: "The highest occupied (or partly occupied) energy band at absolute zero." },
              { term: "Conduction band", definition: "The lowest unoccupied (or partly occupied) band, separated from the valence band by the forbidden gap." },
              { term: "Forbidden energy gap", definition: "Range of energies in which no electron can exist in a perfect crystal; width determines conductor vs semiconductor vs insulator." },
            ],
            examQuestions: [
              {
                q: "Explain the band theory of solids. Distinguish between conductors, semiconductors and insulators on the basis of their energy band diagrams. Why does the conductivity of a semiconductor increase with temperature while that of a metal decreases?",
                marks: 7,
                outline: [
                  "Explain how N atomic levels broaden into a band when N atoms form a crystal.",
                  "Define valence band, conduction band and forbidden energy gap Eg.",
                  "Conductor: valence band partly filled or overlaps conduction band; no gap; electrons free to move.",
                  "Insulator: full valence band, empty conduction band, Eg > 3 eV (diamond Eg = 5.5 eV).",
                  "Semiconductor: small gap (Si Eg = 1.1 eV, Ge Eg = 0.72 eV); thermal excitation creates electron-hole pairs.",
                  "Semiconductor conductivity rises with T (more carriers); metal conductivity falls with T (more phonon scattering).",
                  "Give resistivity values: Cu ~ 1.7e-8 ohm*m, glass > 1e10 ohm*m, Si ~ 2.3e3 ohm*m at 300 K.",
                ],
              },
              {
                q: "What is the band gap of silicon at room temperature?",
                marks: 2,
              },
              {
                q: "Why is diamond an insulator while silicon is a semiconductor?",
                marks: 3,
              },
            ],
          },
          // --- 3.5 ---
          {
            number: "3.5",
            title: "Intrinsic and extrinsic semiconductors, Hall effect",
            body: [
              "An intrinsic semiconductor is a pure crystal with no impurity atoms; at absolute zero its valence band is full and conduction band empty, so it is an insulator. At room temperature thermal excitation generates electron-hole pairs in equal numbers n_e equal to n_h equal to n_i, where n_i is the intrinsic carrier concentration. For silicon at 300 K, n_i is about 1.5 times 10^16 per cubic metre. Both electrons and holes contribute to conduction, but the conductivity is small. To make useful devices, the semiconductor is doped by adding a tiny amount (about 1 atom in 10^7) of impurity from group III or group V.",
              "Doping with a group V element (phosphorus, arsenic, antimony) introduces an extra loosely bound electron that enters the conduction band at room temperature, leaving behind an immobile positive ion; the material becomes an n-type semiconductor with electrons as majority carriers. Doping with a group III element (boron, aluminum, gallium) creates an electron vacancy or acceptor level that accepts a valence electron, leaving a mobile hole; the material becomes a p-type semiconductor with holes as majority carriers. The product n_e times n_h still equals n_i squared in equilibrium (mass-action law), but in n-type n_e is much larger than n_h and vice versa.",
              "The Hall effect, discovered by Edwin Hall in 1879, distinguishes the two types. When a current I flows along a thin slab of thickness t in the x direction and a magnetic field B is applied along the z direction, a transverse electric field appears along the y direction. The Hall voltage V_H equals (R_H times I times B) divided by t, where the Hall coefficient R_H equals 1 divided by (n times q) for a single-carrier material, n being the carrier density and q the electronic charge (positive for holes, negative for electrons). The sign of the Hall voltage therefore reveals whether the semiconductor is n-type or p-type.",
            ],
            bullets: [
              "Intrinsic semiconductor: pure, n_e = n_h = n_i (Si at 300 K: n_i ~ 1.5e16 /m^3).",
              "n-type: doped with group V (P, As, Sb); extra electrons; majority carriers = electrons.",
              "p-type: doped with group III (B, Al, Ga); extra holes; majority carriers = holes.",
              "Mass-action law: n_e * n_h = n_i^2 in equilibrium; in n-type n_e >> n_h.",
              "Hall effect: V_H = (R_H*I*B)/t, R_H = 1/(n*q); sign of V_H reveals carrier type.",
            ],
            table: {
              caption: "Intrinsic, n-type and p-type semiconductors compared.",
              headers: ["Type", "Dopant", "Majority carrier", "Hall coefficient sign"],
              rows: [
                ["Intrinsic", "none", "n_e = n_h = n_i", "weak, depends on mobility"],
                ["n-type", "group V (P, As, Sb)", "electrons", "negative"],
                ["p-type", "group III (B, Al, Ga)", "holes", "positive"],
                ["Compensated", "equal donors + acceptors", "n_e ~ n_h", "near zero"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Doping controls carrier type and density",
              caption:
                "Doping a pure semiconductor with donor (group V) or acceptor (group III) impurities sets its conduction type and Hall coefficient sign.",
              axes: { x: "Doping concentration (low -> high)", y: "Dopant type (donor vs acceptor)" },
              quadrants: [
                { label: "Lightly doped n-type", note: "P, As, Sb added; few extra electrons" },
                { label: "Heavily doped n-type", note: "degenerate; behaves like a metal" },
                { label: "Lightly doped p-type", note: "B, Al, Ga added; few extra holes" },
                { label: "Heavily doped p-type", note: "degenerate; used in tunnel diodes" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Sign of the Hall voltage tells the type: negative -> n-type, positive -> p-type. Magnitude gives carrier density via R_H = 1/(n*q).",
            },
            keyTerms: [
              { term: "Intrinsic semiconductor", definition: "A pure semiconductor with equal electron and hole concentrations n_e = n_h = n_i." },
              { term: "Extrinsic semiconductor", definition: "A doped semiconductor; n-type has electron majority, p-type has hole majority." },
              { term: "Hall effect", definition: "Appearance of a transverse voltage across a current-carrying conductor in a magnetic field; sign reveals carrier type." },
            ],
            examQuestions: [
              {
                q: "Distinguish between intrinsic and extrinsic semiconductors. Explain n-type and p-type doping with examples. Describe the Hall effect and how it is used to determine the type of a semiconductor.",
                marks: 7,
                outline: [
                  "Define intrinsic semiconductor: pure crystal, n_e = n_h = n_i, conductivity small.",
                  "Define extrinsic semiconductor: doped with impurity; majority and minority carriers.",
                  "n-type: doped with group V (P, As, Sb); extra electrons; donors.",
                  "p-type: doped with group III (B, Al, Ga); extra holes; acceptors.",
                  "Mass-action law: n_e * n_h = n_i^2 at equilibrium.",
                  "Hall effect: current I in x, magnetic field B in z; Hall voltage V_H = (R_H*I*B)/t with R_H = 1/(n*q).",
                  "Sign of Hall voltage: negative for n-type, positive for p-type; magnitude gives carrier density.",
                ],
              },
              {
                q: "What is the Hall coefficient of an n-type semiconductor with electron density n?",
                marks: 2,
              },
              {
                q: "An n-type semiconductor has electron density 1e22 per m^3. Find its Hall coefficient.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT IV - LASERS
    // =================================================================
    {
      number: 4,
      roman: "IV",
      title: "Lasers",
      summary:
        "Unit IV develops lasers. Spontaneous versus stimulated emission introduces Einstein coefficients; population inversion and pumping schemes set the conditions for laser action; the ruby laser is the prototypical three-level pulsed laser; the He-Ne gas laser is the workhorse four-level CW laser; and the semiconductor diode laser dominates modern applications.",
      chapter: {
        number: "04",
        title: "Lasers",
        intro:
          "Unit IV develops lasers from the photon picture of emission. Spontaneous and stimulated emission introduce Einstein coefficients and their equilibrium relations; population inversion and pumping schemes (optical, electrical, injection) set the conditions for laser action; the ruby laser is the prototypical three-level pulsed solid-state laser; the He-Ne gas laser is the four-level CW laser of teaching and alignment work; and the semiconductor diode laser carries modern telecom and consumer optics.",
        sections: [
          // --- 4.1 ---
          {
            number: "4.1",
            title: "Spontaneous vs stimulated emission, Einstein coefficients",
            body: [
              "An atom in an excited state can return to a lower energy state by emitting a photon. Two distinct processes are possible. In spontaneous emission the atom decays on its own after a mean lifetime of about 10^-8 second, releasing a photon whose direction, phase and polarization are random. Such photons are mutually incoherent, and ordinary light sources like the sun, a filament lamp or a mercury tube produce light mainly by spontaneous emission. The probability per unit time of spontaneous transition from a level E2 to E1 is described by the Einstein A21 coefficient.",
              "In stimulated emission, first postulated by Einstein in 1917, an incoming photon of energy equal to E2 minus E1 triggers the excited atom to drop to the lower level and release a second photon. The two photons that emerge have exactly the same frequency, phase, direction of propagation and polarization - they are indistinguishable. This is the process that amplifies light in a laser, where a single triggering photon can be amplified into a coherent beam of billions of identical photons. The probability per unit time of stimulated transition is given by the Einstein B21 coefficient times the energy density rho of the radiation field at the transition frequency.",
              "Einstein showed that for the radiation field to be in thermal equilibrium with the atoms at temperature T, three relations must hold among the coefficients: A21 equals B21 times (8 pi h f cubed divided by c cubed), and B21 equals B12. The first relation fixes the ratio of spontaneous to stimulated emission at any frequency, and shows that spontaneous emission dominates at optical frequencies (where h f is large) while stimulated emission dominates at microwave frequencies. The equality B21 equals B12 means that upward and downward stimulated transitions are equally probable per photon present. These relations are the theoretical foundation of the laser.",
            ],
            bullets: [
              "Spontaneous emission: atom decays on its own after ~ 10^-8 s; photon direction, phase, polarization random.",
              "Stimulated emission: incoming photon triggers excited atom to emit an identical photon (same phase, direction).",
              "Einstein coefficients: A21 (spontaneous), B21 (stimulated emission), B12 (absorption).",
              "Equilibrium relations: B12 = B21; A21/B21 = 8*pi*h*f^3/c^3.",
              "At optical frequencies spontaneous dominates; at microwave, stimulated - basis of maser and laser.",
            ],
            table: {
              caption: "Einstein coefficients and their equilibrium relations.",
              headers: ["Coefficient", "Process", "Rate", "Equilibrium relation"],
              rows: [
                ["B12", "Stimulated absorption", "B12 * rho(f) * N1", "B12 = B21"],
                ["B21", "Stimulated emission", "B21 * rho(f) * N2", "B12 = B21"],
                ["A21", "Spontaneous emission", "A21 * N2", "A21/B21 = 8*pi*h*f^3/c^3"],
                ["Net stimulated gain", "N2 > N1 needed", "(N2 - N1) * B21 * rho", "requires population inversion"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Spontaneous vs stimulated emission",
              caption:
                "Two ways an excited atom can release a photon.",
              left: {
                heading: "Spontaneous",
                items: [
                  "Atom decays on its own after lifetime ~ 10^-8 s",
                  "Random direction, phase, polarization",
                  "Incoherent light - lamp, LED",
                  "Einstein A21 coefficient governs rate",
                  "Cannot be amplified into a laser beam",
                ],
              },
              right: {
                heading: "Stimulated",
                items: [
                  "Triggered by an incoming photon of same energy",
                  "New photon identical in phase, direction, polarization",
                  "Coherent, monochromatic - laser light",
                  "Einstein B21 coefficient governs rate",
                  "Requires population inversion to dominate",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Tip",
              body: "In stimulated emission the two emerging photons are identical in phase, direction and polarization - this is what makes a laser beam coherent. Spontaneous photons share none of these properties.",
            },
            keyTerms: [
              { term: "Spontaneous emission", definition: "Decay of an excited atom on its own, releasing a photon of random direction and phase." },
              { term: "Stimulated emission", definition: "An incoming photon triggers an excited atom to emit an identical photon (same phase, direction, polarization)." },
              { term: "Einstein coefficients", definition: "A21, B21 and B12 quantifying the rates of spontaneous, stimulated-emission and absorption transitions." },
            ],
            examQuestions: [
              {
                q: "Distinguish between spontaneous and stimulated emission of radiation. State the Einstein coefficients A21, B21 and B12 and derive the relations between them.",
                marks: 7,
                outline: [
                  "Define spontaneous emission: atom decays on its own after ~ 10^-8 s; photon direction, phase, polarization random.",
                  "Define stimulated emission: incoming photon of energy E2-E1 triggers excited atom to drop, emitting a second identical photon.",
                  "Define Einstein coefficients A21 (spontaneous), B21 (stimulated emission), B12 (absorption).",
                  "Write rate equation for dN2/dt including A21, B21 and B12 terms.",
                  "Set upward and downward rates equal in thermal equilibrium.",
                  "Use Boltzmann population N2/N1 = exp(-(E2-E1)/kT) and Planck's law to derive B12 = B21 and A21/B21 = 8*pi*h*f^3/c^3.",
                  "Note spontaneous emission dominates at optical frequencies; stimulated emission at microwave (basis of maser and laser).",
                ],
              },
              {
                q: "What is the relation between the Einstein coefficients B12 and B21?",
                marks: 2,
              },
              {
                q: "An excited state has a lifetime of 10^-8 s. Estimate its natural linewidth in frequency.",
                marks: 3,
              },
            ],
          },
          // --- 4.2 ---
          {
            number: "4.2",
            title: "Population inversion and pumping",
            body: [
              "For stimulated emission to dominate over absorption, there must be more atoms in the upper energy level than in the lower one. This non-equilibrium situation, called population inversion, cannot exist naturally because in thermal equilibrium the populations follow the Boltzmann distribution N2 divided by N1 equals exp of (negative (E2 minus E1) divided by k T), which makes N2 less than N1 at any finite temperature. Population inversion is achieved by an external energy source called a pump that continuously lifts atoms from the ground state to a higher excited state; the inverted state is then maintained by appropriate level lifetimes.",
              "Three pumping schemes are common. In optical pumping, an intense flash lamp (as in the ruby laser) or another laser excites the active atoms to a broad pump band, which then decays rapidly to the metastable upper laser level. In electrical pumping, an electric discharge accelerates free electrons that collide with the active atoms and excite them (as in the He-Ne and CO2 lasers). In chemical or electron-beam pumping, energy is supplied by a chemical reaction or a high-energy electron beam, used in special high-power lasers. Each scheme is chosen to match the active medium.",
              "A three-level laser uses a ground state, a pump band and a metastable upper laser level; more than half of the atoms must be pumped out of the ground state to achieve inversion, which is demanding (ruby is an example). A four-level laser adds a separate lower laser level above the ground state; since the lower laser level is nearly empty at room temperature, even a small population in the upper level gives a large inversion, so four-level lasers (like He-Ne and Nd:YAG) are far more efficient and operate continuously at lower pump power than three-level lasers.",
            ],
            bullets: [
              "Population inversion: N2 > N1; cannot occur in thermal equilibrium (Boltzmann gives N2 < N1).",
              "Pumping methods: optical (flash lamp, laser), electrical discharge, injection current, chemical/e-beam.",
              "Three-level laser: ground + pump band + metastable; > 50% depletion of ground needed (ruby).",
              "Four-level laser: lower laser level above ground state; nearly empty; efficient (He-Ne, Nd:YAG).",
              "Laser action requires both population inversion and an optical cavity for feedback.",
            ],
            table: {
              caption: "Pumping schemes for common laser types.",
              headers: ["Pumping method", "Energy source", "Laser example", "Mode"],
              rows: [
                ["Optical", "flash lamp or another laser", "Ruby, Nd:YAG", "pulsed or CW"],
                ["Electrical discharge", "DC or RF discharge", "He-Ne, CO2, Ar-ion", "mostly CW"],
                ["Injection current", "forward-biased p-n junction", "semiconductor diode laser", "CW or modulated"],
                ["Chemical / e-beam", "exothermic reaction or e-beam", "HF laser, excimer", "pulsed, high power"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Population inversion in a three-level laser",
              caption:
                "More atoms in the upper state than the lower - the prerequisite for laser action.",
              tiers: [
                { label: "Excited state E3 (short-lived)", note: "pump band, decays fast to E2" },
                { label: "Metastable state E2 (~ 10^-3 s)", note: "atoms accumulate here - upper laser level" },
                { label: "Ground state E1 (populated)", note: "more atoms in E2 than E1 = inversion" },
                { label: "Pumping source (optical/electrical)", note: "lifts atoms from E1 to E3" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Four-level lasers (He-Ne, Nd:YAG) are far more efficient than three-level (ruby) because the lower laser level is nearly empty in equilibrium. Quote this whenever asked about efficiency.",
            },
            keyTerms: [
              { term: "Population inversion", definition: "A non-equilibrium situation with more atoms in the upper energy level than in the lower one." },
              { term: "Pumping", definition: "Supplying energy from an external source (optical, electrical, chemical) to maintain population inversion." },
              { term: "Optical cavity", definition: "Two mirrors facing each other that reflect photons back and forth through the active medium, amplifying the beam." },
            ],
            examQuestions: [
              {
                q: "What is population inversion? Explain why it is necessary for laser action. Describe the three-level and four-level pumping schemes with examples.",
                marks: 7,
                outline: [
                  "Define population inversion: N2 > N1, a non-equilibrium situation.",
                  "In thermal equilibrium N2/N1 = exp(-(E2-E1)/kT) << 1, so inversion requires external pumping.",
                  "Without inversion, absorption dominates over stimulated emission and no net amplification occurs.",
                  "Three-level laser: ground E1, pump band E3, upper laser level E2 (metastable); > 50% of atoms must be pumped out of E1. Example: ruby.",
                  "Four-level laser: ground E0, pump band E3, upper laser level E2, lower laser level E1 above E0; lower level nearly empty. Examples: He-Ne, Nd:YAG.",
                  "Pumping methods: optical (flash lamp), electrical discharge, injection current, chemical/e-beam.",
                  "Four-level lasers are far more efficient and operate continuously at lower pump power than three-level lasers.",
                ],
              },
              {
                q: "Why is population inversion called a non-equilibrium state?",
                marks: 2,
              },
              {
                q: "Name two pumping schemes used in lasers with one example each.",
                marks: 3,
              },
            ],
          },
          // --- 4.3 ---
          {
            number: "4.3",
            title: "Ruby laser construction and working",
            body: [
              "The ruby laser, constructed by Theodore Maiman in 1960, was the first working laser. The active medium is a synthetic ruby rod, a single crystal of aluminum oxide (Al2O3, sapphire) doped with about 0.05 percent by weight of chromium ions (Cr3+), which give the ruby its pink-red colour. The rod is typically 5 to 10 cm long and 0.5 to 1 cm in diameter, with its ends polished flat and parallel. One end is coated with a fully reflecting silver film and the other with a partially reflecting film (about 95 percent reflectivity), forming the optical cavity.",
              "The ruby rod is surrounded by a helical xenon flash lamp that supplies optical pumping. When the lamp fires, chromium ions in the ground state absorb photons in the green (around 550 nm) and blue (around 400 nm) bands and jump to the broad pump levels. From there they undergo a very fast non-radiative transition (in about 10^-4 second) to the metastable level E2, which has a long lifetime of about 3 milliseconds. Because ions accumulate in E2 while the ground state is being emptied by pumping, a population inversion builds up between E2 and the ground state.",
              "An ion in E2 eventually emits a 694.3 nm red photon; if this photon passes near another excited ion, it stimulates emission of a second identical photon, and the cascade builds rapidly. The optical cavity reflects photons back and forth along the rod axis, amplifying the beam each pass, and the partially silvered end transmits about 5 percent of the energy as the output pulse. The ruby laser operates in pulsed mode with pulses of about 1 millisecond, peak power of the order of kilowatts to megawatts in Q-switched operation, and is used in tattoo removal, ranging and holography.",
            ],
            bullets: [
              "Active medium: synthetic ruby (Al2O3 doped with ~0.05% Cr3+), 5-10 cm long, ends silvered.",
              "Optical pumping: xenon flash lamp excites Cr3+ to broad pump band at ~550 nm green and ~400 nm blue.",
              "Rapid non-radiative decay to metastable E2 (lifetime ~ 3 ms) -> population inversion.",
              "Output: 694.3 nm red pulsed beam; cavity is one 100% + one 95% reflective mirror.",
              "Three-level: needs > 50% ground-state depletion; pulsed operation, kW-MW peak (Q-switched).",
            ],
            codeExample: {
              language: "python",
              caption: "Photon energy and photons per joule for the ruby laser output.",
              code:
                `# Ruby laser photon energy and photon count per joule
h = 6.63e-34          # J*s
c = 3.0e8             # m/s
e = 1.602e-19         # C
lambda_ruby = 694.3e-9   # metres, ruby laser wavelength
E_photon = h * c / lambda_ruby
print("Photon energy = %.3e J = %.3f eV"
      % (E_photon, E_photon / e))
# Output 1 J pulses need this many photons:
n_photons = 1.0 / E_photon
print("Photons per 1 J pulse = %.2e" % n_photons)
# ~ 3.49e18 photons`,
            },
            diagram: {
              kind: "flow",
              title: "Ruby laser: from pumping to output",
              caption:
                "Optical pumping of chromium ions in a ruby rod produces 694.3 nm red laser light.",
              steps: [
                { label: "Xenon flash lamp pumps Cr3+ ions", note: "broadband visible, ~550 nm green" },
                { label: "Ions jump to E3 pump band", note: "fast non-radiative decay to E2" },
                { label: "Metastable E2 accumulates ions", note: "lifetime ~ 3 ms, inversion built" },
                { label: "Stimulated emission at 694.3 nm", note: "photon triggers identical photon" },
                { label: "Output: red pulsed laser beam", note: "100% + 95% reflective mirrors" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always state 'three-level' for ruby and explain that > 50% depletion of the ground state is needed - that is why ruby is pulsed. Output is 694.3 nm red.",
            },
            keyTerms: [
              { term: "Ruby laser", definition: "A three-level pulsed solid-state laser using a Cr3+-doped Al2O3 rod; outputs 694.3 nm red light." },
              { term: "Metastable state", definition: "An excited energy level with a long lifetime (~ms) where atoms can accumulate for population inversion." },
              { term: "Optical pumping", definition: "Excitation of active atoms by absorbing light from an external source such as a flash lamp." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of a ruby laser. Explain why it operates only in pulsed mode.",
                marks: 7,
                outline: [
                  "Construction: synthetic ruby rod (Al2O3 doped with ~0.05% Cr3+), length 5-10 cm, diameter 0.5-1 cm.",
                  "Ends polished flat and parallel; one fully silvered (~100%), one partially silvered (~95%) - the optical cavity.",
                  "Surrounded by a helical xenon flash lamp for optical pumping.",
                  "Working: flash fires, Cr3+ absorbs green (~550 nm) and blue (~400 nm) photons, jumps to pump band E3.",
                  "Rapid non-radiative decay to metastable E2 (lifetime ~ 3 ms); population inversion E2 > E1 builds up.",
                  "Stimulated emission at 694.3 nm; cavity amplifies beam; 5% escapes as pulse.",
                  "Three-level scheme: > 50% ground-state depletion needed; pulsed, peak power kW-MW (Q-switched).",
                ],
              },
              {
                q: "What is the wavelength of the ruby laser output?",
                marks: 2,
              },
              {
                q: "Why is the ruby laser called a three-level laser?",
                marks: 3,
              },
            ],
          },
          // --- 4.4 ---
          {
            number: "4.4",
            title: "He-Ne laser construction and working",
            body: [
              "The helium-neon (He-Ne) gas laser, demonstrated by Ali Javan and co-workers in 1960, was the first continuous-wave (CW) laser and remains the most common visible laser in teaching and alignment work. The active medium is a mixture of helium and neon gases in a ratio of about 10 to 1, at a total pressure of about 1 to 2 torr, enclosed in a narrow quartz or glass discharge tube about 30 cm long and 1 to 2 mm in bore diameter. An electric discharge through the gas mixture at about 2 kV provides the pumping energy.",
              "The discharge accelerates free electrons, which collide with helium atoms and excite them to long-lived metastable levels at 20.61 eV and 19.82 eV, close in energy to neon levels at 20.66 eV (Ne 5s) and 19.78 eV (Ne 4s). When an excited helium atom collides with a neon atom, it transfers its energy, raising the neon atom to the upper laser level. Because the upper neon levels are populated by collision transfer while the lower levels are short-lived and decay quickly to a metastable state, a steady population inversion is maintained between the neon 5s and 4s levels and lower neon levels.",
              "The strongest transition is the 632.8 nm red line (5s to 3p in neon), giving the familiar red beam of a He-Ne pointer; infrared transitions at 1.15 micrometre and 3.39 micrometre also occur. The cavity is formed by two concave mirrors, one 100 percent reflecting and the other about 98 percent reflecting; the Brewster windows at the tube ends allow only the polarized component to oscillate without reflection loss. He-Ne lasers deliver continuous output power of about 1 to 5 mW with excellent coherence and beam quality, used in interferometry, barcode scanning, alignment of optical equipment and in holography.",
            ],
            bullets: [
              "Active medium: He-Ne gas mixture (10:1 at 1-2 torr) in a 30 cm discharge tube.",
              "Pumping: ~2 kV DC discharge excites He metastable levels at 20.61 and 19.82 eV.",
              "Resonant collision transfer populates neon 5s and 4s upper laser levels; lower levels decay fast.",
              "Output: 632.8 nm red CW beam, 1-5 mW; also IR lines at 1.15 and 3.39 um.",
              "Four-level: lower level above ground; efficient, CW; used in interferometry, barcode scanning, holography.",
            ],
            table: {
              caption: "He-Ne laser characteristics for the 632.8 nm red line.",
              headers: ["Parameter", "Symbol", "Typical value"],
              rows: [
                ["Wavelength", "lambda", "632.8 nm (red)"],
                ["Output power", "P", "1 - 5 mW (CW)"],
                ["Beam divergence", "theta", "~ 1 mrad"],
                ["Cavity length", "L", "20 - 30 cm"],
                ["He:Ne pressure ratio", "-", "10:1 at 1-2 torr"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "He-Ne gas laser anatomy",
              caption:
                "A discharge tube of He-Ne mixture with concave mirrors produces 632.8 nm red light.",
              layers: [
                { label: "Output mirror (~98% reflective)", note: "Brewster window, transmits red beam" },
                { label: "He-Ne gas mixture (10:1)", note: "low-pressure discharge at ~ 2 kV" },
                { label: "Discharge tube (glass, ~30 cm)", note: "He metastable collides with Ne" },
                { label: "100% reflective concave mirror", note: "defines the optical cavity" },
                { label: "Output: 632.8 nm continuous red beam", note: "power ~ 1-5 mW" },
              ],
            },
            callout: {
              type: "tip",
              title: "Tip",
              body: "Helium is the pumping gas; neon is the lasing gas. Helium's metastable levels at 20.61 and 19.82 eV match neon's 5s and 4s levels - resonant collision transfer does the pumping.",
            },
            keyTerms: [
              { term: "He-Ne laser", definition: "A four-level CW gas laser using a He-Ne mixture; outputs 632.8 nm red." },
              { term: "Metastable level (He)", definition: "Long-lived excited helium levels at 20.61 and 19.82 eV that resonantly transfer energy to neon." },
              { term: "Brewster window", definition: "Tilted end-windows of a gas laser tube that allow only one polarization to oscillate without reflection loss." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of a He-Ne laser. Why is it called a four-level laser? Give two applications.",
                marks: 7,
                outline: [
                  "Construction: narrow quartz/glass discharge tube (~30 cm long, 1-2 mm bore) filled with He-Ne mixture (10:1) at 1-2 torr.",
                  "Two concave mirrors at the ends form the cavity (one 100%, one ~98% reflecting); Brewster windows for polarization.",
                  "Discharge at ~2 kV provides electrical pumping.",
                  "Working: discharge accelerates electrons; electrons excite He atoms to metastable levels at 20.61 eV and 19.82 eV.",
                  "Helium transfers energy to neon by collision; neon excited to 5s and 4s levels; lower levels 3p and 2p decay rapidly.",
                  "Population inversion between neon 5s -> 3p (632.8 nm red), also IR at 1.15 and 3.39 um.",
                  "Four-level: lower laser level above ground and nearly empty; CW output 1-5 mW. Applications: interferometry, barcode scanning, holography, alignment.",
                ],
              },
              {
                q: "Why are Brewster windows used in a He-Ne laser?",
                marks: 2,
              },
              {
                q: "Name the strongest visible transition of the He-Ne laser and give its wavelength.",
                marks: 3,
              },
            ],
          },
          // --- 4.5 ---
          {
            number: "4.5",
            title: "Semiconductor laser and applications",
            body: [
              "The semiconductor (or diode, or injection) laser is a small, rugged and efficient laser in which a p-n junction of a direct-bandgap semiconductor provides both the active medium and the pumping mechanism. When a forward current is applied, electrons from the n-side recombine with holes from the p-side in the depletion region, releasing photons by stimulated emission. The first semiconductor laser, made of gallium arsenide (GaAs) and demonstrated in 1962, emitted infrared light at about 840 nm; today's diode lasers cover a wide range from blue (GaN at 405 nm) through red (GaInP at 650 nm) to infrared (GaAs at 850 nm and InGaAsP at 1310 and 1550 nm).",
              "The construction consists of a thin active layer (about 0.1 micrometre thick) sandwiched between p-type and n-type cladding layers of wider bandgap, all grown on a substrate by epitaxy. The two cleaved ends of the chip (perpendicular to the junction) act as the mirrors of the optical cavity, with reflectivity about 30 percent due to the refractive-index step at the air interface. Because the active layer is thinner than the wavelength, the laser operates as a waveguide and the beam emerges as an elliptical spot. Population inversion is achieved by the injected carrier density exceeding a threshold current, typically tens of milliamperes.",
              "Diode lasers are the workhorses of modern technology: they pump fibre amplifiers in long-haul telecom, read and write CDs, DVDs and Blu-ray discs, scan barcodes, drive laser printers, and form the heart of fibre-optic communication links (Unit V) by directly modulating optical carriers at gigabit-per-second rates. High-power diode laser arrays are used to pump solid-state lasers like Nd:YAG. Their advantages - tiny size, wall-plug efficiency above 30 percent, direct current modulation at gigahertz frequencies, low cost in mass production - make them the most widely manufactured laser type, with billions of units shipped each year.",
            ],
            bullets: [
              "Active medium: thin (~0.1 um) layer of direct-bandgap semiconductor (GaAs, InGaAsP, GaN).",
              "Cavity: cleaved chip ends (~30% reflectivity) act as mirrors; forward bias injects carriers.",
              "Recombination of electrons and holes in the active layer gives stimulated emission.",
              "Wavelengths: GaN 405 nm, GaInP 650 nm, GaAs 850 nm, InGaAsP 1310/1550 nm.",
              "Advantages: tiny size, efficiency > 30%, direct GHz modulation, low cost; used in fibre comm, CD/DVD/Blu-ray.",
            ],
            table: {
              caption: "Common semiconductor lasers by material and wavelength.",
              headers: ["Material", "Wavelength", "Colour / IR", "Application"],
              rows: [
                ["GaN", "405 nm", "violet", "Blu-ray, fluorescence excitation"],
                ["GaInP", "650 nm", "red", "DVD, laser pointers"],
                ["GaAs", "850 nm", "near IR", "short-link fibre, CD"],
                ["InGaAsP", "1310 / 1550 nm", "IR", "telecom fibre (low-loss windows)"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Laser applications by sector",
              caption:
                "Where lasers of different types find industrial use.",
              start: "A laser beam (coherent, monochromatic, directional)",
              branches: [
                { label: "Communication", outcome: "fibre-optic carrier at 1310/1550 nm; Gbps data rates", good: true },
                { label: "Medicine", outcome: "eye surgery (excimer 193 nm), tumor ablation (Nd:YAG)", good: true },
                { label: "Manufacturing", outcome: "cutting, welding with CO2 laser 10.6 um, ~ kW power", good: true },
                { label: "Defence and ranging", outcome: "LiDAR, target designation, missile dazzlers", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Tip",
              body: "InGaAsP at 1310 and 1550 nm matches the low-loss windows of silica fibre - this is why semiconductor lasers are the natural source for fibre-optic communication.",
            },
            keyTerms: [
              { term: "Semiconductor laser", definition: "A laser in which a forward-biased p-n junction of direct-bandgap material provides the active medium." },
              { term: "Direct bandgap", definition: "Band structure in which the conduction-band minimum and valence-band maximum occur at the same k; allows efficient photon emission." },
              { term: "Threshold current", definition: "Minimum injected current density needed to achieve population inversion and start lasing in a diode laser." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of a semiconductor (diode) laser. List four advantages and four applications of semiconductor lasers.",
                marks: 7,
                outline: [
                  "Construction: thin active layer (~0.1 um) of direct-bandgap semiconductor (GaAs, InGaAsP, GaN) between p-type and n-type cladding layers of wider bandgap, on a substrate.",
                  "Cleaved ends of the chip (perpendicular to the junction) act as mirrors (~30% reflectivity) - the optical cavity.",
                  "Working: forward bias injects electrons (n side) and holes (p side) into the active layer where they recombine and emit photons by stimulated emission.",
                  "Population inversion is achieved when the injected carrier density exceeds a threshold current.",
                  "Output wavelengths: GaN 405 nm, GaInP 650 nm, GaAs 850 nm, InGaAsP 1310/1550 nm.",
                  "Advantages: tiny size, wall-plug efficiency > 30%, direct current modulation at GHz, low cost in mass production.",
                  "Applications: fibre-optic comm, CD/DVD/Blu-ray, laser printers, barcode scanners, pumping solid-state lasers.",
                ],
              },
              {
                q: "Name two materials used for semiconductor lasers and the wavelength each emits.",
                marks: 2,
              },
              {
                q: "Why does a semiconductor laser need a threshold current?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT V - FIBRE OPTICS AND ELECTROMAGNETISM
    // =================================================================
    {
      number: 5,
      roman: "V",
      title: "Fibre Optics and Electromagnetism",
      summary:
        "Unit V closes with fibre optics and electromagnetism. The optical fibre guides light by total internal reflection; the acceptance angle and numerical aperture define its light-gathering ability; types of fibre and attenuation mechanisms set performance; a fibre-optic communication system ties it together; and Maxwell's equations explain electromagnetic waves.",
      chapter: {
        number: "05",
        title: "Fibre Optics and Electromagnetism",
        intro:
          "Unit V closes the syllabus with fibre optics and the theory of electromagnetic waves. The optical fibre guides light by total internal reflection between core and cladding; the acceptance angle and numerical aperture quantify its light-gathering ability; types of fibre and attenuation mechanisms set link performance; a fibre-optic communication system ties transmitter, channel and receiver together; and Maxwell's four equations predict EM waves travelling at the speed of light.",
        sections: [
          // --- 5.1 ---
          {
            number: "5.1",
            title: "Optical fibre structure and total internal reflection",
            body: [
              "An optical fibre is a thin, flexible thread of transparent dielectric (usually silica glass, sometimes plastic) that guides light from one end to the other by the mechanism of total internal reflection. A typical fibre consists of three coaxial layers. The innermost core, of diameter 8 to 50 micrometres, has refractive index n1. Surrounding it is the cladding, of diameter about 125 micrometres, with a slightly lower refractive index n2. The outermost layer, of diameter about 250 micrometres, is a plastic buffer and jacket that protects the glass from mechanical damage and moisture. The indices satisfy n1 greater than n2.",
              "Light propagation in the fibre relies on total internal reflection (TIR), the phenomenon that occurs when light travels from an optically denser to an optically rarer medium (n1 to n2). When the angle of incidence phi at the core-cladding interface exceeds a critical angle phi_c, defined by sin phi_c equals n2 divided by n1, the light is totally reflected back into the core with no transmission into the cladding. The ray then bounces along the fibre by repeated TIR at the same angle, guided over kilometres with very small loss, provided the fibre is bent gently enough that the local angle still exceeds phi_c.",
              "For a typical silica fibre with n1 equal to 1.480 and n2 equal to 1.465, the critical angle is arcsin of (1.465 divided by 1.480), about 81.9 degrees measured from the normal to the interface, or about 8.1 degrees from the fibre axis. This small acceptance cone is one reason why launching light into a single-mode fibre requires careful alignment. The cladding must be thick enough (a few wavelengths) for the evanescent field in the cladding to decay to a negligible value; otherwise power leaks out. TIR was first described by Kepler in the 17th century; fibre-optic communication is its 20th-century application.",
            ],
            bullets: [
              "Fibre layers: core (8-50 um, n1) + cladding (125 um, n2 < n1) + buffer (250 um) + jacket (900 um).",
              "Guidance by total internal reflection (TIR) at the core-cladding interface.",
              "Critical angle: sin(phi_c) = n2/n1; TIR requires incidence angle > phi_c.",
              "For n1 = 1.480, n2 = 1.465: phi_c = 81.9 deg from normal (~8.1 deg from axis).",
              "Cladding must be a few wavelengths thick to contain the evanescent field.",
            ],
            table: {
              caption: "Layers of a typical silica optical fibre.",
              headers: ["Layer", "Diameter", "Refractive index", "Function"],
              rows: [
                ["Core", "8 - 50 um", "n1 ~ 1.480", "carries the optical signal"],
                ["Cladding", "125 um", "n2 ~ 1.465", "TIR confinement"],
                ["Buffer coating", "250 um", "n/a (plastic)", "mechanical protection"],
                ["Jacket", "900 um or larger", "n/a (plastic)", "colour coding, handling"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Optical fibre layered structure",
              caption:
                "A glass fibre guides light by total internal reflection between core and cladding.",
              layers: [
                { label: "Plastic jacket (outer coating)", note: "mechanical protection, colour-coded" },
                { label: "Buffer coating (~250 um)", note: "shields from microbending losses" },
                { label: "Cladding (lower refractive index n2)", note: "TIR interface, ~125 um diameter" },
                { label: "Core (higher refractive index n1)", note: "8-50 um, carries the signal" },
                { label: "Light ray guided by TIR", note: "core-cladding angle > critical angle" },
              ],
            },
            callout: {
              type: "tip",
              title: "Tip",
              body: "The condition n1 > n2 is the single fact that makes TIR possible. Without it, light would simply refract out of the core and no guiding would occur.",
            },
            keyTerms: [
              { term: "Optical fibre", definition: "A thin thread of transparent dielectric that guides light by total internal reflection." },
              { term: "Total internal reflection", definition: "Complete reflection of light at an interface when the angle of incidence exceeds the critical angle." },
              { term: "Critical angle", definition: "phi_c defined by sin(phi_c) = n2/n1; the smallest angle of incidence (from the denser medium) for which TIR occurs." },
            ],
            examQuestions: [
              {
                q: "Describe the structure of an optical fibre. Explain how light is guided through it by total internal reflection. Define the critical angle.",
                marks: 7,
                outline: [
                  "Structure: three coaxial layers - core (8-50 um, index n1), cladding (125 um, index n2 < n1), buffer/jacket (250-900 um, plastic).",
                  "Materials: high-purity silica glass doped with GeO2 (core) and F or B2O3 (cladding) to set indices.",
                  "Light guidance: a ray launched into the core at a shallow angle bounces along by total internal reflection at the core-cladding interface.",
                  "Critical angle phi_c (from the normal): sin(phi_c) = n2/n1.",
                  "For TIR: angle of incidence at the interface phi > phi_c.",
                  "Worked: n1 = 1.480, n2 = 1.465 -> phi_c = arcsin(1.465/1.480) = 81.9 deg from the normal (~8.1 deg from the axis).",
                  "Mention: n1 > n2 is essential; cladding thickness must exceed a few wavelengths to contain evanescent field.",
                ],
              },
              {
                q: "What is the condition for total internal reflection at the core-cladding interface of an optical fibre?",
                marks: 2,
              },
              {
                q: "The refractive indices of the core and cladding of a fibre are 1.50 and 1.48. Find the critical angle.",
                marks: 3,
              },
            ],
          },
          // --- 5.2 ---
          {
            number: "5.2",
            title: "Acceptance angle and numerical aperture",
            body: [
              "Not every ray that strikes the fibre end face can be guided inside; only those that, after refraction at the entry face, hit the core-cladding interface at an angle exceeding the critical angle will undergo total internal reflection and propagate. The largest angle of incidence theta_a (measured from the axis in air) that still allows the ray to be guided is called the acceptance angle of the fibre, and twice theta_a is the acceptance cone. Rays incident at angles larger than theta_a leak into the cladding and are lost. The sine of the acceptance angle is the numerical aperture (NA).",
              "The derivation is a straightforward application of Snell's law. Let a ray enter the fibre face from air (refractive index n0 about 1) at incidence angle theta_0 and refract to angle theta_r inside the core (index n1). Snell's law gives n0 sin theta_0 equals n1 sin theta_r. At the core-cladding interface the ray strikes at angle phi equal to 90 degrees minus theta_r (measured from the normal). For TIR, phi must equal the critical angle phi_c, giving sin phi_c equals n2 divided by n1, so cos theta_r equals n2 divided by n1. Using sin squared plus cos squared equals 1, sin theta_r equals square root of (n1 squared minus n2 squared) divided by n1.",
              "Substituting back gives n0 sin theta_0 equals square root of (n1 squared minus n2 squared), so the numerical aperture NA equals sin theta_a equals square root of (n1 squared minus n2 squared) (for air, n0 equal to 1). For a fibre with n1 equal to 1.480 and n2 equal to 1.465, NA equals square root of (1.480 squared minus 1.465 squared), about 0.210, giving an acceptance angle theta_a equals arcsin 0.210, about 12.1 degrees. Larger NA collects more light but typically increases dispersion; telecom fibres use NA around 0.14, while illumination fibres use NA around 0.4 for efficient light gathering.",
            ],
            bullets: [
              "Acceptance angle theta_a: largest incidence angle in air that still allows TIR guidance.",
              "Numerical aperture NA = sin(theta_a) = sqrt(n1^2 - n2^2).",
              "Derivation: Snell at entry (n0 sin theta_0 = n1 sin theta_r) + TIR condition (cos theta_r = n2/n1).",
              "For n1 = 1.480, n2 = 1.465: NA ~ 0.21, theta_a ~ 12.1 deg.",
              "Telecom fibres use NA ~ 0.14 (low dispersion); illumination fibres use NA ~ 0.4 (light gathering).",
            ],
            codeExample: {
              language: "python",
              caption: "Numerical aperture and acceptance angle for a step-index fibre.",
              code:
                `# Numerical aperture and acceptance angle of a step-index fibre
import math
n1 = 1.480            # core refractive index
n2 = 1.465            # cladding refractive index
NA = math.sqrt(n1**2 - n2**2)
theta_a = math.degrees(math.asin(NA))
print("Critical angle at interface = %.2f deg"
      % math.degrees(math.asin(n2/n1)))
print("NA = %.4f" % NA)
print("Acceptance angle = %.2f deg" % theta_a)`,
            },
            diagram: {
              kind: "flow",
              title: "From air to guided ray: the acceptance angle",
              caption:
                "The maximum incidence angle at which a ray still undergoes TIR inside the fibre.",
              steps: [
                { label: "Ray enters fibre face from air", note: "angle of incidence theta_0" },
                { label: "Refracts into core (Snell)", note: "n0 sin theta_0 = n1 sin theta_r" },
                { label: "Hits core-cladding interface", note: "at angle phi = 90 - theta_r" },
                { label: "TIR when phi >= critical angle phi_c", note: "sin phi_c = n2/n1" },
                { label: "Acceptance angle theta_a = arcsin(sqrt(n1^2 - n2^2))", note: "NA = sin theta_a" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "NA = sqrt(n1^2 - n2^2). Memorise this one expression - it gives both NA and the acceptance angle (arcsin(NA)) directly. For n1 = 1.480, n2 = 1.465 -> NA ~ 0.21.",
            },
            keyTerms: [
              { term: "Acceptance angle", definition: "The largest angle of incidence in air that still allows a ray to be guided by TIR; theta_a = arcsin(NA)." },
              { term: "Numerical aperture", definition: "NA = sin(theta_a) = sqrt(n1^2 - n2^2); the light-gathering ability of a fibre." },
              { term: "Cone of acceptance", definition: "The cone of semi-angle theta_a within which incident rays will be guided by the fibre." },
            ],
            examQuestions: [
              {
                q: "Define acceptance angle and numerical aperture of an optical fibre. Derive expressions for them in terms of the core and cladding refractive indices. Calculate the NA and acceptance angle for n1 = 1.480 and n2 = 1.465.",
                marks: 7,
                outline: [
                  "Define acceptance angle theta_a as the largest incidence angle in air that still allows TIR guidance.",
                  "Define numerical aperture NA = sin(theta_a).",
                  "Let ray enter at theta_0 in air; refracts to theta_r inside core (index n1): n0 sin theta_0 = n1 sin theta_r, n0 ~ 1.",
                  "At the core-cladding interface the ray strikes at angle phi = 90 - theta_r; for TIR, phi >= phi_c with sin(phi_c) = n2/n1.",
                  "So cos(theta_r) = n2/n1; using sin^2 + cos^2 = 1, sin(theta_r) = sqrt(n1^2 - n2^2)/n1.",
                  "Therefore NA = n0*sin(theta_a) = sqrt(n1^2 - n2^2); for n1 = 1.480, n2 = 1.465 -> NA ~ 0.210.",
                  "Acceptance angle theta_a = arcsin(0.210) ~ 12.1 deg; telecom fibres use NA ~ 0.14 for low dispersion.",
                ],
              },
              {
                q: "Write the expression for the numerical aperture of an optical fibre.",
                marks: 2,
              },
              {
                q: "A fibre has NA = 0.20. Find its acceptance angle.",
                marks: 3,
              },
            ],
          },
          // --- 5.3 ---
          {
            number: "5.3",
            title: "Types of fibre and attenuation",
            body: [
              "Optical fibres are classified by the refractive-index profile of the core and by the number of modes they support. A step-index fibre has a core of uniform refractive index n1 with an abrupt step down to n2 in the cladding; a graded-index (GRIN) fibre has a core whose index decreases smoothly from a maximum on the axis to n2 at the cladding, which equalizes the travel times of different rays and reduces intermodal dispersion. By the number of modes, fibres are single-mode (core diameter about 8 to 10 micrometres, only one guided mode) or multi-mode (core 50 or 62.5 micrometres, hundreds of modes).",
              "Single-mode fibre (SMF) is used in long-haul telecom because it has essentially no intermodal dispersion and can carry signals over tens of kilometres before regeneration; it requires a laser source and very precise connectors. Multi-mode fibre (MMF) is used in short-distance links like data-centre and campus networks (up to a few hundred metres) because its larger core is easier to couple to LED sources and cheaper connectors. The total attenuation alpha, expressed in dB per kilometre, is 10 divided by L times the logarithm base 10 of (P_in divided by P_out), where L is the fibre length in km.",
              "Attenuation has three main causes. Material absorption by impurities (especially the OH ion at 1.38 micrometre) creates loss peaks; Rayleigh scattering by microscopic density fluctuations sets a floor that decreases as lambda to the power minus four; bending and microbending loss arises when the fibre is curved. Modern silica fibre is engineered to have very low loss at 1310 nm (about 0.35 dB/km) and at 1550 nm (about 0.2 dB/km), the two telecom windows. Plastic optical fibre, cheaper but lossy (about 100 dB/km), is used in short automotive and home links at 650 nm.",
            ],
            bullets: [
              "Step-index: abrupt n1 -> n2; graded-index (GRIN): n decreases smoothly from axis to cladding.",
              "Single-mode (SMF): core ~ 8-10 um; only one guided mode; no intermodal dispersion; long-haul telecom.",
              "Multi-mode (MMF): core 50-62.5 um; many modes; used in short data links (LAN, campus).",
              "Attenuation alpha = (10/L)*log10(P_in/P_out) dB/km; silica: 0.35 dB/km @ 1310 nm, 0.2 @ 1550 nm.",
              "Causes: material absorption (OH- at 1.38 um), Rayleigh scattering (~1/lambda^4), bending loss.",
            ],
            table: {
              caption: "Step-index, graded-index, single-mode and multi-mode fibres compared.",
              headers: ["Type", "Core diameter", "Index profile", "Typical use"],
              rows: [
                ["Single-mode step-index", "~ 8 um", "step", "long-haul telecom"],
                ["Multi-mode step-index", "50 - 62.5 um", "step", "short data links"],
                ["Multi-mode graded-index (GRIN)", "50 - 62.5 um", "graded parabolic", "campus LAN, reduced dispersion"],
                ["Plastic optical fibre", "~ 1 mm", "step", "home/automotive short links"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Single-mode vs multi-mode fibre",
              caption:
                "Core diameter and refractive-index profile determine which modes the fibre carries.",
              left: {
                heading: "Single-mode (SMF)",
                items: [
                  "Core ~ 8 um, very small",
                  "Only one path (mode) propagates",
                  "No intermodal dispersion, high bandwidth",
                  "Used in long-haul telecom at 1310/1550 nm",
                  "Requires laser source, costly connectors",
                ],
              },
              right: {
                heading: "Multi-mode (MMF)",
                items: [
                  "Core ~ 50 um, larger",
                  "Many paths propagate simultaneously",
                  "Intermodal dispersion limits bandwidth-distance",
                  "Used in LANs, campus links at 850 nm",
                  "Cheaper, works with LED sources",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Single-mode fibre has core ~ 8 um and no intermodal dispersion - it carries long-haul telecom. Multi-mode has core 50-62.5 um and is used only for short links.",
            },
            keyTerms: [
              { term: "Step-index fibre", definition: "Fibre with a core of uniform refractive index and an abrupt step down to the cladding index." },
              { term: "Graded-index fibre", definition: "Fibre whose core index decreases smoothly from a maximum on the axis to n2 at the cladding." },
              { term: "Attenuation", definition: "Loss of optical power per unit length of fibre, in dB/km; silica: ~0.2 dB/km at 1550 nm." },
            ],
            examQuestions: [
              {
                q: "Classify optical fibres on the basis of (a) refractive-index profile and (b) number of modes. Explain what is meant by attenuation in an optical fibre and state its three main causes.",
                marks: 7,
                outline: [
                  "By index profile: step-index (abrupt n1 -> n2) and graded-index (n decreases smoothly from axis to cladding).",
                  "By modes: single-mode (core ~ 8-10 um, one guided mode, no intermodal dispersion) and multi-mode (core 50-62.5 um, many modes, larger dispersion).",
                  "Single-mode used for long-haul telecom; multi-mode for short data links and LANs.",
                  "Define attenuation alpha = (10/L)*log10(P_in/P_out) in dB/km.",
                  "Cause 1: material absorption (OH- impurity peak at 1.38 um, metal impurities).",
                  "Cause 2: Rayleigh scattering (microscopic density fluctuations; alpha ~ 1/lambda^4).",
                  "Cause 3: bending and microbending loss; modern silica fibre ~ 0.2 dB/km at 1550 nm.",
                ],
              },
              {
                q: "What is the typical attenuation of modern silica fibre at 1550 nm?",
                marks: 2,
              },
              {
                q: "Why is single-mode fibre preferred for long-haul telecom over multi-mode?",
                marks: 3,
              },
            ],
          },
          // --- 5.4 ---
          {
            number: "5.4",
            title: "Fibre optic communication system",
            body: [
              "A fibre-optic communication system transmits information from one point to another by carrying it on a modulated optical carrier through a glass fibre. The system has three main blocks: a transmitter that converts the electrical information signal into an optical signal, the fibre channel that carries the optical signal, and a receiver that converts it back to an electrical signal. Compared to copper cable and radio, fibre offers enormous bandwidth (terahertz), low attenuation (0.2 dB/km at 1550 nm), immunity to electromagnetic interference, small size and weight, and security against eavesdropping.",
              "At the transmitter the analog or digital information (voice, video, data) drives a laser diode or LED, whose optical output is intensity-modulated by the signal current. The wavelength is chosen at a low-loss window of the fibre - 850 nm and 1310 nm for short and medium haul, 1550 nm for long haul. The optical signal is launched into the fibre through a connector or splice. Repeaters or optical amplifiers (especially the erbium-doped fibre amplifier, EDFA, which amplifies 1550 nm light directly without conversion) are placed every 50 to 100 km to compensate for fibre attenuation and dispersion.",
              "At the receiver a PIN or avalanche photodiode (APD) converts the incoming light back into a photocurrent proportional to the optical power; the current is then amplified, filtered and decoded to recover the original information. Modern long-haul systems use dense wavelength-division multiplexing (DWDM), launching tens to hundreds of different wavelengths simultaneously on the same fibre, each carrying 10 or 40 or 100 Gbit/s, to achieve aggregate capacities above 10 Tbit/s on a single fibre. Fibre-optic undersea cables carry nearly all intercontinental internet traffic; the technology is the backbone of the global information infrastructure.",
            ],
            bullets: [
              "Three blocks: transmitter (laser/LED), fibre channel, receiver (PIN/APD photodiode).",
              "Wavelengths: 850 nm (short), 1310 nm (medium), 1550 nm (long-haul, lowest loss).",
              "Repeaters / EDFAs every 50-100 km boost signal without O-E conversion (EDFA: 1550 nm).",
              "DWDM: tens-hundreds of wavelengths on one fibre; aggregate > 10 Tbit/s.",
              "Advantages over copper: enormous bandwidth, low loss, EMI immunity, small size, security.",
            ],
            table: {
              caption: "Building blocks of a fibre-optic communication link.",
              headers: ["Block", "Component", "Function", "Key spec"],
              rows: [
                ["Transmitter", "laser diode or LED", "converts electrical signal to optical", "850/1310/1550 nm"],
                ["Channel", "optical fibre", "carries light over distance", "0.2 dB/km @ 1550 nm"],
                ["Amplifier", "EDFA", "boosts optical signal without O-E conversion", "gain ~ 20-30 dB"],
                ["Receiver", "PIN or APD photodiode", "converts optical back to electrical", "responsivity ~ 0.8 A/W"],
                ["Multiplexer", "DWDM array", "launches many wavelengths on one fibre", "80+ channels"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Fibre optic communication link",
              caption:
                "From electrical signal at the transmitter to recovered signal at the receiver.",
              stages: [
                { label: "Information source (audio/data)", note: "electrical signal" },
                { label: "Transmitter: laser/LED drive", note: "intensity modulates optical carrier" },
                { label: "Optical fibre channel", note: "low-loss 0.2 dB/km at 1550 nm" },
                { label: "Receiver: PIN/APD photodiode", note: "converts light back to current" },
                { label: "Demodulator and output", note: "amplify, decode, deliver data" },
              ],
            },
            callout: {
              type: "tip",
              title: "Tip",
              body: "EDFA amplifies 1550 nm light directly without O-E conversion, allowing dense wavelength-division multiplexing (DWDM) with hundreds of wavelengths on one fibre.",
            },
            keyTerms: [
              { term: "Optical transmitter", definition: "Laser diode or LED that converts the electrical information signal into a modulated optical carrier." },
              { term: "Optical receiver", definition: "PIN or avalanche photodiode that converts the incoming optical signal back to an electrical signal." },
              { term: "EDFA", definition: "Erbium-doped fibre amplifier that boosts 1550 nm light directly without optical-to-electrical conversion." },
            ],
            examQuestions: [
              {
                q: "Draw the block diagram of a fibre-optic communication system and explain the function of each block. State four advantages of optical fibre communication over copper cable.",
                marks: 7,
                outline: [
                  "Three blocks: transmitter (electrical to optical), fibre channel (carries light), receiver (optical to electrical).",
                  "Transmitter: information signal drives a laser diode or LED at 850/1310/1550 nm; intensity modulation.",
                  "Channel: low-loss silica fibre; repeaters or EDFAs placed every 50-100 km.",
                  "Receiver: PIN or avalanche photodiode converts light to photocurrent; amplification and decoding follow.",
                  "DWDM: tens-hundreds of wavelengths on one fibre, aggregate > 10 Tbit/s.",
                  "Advantages: enormous bandwidth (THz), low attenuation (0.2 dB/km at 1550 nm), immunity to EMI, small size and weight, security against eavesdropping.",
                  "Mention applications: undersea cables carry intercontinental internet traffic; backbone of global telecom.",
                ],
              },
              {
                q: "What is an EDFA and what does it do?",
                marks: 2,
              },
              {
                q: "Name the three low-loss windows of silica fibre and the typical attenuation at each.",
                marks: 3,
              },
            ],
          },
          // --- 5.5 ---
          {
            number: "5.5",
            title: "EM waves and Maxwell's equations",
            body: [
              "James Clerk Maxwell in 1865 unified the laws of electricity and magnetism into a set of four equations that bear his name, and from them predicted the existence of electromagnetic (EM) waves travelling at the speed of light. In differential form the four equations are: Gauss's law for electricity, div E equals rho divided by epsilon nought, which states that electric charges produce electric fields; Gauss's law for magnetism, div B equals zero, which says there are no magnetic monopoles; Faraday's law of induction, curl E equals minus the partial of B with respect to t; and the Ampere-Maxwell law, curl B equals mu nought J plus mu nought epsilon nought the partial of E with respect to t.",
              "In free space (no charges or currents, rho equal to 0, J equal to 0) the equations decouple into wave equations for E and B: the second partial of E with respect to t equals c squared times the Laplacian of E, and similarly for B, where the speed c equals 1 divided by the square root of (mu nought epsilon nought). Substituting the measured values of mu nought equal to 4 pi times 10^-7 H/m and epsilon nought equal to 8.85 times 10^-12 F/m gives c equal to about 3 times 10^8 m/s, the speed of light. This identified light as an EM wave and united optics with electromagnetism.",
              "An EM wave in free space is transverse: the electric and magnetic fields are perpendicular to each other and to the direction of propagation, and they oscillate in phase. The ratio of E to B equals c. EM waves carry both energy and momentum; the Poynting vector S equals E cross B divided by mu nought gives the energy flux per unit area per unit time. The electromagnetic spectrum extends from radio waves (kilometre wavelengths, megahertz frequencies) through microwave, infrared, visible (400 to 700 nm), ultraviolet, X-rays (used in Unit III) to gamma rays (picometre wavelengths). The whole spectrum propagates at c in vacuum.",
            ],
            bullets: [
              "Maxwell's 4 equations: Gauss E (div E = rho/eps0), Gauss B (div B = 0), Faraday (curl E = -dB/dt), Ampere-Maxwell (curl B = mu0*J + mu0*eps0*dE/dt).",
              "In free space (rho = 0, J = 0): they yield wave equations for E and B with speed c = 1/sqrt(mu0*eps0) ~ 3e8 m/s.",
              "EM wave is transverse: E and B perpendicular to each other and to propagation direction; E/B = c.",
              "Poynting vector S = E x B / mu0 gives the energy flux of the wave.",
              "Spectrum: radio, microwave, infrared, visible (400-700 nm), ultraviolet, X-rays, gamma rays - all at c in vacuum.",
            ],
            table: {
              caption: "Maxwell's four equations in free space (differential form).",
              headers: ["Law", "Equation", "Physical meaning"],
              rows: [
                ["Gauss (electric)", "div E = rho / eps0", "charges create electric fields"],
                ["Gauss (magnetic)", "div B = 0", "no magnetic monopoles"],
                ["Faraday", "curl E = - dB/dt", "changing B induces an E field"],
                ["Ampere-Maxwell", "curl B = mu0*J + mu0*eps0*dE/dt", "current and changing E create B"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Maxwell's four equations form a closed cycle",
              caption:
                "Each equation feeds the next in deriving electromagnetic wave behaviour.",
              steps: [
                { label: "Gauss for E: div E = rho/eps0", note: "electric charges create electric fields" },
                { label: "Gauss for B: div B = 0", note: "no magnetic monopoles" },
                { label: "Faraday: curl E = -dB/dt", note: "changing B makes curl E (induction)" },
                { label: "Ampere-Maxwell: curl B = mu0*J + mu0*eps0*dE/dt", note: "current + changing E make curl B" },
                { label: "Combine: wave equation, c = 1/sqrt(mu0*eps0)", note: "predicts EM waves at the speed of light" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Memorise the four Maxwell equations by name: Gauss E, Gauss B, Faraday, Ampere-Maxwell. The displacement-current term eps0*dE/dt was Maxwell's addition that made wave solutions possible.",
            },
            keyTerms: [
              { term: "Maxwell's equations", definition: "Four equations (Gauss E, Gauss B, Faraday, Ampere-Maxwell) unifying electricity and magnetism." },
              { term: "Electromagnetic wave", definition: "A self-propagating transverse wave of oscillating E and B fields travelling at speed c in vacuum." },
              { term: "Displacement current", definition: "eps0*d(Phi_E)/dt, Maxwell's term in the Ampere law that makes wave solutions possible." },
            ],
            examQuestions: [
              {
                q: "State Maxwell's four equations in differential form. Show that they lead to electromagnetic waves in free space travelling at speed c = 1/sqrt(mu0*eps0).",
                marks: 7,
                outline: [
                  "Gauss (electric): div E = rho/eps0.",
                  "Gauss (magnetic): div B = 0 (no magnetic monopoles).",
                  "Faraday: curl E = -dB/dt.",
                  "Ampere-Maxwell: curl B = mu0*J + mu0*eps0*dE/dt.",
                  "In free space rho = 0 and J = 0; take curl of Faraday's equation.",
                  "Use vector identity curl(curl E) = grad(div E) - Laplacian E = -Laplacian E (since div E = 0 in free space).",
                  "Combine with Ampere-Maxwell: d^2(E)/dt^2 = c^2 * Laplacian E with c = 1/sqrt(mu0*eps0) ~ 3e8 m/s.",
                ],
              },
              {
                q: "Write Gauss's law for magnetism and explain its physical meaning.",
                marks: 2,
              },
              {
                q: "Calculate the speed of an electromagnetic wave in free space from mu0 = 4*pi*10^-7 H/m and eps0 = 8.85*10^-12 F/m.",
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
      weightedTopics: [
        { topic: "Young's double slit and fringe width", weight: "7 marks", note: "derivation + numerical; asked almost every year" },
        { topic: "Newton's rings (diameter formula)", weight: "7 marks", note: "D_n^2 = 4*R*lambda*(n - 1/2)" },
        { topic: "Diffraction grating and resolving power", weight: "5-7 marks", note: "RP = n*N with Rayleigh criterion" },
        { topic: "Photoelectric effect (Einstein equation)", weight: "7 marks", note: "K_max = h*f - phi; plot V0 vs f" },
        { topic: "Compton effect", weight: "5-7 marks", note: "delta lambda = (h/mc)*(1 - cos theta)" },
        { topic: "de Broglie wavelength", weight: "5 marks", note: "lambda = 12.27/sqrt(V) Angstrom" },
        { topic: "Heisenberg uncertainty principle", weight: "5 marks", note: "delta x * delta p >= hbar/2" },
        { topic: "Schrodinger equation - particle in a box", weight: "7 marks", note: "E_n = n^2*h^2/(8*m*L^2)" },
        { topic: "Bragg's law (X-ray diffraction)", weight: "5-7 marks", note: "2*d*sin(theta) = n*lambda" },
        { topic: "Numerical aperture of optical fibre", weight: "7 marks", note: "NA = sqrt(n1^2 - n2^2)" },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        { week: "Week 1", focus: "Wave optics (Unit I)", tasks: ["Master Young's fringe derivation and solve 5 numericals.", "Derive Newton's ring diameter formula; remember reflected central spot is dark.", "Practice single-slit minima and grating RP."] },
        { week: "Week 2", focus: "Quantum mechanics (Unit II)", tasks: ["Photoelectric equation graphs and threshold frequency.", "Compton shift derivation + 3 numericals at 45, 90, 180 deg.", "de Broglie lambda for electron through V volts."] },
        { week: "Week 3", focus: "Solid state (Unit III)", tasks: ["Miller indices practice: 5 planes.", "Packing fraction SC/BCC/FCC table by heart.", "Bragg's law worked angle calculation."] },
        { week: "Week 4", focus: "Lasers (Unit IV)", tasks: ["Einstein coefficients and ratio A21/B21.", "Ruby and He-Ne construction diagrams.", "Semiconductor laser materials and wavelengths."] },
        { week: "Week 5", focus: "Fibre optics and EM (Unit V)", tasks: ["Total internal reflection and critical angle.", "NA and acceptance angle derivation.", "Maxwell's four equations in integral and differential form."] },
        { week: "Week 6", focus: "Revision and mocks", tasks: ["Solve last 5 years' RGPV papers under 3-hour limit.", "Redraw all 25 diagrams from memory.", "Revise formulas sheet twice."] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Skim every diagram and its caption - one diagram per section, 25 total.",
        "Memorise the 10 must-know formulas: fringe width, Newton's ring, single-slit minima, grating equation, Brewster, Malus, photoelectric, Compton shift, de Broglie, Bragg.",
        "Read each 7-mark question's outline - those are the exam answer skeletons.",
        "Sleep at least 6 hours; physics numericals need a clear head.",
        "Carry a scientific calculator, sharp pencil, eraser and a scale for diagrams.",
        "Reach the hall 20 minutes early to settle in and warm up your hand.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Start with the strongest 7-mark question; you write faster when confident.",
        "Always draw the diagram first - RGPV awards 1-2 marks for a clean labelled diagram alone.",
        "State the formula in symbols before substituting numbers; intermediate marks live there.",
        "Carry units through every step; 'mm' vs 'm' is where 1 mark silently vanishes.",
        "Keep the last 10 minutes for revision of numericals and diagram labels.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Mixing up dark and bright fringe conditions: bright is n*lambda, dark is (n + 1/2)*lambda.",
        "Forgetting D >> d before writing the small-angle approximation in Young's derivation.",
        "Using the electron rest mass incorrectly in the Compton shift formula.",
        "Confusing NA = sin(theta_a) with the acceptance angle theta_a itself.",
        "Writing Miller indices without clearing fractions to smallest integers.",
        "Quoting E_n = n^2*h^2/(8*m*L^2) without defining n as the quantum number.",
      ],
    },
  ],
};
