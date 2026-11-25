/**
 * Academics - RGPV Civil Engineering 8th-semester subject: CE-801 Design of
 * Steel Structures.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce801: AcademicSubject = {
  id: "ce-801",
  code: "CE-801",
  title: "Design of Steel Structures",
  semester: "VIII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to steel design as per IS 800: 2007: materials and limit state philosophy, bolted and welded connections, tension and compression members, beams, plate girders and roof trusses.",
  description:
    "Five units walk from structural steel grades and the limit state philosophy of IS 800: 2007 through the two connection technologies - bolts and welds - into the design of tension members, compression members with their buckling curves, built-up columns and bases, and finally beams, laterally unsupported behaviour, purlins, plate girders with their stiffeners, and roof trusses with bracing and case studies. Every section pairs the IS 800 clause with a worked numerical, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#64748b",
  emoji: "SS",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Materials and Design Philosophy",
      summary:
        "The rulebook of the whole subject: structural steel grades and their properties, the shift from working stress to the limit state method of IS 800: 2007, partial safety factors on loads and materials, classification of cross-sections from plastic to slender, and the limit states of strength and serviceability that every later unit checks.",
      chapter: {
        number: "01",
        title: "Materials, Codes and Design Philosophy",
        intro:
          "Unit I sets the ground rules. It covers what structural steel is made of and the grades IS 2062 offers, how IS 800: 2007 replaced the working stress method with limit state design, which partial safety factors ride on loads and on materials, how plate slenderness sorts every cross-section into plastic, compact, semi-compact or slender, and which limit states - of strength and of serviceability - the rest of the syllabus spends its time checking.",
        inOneBreath:
          "E250 steel yields at 250 MPa and breaks near 410 MPa with roughly 20 per cent elongation; IS 800: 2007 designs to limit states, multiplying characteristic loads by 1.2 to 1.5 and dividing strengths by gamma_m0 = 1.10, gamma_m1 = 1.25 or gamma_mw = 1.25 (shop) / 1.50 (site); plate slenderness b/t scaled by epsilon = sqrt(250/fy) classifies a section plastic, compact, semi-compact or slender and fixes the moment it can reach; and every member is finally verified against collapse (strength) and comfort (serviceability) limit states.",
        sections: [
          {
            number: "1.1",
            title: "Structural steel: grades, properties and rolled sections",
            body: [
              "Structural steel is the default material of industrial and long-span construction because it pairs high strength with ductility. Grade E250 (formerly Fe410) has a yield stress of 250 MPa, an ultimate tensile strength of 410 MPa and an elongation at fracture of about 20 per cent, which means the material stretches visibly and redistributes load long before it breaks. Steel is also homogeneous, isotropic and mill-controlled, so design strengths show little scatter. Hot-rolled sections standardised by IS 808 - ISMB, ISHB and ISWB beams, ISMC channels, ISA angles plus plates and bars - hand the designer a ready catalogue of shapes.",
              "IS 2062 groups structural steel into grades named by their minimum yield stress: E250, E350, E410 and E450, each with suffixes for supply condition and impact toughness. As the grade rises, yield and ultimate strength climb but weldability becomes demanding, because extra carbon and alloying elements push up the carbon equivalent and call for controlled welding procedures. The stress-strain curve shows a sharp yield plateau followed by strain hardening; the modulus of elasticity is taken as 2 x 10^5 MPa, the shear modulus as 0.769 x 10^5 MPa and Poisson's ratio as 0.3. Most textbooks and exam problems assume E250 steel with fu = 410 MPa.",
              "Choosing a grade is an economic and fabrication decision, not only a strength one. Mild steel E250 is inexpensive, weldable with ordinary electrodes and forgiving of site practice, so it dominates roofs, trusses and building frames. High-strength E350 to E450 saves weight in bridges and heavy crane girders but repays the saving with stricter weld procedures and higher material cost. Ductility, notch toughness at low temperature, fatigue resistance and the carbon-equivalent limit for welding must all be verified; a design that ignores weldability can fail in the workshop before it ever reaches the site.",
            ],
            bullets: [
              "E250 (Fe410) steel: fy = 250 MPa, fu = 410 MPa, elongation about 20 per cent - the default assumption in exam problems.",
              "Grades per IS 2062: E250, E350, E410, E450 - the number is the minimum yield stress; higher grades mean tighter weldability control.",
              "Elastic constants: E = 2 x 10^5 MPa, G = 0.769 x 10^5 MPa, Poisson ratio 0.3; the stress-strain curve shows a yield plateau and strain hardening.",
              "Rolled sections from IS 808: ISMB/ISHB/ISWB beams, ISMC channels, ISA angles, plus plates, flats and bars for built-up members.",
              "Selection criteria beyond strength: ductility, toughness, fatigue class and carbon equivalent for weldability.",
            ],
            table: {
              caption: "Common structural steel grades and their design values.",
              headers: ["Grade", "fy (MPa)", "fu (MPa)", "Typical use"],
              rows: [
                ["E250 (Fe410)", "250", "410", "Trusses, roofs, building frames"],
                ["E350 (Fe490)", "350", "490", "Bridges, heavy frames"],
                ["E410 (Fe540)", "410", "540", "Long spans, crane girders"],
                ["E450 (Fe570)", "450", "570", "High-strength members, towers"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From molten billet to braced frame",
              caption:
                "The journey every structural section takes before it carries load - quality control rides along at every arrow.",
              steps: [
                { label: "Melt and cast", note: "control carbon, alloys" },
                { label: "Hot roll to standard sections", note: "IS 808 dimensions" },
                { label: "Test coupons", note: "yield, ultimate, elongation" },
                { label: "Fabricate", note: "cut, drill, weld, paint" },
                { label: "Erect and brace", note: "bolted site joints" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Memorise the E250 pair - fy = 250 MPa, fu = 410 MPa - plus E = 2 x 10^5 MPa. Almost every numerical in CE-801 starts from these three numbers, and quoting them correctly earns the first mark of any design question.",
            },
            keyTerms: [
              { term: "Yield stress fy", definition: "The stress at which the steel plateaus and deforms plastically; 250 MPa for grade E250." },
              { term: "Ultimate stress fu", definition: "The maximum stress reached before fracture; 410 MPa for E250 and the basis of all rupture checks." },
              { term: "Ductility", definition: "The capacity to deform plastically before fracture (about 20 per cent elongation), which gives visible warning of overload." },
            ],
            examQuestions: [
              {
                q: "List the grades of structural steel as per IS 2062 with their yield and ultimate strengths. Which properties make steel the preferred structural material, and which practical limitations must a designer guard against?",
                marks: 7,
                outline: [
                  "Name grades E250, E350, E410, E450 with fy = 250 to 450 MPa and fu = 410 to 570 MPa.",
                  "State E250 values explicitly: fy = 250 MPa, fu = 410 MPa, elongation about 20 per cent.",
                  "Advantages: high strength-to-weight ratio, ductility, homogeneity, ease and speed of fabrication, reuse.",
                  "Limitations: corrosion needs protection, strength falls rapidly in fire, buckling of thin/slender elements.",
                  "Note the trade-off of higher grades: weight saving versus weldability (carbon equivalent) and cost.",
                  "Conclude with modulus E = 2 x 10^5 MPa and its role in stiffness-governed checks.",
                ],
              },
              {
                q: "State fy, fu and the modulus of elasticity for E350 steel, and compute its epsilon factor sqrt(250/fy).",
                marks: 2,
              },
              {
                q: "Why is ductility important in a steel tension member? Explain with the behaviour of the member as it approaches failure.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "IS 800: 2007 and the evolution of design philosophy",
            body: [
              "IS 800 is the master code for steel design in India, and its 2007 revision is a generational change. The 1984 edition worked entirely by the working stress (elastic) method; the 2007 edition adopts limit state design, harmonising Indian practice with international codes. Along the way it introduced partial safety factors, classification of cross-sections, multiple column-buckling curves, a consistent treatment of high-strength friction grip bolts and separate material factors for shop and site welds. Every clause number quoted in this subject belongs to IS 800: 2007.",
              "The working stress method compares working (unfactored) loads against permissible stresses obtained by dividing the yield stress by a single global factor of safety - roughly 1.67 in tension. It is simple and gave a century of safe structures, but its single factor lumps together every uncertainty: overload, material variation, fabrication error and analysis idealisation. The result is an uneven reliability - joints end up over-safe while slender compression members drift toward the unsafe side - and the method offers no formal check of deflection or vibration.",
              "Limit state design names each undesirable condition - a limit state - and checks the structure against reaching it. Characteristic loads are multiplied by load factors (1.5 on dead plus live, for example) and characteristic strengths are divided by material partial safety factors, so the two families of uncertainty are treated separately. Strength checks use factored loads; serviceability checks still use working loads. The reward is consistent reliability and more economical sections; the price is the bookkeeping of factors, which is exactly what this unit teaches.",
            ],
            bullets: [
              "IS 800: 2007 replaced the 1984 working-stress code with limit state design aligned to international practice.",
              "Working stress method: working loads versus fy/1.67; one global factor mixes every uncertainty into a single number.",
              "Limit state method: factored loads (1.5 for DL + LL) versus design strengths (fy/gamma_m0, fu/gamma_m1).",
              "New tools in 2007: section classification, four buckling curves, gamma_mw for welds, slip-resistance design of HSFG bolts.",
              "Serviceability (deflection, vibration) is checked at working loads in both philosophies - never at factored loads.",
            ],
            table: {
              caption: "The two design philosophies compared clause by clause.",
              headers: ["Aspect", "Working stress (IS 800: 1984)", "Limit state (IS 800: 2007)"],
              rows: [
                ["Load basis", "Working (unfactored) loads", "Factored loads, 1.2 to 1.5"],
                ["Safety", "Single FOS about 1.67", "gamma_f on loads, gamma_m on materials"],
                ["Strength check", "Stress below permissible", "Design strength >= factored demand"],
                ["Sections", "No classification", "Plastic / compact / semi-compact / slender"],
                ["Buckling", "One curve", "Four curves a, b, c, d"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Working stress design versus limit state design",
              caption:
                "Left: the older single-factor world. Right: the factored-load, partial-factor world of IS 800: 2007.",
              left: {
                heading: "Working stress method",
                items: [
                  "Working loads, unfactored",
                  "Stress kept below fy / 1.67",
                  "One global factor of safety",
                  "Elastic analysis only",
                  "Simple but uneven safety margins",
                ],
              },
              right: {
                heading: "Limit state method",
                items: [
                  "Factored loads such as 1.5 (DL + LL)",
                  "Design strengths with gamma_m0, gamma_m1",
                  "Separate strength and serviceability checks",
                  "Section classification and buckling curves",
                  "Consistent reliability, leaner sections",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Never mix the two methods",
              body: "A classic lost-mark error is comparing a factored load with a permissible stress, or an unfactored load with a design strength. Decide first which philosophy the question lives in - in CE-801 it is always limit state - then apply gamma_f on one side and gamma_m on the other, never both on the same side.",
            },
            keyTerms: [
              { term: "Working stress method", definition: "Design by keeping stresses from working loads below a permissible stress fy/FOS." },
              { term: "Limit state method", definition: "Design so that the probability of reaching any defined limit state - collapse or discomfort - is acceptably low." },
              { term: "Factor of safety", definition: "The single global divisor of strength used in the working stress method, typically about 1.67 in tension." },
            ],
            examQuestions: [
              {
                q: "Compare the working stress and limit state methods of steel design. Why did IS 800 move to the limit state format in its 2007 edition?",
                marks: 7,
                outline: [
                  "Define both methods in one sentence each, naming the load and stress levels used.",
                  "Show the working stress check: stress from working loads <= fy / 1.67.",
                  "Show the limit state check: factored load effect <= design resistance fy/gamma_m or fu/gamma_m1.",
                  "Explain why a single factor of safety gives uneven reliability across failure modes.",
                  "List what the 2007 revision added: classification, buckling curves, gamma factors, HSFG slip design.",
                  "State that serviceability is checked at working loads in both methods.",
                  "Conclude: limit state gives consistent reliability and leaner, more honest designs.",
                ],
              },
              {
                q: "State the permissible tensile stress for E250 steel under the working stress method and the corresponding design stress under the limit state method.",
                marks: 2,
              },
              {
                q: "Name any three features introduced by IS 800: 2007 that did not exist in the 1984 edition.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Partial safety factors and factored load combinations",
            body: [
              "Limit state design quantifies uncertainty with two families of partial safety factors. Loads vary with occupancy and weather, so characteristic loads are multiplied by gamma_f: 1.5 on dead plus live, 1.2 when dead, live and wind act together, 1.5 on dead plus wind, and 0.9 dead plus 1.5 wind when uplift reverses the effect. Materials, dimensions and workmanship vary too, so strengths are divided by gamma_m: gamma_m0 = 1.10 for yielding and buckling of members, gamma_m1 = 1.25 for rupture at net sections and for bolt strengths, gamma_mb = 1.25 for bolts, and gamma_mw = 1.25 for shop welds but 1.50 for site welds.",
              "The load combinations come from IS 800 Table 4 together with IS 875. Dead load and imposed load usually govern gravity design: factored effect = 1.5 (DL + LL). Where wind matters - roofs, tall frames, open sheds - three more combinations enter: 1.2 (DL + LL + WL), 1.5 (DL + WL) and 0.9 DL + 1.5 WL, the last one catching the uplift case where a light roof tries to fly while its own dead load is the only restraint. Each combination must be checked because the critical member force may come from any of them.",
              "A miniature numerical fixes the idea. A tension member of gross area 1200 mm^2 in E250 steel has design yield strength Tdg = 1200 x 250 / 1.10 = 272.7 kN. If the characteristic dead load is 80 kN and live load 90 kN, the factored demand is 1.5 x 170 = 255 kN, which is safely below 272.7 kN. Note how the two factor families meet in one inequality: loads inflated by gamma_f, strength deflated by gamma_m - and the member sits between them with a margin a working-stress designer could never name precisely.",
            ],
            bullets: [
              "gamma_f inflates loads: 1.5 (DL + LL), 1.2 (DL + LL + WL), 1.5 (DL + WL), 0.9 DL + 1.5 WL for uplift.",
              "gamma_m0 = 1.10 divides fy for yielding and buckling checks of members.",
              "gamma_m1 = 1.25 divides fu for net-section rupture and bolt strength calculations.",
              "gamma_mw = 1.25 for shop welds and 1.50 for site welds; gamma_mb = 1.25 for bolts.",
              "Serviceability verifications (deflection, vibration) always use unfactored characteristic loads.",
            ],
            table: {
              caption: "Partial safety factors of IS 800: 2007 at a glance.",
              headers: ["Factor", "Symbol", "Value", "Applies to"],
              rows: [
                ["Material - yielding/buckling", "gamma_m0", "1.10", "Flexure, axial yield and buckling"],
                ["Material - rupture", "gamma_m1", "1.25", "Net section rupture, bolt strength"],
                ["Welds - shop", "gamma_mw", "1.25", "Weld design strength"],
                ["Welds - site", "gamma_mw", "1.50", "Weld design strength"],
                ["Loads", "gamma_f", "1.2 - 1.5", "DL, LL, WL combinations"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Setting up a limit state check correctly",
              caption:
                "The check only means something when gamma_f and gamma_m land on their own sides of the inequality.",
              start: "Building the design inequality",
              branches: [
                {
                  label: "Multiply characteristic loads by gamma_f",
                  outcome: "Factored demand, e.g. 1.5 (DL + LL) - the left side of the check",
                  good: true,
                },
                {
                  label: "Divide strength by gamma_m0 or gamma_m1",
                  outcome: "Design resistance such as Ag fy / 1.10 - the right side of the check",
                  good: true,
                },
                {
                  label: "Compare unfactored loads with design strengths",
                  outcome: "Unconservative - the joint can be overloaded by a third",
                  good: false,
                },
                {
                  label: "Apply gamma_f, gamma_m and an old FOS together",
                  outcome: "Double-counted safety - heavy, costly, unjustifiable",
                  good: false,
                },
              ],
            },
            callout: {
              type: "tip",
              title: "Factor map on one line",
              body: "Pin this above your desk: 1.10 yield - 1.25 break - 1.25 shop weld - 1.50 site weld - 1.25 bolt - 1.5 load. Six numbers, and every design question in the paper uses at least one of them.",
            },
            keyTerms: [
              { term: "gamma_f", definition: "Load partial safety factor that converts characteristic loads to factored design loads (1.2 to 1.5)." },
              { term: "gamma_m0", definition: "Material factor 1.10 applied to fy in yielding and buckling checks of members." },
              { term: "Load combination", definition: "A prescribed set of loads factored together, such as 1.5 (DL + LL) or 0.9 DL + 1.5 WL, each checked separately." },
            ],
            examQuestions: [
              {
                q: "State the partial safety factors adopted by IS 800: 2007 for loads, for member yielding and rupture, for bolts and for shop and site welds. Explain the philosophy of separating load and material factors with a small numerical example.",
                marks: 7,
                outline: [
                  "Give the load factors: 1.5 (DL + LL), 1.2 (DL + LL + WL), 1.5 (DL + WL), 0.9 DL + 1.5 WL.",
                  "Give gamma_m0 = 1.10 for yielding/buckling and gamma_m1 = 1.25 for rupture.",
                  "Give gamma_mb = 1.25 for bolts and gamma_mw = 1.25 shop / 1.50 site for welds.",
                  "Explain: loads vary with usage and climate; materials vary with rolling, fabrication and workmanship.",
                  "Argue that separate factors give consistent reliability, unlike a single FOS.",
                  "Work the example: Ag = 1200 mm^2 gives Tdg = 272.7 kN versus factored demand 1.5 x 170 = 255 kN.",
                  "Conclude that the member is safe and state the margin explicitly.",
                ],
              },
              {
                q: "Why is gamma_mw higher for site welds than for shop welds?",
                marks: 2,
              },
              {
                q: "Write the four factored load combinations involving wind and state which one governs the design of a light roof against uplift.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Section classification: plastic, compact, semi-compact and slender",
            body: [
              "Before any member is designed, its cross-section must be classified, because thin plate elements can buckle locally before the section even yields. Classification depends on the width-to-thickness ratio of each element - the outstanding flange, the web - measured about the appropriate plate boundary. The limits scale with the factor epsilon = sqrt(250/fy), so a section that is compact in E250 steel can drop to semi-compact in E350 simply because the steel is stronger and the accepted strain demand is higher. IS 800 Table 2 lists the limits for every element type.",
              "Four classes exist. A plastic section reaches its plastic moment and rotates further to form a plastic hinge; its flange limit is b/t <= 9.4 epsilon. A compact section reaches the plastic moment but cannot rotate appreciably; b/t <= 10.5 epsilon. A semi-compact section only reaches first yield, with the extreme fibre at fy; b/t <= 15.7 epsilon. A slender section buckles locally below yield and must be derated with effective properties. Webs in bending about the major axis follow 84, 105 and 126 epsilon for the same three classes when the neutral axis sits at mid-depth.",
              "Classification is not an academic label; it decides the design formula. For laterally supported beams, IS 800 computes Md = beta_b Zp fy / gamma_m0 with beta_b = 1.0 for plastic and compact sections, but semi-compact sections must use the elastic modulus: Md = Ze fy / gamma_m0. Slender sections lose even more. So a single flange-thickness check upstream changes the entire downstream design - a point examiners test by handing you a section table and expecting the classification before any moment capacity is quoted.",
            ],
            bullets: [
              "Classification grades each plate element by slenderness b/t against IS 800 Table 2 limits.",
              "Flange limits: plastic 9.4 epsilon, compact 10.5 epsilon, semi-compact 15.7 epsilon (outstanding element).",
              "Web limits in bending (NA at mid-depth): 84, 105, 126 epsilon for plastic, compact, semi-compact.",
              "epsilon = sqrt(250/fy): stronger steel shrinks every limit, so high-grade sections classify worse.",
              "Consequence: beta_b = 1.0 with Zp for plastic/compact beams, but semi-compact beams use Ze - a lower capacity.",
            ],
            codeExample: {
              language: "python",
              caption: "Classifying an outstanding flange element against IS 800 Table 2",
              code: `def epsilon(fy):
    """Root factor that scales every classification limit."""
    return (250.0 / fy) ** 0.5

def classify_flange(b, t, fy):
    """Classify an outstanding flange element of width b and thickness t."""
    e = epsilon(fy)
    ratio = b / t
    if ratio <= 9.4 * e:
        return "plastic"
    if ratio <= 10.5 * e:
        return "compact"
    if ratio <= 15.7 * e:
        return "semi-compact"
    return "slender"

# E250 steel (epsilon = 1.0), outstanding flange b = 66 mm
print(classify_flange(66.0, 9.4, 250))   # -> plastic
print(classify_flange(100.0, 9.4, 250))  # -> semi-compact
print(classify_flange(160.0, 9.4, 250))  # -> slender
print(classify_flange(66.0, 9.4, 350))   # -> compact (epsilon 0.85 tightens limits)`,
            },
            diagram: {
              kind: "pyramid",
              title: "The four classes, most capable on top",
              caption:
                "Read downward: each tier tolerates less rotation before local buckling intervenes.",
              tiers: [
                { label: "Plastic", note: "b/t <= 9.4e: reaches Mp and rotates to a hinge" },
                { label: "Compact", note: "b/t <= 10.5e: reaches Mp, little rotation" },
                { label: "Semi-compact", note: "b/t <= 15.7e: first yield only" },
                { label: "Slender", note: "local buckling before yield - derate" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When a question hands you a rolled section, compute the flange b/t and web d/t against 9.4, 10.5, 15.7 and 84, 105, 126 epsilon before doing anything else. Stating the class - and the beta_b it forces - is routinely worth two of the seven marks.",
            },
            keyTerms: [
              { term: "Plastic section", definition: "A section that can reach its plastic moment and rotate through a plastic hinge without local buckling." },
              { term: "Compact section", definition: "A section that reaches its plastic moment but has only limited rotation capacity." },
              { term: "Epsilon factor", definition: "sqrt(250/fy), the scaling factor that adjusts classification limits for steel grade." },
            ],
            examQuestions: [
              {
                q: "Explain the classification of cross-sections in IS 800: 2007. State the flange and web limits for each class and show how the classification changes the design bending strength of a laterally supported beam.",
                marks: 7,
                outline: [
                  "Define local buckling of plate elements and why it threatens thin sections.",
                  "Introduce epsilon = sqrt(250/fy) as the scaling factor for all limits.",
                  "Flange limits: 9.4e plastic, 10.5e compact, 15.7e semi-compact.",
                  "Web limits (bending, NA at mid-depth): 84e, 105e, 126e.",
                  "Plastic sections form hinges; compact reach Mp; semi-compact reach first yield; slender buckle early.",
                  "Beam consequence: Md = 1.0 x Zp fy/gamma_m0 for plastic/compact, but Ze fy/gamma_m0 for semi-compact.",
                  "Note that higher steel grades tighten the limits through a smaller epsilon.",
                ],
              },
              {
                q: "Compute epsilon for E350 steel and evaluate the plastic flange limit.",
                marks: 2,
              },
              {
                q: "A section reaches its plastic moment but cannot undergo plastic rotation. Name its class and give its outstanding-flange limit.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Limit states of strength and serviceability",
            body: [
              "A limit state is any condition beyond which the structure no longer satisfies the purpose for which it was designed. IS 800 splits them into two families. Strength limit states threaten collapse: loss of equilibrium, rupture of sections or connections, buckling of members and plates, loss of stability as a mechanism, fatigue under repeated loading and accidental events such as fire or impact. Serviceability limit states spoil comfort or function short of danger: excessive deflection, vibration, corrosion and durability loss. Every design in Units II to V is a walk down this list.",
              "The loads that feed these checks come from IS 875 and IS 1893: dead load from unit weights (Part 1), imposed or live load from occupancy (Part 2), wind pressure and suction on the building envelope (Part 3) and earthquake effects (IS 1893). Each load is a characteristic value - an upper-bound statistical estimate, not a certainty. Erection loads deserve their own combination because a partly braced frame under construction is often weaker than the finished building it will become.",
              "The two families are checked at different load levels, which is the whole trick of the method. Strength checks use factored loads: 1.5 (DL + LL) for gravity, the wind combinations of Section 1.3 for exposed structures. Serviceability checks use working loads: a purlin deflection is judged under characteristic dead plus live load, and a floor beam's vibration under normal use. Fatigue is the hybrid - collapse-class consequences, but from stress ranges caused by unfactored working loads repeated over millions of cycles, which is why crane girders live by a different table altogether.",
            ],
            bullets: [
              "Strength limit states: collapse, rupture, buckling, instability, fatigue and accidental (fire, impact) conditions.",
              "Serviceability limit states: deflection, vibration, durability and corrosion - discomfort, not danger.",
              "Load sources: IS 875 Parts 1-3 (dead, imposed, wind), IS 1893 (earthquake), plus erection cases.",
              "Strength checks run on factored loads; serviceability checks run on unfactored working loads.",
              "Fatigue uses working-load stress ranges over many cycles - the bridge and crane-girder limit state.",
            ],
            table: {
              caption: "Principal limit states and how each is verified.",
              headers: ["Limit state", "Family", "Typical check"],
              rows: [
                ["Yielding of gross section", "Strength", "Tdg = Ag fy / gamma_m0 >= Tu"],
                ["Rupture of net section", "Strength", "Tdn = 0.9 fu Anc / gamma_m1 >= Tu"],
                ["Member buckling", "Strength", "Pd = Ae fcd >= Pu"],
                ["Fatigue", "Strength", "Stress range from working loads <= limit"],
                ["Deflection", "Serviceability", "Delta <= L/250 to L/300 (working loads)"],
                ["Vibration", "Serviceability", "Natural frequency above comfort threshold"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Which loads feed which checks",
              caption:
                "The 2x2 that students get wrong: factored loads never appear in comfort checks, and fatigue borrows working loads for a collapse-class check.",
              axes: {
                x: "Load basis (left: working loads, right: factored loads)",
                y: "Consequence (top: discomfort, bottom: collapse)",
              },
              quadrants: [
                { label: "Serviceability checks", note: "deflection and vibration at working loads" },
                { label: "Not used", note: "serviceability is never judged at factored loads" },
                { label: "Fatigue", note: "collapse-class risk from working-load stress ranges" },
                { label: "Strength checks", note: "yielding, rupture, buckling with gamma_f and gamma_m" },
              ],
            },
            callout: {
              type: "warning",
              title: "Deflection at factored loads is a classic trap",
              body: "If a question asks for a deflection check, immediately write 'checked under working loads per IS 800 Table 6'. Using 1.5 times the loads overstates the sag by half and caps your marks for an otherwise correct calculation.",
            },
            keyTerms: [
              { term: "Limit state", definition: "A defined condition beyond which the structure ceases to perform its design function." },
              { term: "Serviceability", definition: "The family of limit states governing comfort and function - deflection, vibration, durability - at working loads." },
              { term: "Fatigue", definition: "Strength-class limit state caused by repeated working-load stress ranges over many cycles." },
            ],
            examQuestions: [
              {
                q: "Define a limit state. List the strength and serviceability limit states recognized in steel design and explain, with examples, why the two families are checked at different load levels.",
                marks: 7,
                outline: [
                  "Define limit state as the boundary of acceptable performance.",
                  "Strength list: collapse, rupture, buckling, mechanism, fatigue, accidental/fire.",
                  "Serviceability list: deflection, vibration, corrosion/durability.",
                  "Explain load levels: strength at factored loads (1.5 DL + LL), serviceability at working loads.",
                  "Example: a purlin checked for strength under 1.5 (DL + WL) but deflection under DL + LL.",
                  "Example: fatigue assessed from stress ranges of unfactored crane loads.",
                  "Conclude with the reliability logic: low-probability collapse events versus everyday comfort.",
                ],
              },
              {
                q: "Name any four strength limit states.",
                marks: 2,
              },
              {
                q: "Under which load level is the deflection of a roof beam checked, and why?",
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
      title: "Bolted Connections",
      summary:
        "The first connection technology: bearing bolts versus preloaded high-strength friction grip bolts, the five failure modes of a joint, the shear, bearing and tension capacity of a bolt with its interaction rule, the detailing grammar of pitch, gauge and edge distance, and block shear - the brittle tear that closes every complete joint design.",
      chapter: {
        number: "02",
        title: "Bolted Connections",
        intro:
          "Unit II takes the humble bolt seriously. It opens with the two bolt families - ordinary bearing (black) bolts that transfer load through shear and bearing, and preloaded high-strength friction grip bolts that transfer it through friction - then catalogues every way a joint can fail, derives the capacity of a single bolt in shear, bearing and tension, lays down the detailing rules of pitch, gauge and edge distance, and finishes with block shear and a complete lap-joint design.",
        inOneBreath:
          "Bearing bolts work in clearance holes and transfer load by bolt shear and plate bearing; HSFG bolts are preloaded to 0.7 fub Asb so the ply friction carries the load until the design slip resistance mu_f ne Kh F0 / gamma_mf is exceeded; a joint can fail by bolt shear, plate bearing, net-section rupture, edge tearing or block shear, and the design must check them all; Vdsb = fub Ann / (1.732 gamma_mb) with Ann = 0.78 Asb, Vdpb = 2.5 kb d t fub / gamma_mb with kb the least of four terms; detailing demands pitch at least 2.5d, edge distance about 1.5d0 and block shear capacity Tdb from two competing shear-plus-tension expressions.",
        sections: [
          {
            number: "2.1",
            title: "Bearing bolts and high-strength friction grip bolts",
            body: [
              "A bolted connection joins plates through holes about 2 mm larger than the bolt, so ordinary bolts sit loose until the joint slips and the shanks bear against the hole edges. These bearing or black bolts are graded by property class: 4.6 (fy = 240 MPa, fu = 400 MPa), 8.8 (fy = 640 MPa, fu = 800 MPa), 10.9 and 12.9 - the first digit times 100 gives fu, the product of the digits times 10 gives fy. Load transfer is by shear on the bolt shank and bearing on the plate; snug-tight installation is enough.",
              "High-strength friction grip (HSFG) bolts change the mechanism entirely. The bolt is preloaded to its proof load, 0.7 fub Asb, clamping the plies so hard that load passes by friction and the joint does not slip until the friction is overcome. Design slip resistance is Vsf = mu_f ne Kh F0 / gamma_mf, where mu_f is the slip factor (0.2 to 0.5 depending on the faying surface condition), ne the number of effective interfaces, Kh a factor for hole size and grip length, and gamma_mf equals 1.10 when slip is checked at service loads and 1.25 at ultimate loads.",
              "The choice between the families is about behaviour, not strength alone. Bearing bolts are cheap, quick and forgiving; but they slip, and the bearing action is hostile to repeated loads. HSFG bolts, with their clamp, give a stiff, slip-free, fatigue-friendly joint and resist tension better because the preload must be overcome first - which is why bridges, crane girders and members with load reversal specify them. Installation needs control: calibrated wrenches, turn-of-nut rotation or direct tension indicators verify that the proof load was actually reached.",
            ],
            bullets: [
              "Property class numbers: fu = first digit x 100 MPa; fy = product of digits x 10 MPa (8.8 gives 800/640).",
              "Bearing bolts transfer load by shank shear and plate bearing in clearance holes, snug-tight.",
              "HSFG preload: proof load = 0.7 fub Asb; load passes by friction between plies until slip.",
              "Slip resistance Vsf = mu_f ne Kh F0 / gamma_mf; gamma_mf = 1.10 at service, 1.25 at ultimate.",
              "Use HSFG for fatigue, dynamic and reversed loads (bridges, crane girders); bearing bolts for static work.",
            ],
            table: {
              caption: "Bearing bolts versus HSFG bolts.",
              headers: ["Aspect", "Bearing bolt (4.6/8.8)", "HSFG bolt (8.8/10.9)"],
              rows: [
                ["Load transfer", "Shank shear + plate bearing", "Friction between plies"],
                ["Installation", "Snug tight", "Preloaded to 0.7 fub Asb"],
                ["Slip under load", "Occurs at small overload", "Resisted up to design slip load"],
                ["Fatigue behaviour", "Poor (bearing action)", "Good (no slip, no hole movement)"],
                ["Typical use", "Buildings, static joints", "Bridges, crane girders, reversals"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two ways a bolt carries load",
              caption:
                "Left: the bearing bolt leans on the hole edges. Right: the friction grip bolt never lets the plies touch the shank.",
              left: {
                heading: "Bearing (black) bolt",
                items: [
                  "Clearance hole, about 2 mm oversize",
                  "Load path: shear on shank, bearing on plate",
                  "Joint slips before it works",
                  "Snug-tight installation only",
                  "Cheap; poor under fatigue",
                ],
              },
              right: {
                heading: "Friction grip bolt",
                items: [
                  "Preload to proof load 0.7 fub Asb",
                  "Load path: friction on the faying surfaces",
                  "No slip below design slip resistance",
                  "Torque or turn-of-nut control needed",
                  "Stiff and fatigue-friendly",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Decode property classes instantly: 4.6 means fu = 4 x 100 = 400 MPa and fy = 4 x 6 x 10 = 240 MPa; 8.8 means 800 and 640 MPa. This two-line decoding is a recurring 2-mark question and feeds every later capacity formula.",
            },
            keyTerms: [
              { term: "Property class", definition: "Bolt grade notation such as 8.8 encoding fu and fy in MPa from its digits." },
              { term: "Proof load", definition: "The preload of an HSFG bolt, 0.7 fub Asb, that clamps the plies together." },
              { term: "Slip factor", definition: "Coefficient of friction mu_f between the faying surfaces, 0.2 to 0.5, controlling slip resistance." },
            ],
            examQuestions: [
              {
                q: "Differentiate between bearing-type and friction-grip bolts. Explain the load transfer mechanism of each and state where each is preferred, with the slip resistance expression for HSFG bolts.",
                marks: 7,
                outline: [
                  "Describe bearing bolts: clearance holes, snug tight, shear plus bearing transfer.",
                  "Decode property classes 4.6 and 8.8 into fy and fu values.",
                  "Describe HSFG bolts: preload to 0.7 fub Asb, friction transfer, no slip.",
                  "Write Vsf = mu_f ne Kh F0 / gamma_mf and define each symbol.",
                  "State gamma_mf = 1.10 (service slip) and 1.25 (ultimate slip).",
                  "Compare fatigue and dynamic behaviour of the two families.",
                  "Applications: HSFG for bridges and crane girders; bearing bolts for static building joints.",
                ],
              },
              {
                q: "State fy and fu for a property class 4.6 bolt.",
                marks: 2,
              },
              {
                q: "Why are HSFG bolts preferred in structures subjected to load reversals and fatigue?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Failure modes of bolted joints",
            body: [
              "A lap joint can fail in more ways than the bolt breaking. On the bolt side, the shank can shear - one plane in single shear with a single cover, two planes in double shear with cover plates - or the bolt can pull out in tension. On the plate side, the plate can tear through the net section across the bolt line, the hole edges can crush in bearing, the material at the end can split outward between the hole and the free edge, or a whole block of material can tear out of the corner - the block shear failure studied fully in Section 2.5.",
              "Each mode carries its own formula. Bolt shear capacity Vdsb = fub Ann / (1.732 gamma_mb) per plane; bearing capacity Vdpb = 2.5 kb d t fub / gamma_mb; net-section rupture Tdn = 0.9 fu Anc / gamma_m1. The ductility differs sharply: bolt shear and bearing are preceded by large, visible deformations, while net-section rupture and edge tear-outs are sudden. Good design nudges the ductile modes to govern, so the joint announces distress before it lets go.",
              "The examiner wants the catalogue with sketches. Draw the lap joint, mark the shear planes through the shank, shade the net section through the holes, show the crushed zone in front of the bolt and the tear lines at the edge - one sketch per mode. Then pair each sketch with its formula and its prevention: more or larger bolts for shear, thicker plate or better edge distance for bearing and tearing, staggered holes and adequate end distance for net section and block shear. This single page of diagrams answers a decade of RGPV questions.",
            ],
            bullets: [
              "Bolt failures: shear of the shank (single or double plane) and tension in the bolt.",
              "Plate failures: net-section rupture, bearing (crushing) at hole edges, edge splitting, block shear.",
              "Vdsb = fub Ann / (1.732 gamma_mb); Vdpb = 2.5 kb d t fub / gamma_mb; Tdn = 0.9 fu Anc / gamma_m1.",
              "Bolt shear and bearing are ductile with warning; net-section rupture and tear-outs are sudden and brittle.",
              "Prevention by detailing: pitch and edge distance against tearing, staggering holes for net section.",
            ],
            table: {
              caption: "The failure-mode catalogue with formula sketches.",
              headers: ["Mode", "Formula sketch", "Ductility", "Prevented by"],
              rows: [
                ["Bolt shear", "Vdsb = fub Ann / (1.732 gamma_mb)", "Ductile", "More bolts, larger bolt"],
                ["Bearing of plate", "Vdpb = 2.5 kb d t fub / gamma_mb", "Ductile", "Thicker plate, edge distance"],
                ["Net-section rupture", "Tdn = 0.9 fu Anc / gamma_m1", "Sudden", "Stagger holes, larger area"],
                ["Edge splitting", "governed by end distance", "Sudden", "End distance >= 1.5 d0"],
                ["Block shear", "Tdb, two expressions", "Sudden", "Stagger, edge distance, pitch"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Push a lap joint to failure",
              caption:
                "Four destinations - the two on the left announce themselves; the two on the right do not.",
              start: "Joint loaded past capacity",
              branches: [
                {
                  label: "Bolt shank shears",
                  outcome: "Large deformation and visible slip first - a ductile warning",
                  good: true,
                },
                {
                  label: "Plate crushes in bearing",
                  outcome: "Holes ovalise, joint settles - still ductile",
                  good: true,
                },
                {
                  label: "Plate snaps at net section",
                  outcome: "Sudden rupture through the bolt line - no warning",
                  good: false,
                },
                {
                  label: "Corner block tears out",
                  outcome: "Brittle combined shear and tension tear - block shear",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Sketches are not optional",
              body: "In RGPV answers, an unlabelled formula earns half marks at best. Draw the joint, mark the failure plane with a jagged line, label d, d0, t, e and p, then write the formula beside the sketch. The picture is the answer sheet's proof that you know where each failure lives.",
            },
            keyTerms: [
              { term: "Net section rupture", definition: "Sudden tearing of the plate through the bolt holes where the cross-section is reduced." },
              { term: "Bearing failure", definition: "Crushing of the plate material in front of the bolt shank when bearing stress exceeds 2.5 kb fub." },
              { term: "Block shear", definition: "Tear-out of a block of material along a line of bolts, combining shear and tension areas." },
            ],
            examQuestions: [
              {
                q: "With neat sketches, explain the various failure modes of a bolted (riveted) lap joint. Which modes are ductile and which are brittle, and how does detailing prevent the brittle ones?",
                marks: 7,
                outline: [
                  "Sketch the lap joint with one cover plate and label the parts.",
                  "Mode 1: bolt shear - single and double planes - with Vdsb formula.",
                  "Mode 2: bearing failure of the plate with Vdpb formula.",
                  "Mode 3: net-section rupture of the plate with Tdn formula.",
                  "Mode 4: edge splitting and block shear, governed by end distance.",
                  "Classify ductility: shear and bearing deform visibly; rupture and tear are sudden.",
                  "Detailing remedies: minimum pitch, end and edge distance, staggered holes.",
                ],
              },
              {
                q: "Distinguish single shear from double shear in a bolted joint with sketches.",
                marks: 2,
              },
              {
                q: "Why is net-section rupture considered more dangerous than bearing failure in a joint?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Design strength of bolts in shear, bearing and tension",
            body: [
              "The shear capacity of a bearing-type bolt depends on which area crosses the shear plane. If threads intercept the plane, the net area at the threads Ann = 0.78 Asb governs; if the plane passes through the plain shank, the full bolt area Asb = 0.7854 d^2 is available. IS 800 gives Vnsb = (fub / 1.732) (nn Ann + ns Asb) and Vdsb = Vnsb / gamma_mb with gamma_mb = 1.25. For an M20 8.8 bolt in single shear with threads on the plane, this yields about 90.5 kN - a number worth memorising as a sanity anchor.",
              "Bearing capacity treats the bolt as a cylindrical punch working on the plate. Vnpb = 2.5 kb d t fub, where kb is the least of four terms: e/(3 d0), p/(3 d0) - 0.25, fub/fu (bolt to plate strength ratio) and 1.0. The design value divides by gamma_mb. With M20 bolts (d0 = 22 mm) at pitch 60 mm, edge distance 33 mm, in a 12 mm E250 plate, kb works out to 0.5 and Vdpb to about 192 kN - far above the bolt's shear capacity, so shear governs the count in this typical detail.",
              "Bolts loaded in tension resist Tnf = 0.9 fub Anc at the threaded section, divided by gamma_mb for design. When shear and tension act together, IS 800 requires the interaction (Vsd/Vdsb)^2 + (Tsd/Tdf)^2 <= 1.0. Added care comes from prying forces - the extra tension created when connected plates lever the bolt head upward - which must be added to the applied tension or suppressed with thicker plates and shorter grips. A bracket bolting problem in the exam is exactly this interaction played out over a bolt group.",
            ],
            bullets: [
              "Shear planes: threads on the plane give Ann = 0.78 Asb; plain shank gives Asb = 0.7854 d^2.",
              "Vdsb = fub (nn Ann + ns Asb) / (1.732 gamma_mb); M20 8.8 single shear is about 90.5 kN.",
              "Bearing: Vdpb = 2.5 kb d t fub / gamma_mb with kb = least of e/3d0, p/3d0 - 0.25, fub/fu, 1.0.",
              "Tension: Tdf = 0.9 fub Anc / gamma_mb; add prying force to the applied tension.",
              "Interaction for combined loading: (Vsd/Vdsb)^2 + (Tsd/Tdf)^2 <= 1.0.",
            ],
            codeExample: {
              language: "python",
              caption: "Shear and bearing capacity of one bearing-type bolt",
              code: `def bolt_shear_capacity(d, fub=800, planes=1, threads_in_shear=True,
                         gamma_mb=1.25):
    """Design shear capacity of one bolt in newtons."""
    asb = 0.7854 * d * d            # shank area, mm^2
    ann = 0.78 * asb                # net area at the threads
    a = ann if threads_in_shear else asb
    return planes * fub * a / (1.732 * gamma_mb)

def bolt_bearing_capacity(d, d0, t, e, p, fub=800, fu_plate=410,
                          gamma_mb=1.25):
    """Design bearing capacity per bolt in newtons."""
    kb = min(e / (3 * d0), p / (3 * d0) - 0.25, fub / fu_plate, 1.0)
    return 2.5 * kb * d * t * fub / gamma_mb

# M20 grade 8.8 bolt, single shear, threads on the shear plane
print(bolt_shear_capacity(20) / 1000.0)
# -> 90.5 kN

# Same bolt bearing on a 12 mm E250 plate, d0 = 22, e = 33, p = 60
print(bolt_bearing_capacity(20, 22, 12, 33, 60) / 1000.0)
# -> 192.0 kN (kb = 0.5, so shear governs the bolt count)`,
            },
            diagram: {
              kind: "pipeline",
              title: "Designing a lap joint in five numbered stages",
              caption:
                "The exam template: run the stages in order and the marks attach themselves to each stage.",
              stages: [
                { label: "1. Factored load", note: "Vu or Tu from the combinations" },
                { label: "2. Bolt capacities", note: "Vdsb and Vdpb per bolt" },
                { label: "3. Number of bolts", note: "N >= V / min(Vdsb, Vdpb)" },
                { label: "4. Detailing", note: "pitch, gauge, edge distance" },
                { label: "5. Member checks", note: "net section + block shear" },
              ],
            },
            callout: {
              type: "tip",
              title: "The kb trap",
              body: "kb is the LEAST of four terms, and in most exam numbers the edge-distance term e/(3 d0) or the pitch term wins, not 1.0. Compute all four, circle the smallest, and write a one-line justification - examiners specifically look for students who blindly take kb = 1.",
            },
            keyTerms: [
              { term: "Ann", definition: "Net area of the bolt at the threads, taken as 0.78 times the shank area." },
              { term: "kb factor", definition: "The least of e/3d0, p/3d0 - 0.25, fub/fu and 1.0, scaling the bearing capacity." },
              { term: "Prying force", definition: "Extra bolt tension induced by flexing of the connected plates, added to the direct tension." },
            ],
            examQuestions: [
              {
                q: "Derive the design shear and bearing capacities of a bearing-type bolt as per IS 800: 2007, explaining kb. An M20 grade 8.8 bolt (threads on the shear plane) connects 12 mm E250 plates at pitch 60 mm and edge distance 33 mm; compute both capacities and the minimum number of bolts for a factored load of 250 kN.",
                marks: 7,
                outline: [
                  "Write Vnsb = fub Ann / 1.732 and Vdsb = Vnsb / gamma_mb with gamma_mb = 1.25.",
                  "Compute Asb = 314 mm^2, Ann = 245 mm^2 for M20.",
                  "Obtain Vdsb = 90.5 kN.",
                  "Write Vnpb = 2.5 kb d t fub and list the four kb candidates.",
                  "Compute kb = min(0.5, 0.66, 1.95, 1.0) = 0.5, giving Vdpb = 192 kN.",
                  "Shear governs: capacity per bolt = 90.5 kN.",
                  "Number of bolts = 250 / 90.5 = 2.8, provide 3 bolts; arrange with pitch and edge distance checked.",
                ],
              },
              {
                q: "State the interaction equation used when a bolt carries simultaneous shear and tension.",
                marks: 2,
              },
              {
                q: "What are prying forces in bolted connections, and how are they minimised?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Pitch, gauge, edge and end distances",
            body: [
              "Bolt spacing is grammar, not decoration. Minimum pitch is 2.5 d so that wrenches fit adjacent nuts, material between holes is not overly weakened, and the net section is not cramped into a tear line. Maximum pitch in tension members is 32 t or 300 mm (t = thinner outer plate); in compression members it tightens to 16 t or 200 mm so that plates buckling between bolts or separating under corrosion cannot slip through unnoticed. Gauge lines set the cross-beam direction of hole patterns in angles and channels.",
              "Edge and end distance - from hole centre to the free edge, parallel or perpendicular to the load - must clear a minimum so the bolt cannot tear or split its way out: about 1.5 d0 for machine-flame-cut or rolled edges and 1.7 d0 for sheared or hand-flame-cut edges, which carry a rougher, crack-prone boundary. The maximum edge distance is 12 t epsilon, keeping the overhang from curling away, buckling in compression, or opening a corrosion pocket that inspection cannot reach.",
              "Detailing follows a quick sanity routine: lay out a bolt line with pitch 3 d to 5 d, gauge about 2.5 d for angles, end distance at least 1.5 d0 rounded up, and check the arrangement against both minima and maxima. A sketch with the first hole and the free edge labelled e, the hole-to-hole distance p, and the cross direction g answers any theory question; a table of the four rules answers any short numerical. Staggering holes raises net width (adding p^2/4g per gauge crossing) while respecting the same minima.",
            ],
            bullets: [
              "Minimum pitch 2.5 d: wrench clearance plus enough metal between holes to avoid tearing.",
              "Maximum pitch: 32 t or 300 mm in tension; 16 t or 200 mm in compression (plate buckling between bolts).",
              "Minimum edge/end distance: about 1.5 d0 (machine cut) and 1.7 d0 (sheared or hand-flame-cut edges).",
              "Maximum edge distance 12 t epsilon to stop curling, buckling or corrosion pockets at the overhang.",
              "Staggered holes add p^2/4g per gauge crossing to net width - the classic net-area booster.",
            ],
            table: {
              caption: "IS 800 detailing rules for bolt holes.",
              headers: ["Rule", "Minimum", "Maximum", "Governing concern"],
              rows: [
                ["Pitch (along load)", "2.5 d", "32 t or 300 mm (tension)", "Wrench fit, net section"],
                ["Pitch in compression", "2.5 d", "16 t or 200 mm", "Buckling between bolts"],
                ["Edge/end distance", "1.5 d0 machine cut", "12 t epsilon", "Tear-out, curling, corrosion"],
                ["Edge (sheared edge)", "1.7 d0", "12 t epsilon", "Rough-edge splitting"],
                ["Gauge (across load)", "about 2.5 d", "as fabrication allows", "Standard angle patterns"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Pitch versus edge distance: the detailing 2x2",
              caption:
                "Only the top-right quadrant passes IS 800; every other corner names the failure it invites.",
              axes: {
                x: "Pitch (left: below 2.5 d, right: at least 2.5 d)",
                y: "Edge distance (top: at least 1.5 d0, bottom: below 1.5 d0)",
              },
              quadrants: [
                { label: "Wrench fouling", note: "sockets overlap; cramped net section" },
                { label: "Safe detailing", note: "both rules satisfied - detail accepted" },
                { label: "Severe tearing risk", note: "both deficient - reject outright" },
                { label: "Edge tear-out", note: "block shear and splitting govern" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Quote rules with their units and alternatives: 'pitch >= 2.5 d but not more than the LESSER of 32 t and 300 mm'. The word 'lesser' is where the marks hide - maximum rules are always two-value minima, and examiners test whether you know both halves.",
            },
            keyTerms: [
              { term: "Pitch", definition: "Distance between centres of adjacent bolts measured along the direction of load." },
              { term: "Gauge", definition: "Distance between bolt lines measured across the member, at right angles to pitch." },
              { term: "Edge distance", definition: "Distance from a bolt centre to the free edge of the plate, parallel (end) or perpendicular (edge) to load." },
            ],
            examQuestions: [
              {
                q: "State the IS 800: 2007 rules for minimum and maximum pitch and edge distances in bolted connections, giving the reason behind each rule. Why is the maximum pitch in compression members tighter than in tension members?",
                marks: 7,
                outline: [
                  "Minimum pitch 2.5 d - wrench clearance and material between holes.",
                  "Maximum pitch, tension: lesser of 32 t and 300 mm.",
                  "Maximum pitch, compression: lesser of 16 t and 200 mm.",
                  "Reason: plates in compression can buckle between bolts; tension plates only need contact.",
                  "Edge distance minimums: 1.5 d0 machine cut, 1.7 d0 sheared/hand-flame cut.",
                  "Edge distance maximum: 12 t epsilon - curling, buckling and corrosion of overhangs.",
                  "Illustrate with a sketch labelling p, g, e, d and d0.",
                ],
              },
              {
                q: "Define pitch and gauge in a bolted connection.",
                marks: 2,
              },
              {
                q: "A 20 mm bolt sits in a 22 mm hole with 30 mm end distance on a sheared edge. Is the end distance adequate? Justify with the IS 800 rule.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Block shear and the complete lap-joint design",
            body: [
              "Block shear is the quiet killer of short connections. Instead of the plate tearing across the bolt line, a rectangular block of material - bounded by the bolt holes and the free edge - shears along the line of bolts and pulls out in tension across the perpendicular segment. It strikes the ends of angles, flats and gussets where a compact bolt group leaves little material around it. The remedy begins with the sketch: draw the potential tear-out path before writing a single formula.",
              "IS 800 cl 6.4.1 gives two competing expressions and takes the lesser. Tdb = Avg fy / (1.732 gamma_m0) + 0.9 Atn fu / gamma_m1 treats the shear path as gross-area yielding plus net-area tension rupture; the alternative, Tdb = 0.9 Avn fu / (1.732 gamma_m1) + Atg fy / gamma_m0, assumes the shear path fractures at ultimate while the tension path yields. Here Avg and Avn are the gross and net areas along the shear line, Atg and Atn those across the tension segment - each the plate thickness times the path length, less hole deductions for the net values.",
              "Block shear completes the lap-joint design template. Having sized the bolt count from shear and bearing in Section 2.3 and detailed the pitch and edges in Section 2.4, the final stage computes Tdb for the actual bolt layout, and if it falls short, the detailer increases end distance, staggers the bolts or adds a line. A full question answer therefore reads: bolt capacities, bolt number, detailing, net-section check, block-shear check - five labelled stages, each worth its own marks, closing with the statement of the governing mode.",
            ],
            bullets: [
              "Block shear tears a block bounded by the bolt line and the free edge - sketch the path first.",
              "Expression 1: Tdb = Avg fy/(1.732 gamma_m0) + 0.9 Atn fu/gamma_m1 (shear yields, tension ruptures).",
              "Expression 2: Tdb = 0.9 Avn fu/(1.732 gamma_m1) + Atg fy/gamma_m0 (shear ruptures, tension yields).",
              "Design capacity is the LESSER of the two expressions; areas come from the actual bolt layout.",
              "Cures for shortfall: larger end distance, staggered bolts, extra bolt line or thicker plate.",
            ],
            codeExample: {
              language: "python",
              caption: "Block shear capacity from the two IS 800 expressions",
              code: `def block_shear(Avg, Avn, Atg, Atn, fy=250, fu=410,
                    gamma_m0=1.10, gamma_m1=1.25):
    """Design block shear capacity in newtons (IS 800 cl 6.4.1)."""
    t1 = Avg * fy / (1.732 * gamma_m0) + 0.9 * Atn * fu / gamma_m1
    t2 = 0.9 * Avn * fu / (1.732 * gamma_m1) + Atg * fy / gamma_m0
    return min(t1, t2)

# 8 mm plate, one shear line of 120 mm (net 784 mm^2 after one hole),
# tension segment 60 mm across (net 416 mm^2)
print(block_shear(960, 784, 480, 416) / 1000.0)
# -> about 243 kN, expression 2 governs

# Rule of thumb: if the net shear area is small, expression 2
# (rupture along the bolt line) usually wins.`,
            },
            diagram: {
              kind: "flow",
              title: "The block shear check, step by step",
              caption:
                "Five steps from sketch to verdict - the same five the examiner's marking scheme uses.",
              steps: [
                { label: "Draw the tear-out path", note: "shear lines along the bolt row" },
                { label: "Mark Avg, Avn, Atg, Atn", note: "thickness x length, holes deducted" },
                { label: "Evaluate expression 1", note: "Avg fy/(1.732 gm0) + 0.9 Atn fu/gm1" },
                { label: "Evaluate expression 2", note: "0.9 Avn fu/(1.732 gm1) + Atg fy/gm0" },
                { label: "Take the lesser, compare", note: "Tdb >= Tu, else re-detail" },
              ],
            },
            callout: {
              type: "warning",
              title: "Which expression governs?",
              body: "Students love to memorise expression 1 and forget expression 2 exists. Compute BOTH, always. When the shear line is short or riddled with holes, expression 2 drops below expression 1, and quoting only the first overstates capacity by 10 to 15 per cent - enough to fail a design on site and a question in the hall.",
            },
            keyTerms: [
              { term: "Block shear", definition: "Failure in which a block of material tears out along a bolt line plus a perpendicular tension face." },
              { term: "Avg", definition: "Gross area along the shear segment of the tear-out path, thickness times length without hole deduction." },
              { term: "Atn", definition: "Net tension area across the perpendicular segment, hole deductions applied." },
            ],
            examQuestions: [
              {
                q: "Explain block shear failure in bolted connections with a neat sketch. Derive the two design expressions for Tdb as per IS 800: 2007 and state the conditions under which each governs.",
                marks: 7,
                outline: [
                  "Sketch the connection end showing the tear-out block bounded by bolt holes and free edge.",
                  "Identify the shear path along the bolt line and the tension path perpendicular to it.",
                  "Expression 1: Tdb = Avg fy/(1.732 gamma_m0) + 0.9 Atn fu/gamma_m1.",
                  "Expression 2: Tdb = 0.9 Avn fu/(1.732 gamma_m1) + Atg fy/gamma_m0.",
                  "Define the four areas: gross and net on both segments.",
                  "Design capacity is the lesser of the two.",
                  "Note remedies: end distance, stagger, extra line - and typical governing case for short shear lines.",
                ],
              },
              {
                q: "Why are both a yielding and a rupture expression evaluated in block shear?",
                marks: 2,
              },
              {
                q: "A connection fails in block shear at 180 kN against a factored load of 200 kN. Suggest three detailing changes that raise the capacity.",
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
      title: "Welded Connections",
      summary:
        "The second connection technology: the arc welding processes SMAW, GMAW and SAW with their defects and inspection, fillet weld geometry and design strength, butt weld preparation and effective throat, the symbol language of IS 813 with intermittent weld rules, and the design-plus-quality-assurance loop that decides between welding and bolting.",
      chapter: {
        number: "03",
        title: "Welded Connections",
        intro:
          "Unit III moves from bolts to fusion. It covers how an arc weld is made and the three processes that dominate structural work - shielded metal arc, gas metal arc and submerged arc welding - then the geometry and design of fillet welds, the preparation and strength of butt welds, the symbol notation that specifies every weld on a drawing, intermittent welds, and the quality-assurance cycle that separates a sound welded joint from a photographed failure.",
        inOneBreath:
          "SMAW uses flux-coated stick electrodes and goes anywhere; GMAW feeds wire through a shielding gas for fast shop work; SAW buries the arc in granular flux for deep penetration on thick plate; a fillet weld is sized by leg s with throat a = 0.7 s and carries about 161 s newtons per millimetre with E410 electrodes at gamma_mw = 1.25; effective length is the drawn length minus 2 s and never below 4 s; complete-penetration butt welds with matching electrodes are as strong as the parent plate; symbols per IS 813 fix size, length and pitch; and intermittent welds obey segment >= 4 s or 40 mm and gaps capped at 12 t in tension and 16 t in compression.",
        sections: [
          {
            number: "3.1",
            title: "Welding processes: SMAW, GMAW and SAW",
            body: [
              "Welding joins metals by fusion: an electric arc of several thousand degrees melts the parent edges and a filler, and the pool freezes into a joint that is continuous with the parts it joins. There is no hole to drill, no plate to overlap and no slip under load, which is why welded structures are stiffer, lighter and sleeker than bolted ones. The price is the skill floor - the welder, the procedure and the inspection now carry the safety of the joint.",
              "Three processes dominate. In shielded metal arc welding (SMAW), a flux-coated consumable stick electrode is fed by hand; the coating decomposes into shielding gas and slag that protect the pool. It is cheap, portable and works in every position, so it rules site work and repair. Gas metal arc welding (GMAW) drives a continuous bare wire through a nozzle of carbon dioxide or argon mixture - faster, cleaner and semi-automatic, the shop standard for fillet welds. Submerged arc welding (SAW) buries the arc under a blanket of granular flux, achieving deep penetration and very high deposition on long, flat, thick-plate seams such as plate-girder splices.",
              "Welds carry their own failure catalogue. Porosity (trapped gas), slag inclusion, undercut (a groove eaten into the parent), incomplete fusion, hydrogen cracking and distortion all threaten quality, and the defences are procedural: a written welding procedure specification, low-hydrogen electrodes, preheat where required, and correct sequencing to control distortion. Inspection layers over it: 100 per cent visual inspection, dye penetrant or magnetic particle for surface defects, and ultrasonic or radiographic testing for internal soundness on critical joints.",
            ],
            bullets: [
              "SMAW: flux-coated stick electrode, manual, all positions - the site and repair workhorse.",
              "GMAW: continuous wire with CO2/argon shielding - fast, semi-automatic shop welding.",
              "SAW: arc buried in granular flux - deep penetration on long flat seams of thick plate.",
              "Defects to know: porosity, slag inclusion, undercut, lack of fusion, hydrogen cracking, distortion.",
              "Inspection ladder: visual (every weld), dye penetrant/magnetic particle (surface), UT/RT (internal).",
            ],
            table: {
              caption: "The three structural welding processes compared.",
              headers: ["Process", "Electrode", "Shielding", "Best at", "Typical use"],
              rows: [
                ["SMAW", "Flux-coated stick", "Coating gas + slag", "All positions, site", "Erection welds, repairs"],
                ["GMAW", "Continuous wire", "CO2 or argon mix", "Shop, semi-auto", "Fillet welds, frames"],
                ["SAW", "Wire + flux feed", "Granular flux bed", "Flat, automated", "Plate girder seams"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Making a sound weld, stage by stage",
              caption:
                "Quality is built into every stage - which is why the QA cycle in Section 3.5 audits each one.",
              stages: [
                { label: "1. Prepare the joint", note: "bevel, clean, align" },
                { label: "2. Tack and check fit-up", note: "hold geometry" },
                { label: "3. Root run", note: "full penetration base" },
                { label: "4. Filler passes", note: "layer temperature control" },
                { label: "5. Cap and clean", note: "remove slag, dress" },
                { label: "6. Inspect", note: "visual + NDT" },
              ],
            },
            callout: {
              type: "tip",
              title: "One-line process identifiers",
              body: "SMAW = stick and slag; GMAW = gas and wire; SAW = sand-like flux blanket and deep penetration. Attach those images and any comparison table in the exam reconstructs itself in ninety seconds.",
            },
            keyTerms: [
              { term: "SMAW", definition: "Shielded metal arc welding - manual process with a flux-coated consumable electrode." },
              { term: "Heat-affected zone", definition: "Parent-metal band beside the weld whose microstructure is altered by welding heat." },
              { term: "Slag inclusion", definition: "Non-metallic trapped debris in the weld, a defect caught by cleaning between passes and by NDT." },
            ],
            examQuestions: [
              {
                q: "Describe SMAW, GMAW and submerged arc welding with sketches. Compare the three processes and list the common weld defects with their remedies and inspection methods.",
                marks: 7,
                outline: [
                  "SMAW: coated stick electrode, manual, all positions, site work.",
                  "GMAW: continuous wire, CO2/argon shielding, semi-automatic shop work.",
                  "SAW: granular flux blanket, deep penetration, flat automated seams.",
                  "Compare deposition rate, position capability and typical use in a table.",
                  "Defects: porosity, slag inclusion, undercut, incomplete fusion, cracking, distortion.",
                  "Remedies: WPS, low-hydrogen electrodes, preheat, cleaning, sequencing.",
                  "Inspection: visual, dye penetrant/magnetic particle, ultrasonic/radiographic.",
                ],
              },
              {
                q: "Why is submerged arc welding preferred for long butt splices in plate girders?",
                marks: 2,
              },
              {
                q: "Name any three weld defects and state how each is detected.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Fillet welds: size, throat and design strength",
            body: [
              "A fillet weld is a triangular deposit joining two surfaces at right angles or laps. Its size s is the leg length, and its strength lives in the throat a = 0.7 s (for equal legs, the perpendicular distance from root to face). Sizing rules bound s: at least 3 mm; large enough to fuse the thicker plate - roughly 1.5 times the square root of the thicker part's thickness - but never more than the plate thickness minus 1.5 mm when deposited along an edge, so the weld does not spill over or burn the corner.",
              "Design strength is computed on the throat at the design shear stress f_wd = 0.7 fu / gamma_mw, taking fu as the lesser of weld deposit and parent strengths. With E410 electrodes and shop welding, 0.7 x 410 / 1.25 gives about 230 MPa, so each millimetre of weld length carries 0.7 s x 230, roughly 161 s newtons per millimetre - a 6 mm fillet runs at about 964 N/mm. Site welds divide by 1.50 instead of 1.25, dropping the figure to about 191 MPa. These two anchor numbers convert any force directly into a length of weld.",
              "The length actually used is the effective length: the drawn length minus twice the weld size, discarding the poor-quality craters at each end, and never less than four times the size. So the design routine runs: factored force, choose s from the detailing rules, compute capacity per millimetre, divide to get effective length, add 2 s back for the drawn length, and check the minimum. Welds loaded obliquely combine forces vectorially; weld groups under eccentricity use the group's geometric properties treated as lines of throat.",
            ],
            bullets: [
              "Throat a = 0.7 s for equal-leg fillet welds; strength is computed on the throat area.",
              "Size rules: s at least 3 mm; about 1.5 sqrt(thicker t); at most t - 1.5 mm along an edge.",
              "Design shear stress f_wd = 0.7 fu / gamma_mw: about 230 MPa shop (E410), 191 MPa site.",
              "Capacity per mm of length: about 161 s N/mm shop - a 6 mm fillet carries about 964 N/mm.",
              "Effective length = drawn length - 2 s (craters), minimum 4 s; oblique loads use vector sums.",
            ],
            codeExample: {
              language: "python",
              caption: "Fillet weld capacity and required length",
              code: `def fillet_capacity_per_mm(s, fu=410, gamma_mw=1.25):
    """Design force per mm of weld length (N/mm), shop weld."""
    return 0.7 * s * 0.7 * fu / gamma_mw

def required_effective_length(F, s, fu=410, gamma_mw=1.25):
    """Effective length (mm) for factored force F in newtons."""
    return F / fillet_capacity_per_mm(s, fu, gamma_mw)

# 6 mm fillet, E410 electrodes, shop weld
print(fillet_capacity_per_mm(6))          # -> 964 N/mm

# Factored force of 200 kN on a 6 mm fillet
L = required_effective_length(200000, 6)
print(L)                                  # -> 207 mm effective
print(L + 2 * 6)                          # -> 219 mm drawn length
`,
            },
            diagram: {
              kind: "flow",
              title: "Sizing a fillet weld, start to finish",
              caption:
                "Five moves from factored force to a drawable weld call-out.",
              steps: [
                { label: "Factored force", note: "from load combinations" },
                { label: "Choose size s", note: "3 mm min; 1.5 sqrt t; t - 1.5 max" },
                { label: "Throat a = 0.7 s", note: "strength lives here" },
                { label: "Capacity per mm", note: "about 161 s N/mm shop" },
                { label: "Effective length + 2 s", note: "check 4 s minimum" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Carry the anchor numbers: f_wd about 230 MPa shop and 191 MPa site, capacity about 161 s N/mm. A full fillet-weld numerical then reduces to one division - force divided by 161 s - and the marks fall to the detailing rules you quote around it.",
            },
            keyTerms: [
              { term: "Throat thickness", definition: "Minimum distance from weld root to face, 0.7 times the leg for equal-leg fillets." },
              { term: "Leg length (size)", definition: "The weld dimension s along the joined surfaces by which a fillet is specified." },
              { term: "Effective length", definition: "Drawn weld length minus twice the size, discarding end craters; minimum four times the size." },
            ],
            examQuestions: [
              {
                q: "Explain the geometry and design of fillet welds per IS 800: 2007. A 100 x 75 x 8 mm angle in E250 steel carries a factored tension of 150 kN and is welded to a gusset along the 100 mm and 75 mm legs. Design the welds (E410 electrodes, shop welding).",
                marks: 7,
                outline: [
                  "State throat a = 0.7 s and the design stress 0.7 fu/gamma_mw = 230 MPa.",
                  "Choose size: s = 6 mm satisfies 3 mm minimum and t - 1.5 maximum.",
                  "Capacity per mm = 0.7 x 6 x 230 = 964 N/mm.",
                  "Total effective length = 150000 / 964 = 156 mm.",
                  "Distribute over the two legs so the weld resultant passes near the centroid.",
                  "Add 2 s to each run for craters; check each run against 4 s minimum.",
                  "Conclude with the weld call-out and a sketch of the angle on the gusset.",
                ],
              },
              {
                q: "State the minimum and maximum size of a fillet weld deposited along the edge of a 10 mm plate.",
                marks: 2,
              },
              {
                q: "Why is the effective length of a fillet weld taken as the drawn length minus twice the weld size?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Butt welds: preparation, throat and strength",
            body: [
              "A butt weld joins plates lying in one plane, melting through the joint so the section is continuous. Edge preparation depends on thickness: a square butt up to about 6 mm, a single-V for roughly 6 to 20 mm, a double-V or U above that - deeper preparation trades weld metal for access to the root. Backing strips and run-on tabs protect the root pass. Complete penetration means the weld fuses the full thickness; partial penetration leaves an unfused root and is designed on the reduced throat.",
              "The strength logic of complete-penetration butt welds is beautifully short: with a matching electrode, the weld is as strong as the parent metal, so the design check is the check of the parent member itself at the joint. The effective throat equals the thickness of the thinner plate, and the effective length is the full length of continuous full-size weld - there is no crater deduction as in fillets, because the ends of a butt weld are prepared, not run off. Partial-penetration welds, by contrast, are limited to their throat depth and treated conservatively.",
              "Butt welds repay their preparation cost where the load path matters. A butt splice keeps the axial force flowing through one plane with no eccentricity, no overlap and a flush surface - the reason flange and web splices of plate girders, and fatigue-sensitive bridge details, use them. Fillet welds remain cheaper for laps and tees where surfaces naturally overlap. In the exam, name the preparation by thickness range, state the matching-electrode rule, and compare the two weld types on stress flow, cost and fatigue - a full-marks three-part answer.",
            ],
            bullets: [
              "Preparation by thickness: square to about 6 mm, single-V 6 to 20 mm, double-V or U above.",
              "Complete penetration with a matching electrode is as strong as the parent metal - no separate strength check.",
              "Effective throat = thickness of the thinner plate; effective length = full continuous length.",
              "Partial penetration welds are designed on the reduced throat depth, conservatively.",
              "Preferred for direct tension splices, girder flange/web joints and fatigue-critical details.",
            ],
            table: {
              caption: "Butt weld preparations by plate thickness.",
              headers: ["Weld type", "Plate thickness", "Preparation", "Relative cost"],
              rows: [
                ["Square butt", "up to about 6 mm", "None", "Lowest"],
                ["Single-V butt", "6 - 20 mm", "Bevel one side", "Medium"],
                ["Double-V butt", "above 20 mm", "Bevel both sides", "High"],
                ["U / J butt", "thick plates", "Curved groove", "Highest"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Butt weld versus fillet weld",
              caption:
                "One keeps the force in its plane; the other buys simplicity with an overlap.",
              left: {
                heading: "Butt weld",
                items: [
                  "Plates in one plane, no overlap",
                  "Direct axial stress path",
                  "Effective throat = thinner plate",
                  "Strength = parent with matching electrode",
                  "Costly preparation, best fatigue",
                ],
              },
              right: {
                heading: "Fillet weld",
                items: [
                  "Lap or tee, plates overlap",
                  "Force turns through the weld",
                  "Throat = 0.7 s, sized by designer",
                  "Strength from 0.7 fu / gamma_mw",
                  "Cheapest, needs no bevelling",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Do not credit butt welds with a crater deduction",
              body: "The 'minus twice the size' rule belongs to fillet welds, whose ends tail off. Butt welds are prepared full length, so their effective length is the full continuous weld. Applying the fillet rule to a butt splice under-lengths it - a small formula error that fails an otherwise perfect splice design.",
            },
            keyTerms: [
              { term: "Complete penetration", definition: "Butt weld fused through the full thickness of the joined parts." },
              { term: "Matching electrode", definition: "Filler with strength at least equal to the parent metal, letting the weld match the plate." },
              { term: "Edge preparation", definition: "Bevelling or grooving of plate edges (square, V, U, J) to give the arc access to the root." },
            ],
            examQuestions: [
              {
                q: "Explain butt welds: types of edge preparation with thickness ranges, effective throat and effective length, and the design strength of complete-penetration welds. Compare butt and fillet welds for strength, cost and fatigue.",
                marks: 7,
                outline: [
                  "Define butt weld and sketch square, single-V and double-V preparations.",
                  "Thickness ranges: square to about 6 mm, single-V 6-20 mm, double-V beyond.",
                  "Effective throat = thinner plate thickness; effective length = full continuous weld.",
                  "Matching electrode rule: complete-penetration weld as strong as parent - check the member.",
                  "Partial penetration designed on reduced throat.",
                  "Compare: butt = direct path, flush, superior fatigue, costly; fillet = cheap, overlap, throat-limited.",
                  "Applications: girder splices and bridge details versus building laps and gussets.",
                ],
              },
              {
                q: "What is the effective throat of a complete-penetration butt weld joining 12 mm and 16 mm plates?",
                marks: 2,
              },
              {
                q: "Why do fatigue-sensitive bridge details prefer butt welds over fillet welds?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Weld symbols and intermittent welds",
            body: [
              "Every weld on a drawing is specified by the symbol system of IS 813. An arrow points to the joint; a reference line carries the information; and the basic symbol's shape names the weld - a triangle for a fillet, a V for a single-V butt, a double-V for the double preparation, U and J shapes for their grooves. Placement carries meaning: the symbol written below the reference line (arrow side in the ISO convention) welds the arrow side of the joint; above the line welds the other side. The size sits to the left of the symbol; length and pitch follow to the right.",
              "Supplementary marks complete the language. A circle at the elbow junction means weld all round; a flag means a field weld made on site rather than in the shop; contour lines or notes demand flush, concave or convex dressing. Intermittent welds are written as length x pitch - for example 60 x 200 means a 60 mm run in every 200 mm cycle, either in chain (aligned on both sides) or staggered (offset) pattern. Reading a full call-out is therefore a left-to-right scan of size, symbol, placement, length and supplementary marks.",
              "Intermittent welds economise where continuous weld is unnecessary. Their rules protect both quality and load transfer: each segment's effective length must be at least the greater of 4 s and 40 mm; the clear gap between segments must not exceed the lesser of 12 t (tension) or 16 t (compression) and 200 mm; and the first and last segments always run to the ends of the joint. Use them for static, lightly loaded and stitching applications - and avoid them near fatigue, vibration and stress reversal, where every start and stop is a defect nursery.",
            ],
            bullets: [
              "Symbol anatomy: arrow to the joint, reference line, basic symbol naming the weld type.",
              "Placement rule: symbol below the line = arrow side; above the line = other side.",
              "Notation order: size left of symbol; length x pitch to the right (60 x 200 pattern).",
              "Supplementary marks: circle = weld all round; flag = field weld; contours = dressing required.",
              "Intermittent rules: segment >= greater of 4 s and 40 mm; gap <= lesser of 12 t / 16 t and 200 mm.",
            ],
            table: {
              caption: "Reading a weld call-out, element by element.",
              headers: ["Element", "Example", "Meaning"],
              rows: [
                ["Size prefix", "8", "8 mm leg or throat size"],
                ["Basic symbol", "triangle", "Fillet weld"],
                ["Placement", "below line", "Arrow side of the joint"],
                ["Length x pitch", "60 x 200", "Intermittent, 60 mm run per 200 mm"],
                ["Supplementary", "flag / circle", "Field weld / weld all round"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a weld call-out",
              caption:
                "Read the stack top to bottom the way the drawing reader's eye moves.",
              layers: [
                { label: "Supplementary marks", note: "field-weld flag, all-round circle, contour" },
                { label: "Size", note: "left of the symbol, in millimetres" },
                { label: "Basic symbol on the reference line", note: "shape names the weld; below = arrow side" },
                { label: "Length x pitch", note: "right of symbol; intermittent runs" },
                { label: "Arrow and tail", note: "points to the joint; process note in the tail" },
              ],
            },
            callout: {
              type: "tip",
              title: "Decode call-outs like an equation",
              body: "Practise writing '8 (triangle) 60 x 200 (flag)' as a sentence: 'an 8 mm fillet weld on the arrow side, 60 mm long at 200 mm pitch, made in the field'. Every symbol question in the paper is this one sentence rearranged.",
            },
            keyTerms: [
              { term: "Reference line", definition: "The horizontal line of a weld symbol that carries size, symbol and length data." },
              { term: "Staggered intermittent weld", definition: "Intermittent weld whose segments on the two sides alternate along the joint." },
              { term: "Weld-all-round symbol", definition: "A circle at the symbol junction requiring the weld to enclose the whole section." },
            ],
            examQuestions: [
              {
                q: "Explain the weld symbol system of IS 813 with sketches. Describe the elements of a weld call-out, the meaning of placement above or below the reference line, and the rules governing intermittent fillet welds.",
                marks: 7,
                outline: [
                  "Draw the arrow, reference line and tail of a symbol.",
                  "Basic symbols: triangle (fillet), V, double-V, U, J for butt preparations.",
                  "Placement: below the line = arrow side; above = other side.",
                  "Size to the left of the symbol; length x pitch to the right.",
                  "Supplementary marks: circle (all round), flag (field), contour notes.",
                  "Intermittent rules: segment >= 4 s or 40 mm; gap <= 12 t tension, 16 t compression, 200 mm cap.",
                  "State where intermittent welds are unsuitable (fatigue, reversal, vibration).",
                ],
              },
              {
                q: "What does a circle at the junction of a weld symbol signify?",
                marks: 2,
              },
              {
                q: "State the minimum segment length and maximum clear gap for an intermittent fillet weld in a tension member.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Welded joint design and quality assurance",
            body: [
              "Designing a welded joint is load-path bookkeeping. Weld lengths are distributed so their resultants pass near the centroid of the applied force, keeping eccentricity out of the group; where eccentricity is unavoidable - a bracket, a seat angle - the group is analysed as a line with its own polar properties, and the force per millimetre at the extreme weld is checked against the capacity of Section 3.2. Detailing adds hygiene: minimum lap of five times the thinner plate or 25 mm, end returns of about 2 s around corners to stop craters starting at the sharp end, and access so the welder can actually see the pool.",
              "The shop/site split drives economics. Shop welding enjoys downhand position, jigs and immediate inspection at gamma_mw = 1.25; site welding fights weather, position and access at gamma_mw = 1.50. Hence the standard industrial pattern: weld the assembly in the shop, bolt it on site. Bolting also wins where erection speed, adjustability or demountability matters; welding wins on stiffness, sleekness and material saving. The CE-801 exam loves this comparison - argue it on cost, fatigue, inspection, appearance and behaviour under reversal.",
              "Quality assurance closes the loop with a cycle of documents and tests. A welding procedure specification (WPS) fixes parameters; welders qualify on test coupons; fit-ups are inspected before the arc strikes; the finished weld sees 100 per cent visual inspection plus NDT sampling by weld class; and defects are ground out and rewelded, with repairs re-inspected. Distortion control is procedural too - balanced sequences, back-step technique, pre-setting and clamping. The cycle's lesson: a welded structure is only as good as its paperwork trail.",
            ],
            bullets: [
              "Distribute weld lengths so the group's resultant passes near the force's line of action.",
              "Eccentric groups: treat welds as lines, use group geometry, check the extreme weld.",
              "Detailing hygiene: minimum lap 5 t or 25 mm; end returns about 2 s around corners.",
              "Shop welding gamma_mw = 1.25 versus site 1.50 - the economics behind 'weld in shop, bolt on site'.",
              "QA cycle: WPS, welder qualification, fit-up check, 100 per cent visual, NDT sampling, repair and re-inspect.",
            ],
            table: {
              caption: "Choosing between welding and bolting.",
              headers: ["Criterion", "Welded", "Bolted"],
              rows: [
                ["Stiffness", "Fully rigid, no slip", "Slips in bearing joints"],
                ["Fatigue", "Butt welds excellent", "Holes and slip reduce life"],
                ["Site work", "Weather-sensitive, gamma_mw 1.50", "Fast, weather-tolerant"],
                ["Inspection", "Needs NDT and skill", "Visual, simple"],
                ["Adjustability", "None after welding", "Demountable, adjustable"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The weld quality-assurance loop",
              caption:
                "Each pass around the loop either releases the joint or sends it back for repair - the loop never skips a step.",
              steps: [
                { label: "Approve WPS", note: "parameters fixed" },
                { label: "Qualify welder", note: "coupon tests" },
                { label: "Check fit-up", note: "gap, alignment, cleanliness" },
                { label: "Weld to procedure", note: "inter-pass control" },
                { label: "Visual, 100 per cent", note: "profile, cracks, undercut" },
                { label: "NDT sample", note: "accept or grind and reweld" },
              ],
            },
            callout: {
              type: "warning",
              title: "Eccentric welds fail at the far end",
              body: "In a bracket weld group, the loaded edge welds work hardest and the far ones least. Students who average the force per millimetre across all welds under-design the critical end. Always compute the extreme-weld force including the torsional component - it routinely doubles the local demand.",
            },
            keyTerms: [
              { term: "WPS", definition: "Welding procedure specification fixing current, voltage, travel speed, consumable and preheat." },
              { term: "NDT", definition: "Non-destructive testing - visual, dye penetrant, magnetic particle, ultrasonic and radiographic checks." },
              { term: "Fit-up", definition: "Pre-weld inspection of edge preparation, root gap, alignment and cleanliness." },
            ],
            examQuestions: [
              {
                q: "Describe the design of welded joints subject to eccentric loading, and explain the quality-assurance cycle for welded construction. Compare welded and bolted connections for a large industrial structure.",
                marks: 7,
                outline: [
                  "Explain weld-group design: welds as lines, resultant through the load line.",
                  "Eccentric case: direct plus torsional components; check the extreme weld.",
                  "Detailing rules: minimum lap, end returns, access.",
                  "QA cycle: WPS, welder qualification, fit-up, visual, NDT sampling, repair.",
                  "Distortion control: sequence, back-step, pre-setting, clamping.",
                  "Compare welded vs bolted: stiffness, fatigue, site speed, inspection, cost.",
                  "Recommend the hybrid: shop-welded assemblies with bolted site joints.",
                ],
              },
              {
                q: "State the minimum lap length for a fillet-welded lap joint.",
                marks: 2,
              },
              {
                q: "Why is gamma_mw higher for site welds, and how does this influence fabrication strategy?",
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
      title: "Tension and Compression Members",
      summary:
        "Members in axial force: tension design through gross yielding, net-section rupture and block shear with lug angles for long connections, compression design through effective length and slenderness, the four buckling classes with their imperfection factors and the design compressive stress, and built-up columns - lacing, battening and the column bases that hand the load to the foundation.",
      chapter: {
        number: "04",
        title: "Tension and Compression Members",
        intro:
          "Unit IV designs members for pure axial force in both directions of the arrow. Tension members are limited by yielding of the gross section, rupture at the net section and block shear at the end, with lug angles rescuing long connections. Compression members live in a subtler world: end restraint sets the effective length, slenderness enters a buckling curve from class a to d, and the design compressive stress fcd emerges - after which built-up columns with lacing or battening, and slab, gusseted and pocket bases, complete the story.",
        inOneBreath:
          "A tension member yields at Tdg = Ag fy/gamma_m0 and ruptures at the first hole line at Tdn = 0.9 fu Anc/gamma_m1, with staggered holes adding p^2/4g per gauge and single-connected angles suffering shear lag; lug angles tie the outstanding leg straight to the gusset and carry at least 20 per cent extra; a compression member buckles at the Euler load pi^2 E A/(KL/r)^2 with K from 0.65 to 2.0, its slenderness capped at 180, 250 or 350; the nondimensional slenderness lambda_bar = sqrt(fy/fcc) feeds phi = 0.5(1 + alpha(lambda_bar - 0.2) + lambda_bar^2) and fcd = (fy/gamma_m0)/(phi + sqrt(phi^2 - lambda_bar^2)) with alpha = 0.21, 0.34, 0.49 or 0.76 for curves a to d; built-up columns use lacing at 40 to 70 degrees or battens, both designed for 2.5 per cent transverse shear, and stand on slab, gusseted or pocket bases.",
        sections: [
          {
            number: "4.1",
            title: "Tension members: gross yielding and net-section rupture",
            body: [
              "A tension member fights two limit states. The first is yielding of the gross section: at fy the whole area stretches, elongation grows large and the member visibly sags long before breaking - Tdg = Ag fy / gamma_m0 governs this ductile plateau. The second is rupture at the net section: at the first line of holes the area drops to An, and the member can snap there at ultimate - Tdn = 0.9 fu Anc / gamma_m1. Both must exceed the factored tension Tu, and the smaller of the two is the member's design strength.",
              "Computing the net area is where marks are won. For each line of holes deduct n d0 t; when holes stagger across gauge lines, the chain can zig-zag and each diagonal step adds p^2/(4 g) back to the net width - the classic formula. For angles bolted through one leg, only the connected leg's area counts at the hole line and shear lag trims the rupture strength further; IS 800 gives reduction factors tied to the outstanding-leg width and the connection length. Threads in rods are their own 'hole line': a threaded rod ruptures at the shank's net area.",
              "Design then becomes a two-inequality game. Pick a section with Ag at least Tu gamma_m0 / fy; then check the actual net area at the connection satisfies Tdn; then block shear at the end (Section 4.2). Slenderness stays in the background - tension members are limited to KL/r of 350 so they do not sag or flutter in service, 250 where stress reversal is possible, and up to 400 for rods that never see compression. The governing mode is worth stating in every answer: 'rupture governs' or 'yielding governs' tells the examiner you understand which inequality bit.",
            ],
            bullets: [
              "Gross yielding: Tdg = Ag fy / gamma_m0 - ductile, large elongation, visible warning.",
              "Net-section rupture: Tdn = 0.9 fu Anc / gamma_m1 - sudden, at the first hole line.",
              "Net area: deduct n d0 t per line; staggered chains add p^2/(4 g) per diagonal step.",
              "Shear lag: single-connected angles lose rupture strength; IS 800 reduction factors apply.",
              "Slenderness caps: 350 for tension members, 250 with reversal, 400 for rods.",
            ],
            codeExample: {
              language: "python",
              caption: "Tension member strength - least of the limit states",
              code: `def tension_capacity(Ag, Anc, fy=250, fu=410,
                       gamma_m0=1.10, gamma_m1=1.25):
    """Design tension capacity (N): yielding vs rupture.

    Block shear must be checked separately at the connection.
    """
    t_yield = Ag * fy / gamma_m0          # gross section yielding
    t_rupture = 0.9 * fu * Anc / gamma_m1  # net section rupture
    return min(t_yield, t_rupture)

# ISA 75 x 75 x 8 (Ag = 1140 mm^2), 20 mm bolts in one line,
# connected-leg net area 520 mm^2
print(tension_capacity(1140, 520) / 1000.0)
# -> 153.5 kN - rupture governs over 259.1 kN of yielding
`,
            },
            diagram: {
              kind: "flow",
              title: "Three checks, take the least",
              caption:
                "The tension-member funnel: every candidate failure computed, the smallest number rules.",
              steps: [
                { label: "Gross yielding", note: "Tdg = Ag fy / gamma_m0" },
                { label: "Net rupture", note: "Tdn = 0.9 fu Anc / gamma_m1" },
                { label: "Block shear", note: "Tdb at the connection end" },
                { label: "Governing = least", note: "name the mode explicitly" },
                { label: "Compare with Tu", note: "least >= Tu, or reselect" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "In staggered-hole problems, write every candidate chain as An = Ag - n d0 t + sum(p^2/4g) and evaluate each - examiners plant two chains where the zig-zag chain wins only after the p^2/4g credit. Show the arithmetic per chain; the chain comparison is the marked step.",
            },
            keyTerms: [
              { term: "Net section", definition: "Cross-section at a line of holes, area reduced by n d0 t with stagger credits of p^2/4g." },
              { term: "Shear lag", definition: "Strength loss when only part of the section is connected, so load lags into the outstanding parts." },
              { term: "Gross section yielding", definition: "Ductile limit state of the full area reaching fy, Tdg = Ag fy/gamma_m0." },
            ],
            examQuestions: [
              {
                q: "Explain the two strength limit states of a tension member with formulae. A flat 100 x 10 mm E250 bar carries 200 kN factored tension and has two staggered 22 mm holes (pitch 50 mm, gauge 40 mm) at the end. Check the member's strength.",
                marks: 7,
                outline: [
                  "State Tdg = Ag fy/gamma_m0 and Tdn = 0.9 fu Anc/gamma_m1.",
                  "Compute Ag = 1000 mm^2; Tdg = 1000 x 250/1.10 = 227 kN.",
                  "Straight chain: An = 1000 - 2 x 22 x 10 = 560 mm^2.",
                  "Staggered chain: add p^2/4g = 2500/160 = 15.6 mm per step.",
                  "Evaluate both chains, take the lesser An for Anc.",
                  "Compute Tdn and compare with Tdg; declare the governing mode.",
                  "Conclude: governing capacity versus 200 kN demand.",
                ],
              },
              {
                q: "Define shear lag in tension members.",
                marks: 2,
              },
              {
                q: "State the maximum slenderness ratio permitted for a tension member, and the tighter value when stress reversal is possible.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Long connections, block shear and lug angles",
            body: [
              "End connections give tension members their personality. An angle bolted through one leg delivers load eccentrically and fails at its end in block shear - the tear-out of Section 2.5, now on the member side - while its rupture strength suffers shear lag. And as bolt rows multiply along the member, a new problem appears: the long joint. Beyond a joint length of about 15 d, the inner bolts barely pick up load because the connected plies deform; IS 800 shaves the bolt shear capacity by the factor beta_lj = 1.075 - 0.005 Lj/d, floored at 0.75, so adding rows eventually adds almost nothing.",
              "The lug angle is the classic cure. A small auxiliary angle is bolted to the outstanding leg of the main member and lap-connected to the gusset, so each leg of the member transfers its share of load directly. IS 800 cl 10.10 wraps it in rules: the lug angle's section should be at least equal to the outstanding leg of the member; at least two bolts must connect the lug angle to the member; and the lug angle and its fastening to the gusset must be designed for at least 20 per cent more than the force in the outstanding leg. Obey all three or the lug is decoration.",
              "Lug angles earn their keep where the alternative is ugly. A long bolt line wastes gusset and bolts to the long-joint factor; thickening the whole member to fix a connection problem taxes every metre of the member's length; welding the end eliminates holes and block-shear paths but demands shop precision. The exam answer is therefore a decision: quantify the long joint, propose the lug angle with its three detailing rules, and mention the alternatives with their costs - a complete engineering argument rather than a definition.",
            ],
            bullets: [
              "Member-end failure: block shear along the bolt line plus shear lag on the connected leg.",
              "Long joints (beyond about 15 d): beta_lj = 1.075 - 0.005 Lj/d, minimum 0.75, cuts bolt capacity.",
              "Lug angle section at least equal to the outstanding leg of the member.",
              "Minimum two fasteners connect the lug angle to the member.",
              "Lug-to-gusset fastening designed for at least 20 per cent above the outstanding-leg force.",
            ],
            table: {
              caption: "IS 800 cl 10.10 detailing rules for lug angles.",
              headers: ["Rule", "Requirement", "Purpose"],
              rows: [
                ["Lug angle size", "At least the outstanding leg", "Match the load share"],
                ["Fasteners to member", "Minimum two bolts", "Positive attachment"],
                ["Gusset connection", "20% above outstanding-leg force", "Direct, reliable transfer"],
                ["Placement", "Near the member's end", "Effective shear-lag relief"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "The bolt line is getting long - now what?",
              caption:
                "Four strategies when rows stretch along the member; two work, two waste steel.",
              start: "Joint length passes about 15 d",
              branches: [
                {
                  label: "Add a lug angle",
                  outcome: "Outstanding leg tied straight to the gusset; connection shortens",
                  good: true,
                },
                {
                  label: "Weld the end instead",
                  outcome: "No holes, no block-shear path; needs shop control",
                  good: true,
                },
                {
                  label: "Enlarge the member section",
                  outcome: "Works, but heavier steel along the full member length",
                  good: false,
                },
                {
                  label: "Keep adding bolt rows",
                  outcome: "Long-joint factor slashes capacity; inner bolts idle",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "20 per cent, not 20 per cent of the member force",
              body: "The lug-angle rule is 1.2 times the force in the OUTSTANDING LEG - roughly half the member force for a symmetric angle - not 1.2 times the whole member force. Reading it either way changes the gusset fastening by a factor of two, and examiners plant exactly this distinction.",
            },
            keyTerms: [
              { term: "Lug angle", definition: "Auxiliary short angle connecting a member's outstanding leg directly to the gusset." },
              { term: "Long-joint factor", definition: "Reduction beta_lj = 1.075 - 0.005 Lj/d (minimum 0.75) on bolt capacity in joints beyond 15 d." },
              { term: "Outstanding leg", definition: "The leg of an angle member not directly attached to the gusset." },
            ],
            examQuestions: [
              {
                q: "What are lug angles and when do they become necessary? State the IS 800 detailing rules for lug-angle connections and explain the long-joint reduction factor for bolt groups.",
                marks: 7,
                outline: [
                  "Define the lug angle and sketch a single angle with lug connected to a gusset.",
                  "Problem it solves: long bolt lines, shear lag, oversized gussets.",
                  "Rule 1: lug angle section at least equal to the outstanding leg.",
                  "Rule 2: minimum two fasteners between lug and member.",
                  "Rule 3: lug-to-gusset fastening for 20% above the outstanding-leg force.",
                  "Long-joint factor beta_lj = 1.075 - 0.005 Lj/d, floor 0.75, beyond Lj = 15 d.",
                  "Conclude with when to prefer welding or a heavier member instead.",
                ],
              },
              {
                q: "State the long-joint reduction factor and its minimum value.",
                marks: 2,
              },
              {
                q: "Why do inner bolts in a very long lap joint carry less load than the end bolts?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Compression members: effective length and slenderness",
            body: [
              "A perfectly straight pin-ended column buckles at the Euler load pi^2 E I / L^2, and every other end condition is normalised to this by the effective length KL: the length of the equivalent pin-ended column that buckles at the same load. Both ends pinned gives K = 1.0; both ends fixed gives the theoretical 0.5, recommended as 0.65 by IS 800 because perfect rotational fixity never exists; fixed-pinned gives 0.8 instead of the theoretical 0.7; and a cantilever, fixed at the base and free at the top, gives K = 2.0. Columns in real frames inherit K from the stiffness of the beams they meet, and sway frames push it higher.",
              "Slenderness is the ratio KL/r, and it decides everything downstream: the buckling stress, the curve position, and the code's permission to exist. IS 800 Table 3 caps it at 180 for members carrying dead and live compression, 250 for members stressed by wind or earthquake alone or by reversal, 350 for tension members and 400 for rods. The check runs on both principal axes - the smaller radius of gyration governs because the member buckles about its weakest axis - which is why a channel standing alone is a poor column and why built-up sections exist at all.",
              "The design chain from here is mechanical and worth memorising as five steps: identify the end restraints, pick K, compute KL/r about both axes, carry the larger slenderness into the buckling curve of Section 4.4, and read off fcd and Pd = Ae fcd. Along the way, watch for weak-axis details that steal capacity: lacing and batten connections add local flexibility, single angles bend about oblique axes, and bracing systems that brace one axis only halve the problem at best. Effective length is the first number you own; everything else in column design is a function of it.",
            ],
            bullets: [
              "Euler buckling: Pcc = pi^2 E A / (KL/r)^2 - the normalising baseline for all columns.",
              "K values (IS 800 recommended): 1.00 pinned-pinned, 0.65 fixed-fixed, 0.80 fixed-pinned, 2.00 fixed-free.",
              "Slenderness caps: 180 (dead + live compression), 250 (wind/earthquake or reversal), 350 (tension), 400 (rods).",
              "The weaker axis governs: KL/r computed on both principal axes, larger value used.",
              "Frame reality: K depends on beam stiffness; sway frames push K above the braced-frame values.",
            ],
            table: {
              caption: "Effective length factors for classical end conditions.",
              headers: ["End condition", "K theoretical", "K IS 800 recommended"],
              rows: [
                ["Both ends pinned", "1.00", "1.00"],
                ["Both ends fixed", "0.50", "0.65"],
                ["One fixed, one pinned", "0.70", "0.80"],
                ["Fixed base, free top", "2.00", "2.00 (add fixity allowance)"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From end fixity to column capacity",
              caption:
                "The five numbered stages of every compression-member design - in the exam, label them.",
              stages: [
                { label: "1. End restraints", note: "translation and rotation fixity" },
                { label: "2. Pick K", note: "IS 800 Table 16 values" },
                { label: "3. KL/r both axes", note: "weaker axis governs" },
                { label: "4. Enter buckling curve", note: "class a, b, c or d" },
                { label: "5. fcd, then Pd = Ae fcd", note: "compare with Pu" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Quote the recommended K, not the theoretical one, and say why: 'IS 800 recommends 0.65 for fixed-fixed because full rotational fixity is unrealisable'. That one sentence converts a table look-up into a two-mark theory answer.",
            },
            keyTerms: [
              { term: "Effective length", definition: "Length KL of the equivalent pin-ended column that would buckle at the same load as the real member." },
              { term: "Slenderness ratio", definition: "KL/r, the normalized flexibility that controls buckling stress; capped by IS 800 Table 3." },
              { term: "Radius of gyration", definition: "r = sqrt(I/A); the smaller principal value governs column buckling." },
            ],
            examQuestions: [
              {
                q: "Explain the concept of effective length of a compression member. State the theoretical and IS 800 recommended K values for the four classical end conditions, and the maximum slenderness ratios permitted by IS 800.",
                marks: 7,
                outline: [
                  "Define effective length via the equivalent pin-ended Euler column.",
                  "Write Pcc = pi^2 E A/(KL/r)^2 to anchor the concept.",
                  "K values: pinned-pinned 1.0/1.0; fixed-fixed 0.5/0.65.",
                  "Fixed-pinned 0.7/0.80; fixed-free 2.0/2.0.",
                  "Explain why recommended exceeds theoretical: fixity is never perfect.",
                  "Slenderness caps: 180, 250 (wind/reversal), 350 (tension), 400 (rods).",
                  "Note the weaker-axis rule and frame dependence of K.",
                ],
              },
              {
                q: "What is the recommended effective length factor for a column rigidly connected at both ends?",
                marks: 2,
              },
              {
                q: "A column has KL/r = 210 about its minor axis and carries dead plus live compression. Is it acceptable? Justify with the IS 800 limit.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Buckling classes and the design compressive stress",
            body: [
              "Real columns buckle below the Euler load because they are imperfect: residual stresses locked in by rolling and welding, initial crookedness, and small accidental eccentricities all eat into capacity. IS 800 absorbs these imperfections into four buckling classes - a, b, c and d - each with an imperfection factor alpha: 0.21, 0.34, 0.49 and 0.76 respectively. Curve a belongs to clean, hot-rolled sections; curve d to laced and battened built-up columns whose connections add flexibility. The further down the alphabet, the deeper the derating.",
              "The machinery is three formulas. The nondimensional slenderness lambda_bar = sqrt(fy/fcc) compares yield to the elastic critical stress fcc = pi^2 E/(KL/r)^2. The intermediate phi = 0.5[1 + alpha(lambda_bar - 0.2) + lambda_bar^2] positions the curve. Then fcd = (fy/gamma_m0) / (phi + sqrt(phi^2 - lambda_bar^2)), capped at fy/gamma_m0. As a worked anchor: at KL/r = 90 with E250 steel on curve c, fcd comes to about 121 MPa. Curve selection is by IS 800 Table 10 - hot-rolled I-sections with h/b over 1.2 use curve a about the major axis and b about the minor; stockier rolled sections drop to b and c; welded sections follow c; built-up laced and battened columns sit on d.",
              "The classes convert fabrication history into numbers: identical KL/r can yield design stresses differing by 20 to 30 per cent between curve a and curve d, which is exactly why a welded box column cannot borrow the capacity of a rolled one. In the exam, the sequence is deterministic: compute lambda_bar, look up alpha for the named curve, form phi, evaluate fcd, cap it, and multiply by the area for Pd. Quote the alpha table in your answer - writing 0.21/0.34/0.49/0.76 from memory is a recognised mark-earner.",
            ],
            bullets: [
              "Imperfections (residual stress, crookedness) make real columns buckle below Euler - hence four curves.",
              "Alpha values: curve a 0.21, b 0.34, c 0.49, d 0.76 - higher alpha, deeper derating.",
              "lambda_bar = sqrt(fy/fcc) with fcc = pi^2 E/(KL/r)^2; phi = 0.5[1 + alpha(lambda_bar - 0.2) + lambda_bar^2].",
              "fcd = (fy/gamma_m0)/(phi + sqrt(phi^2 - lambda_bar^2)), never above fy/gamma_m0.",
              "Table 10 selection: rolled h/b > 1.2 uses a (major) and b (minor); welded c; laced/battened d.",
            ],
            codeExample: {
              language: "python",
              caption: "Design compressive stress on any buckling curve",
              code: `ALPHA = {"a": 0.21, "b": 0.34, "c": 0.49, "d": 0.76}

def fcd(fy, slenderness, curve="c", gamma_m0=1.10):
    """Design compressive stress (MPa) per IS 800 cl 7.1.2."""
    fcc = 200000.0 * 3.14159 ** 2 / slenderness ** 2
    lam = (fy / fcc) ** 0.5
    phi = 0.5 * (1 + ALPHA[curve] * (lam - 0.2) + lam * lam)
    stress = (fy / gamma_m0) / (phi + (phi * phi - lam * lam) ** 0.5)
    return min(stress, fy / gamma_m0)

# E250 column, KL/r = 90
for curve in "abcd":
    print(curve, round(fcd(250, 90, curve), 1))
# a 137.6 | b 128.5 | c 121.0 | d 108.7 MPa
# Same slenderness, up to 25% capacity spread by curve.
`,
            },
            diagram: {
              kind: "fork",
              title: "Which buckling class applies?",
              caption:
                "One start, four destinations - the section's making decides which curve owns it.",
              start: "Classify the section (IS 800 Table 10)",
              branches: [
                {
                  label: "Hot-rolled I, h/b > 1.2, major axis",
                  outcome: "curve a (alpha 0.21) - highest capacity",
                  good: true,
                },
                {
                  label: "Hot-rolled I, h/b > 1.2, minor axis",
                  outcome: "curve b (alpha 0.34)",
                  good: true,
                },
                {
                  label: "Welded or stocky rolled section",
                  outcome: "curve c (alpha 0.49) - residual stresses derate",
                  good: false,
                },
                {
                  label: "Built-up laced or battened column",
                  outcome: "curve d (alpha 0.76) - lowest capacity",
                  good: false,
                },
              ],
            },
            callout: {
              type: "tip",
              title: "Carry the anchor",
              body: "Memorise one evaluated point - KL/r = 90, E250, curve c gives fcd about 121 MPa - and you can sanity-check every exam answer within 10 per cent before committing to the multiplication Pd = Ae fcd.",
            },
            keyTerms: [
              { term: "Buckling class", definition: "Curve a, b, c or d grouping sections by imperfection severity for compression design." },
              { term: "Imperfection factor", definition: "Alpha value (0.21, 0.34, 0.49, 0.76) positioning the buckling curve for each class." },
              { term: "Nondimensional slenderness", definition: "lambda_bar = sqrt(fy/fcc), scaling real slenderness by material strength." },
            ],
            examQuestions: [
              {
                q: "Write the IS 800: 2007 expression for the design compressive stress of a column, defining every symbol. Explain buckling classes a to d with their imperfection factors and state the class used for a hot-rolled I-section and for a laced built-up column.",
                marks: 7,
                outline: [
                  "Write fcd = (fy/gamma_m0)/(phi + sqrt(phi^2 - lambda_bar^2)) <= fy/gamma_m0.",
                  "Define lambda_bar = sqrt(fy/fcc) and fcc = pi^2 E/(KL/r)^2.",
                  "Define phi = 0.5[1 + alpha(lambda_bar - 0.2) + lambda_bar^2].",
                  "Give alpha values: a 0.21, b 0.34, c 0.49, d 0.76.",
                  "Explain the physics: residual stresses and initial crookedness lower real capacity below Euler.",
                  "Class usage: rolled h/b > 1.2 uses a (major) and b (minor); laced/battened uses d.",
                  "Optional anchor: KL/r = 90 on curve c gives about 121 MPa for E250.",
                ],
              },
              {
                q: "State the imperfection factors for the four buckling classes.",
                marks: 2,
              },
              {
                q: "Why is the capacity of a welded column lower than that of an identical hot-rolled column at the same slenderness?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Built-up members, lacing, battening and column bases",
            body: [
              "When one rolled section cannot supply the area or the radius of gyration, members are built up - two channels or four angles held apart so the composite r beats any single piece. The ties that hold them, however, must be designed. Lacing uses inclined flat bars, single or double (crossed), inclined 40 to 70 degrees to the member axis; the system works like a truss, and both the lacing bars and their end connections are designed for a transverse shear of 2.5 per cent of the axial force in the member, shared between the lacing planes. Lacing bar slenderness itself is capped at 145.",
              "Battening replaces the diagonals with parallel plates at intervals, working like a Vierendeel frame - no diagonal truss action, but bending in the plates. IS 800 therefore insists the individual components between battens stay slender: component slenderness not above 50 nor above 0.7 times the overall member slenderness, with batten pairs at the ends and at intermediate points, each batten and its connections designed for the 2.5 per cent shear and the moments it induces. Lacing is lighter and more open; battening is cleaner in appearance and for painting, but the plates must be heavier to do the same job.",
              "The load finally lands at the base. A slab base - a single plate welded or machined under the column - suits light, axially loaded columns; its area comes from the permissible bearing pressure on concrete and its thickness from cantilever bending of the projection. A gusseted base adds vertical gussets and angles to stiffen the plate for heavy loads and moments; a pocket base sinks the column into a concrete pocket and transfers moment by bearing; and moment bases add tension-side anchor bolts. Hold-down bolts fix the column against uplift and shear while grout spreads the load evenly onto the foundation.",
            ],
            bullets: [
              "Built-up sections boost the radius of gyration; the ties make the sections act as one.",
              "Lacing: inclined bars at 40 to 70 degrees, truss action, bar slenderness capped at 145.",
              "Both lacing and battening are designed for transverse shear = 2.5 per cent of axial force.",
              "Battens: component slenderness <= 50 and <= 0.7 x overall; batten plates take shear plus moment.",
              "Bases: slab (light axial), gusseted (heavy/moment), pocket (fixed light columns) + anchor bolts and grout.",
            ],
            table: {
              caption: "Column base types and their applications.",
              headers: ["Base type", "Best for", "How it works"],
              rows: [
                ["Slab base", "Light, axial load", "Plate spreads bearing; thickness from cantilever bending"],
                ["Gusseted base", "Heavy loads, moment", "Vertical gussets stiffen the plate"],
                ["Pocket base", "Fixed-base light columns", "Column embedded in a concrete pocket"],
                ["Moment base", "Portal columns", "Thick plate with tension-side anchor bolts"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Lacing versus battening",
              caption:
                "Diagonals that triangulate, or plates that frame - the two philosophies of holding a built-up column together.",
              left: {
                heading: "Lacing",
                items: [
                  "Inclined bars at 40 - 70 degrees",
                  "Truss-like diagonal action",
                  "Lighter, more open look",
                  "Bar slenderness <= 145",
                  "Tie plates at the ends",
                ],
              },
              right: {
                heading: "Battening",
                items: [
                  "Parallel plates at intervals",
                  "Vierendeel frame action",
                  "Cleaner finish, easier painting",
                  "Component slenderness <= 50",
                  "Plates take shear plus moment",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The 2.5 per cent rule",
              body: "Both lacing and battening answer to a transverse shear of 2.5 per cent of the member's axial force - not of the batten, not of one component, of the WHOLE member. Quote it, dimension one lacing bar or batten with it, and the design-the-ties question is fully answered.",
            },
            keyTerms: [
              { term: "Lacing", definition: "Inclined bars, 40 to 70 degrees, holding built-up column components in truss action." },
              { term: "Batten plate", definition: "Parallel tie plate in a battened built-up member, designed for shear and induced moment." },
              { term: "Gusseted base", definition: "Column base stiffened by vertical gussets and angles for heavy or moment-loaded columns." },
            ],
            examQuestions: [
              {
                q: "Compare lacing and battening in built-up compression members with sketches. State the IS 800 design basis (transverse shear) and the geometrical limits for each system, and describe slab and gusseted column bases.",
                marks: 7,
                outline: [
                  "Sketch a built-up column with double lacing and one with battens.",
                  "Lacing: 40 - 70 degrees, single or double, bar slenderness <= 145, end tie plates.",
                  "Battens: parallel plates, end and intermediate pairs.",
                  "Design basis: transverse shear = 2.5 per cent of axial force for both systems.",
                  "Batten limits: component slenderness <= 50 and <= 0.7 x overall; battens take shear + moment.",
                  "Compare: lacing lighter with truss action; battening cleaner but heavier plates.",
                  "Bases: slab base for light axial; gusseted for heavy and moment; mention bearing/grout.",
                ],
              },
              {
                q: "What transverse shear are lacing bars designed for?",
                marks: 2,
              },
              {
                q: "Why is a slab base unsuitable for a column carrying significant moment?",
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
      title: "Beams, Plate Girders, Trusses",
      summary:
        "Members in bending and the roof they hold up: laterally supported beams with their bending, shear and serviceability checks, the lateral-torsional buckling of unsupported beams, purlins and sheeting rails, plate girders with proportioning, stiffeners and tension-field action, and roof trusses with their bracing systems and case studies from industrial sheds to the Howrah Bridge.",
      chapter: {
        number: "05",
        title: "Beams, Plate Girders and Roof Trusses",
        intro:
          "Unit V bends the steel. It starts with the simply supported beam whose compression flange is held - bending, shear, web crippling and deflection - then releases the flange and studies lateral-torsional buckling. Purlins and sheeting rails carry the roof to the trusses; plate girders stretch the beam concept beyond rolled sections with their stiffeners and tension-field shear; and roof trusses with bracing close the subject with load paths, erection stability and case studies.",
        inOneBreath:
          "A laterally supported beam designs at Md = beta_b Zp fy/gamma_m0 with beta_b = 1.0 for plastic and compact sections and Ze for semi-compact, checks shear at Vd = h tw fy/(1.732 gamma_m0), web crippling under concentrated loads and deflection at working loads; release the compression flange and it buckles sideways and twists - lateral-torsional buckling - governed by unrestrained length, flange width, load height and moment gradient, cured with restraints or wider flanges; purlins span 4 to 6 m as angles, channels or lapped Z-sections carrying biaxial loads with wind uplift often governing; plate girders proportion depth near span/10 with flange area about M/(fy d), thin webs stiffened at spacing up to 1.5 d to mobilise tension-field shear; and roof trusses - Fink, Pratt, Howe, North-light - hand their node loads through top chords, webs and bearings into braced columns and foundations.",
        sections: [
          {
            number: "5.1",
            title: "Laterally supported beams",
            body: [
              "A beam whose compression flange is continuously held - by a slab, secondary beams or close bracing - cannot buckle sideways, so its capacity is decided by the section alone. IS 800 gives Md = beta_b Zp fy / gamma_m0, where beta_b = 1.0 for plastic and compact sections but drops the modulus to Ze for semi-compact ones - the Section 1.4 classification cashing its cheque. With ISMB 300 (Zp about 636 x 10^3 mm^3, plastic) in E250 steel, Md = 636000 x 250 / 1.10, roughly 145 kN·m; that single computation is the heart of a dozen exam problems.",
              "Shear runs through the web: Vd = Av fy / (1.732 gamma_m0) with Av = h x tw, which for ISMB 300 gives about 307 kN. When the factored shear exceeds 0.6 Vd, the moment capacity must be reduced for high-shear interaction - the web is too busy yielding in shear to help the flanges. Concentrated loads add web crippling and web buckling checks: the load spreads through the flange at about 45 degrees over a bearing length, and if the web area or stability is short, a load-bearing stiffener is welded at the load point or support.",
              "Serviceability closes the design. Deflection under working loads - a fraction of strength loads - is limited by IS 800 Table 6, commonly span/250 to span/300 depending on cladding brittleness; vibration matters for footbridges and floors; and camber can pre-lift long spans. The design recipe is a fixed sequence: factored loads, Mu and Vu, required Zp = Mu gamma_m0/fy, choose a section, classify it, check bending, check shear and interaction, check deflection under working loads. Answer in that order and the marking scheme follows you line by line.",
            ],
            bullets: [
              "Lateral support of the compression flange removes LTB - capacity decided by the section alone.",
              "Md = beta_b Zp fy/gamma_m0; beta_b = 1.0 for plastic/compact, Ze replaces Zp for semi-compact.",
              "Shear: Vd = h tw fy/(1.732 gamma_m0); above 0.6 Vd, reduce moment capacity (high shear).",
              "Web crippling/buckling at concentrated loads: 45-degree spread, add bearing stiffeners if short.",
              "Deflection at working loads to span/250 - span/300; the final gate of every beam design.",
            ],
            codeExample: {
              language: "python",
              caption: "The three gates of a laterally supported beam",
              code: `def bending_strength(Zp, fy=250, beta_b=1.0, gamma_m0=1.10):
    """Design moment (kN.m) for plastic/compact section."""
    return beta_b * Zp * fy / gamma_m0 / 1e6

def shear_strength(h, tw, fy=250, gamma_m0=1.10):
    """Design shear (kN) through the web area h x tw."""
    return h * tw * fy / (1.732 * gamma_m0) / 1e3

def deflection_ok(span, delta, limit_ratio=300):
    """Serviceability gate at working loads."""
    return delta <= span / limit_ratio

# ISMB 300 (Zp = 636000 mm^3, h = 300, tw = 7.8), E250
print(bending_strength(636000))   # -> 144.5 kN.m
print(shear_strength(300, 7.8))   # -> 306.9 kN
`,
            },
            diagram: {
              kind: "pipeline",
              title: "Beam design in five stages",
              caption:
                "The staged template a beam question expects - each stage is a marked block.",
              stages: [
                { label: "1. Factored loads and span", note: "combinations from Unit I" },
                { label: "2. Mu and Vu", note: "draw the diagrams" },
                { label: "3. Trial section", note: "Zp >= Mu gamma_m0 / fy, then classify" },
                { label: "4. Bending and shear checks", note: "Md, Vd, 0.6 Vd interaction" },
                { label: "5. Serviceability", note: "deflection at working loads" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "State the assumption before anything else: 'compression flange fully restrained, so lateral-torsional buckling does not apply'. Those two clauses separate the Section 5.1 question from the Section 5.2 question in the paper - mislabel them and the whole solution is marked out of the wrong scheme.",
            },
            keyTerms: [
              { term: "Plastic modulus Zp", definition: "Section modulus for full plastic moment, used when the section is plastic or compact." },
              { term: "High-shear interaction", definition: "Reduction of moment capacity when factored shear exceeds 0.6 Vd." },
              { term: "Web crippling", definition: "Local crushing or buckling of the web under a concentrated load or reaction." },
            ],
            examQuestions: [
              {
                q: "Design the bending and shear checks for a laterally supported simply supported beam of span 6 m carrying a factored uniformly distributed load of 40 kN/m. Propose an ISMB section in E250 steel and check deflection under working loads.",
                marks: 7,
                outline: [
                  "Assume full lateral restraint; state that LTB does not apply.",
                  "Mu = wL^2/8 = 40 x 36/8 = 180 kN.m; Vu = wL/2 = 120 kN.",
                  "Required Zp = Mu x gamma_m0 / fy = 180e6 x 1.1/250 = 792000 mm^3.",
                  "Choose a section (e.g., ISMB 400 class of Zp), classify it as compact.",
                  "Check Md = Zp fy/gamma_m0 >= 180 kN.m; Vd = h tw fy/(1.732 gamma_m0) >= 120 kN.",
                  "Check Vu < 0.6 Vd so no high-shear reduction.",
                  "Deflection under working loads (about 27 kN/m): 5wL^4/384EI <= L/300.",
                ],
              },
              {
                q: "Write the expression for the design shear strength of a beam and define Av.",
                marks: 2,
              },
              {
                q: "What is web crippling, where does it occur, and how is it prevented?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Laterally unsupported beams and lateral-torsional buckling",
            body: [
              "Release the compression flange and a beam becomes two interacting structures. The compression flange is, in effect, a slender column lying on its side: when it buckles, it can only escape sideways, and because it is attached to the tension flange through the web, the section twists as it translates. This coupled lateral-plus-torsional movement is lateral-torsional buckling (LTB), and it caps the moment capacity of any beam whose compression flange is unrestrained between supports - gantry girders, walkway beams and rafters restrained only at intervals.",
              "The elastic critical moment Mcc gathers the physics: it rises with the unrestrained length falling, with wider, thicker flanges (lateral and warping stiffness), with the torsion constant of the section (box sections are almost immune), and with favourable moment gradient - a beam under equal end moments is worse off than one under a midspan point load. Load height matters too: a load applied above the shear centre aggravates the twist (destabilising), while a bottom-flange load is stabilising. IS 800 then feeds Mcc through a Perry-type buckling curve - the same machinery as Section 4.4 - to return a design bending strength that slides from the plastic moment down toward the elastic critical as slenderness grows.",
              "Design practice is mostly about restraint. Slabs, cross beams, purlins and ties that brace the compression flange divide long spans into short panels and push the capacity back to Md; increasing flange width or choosing a box section buys intrinsic resistance; and detailing loads to the bottom flange, or providing torsional restraints at supports, removes the destabilising edge. The exam answer mirrors the physics: explain the mechanism with a sketch, list the influencing parameters with their directions, and give the remedies - restraint, geometry, load position.",
            ],
            bullets: [
              "Mechanism: compression flange behaves like a slender column; it buckles sideways and the section twists.",
              "Capacity falls from the plastic moment toward the elastic critical moment Mcc as unbraced length grows.",
              "Mcc rises with wider/thicker flanges, higher torsion constant, shorter unbraced length and moment gradient.",
              "Load height: above the shear centre is destabilising; bottom-flange loading is stabilising.",
              "Remedies: lateral restraints at close spacing, wider flanges, box sections, torsional support restraints.",
            ],
            table: {
              caption: "Parameters that steer lateral-torsional buckling.",
              headers: ["Parameter", "Effect on LTB resistance", "Why"],
              rows: [
                ["Unbraced length", "Longer = weaker", "Flange column slenderness rises"],
                ["Flange width", "Wider = stronger", "Lateral and warping stiffness rise"],
                ["Load height above shear centre", "Higher = weaker", "Aggravates the twist"],
                ["Moment gradient", "Uniform = worst", "C1 factor penalises uniform moment"],
                ["Torsion constant (box vs I)", "Box = far stronger", "Twist resistance"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How lateral-torsional buckling develops",
              caption:
                "Five linked statements that explain LTB from load to design consequence.",
              steps: [
                { label: "Beam carries moment", note: "one flange compresses" },
                { label: "Flange acts like a strut", note: "between restraints" },
                { label: "It buckles sideways", note: "weak axis of escape" },
                { label: "Web drags the section into twist", note: "coupled movement" },
                { label: "Capacity drops below Mp", note: "restrain or derate" },
              ],
            },
            callout: {
              type: "warning",
              title: "Restraint must be at the compression flange",
              body: "A brace at the bottom (tension) flange or mid-web does not stop LTB - the compression flange is the one trying to escape. Exam sketches should show the restraint physically holding the top flange; anything else invites the examiner's red pen.",
            },
            keyTerms: [
              { term: "Lateral-torsional buckling", definition: "Combined sideways buckling and twisting of an unrestrained beam at high moment." },
              { term: "Elastic critical moment", definition: "The theoretical moment at which an unrestrained beam buckles elastically; feeds the design curve." },
              { term: "Destabilising load", definition: "A load applied above the shear centre that amplifies twist during buckling." },
            ],
            examQuestions: [
              {
                q: "Explain the phenomenon of lateral-torsional buckling of beams with a neat sketch. Discuss the factors that influence the buckling resistance and the measures a designer takes to prevent or mitigate it.",
                marks: 7,
                outline: [
                  "Sketch the beam, the compression flange bowing sideways and the section twisting.",
                  "Explain the strut analogy: the compression flange is a slender column between restraints.",
                  "Factors: unbraced length, flange width and thickness, torsion constant, load height, moment gradient.",
                  "Note box sections' high torsion resistance versus open I-sections.",
                  "Capacity path: plastic moment down to elastic critical as slenderness grows; IS 800 uses a buckling curve on Mcc.",
                  "Remedies: lateral restraints (slabs, cross beams, purlins), wider flanges, box sections, bottom-flange loading.",
                  "Conclude with typical cases: gantry girders, long walkways, rafters restrained by purlins.",
                ],
              },
              {
                q: "Why is a load applied above the shear centre called destabilising?",
                marks: 2,
              },
              {
                q: "Why do box sections resist lateral-torsional buckling far better than I-sections of the same area?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Purlins and sheeting rails",
            body: [
              "Purlins are the quiet middlemen of a roof: they span between trusses or rafters, carry the sheeting and insulation, and - almost as a side job - restrain the top chord against buckling. Their loads are modest but awkward: dead load of sheeting and self-weight, imposed load on the slope (reduced by IS 875 for slopes above 10 degrees), and wind - pressure on the windward side, strong suction on the leeward - acting normal to the roof surface. On light roofs, wind uplift with 0.9 dead load frequently reverses the purlin's bending and governs the design.",
              "Because the roof is sloped, a vertical load resolves into components about the purlin's two principal axes, and the purlin bends biaxially - which is why section shape matters more than area. Angle purlins are cheapest for spans to about 4 m but are weak obliquely, so sag rods support their weak axis on steeper roofs. Channels behave better and bolt easily through cleats to the rafters. Z-sections, with flanges turned up-slope, align their strong axis with the load and lap continuously over interior supports, making them the modern default for spans of 4 to 7 m; I-sections serve heavier duties and double as runners tying the frames together.",
              "Design is a small but complete exercise. Compute the loads (including the uplift combination), resolve them onto the principal axes, pick a section by biaxial modulus, check bending and deflection in both directions, and detail the cleat connection plus sag rods at the third points where used. Continuity pays: a lapped Z purlin over two spans saves a fifth of the material of simply supported runs. The exam expects the type selection logic - slope and span deciding the family - plus the load decomposition and the uplift check.",
            ],
            bullets: [
              "Function: span between trusses/rafters, carry sheeting, restrain the compression chord.",
              "Loads: sheeting and self-weight, slope-reduced imposed load, wind pressure and suction normal to roof.",
              "Biaxial bending: vertical load resolves along both principal axes on a sloping roof.",
              "Types: angle (to about 4 m, with sag rods), channel, lapped Z-section (4 - 7 m), I-section (heavy).",
              "Wind uplift with 0.9 DL often reverses bending and governs on light roofs - always check it.",
            ],
            table: {
              caption: "Purlin families by span and duty.",
              headers: ["Type", "Economic span", "Notes"],
              rows: [
                ["Angle (ISA)", "up to about 4 m", "Cheapest; sag rods support the weak axis on slopes"],
                ["Channel (ISMC)", "4 - 6 m", "Symmetric, easy cleated connections"],
                ["Z-section", "4 - 7 m", "Flanges up-slope; lapped continuity over supports"],
                ["I-section", "beyond 6 m", "Heavy loads; doubles as a runner/tie"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the purlin by span and slope",
              caption:
                "Slope decides whether the weak axis needs help; span decides how much metal the job needs.",
              axes: {
                x: "Span (left: up to about 5 m, right: beyond 5 m)",
                y: "Roof slope (top: steep, bottom: low)",
              },
              quadrants: [
                { label: "Z purlins + sag rods", note: "flanges up-slope, lapped continuous" },
                { label: "I or trussed purlin", note: "heavy spans, sag ties at third points" },
                { label: "Angle purlin", note: "bolted cleats, cheapest solution" },
                { label: "Channel or lapped Z", note: "continuous over two spans" },
              ],
            },
            callout: {
              type: "warning",
              title: "The uplift ambush",
              body: "On a light sheeted roof, 0.9 DL + 1.5 WL suction can exceed the gravity case - and it bends the purlin the other way, putting the normally-unstressed flange into compression. Run the uplift check on every purlin design, and mention the reversal explicitly in the exam.",
            },
            keyTerms: [
              { term: "Purlin", definition: "Horizontal member spanning between trusses or rafters that supports the roof sheeting." },
              { term: "Sag rod", definition: "Tie rod supporting the purlin's weak axis against vertical sag on sloping roofs." },
              { term: "Wind uplift", definition: "Net suction (with 0.9 DL) that reverses purlin bending and often governs light roofs." },
            ],
            examQuestions: [
              {
                q: "What are purlins and sag rods? Discuss the types of purlins with their economic spans, the loads (including wind uplift) acting on them, and the design checks a purlin must satisfy on a sloping roof.",
                marks: 7,
                outline: [
                  "Define purlins and their double duty: carrying sheeting and restraining the top chord.",
                  "Loads: sheeting + self-weight, slope-reduced imposed load, wind normal to roof.",
                  "Explain biaxial bending from resolving vertical load on the slope.",
                  "Types: angle (about 4 m), channel (4 - 6 m), lapped Z (4 - 7 m), I (heavy).",
                  "Sag rods support the weak axis on steeper slopes - placement at third points.",
                  "Checks: biaxial bending, deflection in both axes, cleat connection.",
                  "Uplift case 0.9 DL + 1.5 WL reverses bending and often governs.",
                ],
              },
              {
                q: "Why are sag rods provided for angle purlins on steeply sloping roofs?",
                marks: 2,
              },
              {
                q: "Why is a Z-section purlin oriented with its flanges pointing up the roof slope?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Plate girders: proportioning and stiffeners",
            body: [
              "Rolled sections stop answering beyond depths of about 700 mm, and plate girders take over: three plates - two flanges and a deep web - welded into an I of any proportion the moment demands. Proportioning starts with depth, economically around span/10 (kept within about span/8 to span/12), then the web thickness from shear and slenderness, then the flange area: with the flanges imagined as the couple carrying the moment, Af is roughly M/(fy x d) - a 1200 kN·m demand over a 1500 mm deep girder needs about 3200 mm^2 per flange in E250 steel.",
              "The web is deliberately thin, so it is stiffened. Intermediate transverse stiffeners divide the web into panels; spacing up to about 1.5 d is used when the girder is designed for tension-field action, in which a buckled panel keeps carrying shear through a diagonal band of tension anchored between the stiffeners and flanges - post-buckling strength that lets plates get thinner. Load-bearing stiffeners are fitted at concentrated loads and reactions, checked as little columns including a strip of web; longitudinal stiffeners at about 0.2 d from the compression flange stabilise very deep webs; and end panels, which anchor the tension field, are designed conservatively.",
              "The anatomy and its reasoning are the exam core. Sketch the cross-section: top flange (compression, area from moment), web (shear, thin, panelled), bottom flange (tension), transverse stiffeners (panels and tension-field anchors), longitudinal stiffener (deep-web bending stability), bearing stiffeners at supports (reaction struts). Add the flange-to-web fillet welds, sized for the horizontal shear flow, and the economy statement: plate girder design balances web thinning against stiffener cost, and tension-field action is what makes the trade profitable.",
            ],
            bullets: [
              "Plate girders take over beyond rolled depths; welded from three plates to any proportion.",
              "Proportioning: depth about span/10 (span/8 - span/12); Af roughly M/(fy x d).",
              "Intermediate transverse stiffeners panel the web; spacing up to about 1.5 d for tension-field design.",
              "Tension-field action: post-buckling diagonal tension band carries shear - the reason webs can be thin.",
              "Other stiffeners: load-bearing at loads/reactions (checked as struts), longitudinal at 0.2 d for deep webs.",
            ],
            codeExample: {
              language: "python",
              caption: "First-trial proportioning of a plate girder",
              code: `def trial_flange_area(M_kNm, d_mm, fy=250):
    """Flange area (mm^2) from the flange-couple approximation."""
    return M_kNm * 1e6 / (fy * d_mm)

def stiffener_spacing_ok(c_mm, d_mm, tension_field=True):
    """Intermediate stiffener spacing check (simplified rule)."""
    limit = 1.5 * d_mm if tension_field else 3.0 * d_mm
    return c_mm <= limit

# M = 1200 kN.m about a 1500 mm deep web, E250
print(trial_flange_area(1200, 1500))      # -> 3200 mm^2 per flange
print(stiffener_spacing_ok(2000, 1500))   # -> True (2000 <= 2250)
`,
            },
            diagram: {
              kind: "layers",
              title: "Plate girder anatomy, top flange to bearing",
              caption:
                "Read the stack top to bottom - each layer names a part and the job it does.",
              layers: [
                { label: "Top flange", note: "compression; area about M/(fy d)" },
                { label: "Longitudinal stiffener", note: "at 0.2 d from compression flange, deep webs" },
                { label: "Web", note: "shear; thin, works in panels" },
                { label: "Transverse stiffeners", note: "panel the web; tension-field anchors" },
                { label: "Bottom flange", note: "tension; same area as top" },
                { label: "Bearing stiffeners", note: "at supports; reaction struts" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the stiffener, name the job",
              body: "The guaranteed plate-girder question asks for stiffener types and functions. Answer as pairs: intermediate transverse - panels plus tension-field anchors; load-bearing - concentrated loads and reactions as struts; longitudinal - deep-web bending stability; end panels - conservative design without tension field. Four pairs, full marks.",
            },
            keyTerms: [
              { term: "Tension field action", definition: "Post-buckling shear resistance of a web panel through a diagonal tension band between stiffeners." },
              { term: "Load-bearing stiffener", definition: "Stiffener at a concentrated load or reaction, checked as a strut with an associated web strip." },
              { term: "Economic depth", definition: "Girder depth, near span/10, balancing flange and web material costs." },
            ],
            examQuestions: [
              {
                q: "What is a plate girder and when is it preferred over a rolled section? Explain its proportioning and the functions of intermediate transverse, load-bearing and longitudinal stiffeners, with a sketch.",
                marks: 7,
                outline: [
                  "Define plate girder: welded flange plates and a deep web beyond rolled-section limits.",
                  "Proportioning: depth about span/10; web from shear and slenderness; Af about M/(fy d).",
                  "Sketch the cross-section and elevation with all stiffener types marked.",
                  "Intermediate transverse stiffeners: panel the web, spacing up to about 1.5 d with tension field.",
                  "Load-bearing stiffeners: at loads/reactions, checked as struts with a web strip.",
                  "Longitudinal stiffener at 0.2 d: stabilises deep webs in bending.",
                  "Explain tension-field action and the flange-web weld shear flow; end panels designed conservatively.",
                ],
              },
              {
                q: "State the approximate flange area required for a girder carrying a factored moment of 1000 kN·m on an effective depth of 1250 mm in E250 steel.",
                marks: 2,
              },
              {
                q: "Explain tension-field action in a plate girder web panel.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Roof trusses, bracing and case studies",
            body: [
              "Roof trusses convert bending into axial force. Spanning 10 to 30 m and spaced at 4 to 6 m, they carry purlin loads at their nodes: the top chord works in compression between purlin points, the bottom chord in tension, and the web members shuttle shear along the span. The catalogue matches form to span - the Fink truss with its subdivided top chord for 10 to 15 m, Pratt and Howe trusses to about 25 m with their opposite diagonal senses, the unsymmetrical North-light truss where daylighting matters, and mono-pitch sheds for lean-to roofs. Pitch is set by drainage and cladding, commonly 22 to 30 degrees for sheeted roofs.",
              "Bracing is the truss roof's skeleton key. Roof plan bracing in the end bays resists wind on the gable walls and hands it to the columns; purlins and tie runners restrain the top chord against buckling; ridge ties and cross braces hold the bottom chord that wind uplift can push into compression; and longitudinal bracing ties the whole building together for erection stability, when a half-built truss has no partners to lean on. The load path is the story to tell: sheeting to purlins to nodes to members to bearings to braced columns to the foundation - one continuous chain examiners ask you to trace.",
              "Case studies anchor the theory. A standard industrial shed - 20 m span, Fink or Pratt trusses at 5 m centres, lapped Z purlins, end-bay bracing - exercises every unit of this subject in one structure. The Howrah Bridge is its monumental ancestor: a cantilever truss of riveted built-up members, no welds, its proportions dictated by the same member checks decades before IS 800: 2007 was drafted. Modern tubular roof trusses in stadiums weld closed sections whose high torsion stiffness resists buckling from every direction. Each case repeats the same lessons: explicit load paths, redundant bracing, fatigue-aware detailing and corrosion protection.",
            ],
            bullets: [
              "Trusses turn bending into axial force: top chord compression, bottom chord tension, webs carry shear.",
              "Catalogue: Fink 10 - 15 m, Pratt/Howe 15 - 25 m, North-light for daylight, mono-pitch for sheds.",
              "Purlins double as top-chord restraints; spacing 4 - 6 m; pitch 22 - 30 degrees for drainage.",
              "Bracing: end-bay roof plan bracing, sway bracing, ridge ties, runners - plus erection stability.",
              "Cases: industrial shed workflow; Howrah Bridge (riveted cantilever truss); modern tubular stadium roofs.",
            ],
            table: {
              caption: "Roof truss types by economic span.",
              headers: ["Truss type", "Economic span", "Feature"],
              rows: [
                ["Fink", "10 - 15 m", "Subdivided top chord, light members"],
                ["Pratt", "15 - 25 m", "Diagonals in tension, verticals in compression"],
                ["Howe", "15 - 25 m", "Diagonals in compression, verticals in tension"],
                ["North-light", "15 - 30 m", "Unsymmetrical, north-facing glazing"],
                ["Mono-pitch", "8 - 15 m", "Sheds and lean-to roofs"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Load path in a braced industrial roof",
              caption:
                "Follow one wind or gravity load from sheeting to foundation - the chain every bracing element exists to complete.",
              steps: [
                { label: "Sheeting", note: "gravity and wind pressure/suction" },
                { label: "Purlins", note: "also brace the top chord" },
                { label: "Truss nodes", note: "loads applied at panel points" },
                { label: "Chords and webs", note: "axial forces only" },
                { label: "Bearings on columns", note: "truss reactions" },
                { label: "Bracing to foundation", note: "end bays hand wind to the ground" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The bracing question is function-led: name each element, then say what it does - end-bay plan bracing resists gable wind, purlins restrain the compression chord, ridge ties hold the uplift-compressed bottom chord, runners tie frames for erection. A sketch of the roof plan with the braced bay shaded answers it completely.",
            },
            keyTerms: [
              { term: "Fink truss", definition: "Pitched truss with a subdivided top chord, light and economic for 10 - 15 m spans." },
              { term: "Sway bracing", definition: "Diagonal bracing that resists lateral wind loads and stabilises the frame." },
              { term: "Node load", definition: "Load delivered at a truss joint so members carry pure axial force." },
            ],
            examQuestions: [
              {
                q: "Describe the common roof truss types with their economic spans and suitability. Explain the bracing system required in an industrial building and trace the complete load path from roof sheeting to the foundation.",
                marks: 7,
                outline: [
                  "Sketch and name Fink, Pratt, Howe, North-light and mono-pitch trusses with spans.",
                  "Explain member roles: top chord compression, bottom chord tension, webs for shear.",
                  "Bracing elements: end-bay roof plan bracing, sway bracing, ridge ties, purlins, runners.",
                  "Functions: gable wind resistance, chord restraint, erection stability.",
                  "Load path: sheeting to purlins to nodes to members to bearings to columns to foundation.",
                  "Note uplift putting the bottom chord into compression and the role of ties.",
                  "Close with a case example: a 20 m span shed with braced end bays.",
                ],
              },
              {
                q: "Why are loads ideally applied at truss nodes rather than between them?",
                marks: 2,
              },
              {
                q: "List the functions of roof bracing in a steel industrial building.",
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
        "RGPV CE-801 papers concentrate their marks on connections and members: bolted and welded design together carry over a third of the paper, compression members with their buckling curves bring another sixth, and plate girders, beams and trusses supply the long design questions. Weight your hours the same way, and keep one full design solve per major topic - the examiner awards method marks for correct IS 800 procedure even when arithmetic slips.",
      ],
      weightedTopics: [
        { topic: "Bolted connections: shear, bearing, tension capacities and joint detailing", weight: "12-14 marks", note: "Nearly every paper; one full lap-joint design with all failure checks." },
        { topic: "Welded connections: fillet size, throat, effective length, butt welds", weight: "10-12 marks", note: "At least one fillet-length computation plus a symbols or process question." },
        { topic: "Compression members: effective length, buckling classes, fcd computation", weight: "10-12 marks", note: "The fcd formula with curve selection is a repeated 7-mark favourite." },
        { topic: "Plate girders: proportioning, stiffener types and tension field", weight: "8-10 marks", note: "Sketch-heavy; label every stiffener's function on the drawing." },
        { topic: "Beams: laterally supported design plus LTB theory", weight: "8-10 marks", note: "One beam design and one LTB explanation question is the usual pattern." },
        { topic: "Tension members: Tdg, Tdn, net area with staggered holes", weight: "6-8 marks", note: "Staggered-hole net area appears as a short numerical - practise p^2/4g." },
        { topic: "Roof trusses, purlins and bracing", weight: "6-8 marks", note: "Load-path tracing and bracing functions; purlin choice by slope and span." },
        { topic: "Block shear in members and connections", weight: "4-6 marks", note: "Two-expression Tdb with sketch; know which expression governs and when." },
        { topic: "Section classification and partial safety factors", weight: "4-6 marks", note: "Definitional shorts; memorise epsilon-scaled limits and all gamma values." },
        { topic: "Built-up columns, lacing/battening and column bases", weight: "4-6 marks", note: "Detailing rules and the 2.5 per cent transverse shear design basis." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for trusses, case studies and full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - materials and design philosophy", tasks: ["Steel grades and IS 2062 values; rolled-section vocabulary", "Limit state vs working stress; all partial safety factors and combinations", "Classification: memorise flange and web limits; classify five rolled sections"] },
        { week: "Week 2", focus: "Unit II - bolted connections", tasks: ["Bolt shear and bearing capacity with kb computation (4 problems)", "Detailing rules: pitch, edge distance, gauge; sketch permissible layouts", "One complete lap-joint design including block shear and net section"] },
        { week: "Week 3", focus: "Unit III - welded connections", tasks: ["Fillet weld sizing and effective length (4 problems)", "Butt weld types, throat and strength; symbol-reading drill", "Weld defects, NDT and the welded-vs-bolted comparison"] },
        { week: "Week 4", focus: "Unit IV - tension and compression members", tasks: ["Tdg and Tdn with staggered holes; lug angle rules", "Effective length K values and slenderness limits; fcd on all four curves", "Lacing vs battening forces; base plate sizing"] },
        { week: "Week 5", focus: "Unit V - beams and plate girders", tasks: ["Laterally supported beam design (2 full problems)", "LTB mechanism, factors and remedies; purlin selection by span and slope", "Plate girder proportioning, stiffener sketch, tension field"] },
        { week: "Week 6", focus: "Trusses, bracing and full revision", tasks: ["Truss types and bracing functions; trace the wind load path", "Rewrite the formula sheet from memory twice", "Two full past papers under exam timing; revisit the slips list"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours before the paper",
      body: [
        "The final day is for consolidation, not new material. Everything below is a closed loop you already own; the goal is to have the six anchor formulas and eight canonical sketches retrievable in seconds when the question paper lands.",
      ],
      bullets: [
        "Rewrite the one-page formula sheet from memory: Vdsb, Vdpb with kb, Tdg/Tdn/Tdb, fcd with all four alphas, weld capacity 161 s N/mm.",
        "Redraw the eight canonical sketches: lap-joint failure modes, block-shear path, weld symbol anatomy, lacing vs battening, LTB mechanism, plate girder cross-section, effective length cases, roof bracing plan.",
        "Rerun one bolt design and one fillet-weld length problem start to finish - those two cover the most marks per minute in the paper.",
        "Recite the tables: K values (1.0/0.65/0.8/2.0), slenderness caps (180/250/350/400), alphas (0.21/0.34/0.49/0.76), detailing minima (2.5 d pitch, 1.5 d0 edge).",
        "Sleep at least six hours - steel design rewards steady arithmetic over last-minute cramming.",
        "Plan the first ten minutes: pick the two 7-mark connection or column questions first while your hand is fresh.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Write the IS 800 formula first, then substitute with units shown - formula recognition earns marks even if the arithmetic later slips.",
        "Draw the failure-mode or load-path sketch before computing; examiners look for the picture on connection, girder and truss questions.",
        "When several limit states apply, compute each, underline the least, and write 'this governs' - the governing-value statement is a marked step.",
        "Show every gamma explicitly: 1.10 for yielding, 1.25 for rupture, bolts and shop welds, 1.50 for site welds.",
        "Time-box: 7-mark design questions get 15-18 minutes, 2-3 mark shorts get 4-5, and the last 10 minutes re-check numbers and label sketches.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Using fy where the code wants fu: bolt shear, bearing and net-section rupture all run on fu with gamma 1.25, not fy with gamma 1.10.",
        "Deducting the hole as d instead of d0 (hole = bolt + 2 mm for M16-M24) and forgetting the p^2/4g credit on staggered chains.",
        "Leaving weld effective length equal to the drawn length - always deduct 2 s for the craters and check the 4 s minimum.",
        "Assuming single shear where cover plates give double shear - the shear planes double with them.",
        "Mixing up K values: theoretical 0.5 instead of the recommended 0.65 for fixed-fixed, or forgetting the 2.0 cantilever case.",
        "Ignoring shear lag and the long-joint factor for angles bolted through one leg - both quietly slash tension capacity.",
      ],
    },
  ],
};
