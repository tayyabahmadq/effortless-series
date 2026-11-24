/**
 * Academics - RGPV Civil Engineering 3rd-semester subject: CE-305 Strength of Materials.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce305: AcademicSubject = {
  id: "ce-305",
  code: "CE-305",
  title: "Strength of Materials",
  semester: "III Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to strength of materials for civil engineering: simple stresses and strains, shear force and bending moment diagrams, bending and shear stresses in beams, torsion of shafts and buckling of columns, and thin cylinders with beam deflection methods.",
  description:
    "Five units walk from stress, strain and Hooke's law through Poisson's ratio, volumetric strain and composite and thermal stresses; into shear force and bending moment diagrams for cantilever, simply supported and overhanging beams with the point of contraflexure; through the flexure formula M/I = f/y = E/R and the section modulus to bending and shear stress distributions in rectangular, circular and I-sections; across torsion of circular shafts, power transmission and Euler's and Rankine's column theories; and finally to thin cylinders and spheres, wire winding and the Macaulay and moment area methods for beam deflection. Every section pairs the formal statement with a worked example, a redrawable diagram and the exam questions RGPV actually asks.",
  accentColor: "#ef4444",
  emoji: "SM",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Simple Stresses and Strains",
      summary:
        "The substrate of strength of materials: stress and strain, Hooke's law and Young's modulus, Poisson's ratio connecting lateral and longitudinal strain, volumetric strain and the elastic constants, bars of varying and composite sections sharing load, and thermal stresses from restrained expansion.",
      chapter: {
        number: "01",
        title: "Simple Stresses and Strains",
        intro:
          "Unit I builds the vocabulary every later unit borrows: stress as force per area, strain as deformation per length, Hooke's law tying the two through Young's modulus, Poisson's ratio linking transverse and axial response, the elastic constants of an isotropic solid, the analysis of stepped and composite bars, and thermal stress when free expansion is restrained.",
        inOneBreath:
          "Stress sigma = P/A; strain epsilon = delta L/L; Hooke's law sigma = E epsilon within the elastic limit; Young's modulus E is the slope of the linear portion of the stress-strain curve; Poisson's ratio nu = -lateral strain / longitudinal strain around 0.3 for metals; the four elastic constants E, G, K, nu need only two independent because E = 2 G (1 + nu) and E = 3 K (1 - 2 nu); volumetric strain e_v = e_x + e_y + e_z; bars of varying sections sum P L_i / (A_i E); composite bars share load in proportion to stiffness A E; and thermal stress sigma_t = alpha E delta T appears whenever expansion is prevented.",
        sections: [
          {
            number: "1.1",
            title: "Stress, strain and Hooke's law",
            body: [
              "When a body is subjected to external forces, internal forces develop to keep it in equilibrium. Stress is the intensity of those internal forces, defined as force per unit area and expressed in pascals or newtons per square millimetre. Direct stress arises when the force acts normal to the section and is calculated as sigma = P / A where P is the axial load and A is the cross-sectional area. Strain is the corresponding deformation per unit length, a dimensionless ratio given by epsilon = delta L / L where delta L is the change in length and L is the original gauge length. Stress and strain are the two fundamental quantities on which all of strength of materials rests.",
              "Hooke's law states that within the elastic limit, stress is directly proportional to strain. Plotting stress on the vertical axis and strain on the horizontal gives the familiar load-extension curve: a straight line from the origin up to the proportional limit, a slight knee at the elastic limit, then yielding, ultimate stress, and finally fracture. The slope of the straight portion is the modulus of elasticity, also called Young's modulus, denoted E. For structural steel E is about 200 GPa and for aluminium about 70 GPa. Hooke's law in equation form reads sigma = E * epsilon, and once any two of stress, strain and modulus are known the third follows immediately, the working tool of every member-sizing calculation.",
              "The complete stress-strain curve also defines a chain of named points the engineer must recognise: the proportional limit where linearity ends, the elastic limit beyond which permanent set remains, the upper and lower yield points characteristic of mild steel, the ultimate tensile stress which is the peak ordinate, and the breaking stress at fracture. Ductile materials such as mild steel show a long plastic plateau with necking before rupture; brittle materials such as cast iron rise almost linearly to fracture with no yield. The area under the curve up to fracture is the modulus of toughness, measuring energy absorbed, and the area up to the elastic limit is the modulus of resilience, the energy stored elastically per unit volume.",
            ],
            bullets: [
              "Stress sigma = P / A, force per unit area, unit pascal or N/mm^2.",
              "Strain epsilon = delta L / L, dimensionless deformation per unit length.",
              "Hooke's law: within the elastic limit, stress is proportional to strain, sigma = E * epsilon.",
              "Young's modulus E is the slope of the linear portion; steel ~200 GPa, aluminium ~70 GPa.",
              "Named points on the curve: proportional limit, elastic limit, yield, ultimate stress, breaking stress.",
            ],
            codeExample: {
              language: "python",
              caption: "Axial stress, strain and elongation of a steel bar.",
              code: `# Stress-strain calculation for an axially loaded steel bar
P = 50e3            # axial tensile load in newtons
A = 500e-6          # cross-sectional area in m^2 (500 mm^2)
L = 2.0             # original length in metres
E = 200e9           # Young's modulus for steel, pascals

stress = P / A
strain = stress / E
elongation = strain * L

print(f"Stress     = {stress/1e6:.2f} MPa")
print(f"Strain     = {strain:.6f}")
print(f"Elongation = {elongation*1000:.3f} mm")
`,
            },
            diagram: {
              kind: "flow",
              title: "From load to elongation in four steps",
              caption: "Each step is a single substitution into Hooke's law.",
              steps: [
                { label: "Apply axial load P", note: "tension or compression" },
                { label: "Compute stress sigma = P / A", note: "force per area" },
                { label: "Check elastic limit", note: "compare with yield stress" },
                { label: "Compute strain epsilon = sigma / E", note: "Hooke's law" },
                { label: "Compute elongation delta L = epsilon * L", note: "deformation of the bar" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch the curve before you compute",
              body: "Examiners award marks for labelling proportional limit, elastic limit, yield point, ultimate stress and breaking stress on the stress-strain sketch even when the question only asks for a number. Draw the curve with stress vertical and strain horizontal and mark the working point before quoting sigma = E * epsilon.",
            },
            keyTerms: [
              { term: "Stress", definition: "Force per unit area sigma = P / A, measured in pascals or N/mm^2." },
              { term: "Strain", definition: "Ratio of change in length to original length epsilon = delta L / L, dimensionless." },
              { term: "Hooke's law", definition: "Within the elastic limit, stress is directly proportional to strain; sigma = E * epsilon." },
            ],
            examQuestions: [
              {
                q: "Define stress and strain. State Hooke's law and explain the salient points on the stress-strain curve for a ductile material. A steel bar of 500 mm^2 cross-section carries 50 kN axial tension; taking E = 200 GPa, compute the stress and strain.",
                marks: 7,
                outline: [
                  "Define stress sigma = P/A and strain epsilon = delta L/L with units.",
                  "State Hooke's law: sigma = E * epsilon within the elastic limit.",
                  "Name proportional limit, elastic limit, upper and lower yield, ultimate stress, breaking stress.",
                  "Distinguish ductile (mild steel) from brittle (cast iron) by plateau and necking.",
                  "Compute stress = 50e3 / 500e-6 = 100 MPa.",
                  "Compute strain = 100e6 / 200e9 = 0.0005.",
                  "Mention modulus of resilience and toughness as areas under the curve.",
                ],
              },
              {
                q: "State Hooke's law and define Young's modulus with its unit.",
                marks: 2,
              },
              {
                q: "Distinguish between modulus of resilience and modulus of toughness with sketches.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Young's modulus, Poisson's ratio and lateral strain",
            body: [
              "When a tensile specimen is pulled, it lengthens in the direction of the load and simultaneously contracts in the two transverse directions. The ratio of lateral strain to longitudinal strain is a constant for each material, called Poisson's ratio and written as 1/m or nu. For most metals it lies between 0.25 and 0.30; cork carries nearly zero so it does not bulge when compressed as a bottle stopper; rubber approaches 0.5, the incompressible limit. Poisson's ratio is dimensionless and, with Young's modulus, fixes two of the four elastic constants that fully describe a homogeneous isotropic material; the other two are derivable, not separately measurable.",
              "The lateral strain follows immediately from the longitudinal strain and Poisson's ratio. If a bar of length L and diameter d elongates by delta L under axial tension, the diameter shrinks by delta d = -nu * (d / L) * delta L. The minus sign records the opposite sense: tension causes contraction across and compression causes expansion across. In design this contraction matters for fits and clearances: a long steel tie of a bridge, stretched a few millimetres along its axis, also narrows enough to loosen a poorly designed pin. Lateral strain is therefore never a side detail but a quantity carried alongside the longitudinal one in every complete elastic calculation.",
              "Young's modulus and Poisson's ratio together are the two independent elastic constants of an isotropic material; the shear modulus G and the bulk modulus K are derivable, not separately measurable. The relations are E = 2 G (1 + nu) and E = 3 K (1 - 2 nu), so once E and nu are read from a tension test, G and K follow. For steel with E = 200 GPa and nu = 0.3, G works out to about 77 GPa and K to about 167 GPa. This economy of constants is the theory's strength: a single tension test pins down the whole elastic response of a metal, and engineers carry small tables of E and nu rather than four independent constants.",
            ],
            bullets: [
              "Poisson's ratio nu = -lateral strain / longitudinal strain; 0.25 to 0.30 for metals, 0.5 for rubber, 0 for cork.",
              "Lateral strain = -nu * longitudinal strain; tension narrows, compression bulges.",
              "Diameter change under axial load: delta d = -nu * (d/L) * delta L.",
              "Two independent constants fix an isotropic material; E and nu from a tension test.",
              "Derived constants: E = 2 G (1 + nu) and E = 3 K (1 - 2 nu).",
            ],
            table: {
              caption: "Typical elastic constants for common engineering materials.",
              headers: ["Material", "E (GPa)", "nu", "G (GPa)", "K (GPa)"],
              rows: [
                ["Mild steel", "200", "0.30", "77", "167"],
                ["Cast iron", "100", "0.26", "40", "83"],
                ["Aluminium", "70", "0.33", "26", "69"],
                ["Brass", "100", "0.34", "37", "64"],
                ["Concrete", "25", "0.20", "10", "14"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Longitudinal vs lateral response under axial load",
              caption: "Poisson's ratio is the link that binds the two responses.",
              left: {
                heading: "Tension",
                items: [
                  "Bar lengthens: delta L > 0",
                  "Bar narrows: delta d < 0",
                  "Longitudinal strain > 0",
                  "Lateral strain < 0",
                  "Lateral = -nu * longitudinal",
                ],
              },
              right: {
                heading: "Compression",
                items: [
                  "Bar shortens: delta L < 0",
                  "Bar bulges: delta d > 0",
                  "Longitudinal strain < 0",
                  "Lateral strain > 0",
                  "Lateral = -nu * longitudinal",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Mind the sign",
              body: "Poisson's ratio is defined with a minus sign so that it is positive for ordinary materials. Forgetting the sign leads to a bar that 'bulges in tension', a classic slip. Always write lateral strain = -nu * longitudinal strain, then read off the physical sense separately.",
            },
            keyTerms: [
              { term: "Poisson's ratio", definition: "The ratio of lateral strain to longitudinal strain with a minus sign, denoted nu or 1/m, around 0.3 for metals." },
              { term: "Lateral strain", definition: "The transverse deformation per unit width, equal to -nu times the longitudinal strain." },
              { term: "Shear modulus G", definition: "The modulus of rigidity derived from E and nu by E = 2 G (1 + nu)." },
            ],
            examQuestions: [
              {
                q: "Define Poisson's ratio. Derive the relations between Young's modulus, shear modulus and bulk modulus for an isotropic material. A steel bar of 30 mm diameter and 2 m length carries 60 kN tension; with E = 200 GPa and nu = 0.3, find the longitudinal strain, lateral strain and change in diameter.",
                marks: 7,
                outline: [
                  "Define Poisson's ratio nu = -lateral strain / longitudinal strain.",
                  "State E = 2 G (1 + nu) and E = 3 K (1 - 2 nu) and derive G and K from them.",
                  "Compute area A = pi/4 * 30^2 = 706.86 mm^2.",
                  "Compute stress sigma = 60e3 / 706.86 = 84.88 MPa.",
                  "Longitudinal strain = sigma / E = 84.88 / 200e3 = 0.0004244.",
                  "Lateral strain = -nu * 0.0004244 = -0.0001273.",
                  "Diameter change = lateral strain * d = -0.0001273 * 30 = -0.00382 mm.",
                ],
              },
              {
                q: "State the range of Poisson's ratio for engineering materials and give the value for cork and rubber.",
                marks: 2,
              },
              {
                q: "Show that for an isotropic material E, G and K are not independent and derive any one relation.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Volumetric strain and elastic constants",
            body: [
              "When a body is stressed in three mutually perpendicular directions the volume changes by an amount that is the sum of the three linear strains, provided the strains are small. Volumetric strain, written e_v, equals e_x + e_y + e_z where each e is the linear strain in that direction. For a bar under uniaxial tension the longitudinal strain is sigma / E and the two lateral strains are -nu * sigma / E each, so e_v = sigma / E * (1 - 2 nu). Under hydrostatic pressure, where all three principal stresses are equal to p, the volumetric strain is 3 p (1 - 2 nu) / E, which when divided by p gives the bulk modulus K = E / [3 (1 - 2 nu)].",
              "Bulk modulus K measures a material's resistance to uniform compression: the higher the K, the smaller the volume change under a given pressure. For steel K is about 167 GPa and for water about 2.2 GPa, which is why water feels incompressible in daily life yet is far softer than steel in hydraulics. Shear modulus G, in parallel, measures resistance to shape change at constant volume. These two constants and Young's modulus and Poisson's ratio are linked by the two relations of the previous section; only two of the four are independent for a homogeneous isotropic material. A single tension test, by reading off E and nu, therefore fixes the entire elastic behaviour.",
              "The volumetric strain formula carries a key engineering consequence: when nu is 0.5 the volumetric strain vanishes and the material is incompressible, as rubber nearly is. For metals with nu around 0.3, the factor (1 - 2 nu) is 0.4, so under uniaxial tension a metal bar actually expands in volume by 40 percent of the longitudinal strain. This is why a stretched wire grows minutely in volume even as it thins in diameter. In soil mechanics and plasticity the incompressibility condition nu = 0.5 is enforced during plastic flow, an assumption that simplifies the theory of metal forming and gives the constant-volume rule of plastic deformation.",
            ],
            bullets: [
              "Volumetric strain e_v = e_x + e_y + e_z, the sum of the three linear strains.",
              "Under uniaxial stress: e_v = (sigma / E) * (1 - 2 nu).",
              "Under hydrostatic pressure p: e_v = 3 p (1 - 2 nu) / E = p / K.",
              "Bulk modulus K = E / [3 (1 - 2 nu)]; shear modulus G = E / [2 (1 + nu)].",
              "Incompressible material has nu = 0.5; volumetric strain then zero.",
            ],
            table: {
              caption: "Volumetric strain under three loading cases.",
              headers: ["Loading", "Stress state", "Volumetric strain", "Bulk modulus relation"],
              rows: [
                ["Uniaxial tension", "sigma along x", "(sigma / E)(1 - 2 nu)", "K = E / [3(1 - 2 nu)]"],
                ["Biaxial tension", "sigma along x and y", "(2 sigma / E)(1 - nu)", "as above"],
                ["Hydrostatic pressure", "p in all directions", "3p (1 - 2 nu) / E = p / K", "K = p / e_v"],
                ["Pure shear", "tau on faces", "0", "volume unchanged"],
                ["Incompressible (nu = 0.5)", "any stress state", "0", "K approaches infinity"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Four elastic constants and their relationships",
              caption: "Two are independent; the other two follow by derivation.",
              layers: [
                { label: "Young's modulus E (independent)", note: "from tension test" },
                { label: "Poisson's ratio nu (independent)", note: "from tension test" },
                { label: "Shear modulus G = E / [2 (1 + nu)]", note: "derived" },
                { label: "Bulk modulus K = E / [3 (1 - 2 nu)]", note: "derived" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two constants, one test",
              body: "Examiners expect the four-constant economy stated clearly: a homogeneous isotropic material needs only two independent elastic constants, and a single tension test reading E and nu suffices. Always write the two derivations E = 2 G (1 + nu) and E = 3 K (1 - 2 nu) before computing volumetric strain; the derivations are worth two marks in any 7-mark question on elastic constants.",
            },
            keyTerms: [
              { term: "Volumetric strain", definition: "Sum of three mutually perpendicular linear strains, e_v = e_x + e_y + e_z." },
              { term: "Bulk modulus K", definition: "Ratio of hydrostatic stress to volumetric strain, K = E / [3 (1 - 2 nu)]." },
              { term: "Shear modulus G", definition: "Modulus of rigidity, G = E / [2 (1 + nu)], measuring resistance to shape change at constant volume." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for volumetric strain of a body subjected to three mutually perpendicular stresses. Show that the bulk modulus is given by K = E / [3 (1 - 2 nu)]. For steel with E = 200 GPa and nu = 0.3, compute K and G.",
                marks: 7,
                outline: [
                  "Write e_v = e_x + e_y + e_z with each e = (sigma - nu (sigma_y + sigma_z)) / E.",
                  "For hydrostatic case sigma_x = sigma_y = sigma_z = p, e_v = 3p (1 - 2 nu) / E.",
                  "Bulk modulus K = p / e_v = E / [3 (1 - 2 nu)].",
                  "Substitute E = 200 GPa, nu = 0.3: K = 200 / (3 * 0.4) = 167 GPa.",
                  "Shear modulus G = E / [2 (1 + nu)] = 200 / (2 * 1.3) = 77 GPa.",
                  "Note nu = 0.5 gives infinite K (incompressible).",
                  "State that only two of E, G, K, nu are independent for an isotropic material.",
                ],
              },
              {
                q: "Define bulk modulus and give its unit.",
                marks: 2,
              },
              {
                q: "Prove that for an incompressible material Poisson's ratio equals 0.5.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Bars of varying sections and composite bars",
            body: [
              "A bar of varying cross-section is one whose area changes along its length in steps: a steel shaft stepped down from 50 mm to 25 mm, a concrete column with a pedestal cap, a bolt with a shank and a threaded grip. Under a constant axial load P each segment of length L_i and area A_i deforms by P L_i / (A_i E), and the total elongation is the sum delta = (P / E) * sum of L_i / A_i. The stress in each segment is P / A_i, so the smallest area carries the largest stress and is the design-critical zone. The calculation is straightforward but the principle is important: a bar of varying section fails where its area is least.",
              "A composite bar is made of two or more materials rigidly joined at the ends so that they share the same elongation. The classic example is a steel rod encased in concrete, or a copper tube bonded to a steel tube. Equal elongation of the two materials forces the load to partition inversely as their stiffnesses: if A_s, E_s denote the steel and A_c, E_c the copper, then P_s + P_c = P (total) and P_s L / (A_s E_s) = P_c L / (A_c E_c) (equal strain), giving P_s / P_c = A_s E_s / (A_c E_c). The stiffer material carries the larger share of the load, exactly as the stiffer spring in parallel absorbs more force.",
              "Composite construction dominates civil engineering. Reinforced concrete is the everyday case: concrete takes compression but is weak in tension, so steel bars carry the tensile component. The modular ratio m = E_s / E_c, about 18 for ordinary concrete, converts the steel area into an equivalent concrete area, and the transformed section is analysed as a single material. The same modular-ratio trick handles flitched beams, bimetallic strips and reinforced brickwork. Temperature adds a twist: when two bonded materials expand differently, differential thermal strain induces internal stress even without external load, the principle behind thermostat bimetals and a frequent exam problem.",
            ],
            bullets: [
              "Varying-section bar: delta = (P / E) * sum of L_i / A_i; total elongation sums segment-wise.",
              "Stress per segment sigma_i = P / A_i; smallest area carries the largest stress.",
              "Composite bar: equal elongation, load splits as P_s / P_c = A_s E_s / (A_c E_c).",
              "Stiffer material carries the larger load share; springs in parallel analogy.",
              "Modular ratio m = E_s / E_c transforms composite section to one material; about 18 for steel-concrete.",
            ],
            table: {
              caption: "Load sharing in a steel-copper composite bar (A_s = 200 mm^2, A_c = 400 mm^2).",
              headers: ["Property", "Steel", "Copper", "Ratio"],
              rows: [
                ["E (GPa)", "200", "100", "2:1"],
                ["A (mm^2)", "200", "400", "1:2"],
                ["AE (kN)", "40", "40", "1:1"],
                ["Load share", "0.5 P", "0.5 P", "equal"],
                ["Stress (P/A)", "P/200", "P/400", "2:1 steel higher"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Solving a varying-section composite bar",
              caption: "Four stages carry any stepped or composite bar problem to a number.",
              stages: [
                { label: "List segments L_i, A_i, E_i", note: "geometry and material" },
                { label: "Apply compatibility", note: "equal elongation" },
                { label: "Apply equilibrium", note: "sum of P_i = total P" },
                { label: "Solve load shares", note: "inverse to stiffness" },
                { label: "Sum elongations", note: "delta = sum P_i L_i / (A_i E_i)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two equations, two unknowns",
              body: "Composite-bar problems always hinge on two equations: equilibrium (loads add to the total) and compatibility (equal elongation). Write these two lines before any algebra and the answer is mechanical. Common slip: forgetting that strain is equal, not stress - steel and copper in a composite bar carry different stresses in the ratio of their moduli.",
            },
            keyTerms: [
              { term: "Composite bar", definition: "Two or more materials rigidly joined so they share the same elongation under load." },
              { term: "Modular ratio", definition: "The ratio m = E_s / E_c used to transform one material's area into an equivalent area of the other." },
              { term: "Varying-section bar", definition: "A bar whose cross-section changes stepwise along its length, elongated by summing P L_i / (A_i E_i)." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for elongation of a bar of varying cross-section subjected to axial load. A bar has three segments in series: L1 = 200 mm, A1 = 400 mm^2; L2 = 300 mm, A2 = 200 mm^2; L3 = 200 mm, A3 = 300 mm^2. With E = 200 GPa and P = 40 kN, find the total elongation and the maximum stress.",
                marks: 7,
                outline: [
                  "State delta = (P / E) * sum of L_i / A_i.",
                  "Compute sum L_i / A_i = 200/400 + 300/200 + 200/300 = 0.5 + 1.5 + 0.667 = 2.667 /mm.",
                  "Elongation = 40e3 / 200e3 * 2.667 = 0.5334 mm.",
                  "Stress per segment = P / A_i: 100, 200, 133.3 MPa.",
                  "Maximum stress = 200 MPa in segment 2 (smallest area).",
                  "Mention design implication: smallest area governs failure.",
                  "Verify units: kN / (GPa * mm^2) gives mm.",
                ],
              },
              {
                q: "Define a composite bar and state the condition used to find the load shared by each material.",
                marks: 2,
              },
              {
                q: "A steel rod and a copper tube of equal length form a composite bar. Show that the load shared by steel is P_s = P * A_s E_s / (A_s E_s + A_c E_c).",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Thermal stresses",
            body: [
              "When a material is heated it expands, and when cooled it contracts, by an amount delta L = alpha * L * delta T where alpha is the coefficient of linear expansion, L the original length and delta T the temperature change. If this expansion is free to occur, no stress develops. If it is prevented - by rigid walls at both ends, by being built into a frame, or by being bonded to a material of different expansion - thermal stress appears. The stress equals what would be needed to compress the bar back by the amount it expanded: sigma_t = alpha * E * delta T, tensile when the bar is cooled and prevented from shrinking, compressive when heated and prevented from expanding.",
              "Thermal stress is invisible but devastating: a restrained steel rail in summer sun at delta T = 50 deg C carries sigma = 12e-6 * 200e3 * 50 = 120 MPa, more than half its yield. Thermal buckling of rails is the railway engineer's classic fear. Composite materials develop internal thermal stress even when the assembly is externally free: a steel-copper bimetal bonded at temperature T_0 and heated by delta T develops stress in each material because they want to expand by different amounts but are forced to a common length. The equilibrium equation balances forces and the compatibility equation forces a common strain, giving two linear equations for the two unknown stresses.",
              "In design, thermal stress is handled by providing expansion joints, by flexible supports, or by selecting materials with matching expansion coefficients. A long bridge has rollers at one end to release longitudinal movement; overhead pipelines carry U-bends to absorb growth; concrete roads are jointed every few metres. Where release is impossible, the stress is computed and the section sized to carry it. The shrinkage of concrete during curing is a thermal-like effect producing internal tensile stress that cracks the surface, controlled by limit on pour size and by reinforcement. Temperature thus enters strength of materials not as a load but as a strain source converted to stress by restraint.",
            ],
            bullets: [
              "Free thermal expansion delta L = alpha * L * delta T; no stress if free.",
              "Fully restrained thermal stress sigma_t = alpha * E * delta T; sign follows restraint.",
              "Steel at delta T = 50 deg C: sigma = 12e-6 * 200e3 * 50 = 120 MPa, near half yield.",
              "Composite thermal stress: equal strain, forces balance; bimetal thermostat principle.",
              "Design relief: expansion joints, rollers, U-bends, matching alpha; shrinkage of concrete.",
            ],
            table: {
              caption: "Thermal stress sigma = alpha E delta T for fully restrained bars at delta T = 50 deg C.",
              headers: ["Material", "alpha (per deg C)", "E (GPa)", "sigma (MPa)"],
              rows: [
                ["Mild steel", "12e-6", "200", "120"],
                ["Aluminium", "23e-6", "70", "80"],
                ["Copper", "17e-6", "100", "85"],
                ["Concrete", "10e-6", "25", "12.5"],
                ["Cast iron", "11e-6", "100", "55"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Sources and sinks of thermal stress",
              caption: "From cause to design response in four tiers.",
              tiers: [
                { label: "Cause: temperature change delta T", note: "strain source" },
                { label: "Restraint: free vs prevented expansion", note: "stress only if prevented" },
                { label: "Stress: sigma = alpha E delta T", note: "tensile or compressive" },
                { label: "Design: joints, rollers, matching alpha", note: "release or carry" },
              ],
            },
            callout: {
              type: "warning",
              title: "Restraint makes the stress",
              body: "Temperature alone produces no stress - it produces strain. Stress appears only when expansion or contraction is prevented. Always state 'if the bar is free to expand, stress is zero; if fully restrained, sigma = alpha E delta T'. Forgetting the restraint clause is the most common slip in thermal-stress answers and costs the entire working.",
            },
            keyTerms: [
              { term: "Thermal stress", definition: "Stress sigma = alpha E delta T induced in a member when free thermal expansion is prevented." },
              { term: "Coefficient of linear expansion alpha", definition: "Strain per unit temperature rise; 12e-6 per deg C for steel." },
              { term: "Bimetallic strip", definition: "Two bonded metals of different alpha that bend with temperature, used in thermostats." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for thermal stress in a bar fully restrained against expansion. A steel rail of 20 m length is laid at 20 deg C and subjected to a temperature rise of 40 deg C with both ends fully restrained. Taking E = 200 GPa and alpha = 12e-6 per deg C, find the stress and the force developed if the rail area is 8000 mm^2.",
                marks: 7,
                outline: [
                  "Free expansion delta L = alpha L delta T.",
                  "Restraint compresses it back: strain = alpha delta T.",
                  "Stress sigma = E * alpha * delta T = 200e3 * 12e-6 * 40 = 96 MPa (compressive).",
                  "Force = sigma * A = 96 * 8000 = 768000 N = 768 kN.",
                  "Note sign: heating under restraint gives compression.",
                  "Mention design relief: expansion joints at intervals.",
                  "Discuss buckling risk if rail not restrained laterally.",
                ],
              },
              {
                q: "State the expression for thermal stress in a fully restrained bar and give typical alpha for steel.",
                marks: 2,
              },
              {
                q: "Explain why thermal stresses develop in a bimetallic strip even when it is free externally.",
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
      title: "Shear Force and Bending Moment",
      summary:
        "The internal forces in beams: shear force and bending moment, sign conventions, SFD and BMD for cantilever, simply supported and overhanging beams under point loads and uniformly distributed loads, and the point of contraflexure where the bending moment changes sign.",
      chapter: {
        number: "02",
        title: "Shear Force and Bending Moment Diagrams",
        intro:
          "Unit II introduces the two internal actions in a beam - the shear force that resists transverse loads and the bending moment that resists the couples they create - fixes the sign conventions, draws the diagrams for the three standard beam types under point and distributed loads, and closes with the point of contraflexure that appears wherever both sagging and hogging moments occur.",
        inOneBreath:
          "Shear force at a section is the algebraic sum of transverse forces to one side; bending moment is the algebraic sum of the moments of those forces about the section; sagging moment is positive and hogging is negative; for a simply supported beam of span L with central point load W the maximum bending moment is WL/4 at midspan; for UDL of w per unit length the maximum moment is wL^2/8 at midspan; the point of contraflexure is where the BMD crosses the axis, present only in overhanging and continuous beams.",
        sections: [
          {
            number: "2.1",
            title: "SFD and BMD definitions and sign conventions",
            body: [
              "A beam is a structural member carrying loads perpendicular to its axis, and every transverse load sets up two internal actions at any section: a shear force that tends to slide one part of the beam past the other, and a bending moment that tends to bend the beam about that section. The shear force at a section is the algebraic sum of all transverse forces acting on either side of it; the bending moment is the algebraic sum of the moments of those forces about the section. The two together describe the internal state of the beam at every point and are the data from which bending and shear stresses of Unit III are computed.",
              "A sign convention fixes the algebra. The usual one in Indian textbooks is sagging-positive: a bending moment that bends the beam concave-up (sagging, fibres at the bottom in tension) is positive; a moment that bends it concave-down (hogging, fibres at the top in tension) is negative. For shear, the convention is that the left-hand portion moving up relative to the right gives positive shear. On the diagrams, positive ordinates are plotted above a horizontal axis and negative below. The two diagrams are drawn one under the other, sharing the same horizontal scale of position along the beam, so that a load point on the beam lines up with the jumps in the SFD and the kinks in the BMD.",
              "Three rules connect the diagrams to the loading. First, at a point load the SFD jumps by the magnitude of the load while the BMD has a kink (change of slope). Second, under a uniformly distributed load the SFD is a straight line of slope equal to -w and the BMD is a parabola. Third, the bending moment at any section equals the area under the SFD up to that section, so where the SFD crosses the axis the BMD has a maximum or minimum. These rules turn the diagrams from sketchy plots into exact quantitative records of the beam's internal state and let the engineer locate the worst section in seconds.",
            ],
            bullets: [
              "Shear force at a section: algebraic sum of transverse forces on either side.",
              "Bending moment at a section: algebraic sum of moments of those forces about the section.",
              "Sign: sagging (concave-up) positive, hogging (concave-down) negative.",
              "Point load gives a jump in SFD and a kink in BMD; UDL gives a sloped line in SFD and a parabola in BMD.",
              "BMD at a section = area under SFD up to that section; max BMD where SFD crosses axis.",
            ],
            table: {
              caption: "SFD and BMD signatures for common loads.",
              headers: ["Load type", "SFD shape", "BMD shape", "Max BM location"],
              rows: [
                ["No load (between loads)", "constant", "straight line", "n/a"],
                ["Point load W", "jump of W", "kink (slope change)", "at the load"],
                ["UDL of intensity w", "straight slope -w", "parabola", "where SFD zero"],
                ["Couple M", "no change", "jump of M", "n/a"],
                ["Triangular load", "parabola", "cubic", "where SFD zero"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Beam analysis cycle",
              caption: "Each pass through the cycle verifies the previous step.",
              steps: [
                { label: "Find reactions", note: "equilibrium of whole beam" },
                { label: "Take a section", note: "left or right free body" },
                { label: "Sum forces -> SF", note: "algebraic sum" },
                { label: "Sum moments -> BM", note: "about the section" },
                { label: "Plot SFD and BMD", note: "check max and zero crossings" },
                { label: "Verify by areas", note: "BM = area under SFD" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always start from the reactions",
              body: "Most SFD/BMD marks are lost because students draw the diagram from the loads without first computing the support reactions. Always compute the reactions from overall equilibrium, write them at the supports with arrows, then start the SFD from the left end. A wrong reaction propagates through every ordinate.",
            },
            keyTerms: [
              { term: "Shear force", definition: "Algebraic sum of transverse forces on either side of a section, plotted along the beam in the SFD." },
              { term: "Bending moment", definition: "Algebraic sum of moments about the section of forces on either side, plotted in the BMD." },
              { term: "Sagging moment", definition: "A bending moment that bends the beam concave-up; taken as positive in the standard convention." },
            ],
            examQuestions: [
              {
                q: "Define shear force and bending moment at a section of a beam. Explain the sign conventions adopted. State the relations between load, shear force and bending moment, and show that the bending moment at a section equals the area under the shear force diagram up to that section.",
                marks: 7,
                outline: [
                  "Define SF and BM as algebraic sums of forces and moments on one side.",
                  "Sign convention: sagging (concave-up) positive, hogging negative; SF left-up positive.",
                  "Relation: dF/dx = -w (rate of change of shear equals load intensity).",
                  "Relation: dM/dx = F (rate of change of moment equals shear).",
                  "Integrate the second: M at a section = area under SFD up to it.",
                  "Consequence: max BM occurs where F = 0 (SFD crosses axis).",
                  "Illustrate with a simple example: cantilever with end load, BM = Wx linear.",
                ],
              },
              {
                q: "State the sign conventions for shear force and bending moment in a simply supported beam.",
                marks: 2,
              },
              {
                q: "Explain the relation dM/dx = F and state its use in locating the section of maximum bending moment.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "SF and BM diagrams for cantilever beams",
            body: [
              "A cantilever is a beam fixed at one end and free at the other, carrying loads on the free portion. The fixed support supplies a vertical reaction and a moment reaction to balance the loads. Because the free end has no support, the analysis is unusually simple: starting from the free end and moving toward the support, the shear force at any section equals the sum of all loads between the free end and that section, and the bending moment equals the sum of the moments of those loads about the section. For a cantilever of length L carrying an end point load W, the shear is constant W and the bending moment varies linearly from zero at the free end to WL at the fixed end.",
              "For a cantilever of length L carrying a uniformly distributed load of intensity w over its full span, the total load is wL acting at L/2 from the fixed end. The shear force at a section x from the free end is the load up to that section, w * x, so the SFD is a straight line from zero at the free end to wL at the fixed end. The bending moment is the moment of that load about the section, w x^2 / 2, so the BMD is a parabola with zero at the free end and wL^2 / 2 at the fixed end - the worst section. The diagrams therefore both peak at the fixed end, which is the design section: the cantilever must be strongest where it meets the wall.",
              "Cantilevers are common as balconies, sunshades, overhanging arms of machine frames, and the wings of small aircraft. Their mechanics favour simplicity: every cantilever is solved from the free end without computing reactions first, so the chance of error is small. The fixed-end moment is the design moment, and the reinforcement in a concrete cantilever (or the flange size in a steel one) is detailed to resist it at the support. When loads are mixed - a point load at the tip plus a UDL over part of the span - the SFD and BMD are obtained by superposition: each load's contribution added algebraically, an instance of the linear superposition that holds because the beam is elastic and small-deflection.",
            ],
            bullets: [
              "Cantilever: fixed at one end, free at the other; analyse from the free end.",
              "End load W: SF constant = W; BM linear, max WL at fixed end.",
              "UDL of w over span L: SF linear w*x; BM parabolic w x^2/2, max wL^2/2 at fixed end.",
              "Both SF and BM peak at the fixed support, the design section.",
              "Mixed loads: superpose each contribution; linear elastic small-deflection beam.",
            ],
            table: {
              caption: "Maximum SF and BM for common cantilever loadings.",
              headers: ["Loading", "Max SF", "Max BM", "Location of max BM"],
              rows: [
                ["End point load W", "W", "WL", "fixed end"],
                ["UDL w over full span", "wL", "wL^2/2", "fixed end"],
                ["UDL w over length a from free end", "wa", "wa^2/2", "where UDL ends"],
                ["Point load W at distance a from free end", "W", "W * a", "between load and support"],
                ["Couple M at free end", "0", "M", "all sections"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Cantilever loadings and their BM shape",
              caption: "The fork summarises which BMD shape to draw.",
              start: "Identify the loading on the cantilever",
              branches: [
                { label: "Single point load W", outcome: "BM linear, max WL at support", good: true },
                { label: "Full-span UDL w", outcome: "BM parabolic, max wL^2/2 at support", good: true },
                { label: "Partial UDL over length a", outcome: "BM parabolic on a, linear beyond", good: true },
                { label: "Couple at free end", outcome: "BM constant M throughout", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Start at the free end",
              body: "Cantilever problems save a step because no support reaction is needed at the free end. Start summing forces and moments from the free end and you avoid computing the wall reactions entirely. The reactions appear only as a final check - they must equal the total load and the total moment at the fixed section.",
            },
            keyTerms: [
              { term: "Cantilever", definition: "A beam fixed at one end and free at the other, carrying loads on its free portion." },
              { term: "Fixed-end moment", definition: "The bending moment at the fixed support of a cantilever, equal to the moment of all loads about the support." },
              { term: "Free end", definition: "The unsupported end of a cantilever, where both shear and bending moment start at zero unless a load or couple acts there." },
            ],
            examQuestions: [
              {
                q: "A cantilever of length 3 m carries a point load of 10 kN at the free end and a uniformly distributed load of 4 kN/m over the entire length. Draw the shear force and bending moment diagrams, indicating the values at the fixed end and at mid-span.",
                marks: 7,
                outline: [
                  "Compute total UDL = 4 * 3 = 12 kN acting at 1.5 m from fixed end.",
                  "Total load = 10 + 12 = 22 kN; reaction at fixed end = 22 kN.",
                  "SF at free end (just after point load) = 10 kN; SF at fixed end = 22 kN (linear variation from UDL).",
                  "BM at free end = 0; at mid-span = 10 * 1.5 + 4 * 1.5 * 0.75 = 15 + 4.5 = 19.5 kN-m.",
                  "BM at fixed end = 10 * 3 + 4 * 3 * 1.5 = 30 + 18 = 48 kN-m.",
                  "Draw SFD as linear from 10 to 22 kN; BMD as parabola from 0 to 48 kN-m.",
                  "Identify fixed end as design section.",
                ],
              },
              {
                q: "Draw the BMD for a cantilever of length L carrying an end point load W.",
                marks: 2,
              },
              {
                q: "A cantilever of length L carries a UDL of w over its full span. Find the maximum bending moment and its location.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "SF and BM diagrams for simply supported beams",
            body: [
              "A simply supported beam rests on a pin at one end and a roller at the other, free to rotate at both supports but unable to move vertically. The reactions are computed from the two equilibrium equations of moments about each support. For a central point load W on a span L, each reaction is W/2; the shear force is W/2 on the left half and -W/2 on the right, and the bending moment rises linearly to WL/4 at midspan and falls linearly to zero at the right support. The maximum bending moment is therefore WL/4, the canonical figure engineers carry in memory for a central point load on a simply supported beam.",
              "For a simply supported beam of span L carrying a uniformly distributed load of intensity w over its whole span, the total load is wL shared equally by the two reactions, so each is wL/2. The shear force at a section x from the left is wL/2 - w*x, a straight line crossing zero at x = L/2; the bending moment is wLx/2 - w x^2/2, a parabola peaking at midspan with value wL^2/8. The number wL^2/8 is the second canonical figure, the one used to size floor beams carrying distributed loads. Where the SFD crosses zero, here at midspan, the BMD reaches its maximum - the rule of the previous section made concrete.",
              "Simply supported beams dominate building floors: the joists under a timber floor, the secondary beams in a steel-framed office, the slab panels between two parallel beams. Each is treated as simply supported for first-estimate design because the supports do transfer moment but only modestly. The two formulas WL/4 and wL^2/8 are used daily: a 6 m span carrying 10 kN/m UDL has M_max = 10 * 36 / 8 = 45 kN-m, a number that picks the beam section from a steel table. Eccentric or partial-span loads are handled by the same procedure - reactions, section equation, plot - but the symmetric cases are the working tool of routine design.",
            ],
            bullets: [
              "Simply supported: pin at one end, roller at the other; reactions from moment equilibrium.",
              "Central point load W, span L: reactions W/2 each; max BM = WL/4 at midspan.",
              "UDL w over span L: reactions wL/2 each; max BM = wL^2/8 at midspan.",
              "SFD crosses zero where BMD has its maximum; locate and quote the value.",
              "Used to size floor joists, secondary beams and slab panels in routine design.",
            ],
            table: {
              caption: "Maximum BM and SF for simply supported beams under symmetric loads.",
              headers: ["Loading", "Reactions", "Max SF", "Max BM", "Max BM location"],
              rows: [
                ["Central point load W", "W/2 each", "W/2", "WL/4", "midspan"],
                ["UDL w over full span", "wL/2 each", "wL/2", "wL^2/8", "midspan"],
                ["Eccentric point load W at a from left", "W(L-a)/L, Wa/L", "max of two", "W a (L-a) / L", "under the load"],
                ["Two equal point loads W at L/3 each side", "W each", "W", "WL/3", "between the loads"],
                ["Triangular load peak w at midspan", "wL/4 each", "wL/4", "wL^2/12", "midspan"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "SFD and BMD shape matrix for simply supported beams",
              caption: "Rows: load type; columns: diagram shape.",
              axes: { x: "BMD shape", y: "SFD shape" },
              quadrants: [
                { label: "Constant SF + linear BM", note: "single point load" },
                { label: "Linear SF + parabolic BM", note: "UDL over span" },
                { label: "Parabolic SF + cubic BM", note: "triangular load" },
                { label: "Jump SF + kink BM", note: "multiple point loads" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the two canonical formulas",
              body: "The two formulas WL/4 (central point load) and wL^2/8 (full UDL) for simply supported beams are quoted verbatim in nearly every RGPV paper. Memorise them with the location 'at midspan', and write them out before any numerical substitution. Examiners expect these as the first answer line and reward them with method marks even if the subsequent substitution slips.",
            },
            keyTerms: [
              { term: "Simply supported beam", definition: "A beam on a pin and a roller, free to rotate at both supports but not to move vertically." },
              { term: "Maximum bending moment", definition: "The largest ordinate of the BMD; for central point load WL/4, for full UDL wL^2/8, both at midspan." },
              { term: "Reaction", definition: "The vertical force supplied by a support to keep the beam in equilibrium, found from moment equilibrium about the other support." },
            ],
            examQuestions: [
              {
                q: "A simply supported beam of span 6 m carries a uniformly distributed load of 10 kN/m over its entire length and a central point load of 20 kN. Determine the support reactions, draw the shear force and bending moment diagrams, and find the maximum bending moment.",
                marks: 7,
                outline: [
                  "Total UDL = 10 * 6 = 60 kN; central point load = 20 kN.",
                  "By symmetry each reaction = (60 + 20) / 2 = 40 kN.",
                  "SF just right of left support = 40 kN; at midspan before point load = 40 - 10*3 = 10 kN.",
                  "Just right of midspan = 10 - 20 = -10 kN; at right support = -10 - 10*3 = -40 kN.",
                  "BM at midspan = 40 * 3 - 10 * 3 * 1.5 = 120 - 45 = 75 kN-m (point load at midspan adds no moment there).",
                  "Max BM = 75 kN-m at midspan; plot BMD as parabola with a kink at midspan.",
                  "Identify zero-shear section for confirmation of max BM.",
                ],
              },
              {
                q: "A simply supported beam of span L carries a central point load W. Write the maximum bending moment and its position.",
                marks: 2,
              },
              {
                q: "Derive the expression for the maximum bending moment in a simply supported beam carrying a uniformly distributed load w over its entire span.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "SF and BM diagrams for overhanging beams",
            body: [
              "An overhanging beam extends beyond one or both supports, so part of the beam behaves like a cantilever attached to a simply supported span. The reactions are still found from moment equilibrium about the supports, but they no longer share symmetrically. Over the supports the bending moment is negative (hogging), while between the supports under downward load it is positive (sagging) near the middle; the BMD therefore crosses the axis at one or two points inside the span. The shear force diagram has the usual signatures - jumps under point loads, slope under UDL - but the negative region at the overhang gives negative shear at the support on the overhang side.",
              "The overhanging beam is the first structure in this unit to show a point of contraflexure, the section where the BMD crosses the axis and the curvature reverses. Locating it is straightforward: write the BM as a function of x in the relevant segment and solve M(x) = 0 for x, keeping roots that lie inside the beam. For an overhang of length a carrying a UDL of w, the BM at the support is -w a^2 / 2 and at the free end is zero, so the BMD crosses from negative at the support to zero at the free end inside the overhang. Inside the main span the BM is positive, so a separate contraflexure point appears between the support and the section of maximum sagging moment.",
              "Overhanging beams appear wherever a continuous span meets a free end: the canopy tied back into a portal frame, the balcony cantilevered off a floor beam, the eaves of a roof. The hogging moment at the support often governs the design: the top fibres there go into tension, opposite to the sagging case, so reinforcement in a concrete overhang is placed at the top over the support and at the bottom at midspan. The BMD of an overhanging beam is the first diagram a student meets that has both signs of moment, and learning to draw the negative ordinates below the axis is the small skill that unlocks every continuous-beam analysis that follows.",
            ],
            bullets: [
              "Overhanging beam: extends beyond one or both supports; combines propped and cantilever action.",
              "Reactions from moment equilibrium; not symmetric; overhang carries its own moment.",
              "Hogging moment at supports, sagging in span; BMD crosses axis inside the beam.",
              "Contraflexure: solve M(x) = 0 in each segment; first appearance in this unit.",
              "Top reinforcement over support, bottom at midspan, in concrete overhangs.",
            ],
            table: {
              caption: "Sign of bending moment in overhanging beam regions.",
              headers: ["Region", "Moment sign", "Tension face", "Reinforcement side"],
              rows: [
                ["Midspan between supports", "positive (sagging)", "bottom", "bottom steel"],
                ["Over the support", "negative (hogging)", "top", "top steel"],
                ["Free overhang tip to support", "negative to zero", "top", "top steel"],
                ["Point of contraflexure", "zero", "neither", "transition point"],
                ["Continuous interior support", "negative", "top", "top steel"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Drawing SFD and BMD for an overhanging beam",
              caption: "Six steps, ending with the contraflexure location.",
              steps: [
                { label: "Compute reactions", note: "moment equilibrium about each support" },
                { label: "Start SFD from one end", note: "include overhang" },
                { label: "Mark jumps and slopes", note: "point loads, UDLs" },
                { label: "Sketch BMD from SFD areas", note: "positive then negative" },
                { label: "Find zero-shear section", note: "max BM" },
                { label: "Solve M(x) = 0 for contraflexure", note: "inside the span" },
              ],
            },
            callout: {
              type: "warning",
              title: "Mind the hogging region",
              body: "Students new to overhanging beams tend to draw the BMD entirely above the axis. The hogging moment over the support is negative and must be plotted below. The BMD therefore crosses the axis at the contraflexure, and the negative area must equal the rise from the support to the zero-M point at midspan. Always check the signs on a small sketch before scaling the diagram.",
            },
            keyTerms: [
              { term: "Overhanging beam", definition: "A beam that extends beyond one or both supports, combining propped and cantilever action." },
              { term: "Point of contraflexure", definition: "A section where the bending moment changes sign (crosses the axis); the curvature reverses there." },
              { term: "Hogging moment", definition: "A negative bending moment that puts the top fibres in tension; typical over a support of an overhanging or continuous beam." },
            ],
            examQuestions: [
              {
                q: "A beam of length 6 m is simply supported at 1 m from each end, with overhangs of 1 m on both sides. It carries a uniformly distributed load of 4 kN/m over the entire length. Draw the shear force and bending moment diagrams, find the maximum bending moment, and locate the points of contraflexure.",
                marks: 7,
                outline: [
                  "Total load = 4 * 6 = 24 kN; by symmetry each reaction = 12 kN.",
                  "SF at free left end = 0; at left support = -4 * 1 = -4 kN; jumps to +8 kN at the support.",
                  "At midspan SF = 8 - 4*2 = 0 kN (which is where BM is maximum).",
                  "At right support SF = -8 kN; jumps to +4 kN; at right free end = 0.",
                  "BM at left support = -4 * 1 * 0.5 = -2 kN-m (hogging).",
                  "BM at midspan = -4 * 3 * 1.5 + 12 * 2 = -18 + 24 = +6 kN-m (sagging); max BM magnitude 6 kN-m.",
                  "Contraflexure: solve M(x) = -2 x^2 + 12 x - 12 = 0 -> x = 1.27 m and 4.73 m from left free end.",
                ],
              },
              {
                q: "Define a point of contraflexure and state the condition for its occurrence.",
                marks: 2,
              },
              {
                q: "An overhanging beam of span L has an overhang of length a carrying a point load W at its tip. Derive the bending moment over the support.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Point of contraflexure",
            body: [
              "The point of contraflexure, also called the point of inflection, is the section along a beam where the bending moment changes sign - where the BMD crosses the horizontal axis. At that section the curvature reverses: the beam changes from sagging to hogging or vice versa, so the tension face swaps from bottom to top. The bending moment itself is zero there, but the shear force is generally not; the SF passes through a non-zero value while the moment does its sign change. Contraflexure appears only in beams that carry both positive and negative moment, which means overhanging, continuous and fixed-end beams, never in a simple cantilever or a simply supported beam under symmetric downward load.",
              "Locating the contraflexure is an algebra exercise. Write the bending moment M(x) in the relevant segment using the section method, set M(x) = 0, and solve the resulting equation for x; discard roots outside the segment. For an overhanging beam the BM near a support with overhang is negative and rises to a positive maximum in the span, so by the intermediate value theorem it must cross zero somewhere between - the location is found by a linear or quadratic solve. In a fixed-end beam under symmetric UDL the contraflexures appear at about one-fifth of the span from each end, the rule of thumb used to detail the curtailment of reinforcement in concrete design.",
              "Practically, the contraflexure marks the section where the bending moment changes sign and therefore where the main reinforcement in a concrete beam can be curtailed or lifted. In a fixed-end beam the hogging steel runs over the support and is no longer needed once the moment becomes sagging; the point where it can stop is the contraflexure. In steel design the contraflexure is where the flange in compression swaps, informing the placement of lateral supports. The contraflexure is thus not a point of zero stress - the shear there is typically significant - but a point of zero moment, and its importance is structural detailing rather than stress computation.",
            ],
            bullets: [
              "Contraflexure: section where bending moment is zero and changes sign; curvature reverses.",
              "Shear force there is generally non-zero; only the moment vanishes.",
              "Locate by solving M(x) = 0 in each segment; keep roots inside the beam.",
              "Appears in overhanging, continuous and fixed-end beams; not in simple cantilever or SS beam.",
              "Used to curtail reinforcement and to place lateral supports in steel beams.",
            ],
            table: {
              caption: "Contraflexure in standard beams.",
              headers: ["Beam type", "Loading", "Contraflexure present?", "Location"],
              rows: [
                ["Simply supported", "central point load", "no", "n/a"],
                ["Simply supported", "full UDL", "no", "n/a"],
                ["Cantilever", "end load", "no", "n/a"],
                ["Overhanging (symmetric)", "full UDL", "yes (two)", "between each support and midspan"],
                ["Fixed-end", "full UDL", "yes (two)", "about 0.21 L from each end"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Locating a point of contraflexure",
              caption: "From the section equation to a single number on the beam.",
              stages: [
                { label: "Write BM equation M(x)", note: "section method" },
                { label: "Set M(x) = 0", note: "moment vanishes" },
                { label: "Solve for x", note: "linear or quadratic" },
                { label: "Discard out-of-span roots", note: "keep only inside segment" },
                { label: "Mark on beam sketch", note: "curvature reversal point" },
              ],
            },
            callout: {
              type: "exam",
              title: "Solve M(x) = 0, don't eyeball",
              body: "Examiners want the contraflexure located numerically, not estimated from the sketch. Always write the BM equation in the relevant segment, set it to zero, solve for x and round to two decimals. A purely graphical answer is worth one mark out of the three typically allotted to this sub-question.",
            },
            keyTerms: [
              { term: "Point of contraflexure", definition: "A section where the bending moment changes sign; the curvature reverses and the moment is zero." },
              { term: "Point of inflection", definition: "Synonym for contraflexure in beam analysis; the geometric point where the elastic curve changes concavity." },
              { term: "Curtailment", definition: "The termination of main reinforcement at a section where it is no longer needed, typically past a contraflexure." },
            ],
            examQuestions: [
              {
                q: "Define the point of contraflexure. A simply supported beam of span L carries an overhang of length a on one side with a point load W at the overhang tip. Derive the position of the point of contraflexure measured from the support adjacent to the overhang.",
                marks: 7,
                outline: [
                  "Define contraflexure as the section where BM = 0 changes sign; curvature reverses.",
                  "Sketch the beam: supports at A (adjacent to overhang) and B (far end); overhang of length a from A; W at tip.",
                  "Compute reactions: take moments about B; R_A * L = W * (L+a); R_A = W(L+a)/L upward; R_B = -Wa/L downward.",
                  "BM at A (x=0) = -W*a (hogging from overhang load).",
                  "BM in span (0 <= x <= L): M(x) = -W*a + R_A x = W[-a + (L+a)x/L].",
                  "Set M(x) = 0: (L+a)x/L = a -> x = aL/(L+a).",
                  "Position of contraflexure: x = aL/(L+a) from the support adjacent to the overhang; independent of W.",
                ],
              },
              {
                q: "Define point of contraflexure and state whether it occurs in a simply supported beam under symmetric load.",
                marks: 2,
              },
              {
                q: "State why the main reinforcement in a fixed-end concrete beam can be curtailed at the point of contraflexure.",
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
      title: "Bending and Shear Stresses in Beams",
      summary:
        "The flexure formula M/I = f/y = E/R and its derivation, the section modulus as the design quantity, the linear bending stress distribution, and the parabolic shear stress distribution in rectangular, circular and I-sections with their characteristic maximum-stress factors.",
      chapter: {
        number: "03",
        title: "Bending and Shear Stresses in Beams",
        intro:
          "Unit III turns the bending moment and shear force diagrams of Unit II into stresses. The theory of simple bending gives the flexure formula M/I = f/y = E/R, with the neutral axis as the zero-stress fibre and the section modulus as the design quantity. Bending stress varies linearly with distance from the neutral axis. Shear stress varies parabolically in a rectangular section and is examined in rectangular, circular and I-sections.",
        inOneBreath:
          "Simple bending assumes plane sections remain plane and normal to the axis, the material is homogeneous isotropic and obeys Hooke's law, and the beam is symmetric about the loading plane; the neutral axis passes through the centroid and bending stress is zero there; the flexure formula M/I = f/y = E/R links moment, stress, curvature and strain; section modulus Z = I / y_max so f_max = M / Z; bending stress is linear in y; shear stress in a rectangular section is tau = F Q / (I b), parabolic with maximum 1.5 F/A at the neutral axis; circular section max shear is 4/3 F/A; in an I-section most shear is carried by the web.",
        sections: [
          {
            number: "3.1",
            title: "Theory of simple bending and neutral axis",
            body: [
              "The theory of simple bending, also called the Euler-Bernoulli theory, rests on a set of assumptions: the beam is initially straight, the cross-section is symmetric about the loading plane, the material is homogeneous and isotropic and obeys Hooke's law, plane transverse sections remain plane and perpendicular to the longitudinal axis after bending, and the beam is bent only by end couples with no shear in the middle portion (pure bending). Under these assumptions a beam segment bends into a circular arc of radius R, with the top fibres shortening if the moment is sagging and the bottom fibres lengthening; somewhere between them there is a fibre whose length is unchanged, the neutral fibre.",
              "The locus of the neutral fibre in the cross-section is the neutral axis, and for a homogeneous beam it passes through the centroid of the section. The strain at a fibre at distance y from the neutral axis is epsilon = y / R, linear in y and zero at the neutral axis itself. Multiplying by Young's modulus gives the bending stress sigma = E * y / R, also linear in y and zero at the neutral axis. The maximum tensile and compressive stresses occur at the extreme fibres, equal in magnitude if the neutral axis is centrally placed but unequal if it is offset, as in a T-section or an unequal angle.",
              "The neutral axis is thus the hinge of the whole theory. Its position is determined by the geometry alone - it is the centroidal axis of the cross-section for a homogeneous material - and once located, the stress distribution follows immediately from the moment. In a reinforced concrete beam the neutral axis is not at the centroid because two materials share the section: it shifts toward the compression flange by the modular ratio, and finding it is the first step of every reinforced concrete design. In a composite beam of Unit I the same logic appears. The neutral axis is the geometric key that converts an external moment into an internal stress field.",
            ],
            bullets: [
              "Assumptions: homogeneous isotropic, Hooke's law, plane sections remain plane and normal.",
              "Pure bending (no shear in the segment): beam bends into a circular arc of radius R.",
              "Strain epsilon = y / R, linear in y; stress sigma = E y / R, also linear.",
              "Neutral axis passes through the centroid of a homogeneous section; zero stress there.",
              "Max stresses at extreme fibres; equal if NA central, unequal if NA offset (T, angle).",
            ],
            table: {
              caption: "Neutral axis position for common homogeneous sections.",
              headers: ["Section", "Centroid from base", "Symmetry of NA", "Max stress ratio (top:bottom)"],
              rows: [
                ["Rectangle b x d", "d/2", "symmetric", "1:1"],
                ["Circle diameter d", "d/2", "symmetric", "1:1"],
                ["T-section flange up", "below flange", "asymmetric", "compression less than tension"],
                ["I-section symmetric", "d/2", "symmetric", "1:1"],
                ["Triangle base b, height h", "h/3 from base", "asymmetric", "1:2"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Assumptions of simple bending theory, layered",
              caption: "Each layer is a hypothesis; drop any one and the theory adjusts.",
              layers: [
                { label: "Beam initially straight and prismatic", note: "geometry" },
                { label: "Material homogeneous, isotropic, Hookean", note: "material" },
                { label: "Plane sections remain plane and normal", note: "kinematics" },
                { label: "Symmetric about loading plane", note: "loading" },
                { label: "Pure bending, no shear in segment", note: "stress state" },
              ],
            },
            callout: {
              type: "exam",
              title: "List the assumptions",
              body: "When asked to derive the bending equation, examiners expect the list of assumptions written out before any algebra. Six lines are standard: initially straight; homogeneous isotropic; Hookean; plane sections remain plane and normal; symmetric about loading plane; pure bending. Skipping the assumptions costs one or two marks even if the derivation that follows is flawless.",
            },
            keyTerms: [
              { term: "Theory of simple bending", definition: "Euler-Bernoulli theory that plane transverse sections remain plane and normal after bending, giving sigma = E y / R." },
              { term: "Neutral axis", definition: "The line in the cross-section along which bending stress is zero; for a homogeneous section it passes through the centroid." },
              { term: "Pure bending", definition: "Bending of a beam segment by end couples only, with no shear force in the segment." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of the theory of simple bending. Show that plane sections remain plane, and hence derive that the strain at a fibre is proportional to its distance from the neutral axis. Explain why the neutral axis passes through the centroid of a homogeneous section.",
                marks: 7,
                outline: [
                  "List the six assumptions: initially straight; homogeneous isotropic; Hookean; plane sections remain plane and normal; symmetric loading; pure bending.",
                  "Consider two sections ab and cd before bending; after bending they rotate by dtheta and remain plane.",
                  "The fibre at the neutral axis is unchanged in length; fibres above shorten, below lengthen.",
                  "Strain at distance y from NA: epsilon = y / R where R is the radius of curvature.",
                  "Force on element dA at y: dF = sigma dA = (E y / R) dA.",
                  "Net axial force must be zero for pure bending: integral E y dA / R = 0 -> integral y dA = 0.",
                  "The integral y dA = 0 defines the centroidal axis; hence NA passes through centroid.",
                ],
              },
              {
                q: "Define the neutral axis of a beam cross-section.",
                marks: 2,
              },
              {
                q: "State any three assumptions of the theory of simple bending and explain why each matters.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "The bending equation M/I = f/y = E/R",
            body: [
              "The flexure formula, also called the bending equation, is the central result of strength of materials. It is written as the equality of three ratios: M/I = f/y = E/R, where M is the bending moment at the section, I the second moment of area of the cross-section about the neutral axis, f the bending stress at a fibre at distance y from the neutral axis, E Young's modulus, and R the radius of curvature of the bent beam. The first ratio links moment to stress, the second to curvature. From it, the stress at any fibre is f = M * y / I, and the maximum stress at the extreme fibre y_max is f_max = M * y_max / I = M / Z, where Z = I / y_max is the section modulus.",
              "The derivation couples equilibrium, geometry and material law. Geometry gives strain epsilon = y / R; material law gives stress sigma = E epsilon = E y / R; equilibrium of the internal stress distribution over the cross-section requires that the internal moment equal the applied M. The internal moment is integral y * sigma dA = E/R * integral y^2 dA = E I / R. Equating to M gives M = E I / R, the second equality. Substituting sigma = E y / R gives sigma = M y / I, the first equality. The three ratios are the same statement in three languages: stress, curvature and moment.",
              "The flexure formula is the daily tool of member sizing. Given a bending moment M from the SFD/BMD and an allowable stress f_all, the engineer computes the required section modulus Z >= M / f_all and picks the lightest steel section with that Z from the handbook, or shapes a concrete section with that effective depth. For a rectangular section b x d, I = b d^3 / 12 about the centroidal axis, so Z = b d^2 / 6. For a circular section of diameter d, I = pi d^4 / 64 and Z = pi d^3 / 32. These two formulas cover most textbook problems, and the I-section, channel and angle values are read from tables for steel design.",
            ],
            bullets: [
              "Bending equation: M/I = f/y = E/R; three ratios of moment, stress, curvature.",
              "Stress at a fibre: f = M y / I; maximum at extreme fibre f_max = M / Z.",
              "Section modulus Z = I / y_max; required Z >= M / f_all for design.",
              "Rectangular section b x d: I = b d^3 / 12, Z = b d^2 / 6.",
              "Circular section diameter d: I = pi d^4 / 64, Z = pi d^3 / 32.",
            ],
            table: {
              caption: "Second moment and section modulus of common shapes about centroidal NA.",
              headers: ["Section", "I (about NA)", "Z", "y_max"],
              rows: [
                ["Rectangle b x d (broad)", "b d^3 / 12", "b d^2 / 6", "d/2"],
                ["Circle diameter d", "pi d^4 / 64", "pi d^3 / 32", "d/2"],
                ["Hollow circle outer D, inner d", "pi (D^4 - d^4) / 64", "pi (D^4 - d^4) / (32 D)", "D/2"],
                ["Triangle base b, height h", "b h^3 / 36", "b h^2 / 24", "2h/3"],
                ["Square side a (diagonal NA)", "a^4 / 12", "a^3 / (6 sqrt(2))", "a / sqrt(2)"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Deriving the flexure formula",
              caption: "From kinematics to design in five tiers.",
              tiers: [
                { label: "Geometry: epsilon = y / R", note: "plane sections remain plane" },
                { label: "Material: sigma = E epsilon = E y / R", note: "Hooke's law" },
                { label: "Equilibrium: M = integral y sigma dA = E I / R", note: "internal = external" },
                { label: "Combine: M/I = sigma/y = E/R", note: "the flexure formula" },
                { label: "Design: Z = I/y_max, f_max = M/Z", note: "size the section" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote M/I = f/y = E/R",
              body: "Write the flexure formula M/I = f/y = E/R as the first line of any bending-stress answer. Examiners award one mark for stating it correctly before substitution. Common slip: confusing f = M y / I (stress at distance y) with f_max = M/Z (stress at extreme fibre).",
            },
            keyTerms: [
              { term: "Flexure formula", definition: "M/I = f/y = E/R; relates bending moment, bending stress, curvature and geometry." },
              { term: "Section modulus Z", definition: "Z = I / y_max; the section property that gives the maximum bending stress as f_max = M / Z." },
              { term: "Second moment of area I", definition: "Geometric property integral y^2 dA about the neutral axis; resistance to bending curvature." },
            ],
            examQuestions: [
              {
                q: "Derive the bending equation M/I = f/y = E/R. State the assumptions. A rectangular beam 100 mm wide by 200 mm deep is subjected to a bending moment of 12 kN-m. Compute the maximum bending stress and the radius of curvature, taking E = 200 GPa.",
                marks: 7,
                outline: [
                  "List assumptions (see section 3.1).",
                  "Geometry: epsilon = y / R; material: sigma = E epsilon = E y / R.",
                  "Equilibrium: M = integral y sigma dA = E/R integral y^2 dA = E I / R.",
                  "Combine to M/I = sigma/y = E/R.",
                  "For rectangle 100 x 200: I = b d^3 / 12 = 100 * 200^3 / 12 = 6.667e7 mm^4.",
                  "f_max = M y_max / I = 12e6 * 100 / 6.667e7 = 18 MPa.",
                  "R = E I / M = 200e3 * 6.667e7 / 12e6 = 1.111e6 mm = 1111 m.",
                ],
              },
              {
                q: "Define section modulus and state its unit.",
                marks: 2,
              },
              {
                q: "A circular section of diameter 50 mm has a bending moment of 2 kN-m. Find the maximum bending stress.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Section modulus and bending stress distribution",
            body: [
              "Section modulus Z = I / y_max is the single number that captures a section's resistance to bending. The larger the Z, the smaller the maximum stress for a given moment, so the engineer shops for the largest Z at the lowest weight. For a rectangular section b x d bent about the strong axis, Z = b d^2 / 6, so doubling the depth quadruples the modulus - a fact that explains why deep beams are so efficient. For a circular section, Z = pi d^3 / 32. An I-section of the same overall depth as a rectangle has its area concentrated in the flanges far from the neutral axis, giving a much larger I and Z; this is the reason steel is rolled into I-shapes.",
              "Bending stress distribution is linear in y: f = M y / I, with zero at the neutral axis and maxima at the extreme fibres. For a symmetric section, the maximum tensile and compressive stresses are equal in magnitude, f_max = M/Z. For an asymmetric section such as a T or angle, the distances to the extreme fibres in tension and compression differ, so the stresses differ in the same ratio: f_t / f_c = y_t / y_c. The section modulus is then quoted in two values, Z_t = I / y_t and Z_c = I / y_c, and the design is governed by the smaller of f_t / Z_t and f_c / Z_c reaching the corresponding allowable stress.",
              "The choice of section is driven by material and use. Steel is strong in both tension and compression, so symmetric I-sections suit it; the section modulus of the standard ISMB 200 is about 184 cm^3, readable from steel tables. Concrete is weak in tension, so rectangular or T-beams are used with steel reinforcement in the tension zone, and the section modulus of the concrete is computed for the compression zone only. Timber, intermediate in strength, often uses rectangular sections. In every case the design step is the same: compute the moment, divide by the allowable stress to get the required Z, and pick the section that meets it economically.",
            ],
            bullets: [
              "Section modulus Z = I / y_max; larger Z means lower stress for a given M.",
              "Rectangular Z = b d^2 / 6; circular Z = pi d^3 / 32; doubling depth quadruples Z.",
              "I-section concentrates area in flanges far from NA, giving high Z for low weight.",
              "Asymmetric section: Z_t = I/y_t, Z_c = I/y_c; design governed by smaller ratio.",
              "Design step: required Z = M / f_all; pick lightest section meeting it from tables.",
            ],
            table: {
              caption: "Section modulus of common steel I-sections (ISMB).",
              headers: ["Designation", "Depth (mm)", "I (cm^4)", "Z (cm^3)", "Weight (N/m)"],
              rows: [
                ["ISMB 100", "100", "257", "51", "118"],
                ["ISMB 150", "150", "798", "107", "171"],
                ["ISMB 200", "200", "1840", "184", "253"],
                ["ISMB 250", "250", "3710", "297", "373"],
                ["ISMB 300", "300", "6360", "424", "478"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Section selection cycle for a bending member",
              caption: "Moment -> required Z -> section -> check stress -> iterate if needed.",
              steps: [
                { label: "Compute M_max from SFD/BMD", note: "factored or working" },
                { label: "Required Z = M / f_all", note: "allowable stress" },
                { label: "Pick section from steel table", note: "Z_table >= Z_req" },
                { label: "Compute actual f = M / Z_table", note: "check vs allowable" },
                { label: "Check deflection if relevant", note: "separate limit state" },
                { label: "Accept or step up section", note: "iterate" },
              ],
            },
            callout: {
              type: "tip",
              title: "Tabulate Z for steel",
              body: "In the exam, you will not be given a steel table; memorise Z for ISMB 200, 250, 300 and the formulas for rectangle and circle. The numbers 184, 297, 424 cm^3 are the working values for the three standard I-sections and pick up easy marks in a 'select a suitable section' question.",
            },
            keyTerms: [
              { term: "Section modulus Z", definition: "I / y_max; the section property that gives the maximum bending stress as f_max = M / Z." },
              { term: "Bending stress distribution", definition: "The linear variation of bending stress with distance y from the neutral axis, f = M y / I." },
              { term: "Asymmetric section", definition: "A section whose neutral axis is not at mid-depth; tension and compression fibres at different distances from NA give different stress magnitudes." },
            ],
            examQuestions: [
              {
                q: "A steel beam is to carry a maximum bending moment of 60 kN-m. The allowable bending stress is 165 MPa. Calculate the required section modulus. From the table of ISMB sections, select a suitable beam and verify the actual maximum stress.",
                marks: 7,
                outline: [
                  "State design condition: Z_required = M / f_all.",
                  "Substitute M = 60e6 N-mm and f_all = 165 N/mm^2.",
                  "Z_required = 60e6 / 165 = 3.636e5 mm^3 = 363.6 cm^3.",
                  "From steel table ISMB 250 has Z = 297 cm^3 (insufficient); ISMB 300 has Z = 424 cm^3 (sufficient).",
                  "Select ISMB 300; verify actual stress f = M / Z = 60e6 / 4.24e5 = 141.5 MPa < 165 MPa, OK.",
                  "Note weight and depth implications.",
                  "Mention the deflection check as a separate limit state.",
                ],
              },
              {
                q: "State the expression for section modulus of a rectangular section b x d.",
                marks: 2,
              },
              {
                q: "Explain why an I-section is more efficient in bending than a rectangular section of the same depth.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Shear stress distribution in rectangular and circular sections",
            body: [
              "Where the bending moment produces normal stress that varies linearly with depth, the shear force produces shear stress that varies parabolically, with zero at the free surfaces (top and bottom) and maximum at the neutral axis. The formula is tau = F Q / (I b), where F is the shear force at the section, Q is the first moment of the area beyond the fibre about the neutral axis, I the second moment of the whole section about the neutral axis, and b the width of the section at the fibre. The formula is derived by considering equilibrium of an element cut longitudinally: the difference in bending stress across the element length must be balanced by shear on the longitudinal plane.",
              "For a rectangular section b x d, substitution gives tau = (6 F / (b d^3)) * (d^2 / 4 - y^2), a parabola peaking at the neutral axis with tau_max = 1.5 * F / (b d) = 1.5 * tau_average. So the maximum shear stress in a rectangular beam is one and a half times the average shear stress on the section. For a circular section of diameter d, the distribution is also parabolic (with a slight correction for the varying width) and the maximum shear stress at the neutral axis is tau_max = 4/3 * F / A = 1.33 * tau_average. Both sections therefore concentrate shear near the neutral axis and relieve it at the extremes - the opposite of the bending stress pattern.",
              "The shear stress distribution has practical consequences. In a rectangular timber beam the maximum shear at the neutral axis can govern the design when the span is short and the load is heavy, because timber fails in shear along the grain near the neutral axis - the horizontal split that opens up along a beam's mid-depth. In a reinforced concrete beam the shear is carried by the concrete in the compression zone and by stirrups (vertical links) crossing potential diagonal cracks; the links are designed for the shear that exceeds the concrete's contribution. The 1.5 and 4/3 factors are the exam numbers: memorise them as the multipliers from average to maximum shear for rectangular and circular sections respectively.",
            ],
            bullets: [
              "Shear stress formula: tau = F Q / (I b); F shear force, Q first moment beyond fibre.",
              "Distribution parabolic: zero at top and bottom, maximum at neutral axis.",
              "Rectangular section: tau_max = 1.5 * F / A = 1.5 * tau_average at the neutral axis.",
              "Circular section: tau_max = (4/3) * F / A = 1.33 * tau_average at the neutral axis.",
              "Timber fails in horizontal shear at NA; RC beams use stirrups to carry excess shear.",
            ],
            table: {
              caption: "Maximum shear stress factor for common sections.",
              headers: ["Section", "tau_max / tau_average", "Location of tau_max", "Shape of distribution"],
              rows: [
                ["Rectangle b x d", "1.5", "neutral axis", "parabola"],
                ["Circle diameter d", "4/3 = 1.33", "neutral axis", "parabola"],
                ["Hollow circle", "approx 1.33", "neutral axis", "near-flat parabola"],
                ["I-section (web only)", "1.0 to 1.2", "neutral axis", "nearly uniform in web"],
                ["Triangle base b, height h", "1.5", "half-height", "cubic"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Bending stress vs shear stress distribution in a rectangular beam",
              caption: "Linear and parabolic - the two patterns side by side.",
              left: {
                heading: "Bending stress",
                items: [
                  "Linear in y",
                  "Zero at neutral axis",
                  "Maximum at extreme fibres",
                  "Tension one side, compression other",
                  "f = M y / I",
                ],
              },
              right: {
                heading: "Shear stress",
                items: [
                  "Parabolic in y",
                  "Maximum at neutral axis",
                  "Zero at top and bottom",
                  "Same sign throughout depth",
                  "tau = F Q / (I b)",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Quote 1.5 and 4/3",
              body: "The factors 1.5 (rectangle) and 4/3 (circle) that multiply the average shear to give the maximum are routinely asked. State them as 'tau_max = 1.5 tau_av for rectangle, 4/3 tau_av for circle, both at the neutral axis'. Then derive briefly by substituting y = 0 into the parabolic expression.",
            },
            keyTerms: [
              { term: "Shear stress formula", definition: "tau = F Q / (I b); shear stress at a fibre equals shear force times first moment of area beyond the fibre, divided by second moment and width." },
              { term: "Average shear stress", definition: "F / A, the shear stress if uniformly distributed; rectangular max is 1.5 times this, circular max is 4/3 times." },
              { term: "First moment of area Q", definition: "integral y dA over the area beyond the fibre; zero at the extreme fibre, maximum at the neutral axis." },
            ],
            examQuestions: [
              {
                q: "Derive an expression for the shear stress at a fibre in a beam cross-section subjected to a shear force F. For a rectangular section b x d, show that the shear stress distribution is parabolic and that the maximum shear stress at the neutral axis is 1.5 times the average shear stress.",
                marks: 7,
                outline: [
                  "Consider an element of length dx between two sections with moments M and M + dM.",
                  "Bending stress difference across the element creates an unbalanced force on the longitudinal plane.",
                  "Equilibrium: F_longitudinal = (dM/I) integral y dA = (dM/I) Q.",
                  "Shear stress tau = F_longitudinal / (b dx) = (dM/dx) Q / (I b) = F Q / (I b).",
                  "For rectangle: Q = b (d^2/4 - y^2) / 2 and I = b d^3 / 12.",
                  "Substitute: tau = (6 F / (b d^3)) (d^2/4 - y^2), a parabola in y.",
                  "At y = 0 (NA): tau_max = 1.5 F / (b d) = 1.5 tau_av; at y = d/2: tau = 0.",
                ],
              },
              {
                q: "State the maximum shear stress in a circular section in terms of the average shear stress.",
                marks: 2,
              },
              {
                q: "Why does a short, heavily loaded timber beam tend to fail in horizontal shear near the neutral axis?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Shear stress distribution in an I-section",
            body: [
              "An I-section concentrates its area in two flanges connected by a thin web. The bending stress, which is linear in distance from the neutral axis, is therefore largest in the flanges - which is exactly where the area sits, so the flanges carry almost all the bending moment. The shear stress, by contrast, depends on the first moment Q and inversely on the width b: in the wide flange b is large and tau is small, but in the thin web b is small and tau is large. The result is that nearly all the shear force is carried by the web, with a nearly uniform distribution there, while the flanges contribute little shear but most bending.",
              "The distribution across the depth of an I-section has three regions. In the flange the shear stress grows linearly from the tip toward the web junction as Q increases and b stays at the flange width. At the junction there is a sudden jump because b drops from the flange width to the web thickness. Inside the web the stress continues to grow parabolically, reaching its maximum at the neutral axis. For typical proportions the variation within the web is small - the web carries 80 to 95 percent of the total shear, often approximated as uniform tau_web = F / (web area). The maximum shear stress is approximately 1.1 to 1.2 times the average in the web.",
              "This division of labour is the I-section's whole point. The flanges, far from the neutral axis, give a large I and so a large section modulus for bending; the web, thin and tall, gives a narrow but deep shear path. The proportioning of flange area to web area in standard rolled sections reflects this: an ISMB 200 has flanges 100 mm wide and a web 5.7 mm thick, so the web area is about 11 percent of the section but carries about 95 percent of the shear. In design, the web is checked for shear: tau_web = F / (d * t_w) must not exceed the allowable shear stress, and if it does a thicker web or a larger section is chosen.",
            ],
            bullets: [
              "I-section: flanges carry bending (large I from area far from NA); web carries shear.",
              "Shear stress jumps at the flange-web junction as b drops from flange width to web thickness.",
              "Web carries 80 to 95 percent of total shear; distribution nearly uniform within web.",
              "Approximate tau_max = 1.1 to 1.2 * F / (d * t_w) at the neutral axis.",
              "Design: tau_web = F / (d * t_w) must not exceed allowable shear stress.",
            ],
            table: {
              caption: "Shear stress at key points in a symmetric I-section.",
              headers: ["Location", "First moment Q", "Width b", "tau magnitude"],
              rows: [
                ["Flange tip", "0", "flange width", "0"],
                ["Flange mid", "small", "flange width", "small"],
                ["Junction (flange side)", "moderate", "flange width", "moderate"],
                ["Junction (web side)", "same Q", "web thickness", "large (jumps up)"],
                ["Neutral axis", "maximum", "web thickness", "maximum, approx 1.2 F/(d t_w)"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which part carries what in an I-section",
              caption: "Bending and shear split cleanly between flanges and web.",
              start: "Identify the internal action at the section",
              branches: [
                { label: "Bending moment M", outcome: "flanges carry it via sigma = M y / I", good: true },
                { label: "Shear force F", outcome: "web carries it via tau = F / (d t_w)", good: true },
                { label: "Torsion", outcome: "I-section is poor in torsion; use a box", good: false },
                { label: "Concentrated load", outcome: "web crushing or buckling check", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Web carries the shear, flanges the moment",
              body: "Students often compute the average shear F / A over the whole I-section and treat it as the maximum. The right number is F / (d * t_w), the average on the web alone, which is several times larger than the whole-section average. Always identify the web area and use it for shear, then use the full I and Z for bending.",
            },
            keyTerms: [
              { term: "I-section", definition: "A rolled steel shape with two flanges connected by a web; flanges resist bending, web resists shear." },
              { term: "Web shear", definition: "The shear stress in the thin vertical plate of an I-section, approximated by F / (d * t_w) and carrying most of the shear force." },
              { term: "Flange-web junction", definition: "The point where the shear stress distribution jumps because the section width changes from the flange width to the web thickness." },
            ],
            examQuestions: [
              {
                q: "Sketch the shear stress distribution across the depth of a symmetric I-section subjected to a shear force F. Explain why the web carries most of the shear. An ISMB 300 with web thickness 7.7 mm and overall depth 300 mm carries a shear force of 120 kN. Compute the average shear stress in the web and the maximum shear stress.",
                marks: 7,
                outline: [
                  "Draw the I-section; mark flange, web, NA.",
                  "Distribution: zero at flange tips, rising in flange, jump at junction, parabola in web, max at NA.",
                  "Web carries most shear because b is small there and tau = F Q / (I b) grows.",
                  "Average shear in web tau_av = F / (d * t_w) = 120e3 / (300 * 7.7) = 51.95 MPa.",
                  "Maximum shear stress approx 1.2 * tau_av = 62.3 MPa at neutral axis.",
                  "Quote web-area formula and the 1.1 to 1.2 factor for I-sections.",
                  "Note flanges contribute bending stress sigma = M y / I, computed separately.",
                ],
              },
              {
                q: "In an I-section, which part carries the major share of the bending moment and which carries the shear force? Why?",
                marks: 2,
              },
              {
                q: "Explain why the shear stress jumps at the junction of the flange and the web of an I-section.",
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
      title: "Torsion and Columns",
      summary:
        "Torsion of circular shafts through T/J = fs/R = G*theta/L, power transmission linking torque to speed, columns and struts with their end conditions, and the buckling theories of Euler for long columns and Rankine for the whole slenderness range.",
      chapter: {
        number: "04",
        title: "Torsion and Columns",
        intro:
          "Unit IV moves from bending of beams to torsion of shafts and buckling of columns. Torsion theory gives T/J = fs/R = G*theta/L for circular shafts, links power to torque and section, and explains why hollow shafts are more efficient. Columns and struts introduce the stability problem: a column short enough to crush is governed by yield, a column long enough to buckle is governed by Euler's critical load, and Rankine's formula blends the two with an empirical constant.",
        inOneBreath:
          "Torsion of a circular shaft assumes plane sections remain plane and undistorted, the material is Hookean in shear, and the shear stress varies linearly from zero at the axis to a maximum at the surface fs = T R / J; the torsion equation T/J = fs/R = G*theta/L links torque, shear stress, angle of twist and modulus of rigidity; power P = 2 pi N T / 60 with N in rpm; hollow shafts are more efficient for the same material; a column is a long compression member that may buckle before it crushes; Euler's critical load P_e = pi^2 E I / (L_e)^2 with effective length L_e depending on end conditions; Rankine's formula P_R = sigma_c A / (1 + a (L/k)^2) blends crushing and buckling.",
        sections: [
          {
            number: "4.1",
            title: "Torsion of circular shafts",
            body: [
              "A shaft is a member subjected to twisting moments (torques) about its longitudinal axis: the drive shaft of a truck, the propeller shaft of a ship, the spindle of a lathe. For a circular shaft - solid or hollow - the theory of torsion assumes that plane cross-sections remain plane and undistorted after twist, that radii remain straight, and that the material is homogeneous and obeys Hooke's law in shear. Under these assumptions a shaft of length L under torque T twists through an angle theta, with the shear stress varying linearly from zero at the centre to a maximum at the surface fs = T R / J. The fundamental relation is the torsion equation T/J = fs/R = G*theta/L, where J is the polar moment of area and G the modulus of rigidity.",
              "The derivation mirrors that of the bending equation in three steps. Geometry: the shear strain at radius r is gamma = r * theta / L, linear in r. Material: the shear stress is tau = G * gamma = G r * theta / L. Equilibrium: the torque is the integral of r * tau dA over the section = (G theta / L) integral r^2 dA = (G theta / L) * J. Equating to T gives T = G J theta / L, the third ratio, and substituting back gives fs = T R / J, the first. For a solid circular shaft of diameter d, J = pi d^4 / 32; for a hollow shaft with outer D and inner d, J = pi (D^4 - d^4) / 32.",
              "Hollow shafts are more efficient than solid ones for the same material. Because the shear stress is zero at the centre and grows toward the surface, the material near the axis contributes almost nothing to torque resistance; removing it to make a tube of the same outer diameter loses little strength but cuts weight by a third to a half. For the same weight, a hollow shaft has a much larger J because the material is concentrated at large r. Race-car driveshafts, propeller shafts, and gas-turbine spools are all hollow for this reason. The trade-off is wall stability: very thin walls buckle locally under torsion, so the ratio of diameter to wall thickness is held to about 10 to 20 in practice.",
            ],
            bullets: [
              "Torsion equation: T/J = fs/R = G*theta/L; J polar moment, G modulus of rigidity.",
              "Solid circular shaft J = pi d^4 / 32; hollow J = pi (D^4 - d^4) / 32.",
              "Shear stress varies linearly from zero at centre to fs = T R / J at the surface.",
              "Angle of twist theta = T L / (G J); design limit typically a fraction of a degree per metre.",
              "Hollow shafts more efficient: same weight gives larger J, but wall stability limits thinness.",
            ],
            table: {
              caption: "Polar moment and torsional properties of circular shafts.",
              headers: ["Section", "J (polar)", "Max shear stress fs", "Angle of twist theta"],
              rows: [
                ["Solid circle diameter d", "pi d^4 / 32", "16 T / (pi d^3)", "32 T L / (pi G d^4)"],
                ["Hollow outer D, inner d", "pi (D^4 - d^4) / 32", "16 T D / (pi (D^4 - d^4))", "32 T L / (pi G (D^4 - d^4))"],
                ["Solid shaft radius r", "pi r^4 / 2", "2 T / (pi r^3)", "2 T L / (pi G r^4)"],
                ["Thin tube mean r, thickness t", "2 pi r^3 t", "T / (2 pi r^2 t)", "T L / (2 pi G r^3 t)"],
                ["Square side a (approx)", "0.141 a^4", "approx 4.81 T / a^3", "non-circular: special theory"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Torsion equation in three languages",
              caption: "Each quadrant reads the same relation differently.",
              axes: { x: "Stress vs curvature", y: "Torque vs geometry" },
              quadrants: [
                { label: "Torque / J = T/J", note: "internal ratio" },
                { label: "Stress / R = fs/R", note: "stress ratio" },
                { label: "G * theta / L", note: "deformation ratio" },
                { label: "All three equal", note: "the torsion equation" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote T/J = fs/R = G*theta/L",
              body: "Write the torsion equation as the first line of any shaft answer. Examiners award one mark for stating it before substituting. Common slip: confusing fs = T R / J (surface stress) with the average shear; the surface stress is the design value, about twice the average for a solid shaft.",
            },
            keyTerms: [
              { term: "Torsion equation", definition: "T/J = fs/R = G*theta/L; relates torque, shear stress, angle of twist and modulus of rigidity for circular shafts." },
              { term: "Polar moment of area J", definition: "The second moment of area about the longitudinal axis; pi d^4 / 32 for a solid circle." },
              { term: "Modulus of rigidity G", definition: "Shear modulus, the slope of the shear stress-shear strain curve; E = 2 G (1 + nu) connects it to Young's modulus." },
            ],
            examQuestions: [
              {
                q: "Derive the torsion equation T/J = fs/R = G*theta/L for a circular shaft, stating the assumptions. A solid circular shaft of 50 mm diameter transmits a torque of 1.5 kN-m. Compute the maximum shear stress and the angle of twist over 2 m, taking G = 80 GPa.",
                marks: 7,
                outline: [
                  "Assumptions: circular section, plane sections remain plane and undistorted, Hookean in shear.",
                  "Geometry: gamma = r * theta / L; material: tau = G gamma = G r theta / L.",
                  "Equilibrium: T = integral r * tau dA = (G theta / L) * J.",
                  "Combine: T/J = tau/R = G theta / L.",
                  "J = pi d^4 / 32 = pi * 50^4 / 32 = 6.136e5 mm^4.",
                  "fs = T R / J = 1.5e6 * 25 / 6.136e5 = 61.1 MPa.",
                  "theta = T L / (G J) = 1.5e6 * 2000 / (80e3 * 6.136e5) = 0.0612 rad = 3.5 deg.",
                ],
              },
              {
                q: "Write the polar moment of area of a solid circular shaft of diameter d.",
                marks: 2,
              },
              {
                q: "Explain why a hollow shaft is more efficient than a solid shaft of the same material for transmitting torque.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Power transmission by shafts",
            body: [
              "A rotating shaft transmits power from a prime mover - an electric motor, a turbine, an engine - to a driven machine. The relation between power, torque and rotational speed is P = T * omega, where P is power in watts, T torque in newton-metres, and omega angular speed in radians per second. With N in revolutions per minute, omega = 2 pi N / 60, giving the working formula P = 2 pi N T / 60. Given a power and a speed, the torque follows immediately, and the torsion equation of the previous section then sizes the shaft. A 50 kW motor running at 1500 rpm delivers a torque of T = 60 P / (2 pi N) = 60 * 50000 / (2 pi * 1500) = 318 N-m.",
              "Shaft design proceeds in three steps. First, compute the torque from power and speed by T = 60 P / (2 pi N). Second, decide an allowable shear stress, typically 40 MPa for line shafts, 60 MPa for transmission shafts with keyways accounted for, and 80 to 100 MPa for short high-duty shafts. Third, apply the torsion equation fs = 16 T / (pi d^3) solved for d: d = (16 T / (pi fs))^1/3. For the 318 N-m torque above at 60 MPa, d works out to about 27.4 mm, rounded up to the next standard 30 mm. If a keyway is cut into the shaft, the diameter is increased by 10 to 15 percent to compensate for the lost material.",
              "Many shafts carry combined loading: torsion from the power transmission plus bending from belt pulls, gear forces, or the weight of mounted components. The design then uses an equivalent torque T_e = sqrt(M^2 + T^2) derived from the maximum shear stress criterion, and the same diameter formula d = (16 T_e / (pi fs))^1/3 is applied with T_e in place of T. The combination reflects that bending produces normal stress at the surface while torsion produces shear, and the maximum shear at a point on the surface depends on both. Real shafts also need checks for deflection, critical speed and fatigue, but the equivalent-torque formula is the exam-level answer that captures the static strength.",
            ],
            bullets: [
              "Power-torque-speed: P = 2 pi N T / 60 with N in rpm; T = 60 P / (2 pi N).",
              "Design torque T then diameter by fs = 16 T / (pi d^3), so d = (16 T / (pi fs))^1/3.",
              "Allowable shear: 40 MPa line shaft, 60 MPa transmission, 80-100 MPa short-duty.",
              "Keyway reduces area: increase d by 10-15% to compensate.",
              "Combined bending and torsion: equivalent torque T_e = sqrt(M^2 + T^2); use d = (16 T_e / (pi fs))^1/3.",
            ],
            table: {
              caption: "Torque and required diameter for typical power-speed combinations (fs = 60 MPa).",
              headers: ["Power (kW)", "Speed N (rpm)", "Torque T (N-m)", "Diameter d (mm)"],
              rows: [
                ["10", "1500", "63.7", "16.3"],
                ["50", "1500", "318", "27.4"],
                ["100", "1500", "637", "34.5"],
                ["50", "3000", "159", "21.7"],
                ["200", "1000", "1910", "50.5"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Shaft design under torsion only",
              caption: "Four steps from specification to standard diameter.",
              steps: [
                { label: "Given P (kW) and N (rpm)", note: "specification" },
                { label: "Compute T = 60 P / (2 pi N)", note: "torque in N-m" },
                { label: "Compute d = (16 T / (pi fs))^1/3", note: "with allowable shear" },
                { label: "Round up to standard size", note: "20, 25, 30, 35, 40 mm ..." },
                { label: "Add keyway allowance if needed", note: "+10-15 percent" },
              ],
            },
            callout: {
              type: "exam",
              title: "Carry units carefully",
              body: "Power-torque problems are the easiest place to drop a factor of 1000. With P in kW, multiply by 1000 before computing T = 60 P / (2 pi N); with P in watts, use T = 60 P / (2 pi N) directly. Write the units of T (N-m) and of d (mm) at every step, and convert T to N-mm before substituting into d = (16 T / (pi fs))^1/3.",
            },
            keyTerms: [
              { term: "Power-torque relation", definition: "P = 2 pi N T / 60, with P in watts, N in rpm, T in N-m; the working tool for shaft design." },
              { term: "Allowable shear stress", definition: "The design limit for shear stress in a shaft; 40-100 MPa depending on duty and keyway." },
              { term: "Equivalent torque", definition: "T_e = sqrt(M^2 + T^2); combines bending and torsion for combined-load shaft design." },
            ],
            examQuestions: [
              {
                q: "A solid circular shaft transmits 75 kW at 200 rpm. The allowable shear stress is 60 MPa. Determine the diameter of the shaft. If a keyway is cut into the shaft, by what percentage should the diameter be increased?",
                marks: 7,
                outline: [
                  "Compute torque T = 60 * 75000 / (2 * pi * 200) = 3581 N-m = 3.581e6 N-mm.",
                  "From shear stress: fs = 16 T / (pi d^3) -> d = (16 T / (pi fs))^1/3.",
                  "d = (16 * 3.581e6 / (pi * 60))^1/3 = (303,951)^1/3 = 67.3 mm.",
                  "Round up to standard 70 mm.",
                  "Verify at d = 70: fs = 16 * 3.581e6 / (pi * 70^3) = 53.2 MPa, OK (< 60).",
                  "Keyway reduces area by about 10-15 percent; increase d by the same factor.",
                  "Select 70 mm shaft (or 80 mm with keyway allowance).",
                ],
              },
              {
                q: "State the relation between power, torque and rotational speed for a shaft.",
                marks: 2,
              },
              {
                q: "A shaft is subjected to a bending moment M and a torque T. Write the expression for the equivalent torque and state how it is used in design.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Columns and struts",
            body: [
              "A column is a vertical compression member, a strut an inclined or horizontal one. The failure mode of a short compression member is yielding or crushing under the direct stress sigma = P / A; that of a long slender member is buckling, in which the member bows sideways and collapses at a load far smaller than the crushing load. Whether a column crushes or buckles depends on its slenderness ratio L / k, where L is the effective length and k the least radius of gyration of the section, k = sqrt(I_min / A). A slenderness ratio below about 30 is short, above about 120 is long, and the range between is the intermediate regime where Rankine's formula of section 4.5 applies.",
              "The effective length depends on the end conditions. For a column with both ends hinged (pinned), the effective length L_e equals the actual length L; with one end fixed and the other free, L_e = 2 L; with both ends fixed, L_e = L / 2; with one end fixed and the other pinned, L_e = 0.707 L. These factors reflect how the column buckles into a half-sine wave: more restraint at the ends means a shorter effective length and a higher buckling load. The Euler formula of section 4.4 uses this L_e, and Rankine's formula uses the same L_e inside the slenderness ratio. End conditions are therefore the first thing to identify in a column problem.",
              "Sections for columns are chosen to maximise the radius of gyration in both axes for a given area. A square tube, a circular tube, or an I-section with equal flanges all have similar radii about both axes and are good column sections. A rectangular section with one dimension much larger than the other has very different I about the two axes and tends to buckle about the weak axis; the same is true of a T or angle. The least radius of gyration governs because the column buckles about the axis with the least I. Batten plates or lacing bars connect the components of a built-up column to make them act together, preventing local buckling of the individual legs before the whole column buckles.",
            ],
            bullets: [
              "Column: vertical compression member; strut: inclined or horizontal compression member.",
              "Short columns crush at sigma = P/A; long columns buckle at a lower load.",
              "Slenderness ratio L/k; k = sqrt(I_min/A); below 30 short, above 120 long.",
              "Effective length L_e: hinged-hinged L, fixed-free 2L, fixed-fixed L/2, fixed-hinged 0.707 L.",
              "Section chosen for equal k in both axes; least I governs buckling direction.",
            ],
            table: {
              caption: "Effective length factors for columns with various end conditions.",
              headers: ["End conditions", "Effective length L_e", "Factor", "Buckling shape"],
              rows: [
                ["Both ends hinged", "L", "1.0", "half-sine wave"],
                ["Both ends fixed", "L / 2", "0.5", "quarter wave with inflexion points"],
                ["One fixed, one free", "2 L", "2.0", "quarter wave, tip displaces"],
                ["One fixed, one hinged", "0.707 L", "0.707", "with one inflexion"],
                ["Both ends guided (rare)", "L", "1.0", "constrained rotation"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Classifying and sizing a column",
              caption: "Five stages from problem statement to design load.",
              stages: [
                { label: "Identify end conditions", note: "hinged, fixed, free" },
                { label: "Compute effective length L_e", note: "factor times actual length" },
                { label: "Compute least k from I_min/A", note: "slenderness L_e/k" },
                { label: "Classify short or long", note: "below 30 short, above 120 long" },
                { label: "Apply Rankine or Euler", note: "blends in intermediate range" },
              ],
            },
            callout: {
              type: "exam",
              title: "Identify the ends first",
              body: "Half the marks in a column problem go to identifying the end conditions and writing the correct effective length factor. Always sketch the column, label the ends as 'hinged' (a triangle), 'fixed' (hatched wall), or 'free' (no support), and quote L_e = factor * L before substituting into Euler or Rankine.",
            },
            keyTerms: [
              { term: "Column", definition: "A vertical compression member; classified as short (crushes) or long (buckles) by slenderness ratio." },
              { term: "Effective length", definition: "The length of an equivalent hinged-hinged column with the same buckling load; factor times actual length depending on end conditions." },
              { term: "Slenderness ratio", definition: "L_e / k, the ratio of effective length to least radius of gyration; governs short vs long column behaviour." },
            ],
            examQuestions: [
              {
                q: "Define column, strut and slenderness ratio. Tabulate the effective length of columns for the four standard end conditions. A hollow circular steel column of 100 mm outer diameter and 80 mm inner diameter, 3 m long with both ends hinged, has a slenderness ratio below 100. Compute its least radius of gyration and the cross-sectional area.",
                marks: 7,
                outline: [
                  "Define column (vertical), strut (inclined), slenderness ratio L_e/k.",
                  "Tabulate L_e: hinged-hinged L, fixed-fixed L/2, fixed-free 2L, fixed-hinged 0.707 L.",
                  "Area A = pi/4 (D^2 - d^2) = pi/4 (100^2 - 80^2) = 2827 mm^2.",
                  "I about any diametral axis = pi (D^4 - d^4) / 64 = pi (1e8 - 4.096e7) / 64 = 2.904e6 mm^4.",
                  "Least k = sqrt(I/A) = sqrt(2.904e6 / 2827) = 32.06 mm.",
                  "Slenderness ratio L_e/k = 3000 / 32.06 = 93.6 (intermediate, Rankine governs).",
                  "Identify end conditions on a sketch; mention hinged-hinged is the reference case.",
                ],
              },
              {
                q: "Define slenderness ratio and state the effective length factor for a column with both ends fixed.",
                marks: 2,
              },
              {
                q: "Distinguish between short, intermediate and long columns by their slenderness ratio and failure mode.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Euler's theory of columns",
            body: [
              "Euler's theory gives the critical load at which an ideal, perfectly straight, homogeneous, long column buckles. The theory assumes that the column is long enough that buckling, not yielding, governs; that stresses remain below the proportional limit at the critical load; and that the column is initially straight with axial loading only. The critical load for a column with both ends hinged is P_e = pi^2 E I / L^2, where E is Young's modulus, I the least second moment of area, and L the actual (and effective) length. For other end conditions L is replaced by L_e, giving the general formula P_e = pi^2 E I / (L_e)^2. This is the load at which the column ceases to be in stable equilibrium in the straight position and a small lateral deflection can grow without bound.",
              "The derivation considers the column in a slightly deflected position and writes the bending moment at any section as M = -P * y (the lateral deflection multiplied by the axial load). The differential equation E I y'' = -P y has the sinusoidal solution y = A sin(pi x / L) for hinged ends, with the condition that the column remains in equilibrium only if sqrt(P / (E I)) = pi / L, which gives P_e = pi^2 E I / L^2. The half-sine buckling shape is the first mode; higher modes (two half-sines, three half-sines) correspond to higher loads and require intermediate supports to be realised. The first-mode load is the design-relevant one because no intermediate support exists in a simple column.",
              "Euler's formula has an awkward feature: it predicts zero critical load for very short columns, which is wrong because short columns crush rather than buckle. The formula is valid only for slenderness ratios above a limit found by equating the Euler stress to the yield stress: pi^2 E / (L/k)^2 = sigma_y, giving (L/k)_limit = sqrt(pi^2 E / sigma_y). For mild steel with E = 200 GPa and sigma_y = 250 MPa, this limit is about 90 - columns with slenderness above 90 are Euler columns; below that, Rankine's empirical blend (section 4.5) takes over. Euler's theory is therefore the theory of the long column, and the engineer's first check is whether the column qualifies as long.",
            ],
            bullets: [
              "Euler's critical load: P_e = pi^2 E I / (L_e)^2 for an ideal long column.",
              "Assumptions: perfectly straight, homogeneous, axial load, stress below proportional limit.",
              "Derivation: M = -P y; differential equation E I y'' + P y = 0; sinusoidal solution.",
              "Valid only above slenderness limit sqrt(pi^2 E / sigma_y); about 90 for mild steel.",
              "First-mode half-sine governs; higher modes need intermediate supports.",
            ],
            table: {
              caption: "Euler critical stress for mild steel columns (E = 200 GPa).",
              headers: ["L_e / k", "Euler stress (MPa)", "Region", "Governing formula"],
              rows: [
                ["30", "2193", "short", "crushing sigma_y"],
                ["60", "548", "intermediate", "Rankine"],
                ["90", "244", "border", "Euler = yield"],
                ["120", "137", "long", "Euler"],
                ["180", "61", "long", "Euler"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Euler's buckling theory, assumptions layered",
              caption: "Each layer must hold; break any one and the load drops.",
              layers: [
                { label: "Column initially perfectly straight", note: "no initial curvature" },
                { label: "Material homogeneous and Hookean", note: "below proportional limit" },
                { label: "Load perfectly axial", note: "no eccentricity" },
                { label: "End conditions ideal", note: "hinged, fixed, or free" },
                { label: "Slenderness above the Euler limit", note: "buckling governs" },
              ],
            },
            callout: {
              type: "warning",
              title: "Check slenderness before using Euler",
              body: "Euler's formula gives absurdly high loads for short columns - a short steel rod would 'resist' thousands of kN according to pi^2 E I / L^2, far above its crushing load. Always compute L_e / k first; if it is below 90 for steel, do not use Euler alone, switch to Rankine. Quoting an Euler load for a short column is a classic exam slip.",
            },
            keyTerms: [
              { term: "Euler's critical load", definition: "P_e = pi^2 E I / (L_e)^2; the axial load at which an ideal long column buckles." },
              { term: "Buckling", definition: "A stability failure in which a slender compression member bows sideways and collapses at a stress below yield." },
              { term: "Slenderness limit", definition: "(L/k) above which Euler applies; sqrt(pi^2 E / sigma_y), about 90 for mild steel." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of Euler's theory of columns. Derive an expression for the crippling load of a long column with both ends hinged. Determine the slenderness ratio limit above which Euler's formula is valid for mild steel with E = 200 GPa and yield stress 250 MPa.",
                marks: 7,
                outline: [
                  "List assumptions: perfectly straight, homogeneous, axial, Hookean, slenderness above limit.",
                  "Consider column in slightly deflected shape y(x); M at section = -P y.",
                  "Differential equation E I y'' + P y = 0; general solution y = A sin(k x) + B cos(k x) with k = sqrt(P/(EI)).",
                  "Boundary conditions y(0) = 0 -> B = 0; y(L) = 0 -> sin(k L) = 0 -> k L = pi.",
                  "Therefore P = pi^2 E I / L^2 for hinged-hinged column; replace L by L_e for other ends.",
                  "Slenderness limit: equate Euler stress pi^2 E / (L/k)^2 to sigma_y.",
                  "(L/k)_limit = sqrt(pi^2 E / sigma_y) = sqrt(pi^2 * 200e3 / 250) = 88.9, about 90.",
                ],
              },
              {
                q: "Write Euler's formula for the critical load of a column with both ends hinged.",
                marks: 2,
              },
              {
                q: "Why is Euler's formula not applicable to short columns? Explain with reference to the slenderness ratio limit.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Rankine's formula",
            body: [
              "Rankine's formula blends crushing and buckling into a single empirical expression valid for the entire range of slenderness. The formula is P_R = sigma_c A / (1 + a (L_e / k)^2), where sigma_c is the crushing stress of the material, A the cross-sectional area, a = sigma_c / (pi^2 E) a material constant (Rankine's constant), L_e the effective length and k the least radius of gyration. For short columns with small L_e / k, the denominator is close to 1 and P_R approaches sigma_c A, the crushing load. For long columns with large L_e / k, the denominator grows as (L_e / k)^2 and P_R approaches pi^2 E I / (L_e)^2, the Euler load. Rankine thus connects the two regimes continuously.",
              "The constant a is small for materials like mild steel (about 1/7500) and larger for materials like cast iron (about 1/1600) or timber (about 1/750). The numerical values reflect that cast iron and timber deviate from the Euler ideal at lower slenderness because of inhomogeneity and early nonlinearity. Rankine's formula is therefore not just a blend but a calibration: the constant a is chosen so that the formula matches experimental failure loads for the material in question. In practice, structural steel columns are designed by the IS code column curves (which are Rankine-like with multiple constants), and timber and cast iron still use the simple Rankine formula directly.",
              "The design workflow for a Rankine column is: compute the section properties A and k; identify the end conditions and L_e; compute the slenderness L_e / k; look up sigma_c and a for the material; substitute into P_R = sigma_c A / (1 + a (L_e / k)^2). For a mild steel hollow column of 100 mm outer diameter, 80 mm inner, 3 m long hinged-hinged, A = 2827 mm^2 and k = 32.06 mm, so L_e/k = 93.6; with sigma_c = 320 MPa and a = 1/7500 = 1.33e-4, the denominator is 1 + 1.33e-4 * 8762 = 2.17, giving P_R = 320 * 2827 / 2.17 = 417 kN. The Euler load for the same column would be 590 kN - Rankine gives a safer, lower number that accounts for imperfections.",
            ],
            bullets: [
              "Rankine's formula: P_R = sigma_c A / (1 + a (L_e / k)^2), valid for all slenderness.",
              "Short column: denominator ~1, P_R approaches sigma_c A (crushing).",
              "Long column: denominator grows as (L_e/k)^2, P_R approaches Euler load.",
              "Rankine's constant a = sigma_c / (pi^2 E); mild steel ~1/7500, cast iron ~1/1600.",
              "Safer than Euler for intermediate columns; calibrates to experimental failures.",
            ],
            table: {
              caption: "Rankine constants and crushing stress for common materials.",
              headers: ["Material", "sigma_c (MPa)", "a = Rankine's constant", "E (GPa)"],
              rows: [
                ["Mild steel", "320", "1 / 7500", "200"],
                ["Cast iron", "550", "1 / 1600", "100"],
                ["Timber", "50", "1 / 750", "12"],
                ["Aluminium alloy", "300", "1 / 5000", "70"],
                ["Concrete", "30", "1 / 1000", "25"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Euler vs Rankine across the slenderness range",
              caption: "Rankine matches Euler at large L/k and crushing at small L/k.",
              left: {
                heading: "Euler",
                items: [
                  "Valid for long columns only",
                  "Gives P_e = pi^2 E I / L_e^2",
                  "Predicts very high load for short columns (wrong)",
                  "Ignores material crushing",
                  "Theoretical, ideal column",
                ],
              },
              right: {
                heading: "Rankine",
                items: [
                  "Valid across the whole slenderness range",
                  "Gives P_R = sigma_c A / (1 + a (L/k)^2)",
                  "Approaches crushing load for short columns",
                  "Approaches Euler load for long columns",
                  "Empirical constant calibrates to tests",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Use Rankine for steel columns in the exam",
              body: "Unless the column is clearly very long (slenderness above 120 for steel) or clearly very short (below 30), Rankine's formula is the safe choice. Quote P_R = sigma_c A / (1 + a (L_e/k)^2), substitute sigma_c = 320 MPa and a = 1/7500 for mild steel, and compute the load. Always compare with the Euler load and pick the lower; Rankine will be lower for intermediate columns.",
            },
            keyTerms: [
              { term: "Rankine's formula", definition: "P_R = sigma_c A / (1 + a (L_e / k)^2); empirical crippling load valid for all slenderness ratios." },
              { term: "Rankine's constant a", definition: "Material constant sigma_c / (pi^2 E); 1/7500 for mild steel, 1/1600 for cast iron." },
              { term: "Crushing stress sigma_c", definition: "The compressive stress at which a short column fails by yielding or crushing; the numerator of Rankine's formula." },
            ],
            examQuestions: [
              {
                q: "State Rankine's formula for the crippling load of a column. Explain how it accounts for both crushing and buckling. A mild steel hollow tube of 80 mm outer diameter and 60 mm inner diameter, 2.5 m long with both ends hinged, fails by Rankine's formula. Taking sigma_c = 320 MPa and a = 1/7500, find the safe load with a factor of safety of 4.",
                marks: 7,
                outline: [
                  "State Rankine's formula P_R = sigma_c A / (1 + a (L_e / k)^2).",
                  "Compute A = pi/4 (80^2 - 60^2) = pi/4 * 2800 = 2199 mm^2.",
                  "Compute I = pi (80^4 - 60^4) / 64 = pi (4.096e7 - 1.296e7) / 64 = 1.374e6 mm^4.",
                  "k = sqrt(I/A) = sqrt(1.374e6 / 2199) = 25.0 mm.",
                  "Slenderness L_e/k = 2500 / 25.0 = 100 (hinged-hinged, L_e = L).",
                  "Denominator 1 + a (L_e/k)^2 = 1 + (1/7500) * 10000 = 1 + 1.333 = 2.333.",
                  "P_R = 320 * 2199 / 2.333 = 301,600 N = 301.6 kN; safe load = 301.6 / 4 = 75.4 kN.",
                ],
              },
              {
                q: "Write Rankine's formula and define each term.",
                marks: 2,
              },
              {
                q: "Show that Rankine's formula reduces to the Euler crippling load for very long columns and to the crushing load for very short columns.",
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
      title: "Thin Cylinders and Deflection of Beams",
      summary:
        "Membrane stresses in thin cylinders and spheres, wire winding for high-pressure service, and beam deflection by Macaulay's singularity functions and by the moment area method.",
      chapter: {
        number: "05",
        title: "Thin Cylinders and Deflection of Beams",
        intro:
          "Unit V closes the course with two applied topics: thin cylinders and beam deflection. Thin cylinders carry internal pressure by membrane stresses - hoop and longitudinal - and are augmented by wire winding for high-pressure service. Thin spherical shells are the natural complement. Beam deflection is computed by Macaulay's method for general loading and by the moment area method for slope and deflection at chosen points.",
        inOneBreath:
          "A thin cylinder has wall thickness t <= d/20 and carries internal pressure p; the hoop stress sigma_h = p d / (2 t) acts circumferentially and the longitudinal stress sigma_l = p d / (4 t) acts along the length, so the hoop stress is twice the longitudinal; the circumferential strain equals (sigma_h - nu sigma_l)/E and the longitudinal strain equals (sigma_l - nu sigma_h)/E; volumetric strain is the sum of twice the circumferential strain and the longitudinal strain; a thin sphere has equal biaxial stress sigma = p d / (4 t), half the cylinder hoop; wire winding pre-tensions steel wire around the cylinder to introduce compressive hoop stress that offsets the pressure tensile stress; Macaulay's method uses a singularity function to integrate M/EI in one equation across discontinuities; the moment area method uses the two theorems that the change of slope between two points equals the area under the M/EI diagram and the tangential deviation equals the moment of that area.",
        sections: [
          {
            number: "5.1",
            title: "Thin cylinders - hoop and longitudinal stress",
            body: [
              "A thin cylinder is a pressure vessel whose wall thickness t is small compared with the diameter d - conventionally t <= d/15 or d/20 - so the stresses can be assumed uniform across the wall. Such vessels store gas, steam, water and oil in tanks, boilers, hydraulic accumulators and pipelines. Under internal pressure p the wall develops two membrane stresses: the hoop (circumferential) stress sigma_h = p d / (2 t), acting tangentially around the cylinder, and the longitudinal stress sigma_l = p d / (4 t), acting along the length. The hoop stress is twice the longitudinal, so the hoop direction is the design-critical one; longitudinal seams in a boiler are therefore made as strong as the material allows, and circumferential joints can be lighter.",
              "The derivation of each stress considers a free body cut along the relevant plane. For the hoop stress, a longitudinal cut exposes two wall areas each of length L and thickness t carrying the hoop force; the internal pressure on the projected rectangular area p * d * L is balanced by 2 * sigma_h * t * L, giving sigma_h = p d / (2 t). For the longitudinal stress, a transverse cut exposes the ring area pi d t carrying the longitudinal force; the pressure on the projected circular area p * pi d^2 / 4 is balanced by sigma_l * pi d t, giving sigma_l = p d / (4 t). Both results are obtained from the same simple equilibrium: pressure times projected area equals stress times exposed wall area.",
              "The strains follow from the stresses by Hooke's law in two dimensions. The circumferential strain e_h = (sigma_h - nu sigma_l) / E and the longitudinal strain e_l = (sigma_l - nu sigma_h) / E. The diameter changes by delta d = e_h * d, the length by delta L = e_l * L, and the volume by delta V / V = 2 e_h + e_l, the volumetric strain. For a steel cylinder with d = 1 m, t = 10 mm, p = 2 MPa, E = 200 GPa and nu = 0.3, sigma_h = 100 MPa and sigma_l = 50 MPa; the diameter grows by 0.425 mm and the volume increases by about 0.001, or 0.1 percent. These numbers are the design check against the allowable stress and the joint tightness.",
            ],
            bullets: [
              "Thin cylinder: t <= d/15 to d/20; stresses uniform across wall.",
              "Hoop stress sigma_h = p d / (2 t); longitudinal stress sigma_l = p d / (4 t); hoop is twice.",
              "Hoop stress derived from longitudinal cut: pressure on rectangle p d L balanced by 2 sigma_h t L.",
              "Circumferential strain e_h = (sigma_h - nu sigma_l) / E; longitudinal strain e_l = (sigma_l - nu sigma_h) / E.",
              "Volumetric strain e_v = 2 e_h + e_l; design check sigma_h <= allowable, delta d acceptable.",
            ],
            table: {
              caption: "Stress and strain in a thin steel cylinder (d = 1 m, t = 10 mm, p = 2 MPa, E = 200 GPa, nu = 0.3).",
              headers: ["Quantity", "Formula", "Value"],
              rows: [
                ["Hoop stress sigma_h", "p d / (2 t)", "100 MPa"],
                ["Longitudinal stress sigma_l", "p d / (4 t)", "50 MPa"],
                ["Circumferential strain e_h", "(sigma_h - nu sigma_l) / E", "4.25e-4"],
                ["Longitudinal strain e_l", "(sigma_l - nu sigma_h) / E", "1.0e-4"],
                ["Volumetric strain e_v", "2 e_h + e_l", "9.5e-4"],
                ["Change in diameter", "e_h * d", "0.425 mm"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Thin cylinder stresses, derived in tiers",
              caption: "From the pressure to the volumetric strain in five tiers.",
              tiers: [
                { label: "Internal pressure p", note: "loading" },
                { label: "Hoop stress p d / (2 t)", note: "twice the longitudinal" },
                { label: "Longitudinal stress p d / (4 t)", note: "from transverse cut" },
                { label: "Strains by Hooke's law in 2D", note: "include Poisson coupling" },
                { label: "Volumetric strain 2 e_h + e_l", note: "design check" },
              ],
            },
            callout: {
              type: "exam",
              title: "Hoop is twice longitudinal",
              body: "The fact that the hoop stress equals twice the longitudinal stress is the most-tested result in thin-cylinder questions. State it before any computation, and explain that it is why longitudinal seams (which resist hoop stress) are designed stronger than circumferential seams. Boilers fail by splitting along a longitudinal seam, never around the circumference.",
            },
            keyTerms: [
              { term: "Thin cylinder", definition: "A pressure vessel whose wall thickness is at most d/15 to d/20 of its diameter, allowing uniform stress across the wall." },
              { term: "Hoop stress", definition: "Circumferential stress sigma_h = p d / (2 t) in a thin cylinder under internal pressure; twice the longitudinal stress." },
              { term: "Longitudinal stress", definition: "Axial stress sigma_l = p d / (4 t) in a thin cylinder under internal pressure; half the hoop stress." },
            ],
            examQuestions: [
              {
                q: "Derive expressions for the hoop stress and longitudinal stress in a thin cylindrical shell subjected to internal pressure p. A thin cylinder 1.2 m in diameter and 12 mm thick carries an internal pressure of 2.5 MPa. Find the hoop and longitudinal stresses, the circumferential strain and the change in diameter. Take E = 200 GPa and nu = 0.3.",
                marks: 7,
                outline: [
                  "State the condition for thin cylinder: t/d <= 1/15 or 1/20.",
                  "Derive hoop stress: pressure on projected rectangle p d L balanced by 2 sigma_h t L -> sigma_h = p d / (2 t).",
                  "Derive longitudinal stress: pressure on projected circle p pi d^2/4 balanced by sigma_l pi d t -> sigma_l = p d / (4 t).",
                  "Compute sigma_h = 2.5 * 1200 / (2 * 12) = 125 MPa; sigma_l = 62.5 MPa.",
                  "Circumferential strain e_h = (125 - 0.3 * 62.5) / 200000 = 5.31e-4.",
                  "Change in diameter delta d = e_h * d = 5.31e-4 * 1200 = 0.637 mm.",
                  "Note hoop stress governs design; check against allowable stress.",
                ],
              },
              {
                q: "State the relationship between hoop stress and longitudinal stress in a thin cylinder.",
                marks: 2,
              },
              {
                q: "Write the expressions for circumferential and longitudinal strain in a thin cylinder and explain the Poisson coupling.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Thin spherical shells and volumetric strain",
            body: [
              "A thin spherical shell is the natural complement to the thin cylinder: it stores gas or liquid under pressure with no preferred direction, so the two membrane stresses are equal. For a sphere of diameter d and thickness t under internal pressure p, symmetry about any diameter gives a single hoop stress sigma = p d / (4 t) acting in every direction on the shell. The derivation cuts the sphere on a diametral plane and balances the pressure on the projected circular area p * pi * d^2 / 4 against the ring wall force sigma * pi * d * t, giving sigma = p d / (4 t). The sphere is therefore twice as efficient as the cylinder for the same diameter and thickness: the maximum stress is half the cylinder's hoop stress, which is why gas storage tanks and deep-submergence vessels are spherical.",
              "The strain in a spherical shell follows from the equal biaxial stress state. Each direction has strain e = (sigma - nu sigma) / E = sigma (1 - nu) / E, so the circumferential strain equals (p d (1 - nu)) / (4 t E). The diameter grows by delta d = e * d, and the volume grows by delta V / V = 3 e (three equal linear strains). For the steel cylinder of section 5.1 with d = 1 m, t = 10 mm, p = 2 MPa, E = 200 GPa and nu = 0.3 converted into a sphere, the stress would be 50 MPa (half the cylinder's hoop), the strain 1.75e-4, and the volumetric strain 5.25e-4. Spherical vessels therefore see both lower stress and lower volumetric strain for the same pressure.",
              "Spherical shells are used wherever pressure is high and weight matters: liquefied gas storage tanks, the pressure hulls of submersibles, the ends of cylindrical pressure vessels (the end caps, called heads), and the domes of nuclear containments. The hemispherical head on a cylindrical boiler is a typical compromise: the cylindrical body carries the longitudinal pressure efficiently, the hemispherical end carries the radial pressure as a sphere, and the junction is designed to handle the mismatch in radial expansion. Spherical vessels cost more to fabricate than cylindrical ones of the same volume because they require curved plate work, so they appear where the pressure saving justifies the cost, typically above 5 MPa service.",
            ],
            bullets: [
              "Thin sphere: symmetry gives equal biaxial stress sigma = p d / (4 t).",
              "Derivation: pressure on projected circle p pi d^2/4 balanced by ring force sigma pi d t.",
              "Sphere is twice as efficient as cylinder: max stress is half the cylinder's hoop.",
              "Strain e = sigma (1 - nu) / E; volumetric strain = 3 e (three equal strains).",
              "Used in LPG tanks, submersibles, boiler heads, nuclear containments.",
            ],
            table: {
              caption: "Comparison of thin cylinder and thin sphere under the same pressure (d, t, p, E, nu).",
              headers: ["Quantity", "Cylinder (hoop)", "Cylinder (longitudinal)", "Sphere"],
              rows: [
                ["Membrane stress", "p d / (2 t)", "p d / (4 t)", "p d / (4 t)"],
                ["Stress ratio to sphere", "2", "1", "1"],
                ["Linear strain", "(sigma_h - nu sigma_l) / E", "(sigma_l - nu sigma_h) / E", "sigma (1 - nu) / E"],
                ["Volumetric strain", "2 e_h + e_l", "as on left", "3 e"],
                ["Design", "longitudinal seam critical", "circumferential seam", "uniform all directions"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Thin vessel design cycle",
              caption: "From pressure to vessel type to wall thickness.",
              steps: [
                { label: "Specify pressure and volume", note: "design data" },
                { label: "Choose vessel shape", note: "cylinder or sphere" },
                { label: "Compute membrane stress", note: "p d / (2 t) or p d / (4 t)" },
                { label: "Set wall thickness", note: "stress below allowable" },
                { label: "Compute strains", note: "diameter and volume change" },
                { label: "Detail joints and heads", note: "fabrication" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sphere halves the stress",
              body: "When asked to compare thin cylinders and thin spheres, state in one sentence that the sphere's maximum membrane stress is half the cylinder's hoop stress for the same diameter and thickness. This single comparison is worth two marks and is the structural reason high-pressure storage prefers spheres. Then quote sigma_sphere = p d / (4 t) and sigma_cylinder = p d / (2 t) to anchor the algebra.",
            },
            keyTerms: [
              { term: "Thin spherical shell", definition: "A pressure vessel of spherical shape with t <= d/20; equal biaxial membrane stress sigma = p d / (4 t)." },
              { term: "Membrane stress", definition: "The in-plane stress in a thin shell, uniform across the thickness, computed by equilibrium of the pressure and the wall force." },
              { term: "Hemispherical head", definition: "A spherical cap used to close a cylindrical pressure vessel; carries the radial pressure as a thin sphere." },
            ],
            examQuestions: [
              {
                q: "Derive an expression for the membrane stress in a thin spherical shell subjected to internal pressure. Compare it with the hoop stress in a thin cylinder of the same diameter and thickness under the same pressure. A thin spherical shell of 1.5 m diameter and 12 mm thickness carries an internal pressure of 3 MPa. Find the stress and the volumetric strain, taking E = 200 GPa and nu = 0.3.",
                marks: 7,
                outline: [
                  "Cut sphere on a diametral plane; pressure on projected circle p pi d^2 / 4.",
                  "Wall force sigma pi d t; equilibrium gives sigma = p d / (4 t).",
                  "Compare with cylinder hoop p d / (2 t): sphere stress is half.",
                  "Compute sigma = 3 * 1500 / (4 * 12) = 93.75 MPa.",
                  "Strain e = sigma (1 - nu) / E = 93.75 * 0.7 / 200000 = 3.28e-4.",
                  "Volumetric strain = 3 e = 9.84e-4.",
                  "Check against allowable and comment on volume change.",
                ],
              },
              {
                q: "State the membrane stress in a thin spherical shell under internal pressure.",
                marks: 2,
              },
              {
                q: "Why are spherical pressure vessels preferred for high-pressure storage? Explain with reference to the membrane stress.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Thin cylinders with wire winding",
            body: [
              "Wire winding strengthens a thin cylinder against internal pressure by winding steel wire under tension around the outside, so that when the pressure is applied the wire continues to carry part of the hoop tension and the cylinder wall carries less. The winding puts the cylinder wall into initial compression in the hoop direction: the tensioned wire squeezes the cylinder inward, setting up a compressive hoop stress in the wall that partially cancels the tensile hoop stress from the later internal pressure. The result is a vessel of the same wall thickness that can carry a higher pressure, or a vessel of lower wall thickness that carries the same pressure - the trade is efficiency for fabrication complexity.",
              "The analysis splits the load between the cylinder and the wire. Let sigma_w be the initial tensile stress in the wire and sigma_c the initial compressive stress it induces in the cylinder wall; by equilibrium of the ring, sigma_w * A_w + sigma_c * A_c = 0 (per unit length), where A_w is the wire area per unit length and A_c is 2 t (the two wall thicknesses per unit length of joint). When the pressure p is applied, it produces a hoop stress p d / (2 t) in the combined wall-plus-wire section, shared in proportion to their stiffnesses. The final cylinder hoop stress is the initial compressive sigma_c plus the pressure-induced tensile share; the design target is to keep it below the allowable stress.",
              "Wire-wound cylinders are common in high-pressure hydraulic service, in gun barrels (built-up hoops follow the same principle), and in some chemical reactors where a steel liner is wound with high-tensile wire to resist corrosion while carrying the pressure. The alternative construction for high pressure is the thick cylinder (Lame's equations), but wire winding keeps the analysis within the thin-wall theory of section 5.1 and allows field repair by re-winding. The exam problem typically asks for the initial winding tension needed to share the pressure stress equally between wire and cylinder; the answer is a one-line equilibrium plus a compatibility statement that they strain together.",
            ],
            bullets: [
              "Wire winding: tensioned wire around cylinder induces compressive hoop stress in wall.",
              "Initial equilibrium: sigma_w A_w + sigma_c A_c = 0 per unit length of seam.",
              "Pressure stress shared by cylinder and wire in proportion to stiffness (area times modulus).",
              "Final cylinder hoop stress = initial compressive + pressure-induced tensile share.",
              "Applications: hydraulic cylinders, gun barrels, lined chemical reactors; field-repairable.",
            ],
            table: {
              caption: "Sharing of hoop stress in a wire-wound cylinder (initial wire tension 80 MPa).",
              headers: ["Stage", "Cylinder hoop stress", "Wire stress", "Net on cylinder wall"],
              rows: [
                ["After winding (no pressure)", "-40 MPa (compressive)", "+80 MPa (tensile)", "compressive"],
                ["Pressure alone (no wire)", "+100 MPa (tensile)", "n/a", "tensile"],
                ["Pressure on wound cylinder", "+30 MPa (net)", "+110 MPa", "tensile, reduced"],
                ["Design target", "below allowable", "below allowable of wire", "safe"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Wire-wound cylinder design decisions",
              caption: "Choose winding tension to balance the pressure stress.",
              start: "Specify the pressure and the cylinder geometry",
              branches: [
                { label: "Compute pressure hoop stress p d / (2 t)", outcome: "tensile, governs design", good: true },
                { label: "Choose initial wire tension", outcome: "induces compressive stress in wall", good: true },
                { label: "Combine compressive + pressure tensile", outcome: "net hoop stress in cylinder wall", good: true },
                { label: "Verify wire stress at pressure", outcome: "must be below wire allowable", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Initial tension cancels pressure",
              body: "The trick of wire winding is to set the initial wire tension so that the resulting compressive hoop stress in the cylinder wall roughly equals the tensile hoop stress that the pressure will later induce. The cylinder then sees a near-zero net hoop stress under working pressure and the wire carries the entire tension. State this design target as one sentence in any wire-winding answer; examiners reward the conceptual statement before the algebra.",
            },
            keyTerms: [
              { term: "Wire winding", definition: "A strengthening technique in which tensioned wire is wrapped around a thin cylinder to induce compressive hoop stress in the wall." },
              { term: "Initial compressive hoop stress", definition: "The compressive stress induced in a cylinder wall by the tension of wire wound around it, before pressure is applied." },
              { term: "Built-up cylinder", definition: "A pressure vessel assembled from concentric hoops or wire layers, each pre-stressed to share the load efficiently." },
            ],
            examQuestions: [
              {
                q: "Explain the purpose of wire winding on thin cylinders. A thin cylinder 1 m in diameter and 10 mm thick is to carry an internal pressure of 2 MPa. The allowable hoop stress in the cylinder material is 40 MPa. Find the initial tensile stress required in a single layer of steel wire of 2 mm diameter wound closely pitch to pitch around the cylinder so that the final hoop stress in the cylinder does not exceed the allowable. Take E equal for both materials.",
                marks: 7,
                outline: [
                  "Explain: wire winding induces compressive hoop stress in wall, cancelling part of pressure tensile.",
                  "Pressure hoop stress alone = p d / (2 t) = 2 * 1000 / (2 * 10) = 100 MPa (tensile).",
                  "Allowable in cylinder 40 MPa; wire must supply cancellation of 60 MPa.",
                  "Wire area per unit length A_w = pi/4 * 2^2 * (1000 / 2) = 1571 mm^2/m.",
                  "Cylinder wall area per unit length A_c = 2 * t = 20 mm^2/mm = 20000 mm^2/m.",
                  "Equilibrium: sigma_w * A_w = (cancellation) * A_c -> sigma_w = 60 * 20000 / 1571 = 764 MPa (initial wire tension).",
                  "Verify final wire stress = initial + pressure share, below wire allowable.",
                ],
              },
              {
                q: "State the purpose of wire winding a thin cylinder.",
                marks: 2,
              },
              {
                q: "Show how the initial tensile stress in the winding wire induces a compressive hoop stress in the cylinder wall.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Macaulay's method for beam deflection",
            body: [
              "Macaulay's method, also called the method of singularity functions, computes the deflection of a beam under any combination of point loads, distributed loads and couples in a single integration across the whole span. The trick is to write the bending moment expression M(x) using Macaulay brackets <x - a>^n that are zero when x < a and equal to (x - a)^n when x >= a. Each load contributes a term that turns on only past its position, so the bending moment equation is continuous in form even though the load is discontinuous. Integrating M/EI twice gives the slope and the deflection with two constants of integration, fixed by the boundary conditions of the supports.",
              "The Macaulay bracket is a notational device with its own integration rule: integral of <x - a>^n dx = <x - a>^(n+1) / (n+1) for n >= 0, and the bracket stays in the answer rather than being expanded. The two constants of integration come from the support conditions: for a simply supported beam the deflection is zero at both supports, giving two equations to solve. For a cantilever the deflection and slope are zero at the fixed end. The method handles overhanging beams and mixed loadings without splitting the beam into segments, which is its chief advantage over the double-integration approach taken segment by segment.",
              "A worked example shows the procedure. A simply supported beam of span L carries a point load W at distance a from the left support and b from the right (a + b = L). The reactions are R_A = W b / L and R_B = W a / L. The Macaulay bending moment is M(x) = R_A x - W <x - a>. Integrating M/EI gives slope: E I dy/dx = R_A x^2 / 2 - W <x - a>^2 / 2 + C1. Integrating again: E I y = R_A x^3 / 6 - W <x - a>^3 / 6 + C1 x + C2. The boundary conditions y(0) = 0 and y(L) = 0 give C2 = 0 and C1 from the second, and the deflection at any x follows by substitution, evaluating the bracket only at sections where x >= a.",
            ],
            bullets: [
              "Macaulay's method: write M(x) with brackets <x - a>^n that activate at the load position.",
              "Bracket rule: integral of <x - a>^n dx = <x - a>^(n+1) / (n+1); keep in bracketed form.",
              "Single integration across the whole span; no segment splitting.",
              "Two constants from boundary conditions: zero deflection at supports, or fixed-end conditions.",
              "Handles point loads, UDLs, couples and overhangs in one expression.",
            ],
            table: {
              caption: "Macaulay bracket terms for common loads.",
              headers: ["Load at x = a", "Term in M(x)", "Power n", "Activation"],
              rows: [
                ["Point load W (downward)", "- W <x - a>", "1", "x >= a"],
                ["UDL of intensity w starting at a", "- w <x - a>^2 / 2", "2", "x >= a"],
                ["Couple M (clockwise)", "- M <x - a>^0", "0", "x >= a"],
                ["Point load W (upward)", "+ W <x - a>", "1", "x >= a"],
                ["Reaction R at support", "+ R x (or R <x - 0>)", "1", "always active"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Macaulay's method at work",
              caption: "Each load type contributes its own bracketed term.",
              start: "Write the bending moment M(x) for the whole beam",
              branches: [
                { label: "Point load at a", outcome: "add -W <x - a>", good: true },
                { label: "UDL starting at a", outcome: "add -w/2 <x - a>^2", good: true },
                { label: "Couple at a", outcome: "add -M <x - a>^0", good: true },
                { label: "Reaction at support", outcome: "add +R x (active throughout)", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Keep brackets to the end",
              body: "The most common Macaulay slip is expanding the brackets prematurely. Always integrate the brackets in their bracketed form, applying the rule integral of <x - a>^n = <x - a>^(n+1) / (n+1), and only substitute numerical values for x and a when computing the final deflection at a particular section. Expanding the brackets breaks the singularity structure and the answer is wrong past the load point.",
            },
            keyTerms: [
              { term: "Macaulay's method", definition: "A singularity-function technique for computing beam deflection across the whole span in a single integration." },
              { term: "Macaulay bracket", definition: "The notation <x - a>^n, taken as zero when x < a and as (x - a)^n when x >= a; the load turns on past its position." },
              { term: "Singularity function", definition: "A generalised function used in Macaulay's method to represent discontinuous loads; integrates by the bracket rule." },
            ],
            examQuestions: [
              {
                q: "Explain Macaulay's method for finding the slope and deflection of a beam. A simply supported beam of span 6 m carries a point load of 20 kN at 2 m from the left support. Using Macaulay's method, find the deflection under the load. Take EI = 20 MN-m^2.",
                marks: 7,
                outline: [
                  "Compute reactions R_A = 20 * 4 / 6 = 13.33 kN, R_B = 6.67 kN.",
                  "Write Macaulay bending moment M(x) = 13.33 x - 20 <x - 2> (kN-m).",
                  "Integrate: E I dy/dx = 13.33 x^2 / 2 - 20 <x - 2>^2 / 2 + C1.",
                  "Integrate again: E I y = 13.33 x^3 / 6 - 20 <x - 2>^3 / 6 + C1 x + C2.",
                  "Boundary conditions: y(0) = 0 -> C2 = 0; y(6) = 0 -> 13.33*36 - 20*64/6 + 6 C1 = 0 -> C1 = -44.4.",
                  "At x = 2 m (under load), bracket <0> = 0, so E I y = 13.33 * 8/6 + (-44.4) * 2 = 17.77 - 88.89 = -71.1 kN-m^3.",
                  "y = -71.1 / 20000 = -3.55e-3 m = -3.55 mm (downward).",
                ],
              },
              {
                q: "State the integration rule for a Macaulay bracket <x - a>^n.",
                marks: 2,
              },
              {
                q: "Write the Macaulay bending moment expression for a simply supported beam carrying a point load W at distance a from the left support.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Moment area method",
            body: [
              "The moment area method computes slopes and deflections of beams from the M/EI diagram using two geometric theorems. Theorem 1: the change in slope between two points A and B on the elastic curve equals the area under the M/EI diagram between those points, theta_B - theta_A = integral_A^B (M/EI) dx. Theorem 2: the deviation of point B from the tangent to the elastic curve at point A equals the first moment of the area under the M/EI diagram between A and B, taken about B, written t_{B/A} = integral_A^B (M/EI) * (x_B - x) dx. The two theorems turn a problem in differential equations into one of computing areas and their moments, often graphically.",
              "The method is best suited to problems where the slope or deflection at a single point is sought - the tip of a cantilever, the midspan of a simply supported beam, the overhang tip of a continuous beam. For a cantilever with end load W and length L, the M/EI diagram is a triangle with peak WL/EI at the fixed end. The slope at the tip equals the area of this triangle, WL^2 / (2 E I); the deflection at the tip equals the moment of the triangle area about the tip, which is the area times the distance from the tip to its centroid (2L/3), giving WL^3 / (3 E I). Both results are the textbook formulas, and the moment area method delivers them in two lines.",
              "For a simply supported beam under symmetric loading the tangent at midspan is horizontal, so the slope at a support is the area under the half M/EI diagram between the support and midspan, and the deflection at midspan is the moment of that half-area about the support. The two theorems thus provide a graphical alternative to Macaulay's method when the M/EI diagram is simple - triangle, rectangle, parabola - and the centroid of its parts is known. The method loses appeal for complex loadings because the areas and centroids become cumbersome, and Macaulay's method takes over. The moment area method is also the conceptual foundation of the conjugate beam method, an algebraic reformulation.",
            ],
            bullets: [
              "Moment area theorem 1: change of slope between A and B = area under M/EI between A and B.",
              "Moment area theorem 2: tangential deviation t_{B/A} = first moment of M/EI area about B.",
              "Best for single-point slope or deflection: cantilever tip, midspan, overhang tip.",
              "Cantilever end load: slope = WL^2/(2EI), deflection = WL^3/(3EI) from triangle area and centroid.",
              "Symmetric SS beam: tangent at midspan horizontal; slope and deflection from half-area.",
            ],
            table: {
              caption: "Centroids of common M/EI areas for moment area method.",
              headers: ["M/EI shape", "Area", "Centroid from left", "Use"],
              rows: [
                ["Rectangle base L, height h", "h L", "L / 2", "constant M segment"],
                ["Triangle base L, peak h at right", "h L / 2", "2 L / 3", "cantilever end load"],
                ["Triangle base L, peak h at left", "h L / 2", "L / 3", "cantilever with fixed-end moment"],
                ["Parabola base L, peak h at centre", "2 h L / 3", "L / 2", "SS beam UDL"],
                ["Parabola base L, peak h at right", "h L / 3", "3 L / 4", "cantilever UDL"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Moment area method: which theorem to use",
              caption: "Rows: target quantity; columns: beam type.",
              axes: { x: "Beam type", y: "Target quantity" },
              quadrants: [
                { label: "Slope at cantilever tip + cantilever", note: "Theorem 1: area of triangle" },
                { label: "Deflection at cantilever tip + cantilever", note: "Theorem 2: moment of area" },
                { label: "Slope at support + SS beam", note: "Theorem 1: half-area" },
                { label: "Deflection at midspan + SS beam", note: "Theorem 2: moment of half-area" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the two theorems",
              body: "Open any moment-area answer with the two theorems stated verbatim: 'the change of slope between two points equals the area under the M/EI diagram, and the tangential deviation equals the first moment of that area about the far end'. Examiners award two marks for these statements alone, then proceed to compute the area and its centroid explicitly.",
            },
            keyTerms: [
              { term: "Moment area method", definition: "A graphical method using the M/EI diagram to compute slope and deflection by areas and first moments." },
              { term: "Theorem 1 (slope)", definition: "The change of slope between two points equals the area under the M/EI diagram between them." },
              { term: "Theorem 2 (deviation)", definition: "The tangential deviation of one point from the tangent at another equals the first moment of the M/EI area about the first point." },
            ],
            examQuestions: [
              {
                q: "State the two moment area theorems. Use them to find the slope and deflection at the free end of a cantilever of length L carrying a uniformly distributed load of intensity w over its full span.",
                marks: 7,
                outline: [
                  "Theorem 1: change of slope = area under M/EI between two points.",
                  "Theorem 2: tangential deviation = first moment of M/EI area about the far point.",
                  "For UDL cantilever the BMD is a parabola with peak wL^2/2 at the fixed end.",
                  "Area under M/EI diagram = (1/3) * (wL^2/2) * (1/EI) * L = wL^3 / (6 EI).",
                  "Slope at free end = wL^3 / (6 EI) (by theorem 1, since slope at fixed end is zero).",
                  "Centroid of the parabolic area is at 3L/4 from the free end (or L/4 from the fixed end).",
                  "Deflection at free end = area * (distance from free end to centroid) = (wL^3/(6EI)) * (3L/4) = wL^4 / (8 EI).",
                ],
              },
              {
                q: "State the first moment area theorem.",
                marks: 2,
              },
              {
                q: "Use the moment area method to find the deflection at the free end of a cantilever of length L carrying an end point load W.",
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
        "RGPV CE-305 papers spread 60 to 70 marks across shear force and bending moment diagrams, the flexure formula and bending stress, shear stress distribution, torsion of shafts and column theories, with thin cylinders and beam deflection supplying the rest. Allocate revision time in roughly the same ratio and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "SFD and BMD for cantilever, simply supported and overhanging beams", weight: "10-14 marks", note: "Almost guaranteed; practise 6-8 full diagrams including contraflexure." },
        { topic: "Bending equation M/I = f/y = E/R and section modulus", weight: "8-12 marks", note: "Derive once, then solve rectangular, circular and I-section problems." },
        { topic: "Shear stress distribution in rectangular, circular and I-sections", weight: "8-10 marks", note: "Quote the 1.5 and 4/3 factors; sketch the parabola." },
        { topic: "Torsion of circular shafts T/J = fs/R = G*theta/L", weight: "8-10 marks", note: "Power-torque-speed problems are routine; carry the units carefully." },
        { topic: "Euler's and Rankine's column formulas", weight: "8-10 marks", note: "Memorise the four end-condition factors and the slenderness limit." },
        { topic: "Thin cylinders: hoop and longitudinal stress", weight: "6-8 marks", note: "State hoop = 2 x longitudinal before computing strains." },
        { topic: "Stress, strain, Hooke's law, Poisson's ratio", weight: "6-8 marks", note: "Definitions and one numerical on lateral strain are common." },
        { topic: "Composite and varying-section bars", weight: "4-6 marks", note: "Equilibrium + compatibility; modular ratio for steel-concrete." },
        { topic: "Thermal stresses", weight: "4-6 marks", note: "Restraint is the key clause; sigma = alpha E delta T." },
        { topic: "Macaulay's method and moment area method", weight: "4-6 marks", note: "One full deflection calculation per method; carry the bracket rule." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - simple stresses and strains", tasks: ["Stress, strain, Hooke's law, Young's modulus; solve 5 numericals", "Poisson's ratio, lateral strain, elastic constants; derive E = 2 G (1 + nu)", "Varying-section and composite bars; thermal stress problems"] },
        { week: "Week 2", focus: "Unit II - SFD and BMD", tasks: ["Sign conventions and the three rules; 4 simple beams", "Cantilever and simply supported beams under point load and UDL", "Overhanging beams and contraflexure location; 3 full problems"] },
        { week: "Week 3", focus: "Unit III - bending and shear stresses", tasks: ["Theory of simple bending and neutral axis; derive flexure formula", "Section modulus and bending stress distribution; steel-table selection", "Shear stress distribution in rectangular and circular sections"] },
        { week: "Week 4", focus: "Unit III completion + Unit IV torsion", tasks: ["Shear stress in I-sections; web-shear problems", "Torsion equation T/J = fs/R = G*theta/L; 4 shaft problems", "Power transmission and equivalent torque for combined loading"] },
        { week: "Week 5", focus: "Unit IV columns + Unit V thin cylinders", tasks: ["Columns and struts, end conditions, slenderness ratio", "Euler's and Rankine's formulas; 5 column problems", "Thin cylinders hoop and longitudinal; thin sphere; wire winding"] },
        { week: "Week 6", focus: "Unit V deflection + full revision", tasks: ["Macaulay's method; 3 deflection calculations", "Moment area method; cantilever and SS beam problems", "Two full past papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Revise the three core formulas: sigma = E epsilon, M/I = f/y = E/R, T/J = fs/R = G*theta/L.",
        "Memorise the four shape constants: 1.5 for rectangle, 4/3 for circle, 1.1-1.2 for I-section web.",
        "Walk through one full SFD/BMD problem (overhanging with contraflexure) and one torsion problem.",
        "Memorise the four effective-length factors for columns and the Rankine constants for steel, cast iron and timber.",
        "List the assumptions of simple bending and torsion in a single column; you will quote them verbatim.",
        "Sleep seven hours; arrive with a scientific calculator, sharp pencils, an eraser and a 30 cm ruler.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Write the governing equation first (sigma = E epsilon, M/I = f/y = E/R, T/J = fs/R = G*theta/L), then substitute numbers.",
        "Sketch the beam, shaft or column before any computation; mark loads, supports and the section to be analysed.",
        "Carry units through every substitution and write the final answer with its unit (MPa, mm, kN-m, rad).",
        "Check the sign of every stress: tension vs compression, sagging vs hogging, heating vs cooling under restraint.",
        "Time-box: 2-mark questions in 4 minutes, 3-mark in 6 minutes, 7-mark in 15 minutes; keep the last 10 minutes for a verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Confusing stress and strain: stress is in pascals (MPa in practice), strain is dimensionless.",
        "Drawing SFD and BMD without first computing the support reactions.",
        "Forgetting the minus sign in Poisson's ratio so a tension bar appears to bulge laterally.",
        "Applying Euler's column formula to a short column without checking the slenderness ratio first.",
        "Using the average shear F / A on an I-section instead of the web shear F / (d * t_w).",
        "Expanding Macaulay brackets prematurely and breaking the singularity structure past a load.",
      ],
    },
  ],
};
