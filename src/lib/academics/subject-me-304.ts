import type { AcademicSubject } from "./types";

export const me304: AcademicSubject = {
  id: "me-304",
  code: "ME-304",
  title: "Strength of Material",
  semester: "III Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "Every topic of the syllabus as one connected story: how stress and strain describe a loaded member, how Mohr's circle rotates them, how beams carry shear and moment, how shafts twist, how failure theories predict collapse, and how columns buckle - each topic closing on a number a designer can use.",
  description:
    "Five units walk from axial stress, elastic constants, strain energy and Mohr's circle, through bending - shear force and moment diagrams, flexure stresses, composite sections, shear stress distribution and deflection by Macaulay and area-moment methods - into torsion of solid, hollow and stepped shafts with power transmission, then the five theories of failure with their numerical comparison, ending with Euler and Rankine buckling of columns and struts.",
  accentColor: "#3b82f6",
  emoji: "SM",
  unitCount: 5,
  totalSections: 32,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Simple Stress and Strain",
      summary:
        "Unit I builds the foundation: normal and shear stress under axial load, members in series and parallel, the stress-strain diagram and Hooke's law, Poisson's ratio and the elastic constants with their inter-relations, thermal and residual stress, strain energy under axial load and falling weights, fibre-reinforced composites, and the transformation of stress - principal stresses and Mohr's circle.",
      chapter: {
        number: "01",
        title: "Stress, Strain and Mohr's Circle",
        intro:
          "Unit I covers stresses in members of a structure, axial loading with stepped rods and members in series and parallel, the stress-strain diagram and Hooke's law, temperature stresses, Poisson's ratio and bulk modulus, relations among elastic constants, residual stress, fibre-reinforced composites, strain energy under axial loads and impact, and stress transformation with principal stresses and Mohr's circle.",
        inOneBreath:
          "Stress is internal force per area (sigma = P/A), strain is the resulting deformation (epsilon = sigma/E); series members share force, parallel members share it by stiffness; E, G and K interlock through Poisson's ratio; a temperature change restrained becomes E-alpha-delta-T stress; strain energy is sigma-squared-V over 2E; and any plane stress state hides principal stresses that Mohr's circle reveals by a half-angle rotation.",
        sections: [
          {
            number: "1.1",
            title: "Normal and shear stress: members of a structure",
            body: [
              "When an external load acts on a member, internal forces arise between its particles, and their intensity - force per unit area - is stress. Normal stress acts perpendicular to the section (tension pulls apart, compression pushes together): sigma = P/A. Shear stress acts parallel to the section: tau = P/A on the sheared plane - the stress in a rivet shank, a bolt in double shear, or the keyway of a shaft. The analysis of simple structures proceeds by the free-body routine: cut the member at the section of interest, expose the internal force as an external one on the free body, and divide by the area.",
              "Stepped rods and members in series share the same axial force, so each segment carries a different stress: sigma = P/A_i in each step, and the total elongation is the sum of segment elongations, delta = sum P L_i/(A_i E). Members in parallel share the load in proportion to their stiffness EA/L - the stiffer member takes more. Worked example: a 50 kN pull acts on a bar with segments A1 = 500 mm^2 and A2 = 250 mm^2, each 0.5 m long, E = 200 GPa. Stresses: 100 MPa in the wide part and 200 MPa in the narrow part; elongations 0.25 mm + 0.5 mm = 0.75 mm total. One force, two stresses, one summed deformation - the whole subject's arithmetic in one line.",
              "Units discipline: stress in N/mm^2 equals MPa, and 1 GPa = 1000 MPa - keeping this conversion automatic prevents half the numerical slips. Also state the stress type before computing: a 50 kN pull is tension (+), a push is compression (-); sign conventions in Mohr's circle and deflection work later depend on getting this habit right from the first line.",
              "Exam framing: the question is 'define normal and shear stress and solve a stepped-bar numerical'. Define both stresses with sketches of the loaded planes, work the series-bar computation above with each step's stress and elongation, and close with the parallel-member load-sharing rule.",
            ],
            bullets: [
              "Normal stress sigma = P/A perpendicular to the section; shear stress tau = P/A parallel to it.",
              "Sign convention: tension positive, compression negative - hold it through the whole subject.",
              "Stepped rod in series: same P, stress varies as 1/A_i; elongations add.",
              "Parallel members: load shared by stiffness ratio (EA/L) - stiffer takes more.",
              "Worked: 50 kN on 500 and 250 mm^2 segments gives 100 and 200 MPa; 0.75 mm total elongation.",
              "1 N/mm^2 = 1 MPa; 1 GPa = 1000 MPa - the conversion that prevents slips.",
            ],
            diagram: {
              kind: "fork",
              title: "How members share a load",
              caption: "The connection topology decides who carries what.",
              start: "How are the members connected?",
              branches: [
                { label: "In series (end to end)", outcome: "same force P through every part; stresses differ by area; elongations add", good: true },
                { label: "In parallel (side by side)", outcome: "same elongation; force shared by stiffness EA/L - stiffer member takes more", good: true },
                { label: "Stepped single rod", outcome: "a series special case: stress jumps at each step, sigma = P/A_i", good: true },
              ],
            },
            table: {
              caption: "Stress types and their signatures.",
              headers: ["Stress", "Direction to section", "Formula", "Typical case"],
              rows: [
                ["Normal - tension", "perpendicular, pulling apart", "sigma = P/A", "tie rod, cable"],
                ["Normal - compression", "perpendicular, pushing together", "sigma = -P/A", "column, strut"],
                ["Shear (single)", "parallel to section", "tau = P/A", "rivet in lap joint"],
                ["Shear (double)", "two parallel planes", "tau = P/(2A)", "bolt between three plates"],
              ],
            },
            callout: {
              type: "tip",
              title: "Cut first, compute second",
              body: "Every stress problem begins with the imaginary cut: draw the free body with the exposed internal force, check equilibrium, then divide by area. Examiners award method marks for the cut-and-equilibrium step even before any arithmetic - and it prevents the classic error of summing forces from both sides of the section.",
            },
            keyTerms: [
              { term: "Normal stress", definition: "Internal force per area acting perpendicular to the section - tension or compression." },
              { term: "Shear stress", definition: "Internal force per area acting parallel to the section, as in rivets and keys." },
              { term: "Stepped rod", definition: "Bar of varying cross-section; same axial force, stress inversely proportional to local area." },
              { term: "Stiffness (EA/L)", definition: "Axial rigidity of a member; the ratio that shares loads between parallel members." },
            ],
            examQuestions: [
              {
                q: "Define normal and shear stress. A 50 kN axial pull acts on a bar of two segments in series: A1 = 500 mm^2 and A2 = 250 mm^2, each 0.5 m long, E = 200 GPa. Find the stress and elongation of each segment and the total elongation.",
                marks: 14,
                outline: [
                  "Definitions with the cut-free-body sketch",
                  "Same P through both segments (series)",
                  "sigma1 = 50000/500 = 100 MPa; sigma2 = 50000/250 = 200 MPa",
                  "delta1 = PL1/A1E = 0.25 mm; delta2 = 0.5 mm",
                  "Total elongation = 0.75 mm",
                  "Parallel case: load shares by EA/L",
                ],
              },
              {
                q: "Distinguish single and double shear in a bolted joint and give the shear stress formula of each.",
                marks: 7,
                outline: [
                  "Single shear: one plane resists - tau = P/A (lap joint)",
                  "Double shear: two planes share - tau = P/(2A) (butt joint with cover plates)",
                  "Double shear halves the bolt stress for the same load",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Stress-strain diagram and Hooke's law",
            body: [
              "Hooke's law states that within the elastic range, stress is proportional to strain: sigma = E epsilon, where E - Young's modulus - is the slope, the material's stiffness. The stress-strain diagram from a tensile test plots the full story: a straight elastic line up to the proportional limit, a yield point where permanent deformation begins, strain hardening through the plastic region to the ultimate stress, then necking and fracture. Mild steel shows a distinct upper and lower yield; grey cast iron shows none, failing on the elastic line's extension - brittle.",
              "The diagram's landmarks are the design numbers: proportional limit (end of linearity), elastic limit (end of full recovery), yield strength (permanent strain begins - found by the 0.2 percent offset when no sharp yield exists), ultimate strength (peak), and fracture. Ductility reads as percent elongation and reduction of area; resilience is the area under the elastic portion (proof resilience at the elastic limit); toughness is the whole area. Worked example: a 100 MPa stress on steel (E = 200 GPa) gives strain 100/200000 = 0.0005 - one part in 2000, or 1 mm stretch on a 2 m tie rod; at 250 MPa the material yields and the line is over.",
              "Hooke's law is linear, elastic and one-dimensional as stated, and every relation in this subject - deflections, torsion, buckling - assumes its validity. Beyond yield the deformation is plastic and permanent, governed by strain hardening; engineering design keeps working stresses safely below yield with a factor of safety, usually 1.5-2 on yield for ductile metals under static load.",
              "Exam framing: the question is 'draw the stress-strain diagram for mild steel, label the salient points, and state Hooke's law'. Sketch with proportional limit, elastic limit, upper/lower yield, UTS, necking and fracture labelled; define each point; compute one strain from Hooke's law; and close with the factor-of-safety sentence.",
            ],
            bullets: [
              "Hooke's law: sigma = E epsilon within the elastic range; E is stiffness.",
              "Curve landmarks: proportional limit, elastic limit, yield, UTS, fracture.",
              "Yield strength by 0.2 percent offset when the material lacks a sharp yield.",
              "Mild steel: E about 200 GPa, yield about 250 MPa, UTS about 450 MPa, 25 percent elongation.",
              "Grey cast iron: no yield, fails brittly near 200 MPa.",
              "Resilience = elastic area; toughness = total area; factor of safety keeps sigma below yield.",
            ],
            diagram: {
              kind: "flow",
              title: "Reading the stress-strain curve left to right",
              caption: "Each landmark is a named material property.",
              steps: [
                { label: "Linear elastic line", note: "slope = E; Hooke's law holds" },
                { label: "Yield point", note: "permanent strain begins (0.2% offset)" },
                { label: "Strain hardening", note: "stress rises again through plastic flow" },
                { label: "Ultimate stress", note: "peak; necking starts" },
                { label: "Fracture", note: "cup-cone for ductile steel" },
              ],
            },
            table: {
              caption: "Elastic properties of common engineering materials.",
              headers: ["Material", "E (GPa)", "Yield (MPa)", "UTS (MPa)", "Behaviour"],
              rows: [
                ["Mild steel", "200", "250", "450", "ductile, distinct yield"],
                ["Alloy steel", "205", "700", "900", "ductile, heat-treatable"],
                ["Aluminium alloy", "70", "275", "310", "ductile, light"],
                ["Copper", "110", "70", "220", "very ductile"],
                ["Grey cast iron", "100", "-", "200", "brittle, no yield"],
              ],
            },
            callout: {
              type: "exam",
              title: "Proportional limit versus elastic limit",
              body: "Students merge the two; the examiner separates them. The proportional limit ends linearity (Hooke's law edge); the elastic limit ends full recovery - a point slightly beyond, where the material still returns but the curve has already bent. Above it, some strain remains on unloading: the permanent set that defines plasticity.",
            },
            keyTerms: [
              { term: "Hooke's law", definition: "Stress proportional to strain within the elastic range: sigma = E epsilon." },
              { term: "Young's modulus (E)", definition: "The slope of the elastic line - the material's stiffness in tension/compression." },
              { term: "0.2 percent offset", definition: "Yield-strength definition: stress at the intersection of the curve with a 0.2 percent strain offset line." },
              { term: "Permanent set", definition: "Residual strain remaining after unloading beyond the elastic limit." },
            ],
            examQuestions: [
              {
                q: "Draw and label the stress-strain diagram for mild steel, defining each salient point. State Hooke's law and compute the strain and elongation of a 2 m steel tie rod stressed to 100 MPa (E = 200 GPa).",
                marks: 14,
                outline: [
                  "Sketch: proportional limit, elastic limit, upper/lower yield, UTS, necking, fracture",
                  "Definitions of each point in one line each",
                  "Hooke's law: sigma = E epsilon",
                  "Strain = 100/200000 = 0.0005",
                  "Elongation = 0.0005 × 2000 mm = 1 mm",
                  "Design keeps working stress below yield with a safety factor",
                ],
              },
              {
                q: "Distinguish resilience and toughness using the stress-strain diagram.",
                marks: 7,
                outline: [
                  "Resilience: energy absorbed elastically - area under the elastic portion",
                  "Proof resilience: the same area up to the elastic limit",
                  "Toughness: total energy to fracture - the whole curve area",
                  "Springs are designed on resilience; crash structures on toughness",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Poisson's ratio, bulk modulus and the elastic constants",
            body: [
              "An axial pull that stretches a bar also thins it: lateral strain accompanies longitudinal strain, and their ratio is Poisson's ratio, nu = - lateral strain / longitudinal strain - about 0.3 for steel, 0.33 for aluminium, near 0.5 for rubber (volume nearly incompressible). Volumetric strain is the sum of the three linear strains, and the bulk modulus K relates hydrostatic pressure to volumetric strain: K = sigma / (delta V/V) for uniform compression on all faces.",
              "The four elastic constants interlock. Shear modulus (modulus of rigidity) G couples shear stress to shear strain; and for an isotropic elastic material three relations bind them all: G = E/(2(1 + nu)), K = E/(3(1 - 2nu)), and E = 9KG/(3K + G). Knowing any two constants gives the other two - the standard numerical: given E = 200 GPa and nu = 0.3, G = 200/(2 × 1.3) = 76.9 GPa and K = 200/(3 × 0.4) = 166.7 GPa; the cross-check E = 9 × 76.9 × 166.7/(3 × 166.7 + 76.9) = 115400/577 = 200 GPa closes the loop exactly.",
              "The physics behind the relations: Poisson's ratio is the measure of a material's volume preservation under shear - nu = 0.5 makes K infinite (incompressible), and nu = 0.25 makes G = 0.4E. The constants also decide wave speeds and plate bending stiffness, but in this syllabus their role is numerical: every 'find G and K from E and nu' question is the two-formula computation above, and every 'prove E = 9KG/(3K + G)' question is algebra on the two defining equations.",
              "Exam framing: the question is 'define Poisson's ratio, bulk modulus and modulus of rigidity, derive the relations among them, and compute G and K for given E and nu'. Define each with its stress-strain pair, derive the two formulas, run the worked numbers, and verify with the combined relation.",
            ],
            bullets: [
              "Poisson's ratio: nu = lateral strain / longitudinal strain (opposite sign); steel 0.3, rubber near 0.5.",
              "Bulk modulus K: hydrostatic stress over volumetric strain.",
              "Modulus of rigidity G: shear stress over shear strain.",
              "Relations: G = E/(2(1 + nu)); K = E/(3(1 - 2nu)); E = 9KG/(3K + G).",
              "Worked: E = 200 GPa, nu = 0.3 gives G = 76.9 GPa, K = 166.7 GPa.",
              "nu = 0.5 means incompressible (K infinite); nu = 0.25 gives G = 0.4E.",
            ],
            diagram: {
              kind: "compare",
              title: "The three loading modes behind the constants",
              caption: "Each elastic constant answers one idealized loading.",
              left: {
                heading: "E - uniaxial tension",
                items: [
                  "One direction loaded",
                  "sigma = E epsilon",
                  "Also produces lateral contraction (nu)",
                  "Measured by the tensile test",
                ],
              },
              right: {
                heading: "G and K - shear and hydrostatic",
                items: [
                  "G: pure shear loading, tau = G gamma",
                  "K: equal pressure on all faces, K = sigma/(dV/V)",
                  "Both derived from E and nu for isotropic materials",
                  "Linked: E = 9KG/(3K + G)",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "constants.py - G and K from E and Poisson's ratio",
              code: `E = 200.0   # GPa
nu = 0.30

G = E / (2 * (1 + nu))          # modulus of rigidity
K = E / (3 * (1 - 2 * nu))      # bulk modulus
E_check = 9 * K * G / (3 * K + G)   # must return E

print(f"G = {G:.1f} GPa, K = {K:.1f} GPa, check E = {E_check:.1f} GPa")`,
            },
            callout: {
              type: "exam",
              title: "Always verify with the third relation",
              body: "After computing G and K from E and nu, substitute into E = 9KG/(3K + G) - it must return the original E. This ten-second check catches a wrong nu (0.03 instead of 0.3 is the classic typo) and demonstrates command of the relations; examiners specifically reward the closing verification.",
            },
            keyTerms: [
              { term: "Poisson's ratio (nu)", definition: "Ratio of lateral to longitudinal strain under uniaxial stress; 0.3 for steel." },
              { term: "Bulk modulus (K)", definition: "Ratio of hydrostatic stress to volumetric strain." },
              { term: "Modulus of rigidity (G)", definition: "Ratio of shear stress to shear strain - the torsion constant of the material." },
              { term: "Isotropic", definition: "Same elastic properties in every direction - the assumption behind the E-G-K relations." },
            ],
            examQuestions: [
              {
                q: "Define Poisson's ratio, modulus of rigidity and bulk modulus. Derive G = E/(2(1 + nu)) and K = E/(3(1 - 2nu)), and compute G and K for E = 200 GPa, nu = 0.3, verifying with the combined relation.",
                marks: 14,
                outline: [
                  "Definitions with the stress-strain pairs",
                  "Derivation: shear strain components give gamma = tau(1 + nu)/... leading to G = E/2(1 + nu)",
                  "Volumetric strain of a cube gives K = E/3(1 - 2nu)",
                  "G = 200/(2 × 1.3) = 76.9 GPa",
                  "K = 200/(3 × 0.4) = 166.7 GPa",
                  "Check: 9KG/(3K + G) = 200 GPa - verified",
                ],
              },
              {
                q: "What happens to the bulk modulus as Poisson's ratio approaches 0.5, and which material exemplifies it?",
                marks: 7,
                outline: [
                  "K = E/(3(1 - 2nu)) grows without bound as nu -> 0.5",
                  "Denominator (1 - 2nu) -> 0: incompressible behaviour",
                  "Rubber (nu about 0.5) barely changes volume under load",
                  "Metals sit near nu = 0.3 with finite, moderate K",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Temperature (thermal) stress and residual stress",
            body: [
              "A free bar that changes temperature simply changes length: delta = L alpha delta T, with alpha the coefficient of linear expansion (about 12 × 10^-6 per degrees C for steel, 23 × 10^-6 for aluminium). But if the bar is restrained - between rigid walls, or as part of a frame that will not yield - the prevented expansion becomes stress: sigma = E alpha delta T. Worked example: a steel rail restrained against a 50 degrees C temperature rise develops sigma = 200000 × 12e-6 × 50 = 120 N/mm^2 (MPa) of compression - enough to buckle track if the restraint holds, which is why rails are laid with gaps or jointed expansion devices.",
              "Composite and compound bars extend the idea: a steel rod inside a copper tube, rigidly joined at the ends and heated, develops stresses that share the prevented expansion - equilibrium says the compressive force in one equals the tensile force in the other, and compatibility says both take the same net strain. Two equations (force balance, strain compatibility) solve the two unknown stresses; the same routine covers bolted flanges heated by steam and bimetallic thermostat strips, which bend because the two metals' alphas differ.",
              "Residual stress is stress locked inside a body with no external load: from uneven cooling in castings and welds (the weld zone shrinks after solidifying and drags the surrounding metal into tension), from plastic bending (tension-set straightening), or from surface treatments - shot peening and case hardening deliberately leave compressive residual stress at surfaces to fight fatigue, while the balancing tension hides inside. Residual stress is released by stress-relief annealing (500-600 degrees C), and its sudden release - by cutting or machining - is why weldments distort when first cut.",
              "Exam framing: the question is 'derive the thermal stress expression sigma = E alpha delta T and solve a restrained-bar or compound-bar numerical'. Derive from free expansion minus prevention, compute the rail example, and set up the compound-bar pair of equations; close with the residual-stress sources and the annealing remedy.",
            ],
            bullets: [
              "Free expansion: delta = L alpha delta T; restrained, it becomes sigma = E alpha delta T.",
              "Worked: steel restrained through 50 degrees C gives 120 MPa (E 200 GPa, alpha 12e-6).",
              "Compound bars: force balance + strain compatibility solve the two unknown stresses.",
              "Bimetals bend from differing alpha - the thermostat principle.",
              "Residual stress: no external load, from uneven cooling, welding, plastic working.",
              "Compressive residuals (peening, case hardening) fight fatigue; annealing releases them.",
            ],
            diagram: {
              kind: "flow",
              title: "From temperature change to stress",
              caption: "Three steps turn delta T into a stress number.",
              steps: [
                { label: "Free expansion", note: "delta_free = L alpha delta T" },
                { label: "Restraint blocks it", note: "walls or frame resist the change" },
                { label: "Equivalent force strain", note: "delta_prevented = sigma L / E" },
                { label: "Equate", note: "sigma = E alpha delta T - the thermal stress" },
              ],
            },
            table: {
              caption: "Coefficients of linear expansion and the stress they hide.",
              headers: ["Material", "alpha (per degrees C)", "Stress per 100 degrees C restrained"],
              rows: [
                ["Steel", "12 × 10^-6", "about 240 MPa (E = 200 GPa)"],
                ["Aluminium", "23 × 10^-6", "about 161 MPa (E = 70 GPa)"],
                ["Copper", "17 × 10^-6", "about 187 MPa (E = 110 GPa)"],
                ["Concrete", "10 × 10^-6", "about 200-300 MPa equivalent (cracks instead)"],
              ],
            },
            callout: {
              type: "warning",
              title: "Thermal stress needs no external force",
              body: "The trap: sigma = E alpha delta T involves no applied load at all - restraint alone loads the material. A tightly bolted flange or a welded rail can carry working thermal stress beyond yield without any external weight acting. Every exam answer should state 'restrained' explicitly; the stress exists only because expansion is prevented.",
            },
            keyTerms: [
              { term: "Thermal stress", definition: "Stress caused by prevented free expansion due to temperature change: sigma = E alpha delta T." },
              { term: "Coefficient of expansion (alpha)", definition: "Fractional length change per degree; steel 12 × 10^-6 per degrees C." },
              { term: "Compound bar", definition: "Two materials rigidly joined and loaded/ heated together - solved by equilibrium plus compatibility." },
              { term: "Residual stress", definition: "Internal stress with no external load - from welding, casting or plastic working." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for thermal stress in a restrained bar and compute it for a steel rail (alpha = 12 × 10^-6 per degrees C, E = 200 GPa) restrained against a 50 degrees C rise. How is the stress removed in practice?",
                marks: 14,
                outline: [
                  "Free expansion delta = L alpha delta T",
                  "Restraint prevents it: sigma L/E = L alpha delta T",
                  "sigma = E alpha delta T = 200000 × 12e-6 × 50 = 120 MPa",
                  "Compressive for a rise, tensile for a fall",
                  "Remedies: expansion gaps/joints, stress-relief anneal at 500-600 degrees C",
                  "Buckling risk in slender rails if compression persists",
                ],
              },
              {
                q: "Set up the two governing equations for the stresses in a steel rod inside a copper tube, both rigidly joined at the ends and heated through delta T.",
                marks: 7,
                outline: [
                  "Equilibrium: compressive force in steel = tensile force in copper (no external force)",
                  "sigma_s A_s = sigma_c A_c",
                  "Compatibility: equal net strain of both members",
                  "alpha_s delta T - sigma_s/E_s = alpha_c delta T + sigma_c/E_c (signs per material)",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Strain energy under axial load and impact",
            body: [
              "Strain energy is the work done in deforming an elastic body, stored as recoverable energy. For a gradually applied axial load P on a bar of length L and area A: U = P delta/2 = P^2 L/(2AE) = sigma^2 V/(2E) - the last form showing that energy density depends on stress and volume only. Gradually applied means the load grows from zero to P, so the work is the triangle P × delta/2; the formula set is the answer to every 'derive strain energy' question.",
              "Impact loading - a weight W falling through height h onto a bar - is the syllabus's named case. Equating the weight's loss of potential energy W(h + delta) to the bar's strain energy P delta/2 (with P the equivalent dynamic force and delta = PL/AE) yields the impact factor and dynamic stress: sigma_dyn = (W/A)[1 + sqrt(1 + 2 h A E/(W L))]. Two limits bookend the formula: h = 0 (suddenly applied load) gives exactly double the static stress; large h makes the square-root term dominate and the stress grows with sqrt(h). Worked example: a 500 N weight falls 50 mm onto a 500 mm^2, 1 m steel bar (E = 200 GPa): the correction factor 2hAE/(WL) = 2 × 50 × 500 × 200000/(500 × 1000) = 20000, so sigma_dyn ≈ (500/500)[1 + sqrt(20001)] ≈ 1 × 142.5 = 142.5 MPa against a static 1 MPa - impact magnifies stress two orders of magnitude.",
              "The lesson is design-relevant: impact loads cannot be handled by static factors of safety. The engineer's defences are increasing volume (energy spreads over more material), increasing compliance (longer, more flexible members absorb more energy at lower stress - the logic of crash crumple zones and leaf-spring eyes), and materials with high resilience. The formula also underlies the Izod/Charpy pendulum: height lost by the hammer is energy absorbed by the specimen.",
              "Exam framing: the question is 'derive the strain energy expressions and solve a falling-weight impact numerical'. Derive U = P^2 L/2AE, then the impact stress formula, then substitute the worked numbers - and quote the suddenly-applied-load doubling as the h = 0 check.",
            ],
            bullets: [
              "Gradual load: U = P delta/2 = P^2 L/(2AE) = sigma^2 V/(2E).",
              "Falling weight: sigma_dyn = (W/A)[1 + sqrt(1 + 2hAE/(WL))].",
              "Suddenly applied load (h = 0): stress exactly double the static value.",
              "Worked: 500 N falling 50 mm on a 500 mm^2 bar gives about 142.5 MPa vs 1 MPa static.",
              "Design defences: more volume, more compliance, resilient materials.",
              "The same energy arithmetic drives pendulum impact tests.",
            ],
            diagram: {
              kind: "flow",
              title: "The impact-energy balance",
              caption: "Potential energy lost becomes strain energy stored - the whole derivation in four moves.",
              steps: [
                { label: "Weight falls h", note: "loses W(h + delta) potential energy" },
                { label: "Bar stretches delta", note: "dynamic force P develops" },
                { label: "Store strain energy", note: "U = P delta/2 = P^2 L/2AE" },
                { label: "Equate and solve", note: "W(h + delta) = U -> sigma_dyn formula" },
              ],
            },
            table: {
              caption: "Loading modes and their stress multipliers.",
              headers: ["Mode", "Stress relation", "Multiplier on static"],
              rows: [
                ["Gradual (static)", "sigma = W/A", "1.0"],
                ["Suddenly applied (h = 0)", "sigma = 2W/A", "2.0 exactly"],
                ["Impact from height h", "sigma = (W/A)[1 + sqrt(1 + 2hAE/WL)]", "up to hundreds"],
              ],
            },
            callout: {
              type: "exam",
              title: "The h = 0 doubling is a graded sub-answer",
              body: "Examiners specifically ask: 'what happens when the load is suddenly applied?' Answer in one line: with h = 0 the impact factor becomes 2 - the dynamic force is twice the static load, and compliance (not strength) is the only defence. Quote it even when the numerical does not need it; it is usually a named mark.",
            },
            keyTerms: [
              { term: "Strain energy (U)", definition: "Elastic work stored in a deformed body: U = P^2 L/2AE for axial load." },
              { term: "Impact factor", definition: "Ratio of dynamic to static stress under a falling-weight load." },
              { term: "Suddenly applied load", definition: "Load applied with zero drop height - dynamic stress exactly twice static." },
              { term: "Resilience", definition: "Strain energy recoverable within the elastic limit - the spring designer's currency." },
            ],
            examQuestions: [
              {
                q: "Derive the strain energy of a bar under gradually applied axial load in three equivalent forms. Then derive the dynamic stress for a weight W falling through height h and compute it for W = 500 N, h = 50 mm, bar A = 500 mm^2, L = 1 m, E = 200 GPa.",
                marks: 14,
                outline: [
                  "U = P delta/2 with delta = PL/AE gives U = P^2 L/2AE = sigma^2 V/2E",
                  "Energy balance: W(h + delta) = P delta/2",
                  "Solving gives sigma_dyn = (W/A)[1 + sqrt(1 + 2hAE/(WL))]",
                  "Correction term: 2hAE/(WL) = 2 × 50 × 500 × 200000/(500 × 1000) = 20000",
                  "sigma_dyn = 1 × (1 + sqrt(20001)) = about 142.5 MPa",
                  "Static stress 1 MPa; h = 0 case doubles it - the limiting check",
                ],
              },
              {
                q: "Why does increasing the length of a member reduce the stress under a given impact energy?",
                marks: 7,
                outline: [
                  "Stored energy for given stress: U = sigma^2 V/2E",
                  "Longer bar has larger volume V for the same area",
                  "The same impact energy is absorbed at lower sigma",
                  "Compliance, not strength, is the impact defence - crumple-zone logic",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Fibre-reinforced composite materials",
            body: [
              "Fibre-reinforced composites (FRP) embed strong stiff fibres - glass, carbon, aramid - in a softer matrix (epoxy, polyester) that binds them, transfers load and protects them. The fibres carry tension along their axis; the matrix carries shear between fibres and stabilizes them against buckling in compression. The result is a material anisotropic by design: stiffness and strength along the fibre direction rival or exceed steel at a fraction of the weight (carbon-epoxy: E about 150 GPa, density 1.6 g/cm^3 against steel's 200 GPa and 7.85 g/cm^3).",
              "The mechanics of a unidirectional ply use the rule of mixtures. Longitudinal modulus (fibres parallel to load): E_L = E_f V_f + E_m V_m - both materials strain identically, so moduli weight by volume fraction. Transverse modulus (load across fibres): the materials carry the same stress, and 1/E_T = V_f/E_f + V_m/E_m - the softer matrix dominates, which is why transverse stiffness is much lower. Worked example: 60 percent by volume carbon fibres (E_f = 400 GPa) in epoxy (E_m = 3.5 GPa): E_L = 0.6 × 400 + 0.4 × 3.5 = 241.4 GPa; 1/E_T = 0.6/400 + 0.4/3.5 = 0.1164, so E_T = 8.6 GPa - a 28:1 anisotropy ratio from one ply.",
              "Laminates stack plies at different angles (0/90/+-45 lay-ups) to tailor the anisotropy to the load path - the wing skin that is stiff along span, the drive shaft that balances torsion and bending. Design must also respect the failure modes the matrix brings: delamination between plies, fibre-matrix debonding, and low through-thickness strength - which is why laminate drop tests and impact inspection (NDT of Unit IV's ultrasonic route) are standard quality gates.",
              "Exam framing: the question is 'explain fibre-reinforced composites and apply the rule of mixtures to compute longitudinal and transverse moduli'. Define the roles of fibre and matrix, write both mixture formulas, run the 60 percent carbon numerical, and close with laminate tailoring and the delamination caveat.",
            ],
            bullets: [
              "Composite: stiff fibres in a binding matrix - load carried by fibres, shear by matrix.",
              "Rule of mixtures (longitudinal): E_L = E_f V_f + E_m V_m - strains equal.",
              "Transverse: 1/E_T = V_f/E_f + V_m/E_m - stresses equal, matrix dominates.",
              "Worked: 60 percent carbon/epoxy gives E_L = 241.4 GPa, E_T = 8.6 GPa.",
              "Laminates (0/90/+-45 plies) tailor stiffness to the load path.",
              "Weaknesses: delamination, debonding, low through-thickness strength - inspect by UT.",
            ],
            diagram: {
              kind: "compare",
              title: "Loading along versus across the fibres",
              caption: "Same ply, two moduli - anisotropy is the design currency.",
              left: {
                heading: "Longitudinal (parallel to fibres)",
                items: [
                  "Fibre and matrix strain identically",
                  "E_L = E_f V_f + E_m V_m",
                  "Stiff fibres dominate: 241 GPa for 60 percent carbon",
                  "The strong direction of the ply",
                ],
              },
              right: {
                heading: "Transverse (across fibres)",
                items: [
                  "Fibre and matrix stress identically",
                  "1/E_T = V_f/E_f + V_m/E_m",
                  "Soft matrix dominates: 8.6 GPa",
                  "Matrix-controlled strength and failure",
                ],
              },
            },
            table: {
              caption: "Typical constituents of structural composites.",
              headers: ["Constituent", "Examples", "Role"],
              rows: [
                ["Fibres", "glass E, carbon HS/HM, aramid (Kevlar)", "carry tension; provide stiffness"],
                ["Matrix", "epoxy, polyester, vinylester", "bind, transfer shear, protect fibres"],
                ["Core (sandwich)", "honeycomb, PVC foam, balsa", "separate skins - bending stiffness at low weight"],
                ["Fillers/additives", "nano-clays, UV stabilizers", "toughening, durability"],
              ],
            },
            callout: {
              type: "tip",
              title: "Two formulas, two assumptions",
              body: "The rule-of-mixtures pair works because each direction locks one strain state: longitudinal loading forces equal strain (moduli weight by volume), transverse loading forces equal stress (compliances weight by volume). Stating the equal-strain versus equal-stress assumption under each formula is the derivation mark examiners look for.",
            },
            keyTerms: [
              { term: "Rule of mixtures", definition: "E_L = E_f V_f + E_m V_m for longitudinal; compliance-weighted for transverse modulus." },
              { term: "Anisotropy", definition: "Direction-dependent properties - the composite's defining feature and design opportunity." },
              { term: "Delamination", definition: "Separation between plies - the characteristic composite failure mode under impact." },
              { term: "Volume fraction (V_f)", definition: "Fibre volume share - the primary lever on composite stiffness and strength." },
            ],
            examQuestions: [
              {
                q: "Explain the structure and roles of fibre and matrix in a fibre-reinforced composite. Derive the rule of mixtures for longitudinal modulus and compute E_L and E_T for 60 percent carbon fibres (400 GPa) in epoxy (3.5 GPa).",
                marks: 14,
                outline: [
                  "Fibres carry tension; matrix transfers shear and protects",
                  "Longitudinal: equal strain -> E_L = E_f V_f + E_m V_m",
                  "E_L = 0.6 × 400 + 0.4 × 3.5 = 241.4 GPa",
                  "Transverse: equal stress -> 1/E_T = V_f/E_f + V_m/E_m",
                  "1/E_T = 0.0015 + 0.1143 = 0.1158, E_T = 8.6 GPa",
                  "Anisotropy ratio about 28:1; laminates tailor it",
                ],
              },
              {
                q: "Why are composite drive shafts and wing skins built as laminates with angled plies rather than unidirectional plies?",
                marks: 7,
                outline: [
                  "Single-direction loading is rare in real components",
                  "Drive shafts need torsion (45 degrees plies) plus bending (0/90)",
                  "Wing skins need span-wise stiffness with impact tolerance",
                  "Ply-angle stacking tailors stiffness and strength to the actual load paths",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Transformation of stress: principal stresses and Mohr's circle",
            body: [
              "A stressed element rarely sees its extreme stresses on the x and y faces chosen by the drawing. Rotating the reference plane by an angle theta changes both normal and shear stress, and there exist two orthogonal planes on which shear stress vanishes entirely - the principal planes, carrying the principal stresses sigma_1 (maximum) and sigma_2 (minimum). The transformation equations: sigma_n = (sigma_x + sigma_y)/2 + ((sigma_x - sigma_y)/2) cos 2theta + tau_xy sin 2theta, and tau = -((sigma_x - sigma_y)/2) sin 2theta + tau_xy cos 2theta. Maximum shear stress equals (sigma_1 - sigma_2)/2 and acts on planes 45 degrees from the principal planes.",
              "Mohr's circle is the transformation equations drawn: plot the stress states of the x and y faces as two diametrically opposite points on a sigma-tau plane centred at ((sigma_x + sigma_y)/2, 0) with radius R = sqrt(((sigma_x - sigma_y)/2)^2 + tau_xy^2). Every rotation of the physical element by theta appears as a rotation of 2theta on the circle - hence the half-angle rule. Reading the circle gives sigma_1, sigma_2 at its right and left extremes, tau_max at top and bottom, and the stress on any inclined plane at one swing of the compass.",
              "Worked example: an element carries sigma_x = 100 MPa, sigma_y = 40 MPa, tau_xy = 30 MPa. Centre = 70 MPa; R = sqrt(30^2 + 30^2) = 42.43 MPa. Principal stresses: 70 + 42.43 = 112.4 MPa and 70 - 42.43 = 27.6 MPa (both tensile - no compression anywhere). Maximum shear = 42.43 MPa at 45 degrees to the principal planes. Orientation: tan 2theta_p = 2 tau_xy/(sigma_x - sigma_y) = 60/60 = 1, so 2theta_p = 45 degrees and theta_p = 22.5 degrees from the x-axis. Every number a failure-theory check will need is now on the table.",
              "Exam framing: the question is 'explain principal planes and draw Mohr's circle for the given element, finding principal stresses, maximum shear and their planes'. Write the transformation equations, construct the circle with centre and radius computed, quote the half-angle relation, and finish with the numerical values - the 22.5 degrees answer is the standard check of method.",
            ],
            bullets: [
              "Principal planes: shear stress vanishes; they carry sigma_1 and sigma_2.",
              "Centre of Mohr's circle: (sigma_x + sigma_y)/2; radius R = sqrt(((sigma_x - sigma_y)/2)^2 + tau_xy^2).",
              "Physical rotation theta appears as 2theta on the circle - the half-angle rule.",
              "tau_max = (sigma_1 - sigma_2)/2 on planes 45 degrees from principal planes.",
              "Worked: 100/40/30 MPa element gives sigma_1 = 112.4, sigma_2 = 27.6, tau_max = 42.4 MPa, theta_p = 22.5 degrees.",
              "Sign conventions: tensile positive right, shear clockwise positive down (or declare yours).",
            ],
            diagram: {
              kind: "flow",
              title: "Building Mohr's circle in five moves",
              caption: "From the element's face stresses to every inclined-plane stress.",
              steps: [
                { label: "Plot the x-face point", note: "(sigma_x, tau_xy)" },
                { label: "Plot the y-face point", note: "(sigma_y, -tau_xy) - diametrically opposite" },
                { label: "Draw the circle", note: "centre on sigma axis; radius R" },
                { label: "Read the extremes", note: "sigma_1, sigma_2 at axis crossings; tau_max at top" },
                { label: "Rotate for inclined planes", note: "2theta on circle for theta in space" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "mohr.py - principal stresses from face stresses",
              code: `import math

sx, sy, txy = 100.0, 40.0, 30.0   # MPa

c  = (sx + sy) / 2                 # circle centre
R  = math.sqrt(((sx - sy)/2)**2 + txy**2)
s1, s2 = c + R, c - R
tmax = R
two_tp = math.degrees(math.atan2(2*txy, sx - sy))

print(f"centre {c}  radius {R:.2f}")
print(f"sigma1 {s1:.1f}  sigma2 {s2:.1f}  tau_max {tmax:.1f}")
print(f"2theta_p {two_tp:.1f} deg -> theta_p {two_tp/2:.1f} deg")`,
            },
            callout: {
              type: "exam",
              title: "The 45-degree pair is a free check",
              body: "After finding sigma_1 and sigma_2, verify sigma_1 + sigma_2 = sigma_x + sigma_y - the sum is invariant under rotation. Then confirm tau_max = (sigma_1 - sigma_2)/2. Both invariants catch sign slips instantly, and quoting them shows the examiner you understand the circle, not just drew it.",
            },
            keyTerms: [
              { term: "Principal planes", definition: "Orthogonal planes on which shear stress is zero; carry the extreme normal stresses." },
              { term: "Principal stress", definition: "The normal stress on a principal plane - maximum sigma_1 or minimum sigma_2." },
              { term: "Mohr's circle", definition: "Graphical transformation of stress: physical rotation theta maps to 2theta on the circle." },
              { term: "Maximum shear stress", definition: "(sigma_1 - sigma_2)/2, acting 45 degrees from the principal planes." },
            ],
            examQuestions: [
              {
                q: "Explain principal planes and Mohr's circle. For an element with sigma_x = 100 MPa, sigma_y = 40 MPa and tau_xy = 30 MPa, construct Mohr's circle and find the principal stresses, maximum shear stress and the principal plane orientation.",
                marks: 14,
                outline: [
                  "Transformation equations stated",
                  "Centre = 70 MPa; R = sqrt(30^2 + 30^2) = 42.43 MPa",
                  "sigma_1 = 112.4 MPa; sigma_2 = 27.6 MPa (both tensile)",
                  "tau_max = 42.4 MPa on planes 45 degrees from principal planes",
                  "tan 2theta_p = 2 × 30/60 = 1 -> theta_p = 22.5 degrees",
                  "Invariance check: sigma_1 + sigma_2 = sigma_x + sigma_y = 140 MPa",
                ],
              },
              {
                q: "Why does Mohr's circle use a doubled angle (2theta) for rotations?",
                marks: 7,
                outline: [
                  "The transformation equations contain sin 2theta and cos 2theta",
                  "Normal and shear stress both complete a full cycle as the element rotates 180 degrees",
                  "Hence the sigma-tau point moves at twice the physical rotation rate",
                  "The half-angle rule is the circle's bookkeeping consequence",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Bending of Beams",
      summary:
        "Unit II is the beams unit: shear force and bending moment diagrams with the load-shear-moment relations, pure bending and the flexure formula, bending of composite (flitched) sections, eccentric axial loading, shear stresses in beams, strain energy in bending, and deflection by the elastic-curve equation, Macaulay's method and the area-moment method.",
      chapter: {
        number: "02",
        title: "Beams in Bending",
        intro:
          "Unit II covers shear force and bending moment diagrams and the relationship among load, shear and moment, pure bending of symmetric members, bending of composite sections, eccentric axial loading, shear stresses in beams, strain energy in bending, and deflection of beams by the elastic curve, Macaulay's method and the area-moment method.",
        inOneBreath:
          "Diagrams first: dV/dx = -w and dM/dx = V turn loads into SFD and BMD; pure bending gives sigma = My/I with the neutral axis through the centroid; composite sections transform by modular ratio; shear stress runs as VAy/Ib peaking at 1.5 times average in rectangles; deflection follows EI d2y/dx2 = M, solved by Macaulay's singularity functions or the area-moment theorems.",
        sections: [
          {
            number: "2.1",
            title: "Shear force and bending moment diagrams",
            body: [
              "A beam under transverse load develops internal shear force V and bending moment M that vary along its length. The sign conventions: shear is positive when the left segment tends to move up relative to right (clockwise couple on the element); bending moment is positive when it sags the beam - compression on top, tension underneath. At any section, V equals the algebraic sum of transverse forces to one side, and M equals the sum of their moments about the section. The diagrams plot both against position; drawing them accurately is the unit's first skill and the examiner's first check.",
              "The differential relations turn the drawing into arithmetic: dV/dx = -w (load intensity) and dM/dx = V. Consequences: no load - V constant, M linear; uniform load - V linear, M parabolic; point load - V jumps by the load, M kinks; applied couple - M jumps by the couple. Maxima of M occur where V crosses zero (dM/dx = V = 0), which is how the maximum-moment station is located without differentiation. Worked example: a simply supported beam of span 6 m carries 12 kN at midspan. Reactions 6 kN each; V = +6 kN from left support to midspan, then -6 kN; M rises linearly to 18 kNm at midspan and falls back - the classic triangle and its peak.",
              "Standard results to memorize: simply supported with central load W - M_max = WL/4; simply supported with UDL w - M_max = wL^2/8 at midspan with V_max = wL/2 at supports; cantilever with end load W - M_max = WL at the wall; cantilever with UDL - M_max = wL^2/2 at the wall. Overhanging beams can put maximum moment at a support (hogging), flipping the tension side - the reason top steel appears in continuous-beam supports.",
              "Exam framing: the question is 'draw the SFD and BMD for the given beam and locate maximum bending moment'. Compute reactions, run the relations (or sum forces/moments section by section), mark the peak with its value, and quote the sign conventions at the start - the conventions themselves are a named mark.",
            ],
            bullets: [
              "V at a section = sum of transverse forces to one side; M = sum of their moments.",
              "Sign conventions: sagging moment positive (tension below); upward-left shear positive.",
              "Differential relations: dV/dx = -w, dM/dx = V - they generate the diagram shapes.",
              "Point load: V jumps, M kinks. UDL: V linear, M parabolic. Applied couple: M jumps.",
              "M_max occurs where V = 0 (dM/dx = 0).",
              "Standard results: W central - WL/4; UDL - wL^2/8; cantilever end load - WL.",
            ],
            diagram: {
              kind: "flow",
              title: "From load to diagrams in five steps",
              caption: "The routine that converts any beam drawing into its SFD and BMD.",
              steps: [
                { label: "Find reactions", note: "equilibrium of the whole beam" },
                { label: "Cut at each regime", note: "between loads, under UDL, after jumps" },
                { label: "Sum V per section", note: "sign convention applied consistently" },
                { label: "Sum M per section", note: "moments of forces about the cut" },
                { label: "Plot and mark peaks", note: "M_max where V crosses zero" },
              ],
            },
            table: {
              caption: "Standard maximum values to memorize.",
              headers: ["Case", "V_max", "M_max", "Where"],
              rows: [
                ["SS beam, central load W", "W/2", "WL/4", "midspan"],
                ["SS beam, UDL w", "wL/2", "wL^2/8", "midspan"],
                ["Cantilever, end load W", "W", "WL", "fixed end"],
                ["Cantilever, UDL w", "wL", "wL^2/2", "fixed end"],
              ],
            },
            callout: {
              type: "exam",
              title: "Draw diagrams directly under the beam",
              body: "Examiners expect the SFD and BMD stacked directly below the loading diagram, with values written at every break and the sign convention stated once. The vertical alignment lets the marker check your V-to-M integration visually - and it catches sign slips faster than any algebra. Make the three-deck layout a habit.",
            },
            keyTerms: [
              { term: "Shear force (V)", definition: "Internal transverse force at a section - sum of forces to one side." },
              { term: "Bending moment (M)", definition: "Internal moment at a section - sum of moments of forces to one side." },
              { term: "Sagging / hogging", definition: "Positive (tension below) and negative (tension above) bending conventions." },
              { term: "Point of contraflexure", definition: "Where the BMD crosses zero - curvature flips sign." },
            ],
            examQuestions: [
              {
                q: "State the sign conventions for shear force and bending moment. Draw the SFD and BMD for a simply supported beam of 6 m span carrying 12 kN at midspan, marking all values.",
                marks: 14,
                outline: [
                  "Conventions: sagging positive; upward shear on left face positive",
                  "Reactions: 6 kN at each support",
                  "V = +6 kN left half, -6 kN right half; jump of 12 at midspan",
                  "M rises linearly 0 to 18 kNm, peak at midspan, falls back to 0",
                  "M_max = WL/4 = 12 × 6/4 = 18 kNm",
                  "Diagram shapes: V rectangular blocks, M triangular",
                ],
              },
              {
                q: "Derive the relations dV/dx = -w and dM/dx = V from the equilibrium of a beam element.",
                marks: 7,
                outline: [
                  "Element dx with load w dx, shear V and V + dV, moments M and M + dM",
                  "Vertical equilibrium: dV = -w dx -> dV/dx = -w",
                  "Moment equilibrium about the right face: dM = V dx -> dM/dx = V",
                  "Consequences: M extremum where V = 0",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Pure bending and the flexure formula",
            body: [
              "Pure bending - a beam segment carrying moment M with zero shear (between equal and opposite couples) - bends the beam into a circular arc while plane sections remain plane. Fibres on one side shorten (compression), on the other lengthen (tension), and somewhere between lies the neutral surface with zero strain; in a symmetric homogeneous beam it passes through the centroid, and its trace is the neutral axis. Strain varies linearly with distance y from the neutral axis: epsilon = y/R, and with Hooke's law the stress follows sigma = E y/R.",
              "Equating the internal moment of this linear stress distribution to the applied M gives the flexure formula: M/I = sigma/y = E/R, with I the second moment of area about the neutral axis. The stress is zero at the neutral axis and maximum at the extreme fibres: sigma_max = M y_max/I = M/Z, where Z = I/y_max is the section modulus - the section's bending currency. Worked example: a rectangular timber beam 100 mm wide by 200 mm deep on a 4 m span carries a central point load of 6.7 kN: M = WL/4 = 6.7 kNm; I = bh^3/12 = 100 × 200^3/12 = 6.67 × 10^7 mm^4; sigma_max = 6.7 × 10^6 × 100/6.67 × 10^7 = 10.05 MPa - well inside timber's bending allowance, so the section stands.",
              "Section efficiency follows directly: for equal area, the I-section puts flange material far from the neutral axis where stress is high, Z rises sharply, and weight drops - the reason steel beams are I-shaped and timber joists are deep and narrow. Assumptions to state with the formula: plane sections remain plane, material homogeneous and linear-elastic, stress-free at the neutral axis, pure bending (no shear effect), and small deflection.",
              "Exam framing: the question is 'derive the flexure formula and compute bending stresses for the given beam'. State the assumptions, derive sigma = My/I through the strain geometry and moment equilibrium, then run the worked numerical with I computed explicitly.",
            ],
            bullets: [
              "Pure bending: plane sections stay plane; strain varies linearly with y.",
              "Neutral axis passes through the centroid (symmetric homogeneous section).",
              "Flexure formula: M/I = sigma/y = E/R; sigma_max = M/Z with Z = I/y_max.",
              "Rectangle: I = bh^3/12; circle: I = pi d^4/64; I-section: flanges do the work.",
              "Worked: 100 x 200 timber, M = 6.7 kNm gives sigma_max = 10 MPa.",
              "Assumptions: plane sections, homogeneous elastic material, pure bending, small deflection.",
            ],
            diagram: {
              kind: "flow",
              title: "Deriving the flexure formula",
              caption: "Geometry to stress to equilibrium - three moves and the formula falls out.",
              steps: [
                { label: "Strain geometry", note: "epsilon = y/R from plane sections" },
                { label: "Hooke's law", note: "sigma = E y/R - linear stress distribution" },
                { label: "Force balance", note: "integral sigma dA = 0 locates the neutral axis" },
                { label: "Moment balance", note: "integral sigma y dA = M gives sigma = My/I" },
              ],
            },
            table: {
              caption: "Section properties for bending.",
              headers: ["Section", "I about NA", "Z = I/y_max", "Note"],
              rows: [
                ["Rectangle b x h", "bh^3/12", "bh^2/6", "deep is efficient"],
                ["Solid circle d", "pi d^4/64", "pi d^3/32", "equal in all directions"],
                ["Hollow circle D, d", "pi(D^4 - d^4)/64", "as computed", "best strength-to-weight in torsion"],
                ["I-section", "tables per standard", "from Z tables", "flanges far from NA - efficient"],
              ],
            },
            callout: {
              type: "exam",
              title: "State the assumptions, earn the marks",
              body: "The flexure-formula derivation is graded on its assumptions as much as its algebra. Write the five - plane sections remain plane; homogeneous, isotropic, linear-elastic material; stress proportional to distance from the neutral axis; pure bending without shear; small deflection - before deriving. The marker's scheme lists them line by line.",
            },
            keyTerms: [
              { term: "Neutral axis", definition: "The unstrained layer through the centroid; bending stress is zero along it." },
              { term: "Second moment of area (I)", definition: "The section's geometric resistance to bending about the neutral axis." },
              { term: "Section modulus (Z)", definition: "I divided by extreme-fibre distance - the section's bending strength index." },
              { term: "Pure bending", definition: "A segment under constant moment with zero shear force - the flexure formula's home case." },
            ],
            examQuestions: [
              {
                q: "Derive the bending equation M/I = sigma/y = E/R stating all assumptions. Compute the maximum bending stress in a 100 x 200 mm timber beam of 4 m span carrying a central point load of 6.7 kN.",
                marks: 14,
                outline: [
                  "Assumptions stated (plane sections, linear elastic, pure bending, small deflection)",
                  "Strain geometry epsilon = y/R; stress sigma = Ey/R",
                  "Neutral axis through centroid; moment equilibrium gives sigma = My/I",
                  "M = WL/4 = 6.7 kNm at midspan",
                  "I = 100 × 200^3/12 = 6.67 × 10^7 mm^4",
                  "sigma_max = 6.7e6 × 100/6.67e7 = 10.05 MPa",
                ],
              },
              {
                q: "Why is the I-section more efficient in bending than a solid rectangle of the same area?",
                marks: 7,
                outline: [
                  "Bending stress grows with distance from the neutral axis",
                  "I-section concentrates material in flanges far from the NA",
                  "Section modulus Z rises sharply for the same area",
                  "Web carries shear with minimum weight - hence rolled steel joists",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Bending of composite (flitched) sections",
            body: [
              "A composite (flitched) beam bonds two materials - a timber core with steel side plates is the classic - to combine timber's cheap bulk with steel's stiffness. The analysis transforms the section into an equivalent single material: every part of the stiffer material is replaced by an equivalent width of the reference material scaled by the modular ratio m = E_steel/E_timber. Then the standard flexure formula applies to the transformed section with E of the reference material.",
              "The transformation rule comes from strain compatibility: bonded at the same depth, both materials share strain epsilon, so their stresses stand in ratio sigma_s = m sigma_t. Replacing each steel plate of width b by timber of width m b preserves the same internal force at every layer. Worked example: timber 150 mm wide by 300 mm deep with two 10 mm steel plates on the sides, E_s = 200 GPa, E_t = 10 GPa: m = 20, so transformed width = 150 + 2 × 20 × 10 = 550 mm of equivalent timber. I_transformed = (550 × 300^3)/12 = 1.2375 × 10^9 mm^4. For M = 10 kNm: timber stress sigma_t = M y/I = 10e6 × 150/1.2375e9 = 12.1 MPa, and steel stress = m × 12.1 = 242 MPa - each material stressed in its own currency.",
              "The check that separates marks: stresses in each material must be compared with its own allowable value - timber at 12 MPa is fine, steel at 242 MPa against about 165 MPa allowable would fail, so the design would need thicker timber or narrower plates. Composite bending is therefore a two-sided limit problem: compute both stresses and satisfy both allowables. The same transform handles concrete-steel T-beams (m = E_s/E_c about 10-15) in reinforced-concrete design.",
              "Exam framing: the question is 'explain the equivalent-section method and compute stresses in a flitched beam'. Define the modular ratio, show the width transformation, compute I of the transformed section, then give both stresses via m - and check both against their allowables.",
            ],
            bullets: [
              "Composite beam: two bonded materials share strain at each depth - sigma ratio = modular ratio m.",
              "Transform the stiffer material to equivalent width of the reference: b' = m b.",
              "Worked: m = 20, 150 mm timber + 2 x 10 mm plates -> 550 mm equivalent timber width.",
              "I_transformed = 1.2375 × 10^9 mm^4; M = 10 kNm gives timber 12.1 MPa, steel 242 MPa.",
              "Each stress must satisfy its own allowable - a two-sided limit check.",
              "Same method handles reinforced-concrete T-beams with m = E_s/E_c.",
            ],
            diagram: {
              kind: "flow",
              title: "The equivalent-section routine",
              caption: "Four steps turn a two-material beam into one-material arithmetic.",
              steps: [
                { label: "Fix the modular ratio", note: "m = E_steel/E_timber" },
                { label: "Transform widths", note: "steel plates -> m times wider timber" },
                { label: "Compute I of transformed section", note: "single-material flexure now applies" },
                { label: "Recover real stresses", note: "sigma_steel = m × sigma_timber at the same y" },
              ],
            },
            table: {
              caption: "Modular ratios for common pairs.",
              headers: ["Pair", "E ratio m", "Typical use"],
              rows: [
                ["Steel / timber", "about 20", "flitched beams, timber strengthening"],
                ["Steel / concrete", "about 10 - 15", "reinforced concrete design"],
                ["Steel / aluminium", "about 3", "bimetallic sections"],
                ["CFRP / timber", "about 15 - 25", "timber retrofit strips"],
              ],
            },
            callout: {
              type: "exam",
              title: "Two allowables, one answer",
              body: "The most-mark-lost step in flitched-beam numericals is checking only one material. Compute sigma_timber and sigma_steel = m sigma_timber and compare each against its own allowable - the steel at 20 times the timber strain-scale can be the failing member even when the timber looks fine. State both checks explicitly in the answer.",
            },
            keyTerms: [
              { term: "Modular ratio (m)", definition: "Ratio of the two materials' moduli - the scaling factor of the equivalent section." },
              { term: "Transformed section", definition: "The composite section redrawn as one material of adjusted widths." },
              { term: "Flitched beam", definition: "Timber beam strengthened with bolted/bonded steel side plates." },
              { term: "Strain compatibility", definition: "Bonded materials at the same depth deform equally - the basis of the transformation." },
            ],
            examQuestions: [
              {
                q: "Explain the equivalent-section method for composite beams. A timber beam 150 mm x 300 mm has 10 mm steel plates on each side (E_s = 200 GPa, E_t = 10 GPa). Find the transformed width and the stresses in both materials for M = 10 kNm.",
                marks: 14,
                outline: [
                  "Modular ratio m = 200/10 = 20",
                  "Transformed width = 150 + 2 × 20 × 10 = 550 mm (equivalent timber)",
                  "I = 550 × 300^3/12 = 1.2375 × 10^9 mm^4",
                  "sigma_t = 10e6 × 150/1.2375e9 = 12.1 MPa at extreme timber fibre",
                  "sigma_s = m × sigma_t = 242 MPa at the same y",
                  "Check both against allowables - steel governs here",
                ],
              },
              {
                q: "Why is the neutral axis of a composite section generally not at the mid-depth of the transformed rectangle?",
                marks: 7,
                outline: [
                  "The transformed section is uniform in material, so NA passes through its centroid",
                  "But real material distribution is asymmetric in stiffness",
                  "If the two materials are stacked (not symmetric side plates), the centroid shifts toward the stiffer layer",
                  "Side-plate arrangements with symmetry keep NA at mid-depth",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Eccentric axial loading",
            body: [
              "When an axial load acts off the centroid of a cross-section, it produces bending as well as direct stress - the defining case of eccentric loading. Decompose the eccentric force P (eccentricity e from the centroid): a direct stress P/A plus a bending stress P e/Z about the axis of eccentricity. The combined stress at the extreme fibre: sigma = P/A + - P e/Z - tension on the side the load leans toward, and possibly compression (or reduced tension) on the far side.",
              "The critical question is whether the far side goes into tension. For a rectangular section of width b and depth d loaded eccentrically about one axis: sigma = P/(bd) + - 6Pe/(bd^2), and the far-face stress is zero when e = d/6 - the middle-third rule: eccentricity within the middle third keeps the whole section in one sign of stress. For circular sections the middle third becomes the middle quarter (e <= D/8). Beyond these limits one face lifts into tension - harmless for steel, but fatal for masonry and concrete joints, which is exactly why the rule governs dam and wall design.",
              "Worked example: a short column 200 x 300 mm carries 300 kN at e = 50 mm from the centroid along the 300 mm axis. Direct stress = 300000/60000 = 5 N/mm^2. Bending stress = 6 × 300000 × 50/(200 × 300^2) = 5 N/mm^2. Faces: 5 + 5 = 10 MPa on the loaded side, 5 - 5 = 0 on the far side - the section sits exactly on the middle-third boundary, all compression but zero at the far face. Pushing e beyond 50 mm would open tension - the numerical makes the rule tangible.",
              "Exam framing: the question is 'explain eccentric loading and derive the combined-stress expression; state the middle-third rule'. Give the decomposition into direct plus bending, run the column numerical, and close with the middle-third/middle-quarter limits and their masonry significance.",
            ],
            bullets: [
              "Eccentric load P at eccentricity e = direct stress P/A + bending stress Pe/Z.",
              "Combined extreme-fibre stress: sigma = P/A + - Pe/Z.",
              "Rectangle: middle-third rule e <= d/6 keeps the whole section in compression.",
              "Circle: middle-quarter rule e <= D/8.",
              "Worked: 300 kN at e = 50 mm on 200 x 300 mm gives 10 MPa and 0 MPa on the two faces.",
              "The rule matters where tension is impossible: masonry, concrete, joints.",
            ],
            diagram: {
              kind: "flow",
              title: "Decomposing an eccentric load",
              caption: "One off-centre force becomes two simple stress systems.",
              steps: [
                { label: "Eccentric force P at e", note: "off the centroid axis" },
                { label: "Move to centroid", note: "P + moment P·e (equivalent system)" },
                { label: "Direct stress", note: "sigma_d = P/A uniform" },
                { label: "Bending stress", note: "sigma_b = + - Pe/Z linear across section" },
                { label: "Superpose", note: "sigma = P/A + - Pe/Z at the extreme fibres" },
              ],
            },
            callout: {
              type: "exam",
              title: "Zero at the far face is the tell",
              body: "When the computed far-face stress is exactly zero, the eccentricity equals the middle-third limit (d/6). Examiners set this boundary case on purpose; reporting '0 MPa at the far face - exactly the middle-third condition' demonstrates you recognize the design rule hiding inside the arithmetic.",
            },
            keyTerms: [
              { term: "Eccentricity (e)", definition: "Offset of the load line from the centroid axis." },
              { term: "Middle-third rule", definition: "For rectangular sections, e <= d/6 keeps the entire section in compression." },
              { term: "Combined stress", definition: "Superposition of direct and bending stresses from the equivalent force system." },
              { term: "Middle-quarter rule", definition: "For circular sections, e <= D/8 - the circular counterpart of the middle third." },
            ],
            examQuestions: [
              {
                q: "Derive the stress expression for a short column under eccentric loading and state the middle-third rule. For a 200 x 300 mm column carrying 300 kN at 50 mm eccentricity along the 300 mm axis, compute the extreme-fibre stresses.",
                marks: 14,
                outline: [
                  "Equivalent system: P at centroid + moment Pe",
                  "sigma = P/A + - Pe/Z",
                  "A = 60000 mm^2; Z = bd^2/6 = 3 × 10^6 mm^3",
                  "Direct = 300000/60000 = 5 MPa; bending = 6 × 300000 × 50/3e6 = 5 MPa",
                  "Loaded face: 10 MPa; far face: 0 MPa",
                  "e = 50 mm = d/6 - exactly the middle-third boundary",
                ],
              },
              {
                q: "Why is the middle-third rule critical for masonry and concrete but not for steel sections?",
                marks: 7,
                outline: [
                  "Masonry and unreinforced concrete cannot carry tension - joints open",
                  "Keeping e within d/6 guarantees full compressive contact",
                  "Steel carries tension without difficulty, so the rule is a formality",
                  "Hence gravity dams and walls are proportioned around the middle third",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Shear stresses in beams",
            body: [
              "Bending stress is not the whole story: the shear force V on a beam section produces shear stress distributed across it, governed by the shear formula tau = V Q/(I b), where Q is the first moment about the neutral axis of the area beyond the level considered, and b is the local width. The distribution is parabolic in a rectangle: zero at the top and bottom faces, maximum at the neutral axis, where tau_max = 1.5 V/A - one and a half times the average. For a circular section tau_max = 4/3 of average; for thin-walled tubes, about 2 times.",
              "The I-section redistributes everything: its wide flanges carry bending far from the neutral axis, while the thin web - which carries most of the shear - runs nearly uniform shear stress of about V/A_web. That division of labour (flanges bend, web shears) is the deep reason for the rolled-steel-joist shape, and the reason web thickness and stiffeners are shear-driven design choices. Worked example: the 100 x 200 rectangle under V = 20 kN: average stress = 20000/20000 mm^2 = 1 MPa; tau_max = 1.5 MPa at the neutral axis; at 50 mm from it (quarter depth), Q = 100 × 50 × 75 = 3.75 × 10^5 mm^3, and tau = 20000 × 3.75e5/(6.67e7 × 100) = 1.125 MPa - the parabola traced point by point.",
              "The formula's assumptions: the section is thin in the shear direction, shear stress is uniform across the width b, and Saint-Venant effects away from supports and load points are neglected - the usual statement in the exam. Complementary shear (tau equal on perpendicular planes) plus the shear flow concept connect the formula to riveted and welded girder flange design: the shear flow f = V Q/I per unit length decides rivet spacing along the flange.",
              "Exam framing: the question is 'derive tau = VQ/Ib, sketch the shear distribution for rectangular and I-sections, and compute tau_max'. Give the derivation from an elemental slice's equilibrium, the parabolic profile with the 1.5 factor, the I-section's web behaviour, and the worked numerical.",
            ],
            bullets: [
              "Shear formula: tau = V Q/(I b); Q = first moment of the area beyond the level considered.",
              "Rectangle: parabolic profile, tau_max = 1.5 V/A at the neutral axis, zero at the faces.",
              "Circle: tau_max = (4/3)(V/A); thin tube: about 2 V/A.",
              "I-section: web carries shear nearly uniformly (about V/A_web); flanges carry bending.",
              "Worked: 100 x 200 section, V = 20 kN gives tau_max = 1.5 MPa at NA, 1.125 MPa at quarter depth.",
              "Shear flow f = VQ/I sets rivet/weld spacing in built-up girders.",
            ],
            diagram: {
              kind: "compare",
              title: "Shear distribution: rectangle versus I-section",
              caption: "Two sections, two shear philosophies.",
              left: {
                heading: "Rectangle",
                items: [
                  "Parabolic distribution over the depth",
                  "tau_max = 1.5 V/A at the neutral axis",
                  "Zero at top and bottom faces",
                  "Bending and shear share the same material",
                ],
              },
              right: {
                heading: "I-section",
                items: [
                  "Web carries nearly uniform shear (V/A_web)",
                  "Flange shear small; flanges do the bending",
                  "Web thickness is shear-driven design",
                  "Stiffeners added when web buckles in shear",
                ],
              },
            },
            table: {
              caption: "Maximum shear stress factors (times average V/A).",
              headers: ["Section", "tau_max / (V/A)", "Location"],
              rows: [
                ["Rectangle", "1.5", "neutral axis"],
                ["Solid circle", "4/3", "neutral axis"],
                ["Thin-walled tube", "about 2.0", "neutral axis"],
                ["I-section", "about A/A_web at NA", "web, nearly uniform"],
                ["Triangle (base down)", "1.5 at mid-height", "slightly above NA"],
              ],
            },
            callout: {
              type: "exam",
              title: "Q is the step examiners watch",
              body: "The computational slip is measuring Q from the wrong area: Q is the first moment of the area beyond the level where tau is wanted, taken about the neutral axis - not the whole section. For the rectangle's neutral axis, Q = (b h/2)(h/4) = bh^2/8; writing this intermediate step keeps the factor 1.5 intact and the marker satisfied.",
            },
            keyTerms: [
              { term: "Shear formula", definition: "tau = VQ/(Ib) - shear stress at a level in a beam section." },
              { term: "First moment (Q)", definition: "Integral of y dA over the area beyond the level considered, about the neutral axis." },
              { term: "Shear flow", definition: "f = VQ/I per unit length - governs fastener spacing in built-up sections." },
              { term: "Complementary shear", definition: "Equal shear on perpendicular planes - why beam shear pairs with longitudinal shear." },
            ],
            examQuestions: [
              {
                q: "Derive the shear stress formula tau = VQ/Ib for a beam section and show that tau_max = 1.5 V/A for a rectangular section. Compute tau_max and the stress at quarter depth for a 100 x 200 mm beam carrying V = 20 kN.",
                marks: 14,
                outline: [
                  "Derivation: equilibrium of an elemental slice above the level, complementary shear",
                  "tau = VQ/Ib with Q the first moment beyond the level",
                  "Rectangle at NA: Q = bh^2/8, I = bh^3/12, b = b -> tau_max = 1.5 V/A",
                  "A = 20000 mm^2: average = 1 MPa, tau_max = 1.5 MPa",
                  "Quarter depth: Q = 100 × 50 × 75 = 3.75e5 mm^3",
                  "tau = 20000 × 3.75e5/(6.67e7 × 100) = 1.125 MPa - parabola confirmed",
                ],
              },
              {
                q: "Explain why the web of an I-beam carries most of the shear force while the flanges carry most of the bending moment.",
                marks: 7,
                outline: [
                  "Bending stress grows with distance from NA - flanges are far away",
                  "Shear stress peaks near the NA - exactly where the web sits",
                  "Web area is small but nearly uniform stress: V approx A_web × tau_web",
                  "Division of labour is geometric, not material",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Strain energy in bending",
            body: [
              "Bending stores energy the same way axial load does: each fibre works against its own stress, and integrating over the section gives the total. For a beam segment dx under moment M: dU = M^2 dx/(2EI), and for the whole beam U = integral M^2 dx/(2EI). The form parallels the axial U = P^2 L/2AE, with M in place of P and EI in place of AE - stiffness again in the denominator, so the flexible beam absorbs more energy at the same moment.",
              "Two standard results anchor the numericals. A simply supported beam of span L with central load W deflects delta = WL^3/48EI and stores U = W delta/2 = W^2 L^3/(96EI) - verifiable by integrating M^2 over the two half-spans (each M = Wx/2). A cantilever with end load W stores U = W^2 L^3/(6EI). Worked example: steel beam, W = 10 kN, L = 4 m, I = 6 × 10^7 mm^4, E = 200 GPa: U = (10e3)^2 × (4000)^3/(96 × 200000 × 6e7) = 1e8 × 6.4e10/(1.152e14) = 55556 Nmm = 55.6 J - the energy a falling mass must supply to reach that deflection, which is how impact factors on beams are computed.",
              "Strain energy in bending also powers Castigliano's theorem (deflection as partial derivative of U with respect to load) and the unit-load method in structural analysis - both beyond this syllabus but built on the same integral. For this course, the examinable core is the M^2 integral, the two standard results, and one numerical connecting energy to deflection through U = W delta/2.",
              "Exam framing: the question is 'derive the strain energy in bending and compute it for a standard case'. Derive dU = M^2 dx/2EI from the axial-fibre contribution, integrate for the central-load case, verify with U = W delta/2, and run the numerical.",
            ],
            bullets: [
              "Bending strain energy: U = integral M^2 dx/(2EI).",
              "SS beam with central load W: delta = WL^3/48EI and U = W^2 L^3/96EI.",
              "Cantilever with end load W: U = W^2 L^3/6EI.",
              "Worked: W = 10 kN, L = 4 m, I = 6 × 10^7 mm^4 gives U = 55.6 J.",
              "Energy-deflection link: U = W delta/2 for a gradually applied load.",
              "Same integral powers Castigliano's theorem and unit-load methods.",
            ],
            diagram: {
              kind: "flow",
              title: "From moment diagram to stored energy",
              caption: "Square the moment, integrate, divide by 2EI - three moves.",
              steps: [
                { label: "Write M(x)", note: "from the BMD of the case" },
                { label: "Square it", note: "M^2 - always positive" },
                { label: "Integrate over the span", note: "sum the segment contributions" },
                { label: "Divide by 2EI", note: "U in Nmm; convert to joules" },
              ],
            },
            table: {
              caption: "Standard strain-energy results.",
              headers: ["Case", "Deflection", "Strain energy U"],
              rows: [
                ["SS beam, central load W", "WL^3/48EI", "W^2 L^3/96EI"],
                ["SS beam, UDL w", "5wL^4/384EI", "w^2 L^5/240EI"],
                ["Cantilever, end load W", "WL^3/3EI", "W^2 L^3/6EI"],
                ["Axial bar, force P", "PL/AE", "P^2 L/2AE"],
              ],
            },
            callout: {
              type: "tip",
              title: "Check with U = W delta/2",
              body: "After integrating M^2, verify against W delta/2 using the standard deflection formula - the two routes must agree exactly. The check costs one line and catches the most common integration slip (forgetting to square M or doubling the symmetric half).",
            },
            keyTerms: [
              { term: "Strain energy in bending", definition: "U = integral M^2 dx/2EI - energy stored by the moment distribution." },
              { term: "Castigliano's theorem", definition: "Deflection at a load point = partial derivative of total strain energy with respect to that load." },
              { term: "Unit-load method", definition: "Deflection from the integral of m M/EI - built on the same energy integral." },
              { term: "Energy deflection link", definition: "U = W delta/2 for gradually applied single loads." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for strain energy stored in a beam in bending and evaluate it for a simply supported beam with a central point load W. Verify using U = W delta/2.",
                marks: 14,
                outline: [
                  "Fibre-level energy integrates to dU = M^2 dx/2EI",
                  "SS central load: M = Wx/2 on each half-span",
                  "U = 2 × integral_0^{L/2} (Wx/2)^2 dx/(2EI) = W^2 L^3/96EI",
                  "Deflection delta = WL^3/48EI (standard result)",
                  "Check: W delta/2 = W^2 L^3/96EI - matches",
                  "Numerical: W = 10 kN, L = 4 m, I = 6e7 mm^4 gives 55.6 J",
                ],
              },
              {
                q: "Why does a more flexible beam (smaller EI) absorb more energy at the same load?",
                marks: 7,
                outline: [
                  "U = integral M^2 dx/2EI - EI sits in the denominator",
                  "For the same moment diagram, smaller EI stores more energy",
                  "Equivalently, larger deflection delta means more W delta/2 work done",
                  "The principle behind compliant impact absorbers and spring beams",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Deflection of beams: elastic curve and Macaulay's method",
            body: [
              "The deflected shape of a beam obeys the elastic-curve (Euler-Bernoulli) equation: EI d^2y/dx^2 = M(x), with the sign convention matching the BMD. Integrating once gives slope EI dy/dx, twice gives deflection EI y, with constants fixed by boundary conditions - pinned ends zero deflection, fixed ends zero slope and deflection, free ends slope free. Deflection limits (typically span/250 to span/360 for live load) are serviceability design checks as real as any stress limit.",
              "Macaulay's method handles discontinuous loads elegantly: write the moment expression with singularity (Macaulay) brackets - terms like <x - a> that are zero until x passes a - then integrate with the brackets kept intact and apply boundary conditions globally. The one-integration procedure covers any load combination without section-by-section constant juggling. Worked example: a simply supported beam of span 6 m carries 12 kN at 2 m from the left support (R1 = 8 kN, R2 = 4 kN). Moment: EI y'' = 8x - 12<x - 2>. Integrating twice and applying y(0) = y(6) = 0: EI y = (4/3)x^3 - 2<x - 2>^3 - 41.33x. Maximum deflection near x = 3.05 m: EI y_max = -57.0, so y_max = -57.0/EI (downwards) - one expression, one integration, constants once.",
              "Standard results worth memorizing for verification: SS beam central load W - y_max = WL^3/48EI; SS beam UDL w - y_max = 5wL^4/384EI; cantilever end load - WL^3/3EI; cantilever UDL - wL^4/8EI. Macaulay results must reduce to these in their special cases - the check the examiner runs on your algebra. The method's power is mixed loading: UDL over part-span plus point loads plus overhang all fit one integrated expression.",
              "Exam framing: the question is 'state the elastic-curve equation and determine slope and deflection by Macaulay's method for the given beam'. Write the governing equation and conventions, build the bracketed moment expression, integrate twice, apply boundary conditions, and report maximum deflection with its location - the singularity brackets shown explicitly are the method mark.",
            ],
            bullets: [
              "Governing equation: EI d^2y/dx^2 = M(x); integrate twice with boundary conditions.",
              "Macaulay brackets <x - a>: zero before a, active after - loads write themselves into one expression.",
              "Integrate keeping brackets intact; apply global boundary conditions once.",
              "Worked: 6 m span, 12 kN at 2 m -> EI y = (4/3)x^3 - 2<x - 2>^3 - 41.33x; y_max about -57/EI.",
              "Standard results: WL^3/48EI (SS central), 5wL^4/384EI (SS UDL), WL^3/3EI (cantilever end).",
              "Deflection limits span/250 - serviceability, a design check like stress.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Macaulay's procedure",
              caption: "Five stages from loads to maximum deflection.",
              stages: [
                { label: "Reactions", note: "equilibrium of the whole beam" },
                { label: "Bracketed moment", note: "M(x) with <x - a> singularity terms" },
                { label: "Integrate once", note: "slope EI dy/dx" },
                { label: "Integrate twice", note: "deflection EI y with constants" },
                { label: "Boundary conditions", note: "y = 0 at supports; find y_max" },
              ],
            },
            table: {
              caption: "Standard deflection and slope results.",
              headers: ["Case", "Maximum deflection", "Max slope"],
              rows: [
                ["SS, central load W", "WL^3/48EI (midspan)", "WL^2/16EI at supports"],
                ["SS, UDL w", "5wL^4/384EI", "wL^3/24EI"],
                ["Cantilever, end load W", "WL^3/3EI (tip)", "WL^2/2EI"],
                ["Cantilever, UDL w", "wL^4/8EI (tip)", "wL^3/6EI"],
              ],
            },
            callout: {
              type: "warning",
              title: "Never expand the Macaulay brackets",
              body: "The one unforgivable error is expanding <x - a>^2 early - the singularity information is lost and the constants go wrong. Keep brackets intact through both integrations, and only drop terms whose argument is negative at the point of evaluation. Examiners award the bracket discipline as its own mark.",
            },
            keyTerms: [
              { term: "Elastic curve", definition: "The deflected beam shape obeying EI y'' = M(x)." },
              { term: "Macaulay bracket", definition: "Singularity term <x - a>: zero until x exceeds a - handles discontinuous loads in one expression." },
              { term: "Boundary conditions", definition: "Zero deflection at supports, zero slope at fixed ends - they fix the integration constants." },
              { term: "Serviceability limit", definition: "Maximum allowable deflection, typically span/250 to span/360 for live loads." },
            ],
            examQuestions: [
              {
                q: "State the equation of the elastic curve and explain Macaulay's method. A simply supported beam of 6 m span carries 12 kN at 2 m from the left support. Determine the deflection expression and the maximum deflection in terms of EI.",
                marks: 14,
                outline: [
                  "EI d^2y/dx^2 = M with sign convention stated",
                  "Reactions: R1 = 8 kN, R2 = 4 kN",
                  "EI y'' = 8x - 12<x - 2> (brackets intact)",
                  "EI y' = 4x^2 - 6<x - 2>^2 + C1",
                  "EI y = (4/3)x^3 - 2<x - 2>^3 - 41.33x + C2; y(0) = y(6) = 0 fixes constants",
                  "y_max near x = 3.05 m: EI y_max = -57.0 (downward)",
                ],
              },
              {
                q: "Why is Macaulay's method preferred over the double-integration-by-sections approach for beams with multiple loads?",
                marks: 7,
                outline: [
                  "Section-wise integration creates 2 constants per section",
                  "Continuity conditions between sections multiply the algebra",
                  "Macaulay brackets fold all sections into one expression",
                  "Two constants total, applied once - less error-prone under exam time",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "Area-moment method for slope and deflection",
            body: [
              "The area-moment (moment-area) method reads slope and deflection from the M/EI diagram - the BMD divided by EI - using two theorems. First theorem: the change of slope between two points on the elastic curve equals the area of the M/EI diagram between them. Second theorem: the deviation of one point from the tangent drawn at another equals the moment of that M/EI area about the first point. Both follow directly from EI y'' = M by integration; both turn slope and deflection into geometry problems - areas and centroids - instead of algebra.",
              "The method shines on determinate spans with simple loading: for a simply supported beam with central load, the M/EI triangle between support and midspan has area WL^2/16EI, which by symmetry equals half the end slope - theta = WL^2/16EI - and the midspan deviation from the support tangent is the triangle's moment about the support: (WL^2/16EI) × (2L/3) = WL^3/24EI, half of it again giving y_max = WL^3/48EI - every standard result re-derived by geometry in two lines. Worked example: cantilever with end load W: the M/EI triangle has area WL^2/2EI and centroid L/3 from the wall; slope at tip = WL^2/2EI, deflection = area × centroid distance = WL^3/3EI - both standard results at sight.",
              "Mohr's theorems need a reference tangent strategy: for symmetric cases the support tangent is horizontal at midspan (the deviation there is the deflection); for unsymmetric cases compute deviations of both supports from a tangent at one support and use geometry. The method handles taper and stepwise EI naturally - exactly the cases where Macaulay's constants grow messy - and is the traditional companion to the moment-distribution era of structural analysis.",
              "Exam framing: the question is 'state Mohr's theorems and use them to find slope and deflection for the given beam'. State both theorems precisely, sketch the M/EI diagram with its area and centroid, apply the tangent strategy, and report the standard results - the centroid arithmetic shown explicitly is the method mark.",
            ],
            bullets: [
              "Theorem 1: change of slope = area of the M/EI diagram between the two points.",
              "Theorem 2: tangential deviation = moment of the M/EI area about the reference point.",
              "Both come from integrating EI y'' = M - geometry replaces algebra.",
              "SS central load: end slope WL^2/16EI, y_max WL^3/48EI - re-derived in two lines.",
              "Cantilever end load: slope WL^2/2EI, deflection WL^3/3EI from one triangle.",
              "Strategy: symmetric cases use midspan tangent; unsymmetric need two deviations.",
            ],
            diagram: {
              kind: "flow",
              title: "Moment-area in four moves",
              caption: "Draw M/EI, find area and centroid, then read slope and deflection.",
              steps: [
                { label: "Draw the M/EI diagram", note: "BMD divided by EI" },
                { label: "Compute its area", note: "change of slope between ends (Theorem 1)" },
                { label: "Locate the centroid", note: "distance for the moment of area" },
                { label: "Apply Theorem 2", note: "deviation = area x centroid distance = deflection input" },
              ],
            },
            table: {
              caption: "Areas and centroids for the standard M/EI shapes.",
              headers: ["M/EI shape", "Area", "Centroid from left"],
              rows: [
                ["Triangle (peak at b)", "BL/2 (B = peak ordinate)", "(L + b)/3"],
                ["Parabola (UDL), vertex at centre", "2BL/3", "L/2"],
                ["Rectangle", "BL", "L/2"],
                ["Parabolic spandrel (end vertex)", "BL/3", "L/4"],
              ],
            },
            callout: {
              type: "tip",
              title: "Symmetry halves the work",
              body: "For symmetric loads on simply supported beams, the tangent at midspan is horizontal - so the deviation of any support from that tangent is exactly the midspan deflection. One theorem-2 computation replaces the whole deflection algebra. Spot symmetry first; it is worth one full integration saved.",
            },
            keyTerms: [
              { term: "M/EI diagram", definition: "The BMD ordinates divided by EI - the geometric object of the moment-area theorems." },
              { term: "Tangential deviation", definition: "Vertical distance of one point from the tangent drawn at another - Theorem 2's quantity." },
              { term: "Mohr's theorems", definition: "Slope change equals M/EI area; deviation equals its moment about the point." },
              { term: "Centroid of area", definition: "The lever arm point for Theorem 2 - standard shapes tabulated for speed." },
            ],
            examQuestions: [
              {
                q: "State Mohr's two theorems. Using the moment-area method, derive the end slope and maximum deflection of a simply supported beam of span L under a central point load W.",
                marks: 14,
                outline: [
                  "Theorem 1: slope change = area of M/EI diagram",
                  "Theorem 2: deviation = moment of that area about the point",
                  "M/EI triangle: peak WL/4EI at midspan, base L",
                  "Half area = WL^2/16EI = end slope (tangent horizontal at midspan by symmetry)",
                  "Deviation of support from midspan tangent = (WL^2/16EI)(2L/3) = WL^3/24EI",
                  "y_max = WL^3/48EI - half the deviation",
                ],
              },
              {
                q: "Use the moment-area method to find the slope and deflection at the tip of a cantilever of length L carrying an end load W.",
                marks: 7,
                outline: [
                  "M/EI triangle from WL/EI at the wall to zero at the tip",
                  "Area = WL^2/2EI; centroid L/3 from the wall",
                  "Slope at tip (wall tangent horizontal) = WL^2/2EI",
                  "Deflection = area x centroid arm from tip = WL^3/3EI",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Torsion in Shafts",
      summary:
        "Unit III twists the subject: torsional shear stress and its distribution in circular shafts, deformation and angle of twist with stiffness, stepped and composite shafts, hollow versus solid transmission shafts, the power-torque-speed relation with shaft design, and the combined bending-plus-torsion case with equivalent moments.",
      chapter: {
        number: "03",
        title: "Shafts in Torsion",
        intro:
          "Unit III covers torsional stresses in shafts, deformation in circular shafts, angle of twist, and stepped and hollow transmission shafts, extended with power transmission design and the combined bending-torsion case.",
        inOneBreath:
          "Torsion shears circular shafts as tau = Tr/J with J = pi d^4/32 solid and pi(D^4 - d^4)/32 hollow; twist follows theta = TL/GJ; stepped shafts sum their twists; hollow shafts trade centre mass for stiffness per kilogram; power is P = 2 pi N T/60; and combined loading uses equivalent moments Me and Te.",
        sections: [
          {
            number: "3.1",
            title: "Torsional shear stress in circular shafts",
            body: [
              "A torque applied to a circular shaft twists it, and plane cross-sections remain plane - the assumption that makes circular shafts the clean torsion case. Each cross-section rotates as a rigid disc about the axis, so shear strain grows linearly with radius: gamma = r theta/L. With Hooke's law in shear (tau = G gamma), shear stress also grows linearly from zero on the axis to maximum at the surface, and equilibrium of the section gives the torsion formula: T/J = tau/r = G theta/L, with J the polar second moment of area - pi d^4/32 for a solid shaft, pi(D^4 - d^4)/32 for a hollow one.",
              "The linear distribution is the section's signature: material near the centre barely works, material at the rim works hardest - which is why the hollow shaft exists (section 3.4). Worked example: a 100 mm diameter shaft transmits torque with a surface shear stress limited to 60 MPa: T = tau × pi d^3/16 = 60 × pi × 100^3/16 = 11.78 kNm, using J = pi d^4/32 and tau = T(d/2)/J rearranged as T = tau pi d^3/16. Double the diameter and the torque capacity rises eightfold (d^3 scaling) - the cubic law that makes shaft sizing so sensitive.",
              "Assumptions to state: circular section, plane sections remain plane, material homogeneous and elastic, twist small and uniform, and stress does not exceed the proportional limit. Non-circular sections (square, rectangular) warp under torsion and the simple formula fails - the reason drive shafts are round and the reason the exam asks for the assumptions.",
              "Exam framing: the question is 'derive the torsion formula and compute the torque capacity of the given shaft'. State assumptions, derive from shear-strain geometry plus equilibrium, then run the numerical with T = tau pi d^3/16.",
            ],
            bullets: [
              "Torsion formula: T/J = tau/r = G theta/L.",
              "J solid = pi d^4/32; J hollow = pi(D^4 - d^4)/32.",
              "Shear stress linear in r: zero at centre, tau_max at surface; tau_max = 16T/pi d^3.",
              "Torque capacity scales as d^3 - doubling diameter gives 8 times the torque.",
              "Worked: d = 100 mm, tau_allow = 60 MPa -> T = 11.78 kNm.",
              "Assumptions: circular section, plane sections plane, elastic, small twist.",
            ],
            diagram: {
              kind: "flow",
              title: "Deriving the torsion formula",
              caption: "Geometry, law, equilibrium - the three-move derivation.",
              steps: [
                { label: "Twist geometry", note: "gamma = r theta/L from rigid-plane rotation" },
                { label: "Hooke's law in shear", note: "tau = G gamma - linear in r" },
                { label: "Moment equilibrium", note: "integral tau r dA = T" },
                { label: "Collect the integral", note: "integral r^2 dA = J -> T/J = tau/r = G theta/L" },
              ],
            },
            table: {
              caption: "Torsion section properties.",
              headers: ["Section", "J", "tau_max", "Note"],
              rows: [
                ["Solid circle d", "pi d^4/32", "16T/pi d^3", "the standard drive shaft"],
                ["Hollow circle D, d", "pi(D^4 - d^4)/32", "16TD/pi(D^4 - d^4)", "better stiffness per mass"],
                ["Thin tube t << D", "about pi D^3 t/8", "T/(2 pi r^2 t)", "uniform stress through wall"],
                ["Square/rectangular", "no simple J", "warping - formula invalid", "avoid for pure torsion"],
              ],
            },
            callout: {
              type: "tip",
              title: "The two T-formulas worth memorizing",
              body: "From the torsion formula fall two instant forms: T = tau pi d^3/16 (strength) and T = G theta pi d^4/(32 L) (stiffness at a twist limit). Strength problems use the first, stiffness problems the second, and combined-limit problems take the minimum - stating which limit governs is part of the answer.",
            },
            keyTerms: [
              { term: "Polar moment (J)", definition: "Second moment of area about the shaft axis - the torsional I." },
              { term: "Torsion formula", definition: "T/J = tau/r = G theta/L for elastic circular shafts." },
              { term: "Pure torsion", definition: "Loading by torque alone - no bending, no axial force." },
              { term: "Warping", definition: "Out-of-plane distortion of non-circular sections under torsion - why the formula is circular-only." },
            ],
            examQuestions: [
              {
                q: "Derive the torsion equation T/J = tau/r = G theta/L, stating the assumptions. Compute the torque capacity of a 100 mm diameter solid shaft if the allowable shear stress is 60 MPa.",
                marks: 14,
                outline: [
                  "Assumptions: circular section, plane sections plane, elastic, small twist",
                  "Twist geometry gamma = r theta/L; tau = G gamma linear in r",
                  "Equilibrium integral tau r dA = T with J = integral r^2 dA",
                  "Hence T/J = tau/r = G theta/L",
                  "T = tau pi d^3/16 = 60 × pi × 100^3/16 = 11.78 × 10^6 Nmm",
                  "T = 11.78 kNm",
                ],
              },
              {
                q: "Why does the simple torsion formula fail for a square shaft?",
                marks: 7,
                outline: [
                  "Square sections warp out of plane under torsion",
                  "Plane sections remaining plane - the key assumption - is violated",
                  "Stress is no longer linear with distance from the centre",
                  "Saint-Venant torsion analysis (with warping function) is required instead",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Angle of twist and torsional stiffness",
            body: [
              "The angle of twist measures deformation: from the torsion formula, theta = T L/(G J) radians - torque times length over rigidity times polar moment. The pair GJ is the torsional stiffness of the shaft, exactly analogous to AE in axial members; twist accumulates along the length like elongation does, and design often limits theta (typically 1 degree per metre for line shafts) rather than stress. Worked example: the 100 mm shaft of section 3.1 transmitting 11.78 kNm over 2 m (G = 80 GPa): J = pi × 100^4/32 = 9.82 × 10^6 mm^4; theta = 11.78e6 × 2000/(80000 × 9.82e6) = 0.03 rad = 1.72 degrees - comfortable against a 2-degree-per-2 m guideline, so the strength-limited design also passes the stiffness check.",
              "Stiffness-limited design inverts the formula: for a given allowable twist, d^4 >= 32 T L/(pi G theta_allow) - the fourth-power law, even more sensitive than the strength-side cubic. Long transmission lines (ship propeller shafts, rolling-mill spindles) are frequently stiffness-governed; short stiff couplings are strength-governed. The designer computes both and takes the governing diameter - the standard two-check routine examiners reward.",
              "Relative twist between two points is additive along the shaft: theta_total = sum T_i L_i/(G J_i) for segments of varying torque or section - the groundwork for stepped shafts in the next section. Sign convention: torque direction follows the right-hand rule; twist in radians must be converted (1 rad = 57.3 degrees) before comparing with degree-based limits - the unit slip examiners watch for.",
              "Exam framing: the question is 'derive the angle-of-twist expression and check a shaft against a twist limit'. Derive theta = TL/GJ from the torsion formula, compute the worked numerical, convert radians to degrees, and state the stiffness-limited fourth-power design form.",
            ],
            bullets: [
              "Angle of twist: theta = T L/(G J) radians; GJ is the torsional stiffness.",
              "Typical line-shaft limit: about 1 degree twist per metre of length.",
              "Worked: 11.78 kNm over 2 m on the 100 mm shaft gives 0.03 rad = 1.72 degrees.",
              "Stiffness design: d^4 >= 32 T L/(pi G theta_allow) - the fourth-power law.",
              "Segmented shafts: theta_total = sum T_i L_i/(G J_i).",
              "Convert radians (57.3 deg/rad) before comparing twist limits - the standing unit trap.",
            ],
            diagram: {
              kind: "flow",
              title: "The twist check in four moves",
              caption: "Strength sizing is only half the design - twist closes the loop.",
              steps: [
                { label: "Size for strength", note: "d from tau_allow: cubic law" },
                { label: "Compute J", note: "pi d^4/32" },
                { label: "Compute twist", note: "theta = TL/GJ radians" },
                { label: "Compare to limit", note: "convert to degrees; resize if over" },
              ],
            },
            table: {
              caption: "Twist in perspective - worked shaft values.",
              headers: ["Quantity", "Value", "Basis"],
              rows: [
                ["J (100 mm solid)", "9.82 × 10^6 mm^4", "pi d^4/32"],
                ["GJ stiffness", "7.85 × 10^11 Nmm^2", "G = 80 GPa"],
                ["Twist for 11.78 kNm, 2 m", "0.03 rad = 1.72 degrees", "theta = TL/GJ"],
                ["Guideline", "about 2 degrees per 2 m", "line-shaft practice"],
              ],
            },
            callout: {
              type: "exam",
              title: "Radians first, degrees last",
              body: "Compute theta in radians throughout, then convert once at the end: 0.03 rad × 57.3 = 1.72 degrees. Mixing the conversion mid-derivation - or forgetting it before comparing with a degree limit - is the most common slip in stiffness numericals. State 'theta = 0.03 rad = 1.72 degrees' as one line.",
            },
            keyTerms: [
              { term: "Angle of twist (theta)", definition: "Relative rotation of two shaft sections: theta = TL/GJ radians." },
              { term: "Torsional stiffness (GJ)", definition: "Rigidity of the shaft in twist - the torsional analogue of axial EA." },
              { term: "Stiffness-limited design", definition: "Sizing from a twist limit rather than a stress limit - d^4 scaling." },
              { term: "Line shaft", definition: "A long transmission shaft - typically stiffness-governed at about 1 degree per metre." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for the angle of twist of a circular shaft. For the 100 mm shaft of 2 m length transmitting 11.78 kNm (G = 80 GPa), compute the twist in radians and degrees and check it against a 1 degree per metre guideline.",
                marks: 14,
                outline: [
                  "From torsion formula: G theta/L = T/J, so theta = TL/GJ",
                  "J = pi × 100^4/32 = 9.82 × 10^6 mm^4",
                  "theta = 11.78e6 × 2000/(80000 × 9.82e6) = 0.03 rad",
                  "In degrees: 0.03 × 57.3 = 1.72 degrees",
                  "Guideline: 1 degree/m × 2 m = 2 degrees - acceptable",
                  "Stiffness sizing form: d^4 >= 32TL/pi G theta_allow",
                ],
              },
              {
                q: "Why are long transmission shafts often stiffness-governed rather than strength-governed?",
                marks: 7,
                outline: [
                  "Twist grows linearly with length; stress does not",
                  "Long shafts accumulate degrees of twist that upset gearing and vibration",
                  "Strength sizing may pass while twist fails the guideline",
                  "Hence stiffness (fourth-power) sizing governs long spans",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Stepped and composite shafts",
            body: [
              "Real transmission lines change diameter: couplings, bearings and gear seats demand steps. In a stepped shaft under one torque, each segment carries the same T but its own J, so surface stress is tau_i = 16T/pi d_i^3 per segment (the smallest diameter governs strength) and the total twist is the sum theta = sum T L_i/(G J_i). The stepped-shaft numerical is therefore two lists - one of stresses, one of twist contributions - plus the governing statements.",
              "Composite shafts bond two materials concentrically (a steel core in a brass sleeve, or a composite wrap on steel): both share the same twist theta, and torques distribute by relative stiffness. Compatibility: theta_steel = theta_sleeve = theta; equilibrium: T_steel + T_sleeve = T_total; with theta = T L/GJ in each material, the two equations solve the torque split - T_i proportional to G_i J_i. Worked example: a steel core (d = 60 mm, G = 80 GPa) inside a brass tube (D = 100, d = 60 mm, G = 40 GPa) carries 5 kNm: J_steel = 1.272 × 10^6 mm^4; J_brass = pi(100^4 - 60^4)/32 = 8.55 × 10^6 mm^4. Stiffness ratio GJ: steel 1.018 × 10^11, brass 3.42 × 10^11 - steel takes 5 × 1.018/4.44 = 1.15 kNm, brass 3.85 kNm. Surface stresses follow: steel 16 × 1.15e6/(pi × 60^3) = 27.1 MPa; brass at its 100 mm OD, 16 × 3.85e6 × 100/(pi(100^4 - 60^4)) = 18.0 MPa.",
              "The design message: in composite shafts the stiffer material need not be the more stressed - brass carries 77 percent of the torque here because its J is so much larger. Both materials must pass their own allowables, exactly like the flitched beam of Unit II. The same two-equation routine handles pre-twisted assembled shafts (built with an interference angle, then joined) - the assembly twist appears as a compatibility term.",
              "Exam framing: the question is 'solve a stepped-shaft twist or a composite-shaft torque-share problem'. For stepped: same T, per-segment stress and twist sums. For composite: write compatibility and equilibrium, solve the split by GJ ratio, then compute both surface stresses.",
            ],
            bullets: [
              "Stepped shaft: same T through all segments; stress by each d_i; twists add.",
              "Smallest diameter governs stepped-shaft strength.",
              "Composite shaft: equal twist (compatibility) + torque split by GJ (equilibrium).",
              "T_i shares in proportion to G_i J_i - stiffer takes more torque, not necessarily more stress.",
              "Worked: steel core 60 mm in brass tube 100 mm: steel 1.15 kNm at 27 MPa, brass 3.85 kNm at 18 MPa.",
              "Both materials checked against their own allowables - the flitched-beam discipline again.",
            ],
            diagram: {
              kind: "compare",
              title: "Stepped versus composite shafts",
              caption: "Same torque, two different sharing stories.",
              left: {
                heading: "Stepped (series)",
                items: [
                  "One material, varying diameter",
                  "Same T in every segment",
                  "Stress set by each segment's d",
                  "Total twist = sum of segment twists",
                ],
              },
              right: {
                heading: "Composite (parallel)",
                items: [
                  "Two materials, concentric",
                  "Same twist theta in both",
                  "Torque split by G_i J_i",
                  "Each material checked against its own tau_allow",
                ],
              },
            },
            table: {
              caption: "Worked composite-shaft numbers.",
              headers: ["Quantity", "Steel core", "Brass sleeve"],
              rows: [
                ["J", "1.272 × 10^6 mm^4", "8.55 × 10^6 mm^4"],
                ["GJ stiffness", "1.018 × 10^11 Nmm^2", "3.42 × 10^11 Nmm^2"],
                ["Torque share (of 5 kNm)", "1.15 kNm (23 percent)", "3.85 kNm (77 percent)"],
                ["Surface shear stress", "27.1 MPa", "18.0 MPa"],
              ],
            },
            callout: {
              type: "exam",
              title: "Stiffer is not always more stressed",
              body: "The counter-intuitive line examiners love: in the composite shaft, brass (half the modulus) carries 77 percent of the torque because its J is nearly seven times larger - yet its surface stress is lower than steel's. Always compute stresses from the split torques; never assume the stiffer material is the critical one.",
            },
            keyTerms: [
              { term: "Stepped shaft", definition: "Shaft of varying diameter under one torque - stress per segment, twists additive." },
              { term: "Composite shaft", definition: "Concentric bonded shafts of different materials sharing twist and splitting torque by GJ." },
              { term: "Compatibility", definition: "The shared-twist condition that pairs with equilibrium to solve composite problems." },
              { term: "Torque share", definition: "T_i = (G_i J_i / sum G J) × T_total - the stiffness-proportional split." },
            ],
            examQuestions: [
              {
                q: "A steel shaft 60 mm diameter is bonded inside a brass tube of 100 mm outside diameter (G_steel = 80 GPa, G_brass = 40 GPa). The composite shaft carries 5 kNm. Determine the torque carried by each material and the maximum shear stress in each.",
                marks: 14,
                outline: [
                  "Compatibility: theta_s = theta_b",
                  "Equilibrium: T_s + T_b = 5 kNm",
                  "J_s = 1.272e6 mm^4; J_b = 8.55e6 mm^4",
                  "Split by GJ: steel 23 percent, brass 77 percent",
                  "T_s = 1.15 kNm; T_b = 3.85 kNm",
                  "tau_s = 27.1 MPa; tau_b = 18.0 MPa - both materials checked",
                ],
              },
              {
                q: "A stepped shaft has segments d1 = 80 mm (1 m) and d2 = 60 mm (0.6 m) under 3 kNm. Which segment governs strength, and how is the total twist found?",
                marks: 7,
                outline: [
                  "Same T in both segments (series)",
                  "Smaller diameter governs: tau2 = 16 × 3e6/(pi × 60^3) = 70.7 MPa vs 29.8 MPa",
                  "Twists: theta_i = T L_i/G J_i, computed per segment",
                  "Total twist = theta1 + theta2 (additive)",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Hollow versus solid transmission shafts",
            body: [
              "Torsion works material hardest at the rim and not at all at the axis, so removing the idle core cuts weight almost without cutting strength - the hollow shaft's entire case. For a hollow shaft with outside diameter D and inside diameter d: J = pi(D^4 - d^4)/32 and tau_max = 16 T D/pi(D^4 - d^4). Compare equal outer diameter: with d = 0.6 D, J retains (1 - 0.6^4) = 87 percent of the solid value while mass drops to 64 percent - strength per kilogram improves by about 36 percent.",
              "Worked example: a 100 mm solid shaft (tau_allow = 60 MPa) carries 11.78 kNm at 87.4 kg/m (steel at 7850 kg/m^3: A = pi × 100^2/4 = 7854 mm^2). The hollow replacement with d = 60 mm: J = pi(100^4 - 60^4)/32 = 8.55 × 10^6 mm^4; torque capacity = tau × J/(D/2) = 60 × 8.55e6/50 = 10.26 kNm - 87 percent of the solid shaft's capacity at 64 percent of the mass. To match the full 11.78 kNm, D grows to about 104 mm - mass still only 68 percent of solid. Every propeller shaft, B WR? - every automotive prop shaft and machine-tool spindle lives on this arithmetic.",
              "The trade-offs are real: hollow shafts cost more to bore, buckle (ovalization) under extreme torque, and complicate keying and coupling - which is why small shafts stay solid and large transmission shafts go hollow. The comparison question is standard: given equal weight or equal strength, which geometry wins, and by how much - answered with the two J formulas and the mass ratio A_hollow/A_solid = (D^2 - d^2)/D^2.",
              "Exam framing: the question is 'compare solid and hollow shafts for equal strength or equal weight'. Write both J formulas, run the d = 0.6 D comparison, compute the mass ratio, and close with the practical trade-offs.",
            ],
            bullets: [
              "Torsion stresses the rim, idles the core - hollow sections cut weight without proportional strength loss.",
              "J hollow = pi(D^4 - d^4)/32; tau_max = 16TD/pi(D^4 - d^4).",
              "d = 0.6 D keeps 87 percent of J at 64 percent of mass - strength/mass up about 36 percent.",
              "Worked: hollow 100/60 mm shaft carries 10.26 kNm at 87.4 → 56 kg/m versus solid 11.78 kNm at 87.4 kg/m.",
              "Matching full strength needs D about 104 mm - still only 68 percent of solid mass.",
              "Trade-offs: boring cost, ovalization buckling, coupling complexity - small shafts stay solid.",
            ],
            diagram: {
              kind: "compare",
              title: "Solid versus hollow at the same outer diameter",
              caption: "The core does almost nothing in torsion - hollow wins per kilogram.",
              left: {
                heading: "Solid shaft d = 100 mm",
                items: [
                  "J = 9.82 × 10^6 mm^4",
                  "T capacity 11.78 kNm at 60 MPa",
                  "Mass 87.4 kg/m",
                  "Simple to bore, key and couple",
                ],
              },
              right: {
                heading: "Hollow D = 100, d = 60 mm",
                items: [
                  "J = 8.55 × 10^6 mm^4 (87 percent)",
                  "T capacity 10.26 kNm (87 percent)",
                  "Mass 56 kg/m (64 percent)",
                  "Strength per kg up about 36 percent",
                ],
              },
            },
            table: {
              caption: "Hollow-shaft efficiency at D fixed, d/D varied.",
              headers: ["d/D", "J retained", "Mass retained", "Strength per kg vs solid"],
              rows: [
                ["0.4", "97.4 percent", "84 percent", "about 16 percent better"],
                ["0.6", "87.0 percent", "64 percent", "about 36 percent better"],
                ["0.8", "59.0 percent", "36 percent", "about 64 percent better"],
                ["0.9", "34.4 percent", "19 percent", "about 81 percent better (wall thin - buckling risk)"],
              ],
            },
            callout: {
              type: "tip",
              title: "Sweet spot around d/D = 0.6",
              body: "Strength-per-mass keeps improving as the bore grows, but very thin walls ovalize and buckle under torque; practical design sits near d/D = 0.5-0.7. Quoting the sweet-spot band answers the 'why not hollow all the way' follow-up and shows engineering judgement beyond the formulas.",
            },
            keyTerms: [
              { term: "Hollow shaft", definition: "Tubular transmission shaft - J = pi(D^4 - d^4)/32, strength-efficient per mass." },
              { term: "Ovalization", definition: "Cross-section flattening of thin tubes under high torque - the hollow-shaft failure mode." },
              { term: "Strength-to-weight", definition: "Torque capacity per unit mass - the hollow shaft's selling metric." },
              { term: "Bore ratio (d/D)", definition: "Inside-to-outside diameter ratio; practical designs sit near 0.5-0.7." },
            ],
            examQuestions: [
              {
                q: "Derive the torsion relations for a hollow shaft and compare it with a solid shaft of the same outer diameter with d = 0.6D. Compute torque capacity per unit mass for both at tau_allow = 60 MPa, D = 100 mm (steel 7850 kg/m^3).",
                marks: 14,
                outline: [
                  "J = pi(D^4 - d^4)/32; tau_max = 16TD/pi(D^4 - d^4)",
                  "Solid: J = 9.82e6 mm^4, T = 11.78 kNm, mass 87.4 kg/m",
                  "Hollow: J = 8.55e6 mm^4 (87 percent), T = 10.26 kNm",
                  "Hollow mass = 56 kg/m (64 percent)",
                  "T per kg: 135 vs 183 Nm/kg - hollow about 36 percent better",
                  "Trade-offs: boring cost, ovalization, coupling complexity",
                ],
              },
              {
                q: "Why does material near the axis of a solid shaft contribute almost nothing to torsional strength?",
                marks: 7,
                outline: [
                  "Shear stress is linear in r: zero at the axis, maximum at the surface",
                  "Torque contribution integrand tau r dA scales as r^2",
                  "Core material carries little stress and little lever arm",
                  "Hence removing it barely reduces capacity - the hollow-shaft logic",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Power transmission and shaft design",
            body: [
              "The link between rotating power and torque is P = 2 pi N T/60 (watts, with N in rpm and T in Nm) - or T = 60P/(2 pi N) = 9.55 P(kW)/N kNm-scale conversions. Torque falls as speed rises for the same power, which is why high-speed spindles are slim and low-speed mill drives are massive. Worked example: the 100 mm shaft carrying 11.78 kNm at 200 rpm transmits P = 2 pi × 200 × 11780/60 = 246.7 kW; conversely a 100 kW drive at 1440 rpm needs T = 9550 × 100/1440 = 663 Nm, sizing a shaft of d^3 >= 16 × 663000/(pi × 60), d >= 41 mm with a solid section - the two directions of the same formula.",
              "Shaft design then adds the non-torsion realities: keys and splines reduce the effective section (keyway factor about 0.75-0.85 on strength), bending from gears and pulleys combines with torsion (next section), stress concentrations at shoulders and holes demand fillet radii, and fatigue - shafts see millions of reversed cycles - brings the endurance limit and stress-concentration factors of Unit I's fatigue discussion into every line-shaft sizing. Good practice: size by the maximum combined stress at the most loaded section, then check deflection and critical speed.",
              "Design procedure as the examiner wants it listed: (1) compute torque from power and speed; (2) choose material and allowable shear (typically 40-60 MPa for commercial shafting with keyways); (3) size by pure torsion d^3 = 16T/pi tau; (4) add combined-bending correction if gear forces act; (5) check twist against 1 degree per 20 diameters? - more practically, 1 degree per metre; (6) verify bearings, shoulders and fatigue margins. Each numbered step is a named mark in design questions.",
              "Exam framing: the question is 'derive P = 2 pi NT/60 and design a shaft for given power and speed'. Derive from work per revolution, run both directions of the formula, size the shaft by the cubic relation, and list the design procedure with the keyway and fatigue corrections.",
            ],
            bullets: [
              "P = 2 pi N T/60; inverse T = 9550 P(kW)/N (Nm).",
              "Same power at higher speed means less torque - slim high-speed shafts, massive slow ones.",
              "Worked: 11.78 kNm at 200 rpm is 246.7 kW; 100 kW at 1440 rpm is 663 Nm.",
              "Torsion sizing: d^3 >= 16T/pi tau_allow; keyways knock effective strength down 15-25 percent.",
              "Design steps: torque -> allowable -> pure torsion size -> combined-bending correction -> twist check -> fatigue/concentration margins.",
              "Fatigue matters: shafts run millions of reversed cycles - endurance limit governs shoulders and keyways.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Shaft-design sequence",
              caption: "Six steps from nameplate power to a finished diameter.",
              stages: [
                { label: "Torque from duty", note: "T = 9550 P/N" },
                { label: "Allowable stress", note: "material + keyway derating" },
                { label: "Pure torsion size", note: "d^3 = 16T/pi tau" },
                { label: "Combined loading", note: "add bending from gears/pulleys" },
                { label: "Twist check", note: "theta = TL/GJ against limit" },
                { label: "Detailing", note: "fillets, keyways, fatigue margins" },
              ],
            },
            table: {
              caption: "Worked power-torque-speed conversions.",
              headers: ["Power", "Speed", "Torque", "Solid d at 60 MPa"],
              rows: [
                ["100 kW", "1440 rpm", "663 Nm", "about 41 mm"],
                ["246.7 kW", "200 rpm", "11.78 kNm", "100 mm"],
                ["10 kW", "60 rpm", "1.59 kNm", "about 64 mm"],
                ["5 kW", "2880 rpm", "16.6 Nm", "about 18 mm"],
              ],
            },
            callout: {
              type: "exam",
              title: "Keyways eat 20 percent",
              body: "Textbook pure-torsion sizes are optimistic: a standard keyway cuts shaft strength by roughly 20-25 percent (plus stress concentration), which is why commercial practice uses allowables of 40-55 MPa rather than the material's 100+. Mentioning the keyway derating in a design answer signals real shop awareness - a reliable bonus mark.",
            },
            keyTerms: [
              { term: "Power-torque relation", definition: "P = 2 pi N T/60 - the link between rotating power, speed and shaft torque." },
              { term: "Line shafting", definition: "Commercial shaft steel sized at 40-60 MPa allowable shear with keyway derating." },
              { term: "Keyway factor", definition: "The 0.75-0.85 strength reduction from keyseat stress concentration." },
              { term: "Critical speed", definition: "Shaft speed at whirling resonance - checked after stress sizing in long shafts." },
            ],
            examQuestions: [
              {
                q: "Derive P = 2 pi N T/60. A shaft transmits 100 kW at 1440 rpm with allowable shear 55 MPa - find the torque and the solid shaft diameter, then list the further design checks the design must include.",
                marks: 14,
                outline: [
                  "Work per revolution = T × 2 pi; per minute × N; per second /60 -> P = 2 pi NT/60",
                  "T = 9550 × 100/1440 = 663 Nm",
                  "d^3 = 16 × 663000/(pi × 55) = 61550 mm^3 -> d = 39.5 mm, choose 40-42 mm",
                  "Checks: keyway derating, bending from pulleys/gears",
                  "Twist check theta = TL/GJ",
                  "Fatigue at shoulders and keyways; bearing spans and critical speed",
                ],
              },
              {
                q: "Why does the same power require a larger shaft diameter at lower rotational speed?",
                marks: 7,
                outline: [
                  "T = 9550 P/N - torque rises inversely with speed",
                  "Shaft stress scales with T, hence with 1/N",
                  "Low-speed high-torque shafts (mill drives) need big diameters",
                  "High-speed spindles stay slim for the same power",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Combined bending and torsion: equivalent moments",
            body: [
              "Real shafts bend and twist at once - gear forces bend the shaft while torque transmits power. At the critical section, bending stress sigma = 32M/pi d^3 (flexure) coexists with shear tau = 16T/pi d^3 (torsion); principal stresses follow by Mohr's circle of Unit I, and failure theories (Unit IV) judge the combination. The classical shortcuts are the equivalent bending moment Me = (M + sqrt(M^2 + T^2))/2 (maximum principal stress theory) and the equivalent twisting moment Te = sqrt(M^2 + T^2) (maximum shear theory). Size the shaft with the larger of the two demands.",
              "Worked example: a shaft section carries M = 3 kNm and T = 4 kNm. Te = sqrt(9 + 16) = 5 kNm; Me = (3 + 5)/2 = 4 kNm. With allowable shear 55 MPa, the maximum-shear route sizes d^3 = 16 Te/(pi tau) = 16 × 5e6/(pi × 55) = 462,600 mm^3, d = 167 mm? - check: 167^3 = 4.66 × 10^6, too large; recompute: d^3 = 16 × 5e6/(pi × 55) = 8e7/172.8 = 462,963 mm^3, cube root 167.3 mm. Hmm - the numbers show why shafts under combined load grow quickly: compare pure torsion (T = 4 kNm alone would need d = 158 mm). The equivalent-moment route gives d^3 = 32 Me/(pi sigma_allow) with sigma_allow about 2 tau = 110 MPa: d^3 = 32 × 4e6/(pi × 110) = 370,000, d = 154 mm - the shear route governs here.",
              "Why two formulas: the maximum-shear (Tresca) and distortion-energy (von Mises) theories differ by about 15 percent for ductile steels; the equivalent-bending form embeds the principal-stress theory for brittle behaviour. Modern practice sizes with von Mises directly: sigma_vm = sqrt(sigma^2 + 3 tau^2), slightly more liberal than Tresca. For the exam, the safe pattern is: compute Te and Me, size with the governing one, and name the theory used - the theory name is itself a mark.",
              "Exam framing: the question is 'derive the equivalent twisting and bending moments and size a shaft under combined loading'. State the two stress formulas, write Te and Me with their theories, run the 3 kNm/4 kNm numerical, and state which theory governs.",
            ],
            bullets: [
              "Combined stresses: sigma = 32M/pi d^3 and tau = 16T/pi d^3 at the critical section.",
              "Equivalent twisting moment: Te = sqrt(M^2 + T^2) - maximum shear theory.",
              "Equivalent bending moment: Me = (M + sqrt(M^2 + T^2))/2 - principal stress theory.",
              "Worked: M = 3, T = 4 kNm gives Te = 5 kNm, Me = 4 kNm; shear route sizes about 167 mm.",
              "Von Mises alternative: sigma_vm = sqrt(sigma^2 + 3 tau^2) - about 15 percent more liberal than Tresca.",
              "Size with the governing formula and name the theory - both are marks.",
            ],
            diagram: {
              kind: "matrix",
              title: "Combined-loading theories at a glance",
              caption: "Two axes - which stress combination, which material behaviour - sort the sizing formulas.",
              axes: { x: "Shear-governed -> Principal-stress-governed", y: "Ductile steel -> Brittle material" },
              quadrants: [
                { label: "Tresca: Te = sqrt(M^2 + T^2)", note: "ductile steel, conservative - the default shaft route" },
                { label: "Rankine: Me = (M + sqrt(M^2 + T^2))/2", note: "brittle cast-iron shafts" },
                { label: "Von Mises: sigma_vm = sqrt(sigma^2 + 3 tau^2)", note: "ductile, about 15 percent more liberal - modern FEM standard" },
                { label: "Pure torsion check", note: "d^3 = 16T/pi tau - the baseline before bending is added" },
              ],
            },
            table: {
              caption: "Worked combined-loading numbers (M = 3 kNm, T = 4 kNm, tau_allow = 55 MPa).",
              headers: ["Route", "Governing value", "Required d^3", "Diameter"],
              rows: [
                ["Pure torsion (T alone)", "T = 4 kNm", "3.70 × 10^5 mm^3", "158 mm"],
                ["Max shear (Te)", "Te = 5 kNm", "4.63 × 10^5 mm^3", "167 mm - governs"],
                ["Principal stress (Me)", "Me = 4 kNm at sigma = 2 tau", "3.70 × 10^5 mm^3", "154 mm"],
              ],
            },
            callout: {
              type: "exam",
              title: "Name the theory behind the formula",
              body: "Te and Me are not interchangeable conventions - each embodies a failure theory. Writing 'Te from maximum shear stress theory (Tresca)' and 'Me from maximum principal stress theory (Rankine)' converts a formula recall into a theory application, which is exactly how the marking scheme words the marks.",
            },
            keyTerms: [
              { term: "Equivalent twisting moment (Te)", definition: "sqrt(M^2 + T^2) - the pure-torsion moment giving the same maximum shear." },
              { term: "Equivalent bending moment (Me)", definition: "(M + sqrt(M^2 + T^2))/2 - the pure-bending moment matching the maximum principal stress." },
              { term: "Von Mises stress", definition: "sqrt(sigma^2 + 3 tau^2) - distortion-energy measure for ductile sizing." },
              { term: "Critical section", definition: "The shaft station with the worst M-T combination - where combined sizing is done." },
            ],
            examQuestions: [
              {
                q: "Derive the expressions for equivalent twisting and bending moments, naming the failure theories they embody. A shaft section carries M = 3 kNm and T = 4 kNm with allowable shear 55 MPa - determine the required solid diameter by the maximum shear theory.",
                marks: 14,
                outline: [
                  "Combined stresses: sigma = 32M/pi d^3, tau = 16T/pi d^3",
                  "Max shear theory: tau_max = sqrt((sigma/2)^2 + tau^2) -> Te = sqrt(M^2 + T^2)",
                  "Principal stress theory -> Me = (M + sqrt(M^2 + T^2))/2",
                  "Te = sqrt(3^2 + 4^2) = 5 kNm",
                  "d^3 = 16 × 5e6/(pi × 55) = 4.63 × 10^5 mm^3",
                  "d = 167 mm - maximum shear theory governs",
                ],
              },
              {
                q: "Why do the Tresca and von Mises routes differ by about 15 percent, and which is preferred for ductile shaft steel?",
                marks: 7,
                outline: [
                  "Tresca uses the shear yield (sigma_y/2); von Mises uses distortion energy",
                  "For uniaxial loading von Mises predicts yield at sigma_y vs Tresca at sigma_y - difference appears in combined states",
                  "Von Mises is about 15 percent more liberal in pure shear",
                  "Ductile shaft steels: von Mises matches experiments better - modern preference",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Theories of Failure",
      summary:
        "Unit IV predicts collapse: why principal stresses alone cannot rank safety under combined loading, then the five classical theories - maximum principal stress, maximum shear, maximum principal strain, maximum total strain energy and maximum distortion energy - each with its derivation, its material domain, and a worked comparison on the same stress state.",
      chapter: {
        number: "04",
        title: "Predicting Failure",
        intro:
          "Unit IV covers the maximum normal-stress and maximum shear-stress theories, the maximum normal-strain and shear-strain-energy theories, the maximum distortion-energy theory, and the application of the theories to different materials and loading conditions.",
        inOneBreath:
          "Rankine compares the largest principal stress with the uniaxial limit - brittle materials; Tresca compares maximum shear with tau_y = sigma_y/2 - ductile and conservative; Saint-Venant compares principal strain; Haigh compares total strain energy; von Mises compares distortion energy - ductile and about 15 percent more liberal; one stress state, five verdicts, and the material decides which theory speaks.",
        sections: [
          {
            number: "4.1",
            title: "Why failure theories: from uniaxial data to combined states",
            body: [
              "Material tests are uniaxial: the tensile machine reports yield at sigma_y and fracture at sigma_u along one axis. Real components live in two and three dimensions - pressure vessels carry biaxial stress, shafts combine bending and torsion, rolled plate carries three principal stresses. A theory of failure is the bridge: a hypothesis about which scalar measure of the multiaxial stress state, compared against the uniaxial test value, predicts yielding or fracture. Five classical hypotheses cover the syllabus, each historically motivated and each with its own material domain.",
              "The framework: reduce the stress state to its principal stresses sigma_1 >= sigma_2 >= sigma_3, then compute the theory's governing quantity - a stress, a strain or an energy - and set it equal to the same quantity at uniaxial failure. The result is a boundary in principal-stress space (a yield surface): inside is safe, outside has failed. For the plane case the boundaries become simple curves: Rankine's square, Tresca's hexagon, von Mises's ellipse - the three figures worth sketching in any comparison answer.",
              "Why five theories survive: none is universally best. Brittle materials fail on tensile fracture - Rankine matches. Ductile metals yield by shear - Tresca (conservative) and von Mises (accurate) both serve, differing about 15 percent. Hydrostatic pressure does not cause yielding - a fact only the distortion-energy theory encodes correctly, and the reason von Mises is the modern standard. Choosing the theory is choosing a model of the material, and the exam asks for exactly that justification.",
              "Exam framing: the question is 'explain the need for theories of failure and list the five classical theories with their governing quantities'. Frame the uniaxial-to-multiaxial gap, tabulate the five theories with their measures and material domains, and preview the numerical comparison of the next sections.",
            ],
            bullets: [
              "Tests are uniaxial; service stress is multiaxial - theories bridge the gap.",
              "Reduce every state to principal stresses first; then apply the theory's measure.",
              "Five theories: max principal stress, max shear, max principal strain, max total strain energy, max distortion energy.",
              "Yield surfaces in principal space: Rankine square, Tresca hexagon, von Mises ellipse.",
              "Hydrostatic pressure never yields - only distortion-energy theory encodes this.",
              "Material decides the theory: brittle -> Rankine; ductile -> Tresca/von Mises.",
            ],
            diagram: {
              kind: "layers",
              title: "The five theories stacked by sophistication",
              caption: "Each layer adds physics the one below lacks.",
              layers: [
                { label: "Rankine - max principal stress", note: "simplest; brittle fracture; ignores other stresses" },
                { label: "Tresca - max shear stress", note: "yield by slip; conservative for ductile metals" },
                { label: "Saint-Venant - max principal strain", note: "adds Poisson coupling" },
                { label: "Haigh - total strain energy", note: "adds all strain energy - but hydrostatic pressure wrongly counts" },
                { label: "Von Mises - distortion energy", note: "isolates shape-change energy; modern ductile standard" },
              ],
            },
            table: {
              caption: "The five classical theories at a glance.",
              headers: ["Theory", "Governing quantity", "Limit (uniaxial test)", "Best domain"],
              rows: [
                ["Rankine (max principal stress)", "sigma_1", "sigma_u or sigma_y", "brittle materials"],
                ["Tresca (max shear)", "tau_max = (sigma_1 - sigma_3)/2", "sigma_y/2", "ductile, conservative"],
                ["Saint-Venant (max principal strain)", "epsilon_1 = (sigma_1 - nu(sigma_2 + sigma_3))/E", "sigma_y/E", "rarely used"],
                ["Haigh (total strain energy)", "sum of strain energy density", "sigma_y^2/2E", "superseded"],
                ["Von Mises (distortion energy)", "sqrt((sigma_1^2 + sigma_2^2 + sigma_3^2 - sigma_1 sigma_2 - sigma_2 sigma_3 - sigma_3 sigma_1)/2)", "sigma_y", "ductile, modern standard"],
              ],
            },
            callout: {
              type: "tip",
              title: "The hydrostatic test is the discriminator",
              body: "Squeeze a steel ball in a fluid at 1000 MPa - nothing yields, though every stress component is huge. Rankine and Tresca wrongly flag it; Haigh over-counts; only von Mises returns zero distortion energy and correctly predicts safety. Quote this thought experiment when asked why five theories exist - it is the examiner's favourite discriminator.",
            },
            keyTerms: [
              { term: "Theory of failure", definition: "Hypothesis linking multiaxial stress states to uniaxial test results." },
              { term: "Principal stresses", definition: "The extreme normal stresses on planes of zero shear - the theories' common input." },
              { term: "Yield surface", definition: "The boundary in principal-stress space separating safe from failed states." },
              { term: "Hydrostatic stress", definition: "Equal triaxial compression - changes volume, never causes yielding." },
            ],
            examQuestions: [
              {
                q: "Explain why theories of failure are needed, and list the five classical theories with the quantity each compares against the uniaxial test result and the material each suits.",
                marks: 14,
                outline: [
                  "Uniaxial tests must predict multiaxial service states",
                  "Reduce to principal stresses, then apply each theory's measure",
                  "Rankine: max principal stress vs sigma_u - brittle",
                  "Tresca: max shear vs sigma_y/2 - ductile, conservative",
                  "Saint-Venant: principal strain; Haigh: total strain energy",
                  "Von Mises: distortion energy vs sigma_y - ductile, modern standard",
                  "Hydrostatic non-yielding justifies von Mises",
                ],
              },
              {
                q: "Sketch the plane-stress yield loci of Rankine, Tresca and von Mises in the sigma_1-sigma_2 plane.",
                marks: 7,
                outline: [
                  "Rankine: square bounded by + - sigma_y on both axes",
                  "Tresca: hexagon inscribed in the square, flat sides at 45 degrees",
                  "Von Mises: ellipse through (sigma_y, 0) and (0, sigma_y), passing outside the hexagon",
                  "Ellipse circumscribes the hexagon - about 15 percent apart in pure shear",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Maximum principal stress theory (Rankine)",
            body: [
              "Rankine's theory holds that failure occurs when the largest principal stress reaches the uniaxial strength: safe while sigma_1 < sigma_u (fracture) or sigma_1 < sigma_y (yield), with signs handled by checking all three principal stresses against their limits in both senses. It is the oldest and simplest theory - one comparison, no coupling terms - and it matches the observed behaviour of brittle materials (grey cast iron, ceramics, hardened steels), which fail by tensile fracture perpendicular to the maximum principal tensile stress.",
              "Its weakness is what it ignores: intermediate stresses, Poisson coupling and the distinction between hydrostatic and distortional loading. Rankine predicts failure under pure hydrostatic tension (all three stresses equal) at the uniaxial limit - while in reality hydrostatic tension is even more dangerous than uniaxial, this edge case aside, the theory misjudges ductile metals badly: it under-predicts their strength in combined stress and cannot explain why a shaft under pure torsion yields at tau = sigma_y/2 rather than sigma_y.",
              "Worked example: a cast-iron bracket carries principal stresses sigma_1 = 80 MPa (tensile), sigma_2 = 30 MPa, sigma_3 = -20 MPa. Ultimate tensile strength 200 MPa, compressive 600 MPa. Rankine check: |sigma_1| = 80 < 200 (tension side) and |sigma_3| = 20 < 600 (compression side) - safe, with factor of safety 200/80 = 2.5 on the tensile criterion. The same state on mild steel (yield 250 MPa) by Rankine gives FOS 250/80 = 3.1 - but the correct ductile answer (Tresca: tau_max = (80 - (-20))/2 = 50 vs 125, FOS 2.5) is more conservative; Rankine flatters ductile states, and examiners expect that observation.",
              "Exam framing: the question is 'state the maximum principal stress theory, its expression and its material domain, and apply it numerically'. State the criterion, apply to the bracket numerical with both signs checked, and close with the cast-iron-vs-steel domain observation.",
            ],
            bullets: [
              "Rankine criterion: failure when the largest |principal stress| reaches the uniaxial limit.",
              "Check all three principal stresses against both tensile and compressive limits.",
              "Matches brittle fracture: cast iron, ceramics, glass, hardened steel.",
              "Ignores intermediate stresses and hydrostatic-distortional distinction.",
              "Worked: CI bracket 80/30/-20 MPa with sigma_u = 200 gives FOS 2.5 on the tensile side.",
              "Rankine overrates ductile safety - quote the Tresca contrast.",
            ],
            diagram: {
              kind: "compare",
              title: "Where Rankine speaks and where it lies",
              caption: "One theory, two material worlds.",
              left: {
                heading: "Rankine is right for",
                items: [
                  "Grey cast iron - tensile cleavage fracture",
                  "Ceramics and glass",
                  "Hardened, low-ductility steels",
                  "Failure face perpendicular to max tension",
                ],
              },
              right: {
                heading: "Rankine misleads for",
                items: [
                  "Ductile metals in combined stress - over-flatters safety",
                  "Pure torsion: predicts yield at sigma_y, real is sigma_y/2",
                  "Hydrostatic states - misclassifies",
                  "Anything governed by shear or distortion energy",
                ],
              },
            },
            table: {
              caption: "Worked Rankine check - cast-iron bracket (sigma_u,t = 200, sigma_u,c = 600 MPa).",
              headers: ["Principal stress", "Value", "Limit", "Margin"],
              rows: [
                ["sigma_1 (tension)", "80 MPa", "200 MPa", "FOS 2.5"],
                ["sigma_2", "30 MPa", "200 MPa", "FOS 6.7"],
                ["sigma_3 (compression)", "-20 MPa", "600 MPa", "FOS 30"],
                ["Verdict", "safe", "governing: tensile side", "FOS 2.5"],
              ],
            },
            callout: {
              type: "warning",
              title: "Check compression too",
              body: "The common slip is comparing only the largest tensile principal stress. Brittle materials are far weaker in tension than compression (cast iron 200 vs 600 MPa), so a compressive principal stress must be compared against the compressive limit with its own sign. Write both comparisons in every Rankine numerical - the compressive check is a named mark.",
            },
            keyTerms: [
              { term: "Rankine theory", definition: "Failure when the largest principal stress magnitude reaches the uniaxial strength." },
              { term: "Brittle fracture", definition: "Sudden separation with negligible plastic deformation - Rankine's home domain." },
              { term: "Cleavage", definition: "Tensile splitting along crystallographic planes - the fracture mechanism Rankine models." },
              { term: "Factor of safety (FOS)", definition: "Strength limit divided by the working value of the theory's governing quantity." },
            ],
            examQuestions: [
              {
                q: "State the maximum principal stress theory of failure. A cast-iron bracket carries principal stresses 80 MPa (tension), 30 MPa and -20 MPa; ultimate strengths are 200 MPa tensile and 600 MPa compressive. Find the factor of safety and comment on the theory's domain.",
                marks: 14,
                outline: [
                  "Criterion: max |sigma_i| = uniaxial strength causes failure",
                  "Tensile check: 80 vs 200 -> FOS 2.5",
                  "Compressive check: 20 vs 600 -> FOS 30",
                  "Governing FOS = 2.5 (tension governs brittle CI)",
                  "Domain: brittle materials - cast iron, ceramics",
                  "For ductile steel the same state needs Tresca/von Mises - Rankine flatters",
                ],
              },
              {
                q: "Why does the maximum principal stress theory predict wrong yield behaviour for a shaft in pure torsion?",
                marks: 7,
                outline: [
                  "Pure torsion gives principal stresses + tau and - tau",
                  "Rankine predicts yield when tau = sigma_y",
                  "Experiments show ductile yield at tau = sigma_y/2",
                  "Shear-governed theories (Tresca) capture this - Rankine overpredicts strength two-fold",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Maximum shear stress theory (Tresca, Guest)",
            body: [
              "Tresca's theory holds that yielding begins when the maximum shear stress reaches the value it has at uniaxial yield: tau_max = (sigma_1 - sigma_3)/2 = sigma_y/2. Its mechanism story is physical - ductile metals yield by slip along planes of maximum shear, visible as Lueders' bands at 45 degrees in tensile tests - and its arithmetic is simple: the difference of extreme principal stresses. In plane stress the check is (sigma_1 - sigma_2)/2 vs sigma_y/2, remembering to include zero as a principal value when both stresses are of one sign.",
              "The theory is the ductile designer's conservative friend: its hexagonal yield locus lies inside von Mises's ellipse by up to 15 percent, so a Tresca-safe design is automatically von-Mises-safe. It matches ductile yield experiments reasonably (better than Rankine, slightly worse than von Mises) and remains the code standard where conservatism is cheap. Worked example: the shaft section of Unit III with bending sigma = 100 MPa and torsion tau = 60 MPa at a point: principal stresses by Mohr - centre 50, radius sqrt(50^2 + 60^2) = 78.1, sigma_1 = 128.1, sigma_2 = -28.1 MPa. tau_max = 78.1 MPa; Tresca limit for steel (sigma_y = 300 MPa) is 150 MPa - FOS = 150/78.1 = 1.92. The equivalent-moment shortcut of Unit III reproduces the same sizing.",
              "Tresca's blind spots mirror Rankine's but softer: it counts hydrostatic pressure as harmless (correct - differences only) but under-predicts ductile strength slightly (conservative direction), and it says nothing about fracture of brittle materials, where shear is not the mechanism. Pair it with von Mises in comparison answers: same domain (ductile), different conservatism - and quote the 15 percent.",
              "Exam framing: the question is 'state the maximum shear stress theory and apply it to a combined-stress element'. Write the criterion, extract principal stresses (Mohr's circle of Unit I), compute tau_max, and give the factor of safety - then position Tresca against von Mises.",
            ],
            bullets: [
              "Tresca criterion: (sigma_1 - sigma_3)/2 = sigma_y/2 causes yielding.",
              "Mechanism: slip along maximum-shear planes - Lueders' bands at 45 degrees.",
              "In plane stress, include zero as a principal stress when both live stresses share a sign.",
              "Yield locus: hexagon inscribed in Rankine's square, inside von Mises's ellipse.",
              "Worked: sigma = 100, tau = 60 gives sigma_1 = 128.1, sigma_2 = -28.1; tau_max = 78.1; FOS 1.92 on sigma_y = 300.",
              "Conservative by up to 15 percent against von Mises - the standard pairing sentence.",
            ],
            diagram: {
              kind: "flow",
              title: "Applying Tresca in five moves",
              caption: "From a combined-stress element to a factor of safety.",
              steps: [
                { label: "Collect face stresses", note: "sigma_x, sigma_y, tau_xy at the critical point" },
                { label: "Find principal stresses", note: "Mohr's circle: sigma_1, sigma_2 (add 0 if needed)" },
                { label: "Compute tau_max", note: "(sigma_1 - sigma_3)/2 with sigma_3 = min" },
                { label: "Compare with sigma_y/2", note: "the uniaxial shear limit" },
                { label: "Report FOS", note: "and note the 15 percent conservatism vs von Mises" },
              ],
            },
            table: {
              caption: "Tresca numerical - sigma = 100, tau = 60 MPa element.",
              headers: ["Quantity", "Value", "Note"],
              rows: [
                ["Principal stresses", "128.1 / -28.1 MPa", "centre 50, radius 78.1 (Mohr)"],
                ["tau_max", "78.1 MPa", "(sigma_1 - sigma_3)/2"],
                ["Shear yield limit", "150 MPa", "sigma_y/2 with sigma_y = 300"],
                ["Factor of safety", "1.92", "150/78.1"],
                ["Von Mises comparison", "sigma_vm = sqrt(100^2 + 3 × 60^2) = 141.6 MPa", "FOS 2.12 - 10 percent more liberal"],
              ],
            },
            callout: {
              type: "exam",
              title: "The zero principal stress trap",
              body: "When both plane principal stresses are tensile - say 128.1 and 27.6 - the maximum shear uses (128.1 - 0)/2, not (128.1 - 27.6)/2, because the third principal stress is the zero through-thickness value. Examiners set exactly this state; writing 'sigma_3 = 0 governs' before computing tau_max is the marks-saving sentence.",
            },
            keyTerms: [
              { term: "Tresca theory", definition: "Yield when maximum shear stress reaches sigma_y/2 - the maximum-shear-stress criterion." },
              { term: "Lueders' bands", definition: "Yield slip bands at 45 degrees in tensile test specimens - Tresca's physical evidence." },
              { term: "Hexagon locus", definition: "Tresca's plane-stress yield surface - inside von Mises's ellipse." },
              { term: "Conservatism", definition: "Tresca's up-to-15-percent margin against von Mises - cheap insurance in codes." },
            ],
            examQuestions: [
              {
                q: "State the maximum shear stress theory. An element carries sigma = 100 MPa bending stress and 60 MPa torsional shear; material yield is 300 MPa. Find the principal stresses, the factor of safety by Tresca, and compare with von Mises.",
                marks: 14,
                outline: [
                  "Criterion: tau_max = (sigma_1 - sigma_3)/2 = sigma_y/2 at yield",
                  "Mohr: centre 50, radius sqrt(50^2 + 60^2) = 78.1",
                  "sigma_1 = 128.1 MPa, sigma_2 = -28.1 MPa",
                  "tau_max = 78.1 MPa; limit 150 MPa; FOS = 1.92",
                  "Von Mises: sigma_vm = sqrt(100^2 + 3 × 60^2) = 141.6 MPa; FOS 2.12",
                  "Tresca about 10 percent more conservative here - hexagon inside ellipse",
                ],
              },
              {
                q: "Why does the maximum shear stress theory correctly predict that a ductile shaft yields at tau = sigma_y/2 in pure torsion?",
                marks: 7,
                outline: [
                  "Pure torsion: principal stresses + tau and - tau",
                  "tau_max = (tau - (-tau))/2 = tau - the applied shear itself",
                  "Yield when tau = sigma_y/2 by the criterion",
                  "Matches the observed 45-degree slip bands - mechanism and arithmetic agree",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Maximum principal strain and maximum strain energy theories",
            body: [
              "Saint-Venant's maximum principal strain theory: yielding begins when the largest principal strain reaches its uniaxial yield value - epsilon_1 = (sigma_1 - nu(sigma_2 + sigma_3))/E compared with sigma_y/E. Poisson coupling is the theory's contribution: lateral stresses modify the axial strain, so a state with compressive lateral stresses delays yield (strain reduced), while tensile laterals hasten it. The theory sometimes agrees with experiments better than Tresca for ductile metals, but its inconsistency with the hydrostatic observation (large equal strains? - actually hydrostatic pressure gives small strain because all three terms couple) leaves it historically superseded; it survives in exams for its Poisson term.",
              "Haigh's maximum total strain energy theory: yielding when the total strain energy per unit volume reaches the uniaxial yield value sigma_y^2/2E. In principal stresses: U = [sigma_1^2 + sigma_2^2 + sigma_3^2 - 2 nu(sigma_1 sigma_2 + sigma_2 sigma_3 + sigma_3 sigma_1)]/(2E) = sigma_y^2/2E. The fatal flaw: hydrostatic compression at 1000 MPa stores enormous total strain energy - yet does not yield - because that energy is all volume change. The theory therefore wrongly forbids deep hydrostatic states, and its successor, the distortion-energy theory, was built precisely by subtracting the hydrostatic part.",
              "Worked example comparing the three energy/strain routes on the plane state sigma_1 = 120, sigma_2 = 60 MPa (nu = 0.3, sigma_y = 200 MPa, E = 200 GPa): Saint-Venant: epsilon_1 = (120 - 0.3 × 60)/200000 = 5.1 × 10^-4 vs yield strain 0.001 - FOS 1.96. Haigh: U = (120^2 + 60^2 - 2 × 0.3 × 7200)/(2 × 200000) = (18000 - 4320)/400000 = 0.0342 Nmm/mm^3 vs yield 0.1 - FOS 1.71. The comparisons show the theories clustering within about 15 percent - and why the exam asks for all of them on one state.",
              "Exam framing: the question is 'state the maximum principal strain and maximum strain energy theories with their expressions and limitations'. Give both formulas with the Poisson terms, apply both to the worked state, and close with the hydrostatic flaw that retired Haigh's theory.",
            ],
            bullets: [
              "Saint-Venant: yield when epsilon_1 = (sigma_1 - nu(sigma_2 + sigma_3))/E reaches sigma_y/E.",
              "Poisson coupling: compressive laterals delay yield, tensile laterals hasten it.",
              "Haigh: yield when total strain energy density reaches sigma_y^2/2E.",
              "Haigh expression: U = [sigma_i^2 sum - 2 nu(sigma_i sigma_j sum)]/(2E).",
              "Fatal flaw of Haigh: hydrostatic pressure stores energy but never yields - the theory over-forbids.",
              "Worked state 120/60 MPa: Saint-Venant FOS 1.96, Haigh FOS 1.71 - both within 15 percent of von Mises.",
            ],
            diagram: {
              kind: "fork",
              title: "How the energy theories split",
              caption: "Total energy counts everything; distortion energy keeps only what yields.",
              start: "What does the strain energy contain?",
              branches: [
                { label: "Volume-change (hydrostatic) part", outcome: "huge under pressure but harmless - Haigh wrongly counts it; von Mises discards it", good: false },
                { label: "Shape-change (distortion) part", outcome: "the part that drives slip and yielding - von Mises keeps exactly this", good: true },
                { label: "Haigh verdict", outcome: "over-conservative under hydrostatic states - historically superseded", good: false },
              ],
            },
            table: {
              caption: "Three routes on the same state (sigma_1 = 120, sigma_2 = 60 MPa; sigma_y = 200 MPa).",
              headers: ["Theory", "Governing value", "Limit", "FOS"],
              rows: [
                ["Saint-Venant (principal strain)", "epsilon_1 = 5.1 × 10^-4", "10 × 10^-4", "1.96"],
                ["Haigh (total energy)", "0.0342 Nmm/mm^3", "0.1 Nmm/mm^3", "1.71"],
                ["Von Mises (distortion energy)", "103.9 MPa", "200 MPa", "1.92"],
                ["Tresca (max shear)", "60 MPa", "100 MPa", "1.67"],
              ],
            },
            callout: {
              type: "exam",
              title: "Haigh's hydrostatic flaw is the exam pivot",
              body: "When asked to compare the strain energy theories, the mark-bearing sentence is: 'Haigh's theory counts hydrostatic strain energy, which does not cause yielding - hence it wrongly fails a body under high hydrostatic pressure; von Mises subtracts the hydrostatic part and survives.' One sentence carries the comparison question.",
            },
            keyTerms: [
              { term: "Saint-Venant theory", definition: "Yield when the maximum principal strain reaches the uniaxial yield strain." },
              { term: "Haigh theory", definition: "Yield when total strain energy density reaches sigma_y^2/2E." },
              { term: "Hydrostatic energy", definition: "The volume-change share of strain energy - harmless, and Haigh's fatal miscount." },
              { term: "Poisson coupling", definition: "Lateral stresses' contribution to axial strain in Saint-Venant's criterion." },
            ],
            examQuestions: [
              {
                q: "State the maximum principal strain and maximum total strain energy theories. For sigma_1 = 120 MPa, sigma_2 = 60 MPa (nu = 0.3, E = 200 GPa, sigma_y = 200 MPa), compute the factor of safety by both theories and by von Mises, and comment.",
                marks: 14,
                outline: [
                  "Saint-Venant: epsilon_1 = (120 - 0.3 × 60)/200000 = 5.1e-4",
                  "Yield strain = 200/200000 = 1e-3 -> FOS 1.96",
                  "Haigh: U = (120^2 + 60^2 - 2 × 0.3 × 7200)/(2 × 200000) = 0.0342 Nmm/mm^3",
                  "Yield energy = 200^2/(2 × 200000) = 0.1 -> FOS 1.71",
                  "Von Mises: sqrt(120^2 + 60^2 - 120 × 60) = 103.9 -> FOS 1.92",
                  "Comment: all within 15 percent; Haigh's hydrostatic flaw retires it",
                ],
              },
              {
                q: "Why does the maximum strain energy theory wrongly fail a steel ball under 1000 MPa hydrostatic pressure?",
                marks: 7,
                outline: [
                  "Hydrostatic compression stores large total strain energy (volume change)",
                  "But equal triaxial compression causes no slip - no yielding occurs",
                  "Haigh counts the harmless energy and predicts failure",
                  "Von Mises subtracts the hydrostatic part: distortion energy is zero - correctly safe",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Maximum distortion energy theory (von Mises)",
            body: [
              "Von Mises's theory: yielding begins when the distortional (shape-changing) strain energy per unit volume reaches its uniaxial yield value. Subtracting the hydrostatic part from the total energy and setting the remainder equal to sigma_y^2/2(1 + nu) leads to the workhorse criterion: sigma_vm = sqrt(sigma_1^2 + sigma_2^2 + sigma_3^2 - sigma_1 sigma_2 - sigma_2 sigma_3 - sigma_3 sigma_1) = sigma_y, or in plane stress sqrt(sigma_1^2 + sigma_2^2 - sigma_1 sigma_2) = sigma_y; with shear present, sqrt(sigma^2 + 3 tau^2). The ellipse through (sigma_y, 0) and (0, sigma_y) is the modern ductile-design boundary.",
              "The theory's credentials: it matches ductile yield experiments best of the five; it correctly predicts zero yielding under hydrostatic stress (distortion = 0); it predicts uniaxial-equivalent yield in pure torsion at tau = sigma_y/sqrt(3) = 0.577 sigma_y - the observed value; and finite-element codes report von Mises stress as their default safety quantity. It is about 15 percent more liberal than Tresca in pure shear - the known gap between hexagon and ellipse.",
              "Worked example: the same 120/60 MPa state: sigma_vm = sqrt(120^2 + 60^2 - 120 × 60) = sqrt(10800) = 103.9 MPa vs sigma_y = 200 - FOS 1.92, sitting between Haigh (1.71) and Saint-Venant (1.96). For the pure-shear element of section 4.3: sigma_vm = sqrt(100^2 + 3 × 60^2) = 141.6 MPa, FOS 2.12 - less conservative than Tresca's 1.92, which is why weight-critical aerospace sizing prefers von Mises and pressure-vessel codes sometimes keep Tresca margins.",
              "Exam framing: the question is 'state the distortion energy theory, derive or state its plane-stress form, and apply it numerically with comparison against Tresca'. Give the criterion, run both worked states, and close with the three credentials - hydrostatic correctness, torsion value 0.577 sigma_y, FEM default.",
            ],
            bullets: [
              "Von Mises criterion: sqrt(sigma_1^2 + sigma_2^2 + sigma_3^2 - sum sigma_i sigma_j) = sigma_y.",
              "Plane stress: sqrt(sigma_1^2 + sigma_2^2 - sigma_1 sigma_2) = sigma_y; with shear: sqrt(sigma^2 + 3 tau^2).",
              "Hydrostatic stress gives sigma_vm = 0 - correctly never yields.",
              "Pure torsion yield predicted at tau = 0.577 sigma_y - matches experiment.",
              "Worked: 120/60 MPa gives sigma_vm = 103.9, FOS 1.92; the 100/60 element gives 141.6, FOS 2.12.",
              "About 15 percent more liberal than Tresca - the ellipse outside the hexagon.",
            ],
            diagram: {
              kind: "compare",
              title: "Tresca versus von Mises",
              caption: "The two ductile theories, one conservative, one accurate.",
              left: {
                heading: "Tresca (max shear)",
                items: [
                  "Hexagon locus - inside the ellipse",
                  "Simple arithmetic on extreme stresses",
                  "Conservative by up to 15 percent",
                  "Code tradition: pressure vessels, cranes",
                ],
              },
              right: {
                heading: "Von Mises (distortion energy)",
                items: [
                  "Ellipse locus - circumscribes the hexagon",
                  "Matches ductile yield experiments best",
                  "Correct under hydrostatic load (sigma_vm = 0)",
                  "FEM default; aerospace and machine design",
                ],
              },
            },
            table: {
              caption: "All five theories on the state sigma_1 = 120, sigma_2 = 60 MPa (sigma_y = 200 MPa).",
              headers: ["Theory", "Governing value", "FOS"],
              rows: [
                ["Rankine (max principal stress)", "120 MPa", "1.67"],
                ["Tresca (max shear)", "60 MPa vs 100", "1.67"],
                ["Saint-Venant (principal strain)", "5.1e-4 vs 1e-3", "1.96"],
                ["Haigh (total energy)", "0.0342 vs 0.1", "1.71"],
                ["Von Mises (distortion energy)", "103.9 MPa", "1.92"],
              ],
            },
            callout: {
              type: "tip",
              title: "One state, five verdicts - the comparison table is the answer",
              body: "Examiners reward the table: run all five theories on the same principal-stress state and rank the factors of safety. The spread (1.67 to 1.96 here) is itself the lesson - theory choice moves the safety margin, and the material's character picks the theory. Build the table once and reuse it in every comparison question.",
            },
            keyTerms: [
              { term: "Von Mises stress", definition: "The equivalent uniaxial stress from distortion energy - sqrt of the reduced quadratic form." },
              { term: "Distortion energy", definition: "The shape-change share of strain energy - the only part that drives ductile yielding." },
              { term: "Ellipse locus", definition: "Von Mises's plane-stress yield boundary through (sigma_y, 0) and (0, sigma_y)." },
              { term: "0.577 sigma_y", definition: "Von Mises's predicted torsional yield - tau_y/sqrt(3), matching experiment." },
            ],
            examQuestions: [
              {
                q: "State the maximum distortion energy theory and give its plane-stress form. Evaluate all five classical theories for sigma_1 = 120 MPa, sigma_2 = 60 MPa (sigma_y = 200 MPa, nu = 0.3) and tabulate the factors of safety.",
                marks: 14,
                outline: [
                  "Criterion: distortion energy at yield equals uniaxial value",
                  "Plane form: sigma_vm = sqrt(sigma_1^2 + sigma_2^2 - sigma_1 sigma_2)",
                  "Von Mises: sqrt(120^2 + 60^2 - 7200) = 103.9 MPa -> FOS 1.92",
                  "Rankine 120 -> 1.67; Tresca 60 vs 100 -> 1.67",
                  "Saint-Venant 5.1e-4 vs 1e-3 -> 1.96; Haigh 0.0342 vs 0.1 -> 1.71",
                  "Table ranks: von Mises and Saint-Venant liberal, Rankine/Tresca conservative",
                ],
              },
              {
                q: "Show that the distortion energy of a hydrostatically stressed element is zero, and explain the consequence for the theory.",
                marks: 7,
                outline: [
                  "Hydrostatic: sigma_1 = sigma_2 = sigma_3 = p",
                  "sigma_vm = sqrt(3p^2 - 3p^2) = 0",
                  "All strain energy is volume change - none is distortion",
                  "Hence von Mises correctly predicts no yielding under hydrostatic load",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Applying the theories: materials and loading conditions",
            body: [
              "The theories divide by material character. Brittle materials (grey cast iron, ceramics, glass, fully hardened steel): failure is tensile fracture - Rankine applies, checked against both tensile and compressive limits. Ductile metals (mild steel, aluminium, copper): failure is yielding by slip - Tresca for conservative codes, von Mises for accuracy and weight. The loading condition modifies the choice: static combined stress uses the full criteria; fatigue adds mean-stress corrections (Goodman) on top; impact returns to strain-energy thinking; and pressure-vessel shells live in the biaxial band where the theories spread widest.",
              "The standard application matrix: thin cylindrical shell (hoop 2x axial stress) - von Mises gives sigma_vm = sqrt(4 + 1 - 2) sigma_h = sqrt(3) sigma_h, so yield at hoop = sigma_y/sqrt(3) - a 15 percent strength gain over the naive hoop-only check; pure torsion - Tresca tau_y = 0.5 sigma_y, von Mises 0.577 sigma_y; equal biaxial tension - all theories agree at sigma_y; equal biaxial compression - only the energy theories stay safe and only von Mises stays exactly right. Each row of this matrix is a classic exam question, and the vessel row is the most repeated.",
              "Worked example: a thin pressure vessel of 1.5 m diameter, 10 mm wall, carrying 1.2 MPa internal pressure: hoop stress sigma_h = pD/2t = 1.2 × 1500/(2 × 10) = 90 MPa; axial = 45 MPa. Von Mises: sqrt(90^2 + 45^2 - 90 × 45) = sqrt(6075) = 77.9 MPa; on steel with sigma_y = 250 MPa, FOS = 3.21. Rankine (hoop only) would report FOS 2.78 - von Mises correctly credits the favourable biaxial ratio, and the vessel wall can be optimized down until the FOS target is met. That optimization loop is exactly how vessel codes set thickness.",
              "Exam framing: the question is 'discuss the application of failure theories to different materials and loading conditions with a numerical'. Build the application matrix, run the pressure-vessel numerical with the von Mises-Rankine contrast, and state the material-based selection rule.",
            ],
            bullets: [
              "Brittle materials: Rankine with both tensile and compressive limits.",
              "Ductile materials: Tresca (conservative codes) or von Mises (accuracy, weight).",
              "Thin vessel biaxial state: sigma_vm = sqrt(3) sigma_h - yield at hoop = sigma_y/sqrt(3).",
              "Pure torsion: Tresca tau_y = 0.5 sigma_y; von Mises 0.577 sigma_y.",
              "Worked vessel: hoop 90, axial 45 MPa gives sigma_vm = 77.9 MPa, FOS 3.21 on 250 MPa steel.",
              "Theory choice changes FOS by 15 percent - the designer's model of the material.",
            ],
            diagram: {
              kind: "matrix",
              title: "Choosing a failure theory",
              caption: "Material character on one axis, loading character on the other.",
              axes: { x: "Static combined stress -> Fatigue / impact", y: "Brittle material -> Ductile material" },
              quadrants: [
                { label: "Rankine", note: "brittle + static: cast iron brackets, ceramic parts" },
                { label: "Tresca / von Mises", note: "ductile + static: shafts, vessels; Mises for weight" },
                { label: "Goodman + endurance", note: "ductile + fatigue: mean-stress corrected S-N design" },
                { label: "Strain energy / resilience", note: "impact-limited: energy absorption sizing" },
              ],
            },
            table: {
              caption: "The application matrix - yield limits predicted by each theory.",
              headers: ["Loading case", "Rankine", "Tresca", "Von Mises"],
              rows: [
                ["Uniaxial tension", "sigma_y", "sigma_y", "sigma_y"],
                ["Pure torsion", "sigma_y (wrong)", "0.5 sigma_y", "0.577 sigma_y"],
                ["Thin vessel (2:1 biaxial)", "sigma_y", "0.5 sigma_y", "0.577 sigma_y (hoop basis)"],
                ["Equal biaxial tension", "sigma_y", "0.5 sigma_y", "sigma_y"],
                ["Hydrostatic compression", "sigma_y (wrong)", "infinite (safe)", "infinite (safe)"],
              ],
            },
            callout: {
              type: "exam",
              title: "The vessel row is the repeat question",
              body: "'Show that the von Mises theory allows 15 percent more pressure than the maximum principal stress theory for a thin cylindrical shell' appears in some form nearly every year. The two-line proof: sigma_vm = sqrt(3) sigma_h vs Rankine's sigma_h; set both to sigma_y and compare the allowed hoop stress - sigma_y/sqrt(3) versus sigma_y. Memorize this row.",
            },
            keyTerms: [
              { term: "Application matrix", definition: "The loading-case-by-theory table of predicted yield limits." },
              { term: "Biaxial vessel state", definition: "Hoop stress twice the axial stress in a thin cylindrical shell." },
              { term: "Goodman correction", definition: "Mean-stress reduction of allowable amplitude in fatigue design." },
              { term: "Hoop stress", definition: "Circumferential stress sigma_h = pD/2t in a thin shell." },
            ],
            examQuestions: [
              {
                q: "Discuss the selection of failure theories for brittle and ductile materials under different loading conditions. For a thin cylindrical shell (D = 1.5 m, t = 10 mm, p = 1.2 MPa, sigma_y = 250 MPa), compute the factor of safety by the maximum principal stress and distortion energy theories.",
                marks: 14,
                outline: [
                  "Brittle -> Rankine; ductile -> Tresca/von Mises; fatigue -> Goodman on endurance",
                  "Hoop stress = pD/2t = 1.2 × 1500/20 = 90 MPa",
                  "Axial stress = 45 MPa",
                  "Rankine: FOS = 250/90 = 2.78 (hoop governs)",
                  "Von Mises: sqrt(90^2 + 45^2 - 4050) = 77.9 MPa -> FOS 3.21",
                  "Von Mises credits the favourable 2:1 biaxial ratio - 15 percent more capacity",
                ],
              },
              {
                q: "Rank the five theories by conservatism for a ductile metal in pure shear, with reasons.",
                marks: 7,
                outline: [
                  "Rankine: yields at tau = sigma_y - least conservative (wrong for ductile)",
                  "Haigh and Saint-Venant: intermediate positions",
                  "Tresca: tau_y = 0.5 sigma_y - conservative",
                  "Von Mises: tau_y = 0.577 sigma_y - accurate for ductile metals",
                  "Order: Rankine < Saint-Venant < Haigh < von Mises < Tresca (most conservative)",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Columns and Struts",
      summary:
        "Unit V closes the subject with stability: why slender members fail by buckling long before crushing, Euler's formula with its four end conditions, the slenderness ratio and the limits of Euler's validity, Rankine's empirical formula bridging short and long columns, and the practical selection between the two theories.",
      chapter: {
        number: "05",
        title: "Columns and Struts",
        intro:
          "Unit V covers the stability of structures, Euler's formula for columns with different end conditions, its limitations and the slenderness ratio, and Rankine's formula for practical columns.",
        inOneBreath:
          "Short columns crush at sigma_c A; slender ones buckle at Euler's pi-squared-E-I over effective length squared, with effective length set by end conditions (L, 0.7L, 0.5L, 2L); Euler over-predicts for short columns, so Rankine's 1/Pr = 1/Pc + 1/Pe bridges the whole slenderness range with one empirical constant.",
        sections: [
          {
            number: "5.1",
            title: "Stability of structures and the buckling phenomenon",
            body: [
              "A column loaded in compression has two failure routes: crushing - material yield at sigma_c A, the short-column fate - and buckling, a sudden lateral bowing of the member at a critical load far below crushing strength when the member is slender. Buckling is a stability failure, not a strength failure: the straight shape becomes unstable, any infinitesimal lateral disturbance grows, and the column jumps to a bent equilibrium. The transition is abrupt and catastrophic - which is why stability, not stress, governs slender design.",
              "The controlling geometry is the slenderness ratio lambda = L_eff/k, where k = sqrt(I/A) is the radius of gyration - a pure section property (d/4 for a solid circle). Short columns (lambda under about 30-40 for steel) crush; medium columns (40-120) fail in the inelastic transition zone where neither pure formula holds; long columns (above about 120) follow Euler exactly. The failure-load curve against slenderness falls steeply from the crushing plateau to Euler's hyperbola - the graph every column answer should sketch.",
              "Worked example: two steel struts of the same 50 mm solid section (A = 1963 mm^2, I = 3.07 × 10^5 mm^4, k = 12.5 mm, sigma_c = 250 MPa): a 0.5 m long one crushes at 250 × 1963 = 490 kN (lambda = 40 - transitional); a 2 m pinned-ended one buckles at Euler's 151 kN (lambda = 160 - long). Same material, same section, four times the load difference - the reason length, not strength, is the designer's lever on slender columns.",
              "Exam framing: the question is 'explain buckling as a stability failure and define slenderness ratio'. Contrast crushing and buckling with the worked two-strut numbers, define lambda and k, and sketch the failure-load versus-slenderness curve with its three regimes.",
            ],
            bullets: [
              "Two failure routes: crushing (short) and buckling (slender) - stability vs strength.",
              "Buckling is sudden: the straight equilibrium loses stability at the critical load.",
              "Slenderness ratio lambda = L_eff/k with k = sqrt(I/A).",
              "Regimes: lambda under 30-40 crushes; 40-120 transitional; above 120 Euler governs (steel).",
              "Worked: same 50 mm section - 0.5 m strut crushes at 490 kN; 2 m strut buckles at 151 kN.",
              "Sketch the failure curve: plateau to hyperbola as lambda grows.",
            ],
            diagram: {
              kind: "flow",
              title: "Which failure awaits this column?",
              caption: "Slenderness decides the route before any formula is chosen.",
              steps: [
                { label: "Compute k and lambda", note: "k = sqrt(I/A); lambda = L_eff/k" },
                { label: "lambda < 30-40", note: "crushing - sigma_c × A governs" },
                { label: "lambda 40-120", note: "transitional - Rankine's territory" },
                { label: "lambda > 120", note: "Euler buckling governs" },
              ],
            },
            table: {
              caption: "Radius of gyration of standard sections.",
              headers: ["Section", "k (about centroid)", "Note"],
              rows: [
                ["Solid circle d", "d/4", "0.25d - the benchmark"],
                ["Square b", "b/sqrt(12) = 0.289b", "slightly better than circle per area"],
                ["Hollow circle D, d", "sqrt(D^2 + d^2)/4", "much better - tube columns"],
                ["Rectangle b x h", "h/sqrt(12) about the b-axis", "strong and weak axes differ"],
              ],
            },
            callout: {
              type: "tip",
              title: "Weak-axis thinking",
              body: "Buckling chooses the weakest axis: I in Euler's formula is the lesser of I_xx and I_yy. A rectangle buckles about its narrow axis; an equal-angle section has no strong axis at all. Always compute k about both axes and use the smaller - stating 'the weak axis governs' is a standard mark in column numericals.",
            },
            keyTerms: [
              { term: "Buckling", definition: "Sudden lateral instability of a compression member at the critical load." },
              { term: "Slenderness ratio (lambda)", definition: "Effective length over radius of gyration - the column's stability index." },
              { term: "Radius of gyration (k)", definition: "k = sqrt(I/A) - the section property behind lambda." },
              { term: "Critical load (P_cr)", definition: "The load at which straight equilibrium becomes unstable." },
            ],
            examQuestions: [
              {
                q: "Explain buckling as a stability failure and distinguish it from crushing. Define slenderness ratio and radius of gyration, and describe the three slenderness regimes of steel columns.",
                marks: 14,
                outline: [
                  "Crushing: material yield at sigma_c A - strength failure",
                  "Buckling: straight shape unstable - stability failure, sudden",
                  "k = sqrt(I/A); lambda = L_eff/k",
                  "lambda under 30-40: crushing; 40-120: transitional; above 120: Euler",
                  "Failure-load curve: plateau falling to Euler hyperbola",
                  "Worked contrast: 0.5 m strut 490 kN vs 2 m strut 151 kN on the same section",
                ],
              },
              {
                q: "Why does a hollow circular section make a better column than a solid one of the same area?",
                marks: 7,
                outline: [
                  "Buckling load scales with I, not A",
                  "Hollow section places material farther from the axis - larger I and k",
                  "Larger k lowers the slenderness ratio for the same length",
                  "Hence higher Euler load and better stability per kilogram",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Euler's formula and end conditions",
            body: [
              "Euler analysed the pinned-ended strut by moment equilibrium in its slightly bent shape (M = -P y) and found that a non-trivial bent equilibrium exists only at discrete loads - the first of which is the critical load P_cr = pi^2 E I/L^2. For other end restraints the effective length Le replaces L: both ends pinned Le = L; both fixed Le = 0.5L; one fixed one free (cantilever column) Le = 2L; one fixed one pinned Le = 0.7L. The general form: P_cr = pi^2 E I/Le^2, with I the lesser principal second moment of area.",
              "The end-condition multipliers are the exam's arithmetic core: fixing an end multiplies capacity by (L/Le)^2 - both-fixed gives 4 times the pinned capacity, fixed-free a quarter of it. Worked example: the 50 mm solid steel strut, L = 2 m, I = 3.07 × 10^5 mm^4, E = 200 GPa: pinned-pinned P_cr = pi^2 × 200000 × 3.07e5/2000^2 = 151.5 kN; both-fixed raises it to 606 kN; fixed-free drops it to 37.9 kN - four numbers from one formula and a table of effective lengths.",
              "Euler's load is independent of material strength - only E and geometry enter - which is why high-strength steel buys nothing in slender columns and why aluminium structures use the same formula with lower E. The formula also assumes perfectly straight, centrally loaded, homogeneous columns with no imperfections; real columns buckle somewhat earlier (Perry-Robertson and code curves account for imperfections - beyond this syllabus but worth one sentence).",
              "Exam framing: the question is 'derive Euler's formula for a pinned-ended column and state the effective lengths for all four end conditions'. Sketch the four end conditions with their Le values, run the four-capacity numerical, and note the strength-independence observation.",
            ],
            bullets: [
              "Euler: P_cr = pi^2 E I/Le^2 - stability load, independent of material strength.",
              "Effective lengths: pinned-pinned L; fixed-fixed 0.5L; fixed-free 2L; fixed-pinned 0.7L.",
              "Both-fixed capacity is 4 times pinned-pinned; fixed-free is a quarter.",
              "Worked 2 m strut: 151.5 kN pinned, 606 kN fixed-fixed, 37.9 kN fixed-free.",
              "Use the lesser I - buckling picks the weak axis.",
              "Assumptions: perfectly straight, central load, homogeneous, elastic, no imperfections.",
            ],
            diagram: {
              kind: "matrix",
              title: "The four end conditions and their multipliers",
              caption: "Restraint at the ends is worth up to a factor of 16 between extremes.",
              axes: { x: "Top end: free -> pinned -> fixed", y: "Bottom end: pinned -> fixed" },
              quadrants: [
                { label: "Fixed-fixed: Le = 0.5L", note: "multiplier 4 - the stiffest practical case" },
                { label: "Fixed-free: Le = 2L", note: "multiplier 0.25 - the flagpole" },
                { label: "Pinned-pinned: Le = L", note: "the reference case, multiplier 1" },
                { label: "Fixed-pinned: Le = 0.7L", note: "multiplier about 2.04" },
              ],
            },
            table: {
              caption: "Euler capacities of the worked strut (50 mm solid, L = 2 m, E = 200 GPa).",
              headers: ["End condition", "Le", "P_cr"],
              rows: [
                ["Both pinned", "2 m", "151.5 kN"],
                ["Fixed-pinned", "1.4 m", "309 kN"],
                ["Both fixed", "1 m", "606 kN"],
                ["Fixed-free", "4 m", "37.9 kN"],
              ],
            },
            callout: {
              type: "exam",
              title: "Euler ignores strength - and that is testable",
              body: "The observation examiners probe: Euler's critical load contains E and I but no sigma_y - a stronger steel does not raise the buckling load of a slender column. Answer with the formula pointed at: 'P_cr depends only on stiffness and geometry; strength enters only through the crushing limit of short columns.' It reverses intuition and earns marks.",
            },
            keyTerms: [
              { term: "Euler's formula", definition: "P_cr = pi^2 E I/Le^2 - the elastic buckling load of an ideal column." },
              { term: "Effective length (Le)", definition: "The pinned-ended length with the same buckling load - set by end restraints." },
              { term: "End condition multiplier", definition: "(L/Le)^2 - the capacity ratio against the pinned-pinned case." },
              { term: "Weak axis", definition: "The principal axis with the lesser I - the one buckling chooses." },
            ],
            examQuestions: [
              {
                q: "Derive Euler's buckling load for a pinned-ended column and give the effective lengths for the four standard end conditions. Compute the buckling loads of a 50 mm diameter, 2 m steel strut (E = 200 GPa) for all four conditions.",
                marks: 14,
                outline: [
                  "Bent-shape equilibrium M = -P y with sinusoidal mode -> P_cr = pi^2 EI/L^2",
                  "Effective lengths: L, 0.7L, 0.5L, 2L for pinned, fixed-pinned, fixed-fixed, fixed-free",
                  "I = pi × 50^4/64 = 3.07 × 10^5 mm^4",
                  "Pinned: pi^2 × 200000 × 3.07e5/4e6 = 151.5 kN",
                  "Fixed-fixed: × 4 = 606 kN; fixed-pinned: × 2.04 = 309 kN",
                  "Fixed-free: ÷ 4 = 37.9 kN",
                ],
              },
              {
                q: "Why does using a higher-strength steel not increase the buckling load of a slender column?",
                marks: 7,
                outline: [
                  "Euler's load depends on E, I and Le only",
                  "Higher sigma_y raises the crushing limit, not the stability load",
                  "All structural steels share nearly the same E (about 200 GPa)",
                  "Slender-column capacity is bought with geometry (I, Le), not alloy content",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Limitations of Euler's formula and the slenderness boundary",
            body: [
              "Euler's formula is exact for ideal long columns and nonsense for short ones: at zero slenderness it predicts infinite load, while the column actually crushes at sigma_c A. Plotting Euler load against slenderness shows a hyperbola that must be truncated where it crosses the crushing line sigma_c A - the slenderness boundary lambda_e = pi sqrt(E/sigma_c). For structural steel (E = 200 GPa, sigma_c = 250 MPa): lambda_e = pi sqrt(800) = 88.9 - Euler is valid only above this ratio; below it, real columns fail in the inelastic transition where residual stress and yielding interact.",
              "The transitional zone (lambda about 40-120 for steel) is where real columns actually live - building columns, machine struts - and neither pure formula applies: Euler over-predicts (imperfections, residual stresses, early yielding), crushing under-predicts (the column is far from squat). Empirical and semi-empirical formulas fill the gap: Rankine's blend (next section), the Perry-Robertson imperfection curve, and the multiple code curves of modern steel design - each trading a little theory for a lot of reality.",
              "Worked example: the 50 mm strut at lambda = 88.9 boundary: Euler gives exactly the crushing load 490 kN at this slenderness; below it (shorter struts) Euler would predict more than the material can carry - at lambda = 40, Euler says 1843 kN against a crushing 490 kN, an absurd 3.8 times overstated. The chart of 'Euler hyperbola truncated at crushing' is the visual answer examiners expect alongside the boundary computation.",
              "Exam framing: the question is 'discuss the limitations of Euler's formula and compute the limiting slenderness ratio'. List the idealizations violated, derive lambda_e = pi sqrt(E/sigma_c), compute the steel boundary at about 89, and sketch the truncated hyperbola with the three regimes marked.",
            ],
            bullets: [
              "Euler predicts infinite load at zero slenderness - crushing caps it at sigma_c A.",
              "Boundary slenderness: lambda_e = pi sqrt(E/sigma_c); steel gives about 89.",
              "Below lambda_e Euler over-predicts badly (3.8 times at lambda = 40).",
              "Real columns live in the transitional lambda 40-120 - imperfections and residual stress matter.",
              "Empirical bridges: Rankine blend, Perry-Robertson, code curves.",
              "Sketch: Euler hyperbola truncated where it meets the crushing plateau.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Validity zones of the column formulas",
              caption: "From squat to slender, each zone has its own governing relation.",
              tiers: [
                { label: "lambda > 120: Euler exact", note: "pure elastic buckling - hyperbola region" },
                { label: "lambda 40-120: transitional", note: "Rankine / code curves - inelastic buckling" },
                { label: "lambda < 40: crushing", note: "sigma_c A governs - Euler irrelevant" },
              ],
            },
            table: {
              caption: "Limiting slenderness ratios by material.",
              headers: ["Material", "E (GPa)", "sigma_c (MPa)", "lambda_e = pi sqrt(E/sigma_c)"],
              rows: [
                ["Mild steel", "200", "250", "about 89"],
                ["Cast iron", "100", "550 (comp)", "about 42"],
                ["Aluminium alloy", "70", "250", "about 53"],
                ["Timber", "10", "50", "about 44"],
              ],
            },
            callout: {
              type: "warning",
              title: "Euler at low slenderness over-predicts",
              body: "The classic exam trap: applying Euler to a lambda = 40 column and reporting 1843 kN when the material crushes at 490 kN. Always compute lambda first and check it against lambda_e = pi sqrt(E/sigma_c) before trusting Euler. Writing that check in the answer is itself the mark the examiner seeks.",
            },
            keyTerms: [
              { term: "Limiting slenderness (lambda_e)", definition: "pi sqrt(E/sigma_c) - above it Euler is valid, below it crushing/transition governs." },
              { term: "Transitional zone", definition: "Slenderness band where neither pure formula applies - empirical formulas' territory." },
              { term: "Perry-Robertson", definition: "Imperfection-based column curve used in steel codes." },
              { term: "Residual stress", definition: "Rolling/welding stresses that trigger early yielding in intermediate columns." },
            ],
            examQuestions: [
              {
                q: "Discuss the limitations of Euler's formula and derive the limiting slenderness ratio. Compute it for mild steel (E = 200 GPa, sigma_c = 250 MPa) and sketch the failure-load curve against slenderness with the regimes marked.",
                marks: 14,
                outline: [
                  "Idealizations: straight, central, elastic, no imperfections - violated in real columns",
                  "At lambda -> 0 Euler predicts infinite load vs crushing sigma_c A",
                  "Boundary: pi^2 E I/Le^2 = sigma_c A with I = A k^2 -> lambda_e = pi sqrt(E/sigma_c)",
                  "Steel: pi sqrt(200000/250) = 88.9",
                  "Below it Euler over-predicts (3.8 times at lambda = 40)",
                  "Sketch: hyperbola truncated at the crushing plateau; transitional band between",
                ],
              },
              {
                q: "Why do real steel columns buckle below the Euler load?",
                marks: 7,
                outline: [
                  "Initial crookedness and load eccentricity add bending from the start",
                  "Residual stresses from rolling yield parts of the section early",
                  "End restraints are imperfect - effective lengths exceed the ideal",
                  "Codes correct with imperfection-based curves (Perry-Robertson)",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Rankine's formula (Gordon-Rankine)",
            body: [
              "Rankine's formula bridges crushing and buckling with one empirical reciprocal sum: 1/P_R = 1/P_c + 1/P_e, that is P_R = sigma_c A/(1 + a (Le/k)^2), where sigma_c is the crushing stress, A the area, and a the Rankine constant (about 1/7500 for mild steel, 1/1600 for cast iron, 1/750 for timber - dimensionless, calibrated by experiment). At zero slenderness P_R reduces to the crushing load; at high slenderness it approaches Euler - the two extremes joined smoothly, and the middle fitted by the constant.",
              "The formula's charm is its uniformity: one expression covers every slenderness, which is why it survives in syllabi and in quick design checks. Worked example: the 50 mm steel strut at L = 2 m pinned (lambda = 160, sigma_c = 250 MPa, a = 1/7500): P_R = 250 × 1963/(1 + 160^2/7500) = 490750/(1 + 3.413) = 111.3 kN - deliberately below Euler's 151.5 kN because the constant embeds imperfections. At lambda = 40 (L = 0.5 m): P_R = 490750/(1 + 0.213) = 404 kN - sensibly below the 490 kN crushing value, unlike Euler's absurd 1843 kN.",
              "The constant's meaning: a(Le/k)^2 is the imperfection-and-transition penalty; calibrating a against column tests bakes real-world crookedness into the arithmetic. Rankine values sit below Euler wherever Euler is valid (safe side) and below crushing wherever crushing governs (also safe side) - the formula is conservative everywhere, which is its design virtue and its scientific limitation (it explains nothing; it interpolates everything).",
              "Exam framing: the question is 'state Rankine's formula with its constant and apply it to a column, comparing with Euler and crushing'. Give the reciprocal-sum form, the constants by material, run both worked cases, and comment on the safety positioning.",
            ],
            bullets: [
              "Rankine: P_R = sigma_c A/(1 + a lambda^2); equivalently 1/P_R = 1/P_c + 1/P_e.",
              "Constants: mild steel 1/7500, wrought iron 1/9000, cast iron 1/1600, timber 1/750.",
              "Reduces to crushing load at lambda = 0 and toward Euler at large lambda.",
              "Worked: lambda = 160 gives 111.3 kN (below Euler's 151.5 - imperfections embedded).",
              "Worked: lambda = 40 gives 404 kN (sensible below crushing 490, unlike Euler's 1843).",
              "Conservative everywhere - the design virtue; empirical, not explanatory - the limitation.",
            ],
            diagram: {
              kind: "flow",
              title: "Rankine as the blend of two limits",
              caption: "One formula, two asymptotes - how the reciprocal sum works.",
              steps: [
                { label: "Crushing term", note: "P_c = sigma_c A - the lambda = 0 anchor" },
                { label: "Euler term", note: "P_e = pi^2 E I/Le^2 - the long-column asymptote" },
                { label: "Reciprocal sum", note: "1/P_R = 1/P_c + 1/P_e" },
                { label: "Closed form", note: "P_R = sigma_c A/(1 + a lambda^2) with a calibrated by tests" },
              ],
            },
            table: {
              caption: "Rankine constants and worked strut values (50 mm steel strut, sigma_c = 250 MPa).",
              headers: ["Slenderness lambda", "Euler load", "Crushing load", "Rankine load"],
              rows: [
                ["40 (L = 0.5 m)", "1843 kN (invalid)", "490 kN", "404 kN"],
                ["89 (boundary)", "490 kN", "490 kN", "341 kN"],
                ["120", "264 kN", "490 kN", "197 kN"],
                ["160 (L = 2 m)", "151.5 kN", "490 kN", "111.3 kN"],
              ],
            },
            callout: {
              type: "tip",
              title: "The reciprocal-sum form explains the blend",
              body: "Students memorize 1 + a lambda^2 without seeing why. Show the identity: 1/P_R = 1/P_c + 1/P_e, with P_e = pi^2 E A/(a-independent form) rearranged so that a = sigma_c/pi^2 E - quoting this derivation converts the empirical constant into the ratio of crushing stress to Euler stiffness, and the formula stops being magic.",
            },
            keyTerms: [
              { term: "Rankine formula", definition: "P_R = sigma_c A/(1 + a lambda^2) - empirical blend of crushing and Euler buckling." },
              { term: "Rankine constant (a)", definition: "Empirical penalty coefficient - 1/7500 for mild steel, 1/1600 for cast iron." },
              { term: "Reciprocal sum", definition: "1/P_R = 1/P_c + 1/P_e - the blend rule behind the closed form." },
              { term: "Empirical formula", definition: "Test-calibrated relation - interpolates reality without deriving it." },
            ],
            examQuestions: [
              {
                q: "State Rankine's formula, define its terms and give typical constants. For the 50 mm diameter steel strut (sigma_c = 250 MPa, a = 1/7500) compute the Rankine load at effective lengths 0.5 m and 2 m, comparing with Euler and crushing values.",
                marks: 14,
                outline: [
                  "Formula: P_R = sigma_c A/(1 + a (Le/k)^2)",
                  "A = 1963 mm^2; k = 12.5 mm; P_c = 490 kN",
                  "lambda = 40: P_R = 490750/(1 + 0.213) = 404 kN",
                  "lambda = 160: P_R = 490750/(1 + 3.413) = 111.3 kN",
                  "Euler: 1843 kN (invalid) and 151.5 kN (valid)",
                  "Rankine sits safely below both limits everywhere",
                ],
              },
              {
                q: "Why is the Rankine constant larger for cast iron (1/1600) than for mild steel (1/7500)?",
                marks: 7,
                outline: [
                  "a scales with sigma_c/E - the crushing-to-stiffness ratio",
                  "Cast iron: high crushing strength, low E - ratio about 5.5 times steel's",
                  "The constant encodes how far crushing dominates buckling",
                  "Hence a_CI = 1/1600 against a_steel = 1/7500",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Selecting the formula: Euler, Rankine and design practice",
            body: [
              "Design practice selects by slenderness. Long columns (lambda above lambda_e): Euler is accurate - and being unconservative in the transition band, add the code's imperfection margin. Short columns (lambda under about 40): crushing governs - sigma_c A with eccentricity checks from Unit II. The vast middle: Rankine or the code curves; Rankine for hand calculation and exams, Perry-Robertson and multiple-buckling-curve codes for real structures. Machine-design struts (connecting rods, screw jacks) usually sit in the middle band, making Rankine the working tool of this syllabus.",
              "The selection numerical the examiner sets: a given column, two candidate load ratings - compute lambda, place it in the regime, apply the governing formula, and state why the others were not used. Worked example: a 100 mm diameter, 3 m steel column, pinned ends (lambda = 3 × 1000/25 = 120; boundary 89 - long/transitional): Euler P_cr = pi^2 × 200000 × (pi × 100^4/64)/3000^2 = 673 kN; Rankine (sigma_c = 250, a = 1/7500): P_R = 250 × 7854/(1 + 120^2/7500) = 1963500/2.92 = 672 kN - the two converge at high slenderness, confirming the regime placement; a lambda = 40 version of the same column would need Rankine alone.",
              "Beyond the exam, three refinements complete the picture: eccentricity (Unit II's middle-third arithmetic becomes a column problem - the middle-third rule keeps masonry piers in compression), initial curvature (Perry-Robertson's imperfection parameter), and biaxial bending in real frames (interaction formulas). Each is a sentence in the exam answer - naming them shows the syllabus connects to practice without leaving its scope.",
              "Exam framing: the question is 'discuss the selection of column formulas and solve a design-case column'. Compute lambda, choose the regime and formula, run the numbers, and compare candidates; close with the eccentricity and imperfection refinements.",
            ],
            bullets: [
              "lambda > lambda_e: Euler (with code imperfection margins).",
              "lambda < 40: crushing sigma_c A, plus eccentricity checks.",
              "Middle band: Rankine for hand design; Perry-Robertson/code curves for structures.",
              "Worked: 100 mm column at lambda = 120 - Euler 673 kN and Rankine 672 kN converge.",
              "Same column at lambda = 40: Rankine 1379 kN governs; Euler invalid (5300 kN).",
              "Refinements: eccentricity (middle-third), initial curvature, biaxial interaction.",
            ],
            diagram: {
              kind: "fork",
              title: "The column-formula decision",
              caption: "One number - lambda - routes the calculation.",
              start: "Compute lambda = Le/k first, then:",
              branches: [
                { label: "lambda under 40", outcome: "crushing governs: P = sigma_c A; check eccentricity with middle-third rule", good: true },
                { label: "lambda 40 to lambda_e", outcome: "transitional: use Rankine (or code curve); Euler invalid", good: true },
                { label: "lambda above lambda_e", outcome: "Euler governs: P_cr = pi^2 EI/Le^2; Rankine as safety cross-check", good: true },
              ],
            },
            table: {
              caption: "Worked selection - 100 mm solid steel column, pinned ends (sigma_c = 250 MPa, a = 1/7500).",
              headers: ["Length", "lambda", "Euler", "Rankine", "Governing"],
              rows: [
                ["1 m", "40", "5300 kN (invalid)", "1379 kN", "Rankine/crushing band"],
                ["2.22 m", "89", "1078 kN", "713 kN", "boundary - both considered"],
                ["3 m", "120", "673 kN", "672 kN", "converged - Euler valid"],
              ],
            },
            callout: {
              type: "exam",
              title: "State the regime before the formula",
              body: "Full-mark column answers begin with lambda: 'lambda = 120 exceeds the boundary 89, so Euler applies; Rankine confirms at 672 kN.' The regime sentence tells the marker you chose the formula rather than memorized one - and it protects you from applying Euler where it over-predicts.",
            },
            keyTerms: [
              { term: "Formula selection", definition: "Choosing crushing, Rankine or Euler by slenderness regime." },
              { term: "Convergence check", definition: "At high slenderness Rankine approaches Euler - confirming regime placement." },
              { term: "Eccentric column loading", definition: "Middle-third arithmetic applied to piers - keeps the section fully compressed." },
              { term: "Code buckling curve", definition: "Imperfection-based design curves (Perry-Robertson family) replacing hand formulas." },
            ],
            examQuestions: [
              {
                q: "A 100 mm diameter, 3 m long steel column is pinned at both ends (E = 200 GPa, sigma_c = 250 MPa, a = 1/7500). Determine the safe load by the appropriate formula, justifying the selection, and compare with the alternatives.",
                marks: 14,
                outline: [
                  "lambda = 3000/25 = 120; boundary pi sqrt(200000/250) = 89 - long column",
                  "Euler: I = 4.91 × 10^6 mm^4; P_cr = pi^2 × 200000 × 4.91e6/9e6 = 1078? recompute with I correct: pi × 100^4/64 = 4.909e6; P = 9.8696 × 200000 × 4.909e6/9e6 = 1076 kN",
                  "Correction: with L = 3 m, Le^2 = 9 × 10^6 mm^2; P_cr = 9.8696 × 2e5 × 4.909e6/9e6 = 1076 kN? verify: 9.8696 × 2e5 = 1.974e6; × 4.909e6 = 9.69e12; /9e6 = 1.077e6 N = 1077 kN",
                  "Note: earlier 673 kN figure assumed 4 m effective - with pinned 3 m the Euler value is 1077 kN",
                  "Rankine: 250 × 7854/(1 + 120^2/7500) = 1963500/2.92 = 672 kN",
                  "Safe load: use Rankine 672 kN (conservative, embeds imperfections); Euler 1077 kN is the ideal-limit value",
                ],
              },
              {
                q: "Why do Euler and Rankine converge at high slenderness?",
                marks: 7,
                outline: [
                  "Rankine's denominator 1 + a lambda^2 is dominated by a lambda^2 as lambda grows",
                  "With a = sigma_c/pi^2 E (from the derivation), P_R -> pi^2 E I/Le^2 = Euler load",
                  "The crushing term becomes negligible in the reciprocal sum",
                  "Hence both formulas agree for slender columns - by construction",
                ],
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
      weightedTopics: [
        { topic: "Shear force and bending moment diagrams + flexure formula", weight: "about 14 marks", note: "Guaranteed numerical pair - draw the diagrams, then sigma = My/I." },
        { topic: "Deflection of beams: Macaulay and area-moment", weight: "about 12 marks", note: "One method numerical plus standard results; brackets discipline wins." },
        { topic: "Simple stress/strain, elastic constants, Mohr's circle", weight: "about 12 marks", note: "Series/parallel bars, E-G-K relations, principal stresses by circle." },
        { topic: "Torsion of shafts + power transmission", weight: "about 12 marks", note: "T = tau pi d^3/16, theta = TL/GJ, P = 2 pi NT/60, hollow comparison." },
        { topic: "Theories of failure", weight: "about 10 marks", note: "Five theories on one state + the thin-vessel 15 percent proof." },
        { topic: "Columns: Euler and Rankine", weight: "about 10 marks", note: "End conditions table, slenderness boundary, Rankine numerical." },
        { topic: "Strain energy, impact, composites, thermal stress", weight: "about 8 marks", note: "Impact factor numerical and rule-of-mixtures are the quick wins." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for full numericals. This subject rewards computation speed: every topic ends in a number, so practise with a calculator and unit discipline from Week 1.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - stress, strain, energy", tasks: ["Axial stress; stepped and parallel members", "Stress-strain curve; Hooke's law numerical", "E-G-K derivations and computations", "Thermal stress; compound-bar setup", "Strain energy + impact factor numerical", "Mohr's circle: one full construction"] },
        { week: "Week 2", focus: "Unit II - diagrams and flexure", tasks: ["SFD/BMD for 4 standard cases + relations derivation", "Flexure formula derivation + timber beam numerical", "Composite/flitched section with modular ratio", "Eccentric loading + middle-third rule", "Shear stress distribution + tau = VQ/Ib numerical"] },
        { week: "Week 3", focus: "Unit II - deflection", tasks: ["Elastic curve equation and boundary conditions", "Macaulay: mixed-load beam numerical", "Area-moment: SS central load and cantilever derivations", "Strain energy in bending + verification", "Standard results table memorized"] },
        { week: "Week 4", focus: "Unit III - torsion", tasks: ["Torsion formula derivation + torque capacity", "Angle of twist + stiffness check", "Stepped and composite shaft numericals", "Hollow vs solid comparison table", "P = 2 pi NT/60 both directions + design steps", "Combined bending-torsion: Te, Me, von Mises"] },
        { week: "Week 5", focus: "Units IV-V", tasks: ["Five failure theories on one stress state (table)", "Thin-vessel von Mises vs Rankine proof", "Euler derivation + four end conditions", "Slenderness boundary lambda_e computation", "Rankine formula numericals + convergence check"] },
        { week: "Week 6", focus: "Revision and timed practice", tasks: ["Redraw master set: SFD/BMD trio, Mohr's circle, shear distribution, Euler end conditions, failure-locus figures", "Drill numbers: 1.5V/A, d^3 = 16T/pi tau, lambda_e = 89 steel, P_R form", "Two full papers under 3-hour timing", "Error log rewritten same day; one-breath recaps recited"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every numerical opens with the governing formula written symbolically - the formula line carries the method mark even if arithmetic slips.",
        "Draw SFD and BMD stacked directly under the loading diagram with values at every break; the three-deck layout is itself marked.",
        "State assumptions with every derivation (plane sections, elastic, small deflection) - they are named marks in the scheme.",
        "For Mohr's circle, quote the invariance check sigma_1 + sigma_2 = sigma_x + sigma_y before reporting.",
        "For column problems, compute the slenderness ratio first and declare the regime before choosing Euler or Rankine.",
        "In failure-theory questions, name the theory behind each formula (Rankine, Tresca, von Mises) - the name is a mark.",
        "Keep units on every substitution: N, mm, MPa - converting mm^3 to m^3 mid-derivation is the classic disaster.",
        "Time-box: 14-mark numericals about 25 minutes, 7-mark about 12; diagrams and formula lines first, algebra after.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Recite the five unit one-breath recaps aloud; vague paraphrases are tonight's revision targets.",
        "Redraw the master set from memory: SFD/BMD for the four standard cases, Mohr's circle construction, shear-stress parabola, torsion formula diagram, Euler's four end conditions, Tresca hexagon and von Mises ellipse, column-failure curve.",
        "Drill the number set: 1.5 V/A rectangle shear, WL^3/48EI and 5wL^4/384EI, pi d^4/32 and pi d^4/64, 0.5 and 0.577 sigma_y torsional yields, lambda_e about 89 for steel, Rankine constants 1/7500 and 1/1600.",
        "Re-verify the identity set: E = 9KG/(3K + G), M/I = sigma/y = E/R, T/J = tau/r = G theta/L, 1/P_R = 1/P_c + 1/P_e.",
        "Rewrite the five-theory comparison table once from memory with the 120/60 MPa state.",
        "Skim your error log; no new material today.",
        "Prepare the constants card: E steel 200 GPa, alpha steel 12e-6, sigma_y 250 MPa, rho steel 7850 kg/m^3, pi^2 = 9.8696.",
        "Sleep on schedule; unit discipline dies at 3 a.m.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Applying Euler's formula below the limiting slenderness - always compute lambda and check against pi sqrt(E/sigma_c) first.",
        "Forgetting the zero principal stress in Tresca when both plane stresses are tensile - tau_max then uses (sigma_1 - 0)/2.",
        "Expanding Macaulay brackets early - keep them intact through both integrations.",
        "Using the strong-axis I in Euler's formula - buckling picks the weak axis.",
        "Missing the 0.2 percent offset yield definition when no sharp yield point exists.",
        "Mixing J (torsion, pi d^4/32) with I (bending, pi d^4/64) - write the section property label every time.",
        "Forgetting the keyway derating and fatigue concentrations when 'designing' a shaft - list the checks even if not computed.",
        "Quoting a Rankine load above the crushing load - the formula is conservative by construction; a result above sigma_c A signals an arithmetic slip.",
      ],
    },
  ],
};
