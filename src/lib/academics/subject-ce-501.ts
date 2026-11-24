/**
 * Academics - RGPV CE 5th-semester subject: CE-501 Fluid Mechanics I.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries 3 body paragraphs (~100 words
 * each), 5 bullets, a diagram, a callout, a table or code sample, 3 key
 * terms and 3 exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce501: AcademicSubject = {
  id: "ce-501",
  code: "CE-501",
  title: "Fluid Mechanics I",
  semester: "V Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to fluid mechanics for civil engineers: fluid properties, hydrostatics, kinematics, Bernoulli and momentum, and pipe flow - with worked Python numericals, redrawable diagrams, and the exam questions RGPV actually asks.",
  description:
    "Five units walk from the properties that define a fluid - density, viscosity, surface tension, compressibility - through fluid statics with pressure, manometers, hydrostatic forces on plane and curved surfaces and the stability of floating bodies, into kinematics with Lagrangian and Eulerian descriptions, the continuity equation, stream function and velocity potential, across fluid dynamics where Euler's and Bernoulli's equations drive venturimeters, orifice meters, pitot tubes and forces on pipe bends, and finally into flow through pipes covering the Reynolds experiment, Darcy-Weisbach, minor losses, series and parallel pipes, water hammer and the basics of boundary layer theory. Every section pairs the textbook theory with a worked numerical in Python, a redrawable diagram, and three exam-style questions including one full 7-mark answer outline.",
  accentColor: "#0ea5e9",
  emoji: "FM",
  unitCount: 5,
  totalSections: 25,
  units: [
    // ====================== UNIT I - FLUID PROPERTIES ======================
    {
      number: 1,
      roman: "I",
      title: "Fluid Properties and Fundamentals",
      summary:
        "The vocabulary every later unit assumes: the definition of a fluid and its distinction from a solid, the continuum hypothesis and density, viscosity and Newton's law, surface tension and capillarity, and compressibility with the bulk modulus.",
      chapter: {
        number: "01",
        title: "Fluid Properties and Fundamentals",
        intro:
          "Unit I establishes the language of fluid mechanics. Sections define a fluid by its response to shear, present the continuum hypothesis and the property of density, derive Newton's law of viscosity, explore surface tension and capillarity, and close with compressibility and the bulk modulus - the property set used in every later unit.",
        inOneBreath:
          "A fluid deforms continuously under any shear stress, unlike a solid; the continuum hypothesis treats it as a smooth medium described by density rho, dynamic viscosity mu and surface tension sigma; Newton's law tau = mu du/dy classifies Newtonian fluids; capillary rise h = 4 sigma cos(theta)/(rho g d) explains tube behaviour; and the bulk modulus K = -V dp/dV sets the speed of sound c = sqrt(K/rho) and the incompressible limit at Mach 0.3.",
        sections: [
          {
            number: "1.1",
            title: "Definition of a fluid; fluid vs solid",
            body: [
              "A fluid is a substance that deforms continuously under an applied shear stress, however small the stress may be. Solids resist shear by deforming to a fixed strain and then stopping, but fluids keep flowing as long as the stress acts. This single behavioural distinction separates every solid from every fluid and is the foundation of fluid mechanics. Liquids and gases are both fluids: a liquid has a free surface and a nearly fixed volume, while a gas expands to fill its container. The continuum treatment of both uses the same equations, with density and compressibility deciding which simplifications apply.",
              "The three states of matter differ in the spacing and mobility of their molecules. In solids the molecules are bound in a lattice and only vibrate about fixed positions, so shear is resisted elastically. In liquids the molecules are close together but mobile, giving a definite volume but no fixed shape. In gases the molecules are far apart and move freely, so a gas has neither fixed shape nor fixed volume. The macroscopic engineer therefore works with density, viscosity and pressure rather than molecular trajectories, which is the continuum assumption of the next section.",
              "The practical dividing line between fluid and solid is the rate of deformation under shear. Apply a shear stress to a block of steel and it deforms a little and stops; apply the same stress to water and it flows indefinitely. Mathematically a solid obeys tau = G gamma (Hooke's law in shear, with strain angle gamma), while a fluid obeys tau = mu du/dy (Newton's law, with rate of strain du/dy). The next sections build the property toolkit - density, viscosity, surface tension, compressibility - that quantifies how a particular fluid behaves under stress.",
            ],
            bullets: [
              "Fluid: a substance that deforms continuously under any shear stress; both liquids and gases qualify.",
              "Solid: resists shear by fixed elastic strain, tau = G gamma; returns to original shape when stress is removed.",
              "Liquid: definite volume, no fixed shape, forms a free surface; molecules close but mobile.",
              "Gas: neither fixed shape nor fixed volume; molecules far apart, expand to fill the container.",
              "Behavioural test: apply shear; solids stop at finite strain, fluids flow indefinitely.",
            ],
            table: {
              caption: "Comparison of fluid and solid behaviour.",
              headers: ["Aspect", "Solid", "Liquid", "Gas"],
              rows: [
                ["Molecular state", "lattice, vibrating", "close, mobile", "far apart, free"],
                ["Shape", "fixed", "no fixed shape", "no fixed shape"],
                ["Volume", "fixed", "fixed", "variable"],
                ["Shear response", "fixed strain (Hooke)", "continuous flow (Newton)", "continuous flow (Newton)"],
                ["Example", "steel, wood", "water, oil", "air, steam"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Classifying matter by response to shear",
              caption:
                "Apply a shear stress; the response decides whether the substance is a solid or a fluid.",
              start: "Matter sample under shear stress",
              branches: [
                { label: "deforms to fixed strain then stops", outcome: "solid - obeys tau = G gamma (Hooke)", good: true },
                { label: "deforms continuously while stress acts", outcome: "fluid - obeys tau = mu du/dy (Newton)", good: true },
                { label: "no detectable resistance", outcome: "ideal inviscid fluid - mathematical limit only", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Definition question is free marks",
              body: "RGPV almost always opens CE-501 with 'define a fluid and distinguish it from a solid'. Lead with the shear-deformation definition, quote Newton's law tau = mu du/dy versus Hooke's law tau = G gamma, and finish with three examples. This is the simplest 7-mark question in the paper.",
            },
            keyTerms: [
              { term: "Fluid", definition: "A substance that deforms continuously under any applied shear stress; liquids and gases are fluids." },
              { term: "Shear stress", definition: "Force per unit area acting tangentially to a surface; denoted tau, SI unit Pa." },
              { term: "Rate of strain", definition: "du/dy, the velocity gradient perpendicular to the flow; governs fluid shear via Newton's law." },
            ],
            examQuestions: [
              {
                q: "Define a fluid. Distinguish clearly between solids, liquids and gases on the basis of molecular arrangement and response to shear. State Newton's law of viscosity and contrast it with Hooke's law.",
                marks: 7,
                outline: [
                  "Define a fluid as a substance that deforms continuously under any applied shear stress.",
                  "Distinguish solids (fixed strain, Hooke) from fluids (continuous deformation, Newton).",
                  "Differentiate liquids (definite volume, free surface) from gases (no fixed volume).",
                  "State Newton's law tau = mu du/dy and contrast with Hooke tau = G gamma.",
                  "Give molecular picture: solids lattice, liquids mobile, gases free.",
                  "Mention the continuum treatment as the engineer's working assumption.",
                ],
              },
              {
                q: "Why are both liquids and gases classified as fluids?",
                marks: 2,
              },
              {
                q: "Write Newton's law of viscosity and name each symbol with its SI unit.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Continuum hypothesis and density",
            body: [
              "The continuum hypothesis treats a fluid as a continuous medium in which properties like density, pressure and velocity vary smoothly from point to point, ignoring the discrete molecular structure. This is valid when the volume element is large enough to contain many molecules yet small compared to the flow scale, so that statistical averages are stable. For ordinary engineering flows the hypothesis is excellent; it fails only for rarefied gases such as high-altitude flight or micro-scale channels, where the mean free path rivals the flow dimension and the Knudsen number approaches one.",
              "Density, denoted rho, is mass per unit volume with SI unit kg/m^3. For a fluid element of mass delta_m in volume delta_V, density is the limit of delta_m / delta_V as delta_V shrinks to a representative size. Water has a density of about 1000 kg/m^3, mercury 13600 kg/m^3, air at sea level 1.225 kg/m^3. Specific weight, gamma = rho * g, is weight per unit volume with unit N/m^3; for water it is about 9810 N/m^3. Specific gravity is the ratio of a fluid's density to that of pure water at 4 deg C and is dimensionless.",
              "Density varies with temperature and pressure. For liquids the variation with pressure is small because they are nearly incompressible: water density changes by less than one per cent for pressures up to 100 atmospheres. Temperature has a stronger effect, with water reaching its maximum density at 4 deg C. For gases the ideal gas law p = rho R T governs density, with R the specific gas constant (287 J/kg-K for air). Engineers pick representative densities for each problem - 1000 kg/m^3 for water, 1.2 kg/m^3 for air - and use specific gravity to relate unfamiliar fluids to water.",
            ],
            bullets: [
              "Continuum hypothesis: fluid treated as continuous; properties vary smoothly point to point.",
              "Validity: holds when element size >> molecular mean free path; fails for rarefied gases.",
              "Density rho = m/V in kg/m^3; water 1000, mercury 13600, air 1.225 at sea level.",
              "Specific weight gamma = rho * g in N/m^3; for water about 9810 N/m^3.",
              "Specific gravity = rho_fluid / rho_water at 4 deg C; dimensionless.",
            ],
            table: {
              caption: "Density, specific weight and specific gravity of common fluids.",
              headers: ["Fluid", "Density (kg/m^3)", "Specific weight (N/m^3)", "Specific gravity"],
              rows: [
                ["Water (4 deg C)", "1000", "9810", "1.00"],
                ["Mercury", "13600", "133400", "13.6"],
                ["Air (sea level, 15 deg C)", "1.225", "12.0", "0.00123"],
                ["Glycerine", "1260", "12360", "1.26"],
                ["Petrol", "750", "7360", "0.75"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Scales at which the continuum hypothesis holds",
              caption:
                "Top: macroscopic flow; each lower layer is smaller until the molecular scale breaks the hypothesis.",
              layers: [
                { label: "Macroscopic flow (m to km)", note: "pipe, channel, atmosphere" },
                { label: "Representative element (mm)", note: "many molecules, smooth average" },
                { label: "Micro element (micrometre)", note: "continuum borderline in micro-channels" },
                { label: "Molecular scale (mean free path)", note: "hypothesis fails; discrete particles" },
              ],
            },
            callout: {
              type: "warning",
              title: "Rarefied flows break the hypothesis",
              body: "For high-altitude aerodynamics (above 80 km) or micro-channels with size comparable to the mean free path, the Knudsen number approaches one and the continuum hypothesis fails. Use kinetic theory or direct simulation Monte Carlo methods instead. RGPV numericals stay well within continuum limits.",
            },
            keyTerms: [
              { term: "Continuum hypothesis", definition: "Treating a fluid as a continuous medium whose properties vary smoothly, ignoring molecular discreteness." },
              { term: "Density", definition: "Mass per unit volume, rho = m/V; SI unit kg/m^3." },
              { term: "Specific gravity", definition: "Ratio of a fluid's density to that of pure water at 4 deg C; dimensionless." },
            ],
            examQuestions: [
              {
                q: "State and explain the continuum hypothesis. Define density, specific weight and specific gravity. Give typical values for water, mercury and air at sea level.",
                marks: 7,
                outline: [
                  "Define continuum hypothesis and its validity condition (mean free path vs element size).",
                  "Define density rho = m/V with SI unit kg/m^3; give water 1000, mercury 13600, air 1.225.",
                  "Define specific weight gamma = rho g with unit N/m^3; water 9810 N/m^3.",
                  "Define specific gravity as ratio to water at 4 deg C; dimensionless.",
                  "Discuss effect of temperature and pressure on density for liquids and gases.",
                  "State typical values for the three fluids in a small table.",
                ],
              },
              {
                q: "Define specific weight and give its SI unit.",
                marks: 2,
              },
              {
                q: "Compute the specific weight and specific gravity of glycerine (rho = 1260 kg/m^3).",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Viscosity and Newton's law of viscosity",
            body: [
              "Viscosity is the property of a fluid that resists relative motion between its layers. When one layer moves faster than the next, momentum is transferred across the layers and a shear stress develops. Newton's law of viscosity states that the shear stress tau is proportional to the velocity gradient du/dy perpendicular to the flow: tau = mu * (du/dy), where mu is the coefficient of dynamic viscosity with SI unit Pa-s (or N s/m^2). For water mu is about 0.001 Pa-s, for air 0.000018 Pa-s, and for glycerine about 0.85 Pa-s at room temperature.",
              "Kinematic viscosity, nu = mu / rho, has SI unit m^2/s and governs diffusion of momentum in flow problems; it appears in the Reynolds number Re = rho V L / mu = V L / nu. Fluids obeying Newton's law are called Newtonian: water, air, gasoline and most common fluids. Non-Newtonian fluids deviate: shear-thinning fluids like paint drop viscosity with stress; shear-thickening fluids like quicksand rise with stress; Bingham plastics like toothpaste flow only after a yield stress is exceeded. Time-dependent behaviour such as thixotropy completes the rheological picture.",
              "The molecular origin of viscosity differs between gases and liquids. In gases, viscosity arises from random molecular motion transferring momentum between layers - faster molecules from the high-speed layer drift into the slower layer and accelerate it. Gas viscosity therefore increases with temperature. In liquids the dominant mechanism is intermolecular cohesion, which weakens as temperature rises, so liquid viscosity decreases sharply with temperature - water at 0 deg C has mu about 0.0018 Pa-s, at 100 deg C about 0.0003 Pa-s. Pressure has little effect on liquid viscosity but raises gas viscosity at extreme conditions.",
            ],
            bullets: [
              "Viscosity: resistance to relative motion between adjacent fluid layers; quantified by Newton's law.",
              "Newton's law: tau = mu * du/dy; mu is dynamic viscosity, SI unit Pa-s (N s/m^2).",
              "Kinematic viscosity: nu = mu / rho, SI unit m^2/s; appears in Reynolds number.",
              "Newtonian fluids: water, air, gasoline; viscosity independent of shear rate.",
              "Non-Newtonian: shear-thinning (paint), shear-thickening (quicksand), Bingham (toothpaste).",
            ],
            codeExample: {
              language: "python",
              caption: "Shear stress between parallel plates via Newton's law",
              code: `# Shear stress between parallel plates (Newton's law)
def shear_stress(mu_Pa_s, U_m_s, gap_mm):
    du_dy = U_m_s / (gap_mm / 1000)   # 1/s
    return mu_Pa_s * du_dy            # Pa

# Top plate 0.4 m/s, gap 0.5 mm
print(f"{'fluid':12} {'mu Pa-s':>8} {'tau Pa':>8}")
for name, mu in [("water", 0.001), ("oil", 0.6), ("glycerine", 0.85)]:
    tau = shear_stress(mu, 0.4, 0.5)
    print(f"{name:12} {mu:8.3f} {tau:8.1f}")
`,
            },
            diagram: {
              kind: "pyramid",
              title: "Classification of fluids by rheology",
              caption:
                "Top tier is the simplest behaviour; lower tiers add complexity.",
              tiers: [
                { label: "Newtonian", note: "tau vs du/dy is linear; mu constant (water, air)" },
                { label: "Non-Newtonian time-independent", note: "shear-thinning, shear-thickening, Bingham" },
                { label: "Non-Newtonian time-dependent", note: "thixotropic, rheopectic - mu changes with time" },
              ],
            },
            callout: {
              type: "tip",
              title: "Temperature direction is a memory hook",
              body: "Gas viscosity rises with temperature (molecules move faster and transfer more momentum); liquid viscosity falls with temperature (cohesion weakens). One sentence, two facts, two marks - learn it cold.",
            },
            keyTerms: [
              { term: "Dynamic viscosity", definition: "mu, the proportionality constant in Newton's law tau = mu du/dy; SI unit Pa-s." },
              { term: "Kinematic viscosity", definition: "nu = mu / rho; SI unit m^2/s; governs momentum diffusion and Reynolds number." },
              { term: "Newtonian fluid", definition: "A fluid whose dynamic viscosity is independent of the rate of shear; obeys Newton's law." },
            ],
            examQuestions: [
              {
                q: "Define viscosity. State Newton's law of viscosity and distinguish dynamic and kinematic viscosity with units. Distinguish Newtonian and non-Newtonian fluids with examples. Discuss the effect of temperature on the viscosity of liquids and gases.",
                marks: 7,
                outline: [
                  "Define viscosity as resistance to relative motion between fluid layers.",
                  "State Newton's law tau = mu du/dy with SI unit Pa-s for mu.",
                  "Define kinematic viscosity nu = mu / rho with SI unit m^2/s.",
                  "Classify Newtonian (water, air) vs non-Newtonian (shear-thinning, thickening, Bingham).",
                  "Explain temperature effect: liquid viscosity falls, gas viscosity rises.",
                  "Give molecular origins: cohesion in liquids, momentum transfer in gases.",
                ],
              },
              {
                q: "Two parallel plates 0.5 mm apart have the top plate moving at 0.4 m/s. The fluid is oil with mu = 0.6 Pa-s. Find the shear stress.",
                marks: 3,
              },
              {
                q: "Convert the dynamic viscosity of water (0.001 Pa-s) into kinematic viscosity.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Surface tension and capillarity",
            body: [
              "Surface tension is the tensile force per unit length acting along the free surface of a liquid, caused by the imbalance of molecular attraction at the surface. Molecules in the bulk are attracted equally from all sides, but surface molecules experience a net inward pull, so the surface behaves like a stretched membrane. Denoted sigma with unit N/m, surface tension of water at 20 deg C is about 0.073 N/m, of mercury 0.51 N/m, of alcohol 0.022 N/m. It is responsible for the spherical shape of raindrops, the rise of liquids in narrow tubes and the over-pressure inside a soap bubble.",
              "Capillarity is the rise or depression of a liquid in a narrow tube due to surface tension and the contact angle between liquid and solid. For a tube of diameter d, the capillary rise h = 4 * sigma * cos(theta) / (rho * g * d), where theta is the contact angle. Water in a clean glass tube wets the surface with theta near 0 deg and rises; mercury does not wet glass, theta about 130 deg, and is depressed. For water in a 1 mm tube the rise is about 30 mm, an error of similar size if a manometer reading ignores capillarity.",
              "Surface tension governs several engineering phenomena. A soap bubble has internal pressure p = 4 * sigma / R because two surfaces act. A water droplet has p = 2 * sigma / R for one surface. Capillarity explains why sandy soil draws water above the water table, why a paintbrush holds paint against gravity and why narrow bore tubes must be avoided in precise manometry. Surface tension falls with temperature as molecular cohesion weakens, and surfactants reduce it sharply, allowing detergents to wet surfaces that pure water cannot.",
            ],
            bullets: [
              "Surface tension sigma: force per unit length along a liquid surface; unit N/m; water 0.073 at 20 deg C.",
              "Origin: imbalance of molecular attraction at the surface; bulk molecules are balanced.",
              "Capillary rise: h = 4 sigma cos(theta) / (rho g d); water rises in clean glass, mercury is depressed.",
              "Contact angle: 0 deg for water on clean glass; 130 deg for mercury on glass.",
              "Pressure inside droplet: 2 sigma / R; inside soap bubble: 4 sigma / R (two surfaces).",
            ],
            codeExample: {
              language: "python",
              caption: "Capillary rise in a clean glass tube",
              code: `import math
# Capillary rise h = 4 sigma cos(theta) / (rho g d)
def capillary_rise(sigma, theta_deg, rho, g, d_mm):
    return 4 * sigma * math.cos(math.radians(theta_deg)) / (rho * g * (d_mm/1000))

# 2 mm diameter clean glass tubes
water   = capillary_rise(0.073, 0,   1000,  9.81, 2)
mercury = capillary_rise(0.510, 130, 13600, 9.81, 2)
print(f"water rise   = {water*1000:.1f} mm (positive = rises)")
print(f"mercury drop = {mercury*1000:.1f} mm (negative = depressed)")
`,
            },
            diagram: {
              kind: "fork",
              title: "Capillary behaviour by wetting condition",
              caption:
                "The contact angle decides whether the liquid rises or is depressed in the tube.",
              start: "Liquid in a narrow tube",
              branches: [
                { label: "wetting liquid (theta < 90 deg)", outcome: "rises in tube, e.g. water in clean glass", good: true },
                { label: "non-wetting liquid (theta > 90 deg)", outcome: "depressed in tube, e.g. mercury in glass", good: true },
                { label: "zero contact angle", outcome: "maximum rise, h = 4 sigma / (rho g d)", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Mind the bore in manometry",
              body: "A 2 mm glass tube gives a 15 mm capillary rise in water - enough to wreck a precision manometer reading. Use tubes of at least 10 mm bore for water, or correct the reading with the capillary-rise formula. Examiners love this as a 2-mark 'why does the meniscus curve' question.",
            },
            keyTerms: [
              { term: "Surface tension", definition: "Force per unit length acting along a liquid surface, denoted sigma; SI unit N/m." },
              { term: "Capillarity", definition: "Rise or depression of a liquid in a narrow tube due to surface tension and contact angle." },
              { term: "Contact angle", definition: "Angle between the liquid surface and the solid wall at the line of contact; sets wetting behaviour." },
            ],
            examQuestions: [
              {
                q: "Define surface tension. Derive an expression for the capillary rise of a liquid in a tube. Compute the rise of water in a 2 mm clean glass tube (sigma = 0.073 N/m, theta = 0 deg).",
                marks: 7,
                outline: [
                  "Define surface tension sigma with unit N/m; molecular origin.",
                  "Balance upward surface-tension force with weight of liquid column.",
                  "Derive h = 4 sigma cos(theta) / (rho g d).",
                  "Define contact angle theta; water 0 deg, mercury 130 deg.",
                  "Substitute: h = 4 * 0.073 * 1 / (1000 * 9.81 * 0.002).",
                  "Compute h = 0.0149 m = 14.9 mm.",
                  "Note practical significance: manometer bore, soil water.",
                ],
              },
              {
                q: "Find the pressure inside a 1 mm water droplet (sigma = 0.073 N/m).",
                marks: 2,
              },
              {
                q: "Explain why mercury is depressed in a glass tube while water rises.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Compressibility and bulk modulus",
            body: [
              "Compressibility is the property of a fluid to change its volume under applied pressure. The bulk modulus K, defined as K = -V * dp/dV = rho * dp/drho, measures the resistance to compression; its unit is Pa. A large K means an incompressible fluid, a small K means easily compressed. Water has K about 2.2 GPa, mercury 28 GPa, while air under isothermal conditions has K equal to its pressure (about 100 kPa at sea level). Engineers classify a fluid as incompressible when density changes due to pressure are negligible compared with other terms in the governing equations.",
              "The reciprocal of K, beta = 1/K, is the coefficient of compressibility with unit 1/Pa. For a finite pressure change, the volume ratio is approximately V2/V1 = exp(-Delta p / K), or for small changes Delta V/V = -Delta p / K. The speed of sound in a fluid is c = sqrt(K / rho), giving c about 1480 m/s in water and 340 m/s in air. The Mach number M = V/c then tells whether compressibility matters in a flow: incompressible treatment is acceptable when M < 0.3, beyond which density variations become significant and compressible flow equations take over.",
              "In practice, liquids are treated as incompressible for almost all hydraulic calculations - pipes, pumps, tanks - because K is so large. Gases require compressible treatment whenever pressure changes exceed about ten per cent of absolute pressure, as in compressors, turbines and high-speed aircraft. Water hammer, however, is a liquid phenomenon where compressibility matters: the finite K of water sets the pressure wave speed that travels along a pipe on sudden valve closure, and ignoring it underestimates the shock loads that damage penstocks.",
            ],
            bullets: [
              "Compressibility: change in fluid volume under pressure; inverse is bulk modulus K.",
              "Bulk modulus K = -V dp/dV = rho dp/drho; SI unit Pa; water 2.2 GPa, mercury 28 GPa.",
              "Coefficient of compressibility beta = 1/K, unit 1/Pa; small for liquids, large for gases.",
              "Speed of sound c = sqrt(K/rho); water 1480 m/s, air 340 m/s at 20 deg C.",
              "Mach number M = V/c; incompressible treatment acceptable when M < 0.3.",
            ],
            codeExample: {
              language: "python",
              caption: "Speed of sound and percentage volume change",
              code: `import math
# Speed of sound c = sqrt(K/rho); volume change Delta V/V = -Delta p / K
def sound_speed(K_Pa, rho):
    return math.sqrt(K_Pa / rho)

def volume_change_pct(delta_p_Pa, K_Pa):
    return -100 * delta_p_Pa / K_Pa

c_water = sound_speed(2.2e9, 1000)
c_air   = sound_speed(1.42e5, 1.225)
print(f"c_water = {c_water:.0f} m/s")
print(f"c_air   = {c_air:.0f} m/s")

# 10 MPa applied to water
print(f"water volume change under 10 MPa: {volume_change_pct(10e6, 2.2e9):.3f} %")
`,
            },
            diagram: {
              kind: "compare",
              title: "Incompressible liquids vs compressible gases",
              caption:
                "Liquids shrug off pressure changes; gases respond strongly - the same stress, very different strains.",
              left: {
                heading: "Liquids (incompressible)",
                items: [
                  "Large K (water 2.2 GPa)",
                  "Density nearly constant with pressure",
                  "Speed of sound high (~1480 m/s in water)",
                  "Treated as incompressible in hydraulics",
                  "Exception: water hammer uses finite K",
                ],
              },
              right: {
                heading: "Gases (compressible)",
                items: [
                  "Small K (air ~1.4e5 Pa at sea level)",
                  "Density follows p = rho R T",
                  "Speed of sound ~340 m/s in air",
                  "Compressible treatment when M > 0.3",
                  "Used in compressors, turbines, nozzles",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Mach 0.3 is the incompressible limit",
              body: "When asked 'when is a gas treated as incompressible', answer: when the Mach number M = V/c is below 0.3, so density variations stay below about five per cent. Above 0.3, compressible flow equations with p = rho R T are mandatory.",
            },
            keyTerms: [
              { term: "Bulk modulus", definition: "K = -V dp/dV = rho dp/drho; measures resistance to compression; SI unit Pa." },
              { term: "Compressibility", definition: "The reciprocal of bulk modulus, beta = 1/K; how easily a fluid's volume changes with pressure." },
              { term: "Mach number", definition: "M = V/c, ratio of flow velocity to speed of sound; sets the compressible-incompressible boundary at 0.3." },
            ],
            examQuestions: [
              {
                q: "Define compressibility and bulk modulus. Derive the speed of sound in a fluid in terms of K and rho. Calculate the speed of sound in water (K = 2.2 GPa, rho = 1000 kg/m^3) and in air (K = 1.42e5 Pa, rho = 1.225 kg/m^3).",
                marks: 7,
                outline: [
                  "Define compressibility and bulk modulus K = -V dp/dV.",
                  "State reciprocal beta = 1/K with units.",
                  "Derive c = sqrt(K/rho) from continuity and momentum of a plane wave.",
                  "Compute c_water = sqrt(2.2e9/1000) = 1483 m/s.",
                  "Compute c_air = sqrt(1.42e5/1.225) = 340 m/s.",
                  "Define Mach number M = V/c; incompressible when M < 0.3.",
                  "Note water hammer as a liquid compressibility phenomenon.",
                ],
              },
              {
                q: "Define Mach number. When is a flow treated as incompressible?",
                marks: 2,
              },
              {
                q: "A pressure of 10 MPa is applied to water (K = 2.2 GPa). Find the percentage volume change.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ====================== UNIT II - FLUID STATICS ======================
    {
      number: 2,
      roman: "II",
      title: "Fluid Statics",
      summary:
        "Pressure and Pascal's law, the variation of pressure with depth and the working of manometers, hydrostatic forces on plane and curved surfaces, buoyancy and flotation, and the stability of floating bodies through the metacentre.",
      chapter: {
        number: "02",
        title: "Fluid Statics",
        intro:
          "Unit II deals with fluids at rest. Sections introduce pressure and Pascal's law, derive the variation of pressure with depth and the use of manometers, compute hydrostatic forces and their centres of pressure on plane and curved surfaces, state Archimedes' principle for buoyancy, and analyse the stability of floating bodies via the metacentric height.",
        inOneBreath:
          "Pressure is force per area, the same in all directions at a point; Pascal's law transmits it undiminished in a confined fluid, giving the hydraulic press F2/F1 = A2/A1; pressure rises with depth as p = p0 + rho g h, read by manometers Delta p = rho g h; the hydrostatic force on a plane surface is F = rho g h_bar A acting at h_p = h_bar + I_G/(A h_bar); curved surfaces resolve into horizontal (projection) and vertical (weight of fluid above) components; Archimedes gives buoyancy F_B = rho g V_disp; and stability requires positive GM = BM - BG with BM = I_waterplane / V_disp.",
        sections: [
          {
            number: "2.1",
            title: "Pressure and Pascal's law",
            body: [
              "Pressure is the normal force exerted by a fluid per unit area, with SI unit pascal (Pa = N/m^2). At a point in a static fluid, pressure is the same in all directions - a property proved by considering the equilibrium of a small triangular fluid element whose faces balance. Atmospheric pressure at sea level is about 101325 Pa or 101.3 kPa; gauge pressure is measured relative to atmosphere, and absolute pressure is the sum of gauge and atmospheric. Common units include bar (1 bar = 100 kPa) and the torr or millimetre of mercury; engineers must convert carefully in any numerical problem.",
              "Pascal's law states that pressure applied to a confined fluid is transmitted undiminished in all directions and acts normal to the containing surface. The hydraulic press is the classic demonstration: a small force F1 on a small piston of area A1 creates a pressure p = F1 / A1 that is the same at the large piston, giving F2 = p * A2 = F1 * A2 / A1. With a piston area ratio of 100, a 50 N force lifts a 5000 N load - a mechanical advantage without violating energy conservation, since the small piston must move 100 times the distance of the large one.",
              "Pascal's law underpins hydraulic brakes, jacks, lifts and aircraft control systems. In a hydraulic jack, pumping oil into a small cylinder multiplies the operator's effort to lift a vehicle; in aircraft hydraulics, the same principle amplifies a pilot's input to actuate control surfaces. The law assumes an incompressible, continuous fluid and rigid boundaries; real systems lose some pressure to friction in pipes and seals. Pressure measurement devices such as Bourdon gauges and piezometers translate this transmitted pressure into a readable needle displacement or a liquid column height.",
            ],
            bullets: [
              "Pressure p = F/A, SI unit Pa = N/m^2; 1 bar = 100 kPa; 1 atm = 101.325 kPa.",
              "At a point, pressure is the same in all directions; proved by triangular element equilibrium.",
              "Gauge pressure = absolute - atmospheric; vacuum is gauge pressure below zero.",
              "Pascal's law: pressure applied to a confined fluid is transmitted undiminished everywhere.",
              "Hydraulic press: F2 / F1 = A2 / A1; small piston moves more distance than large.",
            ],
            codeExample: {
              language: "python",
              caption: "Hydraulic press: Pascal's law",
              code: `import math
# Pascal's law: F2 = F1 * A2 / A1; small piston moves (A2/A1) farther
def press_force(F1, A1, A2):
    return F1 * A2 / A1

# Diameters 30 mm and 300 mm, effort 100 N
A1 = math.pi * (0.030/2)**2
A2 = math.pi * (0.300/2)**2
F1 = 100
F2 = press_force(F1, A1, A2)
print(f"mechanical advantage = {A2/A1:.0f}")
print(f"F2 = {F2:.0f} N")
print(f"small piston stroke ratio = {A2/A1:.0f}x of large piston")
`,
            },
            diagram: {
              kind: "pipeline",
              title: "Pressure transmission through a confined fluid",
              caption:
                "From effort on a small piston to amplified load on a large piston, with no energy created.",
              stages: [
                { label: "Effort F1 on small piston", note: "area A1" },
                { label: "Pressure p = F1 / A1", note: "same throughout the confined fluid" },
                { label: "Transmitted undiminished", note: "Pascal's law" },
                { label: "Large piston feels p * A2", note: "load F2 = F1 A2/A1" },
                { label: "Energy conserved", note: "small piston moves farther" },
              ],
            },
            callout: {
              type: "tip",
              title: "Energy is not created",
              body: "Pascal's law multiplies force but never energy: the small piston's stroke equals (A2/A1) times the large piston's stroke, so work in equals work out (minus friction). When asked 'how can a small force lift a heavy load', quote both the force ratio and the distance ratio.",
            },
            keyTerms: [
              { term: "Pressure", definition: "Normal force per unit area exerted by a fluid; SI unit pascal (Pa = N/m^2)." },
              { term: "Pascal's law", definition: "Pressure applied to a confined fluid is transmitted undiminished in all directions." },
              { term: "Gauge pressure", definition: "Pressure measured relative to atmospheric; absolute = gauge + atmospheric." },
            ],
            examQuestions: [
              {
                q: "Define pressure. Prove that the pressure at a point in a static fluid is the same in all directions. State Pascal's law and derive the mechanical advantage of a hydraulic press.",
                marks: 7,
                outline: [
                  "Define pressure p = F/A with SI unit Pa; cite atmospheric value.",
                  "Take a triangular fluid element; write force balance on three faces.",
                  "Show p_x = p_y = p_z = p, proving isotropy at a point.",
                  "State Pascal's law: pressure transmitted undiminished in confined fluid.",
                  "Derive hydraulic press F2/F1 = A2/A1 from p1 = p2.",
                  "Note energy conservation: small piston moves A2/A1 times farther.",
                  "Give numerical example or mention applications (brakes, lifts).",
                ],
              },
              {
                q: "Convert 200 kPa gauge pressure into absolute pressure (take atm = 101.3 kPa).",
                marks: 2,
              },
              {
                q: "A hydraulic press has piston diameters 30 mm and 300 mm. Find the load lifted by a 100 N effort and the stroke ratio.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Pressure variation with depth and manometers",
            body: [
              "In a static fluid at rest, pressure increases linearly with depth according to dp/dz = -rho * g, where z is the elevation measured upward. Integrating between two points gives p2 - p1 = rho * g * (z1 - z2) = rho * g * h, where h is the depth difference. For water (rho = 1000 kg/m^3, g = 9.81 m/s^2), pressure rises by 9810 Pa or 9.81 kPa per metre of depth. The free surface of a connected static liquid is therefore at the same level in all branches, a fact exploited by every manometer.",
              "Manometers are pressure-measuring devices that balance the unknown pressure against a column of liquid of known density. A simple U-tube manometer uses mercury or water as the manometric fluid; the pressure difference is rho * g * h, where h is the difference in liquid levels. For gases, one arm may be left open to atmosphere and the other connected to the gas source. Differential manometers use two fluids or two connected U-tubes to measure small pressure differences accurately, with inverted U-tubes suitable for low-pressure air or gas readings.",
              "Practical manometry demands careful bookkeeping. Starting from one end, list each segment of constant-density fluid and write p_next = p_current +/- rho * g * h_segment, adding when descending and subtracting when ascending. Continue until reaching the other end, where pressure is known. Sign errors and density errors are the commonest slips: mercury has rho = 13600 kg/m^3, water 1000, oil perhaps 850. Micromanometers using two immiscible liquids amplify small differences by an inclined tube or by choosing fluids of nearly equal density, achieving resolution below a pascal in laboratory work.",
            ],
            bullets: [
              "Pressure gradient: dp/dz = -rho * g; integration gives p = p0 + rho * g * h.",
              "For water, pressure increases by 9.81 kPa per metre of depth.",
              "Manometer: balance unknown pressure against a liquid column of known density.",
              "U-tube manometer: Delta p = rho * g * h; mercury for high pressure, water for low.",
              "Bookkeeping rule: descend add rho*g*h, ascend subtract; same level = same pressure in same fluid.",
            ],
            codeExample: {
              language: "python",
              caption: "Pressure difference from a U-tube manometer reading",
              code: `# Delta p = rho_mano * g * h for a U-tube manometer
def manometer_dp(rho_fluid, g, h_mm):
    return rho_fluid * g * (h_mm / 1000)

# Mercury manometer, 300 mm column, water in the pipe
g, rho_Hg, h = 9.81, 13600, 300
dp_Pa = manometer_dp(rho_Hg, g, h)
print(f"Delta p = {dp_Pa:.0f} Pa = {dp_Pa/1000:.2f} kPa")
# Equivalent water column height
h_water = dp_Pa / (1000 * g)
print(f"equivalent water head = {h_water*1000:.1f} mm")
`,
            },
            diagram: {
              kind: "flow",
              title: "Reading a U-tube manometer step by step",
              caption:
                "Walk from one end to the other, adding rho g h when descending and subtracting when ascending.",
              steps: [
                { label: "Start at known pressure end", note: "e.g. open atmosphere" },
                { label: "List each constant-density segment", note: "mercury, water, oil" },
                { label: "Descend: add rho g h", note: "pressure rises with depth" },
                { label: "Ascend: subtract rho g h", note: "pressure falls with rise" },
                { label: "Arrive at unknown pressure", note: "solve for p_unknown" },
              ],
            },
            callout: {
              type: "warning",
              title: "Sign errors are the top manometer slip",
              body: "Pressure rises when you descend in a fluid and falls when you rise. Most wrong manometer answers come from flipping this. Always label the direction of travel and write the sign explicitly: p_next = p_current + rho g h when going down, p_current - rho g h when going up.",
            },
            keyTerms: [
              { term: "Hydrostatic pressure", definition: "Pressure at depth h below a free surface, p = p0 + rho g h." },
              { term: "Manometer", definition: "A device that measures pressure by balancing it against a column of liquid of known density." },
              { term: "Piezometer", definition: "The simplest manometer: a vertical tube open to atmosphere measuring gauge pressure at a pipe wall." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for pressure variation with depth in a static fluid. Explain the working of a U-tube manometer. For a mercury manometer reading of 300 mm connected to a water pipe, find the gauge pressure in kPa.",
                marks: 7,
                outline: [
                  "Start from dp/dz = -rho g for a static fluid.",
                  "Integrate to get p = p0 + rho g h; pressure rises with depth.",
                  "State that for water this is 9.81 kPa per metre.",
                  "Explain U-tube manometer: one end known, other unknown, balance via manometric fluid.",
                  "Write Delta p = rho_mano g h, with h the level difference.",
                  "Substitute 300 mm mercury: Delta p = 13600 * 9.81 * 0.3 = 40 kPa.",
                  "Convert to head of water: 4.08 m of water.",
                ],
              },
              {
                q: "State Pascal's law of pressure transmission.",
                marks: 2,
              },
              {
                q: "Differentiate between a simple manometer and a differential manometer.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Hydrostatic forces on plane surfaces",
            body: [
              "A submerged plane surface experiences a hydrostatic force from the surrounding fluid that is the integral of pressure over area. The magnitude of the resultant force is F = rho * g * h_bar * A, where h_bar is the depth of the centroid of the area below the free surface and A is the area. The resultant acts normal to the surface through a point called the centre of pressure, which lies below the centroid because pressure increases with depth. The centre of pressure depth is h_p = h_bar + I_G / (A * h_bar), where I_G is the second moment of area about the centroidal axis parallel to the surface.",
              "The derivation proceeds in two steps. First, integrate pressure over the area to obtain the resultant magnitude; for a vertical rectangular gate of width b and height d with top edge at depth h1, h_bar = h1 + d/2, A = b * d, and F = rho * g * (h1 + d/2) * b * d. Second, take moments about the centroid to locate the line of action; the deeper pressure on the lower portion pulls the centre of pressure down by I_G / (A * h_bar). For a rectangle I_G = b * d^3 / 12 about its horizontal centroidal axis, so the centre of pressure sits d^2 / (12 * h_bar) below the centroid.",
              "The location of the centre of pressure matters whenever a gate, sluice or dam flap must be opened against hydrostatic load. A gate hinge placed at the centre of pressure experiences zero moment from water pressure and can be opened with minimal force; placing the hinge at the centroid leaves a closing moment that increases with depth. Engineers use these formulas for spillway gates, lock gates and tank bottoms. For curved surfaces the resultant decomposes into horizontal and vertical components, treated in the next section, but for plane surfaces the single resultant through the centre of pressure is the complete answer.",
            ],
            bullets: [
              "Resultant hydrostatic force on plane surface: F = rho * g * h_bar * A.",
              "h_bar is the depth of the centroid of the area below the free surface.",
              "Centre of pressure depth: h_p = h_bar + I_G / (A * h_bar), where I_G is centroidal second moment.",
              "Centre of pressure lies below centroid because pressure rises with depth.",
              "For a vertical rectangle, I_G = b*d^3 / 12 about the horizontal centroidal axis.",
            ],
            codeExample: {
              language: "python",
              caption: "Hydrostatic force and centre of pressure on a vertical rectangle",
              code: `# F = rho g h_bar A;  h_p = h_bar + I_G/(A h_bar);  rectangle I_G = b d^3 / 12
def hydrostatic_rectangle(rho, g, b, d, h_top):
    A = b * d
    h_bar = h_top + d/2
    F = rho * g * h_bar * A
    I_G = b * d**3 / 12
    h_p = h_bar + I_G / (A * h_bar)
    return F, h_bar, h_p

F, h_bar, h_p = hydrostatic_rectangle(1000, 9.81, 2, 3, 4)
print(f"area centroid depth   = {h_bar:.2f} m")
print(f"hydrostatic force     = {F/1000:.1f} kN")
print(f"centre of pressure    = {h_p:.2f} m below surface")
print(f"cp below centroid by  = {(h_p - h_bar)*1000:.1f} mm")
`,
            },
            diagram: {
              kind: "matrix",
              title: "Common plane-surface shapes and orientations",
              caption:
                "Each quadrant lists the centroidal second moment I_G used in the centre-of-pressure formula.",
              axes: { x: "horizontal / vertical", y: "rectangle / circle" },
              quadrants: [
                { label: "vertical rectangle: gate", note: "I_G = b d^3 / 12" },
                { label: "vertical circle: valve", note: "I_G = pi D^4 / 64" },
                { label: "horizontal rectangle: tank bottom", note: "h constant; cp at centroid" },
                { label: "inclined plane (any shape)", note: "use h_bar = y_bar sin(theta)" },
              ],
            },
            callout: {
              type: "tip",
              title: "Centre of pressure is below the centroid",
              body: "Because pressure grows with depth, the lower part of a submerged gate pushes harder than the upper part, so the resultant acts below the centroid. Always include the I_G/(A h_bar) correction - omitting it is the most common 7-mark slip.",
            },
            keyTerms: [
              { term: "Hydrostatic force", definition: "Resultant force on a submerged surface from pressure integration; F = rho g h_bar A for a plane surface." },
              { term: "Centre of pressure", definition: "Point through which the hydrostatic resultant acts; lies below the centroid at h_p = h_bar + I_G/(A h_bar)." },
              { term: "Second moment of area", definition: "I_G about the centroidal axis; for a rectangle b*d^3/12, for a circle pi*D^4/64." },
            ],
            examQuestions: [
              {
                q: "Derive expressions for the magnitude of the hydrostatic force and the depth of the centre of pressure on a submerged plane surface. A vertical rectangular gate 2 m wide and 3 m high has its top edge 4 m below water. Find F and the depth of the centre of pressure.",
                marks: 7,
                outline: [
                  "State F = rho g h_bar A, where h_bar is centroid depth.",
                  "Define centre of pressure depth h_p = h_bar + I_G/(A h_bar).",
                  "For rectangle width b, depth d, top at h1: h_bar = h1 + d/2, A = b d.",
                  "Substitute b=2, d=3, h1=4: h_bar = 5.5 m, A = 6 m^2.",
                  "F = 1000 * 9.81 * 5.5 * 6 = 323 kN.",
                  "I_G = b d^3/12 = 4.5 m^4; h_p = 5.5 + 4.5/(6*5.5) = 5.64 m.",
                  "Centre of pressure is 0.14 m below centroid.",
                ],
              },
              {
                q: "Where does the centre of pressure lie relative to the centroid of a submerged plane surface? Why?",
                marks: 2,
              },
              {
                q: "State the formula for I_G of a rectangle of width b and depth d about its horizontal centroidal axis.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Hydrostatic forces on curved surfaces; buoyancy and flotation",
            body: [
              "For a submerged curved surface, the hydrostatic resultant cannot be summed directly as a single force; it is resolved into horizontal and vertical components. The horizontal component F_H equals the force on the vertical projection of the curved surface, acting at the centre of pressure of that projection. The vertical component F_V equals the weight of the fluid in the imaginary volume above the curved surface up to the free surface, acting through the centroid of that volume. The resultant magnitude is R = sqrt(F_H^2 + F_V^2), and its line of action passes through the intersection of the two component lines.",
              "Archimedes' principle states that a body wholly or partially immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid it displaces. The buoyant force F_B = rho * g * V_displaced, acting vertically upward through the centre of buoyancy, which is the centroid of the displaced volume. A body floats when its weight equals the buoyant force; otherwise it sinks. The same principle governs submarines, hot-air balloons, ships and hydrometers. For a floating body the weight of the displaced fluid equals the body's weight, so the volume submerged adjusts itself to balance the load.",
              "Curved-surface hydrostatics and buoyancy together design gates, dams and floating structures. A radial (Tainter) gate on a spillway carries the water load along its curved face, with the resultant passing through the pivot, so the lifting force is modest. Ship stability requires that the centre of buoyancy lie favourably relative to the centre of gravity, treated in the next section. Hydrometers exploit the linear relation between submerged depth and fluid density to read specific gravity directly. In all cases the principle is the same: integrate pressure over the surface, then resolve into convenient components.",
            ],
            bullets: [
              "Curved surface: resolve resultant into horizontal and vertical components.",
              "Horizontal component F_H = force on the vertical projection of the curved surface.",
              "Vertical component F_V = weight of fluid in the volume above the curved surface.",
              "Archimedes' principle: buoyant force equals weight of displaced fluid; F_B = rho g V_disp.",
              "Floating body: weight = buoyant force; submerged volume self-adjusts to balance the load.",
            ],
            table: {
              caption: "Hydrostatic components on a curved surface.",
              headers: ["Component", "Magnitude", "Acts at", "Direction"],
              rows: [
                ["Horizontal F_H", "rho g h_bar A_proj", "centre of pressure of projection", "horizontal"],
                ["Vertical F_V", "rho g V_above", "centroid of imaginary volume", "upward"],
                ["Resultant R", "sqrt(F_H^2 + F_V^2)", "intersection of component lines", "along resultant"],
                ["Buoyant force F_B", "rho g V_displaced", "centre of buoyancy", "vertical upward"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Curved-surface forces split into components",
              caption:
                "The resultant on a curved surface decomposes into a horizontal projection force and a vertical weight-of-fluid-above force.",
              start: "Hydrostatic pressure on curved surface",
              branches: [
                { label: "horizontal component F_H", outcome: "force on vertical projection; acts at cp of projection", good: true },
                { label: "vertical component F_V", outcome: "weight of fluid in volume above surface; acts at centroid", good: true },
                { label: "resultant R = sqrt(F_H^2 + F_V^2)", outcome: "through intersection of component lines", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Archimedes is a 2-mark gimme",
              body: "When asked to state Archimedes' principle, write: 'a body immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid it displaces, acting through the centre of buoyancy'. Verbatim, full marks every time.",
            },
            keyTerms: [
              { term: "Buoyant force", definition: "Upward force on an immersed body equal to the weight of displaced fluid; F_B = rho g V_disp." },
              { term: "Centre of buoyancy", definition: "The centroid of the displaced volume; the point through which the buoyant force acts." },
              { term: "Curved-surface hydrostatics", definition: "Resolving the pressure resultant on a curved surface into horizontal (projection) and vertical (weight of fluid above) components." },
            ],
            examQuestions: [
              {
                q: "Explain how the hydrostatic force on a curved surface is computed. State Archimedes' principle. A wooden block (rho = 600 kg/m^3) of volume 0.5 m^3 floats in water. Find the buoyant force and the submerged volume.",
                marks: 7,
                outline: [
                  "Resolve curved-surface resultant into horizontal and vertical components.",
                  "F_H = rho g h_bar A_proj (vertical projection); F_V = weight of fluid above.",
                  "State Archimedes: F_B = rho g V_disp, acting at centre of buoyancy.",
                  "For floating body, weight = buoyant force; rho_body V_body = rho_water V_sub.",
                  "For wooden block: V_sub = 600/1000 * 0.5 = 0.3 m^3.",
                  "F_B = 1000 * 9.81 * 0.3 = 2943 N (equals block weight).",
                  "Conclude with applications: ships, hydrometers, gates.",
                ],
              },
              {
                q: "Define centre of buoyancy.",
                marks: 2,
              },
              {
                q: "A curved gate retains water; its vertical projection is a 2 m by 4 m rectangle with centroid at 3 m depth. Find F_H.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Stability of floating bodies",
            body: [
              "A floating body is stable if, when slightly tilted, a restoring couple returns it to its original position. Two points govern stability: the centre of gravity G of the body and the centre of buoyancy B, the centroid of the displaced volume. When the body is upright, G and B lie on the same vertical line. When tilted by a small angle, the shape of the submerged volume changes, so B shifts to a new position B'. The line of action of the buoyant force through B' intersects the original vertical centreline at the metacentre M.",
              "The metacentric height GM is the distance between G and M. If M lies above G, GM is positive, the buoyant force and weight form a restoring couple and the body is stable. If M lies below G, GM is negative and the body is unstable, overturning at the slightest tilt. The metacentric height is GM = BM - BG, where BM = I_waterplane / V_displaced and I_waterplane is the second moment of the waterplane area about the axis of tilt. For a rectangular boat of width B and length L floating in water of displaced volume V, BM = L * B^3 / (12 * V).",
              "Stability calculations appear in ship design, caisson engineering and floating platform analysis. A wider hull raises BM (since I grows with the cube of width) and so improves stability; lowering G by ballasting the keel also raises GM. Too large a GM makes a vessel stiff, rolling violently in waves, while too small a GM makes it tender and prone to capsize. Naval architects target a moderate GM - enough for safety, comfortable for crew. The range of stability, the angle at which M crosses below G, sets the maximum heel the vessel can survive.",
            ],
            bullets: [
              "Stability condition: a slight tilt produces a restoring couple returning the body to upright.",
              "Centre of gravity G and centre of buoyancy B lie on the same vertical line when upright.",
              "Metacentre M: intersection of buoyant line through shifted B' with original centreline.",
              "GM = BM - BG; positive GM is stable, negative GM is unstable.",
              "BM = I_waterplane / V_displaced; wide hull raises BM and improves stability.",
            ],
            codeExample: {
              language: "python",
              caption: "Metacentric height GM for a rectangular pontoon",
              code: `# GM = BM - BG;  BM = I_waterplane / V_disp;  for rectangle I = L B^3 / 12
def GM_rectangular(L, B, draft, BG):
    V = L * B * draft
    BM = L * B**3 / (12 * V)   # = B^2 / (12 * draft)
    return BM - BG, BM, V

GM, BM, V = GM_rectangular(6, 3, 0.8, 0.5)
print(f"displaced volume V = {V:.2f} m^3")
print(f"BM = {BM:.3f} m")
print(f"GM = {GM:.3f} m  ->  {'stable' if GM>0 else 'unstable'}")
`,
            },
            diagram: {
              kind: "layers",
              title: "Vertical stack of stability points on a floating hull",
              caption:
                "Top to bottom: waterplane, metacentre M, centre of gravity G, centre of buoyancy B, keel.",
              layers: [
                { label: "Waterplane area", note: "I_waterplane computed here" },
                { label: "Metacentre M", note: "intersection of tilted buoyant line with centreline" },
                { label: "Centre of gravity G", note: "lowered by ballast to raise GM" },
                { label: "Centre of buoyancy B", note: "centroid of displaced volume" },
                { label: "Keel", note: "lowest point of the hull" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sign of GM is the verdict",
              body: "Compute GM = BM - BG. If positive, the body is stable; if negative, unstable; if zero, neutral. Always state the sign and the verdict - examiners award marks for the interpretation, not just the number.",
            },
            keyTerms: [
              { term: "Metacentre", definition: "The intersection of the line of action of the buoyant force through the shifted centre of buoyancy with the original vertical centreline of a tilted body." },
              { term: "Metacentric height", definition: "GM = BM - BG; the distance between G and M; positive for stable, negative for unstable." },
              { term: "Centre of buoyancy", definition: "The centroid of the displaced volume; the point through which the buoyant force acts." },
            ],
            examQuestions: [
              {
                q: "Define metacentre and metacentric height. Derive an expression for BM. A rectangular pontoon 6 m long, 3 m wide floats at 0.8 m draft in sea water (rho = 1025 kg/m^3). If G is 0.5 m above B, find GM and state whether the pontoon is stable.",
                marks: 7,
                outline: [
                  "Define G (centre of gravity) and B (centre of buoyancy).",
                  "For a small tilt, B shifts to B'; line of buoyant force intersects original centreline at M.",
                  "GM = BM - BG; positive GM stable, negative unstable.",
                  "BM = I_waterplane / V_disp; for rectangle I = L B^3 / 12.",
                  "Compute V = 6*3*0.8 = 14.4 m^3; BM = (6*27)/(12*14.4) = 0.94 m.",
                  "GM = 0.94 - 0.5 = 0.44 m > 0 -> stable.",
                  "State that wider hull raises BM; ballasting lowers G.",
                ],
              },
              {
                q: "Distinguish between stable, unstable and neutral equilibrium of a floating body.",
                marks: 2,
              },
              {
                q: "State the effect of hull width on the stability of a floating body.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ====================== UNIT III - FLUID KINEMATICS ======================
    {
      number: 3,
      roman: "III",
      title: "Fluid Kinematics",
      summary:
        "Lagrangian and Eulerian descriptions with the material derivative, classification of flows, the continuity equation in integral and differential form, the stream function and velocity potential, and the construction and use of flow nets.",
      chapter: {
        number: "03",
        title: "Fluid Kinematics",
        intro:
          "Unit III describes fluid motion without regard to the forces causing it. Sections contrast the Lagrangian and Eulerian descriptions and introduce the material derivative, classify flows by time, space, Reynolds number and vorticity, derive the continuity equation in integral and differential form, present the stream function and velocity potential with Laplace's equation, and explain flow nets for seepage and ideal flow.",
        inOneBreath:
          "Lagrangian follows particles, Eulerian fixes points; the material derivative Du/Dt = du/dt + u du/dx + v du/dy + w du/dz adds local and convective acceleration; flows are steady/unsteady, uniform/non-uniform, laminar/turbulent (by Re), rotational/irrotational, compressible/incompressible; continuity gives A1 V1 = A2 V2 for steady incompressible flow and div(V) = 0 in differential form; stream function psi gives u = d psi/dy, v = -d psi/dx; velocity potential phi gives V = grad phi only for irrotational flow; both satisfy Laplace's equation and meet orthogonally in a flow net.",
        sections: [
          {
            number: "3.1",
            title: "Lagrangian and Eulerian descriptions",
            body: [
              "Fluid motion can be described in two complementary ways. The Lagrangian description follows individual fluid particles, tracking the position (x, y, z) of each as a function of time and an initial label: x = x(a, b, c, t). Acceleration is then the direct second derivative of position with respect to time. The Lagrangian view is intuitive - it mirrors the trajectory tracking of solid mechanics - but it is impractical for engineering flows because following millions of particles is computationally prohibitive and identifying each particle in a continuous medium is awkward.",
              "The Eulerian description, the engineer's standard, fixes attention on points in space and observes what passes through. Velocity, pressure and density become fields u(x, y, z, t), p(x, y, z, t), rho(x, y, z, t). The acceleration of a fluid particle is not just the partial derivative of u with respect to t, because the particle also moves to a new point where the field has a different value. The material derivative Du/Dt = du/dt + u * du/dx + v * du/dy + w * du/dz captures both effects: local acceleration (the field changing in time) plus convective acceleration (the particle moving through a spatially varying field).",
              "The two descriptions are connected: integrating the Eulerian velocity field along a path gives the Lagrangian trajectory, and differentiating a Lagrangian trajectory yields the Eulerian velocity at the particle's current position. Smoke streaks in a wind tunnel visualise Lagrangian paths; pressure probes at fixed stations give Eulerian data. Computational fluid dynamics commonly uses the Eulerian frame for the bulk flow with Lagrangian particle tracking for dispersed phases such as droplets or sediment. Engineers must know which frame a question assumes, because the acceleration and conservation equations differ in form.",
            ],
            bullets: [
              "Lagrangian: follow individual fluid particles; x = x(a, b, c, t); acceleration is d^2x/dt^2.",
              "Eulerian: fix points in space; velocity field u(x, y, z, t); standard engineering view.",
              "Material derivative: Du/Dt = du/dt + u du/dx + v du/dy + w du/dz.",
              "Local acceleration: du/dt at a fixed point; convective acceleration: u du/dx + ...",
              "Lagrangian trajectories are recovered by integrating the Eulerian velocity field.",
            ],
            table: {
              caption: "Lagrangian vs Eulerian description of fluid motion.",
              headers: ["Aspect", "Lagrangian", "Eulerian"],
              rows: [
                ["Reference", "individual fluid particle", "fixed point in space"],
                ["Variables", "x(a, b, c, t)", "u(x, y, z, t), p(x, y, z, t)"],
                ["Acceleration", "d^2x/dt^2 directly", "Du/Dt = du/dt + convective terms"],
                ["Typical use", "particle tracking, sediment", "pipe flow, aerodynamics"],
                ["Data example", "smoke streak in wind tunnel", "pressure probe at a station"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Lagrangian vs Eulerian viewpoints",
              caption:
                "Lagrangian travels with the particle; Eulerian watches what passes a fixed point.",
              left: {
                heading: "Lagrangian",
                items: [
                  "Follows individual particles",
                  "Position x(a, b, c, t)",
                  "Acceleration d^2x/dt^2 directly",
                  "Intuitive but tracking-heavy",
                  "Use: sediment, droplet tracking",
                ],
              },
              right: {
                heading: "Eulerian",
                items: [
                  "Fixes points in space",
                  "Field u(x, y, z, t)",
                  "Acceleration Du/Dt with convective term",
                  "Standard engineering frame",
                  "Use: pipe flow, aerodynamics",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Don't drop the convective term",
              body: "Acceleration in Eulerian flow is Du/Dt = du/dt + u du/dx + v du/dy + w du/dz. Even in steady flow (du/dt = 0), acceleration can be nonzero because the particle moves through a spatial gradient. The convective term is what carries fluid around a nozzle or bend.",
            },
            keyTerms: [
              { term: "Lagrangian description", definition: "Tracking individual fluid particles as functions of time and initial position; x = x(a, b, c, t)." },
              { term: "Eulerian description", definition: "Observing fluid properties at fixed points in space as fields u(x, y, z, t); the engineering standard." },
              { term: "Material derivative", definition: "Du/Dt = du/dt + u du/dx + v du/dy + w du/dz; total acceleration of a particle moving through a field." },
            ],
            examQuestions: [
              {
                q: "Distinguish between the Lagrangian and Eulerian descriptions of fluid motion. Define the material derivative and identify the local and convective acceleration terms. Give one engineering situation suited to each description.",
                marks: 7,
                outline: [
                  "Define Lagrangian: follow individual particles; x = x(a, b, c, t).",
                  "Define Eulerian: fix points in space; fields u(x, y, z, t).",
                  "Write material derivative Du/Dt = du/dt + u du/dx + v du/dy + w du/dz.",
                  "Identify local (du/dt) and convective (u du/dx + ...) terms.",
                  "Eulerian suited to pipes/aerodynamics; Lagrangian to particle tracking.",
                  "Connect the two: integrate Eulerian velocity to get Lagrangian path.",
                  "Mention CFD hybrid approaches for dispersed phases.",
                ],
              },
              {
                q: "Define the material derivative Du/Dt.",
                marks: 2,
              },
              {
                q: "For a flow u = 2x, v = -2y, find the x-component of acceleration at point (1, 1).",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Types of flow",
            body: [
              "Flows are classified by several independent axes that together describe the behaviour. A flow is steady if velocity at every point does not change with time, otherwise unsteady. A flow is uniform if velocity is the same at every point in space at a given instant, otherwise non-uniform. A flow can therefore be steady-uniform (constant everywhere, all time), steady-non-uniform (varies in space but not time, like a nozzle flow), unsteady-uniform (varies in time but not space, like a piston driving a fluid), or unsteady-non-uniform (the general case).",
              "A second pair of axes separates laminar from turbulent and rotational from irrotational. In laminar flow, fluid moves in orderly parallel layers with no mixing between them; in turbulent flow, eddies and random fluctuations mix the fluid across the pipe. The Reynolds number Re = rho V D / mu sets the regime: Re below about 2000 is laminar in a pipe, above 4000 turbulent, with transition between. A flow is rotational if fluid particles rotate about their own axes (nonzero vorticity) and irrotational if they do not; irrotational flow admits a velocity potential, the topic of section 3.4.",
              "Compressibility introduces a third classification: a flow is compressible if density variations are significant (Mach > 0.3) and incompressible otherwise. Viscosity distinguishes ideal (inviscid) flow from real (viscous) flow; ideal flows are mathematically tractable and give first-order answers, while real flows need boundary-layer treatment. One-, two- and three-dimensional flows are a simplification axis: most pipe problems are one-dimensional along the axis, open-channel flow is two-dimensional in the vertical plane, and general flows are three-dimensional. Naming all applicable classifications is a frequent short-answer question.",
            ],
            bullets: [
              "Steady: velocity at a point does not change with time; unsteady: it does.",
              "Uniform: velocity same at all points at an instant; non-uniform: varies in space.",
              "Laminar: orderly layers, no mixing; turbulent: eddies and random fluctuations.",
              "Reynolds number Re = rho V D / mu sets laminar (Re < 2000) vs turbulent (Re > 4000).",
              "Rotational: nonzero vorticity; irrotational: admits a velocity potential.",
            ],
            table: {
              caption: "Independent axes for classifying fluid flows.",
              headers: ["Axis", "Class A", "Class B"],
              rows: [
                ["Time", "steady", "unsteady"],
                ["Space", "uniform", "non-uniform"],
                ["Mixing", "laminar", "turbulent"],
                ["Vorticity", "irrotational", "rotational"],
                ["Density", "incompressible", "compressible"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Four combinations of steady/unsteady with uniform/non-uniform",
              caption:
                "Each quadrant is a real flow type with a familiar example.",
              axes: { x: "steady / unsteady", y: "uniform / non-uniform" },
              quadrants: [
                { label: "steady uniform", note: "fully developed pipe flow at constant V" },
                { label: "unsteady uniform", note: "piston driving fluid at varying speed" },
                { label: "steady non-uniform", note: "nozzle reducing area at constant Q" },
                { label: "unsteady non-uniform", note: "general real flow, e.g. startup transient" },
              ],
            },
            callout: {
              type: "exam",
              title: "List every axis for full marks",
              body: "When asked to 'classify fluid flows', enumerate at least five axes: time, space, mixing, vorticity, compressibility, viscosity, dimension. One example per axis earns the 7 marks. Single-axis answers score 2-3.",
            },
            keyTerms: [
              { term: "Steady and uniform flow", definition: "Velocity at every point is constant in time (steady) and the same at all points in space (uniform)." },
              { term: "Laminar and turbulent flow", definition: "Laminar: orderly parallel layers, Re < 2000; turbulent: chaotic mixing with eddies, Re > 4000." },
              { term: "Rotational flow", definition: "A flow in which fluid particles have nonzero vorticity, rotating about their own axes." },
            ],
            examQuestions: [
              {
                q: "Classify fluid flows on the basis of (i) time and space variation, (ii) Reynolds number, (iii) compressibility, (iv) vorticity. Give one practical example of each type.",
                marks: 7,
                outline: [
                  "Steady/unsteady (time) and uniform/non-uniform (space): four combinations.",
                  "Laminar (orderly) vs turbulent (eddies); set by Reynolds number.",
                  "Re = rho V D / mu; pipe: Re<2000 laminar, Re>4000 turbulent.",
                  "Rotational (vorticity nonzero) vs irrotational (admits velocity potential).",
                  "Compressible (M>0.3) vs incompressible; viscous vs inviscid; 1D/2D/3D.",
                  "Examples: nozzle steady-non-uniform, piston unsteady-uniform.",
                  "Note that real flows carry several classifications simultaneously.",
                ],
              },
              {
                q: "Distinguish between rotational and irrotational flow.",
                marks: 2,
              },
              {
                q: "Water flows at 0.1 m/s in a 20 mm pipe (mu = 0.001 Pa-s, rho = 1000 kg/m^3). Find Re and classify the flow.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Continuity equation",
            body: [
              "The continuity equation expresses conservation of mass: the net mass flow into a control volume equals the rate of increase of mass inside. For a fixed control volume, the integral form is minus the integral of rho * V * n over the surface equals the time derivative of the integral of rho over the volume. For steady incompressible flow through a pipe with cross-sections A1 and A2, this reduces to A1 * V1 = A2 * V2, or Q1 = Q2, the volumetric flow rate being constant. If density varies, the equivalent form is rho1 * A1 * V1 = rho2 * A2 * V2 for steady compressible flow.",
              "The differential form follows by applying mass conservation to an infinitesimal element. For Cartesian coordinates, d(rho)/dt + d(rho*u)/dx + d(rho*v)/dy + d(rho*w)/dz = 0. For incompressible flow (rho constant) this collapses to du/dx + dv/dy + dw/dz = 0, the divergence of velocity being zero. In cylindrical coordinates the same equation handles pipe and annular flows naturally; engineers pick the coordinate system to match the geometry. The differential form exposes local behaviour and is the basis of computational fluid dynamics solvers.",
              "The continuity equation is applied wherever mass must balance: pipe junctions, nozzles, diffusers, pumps and turbines. At a Y-junction with two incoming pipes each carrying 0.05 m^3/s and one outgoing pipe of area 0.02 m^2, the outgoing velocity must be (0.10) / 0.02 = 5 m/s. At a nozzle reducing area from 0.01 to 0.0025 m^2 with inlet velocity 4 m/s, the exit velocity is 16 m/s. The same principle catches design errors: an undersized outlet forces high exit velocities and friction losses, so continuity guides pipe sizing from household plumbing to hydroelectric penstocks.",
            ],
            bullets: [
              "Continuity expresses mass conservation: inflow - outflow = rate of mass accumulation.",
              "Integral form for a control volume; steady incompressible flow gives A1 V1 = A2 V2.",
              "Differential form: d rho/dt + div(rho V) = 0; for incompressible flow div(V) = 0.",
              "Pipe junction: sum of inflows = sum of outflows; Q in = Q out.",
              "Cylindrical form used for pipe flow, annuli, and axisymmetric problems.",
            ],
            codeExample: {
              language: "python",
              caption: "Continuity equation A1 V1 = A2 V2 = Q",
              code: `import math
# Continuity for a contracting pipe
def pipe_area(D_mm):
    return math.pi * (D_mm/1000)**2 / 4

D1, V1 = 200, 3   # mm, m/s
A1 = pipe_area(D1)
Q  = A1 * V1

D2 = 100
A2 = pipe_area(D2)
V2 = Q / A2

print(f"flow rate Q = {Q:.4f} m^3/s = {Q*1000:.1f} L/s")
print(f"V2 at 100 mm = {V2:.1f} m/s  (area ratio {A1/A2:.1f})")
`,
            },
            diagram: {
              kind: "pipeline",
              title: "Deriving the continuity equation",
              caption:
                "From mass conservation on a finite control volume to the incompressible differential form.",
              stages: [
                { label: "Mass conservation on a CV", note: "inflow - outflow = accumulation" },
                { label: "Integral form", note: "sum of rho V n A over the surface" },
                { label: "Differential form", note: "d rho/dt + div(rho V) = 0" },
                { label: "Incompressible simplification", note: "div(V) = 0" },
                { label: "Steady 1D pipe application", note: "A1 V1 = A2 V2" },
              ],
            },
            callout: {
              type: "tip",
              title: "Continuity is mass, not momentum",
              body: "Q1 = Q2 holds only for steady incompressible flow with no leakage. If the fluid is compressible, write rho1 A1 V1 = rho2 A2 V2. If there is leakage or branching, write the full mass balance over the junction. Mixing these forms is a common 3-mark slip.",
            },
            keyTerms: [
              { term: "Continuity equation", definition: "Mass conservation statement; in steady incompressible flow, A1 V1 = A2 V2." },
              { term: "Control volume", definition: "A fixed region in space across which mass, momentum and energy balances are written." },
              { term: "Volumetric flow rate", definition: "Q = A * V; volume of fluid passing a section per unit time, SI unit m^3/s." },
            ],
            examQuestions: [
              {
                q: "Derive the continuity equation in differential form for three-dimensional flow. State its incompressible form. A pipe of 200 mm diameter carries water at 3 m/s; it contracts to 100 mm. Find the velocity at the contracted section and the flow rate.",
                marks: 7,
                outline: [
                  "State mass conservation: inflow - outflow = rate of mass change in CV.",
                  "Derive integral form; for steady incompressible flow A1 V1 = A2 V2.",
                  "Take infinitesimal CV to get differential form: d rho/dt + div(rho V) = 0.",
                  "For incompressible flow, div(V) = 0; Cartesian: du/dx + dv/dy + dw/dz = 0.",
                  "Apply to contracting pipe: V2 = V1 * A1/A2 = 3 * 4 = 12 m/s.",
                  "Flow rate Q = A1 V1 = (pi/4)*0.2^2 * 3 = 0.094 m^3/s.",
                  "Mention cylindrical coordinates for pipe and axisymmetric flows.",
                ],
              },
              {
                q: "State the continuity equation for steady incompressible flow.",
                marks: 2,
              },
              {
                q: "Two pipes feed a junction with 0.04 m^3/s and 0.06 m^3/s; the outlet area is 0.03 m^2. Find the outlet velocity.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Stream function and velocity potential",
            body: [
              "The stream function psi is a scalar function of space whose contours are streamlines of the flow. In two-dimensional incompressible flow, the velocity components are u = d psi / d y and v = - d psi / d x. The difference in psi between two streamlines equals the volumetric flow rate per unit depth between them. Streamlines, on which psi is constant, are everywhere tangent to the velocity vector, so no fluid crosses a streamline. The stream function automatically satisfies continuity for two-dimensional incompressible flow, which is its great convenience.",
              "The velocity potential phi is a scalar whose gradient gives the velocity field: V = grad(phi), or in components u = d phi / d x, v = d phi / d y, w = d phi / d z. A velocity potential exists only if the flow is irrotational, since mixed partial derivatives must be equal (curl of grad phi equals zero). For irrotational incompressible flow, phi satisfies Laplace's equation: del^2 phi = 0. The same equation governs psi for incompressible irrotational two-dimensional flow, so both functions are harmonic and connected by the Cauchy-Riemann equations: u = d phi / d x = d psi / d y, v = d phi / d y = - d psi / d x.",
              "The pair (phi, psi) enables analytical solution of many ideal flows by superposition. A uniform stream is phi = U x, psi = U y. A source at the origin is phi = (m / 2 pi) ln r, psi = (m / 2 pi) theta. A doublet, a vortex, and a sink add similarly; combining a uniform stream with a doublet gives the flow around a cylinder, while adding a vortex produces lift. Streamlines (psi constant) and equipotential lines (phi constant) intersect orthogonally, forming the flow nets of section 3.5. These ideal-flow solutions give first-order loads on bodies and underpin panel methods in aerodynamics.",
            ],
            bullets: [
              "Stream function psi: u = d psi/dy, v = - d psi/dx; contours are streamlines.",
              "Difference psi2 - psi1 = flow rate per unit depth between two streamlines.",
              "Velocity potential phi: V = grad phi; exists only for irrotational flow.",
              "Laplace equation: del^2 phi = 0 and del^2 psi = 0 for 2D incompressible irrotational flow.",
              "Cauchy-Riemann equations link phi and psi; streamlines and equipotentials meet at right angles.",
            ],
            codeExample: {
              language: "python",
              caption: "Verify stream function psi = 2 x y gives u, v and irrotationality",
              code: `# u = d psi/dy, v = -d psi/dx; vorticity = dv/dx - du/dy
def velocities(psi_func, x, y, h=1e-6):
    u = (psi_func(x, y + h) - psi_func(x, y - h)) / (2*h)
    v = -(psi_func(x + h, y) - psi_func(x - h, y)) / (2*h)
    return u, v

psi = lambda x, y: 2*x*y
for pt in [(0, 0), (1, 1), (2, 0.5), (0.5, 3)]:
    u, v = velocities(psi, *pt)
    print(f"point {pt}: u = {u:.2f}, v = {v:.2f}")
print("psi = 2 x y -> u = 2x, v = -2y; vorticity = 0 (irrotational)")
`,
            },
            diagram: {
              kind: "cycle",
              title: "Cycle linking stream function and velocity potential",
              caption:
                "Each arrow is a Cauchy-Riemann relation or a conservation law; the two functions describe the same irrotational flow.",
              steps: [
                { label: "psi (stream function)", note: "u = d psi/dy, v = -d psi/dx" },
                { label: "Velocity field V", note: "satisfies continuity" },
                { label: "phi (velocity potential)", note: "V = grad phi" },
                { label: "Irrotationality check", note: "curl V = 0" },
                { label: "Laplace equation", note: "del^2 phi = 0, del^2 psi = 0" },
              ],
            },
            callout: {
              type: "warning",
              title: "Velocity potential needs irrotationality",
              body: "A velocity potential exists only for irrotational flow (curl of grad phi is identically zero). For a stream function, only 2D incompressible flow is needed. Don't claim a phi exists for a viscous rotational flow - examiners mark this as a conceptual error.",
            },
            keyTerms: [
              { term: "Stream function", definition: "A scalar psi whose contours are streamlines; u = d psi/dy, v = -d psi/dx in 2D incompressible flow." },
              { term: "Velocity potential", definition: "A scalar phi whose gradient gives the velocity field; exists only for irrotational flow." },
              { term: "Irrotational flow", definition: "A flow with zero vorticity; necessary and sufficient for the existence of a velocity potential." },
            ],
            examQuestions: [
              {
                q: "Define stream function and velocity potential. Derive the relations between velocity components and these functions. Show that for irrotational incompressible 2D flow both satisfy Laplace's equation and streamlines are orthogonal to equipotential lines.",
                marks: 7,
                outline: [
                  "Define stream function psi: u = d psi/dy, v = -d psi/dx; psi = constant on streamlines.",
                  "Define velocity potential phi: V = grad phi; exists only for irrotational flow.",
                  "Show Cauchy-Riemann: d phi/dx = d psi/dy, d phi/dy = -d psi/dx.",
                  "For incompressible irrotational 2D flow, both satisfy Laplace del^2 = 0.",
                  "Streamlines (psi constant) and equipotentials (phi constant) are orthogonal.",
                  "For psi = 2xy: u = 2x, v = -2y; vorticity = 0 (irrotational).",
                  "Mention superposition of source, vortex, doublet for ideal flow.",
                ],
              },
              {
                q: "State the condition under which a velocity potential exists.",
                marks: 2,
              },
              {
                q: "Given psi = 2 x y, find the velocity components and check whether the flow is irrotational.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Flow nets",
            body: [
              "A flow net is a graphical representation of a two-dimensional irrotational flow as a mesh of streamlines and equipotential lines that intersect orthogonally. Each curvilinear square in the net has sides that are approximately equal, with streamlines tangent to the local velocity and equipotentials perpendicular. The number of channels between streamlines and the number of drops between equipotentials fix the flow rate and pressure distribution in confined seepage under dams, around sheet piles and through earth embankments. Drawing a flow net is an analytical tool, not just a sketch.",
              "Constructing a flow net proceeds iteratively. First, draw the boundary streamlines - the impervious boundaries confine the flow and are themselves streamlines. Second, add a few intermediate streamlines spaced evenly, then draw equipotential lines perpendicular to them so that each cell is roughly square. Adjust the lines until orthogonality and squareness hold everywhere; corners and changes of boundary curvature need the most attention. The flow rate per unit width is q = k * H * N_f / N_d, where k is permeability, H the total head loss, N_f the number of flow channels and N_d the number of equipotential drops.",
              "Flow nets solve problems that resist closed-form analysis. Seepage under a concrete dam, through an earth embankment or around a sheet pile wall are routine applications: once the net is drawn, the head at any point follows by counting equipotential drops from upstream, and the exit gradient at the downstream toe warns of piping failure. Numerical methods such as finite differences and finite elements automate net construction today, but the manual skill remains valuable for checking software output and for understanding the physics. An inaccurate net gives misleading seepage estimates; squareness and orthogonality are the quality criteria.",
            ],
            bullets: [
              "Flow net: orthogonal mesh of streamlines and equipotential lines for 2D irrotational flow.",
              "Each cell is approximately a curvilinear square; squareness is the accuracy criterion.",
              "Boundaries: impervious walls are streamlines; reservoir faces are equipotentials.",
              "Seepage flow rate: q = k * H * N_f / N_d, with N_f flow channels, N_d head drops.",
              "Applications: seepage under dams, sheet pile walls, earth embankments, well hydraulics.",
            ],
            table: {
              caption: "Elements of a flow net.",
              headers: ["Element", "Meaning", "Mathematical role"],
              rows: [
                ["Streamline", "tangent to velocity", "psi = constant"],
                ["Equipotential line", "normal to velocity", "phi = constant"],
                ["Curvilinear square", "approx equal side cell", "ensures accuracy"],
                ["Boundary streamline", "impervious wall", "no flow across"],
                ["Boundary equipotential", "reservoir face", "constant head"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Constructing a flow net step by step",
              caption:
                "Boundary streamlines first, then equipotentials, then iterate to squareness.",
              steps: [
                { label: "Draw boundary streamlines", note: "impervious walls" },
                { label: "Add intermediate streamlines", note: "evenly spaced" },
                { label: "Draw equipotentials perpendicular", note: "form curvilinear squares" },
                { label: "Iterate to squareness", note: "adjust until orthogonality holds" },
                { label: "Compute q = k H N_f / N_d", note: "seepage per unit width" },
              ],
            },
            callout: {
              type: "tip",
              title: "Squareness is the quality test",
              body: "A correct flow net has curvilinear squares - cells whose average side lengths are equal. If cells are long rectangles, redraw. The accuracy of seepage estimates depends entirely on squareness, not on the number of channels.",
            },
            keyTerms: [
              { term: "Flow net", definition: "An orthogonal mesh of streamlines and equipotential lines representing a 2D irrotational flow." },
              { term: "Streamline", definition: "A line everywhere tangent to the local velocity vector; psi is constant along it." },
              { term: "Equipotential line", definition: "A line of constant velocity potential phi; perpendicular to streamlines in a flow net." },
            ],
            examQuestions: [
              {
                q: "Define a flow net and state the properties it must satisfy. Explain the procedure for drawing a flow net for seepage under a concrete dam. Derive q = k H N_f / N_d and define each symbol.",
                marks: 7,
                outline: [
                  "Define flow net: orthogonal mesh of streamlines and equipotentials.",
                  "State properties: orthogonality, curvilinear square cells, boundaries.",
                  "Construction: draw boundary streamlines first, add intermediate, adjust.",
                  "Define N_f (flow channels), N_d (equipotential drops), H (head loss), k (permeability).",
                  "Derive q = k H N_f / N_d per unit width from continuity and Darcy.",
                  "Substitute example: q = 1e-5 * 6 * 4 / 10 = 2.4e-5 m^3/s per m.",
                  "Note applications: seepage under dams, sheet piles, exit gradient.",
                ],
              },
              {
                q: "State the orthogonality condition in a flow net.",
                marks: 2,
              },
              {
                q: "A flow net has 4 flow channels and 10 equipotential drops; head loss is 6 m and k = 1e-5 m/s. Find the seepage per unit width.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ====================== UNIT IV - FLUID DYNAMICS ======================
    {
      number: 4,
      roman: "IV",
      title: "Fluid Dynamics",
      summary:
        "Euler's equation for inviscid flow, Bernoulli's equation and its applications, the venturimeter and orifice meter, the pitot tube and momentum equation, and the forces on pipe bends.",
      chapter: {
        number: "04",
        title: "Fluid Dynamics",
        intro:
          "Unit IV introduces the forces that drive fluid motion. Sections derive Euler's equation for an inviscid fluid, integrate it to Bernoulli's equation and apply Bernoulli to venturimeters, orifice meters and pitot tubes, state the momentum equation for a control volume, and compute the forces exerted by flowing fluid on pipe bends.",
        inOneBreath:
          "Euler along a streamline is dp + rho V dV = 0, the inviscid momentum equation; integrating with constant rho and adding gravity gives Bernoulli p + 0.5 rho V^2 + rho g z = constant; Bernoulli plus continuity drives the venturimeter Q = C_d A1 A2 sqrt(2 g h / (A1^2 - A2^2)) with C_d about 0.97 and the orifice meter (C_d about 0.6); a pitot tube stagnates the flow to give V = sqrt(2 (p0 - p)/rho); the momentum equation Sigma F = rho Q (V_out - V_in) resolves forces on bends into x and y components for thrust-block design.",
        sections: [
          {
            number: "4.1",
            title: "Euler's equation",
            body: [
              "Euler's equation is the momentum equation for an inviscid (frictionless) fluid. By applying Newton's second law to a fluid element along a streamline, the pressure force per unit volume balances the mass acceleration. The result along a streamline is dp + rho * V * dV = 0 for steady flow. The full vector form is rho * Du/Dt = -grad(p) + rho * g, omitting the viscous shear terms of the more general Navier-Stokes equations.",
              "The derivation considers a small cylindrical element of length ds and cross-section dA aligned along a streamline. Pressure on the upstream face is p, on the downstream face p + dp; the net pressure force is -dp * dA (upstream high, downstream low). The mass of the element is rho * ds * dA, and its acceleration along the streamline is V * dV/ds for steady flow. Equating, -dp * dA = rho * ds * dA * V * dV/ds, which simplifies to dp + rho * V * dV = 0 - the differential form of Euler along a streamline. Integration with constant rho yields Bernoulli's equation when gravity is added.",
              "Euler's equation is the inviscid limit used to derive Bernoulli, to analyse shock-free compressible flow and to model ideal aerodynamics. It captures pressure-velocity coupling without the complication of viscosity, so it gives correct first-order answers far from walls where shear is negligible. The omission of viscosity means Euler cannot predict drag from skin friction or flow separation; those need boundary-layer theory. For high Reynolds number external flows, the inviscid outer solution from Euler matches the viscous boundary-layer solution near the wall, the Prandtl synthesis that anchors modern aerodynamics.",
            ],
            bullets: [
              "Euler's equation: momentum equation for an inviscid (frictionless) fluid.",
              "Along a streamline: dp + rho * V dV = 0 for steady flow.",
              "Vector form: rho * Du/Dt = -grad(p) + rho * g (no viscous terms).",
              "Derived by Newton's second law on a small element along a streamline.",
              "Integration with constant rho gives Bernoulli's equation; viscous terms give Navier-Stokes.",
            ],
            table: {
              caption: "Euler's equation in three forms.",
              headers: ["Form", "Equation", "Assumption"],
              rows: [
                ["Along streamline (steady)", "dp + rho V dV = 0", "inviscid, along s"],
                ["Vector form", "rho Du/Dt = -grad(p) + rho g", "inviscid, general"],
                ["Integrated (incompressible)", "p + 0.5 rho V^2 + rho g z = const", "Bernoulli"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "From general to specific momentum equations",
              caption:
                "Top: most general (Navier-Stokes). Middle: drop viscosity (Euler). Bottom: integrate for incompressible flow (Bernoulli).",
              tiers: [
                { label: "Navier-Stokes", note: "full momentum: pressure, gravity, viscous shear" },
                { label: "Euler equation", note: "drop viscous terms; inviscid limit" },
                { label: "Bernoulli equation", note: "integrate with constant rho along a streamline" },
              ],
            },
            callout: {
              type: "tip",
              title: "Euler is Bernoulli before integration",
              body: "Euler's dp + rho V dV = 0 integrates to Bernoulli when rho is constant. If a question asks 'derive Bernoulli from Euler', write Euler in differential form, integrate term by term along the streamline, and add the gravity term rho g dz. Three steps, full marks.",
            },
            keyTerms: [
              { term: "Euler's equation", definition: "The momentum equation for an inviscid fluid; along a streamline dp + rho V dV = 0 for steady flow." },
              { term: "Inviscid flow", definition: "A flow with zero viscosity; the assumption underlying Euler's equation." },
              { term: "Pressure gradient", definition: "grad(p), the spatial rate of change of pressure; drives fluid acceleration in Euler." },
            ],
            examQuestions: [
              {
                q: "Derive Euler's equation of motion along a streamline for an inviscid fluid. State its vector form. Show how integration leads to Bernoulli's equation for incompressible flow.",
                marks: 7,
                outline: [
                  "State Newton's second law for a fluid element along a streamline.",
                  "Net pressure force: -dp * dA; mass: rho * ds * dA; acceleration: V dV/ds.",
                  "Equate: -dp = rho V dV -> dp + rho V dV = 0 (Euler along streamline, steady).",
                  "Vector form: rho Du/Dt = -grad(p) + rho g (no viscous term).",
                  "Integrate with constant rho and add gravity to get Bernoulli.",
                  "Viscous terms added to Euler give Navier-Stokes.",
                  "Inviscid limit valid away from walls; boundary layer handles near-wall.",
                ],
              },
              {
                q: "State Euler's equation along a streamline in differential form.",
                marks: 2,
              },
              {
                q: "How does Euler's equation differ from the Navier-Stokes equations?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Bernoulli's equation and applications",
            body: [
              "Bernoulli's equation is the energy equation for steady, incompressible, inviscid flow along a streamline: p + 0.5 * rho * V^2 + rho * g * z = constant. Each term is a pressure: p is the static pressure, 0.5 * rho * V^2 the dynamic pressure and rho * g * z the hydrostatic pressure. Their sum, the total pressure, is conserved along a streamline in ideal flow. Dividing through by rho * g converts each term to a head in metres: pressure head p/(rho*g), velocity head V^2/(2g) and elevation head z, summing to the total head H.",
              "Bernoulli's equation is derived by integrating Euler's equation dp + rho V dV = 0 along a streamline with constant rho, then adding the gravity term rho g dz. The assumptions are restrictive: steady flow, incompressible fluid, inviscid behaviour, no energy addition, and the two points compared must lie on the same streamline. Real flows violate all of these to some degree, so a head loss h_L term is appended: p1/(rho*g) + V1^2/(2g) + z1 = p2/(rho*g) + V2^2/(2g) + z2 + h_L. The modified equation is the workhorse of pipe and channel hydraulics.",
              "Applications of Bernoulli are everywhere. A siphon moves water over a hump by trading pressure head for elevation. A pitot tube converts velocity into a measurable head difference. A venturimeter and an orifice meter infer flow rate from a pressure drop created by a constriction. The trajectory of a free jet follows from equating the pressure head at the orifice to the elevation reached. In each device, two of the three Bernoulli terms are known, and the third is solved; ignoring head loss gives the ideal answer, corrected later by a coefficient of discharge.",
            ],
            bullets: [
              "Bernoulli: p + 0.5 rho V^2 + rho g z = constant along a streamline.",
              "Static pressure p, dynamic pressure 0.5 rho V^2, hydrostatic pressure rho g z.",
              "Head form: p/(rho g) + V^2/(2g) + z = H; total head conserved in ideal flow.",
              "Assumptions: steady, incompressible, inviscid, no energy addition, same streamline.",
              "Real flow adds head loss h_L: H1 = H2 + h_L; coefficient of discharge corrects ideal.",
            ],
            codeExample: {
              language: "python",
              caption: "Bernoulli between two sections of a horizontal pipe (no losses)",
              code: `import math
# p1 + 0.5 rho V1^2 = p2 + 0.5 rho V2^2 (z1 = z2); V2 from continuity
def bernoulli_p2(p1_Pa, V1, A1, A2, rho=1000):
    V2 = V1 * A1 / A2          # continuity
    p2 = p1_Pa + 0.5*rho*(V1**2 - V2**2)
    return p2, V2

A1 = math.pi*0.150**2/4
A2 = math.pi*0.075**2/4
p2, V2 = bernoulli_p2(200_000, 3, A1, A2)
print(f"V2 = {V2:.1f} m/s, p2 = {p2/1000:.1f} kPa")
`,
            },
            diagram: {
              kind: "pipeline",
              title: "Bernoulli applications sequence",
              caption:
                "From a tank orifice to a venturimeter, the same three-term equation drives every device.",
              stages: [
                { label: "Tank orifice (Torricelli)", note: "V = sqrt(2 g h)" },
                { label: "Siphon", note: "pressure head trades for elevation" },
                { label: "Venturimeter", note: "Q from pressure drop at throat" },
                { label: "Pitot tube", note: "V from stagnation head" },
                { label: "Free jet trajectory", note: "pressure to elevation" },
              ],
            },
            callout: {
              type: "exam",
              title: "List assumptions before solving",
              body: "Bernoulli assumes steady, incompressible, inviscid flow with no energy addition, between points on the same streamline. State these five assumptions before substituting numbers - the assumption list is worth a full mark in every 7-mark Bernoulli question.",
            },
            keyTerms: [
              { term: "Bernoulli's equation", definition: "p + 0.5 rho V^2 + rho g z = constant along a streamline for steady incompressible inviscid flow." },
              { term: "Dynamic pressure", definition: "0.5 rho V^2; the pressure equivalent of the fluid's kinetic energy per unit volume." },
              { term: "Total head", definition: "H = p/(rho g) + V^2/(2g) + z; the conserved energy per unit weight in ideal flow." },
            ],
            examQuestions: [
              {
                q: "State Bernoulli's equation in pressure and head form, listing all assumptions. Derive it from Euler's equation. Water flows through a horizontal pipe of 150 mm diameter that contracts to 75 mm; the pressure at the larger section is 200 kPa and the velocity 3 m/s. Find the pressure at the contracted section neglecting losses.",
                marks: 7,
                outline: [
                  "State Bernoulli: p + 0.5 rho V^2 + rho g z = const along a streamline.",
                  "Identify static, dynamic and hydrostatic terms; head form divides by rho g.",
                  "List assumptions: steady, incompressible, inviscid, no energy addition, same streamline.",
                  "Derive by integrating Euler dp + rho V dV = 0 and adding rho g dz.",
                  "Continuity: V2 = V1 A1/A2 = 3 * 4 = 12 m/s.",
                  "Bernoulli: p2 = p1 + 0.5 rho (V1^2 - V2^2) = 200 + 0.5*1000*(9 - 144).",
                  "Compute p2 = 132.5 kPa; mention head loss correction for real flow.",
                ],
              },
              {
                q: "State the assumptions of Bernoulli's equation.",
                marks: 2,
              },
              {
                q: "Define dynamic pressure and total head. Express them in terms of V, rho and g.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Venturimeter and orifice meter",
            body: [
              "A venturimeter is a device that measures pipe flow rate by constricting the flow through a smoothly converging cone to a throat of reduced area, then expanding it gently back through a diverging cone. The converging cone accelerates the flow, lowering the pressure at the throat; a manometer or pressure gauge reads the pressure drop between the inlet and throat. Bernoulli plus continuity gives the ideal flow rate Q_ideal = A1 A2 sqrt(2 g h / (A1^2 - A2^2)) for a manometer reading h in metres of the flowing fluid. A coefficient of discharge C_d about 0.97 corrects for small losses.",
              "An orifice meter is a simpler, cheaper device: a thin plate with a sharp-edged central hole is inserted between flanges, and the pressure drop across the plate is measured. The abrupt contraction and sudden expansion create significant turbulence and permanent head loss, so the coefficient of discharge is lower, about 0.6 to 0.65. The same Bernoulli-continuity formula gives Q_ideal, multiplied by C_d. The orifice meter trades efficiency for cost and compactness; the venturimeter trades cost for accuracy and low loss, recovering most of the pressure drop in the diverging cone.",
              "Choosing between the two depends on the application. Venturimeters suit long-term installations where pressure recovery matters: water supply mains, hydroelectric penstocks, process plants. Orifice meters suit short measurements, test rigs and tight spaces, accepting the permanent head loss for the convenience of a swappable plate. Both need calibration because the actual C_d varies with Reynolds number, pipe roughness and tap location; standards such as ISO 5167 specify geometry and discharge coefficients for accepted designs. Proper installation requires straight pipe runs upstream and downstream to stabilise the velocity profile.",
            ],
            bullets: [
              "Venturimeter: converging cone, throat, diverging cone; smooth, low loss, C_d about 0.97.",
              "Orifice meter: thin plate with sharp-edged hole; cheap, compact, C_d about 0.6-0.65.",
              "Ideal flow: Q = A1 A2 sqrt(2 g h / (A1^2 - A2^2)); multiply by C_d for actual.",
              "Manometer reading h in metres of flowing fluid (or convert by density ratio).",
              "Venturimeter recovers pressure in the diverging cone; orifice has permanent loss.",
            ],
            codeExample: {
              language: "python",
              caption: "Venturimeter flow rate from a mercury manometer reading",
              code: `import math
# Q = Cd * A1 A2 * sqrt(2 g h / (A1^2 - A2^2));  h in m of flowing fluid
def venturimeter_Q(D1_mm, D2_mm, h_Hg_mm, Cd=0.98, rho_w=1000, rho_Hg=13600):
    A1 = math.pi*(D1_mm/1000)**2/4
    A2 = math.pi*(D2_mm/1000)**2/4
    # manometric head in metres of water = h_Hg * (rho_Hg/rho_w - 1)
    x = rho_Hg/rho_w - 1
    h = (h_Hg_mm/1000) * x
    Q = Cd * A1*A2 * math.sqrt(2*9.81*h / (A1**2 - A2**2))
    return Q, h

Q, h = venturimeter_Q(200, 100, 200)
print(f"manometric head in water = {h:.3f} m")
print(f"Q = {Q:.4f} m^3/s = {Q*1000:.1f} L/s")
`,
            },
            diagram: {
              kind: "compare",
              title: "Venturimeter vs orifice meter",
              caption:
                "Same Bernoulli-continuity formula, very different pressure recovery and cost.",
              left: {
                heading: "Venturimeter",
                items: [
                  "Converging cone + throat + diverging cone",
                  "Smooth acceleration, gentle recovery",
                  "C_d about 0.97",
                  "Low permanent head loss",
                  "Costly, long, accurate",
                ],
              },
              right: {
                heading: "Orifice meter",
                items: [
                  "Thin plate with sharp-edged hole",
                  "Abrupt contraction and expansion",
                  "C_d about 0.6-0.65",
                  "High permanent head loss",
                  "Cheap, compact, swappable",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Convert manometer reading carefully",
              body: "If the manometric fluid is mercury and the pipe fluid is water, the head in metres of water is h_water = h_Hg * (rho_Hg/rho_w - 1), not h_Hg * rho_Hg/rho_w. The minus one accounts for the water column displaced. Getting this wrong costs the entire numerical answer.",
            },
            keyTerms: [
              { term: "Venturimeter", definition: "A flow-measuring device with a smooth converging cone, throat and diverging cone; C_d about 0.97." },
              { term: "Orifice meter", definition: "A flow-measuring device using a sharp-edged plate hole; C_d about 0.6-0.65 with high permanent loss." },
              { term: "Coefficient of discharge", definition: "Ratio of actual flow rate to ideal Bernoulli-continuity flow rate; accounts for losses and contraction." },
            ],
            examQuestions: [
              {
                q: "With a sketch, describe the construction and working of a venturimeter. Derive the expression for the flow rate in terms of the manometer reading. A venturimeter with inlet diameter 200 mm and throat 100 mm carries water; the mercury manometer reads 200 mm. Find Q (C_d = 0.98).",
                marks: 7,
                outline: [
                  "Describe venturimeter: converging cone, throat, diverging cone; pressure taps.",
                  "Apply continuity: V2 = V1 A1/A2.",
                  "Apply Bernoulli between inlet and throat (horizontal): p1 - p2 = 0.5 rho (V2^2 - V1^2).",
                  "Combine to get Q_ideal = A1 A2 sqrt(2 g h / (A1^2 - A2^2)).",
                  "Convert mercury reading to water: h = 0.2*(13.6-1) = 2.52 m of water.",
                  "Substitute D1=0.2 m, D2=0.1 m: A1=0.0314, A2=0.00785; Q_ideal = 0.0706 m^3/s.",
                  "Multiply by C_d=0.98: Q = 0.0692 m^3/s; contrast with orifice meter.",
                ],
              },
              {
                q: "Why is the coefficient of discharge of an orifice meter lower than that of a venturimeter?",
                marks: 2,
              },
              {
                q: "Compare venturimeter and orifice meter on cost, accuracy and head loss.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Pitot tube and momentum equation",
            body: [
              "A pitot tube measures local velocity by stagnating the flow at a single point. The tube opening faces upstream, bringing the fluid to rest at the tip, where pressure rises to the stagnation pressure p0 = p + 0.5 * rho * V^2. A manometer reads the difference between stagnation pressure and the static pressure tap on the side of the tube; the velocity follows as V = sqrt(2 * (p0 - p) / rho) = sqrt(2 g Delta h) when the manometer fluid is the flowing fluid. Aircraft airspeed indicators, wind-tunnel anemometers and open-channel velocity probes all rely on the pitot principle.",
              "The momentum equation applies Newton's second law to a control volume: the sum of external forces equals the rate of change of momentum of the fluid inside plus the net momentum flux out. For steady flow, the x-component is Sigma F_x = rho * Q * (V2_x - V1_x), with Q the volumetric flow rate and V1, V2 the average velocities at inlet and outlet. The external forces include pressure forces at the openings, gravity, and any reaction force from walls or supports. The equation is a vector statement, so each direction is solved independently.",
              "The momentum equation solves problems Bernoulli cannot: forces exerted by flowing fluid on bends, nozzles, gates, and turbine blades. A 90 deg elbow reducing water velocity from 5 to 4 m/s with a 200 mm inlet and a 150 mm outlet experiences a horizontal reaction that the support must resist. A jet striking a flat plate at 30 m/s through a 50 mm nozzle exerts a force rho * A * V^2 on the plate. These force calculations dimension pipe anchors, design turbine buckets and rate hydraulic jumps. The momentum equation complements Bernoulli: where Bernoulli gives pressures, momentum gives forces.",
            ],
            bullets: [
              "Pitot tube: stagnates flow at the tip; measures p0 - p to give V = sqrt(2 (p0 - p)/rho).",
              "Stagnation pressure: p0 = p + 0.5 rho V^2; manometer reads the difference.",
              "Momentum equation: Sigma F = d/dt(momentum in CV) + net momentum flux out.",
              "Steady x-direction: Sigma F_x = rho Q (V2_x - V1_x); vector sum per direction.",
              "External forces: pressure forces at openings, gravity, support reactions.",
            ],
            codeExample: {
              language: "python",
              caption: "Pitot tube velocity and force of a jet on a flat plate",
              code: `import math
# Pitot: V = sqrt(2 g Delta h);  jet on flat plate: F = rho A V^2
def pitot_velocity(Delta_h_m, g=9.81):
    return math.sqrt(2*g*Delta_h_m)

def jet_force_normal(d_mm, V, rho=1000):
    A = math.pi*(d_mm/1000)**2/4
    return rho * A * V**2   # stationary flat plate, normal jet

V = pitot_velocity(0.3)
print(f"pitot velocity = {V:.2f} m/s for h = 0.3 m")
F = jet_force_normal(50, 25)
print(f"jet force on plate = {F:.1f} N (50 mm jet at 25 m/s)")
`,
            },
            diagram: {
              kind: "fork",
              title: "Pitot tube variants and their use",
              caption:
                "Each branch is the same stagnation principle applied in a different setting.",
              start: "Pitot tube facing the flow",
              branches: [
                { label: "simple pitot", outcome: "measures stagnation pressure p0 only; needs separate static tap", good: true },
                { label: "pitot-static tube", outcome: "combined stagnation and static; one manometer gives Delta p directly", good: true },
                { label: "aircraft airspeed indicator", outcome: "Delta p converted to V = sqrt(2 Delta p / rho)", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Bernoulli gives pressure, momentum gives force",
              body: "Use Bernoulli when the question asks for pressure or velocity at a point; use the momentum equation when it asks for the force on a bend, plate or gate. The two equations are complementary - listing both in the answer frame earns extra method marks.",
            },
            keyTerms: [
              { term: "Pitot tube", definition: "A device that measures local velocity by stagnating the flow and reading p0 - p; V = sqrt(2 (p0 - p)/rho)." },
              { term: "Stagnation pressure", definition: "p0 = p + 0.5 rho V^2; the pressure reached when the flow is brought to rest isentropically." },
              { term: "Momentum equation", definition: "Sigma F = rate of momentum change in CV + net momentum flux out; Newton's law for a control volume." },
            ],
            examQuestions: [
              {
                q: "Describe the working of a pitot tube and derive the expression for velocity in terms of the pressure difference. State the momentum equation for a control volume. A water jet of 50 mm diameter at 25 m/s strikes a stationary flat plate normally. Find the force exerted on the plate.",
                marks: 7,
                outline: [
                  "Describe pitot tube: stagnation opening facing upstream; side static tap.",
                  "Stagnation pressure p0 = p + 0.5 rho V^2.",
                  "Velocity: V = sqrt(2 (p0 - p)/rho) = sqrt(2 g Delta h).",
                  "State momentum equation: Sigma F = d/dt(momentum in CV) + net flux out.",
                  "For steady x-direction: Sigma F_x = rho Q (V2_x - V1_x).",
                  "For jet on flat plate (stationary, normal): F = rho A V^2.",
                  "Substitute A = pi/4 * 0.05^2 = 0.00196 m^2; F = 1000 * 0.00196 * 625 = 1227 N.",
                ],
              },
              {
                q: "Define stagnation pressure.",
                marks: 2,
              },
              {
                q: "A pitot tube in water (rho = 1000 kg/m^3) reads a head difference of 0.3 m. Find the velocity.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Forces on pipe bends",
            body: [
              "Pipe bends carry flowing fluid around changes in direction, and the momentum equation gives the force the fluid exerts on the bend so the support can be designed. For a horizontal bend reducing diameter from D1 to D2 with inlet velocity V1, the incoming momentum flux is rho * A1 * V1^2 along the inlet direction and the outgoing flux is rho * A2 * V2^2 along the outlet direction. The vector difference of these fluxes, plus the pressure forces on the end faces, equals the force the bend exerts on the fluid; the fluid exerts the equal and opposite force on the bend.",
              "The procedure is systematic. First choose a control volume enclosing the bend, with inlet and outlet faces. Second, write the continuity equation to find the unknown velocity or area. Third, apply Bernoulli (if losses are small) to find the unknown pressure. Fourth, write the momentum equation in x and y (or any convenient directions) listing all forces: pressure forces p1 A1 and p2 A2 along the flow directions at the openings, and the bend reaction Rx, Ry on the fluid. Fifth, solve for Rx, Ry; the force on the bend is minus Rx, minus Ry.",
              "Pipe anchors and thrust blocks resist these forces and prevent the bend from tearing out of the line. A 90 deg bend in a 300 mm water main carrying 0.2 m^3/s with inlet pressure 400 kPa experiences a resultant of tens of kilonewtons; a concrete thrust block transfers the load to the surrounding soil. Reducers, valves, and tee junctions are handled the same way. For gas pipelines the density is lower but velocities are higher, and dynamic terms matter; for low-velocity liquid systems the pressure forces usually dominate. Always report the magnitude and direction of the resultant and locate the anchor accordingly.",
            ],
            bullets: [
              "Pipe bend force: momentum equation resolves the dynamic and pressure loads on the bend.",
              "Control volume encloses the bend; inlet and outlet faces carry momentum and pressure.",
              "Continuity gives unknown velocity; Bernoulli gives unknown pressure if losses are small.",
              "Momentum in x and y: Sigma F = rho Q (V_out - V_in), as a vector equation.",
              "Force on bend equals and opposite to the reaction on the fluid; anchors must resist it.",
            ],
            codeExample: {
              language: "python",
              caption: "Force on a horizontal 90 deg reducing bend (water)",
              code: `import math
# Inlet in +x, outlet in +y; momentum and pressure on the control volume
def bend_force(D1, D2, V1, p1_Pa, rho=1000):
    A1 = math.pi*D1**2/4
    A2 = math.pi*D2**2/4
    Q  = A1*V1
    V2 = Q/A2
    # Bernoulli (no losses), z1 = z2
    p2 = p1_Pa + 0.5*rho*(V1**2 - V2**2)
    # Force on fluid: pressure in + momentum flux; bend sees opposite
    Rx_on_fluid = p1_Pa*A1 - rho*Q*V1     # +x pressure in, +x momentum in
    Ry_on_fluid = -p2*A2 + rho*Q*V2       # -y pressure in (outward +y), +y momentum out
    return -Rx_on_fluid, -Ry_on_fluid, V2, p2

D1, D2 = 0.30, 0.15
Rx, Ry, V2, p2 = bend_force(D1, D2, 4, 200_000)
print(f"V2 = {V2:.1f} m/s, p2 = {p2/1000:.1f} kPa")
print(f"force on bend: Rx = {Rx/1000:.1f} kN, Ry = {Ry/1000:.1f} kN")
print(f"resultant = {math.hypot(Rx,Ry)/1000:.1f} kN")
`,
            },
            diagram: {
              kind: "flow",
              title: "Control-volume procedure for a pipe-bend force",
              caption:
                "Choose the CV, list forces and momentum fluxes, resolve in x and y, then report the resultant on the bend.",
              steps: [
                { label: "Choose control volume", note: "enclose the bend" },
                { label: "Continuity for V2", note: "A1 V1 = A2 V2" },
                { label: "Bernoulli for p2", note: "if losses small" },
                { label: "Momentum in x and y", note: "Sigma F = rho Q (V_out - V_in)" },
                { label: "Report resultant on bend", note: "magnitude and direction" },
              ],
            },
            callout: {
              type: "warning",
              title: "Pressure forces point into the CV",
              body: "Pressure on an inlet face pushes fluid into the CV in the flow direction; pressure on an outlet face pushes back into the CV opposite to the outward normal. Forgetting the outlet pressure direction is the commonest pipe-bend error. Draw the arrow on each face before writing Sigma F.",
            },
            keyTerms: [
              { term: "Pipe bend force", definition: "The resultant force exerted by flowing fluid on a bend, found by the momentum equation on a CV enclosing the bend." },
              { term: "Control volume", definition: "A fixed region enclosing the device; mass, momentum and energy balances are written across its faces." },
              { term: "Thrust block", definition: "A concrete block transferring pipe-bend forces to the surrounding soil, preventing the bend from tearing out." },
            ],
            examQuestions: [
              {
                q: "Derive expressions for the forces exerted by a flowing fluid on a pipe bend in two perpendicular directions. A 90 deg bend reduces a 300 mm pipe to 150 mm; water enters at 4 m/s with pressure 200 kPa. Find the magnitude and direction of the resultant force on the bend.",
                marks: 7,
                outline: [
                  "Choose control volume enclosing the bend; inlet section 1, outlet section 2.",
                  "Apply continuity to find V2 = V1 A1/A2 = 4 * (0.3^2/0.15^2) = 16 m/s.",
                  "Apply Bernoulli (horizontal, no loss) for p2: p2 = p1 + 0.5 rho (V1^2 - V2^2).",
                  "Write momentum in x and y: Sigma F_x = rho Q (V2_x - V1_x); same for y.",
                  "Pressure forces: p1 A1 in +x, p2 A2 in -y at outlet.",
                  "Solve for reactions Rx (force on fluid in +x) and Ry.",
                  "Force on bend = -R; compute magnitude and direction.",
                ],
              },
              {
                q: "What is a thrust block and why is it needed?",
                marks: 2,
              },
              {
                q: "Why are pressure forces included in the momentum equation for a pipe bend?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ====================== UNIT V - FLOW THROUGH PIPES ======================
    {
      number: 5,
      roman: "V",
      title: "Flow Through Pipes",
      summary:
        "The Reynolds experiment and laminar versus turbulent flow, the Darcy-Weisbach equation with the Moody chart, minor losses from fittings, pipes in series and parallel with water hammer, and the basics of boundary layer theory.",
      chapter: {
        number: "05",
        title: "Flow Through Pipes",
        intro:
          "Unit V closes the subject with the engineering of pipe systems. Sections present the Reynolds experiment and the laminar-turbulent classification, derive Darcy-Weisbach for friction head loss, catalogue minor losses from fittings, analyse pipes in series and parallel with water hammer, and introduce boundary layer theory on a flat plate.",
        inOneBreath:
          "Reynolds's dye experiment classifies pipe flow by Re = rho V D / mu: laminar below 2000 with parabolic profile and f = 64/Re, turbulent above 4000 with flat core and Moody-chart f; Darcy-Weisbach h_f = f L V^2 / (2 g D) gives friction loss; minor losses h_m = K V^2 / (2 g) with K from tables; series pipes share Q with summed losses, parallel pipes share head loss with summed flows; water hammer gives Delta p = rho a Delta V with a the wave speed; and the boundary layer grows as delta proportional to sqrt(nu x / U) with transition at Re_x about 5e5 and separation in adverse pressure gradients causing form drag.",
        sections: [
          {
            number: "5.1",
            title: "Reynolds experiment and laminar vs turbulent flow",
            body: [
              "Osborne Reynolds's classic experiment injected a thin filament of dye into water flowing through a glass pipe and observed the flow pattern at varying velocities. At low velocities the dye remained as a straight filament, indicating orderly parallel layers with no mixing - laminar flow. As velocity increased past a critical value the dye filament wavered, broke up, and finally diffused completely across the pipe, indicating chaotic mixing - turbulent flow. The transition depended on the dimensionless ratio Re = rho V D / mu, now called the Reynolds number, the single parameter that classifies pipe flow regime.",
              "In laminar flow (Re < 2000 in a pipe) fluid moves in distinct parallel layers with momentum transfer dominated by viscosity. The velocity profile in a circular pipe is parabolic, peaking at the centreline and zero at the wall, with average velocity half the maximum. Head loss is proportional to velocity (h_f proportional to V), and the friction factor f = 64 / Re. In turbulent flow (Re > 4000) eddies mix the fluid across the pipe, the velocity profile is much flatter over the core with a sharp drop near the wall, and head loss is proportional to roughly V^1.75 to V^2.",
              "The transition region between Re = 2000 and 4000 is intermittent, with laminar and turbulent patches alternating; engineers avoid designing in this range because behaviour is unpredictable. Reynolds number governs scaling: a small model and a large prototype at the same Re have dynamically similar flows. Pipe friction, heat transfer coefficient and drag coefficient all correlate with Re, making it the central parameter of fluid mechanics. The dye experiment remains the clearest physical demonstration of why the regime matters: design equations change, mixing rates change, and pumping costs change across the laminar-turbulent boundary.",
            ],
            bullets: [
              "Reynolds experiment: dye filament in pipe; laminar straight, turbulent diffused.",
              "Reynolds number Re = rho V D / mu governs the regime; same Re gives dynamic similarity.",
              "Laminar: Re < 2000; parabolic profile; V_avg = V_max/2; f = 64/Re; h_f proportional to V.",
              "Turbulent: Re > 4000; flat core profile; h_f proportional to V^1.75 to V^2.",
              "Transition 2000 < Re < 4000 is intermittent and avoided in design.",
            ],
            table: {
              caption: "Laminar vs turbulent flow in a circular pipe.",
              headers: ["Feature", "Laminar (Re < 2000)", "Turbulent (Re > 4000)"],
              rows: [
                ["Dye pattern", "straight filament", "fully diffused"],
                ["Velocity profile", "parabolic", "flat core, sharp wall"],
                ["V_avg / V_max", "0.5", "about 0.8"],
                ["Head loss vs V", "h_f proportional to V", "h_f proportional to V^1.75 to V^2"],
                ["Friction factor", "f = 64/Re", "from Moody or Colebrook"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Flow regimes by Reynolds number and mixing",
              caption:
                "Each quadrant is one regime encountered in Reynolds's experiment.",
              axes: { x: "low Re / high Re", y: "no mixing / high mixing" },
              quadrants: [
                { label: "laminar", note: "straight dye, parabolic profile, f = 64/Re" },
                { label: "not physical", note: "no mixing at high Re does not occur" },
                { label: "transition zone", note: "Re 2000-4000, intermittent" },
                { label: "turbulent", note: "diffused dye, flat profile, Moody f" },
              ],
            },
            callout: {
              type: "exam",
              title: "Reynolds number is the central parameter",
              body: "Almost every flow classification, friction formula and heat-transfer correlation in fluid mechanics is keyed to Re. Memorise the critical values 2000 and 4000 for pipe flow, and the laminar friction factor f = 64/Re - they appear in some form on every CE-501 paper.",
            },
            keyTerms: [
              { term: "Reynolds number", definition: "Re = rho V L / mu = V L / nu; the dimensionless ratio of inertial to viscous forces; governs flow regime." },
              { term: "Laminar flow", definition: "Orderly parallel-layer flow with no mixing; in pipes Re < 2000; parabolic profile." },
              { term: "Turbulent flow", definition: "Chaotic flow with eddies mixing the fluid across the pipe; in pipes Re > 4000." },
            ],
            examQuestions: [
              {
                q: "Describe Reynolds's experiment. Define the Reynolds number and state its significance. Distinguish between laminar and turbulent flow in terms of velocity profile, head loss variation and friction factor.",
                marks: 7,
                outline: [
                  "Describe Reynolds's apparatus: tank, glass pipe, dye filament, valve.",
                  "Define Reynolds number Re = rho V D / mu = V D / nu; dimensionless.",
                  "Laminar: dye straight, Re < 2000; parabolic profile; V_avg = V_max/2.",
                  "Turbulent: dye diffused, Re > 4000; flat core; eddies mix across.",
                  "Transition 2000 < Re < 4000 intermittent; avoid in design.",
                  "Dynamic similarity: same Re means similar flows.",
                  "Applications: pipe sizing, drag, heat transfer all depend on Re.",
                ],
              },
              {
                q: "State the critical Reynolds number for pipe flow.",
                marks: 2,
              },
              {
                q: "Water at 20 deg C (mu = 0.001 Pa-s, rho = 1000 kg/m^3) flows at 0.05 m/s in a 25 mm pipe. Find Re and the flow regime.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Darcy-Weisbach equation",
            body: [
              "The Darcy-Weisbach equation gives the head loss due to friction in a pipe of length L, diameter D and average velocity V: h_f = f * L * V^2 / (2 g D), where f is the Darcy friction factor, dimensionless. The equation is valid for both laminar and turbulent flow; only the value of f changes. For laminar flow f = 64 / Re exactly, derived from the parabolic profile. For turbulent flow f depends on Re and on the relative roughness epsilon/D of the pipe wall, read from the Moody chart or computed from the Colebrook-White equation: 1/sqrt(f) = -2 log10(epsilon/(3.7 D) + 2.51/(Re sqrt(f))).",
              "The Moody chart plots f against Re for a family of relative roughness curves, with the laminar line f = 64/Re on the left, a transition bump near Re = 2000-4000, and turbulent curves levelling out at high Re into the fully rough zone where f depends only on epsilon/D. Smooth pipes (drawn copper, glass) have epsilon near zero; commercial steel has epsilon about 0.046 mm; concrete about 0.3 to 3 mm. Reading the chart needs Re first, then a horizontal line to the appropriate roughness curve; interpolation between curves is approximate.",
              "The Darcy-Weisbach equation drives pipe sizing. Given a required flow Q and allowable head loss, an engineer picks a trial D, computes V = 4 Q / (pi D^2), Re and f, then iterates until the calculated h_f matches the allowable. For long pipelines the friction term dominates and minor losses (Section 5.3) are negligible; for short runs with many fittings the minor losses matter. The equivalent length method treats each fitting as a length of straight pipe contributing the same loss, simplifying hand calculation. Pumping power is P = rho * g * Q * h_f, the running cost that often dwarfs the pipe capital cost.",
            ],
            bullets: [
              "Darcy-Weisbach: h_f = f L V^2 / (2 g D); valid for laminar and turbulent.",
              "Laminar: f = 64/Re exactly; turbulent: f from Moody chart or Colebrook-White equation.",
              "Colebrook-White: 1/sqrt(f) = -2 log10(epsilon/(3.7 D) + 2.51/(Re sqrt(f))).",
              "Roughness epsilon: glass ~0, steel 0.046 mm, concrete 0.3-3 mm.",
              "Pumping power: P = rho g Q h_f; friction dominates long pipelines.",
            ],
            codeExample: {
              language: "python",
              caption: "Darcy-Weisbach head loss and pumping power",
              code: `# h_f = f L V^2 / (2 g D);  pumping power P = rho g Q h_f / eta
def darcy_weisbach(f, L, V, D, g=9.81):
    return f * L * V**2 / (2*g*D)

def pumping_power(rho, g, Q, h_f, eta=0.7):
    return rho*g*Q*h_f / eta   # eta = pump efficiency

h_f = darcy_weisbach(0.022, 300, 2, 0.100)
print(f"head loss over 300 m of 100 mm pipe: {h_f:.2f} m")

Re = 1000*2*0.100/0.001
print(f"Re = {Re:.0f} -> {'turbulent' if Re>4000 else 'laminar'}")

P = pumping_power(1000, 9.81, 0.02, 20)
print(f"pump shaft power for Q=0.02 m^3/s, h_f=20 m: {P/1000:.1f} kW (eta=0.7)")
`,
            },
            diagram: {
              kind: "pipeline",
              title: "Darcy-Weisbach pipe-sizing workflow",
              caption:
                "Pick D, compute V and Re, find f, compute h_f, iterate until h_f matches the allowable.",
              stages: [
                { label: "Pick trial diameter D", note: "from required Q" },
                { label: "Compute V = 4Q/(pi D^2)", note: "continuity" },
                { label: "Compute Re = rho V D / mu", note: "regime" },
                { label: "Find f (64/Re or Moody)", note: "laminar or turbulent" },
                { label: "Compute h_f = f L V^2/(2 g D)", note: "iterate to allowable" },
              ],
            },
            callout: {
              type: "tip",
              title: "Compute Re before reaching for Moody",
              body: "Always compute Re first. If Re < 2000, use f = 64/Re directly - no chart needed. If Re > 4000, use the Moody chart or Colebrook-White with the correct epsilon/D curve. Picking f at the wrong curve or in the wrong regime is the top Darcy-Weisbach error.",
            },
            keyTerms: [
              { term: "Darcy-Weisbach equation", definition: "h_f = f L V^2 / (2 g D); the head loss due to pipe friction; valid for laminar and turbulent flow." },
              { term: "Friction factor", definition: "f, dimensionless; 64/Re for laminar flow, from Moody or Colebrook-White for turbulent flow." },
              { term: "Relative roughness", definition: "epsilon/D, the ratio of pipe wall roughness height to diameter; sets the turbulent friction factor." },
            ],
            examQuestions: [
              {
                q: "State the Darcy-Weisbach equation and explain each term. Discuss how the friction factor varies with Reynolds number and relative roughness, referencing the Moody chart. Water flows at 2 m/s through 300 m of 100 mm diameter commercial steel pipe (epsilon = 0.046 mm). Find the head loss (take f = 0.022).",
                marks: 7,
                outline: [
                  "State Darcy-Weisbach: h_f = f L V^2 / (2 g D); valid for laminar and turbulent.",
                  "Laminar: f = 64/Re exactly; derived from parabolic profile.",
                  "Turbulent: f depends on Re and epsilon/D; from Moody or Colebrook.",
                  "State Colebrook-White equation.",
                  "Compute: V = 2 m/s, D = 0.1 m, L = 300 m, f = 0.022.",
                  "h_f = 0.022 * 300 * 4 / (2 * 9.81 * 0.1) = 13.46 m.",
                  "Pumping power P = rho g Q h_f for system sizing.",
                ],
              },
              {
                q: "State the Colebrook-White equation.",
                marks: 2,
              },
              {
                q: "Calculate the pumping power for Q = 0.02 m^3/s and h_f = 20 m of water (eta = 0.7).",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Minor losses in pipes",
            body: [
              "Minor losses are the head losses caused by local disturbances in a pipe: entrances, exits, bends, valves, expansions and contractions. Each is expressed as h_m = K * V^2 / (2 g), where K is a loss coefficient determined empirically for the fitting. Although each individual loss is minor compared with friction over a long run, in short systems with many fittings they can dominate. The sudden expansion from a small to a large pipe has K = (1 - A1/A2)^2 from momentum analysis; the sudden contraction has K about 0.5 (1 - A2/A1) for sharp edges.",
              "Typical loss coefficients are tabulated in references. A sharp-edged entrance from a reservoir into a pipe has K = 0.5; a well-rounded entrance 0.05 to 0.1; a sudden exit into a reservoir K = 1.0 (all kinetic energy lost). A 90 deg threaded elbow has K about 1.5, a 90 deg smooth bend about 0.3 to 0.9 depending on radius, a fully open gate valve 0.15 to 0.2, a globe valve 6 to 10 when open. Check valves, foot valves, and fittings such as tees all have tabulated values. Engineers sum K for all fittings in a line and add h_m to the friction loss.",
              "The equivalent-length method converts each fitting into a length of straight pipe of the same diameter that would cause the same loss: L_eq / D = K / f. With f about 0.02, a 90 deg elbow with K = 1.5 has L_eq/D = 75, so a 50 mm elbow equals 3.75 m of pipe. The method simplifies hand calculations when the friction factor is roughly constant across the line. For systems with widely varying pipe sizes, summing K directly is more accurate. Pump and valve selection, network analysis and pump-curve matching all require an honest accounting of minor losses; ignoring them is a common design error.",
            ],
            bullets: [
              "Minor loss: h_m = K V^2 / (2 g), with K an empirical loss coefficient for the fitting.",
              "Sudden expansion: K = (1 - A1/A2)^2; sudden contraction: K about 0.5(1 - A2/A1).",
              "Entrance K: sharp 0.5, rounded 0.05-0.1; exit K: 1.0 (all KE lost).",
              "90 deg elbow: threaded K ~1.5, smooth bend 0.3-0.9; globe valve 6-10 when open.",
              "Equivalent length: L_eq / D = K / f; treats each fitting as straight pipe length.",
            ],
            table: {
              caption: "Typical minor loss coefficients K.",
              headers: ["Fitting", "K", "Note"],
              rows: [
                ["Sharp entrance", "0.5", "reservoir to pipe"],
                ["Rounded entrance", "0.05-0.1", "well-rounded bellmouth"],
                ["Sudden exit", "1.0", "all KE lost"],
                ["90 deg elbow (threaded)", "1.5", "standard fitting"],
                ["Globe valve (open)", "6-10", "high resistance valve"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Minor-loss families in a pipe system",
              caption:
                "Each branch is a category of fitting; K values come from standard tables.",
              start: "Local disturbance in a pipe",
              branches: [
                { label: "entrance or exit", outcome: "K = 0.5 sharp entrance; K = 1.0 sudden exit", good: true },
                { label: "bend or elbow", outcome: "K = 1.5 threaded 90 deg; 0.3-0.9 smooth bend", good: true },
                { label: "valve", outcome: "K = 0.15 gate; 6-10 globe", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Minor losses dominate short systems",
              body: "In a long pipeline (hundreds of metres) friction dominates and minor losses are negligible. In a short run with many fittings (a pump station, a cooling-water manifold) minor losses can exceed friction. Always sum K for every fitting; ignoring them in short systems is a classic design error.",
            },
            keyTerms: [
              { term: "Minor loss", definition: "Head loss from a local disturbance such as an entrance, exit, bend or valve; h_m = K V^2 / (2 g)." },
              { term: "Loss coefficient", definition: "K, an empirical dimensionless coefficient for a fitting; tabulated in references." },
              { term: "Equivalent length", definition: "L_eq/D = K/f; the length of straight pipe causing the same loss as a fitting." },
            ],
            examQuestions: [
              {
                q: "Define minor losses in pipes and write the general expression. Give typical K values for entrance, exit, bend and valve. A pipe system has two 90 deg elbows (K = 1.5 each), a gate valve (K = 0.2) and an exit (K = 1.0). If V = 2 m/s, find the total minor head loss.",
                marks: 7,
                outline: [
                  "Define minor loss: h_m = K V^2 / (2 g), with K empirical for each fitting.",
                  "Sudden expansion K = (1 - A1/A2)^2; contraction K ~ 0.5(1 - A2/A1).",
                  "Tabulate: entrance 0.5 sharp, 0.05 rounded; exit 1.0; elbow 1.5; gate valve 0.2.",
                  "Sum K for the system: 2*1.5 + 0.2 + 1.0 = 4.2.",
                  "h_m = 4.2 * 4 / (2*9.81) = 0.857 m.",
                  "Equivalent length L_eq/D = K/f; treats fitting as pipe.",
                  "Note when minor losses matter (short systems with many fittings).",
                ],
              },
              {
                q: "What is the loss coefficient for a sudden expansion in terms of area ratio?",
                marks: 2,
              },
              {
                q: "Explain the equivalent-length method with the formula L_eq/D = K/f.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Pipes in series and parallel; water hammer",
            body: [
              "Pipes in series connect end to end so the same flow passes through each, with total head loss equal to the sum of losses in each pipe. For three pipes of lengths L1, L2, L3 and diameters D1, D2, D3, the flow Q is the same in all, but velocities differ: V_i = 4Q / (pi D_i^2). The total head loss is h_f1 + h_f2 + h_f3 plus the minor losses at junctions. The equivalent pipe carrying the same Q with the same total loss satisfies f_eq L_eq V_eq^2 / (2 g D_eq) = sum of losses, used to reduce compound systems to a single pipe.",
              "Pipes in parallel branch from a common junction and rejoin downstream, so the head loss across each branch is the same while the total flow is the sum of branch flows. For two parallel pipes between the same nodes, h_f1 = h_f2 and Q_total = Q1 + Q2. Solving requires writing Darcy-Weisbach for each branch with the common head loss, solving for Q_i in terms of h, and summing to relate h to Q_total. Parallel layouts increase capacity and redundancy: municipal water networks and cooling-water circuits rely on parallel mains so a section can be isolated without stopping service.",
              "Water hammer is the pressure surge caused by a rapid change in flow velocity, such as sudden valve closure. When a valve shuts, the kinetic energy of the moving fluid converts into a pressure wave that travels up the pipe at the speed of sound in the fluid, c = sqrt(K/rho) reduced by pipe elasticity, reflecting back and forth until friction damps it. The pressure rise is Delta p = rho * a * Delta V, with a the wave speed (often 1000-1400 m/s in water mains). Slow closure and surge tanks reduce water hammer; ignoring it has burst penstocks and cracked valve housings.",
            ],
            bullets: [
              "Pipes in series: same Q through all; total head loss = sum of losses in each pipe.",
              "Pipes in parallel: same head loss across branches; total Q = sum of branch flows.",
              "Series equivalent pipe: f_eq L_eq V_eq^2/(2 g D_eq) = sum of losses.",
              "Water hammer: Delta p = rho a Delta V; wave speed a = sqrt(K/rho) reduced by pipe elasticity.",
              "Mitigation: slow-closing valves, air vessels, surge tanks.",
            ],
            codeExample: {
              language: "python",
              caption: "Two parallel pipes between reservoirs: h_f1 = h_f2 = H; Q = Q1 + Q2",
              code: `import math
# Parallel pipes: V_i = sqrt(2 g D_i H / (f L));  Q_i = A_i V_i
def parallel_Q(D_mm, L, f, H, g=9.81):
    D = D_mm/1000
    A = math.pi*D**2/4
    V = math.sqrt(2*g*D*H/(f*L))
    return V*A, V

H, L, f = 10, 500, 0.02
Q1, V1 = parallel_Q(200, L, f, H)
Q2, V2 = parallel_Q(300, L, f, H)
print(f"pipe 1 (200 mm): V = {V1:.2f} m/s, Q = {Q1*1000:.1f} L/s")
print(f"pipe 2 (300 mm): V = {V2:.2f} m/s, Q = {Q2*1000:.1f} L/s")
print(f"total Q = {(Q1+Q2)*1000:.1f} L/s")
`,
            },
            diagram: {
              kind: "compare",
              title: "Pipes in series vs pipes in parallel",
              caption:
                "Same flow summed losses vs same loss summed flows - two complementary layouts.",
              left: {
                heading: "Pipes in series",
                items: [
                  "Same Q through every pipe",
                  "Velocities differ with area",
                  "Total head loss = sum of h_fi",
                  "Equivalent pipe replaces the line",
                  "Use: long transmission mains",
                ],
              },
              right: {
                heading: "Pipes in parallel",
                items: [
                  "Same head loss across each branch",
                  "Total Q = sum of Q_i",
                  "Capacity and redundancy",
                  "Solve h_fi = h for each branch",
                  "Use: water networks, cooling circuits",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Water hammer can burst pipes",
              body: "A sudden valve closure in a 300 mm water main at 3 m/s raises pressure by rho * a * Delta V = 1000 * 1200 * 3 = 3.6 MPa - enough to burst the line. Always specify slow-closing valves or surge tanks in long penstocks; the water-hammer formula Delta p = rho a Delta V is worth memorising.",
            },
            keyTerms: [
              { term: "Pipes in series", definition: "Pipes connected end to end; same flow through all, total head loss is the sum of individual losses." },
              { term: "Pipes in parallel", definition: "Pipes branching between common nodes; same head loss across each branch, total flow is the sum of branch flows." },
              { term: "Water hammer", definition: "Pressure surge from rapid flow-velocity change; Delta p = rho a Delta V with a the wave speed." },
            ],
            examQuestions: [
              {
                q: "Distinguish between pipes in series and pipes in parallel. Derive the conditions for flow and head loss in each. Two parallel pipes of 200 mm and 300 mm diameter, each 500 m long, carry water between two reservoirs with head difference 10 m. Find the total flow (take f = 0.02 for both).",
                marks: 7,
                outline: [
                  "Series: same Q through all pipes; total h_f = sum h_fi; velocities differ by area.",
                  "Parallel: same h_f across branches; total Q = sum of branch Q_i.",
                  "Solve parallel: write h_f = f L V^2/(2 g D) for each; express V in terms of h.",
                  "For each pipe: V = sqrt(2 g D h / (f L)); Q = A V.",
                  "Pipe 1: V1 = sqrt(2*9.81*0.2*10/(0.02*500)) = 1.98 m/s; Q1 = 0.062 m^3/s.",
                  "Pipe 2: V2 = sqrt(2*9.81*0.3*10/(0.02*500)) = 2.43 m/s; Q2 = 0.172 m^3/s.",
                  "Total Q = 0.234 m^3/s; mention water-hammer formula for penstocks.",
                ],
              },
              {
                q: "Define water hammer and give the formula for pressure rise.",
                marks: 2,
              },
              {
                q: "State three methods of reducing water hammer in a penstock.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Boundary layer basics",
            body: [
              "The boundary layer is the thin region near a solid wall where viscosity dominates and velocity rises from zero at the wall (the no-slip condition) to the free-stream value within a short distance. Prandtl's boundary-layer theory resolves the paradox that Euler's inviscid equations predict zero drag on a body, while real bodies experience drag: outside the layer the inviscid solution holds, inside it viscosity matters. For a flat plate in a uniform stream U, the boundary layer thickness delta grows as delta proportional to sqrt(nu x / U) in laminar flow, with x the distance from the leading edge.",
              "The boundary layer on a flat plate starts laminar at the leading edge, transitions to turbulent at a critical Reynolds number based on x of about 5 x 10^5, and continues thickening. In the laminar layer the velocity profile is approximately cubic, the wall shear stress tau_w = 0.332 rho U^2 / sqrt(Re_x), and the local skin-friction coefficient C_f = 0.664 / sqrt(Re_x). In the turbulent layer the profile is much fuller, the layer thicker, but the wall shear is higher because of momentum transfer by eddies; C_f for a smooth plate is about 0.059 / Re_x^0.2.",
              "Boundary-layer separation causes form drag on bluff bodies. Where the external pressure rises in the flow direction (adverse pressure gradient), the slow fluid near the wall can be brought to rest and pushed backward, detaching the layer from the surface and forming a wake. Streamlining delays separation by keeping the pressure recovery gradual; a sphere, a cylinder and a flat plate normal to flow all suffer early separation and large wakes. Suction or blowing through the surface, vortex generators and dimples (as on a golf ball) manipulate the boundary layer to delay separation and reduce drag. The theory underpins wing design, vehicle aerodynamics and turbine blade performance.",
            ],
            bullets: [
              "Boundary layer: thin region near a wall where viscosity matters; no-slip at the wall.",
              "Outside the layer: inviscid (Euler) flow; inside: viscous (Prandtl) flow.",
              "Laminar layer on flat plate: delta proportional to sqrt(nu x / U); C_f = 0.664/sqrt(Re_x).",
              "Transition at Re_x about 5 x 10^5; turbulent layer is thicker with higher wall shear.",
              "Separation in adverse pressure gradient causes form drag; streamlining delays it.",
            ],
            table: {
              caption: "Boundary layer on a flat plate.",
              headers: ["Region", "Re_x range", "Velocity profile", "C_f"],
              rows: [
                ["Laminar", "< 5 x 10^5", "approximately cubic", "0.664/sqrt(Re_x)"],
                ["Transition", "about 5 x 10^5", "wavy, intermittent", "rising"],
                ["Turbulent", "> 5 x 10^5", "full, sharp wall drop", "0.059/Re_x^0.2"],
                ["Separation", "adverse pressure gradient", "backflow near wall", "form drag rises"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Vertical structure of a boundary layer on a flat plate",
              caption:
                "Top to bottom: free stream, turbulent boundary layer, laminar sublayer, viscous sublayer, wall.",
              layers: [
                { label: "Free stream U", note: "inviscid Euler solution" },
                { label: "Turbulent boundary layer", note: "fuller profile, eddies mix" },
                { label: "Laminar (viscous) sublayer", note: "thin, linear profile" },
                { label: "Wall (no-slip)", note: "velocity zero at the surface" },
              ],
            },
            callout: {
              type: "tip",
              title: "No-slip is the boundary condition",
              body: "The no-slip condition says fluid velocity equals wall velocity at the surface - zero for a stationary wall. This single condition generates the entire boundary layer and the shear stress that produces skin-friction drag. State it explicitly whenever a question asks about drag or wall shear.",
            },
            keyTerms: [
              { term: "Boundary layer", definition: "The thin region near a wall where viscosity matters and velocity rises from zero at the wall to the free stream." },
              { term: "Skin friction coefficient", definition: "C_f = tau_w / (0.5 rho U^2); laminar 0.664/sqrt(Re_x), turbulent about 0.059/Re_x^0.2." },
              { term: "Flow separation", definition: "Detachment of the boundary layer from the wall in an adverse pressure gradient, producing a wake and form drag." },
            ],
            examQuestions: [
              {
                q: "Define the boundary layer and state the no-slip condition. Describe the development of a boundary layer on a flat plate from the leading edge, including transition. Distinguish skin-friction drag from form drag and explain the role of separation.",
                marks: 7,
                outline: [
                  "Define boundary layer: thin region near wall where viscosity matters.",
                  "State no-slip condition: velocity zero at wall.",
                  "Laminar BL: delta ~ sqrt(nu x/U); Re_x = U x / nu.",
                  "Transition at Re_x ~ 5e5; turbulent BL thicker, fuller profile.",
                  "Skin friction: C_f = 0.664/sqrt(Re_x) laminar; ~0.059/Re_x^0.2 turbulent.",
                  "Form drag from separation in adverse pressure gradient.",
                  "Streamlining delays separation; mention applications: wings, vehicles, turbines.",
                ],
              },
              {
                q: "State the no-slip condition.",
                marks: 2,
              },
              {
                q: "Estimate the laminar boundary layer thickness 1 m from the leading edge for air at 30 m/s (nu = 1.5e-5 m^2/s).",
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
        "RGPV CE-501 papers distribute marks across all five units with Bernoulli applications, hydrostatic forces and pipe-flow analysis carrying the heaviest numerical load. Allocate revision time in the same ratio, and reserve one full practice slot for Darcy-Weisbach and Bernoulli numericals.",
      ],
      weightedTopics: [
        { topic: "Bernoulli's equation and applications (venturimeter, orifice, pitot)", weight: "10-14 marks", note: "Almost guaranteed; practise 6-8 full solves with manometer conversions." },
        { topic: "Hydrostatic forces on plane and curved surfaces", weight: "8-10 marks", note: "Show centroid and centre of pressure; include the I_G term for full marks." },
        { topic: "Pipe flow: Darcy-Weisbach, minor losses, series and parallel", weight: "8-10 marks", note: "Numericals on head loss and pumping power are routine; carry Moody values." },
        { topic: "Fluid properties: viscosity, surface tension, bulk modulus", weight: "6-8 marks", note: "Definitions and short numericals; Newton's law and capillary rise formulae." },
        { topic: "Reynolds experiment, laminar vs turbulent, boundary layer", weight: "6-8 marks", note: "Definitions and regimes; boundary layer basics and separation." },
        { topic: "Continuity and momentum equation, forces on bends", weight: "6-8 marks", note: "Vector momentum resolution in x and y; control volume sketches." },
        { topic: "Manometers and pressure measurement", weight: "4-6 marks", note: "Mercury-water conversions; sign conventions." },
        { topic: "Stream function, velocity potential, flow nets", weight: "4-6 marks", note: "Cauchy-Riemann relations and Laplace equation." },
        { topic: "Buoyancy and stability of floating bodies", weight: "4-6 marks", note: "Archimedes principle and metacentric height GM." },
        { topic: "Pascal's law and hydraulic systems", weight: "2-4 marks", note: "Short numericals on the hydraulic press; mechanical advantage." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - fluid properties", tasks: ["Definitions and classifications; continuum and density numericals", "Newton's law and viscosity problems (4 solves)", "Surface tension, capillary rise and bulk modulus numericals"] },
        { week: "Week 2", focus: "Unit II - fluid statics", tasks: ["Pressure, Pascal's law, manometer readings (5 problems)", "Hydrostatic force and centre of pressure on plane surfaces (4)", "Curved surfaces, buoyancy and metacentric height (3)"] },
        { week: "Week 3", focus: "Unit III - fluid kinematics", tasks: ["Lagrangian vs Eulerian; material derivative problems", "Flow classification; continuity equation in differential form", "Stream function, velocity potential and flow nets"] },
        { week: "Week 4", focus: "Unit IV - fluid dynamics", tasks: ["Euler equation and Bernoulli applications (5 numericals)", "Venturimeter, orifice meter and pitot tube problems (4)", "Momentum equation and forces on pipe bends (3)"] },
        { week: "Week 5", focus: "Unit V - flow through pipes", tasks: ["Reynolds experiment, laminar-turbulent regime and profiles", "Darcy-Weisbach and minor losses (5 problems)", "Pipes in series and parallel, water hammer, boundary layer basics"] },
        { week: "Week 6", focus: "Full revision and practice papers", tasks: ["Two full past papers under exam timing", "Re-solve all 7-mark outlines from memory", "Tabulate formulae, coefficients and units for quick recall"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Re-derive Bernoulli, Euler and Darcy-Weisbach from memory - if you can write them cold you can answer 7-mark questions in any twist.",
        "Memorise the small constants: rho_water 1000 kg/m^3, rho_Hg 13600 kg/m^3, g 9.81 m/s^2, mu_water 0.001 Pa-s.",
        "Tabulate typical K values for minor losses and discharge coefficients (venturimeter 0.97, orifice 0.6, pitot 0.98-1.0).",
        "Sketch every device from memory: venturimeter, orifice meter, pitot tube, U-tube manometer, hydraulic press - labelled diagrams earn easy marks.",
        "Walk through two 7-mark numericals end-to-end (Bernoulli on a contraction, Darcy-Weisbach on a long pipe) including units and head loss.",
        "Sleep on time - fluid mechanics numericals punish arithmetic errors that fatigue produces.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Write the formula before substituting numbers - method marks live in the formula even when arithmetic slips later.",
        "Always state units and convert pressures (kPa to Pa, mm Hg to m of water using rho ratios) before substituting.",
        "For Bernoulli problems, write the head equation with all three terms at both sections and explicitly note which terms are zero.",
        "For pipe bend forces, draw the control volume and resolve momentum in x and y separately; pressure forces on the openings matter.",
        "Time-box: 2/3-mark questions in 4-6 minutes, 7-mark questions in 14-18 minutes, keep the last 10 minutes for the verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Mixing gauge and absolute pressure - Bernoulli uses the same reference throughout; pick one and stick to it.",
        "Forgetting the manometric density ratio - a mercury reading of h mm equals h*(13.6 - 1) mm of water, not h*13.6.",
        "Omitting the I_G/(A h_bar) term in centre of pressure - that term is the difference between centroid and centre of pressure.",
        "Using f = 64/Re in turbulent flow, or reading f off Moody at the wrong roughness curve.",
        "Confusing kinematic viscosity nu (m^2/s) with dynamic viscosity mu (Pa s) in Re = rho V L / mu = V L / nu.",
        "Reporting metacentric height without sign - positive is stable, negative is unstable; sign matters.",
      ],
    },
  ],
};
