/**
 * Academics - RGPV Civil Engineering 4th-semester subject: CE-406
 * Software Lab (AutoCAD).
 *
 * Structure mirrors subject-ce-405.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries three body paragraphs, five
 * bullets, three key terms, a callout, one diagram, three exam questions
 * (one 7-mark with a five-point outline plus two shorts), and a practical
 * element (an AutoCAD command-sequence code sample or a table).
 */

import type { AcademicSubject } from "./types";

export const ce406: AcademicSubject = {
  id: "ce-406",
  code: "CE-406",
  title: "Software Lab (AutoCAD)",
  semester: "IV Semester",
  program: "RGPV \u00b7 Civil Engineering",
  tagline:
    "The complete lab guide for CE-406: the AutoCAD interface and drawing setup, the core drawing commands from line to ellipse, editing and modification tools, annotation and dimensioning, and plotting with civil drafting case studies.",
  description:
    "Five units walk the AutoCAD lab from the workspace to the plot. Unit I sets the interface, coordinate systems, units and layers. Unit II draws lines, circles, arcs, polylines, polygons, ellipses and construction lines, then offsets, trims, extends, fillets and chamfers them. Unit III edits with move, copy, rotate, mirror, scale, stretch, array, explode, properties, match properties and grips. Unit IV annotates with text styles, single and multiline text, dimension styles, linear, aligned, angular and diameter dimensions, leaders, tolerances and hatching. Unit V plots with page setup, plot styles, viewports, scaling, title blocks, plans, elevations, sections, 3D basics and civil drafting case studies.",
  accentColor: "#0ea5e9",
  emoji: "CAD",
  unitCount: 5,
  totalSections: 25,
  units: [
    // ===== UNIT I =====
    {
      number: 1,
      roman: "I",
      title: "AutoCAD Interface and Basics",
      summary:
        "The substrate of the whole lab: the workspace and user interface, the ribbon, command line and drawing area, absolute relative and polar coordinate systems, units limits and drawing setup, and layers with their properties that organise every civil drawing.",
      chapter: {
        number: "01",
        title: "AutoCAD Interface and Basics",
        intro:
          "Unit I builds the vocabulary every later unit borrows: the workspace and its panels, the ribbon tabs and command line that drive every action, the drawing area with its crosshairs and UCS icon, the absolute relative and polar coordinate systems that place every point, the units limits and setup that frame the sheet, and the layers with colour linetype lineweight and plot properties that organise civil drawings.",
        inOneBreath:
          "AutoCAD ships the 2D Drafting and Annotation workspace with ribbon tabs Draw Modify Annotate View Insert and Output; the command line accepts typed commands and options and echoes prompts; the drawing area shows crosshairs over a model-space grid with the UCS icon at the origin; points are placed by absolute coordinates (x,y), relative coordinates (@dx,dy) or polar coordinates (@dist<angle); units and LIMITS define the working sheet and SNAP and GRID constrain the cursor; and layers named with discipline codes carry colour linetype lineweight and plot properties that control visibility and printing.",
        sections: [
          {
            number: "1.1",
            title: "Workspace and user interface",
            body: [
              "AutoCAD opens into a workspace that bundles every drawing tool, palette and menu into a single application window. The default 2D Drafting and Annotation workspace arranges the application menu at the top-left, the quick access toolbar beside it, the ribbon across the top, the drawing area in the centre, the command line below it and the status bar at the bottom. The application menu groups New, Open, Save, Plot and Drawing Utilities under a single icon; the ribbon replaces the classic menu bar with task-based tabs; and the status bar toggles SNAP, GRID, ORTHO, POLAR, OSNAP and OTRACK modes that govern cursor behaviour throughout a session.",
              "Each ribbon tab - Draw, Modify, Annotate, View, Insert, Output, Parametric and Application - is split into panels of related commands, so the Line button sits beside Polyline and Arc in the Draw panel while Copy, Mirror and Array sit in the Modify panel. File tabs along the top edge switch between open drawings, and the layout tabs at the bottom left flip between Model and named paper-space layouts. Tool palettes float beside the drawing area for blocks and hatches, and the Properties panel displays and edits the selected object's layer, colour, linetype and geometry live. The command line remains the fastest input route for the practised user.",
              "For a civil engineering lab the workspace is the first deliverable: the student saves a custom workspace named CE-LAB that exposes the Draw, Modify, Annotate and Output tabs and hides 3D tools, then exports the workspace profile for reuse on every workstation. Setting the workspace correctly at the start of a session prevents wasted clicks later, because the ribbon panel that is one tab away is the one that interrupts a dimension or hatch workflow. A reproducible workspace also matches the lab record, where step one is always to load the CE-LAB workspace and confirm units and limits before any geometry is drawn.",
            ],
            bullets: [
              "Application menu: single icon for New, Open, Save, Plot, Drawing Utilities and Export options.",
              "Ribbon tabs Draw, Modify, Annotate, View, Insert, Output group commands into panels of related tools.",
              "Command line: typed commands and option letters remain the fastest input; echoes prompts and recent history.",
              "Status bar toggles SNAP, GRID, ORTHO, POLAR, OSNAP, OTRACK and the annotation monitor.",
              "Custom workspace CE-LAB exposes civil-relevant tabs and is exported as a profile for every workstation.",
            ],
            codeExample: {
              language: "text",
              caption: "Saving and reloading a civil CE-LAB workspace profile",
              code: `Command: WORKSPACE
Enter an option [?] <2D Drafting and Annotation>:
Command: -WSCURRENT
Enter name <2D Drafting and Annotation>: CE-LAB
Command: OPTIONS
  (set profile, display, colors, then export)
Command: WSSAVE
Enter name to save: CE-LAB
Command: CUILOAD
  (load civil.cuix for panel customisation)`,
            },
            diagram: {
              kind: "flow",
              title: "Setting up the civil AutoCAD workspace",
              caption: "Five steps from a blank window to a saved CE-LAB profile reusable on any workstation.",
              steps: [
                { label: "Load 2D Drafting and Annotation workspace" },
                { label: "Pin Draw, Modify, Annotate, Output tabs", note: "hide 3D Modeling" },
                { label: "Set status-bar modes SNAP, GRID, OSNAP" },
                { label: "Configure units and limits", note: "via UNITS and LIMITS" },
                { label: "Save workspace as CE-LAB profile", note: "export with WSSAVE" },
              ],
            },
            callout: {
              type: "tip",
              title: "Save the workspace once",
              body: "Spend the first lab session saving the CE-LAB workspace and exporting its profile; reload it with WSSAVE on every workstation thereafter. A standard workspace eliminates the questions about missing ribbon tabs that eat lab time and guarantees the lab record steps match the on-screen panels.",
            },
            keyTerms: [
              { term: "Workspace", definition: "A saved arrangement of ribbon tabs, palettes and toolbars that presents the commands relevant to a task, e.g. 2D Drafting and Annotation or 3D Modeling." },
              { term: "Ribbon", definition: "A task-based tabbed strip across the top of the AutoCAD window; each tab is divided into panels of related commands like Draw or Modify." },
              { term: "Application menu", definition: "The red-A icon at the top-left that groups file-level commands - New, Open, Save, Plot, Drawing Utilities - under one button." },
            ],
            examQuestions: [
              {
                q: "Describe the AutoCAD workspace and user interface as used in the civil engineering lab. Cover the application menu, ribbon tabs and panels, drawing area, command line and status bar, and explain how a custom CE-LAB workspace is saved and reused.",
                marks: 7,
                outline: [
                  "Define the workspace as a saved arrangement of ribbon, palettes and toolbars; name the default 2D Drafting and Annotation.",
                  "Describe the application menu (New, Open, Save, Plot, Drawing Utilities) and the quick access toolbar beside it.",
                  "List ribbon tabs Draw, Modify, Annotate, View, Insert, Output and explain that each is divided into panels of related commands.",
                  "Describe the drawing area with crosshairs, grid and UCS icon, and the command line that accepts typed commands and echoes prompts.",
                  "List the status-bar modes SNAP, GRID, ORTHO, POLAR, OSNAP, OTRACK and what each constrains.",
                  "Explain the sequence WORKSPACE then WSSAVE to save the CE-LAB workspace and export its profile.",
                  "Conclude that the saved profile is reloaded on every workstation so lab records and panels match.",
                ],
              },
              {
                q: "Name any four ribbon tabs in the 2D Drafting and Annotation workspace.",
                marks: 2,
              },
              {
                q: "List the status-bar modes that constrain the cursor during drawing and state the function of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Ribbon, command line and drawing area",
            body: [
              "The ribbon is the primary command surface in modern AutoCAD. Its tabs - Draw, Modify, Annotate, View, Insert, Output, Parametric and Application - are each split into panels of related command buttons, so the Line, Polyline and Arc buttons cluster in the Draw panel while Copy, Mirror and Array cluster in the Modify panel. A ribbon panel can be expanded by its drop-down arrow to reveal less common commands, and the whole ribbon can be minimised to tabs, panel buttons or hidden, freeing screen area for the drawing. Auto-size panels reflow as the window is resized, so the same workspace is usable on a laptop and a large monitor.",
              "The command line accepts typed commands, option letters, distances and angles. Pressing F2 toggles the expanded text window showing the full command history; the dynamic input (DYN, F12) echoes prompts and coordinates at the cursor for heads-up drawing. Prompts show available options in square brackets and the default in angle brackets; pressing Enter confirms the default, Esc cancels the active command, and Enter with no command active repeats the last one. The command line is the fastest input route for the practised user and is the route examiners prefer because it reveals every option chosen.",
              "The drawing area is the canvas where crosshairs move over the model-space grid, with the UCS icon at the origin showing the red X and green Y axes of the current coordinate frame. The coordinate readout in the status bar displays the cursor position live as it moves. Layout tabs along the bottom edge switch between Model space, where geometry is drawn at 1:1 real-world scale, and paper-space layouts, where plotted sheets are composed with title blocks and viewports. A civil drawing begins in Model space and is plotted from a layout; mixing the two by dimensioning in paper space at the wrong scale is a classic lab slip.",
            ],
            bullets: [
              "Ribbon tabs: Draw, Modify, Annotate, View, Insert, Output, Parametric, Application - each split into panels.",
              "Command line: typed commands and option letters; prompts show options in [brackets] and defaults in <angle brackets>.",
              "F2 opens the text window with full command history; Esc cancels the active command; Enter repeats the last command.",
              "Dynamic input (DYN, F12) echoes prompts and coordinates at the cursor for heads-up drawing.",
              "UCS icon marks the origin with red X and green Y arrows; layout tabs switch between Model and paper-space sheets.",
            ],
            codeExample: {
              language: "bash",
              caption: "Driving AutoCAD from the command line with mixed coordinate input",
              code: `Command: LINE
Specify first point: 0,0
Specify next point or [Undo]: 100,50
Specify next point or [Undo]: @80<30
Specify next point or [Close/Undo]: C
Command: ERASE
Select objects: L      (selects Last drawn object)
Select objects:        (press Enter to finish)`,
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of the AutoCAD window from title bar to status bar",
              caption: "Each layer is a horizontal band of the interface; the drawing area sits at the centre.",
              layers: [
                { label: "Title bar and quick access toolbar", note: "file name, New, Open, Save, Undo, Redo" },
                { label: "Ribbon tabs and panels", note: "Draw, Modify, Annotate, View, Insert, Output" },
                { label: "Drawing area with crosshairs, grid, UCS icon", note: "model space at 1:1 scale" },
                { label: "Command line and dynamic input", note: "typed commands, prompts, history (F2)" },
                { label: "Status bar and layout tabs", note: "SNAP, GRID, ORTHO, OSNAP; Model / Layout1 / Layout2" },
              ],
            },
            callout: {
              type: "exam",
              title: "Command line first",
              body: "RGPV viva questions on the interface reward students who can name the ribbon tabs AND drive the same command from the keyboard. Practise drawing a rectangle using the LINE command with relative and polar input, then repeat it with the RECTANG command - the examiner wants to see both entry routes used fluently.",
            },
            keyTerms: [
              { term: "Ribbon", definition: "A tabbed strip across the top of the window; each tab (Draw, Modify, Annotate) holds panels of related command buttons." },
              { term: "Command line", definition: "The dockable window that accepts typed commands, option letters and coordinates, and echoes prompts and recent history." },
              { term: "UCS icon", definition: "The User Coordinate System marker at the origin showing the X (red) and Y (green) axes of the current coordinate frame." },
            ],
            examQuestions: [
              {
                q: "Explain the role of the ribbon, command line and drawing area in the AutoCAD interface. Describe how a command is executed from both the ribbon and the keyboard, and state the function of the UCS icon and the layout tabs.",
                marks: 7,
                outline: [
                  "Define the ribbon as a tabbed strip with panels (Draw, Modify, Annotate, View, Insert, Output).",
                  "Explain that a command may be launched by clicking its ribbon button or by typing its name at the command line.",
                  "Describe the command line prompts: options in [brackets], defaults in <angle brackets>, Enter to confirm, Esc to cancel.",
                  "Mention F2 for the text window, dynamic input (F12) for heads-up prompts, and Enter to repeat the last command.",
                  "Describe the drawing area: crosshairs, model-space grid, coordinate readout, and the UCS icon at the origin.",
                  "State that the UCS icon shows the X (red) and Y (green) axes of the current coordinate frame.",
                  "Explain that layout tabs switch between Model space (1:1 drawing) and paper-space layouts (plotting sheets).",
                ],
              },
              {
                q: "What does pressing F2 do in AutoCAD?",
                marks: 2,
              },
              {
                q: "List any three ribbon tabs and one command found in each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Coordinate systems",
            body: [
              "AutoCAD places every point by coordinates drawn from three interlocking systems. Absolute coordinates are measured from the origin (0,0): typing 50,30 places a point 50 units right and 30 up. Relative coordinates are measured from the last point picked: @40,20 places a point 40 right and 20 up from the previous point. Polar coordinates specify a distance and an angle: @60<45 places a point 60 units away at 45 degrees. The @ prefix marks relative input and the < character separates distance from angle; dropping the @ makes the same numbers absolute, which is a frequent lab slip.",
              "Direct distance entry is the field shortcut: pick a point, drag the cursor in a direction, type the distance, press Enter. Ortho (F8) locks the cursor to horizontal and vertical directions; Polar tracking (F10) snaps to set angles (typically 0, 90, 180, 270 plus 30 and 45 degree increments). Object snaps (OSNAP, F3) lock the cursor to geometric features on existing objects - endpoint, midpoint, centre, intersection, perpendicular, tangent - so construction lines land exactly on existing geometry rather than near it. Running OSNAP keeps a set of snaps active across commands; one-shot OSNAP applies for a single pick.",
              "For civil drafting the choice of coordinate system is deliberate, not stylistic. Site plans use absolute coordinates tied to a survey benchmark so that a building corner at 12000,8500 means twelve metres east and eight and a half north of the benchmark. Long wall runs use relative coordinates so each segment is described by its own length and direction. Angled parking layouts use polar coordinates. Mixing the three systems in one drawing is normal; the skill the examiner looks for is picking the one that needs the fewest keystrokes per segment, which is also the one least likely to be mistyped.",
            ],
            bullets: [
              "Absolute: x,y from origin (0,0); e.g. 50,30 places a point 50 right, 30 up.",
              "Relative: @dx,dy from the last point; @40,20 is 40 right, 20 up from the previous point.",
              "Polar: @distance<angle from the last point; @60<45 is 60 units at 45 degrees.",
              "Direct distance entry: drag in a direction, type the distance, press Enter - fastest for ortho lines.",
              "OSNAP (F3) locks to endpoint, midpoint, centre, intersection, perpendicular, tangent; ORTHO (F8) locks to horizontal and vertical.",
            ],
            table: {
              caption: "AutoCAD coordinate entry methods with examples.",
              headers: ["Method", "Syntax", "Example", "Measured from"],
              rows: [
                ["Absolute rectangular", "x,y", "50,30", "Origin (0,0)"],
                ["Relative rectangular", "@x,y", "@40,20", "Last point"],
                ["Absolute polar", "distance<angle", "60<45", "Origin (0,0)"],
                ["Relative polar", "@distance<angle", "@60<45", "Last point"],
                ["Direct distance", "(drag) distance", "drag right, type 80", "Last point, cursor direction"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a coordinate entry method",
              caption: "Pick the cell whose reference point and direction match the segment you are drawing.",
              axes: { x: "Reference: origin vs last point", y: "Form: rectangular vs polar" },
              quadrants: [
                { label: "Absolute rectangular x,y", note: "site plan tied to a benchmark" },
                { label: "Absolute polar dist<ang", note: "rare; radial layout from origin" },
                { label: "Relative rectangular @x,y", note: "wall runs from the last corner" },
                { label: "Relative polar @dist<ang", note: "angled segments and parking bays" },
              ],
            },
            callout: {
              type: "tip",
              title: "Pick the cheapest input",
              body: "Before typing, ask: is the segment measured from the origin or the last point, and is it given as a run-rise or as a length and angle? The answer names the coordinate method. Civil drawings routinely mix all four in one wall chain - switching is instant because the @ and < characters do the switching.",
            },
            keyTerms: [
              { term: "Absolute coordinate", definition: "A point specified by its x and y distances from the origin (0,0), written as x,y." },
              { term: "Relative coordinate", definition: "A point specified by its displacement from the last point, prefixed with @, e.g. @40,20." },
              { term: "Polar coordinate", definition: "A point specified by a distance and an angle, written as distance<angle or @distance<angle." },
            ],
            examQuestions: [
              {
                q: "Explain the absolute, relative and polar coordinate systems in AutoCAD with a worked example of each. State when a civil drafter would choose each method and name the object snap modes that ensure exact construction.",
                marks: 7,
                outline: [
                  "Define absolute coordinates (x,y from origin) with example 50,30.",
                  "Define relative coordinates (@dx,dy from last point) with example @40,20.",
                  "Define polar coordinates (@distance<angle) with example @60<45.",
                  "State that the @ prefix marks relative input and the < separates distance from angle.",
                  "Give a civil use case for each: absolute for benchmark-tied site plans, relative for wall runs, polar for angled parking.",
                  "Name object snaps: endpoint, midpoint, centre, intersection, perpendicular, tangent.",
                  "Mention direct distance entry and the role of ORTHO (F8) and POLAR (F10) tracking.",
                ],
              },
              {
                q: "What does the @ prefix indicate in an AutoCAD coordinate?",
                marks: 2,
              },
              {
                q: "Write the relative polar coordinate for a segment of length 75 at an angle of 30 degrees from the last point.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Units, limits and drawing setup",
            body: [
              "Every civil drawing begins with the UNITS and LIMITS commands. The UNITS command sets the linear format (Architectural, Decimal, Engineering, Fractional, Scientific), the precision (number of decimal places), the angular format (Decimal Degrees, Degrees/Minutes/Seconds, Grads, Radians, Surveyor's Units) and the angle direction (0 to the east, counter-clockwise positive). For a civil plan drawn in millimetres the format is Decimal with precision 0; for an architectural plan in metres it may be Decimal with precision 0.000. The insertion scale setting ensures blocks imported from other drawings rescale to the current unit automatically.",
              "The LIMITS command sets the lower-left and upper-right corners of the drawing area, expressed in the current units. A 12000 by 8500 mm plan sets lower-left 0,0 and upper-right 12000,8500, after which a ZOOM All displays the whole sheet on screen. Limits also bound the visible GRID and the regenerating drawing area. SNAP sets the cursor increment - a 100 mm snap suits wall layout while a 5 mm snap suits detail work; GRID displays the dot pattern at the snap or a larger spacing. ORTHO (F8) locks the cursor to horizontal and vertical moves; the combination of SNAP, GRID and ORTHO is the basic cursor discipline of accurate drafting.",
              "The full setup routine is a lab ritual: NEW a drawing from a template (acadiso.dwt for metric or a custom civil template), run UNITS, run LIMITS, ZOOM All, then create the standard layer set - A-WALL, A-DOOR, A-WIND, A-DIMS, A-TEXT, A-HATCH - each with its colour and linetype. The LTSCALE command sets the dash scale so dashed hidden and centre lines read correctly at the intended plot scale. Saving the result as a template (.dwt) means the next session starts with units, limits, layers and dimension style already correct, and the lab record's first screenshot is reproducible across the cohort.",
            ],
            bullets: [
              "UNITS sets linear format (Decimal, Architectural, Engineering), precision, angular format and angle direction.",
              "LIMITS sets the lower-left and upper-right corners of the model-space sheet in current units; followed by ZOOM All.",
              "SNAP sets the cursor increment (e.g. 100 mm for walls, 5 mm for detail); GRID displays the reference dot pattern.",
              "Layer codes A-WALL, A-DOOR, A-WIND, A-DIMS, A-TEXT follow the AIA convention and keep civil drawings readable.",
              "LTSCALE sets the dash scale so hidden and centre lines read correctly at the intended plot scale.",
            ],
            codeExample: {
              language: "text",
              caption: "First-session drawing setup for a 12 m by 8.5 m civil plan in millimetres",
              code: `Command: NEW
  (use template acadiso.dwt)
Command: UNITS
  Length type: Decimal, Precision: 0
  Angle type: Decimal Degrees, Precision: 0
  0 degrees = East, Counter-clockwise = positive
Command: LIMITS
  Specify lower-left corner: 0,0
  Specify upper-right corner: 12000,8500
Command: ZOOM  -> All
Command: SNAP  -> Spacing: 100
Command: LAYER (create A-WALL, A-DOOR, A-WIND, A-DIMS, A-TEXT)
Command: LTSCALE -> 1
Command: SAVEAS -> civil_plan_01.dwg`,
            },
            diagram: {
              kind: "pipeline",
              title: "Drawing setup pipeline from blank template to saved sheet",
              caption: "Five stages; each stage's output is the next stage's input - skip none.",
              stages: [
                { label: "NEW from acadiso.dwt", note: "clean metric template" },
                { label: "UNITS and LIMITS", note: "mm, 0-12000 x 0-8500" },
                { label: "ZOOM All and SNAP", note: "100 mm snap" },
                { label: "LAYER set A-WALL to A-TEXT", note: "colour, linetype" },
                { label: "SAVEAS civil_plan_01.dwg", note: "reuse as template" },
              ],
            },
            callout: {
              type: "warning",
              title: "Set units before limits",
              body: "The most common lab slip is setting LIMITS before UNITS, which leaves the sheet in inches even though the drafter believes it is in millimetres. Always run UNITS first, confirm Decimal and precision 0 for civil work, then set LIMITS in those units. A 12000,8500 limit in inches is a sheet over 300 metres wide - the examiner spots it from the grid density on screen.",
            },
            keyTerms: [
              { term: "UNITS", definition: "The command that sets the linear format, precision, angular format and angle direction for the drawing." },
              { term: "LIMITS", definition: "The command that sets the lower-left and upper-right corners of the model-space drawing area in current units." },
              { term: "LTSCALE", definition: "The global scale factor for non-continuous linetypes (hidden, centre, phantom) so dashes read correctly at plot scale." },
            ],
            examQuestions: [
              {
                q: "Describe the procedure to set up a new civil drawing in AutoCAD starting from a blank template. Cover the UNITS, LIMITS, SNAP, LAYER and LTSCALE commands and explain why each is necessary before any geometry is drawn.",
                marks: 7,
                outline: [
                  "Start with NEW from a metric template such as acadiso.dwt.",
                  "Run UNITS: Decimal length, precision 0 (mm), Decimal Degrees angle, 0 = East, counter-clockwise positive.",
                  "Run LIMITS: lower-left 0,0, upper-right 12000,8500 for a 12 m by 8.5 m plan.",
                  "Run ZOOM All to display the full sheet; set SNAP spacing (e.g. 100 mm) and GRID.",
                  "Create the layer set A-WALL, A-DOOR, A-WIND, A-DIMS, A-TEXT with colour and linetype.",
                  "Set LTSCALE so hidden and centre lines read correctly at the intended plot scale.",
                  "Conclude by SAVEAS into a .dwg or .dwt so the setup is reusable for the next session.",
                ],
              },
              {
                q: "What is the purpose of the LIMITS command?",
                marks: 2,
              },
              {
                q: "State the linear and angular formats a civil drafter typically selects in the UNITS dialog and the precision used for each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Layers and layer properties",
            body: [
              "A layer is a transparent overlay that groups objects of one discipline or component type. The walls of a building plan live on A-WALL, doors on A-DOOR, dimensions on A-DIMS, text on A-TEXT, hatching on A-HATCH. Each layer carries a colour (index 1 to 255), a linetype (Continuous, Dashed, Hidden, Centre), a lineweight (0.05 to 2.11 mm) and a plot flag. The Layer Properties Manager (LAYER command) is the control panel: new layers are added, renamed, frozen, locked, turned off or set current from one dialog, and the changes apply to the drawing the moment they are made.",
              "The four visibility controls are not mutually interchangeable. Off hides objects but they still regenerate with the drawing; Freeze removes objects from regeneration so complex drawings rebuild faster; Lock prevents editing but keeps objects visible for object snaps; Plot controls whether the layer prints. The current layer receives all newly drawn objects - set A-WALL current before drawing walls, A-DIMS before dimensioning. The LAYISO command isolates one layer's objects; LAYFRZ freezes picked layers from the screen; LAYMRG merges two layers into one. These tools let a civil drafter manage a hundred-layer drawing without opening the manager each time.",
              "Layer naming follows the AIA and National CAD Standard convention: discipline-major-minor, e.g. A-WALL-FULL for architectural full-height walls, S-BEAM for structural beams, C-ROAD-EDGE for civil road edges. Colour coding is consistent across the office: walls red, doors green, windows blue, dimensions white, hatching grey. Bylayer colour and linetype - set on the Properties panel - ensure that moving an object between layers changes its appearance automatically. A clean layer scheme is the single biggest aid to a civil drawing's readability and the first thing the lab examiner checks when opening the file.",
            ],
            bullets: [
              "Layer: a transparent overlay grouping one component type; objects inherit the layer's colour, linetype, lineweight and plot flag.",
              "Four visibility controls: Off (hidden, regenerates), Freeze (no regenerate), Lock (visible, no edit), Plot (prints or not).",
              "Current layer receives all new objects; set A-WALL current before drawing walls, A-DIMS before dimensioning.",
              "AIA and NCS naming: discipline-major-minor, e.g. A-WALL-FULL, S-BEAM, C-ROAD-EDGE.",
              "Bylayer colour and linetype on the Properties panel let layer changes re-colour objects automatically.",
            ],
            table: {
              caption: "Visibility and behaviour of the four layer state controls.",
              headers: ["Control", "Visible?", "Regenerates?", "Editable?", "Prints?"],
              rows: [
                ["On", "yes", "yes", "yes", "yes"],
                ["Off", "no", "yes", "no", "no"],
                ["Freeze", "no", "no", "no", "no"],
                ["Lock", "yes", "yes", "no (snaps OK)", "yes"],
                ["No Plot", "yes", "yes", "yes", "no"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "A civil plan stacked by discipline layer",
              caption: "Each layer is a transparent overlay; together they composite into the plotted drawing.",
              layers: [
                { label: "A-DIMS and A-TEXT", note: "annotation, white, plotted last" },
                { label: "A-HATCH", note: "wall and section hatching, grey" },
                { label: "A-WIND and A-DOOR", note: "openings, blue and green" },
                { label: "A-WALL", note: "wall lines, red, continuous" },
                { label: "C-SITE and C-ROAD", note: "site and road edges, civil discipline" },
              ],
            },
            callout: {
              type: "exam",
              title: "Bylayer is the rule",
              body: "Always set object colour and linetype to Bylayer. Examiners dock marks for objects whose colour is forced to a number, because moving them to another layer then leaves the colour stuck. Bylayer means the layer controls appearance - one change re-colours every object on the layer, which is exactly how a large civil plan is managed.",
            },
            keyTerms: [
              { term: "Layer", definition: "A transparent overlay grouping objects of one component type; carries colour, linetype, lineweight and plot properties." },
              { term: "Bylayer", definition: "A property setting that makes an object inherit its layer's colour or linetype, so layer changes re-style the object automatically." },
              { term: "Freeze vs Off", definition: "Freeze removes objects from regeneration (faster rebuilds); Off hides them but they still regenerate." },
            ],
            examQuestions: [
              {
                q: "Explain the concept of layers in AutoCAD and their properties. Describe the four visibility controls (Off, Freeze, Lock, No Plot), give a layer naming convention for civil drawings, and justify the use of Bylayer colour and linetype.",
                marks: 7,
                outline: [
                  "Define a layer as a transparent overlay grouping one component type; list properties: colour, linetype, lineweight, plot.",
                  "Describe the Layer Properties Manager (LAYER command) for creating, naming and setting layers current.",
                  "Contrast Off (hidden, regenerates, no plot) with Freeze (hidden, no regenerate, no plot).",
                  "Explain Lock (visible, can snap, no edit) and No Plot (visible, editable, no print).",
                  "Give the AIA and NCS naming convention: discipline-major-minor, e.g. A-WALL-FULL, S-BEAM, C-ROAD-EDGE.",
                  "Define Bylayer colour and linetype: objects inherit the layer's properties; one layer change re-styles every object.",
                  "Conclude that a clean layer scheme is the first thing the lab examiner checks for drawing readability.",
                ],
              },
              {
                q: "What is the difference between Freeze and Off for a layer?",
                marks: 2,
              },
              {
                q: "Give the AIA layer names for walls, doors, windows, dimensions and text in an architectural plan.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ===== UNIT II =====
    {
      number: 2,
      roman: "II",
      title: "Drawing Commands",
      summary:
        "The core drafting toolkit: lines, polylines and construction lines, circles and arcs with their construction methods, polygons and ellipses, and the offset, trim, extend, fillet and chamfer operations that clean every civil plan into a finished drawing.",
      chapter: {
        number: "02",
        title: "Drawing Commands",
        intro:
          "Unit II assembles the geometry of every civil drawing. The line, polyline and construction-line commands lay down the skeleton; the circle and arc commands with their six and eleven construction methods draw every curve; the polygon and ellipse commands handle regular and elliptical shapes; and the offset, trim, extend, fillet and chamfer commands turn the raw geometry into a clean wall-and-opening plan.",
        inOneBreath:
          "LINE draws independent straight segments (Close, Undo); XLINE and RAY draw infinite reference lines; PLINE draws a single connected object with straight or arc segments and a settable width whose area AREA reads directly; CIRCLE has six methods (Centre-Radius, Centre-Diameter, 2-Point, 3-Point, Tan-Tan-Radius, Tan-Tan-Tan); ARC has eleven methods (3-Point, Start-Centre-End, Start-Centre-Angle and more, drawn counter-clockwise); POLYGON draws regular 3 to 1024 sided figures inscribed or circumscribed; ELLIPSE draws from centre and axes or axis and rotation with an Isocircle option for isometrics; OFFSET draws a parallel copy at a set distance; TRIM cuts back to cutting edges; EXTEND lengthens to a boundary; FILLET rounds with a tangent arc (radius 0 trims); CHAMFER bevels with two distances.",
        sections: [
          {
            number: "2.1",
            title: "Line, polyline and construction lines",
            body: [
              "The LINE command draws straight segments that are independent objects - each segment can be erased or moved on its own. Picking points one after another builds an open chain; the Close option (C) joins the last point back to the first to close the polygon; the Undo option (U) drops the last segment. The construction line commands XLINE and RAY draw infinite lines used as references for triangulation, building grid lines or centre lines - XLINE extends in both directions, RAY from a point outward. These reference lines are not plotted but are snapped to during construction.",
              "The PLINE (polyline) command draws a single connected object whose segments may be straight or arc, and whose whole width is set by the Width option. A polyline is one entity, so selecting it highlights every segment at once and the AREA command reads its enclosed area directly. The PEDIT command edits a polyline: Join merges adjacent lines into one polyline, Width changes the global width, Close closes the open ends, and Fit or Spline curve the vertices into a smooth contour. Civil applications - contour lines, road centre lines, wall outlines - are almost always polylines because they need the area, length and offset behaviour.",
              "The RECTANG command draws a closed rectangle as a polyline in one step from two opposite corners; the POLYGON command draws regular n-gons (3 to 1024 sides) inscribed in or circumscribed about a circle. For civil drafting the polyline is the workhorse: a building outline is a closed PLINE whose area the bill of quantities reads directly, a road centre line is an open PLINE whose length the OFFSET command uses as the spine for the road edges. Converting a chain of LINEs to a PLINE with PEDIT Join is the routine fix that must run before offsetting or hatching, because offsetting separate lines leaves gaps at the corners.",
            ],
            bullets: [
              "LINE draws independent straight segments; Close (C) closes the polygon, Undo (U) drops the last segment.",
              "XLINE draws an infinite line in both directions; RAY draws a half-line from a point outward - references and grid lines.",
              "PLINE draws a single connected object with straight or arc segments and a settable Width; AREA reads its area directly.",
              "PEDIT edits a polyline: Join merges lines into one, Width sets global width, Close closes open ends, Fit or Spline curve vertices.",
              "RECTANG draws a closed rectangle as a polyline; POLYGON draws regular 3 to 1024 sided n-gons inscribed or circumscribed.",
            ],
            codeExample: {
              language: "text",
              caption: "Drawing a closed building outline as a polyline and reading its area",
              code: `Command: PLINE
Specify start point: 0,0
Current line-width is 0
Specify next point: @12000,0
Specify next point: @0,8500
Specify next point: @-12000,0
Specify next point or [Arc/Close/Width]: C
Command: AREA
Specify first corner point or [Object]: O
Select objects: (pick the polyline)
Area = 102000000 mm^2,  Length = 41000 mm`,
            },
            diagram: {
              kind: "flow",
              title: "From line chain to closed polyline",
              caption: "The standard fix before offsetting or hatching a wall outline.",
              steps: [
                { label: "Draw segments with LINE" },
                { label: "PEDIT then Multiple then select chain", note: "select all segments" },
                { label: "PEDIT Join (J), fuzz 0", note: "merges into one polyline" },
                { label: "PEDIT Close (C)", note: "joins last to first" },
                { label: "AREA then Object reads area", note: "and perimeter" },
              ],
            },
            callout: {
              type: "tip",
              title: "Polyline before offset",
              body: "Always join a chain of lines into a polyline with PEDIT Join before running OFFSET on it. Offsetting separate lines leaves gaps at the corners that must then be filleted individually - a common source of the uneven wall offset marks lost in lab records.",
            },
            keyTerms: [
              { term: "Polyline", definition: "A single connected object made of straight or arc segments with one settable width; selectable and measurable as one entity." },
              { term: "XLINE", definition: "An infinite construction line extending in both directions, used for grid lines, centre lines and triangulation references." },
              { term: "PEDIT", definition: "The polyline editor; its Join option merges adjacent lines into one polyline, Close joins the ends, Width sets the global width." },
            ],
            examQuestions: [
              {
                q: "Distinguish between the LINE and PLINE commands in AutoCAD. Explain the role of XLINE and RAY as construction lines, and describe how PEDIT is used to join a chain of lines into a closed polyline whose area is then read by the AREA command.",
                marks: 7,
                outline: [
                  "Define LINE as drawing independent straight segments; mention Close and Undo options.",
                  "Define PLINE as a single connected object with straight or arc segments and a settable Width.",
                  "Contrast: LINE segments are separate; PLINE segments are one entity selectable and measurable together.",
                  "Explain XLINE (infinite both ways) and RAY (half-line) as construction references for grids and centre lines.",
                  "Describe PEDIT: Join merges lines, Close closes open ends, Width sets global width, Fit or Spline curve vertices.",
                  "Show AREA then Object reading the closed polyline's enclosed area and perimeter.",
                  "Give a civil use case: a building outline as a closed PLINE whose area feeds the bill of quantities.",
                ],
              },
              {
                q: "What is the difference between XLINE and RAY?",
                marks: 2,
              },
              {
                q: "State the PEDIT options used to (a) join separate lines, (b) close an open polyline, (c) curve the vertices.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Circle and arc",
            body: [
              "The CIRCLE command offers six construction methods. Centre-Radius picks the centre then types the radius; Centre-Diameter picks the centre then types the diameter; 2-Point defines the circle by the endpoints of a diameter; 3-Point defines it by three points on the circumference; Tan-Tan-Radius constructs a circle of given radius tangent to two existing objects; Tan-Tan-Tan constructs a circle tangent to three objects. The default is Centre-Radius; pressing the option letter at the prompt switches method. Each method is the right choice for a different civil detail.",
              "The ARC command offers eleven methods, grouped by the data given: three points; start-centre-end; start-centre-angle; start-centre-length; and the tangent and continuity variants. The arc is drawn counter-clockwise from start to end by default, so reversing the pick order flips the arc to the other side. Civil drafting uses arcs for curved door swings (a quarter arc of radius equal to the leaf width), curved road edges, and the filleted corners of roundabouts; the FILLET command produces the same tangent arcs directly from two lines, which is faster when the lines already exist.",
              "A common lab slip is drawing an arc that bulges the wrong way. The fix is to pick the start and end in the reverse order, or to use the start-centre-angle form where the sign of the angle sets the direction. The DONUT command draws a filled ring - two concentric circles with a set inner and outer diameter and a solid hatch - used for column dots and survey marks. CIRCLE and ARC together with FILLET cover every curved civil detail; the choice between drawing an arc directly and filleting two lines depends on whether the tangent lines already exist or must be drawn fresh.",
            ],
            bullets: [
              "CIRCLE methods: Centre-Radius (default), Centre-Diameter, 2-Point, 3-Point, Tan-Tan-Radius, Tan-Tan-Tan.",
              "ARC offers eleven methods; common ones are 3-Point, Start-Centre-End, Start-Centre-Angle, Start-Centre-Length.",
              "Arcs draw counter-clockwise from start to end; reversing the pick order flips the arc to the other side.",
              "DONUT draws a filled ring of set inner and outer diameter; used for column dots and survey marks.",
              "FILLET produces the same tangent arcs directly from two existing lines - preferred when the lines exist.",
            ],
            table: {
              caption: "Circle construction methods with option letter and a civil use case.",
              headers: ["Method", "Option", "Inputs", "Civil use"],
              rows: [
                ["Centre-Radius", "(default)", "centre, radius", "column footing circle"],
                ["Centre-Diameter", "D", "centre, diameter", "circular manhole cover"],
                ["2-Point", "2P", "two diameter endpoints", "pipe between two points"],
                ["3-Point", "3P", "three circumference points", "arc through surveyed points"],
                ["Tan-Tan-Radius", "T", "two objects, radius", "road curve tangent to two edges"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The arc direction cycle",
              caption: "Pick order sets the direction; reversing start and end flips the arc to the other side.",
              steps: [
                { label: "Pick start point" },
                { label: "Pick centre (or end)", note: "sets the chord" },
                { label: "Pick end point", note: "counter-clockwise from start" },
                { label: "Arc bulges the wrong way?" },
                { label: "Reverse start and end picks", note: "or negate the angle" },
                { label: "Confirm with a zoom check", note: "back to pick start" },
              ],
            },
            callout: {
              type: "warning",
              title: "Mind the arc direction",
              body: "The arc draws counter-clockwise from start to end. A door swing that opens upward must be picked left-to-right across the top, not right-to-left, or the swing arcs into the floor. When an arc lands on the wrong side, undo and reverse the pick order rather than guessing - the lab record screenshot is the proof the examiner reads.",
            },
            keyTerms: [
              { term: "Circle (2P)", definition: "A circle defined by the two endpoints of a diameter; useful when a pipe or bar runs between two known points." },
              { term: "Arc (Start-Centre-End)", definition: "An arc defined by its start point, its centre of curvature, and its end point, drawn counter-clockwise." },
              { term: "DONUT", definition: "A filled ring of set inner and outer diameter, drawn as two concentric circles with a solid hatch; used for column dots." },
            ],
            examQuestions: [
              {
                q: "List the methods of constructing a circle and an arc in AutoCAD. Explain with civil examples why one method is chosen over another, and describe how the pick order controls the direction of an arc.",
                marks: 7,
                outline: [
                  "List CIRCLE methods: Centre-Radius, Centre-Diameter, 2-Point, 3-Point, Tan-Tan-Radius, Tan-Tan-Tan.",
                  "Give a civil use for each: footing, manhole, pipe, surveyed arc, road curve, three-tangent roundabout.",
                  "List ARC methods: 3-Point, Start-Centre-End, Start-Centre-Angle, Start-Centre-Length, plus tangent and continuity variants.",
                  "Explain that the arc draws counter-clockwise from start to end.",
                  "State that reversing the pick order flips the arc to the other side, or the angle sign is negated.",
                  "Mention DONUT as a filled ring for column dots and survey marks.",
                  "Conclude that FILLET produces tangent arcs directly from two existing lines, preferred when the lines exist.",
                ],
              },
              {
                q: "Name any three methods of constructing a circle in AutoCAD.",
                marks: 2,
              },
              {
                q: "An arc drawn from start to end bulges the wrong way. State two ways to correct it without redrawing.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Polygon and ellipse",
            body: [
              "The POLYGON command draws a regular n-sided figure (3 to 1024 sides) as a closed polyline. Two construction modes are offered: inscribed in a circle of given radius (vertices on the circle) or circumscribed about a circle of given radius (edge midpoints on the circle). An Edge option instead defines one side by its two endpoints, and the polygon is built on that edge. For civil drafting polygons appear as hexagonal column footings, octagonal manhole covers, and triangular traffic islands; the inscribed or circumscribed choice fixes whether the given radius is the vertex radius or the apothem.",
              "The ELLIPSE command draws a true ellipse from a centre point and two axis endpoints, or from one axis endpoint and a rotation that swings the second axis. The Ellipse Arc option draws a portion of an ellipse. In isometric drafting the Isocircle option draws an ellipse that appears as a circle viewed at 30 degrees - the basis of isometric pipe and duct drawings. The PELLIPSE system variable, when set to 1, draws the ellipse as a polyline approximation so that PEDIT can edit it; otherwise an ellipse is a true spline-like object that PEDIT cannot join or offset cleanly.",
              "A civil plan uses the ellipse for curved ramps and oval culverts, and the polygon for bolt-hole patterns and structural sections. The key lab skill is matching the construction method to the given data: when the drawing specifies the across-flats dimension of a hexagonal column, the circumscribed mode is used with the apothem as the radius; when it specifies the across-corners dimension, the inscribed mode is used with the vertex radius. Confusing the two is the classic polygon slip and produces a footing about fifteen per cent too large or too small, which the examiner catches with a single dimension check.",
            ],
            bullets: [
              "POLYGON draws regular 3 to 1024 sided figures as closed polylines; modes are Inscribed, Circumscribed and Edge.",
              "Inscribed: vertices on the circle (given radius = vertex radius); Circumscribed: edge midpoints on the circle (radius = apothem).",
              "ELLIPSE draws a true ellipse from centre and two axis endpoints, or from one axis endpoint and a rotation angle.",
              "Ellipse Arc option draws a portion of an ellipse; Isocircle option draws an isometric circle (30-degree view).",
              "PELLIPSE = 1 draws the ellipse as a polyline so PEDIT can edit it; otherwise it is a true non-editable spline object.",
            ],
            table: {
              caption: "Polygon and ellipse construction methods with the data each requires.",
              headers: ["Command", "Method", "Inputs", "Given radius is"],
              rows: [
                ["POLYGON", "Inscribed", "n, centre, radius", "distance to vertex"],
                ["POLYGON", "Circumscribed", "n, centre, radius", "distance to edge midpoint (apothem)"],
                ["POLYGON", "Edge", "n, two endpoints", "(no radius)"],
                ["ELLIPSE", "Centre-axis-axis", "centre, axis1 end, axis2 end", "(no radius)"],
                ["ELLIPSE", "Axis-end-rotation", "axis end, other end, rotation", "minor = major times cos(rot)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Inscribed vs circumscribed polygon",
              caption: "The given radius is the vertex radius for inscribed, the apothem for circumscribed.",
              left: {
                heading: "Inscribed in circle",
                items: [
                  "Vertices lie ON the circle",
                  "Given radius = vertex radius",
                  "Polygon fits inside the circle",
                  "Use when across-corners is specified",
                  "Larger visual footprint per radius",
                ],
              },
              right: {
                heading: "Circumscribed about circle",
                items: [
                  "Edge midpoints lie ON the circle",
                  "Given radius = apothem",
                  "Circle fits inside the polygon",
                  "Use when across-flats is specified",
                  "Smaller visual footprint per radius",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Inscribed or circumscribed?",
              body: "When the drawing gives the across-flats size of a hexagonal column footing, use Circumscribed mode so the given radius is the apothem. When it gives the across-corners size, use Inscribed mode so the given radius is the vertex radius. Mixing the two is the classic polygon slip - the footing comes out 15 per cent the wrong size and the lab record screenshot exposes it.",
            },
            keyTerms: [
              { term: "Inscribed polygon", definition: "A regular polygon whose vertices lie on a circle of given radius; the radius is the distance from centre to vertex." },
              { term: "Circumscribed polygon", definition: "A regular polygon whose edge midpoints lie on a circle of given radius; the radius is the apothem." },
              { term: "Isocircle", definition: "An ellipse drawn in isometric mode that represents a circle viewed at 30 degrees; used in isometric pipe and duct drawings." },
            ],
            examQuestions: [
              {
                q: "Explain the POLYGON and ELLIPSE commands in AutoCAD. Distinguish the inscribed and circumscribed modes of POLYGON with a civil example, and describe the centre-axis and axis-end-rotation methods of ELLIPSE.",
                marks: 7,
                outline: [
                  "Define POLYGON as drawing a regular 3 to 1024 sided closed polyline.",
                  "Explain Inscribed mode: vertices on the circle; given radius is the vertex radius.",
                  "Explain Circumscribed mode: edge midpoints on the circle; given radius is the apothem.",
                  "Give the civil rule: across-flats implies circumscribed, across-corners implies inscribed, e.g. hexagonal column footing.",
                  "Explain ELLIPSE centre-axis-axis: pick centre, end of axis 1, end of axis 2.",
                  "Explain ELLIPSE axis-end-rotation: pick two endpoints of one axis, then the rotation that fixes the minor axis.",
                  "Mention the Isocircle option for isometric circles and PELLIPSE = 1 for polyline-editable ellipses.",
                ],
              },
              {
                q: "How many sides can a POLYGON have in AutoCAD?",
                marks: 2,
              },
              {
                q: "A hexagonal column footing is specified by its across-flats dimension. State the POLYGON mode and explain why.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Offset, trim and extend",
            body: [
              "The OFFSET command draws a parallel copy of a line, arc, circle or polyline at a specified distance, on the side picked by the cursor. Offsetting a wall centre line by half its thickness produces the two wall faces; offsetting a road centre line by half the carriageway produces the two road edges. The Through option offsets to a picked point rather than a typed distance, useful when matching an existing edge. Offset works on a single object at a time but a polyline offsets as a whole, which is why joining a wall chain into a PLINE first is the precondition for clean parallel faces.",
              "The TRIM command cuts objects back to a cutting edge. The workflow is: select the cutting edges (press Enter to finish selection), then pick each object to trim on the side to remove. The default in modern AutoCAD is that any intersecting object is a candidate cutting edge, so the prompt to select objects to trim or shift-select to extend accepts picks immediately. The EDGEMODE system variable controls whether the cutting edge itself is extended to the would-be intersection before trimming. TRIM and EXTEND are duals: pressing Shift while in TRIM switches to EXTEND, and vice versa, without leaving the command.",
              "The EXTEND command lengthens objects to a boundary edge, the mirror of TRIM. Pick the boundary (press Enter), then pick each object on the side to extend. For a wall plan, the routine is: draw the outer wall polyline, OFFSET inward by the wall thickness, then TRIM the openings (doors and windows) using the opening edges as cutting edges. The cleaned-up wall faces are the result. A common slip is forgetting to press Enter after selecting the cutting edges, which makes the trim picks register as more edges instead of trimming, leaving the wall stubs in place.",
            ],
            bullets: [
              "OFFSET draws a parallel copy at a typed distance on the picked side; Through option offsets to a picked point.",
              "Offset a centre line by half-thickness to get wall faces, by half-carriageway to get road edges.",
              "TRIM cuts objects back to selected cutting edges; pick the side to remove; Shift toggles to EXTEND.",
              "EXTEND lengthens objects to a boundary edge; pick the boundary then the side to extend.",
              "EDGEMODE controls whether the cutting edge is extended to the would-be intersection before trimming.",
            ],
            codeExample: {
              language: "text",
              caption: "Building a wall with parallel faces and a door opening",
              code: `Command: OFFSET
Specify offset distance: 115
Select object to offset: (pick wall centre line)
Specify point on side to offset: (pick one side)
Select object to offset: (pick centre line again)
Specify point on side to offset: (pick other side)
Command: TRIM
Select cutting edges: (pick the two door jambs) -> Enter
Select object to trim: (pick wall face inside the door opening)
Command: EXTEND
Select boundary edge: (pick the jamb) -> Enter
Select object to extend: (pick the short return wall)`,
            },
            diagram: {
              kind: "flow",
              title: "Wall-with-opening workflow",
              caption: "Centre line to two parallel faces to a trimmed door opening in five steps.",
              steps: [
                { label: "Draw wall centre line (PLINE)" },
                { label: "OFFSET by half-thickness each way", note: "two parallel faces" },
                { label: "Draw door jambs across the faces" },
                { label: "TRIM wall faces at jambs", note: "cutting edges = jambs" },
                { label: "Cleaned wall with opening", note: "ready for door swing arc" },
              ],
            },
            callout: {
              type: "tip",
              title: "Press Enter after edges",
              body: "The classic TRIM slip is forgetting to press Enter after selecting the cutting edges, so the next pick adds another edge instead of trimming. Watch the command line: when it reads select object to trim the edges are locked; when it still reads select cutting edges they are not. Press Enter deliberately at the boundary between the two selection phases.",
            },
            keyTerms: [
              { term: "OFFSET", definition: "A command that draws a parallel copy of an object at a specified distance on the side picked by the cursor." },
              { term: "TRIM", definition: "A command that cuts objects back to selected cutting edges; the side picked is the side removed." },
              { term: "EDGEMODE", definition: "A system variable controlling whether the cutting edge is extended to the would-be intersection before trimming." },
            ],
            examQuestions: [
              {
                q: "Explain the OFFSET, TRIM and EXTEND commands in AutoCAD. Describe the workflow to draw a wall with parallel faces and a door opening, and state the role of the Shift key and the EDGEMODE variable.",
                marks: 7,
                outline: [
                  "Define OFFSET as drawing a parallel copy at a typed distance on the picked side; mention the Through option.",
                  "Give the civil use: offset a wall centre line by half-thickness to get the two faces.",
                  "Define TRIM as cutting objects back to selected cutting edges; pick the side to remove.",
                  "Define EXTEND as lengthening objects to a boundary edge; pick the boundary then the side to extend.",
                  "State that Shift toggles TRIM and EXTEND: Shift in TRIM extends, Shift in EXTEND trims.",
                  "Explain EDGEMODE: when on, the cutting edge is extended to the would-be intersection before trimming.",
                  "Walk the wall workflow: centre line, OFFSET both ways, draw jambs, TRIM faces at jambs.",
                ],
              },
              {
                q: "What does holding Shift do inside the TRIM command?",
                marks: 2,
              },
              {
                q: "State the inputs required to OFFSET a road centre line to produce two road edges 3.5 m on either side.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Fillet and chamfer",
            body: [
              "The FILLET command rounds the corner between two lines, arcs or polylines with a tangent arc of a specified radius. Setting the radius to 0 makes FILLET a clean right-angle trim - the fastest way to clean T-junctions. The Polyline option fillets every vertex of a polyline in one go, which is how a chain of wall corners is rounded uniformly. The Trim option controls whether the original lines are trimmed back to the arc (the default) or left as-is. FILLET with two parallel lines draws a half-circle cap closing the gap between them - a useful trick for slot ends and pipe caps.",
              "The CHAMFER command bevels the corner between two lines with a straight cut. Two distances define the chamfer: the trim distance on the first picked line and the trim distance on the second. Equal distances give a 45-degree chamfer; unequal distances give an angled bevel. The Angle option specifies the chamfer by one distance and one angle instead. The Polyline option chamfers every vertex of a polyline. As with FILLET, setting both distances to 0 makes CHAMFER a clean right-angle trim. The two commands are siblings: both trim or join, both accept polylines, both default to trimming the original lines back to the cut.",
              "In civil drafting FILLET rounds the inner corners of a corridor or the edges of a roundabout, and CHAMFER bevels the corners of a structural steel section or a chamfered footing edge. The drafter's rule is to set the radius or the distances once, then fillet or chamfer every matching corner in the plan without re-typing. The lab skill the examiner looks for is using a 0-radius fillet to clean a T-junction in one pick instead of two trims - a small efficiency that scales across a whole plan. Fillet radius values are stored in the drawing, so reopening a session keeps the last radius until it is changed.",
            ],
            bullets: [
              "FILLET rounds a corner with a tangent arc of set radius; radius 0 makes it a clean right-angle trim.",
              "FILLET Polyline option rounds every vertex of a polyline in one command; Trim option toggles trimming of original lines.",
              "FILLET on two parallel lines draws a half-circle cap closing the gap - useful for slot ends.",
              "CHAMFER bevels a corner with two distances (d1, d2); equal distances give 45 degrees, or use Distance and Angle option.",
              "CHAMFER Polyline option bevels every vertex; both distances 0 makes CHAMFER a clean right-angle trim.",
            ],
            codeExample: {
              language: "bash",
              caption: "Fillet and chamfer command sequences for a steel section corner",
              code: `Command: FILLET
Current settings: mode = TRIM, radius = 0
Select first object or [Polyline/Radius/Trim]: R
Specify fillet radius <0>: 12
Select first object: (pick horizontal line)
Select second object: (pick vertical line)

Command: CHAMFER
(TRIM mode) Current chamfer Dist1 = 0, Dist2 = 0
Select first line: D
Specify first chamfer distance <0>: 15
Specify second chamfer distance <0>: 15
Select first line: (pick horizontal edge)
Select second line: (pick vertical edge)`,
            },
            diagram: {
              kind: "compare",
              title: "Fillet arc vs chamfer bevel",
              caption: "Both trim the corner; fillet rounds with an arc, chamfer cuts with a straight line.",
              left: {
                heading: "FILLET (round corner)",
                items: [
                  "Joins two lines with a tangent arc",
                  "Input: radius (one value)",
                  "Radius 0 = clean right-angle trim",
                  "Polyline option rounds every vertex",
                  "Parallel lines give a half-circle cap",
                ],
              },
              right: {
                heading: "CHAMFER (bevel corner)",
                items: [
                  "Joins two lines with a straight cut",
                  "Input: two distances or distance and angle",
                  "Both distances 0 = clean right-angle trim",
                  "Polyline option bevels every vertex",
                  "Equal distances give a 45-degree bevel",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Zero radius equals clean trim",
              body: "A fillet radius of 0 (or both chamfer distances of 0) turns the command into a one-pick right-angle trim - the fastest way to clean a T-junction of two lines that overlap. RGPV lab records reward students who know this trick: a 0-radius fillet is cleaner than two TRIM picks and leaves no stub. Set it once, then fillet every T-junction in the plan.",
            },
            keyTerms: [
              { term: "FILLET", definition: "A command that rounds the corner between two objects with a tangent arc of a specified radius." },
              { term: "CHAMFER", definition: "A command that bevels the corner between two lines with a straight cut defined by two distances or a distance and an angle." },
              { term: "Polyline option", definition: "A FILLET or CHAMFER option that applies the radius or distances to every vertex of a selected polyline in one command." },
            ],
            examQuestions: [
              {
                q: "Explain the FILLET and CHAMFER commands in AutoCAD. Describe the inputs each requires, the effect of a zero radius or zero distances, the Polyline option, and the special behaviour of FILLET on two parallel lines.",
                marks: 7,
                outline: [
                  "Define FILLET as rounding a corner with a tangent arc of a specified radius.",
                  "State that radius 0 makes FILLET a clean right-angle trim - the fastest T-junction cleanup.",
                  "Describe the Polyline option: fillets every vertex of a polyline in one command; Trim option toggles original-line trimming.",
                  "Define CHAMFER as beveling a corner with two distances (d1, d2); equal distances give 45 degrees.",
                  "State that both distances 0 makes CHAMFER a clean right-angle trim, mirroring the FILLET zero-radius trick.",
                  "Mention the Angle option: chamfer by one distance and one angle.",
                  "Explain the special FILLET behaviour on two parallel lines: a half-circle cap closing the gap.",
                ],
              },
              {
                q: "What does a fillet radius of 0 do?",
                marks: 2,
              },
              {
                q: "State the two ways to define a chamfer and the inputs each requires.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ===== UNIT III =====
    {
      number: 3,
      roman: "III",
      title: "Editing and Modification",
      summary:
        "The tools that move existing geometry into its final place: move, copy and rotate; mirror and scale; stretch and array; explode and properties; and match properties with grips - the direct-edit widget that replaces five commands with one.",
      chapter: {
        number: "03",
        title: "Editing and Modification",
        intro:
          "Unit III covers the edit commands a civil drafter runs dozens of times an hour. Move, copy and rotate translate geometry; mirror and scale reflect and resize it; stretch and array extend and replicate it; explode and properties break and inspect it; and match properties with grips offer the fast direct-edit discipline that the lab examiner rewards.",
        inOneBreath:
          "MOVE translates by a base and second point; COPY leaves the original with a Multiple option; ROTATE swings about a base point with positive angles counter-clockwise and a Reference option to align a measured angle to a new one; MIRROR reflects across a two-point line with MIRRTEXT controlling text readability; SCALE resizes by a typed factor or by Reference to calibrate a known length; STRETCH lengthens objects crossing a crossing window while parts outside stay fixed; ARRAY produces rectangular, polar or path copies as an associative object; EXPLODE breaks compounds into parts; PROPERTIES (Ctrl+1) inspects and edits live; MATCHPROP copies layer colour linetype from source to destinations; and grips offer Stretch, Move, Rotate, Scale, Mirror at a picked point cycled by Enter.",
        sections: [
          {
            number: "3.1",
            title: "Move, copy and rotate",
            body: [
              "The MOVE command translates selected objects from a base point to a destination point without changing their orientation or size. The COPY command does the same but leaves the original in place; its Multiple option copies the selection to several destinations in one command. Both commands ask for a base point and a second point (or a typed displacement); using OSNAP to pick the base point on the object ensures the move is geometric - moving a door so its hinge endpoint lands exactly on the wall jamb endpoint. The Displacement option accepts a typed dx,dy vector instead of a second pick.",
              "The ROTATE command swings selected objects about a base point by a typed angle or by reference. Positive angles rotate counter-clockwise. The Reference option rotates an object from a known reference angle to a new angle - used to align a surveyed wall to the sheet axis: type R, pick the wall's two endpoints to define the reference angle, then type the new angle (often 0). The Copy option inside ROTATE rotates a copy while leaving the original. The base point should be a snap-locked point such as a corner, never a free cursor pick, or the rotated object drifts off its intended pivot.",
              "For civil drafting the three commands cover the bulk of edits. MOVE repositions a misplaced column; COPY duplicates a typical window along a wall with the Multiple option; ROTATE aligns a building wing to a skewed site boundary. The lab skill is using OSNAP (endpoint, midpoint, insertion) for every base point and verifying the result with a distance query (DIST) before committing. A common slip is rotating about the wrong base point - the centroid cursor pick - which swings the object off the sheet; undo, snap to the true pivot, and re-rotate.",
            ],
            bullets: [
              "MOVE translates objects by a base point and a second point (or a typed dx,dy); orientation and size unchanged.",
              "COPY leaves the original; Multiple option copies to several destinations in one command.",
              "ROTATE swings objects about a base point; positive angles are counter-clockwise; Reference option aligns by a known angle.",
              "ROTATE Copy option rotates a copy while leaving the original; base point must be snap-locked (endpoint, insertion).",
              "DIST verifies the moved or rotated position; use OSNAP for every base point to prevent drift.",
            ],
            table: {
              caption: "The three transform commands and their option set.",
              headers: ["Command", "Inputs", "Key option", "Preserves"],
              rows: [
                ["MOVE", "base point, second point", "Displacement (dx,dy)", "size and orientation"],
                ["COPY", "base point, second point", "Multiple", "original left in place"],
                ["ROTATE", "base point, angle", "Reference, Copy", "size; orientation changes"],
                ["ROTATE (Reference)", "base, ref 2 pts, new angle", "(aligns to axis)", "size; aligns to sheet"],
                ["MOVE (Displacement)", "dx, dy", "(no second pick)", "size and orientation"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Aligning a surveyed wall to the sheet axis",
              caption: "The Reference option in ROTATE turns a measured angle into a 0-degree alignment.",
              steps: [
                { label: "Select the wall objects" },
                { label: "ROTATE then pick base point", note: "snap to one endpoint" },
                { label: "Type R for Reference", note: "Reference angle mode" },
                { label: "Pick the two wall endpoints", note: "defines the measured angle" },
                { label: "Type new angle 0", note: "wall now horizontal" },
              ],
            },
            callout: {
              type: "warning",
              title: "Snap the base point",
              body: "Every MOVE, COPY and ROTATE base point must be snap-locked to a feature on the object - endpoint, midpoint or insertion - never a free cursor pick. A free base point lets the object drift by the pick tolerance, which is invisible on screen but turns up in the dimension check. The lab examiner measures the moved door's hinge distance to confirm the snap was clean.",
            },
            keyTerms: [
              { term: "COPY (Multiple)", definition: "A COPY option that places the selection at several destinations in one command without re-selecting." },
              { term: "ROTATE (Reference)", definition: "A ROTATE option that aligns an object from a measured reference angle (two picked points) to a new typed angle." },
              { term: "Displacement", definition: "A MOVE or COPY option that accepts a typed dx,dy vector instead of a second picked point." },
            ],
            examQuestions: [
              {
                q: "Explain the MOVE, COPY and ROTATE commands in AutoCAD with their key options. Describe how the Reference option of ROTATE aligns a surveyed wall to the sheet axis, and justify why every base point must be snap-locked.",
                marks: 7,
                outline: [
                  "Define MOVE as translating objects by a base point and a second point; size and orientation unchanged.",
                  "Define COPY as leaving the original; mention the Multiple option for several destinations.",
                  "Define ROTATE as swinging objects about a base point; positive angles counter-clockwise.",
                  "Describe the Reference option: type R, pick two points defining the reference angle, then type the new angle (0 for axis alignment).",
                  "Mention the ROTATE Copy option that rotates a copy while leaving the original.",
                  "Justify snap-locked base points (endpoint, insertion) to prevent object drift and failed dimension checks.",
                  "Give the civil use case: aligning a surveyed building wing to the horizontal sheet axis.",
                ],
              },
              {
                q: "What does the Multiple option of COPY do?",
                marks: 2,
              },
              {
                q: "State the inputs required to use the Reference option of ROTATE to align a wall to 0 degrees.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Mirror and scale",
            body: [
              "The MIRROR command produces a reflected copy of selected objects across a mirror line defined by two points. The original is kept or erased depending on the answer to the prompt about erasing source objects. The mirror line is a construction axis: pick any two points and the objects flip across the line they define. Text and attribute mirroring is governed by the MIRRTEXT system variable - when 1, text flips to mirror-image and is illegible; when 0 (the default), the text keeps its readable orientation while the geometry flips. For a symmetrical building plan, drawing one half and mirroring halves the drafting time.",
              "The SCALE command enlarges or shrinks selected objects about a base point by a typed scale factor. A factor of 2 doubles the size, 0.5 halves it, 1 leaves it unchanged. The Reference option scales from a known length to a new length: type R, pick the two endpoints of a known dimension on the object, then type the new length. This is the civil drafter's calibration tool - a drawing imported at the wrong scale is fixed by scaling a known wall length to its true measured length in one command, after which every other dimension is correct.",
              "The two commands pair on symmetrical civil details. A symmetrical footing is drawn once and mirrored; a drawing imported from a PDF at 1:50 is scaled to 1:1 with the Reference option. The lab skill the examiner looks for is the MIRRTEXT check: a mirrored plan with illegible text is the giveaway that MIRRTEXT was left at 1. Setting it to 0 before mirroring keeps dimensions and room labels readable while the geometry flips. The base point for SCALE should be a snap-locked corner, never the cursor centroid, so the scaled object stays anchored to its reference.",
            ],
            bullets: [
              "MIRROR reflects objects across a two-point mirror line; original kept or erased on a Yes or No prompt.",
              "MIRRTEXT = 0 keeps text readable when geometry is mirrored (default); MIRRTEXT = 1 mirrors text illegibly.",
              "SCALE enlarges or shrinks objects about a base point by a typed factor (2 doubles, 0.5 halves, 1 unchanged).",
              "SCALE Reference option scales from a known length (two picked points) to a new typed length - the calibration tool.",
              "Drawing one symmetrical half and mirroring halves the drafting time; MIRRTEXT must be 0 first.",
            ],
            codeExample: {
              language: "bash",
              caption: "Mirror a building half and calibrate an imported drawing",
              code: `Command: MIRRTEXT
Enter new value for MIRRTEXT <1>: 0
Command: MIRROR
Select objects: (pick the left half of the plan) -> Enter
Specify first point of mirror line: (pick the symmetry axis top)
Specify second point of mirror line: (pick the symmetry axis bottom)
Erase source objects? [Yes/No] <N>: N

Command: SCALE
Select objects: (pick the imported drawing) -> Enter
Specify base point: (pick a snap-locked corner)
Specify scale factor or [Reference]: R
Specify reference length <1>: (pick wall endpoints, 4200 mm)
Specify new length: 4200`,
            },
            diagram: {
              kind: "fork",
              title: "Mirror, then check the text",
              caption: "The MIRRTEXT variable decides whether mirrored text reads or reverses.",
              start: "Mirror selected objects",
              branches: [
                { label: "MIRRTEXT = 0 (default)", outcome: "Geometry flips, text stays readable; plan is correct", good: true },
                { label: "MIRRTEXT = 1", outcome: "Text mirrors illegibly; plan is unusable until reset", good: false },
                { label: "Forgot to set MIRRTEXT", outcome: "Plan has reversed room labels; redo with MIRRTEXT = 0", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Calibrate with Reference",
              body: "When a drawing arrives from a PDF or survey at the wrong scale, do not redraw it. Pick one dimension of known true length - a measured wall of 4200 mm - and use SCALE Reference to stretch that dimension to 4200. Every other dimension rescales proportionally, and the drawing is true in one command. This is the calibration trick RGPV lab records reward.",
            },
            keyTerms: [
              { term: "MIRROR", definition: "A command that produces a reflected copy across a two-point mirror line; the original is kept or erased." },
              { term: "MIRRTEXT", definition: "A system variable that controls whether text is mirrored (1, illegible) or kept readable (0, default) during MIRROR." },
              { term: "SCALE (Reference)", definition: "A SCALE option that resizes an object from a picked reference length to a typed new length - the calibration tool." },
            ],
            examQuestions: [
              {
                q: "Explain the MIRROR and SCALE commands in AutoCAD. Describe the role of the MIRRTEXT system variable and the Reference option of SCALE, and give a civil example where each is used.",
                marks: 7,
                outline: [
                  "Define MIRROR as reflecting objects across a two-point mirror line; original kept or erased.",
                  "Explain that drawing one symmetrical half and mirroring halves drafting time.",
                  "Define MIRRTEXT: 0 keeps text readable (default), 1 mirrors text illegibly.",
                  "Define SCALE as resizing about a base point by a typed factor (2 doubles, 0.5 halves).",
                  "Explain the Reference option: pick a known length on the object, type the new true length.",
                  "Give the civil calibration use: a PDF-imported wall of measured 4200 mm scaled Reference to 4200 true.",
                  "Stress snap-locked base points for SCALE and setting MIRRTEXT = 0 before mirroring annotated plans.",
                ],
              },
              {
                q: "What value of MIRRTEXT keeps text readable when geometry is mirrored?",
                marks: 2,
              },
              {
                q: "An imported drawing has a wall that should be 3600 mm but measures 1800 mm. State the SCALE option and inputs to fix it.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Stretch and array",
            body: [
              "The STRETCH command lengthens or shortens a group of objects while keeping the parts outside the selection window fixed. The selection must be made with a crossing window (right-to-left, dashed border) so that the objects crossing the window boundary are stretched and those fully inside are moved. A typical use is lengthening a wing of a building: a crossing window selects the end wall and the two side walls crossing the boundary; the base point is the corner, the second point is the new end position, and AutoCAD stretches the side walls while moving the end wall intact.",
              "The ARRAY command produces rectangular, polar or path copies of a selected object. RECTANGULAR arranges copies in rows and columns with set spacing; POLAR arranges copies around a centre at a set angle; PATH arranges copies along a selected path (a polyline, spline or helix) at set intervals. The associative array is a single object: editing one item edits them all, and the array can be re-spaced by grips or by the Properties panel. ARRAYCLASSIC opens the legacy dialog for users who prefer it. Civil applications: rectangular arrays of parking bays, polar arrays of bolt holes on a flange, path arrays of columns along a curved ramp.",
              "The two commands cover the most repetitive civil edits. STRETCH lengthens a corridor without redrawing the walls; ARRAY lays out a row of parking bays in two picks. The lab skill is choosing the crossing window carefully: a window too large moves more than intended, a window too small leaves a kink. For ARRAY, the associativity is the bonus - a polar array of twelve columns can be re-counted to fourteen by editing the array's Items property, no redraw needed. The examiner looks for clean stretched walls with no leftover stubs and evenly spaced array items.",
            ],
            bullets: [
              "STRETCH lengthens objects crossing a crossing window (right-to-left) while parts outside stay fixed.",
              "A crossing window selects objects to move (fully inside) and to stretch (crossing the boundary).",
              "ARRAY RECTANGULAR: rows by columns with set row and column spacing; ARRAY POLAR: items around a centre.",
              "ARRAY PATH: copies along a polyline, spline or helix at set intervals; associative arrays edit as one object.",
              "ARRAYCLASSIC opens the legacy dialog; associative arrays can be re-counted by editing the Items property.",
            ],
            codeExample: {
              language: "text",
              caption: "Stretching a wing and arraying parking bays",
              code: `Command: STRETCH
Select objects using a crossing window: (right-to-left pick)
Specify base point: (snap to the end-wall corner)
Specify second point: @3000,0
  (wing lengthens by 3000 mm, side walls stretch)

Command: ARRAYRECT
Select objects: (pick one parking bay) -> Enter
Enter number of rows: 1
Enter number of columns: 20
Specify column spacing: 2500
  (associative array, 20 bays at 2.5 m centres)`,
            },
            diagram: {
              kind: "pipeline",
              title: "Stretch and array pipeline for a parking layout",
              caption: "Five stages from one bay to a twenty-bay associative row.",
              stages: [
                { label: "Draw one parking bay", note: "rectangle plus wheel stops" },
                { label: "ARRAYRECT 1 by 20", note: "spacing 2500 mm" },
                { label: "Result: associative array", note: "one object, 20 items" },
                { label: "Edit Items property to re-count", note: "no redraw needed" },
                { label: "EXPLODE if non-associative needed", note: "breaks into 20 separate bays" },
              ],
            },
            callout: {
              type: "tip",
              title: "Crossing window is the stretch",
              body: "STRETCH only works with a crossing window (right-to-left, dashed border). A window selection (left-to-right) does nothing because nothing crosses the boundary. The rule: objects fully inside the crossing window move; objects crossing the boundary stretch. Practise the right-to-left drag until it is muscle memory - it is the single most useful mouse skill in the lab.",
            },
            keyTerms: [
              { term: "STRETCH", definition: "A command that lengthens objects crossing a crossing window while parts outside the window stay fixed." },
              { term: "ARRAY (associative)", definition: "A single editable object made of rectangular, polar or path copies; editing one item edits all, and counts can be changed live." },
              { term: "Crossing window", definition: "A right-to-left selection box with a dashed border; objects crossing or inside it are selected (cf. window selection)." },
            ],
            examQuestions: [
              {
                q: "Explain the STRETCH and ARRAY commands in AutoCAD. Describe the role of the crossing window in STRETCH and the three ARRAY modes (rectangular, polar, path), and give a civil use case for each.",
                marks: 7,
                outline: [
                  "Define STRETCH as lengthening objects crossing a crossing window; parts outside stay fixed.",
                  "Explain the crossing window (right-to-left, dashed): fully-inside objects move, crossing objects stretch.",
                  "Give a civil use: lengthening a wing's end wall and side walls without redrawing.",
                  "Define ARRAY RECTANGULAR: rows by columns with row and column spacing; e.g. parking bays.",
                  "Define ARRAY POLAR: items around a centre at a set angle; e.g. bolt holes on a flange.",
                  "Define ARRAY PATH: copies along a polyline or spline; e.g. columns along a curved ramp.",
                  "Mention associativity: one item edit changes all; Items property re-counts without redraw.",
                ],
              },
              {
                q: "Why must STRETCH use a crossing window rather than a window selection?",
                marks: 2,
              },
              {
                q: "State the three ARRAY modes and one civil use of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Explode and properties",
            body: [
              "The EXPLODE command breaks a compound object into its component parts: a polyline becomes individual line and arc segments, a block becomes its constituent objects, a dimension becomes lines, text and arrowheads. Once exploded, the parts no longer behave as one - selecting one segment of an exploded polyline no longer selects the chain. The XPLODE command offers per-object control of colour, linetype and lineweight during the explode. The rule is to explode only when the compound object must be edited at the part level; otherwise keep it intact for selection and area queries.",
              "The PROPERTIES panel (Ctrl+1) is the live object inspector. Selecting any object displays its geometry (start and end points, radius, area), its layer, colour, linetype, lineweight, thickness and plot style. Editing a value in the panel updates the object instantly: typing a new start-X moves the line, picking a new layer re-assigns it. The panel is context-sensitive - selecting a line shows line properties, selecting a circle shows circle properties, selecting a block shows block references and attributes. The Quick Properties palette (Ctrl+Shift+1) is a trimmed version for fast edits.",
              "For civil drafting the PROPERTIES panel replaces a dozen individual commands: change a layer, fix a radius, adjust a lineweight, all without re-drawing. The panel is also the diagnostic tool - selecting a misbehaving object reveals its layer or linetype override, which is usually the cause. EXPLODE is reserved for the rare case where a block or polyline must be edited part-by-part; the lab examiner discourages exploding because it breaks associativity and removes the ability to update by block redefinition. A cleaner alternative is BEDIT which edits the block definition while keeping instances intact.",
            ],
            bullets: [
              "EXPLODE breaks a compound object: polyline to line and arc segments, block to constituent objects, dimension to lines and text.",
              "XPLODE offers per-object control of colour, linetype and lineweight during the explode.",
              "PROPERTIES panel (Ctrl+1) shows and edits geometry, layer, colour, linetype, lineweight, thickness and plot style live.",
              "Context-sensitive: a line shows line properties, a circle shows circle properties, a block shows references and attributes.",
              "BEDIT edits a block's definition while keeping instances intact - the cleaner alternative to EXPLODE for block edits.",
            ],
            codeExample: {
              language: "bash",
              caption: "Diagnosing and fixing an object via the Properties panel",
              code: `Command: (select the misbehaving wall line)
  -> Properties panel opens (Ctrl+1)
  Layer: A-TEXT        <- wrong layer
  Color: ByLayer
  Linetype: Continuous
  Lineweight: 0.13 mm
  Start X: 4200  Start Y: 3100
  Length: 5400

Fix in the panel:
  Layer: A-WALL         <- type or pick from list
  Lineweight: 0.30 mm   <- correct weight
  -> object updates instantly, no redraw`,
            },
            diagram: {
              kind: "layers",
              title: "Properties panel sections for a selected line",
              caption: "The panel groups properties by category; each is editable in place.",
              layers: [
                { label: "General", note: "Colour, layer, linetype, lineweight, thickness, plot style" },
                { label: "Geometry (3D)", note: "Position X/Y/Z, normal vector" },
                { label: "Geometry (1D)", note: "Start X/Y/Z, End X/Y/Z, Delta, Length, Angle" },
                { label: "Misc", note: "Hyperlink, thickness" },
                { label: "View", note: "annotative, plot stamp" },
              ],
            },
            callout: {
              type: "warning",
              title: "Resist EXPLODE",
              body: "EXPLODE is the lab's most overused command and the source of most broken drawings. A polyline exploded into segments loses its area query; a block exploded loses its redefinition link. Before exploding, ask whether BEDIT (for blocks) or PEDIT (for polylines) does the same edit while keeping the compound intact. The examiner deducts marks for exploded dimensions, because the dimension no longer updates when the geometry changes.",
            },
            keyTerms: [
              { term: "EXPLODE", definition: "A command that breaks a compound object (polyline, block, dimension) into its constituent parts, losing compound behaviour." },
              { term: "PROPERTIES panel", definition: "The Ctrl+1 object inspector that shows and edits geometry, layer, colour, linetype, lineweight and plot style live." },
              { term: "BEDIT", definition: "The block editor that edits a block's definition while keeping every inserted instance intact - the cleaner alternative to EXPLODE." },
            ],
            examQuestions: [
              {
                q: "Explain the EXPLODE command and the PROPERTIES panel in AutoCAD. Describe what EXPLODE does to a polyline, a block and a dimension, and justify why BEDIT is preferred over EXPLODE for editing blocks.",
                marks: 7,
                outline: [
                  "Define EXPLODE as breaking a compound object into its component parts.",
                  "Describe the effect on a polyline (becomes line and arc segments), a block (becomes constituent objects), a dimension (becomes lines, text, arrowheads).",
                  "State that exploded parts no longer behave as one: selecting one segment no longer selects the chain.",
                  "Describe the PROPERTIES panel (Ctrl+1): live inspector of geometry, layer, colour, linetype, lineweight, plot style.",
                  "Explain that the panel is context-sensitive: a line shows line properties, a circle shows circle properties.",
                  "Justify BEDIT over EXPLODE for blocks: edits the definition while keeping instances intact and re-linkable.",
                  "Conclude that EXPLODE breaks associativity, so dimensions no longer update when geometry changes - discouraged in lab.",
                ],
              },
              {
                q: "What does the EXPLODE command do to a polyline?",
                marks: 2,
              },
              {
                q: "State any three properties of a line that can be read and edited in the PROPERTIES panel.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Match properties and grips",
            body: [
              "The MATCHPROP (Match Properties) command copies the layer, colour, linetype, lineweight, thickness, plot style and (optionally) dimension style and text style from a source object to one or more destination objects. The command picks the source first, then the cursor turns into a brush; picking destination objects re-styles them to match. The Settings dialog within the command controls which properties are copied - useful for matching only the layer without changing the colour override. The civil drafter uses MATCHPROP to fix an object that landed on the wrong layer: pick a correct wall, brush the mis-assigned one, done.",
              "Grips are the small blue squares that appear at an object's defining points when it is selected without a command active - endpoints and midpoint of a line, quadrant points and centre of a circle, vertices of a polyline. Picking a grip turns it hot (red); the cursor then offers Stretch, Move, Rotate, Scale, Mirror at that grip (cycled by Enter or the right-click menu). A hot grip edit is a one-step modification: drag a line endpoint to a new snap, rotate a door swing about its hinge grip, mirror a detail about a vertex grip. Grips turn the selected object into its own editing widget.",
              "The combination of MATCHPROP and grips covers most day-to-day edits without typing a command. The workflow is: click the object to show its grips, drag the appropriate grip with OSNAP on to land it exactly, then if the layer or colour is wrong, MATCHPROP from a correct neighbour. The lab examiner rewards this direct-edit discipline because it is faster and less error-prone than re-drawing. The grip hot states (Stretch, Move, Rotate, Scale, Mirror) are cycled by pressing Enter repeatedly while a grip is hot - a tip worth memorising because it replaces five commands with one widget.",
            ],
            bullets: [
              "MATCHPROP copies layer, colour, linetype, lineweight, thickness, plot style (and optionally dim and text style) from source to destinations.",
              "MATCHPROP Settings dialog controls which properties are copied - match only the layer, not the colour override.",
              "Grips: blue squares at defining points (endpoints, midpoint, vertices, quadrants, centre) when the object is selected with no command active.",
              "Picking a grip makes it hot (red); Enter cycles Stretch, Move, Rotate, Scale, Mirror at that grip.",
              "Hot-grip editing replaces five commands (Stretch, Move, Rotate, Scale, Mirror) with one widget on the object itself.",
            ],
            codeExample: {
              language: "bash",
              caption: "Fixing a misplaced wall layer and stretching a vertex by grips",
              code: `Command: MATCHPROP
Select source object: (pick a correct wall on A-WALL)
Current active settings: Color Layer Ltype Lweight...
Select destination object(s) or [Settings]: S
  -> tick Layer only, untick Color -> OK
Select destination object(s): (pick the mis-assigned wall) -> Enter
  (wall now on A-WALL, colour override preserved)

Command: (click the polyline to show grips)
  (pick a vertex grip -> turns red and hot)
** STRETCH **
Specify stretch point: @0,1500
  (vertex moves up 1500 mm, adjacent segments stretch)`,
            },
            diagram: {
              kind: "cycle",
              title: "Hot-grip edit cycle",
              caption: "With a grip picked hot, pressing Enter cycles through the five edit modes.",
              steps: [
                { label: "Pick grip -> Stretch (default)" },
                { label: "Enter -> Move", note: "drag the object by the grip" },
                { label: "Enter -> Rotate", note: "about the grip" },
                { label: "Enter -> Scale", note: "about the grip" },
                { label: "Enter -> Mirror", note: "across the grip axis" },
                { label: "Enter -> back to Stretch", note: "cycle repeats" },
              ],
            },
            callout: {
              type: "tip",
              title: "Grips before commands",
              body: "Before reaching for a typed command, click the object and use its grips. Drag a vertex to stretch, pick a hinge grip to rotate a door, mirror a detail about a vertex grip. Press Enter to cycle Stretch, Move, Rotate, Scale, Mirror. The discipline is faster than typing, uses OSNAP for the landing point, and leaves no command history clutter - exactly the direct-edit culture the lab rewards.",
            },
            keyTerms: [
              { term: "MATCHPROP", definition: "A command that copies layer, colour, linetype, lineweight and plot style from a source object to one or more destinations." },
              { term: "Grip", definition: "A small blue square at an object's defining point; picking it makes it hot and offers Stretch, Move, Rotate, Scale, Mirror at that point." },
              { term: "Hot grip", definition: "A picked grip turned red; the cursor then edits the object at that point, cycling modes on Enter." },
            ],
            examQuestions: [
              {
                q: "Explain the MATCHPROP command and the grip-editing mechanism in AutoCAD. Describe which properties MATCHPROP copies, the role of its Settings dialog, and the five edit modes available at a hot grip.",
                marks: 7,
                outline: [
                  "Define MATCHPROP as copying layer, colour, linetype, lineweight, thickness, plot style (and optionally dim and text style).",
                  "Explain the workflow: pick source, brush destinations; the cursor becomes a brush icon.",
                  "Describe the Settings dialog: tick which properties to copy, e.g. Layer only without the colour override.",
                  "Define grips as blue squares at endpoints, midpoints, vertices, quadrants and centre, shown when selected with no command.",
                  "Explain that picking a grip makes it hot (red); Enter cycles Stretch, Move, Rotate, Scale, Mirror.",
                  "Give the civil use: match a wall layer from a correct neighbour; stretch a polyline vertex by its grip.",
                  "Conclude that grips plus MATCHPROP replace five typed commands with direct object editing.",
                ],
              },
              {
                q: "Which properties does MATCHPROP copy by default?",
                marks: 2,
              },
              {
                q: "State the five edit modes available at a hot grip and the key that cycles them.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ===== UNIT IV =====
    {
      number: 4,
      roman: "IV",
      title: "Annotation and Dimensioning",
      summary:
        "The language layer of every civil drawing: text styles and single and multiline text, dimension styles and the dimension family, linear aligned and angular dimensions, diameter and radius dimensions with leaders and tolerances, and hatching with annotation scales that keep the language readable at every plot scale.",
      chapter: {
        number: "04",
        title: "Annotation and Dimensioning",
        intro:
          "Unit IV is the language of the drawing. Text styles and the TEXT and MTEXT commands place the labels and notes; dimension styles and their family govern the dimension line, arrowhead and text; the linear, aligned and angular dimension commands measure the geometry; the diameter, radius, leader, tolerance and hatch commands finish the annotation; and the annotation scale mechanism unifies text, dimensions and hatches under one plot-scale discipline.",
        inOneBreath:
          "A text style (STYLE) sets font height width factor obliquing and orientation; TEXT places a single line at a pick point; MTEXT opens a paragraph editor with bold fractions and symbols; a dimension style (DIMSTYLE) is the parent of a family (linear, aligned, angular, diameter, radius, ordinate, leader); DIMLINEAR dimensions horizontal or vertical distance; DIMALIGNED dimensions the true length of an angled segment; DIMANGULAR dimensions the angle between two lines; DIMDIAMETER and DIMRADIUS prefix circle and arc values; MLEADER draws an arrow-headed note as one object; tolerances attach a plus-minus band; HATCH fills a closed boundary with a pattern; and the annotation scale mechanism makes one style serve every plot scale.",
        sections: [
          {
            number: "4.1",
            title: "Text styles, single and multiline text",
            body: [
              "A text style (STYLE command) defines the font, the height, the width factor, the obliquing angle and the orientation (backwards, upside-down) of all text that uses it. The height is normally left at 0 in the style so that the TEXT and MTEXT prompts ask for it per insertion; setting a non-zero height fixes the text height and skips the prompt. For civil drawings the standard style is ROMANS at 0 degrees obliquing, width factor 1.0, with a height set per scale - 2.5 mm for 1:50 plans, 3.5 mm for 1:100 plans. A heavy SIMPLEX or ARIAL style is reserved for titles and the title block.",
              "The TEXT (DTEXT) command places a single line of text at a picked start point with a set rotation; it is the choice for short labels like room names and dimension overrides. The MTEXT command opens an in-place editor for a paragraph of formatted text - multiple lines, bold runs, fractions, symbols (degrees, plus-minus), indented lists and imported columns. MTEXT is the choice for long notes such as general notes, specification extracts and the title-block entries. Both honour the current text style; both can be edited later by double-clicking (MTEXT opens the editor, TEXT edits in place).",
              "The civil lab skill is matching the text height to the plot scale. A 2.5 mm text height reads correctly on a 1:50 plot when the drawing is in millimetres at 1:1, because the plot scale converts 2.5 mm on paper to 125 mm on the drawing. The formula is: paper height times plot-scale denominator (for millimetre drawings). Mismatched text heights - 2.5 mm text on a 1:100 plot reads as 1.25 mm - are the common annotation slip. The lab examiner measures text height on the plot, so the style and the plot scale must be set together, not independently.",
            ],
            bullets: [
              "STYLE defines font, height, width factor, obliquing, orientation; leave height at 0 to set per insertion.",
              "Civil standard: ROMANS font, 0 degrees obliquing, width factor 1.0, height set per plot scale.",
              "TEXT (DTEXT): single line at a picked point with set rotation; for short labels like room names.",
              "MTEXT: in-place editor for paragraphs with bold, fractions, symbols (degrees, plus-minus), lists; for long notes.",
              "Text height = paper height times plot-scale denominator (mm drawings); 2.5 mm at 1:50 equals 125 mm on the drawing.",
            ],
            table: {
              caption: "Recommended text heights for civil drawings at common plot scales (drawing in mm).",
              headers: ["Plot scale", "Paper height", "Drawing height", "Use"],
              rows: [
                ["1:1", "2.5 mm", "2.5 mm", "detail in model space"],
                ["1:50", "2.5 mm", "125 mm", "room labels, dimensions"],
                ["1:100", "3.5 mm", "350 mm", "general plans"],
                ["1:200", "5.0 mm", "1000 mm", "key plans, site layouts"],
                ["1:500", "7.0 mm", "3500 mm", "master plan titles"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "TEXT vs MTEXT",
              caption: "Pick the right tool: short label or long note.",
              left: {
                heading: "TEXT (single line)",
                items: [
                  "One line of text at a pick point",
                  "Set rotation by typed angle",
                  "Fast for room names, door numbers",
                  "Edited in place by double-click",
                  "No formatting runs (bold, fractions)",
                ],
              },
              right: {
                heading: "MTEXT (multiline)",
                items: [
                  "Paragraph editor with word wrap",
                  "Bold, fractions, symbols, lists",
                  "Choice for general notes and specs",
                  "Edited by double-click opens editor",
                  "Boundary width set at insertion",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Match text height to scale",
              body: "The commonest annotation slip is setting 2.5 mm text on a 1:100 plot, where it prints at 1.25 mm and vanishes. The rule: paper height times the plot-scale denominator gives the drawing height. A 1:100 plan in millimetres needs 350 mm drawing-height text to print at 3.5 mm. Set the text style height to 0 and type the drawing height per insertion so the same style serves multiple scales.",
            },
            keyTerms: [
              { term: "Text style (STYLE)", definition: "A named definition of font, height, width factor, obliquing and orientation shared by TEXT and MTEXT." },
              { term: "TEXT (DTEXT)", definition: "The single-line text command placing one line at a picked point with a set rotation; used for short labels." },
              { term: "MTEXT", definition: "The multiline text command opening an in-place editor for a paragraph with bold, fractions, symbols and lists." },
            ],
            examQuestions: [
              {
                q: "Explain text styles and the TEXT and MTEXT commands in AutoCAD. Describe how text height is chosen for a given plot scale, and give a table of recommended heights for 1:50, 1:100 and 1:200 civil drawings.",
                marks: 7,
                outline: [
                  "Define a text style (STYLE): font, height, width factor, obliquing, orientation.",
                  "Explain that height is normally left at 0 in the style so the prompt asks for it per insertion.",
                  "Define TEXT (DTEXT): single line at a pick point with set rotation; used for short labels.",
                  "Define MTEXT: in-place paragraph editor with bold, fractions, symbols, lists; used for long notes.",
                  "State the formula: drawing height = paper height times plot-scale denominator (mm drawings).",
                  "Give the table: 1:50 -> 125 mm, 1:100 -> 350 mm, 1:200 -> 1000 mm for 2.5, 3.5, 5.0 mm paper heights.",
                  "Conclude that style and plot scale must be set together; mismatched heights vanish on the plot.",
                ],
              },
              {
                q: "Why is the text style height normally left at 0?",
                marks: 2,
              },
              {
                q: "Calculate the drawing text height for a 3.5 mm paper height at a plot scale of 1:100 in a millimetre drawing.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Dimension styles and the dimension family",
            body: [
              "A dimension style (DIMSTYLE command) is a named collection of settings that govern every aspect of a dimension: the dimension line, extension lines, arrowheads, text appearance and placement, units, precision, tolerances and the scale at which the dimension renders. The Dimension Style Manager (DDIM) creates, modifies and compares styles. The style is the parent of a family - linear, angular, diameter, radius, ordinate, leader - each of which can override the parent for its specific needs. The current dimension style applies to every new dimension until it is changed.",
              "The four critical settings for a civil dimension style are: the arrowhead type (Architectural tick or Open arrow for civil, Closed filled for mechanical); the text height (matching the plot scale, as for text); the units format (Decimal, precision 0 for mm); and the overall scale (DIMSCALE) which scales the dimension features - arrowheads, text, gaps - to the plot scale. A DIMSCALE of 50 renders a 2.5 mm text height and arrowhead at 1:50; a DIMSCALE of 100 renders the same features at 1:100. Setting DIMSCALE wrong is the common dimension slip - tiny arrowheads or oversized text.",
              "The civil lab ritual creates a style named CIVIL-50 with Architectural tick arrowheads, ROMANS text at 2.5 mm paper height, Decimal units precision 0, and DIMSCALE 50; then a sibling CIVIL-100 with DIMSCALE 100. The Annotative option (modern AutoCAD) automates this: an annotative dimension rescales itself to the plot scale of the current viewport, so one style serves every scale. The examiner checks the dimension style by picking any dimension and reading its style name in the PROPERTIES panel; a mismatched style on a single dimension is the giveaway of a hurried drawing.",
            ],
            bullets: [
              "DIMSTYLE is a named set of dimension line, extension, arrowhead, text, units, precision, tolerance and scale settings.",
              "The style is the parent of a family: linear, angular, diameter, radius, ordinate, leader - each can override the parent.",
              "Four critical settings: arrowhead type (Architectural tick), text height, units format (Decimal, precision 0), DIMSCALE.",
              "DIMSCALE scales dimension features to the plot scale: 50 for 1:50, 100 for 1:100; wrong DIMSCALE gives tiny or huge arrows.",
              "Annotative dimensions auto-rescale to the viewport's plot scale - one style serves every scale in modern AutoCAD.",
            ],
            table: {
              caption: "Dimension style family members and what each annotates.",
              headers: ["Family member", "Annotates", "Parent override example"],
              rows: [
                ["Linear", "horizontal and vertical distances", "text above the dimension line"],
                ["Aligned", "true length of an angled segment", "text aligned with the segment"],
                ["Angular", "the angle between two lines", "text inside the arc"],
                ["Diameter", "the diameter of a circle", "arrowhead inside, prefix dia-"],
                ["Radius", "the radius of an arc", "arrowhead inside, prefix R"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The dimension style hierarchy",
              caption: "One parent style governs a family of dimension types; each can override.",
              tiers: [
                { label: "Parent style (CIVIL-50)", note: "global: arrow, text, units, DIMSCALE" },
                { label: "Linear, Aligned, Angular", note: "common dims, may override text placement" },
                { label: "Diameter, Radius, Ordinate", note: "circle and arc dims, may override prefix" },
                { label: "Leaders and Tolerances", note: "notes and GD&T frames" },
                { label: "Current style applied to new dims", note: "until changed" },
              ],
            },
            callout: {
              type: "exam",
              title: "Set DIMSCALE last",
              body: "Build the dimension style first - arrowhead, text, units, precision - then set DIMSCALE to match the plot scale. DIMSCALE multiplies every feature of the dimension: arrowhead size, text height, extension-line gap, centre-mark size. Setting it wrong is the common dimension slip - arrowheads vanish or text dwarfs the geometry. The rule: DIMSCALE equals the plot-scale denominator for millimetre drawings (50 for 1:50).",
            },
            keyTerms: [
              { term: "Dimension style (DIMSTYLE)", definition: "A named set of dimension line, extension, arrowhead, text, units and scale settings, parent of a type family." },
              { term: "DIMSCALE", definition: "The overall scale factor for dimension features (arrowheads, text, gaps) - equals the plot-scale denominator for mm drawings." },
              { term: "Annotative dimension", definition: "A dimension that rescales itself to the plot scale of the current viewport, so one style serves every scale." },
            ],
            examQuestions: [
              {
                q: "Explain dimension styles in AutoCAD. Describe the dimension style family, the four critical settings for a civil style, and the role of DIMSCALE and annotative scaling.",
                marks: 7,
                outline: [
                  "Define a dimension style (DIMSTYLE) as a named set of dimension line, extension, arrowhead, text, units, precision, tolerance and scale.",
                  "Explain the Dimension Style Manager (DDIM) for creating, modifying and comparing styles.",
                  "Describe the family: linear, aligned, angular, diameter, radius, ordinate, leader - each can override the parent.",
                  "List the four critical civil settings: Architectural tick arrowhead, ROMANS text height, Decimal units precision 0, DIMSCALE.",
                  "Explain DIMSCALE: scales arrowheads, text, gaps; equals plot-scale denominator (50 for 1:50, 100 for 1:100).",
                  "Describe annotative dimensions: auto-rescale to the viewport's plot scale, one style serves every scale.",
                  "Give the civil ritual: create CIVIL-50 (DIMSCALE 50) and CIVIL-100 (DIMSCALE 100) siblings.",
                ],
              },
              {
                q: "What does DIMSCALE control in a dimension style?",
                marks: 2,
              },
              {
                q: "Name any four members of the dimension style family and what each annotates.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Linear, aligned and angular dimensions",
            body: [
              "The DIMLINEAR command dimensions a horizontal or vertical distance between two extension points. Pick the two points (or press Enter to select an object), place the dimension line at the desired offset, and the dimension text appears with the measured value. The Mtext, Text and Angle options override the default value or its angle before placement. DIMLINEAR is the workhorse for civil plans: room widths, wall lengths, opening sizes. The extension lines should clear the object by 1 to 2 mm on paper and extend 2 to 3 mm past the dimension line - governed by the style's offset and extension settings.",
              "The DIMALIGNED command dimensions the true length of an angled segment: the dimension line runs parallel to the segment, the extension lines are perpendicular to it. For a wall at 30 degrees, DIMLINEAR would give its horizontal or vertical projection (wrong), while DIMALIGNED gives its true 4500 mm length. The DIMANGULAR command dimensions the angle between two lines, the angle of an arc, or the angle between two points on a circle: pick the two lines and place the angular dimension arc with its value in degrees. The default precision is 0 degrees; raise it for survey angles.",
              "The lab skill is matching the dimension type to the geometry. Horizontal and vertical distances use DIMLINEAR; angled walls and ramps use DIMALIGNED; wall angles and ramp slopes use DIMANGULAR. A common slip is using DIMLINEAR on an angled wall and reading the projection instead of the true length - the value is shorter than the wall, and the error propagates into the bill of quantities. The examiner checks by re-measuring with DIST: if the dimension and the DIST value disagree, the wrong dimension type was used. DIMCONTINUE and DIMBASELINE build runs of dimensions from a common origin.",
            ],
            bullets: [
              "DIMLINEAR: horizontal or vertical distance between two extension points; the civil plan workhorse.",
              "DIMALIGNED: true length of an angled segment; dimension line parallel to the segment, extensions perpendicular.",
              "DIMANGULAR: angle between two lines, or arc angle; default precision 0 degrees, raise for survey angles.",
              "Extension lines clear the object by 1 to 2 mm and extend 2 to 3 mm past the dimension line (style settings).",
              "DIMCONTINUE chains dimensions end-to-end; DIMBASELINE stacks them from a common first extension.",
            ],
            table: {
              caption: "Dimension type matched to the geometry it measures.",
              headers: ["Geometry", "Command", "Output", "Slip if wrong"],
              rows: [
                ["Horizontal wall", "DIMLINEAR", "true horizontal length", "(correct)"],
                ["Vertical wall", "DIMLINEAR (rotated)", "true vertical length", "(correct)"],
                ["Angled wall at 30 deg", "DIMALIGNED", "true 4500 mm length", "DIMLINEAR gives the projection (shorter)"],
                ["Angle between two walls", "DIMANGULAR", "angle in degrees", "DIMLINEAR gives no angle"],
                ["Arc length", "DIMANGULAR (arc)", "angle subtended", "DIMLINEAR gives chord (shorter)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Choosing the dimension type",
              caption: "Match the dimension command to the geometry to avoid the projection slip.",
              steps: [
                { label: "Is the segment horizontal or vertical?" },
                { label: "Yes -> DIMLINEAR", note: "true H or V length" },
                { label: "No, angled -> DIMALIGNED", note: "true length along segment" },
                { label: "Need an angle? -> DIMANGULAR", note: "between two lines" },
                { label: "Chain them -> DIMCONTINUE or DIMBASELINE", note: "from a common origin" },
              ],
            },
            callout: {
              type: "warning",
              title: "Aligned for angled walls",
              body: "An angled wall dimensioned with DIMLINEAR gives its horizontal or vertical projection - shorter than the true length. The bill of quantities built on that wrong number under-orders the brick. Always use DIMALIGNED for any segment not exactly horizontal or vertical; verify with DIST that the dimension matches the measured length before the dimension is committed to the plot.",
            },
            keyTerms: [
              { term: "DIMLINEAR", definition: "A command that dimensions a horizontal or vertical distance between two extension points." },
              { term: "DIMALIGNED", definition: "A command that dimensions the true length of an angled segment, dimension line parallel to it." },
              { term: "DIMANGULAR", definition: "A command that dimensions the angle between two lines or the angle subtended by an arc." },
            ],
            examQuestions: [
              {
                q: "Explain the DIMLINEAR, DIMALIGNED and DIMANGULAR commands in AutoCAD. State which geometry each is suited to, and describe the projection slip that occurs when DIMLINEAR is used on an angled wall.",
                marks: 7,
                outline: [
                  "Define DIMLINEAR: horizontal or vertical distance between two extension points; place the line at desired offset.",
                  "Mention the Mtext, Text and Angle options for overriding the default value or angle.",
                  "Define DIMALIGNED: true length of an angled segment; dimension line parallel to the segment.",
                  "Define DIMANGULAR: angle between two lines or arc angle; default precision 0 degrees.",
                  "Give the matching rule: H or V to DIMLINEAR, angled to DIMALIGNED, angles to DIMANGULAR.",
                  "Describe the slip: DIMLINEAR on an angled wall gives the projection, shorter than the true length.",
                  "Mention DIMCONTINUE and DIMBASELINE for chained dimensions from a common origin.",
                ],
              },
              {
                q: "Which command dimensions the true length of an angled wall?",
                marks: 2,
              },
              {
                q: "An angled wall is dimensioned with DIMLINEAR and reads 3900 mm; the true length is 4500 mm. Explain the cause and the correct command.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Diameter and radius dimensions, leaders and tolerances",
            body: [
              "The DIMDIAMETER command dimensions the diameter of a circle: pick the circle, place the text, and the value appears with a diameter prefix (the dia- symbol or the diameter character). DIMRADIUS does the same for an arc with a radius prefix (R). The Leader option inside both pulls the text outside the circle on a leader line when the circle is too small for an inside fit. The text placement is governed by the dimension style's diameter and radius family settings - inside or outside, with or without a leader, and the prefix character set in the primary units tab.",
              "The LEADER (or MLEADER) command draws an arrow-headed leader from a picked point to a note. MLEADER (multileader) is the modern form: a single object with an arrowhead, a leader line and a text or block content, styled by a multileader style. Leaders annotate a point with a note such as P-150 dia RCC column or Finish floor level plus 0.000. The multileader style controls the arrowhead, the leader line type and the text style; the same annotative mechanism as dimensions applies, so a 1:50 multileader rescales at 1:100 automatically.",
              "Tolerances attach a plus-minus band to a dimension value, set in the dimension style's Tolerances tab: symmetric (+/- 0.5), deviation (+0.2 / -0.1), limits (showing the upper and lower bounds instead of the nominal) or basic (a box around the nominal). For civil work, tolerances are rare on plan dimensions but common on steel fabrication and precast details. Hatching (HATCH) fills a closed boundary with a pattern - brick, concrete, earth, insulation - picked from a pattern library and scaled to the plot. The hatch scale must match the pattern's intended spacing, or the hatch prints as a solid fill or as isolated dots.",
            ],
            bullets: [
              "DIMDIAMETER dimensions a circle's diameter with a dia- prefix; DIMRADIUS dimensions an arc's radius with an R prefix.",
              "Leader option pulls the text outside the circle when the circle is too small for an inside fit.",
              "MLEADER draws a single object: arrowhead plus leader line plus text or block, styled by a multileader style.",
              "Tolerances: symmetric (+/- 0.5), deviation (+0.2 / -0.1), limits, or basic (box around nominal) - set in the style Tolerances tab.",
              "HATCH fills a closed boundary with a pattern (brick, concrete, earth) scaled to the plot; wrong scale gives solid fill or dots.",
            ],
            codeExample: {
              language: "bash",
              caption: "Dimensioning a column circle and hatching a wall section",
              code: `Command: DIMDIAMETER
Select arc or circle: (pick the column circle)
Dimension text = 150
Specify dimension line location: (pick a point inside)
  -> "dia-150" appears

Command: MLEADER
Specify leader arrowhead location: (pick the column)
Specify leader landing location: (pick a text point)
  -> type "P-150 dia RCC column"

Command: HATCH
Internal point: (pick inside the wall section)
Pattern: ANSI31 (or AR-CONC for concrete)
Scale: 1.0
  -> cross-hatched section fill`,
            },
            diagram: {
              kind: "matrix",
              title: "Annotation choice by feature",
              caption: "Pick the cell whose feature and annotation match the geometry.",
              axes: { x: "Feature: point vs closed area", y: "Geometry: line or arc vs circle or section" },
              quadrants: [
                { label: "MLEADER on a point", note: "annotate a column corner with a note" },
                { label: "DIMDIAMETER on a circle", note: "annotate a pipe or column with dia-value" },
                { label: "DIMLINEAR on a line", note: "annotate a wall length" },
                { label: "HATCH in a closed area", note: "fill a wall or footing section with a pattern" },
              ],
            },
            callout: {
              type: "exam",
              title: "Hatch scale matches pattern",
              body: "A hatch scale too large prints isolated dots; too small prints a solid fill. Match the scale to the pattern's intended spacing at the plot scale: ANSI31 at scale 1 reads at about 3 mm spacing on a 1:50 plot. Trial the hatch in a paper-space viewport before committing - the viewport preview shows the plot-time density. The lab examiner checks hatch density on the plot, not on the model-space zoom.",
            },
            keyTerms: [
              { term: "DIMDIAMETER", definition: "A command that dimensions the diameter of a circle, prefixing the value with the diameter symbol." },
              { term: "MLEADER", definition: "A multileader object: arrowhead, leader line and text or block as one, styled by a multileader style." },
              { term: "HATCH", definition: "A command that fills a closed boundary with a pattern (brick, concrete, earth) at a set scale and angle." },
            ],
            examQuestions: [
              {
                q: "Explain the DIMDIAMETER, DIMRADIUS, MLEADER, tolerance and HATCH features of AutoCAD. Describe a civil use case for each and state the rule for choosing the correct hatch scale.",
                marks: 7,
                outline: [
                  "Define DIMDIAMETER: pick a circle, value appears with a dia- prefix; Leader option pulls text outside.",
                  "Define DIMRADIUS: same for an arc with an R prefix.",
                  "Define MLEADER: single object (arrowhead plus line plus text or block) styled by a multileader style; annotate a point with a note.",
                  "Describe tolerances: symmetric (+/-), deviation (+/-), limits, basic; set in the style Tolerances tab.",
                  "Define HATCH: fill a closed boundary with a pattern (ANSI31, AR-CONC) at a set scale and angle.",
                  "Give civil use cases: column circle, arc radius, column note, steel tolerance, wall section hatch.",
                  "State the hatch scale rule: scale matches the pattern spacing at the plot scale; too large gives dots, too small gives solid fill.",
                ],
              },
              {
                q: "Which command annotates a point with an arrow-headed note?",
                marks: 2,
              },
              {
                q: "Name the four tolerance display modes available in a dimension style.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Hatching, annotation scales and review",
            body: [
              "The HATCH command, beyond its basic use, offers a separate hatch creation mode that detects a closed boundary automatically (internal point pick) or selects the boundary objects directly. The Annotative flag on a hatch rescales the pattern to the viewport's plot scale, so the same wall section hatched at 1:50 and 1:100 prints with proportional spacing in both views. The hatch origin sets where the pattern starts - useful for brick patterns that must align to a corner. The GAP TOLERANCE setting closes near-miss boundaries; a gap of 0.5 mm is enough for most imported geometry.",
              "The annotation scale mechanism, introduced in modern AutoCAD, unifies text, dimensions, multileaders and hatches under one scale discipline. An annotative object carries one or more scales; when the viewport's scale matches one of them, the object renders at its paper height for that scale. The ANNOAUTOSCALE variable auto-adds the current viewport scale to every annotative object. The lab workflow is: set the drawing to annotative, build one text style, one dimension style and one multileader style, then add the needed scales per object - the old CIVIL-50 and CIVIL-100 sibling styles collapse into one.",
              "The annotation review is the lab's last check before plotting. Open each layout viewport, set its plot scale, and verify that every dimension, label and hatch reads at its intended paper size - 2.5 mm text, 3 mm arrowheads, 1.5 mm hatch spacing. The text and dimension styles' annotative scales must list the viewport scale, or the object vanishes. The examiner's checklist is: text legible at arm's length, dimensions not crowding the geometry, hatches not solid, leaders not crossing. A ten-minute annotation review catches the slips that cost a whole plot cycle.",
            ],
            bullets: [
              "HATCH detects a closed boundary by internal point or by selecting boundary objects; Annotative flag rescales to viewport.",
              "Hatch origin sets the pattern start corner; GAP TOLERANCE closes near-miss boundaries up to a set value.",
              "Annotative objects carry one or more scales; the viewport's scale selects which scale renders.",
              "ANNOAUTOSCALE auto-adds the current viewport scale to every annotative object; one style serves many scales.",
              "Annotation review before plotting: per viewport, check text 2.5 mm, arrowheads 3 mm, hatch not solid, leaders not crossing.",
            ],
            codeExample: {
              language: "bash",
              caption: "Annotative hatch and dimension in a 1:50 viewport",
              code: `Command: HATCH
Internal point: (pick inside wall section)
Pattern: AR-CONC  Scale: 1
Annotative: Yes
Add scales: 1:50, 1:100

Command: (in paper space, set viewport scale)
Viewport scale: 1:50
  -> hatch renders at AR-CONC scale 1 (fine dots)
  -> dimension text renders at 2.5 mm

Command: ANNODETECT
  -> lists annotative objects missing the current scale
  -> fix by adding 1:50 to each`,
            },
            diagram: {
              kind: "flow",
              title: "The annotation review before plot",
              caption: "Five checks per viewport; any failure sends the object back to its style.",
              steps: [
                { label: "Set viewport plot scale", note: "e.g. 1:50" },
                { label: "Verify text legible at 2.5 mm" },
                { label: "Verify arrowheads at 3 mm" },
                { label: "Verify hatch not solid, not dots" },
                { label: "Verify leaders not crossing geometry", note: "then plot" },
              ],
            },
            callout: {
              type: "tip",
              title: "Annotative collapses the styles",
              body: "Set the drawing to annotative and build one text, one dimension and one multileader style. Add the needed scales (1:50, 1:100, 1:200) to each annotative object. The old CIVIL-50 and CIVIL-100 sibling styles collapse into one; the viewport's scale selects which annotative scale renders. One style, many plots - the modern civil drafting discipline.",
            },
            keyTerms: [
              { term: "Annotative object", definition: "An object carrying one or more paper scales; the viewport scale selects which scale renders at the correct paper size." },
              { term: "Hatch origin", definition: "The corner where a hatch pattern starts; set it to align brick or tile patterns to a building corner." },
              { term: "ANNOAUTOSCALE", definition: "A system variable that auto-adds the current viewport scale to every annotative object as the viewport changes." },
            ],
            examQuestions: [
              {
                q: "Explain the hatch and annotation scale mechanisms in AutoCAD. Describe how an annotative object carries multiple scales, the role of ANNOAUTOSCALE, and the five checks of the annotation review before plotting.",
                marks: 7,
                outline: [
                  "Describe HATCH boundary detection (internal point pick) and the Annotative flag that rescales the pattern to the viewport.",
                  "Define a hatch origin and GAP TOLERANCE for aligning patterns and closing near-miss boundaries.",
                  "Define an annotative object: carries one or more scales; the viewport scale selects which renders.",
                  "Explain that one text, dimension and multileader style replaces the CIVIL-50 and CIVIL-100 siblings.",
                  "Describe ANNOAUTOSCALE: auto-adds the current viewport scale to every annotative object.",
                  "List the five review checks per viewport: scale set, text 2.5 mm, arrowheads 3 mm, hatch not solid, leaders not crossing.",
                  "Conclude that a ten-minute review catches the slips that cost a whole plot cycle.",
                ],
              },
              {
                q: "What does the Annotative flag on a hatch do?",
                marks: 2,
              },
              {
                q: "State any three of the five annotation review checks made per viewport before plotting.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ===== UNIT V =====
    {
      number: 5,
      roman: "V",
      title: "Plotting and Civil Applications",
      summary:
        "The plot pipeline and the civil drafting portfolio: page setup and plot styles, viewports and scaling with title blocks, the drawing of plans elevations and sections, the basics of 3D modelling, and three civil case studies - a residential plan, a road cross-section and a contour plan.",
      chapter: {
        number: "05",
        title: "Plotting and Civil Applications",
        intro:
          "Unit V closes the lab with the output and the portfolio. Page setup and plot styles bundle the plotter, paper, scale and pen mapping into one reusable configuration; viewports, scaling and title blocks compose the plotted sheet; plans, elevations and sections are the three drawings every civil project needs; 3D modelling basics cover extrude, revolve, Boolean operations and visual styles; and three case studies tie the whole lab together.",
        inOneBreath:
          "A page setup (PAGESETUP) bundles plotter, paper size, plot area, plot scale, orientation and plot style table; a plot style table is colour-dependent (CTB) or named (STB) mapping colours to pen widths; a viewport (MVIEW) is a paper-space window onto model space set to a chosen scale and locked with VPLOCK; the title block carries project, title, scale, number and revisions; a plan is a horizontal section at 1 m above floor, an elevation is a vertical projection of one face, and a section is a vertical cut; 3D solids are built by EXTRUDE, REVOLVE, SWEEP and LOFT and combined by UNION, SUBTRACT and INTERSECT; and the three civil case studies are a residential plan at 1:50 on A2, a road cross-section at 1:20 on A3, and a contour plan at 1:500 on A1.",
        sections: [
          {
            number: "5.1",
            title: "Page setup and plot styles",
            body: [
              "A page setup (PAGESETUP command) bundles the plotter, paper size, plot area, plot scale, plot orientation and plot style table into one named configuration applied to a layout. The layout's plot is then reproducible: the same page setup applied to a different drawing produces the same paper output. The plotter may be a physical device (a large-format inkjet) or a virtual one (DWG to PDF.pc3 for PDF output). Paper sizes for civil work are A1 (841 by 594 mm) and A2 (594 by 420 mm) for plans, A3 (420 by 297 mm) for details; the orientation is Portrait or Landscape, with the drawing upside or rotated.",
              "The plot style table governs how colours and lineweights map at plot time. A colour-dependent table (CTB) maps each AutoCAD colour index (1 to 255) to a pen width and screening percentage; a named table (STB) maps named plot styles to objects directly. The civil convention assigns red (colour 1) to walls at 0.5 mm, green (3) to doors at 0.35 mm, blue (5) to windows at 0.35 mm, white (7) to dimensions and text at 0.25 mm, and grey (8) to hatching at 0.13 mm. The CTB file is shared across the office so every plot matches, regardless of who sends it.",
              "The plot area selects what prints: Window (two picked corners), Extents (all drawn objects), Display (current view), Limits (the LIMITS rectangle) or a saved View. The plot scale ties paper to drawing: 1:50 means 1 mm on paper equals 50 mm in the drawing; Fit to Paper scales the plot area to fill the sheet but breaks the scale and is used only for check plots. The lab ritual is to save a page setup named A1-50-CIVIL with A1 paper, Landscape, plot scale 1:50, plot area Window, and the office CTB, then import it into every layout so plots are identical across drawings.",
            ],
            bullets: [
              "PAGESETUP bundles plotter, paper size, plot area, scale, orientation and plot style table into one named layout configuration.",
              "Plotters: physical (large-format inkjet) or virtual (DWG to PDF.pc3); civil paper sizes A1, A2, A3.",
              "Plot style tables: colour-dependent CTB (colour to pen width) or named STB (named style to object).",
              "Civil CTB convention: red walls 0.5 mm, green doors 0.35 mm, blue windows 0.35 mm, white dims 0.25 mm, grey hatch 0.13 mm.",
              "Plot scale ties paper to drawing (1:50 = 1 mm paper to 50 drawing units); Fit to Paper breaks scale, used only for check plots.",
            ],
            codeExample: {
              language: "bash",
              caption: "Configuring an A1 page setup at 1:50 with a civil CTB",
              code: `Command: PAGESETUP
  New page setup: A1-50-CIVIL
  Plotter: DWG to PDF.pc3
  Paper size: ISO A1 (841 x 594 mm)
  Plot area: Window -> pick drawing extents
  Plot scale: 1:50 (1 mm = 50 drawing units)
  Plot style: civil.ctb (colour-dependent)
  Drawing orientation: Landscape
  -> Set Current

Command: -PAGESETUP (apply to another layout)
  Import from: civil_plan_01.dwg`,
            },
            diagram: {
              kind: "pipeline",
              title: "Page setup pipeline from layout to PDF",
              caption: "Six stages; the saved page setup is reusable across drawings.",
              stages: [
                { label: "Create layout tab", note: "Layout1 or named" },
                { label: "PAGESETUP: plotter, paper", note: "DWG to PDF, A1" },
                { label: "Set plot area and scale", note: "Window, 1:50" },
                { label: "Attach plot style table", note: "civil.ctb" },
                { label: "Save page setup name", note: "A1-50-CIVIL" },
                { label: "PLOT -> PDF output", note: "reusable setup" },
              ],
            },
            callout: {
              type: "warning",
              title: "Fit to Paper breaks scale",
              body: "The Fit to Paper option scales the plot area to fill the sheet, breaking the 1:50 or 1:100 scale. Use it only for quick check plots, never for a submission. A dimensioned civil plan plotted at Fit reads 0.83:50 or similar, and every dimension is wrong by the same factor. Always set the explicit plot scale; the examiner measures dimensions on the print and rejects unscaled plots.",
            },
            keyTerms: [
              { term: "Page setup (PAGESETUP)", definition: "A named bundle of plotter, paper size, plot area, scale, orientation and plot style applied to a layout." },
              { term: "Plot style table (CTB or STB)", definition: "A table mapping colours (CTB) or named styles (STB) to pen widths and screening at plot time." },
              { term: "Plot scale", definition: "The ratio of paper to drawing units, e.g. 1:50 = 1 mm paper to 50 drawing units; Fit to Paper breaks it." },
            ],
            examQuestions: [
              {
                q: "Explain page setup and plot styles in AutoCAD. Describe the contents of a page setup, the difference between a CTB and an STB, and the civil convention for assigning colours to lineweights.",
                marks: 7,
                outline: [
                  "Define PAGESETUP as bundling plotter, paper size, plot area, scale, orientation and plot style into one named layout config.",
                  "List plotter types (physical inkjet, virtual DWG to PDF.pc3) and civil paper sizes (A1, A2, A3).",
                  "Describe the plot area options: Window, Extents, Display, Limits, View.",
                  "Define a colour-dependent CTB: each colour index 1 to 255 maps to a pen width and screening.",
                  "Define a named STB: named plot styles assigned to objects directly, independent of colour.",
                  "Give the civil CTB convention: red walls 0.5, green doors 0.35, blue windows 0.35, white dims 0.25, grey hatch 0.13 mm.",
                  "Conclude that the saved page setup and CTB are imported across drawings for identical plots.",
                ],
              },
              {
                q: "What is the difference between a CTB and an STB plot style table?",
                marks: 2,
              },
              {
                q: "State the civil convention lineweights for walls, doors, dimensions and hatching.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Viewports, scaling and title blocks",
            body: [
              "A viewport is a window in paper space through which the model is viewed at a chosen scale. The MVIEW command creates a viewport by picking two corners in the layout; the viewport is a selectable object whose boundary may be turned off for plotting. Double-clicking inside the viewport enters model space through it, where the view can be panned and zoomed; the viewport scale is then fixed by selecting it and reading or setting the scale on the status-bar dropdown. Double-clicking outside returns to paper space, where the title block, notes and viewports live.",
              "The viewport scale must match the dimension annotative scale, or the dimensions vanish or render at the wrong size. Locking the viewport (VPLOCK or the lock icon on the status bar) prevents accidental zoom from changing the scale - a critical safeguard, because a zoomed viewport plots at the unintended scale. Multiple viewports on one sheet can show the plan at 1:100 in one and a detail at 1:20 in another, with each viewport's annotative objects rendering at their paper sizes. The scale list is standard: 1:1, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200.",
              "A title block is the paper-space border that carries the drawing's metadata: project name, drawing title, scale, drawing number, revision history, designer, checker and the firm's logo. The title block is drawn once in a template (.dwt) and inherited by every new drawing; attributes in the block prompt for the project name and drawing number on insertion. For civil work, the title block sits on the layout's outer margin with the viewports inside it; the scale note in the title block must match the viewport scale. The lab record plots are checked against the title-block scale.",
            ],
            bullets: [
              "MVIEW creates a viewport by picking two corners in a layout; the viewport boundary may be turned off for plotting.",
              "Double-click inside enters model space through the viewport; double-click outside returns to paper space.",
              "Viewport scale is fixed from the status-bar dropdown; must match the dimension annotative scale or dims vanish.",
              "VPLOCK prevents accidental zoom from changing the viewport scale; lock every viewport after setting its scale.",
              "Title block carries project, title, scale, number, revisions; drawn once in a template with attributes for metadata.",
            ],
            table: {
              caption: "Standard civil viewport scales and the detail each suits.",
              headers: ["Scale", "Use", "Typical detail"],
              rows: [
                ["1:1", "full size", "manufactured fitting detail"],
                ["1:20", "large detail", "stair section, joint detail"],
                ["1:50", "room detail", "toilet, kitchen plan"],
                ["1:100", "building plan", "floor plan, layout"],
                ["1:200", "site plan", "compound, site layout"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a plotted layout",
              caption: "Each layer is a paper-space element stacked to make the final sheet.",
              layers: [
                { label: "Title block (border plus attributes)", note: "project, scale, number" },
                { label: "Paper-space notes and key", note: "general notes, legend" },
                { label: "Viewports (locked, scaled)", note: "plan 1:100, detail 1:20" },
                { label: "Model space (1:1 geometry)", note: "viewed through viewports" },
                { label: "Layout tab and page setup", note: "A1, plot style civil.ctb" },
              ],
            },
            callout: {
              type: "tip",
              title: "Lock every viewport",
              body: "After setting the viewport scale, lock it with VPLOCK or the padlock icon on the status bar. An unlocked viewport changes scale the moment someone zooms inside it - and the next plot is at 0.83:100 instead of 1:100, with every dimension wrong. Locking is one click and saves a whole plot cycle. The examiner checks the title-block scale against the measured dimensions; an unlocked viewport is the commonest cause of mismatch.",
            },
            keyTerms: [
              { term: "Viewport (MVIEW)", definition: "A paper-space window through which model space is viewed at a chosen scale; its boundary can be hidden." },
              { term: "VPLOCK", definition: "A property that locks the viewport scale, preventing accidental zoom from changing the plotted scale." },
              { term: "Title block", definition: "The paper-space border carrying project, title, scale, number and revision metadata; drawn once in a template." },
            ],
            examQuestions: [
              {
                q: "Explain viewports, viewport scaling and title blocks in AutoCAD. Describe how a viewport is created and scaled, why it must be locked, and the role of the title block in a plotted civil drawing.",
                marks: 7,
                outline: [
                  "Define a viewport as a paper-space window (MVIEW) through which model space is viewed at a chosen scale.",
                  "Explain that double-clicking inside enters model space through the viewport; outside returns to paper space.",
                  "State that the viewport scale is set from the status-bar dropdown and must match the dimension annotative scale.",
                  "Define VPLOCK: prevents accidental zoom from changing the scale; lock every viewport after setting.",
                  "Explain that multiple viewports can show plan at 1:100 and detail at 1:20 on one sheet.",
                  "Define a title block as the paper-space border with project, title, scale, number, revisions; built into the template.",
                  "Conclude that the title-block scale note must match the viewport scale; the examiner cross-checks both.",
                ],
              },
              {
                q: "What does VPLOCK prevent?",
                marks: 2,
              },
              {
                q: "State any four pieces of metadata carried by a civil title block.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Drawing plans, elevations and sections",
            body: [
              "A building plan is the horizontal section through the building at roughly one metre above floor level, showing walls, doors, windows, stairs, rooms and furniture layout. In AutoCAD the plan is drawn in model space at 1:1 real-world scale: wall outlines as closed polylines on A-WALL, door swings as arcs on A-DOOR, window assemblies on A-WIND, dimensions on A-DIMS, room labels as TEXT on A-TEXT. The plan is the primary civil drawing and the one the examiner scrutinises; every wall thickness, opening size and dimension must be consistent with the schedule.",
              "An elevation is the vertical projection of one face of the building, showing floor levels, window heads and sills, roof line, parapet and external finishes. Elevations are drawn by projecting the plan upward: a vertical construction line from each plan corner, the floor levels set as horizontal lines, and the wall outline traced between them. The ELEVATION layers are E-WALL, E-WIND, E-ROOF, E-LEVELS, with floor levels dimensioned as FFL +0.000, +3.000 and so on. The projection method guarantees the elevation is consistent with the plan; an elevation drawn freehand disagrees at the first audit.",
              "A section is the vertical cut through the building showing floor construction, wall cavity, roof structure, foundation and the ground line. The SECTION command family in modern AutoCAD can generate a live section from a 3D model; for 2D work the section is drawn by projecting the cut plane onto the sheet: vertical lines from the cut, horizontal floor lines, and the hatched section fill for cut elements (walls, floors, foundation). Sections are the most informative civil drawing because they reveal the construction that plans and elevations hide. The hatching scale, dimension style and text style must match the plan.",
            ],
            bullets: [
              "Building plan: horizontal section at about 1 m above floor; walls, doors, windows, stairs, rooms at 1:1 model scale.",
              "Plan layers: A-WALL (closed PLINE), A-DOOR (swing arc), A-WIND, A-DIMS, A-TEXT.",
              "Elevation: vertical projection of one face; drawn by projecting plan corners upward with floor level lines.",
              "Section: vertical cut showing floor, wall cavity, roof, foundation; cut elements hatched (ANSI31 or AR-CONC).",
              "Section layers: S-WALL, S-FLR, S-ROOF, S-FND, S-HATCH; floor levels dimensioned FFL +0.000, +3.000.",
            ],
            codeExample: {
              language: "bash",
              caption: "Layer setup and draw order for a building plan",
              code: `Command: LAYER
  A-WALL  -> colour 1, lineweight 0.50 mm
  A-DOOR  -> colour 3, lineweight 0.35 mm
  A-WIND  -> colour 5, lineweight 0.35 mm
  A-DIMS  -> colour 7, lineweight 0.25 mm
  A-TEXT  -> colour 7, lineweight 0.25 mm
  A-HATCH -> colour 8, lineweight 0.13 mm

Command: (set A-WALL current)
Command: PLINE  -> draw closed wall outline
Command: OFFSET -> internal wall faces
Command: (set A-DOOR current) -> ARC for door swing
Command: (set A-DIMS current) -> DIMLINEAR runs`,
            },
            diagram: {
              kind: "flow",
              title: "Plan, elevation, section workflow",
              caption: "Each drawing is projected from the plan to guarantee consistency.",
              steps: [
                { label: "Draw plan (model space 1:1)", note: "walls, doors, windows" },
                { label: "Project plan corners upward", note: "vertical construction lines" },
                { label: "Set floor level lines", note: "FFL +0.000, +3.000" },
                { label: "Trace elevation outline", note: "E-WALL, E-WIND, E-ROOF" },
                { label: "Cut section plane -> hatch cut elements", note: "S-WALL, S-HATCH" },
              ],
            },
            callout: {
              type: "exam",
              title: "Project, don't freehand",
              body: "Elevations and sections must be projected from the plan, not drawn freehand. A vertical construction line from every plan corner, fixed floor-level lines, and the elevation traced between them - that is the only method that guarantees the elevation matches the plan. The examiner audits by measuring a window width in the plan and the same window in the elevation; if they disagree, the elevation was freehand-drawn and the marks drop.",
            },
            keyTerms: [
              { term: "Plan", definition: "The horizontal section through a building at about one metre above floor level, showing walls, openings and rooms." },
              { term: "Elevation", definition: "The vertical projection of one face of a building, drawn by projecting plan corners upward to fixed floor levels." },
              { term: "Section", definition: "The vertical cut through a building showing floor, wall, roof and foundation construction, with cut elements hatched." },
            ],
            examQuestions: [
              {
                q: "Explain how a building plan, elevation and section are prepared in AutoCAD. Describe the layers and the projection method that guarantees the three drawings are mutually consistent.",
                marks: 7,
                outline: [
                  "Define a plan as a horizontal section at about 1 m above floor; drawn at 1:1 in model space with layers A-WALL, A-DOOR, A-WIND.",
                  "Explain that wall outlines are closed polylines; door swings are arcs; windows are assemblies on A-WIND.",
                  "Define an elevation as a vertical projection of one face, drawn by projecting plan corners upward.",
                  "Describe the projection method: vertical construction lines from plan corners, fixed floor-level horizontal lines, trace outline.",
                  "Define a section as a vertical cut showing floor, wall cavity, roof, foundation; cut elements hatched.",
                  "List section layers S-WALL, S-FLR, S-ROOF, S-FND, S-HATCH; floor levels dimensioned FFL +0.000, +3.000.",
                  "Conclude that the projection method guarantees plan-elevation-section consistency; freehand drawing fails the audit.",
                ],
              },
              {
                q: "What does a building plan represent?",
                marks: 2,
              },
              {
                q: "Name any three layers used in an elevation drawing and what each carries.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "3D modelling basics",
            body: [
              "AutoCAD's 3D tools build solids by extruding, revolving, sweeping and lofting 2D profiles. The EXTRUDE command gives a closed 2D profile (a polyline, polygon, circle or region) a height along a path or a typed distance, producing a solid prism or cylinder. REVOLVE sweeps a profile around an axis, producing a column, dome or vessel. SWEEP drives a profile along a path, producing a pipe or duct. LOFT blends two or more profiles, producing a tapered transition. The 3D workspace's Solid tab exposes BOX, CYLINDER, CONE, SPHERE, WEDGE, PYRAMID and TORUS primitives as one-step solids.",
              "Boolean operations combine solids. UNION fuses two or more solids into one; SUBTRACT removes one solid (the cutter) from another (the target); INTERSECT keeps only the shared volume. A wall with a window opening is the classic SUBTRACT: draw the wall as a BOX, the window volume as another BOX, then SUBTRACT the window from the wall. The UNION of a column and a footing forms one foundation solid. The PRESSPULL command in modern AutoCAD extends the Boolean workflow with direct face manipulation, but SUBTRACT remains the lab staple for openings, holes and notches.",
              "Visual styles (VSCURRENT) control how the 3D model renders: 2D Wireframe for editing, Conceptual for shaded presentation, Realistic with materials, Hidden for a hidden-line view that mimics a pen plot. The VIEW command sets standard viewpoints - Top, Front, Right, SW Isometric, SE Isometric - so the model can be inspected from any angle. The SECTIONPLANE object cuts a live section through the solid, useful for showing the inside of a wall or footing. For civil work 3D is reserved for visualisation and conflict checks; the construction drawings remain 2D plans, elevations and sections.",
            ],
            bullets: [
              "EXTRUDE gives a closed 2D profile a height or path; REVOLVE sweeps a profile around an axis; SWEEP drives along a path; LOFT blends profiles.",
              "Solid primitives: BOX, CYLINDER, CONE, SPHERE, WEDGE, PYRAMID, TORUS - one-step solids on the Solid tab.",
              "UNION fuses solids; SUBTRACT removes a cutter from a target (wall minus window); INTERSECT keeps shared volume.",
              "PRESSPULL directly extrudes or subtracts by dragging a face; the modern direct-manipulation companion to Boolean ops.",
              "VSCURRENT styles: 2D Wireframe (edit), Conceptual (shade), Realistic (materials), Hidden (pen-plot look); VIEW sets standard viewpoints.",
            ],
            codeExample: {
              language: "bash",
              caption: "Building a wall with a window opening by Boolean subtract",
              code: `Command: BOX
Specify first corner: 0,0,0
Specify other corner: 5000,3000,200  -> wall solid

Command: BOX
Specify first corner: 1500,0,900
Specify other corner: 2400,3000,2100  -> window cutter

Command: SUBTRACT
Select solids: (pick the wall) -> Enter
Select objects to subtract: (pick the window cutter) -> Enter
  -> wall solid with a window void

Command: VSCURRENT
Enter an option: H  -> Hidden visual style
Command: VIEW -> SE Isometric`,
            },
            diagram: {
              kind: "pyramid",
              title: "3D modelling from primitive to assembled solid",
              caption: "Each tier builds on the one below; Boolean ops cap the pyramid.",
              tiers: [
                { label: "Assembled solid (UNION/SUBTRACT)", note: "wall with window void" },
                { label: "Extruded, revolved, swept profile", note: "from a closed 2D profile" },
                { label: "Closed 2D profile (PLINE, circle)", note: "the source shape" },
                { label: "Solid primitive (BOX, CYLINDER)", note: "one-step solids" },
                { label: "3D workspace and VIEW", note: "edit and inspect" },
              ],
            },
            callout: {
              type: "tip",
              title: "Subtract for openings",
              body: "A wall with a window opening is built as BOX minus BOX: draw the wall solid, draw the window volume as a second box at the window's sill-to-head height, then SUBTRACT the window from the wall. The void is exact and editable - move the window box before subtracting and the void moves. This Boolean subtract is the lab staple for every opening, hole and notch in a civil solid.",
            },
            keyTerms: [
              { term: "EXTRUDE", definition: "A command that gives a closed 2D profile a height along a path or a typed distance, producing a solid prism or cylinder." },
              { term: "SUBTRACT", definition: "A Boolean command that removes one solid (the cutter) from another (the target), used to cut openings." },
              { term: "VSCURRENT", definition: "A command that sets the visual style - 2D Wireframe, Conceptual, Realistic, Hidden - controlling how a 3D model renders." },
            ],
            examQuestions: [
              {
                q: "Explain the 3D modelling basics in AutoCAD. Describe the EXTRUDE, REVOLVE, SWEEP and LOFT commands, the three Boolean operations, and the visual styles used to inspect a civil solid.",
                marks: 7,
                outline: [
                  "Define EXTRUDE: gives a closed 2D profile a height or path distance, producing a prism or cylinder.",
                  "Define REVOLVE: sweeps a profile around an axis; SWEEP: drives a profile along a path; LOFT: blends profiles.",
                  "List the solid primitives: BOX, CYLINDER, CONE, SPHERE, WEDGE, PYRAMID, TORUS.",
                  "Define UNION (fuse), SUBTRACT (remove cutter from target), INTERSECT (keep shared volume).",
                  "Give the civil example: wall as BOX minus window-cutter BOX; column UNION footing.",
                  "Describe VSCURRENT styles: 2D Wireframe for editing, Conceptual for shading, Realistic for materials, Hidden for pen-plot look.",
                  "Mention VIEW for standard viewpoints and SECTIONPLANE for live section cuts through the solid.",
                ],
              },
              {
                q: "Which Boolean operation removes one solid from another?",
                marks: 2,
              },
              {
                q: "Name any four visual styles available with the VSCURRENT command.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Civil drafting case studies",
            body: [
              "The first case study is a residential building plan: a two-bedroom flat of 85 square metres, drawn at 1:50 on A2 paper. The workflow is: set units (mm) and limits (15000 by 12000); create layers A-WALL, A-DOOR, A-WIND, A-DIMS, A-TEXT, A-HATCH; draw the external wall outline as a closed PLINE of 230 mm thickness; offset inward for the internal wall faces; trim the door and window openings; draw the door swings as arcs; dimension the room sizes; hatch the wall sections; add room labels. The plan is plotted from a paper-space layout with one viewport at 1:50, the title block carrying the project name, scale and drawing number.",
              "The second case study is a road cross-section: a two-lane rural road of 7.5 m carriageway with 1.5 m shoulders, drawn at 1:20 on A3 paper. The workflow is: draw the road centre line as a vertical PLINE; offset 3.75 m each way for the lane edges; offset 5.25 m each way for the shoulder edges; draw the camber lines as 2.5 per cent slopes from the crown; hatch the bituminous layers (AR-CONC) and the earth shoulder (EARTH pattern); dimension the lane width, shoulder width and camber; label the layers with MLEADER notes. The section is the input to the bill of quantities for the road's earthwork and pavement.",
              "The third case study is a contour plan: a site of 200 m by 150 m with one-metre contours, drawn at 1:500 on A1 paper. The workflow imports the surveyor's point file (a CSV of Easting, Northing, Elevation); the CREATECONTOUR command (or the Surface tool in Civil 3D) interpolates the contours; the contours are polylines on a C-CONT layer with a 1.0 mm lineweight for the index contours (every fifth) and 0.13 mm for the intermediate. The contour plan is the basis for the site grading, the cut-and-fill volume calculation and the drainage layout - the three inputs the civil engineer needs before any foundation design.",
            ],
            bullets: [
              "Case 1 - residential plan: 85 sq m flat at 1:50 on A2; wall PLINE 230 mm, openings trimmed, door arcs, dimensions, hatching.",
              "Case 2 - road cross-section: 7.5 m carriageway, 1.5 m shoulders at 1:20 on A3; centre line offset, camber 2.5 per cent, hatched layers.",
              "Case 3 - contour plan: 200 by 150 m site at 1:500 on A1; imported survey CSV, CREATECONTOUR, index contours every fifth.",
              "Common workflow: set units and limits, create layers, draw geometry, dimension, hatch, label, plot from a scaled viewport.",
              "Title block carries project, scale and drawing number; the plot scale matches the viewport scale and the annotation scales.",
            ],
            codeExample: {
              language: "bash",
              caption: "Layer setup shared by all three civil case studies",
              code: `Command: LAYER
  A-WALL  -> 1   0.50 mm   (plan walls)
  A-DOOR  -> 3   0.35 mm   (doors and swings)
  A-WIND  -> 5   0.35 mm   (windows)
  A-DIMS  -> 7   0.25 mm   (dimensions)
  A-TEXT  -> 7   0.25 mm   (labels and notes)
  A-HATCH -> 8   0.13 mm   (sections and fills)
  C-CONT  -> 2   0.13-1.0  (contours, index and intermediate)
  C-ROAD  -> 4   0.30 mm   (road edges)

Command: PAGESETUP -> A2-50-CIVIL (plan)
Command: PAGESETUP -> A3-20-CIVIL (road section)
Command: PAGESETUP -> A1-500-CIVIL (contour)`,
            },
            diagram: {
              kind: "cycle",
              title: "The civil drafting cycle",
              caption: "Five stages repeat for every case study; the plot feeds back into the next revision.",
              steps: [
                { label: "Set units, limits, layers" },
                { label: "Draw geometry at 1:1", note: "PLINE, OFFSET, TRIM" },
                { label: "Dimension, hatch, label", note: "annotative styles" },
                { label: "Plot from scaled viewport", note: "title block, CTB" },
                { label: "Audit plot vs schedule", note: "revise and re-plot" },
                { label: "Back to set units", note: "next revision cycle" },
              ],
            },
            callout: {
              type: "exam",
              title: "Plan, section, contour",
              body: "The three case studies cover the civil drafting spectrum: a residential plan (1:50 on A2), a road cross-section (1:20 on A3) and a contour plan (1:500 on A1). For each, the workflow is identical: units, limits, layers, geometry, annotation, plot from a scaled viewport. Memorise the scale-paper-size pairing and the layer set; the examiner asks for the scale and the layer code of every element in the case-study plan.",
            },
            keyTerms: [
              { term: "Residential plan", definition: "A horizontal section through a house at about 1 m above floor, drawn at 1:50 on A2 with wall, door, window and dimension layers." },
              { term: "Road cross-section", definition: "A vertical cut across a road showing carriageway, shoulders, camber and pavement layers, drawn at 1:20 on A3." },
              { term: "Contour plan", definition: "A plan of one-metre interval contours over a site, imported from a survey CSV, drawn at 1:500 on A1 with index and intermediate line weights." },
            ],
            examQuestions: [
              {
                q: "Describe three civil drafting case studies prepared in the AutoCAD lab: a residential building plan, a road cross-section and a contour plan. For each give the scale, paper size, the layer set used and the workflow.",
                marks: 7,
                outline: [
                  "Case 1 residential plan: 85 sq m flat at 1:50 on A2; layers A-WALL, A-DOOR, A-WIND, A-DIMS, A-TEXT, A-HATCH.",
                  "Describe the plan workflow: wall PLINE 230 mm, OFFSET, TRIM openings, arc door swings, dimension, hatch, label.",
                  "Case 2 road cross-section: 7.5 m carriageway, 1.5 m shoulders at 1:20 on A3; centre line, OFFSET, camber 2.5 per cent, hatched layers.",
                  "Describe the section workflow: centre line offset for lane and shoulder edges, camber slopes, AR-CONC and EARTH hatches, MLEADER labels.",
                  "Case 3 contour plan: 200 by 150 m site at 1:500 on A1; imported survey CSV, CREATECONTOUR, index every fifth.",
                  "List the contour layers C-CONT (1.0 mm index, 0.13 mm intermediate) and the use: grading, cut-fill, drainage.",
                  "Conclude that the three case studies share one workflow (units, limits, layers, geometry, annotation, plot) at three scales.",
                ],
              },
              {
                q: "At what scale and on what paper is the residential plan case study plotted?",
                marks: 2,
              },
              {
                q: "Name any three layers and their lineweights used in the road cross-section case study.",
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
      heading: "Exam weightage - where to spend the lab hours",
      body: [
        "RGPV CE-406 lab records and viva typically spread marks across drawing commands, dimensioning, layer management and plotting, with the interface and editing tools supplying the definitional short questions. Allocate lab practice in roughly the same ratio, and keep one full session per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Drawing commands (LINE, PLINE, CIRCLE, ARC, POLYGON, OFFSET, TRIM, FILLET)", weight: "12-16 marks", note: "The lab core; practise a full plan workflow until it is muscle memory." },
        { topic: "Dimensioning and dimension styles (DIMLINEAR, DIMALIGNED, DIMSCALE, annotative)", weight: "10-12 marks", note: "Build CIVIL-50 and CIVIL-100 styles; show DIMSCALE arithmetic on the record." },
        { topic: "Layers and layer properties (visibility, Bylayer, AIA naming)", weight: "8-10 marks", note: "Freeze vs Off, Lock, No Plot table is a guaranteed viva question." },
        { topic: "Plotting, page setup and plot styles (PAGESETUP, CTB, viewports)", weight: "8-10 marks", note: "Produce one A1 PDF at 1:50 with the civil CTB as the lab deliverable." },
        { topic: "Editing commands (MOVE, COPY, ROTATE, MIRROR, SCALE, STRETCH, ARRAY)", weight: "8-10 marks", note: "Mirror plus MIRRTEXT and SCALE Reference calibration are examiner favourites." },
        { topic: "Coordinate systems (absolute, relative, polar, direct distance)", weight: "6-8 marks", note: "Practise a wall chain mixing all three; OSNAP for every pick." },
        { topic: "Text and annotation (STYLE, TEXT, MTEXT, heights per scale)", weight: "6-8 marks", note: "Compute drawing text height = paper height times scale denominator." },
        { topic: "Hatching and tolerances (HATCH, MLEADER, tolerance modes)", weight: "5-7 marks", note: "Hatch scale matching pattern spacing is the common slip." },
        { topic: "3D modelling basics (EXTRUDE, Boolean, visual styles)", weight: "4-6 marks", note: "Wall minus window by SUBTRACT; one isometric view on the record." },
        { topic: "Civil case studies (plan, road section, contour)", weight: "8-10 marks", note: "Three plots at 1:50, 1:20, 1:500; carry the layer set and title block." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week lab schedule",
      body: [
        "Assuming two lab sessions of two hours each per week, this schedule covers every unit of the syllabus twice - once for skill, once for the record - and reserves the final week for full plot submissions.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - interface and setup", tasks: ["Save CE-LAB workspace; UNITS, LIMITS, SNAP, LTSCALE", "Layer set A-WALL to A-TEXT with colour and lineweight", "Absolute, relative, polar coordinate drills (3 wall chains)"] },
        { week: "Week 2", focus: "Unit II - drawing commands", tasks: ["LINE, PLINE, XLINE, RAY; PEDIT Join and Close", "CIRCLE (6 methods) and ARC (3 methods); POLYGON, ELLIPSE", "OFFSET, TRIM, EXTEND, FILLET, CHAMFER on a wall-with-opening"] },
        { week: "Week 3", focus: "Unit III - editing", tasks: ["MOVE, COPY (Multiple), ROTATE (Reference) on a door layout", "MIRROR (MIRRTEXT 0), SCALE (Reference calibration)", "STRETCH (crossing window), ARRAY (rect, polar, path), grips"] },
        { week: "Week 4", focus: "Unit IV - annotation and dimensioning", tasks: ["Text styles and TEXT vs MTEXT; heights per plot scale", "DIMSTYLE CIVIL-50 and CIVIL-100; DIMLINEAR, DIMALIGNED, DIMANGULAR", "DIMDIAMETER, MLEADER, HATCH; annotative scales"] },
        { week: "Week 5", focus: "Unit V - plotting", tasks: ["PAGESETUP A1-50-CIVIL with civil.ctb; DWG to PDF", "MVIEW viewports, VPLOCK, title block with attributes", "Plans, elevation, section; 3D EXTRUDE and SUBTRACT basics"] },
        { week: "Week 6", focus: "Case studies and submission", tasks: ["Residential plan 1:50 on A2", "Road cross-section 1:20 on A3; contour plan 1:500 on A1", "Final record compilation, plot audit, viva rehearsal"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Print all record drawings at their plot scales the day before; a failed plot is the commonest submission slip.",
        "Re-check DIMSCALE and viewport locks on every layout; one unlocked viewport ruins the scale.",
        "Verify text heights against the plot scale on one sample dimension per sheet (paper height times scale denominator).",
        "Run a PURGE and AUDIT on each drawing to drop unused layers and fix minor geometry errors.",
        "Carry the civil.ctb file and the A1, A2, A3 page setups on a USB; do not assume the lab plotter has them.",
        "Re-read the three case-study layer sets aloud; the viva panel asks for the layer code of every element.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Begin every drawing with UNITS, LIMITS, ZOOM All and the layer set - the setup is marked even if the geometry slips later.",
        "Drive every command from the keyboard at least once; the viva panel rewards keyboard fluency over ribbon clicks.",
        "Snap every base point: endpoint, midpoint, insertion - a free cursor pick is the source of most dimension errors.",
        "Match the dimension DIMSCALE to the plot scale; one CIVIL-50 and one CIVIL-100 style covers most lab plots.",
        "Time-box: 20 minutes for the residential plan, 15 for the road section, 10 for the dimensioning; reserve 10 for the plot.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Setting LIMITS before UNITS - the sheet stays in inches though the drafter believes it is millimetres.",
        "Forgetting MIRRTEXT = 0 before mirroring an annotated plan - room labels come out reversed and illegible.",
        "Using DIMLINEAR on an angled wall - the dimension reads the projection, shorter than the true length.",
        "Leaving a viewport unlocked - an accidental zoom changes the scale and every dimension plots wrong.",
        "Hatch scale too large (isolated dots) or too small (solid fill) - match the pattern spacing to the plot scale.",
        "Exploding a polyline or dimension to edit one part - the area query and dimension associativity are lost.",
      ],
    },
  ],
};
