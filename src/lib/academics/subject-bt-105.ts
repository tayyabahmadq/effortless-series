/**
 * Academics - RGPV first-year common subject: BT-105 Engineering Graphics.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample (text drawing
 * procedure or bash AutoCAD command sequence), and three exam-style
 * questions (one 7-mark with outline + two shorts).
 *
 * ASCII-only content: angles written as "deg", arrows as "->", Greek as
 * "pi"; only the allowed non-ASCII set (· — – ≈ ≥ ≤ ±) appears.
 */

import type { AcademicSubject } from "./types";

export const bt105: AcademicSubject = {
  id: "bt-105",
  code: "BT-105",
  title: "Engineering Graphics",
  semester: "I Semester",
  program: "RGPV · First Year Common (all B.Tech branches)",
  tagline:
    "The complete visual guide to BT-105: introduction and projection theory, projections of lines and planes, projections of solids, sections development and isometric, CAD and computer-aided drafting - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units walk a first-year engineer from the instruments and conventions that open every drawing sheet, through projection of points, lines, planes and solids in first-angle method, into sections, surface development and isometric projection, and finally into AutoCAD command sequences that automate the same drawings on screen. Each section pairs the formal rule with a worked example - project a point at 30 mm above HP, find the true length of a line inclined 30 deg to HP, develop the lateral surface of a truncated cone - so the method, not the picture, is what you carry into the exam hall.",
  accentColor: "#94a3b8",
  emoji: "EG",
  unitCount: 5,
  totalSections: 30,
  units: [
    // ============================================================ UNIT I
    {
      number: 1,
      roman: "I",
      title: "Introduction and Projection Theory",
      summary:
        "The opening unit sets up the language and the rules: drawing instruments, sheet sizes A0-A4, lines and lettering, dimensioning, scales, the families of projections, first-angle and third-angle methods as per BIS SP-46, and the projection of points in all four quadrants - the foundation every later unit assumes.",
      chapter: {
        number: "01",
        title: "Introduction and Projection Theory",
        intro:
          "Unit I equips the engineer with the tools, conventions and conceptual model of projection. From the T-square and set squares through sheet layout, dimensioning, scales and line hierarchy to first-angle projection of a point in any quadrant, every later unit assumes this vocabulary.",
        inOneBreath:
          "Engineering graphics is the universal pictorial language of engineers; the instrument kit comprises T-square, set squares 30-60 deg and 45 deg, compass, bow compass, divider, engineer's scale, mini-drafter, pencils 3H-6H construction, HB-F visible, 2B lettering; sheet sizes A0 (841 x 1189) down to A4 (210 x 297) with margins and a title block at the bottom right; lines follow IS 696 line hierarchy; lettering is single-stroke vertical or inclined 75 deg; dimensions use thin extension lines, dimension lines and solid arrows; scales plain, diagonal and vernier reduce or enlarge objects; projection families are orthographic, isometric, oblique and perspective; first-angle and third-angle differ by where the object is placed and how views are arranged; a point in the first quadrant is above HP and in front of VP, projected by drawing its front view above XY and top view below XY.",
        sections: [
          {
            number: "1.1",
            title: "Engineering graphics - scope, importance, instruments",
            body: [
              "Engineering graphics is the universal language of the engineer - a precise pictorial and orthographic vocabulary that conveys shape, size, position and method of manufacture without ambiguity. Where a written description of a bracket can run a paragraph, a single dimensioned view fixes its geometry in seconds. RGPV treats BT-105 as the foundation course because every later subject - machine design, production drawing, surveying, civil plans - assumes you can read and produce standard drawings. The course also develops spatial reasoning, the ability to mentally rotate an object and predict what each viewing direction will reveal, a skill no other first-year subject trains directly.",
              "The drawing instrument kit defined in IS 696 and BIS SP-46 has not changed materially for half a century. The T-square, slid along the left edge of a drawing board, draws horizontal lines and acts as the base for set squares. Two set squares - one 30-60 deg and one 45 deg - combine with the T-square to draw common inclined lines at 30, 45, 60, 75 and 105 deg without measuring. A compass draws circles and arcs up to about 150 mm radius; a bow compass handles smaller arcs; a divider transfers and divides lengths. An engineer's scale set reads reductions of 1:1, 1:2, 1:5, 1:10, 1:50, 1:100, 1:200, 1:500 and 1:1000 directly.",
              "Other instruments complete the kit: a drawing board of seasoned soft wood about A0 size with a perfectly straight working edge; a mini-drafter that combines T-square, protractor and set squares into one head clamped to the board; French curves for non-circular arcs; plastic templates for civil, electrical and mechanical symbols; an eraser shield for local corrections; and pencils graded from 9H to 9B. Harder H grades (3H to 6H) are reserved for faint construction lines that must not reproduce in a print; HB or F suits visible outlines; 2B is used for lettering and title block entries. Pencils are sharpened to a conical point for lines and a chisel point for thick visible edges.",
              "Worked instrument use: to draw a 60 deg inclined line through a point P on a vertical reference, clamp the T-square, place the 30-60 set square with its shorter leg on the T-square blade, slide it until the hypotenuse passes through P, and draw the line away from the body. Reversing the hypotenuse gives a 120 deg line. Stacking the 30-60 on top of the 45 deg set square multiplies angles: 45 + 30 = 75 deg, 45 + 60 = 105 deg, 60 + 60 = 120 deg. The mini-drafter achieves all of these with one dial adjustment, which is why colleges prefer it for routine work.",
              "Drawing discipline matters more than the instruments themselves. Draw construction lines first at 4H to 6H, then visible outlines in HB at uniform thickness 0.7 to 1.0 mm, then hidden edges as short evenly-spaced dashes about 3 mm long with 1 mm gaps, then centre lines as long dash - short dash sequences. Lettering uses single-stroke vertical or inclined (about 75 deg to vertical) capitals 3 to 5 mm high. Dimension lines are thin continuous; extension lines leave a small gap from the object; arrows are solid and uniform. A consistent line hierarchy makes a drawing legible at a glance - the same hierarchy CAD packages automate through layers.",
            ],
            bullets: [
              "Engineering graphics: the universal pictorial language of engineers; conveys shape, size and method without a written description.",
              "T-square draws horizontals and supports set squares; the working edge of the board must be perfectly straight.",
              "Set squares 30-60 deg and 45 deg; stacking gives 75, 105, 120, 135, 150 deg without a protractor.",
              "Compass (large arcs), bow compass (small arcs) and divider (transfer and divide lengths).",
              "Engineer's scale set: 1:1, 1:2, 1:5, 1:10, 1:50, 1:100, 1:200, 1:500, 1:1000 - read reductions directly.",
              "Pencils 3H-6H construction, HB-F visible, 2B lettering; conical point for lines, chisel point for thick edges.",
              "Line hierarchy: thin faint construction; thick visible; short dashes hidden; long-short dash centre.",
            ],
            table: {
              caption: "Standard drawing kit and primary use (BIS SP-46).",
              headers: ["Instrument", "Primary use", "Typical spec"],
              rows: [
                ["T-square", "Horizontal lines and base for set squares", "1.0 m blade, ebony edge"],
                ["Set square 30-60 deg", "Inclined lines at 30, 60, 90 deg", "250 mm acrylic"],
                ["Set square 45 deg", "Inclined lines at 45, 90, 135 deg", "250 mm acrylic"],
                ["Compass", "Circles and arcs up to 150 mm", "0.5 mm pencil"],
                ["Bow compass", "Small arcs 5-30 mm", "0.3 mm pencil, spring"],
                ["Engineer's scale", "Reduced full-size drawings", "30 cm, 8 scale edges"],
                ["Mini-drafter", "T-square + protractor + set squares", "Head clamped to board"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The stack of a finished engineering drawing",
              caption:
                "Bottom layer is faint construction; each layer above is thicker or more visible.",
              layers: [
                { label: "Construction lines (4H-6H, faint)", note: "drawn first; do not reproduce in a print" },
                { label: "Centre and hidden lines (H, dashed)", note: "locate features and invisible edges" },
                { label: "Visible outlines (HB, 0.7-1.0 mm)", note: "the part silhouette; drawn after construction" },
                { label: "Dimensions and lettering (2B)", note: "applied last; uniform height 3-5 mm" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sharpen two pencils before starting",
              body: "Keep one pencil sharpened to a conical point for thin construction lines (4H-6H) and a second to a chisel point for thick visible outlines (HB or F). Switching pencils between stages gives the crisp line hierarchy examiners look for and saves erasing time.",
            },
            keyTerms: [
              { term: "Engineering graphics", definition: "The universal pictorial language of engineers - drawing shape, size and method without a written description." },
              { term: "T-square", definition: "A long blade with a fixed head slid along the board edge; draws horizontals and supports set squares." },
              { term: "Set square", definition: "A triangular transparent acrylic tool in 30-60 deg or 45 deg form; draws common inclined lines without a protractor." },
              { term: "Mini-drafter", definition: "A combined T-square, protractor and set-square head clamped to the board; replaces T-square and individual set squares." },
              { term: "Line hierarchy", definition: "Order of drawing: construction (thin faint), visible (thick), hidden (short dashes), centre (long-short dash)." },
            ],
            examQuestions: [
              {
                q: "Describe the scope and importance of engineering graphics for a B.Tech student. List the instruments in a standard drawing kit and state the use of each, including the pencil grades used for construction lines, visible outlines and lettering.",
                marks: 7,
                outline: [
                  "Define engineering graphics as the universal pictorial language of engineers.",
                  "Importance: foundation for machine design, production drawing, surveying, civil plans; develops spatial reasoning.",
                  "List instruments: drawing board, T-square (or mini-drafter), set squares 30-60 deg and 45 deg, compass, bow compass, divider, protractor, engineer's scale, French curves, templates, eraser shield, pencils.",
                  "T-square: horizontals and base for set squares; mini-drafter replaces T-square plus set squares plus protractor.",
                  "Compass for large arcs and circles; bow compass for small arcs; divider to transfer and divide lengths.",
                  "Engineer's scale set with 1:1, 1:2, 1:5, 1:10, 1:50, 1:100, 1:200, 1:500, 1:1000 reductions.",
                  "Pencil grades: 3H-6H construction, HB-F visible outlines 0.7-1.0 mm, 2B lettering and title block.",
                ],
              },
              {
                q: "Name any four drawing instruments and state one use of each.",
                marks: 2,
              },
              {
                q: "What is the difference between a compass and a bow compass? Where is each used?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Sheet sizes, layout, lines and lettering",
            body: [
              "The BIS sheet size series follows a halving rule: each smaller sheet is half the larger, with the same aspect ratio of root 2 to 1. A0 is 841 x 1189 mm (1 square metre); A1 is 594 x 841 mm; A2 is 420 x 594 mm; A3 is 297 x 420 mm; A4 is 210 x 297 mm. The halving means two A1 sheets side by side equal one A0, two A2 sheets equal one A1, and so on down to A4 - the size of a typical photocopy. RGPV answer sheets in the drawing exam are usually A2 or A1 for full-sheet problems and A3 for short questions.",
              "Sheet layout is fixed by SP-46. A border of 10 mm is left on top, right and bottom; 20 mm on the left for filing. A title block sits at the bottom right corner about 185 x 65 mm and carries the drawing title, scale, drawing number, sheet number, drawn by, checked by, approved by, date and institution. For first-year work the title block has at least six cells: title, scale, drawn by, date, sheet number, and symbol of projection (first-angle or third-angle). The projection symbol - a truncated cone lying on its side with the two views arranged as in the method used - must appear in the title block; omitting it costs easy marks.",
              "Line types follow IS 696. Type A is a continuous thick line for visible outlines (0.7 to 1.0 mm). Type B is a continuous thin line for dimension, extension, projection and hatching lines (0.3 mm). Type C and D are dashed: short dashes for hidden edges (3 mm dash, 1 mm gap) and long dashes for centre lines, pitch circles and parts situated in front of the cutting plane. Type E is a continuous straight thin freehand line for limits of partial views. Type F is a dash-dot thin line for centre lines, cutting planes and adjacent parts. Type G is a long dash double-short dash for cutting planes of symmetrical parts viewed in section.",
              "Lettering follows IS 9609 single-stroke style. Heights are 3, 5, 7, 10, 14, 20 mm in the standard ratio; first-year work usually uses 3-5 mm for dimensions and 7-10 mm for titles. Letters may be vertical or inclined 15 deg forward (about 75 deg to the horizontal); the same inclination must be used throughout the drawing. Lower case is avoided on engineering drawings except for abbreviations; numerals are the same height as capitals. Spacing between letters is uniform; spacing between words equals one letter height; letters are written in a single freehand stroke without retouching.",
              "Worked layout: on an A2 sheet mark a 20 mm left margin and a 10 mm border on the other three sides with a 0.7 mm thick continuous line; rule the title block at the bottom right 185 x 65 mm; inside the block print the title (7 mm, vertical capitals), scale (5 mm), sheet number and the first-angle symbol. Draw the XY reference line across the working area at HB thickness before starting any problem. The neat layout earns the first 3-4 marks of every drawing answer, so do it before any construction lines.",
            ],
            bullets: [
              "Sheet sizes follow the halving rule: A0 841x1189, A1 594x841, A2 420x594, A3 297x420, A4 210x297 mm.",
              "Border 10 mm top/right/bottom, 20 mm left for filing; title block bottom right about 185 x 65 mm.",
              "Title block cells: title, scale, drawn by, date, sheet number, projection symbol.",
              "Projection symbol: a truncated cone - must appear in the title block; omission loses marks.",
              "Line type A continuous thick visible, B continuous thin (dimensions, hatching), C short-dash hidden, F dash-dot centre.",
              "Lettering IS 9609 single-stroke; heights 3, 5, 7, 10, 14, 20 mm; vertical or inclined 15 deg forward.",
              "Numerals same height as capitals; uniform letter spacing; one stroke per letter, no retouching.",
            ],
            table: {
              caption: "IS 696 line types used in BT-105 drawings.",
              headers: ["Type", "Line", "Width", "Use"],
              rows: [
                ["A", "Continuous thick", "0.7-1.0 mm", "Visible outlines and edges"],
                ["B", "Continuous thin", "0.3 mm", "Dimensions, extension, hatching"],
                ["C", "Short dashes", "0.5 mm", "Hidden edges"],
                ["D", "Long dashes", "0.5 mm", "Centre lines, pitch circles"],
                ["F", "Dash-dot thin", "0.5 mm", "Cutting planes, adjacent parts"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Sheet layout workflow on an A2 sheet",
              caption:
                "Start from the blank sheet and end with the projection symbol in the title block.",
              steps: [
                { label: "Border: 20 mm left, 10 mm others", note: "0.7 mm thick line" },
                { label: "Title block bottom-right 185x65 mm", note: "six cells minimum" },
                { label: "Print title, scale, sheet no., date", note: "lettering 7 mm capitals" },
                { label: "Mark XY reference line", note: "HB thickness across work area" },
                { label: "Insert first-angle symbol", note: "truncated cone in title block" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always draw the projection symbol",
              body: "The truncated-cone projection symbol in the title block declares whether you are using first-angle or third-angle method. Examiners look for it first; its absence is the most common reason a perfectly drawn answer loses 2-3 marks. Draw it even if the question does not ask - it costs 30 seconds and saves a marks deduction.",
            },
            keyTerms: [
              { term: "Sheet size series A", definition: "A0 to A4 with halving rule; A0 is 841 x 1189 mm, A4 is 210 x 297 mm; aspect ratio root 2 to 1." },
              { term: "Title block", definition: "Bottom-right block about 185 x 65 mm carrying drawing title, scale, drawn-by, date, sheet number and projection symbol." },
              { term: "First-angle symbol", definition: "A truncated cone on its side shown with its two views in first-angle arrangement; placed in the title block." },
              { term: "Single-stroke lettering", definition: "IS 9609 style; letters formed in one freehand stroke, vertical or inclined 15 deg forward, heights 3-20 mm." },
            ],
            examQuestions: [
              {
                q: "State the standard sheet sizes from A0 to A4 with dimensions. Describe the layout of a drawing sheet as per BIS, including borders, title block contents and the projection symbol. List four IS 696 line types with their use.",
                marks: 7,
                outline: [
                  "Give A0 to A4 dimensions: 841x1189, 594x841, 420x594, 297x420, 210x297 mm; halving rule and root-2 aspect ratio.",
                  "Borders: 20 mm left for filing, 10 mm top/right/bottom, drawn 0.7 mm thick.",
                  "Title block: bottom right 185 x 65 mm; cells for title, scale, drawn by, date, sheet no., projection symbol.",
                  "Projection symbol: truncated cone on its side; first-angle and third-angle variants drawn differently.",
                  "Lettering IS 9609: single-stroke, heights 3/5/7/10/14/20 mm, vertical or inclined 15 deg.",
                  "IS 696 line types: A continuous thick (visible), B continuous thin (dimensions), C short-dash hidden, D long-dash centre, F dash-dot cutting plane.",
                  "Mention A2/A1 full sheets, A3 short answer, and the first-year title block requirement.",
                ],
              },
              {
                q: "What is the size of an A3 drawing sheet? How many A3 sheets make one A2 sheet?",
                marks: 2,
              },
              {
                q: "Where is the title block placed and what are its minimum contents for a first-year drawing?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Dimensioning rules and scales",
            body: [
              "Dimensioning converts a geometry drawing into a manufacturing instruction. IS 696 lays down the rules: dimensions are placed on the drawing in such a way that they can be read from the bottom or the right-hand side; extension lines start about 1 mm clear of the object edge and extend 2-3 mm beyond the dimension line; dimension lines are thin continuous (0.3 mm) with solid arrowheads about 3 mm long touching the extension lines; numerals are placed above and parallel to the dimension line, never breaking it. Where space is tight, the numerals are placed outside with a leader line and arrow.",
              "Three rules settle most dimensioning disputes. First, dimensions should be placed outside the outline wherever possible so the visible outline remains unbroken. Second, the overall dimension is placed outside the chain of intermediate dimensions; smaller intermediate dimensions are placed closer to the outline, larger overall ones further away. Third, dimensions are never duplicated - a length appears once and only once, even if the same length could be read off another view. Hidden edges are not dimensioned if a visible view carries the dimension. Toleranced dimensions carry plus/minus limits above and below the dimension line.",
              "Scales bridge the gap between object size and sheet size. A full-size scale (1:1) draws a 100 mm object as 100 mm. A reducing scale (1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200, 1:500, 1:1000) draws the object smaller; an enlarging scale (2:1, 5:1, 10:1) draws it larger, used for small electronic parts. The representative fraction (RF) is the ratio of drawing length to actual length: a 1:50 scale has RF = 1/50. A scale is named by writing RF and the maximum length it can measure - for example 'Scale 1:5 (or RF 1/5) length 3 metres'.",
              "Three scale types appear in the syllabus. A plain scale measures two units (e.g. metres and decimetres) and is constructed by dividing a baseline into equal parts, with one main division subdivided. A diagonal scale uses the diagonal of a small rectangle to read a third unit (e.g. centimetres, tenths, hundredths); the diagonal principle divides a unit into ten equal parts by similar triangles. A vernier scale uses a movable auxiliary scale of n-1 main divisions stretched over n divisions of the main scale, giving the least count (1/n) of a main division - the same principle as a vernier caliper.",
              "Worked plain scale: construct a scale of 1:50 to read metres and decimetres, maximum 6 m. RF = 1/50; 6 m on the drawing = 6000/50 = 120 mm. Draw a 120 mm line, divide it into 6 equal parts of 20 mm each labelled 0, 1, 2, 3, 4, 5, 6 m from the right. Subdivide the first division (left of zero) into 10 equal parts of 2 mm each for decimetres. To read 3.7 m: take 3 main divisions plus 7 subdivisions = 3 m 7 dm.",
            ],
            bullets: [
              "Dimensions read from bottom or right; numerals above and parallel to the dimension line.",
              "Extension lines start 1 mm clear of the edge and project 2-3 mm past the dimension line.",
              "Arrowheads solid, about 3 mm long, touching extension lines; uniform throughout the drawing.",
              "Overall dimension outside the chain; intermediate dimensions nearer the outline; never duplicate a length.",
              "RF = drawing length / actual length; 1:50 scale has RF = 1/50.",
              "Reducing scales 1:2, 1:5, 1:10 ... 1:1000; enlarging 2:1, 5:1, 10:1 for small parts.",
              "Plain scale (two units), diagonal scale (three units via similar triangles), vernier scale (least count = 1/n).",
            ],
            table: {
              caption: "Scale types and construction principles.",
              headers: ["Scale type", "Units read", "Principle", "Example"],
              rows: [
                ["Plain", "2 (e.g. m, dm)", "Equal parts on a baseline, one subdivided", "1:50 reading metres and decimetres"],
                ["Diagonal", "3 (e.g. m, dm, cm)", "Diagonal of a rectangle divides a unit by 10", "1:100 reading m, dm, cm"],
                ["Vernier", "1 + vernier", "n-1 main divisions over n; least count 1/n", "least count 0.1 of a main division"],
                ["Enlarging", "1 (large)", "Drawing larger than actual; 2:1, 5:1, 10:1", "10:1 for a watch part"],
                ["Full size", "1", "1:1; drawing equals actual size", "small bracket 1:1"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Constructing a plain scale 1:50 (max 6 m, reads m and dm)",
              caption:
                "Each stage is a single construction step - reproduce it exactly in the exam.",
              stages: [
                { label: "Compute length: RF x 6 m = 120 mm", note: "drawing length on the sheet" },
                { label: "Draw 120 mm baseline", note: "thin continuous line" },
                { label: "Divide into 6 equal parts of 20 mm", note: "label 0 to 6 m from right" },
                { label: "Subdivide first division into 10", note: "2 mm parts for decimetres" },
                { label: "Read 3 m 7 dm at the third main + seventh sub", note: "mark with a small arrow" },
              ],
            },
            callout: {
              type: "tip",
              title: "Mark zero on the right, never the left",
              body: "Plain scales are read from zero towards the left, with main divisions labelled 0, 1, 2, ... from right to left, and the first subdivision (left of zero) carrying the smaller unit. Placing zero on the left and subdivisions on the right is a common first-year error that loses the construction marks even when the line length is correct.",
            },
            keyTerms: [
              { term: "Representative fraction (RF)", definition: "Ratio of drawing length to actual length; for a 1:50 scale, RF = 1/50." },
              { term: "Plain scale", definition: "A line divided into equal main parts and one subdivided part; reads two units (e.g. metres and decimetres)." },
              { term: "Diagonal scale", definition: "A scale using the diagonal of a small rectangle to divide a unit into ten; reads three units." },
              { term: "Vernier scale", definition: "An auxiliary scale of n-1 divisions over n main divisions giving least count equal to 1/n of a main division." },
              { term: "Least count", definition: "The smallest length a scale can read; for a vernier, 1/n of a main division." },
            ],
            examQuestions: [
              {
                q: "State the rules of dimensioning as per IS 696. Define representative fraction. Construct a plain scale of RF 1:50 to read metres and decimetres, maximum length 6 m, and mark on it a distance of 3 m 7 dm.",
                marks: 7,
                outline: [
                  "State dimensioning rules: read from bottom/right; extension lines 1 mm clear and 2-3 mm beyond; arrowheads 3 mm solid; no duplication; overall outside chain.",
                  "Define RF = drawing length / actual length; for 1:50, RF = 1/50.",
                  "Compute drawing length: 6 m = 6000 mm; 6000 / 50 = 120 mm baseline.",
                  "Draw 120 mm horizontal line; divide into 6 equal parts of 20 mm each; label 0 to 6 m from right.",
                  "Subdivide the first division (left of zero) into 10 equal parts of 2 mm for decimetres.",
                  "Mark 3 m 7 dm: take 3 main divisions (3 m) plus 7 subdivisions (7 dm).",
                  "Title the scale: 'Scale 1:50 (RF 1/50) reads metres and decimetres'.",
                ],
              },
              {
                q: "What is the least count of a vernier scale in which 9 main divisions equal 10 vernier divisions?",
                marks: 2,
              },
              {
                q: "Differentiate between a plain scale and a diagonal scale, giving one use of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Types of projections - orthographic, isometric, perspective",
            body: [
              "Projection is the process of representing a three-dimensional object on a two-dimensional sheet by dropping perpendiculars or rays from points on the object to a picture plane. The family splits by the direction of the rays. Parallel projection uses parallel rays and includes orthographic (rays perpendicular to the plane), oblique (rays inclined to one face) and axonometric - the all-three-axes-visible family that contains isometric. Perspective projection uses rays converging at a station point (the eye), so distant edges shorten - the projection used by architects and artists, not by manufacturing drawings.",
              "Orthographic projection is the workhorse of engineering drawings. An object is viewed along three mutually perpendicular directions - usually front, top and side - and what is seen is drawn flat on a plane. The front view (elevation) shows length and height; the top view (plan) shows length and width; the side view shows width and height. Hidden edges appear as short dashes; circular holes appear as circles in one view and as parallel lines in the others. Orthographic views are dimensioned individually and together convey the complete geometry of a part.",
              "Isometric projection is the most popular pictorial. The three principal axes are drawn at 120 deg to each other (30 deg to the horizontal on each side), with measurements along each axis shortened by the isometric scale of about 0.815 (cosine 30 deg). The result is a single view in which all three faces of a cube are visible and equally distorted. Circles in isometric become ellipses; for practical drawing, four-centre approximate ellipses are used inside the isometric square. Isometric drawings are quick to produce and read, which is why assemblies, piping layouts and exploded views are usually drawn isometric.",
              "Perspective projection mimics how the eye sees: rays converge at the station point, so parallel lines that recede from the viewer appear to converge at a vanishing point. One-point perspective (one vanishing point) suits a corridor or street view; two-point perspective suits a building corner; three-point perspective is for aerial or worm's-eye views. Perspective drawings are subjective rather than metric - a 10 mm and a 50 mm length along the same receding edge look different on the sheet - so they are not used for manufacture but for presentation, architecture and product design.",
              "Worked comparison: a cube of 30 mm edge. Orthographic: three squares 30 x 30 mm arranged in first-angle layout. Isometric: a hexagonal outline 30 mm on each visible edge, with the top face drawn as a rhombus. Oblique cavalier: front face square, depth axis at 45 deg drawn full size; oblique cabinet: depth axis at 45 deg drawn half size. Perspective: front face square, depth edges converging to a single vanishing point behind the cube. Each projection answers a different question - manufacture (orthographic), assembly (isometric), or presentation (perspective).",
            ],
            bullets: [
              "Projection: representation of a 3-D object on a 2-D sheet by perpendiculars or rays to a plane.",
              "Parallel projection: orthographic (rays perpendicular), oblique (rays inclined), axonometric (isometric, dimetric, trimetric).",
              "Perspective projection: rays converge at the station point; one, two or three vanishing points.",
              "Orthographic views: front (elevation) shows L x H, top (plan) shows L x W, side shows W x H.",
              "Isometric: axes at 120 deg (30 deg each side of horizontal); isometric scale 0.815; circles become ellipses.",
              "Oblique cavalier draws depth full size at 45 deg; cabinet draws depth at half size.",
              "Perspective is non-metric: distant edges shorten, used for presentation, not manufacture.",
            ],
            table: {
              caption: "Projection families and their use in engineering.",
              headers: ["Family", "Ray direction", "Best for"],
              rows: [
                ["Orthographic", "Parallel and perpendicular to plane", "Manufacturing and dimensioned drawings"],
                ["Oblique (cavalier)", "Parallel, depth axis at 45 deg full size", "Quick pictorials with one face true"],
                ["Oblique (cabinet)", "Parallel, depth axis at 45 deg half size", "Pictorials with realistic depth"],
                ["Isometric", "Parallel, three axes at 120 deg", "Assemblies, piping, exploded views"],
                ["Perspective", "Converging at station point", "Architecture and product presentation"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The projection family pyramid",
              caption:
                "Top tier is the broadest class; bottom tiers are the common engineering choices.",
              tiers: [
                { label: "Projection (perpendicular or converging rays)", note: "the broadest category" },
                { label: "Parallel projection (rays parallel)", note: "includes orthographic, oblique, axonometric" },
                { label: "Orthographic (rays perpendicular to plane)", note: "manufacturing drawings; first-angle or third-angle" },
                { label: "Isometric (axonometric, three axes at 120 deg)", note: "pictorial; the engineering favourite" },
              ],
            },
            callout: {
              type: "warning",
              title: "Isometric scale shortens, isometric drawing does not",
              body: "In isometric projection the true length is multiplied by 0.815 (cosine 30 deg) before drawing; in isometric drawing (the quicker variant) lengths are drawn full size along the axes, accepting a slightly larger pictorial. RGPV questions usually ask for isometric projection - apply the 0.815 scale, or you will draw an isometric drawing instead.",
            },
            keyTerms: [
              { term: "Orthographic projection", definition: "Parallel projection with rays perpendicular to the plane; produces front, top and side views." },
              { term: "Isometric projection", definition: "Axonometric projection with three axes at 120 deg; lengths shortened by the isometric scale 0.815." },
              { term: "Perspective projection", definition: "Projection with rays converging at a station point; non-metric, used for presentation." },
              { term: "Oblique projection", definition: "Parallel projection with rays inclined to the plane; cavalier full depth, cabinet half depth." },
              { term: "Picture plane", definition: "The two-dimensional surface on which the projection of the object is drawn." },
            ],
            examQuestions: [
              {
                q: "Classify projections. Distinguish between orthographic, isometric, oblique and perspective projection, stating the ray direction and one typical use of each. Draw a 30 mm cube in orthographic (first-angle), isometric and one-point perspective.",
                marks: 7,
                outline: [
                  "Define projection as the representation of a 3-D object on a 2-D plane by perpendiculars or rays.",
                  "Classify: parallel (orthographic, oblique, axonometric) versus converging (perspective).",
                  "Orthographic: rays perpendicular; front, top, side views; used for manufacture.",
                  "Isometric: axes at 120 deg; isometric scale 0.815; used for assemblies and piping.",
                  "Oblique: depth at 45 deg full (cavalier) or half (cabinet); used for quick pictorials.",
                  "Perspective: rays converge at a station point; one/two/three vanishing points; used for presentation.",
                  "Draw the 30 mm cube in three views: orthographic (three squares 30x30), isometric (hexagonal outline with 30 deg edges), perspective (front square with depth converging to a vanishing point).",
                ],
              },
              {
                q: "What is the isometric scale? Why is a length along an isometric axis shortened?",
                marks: 2,
              },
              {
                q: "State one situation where perspective projection is preferred over orthographic.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "First-angle and third-angle projection methods (BIS/SP-46)",
            body: [
              "Two reference planes define orthographic projection: the horizontal plane (HP) and the vertical plane (VP), meeting in a line called the ground line or XY line. The HP and VP divide space into four quadrants (or dihedral angles). First quadrant is above HP and in front of VP; second is above HP and behind VP; third is below HP and behind VP; fourth is below HP and in front of VP. Objects placed in the first quadrant are projected in first-angle method; objects in the third quadrant use third-angle method. BIS SP-46 and IS 15023 mandate first-angle as the standard Indian method.",
              "First-angle method: the object sits in the first quadrant above HP and in front of VP. The top view is projected down onto the HP, then the HP is rotated down 90 deg about XY to lie below the VP. So the top view lands below the front view in the drawing. The side view is projected onto a side plane (profile plane) which is then unfolded: the right-side view appears on the left of the front view, and the left-side view appears on the right. The mnemonic is 'view pushed to the opposite side' - the top view is pushed below, the right-side view is pushed left.",
              "Third-angle method: the object sits in the third quadrant below HP and behind VP. The top view is projected up onto the HP, then the HP is rotated up 90 deg about XY to lie above the VP. So the top view lands above the front view. The side view is projected onto the side plane and unfolded: the right-side view appears to the right of the front view. The mnemonic is 'view stays on the same side' - the top view stays above, the right-side view stays right. Third-angle is the standard in the USA and Canada.",
              "The projection symbol in the title block distinguishes the two methods. First-angle symbol: a truncated cone lying on its side, with the front view (a circle on the left) and the top view (a trapezium below) drawn in first-angle arrangement - top view below the front view. Third-angle symbol: the same truncated cone with the top view (a trapezium) drawn above the front view (a circle). The symbol is mandatory on every drawing sheet; it is the only way a reader in another country can know how to interpret the views.",
              "Worked layout: project a triangular prism (40 mm side, 60 mm long, axis perpendicular to VP) in first-angle. Draw the front view (an equilateral triangle 40 mm side) and the XY line above it. Project verticals down from each vertex of the triangle; on the top view (below XY) draw a 60 mm long rectangle with the prism length horizontal. The right-side view appears on the left of the front view, drawn by transferring widths from the top view. Title block carries the first-angle symbol.",
            ],
            bullets: [
              "Two reference planes: HP (horizontal) and VP (vertical), meeting in the XY line; four quadrants.",
              "First quadrant: above HP and in front of VP; third quadrant: below HP and behind VP.",
              "First-angle (BIS SP-46 Indian standard): top view below front, right-side view to the left.",
              "Third-angle (US/Canada): top view above front, right-side view to the right.",
              "Mnemonic: first-angle pushes view to the opposite side; third-angle keeps view on the same side.",
              "Projection symbol: truncated cone with front view + top view in their respective arrangement.",
              "IS 15023 and SP-46 make first-angle mandatory for Indian engineering drawings.",
            ],
            table: {
              caption: "First-angle versus third-angle projection.",
              headers: ["Aspect", "First-angle", "Third-angle"],
              rows: [
                ["Quadrant of object", "Above HP, in front of VP", "Below HP, behind VP"],
                ["Top view position", "Below the front view", "Above the front view"],
                ["Right-side view", "Left of the front view", "Right of the front view"],
                ["Mnemonic", "Push to opposite side", "Stay on the same side"],
                ["Standard region", "India, Europe (BIS, ISO)", "USA, Canada"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "First-angle versus third-angle view arrangement",
              caption:
                "Same object, two layouts - the projection symbol in the title block tells which.",
              left: {
                heading: "First-angle (BIS/SP-46)",
                items: [
                  "Top view below front view",
                  "Right-side view on the left of front",
                  "Left-side view on the right of front",
                  "Object in the first quadrant",
                  "Symbol: cone with trapezium below circle",
                ],
              },
              right: {
                heading: "Third-angle (US)",
                items: [
                  "Top view above front view",
                  "Right-side view on the right of front",
                  "Left-side view on the left of front",
                  "Object in the third quadrant",
                  "Symbol: cone with trapezium above circle",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Both views are correct - the layout is what differs",
              body: "Examiners sometimes ask 'draw the third-angle projection' of an object already drawn in first-angle. The geometry of each view is identical; only the position of the top and side views relative to the front view changes. Reposition the views and draw the third-angle symbol - do not redraw the views themselves from scratch.",
            },
            keyTerms: [
              { term: "HP and VP", definition: "The horizontal and vertical reference planes meeting in the XY line; divide space into four quadrants." },
              { term: "First-angle method", definition: "Object in the first quadrant; top view pushed below front, right-side view pushed left of front." },
              { term: "Third-angle method", definition: "Object in the third quadrant; top view stays above front, right-side view stays right." },
              { term: "Projection symbol", definition: "A truncated cone shown with its views in the method's arrangement; placed in the title block." },
              { term: "XY line", definition: "The intersection of HP and VP; the reference axis for orthographic projection." },
            ],
            examQuestions: [
              {
                q: "Explain the first-angle and third-angle methods of orthographic projection. State which method is followed as per BIS SP-46 and why. Draw the projection symbol for both methods and explain how the top and side views are arranged in each.",
                marks: 7,
                outline: [
                  "Define HP and VP meeting in XY; describe the four quadrants.",
                  "First-angle: object above HP in front of VP; top view rotated down to lie below front; right-side view to the left.",
                  "Third-angle: object below HP behind VP; top view rotated up to lie above front; right-side view to the right.",
                  "Mnemonic: first-angle pushes to opposite side; third-angle keeps on same side.",
                  "BIS SP-46 and IS 15023 mandate first-angle as the Indian standard.",
                  "Draw first-angle symbol: truncated cone with circle (front) and trapezium (top) below it.",
                  "Draw third-angle symbol: truncated cone with trapezium (top) above circle (front).",
                ],
              },
              {
                q: "In first-angle projection, where does the right-side view appear relative to the front view?",
                marks: 2,
              },
              {
                q: "Draw the first-angle projection symbol as placed in a title block.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.6",
            title: "Projection of points in the four quadrants",
            body: [
              "The simplest projection problem is a single point, and it is the foundation of every later unit. A point P is located by two distances: its distance above or below the HP, and its distance in front of or behind the VP. The sign convention: distances above HP and in front of VP are positive; below HP and behind VP are negative. The front view (or elevation) of P is the projection onto the VP, drawn above XY if P is above HP, below XY if P is below HP. The top view (or plan) is the projection onto the HP, drawn below XY if P is in front of VP, above XY if P is behind VP.",
              "Four quadrants give four cases. First quadrant (above HP, in front of VP): front view above XY, top view below XY. Second quadrant (above HP, behind VP): front view above XY, top view above XY - both views on the same side of XY. Third quadrant (below HP, behind VP): front view below XY, top view above XY. Fourth quadrant (below HP, in front of VP): front view below XY, top view below XY - again both on the same side. The first and third quadrants are 'opposite-side' cases; the second and fourth are 'same-side' cases and need a projector between the two views.",
              "The unification rule connects the two views: the front view and the top view of the same point always lie on a single projector perpendicular to XY. To draw the projections of a point, mark the front view at its distance above or below XY, draw a projector (a thin continuous perpendicular) down or up to the top view position, and mark the top view at its distance from XY on the correct side. The line joining the two views is always perpendicular to XY - this is the orthogonality rule that survives into lines, planes and solids.",
              "Worked example 1: project a point P 30 mm above HP and 20 mm in front of VP (first quadrant). Draw XY; mark the front view p' 30 mm above XY; draw a projector down from p' perpendicular to XY; mark the top view p 20 mm below XY on the projector. The two views p' and p are on opposite sides of XY. Worked example 2: project a point Q 40 mm above HP and 25 mm behind VP (second quadrant). Mark the front view q' 40 mm above XY; draw a projector up from q' (since the top view is also above XY); mark the top view q 25 mm above XY on the projector. Both views lie above XY in the second quadrant.",
              "Worked example 3 (third quadrant): point R 35 mm below HP and 30 mm behind VP. Front view r' 35 mm below XY; top view r 30 mm above XY - opposite sides. Worked example 4 (fourth quadrant): point S 30 mm below HP and 20 mm in front of VP. Front view s' 30 mm below XY; top view s 20 mm below XY - same side, both below. Always confirm the quadrant before drawing: 'above HP' means front view above XY; 'in front of VP' means top view below XY. Mistaking the quadrant is the single most common slip in Unit I.",
            ],
            bullets: [
              "A point is located by two distances: above/below HP and in front of/behind VP.",
              "Front view (elevation): projection on VP; above XY if above HP, below XY if below.",
              "Top view (plan): projection on HP; below XY if in front of VP, above XY if behind.",
              "First quadrant: front above, top below (opposite sides); the standard case for BIS drawings.",
              "Second quadrant: front above, top above (same side); both views above XY.",
              "Third quadrant: front below, top above (opposite sides); US standard.",
              "Projector rule: front and top views of a point lie on a line perpendicular to XY - the orthogonality rule.",
            ],
            table: {
              caption: "Position of the two views in the four quadrants.",
              headers: ["Quadrant", "Point location", "Front view", "Top view"],
              rows: [
                ["I", "Above HP, in front of VP", "Above XY", "Below XY"],
                ["II", "Above HP, behind VP", "Above XY", "Above XY"],
                ["III", "Below HP, behind VP", "Below XY", "Above XY"],
                ["IV", "Below HP, in front of VP", "Below XY", "Below XY"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Where the two views of a point land",
              caption:
                "Axes: above/below HP (vertical), in front of/behind VP (horizontal).",
              axes: { x: "In front of VP -> Behind VP", y: "Above HP -> Below HP" },
              quadrants: [
                { label: "First quadrant: front above, top below", note: "above HP, in front of VP - the standard case" },
                { label: "Second quadrant: both above XY", note: "above HP, behind VP - same side" },
                { label: "Fourth quadrant: both below XY", note: "below HP, in front of VP - same side" },
                { label: "Third quadrant: front below, top above", note: "below HP, behind VP - US standard" },
              ],
            },
            callout: {
              type: "warning",
              title: "Quadrant 2 and 4 views overlap",
              body: "In the second and fourth quadrants the front and top views both lie on the same side of XY. To separate them clearly, draw the projector between the two views as a thin continuous perpendicular line, and label the views with lowercase letters (p' for front, p for top). Examiners explicitly check that the two views are joined by a perpendicular projector.",
            },
            keyTerms: [
              { term: "Front view (elevation)", definition: "Projection of a point on the VP; drawn above XY if the point is above HP, below XY if below." },
              { term: "Top view (plan)", definition: "Projection of a point on the HP; drawn below XY if the point is in front of VP, above XY if behind." },
              { term: "Quadrant", definition: "One of the four dihedral angles formed by HP and VP; first is above HP and in front of VP." },
              { term: "Projector", definition: "A thin continuous perpendicular from XY joining the front and top views of the same point." },
              { term: "Same-side case", definition: "Quadrants II and IV where both views lie on the same side of XY." },
            ],
            examQuestions: [
              {
                q: "Explain the projection of a point in the four quadrants. Project the following points and state the quadrant of each: (i) A 30 mm above HP and 20 mm in front of VP, (ii) B 40 mm above HP and 25 mm behind VP, (iii) C 35 mm below HP and 30 mm behind VP, (iv) D 30 mm below HP and 20 mm in front of VP.",
                marks: 7,
                outline: [
                  "State the rule: front view above/below XY by the distance above/below HP; top view above/below XY by the distance behind/in front of VP.",
                  "A (first quadrant): front view a' 30 mm above XY; top view a 20 mm below XY on the same projector.",
                  "B (second quadrant): front view b' 40 mm above XY; top view b 25 mm above XY - both above XY.",
                  "C (third quadrant): front view c' 35 mm below XY; top view c 30 mm above XY - opposite sides.",
                  "D (fourth quadrant): front view d' 30 mm below XY; top view d 20 mm below XY - both below XY.",
                  "Draw a perpendicular projector between the two views of each point.",
                  "State that A and C are opposite-side cases; B and D are same-side cases.",
                ],
              },
              {
                q: "A point P is 25 mm above HP and its top view is 20 mm below XY. In which quadrant does it lie?",
                marks: 2,
              },
              {
                q: "State the orthogonality rule for the projections of a point.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },

    // ============================================================ UNIT II
    {
      number: 2,
      roman: "II",
      title: "Projections of Lines and Planes",
      summary:
        "Unit II extends point projection to straight lines and plane figures: a line parallel to one plane, a line inclined to one plane with true length and inclination, the harder case of a line inclined to both HP and VP by rotations and auxiliary plane methods, horizontal and vertical traces, and the projection of plane figures in every orientation up to true-shape determination.",
      chapter: {
        number: "02",
        title: "Projections of Lines and Planes",
        intro:
          "Unit II takes the orthogonality rule of Unit I and applies it to the next level of geometric objects - straight lines and plane figures. From a line parallel to a reference plane through the rotations and auxiliary plane methods for a line inclined to both HP and VP, ending with traces and the projection of regular polygonal and circular planes in every orientation.",
        inOneBreath:
          "A line is projected by joining the projections of its two end points; if the line is parallel to one plane its projection on that plane is true length and the other projection is parallel to XY; if inclined to one plane by theta the front view is shortened to true length times cosine theta and inclined at theta to XY while the top view remains parallel to XY; if a line is inclined to both HP by theta and VP by phi the apparent angles alpha and beta satisfy tan alpha = tan theta / cos phi and the dual, and the true length is found by the rotations method (rotate the front view to true length, transfer to the top view) or the auxiliary plane method (introduce an auxiliary plane perpendicular to one of the apparent views); the horizontal trace HT is the point where the line (or its extension) meets the HP, the vertical trace VT where it meets the VP; a plane parallel to a reference plane is projected in true shape on that plane and as a line on the other; a plane inclined to one plane and perpendicular to the other has one apparent view as a line at the true inclination and the other as a foreshortened figure; a plane inclined to both planes needs two steps: first make it perpendicular to one reference plane and inclined to the other, then tilt it; true shape is found on an auxiliary plane parallel to the plane.",
        sections: [
          {
            number: "2.1",
            title: "Projection of a straight line parallel to one reference plane",
            body: [
              "A straight line is projected by projecting its two end points separately and joining them. The simplest case is a line parallel to one of the reference planes. If a line AB is parallel to the HP, its top view (ab) is parallel to XY and is the true length of AB; its front view (a'b') is parallel to XY but shortened by the difference in heights of A and B - if A and B are at the same height above HP, the front view is also true length but parallel to XY. The line is visible in both views, but only the view on the plane to which the line is parallel shows true length.",
              "If a line AB is parallel to the VP, the situation is dual. The front view a'b' is the true length and is parallel to XY (drawn at the common distance in front of VP); the top view ab is parallel to XY but shows only the difference in the in-front distance. The student's rule of thumb: 'parallel to HP - true length in top view; parallel to VP - true length in front view.' A line parallel to both HP and VP is parallel to XY itself; both views are true length and parallel to XY.",
              "Worked example: a line AB 60 mm long is parallel to the HP and 30 mm above it; end A is 20 mm in front of VP and end B is 50 mm in front of VP. Draw XY; mark the front view a' at 30 mm above XY and at any convenient x-position; from a' draw the projector down; mark the top view a 20 mm below XY on this projector. Since the line is parallel to HP, its top view is true length 60 mm - draw a horizontal of 60 mm from a along the top-view level (20 mm below XY), ending at b; from b draw a projector up; the front view b' is at 30 mm above XY on this projector. Check: the front view a'b' is parallel to XY (horizontal) but is not true length (it shows the difference 50 - 20 = 30 mm in front-distance, not the 60 mm true length).",
              "The two views together carry full information about the line: true length is in the top view (60 mm), height above HP (30 mm, uniform) is the y-coordinate of a'b' above XY, in-front distances of the two ends (20 and 50 mm below XY) come from the top view. Reverse this for a line parallel to VP. The skill is to read the two views as a single three-dimensional object: each view supplies what the other lacks.",
              "Common slips: drawing the front view of a HP-parallel line as true length (it is parallel to XY but shortened); forgetting that the projector between corresponding ends is perpendicular to XY; placing both ends at the same x when the line is inclined in plan. Always confirm the orientation first: which plane is the line parallel to, which end is where, and where does the true length appear. Then transfer the other end's coordinates via projectors perpendicular to XY.",
            ],
            bullets: [
              "Project a line by projecting both end points and joining - orthogonality rule still holds.",
              "Line parallel to HP: top view is true length and parallel to XY; front view parallel to XY but shortened.",
              "Line parallel to VP: front view is true length and parallel to XY; top view parallel to XY but shortened.",
              "Line parallel to both planes: parallel to XY; both views true length.",
              "Heights (above HP) read in the front view; in-front distances (from VP) read in the top view.",
              "Projectors between corresponding ends of a line are perpendicular to XY.",
              "Worked: AB 60 mm, 30 mm above HP, A 20 mm and B 50 mm in front of VP -> top view is 60 mm true length.",
            ],
            table: {
              caption: "What each view shows for a line parallel to one plane.",
              headers: ["Line orientation", "Front view", "Top view"],
              rows: [
                ["Parallel to HP", "parallel to XY, shortened", "parallel to XY, true length"],
                ["Parallel to VP", "parallel to XY, true length", "parallel to XY, shortened"],
                ["Parallel to both HP and VP", "true length, parallel to XY", "true length, parallel to XY"],
                ["Parallel to profile plane", "not true length", "not true length"],
                ["Inclined to HP only", "inclined, shortened", "parallel to XY, shortened"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Drawing the projections of AB parallel to HP",
              caption:
                "Five steps from XY to the complete two-view drawing of the line.",
              steps: [
                { label: "Draw XY and locate a' 30 mm above XY", note: "front view of end A" },
                { label: "Project down to a 20 mm below XY", note: "top view of end A" },
                { label: "Draw top view ab = 60 mm horizontal", note: "true length, parallel to XY" },
                { label: "Project up from b to b' on the 30 mm level", note: "front view of end B" },
                { label: "Join a'b' and ab", note: "front view shortened, top view true length" },
              ],
            },
            callout: {
              type: "tip",
              title: "Name views with lowercase primes",
              body: "Use lowercase letters for top views (a, b) and lowercase primes for front views (a', b'). This is the SP-46 convention and signals to the examiner that you know the difference between the two views. Mixed naming (A and a, A and A') is a small loss of marks that adds up over a paper.",
            },
            keyTerms: [
              { term: "True length", definition: "The actual length of a line; seen in the view on the plane to which the line is parallel." },
              { term: "Apparent length", definition: "The foreshortened length seen in a view on a plane to which the line is not parallel." },
              { term: "Parallel-to-HP line", definition: "A line whose top view is true length and parallel to XY; front view is parallel to XY but shortened." },
              { term: "Projector", definition: "A thin perpendicular from XY joining the front and top views of the same point." },
            ],
            examQuestions: [
              {
                q: "A line AB 60 mm long is parallel to the HP and 30 mm above it. End A is 20 mm in front of the VP and end B is 50 mm in front of the VP. Draw the projections of AB and state which view shows the true length.",
                marks: 7,
                outline: [
                  "Draw XY; mark a' 30 mm above XY at a chosen x-position.",
                  "Project down to a 20 mm below XY on the perpendicular.",
                  "Since AB is parallel to HP, the top view is true length 60 mm - draw a horizontal 60 mm from a.",
                  "End B is 50 mm in front of VP; b is 50 mm below XY on the same level as a (since the line is at constant height).",
                  "Project up from b to b' on the 30 mm above XY level.",
                  "Join a'b' (front view, parallel to XY, shortened) and ab (top view, true length).",
                  "State that the top view shows the true length of 60 mm because AB is parallel to HP.",
                ],
              },
              {
                q: "If a line is parallel to both HP and VP, what is the position of its two views relative to XY?",
                marks: 2,
              },
              {
                q: "A line CD 50 mm long is parallel to VP and 25 mm in front of it. Where will you find the true length?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Line inclined to one plane - true length and inclination",
            body: [
              "The next case is a line inclined to one reference plane and parallel to the other. Suppose a line AB of true length L is inclined at theta to the HP and parallel to the VP. Since AB is parallel to VP, its front view shows the true length L and is inclined at theta to XY. Its top view is parallel to XY (because the line is parallel to VP) but is shortened to L times cosine theta. The angle theta appears in the front view; the top view is a horizontal of reduced length.",
              "Dually, if AB is inclined at phi to the VP and parallel to the HP, its top view shows the true length L and is inclined at phi to XY; the front view is parallel to XY and shortened to L times cosine phi. The inclination to one plane appears only in the view on that plane's perpendicular (the elevation shows inclination to HP). This is the key worked case: the line has a true length, one apparent inclination, and one foreshortened parallel view.",
              "Worked example: a line AB 70 mm long is inclined at 30 deg to the HP and parallel to the VP; one end A is 20 mm above HP and 30 mm in front of VP. Draw XY; mark a' 20 mm above XY at a chosen x-position. The front view shows true length 70 mm at 30 deg to XY - draw a line from a' of length 70 mm at 30 deg above the horizontal (since the line slopes upward, the other end B is higher). The front view b' lands 70 cosine 30 = 60.6 mm horizontally and 70 sine 30 = 35 mm vertically from a', so b' is at (60.6, 55) mm relative to a'. Both ends are at 30 mm in front of VP (line parallel to VP), so the top view is parallel to XY 30 mm below; mark a 30 mm below XY on the projector from a', and b 30 mm below XY on the projector from b'.",
              "The top view ab has length 60.6 mm = 70 cosine 30, confirming the foreshortening. Verify by measuring: the front view should be exactly 70 mm at 30 deg, the top view 60.6 mm parallel to XY, and projectors from a' to a and b' to b perpendicular to XY. The inclination 30 deg appears only in the front view because the line is inclined to HP; the top view, since the line is parallel to VP, is horizontal and shows no inclination.",
              "If the data is reversed (line inclined to VP, parallel to HP) the roles of the two views swap. A common RGPV question gives both end heights and in-front distances and asks for true length and inclination: solve by Pythagoras on the two views. True length squared = (horizontal difference in top view) squared + (vertical difference in front view) squared; inclination to HP has tangent equal to vertical difference divided by horizontal difference in the top view; inclination to VP has tangent equal to in-front difference divided by horizontal difference in the front view.",
            ],
            bullets: [
              "Line inclined theta to HP and parallel to VP: front view true length at theta to XY; top view parallel to XY, L cosine theta.",
              "Line inclined phi to VP and parallel to HP: top view true length at phi to XY; front view parallel to XY, L cosine phi.",
              "Inclination appears only in the view on the plane to which the line is NOT parallel.",
              "Foreshortening factor cosine theta reduces the parallel view; the true length view is unchanged.",
              "Projectors between corresponding ends remain perpendicular to XY in all cases.",
              "Reverse problem: from the two views, find true length and inclinations by Pythagoras and arctangent.",
              "Worked: AB 70 mm at 30 deg to HP, parallel to VP -> front view 70 mm at 30 deg, top view 60.6 mm horizontal.",
            ],
            table: {
              caption: "Line inclined to one plane and parallel to the other.",
              headers: ["Case", "Front view", "Top view", "Inclination shown in"],
              rows: [
                ["Inclined theta to HP, parallel to VP", "true length L at theta to XY", "L cos theta, parallel to XY", "front view"],
                ["Inclined phi to VP, parallel to HP", "L cos phi, parallel to XY", "true length L at phi to XY", "top view"],
                ["Worked 70 mm at 30 deg to HP", "70 mm at 30 deg", "60.6 mm horizontal", "front view"],
                ["Worked 50 mm at 45 deg to VP", "35.4 mm horizontal", "50 mm at 45 deg", "top view"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Two inclinations, two views",
              caption:
                "Which view shows the inclination depends on which plane the line is parallel to.",
              start: "Line AB true length L",
              branches: [
                { label: "parallel to VP, inclined theta to HP", outcome: "front view true length at theta to XY; top view L cos theta parallel to XY", good: true },
                { label: "parallel to HP, inclined phi to VP", outcome: "top view true length at phi to XY; front view L cos phi parallel to XY", good: true },
                { label: "inclined to both planes", outcome: "neither view shows true length - use Unit 2.3 rotations method", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Carry four significant figures in cosine",
              body: "Cosine 30 deg is 0.866, cosine 45 deg is 0.707, cosine 60 deg is 0.5. Memorise these three and the corresponding sines. Most RGPV inclination questions use 30, 45 or 60 deg precisely because they give clean foreshortenings. Computing cosine 30 as 0.85 (a common rounding) makes a 70 mm line 59.5 instead of 60.6 mm - enough to fail a measurement check.",
            },
            keyTerms: [
              { term: "Inclination to HP (theta)", definition: "Angle the line makes with the HP; appears in the front view if the line is parallel to VP." },
              { term: "Inclination to VP (phi)", definition: "Angle the line makes with the VP; appears in the top view if the line is parallel to HP." },
              { term: "Foreshortening factor", definition: "cosine of the inclination; reduces the apparent length in the parallel-to-XY view." },
              { term: "True length view", definition: "The view on the plane to which the line is parallel; shows the actual length." },
            ],
            examQuestions: [
              {
                q: "A line AB 70 mm long is inclined at 30 deg to the HP and parallel to the VP. End A is 20 mm above the HP and 30 mm in front of the VP. Draw the projections of AB and verify the lengths of both views by calculation.",
                marks: 7,
                outline: [
                  "Draw XY; mark a' 20 mm above XY at a chosen x-position.",
                  "From a' draw the front view at 30 deg to XY, length 70 mm; b' lies 60.6 mm horizontally and 35 mm vertically from a'.",
                  "Project a' down to a 30 mm below XY (in-front distance).",
                  "Since AB is parallel to VP, both ends are at 30 mm in front; b is on the projector from b' at 30 mm below XY.",
                  "Join a'b' (true length 70 mm at 30 deg) and ab (parallel to XY, 60.6 mm long).",
                  "Verify: top view length = 70 cosine 30 = 60.6 mm; vertical rise = 70 sine 30 = 35 mm.",
                  "State that the inclination 30 deg appears in the front view because AB is parallel to VP.",
                ],
              },
              {
                q: "A line CD has its front view 50 mm parallel to XY and top view 60 mm at 45 deg to XY. Find the true length and the inclination to the VP.",
                marks: 2,
              },
              {
                q: "State the relation between the apparent length and the true length of a line inclined at theta to a reference plane.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Line inclined to both HP and VP - rotations and auxiliary methods",
            body: [
              "When a line is inclined to both HP and VP, neither view shows the true length. The front view is shortened by the VP inclination and the top view by the HP inclination, and the angles the views make with XY (called alpha for the front view and beta for the top view) are the apparent inclinations, not the true inclinations theta (to HP) and phi (to VP). Solving the problem requires either the rotations method or the auxiliary plane method - both are standard RGPV 7-mark material.",
              "Rotations method (also called the trapezoidal method). Given theta, phi, and the height of one end above HP and the in-front distance of one end from VP, the construction proceeds in two stages. Stage 1: assume the line is first parallel to VP (so its front view is true length L at theta to XY); draw the front view a'b1' as a line of length L at theta to XY, with a' at the given height above HP. Stage 2: rotate the line about its end A until it is also inclined phi to VP; this rotation brings the front view to lie at angle alpha to XY (alpha > theta) and the top view to lie at angle beta to XY (beta > phi). Transfer the top view end b1 to its rotated position b using the in-front distance; the final top view ab has the true orientation beta.",
              "Auxiliary plane method. Introduce an auxiliary plane AVP perpendicular to HP and parallel to the line AB (so that the line projects as true length on the AVP). The auxiliary projection of AB on the AVP gives the true length and the inclination theta to HP directly. Then introduce a second auxiliary plane AIP perpendicular to VP and parallel to AB to get the inclination phi to VP. The method is more systematic than rotations and is preferred when both inclinations are required; it uses two auxiliary reference lines X1Y1 and X2Y2 perpendicular to the relevant true-length view.",
              "Worked example: a line AB 60 mm long has its end A 20 mm above HP and 30 mm in front of VP; the line is inclined at 30 deg to HP and 45 deg to VP. Draw the projections using the rotations method. Stage 1: assume AB is parallel to VP and inclined 30 deg to HP. Mark a' 20 mm above XY; from a' draw a'b1' of length 60 mm at 30 deg above XY. Project a' down to a 30 mm below XY; project b1' down to b1 on the same level as a (since stage 1 line is parallel to VP, all points are at the same in-front distance, 30 mm). Stage 2: the end B must also be inclined 45 deg to VP, so it moves on a circular arc of radius equal to its in-front distance 30 mm centred at a; the locus of b in plan is a line at 45 deg from a. The intersection of the locus (line at 45 deg from a) with the projector from b1 (transferred to true inclination) gives b. Join ab for the final top view.",
              "The relation between true and apparent angles: tan alpha = tan theta / cos phi, tan beta = tan phi / cos theta, and sin theta = (sin alpha) (cos beta). These relations let you check your drawing arithmetically. For theta = 30 deg and phi = 45 deg, tan alpha = tan 30 / cos 45 = 0.577 / 0.707 = 0.816, so alpha is about 39.2 deg; tan beta = tan 45 / cos 30 = 1 / 0.866 = 1.155, so beta is about 49.1 deg. Verify by measuring alpha and beta on your finished drawing.",
            ],
            bullets: [
              "Line inclined to both planes: neither view shows true length; apparent angles alpha (front) and beta (top).",
              "True inclinations: theta to HP, phi to VP; apparent angles always larger (alpha > theta, beta > phi).",
              "Rotations method: assume line parallel to VP at theta, then rotate about one end to satisfy phi.",
              "Auxiliary plane method: introduce AVP parallel to AB for true length and theta; AIP for phi.",
              "tan alpha = tan theta / cos phi; tan beta = tan phi / cos theta; use to verify the drawing.",
              "Worked: AB 60 mm, theta = 30 deg, phi = 45 deg gives alpha about 39.2 deg, beta about 49.1 deg.",
              "Stage 1 produces true-length front view at theta; stage 2 rotates to satisfy phi.",
            ],
            table: {
              caption: "Relation between true and apparent inclinations (worked example).",
              headers: ["Quantity", "Formula", "Value"],
              rows: [
                ["theta (true, HP)", "given", "30 deg"],
                ["phi (true, VP)", "given", "45 deg"],
                ["alpha (apparent, front)", "arctan(tan theta / cos phi)", "about 39.2 deg"],
                ["beta (apparent, top)", "arctan(tan phi / cos theta)", "about 49.1 deg"],
                ["True length", "given", "60 mm"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Rotations method - two stages to the final projections",
              caption:
                "Each stage fixes one inclination; stage 2 transfers the in-front distance.",
              stages: [
                { label: "Stage 1: a'b1' = L at theta to XY", note: "assume line parallel to VP" },
                { label: "Project down to top view b1", note: "in-front distance uniform = 30 mm" },
                { label: "Locus of B at phi to VP", note: "line at phi from a in top view" },
                { label: "Transfer end B along arc", note: "projector from b1 intersected with locus" },
                { label: "Final top view ab and front view a'b'", note: "alpha and beta are the apparent angles" },
              ],
            },
            callout: {
              type: "warning",
              title: "Apparent angles are always larger than true",
              body: "If your drawing shows the front view at 30 deg when theta = 30 deg, you have drawn the stage-1 case (line parallel to VP), not the final case (inclined to both planes). The final front view angle alpha must be greater than theta. Always check: alpha > theta and beta > phi; if not, redo stage 2.",
            },
            keyTerms: [
              { term: "True inclination theta", definition: "The actual angle the line makes with the HP; never equal to the front view angle when the line is inclined to both planes." },
              { term: "True inclination phi", definition: "The actual angle the line makes with the VP; never equal to the top view angle when the line is inclined to both planes." },
              { term: "Apparent angle alpha", definition: "Angle the front view makes with XY; greater than theta for a line inclined to both planes." },
              { term: "Apparent angle beta", definition: "Angle the top view makes with XY; greater than phi for a line inclined to both planes." },
              { term: "Auxiliary plane", definition: "An extra reference plane introduced perpendicular to HP or VP and parallel to the line, to read true length directly." },
            ],
            examQuestions: [
              {
                q: "A line AB 60 mm long has end A 20 mm above HP and 30 mm in front of VP. The line is inclined at 30 deg to the HP and 45 deg to the VP. Draw the projections of AB using the rotations method and verify the apparent angles by calculation.",
                marks: 7,
                outline: [
                  "Stage 1: assume AB parallel to VP, inclined 30 deg to HP. Mark a' 20 mm above XY.",
                  "From a' draw a'b1' of length 60 mm at 30 deg to XY.",
                  "Project a' to a 30 mm below XY; project b1' to b1 on the same 30 mm level (line parallel to VP).",
                  "Stage 2: end B must also be inclined 45 deg to VP. From a draw a locus line at 45 deg (the path of B in plan as the in-front distance varies).",
                  "Project b1 down to a perpendicular through b1; transfer the in-front distance of b1 (30 mm) along an arc to meet the locus at b.",
                  "Join ab (final top view at beta to XY) and a'b' (final front view at alpha to XY).",
                  "Verify: tan alpha = tan 30 / cos 45 = 0.816 -> alpha about 39.2 deg; tan beta = tan 45 / cos 30 = 1.155 -> beta about 49.1 deg.",
                ],
              },
              {
                q: "State the relation between the true and apparent inclinations of a line inclined to both HP and VP.",
                marks: 2,
              },
              {
                q: "What is an auxiliary plane? How is it used to find the true length of a line?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Traces of a line - HT and VT",
            body: [
              "The traces of a line are the points where the line (or its extension) meets the two reference planes. The horizontal trace (HT) is the point where the line meets the HP - in plan it lies on the top view, in elevation it lies on XY. The vertical trace (VT) is the point where the line meets the VP - in elevation it lies on the front view, in plan it lies on XY. A line that is parallel to a plane has no trace on that plane: a line parallel to HP has no HT; a line parallel to VP has no VT.",
              "Construction procedure: given the two projections of a line AB, extend the front view a'b' if necessary to meet XY at a point h' (the front view of the HT); project h' down to the top view on the line ab (extended if needed); the meeting point is h, the horizontal trace. Dually, extend the top view ab to meet XY at v; project v up to the front view on a'b' (extended if needed); the meeting point is v', the vertical trace. Each trace lies on XY in one view and on the line (extended) in the other view.",
              "Worked example: a line AB has end A 30 mm above HP and 20 mm in front of VP, end B 10 mm above HP and 60 mm in front of VP. To find the HT, extend the front view a'b' to meet XY at h'; project down to the top view to find h on the line ab extended. The HT lies below XY in the top view at the line's intersection with HP. To find the VT, extend the top view ab to meet XY at v; project up to the front view to find v' on the line a'b' extended. The VT lies above XY in the front view at the line's intersection with VP.",
              "Sign of the traces reveals the line's behaviour. If both HT and VT are on the same side of the line (between A and B extended in the same direction), the line passes through the first quadrant only. If the HT and VT lie on opposite sides, the line passes through one of the other quadrants. A line passing through the second quadrant has its HT behind VP and its VT above HP - both traces 'behind' the line in their respective views. Traces are the simplest way to determine the quadrant in which a line lies.",
              "Traces also give the inclinations: the angle the front view makes with XY at the HT is the inclination theta to HP; the angle the top view makes with XY at the VT is the inclination phi to VP. So the traces are not just auxiliary points - they are the locus from which both inclinations can be measured. A line with one trace parallel to XY in one view has no inclination to the corresponding plane (the line is parallel to that plane).",
            ],
            bullets: [
              "Horizontal trace (HT): where the line meets the HP; lies on XY in front view, on the line (extended) in top view.",
              "Vertical trace (VT): where the line meets the VP; lies on XY in top view, on the line (extended) in front view.",
              "Line parallel to HP has no HT; line parallel to VP has no VT.",
              "To find HT: extend front view to meet XY at h', project down to top view to find h.",
              "To find VT: extend top view to meet XY at v, project up to front view to find v'.",
              "Same-side HT and VT: line passes through first quadrant; opposite sides: another quadrant.",
              "Inclination theta is read at the HT; inclination phi at the VT.",
            ],
            table: {
              caption: "Traces of a line in the four quadrants.",
              headers: ["Quadrant of line", "HT location", "VT location"],
              rows: [
                ["I", "below XY in top view (in front of VP)", "above XY in front view (above HP)"],
                ["II", "above XY in top view (behind VP)", "above XY in front view (above HP)"],
                ["III", "above XY in top view (behind VP)", "below XY in front view (below HP)"],
                ["IV", "below XY in top view (in front of VP)", "below XY in front view (below HP)"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Construction of HT and VT in four steps",
              caption:
                "Each arrow is one construction step; the cycle closes with the two traces marked.",
              steps: [
                { label: "Extend front view to meet XY at h'", note: "front view of HT" },
                { label: "Project h' down to top view at h", note: "HT on the line extended" },
                { label: "Extend top view to meet XY at v", note: "top view of VT" },
                { label: "Project v up to front view at v'", note: "VT on the line extended" },
                { label: "Read theta at h and phi at v", note: "inclinations to HP and VP" },
              ],
            },
            callout: {
              type: "tip",
              title: "Extend with a thin dashed line",
              body: "When extending a view to find a trace, draw the extension as a thin continuous or short-dashed line beyond the end of the line, not as a thick visible line. The extension is construction, not part of the line itself. Mark HT and VT with filled circles and label them h, h', v, v' to make the construction legible at a glance.",
            },
            keyTerms: [
              { term: "Horizontal trace (HT)", definition: "Point where the line (or its extension) meets the HP; lies on XY in front view, on the line in top view." },
              { term: "Vertical trace (VT)", definition: "Point where the line (or its extension) meets the VP; lies on XY in top view, on the line in front view." },
              { term: "Trace rule", definition: "A line parallel to a plane has no trace on that plane." },
              { term: "Inclination from trace", definition: "Angle the front view makes with XY at the HT is theta; the top view makes with XY at the VT is phi." },
            ],
            examQuestions: [
              {
                q: "Define the horizontal and vertical traces of a straight line. State the rules for lines parallel to a reference plane. A line AB has end A 30 mm above HP and 20 mm in front of VP, end B 10 mm above HP and 60 mm in front of VP. Draw the projections and determine the HT and VT.",
                marks: 7,
                outline: [
                  "Define HT as the point where the line meets HP; VT where it meets VP.",
                  "Rule: a line parallel to HP has no HT; parallel to VP has no VT.",
                  "Draw XY; mark a' 30 mm above XY and a 20 mm below; b' 10 mm above and b 60 mm below.",
                  "Join a'b' (front view) and ab (top view); both views are inclined to XY.",
                  "Extend a'b' to meet XY at h'; project down to h on the top view extended - HT located.",
                  "Extend ab to meet XY at v; project up to v' on the front view extended - VT located.",
                  "State the quadrant of the line from the trace positions; both ends above HP and in front of VP, so first quadrant.",
                ],
              },
              {
                q: "A line is parallel to the HP. Will it have an HT? Justify.",
                marks: 2,
              },
              {
                q: "How do you determine the inclination of a line to the HP from its traces?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Projection of planes - parallel, perpendicular, inclined to one plane",
            body: [
              "A plane figure - a regular polygon or a circle - is projected by projecting enough points on its boundary to fix its outline. Three orientation cases appear in BT-105. Case 1: the plane is parallel to one reference plane. The projection on that plane is the true shape of the figure; the projection on the other plane is a line parallel to XY of length equal to the figure's maximum dimension parallel to XY. A square parallel to HP projects as a true square in the top view and as a horizontal line in the front view.",
              "Case 2: the plane is perpendicular to one reference plane and inclined to the other. The projection on the plane to which it is perpendicular is a line (the 'edge view'); the projection on the other plane is a foreshortened figure. If the plane is perpendicular to HP and inclined theta to VP, the top view is a line at theta to XY, and the front view is a foreshortened rectangle (or polygon) whose shorter dimension is the figure's depth times cosine theta. The angle theta appears in the top view (the edge view).",
              "Case 3: the plane is inclined to both reference planes. The construction is two-stage. Stage 1: assume the plane is first perpendicular to one reference plane (say HP) and inclined to the other (VP) at theta; draw the edge view in the top view as a line at theta to XY, and the foreshortened front view. Stage 2: tilt the plane about a horizontal axis until it is also inclined to the HP at phi; this changes the front view into a further foreshortened figure and the top view into a different foreshortened figure. The final shape in either view is determined by transferring corner distances via projectors.",
              "Worked example (case 2): a square lamina of 40 mm side is perpendicular to HP and inclined at 30 deg to VP. Draw XY; the top view is the edge view - a line of 40 mm at 30 deg to XY, with one end at any chosen x. The front view is a rectangle: height equal to the side (40 mm, since the perpendicular edge is vertical), and width 40 cosine 30 = 34.6 mm. The 30 deg inclination is shown only in the top view (the edge view). The front view shows the foreshortened width but not the inclination directly.",
              "Worked example (case 1, circle): a circular lamina of 50 mm diameter is parallel to HP and 25 mm above it. The top view is a true circle 50 mm diameter (drawn at 25 mm below XY in plan); the front view is a horizontal line 50 mm long at 25 mm above XY. A circular lamina inclined to a reference plane projects as an ellipse on that plane - a fact used in isometric drawing where circles on inclined faces become ellipses.",
              "True shape determination. If a plane is inclined to both reference planes, neither view shows true shape. Introduce an auxiliary plane parallel to the lamina and project the corners onto it; the auxiliary projection shows the true shape. The auxiliary reference line X1Y1 is drawn parallel to the edge view of the plane in one of the views; corner distances perpendicular to X1Y1 are transferred to the auxiliary projection. This is the same auxiliary plane method used for lines in section 2.3.",
            ],
            bullets: [
              "Plane parallel to one plane: true shape on that plane, line on the other.",
              "Plane perpendicular to one plane and inclined theta to the other: edge view (line at theta) on the first, foreshortened figure on the other.",
              "Plane inclined to both planes: two-stage construction (first perpendicular to one, then tilt).",
              "Circle parallel to HP -> true circle in top, horizontal line in front; inclined -> ellipse.",
              "Square perpendicular to HP, 30 deg to VP -> edge view 40 mm at 30 deg; front rectangle 40 x 34.6 mm.",
              "True shape on an auxiliary plane parallel to the lamina; X1Y1 parallel to the edge view.",
              "Foreshortening factor cosine of the inclination to the relevant plane.",
            ],
            table: {
              caption: "Plane orientations and what each view shows.",
              headers: ["Orientation", "Front view", "Top view"],
              rows: [
                ["Parallel to HP", "line parallel to XY", "true shape"],
                ["Parallel to VP", "true shape", "line parallel to XY"],
                ["Perp. to HP, inclined theta to VP", "foreshortened figure", "edge view at theta to XY"],
                ["Perp. to VP, inclined theta to HP", "edge view at theta to XY", "foreshortened figure"],
                ["Inclined to both planes", "foreshortened", "foreshortened; true shape only on auxiliary plane"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Plane orientation ladder",
              caption:
                "Start from the simplest orientation; climb only when the question demands.",
              tiers: [
                { label: "Inclined to both planes (two-stage, auxiliary plane for true shape)", note: "hardest case; full 7-mark problem" },
                { label: "Perpendicular to one plane, inclined theta to other", note: "edge view + foreshortened figure" },
                { label: "Perpendicular to one plane, parallel to other", note: "edge view + true shape" },
                { label: "Parallel to one plane", note: "true shape + line; the base case" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the edge view first",
              body: "For a plane inclined to a reference plane, the edge view (a line) is the easiest to draw and reveals the inclination directly. Always draw the edge view first in the plane to which the lamina is perpendicular, then project the corners to the foreshortened view via perpendicular projectors. This order avoids the common error of trying to draw the foreshortened figure freehand.",
            },
            keyTerms: [
              { term: "Lamina", definition: "A plane figure of negligible thickness - a regular polygon or circle treated as a two-dimensional surface." },
              { term: "Edge view", definition: "The projection of a plane on a reference plane to which it is perpendicular; appears as a line." },
              { term: "True shape", definition: "The actual shape of the lamina; seen in the view on a plane parallel to the lamina, or on an auxiliary plane." },
              { term: "Auxiliary plane", definition: "An extra reference plane introduced parallel to the lamina to obtain the true shape." },
            ],
            examQuestions: [
              {
                q: "A square lamina of 40 mm side is perpendicular to the HP and inclined at 30 deg to the VP. Draw its projections. Also draw the projections of a circular lamina of 50 mm diameter parallel to the HP and 25 mm above it, and state which view shows the true shape in each case.",
                marks: 7,
                outline: [
                  "Square lamina: top view is the edge view - a 40 mm line at 30 deg to XY.",
                  "Front view is a rectangle: vertical 40 mm (the perpendicular edge), horizontal 40 cosine 30 = 34.6 mm.",
                  "Project corners of the edge view up to the front view via perpendicular projectors.",
                  "True shape of the square is seen on an auxiliary plane parallel to the lamina.",
                  "Circular lamina parallel to HP: top view is a true circle 50 mm diameter at 25 mm below XY.",
                  "Front view is a horizontal line 50 mm long at 25 mm above XY.",
                  "State that the top view shows the true circle because the lamina is parallel to HP; in the square case, neither view shows the true square.",
                ],
              },
              {
                q: "A plane figure is perpendicular to the VP. What will its front view show?",
                marks: 2,
              },
              {
                q: "How is the true shape of an oblique plane determined using an auxiliary plane?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.6",
            title: "Plane inclined to both reference planes; true shape",
            body: [
              "The hardest case in Unit II is a plane figure inclined to both HP and VP. The two-stage construction makes it tractable. Stage 1: assume the lamina is first perpendicular to one reference plane (conventionally HP) and inclined at theta to the other (VP). Draw the edge view in the top view as a line of the lamina's length at theta to XY. Draw the corresponding foreshortened front view as a rectangle (or polygon) with one dimension equal to the lamina's other dimension and the foreshortened dimension equal to (length times cosine theta).",
              "Stage 2: the lamina is now tilted about a horizontal axis so that it is also inclined at phi to the HP. In the front view, this tilt appears as a rotation of the foreshortened figure by phi about a horizontal axis. The top view changes correspondingly: the corner that was on the edge view now moves to a position determined by the in-front distance which becomes (height times sine phi). The final front view is a parallelogram or further foreshortened polygon; the final top view is a different foreshortened figure.",
              "Worked example: a 30 mm x 50 mm rectangular lamina is inclined at 30 deg to the VP and 45 deg to the HP; one of its shorter edges (30 mm) is parallel to HP and one corner of that edge is in the VP. Stage 1 (perpendicular to HP, inclined 30 deg to VP): draw the edge view in the top view as a line of 50 mm (the longer edge) at 30 deg to XY. The front view shows the 30 mm dimension vertical and 50 cosine 30 = 43.3 mm horizontal - a 30 x 43.3 mm rectangle. Stage 2 (tilt 45 deg about the 30 mm edge which stays in the VP): the front view rotates 45 deg about its left vertical edge; the top view is constructed by transferring the corner in-front distances.",
              "True shape determination: introduce an auxiliary plane parallel to the lamina. Draw X1Y1 parallel to the edge view of the lamina in one view (say the top view's edge view from stage 1); from each corner, measure its perpendicular distance to X1Y1 and transfer this distance to the auxiliary projection on the same side of X1Y1. The auxiliary projection shows the lamina in true shape - a 30 x 50 mm rectangle. The auxiliary plane method is the most reliable way to obtain true shape when both principal views are foreshortened.",
              "Common slips: trying to draw the final front view of an oblique lamina directly without the two-stage construction (the angles become guesswork); forgetting that the second stage rotates the figure about a specific edge (the one that stays in or parallel to a reference plane); misplacing the auxiliary reference line (it must be parallel to the edge view, not perpendicular). Practise two worked examples - one square and one rectangle - before the exam; the construction pattern becomes mechanical after the second attempt.",
            ],
            bullets: [
              "Plane inclined to both planes: two-stage construction (perpendicular to HP first, then tilt to phi).",
              "Stage 1: edge view at theta to XY in top view; foreshortened front view with cosine theta factor.",
              "Stage 2: rotate the front view by phi about a chosen axis; transfer corners via projectors to the top view.",
              "True shape: auxiliary plane parallel to the lamina; X1Y1 parallel to the edge view.",
              "Auxiliary projection: transfer perpendicular distances from X1Y1 to the auxiliary view.",
              "Worked: 30x50 mm lamina at 30 deg to VP, 45 deg to HP -> stage 1 rectangle 30 x 43.3 mm; stage 2 rotated 45 deg.",
              "Slip: drawing the final front view directly without the two-stage approach leads to wrong angles.",
            ],
            table: {
              caption: "Two-stage construction for an oblique lamina (30 x 50 mm at 30 deg to VP, 45 deg to HP).",
              headers: ["Stage", "Top view", "Front view"],
              rows: [
                ["Stage 1 (perp HP, 30 deg to VP)", "edge view 50 mm at 30 deg to XY", "rectangle 30 x 43.3 mm"],
                ["Stage 2 (tilt 45 deg about 30 mm edge)", "foreshortened polygon", "parallelogram 30 mm high, rotated 45 deg"],
                ["Auxiliary plane parallel to lamina", "true shape 30 x 50 mm rectangle", "on X1Y1 parallel to edge view"],
                ["Slip if drawn directly", "wrong angles", "wrong shape"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "What each view shows for the four plane orientations",
              caption:
                "Axes: inclined to HP (vertical), inclined to VP (horizontal).",
              axes: { x: "Parallel to VP -> Inclined to VP", y: "Parallel to HP -> Inclined to HP" },
              quadrants: [
                { label: "Parallel to both planes - true shape both views", note: "rare; lamina lies in HP or VP" },
                { label: "Inclined to VP only - edge view in front", note: "true shape in top, foreshortened in front" },
                { label: "Inclined to HP only - edge view in top", note: "true shape in front, foreshortened in top" },
                { label: "Inclined to both - two-stage; true shape on auxiliary", note: "the worked 7-mark case" },
              ],
            },
            callout: {
              type: "warning",
              title: "Stage 2 rotates about a fixed edge",
              body: "The second-stage tilt is always about a specific edge that stays in or parallel to a reference plane. Identify this edge before starting stage 2 (the question usually states which edge is parallel to a plane or in a plane). Tilting about the wrong edge makes the entire construction invalid - a frequent reason for low marks on this question.",
            },
            keyTerms: [
              { term: "Two-stage construction", definition: "Method for a plane inclined to both planes: first assume perpendicular to one plane and inclined to the other, then tilt to the second inclination." },
              { term: "Auxiliary reference line X1Y1", definition: "A line drawn parallel to the edge view of a lamina; used to project the true shape on an auxiliary plane." },
              { term: "Edge of tilt", definition: "The lamina edge that remains in or parallel to a reference plane during the second-stage rotation." },
              { term: "Oblique plane", definition: "A plane inclined to both reference planes; neither principal view shows the true shape." },
            ],
            examQuestions: [
              {
                q: "A rectangular lamina of 30 mm x 50 mm is inclined at 30 deg to the VP and 45 deg to the HP. One of its shorter edges is parallel to the HP and one corner of that edge is in the VP. Draw the projections of the lamina by the two-stage method and obtain its true shape using an auxiliary plane.",
                marks: 7,
                outline: [
                  "Stage 1: assume lamina perpendicular to HP and inclined 30 deg to VP. Top view: edge view 50 mm at 30 deg to XY.",
                  "Front view in stage 1: rectangle 30 mm high (shorter edge vertical) by 50 cosine 30 = 43.3 mm horizontal.",
                  "Stage 2: tilt the lamina 45 deg about the 30 mm edge that lies in the VP (and stays parallel to HP).",
                  "Front view rotates 45 deg about its left vertical edge: a parallelogram 30 mm high, rotated 45 deg.",
                  "Top view is redrawn by transferring corner in-front distances via perpendicular projectors.",
                  "Auxiliary plane parallel to the lamina: draw X1Y1 parallel to the stage-1 edge view (50 mm at 30 deg).",
                  "Transfer perpendicular distances of each corner from X1Y1 to the auxiliary projection; the true shape is a 30 x 50 mm rectangle.",
                ],
              },
              {
                q: "Why are two stages needed when a lamina is inclined to both reference planes?",
                marks: 2,
              },
              {
                q: "State the rule for drawing the auxiliary reference line X1Y1 to obtain the true shape of an oblique lamina.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },

    // ============================================================ UNIT III
    {
      number: 3,
      roman: "III",
      title: "Projections of Solids",
      summary:
        "Unit III takes projection from two-dimensional laminae to three-dimensional solids: classification into polyhedra and solids of revolution; simple positions with axis perpendicular to HP or VP; axis inclined to one plane and parallel to the other; axis inclined to both planes via two-step tilts; sectioning by planes of various orientations; and the true shape of the section on an auxiliary plane.",
      chapter: {
        number: "03",
        title: "Projections of Solids",
        intro:
          "Unit III lifts projection from plane figures to three-dimensional solids. From the simple position of a prism or pyramid with axis perpendicular to a reference plane, through the one-inclination case (axis inclined to one plane, parallel to the other), into the two-step case of axis inclined to both planes, and finally into sections and true shape of section - the bridge into Unit IV's development work.",
        inOneBreath:
          "Solids split into polyhedra (prisms and pyramids, each with triangular, square, pentagonal, hexagonal bases) and solids of revolution (cylinders and cones, plus the sphere); a prism has two parallel polygonal bases joined by rectangular faces, a pyramid has one polygonal base and triangular faces meeting at an apex; the axis of a solid is the line joining the centres of its bases (prism, cylinder) or the apex to the base centre (pyramid, cone); in simple position with axis perpendicular to HP the top view shows the true shape of the base and the front view shows the height; with axis perpendicular to VP the front view shows the base and the top view shows the height; with axis inclined to one plane and parallel to the other use a two-step construction: first assume axis perpendicular to the plane to which it will be inclined, then tilt; with axis inclined to both planes use three steps: perpendicular to HP, tilt to theta about a base edge or axis line, tilt to phi about a line perpendicular to the first tilt; a section is the intersection of the solid with a cutting plane, revealing the cut face; a section plane perpendicular to HP shows true shape in top view; inclined to HP shows edge view in top view and foreshortened shape in front view; the true shape of the section is obtained on an auxiliary plane parallel to the section plane.",
        sections: [
          {
            number: "3.1",
            title: "Classification of solids - prisms, pyramids, cylinders, cones",
            body: [
              "A solid is a three-dimensional object bounded by plane or curved surfaces. Engineering graphics classifies solids into two broad families. Polyhedra are bounded entirely by plane polygonal faces; they split into prisms (two congruent parallel polygonal bases joined by rectangular lateral faces) and pyramids (one polygonal base and triangular lateral faces meeting at a common apex). Solids of revolution are generated by rotating a plane curve about an axis; they include the cylinder (rectangle rotated about one side), the cone (right triangle rotated about one leg), and the sphere (semicircle rotated about its diameter).",
              "Prisms are named by their base shape: triangular prism (3 rectangular faces), square prism (4), pentagonal prism (5), hexagonal prism (6). The axis of a prism is the line joining the centres of its two bases; in a right prism the axis is perpendicular to the bases, in an oblique prism it is inclined. Pyramids are likewise named by their base: triangular (tetrahedron if regular), square, pentagonal, hexagonal. The axis of a pyramid is the line from the apex to the centre of the base; the slant height is the perpendicular from apex to a base edge.",
              "Cylinders and cones are the curved-surface cousins of prisms and pyramids. A cylinder of height h and base radius r has volume pi r squared h and lateral area 2 pi r h. A cone of height h, base radius r and slant height l (where l squared = h squared + r squared) has volume (1/3) pi r squared h and lateral area pi r l. The generator of a cone is any straight line on its surface from apex to base. Solids of revolution can be sectioned, developed and projected with the same methods as polyhedra - the only difference is that curved surfaces need a series of generators or points to represent them on the drawing.",
              "Worked classification: a hexagonal prism of 25 mm base side and 60 mm height has 8 faces (2 hexagonal bases + 6 rectangular lateral faces), 18 edges (6 + 6 + 6), and 12 vertices (6 + 6). A pentagonal pyramid of 30 mm base side and 50 mm height has 6 faces (1 pentagonal base + 5 triangular lateral), 10 edges (5 + 5), and 6 vertices (5 base + 1 apex). Knowing the counts prevents slips during projection - the hexagonal prism's top view has 6 vertices forming a regular hexagon; its front view has 6 visible vertical edges; the pyramid's top view has 5 base vertices and the apex at the centre.",
              "Position terminology used in the rest of Unit III. A solid is in 'simple position' when its axis is perpendicular to one reference plane. The 'axis inclined to one plane' case has the axis parallel to the other plane. The 'axis inclined to both planes' case needs two or three construction steps. The 'resting position' is the orientation in which the solid naturally stands: a prism rests on a base, a cone rests on its base, a pyramid rests on its base. All later projections start from the resting position and tilt as the question requires.",
            ],
            bullets: [
              "Polyhedra: bounded by plane polygonal faces; prisms (two parallel bases, rectangular faces) and pyramids (one base, triangular faces).",
              "Solids of revolution: cylinder (rectangle rotated), cone (right triangle rotated), sphere (semicircle rotated).",
              "Prisms named by base: triangular, square, pentagonal, hexagonal; axis joins base centres.",
              "Pyramids named by base; axis from apex to base centre; slant height from apex perpendicular to base edge.",
              "Cone: l squared = h squared + r squared; volume (1/3) pi r squared h; lateral area pi r l.",
              "Hexagonal prism 25 mm side, 60 mm high: 8 faces, 18 edges, 12 vertices.",
              "Resting position: solid stands on its base; all later projections start from here.",
            ],
            table: {
              caption: "Solids classification with counts (regular hexagonal prism and pentagonal pyramid).",
              headers: ["Solid", "Faces", "Edges", "Vertices"],
              rows: [
                ["Triangular prism", "5 (2 tri + 3 rect)", "9", "6"],
                ["Hexagonal prism 25 mm side, 60 mm high", "8 (2 hex + 6 rect)", "18", "12"],
                ["Square pyramid", "5 (1 sq + 4 tri)", "8", "5"],
                ["Pentagonal pyramid 30 mm side, 50 mm high", "6 (1 pent + 5 tri)", "10", "6"],
                ["Cylinder r=20, h=60", "3 (2 circles + curved)", "2 circular edges", "infinite"],
                ["Cone r=25, h=60", "2 (circle + curved)", "1 circular edge", "apex + circle"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Classification of solids",
              caption:
                "Top: the broadest split; bottom: the four regular families used in BT-105.",
              tiers: [
                { label: "Solids (3-D bounded by plane or curved surfaces)", note: "the broadest class" },
                { label: "Polyhedra vs Solids of revolution", note: "all-plane faces vs curved faces" },
                { label: "Prisms and Pyramids", note: "polyhedra with polygonal bases" },
                { label: "Cylinders and Cones", note: "solids of revolution with circular bases" },
              ],
            },
            callout: {
              type: "tip",
              title: "Name the solid by its base",
              body: "Always name a prism or pyramid by its base shape first - 'hexagonal prism' tells you there are 6 lateral faces and the top view is a regular hexagon. Sketching the base in the top view before drawing the front view gives a clean orientation for the rest of the projection. Drawing the views in the wrong order is the most common cause of misaligned edges.",
            },
            keyTerms: [
              { term: "Prism", definition: "A polyhedron with two congruent parallel polygonal bases joined by rectangular lateral faces; axis joins base centres." },
              { term: "Pyramid", definition: "A polyhedron with one polygonal base and triangular lateral faces meeting at a common apex; axis from apex to base centre." },
              { term: "Cylinder", definition: "A solid of revolution generated by rotating a rectangle about one side; volume pi r squared h." },
              { term: "Cone", definition: "A solid of revolution generated by rotating a right triangle about one leg; slant height l squared = h squared + r squared." },
              { term: "Generator", definition: "Any straight line on the surface of a cone or cylinder from apex to base (cone) or along the lateral surface (cylinder)." },
            ],
            examQuestions: [
              {
                q: "Classify engineering solids with examples. Differentiate between a prism and a pyramid, and between a cylinder and a cone, giving the volume and lateral surface formulae for the curved-surface solids. A hexagonal prism of 25 mm base side and 60 mm height rests on its base on HP - state its number of faces, edges and vertices.",
                marks: 7,
                outline: [
                  "Classify: polyhedra (prisms, pyramids) and solids of revolution (cylinders, cones, spheres).",
                  "Prism: two parallel polygonal bases + rectangular lateral faces; axis joins base centres.",
                  "Pyramid: one polygonal base + triangular faces meeting at apex; axis from apex to base centre.",
                  "Cylinder: rectangle rotated; volume pi r squared h; lateral area 2 pi r h.",
                  "Cone: right triangle rotated; l squared = h squared + r squared; volume (1/3) pi r squared h; lateral area pi r l.",
                  "Hexagonal prism 25 mm side, 60 mm high: 8 faces (2 hexagonal + 6 rectangular), 18 edges, 12 vertices.",
                  "Resting position: prism on its hexagonal base on HP; top view shows regular hexagon, front view shows rectangle 60 mm high.",
                ],
              },
              {
                q: "How many lateral faces does a pentagonal pyramid have? What is its slant height if base side is 30 mm and height is 50 mm?",
                marks: 2,
              },
              {
                q: "Differentiate between a prism and a pyramid in one line each.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Projections of solids in simple positions",
            body: [
              "A solid is in a simple position when its axis is perpendicular to one reference plane. If the axis is perpendicular to the HP, the top view shows the true shape of the base (or bases) and the front view shows the height of the solid as a rectangle (prism, cylinder) or triangle (pyramid, cone). If the axis is perpendicular to the VP, the front view shows the base and the top view shows the height. The simple position is the starting orientation from which all tilted cases are constructed.",
              "Worked example 1: a hexagonal prism of 25 mm base side and 60 mm height rests on its base on the HP with one base edge parallel to the VP. Draw XY. Top view: a regular hexagon of 25 mm side with one edge parallel to XY; label the vertices 1, 2, 3, 4, 5, 6 going around. Front view: a rectangle 60 mm high by 50 mm wide (the width is the distance across flats of the hexagon = 2 x 25 x cosine 30 = 43.3 mm if measured across the parallel edges, or 50 mm across corners); the front view shows two visible vertical edges (the back vertices) and four hidden edges as short dashes.",
              "Worked example 2: a pentagonal pyramid of 30 mm base side and 50 mm height rests on its base on the HP with one base edge away from the VP (an edge of the base farthest from the observer). Top view: a regular pentagon of 30 mm side with one edge parallel to XY at the far side; the apex projects to the centre of the pentagon. Front view: an isosceles triangle 50 mm high with base 30 mm; the two slanting sides are the visible slant heights, and the central slant height to the far base vertex is hidden as a short-dash line.",
              "Worked example 3: a cylinder of 30 mm diameter and 50 mm height has its axis perpendicular to the VP. Front view: a circle of 30 mm diameter. Top view: a rectangle 50 mm wide (along the axis) by 30 mm high (the diameter), with the two short vertical sides being the circular ends seen edge-on. A cone with axis perpendicular to VP would similarly show a circle in front view and an isosceles triangle in top view.",
              "The projector rule still governs: vertical projectors from each vertex in the top view meet the front view at the corresponding vertex of the elevation. For the hexagonal prism, projectors from vertices 1, 2, ..., 6 in the top view meet the front view at the same six points along the top and bottom of the rectangle. For the pyramid, the apex projector goes from the centre of the pentagon (top view) to the apex of the triangle (front view). Always check: every vertex in one view has a perpendicular projector to its corresponding vertex in the other view.",
            ],
            bullets: [
              "Simple position: axis perpendicular to one reference plane; the starting orientation for all tilts.",
              "Axis perp to HP: top view shows true shape of base; front view shows height as rectangle or triangle.",
              "Axis perp to VP: front view shows base; top view shows height.",
              "Hexagonal prism 25 mm side, 60 mm high: top view regular hexagon; front view rectangle 60 mm high.",
              "Pentagonal pyramid 30 mm side, 50 mm high: top view pentagon with apex at centre; front view isosceles triangle.",
              "Cylinder axis perp to VP: front view circle, top view rectangle; cone similar with triangle in top.",
              "Projector rule: every vertex in one view has a perpendicular projector to the corresponding vertex.",
            ],
            table: {
              caption: "Simple-position projections of common solids.",
              headers: ["Solid (resting)", "Top view", "Front view"],
              rows: [
                ["Hexagonal prism axis perp HP", "regular hexagon (true base)", "rectangle 60 mm high"],
                ["Pentagonal pyramid axis perp HP", "pentagon with apex at centre", "isosceles triangle 50 mm high"],
                ["Cylinder axis perp HP", "circle (true base)", "rectangle height x diameter"],
                ["Cone axis perp HP", "circle with apex at centre", "isosceles triangle"],
                ["Square prism axis perp VP", "rectangle height x side", "square (true base)"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Two-view projection of a hexagonal prism in simple position",
              caption:
                "Top layer is the front view; bottom layer is the top view; projectors join them.",
              layers: [
                { label: "Front view: rectangle 60 mm high x 50 mm wide", note: "two visible vertical edges, four hidden" },
                { label: "Projectors down from each vertex", note: "perpendicular to XY" },
                { label: "Top view: regular hexagon 25 mm side", note: "one edge parallel to XY" },
                { label: "XY reference line", note: "the meeting line of HP and VP" },
              ],
            },
            callout: {
              type: "tip",
              title: "Choose the edge-parallel orientation",
              body: "When the question allows the orientation, rest the solid with one base edge parallel to the VP (and hence to XY). This makes both the front and top views symmetric about a vertical centre line, halves the construction effort, and gives the cleanest hidden-edge pattern. Most RGPV prism and pyramid problems assume this orientation.",
            },
            keyTerms: [
              { term: "Simple position", definition: "Solid orientation with axis perpendicular to one reference plane; base parallel to that plane." },
              { term: "Resting position", definition: "The natural standing orientation of a solid on its base on a reference plane." },
              { term: "Across flats", definition: "Distance between two parallel faces of a regular polygon; for a hexagon of side a, equals a times root 3." },
              { term: "Slant height", definition: "In a pyramid or cone, the perpendicular distance from apex to a base edge (or tangent to the base circle)." },
            ],
            examQuestions: [
              {
                q: "A hexagonal prism of 25 mm base side and 60 mm height rests on its base on the HP with one base edge parallel to the VP. Draw its projections. Also draw the projections of a pentagonal pyramid of 30 mm base side and 50 mm height resting on its base on HP with one base edge away from the VP.",
                marks: 7,
                outline: [
                  "Hexagonal prism: draw XY; top view a regular hexagon of 25 mm side with one edge parallel to XY.",
                  "Label vertices 1 to 6 around the hexagon; project each vertex up to the front view.",
                  "Front view: rectangle 60 mm high by 50 mm wide (across corners); two visible vertical edges, four hidden as short dashes.",
                  "Pentagonal pyramid: top view a regular pentagon of 30 mm side with one edge parallel to XY at the far side.",
                  "Mark the apex at the centre of the pentagon in top view; project up to the apex of the front view triangle.",
                  "Front view: isosceles triangle 50 mm high with base 30 mm; slant heights visible; central slant height to far vertex hidden as short dash.",
                  "State that both solids are in simple position (axis perpendicular to HP).",
                ],
              },
              {
                q: "A cylinder of 30 mm diameter and 50 mm height has its axis perpendicular to the VP. What do its two views show?",
                marks: 2,
              },
              {
                q: "Define slant height of a regular pyramid. How is it different from the height?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Axis inclined to one plane and parallel to the other",
            body: [
              "When the axis of a solid is inclined to one reference plane and parallel to the other, a two-step construction is used. Step 1: draw the solid in simple position with its axis perpendicular to the plane to which it will be inclined. Step 2: tilt the solid about a suitable edge or line (a base edge, a base diagonal, or the axis itself) until the axis is at the required inclination; transfer the projected points to the new positions via projectors.",
              "Worked example: a hexagonal prism of 25 mm base side and 60 mm height rests on one of its base edges on the HP with its axis inclined at 30 deg to the HP and parallel to the VP. Step 1: draw the prism in simple position with axis perpendicular to HP - top view regular hexagon 25 mm side with one edge parallel to XY (the edge that will rest on HP), front view rectangle 60 mm high. Step 2: tilt the prism about the chosen base edge (the edge parallel to XY in the front view) so that the axis makes 30 deg with HP. The front view rotates 30 deg about that edge; the top view changes correspondingly.",
              "Step 2 procedure in detail. Identify the edge about which the tilt occurs - the edge that stays on HP. In the front view, redraw the rectangle rotated 30 deg about the lower edge: the upper base now lies at 60 cosine 30 = 52 mm horizontally from the lower edge and 60 sine 30 = 30 mm above it. Each upper vertex of the rectangle has moved along a circular arc of radius equal to its distance from the tilt axis. In the top view, the vertices of the upper base move along lines perpendicular to XY; their new in-front distances come from the rotated front view.",
              "Worked example with pyramid: a pentagonal pyramid of 30 mm base side and 50 mm height rests on one base edge on HP with its axis inclined at 30 deg to HP and parallel to VP. Step 1: simple position with axis perpendicular to HP - top view regular pentagon 30 mm side with one edge parallel to XY (the resting edge), front view isosceles triangle 50 mm high. Step 2: rotate the front view 30 deg about the resting edge; the apex moves to (50 cosine 30 = 43.3 mm horizontally, 50 sine 30 = 25 mm vertically) from the base; the upper base 'corner' (the far apex) shifts accordingly. In the top view, the apex shifts along the centre line perpendicular to the resting edge by 25 mm (the new height above HP); the base pentagon stays as the true base shape.",
              "Key checks: the tilt axis must be parallel to the reference plane to which the axis remains parallel (here VP, so the tilt axis is parallel to VP and to XY); the tilt axis is a base edge that stays in or on the HP. The two-step construction is identical in pattern for any solid - prism, pyramid, cylinder, cone - only the base shape and the projected heights change. Cylinders and cones tilt about a base tangent or a base generator instead of a polygonal edge.",
            ],
            bullets: [
              "Axis inclined to one plane, parallel to the other: two-step construction.",
              "Step 1: simple position with axis perpendicular to the plane to which it will be inclined.",
              "Step 2: rotate about a base edge that stays on or parallel to the other reference plane.",
              "Tilt axis parallel to the plane the solid axis stays parallel to (here VP and XY).",
              "Hexagonal prism 25 mm side, 60 mm high at 30 deg to HP: rotate rectangle 30 deg about base edge.",
              "Pentagonal pyramid 30 mm side, 50 mm high at 30 deg: rotate triangle; apex moves to 43.3 mm horizontal, 25 mm vertical.",
              "Cylinder and cone tilt about a base tangent or generator instead of a polygonal edge.",
            ],
            table: {
              caption: "Two-step construction for axis inclined to one plane (parallel to the other).",
              headers: ["Step", "What is done", "Key measurement"],
              rows: [
                ["1", "Simple position: axis perp to plane of inclination", "true base + true height"],
                ["2", "Rotate about a base edge parallel to the other plane", "new height = L sine theta"],
                ["Worked prism", "rotate rectangle 30 deg about lower edge", "upper base 52 mm horiz, 30 mm vert"],
                ["Worked pyramid", "rotate triangle 30 deg about base edge", "apex 43.3 mm horiz, 25 mm vert"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Two-step construction for a prism at 30 deg to HP",
              caption:
                "Step 1 draws simple position; step 2 rotates about the resting edge.",
              steps: [
                { label: "Step 1: top view hexagon + front rectangle 60 mm high", note: "axis perp HP" },
                { label: "Choose tilt axis: lower base edge parallel to XY", note: "edge stays on HP" },
                { label: "Rotate front view 30 deg about that edge", note: "upper base to 52 mm horiz, 30 mm vert" },
                { label: "Project rotated vertices up to top view", note: "in-front distances via projectors" },
                { label: "Final front view tilted; top view foreshortened", note: "axis at 30 deg to HP, parallel to VP" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always rest the right edge on HP",
              body: "If the question says 'rests on one of its base edges on HP', identify that edge and draw it parallel to XY in both views before step 2. Tilting about a wrongly chosen edge (a corner, a diagonal) breaks the construction. The edge that rests on HP must appear as a horizontal line in the front view both before and after the tilt - it does not move.",
            },
            keyTerms: [
              { term: "Two-step construction", definition: "Method for a solid with axis inclined to one plane and parallel to the other: simple position, then rotate about a base edge." },
              { term: "Tilt axis", definition: "The base edge (or generator) about which the solid is rotated in step 2; stays on the reference plane." },
              { term: "Rotated front view", definition: "The step-2 elevation, drawn by rotating the simple-position rectangle or triangle about the tilt axis." },
            ],
            examQuestions: [
              {
                q: "A hexagonal prism of 25 mm base side and 60 mm height rests on one of its base edges on the HP with its axis inclined at 30 deg to the HP and parallel to the VP. Draw its projections using the two-step method.",
                marks: 7,
                outline: [
                  "Step 1: simple position with axis perpendicular to HP. Top view: regular hexagon 25 mm side with one edge parallel to XY (the resting edge).",
                  "Label vertices 1 to 6; project each up to the front view.",
                  "Front view (step 1): rectangle 60 mm high by 50 mm wide; identify the resting edge as the lower horizontal edge.",
                  "Step 2: rotate the front view 30 deg about the lower edge so the axis makes 30 deg with HP.",
                  "Compute new positions: upper base at 60 cosine 30 = 52 mm horizontally and 60 sine 30 = 30 mm vertically from the lower edge.",
                  "Project the rotated upper-base vertices up to the top view; transfer in-front distances via perpendicular projectors.",
                  "Final front view is a parallelogram 60 mm long at 30 deg; top view is the foreshortened hexagon with the upper base shifted.",
                ],
              },
              {
                q: "Why must the tilt axis be parallel to the reference plane to which the solid axis remains parallel?",
                marks: 2,
              },
              {
                q: "A cylinder of 30 mm diameter and 50 mm height has its axis at 45 deg to HP and parallel to VP. About which element is it tilted?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Axis inclined to both reference planes - step-by-step procedure",
            body: [
              "When the axis of a solid is inclined to both HP and VP, the construction needs three steps. Step 1: draw the solid in simple position with axis perpendicular to HP. Step 2: tilt the solid about a base edge so the axis is inclined theta to HP (and still parallel to VP). Step 3: rotate the entire drawing about a vertical axis (a line perpendicular to HP through the centre of the base) so the axis is also inclined phi to VP. Step 3 changes the top view to its final orientation while preserving the inclination theta.",
              "Step 3 is the trickiest because it rotates the entire step-2 drawing in the top view. Practically: after step 2, the axis is at theta to HP and parallel to VP (so in plan it is parallel to XY). Step 3 rotates this top view by an angle phi' such that the resulting apparent inclination in plan is phi (the required inclination to VP). The angle phi' is computed from the relation tan phi = tan phi' / cos theta, so phi' = arctan(tan phi x cos theta). The front view is then redrawn by projecting from the rotated top view: each vertex of the solid in plan is projected up to its step-2 height.",
              "Worked example: a hexagonal prism of 25 mm base side and 60 mm height has its axis inclined at 30 deg to HP and 45 deg to VP, with one base edge of the lower base parallel to HP during the first tilt. Step 1: simple position (axis perp HP, hexagon top view, rectangle front view 60 mm high). Step 2: tilt about the lower edge parallel to XY so the axis is at 30 deg to HP; the front view rotates 30 deg, the top view foreshortens. Step 3: rotate the top view by phi' = arctan(tan 45 x cos 30) = arctan(0.866) = 40.9 deg about the centre of the lower base so that the axis is also at 45 deg to VP. The final front view is redrawn by projecting from the rotated top view.",
              "The procedure is identical for a pyramid, cylinder or cone: only the base shape changes. For a cone, step 1 draws the top view as a circle with the apex at the centre; step 2 tilts about a base tangent; step 3 rotates the top view. The hidden edges in the final front view of a cone are along the generator that is now on the far side of the cone; in the top view, the base circle becomes an ellipse (or simply the foreshortened circle with a few generators drawn).",
              "Common slips: forgetting that step 3 is a rotation of the top view only (the front view is rebuilt from the rotated top view, not rotated directly); confusing phi' (the angle of step-3 rotation) with phi (the required inclination to VP) - phi' is always smaller than phi because cosine theta is less than 1; not transferring the heights correctly when rebuilding the front view (each vertex's height comes from step 2, not step 1). Practise one hexagonal prism and one square pyramid problem before the exam; the pattern becomes reliable.",
            ],
            bullets: [
              "Axis inclined to both planes: three-step construction (perp HP -> tilt theta -> rotate phi' for phi to VP).",
              "Step 1: simple position with axis perpendicular to HP.",
              "Step 2: tilt about a base edge to make axis at theta to HP, still parallel to VP.",
              "Step 3: rotate the top view by phi' = arctan(tan phi x cos theta) so axis is also at phi to VP.",
              "Front view rebuilt by projecting from the rotated top view; heights from step 2.",
              "Worked hex prism 30 deg HP, 45 deg VP: step 3 rotates by phi' = arctan(0.866) = 40.9 deg.",
              "Slip: phi' is smaller than phi; do not rotate the top view by phi directly.",
            ],
            table: {
              caption: "Three-step construction for axis inclined to both planes (worked hexagonal prism).",
              headers: ["Step", "Operation", "Result for hex prism 25 mm side, 60 mm high"],
              rows: [
                ["1", "Simple position: axis perp HP", "top hexagon; front rectangle 60 mm"],
                ["2", "Tilt theta = 30 deg about base edge", "axis 30 deg to HP, parallel VP"],
                ["3", "Rotate top by phi' = arctan(tan 45 cos 30) = 40.9 deg", "axis also 45 deg to VP"],
                ["Rebuild front", "Project from rotated top, heights from step 2", "final front view, final top view"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Three-step construction for an oblique-axis solid",
              caption:
                "Each stage fixes one inclination; the front view is rebuilt after step 3.",
              stages: [
                { label: "Step 1: simple position (axis perp HP)", note: "top view true base, front view height" },
                { label: "Step 2: tilt theta about base edge", note: "axis theta to HP, parallel VP" },
                { label: "Compute phi' = arctan(tan phi cos theta)", note: "step 3 rotation angle" },
                { label: "Step 3: rotate top view by phi'", note: "axis also phi to VP" },
                { label: "Rebuild front view from rotated top", note: "heights carried from step 2" },
              ],
            },
            callout: {
              type: "warning",
              title: "Heights come from step 2, not step 1",
              body: "When rebuilding the front view after step 3, the height of each vertex above HP is its height after step 2 (which already includes the theta tilt). Projecting from the rotated top view but using step-1 heights loses the theta tilt and gives a vertical solid in the final front view - the most common cause of failed three-step constructions.",
            },
            keyTerms: [
              { term: "Three-step construction", definition: "Method for a solid with axis inclined to both planes: simple position, tilt to theta, rotate top view by phi' so axis is also at phi to VP." },
              { term: "Step-3 rotation angle phi'", definition: "Angle the top view is rotated in step 3; smaller than phi; given by arctan(tan phi x cos theta)." },
              { term: "Rebuild", definition: "The act of redrawing the front view after step 3 by projecting each vertex from the rotated top view using its step-2 height." },
            ],
            examQuestions: [
              {
                q: "A hexagonal prism of 25 mm base side and 60 mm height has its axis inclined at 30 deg to the HP and 45 deg to the VP, with one base edge of the lower base parallel to the HP during the first tilt. Draw the projections using the three-step method.",
                marks: 7,
                outline: [
                  "Step 1: simple position. Top view regular hexagon 25 mm side; front view rectangle 60 mm high.",
                  "Step 2: tilt about a lower base edge parallel to XY so axis is at 30 deg to HP and parallel to VP.",
                  "Front view rotates 30 deg: upper base at 60 cosine 30 = 52 mm horiz, 60 sine 30 = 30 mm vert.",
                  "Compute step-3 rotation: phi' = arctan(tan 45 x cos 30) = arctan(0.866) = 40.9 deg.",
                  "Step 3: rotate the top view by 40.9 deg about the centre of the lower base.",
                  "Rebuild the front view by projecting each vertex from the rotated top view using its step-2 height.",
                  "State that the final front view shows the axis at the apparent angle alpha (greater than 30 deg) and the top view shows it at the apparent angle beta (greater than 45 deg).",
                ],
              },
              {
                q: "In a three-step construction, why is the top view rotated by phi' rather than phi in step 3?",
                marks: 2,
              },
              {
                q: "State the formula relating phi' and phi in a three-step construction.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Section of solids - perpendicular and inclined section planes",
            body: [
              "A section of a solid is the plane figure obtained when an imaginary cutting plane intersects the solid. The boundary of the section is a polygon for polyhedra (its sides are the lines where the cutting plane meets each lateral face) or a curve for solids of revolution. Sections reveal internal features - holes, slots, ribs - and are fundamental to manufacturing drawings. The shape of the section depends on the orientation of the cutting plane relative to the solid's axis.",
              "If the cutting plane is perpendicular to a reference plane, the section is straightforward. A cutting plane perpendicular to HP shows its true shape in the top view; the front view shows the cutting plane as a line (its edge view). A cutting plane perpendicular to VP shows its true shape in the front view; the top view shows the edge view. Worked example: a square prism of 30 mm side and 60 mm height is cut by a plane perpendicular to VP, inclined 45 deg to HP, passing through a point 20 mm above the base on the axis. Front view: draw the cutting plane as a line at 45 deg through the point; the line crosses the prism at two points; the section in the front view is the line segment between them. Top view: the section is a rectangle of width 30 mm; its length comes from the front view by projecting the two intersection points down.",
              "If the cutting plane is inclined to both reference planes, neither view shows the true shape directly. Construction: draw the cutting plane as a line in the view where it appears as an edge (perpendicular to one reference plane); find the intersection points of this line with the visible edges of the solid in that view; project these points to the other view; join them to give the foreshortened section in the second view. The true shape is obtained on an auxiliary plane parallel to the cutting plane.",
              "Worked example (inclined section): a hexagonal prism of 25 mm base side and 60 mm height is cut by a plane perpendicular to VP, inclined 30 deg to HP, bisecting the axis. Front view: a line at 30 deg to XY through the midpoint of the axis (30 mm above base), crossing the prism outline at two points. Top view: project these two points down to the top view; the section is a hexagon whose vertices are the intersections of the cutting plane with the six vertical edges of the prism. Some vertices lie on visible edges, others on hidden edges - mark them with filled circles and label them in order around the section.",
              "Section of a cone is a classic exam question. A cone of base radius r and height h, cut by a plane perpendicular to the axis, gives a circular section. Cut by a plane through the apex, gives a triangle (two generators and a chord). Cut by a plane parallel to a generator, gives a parabola. Cut by a plane parallel to the axis, gives a hyperbola. Cut by a plane inclined to the axis (between perpendicular and parallel-to-generator), gives an ellipse. These five conic sections are the historical origin of the conic curves and are routinely asked as 7-mark questions.",
            ],
            bullets: [
              "Section: the plane figure obtained when a cutting plane intersects a solid.",
              "Cutting plane perpendicular to a reference plane shows true shape on that plane; edge view on the other.",
              "Cutting plane inclined to both planes: find intersections in the edge view, project to the other view.",
              "True shape of an oblique section on an auxiliary plane parallel to the cutting plane.",
              "Hexagonal prism cut at 30 deg: section is a hexagon with vertices on the six vertical edges.",
              "Cone sections: perpendicular gives circle; through apex gives triangle; parallel generator gives parabola; parallel axis gives hyperbola; inclined gives ellipse.",
              "Mark intersections on visible and hidden edges; label vertices in order around the section.",
            ],
            table: {
              caption: "Sections of a cone for different cutting-plane orientations.",
              headers: ["Cutting plane", "Section shape"],
              rows: [
                ["Perpendicular to axis", "Circle"],
                ["Through apex", "Triangle (two generators + chord)"],
                ["Parallel to a generator", "Parabola"],
                ["Parallel to the axis", "Hyperbola"],
                ["Inclined to axis (general case)", "Ellipse"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Sectioning a solid - cases by cutting-plane orientation",
              caption:
                "Pick the case by where the cutting plane is perpendicular.",
              start: "Cutting plane orientation",
              branches: [
                { label: "Perpendicular to one reference plane", outcome: "true shape on that plane; edge view on the other - direct draw", good: true },
                { label: "Inclined to both reference planes", outcome: "find intersections in the edge view, project; true shape on auxiliary plane", good: true },
                { label: "Through apex of cone / parallel to generator", outcome: "conic section - triangle, parabola, hyperbola or ellipse", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Label the section vertices in order",
              body: "When a section cuts a polyhedron, label the intersection points 1, 2, 3, ... in order around the section boundary - never skip a vertex. Hidden-edge intersections are still part of the section; mark them with a filled circle and a label even though the edge itself is dashed. Examiners explicitly check that every vertex of the section is shown and labelled.",
            },
            keyTerms: [
              { term: "Section", definition: "The plane figure formed when a cutting plane intersects a solid; reveals internal features." },
              { term: "Cutting plane", definition: "An imaginary plane used to slice a solid and reveal its section; can be perpendicular to or inclined to the reference planes." },
              { term: "Conic section", definition: "The curve obtained when a cone is cut by a plane: circle, ellipse, parabola or hyperbola depending on the plane's orientation." },
              { term: "Edge view of a plane", definition: "The view in which the cutting plane appears as a line; occurs in the reference plane to which it is perpendicular." },
            ],
            examQuestions: [
              {
                q: "A hexagonal prism of 25 mm base side and 60 mm height is cut by a plane perpendicular to the VP, inclined at 30 deg to the HP and bisecting the axis of the prism. Draw the front view, top view and the true shape of the section.",
                marks: 7,
                outline: [
                  "Draw the prism in simple position: top view regular hexagon 25 mm side, front view rectangle 60 mm high.",
                  "In the front view, draw the cutting plane as a line at 30 deg to XY through the midpoint of the axis (30 mm above base).",
                  "Mark the two intersections of this line with the prism outline in the front view; label them.",
                  "Project these intersection points down to the top view; the section in plan is a hexagon with vertices on the six vertical edges.",
                  "Label the section vertices 1, 2, 3, 4, 5, 6 in order around the section boundary, including hidden-edge intersections.",
                  "Draw the true shape on an auxiliary plane parallel to the cutting plane: X1Y1 parallel to the cutting-plane line in front view.",
                  "Transfer perpendicular distances of each vertex from X1Y1 to the auxiliary projection - the true shape is a hexagon.",
                ],
              },
              {
                q: "Name the conic section obtained when a right circular cone is cut by a plane parallel to its axis.",
                marks: 2,
              },
              {
                q: "State the two orientations of a cutting plane for which the true shape of the section is seen directly in one of the principal views.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.6",
            title: "True shape of section on an auxiliary plane",
            body: [
              "When a section plane is inclined to both reference planes, neither principal view shows the true shape of the section. The standard method to obtain the true shape is the auxiliary plane method: introduce a new reference plane parallel to the cutting plane, and project the section vertices onto it. The auxiliary projection shows the section in true shape and true size. This is the same auxiliary-plane technique used in Unit II for true shape of an oblique plane.",
              "Procedure. Step 1: identify the view in which the cutting plane appears as an edge (a line). If the cutting plane is perpendicular to VP, this is the front view; if perpendicular to HP, the top view. Step 2: draw the auxiliary reference line X1Y1 parallel to the edge view of the cutting plane. Step 3: from each vertex of the section (already found in the principal views), drop a perpendicular to X1Y1; the perpendicular distance from the vertex to the cutting plane's edge view is the same as the distance to X1Y1.",
              "Step 4: on each perpendicular, mark the auxiliary projection of the vertex at a distance equal to the vertex's perpendicular distance from the other reference plane. Concretely, if the cutting plane is perpendicular to VP, the 'other reference plane' is HP, and the distance is the vertex's height above HP (read from the top view, which is its in-front distance from XY). Step 5: join the auxiliary projections in order to give the true shape of the section.",
              "Worked example: a square pyramid of 40 mm base side and 60 mm height is cut by a plane perpendicular to VP, inclined 45 deg to HP, passing through the axis at 20 mm above the base. Step 1: front view shows the cutting plane as a line at 45 deg through the point 20 mm above the base on the axis. Step 2: draw X1Y1 parallel to this 45 deg line, at any convenient distance. Step 3: the section vertices in the front view are the four intersections of the cutting plane with the slant edges; drop perpendiculars from each to X1Y1. Step 4: measure each vertex's height above HP in the top view (or its in-front distance from XY in the top view - same thing since it's a slant edge) and mark this distance along the perpendicular on the auxiliary projection. Step 5: join the four auxiliary projections - the true shape is a quadrilateral (a trapezium for a square pyramid section).",
              "Common slips: drawing X1Y1 perpendicular to the cutting plane instead of parallel (it must be parallel); measuring the wrong distance for the auxiliary projection (the distance is from the OTHER reference plane, not from the cutting plane itself); forgetting to include hidden-edge section vertices. Practise the auxiliary plane method on a hexagonal prism cut at 30 deg and a square pyramid cut at 45 deg; both yield clean true shapes when the construction is correct.",
            ],
            bullets: [
              "True shape of an oblique section is found on an auxiliary plane parallel to the cutting plane.",
              "X1Y1 is drawn parallel to the edge view of the cutting plane in one principal view.",
              "Perpendicular distance of each vertex from X1Y1 in auxiliary view equals its distance from the OTHER reference plane.",
              "Join auxiliary projections in order to obtain the true shape polygon.",
              "Worked square pyramid 40 mm side, 60 mm high, cut at 45 deg through 20 mm above base: section is a trapezium.",
              "Slip: X1Y1 parallel, not perpendicular, to the cutting plane edge view.",
              "Slip: distance measured is from the other reference plane, not from the cutting plane.",
            ],
            table: {
              caption: "Auxiliary plane method for true shape of section.",
              headers: ["Step", "Operation", "Tool"],
              rows: [
                ["1", "Identify edge view of cutting plane", "principal view perpendicular to it"],
                ["2", "Draw X1Y1 parallel to the edge view", "thin continuous line"],
                ["3", "Drop perpendiculars from each section vertex to X1Y1", "set square"],
                ["4", "Mark vertex on perpendicular at distance from OTHER reference plane", "divider"],
                ["5", "Join auxiliary projections in order", "true shape polygon"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Auxiliary plane method - five steps to true shape",
              caption:
                "Cycle through the five steps for any oblique section; the cycle closes at the true shape.",
              steps: [
                { label: "Identify edge view of cutting plane", note: "in the perp principal view" },
                { label: "Draw X1Y1 parallel to it", note: "auxiliary reference line" },
                { label: "Drop perpendiculars from vertices", note: "from each section vertex to X1Y1" },
                { label: "Transfer distances from other plane", note: "height above HP or in-front of VP" },
                { label: "Join projections in order", note: "true shape polygon obtained" },
              ],
            },
            callout: {
              type: "tip",
              title: "Use the divider, not the scale",
              body: "Transfer distances with a divider rather than reading off a scale - small errors in distance accumulate into a misshapen true shape. Set the divider to the vertex's perpendicular distance to the cutting plane in the principal view, then step the same distance along the auxiliary projector. This preserves exact lengths even when X1Y1 is drawn at an awkward angle.",
            },
            keyTerms: [
              { term: "Auxiliary plane", definition: "An extra reference plane introduced parallel to the cutting plane; the section projects in true shape on it." },
              { term: "X1Y1", definition: "The auxiliary reference line, drawn parallel to the edge view of the cutting plane." },
              { term: "True shape of section", definition: "The actual shape and size of the cut face; obtained on an auxiliary plane parallel to the cutting plane." },
              { term: "Edge view of a plane", definition: "A plane appears as a line in the view perpendicular to it; the starting point for true-shape construction." },
            ],
            examQuestions: [
              {
                q: "Explain the auxiliary plane method for determining the true shape of the section of a solid. A square pyramid of 40 mm base side and 60 mm height is cut by a plane perpendicular to the VP, inclined at 45 deg to the HP and passing through the axis at a point 20 mm above the base. Draw the front view, top view and the true shape of the section.",
                marks: 7,
                outline: [
                  "Explain the method: introduce an auxiliary plane parallel to the cutting plane; X1Y1 parallel to edge view of cutting plane.",
                  "Draw the pyramid in simple position: top view square 40 mm side, front view triangle 60 mm high.",
                  "Front view: draw the cutting plane as a line at 45 deg through the point 20 mm above the base on the axis.",
                  "Mark the four intersections of this line with the slant edges; project them down to the top view.",
                  "Draw X1Y1 parallel to the 45 deg line; drop perpendiculars from each section vertex to X1Y1.",
                  "Transfer each vertex's distance from HP (read from the top view) along its perpendicular to the auxiliary projection.",
                  "Join the four auxiliary projections in order; the true shape is a trapezium.",
                ],
              },
              {
                q: "Why must X1Y1 be drawn parallel to the edge view of the cutting plane?",
                marks: 2,
              },
              {
                q: "From which reference plane is the perpendicular distance of a section vertex measured when constructing the auxiliary projection?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },

    // ============================================================ UNIT IV
    {
      number: 4,
      roman: "IV",
      title: "Sections, Development and Isometric",
      summary:
        "Unit IV builds on sectioning to develop the surfaces of solids for sheet-metal work, considers intersections of solids, then moves into pictorial drawing via isometric projection - fundamentals, the isometric scale, projection of simple solids, combinations of solids, and conversion from orthographic views to isometric views.",
      chapter: {
        number: "04",
        title: "Sections, Development and Isometric",
        intro:
          "Unit IV is the pictorial half of the syllabus. Development of surfaces (parallel-line for prisms and cylinders, radial-line for pyramids and cones) turns 3-D solids into flat patterns for fabrication. Intersections of solids introduce intersection curves. Isometric projection provides the single-view pictorial of choice for engineering assemblies.",
        inOneBreath:
          "A development is the flat pattern of the lateral surface of a solid, drawn so that folding it along the edges reconstructs the solid; the parallel-line method suits prisms and cylinders: draw a stretch-out line equal to the perimeter, erect perpendiculars at each fold, transfer the heights of each element from the front view; the radial-line method suits pyramids and cones: draw an arc of radius equal to the slant height from the apex, mark off chord lengths equal to base edges along the arc, join to the apex; a truncated solid has its development drawn by transferring the true lengths of the truncated elements from an auxiliary view; intersection of two solids (cylinder-cylinder, prism-cylinder) gives a curve of intersection found by plotting common points on cutting planes; isometric projection draws the three axes at 120 deg (30 deg each side of horizontal) with the isometric scale of 0.815 shortening lengths along the axes; circles become ellipses (four-centre approximate); the isometric of a cube is a hexagonal outline; combinations of solids are drawn by aligning their axes and connecting their outlines; from orthographic views the isometric is constructed by boxing - draw an isometric box enclosing the object, then transfer measurements along the three axes.",
        sections: [
          {
            number: "4.1",
            title: "Development of surfaces - parallel-line method",
            body: [
              "A development (or pattern) of a solid is the flat layout of its lateral surface such that, when folded along the edges, the original solid is reconstructed. Developments are the bridge between the drawing office and the sheet-metal shop: ducts, boilers, funnels, hoppers and containers are all made from developed patterns. The parallel-line method applies to solids with parallel lateral edges - prisms and cylinders - and consists of drawing a stretch-out line equal to the perimeter, erecting perpendiculars at each fold, and transferring element heights from the front view.",
              "Worked example: develop the lateral surface of a square prism of 30 mm side and 50 mm height. The perimeter is 4 x 30 = 120 mm. Draw a horizontal stretch-out line of 120 mm; divide it into 4 equal parts of 30 mm at points 1, 2, 3, 4, 1 (returning to the start to close the pattern). At each division erect a perpendicular of length equal to the prism height (50 mm). The four rectangles between successive perpendiculars are the four lateral faces of the prism; the top and bottom edges of the development are 50 mm vertical lines. Add the two square bases (30 x 30 mm) attached to one of the rectangles if a complete development is required.",
              "Worked cylinder: develop the lateral surface of a cylinder of 30 mm diameter and 50 mm height. The circumference is pi x 30 = 94.2 mm. Draw a stretch-out line of 94.2 mm; divide it into 12 equal parts of 7.85 mm each (using a chord approximation, the 12 parts add up to slightly less than the circumference - a more accurate method divides the base circle into 12 equal arcs and steps each chord off along the stretch-out line). Erect perpendiculars at each division of length 50 mm; the top and bottom edges of the development are smooth horizontal lines at 50 mm above and below the stretch-out line. The development is a rectangle 94.2 mm wide by 50 mm high.",
              "For a truncated prism or cylinder, the element heights vary along the stretch-out line. Worked example: a square prism of 30 mm side and 50 mm height is cut by a plane perpendicular to VP, inclined 30 deg to HP, bisecting the front face. Develop the lateral surface. The stretch-out line is still 120 mm with 4 divisions. The element heights are obtained from the front view: the front face is cut at 50 - (15 x tan 30) = 50 - 8.66 = 41.3 mm at one corner and 50 + 8.66 = 58.7 mm at the other corner; the back face similarly. Transfer these varying heights to the perpendiculars on the development; join their tops to give the cut edge of the development.",
              "Add a small overlap (about 5 mm) at one end of the stretch-out line for a sheet-metal joint, called the seam allowance. Mark fold lines (the perpendiculars at the divisions) with a dash-dot thin line - these are the lines along which the sheet is folded. A complete development drawing should carry the seam allowance, the fold lines, and labels matching the front view vertices.",
            ],
            bullets: [
              "Development: flat layout of a solid's lateral surface; folding reconstructs the solid.",
              "Parallel-line method: for solids with parallel lateral edges - prisms and cylinders.",
              "Stretch-out line: equal to the perimeter (prism) or circumference (cylinder); divided into equal parts.",
              "Erect perpendiculars at each fold; transfer element heights from the front view.",
              "Square prism 30 mm side, 50 mm high: stretch-out 120 mm, 4 divisions of 30 mm.",
              "Cylinder 30 mm dia, 50 mm high: stretch-out pi x 30 = 94.2 mm, divided into 12 parts.",
              "Truncated prism: element heights vary; transfer the cut heights from the front view.",
            ],
            table: {
              caption: "Parallel-line development of common solids.",
              headers: ["Solid", "Stretch-out length", "Divisions"],
              rows: [
                ["Square prism 30 mm side, 50 mm high", "120 mm (4 x 30)", "4 equal"],
                ["Hexagonal prism 25 mm side, 60 mm high", "150 mm (6 x 25)", "6 equal"],
                ["Cylinder 30 mm dia, 50 mm high", "94.2 mm (pi x 30)", "12 equal chords"],
                ["Cylinder 50 mm dia, 60 mm high", "157 mm (pi x 50)", "12 equal chords"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Parallel-line development of a square prism",
              caption:
                "Each stage fixes one feature of the development.",
              stages: [
                { label: "Stretch-out line 120 mm", note: "perimeter of the square base" },
                { label: "Divide into 4 parts of 30 mm", note: "label 1, 2, 3, 4, 1" },
                { label: "Erect perpendiculars at each fold", note: "length 50 mm = prism height" },
                { label: "Transfer cut heights if truncated", note: "from the front view" },
                { label: "Join tops; add bases and seam", note: "complete pattern" },
              ],
            },
            callout: {
              type: "tip",
              title: "Mark fold lines with dash-dot",
              body: "The perpendiculars at each division of the stretch-out line are fold lines - the sheet is bent along them. Mark them with a thin dash-dot line (IS 696 type F) and label them with the vertex numbers of the front view (1, 2, 3, 4). The fabricator reads the fold lines directly off the drawing; unmarked fold lines lead to wrong bends and scrap metal.",
            },
            keyTerms: [
              { term: "Development", definition: "The flat layout of a solid's lateral surface; folding it reconstructs the solid." },
              { term: "Parallel-line method", definition: "Development method for solids with parallel lateral edges (prisms, cylinders); uses a stretch-out line and perpendiculars." },
              { term: "Stretch-out line", definition: "A horizontal line equal in length to the perimeter or circumference of the solid; carries the fold divisions." },
              { term: "Fold line", definition: "A perpendicular at a stretch-out division, along which the sheet is folded; drawn as a dash-dot thin line." },
              { term: "Seam allowance", definition: "A small overlap (about 5 mm) at one end of the stretch-out line for joining the sheet edges." },
            ],
            examQuestions: [
              {
                q: "Define the development of a solid. State the parallel-line method and develop the lateral surface of a square prism of 30 mm side and 50 mm height, also showing the development if the prism is cut by a plane perpendicular to the VP and inclined at 30 deg to the HP, bisecting the front face.",
                marks: 7,
                outline: [
                  "Define development as the flat layout of the lateral surface; folding reconstructs the solid.",
                  "State the parallel-line method: stretch-out line equal to perimeter; perpendiculars at folds; transfer heights.",
                  "Stretch-out line 4 x 30 = 120 mm; divide into 4 parts of 30 mm; label 1, 2, 3, 4, 1.",
                  "Erect perpendiculars of 50 mm height at each fold; the four rectangles are the four lateral faces.",
                  "From the front view, the cut at 30 deg bisecting the front face gives cut heights 41.3 mm and 58.7 mm at the front corners, with corresponding heights at the back.",
                  "Transfer these cut heights to the perpendiculars on the development; join the tops to give the cut edge.",
                  "Add fold lines (dash-dot), labels matching the front view, and a small seam allowance at one end.",
                ],
              },
              {
                q: "What is the stretch-out line of a cylinder of diameter 40 mm?",
                marks: 2,
              },
              {
                q: "State the type of line used to mark fold lines on a development and why.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Radial-line method for pyramids and cones; truncated solids",
            body: [
              "The radial-line method develops solids whose lateral surface consists of triangular faces meeting at a common apex - pyramids and cones. The method draws an arc of radius equal to the slant height from the apex, marks off chord lengths equal to the base edges along the arc, and joins the points to the apex. The result is a fan-shaped development of the lateral surface.",
              "Worked example: develop the lateral surface of a square pyramid of 30 mm base side and 50 mm height. Compute the slant height l: l squared = h squared + (a/2) squared = 2500 + 225 = 2725, so l = 52.2 mm. Draw a horizontal line for the apex; from the apex draw an arc of radius 52.2 mm. Set the compass to the base side 30 mm; step off four equal chords along the arc to give points 1, 2, 3, 4. Join each point to the apex; the four triangles are the four lateral faces. Join 1-2-3-4-1 along the arc to give the base edge of the development.",
              "Worked cone: develop the lateral surface of a cone of 25 mm base radius and 60 mm height. Slant height l = root(60 squared + 25 squared) = root(3600 + 625) = root(4225) = 65 mm. Draw an arc of radius 65 mm from the apex. The arc length must equal the circumference of the base: 2 x pi x 25 = 157 mm. To lay off 157 mm along the arc, divide the base circle into 12 equal arcs (each of chord 2 x 25 x sine 15 = 12.94 mm) and step off 12 such chords along the development arc. The result is a fan-shaped sector subtending an angle of (r/l) x 360 = (25/65) x 360 = 138.5 deg at the apex.",
              "Truncated pyramid or cone: when a pyramid or cone is cut by a plane (typically parallel to the base or inclined), the development of the truncated lateral surface requires the true lengths of the truncated elements. Each element of the solid is a line from the apex to a base vertex (pyramid) or a generator (cone); the truncation cuts each element at a different distance from the apex. Find the true length of each truncated element (by rotation or by an auxiliary view), then mark the truncated points along the corresponding radial lines of the development; join them to give the cut edge.",
              "Worked truncated cone: a cone of 25 mm base radius and 60 mm height is cut by a plane parallel to the base at 30 mm above the base. Develop the lateral surface of the truncated portion. The slant height is still 65 mm; the truncation cuts each generator at a distance from the apex of (60 - 30)/60 x 65 = 32.5 mm. Draw the full development as before (arc of radius 65 mm, 12 chords); then draw an inner arc of radius 32.5 mm from the same apex; the area between the two arcs is the development of the frustum. Add the top circular base (a circle of radius 32.5 x (25/65) = 12.5 mm) and the bottom base (circle of radius 25 mm) for the complete development.",
              "Common slips: stepping off the wrong chord length along the arc (the chord must equal the base edge or its division; the arc length must equal the circumference, but the chord length is shorter than the corresponding arc); forgetting that the truncated element lengths must be true lengths, not apparent lengths in one view; not adding the bases. Practise one square pyramid and one cone before the exam; the patterns repeat for any base shape.",
            ],
            bullets: [
              "Radial-line method: for solids whose lateral faces meet at a common apex - pyramids and cones.",
              "Draw an arc of radius equal to the slant height l; step off base-edge chords along it.",
              "Square pyramid 30 mm side, 50 mm high: l = root(2500 + 225) = 52.2 mm; 4 chords of 30 mm.",
              "Cone r=25, h=60: l = 65 mm; arc length 157 mm; sector angle (25/65) x 360 = 138.5 deg.",
              "Truncated cone: full arc (l) plus inner arc at the truncation distance from apex.",
              "True lengths of truncated elements found by rotation or auxiliary view.",
              "Slip: chord length < arc length; verify by counting the 12 chords to total the circumference.",
            ],
            table: {
              caption: "Radial-line development of pyramids and cones.",
              headers: ["Solid", "Slant height l", "Arc details"],
              rows: [
                ["Square pyramid 30 mm side, 50 mm high", "52.2 mm", "4 chords of 30 mm"],
                ["Hexagonal pyramid 25 mm side, 60 mm high", "62.5 mm", "6 chords of 25 mm"],
                ["Cone r=25, h=60", "65 mm", "12 chords of 12.94 mm; sector 138.5 deg"],
                ["Frustum r1=25, r2=12.5, h=30", "32.5 mm (top)", "two arcs: 65 mm and 32.5 mm"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Radial-line development of a cone",
              caption:
                "Five steps from slant height to the complete fan-shaped development.",
              steps: [
                { label: "Compute slant height l = root(h^2 + r^2)", note: "for cone r=25, h=60: l = 65 mm" },
                { label: "Draw arc of radius l from apex", note: "the outer boundary" },
                { label: "Divide base circle into 12 equal arcs", note: "chord = 2r sine 15 deg" },
                { label: "Step off 12 chords along the development arc", note: "sector angle (r/l) x 360" },
                { label: "For frustum, add inner arc at truncation distance", note: "true length of truncated generators" },
              ],
            },
            callout: {
              type: "warning",
              title: "Step chords, not arc lengths",
              body: "When developing a cone, the arc length must equal the base circumference, but the chords you step off are straight lines shorter than the arcs they subtend. Use the chord length 2 r sine(180/n) for n divisions, not the arc length 2 pi r / n. With 12 divisions the chord is 12.94 mm but the arc is 13.09 mm - small error per step but 1.8 mm over 12 steps, enough to misalign the closing seam.",
            },
            keyTerms: [
              { term: "Radial-line method", definition: "Development method for solids with lateral faces meeting at an apex; arc of radius equal to slant height, chords equal to base edges." },
              { term: "Slant height l", definition: "Distance from apex to a base edge (pyramid) or base tangent (cone); l squared = h squared + (a/2) squared for a pyramid, h squared + r squared for a cone." },
              { term: "Sector angle", definition: "Angle subtended at the apex by the development arc of a cone; equals (r/l) x 360 deg." },
              { term: "Frustum", definition: "The portion of a pyramid or cone between two parallel cutting planes; its development needs two arcs of different radii." },
            ],
            examQuestions: [
              {
                q: "Explain the radial-line method of development. Develop the lateral surface of a cone of 25 mm base radius and 60 mm height. Also develop the lateral surface of the frustum obtained when the cone is cut by a plane parallel to the base at 30 mm above the base.",
                marks: 7,
                outline: [
                  "Explain the radial-line method: arc of radius equal to slant height; chords equal to base divisions; join to apex.",
                  "Compute slant height l = root(60^2 + 25^2) = root(3600 + 625) = 65 mm.",
                  "Draw an arc of radius 65 mm from the apex; the arc length must equal 2 pi r = 157 mm.",
                  "Divide the base circle into 12 equal arcs (chord 2 x 25 x sine 15 = 12.94 mm); step off 12 chords along the development arc.",
                  "Sector angle = (r/l) x 360 = (25/65) x 360 = 138.5 deg.",
                  "For the frustum: the cut is at 30 mm above base; truncation distance from apex = (60-30)/60 x 65 = 32.5 mm.",
                  "Draw an inner arc of radius 32.5 mm; the development of the frustum is the area between the two arcs.",
                ],
              },
              {
                q: "What is the slant height of a square pyramid of 30 mm base side and 50 mm height?",
                marks: 2,
              },
              {
                q: "Why are 12 divisions used in the development of a cone? What is the chord length per division if r = 25 mm?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Intersection of solids - cylinder-cylinder, prism-cylinder",
            body: [
              "When two solids intersect (penetrate each other), the curve along which their surfaces meet is called the curve of intersection or interpenetration curve. It is essential in sheet-metal work (ducts joining at angles, pipe branches, hopper-to-pipe joints) and in castings (a boss on a cylindrical housing). The curve is found by plotting points common to both solids on a series of cutting planes.",
              "Method: take a series of cutting planes (usually parallel to one of the reference planes or to an axis) that cut both solids in lines - either straight lines (prism-prism) or circles (cylinder-cylinder, prism-cylinder). The intersection of the two cut lines on each cutting plane is a point on the curve of intersection. Repeat for several cutting planes; the points lie on the curve.",
              "Worked example: two cylinders of 40 mm diameter intersect at right angles, their axes meeting at a point. One cylinder is horizontal (axis perpendicular to VP), the other vertical (axis perpendicular to HP). To find the curve of intersection: take a series of horizontal cutting planes (perpendicular to the vertical cylinder's axis). Each plane cuts the vertical cylinder in a circle of 40 mm diameter (seen in plan) and the horizontal cylinder in two parallel horizontal lines (seen in elevation). The intersection of the circle and the two lines gives two points on the curve. Repeat for several planes (say 8) symmetrically placed about the axis; plot the points in elevation; join them with a smooth curve.",
              "Worked prism-cylinder: a square prism of 40 mm side penetrates a vertical cylinder of 60 mm diameter at right angles, the prism axis perpendicular to VP. The curve of intersection is the locus of points where the prism's lateral faces meet the cylinder. Take vertical cutting planes parallel to the prism's axis: each plane cuts the prism in two vertical lines (its lateral faces) and the cylinder in a rectangle (two vertical lines on the cylinder surface). The four intersections give four points on the curve. Repeat for several planes; the curve consists of two arcs on the cylinder corresponding to the prism's two visible faces.",
              "Special cases simplify the curve. Two cylinders of equal diameter meeting at right angles give a curve of intersection that is two ellipses (or two straight lines in the limiting case of equal diameters - the 'mitre joint' used in plumbing). A prism meeting a cylinder of equal width gives straight-line intersections (the prism's lateral faces are tangent to the cylinder along their full length). A cone-cylinder intersection gives a more complex curve, typically a fourth-order algebraic curve.",
              "In sheet-metal work, the curve of intersection must be developed onto each solid's pattern: the hole to be cut in the larger solid must match the outline of the smaller solid along the intersection curve. This is done by transferring the intersection points from the principal views to the stretch-out line of each development - the same parallel-line technique as in section 4.1, now applied to two solids at once.",
            ],
            bullets: [
              "Curve of intersection: the curve along which the surfaces of two solids meet when they penetrate each other.",
              "Method: take a series of cutting planes; each cuts both solids in lines; their intersections are points on the curve.",
              "Cylinder-cylinder right angle: horizontal cutting planes give a circle on one, two parallel lines on the other.",
              "Prism-cylinder: vertical cutting planes parallel to prism axis give two lines on each.",
              "Two equal cylinders at right angles: curve is two ellipses (mitre joint gives straight lines).",
              "Cone-cylinder intersection: fourth-order algebraic curve.",
              "Developments must transfer intersection points to the stretch-out line of each solid.",
            ],
            table: {
              caption: "Intersection cases by pair of solids.",
              headers: ["Pair", "Cutting plane", "Curve type"],
              rows: [
                ["Cylinder-cylinder right angle", "horizontal", "smooth curve, two arcs"],
                ["Two equal cylinders right angle", "horizontal", "two ellipses (mitre = lines)"],
                ["Prism-cylinder right angle", "vertical parallel to prism axis", "two arcs on cylinder"],
                ["Cone-cylinder", "various", "fourth-order algebraic curve"],
                ["Prism-prism right angle", "horizontal", "straight line segments"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Curve of intersection of two cylinders at right angles",
              caption:
                "Top layer is the front view of the curve; lower layers are the cutting planes that generate the points.",
              layers: [
                { label: "Front view: smooth curve joining plotted points", note: "the visible intersection curve" },
                { label: "Top view: vertical cylinder as circle", note: "cutting planes shown as horizontal lines" },
                { label: "Cutting planes 1 to 8", note: "each plane cuts both solids" },
                { label: "Two solids meeting at right angles", note: "axes intersect at a point" },
              ],
            },
            callout: {
              type: "exam",
              title: "Take at least 8 cutting planes",
              body: "An intersection curve drawn from 4 cutting planes is too coarse for full marks; 8 planes symmetrically placed about the axis give a smooth, convincing curve. Always include the extreme planes (where the curve touches the silhouette of each solid) and the plane through the axis - these give the defining points of the curve.",
            },
            keyTerms: [
              { term: "Curve of intersection", definition: "The curve along which the surfaces of two solids meet when they penetrate each other." },
              { term: "Interpenetration", definition: "The mutual penetration of two solids; the curve of intersection is the boundary between them." },
              { term: "Cutting plane method", definition: "Method of finding intersection points by taking planes that cut both solids in lines whose intersections are points on the curve." },
              { term: "Mitre joint", definition: "The straight-line intersection obtained when two equal cylinders meet at right angles - used in plumbing." },
            ],
            examQuestions: [
              {
                q: "Explain the method of determining the curve of intersection of two solids. Two cylinders of 40 mm diameter meet at right angles with their axes intersecting. Draw the projections showing the curve of intersection.",
                marks: 7,
                outline: [
                  "Explain the cutting-plane method: take planes that cut both solids in lines; their intersections are points on the curve.",
                  "Draw the two cylinders in three views; one cylinder horizontal (axis perp VP), the other vertical (axis perp HP).",
                  "Take 8 horizontal cutting planes symmetrically placed about the axis of the vertical cylinder.",
                  "Each plane cuts the vertical cylinder in a circle of 40 mm dia (in plan) and the horizontal cylinder in two horizontal lines (in elevation).",
                  "The two intersections of the circle with the two lines give two points on the curve in elevation.",
                  "Repeat for all 8 planes; plot the 16 points in elevation.",
                  "Join the points with a smooth curve; include extreme points where the curve touches the silhouette of the horizontal cylinder.",
                ],
              },
              {
                q: "What is the curve of intersection when two equal cylinders meet at right angles?",
                marks: 2,
              },
              {
                q: "State the type of cutting planes used to find the intersection of a vertical cylinder and a horizontal prism.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Isometric projection fundamentals - axes, scale, lengths",
            body: [
              "Isometric projection is an axonometric pictorial in which the three principal axes of the object are drawn at 120 deg to each other - each at 30 deg to the horizontal on the drawing sheet. The three axes are conventionally drawn as one vertical and two receding at 30 deg to the left and right of vertical (or 30 deg above the horizontal to the left and right). All measurements parallel to one of these axes are drawn to the isometric scale of 0.815 (cosine 30 deg), so that the lengths along the axes appear shortened by the same factor and the three faces of a cube are equally distorted.",
              "Isometric scale. The true length L along any principal axis appears in isometric projection as L multiplied by cosine 30 = 0.815. To construct the isometric scale: draw a horizontal line OA of true length L; from A draw a 30 deg line up; from O draw a 45 deg line up; the two lines meet at a point B; drop a perpendicular from B to OA to give the isometric length at the foot of the perpendicular. The 45 deg line represents true length; the 30 deg line represents isometric length; the ratio is cosine 30 = 0.815.",
              "Isometric versus isometric drawing. Isometric projection multiplies lengths by the isometric scale 0.815 - the resulting pictorial is about 18.5 % smaller than the object. Isometric drawing (also called isometric view) skips the scale and draws true lengths along the axes; the pictorial is about 22.5 % larger than the projected version (since 1 / 0.815 = 1.225). Both look almost identical; RGPV theory questions ask for isometric projection (apply the 0.815 scale) and exam drawing questions often accept either if the construction is correct.",
              "Circles in isometric become ellipses. A circle inscribed in a square face of a cube projects as an ellipse inscribed in the isometric rhombus of that face. The four-centre approximate ellipse is the standard construction: draw the isometric rhombus, mark the midpoints of its four sides, draw four arcs (two of radius equal to half the long diagonal from the obtuse corners, two of radius equal to half the short diagonal from the acute corners) to approximate the ellipse. The minor axis of the ellipse is along the direction perpendicular to the face; the major axis is perpendicular to the minor axis.",
              "Worked example: draw the isometric projection of a 30 mm cube. Draw the three axes from a corner: one vertical up, one at 30 deg to the right of vertical, one at 30 deg to the left of vertical. Step off 30 x 0.815 = 24.5 mm along each axis to give three corners of the cube. From each of these corners, draw lines parallel to the other two axes of length 24.5 mm to give the remaining corners. The visible outline is a regular hexagon with three rhombic faces inside - the classic isometric view of a cube. Apply the same axis-and-parallels method to any right prism.",
            ],
            bullets: [
              "Isometric axes: three axes at 120 deg to each other; one vertical, two at 30 deg to horizontal left and right.",
              "Isometric scale: 0.815 = cosine 30 deg; multiply true lengths by 0.815 along the axes.",
              "Isometric projection: scale applied; isometric drawing: true lengths drawn directly (about 22.5 % larger).",
              "Circles become ellipses; four-centre approximate ellipse inscribed in the isometric rhombus.",
              "Cube isometric: hexagonal outline with three rhombic faces; axis-and-parallels method.",
              "Major axis of the ellipse is perpendicular to the face's outward normal; minor axis along the normal.",
              "Apply 0.815 scale in RGPV theory answers; either is accepted in drawing answers.",
            ],
            table: {
              caption: "Isometric projection fundamentals.",
              headers: ["Quantity", "Value", "Use"],
              rows: [
                ["Angle between isometric axes", "120 deg", "three axes from a corner"],
                ["Angle to horizontal", "30 deg", "left and right receding axes"],
                ["Isometric scale", "0.815 (cosine 30 deg)", "multiply true lengths along axes"],
                ["Inverse scale (isometric drawing)", "1.225", "true lengths drawn directly"],
                ["Cube outline in isometric", "regular hexagon", "three rhombic faces inside"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Isometric axes and the four-centre ellipse orientations",
              caption:
                "Axes: horizontal direction (x), vertical face normal (y).",
              axes: { x: "Right face -> Left face", y: "Top face -> Side face" },
              quadrants: [
                { label: "Top face: ellipse horizontal major", note: "minor axis vertical" },
                { label: "Left face: ellipse 60 deg major", note: "minor axis 30 deg right of vertical" },
                { label: "Side face: ellipse 60 deg major", note: "minor axis 30 deg left of vertical" },
                { label: "All three faces: equal distortion", note: "same four-centre ellipse construction" },
              ],
            },
            callout: {
              type: "warning",
              title: "Apply the 0.815 scale or state isometric drawing",
              body: "RGPV theory questions specifically ask for isometric projection, which requires the 0.815 scale. If you draw true lengths (isometric drawing), state clearly 'isometric drawing' so the examiner knows you have made the choice deliberately. Mixing the two - applying the scale to some axes and not others - gives a distorted pictorial that loses marks.",
            },
            keyTerms: [
              { term: "Isometric axes", definition: "Three axes drawn at 120 deg to each other; one vertical, two receding at 30 deg to the horizontal." },
              { term: "Isometric scale", definition: "Factor 0.815 = cosine 30 deg by which true lengths are multiplied along isometric axes in isometric projection." },
              { term: "Four-centre ellipse", definition: "Approximate ellipse inscribed in an isometric rhombus, drawn with four arcs of two radii from the obtuse and acute corners." },
              { term: "Isometric drawing", definition: "Quick variant of isometric projection where true lengths are drawn along the axes without applying the 0.815 scale." },
            ],
            examQuestions: [
              {
                q: "Define isometric projection. State the isometric scale and prove its value. Draw the isometric projection of a 30 mm cube, showing the three isometric axes and the isometric scale construction.",
                marks: 7,
                outline: [
                  "Define isometric projection as an axonometric pictorial with three axes at 120 deg to each other.",
                  "State that the isometric scale is cosine 30 deg = 0.815; true lengths along axes are shortened by this factor.",
                  "Prove: in isometric projection, the three principal axes are equally inclined to the plane of projection; the angle between an axis and its projection is arccos(root(2/3)) = 35.26 deg, so the projected length is cosine 35.26 = root(2/3) = 0.815.",
                  "Construct the isometric scale: draw OA = L; AB at 30 deg; AC at 45 deg; drop perpendicular from B to OA to give isometric length.",
                  "Draw three isometric axes from a corner: one vertical, two at 30 deg to horizontal left and right.",
                  "Step off 30 x 0.815 = 24.5 mm along each axis; draw parallels to complete the cube.",
                  "The outline is a regular hexagon with three rhombic faces inside - the classic isometric view of a cube.",
                ],
              },
              {
                q: "What is the angle between the three isometric axes?",
                marks: 2,
              },
              {
                q: "How does an isometric drawing differ from an isometric projection?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Isometric projection of simple solids",
            body: [
              "The isometric projection of a simple solid follows the axis-and-parallels method introduced for the cube. For a square prism of base side a and height h, draw the three axes from one lower corner; step off a (x 0.815 for projection) along the two horizontal-direction axes and h (x 0.815) along the vertical axis; complete the parallelogram faces. The top face is a rhombus of side a x 0.815; the two visible side faces are rectangles (in isometric, parallelograms) of size a x h x 0.815 squared and h x 0.815 along the relevant axes.",
              "For a cylinder, the isometric view is constructed by drawing the circular end as a four-centre ellipse inscribed in an isometric rhombus, then drawing two vertical (or receding) tangent lines connecting the top and bottom ellipses. Worked cylinder of 30 mm diameter and 50 mm height: draw the bottom ellipse in a 30 x 0.815 = 24.5 mm square (the isometric square); draw verticals at the leftmost and rightmost points of the ellipse up by 50 x 0.815 = 40.75 mm; draw the top ellipse in a parallel isometric square at the top of these verticals; the visible outline is the two verticals plus the upper half of the top ellipse and the lower half of the bottom ellipse.",
              "For a cone, the isometric view is an ellipse for the base and an apex point above the centre of the ellipse. Worked cone of 25 mm base radius and 60 mm height: draw the base ellipse in an isometric square of side 2 x 25 x 0.815 = 40.75 mm; locate the apex on a vertical through the centre of the ellipse at 60 x 0.815 = 48.9 mm above; draw two tangent lines from the apex to the ellipse to give the visible outline. The hidden generator (the one behind the apex) is shown as a short-dash line if required.",
              "For a hexagonal prism, the isometric view is constructed by boxing the prism. Draw an isometric box enclosing the prism: a rectangular box of dimensions a x a x root 3 x h x 0.815 (where a is the hexagon side and root 3 x a is the across-flats distance). Locate the six vertices of one hexagonal base inside the box; project them vertically to the other base; join the corresponding vertices. The visible vertical faces of the prism are three rhombi; the back verticals are hidden as short dashes.",
              "For a square pyramid, draw the base as a rhombus in isometric and the apex on a vertical above the centre of the base at the pyramidal height times 0.815. Worked square pyramid of 30 mm base side and 50 mm height: base rhombus of side 30 x 0.815 = 24.5 mm; apex 50 x 0.815 = 40.75 mm above the centre; four slant edges from the base vertices to the apex. The visible slant edges are the two front ones; the back slant edges are hidden if the pyramid is opaque.",
              "Common slips: drawing the top face of a prism as a true square instead of a rhombus; drawing the ellipse of a cylinder outside the isometric square (it must be inscribed in the rhombus); forgetting the 0.815 scale (results in an isometric drawing, larger than projection); drawing the back edges of an opaque solid as visible (they should be hidden as short dashes). The four-centre ellipse construction is the single most useful skill in Unit IV; practise it ten times until it becomes mechanical.",
            ],
            bullets: [
              "Square prism: three axes, step off base x 0.815 along two, height x 0.815 along vertical.",
              "Cylinder: two four-centre ellipses for the ends, vertical tangents connecting them.",
              "Cone: base ellipse + apex on a vertical through centre; two tangent lines from apex to ellipse.",
              "Hexagonal prism: boxing method - enclosing isometric box, locate six vertices, project vertically.",
              "Square pyramid: base rhombus + apex vertical above centre at height x 0.815.",
              "Back edges of opaque solids shown as short dashes; visible edges as thick continuous.",
              "Four-centre ellipse inscribed in the isometric rhombus - practise ten times.",
            ],
            table: {
              caption: "Isometric projection of simple solids (size 30 mm, height 50 mm unless noted).",
              headers: ["Solid", "Base in isometric", "Height in isometric"],
              rows: [
                ["Square prism 30 mm side, 50 mm high", "rhombus 24.5 mm side", "40.75 mm"],
                ["Cylinder 30 mm dia, 50 mm high", "ellipse in 24.5 mm rhombus", "40.75 mm"],
                ["Cone r=25, h=60", "ellipse in 40.75 mm rhombus", "48.9 mm"],
                ["Hexagonal prism 25 mm side, 60 mm high", "hexagon in 42.9 mm box", "48.9 mm"],
                ["Square pyramid 30 mm side, 50 mm high", "rhombus 24.5 mm side", "40.75 mm to apex"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Isometric projection ladder - simple solids",
              caption:
                "Bottom rung is the cube; top rung is the cone with its tangent outline.",
              tiers: [
                { label: "Cone / pyramid (ellipse + apex, tangent lines)", note: "requires tangent construction" },
                { label: "Cylinder (two ellipses + tangents)", note: "four-centre ellipse twice" },
                { label: "Hexagonal prism (boxing method)", note: "enclosing isometric box" },
                { label: "Cube / square prism (axes and parallels)", note: "the base case" },
              ],
            },
            callout: {
              type: "tip",
              title: "Construct the rhombus before the ellipse",
              body: "Always draw the isometric rhombus enclosing a circular face before attempting the four-centre ellipse. The rhombus gives the four tangent points and the four arc centres (the obtuse and acute corners). Without the rhombus, the ellipse construction has no anchor and is drawn freehand - a sure way to lose construction marks.",
            },
            keyTerms: [
              { term: "Axis-and-parallels method", definition: "Construction of an isometric view by drawing three axes from a corner and parallels to them through stepped-off points." },
              { term: "Boxing method", definition: "Construction of an isometric view by enclosing the solid in an isometric box and locating features inside it." },
              { term: "Isometric rhombus", definition: "A rhombus of side equal to the face dimension times 0.815, in which a four-centre ellipse is inscribed to represent a circular face." },
              { term: "Tangent outline", definition: "In a cone or cylinder isometric, the visible outline consisting of tangent lines from the apex (cone) or vertical tangents (cylinder) to the ellipse." },
            ],
            examQuestions: [
              {
                q: "Draw the isometric projection of a cylinder of 30 mm diameter and 50 mm height resting on its base on HP. Also draw the isometric projection of a square pyramid of 30 mm base side and 50 mm height resting on its base on HP.",
                marks: 7,
                outline: [
                  "Cylinder: draw the bottom isometric rhombus of side 30 x 0.815 = 24.5 mm.",
                  "Inscribe the four-centre ellipse in the rhombus; mark the leftmost and rightmost points.",
                  "Erect vertical tangents from these points to a height of 50 x 0.815 = 40.75 mm.",
                  "Draw the top isometric rhombus parallel to the bottom one; inscribe the top ellipse.",
                  "Visible outline: two verticals + upper half of top ellipse + lower half of bottom ellipse.",
                  "Pyramid: draw the base rhombus of side 24.5 mm; locate the centre.",
                  "Erect a vertical from the centre to a height of 40.75 mm (apex); join the apex to the four base corners for the slant edges; back slant edges hidden as short dashes.",
                ],
              },
              {
                q: "What is the boxing method of isometric projection? Where is it used?",
                marks: 2,
              },
              {
                q: "Why is a circle in isometric drawn as an ellipse? State the major and minor axes orientation for a circle on the top face.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.6",
            title: "Isometric of combinations of solids; from orthographic views",
            body: [
              "Engineering assemblies rarely consist of a single solid. A typical combination is a cylinder resting on a square prism (a bearing on a base), two prisms joined at right angles (an angle bracket), or a hemisphere on a cylinder (a domed cap). The isometric projection of a combination is drawn by projecting each component in its correct relative position and removing the hidden lines at the junction. The order of drawing matters: draw the lower or larger solid first, then add the upper or smaller solid on top.",
              "Worked example: a square prism of 40 mm side and 30 mm height has a cylinder of 30 mm diameter and 40 mm height resting centrally on its top. Draw the isometric projection. Step 1: draw the lower square prism - axes from one lower corner; step off 40 x 0.815 = 32.6 mm along two horizontal axes, 30 x 0.815 = 24.5 mm vertical; complete the prism. Step 2: locate the centre of the top face of the prism; draw the top isometric rhombus for the cylinder base of side 30 x 0.815 = 24.5 mm at this centre. Step 3: draw the bottom ellipse of the cylinder inside this rhombus (only the visible front half - the back is hidden by the prism top). Step 4: erect vertical tangents from the rhombus leftmost and rightmost points to a height of 40 x 0.815 = 32.6 mm; draw the top ellipse. The junction curve (where the cylinder meets the prism top) is the visible half of the bottom ellipse.",
              "From orthographic views to isometric: the standard method is boxing. Given the front, top and side views of an object, draw an isometric box enclosing the object - dimensions equal to the overall length, width and height (each x 0.815 for projection). Transfer measurements from the orthographic views to the isometric box along the three axes: length along one receding axis, width along the other, height along the vertical. Locate the features (corners, holes, cuts) inside the box by measuring from the appropriate faces.",
              "Worked example from orthographic: a block 40 x 30 x 25 mm has a rectangular slot 20 x 10 mm cut into its top, 10 mm deep. Given the three orthographic views, draw the isometric projection. Step 1: draw the isometric box of 40 x 30 x 25 mm (each x 0.815). Step 2: locate the slot - on the top face (a rhombus of 40 x 30 x 0.815), measure 10 mm in from the front edge (x 0.815) and 20 mm in from the left edge (x 0.815); draw a smaller rhombus inside the top face representing the slot opening. Step 3: draw vertical lines down from the slot corners to a depth of 10 mm (x 0.815 = 8.15 mm) inside the box. Step 4: connect the bottom of these verticals to give the slot's bottom face. Visible edges are the front and right slot walls; back walls hidden.",
              "Coordinate transfer rule. For any point in the orthographic views with coordinates (x, y, z) - x along the length axis, y along the width axis, z along the height axis - the isometric point is obtained by stepping off x x 0.815 along one receding axis, y x 0.815 along the other receding axis, and z x 0.815 along the vertical axis, all from the lower-front corner of the isometric box. Curved features are located by boxing the curve inside an isometric square or rhombus and using the four-centre ellipse.",
              "Common slips: misaligning the cylinder's centre on the prism's top face; forgetting that the hidden junction curve (where two solids meet) must be removed or shown as a hidden edge; mixing up which orthographic view corresponds to which isometric axis (front view -> length + height, top view -> length + width, side view -> width + height). Practise one combination (prism + cylinder) and one orthographic-to-isometric conversion; the patterns generalise to any assembly.",
            ],
            bullets: [
              "Combinations: draw lower or larger solid first, then upper or smaller; remove hidden junction lines.",
              "Prism + cylinder: cylinder centre on prism top; bottom ellipse half visible at junction.",
              "Boxing method: enclosing isometric box; transfer features along three axes.",
              "Coordinate rule: x along length axis, y along width axis, z along vertical axis, each x 0.815.",
              "Worked block 40x30x25 mm with 20x10 mm slot 10 mm deep: isometric box 32.6 x 24.5 x 20.4 mm.",
              "Curved features boxed inside an isometric square or rhombus with four-centre ellipse.",
              "Slip: front view -> length + height; top view -> length + width; side view -> width + height.",
            ],
            table: {
              caption: "Mapping orthographic views to isometric axes.",
              headers: ["Orthographic view", "Isometric axes used", "Example dimensions"],
              rows: [
                ["Front view (elevation)", "length + height", "40 mm x 25 mm"],
                ["Top view (plan)", "length + width", "40 mm x 30 mm"],
                ["Side view (profile)", "width + height", "30 mm x 25 mm"],
                ["All three combined", "length + width + height", "isometric box"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Orthographic three views versus the isometric box",
              caption:
                "Each orthographic view supplies two of the three isometric axes.",
              left: {
                heading: "Orthographic views",
                items: [
                  "Front view: length + height",
                  "Top view: length + width",
                  "Side view: width + height",
                  "Three separate flat views",
                  "Hidden edges as short dashes",
                ],
              },
              right: {
                heading: "Isometric view",
                items: [
                  "Single pictorial: length + width + height",
                  "Box enclosing the object, 0.815 scale",
                  "Features located inside the box",
                  "Three faces visible at once",
                  "Junction curves at solid-solid meeting",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Draw the lower solid first",
              body: "When drawing a combination, draw the lower or larger solid completely first (axis-and-parallels), then position the upper or smaller solid on its top. The junction curve where the two meet is the visible portion of the smaller solid's base ellipse - the hidden portion is inside the larger solid and not drawn. This order avoids erasing work later and gives the cleanest junction line.",
            },
            keyTerms: [
              { term: "Combination of solids", definition: "An assembly of two or more solids in contact; the isometric view shows the visible outline and the junction curve." },
              { term: "Junction curve", definition: "The visible curve at the meeting of two solids in a combination; the hidden portion lies inside the larger solid." },
              { term: "Boxing method (isometric)", definition: "Drawing an isometric box enclosing the object and transferring measurements from orthographic views along the three axes." },
              { term: "Coordinate transfer rule", definition: "An orthographic point (x, y, z) maps to isometric axes stepped off as x, y, z each multiplied by 0.815." },
            ],
            examQuestions: [
              {
                q: "A square prism of 40 mm side and 30 mm height has a cylinder of 30 mm diameter and 40 mm height resting centrally on its top face. Draw the isometric projection of the combination. Also, a block 40 x 30 x 25 mm has a rectangular slot 20 x 10 mm and 10 mm deep cut into its top - given its orthographic views, draw the isometric projection by the boxing method.",
                marks: 7,
                outline: [
                  "Lower prism: draw axes from one lower corner; step off 40 x 0.815 = 32.6 mm along two horizontal axes, 30 x 0.815 = 24.5 mm vertical; complete the prism.",
                  "Locate the centre of the top face of the prism; draw the top isometric rhombus of side 30 x 0.815 = 24.5 mm at this centre.",
                  "Draw the visible front half of the cylinder's bottom ellipse inside the rhombus (back hidden by the prism top).",
                  "Erect vertical tangents from the rhombus leftmost and rightmost points to a height of 40 x 0.815 = 32.6 mm.",
                  "Draw the top ellipse of the cylinder; the visible outline is the two verticals + upper half of top ellipse.",
                  "For the slotted block: draw an isometric box 32.6 x 24.5 x 20.4 mm.",
                  "Locate the slot by measuring 10 x 0.815 from the front edge and 20 x 0.815 from the left edge on the top face; draw verticals down 10 x 0.815 = 8.15 mm; connect to give the slot's bottom face; visible front and right walls shown, back hidden.",
                ],
              },
              {
                q: "What is the boxing method of converting an orthographic view to an isometric view?",
                marks: 2,
              },
              {
                q: "State which orthographic view supplies the length and height measurements for an isometric drawing.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },

    // ============================================================ UNIT V
    {
      number: 5,
      roman: "V",
      title: "CAD and Computer-Aided Drafting",
      summary:
        "Unit V takes the manual drawing vocabulary into AutoCAD: the advantages of CAD over manual drafting, the workspace and ribbon interface, essential drawing and editing commands, layers and blocks, orthographic projection from isometric views via CAD, plotting and printing setup, standard engineering symbols, and an introduction to 3D modeling in modern CAD.",
      chapter: {
        number: "05",
        title: "CAD and Computer-Aided Drafting",
        intro:
          "Unit V modernises the drawing office. From the rationale for CAD through the AutoCAD interface and essential commands, into layer management and blocks, plotting setup, and a glimpse of 3D modeling - the same projection principles of Units I-IV now applied on a digital canvas where edits are non-destructive and accuracy is to the micron.",
        inOneBreath:
          "CAD (Computer-Aided Design/Drafting) replaces the drawing board with a digital workspace; advantages include non-destructive editing, micron-level accuracy, easy duplication, layer management, automatic dimensioning, digital archiving and easy revision; AutoCAD's interface has the application menu, ribbon (tabs and panels), drawing area, command line, status bar and model/paper space toggle; essential commands include LINE (L), CIRCLE (C), ARC (A), POLYLINE (PL), TRIM (TR), EXTEND (EX), OFFSET (O), COPY (CP), MIRROR (MI), ROTATE (RO), SCALE (SC), and DIMLINEAR/DIMRADIUS for dimensioning; layers organise drawing content by function (visible outlines, hidden, centre, dimension, text, hatching) and can be frozen, locked or turned off; blocks are reusable named groups - insert the same symbol at many locations and edit once to update all; orthographic views in CAD use separate layers per view or viewports in paper space; plotting uses a sheet setup at A0-A4 with a scale (1:1 in model space, the title block in paper space at 1:1); standard engineering symbols (civil, electrical, mechanical) come as block libraries; 3D modeling in modern CAD introduces extrude, revolve, sweep and loft for solids, with shading and rendering.",
        sections: [
          {
            number: "5.1",
            title: "Introduction to CAD - advantages over manual drafting",
            body: [
              "Computer-Aided Design (CAD) is the use of a computer program to create, modify and document engineering drawings. AutoCAD, by Autodesk, is the most widely used CAD package in Indian engineering colleges and industry; other common packages are SolidWorks, CATIA, Creo, NX and the free LibreCAD/QCAD. CAD replaces the drawing board, pencils and instruments with a digital workspace where the drawing is a structured database of geometric entities rather than a static image.",
              "CAD advantages over manual drafting are dramatic. Editing is non-destructive: a single dimension change can be propagated through the drawing with one command, where manual redrawing would take hours. Accuracy is to the display resolution (microns at typical zoom), far beyond pencil work. Duplication is trivial: copy a feature a thousand times with one command. Layers separate visible outlines, hidden edges, centre lines, dimensions and text, and can be turned off, frozen or locked independently. Dimensions are associative - they update automatically when geometry changes. Storage is digital: thousands of drawings fit on a pen drive and can be transmitted worldwide in seconds.",
              "CAD also enables techniques impossible at the board. Parametric drawing constrains geometry by relationships (parallelism, tangency, equality) so changing one parameter reshapes the drawing predictably. 3D modeling builds the actual solid, from which orthographic views, sections and developments are generated automatically. Rendering and animation produce presentation visuals. CNC machines read CAD files directly to manufacture the part. Bill-of-materials and cost estimation link to the CAD database. The drawing has become a hub for the entire engineering process.",
              "Limitations and pitfalls of CAD. Initial cost of software and hardware is high; training takes weeks; drawings created in one package may not open in another without conversion (DWG, DXF, IGES, STEP file formats). Over-reliance on CAD weakens the manual drawing instincts that are still tested in RGPV exams: a student who has only ever drawn in AutoCAD often struggles to project a point on paper because the computer does the spatial reasoning. The recommended approach for BT-105 is to learn both - manual drawing for the exam, CAD for the lab and project work.",
              "Worked comparison: drawing a hexagonal prism of 25 mm side and 60 mm height in AutoCAD versus on paper. Manual: rule the hexagon with a compass and 30-60 set square, project verticals, draw the rectangle front view, dimension by hand, lettering in single stroke - about 25 minutes. AutoCAD: type POLYGON for the hexagon (six sides, 25 mm side), copy or extrude vertically 60 mm with PRESSPULL or BOX, dimension with DIMLINEAR - about 2 minutes. The drawing is also stored, editable, and can be plotted at any scale on any sheet size. The productivity gain is what justifies CAD in industry.",
            ],
            bullets: [
              "CAD: computer-aided design/drafting; replaces drawing board with a digital geometric database.",
              "Common packages: AutoCAD, SolidWorks, CATIA, Creo, NX; free LibreCAD/QCAD.",
              "Advantages: non-destructive editing, micron accuracy, easy duplication, layers, associative dimensions, digital storage.",
              "Parametric drawing, 3D modeling, rendering, CNC link - techniques impossible at the board.",
              "Limitations: high cost, training time, file-format conversion (DWG, DXF, IGES, STEP).",
              "RGPV exam is manual - learn both manual and CAD; CAD alone is insufficient for the theory paper.",
              "Worked: hexagonal prism 25 mm side, 60 mm high takes 25 min manually, 2 min in AutoCAD.",
            ],
            table: {
              caption: "CAD versus manual drafting - feature comparison.",
              headers: ["Feature", "Manual drafting", "CAD"],
              rows: [
                ["Editing a dimension", "redraw affected views", "one command, auto-propagated"],
                ["Accuracy", "0.5 mm typical", "display resolution (microns)"],
                ["Duplication", "copy by hand each time", "COPY, ARRAY commands"],
                ["Layer management", "separate sheets or overlays", "unlimited digital layers"],
                ["Dimensioning", "manual, with arrows and numerals", "associative DIMLINEAR, auto-update"],
                ["Storage and transmission", "physical sheets, courier", "DWG file, email in seconds"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Manual drafting versus CAD workflow",
              caption:
                "Same drawing outcome, different productivity and editability.",
              left: {
                heading: "Manual drafting",
                items: [
                  "Instruments: T-square, set squares, compass, pencils",
                  "25 minutes per hexagonal prism drawing",
                  "Editing requires erasing and redrawing",
                  "One drawing per physical sheet",
                  "Skills: line hierarchy, lettering, projection",
                ],
              },
              right: {
                heading: "CAD (AutoCAD)",
                items: [
                  "Hardware: computer, mouse, printer/plotter",
                  "2 minutes per hexagonal prism drawing",
                  "Editing via single command, auto-propagation",
                  "Thousands of drawings per pen drive",
                  "Skills: commands, layers, blocks, plotting",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Keep one manual drawing per week",
              body: "RGPV's BT-105 exam is on paper, not on AutoCAD. Students who switch to CAD entirely in the second semester often lose 8-10 marks in the exam because their projection instinct has faded. Keep one manual drawing per week (a point projection, a line, a section) alongside the CAD lab work - manual skill and CAD fluency reinforce each other.",
            },
            keyTerms: [
              { term: "CAD", definition: "Computer-Aided Design/Drafting; use of a computer program to create, modify and document engineering drawings." },
              { term: "DWG", definition: "AutoCAD's native drawing file format; binary, version-specific, contains all drawing entities and layers." },
              { term: "DXF", definition: "Drawing Interchange Format; text-based CAD file format for exchange between packages." },
              { term: "Associative dimension", definition: "A dimension linked to the geometry it measures; updates automatically when the geometry changes." },
              { term: "Parametric drawing", definition: "Drawing constrained by geometric relationships (parallel, tangent, equal) so parameter changes reshape predictably." },
            ],
            examQuestions: [
              {
                q: "Define CAD. State the advantages of CAD over manual drafting and list any four limitations or pitfalls. Name three common CAD packages and one file format used for exchange between them.",
                marks: 7,
                outline: [
                  "Define CAD as computer-aided design/drafting; the drawing is a digital geometric database.",
                  "Advantages: non-destructive editing; micron accuracy; easy duplication (COPY, ARRAY); layers; associative dimensions; digital storage and transmission.",
                  "Additional capabilities: parametric drawing, 3D modeling, rendering, CNC link.",
                  "Limitations: high initial cost (software and hardware); training time; file format conversion (DWG, DXF, IGES, STEP).",
                  "Pitfall: over-reliance weakens manual drawing skill tested in RGPV theory.",
                  "Common packages: AutoCAD (Autodesk), SolidWorks (Dassault), CATIA (Dassault), Creo (PTC), NX (Siemens), LibreCAD/QCAD (free).",
                  "Exchange format: DXF (text-based, widely supported) or STEP/IGES for 3D.",
                ],
              },
              {
                q: "What is an associative dimension in CAD?",
                marks: 2,
              },
              {
                q: "Name any three CAD packages and one file format each for 2D and 3D exchange.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "AutoCAD interface - workspace, ribbon, command line",
            body: [
              "The AutoCAD application window has six main regions: the application menu (the big A at the top left), the ribbon (a tabbed panel of tools across the top), the drawing area (the central canvas where geometry appears), the command line (a text input strip at the bottom), the status bar (toggles for snap, grid, ortho, etc. along the very bottom), and the model/paper space toggle (the layout tabs at the bottom left). Each region has a specific role in the drawing workflow.",
              "The ribbon is AutoCAD's primary tool surface, organised into tabs (Home, Insert, Annotate, Parametric, View, Manage, Output, etc.) and within each tab into panels (Draw, Modify, Layers, Annotation, etc.). The Home tab carries the most-used tools: Line, Circle, Arc, Polyline in the Draw panel; Erase, Move, Copy, Rotate, Scale, Trim, Extend, Offset, Mirror in the Modify panel; Layer list in the Layers panel; Dimension tools in the Annotation panel. Users can collapse the ribbon to icons-only to maximise drawing area, or switch to the classic toolbar style via the workspace selector.",
              "The command line is the keyboard alternative to the ribbon and the fastest way to draw once commands are memorised. Type L and Enter for Line, C and Enter for Circle, A and Enter for Arc, and so on. Commands accept options at the command line: Circle asks for a centre point and then either a radius (default) or 'D' for diameter; Polyline accepts 'W' for width, 'A' for arc segments. The command line also reports what AutoCAD is doing - 'Specify first point', 'Select objects' - which guides the user through the command.",
              "The drawing area can be in model space (where the geometry is drawn at 1:1 real-world size) or paper space (where one or more layouts are prepared for plotting at a chosen scale). The status bar at the bottom toggles drawing aids: GRID (the background grid), SNAP (cursor jumps to grid intersections), ORTHO (cursor constrained to horizontal/vertical), POLAR (cursor snaps to set angles), OSNAP (object snap - cursor snaps to endpoints, midpoints, centres, tangents of existing geometry), LWT (line-weight display), MODEL/PAPER toggle.",
              "Worked setup for a new drawing: open AutoCAD; type NEW and Enter to start a drawing; type UNITS and set millimetres; type LIMITS and set 0,0 to 420,297 (A3 sheet); type GRID and ON, then ZOOM All to see the grid; click the Layer icon and create layers for OUTLINE (white, 0.7 mm), HIDDEN (cyan, dashed), CENTRE (green, dash-dot), DIM (red, 0.3 mm), TEXT (yellow). Save the drawing as BT105-sheet.dwg. This setup takes under a minute and is the foundation for every drawing in the lab.",
              "Object snap (OSNAP) is the single most useful drawing aid. With OSNAP on, the cursor snaps to precise geometric points on existing entities: ENDpoint, MIDpoint, CENtre, INTersection, TANgent, PERpendicular, NEArest. Without OSNAP, lines drawn to 'the end of another line' may miss by a fraction of a millimetre, breaking the topology of the drawing. Always enable END, MID, CEN, INT in the OSNAP settings; add TAN when drawing tangent circles.",
            ],
            bullets: [
              "Six interface regions: application menu, ribbon, drawing area, command line, status bar, layout tabs.",
              "Ribbon: tabs (Home, Insert, Annotate, View) and panels (Draw, Modify, Layers, Annotation).",
              "Command line: keyboard alternative; L for Line, C for Circle, A for Arc, PL for Polyline.",
              "Model space draws at 1:1 real-world size; paper space prepares layouts for plotting.",
              "Status bar: GRID, SNAP, ORTHO, POLAR, OSNAP, LWT, MODEL/PAPER toggles.",
              "OSNAP: snap to END, MID, CEN, INT, TAN, PER, NEA on existing geometry - the most useful aid.",
              "Worked setup: NEW, UNITS mm, LIMITS 0,0 to 420,297, GRID ON, ZOOM All, create 5 layers.",
            ],
            codeExample: {
              language: "bash",
              caption: "Setting up an A3 drawing sheet in AutoCAD.",
              code: `NEW                 ; start a new drawing
UNITS
  length type: Decimal
  precision: 0.00
  insertion scale: Millimeters
LIMITS
  lower-left: 0,0
  upper-right: 420,297
GRID ON
ZOOM All
LAYER
  New: OUTLINE   color: White   lineweight: 0.70
  New: HIDDEN    color: Cyan    linetype: DASHED
  New: CENTRE    color: Green   linetype: CENTER
  New: DIM       color: Red     lineweight: 0.30
  New: TEXT      color: Yellow
SAVEAS BT105-sheet.dwg`
            },
            diagram: {
              kind: "layers",
              title: "The AutoCAD interface regions",
              caption:
                "Top layer is the ribbon; bottom layer is the status bar; the drawing area sits between.",
              layers: [
                { label: "Application menu (A) + ribbon (Home, Insert, Annotate tabs)", note: "tools and tabs at the top" },
                { label: "Drawing area (model or paper space)", note: "the canvas where geometry appears" },
                { label: "Layout tabs (Model, Layout1, Layout2)", note: "model/paper space toggle" },
                { label: "Command line + status bar (snap, grid, ortho, osnap)", note: "input and drawing aids at the bottom" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise the single-letter shortcuts",
              body: "L (Line), C (Circle), A (Arc), PL (Polyline), TR (Trim), EX (Extend), O (Offset), CP (Copy), MI (Mirror), RO (Rotate), SC (Scale), M (Move), E (Erase). These twelve commands cover 80 % of routine AutoCAD work and are three to five times faster than clicking the ribbon. The command line is the way AutoCAD professionals draw.",
            },
            keyTerms: [
              { term: "Ribbon", definition: "AutoCAD's tabbed tool surface across the top; organises tools into tabs and panels." },
              { term: "Command line", definition: "The text input strip at the bottom; accepts typed commands and options and reports AutoCAD's prompts." },
              { term: "Model space", definition: "The drawing area where geometry is drawn at 1:1 real-world size; the canonical drawing data." },
              { term: "Paper space (layout)", definition: "A sheet-oriented view used for plotting; carries the title block, viewports and annotations at the plot scale." },
              { term: "OSNAP", definition: "Object snap - cursor snaps to precise points on existing geometry (END, MID, CEN, INT, TAN, PER, NEA)." },
            ],
            examQuestions: [
              {
                q: "Describe the AutoCAD interface with its main regions. State the role of the ribbon, the command line and the status bar. List any four object snap modes and explain how they help in accurate drawing.",
                marks: 7,
                outline: [
                  "Describe the six regions: application menu (big A), ribbon, drawing area, command line, status bar, layout tabs.",
                  "Ribbon: tabbed tool surface with tabs (Home, Insert, Annotate) and panels (Draw, Modify, Layers, Annotation).",
                  "Command line: text input at the bottom; accepts typed commands and options; reports prompts like 'Specify first point'.",
                  "Status bar: toggles for GRID, SNAP, ORTHO, POLAR, OSNAP, LWT, MODEL/PAPER.",
                  "Object snap modes: ENDpoint (snap to line ends), MIDpoint (snap to midpoint), CENtre (snap to circle/arc centre), INTersection (snap to entity intersections), TANgent, PERpendicular, NEArest.",
                  "Explain that OSNAP snaps the cursor to precise geometric points on existing entities, preventing the millimetre errors that break the topology of the drawing.",
                  "Mention that END, MID, CEN, INT should always be enabled; TAN added when drawing tangent circles.",
                ],
              },
              {
                q: "What is the difference between model space and paper space in AutoCAD?",
                marks: 2,
              },
              {
                q: "Name any four status-bar toggles in AutoCAD and state one use of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Essential drawing and editing commands",
            body: [
              "AutoCAD's drawing commands create new entities; editing commands modify existing ones. The essential drawing set is LINE (L), CIRCLE (C), ARC (A), POLYLINE (PL), POLYGON (POL), ELLIPSE (EL), RECTANGLE (REC), HATCH (H), TEXT (T). Each has options invoked by typing the option letter at the command line. LINE draws a series of connected line segments ending with Enter; CIRCLE accepts centre + radius (default), centre + diameter (D), or 3-point (3P); ARC accepts 3-point, start-centre-end, or start-end-radius; POLYLINE draws connected segments of uniform width that can include arcs.",
              "The essential editing set is ERASE (E), MOVE (M), COPY (CP), ROTATE (RO), SCALE (SC), MIRROR (MI), OFFSET (O), TRIM (TR), EXTEND (EX), FILLET (F), CHAMFER (CHA), BREAK (BR), JOIN (J), ARRAY (AR), EXPLODE (X). Each editing command asks 'Select objects' (click entities, drag a window, or type ALL); Enter confirms the selection and the command proceeds. Object selection can be by single pick, window (left-to-right selects entities fully inside), crossing window (right-to-left selects entities partially inside), or by properties (QSELECT).",
              "Worked example - draw a hexagonal prism of 25 mm side and 60 mm height in 3D using AutoCAD: command sequence is shown in the code block below. Worked example - draw a circle of 30 mm diameter inside a square of 40 mm side, centred: RECTANGLE 0,0 to 40,40; CIRCLE with centre at 20,20 (use OSNAP INT or type coordinates) and D 30. Worked example - fillet two lines at radius 10: FILLET, R 10, select the first line, select the second line; the lines trim to the fillet arc automatically.",
              "Dimensioning commands. DIMLINEAR (DLI) places a horizontal or vertical dimension between two points; DIMALIGNED (DAL) places a dimension aligned with the line between two points; DIMRADIUS (DRA) dimensions a circle or arc with the radius; DIMDIAMETER (DDI) with the diameter; DIMANGULAR (DAN) dimensions the angle between two lines; DIMBASELINE (DBA) chains dimensions from a common baseline; DIMCONTINUE (DCO) chains dimensions end-to-end. Dimensions are placed on the DIM layer with arrows and numerals following the IS 696 conventions; the dimension style (DIMSTYLE, D) sets arrow size, text height, units.",
              "Layers and layer management. The LAYER command opens the Layer Properties Manager where layers are created, named, given colour, linetype and lineweight. The current layer is the one on which new entities are drawn; switch by clicking a layer in the drop-down or by CL (current layer) option. Layers can be turned OFF (invisible, not plotted), FROZEN (invisible and not regenerated - saves time on large drawings), LOCKED (visible but not editable), or given a PLOT property (no-plot layers are visible but not plotted, useful for construction lines).",
              "Blocks and inserts. A block is a named collection of entities treated as a single object. Define a block with BLOCK (B): name it, select the entities, choose a base point. Insert a block with INSERT (I): specify the block name, insertion point, scale and rotation. The same block inserted many times stores only one definition - the drawing file stays small. Edit a block with BEDIT (block editor) and all insertions update automatically. Blocks are the standard way to manage repeated symbols - bolts, holes, surface-finish symbols, title-block cells.",
              "Worked block example: define a 5 mm hole as a block. Draw a circle of 5 mm diameter with centre at 0,0; BLOCK, name it HOLE5, base point 0,0, select the circle. INSERT HOLE5 at (20, 20), (40, 20), (60, 20) - three insertions on a flange. To change the hole diameter to 6 mm, BEDIT HOLE5, change the circle diameter to 6, save the block; all three insertions update instantly. This is the power of blocks - edit once, update everywhere.",
            ],
            bullets: [
              "Drawing commands: LINE (L), CIRCLE (C), ARC (A), POLYLINE (PL), POLYGON (POL), RECTANGLE (REC), HATCH (H), TEXT (T).",
              "Editing commands: ERASE (E), MOVE (M), COPY (CP), ROTATE (RO), SCALE (SC), MIRROR (MI), OFFSET (O), TRIM (TR), EXTEND (EX).",
              "Selection: single pick; window (left-right, fully inside); crossing (right-left, partially inside); ALL.",
              "Dimensioning: DIMLINEAR, DIMALIGNED, DIMRADIUS, DIMDIAMETER, DIMANGULAR, DIMBASELINE, DIMCONTINUE.",
              "Layers: TURN OFF, FREEZE, LOCK; no-plot layers for construction lines.",
              "Blocks: define with BLOCK, insert with INSERT; edit once with BEDIT to update all insertions.",
              "Worked: HOLE5 block at 5 mm diameter, inserted 3 times, edited to 6 mm - all three update.",
            ],
            codeExample: {
              language: "bash",
              caption: "AutoCAD command sequence for drawing a hexagonal prism (25 mm side, 60 mm high) and dimensioning it.",
              code: `POLYGON 6         ; hexagon
  Specify center: 100,100
  Inscribed in circle (I) / Circumscribed (C): C
  Specify radius: 25
; top view hexagon complete
RECTANGLE 0,0  100,60     ; front view bounding box 100 wide, 60 high
LINE  100,60  110,60      ; project one vertex up
LINE  100,0   110,0
RECTANGLE 110,0  210,60   ; front view rectangle (height 60)
TRIM
  Select cutting edges: <the rectangle>
  Select objects to trim: <projected lines>
DIMLINEAR
  First extension line origin: 110,0
  Second extension line origin: 210,0
  Dimension line location: 215,-15
SAVE`
            },
            diagram: {
              kind: "flow",
              title: "AutoCAD drawing-and-editing workflow",
              caption:
                "Five stages from blank drawing to a dimensioned, saved file.",
              steps: [
                { label: "Draw primitives (LINE, CIRCLE, POLYGON)", note: "create base geometry on OUTLINE layer" },
                { label: "Edit (TRIM, EXTEND, OFFSET, FILLET)", note: "shape the geometry to final form" },
                { label: "Organise (LAYER, BLOCK)", note: "assign layers; group repeated symbols as blocks" },
                { label: "Dimension (DIMLINEAR, DIMRADIUS)", note: "place associative dimensions on DIM layer" },
                { label: "Save (SAVE, SAVEAS)", note: "write DWG file; back up regularly" },
              ],
            },
            callout: {
              type: "exam",
              title: "Use OSNAP, not coordinates",
              body: "Draw lines to endpoints and intersections using OSNAP rather than typing coordinates. Coordinates accumulate rounding errors; OSNAP gives exact snaps to existing geometry. Enable END, MID, CEN, INT in the OSNAP settings before starting any drawing; add TAN when drawing tangent circles. A drawing with broken topology (lines that miss by 0.001 mm) is invisible to the eye but breaks dimensioning, hatching and 3D operations.",
            },
            keyTerms: [
              { term: "Polyline (PL)", definition: "A connected sequence of line and arc segments treated as a single entity; can have uniform width." },
              { term: "Trim (TR)", definition: "Editing command that cuts entities at cutting edges selected by the user; trims lines and arcs to their intersection." },
              { term: "Offset (O)", definition: "Editing command that creates a parallel copy of an entity at a specified distance; used for walls, slots, contours." },
              { term: "Block", definition: "A named collection of entities treated as a single object; inserted many times, edited once to update all insertions." },
              { term: "DIMSTYLE", definition: "A named set of dimension parameters (arrow size, text height, units, precision); controls the appearance of dimensions." },
            ],
            examQuestions: [
              {
                q: "List any six drawing commands and six editing commands in AutoCAD with their single-letter shortcuts. Explain the use of layers and blocks in organising a drawing. Define a block named HOLE5 and insert it three times; describe how to change all insertions to 6 mm diameter.",
                marks: 7,
                outline: [
                  "Drawing commands: LINE (L), CIRCLE (C), ARC (A), POLYLINE (PL), POLYGON (POL), RECTANGLE (REC), HATCH (H), TEXT (T).",
                  "Editing commands: ERASE (E), MOVE (M), COPY (CP), ROTATE (RO), SCALE (SC), MIRROR (MI), OFFSET (O), TRIM (TR), EXTEND (EX).",
                  "Layers: create with LAYER; assign colour, linetype, lineweight; current layer receives new entities; turn off, freeze, lock, no-plot.",
                  "Blocks: define with BLOCK (name, entities, base point); insert with INSERT (block name, point, scale, rotation).",
                  "Edit a block with BEDIT; all insertions update automatically - the power of edit-once, update-everywhere.",
                  "Define HOLE5: draw circle of 5 mm dia centred at 0,0; BLOCK name HOLE5, base point 0,0, select the circle.",
                  "Insert three times: INSERT HOLE5 at (20,20), (40,20), (60,20). To change to 6 mm: BEDIT HOLE5, change circle to 6 mm dia, save the block; all three insertions update.",
                ],
              },
              {
                q: "What is the difference between a window selection and a crossing selection in AutoCAD?",
                marks: 2,
              },
              {
                q: "Name any four dimensioning commands and state one use of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Layers, blocks and inserts - management",
            body: [
              "Layers in AutoCAD are the digital analogue of the manual drawing's line hierarchy - a way to separate visible outlines, hidden edges, centre lines, dimensions, text, hatching and construction lines into independently controllable groups. Each layer has a name, a colour, a linetype (continuous, dashed, dash-dot, etc.) and a lineweight (0.13 to 2.0 mm). Entities inherit the colour and linetype of their layer by default; this is BYLAYER behaviour and is the recommended convention because it keeps the drawing consistent.",
              "Layer states. A layer can be ON (visible and plotted), OFF (invisible, not plotted), FROZEN (invisible and not regenerated - useful for large drawings to speed up display), LOCKED (visible but not editable, protecting reference data), or ISOLATED (only the selected layers visible). The PLOT property controls whether a layer is plotted: a no-plot layer is visible on screen for reference but does not appear in the printed drawing - ideal for construction lines and notes.",
              "Recommended layer set for an RGPV BT-105 drawing: OUTLINE (white, continuous, 0.7 mm) for visible outlines; HIDDEN (cyan, dashed, 0.5 mm) for hidden edges; CENTRE (green, dash-dot, 0.5 mm) for centre lines and pitch circles; DIM (red, continuous, 0.3 mm) for dimensions; TEXT (yellow, continuous, 0.3 mm) for notes and labels; HATCH (grey 8, continuous, 0.3 mm) for section hatching; CONSTRUCTION (grey 9, continuous, 0.15 mm, no-plot) for construction lines. This set mirrors the IS 696 line hierarchy and makes the drawing legible both on screen and on paper.",
              "Blocks (covered briefly in 5.3) become powerful when combined with attributes. A block attribute is a text label attached to a block that can take a different value at each insertion - the title block uses attributes for drawn-by, date, scale, sheet number, and each instance of the title block has its own values. Define attributes with ATTDEF, then include them in the block definition with BLOCK. At insertion, AutoCAD prompts for each attribute value.",
              "Worked example - a surface-finish symbol block with an attribute. Define the surface-finish symbol as a triangle with a check mark; ATTDEF for the Ra value (attribute tag RAV, prompt 'Surface roughness', default 3.2); BLOCK the symbol and the attribute together as SURF. INSERT SURF at each surface; AutoCAD prompts for the Ra value at each insertion. To list all attributes, use ATTEXT; to edit one, use EATTEDIT. The same block serves for all surfaces with different roughness values - far faster than drawing each symbol from scratch.",
              "External references (XREF) are an alternative to blocks for very large assemblies. An XREF is a separate DWG file attached to the current drawing as read-only reference; changes to the XREF file are reflected in all drawings that reference it. Use XREF for the building plan in an electrical layout drawing, or for the site plan in a civil layout. The current drawing stays small because the XREF is not stored in it, only linked.",
              "Layer management best practice. Name layers descriptively (MECH-BOLT-M10 not LAYER1); group layers by discipline (CIVIL-, ELEC-, MECH-) for multi-discipline drawings; use the Layer Walk (LAYWALK) command to preview the drawing with only one layer visible at a time; use LAYMRG to merge two layers; use LAYDEL to delete a layer and all its entities. A well-managed layer list makes the drawing navigable for the next engineer who opens it.",
            ],
            bullets: [
              "Layers: digital analogue of line hierarchy; each has name, colour, linetype, lineweight.",
              "BYLAYER: entities inherit colour and linetype from their layer; recommended convention.",
              "Layer states: ON, OFF, FROZEN, LOCKED, ISOLATED; PLOT property for no-plot reference layers.",
              "Recommended set: OUTLINE, HIDDEN, CENTRE, DIM, TEXT, HATCH, CONSTRUCTION (no-plot).",
              "Attributes: text labels attached to a block, prompted at each insertion; used in title blocks.",
              "Worked SURF block: surface-finish symbol + ATTDEF for Ra value; INSERT prompts each time.",
              "XREF: external DWG attached read-only; current drawing stays small; updates flow through.",
            ],
            table: {
              caption: "Recommended layer set for an RGPV BT-105 drawing.",
              headers: ["Layer", "Colour", "Linetype", "Lineweight", "Use"],
              rows: [
                ["OUTLINE", "White", "Continuous", "0.7 mm", "Visible outlines"],
                ["HIDDEN", "Cyan", "Dashed", "0.5 mm", "Hidden edges"],
                ["CENTRE", "Green", "Dash-dot", "0.5 mm", "Centre lines"],
                ["DIM", "Red", "Continuous", "0.3 mm", "Dimensions"],
                ["TEXT", "Yellow", "Continuous", "0.3 mm", "Notes and labels"],
                ["HATCH", "Grey 8", "Continuous", "0.3 mm", "Section hatching"],
                ["CONSTRUCTION", "Grey 9", "Continuous", "0.15 mm (no-plot)", "Construction lines"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Layer management hierarchy",
              caption:
                "Bottom rung is the drawing primitive; top rung is the multi-discipline assembly.",
              tiers: [
                { label: "XREF assembly (multi-discipline)", note: "linked external DWG files" },
                { label: "Block with attributes (title block, surface symbols)", note: "reusable, prompted at insertion" },
                { label: "Layer group (OUTLINE, HIDDEN, DIM, ...)", note: "organises drawing content" },
                { label: "Drawing primitives (LINE, CIRCLE, ARC)", note: "the base entities" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always use BYLAYER",
              body: "Set entities to colour and linetype BYLAYER rather than per-entity. This way, changing a layer's colour updates every entity on it - the foundation of clean layer management. Per-entity colours and linetypes are a recipe for an inconsistent drawing that nobody can edit. The only exception is a one-off highlight on a no-plot layer for temporary analysis.",
            },
            keyTerms: [
              { term: "Layer", definition: "A named grouping of entities with a colour, linetype and lineweight; the digital analogue of the line hierarchy." },
              { term: "BYLAYER", definition: "An entity property that inherits colour and linetype from its layer; the recommended convention for consistency." },
              { term: "Attribute", definition: "A text label attached to a block that takes a different value at each insertion; prompted at INSERT time." },
              { term: "XREF (external reference)", definition: "A separate DWG file attached as a read-only reference; updates to the XREF flow through to all referencing drawings." },
              { term: "Layer state", definition: "One of ON, OFF, FROZEN, LOCKED, ISOLATED, or no-plot; controls visibility, editability and plotting of a layer." },
            ],
            examQuestions: [
              {
                q: "Explain the concept of layers in AutoCAD. State the recommended layer set for an engineering drawing, with colour, linetype and lineweight for each. Explain the use of blocks with attributes and give one worked example.",
                marks: 7,
                outline: [
                  "Define a layer as a named grouping of entities with colour, linetype and lineweight; digital analogue of line hierarchy.",
                  "Recommended set: OUTLINE (white, continuous, 0.7 mm), HIDDEN (cyan, dashed, 0.5 mm), CENTRE (green, dash-dot, 0.5 mm), DIM (red, 0.3 mm), TEXT (yellow, 0.3 mm), HATCH (grey 8, 0.3 mm), CONSTRUCTION (grey 9, no-plot).",
                  "Layer states: ON, OFF, FROZEN (not regenerated), LOCKED (visible but not editable), ISOLATED, no-plot.",
                  "BYLAYER convention: entities inherit colour and linetype from their layer; change layer to update all entities.",
                  "Block: named collection of entities treated as single object; INSERT places it many times; BEDIT updates all insertions.",
                  "Attribute: text label attached to a block; ATTDEF defines it; prompted at INSERT; EATTEDIT edits values.",
                  "Worked example: surface-finish symbol + ATTDEF for Ra value as block SURF; INSERT prompts for Ra at each surface.",
                ],
              },
              {
                q: "What is the difference between turning a layer OFF and FREEZING it?",
                marks: 2,
              },
              {
                q: "What is a block attribute? Give one use in a title block.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Orthographic from isometric via CAD; plotting and printing",
            body: [
              "Producing orthographic views from a 3D model is one of the most powerful CAD capabilities. AutoCAD's VIEW command sets the viewpoint to Front, Top, Left, Right, Back, Bottom, SW Isometric, SE Isometric, etc. The SOLPROF command profiles the 3D solid from the current viewpoint, producing 2D visible and hidden edges on separate layers. SOLVIEW creates the four standard orthographic views (front, top, side, isometric) on a single paper-space layout, and SOLDRAW generates the corresponding 2D drawings. This is the digital equivalent of the manual projection of Units I-III - automated and exact.",
              "If only a 2D drawing exists, orthographic views are drawn manually on separate layers: draw the front view; project verticals up to a top view above XY and down to a top view below XY; transfer widths via a 45 deg miter line (the classic first-angle layout aid). The same procedure as on paper, but with the speed of AutoCAD commands. Hidden edges are placed on the HIDDEN layer (cyan, dashed); centre lines on the CENTRE layer (green, dash-dot). Dimensions go on the DIM layer, placed with DIMLINEAR, DIMALIGNED, DIMRADIUS.",
              "Plotting setup. A drawing is plotted from paper space (a layout) at a defined scale on a defined sheet. Set up the layout: type LAYOUT, choose a sheet size (A0 to A4); insert the title block as a block or XREF; create a viewport with MVIEW (the window into model space); set the viewport scale with MVIEW -> PS -> Scale (1:1, 1:2, 1:5, 1:10, 1:50, 1:100). The viewport shows the model-space geometry scaled to fit the sheet. Lock the viewport scale with MVIEW -> Display Locked -> Yes to prevent accidental zoom changes.",
              "Plot command (PLOT or Ctrl+P): select the printer/plotter (a physical plotter or the DWG to PDF.pc3 virtual plotter); select the paper size (A3); select the plot area (Layout, Window, Extents, Display); select the plot scale (1:1 in paper space; the viewport already applies the model scale); select orientation (Portrait or Landscape); turn on 'Plot with plot styles' if using a CTB file (colour table that maps colours to pen widths - cyan gets 0.5 mm, red 0.3 mm, etc.); Preview before plotting. The Preview is what the printed sheet will look like.",
              "Worked plot setup for an A3 sheet at 1:5 scale: type LAYOUT -> New -> 'A3-1to5'; right-click the layout -> Page Setup -> Printer: DWG to PDF.pc3, Paper: A3, Orientation: Landscape; insert A3 title block (block or XREF) in paper space at 1:1; type MVIEW -> 0,0 to 420,297 (full sheet) -> PS -> Scale 1:5 -> select the model area to fit. Lock the viewport. Type PLOT -> Printer: DWG to PDF.pc3 -> Paper: A3 -> Scale 1:1 (paper space) -> Preview. The PDF produced is the printable drawing.",
              "Plot styles. Two types: colour-dependent (CTB - colours determine pen widths; e.g. colour 1 = red = 0.3 mm) and named (STB - each layer or entity has a named plot style). CTB is the older and still common convention; it maps the 255 AutoCAD colours to pen widths and screening percentages. A standard CTB for engineering drawing: colour 1 (red) = 0.3 mm for dimensions; colour 2 (yellow) = 0.3 mm for text; colour 3 (green) = 0.5 mm for centre lines; colour 4 (cyan) = 0.5 mm for hidden edges; colour 7 (white) = 0.7 mm for visible outlines. Apply the CTB in the Plot dialog or set it as the default in the Page Setup.",
              "Print checks before plotting. Verify the projection symbol (first-angle) is in the title block; verify all dimensions are on the DIM layer and reading from the bottom or right; verify the scale is shown both in the title block and the viewport; verify no-plot layers (CONSTRUCTION) are not set to plot; verify the line weights will print legibly at the chosen scale (a 0.15 mm line at 1:50 plot becomes 0.003 mm on paper - invisible). Preview before every plot; the Preview window is the cheapest quality check in the workflow.",
            ],
            bullets: [
              "VIEW command sets the viewpoint (Front, Top, Left, SE Isometric); SOLPROF profiles 3D to 2D.",
              "SOLVIEW and SOLDRAW create the four standard orthographic views on one paper-space layout.",
              "Manual 2D orthographic: project verticals; transfer widths via a 45 deg miter line; separate layers.",
              "Plotting from paper space: MVIEW creates a viewport; scale set in PS; lock to prevent changes.",
              "PLOT: printer/plotter, paper size, plot area, scale, orientation, plot style (CTB or STB).",
              "CTB maps 255 colours to pen widths: red 0.3, cyan 0.5, white 0.7 mm.",
              "Preview before plotting; verify projection symbol, dimensions, scale, no-plot layers.",
            ],
            codeExample: {
              language: "bash",
              caption: "Setting up an A3 paper-space layout at 1:5 scale and plotting to PDF.",
              code: `LAYOUT
  New: A3-1to5
PAGESETUP
  Printer: DWG to PDF.pc3
  Paper: ISO A3 (420 x 297 mm)
  Orientation: Landscape
  Scale: 1:1 (paper space)
INSERT A3-TITLEBLOCK 0,0 1 1 0
MVIEW
  First corner: 10,10
  Opposite corner: 410,287
  PS  Scale: 1:5
  Pan the model into view
  Display Locked: Yes
LAYER  Set: DIM  ; put dimensions here
PLOT
  Printer: DWG to PDF.pc3
  Plot area: Layout
  Plot scale: 1:1
  Plot style: acad-eg.ctb
  Preview  -> OK`
            },
            diagram: {
              kind: "pipeline",
              title: "From 3D model or 2D views to plotted sheet",
              caption:
                "Each stage is a CAD operation; the pipeline ends at the printable PDF.",
              stages: [
                { label: "Model space: 3D solid or 2D views", note: "geometry at 1:1 real-world size" },
                { label: "Paper space: layout + title block", note: "A0-A4 sheet set up at 1:1" },
                { label: "MVIEW: viewport at chosen scale", note: "1:1, 1:5, 1:50; lock to prevent zoom" },
                { label: "PLOT: select printer, scale, CTB", note: "preview before plotting" },
                { label: "Output: PDF or plotted sheet", note: "the printable engineering drawing" },
              ],
            },
            callout: {
              type: "warning",
              title: "Lock the viewport scale",
              body: "After setting the viewport scale with MVIEW -> PS, lock it with Display Locked -> Yes. Without locking, an accidental zoom inside the viewport changes the scale - the title block says 1:5 but the drawing prints at 1:4.7. This is the most common plotting slip and is invisible until the print is measured. Lock every viewport the moment its scale is set.",
            },
            keyTerms: [
              { term: "Viewport (MVIEW)", definition: "A window in paper space that displays model-space geometry at a chosen scale; the bridge between model and paper space." },
              { term: "SOLPROF", definition: "AutoCAD command that profiles a 3D solid from the current viewpoint, producing 2D visible and hidden edges on separate layers." },
              { term: "CTB (colour table)", definition: "A colour-dependent plot style that maps AutoCAD colours to pen widths and screening percentages; the standard plot style for engineering drawings." },
              { term: "Paper space (layout)", definition: "A sheet-oriented drawing environment used for plotting; carries the title block, viewports and annotations at the plot scale." },
              { term: "Plot scale", definition: "The ratio between the plotted drawing and the model; set in the viewport (model scale) and in the Plot dialog (paper space 1:1)." },
            ],
            examQuestions: [
              {
                q: "Describe the procedure for producing orthographic views from a 3D solid model in AutoCAD. Explain the setup of a paper-space layout for plotting an A3 sheet at 1:5 scale, including the viewport, plot scale and CTB plot style.",
                marks: 7,
                outline: [
                  "Use VIEW to set the viewpoint (Front, Top, Left); SOLPROF profiles the 3D solid into 2D visible and hidden edges.",
                  "SOLVIEW creates the four standard views on one layout; SOLDRAW generates the 2D drawings.",
                  "For 2D-only work: project verticals, transfer widths via a 45 deg miter line, place hidden and centre on separate layers.",
                  "Paper-space setup: LAYOUT -> New; PAGESETUP with printer DWG to PDF.pc3, A3, Landscape, scale 1:1 (paper).",
                  "Insert A3 title block at 0,0 at 1:1; MVIEW creates a viewport; PS sets the scale 1:5; lock the viewport.",
                  "PLOT: select printer, paper A3, plot area Layout, plot scale 1:1 (paper), plot style acad-eg.ctb; Preview.",
                  "CTB maps colours to pen widths: red 0.3 mm dimensions, cyan 0.5 mm hidden, white 0.7 mm visible outlines.",
                ],
              },
              {
                q: "What is a viewport in AutoCAD paper space?",
                marks: 2,
              },
              {
                q: "What is the purpose of a CTB plot style? Give two colour-to-width mappings.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.6",
            title: "Standard engineering symbols; 3D modeling intro",
            body: [
              "Engineering drawings use standard symbols to convey information compactly. BIS and ISO publish symbol libraries for civil, mechanical, electrical and piping drawings. Civil symbols include doors, windows, walls (partition, load-bearing), staircases, sanitary fittings (WC, wash basin, sink), furniture. Mechanical symbols include surface finish (Ra value with a triangle and check), welding (fillet, butt, spot - with auxiliary marks), fits and tolerances (H7/g6, plus/minus limits), threads (external, internal, simplified). Electrical symbols include resistors, capacitors, inductors, switches, transformers, motors, grounds. Piping symbols include valves (gate, globe, check, ball), fittings (elbow, tee, reducer), pipe materials.",
              "Symbols are stored as AutoCAD blocks in a library DWG file or as a tool palette. To insert a symbol, use INSERT (I) and select the block, or drag the symbol from the tool palette into the drawing. Each symbol has a base point (its insertion origin) and may carry attributes (e.g. a tag, a rating, a value). A well-organised symbol library makes the difference between a drawing that takes an hour and one that takes a day. Most CAD managers maintain a library DWG named acad-symbols.dwg containing hundreds of standard blocks.",
              "Worked mechanical symbol - surface finish. The basic surface finish symbol is a triangle with a check mark; the Ra value is written above the symbol. To use: create the symbol as a block SURF with attribute RAV (Ra value, default 3.2); INSERT SURF at the surface to be marked; AutoCAD prompts for the Ra value. For 'machined surface' the symbol is a triangle without check; for 'unmachined' the symbol is the basic triangle with a small circle. BIS IS 919 specifies the standard surface-finish symbols.",
              "Worked welding symbol. A welding symbol consists of a reference line, an arrow pointing to the joint, and a weld symbol above or below the line (above for the arrow side, below for the other side). A fillet weld is a small triangle; a butt weld is a V or U; a spot weld is a circle. Auxiliary marks (field weld flag, all-around circle, weld-all-around symbol) refine the callout. Define the welding symbol as a block WELD-FILLET with attributes for leg length and length; INSERT at each weld.",
              "Introduction to 3D modeling. Modern CAD offers three 3D modeling paradigms: wireframe (only edges, no faces - legacy), surface (faces without thickness - for sheet metal and styling), and solid (volumes with mass, moment of inertia - the engineering standard). Solid modeling commands in AutoCAD: BOX (rectangular solid), CYLINDER, CONE, SPHERE, TORUS, WEDGE, PYRAMID. Modify solids with EXTRUDE (turn a 2D profile into a solid by sweeping along a direction), REVOLVE (turn a 2D profile into a solid by rotating about an axis), SWEEP (sweep a profile along a path), LOFT (blend several profiles into a solid).",
              "Boolean operations combine solids: UNION joins two solids into one; SUBTRACT removes one solid from another (e.g. a hole drilled through a plate); INTERSECT keeps only the overlapping volume. Parametric features (FILLET, CHAMFER, SHELL, HOLE, DRAFT) modify a solid's edges and faces directly. From the 3D solid, AutoCAD generates orthographic views (SOLVIEW/SOLDRAW), sections (SECTIONPLANE), and developments (UNFOLD). The 3D model is the master data; the 2D drawing is a derivative view of it.",
              "Worked 3D example - a flange with four bolt holes. Draw a circle of 100 mm diameter (flange outline) and four circles of 10 mm diameter at 90 deg intervals on a 75 mm bolt circle. Use EXTRUDE on the outline to 10 mm thick (the flange body); use SUBTRACT with the four hole circles extruded through to drill the holes. Add a central bore of 30 mm by extruding a circle and subtracting. The resulting solid has mass, can be sectioned with SECTIONPLANE, and the orthographic views can be generated with SOLVIEW. This is the modern engineering workflow that the manual drawing of Units I-IV supports.",
            ],
            bullets: [
              "Standard symbols: civil (doors, walls, sanitary), mechanical (surface finish, welding, threads, fits).",
              "Electrical (resistor, capacitor, motor, ground), piping (valves, fittings, materials).",
              "Stored as blocks in a library DWG or tool palette; INSERT or drag to use.",
              "Surface finish: triangle + check + Ra value; mechanical surface callout per BIS IS 919.",
              "Welding: reference line + arrow + weld symbol (fillet, butt, spot); auxiliary marks.",
              "3D paradigms: wireframe, surface, solid; AutoCAD commands BOX, CYLINDER, CONE, SPHERE.",
              "EXTRUDE, REVOLVE, SWEEP, LOFT create solids; UNION, SUBTRACT, INTERSECT combine them.",
            ],
            table: {
              caption: "Common engineering symbols and their meaning.",
              headers: ["Symbol", "Discipline", "Meaning"],
              rows: [
                ["Triangle with check + Ra value", "Mechanical", "Machined surface with roughness Ra"],
                ["Small triangle on reference line", "Mechanical (welding)", "Fillet weld on arrow side"],
                ["V on reference line", "Mechanical (welding)", "Butt weld"],
                ["Circle on reference line", "Mechanical (welding)", "Spot weld"],
                ["Two parallel lines (one thick)", "Civil", "Load-bearing wall"],
                ["Circle with X inside", "Electrical", "Transformer winding"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "3D modeling operations and their inputs",
              caption:
                "Axes: input type (vertical), operation family (horizontal).",
              axes: { x: "Primitive -> Swept", y: "2D profile -> 3D solid" },
              quadrants: [
                { label: "Primitives: BOX, CYLINDER, CONE, SPHERE", note: "built-in 3D solids" },
                { label: "Swept from profile: EXTRUDE, REVOLVE", note: "most common engineering route" },
                { label: "Boolean combine: UNION, SUBTRACT, INTERSECT", note: "join, drill, intersect solids" },
                { label: "Multi-profile sweep: SWEEP, LOFT", note: "varying cross-section along a path" },
              ],
            },
            callout: {
              type: "tip",
              title: "Build a personal symbol library",
              body: "Create a library DWG (acad-symbols.dwg or a personal symbols.dwg) containing the surface-finish, welding, thread, civil sanitary and electrical symbols you use most often. Drag them in via the Tool Palettes window. Over a four-year degree this library saves hundreds of hours and ensures every drawing uses the same standard symbols - a habit that pays off immediately in the BT-105 lab and later in industry.",
            },
            keyTerms: [
              { term: "Surface finish symbol", definition: "A triangle with a check mark and an Ra value; specifies the roughness of a machined surface per BIS IS 919." },
              { term: "Welding symbol", definition: "A reference line with an arrow to the joint and a weld symbol above (arrow side) or below (other side)." },
              { term: "Solid modeling", definition: "3D modeling paradigm where solids have volume, mass and moment of inertia; the engineering standard." },
              { term: "EXTRUDE", definition: "AutoCAD command that sweeps a 2D profile along a direction to create a solid; the most common route to a 3D part." },
              { term: "SUBTRACT", definition: "Boolean operation that removes one solid from another; used to drill holes and cut slots in a base solid." },
            ],
            examQuestions: [
              {
                q: "State the need for standard engineering symbols. Describe any four standard symbols (mechanical, civil, electrical, piping) with their meaning. Explain briefly the three paradigms of 3D modeling and the AutoCAD commands EXTRUDE, REVOLVE, UNION and SUBTRACT with one worked example each.",
                marks: 7,
                outline: [
                  "Need: symbols convey information compactly; standardised by BIS/ISO so drawings are internationally legible.",
                  "Mechanical: surface finish (triangle + check + Ra); welding (reference line + arrow + weld symbol).",
                  "Civil: walls (two parallel lines, one thick for load-bearing); sanitary (WC, wash basin).",
                  "Electrical: resistor (zig-zag), capacitor (two parallel lines), transformer (circle with X), ground.",
                  "Piping: gate valve, globe valve, elbow, tee, reducer symbols.",
                  "3D paradigms: wireframe (edges only), surface (faces no thickness), solid (volume + mass).",
                  "Commands: EXTRUDE (sweep a 2D profile to a solid - flange plate from a circle); REVOLVE (rotate a profile about an axis - shaft from a rectangle); UNION (join two solids); SUBTRACT (drill a hole by subtracting a cylinder). Worked: flange 100 mm dia, 10 mm thick with four 10 mm bolt holes - EXTRUDE flange, EXTRUDE holes, SUBTRACT holes from flange.",
                ],
              },
              {
                q: "What is the AutoCAD EXTRUDE command used for?",
                marks: 2,
              },
              {
                q: "Describe the surface-finish symbol used on a machined surface per BIS.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
  ],

  // ============================================================ STUDY PLAN
  studyPlan: [
    {
      id: "weights",
      heading: "Exam weight map",
      weightedTopics: [
        { topic: "Projections of lines (true length, inclinations, traces, auxiliary plane)", weight: "10-14 marks", note: "Almost guaranteed; practise 6-8 full solves including the rotations method." },
        { topic: "Projections of solids (axis inclined to one or both planes, two- and three-step)", weight: "10-14 marks", note: "The biggest single topic; rotate about a base edge correctly every time." },
        { topic: "Sections of solids and true shape of section (auxiliary plane)", weight: "8-10 marks", note: "Mark every section vertex in order; transfer distances with the divider." },
        { topic: "Development of surfaces (parallel-line and radial-line, truncated)", weight: "8-10 marks", note: "Step chords not arc lengths; mark fold lines with dash-dot." },
        { topic: "Isometric projection (scale, four-centre ellipse, simple solids and combinations)", weight: "10-12 marks", note: "Apply the 0.815 scale; construct the rhombus before the ellipse." },
        { topic: "Projection of points in four quadrants and first-angle method", weight: "4-6 marks", note: "Foundational; do not skip - every later unit assumes it." },
        { topic: "CAD commands and AutoCAD interface (drawing, editing, layers, blocks)", weight: "6-8 marks", note: "Memorise single-letter shortcuts; layers and blocks earn easy marks." },
        { topic: "Drawing instruments, sheet sizes, dimensioning rules", weight: "4-6 marks", note: "Mostly 2-mark questions; learn IS 696 line types and IS 9609 lettering." },
        { topic: "Scales (plain, diagonal, vernier) with worked RF", weight: "3-5 marks", note: "Plain scale 1:50 to 6 m is the most common variant; mark zero on the right." },
        { topic: "Intersection of solids and standard engineering symbols", weight: "3-5 marks", note: "8 cutting planes minimum; symbol identification is short-answer material." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        { week: "Week 1", focus: "Unit I - instruments, sheet layout, scales, projection of points", tasks: ["Drawing kit, IS 696 line types, sheet sizes A0-A4, title block and first-angle symbol", "Construct a plain scale 1:50 to read metres and decimetres (max 6 m)", "Project points in all four quadrants (5 worked examples each)"] },
        { week: "Week 2", focus: "Unit II - lines and planes", tasks: ["Line parallel to one plane (3 examples) and inclined to one plane (4 examples with verification)", "Rotations and auxiliary plane methods for line inclined to both planes (3 each)", "Traces HT and VT of a line; plane parallel, perpendicular and inclined (4 examples)"] },
        { week: "Week 3", focus: "Unit III - solids in simple and inclined positions", tasks: ["Classification of solids; projections in simple position (prism, pyramid, cylinder, cone)", "Axis inclined to one plane (two-step) for a hexagonal prism and pentagonal pyramid", "Axis inclined to both planes (three-step) for a hexagonal prism and square pyramid"] },
        { week: "Week 4", focus: "Unit III sections and Unit IV development", tasks: ["Section of solids: hexagonal prism cut at 30 deg, square pyramid cut at 45 deg, true shape on auxiliary plane", "Parallel-line development: square prism, cylinder (3 examples)", "Radial-line development: square pyramid, cone and frustum (3 examples)"] },
        { week: "Week 5", focus: "Unit IV isometric and intersections", tasks: ["Isometric scale, axes, four-centre ellipse (5 ellipses for practice)", "Isometric of cube, prism, cylinder, cone, pyramid and one combination", "Intersection of two cylinders at right angles (8 cutting planes)"] },
        { week: "Week 6", focus: "Unit V CAD and full revision", tasks: ["AutoCAD interface, essential commands (L, C, A, PL, TR, EX, O, CP, MI, RO, SC)", "Layers, blocks with attributes, plotting an A3 sheet at 1:5 with CTB", "Two full past-paper-style drawings under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Revise the four-quadrant point projection table cold - it is the foundation of every later question.",
        "Memorise the isometric scale (0.815), the single-letter AutoCAD shortcuts (L, C, A, PL, TR, O, CP, MI, RO, SC), and the IS 696 line types.",
        "Practise the rotations method for a line inclined to both planes once end-to-end; verify alpha and beta by the tan theta / cos phi formula.",
        "Re-draw the plain scale 1:50 (6 m, reads m and dm) once on a fresh sheet - it is a likely 7-mark question.",
        "Re-draw the auxiliary plane method for true shape of a square pyramid cut at 45 deg - mark X1Y1 parallel to the cutting plane.",
        "Sketch the first-angle projection symbol and label its parts - omitting it loses 2-3 marks.",
        "Pack two pencils (4H construction, HB visible), an eraser, sharpener, mini-drafter, engineer's scale and compass - the instrument check is part of the exam.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Start every drawing answer with the sheet layout: border, title block, first-angle symbol, XY reference line. This earns 3-4 marks before any construction.",
        "Draw construction lines at 4H-6H first; visible outlines at HB-F 0.7-1.0 mm only after the construction is verified.",
        "For projection problems, mark the quadrant and orientation before drawing; this prevents the most common slip of misplaced views.",
        "For line and solid inclinations, label the stages explicitly (Stage 1 simple position, Stage 2 tilt to theta, Stage 3 rotate by phi') - examiners award marks for the construction logic.",
        "For sections, label every section vertex 1, 2, 3 ... in order around the boundary, including hidden-edge intersections.",
        "For isometric, construct the rhombus before the four-centre ellipse; apply the 0.815 scale to every axis measurement.",
        "Time-box: 2-mark questions in 4-5 minutes, 3-mark in 6-8 minutes, 7-mark drawing questions in 25-30 minutes; reserve the last 10 minutes for the projection symbol and dimension checks.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Drawing the front view of a HP-parallel line as true length - it is parallel to XY but shortened; the top view shows the true length.",
        "Using the apparent angle alpha in place of the true inclination theta for a line inclined to both planes - alpha is always larger than theta.",
        "Rotating the top view by phi instead of phi' = arctan(tan phi x cos theta) in step 3 of a three-step solid construction.",
        "Drawing X1Y1 perpendicular to the cutting plane instead of parallel when finding the true shape of a section.",
        "Stepping off arc length instead of chord length when developing a cone - the chord is 2 r sine(180/n), shorter than the arc.",
        "Forgetting to apply the 0.815 isometric scale and ending with an isometric drawing instead of isometric projection.",
        "Drawing the projection symbol as a plain circle instead of the truncated cone with front and top views in the method's arrangement.",
        "Using per-entity colours instead of BYLAYER in AutoCAD, breaking the consistency of layer management.",
      ],
    },
  ],
};
