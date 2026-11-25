/**
 * Academics - RGPV ME-605 (VI Semester, Mechanical Engineering): CAD Lab.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, a callout, key terms, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me605: AcademicSubject = {
  id: "me-605",
  code: "ME-605",
  title: "CAD Lab",
  semester: "VI Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete lab companion for RGPV ME-605: AutoCAD drafting, 3D solid modeling, parametric assemblies and FEA, and the CNC-to-3D-print manufacturing chain — every command, every workflow and every viva question in one place.",
  description:
    "Five units take you from the AutoCAD interface and disciplined 2D drafting — primitives, layers, dimensioning, plotted sheets — through solid modeling with Booleans, extrude, revolve and UCS control, into parametric sketches, assemblies, exploded views and bills of materials. Unit IV points the toolchain at machine components: shafts, gears, orthographic and section drawings, and finite element analysis from meshing to linear static results. Unit V closes the loop with G-code programming, toolpath simulation, STL-based FDM and SLA printing, 3D scanning and reverse engineering, and the mini project that turns a CAD model into a working prototype.",
  accentColor: "#0ea5e9",
  emoji: "CAD",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "CAD and Drafting",
      summary:
        "The drafting foundation: the AutoCAD interface and disciplined sheet setup, drawing primitives with precise coordinate entry, layers and object properties, dimensioning and tolerancing, and the complete workflow from 1:1 model geometry to a plotted A3 mechanical sheet.",
      chapter: {
        number: "01",
        title: "AutoCAD Drafting",
        intro:
          "Unit I turns the lab computer into a drafting board: screen anatomy and sheet setup, primitives and the modify toolkit, layer standards that make drawings readable, dimension styles and tolerance vocabulary, and finally the layout-viewport-plot pipeline that produces a finished drawing sheet.",
        inOneBreath:
          "Set the sheet before the first line — units in mm, limits to the sheet, grid and snap; draw with LINE, CIRCLE and PLINE, entering points by absolute, relative and polar coordinates; edit with OFFSET, TRIM, FILLET and ARRAY; keep geometry on named layers with color, linetype and lineweight drawn BYLAYER; dimension from a datum with a proper DIMSTYLE and baseline tolerances; then plot through a layout with scaled viewports, a title block and a CTB style.",
        sections: [
          {
            number: "1.1",
            title: "The AutoCAD interface and drawing setup",
            body: [
              "Every AutoCAD session opens into a workspace built around one idea: the drawing area at the centre, with commands orbiting it. The ribbon across the top arranges commands into tabs — Home, Insert, Annotate, Parametric, View and Output — and each tab into panels such as Draw, Modify, Layers and Annotation, while the Quick Access toolbar keeps Save and Undo within reach. The drawing area shows the crosshair cursor and the UCS icon marking the origin and the axes. The command line along the bottom is the real engine: every command can be typed there, and dynamic input (F12) echoes the prompts at the cursor so your eyes never leave the geometry.",
              "Disciplined setup comes before the first line. NEW opens a template file (.dwt) — acadiso.dwt for metric work — that can pre-load units, layers and dimension styles; UNITS fixes decimal millimetres with 0.00 precision and decimal degrees; LIMITS declares the working area to match the sheet, 420 x 297 for A3. GRID and SNAP are then set to helpful multiples, typically 10 and 5 mm, and ZOOM All frames the sheet on the screen. QSAVE immediately stores the drawing as a .dwg under a project-named file. Ten minutes of setup routinely saves an hour of repair later, and examiners read the title block before they read the geometry.",
              "The interface rewards typing. Short aliases launch the commonest tools — L for LINE, C for CIRCLE, REC for RECTANG, TR for TRIM, F for FILLET — while ESC cancels and Enter repeats the last command. The status bar toggles control the precision aids: F3 object snap, F7 grid, F8 ortho, F9 snap, F10 polar tracking, F11 object-snap tracking. The F2 text window scrolls the full command history when something went wrong two steps ago. In the practical exam most lost marks trace back to a skipped setup step — wrong units, no limits, or geometry drawn with object snaps off.",
            ],
            bullets: [
              "Ribbon: tabs and panels — the Home tab carries Draw, Modify, Layers and Annotation, about ninety percent of drafting commands.",
              "Command line: every command typable; aliases L, C, REC, TR, F; ESC cancels, Enter repeats the last command.",
              "Status bar toggles: F3 osnap, F7 grid, F8 ortho, F9 snap, F10 polar, F11 otrack, F12 dynamic input.",
              "Setup sequence: NEW (acadiso.dwt), UNITS (mm, 0.00), LIMITS (A3 = 420 x 297), GRID 10, SNAP 5, ZOOM All, QSAVE.",
              "A template (.dwt) pre-loads styles and layers; always QSAVE to a project-named .dwg before drawing a single line.",
            ],
            codeExample: {
              language: "text",
              caption: "The exact setup sequence for an A3 metric sheet — run it before drawing anything.",
              code: `Command: NEW                 -> template acadiso.dwt (metric)
Command: UNITS               -> Decimal, mm, precision 0.00, degrees Decimal
Command: LIMITS
  Lower-left corner  <0,0>:     0,0
  Upper-right corner <420,297>: 420,297      (A3 sheet)
Command: GRID     spacing 10
Command: SNAP     spacing 5
Command: ZOOM  ->  All          (frame the whole sheet)
Command: QSAVE                -> bracket_a3.dwg`,
            },
            diagram: {
              kind: "layers",
              title: "The AutoCAD screen, read top to bottom",
              caption: "Four bands of the interface — each one holds a different kind of control.",
              layers: [
                { label: "Ribbon", note: "tabs and panels — Home, Insert, Annotate, Parametric, View, Output" },
                { label: "Drawing area", note: "crosshairs, UCS icon and grid — where geometry lives at 1:1" },
                { label: "Command line + dynamic input", note: "type commands and options; prompts follow the cursor" },
                { label: "Status bar", note: "GRID, SNAP, ORTHO, POLAR, OSNAP toggles plus annotation scale" },
              ],
            },
            callout: {
              type: "tip",
              title: "Type, don't hunt",
              body: "Learn ten aliases cold — L, C, REC, POL, TR, EX, O (offset), MI, F, H — and keep one hand on the keyboard. Mouse-hunting ribbon panels can double the time a practice sheet takes, and the practical exam is won on time.",
            },
            keyTerms: [
              { term: "Ribbon", definition: "The tab-and-panel strip across the top of AutoCAD that groups commands by task." },
              { term: "Dynamic input", definition: "The on-cursor display (F12) that lets you type coordinates and options right at the crosshairs." },
              { term: "Template (.dwt)", definition: "A starter file that pre-loads units, layers, text and dimension styles for a standard sheet." },
            ],
            examQuestions: [
              {
                q: "Describe the important components of the AutoCAD interface with a sketch, and write the complete setup procedure you would follow to begin an A3 metric drawing sheet.",
                marks: 7,
                outline: [
                  "Draw and label the screen: ribbon with tabs and panels, Quick Access toolbar, drawing area with crosshairs and UCS icon, command line, status bar.",
                  "Explain the command line and dynamic input (F12) — every command typable, aliases like L, C, TR.",
                  "List the status bar toggles with their function keys (F3 osnap, F7 grid, F8 ortho, F9 snap, F10 polar).",
                  "Mention workspaces: Drafting and Annotation for 2D, 3D Modeling for solids.",
                  "Setup procedure: NEW with acadiso.dwt template.",
                  "UNITS to decimal mm with 0.00 precision; LIMITS to 420 x 297 for A3.",
                  "GRID 10, SNAP 5, ZOOM All, then QSAVE to a .dwg — and state why the template saves time.",
                ],
              },
              {
                q: "State the function keys used for object snap, ortho mode and grid display.",
                marks: 2,
              },
              {
                q: "What is the difference between the GRID and the SNAP mode? What do the LIMITS command and the acadiso.dwt template do?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Drawing primitives, coordinate entry and the modify toolkit",
            body: [
              "Drafting starts with a small set of primitives: LINE, CIRCLE, ARC, RECTANG, POLYGON, PLINE, ELLIPSE, POINT and HATCH. CIRCLE alone offers center-radius, two-point, three-point and tangent-tangent-radius constructions, and POLYGON sizes regular figures by an inscribed or circumscribed circle. A polyline (PLINE) chains lines and arcs into a single object that can carry width, be offset as a unit, and report its area — which is why closed plines, not loose lines, are the profile of choice for anything that will later be hatched, extruded or dimensioned as one entity.",
              "Precision comes from coordinate entry, not from a steady mouse. Absolute coordinates (x, y) locate a point from the origin; relative coordinates @dx, dy give the displacement from the last point; polar entry @dist<angle gives a length and direction — @50<45 draws 50 mm at 45 degrees. Direct distance entry combines ORTHO or POLAR tracking with a typed length. Object snaps then guarantee exact pickings: ENDpoint, MIDpoint, CENter, INTersection, TANgent, PERpendicular and NEArest, set as running modes through the OSNAP dialog. A tangent point eyeballed instead of snapped is the classic spoiled sheet.",
              "The modify toolkit turns rough geometry into a finished plate. COPY, MIRROR, OFFSET and ARRAY (rectangular or polar) multiply geometry; MOVE, ROTATE, SCALE and STRETCH reposition it; TRIM and EXTEND cut or lengthen lines to their neighbours; BREAK and JOIN split or reunite them. FILLET rounds a corner with a chosen radius — and FILLET with radius 0 simply extends two lines to a sharp corner — while CHAMFER bevels it. The professional rhythm is to draw roughly at the right size, then edit to exactness: OFFSET a wall, TRIM the overlap, FILLET the corners, and verify with DIST and LIST.",
            ],
            bullets: [
              "Primitives: LINE, CIRCLE, ARC, RECTANG, POLYGON, PLINE, ELLIPSE, POINT, HATCH — a closed PLINE is the profile of choice.",
              "Coordinate entry: absolute (x, y); relative @dx,dy from the last point; polar @dist<angle; direct distance with ORTHO or POLAR.",
              "Running object snaps (F3): END, MID, CEN, INT, TAN, PER, NEA — never eyeball a tangent or a center point.",
              "Modify toolkit: COPY, MIRROR, OFFSET, ARRAY, MOVE, ROTATE, SCALE, STRETCH, TRIM, EXTEND, BREAK, JOIN.",
              "FILLET radius 0 makes a sharp corner; radius r rounds it; CHAMFER cuts a flat bevel — verify finished sizes with DIST and LIST.",
            ],
            codeExample: {
              language: "text",
              caption: "A chamfered plate drawn with relative and polar entry, then refined.",
              code: `Command: LINE
Specify first point:             20,20
Specify next point:  @100,0      (100 right — bottom edge)
Specify next point:  @0,60       (60 up — right edge)
Specify next point:  @-70,0      (top edge stops 30 short)
Specify next point:  @-30,-30    (45-deg chamfer)
Specify next point:  20,20       (close via ENDpoint osnap)

Command: CIRCLE   center 70,50   radius 12
Command: OFFSET   distance 8     (inner wall, parallel to the outline)
Command: FILLET   Radius = 8     (round two adjacent corners)
Command: DIST                    (verify a critical length)
Command: LIST                    (verify angles and areas)`,
            },
            diagram: {
              kind: "flow",
              title: "From rough geometry to a finished plate",
              caption: "The professional rhythm: draw close to size, then edit to exactness.",
              steps: [
                { label: "Draw primitives close to size", note: "LINE, CIRCLE, PLINE with coordinate entry" },
                { label: "Clean up with TRIM and EXTEND", note: "cut lines to their neighbours" },
                { label: "Parallel walls with OFFSET", note: "offset then trim the overlaps" },
                { label: "Round or bevel with FILLET and CHAMFER", note: "radius 0 for a sharp corner" },
                { label: "Verify with DIST and LIST", note: "never submit an unchecked dimension" },
              ],
            },
            callout: {
              type: "warning",
              title: "The eyeball tax",
              body: "Clicking 'near' a center or tangent point looks fine on screen and fails every dimension check. Set running object snaps once (F3) and use coordinate entry for anything with a number in the question — the examiner measures the geometry, not your intentions.",
            },
            keyTerms: [
              { term: "Polyline (PLINE)", definition: "A single object chaining lines and arcs, able to carry width and report area; the standard profile for hatching and extrusion." },
              { term: "Object snap (OSNAP)", definition: "A mode that locks picks to exact points — endpoints, midpoints, centers, intersections, tangents." },
              { term: "Relative coordinate entry", definition: "Point input as @dx,dy measured from the last point, or @dist<angle in polar form." },
            ],
            examQuestions: [
              {
                q: "Explain the methods of coordinate entry in AutoCAD (absolute, relative, polar and direct distance) with a sketch for each, and explain any five modify commands with their function.",
                marks: 7,
                outline: [
                  "Absolute entry: (x, y) measured from the origin — example 70,50 for a circle center.",
                  "Relative entry: @dx, dy measured from the last point — example @100,0 for a horizontal edge.",
                  "Polar entry: @dist<angle from the last point — example @-30,-30 or @50<45.",
                  "Direct distance: ORTHO or POLAR on, drag the direction, type the length.",
                  "Modify commands (any five): OFFSET (parallel copy at a distance), TRIM (cut to a cutting edge), EXTEND (lengthen to a boundary), MIRROR (reflect about a line), ARRAY (rectangular or polar copies).",
                  "Note how entry methods combine: rough sketch with polar tracking, exact points with object snaps.",
                  "Close with the workflow: draw roughly, edit to size, verify with DIST and LIST.",
                ],
              },
              {
                q: "Write the command and inputs to draw a circle of radius 15 tangent to two existing lines.",
                marks: 2,
              },
              {
                q: "Differentiate between LINE and PLINE, and between TRIM and EXTEND.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Layers, linetypes and object properties",
            body: [
              "A layer is a transparent overlay that owns every object assigned to it and carries three properties for all of them: color, linetype and lineweight. The professional philosophy is BYLAYER — objects inherit their properties from their layer, so restyling a drawing means editing a handful of layers rather than thousands of objects. A mechanical sheet needs only a few: OBJECT for the visible outline, CENTER for axes, HIDDEN for concealed edges, DIM for dimensions, TEXT for notes and HATCH for sectioning. Layer 0 exists in every drawing but is reserved for block definitions, not production geometry.",
              "The LAYER command (or the Layers panel) creates layers, sets the current one, and controls visibility states. Colors use the ACI numbers — 1 red, 2 yellow, 3 green, 4 cyan, 5 blue, 6 magenta, 7 white — and the choice is functional: the CTB plot style maps each color to a pen width, so red center lines print hairline-thin while white outlines print heavy. Linetypes such as CONTINUOUS, CENTER and HIDDEN must be loaded before use, and lineweights run from 0.18 mm for hatching to 0.50 mm for the outline. Layer states then control behaviour: ON/OFF hides objects instantly, but frozen layers are additionally skipped during regeneration, which speeds up large drawings.",
              "The distinction examiners love: a layer switched OFF still regenerates with every zoom — the objects are invisible but the display work continues, and drawing extents still include them. A FROZEN layer is invisible and excluded from regeneration entirely, so big drawings visibly speed up, and zoom extents ignore the frozen content. LOCK shows a layer while blocking edits — perfect for keeping reference geometry visible but untouchable. Layer discipline is what makes a sheet readable and plottable: dimension objects dim instantly by fading the DIM layer, and a missing center line is a one-click fix instead of a redraw.",
            ],
            bullets: [
              "A layer is a transparent overlay owning color, linetype and lineweight for every object placed on it — always draw BYLAYER.",
              "Standard set: OBJECT, CENTER, HIDDEN, DIM, TEXT, HATCH; layer 0 is reserved for block definitions.",
              "OFF hides objects but they still regenerate; FREEZE hides them and skips regeneration — faster on large drawings.",
              "LOCK keeps a layer visible but uneditable; the plot flag can exclude a layer from printouts.",
              "Color choice is functional: the CTB plot style maps ACI colors to pen widths, so lineweights are decided here.",
            ],
            table: {
              caption: "A standard layer plan for a mechanical drawing sheet.",
              headers: ["Layer", "Color (ACI)", "Linetype", "Lineweight (mm)", "Contents"],
              rows: [
                ["OBJECT", "7 (white)", "Continuous", "0.50", "visible outlines and edges"],
                ["CENTER", "1 (red)", "Center", "0.25", "axes and centerlines"],
                ["HIDDEN", "4 (cyan)", "Hidden", "0.25", "concealed edges"],
                ["DIM", "3 (green)", "Continuous", "0.25", "dimensions and leaders"],
                ["HATCH", "8 (grey)", "Continuous", "0.18", "section hatching"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Layer OFF versus layer FREEZE",
              caption: "Both hide the objects — only one of them stops the computer thinking about them.",
              left: {
                heading: "Layer OFF",
                items: [
                  "objects disappear from the screen at once",
                  "still regenerated on every REGEN and zoom",
                  "still included when computing drawing extents",
                  "the quick hide while you keep sketching",
                  "no speed gain on heavy drawings",
                ],
              },
              right: {
                heading: "Layer FREEZE",
                items: [
                  "objects disappear just the same",
                  "skipped during regeneration — drawings speed up",
                  "ignored by zoom extents",
                  "the choice for detail packs you rarely revisit",
                  "must be THAWed to edit or plot again",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The guaranteed viva pair",
              body: "OFF vs FREEZE is asked almost every session. One-line answer: 'OFF hides the layer but it still regenerates; FREEZE hides it and removes it from regeneration, so freezing speeds up large drawings — that is why long-running layers are frozen, not switched off.'",
            },
            keyTerms: [
              { term: "Layer", definition: "A transparent overlay that groups objects and assigns them common color, linetype and lineweight." },
              { term: "BYLAYER", definition: "The property setting by which an object inherits color, linetype and lineweight from its layer." },
              { term: "Frozen layer", definition: "A layer whose objects are invisible and excluded from regeneration, unlike an OFF layer which still regenerates." },
            ],
            examQuestions: [
              {
                q: "What is a layer in AutoCAD? Explain the properties associated with layers and state the difference between switching a layer OFF and FREEZING it, and between LOCK and FREEZE.",
                marks: 7,
                outline: [
                  "Define a layer as a transparent overlay grouping objects with shared properties.",
                  "List the three properties: color (ACI), linetype (Continuous, Center, Hidden), lineweight.",
                  "Explain BYLAYER: objects inherit properties; restyling happens at layer level.",
                  "Name a standard layer set: OBJECT, CENTER, HIDDEN, DIM, TEXT, HATCH with their roles.",
                  "OFF vs FREEZE: both hide; OFF still regenerates and counts in extents, FREEZE skips regeneration — speed benefit on large drawings.",
                  "LOCK: layer stays visible but cannot be edited; add the plot flag.",
                  "Conclude with layer discipline benefits: readability, plotting via CTB color-to-pen mapping.",
                ],
              },
              {
                q: "Which layer exists in every new drawing, and why should production geometry not remain on it?",
                marks: 2,
              },
              {
                q: "List any four standard layers for a mechanical sheet with a suitable color and linetype for each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Dimensioning, dimension styles and tolerances",
            body: [
              "A dimension is an assembly of four parts: the dimension line with its arrowheads, the extension lines running from the geometry, the dimension text, and — for notes — a leader. AutoCAD places each type with a dedicated command: DIMLINEAR for horizontal and vertical sizes, DIMALIGNED for inclined faces, DIMRADIUS and DIMDIAMETER for arcs and shafts, DIMANGULAR for angles, DIMORDINATE for axis-referenced coordinates. Dimensions are associative: stretch the geometry and the measurement updates, so the drawing can never contradict itself the way a manually typed number can.",
              "The DIMSTYLE dialog fixes how every dimension looks before you place the first one: text height around 3.5 mm on an A3 sheet, matching arrow size, unit format and precision (typically 0.00 with leading zeros suppressed), fit rules that move text and arrows when space is tight, and DIMSCALE for viewports. The Tolerance tab then writes the manufacturing intent: a bilateral tolerance prints 50 with a plus-minus 0.05; a unilateral tolerance tilts entirely one way; limit dimensions print the two extremes 50.05 and 49.95. Fits complete the vocabulary — 40 H7/g6 is a hole-basis clearance fit: the hole keeps the basic size with an H7 tolerance zone, and the shaft is manufactured smaller on its g6 zone.",
              "Dimensioning rules decide whether the sheet survives inspection. Dimension from a machined datum face, never to a hidden line, never twice — and the overall size must be present exactly once. Chain dimensioning, each feature from the previous one, lets tolerances stack up: three plus-minus 0.1 steps can drift 0.3 overall. Baseline dimensioning measures every feature from one datum so errors cannot accumulate, and direct dimensioning spends the whole tolerance budget on the span that matters functionally. Stagger the numbers when the drawing gets crowded, keep arrows inside where possible, and reserve tolerances for the dimensions that actually need them.",
            ],
            bullets: [
              "Anatomy: dimension line, arrowheads, extension lines, text; placed by DIMLINEAR, DIMALIGNED, DIMRADIUS, DIMDIAMETER, DIMANGULAR.",
              "Set DIMSTYLE first: text 3.5 mm and arrows 3.5 mm on A3, precision 0.00, fit rules, DIMSCALE for viewports.",
              "Tolerance formats in the Tolerance tab: bilateral (50 plus-minus 0.05), unilateral, and limit dimensions (50.05 / 49.95).",
              "40 H7/g6 is a hole-basis clearance fit — the hole keeps the basic size, the shaft is made smaller on its g6 zone.",
              "Chain dimensions stack tolerances; baseline dimensions share one datum; direct-dimension the functional span.",
            ],
            table: {
              caption: "The dimension commands and what each one annotates.",
              headers: ["Dimension type", "Command", "Measures", "Prints as"],
              rows: [
                ["Linear (horizontal or vertical)", "DIMLINEAR", "true horizontal or vertical distance", "100"],
                ["Aligned", "DIMALIGNED", "distance along an inclined edge", "42.43"],
                ["Radius", "DIMRADIUS", "radius of an arc or fillet", "R12"],
                ["Diameter", "DIMDIAMETER", "diameter of a circle or shaft", "D25"],
                ["Angular", "DIMANGULAR", "angle between two lines", "30 deg"],
                ["Ordinate", "DIMORDINATE", "x or y offset from an origin", "X 35"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a dimensioning scheme for three shoulders on a shaft",
              caption: "The scheme decides whether tolerances cancel out or accumulate.",
              start: "Three shoulders must be located on a stepped shaft from its fixed datum face",
              branches: [
                {
                  label: "Chain (point-to-point) dimensioning",
                  outcome: "each step references the previous one, so tolerances stack — the overall length can drift by the sum of every step tolerance",
                  good: false,
                },
                {
                  label: "Baseline (datum) dimensioning",
                  outcome: "every shoulder is measured from the single datum face, so no tolerance accumulates between steps",
                  good: true,
                },
                {
                  label: "Direct dimensioning of the critical span",
                  outcome: "the functional dimension is sized straight from its own datum and gets the full tolerance budget it needs",
                  good: true,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Tolerance stack-up is a marks magnet",
              body: "When a question shows a chain of plus-minus 0.1 dimensions and asks for the overall limits, the answer is never plus-minus 0.1 — it is the accumulated worst case (three steps give plus-minus 0.3). Say the words 'tolerance stack-up' and redraw the scheme as baseline: that is the whole lesson the examiner is buying.",
            },
            keyTerms: [
              { term: "Dimension style (DIMSTYLE)", definition: "The saved set of rules — text height, arrows, precision, fit, tolerances — that controls how every dimension prints." },
              { term: "Bilateral tolerance", definition: "A tolerance that permits variation on both sides of the basic size, written as 50 plus-minus 0.05." },
              { term: "Hole-basis system", definition: "A fit system where the hole keeps the basic size (H) and the shaft zone is shifted to create clearance or interference, e.g. H7/g6." },
            ],
            examQuestions: [
              {
                q: "What are the elements of a dimension? Explain the types of dimensions used in engineering drawings and compare chain, baseline and direct dimensioning with their effect on tolerance stack-up.",
                marks: 7,
                outline: [
                  "Elements: dimension line, arrowheads, extension lines, dimension text; leaders for notes.",
                  "Types with commands: linear, aligned, radius, diameter, angular, ordinate — one sketch each.",
                  "Chain dimensioning: each feature from the previous; tolerance of overall length accumulates — show plus-minus 0.1 x 3 = plus-minus 0.3.",
                  "Baseline dimensioning: all features from one datum; individual tolerances, no accumulation.",
                  "Direct dimensioning: the functional span sized directly; receives the full budget.",
                  "Rules: dimension to visible outlines, from machined faces, no duplication, overall size once.",
                  "Conclude: baseline or direct schemes are preferred for functional dimensions.",
                ],
              },
              {
                q: "Write the meaning of the fit 40 H7/g6 and state its type.",
                marks: 2,
              },
              {
                q: "Show how a dimension of 50 with a plus-minus 0.05 tolerance is written, and name the tolerance class. What is a limit dimension?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Producing a 2D mechanical drawing sheet",
            body: [
              "Geometry and paper live in two spaces. Model space holds the true-size 1:1 geometry — a 100 mm plate is drawn 100 mm. A Layout (paper space) holds the sheet itself: the border, the title block, and one or more viewports cut into the layout with MVIEW. Each viewport is a window onto model space carrying its own view and scale — 1:1, 1:2 or 2:1 — set by zooming with a scale factor or via the viewport controls; MVSETUP automates the whole sheet-and-title-block insertion. Layers can even be viewport-frozen, so one model serves several views with different content.",
              "The title block is drawn once, then reused forever: BLOCK packages it inside the drawing, WBLOCK exports it as an external .dwg for every project, and ATTDEF attributes turn its fields — name, title, scale, date, material, projection symbol — into fill-in-the-blank text that INSERT prompts for each time. Hatching completes the mechanical vocabulary: ANSI31 at 45 degrees for steel sections, with the angle or spacing changed wherever two parts meet so adjacent hatching never merges, and thin sections hatched with pitch so fine it reads almost solid. The projection symbol declares first- or third-angle (Unit IV details the placements).",
              "Plotting is the last, most fumbled step. A CTB plot style maps each layer color to a pen width, so the layer plan from section 1.3 becomes the printed lineweight plan; the sheet is plotted 1:1 from the layout so the viewport scales alone control drawing scale; PDF and DWG outputs go to the record. The complete pipeline — model geometry, layout with border and title block, scaled viewports, annotation, CTB plot — is exactly what the practical exam times. Build your own template with layers, DIMSTYLE and title block pre-loaded, and twenty minutes of every session stay yours.",
            ],
            bullets: [
              "Model space stores 1:1 geometry; Layouts (paper space) carry the sheet border, title block and scaled viewports.",
              "MVIEW creates viewports; each one sets its own view and scale (1:1, 1:2, 2:1); MVSETUP automates sheet setup.",
              "BLOCK (internal) and WBLOCK (external file) reuse geometry; ATTDEF attributes fill title-block fields on every INSERT.",
              "Hatching: ANSI31 at 45 deg for steel; change angle or spacing between adjacent parts; thin sections use fine pitch.",
              "Plot 1:1 from the layout with a CTB style — color-to-pen mapping turns the layer plan into printed lineweights.",
            ],
            table: {
              caption: "ISO sheet sizes with typical uses and common drawing scales.",
              headers: ["Sheet", "Size (mm)", "Typical use", "Common scale"],
              rows: [
                ["A4", "210 x 297", "simple parts, viva sketches", "1:1"],
                ["A3", "420 x 297", "detailed part drawings", "1:1 or 1:2"],
                ["A2", "594 x 420", "small assemblies", "1:2"],
                ["A1", "841 x 594", "large assemblies", "1:5"],
                ["A0", "1189 x 841", "general arrangement drawings", "1:10"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The sheet production pipeline",
              caption: "From true-size geometry to a plotted drawing — the sequence the practical exam times.",
              stages: [
                { label: "Model geometry 1:1", note: "model space, correct layers, exact coordinates" },
                { label: "Create the layout", note: "border, title block with attributes" },
                { label: "Add scaled viewports", note: "1:1 or 1:2 per viewport, view direction set" },
                { label: "Annotate", note: "dimensions, hatching, balloons, notes" },
                { label: "Plot 1:1 with a CTB style", note: "color-to-pen mapping prints the lineweights" },
              ],
            },
            callout: {
              type: "tip",
              title: "Build your own template once",
              body: "Save an acadiso.dwt copy with your layer plan, a finished DIMSTYLE, the title block with attributes and your CTB style attached. Every practice sheet then starts at step three instead of step zero — in a 90-minute practical that is the difference between finishing and pleading.",
            },
            keyTerms: [
              { term: "Layout (paper space)", definition: "The sheet environment holding the border, title block and viewports, plotted 1:1." },
              { term: "Viewport", definition: "A window in a layout showing model space at a chosen scale; each viewport can show a different view." },
              { term: "Block with attributes", definition: "Reusable packaged geometry whose ATTDEF placeholders (title, scale, date) are filled at each INSERT." },
            ],
            examQuestions: [
              {
                q: "Explain model space and paper space in AutoCAD. Describe the complete steps to produce a finished A3 drawing sheet with a title block, scaled viewports and plotting, mentioning the commands used.",
                marks: 7,
                outline: [
                  "Model space: geometry drawn 1:1 in true size; paper space (layout): the printable sheet.",
                  "Create a layout: insert border and title block (a block with ATTDEF attributes for title, scale, date, material).",
                  "MVIEW cuts viewports; set each view direction (front, top, side).",
                  "Set viewport scale: 1:1 or 1:2 via zoom scale factor or viewport controls; MVSETUP as the automation route.",
                  "Annotate: dimensions on the DIM layer, hatching with ANSI31, notes.",
                  "Plot 1:1 from the layout with a CTB style mapping colors to pen widths.",
                  "State the advantage: one model, many views; dimensions stay associative.",
                ],
              },
              {
                q: "Differentiate between BLOCK and WBLOCK.",
                marks: 2,
              },
              {
                q: "What is a layout viewport? How is the scale of the drawing controlled inside it, and what does MVSETUP do?",
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
      title: "3D Modeling",
      summary:
        "3D modeling from first principles: the three modeling approaches and what each one stores, solid primitives and their display controls, Boolean recipes for holes and bosses, extrude and revolve as the two fundamental feature operations, and the WCS/UCS discipline that makes sketching on any plane effortless.",
      chapter: {
        number: "02",
        title: "Solid Modeling",
        intro:
          "Unit II moves from flat sheets to solids: wireframe, surface and solid modeling compared; primitives positioned and displayed; UNION, SUBTRACT and INTERSECT recipes; EXTRUDE and REVOLVE as the workhorse features; and the UCS machinery that lets you sketch on an inclined face as comfortably as on the XY plane.",
        inOneBreath:
          "Wireframes store edges only, surfaces add a skin, and solids add the volume — only solids give mass properties and sections; build from primitives (box, cylinder, sphere, cone, wedge, torus) positioned on the current UCS; combine with UNION, carve with SUBTRACT, keep overlaps with INTERSECT and check clashes with INTERFERE; EXTRUDE pushes a closed profile along a straight or curved path, REVOLVE spins a half-section about an axis; and a 3-point UCS plus PLAN makes any inclined face the drawing plane.",
        sections: [
          {
            number: "2.1",
            title: "Wireframe, surface and solid modeling",
            body: [
              "Wireframe modeling stores the skeleton: vertices and the edges joining them, nothing more. It is the cheapest representation to build and to store, and it is genuinely useful for space frames and pipe routes — but the computer sees edges, not faces. Consequences follow immediately: there is no inside or outside, so a wireframe can be interpreted several ways (the classic ambiguous figure), hidden-line removal is impossible because nothing is known to be in front of anything, and no section can be cut because there is no material to cut.",
              "Surface modeling stretches a skin over the frame. Faces — today mostly NURBS, non-uniform rational B-spline surfaces defined by control points and weights — cover the edges, so the model acquires an unambiguous outside and can hide what lies behind it, shade beautifully and reflect light. But the skin is infinitely thin: there is no material inside, no volume, no mass, no moment of inertia, and a section cut through it yields a curve, not an area. That is exactly right for styling — car bodies, ship hulls, consumer product skins — where the surface is the product.",
              "Solid modeling closes the volume. A boundary representation (B-Rep) records the faces, edges and vertices together with the topology that says which face bounds which side of the material, so inside and outside are defined; constructive solid geometry (CSG) additionally stores the part as a binary tree of primitives and Boolean operations, keeping the recipe editable. With inside defined, everything engineering needs becomes available: MASSPROP returns volume, mass, centroid and moments of inertia, SECTION cuts true cross-sections, interference between parts can be tested, FEA can mesh it and CAM can generate toolpaths. Real projects mix all three approaches — a hybrid model — but the solid carries the engineering data.",
            ],
            bullets: [
              "Wireframe: vertices and edges only — fastest to build, but ambiguous, with no hidden-line removal and no mass properties.",
              "Surface: NURBS faces stretched over a frame — unambiguous skin, ideal for styling, but hollow: no volume or inertia.",
              "Solid: B-Rep faces plus topological volume (often with a CSG history) — inside and outside are formally defined.",
              "Only solids support MASSPROP, true sectioning, interference checks, FEA meshing and CAM toolpaths.",
              "Hybrid models mix all three; car bodies carry NURBS skins, the powertrain beneath them is solid.",
            ],
            table: {
              caption: "The three modeling approaches compared.",
              headers: ["Aspect", "Wireframe", "Surface", "Solid"],
              rows: [
                ["Stored data", "vertices and edges", "NURBS faces over a frame", "B-Rep faces + volume topology"],
                ["Ambiguity", "yes — several interpretations", "no — skin is defined", "no — inside vs outside defined"],
                ["Hidden-line removal", "not possible", "possible", "possible"],
                ["Mass properties", "none", "surface area only", "volume, mass, centroid, inertia"],
                ["Typical use", "space frames, pipe routes", "car bodies, hulls, styling", "machine parts, FEA, CAM"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The information pyramid of 3D modeling",
              caption: "Each level up adds information — and modelling cost.",
              tiers: [
                { label: "Solid", note: "full volume: mass, sections, interference, FEA-ready" },
                { label: "Surface", note: "a defined skin: styling and freeform shapes, hollow inside" },
                { label: "Wireframe", note: "edges only: fastest skeleton, ambiguous" },
              ],
            },
            callout: {
              type: "exam",
              title: "The viva classic",
              body: "Name a part for each approach and say why: a bicycle frame as a wireframe (fast layout of tube centerlines), a car door outer skin as a NURBS surface (freeform styling, thin sheet anyway), a gear blank as a solid (mass properties, sectioning, toolpaths). One sentence each and the seven marks are structured.",
            },
            keyTerms: [
              { term: "Wireframe model", definition: "A 3D representation storing only vertices and edges — ambiguous and without volume information." },
              { term: "NURBS surface", definition: "A non-uniform rational B-spline surface defined by control points and weights; the standard for freeform styling." },
              { term: "B-Rep (boundary representation)", definition: "A solid representation recording faces, edges and vertices plus the topology that defines inside and outside." },
            ],
            examQuestions: [
              {
                q: "Compare wireframe, surface and solid modeling with respect to the data stored, ambiguity, hidden-line removal, mass properties and applications. Which approach suits a car body panel, and why?",
                marks: 7,
                outline: [
                  "Wireframe: vertices and edges; ambiguity with a sketch example; no hidden-line removal; no mass properties; pipe routes.",
                  "Surface: NURBS faces over a frame; unambiguous outside; shading possible; no volume; styling applications.",
                  "Solid: B-Rep plus topology; inside/outside defined; CSG history; MASSPROP and sectioning available.",
                  "Tabulate: stored data, ambiguity, hidden lines, mass properties, uses.",
                  "Car body panel: a surface model — freeform NURBS styling, the panel is a thin sheet with no functional volume.",
                  "Contrast: the door hinge bracket would be solid for FEA and machining.",
                  "Mention hybrid modeling in industry as the closing point.",
                ],
              },
              {
                q: "Which modeling approach can directly return volume and moment of inertia, and by which command in AutoCAD?",
                marks: 2,
              },
              {
                q: "What is a NURBS surface, and where is it preferred over solid modeling?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Solid primitives, display controls and multi-view practice",
            body: [
              "A solid primitive is a ready-made shape defined by two or three parameters. AutoCAD supplies six: BOX by length, width and height; CYLINDER by radius and height; SPHERE by radius; CONE by base radius and height; WEDGE, a right-angle wedge, by base and height; and TORUS by tube radius and centre radius. Every primitive is created aligned to the current UCS with its base on the XY plane at Z = 0 — which is why the UCS section at the end of this unit matters so much. Grips then allow quick reshaping, and MOVE, 3DALIGN and object snaps position each primitive exactly relative to its neighbours.",
              "Curved solids need display help to be readable. ISOLINES sets the number of contour lines drawn on curved faces (default 4 — raise it to 8 or 12 and the cylinder reads like a cylinder), and FACETRES controls how finely curved surfaces are faceted in shaded and hidden views (0.01 to 10). HIDE performs a quick hidden-line preview, and the visual styles — 2D wireframe, hidden, shaded, shaded with edges — let you judge the part while modeling. ISOLINES changes take effect after a REGEN, a detail that has confused every student exactly once.",
              "The professional habit is multi-view modeling: VPORTS splits the screen into two or four viewports, each showing a different view — top, front, right and a southwest isometric — of the same single model. Draw the base rectangle in the top view, check heights in the front view, confirm the shape in the iso view: one model, every view, always consistent, which is exactly the arrangement the drawing office will later exploit. Primitives are also used as sacrificial tools: a cylinder that overshoots a plate on both faces becomes a perfectly clean hole the moment the Boolean operations of the next section subtract it.",
            ],
            bullets: [
              "Six primitives — BOX, CYLINDER, SPHERE, CONE, WEDGE, TORUS — each defined by 2-3 parameters on the current UCS.",
              "Primitives are created with their base on the XY plane at Z = 0; position them with MOVE, 3DALIGN and object snaps.",
              "ISOLINES sets contour lines on curved faces (default 4, effective after REGEN); FACETRES controls shaded-view faceting.",
              "HIDE and the visual styles (hidden, shaded, shaded-with-edges) preview the part while modeling.",
              "VPORTS gives top, front, right and isometric views of one model — edit in any viewport, all views update together.",
            ],
            codeExample: {
              language: "text",
              caption: "Building a simple boss-on-plate part from primitives, with display checks.",
              code: `Command: BOX
  First corner: 0,0,0   Other corner: 100,60,0   Height: 20
  (base plate 100 x 60 x 20)

Command: CYLINDER
  Center: 50,30,20   Radius: 15   Height: 40
  (boss sitting on top of the plate)

Command: SPHERE
  Center: 50,30,10   Radius: 10
  (later SUBTRACTed to carve a cavity)

Command: ISOLINES  8        (denser contour lines)
Command: REGEN               (ISOLINES changes apply on regen)
Command: HIDE                (hidden-line preview)
Command: MASSPROP            (volume, centroid of each solid)`,
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the starter primitive",
              caption: "Pick the primitive closest to the final shape — fewer Booleans means a cleaner model. Sphere and torus sit outside this grid, chosen for balls and rings.",
              axes: {
                x: "Cross-section: round (left) vs flat faces (right)",
                y: "Profile: uniform along the axis (top) vs tapered (bottom)",
              },
              quadrants: [
                { label: "Cylinder", note: "round and uniform — holes, bosses, pins" },
                { label: "Box", note: "flat faces, uniform — plates, housings, ribs" },
                { label: "Cone", note: "round and tapered — transitions, funnels, chamfers" },
                { label: "Wedge", note: "flat and tapered — gussets, stops, ramps" },
              ],
            },
            callout: {
              type: "tip",
              title: "Overshoot your tools",
              body: "When a cylinder is destined to become a hole, make it longer than the plate on both sides. A tool that stops exactly at the face leaves a zero-thickness sliver that later breaks Booleans and FEA meshes — overshooting costs nothing and guarantees a clean cut.",
            },
            keyTerms: [
              { term: "Solid primitive", definition: "A pre-defined analytic solid (box, cylinder, sphere, cone, wedge, torus) parameterised on the current UCS." },
              { term: "ISOLINES", definition: "The system variable controlling how many contour lines are displayed on curved faces." },
              { term: "Visual style", definition: "A display mode — wireframe, hidden, shaded, shaded-with-edges — used to inspect a 3D model." },
            ],
            examQuestions: [
              {
                q: "List the solid primitives available in a 3D modeler with the parameters that define each. Explain ISOLINES, FACETRES, HIDE and visual styles, and describe how multiple viewports help in modeling.",
                marks: 7,
                outline: [
                  "Primitives with parameters: BOX (l, w, h), CYLINDER (r, h), SPHERE (r), CONE (r, h), WEDGE (base, h), TORUS (tube r, centre r).",
                  "All created on the current UCS, base at Z = 0; positioned with MOVE, 3DALIGN, osnaps.",
                  "ISOLINES: contour lines on curved faces, default 4, applied on REGEN.",
                  "FACETRES: faceting fineness for shaded/hidden views (0.01 to 10).",
                  "HIDE: quick hidden-line preview; visual styles for shaded inspection.",
                  "VPORTS: top, front, right and isometric views of one model — consistency and editing comfort.",
                  "Close with the tool-solid idea: primitives as sacrificial cutting tools.",
                ],
              },
              {
                q: "Write the command sequence to create a box of 100 x 60 x 20 mm with its corner at the origin, and a cylinder of radius 15 and height 40 standing on its top face.",
                marks: 2,
              },
              {
                q: "Why should a cylinder used as a cutting tool overshoot the faces it passes through? What does MASSPROP report?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Boolean operations: UNION, SUBTRACT and INTERSECT",
            body: [
              "Three Boolean operations combine solids the way arithmetic combines numbers. UNION fuses two or more solids into a single solid — plate and boss become one continuous body whose mass properties are correct. SUBTRACT removes the volume of the tool solids from a target solid — the command asks first for the solids to subtract FROM, then for the solids to subtract, and mixing the two selections is the fastest way to delete an hour of work. INTERSECT keeps only the common volume, discarding everything else.",
              "Standard recipes build on these three. A flange: UNION a plate with a central boss, then SUBTRACT a large bore cylinder and four overshooting bolt-hole cylinders. A slot: SUBTRACT a box that passes clean through. A mould core: INTERSECT a block with the cavity volume so the result exactly fills the space. And where you must not change either body, INTERFERE performs the overlap test between two solids and highlights the interference volume without editing anything — the assembly clearance check that precedes every drawing release. Copied tools deserve a note: if a hole tool is needed twice, COPY it before the first subtraction, because SUBTRACT consumes its tools.",
              "After the Booleans come the finishing passes. FILLET rounds the remaining edges — the transitions left where primitives met — and CHAMFER dresses them. MASSPROP verifies the engineering: volume, mass once a density is assumed, centroid and moments of inertia, all now reflecting the holes and cavities. SECTION cuts a true cross-section for inspection. One caution separates the two worlds: AutoCAD's Booleans are destructive — the result remembers nothing of its ingredients — whereas the parametric modelers of Unit III keep every feature editable in a history tree; know which behavior you are using, and save before every Boolean either way.",
            ],
            bullets: [
              "UNION fuses solids into one; SUBTRACT carves tool volumes from a target; INTERSECT keeps only the shared volume.",
              "SUBTRACT selection order matters: pick the solid to subtract FROM first, then the tools — reversing it deletes the wrong body.",
              "Cutting tools should overshoot both faces; a flush tool leaves zero-thickness slivers that corrupt later operations.",
              "INTERFERE detects and highlights overlap between solids without editing them — the assembly clearance check.",
              "Finish with FILLET on remaining edges and verify with MASSPROP; save before every Boolean.",
            ],
            codeExample: {
              language: "text",
              caption: "A flange plate with four bolt holes built by Boolean operations.",
              code: `Command: BOX
  0,0,0  to  120,80,10          (base plate)

Command: CYLINDER
  15,15,-5   Radius 8   Height 20
  (tool: overshoots both faces of the plate)

Command: ARRAYRECT
  2 x 2 array, column spacing 90, row spacing 50
  (four overshooting hole tools)

Command: SUBTRACT
  Select solids to subtract FROM:   pick the plate
  Select solids to subtract:        pick the 4 cylinders

Command: BOX   (rib)  ... then UNION
  (weld the rib onto the plate)

Command: FILLET   Radius 3   (dress the remaining edges)
Command: MASSPROP              (volume now excludes the 4 holes)`,
            },
            diagram: {
              kind: "flow",
              title: "The Boolean modeling workflow",
              caption: "Base solid, tool solids, subtract, unite, finish — the recipe behind most lab parts.",
              steps: [
                { label: "Create the base solid", note: "plate or blank by BOX / CYLINDER" },
                { label: "Create and position tool solids", note: "hole cylinders, slot boxes — overshooting" },
                { label: "SUBTRACT the tools", note: "target first, then tools" },
                { label: "UNION added bosses and ribs", note: "one continuous body" },
                { label: "Fillet edges and verify", note: "MASSPROP and SECTION checks" },
              ],
            },
            callout: {
              type: "warning",
              title: "Save before every Boolean",
              body: "SUBTRACT with the selections reversed, or a tool that only kisses the surface, can consume both solids and leave nothing. The QSAVE reflex before each Boolean operation has rescued more lab sessions than any command. Parametric software hides this risk in a history tree — plain AutoCAD does not.",
            },
            keyTerms: [
              { term: "UNION", definition: "A Boolean operation fusing two or more solids into a single continuous solid." },
              { term: "SUBTRACT", definition: "A Boolean operation removing the volume of tool solids from a target solid." },
              { term: "INTERFERE", definition: "A check that highlights the overlapping volume of two solids without modifying either." },
            ],
            examQuestions: [
              {
                q: "Explain the three Boolean operations with sketches, and describe step by step how you would model a flange plate with a central bore and four bolt holes.",
                marks: 7,
                outline: [
                  "UNION: solids fuse into one — sketch of two overlapping boxes becoming one.",
                  "SUBTRACT: tool volume removed from target — sketch of a cylinder carved from a plate.",
                  "INTERSECT: only the common volume survives — sketch of the lens-shaped overlap.",
                  "Flange plan: create the plate (BOX or CYLINDER) and the boss, UNION them.",
                  "Create the bore cylinder and four overshooting bolt-hole cylinders at the bolt circle.",
                  "SUBTRACT: select the flange first, then the five tools.",
                  "Finish: FILLET the edges, verify with MASSPROP; mention INTERFERE for assembly checks.",
                ],
              },
              {
                q: "State the difference between INTERSECT and INTERFERE.",
                marks: 2,
              },
              {
                q: "Why must cutting tools extend beyond the faces being cut, and why should you COPY a tool before subtracting it?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Extrude and revolve: the two workhorse features",
            body: [
              "EXTRUDE pushes a closed profile along a straight line. Give it a height and the profile sweeps into a prismatic solid; give it a taper angle and the walls draft; give it a path — a polyline, arc or helix — and the profile travels the curve with a constant section, building pipe runs, handles and rails. PRESSPULL is its quick cousin, dragging any closed boundary into a solid interactively. One law is absolute: the profile must be a single closed loop that does not cross itself, or the operation fails. Loose line work is repaired by REGION, by BOUNDARY, or by PEDIT's Join option, which welds segments into one polyline.",
              "REVOLVE spins a closed profile about an axis of revolution, through a full 360 degrees or a partial angle. The axis can be a line that belongs to the profile, a separate line object, or the X or Y axis of the current UCS, and the profile must lie entirely on one side of the axis — crossing it means the solid would intersect itself, and the command refuses. Revolve is the natural verb for anything turned on a lathe: stepped shafts, pulleys, flanges, bushings, nozzles and couplings are all half-sections revolved about a centerline, which is exactly how the shaft of Unit IV will be built.",
              "Choosing between them is a one-question test: is the cross-section constant and straight, or is the part symmetric about an axis? Prismatic parts — brackets, plates, ribs, frames — extrude. Axisymmetric parts — anything a lathe or a potter would make — revolve. Between the two sits the sweep (Unit III) for a constant section along a curved path. Preparation discipline is shared: sketch the profile accurately on the correct plane, close it with object snaps (a 0.01 mm gap kills the feature), and only then extrude or revolve. The half-section habit for revolve — radii up, lengths along, drawn as one closed polyline — is worth practising until it is reflex.",
            ],
            bullets: [
              "EXTRUDE pushes a closed profile along a straight or curved path, with an optional taper angle; PRESSPULL is the interactive version.",
              "REVOLVE spins a closed profile about an axis — full 360 deg or a partial angle for sectors.",
              "Profiles must be closed and non-self-intersecting; REGION, BOUNDARY and PEDIT Join repair loose outlines.",
              "A revolve profile must sit entirely on one side of its axis, or the solid self-intersects and fails.",
              "Choose by shape: prismatic parts extrude, axisymmetric parts revolve, curved constant sections wait for sweep.",
            ],
            table: {
              caption: "Extrude and revolve variants with their inputs and typical parts.",
              headers: ["Feature", "Profile + inputs", "Result", "Typical part"],
              rows: [
                ["Extrude (blind)", "closed profile + height (+ taper)", "prismatic solid", "bracket, plate, rib"],
                ["Extrude along path", "profile + path object", "constant section along a curve", "pipe run, handle"],
                ["Extrude along helix", "profile + HELIX", "thread or coil", "spring, screw"],
                ["Revolve (full)", "half-section + axis, 360 deg", "axisymmetric solid", "shaft, pulley, flange"],
                ["Revolve (partial)", "half-section + axis + angle", "sector of revolution", "half-coupling, elbow"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Extrude versus revolve",
              caption: "The choice question: constant straight section, or symmetry about an axis?",
              left: {
                heading: "Extrude",
                items: [
                  "a closed profile slides along a straight or curved path",
                  "height (or path) plus optional taper control the result",
                  "the fastest route to prismatic parts",
                  "plates, brackets, ribs, frames",
                  "profile gaps are the classic failure",
                ],
              },
              right: {
                heading: "Revolve",
                items: [
                  "a closed profile spins about an axis of revolution",
                  "axis may belong to the profile or sit outside it",
                  "partial angles cut sectors, full 360 turns solids of revolution",
                  "shafts, pulleys, bushings, nozzles",
                  "profile must stay on one side of the axis",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The guaranteed viva pair",
              body: "'When do you extrude and when do you revolve?' Answer in one line: constant cross-section along a straight line — extrude; symmetry about an axis — revolve. Then give one part for each. The follow-up question is always 'what if the profile is open?' — close it with PEDIT Join, REGION or BOUNDARY first.",
            },
            keyTerms: [
              { term: "Extrude", definition: "A feature that pushes a closed profile along a straight or curved path to create a solid." },
              { term: "Revolve", definition: "A feature that spins a closed profile about an axis of revolution, fully or through a partial angle." },
              { term: "REGION", definition: "A command converting closed 2D geometry into a region object — a valid, single closed profile for solid operations." },
            ],
            examQuestions: [
              {
                q: "Explain the EXTRUDE and REVOLVE operations with sketches. Describe how you would model a stepped shaft of diameters 30 and 40 mm with lengths 50 and 60 mm, stating the profile and every command used.",
                marks: 7,
                outline: [
                  "Extrude: closed profile + height/path (+ taper); profile must be a single closed loop.",
                  "Revolve: closed profile + axis + angle; profile entirely on one side of the axis.",
                  "Shaft strategy: it is axisymmetric, so revolve a half-section about the centreline.",
                  "Draw the closed half-section with PLINE: start at the axis, up to radius 15, along 50, up to radius 20, along 60, down to the axis, close.",
                  "REVOLVE about the centreline through 360 degrees.",
                  "Alternative noted: extrude two cylinders and UNION — valid but less elegant.",
                  "Add chamfers and fillets; verify diameters with DIST and volume with MASSPROP.",
                ],
              },
              {
                q: "What happens if the profile to be revolved crosses the axis of revolution?",
                marks: 2,
              },
              {
                q: "Differentiate between extruding to a height and extruding along a path. Which repair commands close an open profile?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "WCS, UCS and 3D viewing",
            body: [
              "The world coordinate system (WCS) is the fixed global frame: origin at a known point, X, Y and Z locked by the right-hand rule, Z pointing out of the screen when you look down at the XY plane in plan. Every drawing has exactly one WCS and it never moves — but working in it is often clumsy, because every primitive is created on the XY plane it defines. The user coordinate system (UCS) fixes that: it redefines the origin and the axis directions so that the current XY plane becomes any plane you choose — the top of a boss, an inclined face, the side of a wall.",
              "The UCS command offers several ways in. UCS Origin moves the origin and keeps directions; UCS 3point takes an origin, a point on the positive X axis and a point on the positive XY half-plane, and is the surgical option for inclined faces; UCS Face aligns to a selected face with a preview; UCS Object aligns to an existing entity; UCS View drops the XY plane flat to the current view; and UCS World restores the world system. Two companions complete the discipline: PLAN rotates the view to look straight down the current XY plane — so sketching on the incline feels exactly like plain 2D drafting — and UCSICON with the Origin option keeps the icon pinned at the current origin so you always know where you are.",
              "Viewing tools keep the model readable without touching coordinates: the VIEW presets (Top, Front, Right, Southwest Isometric), VPOINT, 3DORBIT for free constrained orbiting, and VPORTS for simultaneous multiple views. The classic mistakes are all one mistake: forgetting to go home. A UCS left rotated while dimensioning produces nonsense numbers; a forgotten World restore before plotting tilts the sheet. The habit that survives exams and employment alike is a fixed closing sequence — UCS World, PLAN, check the icon — after every inclined-plane operation.",
            ],
            bullets: [
              "The WCS is the fixed global frame; the UCS redefines origin and axes so any plane becomes the drawing plane.",
              "UCS 3point (origin, on-X, on-XY) is the surgical option for inclined faces; UCS Face aligns to a picked face.",
              "PLAN looks square down the current XY plane — sketching on the incline then feels like plain 2D.",
              "VIEW presets (Top, Front, Right, SW Isometric), 3DORBIT and VPORTS inspect the model without moving the UCS.",
              "Close with UCS World + PLAN before dimensioning or plotting — a rotated frame is the commonest 3D blunder.",
            ],
            codeExample: {
              language: "text",
              caption: "Cutting a rectangular slot on an inclined face with a 3-point UCS.",
              code: `Command: UCS  ->  New  ->  3point
  New origin point:      pick the lower corner of the incline
  Point on positive X:   pick along the bottom edge of the face
  Point on XY plane:     pick up the slope

Command: PLAN      (view looks straight down the new XY plane)
Command: RECTANG   0,0  to  40,25     (slot sketched on the incline)
Command: EXTRUDE   height 8           (walls run along the new Z)
Command: SUBTRACT                    (cut the slot from the bracket)

Command: UCS  World   +   PLAN
(always restore the world system before dimensioning or plotting)`,
            },
            diagram: {
              kind: "fork",
              title: "Sketching on an inclined face — three strategies",
              caption: "Only one of these keeps the part correct and the drafting easy.",
              start: "A rectangular slot must be cut on the inclined top face of a bracket",
              branches: [
                {
                  label: "Stay in WCS and type 3D coordinates",
                  outcome: "every point needs computed x, y, z values — slow, and one typing error scraps the cut",
                  good: false,
                },
                {
                  label: "Define a 3-point UCS on the face",
                  outcome: "the incline becomes the XY plane — sketch and extrude exactly as in plain 2D drafting",
                  good: true,
                },
                {
                  label: "Rotate the whole part flat instead",
                  outcome: "the cut becomes easy but the part leaves its modelling position — assemblies, mates and drawings all break",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "The going-home rule",
              body: "After any UCS adventure, run UCS World and PLAN before you dimension, hatch or plot. Dimensions placed in a rotated frame read nonsense values that look perfectly plausible on screen — and they are the single most common source of a rejected practical sheet.",
            },
            keyTerms: [
              { term: "WCS", definition: "The world coordinate system — the fixed global origin and axis set every drawing is built on." },
              { term: "UCS", definition: "The user coordinate system — a redefinable origin and axis set that makes any chosen plane the drawing plane." },
              { term: "PLAN command", definition: "Rotates the view to look perpendicularly down the current XY plane, aligning the screen with the UCS." },
            ],
            examQuestions: [
              {
                q: "What are the WCS and the UCS? Explain the methods of defining a UCS in AutoCAD, and describe with a sketch how you would sketch and cut a slot on the inclined face of a bracket.",
                marks: 7,
                outline: [
                  "Define WCS: fixed global origin and axes; every drawing has exactly one.",
                  "Define UCS: user-redefinable origin and axes; the XY plane becomes the working plane.",
                  "Methods: UCS Origin, UCS 3point (origin, X point, XY point), UCS Face, UCS Object, UCS View, UCS World to restore.",
                  "Bracket problem: use UCS 3point with the origin at the lower corner of the incline.",
                  "PLAN to view the new XY plane square-on; sketch the rectangle in 2D as usual.",
                  "EXTRUDE along the new Z and SUBTRACT to cut the slot.",
                  "Close with the going-home rule: UCS World + PLAN before dimensioning or plotting.",
                ],
              },
              {
                q: "Which command restores the world coordinate system, and which command views the current XY plane square-on?",
                marks: 2,
              },
              {
                q: "State any three options of the UCS command and what each is used for.",
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
      title: "Parametric Modeling and Assembly",
      summary:
        "The parametric core of modern CAD: sketches constrained by geometry and driven by dimensions and equations, sweep and loft for shapes extrude cannot reach, assemblies held together by mates and degrees of freedom, exploded views that document assembly order, and the bill of materials that turns a model tree into a purchasing document.",
      chapter: {
        number: "03",
        title: "Parametric CAD and Assemblies",
        intro:
          "Unit III is where CAD becomes engineering: sketches locked by geometric and dimensional constraints, helical sweeps and multi-section lofts, mates removing degrees of freedom in assemblies, exploded views with trails and balloons, and BOM tables generated straight from the assembly tree.",
        inOneBreath:
          "Geometric constraints lock the shape logic, dimensional constraints attach the numbers, and a sketch is finished only when fully constrained; SWEEP drags one profile along a path (a helix gives springs and threads), LOFT blends several profiles with guide curves; assemblies mate parts — coincident, concentric, distance, angle — removing six degrees of freedom per part until only the intended motion survives; exploded views pull parts along their axes with trails; and the BOM flattens the tree into item numbers, quantities and balloons.",
        sections: [
          {
            number: "3.1",
            title: "Parametric sketching and constraints",
            body: [
              "Parametric modeling makes geometry the consequence of rules rather than the record of mouse strokes. A sketch is drawn roughly, then locked two ways. Geometric constraints describe relationships — parallel, perpendicular, tangent, concentric, equal, symmetric, collinear, midpoint — and survive every size change, because they state shape logic, not size. Dimensional constraints attach the numbers: lengths, radii and angles that drive the geometry when edited. Between them they consume the sketch's degrees of freedom, and the status bar counts what remains; a sketch is done only when it is fully constrained, and over-defining it with redundant pairs throws conflicts.",
              "The point of all this machinery is design intent. A plate whose four holes must stay 10 mm from their edges and symmetric about both centrelines is captured with two symmetric constraints, four equal constraints and two dimensions; change the plate length and the holes move correctly, every time, forever. Dimensions can carry expressions — d1 = 0.5 x d0, or named parameters like thickness = 5 mm — so one driver dimension propagates through the feature tree, the part, and ultimately the whole assembly. That propagation is why companies model parametrically: a design change is a number edit, not a redraw.",
              "The working rhythm is fixed. Sketch roughly, apply geometric constraints first to fix the shape logic, then dimensions to fix the sizes, and watch the constraint count reach zero. Run the drag test: grab an entity and drag — if the shape deforms in a way you do not want, a constraint is missing, and adding it now costs seconds instead of a redesign. Avoid the classic redundancy (parallel plus horizontal-plus-vertical applied to the same pair, or a dimension duplicating what equal constraints already enforce). Construction centrelines carry symmetry cleanly, and a chain of tangent arcs enforces smoothness better than a pile of dimensions ever will.",
            ],
            bullets: [
              "Geometric constraints (parallel, tangent, equal, concentric, symmetric, midpoint) lock shape logic that survives every size edit.",
              "Dimensional constraints attach the numbers — distances, radii, angles — and can carry expressions like d1 = 0.5 x d0.",
              "A sketch is finished only when fully constrained; the status bar reports the remaining degrees of freedom.",
              "Apply geometric constraints first, dimensions second; redundant pairs throw over-defined conflicts.",
              "Run the drag test after constraining: any unwanted deformation names the missing constraint immediately.",
            ],
            table: {
              caption: "Common sketch constraints and what each enforces.",
              headers: ["Constraint", "Kind", "Enforces", "Typical use"],
              rows: [
                ["Parallel", "geometric", "two lines never meet", "slot walls"],
                ["Tangent", "geometric", "line or arc touches an arc smoothly", "fillet-less profiles, cams"],
                ["Equal", "geometric", "same length or radius", "four corner fillets of one size"],
                ["Concentric", "geometric", "shared center", "bore and boss circles"],
                ["Symmetric", "geometric", "mirror placement about a line", "holes about a centreline"],
                ["Distance", "dimensional", "exact separation of two entities", "hole-to-edge offset"],
                ["Radius / Diameter", "dimensional", "exact arc or circle size", "fillet and bore sizes"],
                ["Angle", "dimensional", "exact angle between entities", "dovetails, wedges"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Geometric versus dimensional constraints",
              caption: "Shape logic and size data — a fully constrained sketch needs both.",
              left: {
                heading: "Geometric constraints",
                items: [
                  "relationships: parallel, tangent, equal, concentric, symmetric",
                  "the shape logic is locked — it survives every size edit",
                  "apply them first, so fewer dimensions are needed later",
                  "cannot express a size — 'equal' is not '40 mm'",
                  "the reason edits ripple correctly instead of breaking the sketch",
                ],
              },
              right: {
                heading: "Dimensional constraints",
                items: [
                  "the numbers: distances, radii, angles",
                  "drive the model — edit one and the geometry follows",
                  "can carry equations: d1 = 0.5 x d0, named parameters",
                  "cannot express intent — 40 mm twice is not 'these are equal'",
                  "the interface between the sketch and the parameter table",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The drag test",
              body: "After constraining, grab a line or point and drag it. Whatever moves in a way you dislike is telling you which constraint is missing — fix it before dimensioning. A five-second drag routinely prevents a five-hour redesign three weeks later when the client changes one length.",
            },
            keyTerms: [
              { term: "Geometric constraint", definition: "A rule describing a relationship — parallel, tangent, equal, concentric, symmetric — that locks shape logic in a sketch." },
              { term: "Fully constrained sketch", definition: "A sketch with zero remaining degrees of freedom; its shape cannot change without editing a constraint or dimension." },
              { term: "Design intent", definition: "The deliberate choice of which dimensions and constraints drive a model so that likely changes propagate correctly." },
            ],
            examQuestions: [
              {
                q: "What is parametric modeling? Explain geometric and dimensional constraints with examples, and state why a sketch must be fully constrained.",
                marks: 7,
                outline: [
                  "Define parametric modeling: geometry driven by constraints and dimensions, not by stored coordinates.",
                  "Geometric constraints with examples: parallel, tangent, equal, concentric, symmetric, midpoint.",
                  "Dimensional constraints with examples: distance, radius, angle; expressions like d1 = 0.5 x d0.",
                  "Degrees of freedom: each entity starts free; constraints consume them; the status bar counts the remainder.",
                  "Fully constrained means zero DOF left — the shape is locked and edits are predictable.",
                  "Over-defining with redundant constraints throws conflicts; order matters — geometry first, dimensions second.",
                  "Illustrate with the plate example: symmetric + equal constraints plus two dimensions move four holes correctly.",
                ],
              },
              {
                q: "Name any four geometric constraints and state what each enforces.",
                marks: 2,
              },
              {
                q: "Differentiate between a driving dimension and a driven (reference) dimension in a parametric sketch.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Sweep, loft and the parametric rebuild cycle",
            body: [
              "SWEEP drags one closed profile along one path, keeping the section constant: a handrail follows its curve, a wire route follows the frame, a pipe follows the plant layout. The path can be a sketched curve, an existing edge, or — the case to remember — a HELIX, whose pitch and turn count turn a swept circle into a compression spring or a swept thread profile into a screw. Guide rails refine the sweep when the section must change width along the journey, and twist control can rotate the profile as it travels.",
              "LOFT is the shape-maker when no single profile suffices: it blends two or more profiles drawn on separate planes into one continuous solid or surface — round at one end, square at the other, hexagonal in the middle. Guide curves steer the blending so specific points on each profile map to specific points on the next, which is how a boat hull, a duct transition and an ergonomic handle stay under the designer's control. End conditions (tangency to the neighbouring faces) make the loft meet surrounding geometry smoothly. The rule of thumb: sweep keeps one profile moving; loft makes many profiles agree.",
              "The parametric rebuild cycle binds the whole unit together. Edit a driving dimension; the sketch re-solves its constraints; the feature built on that sketch rebuilds — the sweep, the loft, the extrude; the assembly updates its mates and its bill of materials; the drawings follow. This cascade is the entire business case for parametric modeling, and it is also its maintenance burden: a broken parent sketch breaks every child, so failures are fixed at the top of the tree, and features are renamed the moment they are created. An unnamed 'Extrude 7' answers no questions — in the viva or in the design review.",
            ],
            bullets: [
              "SWEEP: one closed profile + one path (+ optional guide rails) — a constant section along a curve.",
              "Helix + sweep: springs, threads and coils — HELIX supplies pitch, turns and height.",
              "LOFT: two or more profiles on different planes blended into one continuous solid or surface.",
              "Guide curves steer the loft between sections — round-to-square ducts, hulls, handles.",
              "The rebuild cycle: edit a dimension, the sketch re-solves, the feature rebuilds, the assembly and BOM update.",
            ],
            table: {
              caption: "Sweep and loft variants with inputs and typical parts.",
              headers: ["Feature", "Inputs", "Result shape", "Typical part"],
              rows: [
                ["Sweep", "profile + path", "constant section along the path", "handrail, pipe route"],
                ["Sweep with guide rail", "profile + path + rail", "section size varies along the path", "tapered handle"],
                ["Helical sweep", "profile + HELIX", "coil or thread", "spring, screw"],
                ["Loft", "2+ profiles on planes", "blended transition between sections", "round-to-square duct"],
                ["Loft with guide curves", "profiles + guide curves", "controlled multi-point blending", "boat hull, spout"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The parametric rebuild cycle",
              caption: "One dimension edit travels down the tree — and the loop begins again.",
              steps: [
                { label: "Edit a driving dimension", note: "the single intentional change" },
                { label: "Sketch re-solves", note: "constraints redistribute the geometry" },
                { label: "Feature rebuilds", note: "sweep, loft or extrude regenerates" },
                { label: "Assembly updates", note: "mates, positions and BOM quantities follow" },
                { label: "Verify results", note: "mass, interference, drawings — then loop" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sweep vs loft in one line",
              body: "The viva asks it every year: sweep moves ONE profile along a path with a constant section; loft blends SEVERAL profiles into a transitioning shape. Add the flagship example for each — helical sweep for a spring, loft for a round-to-rectangle duct — and the answer is complete.",
            },
            keyTerms: [
              { term: "Sweep", definition: "A feature that drags a closed profile along a path, keeping the section constant." },
              { term: "Loft", definition: "A feature that blends two or more profiles on different planes into one continuous shape." },
              { term: "Guide curve", definition: "A curve that maps specific points across a sweep or loft to control how the section changes along the way." },
            ],
            examQuestions: [
              {
                q: "Explain the sweep and loft features with sketches. Describe how you would model (a) a compression spring and (b) a round-to-square transition duct, and explain the parametric rebuild cycle.",
                marks: 7,
                outline: [
                  "Sweep: closed profile + path; constant section; guide rails for varying width.",
                  "Loft: two or more profiles on separate planes blended; guide curves steer the blend.",
                  "Spring: create a HELIX (pitch, turns, height), sketch a circle at the helix start, sweep the circle along the helix.",
                  "Duct: sketch the round section on one plane and the square on another, aligned about an axis; loft between them.",
                  "Add guide curves to the duct when specific corners must map to specific corners.",
                  "Rebuild cycle: edit a driving dimension — sketch re-solves, feature rebuilds, assembly and BOM update.",
                  "Note the discipline: rename features; fix failures at the parent first.",
                ],
              },
              {
                q: "Which command creates a helical path, and which two inputs define a compression spring from it?",
                marks: 2,
              },
              {
                q: "State the role of guide curves in lofting and give one example part.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Assemblies and mates",
            body: [
              "An assembly is parts plus relationships. In the bottom-up approach, parts are modeled first as independent files, inserted into the assembly and tied together with mates; in the top-down approach, layout sketches inside the assembly drive the parts, which are modeled in context. The first inserted component is usually fixed (grounded) — the frame, the base, the housing — because every other position is measured from it. Every free part carries six degrees of freedom: three translations and three rotations; each mate removes some of them, and the assembly is stable when nothing required is left floating.",
              "The mate vocabulary is small and powerful. Coincident makes two faces flush (a bolt head on a flange face) or two edges meet; concentric aligns axes (a shaft in a bearing bore) and does most of the work in any rotating assembly; distance holds a fixed offset (a gasket gap); angle fixes an orientation; tangent touches a curve to a face (cam and follower, belt and pulley); parallel and perpendicular set orientation without fixing position. Each mate offers align and anti-align solutions — the same concentric mate can point the shaft either way. Mechanisms deliberately leave degrees of freedom free: a hinge keeps one rotation so the door can move.",
              "Management is where assemblies succeed or drown. Sub-assemblies group function — a gear-train cartridge, a pump internals module — so the top level stays readable; flexible sub-assemblies let the mechanism inside move in the parent. Interference detection tests every pair for overlapping solids and lists the offenders, which is the check that precedes any drawing release. The drag test is the everyday sanity check: shake the assembly with the mouse and whatever moves still has free degrees of freedom — a wanted behaviour in a linkage, a defect in a weldment. The assembly tree, kept disciplined and renamed, becomes the bill of materials of the next section.",
            ],
            bullets: [
              "Bottom-up builds parts first, then mates them; top-down drives parts from layout sketches inside the assembly.",
              "Ground the base part first; every floating part carries six degrees of freedom until mates remove them.",
              "Core mates: coincident, concentric, distance, angle, tangent, parallel, perpendicular — each with align and anti-align solutions.",
              "The drag test: anything that moves still has free DOF — wanted in mechanisms, a fault in welded frames.",
              "Interference detection lists every overlapping pair of solids; run it before releasing any drawing.",
            ],
            table: {
              caption: "Mate types and what each fixes.",
              headers: ["Mate", "What it fixes", "Example"],
              rows: [
                ["Coincident", "faces or edges flush and touching", "bolt head on the flange face"],
                ["Concentric", "axes of two cylindrical faces aligned", "shaft inside a bearing bore"],
                ["Distance", "a fixed offset between faces", "gasket gap of 2 mm"],
                ["Angle", "a set angle between faces or planes", "lever parked at 30 deg"],
                ["Tangent", "a curved face touching a flat or curved face", "cam and follower, belt and pulley"],
                ["Parallel / Perpendicular", "orientation without fixing position", "slot aligned with the axis"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The structure of an assembly",
              caption: "Design data flows down the stack; changes and rebuilds flow back up.",
              layers: [
                { label: "Top-level assembly", note: "mates, layout, interference and motion checks" },
                { label: "Sub-assemblies", note: "functional groups — gear train, pump cartridge" },
                { label: "Components (parts)", note: "each a fully parametric part file" },
                { label: "Features and sketches", note: "extrudes, revolves, sweeps — the recipe tree" },
              ],
            },
            callout: {
              type: "tip",
              title: "Mate big before small",
              body: "Mate the largest faces and the primary axes first, then add the fine offsets. An assembly mated in this order stays stable when a dimension changes; one mated detail-first collapses like a house of cards the first time a part is edited.",
            },
            keyTerms: [
              { term: "Mate", definition: "A relationship (coincident, concentric, distance, angle, tangent) that removes degrees of freedom between assembly components." },
              { term: "Degrees of freedom (DOF)", definition: "The six independent motions — three translations, three rotations — a free component possesses before mates act on it." },
              { term: "Bottom-up assembly", definition: "An approach where parts are modeled as independent files first and then inserted and mated into the assembly." },
            ],
            examQuestions: [
              {
                q: "What is an assembly model? Explain the bottom-up and top-down modeling approaches and any five mate types with examples, and state how degrees of freedom are involved.",
                marks: 7,
                outline: [
                  "Define an assembly: parts plus mates; the assembly tree structure.",
                  "Bottom-up: parts modeled independently, inserted, mated — the lab standard.",
                  "Top-down: layout sketches drive parts modeled in context — design-process advantage.",
                  "Ground the first part; six DOF per free component (3 translations, 3 rotations).",
                  "Five mates with examples: coincident (bolt head on flange), concentric (shaft in bore), distance (gasket gap), angle (lever at 30 deg), tangent (cam and follower).",
                  "Mechanisms leave DOF free on purpose; weldments allow none.",
                  "Close with the drag test and interference detection as verification tools.",
                ],
              },
              {
                q: "Why is the first inserted component in an assembly usually fixed?",
                marks: 2,
              },
              {
                q: "What does an interference check do, and at what stage of a project is it run?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Exploded views",
            body: [
              "An exploded view pulls an assembly apart along its assembly axes so a reader can see every component, its position and the order of (dis)assembly — without a single dimension. It is the picture that carries assembly instructions, service manuals and spare-parts catalogues. The base component is anchored; every other part is offset along its own pull-off direction by a recorded distance, so a flange coupling reads as: bolts out first, then nuts and washers, cover plate lifts, gasket peels, shaft withdraws.",
              "The craft is in the staggering. Fastener groups fan out radially so six bolts and their nuts never overlap visually; each nut flies further than its bolt so the pair stays associated; washers sit between. Explode trails — the dashed lines the software draws from each part's seated position to its exploded position — document the path and keep the reader oriented. Sequence numbers or an ordered explode state encode the reassembly order. Distances are tabulated for repeatability, so the view can be regenerated identically after any design change, and saved states let one assembly ship several explosions: a service view (everything apart) and a shipping view (only the covers off).",
              "The exploded view is a deliverable, not just a picture. Dropped onto a drawing sheet, it carries item balloons keyed to the bill of materials — every balloon's item number matching a BOM row, which is what makes the drawing self-explanatory in the shop. Animations of the explode state power presentations and training material. And the discipline of building one pays a design dividend: pulling an assembly apart along sensible axes exposes parts that can only be assembled in one order — a fact better discovered at the desk than on the floor.",
            ],
            bullets: [
              "Purpose: show assembly order, component positions and service steps — with no dimensions at all.",
              "Anchor the base component; explode each part along its own pull-off axis with a recorded distance.",
              "Stagger fastener groups radially; nuts fly further than bolts so pairs stay visually associated.",
              "Explode trails (dashed) document each part's path from its seated position to its exploded one.",
              "Saved explode states drop onto drawing sheets with item balloons keyed to the BOM.",
            ],
            table: {
              caption: "An explode recipe for a flange coupling (distances in mm).",
              headers: ["Component", "Direction", "Distance", "Note"],
              rows: [
                ["Base flange", "anchored", "0", "the anchor of the explode state"],
                ["Gasket", "along shaft axis", "15", "peels off first in disassembly"],
                ["Cover flange", "along shaft axis", "40", "clears the bolts"],
                ["Hex bolts (6)", "along own axes, staggered", "70", "radial stagger avoids overlap"],
                ["Nuts + washers", "beyond the bolts", "100", "furthest out, still paired"],
                ["Key", "along shaft axis", "45", "before the shaft withdraws"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building an exploded view",
              caption: "The steps that turn a mated assembly into a readable explosion.",
              steps: [
                { label: "Anchor the base component", note: "everything explodes relative to it" },
                { label: "Pull each part along its axis", note: "distance proportional to removal order" },
                { label: "Stagger fastener groups radially", note: "nothing hides behind anything" },
                { label: "Add explode trails", note: "dashed paths from seated to exploded" },
                { label: "Place on a drawing with balloons", note: "item numbers tied to the BOM" },
              ],
            },
            callout: {
              type: "exam",
              title: "Order equals distance",
              body: "Make explode distance proportional to assembly order — parts removed first fly furthest — and the reader rebuilds the assembly mentally without any legend. That single rule, stated in your answer with a sketch of a flange coupling, is usually worth the bulk of an exploded-view question.",
            },
            keyTerms: [
              { term: "Exploded view", definition: "A display state where assembly components are offset along their disassembly axes to expose order and position." },
              { term: "Explode trail", definition: "A dashed line drawn from a component's seated position to its exploded position." },
              { term: "Anchor component", definition: "The part held stationary in an exploded view, from which every other part's offset is measured." },
            ],
            examQuestions: [
              {
                q: "What is an exploded view and why is it used? Explain the procedure to create one for a flange coupling, including trails, staggering and its use on a drawing sheet.",
                marks: 7,
                outline: [
                  "Definition: components offset along their pull-off axes to expose assembly order and part positions.",
                  "Uses: assembly instructions, service manuals, spare-parts catalogues, presentations.",
                  "Procedure: anchor the base flange; drag each part along its disassembly axis.",
                  "Tabulate distances; keep removal order proportional to distance.",
                  "Stagger bolts radially; nuts beyond bolts; gasket first off, shaft last.",
                  "Add explode trails; save the explode state.",
                  "Place on a drawing sheet with item balloons keyed to the BOM.",
                ],
              },
              {
                q: "What do the dashed explode trails in an exploded view show?",
                marks: 2,
              },
              {
                q: "Why are fastener groups staggered radially in an exploded view, and why should explode distances follow assembly order?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Bill of materials",
            body: [
              "The bill of materials is the assembly tree flattened into a table. Each row carries an item number, a part code or drawing number, a description, the quantity, the material (or the standard a bought-out part satisfies) and remarks such as finish or heat treatment. The BOM is generated from the assembly, not typed: quantities are counted from the model, so patterning six bolts changes the row from 1 to 6 without anyone editing a table — the single most valuable property a parts list can have.",
              "The data pipeline runs from the part file. Custom properties — part number, description, material, finish, mass — are written once inside each part and inherited by every assembly and drawing that touches it; the BOM table on the drawing simply exposes chosen properties as columns. Standard parts follow a different rule from manufactured ones: a hex bolt is referenced as M8 x 30 per IS 1363 rather than given a drawing number, because nobody draws purchased hardware. The table sits directly above the title block, growing upward as items are added, and item balloons on the views tie each physical component to its row.",
              "The BOM is a contract with the shop floor and with purchasing, so its errors multiply. Checks before release: every balloon has exactly one item number, and every item number appears exactly once in the table; quantities match the physical assembly count; manufactured parts carry drawing numbers that exist; standard references are current. Exported to Excel, the same table feeds procurement and MRP systems; with masses rolled up, it prices the build. In the lab record, a correct BOM is the proof that the assembly — and therefore everything above it in this unit — is complete.",
            ],
            bullets: [
              "The BOM flattens the assembly tree: item number, part code, description, quantity, material, standard, remarks.",
              "Quantities are counted from the model — pattern six bolts and the row reads 6, with no table editing.",
              "Part properties (code, material, description) are written once in the part file and inherited everywhere.",
              "Standard parts cite IS/ISO numbers (e.g. hex bolt M8 x 30, IS 1363) instead of drawing numbers.",
              "Release checks: one balloon per item, quantities match, codes exist; Excel export feeds procurement.",
            ],
            table: {
              caption: "A sample bill of materials for a flange coupling.",
              headers: ["Item", "Part code", "Description", "Qty", "Material / Standard"],
              rows: [
                ["1", "FL-100", "Flange plate", "1", "IS 2062 E250 steel"],
                ["2", "SH-025", "Drive shaft", "1", "EN8 bright bar"],
                ["3", "KB-1409", "Parallel key 14 x 9 x 45", "1", "C45 steel"],
                ["4", "BL-M08x30", "Hex bolt M8 x 30", "6", "IS 1363, zinc plated"],
                ["5", "NT-M08", "Hex nut M8", "6", "IS 1363, zinc plated"],
                ["6", "GK-100", "Gasket, 2 mm", "1", "Nitrile rubber"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From part properties to a purchasing document",
              caption: "The BOM pipeline — data entered once, published everywhere.",
              stages: [
                { label: "Part files carry properties", note: "code, description, material entered once" },
                { label: "Assembly sets quantities", note: "patterns and instances counted automatically" },
                { label: "Insert the BOM table", note: "on the drawing, above the title block" },
                { label: "Balloon every item", note: "views tied to rows, one balloon per item" },
                { label: "Export to Excel", note: "procurement and MRP consume the same table" },
              ],
            },
            callout: {
              type: "warning",
              title: "One balloon, one row",
              body: "Never balloon a part six times because there are six of it — the quantity column exists so a single balloon can represent every instance. Multiple balloons sharing an item, or items with no balloon, are the two BOM errors examiners and shop floors both catch instantly.",
            },
            keyTerms: [
              { term: "Bill of materials (BOM)", definition: "A table listing every component of an assembly with item number, code, description, quantity and material." },
              { term: "Balloon", definition: "A numbered annotation on a drawing view that ties a component to its BOM row." },
              { term: "Custom property", definition: "A named attribute (part number, material, mass) stored in a part file and inherited by assemblies, drawings and BOMs." },
            ],
            examQuestions: [
              {
                q: "What is a bill of materials? Explain how it is generated from an assembly, the columns it carries, the role of balloons, and its importance in a drawing set.",
                marks: 7,
                outline: [
                  "Define the BOM as the assembly tree flattened into a table.",
                  "Columns: item number, part code, description, quantity, material, standard, remarks.",
                  "Generation: custom properties in part files feed the table; quantities counted from instances.",
                  "Standard parts cite IS/ISO references rather than drawing numbers — example M8 x 30, IS 1363.",
                  "Balloons tie drawing views to rows; one balloon per item, quantity column carries the count.",
                  "Placement: above the title block, growing upward; Excel export for procurement.",
                  "Importance: purchasing contract, assembly completeness, error propagation if wrong.",
                ],
              },
              {
                q: "What information does a balloon on an assembly drawing carry, and how is it linked to the table?",
                marks: 2,
              },
              {
                q: "Why are standard parts listed with IS/ISO references instead of drawing numbers, and what happens to the BOM when the assembly changes?",
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
      title: "Applications and FEA",
      summary:
        "CAD applied to real machine engineering: shafts and keys modeled by revolve-and-cut, spur gear geometry computed from module and teeth, orthographic and section views generated from 3D models under first-angle discipline, and finite element analysis — meshing, quality metrics, boundary conditions and linear static results verified by hand.",
      chapter: {
        number: "04",
        title: "Machine Components and Analysis",
        intro:
          "Unit IV points the toolchain at machine components: stepped shafts revolved from half-sections, spur gears computed from module formulas, the projection and section conventions that turn models into shop-ready drawings, and the FEA workflow — discretize, load, restrain, solve, verify.",
        inOneBreath:
          "Shafts are revolved half-sections with shoulders, fillets and a keyway cut on a tangent plane; gears are computed from the module — pitch dia m z, outside m(z+2), root m(z-2.5), base d cos(20 deg), centre distance m(z1+z2)/2 — then one tooth is arrayed z times and extruded; drawings follow first-angle placement with full, half, offset and broken-out sections hatched at 45 deg with ribs unhatched; and FEA replaces the continuum with elements joined at nodes, refines the mesh until convergence, applies loads and restraints, solves [K]{u} = {F}, and reports von Mises stress checked against yield and a hand calculation.",
        sections: [
          {
            number: "4.1",
            title: "Modeling shafts, keys and standard machine parts",
            body: [
              "A stepped shaft is a half-section revolved. The closed profile runs along the centreline and up the radii: journal, shoulder, gear seat, bearing seat, end — drawn once as a polyline and revolved 360 degrees about the axis. The shoulders are functional, not decorative: they locate bearings and gears axially, so their faces are the datum features the dimensioning scheme will reference. Chamfers at the ends ease assembly; fillets at the shoulder roots reduce the stress concentration that sharp corners would create — and each fillet must stay smaller than the bearing's own chamfer so the bearing seats flush against the shoulder face.",
              "The keyway is a rectangular slot cut on the gear seat, sized by standard, not by taste: a 44-50 mm shaft carries a 14 x 9 parallel key with a 5.5 mm deep keyway in the shaft (per IS 2048 / DIN 6885 practice). In plain AutoCAD the cut needs a tangent-plane sketch: a 3-point UCS placed on top of the seat, a rectangle 30-45 mm long and 14 wide centered on the axis, extruded 5.5 deep and subtracted. In parametric software the same cut is a slot feature on a tangent plane. Threads follow the cosmetic rule: drawings carry the simplified representation, and a modeled helix is built only when the model itself must drive printing or a fit check.",
              "Bought parts are never remodeled. Bolts, nuts, bearings, circlips, oil seals and keys come from standard-part libraries (Toolbox and its equivalents) complete with their IS/ISO references, so assembly time is spent on the parts that actually get manufactured. The modeling order that wins practicals: revolve the profile, cut the keyway, add fillets and chamfers, cosmetic-thread the ends, then generate the views — the drawing adds the centreline, the keyway dimensions (width, length, depth measured at the side, not the bottom chord), tolerance on the seats (a k6 zone is typical for bearing journals) and surface-finish symbols.",
            ],
            bullets: [
              "Shafts are revolved from a stepped half-section: journals, shoulders, seats and chamfers in one closed profile.",
              "Shoulders locate bearings and gears axially; their faces become the dimensioning datums.",
              "Shoulder fillets cut stress concentration — and must stay smaller than the bearing's own chamfer.",
              "Keyway for a 44-50 mm seat: 14 x 9 parallel key, 5.5 mm deep in the shaft, cut on a tangent-plane sketch.",
              "Threads are cosmetic on drawings, modeled helices only when the model must drive printing or fit checks.",
            ],
            codeExample: {
              language: "text",
              caption: "A stepped shaft: revolved half-section, then a keyway cut on a tangent plane.",
              code: `Command: PLINE
  Start: 0,0
  @0,15      (journal radius 15, length 12)
  @12,0
  @0,7       (shoulder up to radius 22 — gear seat)
  @38,0      (gear seat length 38)
  @0,-2      (step down to radius 20)
  @30,0      (bearing seat length 30)
  @0,-20     (down to the axis)
  CLOSE      (back to 0,0 along the centreline)

Command: REVOLVE   axis: 0,0 to 80,0   angle: 360

Command: UCS 3point
  (origin on top of the gear seat, X along the shaft)
Command: RECTANG   -15,-7  to  15,7
  (keyway 30 long, 14 wide — for a 14 x 9 key)
Command: EXTRUDE   height -5.5
Command: SUBTRACT  (shaft minus keyway block)
Command: FILLET    R2   (shoulder roots)`,
            },
            diagram: {
              kind: "flow",
              title: "The shaft modeling workflow",
              caption: "From half-section to toleranced drawing — the sequence the practical exam expects.",
              steps: [
                { label: "Sketch the stepped half-section", note: "radii up, lengths along the centreline" },
                { label: "Revolve 360 deg about the centreline", note: "one feature builds the whole shaft" },
                { label: "Cut the keyway on a tangent plane", note: "14 wide x 5.5 deep, standard-sized" },
                { label: "Add fillets, chamfers, cosmetic threads", note: "stress and assembly detailing" },
                { label: "Generate views and dimension", note: "centreline, keyway sizes, seat tolerances" },
              ],
            },
            callout: {
              type: "exam",
              title: "The most probable practical",
              body: "A stepped shaft with a keyway appears in some form almost every session. Rehearse the whole chain — PLINE half-section, REVOLVE, UCS 3point, RECTANG, EXTRUDE, SUBTRACT, FILLET — until it takes under twenty minutes; the remaining marks live in the dimensioning and the viva on fillet sizes.",
            },
            keyTerms: [
              { term: "Shoulder", definition: "The step on a shaft whose face locates a bearing, gear or seal axially." },
              { term: "Keyway", definition: "The rectangular slot in a shaft or hub seating a parallel key; sized by standard to the shaft diameter." },
              { term: "Cosmetic thread", definition: "A simplified thread representation shown on drawings without modeling the actual helix." },
            ],
            examQuestions: [
              {
                q: "Describe the complete modeling procedure for a stepped shaft with a keyway — from the half-section sketch to the toleranced drawing — naming every feature and command used, and state the standard key size for a 50 mm shaft.",
                marks: 7,
                outline: [
                  "Strategy: axisymmetric part, so revolve a closed half-section about the centreline.",
                  "Draw the half-section with PLINE: radii as verticals, lengths as horizontals, starting and ending on the axis.",
                  "REVOLVE about the centreline through 360 deg.",
                  "Keyway: UCS 3point on top of the gear seat; RECTANG 14 wide x 30-45 long; EXTRUDE 5.5; SUBTRACT.",
                  "Fillet the shoulder roots (R2), chamfer the ends; cosmetic threads where required.",
                  "For a 50 mm seat the parallel key is 14 x 9 with 5.5 mm depth in the shaft.",
                  "Drawing: centreline, keyway width/length/depth, seat tolerance (k6), surface-finish symbols.",
                ],
              },
              {
                q: "Why must the fillet radius at a shaft shoulder be smaller than the chamfer of the bearing seated against it?",
                marks: 2,
              },
              {
                q: "State the standard parallel key section and shaft keyway depth for a 44-50 mm diameter shaft.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Spur gears: geometry, calculation and modeling",
            body: [
              "Gear geometry is formula-driven, and every formula flows from two inputs: the module m and the tooth count z. The pitch circle, diameter d = m x z, is the rolling circle where teeth mesh; the addendum (tooth height above pitch) is m, so the outside diameter is m(z+2); the dedendum is 1.25 m, giving a root diameter of m(z-2.5) and a whole depth of 2.25 m. The circular pitch p = pi x m is the tooth-and-space length along the pitch circle, so one tooth occupies about p/2. The involute profile unwinds from the base circle of diameter d cos(20 deg) — the standard pressure angle being 20 degrees — and the centre distance of a meshing pair is simply m(z1 + z2)/2.",
              "The involute is approximated in the lab, not computed point-by-point: an arc or spline close to the true flank is entirely acceptable for a CAD exercise, while the reference circles are exact. The procedure: compute every diameter; draw the pitch, outside and root circles; sketch one tooth (approximate flank arcs from base to tip, a fillet at the root); trim the profile to one tooth; polar-array z teeth about the centre; join into a single closed profile; extrude to the face width; then cut the hub bore, the keyway and any lightening holes in the web. Meshing is verified in the assembly by placing the pair at the computed centre distance and running an interference check.",
              "The module is standardized (1, 1.25, 1.5, 2, 2.5, 3, 4 ...) and must be common to a meshing pair, because tooth engagement is geometric — a 2 mm module tooth will not share space with a 2.5 mm one. Design (in the machine design course) fixes m and z from power, speed and strength; CAD then owns the geometry. In parametric software the whole computation can live in the model: write d = m x z as a driven expression, change z from 24 to 26, and every circle, tooth count and the mate's centre distance updates — the parametric cycle of the previous unit doing real work.",
            ],
            bullets: [
              "Pitch circle dia d = m x z; module m is standardized and must be common to a meshing pair.",
              "Height relations: addendum = m, dedendum = 1.25 m, outside dia = m(z+2), root dia = m(z-2.5).",
              "Circular pitch p = pi x m; tooth thickness approx p/2 at the pitch circle.",
              "Base circle dia = d x cos(20 deg); the involute flank unwinds from it (standard pressure angle 20 deg).",
              "Centre distance a = m(z1 + z2)/2 — verify the mesh at exactly this distance in the assembly.",
            ],
            codeExample: {
              language: "python",
              caption: "Computing every spur gear reference diameter before modeling — m = 2, z = 24, mating with z2 = 60.",
              code: `import math

m, z, pressure = 2.0, 24, 20     # module (mm), teeth, pressure angle (deg)

pitch     = m * z                       # pitch circle dia
addendum, dedendum = m, 1.25 * m
outside   = pitch + 2 * addendum        # tip dia  = m(z+2)
root      = pitch - 2 * dedendum        # root dia = m(z-2.5)
base      = pitch * math.cos(math.radians(pressure))
circular  = math.pi * m                 # circular pitch
tooth     = circular / 2                # tooth thickness at pitch circle

print(f"pitch dia        = {pitch:.1f} mm")     # 48.0
print(f"outside dia      = {outside:.1f} mm")   # 52.0
print(f"root dia         = {root:.1f} mm")      # 42.0
print(f"base circle dia  = {base:.1f} mm")      # 45.1
print(f"tooth thickness  = {tooth:.2f} mm")     # 3.14

z2 = 60                                   # mating gear
print(f"centre distance  = {m * (z + z2) / 2:.1f} mm")  # 84.0`,
            },
            diagram: {
              kind: "pipeline",
              title: "Spur gear modeling in five stages",
              caption: "Compute, sketch, array, extrude, verify — the lab recipe.",
              stages: [
                { label: "Fix m and z; compute circles", note: "pitch, outside, root, base, centre distance" },
                { label: "Sketch one tooth", note: "approximate involute flanks, root fillet" },
                { label: "Polar-array z teeth and join", note: "one closed profile around the blank" },
                { label: "Extrude; cut bore, keyway, web holes", note: "hub and lightening details" },
                { label: "Mesh with the mate and check", note: "place at a = m(z1+z2)/2, interference test" },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorise the diameter ladder",
              body: "Five numbers carry this whole section: d = m z, da = m(z+2), df = m(z-2.5), db = d cos(20 deg), a = m(z1+z2)/2. They are the most repeated viva arithmetic in the unit — practise them with m = 2, z = 24 until the answers (48, 52, 42, 45.1 and the mate's distance) come without pause.",
            },
            keyTerms: [
              { term: "Module (m)", definition: "The size unit of gear teeth — pitch diameter divided by tooth count; standardized and common to a meshing pair." },
              { term: "Pitch circle", definition: "The imaginary rolling circle on which two meshing gears share tooth contact; diameter m x z." },
              { term: "Involute profile", definition: "The tooth flank curve generated by unwinding a line from the base circle; gives smooth, constant-velocity meshing." },
            ],
            examQuestions: [
              {
                q: "Define module, pitch circle, addendum and dedendum for a spur gear. For m = 2 and z = 24, compute the pitch, outside, root and base circle diameters and the centre distance with a 60-tooth mate; then outline the modeling steps.",
                marks: 7,
                outline: [
                  "Definitions: module (mm per tooth, standardized), pitch circle (rolling circle, d = m z), addendum (m above pitch), dedendum (1.25 m below).",
                  "Pitch dia = 2 x 24 = 48 mm.",
                  "Outside dia = m(z+2) = 52 mm; root dia = m(z-2.5) = 42 mm.",
                  "Base circle dia = 48 x cos(20 deg) = 45.1 mm; whole depth = 2.25 m = 4.5 mm.",
                  "Centre distance = 2(24+60)/2 = 84 mm.",
                  "Modeling: sketch the reference circles and one approximate-involute tooth.",
                  "Polar-array 24 teeth, join, extrude to face width, cut bore and keyway; verify mesh at 84 mm.",
                ],
              },
              {
                q: "What is the standard pressure angle of an involute gear, and which circle does the involute start from?",
                marks: 2,
              },
              {
                q: "Why must the module be standard and equal for a meshing pair of gears?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Orthographic and section views from 3D models",
            body: [
              "The 3D model ends its journey as a set of flat views, and the projection convention decides where each view lands. In first-angle projection — the ISO standard used across India and Europe — the object is imagined between the observer and the plane: the view from the top is placed BELOW the front view, and the view from the left is placed on the RIGHT. Third-angle (the American convention) flips it: the top view goes above, the left view on the left. The title block carries the truncated-cone symbol that declares which convention the sheet uses, and mixing the two conventions on one sheet is a scrapping offence.",
              "Sections reveal what hidden lines cannot. A cutting plane labelled A-A slices the part along its features, and the material the plane passes through is hatched — ANSI31 at 45 degrees for steel, with the angle or the spacing changed wherever two parts meet so adjacent hatching never merges. The section types: a full section cuts everything on the plane; a half section quarters a symmetric part, showing half outside and half cut, ideal for flanged fittings; an offset section steps the cutting plane through features that do not line up; a revolved or removed section shows the shape of a rib or spoke at one spot; a broken-out (local) section uncovers a small region without cutting the whole view.",
              "Rules keep sections honest. The arrows on the cutting-plane line show the direction of sight for the section view; hidden lines behind the cutting plane are generally omitted from the sectioned view because the hatching already tells that story; ribs and webs cut along their length are conventionally not hatched — hatching them would suggest a solid disc where a thin web exists. In practice the CAD tool generates the projected and sectioned views from the model automatically once the base view and cutting plane are placed; the engineer still chooses the front view (most contours, most natural rest position), the sheet layout, and every convention judgement listed above.",
            ],
            bullets: [
              "First angle (ISO, India): top view below the front, left view on the right; the title-block cone symbol declares it.",
              "Third angle: top view above, left view on the left — the two conventions must never mix on one sheet.",
              "Section types: full, half (symmetric parts), offset (stepped plane), revolved or removed, broken-out (local).",
              "Hatching at 45 deg (ANSI31); adjacent parts change angle or spacing; ribs cut along their length stay unhatched.",
              "Cutting-plane arrows show the direction of sight; hidden lines are usually omitted from sectioned views.",
            ],
            table: {
              caption: "View placement in first-angle versus third-angle projection.",
              headers: ["View wanted", "First-angle placement", "Third-angle placement"],
              rows: [
                ["Top (plan) view", "below the front view", "above the front view"],
                ["Left-side view", "right of the front view", "left of the front view"],
                ["Right-side view", "left of the front view", "right of the front view"],
                ["Bottom view", "above the front view", "below the front view"],
                ["Title-block symbol", "truncated cone, first-angle arrangement", "truncated cone, third-angle arrangement"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Placing the top view: which convention governs?",
              caption: "The projection convention is a fact on the sheet, not a layout preference.",
              start: "The front view of a part is drawn and the top view must now be placed",
              branches: [
                {
                  label: "Place it below the front view",
                  outcome: "correct first-angle placement — the plan looks from above and lands underneath, matching the ISO symbol",
                  good: true,
                },
                {
                  label: "Place it above the front view",
                  outcome: "that is third-angle placement — mixed with a first-angle title block it scrapes the sheet",
                  good: false,
                },
                {
                  label: "Place it wherever it fits",
                  outcome: "projection placement is fixed by convention, not by sheet convenience — random placement makes the drawing unreadable",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "The symbol is checked first",
              body: "Examiners open the title block before the geometry: if the truncated-cone symbol says first angle, every placement on the sheet must obey it. Draw the symbol once in your template and never decide view positions 'by eye' — the top view goes below the front view, the left view to the right, every time.",
            },
            keyTerms: [
              { term: "First-angle projection", definition: "The ISO projection method where the top view is placed below and the left view to the right of the front view." },
              { term: "Cutting-plane line", definition: "The labelled line (A-A) with direction arrows that defines where a section view cuts the part." },
              { term: "Broken-out section", definition: "A local section exposing only a small interior region, bounded by a freehand break line." },
            ],
            examQuestions: [
              {
                q: "Differentiate first-angle and third-angle projection with placement diagrams and the symbol. Explain full, half, offset and broken-out section views with their uses, and state the hatching rules for sectioned views.",
                marks: 7,
                outline: [
                  "First angle: object between observer and plane; top view below front, left view to the right — draw the arrangement.",
                  "Third angle: plane between observer and object; top view above, left view to the left — draw it.",
                  "The truncated-cone symbol in the title block declares the convention; mixing scraps the sheet.",
                  "Full section: cutting plane through the whole part — interior fully hatched.",
                  "Half section: symmetric parts, quarter removed — half outside view, half section.",
                  "Offset section: stepped cutting plane through non-collinear features; broken-out: local region only.",
                  "Hatching rules: ANSI31 at 45 deg, adjacent parts differ in angle or spacing, ribs cut lengthwise unhatched, hidden lines omitted.",
                ],
              },
              {
                q: "Where is the top view placed in first-angle projection, and where is the left-side view?",
                marks: 2,
              },
              {
                q: "Why are ribs not hatched in a sectioned view, and what do the arrows on the cutting-plane line indicate?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "FEA fundamentals: discretization and meshing",
            body: [
              "Finite element analysis replaces an impossible continuum problem with thousands of solvable little ones. The structure is discretized into finite elements joined at nodes; each element assumes a simple displacement field (its shape functions); element behavior is assembled into a global stiffness matrix; and the system [K]{u} = {F} is solved for nodal displacements, from which strains and stresses follow. The three stages are preprocessing (geometry, material, mesh, loads, boundary conditions), solution, and postprocessing (contour plots of stress and deflection) — the same three in every solver from student editions to industry codes.",
              "Element choice follows the geometry. Long slender members become 1D beam or truss elements; thin-walled parts become 2D shell elements (often after midsurface extraction, halving the model size); bulky parts take 3D tetrahedral or hexahedral solids. Mesh quality is then measured, not assumed: the aspect ratio (longest to shortest edge) wants to be near 1 and is rejected above 5; skewness measures angular distortion from the ideal shape, good below 0.5; the Jacobian measures mapping distortion, 1.0 ideal and 0.6 the usual acceptance floor. Distorted elements poison results quietly, which is what makes the quality check a habit.",
              "Mesh density follows the stress gradient: elements concentrate at fillets, holes, contacts and load points, and stay coarse where nothing interesting happens. The evidence that a mesh is good enough is a convergence study — refine the mesh, rerun, and compare; when the quantity of interest changes by less than about 5% between two refinements, the answer has converged. Two cautions close the discipline: sharp re-entrant corners are mathematical singularities where computed stress climbs forever with refinement — model the real fillet, or judge the stress a small distance away — and geometry cleanup (removing cosmetic chamfers and tiny features away from the load path) is done before meshing, not after.",
            ],
            bullets: [
              "FEA discretizes the structure into elements joined at nodes; [K]{u} = {F} yields displacements, then strains and stresses.",
              "Element choice: beams for slender members, shells for thin walls (midsurface), solid tets or hexas for bulky parts.",
              "Quality gates: aspect ratio near 1 (reject above 5), skewness below 0.5, Jacobian at or above 0.6.",
              "Refine where gradients live — fillets, holes, contacts — and run a convergence study to under 5% change.",
              "Sharp re-entrant corners are singularities: model the real fillet or read stress a distance away.",
            ],
            table: {
              caption: "Mesh quality metrics and their acceptance targets.",
              headers: ["Metric", "What it measures", "Good target"],
              rows: [
                ["Aspect ratio", "longest to shortest edge of an element", "near 1; reject above 5"],
                ["Skewness", "angular distortion from the ideal element shape", "below 0.5 (0 is perfect)"],
                ["Jacobian", "mapping distortion over the element", "at or above 0.6 (1.0 ideal)"],
                ["Refinement cost", "halving element size multiplies DOF several-fold", "refine locally, not globally"],
                ["Convergence delta", "change in the result between two refinements", "below 5%"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the mesh strategy",
              caption: "Element type and refinement follow geometry and the goal of the run.",
              axes: {
                x: "Geometry: thin-walled (left) vs solid and bulky (right)",
                y: "Goal: quick check (top) vs detailed stress (bottom)",
              },
              quadrants: [
                { label: "Coarse shell mesh", note: "thin wall, fast trends — midsurface model" },
                { label: "Coarse solid mesh", note: "bulky part, quick sanity check" },
                { label: "Refined shell mesh", note: "thin wall, detailed stress with local refinement" },
                { label: "Fine solid mesh", note: "fillets, contacts and concentrations resolved" },
              ],
            },
            callout: {
              type: "warning",
              title: "One mesh is a guess, two are a result",
              body: "Never report a stress from a single mesh. Refine once, rerun, and quote both numbers: 'max von Mises moved from 148 to 154 MPa, under 5% — converged.' That one sentence is the difference between a marked FEA answer and a coloured picture.",
            },
            keyTerms: [
              { term: "Finite element", definition: "A small, simple-shaped subdomain whose displacement field is approximated by shape functions." },
              { term: "Node", definition: "A point where elements connect and where displacements are solved in the global system." },
              { term: "Mesh convergence", definition: "The evidence, from successive refinements, that further mesh refinement no longer changes the result appreciably." },
            ],
            examQuestions: [
              {
                q: "Explain the steps of finite element analysis from preprocessing to postprocessing. Discuss element types, mesh quality metrics and mesh convergence with a suitable example.",
                marks: 7,
                outline: [
                  "Preprocessing: idealize geometry, assign material, mesh, apply loads and boundary conditions.",
                  "Discretization: continuum into elements joined at nodes; shape functions per element.",
                  "Solution: assemble [K], solve [K]{u} = {F} for displacements; derive strains and stresses.",
                  "Postprocessing: deflected shape, von Mises and principal stress contour plots.",
                  "Element types: beam/truss (slender), shell (thin walls, midsurface), solid tets/hexas (bulky).",
                  "Quality metrics: aspect ratio near 1 (max 5), skewness below 0.5, Jacobian at or above 0.6.",
                  "Convergence: refine until the result changes under 5%; note singularity caution at sharp corners.",
                ],
              },
              {
                q: "Define the aspect ratio of a finite element and state its acceptable limit.",
                marks: 2,
              },
              {
                q: "Why are shell elements preferred over solid elements for a sheet-metal bracket, and what is a midsurface?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Linear static analysis: loads, boundary conditions and results",
            body: [
              "Linear static analysis earns its name from three assumptions. Loads are applied slowly, so inertia and damping never enter (no dynamics); the material follows Hooke's law — stress proportional to strain — within the elastic limit; and displacements are small enough that the geometry's stiffness is unchanged (no large-rotation effects). The inputs are then material constants — for steel, E = 2 x 10^5 MPa and Poisson's ratio 0.3, with density 7.85 x 10^-6 kg per cubic mm for gravity loads — the loads (forces, pressures, bearing loads, gravity) and the boundary conditions or restraints (fixed faces, prescribed displacements, symmetry conditions that halve the model).",
              "Results are read in a fixed order. Displacement first, with the deformed shape exaggerated to reveal the load path; then von Mises stress, the ductile-failure criterion, compared against yield — a factor of safety of yield divided by maximum von Mises; then principal stresses where brittleness or fatigue matters; then reaction forces, which must balance the applied loads exactly or the restraints were wrong. Loads are applied on split faces rather than at points, because a point load on a mesh is a singularity that inflates stress with every refinement, exactly like the sharp corner of the previous section.",
              "Verification is the analyst's signature. Compute the answer by hand first: a uniform rod gives sigma = P/A; a cantilever of length L, second moment of area I, under a tip load P deflects delta = P L^3 / (3 E I) with maximum bending stress M c / I. The FEA result must sit within a few percent of these — if it does not, the error is in the model (units, restraints, mesh), not in the formulas. Unit consistency is the silent killer: mm-N-MPa is the standard set, and one mm entered as a metre inflates displacements a thousand-fold. The lab deliverable is the full story: restraint diagram, mesh with convergence, von Mises plot, deflection plot, hand check, factor of safety, conclusion.",
            ],
            bullets: [
              "Linear static assumes slow loading, linear-elastic material (Hooke) and small displacements; steel: E = 2 x 10^5 MPa, Poisson 0.3.",
              "Loads go on split faces, never points — a point load on a mesh is a stress singularity.",
              "Restraints: fixed faces, prescribed displacements and symmetry conditions that halve the model size.",
              "Read results in order: displacement (load path), von Mises vs yield (safety factor), then reactions that must balance the loads.",
              "Verify by hand before believing: sigma = P/A, cantilever delta = P L^3 / (3 E I) — FEA must land within a few percent.",
            ],
            codeExample: {
              language: "python",
              caption: "The hand check every FEA run must pass — cantilever, tip load, steel.",
              code: `# Steel cantilever: b x h section, length L, tip load P
E = 2.0e5          # Young's modulus, MPa (N/mm2)
b, h = 20.0, 40.0  # cross-section, mm
L = 300.0          # length, mm
P = 5000.0         # tip load, N

I      = b * h**3 / 12.0            # second moment of area, mm4
delta  = P * L**3 / (3 * E * I)     # tip deflection, mm
M      = P * L                      # max bending moment, N mm
sigma  = M * (h / 2) / I            # max bending stress, MPa

print(f"I            = {I:.0f} mm4")           # 106667
print(f"tip deflection = {delta:.2f} mm")      # 2.11
print(f"max stress     = {sigma:.1f} MPa")     # 281.3

# The FEA answer must sit within a few percent of these values;
# if not, check units (mm-N-MPa), restraints and mesh first.`,
            },
            diagram: {
              kind: "flow",
              title: "The linear static workflow",
              caption: "Material, restraints, loads, solve, verify — in that order, every time.",
              steps: [
                { label: "Assign material", note: "E, Poisson, density — units fixed first" },
                { label: "Restrain the model", note: "fixed faces or symmetry halves" },
                { label: "Apply loads on faces", note: "forces and pressures, never points" },
                { label: "Solve [K]{u} = {F}", note: "displacements, strains, stresses" },
                { label: "Read and verify", note: "von Mises vs yield, reactions, hand check" },
              ],
            },
            callout: {
              type: "tip",
              title: "Hand calculation first",
              body: "Run the hand calculation BEFORE the mouse, not after. A five-line sigma = P/A or cantilever check gives you the number the FEA must reproduce — and when the screen disagrees, you will know within seconds whether to suspect the mesh, the restraints or your own arithmetic.",
            },
            keyTerms: [
              { term: "Linear static analysis", definition: "FEA assuming slow loading, linear-elastic material and small displacements, solving for equilibrium once." },
              { term: "Von Mises stress", definition: "The combined-stress measure compared against yield for ductile materials; the default result plot." },
              { term: "Boundary condition", definition: "A restraint or prescribed displacement defining how the model is supported during the analysis." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of linear static FEA. Explain the roles of material properties, loads and boundary conditions, and describe how results are interpreted and verified with a hand calculation.",
                marks: 7,
                outline: [
                  "Assumptions: static (slow) loading, linear-elastic material per Hooke's law, small displacements.",
                  "Material inputs: E, Poisson's ratio, density — steel: 2 x 10^5 MPa, 0.3.",
                  "Loads: forces, pressures, gravity — applied on faces to avoid singularities.",
                  "Boundary conditions: fixed faces, prescribed displacements, symmetry restraints halving the model.",
                  "Results: displacement plot (load path), von Mises vs yield for the factor of safety, reaction balance.",
                  "Verification: sigma = P/A and delta = P L^3 / (3 E I) — FEA within a few percent.",
                  "Deliverable: restraint diagram, mesh convergence, contour plots, hand check, conclusion.",
                ],
              },
              {
                q: "Write the two material constants a linear static steel analysis requires, with values and units.",
                marks: 2,
              },
              {
                q: "Why should loads be applied on faces rather than at points, and why must reaction forces equal the applied loads?",
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
      title: "CNC and Rapid Prototyping",
      summary:
        "The digital manufacturing chain: CNC part programming in G-code, toolpath generation and simulation through the post-processor, rapid prototyping from STL through FDM and SLA, 3D scanning and reverse engineering back into parametric CAD, and the mini project that stitches every unit into one working prototype.",
      chapter: {
        number: "05",
        title: "CNC, RP and the Mini Project",
        intro:
          "Unit V closes the loop from model to machine and back: word-address G-code programs for mills and lathes, CAM toolpaths posted and verified before metal is cut, additive builds from STL files on FDM and SLA machines, scanners that digitise physical parts for reverse engineering, and the capstone mini project.",
        inOneBreath:
          "A CNC block carries N, G, X-Y-Z, F, S, T and M words — G00 rapids, G01 feeds, G02/G03 arcs, G90 absolute, G54 part zero, M03/M05 spindle, M06 tool change; CAM turns the solid model into CLDATA, simulates gouges and collisions, then posts it to the controller's dialect; additive manufacturing slices an STL into FDM filament roads or SLA resin layers; scanners return point clouds that are registered, meshed and rebuilt as parametric CAD; and the mini project chains parts, assembly, drawings, FEA, G-code and a printed prototype into one deliverable.",
        sections: [
          {
            number: "5.1",
            title: "CNC fundamentals and the G-code language",
            body: [
              "A CNC machine is a numerically controlled machine tool driven by a computer controller, and its program is written in word-address format: each block is a list of words, and each word is a letter plus a number. N numbers the blocks; G words prepare the motion (preparatory codes); X, Y and Z give the target coordinates; F sets the feed rate; S the spindle speed; T the tool; and M words switch machine functions. A three-axis mill moves in X, Y and Z by the right-hand rule; a lathe works in X and Z about the spindle axis. The controller executes blocks in order, exactly as written.",
              "The G-code core is small. G00 rapid-points to a location at traverse speed — never for cutting; G01 cuts a straight line at the F feed; G02 and G03 cut arcs clockwise and counter-clockwise, defined by I, J centre offsets or by an R radius; G90 selects absolute coordinates, G91 incremental; G21 (metric) and G20 (imperial) fix units; G54 activates the work offset that locates part zero in machine coordinates; G41 and G42 apply cutter radius compensation left and right of the path; G43 applies tool length compensation. M-codes run the machine around the motion: M03 and M05 start and stop the spindle, M06 changes to the T-word tool, M08 and M09 control coolant, and M30 ends the program and rewinds.",
              "A program has a fixed anatomy. A safety line cancels what the previous program may have left active (G90, G21, G17 for the XY plane, G40, G49, G80); the work offset and tool are set; the tool rapidsto a safe height above its start point; cutting passes follow at feed; a retract, spindle stop and M30 close. Speeds and feeds are computed, not guessed: spindle speed N = 1000 x Vc / (pi x D) for a cutting speed Vc (m/min) and tool diameter D (mm), and feed F = feed-per-tooth x number of flutes x N. Part zero is placed at a logical corner or centre, stated in a comment, and held constant through the whole program.",
            ],
            bullets: [
              "Word-address block: N (number), G (preparatory), X/Y/Z (targets), F (feed), S (speed), T (tool), M (machine).",
              "Motion: G00 rapid (never cut), G01 straight feed, G02/G03 arcs clockwise and counter-clockwise (I/J or R).",
              "G90 absolute vs G91 incremental; G21 mm; G54 work offset sets part zero; G43 tool length; G41/G42 cutter compensation.",
              "M-codes: M03/M05 spindle start/stop, M06 tool change, M08/M09 coolant, M30 program end with rewind.",
              "Speeds and feeds: N = 1000 x Vc / (pi x D) rpm; F = feed-per-tooth x flutes x N.",
            ],
            codeExample: {
              language: "text",
              caption: "A complete face-milling program for a 120 x 50 plate, 16 mm end mill, part zero at the lower-left top corner.",
              code: `O1001  (FACE MILL 120 x 50 PLATE - PART ZERO: LOWER-LEFT, TOP)
N10 G21 G90 G17 G40 G49 G80   (safety line: mm, absolute, XY plane, comps off)
N20 G54                       (work offset - part zero)
N30 M06 T01                   (tool 1: 16 mm flat end mill)
N40 S1200 M03                 (spindle 1200 rpm clockwise)
N50 G00 X0 Y-10               (rapid to the start, clear of stock)
N60 G43 H01 Z5.0              (tool length comp, safe height)
N70 G01 Z-1.0 F100            (plunge 1 mm deep at 100 mm/min)
N80 G01 X120 Y-10 F200        (pass 1 across the stock)
N90 G01 Y40                   (step over)
N100 G01 X0                   (pass 2 back)
N110 G00 Z25                  (retract to safe height)
N120 M05                      (spindle stop)
N130 M30                      (program end and rewind)`,
            },
            diagram: {
              kind: "compare",
              title: "G-codes versus M-codes",
              caption: "One family moves the tool; the other runs the machine.",
              left: {
                heading: "G-codes — preparatory",
                items: [
                  "tell the controller HOW to move",
                  "G00 rapid traverse, G01 straight feed",
                  "G02 / G03 clockwise and counter-clockwise arcs",
                  "G90 / G91 absolute vs incremental; G54 work offset",
                  "modal — they stay active until replaced",
                ],
              },
              right: {
                heading: "M-codes — machine functions",
                items: [
                  "tell the machine WHAT to switch",
                  "M03 / M05 spindle start and stop",
                  "M06 tool change (with the T word), M08 / M09 coolant",
                  "M00 / M01 program and optional stops",
                  "M30 program end with rewind to the top",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The two guaranteed viva pairs",
              body: "G00 vs G01: rapid traverse for positioning, never cutting — versus a straight cutting move at the F feed. G90 vs G91: coordinates measured from part zero — versus displacements measured from the current position. Answer each pair in one sentence with the word 'rapid' or 'absolute/incremental' and both questions are done.",
            },
            keyTerms: [
              { term: "Word address format", definition: "The CNC program format in which each block is a list of letter-plus-number words (N, G, X, F, S, T, M)." },
              { term: "Modal code", definition: "A code that stays active until another code of the same group replaces it, e.g. G01 persisting across blocks." },
              { term: "Work offset (G54)", definition: "The stored coordinate shift that locates part zero within machine coordinates." },
            ],
            examQuestions: [
              {
                q: "Explain the structure of a CNC part program in word-address format. Write a complete block-by-block program for facing a 120 x 50 mm plate with a 16 mm end mill, stating your assumptions for speeds and feeds.",
                marks: 7,
                outline: [
                  "Structure: blocks of words — N number, G preparatory, X/Y/Z targets, F feed, S speed, T tool, M machine functions.",
                  "Core codes: G00 rapid, G01 feed, G90 absolute, G21 mm, G54 offset, G43 length comp.",
                  "Assumptions: part zero at lower-left top corner; 1 mm depth of cut; S1200 from N = 1000 Vc / (pi D); feed 200 mm/min.",
                  "Program: safety line (G21 G90 G17 G40 G49 G80), G54, M06 T01, S1200 M03.",
                  "Rapid to start clear of stock, G43 safe height, plunge at F100.",
                  "Two cutting passes at F200 with a step-over between; retract G00 Z25.",
                  "M05 spindle stop, M30 end and rewind — explain each closing block.",
                ],
              },
              {
                q: "Differentiate between G00 and G01.",
                marks: 2,
              },
              {
                q: "What do G90, G91 and G54 stand for? Derive the spindle speed formula for a 16 mm cutter at a cutting speed of 60 m/min.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Toolpath generation, post-processing and simulation",
            body: [
              "CAM software turns the solid model into machine motion through a fixed chain. The model is imported; the stock and the part zero are defined; the operations are chosen — facing, 2D pocketing, contouring, adaptive roughing, drilling cycles like G81 and G83 — each with a tool, step-over and step-down; the result is a toolpath of cutter location data (CLDATA), the neutral record of where the tool tip should go. The post-processor then translates that CLDATA into the G-code dialect of one specific controller — Fanuc, Siemens, Haas, Heidenhain — because G-code is standard the way dialects are standard: mostly, until the crash.",
              "Tool selection and strategy carry the machining intelligence. An end mill's diameter and flute count set its stiffness and chip load; roughing strategies (adaptive or trochoidal) keep the tool engagement constant so cuts are fast and tools survive, while finishing passes with a smaller step-over set the final size and surface. Lead-in and lead-out moves keep the cutter from dwelling on the finished wall; tabs or holding bridges keep a cut-off part from becoming a projectile. Speeds and feeds obey the same formulas as the previous section, computed per material and tool, not copied from a template.",
              "Verification happens before metal moves, in layers. Backplot replays the toolpath as coloured lines — fast but blind to the stock. Solid verification animates material removal against a stock model and shows the emerging part; against it run the checks that prevent scrap and crashes: rapid moves passing through stock, gouges below the finished surface, tool-holder collisions with the part, clamp collisions, feed-rate spikes at corners, and leftover stock that flags a missing operation. Machine simulation adds the full kinematics of the real machine. The final checks happen at the machine itself: a dry run above the part and single-block execution through the first cut.",
            ],
            bullets: [
              "The CAM chain: model — stock and part zero — operations and tools — CLDATA toolpaths — post-processor — G-code.",
              "The post-processor translates neutral CLDATA into the controller's dialect (Fanuc, Siemens, Haas, Heidenhain).",
              "Roughing removes bulk with constant engagement (adaptive/trochoidal); finishing passes set final size and surface.",
              "Backplot draws the path; solid verification animates the material actually removed from the stock.",
              "Checks before cutting: rapid-through-stock, gouges, holder and clamp collisions, corner feed spikes, leftover stock.",
            ],
            table: {
              caption: "Simulation checks and what missing each one costs.",
              headers: ["Check", "What it catches", "If missed"],
              rows: [
                ["Rapid through stock", "a G00 move crossing the material", "snapped tool at traverse speed"],
                ["Gouge detection", "tool dipping below the finished surface", "scrap part, remachining cost"],
                ["Holder collision", "tool holder or collet hitting the part", "spindle damage, days of downtime"],
                ["Clamp collision", "tool path crossing a fixture bolt", "mid-program crash"],
                ["Feed spike at corners", "engagement jumping in internal corners", "chatter, insert or cutter failure"],
                ["Rest stock", "unmachined material left behind", "second setup needed, unfinished walls"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From 3D model to verified G-code",
              caption: "The CAM pipeline — nothing cuts until the last stage passes.",
              stages: [
                { label: "Import model, define stock", note: "stock size and part zero fixed" },
                { label: "Choose tools and parameters", note: "per operation: rough, finish, drill" },
                { label: "Generate toolpaths", note: "CLDATA — cutter location data" },
                { label: "Simulate and verify", note: "gouges, collisions, rest stock" },
                { label: "Post-process to G-code", note: "controller dialect; dry run at the machine" },
              ],
            },
            callout: {
              type: "warning",
              title: "Posts are not interchangeable",
              body: "A Fanuc post run on a Siemens controller (or on a different machine's kinematics) can command motions the machine will faithfully execute into a crash. The post-processor is part of the machine's identity — verify the first run of any new post with a dry run and single-block, exactly as you would a hand-written program.",
            },
            keyTerms: [
              { term: "CLDATA", definition: "Cutter location data — the neutral toolpath record of where the tool tip must go, before posting." },
              { term: "Post-processor", definition: "The translator converting CLDATA into the specific G-code dialect of one machine controller." },
              { term: "Solid verification", definition: "Simulation that animates material removal from a stock model, exposing gouges and collisions." },
            ],
            examQuestions: [
              {
                q: "Explain the CAM workflow from a 3D model to a verified CNC program, including the role of CLDATA and the post-processor, and list the checks performed during toolpath simulation.",
                marks: 7,
                outline: [
                  "Import the solid model; define the stock and part zero to match the machine setup.",
                  "Select operations — face, rough, finish, drill — each with tool, step-over, step-down.",
                  "Compute speeds and feeds: N = 1000 Vc / (pi D); F = feed-per-tooth x flutes x N.",
                  "The CAM engine generates CLDATA — the neutral cutter location data.",
                  "The post-processor translates CLDATA into the controller's dialect; posts are machine-specific.",
                  "Simulation checks: rapid through stock, gouges, holder and clamp collisions, feed spikes, rest stock.",
                  "Final verification at the machine: dry run and single-block through the first cut.",
                ],
              },
              {
                q: "What is CLDATA and which software component converts it into machine code?",
                marks: 2,
              },
              {
                q: "Why is an adaptive (trochoidal) roughing strategy gentler on the tool than a conventional full-width cut?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Rapid prototyping: STL, FDM and SLA",
            body: [
              "Rapid prototyping — additive manufacturing — builds a part layer by layer directly from the digital model, so complexity costs almost nothing and there are no fixtures. The chain is short: CAD model, STL export, slicing, machine. The STL format approximates the model's surface with triangular facets; the tessellation is controlled by a chord height (the maximum deviation between facet and true surface) and an angle tolerance, and the trade is always smoothness against file size — a chord height of 0.01 to 0.05 mm suits printed parts, while a lazy default can facet away small radii or balloon the file past what a slicer enjoys. The mesh must be watertight (manifold): gaps and flipped normals are the classic slicer crash.",
              "FDM, fused deposition modeling, extrudes a thermoplastic filament — PLA, ABS, PETG — through a heated nozzle that traces each sliced layer as roads of material: outer perimeters first, then infill at 10 to 100 percent. Layer heights of 0.1 to 0.3 mm set the resolution; overhangs steeper than about 45 degrees need support structures; first-layer adhesion is managed with a brim or raft. FDM is cheap, office-safe and fast, but the part is anisotropic — layer-to-layer bonds are the weakest direction, so loads should not pull the print apart across its layers. SLA, stereolithography, cures a liquid photopolymer resin point by point with a UV laser at layer heights from 0.025 to 0.1 mm, giving the finest detail and smoothest surfaces of the lab processes. Its costs: washing in alcohol and a UV post-cure, resin that ages in the tank, and a brittleness that suits patterns and show models more than jigs.",
              "Choosing between them is three questions. Function (a bracket, a jig, a fit-check) points to FDM; appearance or fine features (a pattern, a dental model, a show piece) points to SLA. Orientation decides both quality and strength: cosmetic faces go up, supports go where they harm least, and the weakest layer direction must not align with the load. The slicer settings finish the plan — layer height, wall loops, infill percentage, support threshold — and the print is judged like any manufacturing process: first-layer quality, dimensional accuracy against the model, and the state of the supports when they come off.",
            ],
            bullets: [
              "The additive chain: CAD model — STL export — slice — machine; complexity is nearly free and fixtures do not exist.",
              "STL quality is set by chord height and angle tolerance — smoothness traded against file size; meshes must be watertight (manifold).",
              "FDM: heated filament (PLA, ABS, PETG) in 0.1-0.3 mm layers — cheap and safe, but weakest across the layers.",
              "SLA: UV laser cures resin in 0.025-0.1 mm layers — finest detail, but needs washing, UV post-cure and fresh resin.",
              "Orientation rules: cosmetic faces up, supports where they harm least, layer direction never aligned with the load.",
            ],
            table: {
              caption: "STL export and slicing settings with typical values.",
              headers: ["Setting", "Typical value", "Effect"],
              rows: [
                ["Chord height", "0.01-0.05 mm", "smaller = smoother surface, larger STL file"],
                ["Angle tolerance", "10-30 deg", "finer tessellation on shallow curves"],
                ["File format", "binary STL", "about six times smaller than ASCII STL"],
                ["Layer height (FDM)", "0.1-0.3 mm", "thin = smoother and slower"],
                ["Infill", "20-40%", "higher = stronger and heavier"],
                ["Support threshold", "45-60 deg overhang", "steeper overhangs print unsupported"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "FDM versus SLA",
              caption: "The two lab processes: cheap and tough against fine and smooth.",
              left: {
                heading: "FDM — filament",
                items: [
                  "heated nozzle extrudes thermoplastic (PLA, ABS, PETG)",
                  "layers of 0.1-0.3 mm",
                  "office-friendly cost, materials and smell",
                  "anisotropic: weakest between layers",
                  "brackets, jigs, enclosures, fit checks",
                ],
              },
              right: {
                heading: "SLA — resin",
                items: [
                  "UV laser cures liquid photopolymer point by point",
                  "layers of 0.025-0.1 mm — finest detail",
                  "smooth surfaces straight off the build plate",
                  "needs IPA wash and UV post-cure; resin ages",
                  "patterns, dental models, show pieces",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Check the STL before the printer does",
              body: "Export at 0.01-0.02 mm chord height for print-scale parts, in binary, and run the mesh through a repair check (watertight, no flipped normals, walls at least 1 mm). Two minutes of checking beats a failed four-hour print discovered at 90 percent — the sentence worth writing in your project report.",
            },
            keyTerms: [
              { term: "STL", definition: "The de facto additive-manufacturing exchange format: a model surface approximated by triangular facets." },
              { term: "Chord height", definition: "The maximum allowed deviation between an STL facet and the true curved surface; smaller values give smoother, larger files." },
              { term: "FDM (fused deposition modeling)", definition: "Additive process extruding thermoplastic filament through a heated nozzle to trace each sliced layer." },
            ],
            examQuestions: [
              {
                q: "What is rapid prototyping? Explain the STL format and its export parameters, and compare the FDM and SLA processes with advantages, limitations and applications.",
                marks: 7,
                outline: [
                  "Define rapid prototyping: layer-by-layer additive builds directly from CAD — no fixtures, complexity free.",
                  "STL: triangular facet approximation; chord height and angle tolerance control tessellation; watertight requirement.",
                  "FDM: filament extrusion, materials (PLA, ABS), 0.1-0.3 mm layers, supports above 45 deg overhangs.",
                  "FDM advantages and limits: cheap, safe; anisotropic, visible layer lines.",
                  "SLA: UV laser curing photopolymer resin, 0.025-0.1 mm layers, wash and post-cure.",
                  "SLA advantages and limits: finest detail, smooth surfaces; brittle, resin handling.",
                  "Applications of each, closing with orientation rules that both processes share.",
                ],
              },
              {
                q: "What is a watertight (manifold) STL mesh, and what happens if the slicer receives one that is not?",
                marks: 2,
              },
              {
                q: "Why are FDM parts weaker along the build (Z) direction, and how does part orientation reduce the problem?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "3D scanning and reverse engineering",
            body: [
              "3D scanning measures a physical object into digital geometry, and the technology family is chosen by scale and accuracy. Laser triangulation watches a laser stripe with a camera and computes depth from the viewing angle — sub-0.1 mm accuracy on small parts. Structured light projects fringe patterns whose deformation encodes shape, capturing full fields fast. Time-of-flight and LIDAR sensors time a laser pulse's return for ranges of metres — buildings, not bearings — while a CMM touch probe, slow and contact-based, delivers the certified accuracy that inspection rooms trust. Shiny, transparent or very dark surfaces defeat optical scanners and get a matte spray first.",
              "The reverse-engineering workflow is a fixed sequence. The part is scanned from several overlapping viewpoints (20 to 30 percent overlap between passes); the scans are registered — aligned on reference markers or by best-fit surface matching (ICP) — and merged into a single point cloud; the cloud is cleaned of outliers and noise, then wrapped into a triangle mesh; holes are filled, smoothing applied carefully so real edges survive; and finally the mesh is converted to engineering geometry: primitives and NURBS surfaces fitted directly, or — the professional route — new parametric sketches drawn over sections of the mesh so the result is an editable CAD part with proper features rather than a lumpy faceted shell.",
              "Verification closes the loop. The reconstruction is compared back against the scan in a colour deviation map — typically a plus-minus 0.1 mm band — with green inside tolerance and red marking the zones that must be reworked; out-of-tolerance areas send the process back to meshing or rescanning. The applications justify the effort: spare parts for equipment whose drawings no longer exist, tooling and wear analysis, scan-versus-CAD quality inspection, medical insoles and prosthetics, dental work, and heritage archiving. The one-sentence discipline to remember for the viva: a scan produces a mesh, and a mesh is not a CAD model — reverse engineering ends with parametric geometry and a deviation map, not with an STL.",
            ],
            bullets: [
              "Scanner families: laser triangulation, structured light, time-of-flight (LIDAR) and CMM touch probes — range and accuracy trade off.",
              "Workflow: multi-angle scans — registration and merge — point-cloud cleanup — mesh wrap — CAD rebuild.",
              "Register overlapping scans on markers or best-fit (ICP); keep 20-30 percent overlap between passes.",
              "Rebuild parametric features over the mesh — a raw STL is faceted and not editable as a CAD part.",
              "A colour deviation map (e.g. plus-minus 0.1 mm band) certifies the reconstruction against the physical part.",
            ],
            table: {
              caption: "3D scanning technologies and their niches.",
              headers: ["Technology", "Principle", "Typical accuracy", "Best for"],
              rows: [
                ["Laser triangulation", "camera watches a laser stripe", "0.02-0.1 mm", "small parts, fine detail"],
                ["Structured light", "projected fringes deform over shape", "0.02-0.1 mm", "fast full-field scans"],
                ["Time-of-flight / LIDAR", "laser pulse return time", "1-10 mm", "large structures, buildings"],
                ["CMM touch probe", "contact probing of points", "0.001-0.01 mm", "certified inspection"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The reverse-engineering loop",
              caption: "Scan to CAD to verification — and back to the scanner if the map runs red.",
              steps: [
                { label: "Scan from overlapping viewpoints", note: "20-30% overlap between passes" },
                { label: "Register and merge", note: "markers or best-fit (ICP) into one cloud" },
                { label: "Clean and wrap the mesh", note: "outliers out, holes filled, edges preserved" },
                { label: "Rebuild parametric geometry", note: "sketches and features over the mesh" },
                { label: "Verify with a deviation map", note: "green passes; red zones restart the loop" },
              ],
            },
            callout: {
              type: "warning",
              title: "Reflection, not resolution",
              body: "The usual scan failure is not the sensor — it is the surface. Shiny machined faces, dark plastics and anything transparent scatter or swallow the laser and return noise. A light coat of matte developer spray (or a scanning spray) converts an impossible object into a scannable one in seconds; mention it and the viva answer sounds like field experience.",
            },
            keyTerms: [
              { term: "Point cloud", definition: "A large set of measured 3D points representing the scanned surface of an object." },
              { term: "Registration", definition: "Aligning multiple overlapping scans into one coordinate frame, using markers or best-fit surface matching (ICP)." },
              { term: "Deviation map", definition: "A colour comparison of the reconstruction against the scan, showing where the CAD model departs from measured reality." },
            ],
            examQuestions: [
              {
                q: "Explain the reverse-engineering workflow from 3D scanning to a CAD-ready model, naming the main scanner technologies with typical accuracies and the purpose of registration, meshing and deviation checking.",
                marks: 7,
                outline: [
                  "Define reverse engineering: physical part to digital model when no drawings exist.",
                  "Scanner families with accuracy: laser triangulation (0.02-0.1 mm), structured light, LIDAR (mm-level, large range), CMM probe (highest, contact).",
                  "Capture: multiple overlapping scans, 20-30% overlap; matte spray for shiny surfaces.",
                  "Registration on markers or ICP best-fit; merge into one point cloud; clean outliers.",
                  "Meshing: wrap into triangles, fill holes, smooth without killing edges.",
                  "CAD rebuild: fit NURBS/primitives or sketch parametric features over the mesh.",
                  "Deviation map (plus-minus 0.1 mm band) verifies; red zones loop back for rework.",
                ],
              },
              {
                q: "What is a point cloud, and what does registration of scans mean?",
                marks: 2,
              },
              {
                q: "Why is a scanned mesh rebuilt parametrically instead of being used directly as the CAD model?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Mini project: from CAD model to working prototype",
            body: [
              "The mini project is the syllabus assembled into one object. Choose a real assembly with a story and eight to fifteen unique parts — a bench vice, a flange coupling, a knuckle joint, a screw jack, a small gear pump — because the examiner grades the engineering chain, and every unit of this subject contributes a link: parametric part models, an assembly with proper mates, an exploded view with balloons, a drawing set with a section view and tolerances, a bill of materials, an FEA study of the most-loaded member, a G-code program with simulated toolpath for one machined part, and a 3D-printed component you can hand over.",
              "Execution is a management exercise as much as a modeling one. Files follow a naming standard — project, part, revision — with two backup locations, because 'final_final.dwg' and a single pen drive have ended more projects than any software bug. The report tells the story in the order an engineer would defend it: objective and scope, design intent (which dimensions drive and why), the modeling plan (which feature first and what it unlocks), the analysis with its hand check, the manufacturing plan with operations, tools and feeds, the print results with orientation and supports, a cost sketch, conclusions and references. Milestones are weekly, and each deliverable is finished — drawn, checked, signed — before the next begins.",
              "Evaluation rewards process over spectacle. The examiner opens the feature tree: are sketches fully constrained, features renamed, the design intent legible? Then the sheet: border, title block, projection symbol, dimensions from datums, tolerances on functional fits. Then consistency: balloons match BOM rows, quantities match the assembly, the FEA mesh shows convergence and its hand check, the G-code carries safe retracts and a stated G54, the print shows deliberate orientation. A small, flawless project outscores an ambitious, broken one every single time — so finish, then polish, and keep the viva walk-through rehearsed: the feature tree, the sheet, the analysis, the machine and the print, each in one confident minute.",
            ],
            bullets: [
              "Pick an 8-15 part assembly with real function: bench vice, flange coupling, screw jack, gear pump.",
              "Deliverable chain: parts — assembly — exploded view + BOM — drawings — FEA — G-code — printed part — report.",
              "Naming and version discipline: project-part-rev, two backup locations; never 'final_final'.",
              "Report order: objective, design intent, modeling plan, analysis with hand check, manufacturing and print plan, conclusion.",
              "Judges grade the process: constrained sketches, sheet standards, BOM consistency, FEA sanity, safe G-code, print orientation.",
            ],
            table: {
              caption: "Mini-project deliverables and their acceptance checks.",
              headers: ["Deliverable", "Tool", "Acceptance check"],
              rows: [
                ["Part models", "parametric CAD", "feature tree renamed; sketches fully constrained"],
                ["Assembly", "CAD assembly", "all parts mated; interference check clean"],
                ["Exploded view", "CAD assembly", "trails visible; every item ballooned"],
                ["Drawing set", "CAD drawing", "A3 sheet, title block, section view, toleranced fits"],
                ["Bill of materials", "CAD drawing / Excel", "quantities match balloons and assembly"],
                ["FEA report", "FEA tool", "mesh convergence shown; hand check within 5%"],
                ["CNC program", "CAM + simulation", "no gouges or collisions; safe retracts; G54 stated"],
                ["3D print", "slicer + printer", "orientation documented; supports removed cleanly"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The project deliverable pyramid",
              caption: "Build from the base — every layer rests on the one below it.",
              tiers: [
                { label: "Working prototype", note: "printed part + verified program, handed over" },
                { label: "Analysis", note: "FEA of the critical member, hand-checked" },
                { label: "Documentation", note: "drawings, BOM, G-code, report" },
                { label: "CAD models", note: "parts, assembly, exploded view" },
              ],
            },
            callout: {
              type: "exam",
              title: "The viva walks your feature tree",
              body: "Rename every feature the moment you create it — 'ShaftRevolve', 'KeywayCut', 'BoltPatternM8'. When the examiner opens the model tree, named features answer questions before you speak; 'Extrude 7' answers nothing. The same minute-per-deliverable walk (model, sheet, analysis, machine, print) is the viva rehearsal worth doing twice.",
            },
            keyTerms: [
              { term: "Design intent", definition: "The deliberate modelling choices (drivers, constraints, feature order) that let a design change propagate correctly through the project." },
              { term: "Feature tree", definition: "The ordered history of features and sketches in a parametric model; the record an examiner or colleague reads first." },
              { term: "Deliverable", definition: "A defined, checkable output of the project — a model, sheet, analysis, program or print with an acceptance criterion." },
            ],
            examQuestions: [
              {
                q: "Propose a mini project (e.g., a bench vice or flange coupling) and describe its complete execution plan: models, assembly, drawings, analysis, CNC and rapid prototyping deliverables, with a milestone schedule and the checks applied to each deliverable.",
                marks: 7,
                outline: [
                  "Scope: an 8-15 part assembly with real function — e.g., a flange coupling: two flanges, gasket, key, bolts, nuts.",
                  "Modeling: parametric parts, fully constrained sketches, standard parts from a library.",
                  "Assembly: mates, interference check, exploded view with trails and balloons.",
                  "Drawing set: A3 sheet, first-angle views, section view, toleranced fits, BOM.",
                  "Analysis: FEA of the most-loaded member — mesh convergence, hand check, factor of safety.",
                  "Manufacturing: G-code + simulation for one machined part; 3D print of one component with orientation documented.",
                  "Schedule: weekly milestones with acceptance checks; report structure and viva walk-through.",
                ],
              },
              {
                q: "List any four contents of a mini-project report.",
                marks: 2,
              },
              {
                q: "Why is an interference check mandatory before the drawing stage of a project, and what does a deviation map verify in the reverse-engineered part?",
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
      heading: "Exam weightage — where the hours and marks concentrate",
      body: [
        "ME-605 is assessed through practical sheets, the sessional record and a viva, so weightage here means where the marks concentrate in the practical exam and the project review. The drafting and 3D modeling sheets are the core; FEA, CNC and printing carry the project marks. Rehearse the first three topics to exam speed before spending time anywhere else.",
      ],
      weightedTopics: [
        { topic: "2D orthographic sheet with dimensions and a section view", weight: "18-22%", note: "The near-certain practical: a bracket or guide block in first angle, dimensioned from a datum, inside 90 minutes." },
        { topic: "3D part modeling: extrude, revolve, Boolean", weight: "15-18%", note: "Expect a stepped shaft or a flange with holes; the revolve half-section method is the rehearsal piece." },
        { topic: "Assembly, exploded view and BOM", weight: "12-15%", note: "A flange-coupling or knuckle-joint assembly with mates, trails, balloons and a parts list." },
        { topic: "FEA: meshing and linear static results", weight: "8-12%", note: "One bracket analysis: mesh refinement, loads and restraints, von Mises plot, hand-checked." },
        { topic: "Dimensioning, tolerances and fits (H7/g6)", weight: "8-10%", note: "Viva plus written questions; memorise the tolerance formats and the hole-basis idea." },
        { topic: "G-code fundamentals and part programming", weight: "8-10%", note: "Write one facing or contouring program block-by-block; G00/G01 and G90/G91 are always asked." },
        { topic: "Layers, linetypes and sheet setup", weight: "6-8%", note: "Checked in every sheet: layer plan, title block, projection symbol, plot scale." },
        { topic: "Rapid prototyping: STL, FDM, SLA", weight: "6-8%", note: "Compare FDM vs SLA and define chord height — repeated viva territory every session." },
        { topic: "CAM: toolpath simulation and post-processing", weight: "5-8%", note: "Explain CLDATA to G-code with the simulation checks; often a diagram question." },
        { topic: "3D scanning and reverse engineering", weight: "4-6%", note: "Workflow order and scanner families; typically a 2-3 mark written or viva question." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Six weeks at roughly ninety minutes a day covers every lab exercise twice — once to learn it, once to time yourself — and leaves the final week for project polish and mock practicals. Keep a sessional record as you go; the record is marked alongside the practical.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I — drafting foundations", tasks: ["Interface, setup and coordinate entry; finish three practice sheets", "Primitives and the modify toolkit; draw five plates with slots and chamfers", "Layers, DIMSTYLE and dimensioning rules; dimension all five sheets from datums"] },
        { week: "Week 2", focus: "Unit I — full 2D sheets", tasks: ["One orthographic drawing per day: bracket, guide block, shaft support", "Blocks, attributes and the title block; build your own A3 template", "Section views with hatching; plot two sheets to PDF at 1:1"] },
        { week: "Week 3", focus: "Unit II — 3D modeling", tasks: ["Primitives, display controls, VPORTS; model five simple parts", "Boolean recipes: flange, cover plate, angle bracket with overshooting tools", "Extrude and revolve set of eight parts including a stepped shaft; UCS work on inclined faces"] },
        { week: "Week 4", focus: "Unit III — parametric and assembly", tasks: ["Constrained sketching: ten sketches taken to fully-constrained status", "Sweep, helix and loft: spring, hook, round-to-square duct", "Assembly with mates, exploded view and BOM of a flange coupling"] },
        { week: "Week 5", focus: "Unit IV — applications and FEA", tasks: ["Shaft-with-keyway and spur gear modeling using the m-z formulas", "Orthographic and section views generated from 3D models", "FEA: mesh a bracket, refine, apply loads and restraints, verify with the hand calculation"] },
        { week: "Week 6", focus: "Unit V + mini project", tasks: ["Write and dry-run three G-code programs; simulate one CAM toolpath", "STL export, slicing and printing of one project part", "Assemble the mini-project record; two timed mock practicals"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      body: [
        "The day before the practical is for speed and paperwork, not new topics. Everything on this list exists to make the certain material warm and the record airtight.",
      ],
      bullets: [
        "Redraw the guaranteed sheet — a bracket in first angle, fully dimensioned — against a 90-minute timer.",
        "Re-model the stepped shaft and the flange-with-holes plate without notes; both appear in some form almost every year.",
        "Rehearse the command chains you keep fumbling: UCS 3point plus PLAN, SUBTRACT order, DIMSTYLE values, the safety line of a G-code program.",
        "Re-run one FEA (mesh, loads, von Mises, hand check) and one G-code program; keep the screenshots for the record.",
        "Revise the viva pairs: extrude vs revolve, OFF vs FREEZE, G00 vs G01, FDM vs SLA, first vs third angle.",
        "Check the record file: sheets signed and indexed, files backed up on a pen drive and in the cloud.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Read the whole sheet first, then set units, limits and layers before the first line — setup itself carries marks.",
        "Work on correctly named layers from minute one; re-assigning properties at the end is where time dies.",
        "Dimension from one datum with a DIMSTYLE set once, and check the projection symbol before plotting.",
        "Save to a new version name every ten minutes; a crash with a single unsaved file is a failed practical.",
        "In the viva, answer with the command and the workflow: what it does, and where it sits in the chain.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Mixing first-angle and third-angle placements on one sheet — the title-block symbol fixes the convention; every view must obey it.",
        "Drawing production geometry on layer 0, or setting colors that ignore the layer plan and wreck the plotted lineweights.",
        "Chain-dimensioning point to point so tolerances stack; baseline from one machined datum instead.",
        "Skipping the fully-constrained check — edit one dimension later and the sketch folds like wet paper.",
        "Subtracting with tools picked in the wrong order, or tools that stop inside the material and leave slivers.",
        "Reporting FEA stress from a single mesh, or believing a sharp-corner peak that is really a singularity.",
      ],
    },
  ],
};
