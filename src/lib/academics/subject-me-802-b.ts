/**
 * Academics - RGPV Mechanical 8th-semester subject: ME-802(B) Tribology and
 * Maintenance Engineering.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or Python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me802b: AcademicSubject = {
  id: "me-802-b",
  code: "ME-802(B)",
  title: "Tribology and Maintenance Engineering",
  semester: "VIII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to tribology and maintenance engineering: friction, wear and surface engineering; lubrication regimes, viscosity and additives; journal and rolling bearings with vibration, oil and thermal monitoring; maintenance strategy, RCM, TPM, planning, spares and KPIs; and FMECA, root cause analysis, IoT prognostics, digital twins and industry case economics.",
  description:
    "Five units walk from the physics of interacting surfaces - friction laws, wear mechanisms and surface engineering - through lubrication (Stribeck regimes, viscosity and VI, additives, grease and solids) into bearings and monitoring: Reynolds' equation, L10 life, seals, vibration spectra, oil analysis and thermography. The maintenance half covers strategy, RCM and TPM, planning and scheduling, spare parts and KPIs run through a CMMS, closing with FMECA, root cause analysis, IoT and AI condition-based maintenance, digital twins, and automotive and aerospace case economics. Every section pairs the theory with a worked numerical, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#a78bfa",
  emoji: "TR",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Tribology Fundamentals",
      summary:
        "The physical core of the subject: what tribology is and why it costs or saves billions; the classic laws of friction and the adhesion-ploughing theory that explains them; the six wear mechanisms and Archard's law; how surfaces are measured (Ra, Rq, bearing curves) and why contact happens only at asperities; and the surface-engineering menu - diffusion, transformation, plating, thermal spray and thin films - that buys hardness exactly where it matters.",
      chapter: {
        number: "01",
        title: "Friction, Wear and Surfaces",
        intro:
          "Unit I builds the physics everything else leans on. Section 1.1 frames the discipline and its economics; 1.2 moves from the empirical laws of friction to the adhesion theory that explains them; 1.3 classifies wear and quantifies it with Archard's equation; 1.4 opens the black box of surface texture and real contact; 1.5 closes with the surface-engineering menu that puts hardness at the surface while the core stays tough.",
        inOneBreath:
          "Tribology is interacting surfaces in relative motion; friction follows three classic laws that adhesion theory (F = Ar x s plus a ploughing term) explains through the real contact area W/H; wear comes in adhesive, abrasive, fatigue, corrosive, erosive and fretting flavours quantified by Archard's V = K W L / H; surfaces are described by Ra, Rq, Rz and the Abbott curve and touch only at asperity summits; and surface engineering - nitriding, induction hardening, plating, thermal spray, PVD/CVD films - adds hardness at the surface while the core stays tough.",
        sections: [
          {
            number: "1.1",
            title: "Tribology: scope, the triad and the cost of friction",
            body: [
              "Tribology is the science and engineering of interacting surfaces in relative motion. The word was coined for the British Jost Committee report of 1966, and it covers three inseparable phenomena: friction, the resistance to sliding; wear, the progressive loss or displacement of surface material; and lubrication, the interposition of a film to control both. The discipline is deliberately interdisciplinary, borrowing contact mechanics from engineering, metallurgy and physics from materials science, and surface and colloid chemistry from chemistry. A tribologist studying a gearbox needs elasticity for the gear teeth, polymer science for the seals, and rheology for the oil - which is exactly why the subject sits at the heart of maintenance engineering.",
              "The economic case is startling. The Jost report estimated that better tribological practice could save the UK economy roughly 1.3 to 1.4 percent of its GDP, and studies in other industrial nations returned figures of the same order. About one third of a vehicle's fuel energy is spent overcoming friction in the engine, transmission and tyres; wear consumes materials worth billions annually; and in most plants the majority of mechanical failures begin at a surface - a bearing raceway, a gear flank, a pump seal face. Every maintenance engineer therefore practises tribology whether the job title says so or not, because component replacement decisions are dominated by friction and wear outcomes.",
              "The unifying abstraction is the tribosystem: two solid counterfaces, an interfacial medium (lubricant, coating, debris), and the operating environment, together with the load, speed and temperature inputs. Friction, wear and lubricant behaviour are outputs of this system, not properties of a material alone - steel slides easily against PTFE yet seizes against itself. This systems view drives the whole course: Unit I builds the fundamentals of friction, wear and surfaces, Unit II adds the lubricant, Unit III applies both to bearings and monitoring, and Units IV and V convert the physics into maintenance strategy and economics.",
            ],
            bullets: [
              "Tribology = friction + wear + lubrication of interacting surfaces in relative motion (Jost Committee, 1966).",
              "Interdisciplinary by nature: mechanics, materials science, chemistry and fluid mechanics all meet at the surface.",
              "Tribosystem = counterface 1 + counterface 2 + interfacial medium + environment + operating conditions.",
              "Friction and wear are system outputs, not material constants - pairing and medium change everything.",
              "Economic stake: friction consumes about a third of vehicle fuel energy; wear drives most mechanical failures.",
            ],
            table: {
              caption: "The tribology triad at a glance.",
              headers: ["Element", "What it measures", "Typical control lever"],
              rows: [
                ["Friction", "force resisting sliding (coefficient mu)", "lubrication, material pairing, finish"],
                ["Wear", "material loss or displacement per time", "hardness, coatings, contamination control"],
                ["Lubrication", "film formation and load carriage", "viscosity, additives, feed system"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The tribology cycle in a running machine",
              caption: "Friction, heating, wear and lubricant action feed one another around any running machine.",
              steps: [
                { label: "Sliding contact", note: "load and speed applied" },
                { label: "Friction", note: "mechanical energy converted to heat" },
                { label: "Temperature rise", note: "viscosity drops, films thin" },
                { label: "Wear and debris", note: "surfaces degrade, debris circulates" },
                { label: "Lubricant action", note: "film and additives restore protection" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The two most repeated openers: define tribology and name its three branches, and explain why it is interdisciplinary. Memorise the Jost Committee (1966) origin - citing the report earns the definition mark every time it appears.",
            },
            keyTerms: [
              { term: "Tribology", definition: "The science and technology of interacting surfaces in relative motion, spanning friction, wear and lubrication (Jost, 1966)." },
              { term: "Tribosystem", definition: "The complete set - counterfaces, interfacial medium, environment and operating variables - that jointly determines friction and wear." },
              { term: "Coefficient of friction", definition: "Ratio of friction force to normal load, mu = F/N, a system property rather than a material constant." },
            ],
            examQuestions: [
              {
                q: "Define tribology and explain its interdisciplinary nature. Discuss the triad of friction, wear and lubrication with one industrial example each, and summarize the economic findings of the Jost report.",
                marks: 7,
                outline: [
                  "Define tribology (Jost 1966) and name the three branches.",
                  "Explain the inputs: interacting surfaces in relative motion under load, speed and temperature.",
                  "Friction example: brake pads engineering high mu versus piston rings fighting it.",
                  "Wear example: abrasive cylinder liner wear; erosive pump impeller damage.",
                  "Lubrication example: hydrodynamic journal bearing film; splash-lubricated gearbox.",
                  "Interdisciplinary claim: mechanics + materials + chemistry contributions.",
                  "Jost findings: savings of order 1.3-1.4 percent of GDP through tribology programs.",
                ],
              },
              {
                q: "Name the three principal branches of tribology.",
                marks: 2,
              },
              {
                q: "State two industrial consequences of ignoring tribology in machine design.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Theories of friction: from Coulomb to adhesion",
            body: [
              "Friction was first systematized as the classic laws credited to Amontons and Coulomb. First law: friction force is proportional to the normal load. Second law: friction force is independent of the apparent area of contact. Third law (Coulomb): kinetic friction is independent of sliding speed. The constant of proportionality is the coefficient of friction, mu = F/N - typically 0.6 to 0.8 for dry steel on steel and 0.05 to 0.1 when boundary-lubricated. Static friction slightly exceeds kinetic friction, which is why boxes lurch when they break away; when that difference couples with system stiffness the result is stick-slip vibration, the bane of slow slides and machine tool slides.",
              "Why the laws hold took two centuries to explain. Coulomb's mechanical interlocking theory - rigid roughnesses riding over one another - predicts friction should grow with coarseness, yet finely polished surfaces can seize, so interlocking cannot be the whole story. Tomlinson proposed molecular attraction; the decisive step was Bowden and Tabor's adhesion theory. Because real contact happens only at asperity tips, the real contact area Ar is a tiny fraction of the nominal area and equals load divided by hardness: Ar = W/H. Friction force is then F = Ar x s, where s is the shear strength of the welded junctions - load-proportional and area-blind in one stroke, recovering the first two laws.",
              "Ploughing supplies the deformation term: hard asperities groove the softer counterface, so a fuller expression is F = Ar x s + ploughing component. Each term suggests a control lever: reduce s with low-shear films (oil, grease, PTFE, graphite), reduce Ar with higher hardness, or reduce ploughing with harder, smoother counterfaces. Friction is measured on rigs such as the pin-on-disc, block-on-ring or tilting-plane tester under controlled load, speed and temperature. Remember that friction is often desirable - brakes, clutches, tyres, bolted joints and traction drives all spend their lives engineering mu upward rather than downward.",
            ],
            bullets: [
              "Three classic laws: F proportional to N; F independent of apparent area; kinetic F independent of speed.",
              "Static friction exceeds kinetic friction; the gap drives stick-slip in slow sliding systems.",
              "Real contact area Ar = W/H - a tiny fraction of the nominal area of the surfaces.",
              "Adhesion theory: F = Ar x s (junction shear strength); ploughing adds a deformation term.",
              "Control levers: low-shear films lower s; hardness lowers Ar; smooth hard surfaces lower ploughing.",
            ],
            table: {
              caption: "Friction theories compared.",
              headers: ["Theory", "Core idea", "Where it fails"],
              rows: [
                ["Mechanical interlocking (Coulomb)", "roughness hills ride over each other", "predicts more finish = more friction; polished surfaces seize instead"],
                ["Molecular attraction (Tomlinson)", "atomic-scale forces dissipate energy on separation", "no load or area dependence without contact mechanics"],
                ["Adhesion (Bowden-Tabor)", "asperity junctions weld and shear; F = Ar x s", "needs the ploughing term for hard-on-soft pairs"],
                ["Ploughing / deformation", "hard asperities groove the softer surface", "alone cannot explain friction between like metals"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Applying the adhesion-ploughing model",
              caption: "From applied load to friction force in five steps - the derivation examiners reward.",
              steps: [
                { label: "Load W presses surfaces together", note: "contact only at asperity tips" },
                { label: "Real area Ar = W / H", note: "proportional to load, not to geometry" },
                { label: "Junctions form and shear", note: "adhesion term Ar x s" },
                { label: "Hard asperities plough the soft face", note: "deformation term" },
                { label: "F = Ar x s + ploughing", note: "both classic laws recovered" },
              ],
            },
            callout: {
              type: "exam",
              title: "The second law, decoded",
              body: "Explain area-independence through Ar: doubling the plate size spreads the same load over more asperities, but the total real area - and hence F - is fixed by W/H. That single sentence is the standard 3-mark explanation and it also unlocks the first law in the same breath.",
            },
            keyTerms: [
              { term: "Real area of contact", definition: "Sum of asperity-tip contact patches, Ar = W/H; typically a minute fraction of the nominal area." },
              { term: "Adhesion theory of friction", definition: "Bowden-Tabor model: friction is the shearing of welded asperity junctions, F = Ar x s, plus ploughing." },
              { term: "Stick-slip", definition: "Oscillatory motion arising when the static-kinetic friction difference couples with system stiffness." },
            ],
            examQuestions: [
              {
                q: "State the laws of friction. Explain the adhesion theory of Bowden and Tabor and show how it accounts for the first two laws; add the ploughing term and briefly evaluate the earlier mechanical interlocking theory.",
                marks: 7,
                outline: [
                  "State the three laws with mu = F/N and typical values for dry and lubricated steel.",
                  "Define nominal versus real area of contact; Ar = W / H.",
                  "Adhesion mechanism: junctions weld and shear; F = Ar x s.",
                  "Law 1: Ar is proportional to W, so F is proportional to W.",
                  "Law 2: apparent area does not change Ar for a given load.",
                  "Ploughing term for hard-on-soft pairs; combined F = Ar x s + P.",
                  "Interlocking theory fails: polished surfaces would show least friction yet often seize.",
                ],
              },
              {
                q: "Why is static friction usually greater than kinetic friction?",
                marks: 2,
              },
              {
                q: "Give two machine elements where HIGH friction is deliberately engineered, and state how it is achieved.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Wear mechanisms and Archard's equation",
            body: [
              "Wear is the progressive loss or displacement of material from a surface operating in relative contact, quantified as weight loss, wear volume, or dimensional change per unit time or sliding distance. The classical mechanisms must be named with their signatures: adhesive wear (junctions tear out, causing scuffing and galling), abrasive wear (hard asperities or trapped particles cut and plough - two-body when the counterface cuts, three-body when loose debris rolls in the interface), surface fatigue (rolling contacts eventually pit and spall), corrosive or oxidative wear (chemical films repeatedly formed and scraped away), erosive wear (particle-laden fluid impact) and fretting (tiny-amplitude oscillation at nominally fixed joints such as press fits and bolted flanges).",
              "Archard's equation ties wear volume to the same quantities as adhesion friction: V = K W L / H, where W is load, L is sliding distance, H is the hardness of the softer surface and K is the dimensionless wear coefficient, spanning roughly 10^-8 to 10^-2 across regimes. The specific wear rate k = K/H, in units of mm3/Nm, compares materials on a common scale. Wear behaviour is rarely linear: after running-in the system settles into mild wear, and if load, speed or temperature crosses a transition - often when flash temperature changes the oxide chemistry - it jumps to severe wear. Wear maps (load-speed axes) chart these transitions for design use.",
              "Wear control works through the tribosystem, not just the material. Raise surface hardness (a rule of thumb: abrasive wear resistance scales roughly with hardness), avoid identical metal pairings, exclude abrasive contamination with seals and filtration, and match lubricant additive chemistry to the load. Diagnose the mechanism before acting, because each looks different under a low-power lens: adhesive wear shows transfer smears and torn patches, abrasive wear shows parallel grooves and cutting debris, fatigue shows pits and spalls, and fretting leaves reddish-brown oxide powder spilling from the joint. Ferrography and surface examination close the loop with the condition monitoring of Unit III.",
            ],
            bullets: [
              "Six mechanisms to name fast: adhesive, abrasive (2- and 3-body), surface fatigue, corrosive, erosive, fretting.",
              "Archard: V = K W L / H; specific wear rate k = K/H in mm3/Nm.",
              "Wear coefficient K spans 10^-8 to 10^-2; mild-to-severe transitions break linearity.",
              "Running-in: early high wear settles to steady mild wear as surfaces conform.",
              "Diagnosis before cure: transfer patches = adhesive; parallel grooves = abrasive; pits = fatigue; red oxide dust = fretting.",
            ],
            codeExample: {
              language: "python",
              caption: "Archard wear estimate for a sliding bush.",
              code: `# Archard wear equation: V = K * W * L / H
W = 2000.0       # normal load, N
L = 50.0e3       # sliding distance, m
H = 1.8e9        # hardness of the softer surface, Pa
K = 5.0e-7       # dimensionless wear coefficient (lubricated mild wear)

V = K * W * L / H                       # wear volume, m3
print(f"Wear volume: {V*1e9:.2f} mm3")

# Spread over an apparent contact patch 20 mm x 15 mm:
area_mm2 = 20.0 * 15.0
depth_mm = (V * 1e9) / area_mm2
print(f"Mean wear depth: {depth_mm:.4f} mm")

# Sensitivity: doubling load doubles V; tripling hardness cuts V to 1/3.
`,
            },
            diagram: {
              kind: "matrix",
              title: "Wear mechanism recognition grid",
              caption: "Locate the evidence you can see in the field, then read off the likely mechanism.",
              axes: { x: "Sliding-dominated -> Rolling-dominated", y: "Mechanical -> Environmental" },
              quadrants: [
                { label: "Adhesive: scuffing, galling, transfer smears", note: "avoid like-on-like pairs" },
                { label: "Surface fatigue: pitting, spalling, delamination", note: "rolling contacts and gear flanks" },
                { label: "Abrasive: parallel grooves, cutting swarf", note: "seal out grit, harden the surface" },
                { label: "Corrosive and fretting: oxide films, red debris", note: "chemical attack plus micro-motion" },
              ],
            },
            callout: {
              type: "exam",
              title: "Archard asked directly",
              body: "State the equation, define every symbol with units, then use it. Examiners award the closing mark for noting that K must be chosen for the correct regime (mild or severe) and that wear tests exist precisely to pin K down for a pairing.",
            },
            keyTerms: [
              { term: "Adhesive wear", definition: "Material transfer between surfaces when asperity junctions shear; seen as scuffing and galling." },
              { term: "Archard's equation", definition: "V = K W L / H: wear volume proportional to load and sliding distance, inversely proportional to hardness." },
              { term: "Fretting wear", definition: "Wear from micrometre-scale oscillatory sliding at nominally fixed joints; recognized by red-brown oxide debris." },
            ],
            examQuestions: [
              {
                q: "Classify wear mechanisms with sketches of the worn surfaces. State Archard's wear equation, define each term, and compute the wear volume for W = 2 kN, L = 50 km, H = 1.8 GPa and K = 5 x 10^-7.",
                marks: 7,
                outline: [
                  "List the mechanisms: adhesive, abrasive, fatigue, corrosive, erosive, fretting.",
                  "One-line signature and sketch per mechanism (transfer patches, grooves, pits, films, craters, oxide powder).",
                  "Distinguish two-body and three-body abrasion with an example each.",
                  "State Archard: V = K W L / H with units of every symbol.",
                  "Substitute: V = 5e-7 x 2000 x 50000 / 1.8e9.",
                  "Result: V ≈ 2.8 x 10^-8 m3 ≈ 28 mm3.",
                  "Comment: K is regime-dependent; running-in and transitions break linearity.",
                ],
              },
              {
                q: "Differentiate between two-body and three-body abrasive wear with one example each.",
                marks: 3,
              },
              {
                q: "Where is fretting wear commonly observed and why?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Surface topography, roughness and real contact",
            body: [
              "Every engineering surface is a landscape with four levels: roughness (short-wavelength irregularities from the finishing process), waviness (longer-wavelength waves from machine vibration or chatter), lay (the directional pattern of tool marks) and errors of form. A stylus profilometer drags a diamond tip across the surface and records the height profile after filtering out waviness; optical and atomic-force instruments do the same without touching. The profile is assessed over a sampling length referenced to a mean line. Because mating surfaces only ever touch on their highest summits, topography controls friction, wear and the survival of lubricant films.",
              "Amplitude parameters dominate practice. Ra, the arithmetic average of absolute deviations from the mean line (also called centre line average, CLA), is the universal shop-floor number; Rq, the root-mean-square deviation, pairs naturally with statistical contact theories; Rz captures mean peak-to-valley height and warns of the deep valleys that store lubricant and the high peaks that punch through films. The bearing-ratio (Abbott-Firestone) curve plots the fraction of material at or below each height and predicts how a surface will bed in: plateau-honed cylinder bores deliberately combine flat load-bearing plateaus with deep oil-retaining valleys, which is why they run in quickly and hold oil.",
              "Contact mechanics explains why these statistics matter. Pressed surfaces touch only at asperity summits, so the real area is a minute fraction of the nominal area - the foundation of adhesion friction in section 1.2. Hertz theory gives the elastic pressure distribution and contact size for smooth ideal bodies (sphere on flat, cylinder on cylinder), and the Greenwood-Williamson model extends it to rough surfaces with a plasticity index that flags whether asperities deform elastically or flatten plastically at operating load. Roughness also fixes the lubrication regime through the film-thickness ratio lambda = h / combined Rq, the bridge Unit II uses to separate boundary, mixed and full-film operation.",
            ],
            bullets: [
              "Texture hierarchy: roughness (process), waviness (machine vibration), lay (direction), errors of form.",
              "Ra = arithmetic mean of absolute deviations (CLA); Rq = RMS; Rz = mean peak-to-valley; no single number suffices.",
              "Abbott-Firestone bearing curve: bearing ratio versus height - predicts running-in and plateau behaviour.",
              "Real contact occurs at asperity summits (Ar = W/H); Hertz and Greenwood-Williamson models quantify it.",
              "Lambda ratio h/Rq decides the lubrication regime - the bridge from Unit I to Unit II.",
            ],
            codeExample: {
              language: "python",
              caption: "Ra and Rq computed from a digitised profile.",
              code: `# Heights sampled every 5 um along a ground finish (microns)
y = [0.4, 1.9, -0.8, 2.6, 0.1, -1.7, 1.2, 2.9, -0.5, 0.7, 1.5, -1.1]

mean = sum(y) / len(y)
dev = [v - mean for v in y]

Ra = sum(abs(d) for d in dev) / len(dev)
Rq = (sum(d * d for d in dev) / len(dev)) ** 0.5

print(f"mean line = {mean:.3f} um")
print(f"Ra = {Ra:.3f} um, Rq = {Rq:.3f} um")

# Rq >= Ra always (RMS weights large deviations more); for a
# Gaussian profile Rq is about 1.25 x Ra.
print(f"Rq/Ra = {Rq / Ra:.2f}")
`,
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a machined surface",
              caption: "Layers from the atmosphere down to the bulk - wear lives almost entirely in the top three.",
              layers: [
                { label: "Adsorbed films and oxides (nm)", note: "reaction layers, moisture, contaminant films" },
                { label: "Beilby (amorphous) layer", note: "smeared fractured material from finishing" },
                { label: "Deformed / work-hardened layer", note: "plastically deformed grains, residual stress" },
                { label: "Bulk material with process texture", note: "machining marks, metallurgy, heat treatment" },
              ],
            },
            callout: {
              type: "warning",
              title: "Ra alone cannot certify a surface",
              body: "A plateau-honed bore and a spiky turned surface can share Ra = 0.8 um yet behave completely differently in service. Quote Ra together with Rz or the bearing curve whenever surface characterisation carries marks - examiners look for the second parameter.",
            },
            keyTerms: [
              { term: "Ra", definition: "Arithmetic average of absolute profile deviations from the mean line (centre line average), in microns." },
              { term: "Bearing-ratio curve", definition: "Abbott-Firestone plot of the percentage of material at or below a given height; describes load-bearing capacity and running-in." },
              { term: "Plasticity index", definition: "Greenwood-Williamson ratio of asperity slope and material properties that predicts elastic versus plastic asperity contact." },
            ],
            examQuestions: [
              {
                q: "Explain the components of surface texture with a sketch. Define Ra, Rq and Rz with formulas, explain the bearing-ratio curve, and discuss nominal versus real area of contact.",
                marks: 7,
                outline: [
                  "Sketch a profile: roughness riding on waviness; define lay and errors of form.",
                  "Formulas: Ra = (1/L) integral |y| dx; Rq = sqrt((1/L) integral y^2 dx); Rz = mean peak-to-valley height.",
                  "Sampling length and filtering of waviness before parameter evaluation.",
                  "Abbott curve construction; what a plateau surface looks like on it.",
                  "Nominal versus real area: contact at summits only, Ar = W/H.",
                  "Consequence: friction laws of section 1.2 and lambda-based regime selection.",
                  "Close with one comparison: two surfaces with equal Ra but different behaviour.",
                ],
              },
              {
                q: "Why can two surfaces with identical Ra values behave differently in service?",
                marks: 3,
              },
              {
                q: "Distinguish between roughness and waviness.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Surface engineering and wear-resistant coatings",
            body: [
              "Because failures start at the surface, engineers learned to spend hardness only where it is needed: surface engineering modifies the composition, microstructure or geometry of a thin outer zone while the core keeps its toughness. Diffusion treatments - carburizing, nitriding, carbonitriding - import carbon or nitrogen and then quench or precipitate hard nitrides; nitriding runs below the tempering temperature, so distortion is minimal, which is why crankshaft journals and camshafts favour it. Transformation hardening by induction, flame or laser heating heats a thin skin above the austenitizing point and self-quenches it, leaving a hard martensitic case on a tough core.",
              "Deposition routes add material instead. Hard chrome and electroless nickel plating deposit 10-100 um and remain the classic hydraulic-rod repairs. Thermal spray - flame, arc, plasma and high-velocity oxy-fuel (HVOF) - melts or softens powder and fires it at the surface, building 0.1-2 mm of carbide-reinforced (WC-Co, Cr3C2-NiCr) or metallic layers; HVOF tungsten carbide now replaces hard chrome on landing-gear and valve components. Thin-film PVD and CVD processes grow 1-10 um of TiN, CrN or diamond-like carbon (DLC) with extreme hardness and low friction, enabling dry-running fuel-injection parts and valvetrain gains in car engines.",
              "Selection is a systems exercise. Match coating hardness to the antagonist - a coating roughly a third or more harder than the opposing asperity or abrasive resists grooving - and check thickness against the Hertzian contact depth so the hardest zone carries the peak shear. Adhesion (a coating must not spall), thermal limits, substrate size (furnace processes distort large parts), achievable finish, repairability and cost complete the checklist. Typical pairings: nitrided shafts in bronze bushes, HVOF WC-Co on ball-valve seats, DLC on diesel injector needles, PTFE-impregnated anodizing on aluminium compressor cylinders. Every choice trades initial cost against wear life - the economics land in section 5.5.",
            ],
            bullets: [
              "Diffusion (carburizing, nitriding) and transformation (induction, flame, laser) hardening alter the existing surface.",
              "Deposition adds layers: plating 10-100 um, thermal spray 0.1-2 mm, PVD/CVD films 1-10 um.",
              "HVOF WC-Co is the modern hard-chrome replacement for high-load sliding parts.",
              "DLC and TiN thin films: extreme hardness plus low friction, ideal on precise small components.",
              "Selection rules: coating about 1.3x harder than the antagonist, case depth beyond peak shear depth, adhesion and distortion checks.",
            ],
            table: {
              caption: "Choosing a surface engineering route.",
              headers: ["Route", "Typical depth", "Character", "Representative use"],
              rows: [
                ["Gas nitriding", "0.1-0.7 mm", "hard nitrides, low distortion, no quench", "crankshaft journals, cams"],
                ["Induction hardening", "0.5-3 mm", "hard case on tough core", "axle shafts, rails"],
                ["Hard chrome plating", "10-100 um", "hard, somewhat brittle, repair classic", "hydraulic rods"],
                ["HVOF WC-Co", "0.1-2 mm", "carbide composite, very wear-resistant", "landing gear, valve seats"],
                ["PVD TiN / DLC", "1-10 um", "ultra-hard, low-friction films", "injector needles, tooling"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The surface engineering menu by case depth",
              caption: "Thin and precise at the apex, deep and heavy at the base.",
              tiers: [
                { label: "PVD / CVD thin films (1-10 um)", note: "TiN, CrN, DLC - precision components" },
                { label: "Electro- and electroless plating (10-100 um)", note: "hard chrome, nickel - repair and corrosion" },
                { label: "Thermal spray (0.1-2 mm)", note: "HVOF carbides - severe wear, thick build-up" },
                { label: "Hardfacing weld overlays (1-10 mm)", note: "abrasion duty on earthmoving tooling" },
                { label: "Diffusion and transformation cases", note: "no added layer - graded hardening into steel" },
              ],
            },
            callout: {
              type: "tip",
              title: "Pairings beat single choices",
              body: "In answers, name the substrate, the treatment and the antagonist - for example, 'nitrided EN steel shaft running against a bronze bush'. Add that like-on-like metal pairs are forbidden (galling risk) and you have the full-marks pairing discipline.",
            },
            keyTerms: [
              { term: "Nitriding", definition: "Diffusion of nitrogen into steel (about 500-550 C) to form hard nitrides with minimal distortion - the crankshaft favourite." },
              { term: "DLC coating", definition: "Diamond-like carbon thin film (1-10 um) combining high hardness with low friction for dry or starved contacts." },
              { term: "HVOF", definition: "High-velocity oxy-fuel thermal spray producing dense, strongly bonded carbide-metal coatings." },
            ],
            examQuestions: [
              {
                q: "Classify surface engineering treatments under (a) treatments that alter the existing surface and (b) treatments that add layers, giving process, typical case depth and two applications for each.",
                marks: 7,
                outline: [
                  "Rationale: hardness at the surface, toughness in the core.",
                  "Diffusion: carburizing, nitriding, carbonitriding - depths and uses.",
                  "Transformation: induction, flame, laser hardening - depths and uses.",
                  "Plating: hard chrome, electroless nickel - depth and uses.",
                  "Thermal spray: flame, plasma, HVOF - thickness, materials, uses.",
                  "Thin films: PVD/CVD TiN, CrN, DLC - depth and uses.",
                  "Selection factors: antagonist hardness, load depth, adhesion, distortion, cost.",
                ],
              },
              {
                q: "Why is nitriding preferred over carburizing for finished crankshafts?",
                marks: 3,
              },
              {
                q: "State two advantages of DLC coatings over electroplated hard chrome.",
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
      title: "Lubrication",
      summary:
        "How films defeat friction: the four lubrication regimes read off the Stribeck curve and the lambda ratio; viscosity, viscosity index and the data-sheet numbers that decide film thickness; additive chemistry from VI improvers and antioxidants to ZDDP tribofilms and EP reactions; grease as a two-phase structure with NLGI grades; solid lubricants for vacuum and heat; and the delivery systems - splash, ring, circulating, centralized and mist - with the cleanliness codes that keep them honest.",
      chapter: {
        number: "02",
        title: "Lubricants and Lubrication Regimes",
        intro:
          "Unit II turns physics into chemistry and systems. Section 2.1 maps the regimes on the Stribeck curve and defines the lambda ratio; 2.2 nails viscosity, the viscosity index and the rest of the data sheet; 2.3 dissects the additive package; 2.4 covers grease and solid lubricants; 2.5 closes with lubrication systems, cleanliness codes and a selection methodology.",
        inOneBreath:
          "Lubrication regimes climb from boundary through mixed to hydrodynamic and EHL as the film-thickness ratio lambda = h/Rq passes about 3; viscosity comes in dynamic (Pa s) and kinematic (cSt) forms joined by density and collapses with temperature unless the viscosity index is high; additives split into bulk (VI improvers, antioxidants, antifoams) and surface (ZDDP anti-wear, EP, corrosion inhibitors) families; grease is oil held in a soap thickener graded by NLGI consistency; and delivery spans total-loss, splash, circulating, centralized and mist systems chosen by heat rejection, speed and cleanliness.",
        sections: [
          {
            number: "2.1",
            title: "Lubrication regimes and the Stribeck curve",
            body: [
              "A lubricant does six jobs at once: separate the sliding surfaces, reduce friction and wear, carry away frictional heat, flush debris, protect against corrosion, and - in pistons and seals - even provide a pressure seal. Which job dominates depends on how completely the film separates the surfaces. The regimes in ascending film thickness: boundary lubrication, where asperities touch and surface films carry the load; mixed lubrication, where the film carries most of the load but asperity contact persists; hydrodynamic lubrication, where a self-pressurized liquid film fully separates the surfaces; and elastohydrodynamic lubrication (EHL), the same wedge physics operating in concentrated line or point contacts where the surfaces themselves elastically deform.",
              "The Stribeck curve traces the coefficient of friction against the bearing characteristic (viscosity x speed / pressure). Starting from rest, friction is high in the boundary regime, falls steeply through the mixed regime to a minimum at the onset of full film, then rises gently as viscous shear and churning grow with speed. The practical reading: at low lambda the additive chemistry rules, at high lambda the bulk viscosity rules. The film-thickness ratio lambda = h / sqrt(Rq1^2 + Rq2^2) classifies the regime numerically - below about 1 means boundary, 1 to 3 mixed, above 3 full film. The mixed band is the most damaging place a machine can live, which is why design pushes either side of it.",
              "Boundary lubrication deserves respect because most wear happens there. Load is carried by extremely thin films formed by adsorption: polar molecules physisorb weakly on to metal, fatty acids chemisorb to make soaps, and at hot asperity tips extreme-pressure additives react to form sacrificial solid films of sulfides, phosphates or chlorides that shear in place of the metal. In EHL contacts the same wedge mechanism operates, but contact pressures of 1-3 GPa briefly spike the viscosity by orders of magnitude and elastically flatten the surfaces, producing films of a fraction of a micrometre - enough for rolling bearings and gear teeth, and the reason gear oils need both the right viscosity and the right additives.",
            ],
            bullets: [
              "Regime ladder: boundary -> mixed -> hydrodynamic -> elastohydrodynamic, ordered by the ratio lambda.",
              "Stribeck curve: friction versus viscosity x speed / load; high at boundary, minimum at full-film onset, rising with churning after.",
              "Lambda = h / combined Rq: below 1 boundary, 1-3 mixed, above 3 full film.",
              "Boundary films: physisorption, chemisorption, EP reaction films - additives, not viscosity, carry the load.",
              "EHL = hydrodynamics + elastic deformation + pressure-viscosity rise, in line and point contacts (gears, rolling bearings).",
            ],
            table: {
              caption: "The four regimes compared.",
              headers: ["Regime", "Film thickness", "Typical mu", "Load carried by"],
              rows: [
                ["Boundary", "1-10 nm adsorbed films", "0.05-0.15", "surface films and asperities"],
                ["Mixed", "partial film, lambda 1-3", "0.01-0.06", "shared: film plus asperities"],
                ["Hydrodynamic", "1-100 um, lambda > 3", "0.001-0.01", "hydrodynamic wedge pressure"],
                ["Elastohydrodynamic", "0.1-2 um in contacts", "0.001-0.02", "piezoviscous film in a deformed contact"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Start-up to full film on the Stribeck curve",
              caption: "Every journal climbs this ladder at switch-on; wear concentrates in the first two rungs.",
              steps: [
                { label: "Boundary regime (start-up)", note: "h << Rq: films and asperities carry the load" },
                { label: "Mixed regime", note: "film shares the load; most wear occurs here" },
                { label: "Full hydrodynamic film", note: "wedge pressure separates the surfaces" },
                { label: "EHL in line/point contacts", note: "elastic flattening + piezoviscous oil" },
              ],
            },
            callout: {
              type: "exam",
              title: "The one sketch to own",
              body: "Draw the Stribeck curve with labelled axes (mu vertical, viscosity x speed / load horizontal) and mark the three zones plus the minimum. It is the most repeated diagram in this paper - practise until you can draw it in 60 seconds with the regime table written from memory.",
            },
            keyTerms: [
              { term: "Stribeck curve", definition: "Plot of friction coefficient against the bearing parameter viscosity x speed / load, displaying boundary, mixed and hydrodynamic regimes." },
              { term: "Film thickness ratio (lambda)", definition: "Minimum film thickness divided by composite surface roughness; the numeric regime classifier." },
              { term: "Elastohydrodynamic lubrication", definition: "Hydrodynamic film formation in concentrated contacts, combining elastic surface deformation with pressure-induced viscosity rise." },
            ],
            examQuestions: [
              {
                q: "Explain the regimes of lubrication with the help of the Stribeck curve. Show the axes, label the zones, indicate where wear is worst, and explain what elastohydrodynamic lubrication is and where it occurs.",
                marks: 7,
                outline: [
                  "Define the regimes by film completeness and the lambda thresholds.",
                  "Draw and label the Stribeck curve (mu versus viscosity x speed / load).",
                  "Explain the falling branch: growing film share through the mixed regime.",
                  "Explain the rising branch: viscous shear and churning in full film.",
                  "Mark the minimum as the transition; note the mixed regime gives maximum wear.",
                  "Describe boundary films: adsorption and EP reactions carrying the load.",
                  "EHL: concentrated contacts, 1-3 GPa, elastic plus piezoviscous effects; gears and rolling bearings.",
                ],
              },
              {
                q: "Why is the mixed lubrication regime the most damaging for surfaces?",
                marks: 3,
              },
              {
                q: "State the lambda-ratio thresholds separating the lubrication regimes.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Viscosity, viscosity index and lubricant properties",
            body: [
              "Viscosity is the property that buys film thickness. Newton's law defines dynamic (absolute) viscosity mu as the ratio of shear stress to shear rate, with units of Pa s (1 mPa s = 1 cP); kinematic viscosity nu = mu / density carries units of mm2/s (1 cSt) and is what capillary viscometers measure at 40 and 100 C. Both fall steeply with temperature - a mineral oil roughly halves every 10-12 C rise - and rise with pressure, the effect that powers EHL films. Data sheets quote kinematic viscosity at 40 C for ISO VG industrial grades and at 100 C for SAE engine grades, so always read the temperature with the number.",
              "The viscosity index (VI) measures resistance to that collapse: oils of VI 100 track the original reference oils, while VI 150+ grades hold their body across wide temperature swings. VI improvers - coiled polymers that expand as temperature rises - lift the VI, and their combination with a light base stock gives multigrades: SAE 20W-50 behaves as a 20-weight at cold cranking and a 50-weight at 100 C. Beyond viscosity the data sheet tells a story: pour point (lowest flow temperature), flash and fire points (safety and volatility), oxidation stability, demulsibility, foaming tendency, aniline point (seal compatibility) and the TAN/TBN acidity and reserve-alkalinity numbers later tracked in used-oil analysis.",
              "Property selection follows the application. Journal bearings want enough viscosity at operating temperature to keep the minimum film above the combined roughness with a margin; gears add extreme-pressure demands; hydraulic systems prize high VI and low pour point for outdoor service; turbine oils demand oxidation stability for years between changes. The engineer's workflow is fixed: estimate the operating temperature, choose the viscosity that gives the target film, then confirm VI, pour point and flash point fit the environment. Numbers worth memorising: water is about 1 cSt, ISO VG 46 is about 46 cSt at 40 C, and honey is of the order of 10,000 cP.",
            ],
            bullets: [
              "Dynamic mu (Pa s, cP) from Newton's law; kinematic nu = mu/rho (mm2/s, cSt) from capillary tests.",
              "Viscosity roughly halves every 10-12 C rise; pressure raises it - the engine of EHL.",
              "VI quantifies viscosity-temperature stability; VI improver polymers enable 20W-50 multigrades.",
              "Key data-sheet numbers: pour point, flash point, oxidation stability, demulsibility, aniline point, TAN/TBN.",
              "Grades: ISO VG at 40 C (industry), SAE at 100 C (engines); VG 46 is about 46 cSt at 40 C.",
            ],
            codeExample: {
              language: "python",
              caption: "Viscosity conversion and a Walther-chart interpolation.",
              code: `# Dynamic <-> kinematic viscosity
mu_mPa_s = 59.2       # dynamic viscosity at 40 C, mPa.s (cP)
rho = 870.0           # density at 40 C, kg/m3
nu_cSt = (mu_mPa_s / 1000.0) / rho * 1e6
print(f"nu = {nu_cSt:.1f} cSt  -> an ISO VG 68 oil")

# Walther equation: log10(nu + 0.7) is linear in log10(T_kelvin)
import math
def nu_at_T(nu40, nu100, T_C):
    T1, T2 = 313.15, 373.15                     # 40 C and 100 C in K
    y1 = math.log10(nu40 + 0.7)
    y2 = math.log10(nu100 + 0.7)
    slope = (y2 - y1) / (math.log10(T2) - math.log10(T1))
    y = y1 + slope * (math.log10(T_C + 273.15) - math.log10(T1))
    return 10 ** y - 0.7

print(f"viscosity at 60 C: {nu_at_T(68.0, 8.7, 60.0):.1f} cSt")
`,
            },
            diagram: {
              kind: "compare",
              title: "Monograde versus multigrade",
              caption: "Same hot grade, very different cold behaviour - the VI improver at work.",
              left: {
                heading: "SAE 50 monograde",
                items: [
                  "VI about 95: steep thinning with temperature",
                  "Heavy at cold crank - start-up wear and drag",
                  "No polymer to shear down",
                  "Simple, cheap, very stable in service",
                  "Suited to steady, warm environments",
                ],
              },
              right: {
                heading: "SAE 20W-50 multigrade",
                items: [
                  "VI about 140: much flatter viscosity curve",
                  "Flows at cold crank like a 20-weight",
                  "VI improver polymer can shear down over time",
                  "One fill covers a wide climate range",
                  "The road-engine standard",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "The classic numerical slip",
              body: "Mixing cP and cSt. Convert through density: nu = mu / rho, so an oil of dynamic viscosity 59 mPa.s and density 870 kg/m3 has kinematic viscosity 68 cSt, not 59. Show the division in every numerical or surrender the method marks.",
            },
            keyTerms: [
              { term: "Dynamic viscosity", definition: "Shear stress per unit shear rate (Pa s); 1 mPa s = 1 cP; the quantity in Newton's law of viscosity." },
              { term: "Kinematic viscosity", definition: "Dynamic viscosity divided by density (mm2/s; cSt), measured by capillary viscometers at 40 and 100 C." },
              { term: "Viscosity index", definition: "Empirical scale for viscosity change with temperature; higher VI means a flatter viscosity-temperature curve." },
            ],
            examQuestions: [
              {
                q: "Define dynamic and kinematic viscosity with units and their relation. Discuss the effect of temperature and pressure on viscosity, define viscosity index, and explain how multigrade oils achieve wide-temperature performance.",
                marks: 7,
                outline: [
                  "Newton's law: tau = mu du/dy; dynamic viscosity in Pa s and cP.",
                  "Kinematic nu = mu / rho, units cSt; capillary measurement at 40 and 100 C.",
                  "Temperature effect: roughly halving every 10-12 C; Walther chart representation.",
                  "Pressure effect: exponential rise - the key to EHL films.",
                  "VI definition and the reference-oil anchors of the scale.",
                  "VI improvers: polymer coils expanding with temperature; the 20W-50 explanation.",
                  "Selection example: choosing ISO VG 46 for a 1500 rpm motor bearing.",
                ],
              },
              {
                q: "What do the two numbers in SAE 20W-50 denote?",
                marks: 3,
              },
              {
                q: "State the SI unit and one practical unit of dynamic viscosity.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Lubricant additives",
            body: [
              "Base stocks alone - mineral Groups I-III or synthetics such as PAO and esters - cannot defend a modern machine. Additive packages, up to about 20 percent by volume, convert base oil into a task-specific lubricant, and each additive targets one failure chemistry: oxidation, surface attack, deposit formation, foam, water emulsification or viscosity collapse. Formulators balance the package because additives interact: an EP additive can shorten oxidation life, a detergent can emulsify water that a demulsifier is trying to shed, and ZDDP's surface film competes directly with friction modifiers for the same real estate.",
              "Learn the classes with their mechanisms. VI improvers and pour-point depressants work in the bulk: polymer coils expand with heat, and wax-crystal modifiers keep the oil pumpable in cold. Antioxidants (hindered phenols, aromatic amines) interrupt the radical chain of oxidation. At the surface: anti-wear agents, above all ZDDP, decompose at contact temperature into a glassy iron-zinc-phosphate tribofilm that shears sacrificially; extreme-pressure additives (sulfurized fats, phosphorus and chlorinated compounds) react only at hot asperity tips to prevent scuffing and welding. Detergents neutralize acid and keep surfaces clean; dispersants hold soot in suspension; corrosion inhibitors, antifoams, demulsifiers and metal deactivators complete the team.",
              "Additives make oil analysis meaningful and used-oil management mandatory. Spectrometric analysis reads additive metals - zinc, phosphorus, calcium, magnesium - to confirm the right oil is in service and that depletion is not occurring; TBN tracks reserve alkalinity in engine oils while TAN rises as oxidation proceeds. Compatibility rules follow from the chemistry: never mix engine oils with turbine oils, keep aggressive EP gear oils away from yellow metals unless certified, and check seal compatibility through the aniline point. Performance categories encode the whole package: API SN/SP and ILSAC for engines, ISO-L designations for industrial oils certify that a formulation passed the standard rig tests.",
            ],
            bullets: [
              "The additive package (up to about 20 percent) converts a base stock into an application lubricant.",
              "Bulk-acting: VI improvers, pour-point depressants, antioxidants, antifoams, demulsifiers.",
              "Surface-acting: ZDDP anti-wear tribofilms, EP reaction films, corrosion inhibitors, friction modifiers.",
              "Detergents neutralize acid and clean; dispersants suspend soot - the engine-oil backbone pair.",
              "ZDDP is dual-duty - anti-wear film plus secondary antioxidant - a favourite exam fact.",
            ],
            table: {
              caption: "Additive classes at a glance.",
              headers: ["Additive", "Job", "Typical chemistry"],
              rows: [
                ["VI improver", "keep viscosity flatter with temperature", "olefin copolymer (OCP) polymers"],
                ["Antioxidant", "stop the radical chain of oxidation", "hindered phenols, aromatic amines"],
                ["Anti-wear (ZDDP)", "sacrificial glassy tribofilm", "zinc dialkyldithiophosphate"],
                ["EP additive", "prevent scuffing at hot spots", "sulfurized fats, phosphate esters"],
                ["Detergent", "neutralize acids, prevent lacquer", "overbased calcium/magnesium sulfonates"],
                ["Dispersant", "keep soot and sludge suspended", "ashless succinimide polymers"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Sorting additives: bulk vs surface, physical vs chemical",
              caption: "Place every additive on this grid and the syllabus stops being a list.",
              axes: { x: "Acts in the oil bulk -> Acts at the surface", y: "Physical function -> Chemical function" },
              quadrants: [
                { label: "VI improvers, antifoams, PPDs", note: "bulk + physical: modify flow behaviour" },
                { label: "Friction modifiers", note: "surface + physical: adsorbed soap films" },
                { label: "Antioxidants, metal deactivators", note: "bulk + chemical: stop oxidation chains" },
                { label: "ZDDP, EP agents, corrosion inhibitors", note: "surface + chemical: react to form films" },
              ],
            },
            callout: {
              type: "exam",
              title: "AW versus EP",
              body: "Draw the temperature ladder: anti-wear additives activate first at moderate loads, forming the tribofilm; EP additives take over at higher contact temperature with faster, more aggressive chemistry. One sentence - guaranteed marks, and it explains why gear oils carry both.",
            },
            keyTerms: [
              { term: "ZDDP", definition: "Zinc dialkyldithiophosphate - the anti-wear/antioxidant workhorse forming a sacrificial phosphate glass film in loaded contacts." },
              { term: "Extreme-pressure additive", definition: "Sulfur/phosphorus chemistry that reacts at hot asperity contacts to prevent scuffing and seizure." },
              { term: "Detergent", definition: "Overbased metal soap that neutralizes acidic products and keeps engine surfaces clean." },
            ],
            examQuestions: [
              {
                q: "Classify lubricant additives with function, mechanism and example. Explain the difference between anti-wear and extreme-pressure action, and list the additives used to control oxidation and deposits.",
                marks: 7,
                outline: [
                  "Purpose of additives; typical treat rates up to about 20 percent.",
                  "Bulk class: VI improver, pour-point depressant, antifoam, demulsifier - mechanism of each.",
                  "Antioxidants: radical-chain interruption (phenols and amines).",
                  "AW: ZDDP tribofilm - glassy iron-zinc-phosphate, sacrificial shear.",
                  "EP: reaction at hot spots; sulfur-phosphorus chemistry; yellow-metal caution.",
                  "Detergent/dispersant pair for engines, with the TBN connection.",
                  "Interactions and depletion - why used-oil analysis tracks additive metals.",
                ],
              },
              {
                q: "Why is ZDDP called a dual-function additive?",
                marks: 2,
              },
              {
                q: "State the function of a dispersant and how it differs from that of a detergent.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Grease and solid lubricants",
            body: [
              "Grease is not thick oil - it is a two-phase structure: base oil (70-95 percent), a thickener that holds the oil in a sponge-like network, and additives. Soaps of lithium, calcium and sodium dominate (lithium complex leads the market for its heat and water balance); non-soap thickeners include polyurea (electric motors), organo-clay and silica for high temperature. Consistency - the resistance to deformation - is graded by worked penetration on the NLGI scale from 000 (semi-fluid) through 2 (the multipurpose default) to 6 (brick-hard). In service the thickener never lubricates: the oil bleeds out of the network into the contact and does all the work.",
              "Choose grease where oil will not stay: vertical-shaft bearings, sealed-for-life units, and dirty or wet sites needing a dirt-excluding collar. Grease seals, cushions and simplifies - but it cools poorly because nothing circulates, churning limits its speed (respect the DN speed factor), and it demands disciplined relubrication: overfilling a fast bearing causes overheating as surely as starving it. Grease-life charts set relubrication intervals from speed, temperature and bearing size; as working rules, fill 30-50 percent of the free space in a high-speed bearing and run at least 30-50 C below the dropping point of the thickener.",
              "Solid lubricants step in where liquids fail: vacuum, cryogenics, very high temperature, and clean or food environments. The lamellar solids - graphite and molybdenum disulfide - share layered crystal structures whose planes shear easily; graphite needs adsorbed moisture or vapour to lubricate and fails in dry vacuum, while MoS2 works in vacuum and up to roughly 400 C in air before oxidizing. PTFE gives very low friction at modest loads; soft metals (silver, lead, gold) plate low-shear films for space mechanisms. Applications include bonded dry films, self-lubricating bronze-graphite bushings, and MoS2 dry films on fasteners and space hardware.",
            ],
            bullets: [
              "Grease = base oil + thickener (soap or non-soap) + additives; the thickener holds oil, it never lubricates.",
              "NLGI consistency numbers come from worked penetration; NLGI 2 is the multipurpose default.",
              "Strengths: stays put, seals out dirt, suits sealed-for-life designs. Limits: cooling, speed (DN), relubrication discipline.",
              "Fill rule 30-50 percent of free volume; service temperature well below the dropping point.",
              "Lamellar solids: graphite (needs vapour, fails in vacuum) versus MoS2 (vacuum-capable, to about 400 C in air).",
            ],
            table: {
              caption: "Solid lubricants compared.",
              headers: ["Solid", "Why it works", "Limitation", "Best niche"],
              rows: [
                ["Graphite", "lamellar planes shear; needs adsorbed vapour", "fails in dry vacuum; oxidizes in hot air", "high-temperature conveyors, dies"],
                ["MoS2", "lamellar shear without vapour", "oxidizes above about 400 C in air", "vacuum, space, dry-film coatings"],
                ["PTFE", "very low cohesive shear strength", "soft - low load capacity, cold flow", "low-load, clean and food service"],
                ["Soft metals (Ag, Pb, Au)", "low-shear metallic film", "costly, low hardness", "space mechanisms, threaded fasteners"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Grease versus oil lubrication",
              caption: "Pick the delivery mechanism before picking the grade.",
              left: {
                heading: "Grease",
                items: [
                  "Stays put - no circulation circuit needed",
                  "Seals against dirt and water entry",
                  "Poor heat removal (no flow)",
                  "Speed-limited by churning (DN factor)",
                  "Best for: sealed bearings, vertical shafts",
                ],
              },
              right: {
                heading: "Oil",
                items: [
                  "Flows: carries heat and debris away",
                  "Filtration and monitoring are possible",
                  "Needs containment: sump, seals, pump",
                  "Higher speed capability",
                  "Best for: gearboxes, high-speed spindles",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Three NLGI anchors",
              body: "Remember 000 (semi-fluid, for labyrinth-filled gearboxes), 2 (the standard bearing grease) and 6 (a brick). Pair them with the dropping-point rule - run at least 50 C below it - and you can answer most grease-selection questions in two lines.",
            },
            keyTerms: [
              { term: "NLGI consistency number", definition: "Grade from worked penetration ranking grease stiffness from 000 (semi-fluid) to 6 (block-hard)." },
              { term: "Thickener", definition: "Soap or non-soap network (lithium, calcium, polyurea, clay) that holds base oil and gives grease its structure." },
              { term: "Dropping point", definition: "Temperature at which grease liquefies under test; service temperature must sit well below it." },
            ],
            examQuestions: [
              {
                q: "Describe the composition, properties and advantages of grease as a lubricant. Explain NLGI numbers and the factors governing grease selection and relubrication intervals for a rolling bearing.",
                marks: 7,
                outline: [
                  "Composition: base oil 70-95 percent, thickener, additives - the oil does the lubricating.",
                  "Thickener families: lithium/calcium soaps, complexes, polyurea, clay - their water and heat character.",
                  "NLGI consistency scale and the common grades (2, 1, 000).",
                  "Dropping point and the 50 C margin rule.",
                  "Advantages: retention, sealing, simplified housing. Limitations: cooling and churning.",
                  "DN speed-factor check; fill 30-50 percent of free space.",
                  "Relubrication interval from speed and temperature charts; the over-greasing hazard.",
                ],
              },
              {
                q: "Why does graphite fail as a lubricant in vacuum while MoS2 performs well?",
                marks: 3,
              },
              {
                q: "Define the dropping point of a grease.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Lubrication systems and lubricant selection",
            body: [
              "Delivering the lubricant is engineering in itself. Total-loss systems feed once and let the lubricant pass through: manual grease guns and cups, wick and drip feed, and mist or aerosol generators. Self-contained baths splash or fling oil from a sump (gearboxes, engine crankcases) or lift it on rings and chains riding the shaft of a plain bearing. Circulating systems pump oil from a tank through coolers and filters to the lubrication points and back - the answer wherever heat rejection, filtration or metering matters. Centralized grease systems - single-line, dual-line or progressive-block - meter grease automatically to dozens of points from one station.",
              "Selection logic starts with the component (journal bearing, rolling bearing, gear mesh, chain, slide), then quantifies speed, load and generated heat. High speed and high heat force circulating oil; low-speed, point-of-use needs suit hand greasing; long distribution runs with many points favour centralized systems. The lubricant choice nests inside the delivery choice: viscosity comes from the film calculations of Units II and III, grease is chosen where residence is needed, and mist serves bearings too fast for grease churning but not demanding enough for jet oil. Safety and contamination constraints finish the matrix: food-grade registration, fire-resistant fluids (phosphate esters, water-glycol) and washdown resistance.",
              "Storage, handling and contamination control decide whether a good scheme stays good. Keep containers closed and labelled, store upright, rotate stock first-in-first-out, dedicate transfer containers to one lubricant each, and never top up with unverified product - cross-mixing can destroy demulsibility or collapse a grease structure. Cleanliness is now a number: ISO 4406 codes (for example 18/16/13) count particles above 4, 6 and 14 micrometres, and target codes are set per component class. Sampling valves on return lines, desiccant breathers on tanks, and filter carts for every transfer complete the discipline that TPM later hands to operators as autonomous maintenance.",
            ],
            bullets: [
              "System families: total-loss, self-contained (splash, ring), circulating (pump-cool-filter), centralized grease, mist.",
              "Drivers of the choice: heat rejection, speed, number of points, metering accuracy, contamination exposure.",
              "Viscosity first (film), then delivery: oil circulates and cools, grease stays and seals.",
              "Contamination control: ISO 4406 counts, dedicated containers, desiccant breathers, filter carts.",
              "Storage discipline: labelled, upright, first-in-first-out, no unverified top-ups.",
            ],
            table: {
              caption: "Lubrication system selection.",
              headers: ["System", "Supply", "Cooling", "Typical use"],
              rows: [
                ["Hand grease gun / cups", "total loss", "none", "low-speed motors, couplings, remote points"],
                ["Splash / bath", "self-contained", "moderate (sump)", "gearboxes, small compressors"],
                ["Ring or disc feed", "self-contained", "limited", "plain bearings of large motors"],
                ["Forced circulation", "pumped loop", "excellent (cooler)", "turbines, presses, large gear sets"],
                ["Centralized grease", "metered network", "none", "plant-wide bearing points, steel mills"],
                ["Oil mist / aerosol", "total loss", "some", "high-speed spindles, pump frames"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Choosing the lubrication scheme",
              caption: "Six questions that walk from duty to delivery.",
              steps: [
                { label: "List the duty: speed, load, temperature, environment", note: "and the heat to be rejected" },
                { label: "Set the target film and viscosity", note: "journal, gear or bearing method" },
                { label: "Choose oil or grease", note: "residence, cooling, sealing needs" },
                { label: "Pick the feed system", note: "total loss vs self-contained vs circulated" },
                { label: "Set cleanliness targets", note: "ISO 4406 code, breathers, filters" },
                { label: "Write the route and schedule", note: "intervals, quantities, ownership" },
              ],
            },
            callout: {
              type: "warning",
              title: "Two field killers",
              body: "Over-greasing - fill a high-speed bearing completely full and it cooks itself through churning - and cross-mixing lubricants during top-up. Both are prevented by written routes, tagged containers and fill-quantity marks: the cheapest reliability money can buy.",
            },
            keyTerms: [
              { term: "Splash lubrication", definition: "Self-contained system in which rotating parts fling sump oil into bearings and galleries (gearboxes, crankcases)." },
              { term: "DN factor", definition: "Speed parameter - bearing bore (mm) times speed (rpm) - used to set grease speed limits and relubrication intervals." },
              { term: "ISO 4406", definition: "Three-number particle-count cleanliness code at 4, 6 and 14 micrometre sizes used to specify oil cleanliness." },
            ],
            examQuestions: [
              {
                q: "With sketches, describe total-loss, self-contained and circulating lubrication systems. State the advantages and limitations of each and the factors that decide the choice among them.",
                marks: 7,
                outline: [
                  "Define the three families by whether lubricant is recovered.",
                  "Total loss: hand feed, wick, drip, mist - simple, no recovery, environmental care.",
                  "Self-contained: splash and ring-oiled - sketch the ring lift; sump cooling limits.",
                  "Circulating: pump, tank, filter, cooler, metering - heat rejection and cleanliness.",
                  "Centralized grease: single-line and progressive blocks - many points, one station.",
                  "Selection drivers: speed, heat, point count, contamination, safety.",
                  "A worked choice: a 1500 kW gearbox gets circulating oil with fine filtration.",
                ],
              },
              {
                q: "Why is splash lubrication unsuitable for high-speed gear sets?",
                marks: 3,
              },
              {
                q: "What is measured by the DN factor and where is it used?",
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
      title: "Bearings and Condition Monitoring",
      summary:
        "Where the theory earns its keep: Reynolds' equation, the Sommerfeld number and Petroff friction for journal bearings; load ratings and L10 life for rolling bearings; seals, gaskets and failure-mode analysis; and the condition-monitoring toolkit - vibration spectra with bearing defect frequencies, oil analysis with ferrography, and thermography - that turns failure physics into early warning.",
      chapter: {
        number: "03",
        title: "Bearings, Seals and Monitoring",
        intro:
          "Unit III applies Units I and II to the components that actually fail. Section 3.1 develops the hydrodynamic film of the journal bearing; 3.2 rates rolling bearings and their fatigue life; 3.3 adds seals, gaskets and bearing failure analysis; 3.4 and 3.5 build the monitoring toolkit - vibration first, then oil analysis, wear debris and thermography.",
        inOneBreath:
          "A journal bearing drags oil into a converging wedge governed by Reynolds' equation and summarized by the Sommerfeld number, with Petroff friction and oil whirl as exam regulars; rolling bearings are rated by C and live L10 = (C/P)^p revolutions with p = 3 for balls and 10/3 for rollers; seals divide into contact (lip, face) and non-contact (labyrinth) types while gaskets span fibre to spiral-wound; vibration spectra diagnose unbalance at 1x, misalignment at 2x and bearing defects at BPFO and BPFI confirmed by envelope analysis; and oil analysis with ferrography plus thermography complete the early-warning system.",
        sections: [
          {
            number: "3.1",
            title: "Hydrodynamic journal bearings and the Reynolds equation",
            body: [
              "A journal bearing lets a shaft float on its own oil. At rest the journal sits on the bearing at bottom dead centre; as rotation begins, oil is dragged into the converging clearance between journal and bush, and wedge action pressurizes the film until it lifts the shaft, which settles into an eccentric position described by the eccentricity ratio epsilon = e/(radial clearance) and the attitude angle. The pressure field peaks just upstream of the minimum film thickness hmin. The load the film can carry grows with speed, viscosity and the square of the diameter-to-clearance ratio, and shrinks with the unit load on the projected area.",
              "The governing statement is the Reynolds equation. In words: the divergence of the pressure-driven flow equals the wedge action of the moving surface - formally d/dx(h^3 dp/dx) + d/dz(h^3 dp/dz) = 6 U dh/dx, plus squeeze terms when the film thickness changes with time. It follows from thin-film, laminar, Newtonian flow with no slip and negligible inertia. The dimensionless grouping that falls out is the Sommerfeld number S = (r/c)^2 x mu Ns / p, which fixes eccentricity, hmin and friction for a given length-to-diameter ratio; Petroff's estimate f = 2 pi^2 (r/c)^2 x mu Ns / p gives the friction of a lightly loaded (concentric) journal and is the classic quick check.",
              "Design practice reads charts built from the equation (the Raimondi-Boyd series): pick clearance ratio c/r near 0.001-0.002, L/D from 0.5 to 1.5, choose a viscosity for the expected operating temperature, then verify that hmin exceeds the combined roughness plus a dirt margin - typically 10-20 micrometres for medium machines - and close the loop with a heat balance so the assumed viscosity is self-consistent. Failure modes are physical: wiping of the white metal from overheating or debris, and hydrodynamic instability - oil whirl at just under half shaft speed, which can lock into oil whip at the first critical. Cures include lobed (lemon) bores and tilting pads that break up the circumferential wedge.",
            ],
            bullets: [
              "Wedge principle: the rotating journal drags oil into a converging clearance; pressure lifts the shaft.",
              "Key geometry: eccentricity ratio eps = e/c, attitude angle, minimum film thickness hmin.",
              "Reynolds equation links pressure-driven flow (h^3 terms) to the wedge term 6 U dh/dx.",
              "Sommerfeld S = (r/c)^2 mu Ns / p sets bearing behaviour; Petroff gives concentric friction.",
              "Instabilities: oil whirl (about 0.48x speed) and oil whip - cured by lobed or tilting-pad bores.",
            ],
            table: {
              caption: "Journal bearing design quick numbers.",
              headers: ["Parameter", "Typical range", "Why it matters"],
              rows: [
                ["Clearance ratio c/r", "0.001-0.002", "too tight overheats, too loose drops hmin"],
                ["L/D ratio", "0.5-1.5", "short bearings flow more oil and run cooler, but carry less"],
                ["hmin", "10-25 um", "must exceed composite roughness plus a dirt margin"],
                ["Unit load p", "0.5-2.5 MPa", "the film carries it only with matching viscosity and speed"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How the hydrodynamic film builds",
              caption: "From standstill to full film in five states - wear lives in the first two.",
              steps: [
                { label: "Shaft at rest", note: "metal-to-metal at the bottom of the bush" },
                { label: "Breakaway and climb", note: "oil dragged in, partial contact" },
                { label: "Wedge pressurizes", note: "converging film generates pressure" },
                { label: "Journal lifts to equilibrium", note: "load balances film pressure, eccentricity set" },
                { label: "Full-film operation", note: "attitude angle and hmin stabilize" },
              ],
            },
            callout: {
              type: "exam",
              title: "Three derivations RGPV loves",
              body: "State the Reynolds equation with its assumptions; state Petroff's equation; define the Sommerfeld number and sketch the bearing-characteristic curve (friction versus S, with its minimum). Practise all three as one connected story and any of them becomes a gift question.",
            },
            keyTerms: [
              { term: "Sommerfeld number", definition: "Dimensionless group S = (r/c)^2 x mu Ns / p that determines eccentricity, film thickness and friction of a journal bearing." },
              { term: "Eccentricity ratio", definition: "Journal eccentricity divided by radial clearance, eps = e/c; 0 is concentric, 1 is touching." },
              { term: "Oil whirl", definition: "Sub-synchronous film instability near half shaft speed; cured by lobed or tilting-pad bearings." },
            ],
            examQuestions: [
              {
                q: "State (or derive with full assumptions) the Reynolds equation for a journal bearing. Define the Sommerfeld number, sketch the bearing characteristic curve, and describe how minimum film thickness is ensured in design.",
                marks: 7,
                outline: [
                  "Assumptions: laminar, Newtonian, thin film, negligible inertia and body forces, no slip, constant viscosity.",
                  "State the equation: d/dx(h^3 dp/dx) + d/dz(h^3 dp/dz) = 6 U dh/dx.",
                  "Interpret the terms: pressure flow versus wedge flow; the h^3 sensitivity.",
                  "Long-bearing and short-bearing approximations.",
                  "Sommerfeld number definition and its role as the design variable.",
                  "Bearing characteristic curve sketch: friction coefficient versus S with the minimum.",
                  "Design loop: assume temperature, choose viscosity, verify hmin and the heat balance.",
                ],
              },
              {
                q: "What is oil whirl, at what frequency does it appear, and give two cures.",
                marks: 3,
              },
              {
                q: "Write Petroff's equation and state when it applies.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Rolling contact bearings: load ratings and L10 life",
            body: [
              "A rolling bearing replaces sliding with rolling: balls or rollers run between hardened raceways, guided by a cage. Deep-groove ball bearings take radial plus modest axial load at high speed; angular-contact types carry one-way thrust; cylindrical rollers carry pure radial load at higher capacity; tapered rollers handle combined loads; spherical rollers tolerate misalignment; thrust versions take pure axial load. Compared with journal bearings they start with low friction, need no hydrodynamic build-up, and seal easily - but they are rigid, noisy, and their subsurface stresses mean they always fatigue eventually.",
              "Contact stresses are Hertzian, reaching 1-3 GPa just below the surface where subsurface shear initiates the spalling that defines rolling-bearing life. The standardized measure is L10: the life at which 10 percent of identical bearings fail, tied to the basic dynamic load rating C - the load giving one million revolutions of L10 life. The load-life law is L10 = (C/P)^p millions of revolutions with p = 3 for balls and 10/3 for rollers, where P is the equivalent dynamic load P = X Fr + Y Fa combining radial and axial parts. In hours: L10h = (10^6 / 60 n)(C/P)^p; adjusted life multiplies by a1 (reliability) and a23 (material and lubrication quality, where lambda matters).",
              "Most rolling bearings never reach their calculated fatigue life - the environment kills them early, and the raceway is the witness. Forensic signatures: spalling (genuine fatigue), true brinelling (overload dents from static shock or hammering), false brinelling (polished depressions from vibration of a stationary bearing - think transport), fluting (washboard ridges from electric current passage, common on VFD-driven motors), smearing (skidding of lightly loaded rollers) and discoloration from wrong or cooked lubricant. Installation is the other killer: wrong fits creep the inner race, misalignment saws the outer race, and over-greasing cooks high-speed bearings. The fatigue math is easy; keeping the bearing alive is housekeeping.",
            ],
            bullets: [
              "L10 = life at which 10 percent of a bearing population fails; C = load for an L10 of one million revolutions.",
              "Life law: L10 = (C/P)^p million revs, p = 3 balls, 10/3 rollers; in hours divide by 60 n.",
              "Equivalent load P = X Fr + Y Fa from catalogue tables using Fa/Fr and the contact angle.",
              "Adjusted life: a1 reliability factor (0.62 at 95 percent), a23 material-lubrication factor.",
              "Field killers before fatigue: contamination, misalignment, fits, false brinelling, fluting, over-greasing.",
            ],
            codeExample: {
              language: "python",
              caption: "Bearing life in hours, with a reliability adjustment.",
              code: `def l10_hours(C, P, n_rpm, roller=False):
    p = 10.0 / 3.0 if roller else 3.0        # load-life exponent
    millions = (C / P) ** p                  # L10 in millions of revs
    return (1e6 / (60.0 * n_rpm)) * millions

C = 43600.0      # basic dynamic rating, N (a 6308-type bearing)
P = 4500.0       # equivalent dynamic load, N
n = 1500.0       # shaft speed, rpm

L10 = l10_hours(C, P, n)
print(f"L10 (90% survival): {L10:,.0f} hours")

a1_95 = 0.62     # reliability factor for 95% survival
print(f"L5  (95% survival): {a1_95 * L10:,.0f} hours")

# Sensitivity: doubling the load on a ball bearing cuts life 2^3 = 8x
print(f"Double-load life ratio: {l10_hours(C, 2*P, n) / L10:.3f}")
`,
            },
            diagram: {
              kind: "pipeline",
              title: "Rating a bearing in five stages",
              caption: "The sequence every catalogue question follows.",
              stages: [
                { label: "Find equivalent load P = X Fr + Y Fa", note: "use Fa/Fr and contact-angle tables" },
                { label: "Get basic dynamic rating C", note: "from the catalogue for the bore" },
                { label: "Compute L10 = (C/P)^p", note: "p = 3 or 10/3" },
                { label: "Convert to hours at speed n", note: "L10h = 10^6 x L10 / (60 n)" },
                { label: "Adjust and check", note: "a1 reliability, a23 lubrication, fits, speed limit" },
              ],
            },
            table: {
              caption: "Rolling bearing families.",
              headers: ["Type", "Load capability", "Misalignment", "Typical duty"],
              rows: [
                ["Deep-groove ball", "radial + light axial", "poor", "general purpose, motors"],
                ["Angular-contact ball", "radial + one-way axial", "poor", "pumps, spindles (in pairs)"],
                ["Cylindrical roller", "heavy radial", "very poor", "large motors, gearboxes"],
                ["Tapered roller", "combined, one-way axial", "moderate", "wheel hubs, gear boxes"],
                ["Spherical roller", "heavy radial + axial", "good", "vibrating screens, fans"],
              ],
            },
            callout: {
              type: "warning",
              title: "The exponent trap",
              body: "p = 3 for ball bearings, 10/3 for rollers - examiners swap them to catch rote answers. Quote the sensitivity too: doubling the load divides a ball bearing's life by 8, which is one line and one easy mark.",
            },
            keyTerms: [
              { term: "Basic dynamic load rating", definition: "Load C under which 90 percent of identical bearings survive one million revolutions." },
              { term: "L10 life", definition: "The life at which 10 percent of a bearing population is expected to have failed - the rating life." },
              { term: "Brinelling", definition: "Raceway dents: true brinelling from static overload; false brinelling from vibration of a stationary bearing." },
            ],
            examQuestions: [
              {
                q: "Define basic dynamic load rating and L10 life. A ball bearing with C = 43.6 kN carries an equivalent load of 4.5 kN at 1500 rpm. Calculate its L10 life in hours and the adjusted life for 95 percent reliability (a1 = 0.62).",
                marks: 7,
                outline: [
                  "Define C and L10 (10 percent failures, one million revolutions).",
                  "State L10 = (C/P)^p million revolutions; p = 3 for ball bearings.",
                  "Compute C/P = 9.69; cube it to about 909 million revolutions.",
                  "Convert to hours: L10h = 10^6 x 909 / (60 x 1500).",
                  "Result is about 10,100 hours.",
                  "Adjusted life L5 = a1 x L10h = 0.62 x 10,100, about 6,260 hours.",
                  "Comment on load sensitivity (double load = one-eighth life) and the a23 lubrication factor.",
                ],
              },
              {
                q: "Why is the load-life exponent 10/3 for roller bearings instead of 3?",
                marks: 3,
              },
              {
                q: "Distinguish between true and false brinelling.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Seals, gaskets and bearing failure analysis",
            body: [
              "Seals keep lubricant in and contamination out; gaskets seal between static flanges. Contact seals rub: the elastomer lip seal with its garter spring rides a hardened shaft surface and hydrodynamically pumps oil back under a micro-wedge; face (mechanical) seals run two lapped rings against each other under spring load with pressure balance - the pump and mixer standard. Non-contact seals leave a controlled running gap: labyrinths of nested ridges impose no friction and tolerate any speed - the spindle and turbo choice - while bushing and magnetic seals sit in between. O-rings seal statically and dynamically in grooves by elastic squeeze, sized with the squeeze-and-fill rules.",
              "Gaskets work by yielding into flange imperfections under bolt load: compressed fibre, elastomer sheet, PTFE, and - as pressure and temperature climb - spiral-wound metal-plus-filler construction, kammprofile or solid metal. Selection balances chemical compatibility, temperature and pressure cycling, flange loading and creep-relaxation; most leaks trace to under-torqued bolts, warped flanges or a used gasket re-installed. Seal selection is equally multi-variable: pressure and its direction, shaft speed and finish (lip seals want 0.2-0.8 um Ra with the correct lead), temperature, and elastomer compatibility - nitrile, FKM and PTFE each with their own chemical and thermal envelope.",
              "When a bearing fails, replacing the bearing fixes nothing. Surveys attribute the large majority of premature rolling-bearing failures to contamination, lubrication faults, misalignment and mounting damage rather than fatigue - and the raceway pattern is the witness. Spalling marks fatigue; frosted or dull raceways flag an inadequate film (lambda too low); a helical wear track flags misalignment; dent fields flag debris; washboard fluting flags stray current; polished false-brinelling spots flag transport vibration. A disciplined analysis - photograph, clean, read the raceway, check fits and alignment history, audit the lubrication route - feeds the root-cause methods of Unit V and the history records of Unit IV.",
            ],
            bullets: [
              "Contact seals: lip (garter spring) and mechanical face - rubbing, speed- and temperature-limited.",
              "Non-contact seals: labyrinths and bushings - frictionless, speed-unlimited, less tight.",
              "Gasket ladder: fibre < PTFE < spiral-wound < kammprofile/solid metal as pressure-temperature rises.",
              "Lip-seal hygiene: shaft finish 0.2-0.8 um Ra, correct lead, hardened and lubricated counter-surface.",
              "Raceway patterns diagnose causes: spalling, frosting, helical tracks, debris dents, fluting.",
            ],
            table: {
              caption: "Bearing failure signatures.",
              headers: ["Signature", "Likely cause", "Correction"],
              rows: [
                ["Spalling (flaky metal loss)", "normal or overload-accelerated fatigue", "verify life and loads; upsize"],
                ["Frosted / dull raceway", "marginal film, lambda below about 1.5", "raise viscosity or improve feed"],
                ["Helical wear path", "misalignment", "align to tolerance; check housing bores"],
                ["Debris dent rows", "ingress of hard particles", "seal upgrade, better filtration"],
                ["Washboard fluting", "stray electric current (VFD motors)", "insulated bearing or shaft-grounding ring"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Contact versus non-contact seals",
              caption: "The first split in every seal selection.",
              left: {
                heading: "Contact seals",
                items: [
                  "Lip seal: elastomer plus garter spring",
                  "Face seal: lapped ring pair under spring load",
                  "Tight sealing - handles pressure",
                  "Friction and wear: speed and temperature limits",
                  "Shaft needs a 0.2-0.8 um Ra hardened track"],
              },
              right: {
                heading: "Non-contact seals",
                items: [
                  "Labyrinth: staged ridges and drain pockets",
                  "Bushing / clearance seals",
                  "No rubbing: unlimited speed, no wear",
                  "Needs a grease barrier or purge",
                  "Accepts a leakage-by-design trade-off"],
              },
            },
            callout: {
              type: "exam",
              title: "False brinelling, the classic short",
              body: "A stationary bearing vibrating in transit (rail axles, shipped spares) polishes depressions at rolling-element spacing - false brinelling; true brinelling is hammered in by static overload or mounting abuse. One sketch with both dents earns the full marks.",
            },
            keyTerms: [
              { term: "Labyrinth seal", definition: "Non-contact seal of close-clearance ridges that repeatedly throttles leakage; grease-primed and frictionless." },
              { term: "Garter spring", definition: "Circular spring in a lip seal pressing the elastomer lip against the shaft with controlled load." },
              { term: "False brinelling", definition: "Polished depressions at rolling-element spacing caused by vibration of an unrotating bearing, e.g. during transport." },
            ],
            examQuestions: [
              {
                q: "Classify seals with sketches, giving construction and application of lip, face and labyrinth types. List four common causes of premature rolling-bearing failure and their raceway signatures.",
                marks: 7,
                outline: [
                  "Function split: rotary seals versus static gaskets - retain and exclude.",
                  "Lip seal sketch: elastomer, garter spring, air and oil sides; speed and finish limits.",
                  "Face seal: lapped faces, spring and pressure balance; pumps and mixers.",
                  "Labyrinth: non-contact, staged throttling, grease barrier; high-speed spindles.",
                  "Failure causes: contamination, starved or wrong lubrication, misalignment, mounting errors.",
                  "Signatures: debris dents, frosting, helical tracks, brinelling, fluting.",
                  "Close the loop: root-cause analysis and CMMS history capture.",
                ],
              },
              {
                q: "Why are labyrinth seals preferred for high-speed spindles?",
                marks: 3,
              },
              {
                q: "What is false brinelling and when does it occur?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Condition monitoring I: vibration analysis",
            body: [
              "Machines telegraph their health in vibration, and condition monitoring is the art of listening systematically. The technique menu: vibration analysis for rotating machinery, oil and wear-debris analysis for lubricated components, thermography for electrical and hot-spot surveys, acoustic emission for crack growth, motor-current signature for electrical faults, and performance trending for process equipment. Vibration dominates because faults localize to frequencies: unbalance, misalignment, looseness, bearing defects and gear damage each leave a spectral fingerprint that can be trended for weeks or months before functional failure - the P-F interval of Unit IV made measurable.",
              "Measurement choices matter: displacement probes for journal shafts, velocity for the 10-1000 Hz machine band (overall mm/s RMS levels judged against ISO 10816/20816 zones A to D), accelerometers for high-frequency bearing and gear-mesh energy. The FFT spectrum converts the time trace to frequency, and the diagnosis table is worth memorising: 1x dominant means unbalance; 2x radial with strong axial 1x means misalignment; 1x with many harmonics and a clipped time waveform means looseness; a subsynchronous line near 0.42-0.48x means oil whirl; gear-mesh frequency with sidebands means gear damage; and non-synchronous families mean bearing defects.",
              "Bearing defect frequencies follow from geometry: with Z rolling elements of diameter d on pitch diameter D and contact angle alpha, the cage frequency FTF, outer-race frequency BPFO, inner-race frequency BPFI and ball-spin BSF are computable, and a defect strikes its race at exactly these rates. Because early defect impacts excite structural resonances and hide in the raw spectrum, envelope (demodulation) analysis extracts the repetition rate of the impacts - the standard early-warning tool. Phase measurements separate unbalance (steady 90-degree lag) from misalignment, and orbit plots reveal rub and preload. A program then sets alarm bands, trends them, verifies with a second technology, and raises a planned work order.",
            ],
            bullets: [
              "Technique menu: vibration, oil analysis, thermography, acoustic emission, motor-current signature, performance trending.",
              "Transducer choice: displacement (journal shafts), velocity (ISO 10816/20816 overall zones), acceleration (high frequency).",
              "Signature table: 1x unbalance, 2x misalignment, sub-sync 0.42-0.48x oil whirl, harmonics + clipped waveform looseness.",
              "Defect frequencies FTF, BPFO, BPFI, BSF computed from Z, d, D and contact angle.",
              "Envelope (demodulation) analysis extracts early bearing-impact rates from resonances.",
            ],
            codeExample: {
              language: "python",
              caption: "Bearing defect frequencies from geometry.",
              code: `import math

n_rpm = 1750.0     # shaft speed
Z = 9              # balls
d = 7.94           # ball diameter, mm
D = 39.0           # pitch diameter, mm
alpha = 0.0        # contact angle, degrees (deep-groove ball)

fs = n_rpm / 60.0
r = (d / D) * math.cos(math.radians(alpha))

FTF  = 0.5 * fs * (1 - r)              # cage (train) frequency
BPFO = Z * 0.5 * fs * (1 - r)          # outer race defect
BPFI = Z * 0.5 * fs * (1 + r)          # inner race defect
BSF  = 0.5 * (D / d) * fs * (1 - r*r)  # ball spin

for name, f in [("FTF", FTF), ("BPFO", BPFO), ("BPFI", BPFI), ("BSF", BSF)]:
    print(f"{name:5s} {f:7.1f} Hz   = {f/fs:5.2f}x shaft")
`,
            },
            diagram: {
              kind: "pipeline",
              title: "The vibration diagnosis workflow",
              caption: "Six steps from transducer to work order.",
              stages: [
                { label: "Measure overall level", note: "ISO 20816 zone check" },
                { label: "Acquire spectrum and waveform", note: "consistent point, load and speed" },
                { label: "Match the signature table", note: "1x, 2x, sub-sync, defect families" },
                { label: "Confirm with phase / orbit / envelope", note: "separate the look-alikes" },
                { label: "Trend against baseline", note: "severity and rate of change" },
                { label: "Raise a planned work order", note: "before the P-F interval expires" },
              ],
            },
            table: {
              caption: "Vibration fault signatures.",
              headers: ["Frequency line", "Likely fault", "Confirming clue"],
              rows: [
                ["1x radial dominant", "unbalance", "steady phase, 90-degree lag"],
                ["2x radial + strong 1x axial", "misalignment", "phase across coupling near 180 degrees"],
                ["0.42-0.48x subsynchronous", "oil whirl", "journal bearing, load-dependent"],
                ["1x + harmonics, clipped waveform", "mechanical looseness", "directional, base-related"],
                ["Non-sync lines at BPFO/BPFI", "bearing defect", "matches geometry calculation"],
                ["Gear mesh + sidebands", "gear wear or crack", "sideband spacing = 1x shaft"],
              ],
            },
            callout: {
              type: "exam",
              title: "Memorise the signature table",
              body: "Examiners ask exactly this shape of question: 'a spectrum shows a dominant 2x radial component with high axial 1x - diagnose and state the confirmation test.' Answer: misalignment; confirm by phase across the coupling. Table first, every time.",
            },
            keyTerms: [
              { term: "Envelope analysis", definition: "Demodulation of high-frequency impact energy to reveal bearing-defect repetition rates hidden in the raw spectrum." },
              { term: "ISO 10816/20816 zones", definition: "Machine-condition bands A-D for overall vibration velocity, from new machine to damage risk." },
              { term: "BPFO", definition: "Ball-pass frequency, outer race - the rate at which rolling elements strike a defect on the outer race." },
            ],
            examQuestions: [
              {
                q: "Explain the objectives of condition monitoring. Describe vibration measurement and spectrum analysis, and list the characteristic signatures of unbalance, misalignment, looseness, oil whirl and bearing defects.",
                marks: 7,
                outline: [
                  "Definition and business case: P-F interval, planned intervention, avoided secondary damage.",
                  "Technique menu: vibration, oil, thermography, acoustic emission, current signature.",
                  "Transducers: displacement (journals), velocity (overall ISO zones), acceleration (high frequency).",
                  "FFT spectrum concept; units, resolution and trending.",
                  "Signature table: 1x unbalance, 2x misalignment, sub-sync whirl, harmonics looseness, defect frequencies.",
                  "Envelope analysis for early bearing damage; phase and orbit confirmation.",
                  "Program closure: alarm bands, second technology, planned work order.",
                ],
              },
              {
                q: "A spectrum shows a strong 2x radial component with high axial 1x. Diagnose the fault and state the confirmation test.",
                marks: 3,
              },
              {
                q: "Why is envelope analysis used for early bearing faults?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Condition monitoring II: oil analysis, ferrography, thermography",
            body: [
              "A used-oil sample is a blood test for a machine. Two questions get answered: is the lubricant still fit (viscosity, oxidation by TAN/TBN, water, additive metals, particle count) and what is the machine shedding (wear metals by atomic spectroscopy - iron from gears and shafts, chromium from rolling-bearing races, copper, lead and tin from bushings and bronze cages, aluminium from pistons, silicon as dirt ingress). The routine battery: viscosity at 40 C, water by crackle or Karl Fischer, particle count to an ISO 4406 code, spectrometric elemental scan and, for engine oils, infrared oxidation and nitration readings.",
              "Wear-debris morphology grades severity, chiefly by ferrography: a magnetic gradient deposits particles on a slide for microscope reading. Rubbing-wear platelets below about 15 micrometres are healthy; sliding wear with striations and larger platelets signals abusive load; cutting-wear chips (lathe-like spirals) prove abrasion, often from a failed seal letting grit in; spherical particles flag rolling-fatigue micro-cracks; severe sliding and laminar particles indicate imminent distress. Concentration trends (wear-particle concentration from direct-reading ferrography) matter more than single values. Note the physics limit: spectrometers only see particles below roughly 10 micrometres, so large debris needs ferrography or filter inspection - the technologies complement, never replace, each other.",
              "Thermography maps surface temperature remotely through infrared cameras; everything radiates, and honest readings demand a correct emissivity setting and awareness of reflected background. It excels at electrical panels (loose joints, unbalanced phases), refractory and insulation damage in furnaces and boilers, failing steam traps, blocked heat-exchanger passages, and hot bearings and belts - fast, non-contact, safe, full-field surveys while the plant runs. Its limits: surfaces only, load- and weather-dependent, emissivity errors on shiny metals. A mature program combines routes by criticality - vibration, oil, thermography - all trended in the CMMS with alarm limits, forming the condition-based trigger for the maintenance decisions of Unit IV.",
            ],
            bullets: [
              "Oil analysis answers two questions: lubricant health and machine wear (elemental metals).",
              "Routine battery: viscosity, water (crackle or Karl Fischer), ISO 4406 count, TAN/TBN, spectro-metals, IR.",
              "Wear-particle ladder: rubbing below 15 um (healthy) -> sliding, cutting, spheres (fatigue), laminar (crisis).",
              "Spectroscopy blind spot: particles above about 10 um - ferrography and filters cover the large debris.",
              "Thermography: emissivity-corrected IR mapping for electrical, refractory, steam and bearing hot spots.",
            ],
            table: {
              caption: "Oil test to diagnosis mapping.",
              headers: ["Test / finding", "Points to", "First action"],
              rows: [
                ["Fe + Cr rising together", "rolling-bearing wear", "vibration check, plan replacement"],
                ["Cu, Pb or Sn rising", "bronze cage or bushing wear", "inspect bearing, check assembly"],
                ["Silicon high with rising Al", "ingress of dirt or sand", "seal audit, filtration, breathers"],
                ["Water above 0.1 percent", "leak or condensation", "find source, purify, check demulsibility"],
                ["TAN rising, viscosity drifting", "oxidation or wrong oil", "shorten interval or change oil"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Acting on an abnormal oil report",
              caption: "Trend, confirm, then route the finding - never act on a single number.",
              start: "Oil report shows abnormal results",
              branches: [
                { label: "Wear metals rising with cutting particles", outcome: "abrasive wear: audit seals and filtration, schedule an inspection", good: false },
                { label: "Water plus sodium present", outcome: "coolant or wash-water ingress: find and fix the leak, purify the oil", good: false },
                { label: "Viscosity, TAN and metals all in trend", outcome: "machine healthy: extend the sampling interval with confidence", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Sample discipline",
              body: "Sample from the same point every time - the return line before the filter - at the same load and temperature. Trends from consistent samples catch faults; samples from scattered points and conditions produce noise that no interpretation can rescue.",
            },
            keyTerms: [
              { term: "Ferrography", definition: "Magnetic deposition and microscopy of wear particles from oil to grade machine wear severity." },
              { term: "Crackle test", definition: "Quick qualitative detection of free water in oil: a drop pops on a hot plate." },
              { term: "Emissivity", definition: "A surface's efficiency as a radiator (0 to 1); the correction that makes infrared temperature readings honest." },
            ],
            examQuestions: [
              {
                q: "Describe the tests of a used-oil analysis program and the information each provides. Explain ferrography particle classes and their significance, and state how thermography complements oil analysis.",
                marks: 7,
                outline: [
                  "Program goal: lubricant condition plus machine condition, trended to alarm limits.",
                  "Tests: viscosity, water (crackle, Karl Fischer), particle count ISO 4406, TAN/TBN, spectro-metals, infrared.",
                  "Element mapping: Fe/Cr for bearings and gears, Cu/Sn for bronze, Al for pistons, Si for dirt.",
                  "Ferrography principle: magnetic slide deposition and microscopy.",
                  "Particle ladder: rubbing, sliding, cutting, spheres, laminar; wear-particle-concentration trending.",
                  "Spectrometer size limit (about 10 um) - ferrography covers large debris.",
                  "Thermography: electrical, refractory and bearing hot spots; non-contact; emissivity caveat.",
                ],
              },
              {
                q: "What does a rising silicon level in used oil usually indicate, and what action follows?",
                marks: 3,
              },
              {
                q: "State two limitations of infrared thermography.",
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
      title: "Maintenance Engineering",
      summary:
        "The management half of the course: the strategy ladder from breakdown through preventive and condition-based to proactive maintenance, timed by the P-F curve; RCM's seven questions and TPM's eight pillars; planning versus scheduling and the work-order life cycle; spare-parts classification with EOQ and ABC-VED control; and the KPI engine - MTBF, MTTR, availability and OEE - run through a CMMS.",
      chapter: {
        number: "04",
        title: "Maintenance Strategy and Management",
        intro:
          "Unit IV converts physics into policy. Section 4.1 lays out the strategy spectrum and the P-F interval; 4.2 installs RCM and TPM as its analysis and culture engines; 4.3 covers planning, scheduling and the work-order life cycle; 4.4 manages spare parts with EOQ and classification matrices; 4.5 measures everything with MTBF, MTTR, availability and OEE inside a CMMS.",
        inOneBreath:
          "Maintenance strategies climb from run-to-failure through time-based prevention to condition-based prediction and proactive root-cause elimination, timed by the P-F interval and inspected at about half of it; RCM asks seven questions per asset while TPM answers with eight pillars built on 5S; planning prepares the what-and-how while scheduling books the when-and-who, measured by wrench time and schedule compliance; spares classify as consumables, repairables and insurance items controlled by EOQ and ABC-VED matrices; and performance is scored by MTBF, MTTR, availability and OEE in a CMMS that only pays when close-out data is honest.",
        sections: [
          {
            number: "4.1",
            title: "Maintenance strategies: from breakdown to proactive",
            body: [
              "Maintenance is the set of technical and administrative actions that keeps an asset performing its intended function - preserving availability, safety and asset life at acceptable cost. Four strategies form a spectrum. Corrective (breakdown or run-to-failure) maintenance fixes after failure; it suits cheap, redundant or non-critical items whose failure consequences are trivial. Preventive maintenance works on a calendar or usage basis: inspections, servicing and part replacement at fixed intervals whether or not the component needs them. Condition-based (predictive) maintenance intervenes when measured degradation crosses a threshold. Proactive maintenance goes further and eliminates root causes - contamination control, precision alignment, better specification - so the failure mode cannot even start.",
              "The trade-off is cost against risk. Pure prevention over-services healthy machines: intrusive overhauls of stable components introduce infant-mortality failures from assembly errors - reliability studies of civil aviation famously found that only a small fraction of failure modes actually benefit from fixed-interval overhaul, most being random in occurrence or better caught on condition. Pure correction gambles production, safety and secondary damage. The P-F curve explains condition-based timing: potential failure P - a detectable defect such as a vibration trend or an oil-metal rise - precedes functional failure F by the P-F interval; inspections at roughly half that interval guarantee detection, and earlier detection buys cheaper, better-planned corrections.",
              "Strategy assignment is asset-by-asset, driven by criticality and failure-mode behaviour - the output of the FMECA and RCM analysis in Unit V. High-criticality assets with detectable degradation get condition monitoring; age-dominated wear parts get scheduled restoration or discard; hidden functions (a standby pump, a protective relay) get failure-finding tests; low-criticality items may justifiably run to failure. The cost picture balances rising preventive spending against falling corrective spending, and the optimum mix minimizes total lifecycle cost - the subject of section 5.5. Mature plants therefore run a deliberate blend: predictive monitoring on critical rotating equipment, planned work on consumables, run-to-failure on the trivial tail.",
            ],
            bullets: [
              "Strategy ladder: corrective -> preventive (time or usage) -> condition-based (predictive) -> proactive (root-cause elimination).",
              "P-F curve: potential failure P, functional failure F; inspect at about half the P-F interval.",
              "Overhaul risk: fixed-interval intrusive work creates infant mortality for random-failure modes.",
              "Assignment follows criticality and failure pattern - the FMEA decides, not habit.",
              "The optimum blends strategies to minimize lifecycle cost, not to maximize maintenance activity.",
            ],
            table: {
              caption: "Strategy comparison.",
              headers: ["Strategy", "Trigger", "Strength", "Weakness"],
              rows: [
                ["Corrective (run-to-failure)", "functional failure", "zero planned cost, simple", "unplanned downtime, secondary damage, safety risk"],
                ["Preventive (time-based)", "calendar or usage interval", "plannable; catches wear-out modes", "over-maintenance; infant mortality from intrusive work"],
                ["Condition-based", "degradation threshold", "work only when needed; long warning", "instrumentation and skills investment"],
                ["Proactive", "root-cause elimination", "failures prevented, not just predicted", "engineering effort; design changes"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The maintenance maturity pyramid",
              caption: "Fewer, better decisions climbing from fire-fighting to design-out.",
              tiers: [
                { label: "Proactive / design-out", note: "eliminate root causes: contamination, alignment, specification" },
                { label: "Predictive (condition-based)", note: "monitor degradation; intervene on evidence" },
                { label: "Preventive (time-based)", note: "scheduled inspections and replacements" },
                { label: "Reactive (breakdown)", note: "run to failure and repair - where most plants start" },
              ],
            },
            callout: {
              type: "exam",
              title: "The P-F sketch",
              body: "Draw the P-F curve with labelled axes (condition versus time), mark P, F and the P-F interval, then state the half-interval inspection rule. The sketch appears almost every year and carries this section's easiest marks.",
            },
            keyTerms: [
              { term: "Preventive maintenance", definition: "Interval-based inspection and servicing intended to prevent failures before they occur." },
              { term: "Condition-based maintenance", definition: "Maintenance triggered when a measured condition (vibration, oil, temperature) crosses a threshold." },
              { term: "P-F interval", definition: "Time between detection of a potential failure P and the functional failure F; it sets inspection frequency." },
            ],
            examQuestions: [
              {
                q: "Explain corrective, preventive, predictive and proactive maintenance with advantages, disadvantages and suitable applications. Illustrate condition-based timing with the P-F curve and the inspection-interval rule.",
                marks: 7,
                outline: [
                  "Define maintenance and its four goals.",
                  "Corrective: definition, and when it is legitimate (non-critical, redundant items).",
                  "Preventive: interval logic; the risk of over-maintenance and infant mortality.",
                  "Predictive: condition measurement, thresholds, the P-F curve and the half-interval rule.",
                  "Proactive: root-cause elimination - contamination control, precision installation.",
                  "Application mapping by criticality with one example each.",
                  "Cost trade-off: minimization of total lifecycle cost.",
                ],
              },
              {
                q: "When is run-to-failure a legitimate strategy?",
                marks: 3,
              },
              {
                q: "Define the P-F interval and state the inspection rule based on it.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "RCM and TPM",
            body: [
              "Reliability-centred maintenance (RCM) grew from the 1960s airline industry - Nowlan and Heap's work, later codified as MSG-3 - and asks seven questions per asset: what are the functions and performance standards; in what ways can each function fail; what causes each functional failure; what happens when it fails; what does the failure matter (its consequence); what can be done to predict or prevent it; and what happens if no task is worth doing. Consequences classify as hidden (not evident to operators), safety or environmental, operational (production loss) and non-operational (repair cost only) - and the category, not the component's price, drives the task choice: failure-finding for hidden functions, mandatory prevention for safety, and economic choice for the rest.",
              "The decision diagram outputs one of: an on-condition task (inspect at intervals for detectable degradation), scheduled restoration or discard (for genuine wear-out), redesign where prevention is impossible - or run-to-failure when nothing pays. Total productive maintenance (TPM) is the parallel Japanese movement (Nippondenso, 1970s) that attacks losses through people: eight pillars built on the 5S foundation - autonomous maintenance (operators clean, inspect and lubricate their own equipment), planned maintenance, focused improvement (Kobetsu Kaizen teams eliminating chronic losses), quality maintenance, early equipment management, education and training, office TPM, and safety and environment. Its scoreboard is overall equipment effectiveness (section 4.5) driven toward zero breakdowns and zero defects.",
              "RCM and TPM interlock: RCM's analysis says what the right task is, and TPM's culture ensures daily tasks actually happen - an RCM schedule without operator ownership dies in the backlog, while TPM enthusiasm without criticality analysis wastes effort on unimportant machines. Implementation realities: RCM workshops can drown in paperwork, so restrict full analysis to critical assets and streamline the rest; TPM takes years of training and management persistence; both fail when production refuses downtime for prevention. Success metrics: falling breakdown hours, climbing schedule compliance, OEE growth and - the quiet proof - a shrinking ratio of emergency to planned work.",
            ],
            bullets: [
              "RCM seven questions: functions, functional failures, failure modes, effects, consequences, tasks, defaults.",
              "Consequence categories: hidden, safety/environmental, operational, non-operational - the category drives the task.",
              "Task options: on-condition, scheduled restoration, discard, redesign, or run-to-failure.",
              "TPM: eight pillars on a 5S base; autonomous maintenance and Kobetsu Kaizen are the engines.",
              "Interlock: RCM decides WHAT, TPM delivers WHO and culture - OEE is the shared scoreboard.",
            ],
            table: {
              caption: "TPM pillars and their payoffs.",
              headers: ["Pillar", "Core activity", "Typical KPI"],
              rows: [
                ["Autonomous maintenance", "operators clean-inspect-lubricate and restore basics", "defects found per route"],
                ["Planned maintenance", "condition monitoring, schedules, overhaul", "schedule compliance, MTBF"],
                ["Focused improvement", "cross-functional teams kill chronic losses", "OEE uplift per project"],
                ["Quality maintenance", "error-proofing toward zero defects", "defect rate"],
                ["Education and training", "skill matrix and multi-skilling", "certified operators"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The RCM decision cycle",
              caption: "Seven questions in a loop - analysis feeding execution and audit.",
              steps: [
                { label: "Define functions + standards", note: "primary, secondary, protective" },
                { label: "List functional failures", note: "what broken means per function" },
                { label: "Identify failure modes + causes", note: "FMEA-level detail" },
                { label: "Assess effects and consequences", note: "hidden / safety / operational / economic" },
                { label: "Select tasks or defaults", note: "on-condition, restore, discard, redesign, RTF" },
                { label: "Implement, audit, revise", note: "feedback from CMMS history" },
              ],
            },
            callout: {
              type: "exam",
              title: "List the seven verbatim",
              body: "RCM's seven questions are asked directly, and the four consequence categories follow them in order. Remember the logic they unlock: hidden failures need failure-finding tasks, and safety consequences force prevention or redesign - never economic trade-off.",
            },
            keyTerms: [
              { term: "RCM", definition: "Reliability-centred maintenance: the systematic seven-question analysis matching maintenance tasks to failure consequences." },
              { term: "Autonomous maintenance", definition: "TPM pillar in which operators perform and own cleaning, inspection and lubrication of their equipment." },
              { term: "Kobetsu Kaizen", definition: "TPM's focused-improvement pillar: small cross-functional teams eliminating chronic equipment losses." },
            ],
            examQuestions: [
              {
                q: "Explain the philosophy of reliability-centred maintenance. State its seven questions, describe the consequence categories and how they determine task selection, and contrast RCM with time-based preventive maintenance.",
                marks: 7,
                outline: [
                  "Origin: airline industry, Nowlan and Heap; focus on function, not component.",
                  "The seven questions listed in order.",
                  "Consequence categories: hidden, safety/environmental, operational, non-operational.",
                  "Hidden failures: failure-finding tasks; safety: mandatory prevention or redesign.",
                  "Task menu: on-condition, restoration, discard, redesign, run-to-failure default.",
                  "Contrast with fixed-interval PM: interval overhaul suits only wear-out modes.",
                  "Output feeds CMMS schedules; TPM supplies the execution culture.",
                ],
              },
              {
                q: "Expand the 5S of TPM and state the purpose of each S.",
                marks: 3,
              },
              {
                q: "What is autonomous maintenance and who performs it?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Maintenance planning and scheduling",
            body: [
              "Planning and scheduling are different jobs that fail separately. Planning decides what and how: converting an approved job into a complete work package - scope, method, labour estimate, parts list, special tools, drawings, permits and isolation requirements - prepared once per job type and reused. Scheduling decides when and who: placing planned work on a calendar against crew capacity, production windows and shared resources. The work order is the transaction that carries a job from request through screening, approval, planning, scheduling, execution and close-out with feedback; its history record is the raw material of every reliability analysis in the plant.",
              "Good planning multiplies craft output. A planned job with parts kitted, permits pre-arranged and the method written lets wrench time - the fraction of craft hours actually spent working with tools on the job - reach 50-60 percent, against roughly 20-35 percent for unplanned fire-fighting where the day evaporates into travel, permits and hardware hunting. Scheduling discipline: build the weekly schedule from the priority-ordered backlog, freeze it, measure schedule compliance, and protect it from interruption except for genuine emergencies. Shutdowns and turnarounds are planned as projects: scope freeze, critical-path schedules (network and bar charts), scaffold and permit staging, and daily progress control.",
              "Priority is a risk statement - likelihood of failure times consequence, tempered by production windows - not the seniority of whoever shouts loudest. The backlog is a leading indicator: healthy plants hold roughly two to four crew-weeks of ready work; a falling backlog starves the schedule while a rising one hides resource gaps or planning bottlenecks. Close-out quality decides the value of everything: actual hours, parts used, failure cause coded (ISO 14224-style hierarchies) and job-plan feedback. That data feeds Pareto analysis of bad actors, spare-parts decisions and the FMECA of Unit V - so the planner role stays separate from supervision, preparing tomorrow's work while today's is run.",
            ],
            bullets: [
              "Planning = what and how (the job package); scheduling = when and who (calendar and crews).",
              "Work-order life cycle: request, screening, approval, planning, scheduling, execution, close-out with feedback.",
              "Wrench time 50-60 percent planned versus 20-35 percent reactive - planning is the cheapest capacity.",
              "Priority = risk (likelihood x consequence) aligned to production windows, not requester seniority.",
              "Backlog of 2-4 crew-weeks is healthy; schedule compliance and close-out coding are the controlling KPIs.",
            ],
            table: {
              caption: "Planning artefacts.",
              headers: ["Artefact", "Contents", "Purpose"],
              rows: [
                ["Work order", "asset, problem, priority, approval, safety needs", "the controlling transaction and history record"],
                ["Job plan", "method steps, durations, skills, tools, drawings", "repeatable, safe, fast execution"],
                ["Weekly schedule", "jobs x days x crew", "commitment and compliance measure"],
                ["Shutdown plan", "scope, network and bar charts, permits, staging", "project-style control of turnarounds"],
                ["Close-out record", "hours, parts, cause codes, feedback", "reliability analytics and plan improvement"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The work-order life cycle",
              caption: "Six gates from request to an improved job plan.",
              stages: [
                { label: "Request and screen", note: "is it maintenance? a duplicate?" },
                { label: "Prioritize and approve", note: "risk = likelihood x consequence" },
                { label: "Plan the job package", note: "method, parts, tools, permits" },
                { label: "Schedule on the calendar", note: "crew capacity, production window" },
                { label: "Execute with LOTO and permits", note: "supervisor leads; planner stays off the tools" },
                { label: "Close out and feed back", note: "hours, cause code, plan updates" },
              ],
            },
            callout: {
              type: "tip",
              title: "The one-line distinction",
              body: "'Planning is preparing the job; scheduling is booking the job.' Add that planners must not be pulled into supervision - a planner picking up tools today costs the schedule its next ten jobs, because unprepared work is where wrench time dies.",
            },
            keyTerms: [
              { term: "Work order", definition: "The document and data record authorizing, describing and closing a maintenance job." },
              { term: "Wrench time", definition: "Percentage of craft hours actually spent working on the job; a proxy for planning quality." },
              { term: "Backlog", definition: "Ready, approved work awaiting scheduling; a leading indicator of crew balance (2-4 crew-weeks healthy)." },
            ],
            examQuestions: [
              {
                q: "Distinguish maintenance planning from scheduling. Describe the work-order life cycle with a flow diagram and explain how planning and scheduling practices raise wrench time and schedule compliance.",
                marks: 7,
                outline: [
                  "Definitions: planning (what and how) versus scheduling (when and who).",
                  "Work-order flow: request, screen, approve, plan, schedule, execute, close.",
                  "Job-plan contents: method, estimates, parts kitting, tools, permits, safety.",
                  "Weekly schedule construction from the priority backlog; freeze and compliance measurement.",
                  "Wrench time definition with planned versus reactive values.",
                  "Shutdown planning as a project: scope freeze, critical path, daily control.",
                  "Close-out data feeding KPIs and continuous improvement.",
                ],
              },
              {
                q: "Define wrench time and state a typical target.",
                marks: 2,
              },
              {
                q: "Why is backlog considered a leading indicator of maintenance health?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Spare parts management",
            body: [
              "Spares management balances two fears: capital tied up on shelves and a plant stopped for a missing part. Items classify three ways. By usage: consumables (fasteners, filters, seals) consumed by routine demand, and repairable or rotatable spares (pumps, gearboxes) that cycle through a repair pool. By strategy: insurance spares - long-lead, high-consequence items such as a transformer winding or a mill liner - stocked against rare events and justified by downtime cost rather than turnover. By criticality: VED - vital, essential, desirable. The art is matching the control policy to the class instead of treating every stock number the same way.",
              "The inventory mathematics is standard and examinable. The economic order quantity EOQ = sqrt(2 D S / H) balances ordering cost S against holding cost H for annual demand D. The reorder point covers lead-time demand plus safety stock, with safety stock z x sigma of lead-time demand for the chosen service level (z = 1.65 at 95 percent). ABC analysis splits items by annual value: A items - few in number, most of the value - get tight control and frequent review; C items - many and cheap - get min-max bins and loose control; B sits between. Combining ABC with VED sharpens the policy: a vital-but-cheap item still deserves guaranteed stock, while an expensive-but-merely-desirable one earns only economic review.",
              "Storage is reliability engineering too. Bearings live in their original sealed wrappers, stored flat, never dropped, never spun with compressed air; elastomers age on shelves, so date-code and rotate them; desiccant and vapour-phase corrosion inhibitors protect machined surfaces; standby equipment needs preservation schedules with periodic shaft rotation. Repairables cycle through the rotatable pool with mean time between repairs tracked and repair-versus-buy evaluated on total cost. Data discipline ties it together: every stock issue posts to a work order, obsolescence is reviewed with engineering, and CMMS min-max settings are re-tuned from consumption history - the same records that feed the economics of Unit V.",
            ],
            bullets: [
              "Classes: consumables vs repairables; working spares vs insurance spares; VED criticality.",
              "EOQ = sqrt(2DS/H) balances ordering against holding cost; ROP = lead-time demand + z x sigma safety stock.",
              "ABC: A items (about 70 percent of value, 10 percent of count) get tight control; C items get min-max bins.",
              "ABC x VED grid: vital-and-cheap is never allowed to stock out; costly-and-desirable is reviewed economically.",
              "Storage: sealed wrappers, date rotation for elastomers, VCI/desiccant, shaft-rotation preservation for standbys.",
            ],
            codeExample: {
              language: "python",
              caption: "EOQ and reorder point for a stored spare.",
              code: `import math

D = 48.0          # annual demand, units
S = 1500.0        # cost per order / setup
H = 900.0         # holding cost per unit per year

EOQ = math.sqrt(2.0 * D * S / H)
print(f"EOQ = {EOQ:.1f} units -> order {math.ceil(EOQ)} at a time")

lt_days = 60.0        # replenishment lead time
z = 1.65              # 95% service level
mu_daily = D / 365.0  # mean daily demand
sd_daily = 0.08       # daily demand standard deviation

safety = z * sd_daily * math.sqrt(lt_days)
rop = mu_daily * lt_days + safety
print(f"Safety stock = {safety:.1f} units")
print(f"Reorder point = {rop:.1f} units")
`,
            },
            diagram: {
              kind: "matrix",
              title: "The ABC x VED policy grid",
              caption: "Annual value on one axis, criticality on the other - four different policies.",
              axes: { x: "Low annual value -> High annual value", y: "Desirable -> Vital" },
              quadrants: [
                { label: "Cheap + vital: never stock out", note: "guaranteed stock, generous min-max" },
                { label: "Costly + vital: insurance spares", note: "joint engineering-production stocking decision" },
                { label: "Cheap + desirable: routine", note: "min-max bins, loose control" },
                { label: "Costly + desirable: economic", note: "EOQ and reorder-point discipline" },
              ],
            },
            table: {
              caption: "ABC classes and control policy.",
              headers: ["Class", "Annual value share", "Item count share", "Control policy"],
              rows: [
                ["A", "about 70 percent", "about 10 percent", "tight: frequent review, accurate records, priority sourcing"],
                ["B", "about 20 percent", "about 20 percent", "periodic review, standard EOQ ordering"],
                ["C", "about 10 percent", "about 70 percent", "min-max bins, bulk ordering, loose counting"],
              ],
            },
            callout: {
              type: "tip",
              title: "Justify insurance spares correctly",
              body: "Insurance spares are justified by the cost of the downtime they prevent, never by turnover statistics. In numericals, always show the EOQ square-root substitution and label safety stock and lead-time demand separately inside the reorder point.",
            },
            keyTerms: [
              { term: "EOQ", definition: "Economic order quantity sqrt(2DS/H): the order size minimizing combined ordering and holding cost." },
              { term: "Insurance spares", definition: "High-consequence, long-lead items stocked against rare failures; justified by downtime risk." },
              { term: "ABC analysis", definition: "Pareto classification of inventory by annual usage value that steers control tightness." },
            ],
            examQuestions: [
              {
                q: "Explain the classification of spare parts (consumables, repairables, insurance spares) and the use of ABC and VED analysis. Derive the terms of the EOQ formula and compute EOQ and reorder point for D = 48 units/yr, S = 1500, H = 900 and a 60-day lead time.",
                marks: 7,
                outline: [
                  "Classification by usage, strategy and criticality with one example each.",
                  "Insurance-spares logic: expected downtime cost versus holding cost.",
                  "ABC definition with the 70/20/10 value and 10/20/70 count shares.",
                  "VED meaning; why ABC alone ignores criticality.",
                  "EOQ = sqrt(2DS/H); substitute: sqrt(2 x 48 x 1500 / 900) = about 12.6 units.",
                  "ROP = lead-time demand + safety stock; compute with the given data.",
                  "Storage and preservation practices: bearing handling, date rotation, VCI.",
                ],
              },
              {
                q: "What are insurance spares and how are they justified?",
                marks: 3,
              },
              {
                q: "State the EOQ formula and identify each term with its unit.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Maintenance KPIs and CMMS",
            body: [
              "Maintenance speaks in metrics. MTBF - mean time between failures - divides total uptime by the number of failures in a period; MTTR - mean time to repair - divides downtime by the same count; intrinsic availability = MTBF / (MTBF + MTTR) ignores preventive downtime while operational availability counts it. With a constant failure rate (the flat middle of the bathtub curve), reliability follows R(t) = exp(-t/MTBF) and the failure rate is 1/MTBF; maintainability is the probability a repair finishes within time t, M(t) = 1 - exp(-t/MTTR). The bathtub curve's three regions - infant mortality, useful life and wear-out - explain why brand-new and end-of-life equipment both misbehave.",
              "OEE is the flagship effectiveness measure: availability x performance x quality. Availability counts downtime losses (breakdowns, changeovers), performance counts speed losses (slow cycles, minor stops) and quality counts defects - together the six big losses that TPM attacks. World-class discrete-manufacturing OEE is quoted near 85 percent (roughly 90 x 95 x 99.5 percent), while unmeasured plants often sit at 40-60 percent; the diagnostic power lies in the decomposition, because a low-availability problem (breakdowns) needs different medicine than a low-performance problem (minor stops). Cost and discipline KPIs complete the dashboard: maintenance cost as a percentage of asset replacement value, planned-to-emergency work ratio, schedule compliance, backlog and PM completion rate.",
              "A computerized maintenance management system (CMMS) - or enterprise asset management (EAM) platform - is the memory and the machine room: asset registry and hierarchy, work-order management, PM scheduling, spare-parts inventory with purchasing interfaces, and the failure-code history that turns experience into analytics. Value comes from data discipline - a work order closed with 'pump leaking' teaches nothing, but closed with location, mode, cause code and parts consumed feeds Pareto analysis of bad actors, spare-parts optimization and the FMECA of Unit V. Modern additions: mobile capture at the machine, condition-monitoring integrations that raise work orders automatically, and dashboards that turn the KPI list into daily management.",
            ],
            bullets: [
              "MTBF = uptime / failures; MTTR = downtime / failures; availability = MTBF / (MTBF + MTTR).",
              "Constant-rate region: R(t) = exp(-t/MTBF); failure rate = 1/MTBF; bathtub curve has three regions.",
              "OEE = availability x performance x quality; the six big losses map onto the three factors.",
              "World-class OEE about 85 percent (90 x 95 x 99.5); typical unmeasured plants 40-60 percent.",
              "CMMS modules: asset registry, work orders, PM scheduling, inventory, history; value lives in close-out data quality.",
            ],
            codeExample: {
              language: "python",
              caption: "OEE and reliability metrics from shift and history data.",
              code: `# Line rated 600 units/h; 8-hour shift
planned_min = 480.0
run_min = 405.0                     # after 75 min of downtime
ideal_rate = 600.0 / 60.0           # units per minute
good_units, total_units = 3500.0, 3550.0

availability = run_min / planned_min
performance = total_units / (ideal_rate * run_min)
quality = good_units / total_units

OEE = availability * performance * quality
print(f"A = {availability:.1%}  P = {performance:.1%}  Q = {quality:.1%}")
print(f"OEE = {OEE:.1%}")

# Reliability block: six failures over a month of operation
uptime_h, downtime_h, failures = 702.0, 18.0, 6
MTBF = uptime_h / failures
MTTR = downtime_h / failures
print(f"MTBF = {MTBF:.0f} h, MTTR = {MTTR:.1f} h")
print(f"Availability = {MTBF / (MTBF + MTTR):.1%}")
`,
            },
            diagram: {
              kind: "flow",
              title: "Peeling the losses to reach OEE",
              caption: "Multiply down the tree - each step removes one loss family.",
              steps: [
                { label: "Planned production time", note: "the shift window" },
                { label: "Remove availability losses", note: "breakdowns, changeovers" },
                { label: "Remove performance losses", note: "slow cycles, minor stops" },
                { label: "Remove quality losses", note: "scrap and rework" },
                { label: "OEE = A x P x Q", note: "improve the weakest ratio first" },
              ],
            },
            table: {
              caption: "The maintenance KPI sheet.",
              headers: ["KPI", "Formula", "Reading"],
              rows: [
                ["MTBF", "uptime / number of failures", "higher = fewer failures; drives strategy"],
                ["MTTR", "downtime / number of failures", "lower = better maintainability, spares, tools"],
                ["Availability", "MTBF / (MTBF + MTTR)", "intrinsic availability definition"],
                ["OEE", "availability x performance x quality", "effectiveness; world-class about 85 percent"],
                ["Schedule compliance", "completed as scheduled / scheduled", "planning and scheduling health"],
                ["Maintenance cost ratio", "maintenance cost / replacement value", "typically 2-5 percent in mature plants"],
              ],
            },
            callout: {
              type: "warning",
              title: "OEE is multiplicative",
              body: "Never average the three ratios or add loss percentages - multiply them. And compare like with like: a bottleneck machine judged on quality is a different animal from a feeder machine judged on availability; context beats the raw number.",
            },
            keyTerms: [
              { term: "MTBF", definition: "Mean time between failures: uptime divided by failure count; the reciprocal of failure rate in the useful-life region." },
              { term: "OEE", definition: "Overall equipment effectiveness: availability x performance x quality; TPM's scoreboard for the six big losses." },
              { term: "Bathtub curve", definition: "Failure-rate shape over life: infant mortality, roughly constant useful life, then rising wear-out." },
            ],
            examQuestions: [
              {
                q: "Define MTBF, MTTR and availability, and explain the bathtub curve with its maintenance implications. Calculate OEE for a 480-minute shift with 75 minutes of downtime, 3550 units produced against an ideal 4050, and 3500 good units.",
                marks: 7,
                outline: [
                  "Define MTBF and MTTR with formulas; availability = MTBF/(MTBF + MTTR).",
                  "Bathtub: infant mortality (assembly and design), useful life (random, constant rate), wear-out (age-based PM).",
                  "Implication: fixed-interval overhaul only fits wear-out modes.",
                  "OEE = A x P x Q with the six big losses named.",
                  "A = 405/480 = 84.4 percent.",
                  "P = 3550/4050 = 87.7 percent; Q = 3500/3550 = 98.6 percent.",
                  "OEE = 0.844 x 0.877 x 0.986 = about 73 percent; attack availability first.",
                ],
              },
              {
                q: "List the six big losses of OEE.",
                marks: 3,
              },
              {
                q: "Distinguish MTBF from MTTR in one sentence each.",
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
      title: "RCM and Cases",
      summary:
        "The modern toolkit and the money: FMECA with severity, occurrence, detection and RPN; root cause analysis by 5-Why, fishbone and fault tree; IoT and machine-learning pipelines for continuous condition-based maintenance; digital twins synchronized with physics models delivering RUL prognostics; and the automotive, aerospace and wind case studies that tie tribology to lifecycle economics.",
      chapter: {
        number: "05",
        title: "RCM, Analytics and Applications",
        intro:
          "Unit V closes the loop from analysis to value. Section 5.1 scores risk with FMECA; 5.2 hunts root causes with three complementary tools; 5.3 networks the monitoring of Unit III into IoT and AI pipelines; 5.4 builds digital twins and prognostics on top; 5.5 lands the money question with industry case studies and lifecycle economics.",
        inOneBreath:
          "FMECA scores each failure mode with severity, occurrence and detection into an RPN that high-severity items override; root cause analysis drills with 5-Why, brainstorms with the fishbone's 6M and deduces with fault trees and minimal cut sets; IoT architectures sense at the edge, baseline in the cloud and raise CMMS work orders while machine learning climbs from thresholds through classifiers to RUL regression and anomaly detection; digital twins synchronize physics models with assets to output RUL distributions; and the automotive, aerospace and wind cases prove that lifecycle cost - not lubricant price - is the number that decides.",
        sections: [
          {
            number: "5.1",
            title: "FMECA: scoring failure modes for criticality",
            body: [
              "FMEA - failure mode and effects analysis - was formalized by the US military (MIL-STD-1629) and adopted by aerospace and then automotive (IATF 16949 requires it). Variants: system FMEA, design FMEA (DFMEA) and process FMEA (PFMEA); FMECA adds the criticality quantification. It is a structured team exercise: define the item and its boundary, enumerate the functions, then for each function list the failure modes, their effects on the next level up and on the plant, their causes, and the current design or maintenance controls. FMEA is bottom-up - one mode at a time - and is therefore thorough but not aimed at combinations of failures, which is fault-tree territory (section 5.2).",
              "Each mode is scored on 1-10 scales: severity S (1 = unnoticed, 10 = catastrophic with safety impact), occurrence O (1 = remote, 10 = inevitable) and detection D (1 = certain to be caught, 10 = undetectable). The risk priority number RPN = S x O x D, up to 1000, ranks the action queue; the military-style alternative plots criticality matrices of occurrence probability against severity. Two cautions are exam-standard: RPN treats very different risks as equal (a 9-3-5 and a 5-9-3 both give 135), and a severity of 9 or 10 must be addressed regardless of RPN. Actions target the weakest score - redesign or protective devices cut S, design and process changes cut O, better tests and monitoring cut D - and the RPN is re-scored after the actions close.",
              "Worked core: a cooling-water pump. Mode 'mechanical seal leaks': effect is local flooding and gradual loss of cooling; S 7, O 5, D 4, RPN 140; action - upgrade the seal and install leak detection, re-score. Mode 'bearing collapses from lubrication starvation': S 9 (line standstill), O 3, D 5, RPN 135; action - vibration and temperature monitoring with a corrected lube route, D drops to 2 and the RPN to 54. Mode 'impeller eroded by cavitation': S 6, O 4, D 6, RPN 144; action - an NPSH review and acoustic monitoring. Note the pattern: monitoring actions lower D cheaply, while only redesign or procedural change lowers S or O - precisely how FMECA output feeds the RCM task selection of Unit IV.",
            ],
            bullets: [
              "FMEA = bottom-up, mode-by-mode analysis; FMECA adds the criticality ranking (S, O, D).",
              "Scales 1-10 each; RPN = S x O x D (maximum 1000) - an action priority, not gospel.",
              "Severity rule: S of 9-10 must be addressed regardless of a modest RPN.",
              "Lever map: redesign cuts S, design and procedure changes cut O, monitoring and tests cut D.",
              "Team + boundary diagram + function tree make or break the exercise; re-score after actions.",
            ],
            table: {
              caption: "FMECA extract: cooling-water centrifugal pump.",
              headers: ["Failure mode", "Effect", "S", "O", "D", "RPN", "Action"],
              rows: [
                ["Mechanical seal leaks", "gradual coolant loss, flooding", "7", "5", "4", "140", "seal upgrade + leak detection"],
                ["Bearing starved -> collapse", "line standstill", "9", "3", "5", "135", "vibration/temperature monitoring + lube route"],
                ["Impeller cavitation erosion", "flow and head decay", "6", "4", "6", "144", "NPSH review, acoustic check"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The FMEA workflow",
              caption: "Six gates from scope to closed actions.",
              stages: [
                { label: "Scope, boundary, functions", note: "team, interface diagram" },
                { label: "Failure modes per function", note: "with causes and current controls" },
                { label: "Score S, O, D", note: "calibrated 1-10 scales" },
                { label: "RPN and rank", note: "plus the high-severity override" },
                { label: "Assign actions and owners", note: "target the weakest score" },
                { label: "Re-score and track to closure", note: "a living document" },
              ],
            },
            callout: {
              type: "exam",
              title: "Critique RPN in one breath",
              body: "When asked to critique RPN, deliver the pair: equal RPNs can hide unequal severity, so high-S items override the ranking. Then name the lever map - S falls to redesign, O falls to prevention, D falls to detection - and you have both discussion marks.",
            },
            keyTerms: [
              { term: "RPN", definition: "Risk priority number S x O x D on 1-10 scales; ranks FMEA action priority." },
              { term: "Severity (S)", definition: "Score of failure-effect seriousness; 9-10 means safety or regulatory impact and forces action regardless of RPN." },
              { term: "FMECA", definition: "Failure mode, effects and criticality analysis: FMEA plus a criticality or RPN ranking." },
            ],
            examQuestions: [
              {
                q: "Explain the FMEA/FMECA procedure step by step. Score a pump bearing failure with S = 9, O = 3, D = 5, compute the RPN, suggest actions that lower each score, and state two limitations of RPN ranking.",
                marks: 7,
                outline: [
                  "Purpose and variants (system, design, process); military origin.",
                  "Team, boundary diagram and function-tree preparation.",
                  "Listing modes, effects, causes and current controls.",
                  "Scale definitions for S, O and D with 1-10 anchors.",
                  "RPN computation: 9 x 3 x 5 = 135.",
                  "Levers: monitoring lowers D to 2, RPN to 54; precision lubrication lowers O; only redesign lowers S.",
                  "Critique: RPN ties hide severity; S = 9-10 overrides; scores are subjective.",
                ],
              },
              {
                q: "Why does an S = 10 item demand action even when its RPN is low?",
                marks: 3,
              },
              {
                q: "Which score does condition monitoring primarily reduce - S, O or D?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Root cause analysis: 5-Why, fishbone and FTA",
            body: [
              "Root cause analysis exists because repairing the failed part and then repeating the failure is the default behaviour of unmanaged plants. The discipline: define the problem precisely, implement containment, preserve evidence, analyse to a verified cause, act on it, and verify effectiveness. The analysis must stop at a systemic cause the organization can control - 'the operator was careless' is a symptom, while 'the lubrication route had no quantity check and no training covered it' is a cause. Verification is the professional step: confirm the causal chain with records and measurements, and ideally watch the effect disappear after the fix.",
              "Three tools share the syllabus. The 5-Why (Toyota) drills a single causal chain by repeating 'why' until the trail leaves the operator and lands in a system or process; every step must be verified true, not speculated. The fishbone (Ishikawa) diagram organises a team brainstorm of candidate causes under the 6M headings - man, machine, material, method, measurement and mother nature (environment) - with each bone then interrogated by deeper whys. Fault tree analysis (FTA) is the deductive, top-down complement: start from the undesired top event and combine causes through AND and OR gates; the minimal cut sets (smallest combinations of events sufficient to trigger the top) identify the weak links, and probabilities can propagate upward for quantified risk - standard in safety-critical industries under IEC 61025.",
              "Worked chain for a recurring bearing failure: the bearing failed (1) because lubricant starved; it starved (2) because the grease route skipped that point; the route skipped it (3) because the point was missing from the CMMS route; it was missing (4) because the machine was moved and the route never updated; routes go stale (5) because no one owns route audits after equipment moves. The fix - not a new bearing but an ownership rule and a move-procedure checklist - would never appear by replacing bearings. Tool choice follows the problem's shape: a single suspected chain takes 5-Why, many candidate causes take the fishbone, interacting failures and safety logic take FTA, and exhaustive mode coverage takes FMEA (section 5.1).",
            ],
            bullets: [
              "RCA sequence: define, contain, preserve evidence, analyse, correct, verify effectiveness.",
              "Stop rule: the cause must be systemic and controllable - never 'operator error'.",
              "5-Why: a linear drill; verify every step; used for single suspected chains.",
              "Fishbone: 6M brainstorm (man, machine, material, method, measurement, environment) with deeper whys on each bone.",
              "FTA: deductive gates and minimal cut sets, quantifiable - the safety-critical choice (IEC 61025).",
            ],
            table: {
              caption: "Choosing the RCA tool.",
              headers: ["Tool", "Direction / structure", "Output", "Best for"],
              rows: [
                ["5-Why", "linear chain of whys", "one verified causal path", "simple, single-cause problems"],
                ["Fishbone (6M)", "categorised brainstorm", "candidate causes to prune and test", "multi-cause, team problems"],
                ["Fault tree (FTA)", "top-down Boolean gates", "minimal cut sets, probabilities", "safety and interlock analysis"],
                ["FMEA", "bottom-up per mode", "ranked modes and actions", "design and process reviews"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which RCA tool fits the problem?",
              caption: "Match the tool to the problem's shape, not to habit.",
              start: "Recurring failure selected for analysis",
              branches: [
                { label: "One suspected causal chain", outcome: "5-Why: drill and verify each step to a systemic cause", good: true },
                { label: "Many candidate causes across categories", outcome: "fishbone: 6M bones, then prune with evidence", good: true },
                { label: "Safety system with interacting failures", outcome: "FTA: gate logic and minimal cut sets", good: true },
                { label: "Whole design needs mode coverage", outcome: "FMEA: bottom-up systematic screening", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Stopping one step early",
              body: "The classic RCA failure is halting at 'operator error' or 'bad lubricant' and re-learning the failure next quarter. Ask: why was that error possible? why was that lubricant available? The answer must land in a system someone owns - otherwise it is a symptom wearing a cause's clothes.",
            },
            keyTerms: [
              { term: "5-Why", definition: "Iterative questioning technique tracing a failure chain to a systemic, controllable cause." },
              { term: "Fishbone diagram", definition: "Ishikawa cause-and-effect chart sorting candidate causes under the 6M categories." },
              { term: "Minimal cut set", definition: "Smallest combination of basic events in a fault tree sufficient to cause the top event." },
            ],
            examQuestions: [
              {
                q: "Explain root cause analysis and describe the 5-Why, fishbone and fault-tree techniques with sketches. Apply a 5-Why chain to a recurring bearing failure caused by lubrication starvation and state the systemic fix.",
                marks: 7,
                outline: [
                  "RCA purpose: eliminate recurrence; the step sequence.",
                  "5-Why rules: verify each step, end at a controllable system cause.",
                  "Fishbone: 6M categories with a sketch; brainstorm then evidence-prune.",
                  "FTA: top event, AND/OR gates, minimal cut sets; the quantitative option.",
                  "Tool comparison and selection logic.",
                  "Worked chain: bearing - starvation - skipped route - missing CMMS point - stale route audit.",
                  "Fix: move-procedure checklist and route ownership; verify by audit.",
                ],
              },
              {
                q: "Define a minimal cut set in fault tree analysis.",
                marks: 3,
              },
              {
                q: "List the 6M categories of a fishbone diagram.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "IoT and AI-driven condition-based maintenance",
            body: [
              "The condition monitoring of Unit III becomes continuous when it is networked. An IoT architecture for condition-based maintenance stacks: smart sensors (MEMS vibration, temperature, current, ultrasound, particle counters) mounted on the asset; edge gateways that sample, filter and often compute features - RMS levels, FFT bands - locally to slash bandwidth; secure connectivity (industrial Ethernet, Wi-Fi, LoRaWAN, private 5G) to a platform; a time-series historian with an asset model giving every number its context; analytics; and dashboards that end in work orders raised automatically in the CMMS - closing the loop with Unit IV.",
              "Analytics climb a ladder of sophistication. Threshold alarms (ISO zones) catch gross faults; baseline-plus-trend statistics catch drift. Supervised machine learning trains classifiers on labelled histories (healthy versus each fault class) using spectral features, and regressors estimate remaining useful life (RUL); anomaly detection (autoencoders, one-class methods) works without labels by flagging departures from learned normality - essential because labelled failures are scarce. Real-world constraints keep humility mandatory: class imbalance (few failures in the data), concept drift as machines age, sensor faults masquerading as machine faults, and explainability demands from maintenance crews. Hybrid physics-plus-ML models - a bearing fatigue law corrected by measured data - usually beat pure data models.",
              "Implementation follows a business pattern. Pick pilots on critical assets whose failure modes are sensor-detectable (rolling bearings, imbalance, thermal drift) and whose downtime is expensive; instrument, baseline, and prove avoided cost before scaling. Security is part of the engineering: OT/IT segmentation, signed firmware and least-privilege remote access - a sensor network is an attack surface. Fleet learning is the payoff multiplier: every monitored asset sharpens the models for all the others. Typical wins: wind-turbine gearboxes monitored from shore, motor-fleet bearing alerts weeks ahead, and process plants using RUL estimates to set the next shutdown scope.",
            ],
            bullets: [
              "Stack: sensors - edge feature extraction - secure transport - historian with asset model - analytics - CMMS work orders.",
              "Analytics ladder: thresholds -> baselines and trends -> supervised classifiers -> RUL regression -> anomaly detection.",
              "RUL: predicted time to functional failure, ideally quoted with confidence bounds.",
              "Hybrid physics + ML beats pure data when failures are scarce or drift matters.",
              "Rollout: pilot on critical, sensor-detectable, expensive-downtime assets; prove avoided cost; secure the OT network.",
            ],
            table: {
              caption: "Analytics techniques and their data needs.",
              headers: ["Technique", "Data needed", "Output", "Limitation"],
              rows: [
                ["Threshold alarm", "spec limits (e.g., ISO zone)", "go/no-go alert", "late detection, no diagnosis"],
                ["Trend + baseline", "clean history per asset", "drift warnings", "needs consistent conditions"],
                ["Supervised classifier", "labelled fault histories", "fault class + confidence", "label scarcity, class imbalance"],
                ["RUL regression", "run-to-failure data", "time-to-failure estimate", "few complete failures exist"],
                ["Anomaly detection", "healthy-state data only", "departure flag", "no fault naming; false alarms"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The CBM data pipeline",
              caption: "Six stages from transducer to work order.",
              stages: [
                { label: "Sense", note: "vibration, temperature, current, ultrasound" },
                { label: "Edge process", note: "FFT and features computed near the machine" },
                { label: "Transmit securely", note: "gateway, segmentation, protocols" },
                { label: "Store and baseline", note: "historian with asset context" },
                { label: "Detect and diagnose", note: "thresholds, ML, anomaly models" },
                { label: "Decide and act", note: "alert, CMMS work order, plan" },
              ],
            },
            callout: {
              type: "tip",
              title: "Start simple, earn the right to be clever",
              body: "ISO thresholds and clean trends on critical machines typically pay for the whole program; machine learning justifies itself on fleets, where every avoided failure trains the next prediction. And never let a dashboard replace a walk-down - the best anomaly detector still wears safety shoes.",
            },
            keyTerms: [
              { term: "Remaining useful life (RUL)", definition: "Predicted operating time until functional failure; the output of prognostic models." },
              { term: "Edge computing", definition: "Processing data near the machine (FFT, features) to cut bandwidth and react locally." },
              { term: "Anomaly detection", definition: "ML technique flagging deviations from learned normal behaviour without needing failure labels." },
            ],
            examQuestions: [
              {
                q: "Describe the architecture of an IoT-based condition monitoring system with a block diagram. Explain the levels of analytics from thresholds to machine learning, the concept of remaining useful life, and the practical constraints on ML adoption.",
                marks: 7,
                outline: [
                  "Architecture: sensors, edge gateways, connectivity, historian with asset model, analytics, CMMS loop.",
                  "Edge roles: sampling, FFT and features, bandwidth reduction, local alarms.",
                  "Analytics ladder: threshold, baseline, supervised classification, RUL regression, anomaly detection.",
                  "RUL definition and its use in planning spares and shutdowns.",
                  "Constraints: scarce labels, class imbalance, drift, explainability, sensor health.",
                  "Hybrid physics + ML advantages.",
                  "Implementation: pilot selection, OT/IT security, fleet-learning economics.",
                ],
              },
              {
                q: "What is remaining useful life (RUL) and how is it used in maintenance planning?",
                marks: 3,
              },
              {
                q: "Why compute FFT features at the edge instead of streaming raw waveforms?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Digital twins and prognostics",
            body: [
              "A digital twin is a living virtual replica of a physical asset, synchronized with it through sensor data - and, in the strict definition, acting back on it: the asset feeds the model, and the model's outputs steer the asset's operation or maintenance. Distinguish the relatives: a digital model is a simulation with no automatic data link; a digital shadow receives one-way updates from the asset (a live dashboard); a twin closes the loop both ways. The concept traces to NASA's practice of maintaining ground simulators mirroring spacecraft in flight, and was articulated in product-lifecycle-management work by Michael Grieves.",
              "Twins for maintenance merge physics with data. Physics-of-failure models - bearing fatigue laws, the contact-stress and film-thickness calculations of Units II and III, thermal and wear models - are updated continuously with measured signals: state estimators such as the Kalman filter blend model predictions with noisy sensors, and damage-accumulation states are updated each operating cycle. The prognostics output is a distribution, not a number: remaining useful life with confidence bounds that tighten as failure approaches. Fleet twins extend the idea across an installed base - every monitored gearbox informs its siblings, so a small sample of failures supports fleet-wide predictions.",
              "The maintenance decisions twins support are concrete: safely extending overhaul intervals when accumulated damage tracks below plan; pre-positioning spares and crews for a predicted failure window; derating or redistributing load to stretch RUL to the next window; rehearsing a repair in simulation before touching the plant; and training operators on the model rather than the machine. Aerospace engines are the flagship - engine health management models flying with the engine and supporting power-by-the-hour contracts - with wind farms, process units and machine tools following. Honest limits remain: model validation cost, data quality, cybersecurity of the control loop, and the danger of trusting an unvalidated model over a technician's trained ears.",
            ],
            bullets: [
              "Twin versus shadow versus model: two-way sync versus one-way display versus offline simulation.",
              "Physics-of-failure + measured data: Kalman-filter state estimation with damage updated each cycle.",
              "Prognostics output: an RUL distribution with confidence bounds, not a single number.",
              "Decisions supported: interval extension, spare pre-positioning, load derating, repair rehearsal, training.",
              "Flagship cases: aero-engine health management and power-by-the-hour; fleet learning across an installed base.",
            ],
            table: {
              caption: "Model, shadow, twin.",
              headers: ["Term", "Data flow", "Maintenance use"],
              rows: [
                ["Digital model", "manual, offline", "design studies and what-if without live data"],
                ["Digital shadow", "asset -> model, one-way", "live dashboards, monitoring, trending"],
                ["Digital twin", "asset <-> model, two-way", "RUL prognosis feeding decisions and control"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The digital twin stack",
              caption: "Top renders first: decisions rest on data resting on steel.",
              layers: [
                { label: "Decision layer", note: "RUL, interval extension, spare pre-position, derating" },
                { label: "Analytics layer", note: "physics + ML models, Kalman updates, prognostics" },
                { label: "Context layer", note: "asset model, historian, failure libraries" },
                { label: "Connectivity layer", note: "sensors, edge gateways, secure transport" },
                { label: "Physical asset", note: "the machine and its real degradation" },
              ],
            },
            callout: {
              type: "warning",
              title: "A twin without validation is a dashboard",
              body: "The credibility test for any digital twin: could it have predicted last year's actual gearbox failure? Validation against known histories is the step to state in any exam discussion - unvalidated models are expensive decoration.",
            },
            keyTerms: [
              { term: "Digital twin", definition: "Virtual replica of an asset synchronized with it in both directions - data in, decisions out." },
              { term: "Digital shadow", definition: "One-way digital representation: asset data updates the model but the model does not act back." },
              { term: "Kalman filter", definition: "Recursive state estimator blending model predictions with noisy measurements - the twin's updating engine." },
            ],
            examQuestions: [
              {
                q: "Define digital twin, digital model and digital shadow. With a block diagram, explain how a twin supports maintenance decisions, and describe how prognostics outputs are produced and used.",
                marks: 7,
                outline: [
                  "Definitions and the two-way versus one-way distinction.",
                  "Block diagram: asset - sensors - edge - historian - models - decisions, looping back.",
                  "Physics-of-failure content: fatigue, thermal and film-thickness models from Units II-III.",
                  "Kalman-filter state and damage updating from measurements.",
                  "Prognostics: RUL as a distribution with confidence bounds.",
                  "Decisions: interval extension, spares pre-positioning, derating, rehearsal, training.",
                  "Limits: validation cost, data quality, cybersecurity; the aero-engine example.",
                ],
              },
              {
                q: "State two maintenance decisions a digital twin can support.",
                marks: 3,
              },
              {
                q: "What is the role of the Kalman filter in a digital twin?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Industry case studies and maintenance economics",
            body: [
              "Automotive tribology chases fuel economy and durability. Inside the engine, the piston-ring pack on a plateau-honed bore (section 1.4) runs mixed to hydrodynamic; low-viscosity 0W-20 oils with friction modifiers and DLC-coated valvetrain parts shave friction losses; transmission gears rely on EHL films and scuffing-resistant additives. Maintenance itself has shifted to condition invisible to the owner: sealed-for-life gearboxes, extended drain intervals justified by oil analysis, OBD-II telematics predicting battery degradation and aftertreatment clogging, and fleets using CBM data to schedule brakes and tyres. Electric vehicles add their own tribology: e-axle gearboxes, high-speed bearings and battery thermal management.",
              "Aerospace is the discipline's proving ground. Aero-engine mainshaft bearings run at high speed and temperature under rigorous cleanliness, monitored by oil-debris sensors (magnetic chip detectors, quantified debris monitors) and engine health management trends - exhaust-gas-temperature margin, vibration, oil consumption - that gate maintenance actions; airline maintenance is organized by MSG-3 logic, the commercial descendant of RCM, assembling tasks into letter checks and shop visits. Wind turbines inherit both lessons at scale: inaccessible offshore gearboxes justify continuous CMS with particle counting and vibration, and the economics of inspection-boat logistics shape the maintenance policy. Each case repeats one arc: tribology designs reliability in, monitoring detects the residual, and economics decides the response.",
              "Economics closes the course. Life-cycle cost = first cost + operating + maintenance + energy + downtime costs, less salvage; maintenance typically runs a few percent of asset replacement value per year, but downtime often dwarfs it - a stopped line can cost more per hour than a year of lubricant. The CBM business case is avoided-failure cost multiplied by detection probability, minus program cost; spare-parts investment trades holding cost against stockout expectation (section 4.4); replacement-versus-repair compares cumulative cost curves against the reliability loss of ageing assets. The Jost estimate - tribology savings worth over one percent of GDP - remains the founding argument: spending on films and surfaces buys plant capacity more cheaply than any other investment.",
            ],
            bullets: [
              "Automotive: plateau honing, DLC, 0W-20 oils and friction modifiers against friction losses; OBD-II and fleet telematics.",
              "Aerospace: oil-debris monitoring and EHM trends; MSG-3 logic descends from RCM into letter checks.",
              "Wind: inaccessible gearboxes justify continuous vibration plus particle-count CMS offshore.",
              "Life-cycle cost = first + operating + maintenance + energy + downtime - salvage.",
              "CBM justification: avoided-failure cost x detection probability versus program cost; downtime dominates lubricant budgets.",
            ],
            table: {
              caption: "Case-study synthesis.",
              headers: ["Sector", "Tribology focus", "Monitoring", "Maintenance organization"],
              rows: [
                ["Automotive", "ring-bore system, DLC, low-viscosity oils", "OBD-II, fleet telematics", "sealed-for-life, extended drains, fleet CBM"],
                ["Aerospace engines", "high-speed bearings, hot seals", "oil debris, EHM trends", "MSG-3 logic, letter checks, shop visits"],
                ["Wind energy", "gearbox and blade-bearing life", "CMS vibration + particle count", "condition-driven campaigns"],
                ["Process industry", "pumps, compressors, couplings", "vibration + oil + thermography routes", "RCM-programmed CMMS work"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Strategy decision for a critical gearbox",
              caption: "Same asset, three economics, one defensible answer.",
              start: "Critical gearbox in continuous service",
              branches: [
                { label: "Fixed-interval overhaul", outcome: "over-maintenance: disassembly introduces infant failures, planned cost stays high", good: false },
                { label: "Run to failure", outcome: "unplanned outage with secondary damage and safety exposure", good: false },
                { label: "RCM tasks + oil and vibration CBM", outcome: "early warning and planned intervention at minimum lifecycle cost", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Formula before opinion",
              body: "In economics questions, name the structure first - lifecycle cost components, then the CBM inequality (avoided cost x detection probability > program cost) - and only then argue. Examiners reward the structure; the numbers can stay illustrative.",
            },
            keyTerms: [
              { term: "Life-cycle cost", definition: "Total cost of ownership: first cost plus operation, maintenance, energy and downtime, less salvage." },
              { term: "Engine health management", definition: "Aerospace trending of engine parameters (EGT margin, vibration, oil consumption) to gate maintenance." },
              { term: "MSG-3", definition: "Airline maintenance-program development logic - the commercial descendant of RCM." },
            ],
            examQuestions: [
              {
                q: "Discuss the tribology and maintenance approaches in automotive and aero-engine practice. Then explain life-cycle costing and build the economic justification for a predictive maintenance program on a critical gearbox.",
                marks: 7,
                outline: [
                  "Automotive: ring-bore tribology, plateau honing, DLC and low-viscosity oils; OBD-II and fleet CBM.",
                  "Aerospace: bearing and seal challenges; oil-debris monitoring and EHM; MSG-3 task logic.",
                  "Wind/process contrast: accessibility drives monitoring intensity.",
                  "Lifecycle cost formula with every component named.",
                  "Downtime cost versus maintenance cost - typical magnitudes.",
                  "CBM case: avoided failure cost x detection probability versus program cost.",
                  "Conclusion: condition-based intervention minimizes total lifecycle cost.",
                ],
              },
              {
                q: "Name two tribological improvements in modern car engines and their purpose.",
                marks: 3,
              },
              {
                q: "What is MSG-3 and where is it used?",
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
        "RGPV ME-802(B) papers spread the bulk of the marks across lubrication, bearings and condition monitoring on the tribology side, and maintenance strategy plus FMECA/RCA on the management side. The numericals come almost exclusively from Archard wear, viscosity conversion, L10 life, EOQ and OEE - practise those to automaticity and the rest of the paper becomes descriptive income.",
      ],
      weightedTopics: [
        { topic: "Lubrication regimes and the Stribeck curve", weight: "8-10 marks", note: "Sketch asked almost yearly; label axes, zones and lambda thresholds." },
        { topic: "Viscosity, viscosity index and oil properties", weight: "8-10 marks", note: "Dynamic/kinematic conversion and VI definitions carry the numericals." },
        { topic: "Journal bearings: Reynolds, Sommerfeld, Petroff", weight: "8-10 marks", note: "State assumptions verbatim; the bearing-characteristic sketch recurs." },
        { topic: "Rolling bearings: load ratings and L10 life", weight: "8-10 marks", note: "One (C/P)^p numerical is near-certain; mind p = 3 versus 10/3." },
        { topic: "Condition monitoring: vibration, oil, thermography", weight: "8-12 marks", note: "Signature table, ferrography particle ladder and thermography uses." },
        { topic: "Friction laws and theories", weight: "6-8 marks", note: "Adhesion theory explaining the three laws is the classic 7-mark." },
        { topic: "Wear mechanisms and Archard's equation", weight: "6-8 marks", note: "Six mechanisms with sketches plus a plug-in numerical." },
        { topic: "Maintenance strategies, RCM and TPM", weight: "10-14 marks", note: "P-F curve, seven questions, eight pillars, 5S - pure definition marks." },
        { topic: "FMECA and root cause analysis", weight: "6-10 marks", note: "RPN computation with critique; a 5-Why chain and fishbone sketch." },
        { topic: "Maintenance KPIs, planning and spares", weight: "6-8 marks", note: "OEE/MTBF numericals, planning versus scheduling, EOQ." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two focused hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing. Keep the numericals hand-written; typing hides the unit slips that examiners punish.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - friction, wear, surfaces", tasks: ["Friction laws + adhesion theory: write two full 7-mark answers", "Six wear mechanisms with sketches; Archard numerical by hand", "Ra/Rq computation and the surface-engineering menu table"] },
        { week: "Week 2", focus: "Unit II - lubrication", tasks: ["Stribeck curve and regime table until drawable from memory", "Viscosity/VI conversions and the Walther interpolation", "Additive matrix, grease NLGI anchors, solid lubricants"] },
        { week: "Week 3", focus: "Unit III - bearings", tasks: ["Reynolds assumptions, Sommerfeld, Petroff, oil whirl", "L10 life numericals - one ball, one roller", "Seals comparison and the bearing failure signature table"] },
        { week: "Week 4", focus: "Monitoring + Unit IV start", tasks: ["Vibration signature table and defect-frequency math", "Oil analysis tests, ferrography ladder, thermography uses", "Strategy ladder, P-F curve, RCM questions, TPM pillars"] },
        { week: "Week 5", focus: "Unit IV close + Unit V start", tasks: ["Planning vs scheduling and the work-order life cycle", "EOQ/ROP numerical and the ABC-VED grid", "FMECA worked row; 5-Why chain; fishbone and FTA sketches"] },
        { week: "Week 6", focus: "Unit V close + full revision", tasks: ["OEE/MTBF numericals and CMMS modules", "IoT pipeline, twin vs shadow, RUL concept", "Two full papers under time; rewrite your weakest outlines"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last-day revision plan",
      body: [
        "One day, six blocks, nothing new after sunset. The goal is retrieval speed: every curve, formula and table below should be reproducible on blank paper in under two minutes each.",
      ],
      bullets: [
        "Hours 1-2: redraw Stribeck, P-F and bearing-characteristic curves from memory; rewrite the regime and vibration-signature tables.",
        "Hour 3: the friction story - Ar = W/H through F = Ar x s - and the six wear mechanisms, one line each.",
        "Hour 4: numericals - viscosity conversion, Archard and one L10 solve, written out cleanly with units.",
        "Hour 5: Reynolds assumptions, Petroff, BPFO/BPFI formulas and the ferrography particle ladder.",
        "Hour 6: RCM's seven questions, TPM pillars, one FMECA row with RPN, and the OEE arithmetic.",
        "Final 30 minutes: read your slips list and the section callouts, then stop - sleep is worth more marks than one more page.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Write the definition line verbatim before any discussion - definition marks are awarded separately from explanation marks.",
        "In numericals: formula first, substitution with units, boxed answer. Method marks survive arithmetic slips; bare numbers do not.",
        "Quote relations by name - Archard, Petroff, Reynolds, EOQ, L10 - named formulas score, anonymous ones do not.",
        "Sketch every curve with labelled axes (Stribeck, P-F, bathtub, bearing characteristic); unlabelled sketches lose half their value.",
        "Time-box: 7-markers get 15 minutes, shorts get 4, and keep 10 minutes to re-check every boxed number.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Mixing cP and cSt: kinematic = dynamic / density - show the division or lose the numerical.",
        "Using p = 3 for roller bearings (it is 10/3) or forgetting the hours conversion 10^6 / (60 n).",
        "Calling rolling-contact lubrication hydrodynamic - concentrated contacts are elastohydrodynamic; the film and lambda logic differ.",
        "Drawing the Stribeck minimum as the safest operating point - the mixed regime around it wears fastest.",
        "Treating RPN as gospel - a severity 9-10 mode outranks its arithmetic; exam questions test exactly this.",
        "Stopping 5-Why at 'operator error' instead of the system that made the error possible.",
      ],
    },
  ],
};
