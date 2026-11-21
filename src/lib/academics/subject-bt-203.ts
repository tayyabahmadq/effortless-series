/**
 * Academics - RGPV First-Year common subject: BT-203 Basic Mechanical.
 *
 * Five units x five sections = 25 sections.  Each section carries body
 * paragraphs, 5 bullets, 3 key terms, a callout, a diagram (varying kind),
 * a table as the practical element, and 3 exam-style questions (one 7-mark
 * with outline + two shorts).  A studyPlan closes the file.
 */

import type { AcademicSubject } from "./types";

export const bt203: AcademicSubject = {
  id: "bt-203",
  code: "BT-203",
  title: "Basic Mechanical",
  semester: "II Semester",
  program: "RGPV \u00b7 First Year Common (all B.Tech branches)",
  tagline:
    "The complete visual guide to first-year mechanical engineering: statics of forces and trusses, dynamics and machines, the laws of thermodynamics, IC engines and power plants, and the machine elements that transmit power between shafts.",
  description:
    "Five units walk from engineering statics - force resultants, moments and equilibrium, friction, centroids and trusses - into dynamics with Newton's laws, D'Alembert's principle, work-energy and simple machines. Thermodynamics follows with the zeroth and first laws, the steady flow energy equation, the second law and Carnot cycle, and entropy of ideal gases. IC engines then cover the four-stroke SI, two-stroke and four-stroke CI engines, Otto and Diesel cycles and engine performance indicators. The final unit turns to shafts, bearings, belt drives, gear trains, clutches and brakes.",
  accentColor: "#f87171",
  emoji: "ME",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Engineering Mechanics - Statics",
      summary:
        "The statics backbone every mechanical engineer relies on: force systems and resultants, moment and couple with Lami's theorem, friction on inclined planes, centroid and moment of inertia with the parallel axis theorem, and pin-jointed trusses solved by the method of joints.",
      chapter: {
        number: "01",
        title: "Engineering Mechanics - Statics",
        intro:
          "Unit I builds the statics backbone every mechanical engineer relies on: force systems and the parallelogram law of resultants, moment and couple with Lami's theorem for three-force equilibrium, friction with the inclined-plane analysis, centroid and moment of inertia with the parallel axis theorem, and pin-jointed trusses solved by the method of joints.",
        inOneBreath:
          "A force is a vector with magnitude, direction and point of application; the resultant of a coplanar concurrent system is found by summing x and y components; the moment of a force about a point is F times d; a couple is two equal opposite parallel forces with moment F times d and is a free vector; equilibrium of a coplanar system needs sum Fx = 0, sum Fy = 0 and, for non-concurrent systems, sum M = 0; Lami's theorem states F1 over sin(alpha) = F2 over sin(beta) = F3 over sin(gamma) for three concurrent forces in equilibrium; friction Fs = mu_s times N up to a limiting value; the angle of friction phi satisfies tan(phi) = mu; the centroid is the area-weighted average of part centroids; the moment of inertia of a rectangle about its centroidal axis is b times h cubed over 12; the parallel axis theorem shifts the axis by A times d squared; a perfect planar truss has m = 2j - 3 members and is solved joint by joint.",
        sections: [
          {
            number: "1.1",
            title: "Force systems and resultant",
            body: [
              "A force is a push or pull that tends to change the state of rest or motion of a body. It is a vector quantity with magnitude, direction and point of application, drawn to scale on a body using a straight arrow whose length gives magnitude and whose head gives direction. Forces are grouped into systems by how their lines of action lie: collinear forces share one line, concurrent forces pass through a single point, parallel forces have parallel lines, and general forces have no common pattern. The SI unit of force is the newton, approximately the weight of a 100-gram apple.",
              "The resultant of a force system is the single force that produces the same external effect on the rigid body as the original system. For two concurrent forces, the resultant is found by the parallelogram law: draw the two vectors from a common point, complete the parallelogram, and the diagonal from that point is the resultant in magnitude and direction. The triangle law is a special case where the second vector is drawn from the head of the first and the resultant closes the triangle. The reverse operation is resolution: splitting a single force into two convenient components, usually along perpendicular x and y axes.",
              "For a system of coplanar concurrent forces F1, F2, ..., Fn making angles theta1, theta2, ... with the x-axis, the resultant has x-component equal to the sum of each F times cos(theta) and y-component equal to the sum of each F times sin(theta). The magnitude is the square root of the sum of the squares of these components, and its direction with the x-axis is given by tan inverse of (sum of y over sum of x). For non-concurrent forces, the position of the resultant is fixed by equating moments about a chosen point. This resultant-replacement method is the workhorse of every statics problem in the later sections of this unit.",
            ],
            bullets: [
              "Force: a vector with magnitude, direction and point of application; SI unit is the newton.",
              "Resultant: the single force producing the same external effect as the given force system.",
              "Parallelogram law: the diagonal of the parallelogram formed by two vectors from a common point gives the resultant.",
              "Resolution: splitting a force into perpendicular components, usually Rx = R cos(theta), Ry = R sin(theta).",
              "For coplanar concurrent forces, R = sqrt(sum Rx squared + sum Ry squared), and tan(alpha) = sum Ry over sum Rx.",
            ],
            table: {
              caption: "Resolution of the four forces in the 7-mark worked question.",
              headers: ["Force (N)", "Angle (deg)", "Fx = F cos(theta)", "Fy = F sin(theta)"],
              rows: [
                ["10", "0", "10.00", "0.00"],
                ["15", "45", "10.61", "10.61"],
                ["20", "135", "-14.14", "14.14"],
                ["25", "210", "-21.65", "-12.50"],
                ["Sum", "-", "-15.18", "12.25"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From a force system to a single resultant",
              caption: "Each arrow cites one law - the route an exam answer must follow.",
              steps: [
                { label: "List all forces with magnitude and angle" },
                { label: "Resolve each into x and y", note: "Fx = F cos(theta), Fy = F sin(theta)" },
                { label: "Sum components", note: "sum Fx, sum Fy" },
                { label: "Compute resultant", note: "R = sqrt(sum Fx squared + sum Fy squared)" },
                { label: "Fix direction", note: "tan(alpha) = sum Ry over sum Rx" },
              ],
            },
            callout: {
              type: "exam",
              title: "Resolve before you sum",
              body: "Always resolve every force into x and y components first, then sum components separately. Attempting to add forces by angles invites sign errors, and RGPV answer sheets lose marks when the parallelogram is drawn without reporting the magnitudes used.",
            },
            keyTerms: [
              { term: "Force", definition: "A push or pull that tends to change the state of rest or motion of a body, having magnitude, direction and point of application." },
              { term: "Resultant", definition: "The single force that produces the same external effect on a rigid body as the entire given force system." },
              { term: "Parallelogram law", definition: "If two vectors originate from a common point, their resultant is the diagonal of the parallelogram built on them." },
            ],
            examQuestions: [
              {
                q: "Define force and classify force systems. Find the magnitude and direction of the resultant of four coplanar concurrent forces 10 N, 15 N, 20 N and 25 N acting at 0 deg, 45 deg, 135 deg and 210 deg respectively with the x-axis.",
                marks: 7,
                outline: [
                  "Define force as a vector with magnitude, direction, point of application; give SI unit.",
                  "Classify systems as collinear, concurrent, parallel, non-concurrent, and coplanar/non-coplanar.",
                  "State the resolution rule: Fx = F cos(theta), Fy = F sin(theta).",
                  "Tabulate each force with its Fx and Fy, using cos and sin of the given angles.",
                  "Sum the x-components and the y-components separately.",
                  "Compute magnitude R = sqrt(sum Fx squared + sum Fy squared).",
                  "Compute direction with tan inverse of sum Fy over sum Fx and state the quadrant.",
                ],
              },
              {
                q: "State the parallelogram law of forces and write the expression for the magnitude of the resultant of two forces.",
                marks: 2,
              },
              {
                q: "Resolve a force of 100 N acting at 30 deg with the x-axis into horizontal and vertical components.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Moment, couple, equilibrium, Lami's theorem",
            body: [
              "The moment of a force about a point measures its turning effect and equals the product of the force magnitude and the perpendicular distance from the point to the line of action of the force. We write M = F times d, with units of newton-metre. By sign convention, a moment that tends to rotate the body clockwise is taken as positive or negative depending on the chosen scheme, and the opposite sense carries the other sign. Moments are added algebraically, so a body is in rotational balance when the sum of clockwise moments equals the sum of anticlockwise moments - the principle of moments, also called Varignon's theorem.",
              "A couple is a pair of equal, opposite, parallel forces separated by a perpendicular distance; it produces a pure rotation with no net translation because the two forces cancel. The moment of a couple is F times d, where d is the distance between the two lines of action, and it is a free vector: its effect on the body is the same no matter where it is applied. Couples are combined by adding their moments algebraically, just like forces. Replacing a force by an equal parallel force at another point plus a couple is a standard technique used when transferring a force to a chosen moment centre for equilibrium analysis.",
              "Equilibrium means the body has no tendency to translate or rotate, so both the resultant force and the resultant moment must vanish. For coplanar concurrent forces the conditions reduce to sum Fx = 0 and sum Fy = 0, which are two scalar equations. For non-concurrent forces a third equation, sum M about a point = 0, is added; this is the three-equation set used in simply supported beam and frame problems. For a body acted upon by three concurrent forces in equilibrium, Lami's theorem states that each force is proportional to the sine of the angle between the other two: F1 over sin(alpha) equals F2 over sin(beta) equals F3 over sin(gamma), a fast route when angles are easy to read.",
            ],
            bullets: [
              "Moment M = F times d; SI unit newton-metre; turning effect about a chosen point.",
              "Couple: two equal, opposite, parallel forces; moment = F times d and is a free vector independent of application point.",
              "Varignon's theorem: the moment of the resultant of concurrent forces equals the sum of moments of the individual forces.",
              "Equilibrium of coplanar forces needs sum Fx = 0, sum Fy = 0 and, for non-concurrent systems, sum M = 0.",
              "Lami's theorem: for three concurrent forces in equilibrium, F1/sin(alpha) = F2/sin(beta) = F3/sin(gamma).",
            ],
            table: {
              caption: "Free- and fixed-body vector summary.",
              headers: ["Quantity", "Definition", "Resultant Force", "Resultant Moment"],
              rows: [
                ["Force", "push or pull along a line", "non-zero", "non-zero about off-line points"],
                ["Couple", "two equal opposite parallel forces", "zero", "non-zero (free vector)"],
                ["Moment", "F times d, turning effect", "no single force", "single scalar value"],
                ["Equilibrium", "no net motion", "zero", "zero"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Three checks before declaring equilibrium",
              caption: "Run all three; missing the moment equation is the most common slip.",
              stages: [
                { label: "Sum Fx = 0" },
                { label: "Sum Fy = 0", note: "translation" },
                { label: "Sum M = 0", note: "rotation" },
                { label: "Concurrent? Use Lami", note: "single sine equation" },
              ],
            },
            callout: {
              type: "tip",
              title: "Lami's shortcut",
              body: "When a body is held by three forces - typically a weight and two string or rod reactions - check first whether all three are concurrent. If yes, apply Lami's theorem to write one equation in the unknowns; this often beats resolving into x and y components and saves a full minute in the exam.",
            },
            keyTerms: [
              { term: "Moment", definition: "The turning effect of a force about a point, equal to the force magnitude times the perpendicular distance from the point to the line of action." },
              { term: "Couple", definition: "A pair of equal, opposite and parallel forces whose resultant is zero but whose moment is non-zero; the moment is a free vector." },
              { term: "Lami's theorem", definition: "For three concurrent forces in equilibrium, each force is proportional to the sine of the angle between the other two." },
            ],
            examQuestions: [
              {
                q: "Define moment of a force and a couple. State the conditions of equilibrium for coplanar concurrent and non-concurrent force systems, and state and prove Lami's theorem.",
                marks: 7,
                outline: [
                  "Define moment M = F times d with unit and sign convention.",
                  "Define a couple as two equal, opposite, parallel forces with moment F times d, a free vector.",
                  "State equilibrium conditions for concurrent systems: sum Fx = 0, sum Fy = 0 (two equations).",
                  "State equilibrium conditions for non-concurrent systems: add sum M about a point = 0 (three equations).",
                  "State Lami's theorem for three concurrent forces in equilibrium.",
                  "Prove it by resolving each force along the angle bisectors or by the sine rule in the closed triangle of forces.",
                  "Give a numerical illustration, e.g. a 100 N lamp hung by two strings at angles.",
                ],
              },
              {
                q: "Distinguish between a moment and a couple.",
                marks: 2,
              },
              {
                q: "A force of 200 N acts at a perpendicular distance of 0.5 m from point O. Find the moment about O.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Friction: laws and inclined plane",
            body: [
              "Friction is the tangential force that opposes relative motion or its tendency between two surfaces in contact. When a body rests on a surface and an external force tries to slide it, an equal and opposite friction force develops up to a limiting value. Below this limit the body stays at rest and the friction equals the applied force; above it the body slides. The limiting static friction Fs is experimentally proportional to the normal reaction N, so Fs = mu_s times N where mu_s is the coefficient of static friction, a dimensionless property of the two materials. Once sliding begins, kinetic friction Fk = mu_k times N takes over, with mu_k slightly less than mu_s.",
              "The laws of friction, sometimes called Coulomb's laws, summarise the experimental behaviour: friction always opposes the motion or its tendency; for a given pair of surfaces the coefficient is roughly constant over a wide range of normal loads and speeds; friction is independent of the apparent area of contact; and friction is proportional to the normal reaction. The angle of friction phi is defined by tan(phi) = mu, and the angle of repose is the maximum inclination of a plane on which a body just stays without sliding, equal to phi. The cone of friction collects every possible direction of the total reaction.",
              "On an inclined plane making angle alpha with the horizontal, a body of weight W experiences a normal reaction N = W cos(alpha) and a downslope component W sin(alpha). The body is just on the point of sliding down when W sin(alpha) = mu_s times W cos(alpha), giving tan(alpha) = mu_s, the angle of repose result. When an external force P pulls the body up the plane, equilibrium along the slope gives P = W sin(alpha) + mu W cos(alpha). When friction acts to prevent downward sliding, the analysis flips sign. Ladders leaning against walls, blocks on inclined planes and screw jacks all reduce to resolving forces along and perpendicular to the plane.",
            ],
            bullets: [
              "Static friction Fs = mu_s times N up to a limiting value; kinetic friction Fk = mu_k times N once sliding, with mu_k < mu_s.",
              "Coefficient of friction mu is dimensionless and depends on the materials, not the contact area.",
              "Angle of friction phi: tan(phi) = mu; angle of repose equals the angle of friction.",
              "On an inclined plane at angle alpha, N = W cos(alpha) and downslope drive is W sin(alpha).",
              "Force to pull up the plane: P = W sin(alpha) + mu W cos(alpha).",
            ],
            table: {
              caption: "Friction coefficients of common engineering pairs.",
              headers: ["Material Pair", "mu_s (static)", "mu_k (kinetic)", "Typical Use"],
              rows: [
                ["Steel on steel", "0.74", "0.57", "machine slides"],
                ["Steel on cast iron", "0.40", "0.23", "lathe beds"],
                ["Leather on wood", "0.50", "0.40", "belt drives"],
                ["Rubber on asphalt", "0.90", "0.75", "tyres"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Layers of friction behaviour as load rises",
              caption: "Static friction rises with applied force up to the limit, then drops to kinetic.",
              layers: [
                { label: "Rest region", note: "F = applied force, no slip" },
                { label: "Limiting friction", note: "Fs = mu_s times N" },
                { label: "Slip region", note: "Fk = mu_k times N, with mu_k < mu_s" },
                { label: "Cone of friction", note: "all reaction directions" },
              ],
            },
            callout: {
              type: "warning",
              title: "Pick the friction direction carefully",
              body: "Friction always opposes the direction of impending motion. In ladder and inclined-plane problems, first decide which way the body would slide without friction, then draw friction in the opposite sense. Reversing this single arrow turns a correct answer into a wrong one.",
            },
            keyTerms: [
              { term: "Coefficient of friction", definition: "The ratio of limiting friction to the normal reaction, mu = F/N; dimensionless and material dependent." },
              { term: "Angle of repose", definition: "The maximum angle of an inclined plane on which a body remains at rest, equal to the angle of friction." },
              { term: "Cone of friction", definition: "The cone generated by all possible directions of the total reaction from the surface for any direction of applied force." },
            ],
            examQuestions: [
              {
                q: "State the laws of friction. Define angle of friction and angle of repose and show they are equal. A body of weight W rests on a plane inclined at alpha to the horizontal; find the force required to just move it (i) up the plane and (ii) down the plane.",
                marks: 7,
                outline: [
                  "State the four Coulomb laws of friction: opposes motion, proportional to N, independent of area, coefficient constant for a pair.",
                  "Define coefficient of friction mu = F/N, angle of friction phi with tan(phi) = mu.",
                  "Define angle of repose as the steepest inclination at which the body just stays.",
                  "Show equality: at the repose angle, W sin(alpha) = mu W cos(alpha) so tan(alpha) = mu = tan(phi).",
                  "For force up the plane: P = W sin(alpha) + mu W cos(alpha).",
                  "For force down the plane: P = W sin(alpha) - mu W cos(alpha) when sin(alpha) > mu cos(alpha).",
                  "Mention that if the body would not slide on its own, a force down the plane is needed to overcome friction acting up.",
                ],
              },
              {
                q: "Define coefficient of friction and angle of friction.",
                marks: 2,
              },
              {
                q: "A block of weight 500 N rests on a horizontal surface with mu = 0.3. Find the horizontal force needed to just move it.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Centroid and moment of inertia",
            body: [
              "The centroid of a plane area is the point at which the entire area is assumed to be concentrated so that the moment of the area about any axis equals the moment of the distributed area about that axis. For a composite figure built from rectangles, triangles and circles, the centroid coordinates are the weighted averages of the part centroids, weights being the areas: x-bar equals sum of (Ai times xi) over sum of Ai, and similarly for y-bar. Symmetry shortens the work: a rectangle's centroid is at its geometric centre, a triangle's lies one-third of the height from the base, and a semicircle's centroid is 4r over 3pi from the flat side.",
              "The moment of inertia of an area about an axis measures its resistance to bending and is defined as the integral of y squared dA over the area, written I = integral y squared dA. Its SI unit is metre to the fourth power. For a rectangle of width b and height h about its centroidal axis parallel to the base, I = b times h cubed divided by 12; for a circle of radius r about a diameter, I = pi times r to the fourth divided by 4. The radius of gyration k is defined by I = A times k squared and gives a single representative distance from the axis.",
              "The parallel axis theorem shifts the reference axis: the moment of inertia about an axis parallel to a centroidal axis equals the centroidal value plus A times d squared, where d is the distance between the axes. This theorem lets us combine standard results to find moments of inertia about any axis outside the centroid, such as the base of a rectangle or the rim of a circle. The perpendicular axis theorem, valid only for plane areas, states that the polar moment of inertia about an axis perpendicular to the area equals the sum of the rectangular moments about two perpendicular axes in the plane: Iz = Ix + Iy. Together these two theorems handle almost every composite-section problem.",
            ],
            bullets: [
              "Centroid coordinates: x-bar = sum(Ai times xi) / sum(Ai); y-bar = sum(Ai times yi) / sum(Ai).",
              "Standard centroids: rectangle at centre, triangle one-third height from base, semicircle 4r/(3pi) from flat side.",
              "Moment of inertia I = integral y squared dA; unit metre to the fourth power.",
              "Rectangle about centroid: I = b times h cubed / 12; circle about diameter: I = pi times r to the fourth / 4.",
              "Parallel axis theorem: I about any parallel axis = I_centroidal + A times d squared.",
            ],
            table: {
              caption: "Moment of inertia of standard shapes about centroidal axes.",
              headers: ["Shape", "Dimension", "Ix (centroidal)", "Iy (centroidal)"],
              rows: [
                ["Rectangle", "width b, height h", "b h^3 / 12", "h b^3 / 12"],
                ["Circle", "radius r", "pi r^4 / 4", "pi r^4 / 4"],
                ["Triangle", "base b, height h", "b h^3 / 36", "needs integration"],
                ["Hollow circle", "outer R, inner r", "pi (R^4 - r^4) / 4", "pi (R^4 - r^4) / 4"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Building blocks for composite-section inertia",
              caption: "Memorise these results; almost every composite section splits into them.",
              tiers: [
                { label: "Rectangle b h^3 / 12", note: "centroidal" },
                { label: "Circle pi r^4 / 4", note: "about diameter" },
                { label: "Triangle b h^3 / 36", note: "about centroid" },
                { label: "Hollow: subtract holes", note: "negative area" },
                { label: "Parallel axis theorem", note: "shift axis by d" },
              ],
            },
            callout: {
              type: "exam",
              title: "Tabulate the parts before summing",
              body: "For composite centroid and moment of inertia questions, build a four-column table: part, area Ai, centroid xi, and Ai times xi. RGPV examiners reward this layout with method marks even when a single arithmetic slip occurs in the final sum.",
            },
            keyTerms: [
              { term: "Centroid", definition: "The point of an area at which the entire area is assumed to be concentrated for first-moment calculations." },
              { term: "Moment of inertia", definition: "The second moment of area, I = integral y squared dA, measuring resistance to bending about an axis." },
              { term: "Radius of gyration", definition: "A representative distance k such that I = A times k squared, summarising the spread of area from the axis." },
            ],
            examQuestions: [
              {
                q: "Define centroid and moment of inertia of an area. State and prove the parallel axis theorem and the perpendicular axis theorem. Find the moment of inertia of a rectangle of width b and height h about its base.",
                marks: 7,
                outline: [
                  "Define centroid as the point where the area is assumed concentrated and moment of inertia I = integral y squared dA.",
                  "Give units: metre to the fourth power for I.",
                  "State parallel axis theorem: I_axis = I_centroidal + A times d squared.",
                  "Prove it: write y = y_c + d, expand (y_c + d) squared = y_c squared + 2 y_c d + d squared, integrate; cross term vanishes because integral of y_c over centroidal axis is zero.",
                  "State perpendicular axis theorem for plane areas: Iz = Ix + Iy.",
                  "For rectangle: I_centroidal = b h^3 / 12; base is h/2 below centroid, so I_base = b h^3 / 12 + b h (h/2) squared = b h^3 / 12 + b h^3 / 4 = b h^3 / 3.",
                  "State the result and mention the same value is obtained by direct integration of y squared from 0 to h.",
                ],
              },
              {
                q: "State the parallel axis theorem.",
                marks: 2,
              },
              {
                q: "Find the moment of inertia of a circle of radius 50 mm about its diameter.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Simple trusses: method of joints",
            body: [
              "A truss is a structure composed of slender members connected at frictionless pin joints to form a set of triangles, designed to carry loads applied only at the joints. Because the joints are pins and loads act at them, every member is a two-force member: it carries either pure tension or pure compression along its axis, with no bending. A perfect truss has just enough members to keep its shape - for a planar truss with j joints the minimum number of members is m = 2j minus 3. With fewer members the truss collapses; with more it becomes statically indeterminate, requiring additional equations from compatibility.",
              "Before solving, the support reactions are found by treating the whole truss as a rigid body: sum Fx = 0, sum Fy = 0 and sum M about a support = 0. The method of joints then proceeds joint by joint: pick a joint with at most two unknown member forces, draw the free-body diagram of the pin, assume the unknown members are in tension (arrows pulling away from the joint), and apply sum Fx = 0 and sum Fy = 0. A negative answer means the member is actually in compression. Move to the next joint with at most two unknowns and repeat until all member forces are known.",
              "The choice of starting joint matters: a joint attached to a support usually has two unknowns once reactions are known. Members carrying zero force, called zero-force members, can be spotted by inspection: if only three members meet at a joint and two are collinear, the third is a zero-force member; if only two non-collinear members meet at an unloaded joint, both are zero. Removing these simplifies the analysis before any equation is written. Truss analysis finds practical use in roof trusses, bridge girders, crane jibs and transmission towers, where minimising weight while carrying large loads is the central design goal.",
            ],
            bullets: [
              "Truss: pin-jointed triangulated framework with two-force members in pure tension or compression.",
              "Perfect truss condition: m = 2j - 3 for a planar truss with j joints.",
              "Method of joints: solve one joint at a time where no more than two member forces are unknown.",
              "Assume members in tension; a negative result means compression.",
              "Zero-force members: third non-collinear member of a three-member joint, or both members of an unloaded two-member non-collinear joint.",
            ],
            table: {
              caption: "Truss classification by member count.",
              headers: ["Type", "Members m", "Stability", "Analysis"],
              rows: [
                ["Perfect", "m = 2j - 3", "stable and determinate", "equilibrium of joints"],
                ["Deficient", "m < 2j - 3", "collapses - mechanism", "not stable"],
                ["Redundant", "m > 2j - 3", "stable but indeterminate", "needs compatibility"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The method of joints loop",
              caption: "Repeat the steps until every member force is found.",
              steps: [
                { label: "Find support reactions", note: "whole truss as rigid body" },
                { label: "Pick joint with 2 unknowns" },
                { label: "Assume tension, sum Fx and Fy = 0" },
                { label: "Record forces; mark negative as compression" },
                { label: "Move to next joint" },
                { label: "Repeat until solved" },
              ],
            },
            callout: {
              type: "tip",
              title: "Spot zero-force members first",
              body: "Before writing any joint equation, scan every joint for the two zero-force rules. Removing zero members up front can cut the joint-by-joint work by half, and the rule itself is a frequent 2-mark short question.",
            },
            keyTerms: [
              { term: "Truss", definition: "A pin-jointed framework of slender members arranged in triangles so that loads at joints make every member a two-force member." },
              { term: "Two-force member", definition: "A member in equilibrium under forces only at its two ends, which must be equal, opposite and collinear with the member axis." },
              { term: "Zero-force member", definition: "A member that carries no force under a given loading, identified by joint geometry to simplify analysis." },
            ],
            examQuestions: [
              {
                q: "Define a perfect truss and state the relation between members and joints. Explain the method of joints for analysing a planar truss and identify the rules for detecting zero-force members.",
                marks: 7,
                outline: [
                  "Define a truss as a pin-jointed triangulated framework with loads applied only at joints.",
                  "Justify two-force members: pin joints and joint loads mean members carry only axial force.",
                  "State the perfect truss relation m = 2j - 3; fewer members gives a mechanism, more gives indeterminacy.",
                  "Compute support reactions using sum Fx = 0, sum Fy = 0 and sum M = 0 on the whole truss.",
                  "Pick a joint with at most two unknowns, draw the pin free-body diagram, assume tension, solve sum Fx = 0 and sum Fy = 0.",
                  "Explain that a negative result means the member is in compression; move to the next solvable joint.",
                  "State zero-force rules: third non-collinear member at a three-member joint; both members at an unloaded two-member non-collinear joint.",
                ],
              },
              {
                q: "State the condition for a perfect planar truss.",
                marks: 2,
              },
              {
                q: "How do you detect a zero-force member in a truss? Give one rule.",
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
      title: "Dynamics",
      summary:
        "Dynamics steps from statics into moving bodies: kinematics of particles with the standard equations and projectile formulas, Newton's second law and D'Alembert's principle, work-energy and impulse-momentum theorems, simple machines characterised by MA, VR and efficiency with the law of the machine, and belt-pulley systems with the friction-driven tension ratio.",
      chapter: {
        number: "02",
        title: "Dynamics",
        intro:
          "Unit II steps from statics into dynamics: kinematics of particles with the standard equations of motion and projectile formulas, Newton's second law paired with D'Alembert's principle, work-energy and impulse-momentum theorems with the coefficient of restitution, simple machines characterised by MA, VR and efficiency governed by the law of the machine, and belt-pulley systems with the friction-driven tension ratio.",
        inOneBreath:
          "Kinematics relates position, velocity and acceleration without forces; the three equations of uniformly accelerated motion are v = u + at, s = ut + half a t squared and v squared = u squared + 2as; projectile motion splits into constant horizontal velocity and constant vertical acceleration minus g; Newton's second law is F = m times a; D'Alembert's principle adds a reversed effective force minus m times a so the body is in dynamic equilibrium; the work-energy theorem says net work equals change in kinetic energy; impulse equals change in momentum; the coefficient of restitution e = (v2 - v1) over (u1 - u2) with e = 1 elastic and e = 0 plastic; mechanical advantage MA = W/P, velocity ratio VR = (distance moved by effort) over (distance moved by load), efficiency eta = MA over VR; the law of the machine is P = mu W + C; the maximum MA is 1/mu; a system of n pulleys has VR = n; belt power P = (T1 - T2) times v with T1/T2 = e to the power mu theta.",
        sections: [
          {
            number: "2.1",
            title: "Kinematics of particles",
            body: [
              "Kinematics describes the motion of a particle without considering the forces that cause it. A particle is an idealised body whose dimensions are negligible compared with its path, so its position is fully specified by a single point. Position, velocity and acceleration are the fundamental kinematic quantities: position is the vector from a chosen origin, velocity is the time rate of change of position, and acceleration is the time rate of change of velocity. For rectilinear motion along a straight line these reduce to scalar equations, and the standard equations of motion link displacement s, velocities u and v, acceleration a and time t.",
              "The three standard equations of uniformly accelerated rectilinear motion are v = u + at, s = ut + half a t squared, and v squared = u squared + 2as. They assume constant acceleration, apply along any straight line, and are derived by integrating the definition a = dv/dt. When acceleration varies with position or time, the equations no longer apply and we return to integration: a = v dv/ds for acceleration as a function of position, or a = dv/dt for acceleration as a function of time. Projectile motion is the canonical two-dimensional case: horizontal motion has constant velocity and vertical motion has constant acceleration g downward.",
              "In projectile motion a particle launched with speed u at angle theta to the horizontal has horizontal velocity u cos(theta) (constant) and vertical velocity u sin(theta) minus gt. The maximum height reached is u squared sin squared(theta) over 2g, the time of flight is 2u sin(theta) over g, and the horizontal range on level ground is u squared sin(2 theta) over g. The range is maximum when theta = 45 deg. These results come from separating the two motions and eliminating time, and they hold for idealised no-air-resistance flight. Curvilinear motion is also described using normal and tangential components, with acceleration split into a tangential part dv/dt and a normal part v squared over rho, where rho is the radius of curvature.",
            ],
            bullets: [
              "Kinematics relates position, velocity and acceleration without reference to forces.",
              "Rectilinear motion equations: v = u + at, s = ut + (1/2) a t squared, v squared = u squared + 2as (constant a).",
              "Projectile: horizontal velocity constant; vertical motion has acceleration minus g.",
              "Range R = u squared sin(2 theta) / g; maximum at theta = 45 deg.",
              "Curvilinear acceleration: tangential dv/dt plus normal v squared / rho where rho is the radius of curvature.",
            ],
            table: {
              caption: "Projectile results at launch angle theta with speed u.",
              headers: ["Quantity", "Expression", "Maximum at", "Value at max"],
              rows: [
                ["Maximum height", "u squared sin squared(theta) / (2g)", "theta = 90 deg", "u squared / (2g)"],
                ["Time of flight", "2 u sin(theta) / g", "theta = 90 deg", "2 u / g"],
                ["Range", "u squared sin(2 theta) / g", "theta = 45 deg", "u squared / g"],
                ["Trajectory equation", "y = x tan(theta) - g x squared / (2 u squared cos squared(theta))", "varies", "parabola"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Pick the right acceleration equation",
              caption: "Match the form of acceleration to the equation that integrates cleanly.",
              start: "Given a = ?",
              branches: [
                { label: "a is constant", outcome: "use v = u + at, s = ut + (1/2) a t squared", good: true },
                { label: "a = f(t)", outcome: "integrate a dt to get v", good: true },
                { label: "a = f(s)", outcome: "use a = v dv/ds and integrate", good: true },
                { label: "a = 0", outcome: "uniform motion: s = u t", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Split horizontal and vertical first",
              body: "Projectile problems simplify the moment you separate the two motions. Write horizontal: x = u cos(theta) times t, and vertical: y = u sin(theta) times t minus half g t squared. Most RGPV projectile questions collapse to eliminating t between these two lines.",
            },
            keyTerms: [
              { term: "Displacement", definition: "The change in position of a particle from a reference origin, a vector quantity." },
              { term: "Acceleration", definition: "The time rate of change of velocity, with SI unit metre per second squared." },
              { term: "Projectile", definition: "A particle moving under gravity alone after launch, with constant horizontal velocity and constant downward vertical acceleration." },
            ],
            examQuestions: [
              {
                q: "Derive the three equations of motion for a particle moving with uniform acceleration along a straight line. A particle is projected with speed 20 m/s at 30 deg to the horizontal; find the maximum height, time of flight and horizontal range. Take g = 9.81 m/s squared.",
                marks: 7,
                outline: [
                  "Start from a = dv/dt with a constant; integrate to get v = u + at.",
                  "Integrate v = ds/dt to get s = ut + (1/2) a t squared.",
                  "Eliminate t between the first two equations to obtain v squared = u squared + 2as.",
                  "For the projectile, separate motions: horizontal u cos(30) = 17.32 m/s, vertical u sin(30) = 10 m/s.",
                  "Maximum height H = u squared sin squared(theta) / (2g) = 100/19.62 = 5.10 m.",
                  "Time of flight T = 2 u sin(theta) / g = 20/9.81 = 2.04 s.",
                  "Range R = u squared sin(2 theta) / g = 400 times 0.866 / 9.81 = 35.3 m.",
                ],
              },
              {
                q: "Define projectile and state the expression for maximum range.",
                marks: 2,
              },
              {
                q: "A car starts from rest and accelerates at 2 m/s squared for 10 s. Find its final velocity and distance covered.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Newton's second law and D'Alembert's principle",
            body: [
              "Newton's laws of motion govern the dynamics of particles. The first law states that a body continues in its state of rest or uniform motion unless an external force acts on it, defining inertia. The second law gives the quantitative relation: the rate of change of momentum equals the applied force, and for constant mass reduces to F = m times a, where F is the net force in newtons, m is the mass in kilograms and a is the acceleration in metres per second squared. The third law states that every action has an equal and opposite reaction, the basis for free-body diagrams of connected bodies.",
              "Newton's second law is a vector equation, so it splits into components along convenient axes: sum Fx = m times ax and sum Fy = m times ay. For motion along an inclined plane, the natural axes are along and perpendicular to the plane, and the weight W = m times g splits into m g sin(alpha) down the plane and m g cos(alpha) perpendicular to it. For connected bodies such as two masses linked over a pulley, a single cable tension appears in both free-body diagrams and a common acceleration is shared. Writing F = m times a for each body and eliminating the tension gives the acceleration and the cable force.",
              "D'Alembert's principle converts a dynamics problem into an equivalent statics problem by introducing an inertial force, also called the reversed effective force, equal to minus m times a applied at the particle. With this added, the body is in equilibrium under the real forces and the inertial force, so the equations of statics apply: sum of forces including minus m times a equals zero. This restatement is especially useful for connected systems and rotating bodies, where the inertial torque replaces angular acceleration. The principle does not change the physics - it is a bookkeeping device - but it lets the same free-body diagram machinery built for statics carry over to dynamics, simplifying exam solutions.",
            ],
            bullets: [
              "Newton's second law: F = m times a (vector), components sum Fx = m ax, sum Fy = m ay.",
              "Weight splits on an inclined plane: W sin(alpha) along the plane, W cos(alpha) normal to it.",
              "Connected bodies share a common cable tension and a common acceleration.",
              "D'Alembert's principle: add reversed effective force minus m a so the body is in dynamic equilibrium.",
              "Inertial torque for rotation equals minus I alpha, the angular analogue of minus m a.",
            ],
            table: {
              caption: "Newton's three laws and their dynamic use.",
              headers: ["Law", "Statement", "Quantitative Form", "Typical Use"],
              rows: [
                ["First", "inertia - no net force means no acceleration", "sum F = 0 gives a = 0", "equilibrium check"],
                ["Second", "rate of change of momentum = force", "F = m times a", "acceleration from force"],
                ["Third", "equal and opposite reaction", "F_AB = -F_BA", "free-body diagrams"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "When to use which law",
              caption: "Match the question type to the principle that solves it fastest.",
              axes: { x: "body type", y: "motion type" },
              quadrants: [
                { label: "Single particle, linear", note: "F = m a directly" },
                { label: "Connected bodies, linear", note: "shared a, eliminate T" },
                { label: "Single particle, rotation", note: "torque = I alpha" },
                { label: "Connected bodies, rotation", note: "D'Alembert + inertial torque" },
              ],
            },
            callout: {
              type: "exam",
              title: "Free-body diagram first, always",
              body: "Even when the question asks only for acceleration, sketch the free-body diagram of every connected body before writing F = m a. The diagram earns method marks, prevents sign errors in the inertial force, and is the single step RGPV examiners look for before crediting the final equation.",
            },
            keyTerms: [
              { term: "Inertia", definition: "The resistance of a body to any change in its state of rest or uniform motion, quantified by its mass." },
              { term: "D'Alembert's principle", definition: "The statement that a dynamics problem can be reduced to a statics problem by adding an inertial force minus m a to the real forces, giving dynamic equilibrium." },
              { term: "Reversed effective force", definition: "A fictitious force of magnitude m a directed opposite to the acceleration, used to apply static equilibrium equations to an accelerating body." },
            ],
            examQuestions: [
              {
                q: "State Newton's three laws of motion. State D'Alembert's principle and explain how it reduces a dynamics problem to a statics problem. Two masses of 5 kg and 3 kg are connected by a light inextensible string over a frictionless pulley; find the acceleration and the tension in the string using D'Alembert's principle.",
                marks: 7,
                outline: [
                  "State Newton's first law (inertia), second law (F = m a) and third law (action-reaction).",
                  "State D'Alembert's principle: add reversed effective force minus m a to reach dynamic equilibrium.",
                  "Draw free-body diagrams of 5 kg and 3 kg, with the heavier moving down and the lighter moving up.",
                  "Apply D'Alembert: for 5 kg, 5g - T = 5a; for 3 kg, T - 3g = 3a.",
                  "Add equations: 2g = 8a, so a = 2g/8 = 2.45 m/s squared.",
                  "Substitute back: T = 3g + 3a = 29.43 + 7.35 = 36.78 N.",
                  "Mention that the same equations follow from Newton's second law directly; D'Alembert is the bookkeeping device.",
                ],
              },
              {
                q: "State D'Alembert's principle.",
                marks: 2,
              },
              {
                q: "A force of 50 N acts on a 10 kg body on a smooth horizontal surface. Find the acceleration.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Work-energy and impulse-momentum",
            body: [
              "Work is done when a force moves its point of application through a displacement in the direction of the force. The work done by a constant force F moving through displacement s at angle theta to the force is W = F times s times cos(theta), with the SI unit joule. Power is the time rate of doing work, P = W over t = F times v, with unit watt. Energy is the capacity to do work; mechanical energy appears as kinetic energy, half m v squared, for a moving body, and potential energy, m g h, for a body raised by height h in a gravitational field. The work-energy theorem states that the net work done on a body equals its change in kinetic energy.",
              "When the only forces doing work are conservative - gravity, springs - the total mechanical energy is conserved: half m v squared plus m g h is constant along the path. This principle solves roller-coaster, pendulum and free-fall problems without writing equations of motion: equate energies at two states and solve for the unknown velocity or height. When friction acts, mechanical energy is not conserved; instead, the work done against friction equals the loss in mechanical energy, with the lost energy dissipated as heat. For a body sliding down a rough plane, the kinetic energy at the bottom equals the drop in potential energy minus the work done against friction.",
              "Impulse is the product of a force and the time for which it acts, J = integral F dt, equal to the change in linear momentum of the body. Momentum itself is mass times velocity, p = m times v, a vector. Conservation of linear momentum states that for a system with no external force, total momentum is constant; this principle resolves collision problems where forces are unknown but brief. In direct impact of two bodies, the coefficient of restitution e relates the relative velocities before and after impact: e equals (v2 - v1) after divided by (u1 - u2) before. For perfectly elastic impact e = 1 and kinetic energy is conserved; for perfectly plastic impact e = 0 and the bodies move together after impact.",
            ],
            bullets: [
              "Work W = F s cos(theta); unit joule; power P = F v, unit watt.",
              "Kinetic energy KE = (1/2) m v squared; potential energy PE = m g h.",
              "Work-energy theorem: net work = change in kinetic energy.",
              "Impulse J = integral F dt = change in momentum; momentum p = m v.",
              "Coefficient of restitution e = (v2 - v1) / (u1 - u2); e = 1 elastic, e = 0 plastic.",
            ],
            table: {
              caption: "Mechanical quantities in dynamics.",
              headers: ["Quantity", "Expression", "SI Unit", "Conserved When"],
              rows: [
                ["Work", "F s cos(theta)", "joule", "always (energy form)"],
                ["Kinetic energy", "(1/2) m v squared", "joule", "no friction; e = 1"],
                ["Momentum", "m v", "kg m/s", "no external force"],
                ["Impulse", "F t", "N s", "always equals momentum change"],
                ["Power", "F v", "watt", "rate quantity"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two routes to the same velocity",
              caption: "Choose the principle that uses the known quantities.",
              left: {
                heading: "Work-energy route",
                items: [
                  "Needs force and displacement",
                  "KE change = net work",
                  "Best when forces and distances are given",
                  "Handles friction as a work term",
                ],
              },
              right: {
                heading: "Impulse-momentum route",
                items: [
                  "Needs force and time",
                  "Momentum change = impulse",
                  "Best for impact and short times",
                  "Handles unknown large forces via conservation",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Friction breaks energy conservation",
              body: "Energy is conserved only when the forces doing work are conservative. If a rough surface or air drag appears, mechanical energy is not conserved; account for the work done against friction as a loss. Skipping this step is the most common reason work-energy exam answers come out wrong.",
            },
            keyTerms: [
              { term: "Work", definition: "The product of a force and the displacement of its point of application in the direction of the force, unit joule." },
              { term: "Impulse", definition: "The integral of a force over its time of action, equal to the change in linear momentum of the body." },
              { term: "Coefficient of restitution", definition: "The ratio of relative separation velocity to relative approach velocity for two colliding bodies, between 0 and 1." },
            ],
            examQuestions: [
              {
                q: "Define work, energy and impulse. State the work-energy theorem and the principle of conservation of linear momentum. A 2 kg body moving at 10 m/s is brought to rest by a constant force over 4 s; find the force and the stopping distance.",
                marks: 7,
                outline: [
                  "Define work W = F s cos(theta), energy as the capacity to do work, and impulse J = integral F dt.",
                  "State the work-energy theorem: net work = (1/2) m v squared final minus (1/2) m u squared initial.",
                  "State conservation of linear momentum: with no external force, total momentum is constant.",
                  "Find impulse: change in momentum = m(v - u) = 2(0 - 10) = -20 kg m/s.",
                  "Force = impulse / time = -20/4 = -5 N (magnitude 5 N opposite to motion).",
                  "Use work-energy: work done = -(1/2) m u squared = -100 J; distance = work / force = 100 / 5 = 20 m.",
                  "Cross-check with kinematics: v = u + at gives a = -2.5 m/s squared, s = ut + (1/2) a t squared = 20 m.",
                ],
              },
              {
                q: "State the work-energy theorem.",
                marks: 2,
              },
              {
                q: "Define coefficient of restitution. Two bodies approach at 6 m/s and 4 m/s and separate at 3 m/s and 1 m/s; find e.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Simple machines: MA, VR, efficiency, law of machine",
            body: [
              "A simple machine is a device that transmits or modifies a force to help move a load. The effort P is the input force applied to the machine, the load W is the output force overcome, and the machine is characterised by its mechanical advantage MA = W over P and its velocity ratio VR = distance moved by effort over distance moved by load. The ideal mechanical advantage equals the velocity ratio in the absence of friction; in practice friction reduces the actual mechanical advantage. The efficiency eta is the ratio of output work to input work, eta = MA over VR, expressed as a percentage, and is always less than 100 percent in a real machine.",
              "Velocity ratio is a purely kinematic property fixed by the geometry of the machine. For a simple wheel and axle, VR equals the ratio of the wheel radius to the axle radius; for a screw jack, VR equals 2 pi times the lever length divided by the pitch of the screw; for a system of n pulleys, VR equals n. The mechanical advantage, by contrast, depends on friction and on the load itself; experiments show that for many machines the relation between effort and load is linear over a working range, written P = mu times W + C, where mu is the coefficient of friction and C is the constant effort needed to overcome machine friction at zero load. This linear relation is the law of the machine.",
              "Differentiating the law of the machine P = mu W + C gives dP/dW = mu, so the actual mechanical advantage MA = W/P = W/(mu W + C). At small loads the constant C dominates and MA is poor; at large loads MA approaches 1/mu asymptotically, giving the maximum possible mechanical advantage MA_max = 1/mu. The efficiency eta = MA over VR rises with load up to a maximum, after which it falls if the machine is over-loaded or if friction heating dominates. A machine is self-locking when the load cannot drive the machine backwards, which happens when the efficiency is less than 50 percent; screw jacks and worm gears exploit this property to hold loads without external braking.",
            ],
            bullets: [
              "Mechanical advantage MA = W / P; velocity ratio VR = effort distance / load distance.",
              "Efficiency eta = MA / VR = output work / input work; always less than 100 percent in practice.",
              "Velocity ratio is fixed by geometry; for a screw jack VR = 2 pi L / p, where p is the pitch.",
              "Law of the machine: P = mu W + C, where mu is friction coefficient and C is machine friction at zero load.",
              "Maximum MA = 1/mu; a machine is self-locking when efficiency is below 50 percent.",
            ],
            table: {
              caption: "Velocity ratio of common simple machines.",
              headers: ["Machine", "Geometry", "Velocity Ratio", "Self-locking"],
              rows: [
                ["Wheel and axle", "wheel radius R, axle radius r", "R / r", "no"],
                ["Screw jack", "lever L, pitch p", "2 pi L / p", "yes"],
                ["System of n pulleys", "n supporting ropes", "n", "depends"],
                ["Worm and wheel", "n teeth on wheel", "n", "yes"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From load to required effort",
              caption: "Five steps to predict the effort for any given load.",
              steps: [
                { label: "List machine geometry" },
                { label: "Compute VR", note: "from geometry" },
                { label: "Apply law of machine", note: "P = mu W + C" },
                { label: "MA = W/P; efficiency = MA/VR" },
                { label: "State self-locking if eta < 50 percent" },
              ],
            },
            callout: {
              type: "exam",
              title: "VR from geometry, MA from experiment",
              body: "Velocity ratio is geometry and is computed exactly; mechanical advantage depends on friction and is measured. Always quote the VR formula for the specific machine before computing efficiency, then apply the law of the machine to predict the effort. Skipping the VR derivation costs two easy marks.",
            },
            keyTerms: [
              { term: "Mechanical advantage", definition: "The ratio of load lifted to effort applied, MA = W/P, a measure of force amplification by a machine." },
              { term: "Velocity ratio", definition: "The ratio of the distance moved by the effort to the distance moved by the load in the same time, fixed by the machine geometry." },
              { term: "Law of machine", definition: "The empirical linear relation between effort and load, P = mu W + C, over the working range of a machine." },
            ],
            examQuestions: [
              {
                q: "Define mechanical advantage, velocity ratio and efficiency of a simple machine. State the law of the machine and derive the expression for maximum mechanical advantage. A machine has the law P = 0.05 W + 12 N; find the effort to lift a load of 2000 N and the maximum mechanical advantage.",
                marks: 7,
                outline: [
                  "Define MA = W/P, VR = (distance moved by effort)/(distance moved by load), efficiency = MA/VR.",
                  "State the law of the machine as the linear relation P = mu W + C over the working range.",
                  "Differentiate to find mu = dP/dW; as W tends to infinity, MA = W/P tends to 1/mu, the maximum.",
                  "For the given machine, mu = 0.05 and C = 12 N.",
                  "Effort for W = 2000 N: P = 0.05 times 2000 + 12 = 100 + 12 = 112 N.",
                  "Maximum mechanical advantage = 1/mu = 1/0.05 = 20.",
                  "Mention that this maximum is approached asymptotically at large loads and never exceeded.",
                ],
              },
              {
                q: "State the law of a simple machine.",
                marks: 2,
              },
              {
                q: "A machine has VR = 30 and MA = 24. Find its efficiency.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Pulley systems and power",
            body: [
              "A pulley is a wheel carrying a flexible rope, belt or chain over its grooved rim; combinations of fixed and movable pulleys form pulley systems that trade distance for force. A single fixed pulley changes only the direction of the effort and has VR = 1; a single movable pulley with one end of the rope fixed gives VR = 2 because the load is supported by two rope segments. In a system with n rope segments supporting the movable block, ignoring friction, the effort P equals W/n and the velocity ratio is n. Adding more pulleys raises VR but also increases friction at every bearing.",
              "In a first system of pulleys, separate strings connect each movable pulley to the next, and the velocity ratio grows exponentially with the number of pulleys; in a second system, a single string passes around all the pulleys and the velocity ratio equals the number of pulleys in the movable block; in a third system, several movable pulleys hang in parallel from one string, also giving VR equal to the count of supporting rope segments. The choice between systems trades compactness for friction: more strings mean more bending losses at the pulley rims. In every case the efficiency is reduced by friction at the journal bearings and by the bending stiffness of the rope.",
              "Power transmitted by a belt or rope drive is the product of the net pulling force and the belt speed: P = (T1 - T2) times v, where T1 is the tight-side tension, T2 is the slack-side tension and v is the belt speed in metres per second. The ratio T1/T2 is set by friction between the belt and the pulley, governed by the belt friction equation T1/T2 = e raised to mu times theta, where mu is the coefficient of friction and theta is the angle of wrap in radians. Maximum power transmission occurs at an optimum belt speed where centrifugal tension begins to reduce the effective friction grip. These ideas carry over into the belt drives of Unit V.",
            ],
            bullets: [
              "Single fixed pulley: VR = 1, only changes direction of effort.",
              "Single movable pulley with one rope end fixed: VR = 2.",
              "System with n supporting rope segments: VR = n and ideal effort P = W/n.",
              "Belt power P = (T1 - T2) v; ratio T1/T2 = e raised to (mu theta) (angle of wrap in radians).",
              "Maximum power transmission occurs at an optimum belt speed before centrifugal tension dominates.",
            ],
            table: {
              caption: "Pulley systems and their velocity ratios.",
              headers: ["System", "Configuration", "VR", "Ideal Effort"],
              rows: [
                ["Single fixed pulley", "one fixed wheel", "1", "W"],
                ["Single movable pulley", "one end of rope fixed", "2", "W/2"],
                ["Block and tackle (n)", "n rope segments on movable block", "n", "W/n"],
                ["First system", "separate strings each pulley", "2 to the n", "W / 2 to the n"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Belt tensions across the contact arc",
              caption: "Friction converts the slack side T2 into the tight side T1 over the angle of wrap.",
              layers: [
                { label: "Tight side T1", note: "approaches driven pulley" },
                { label: "Angle of wrap theta", note: "in radians" },
                { label: "Friction arc", note: "T1/T2 = e to the (mu theta)" },
                { label: "Slack side T2", note: "leaves driven pulley" },
              ],
            },
            callout: {
              type: "tip",
              title: "Count rope segments at the movable block",
              body: "For any pulley system, the velocity ratio equals the number of rope segments that directly support the movable block. Simply look at the movable pulley block and count ropes going up from it; that count is the VR. This single inspection trick answers most 3-mark VR questions in seconds.",
            },
            keyTerms: [
              { term: "Velocity ratio of a pulley system", definition: "The number of rope segments supporting the movable block, equal to the ratio of effort distance to load distance." },
              { term: "Tight-side tension", definition: "The greater belt tension on the side approaching the driving pulley, denoted T1." },
              { term: "Angle of wrap", definition: "The angle, in radians, through which the belt contacts the pulley, governing the friction grip and hence the maximum tension ratio." },
            ],
            examQuestions: [
              {
                q: "Derive the velocity ratio of a system of n pulleys with one end of the rope fixed. Define tight-side and slack-side tensions and derive the expression for power transmitted by a belt drive, stating the belt friction equation.",
                marks: 7,
                outline: [
                  "Draw the system: one fixed block, one movable block carrying the load W, n rope segments supporting the movable block.",
                  "When effort pulls by x, each of the n segments shortens by x/n, so load rises by x/n; hence VR = x / (x/n) = n.",
                  "Ideal effort P = W/n from equating work input and output.",
                  "Define T1 as the tight-side tension and T2 as the slack-side tension; net pulling force = T1 - T2.",
                  "Belt speed v in m/s; power transmitted P = (T1 - T2) v in watts.",
                  "Derive the friction relation by considering an elemental arc of belt: dT = mu T d(theta), integrate over wrap angle theta to get T1/T2 = e to the (mu theta).",
                  "State that maximum power transmission occurs at an optimum speed before centrifugal tension reduces the friction grip.",
                ],
              },
              {
                q: "State the velocity ratio of a system of n pulleys.",
                marks: 2,
              },
              {
                q: "A belt transmits power with T1 = 1200 N, T2 = 400 N and belt speed 10 m/s. Find the power transmitted.",
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
      title: "Thermodynamics",
      summary:
        "The language and laws of thermodynamics: systems, properties, processes and cycles; the zeroth law and first law worked for a closed system; the steady flow energy equation in device-specific forms; the second law as Kelvin-Planck and Clausius statements with the Carnot cycle; and the entropy concept with ideal gas processes.",
      chapter: {
        number: "03",
        title: "Thermodynamics",
        intro:
          "Unit III covers the language and laws of thermodynamics: systems, properties, processes and cycles; the zeroth law and the first law worked for a closed system; the steady flow energy equation in its device-specific forms; the second law as Kelvin-Planck and Clausius statements with the Carnot cycle as the efficiency benchmark; and the entropy concept together with ideal gas processes and their T-s diagram signatures.",
        inOneBreath:
          "A thermodynamic system is the chosen matter or region; closed, open and isolated systems differ by what crosses the boundary; a property depends only on the state and may be intensive or extensive; a process is a change of state and a cycle returns to the initial state; the zeroth law lets temperature be measured; the first law for a closed system is Q - W = delta U; for a cycle delta U is zero so Q_net = W_net; for constant volume W = 0 and Q = delta U; for constant pressure Q = delta H where H = U + PV; the SFEE per unit mass is q - w_s = (h2 - h1) + (V2 squared - V1 squared)/2 + g(z2 - z1); the second law forbids a cyclic engine converting all heat from one reservoir into work and forbids spontaneous heat flow from cold to hot; the Carnot cycle of two isotherms and two isentropes has eta = 1 - T_L/T_H; entropy change delta S = integral (delta Q_rev / T) and the entropy of an isolated system never decreases; for ideal gases delta s = cv ln(T2/T1) + R ln(v2/v1) and isentropic means P v to the gamma = constant.",
        sections: [
          {
            number: "3.1",
            title: "Basic concepts: system, property, process, cycle",
            body: [
              "Thermodynamics studies energy transformation, especially the conversion of heat into work and vice versa. A thermodynamic system is the quantity of matter or region in space chosen for analysis; everything outside it is the surroundings, and the system boundary separates the two. A system is classified by what crosses its boundary: a closed system has fixed mass with no mass crossing the boundary though energy may, an open system allows both mass and energy to cross, and an isolated system exchanges neither. The state of a system is the condition described by its macroscopic properties at an instant.",
              "A property is any observable characteristic of a system whose value depends only on the state, not on how the state was reached. Properties are classed as intensive (independent of mass, such as pressure, temperature and density) or extensive (dependent on mass, such as volume, total internal energy and total enthalpy). Extensive properties per unit mass become specific properties: specific volume v = V/m, specific enthalpy h = H/m, and so on. The state postulate fixes the number of independent intensive properties needed to define the state of a simple compressible system: two independent intensive properties are enough, the basis of all property diagrams such as the pressure-volume plot.",
              "A process is a change of state from an initial to a final condition; the path is the sequence of states the system passes through. A quasi-static process is an idealised process carried out so slowly that the system is always infinitesimally near equilibrium, so the path can be drawn as a continuous line on a property diagram. Common ideal processes include isothermal (constant temperature), isobaric (constant pressure), isochoric (constant volume) and adiabatic (no heat transfer). A cycle is a sequence of processes that returns the system to its initial state, so the net change in every property is zero; cyclic devices such as engines and refrigerators operate on cycles.",
            ],
            bullets: [
              "System, surroundings, boundary: chosen for analysis; closed, open, isolated by what crosses the boundary.",
              "Intensive property: independent of mass (P, T, rho); extensive property: depends on mass (V, U, H).",
              "Specific property: an extensive property per unit mass (v = V/m, h = H/m).",
              "State postulate: two independent intensive properties fix the state of a simple compressible system.",
              "A cycle returns the system to its initial state, so the net change of every property is zero.",
            ],
            table: {
              caption: "Classification of thermodynamic systems.",
              headers: ["System", "Mass Transfer", "Energy Transfer", "Example"],
              rows: [
                ["Closed", "no", "yes", "piston-cylinder"],
                ["Open", "yes", "yes", "turbine, nozzle"],
                ["Isolated", "no", "no", "universe (idealised)"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The thermodynamic cycle",
              caption: "Any sequence of processes that returns to the starting state is a cycle.",
              steps: [
                { label: "State 1" },
                { label: "Process 1 to 2", note: "e.g. heat addition" },
                { label: "State 2" },
                { label: "Process 2 to 3", note: "e.g. expansion work" },
                { label: "Process 3 to 1", note: "returns to state 1" },
                { label: "Net property change = 0" },
              ],
            },
            callout: {
              type: "tip",
              title: "Properties are path-independent",
              body: "A property depends only on the end states, never on the path. So in any cyclic process, the change of every property is zero. This is the test examiners use to distinguish a property from a non-property such as heat or work.",
            },
            keyTerms: [
              { term: "Thermodynamic system", definition: "A fixed quantity of matter or a region in space chosen for analysis, separated from the surroundings by a boundary." },
              { term: "Property", definition: "An observable characteristic of a system whose value depends only on the state, not on the path taken to reach it." },
              { term: "Quasi-static process", definition: "An idealised process carried out so slowly that the system remains infinitesimally close to equilibrium throughout." },
            ],
            examQuestions: [
              {
                q: "Define a thermodynamic system, surroundings and boundary. Classify systems and define properties, processes and cycles with examples. Distinguish between intensive and extensive properties.",
                marks: 7,
                outline: [
                  "Define system as the chosen matter or region; surroundings as everything outside; boundary as the separating surface.",
                  "Classify systems: closed (fixed mass, energy crosses), open (mass and energy cross), isolated (neither crosses).",
                  "Define a property as a state-dependent observable; give examples P, V, T, U, H.",
                  "Distinguish intensive (P, T, rho) and extensive (V, U, H); define specific properties as per-unit-mass.",
                  "Define a process as a change of state; mention isothermal, isobaric, isochoric, adiabatic.",
                  "Define a cycle as a sequence of processes returning to the initial state, so net property change is zero.",
                  "Give examples: piston-cylinder as closed system, nozzle as open system, universe as isolated; engine as cyclic.",
                ],
              },
              {
                q: "Distinguish between a closed system and an open system.",
                marks: 2,
              },
              {
                q: "List four intensive properties and four extensive properties.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Zeroth law and first law for a closed system",
            body: [
              "The zeroth law of thermodynamics states that if two systems are each in thermal equilibrium with a third, they are in thermal equilibrium with each other. This seemingly obvious statement is the basis of temperature measurement: it lets a thermometer (the third system) be used to compare the temperatures of two bodies without bringing them into contact. Thermal equilibrium means no net heat flow between the systems; once established, the systems share a common property we call temperature. The law underpins the design of every temperature scale, including Celsius and Kelvin, and justifies treating temperature as an intensive property.",
              "The first law of thermodynamics is the law of energy conservation applied to heat and work: the net energy crossing the boundary of a closed system equals the change in the internal energy of the system. For a closed system undergoing a process, Q minus W equals delta U, where Q is heat added to the system, W is work done by the system and U is internal energy. Sign convention: heat into the system is positive, work done by the system is positive. For a cycle, since the system returns to its initial state, delta U is zero, so Q_net equals W_net: the net heat input equals the net work output.",
              "For a stationary closed system undergoing a quasi-static process, the only work is boundary work W = integral P dV. For a constant volume process dV = 0, so W = 0 and Q = delta U. For a constant pressure process, W = P times delta V, and substituting into the first law gives Q = delta U + P delta V = delta H, where H = U + PV is the enthalpy; this is why enthalpy is the natural heat quantity for constant-pressure processes. As a worked example, consider 2 kg of a gas heated at constant volume from 300 K to 500 K with specific heat at constant volume cv = 0.718 kJ per kg K: Q = m cv delta T = 2 times 0.718 times 200 = 287.2 kJ, and W = 0.",
            ],
            bullets: [
              "Zeroth law: two systems in thermal equilibrium with a third are in equilibrium with each other; basis of temperature.",
              "First law for a closed system: Q - W = delta U; Q in is positive, W by the system is positive.",
              "For a cycle, delta U = 0, so Q_net = W_net.",
              "Boundary work for quasi-static process: W = integral P dV.",
              "Constant volume: W = 0, Q = delta U; constant pressure: Q = delta H where H = U + PV.",
            ],
            table: {
              caption: "First-law summary by process.",
              headers: ["Process", "W", "Q", "Relation"],
              rows: [
                ["Constant volume", "0", "delta U", "Q = m cv delta T"],
                ["Constant pressure", "P delta V", "delta H", "Q = m cp delta T"],
                ["Adiabatic", "integral P dV", "0", "Q = 0; W = -delta U"],
                ["Cycle", "W_net", "Q_net", "Q_net = W_net, delta U = 0"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "First-law routes by process type",
              caption: "Pick the column matching the process to simplify Q - W = delta U.",
              left: {
                heading: "Constant volume",
                items: [
                  "dV = 0, so W = 0",
                  "Q = delta U",
                  "Q = m cv delta T",
                  "Useful for bomb calorimeter",
                ],
              },
              right: {
                heading: "Constant pressure",
                items: [
                  "W = P delta V",
                  "Q = delta U + P delta V",
                  "Q = delta H = m cp delta T",
                  "Useful for boiler, open heater",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Sign convention makes or breaks the answer",
              body: "Heat into the system is positive, work done by the system is positive. Many RGPV slips come from using work done on the system as positive. Pick a convention, write it at the top of the solution, and stick to it: Q - W = delta U with W = integral P dV is the safest choice.",
            },
            keyTerms: [
              { term: "Zeroth law", definition: "Two systems each in thermal equilibrium with a third are in thermal equilibrium with each other, establishing temperature as a property." },
              { term: "First law for a closed system", definition: "The energy balance Q - W = delta U stating that net energy crossing the boundary equals the change in internal energy." },
              { term: "Enthalpy", definition: "The property H = U + PV, the natural heat-transfer quantity for constant-pressure processes." },
            ],
            examQuestions: [
              {
                q: "State the zeroth law of thermodynamics and explain its role in temperature measurement. State the first law for a closed system and derive the relations Q = delta U for a constant volume process and Q = delta H for a constant pressure process. Two kg of a gas is heated at constant volume from 300 K to 500 K with cv = 0.718 kJ/kg K; find the heat transfer and work done.",
                marks: 7,
                outline: [
                  "State the zeroth law: two systems in equilibrium with a third are in equilibrium with each other.",
                  "Explain that this justifies using a thermometer to compare temperatures and define a temperature scale.",
                  "State the first law for a closed system: Q - W = delta U, with sign convention.",
                  "For constant volume, W = integral P dV = 0, so Q = delta U.",
                  "For constant pressure, W = P delta V; substitute into Q = delta U + W = delta U + P delta V = delta H.",
                  "Define enthalpy H = U + PV, giving Q = m cp delta T at constant pressure.",
                  "For the numerical: Q = 2 times 0.718 times (500 - 300) = 287.2 kJ; W = 0 because volume is constant.",
                ],
              },
              {
                q: "State the first law of thermodynamics for a closed system.",
                marks: 2,
              },
              {
                q: "Define enthalpy and write its relation to internal energy for a constant pressure process.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Steady flow energy equation",
            body: [
              "Many engineering devices - nozzles, turbines, compressors, pumps and heat exchangers - operate with mass continuously entering and leaving, so they are open systems. For a steady flow, the mass flow rate in equals the mass flow rate out, and all properties at every point remain constant with time. The steady flow energy equation applies the first law to such a control volume, accounting for heat, work and the energy carried by the mass crossing the boundary. The flow work done to push the fluid into and out of the control volume is folded into the property enthalpy, h = u + Pv.",
              "The steady flow energy equation per unit mass is q minus w_s equals (h2 minus h1) plus half (V2 squared minus V1 squared) plus g times (z2 minus z1), where q is heat per unit mass, w_s is shaft work per unit mass, h is enthalpy, V is velocity and z is elevation. The three bracketed terms are the changes in enthalpy, kinetic energy and potential energy of the fluid between inlet and outlet. In most mechanical engineering devices the elevation change is negligible, and in many thermal devices the kinetic energy change is also small, leaving the simplified form q minus w_s equals h2 minus h1.",
              "Specific simplifications are the practical power of the SFEE. For a nozzle, w_s = 0 and q approximately 0, so the enthalpy drop becomes kinetic energy gain: V2 squared equals V1 squared plus 2 (h1 minus h2). For a turbine, q is small and the kinetic and potential terms are negligible, so the shaft work output equals the enthalpy drop: w_s = h1 minus h2. For a throttle, q = 0, w_s = 0 and KE and PE are negligible, so h1 = h2; throttling is a constant enthalpy process. For a boiler or condenser, w_s = 0 and the heat transfer equals the enthalpy change: q = h2 minus h1.",
            ],
            bullets: [
              "Steady flow: mass flow in equals mass flow out; properties constant with time at every point.",
              "SFEE: q - w_s = (h2 - h1) + (V2 squared - V1 squared)/2 + g(z2 - z1) per unit mass.",
              "Flow work is folded into enthalpy h = u + Pv, simplifying the energy balance.",
              "Turbine: w_s = h1 - h2 (enthalpy drop becomes shaft work, q approximately 0).",
              "Throttling: h1 = h2 (constant enthalpy); boiler: q = h2 - h1, w_s = 0.",
            ],
            table: {
              caption: "SFEE simplifications for common devices.",
              headers: ["Device", "Dropped Terms", "Reduced Equation", "Purpose"],
              rows: [
                ["Nozzle", "q, w_s", "V2 squared = V1 squared + 2(h1 - h2)", "KE from enthalpy drop"],
                ["Turbine", "q, KE, PE", "w_s = h1 - h2", "shaft work output"],
                ["Throttle", "q, w_s, KE, PE", "h1 = h2", "pressure drop at constant h"],
                ["Boiler", "w_s, KE, PE", "q = h2 - h1", "heat to raise enthalpy"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Reducing the SFEE for common devices",
              caption: "Start from the full SFEE and drop terms by the device type.",
              steps: [
                { label: "Write full SFEE" },
                { label: "Turbine? drop q, KE, PE", note: "w_s = h1 - h2" },
                { label: "Nozzle? drop q, w_s", note: "V2 squared = V1 squared + 2(h1 - h2)" },
                { label: "Throttle? drop q, w_s, KE, PE", note: "h1 = h2" },
                { label: "Boiler? drop w_s, KE, PE", note: "q = h2 - h1" },
              ],
            },
            callout: {
              type: "tip",
              title: "Match the device to its simplification",
              body: "Every steady-flow device drops two of the SFEE terms. Turbine: drop KE, PE, q; nozzle: drop w_s, q; throttle: drop q, w_s, KE, PE; boiler: drop w_s, KE, PE. Spot the device first, then write the reduced equation - this saves half a page of algebra.",
            },
            keyTerms: [
              { term: "Control volume", definition: "A fixed region in space through which mass and energy flow, used to analyse open systems." },
              { term: "Steady flow", definition: "A flow in which the mass flow rate in equals that out and all properties at each point remain constant with time." },
              { term: "Flow work", definition: "The work required to push fluid into and out of a control volume, equal to Pv per unit mass and combined with internal energy to form enthalpy." },
            ],
            examQuestions: [
              {
                q: "Derive the steady flow energy equation for a control volume and write it per unit mass. Apply it to (i) a nozzle, (ii) a turbine and (iii) a throttle, stating the simplifications made in each case.",
                marks: 7,
                outline: [
                  "Define a control volume and the steady flow condition: mass in equals mass out, properties time-invariant.",
                  "Apply the first law over a time dt: energy in minus energy out = change in control-volume energy; at steady state the change is zero.",
                  "Per unit mass: q - w_s = (h2 - h1) + (V2 squared - V1 squared)/2 + g(z2 - z1); explain each term including flow work folded into h.",
                  "For a nozzle, set q = 0 and w_s = 0: V2 squared = V1 squared + 2(h1 - h2).",
                  "For a turbine, set q approximately 0 and neglect KE and PE: w_s = h1 - h2.",
                  "For a throttle, set q = 0, w_s = 0 and neglect KE and PE: h1 = h2.",
                  "Mention practical devices: steam turbine, carburettor throttle, convergent nozzle in a rocket.",
                ],
              },
              {
                q: "State the steady flow energy equation per unit mass.",
                marks: 2,
              },
              {
                q: "Steam enters a turbine at h1 = 3200 kJ/kg and leaves at h2 = 2200 kJ/kg. Neglecting heat and KE, PE changes, find the turbine work output per kg.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Second law: Kelvin-Planck, Clausius, Carnot efficiency",
            body: [
              "The first law says energy is conserved, but it does not say which transformations are possible. The second law of thermodynamics sets the direction of natural processes and the limit on conversion of heat into work. The Kelvin-Planck statement says no heat engine operating in a cycle can convert all the heat it receives from a single reservoir into work; some heat must be rejected to a second, lower-temperature reservoir. The Clausius statement says heat cannot spontaneously flow from a colder body to a hotter body without external work. The two statements are equivalent; violating either implies violating the other.",
              "A heat engine operates between a high-temperature source at T_H and a low-temperature sink at T_L, receiving Q_H from the source, doing work W and rejecting Q_L to the sink. From the first law for a cycle, W = Q_H - Q_L, and the thermal efficiency eta = W over Q_H = 1 - Q_L over Q_H. A refrigerator or heat pump is the reversed engine: it takes work input to move heat from cold to hot. The coefficient of performance for a refrigerator is COP_ref = Q_L over W = T_L over (T_H - T_L), and for a heat pump COP_hp = Q_H over W = T_H over (T_H - T_L), with temperatures in kelvin.",
              "A reversible engine operating between two reservoirs achieves the maximum possible efficiency and is the Carnot engine. The Carnot cycle consists of two reversible isothermal processes (heat transfer at constant T_H and T_L) and two reversible adiabatic processes (isentropic expansion and compression). The Carnot efficiency is eta_Carnot = 1 - T_L over T_H, where both temperatures are absolute. This is the upper bound for any engine operating between the same two reservoirs; no real engine can exceed it. The Carnot result also shows that efficiency rises as T_L falls or T_H rises, which is why power plants strive for high steam temperatures and low condenser temperatures. The second law is the reason efficiency is bounded, never unity.",
            ],
            bullets: [
              "Kelvin-Planck statement: no cyclic engine can convert all heat from one reservoir into work; some heat must be rejected.",
              "Clausius statement: heat cannot flow spontaneously from a colder to a hotter body without external work.",
              "Engine efficiency eta = W/Q_H = 1 - Q_L/Q_H; COP_ref = T_L/(T_H - T_L); COP_hp = T_H/(T_H - T_L).",
              "Carnot cycle: two isothermal + two isentropic processes; all reversible.",
              "Carnot efficiency eta_Carnot = 1 - T_L/T_H, the upper bound for any engine between T_H and T_L.",
            ],
            table: {
              caption: "Second-law performance limits.",
              headers: ["Device", "Performance", "Limit (reversible)", "Note"],
              rows: [
                ["Heat engine", "eta = W/Q_H", "1 - T_L/T_H", "always less than 1"],
                ["Refrigerator", "COP = Q_L/W", "T_L/(T_H - T_L)", "may exceed 1"],
                ["Heat pump", "COP = Q_H/W", "T_H/(T_H - T_L)", "always greater than 1"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Carnot engine between two reservoirs",
              caption: "The four reversible processes of the Carnot cycle.",
              stages: [
                { label: "Isothermal heat addition", note: "Q_H at T_H" },
                { label: "Isentropic expansion", note: "work output" },
                { label: "Isothermal heat rejection", note: "Q_L at T_L" },
                { label: "Isentropic compression", note: "work input" },
                { label: "Net work", note: "W = Q_H - Q_L" },
              ],
            },
            callout: {
              type: "warning",
              title: "Always use absolute temperatures",
              body: "Carnot efficiency, COP and every second-law ratio demand temperatures in kelvin. Using Celsius or Fahrenheit in eta = 1 - T_L/T_H is the single most common RGPV slip and produces physically impossible answers. Convert to kelvin before substituting: T(K) = T(C) + 273.15.",
            },
            keyTerms: [
              { term: "Kelvin-Planck statement", definition: "The second-law statement that no heat engine operating in a cycle can take heat from a single reservoir and convert it entirely into work." },
              { term: "Clausius statement", definition: "The second-law statement that heat cannot spontaneously flow from a colder body to a hotter body without external work." },
              { term: "Carnot efficiency", definition: "The maximum possible thermal efficiency of an engine operating between two reservoirs, given by 1 - T_L/T_H with absolute temperatures." },
            ],
            examQuestions: [
              {
                q: "State the Kelvin-Planck and Clausius statements of the second law and show they are equivalent. Describe the Carnot cycle and derive its efficiency. A Carnot engine operates between 600 K and 300 K; find its efficiency and the heat rejected if it receives 1000 kJ from the source.",
                marks: 7,
                outline: [
                  "State Kelvin-Planck: no cyclic engine converts all heat from one reservoir into work.",
                  "State Clausius: heat cannot flow spontaneously from cold to hot without external work.",
                  "Show equivalence: assume a Kelvin-Planck violator and combine it with a refrigerator to violate Clausius, and vice versa.",
                  "Describe the Carnot cycle: isothermal expansion at T_H, isentropic expansion, isothermal compression at T_L, isentropic compression.",
                  "Derive eta_Carnot = 1 - Q_L/Q_H = 1 - T_L/T_H using the reversible heat transfer relation Q_H/T_H = Q_L/T_L.",
                  "Substitute T_H = 600 K and T_L = 300 K: eta = 1 - 300/600 = 0.5 or 50 percent.",
                  "With Q_H = 1000 kJ, W = eta times Q_H = 500 kJ, and Q_L = Q_H - W = 500 kJ.",
                ],
              },
              {
                q: "State the Clausius statement of the second law.",
                marks: 2,
              },
              {
                q: "A Carnot refrigerator operates between 250 K and 300 K. Find its COP.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Entropy and ideal gas processes",
            body: [
              "Entropy is the thermodynamic property that quantifies the disorder or unavailable energy of a system. For a reversible process, the change in entropy of a system is the integral of the heat transferred divided by the absolute temperature at which it is transferred: delta S = integral (delta Q_rev over T), with SI unit joule per kelvin. Entropy is a property, so its change between two states depends only on the states and not on the path; for an irreversible process the entropy change is computed by imagining any convenient reversible path between the same states. The entropy of an isolated system can never decrease, the principle of increase of entropy.",
              "For an ideal gas with constant specific heats, the entropy change between two states is delta s = cv ln(T2/T1) + R ln(v2/v1) per unit mass, or equivalently delta s = cp ln(T2/T1) - R ln(P2/P1). These expressions follow from the first law and the ideal gas equation Pv = RT. An isentropic process is one with constant entropy, achieved by an idealised reversible adiabatic process; for an ideal gas the isentropic relations are P v raised to gamma equals constant, T v raised to (gamma minus 1) equals constant, and P raised to (1 minus gamma) T raised to gamma equals constant, where gamma = cp/cv is the specific heat ratio.",
              "The T-s diagram plots temperature against entropy and is the natural diagram for the second law: area under a reversible process line on the T-s diagram equals the heat transferred. Isentropic processes appear as vertical lines, isothermal processes as horizontal lines, and the Carnot cycle appears as a rectangle on the T-s diagram, which makes its efficiency eta = 1 - T_L/T_H visually obvious. For real, irreversible processes, entropy is generated; the entropy generation is a measure of the lost work potential. Ideal gas processes - constant volume, constant pressure, isothermal, adiabatic - all have characteristic lines on the T-s diagram, and recognizing these lines is the key to solving cycle problems quickly.",
            ],
            bullets: [
              "Entropy change delta S = integral (delta Q_rev / T); SI unit joule per kelvin.",
              "Entropy of an isolated system never decreases (principle of increase of entropy).",
              "Ideal gas entropy change: delta s = cv ln(T2/T1) + R ln(v2/v1) = cp ln(T2/T1) - R ln(P2/P1).",
              "Isentropic: constant entropy; for ideal gas, P v^gamma = constant and T v^(gamma-1) = constant.",
              "On a T-s diagram, area under a reversible process line equals the heat transferred.",
            ],
            table: {
              caption: "Ideal gas processes and their relations.",
              headers: ["Process", "Relation", "Work (quasi-static)", "Heat"],
              rows: [
                ["Constant volume", "v = constant", "0", "m cv delta T"],
                ["Constant pressure", "P = constant", "P delta V", "m cp delta T"],
                ["Isothermal", "P v = constant", "m R T ln(v2/v1)", "equals W"],
                ["Isentropic", "P v^gamma = constant", "(P1 v1 - P2 v2)/(gamma - 1)", "0"],
                ["Polytropic", "P v^n = constant", "(P1 v1 - P2 v2)/(n - 1)", "depends on n"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Ideal gas processes on the T-s plane",
              caption: "Each process has a recognisable line shape on the T-s diagram.",
              tiers: [
                { label: "Isentropic: vertical line", note: "s constant" },
                { label: "Isothermal: horizontal line", note: "T constant" },
                { label: "Constant pressure: log curve", note: "ds = cp dT/T" },
                { label: "Constant volume: log curve", note: "ds = cv dT/T" },
                { label: "Polytropic: general curve", note: "P v^n = constant" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch the T-s diagram first",
              body: "Before solving any cycle problem, sketch the cycle on a T-s diagram with isentropes as vertical lines and isotherms as horizontal lines. The Carnot cycle becomes a rectangle, and the Otto cycle a triangle with a curved base. The shape alone tells you where heat is added and rejected.",
            },
            keyTerms: [
              { term: "Entropy", definition: "A thermodynamic property measuring disorder, whose change for a reversible process equals the integral of heat transferred divided by absolute temperature." },
              { term: "Isentropic process", definition: "A process carried out at constant entropy, achieved in the ideal case by a reversible adiabatic process." },
              { term: "Specific heat ratio", definition: "The ratio gamma = cp/cv, appearing in every isentropic relation for ideal gases." },
            ],
            examQuestions: [
              {
                q: "Define entropy and state the principle of increase of entropy. Derive the expression for entropy change of an ideal gas in terms of temperatures and pressures. State the isentropic relations for an ideal gas with constant specific heats.",
                marks: 7,
                outline: [
                  "Define entropy through its change delta S = integral (delta Q_rev / T), with unit joule per kelvin.",
                  "State the principle of increase of entropy: the entropy of an isolated system can never decrease.",
                  "For an ideal gas, start from the first law T ds = du + P dv and the ideal gas Pv = RT.",
                  "Substitute du = cv dT and P dv = R dT to get T ds = cv dT + R dT (per unit mass), so ds = cv dT/T + R dv/v.",
                  "Integrate: delta s = cv ln(T2/T1) + R ln(v2/v1); use v = RT/P to also write delta s = cp ln(T2/T1) - R ln(P2/P1).",
                  "For an isentropic process ds = 0; integrate cv dT/T + R dv/v = 0 and use gamma = cp/cv to obtain T v^(gamma-1) = constant and P v^gamma = constant.",
                  "Mention that P^(1-gamma) T^gamma = constant follows by combining these two.",
                ],
              },
              {
                q: "Define entropy and give its SI unit.",
                marks: 2,
              },
              {
                q: "Air at 300 K and 1 bar is compressed isentropically to 5 bar. Taking gamma = 1.4, find the final temperature.",
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
      title: "IC Engines and Power Plants",
      summary:
        "IC engines and the steam plant: the four-stroke SI engine cycle, the two-stroke engine with its scavenging trade-offs, the four-stroke CI engine running lean, the Otto and Diesel air-standard cycles with efficiency formulas worked out, and engine performance indicators IP, BP, SFC and MEP alongside a brief look at boilers.",
      chapter: {
        number: "04",
        title: "IC Engines and Power Plants",
        intro:
          "Unit IV surveys IC engines and the steam plant that produces most of the world's power: the four-stroke SI engine, the two-stroke engine with its scavenging trade-offs, the four-stroke CI engine running lean, the Otto and Diesel air-standard cycles with their efficiency formulas worked out, and the engine performance indicators IP, BP, SFC and MEP alongside a brief look at boilers and steam turbines.",
        inOneBreath:
          "The four-stroke SI engine runs suction, compression, power and exhaust over two crank revolutions; the spark ignites a compressed fuel-air mixture; the Otto cycle models it with eta = 1 - 1/r^(gamma-1); the two-stroke engine gives one power stroke per revolution using ports instead of valves but loses fresh charge during scavenging; the four-stroke CI engine ignites diesel by compression heat at compression ratio 12 to 22 and is more efficient but heavier and noisier; the Diesel cycle has constant-pressure heat addition with cut-off ratio rho and eta = 1 - (1/r^(gamma-1)) times ((rho^gamma - 1)/(gamma (rho-1))); indicated power is the fluid work on the piston; brake power is the shaft output; BP = IP - FP; mechanical efficiency eta_m = BP/IP; specific fuel consumption is fuel per unit power; mean effective pressure is work per swept volume; a boiler may be fire-tube or water-tube and feeds a steam turbine.",
        sections: [
          {
            number: "4.1",
            title: "Four-stroke SI engine cycle",
            body: [
              "A spark-ignition (SI) engine burns fuel such as petrol with a spark plug igniting a compressed fuel-air mixture. The four-stroke cycle completes one power stroke every two revolutions of the crankshaft through four distinct piston strokes. The suction stroke draws in the fuel-air mixture as the piston moves from top dead centre to bottom dead centre with the inlet valve open. The compression stroke then closes both valves and the piston moves back to top dead centre, compressing the mixture to a typical compression ratio between 6 and 10 for petrol engines.",
              "At the end of compression the spark plug fires, igniting the mixture and releasing heat; the pressure rises sharply and the expanding gases drive the piston down on the power stroke from top dead centre to bottom dead centre, performing work on the crank. Finally the exhaust stroke opens the exhaust valve and the piston moves back to top dead centre, pushing the burnt gases out. The cycle then repeats with the inlet valve opening for the next suction stroke. Two revolutions of the crankshaft produce one power stroke, and the inertia of the flywheel carries the engine through the three non-power strokes.",
              "The ideal air-standard Otto cycle models the SI engine: an isentropic compression, a constant-volume heat addition, an isentropic expansion and a constant-volume heat rejection. The thermal efficiency of the Otto cycle depends only on the compression ratio r = v1/v2 and is eta_Otto = 1 - 1 over r raised to (gamma minus 1), where gamma is the specific heat ratio. For r = 8 and gamma = 1.4, eta = 1 - 1/8 to the 0.4 = 1 - 0.435 = 0.565 or 56.5 percent. The actual engine efficiency is lower due to heat losses, finite combustion time, valve losses and friction, but the trend that higher compression ratio raises efficiency holds up to the knock limit of the fuel.",
            ],
            bullets: [
              "Four-stroke SI engine: suction, compression, power, exhaust - one power stroke per two crank revolutions.",
              "Suction draws in fuel-air mixture through the open inlet valve; compression closes both valves.",
              "Spark ignition at end of compression; expanding gases drive the power stroke.",
              "Exhaust valve opens on the exhaust stroke; burnt gases pushed out.",
              "Otto cycle models SI engine; eta = 1 - 1/r^(gamma-1), rising with compression ratio up to knock limit.",
            ],
            table: {
              caption: "Four-stroke SI engine valve and piston events.",
              headers: ["Stroke", "Piston Motion", "Inlet Valve", "Exhaust Valve", "Energy"],
              rows: [
                ["Suction", "TDC to BDC", "open", "closed", "mixture drawn in"],
                ["Compression", "BDC to TDC", "closed", "closed", "work on gas"],
                ["Power", "TDC to BDC", "closed", "closed", "work by gas"],
                ["Exhaust", "BDC to TDC", "closed", "open", "burnt gas pushed out"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The four-stroke SI cycle",
              caption: "Two crank revolutions complete one power stroke; valves open and close in pairs.",
              steps: [
                { label: "Suction", note: "inlet open; mixture in" },
                { label: "Compression", note: "both valves shut" },
                { label: "Power", note: "spark fires; gases expand" },
                { label: "Exhaust", note: "exhaust valve open" },
                { label: "Repeat", note: "two crank revolutions per cycle" },
              ],
            },
            callout: {
              type: "tip",
              title: "Higher compression ratio means higher efficiency - to a point",
              body: "The Otto efficiency formula eta = 1 - 1/r^(gamma-1) shows efficiency rising with compression ratio r. But petrol engines hit knock, the spontaneous ignition of fuel-air mixture, beyond r about 10. This is why high-performance engines need high-octane fuel; it raises the knock limit and lets r be pushed higher.",
            },
            keyTerms: [
              { term: "Four-stroke cycle", definition: "An engine cycle completed in four piston strokes (two crank revolutions) comprising suction, compression, power and exhaust." },
              { term: "Top dead centre", definition: "The extreme upper position of the piston in the cylinder, the position of minimum volume at which compression ends and combustion begins." },
              { term: "Compression ratio", definition: "The ratio of the cylinder volume at bottom dead centre to that at top dead centre, the dominant parameter controlling Otto cycle efficiency." },
            ],
            examQuestions: [
              {
                q: "Describe the four-stroke cycle of a spark-ignition engine with a P-v diagram. State the air-standard Otto cycle efficiency and derive it. Find the efficiency for compression ratio 8 with gamma = 1.4.",
                marks: 7,
                outline: [
                  "Describe the four strokes: suction (inlet valve open), compression (both valves shut), power (spark ignites), exhaust (exhaust valve open).",
                  "Note that one power stroke occurs every two crank revolutions; flywheel inertia carries the engine through other strokes.",
                  "Sketch the P-v diagram with two isentropes and two constant-volume lines; mark the four state points.",
                  "Write the air-standard assumptions: working fluid is air with constant cp and cv; combustion is replaced by heat addition; exhaust by heat rejection.",
                  "For constant volume heat addition and rejection, Q_in = m cv (T3 - T2), Q_out = m cv (T4 - T1), so eta = 1 - Q_out/Q_in = 1 - (T4 - T1)/(T3 - T2).",
                  "Use the isentropic relations T2/T1 = r^(gamma-1) and T3/T4 = r^(gamma-1) to simplify to eta = 1 - 1/r^(gamma-1).",
                  "Substitute r = 8 and gamma = 1.4: eta = 1 - 1/8^0.4 = 1 - 0.435 = 0.565, or 56.5 percent.",
                ],
              },
              {
                q: "Name the four strokes of an SI engine in order.",
                marks: 2,
              },
              {
                q: "An Otto cycle has compression ratio 6 and gamma = 1.4. Find its air-standard efficiency.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Two-stroke engine and comparison",
            body: [
              "A two-stroke engine completes the cycle in one crank revolution, giving one power stroke every revolution instead of every two. There are no separate suction and exhaust strokes; instead, the piston itself uncovers inlet and exhaust ports in the cylinder wall as it moves, so valve gear is eliminated and the engine is lighter and simpler. The crankcase often serves as a scavenging pump: as the piston rises to compress the mixture above it, the underside of the piston draws a fresh charge into the crankcase through a reed valve; on the down stroke this charge is pressurised and transferred to the cylinder above once the ports open.",
              "Scavenging is the process of clearing the burnt gases from the cylinder and refilling it with fresh charge. Common scavenging methods are cross-flow (transfer port opposite the exhaust port, deflector piston), loop (both ports on the same side, no deflector), and uniflow (exhaust valve in head, transfer port at bottom). Some fresh charge always escapes with the exhaust, lowering volumetric efficiency; in two-stroke petrol engines this also wastes fuel, so they are inefficient. Two-stroke diesels avoid this loss by charging with air alone, so only air escapes; they are widely used in large marine and locomotive applications.",
              "Compared with a four-stroke engine of the same size and speed, a two-stroke gives roughly twice the power strokes and so more power per unit displacement, is simpler and lighter, and runs in any orientation - which is why it dominates small tools, mopeds and outboard motors. The disadvantages are lower fuel efficiency (in petrol versions), higher unburnt hydrocarbon emissions, less effective scavenging at low speed, and poorer lubrication, requiring oil mixed with the petrol. The four-stroke, by contrast, is more efficient, cleaner and quieter, which is why it dominates automotive applications. The choice between them is a trade-off between simplicity and efficiency.",
            ],
            bullets: [
              "Two-stroke cycle: one power stroke per crank revolution; ports replace valves.",
              "Crankcase compression pumps the fresh charge; no separate scavenging pump needed in small engines.",
              "Scavenging methods: cross-flow, loop, uniflow; some fresh charge always escapes.",
              "Two-stroke petrol: lighter, simpler, more power per litre, but lower efficiency and higher emissions.",
              "Two-stroke diesel: only air is scavenged, so no fuel loss; used in large marine and locomotive engines.",
            ],
            table: {
              caption: "Two-stroke vs four-stroke engine comparison.",
              headers: ["Heading", "Four-stroke", "Two-stroke"],
              rows: [
                ["Power strokes per 2 revs", "1", "2"],
                ["Valves", "poppet valves + cam", "ports in cylinder wall"],
                ["Volumetric efficiency", "high", "lower due to scavenging loss"],
                ["Fuel efficiency", "high", "lower in petrol version"],
                ["Lubrication", "sump oil", "oil mixed with fuel"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Four-stroke vs two-stroke at a glance",
              caption: "Same displacement; the trade is simplicity for efficiency.",
              left: {
                heading: "Four-stroke",
                items: [
                  "one power stroke / two revs",
                  "valves and camshaft",
                  "higher efficiency",
                  "cleaner emissions",
                  "heavier and complex",
                ],
              },
              right: {
                heading: "Two-stroke",
                items: [
                  "one power stroke / one rev",
                  "ports, no valves",
                  "lower efficiency in petrol",
                  "higher emissions",
                  "lighter and simple",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Two-stroke petrol wastes fuel during scavenging",
              body: "Because the exhaust port is open while the fresh fuel-air charge is entering, some unburnt mixture escapes with the exhaust. This is why two-stroke petrol engines are smoky, inefficient and high in hydrocarbon emissions. Mentioning this is the difference between an average and a high-mark answer.",
            },
            keyTerms: [
              { term: "Scavenging", definition: "The process of clearing burnt gases from the cylinder and refilling it with fresh charge in a two-stroke engine." },
              { term: "Port", definition: "An opening in the cylinder wall uncovered by the piston at a particular position, replacing the valve gear of a four-stroke engine." },
              { term: "Cross-flow scavenging", definition: "A scavenging arrangement with the transfer port opposite the exhaust port and a deflector on the piston crown to direct the fresh charge upward." },
            ],
            examQuestions: [
              {
                q: "Explain the working of a two-stroke SI engine with a neat sketch. Compare two-stroke and four-stroke engines under at least five headings. Why are two-stroke diesel engines preferred for marine propulsion?",
                marks: 7,
                outline: [
                  "Describe the two-stroke cycle: piston rising compresses mixture above; underside of piston draws fresh charge into crankcase via reed valve.",
                  "Piston passing TDC fires the spark; expanding gases drive piston down.",
                  "Piston uncovers exhaust port first, then transfer port; fresh charge loops into cylinder, pushing out burnt gas (scavenging).",
                  "Mention scavenging methods: cross-flow, loop, uniflow; some fresh charge escapes in petrol engines.",
                  "Compare under headings: power strokes per rev, weight, mechanical simplicity, fuel efficiency, emissions, lubrication.",
                  "Two-stroke petrol is light and simple but wasteful; two-stroke diesel scavenges with air only, so no fuel is lost.",
                  "Large marine diesels run at low speed where two-stroke efficiency is high, and their compactness per cylinder suits the long stroke of ships.",
                ],
              },
              {
                q: "What is scavenging in a two-stroke engine?",
                marks: 2,
              },
              {
                q: "List three advantages of a four-stroke engine over a two-stroke engine.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Four-stroke CI engine",
            body: [
              "A compression-ignition (CI) engine burns fuel such as diesel by igniting it through the heat of compressed air alone, with no spark plug. Air alone is drawn into the cylinder during the suction stroke and compressed in the compression stroke to a high pressure and temperature - typical compression ratios are 12 to 22, giving compression-end temperatures around 800 K, well above the self-ignition temperature of diesel. Near the end of compression a fuel injector sprays diesel into the hot compressed air; the fuel ignites spontaneously and burns as it mixes with air, so combustion is largely controlled by fuel injection rather than by spark timing.",
              "The four strokes are the same as in the SI engine - suction, compression, power, exhaust - but with air alone being sucked in and fuel being injected near top dead centre. The power stroke begins as combustion pressure builds; the piston is driven down by the expanding gases while fuel injection may continue briefly, giving a combined constant-volume and constant-pressure heat addition that the Diesel cycle models. The exhaust stroke opens the exhaust valve and pushes out the burnt gases. CI engines use fuel injection at high pressure, requiring a robust injection pump and precision nozzles; modern common-rail systems decouple injection pressure from engine speed.",
              "The CI engine's high compression ratio gives it a higher thermal efficiency than the SI engine of comparable size, which is why diesel vehicles return better fuel economy. Other advantages are lower CO and hydrocarbon emissions (always lean operation), the ability to use cheaper and safer fuel, and durability from heavy construction. The disadvantages are higher initial cost, heavier weight, more noise and vibration, higher NOx emissions (high combustion temperatures) and particulate (soot) emissions that need particulate filters. CI engines power trucks, buses, tractors, locomotives, ships and diesel-electric power sets where fuel economy and durability matter more than light weight.",
            ],
            bullets: [
              "CI engine: no spark plug; fuel ignites by heat of compressed air.",
              "Compression ratio 12 to 22; compression-end temperature above diesel auto-ignition.",
              "Same four strokes as SI; air sucked in, fuel injected near TDC.",
              "Combustion controlled by injection timing and rate; modern common-rail systems decouple pressure from speed.",
              "Higher efficiency and durability than SI; heavier, noisier, more NOx and particulate emissions.",
            ],
            table: {
              caption: "SI vs CI engine at a glance.",
              headers: ["Feature", "SI Engine", "CI Engine"],
              rows: [
                ["Fuel", "petrol", "diesel"],
                ["Ignition", "spark plug", "compression heat"],
                ["Compression ratio", "6 to 10", "12 to 22"],
                ["Air-fuel mixture", "stoichiometric", "always lean"],
                ["Efficiency", "lower", "higher"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Four-stroke CI cycle",
              caption: "Air alone is inducted; fuel is injected near TDC; ignition is by compression heat.",
              steps: [
                { label: "Suction: air only", note: "inlet valve open" },
                { label: "Compression: air to about 800 K", note: "no fuel yet" },
                { label: "Injection near TDC", note: "spontaneous ignition" },
                { label: "Power: expanding gases", note: "fuel may continue to burn" },
                { label: "Exhaust: valve opens", note: "burnt gas pushed out" },
              ],
            },
            callout: {
              type: "tip",
              title: "Lean burn is the CI signature",
              body: "A CI engine always runs with excess air, which is why it cannot use a throttle and why its CO and hydrocarbon emissions are low. The trade-off is high combustion temperature and so high NOx; mention both sides whenever you compare SI and CI engines.",
            },
            keyTerms: [
              { term: "Compression-ignition engine", definition: "An engine in which fuel is ignited by the heat of compressed air rather than by a spark plug." },
              { term: "Fuel injection", definition: "The high-pressure spraying of fuel into the cylinder near the end of compression, controlling combustion timing and rate." },
              { term: "Common-rail injection", definition: "A modern diesel injection system where a high-pressure fuel rail supplies all injectors, decoupling injection pressure from engine speed." },
            ],
            examQuestions: [
              {
                q: "Describe the four-stroke cycle of a compression-ignition engine. How does it differ from an SI engine? Explain why the CI engine has a higher thermal efficiency than the SI engine, and list two disadvantages of the CI engine.",
                marks: 7,
                outline: [
                  "Describe the four strokes: suction of air, compression of air to a high temperature, injection of fuel near TDC, power stroke, exhaust.",
                  "Explain that ignition is by the heat of compressed air, not a spark; compression ratio 12 to 22.",
                  "Compare with SI: air alone vs fuel-air mixture; fuel injection vs carburettor or port injection; no throttle; lean burn.",
                  "State that higher compression ratio gives higher air-standard efficiency (Otto or Diesel formula), hence better fuel economy.",
                  "Note always-lean combustion lowers CO and HC but raises NOx due to high combustion temperature.",
                  "Disadvantages: heavier construction, higher initial cost, more noise and vibration, particulate emissions.",
                  "Mention typical applications: trucks, buses, tractors, locomotives, ships, diesel generator sets.",
                ],
              },
              {
                q: "What is the role of the fuel injector in a CI engine?",
                marks: 2,
              },
              {
                q: "Why does a CI engine have a higher compression ratio than an SI engine?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Otto and Diesel cycle efficiency",
            body: [
              "The Otto and Diesel cycles are the two air-standard idealisations of SI and CI engines respectively. Both consist of isentropic compression, heat addition, isentropic expansion and constant-volume heat rejection. The difference is the heat addition: in the Otto cycle heat is added at constant volume (combustion is so fast that the piston barely moves), while in the Diesel cycle heat is added at constant pressure (fuel injection continues as the piston begins to expand). The Diesel cycle introduces a cut-off ratio rho = v3/v2, the ratio of volumes at the end and start of heat addition, which captures the duration of injection.",
              "The Otto cycle efficiency is eta_Otto = 1 - 1 over r raised to (gamma minus 1), dependent only on the compression ratio r and the specific heat ratio gamma. The Diesel cycle efficiency is eta_Diesel = 1 - (1 over r raised to (gamma minus 1)) times ((rho raised to gamma minus 1) over (gamma times (rho minus 1))), which depends on r, gamma and rho. For the same compression ratio the Diesel efficiency is lower than the Otto efficiency because constant-pressure heat addition occurs partly after expansion has begun, so less of the added heat is converted to work. However, CI engines run at much higher r than SI engines, so real CI engines still out-perform real SI engines.",
              "A worked example illustrates the difference. Consider a Diesel cycle with compression ratio r = 16, cut-off ratio rho = 2 and gamma = 1.4. The first factor is 1 over r raised to (gamma minus 1) = 1 over 16 raised to 0.4 = 1 over 3.03 = 0.33. The bracket is ((2 raised to 1.4) minus 1) over (1.4 times (2 minus 1)) = (2.64 minus 1) over 1.4 = 1.64 over 1.4 = 1.17. So eta = 1 - 0.33 times 1.17 = 1 - 0.386 = 0.614, or about 61 percent. An Otto cycle at the same compression ratio would give eta = 1 - 0.33 = 0.67 or 67 percent, but real SI engines cannot reach r = 16 because of knock, while CI engines routinely do, so the Diesel engine wins in practice.",
            ],
            bullets: [
              "Otto cycle: isentropic compression, constant-volume heat addition, isentropic expansion, constant-volume heat rejection.",
              "Diesel cycle: same except constant-pressure heat addition; cut-off ratio rho = v3/v2.",
              "eta_Otto = 1 - 1/r^(gamma-1) depends only on r and gamma.",
              "eta_Diesel = 1 - (1/r^(gamma-1)) times ((rho^gamma - 1)/(gamma (rho-1))).",
              "Same r: Diesel efficiency is lower; but CI engines run at higher r, so they win in practice.",
            ],
            table: {
              caption: "Otto vs Diesel cycle summary.",
              headers: ["Item", "Otto Cycle", "Diesel Cycle"],
              rows: [
                ["Heat addition", "constant volume", "constant pressure"],
                ["Working engine", "SI", "CI"],
                ["Extra parameter", "none", "cut-off ratio rho"],
                ["Efficiency (same r)", "higher", "lower"],
                ["Practical compression ratio", "6 to 10", "12 to 22"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Four processes of the Diesel cycle on a P-v diagram",
              caption: "From bottom to top: compression, constant-pressure heat addition, expansion, constant-volume heat rejection.",
              layers: [
                { label: "1 to 2 isentropic compression", note: "v1/v2 = r" },
                { label: "2 to 3 constant P heat addition", note: "v3/v2 = rho" },
                { label: "3 to 4 isentropic expansion", note: "back to v1" },
                { label: "4 to 1 constant v heat rejection", note: "closes the cycle" },
              ],
            },
            callout: {
              type: "exam",
              title: "Otto and Diesel efficiency at the same r",
              body: "For the same compression ratio, eta_Otto is greater than eta_Diesel because constant-volume heat addition converts more of the heat into expansion work. Real engines do not compare at the same r though - CI engines run at higher r, which is the practical reason they outperform SI engines. Mention both the formula and the practical caveat.",
            },
            keyTerms: [
              { term: "Otto cycle", definition: "The air-standard cycle of an SI engine, with heat added at constant volume." },
              { term: "Diesel cycle", definition: "The air-standard cycle of a CI engine, with heat added at constant pressure after isentropic compression." },
              { term: "Cut-off ratio", definition: "The ratio of cylinder volume at the end of heat addition to that at the start, denoted rho = v3/v2, characterising Diesel cycle combustion duration." },
            ],
            examQuestions: [
              {
                q: "Draw the P-v and T-s diagrams of the air-standard Otto and Diesel cycles and write the expressions for their efficiencies. Find the Diesel cycle efficiency for r = 16, rho = 2 and gamma = 1.4, and compare it with the Otto efficiency at the same compression ratio.",
                marks: 7,
                outline: [
                  "Draw the Otto cycle P-v: two isentropes, two constant-volume lines; heat added at constant volume 2 to 3.",
                  "Draw the Diesel cycle P-v: two isentropes, one constant-pressure line 2 to 3 and one constant-volume line 4 to 1.",
                  "Write eta_Otto = 1 - 1/r^(gamma-1).",
                  "Write eta_Diesel = 1 - (1/r^(gamma-1)) times ((rho^gamma - 1)/(gamma (rho-1))).",
                  "For r = 16, gamma = 1.4: 1/r^(gamma-1) = 1/16^0.4 = 0.33.",
                  "Bracket for rho = 2: (2^1.4 - 1)/(1.4 times 1) = (2.64 - 1)/1.4 = 1.17.",
                  "Diesel eta = 1 - 0.33 times 1.17 = 0.614; Otto eta at same r = 1 - 0.33 = 0.67; Otto is higher at the same r.",
                ],
              },
              {
                q: "Define cut-off ratio in a Diesel cycle.",
                marks: 2,
              },
              {
                q: "An Otto cycle has r = 9 and gamma = 1.4. Find its air-standard efficiency.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Engine performance and steam boilers",
            body: [
              "Engine performance is quantified by a small set of indicators. Indicated power IP is the power developed inside the cylinder by the working fluid on the piston, computed from the indicator diagram as IP = P_mi times L times A times N times the number of firing strokes per second, where P_mi is the mean effective pressure, L is the stroke length, A is the piston area and N is the number of working cycles per second. Brake power BP is the usable power measured at the crankshaft by a dynamometer, equal to the indicated power minus the friction power lost to bearings, pumping and auxiliaries: BP = IP - FP.",
              "Mechanical efficiency eta_m = BP over IP measures how much of the indicated power reaches the shaft. Specific fuel consumption SFC is the fuel flow rate per unit power output, usually in kg per kW-hour; a lower SFC means better fuel economy. Brake thermal efficiency eta_b = BP over (m_fuel times calorific value) is the overall conversion of fuel energy to shaft work. The mean effective pressure MEP is the constant pressure that, acting over one stroke, would produce the same work as the actual cycle; it is a measure of how hard the engine is working per unit of cylinder volume.",
              "A boiler is the heart of a steam power plant, converting water into high-pressure steam by burning fuel. Boilers are classified as fire-tube (hot gases pass through tubes surrounded by water, e.g. Cornish and Lancashire) or water-tube (water passes through tubes surrounded by hot gases, e.g. Babcock and Wilcox); water-tube boilers handle high pressure and large capacities and dominate power stations. Boiler efficiency is the ratio of heat absorbed by water to the heat supplied by fuel. Equivalent evaporation and actual evaporation are used to compare boilers at standard conditions of 100 deg C and 1 atm. The steam from the boiler drives a turbine, which may be impulse (de Laval) or reaction (Parsons), condensing the exhaust to maximise work output.",
            ],
            bullets: [
              "Indicated power IP: power developed in the cylinder on the piston, from the indicator diagram.",
              "Brake power BP = IP - FP; mechanical efficiency eta_m = BP/IP.",
              "Specific fuel consumption SFC: fuel flow per unit power output, in kg per kW-h.",
              "Mean effective pressure MEP: the constant pressure that would produce the actual work per stroke.",
              "Boiler: fire-tube (Cornish, Lancashire) vs water-tube (Babcock and Wilcox); efficiency = heat absorbed by water / heat supplied by fuel.",
            ],
            table: {
              caption: "Engine performance indicators.",
              headers: ["Indicator", "Definition", "Formula", "Unit"],
              rows: [
                ["Indicated power", "fluid work on piston", "P_mi L A N", "kW"],
                ["Brake power", "shaft output", "IP - FP", "kW"],
                ["Mechanical efficiency", "shaft / indicated", "BP/IP", "percent"],
                ["Specific fuel consumption", "fuel per unit power", "m_fuel / BP", "kg/kW-h"],
                ["Mean effective pressure", "work per stroke volume", "W / V_swept", "bar"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Performance metrics at a glance",
              caption: "Each metric answers a different question about engine performance.",
              axes: { x: "where measured", y: "per what basis" },
              quadrants: [
                { label: "IP per cylinder", note: "fluid work on piston" },
                { label: "BP at crankshaft", note: "usable shaft power" },
                { label: "SFC per kg fuel", note: "fuel economy" },
                { label: "MEP per unit volume", note: "work density" },
              ],
            },
            callout: {
              type: "tip",
              title: "IP, BP, FP form one triangle",
              body: "Remember IP = BP + FP. From this one relation mechanical efficiency eta_m = BP/IP follows immediately. In any performance question, write this identity first, then fill in whichever two quantities are given and solve for the third.",
            },
            keyTerms: [
              { term: "Indicated power", definition: "The power developed inside the engine cylinder by the working fluid on the piston, computed from the indicator diagram." },
              { term: "Brake power", definition: "The usable power delivered at the engine crankshaft, measured by a dynamometer and equal to indicated power minus friction power." },
              { term: "Mean effective pressure", definition: "A fictitious constant pressure that, acting over one power stroke, would produce the same work as the actual cycle." },
            ],
            examQuestions: [
              {
                q: "Define indicated power, brake power and friction power. Explain mechanical efficiency, specific fuel consumption and brake thermal efficiency. A single-cylinder four-stroke engine produces a brake power of 5 kW with mechanical efficiency 80 percent; find the indicated power and the friction power.",
                marks: 7,
                outline: [
                  "Define IP as the power developed in the cylinder from the indicator diagram: IP = P_mi L A N (cycles per second).",
                  "Define BP as the usable power at the crankshaft from a dynamometer, and FP = IP - BP.",
                  "Define mechanical efficiency eta_m = BP/IP, specific fuel consumption as fuel flow per unit power, and brake thermal efficiency as BP divided by fuel energy input.",
                  "State the relation IP = BP + FP and rearrange to IP = BP / eta_m.",
                  "Substitute BP = 5 kW and eta_m = 0.80: IP = 5/0.80 = 6.25 kW.",
                  "Friction power FP = IP - BP = 6.25 - 5 = 1.25 kW.",
                  "Mention typical eta_m values of 75 to 85 percent for automotive engines, lower at part load.",
                ],
              },
              {
                q: "Define specific fuel consumption and state its unit.",
                marks: 2,
              },
              {
                q: "Distinguish between a fire-tube boiler and a water-tube boiler.",
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
      title: "Machine Elements and Power Transmission",
      summary:
        "The machine elements that connect and transmit power between rotating shafts: shafts designed by the torsion equation, keys and couplings, bearings through oil film or rolling contact, belt drives with slip and creep, gear trains simple and compound, and a brief look at clutches and brakes built on the same friction physics.",
      chapter: {
        number: "05",
        title: "Machine Elements and Power Transmission",
        intro:
          "Unit V turns to the machine elements that connect and transmit power between rotating shafts: shafts designed by the torsion equation, keys that fix hubs and couplings that join shafts; bearings carrying the loads through oil film or rolling contact; belt drives and their slip and creep; gear trains simple, compound and epicyclic; and a brief look at clutches and brakes built on the same friction physics.",
        inOneBreath:
          "A shaft transmits torque through the torsion equation T/J = tau/r = G theta/L with J = pi d^4 / 32 for a solid shaft and tau_max = 16T/(pi d^3); a key fixes a hub to a shaft and is sized for shear and crushing; a coupling joins two shafts rigidly or flexibly; a journal bearing carries the shaft on a hydrodynamic oil film while ball and roller bearings carry it on rolling elements; the L10 life is (C/P) to the p revolutions with p = 3 for ball and 10/3 for roller; a belt drive transmits power by friction with P = (T1 - T2) v and T1/T2 = e to the (mu theta); slip and creep both reduce driven speed; a gear gives exact VR = T1/T2; a compound train multiplies mesh ratios; an epicyclic train gives compact high ratios; a clutch engages and a brake retards, both by friction with torque T = mu W R for clutches and T = mu N r for block brakes.",
        sections: [
          {
            number: "5.1",
            title: "Shafts, keys and couplings",
            body: [
              "A shaft is a rotating machine element, usually of circular cross-section, that transmits power from a source such as a motor or engine to a driven machine. Shafts are designed to resist torsion from the transmitted torque and bending from transverse loads such as gears and pulleys. For a solid circular shaft of diameter d under a torque T, the torsion equation T over J = tau over r = G times theta over L relates torque T to the maximum shear stress tau at radius r = d/2, the polar moment of inertia J = pi d to the fourth / 32 of the cross-section, the angle of twist theta over length L, and the shear modulus G. The maximum shear stress gives the design criterion: tau_max = 16 T over (pi d cubed) for a solid shaft.",
              "A key is a small element inserted between a shaft and a hub to prevent relative rotation and to transmit torque, fitting into matching keyways cut in both shaft and hub. The common types are sunk keys (rectangular, square, taper), saddle keys, feather keys and splines. A key is designed for both shear and crushing: shear stress equals 2 T over (w times L times d) where w is the width and L the length of the key, and crushing stress equals 4 T over (h times L times d) where h is the height. The key is sized so that its shear and crushing strengths match the shaft strength.",
              "A coupling joins two shafts end to end so that they rotate together and transmit power. A rigid coupling such as a sleeve or flange coupling is used when the shafts are perfectly aligned; it cannot accommodate misalignment and transmits shock directly. A flexible coupling - bush-pin, Oldham, universal joint - absorbs small amounts of angular, parallel or axial misalignment and damps shock, at the cost of some additional weight and cost. The flange coupling is the most common industrial type: two flanges keyed to their shafts are bolted together, the bolts carrying the torque in shear. Couplings are sized by the torque to be transmitted and the speed of rotation.",
            ],
            bullets: [
              "Shaft: circular rotating element transmitting power; designed for torsion and bending.",
              "Torsion equation T/J = tau/r = G theta/L; J = pi d^4 / 32 for solid shaft.",
              "Maximum shear stress in solid shaft: tau_max = 16 T / (pi d^3).",
              "Key: prevents relative rotation between shaft and hub; designed for shear and crushing.",
              "Coupling: rigid for aligned shafts, flexible to absorb misalignment; flange coupling is common industrial type.",
            ],
            table: {
              caption: "Torque transmission elements summary.",
              headers: ["Element", "Role", "Failure Mode", "Design Criterion"],
              rows: [
                ["Shaft", "transmits torque", "shear / twist", "tau_max = 16T/(pi d^3)"],
                ["Key", "fixes hub to shaft", "shear and crushing", "tau = 2T/(w L d)"],
                ["Coupling", "joins two shafts", "bolt shear", "tau_bolt = T/(n A r)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Rigid vs flexible couplings",
              caption: "Choose by the kind and amount of misalignment expected.",
              left: {
                heading: "Rigid coupling",
                items: [
                  "for perfectly aligned shafts",
                  "sleeve or flange type",
                  "no shock absorption",
                  "bolts carry torque in shear",
                  "simple and cheap",
                ],
              },
              right: {
                heading: "Flexible coupling",
                items: [
                  "for small misalignment",
                  "bush-pin, Oldham, universal",
                  "absorbs shock and vibration",
                  "rubber or elastomer insert",
                  "heavier and costlier",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Torsion equation does the heavy lifting",
              body: "Almost every shaft and key problem reduces to T/J = tau/r = G theta/L combined with J = pi d^4 / 32. Write the equation first, substitute the geometry, and solve for the unknown - usually d for a given torque or the angle of twist for a given length. Most RGPV shaft problems are this single substitution.",
            },
            keyTerms: [
              { term: "Shaft", definition: "A rotating machine element of circular cross-section that transmits torque and supports rotating components." },
              { term: "Key", definition: "A small element fitted into keyways in a shaft and hub to prevent relative rotation and transmit torque." },
              { term: "Coupling", definition: "A device that joins two shafts end to end so they rotate together and transmit power, either rigid or flexible." },
            ],
            examQuestions: [
              {
                q: "State the torsion equation for a circular shaft and explain each term. A solid circular shaft transmits 50 kW at 200 rpm with a maximum permissible shear stress of 60 MPa. Find the shaft diameter. State two types of keys and two types of couplings.",
                marks: 7,
                outline: [
                  "State the torsion equation T/J = tau/r = G theta/L with J = pi d^4 / 32 for a solid circular shaft.",
                  "Explain T = torque, J = polar moment of inertia, tau = shear stress at radius r, G = shear modulus, theta = angle of twist over length L.",
                  "Relate torque to power and speed: P = 2 pi N T / 60, so T = P times 60 / (2 pi N).",
                  "Substitute P = 50,000 W and N = 200 rpm: T = 50000 times 60 / (2 pi times 200) = 2387 N m.",
                  "Use tau_max = 16 T / (pi d^3); rearrange d^3 = 16 T / (pi times tau_max) = 16 times 2387 / (pi times 60e6) = 2.023e-4 m^3.",
                  "d = (2.023e-4)^(1/3) = 0.0587 m, so use 60 mm standard shaft.",
                  "Mention key types: square sunk key, taper key; coupling types: rigid flange, flexible bush-pin.",
                ],
              },
              {
                q: "State the torsion equation and define each term.",
                marks: 2,
              },
              {
                q: "Name three types of keys used in machine design.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Bearings: journal, ball and roller",
            body: [
              "A bearing is a machine element that supports a rotating shaft and allows it to turn with minimum friction, taking radial or axial loads. Bearings are broadly classified as sliding contact (journal, or sleeve) bearings and rolling contact (ball and roller) bearings. A journal bearing has a sleeve of bronze, babbitt or polymer that the steel shaft runs inside, separated by a thin film of lubricating oil; the load is carried by hydrodynamic pressure generated in the oil film when the shaft rotates. Journal bearings are simple, cheap, quiet and tolerant of shock, but they have higher starting friction and need continuous lubrication.",
              "Rolling contact bearings carry the load through rolling elements - balls for ball bearings, cylindrical or tapered rollers for roller bearings - trapped between an inner race fitted on the shaft and an outer race fitted in the housing. Because rolling friction is much less than sliding friction, these bearings have low starting friction, run cool, and need only spot lubrication. Ball bearings handle both radial and axial loads but with limited capacity; deep-groove, angular contact and self-aligning are common sub-types. Roller bearings carry heavier radial loads; cylindrical rollers for pure radial, tapered rollers for combined radial and axial, and spherical rollers for self-aligning heavy-duty service.",
              "Bearing selection depends on the load magnitude and direction, the speed, the desired life, the space available and the operating environment. The bearing life is specified by the L10 life, the number of revolutions (or hours at a given speed) that 90 percent of a batch of bearings will complete before the first fatigue spall appears. The basic dynamic load rating C relates life to load: L10 = (C/P) raised to the power p, where P is the equivalent dynamic load and p is 3 for ball bearings and 10/3 for roller bearings. Proper sealing and lubrication are essential; the great majority of premature bearing failures come from contamination or lubricant breakdown, not from fatigue.",
            ],
            bullets: [
              "Journal bearing: sleeve of bronze or babbitt; load carried by hydrodynamic oil film.",
              "Ball bearing: rolling balls between inner and outer races; low friction, moderate load capacity.",
              "Roller bearing: cylindrical, tapered or spherical rollers; heavier radial loads.",
              "Bearing life L10 = (C/P)^p, with p = 3 for ball and 10/3 for roller bearings.",
              "Most bearing failures are from contamination or lubricant breakdown, not fatigue.",
            ],
            table: {
              caption: "Bearing types and their typical use.",
              headers: ["Type", "Rolling Element", "Best Load", "Typical Application"],
              rows: [
                ["Deep-groove ball", "balls", "moderate radial + axial", "electric motors"],
                ["Cylindrical roller", "cylindrical rollers", "heavy radial", "gearboxes"],
                ["Tapered roller", "tapered rollers", "combined radial + axial", "automotive hubs"],
                ["Journal (sleeve)", "oil film", "steady radial, shock-tolerant", "engine crankshaft"],
                ["Spherical roller", "barrel rollers", "heavy + misalignment", "conveyor pulleys"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Choosing a bearing by load and speed",
              caption: "Pick the type that matches the dominant load and the speed range.",
              steps: [
                { label: "Radial or axial load?" },
                { label: "Light load, high speed", note: "deep-groove ball" },
                { label: "Combined load", note: "tapered roller or angular contact" },
                { label: "Heavy radial only", note: "cylindrical roller" },
                { label: "Shock, misalignment", note: "spherical roller" },
              ],
            },
            callout: {
              type: "tip",
              title: "Match the bearing to the load",
              body: "Pick by load type before cost: heavy radial only - cylindrical roller; combined radial and axial - tapered roller or angular-contact ball; high speed light load - deep-groove ball; shock and misalignment - spherical roller. Naming the right type with one reason is worth more than listing all types.",
            },
            keyTerms: [
              { term: "Journal bearing", definition: "A sliding-contact bearing in which a shaft rotates inside a sleeve, supported by a hydrodynamic oil film." },
              { term: "Rolling contact bearing", definition: "A bearing that carries the load through rolling balls or rollers between inner and outer races." },
              { term: "L10 life", definition: "The number of revolutions that 90 percent of a group of identical bearings will complete before the first fatigue failure appears." },
            ],
            examQuestions: [
              {
                q: "Classify bearings and describe the construction and working of a journal bearing and a ball bearing. State the relationship between bearing life and load, defining L10 life, dynamic load rating and equivalent load.",
                marks: 7,
                outline: [
                  "Classify bearings as sliding contact (journal) and rolling contact (ball and roller).",
                  "Describe a journal bearing: shaft runs inside a sleeve of bronze or babbitt; oil film carries the load by hydrodynamic pressure when the shaft rotates.",
                  "Give advantages: simple, quiet, shock tolerant; disadvantages: high starting friction, continuous lubrication needed.",
                  "Describe a ball bearing: rolling balls between inner and outer races; rolling friction much lower than sliding.",
                  "Give sub-types: deep-groove, angular contact, self-aligning; mention roller types: cylindrical, tapered, spherical.",
                  "Define L10 life as the revolutions completed by 90 percent of bearings before first spall.",
                  "State L10 = (C/P)^p with p = 3 for ball and 10/3 for roller, where C is basic dynamic load rating and P is equivalent dynamic load.",
                ],
              },
              {
                q: "What is an L10 life of a bearing?",
                marks: 2,
              },
              {
                q: "Why are roller bearings used in preference to ball bearings for heavy radial loads?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Belt drives: open, crossed, slip and creep",
            body: [
              "A belt drive transmits power between two parallel shafts by a flexible belt running over pulleys fixed to the shafts, relying on friction between the belt and the pulley surface. Belt drives are quieter and cheaper than gears, can absorb shock, and tolerate small misalignment; they are also limited in power per unit width and by slip. An open belt drive runs over two pulleys with the same sense of rotation, the belt leaving the top of one pulley and entering the top of the other. A crossed belt drive reverses the sense of rotation of the driven shaft by crossing the belt between the pulleys, at the cost of more wear at the crossing point.",
              "The velocity ratio of a belt drive is the ratio of the angular speeds of the driven and driving shafts: N2 over N1 = D1 over D2 in the ideal case, where D1 and D2 are the pulley diameters. In practice slip reduces the driven speed: the total slip s is the sum of the slip on the driving and driven pulleys, and the actual velocity ratio becomes N2 over N1 = (D1 over D2) times (1 - s/100). Creep is a different effect: the belt tension differs on the tight and slack sides, so the belt elongates slightly as it moves from the slack side to the tight side, causing a small additional reduction in speed of about 1 to 2 percent.",
              "The power transmitted by a belt is P = (T1 - T2) times v, where T1 is the tight-side tension, T2 is the slack-side tension and v is the belt speed. The ratio T1 over T2 is set by friction and the angle of wrap, as the belt friction equation gives T1 over T2 = e raised to (mu times theta). The maximum tension in the belt is limited by the belt's tensile strength; for a belt of cross-section b times t and maximum safe stress sigma_max, T_max = sigma_max times b times t. The centrifugal tension T_c = m times v squared (per unit length) reduces the effective tension at high speeds and gives an optimum belt speed for maximum power transmission. Flat belts are used for long centre distances, V-belts for high-power compact drives.",
            ],
            bullets: [
              "Open belt: same rotation sense; crossed belt: opposite sense, with crossing wear.",
              "Velocity ratio N2/N1 = D1/D2 ideal; with slip s, N2/N1 = (D1/D2) times (1 - s/100).",
              "Creep: belt elongates from slack to tight side, lowering speed by 1 to 2 percent.",
              "Power P = (T1 - T2) v; tension ratio T1/T2 = e to the (mu theta).",
              "Centrifugal tension T_c = m v squared sets an optimum belt speed for maximum power.",
            ],
            table: {
              caption: "Belt drive quantities and their effects.",
              headers: ["Quantity", "Symbol", "Effect on Driven Speed", "Cause"],
              rows: [
                ["Velocity ratio", "D1/D2", "sets ideal N2/N1", "geometry"],
                ["Slip", "s", "reduces by factor (1 - s/100)", "friction loss"],
                ["Creep", "-", "reduces by 1 to 2 percent", "elastic strain"],
                ["Centrifugal tension", "T_c", "limits power at high speed", "belt mass v squared"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Belt tension arc and power transfer",
              caption: "Friction converts the slack-side tension T2 into the tight-side T1 over the angle of wrap.",
              stages: [
                { label: "Slack side T2", note: "leaves driven pulley" },
                { label: "Wrap angle theta", note: "in radians" },
                { label: "Friction arc", note: "T1/T2 = e to the (mu theta)" },
                { label: "Tight side T1", note: "approaches driven pulley" },
                { label: "Power", note: "P = (T1 - T2) v" },
              ],
            },
            callout: {
              type: "warning",
              title: "Slip and creep are different",
              body: "Slip is a gross relative motion between belt and pulley, usually a percentage loss added at both pulleys. Creep is the elastic deformation of the belt itself as tension changes around the arc. They both reduce driven speed but by different mechanisms - never use them interchangeably in an exam answer.",
            },
            keyTerms: [
              { term: "Belt drive", definition: "A power transmission system in which a flexible belt runs over pulleys on parallel shafts, transmitting torque by friction." },
              { term: "Slip", definition: "The relative motion between the belt and the pulley surface that reduces the driven speed below the ideal velocity ratio." },
              { term: "Creep", definition: "The slight elongation of the belt as it moves from the slack side to the tight side due to tension difference, causing a small speed reduction." },
            ],
            examQuestions: [
              {
                q: "Describe open and crossed belt drives. Define slip and creep in a belt drive. Derive the expression for the power transmitted by a belt, and state the effect of centrifugal tension on maximum power.",
                marks: 7,
                outline: [
                  "Describe an open belt: both pulleys turn the same way; belt leaves top of one and enters top of the other.",
                  "Describe a crossed belt: belt is twisted between pulleys, reversing driven shaft rotation; more wear at crossing.",
                  "Define slip as gross relative motion between belt and pulley surface, reducing driven speed by a percentage s.",
                  "Define creep as elastic elongation of the belt moving from slack to tight side, reducing speed by 1 to 2 percent.",
                  "Power P = (T1 - T2) v, where T1 is tight-side tension, T2 is slack-side tension, v is belt speed.",
                  "T1/T2 = e to the (mu theta) from the belt friction equation; combine to find T1, T2 in terms of P and v.",
                  "Centrifugal tension T_c = m v squared reduces the effective friction grip; at the optimum speed power is maximum, then falls.",
                ],
              },
              {
                q: "Distinguish between slip and creep in a belt drive.",
                marks: 2,
              },
              {
                q: "An open belt drive has D1 = 200 mm, D2 = 500 mm and 4 percent slip. Find the speed of the driven shaft if the driving shaft runs at 1000 rpm.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Gears and gear trains",
            body: [
              "A gear is a toothed wheel that meshes with another gear to transmit power between two shafts, usually with the shafts closer together than a belt drive would allow and with a precise velocity ratio. The teeth of the driving gear push the teeth of the driven gear, so the velocity ratio is set by the tooth numbers and is exact: N2 over N1 = T1 over T2, where N is the speed in rpm and T is the number of teeth. Spur gears have teeth parallel to the shaft axis and connect parallel shafts; helical gears have inclined teeth and run more quietly; bevel gears connect intersecting shafts; worm gears connect non-parallel, non-intersecting shafts at right angles with a large reduction ratio.",
              "A gear train is a combination of two or more gears transmitting motion from a driving shaft to a driven shaft. In a simple gear train each gear is mounted on its own shaft and the gears mesh in sequence; the velocity ratio is the product of the ratios at each mesh, with intermediate (idler) gears affecting direction but not the overall ratio. In a compound gear train two gears are mounted on the same shaft so they rotate together; this allows much larger overall ratios in a compact arrangement, the standard layout of gearboxes. The overall velocity ratio of a compound train is the product of (driven teeth over driving teeth) at each mesh.",
              "The train value is the reciprocal of the velocity ratio, the ratio of the output speed to the input speed. Reverted gear trains bring the output shaft back into line with the input shaft, useful when the input and output must be coaxial, as in clocks and lathe back-gear drives. The epicyclic or planetary gear train has one gear (the sun) at the centre, planet gears mounted on a carrier that rotates around it, and an outer ring gear; by holding one of these three elements fixed and driving another, a wide range of ratios is obtained from a compact train, which is why planetary trains dominate automatic transmissions.",
            ],
            bullets: [
              "Gear: toothed wheel; velocity ratio N2/N1 = T1/T2, exact (no slip).",
              "Spur: parallel shafts; helical: quieter; bevel: intersecting shafts; worm: right-angle, large reduction.",
              "Simple gear train: each gear on its own shaft; idlers affect direction only.",
              "Compound gear train: two gears on the same shaft; overall ratio is product of mesh ratios.",
              "Epicyclic (planetary) train: sun, planet, ring; compact, wide ratio range, used in automatic transmissions.",
            ],
            table: {
              caption: "Gear type selection by shaft arrangement.",
              headers: ["Gear Type", "Shaft Geometry", "Teeth", "Typical Use"],
              rows: [
                ["Spur", "parallel", "parallel to axis", "gearboxes, clocks"],
                ["Helical", "parallel", "inclined", "automotive transmissions"],
                ["Bevel", "intersecting", "on cone surface", "differentials"],
                ["Worm", "non-parallel, non-intersecting", "worm + worm wheel", "high-reduction drives"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Gear types by shaft geometry",
              caption: "Match the gear type to the relative position of the shafts being connected.",
              tiers: [
                { label: "Spur: parallel shafts", note: "teeth parallel to axis" },
                { label: "Helical: parallel shafts", note: "inclined teeth, quieter" },
                { label: "Bevel: intersecting shafts", note: "cone-shaped pitch" },
                { label: "Worm: non-parallel, non-intersecting", note: "right-angle, large ratio" },
              ],
            },
            callout: {
              type: "tip",
              title: "VR is the product of mesh ratios",
              body: "For any compound gear train, write the velocity ratio as the product of (driven teeth over driving teeth) at each mesh. List the meshes in order, multiply the fractions, and simplify. This single line replaces pages of algebra and works for every compound train RGPV asks.",
            },
            keyTerms: [
              { term: "Gear train", definition: "A combination of two or more gears transmitting motion from a driving shaft to a driven shaft." },
              { term: "Compound gear train", definition: "A gear train in which two or more gears are mounted on the same shaft so they rotate together, allowing large reduction in a compact arrangement." },
              { term: "Epicyclic gear train", definition: "A gear train in which one or more gears orbit a central gear, giving high ratio reduction in a compact arrangement." },
            ],
            examQuestions: [
              {
                q: "Classify gears and describe spur, helical, bevel and worm gears. Distinguish between simple and compound gear trains. A compound gear train has gears A (20 teeth) driving B (60 teeth) on shaft 2, and C (25 teeth) on shaft 2 driving D (75 teeth) on shaft 3; find the overall velocity ratio and the speed of D if A runs at 1200 rpm.",
                marks: 7,
                outline: [
                  "Classify gears by shaft geometry: spur for parallel, helical for quieter parallel, bevel for intersecting, worm for non-parallel non-intersecting.",
                  "Describe each type with one line on teeth direction and one on typical use.",
                  "Define a simple gear train: each gear on its own shaft, idlers reverse direction but do not change overall VR.",
                  "Define a compound gear train: two gears on the same shaft rotate together; VR is product of mesh ratios.",
                  "Write the overall VR = (T_B/T_A) times (T_D/T_C) = (60/20) times (75/25) = 3 times 3 = 9.",
                  "Speed of D = speed of A / VR = 1200 / 9 = 133.3 rpm.",
                  "Mention that the same shaft 2 carries B and C, so N_B = N_C; intermediate shaft speed is N_A times (T_A/T_B) = 1200/3 = 400 rpm.",
                ],
              },
              {
                q: "Define a compound gear train.",
                marks: 2,
              },
              {
                q: "A simple gear train has 30 teeth on the driver and 90 on the driven. Find the velocity ratio.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Clutches and brakes",
            body: [
              "A clutch is a machine element that connects and disconnects two coaxial shafts during rotation, allowing the engine to be started and the drive to be engaged smoothly. The friction clutch is the most common type: two flat surfaces (a pressure plate and a friction-lined disc) are pressed together by a spring so that friction transmits the torque. When the clutch pedal is depressed the spring force is released, the plates separate and torque transmission stops. Single-plate clutches are used in cars; multi-plate clutches in two-wheelers and racing where space is tight and torque is high; cone and centrifugal clutches serve special applications. The torque capacity of a friction clutch is T = mu times W times R, where mu is the coefficient of friction, W the axial force and R the mean radius of the friction surface.",
              "A brake is a machine element that absorbs the kinetic or potential energy of a moving body and dissipates it as heat, bringing the body to rest or holding it stationary. The block or shoe brake has a friction block pressed against a rotating drum; the band brake wraps a flexible band around the drum, with the tight side anchored and the slack side pulled by a lever. Internal expanding shoe brakes are used in cars (drum brakes); disc brakes use a caliper squeezing pads against a disc, with superior fade resistance and now dominant in front wheels. The braking force depends on the coefficient of friction between the lining and the drum or disc, the actuating force and the geometry.",
              "The braking torque of a simple block brake is T = mu times N times r, where N is the normal force on the block and r is the drum radius. For a band brake, the tight-side tension T1 and slack-side tension T2 are related by T1 over T2 = e raised to (mu times theta), the same belt friction equation, and the braking torque is (T1 - T2) times r. The energy absorbed during braking of a vehicle of mass m from speed v to rest is half m v squared and must be dissipated as heat by the brake. Anti-lock braking systems modulate the braking force to prevent wheel lock and preserve steering control, while regenerative braking in electric and hybrid vehicles recovers the kinetic energy as electrical energy stored in the battery.",
            ],
            bullets: [
              "Clutch: connects and disconnects coaxial shafts during rotation; friction clutch is the most common type.",
              "Clutch torque: T = mu W R, where W is axial spring force and R is mean friction radius.",
              "Brake: absorbs kinetic or potential energy and dissipates it as heat; block, band, disc types.",
              "Block brake torque T = mu N r; band brake uses T1/T2 = e to the (mu theta).",
              "Energy absorbed braking mass m from v to rest is (1/2) m v squared, dissipated as heat.",
            ],
            table: {
              caption: "Clutch and brake types summary.",
              headers: ["Element", "Type", "Where Used", "Torque Formula"],
              rows: [
                ["Clutch", "single-plate", "cars", "T = mu W R"],
                ["Clutch", "multi-plate", "two-wheelers, racing", "T = mu W R n"],
                ["Brake", "block (shoe)", "cranes, hoists", "T = mu N r"],
                ["Brake", "band", "winches", "T = (T1 - T2) r"],
                ["Brake", "disc", "car front wheels", "T = mu N r"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Clutch vs brake: same physics, opposite jobs",
              caption: "Both use friction; the clutch transmits torque, the brake absorbs it.",
              start: "Friction pair in service",
              branches: [
                { label: "Connect two shafts", outcome: "friction clutch - transmit torque", good: true },
                { label: "Hold or stop a shaft", outcome: "brake - absorb energy as heat", good: true },
                { label: "Slow a vehicle downhill", outcome: "retarder or exhaust brake", good: true },
                { label: "Modulate to prevent lock", outcome: "anti-lock braking (ABS)", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Same friction equation, three places",
              body: "The relation T1/T2 = e to the (mu theta) appears in belt drives, band brakes and (in modified form) clutches. Once you have it memorised, three different questions share one solution. RGPV examiners reward students who spot this shared structure and cite the equation by name.",
            },
            keyTerms: [
              { term: "Clutch", definition: "A machine element that connects and disconnects two coaxial shafts during rotation, allowing smooth engagement of the drive." },
              { term: "Brake", definition: "A machine element that absorbs the kinetic or potential energy of a moving body and dissipates it as heat to retard or hold the body." },
              { term: "Braking torque", definition: "The torque exerted by a brake on a rotating drum or disc, equal to the friction force times the effective radius." },
            ],
            examQuestions: [
              {
                q: "Define a clutch and a brake. Describe the construction and working of a single-plate friction clutch and a block brake. Derive the torque capacity of a single-plate clutch and the braking torque of a block brake.",
                marks: 7,
                outline: [
                  "Define a clutch as a device to connect and disconnect coaxial shafts during rotation; define a brake as a device to absorb energy and retard or hold a moving body.",
                  "Describe a single-plate friction clutch: pressure plate, friction-lined clutch plate, spring, flywheel.",
                  "Working: spring force engages plates, friction transmits torque; releasing spring separates plates and disengages drive.",
                  "Torque capacity: T = mu W R for uniform pressure, where W is axial spring force, R is mean friction radius.",
                  "Describe a block brake: friction block pressed against a rotating drum by a lever; braking torque opposes drum rotation.",
                  "Braking torque: T = mu N r, where N is the normal force on the block and r is the drum radius.",
                  "Mention that the energy absorbed braking mass m from v to rest is (1/2) m v squared, dissipated as heat; design for thermal capacity.",
                ],
              },
              {
                q: "State the function of a clutch.",
                marks: 2,
              },
              {
                q: "A single-plate clutch has axial force 2000 N, mu = 0.3 and mean radius 100 mm. Find the torque capacity.",
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
        { topic: "Carnot cycle and second law statements", weight: "12 percent", note: "appears in almost every paper - state, prove, compute eta" },
        { topic: "Otto and Diesel cycle efficiency", weight: "12 percent", note: "derive both formulas and substitute values" },
        { topic: "Moment, couple, Lami's theorem", weight: "10 percent", note: "equilibrium of concurrent forces" },
        { topic: "Trusses - method of joints", weight: "8 percent", note: "solve two-joint problem with zero-force check" },
        { topic: "Friction on inclined plane", weight: "8 percent", note: "angle of repose, force up and down" },
        { topic: "First law for closed system", weight: "8 percent", note: "Q - W = delta U, work it for constant volume and pressure" },
        { topic: "SFEE applied to devices", weight: "7 percent", note: "turbine, nozzle, throttle simplifications" },
        { topic: "Four-stroke SI and CI engines", weight: "8 percent", note: "strokes, valve timing, comparison" },
        { topic: "Belt drives and gear trains", weight: "10 percent", note: "VR with slip, compound train ratio" },
        { topic: "Shaft and key design", weight: "7 percent", note: "torsion equation, key shear and crushing" },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        { week: "Week 1", focus: "Statics fundamentals", tasks: ["Master force resolution and resultant", "Practice Lami's theorem on five problems", "Learn centroid and moment of inertia of standard shapes"] },
        { week: "Week 2", focus: "Friction, trusses and dynamics", tasks: ["Solve ten friction-on-incline problems", "Solve one truss by method of joints end to end", "Derive the three equations of motion and projectile formulas"] },
        { week: "Week 3", focus: "Work-energy and machines", tasks: ["Solve five collision problems using momentum", "Master law of machine P = mu W + C", "Compute VR for three pulley systems"] },
        { week: "Week 4", focus: "Thermodynamics", tasks: ["List every term of the SFEE and its simplifications", "Derive Carnot, Otto and Diesel efficiencies", "Practice entropy change of ideal gas in three forms"] },
        { week: "Week 5", focus: "IC engines and machine elements", tasks: ["Draw P-v of Otto and Diesel with state points", "Compute IP, BP, SFC and MEP from given data", "Torsion equation for shaft and key sizing"] },
        { week: "Week 6", focus: "Power transmission and revision", tasks: ["Belt drive VR with slip and creep", "Compound gear train ratio product rule", "Revise all derivations and attempt one past paper"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Memorise the seven formulae: resultant R, moment M = F d, Lami's, eta_Carnot, eta_Otto, eta_Diesel, T/J = tau/r.",
        "Rehearse the torsion, SFEE and Carnot derivations end to end on blank paper without notes.",
        "Draw the four-stroke SI and CI cycles on P-v and label every state point.",
        "List the simplifications of SFEE for nozzle, turbine, throttle and boiler in one column.",
        "Revise zero-force member rules and the law of machine; both are 2- and 3-mark bankers.",
        "Sleep seven hours; arrive 30 minutes early; carry an extra pen, scale and approved calculator.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Read the paper twice in the first ten minutes and tick every 7-mark question you can answer fully.",
        "Start with the question where the derivation is freshest - usually Carnot or Otto cycle.",
        "Draw a neat diagram for every answer; the diagram earns method marks even if the algebra slips.",
        "Write formulas first, substitute values next, state units with every numeric answer.",
        "Leave the last 15 minutes to check arithmetic, signs and units across all attempted questions.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Using Celsius instead of Kelvin in eta = 1 - T_L/T_H - always convert to absolute temperature.",
        "Confusing slip and creep in belt drives - slip is gross relative motion, creep is elastic elongation.",
        "Forgetting the moment equation sum M = 0 in non-concurrent equilibrium problems.",
        "Assuming friction direction opposite to actual impending motion on inclined planes.",
        "Using static friction coefficient mu_s for a sliding body when mu_k is required.",
        "Drawing the Otto heat addition at constant pressure instead of constant volume - they are different cycles.",
      ],
    },
  ],
};
