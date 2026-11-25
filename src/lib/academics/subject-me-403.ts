/**
 * Academics - RGPV Mechanical Engineering 4th-semester subject: ME-403
 * Theory of Machines.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or a Python calculation, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me403: AcademicSubject = {
  id: "me-403",
  code: "ME-403",
  title: "Theory of Machines",
  semester: "IV Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to Theory of Machines for RGPV mechanical engineering: links, pairs and chains, velocity and acceleration analysis, cams and followers, gears and gear trains, and the friction of bearings, clutches, belts and brakes.",
  description:
    "Five units mirror the RGPV syllabus. Unit I builds the vocabulary of links, pairs and chains and applies Grashof's law, slider-crank inversions and the Davis and Ackermann steering gears. Unit II masters the graphical tools of velocity and acceleration analysis: relative-velocity polygons, instantaneous centres with Kennedy's theorem, Klein's construction and the Coriolis component. Unit III moves from cam and follower types through displacement diagrams to full cam profile layout. Unit IV covers gear terminology, the law of gearing, involute and cycloidal teeth, interference, and simple, compound and epicyclic gear trains. Unit V closes with journal-bearing friction circles, plate and cone clutches, belt drives with centrifugal tension, block, band and internal brakes, and dynamometers. Every section pairs the theory with a worked figure, a redrawable diagram and the exam questions RGPV actually asks.",
  accentColor: "#6366f1",
  emoji: "TM",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Kinematics of Mechanisms",
      summary:
        "The vocabulary of the whole subject: resistant links, kinematic pairs and chains, degrees of freedom by Kutzbach and Grubler, Grashof's law and the four-bar family, the four inversions of the single slider-crank chain, and the Davis and Ackermann steering gears.",
      chapter: {
        number: "01",
        title: "Links, Pairs, Chains and Mechanisms",
        intro:
          "Unit I defines what a mechanism is made of: links joined by kinematic pairs into chains whose motion is completely constrained. From the four-bar chain come Grashof's crank-rocker and drag-link machines; from the slider-crank chain come engines, compressors, quick-return drives and pumps; and from the correct-steering condition come the Davis and Ackermann gears that guide every automobile.",
        inOneBreath:
          "A link is a resistant body; a kinematic pair is a connection permitting constrained relative motion; pairs are lower (surface contact) or higher (point or line contact), and self-closed or force-closed; a kinematic chain has one-degree-of-freedom constrained motion, and the Kutzbach criterion F = 3(n-1) - 2j1 - j2 counts it; Grashof's law s + l <= p + q decides whether any link of a four-bar can rotate fully; fixing different links of the same chain gives inversions - the slider-crank chain yields the engine, the Whitworth and slotted-lever quick returns and the hand pump; and correct steering requires all wheel axes to meet at one point, giving the cotangent condition that Davis satisfies with sliding pairs and Ackermann approximates with turning pairs.",
        sections: [
          {
            number: "1.1",
            title: "Machine, mechanism, link, pair and chain",
            body: [
              "A machine and a mechanism are not the same thing. A mechanism is an assembly of rigid bodies so connected that the motion of one compels the motion of the others in a definite way; a machine is a mechanism that also transmits and modifies force, like an engine converting gas pressure into shaft rotation. A structure, such as a bridge truss, has no relative motion at all. The rigid bodies are called links or elements - each may be one piece or several bolted together, provided it moves as a unit.",
              "Two links connected so that constrained relative motion is possible form a kinematic pair. Pairs are classified three ways. By nature of contact: a lower pair has surface contact, examples being the turning pair of a shaft in a bearing, the sliding pair of a piston in a cylinder and the screw pair of a nut on a bolt; a higher pair has contact along a line or at a point, like a cam against its roller or two meshing gear teeth. By nature of constraint: a self-closed or closed pair holds contact by its own geometry, while a force-closed or open pair needs a spring or weight. By nature of relative motion: turning, sliding, rolling, screw, spherical or planar.",
              "When links are joined by pairs so that relative motion is completely constrained and predictable, the assembly is a kinematic chain. For a chain of n links and j lower pairs to be useful, one link is fixed and the rest move - that is a mechanism. A closed chain of four links and four turning pairs is the four-bar chain, the smallest practical mechanism; the single slider-crank chain replaces one turning pair with a sliding pair and is the heart of every engine. Chains with too many constraints become structures; with too few they collapse.",
            ],
            bullets: [
              "Link: a resistant body, however many pieces, that moves as a single unit; two links joined with constrained relative motion form a kinematic pair.",
              "Lower pair - surface contact (turning, sliding, screw, spherical); higher pair - line or point contact (cam and follower, gear teeth, belt on pulley).",
              "Self-closed pair keeps contact by geometry; force-closed pair needs a spring or gravity, as an open cam and follower.",
              "Kinematic chain: links joined so relative motion is completely constrained; fixing one link turns the chain into a mechanism.",
              "Machine versus structure: a machine is a mechanism that transmits or modifies force; a structure transmits force with no relative motion.",
            ],
            table: {
              caption: "Common kinematic pairs by relative motion.",
              headers: ["Pair", "Contact", "Relative motion", "Example"],
              rows: [
                ["Turning pair", "Lower (surface)", "Rotation about one axis", "Crank pin in a four-bar linkage"],
                ["Sliding pair", "Lower (surface)", "Pure translation", "Piston inside a cylinder"],
                ["Screw pair", "Lower (surface)", "Helical rotation plus translation", "Nut on a bolt"],
                ["Spherical pair", "Lower (surface)", "Rotation about three axes", "Ball and socket joint"],
                ["Cam and roller follower", "Higher (line)", "Combined roll and slide", "Engine valve operating gear"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From a link to a machine",
              caption: "The building hierarchy every Unit I definition question expects.",
              steps: [
                { label: "Resistant body: the link" },
                { label: "Two links joined: kinematic pair" },
                { label: "Links in a closed loop: kinematic chain", note: "relative motion completely constrained" },
                { label: "One link grounded: mechanism" },
                { label: "Force and motion transmitted: machine", note: "engine, lathe, vehicle" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Classification of kinematic pairs with two examples each is the most repeated Unit I question. Draw a small sketch beside every pair name - surface contact for the lower pair, line contact for the higher pair - and the definition marks are almost free.",
            },
            keyTerms: [
              { term: "Kinematic pair", definition: "A connection between two links that permits constrained relative motion." },
              { term: "Lower pair", definition: "A pair with surface contact between its elements, such as a turning, sliding or screw pair." },
              { term: "Kinematic chain", definition: "An assembly of links and pairs in which relative motion is completely constrained and predictable." },
            ],
            examQuestions: [
              {
                q: "Define link, kinematic pair and kinematic chain. Classify kinematic pairs with examples, and distinguish clearly between a machine, a mechanism and a structure.",
                marks: 7,
                outline: [
                  "Define a resistant link and show one-piece and multi-piece examples.",
                  "Define a kinematic pair and classify by nature of contact with two examples each.",
                  "Classify by nature of constraint: self-closed versus force-closed pairs.",
                  "Classify by nature of relative motion: turning, sliding, rolling, screw, spherical.",
                  "Define a kinematic chain and state the role of the fixed link.",
                  "Mechanism: chain with one link fixed, definite motion transmission.",
                  "Machine: mechanism that also transmits or modifies force; structure: no relative motion.",
                ],
              },
              {
                q: "Differentiate between a lower pair and a higher pair with two examples of each.",
                marks: 2,
              },
              {
                q: "Why is a four-bar chain with four turning pairs called the smallest useful mechanism? What happens when a chain has too many or too few constraints?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Degrees of freedom: Kutzbach and Grubler criteria",
            body: [
              "The degrees of freedom of a mechanism are the number of independent inputs needed to make every link move in a definite way. A single rigid link moving in a plane has three degrees of freedom: translation along two axes plus rotation about the third. A mechanism should have exactly one degree of freedom so that one motor input fixes the motion of everything else - that is what makes a machine predictable.",
              "Kutzbach's criterion counts the freedom left after the joints remove it. With n links including the fixed frame, the moving links have 3(n - 1) freedoms before pairing; every lower pair removes two and every higher pair removes one, so F = 3(n - 1) - 2j1 - j2. A four-bar chain gives F = 3(4 - 1) - 2(4) = 1; a single slider-crank with three lower pairs also gives 1; a five-bar chain gives 2 and needs two inputs. For a one-degree-of-freedom chain with lower pairs only, the criterion collapses to Grubler's equation 3n - 2j - 4 = 0, so n = (2j + 4)/3 - four links with four joints is the smallest solution.",
              "Interpreting F is the examiner's real target. F = 1 means a constrained mechanism driven by one input; F = 0 gives a locked chain, which is a structure; a negative F indicates a preloaded structure with redundant members; F = 2 or more needs multiple coordinated inputs or the motion is undefined. Be warned that Kutzbach can mislead when a mechanism contains redundant links or parallel connections that add no constraint - always confirm the geometry before trusting the count.",
            ],
            bullets: [
              "A rigid link in plane motion has three degrees of freedom: two translations and one rotation.",
              "Kutzbach criterion (planar): F = 3(n - 1) - 2j1 - j2, where j1 counts lower pairs and j2 counts higher pairs.",
              "Grubler's equation for a one-DOF, all-lower-pair chain: 3n - 2j - 4 = 0, so n = (2j + 4)/3.",
              "F = 1: constrained mechanism; F = 0: locked structure; F < 0: preloaded structure; F >= 2: multiple inputs needed.",
              "Redundant or parallel links can defeat the count - verify the geometry before quoting Kutzbach.",
            ],
            codeExample: {
              language: "python",
              caption: "Kutzbach criterion applied to the classic chains.",
              code: `def kutzbach(n, j1, j2=0):
    """Planar DOF: n links including the frame,
    j1 lower pairs, j2 higher pairs."""
    return 3 * (n - 1) - 2 * j1 - j2

cases = [
    ("Four-bar chain", 4, 4, 0),
    ("Single slider-crank", 4, 3, 0),
    ("Five-bar chain", 5, 5, 0),
    ("Triangle of three links", 3, 3, 0),
]
for name, n, j1, j2 in cases:
    print(f"{name}: F = {kutzbach(n, j1, j2)}")`,
            },
            diagram: {
              kind: "flow",
              title: "Counting degrees of freedom without tears",
              caption: "The audit trail an examiner wants to see under every DOF number.",
              steps: [
                { label: "Count links n, including the ground" },
                { label: "Count joints: j1 lower, j2 higher", note: "a pin joining three links counts as two pairs" },
                { label: "Apply F = 3(n - 1) - 2j1 - j2" },
                { label: "Interpret: 1 = single input, 0 = structure, 2 or more = multi-input" },
              ],
            },
            callout: {
              type: "warning",
              title: "Joint-counting traps",
              body: "A single pin carrying three links is two lower pairs, not one. A pin sliding in a slot is one higher pair. Half of all lost marks in DOF questions come from these two counting errors, not from the formula.",
            },
            keyTerms: [
              { term: "Degrees of freedom", definition: "The number of independent coordinates needed to define the configuration of a mechanism." },
              { term: "Kutzbach criterion", definition: "F = 3(n - 1) - 2j1 - j2 for planar mechanisms, counting links and pairs." },
              { term: "Grubler's equation", definition: "3n - 2j - 4 = 0, the link-joint relation for a one-degree-of-freedom chain of lower pairs." },
            ],
            examQuestions: [
              {
                q: "Derive the Kutzbach criterion for planar mechanisms and apply it to a four-bar chain, a single slider-crank chain and a five-bar chain. State Grubler's equation and its use.",
                marks: 7,
                outline: [
                  "Show a free link in a plane has three degrees of freedom.",
                  "Account for the fixed frame: moving links carry 3(n - 1) freedoms.",
                  "Each lower pair removes two freedoms; each higher pair removes one.",
                  "Assemble F = 3(n - 1) - 2j1 - j2.",
                  "Four-bar: F = 9 - 8 = 1; slider-crank: F = 9 - 6 = 1.",
                  "Five-bar: F = 12 - 10 = 2 - needs two inputs.",
                  "Grubler: set F = 1 with lower pairs only to get 3n - 2j - 4 = 0.",
                ],
              },
              {
                q: "How many degrees of freedom does a rigid link have in plane motion, and how many does a link in space have?",
                marks: 2,
              },
              {
                q: "A chain has 6 links and 7 lower pairs. Find F and state what the mechanism needs to be driven properly.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Grashof's law and the four-bar family",
            body: [
              "Label the four links of a four-bar chain by length: s the shortest, l the longest, and p, q the other two. Grashof's law states that for at least one link to make a complete revolution relative to the others, the sum of the shortest and longest links must not exceed the sum of the other two: s + l <= p + q. If the inequality fails, no link can rotate through 360 degrees and the chain is a non-Grashof, or triple-rocker, chain.",
              "For a Grashof chain, the choice of the fixed link decides the machine. Grounding the shortest link gives a double crank, or drag-link, mechanism in which both links pinned to the frame rotate fully. Grounding the link opposite the shortest gives the crank-rocker: the shortest link rotates fully as the crank while the opposite side link merely oscillates - this is the classic motor-driven arrangement. Grounding a link adjacent to the shortest gives a Grashof double rocker in which the coupler (the shortest link) still rotates fully while both end links oscillate. A worked check: s = 100, l = 300, p = 250, q = 200 gives 400 <= 450, so the chain is Grashof.",
              "Quality of motion is judged by the transmission angle, the angle between the coupler and the output link. It is best at 90 degrees, where the coupler pushes the output link with no wasted component; if it falls below about 40 degrees or exceeds about 140 degrees, the force transmission is poor and the mechanism tends to bind. Drag-link mechanisms drive couplings and feeders; crank-rockers drive windscreen wipers, pumps and agitators; double rockers appear in hoists and treadle drives.",
            ],
            bullets: [
              "Grashof's law: at least one link rotates fully only when s + l <= p + q; otherwise the chain is a triple rocker.",
              "Ground the shortest link: drag link (double crank); ground the opposite link: crank-rocker; ground an adjacent link: Grashof double rocker.",
              "Crank-rocker is the standard arrangement for converting continuous rotation into a rocking output.",
              "Transmission angle: keep it between about 40 and 140 degrees for good force transmission.",
              "Applications: drag link for couplings, crank-rocker for wipers and pumps, double rocker for hoists.",
            ],
            codeExample: {
              language: "python",
              caption: "Grashof test for any four-bar chain.",
              code: `def grashof(a, b, c, d):
    lengths = sorted([a, b, c, d])
    s, p, q, l = lengths
    if s + l <= p + q:
        return "Grashof: at least one link rotates fully"
    return "Non-Grashof: no link rotates fully (triple rocker)"

print(grashof(100, 300, 250, 200))   # Grashof
print(grashof(120, 300, 200, 180))   # non-Grashof`,
            },
            diagram: {
              kind: "fork",
              title: "What a Grashof chain becomes",
              caption: "Fix a different link and the same chain changes personality.",
              start: "Grashof chain with s + l <= p + q",
              branches: [
                { label: "Ground the shortest link", outcome: "Drag link (double crank): both side links rotate fully", good: true },
                { label: "Ground the link opposite the shortest", outcome: "Crank-rocker: the classic motor-driven mechanism", good: true },
                { label: "Ground a link adjacent to the shortest", outcome: "Grashof double rocker: coupler rotates, side links oscillate", good: false },
                { label: "Non-Grashof chain (s + l > p + q)", outcome: "Triple rocker: nothing rotates fully", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "State Grashof's law first, test the numbers, then name the mechanism by the grounded link. Marks are lost by saying 'crank-rocker' without saying which link is fixed - the fixity is the whole answer.",
            },
            keyTerms: [
              { term: "Grashof's law", definition: "A four-bar chain has a fully rotating link only if the shortest plus longest link lengths do not exceed the sum of the other two." },
              { term: "Crank-rocker mechanism", definition: "A Grashof four-bar with the link opposite the shortest grounded; input rotates fully, output oscillates." },
              { term: "Transmission angle", definition: "The angle between coupler and output link; best at 90 degrees, poor below about 40 degrees." },
            ],
            examQuestions: [
              {
                q: "State Grashof's law for a four-bar chain. With s, l, p and q defined, classify all Grashof inversions with sketches and give one application of each. Define the transmission angle and its desirable range.",
                marks: 7,
                outline: [
                  "Define s (shortest), l (longest), p and q; state s + l <= p + q for full rotation.",
                  "Ground the shortest: drag link or double crank - coupling drives.",
                  "Ground the link opposite the shortest: crank-rocker - wipers, pumps.",
                  "Ground an adjacent link: Grashof double rocker with rotating coupler.",
                  "Non-Grashof chain: triple rocker, no full rotation.",
                  "Transmission angle: between coupler and follower, best near 90 degrees.",
                  "Keep it within roughly 40 to 140 degrees to avoid binding.",
                ],
              },
              {
                q: "Define the transmission angle of a four-bar mechanism and state its desirable limits.",
                marks: 2,
              },
              {
                q: "A four-bar chain has links of 90, 360, 270 and 270 mm. Test Grashof's law and name the mechanism obtained when the 270 mm link opposite the 90 mm link is grounded.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Inversions of the single slider-crank chain",
            body: [
              "An inversion is not a new chain - it is the same kinematic chain with a different link held fixed. The single slider-crank chain has four links: frame, crank, connecting rod and slider. Fixing each link in turn produces four inversions, and each inversion is a family of familiar machines. This is the single most quoted result of Unit I, and examiners expect all four with sketches and applications.",
              "Fixing the frame gives the reciprocating engine and compressor: the crank rotates, the piston slides, the connecting rod couples them. Fixing the crank gives the second inversion: the Whitworth quick-return mechanism used on shapers and slotters, and the rotary internal combustion engine such as the Gnome aero engine. Fixing the connecting rod gives the third inversion: the oscillating cylinder engine of early marine practice and the crank-and-slotted-lever quick-return mechanism that drives most shaping machines. Fixing the slider gives the fourth inversion: the hand pump and the pendulum pump, or Bull engine.",
              "Quick-return inversions earn their name because the working stroke takes longer than the idle return. The driving crank sweeps a larger angle alpha during cutting and the remaining 360 - alpha on return, so the quick-return ratio is (360 - alpha)/alpha. For alpha = 240 degrees the ratio is 2 - the return takes half the time of the cut. In the slotted-lever mechanism the effective crank radius varies through the cycle, which is why the lever swings faster on one side. Both quick-return drives matter because the cutting stroke of a shaper or slotter needs steady power while the idle stroke is pure lost time, so every second saved on the return is a second of machining gained.",
            ],
            bullets: [
              "Inversion: the same chain with a different link fixed; the single slider-crank chain has exactly four.",
              "First inversion (frame fixed): reciprocating engine and compressor - the piston slides in the fixed cylinder.",
              "Second inversion (crank fixed): Whitworth quick-return and Gnome rotary engine.",
              "Third inversion (connecting rod fixed): oscillating cylinder engine and crank-and-slotted-lever quick return.",
              "Fourth inversion (slider fixed): hand pump and pendulum pump (Bull engine).",
            ],
            table: {
              caption: "The four inversions of the single slider-crank chain.",
              headers: ["Inversion", "Fixed link", "Mechanism obtained", "Typical use"],
              rows: [
                ["First", "Frame", "Reciprocating engine, compressor", "IC engines, air compressors"],
                ["Second", "Crank", "Whitworth quick return; rotary engine", "Shapers, slotters, Gnome engine"],
                ["Third", "Connecting rod", "Oscillating cylinder engine; slotted-lever quick return", "Marine engines, shaping machines"],
                ["Fourth", "Slider", "Hand pump, pendulum pump", "Hand-operated water pumps, Bull engine"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "One chain, four machines",
              caption: "Fix each link of the slider-crank chain in turn and read off the machine.",
              stages: [
                { label: "Fix the frame", note: "reciprocating engine and compressor" },
                { label: "Fix the crank", note: "Whitworth quick return, rotary engine" },
                { label: "Fix the connecting rod", note: "oscillating cylinder, slotted-lever quick return" },
                { label: "Fix the slider", note: "hand pump, pendulum pump" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch strategy",
              body: "Draw the bare slider-crank chain once - frame, crank, rod, slider - then shade a different link for each inversion. Four small shaded figures beat one large messy one, and the fixed link is where the marks sit.",
            },
            keyTerms: [
              { term: "Inversion of a mechanism", definition: "A different machine obtained from the same kinematic chain by fixing a different link." },
              { term: "Quick-return ratio", definition: "The ratio of working-stroke time to return-stroke time, (360 - alpha)/alpha for sweep angle alpha." },
              { term: "Whitworth mechanism", definition: "Second inversion of the slider-crank chain with the crank fixed, used as a quick-return drive." },
            ],
            examQuestions: [
              {
                q: "What is meant by inversion of a mechanism? Explain with neat sketches all four inversions of the single slider-crank chain, giving two applications of each.",
                marks: 7,
                outline: [
                  "Define inversion: same chain, different fixed link.",
                  "Name the four links: frame, crank, connecting rod, slider.",
                  "First inversion, frame fixed: reciprocating engine and compressor.",
                  "Second inversion, crank fixed: Whitworth quick return, rotary IC engine.",
                  "Third inversion, rod fixed: oscillating cylinder engine, slotted-lever quick return.",
                  "Fourth inversion, slider fixed: hand pump, pendulum pump.",
                  "Add one application line under each sketch to secure the marks.",
                ],
              },
              {
                q: "Define the quick-return ratio of a mechanism.",
                marks: 2,
              },
              {
                q: "In a Whitworth quick-return mechanism the crank sweeps 240 degrees during cutting. Find the quick-return ratio and explain why the return stroke is faster.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Steering gears: Davis and Ackermann",
            body: [
              "A cornering car must roll without tyre scrub, which is possible only when every wheel turns about one instantaneous centre. Extend the two front wheel axes backwards: both must meet the rear-axle line at the same point I. Let theta be the inclination of the inner front wheel to the car's longitudinal axis and phi that of the outer wheel; the inner wheel turns through the larger angle, so cot phi exceeds cot theta. Solving the two right triangles at I gives the condition for correct steering, cot(phi) - cot(theta) = a / l, where a is the distance between the kingpin centres and l the wheelbase - often printed as cot(theta) - cot(phi) = a/l, so always define the symbols before substituting.",
              "The Davis gear satisfies this condition at every angle. Each stub axle carries a track arm inclined backward at an angle alpha to the longitudinal axis, and the two arms slide in a track bar, so the mechanism uses sliding pairs. Setting tan(alpha) = a / (2 l) - a small angle, roughly 12 to 14 degrees for a typical car - keeps the cotangent condition satisfied continuously through a turn. The price is friction: sliding joints wear rapidly, need constant lubrication, and the gear has never been popular on production vehicles.",
              "The Ackermann gear keeps every joint a turning pair. Its two short track arms incline inward and join a rigid track rod; the arm angles are set so the cotangent condition holds exactly at one designed turning angle and, by symmetry, its mirror image. Elsewhere the steering is slightly imperfect, but the error is small at road speeds and the all-revolute construction is cheap, robust and sealed - which is why modern cars use it. In the exam, contrast the two gears point by point: exactness, joint type, friction and wear, cost, and application.",
            ],
            bullets: [
              "Correct steering condition: the axes of the two front wheels and the rear-axle line meet at one instantaneous centre I.",
              "Analytic form: cot(phi) - cot(theta) = a / l, with the outer wheel angle phi, inner wheel angle theta, kingpin span a and wheelbase l.",
              "Davis gear: sliding pairs, exact steering at every angle, track-arm inclination tan(alpha) = a / (2 l) - but high friction and wear.",
              "Ackermann gear: all turning pairs, exact only near the designed turn angle, but robust and used on all production cars.",
              "Sketch both gears with the track arms, track bar or rod, kingpins and stub axles labelled.",
            ],
            table: {
              caption: "Davis versus Ackermann steering gear.",
              headers: ["Feature", "Davis gear", "Ackermann gear"],
              rows: [
                ["Joints used", "Sliding pairs between arms and track bar", "All turning pairs with a track rod"],
                ["Exactness", "Correct steering at every angle", "Exact near one design angle only"],
                ["Friction and wear", "High, needs lubrication", "Low, sealed and durable"],
                ["Cost and upkeep", "Higher, maintenance heavy", "Lower, almost maintenance free"],
                ["Application", "Rarely used in practice", "Standard on automobiles"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two routes to correct steering",
              caption: "Davis buys exactness with sliding joints; Ackermann buys durability with approximation.",
              left: {
                heading: "Davis gear",
                items: [
                  "Sliding pairs between arms and track bar",
                  "Geometrically exact at every angle",
                  "Track arms set at tan(alpha) = a / (2 l)",
                  "High friction, rapid wear",
                  "Mostly of academic interest",
                ],
              },
              right: {
                heading: "Ackermann gear",
                items: [
                  "All turning pairs and a rigid track rod",
                  "Exact near one designed angle",
                  "Short arms inclined inward",
                  "Low friction, robust and cheap",
                  "Fitted to every modern car",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Derive the correct-steering condition first from the meeting of the wheel axes at I; the Davis and Ackermann descriptions then hang off it. A comparison table in the answer collects the final two or three marks almost automatically.",
            },
            keyTerms: [
              { term: "Correct steering", definition: "The condition that both front wheel axes meet the rear-axle line at one common instantaneous centre." },
              { term: "Davis steering gear", definition: "An exact steering gear using sliding pairs, with track arms inclined per tan(alpha) = a / (2 l)." },
              { term: "Ackermann steering gear", definition: "An approximate steering gear using only turning pairs, standard on production cars." },
            ],
            examQuestions: [
              {
                q: "State and derive the condition for correct steering of an automobile. Describe the Davis and Ackermann steering gears with sketches and compare them point by point.",
                marks: 7,
                outline: [
                  "Draw the car with front wheel axes produced backwards to meet the rear-axle line at I.",
                  "Mark the inner wheel angle theta and outer wheel angle phi.",
                  "From the two right triangles at I, derive cot(phi) - cot(theta) = a / l.",
                  "Define a as the kingpin-centre distance and l as the wheelbase.",
                  "Davis: sliding pairs, exact at all angles, tan(alpha) = a / (2 l).",
                  "Ackermann: turning pairs, exact near one design angle.",
                  "Compare exactness, joints, friction, cost and application; conclude on usage.",
                ],
              },
              {
                q: "Why does the Ackermann steering gear use turning pairs in preference to the sliding pairs of the Davis gear?",
                marks: 2,
              },
              {
                q: "A car has a wheelbase of 2.6 m and kingpin centres 1.2 m apart. Write the exact-steering equation and find the outer wheel angle when the inner wheel is inclined at 30 degrees.",
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
      title: "Velocity and Acceleration Analysis",
      summary:
        "The graphical toolkit of kinematics: relative-velocity and relative-acceleration polygons, instantaneous centres located with Kennedy's theorem, Klein's construction folded onto the slider-crank configuration diagram, and the Coriolis component that appears whenever a point slides along a rotating link.",
      chapter: {
        number: "02",
        title: "Velocity and Acceleration in Mechanisms",
        intro:
          "Unit II turns drawings into numbers. The relative-velocity polygon gives the speed of every point in a mechanism; the instantaneous-centre method reaches the same ratios with less drawing; Kennedy's theorem locates the centres that inspection cannot; the acceleration polygon adds the normal and tangential components; Klein's construction folds both polygons onto the slider-crank diagram itself; and the Coriolis term completes the picture for sliding-rotating links.",
        inOneBreath:
          "The velocity of a point equals the velocity of a reference point plus a relative velocity perpendicular to the line joining them, and the polygon closes graphically; every link rotates about an instantaneous centre, there are n(n-1)/2 of them, and Kennedy's theorem forces the three centres of three bodies onto one straight line; acceleration adds a normal component v^2/r toward the centre of rotation to a tangential component alpha x r; Klein's construction folds the velocity and acceleration images of a uniformly driven slider-crank onto the configuration diagram, with v_B read as omega times OC; and any point sliding at speed v along a link turning at omega carries a Coriolis acceleration 2 omega v directed by rotating the sliding velocity 90 degrees with the link.",
        sections: [
          {
            number: "2.1",
            title: "Relative velocity method",
            body: [
              "The relative velocity method rests on one idea: the velocity of any point B on a rigid link equals the velocity of a known point A on that link plus the velocity of B relative to A. Because A and B stay a fixed distance apart, the relative velocity must be perpendicular to the line AB - it can only swing the link, not stretch it. So the vector equation v_B = v_A + v_BA has one known vector and two known directions, which is exactly enough to close a triangle.",
              "The working procedure never varies. Draw the configuration diagram to scale. Compute the velocity of the driving crank pin, v = omega x r, and draw it perpendicular to the crank from a pole. From the tip of that vector draw the direction of the relative velocity - perpendicular to the connecting line - and from the pole draw the constrained direction of the driven point, along its guide for a piston or perpendicular to its link for a rocker. The intersection closes the polygon; scale off the lengths. The angular velocity of any link is its relative velocity divided by its length.",
              "As a check, the velocity image property: the velocities of all points on one link, plotted from a common pole, form a figure similar to the link itself, rotated 90 degrees. A worked example sets the scale: crank radius 100 mm at 1200 rpm gives omega = 125.7 rad/s and v_A = 12.57 m/s; with a 400 mm rod at 60 degrees (rod-to-crank ratio 4) the polygon gives a piston speed of about 12.2 m/s. Every later method in this unit is a shortcut to the same numbers.",
            ],
            bullets: [
              "Vector equation: v_B = v_A + v_BA, with v_BA perpendicular to the line joining A and B on the same link.",
              "Driving velocity first: v_A = omega x r, drawn perpendicular to the crank from a convenient pole.",
              "Close the polygon using the constrained directions: piston along the guide, rocker perpendicular to its link.",
              "Angular velocity of a link = relative velocity of its ends divided by the link length.",
              "Velocity image: the velocity figure of one link is similar to the link itself, turned through 90 degrees.",
            ],
            codeExample: {
              language: "python",
              caption: "Piston velocity of a slider-crank solved numerically.",
              code: `import math

r = 0.10      # crank radius, m
l = 0.40      # connecting rod length, m
omega = 2 * math.pi * 1200 / 60   # rad/s at 1200 rpm
theta_deg = 60
theta = math.radians(theta_deg)

# piston position from the loop equations
def piston_x(th):
    return r * math.cos(th) + l * math.cos(math.asin(r * math.sin(th) / l))

x1 = piston_x(theta)
dt = 1e-6
x2 = piston_x(theta + omega * dt)
vB = (x2 - x1) / dt
print(f"piston velocity at {theta_deg} deg = {vB:.2f} m/s")`,
            },
            diagram: {
              kind: "pipeline",
              title: "Building a velocity polygon step by step",
              caption: "The five moves that solve any relative-velocity problem.",
              stages: [
                { label: "Draw the configuration diagram to scale" },
                { label: "Compute the driving velocity", note: "v = omega x r, perpendicular to the crank" },
                { label: "Draw the relative-velocity direction", note: "perpendicular to the link joining the two points" },
                { label: "Close with the constrained direction", note: "piston along its guide, rocker perpendicular to its link" },
                { label: "Scale off and divide by link lengths", note: "gives the angular velocity of every link" },
              ],
            },
            callout: {
              type: "tip",
              title: "Label discipline",
              body: "Every vector in the polygon must carry a magnitude and a direction label such as v_BA = 10 m/s, perpendicular to AB. Examiners award method marks arrow by arrow - an unlabelled polygon can lose half its value even when the numbers are right.",
            },
            keyTerms: [
              { term: "Relative velocity", definition: "The velocity of one point with respect to another, perpendicular to the line joining two points of a rigid link." },
              { term: "Velocity polygon", definition: "The closed vector diagram from which the speed of every point in a mechanism is scaled." },
              { term: "Velocity image", definition: "The figure formed by the velocities of points on one link; similar to the link rotated by 90 degrees." },
            ],
            examQuestions: [
              {
                q: "Explain the relative velocity method for a slider-crank mechanism. Construct the velocity polygon for a 100 mm crank at 1200 rpm with a 400 mm connecting rod at 60 degrees, and find the piston velocity and the angular velocity of the rod.",
                marks: 7,
                outline: [
                  "State v_B = v_A + v_BA and the perpendicularity rule.",
                  "Compute omega = 125.7 rad/s and v_A = 12.57 m/s perpendicular to the crank.",
                  "Draw v_BA perpendicular to the rod from the tip of v_A.",
                  "Draw v_B along the line of stroke from the pole; intersect to close.",
                  "Scale: v_B is about 12.2 m/s; v_BA gives the rod's angular velocity by dividing by 0.4 m.",
                  "Verify with the velocity image of the rod.",
                  "State the direction sense of the rod rotation.",
                ],
              },
              {
                q: "State the direction of the relative velocity of two points on the same rigid link, and why.",
                marks: 2,
              },
              {
                q: "What is the velocity image of a link? Prove it is similar to the link itself.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Instantaneous centres and Kennedy's theorem",
            body: [
              "At any instant, a link moving in a plane rotates about some point called its instantaneous centre of velocity - the point of the link (or its extension) that is momentarily at rest. A mechanism of n links contains N = n(n - 1)/2 such centres, one for each pair of links. Centres at permanent pins are obvious: the pin joining two links is their I-centre. A link pinned to the frame has its fixed I-centre at that pin; a wheel rolling without slip has its I-centre with the ground at the contact point.",
              "Centres that inspection cannot find come from Kennedy's (Aronhold-Kennedy) theorem: for three bodies moving relative to each other, their three instantaneous centres lie on one straight line. The proof is by contradiction - if the three centres formed a triangle, the velocity of the common point implied by two centres would disagree with the third, which is impossible for rigid bodies. In a four-bar chain, the centre of the coupler relative to the frame lies at the intersection of the line through the two fixed pivots with the line through the two moving-pin centres - two applications of the theorem.",
              "I-centres pay off in velocity ratios without any polygon. The speed of any point equals its distance from that link's I-centre multiplied by the link's angular velocity; two points on links sharing an I-centre have speeds in the ratio of their distances from it. For a quick example, if the crank pin of a mechanism sweeps 0.5 m/s at 10 rad/s, it sits 50 mm from the crank's fixed centre, and the rocker speed follows from its distance to the common centre. Drawing all centres on a circle through them keeps the bookkeeping honest.",
            ],
            bullets: [
              "Instantaneous centre: the point about which a link rotates at a given instant, where its velocity is zero.",
              "Number of I-centres: N = n(n - 1)/2 - four links give six, six links give fifteen.",
              "Kennedy's theorem: the three I-centres of any three moving bodies are collinear.",
              "Obvious centres sit at pins (revolute joints) and rolling contact points; the rest follow from two applications of Kennedy.",
              "Velocity ratio of two links = ratio of distances of their points from the common I-centre.",
            ],
            table: {
              caption: "How many instantaneous centres to expect.",
              headers: ["Links n", "I-centres N = n(n-1)/2", "Typical mechanism"],
              rows: [
                ["3", "3", "Cam with a knife-edge follower and frame"],
                ["4", "6", "Four-bar chain; single slider-crank"],
                ["5", "10", "Cam with a roller follower on a push rod"],
                ["6", "15", "Quick-return and multi-link press mechanisms"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Locating every I-centre of a mechanism",
              caption: "Inspection first, Kennedy second, velocity ratios last.",
              steps: [
                { label: "Count links: N = n(n-1)/2 centres exist" },
                { label: "Mark the obvious centres by inspection", note: "pins and rolling contacts" },
                { label: "Apply Kennedy's theorem for the rest", note: "three bodies, three collinear centres" },
                { label: "Draw a circle through all centres to keep track", note: "no centre left unaccounted" },
                { label: "Use a common centre for velocity ratios", note: "v = omega x distance from the centre" },
              ],
            },
            callout: {
              type: "warning",
              title: "Kennedy gives a line, not a point",
              body: "One application of Kennedy's theorem yields only a straight line on which the unknown centre lies. You need two such lines - two different triplets of bodies - and the centre is their intersection. Candidates who mark a single line and stop lose the final marks of the question.",
            },
            keyTerms: [
              { term: "Instantaneous centre", definition: "The point about which a body rotates at a given instant, having zero velocity at that moment." },
              { term: "Kennedy's theorem", definition: "For three bodies in relative motion, their three instantaneous centres lie on one straight line." },
              { term: "Centrode", definition: "The locus of the instantaneous centre of a body as the mechanism moves through its cycle." },
            ],
            examQuestions: [
              {
                q: "State Kennedy's theorem and prove it. Locate all six instantaneous centres of a four-bar chain and explain how the centre of the coupler relative to the frame yields the velocity ratio between crank and rocker.",
                marks: 7,
                outline: [
                  "Define an instantaneous centre; N = n(n-1)/2 = 6 for four links.",
                  "State Kennedy: three bodies - three collinear I-centres.",
                  "Prove by contradiction with the velocity of the common point.",
                  "Mark the four pin centres by inspection.",
                  "Coupler-frame centre: intersect the line of fixed pivots with the line of moving pins.",
                  "Speed of any point = omega x distance from its centre.",
                  "Velocity ratio = distance ratio measured from the common centre.",
                ],
              },
              {
                q: "How many instantaneous centres does a mechanism with six links have?",
                marks: 2,
              },
              {
                q: "Distinguish between a fixed instantaneous centre and a permanent instantaneous centre, with one example of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Relative acceleration method",
            body: [
              "Acceleration analysis repeats the velocity logic with one extra wrinkle: the relative acceleration of two points on a link splits into two components. The normal (centripetal) component has magnitude v^2 divided by the link length - equivalently omega^2 r - and is directed from the point toward the centre of rotation, along the link. The tangential component has magnitude alpha x r, is perpendicular to the link, and exists only when the link's angular velocity is changing.",
              "The polygon is built in a fixed order. Start with the driving crank pin: its acceleration is omega^2 r toward the crank centre (plus alpha r perpendicular if the crank accelerates). Then lay off the relative normal component of the driven point, magnitude v_BA^2 divided by AB, drawn along the rod toward the crank pin; its value must be known from the velocity polygon, which is why velocity always precedes acceleration. The tangential component follows as a direction only - perpendicular to the rod - and the polygon closes along the constrained direction of the driven point, along the stroke for a piston.",
              "Numbers make it concrete. With crank radius 100 mm at 1200 rpm and a rod four cranks long at 60 degrees, the classical piston acceleration formula a = omega^2 r (cos theta + cos 2 theta / n) gives about 592 m/s^2, the polygon agreeing within drawing accuracy. The tangential component scaled from the polygon, divided by the rod length, is the rod's angular acceleration. One caution: the normal component points toward the centre of relative rotation - reversing it is the most common single error in exams.",
            ],
            bullets: [
              "Relative acceleration = normal component + tangential component of one point with respect to the other.",
              "Normal component: magnitude v^2 / length (or omega^2 r), directed along the link toward the other point.",
              "Tangential component: magnitude alpha x r, perpendicular to the link, present only when omega changes.",
              "Build order: crank-pin acceleration, relative normal, relative tangential direction, constrained output direction.",
              "Piston check formula: a = omega^2 r (cos theta + cos 2 theta / n) with n the rod-to-crank ratio.",
            ],
            codeExample: {
              language: "python",
              caption: "Piston acceleration through the crank circle.",
              code: `import math

r = 0.10      # crank radius, m
n = 4.0       # rod length / crank radius
N = 1200      # rpm
omega = 2 * math.pi * N / 60

print("theta (deg)   a_piston (m/s^2)")
for deg in (0, 30, 60, 90, 120, 180):
    th = math.radians(deg)
    a = omega**2 * r * (math.cos(th) + math.cos(2 * th) / n)
    print(f"{deg:>11}   {a:9.1f}")`,
            },
            diagram: {
              kind: "flow",
              title: "Assembling the acceleration polygon",
              caption: "The order of vectors decides whether the polygon closes.",
              steps: [
                { label: "Compute the driving acceleration", note: "omega^2 x r toward the crank centre" },
                { label: "Add the relative normal component", note: "v^2 / AB along the rod toward the crank pin" },
                { label: "Add the tangential component as a direction", note: "perpendicular to the rod, unknown length" },
                { label: "Draw the constrained output direction", note: "piston acceleration along the line of stroke" },
                { label: "Close and scale", note: "tangential length / rod length = angular acceleration" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The normal component always points toward the centre of relative rotation - from the piston pin toward the crank pin along the rod. Write its magnitude from the finished velocity polygon before touching the acceleration polygon, and the biggest mark-killer in Unit II disappears.",
            },
            keyTerms: [
              { term: "Normal acceleration", definition: "The component v^2/r directed along a link toward the centre of relative rotation." },
              { term: "Tangential acceleration", definition: "The component alpha x r perpendicular to the link, arising from angular acceleration." },
              { term: "Acceleration polygon", definition: "The closed vector diagram giving the acceleration of every point in a mechanism." },
            ],
            examQuestions: [
              {
                q: "Explain the two components of relative acceleration between points of a rigid link. Construct the acceleration polygon for a slider-crank mechanism and hence obtain the piston acceleration and the angular acceleration of the connecting rod.",
                marks: 7,
                outline: [
                  "Define normal and tangential components with magnitudes and directions.",
                  "State the vector equation a_B = a_A + a_BA^n + a_BA^t.",
                  "Compute a_A = omega^2 r along the crank toward its centre.",
                  "Compute a_BA^n = v_BA^2 / AB along the rod toward A.",
                  "Draw a_BA^t perpendicular to the rod and a_B along the stroke.",
                  "Close the polygon; scale a_B for the piston.",
                  "Divide the tangential component by AB for the rod's angular acceleration.",
                ],
              },
              {
                q: "State the magnitude and direction of the normal component of the relative acceleration of two points on a link.",
                marks: 2,
              },
              {
                q: "Show that the piston acceleration at the inner dead centre of a slider-crank mechanism equals omega^2 r (1 + 1/n).",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Klein's construction",
            body: [
              "Klein's construction is a drafting shortcut for the slider-crank mechanism: it folds the velocity and acceleration diagrams onto the configuration diagram itself, so one drawing answers both questions. It applies to a uniformly rotating crank - no crank angular acceleration - and to the single slider-crank chain only. For a crank OA, connecting rod AB and line of stroke through the crank centre O, the construction proceeds in two folds.",
              "The velocity fold first. Through the crank pin A draw a line parallel to the connecting rod; through O draw a perpendicular to the line of stroke. They meet at C. The triangle OAC is the velocity polygon rotated 90 degrees and scaled by 1/omega: OA represents v_A, OC represents the piston velocity v_B, and AC represents the relative velocity v_BA - each multiplied back by omega. The acceleration fold then superimposes the acceleration image on the same figure using an auxiliary circle construction; the normal component of the rod's relative acceleration appears as the length AC squared divided by AB, laid along the rod direction, and the piston acceleration is finally read off the line of stroke as omega^2 times a folded length.",
              "The payoff is speed: one configuration diagram replaces two polygons, which is why the construction is a fixture of RGPV papers. The checks are equally quick - the analytic formulas v_B = omega r (sin theta + sin 2 theta / 2n) and a_B = omega^2 r (cos theta + cos 2 theta / n) should agree with the scaled lengths. The limitations are the assumption of uniform crank speed and the accuracy of the drawing itself, which is why examiners pair the construction with the analytic expressions.",
            ],
            bullets: [
              "Klein's construction draws velocity and acceleration diagrams directly on the slider-crank configuration diagram.",
              "Velocity fold: through A a line parallel to the rod, through O a perpendicular to the stroke; they meet at C.",
              "Read velocities as omega times OA, OC and AC - the image is the polygon rotated 90 degrees and scaled by 1/omega.",
              "Acceleration fold: normal component appears as AC squared over AB along the rod; piston acceleration = omega^2 times the stroke-line length.",
              "Valid only for a slider-crank chain driven at uniform angular velocity.",
            ],
            table: {
              caption: "Reading Klein's construction.",
              headers: ["Quantity", "Folded length on the drawing", "Multiply by", "Result"],
              rows: [
                ["Velocity of crank pin A", "OA", "omega", "v_A"],
                ["Velocity of piston B", "OC", "omega", "v_B"],
                ["Relative velocity of B w.r.t. A", "AC", "omega", "v_BA"],
                ["Piston acceleration", "stroke-line segment from the acceleration fold", "omega^2", "a_B"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Klein's construction in two folds",
              caption: "One configuration diagram, both polygons.",
              stages: [
                { label: "Draw the configuration diagram", note: "crank OA, rod AB, stroke line through O" },
                { label: "Velocity fold", note: "line through A parallel to AB meets the stroke-perpendicular at C" },
                { label: "Read velocities", note: "v_A, v_B and v_BA are omega times OA, OC and AC" },
                { label: "Acceleration fold", note: "auxiliary circle; normal component = AC^2 / AB along the rod" },
                { label: "Read accelerations", note: "multiply the folded lengths by omega^2" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Klein's construction appears in some form almost every year. Practise until the velocity fold takes under three minutes and always state the assumption - uniform crank speed - in the first line, because it carries a mark of its own.",
            },
            keyTerms: [
              { term: "Klein's construction", definition: "A graphical method folding the velocity and acceleration diagrams of a slider-crank onto its configuration diagram." },
              { term: "Line of stroke", definition: "The straight guide line along which the piston or slider of the mechanism moves." },
              { term: "Configuration diagram", definition: "The skeleton drawing of a mechanism showing links and joints to scale at a given instant." },
            ],
            examQuestions: [
              {
                q: "Describe Klein's construction for the slider-crank mechanism with a uniformly rotating crank. Show how the piston velocity and acceleration are obtained, and state the assumptions and limitations of the method.",
                marks: 7,
                outline: [
                  "State the purpose: both polygons folded onto the configuration diagram.",
                  "Assumption: crank rotates at uniform omega; single slider-crank chain only.",
                  "Velocity fold: line through A parallel to the rod, perpendicular to the stroke through O, meet at C.",
                  "v_A = omega(OA), v_B = omega(OC), v_BA = omega(AC).",
                  "Acceleration fold with the auxiliary circle; normal component AC^2/AB along the rod.",
                  "Piston acceleration = omega^2 times the stroke-line length.",
                  "Cross-check with v = omega r(sin theta + sin 2 theta/2n) and a = omega^2 r(cos theta + cos 2 theta/n).",
                ],
              },
              {
                q: "State the fundamental assumption on which Klein's construction is based.",
                marks: 2,
              },
              {
                q: "How is the folded velocity triangle of Klein's construction related to the ordinary velocity polygon?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Coriolis acceleration component",
            body: [
              "Whenever a point slides along a path that is itself rotating, an extra acceleration appears that neither the normal nor the tangential component can supply: the Coriolis component, magnitude 2 omega v, where omega is the angular velocity of the rotating path and v the sliding velocity of the point along it. The factor of two arises because the sliding contributes twice - once through the change in direction of the sliding velocity and once through the transport velocity of the point's changing position on the link.",
              "Direction is the exam favourite: rotate the sliding-velocity vector through 90 degrees in the same sense in which the link itself rotates. If the link turns anticlockwise, the Coriolis vector is the sliding velocity rotated 90 degrees anticlockwise. The classic hosts are the quick-return drives: in the crank-and-slotted-lever mechanism the slider rides in the slotted lever while the lever swings, so the slider's absolute acceleration contains 2 omega v of the lever at the sliding point; the Whitworth mechanism produces the same term on its rotating arm.",
              "A worked feel for the size: a link rotating at 10 rad/s carrying a slider moving outward at 2 m/s has a Coriolis component of 2 x 10 x 2 = 40 m/s^2, directed perpendicular to the slot with the sense of rotation. The term vanishes when either factor vanishes - a point fixed on the link (v = 0) or a slide along a non-rotating guide (omega = 0). In a plain slider-crank, the piston slides in the stationary frame, so no Coriolis term appears - a favourite two-mark discriminator.",
            ],
            bullets: [
              "Coriolis component magnitude: a_c = 2 omega v, with omega the rotation of the carrying link and v the sliding speed along it.",
              "Direction rule: rotate the sliding-velocity vector 90 degrees in the sense of the link's angular velocity.",
              "It appears in crank-and-slotted-lever and Whitworth quick-return mechanisms.",
              "It vanishes when v = 0 (point fixed on the link) or when omega = 0 (slide along a non-rotating guide).",
              "Omitting the factor 2 or flipping the sense is the classic exam error - label the term explicitly in the polygon.",
            ],
            table: {
              caption: "When the Coriolis component appears.",
              headers: ["Situation", "Coriolis component"],
              rows: [
                ["Slider moving along a rotating slotted link", "2 omega v, present"],
                ["Point fixed on the rotating link (v = 0)", "Zero"],
                ["Sliding along a stationary guide (omega = 0)", "Zero"],
                ["Two points on one rigid link", "Zero - no sliding between them"],
                ["Piston of a plain slider-crank in its frame", "Zero - the guide does not rotate"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Coriolis or not?",
              caption: "Two ingredients are needed: sliding along a path that rotates.",
              left: {
                heading: "Coriolis appears",
                items: [
                  "Slider riding in a rotating slotted lever",
                  "Crank-and-slotted-lever quick return",
                  "Whitworth quick-return mechanism",
                  "Piston sliding in a rotating cylinder",
                  "a_c = 2 omega v perpendicular to the slide",
                ],
              },
              right: {
                heading: "No Coriolis",
                items: [
                  "Slider in a stationary guide",
                  "Pure rotation with no sliding (v = 0)",
                  "Sliding without rotation (omega = 0)",
                  "Two points on one rigid link",
                  "Scotch yoke: the slot translates, it does not rotate",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Direction discipline",
              body: "The Coriolis vector is the sliding velocity rotated 90 degrees in the sense of rotation of the link - not the sense of sliding. Draw the sliding-velocity arrow first, rotate it with a small curved arrow showing the link's omega, and transfer the result to the acceleration polygon.",
            },
            keyTerms: [
              { term: "Coriolis acceleration", definition: "The component 2 omega v arising when a point slides along a rotating path." },
              { term: "Sliding velocity", definition: "The velocity of a point relative to the link along which it slides." },
              { term: "Sense of rotation", definition: "The clockwise or anticlockwise direction of a link's angular velocity, which fixes the Coriolis direction." },
            ],
            examQuestions: [
              {
                q: "Explain the origin of the Coriolis component of acceleration, derive its magnitude 2 omega v, and show where it appears in the acceleration analysis of a crank-and-slotted-lever quick-return mechanism.",
                marks: 7,
                outline: [
                  "Set up a point sliding with velocity v along a link rotating at omega.",
                  "Differentiate the absolute velocity of the point; two terms each contain omega times v.",
                  "Combine to obtain a_c = 2 omega v perpendicular to the sliding direction.",
                  "Direction rule: rotate v through 90 degrees in the sense of omega.",
                  "In the slotted-lever mechanism, the slider moves along the swinging lever.",
                  "Add 2 omega v to the slider's acceleration polygon at the sliding point.",
                  "State when the term vanishes: omega = 0 or v = 0.",
                ],
              },
              {
                q: "State the magnitude and direction rule for the Coriolis acceleration component.",
                marks: 2,
              },
              {
                q: "Why does the acceleration analysis of a simple slider-crank mechanism contain no Coriolis component?",
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
      title: "Cams and Followers",
      summary:
        "From cam and follower classification and terminology, through displacement diagrams for uniform-velocity, parabolic, SHM and cycloidal motions, to the graphical layout of a cam profile - with the pressure angle and undercutting as the design checks that keep the follower from jamming.",
      chapter: {
        number: "03",
        title: "Cams and Followers",
        intro:
          "Unit III is the art of programming motion. The cam is a rotating surface whose profile encodes a schedule of rises, dwells and returns; the displacement diagram is that schedule drawn as a graph; the choice of motion law - uniform velocity, parabolic, simple harmonic or cycloidal - decides the velocity, acceleration and jerk the follower feels; and the profile is finally constructed point by point from the diagram, watched over by the pressure angle and the undercutting check.",
        inOneBreath:
          "A cam is a rotating machine element that imparts a scheduled motion to a follower - knife-edge, roller, flat-faced or spherical, radial or offset, spring-loaded or positively closed; the displacement diagram plots follower lift against cam angle, and uniform velocity gives constant speed but infinite acceleration at the ends, parabolic motion gives constant acceleration with jerk spikes at three points, SHM gives a_max = 4.93 L omega^2/beta^2 at the ends, and cycloidal motion gives a_max = 6.28 L omega^2/beta^2 at the quarter points with zero acceleration and finite jerk at the boundaries, which is why high-speed cams are cycloidal; the profile is laid out by dividing the base circle to match the displacement diagram, transferring lifts along radial or offset lines to trace the pitch curve and rolling the follower to its envelope; and the design is judged by a pressure angle kept under about 30 degrees and by an undercutting check that the roller radius stay smaller than the pitch curve's smallest radius of curvature.",
        sections: [
          {
            number: "3.1",
            title: "Types of cams and followers",
            body: [
              "A cam is a rotating, oscillating or translating machine element with a curved profile that imparts a specified motion to a second element, the follower, which remains in contact with it. The pair converts rotary input into reciprocating or oscillating output, and because the output schedule can be shaped almost arbitrarily, cam-follower systems run engine valves, textile looms, printing presses, machine-tool autoloaders and switches.",
              "Followers are classified along three axes. By shape: the knife-edge follower is simplest and wears fastest; the roller follower replaces sliding with rolling contact and suits moderate speeds; the flat-faced follower carries load across a surface with minimal side thrust and suits high-speed engine work; the spherical or mushroom follower rounds the face to reduce edge wear. By motion: translating (reciprocating) or oscillating. By line of action: radial, whose axis passes through the cam centre, or offset, displaced sideways. By constraint: gravity or spring loading - a force-closed pair - or a positive drive such as a grooved cam that traps the follower.",
              "Terminology to memorise now, because the profile construction of Section 3.4 depends on it: the trace point is the theoretical contact point of a knife-edge follower, or the centre of a roller; the pitch curve is the path of the trace point; the base circle is the smallest circle tangent to the cam profile; the prime circle is the smallest circle centred on the cam axis and tangent to the pitch curve - base circle radius plus follower radius; the pressure angle measures the lean of the contact force; the lift or stroke is the total follower displacement.",
            ],
            bullets: [
              "Cam: a machine element whose profile prescribes the follower's motion; follower: the driven element in contact with it.",
              "Follower shapes: knife-edge (fastest wear), roller (rolling contact), flat-faced (low side thrust, high speed), spherical.",
              "Radial follower: axis through the cam centre; offset follower: axis displaced - it changes the pressure angle.",
              "Constraint: spring or gravity loading is force-closed; a grooved cam gives a positive drive.",
              "Base circle touches the profile; prime circle (base + roller radius) touches the pitch curve through the trace point.",
            ],
            table: {
              caption: "Follower shapes compared.",
              headers: ["Follower", "Contact", "Merits", "Drawbacks", "Typical use"],
              rows: [
                ["Knife-edge", "Point", "Simple to draw and analyse", "Rapid wear at speed", "Slow demonstration cams"],
                ["Roller", "Line, rolling", "Low friction and wear", "Heavier; roller size limits", "Most general-purpose cams"],
                ["Flat-faced", "Surface", "Lowest side thrust, high speed", "Needs a wider face; no roller", "IC engine valve gear"],
                ["Spherical (mushroom)", "Point, rounded", "Less edge wear than knife-edge", "Still point contact", "Small petrol engines"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Classifying a cam-follower system",
              caption: "Five independent questions, one complete classification.",
              layers: [
                { label: "Cam form", note: "disc or plate, cylindrical, wedge or translating" },
                { label: "Follower shape", note: "knife-edge, roller, flat-faced, spherical" },
                { label: "Follower motion", note: "reciprocating or oscillating" },
                { label: "Follower alignment", note: "radial or offset to the cam axis" },
                { label: "Constraint", note: "spring or gravity loading, or a positive grooved cam" },
              ],
            },
            callout: {
              type: "tip",
              title: "Label discipline",
              body: "In classification sketches, always label the base circle, trace point and prime circle. These three names carry separate marks, and unlabeled circles in a cam drawing are the cheapest marks lost in Unit III.",
            },
            keyTerms: [
              { term: "Base circle", definition: "The smallest circle drawn from the cam centre tangent to the cam profile." },
              { term: "Pitch curve", definition: "The path traced by the trace point (follower centre for a roller) as the cam rotates." },
              { term: "Pressure angle", definition: "The angle between the normal to the cam profile at contact and the follower's line of motion." },
            ],
            examQuestions: [
              {
                q: "Classify cams and followers with neat sketches, defining the base circle, trace point, pitch curve, prime circle and pressure angle.",
                marks: 7,
                outline: [
                  "Define cam and follower and state two applications.",
                  "Cam forms: radial or plate, cylindrical, wedge.",
                  "Follower shapes: knife-edge, roller, flat-faced, spherical - one merit each.",
                  "Follower motion: reciprocating and oscillating.",
                  "Alignment: radial versus offset.",
                  "Define base circle, trace point, pitch curve, prime circle.",
                  "Define pressure angle and name the layers of classification on a sketch.",
                ],
              },
              {
                q: "Distinguish between the pitch curve and the cam profile of a roller follower.",
                marks: 2,
              },
              {
                q: "Why are roller followers preferred over knife-edge followers in most machinery?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Displacement diagrams: uniform velocity and parabolic motion",
            body: [
              "The displacement diagram is the cam's job description: follower displacement plotted against cam angle, with rise, dwell and return segments. Every cam profile is built from it, so its shape - not just its height - decides how smoothly the follower moves. The simplest law is uniform velocity: displacement grows linearly with angle, s = L theta / beta for lift L over cam angle beta, so velocity is constant at L omega / beta and the graph is a straight line.",
              "The straight line hides a violence. At the start and end of the rise the velocity jumps from zero to full value in an instant, implying infinite acceleration, infinite inertia force and an impact on the follower - fine for slow hand-operated cams, unacceptable at speed. The modified uniform-velocity diagram rounds the corners of the straight line with arcs, easing the jumps, but the accelerations remain severe. The textbook cure is parabolic or constant-acceleration motion: displacement follows parabolas, acceleration is a constant +a over the first half and -a over the second, and velocity peaks at 2 L omega / beta at mid-rise.",
              "Parabolic motion brings its own disease: jerk - the rate of change of acceleration - is infinite at the start, the middle and the end of the stroke, where the acceleration steps between values. Peak acceleration is 4 L omega^2 / beta^2. For slow and moderate cams this is acceptable, and the parabolic law has the lowest peak acceleration of any smooth law; but the next section's sine-based laws fix the jerk and take over at high speed.",
            ],
            bullets: [
              "Displacement diagram: follower lift versus cam angle, segmented into rise, dwell and return.",
              "Uniform velocity: s = L theta / beta, constant velocity L omega / beta, straight-line graph.",
              "Its defect: infinite acceleration at the ends - the follower suffers impact loading.",
              "Modified uniform velocity: arcs blend the line ends, taming but not removing the spikes.",
              "Parabolic motion: constant acceleration, v_max = 2 L omega / beta, a_max = 4 L omega^2 / beta^2, jerk infinite at three points.",
            ],
            codeExample: {
              language: "python",
              caption: "Uniform-velocity and parabolic rises tabulated.",
              code: `L = 20.0     # lift, mm
beta = 90.0  # cam angle for the rise, deg

print("fraction   uniform s (mm)   parabolic s (mm)")
for frac in (0.0, 0.25, 0.5, 0.75, 1.0):
    s_u = L * frac                      # uniform velocity
    if frac <= 0.5:                     # parabolic: accelerate
        s_p = 2 * L * frac**2
    else:                               # parabolic: decelerate
        s_p = L * (1 - 2 * (1 - frac)**2)
    print(f"{frac:>8}   {s_u:>14.1f}   {s_p:>16.1f}")`,
            },
            diagram: {
              kind: "pipeline",
              title: "From displacement diagram to dynamic verdict",
              caption: "Differentiate twice before trusting any motion law.",
              stages: [
                { label: "Divide the cam angle into segments", note: "rise, dwell, return" },
                { label: "Plot the chosen displacement law" },
                { label: "Differentiate for the velocity curve" },
                { label: "Differentiate again for acceleration" },
                { label: "Check jerk before committing to a profile", note: "infinite jerk means impact loading" },
              ],
            },
            callout: {
              type: "warning",
              title: "Criticise, do not just draw",
              body: "When a paper asks for the uniform-velocity diagram, the marks sit in the criticism: velocities jump at the ends, acceleration is theoretically infinite, so the law is unfit for high speed and must be modified or replaced. Write the criticism even if the question forgets to ask for it.",
            },
            keyTerms: [
              { term: "Displacement diagram", definition: "The graph of follower displacement against cam angle for a complete cam cycle." },
              { term: "Dwell", definition: "A period during which the follower holds its position while the cam rotates." },
              { term: "Jerk", definition: "The rate of change of acceleration with time; infinite jerk implies impact loading." },
            ],
            examQuestions: [
              {
                q: "Draw the displacement, velocity and acceleration diagrams for a follower moving with uniform velocity and with parabolic (constant acceleration) motion. Discuss the drawbacks of each and the need for modification.",
                marks: 7,
                outline: [
                  "Define the displacement diagram and its rise-dwell-return segments.",
                  "Uniform velocity: straight-line displacement, constant velocity.",
                  "Show the velocity jumps at the ends give infinite acceleration.",
                  "Mention the modified uniform-velocity diagram with end arcs.",
                  "Parabolic: two parabolas, constant acceleration then deceleration.",
                  "Give v_max = 2 L omega/beta and a_max = 4 L omega^2/beta^2.",
                  "Conclude: jerk infinite at three points; move to SHM or cycloidal for speed.",
                ],
              },
              {
                q: "Define dwell as used in cam diagrams.",
                marks: 2,
              },
              {
                q: "Why is uniform-velocity follower motion unsuitable at high cam speeds, and how is it modified?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Simple harmonic and cycloidal motions",
            body: [
              "Simple harmonic motion dresses the rise as half a cosine. With lift L over cam angle beta and cam speed omega, s = (L/2)(1 - cos(pi theta / beta)), velocity is v = (pi L omega / 2 beta) sin(pi theta / beta), peaking at 1.571 L omega / beta at mid-rise, and acceleration is a = (pi^2 / 2)(L omega^2 / beta^2) cos(pi theta / beta), peaking at 4.93 L omega^2 / beta^2 at the two ends of the stroke.",
              "The cycloidal law is the high-speed champion: s = L(theta / beta - sin(2 pi theta / beta) / 2 pi). Velocity peaks at 2 L omega / beta at mid-rise; acceleration peaks at 6.28 L omega^2 / beta^2 at the quarter points and - crucially - passes through zero at both ends of the stroke, so the follower starts and finishes its motion with no acceleration jump at all. Jerk stays finite everywhere, which removes the impact that plagues every other law.",
              "The comparison table is the exam takeaway. Uniform velocity has the lowest nominal peak velocity but infinite end accelerations; parabolic has the lowest peak acceleration (4.0) but three jerk spikes; SHM raises peak acceleration to 4.93 with jumps only at the ends; cycloidal pays the highest peak acceleration, 6.28, to buy finite jerk throughout. For automobile and high-speed machine cams, the cycloidal law is the default choice precisely because smoothness at the boundaries, not the peak value, decides durability. Whenever a question leaves the motion law open, justify the choice in exactly these terms - peak acceleration against boundary jerk - and the evaluation marks follow.",
            ],
            bullets: [
              "SHM displacement: s = (L/2)(1 - cos(pi theta / beta)); v_max = 1.571 L omega / beta at mid-rise.",
              "SHM acceleration peaks at 4.93 L omega^2 / beta^2 at the ends of the stroke.",
              "Cycloidal displacement: s = L(theta/beta - sin(2 pi theta / beta) / 2 pi); v_max = 2 L omega / beta.",
              "Cycloidal acceleration peaks at 6.28 L omega^2 / beta^2 at the quarter points and is zero at both ends.",
              "Cycloidal motion keeps jerk finite everywhere - the standard choice for high-speed cams.",
            ],
            table: {
              caption: "Peak velocity and acceleration coefficients (multiply by L omega / beta and L omega^2 / beta^2).",
              headers: ["Motion law", "v_max", "a_max", "Jerk", "Suitability"],
              rows: [
                ["Uniform velocity", "1.000", "Infinite", "Infinite", "Never at speed"],
                ["Parabolic", "2.000", "4.000", "Infinite at 3 points", "Low speed"],
                ["Simple harmonic", "1.571", "4.930", "Spike at the ends", "Moderate speed"],
                ["Cycloidal", "2.000", "6.280", "Finite throughout", "High speed"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "SHM and cycloidal curves side by side.",
              code: `import math

L = 20.0                       # lift, mm
beta = math.radians(90.0)      # rise angle

def shm(th):
    s = L/2 * (1 - math.cos(math.pi * th / beta))
    v = L/2 * (math.pi / beta) * math.sin(math.pi * th / beta)
    a = L/2 * (math.pi / beta)**2 * math.cos(math.pi * th / beta)
    return s, v, a

def cycloidal(th):
    s = L * (th/beta - math.sin(2*math.pi*th/beta) / (2*math.pi))
    v = L / beta * (1 - math.cos(2*math.pi*th/beta))
    a = 2*math.pi*L / beta**2 * math.sin(2*math.pi*th/beta)
    return s, v, a

# per unit cam angle; multiply v by omega and a by omega^2
print(f"SHM at mid-rise: {shm(beta/2)}")
print(f"cycloidal at mid-rise: {cycloidal(beta/2)}")`,
            },
            diagram: {
              kind: "compare",
              title: "SHM versus cycloidal",
              caption: "Cycloidal pays a higher peak acceleration for zero acceleration at the ends.",
              left: {
                heading: "Simple harmonic motion",
                items: [
                  "s = (L/2)(1 - cos(pi·theta/beta))",
                  "v_max = 1.571 L omega/beta at mid-rise",
                  "a_max = 4.93 L omega^2/beta^2 at the ends",
                  "Acceleration jumps at start and finish",
                  "Good for moderate speeds",
                ],
              },
              right: {
                heading: "Cycloidal motion",
                items: [
                  "s = L(theta/beta - sin(2·pi·theta/beta)/2·pi)",
                  "v_max = 2 L omega/beta at mid-rise",
                  "a_max = 6.28 L omega^2/beta^2 at quarter points",
                  "Zero acceleration at the ends - no jump",
                  "Preferred for high-speed cams",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Memorise the four coefficient pairs - (1, infinite), (2, 4), (1.571, 4.93), (2, 6.28). A 'compare the motion laws' question is worth seven marks and is answered almost entirely by that table plus one sentence on jerk.",
            },
            keyTerms: [
              { term: "Simple harmonic motion (cam)", definition: "A follower motion whose displacement follows a cosine law, s = (L/2)(1 - cos(pi theta/beta))." },
              { term: "Cycloidal motion", definition: "A follower motion generated by a point on a rolling circle, with zero acceleration at the stroke ends." },
              { term: "Jerk (cam design)", definition: "The rate of change of acceleration; finite jerk is the reason cycloidal motion suits high speeds." },
            ],
            examQuestions: [
              {
                q: "Derive the displacement, velocity and acceleration expressions for a follower with simple harmonic motion, and compare SHM with cycloidal motion for high-speed cam applications.",
                marks: 7,
                outline: [
                  "Set up the rise: lift L over cam angle beta at speed omega.",
                  "Assume SHM: s = (L/2)(1 - cos(pi theta/beta)).",
                  "Differentiate for v and a; quote v_max = 1.571 L omega/beta.",
                  "Quote a_max = 4.93 L omega^2/beta^2 at the ends.",
                  "Present cycloidal equations: s, v_max = 2 L omega/beta, a_max = 6.28.",
                  "Note cycloidal zero acceleration at stroke ends, finite jerk.",
                  "Conclude: cycloidal preferred at high speed despite higher peak acceleration.",
                ],
              },
              {
                q: "State the maximum velocity and maximum acceleration for cycloidal follower motion.",
                marks: 2,
              },
              {
                q: "Why is cycloidal motion preferred over SHM for high-speed cams even though its peak acceleration is higher?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Cam profile layout",
            body: [
              "The displacement diagram is the program; the profile is the hardware. Graphical layout transfers the program onto the cam blank. Draw the base circle and the follower in its lowest position. Divide the base circle into exactly the same angular intervals used on the displacement diagram - twelve or sixteen divisions is usual - and number them in the direction opposite to the cam's rotation, because the profile must meet the follower as the cam turns.",
              "For a knife-edge follower, mark the follower displacement along each radial line outward from the base circle and fair a smooth curve through the points: that curve is the cam profile. For a roller follower, the marked points are trace points, and their curve is the pitch curve; the working profile is the inner envelope obtained by drawing the roller in each position and taking the boundary curve tangent to all of them, offset inward from the pitch curve by the roller radius. For an offset follower, displacements are set off along lines parallel to the follower axis from points on a circle drawn with the offset radius, which is why offsetting changes the shape - and the pressure angle - of the profile.",
              "Two checks close the drawing. The pressure angle, largest where the displacement curve is steepest, should stay below about 30 degrees for a reciprocating roller follower or the side thrust will bind the guide. And the profile must be free of undercutting, checked in the next section. Cylindrical or drum cams wrap the same story around a drum: the displacement diagram, drawn full width, becomes the developed groove on the drum surface.",
            ],
            bullets: [
              "Divide the base circle into the same intervals as the displacement diagram, numbered opposite to cam rotation.",
              "Knife-edge follower: the curve through the marked displacements is the profile itself.",
              "Roller follower: marked points give the pitch curve; the profile is the envelope of the roller positions.",
              "Offset follower: set displacements along lines parallel to the follower axis from the offset circle.",
              "Keep the pressure angle below about 30 degrees for reciprocating roller followers.",
            ],
            table: {
              caption: "Profile construction by follower type.",
              headers: ["Step", "Knife-edge follower", "Roller follower"],
              rows: [
                ["Mark positions", "Displacement along radials", "Trace points along radials or offset lines"],
                ["First curve", "Cam profile directly", "Pitch curve through trace points"],
                ["Second curve", "Not needed", "Roller circles; profile is their inner envelope"],
                ["Prime circle", "Same as base circle", "Base circle plus roller radius"],
                ["Watch for", "Pointed profile", "Undercutting when the roller is too large"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Laying out a cam profile",
              caption: "The construction sequence that every profile question follows.",
              steps: [
                { label: "Draw the base circle and the follower at its lowest position" },
                { label: "Divide the circle to match the displacement diagram", note: "number opposite to the direction of rotation" },
                { label: "Transfer displacements along each radial or offset line" },
                { label: "Join trace points into the pitch curve", note: "for a roller follower" },
                { label: "Roll the follower and take the envelope", note: "the true profile lies inside the pitch curve by the roller radius" },
              ],
            },
            callout: {
              type: "tip",
              title: "Exam tip",
              body: "Use the SAME number of divisions on the base circle as on the displacement diagram - mismatched divisions are the most common reason profile drawings fail to close, and examiners check the numbering direction first.",
            },
            keyTerms: [
              { term: "Cam profile", definition: "The working surface of the cam that actually touches the follower." },
              { term: "Pitch curve", definition: "The locus of the trace point; the profile offset by the roller radius for roller followers." },
              { term: "Prime circle", definition: "The smallest circle centred on the cam axis and tangent to the pitch curve." },
            ],
            examQuestions: [
              {
                q: "A cam rotating anticlockwise at uniform speed lifts a roller follower 30 mm with SHM in 150 degrees of cam rotation, dwells 30 degrees, and returns with uniform velocity. Describe the complete graphical construction of the cam profile.",
                marks: 7,
                outline: [
                  "Draw the displacement diagram: SHM rise, dwell, uniform-velocity return.",
                  "Divide the rise into equal angular intervals and read lifts.",
                  "Draw the base circle and the prime circle with the roller in the lowest position.",
                  "Divide the base circle into the same intervals, numbered clockwise for anticlockwise rotation.",
                  "Transfer lifts along radials to locate trace points; fair the pitch curve.",
                  "Draw the roller in each position; take the inner envelope as the profile.",
                  "Label base circle, prime circle, trace point and pitch curve.",
                ],
              },
              {
                q: "Distinguish between the pitch curve and the cam profile for a roller follower.",
                marks: 2,
              },
              {
                q: "How does the construction change for an offset roller follower, and what does the offset achieve?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Pressure angle and undercutting",
            body: [
              "The pressure angle is the angle between the normal to the cam profile at the point of contact and the axis of the follower's motion. Only the component of the contact force along the follower axis does useful work; the perpendicular component becomes side thrust in the guide, and as the pressure angle grows this thrust climbs until it jams the follower or wears its guide. A design ceiling of about 30 degrees is standard for reciprocating roller followers; flat-faced followers, whose contact normal stays nearly aligned with the axis, are much less sensitive.",
              "Three things push the pressure angle up: a smaller base circle for the same lift, a larger lift for the same cam angle, and a steeper motion law. The remedies follow directly - enlarge the base circle, choose a gentler law such as SHM or cycloidal in place of uniform velocity, offset the follower so the rise-side pressure angle falls (at the cost of the return side), or switch to a flat-faced follower. Offset helps only in the direction of the lean of the contact normal, so it must be chosen with the rotation sense in mind.",
              "Undercutting is the second disease. If the roller radius exceeds the smallest radius of curvature of the pitch curve, the roller cannot follow the intended path: the profile gouges itself, comes to a point, and the follower motion is distorted. A pointed profile is the visible symptom. The cure is a larger base circle, a smaller roller, or a gentler motion. A related failure at speed is follower jump - if the spring preload is too weak, the follower leaves the cam surface where the required acceleration exceeds what the spring can impose, so positive (grooved) closure is used on high-speed cams.",
            ],
            bullets: [
              "Pressure angle: between the profile normal at contact and the follower axis; the source of side thrust.",
              "Keep it below about 30 degrees for reciprocating roller followers; flat-faced followers are far less sensitive.",
              "It grows with smaller base circles, larger lifts and steeper motion laws.",
              "Undercutting: roller radius larger than the pitch curve's minimum radius of curvature - profile points and motion distorts.",
              "Follower jump: spring too weak at speed - the follower leaves the cam; fix with a stiffer spring or positive closure.",
            ],
            table: {
              caption: "Cam design faults and their remedies.",
              headers: ["Problem", "Cause", "Remedy"],
              rows: [
                ["High pressure angle", "Small base circle, steep lift", "Enlarge base circle, gentler law, offset follower"],
                ["Undercutting", "Roller radius exceeds pitch-curve minimum curvature radius", "Smaller roller or larger base circle"],
                ["Pointed profile", "Extreme lift on a small base circle", "Enlarge base circle, reduce lift or soften the law"],
                ["Follower jump", "Weak spring at high speed", "Stiffer spring or grooved positive cam"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Pressure angle climbing past 30 degrees",
              caption: "Four responses - three keep the follower healthy.",
              start: "Pressure angle approaching the limit",
              branches: [
                { label: "Enlarge the base circle", outcome: "Lower side thrust; the standard fix at the cost of a bigger cam", good: true },
                { label: "Offset the follower", outcome: "Eases the rise stroke at the cost of the return stroke", good: true },
                { label: "Adopt a gentler motion law", outcome: "Cycloidal or SHM instead of uniform velocity", good: true },
                { label: "Leave it uncorrected", outcome: "Guide wear, jamming and follower jump at speed", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Offset is not free",
              body: "Offsetting a follower reduces the pressure angle on one stroke and increases it on the other. Always state which stroke you are easing - 'offset toward the direction that lowers the rise-side pressure angle' - or the remedy looks like a guess.",
            },
            keyTerms: [
              { term: "Pressure angle", definition: "The angle between the cam-profile normal at contact and the follower's line of motion." },
              { term: "Undercutting (cam)", definition: "Loss of profile when the roller radius exceeds the minimum radius of curvature of the pitch curve." },
              { term: "Offset follower", definition: "A follower whose axis is displaced from the cam centre, altering the pressure angle on each stroke." },
            ],
            examQuestions: [
              {
                q: "Define the pressure angle of a cam-follower system. Discuss its effects, the factors that increase it, and the design remedies. Explain cam undercutting and state the condition under which it occurs.",
                marks: 7,
                outline: [
                  "Define the pressure angle at the contact point.",
                  "Resolve the contact force: axial component useful, transverse component is side thrust.",
                  "Effects: guide wear, jamming, follower jump at high angle.",
                  "Limit: about 30 degrees for reciprocating roller followers.",
                  "Factors: small base circle, large lift, steep motion law.",
                  "Remedies: bigger base circle, gentler law, offset, flat-faced follower.",
                  "Undercutting: roller radius > pitch-curve minimum curvature radius; remedy accordingly.",
                ],
              },
              {
                q: "State the usual limiting value of pressure angle for a reciprocating roller follower.",
                marks: 2,
              },
              {
                q: "State the condition for cam undercutting and give two remedies.",
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
      title: "Gears and Gear Trains",
      summary:
        "Gear tooth anatomy and standard proportions, the law of gearing that guarantees constant velocity ratio, involute versus cycloidal tooth profiles, interference and the minimum-teeth formula, and the analysis of simple, compound, reverted and epicyclic gear trains by the tabular method.",
      chapter: {
        number: "04",
        title: "Gears and Gear Trains",
        intro:
          "Unit IV first names every part of a gear tooth and its standard module-based proportions, then states and derives the law of gearing - the condition for a constant velocity ratio between meshing teeth. The involute and cycloidal profiles are compared as the two practical solutions of that law, interference and undercutting set the minimum number of teeth, and the unit closes with the trains that connect shafts: simple, compound, reverted and epicyclic, the last solved by the powerful tabular method.",
        inOneBreath:
          "The module m = D/T fixes every tooth proportion - addendum 1m, dedendum 1.25m, clearance 0.25m, circular pitch pi·m - and the centre distance is m(T1 + T2)/2; the law of gearing requires the common normal at tooth contact to pass through the pitch point, giving a constant ratio equal to the inverse ratio of the pitch radii and pure rolling at the pitch point; the involute profile, traced by unwinding a string from the base circle, keeps a straight line of action and a constant pressure angle and tolerates centre-distance error, while the cycloidal profile needs exact centres and serves clocks; interference below the base circle limits a full-depth pinion to T_min = 2/sin^2(phi) - 32 teeth at 14.5 degrees, 17 at 20 degrees - and undercutting to cure it weakens the tooth; simple trains pass ratio through idlers that only change sense, compound trains multiply the stage ratios, reverted trains bring the output axis back by equal centre distances, and epicyclic trains, solved by superposing locked-arm and fixed-arm rows in a table, deliver large ratios in a small space.",
        sections: [
          {
            number: "4.1",
            title: "Gear terminology and tooth proportions",
            body: [
              "Gears are positive drives: toothed wheels that transmit motion without slip, holding an exact velocity ratio at compact centre distances. Two gears in mesh behave as two pitch circles rolling together without sliding, touching at the pitch point on the line of centres. The pitch-circle diameter D and the number of teeth T define the module, m = D / T, the fundamental metric sizing step: gears of the same module mesh, and everything else in the tooth is a multiple of m.",
              "Above the pitch circle the tooth rises by the addendum, one module; below it drops by the dedendum, 1.25 modules, of which 0.25 module is clearance so the mating tip never bottom in the root. Working depth - two modules - is how deep the teeth engage; total depth is 2.25 modules. Circular pitch, the tooth width measured along the pitch circle, is pi m, so tooth thickness is half of it, 1.5708 m. Face is the working surface above the pitch line, flank the surface below it, and the fillet rounds the root. Backlash - the small gap between mating teeth - prevents jamming but causes a tiny lost motion on reversal.",
              "Quick arithmetic makes the terms useful. A 20-tooth pinion meshing with a 40-tooth gear on module 4 has pitch diameters 80 mm and 160 mm, so the centre distance is m(T1 + T2)/2 = 120 mm, and the speed ratio is the inverse ratio of teeth: the gear turns at half the pinion speed. Standard modules run 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12 - cutting tools exist only for these, so a computed module is always rounded to the series.",
            ],
            bullets: [
              "Module m = D / T is the metric tooth size; only gears of equal module mesh.",
              "Addendum = 1m, dedendum = 1.25m, clearance = 0.25m, working depth = 2m, total depth = 2.25m.",
              "Circular pitch = pi m; tooth thickness = pi m / 2 = 1.5708 m.",
              "Centre distance between two meshing gears = m(T1 + T2) / 2.",
              "Speed ratio = inverse ratio of tooth numbers: N1/N2 = T2/T1.",
            ],
            table: {
              caption: "Standard tooth proportions, evaluated for module 4.",
              headers: ["Element", "Formula", "Size for m = 4 (mm)"],
              rows: [
                ["Addendum", "1 m", "4.0"],
                ["Dedendum", "1.25 m", "5.0"],
                ["Clearance", "0.25 m", "1.0"],
                ["Working depth", "2 m", "8.0"],
                ["Circular pitch", "pi m", "12.57"],
                ["Tooth thickness", "pi m / 2", "6.28"],
                ["Total depth", "2.25 m", "9.0"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a gear tooth",
              caption: "Tip to root, measured in modules from the pitch circle.",
              layers: [
                { label: "Addendum - 1 module above the pitch circle", note: "the tip of the tooth" },
                { label: "Working depth - 2 modules", note: "how deep teeth engage" },
                { label: "Dedendum - 1.25 modules below the pitch circle", note: "the root side of the flank" },
                { label: "Clearance - 0.25 module", note: "stops the mating tip bottoming in the root" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Terminology questions are marked per definition: write the formula AND a number, for example 'addendum = 1 module = 4 mm here'. A labelled tooth sketch with the pitch circle drawn in earns the drawing mark before you write a single word.",
            },
            keyTerms: [
              { term: "Module", definition: "The ratio of pitch-circle diameter to the number of teeth, m = D/T, in millimetres per tooth." },
              { term: "Circular pitch", definition: "The distance measured along the pitch circle from a point on one tooth to the same point on the next, equal to pi m." },
              { term: "Backlash", definition: "The small clearance between the driving flank of one gear and the trailing flank of its mate." },
            ],
            examQuestions: [
              {
                q: "Define module, circular pitch, addendum, dedendum, clearance, working depth and backlash for a spur gear tooth, and state the standard proportions in terms of the module.",
                marks: 7,
                outline: [
                  "Draw a tooth on the pitch circle and label every element.",
                  "Module m = D/T; only equal modules mesh.",
                  "Circular pitch = pi m; tooth thickness = pi m/2.",
                  "Addendum = 1 m; dedendum = 1.25 m.",
                  "Clearance = 0.25 m; working depth = 2 m; total depth = 2.25 m.",
                  "Define backlash and its purpose.",
                  "Quote a numeric example, e.g. m = 4 gives 4, 5 and 9 mm depths.",
                ],
              },
              {
                q: "State the relation between module and circular pitch.",
                marks: 2,
              },
              {
                q: "A 24-tooth pinion of module 3 meshes with a 48-tooth gear. Find both pitch diameters, the centre distance and the speed ratio.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Law of gearing and velocity of sliding",
            body: [
              "Two meshing teeth push each other through a contact point that sweeps along the surfaces. For the drive to run smoothly, the angular velocity ratio must not fluctuate as the contact point travels. The law of gearing states the condition: the common normal at the point of tooth contact must always pass through the pitch point - the fixed point where the line of centres is cut by the pitch circles. Tooth profiles that satisfy it are called conjugate.",
              "The proof is two lines of relative velocity. The teeth can neither separate nor interpenetrate, so the components of the two tooth-surface velocities along the common normal must be equal. Resolving each wheel's surface velocity at the contact point about its centre, this equality forces the ratio of angular velocities to equal the inverse ratio of the distances from the two centres to the point where the common normal cuts the line of centres. The law pins that cut at the fixed pitch point, so the ratio is constant through the mesh. Sliding between the teeth occurs along the common tangent, with velocity (omega1 + omega2) times the contact point's distance from the pitch point - which is why contact at the pitch point itself is pure rolling.",
              "Two practical corollaries. First, interchangeability: any two gears cut to the same module and pressure angle will mesh correctly, which is what makes off-the-shelf gearing possible. Second, the pressure angle - the angle between the line of action and the common tangent to the pitch circles - is set by the tooth system: 14.5 degrees for the older full-depth system, 20 degrees for the modern standard, which allows fewer teeth before interference strikes.",
            ],
            bullets: [
              "Law of gearing: the common normal at tooth contact always passes through the pitch point.",
              "Consequence: conjugate profiles transmit a constant angular velocity ratio.",
              "The fixed pitch point sits where the line of centres meets the pitch circles.",
              "At the pitch point the teeth roll without sliding; elsewhere they slide along the common tangent.",
              "Velocity of sliding = (omega1 + omega2) x distance of the contact point from the pitch point.",
            ],
            table: {
              caption: "The vocabulary of gear tooth action.",
              headers: ["Concept", "Meaning"],
              rows: [
                ["Law of gearing", "Common normal at contact passes through the pitch point"],
                ["Pitch point", "Fixed point on the line of centres where pitch circles touch"],
                ["Conjugate profiles", "Curves satisfying the law, giving constant ratio"],
                ["Line of action", "The straight path of the contact point for involute teeth"],
                ["Pressure angle", "Angle between the line of action and the pitch-circle tangent"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The law of gearing in five steps",
              caption: "From contact geometry to a constant ratio.",
              steps: [
                { label: "Teeth touch at a point of the mesh" },
                { label: "Draw the common normal at contact" },
                { label: "It must cut the line of centres at the pitch point", note: "this is the law itself" },
                { label: "Equal normal velocities force ratio = inverse distance ratio", note: "fixed pitch point fixes the ratio" },
                { label: "At the pitch point the teeth roll without sliding" },
              ],
            },
            callout: {
              type: "tip",
              title: "Exam tip",
              body: "Quote the law of gearing verbatim at the start of both this question and any involute-versus-cycloidal question. It is the single sentence that anchors Unit IV, and examiners look for it by name.",
            },
            keyTerms: [
              { term: "Law of gearing", definition: "The common normal at the point of contact of two meshing teeth must pass through the pitch point." },
              { term: "Pitch point", definition: "The point where the line of centres intersects the two pitch circles at their tangency." },
              { term: "Conjugate profiles", definition: "Tooth curves that satisfy the law of gearing and preserve a constant velocity ratio." },
            ],
            examQuestions: [
              {
                q: "State and derive the law of gearing. Show that it guarantees a constant angular velocity ratio, and explain what is meant by conjugate tooth profiles.",
                marks: 7,
                outline: [
                  "Draw two meshing teeth with the common normal at contact.",
                  "State the law: the normal passes through the pitch point.",
                  "Argue equal velocity components along the common normal (no separation).",
                  "Resolve surface velocities about each centre.",
                  "Deduce omega1/omega2 equals the inverse ratio of centre-to-normal distances.",
                  "A fixed pitch point makes the ratio constant: conjugate action.",
                  "Corollary: pure rolling at the pitch point; sliding elsewhere along the tangent.",
                ],
              },
              {
                q: "What is the velocity of sliding at the pitch point of two meshing gears?",
                marks: 2,
              },
              {
                q: "State two requirements for gears to be interchangeable, and explain why.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Involute and cycloidal profiles; interference",
            body: [
              "The involute is the curve a pencil at the end of a taut string traces as the string unwinds from a base circle. Every involute gear tooth flank above the base circle is a piece of this curve. Its gift is the straight line of action: two involute flanks always touch along the common tangent to both base circles, so the pressure angle is constant through the mesh, and the ratio stays correct even if the centre distance drifts a little - the property that made the involute the universal standard.",
              "The cycloidal profile is built from two arcs: an epicycloid above the pitch circle, generated by a circle rolling on the outside, and a hypocycloid below it, generated by rolling inside. The pressure angle varies through contact, the double curvature is harder to cut, and the drive needs an exact centre distance - but the flanks roll into contact with less sliding near the root, which is why clocks and watches stayed cycloidal. A neat special case: if the generating circle diameter equals the pinion pitch radius, the hypocycloid degenerates into a straight radial line.",
              "Interference is the involute's disease. An involute cannot exist inside the base circle, so when a small pinion meshes with a large gear, the gear tooth tip tries to dig into the pinion root below that circle. Removing the offending pinion material is undercutting, which weakens the tooth. The clean cure is tooth count: a full-depth involute pinion avoids interference when T >= 2 / sin^2(phi) - about 32 teeth at 14.5 degrees, 17 at 20 degrees. Stub teeth (0.8 addendum), a larger pressure angle, or more teeth all lift the limit.",
            ],
            bullets: [
              "Involute: traced by unwinding a string from the base circle; the flank above the base circle is the working curve.",
              "Involute merits: straight line of action, constant pressure angle, tolerance to centre-distance error.",
              "Cycloidal flank = epicycloid above the pitch circle + hypocycloid below; exact centres required; used in clocks.",
              "Interference: gear tooth tip contacts the pinion below its base circle, where no involute exists.",
              "Minimum teeth to avoid interference: T_min = 2 / sin^2(phi) - 32 at 14.5 deg, 17 at 20 deg.",
            ],
            codeExample: {
              language: "python",
              caption: "Minimum teeth against interference.",
              code: `import math

for pa_deg in (14.5, 20.0, 25.0):
    phi = math.radians(pa_deg)
    t_min = 2 / math.sin(phi)**2
    print(f"pressure angle {pa_deg:5.1f} deg -> "
          f"minimum teeth = {t_min:.1f}")`,
            },
            diagram: {
              kind: "compare",
              title: "Involute versus cycloidal teeth",
              caption: "Why the involute won general engineering and the cycloid kept horology.",
              left: {
                heading: "Involute profile",
                items: [
                  "Traced by unwinding a string from the base circle",
                  "Straight line of action, constant pressure angle",
                  "Tolerant of small centre-distance errors",
                  "Simple to generate and standard worldwide",
                  "Prone to interference below the base circle",
                ],
              },
              right: {
                heading: "Cycloidal profile",
                items: [
                  "Epicycloid flank above, hypocycloid below the pitch circle",
                  "Pressure angle varies through the mesh",
                  "Needs an exact centre distance",
                  "Double-curved flanks are costly to cut",
                  "No interference problem; chosen for clocks and watches",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "T_min = 2 / sin^2(phi) is a guaranteed mark: derive it once, then quote the two magic numbers - 32 teeth at 14.5 degrees and 17 at 20 degrees. Pair it with one sentence on undercutting weakening the tooth.",
            },
            keyTerms: [
              { term: "Involute", definition: "The curve traced by a point on a taut string unwound from a base circle; the standard gear tooth flank." },
              { term: "Interference", definition: "Contact between a gear tooth tip and a pinion flank inside the pinion base circle, where no involute exists." },
              { term: "Undercutting", definition: "Removal of pinion root material to relieve interference, at the cost of tooth strength." },
            ],
            examQuestions: [
              {
                q: "Describe how involute and cycloidal tooth profiles are generated. Compare the two systems and explain interference, undercutting and the minimum number of teeth on a pinion.",
                marks: 7,
                outline: [
                  "Generate the involute by unwinding a string from the base circle.",
                  "Involute properties: straight line of action, constant pressure angle, centre-distance tolerance.",
                  "Generate the cycloid: epicycloid above and hypocycloid below the pitch circle.",
                  "Cycloid properties: varying pressure angle, exact centres, clock usage.",
                  "Interference: gear tip digs below the pinion base circle.",
                  "Undercutting relieves interference but weakens the tooth.",
                  "T_min = 2/sin^2(phi): 32 teeth at 14.5 deg, 17 at 20 deg.",
                ],
              },
              {
                q: "Why do involute gears continue to work correctly when the centre distance increases slightly?",
                marks: 2,
              },
              {
                q: "Calculate the minimum number of teeth on a full-depth pinion to avoid interference at a 20 degree pressure angle.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Simple, compound and reverted gear trains",
            body: [
              "A gear train is any combination of gears transmitting motion between shafts. In a simple train every shaft carries one gear, and each intermediate gear is an idler: it changes the sense of rotation and bridges a centre distance but cancels out of the ratio - twenty teeth driving sixty driving eighty gives 80/20 = 4, the idler's sixty teeth appearing above and below the line. The end ratio depends only on the first and last gears.",
              "When a large ratio is needed, simple trains run out of room, so intermediate shafts carry two gears each: the compound train. The train value is the product of the stage ratios - driven teeth over driver teeth at every mesh. A 20-tooth driver with 60, compounded with 25 against 75, gives (60/20) x (75/25) = 9 in the space of two shafts. Direction follows the number of external meshes: each mesh reverses the sense.",
              "The reverted gear train brings the output shaft back in line with the input, as in gearboxes and clock movements. The condition is geometric: both stages span the same centre distance, so with a common module the tooth numbers of the two stages must sum equally, T1 + T2 = T3 + T4 - and the designer juggles tooth counts until the sums match while the ratio stays close to target. Worked on paper, a reverted train is a compound train plus one linear equation. Speed ratio arithmetic is identical for all three trains; only the geometry constraint separates reverted from the rest, so nail the tooth-sum equation and every train question in the paper reduces to the same multiplication.",
            ],
            bullets: [
              "Simple train: one gear per shaft; idlers alter sense and spacing but cancel from the ratio.",
              "Train value (any train): product of driven tooth counts over product of driver tooth counts.",
              "Compound train: two gears per intermediate shaft; stage ratios multiply to large values compactly.",
              "Reverted train: input and output shafts are coaxial; needs T1 + T2 = T3 + T4 for a common module.",
              "Each external mesh reverses the direction of rotation.",
            ],
            codeExample: {
              language: "python",
              caption: "Train value with and without an idler.",
              code: `def train_value(meshes):
    """meshes = [(driver_teeth, driven_teeth), ...]"""
    tv = 1.0
    for driver, driven in meshes:
        tv *= driven / driver
    return tv

print("simple train with idler:",
      train_value([(20, 60), (60, 80)]))    # idler cancels
print("compound train:",
      train_value([(20, 60), (25, 75)]))    # ratios multiply`,
            },
            diagram: {
              kind: "pipeline",
              title: "Power flow through a compound train",
              caption: "Stage ratios multiply; sense flips at every mesh.",
              stages: [
                { label: "Input shaft gear", note: "the first driver" },
                { label: "Idler gears bridge the gap", note: "change sense, not ratio" },
                { label: "Compound shafts carry two gears", note: "stage ratios multiply" },
                { label: "Output gear on the last shaft" },
                { label: "Train value = product of driven / product of drivers" },
              ],
            },
            callout: {
              type: "tip",
              title: "Exam tip",
              body: "Write the train value as a chain of fractions across arrowed sketches of the shafts, and mark the rotation sense with curved arrows at every mesh. Both the fraction chain and the arrows are marked; the arithmetic is the smallest part of the answer.",
            },
            keyTerms: [
              { term: "Gear train", definition: "A combination of gears by which motion is transmitted from one shaft to another." },
              { term: "Train value", definition: "The overall speed ratio of a train: product of driven teeth over product of driver teeth." },
              { term: "Reverted gear train", definition: "A compound train whose output shaft is coaxial with the input shaft." },
            ],
            examQuestions: [
              {
                q: "Distinguish between simple, compound and reverted gear trains with sketches. Derive the train value of a compound train and design the tooth counts for a reverted train with a common module.",
                marks: 7,
                outline: [
                  "Simple train: one gear per shaft; idlers cancel from the ratio.",
                  "Show an idler example numerically.",
                  "Compound train: two gears per intermediate shaft.",
                  "Train value = product of (driven/driver) over all meshes.",
                  "Worked example: (60/20) x (75/25) = 9.",
                  "Reverted train: output coaxial with input.",
                  "Condition: T1 + T2 = T3 + T4 for a common module; adjust counts to keep the ratio.",
                ],
              },
              {
                q: "What is the function of an idler gear in a simple train?",
                marks: 2,
              },
              {
                q: "State the geometrical condition for a reverted gear train and name one application.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Epicyclic gear trains and the tabular method",
            body: [
              "In an epicyclic train, some gear axes move. A planet gear meshes with a central sun gear and an internal annulus while riding on a carrier, or arm, that turns about the main axis. Because the arm itself rotates, an ordinary train-value calculation is meaningless - the epicyclic is solved by superposition, and the tabular method is the disciplined way to do it.",
              "The table has three steps. Row one: lock the whole train together and give the arm one full turn - every wheel turns +1 with it. Row two: hold the arm fixed and give the sun gear one turn - every other wheel then rotates by the ordinary train value of a simple reverted train, sun to planet to annulus, with sign. Row three: superpose the rows with multipliers x and y chosen so the stated constraint is met - a fixed annulus, a given arm speed, or a locked sun. Solving the two condition equations yields every speed in the train.",
              "Worked example: sun 30 teeth, planets 20 (which suits an annulus of 30 + 2 x 20 = 70 teeth), annulus fixed. Row two gives the annulus -30/70 per unit sun turn, so superposition forces the multiplier to 70/30, and the sun ends up rotating 1 + 70/30 = 10/3 turns per arm turn. Drive the sun at 1000 rpm and the arm delivers 300 rpm in the same sense - a 10:3 reduction in a casing barely bigger than the gear set. This compactness is why epicyclics fill automotive gearboxes, overdrives and hoists.",
            ],
            bullets: [
              "Epicyclic train: the axes of planet gears are carried around by an arm about the main axis.",
              "Components: sun, planet(s), annulus (internal gear) and the arm or carrier.",
              "Tabular method: row 1 arm +1 with all wheels locked; row 2 arm fixed, sun +1; row 3 superpose.",
              "Apply the constraint (e.g. annulus fixed) as an equation in the row multipliers and solve.",
              "Same-direction large ratios in compact casings: gearboxes, overdrives, hoists, differentials.",
            ],
            codeExample: {
              language: "python",
              caption: "Epicyclic ratio with the annulus fixed.",
              code: `def sun_per_arm(Ts, Ta):
    """Annulus fixed: sun speed per unit arm speed."""
    # row 1: whole train locked, arm +1 -> all wheels +1
    # row 2: arm fixed, sun +1 -> annulus -Ts/Ta
    # annulus total = 1 - x*Ts/Ta = 0  ->  x = Ta/Ts
    return 1 + Ta / Ts

Ts, Ta = 30, 70
ratio = sun_per_arm(Ts, Ta)
print(f"sun per arm = {ratio:.3f}")
print(f"arm per sun = {1/ratio:.3f}")   # 0.3 reduction`,
            },
            diagram: {
              kind: "cycle",
              title: "The tabular method as a loop",
              caption: "Two rows, one superposition, one constraint - repeat for any epicyclic.",
              steps: [
                { label: "Lock the train, rotate the arm +1", note: "every wheel gets +1" },
                { label: "Fix the arm, rotate the sun +1", note: "others follow the simple train value" },
                { label: "Superpose the two rows with multipliers" },
                { label: "Impose the constraint", note: "e.g. annulus total rotation = 0" },
                { label: "Solve and back-substitute", note: "read every wheel's speed from the table" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the three-row table BEFORE any algebra - the table itself carries method marks. Label the columns arm, sun, planet, annulus, fill rows one and two, and only then write the constraint equation; speed errors almost never survive a complete table.",
            },
            keyTerms: [
              { term: "Epicyclic gear train", definition: "A gear train in which the axes of some gears rotate about a central axis." },
              { term: "Arm (carrier)", definition: "The link that carries the planet gears and rotates about the main axis." },
              { term: "Annulus", definition: "The internal-toothed ring gear with which the planets mesh." },
            ],
            examQuestions: [
              {
                q: "Explain the tabular method for epicyclic gear trains. For a train with a 30-tooth sun, 20-tooth planets and a 70-tooth annulus with the annulus fixed, find the speed of the arm when the sun is driven at 1000 rpm.",
                marks: 7,
                outline: [
                  "Draw the sun-planet-annulus-arm arrangement.",
                  "Row 1: lock the train, arm +1, all wheels +1.",
                  "Row 2: arm fixed, sun +1; planet = -Ts/Tp, annulus = -Ts/Ta.",
                  "Superpose with multipliers: total = row1 + x(row2).",
                  "Constraint: annulus fixed -> 1 - x(30/70) = 0 -> x = 7/3.",
                  "Sun total = 1 + 7/3 = 10/3 per arm turn.",
                  "Arm = sun x 3/10 = 300 rpm, same sense; note the 10:3 reduction.",
                ],
              },
              {
                q: "Why do epicyclic trains give large speed ratios in compact casings?",
                marks: 2,
              },
              {
                q: "What does an epicyclic train reduce to when its arm is held stationary, and why?",
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
      title: "Friction, Belts, Clutches and Brakes",
      summary:
        "The friction apparatus of machinery: journal bearings and the friction circle, plate and cone clutches under uniform pressure and uniform wear, belt drives with centrifugal tension, block, band and internal-expanding brakes with self-energising behaviour, and the dynamometers that measure the power of it all.",
      chapter: {
        number: "05",
        title: "Friction, Belts, Clutches, Brakes and Dynamometers",
        intro:
          "Unit V puts friction to work. A journal bearing is analysed through its friction circle; a clutch is designed under the twin theories of uniform pressure and uniform wear; a belt drive obeys the capstan relation e^(mu theta) modified by centrifugal tension; brakes come as blocks, bands and internal shoes with self-energising and self-locking behaviour; and dynamometers - absorption and transmission - measure the torque and power that all these machines produce.",
        inOneBreath:
          "In a journal bearing the reaction acts tangentially to a friction circle of radius r sin(phi) with mu = tan(phi), giving a friction torque W r sin(phi) that drops by an order of magnitude under hydrodynamic lubrication; a plate clutch transmits T = (2/3) mu W (r1^3 - r2^3)/(r1^2 - r2^2) when new (uniform pressure) and T = mu W (r1 + r2)/2 when worn (uniform wear), the smaller, safer design value, while a cone clutch multiplies torque by 1/sin(alpha); belts obey T1/T2 = e^(mu theta) with the wrap in radians, lose grip to centrifugal tension Tc = m v^2, and transmit power (T1 - T2)v with maximum power when T1 = 3Tc; block brakes give T = mu N r, band brakes (T1 - T2) r with the same capstan ratio and can self-lock when over-wrapped, internal shoes self-energise through the leading shoe; and dynamometers measure brake power 2 pi N T / 60 either by absorbing it - Prony, rope, hydraulic - or by transmitting it - belt, epicyclic, torsion.",
        sections: [
          {
            number: "5.1",
            title: "Friction in journal bearings",
            body: [
              "A journal is the portion of a shaft that rotates inside a bearing, and the pair is where rotary machines lose most of their friction. With dry or partially lubricated surfaces, the load W shifts the journal off-centre until the contact patch can carry it; the total reaction R then acts not along the load line but inclined to it at the friction angle phi = atan(mu). The line of action of R is tangent to a small circle concentric with the journal - the friction circle - of radius r sin(phi), which for small angles is nearly r mu.",
              "The friction torque follows immediately: T = W x r sin(phi), the load times the friction-circle radius, or approximately W r mu. As a worked figure, a journal of radius 50 mm carrying 10 kN with mu = 0.05 resists with T = 10000 x 0.05 x 0.05 = 25 N·m; at 1200 rpm (125.7 rad/s) that dissipates about 3.1 kW of pure friction. If a couple or an applied moment acts on the shaft, the friction circle also tells whether the journal will rotate at all - if the moment's line of action cannot reach outside the circle, the shaft is self-locking.",
              "Real bearings fight back with lubrication. In the boundary regime the asperities still touch and mu sits near 0.1 or worse; in mixed film it falls an order of magnitude; under a fully hydrodynamic film the journal rides on pressurised oil and mu drops to 0.002-0.01, and the friction torque with it. The design levers are the length-to-diameter ratio, the clearance, and the oil viscosity chosen so the bearing reaches hydrodynamic operation at running speed.",
            ],
            bullets: [
              "Friction angle phi = atan(mu); the bearing reaction inclines to the normal by phi.",
              "Friction circle radius = r sin(phi), approximately r mu for small angles.",
              "Friction torque T = W r sin(phi), approximately W r mu.",
              "Power lost to friction = T x omega.",
              "Lubrication regimes drop mu from about 0.1 (boundary) to 0.002-0.01 (hydrodynamic film).",
            ],
            table: {
              caption: "Friction regimes in a journal bearing.",
              headers: ["Regime", "Typical mu", "Condition"],
              rows: [
                ["Dry / boundary", "0.10 - 0.30", "Asperities in direct contact, little or no oil film"],
                ["Mixed film", "0.01 - 0.05", "Partial oil film, occasional asperity contact"],
                ["Hydrodynamic", "0.002 - 0.01", "Surfaces fully separated by a pressurised film"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The lubrication pyramid",
              caption: "Narrow at the top - the regime every designer chases.",
              tiers: [
                { label: "Hydrodynamic film", note: "mu about 0.002-0.01 - surfaces fully separated" },
                { label: "Mixed film", note: "mu about 0.01-0.05 - occasional asperity contact" },
                { label: "Boundary / dry", note: "mu about 0.1 or more - rubbing surfaces" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Define the friction circle with a sketch, then write T = W r sin(phi) and immediately substitute numbers. The numerical substitution is where the marks separate - most candidates stop at the formula.",
            },
            keyTerms: [
              { term: "Journal", definition: "The part of a shaft that rotates within a bearing and supports the radial load." },
              { term: "Friction circle", definition: "The circle of radius r sin(phi) to which the bearing reaction is tangent." },
              { term: "Friction angle", definition: "The angle phi = atan(mu) by which the reaction inclines from the normal." },
            ],
            examQuestions: [
              {
                q: "Define the friction circle of a journal bearing and derive the friction torque for a journal of radius r carrying a radial load W. A 50 mm radius journal carries 10 kN with mu = 0.05 at 1200 rpm; find the friction torque and power lost.",
                marks: 7,
                outline: [
                  "Draw the journal shifted in the bearing under load W.",
                  "Show the reaction R inclined at the friction angle phi = atan(mu).",
                  "Define the friction circle radius r sin(phi).",
                  "Torque T = W r sin(phi), approximately W r mu.",
                  "Substitute: T = 10000 x 0.05 x 0.05 = 25 N·m.",
                  "omega = 125.7 rad/s; power = 25 x 125.7 = about 3.1 kW.",
                  "Note hydrodynamic lubrication would cut this by an order of magnitude.",
                ],
              },
              {
                q: "State the radius of the friction circle of a journal bearing.",
                marks: 2,
              },
              {
                q: "Why is the friction torque of a hydrodynamically lubricated bearing far smaller than the dry estimate?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Plate and cone clutches",
            body: [
              "A clutch connects and disconnects two coaxial shafts while they run. The single-plate clutch squeezes a lined disc between flywheel and pressure plate with an axial spring force W over an annulus from inner radius r2 to outer radius r1. Its analysis splits into two classical theories. Uniform pressure assumes the new, flat lining carries the same pressure everywhere; uniform wear assumes a broken-in lining in which p r is constant - the wear, and hence the pressure, falling with radius.",
              "The two theories give different torques. Under uniform pressure, T = (2/3) mu W (r1^3 - r2^3) / (r1^2 - r2^2); under uniform wear, T = mu W (r1 + r2)/2, the friction force acting at the mean radius. The worn value is smaller, so uniform wear is the safe design basis while uniform pressure estimates what a new clutch can just transmit. A multi-plate clutch multiplies these values by the number of active friction interfaces. The cone clutch replaces the flat annulus with a conical surface of semi-angle alpha: the axial force W wedges into a normal reaction N = W / sin(alpha), so T = mu W (r1 + r2) / (2 sin(alpha)) - bigger torque from a small axial force, but too small an angle jams the clutch on release.",
              "Numbers fix the ideas. A plate clutch with r1 = 150 mm, r2 = 100 mm, W = 5 kN and mu = 0.3 transmits 190 N·m when new but only 187.5 N·m when worn - the design number. Note the mean radius (r1 + r2)/2 is the quick sanity check for every uniform-wear estimate, and the multi-plate factor is just the count of rubbing pairs.",
            ],
            bullets: [
              "Uniform pressure theory: new clutch, p constant; T = (2/3) mu W (r1^3 - r2^3)/(r1^2 - r2^2).",
              "Uniform wear theory: worn clutch, p r constant; T = mu W (r1 + r2)/2 at the mean radius.",
              "Uniform wear gives the lower torque and is the design basis; uniform pressure sizes a new clutch.",
              "Multi-plate clutches multiply torque by the number of friction interfaces.",
              "Cone clutch: N = W / sin(alpha), so T = mu W (r1 + r2)/(2 sin alpha); small alpha jams.",
            ],
            table: {
              caption: "Single-plate clutch under the two theories.",
              headers: ["Quantity", "Uniform pressure (new)", "Uniform wear (worn)"],
              rows: [
                ["Pressure distribution", "p constant", "p x r constant"],
                ["Torque formula", "(2/3) mu W (r1^3 - r2^3)/(r1^2 - r2^2)", "mu W (r1 + r2)/2"],
                ["Effective radius", "(2/3)(r1^3 - r2^3)/(r1^2 - r2^2)", "(r1 + r2)/2"],
                ["Numerical torque (r1 = 150, r2 = 100 mm, W = 5 kN, mu = 0.3)", "190 N·m", "187.5 N·m"],
                ["Role in design", "Estimate when new", "Safe design value"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "New clutch versus worn clutch",
              caption: "Same hardware, two pressure laws, two torques.",
              left: {
                heading: "Uniform pressure",
                items: [
                  "Assumes a new, flat lining",
                  "p is the same at every radius",
                  "T = (2/3) mu W (r1^3 - r2^3)/(r1^2 - r2^2)",
                  "Effective radius lies beyond the mean",
                  "Higher torque - what a new clutch transmits",
                ],
              },
              right: {
                heading: "Uniform wear",
                items: [
                  "Assumes a run-in lining",
                  "p x r constant - pressure falls outward",
                  "T = mu W (r1 + r2)/2",
                  "Effective radius = mean of r1 and r2",
                  "Lower torque - the safe design value",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Choose the theory by the wording",
              body: "If the question says 'design the clutch' or 'worn plates', use uniform wear. If it says 'estimate the torque when new', use uniform pressure. Writing the wrong theory wastes the whole derivation even when the algebra is perfect.",
            },
            keyTerms: [
              { term: "Uniform wear theory", definition: "Clutch analysis assuming p r constant across a run-in lining; gives T = mu W (r1 + r2)/2." },
              { term: "Uniform pressure theory", definition: "Clutch analysis assuming constant pressure on a new lining; gives the higher torque." },
              { term: "Cone clutch", definition: "A clutch with conical friction surfaces multiplying the normal reaction by 1/sin(alpha)." },
            ],
            examQuestions: [
              {
                q: "Derive the torque transmitted by a single-plate clutch under uniform pressure and under uniform wear assumptions. Which theory is used for design and why? Briefly extend the result to a cone clutch.",
                marks: 7,
                outline: [
                  "Set up the annulus from r2 to r1 with axial force W.",
                  "Uniform pressure: integrate mu p 2 pi r dr to get T = (2/3) mu W (r1^3 - r2^3)/(r1^2 - r2^2).",
                  "Uniform wear: p r = c; integrate to get T = mu W (r1 + r2)/2.",
                  "Compare: worn torque is lower, so it is the design basis.",
                  "Multi-plate: multiply by the number of interfaces.",
                  "Cone clutch: N = W/sin(alpha), T = mu W (r1 + r2)/(2 sin alpha).",
                  "Note the jamming limit on small semi-angles.",
                ],
              },
              {
                q: "Write the mean radius used in the uniform wear theory of a plate clutch.",
                marks: 2,
              },
              {
                q: "Why does a cone clutch transmit more torque than a plate clutch for the same axial force, and what limits this advantage?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Belt drives and centrifugal tension",
            body: [
              "A belt drive transmits power between pulleys through friction, quietly and with a little built-in overload protection. When the drive runs, friction separates the tensions: the tight side carries T1 and the slack side T2. For a belt on the point of slipping, the capstan relation governs: T1 / T2 = e^(mu theta), with mu the coefficient of friction and theta the angle of wrap in radians - never degrees. A V-belt wedges in its groove and runs on its flanks, replacing mu by the virtual coefficient mu / sin(alpha), alpha the half groove angle, which is why V-belts transmit several times the flat-belt torque.",
              "Speed adds a third tension. As the belt wraps a pulley it follows a curve, and the mass per unit length m at speed v needs a centripetal force: the centrifugal tension Tc = m v^2. This tension is carried by the belt without pressing the pulley, so it subtracts from the grip: the working relation becomes (T1 - Tc)/(T2 - Tc) = e^(mu theta), and the power transmitted is (T1 - T2) v. Because raising v raises both the useful term and Tc, power peaks at a definite speed - maximum power is transmitted when T1 = 3Tc, that is, at v = sqrt(T1 / (3m)).",
              "A worked set of numbers: mu = 0.3, wrap 180 degrees (theta = pi), T1 = 2000 N, belt speed 10 m/s. The ratio e^(0.3 pi) = 2.57 gives T2 = 778 N, so the drive transmits (2000 - 778) x 10 = 12.2 kW; with m = 0.5 kg/m the centrifugal tension is 200 N, which a careful designer checks against the allowable tight-side tension. Initial tension T0 - the belt's pre-load at rest - sets where between T1 and T2 the belt actually sits, and creep, the tiny elastic shortening on the tight side, makes belt drives not quite positive.",
            ],
            bullets: [
              "Capstan relation at impending slip: T1/T2 = e^(mu theta), theta the wrap angle in radians.",
              "V-belts use the virtual coefficient mu/sin(alpha) - the wedge action multiplies capacity.",
              "Centrifugal tension Tc = m v^2 is carried by the belt and reduces the grip on the pulley.",
              "Modified relation: (T1 - Tc)/(T2 - Tc) = e^(mu theta); power = (T1 - T2) v.",
              "Maximum power occurs when T1 = 3Tc, i.e. at belt speed sqrt(T1 / (3m)).",
            ],
            codeExample: {
              language: "python",
              caption: "Belt tensions, power and centrifugal tension.",
              code: `import math

mu, theta = 0.3, math.pi    # wrap angle 180 deg
T1 = 2000.0                 # tight-side tension, N
v = 10.0                    # belt speed, m/s
m = 0.5                     # belt mass per metre, kg/m

ratio = math.exp(mu * theta)
T2 = T1 / ratio
print(f"T2 = {T2:.0f} N")
print(f"power = {(T1 - T2) * v / 1000:.2f} kW")

Tc = m * v**2               # centrifugal tension
print(f"centrifugal tension = {Tc:.0f} N")`,
            },
            diagram: {
              kind: "flow",
              title: "Tensions in a running belt",
              caption: "From installation to transmitted power.",
              steps: [
                { label: "Install with initial tension T0" },
                { label: "Power flow splits the tensions: T1 > T2" },
                { label: "Friction limits the ratio: T1/T2 = e^(mu·theta)" },
                { label: "Speed adds centrifugal tension Tc = m·v^2", note: "reduces the pressure between belt and pulley" },
                { label: "Power = (T1 - T2) x v" },
              ],
            },
            callout: {
              type: "warning",
              title: "Radians, not degrees",
              body: "The wrap angle inside e^(mu theta) must be in radians: 180 degrees is pi, not 180. Substituting degrees multiplies the answer by nonsense and is the single most common numerical slip in Unit V.",
            },
            keyTerms: [
              { term: "Centrifugal tension", definition: "The belt tension Tc = m v^2 arising from the mass of the belt following the pulley curvature." },
              { term: "Initial tension", definition: "The pre-load T0 given to a belt at rest so it can transmit torque by friction." },
              { term: "Creep (belt)", definition: "The slight relative motion of belt over pulley due to elastic stretch, making belt drives non-positive." },
            ],
            examQuestions: [
              {
                q: "Derive the relation T1/T2 = e^(mu theta) for a flat belt drive. Explain centrifugal tension and its effect on power transmission, and state the condition for maximum power.",
                marks: 7,
                outline: [
                  "Isolate a belt element subtending d(theta); friction mu R balances the tension difference.",
                  "Integrate over the wrap to obtain T1/T2 = e^(mu theta).",
                  "Note theta in radians; V-belt uses mu/sin(alpha).",
                  "Centrifugal tension Tc = m v^2, carried by the belt without pressing the pulley.",
                  "Modified relation (T1 - Tc)/(T2 - Tc) = e^(mu theta).",
                  "Power = (T1 - T2) v; maximise with respect to v.",
                  "Maximum power when T1 = 3Tc, i.e. v = sqrt(T1/(3m)).",
                ],
              },
              {
                q: "State the expression for centrifugal tension in a belt.",
                marks: 2,
              },
              {
                q: "How does the V-belt modify the capstan relation, and why does it transmit more power than a flat belt of the same tension?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Brakes: block, band and internal expanding",
            body: [
              "A brake absorbs the energy of a moving member and usually turns it into heat; a clutch merely transmits it. The single block brake presses a shoe against a rotating drum with normal force N, giving a friction torque mu N r for a drum radius r - as a worked figure, N = 2000 N with mu = 0.35 on a 200 mm drum gives 140 N·m. A long shoe, whose lining spans a large arc, must instead be integrated with a pressure distribution over the arc, which is the textbook bridge from block brakes to internal shoes.",
              "The band brake wraps a flexible band around the drum, and its two ends carry the tight and slack tensions obeying the same capstan relation as a belt: T1/T2 = e^(mu theta), torque (T1 - T2) r. Anchoring the two ends on opposite sides of the lever makes a differential band brake: the friction force then helps apply the brake, so it is self-energising, and beyond a limit it self-locks - the lever cannot be released. Whether the brake energises or locks depends only on which side of the pivot each band end attaches.",
              "The internal expanding shoe brake hides two curved shoes inside a drum, hydraulically forced outward. The leading shoe, dragged into the drum by friction, is self-energising; the trailing shoe is dragged away and is not. This pair, with adjusters for wear, equipped every automobile drum brake. A disc brake replaces the drum with a rotor squeezed by pads - no self-energisation, perfectly predictable torque, resistant to fade - which is why it now dominates. In every case the design heat check matters: brakes are rated by how much energy they can dissipate, not only by torque.",
            ],
            bullets: [
              "Brake versus clutch: a brake absorbs energy as heat; a clutch transmits it between shafts.",
              "Single block brake (short shoe): T = mu N r; long shoes need pressure-distribution integration.",
              "Band brake: T1/T2 = e^(mu theta); torque = (T1 - T2) r; differential bands can self-lock.",
              "Internal expanding shoes: leading shoe self-energising, trailing shoe not - the automotive drum brake.",
              "Disc brakes: no self-energising, stable torque, fade-resistant - the modern standard.",
            ],
            table: {
              caption: "The brake family compared.",
              headers: ["Brake", "Torque basis", "Self-energising", "Typical use"],
              rows: [
                ["Single block", "T = mu N r", "Only with a favourable pivot", "Wheel brakes, hoists"],
                ["Band brake", "(T1 - T2) r with e^(mu theta)", "Yes; can self-lock when differential", "Winches, excavators"],
                ["Internal expanding", "Pressure integral over the lining arc", "Leading shoe yes", "Automobile drum brakes"],
                ["Disc brake", "2 mu N r(mean) with opposed pads", "No - inherently stable", "Modern cars, motorcycles"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a brake",
              caption: "Capacity on one axis, self-help on the other.",
              axes: {
                x: "Torque capacity (light to heavy duty)",
                y: "Self-energising tendency (low to high)",
              },
              quadrants: [
                { label: "Simple band brake", note: "modest duty, strong self-help from the wrap" },
                { label: "Internal expanding shoe", note: "automotive duty, leading shoe self-energises" },
                { label: "Single block brake", note: "light duty, little or no self-help" },
                { label: "Disc brake", note: "heavy duty, deliberately no self-help for stability" },
              ],
            },
            callout: {
              type: "warning",
              title: "Respect the self-locking limit",
              body: "A differential band brake wrapped the wrong way can pass from self-energising to self-locking: once applied, the lever cannot release it. In any band-brake derivation, check the direction of drum rotation against the anchorage before declaring the design safe.",
            },
            keyTerms: [
              { term: "Self-energising brake", definition: "A brake in which friction torque assists the applying force about the pivot." },
              { term: "Band brake", definition: "A brake wrapping a flexible band on a drum, with tensions obeying e^(mu theta)." },
              { term: "Leading shoe", definition: "The internal-expanding brake shoe dragged into the drum by friction, hence self-energising." },
            ],
            examQuestions: [
              {
                q: "Explain the action of a band brake and derive its braking torque using the belt friction relation. Distinguish between self-energising and self-locking brakes, and explain the leading and trailing shoes of an internal expanding brake.",
                marks: 7,
                outline: [
                  "Sketch the band wrapped on the drum with ends T1 and T2.",
                  "Apply T1/T2 = e^(mu theta); torque = (T1 - T2) r.",
                  "Take moments on the lever about the pivot with the band ends.",
                  "Show friction assisting the application: self-energising.",
                  "Derive the condition for self-locking and its danger.",
                  "Internal shoe: leading shoe dragged into the drum - self-energising.",
                  "Trailing shoe dragged away - stable; disc brakes abandon self-help altogether.",
                ],
              },
              {
                q: "Differentiate between a brake and a clutch in one sentence each.",
                marks: 2,
              },
              {
                q: "A single block brake presses with N = 2000 N (mu = 0.35) on a 200 mm drum. Find the braking torque.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Dynamometers",
            body: [
              "A dynamometer measures the torque - and hence the power - of an engine or motor while it runs. Absorption (or brake) dynamometers eat the power they measure, converting it to heat: the Prony brake clamps blocks on a flywheel and balances the torque on a lever with weights; the rope brake wraps a rope round the brake drum with a dead load on one end and a spring balance on the other; the hydraulic dynamometer churns water in a casing and dissipates the power in warmth.",
              "Transmission dynamometers measure the torque while passing the power on to useful work: the belt transmission dynamometer floats a pulley between the tight and slack sides and reads the tension difference; the epicyclic (or train) dynamometer holds the reaction of a gear train on a lever; the torsion dynamometer reads the twist or surface strain of a calibrated shaft, and its strain-gauge form is the modern standard on test rigs.",
              "The arithmetic is one formula: brake power P = 2 pi N T / 60 watts, with N in rpm and T in newton-metres. A rope brake with a dead load of 500 N, spring balance 100 N, brake wheel diameter 1.0 m and rope diameter 20 mm carries T = (500 - 100) x (1.0 + 0.02)/2 = 204 N·m; at 600 rpm the machine delivers 2 pi x 600 x 204 / 60 = about 12.8 kW. The practical limit of every absorption machine is heat: Prony and rope brakes need cooling and are confined to small powers.",
            ],
            bullets: [
              "Absorption dynamometers dissipate the power they measure: Prony, rope and hydraulic types.",
              "Transmission dynamometers measure while passing power on: belt, epicyclic and torsion types.",
              "Prony brake: torque = net load on a lever x its arm length from the shaft centre.",
              "Rope brake: T = (W - S)(D + d)/2 with dead load W, spring balance S, wheel D and rope d.",
              "Brake power P = 2 pi N T / 60 - memorise it; every dynamometer question ends here.",
            ],
            table: {
              caption: "The dynamometer family.",
              headers: ["Type", "Class", "Principle", "Best suited to"],
              rows: [
                ["Prony brake", "Absorption", "Dry friction blocks on a lever-armed wheel", "Small, slow machines"],
                ["Rope brake", "Absorption", "Rope friction on the flywheel rim", "Laboratory engine tests"],
                ["Hydraulic", "Absorption", "Viscous churning of water", "Medium and large engines"],
                ["Belt transmission", "Transmission", "Tension difference on a floating pulley", "In-line shaft measurement"],
                ["Torsion / strain gauge", "Transmission", "Shaft twist or surface strain", "Modern test rigs"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Measuring brake power",
              caption: "Whichever class you choose, the answer is 2 pi N T / 60.",
              steps: [
                { label: "Engine or motor under test" },
                { label: "Absorption types convert the output to heat", note: "Prony, rope, hydraulic" },
                { label: "Transmission types measure while passing power on", note: "belt, epicyclic, torsion" },
                { label: "Read the torque: load x arm, or shaft strain" },
                { label: "Brake power = 2 pi N T / 60 watts" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The rope-brake effective radius (D + d)/2 - brake wheel plus rope diameter, halved - is a deliberate two-mark trap in every paper that mentions rope brakes. Quote it by name before substituting.",
            },
            keyTerms: [
              { term: "Absorption dynamometer", definition: "A dynamometer that absorbs and dissipates the power it measures." },
              { term: "Transmission dynamometer", definition: "A dynamometer that measures torque while transmitting the power onward." },
              { term: "Rope brake", definition: "An absorption dynamometer in which a rope and loads apply friction to a brake wheel." },
            ],
            examQuestions: [
              {
                q: "Classify dynamometers and explain the rope brake with a neat sketch. A rope brake on a 1.0 m wheel with 20 mm rope carries a dead load of 500 N against a spring balance reading of 100 N at 600 rpm; find the brake power.",
                marks: 7,
                outline: [
                  "Classify: absorption (Prony, rope, hydraulic) versus transmission (belt, epicyclic, torsion).",
                  "Sketch the rope, drum, dead load and spring balance.",
                  "Effective radius = (D + d)/2 = (1.0 + 0.02)/2 = 0.51 m.",
                  "Torque T = (W - S) x radius = (500 - 100) x 0.51 = 204 N·m.",
                  "Brake power P = 2 pi N T / 60.",
                  "P = 2 pi x 600 x 204 / 60 = about 12.8 kW.",
                  "Add the heat-dissipation caution for absorption brakes.",
                ],
              },
              {
                q: "Write the expression for brake power from a dynamometer reading.",
                marks: 2,
              },
              {
                q: "Differentiate absorption and transmission dynamometers with one example of each.",
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
      heading: "Exam weightage - where to spend the hours",
      body: [
        "RGPV ME-403 papers reliably load the bulk of the marks onto the graphical analysis of Unit II and the cam and gear questions of Units III and IV, with the friction applications of Unit V supplying the dependable numericals. Allocate revision hours in roughly this ratio and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Velocity and acceleration analysis (polygons, I-centres, Kennedy, Klein, Coriolis)", weight: "14-18 marks", note: "The guaranteed big question; practise five full polygon problems end to end." },
        { topic: "Cams: displacement diagrams and profile construction", weight: "10-14 marks", note: "One motion-law derivation plus one full profile layout per paper is the norm." },
        { topic: "Gears: law of gearing, involute vs cycloidal, interference", weight: "10-12 marks", note: "T_min = 2/sin^2(phi) with the 32-and-17 numbers is a certainty." },
        { topic: "Gear trains: compound, reverted and epicyclic tabulation", weight: "8-12 marks", note: "The epicyclic three-row table appears almost every session - drill it." },
        { topic: "Grashof's law, inversions and quick-return mechanisms", weight: "8-10 marks", note: "Sketches carry the marks; practise the four slider-crank inversions." },
        { topic: "Belt drives with centrifugal tension", weight: "6-10 marks", note: "e^(mu theta) in radians plus Tc = m v^2 - a complete numerical every time." },
        { topic: "Brakes: band brake derivation and self-energising", weight: "6-8 marks", note: "Torque (T1 - T2)r with the lever moments and the self-locking check." },
        { topic: "Clutches: uniform pressure vs uniform wear", weight: "6-8 marks", note: "Both derivations plus which theory designs - a fixed favourite." },
        { topic: "Steering gears: Davis and Ackermann", weight: "5-7 marks", note: "Derive the cotangent condition first; the comparison then writes itself." },
        { topic: "Journal friction circles and dynamometers", weight: "5-7 marks", note: "T = W r sin(phi) and the rope-brake numerical with (D + d)/2." },
      ],
    },
    {
      id: "six-weeks",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week at two hours a day, this schedule covers all 25 sections twice - once for understanding, once for revision - and reserves the final week for timed full-question practice with drawing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - foundations", tasks: ["Links, pairs, chains; Kutzbach and Grubler on six worked examples", "Grashof's law: classify a dozen four-bar chains by grounded link", "Draw all four slider-crank inversions from memory with applications"] },
        { week: "Week 2", focus: "Unit I finished - steering and quick returns", tasks: ["Derive the correct-steering cotangent condition; Davis vs Ackermann table", "Quick-return ratio numericals for Whitworth and slotted lever", "Begin velocity polygons: three slider-crank problems"] },
        { week: "Week 3", focus: "Unit II - velocity and acceleration", tasks: ["Relative velocity polygons on four-bar and slider-crank mechanisms", "I-centre location with Kennedy's theorem on three mechanisms", "Acceleration polygons plus Klein's construction; Coriolis worked examples"] },
        { week: "Week 4", focus: "Unit III - cams", tasks: ["Terminology and classification flashcards with sketches", "All four displacement laws with the coefficient table", "Two full cam profile layouts: radial roller and offset follower"] },
        { week: "Week 5", focus: "Unit IV - gears and trains", tasks: ["Terminology numericals; law of gearing derivation", "Involute vs cycloidal; T_min calculations at 14.5 and 20 degrees", "Simple, compound and reverted trains; three epicyclic tables"] },
        { week: "Week 6", focus: "Unit V and full revision", tasks: ["Friction circle, clutch and belt numericals in one sitting", "Brake and dynamometer formulas with the rope-brake worked example", "Two full past papers under exam timing, drawing instruments ready"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last day before the paper",
      body: [
        "The final day is for consolidating what is already learned, not for new topics. Work through this checklist with drawing instruments at hand; every item is chosen because it is either a guaranteed question or a guaranteed mark-earner inside a bigger question.",
      ],
      bullets: [
        "Redraw from memory: the four slider-crank inversions, the Whitworth and the slotted-lever quick return - fixed link shaded each time.",
        "Rewrite the motion-law table: (1, infinite), (2, 4), (1.571, 4.93), (2, 6.28) with the jerk column.",
        "Rebuild one epicyclic table from blank paper: three rows, one constraint, the answer boxed.",
        "Recite the formula strip: e^(mu theta), Tc = m v^2, 2 omega v, T_min = 2/sin^2(phi), P = 2 pi N T / 60.",
        "Redraw one velocity polygon and one acceleration polygon for the same slider-crank position - label every vector.",
        "Sketch the friction circle, the rope brake and the cam profile construction steps - three diagrams, ten minutes.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Attempt Unit II first: the polygon questions are long but mechanical, and finishing them early settles the hand for drawing everywhere else.",
        "Draw every diagram with a hard pencil and label base circles, fixed links and vector directions - unlabeled sketches forfeit their own marks.",
        "State the law or theorem by name before using it: Grashof, Kennedy, the law of gearing, the capstan relation - named steps earn method marks even if arithmetic slips.",
        "Convert all angles to radians before e^(mu theta) and all millimetres to metres in power calculations - check units twice in every numerical.",
        "Time-box: 2-3 mark questions in five minutes, 7-mark questions in fifteen, and keep the last ten minutes to verify that every polygon closes and every table row is filled.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Substituting the wrap angle in degrees inside e^(mu theta) - 180 degrees is pi radians, not 180.",
        "Forgetting the factor 2 or flipping the sense in the Coriolis component 2 omega v - the direction rule is rotate the sliding velocity with the link.",
        "Pointing the normal acceleration component away from the centre - it always points along the link toward the reference point.",
        "Naming a four-bar mechanism without stating which link is grounded - Grashof classification is meaningless without the fixity.",
        "Using uniform pressure theory on a design (worn-clutch) question - the wording decides the theory, and the two torques differ.",
        "Confusing the pitch curve with the cam profile for roller followers - the profile sits inside the pitch curve by exactly one roller radius.",
      ],
    },
  ],
};
