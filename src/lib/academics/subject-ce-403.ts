/**
 * Academics - RGPV CE 4th-semester subject: CE-403 Structural Analysis-I.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries 3 body paragraphs (~110 words
 * each), 5 bullets, a diagram, a callout, a table or code sample, 3 key
 * terms and 3 exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce403: AcademicSubject = {
  id: "ce-403",
  code: "CE-403",
  title: "Structural Analysis-I",
  semester: "IV Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to structural analysis-I for civil engineers: classification and determinacy, truss analysis by joints, sections and tension coefficients, three-hinged and two-hinged arches, cables and suspension bridges, and deflection with influence lines - all with worked numerics, redrawable diagrams, and the questions RGPV actually asks.",
  description:
    "Five units walk from the classification, determinacy and stability of structures through the analysis of pin-jointed trusses by method of joints, sections and tension coefficients, into three-hinged and two-hinged arches with their bending moment, shear and axial force diagrams and the secondary effects of rib shortening and temperature, across cables under uniform and point loads and the stiffening girders of suspension bridges, and finally into Macaulay's method and the conjugate beam method for deflection and the construction and use of influence lines for shear and bending moment via Muller-Breslau. Every section pairs the textbook theory with a worked numerical, a redrawable diagram, and three exam-style questions including one full 7-mark answer outline.",
  accentColor: "#ef4444",
  emoji: "SA",
  unitCount: 5,
  totalSections: 25,
  units: [
    // ============= UNIT I - DETERMINATE AND INDETERMINATE STRUCTURES =============
    {
      number: 1,
      roman: "I",
      title: "Determinate and Indeterminate Structures",
      summary:
        "Classification of structures by geometry and by determinacy, the formal criteria for static and kinematic indeterminacy, the degree of freedom concept, and the force and stiffness approaches that drive the rest of the syllabus.",
      chapter: {
        number: "01",
        title: "Determinate and Indeterminate Structures",
        intro:
          "Unit I sets the framework for the whole subject. Sections walk through the classification of structures by geometry and by determinacy, the formal criteria for static and kinematic indeterminacy with worked formulas for trusses, beams and frames, the degree of freedom concept that underlies the stiffness method, and the contrasting force and stiffness approaches to indeterminate analysis.",
        inOneBreath:
          "Structures are classified by member geometry (beam, truss, frame, arch, cable, continuum) and by determinacy (statically determinate vs indeterminate); a 2D pin-jointed truss is determinate when m + r = 2j, deficient when m + r is less than 2j and redundant when m + r exceeds 2j; a planar rigid-jointed frame satisfies (3m + r) minus 3j; static indeterminacy counts the extra equations needed beyond equilibrium, kinematic indeterminacy counts the independent joint displacements; the degree of freedom is the number of independent coordinates needed to describe the deformed shape; and force and stiffness methods are the two complementary routes to indeterminate analysis.",
        sections: [
          {
            number: "1.1",
            title: "Classification of structures",
            body: [
              "A structure is an assembly of members joined so that the whole can carry the applied loads safely to the foundations. Civil engineering classifies structures first by the geometry of their members: beams resist transverse loads mainly by bending, columns carry axial compression, trusses are pin-jointed triangulated networks whose straight members take only axial force, frames have rigid joints that transmit moments, arches curve to convert vertical load into horizontal thrust at the abutments, and cables are perfectly flexible members that work wholly in tension and adopt a funicular shape. Each family has its own analysis vocabulary: shear and bending moment diagrams for beams, joint equilibrium for trusses, and moment distribution or slope-deflection for rigid frames.",
              "The second classification cuts across geometry and asks how many unknowns the structure presents relative to the equations of statics. A planar body in equilibrium satisfies three equations: the sum of horizontal forces, the sum of vertical forces, and the sum of moments about any point each equal to zero. If these three equations alone suffice to compute every external reaction and internal force, the structure is statically determinate; if additional equations drawn from the geometry of deformation are required, the structure is statically indeterminate, and the count of such extra equations is its degree of static indeterminacy. A simply supported beam is determinate, whereas a propped cantilever and a fixed-fixed beam are indeterminate to the first and third degrees respectively, requiring deflection conditions in addition to equilibrium.",
              "Structures are also grouped by the path loads take to the ground and by the dimensionality of their members. A beam is a one-dimensional member spanning between supports; a plate or slab spreads load in two directions; a shell curves in two directions and carries load mainly by membrane action; and a continuum such as a retaining wall or earth dam resists load by distributed stress. Finally the form distinguishes skeletal structures, built from discrete one-dimensional members such as beams, columns and truss bars, from surface or continuum structures. The engineer chooses the family by span, load and material: a thirty-metre roof wants a truss, a two-hundred-metre bridge wants a cable or arch, and a multi-storey building wants a rigid frame. Each choice fixes the analysis path.",
            ],
            bullets: [
              "Geometry families: beams (bending), columns (axial), trusses (pin-jointed axial), frames (rigid-jointed moment), arches (thrust), cables (tension).",
              "Determinacy cut: a planar body has three equilibrium equations; if they alone solve every unknown, the structure is statically determinate.",
              "Static indeterminacy is the count of extra equations, beyond equilibrium, that the structure demands - usually deflection compatibility equations.",
              "Skeletal vs continuum: skeletal structures are built from discrete one-dimensional members; continuum structures resist load by distributed stress.",
              "Span governs family: trusses for medium roofs, arches and cables for long bridges, rigid frames for multi-storey buildings.",
            ],
            table: {
              caption: "Common structure families and their primary load action.",
              headers: ["Family", "Joint type", "Primary action", "Typical span"],
              rows: [
                ["Beam", "rigid (to supports)", "bending", "5 - 15 m"],
                ["Truss", "pin-jointed", "axial force only", "15 - 60 m"],
                ["Rigid frame", "rigid", "bending + axial", "5 - 20 m"],
                ["Arch", "pin or fixed", "compression + thrust", "30 - 300 m"],
                ["Cable", "flexible", "tension only", "100 - 2000 m"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Classification by determinacy vs member form",
              caption:
                "Quadrants: skeletal-determinate top-left, skeletal-indeterminate top-right, continuum-determinate bottom-left, continuum-indeterminate bottom-right.",
              axes: {
                x: "statically determinate  ->  statically indeterminate",
                y: "skeletal form  ->  continuum form",
              },
              quadrants: [
                { label: "Simply supported beams, perfect trusses", note: "three equilibrium equations solve everything" },
                { label: "Continuous beams, rigid frames, two-hinged arches", note: "compatibility equations required" },
                { label: "Retaining walls under Rankine earth pressure", note: "stress field computed directly" },
                { label: "Fixed slabs, shells, arch dams", note: "finite element or elasticity theory" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name both classifications in every answer",
              body: "When asked to classify a structure, write the geometry family first (beam, truss, frame, arch, cable) and then the determinacy (statically determinate or indeterminate, with the degree). Two classifications, two answer blocks, two marks earned before any computation.",
            },
            keyTerms: [
              { term: "Skeletal structure", definition: "A structure built from discrete one-dimensional members such as beams, columns and truss bars." },
              { term: "Statically determinate", definition: "A structure whose every external reaction and internal force follows from the three static equilibrium equations alone." },
              { term: "Continuum structure", definition: "A structure such as a wall, slab, shell or dam that resists load by distributed stress rather than discrete member forces." },
            ],
            examQuestions: [
              {
                q: "Classify civil engineering structures by their member geometry and by their static determinacy. Give one example of each determinate and indeterminate skeletal structure and explain why each is so classified.",
                marks: 7,
                outline: [
                  "Define a structure as an assembly of load-carrying members.",
                  "Geometry classification: beams, columns, trusses, frames, arches, cables - one line each.",
                  "Determinacy classification: statically determinate vs indeterminate, with definition.",
                  "Skeletal-determinate example: a simply supported beam or a perfect pin-jointed truss - solved by three equilibrium equations.",
                  "Skeletal-indeterminate example: a propped cantilever or fixed-fixed beam - extra deflection equations needed.",
                  "State the degree of indeterminacy: propped cantilever is degree 1, fixed-fixed beam is degree 3.",
                  "Conclude with the continuum vs skeletal distinction and a note that geometry and determinacy are independent axes.",
                ],
              },
              {
                q: "Name the three equations of equilibrium for a planar structure.",
                marks: 2,
              },
              {
                q: "Give one example each of a skeletal and a continuum structure.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Determinacy and stability",
            body: [
              "Determinacy asks whether the equations of statics alone solve a structure; stability asks whether the structure, even if determinate, holds its geometry under load. A truss with m members, j joints and r support reactions is statically determinate when m + r equals 2j; with m + r less than 2j it is deficient or unstable, and with m + r greater than 2j it is redundant. A planar rigid-jointed frame satisfies the analogous rule with the count (3m + r) minus 3j: zero for determinate, negative for unstable, positive for redundant. The count is necessary but not sufficient, because geometry also matters: a truss can satisfy the count and still be unstable if its members form a mechanism.",
              "Stability has three independent meanings. Geometric stability means the structure cannot collapse as a mechanism; a triangular pin-jointed frame is the smallest stable assembly, and any polygon of more than three sides needs a diagonal to be stable. External stability means the supports alone prevent rigid-body motion: three non-concurrent, non-parallel reactions make a planar body stable externally. Internal stability means the member arrangement itself prevents collapse independently of the supports. A structure can be externally stable but internally unstable, or vice versa; both must hold for the structure to stand. The criteria are quick screening tools, not a substitute for a full equilibrium check.",
              "Worked example. A pin-jointed truss has 7 joints, 11 members and 3 support reactions (a pin and a roller). The count gives m + r minus 2j equals 11 + 3 minus 14 equals 0, so the truss is statically determinate by the count. To confirm stability, observe that the truss is built from a triangle by adding two members per new joint, the stable assembly pattern; the supports are a pin (two reactions) and a roller (one reaction), giving three non-parallel reactions; and no member is redundant. The truss is therefore both statically determinate and stable. A truss with the same count but a square panel without a diagonal would be unstable, illustrating that the count alone is necessary but not sufficient.",
            ],
            bullets: [
              "Truss count: m + r = 2j for determinate; m + r less than 2j unstable; m + r greater than 2j redundant.",
              "Frame count: (3m + r) minus 3j follows the same sign convention for planar rigid-jointed frames.",
              "Three stability meanings: geometric (no mechanism), external (supports prevent rigid-body motion), internal (member layout holds geometry).",
              "External stability needs three non-concurrent, non-parallel reactions for a planar body; fewer or parallel reactions fail.",
              "The count is necessary but not sufficient - a square panel without a diagonal fails stability despite a balanced count.",
            ],
            table: {
              caption: "Determinacy and stability counts for common planar trusses.",
              headers: ["Truss", "joints j", "members m", "reactions r", "m + r - 2j", "Class"],
              rows: [
                ["Triangle (3 bars)", "3", "3", "3", "0", "determinate"],
                ["King post", "4", "5", "3", "0", "determinate"],
                ["Warren (7 joints)", "7", "11", "3", "0", "determinate"],
                ["Square no diagonal", "4", "4", "3", "-1", "unstable"],
                ["Warren + 1 diagonal", "7", "12", "3", "1", "redundant"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Determinacy and stability check workflow",
              caption:
                "Run the count first, then verify geometry, then verify the supports - all three must pass.",
              steps: [
                { label: "Count joints j, members m, reactions r", note: "from the sketch" },
                { label: "Compute m + r - 2j for a truss", note: "or (3m + r) - 3j for a frame" },
                { label: "Sign of the count", note: "negative unstable, zero determinate, positive redundant" },
                { label: "Verify internal stability", note: "triangle rule for trusses" },
                { label: "Verify external stability", note: "three non-parallel reactions" },
                { label: "Conclude determinacy + stability", note: "all three checks must agree" },
              ],
            },
            callout: {
              type: "warning",
              title: "Count is necessary, not sufficient",
              body: "A truss with m + r equal to 2j can still collapse if its members form a mechanism (e.g. a square panel without a diagonal). Always verify internal stability by the triangle rule before relying on the count, and never claim stability from the count alone.",
            },
            keyTerms: [
              { term: "Static determinacy", definition: "The condition that the three equilibrium equations alone solve every unknown reaction and internal force of a planar structure." },
              { term: "Geometric stability", definition: "The property that the structure cannot collapse as a mechanism; for a truss it follows the triangle rule of assembly." },
              { term: "External stability", definition: "The property that the supports alone prevent rigid-body motion of the structure; three non-concurrent, non-parallel reactions suffice for a planar body." },
            ],
            examQuestions: [
              {
                q: "Define static determinacy and stability. Derive the condition m + r = 2j for a pin-jointed truss and explain why the count alone is not sufficient to guarantee stability. Illustrate with one stable and one unstable example.",
                marks: 7,
                outline: [
                  "Define determinacy: solvable by equilibrium alone; define stability: geometry holds under load.",
                  "Derive m + r = 2j: each joint gives two equilibrium equations, total 2j; each member and reaction is one unknown, total m + r.",
                  "Sign convention: less than 2j unstable, equal determinate, greater redundant.",
                  "Explain insufficiency: a truss can satisfy the count yet be a mechanism, e.g. a square panel without a diagonal.",
                  "Stable example: a Warren truss with 7 joints, 11 members, 3 reactions, built from triangles.",
                  "Unstable example: a four-bar square with 4 joints, 4 members, 3 reactions gives count -1 (unstable) or a square panel without a diagonal (count zero but unstable).",
                  "Conclude that geometric (triangle rule) and external (three non-parallel reactions) checks must accompany the count.",
                ],
              },
              {
                q: "Compute the static indeterminacy of a truss with 9 joints, 15 members and 3 reactions.",
                marks: 2,
              },
              {
                q: "State the three meanings of stability and one failure mode each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Static and kinematic indeterminacy",
            body: [
              "Static indeterminacy counts the number of unknowns beyond those the equilibrium equations can solve; kinematic indeterminacy counts the independent joint displacements that completely describe the deformed shape. For a truss, the static indeterminacy is (m + r) minus 2j and the kinematic indeterminacy is 2j minus r, because each free joint has two displacement components and each reaction constrains one component. For a planar rigid-jointed frame, the static indeterminacy is (3m + r) minus 3j, while the kinematic indeterminacy is 3j minus r if axial deformation is ignored (each joint rotates and translates in two directions, but member inextensibility removes the translation). The two counts are complementary - the more constraints you remove, the more unknowns you must solve by compatibility.",
              "Static and kinematic indeterminacy are the two faces of the same problem. A propped cantilever has four reactions (three at the fixed end plus one at the prop) and three equilibrium equations, so its static indeterminacy is one. To solve it by the stiffness method, we identify that the free end has one unknown - the vertical deflection at the prop - so the kinematic indeterminacy is also one (if rotations and axial shortening of the cantilever are admitted, the count grows accordingly). The force method chooses the extra reaction as the redundant and writes a compatibility equation; the stiffness method chooses the joint displacement as the unknown and writes an equilibrium equation. Either approach yields the same answer; the choice is computational convenience.",
              "Worked example. A two-span continuous beam ABC carries uniform load w per unit length over both spans of length L each. There are three supports: a pin at A and rollers at B and C, giving r equals 4 reactions. For a beam (treated as a chain of members with rigid joints), the static indeterminacy is r minus 3 equals 1. The kinematic indeterminacy is also one: the only unknown joint displacement (if axial shortening is ignored) is the rotation at the internal support B. So the beam can be solved either by releasing one support reaction (force method) or by solving the single slope equation at B (slope-deflection, the stiffness method). The Muller-Breslau principle and the three-moment equation in later sections both exploit this one-degree indeterminacy.",
            ],
            bullets: [
              "Static indeterminacy = (unknowns) minus (equilibrium equations); kinematic indeterminacy = (independent joint displacements).",
              "Truss: static (m + r) minus 2j; kinematic 2j minus r (each free joint has two displacement components).",
              "Frame: static (3m + r) minus 3j; kinematic 3j minus r (ignoring axial deformation).",
              "Propped cantilever: static indeterminacy 1 (4 reactions - 3 equations); kinematic indeterminacy 1 (one unknown joint rotation).",
              "The two counts are complementary: force method attacks static indeterminacy, stiffness method attacks kinematic indeterminacy.",
            ],
            codeExample: {
              language: "python",
              caption: "Static indeterminacy check for trusses and beams in plain Python.",
              code: `def truss_indeterminacy(j, m, r):
    """2D pin-jointed truss: j joints, m members, r support reactions.
    Static indeterminacy = (m + r) - 2*j
    """
    n = m + r - 2 * j
    if n < 0:
        return ("unstable / deficient", n)
    if n == 0:
        return ("statically determinate / perfect", 0)
    return ("statically indeterminate / redundant", n)

# Warren truss: 7 joints, 11 members, 3 pin-and-roller reactions
print(truss_indeterminacy(7, 11, 3))   # ('statically determinate / perfect', 0)
# Same truss with one extra diagonal: 12 members
print(truss_indeterminacy(7, 12, 3))   # ('statically indeterminate / redundant', 1)

def beam_indeterminacy(supports):
    """Planar beam: each support contributes reactions.
    'roller' -> 1, 'pin' -> 2, 'fixed' -> 3. Three equilibrium equations.
    """
    r = sum({'roller': 1, 'pin': 2, 'fixed': 3}[s] for s, _ in supports)
    return r - 3

# Simply supported: pin + roller = 3 reactions -> determinate
print(beam_indeterminacy([('pin', 0), ('roller', 4)]))   # 0
# Propped cantilever: fixed + roller = 4 reactions -> indeterminate degree 1
print(beam_indeterminacy([('fixed', 0), ('roller', 4)]))  # 1
# Fixed-fixed beam: 6 reactions -> indeterminate degree 3
print(beam_indeterminacy([('fixed', 0), ('fixed', 4)]))   # 3`,
            },
            diagram: {
              kind: "compare",
              title: "Static vs kinematic indeterminacy",
              caption:
                "Two faces of the same problem - one attacks unknowns by compatibility, the other by equilibrium.",
              left: {
                heading: "Static indeterminacy",
                items: [
                  "Counts unknowns beyond equilibrium",
                  "Truss: (m + r) - 2j",
                  "Frame: (3m + r) - 3j",
                  "Solved by the force (flexibility) method",
                  "Choose redundants, write compatibility",
                ],
              },
              right: {
                heading: "Kinematic indeterminacy",
                items: [
                  "Counts independent joint displacements",
                  "Truss: 2j - r",
                  "Frame: 3j - r (axial ignored)",
                  "Solved by the stiffness (displacement) method",
                  "Take displacements as unknowns, write equilibrium",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Both counts of a propped cantilever are 1",
              body: "A propped cantilever has four reactions and three equilibrium equations, so the static indeterminacy is 1. Its only unknown joint displacement (ignoring axial shortening) is the rotation at the propped end, so the kinematic indeterminacy is also 1. Stating both counts earns the first two marks of any propped-cantilever question.",
            },
            keyTerms: [
              { term: "Static indeterminacy", definition: "The number of unknowns (reactions or internal forces) that the equations of static equilibrium alone cannot solve." },
              { term: "Kinematic indeterminacy", definition: "The number of independent joint displacements needed to describe the deformed shape of a structure." },
              { term: "Degree of freedom", definition: "An independent coordinate (displacement or rotation) that defines the position of a joint in the deformed structure." },
            ],
            examQuestions: [
              {
                q: "Define static and kinematic indeterminacy. Derive the expressions (m + r) - 2j and 2j - r for a pin-jointed truss, and compute both counts for a truss with 8 joints, 13 members and 4 reactions.",
                marks: 7,
                outline: [
                  "Define static indeterminacy: unknowns beyond equilibrium; kinematic indeterminacy: independent joint displacements.",
                  "For a truss each joint gives 2 equations, total 2j; each member and reaction is one unknown, total m + r; static indeterminacy = (m + r) - 2j.",
                  "Each free joint has 2 displacement components; each reaction constrains one; kinematic indeterminacy = 2j - r.",
                  "Plug in: (13 + 4) - 2*8 = 17 - 16 = 1, so statically indeterminate to degree 1.",
                  "Kinematic: 2*8 - 4 = 12, so 12 independent joint displacements.",
                  "State the duality: force method attacks the static count, stiffness method attacks the kinematic count.",
                  "Conclude that the truss is redundant by one member or one reaction; remove one to make it determinate.",
                ],
              },
              {
                q: "State the static indeterminacy of a propped cantilever.",
                marks: 2,
              },
              {
                q: "Differentiate between static and kinematic indeterminacy in one sentence each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Degree of freedom",
            body: [
              "The degree of freedom is the number of independent coordinates needed to describe the deformed configuration of a structure. For a planar free joint of a truss it is two: a horizontal and a vertical displacement. For a planar rigid-jointed frame joint it is three: two translations and one rotation, because the rigid connection preserves the angle between members and so a joint rotation enters the kinematics. For a three-dimensional free joint it is three translations, and for a three-dimensional rigid joint it is six: three translations and three rotations. Each support removes a fixed subset of these: a pin removes two translations but allows rotation; a roller removes one translation; a fixed support removes all three planar degrees of freedom.",
              "Counting degrees of freedom is the first step of the stiffness (displacement) method, because each free degree becomes an unknown in the slope-deflection or moment distribution equations. For a planar rigid-jointed frame ignoring axial deformation, the kinematic indeterminacy equals 3j minus r, where j is the number of joints and r is the number of restraints imposed by the supports. If axial deformation of members is also ignored, the inextensibility constraint removes one more degree per member, further trimming the count. A simply supported beam of one span has one unknown rotation at each end, so its kinematic indeterminacy is two; a fixed-fixed beam has zero, because the supports suppress every motion.",
              "Worked example. A portal frame has two columns and one beam, three rigid joints (two at the eaves and one at the apex of a gable, or for a simple rectangular portal, two at the beam-column joints). The columns are fixed at the base, so each base suppresses three degrees; the two beam-column joints are free, each with three degrees (two translations and a rotation). Ignoring axial deformation of the beam ties the two joints' horizontal translations together, leaving one sway degree plus two rotations, so the kinematic indeterminacy is three. The slope-deflection method writes one equilibrium equation per unknown rotation and one shear equation for the sway - exactly the three equations needed to solve the three unknowns.",
            ],
            bullets: [
              "Planar truss joint: 2 DOF (horizontal and vertical translation).",
              "Planar rigid-jointed joint: 3 DOF (two translations + one rotation).",
              "Support restraints: pin removes 2 translations, roller removes 1, fixed removes all 3 planar DOF.",
              "Kinematic indeterminacy of a planar frame = 3j - r (ignoring axial deformation).",
              "Ignoring axial shortening of a member ties the translations of its end joints, reducing the count by one per member.",
            ],
            table: {
              caption: "Degrees of freedom of common joints and supports (planar).",
              headers: ["Item", "Translations", "Rotations", "Total DOF", "Restraint"],
              rows: [
                ["Free truss joint", "2", "0", "2", "none"],
                ["Free frame joint", "2", "1", "3", "none"],
                ["Pin support", "0", "1", "1", "removes 2 translations"],
                ["Roller support", "1", "1", "2", "removes 1 translation"],
                ["Fixed support", "0", "0", "0", "removes all 3"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Hierarchy of degrees of freedom",
              caption:
                "Top: a fully free 3D body. Bottom: a fixed support removes everything. Each tier adds a constraint.",
              tiers: [
                { label: "3D rigid body: 6 DOF", note: "3 translations + 3 rotations" },
                { label: "3D pin joint: 3 DOF", note: "3 translations only" },
                { label: "Planar rigid joint: 3 DOF", note: "2 translations + 1 rotation" },
                { label: "Planar pin joint: 2 DOF", note: "2 translations only" },
                { label: "Fixed support: 0 DOF", note: "all motions restrained" },
              ],
            },
            callout: {
              type: "tip",
              title: "Count DOF before writing slope-deflection",
              body: "Before writing any slope-deflection equation, list the joints and their DOF on the sketch: each unknown rotation gets one moment-equilibrium equation, and one sway degree gets one shear equation. Miscounting DOF is the most common cause of unsolvable equation sets in the exam.",
            },
            keyTerms: [
              { term: "Degree of freedom (DOF)", definition: "An independent coordinate, translation or rotation, that defines the position of a joint in the deformed structure." },
              { term: "Kinematic indeterminacy", definition: "The total count of independent joint displacements (degrees of freedom) of a structure; it is the number of unknowns in the stiffness method." },
              { term: "Restraint", definition: "A geometric constraint imposed by a support or an inextensible member that suppresses one or more degrees of freedom." },
            ],
            examQuestions: [
              {
                q: "Define the degree of freedom of a joint. Compute the kinematic indeterminacy of a planar rigid-jointed portal frame with fixed column bases and two free beam-column joints, ignoring axial deformation of the beam, and list the unknown displacements.",
                marks: 7,
                outline: [
                  "Define DOF as an independent coordinate describing the deformed configuration.",
                  "A planar rigid joint has 3 DOF: 2 translations and 1 rotation.",
                  "Two free joints give 6 DOF; two fixed supports suppress 6 (3 each), leaving 6 - but the count formula 3j - r with j = 4 joints total and r = 6 restraints gives 12 - 6 = 6.",
                  "Apply inextensibility of the beam: tie the two horizontal translations of the beam-column joints -> one sway unknown.",
                  "Also ignore axial deformation of columns: vertical translations of the two joints are zero.",
                  "Final unknowns: one sway displacement and two rotations at the beam-column joints, total kinematic indeterminacy = 3.",
                  "Conclude that slope-deflection writes two moment equations and one shear equation to solve these three unknowns.",
                ],
              },
              {
                q: "How many degrees of freedom does a planar pin-jointed free joint have?",
                marks: 2,
              },
              {
                q: "State the restraints imposed by a pin, a roller and a fixed support in planar analysis.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Force and stiffness methods of analysis",
            body: [
              "Every statically indeterminate structure can be solved by one of two complementary strategies. The force (flexibility) method chooses the static indeterminacy as its guide: it releases redundants - one reaction or internal force per degree - to obtain a determinate base structure, computes the displacements at the released points due to the loads and due to each redundant, and writes compatibility equations that demand the released displacement match the original geometry. Solving these equations yields the redundants, after which the rest follow by equilibrium. The method suits structures with low static indeterminacy and is the basis of Castigliano's theorem and the three-moment equation.",
              "The stiffness (displacement) method chooses the kinematic indeterminacy as its guide: it restrains every joint against displacement, computes the fixed-end forces due to the loads, then releases the joints one displacement at a time and writes equilibrium equations at each free joint in terms of stiffness coefficients. Solving these equations yields the joint displacements, after which member end forces follow from the stiffness relation. Slope-deflection, moment distribution and the direct stiffness method of finite-element software are all variants of the stiffness approach. The method suits structures with high static indeterminacy, computer implementation and frame analysis where many redundants make the force method laborious.",
              "Worked choice. A two-span continuous beam of equal spans under uniform load has static indeterminacy 1 (the central support moment is the redundant) and kinematic indeterminacy 1 (the rotation at the central support). The force method would release the central support, compute the deflection at mid-span due to the load and due to a unit redundant reaction, and write the compatibility equation that the released deflection be zero - a single equation in one unknown. The stiffness (slope-deflection) method would compute the fixed-end moments at the central joint, then write the moment equilibrium equation at that joint in terms of the unknown rotation. Both yield the central support moment as wL^2 over 8, but the stiffness route is shorter and is the one used in software.",
            ],
            bullets: [
              "Force method attacks static indeterminacy: release redundants, write compatibility equations.",
              "Stiffness method attacks kinematic indeterminacy: restrain joints, write equilibrium equations in displacements.",
              "Force method suits low indeterminacy; Castigliano's theorem and the three-moment equation are examples.",
              "Stiffness method suits high indeterminacy and computer implementation; slope-deflection and moment distribution are examples.",
              "For a two-span continuous beam, both methods solve one equation; the stiffness route is shorter.",
            ],
            table: {
              caption: "Comparison of force and stiffness methods.",
              headers: ["Aspect", "Force method", "Stiffness method"],
              rows: [
                ["Unknowns", "redundant forces", "joint displacements"],
                ["Equations", "compatibility", "equilibrium at joints"],
                ["Indeterminacy", "static", "kinematic"],
                ["Matrix", "flexibility", "stiffness"],
                ["Best for", "low indeterminacy", "high indeterminacy, software"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choose the method by the indeterminacy count",
              caption:
                "A two-branch fork: low static indeterminacy favours the force method, high or computer-implemented favours the stiffness method.",
              start: "Indeterminate structure with n redundants and k joint displacements",
              branches: [
                { label: "n is small, k is large", outcome: "Force (flexibility) method: release n redundants, write n compatibility equations", good: true },
                { label: "k is small, n is large", outcome: "Stiffness (displacement) method: solve k equilibrium equations for the displacements", good: true },
                { label: "Special geometry (arches, cables)", outcome: "Mixed method: combine force releases with stiffness equations", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Pick the method that minimises unknowns",
              body: "For an exam question, count static and kinematic indeterminacy first; whichever count is smaller is the cheaper method. A continuous beam with one internal support has both counts equal to one - either route works, but slope-deflection is faster because the equilibrium equation is shorter than the compatibility deflection integral.",
            },
            keyTerms: [
              { term: "Force method", definition: "An analysis strategy that releases redundants to obtain a determinate base structure and writes compatibility equations to recover them." },
              { term: "Stiffness method", definition: "An analysis strategy that takes joint displacements as unknowns and writes equilibrium equations in terms of member stiffnesses." },
              { term: "Redundant", definition: "A reaction or internal force released in the force method to make the structure statically determinate; it is recovered from a compatibility equation." },
            ],
            examQuestions: [
              {
                q: "Explain the force and stiffness methods of structural analysis. State the unknowns, the equations used, and the indeterminacy count each attacks. Illustrate with a two-span continuous beam under uniform load.",
                marks: 7,
                outline: [
                  "Force method: unknowns are redundant forces; equations are compatibility (deflection at released points); attacks static indeterminacy.",
                  "Stiffness method: unknowns are joint displacements; equations are equilibrium at joints; attacks kinematic indeterminacy.",
                  "Two-span beam: static indeterminacy 1 (central support moment) and kinematic indeterminacy 1 (central rotation).",
                  "Force method route: release central support, compute deflections due to load and due to a unit redundant, set sum to zero.",
                  "Stiffness route: compute fixed-end moments, write moment equilibrium at central joint in terms of the unknown rotation.",
                  "Both yield central support moment = wL^2/8.",
                  "Conclude that the stiffness method is preferred in software because it generalises to many degrees of freedom.",
                ],
              },
              {
                q: "Name two analysis techniques that belong to the stiffness family.",
                marks: 2,
              },
              {
                q: "State one situation where the force method is preferred over the stiffness method.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ====================== UNIT II - ANALYSIS OF TRUSSES ======================
    {
      number: 2,
      roman: "II",
      title: "Analysis of Trusses",
      summary:
        "Perfect, deficient and redundant frames; the method of joints; the method of sections; and the tension coefficient method for space and complex trusses.",
      chapter: {
        number: "02",
        title: "Analysis of Trusses",
        intro:
          "Unit II analyses pin-jointed trusses, the workhorse of roofs and bridges. Sections walk through the classification of frames into perfect, deficient and redundant, the method of joints for member-by-member axial forces, the method of sections for the direct force in any chosen member, and the tension coefficient method for space trusses and complex geometries where joint-by-joint is impractical.",
        inOneBreath:
          "A truss is a pin-jointed triangulated assembly whose members carry only axial force; a perfect frame satisfies m + r = 2j and is stable, a deficient frame has m + r less than 2j and is a mechanism, a redundant frame has m + r greater than 2j and is statically indeterminate; the method of joints isolates each joint and solves two equilibrium equations for two unknown member forces, starting from a joint with at most two unknowns; the method of sections cuts through three members and writes three equilibrium equations for one or all of the cut forces; and the tension coefficient method writes the three equilibrium equations per joint in terms of the tension coefficient t = force divided by length, suiting space trusses and large planar trusses.",
        sections: [
          {
            number: "2.1",
            title: "Perfect, imperfect and redundant frames",
            body: [
              "A frame is a pin-jointed assembly of straight members. By the count m + r versus 2j a frame is perfect when m + r equals 2j (statically determinate and stable), deficient when m + r is less than 2j (a mechanism, unstable), and redundant when m + r exceeds 2j (statically indeterminate). A perfect frame is the ideal truss: it is both statically determinate and geometrically stable, so its member forces follow from equilibrium alone and the assembly holds its geometry. The triangle is the smallest perfect frame: three members, three joints and three reactions give m + r = 6 and 2j = 6, so the count is zero and the triangle is the base unit from which all larger trusses are assembled by adding two members per new joint.",
              "Deficient and redundant frames are imperfect in opposite ways. A deficient frame has fewer members than the count demands, leaving a free mechanism; a square panel of four bars without a diagonal is deficient because m + r equals 4 + 3 = 7 against 2j = 8, so the count is minus one and the square can fold. A redundant frame has extra members beyond the count; adding one diagonal to that square makes m + r = 9 against 2j = 8, count one, so the frame is now over-braced and one member is redundant - its force cannot be found from equilibrium alone but requires a compatibility equation. Redundant members do not destabilise; they share load and provide safety against a single-member failure.",
              "Worked identification. Consider a planar pin-jointed frame with 6 joints, 9 members and 3 support reactions. The count gives m + r minus 2j equals 9 + 3 minus 12 equals 0, so the frame is perfect and statically determinate. Verify geometrically: the truss is built as two triangles sharing a side, and the supports are a pin and a roller giving three non-parallel reactions, so external stability holds. Now add one diagonal in one panel: m rises to 10, the count is one, and the truss becomes redundant by one member - the extra diagonal shares load with the existing members and requires a compatibility equation. Removing one member from the original perfect frame would drop the count to minus one, making it deficient and a mechanism - the truss would collapse.",
            ],
            bullets: [
              "Perfect frame: m + r = 2j, statically determinate and stable; the triangle is the smallest.",
              "Deficient frame: m + r less than 2j, a mechanism that collapses; a square panel without a diagonal is deficient.",
              "Redundant frame: m + r greater than 2j, statically indeterminate; one or more members share load.",
              "Assemble perfect trusses by adding two members per new joint to a starter triangle.",
              "Redundant members do not destabilise - they provide load sharing and fail-safe redundancy.",
            ],
            table: {
              caption: "Frame classification by the count m + r vs 2j.",
              headers: ["Count", "Class", "Stability", "Solvability"],
              rows: [
                ["m + r < 2j", "deficient", "unstable (mechanism)", "cannot be solved"],
                ["m + r = 2j", "perfect", "stable (if triangle-based)", "solved by equilibrium"],
                ["m + r > 2j", "redundant", "stable", "needs compatibility equations"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Three outcomes of the frame count",
              caption:
                "One count, three destinies: deficient collapses, perfect is solvable, redundant needs extra equations.",
              start: "Compute m + r - 2j for the frame",
              branches: [
                { label: "negative count", outcome: "deficient frame - a mechanism, unstable, add members", good: false },
                { label: "zero count", outcome: "perfect frame - statically determinate and stable, solve by equilibrium", good: true },
                { label: "positive count", outcome: "redundant frame - statically indeterminate, write compatibility equations", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Redundant is not unstable",
              body: "A redundant frame is over-braced, not unstable. Its extra members carry load that equilibrium alone cannot apportion, so a compatibility equation (often a unit-load deflection match) is required. Calling a redundant frame unstable is a common error that costs easy marks.",
            },
            keyTerms: [
              { term: "Perfect frame", definition: "A pin-jointed frame satisfying m + r = 2j that is statically determinate and stable; the triangle is the smallest perfect frame." },
              { term: "Deficient frame", definition: "A pin-jointed frame with m + r less than 2j; it is a mechanism and unstable because it lacks enough members to hold its geometry." },
              { term: "Redundant frame", definition: "A pin-jointed frame with m + r greater than 2j; it is statically indeterminate and its extra members require compatibility equations for solution." },
            ],
            examQuestions: [
              {
                q: "Define perfect, deficient and redundant frames. Derive the condition m + r = 2j and classify a frame with 6 joints, 10 members and 3 reactions, explaining what extra analysis step the redundant member demands.",
                marks: 7,
                outline: [
                  "Define perfect (m + r = 2j, determinate), deficient (< 2j, mechanism), redundant (> 2j, indeterminate).",
                  "Derive m + r = 2j: 2j joint equilibrium equations balance m + r unknowns.",
                  "Plug in: 10 + 3 - 2*6 = 13 - 12 = 1, so redundant by one member.",
                  "The frame is stable (redundant members do not destabilise) but statically indeterminate to degree 1.",
                  "Name the extra step: write one compatibility equation, typically by the unit-load method, to apportion load to the redundant member.",
                  "Contrast with the perfect frame (count 0, solved by equilibrium alone) and the deficient frame (count negative, mechanism).",
                  "Conclude that the frame requires the force method for full solution.",
                ],
              },
              {
                q: "What is the smallest perfect frame and why?",
                marks: 2,
              },
              {
                q: "A frame has 4 joints and 5 members; classify it assuming 3 reactions.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Method of joints",
            body: [
              "The method of joints solves a perfect pin-jointed truss joint by joint. At each joint the members meeting there and any external load or reaction are isolated as a concurrent force system, and the two equations of equilibrium - sum of horizontal forces equals zero and sum of vertical forces equals zero - are written. Because the equations are two, only joints with at most two unknown member forces can be solved; the procedure therefore starts at a support where the reactions are known and where the geometry places at most two unknown member forces on the joint, and marches along the truss one solvable joint at a time. Member forces are reported as tension (pulling away from the joint) or compression (pushing in).",
              "The sign convention is mechanical but strict. Assume every unknown member force is tensile (pulling away from the joint); write the equilibrium equations with that sign; if the algebra yields a negative value, the member is in compression. Zero-force members are spotted by inspection before any calculation: at a joint with three members where two are collinear, the third carries zero force (unless an external load acts there); at a joint with two non-collinear members and no external load, both carry zero force. Identifying zero-force members first trims the calculation by a third or more, and examiners reward the inspection explicitly.",
              "Worked example. A simply supported Warren truss of 7 joints and 11 members carries a single vertical load P at the central bottom-chord joint. The reactions are P over 2 at each support. Start at the left support joint, which has two unknowns: the bottom chord (horizontal) and the first diagonal. Sum of vertical forces gives the diagonal's vertical component as P over 2 (upward on the joint, so the diagonal is in compression); sum of horizontal forces gives the bottom chord as that component times the cotangent of the diagonal angle (tension). Move to the next joint, which now has two unknowns (the next diagonal and the next bottom chord), and repeat. After five joints the whole truss is solved, with diagonals in compression, top chord in compression and bottom chord in tension - the standard pattern for a simply supported truss under gravity load.",
            ],
            bullets: [
              "Method of joints: isolate each joint, write sum F_h = 0 and sum F_v = 0 for the concurrent forces.",
              "Start at a joint with at most two unknowns - usually a support where the reactions are known.",
              "Assume every unknown is tensile; a negative result means compression.",
              "Zero-force members: at a three-member joint with two collinear, the third is zero; at a two-member non-collinear joint with no load, both are zero.",
              "Report member forces as T (tension, pulling away) or C (compression, pushing in).",
            ],
            table: {
              caption: "Sign convention and zero-force member rules.",
              headers: ["Situation", "Assumption", "Result rule"],
              rows: [
                ["Unknown member force", "tension (pulls from joint)", "negative -> compression"],
                ["3 members, 2 collinear, no load at joint", "third is zero", "no calculation needed"],
                ["2 members non-collinear, no load at joint", "both zero", "no calculation needed"],
                ["2 members collinear with a load along them", "third perpendicular is zero", "load shared by collinear pair"],
                ["Symmetric truss, symmetric load", "half solves by mirror", "save time"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Method of joints workflow",
              caption:
                "Identify zero-force members, find reactions, then walk joint by joint with at most two unknowns each.",
              steps: [
                { label: "Spot zero-force members", note: "rules of three and two" },
                { label: "Compute support reactions", note: "overall equilibrium" },
                { label: "Pick a start joint (2 unknowns)", note: "usually a support" },
                { label: "Write sum F_h = 0, sum F_v = 0", note: "assume tension" },
                { label: "Move to next solvable joint", note: "until every member is known" },
                { label: "Tabulate T / C forces", note: "negative means compression" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always state the zero-force members first",
              body: "Before writing any joint equation, list the zero-force members by name with the rule that identifies them. This earns two or three easy marks, demonstrates inspection skill, and trims the working by a third - examiners mark the inspection explicitly even when the rest of the calculation is correct.",
            },
            keyTerms: [
              { term: "Method of joints", definition: "A truss analysis technique that isolates each joint and solves the two equilibrium equations of the concurrent force system for the unknown member forces." },
              { term: "Zero-force member", definition: "A truss member that carries no load under the given loading, identified by the rules of three (two collinear) and two (non-collinear, no load)." },
              { term: "Tension vs compression", definition: "Tension pulls away from the joint (positive by convention); compression pushes into the joint (negative result when tension is assumed)." },
            ],
            examQuestions: [
              {
                q: "Explain the method of joints for truss analysis. State the sign convention, the rules for identifying zero-force members, and solve a simply supported Warren truss of 7 joints carrying a central point load P for the force in the first diagonal and the bottom chord.",
                marks: 7,
                outline: [
                  "Method: isolate each joint, write sum F_h = 0 and sum F_v = 0 for the concurrent forces.",
                  "Sign convention: assume every unknown is tensile; a negative result means compression.",
                  "Zero-force rules: at a 3-member joint with 2 collinear, the third is zero; at a 2-member non-collinear joint with no load, both are zero.",
                  "Compute reactions: P/2 at each support.",
                  "Start at left support: 2 unknowns (bottom chord and first diagonal).",
                  "Sum F_v = 0 gives the diagonal's vertical component = P/2; diagonal in compression; sum F_h = 0 gives bottom chord = (P/2) cot(theta), in tension.",
                  "Tabulate T and C, and note that the symmetric right half mirrors the left.",
                ],
              },
              {
                q: "State the two rules for identifying zero-force members in a truss.",
                marks: 2,
              },
              {
                q: "Why must the method of joints start at a joint with at most two unknowns?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Method of sections",
            body: [
              "The method of sections solves for the force in any chosen member of a perfect truss without solving the whole truss. A cut is passed through the member of interest and two others (so the cut isolates a free body with three unknown member forces), and the three equations of equilibrium for the resulting free body - sum of horizontal forces, sum of vertical forces, and sum of moments about a chosen point - are written. Because the equations are three, only cuts that cross at most three unknown members can be solved directly; a clever choice of moment centre (the intersection of the other two cut members) lets one equation yield the target member force directly, with the other two unknowns passing through the moment centre and contributing zero moment.",
              "The method shines when the target member lies deep in the truss, where the method of joints would require solving many joints first. It also handles parallel-chord trusses neatly: to find a diagonal force, sum the vertical forces on the free body and the diagonal's vertical component emerges; to find a chord force, take moments about the opposite joint of the panel and the chord force times its lever arm equals the moment of the external forces. In both cases the calculation reduces to one equation in one unknown. The free body can be taken on either side of the cut; choose the side with fewer external loads to keep arithmetic light.",
              "Worked example. A Pratt roof truss of 8 panels, simply supported, carries vertical loads of 10 kN at each lower-chord joint. Find the force in the third diagonal from the left support. Compute the reactions first: total load 70 kN, so each reaction is 35 kN. Pass a section through the third diagonal, the adjacent top chord, and the adjacent bottom chord, isolating the left free body with the left reaction and the first two lower-chord loads (10 kN each). Take moments about the top chord joint (the intersection of the other two cut members) so only the third diagonal and the external forces contribute. The moment of the diagonal about that point equals the moment of 35 kN reaction minus 10 kN at panel 1 minus 10 kN at panel 2 about the same point; solve for the diagonal force, which emerges as 12.5 kN compression. One equation, one unknown - the method's whole point.",
            ],
            bullets: [
              "Method of sections: cut through at most three unknown members, write three equilibrium equations on the free body.",
              "Choose the moment centre as the intersection of the two non-target members to solve the target in one equation.",
              "For parallel-chord trusses, sum vertical forces for a diagonal, sum moments about a chord joint for a chord force.",
              "Take the free body on the side with fewer external loads to keep arithmetic light.",
              "The method gives a single member's force without solving the whole truss - invaluable for deep members.",
            ],
            table: {
              caption: "Method of joints vs method of sections.",
              headers: ["Aspect", "Method of joints", "Method of sections"],
              rows: [
                ["Free body", "a single joint", "one side of a cut"],
                ["Equations per step", "2 (sum F_h, F_v)", "3 (sum F_h, F_v, M)"],
                ["Unknowns per step", "up to 2", "up to 3"],
                ["Best for", "every member force", "one specific member"],
                ["Reach", "must walk joint by joint", "cuts anywhere in one step"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Method of sections workflow",
              caption:
                "Cut, choose the moment centre, solve one equation for the target member in seconds.",
              steps: [
                { label: "Find support reactions", note: "overall equilibrium" },
                { label: "Cut through target + 2 others", note: "at most 3 unknowns" },
                { label: "Pick free body with fewer loads", note: "left or right of cut" },
                { label: "Choose moment centre = intersection of other 2", note: "isolates the target" },
                { label: "Sum moments about that point", note: "one equation, one unknown" },
                { label: "Report T or C and verify", note: "spot-check by sum F_v" },
              ],
            },
            callout: {
              type: "tip",
              title: "The moment centre is the trick",
              body: "When the cut crosses three members, take moments about the intersection of the two you do NOT want. Their lines of action pass through that point, so they contribute zero moment, and the target member force falls out of a single moment equation. This is the single most useful trick in truss analysis.",
            },
            keyTerms: [
              { term: "Method of sections", definition: "A truss analysis technique that cuts through at most three unknown members and writes three equilibrium equations on the resulting free body, solving for the target member directly." },
              { term: "Moment centre trick", definition: "Choosing the intersection of two non-target cut members as the moment centre so that only the target member contributes to the moment equation." },
              { term: "Free body", definition: "The isolated portion of the truss on one side of a section cut, with external forces and cut member forces shown for equilibrium analysis." },
            ],
            examQuestions: [
              {
                q: "Explain the method of sections for truss analysis. State why the cut must cross at most three unknown members, and demonstrate the moment centre trick to find the force in a diagonal of a Pratt truss carrying equal panel point loads.",
                marks: 7,
                outline: [
                  "Method: pass a section through the target member and at most two others; write 3 equilibrium equations on the free body.",
                  "Three equations balance three unknowns - hence the cut limit.",
                  "Find reactions by overall equilibrium.",
                  "Cut through the target diagonal, the top chord and the bottom chord of the panel.",
                  "Take the free body on the side with fewer loads.",
                  "Choose moment centre = intersection of top and bottom chord (the two non-target members).",
                  "Sum moments about that point: only the diagonal and external forces contribute; solve one equation for the diagonal force, report T or C.",
                ],
              },
              {
                q: "When is the method of sections preferred over the method of joints?",
                marks: 2,
              },
              {
                q: "State why the cut in the method of sections must not cross more than three unknown members.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Tension coefficient method",
            body: [
              "The tension coefficient method is the joint-equilibrium technique suited to space trusses and to planar trusses where the geometry makes the method of joints laborious. Define the tension coefficient t of a member as its axial force divided by its length: t equals T over L. For each joint, the three equilibrium equations (two for a planar truss, three for a space truss) are written in terms of the tension coefficients of the members meeting there. The advantage is that the projection of a member force along an axis equals t times the projected length of the member along that axis, so the equilibrium equations become linear in the t values without any sines or cosines; once the t values are found, the actual force follows by multiplying by the member length.",
              "The procedure is systematic. For each joint, list the members meeting there with their coordinates and projected lengths; write the equilibrium equations summing t times each projected length plus any external load component equals zero. Solve the resulting linear system for the t values, then recover member forces as T equals t times L. A tensile t means the member is in tension; a compressive t means compression. The method is at its best for space trusses (where the geometry resists the sine-and-cosine bookkeeping of the method of joints) and for planar trusses with many non-orthogonal members; for a simple planar truss the method of joints is usually quicker.",
              "Worked example. A tripod of three equal legs of length L, each pinned at the ground at the corners of an equilateral triangle of side a, carries a vertical load P at the apex. By symmetry the tension coefficient t is the same in all three legs. Take vertical equilibrium at the apex: three times t times the vertical projection of one leg (which is the height h of the tripod) equals P, so t equals P over (3h). Each leg force is T equals t times L equals P L over (3h), and since h relates to L and a by h equals the square root of (L squared minus a squared over 3), the leg force is P L over (3 times that square root). The tripod is in compression; one equation, one unknown, by symmetry - the tension coefficient method's elegance on a space truss.",
            ],
            bullets: [
              "Tension coefficient t = T / L (force per unit length); projection of force on an axis = t times projected length.",
              "Each joint gives 2 equations (planar) or 3 (space) in terms of t values - linear, no sines or cosines.",
              "Recover force: T = t * L. Sign of t gives tension (positive) or compression (negative).",
              "Best for space trusses and planar trusses with many skew members; method of joints is simpler for orthogonal geometry.",
              "Exploit symmetry to share t values across members - one equation in one unknown.",
            ],
            table: {
              caption: "Tension coefficient method vs method of joints.",
              headers: ["Aspect", "Tension coefficient", "Method of joints"],
              rows: [
                ["Unknown", "t = T / L", "T directly"],
                ["Equations", "linear in t", "trigonometric"],
                ["Planar joints", "2 per joint", "2 per joint"],
                ["Space joints", "3 per joint", "3 per joint (messy)"],
                ["Best fit", "space trusses, skew geometry", "simple planar trusses"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Tension coefficient method, stage by stage",
              caption:
                "List coordinates, write linear equilibrium equations in t, solve, recover forces.",
              stages: [
                { label: "List joints, members, coordinates", note: "geometry" },
                { label: "Compute projected lengths of each member", note: "along x, y, z axes" },
                { label: "Write sum F_x, sum F_y, sum F_z per joint", note: "linear in t" },
                { label: "Solve the linear system for t values", note: "exploit symmetry" },
                { label: "Recover T = t * L", note: "sign of t gives T or C" },
              ],
            },
            callout: {
              type: "tip",
              title: "Symmetry collapses the system",
              body: "A symmetric truss under symmetric load has equal tension coefficients in symmetric members - three unknowns collapse to one. Always check symmetry before writing the equations: it can turn a 12-unknown space-truss problem into a one-equation solve, which is the method's signature advantage.",
            },
            keyTerms: [
              { term: "Tension coefficient", definition: "The axial force in a truss member divided by its length, t = T / L; the working unknown of the tension coefficient method." },
              { term: "Projected length", definition: "The projection of a member's length along a coordinate axis, used to write the equilibrium equations as t times projected length without sines or cosines." },
              { term: "Space truss", definition: "A three-dimensional pin-jointed truss whose members lie in different planes, where the tension coefficient method is most at home." },
            ],
            examQuestions: [
              {
                q: "Define the tension coefficient of a truss member. Set up the tension coefficient equations for a symmetric tripod of three equal legs carrying a vertical load P at the apex, and derive the force in each leg.",
                marks: 7,
                outline: [
                  "Define t = T / L, where T is the member force and L its length.",
                  "State the equilibrium rule: at each joint, sum of (t * projected length) plus external load component = 0.",
                  "Geometry: three legs of length L, ground corners on an equilateral triangle of side a, height h = sqrt(L^2 - a^2/3).",
                  "By symmetry all three t values are equal.",
                  "Vertical equilibrium at apex: 3 * t * h = P, so t = P / (3h).",
                  "Member force T = t * L = P * L / (3h) = P * L / (3 * sqrt(L^2 - a^2/3)).",
                  "Sign: t negative means compression (the legs push up to balance P); report each leg in compression with the computed magnitude.",
                ],
              },
              {
                q: "Why is the tension coefficient method preferred for space trusses?",
                marks: 2,
              },
              {
                q: "How is the member force recovered once its tension coefficient is found?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Worked truss examples and method comparison",
            body: [
              "Truss analysis questions in RGPV examinations follow a small number of standard patterns: a simply supported truss under symmetric panel-point loads, a cantilever truss under end load, and a truss with an overhang or a settlement. Each pattern has its shortcut. For a simply supported truss under symmetric panel loads, the reactions are equal and the left half solves the right half by mirror symmetry - solve two joints and copy the forces across. For a cantilever truss, start at the free end (no reactions needed) and walk joint by joint toward the support. For an overhang, compute the reactions with the overhang load included, then proceed as for a simply supported truss. Recognising the pattern saves minutes per question.",
              "The choice between method of joints and method of sections is dictated by the question. If asked for every member force, use the method of joints and tabulate results as you go. If asked for one or two specific members, especially chord forces near mid-span or diagonal forces in a particular panel, use the method of sections with the moment-centre trick. For a space truss or a truss with many skew members, switch to the tension coefficient method. In all cases, draw the truss to scale (or to a clean sketch), label every joint and member, mark zero-force members first, and write the free body of every joint or section you use.",
              "Worked comparison. A Pratt truss of 8 panels of 4 m each, 4 m deep, carries 10 kN at each lower-chord joint. The total load is 70 kN and each reaction is 35 kN. To find every member force, the method of joints starting at the left support solves two unknowns per joint and yields all 17 forces in about 12 equations. To find only the force in the central top-chord member, the method of sections cuts through that member and two diagonals; taking moments about the opposite bottom-chord joint gives one equation: 35 kN times 12 m minus 10 kN times each of 4, 8 m, summed, divided by the 4 m lever arm gives the chord force in one line. The tension coefficient method is not needed here because the truss is planar and orthogonal, but would be the right choice if the geometry were three-dimensional or heavily skewed.",
            ],
            bullets: [
              "Standard patterns: simply supported symmetric, cantilever from free end, overhang with reactions first.",
              "Symmetric truss under symmetric load: solve one half, copy by mirror - halves the work.",
              "Cantilever truss: start at the free end where there are no reactions, walk to the support.",
              "Every member force: method of joints with a tabulated result. One member: method of sections with the moment-centre trick.",
              "Draw to scale, label every joint, mark zero-force members first - the audit trail examiners reward.",
            ],
            table: {
              caption: "Truss analysis patterns and recommended methods.",
              headers: ["Pattern", "Reactions", "Start", "Best method"],
              rows: [
                ["Simply supported, symmetric load", "equal halves", "left support", "joints + mirror symmetry"],
                ["Simply supported, asymmetric load", "compute first", "support with fewer loads", "joints"],
                ["Cantilever truss", "not needed", "free end", "joints walking to support"],
                ["Overhang truss", "include overhang load", "support away from overhang", "joints"],
                ["Space or skew truss", "compute first", "any joint", "tension coefficient"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Pick the method by the question",
              caption:
                "Rows: question scope. Columns: truss geometry. Cells: recommended method.",
              axes: {
                x: "simple planar  ->  space or skew",
                y: "one member  ->  every member",
              },
              quadrants: [
                { label: "Sections + moment centre", note: "one member, planar truss" },
                { label: "Tension coefficient", note: "one member, space truss" },
                { label: "Method of joints", note: "every member, planar truss" },
                { label: "Tension coefficient + symmetry", note: "every member, space truss" },
              ],
            },
            callout: {
              type: "exam",
              title: "Mirror symmetry halves the work",
              body: "For a simply supported truss under symmetric loading, the two reactions are equal and the member forces in the right half mirror those in the left: same magnitude, same sign (compression stays compression). Solve two joints on the left, then write 'by symmetry' for the right half - examiners accept this and you save half the working.",
            },
            keyTerms: [
              { term: "Panel point load", definition: "A load applied at a truss joint, the standard loading for roof and bridge trusses, transferred to the joints via purlins or floor beams." },
              { term: "Cantilever truss", definition: "A truss fixed at one end and free at the other, analysed by the method of joints starting at the free end where there are no support reactions." },
              { term: "Mirror symmetry shortcut", definition: "The use of equal reactions and mirrored member forces in a symmetric truss under symmetric load to solve one half and copy results to the other." },
            ],
            examQuestions: [
              {
                q: "Compare the method of joints, the method of sections and the tension coefficient method for truss analysis. For a simply supported Pratt truss of 8 panels under equal panel loads, recommend a method for finding (a) every member force and (b) the central top-chord force, and justify.",
                marks: 7,
                outline: [
                  "Method of joints: 2 equations per joint, solves every member; preferred for (a).",
                  "Method of sections: 3 equations per cut, isolates a single member; preferred for (b).",
                  "Tension coefficient: linear in t, best for space or skew trusses; not needed here.",
                  "For (a): start at left support with 2 unknowns, walk joint by joint; mirror the right half by symmetry.",
                  "For (b): cut through the central top chord and two diagonals; take moments about the opposite bottom-chord joint.",
                  "The moment centre eliminates the diagonals; one equation yields the chord force = (sum of moments of external forces) / 4 m lever arm.",
                  "Conclude: sections for one member, joints for all members, tension coefficient only when geometry demands it.",
                ],
              },
              {
                q: "Why does the method of joints start at the free end for a cantilever truss?",
                marks: 2,
              },
              {
                q: "State two advantages of exploiting mirror symmetry in truss analysis.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =============== UNIT III - THREE-HINGED AND TWO-HINGED ARCHES ===============
    {
      number: 3,
      roman: "III",
      title: "Three-Hinged and Two-Hinged Arches",
      summary:
        "Arch types and components, the three-hinged arch with BM, SF and axial force under vertical load, the two-hinged arch and its indeterminacy, rib shortening, and temperature effects.",
      chapter: {
        number: "03",
        title: "Three-Hinged and Two-Hinged Arches",
        intro:
          "Unit III analyses arches, the curved structures that convert vertical load into horizontal thrust. Sections walk through arch types and components, the three-hinged arch (statically determinate) with its bending moment, shear and axial force under vertical loading, the two-hinged arch (statically indeterminate to degree one), the secondary effect of rib shortening, and the temperature stresses that arise in indeterminate arches.",
        inOneBreath:
          "An arch is a curved structure that carries vertical load by axial compression and a horizontal thrust at the abutments; a three-hinged arch has hinges at the two springings and at the crown, making it statically determinate (the crown hinge provides the extra equation that horizontal thrust times rise equals the simply supported moment at the crown); a two-hinged arch has hinges only at the springings, making it statically indeterminate to degree one, solved by Castigliano or the dummy-unit-load method; the bending moment at any section of an arch equals the simply supported BM at that section minus the horizontal thrust times the rise to that section, so the arch is leaner in moment than the corresponding beam; rib shortening introduces an additional axial shortening of the arch rib that reduces the thrust and adds bending; and temperature change induces horizontal thrust proportional to the temperature rise and the arch geometry.",
        sections: [
          {
            number: "3.1",
            title: "Types of arches",
            body: [
              "An arch is a curved structural member that carries vertical load mainly by axial compression and transfers it to the abutments as both vertical reactions and a horizontal thrust. Arches are classified by their support conditions, their shape, and their material. By supports: a three-hinged arch has hinges at the two springings and at the crown, making it statically determinate and immune to temperature and settlement stresses; a two-hinged arch has hinges only at the springings and is statically indeterminate to degree one, requiring a compatibility equation; a fixed arch has no hinges and is indeterminate to degree three, used in monolithic concrete; and a tied arch carries the thrust by an internal tie rod, removing the horizontal reaction on the abutments.",
              "By shape the common forms are the parabolic arch, whose rise y at any section follows y equals four h x times (L minus x) over L squared for a span L and rise h, used for uniformly distributed loads because the moment is zero at every section under UDL; the circular arch, used for bridges and historical masonry; the segmental arch, a shallow circular arc; and the elliptical arch. By material: masonry arches (stone, brick) work wholly in compression and were the dominant bridge form for two thousand years; steel arches are slender and may be two-hinged or fixed; reinforced concrete arches are often monolithic and fixed, cast in situ over falsework or launched as precast segments.",
              "The components of an arch are common across types. The springings or skewbacks are the supports at the lower ends; the crown is the highest point; the rise or versed sine is the vertical distance from springing line to crown; the span is the horizontal distance between springings; the rib is the curved member itself; the extrados is the upper (outer) curve and the intrados the lower (inner) curve; the abutment is the foundation that resists the horizontal thrust. A high rise-to-span ratio reduces the thrust but raises construction cost; a low ratio increases the thrust and demands massive abutments. The choice of h over L is the architect's first decision and fixes the structure's character.",
            ],
            bullets: [
              "By supports: three-hinged (determinate), two-hinged (indeterminate degree 1), fixed (degree 3), tied (tie rod carries thrust).",
              "By shape: parabolic, circular, segmental, elliptical; parabolic is moment-free under UDL.",
              "By material: masonry (compression only), steel (slender), reinforced concrete (often monolithic fixed).",
              "Components: springings, crown, rise h, span L, rib, extrados (outer), intrados (inner), abutment.",
              "Rise-to-span ratio fixes thrust: high ratio lowers thrust, low ratio demands massive abutments.",
            ],
            table: {
              caption: "Classification of arches by support condition.",
              headers: ["Type", "Hinges", "Indeterminacy", "Thermal / settlement stress"],
              rows: [
                ["Three-hinged", "2 springings + crown", "0 (determinate)", "none"],
                ["Two-hinged", "2 springings only", "1", "present"],
                ["Fixed", "none", "3", "present"],
                ["Tied", "2 + internal tie", "varies", "carried by tie rod"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of an arch",
              caption:
                "From the abutment up: springing, rib (intrados below, extrados above), crown. Top: support classification.",
              layers: [
                { label: "Support class: 3-hinged / 2-hinged / fixed / tied", note: "fixes determinacy" },
                { label: "Crown: highest point; hinge in 3-hinged arches", note: "extra equation" },
                { label: "Rib: extrados (outer) above intrados (inner)", note: "the curved member" },
                { label: "Rise h: crown above springing line", note: "sets thrust magnitude" },
                { label: "Springings (skewbacks) + abutments", note: "carry vertical + horizontal" },
              ],
            },
            callout: {
              type: "tip",
              title: "Parabolic arch is moment-free under UDL",
              body: "A parabolic arch of any rise carries a uniformly distributed load over its span with zero bending moment at every section - the load is carried entirely by axial compression. This is why long-span roof and bridge arches are parabolic: the shape matches the load's funicular, the loading that the cable would take under the same loads.",
            },
            keyTerms: [
              { term: "Three-hinged arch", definition: "An arch with hinges at both springings and at the crown, making it statically determinate and free of temperature and settlement stresses." },
              { term: "Horizontal thrust", definition: "The inward horizontal reaction exerted by the abutments on an arch to balance the outward push of the curved rib under vertical load." },
              { term: "Rise (versed sine)", definition: "The vertical distance from the springing line to the crown of an arch, denoted h; its ratio to the span fixes the thrust magnitude." },
            ],
            examQuestions: [
              {
                q: "Classify arches by their support conditions and by their shape. Describe the components of an arch, state the determinacy of each support type, and explain why a three-hinged arch is free of temperature stresses.",
                marks: 7,
                outline: [
                  "By supports: three-hinged (determinate), two-hinged (indeterminate degree 1), fixed (degree 3), tied (tie rod carries thrust).",
                  "By shape: parabolic, circular, segmental, elliptical; parabolic is moment-free under UDL.",
                  "Components: springings, crown, rise h, span L, rib, extrados, intrados, abutment.",
                  "Three-hinged is determinate because the crown hinge provides sum M_crown = 0 as a fourth equation.",
                  "Temperature and settlement stresses need a compatibility equation to develop; the crown hinge absorbs the deformation by rotation.",
                  "Two-hinged and fixed arches lack that hinge, so thermal expansion imposes thrust and bending.",
                  "Conclude: three-hinged arches are the choice when foundation settlement or temperature variation is severe.",
                ],
              },
              {
                q: "State the determinacy of a fixed arch.",
                marks: 2,
              },
              {
                q: "Name any three components of an arch with one-line roles.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Three-hinged arch: BM, SF and axial force",
            body: [
              "A three-hinged arch has hinges at the two springings A and B and at the crown C, making it statically determinate. The four reactions (vertical and horizontal at each springing) exceed the three planar equilibrium equations by one, but the crown hinge supplies the fourth equation: the bending moment at C is zero, which gives H times h equals the simply supported moment M_C^0 at the crown, where H is the horizontal thrust and h is the rise. Thus H equals M_C^0 over h. Once H is known, the bending moment at any section is M equals M^0 minus H times y, where M^0 is the simply supported moment at that section and y is the rise of the arch at that section; the arch is leaner in moment than the corresponding beam by H times y.",
              "The shear force and axial force at any section follow from resolving the simply supported shear V^0 and the horizontal thrust H along and perpendicular to the tangent of the arch at that section. If theta is the slope of the arch axis at the section, then the axial force N equals V^0 sin theta plus H cos theta (compression positive) and the shear force Q equals V^0 cos theta minus H sin theta. At the crown of a symmetric arch theta is zero, so N equals H (pure compression) and Q equals V^0 - the shear equals that of the corresponding beam. At the springings theta is steepest, so the axial force is largest and the shear smallest; arches are designed for axial compression and the cross-section is checked at the springings.",
              "Worked example. A three-hinged parabolic arch of span 20 m and rise 4 m carries a uniformly distributed load of 20 kN per m over the whole span. The simply supported moment at the crown is wL^2 over 8, which is 20 times 400 over 8 equals 1000 kN m. The horizontal thrust is H equals M_C^0 over h equals 1000 over 4 equals 250 kN. At any section the rise of a parabolic arch is y equals 4h x (L minus x) over L squared; substituting gives y at quarter span as 3 m. The bending moment at quarter span equals M^0 minus H y equals (wL^2 over 8 minus w x squared over 2 for the half) minus H y; for a parabola under UDL, M^0 minus H y is identically zero, confirming that the parabolic arch is moment-free under UDL - the whole load goes into axial compression.",
            ],
            bullets: [
              "Crown equation: M_C = 0 gives H * h = M_C^0 (simply supported moment at crown), so H = M_C^0 / h.",
              "Bending moment at any section: M = M^0 - H * y, where y is the rise at that section.",
              "Axial force: N = V^0 sin(theta) + H cos(theta). Shear: Q = V^0 cos(theta) - H sin(theta).",
              "At the crown of a symmetric arch theta = 0, so N = H (pure compression) and Q = V^0.",
              "Parabolic arch under UDL: M = 0 everywhere; the load is carried wholly by axial compression.",
            ],
            table: {
              caption: "BM, SF and axial force formulas for a three-hinged arch.",
              headers: ["Quantity", "Formula", "At crown (theta = 0)"],
              rows: [
                ["Horizontal thrust H", "M_C^0 / h", "M_C^0 / h"],
                ["Bending moment M", "M^0 - H * y", "M_C^0 - H * h = 0"],
                ["Shear force Q", "V^0 cos(theta) - H sin(theta)", "V^0"],
                ["Axial force N", "V^0 sin(theta) + H cos(theta)", "H (pure compression)"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Three-hinged arch analysis pipeline",
              caption:
                "Find reactions, find H from the crown equation, then M = M^0 - H*y at any section.",
              stages: [
                { label: "Compute vertical reactions", note: "overall equilibrium" },
                { label: "Compute simply supported moment at crown M_C^0", note: "for the given loading" },
                { label: "Crown equation M_C = 0: H = M_C^0 / h", note: "fourth equation" },
                { label: "Section at x: rise y, slope theta", note: "geometry of the arch" },
                { label: "M = M^0 - H*y; N = V^0 sin(theta) + H cos(theta); Q = V^0 cos(theta) - H sin(theta)", note: "tabulate" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always write H = M_C^0 / h first",
              body: "The crown equation H times h equals the simply supported crown moment is the key to every three-hinged arch problem. Write it before any section calculation, compute H numerically, and state it on the sketch. Examiners allocate three or four marks to H alone; without it, every later formula is unsolvable.",
            },
            keyTerms: [
              { term: "Crown hinge equation", definition: "The condition that the bending moment at the crown hinge of a three-hinged arch is zero, supplying the fourth equilibrium equation that makes the arch statically determinate." },
              { term: "Simply supported moment M^0", definition: "The bending moment at a section of the corresponding simply supported beam of the same span under the same loading, used as the reference for the arch moment M = M^0 - H*y." },
              { term: "Axial force N", definition: "The component of the resultant along the tangent to the arch axis at a section, dominated by the horizontal thrust H and the simply supported shear resolved along the tangent." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for the horizontal thrust H in a three-hinged arch of span L and rise h. For a parabolic arch of span 20 m and rise 4 m carrying a UDL of 20 kN/m over the whole span, compute H and the bending moment at quarter span, and verify the moment-free property.",
                marks: 7,
                outline: [
                  "Four reactions, three equilibrium equations; the crown hinge supplies sum M_C = 0.",
                  "Crown equation: H * h = M_C^0, the simply supported moment at the crown.",
                  "For UDL, M_C^0 = wL^2 / 8 = 20 * 400 / 8 = 1000 kN m.",
                  "So H = 1000 / 4 = 250 kN.",
                  "Rise of parabola at quarter span: y = 4h x (L - x) / L^2 = 4*4*5*15/400 = 3 m.",
                  "BM at quarter span: M = M^0 - H*y where M^0 at quarter span is (wLx/2 - wx^2/2) - some work, but for a parabola under UDL the result is exactly zero.",
                  "Conclude: the parabolic arch is moment-free under UDL, the load carried wholly by axial compression.",
                ],
              },
              {
                q: "State the crown hinge equation for a three-hinged arch.",
                marks: 2,
              },
              {
                q: "Write the expressions for axial force and shear force at a section of a three-hinged arch with slope theta.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Two-hinged arches",
            body: [
              "A two-hinged arch has hinges only at the two springings, so its four reactions exceed the three equilibrium equations by one and it is statically indeterminate to degree one. The extra equation comes from the compatibility of deformations: the horizontal displacement of one springing relative to the other must equal zero, which gives a single equation in the unknown horizontal thrust H. Solving by the dummy-unit-load (Castigliano) method yields H equals the integral over the rib of M^0 y over E I ds divided by the integral of y squared over E I ds, where M^0 is the simply supported moment at each section, y the rise there, ds an element of arc length, E the modulus and I the second moment of area. For a parabolic arch of constant I this integral has a closed form.",
              "Once H is found, the bending moment at any section is M equals M^0 minus H times y, the same formula as the three-hinged arch; the difference is how H is obtained - by equilibrium in the three-hinged, by compatibility in the two-hinged. Because the two-hinged arch lacks the crown hinge, it carries a non-zero moment at the crown and is stiffer than its three-hinged counterpart, an advantage in service but a disadvantage under temperature change or support settlement: those effects now generate additional thrust and bending that the structure must resist. Two-hinged arches are common in steel bridges, where the hinges simplify the bearings while retaining the arch action.",
              "Worked example. A two-hinged parabolic arch of span 30 m and rise 6 m of constant flexural rigidity EI carries a single point load P at the crown. The compatibility equation gives H equals the integral of M^0 y ds over the integral of y squared ds. For a parabola y equals 4h x (L minus x) over L squared, and the point load at the crown gives M^0 equal to P L over 4 at the crown and zero at the springings with linear variation. Evaluating the integrals (or quoting the standard result for a parabolic arch of constant I) gives H equals 15 P over 32, about 0.47 P. The bending moment at the crown is then M_C equals P L over 4 minus H times h equals 7.5 P minus 2.81 P equals 4.69 P kN m, substantially less than the 7.5 P of the corresponding simply supported beam - the arch action saves about 37 per cent of the moment.",
            ],
            bullets: [
              "Two-hinged arch: 4 reactions, 3 equilibrium equations, indeterminate to degree 1.",
              "Compatibility: relative horizontal displacement of springings = 0, solved by the dummy-unit-load method.",
              "H = integral of M^0 y / (EI) ds divided by integral of y^2 / (EI) ds.",
              "Once H is found, M = M^0 - H*y at any section - same formula as three-hinged, different H.",
              "Two-hinged arches are stiffer than three-hinged but develop thermal and settlement stresses.",
            ],
            table: {
              caption: "Three-hinged vs two-hinged arch.",
              headers: ["Aspect", "Three-hinged", "Two-hinged"],
              rows: [
                ["Hinges", "2 springings + crown", "2 springings only"],
                ["Indeterminacy", "0 (determinate)", "1"],
                ["H from", "crown equation", "compatibility integral"],
                ["Crown moment", "zero", "non-zero"],
                ["Thermal stress", "none", "present"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Three-hinged vs two-hinged arch",
              caption:
                "Same shape, different determinacy: the crown hinge is the only structural difference.",
              left: {
                heading: "Three-hinged arch",
                items: [
                  "Hinges: 2 springings + crown",
                  "Statically determinate",
                  "H from sum M_C = 0",
                  "Crown moment = 0",
                  "No thermal / settlement stress",
                ],
              },
              right: {
                heading: "Two-hinged arch",
                items: [
                  "Hinges: 2 springings only",
                  "Indeterminate to degree 1",
                  "H from compatibility integral",
                  "Crown moment non-zero",
                  "Thermal / settlement stress present",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Quote the standard integral",
              body: "For a parabolic two-hinged arch of constant EI under a uniformly distributed load, the horizontal thrust is H = wL^2 / (8h) - the same as a three-hinged arch. Memorising this result lets you answer the UDL case in one line; the integral derivation is needed only for non-standard loadings or variable cross-sections.",
            },
            keyTerms: [
              { term: "Two-hinged arch", definition: "An arch with hinges only at the two springings, making it statically indeterminate to degree one and solvable by a compatibility equation." },
              { term: "Compatibility equation", definition: "The condition that the relative horizontal displacement of the two springings of a two-hinged arch is zero, supplying the extra equation needed to solve for H." },
              { term: "Dummy-unit-load method", definition: "A technique (equivalent to Castigliano's theorem) for computing the displacement at a point by applying a unit force there and integrating the product of the real and unit-load internal forces over the structure." },
            ],
            examQuestions: [
              {
                q: "Explain why a two-hinged arch is statically indeterminate to degree one. Derive the compatibility equation for the horizontal thrust H and compare the two-hinged arch with the three-hinged arch in terms of determinacy, crown moment and thermal behaviour.",
                marks: 7,
                outline: [
                  "Four reactions (V_A, H_A, V_B, H_B) exceed three equilibrium equations by one.",
                  "Compatibility: relative horizontal displacement of A and B = 0.",
                  "Apply a unit horizontal dummy load at B, write the integral form.",
                  "H = integral of M^0 y / (EI) ds divided by integral of y^2 / (EI) ds.",
                  "Three-hinged: H from sum M_C = 0; two-hinged: H from the compatibility integral.",
                  "Three-hinged crown moment = 0; two-hinged crown moment is non-zero.",
                  "Three-hinged is thermal-free; two-hinged develops thermal thrust and bending.",
                ],
              },
              {
                q: "State the formula for the bending moment at any section of a two-hinged arch once H is known.",
                marks: 2,
              },
              {
                q: "Why does a two-hinged arch develop temperature stresses while a three-hinged arch does not?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Rib shortening",
            body: [
              "Rib shortening is the elastic axial shortening of the arch rib under its own compressive force, an effect that the simple two-hinged analysis ignores by assuming the rib length is fixed. In reality the horizontal thrust H compresses the rib by an amount that, for a parabolic arch of constant cross-section, is approximately H L over A E (with corrections for the curvature), and this shortening reduces the span of the arch by a small horizontal displacement. The compatibility equation must therefore include an extra term: the relative displacement of the springings is the bending-deformation integral plus the axial-deformation term H L over A E, and setting the sum to zero gives a slightly smaller H than the simple analysis predicts.",
              "The effect is small but non-negligible. For a typical steel two-hinged arch with a rise-to-span ratio of 1 to 4, rib shortening reduces H by about 5 to 10 per cent and adds a corresponding bending moment at the crown (since the smaller H leaves more of the simply supported moment unbalanced). In concrete arches with high compressive stress and low modulus, the effect can reach 15 per cent and is always included in the design. The correction is made by extending the compatibility integral: H equals the integral of M^0 y over E I ds divided by the integral of y squared over E I ds plus L over A E, where the extra denominator term L over A E captures the rib's axial flexibility.",
              "Worked example. A two-hinged parabolic arch of span 40 m and rise 8 m has flexural rigidity E I equal to 2 times 10 to the power 5 kN m squared and axial rigidity A E equal to 4 times 10 to the power 6 kN. Under a UDL of 10 kN per m, the simple analysis (ignoring rib shortening) gives H equals w L squared over 8 h equals 10 times 1600 over 64 equals 250 kN. Including rib shortening, the denominator gains L over A E equals 40 over (4 times 10 to the power 6) equals 10 to the minus 5 (units consistent), and the corrected H is approximately 243 kN, a reduction of about 3 per cent. The crown moment is then M_C equals P L over 4 minus H h equals minus H h plus the corresponding simply supported moment; the reduced H leaves a small crown moment where the simple analysis gave zero - the rib shortening penalty.",
            ],
            bullets: [
              "Rib shortening: elastic axial compression of the arch rib under H, ignored by simple analysis.",
              "Extra compatibility term: H L / (A E) added to the denominator of the H equation.",
              "Effect: H is reduced, leaving a small crown moment where the simple analysis gave zero.",
              "Magnitude: 5-10 per cent in steel arches, up to 15 per cent in concrete arches under high stress.",
              "Always included in concrete arch design and in steel arches of low rise-to-span ratio.",
            ],
            table: {
              caption: "Effect of rib shortening on arch behaviour.",
              headers: ["Aspect", "Ignoring rib shortening", "Including rib shortening"],
              rows: [
                ["Compatibility denominator", "integral y^2/EI ds", "integral y^2/EI ds + L/AE"],
                ["Horizontal thrust H", "larger", "smaller by 3-15 per cent"],
                ["Crown moment", "zero (parabola, UDL)", "small positive"],
                ["Design implication", "underestimates bending", "realistic for concrete"],
                ["Typical magnitude", "-", "5-15 per cent"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Rib shortening correction flow",
              caption:
                "Add the axial term to the compatibility equation, recompute H, then the crown moment emerges.",
              steps: [
                { label: "Compute H without rib shortening", note: "integral of y^2/EI only" },
                { label: "Add the axial flexibility term L / (A E)", note: "denominator grows" },
                { label: "Solve for the corrected H", note: "smaller by a few per cent" },
                { label: "Compute M = M^0 - H * y", note: "crown moment is now non-zero" },
                { label: "Design rib for the reduced H + added moment", note: "essential in concrete" },
              ],
            },
            callout: {
              type: "warning",
              title: "Concrete arches must include rib shortening",
              body: "Concrete has a low modulus and high creep, so rib shortening can shift 10-15 per cent of the thrust into bending. If your two-hinged concrete arch design omits this term, the crown will be under-designed for moment and may crack under service load. Always run the analysis twice - with and without rib shortening - for concrete.",
            },
            keyTerms: [
              { term: "Rib shortening", definition: "The elastic axial shortening of an arch rib under its compressive thrust, which reduces the horizontal thrust H and introduces a small bending moment at the crown." },
              { term: "Axial flexibility L / (AE)", definition: "The extra denominator term added to the two-hinged arch compatibility equation to account for rib shortening, where A is the rib's cross-section area and E the elastic modulus." },
              { term: "Crown moment from rib shortening", definition: "The small non-zero bending moment at the crown of a parabolic two-hinged arch under UDL that arises when the reduced H no longer cancels the simply supported crown moment." },
            ],
            examQuestions: [
              {
                q: "Explain the phenomenon of rib shortening in a two-hinged arch. Modify the compatibility equation to include it, and state how the correction changes the horizontal thrust H and the crown moment, with typical magnitudes for steel and concrete arches.",
                marks: 7,
                outline: [
                  "Define rib shortening as the elastic axial compression of the rib under H.",
                  "The simple compatibility equation has denominator integral of y^2/(EI) ds.",
                  "Add the axial flexibility term L/(AE) to the denominator.",
                  "The corrected H = numerator / (integral y^2/EI ds + L/AE), which is smaller.",
                  "Crown moment M_C = M^0_C - H*h is now non-zero (positive for downward load).",
                  "Magnitudes: 5-10 per cent in steel arches, up to 15 per cent in concrete arches.",
                  "Conclude that concrete arches always need the correction; steel arches include it when the rise-to-span ratio is low.",
                ],
              },
              {
                q: "Write the modified compatibility equation for H including rib shortening.",
                marks: 2,
              },
              {
                q: "Why does rib shortening matter more in concrete arches than in steel arches?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Temperature effects and secondary stresses",
            body: [
              "A temperature change in a two-hinged or fixed arch induces a horizontal thrust because the rib wants to expand or contract but the springings hold the span fixed. For a uniform temperature rise of T degrees, the free thermal expansion of the rib would lengthen the span by alpha T L, where alpha is the coefficient of thermal expansion; setting the actual displacement to zero gives the thermal thrust H_T equals alpha T L over (L over A E plus the integral of y squared over E I ds). For a parabolic arch of constant cross-section the integral evaluates to 8 h squared L over 15 E I, and H_T equals alpha T L divided by (L over A E plus 8 h squared L over 15 E I), a closed-form result worth memorising.",
              "The thermal thrust produces a bending moment M equals minus H_T times y at every section (there is no M^0 term because no external load acts). The crown moment is minus H_T times h, the springing moment is zero (the hinges are there), and the maximum moment occurs at the crown. In a three-hinged arch, the crown hinge rotates to absorb the thermal expansion, so H_T is zero and the structure is stress-free under uniform temperature change - the central advantage of the three-hinged form for bridges in extreme climates. The fixed arch, with no hinges, develops thermal thrusts and bending moments at the springings as well as at the crown, the worst case of the three forms.",
              "Secondary stresses also arise from support settlement, rib shortening, shrinkage in concrete, and the elastic deformation of the arch itself. Settlement of one support relative to the other induces a thrust similar to a temperature change; concrete shrinkage acts like a uniform temperature drop of about 20 degrees over months; and rib shortening (section 3.4) is a permanent secondary effect. The combined effect is computed by superposition: each secondary action contributes its own thrust H_i and moment M_i equals minus H_i times y, and the design thrust and moment are the sum of the primary and all secondary contributions. The three-hinged arch is the only form immune to all secondary effects, which is why it is preferred where abutments are flexible or temperature variation is severe.",
            ],
            bullets: [
              "Temperature rise T: free expansion alpha T L, restrained by the supports, induces thermal thrust H_T.",
              "H_T = alpha T L / (L/(AE) + integral y^2/EI ds); for a parabola of constant I the integral is 8 h^2 L / (15 E I).",
              "Thermal moment: M = -H_T * y; maximum (negative) at the crown, zero at the springings.",
              "Three-hinged arch: crown hinge absorbs the expansion, so H_T = 0 and no thermal stress.",
              "Secondary stresses also arise from support settlement, shrinkage, and rib shortening - all combined by superposition.",
            ],
            table: {
              caption: "Temperature and secondary stress in arches.",
              headers: ["Effect", "Three-hinged", "Two-hinged", "Fixed"],
              rows: [
                ["Uniform temperature", "no stress", "thrust + crown moment", "thrust + crown/springing moment"],
                ["Support settlement", "no stress", "thrust + moment", "thrust + moment"],
                ["Concrete shrinkage", "no stress", "treat as temp drop", "treat as temp drop"],
                ["Rib shortening", "no effect", "thrust reduced 3-15%", "thrust reduced"],
                ["Total secondary", "zero", "moderate", "largest"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Temperature and secondary stress analysis",
              caption:
                "Compute each secondary thrust, superpose the moments, and add to the primary.",
              steps: [
                { label: "Identify secondary action: temperature / settlement / shrinkage / rib shortening", note: "list each" },
                { label: "Compute the unrestrained deformation", note: "alpha T L for temperature" },
                { label: "Set actual displacement to zero, solve for H_secondary", note: "compatibility" },
                { label: "Moment from each: M = -H_secondary * y", note: "crown gets -H_secondary * h" },
                { label: "Superpose: M_total = M_primary + sum M_secondary", note: "design thrust and moment" },
              ],
            },
            callout: {
              type: "exam",
              title: "Three-hinged arch is thermal-free",
              body: "A uniform temperature change in a three-hinged arch simply rotates the crown hinge and lengthens the ribs slightly - no thrust, no moment. This is the single most important distinction from the two-hinged arch in the exam: state it explicitly whenever temperature is mentioned, and earn two or three easy marks.",
            },
            keyTerms: [
              { term: "Thermal thrust H_T", definition: "The horizontal thrust induced in an indeterminate arch by a uniform temperature change, equal to alpha T L divided by the sum of the bending and axial flexibilities." },
              { term: "Coefficient of thermal expansion alpha", definition: "The strain per unit temperature rise of the arch material, typically 12 times 10 to the minus 6 per degree for steel and concrete." },
              { term: "Secondary stress", definition: "A stress arising from non-load actions such as temperature, support settlement, shrinkage or rib shortening, computed separately and superposed on the primary stress." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for the horizontal thrust induced by a uniform temperature rise T in a two-hinged parabolic arch of span L, rise h, constant EI and axial rigidity AE. Compare with a three-hinged arch and explain the difference.",
                marks: 7,
                outline: [
                  "Free thermal expansion of the rib would lengthen the span by alpha T L.",
                  "The supports restrain this, so the actual relative horizontal displacement is zero.",
                  "Compatibility: alpha T L + H_T times (axial flexibility + bending flexibility) = 0.",
                  "Solve: H_T = -alpha T L / (L/(AE) + integral y^2/EI ds).",
                  "For a parabola of constant I, integral y^2/EI ds = 8 h^2 L / (15 E I).",
                  "Moment from H_T: M = -H_T * y, maximum at the crown, zero at springings.",
                  "Three-hinged arch: crown hinge rotates to absorb the expansion, so H_T = 0 - no thermal stress.",
                ],
              },
              {
                q: "State the formula for the thermal thrust in a two-hinged arch.",
                marks: 2,
              },
              {
                q: "List three sources of secondary stress in arches besides temperature.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ============ UNIT IV - CABLE AND SUSPENSION BRIDGES ============
    {
      number: 4,
      roman: "IV",
      title: "Cable and Suspension Bridges",
      summary:
        "Cables under UDL and central point loads, suspension bridges with three-hinged stiffening girders, two-hinged stiffening girders in brief, and the comparison of cable and arch action.",
      chapter: {
        number: "04",
        title: "Cable and Suspension Bridges",
        intro:
          "Unit IV analyses flexible cables and suspension bridges, the structural family that carries tension only and spans the longest distances in civil engineering. Sections walk through cables under uniformly distributed load (the parabolic funicular), cables under a central point load (the triangular funicular), the suspension bridge with a three-hinged stiffening girder (the classical analysis), the two-hinged stiffening girder in brief, and the comparison of cable and arch action.",
        inOneBreath:
          "A cable is a perfectly flexible member that carries load only in tension and adopts the funicular shape of the loading; under a uniformly distributed load the cable takes a parabola y = w x^2 / (2H) with horizontal tension H equal to w L^2 / (8 h) for span L and sag h; under a single central point load the cable forms two straight segments meeting at the load, with tension T = H / cos(theta) in each half; a suspension bridge has main cables draped between two towers and anchored at the ends, with hangers transferring the deck load to the cables, and a stiffening girder that distributes concentrated loads over a length of cable; the three-hinged stiffening girder (hinges at the towers and mid-span) makes the system statically determinate and yields H = M_0 / h where M_0 is the simply supported moment at mid-span; the two-hinged stiffening girder (hinges only at the towers) is indeterminate by one degree and develops bending moments from temperature and live-load positions; and cable and arch are duals - the cable carries the same load as the arch of identical funicular shape, but in tension instead of compression.",
        sections: [
          {
            number: "4.1",
            title: "Cables under uniformly distributed load",
            body: [
              "A cable is a perfectly flexible structural member that carries load only in axial tension and adopts the shape of the funicular polygon of the loading - the shape a hanging chain takes under gravity. Under a uniformly distributed load of w per unit horizontal length (the load on a suspension bridge deck transferred through the hangers), the cable takes a parabolic shape. Setting the origin at the lowest point (the crown) and x measured horizontally, the equation of the cable is y equals w x squared over (2 H), where H is the horizontal component of the cable tension, constant throughout because no horizontal load acts. The sag h at the supports (x equals L over 2) is h equals w L squared over (8 H), so H equals w L squared over (8 h).",
              "The tension at any point of the cable is T equals H times the square root of (1 plus (dy/dx) squared), where dy/dx equals w x over H is the slope. At the crown (x equals zero) the slope is zero and the tension equals H, the minimum; at the supports the slope is maximum and the tension is maximum, equal to H times the square root of (1 plus (4 h over L) squared) for a parabolic cable. The cable length is approximately L times (1 plus 8 h squared over 3 L squared) for small sags, a useful approximation for material take-off. The reactions at the anchorages have a vertical component V equals w L over 2 and a horizontal component H, so the resultant reaction equals the maximum tension.",
              "Worked example. A suspension bridge main cable spans 200 m between the towers with a sag of 20 m at the supports and carries a uniformly distributed load of 20 kN per m (deck self-weight plus dead load). The horizontal tension is H equals w L squared over (8 h) equals 20 times 40000 over (8 times 20) equals 5000 kN. The maximum cable tension at the supports is T_max equals H times the square root of (1 plus (4 h over L) squared) equals 5000 times the square root of (1 plus 0.04) equals 5000 times 1.0199 equals 5099 kN. The cable length is approximately 200 times (1 plus 8 times 400 over (3 times 40000)) equals 200 times 1.0267 equals 205.3 m. These three numbers - H, T_max and the cable length - drive the cable cross-section design, the anchorage design and the material order respectively.",
            ],
            bullets: [
              "Cable under UDL takes a parabola y = w x^2 / (2 H); H is constant along the cable.",
              "Sag h = w L^2 / (8 H), so H = w L^2 / (8 h) - the same formula as the arch thrust.",
              "Cable tension T = H * sqrt(1 + (dy/dx)^2); minimum at the crown (T = H), maximum at the supports.",
              "Maximum tension at supports: T_max = H * sqrt(1 + (4 h/L)^2).",
              "Cable length approx L * (1 + 8 h^2 / (3 L^2)) for small sag-to-span ratios.",
            ],
            table: {
              caption: "Key formulas for a parabolic cable under UDL.",
              headers: ["Quantity", "Formula", "At crown x = 0"],
              rows: [
                ["Cable shape", "y = w x^2 / (2 H)", "y = 0"],
                ["Horizontal tension H", "w L^2 / (8 h)", "constant"],
                ["Slope dy/dx", "w x / H", "0"],
                ["Tension T", "H * sqrt(1 + (dy/dx)^2)", "H (minimum)"],
                ["Max tension at supports", "H * sqrt(1 + (4 h/L)^2)", "-"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Cable under UDL analysis pipeline",
              caption:
                "Sag fixes H, slope fixes T, length follows from the small-sag approximation.",
              stages: [
                { label: "Compute horizontal tension H = w L^2 / (8 h)", note: "from sag and load" },
                { label: "Compute slope dy/dx = w x / H at any section", note: "linear in x" },
                { label: "Cable tension T = H * sqrt(1 + (dy/dx)^2)", note: "max at supports" },
                { label: "Maximum tension at supports T_max", note: "designs the cable section" },
                { label: "Cable length L * (1 + 8 h^2/(3 L^2))", note: "material order" },
              ],
            },
            callout: {
              type: "tip",
              title: "Cable and arch share the H formula",
              body: "The horizontal tension in a parabolic cable under UDL equals w L^2 over (8 h), exactly the formula for the horizontal thrust in a parabolic arch under the same load. The two structures are duals: the cable carries the load in tension, the arch in compression, with identical numerical H. Stating this in an exam answer earns the comparison mark.",
            },
            keyTerms: [
              { term: "Funicular shape", definition: "The shape a flexible cable adopts under a given loading, with the cable in pure tension at every point and no bending moment." },
              { term: "Horizontal tension H", definition: "The constant horizontal component of the tension in a cable carrying vertical load, equal to w L^2 over (8 h) for a parabolic cable under UDL." },
              { term: "Sag", definition: "The vertical distance from the chord joining the cable supports to the lowest point of the cable, denoted h; it sets the horizontal tension and the maximum cable force." },
            ],
            examQuestions: [
              {
                q: "Derive the equation of the parabola taken by a cable carrying a uniformly distributed load w per unit horizontal length. For a cable of span 100 m and sag 10 m carrying 10 kN/m, compute the horizontal tension, the maximum cable tension and the approximate cable length.",
                marks: 7,
                outline: [
                  "Cable is flexible, takes pure tension, no bending moment anywhere.",
                  "Set origin at crown; equilibrium of a cable element gives d^2y/dx^2 = w/H.",
                  "Integrate: dy/dx = w x / H, y = w x^2 / (2 H).",
                  "Sag at supports x = L/2: h = w (L/2)^2 / (2 H) = w L^2 / (8 H), so H = w L^2 / (8 h).",
                  "Plug in: H = 10 * 10000 / (8 * 10) = 1250 kN.",
                  "Max tension at supports: T_max = H * sqrt(1 + (4 h/L)^2) = 1250 * sqrt(1 + 0.16) = 1250 * 1.077 = 1346 kN.",
                  "Cable length approx L * (1 + 8 h^2/(3 L^2)) = 100 * (1 + 8*100/30000) = 100 * 1.0267 = 102.67 m.",
                ],
              },
              {
                q: "State the formula for the horizontal tension in a parabolic cable under UDL.",
                marks: 2,
              },
              {
                q: "Where is the cable tension maximum in a parabolic cable and why?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Cable with a central point load",
            body: [
              "A cable carrying a single concentrated load P at its mid-span takes a triangular shape: two straight segments from each support to the load point, meeting at the load with a kink. The cable is in pure tension in each segment, and the tension is constant along each segment because no distributed load acts between the supports and the load. Horizontal equilibrium of the load point gives H times (tangent of theta_left plus tangent of theta_right) equals P, where theta_left and theta_right are the angles the two segments make with the horizontal; for a symmetric cable (equal support heights and the load at mid-span) the two angles are equal, so 2 H tangent theta equals P, giving H equals P over (2 tangent theta) equals P L over (4 h).",
              "The tension in each segment is T equals H over cos theta, where theta is the segment's angle with the horizontal. For a symmetric cable with sag h and span L, cos theta equals L over the square root of (L squared plus 4 h squared), and T equals (P L over 4 h) times the square root of (L squared plus 4 h squared) over L equals P times the square root of (L squared plus 4 h squared) over (4 h). The tension is the same in both segments by symmetry and is independent of the cable material - only the load, span and sag matter. The support reactions are equal, each with a vertical component V equals P over 2 and a horizontal component H, so the resultant reaction equals the segment tension T.",
              "Worked example. A cable of span 50 m and sag 5 m carries a central point load of 100 kN. The horizontal tension is H equals P L over (4 h) equals 100 times 50 over (4 times 5) equals 250 kN. The segment angle satisfies tangent theta equals 2 h over L equals 10 over 50 equals 0.2, so theta equals 11.3 degrees. The segment tension is T equals H over cos theta equals 250 over 0.9806 equals 254.9 kN. The support reactions each equal T (by symmetry and equilibrium), with a vertical component of 50 kN and a horizontal component of 250 kN. If a second point load is added off-centre, the cable takes a polygonal shape with three segments and the two unknowns become the sags at the two load points; an extra equation comes from the geometry of the cable length or from the support condition.",
            ],
            bullets: [
              "Central point load: cable takes a triangular shape of two straight segments meeting at the load.",
              "Symmetric case: 2 H tan(theta) = P, so H = P L / (4 h).",
              "Segment tension T = H / cos(theta) = P * sqrt(L^2 + 4 h^2) / (4 h).",
              "Tension is constant along each segment (no distributed load between load and support).",
              "Two off-centre loads need an extra geometric equation; the cable becomes a three-segment polygon.",
            ],
            table: {
              caption: "Formulas for a symmetric cable with a central point load.",
              headers: ["Quantity", "Formula", "Value for P=100 kN, L=50 m, h=5 m"],
              rows: [
                ["Horizontal tension H", "P L / (4 h)", "250 kN"],
                ["Segment angle theta", "arctan(2 h / L)", "11.3 deg"],
                ["Segment tension T", "H / cos(theta)", "254.9 kN"],
                ["Vertical reaction per support", "P / 2", "50 kN"],
                ["Cable length (2 segments)", "2 * sqrt((L/2)^2 + h^2)", "50.99 m"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Cable shape by load type",
              caption:
                "Two quadrants: distributed load versus point load. The shape changes from parabola to triangle.",
              axes: {
                x: "single point load  ->  distributed load",
                y: "symmetric  ->  asymmetric",
              },
              quadrants: [
                { label: "Symmetric point load: two-segment V", note: "H = P L/(4 h)" },
                { label: "Asymmetric point load: V with unequal halves", note: "two unknown sags" },
                { label: "Symmetric UDL: parabola", note: "H = w L^2/(8 h)" },
                { label: "Asymmetric UDL: skewed parabola", note: "crown offset from mid-span" },
              ],
            },
            callout: {
              type: "exam",
              title: "Tension is the same on both sides",
              body: "In a symmetric cable under a central point load, the tension is identical in both segments - a fact many students miss by computing each side separately and getting different numbers from rounding. State the symmetry explicitly, compute one side, and write 'by symmetry the other segment carries the same tension' to earn the full-method mark.",
            },
            keyTerms: [
              { term: "Central point load cable", definition: "A cable carrying a single concentrated load at mid-span, taking a triangular shape of two straight tension members meeting at the load." },
              { term: "Segment tension T", definition: "The constant axial tension in each straight segment of a cable carrying only end loads, equal to H divided by the cosine of the segment angle." },
              { term: "Triangular funicular", definition: "The V-shaped cable form adopted under a single point load, the discrete analogue of the parabolic funicular under a distributed load." },
            ],
            examQuestions: [
              {
                q: "A symmetric cable of span 50 m and sag 5 m carries a central point load of 100 kN. Derive the expressions for the horizontal tension H and the segment tension T, compute both, and verify by checking vertical equilibrium at the load.",
                marks: 7,
                outline: [
                  "Cable is two straight segments meeting at the load; tension constant per segment.",
                  "Symmetry: 2 H tan(theta) = P, with tan(theta) = 2 h / L.",
                  "So H = P L / (4 h) = 100 * 50 / (4 * 5) = 250 kN.",
                  "Segment tension T = H / cos(theta), with cos(theta) = (L/2)/sqrt((L/2)^2 + h^2) = 25/sqrt(650) = 0.9806.",
                  "T = 250 / 0.9806 = 254.9 kN.",
                  "Vertical equilibrium at load: 2 T sin(theta) = 2 * 254.9 * 0.1961 = 100 kN - matches P.",
                  "Conclude: H = 250 kN, T = 254.9 kN, and each support reaction equals T.",
                ],
              },
              {
                q: "State the formula for the horizontal tension in a symmetric cable carrying a central point load.",
                marks: 2,
              },
              {
                q: "How does the cable shape change when the single point load is moved off-centre?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Suspension bridge with a three-hinged stiffening girder",
            body: [
              "A suspension bridge combines a main cable draped between two towers, vertical hangers connecting the cable to the deck, and a stiffening girder that distributes concentrated deck loads over a length of the cable so that no single hanger carries the full load. Without a stiffening girder, a single truck on the deck would pull the cable into a local kink, concentrating stress and damaging the hangers. The stiffening girder absorbs the local bending moment and transmits the load to the cable as an additional uniformly distributed load over the affected span. With hinges at the two towers and at mid-span, the girder is statically determinate, and the analysis follows the same H equals M_0 over h rule as the three-hinged arch.",
              "Under a uniformly distributed dead load covering the whole span, the cable takes its parabolic funicular shape, the girder carries no bending moment, and the cable's horizontal tension is H equals w L squared over (8 h). Under a concentrated live load P placed at a distance x from the tower, the stiffening girder distributes the load to the cable, and the additional horizontal tension is H equals the simply supported moment M_0 at the load position divided by h, where M_0 equals P x (L minus x) over L (the moment in a simply supported beam at the load position). The total cable tension is the dead-load H plus the live-load H, and the girder moment at any section is the simply supported moment minus H y, just as in the three-hinged arch.",
              "Worked example. A three-hinged stiffening girder suspension bridge of span 200 m and sag 20 m carries a dead load of 20 kN per m over the whole span and a live load of 500 kN at 50 m from the left tower. The dead-load horizontal tension is H_D equals w L squared over (8 h) equals 20 times 40000 over 160 equals 5000 kN. The simply supported moment at the live load is M_0 equals P x (L minus x) over L equals 500 times 50 times 150 over 200 equals 18750 kN m. The live-load horizontal tension is H_L equals M_0 over h equals 18750 over 20 equals 937.5 kN. The total cable tension is H equals 5937.5 kN, and the maximum cable force at the tower (combining dead and live) is found by resolving H with the vertical reaction at the tower. The girder moment at any section follows M equals M^0 minus H y as before.",
            ],
            bullets: [
              "Components: main cable, towers, hangers, stiffening girder, anchorages.",
              "Three-hinged girder (tower + mid-span hinges): statically determinate, follows H = M_0 / h.",
              "Dead load over full span: cable parabola, H_D = w L^2 / (8 h), girder moment zero.",
              "Concentrated live load at x: additional H_L = M_0(x) / h, with M_0 = P x (L - x) / L.",
              "Stiffening girder distributes concentrated loads over cable length, protecting hangers from local kinks.",
            ],
            table: {
              caption: "Suspension bridge with a three-hinged stiffening girder.",
              headers: ["Loading", "Cable shape", "Horizontal tension", "Girder moment"],
              rows: [
                ["UDL dead load", "parabola", "w L^2 / (8 h)", "zero"],
                ["Concentrated live load at x", "local perturbation", "M_0(x) / h", "M^0 - H y"],
                ["Combined", "parabola + perturbation", "H_D + H_L", "M^0 - (H_D + H_L) y"],
                ["Temperature rise", "cable lengthens", "no extra H (3-hinged)", "no extra moment"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Suspension bridge anatomy",
              caption:
                "From the deck up: girder, hangers, main cable, towers; anchorages hold the cable ends.",
              layers: [
                { label: "Towers: vertical supports over which the cable drapes", note: "carry cable to anchorage height" },
                { label: "Main cable: parabolic funicular between towers", note: "carries the tension H" },
                { label: "Hangers: vertical tension members cable-to-girder", note: "transfer deck load to cable" },
                { label: "Stiffening girder: three-hinged (towers + mid-span)", note: "distributes concentrated loads" },
                { label: "Deck + anchorages: hold the cable ends against H", note: "massive concrete blocks" },
              ],
            },
            callout: {
              type: "exam",
              title: "Three-hinged girder mirrors three-hinged arch",
              body: "The horizontal tension in a three-hinged stiffening girder suspension bridge follows the same rule H = M_0 / h as a three-hinged arch: the mid-span hinge provides sum M = 0 as the extra equation. Stating this analogy in the answer earns the comparison mark and lets you reuse the arch formulas directly.",
            },
            keyTerms: [
              { term: "Stiffening girder", definition: "A continuous or hinged beam along the deck of a suspension bridge that distributes concentrated live loads over a length of cable, preventing local kinks in the cable." },
              { term: "Three-hinged girder suspension bridge", definition: "A suspension bridge whose stiffening girder has hinges at the two towers and at mid-span, making the system statically determinate and solvable by H = M_0 / h." },
              { term: "Hanger", definition: "A vertical tension member connecting the main cable to the stiffening girder, transferring deck load to the cable at regular intervals." },
            ],
            examQuestions: [
              {
                q: "Describe the components of a suspension bridge with a three-hinged stiffening girder. For a span of 200 m and sag 20 m carrying a UDL of 20 kN/m over the whole span and a point load of 500 kN at 50 m from a tower, compute the dead-load and live-load horizontal tensions and the total cable tension.",
                marks: 7,
                outline: [
                  "Components: main cable, towers, hangers, stiffening girder, anchorages.",
                  "Three hinges (two towers + mid-span) make the girder statically determinate.",
                  "Dead load over full span: cable is parabolic, H_D = w L^2 / (8 h) = 20*40000/160 = 5000 kN.",
                  "Live load at x: M_0(x) = P x (L - x)/L = 500*50*150/200 = 18750 kN m.",
                  "Live-load tension: H_L = M_0 / h = 18750/20 = 937.5 kN.",
                  "Total cable tension: H = H_D + H_L = 5937.5 kN.",
                  "State that the girder moment at any section is M^0 - H y, just like the three-hinged arch.",
                ],
              },
              {
                q: "State the role of the stiffening girder in a suspension bridge.",
                marks: 2,
              },
              {
                q: "Why is the three-hinged stiffening girder statically determinate?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Two-hinged stiffening girder (brief)",
            body: [
              "A two-hinged stiffening girder has hinges only at the two towers and is continuous over the mid-span, making it statically indeterminate to degree one. The extra equation comes from the continuity of the girder slope at mid-span: the rotation of the left half equals the rotation of the right half, which (combined with the cable deformation) gives a single equation in the unknown horizontal tension. Two-hinged girders are stiffer than three-hinged girders and distribute concentrated loads more smoothly over the cable, but they develop bending moments under temperature change and live-load positions that the three-hinged form avoids.",
              "The analysis follows the force method. Release the mid-span to make a determinate base structure (a simply supported girder between towers with the cable providing a series of elastic supports); compute the rotations at mid-span due to the live load and due to a unit redundant moment; set the sum to zero for slope continuity. The equation is algebraic but lengthy; in practice, designers use tabulated influence coefficients or finite-element software. The two-hinged girder is the modern form for long-span suspension bridges because the absence of a mid-span hinge simplifies construction and improves ride quality, accepting the indeterminacy as the price of stiffness.",
              "Worked comparison. For the same span of 200 m and sag of 20 m under a 500 kN point load at 50 m from the tower, the three-hinged girder gives H_L equals 937.5 kN (section 4.3). The two-hinged girder, solved by the unit-load method with the standard influence coefficient, gives H_L approximately 1010 kN, about 8 per cent higher, and a non-zero mid-span moment of roughly 750 kN m where the three-hinged girder had zero. The two-hinged girder thus carries about 8 per cent more cable tension but distributes the live load more smoothly, reducing the local hanger forces near the load. The trade is stiffer behaviour against live load against the development of secondary stresses from temperature and settlement.",
            ],
            bullets: [
              "Two-hinged girder: hinges at the towers only, continuous over mid-span, indeterminate degree 1.",
              "Extra equation: slope continuity at mid-span, solved by the force method.",
              "Stiffer than three-hinged; distributes concentrated loads more smoothly.",
              "Develops bending moments under temperature and live load that three-hinged avoids.",
              "Modern long-span suspension bridges use the two-hinged form for stiffness and ride quality.",
            ],
            table: {
              caption: "Three-hinged vs two-hinged stiffening girder.",
              headers: ["Aspect", "Three-hinged girder", "Two-hinged girder"],
              rows: [
                ["Hinges", "towers + mid-span", "towers only"],
                ["Indeterminacy", "0", "1"],
                ["H from", "M_0 / h (equilibrium)", "slope continuity (force method)"],
                ["Mid-span moment", "zero", "non-zero"],
                ["Thermal behaviour", "stress-free", "develops bending"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Three-hinged vs two-hinged stiffening girder",
              caption:
                "Same components, different determinacy - and a real difference in thermal behaviour.",
              left: {
                heading: "Three-hinged girder",
                items: [
                  "Hinges: 2 towers + mid-span",
                  "Statically determinate",
                  "H = M_0 / h",
                  "Mid-span moment = 0",
                  "Thermal stress-free",
                ],
              },
              right: {
                heading: "Two-hinged girder",
                items: [
                  "Hinges: 2 towers only",
                  "Indeterminate degree 1",
                  "H from slope continuity",
                  "Mid-span moment non-zero",
                  "Thermal stresses develop",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Two-hinged is the modern choice",
              body: "Although harder to analyse, the two-hinged stiffening girder is the modern form for long-span suspension bridges because the continuous girder improves ride quality and distributes concentrated loads more smoothly. Reserve the three-hinged form for short spans or for locations with severe temperature variation where thermal freedom matters more than stiffness.",
            },
            keyTerms: [
              { term: "Two-hinged stiffening girder", definition: "A suspension bridge girder with hinges only at the towers and continuous over mid-span, indeterminate to degree one and analysed by slope continuity at mid-span." },
              { term: "Slope continuity equation", definition: "The compatibility condition that the rotation of the left half of a two-hinged girder equals that of the right half at mid-span, supplying the extra equation for the horizontal tension." },
              { term: "Influence coefficient", definition: "A tabulated coefficient giving the response (tension, moment, deflection) of an indeterminate structure to a unit load at a given position, used to analyse the two-hinged girder without solving the full force method each time." },
            ],
            examQuestions: [
              {
                q: "Compare the three-hinged and two-hinged stiffening girders of a suspension bridge in terms of determinacy, the source of the extra equation, mid-span moment and thermal behaviour. State why modern long-span bridges prefer the two-hinged form.",
                marks: 7,
                outline: [
                  "Three-hinged: hinges at towers + mid-span; statically determinate.",
                  "Two-hinged: hinges at towers only; indeterminate to degree 1.",
                  "Three-hinged H = M_0 / h from sum M = 0 at the crown.",
                  "Two-hinged H from slope continuity at mid-span (force method).",
                  "Three-hinged mid-span moment = 0; two-hinged mid-span moment is non-zero.",
                  "Three-hinged is thermal-free; two-hinged develops thermal bending.",
                  "Modern long-span bridges prefer two-hinged for the continuous girder - better ride quality and smoother distribution of concentrated loads, accepting the indeterminacy.",
                ],
              },
              {
                q: "What is the source of the extra equation in a two-hinged stiffening girder?",
                marks: 2,
              },
              {
                q: "State one advantage and one disadvantage of the two-hinged girder over the three-hinged.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Cable and arch action compared",
            body: [
              "The cable and the arch are structural duals: under the same loading the cable takes the funicular shape in pure tension and the arch takes the same shape in pure compression. For a uniformly distributed load the funicular is a parabola, so a parabolic cable and a parabolic arch of the same span and rise carry the same load with equal and opposite horizontal reactions: the cable pulls inward on its anchorages with H equals w L squared over (8 h), and the arch pushes outward on its abutments with the same H. The material differs - cables are steel ropes in tension, arches are concrete or steel in compression - but the statics is identical, and the choice between cable and arch for a given span is a matter of foundation conditions, aesthetics and material economics.",
              "Cables suit long spans where the tension can be anchored at depth: suspension bridges from 500 m to over 2000 m are cable structures, because no abutment can resist the arch thrust at that scale. Arches suit medium spans where the abutments are rock or heavy foundations: from 30 m to about 300 m for steel and 200 m for concrete. Cables are flexible and deflect under live load, requiring a stiffening girder; arches are rigid and carry live load with small deflection, but the abutment thrust is large. Under temperature change, the indeterminate two-hinged forms of both cable (suspension bridge with two-hinged girder) and arch develop thermal stresses, while the determinate three-hinged forms of both are stress-free.",
              "Worked summary. For a 200 m span carrying a uniformly distributed load of 20 kN per m with a rise or sag of 20 m, the parabolic cable and the parabolic arch each have H equals 5000 kN (sections 4.1 and 3.2). The cable's tension is maximum at the supports (5099 kN, steel rope in tension); the arch's thrust is maximum at the springings (5099 kN, concrete or steel in compression). The cable requires anchorages pulling inward with H equals 5000 kN each, typically massive concrete blocks or rock anchors; the arch requires abutments pushing outward with H equals 5000 kN each, typically heavy retaining foundations against rock. For a 200 m span, both forms are viable; the choice depends on whether the site has good rock for abutments (favours arch) or deep stable ground for anchorages (favours cable). Beyond 500 m, the cable is the only practical form.",
            ],
            bullets: [
              "Cable and arch are duals: same funicular shape under the same load, opposite stress (tension vs compression).",
              "For UDL, both have H = w L^2 / (8 h) - identical statics, opposite direction.",
              "Cables suit long spans (500-2000 m); arches suit medium spans (30-300 m).",
              "Cables need anchorages (pull inward); arches need abutments (push outward).",
              "Three-hinged forms of both are thermal-free; two-hinged forms develop thermal stresses.",
            ],
            table: {
              caption: "Cable vs arch under the same UDL.",
              headers: ["Aspect", "Cable", "Arch"],
              rows: [
                ["Stress", "tension", "compression"],
                ["Funicular shape (UDL)", "parabola (sags down)", "parabola (rises up)"],
                ["Horizontal reaction", "inward pull H", "outward push H"],
                ["Foundation", "anchorages", "abutments"],
                ["Typical span range", "500 - 2000 m", "30 - 300 m"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Cable and arch as structural duals",
              caption:
                "The same funicular shape carries the same load, in tension for the cable, in compression for the arch.",
              steps: [
                { label: "Apply UDL over a span", note: "load enters the cycle" },
                { label: "Funicular shape is a parabola", note: "same for both" },
                { label: "Cable: parabola sags, carries tension H", note: "anchorage pulls inward" },
                { label: "Arch: parabola rises, carries compression H", note: "abutment pushes outward" },
                { label: "Identical H = w L^2 / (8 h)", note: "statics is the same, sign differs" },
                { label: "Choose by foundation: rock favours arch, depth favours cable", note: "cycle repeats per design" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the duality explicitly",
              body: "When asked to compare cable and arch, write first that they are structural duals: the same funicular shape under the same loading, with equal and opposite horizontal reactions. Then list three contrasts (stress, foundation, span range). Stating the duality up front earns the comparison mark and frames the rest of the answer.",
            },
            keyTerms: [
              { term: "Structural duals", definition: "Two structural forms that carry the same loading with the same funicular shape but in opposite stresses; the cable and arch under vertical load are the canonical pair." },
              { term: "Anchorage", definition: "The foundation at the end of a suspension bridge cable that resists the inward horizontal pull H, typically a massive concrete block or rock anchor." },
              { term: "Abutment", definition: "The foundation at the springing of an arch that resists the outward horizontal push H, typically a heavy retaining structure against rock or competent soil." },
            ],
            examQuestions: [
              {
                q: "Explain why the cable and the arch are called structural duals. For a span of 200 m carrying a UDL of 20 kN/m with rise or sag 20 m, compute the horizontal reaction in each, state the stress state, and discuss when each form is preferred.",
                marks: 7,
                outline: [
                  "Duals: same funicular shape under same loading, opposite stress (cable tension, arch compression).",
                  "For UDL both take a parabolic funicular of rise/sag h.",
                  "H = w L^2 / (8 h) = 20 * 40000 / 160 = 5000 kN for both.",
                  "Cable: parabola sags, H pulls inward on the anchorages; arch: parabola rises, H pushes outward on the abutments.",
                  "Cable needs anchorages; arch needs abutments - the foundation choice drives the form.",
                  "Cables suit 500-2000 m spans (suspension bridges); arches suit 30-300 m spans (steel or concrete arch bridges).",
                  "Conclude: the choice is foundation-driven - rock favours arch, deep ground favours cable; beyond 500 m only the cable is practical.",
                ],
              },
              {
                q: "State the formula common to both cable and arch under a UDL.",
                marks: 2,
              },
              {
                q: "Why are cables preferred over arches for spans beyond 500 m?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ============ UNIT V - DEFLECTION AND INFLUENCE LINES ============
    {
      number: 5,
      roman: "V",
      title: "Deflection and Influence Lines",
      summary:
        "Macaulay's method and the conjugate beam method for deflection, influence lines for shear and bending moment in simply supported beams, and the Muller-Breslau principle for indeterminate structures.",
      chapter: {
        number: "05",
        title: "Deflection and Influence Lines",
        intro:
          "Unit V closes the subject with deflection calculation and influence lines. Sections walk through Macaulay's method (the singularity-function approach to beam deflection under any loading), the conjugate beam method (the elastic-load analogy that converts deflection to a bending problem), influence lines for shear force and bending moment in simply supported beams (the moving-load analysis), and the Muller-Breslau principle that generalises influence lines to indeterminate structures.",
        inOneBreath:
          "Macaulay's method uses singularity functions to write a single bending-moment equation for a beam with multiple loads and integrates twice to get slope and deflection, with the bracket (x - a) treated as zero for x less than a and as (x - a) otherwise; the conjugate beam method replaces the real beam by an imaginary conjugate beam loaded with the M/EI diagram of the real beam, so the shear in the conjugate beam equals the slope of the real beam and the moment in the conjugate beam equals the deflection; an influence line is the plot of a response function (reaction, shear or bending moment at a fixed section) as a unit load moves across the structure, and for a simply supported beam the influence lines are straight lines; the Muller-Breslau principle states that the influence line for any response function is the deflected shape of the structure when the restraint corresponding to that function is removed and a unit displacement applied, generalising influence lines to indeterminate structures and providing a qualitative sketch tool.",
        sections: [
          {
            number: "5.1",
            title: "Macaulay's method for deflection",
            body: [
              "Macaulay's method (also called the method of singularity functions) writes a single bending-moment equation for a beam carrying multiple point loads, moments or distributed loads at arbitrary positions, and integrates it twice to obtain the slope and the deflection. The trick is the bracket notation (x minus a) raised to a power n, defined as zero when x is less than a and as (x minus a) to the n otherwise; this lets a piecewise bending-moment expression be written as one equation that switches automatically as the integration variable passes each load position. The constants of integration come from the support conditions: zero deflection at simple supports, zero slope at fixed ends, and continuity of slope and deflection at internal hinges.",
              "The procedure is mechanical. Step one: choose an origin at the left end and write the bending moment M(x) at any section as a sum of Macaulay brackets, with each point load P at a distance a contributing P times (x minus a), each clockwise moment M_0 at a contributing M_0 times the bracket to the power zero (a step), and each UDL starting at a contributing w over 2 times (x minus a) squared. Step two: substitute M(x) into the elastic-line equation E I y double prime equals M(x) and integrate once for slope and again for deflection, treating the brackets as integration symbols. Step three: apply the boundary conditions to fix the constants of integration. Step four: evaluate the deflection at the required section by computing the bracket values at that x.",
              "Worked example. A simply supported beam of span L carries a point load P at mid-span. With the origin at the left support, the bending moment at any section x less than or equal to L over 2 is (P over 2) x and at any section x greater than L over 2 is (P over 2) x minus P times (x minus L over 2). Writing both as a single Macaulay equation, M(x) equals (P over 2) x minus P times the bracket (x minus L over 2). Substituting in E I y double prime equals M(x) and integrating twice gives y equals (P over 12 E I) times x cubed minus (P over 48 E I) times the bracket (x minus L over 2) cubed plus C_1 x plus C_2. The boundary conditions y equals 0 at x equals 0 and y equals 0 at x equals L give C_2 equals 0 and C_1 equals minus P L squared over 16, and the mid-span deflection evaluates to y at L over 2 equals P L cubed over (48 E I) downward - the textbook result, recovered by one integration rather than two piecewise ones.",
            ],
            bullets: [
              "Macaulay bracket (x - a)^n is zero for x < a and (x - a)^n for x >= a - piecewise becomes one equation.",
              "Point load P at a: term -P (x - a) in M(x). UDL w starting at a: term -w/2 (x - a)^2.",
              "Substitute M(x) into EI y'' = M(x); integrate twice for slope and deflection.",
              "Boundary conditions: zero deflection at simple supports, zero slope at fixed ends, continuity at hinges.",
              "Evaluate brackets at the target x to compute deflection - the method saves integration of multiple piecewise expressions.",
            ],
            table: {
              caption: "Macaulay bracket contributions to M(x).",
              headers: ["Load", "Position a", "Contribution to M(x)", "Integrated twice"],
              rows: [
                ["Point load P (downward)", "a", "-P <x - a>", "P/6 <x - a>^3"],
                ["Clockwise moment M_0", "a", "M_0 <x - a>^0", "M_0/2 <x - a>^2"],
                ["UDL w starting at a", "a", "-w/2 <x - a>^2", "w/24 <x - a>^4"],
                ["UDL ending at b", "a to b", "-w/2 <x - a>^2 + w/2 <x - b>^2", "integrates similarly"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Macaulay's method in four stages",
              caption:
                "Write M(x) with brackets, integrate twice, apply boundary conditions, evaluate.",
              stages: [
                { label: "Write M(x) as a sum of Macaulay brackets", note: "one equation covers the whole beam" },
                { label: "Substitute into EI y'' = M(x)", note: "elastic-line equation" },
                { label: "Integrate twice for slope and deflection", note: "treat brackets as symbols" },
                { label: "Apply boundary conditions for constants", note: "supports, hinges" },
                { label: "Evaluate at the target x", note: "brackets switch on by position" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the bracket rule explicitly",
              body: "Always write the Macaulay bracket rule - (x minus a) to the n is zero for x less than a and (x minus a) to the n otherwise - at the top of any Macaulay answer. Examiners award a method mark for stating the rule, and forgetting it is the most common reason for losing the integration marks because the bracket values are then computed incorrectly.",
            },
            keyTerms: [
              { term: "Macaulay bracket", definition: "The singularity function (x - a)^n defined as zero for x less than a and as (x - a)^n otherwise, used to write a piecewise bending-moment expression as a single equation." },
              { term: "Elastic-line equation", definition: "The differential equation E I y'' = M(x) relating the curvature of a beam to its bending moment, integrated twice to yield slope and deflection." },
              { term: "Singularity function", definition: "A family of piecewise power functions, of which the Macaulay bracket is the most used member, that simplifies the integration of beams with multiple discontinuous loads." },
            ],
            examQuestions: [
              {
                q: "Explain Macaulay's method for beam deflection. State the bracket rule, derive the deflection at mid-span of a simply supported beam of span L carrying a central point load P, and verify the result y = P L^3 / (48 E I).",
                marks: 7,
                outline: [
                  "Bracket rule: (x - a)^n is zero for x < a and (x - a)^n for x >= a.",
                  "Choose origin at left support; the load P is at a = L/2.",
                  "M(x) = (P/2) x - P <x - L/2>.",
                  "Integrate twice: EI y'' = M(x); EI y' = (P/4) x^2 - (P/2) <x - L/2>^2 + C_1.",
                  "EI y = (P/12) x^3 - (P/6) <x - L/2>^3 + C_1 x + C_2.",
                  "Boundary conditions y = 0 at x = 0 gives C_2 = 0; y = 0 at x = L gives C_1 = -P L^2/16.",
                  "At mid-span x = L/2 the bracket term is zero; y(L/2) = (P/12)(L/2)^3 / EI + C_1 (L/2)/EI = (P L^3/96 - P L^3/32)/EI = -P L^3/(48 EI), magnitude P L^3/(48 EI) downward.",
                ],
              },
              {
                q: "State the Macaulay bracket rule for (x - a)^n.",
                marks: 2,
              },
              {
                q: "Why is Macaulay's method preferred over piecewise integration for beams with multiple point loads?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Conjugate beam method",
            body: [
              "The conjugate beam method converts the deflection problem into a bending problem by replacing the real beam with an imaginary conjugate beam loaded with the M over E I diagram of the real beam. The shear at any section of the conjugate beam equals the slope of the real beam at that section, and the bending moment at any section of the conjugate beam equals the deflection of the real beam at that section. The conjugate beam has the same length as the real beam but its supports are transformed: a simple support stays a simple support; a fixed end becomes a free end; a free end becomes a fixed end; and an internal hinge stays a hinge, because the corresponding slope and deflection conditions translate to corresponding shear and moment conditions in the conjugate.",
              "The support transformations follow the rule that real boundary conditions become conjugate load conditions. At a real simple support the deflection is zero but the slope is free, so the conjugate has a simple support (moment zero, shear free). At a real fixed end the deflection and slope are both zero, so the conjugate has a free end (moment and shear both zero, demanding no reactions). At a real free end the deflection and slope are both free, so the conjugate has a fixed end (moment and shear both react). At an internal hinge of the real beam, both slope and deflection are continuous but the moment is zero, so the conjugate has an internal hinge. These transformations are the heart of the method and must be memorised.",
              "Worked example. A simply supported beam of span L carries a central point load P. The real beam has simple supports at both ends, so the conjugate beam is also simply supported. The M over E I diagram is a triangle peaking at P L over (4 E I) at mid-span and zero at the supports. The total load on the conjugate beam is the area of this triangle, equal to (1 over 2) times L times P L over (4 E I) equals P L squared over (8 E I), giving conjugate reactions of P L squared over (16 E I) at each end. The mid-span deflection equals the bending moment at mid-span of the conjugate beam, which is the reaction times L over 2 minus the moment of the half-triangle about mid-span: P L squared over (16 E I) times L over 2 minus (1 over 2) times (L over 2) times (P L over (4 E I)) times (L over 6) equals P L cubed over (32 E I) minus P L cubed over (48 E I) equals P L cubed over (48 E I) - the textbook result, confirming the method.",
            ],
            bullets: [
              "Conjugate beam: same length, loaded with the M/EI diagram of the real beam.",
              "Conjugate shear at a section = real slope; conjugate moment at a section = real deflection.",
              "Support transformations: simple -> simple, fixed -> free, free -> fixed, hinge -> hinge.",
              "Total conjugate load = area of M/EI diagram; reactions found by statics on the conjugate.",
              "Compute conjugate bending moment at a section to obtain the real deflection there.",
            ],
            table: {
              caption: "Real beam vs conjugate beam supports.",
              headers: ["Real support", "Real condition", "Conjugate support", "Conjugate condition"],
              rows: [
                ["Simple", "y = 0, slope free", "Simple", "M = 0, shear free"],
                ["Fixed", "y = 0, slope = 0", "Free", "M = 0, shear = 0"],
                ["Free", "y free, slope free", "Fixed", "M reacts, shear reacts"],
                ["Internal hinge", "y cont., slope cont., M = 0", "Internal hinge", "M = 0, shear cont."],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Real beam vs conjugate beam",
              caption:
                "The conjugate beam carries the M/EI diagram of the real beam; its moment gives the real deflection.",
              left: {
                heading: "Real beam",
                items: [
                  "Carries actual loads (P, w, M_0)",
                  "Boundary conditions on y and slope",
                  "Simple support: y = 0",
                  "Fixed: y = 0 and slope = 0",
                  "Free end: y and slope both free",
                ],
              },
              right: {
                heading: "Conjugate beam",
                items: [
                  "Carries the M/EI diagram of the real beam",
                  "Boundary conditions on M and shear",
                  "Simple support: M = 0",
                  "Fixed becomes free (M = 0, shear = 0)",
                  "Free becomes fixed (M reacts, shear reacts)",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Free ends become fixed",
              body: "The most common conjugate-beam error is forgetting that a real free end becomes a conjugate fixed end (and a real fixed end becomes a conjugate free end). If the conjugate beam has the same supports as the real beam in a cantilever problem, the entire calculation will be wrong because the conjugate reactions will not balance the M/EI load. Always transform the supports first.",
            },
            keyTerms: [
              { term: "Conjugate beam", definition: "An imaginary beam of the same length as the real beam, loaded with the M/EI diagram of the real beam, whose shear equals the real slope and whose moment equals the real deflection." },
              { term: "M/EI diagram", definition: "The bending-moment diagram of the real beam divided by the flexural rigidity EI; the load on the conjugate beam, whose area gives the total conjugate reaction." },
              { term: "Support transformation", definition: "The rule converting real boundary conditions to conjugate supports: simple stays simple, fixed becomes free, free becomes fixed, hinge stays hinge." },
            ],
            examQuestions: [
              {
                q: "State the conjugate beam method and the support transformation rules. For a simply supported beam of span L carrying a central point load P, construct the conjugate beam, load it with the M/EI diagram, and derive the mid-span deflection.",
                marks: 7,
                outline: [
                  "Conjugate beam: same length, loaded with M/EI diagram; conjugate shear = real slope, conjugate moment = real deflection.",
                  "Support transformations: simple -> simple, fixed -> free, free -> fixed, hinge -> hinge.",
                  "Real beam is simply supported; conjugate is simply supported.",
                  "M/EI diagram: triangle peaking at PL/(4EI) at mid-span, zero at supports.",
                  "Total conjugate load = area = (1/2) L * PL/(4EI) = PL^2/(8EI); reactions PL^2/(16EI) each.",
                  "Mid-span deflection = conjugate moment at mid-span = reaction * (L/2) - moment of half-triangle about mid-span.",
                  "Compute: PL^2/(16EI) * L/2 - (1/2)(L/2)(PL/(4EI))(L/6) = PL^3/(32EI) - PL^3/(48EI) = PL^3/(48EI).",
                ],
              },
              {
                q: "State the conjugate beam support transformation for a fixed end.",
                marks: 2,
              },
              {
                q: "What does the bending moment at a section of the conjugate beam represent in the real beam?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Influence lines for bending moment",
            body: [
              "An influence line is a graph of the value of a response function (a reaction, a shear force, or a bending moment at a fixed section) as a unit load moves across the structure. It differs from a bending-moment diagram, which plots the bending moment at every section for a fixed load. For a simply supported beam, the influence line for the bending moment at a section located at a distance a from the left support is a triangle peaking at the section with ordinate a (L minus a) over L and zero at both supports. Place a unit load at any position x; the moment at the section equals the influence ordinate at x, and any concentrated load P at x contributes P times the ordinate to the section moment.",
              "The construction is direct. For a unit load at position x less than a (to the left of the section), the moment at the section is (L minus x) times a over L (the right reaction times a), so the influence line rises linearly from zero at the left support to a (L minus a) over L at x equals a. For a unit load at position x greater than a (to the right of the section), the moment at the section is x times (L minus a) over L (the left reaction times (L minus a)), so the influence line falls linearly from the peak at x equals a back to zero at the right support. The two lines meet at the peak, giving the triangular shape. The peak value a (L minus a) over L is the maximum moment the section can experience under a single moving point load.",
              "Worked example. A simply supported beam of span 10 m has a section at 4 m from the left support. The influence line for the bending moment at this section is a triangle peaking at the section with ordinate a (L minus a) over L equals 4 times 6 over 10 equals 2.4 m, and zero at both supports. A point load of 50 kN placed at the section produces a bending moment of 50 times 2.4 equals 120 kN m, the maximum possible for that load. A uniformly distributed load of 10 kN per m over the whole span produces a bending moment at the section equal to 10 times the area under the influence line, which is 10 times (1 over 2) times L times the peak equals 10 times (1 over 2) times 10 times 2.4 equals 120 kN m - the same value, because the UDL spreads to fill the triangular influence. Place the UDL only over the left half, and the moment is 10 times the area of the left half of the influence line, roughly 60 kN m.",
            ],
            bullets: [
              "Influence line: value of a response at a fixed section as a unit load moves - not a bending-moment diagram.",
              "IL for bending moment at section a: triangle peaking at a with ordinate a (L - a) / L.",
              "Peak value a (L - a) / L is the maximum moment the section can take under a single moving point load.",
              "Point load P at x contributes P * ordinate(x); UDL w over a length contributes w * area under the IL over that length.",
              "Place a UDL over the region where the IL is positive to maximise the response; over the negative region to minimise.",
            ],
            table: {
              caption: "Influence line for bending moment at section a in a simply supported beam.",
              headers: ["Load position x", "Moment at section a", "IL ordinate"],
              rows: [
                ["x = 0 (left support)", "0", "0"],
                ["x = a (at section)", "a (L - a) / L", "peak value"],
                ["x = L (right support)", "0", "0"],
                ["x < a (left of section)", "(L - x) * a / L", "linear rise"],
                ["x > a (right of section)", "x * (L - a) / L", "linear fall"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Constructing the IL for bending moment",
              caption:
                "Place the unit load, compute the reaction, multiply by the lever arm, plot the result vs x.",
              steps: [
                { label: "Fix the section at distance a", note: "the response location" },
                { label: "Place a unit load at x < a", note: "left of the section" },
                { label: "Compute right reaction (L - x)/L, times a", note: "moment at the section" },
                { label: "Place the unit load at x > a", note: "right of the section" },
                { label: "Compute left reaction x/L, times (L - a)", note: "moment at the section" },
                { label: "Plot both branches; they meet at the peak", note: "triangle, zero at supports" },
              ],
            },
            callout: {
              type: "exam",
              title: "Influence line is not a BM diagram",
              body: "An influence line plots the response at ONE section as a load MOVES; a bending-moment diagram plots the moment at EVERY section for a FIXED load. Confusing the two is the most common conceptual error in this chapter. Always state which one you are drawing, and label the moving load position on the horizontal axis for an IL.",
            },
            keyTerms: [
              { term: "Influence line", definition: "A graph of the value of a response function (reaction, shear or moment) at a fixed section of a structure as a unit load moves across the structure." },
              { term: "Influence ordinate", definition: "The value of the influence line at a given load position; multiplying by a concentrated load at that position gives that load's contribution to the response." },
              { term: "Maximum bending moment under a moving load", definition: "The peak value of the influence line for bending moment at a section, equal to a (L - a) / L for a simply supported beam, achieved when a single point load sits at the section." },
            ],
            examQuestions: [
              {
                q: "Define an influence line and distinguish it from a bending-moment diagram. Construct the influence line for the bending moment at a section 4 m from the left support of a simply supported beam of span 10 m, and use it to compute the moment at the section under a 50 kN point load at 4 m and a 10 kN/m UDL over the whole span.",
                marks: 7,
                outline: [
                  "IL: response at a fixed section vs moving unit load; BM diagram: moment at every section for a fixed load.",
                  "Section at a = 4 m, span L = 10 m.",
                  "IL peak at the section: a (L - a)/L = 4*6/10 = 2.4 m; zero at both supports; triangular shape.",
                  "For x < 4: ordinate = (L - x) a / L. For x > 4: ordinate = x (L - a)/L.",
                  "Point load 50 kN at x = 4 m: moment = 50 * 2.4 = 120 kN m (maximum for this load).",
                  "UDL 10 kN/m over whole span: moment = 10 * area of IL = 10 * (1/2) * 10 * 2.4 = 120 kN m.",
                  "Conclude: same value because the UDL fills the triangular influence; a partial UDL would give less.",
                ],
              },
              {
                q: "State the peak ordinate of the IL for bending moment at a section a in a simply supported beam of span L.",
                marks: 2,
              },
              {
                q: "How is an influence line different from a bending-moment diagram?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Influence lines for shear force",
            body: [
              "The influence line for the shear force at a section of a simply supported beam is a two-branch line with a discontinuity at the section. For a unit load at position x less than a (left of the section), the shear at the section equals minus the right reaction, that is minus (L minus x) over L; the influence line branch rises linearly from minus 1 at the left support to minus (L minus a) over L just left of the section. For a unit load at position x greater than a (right of the section), the shear equals the left reaction, that is x over L; the branch rises linearly from a over L just right of the section to 1 at the right support. The jump at the section equals 1, exactly the unit load transferred across the section.",
              "The discontinuity of magnitude 1 at the section is the signature of the shear influence line. The maximum positive shear at the section is a over L (achieved when the unit load sits just right of the section), and the maximum negative shear is minus (L minus a) over L (achieved when the unit load sits just left). For a moving series of point loads, the maximum positive shear at the section is obtained by placing the heaviest load just to the right of the section and the rest of the loads wherever they contribute positive ordinates; similarly for the maximum negative. For a UDL of length l, the maximum positive shear at the section is obtained by covering the right-hand positive branch with the UDL, from the section to a distance l to the right, and the maximum negative by covering the left-hand negative branch.",
              "Worked example. A simply supported beam of span 10 m has a section at 4 m from the left support. The influence line for shear at this section has a left branch running from minus 1 at x equals 0 to minus (10 minus 4) over 10 equals minus 0.6 just left of the section, and a right branch running from 4 over 10 equals 0.4 just right of the section to 1 at x equals 10. The discontinuity at the section is 0.4 minus (minus 0.6) equals 1. A point load of 50 kN placed just right of the section produces a shear of 50 times 0.4 equals 20 kN; placed just left, the shear is 50 times (minus 0.6) equals minus 30 kN. A UDL of 10 kN per m over the whole span produces a shear at the section of 10 times the net area under the influence line, which is (1 over 2) times 10 times 1 minus (1 over 2) times 10 times 1 equals zero - the whole-span UDL produces zero net shear at any section of a simply supported beam, as expected by symmetry.",
            ],
            bullets: [
              "IL for shear at section a: two branches with a jump of 1 at the section.",
              "Left branch (x < a): -1 at the left support, -(L - a)/L just left of the section.",
              "Right branch (x > a): a/L just right, +1 at the right support.",
              "Maximum positive shear = a/L; maximum negative shear = -(L - a)/L.",
              "UDL over the whole span gives zero net shear at any section (areas cancel by symmetry).",
            ],
            table: {
              caption: "Influence line for shear at section a in a simply supported beam.",
              headers: ["Load position x", "Shear at section a", "IL ordinate"],
              rows: [
                ["x = 0 (left support)", "V_B = -1", "-1"],
                ["x just < a (left of section)", "V_B = -(L - x)/L", "-(L - a)/L"],
                ["x just > a (right of section)", "V_A = x/L", "a/L"],
                ["x = L (right support)", "V_A = 1", "1"],
                ["Jump at x = a", "-", "1 (the unit load)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Constructing the IL for shear force",
              caption:
                "Two branches meet with a jump of 1 at the section - the signature of the shear IL.",
              steps: [
                { label: "Fix the section at distance a", note: "the response location" },
                { label: "Load at x < a: shear = -V_B = -(L - x)/L", note: "left branch" },
                { label: "Load at x > a: shear = V_A = x/L", note: "right branch" },
                { label: "Plot both branches", note: "jump of 1 at the section" },
                { label: "Max positive = a/L (load just right)", note: "max negative = -(L - a)/L" },
                { label: "UDL over whole span: net shear = 0", note: "areas cancel" },
              ],
            },
            callout: {
              type: "exam",
              title: "The jump of 1 identifies the shear IL",
              body: "The discontinuity of magnitude 1 at the section is the defining feature of the shear-force influence line in a simply supported beam. If your sketch has no jump, you have drawn a moment IL or a shear diagram, not the shear IL. Always mark the jump and label it 'unit load transferred across the section' to earn the identification mark.",
            },
            keyTerms: [
              { term: "Shear influence line", definition: "An influence line showing the shear force at a fixed section of a beam as a unit load moves across the span, characterised by a jump of magnitude 1 at the section." },
              { term: "Discontinuity at the section", definition: "The jump of magnitude 1 in the shear influence line at the response section, representing the unit load transferred directly across the section when it sits there." },
              { term: "Maximum shear under moving load", definition: "The peak ordinate of the shear influence line at a section, equal to a over L on the positive side and minus (L minus a) over L on the negative side, achieved by placing the heaviest load just beside the section." },
            ],
            examQuestions: [
              {
                q: "Construct the influence line for the shear force at a section 4 m from the left support of a simply supported beam of span 10 m. State the maximum positive and negative ordinates and compute the shear at the section under a 50 kN load placed just right and just left of the section.",
                marks: 7,
                outline: [
                  "Fix section at a = 4 m, span L = 10 m.",
                  "Left branch (x < a): shear = -V_B = -(L - x)/L; at x = 0 the value is -1; just left of the section the value is -(L - a)/L = -6/10 = -0.6.",
                  "Right branch (x > a): shear = V_A = x/L; just right of the section the value is a/L = 4/10 = 0.4; at x = L the value is 1.",
                  "Jump at the section = 0.4 - (-0.6) = 1, the unit load.",
                  "Maximum positive shear at the section = a/L = 0.4; maximum negative = -(L - a)/L = -0.6.",
                  "Load 50 kN just right: shear = 50 * 0.4 = 20 kN. Load 50 kN just left: shear = 50 * (-0.6) = -30 kN.",
                  "Conclude: the maximum absolute shear at the section is 30 kN, achieved with the load just left.",
                ],
              },
              {
                q: "What is the magnitude of the discontinuity in the shear influence line at the section?",
                marks: 2,
              },
              {
                q: "Why does a UDL over the whole span produce zero shear at any section of a simply supported beam?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Muller-Breslau principle",
            body: [
              "The Muller-Breslau principle generalises influence lines to indeterminate structures and provides a qualitative sketch tool. It states that the influence line for any response function (a reaction, a shear, or a bending moment at a section) is the deflected shape of the structure when the restraint corresponding to that response is removed and a unit displacement (or rotation) is applied in the positive sense of the response. For a reaction, remove the support and apply a unit displacement there; for a shear at a section, cut the beam there and apply a unit relative translation; for a moment at a section, introduce a hinge there and apply a unit relative rotation. The resulting deflected shape, to some scale, is the influence line.",
              "For statically determinate beams the principle yields straight-line influence lines (because the released structure is a mechanism that deflects without resistance), reproducing the triangular moment IL and the two-branch shear IL of sections 5.3 and 5.4. For indeterminate beams the released structure is still a structure, and the deflected shape is a curve - the influence line for an indeterminate response is curved, not straight. The principle therefore provides a quick qualitative sketch: remove the restraint, apply the unit displacement, and draw the natural deflected shape. The sign of the influence ordinates follows the sign of the deflection in the positive sense of the response.",
              "Worked example. Sketch qualitatively the influence line for the bending moment at the mid-span of a two-span continuous beam. By the Muller-Breslau principle, introduce a hinge at mid-span and apply a unit relative rotation there. The left half of the beam rotates downward at the hinge, the right half rotates upward (or vice versa depending on sign convention), and the deflected shape is a smooth curve positive over the span containing the hinge and negative over the other span. The IL for the mid-span moment is therefore positive over the loaded span and negative over the adjacent span, indicating that a load on the adjacent span reduces the moment at the hinge. This qualitative result, sketched in seconds by Muller-Breslau, would take a full force-method analysis to compute quantitatively - the principle's power lies in its speed.",
            ],
            bullets: [
              "Muller-Breslau: IL for a response = deflected shape when the corresponding restraint is released and a unit displacement applied.",
              "Reaction IL: remove the support, apply a unit displacement; the deflected shape is the reaction IL.",
              "Shear IL: cut the section, apply a unit relative translation; deflected shape is the shear IL.",
              "Moment IL: introduce a hinge, apply a unit relative rotation; deflected shape is the moment IL.",
              "Determinate structures give straight-line ILs; indeterminate give curved ILs (released structure still resists).",
            ],
            table: {
              caption: "Muller-Breslau releases for each response function.",
              headers: ["Response", "Restraint removed", "Unit displacement", "IL shape"],
              rows: [
                ["Reaction at a support", "the support itself", "unit translation at support", "deflected shape"],
                ["Shear at a section", "continuity of translation", "unit relative translation", "two-branch deflected shape"],
                ["Moment at a section", "continuity of rotation", "unit relative rotation", "kinked deflected shape"],
                ["Indeterminate structure", "-", "-", "curved IL"],
                ["Determinate structure", "-", "-", "straight-line IL"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Muller-Breslau releases in a hierarchy",
              caption:
                "Top: the principle. Middle: the three releases. Bottom: the resulting IL shapes.",
              tiers: [
                { label: "Muller-Breslau principle", note: "IL = deflected shape after release" },
                { label: "Reaction release: remove support, unit translation", note: "reaction IL" },
                { label: "Shear release: cut section, unit relative translation", note: "shear IL" },
                { label: "Moment release: insert hinge, unit relative rotation", note: "moment IL" },
                { label: "Determinate -> straight IL; indeterminate -> curved IL", note: "qualitative sketch" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch the qualitative IL in seconds",
              body: "The Muller-Breslau principle is fastest for qualitative influence lines of indeterminate structures: release the restraint, apply the unit displacement, and draw the deflected shape. The sketch tells you immediately where to place a load for the maximum positive or negative response - over the positive region of the IL for maximum, over the negative for minimum - without any force-method algebra.",
            },
            keyTerms: [
              { term: "Muller-Breslau principle", definition: "The theorem that the influence line for any response function is the deflected shape of the structure when the corresponding restraint is removed and a unit displacement applied in the positive sense of the response." },
              { term: "Released structure", definition: "The structure obtained by removing the restraint corresponding to a response function; a mechanism for determinate beams (giving straight-line ILs) and a flexible structure for indeterminate beams (giving curved ILs)." },
              { term: "Qualitative influence line", definition: "A sketch of the influence line obtained by the Muller-Breslau principle without numerical computation, showing the sign and rough magnitude of the response as a load moves; the principle's main practical use." },
            ],
            examQuestions: [
              {
                q: "State the Muller-Breslau principle. Describe the release and unit displacement for the influence lines of (a) a reaction, (b) a shear at a section and (c) a bending moment at a section. Sketch qualitatively the IL for the mid-span moment of a two-span continuous beam.",
                marks: 7,
                outline: [
                  "Principle: IL for a response = deflected shape after removing the corresponding restraint and applying a unit displacement.",
                  "Reaction IL: remove the support, apply a unit translation at the support location.",
                  "Shear IL: cut the section, apply a unit relative translation across the cut.",
                  "Moment IL: introduce a hinge at the section, apply a unit relative rotation.",
                  "Determinate structures give straight-line ILs; indeterminate give curved ILs.",
                  "Two-span continuous beam, mid-span moment: introduce a hinge at mid-span, apply a unit relative rotation.",
                  "The deflected shape is positive over the loaded span and negative over the adjacent span, indicating that a load on the adjacent span reduces the moment at the hinge.",
                ],
              },
              {
                q: "What release gives the influence line for a shear at a section?",
                marks: 2,
              },
              {
                q: "Why does the Muller-Breslau principle give curved influence lines for indeterminate structures?",
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
        "RGPV CE-403 papers spread the marks across truss analysis, three-hinged arches, cables and Macaulay's method, with the determinacy criteria and influence lines supplying the short-question anchors. Allocate revision time in roughly the same ratio, and reserve one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Truss analysis by method of joints and method of sections", weight: "12-14 marks", note: "Almost guaranteed; practise three full solves including zero-force member inspection." },
        { topic: "Three-hinged arch: BM, SF and axial force under UDL and point load", weight: "10-12 marks", note: "Always compute H = M_C^0 / h first; the parabolic arch is moment-free under UDL." },
        { topic: "Macaulay's method for beam deflection", weight: "8-10 marks", note: "Practise one simply supported beam with a central point load and one with a UDL plus an off-centre point load." },
        { topic: "Cable under UDL and central point load", weight: "8-10 marks", note: "Master the H formula for both load types and compute maximum tension at the supports." },
        { topic: "Influence lines for BM and SF in simply supported beams", weight: "8-10 marks", note: "Sketch the triangular moment IL and the two-branch shear IL with the jump of 1." },
        { topic: "Two-hinged arch and rib shortening", weight: "6-8 marks", note: "State the compatibility integral; quote the standard integral for a parabola of constant I." },
        { topic: "Suspension bridge with three-hinged stiffening girder", weight: "6-8 marks", note: "Compute H_D = wL^2/(8h) and H_L = M_0/h; superpose dead and live." },
        { topic: "Conjugate beam method", weight: "6-8 marks", note: "Master the support transformations: fixed becomes free, free becomes fixed." },
        { topic: "Static and kinematic indeterminacy with formulas", weight: "6-8 marks", note: "Truss (m + r - 2j), beam (r - 3), frame (3m + r - 3j) - all four count separately." },
        { topic: "Muller-Breslau principle and qualitative IL for indeterminate structures", weight: "4-6 marks", note: "Sketch the deflected shape after releasing the restraint; curved for indeterminate." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - classification, determinacy, DOF", tasks: ["Classification of structures, geometry families, determinate vs indeterminate", "Determinacy and stability counts: m + r - 2j for trusses, (3m + r) - 3j for frames", "Static vs kinematic indeterminacy, degree of freedom, force and stiffness methods"] },
        { week: "Week 2", focus: "Unit II - truss analysis", tasks: ["Perfect / deficient / redundant frames; zero-force member inspection", "Method of joints: solve a Warren truss and a Pratt truss end to end", "Method of sections: master the moment-centre trick for chord and diagonal forces"] },
        { week: "Week 3", focus: "Unit II continued and Unit III start", tasks: ["Tension coefficient method for a space tripod and a planar skew truss", "Arch types and components; three-hinged arch under UDL and a point load", "Three-hinged arch BM, SF, axial force formulas; parabolic moment-free check"] },
        { week: "Week 4", focus: "Unit III - two-hinged arch, rib shortening, temperature; Unit IV start", tasks: ["Two-hinged arch compatibility integral; standard result for parabola of constant I", "Rib shortening: add L/(AE) to the denominator; thermal thrust formula", "Cable under UDL: parabola y = w x^2/(2H); cable with central point load"] },
        { week: "Week 5", focus: "Unit IV - suspension bridges; Unit V start", tasks: ["Suspension bridge with three-hinged stiffening girder: H = M_0/h, dead + live", "Two-hinged stiffening girder brief; cable vs arch duality", "Macaulay's method: bracket rule, two integrations, boundary conditions"] },
        { week: "Week 6", focus: "Unit V - deflection, influence lines, Muller-Breslau", tasks: ["Conjugate beam method: support transformations, M/EI as load", "Influence lines for BM and SF in simply supported beams; jump of 1 in shear IL", "Muller-Breslau principle and qualitative IL for two-span continuous beam; two full past papers under time"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Spend the first hour on Unit II trusses and Unit III three-hinged arches - the highest-yield numerical territory.",
        "Memorise the four indeterminacy formulas cold: truss (m + r - 2j), beam (r - 3), frame (3m + r - 3j), and the two-hinged arch compatibility integral.",
        "For arch questions, write H = M_C^0 / h first, then BM = simply supported BM minus H times y - the arch is leaner than the corresponding beam.",
        "For cable questions, derive the cable equation y = w x squared over (2 H) before any tension calculation; the slope gives the maximum tension at the supports.",
        "Practise one full numerical from each of Units II, III, IV under fifteen minutes each; the audit trail of formulas earns method marks even when arithmetic slips.",
        "Keep the last thirty minutes for influence-line sketches - the triangular BM IL and the two-branch shear IL with the jump of 1 are quick, certain marks.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Write the formula and a free body diagram before any calculation; the diagram earns method marks even if the arithmetic slips.",
        "For truss problems, identify zero-force members by inspection first; listing them by name with the rule earns two or three marks and trims the working by a third.",
        "In arch problems, always state H = M_C^0 / h before computing BM at any section; this single line carries three or four marks.",
        "For Macaulay's method, write the bracket rule at the top of the answer - (x - a) to the n is zero for x less than a, (x - a) to the n otherwise - and integrate the brackets as symbols.",
        "In influence-line questions, label the section and the moving load position separately on the sketch; the horizontal axis is the load position, the vertical axis is the response.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Confusing static and kinematic indeterminacy: static counts extra equations, kinematic counts extra joint displacements - the two are complementary, not identical.",
        "Forgetting zero-force members and trying to solve every joint - wastes time and risks arithmetic errors that propagate to later joints.",
        "Using wL squared over 8 for a fixed-fixed beam instead of wL squared over 24 - the support conditions change the bending moment coefficient dramatically.",
        "Omitting the horizontal thrust term H times y in arch bending moment; the result is the simply supported BM, not the arch BM, and the examiner will mark it as a conceptual error.",
        "Mixing up the conjugate beam support transformations: a real fixed end becomes a conjugate free end, and a real free end becomes a conjugate fixed end - reversing these gives wrong conjugate reactions.",
        "Confusing the influence line (response at one section as a load moves) with the bending-moment diagram (moment at every section for a fixed load) - they look similar but answer different questions.",
      ],
    },
  ],
};
