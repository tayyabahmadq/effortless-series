/**
 * Academics - RGPV Civil Engineering 3rd-semester subject: CE-303 Surveying.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections (5 units x 5 sections = 25).  Each section carries
 * three body paragraphs, five bullets, a diagram, a callout, a table or
 * python/text code sample, three key terms, and three exam-style questions
 * (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce303: AcademicSubject = {
  id: "ce-303",
  code: "CE-303",
  title: "Surveying",
  semester: "III Semester",
  program: "RGPV \u00b7 Civil Engineering",
  tagline:
    "The complete visual guide to surveying for civil engineering: chain and compass methods, levelling and contouring, the theodolite and tacheometry, and the modern EDM, total station, GPS, remote sensing and GIS toolkit.",
  description:
    "Five units walk from the definition, classification and principles of surveying through chain instruments, ranging and offsets, into compass bearings, local attraction and traverse adjustment, then across levelling definitions, dumpy and auto levels, RL calculation by HI and rise-fall, and contouring, on to the theodolite's components and angular measurement plus tacheometric and stadia formulae, and finally into EDM, total stations, GNSS, remote sensing, GIS and the digital terrain model. Every section pairs theory with a redrawable diagram, a worked table or python snippet, and the exam questions RGPV actually asks.",
  accentColor: "#3b82f6",
  emoji: "SV",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction and Chain Surveying",
      summary:
        "The substrate of the whole subject: definition and classification of surveying, the two governing principles, chain survey instruments, ranging and offsets, and the errors that creep into linear measurement.",
      chapter: {
        number: "01",
        title: "Introduction and Chain Surveying",
        intro:
          "Unit I builds the vocabulary every later unit borrows: what surveying is and how it is classified by area, purpose and instrument; the two principles of working from whole to part and fixing a point by two independent references; the chain, tape and accessories used for purely linear work; ranging a long line and taking offsets; and the instrumental, natural and personal errors that corrupt the measured length.",
        inOneBreath:
          "Surveying fixes relative positions by measuring distance, direction and elevation; plane surveying ignores curvature over small areas while geodetic surveying respects the spheroid; classification by purpose yields topographical, cadastral, engineering, mine and hydrographic branches, and by instrument yields chain, compass, levelling, theodolite, tacheometry and modern electronic methods; the two principles are working from whole to part and locating a point by two independent quantities; a chain is 20 or 30 metres of tempered steel links with brass tallies every five or ten metres; ranging aligns a long line by direct or reciprocal methods; offsets are perpendicular or oblique lateral measurements kept under fifteen and twenty metres; and errors divide into mistakes, systematic errors and accidental errors corrected by standard, temperature, pull, sag and slope corrections.",
        sections: [
          {
            number: "1.1",
            title: "Definition and classification of surveying",
            body: [
              "Surveying is the art and science of determining the relative positions of points on, above, or below the earth's surface by direct or indirect measurement of distances, directions and elevations. Its two-fold purpose is to collect data for drawing a plan or map at a reduced scale and to lay out engineering works on the ground from such plans. Plane surveying treats the measured area as a flat horizontal plane: plumb lines are taken as parallel, angles are plane angles, and the curvature of the earth is ignored for areas up to roughly two hundred and fifty square kilometres. Geodetic surveying accounts for the spheroidal earth and is used for national control networks.",
              "By purpose, the field splits into several named branches. Topographical surveys plot natural and cultural features - rivers, roads, buildings and contours - to produce general-purpose maps. Cadastral surveys establish and mark property boundaries for land records, registration and taxation. Engineering surveys serve construction: reconnaissance and route surveys for roads and canals, setting-out surveys to mark foundations, alignments and gradients, and as-built surveys to verify finished work against design. Mine surveys map surface and underground workings under tight space constraints. Hydrographic surveys chart riverbeds, lake floors and harbours, with soundings replacing the tape.",
              "Classification by instrument names the methods a student must master in sequence. Chain surveying measures only lengths and suits small, open, flat sites. Compass surveying adds magnetic bearings for directional control. Levelling measures height differences to set gradients and contours. Theodolite surveying captures precise horizontal and vertical angles for control networks. Tacheometry derives both distance and elevation from angular stadia readings, removing the need for taping over rough ground. Plane table surveying plots detail in the field. Modern methods - electronic distance measurement, total stations, GNSS, photogrammetry and lidar - combine electronic ranging, computing and imaging for speed and accuracy. Each method has a zone of economy, and choosing it is itself an examinable decision.",
            ],
            bullets: [
              "Surveying fixes relative positions by measuring distance, direction and elevation; output is a plan, map or coordinate set.",
              "Plane surveying ignores earth curvature for areas up to about 250 sq km; geodetic surveying respects the spheroid for control networks.",
              "By purpose: topographical, cadastral, engineering (route, setting-out, as-built), mine and hydrographic branches.",
              "By instrument: chain, compass, levelling, theodolite, tacheometry, plane table, and modern EDM/total-station/GNSS methods.",
              "Choosing the method is itself examinable: chain for small sites, theodolite for control, GNSS for speed over rough terrain.",
            ],
            table: {
              caption: "Plane vs geodetic and by-purpose classification of surveying.",
              headers: ["Axis", "Plane", "Geodetic"],
              rows: [
                ["Area limit", "up to 250 sq km", "unlimited / national"],
                ["Curvature", "ignored", "accounted for"],
                ["Plumb lines", "parallel", "convergent at centre"],
                ["Instruments", "chain, compass, level", "precise theodolite, GNSS"],
                ["Typical use", "engineering site", "national mapping control"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How a survey project flows from brief to map",
              caption:
                "Each stage feeds the next - skipping reconnaissance or control ruins the detail survey.",
              steps: [
                { label: "Brief and reconnaissance", note: "scope, accuracy, method chosen" },
                { label: "Establish control", note: "primary framework first" },
                { label: "Detail survey", note: "fill in from control" },
                { label: "Plot and compute", note: "map and coordinates" },
                { label: "Setting-out", note: "mark design on ground" },
              ],
            },
            callout: {
              type: "exam",
              title: "Define then classify",
              body: "RGPV almost always opens with 'define surveying and classify it'. Give the definition verbatim, then split by area (plane vs geodetic), by purpose (topographical, cadastral, engineering, mine, hydrographic) and by instrument (chain, compass, levelling, theodolite, tacheometry, modern). Three axes of classification earn full marks.",
            },
            keyTerms: [
              { term: "Plane surveying", definition: "Surveying in which the measured area is treated as a flat horizontal plane, ignoring earth curvature, suitable for areas up to about 250 square kilometres." },
              { term: "Geodetic surveying", definition: "Surveying that accounts for the spheroidal shape of the earth, used for large-area and national control networks." },
              { term: "Cadastral survey", definition: "A survey that establishes and marks property boundaries for land records, registration and taxation." },
            ],
            examQuestions: [
              {
                q: "Define surveying. Classify it on the basis of area, purpose and instrument, with one example of each branch.",
                marks: 7,
                outline: [
                  "Define surveying as the art and science of determining relative positions of points by measuring distance, direction and elevation.",
                  "Classify by area: plane surveying (curvature ignored, up to 250 sq km) vs geodetic surveying (spheroid respected, national control).",
                  "Classify by purpose: topographical (general maps), cadastral (property), engineering (route/setting-out/as-built), mine, hydrographic.",
                  "Classify by instrument: chain, compass, levelling, theodolite, tacheometry, plane table, modern (EDM/total-station/GNSS).",
                  "Give one example each - e.g. cadastral for a farm boundary, route survey for a highway alignment, GNSS for state control.",
                  "State the two-fold purpose: data collection for plans/maps, and laying out engineering works on the ground.",
                  "Conclude that the chosen classification guides the instrument, accuracy and method for the job.",
                ],
              },
              {
                q: "Distinguish between plane surveying and geodetic surveying.",
                marks: 2,
              },
              {
                q: "List any three branches of surveying based on purpose with one use each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Principles of surveying",
            body: [
              "Surveying rests on two governing principles that discipline every method, from a chain traverse to a GNSS network. The first is to work from the whole to the part: establish a primary framework of widely spaced control points with high precision, then fix secondary and detail points inside that framework by less precise work. Any error in the detail is then confined to the local figure and cannot accumulate across the whole survey. Reversing the order - building the whole from measured details - lets every small error compound and ruins the map.",
              "The second principle is to fix the position of a new point by two independent measurements from known reference points. A point may be located by two distances (trilateration), by two angles from a known baseline (triangulation), by one distance and one angle, or by an offset and a tie line. The two measurements must be genuinely independent - both derived from the same corrupted reading would propagate the same error. Where economics allow, a third (redundant) measurement is taken so that a misclosure reveals which of the three is wrong.",
              "Working from whole to part is implemented by control surveying followed by detail surveying. The control may be a triangulation chain, a traverse loop, or a GNSS network; once its coordinates are adjusted and accepted, the detail - buildings, fence lines, culverts - is filled in by radiation, offset or intersection from the control stations. The principle of two independent references is implemented every time a point is fixed: a chain survey point sits at the intersection of two measured arcs; a levelling station is fixed by a back sight and a fore sight; a theodolite point by two angle observations. Both principles are the unstated justification of every later unit.",
            ],
            bullets: [
              "Principle 1 - work from whole to part: establish precise control first, then fill in detail; errors stay local.",
              "Principle 2 - locate a point by two independent measurements from known references.",
              "Combinations: two distances (trilateration), two angles (triangulation), one distance and one angle, or offset plus tie.",
              "A third redundant measurement reveals misclosure and protects against a single gross error.",
              "Control survey (triangulation/traverse/GNSS) precedes detail survey (radiation/offset/intersection) in practice.",
            ],
            table: {
              caption: "Locating a point by two independent references.",
              headers: ["Pair of measurements", "Method", "Example use"],
              rows: [
                ["two distances", "trilateration", "chain intersection arcs"],
                ["two angles", "triangulation", "theodolite from baseline ends"],
                ["distance + angle", "polar/radiation", "total-station radiation"],
                ["offset + tie line", "chain offset", "building detail"],
                ["back sight + fore sight", "levelling", "RL transfer"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Whole-to-part: control at the top, detail at the base",
              caption:
                "Fewer, more precise control points sit above many, less precise detail points.",
              tiers: [
                { label: "Primary control", note: "triangulation / GNSS, highest precision" },
                { label: "Secondary control", note: "traverse loops" },
                { label: "Detail survey", note: "offsets and radiation, many points" },
                { label: "Plot and setting-out", note: "map and ground marking" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always cite both principles",
              body: "A 'state the principles of surveying' question earns full marks only if both working-from-whole-to-part and locating-by-two-independent-references are stated, with a one-line reason for each. Add a sketch of a triangulation chain feeding a traverse feeding offsets to seal the seven marks.",
            },
            keyTerms: [
              { term: "Working from whole to part", definition: "The principle of establishing a precise overall control framework before measuring details, so errors remain local and do not accumulate." },
              { term: "Triangulation", definition: "Fixing a point by measuring two angles from the ends of a known baseline, using the sine rule to compute distances." },
              { term: "Control survey", definition: "A high-precision survey that establishes the positions of widely spaced reference points to which subsequent detail work is tied." },
            ],
            examQuestions: [
              {
                q: "State the two fundamental principles of surveying. Explain 'working from whole to part' with a sketch and show how the second principle is applied in chain and compass surveying.",
                marks: 7,
                outline: [
                  "Principle 1: work from whole to part - establish control first, fill detail later.",
                  "Reason: confines errors to local figures, prevents accumulation across the survey.",
                  "Principle 2: locate a point by two independent measurements from known references.",
                  "Sketch a triangulation chain feeding a traverse loop feeding offsets - the pyramid of precision.",
                  "In chain surveying a point is fixed by intersection of two measured arcs from two stations.",
                  "In compass surveying a line is fixed by a measured bearing plus a measured length.",
                  "Conclude that a redundant third measurement reveals misclosure and guards against gross error.",
                ],
              },
              {
                q: "Why is it preferable to work from whole to part rather than part to whole?",
                marks: 2,
              },
              {
                q: "Name three pairs of measurements that can locate a point and the method each pair defines.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Chain survey instruments",
            body: [
              "The chain is the oldest linear instrument still examined. The metric surveying chain is made of galvanised mild-steel wire links, sixteen swaged joints per metre, and is supplied in 20-metre and 30-metre lengths. Each metre is marked by a brass tally shaped differently so it can be read by touch: a one-metre tally has one tooth, a five-metre tally is round, and a ten-metre tally is triangular. Brass handles at each end form the exact endpoints of the nominal length, and the chain is wound into a bundle for transport. A Gunter's chain of 66 feet and an engineer's chain of 100 feet survive in older records.",
              "Tapes complement the chain where precision matters. A linen or metallic tape suits short offsets and chainage; a steel tape (or band) gives higher precision for baseline work; an invar tape, with its tiny coefficient of expansion, is reserved for geodetic baselines. Arrows are ten thin steel skewers, one metre long, used to count chain lengths laid on the ground; a ranging rod is a 2 or 3 metre wooden or fibreglass pole, painted in alternate red and white bands, used to align a line; wooden pegs mark stations; a ranging rod with a flag marks the line of sight over long distances. A line ranger with two mirrors or a plumb bob is used for direct ranging.",
              "Accessories make chain surveying practical. A plumb bob transfers the endpoint of a suspended tape to the ground for true horizontal distance. A cross-staff or optical square sets out a perpendicular to the chain line at the offset point - the optical square uses two mirrors at 45 degrees to deviate the line of sight by a right angle. A clinometer measures slope so that a measured slope distance can be corrected to horizontal. A measuring staff or leveling staff supports the level work that accompanies the chain survey. Each accessory has a narrow job; knowing when to deploy each one is part of the field craft the examiner tests through short questions.",
            ],
            bullets: [
              "Metric chain: 20 m or 30 m of mild-steel links with brass tallies at 1, 5 and 10 m.",
              "Tapes: linen/metallic for offsets, steel for baselines, invar for geodetic work.",
              "Arrows: ten steel skewers used to count chain lengths laid on the ground.",
              "Ranging rods: 2-3 m red-and-white poles for line alignment; pegs mark stations.",
              "Accessories: plumb bob (true horizontal), optical square (90 degree offset), clinometer (slope correction).",
            ],
            table: {
              caption: "Chain survey instruments and their field use.",
              headers: ["Instrument", "Length / form", "Use"],
              rows: [
                ["Metric chain", "20 m / 30 m steel links", "primary linear measurement"],
                ["Steel tape", "10-50 m band", "precise short distances, offsets"],
                ["Arrows", "1 m steel skewer x10", "count chain lengths"],
                ["Ranging rod", "2-3 m red/white pole", "align the chain line"],
                ["Optical square", "two 45-degree mirrors", "set perpendicular offsets"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Layers of chain survey equipment",
              caption:
                "From the field crew at the top down to the ground accessories at the bottom.",
              layers: [
                { label: "Surveyor and chainman", note: "directs, books readings" },
                { label: "Chain and tape", note: "primary measurement" },
                { label: "Ranging rods and arrows", note: "alignment and counting" },
                { label: "Pegs and accessories", note: "mark stations, plumb, square" },
              ],
            },
            callout: {
              type: "exam",
              title: "Know the tally system",
              body: "A common 2-mark question asks how the metric chain is graduated. Answer: by brass tallies at every one metre, with distinct shapes (one-tooth, round, triangular) at 1 m, 5 m and 10 m so the chainman can read the length by touch in poor light. Stating the shapes earns both marks.",
            },
            keyTerms: [
              { term: "Metric chain", definition: "A 20 m or 30 m surveying chain of galvanised mild-steel links with brass tallies marking every metre." },
              { term: "Ranging rod", definition: "A 2 or 3 metre wooden or fibreglass pole painted in alternate red and white bands used to align a survey line." },
              { term: "Optical square", definition: "A small hand instrument using two mirrors at 45 degrees to set out a perpendicular offset from the chain line." },
            ],
            examQuestions: [
              {
                q: "Describe the metric surveying chain and its accessories. State how the chain is graduated and list the uses of ranging rods, arrows and the optical square.",
                marks: 7,
                outline: [
                  "Describe the metric chain: 20 m or 30 m, galvanised mild-steel links, brass handles.",
                  "Graduation: brass tallies at every metre, with one-tooth at 1 m, round at 5 m, triangular at 10 m, readable by touch.",
                  "Ranging rods: 2-3 m red/white poles used to align the chain line and mark stations.",
                  "Arrows: ten 1 m steel skewers used to count chain lengths laid on the ground.",
                  "Optical square: two 45-degree mirrors set out a perpendicular offset at the detail point.",
                  "Mention tapes (linen/steel/invar) and the plumb bob for true horizontal transfer.",
                  "Conclude that the accessories exist to control alignment, perpendicularity and endpoint transfer.",
                ],
              },
              {
                q: "How is the metric chain graduated?",
                marks: 2,
              },
              {
                q: "State the use of the plumb bob, clinometer and optical square in chain surveying.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Ranging and offsets",
            body: [
              "Ranging is the process of keeping a chain line truly straight between its endpoints by placing intermediate ranging rods exactly on the straight line. A chain is only twenty or thirty metres long, so any survey line longer than one chain length must be ranged before chaining proceeds in segments. Direct ranging is used when the two endpoints are intervisible: the surveyor stands behind the ranging rod at one end, sights the rod at the far end, and signals a chainman to move an intermediate rod left or right until it is bisected by the line of sight. Two or more intermediate rods are set in this way.",
              "When the endpoints are not intervisible - because of a hillock, a building or a curve in the ground - indirect or reciprocal ranging is used. Two chainmen station themselves on high ground on either side of the obstruction, each with a ranging rod, roughly in line with the two endpoints. The first chainman signals the second to move until the second is exactly in line with the far endpoint as seen from the first; the second then signals the first to move until the first is in line with the other endpoint. The two correct each other alternately until both are simultaneously in line, which places both rods exactly on the true straight line.",
              "Offsets are lateral measurements from the chain line to the detail being plotted - the corner of a building, a fence bend, a tree. A perpendicular offset is measured at right angles to the chain line using an optical square, cross-staff or tape-and-chain 3-4-5 method; an oblique offset is a direct tie from a chainage point to the detail, used where a perpendicular cannot be set out. To control plotting error, RGPV recommends keeping perpendicular offsets under fifteen metres and oblique offsets under twenty metres. Longer offsets should be taken from a sub-line or by a separate short traverse. The chainage of every offset point is recorded in the field book along with the offset length and direction.",
            ],
            bullets: [
              "Ranging aligns intermediate rods on the straight chain line - needed when the line exceeds one chain length.",
              "Direct ranging: endpoints intervisible; surveyor sights and signals an intermediate rod into line.",
              "Reciprocal ranging: endpoints not intervisible; two chainmen alternately correct each other to the line.",
              "Perpendicular offset: 90 degrees to the chain line via optical square; keep under 15 m.",
              "Oblique offset: direct tie from chainage point; keep under 20 m; record chainage, length and direction.",
            ],
            table: {
              caption: "Direct vs reciprocal ranging and offset limits.",
              headers: ["Aspect", "Direct ranging", "Reciprocal ranging"],
              rows: [
                ["Endpoints", "intervisible", "not intervisible"],
                ["Personnel", "surveyor + 1 chainman", "2 chainmen + surveyor"],
                ["Method", "sight and signal", "mutual correction"],
                ["Cause", "open ground", "hillock, building, curve"],
                ["Offset limit (perp)", "15 m", "15 m"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Ranging a long line then taking offsets",
              caption:
                "Range first, chain in segments, then book offsets at each detail point.",
              steps: [
                { label: "Mark endpoints with rods", note: "station pegs in" },
                { label: "Range intermediate rods", note: "direct or reciprocal" },
                { label: "Chain segment by segment", note: "use arrows to count" },
                { label: "Take offsets to detail", note: "perpendicular or oblique" },
                { label: "Book chainage + offset", note: "field book entry" },
              ],
            },
            callout: {
              type: "tip",
              title: "Book the chainage and offset together",
              body: "Field-book errors cluster at the offset stage. Always record the chainage (distance along the line) and the offset length and side in the same entry, and sketch the detail opposite the entry. A chainage without an offset, or an offset without a chainage, is unplotable and a frequent cause of resurvey.",
            },
            keyTerms: [
              { term: "Ranging", definition: "The process of placing intermediate ranging rods exactly on the straight line between two endpoints so that a chain longer than one chain length can be measured in segments." },
              { term: "Perpendicular offset", definition: "A lateral measurement from the chain line to a detail point taken at right angles, normally kept under fifteen metres." },
              { term: "Oblique offset", definition: "A direct tie from a chainage point on the chain line to a detail point, used where a perpendicular cannot be set out, normally kept under twenty metres." },
            ],
            examQuestions: [
              {
                q: "What is ranging? Distinguish between direct and reciprocal ranging with sketches, and state the recommended limits for perpendicular and oblique offsets.",
                marks: 7,
                outline: [
                  "Define ranging: placing intermediate ranging rods on the straight line between two endpoints.",
                  "Direct ranging: endpoints intervisible; surveyor sights far rod and signals an intermediate rod into line.",
                  "Sketch direct ranging - two end rods, one intermediate rod bisected by the line of sight.",
                  "Reciprocal ranging: endpoints not intervisible; two chainmen alternately correct each other.",
                  "Sketch reciprocal ranging around a hillock, with the two chainmen converging to the true line.",
                  "Offset limits: perpendicular under 15 m, oblique under 20 m, to control plotting error.",
                  "Conclude that offsets longer than the limits should be taken from a sub-line or short traverse.",
                ],
              },
              {
                q: "State the limit for a perpendicular offset in chain surveying.",
                marks: 2,
              },
              {
                q: "Describe the procedure of reciprocal ranging with a neat sketch.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Errors in chain surveying and their corrections",
            body: [
              "Errors in chain surveying divide into three classes with very different remedies. Mistakes are blunders - booking 36 instead of 63, miscounting arrows, omitting a chain length - that are caught by repeat measurement and have no systematic sign. Systematic errors are those that follow a law and accumulate in one direction: a chain that is too long makes every measured distance too short by a fixed proportion, and a slope uncorrected always overstates the horizontal distance. Accidental or compensating errors are small, random and of either sign; they partly cancel but limit the precision of any single measurement.",
              "The chief sources are instrumental, natural and personal. Instrumental: the chain's nominal length differs from its true length because of manufacture or wear, the tape is kinked, the clinometer is out of adjustment. Natural: temperature above or below the standard pulls the steel chain longer or shorter, the wind bows the chain laterally, sag shortens the effective horizontal projection when the chain is suspended, and the slope of the ground means the measured slope distance exceeds the true horizontal distance. Personal: the chainman pulls with uneven force, sets the ranging rod off-line, or misreads a tally. Each source has a named correction with its own sign convention.",
              "The five named corrections are applied to the measured length to obtain the true length. The standardisation correction accounts for a chain whose true length differs from nominal: correction equals measured length times (true length minus nominal) over nominal. The temperature correction is alpha times L times (T minus T-standard), positive when the chain is hot and longer than standard. The pull correction uses (P minus P-standard) times L over (A times E). The sag correction, always negative, is minus W squared L over (24 P squared) per span. The slope correction reduces a slope distance to horizontal: minus L times (one minus cosine of the slope angle), or approximately minus h squared over (2 L) for small slopes where h is the rise. Correcting a baseline means adding or subtracting each in turn with its correct sign.",
            ],
            bullets: [
              "Three classes: mistakes (blunders), systematic (one-directional, lawed), accidental (random, compensating).",
              "Sources: instrumental (chain length/tape kink), natural (temperature, sag, wind, slope), personal (pull, alignment, misread).",
              "Standardisation correction: measured L x (true L - nominal) / nominal.",
              "Temperature correction: alpha x L x (T - T0); sag correction: -W^2 L / (24 P^2) per span.",
              "Slope correction: -L(1 - cos theta) or, for small slopes, -h^2 / (2 L).",
            ],
            table: {
              caption: "Corrections applied to a measured chain length.",
              headers: ["Correction", "Formula", "Sign"],
              rows: [
                ["Standardisation", "L (Lt - Ln) / Ln", "+ if Lt > Ln"],
                ["Temperature", "alpha L (T - T0)", "+ if T > T0"],
                ["Pull", "(P - P0) L / (A E)", "+ if P > P0"],
                ["Sag", "-W^2 L / (24 P^2)", "always negative"],
                ["Slope", "-L (1 - cos theta)", "always negative"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Classifying a chain error - which remedy follows?",
              caption:
                "Each branch leads to a different field or office remedy.",
              start: "Observed discrepancy",
              branches: [
                { label: "Mistake (blunder)", outcome: "repeat the measurement", good: true },
                { label: "Systematic (one-signed)", outcome: "apply the named correction", good: true },
                { label: "Accidental (random)", outcome: "average several readings", good: true },
                { label: "Instrumental fault", outcome: "calibrate or replace the chain", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Mind the sign of each correction",
              body: "A corrected baseline loses half its marks if a sign is flipped. Rule of thumb: a hot chain is longer than standard so the measured length is too short - add a positive temperature correction; a suspended chain sags so the effective length is shorter - subtract a negative sag correction; a slope distance always exceeds the horizontal - subtract the slope correction. Write each sign explicitly in the answer.",
            },
            keyTerms: [
              { term: "Systematic error", definition: "An error that follows a definite physical law and accumulates in one direction, correctable by applying a named correction." },
              { term: "Sag correction", definition: "The always-negative correction applied to a suspended chain or tape to account for the bowing of the line under its own weight, equal to minus W squared L over twenty-four P squared per span." },
              { term: "Slope correction", definition: "The correction that reduces a measured slope distance to its horizontal equivalent, equal to minus L times one minus cosine of the slope angle." },
            ],
            examQuestions: [
              {
                q: "Classify the errors in chain surveying. State the sources and derive the expressions for temperature, pull, sag and slope corrections with their sign conventions.",
                marks: 7,
                outline: [
                  "Classify errors: mistakes (blunders), systematic (lawed, one-signed), accidental (random, compensating).",
                  "Sources: instrumental (chain length, tape kink), natural (temperature, sag, wind, slope), personal (pull, alignment).",
                  "Temperature correction: alpha L (T - T0), positive when the chain is hotter than standard and therefore longer.",
                  "Pull correction: (P - P0) L / (A E), positive when the applied pull exceeds the standard pull.",
                  "Sag correction: -W^2 L / (24 P^2) per span, always negative because sag shortens the effective horizontal length.",
                  "Slope correction: -L (1 - cos theta) or -h^2 / (2 L) for small slopes, always negative as the slope distance exceeds the horizontal.",
                  "Conclude that each correction is added algebraically to the measured length with its proper sign to get the true length.",
                ],
              },
              {
                q: "Distinguish between a systematic error and an accidental error.",
                marks: 2,
              },
              {
                q: "A 30 m chain is found to be 30.03 m long. What correction is applied to a measured length of 240 m?",
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
      title: "Compass Surveying",
      summary:
        "Angular control enters with the compass: whole-circle and reduced bearings, fore and back bearings, local attraction and its detection, traversing, the closing error and its adjustment, and the instrument and declination corrections.",
      chapter: {
        number: "02",
        title: "Compass Surveying",
        intro:
          "Unit II adds magnetic direction to the linear distances of Unit I. The compass gives the bearing of a line; whole-circle and reduced bearings describe the same direction in two systems; fore and back bearings expose local attraction; an open or closed traverse strings bearings and distances into a controlled framework; the closing error and its Bowditch or transit adjustment reconcile the measured traverse with itself; and the prismatic and surveyor's compasses plus magnetic declination complete the toolkit.",
        inOneBreath:
          "A bearing is the horizontal angle between a reference meridian and the surveyed line, measured clockwise; the whole-circle bearing runs 0 to 360 degrees from north while the reduced bearing is the acute angle 0 to 90 degrees in a named quadrant, the two being interconvertible by quadrant rules; the fore bearing plus 180 degrees gives the back bearing of a straight line unaffected by local attraction; local attraction is the disturbance of the magnetic needle by iron, power lines or ore, detected when fore and back bearings differ from 180 by more than the permissible observational error; a traverse is a series of connected lines, open or closed, surveyed by chain and compass or by theodolite; the closing error of a closed traverse is the vector sum of the latitude and departure misclosures, expressed as e = sqrt(sum L squared plus sum D squared) and judged by the ratio 1 over N; the Bowditch rule adjusts the latitudes and departures in proportion to the line lengths while the transit rule adjusts in proportion to their measured values; and the prismatic compass reads 0 to 360 with the sighting and reading at the same eye while the surveyor's compass reads 0 to 90 in two quadrants, the two together exposing magnetic declination - the angle between true and magnetic north.",
        sections: [
          {
            number: "2.1",
            title: "Bearings - WCB and RB, fore and back",
            body: [
              "A bearing is the horizontal angle between a fixed reference meridian and the surveyed line, measured clockwise from the meridian. The whole-circle bearing (WCB) uses the north line as reference and varies from 0 to 360 degrees, measured clockwise: a line due east has a WCB of 90 degrees, due south 180, due west 270. The reduced bearing (RB), also called the quadrantal bearing, splits the circle into four quadrants and reports an acute angle from 0 to 90 degrees prefixed by the quadrant letters N or S and suffixed by E or W: a line in the south-east quadrant at 60 degrees from south is written S 60 E. The two systems describe the same direction and interconvert by simple quadrant rules.",
              "Conversion between WCB and RB follows the quadrant of the WCB. If the WCB lies between 0 and 90 (north-east), the RB equals the WCB, written N (WCB) E. Between 90 and 180 (south-east), the RB equals 180 minus the WCB, written S (180 - WCB) E. Between 180 and 270 (south-west), the RB equals the WCB minus 180, written S (WCB - 180) W. Between 270 and 360 (north-west), the RB equals 360 minus the WCB, written N (360 - WCB) W. A worked example: a WCB of 210 degrees is in the third quadrant, so the RB is S 30 W.",
              "Every line has a fore bearing (FB) observed from one station to the next, and a back bearing (BB) observed from the next station looking back. For a straight line unaffected by local attraction, the back bearing equals the fore bearing plus or minus 180 degrees - plus if the FB is less than 180, minus if greater. A fore bearing of 70 degrees has a back bearing of 250 degrees; a fore bearing of 250 has a back bearing of 70. The 180-degree relationship is the diagnostic for local attraction in the next section, and the ability to convert between WCB, RB and the fore/back pair is the foundation of every traverse computation.",
            ],
            bullets: [
              "Bearing: horizontal clockwise angle from a reference meridian to the surveyed line.",
              "WCB: 0 to 360 degrees from north; RB: 0 to 90 degrees in a named quadrant (e.g. S 30 W).",
              "Quadrant rules: NE - RB = WCB; SE - RB = 180 - WCB; SW - RB = WCB - 180; NW - RB = 360 - WCB.",
              "Fore bearing observed forward; back bearing observed backward; BB = FB +/- 180 for a clean line.",
              "A WCB of 210 degrees is S 30 W; a WCB of 70 degrees has BB of 250 degrees.",
            ],
            table: {
              caption: "WCB to RB conversion in the four quadrants.",
              headers: ["WCB range", "Quadrant", "RB formula", "Example"],
              rows: [
                ["0-90", "NE", "RB = WCB", "40 -> N 40 E"],
                ["90-180", "SE", "RB = 180 - WCB", "130 -> S 50 E"],
                ["180-270", "SW", "RB = WCB - 180", "210 -> S 30 W"],
                ["270-360", "NW", "RB = 360 - WCB", "300 -> N 60 W"],
                ["any", "FB/BB", "BB = FB +/- 180", "70 -> 250"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "WCB vs RB: same direction, two notations",
              caption:
                "The whole-circle bearing sweeps 0-360 clockwise; the reduced bearing stays acute in a named quadrant.",
              left: {
                heading: "Whole-circle bearing (WCB)",
                items: [
                  "Reference: north line only",
                  "Range: 0 to 360 degrees clockwise",
                  "Notation: a single number, e.g. 210",
                  "Prismatic compass reads WCB directly",
                  "Easier in traverse summing",
                ],
              },
              right: {
                heading: "Reduced bearing (RB)",
                items: [
                  "Reference: north or south, whichever nearer",
                  "Range: 0 to 90 degrees in a quadrant",
                  "Notation: quadrant plus angle, e.g. S 30 W",
                  "Surveyor's compass reads RB directly",
                  "Easier in plane-table and plotting",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Memorise the quadrant rules",
              body: "A 7-mark bearing question almost always includes a WCB-to-RB and an RB-to-WCB conversion. Write the four quadrant rules (NE: equal; SE: 180 minus; SW: WCB minus 180; NW: 360 minus) on the answer sheet first, then substitute. A rule stated once earns a method mark that protects the rest of the computation.",
            },
            keyTerms: [
              { term: "Whole-circle bearing", definition: "The clockwise angle from 0 to 360 degrees measured from the north meridian to the surveyed line." },
              { term: "Reduced bearing", definition: "The acute angle from 0 to 90 degrees between the surveyed line and the nearer of the north or south meridian, written with a quadrant letter such as S 30 W." },
              { term: "Back bearing", definition: "The bearing observed looking back along a line from the far station to the near; for a clean line it equals the fore bearing plus or minus 180 degrees." },
            ],
            examQuestions: [
              {
                q: "Define bearing. Distinguish between whole-circle and reduced bearings, giving the conversion rules for all four quadrants with one worked example each.",
                marks: 7,
                outline: [
                  "Define bearing as the horizontal clockwise angle between a reference meridian and the surveyed line.",
                  "WCB: 0 to 360 degrees from north, a single number, read on a prismatic compass.",
                  "RB: 0 to 90 degrees in a named quadrant (e.g. S 30 W), read on a surveyor's compass.",
                  "NE quadrant (0-90): RB = WCB; example 40 -> N 40 E.",
                  "SE quadrant (90-180): RB = 180 - WCB; example 130 -> S 50 E.",
                  "SW quadrant (180-270): RB = WCB - 180; example 210 -> S 30 W. NW (270-360): RB = 360 - WCB; example 300 -> N 60 W.",
                  "Conclude that the two systems describe the same direction and the quadrant rules interconvert them.",
                ],
              },
              {
                q: "The WCB of a line is 145 degrees. State its reduced bearing.",
                marks: 2,
              },
              {
                q: "Convert S 60 W to a whole-circle bearing and state the back bearing of a line whose fore bearing is 35 degrees.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Local attraction and its correction",
            body: [
              "Local attraction is the disturbance of the magnetic needle by iron, steel, electricity, magnetic ore or other local influences near the compass station. The needle, which should point to the true magnetic meridian, is deflected east or west by an amount that depends on the strength and direction of the disturbing source. A pipeline, a steel bridge, a transformer, even the surveyor's bunch of keys, can attract the needle; power lines and ore bodies do so over larger distances. The error is local to the station and is constant for every observation taken from that station, but differs from station to station.",
              "Local attraction is detected by the fore-bearing-and-back-bearing test. For a clean line unaffected by local attraction, the back bearing differs from the fore bearing by exactly 180 degrees. If the observed FB and BB of a line differ from 180 degrees by more than the permissible observational error (a few minutes), then one or both of the two stations at the ends of the line is affected by local attraction. The test is applied to every line of the traverse in turn: a line whose FB and BB differ by 180 is taken as clean, and the stations at its two ends are declared free of local attraction.",
              "Correction proceeds from a known clean station. Once a clean station is identified, the difference between the observed and the true (180-correct) bearing at that station is the local attraction there; the same difference, applied with opposite sign, corrects every other bearing observed from that station. If no clean line can be found, the local attraction at each station is taken as the mean of the discrepancies of the two lines meeting there, or the whole traverse is re-observed at a site free from disturbance. The corrected bearings are then used for traverse computation. The cardinal rule is to never compute a traverse on uncorrected bearings.",
            ],
            bullets: [
              "Local attraction: needle deflection by iron, power, ore or keys; constant at a station, varying between stations.",
              "Detection: FB and BB of a line should differ by 180 degrees - a larger discrepancy flags local attraction.",
              "A line whose FB and BB differ by 180 is clean; both its end stations are free of local attraction.",
              "Correction: apply the station's discrepancy with opposite sign to every bearing observed from it.",
              "If no clean line is found, take the mean discrepancy at each station or re-observe at a clear site.",
            ],
            table: {
              caption: "Detecting local attraction from FB and BB observations.",
              headers: ["Line", "FB", "BB", "FB - BB", "Verdict"],
              rows: [
                ["AB", "76", "256", "180", "clean - both clean"],
                ["BC", "162", "344", "178", "local attraction"],
                ["CD", "240", "60", "180", "clean - both clean"],
                ["DA", "320", "138", "182", "local attraction"],
                ["rule", "-", "-", "180", "no local attraction"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Detecting and correcting local attraction",
              caption:
                "From the FB/BB test to a corrected traverse bearing set.",
              steps: [
                { label: "Observe FB and BB of every line", note: "compass traverse" },
                { label: "Test FB vs BB +/- 180", note: "flag any line off by > minutes" },
                { label: "Identify a clean line", note: "both end stations clean" },
                { label: "Compute station discrepancy", note: "observed minus true" },
                { label: "Correct every bearing from that station", note: "apply opposite sign" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never compute on uncorrected bearings",
              body: "Carrying an uncorrected bearing set through a traverse calculation is the single most common reason a closing error balloons. Always run the FB/BB test on every line first; if no clean line exists, re-observe the whole traverse away from iron and power. The few extra minutes in the field save hours in the office.",
            },
            keyTerms: [
              { term: "Local attraction", definition: "The disturbance of a compass needle by local magnetic sources such as iron, steel, electricity or ore, causing an error constant at the station but varying between stations." },
              { term: "Clean line", definition: "A survey line whose observed fore and back bearings differ by exactly 180 degrees, indicating that both its end stations are free of local attraction." },
              { term: "FB-BB test", definition: "The test that compares the fore bearing and back bearing of a line to 180 degrees to detect local attraction at one or both end stations." },
            ],
            examQuestions: [
              {
                q: "What is local attraction? Describe the method of detecting and correcting local attraction in a compass traverse with a worked example.",
                marks: 7,
                outline: [
                  "Define local attraction: needle deflection by iron, steel, electricity, ore; constant at a station, varying between stations.",
                  "Detection: for a clean line the BB differs from the FB by 180 degrees; a larger discrepancy flags local attraction.",
                  "Apply the FB-BB test to every line of the traverse in turn.",
                  "A line whose FB and BB differ by 180 is clean - both end stations are free of local attraction.",
                  "Worked example: line AB FB 76, BB 256 -> clean; line BC FB 162, BB 344 -> discrepancy of 178 flags attraction at B or C.",
                  "Correction: the station discrepancy is applied with opposite sign to every bearing observed from that station.",
                  "Conclude that the corrected bearings - and only those - are used in traverse computation.",
                ],
              },
              {
                q: "State two sources of local attraction in compass surveying.",
                marks: 2,
              },
              {
                q: "The fore bearing of a line is 65 degrees and the back bearing is 248 degrees. Is there local attraction, and if so, by how much?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Traverse surveying",
            body: [
              "A traverse is a series of connected survey lines whose lengths and bearings are measured, the direction changing at each station. It is the standard framework for engineering and cadastral surveys that cannot be covered by simple chain triangulation - built-up areas, forests, routes along roads and pipelines. At each station the fore bearing to the next station and the back bearing to the previous are observed; the length of each leg is measured by chain, tape or EDM. The sequence of legs forms either an open traverse or a closed traverse, and the choice governs the checks that can be applied.",
              "An open traverse runs from a known starting point to a known finishing point but does not close back on itself; it is used for roads, canals and pipelines where the route is linear. It lacks an internal geometric check - there is no closing point against which to compare - so it must be tied to independent astronomical or GNSS positions at both ends for control. A closed traverse returns to its starting point, forming a loop; the algebraic sum of the latitudes (north-south projections) and the algebraic sum of the departures (east-west projections) should each be zero, providing a powerful check on the angular and linear work. A connecting traverse runs between two known points and shares the checks of both.",
              "Traversing methods are classified by the instrument used. Chain traversing measures only the leg lengths, the angles being inferred from the bearings of adjacent legs; it suits low-precision work. Chain and compass traversing adds magnetic bearings at each station, faster but subject to local attraction. Theodolite traversing measures the horizontal angles between consecutive legs with a theodolite, the bearings being computed from a starting azimuth; this is the standard engineering method. Stadia or tacheometric traversing also derives leg lengths from stadia readings. Modern total-station traversing measures both angle and distance electronically and stores the coordinates directly. Each step up in instrument raises the precision and the cost; the surveyor's job is to match the method to the required accuracy.",
            ],
            bullets: [
              "Traverse: a series of connected survey lines, length and bearing measured at each leg.",
              "Open traverse: runs start to finish without closing; needs independent end control.",
              "Closed traverse: returns to the start; sum of latitudes and sum of departures should each be zero.",
              "Methods: chain, chain-and-compass, theodolite, tacheometric, total-station - precision rises with instrument.",
              "Latitudes are north-south projections; departures are east-west projections of each leg.",
            ],
            table: {
              caption: "Open vs closed traverse and traversing methods.",
              headers: ["Aspect", "Open traverse", "Closed traverse"],
              rows: [
                ["Geometry", "linear, non-looping", "loop returns to start"],
                ["Internal check", "none", "sum L = 0, sum D = 0"],
                ["End control", "both ends needed", "start point reused"],
                ["Typical use", "road, canal, pipeline", "site, boundary, control"],
                ["Closing error", "not detectable", "computable, adjustable"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The traverse loop: observe, project, check, adjust",
              caption:
                "Each station feeds the next; the loop closes back to the start for checking.",
              steps: [
                { label: "Observe bearing and length", note: "of each leg" },
                { label: "Compute latitude", note: "L = length x cos bearing" },
                { label: "Compute departure", note: "D = length x sin bearing" },
                { label: "Sum and check", note: "sum L, sum D -> 0" },
                { label: "Adjust and plot", note: "Bowditch or transit rule" },
                { label: "Back to next station", note: "repeat around loop" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the traverse type and method",
              body: "A 'describe traverse surveying' question wants three classifications: by geometry (open vs closed, with the connecting traverse as a hybrid), by instrument (chain, chain-and-compass, theodolite, tacheometric, total-station), and by the check available (sum of latitudes and departures zero for closed; independent end control for open). All three earn full marks.",
            },
            keyTerms: [
              { term: "Traverse", definition: "A series of connected survey lines whose lengths and bearings are measured, the direction changing at each station, used as the framework for engineering and cadastral surveys." },
              { term: "Closed traverse", definition: "A traverse that returns to its starting point, so that the algebraic sums of the latitudes and departures should each be zero, providing an internal check." },
              { term: "Latitude", definition: "The north-south projection of a traverse leg, equal to the length multiplied by the cosine of the bearing; northward is positive, southward negative." },
            ],
            examQuestions: [
              {
                q: "Define a traverse. Classify traverses by geometry and by instrument, and state the checks available for a closed traverse.",
                marks: 7,
                outline: [
                  "Define a traverse as a series of connected survey lines whose lengths and bearings are measured.",
                  "By geometry: open traverse (start to finish, no closure), closed traverse (loop returns to start), connecting traverse (between two known points).",
                  "Open traverse lacks an internal check and needs independent end control.",
                  "Closed traverse: algebraic sum of latitudes = 0 and algebraic sum of departures = 0 are the internal checks.",
                  "By instrument: chain, chain-and-compass, theodolite, tacheometric, total-station traversing.",
                  "Precision rises with instrument; the surveyor matches method to required accuracy.",
                  "Conclude that the closed traverse with theodolite or total-station is the engineering standard.",
                ],
              },
              {
                q: "Distinguish between an open traverse and a closed traverse.",
                marks: 2,
              },
              {
                q: "State the checks available on the angular and linear measurements of a closed traverse.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Closing error and traverse adjustment",
            body: [
              "In a closed traverse the algebraic sum of the latitudes and the algebraic sum of the departures should each be zero, because every leg that goes north is balanced by a leg that goes south, and likewise east against west. In practice, small errors in the measured bearings and lengths leave a residual: the sum of latitudes is a non-zero quantity sum-L and the sum of departures is a non-zero sum-D. The closing error is the magnitude of this residual, computed by Pythagoras as e equals the square root of (sum-L squared plus sum-D squared). It represents the linear distance by which the computed traverse fails to return to its starting point.",
              "The closing error is judged not by its absolute size but by its ratio to the total perimeter of the traverse. If the perimeter is P, the precision ratio is 1 over (P divided by e), written for example as 1 in 5000. The ratio required depends on the instrument and the purpose: chain-and-compass work may accept 1 in 500, theodolite traversing targets 1 in 5000 to 1 in 20000, and precise control traverses aim at 1 in 50000 or better. If the ratio is poorer than the specification, the field work is repeated; if it meets the specification, the closing error is distributed among the legs by an adjustment rule so that the adjusted traverse closes exactly.",
              "Two adjustment rules are taught. The Bowditch rule distributes the total latitude and departure corrections in proportion to the length of each leg: the correction to the latitude of a leg equals minus sum-L times the leg length over the perimeter, and likewise for the departure. The Bowditch rule is the most common and suits compass and theodolite traverses where errors of length and bearing are comparable. The transit rule distributes the corrections in proportion to the absolute values of the latitude and departure of each leg: the correction to the latitude of a leg equals minus sum-L times the absolute latitude of the leg over the sum of absolute latitudes. The transit rule suits theodolite traverses where angular error is small and linear error dominates. After adjustment, the corrected latitudes and departures are converted back to bearings and lengths.",
            ],
            bullets: [
              "Closing error e = sqrt(sum-L^2 + sum-D^2); sum-L and sum-D are the residual latitude and departure.",
              "Precision ratio = 1 / (perimeter / e); chain-and-compass 1 in 500, theodolite 1 in 5000 to 20000.",
              "If the ratio is poorer than spec, repeat the field work; if acceptable, distribute the error.",
              "Bowditch rule: correction proportional to leg length - suits compass and theodolite traverses.",
              "Transit rule: correction proportional to absolute latitude/departure - suits precise theodolite traverses.",
            ],
            table: {
              caption: "Closing error computation and adjustment comparison.",
              headers: ["Step", "Quantity", "Formula"],
              rows: [
                ["1", "sum of latitudes", "sum L (should be 0)"],
                ["2", "sum of departures", "sum D (should be 0)"],
                ["3", "closing error", "e = sqrt(sum L^2 + sum D^2)"],
                ["4", "precision ratio", "1 / (perimeter / e)"],
                ["5a", "Bowditch correction", "-sum L x leg / perimeter"],
                ["5b", "Transit correction", "-sum L x |lat| / sum |lat|"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Traverse computation from observation to adjusted coordinates",
              caption:
                "Each stage feeds the next; adjustment is the final reconciliation.",
              stages: [
                { label: "Observe bearings and lengths", note: "field book" },
                { label: "Compute L and D per leg", note: "L = l cos B, D = l sin B" },
                { label: "Sum and find misclosure", note: "e = sqrt(sumL^2 + sumD^2)" },
                { label: "Judge precision ratio", note: "1 / (P/e)" },
                { label: "Adjust by Bowditch or transit", note: "distribute correction" },
                { label: "Plot adjusted traverse", note: "closes exactly" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always quote the precision ratio",
              body: "Stating 'the closing error is 0.5 m' is meaningless without the perimeter. Always quote '0.5 m in a perimeter of 2500 m, a precision of 1 in 5000'. The ratio is the only number that lets the examiner judge whether the traverse is acceptable, and quoting it earns an easy method mark.",
            },
            keyTerms: [
              { term: "Closing error", definition: "The linear distance by which a closed traverse fails to return to its starting point, equal to the square root of the sum of the squares of the residual latitude and departure." },
              { term: "Bowditch rule", definition: "A traverse adjustment that distributes the latitude and departure corrections in proportion to the length of each leg, suited to compass and theodolite traverses." },
              { term: "Transit rule", definition: "A traverse adjustment that distributes the latitude and departure corrections in proportion to the absolute values of the latitude and departure of each leg, suited to precise theodolite traverses." },
            ],
            examQuestions: [
              {
                q: "Explain the closing error of a compass traverse. Derive its expression, state how precision is judged, and describe the Bowditch and transit rules of adjustment.",
                marks: 7,
                outline: [
                  "In a closed traverse sum of latitudes and sum of departures should each be zero.",
                  "Residuals sum-L and sum-D remain due to errors in bearings and lengths.",
                  "Closing error e = sqrt(sum-L^2 + sum-D^2); it is the linear distance of non-closure.",
                  "Precision is judged by the ratio 1 / (perimeter / e); theodolite work targets 1 in 5000 to 20000.",
                  "Bowditch rule: correction to latitude of a leg = -sum-L x leg length / perimeter; same form for departure.",
                  "Transit rule: correction = -sum-L x |latitude of leg| / sum of |latitudes|; same form for departure.",
                  "Conclude that Bowditch suits compass/theodolite, transit suits precise theodolite traverses with small angular error.",
                ],
              },
              {
                q: "State the expression for the closing error of a closed traverse.",
                marks: 2,
              },
              {
                q: "A closed traverse of perimeter 1000 m has a closing error of 0.2 m. State the precision ratio and judge whether it is acceptable for theodolite work.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Compass instruments and magnetic declination",
            body: [
              "The two compasses of surveying are the prismatic compass and the surveyor's compass. The prismatic compass reads whole-circle bearings from 0 to 360 degrees: a magnetic needle is pivoted over a graduated ring that turns with the instrument, a sighting vane and a reading prism are at opposite ends, and the bearing is read through the prism at the same eye as the sighting. It is graduated in degrees subdivided to half or one-third of a degree, and is held by hand or on a staff. The surveyor's compass reads reduced bearings in two quadrants of 0 to 90 degrees: the needle is fixed to the graduated card while the instrument is turned, and the sighting vanes are aligned with the north-south line.",
              "Magnetic declination is the horizontal angle between the true (geographic) meridian and the magnetic meridian at a given place and time. It varies over the earth's surface - in India from a few degrees east in the west to a few degrees west in the east - and also varies slowly over years (secular variation) and over the day (diurnal variation). East declination means the magnetic needle points east of true north; west declination means it points west. A true bearing is converted to a magnetic bearing by applying the declination with its proper sign: magnetic bearing equals true bearing minus east declination, or true bearing plus west declination.",
              "Isogonic lines join places of equal declination; the agonic line is the special isogonic line of zero declination, where true and magnetic north coincide. Annual variation, of a few minutes per year, must be applied when comparing a bearing observed today with one observed decades ago. To convert between true and magnetic bearings, state the rule once: true bearing equals magnetic bearing plus declination east (or minus declination west). The compass must be held level, the needle must swing freely, and observations should be averaged from both faces or from a second setup, to suppress the small oscillations and pivot friction that otherwise limit compass precision to a few minutes.",
            ],
            bullets: [
              "Prismatic compass: reads WCB 0-360, ring turns with instrument, sighting and reading at one eye.",
              "Surveyor's compass: reads RB 0-90 in two quadrants, needle fixed to card, instrument turned.",
              "Magnetic declination: angle between true and magnetic meridian; east means needle east of true north.",
              "Isogonic lines join equal declination; agonic line is zero declination.",
              "True bearing = magnetic bearing + east declination (or - west declination).",
            ],
            table: {
              caption: "Prismatic vs surveyor's compass and declination rules.",
              headers: ["Aspect", "Prismatic", "Surveyor's"],
              rows: [
                ["Reading", "WCB 0-360", "RB 0-90 quadrants"],
                ["Needle", "pivoted over ring", "fixed to card"],
                ["Ring", "turns with instrument", "fixed, instrument turns"],
                ["Sighting", "vane + prism at one eye", "two vanes"],
                ["Use", "traverse, fast work", "plotting, plane table"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Declination quadrants and bearing conversions",
              caption:
                "True bearing on the y-axis, magnetic bearing on the x-axis; each quadrant fixes a rule.",
              axes: { x: "Magnetic north east / west of true", y: "True north reference" },
              quadrants: [
                { label: "East declination, line NE", note: "TB = MB + D" },
                { label: "West declination, line NW", note: "TB = MB - D" },
                { label: "Agonic line", note: "D = 0, TB = MB" },
                { label: "Annual variation", note: "apply minutes/year over time gap" },
              ],
            },
            callout: {
              type: "tip",
              title: "Declination sign is the trap",
              body: "Half the marks lost in declination questions go to a flipped sign. Memorise one sentence: 'true bearing equals magnetic bearing plus east declination'. From that single rule the west-declination case (minus) and the reverse conversions follow by algebra. Write the rule on the sheet before substituting any numbers.",
            },
            keyTerms: [
              { term: "Prismatic compass", definition: "A compass that reads whole-circle bearings from 0 to 360 degrees, with a graduated ring turning with the instrument and a reading prism at the same eye as the sighting vane." },
              { term: "Magnetic declination", definition: "The horizontal angle between the true geographic meridian and the magnetic meridian at a given place and time, east or west of true north." },
              { term: "Isogonic line", definition: "A line on a map joining places of equal magnetic declination; the special case of zero declination is the agonic line." },
            ],
            examQuestions: [
              {
                q: "Distinguish between the prismatic and surveyor's compasses. Define magnetic declination and state the rules for converting true bearings to magnetic bearings and back, with worked examples.",
                marks: 7,
                outline: [
                  "Prismatic compass: WCB 0-360, ring turns with instrument, sighting vane and reading prism at one eye.",
                  "Surveyor's compass: RB 0-90 in two quadrants, needle fixed to card, instrument turned.",
                  "Define magnetic declination: horizontal angle between true and magnetic meridian, east or west.",
                  "Isogonic lines join equal declination; agonic line is zero declination.",
                  "Rule: true bearing = magnetic bearing + east declination (or - west declination).",
                  "Worked example: magnetic bearing 65 degrees, declination 5 E -> true bearing 70 degrees.",
                  "Reverse example: true bearing 70 degrees, declination 5 W -> magnetic bearing 75 degrees.",
                ],
              },
              {
                q: "State two differences between the prismatic compass and the surveyor's compass.",
                marks: 2,
              },
              {
                q: "The magnetic bearing of a line is 140 degrees and the declination is 7 degrees west. Find the true bearing.",
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
      title: "Levelling",
      summary:
        "Height control enters with the level: definitions and the datum, the dumpy and auto levels, the methods of levelling, the calculation of reduced levels by the height-of-instrument and rise-and-fall methods, and the theory and use of contours.",
      chapter: {
        number: "03",
        title: "Levelling",
        intro:
          "Unit III fixes vertical position. Levelling definitions anchor the language; the dumpy, tilting and auto levels are the instruments; the methods - differential, profile, cross-section, reciprocal - fit the job; the reduced level of every point is computed from the staff readings by either the height-of-instrument method or the rise-and-fall method; and contouring turns the heights into a map of equal-elevation lines.",
        inOneBreath:
          "Levelling is the art of determining the relative heights of points above a datum; a level surface is the equipotential surface of the earth's gravity to which the mean sea level is taken as the national datum; a horizontal surface is tangent to the level surface at a point and is what the line of sight of a level approximates; a vertical line is the plumb line through the instrument; a back sight is the first reading on a point of known or transferred RL and a fore sight is the last reading before moving the instrument, with intermediate sights in between; the dumpy level has a telescope rigidly fixed to its vertical spindle, the tilting level allows a fine vertical tangent screw, and the auto level self-levels by a pendulum compensator; the height of instrument is the RL of the line of sight and equals the RL of the BM plus the back sight; the reduced level of any subsequent point is HI minus the staff reading on it, or by the rise-and-fall method RL_new = RL_prev plus (previous reading minus current reading) where a positive difference is a rise and a negative one a fall; differential levelling moves from BM to BM, profile levelling runs along a centre line, cross-sectioning is at right angles to it, and reciprocal levelling across a river cancels collimation and curvature errors by swapping the instrument; and a contour is a line joining points of equal elevation, its interval fixed by scale and purpose, with the characteristics that contours never cross except at a waterfall, close on themselves, and are steeper where they run close together.",
        sections: [
          {
            number: "3.1",
            title: "Definitions in levelling",
            body: [
              "Levelling is the branch of surveying that determines the relative heights of points above or below a datum. A level surface is the equipotential surface of the earth's gravity, everywhere perpendicular to the plumb line, to which the mean sea level at a chosen tide gauge is taken as the national datum. A horizontal surface is a plane tangent to the level surface at the instrument; the line of sight of a level, when in adjustment, sweeps such a horizontal plane. A vertical line at any point is the plumb line through that point and is perpendicular to the level surface. These four definitions - level surface, horizontal surface, vertical line, datum - anchor every word in the levelling field book.",
              "The reduced level (RL) of a point is its elevation above the adopted datum. A bench mark (BM) is a fixed reference point of known RL established by precise levelling; a temporary bench mark (TBM) is one set up for the duration of a job. The back sight (BS) is the first staff reading taken after setting up the instrument, always on a point of known or transferred RL; the fore sight (FS) is the last staff reading taken before moving the instrument, on a point whose RL is to be fixed; an intermediate sight (IS) is any other staff reading taken between the BS and FS. A change point (CP) is a station on which both a FS and the next BS are taken, allowing the instrument to be moved forward.",
              "A turning point and a change point are the same thing - a stable point (a stone, a peg, the underside of a kerb) on which the FS of one setup and the BS of the next are observed so that the RL is carried forward. The height of instrument (HI) is the elevation of the line of sight above the datum; it equals the RL of the BM plus the BS reading. Once the HI is known, the RL of any point sighted equals the HI minus the staff reading on that point. The distinction between the HI method and the rise-and-fall method (next sections) is purely computational - the field procedure is identical. Knowing the definitions lets the surveyor read and write the field book in the standard six-column format without ambiguity.",
            ],
            bullets: [
              "Level surface: equipotential surface of gravity; datum is mean sea level.",
              "Horizontal surface: plane tangent to the level surface at the instrument.",
              "Reduced level (RL): elevation of a point above the datum.",
              "Back sight (BS) first reading on known RL; fore sight (FS) last before shift; intermediate sight between.",
              "Change point: stable point on which FS and next BS are observed; HI = RL_BM + BS.",
            ],
            table: {
              caption: "Levelling terms and their definitions at a glance.",
              headers: ["Term", "Symbol", "Definition"],
              rows: [
                ["Back sight", "BS", "first reading on known/transfer RL"],
                ["Fore sight", "FS", "last reading before shifting"],
                ["Intermediate sight", "IS", "any reading between BS and FS"],
                ["Change point", "CP", "FS and next BS on same point"],
                ["Height of instrument", "HI", "RL_BM + BS = RL of line of sight"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Levelling surfaces stacked from datum to line of sight",
              caption:
                "The level surface, the horizontal tangent and the vertical plumb line meet at the instrument.",
              layers: [
                { label: "Line of sight (horizontal)", note: "sweeps a horizontal plane" },
                { label: "Horizontal surface", note: "tangent to level surface at instrument" },
                { label: "Level surface", note: "equipotential; datum = mean sea level" },
                { label: "Datum", note: "national reference" },
              ],
            },
            callout: {
              type: "exam",
              title: "Define the four surfaces first",
              body: "A 'define the terms used in levelling' question earns easy marks if the four surfaces are stated in order: level surface (equipotential), horizontal surface (tangent), vertical line (plumb), datum (mean sea level). Then add BS, FS, IS, CP, HI. Six definitions in the right order is the full-marks template.",
            },
            keyTerms: [
              { term: "Level surface", definition: "The equipotential surface of the earth's gravity, everywhere perpendicular to the plumb line, to which mean sea level is taken as the datum." },
              { term: "Reduced level", definition: "The elevation of a survey point above the adopted datum, computed from the staff readings by the HI or rise-and-fall method." },
              { term: "Change point", definition: "A stable point on which both the fore sight of one setup and the back sight of the next are observed, allowing the height of instrument to be carried forward as the level is moved." },
            ],
            examQuestions: [
              {
                q: "Define the following terms used in levelling: level surface, horizontal surface, vertical line, datum, reduced level, back sight, fore sight, intermediate sight, change point and height of instrument.",
                marks: 7,
                outline: [
                  "Level surface: equipotential surface of gravity, perpendicular to the plumb line everywhere.",
                  "Horizontal surface: plane tangent to the level surface at the instrument.",
                  "Vertical line: the plumb line through the instrument, perpendicular to the level surface.",
                  "Datum: the reference level surface, usually mean sea level at a chosen tide gauge.",
                  "Reduced level: elevation of a point above the datum.",
                  "Back sight: first staff reading on a point of known or transferred RL; fore sight: last reading before moving; intermediate sight: any reading between.",
                  "Change point: point on which FS and next BS are taken; height of instrument = RL of BM + BS.",
                ],
              },
              {
                q: "What is a bench mark? State its use in levelling.",
                marks: 2,
              },
              {
                q: "Distinguish between a back sight and a fore sight, and define a change point.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Levelling instruments - dumpy, tilting and auto",
            body: [
              "The dumpy level is the oldest of the three still in use. Its telescope is rigidly fixed to a vertical spindle that revolves in a socket; a long bubble tube is attached parallel to the telescope; levelling the instrument means centering the main bubble with the four foot-screws, after which the line of sight is horizontal in every direction as the telescope is revolved. The dumpy is robust, simple and slow to set up; its main disadvantage is the time spent in bringing the bubble to centre with the foot-screws, and the loss of horizontality if any foot-screw creeps during observations. Once set, however, the dumpy holds its adjustment well in rough field conditions.",
              "The tilting level improves on the dumpy by allowing the telescope to be tilted through a small vertical angle by a fine tangent screw after the instrument is roughly levelled. A circular bubble is used for rough levelling with the foot-screws, then the main bubble is centred by the tilting screw for every pointing of the telescope. The advantage is that the main bubble need not be perfectly central in all directions - only along the line of sight - which speeds up the work. The tilting level was the workhorse of engineering levelling for most of the twentieth century, and remains a common RGPV exam topic for its parts and adjustment.",
              "The auto (automatic) level replaces the delicate bubble-and-screw levelling with a pendulum compensator inside the telescope. The instrument is roughly levelled with a circular bubble; once the line of sight is within a few minutes of horizontal, the compensator - a system of prisms suspended on a pendulum - automatically brings the line of sight to exact horizontality and holds it there as the telescope is rotated. The auto level is fast, requires no per-pointing levelling, and is forgiving of small setup errors; its only weakness is the compensator's need to swing freely, so it must be protected from vibration and wind. Modern engineering work and RGPV practicals overwhelmingly use the auto level.",
            ],
            bullets: [
              "Dumpy: telescope fixed to spindle; main bubble centred with foot-screws; robust, slow.",
              "Tilting: telescope tilts by tangent screw; circular bubble for rough, main bubble per pointing.",
              "Auto: pendulum compensator self-levels after rough circular bubble; fast and forgiving.",
              "All three carry a telescope with stadia hairs, an internal focusing lens and a bubble tube.",
              "Levelling staff: 3-5 m telescoping, graduated in 5 mm or 10 mm, Sopwith or direct-reading.",
            ],
            table: {
              caption: "Comparison of dumpy, tilting and auto levels.",
              headers: ["Feature", "Dumpy", "Tilting", "Auto"],
              rows: [
                ["Levelling means", "foot-screws + bubble", "tilt screw + bubble", "pendulum compensator"],
                ["Speed of setup", "slow", "medium", "fast"],
                ["Per-pointing", "no", "yes", "no"],
                ["Robustness", "high", "medium", "medium"],
                ["Modern use", "rare", "legacy", "standard"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Dumpy vs auto level: how the line of sight is held horizontal",
              caption:
                "The dumpy fixes the telescope rigidly; the auto self-levels by a compensator.",
              left: {
                heading: "Dumpy level",
                items: [
                  "Telescope rigid on vertical spindle",
                  "Main bubble centred with four foot-screws",
                  "Once level, sight is horizontal in all directions",
                  "Slow setup; bubble must hold during work",
                  "Robust, simple, low maintenance",
                ],
              },
              right: {
                heading: "Auto level",
                items: [
                  "Telescope on spindle with pendulum compensator",
                  "Rough circular bubble with foot-screws",
                  "Compensator brings sight to horizontal",
                  "Fast setup; no per-pointing levelling",
                  "Protect compensator from vibration and wind",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Name the distinguishing feature",
              body: "A 'distinguish between dumpy, tilting and auto level' question is mostly a one-feature answer: dumpy = telescope rigidly fixed to spindle; tilting = fine tilting tangent screw per pointing; auto = pendulum compensator self-levels. State the one feature of each and add one use or weakness. Three features plus three notes is the full-marks template.",
            },
            keyTerms: [
              { term: "Dumpy level", definition: "A levelling instrument in which the telescope is rigidly fixed to a vertical spindle and the line of sight is made horizontal in all directions by centring a long bubble with four foot-screws." },
              { term: "Tilting level", definition: "A levelling instrument in which the telescope can be tilted through a small vertical angle by a fine tangent screw so that the main bubble is centred for every pointing after rough levelling by a circular bubble." },
              { term: "Auto level", definition: "A levelling instrument that self-levels the line of sight by a pendulum compensator inside the telescope once the circular bubble has been roughly centred." },
            ],
            examQuestions: [
              {
                q: "Describe the dumpy, tilting and auto levels. State the distinguishing feature of each and the situations for which each is suited.",
                marks: 7,
                outline: [
                  "Dumpy: telescope rigidly fixed to vertical spindle; main bubble centred with four foot-screws; once level, sight horizontal in all directions.",
                  "Tilting: telescope tilts by a fine tangent screw; circular bubble for rough levelling, main bubble per pointing.",
                  "Auto: pendulum compensator inside telescope self-levels once circular bubble is roughly centred.",
                  "Dumpy is robust and slow; tilting is the legacy engineering workhorse; auto is the modern standard.",
                  "Distinguishing feature: dumpy = rigid telescope; tilting = tilting screw; auto = compensator.",
                  "Auto needs protection from vibration; tilting needs per-pointing bubble check; dumpy holds adjustment in rough field.",
                  "Conclude that the auto level is now the standard for engineering and RGPV practical work.",
                ],
              },
              {
                q: "State the purpose of the compensator in an auto level.",
                marks: 2,
              },
              {
                q: "Name the main parts of a dumpy level and state the function of any three.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Methods of levelling",
            body: [
              "Differential levelling (also called fly levelling) is the basic method of transferring RL from one bench mark to another. The level is set up midway between the BM and the first point; a back sight is taken on the BM and a fore sight on the point; the RL of the point is computed and the level is moved forward, taking the next back sight on the point just fixed and a fore sight on the next. The sequence of BS and FS continues until the closing BM is reached. Differential levelling is the workhorse of all engineering height work and underlies every other method.",
              "Profile levelling (longitudinal levelling) runs along the centre line of a proposed road, railway or pipeline. Staff readings are taken at regular chainage intervals - every 20 or 30 metres - and at every break of slope; the reduced levels of all these points are computed and plotted as a longitudinal section, against which the design gradient is superimposed. Cross-sectioning runs perpendicular to the centre line at each chainage, taking staff readings at fixed offsets left and right; the cross-sections are plotted to compute earthwork volumes by the trapezoidal or prismoidal formula. Profile and cross-section together feed the road design and its quantity estimate.",
              "Reciprocal levelling is used when a level has to be set across a wide river or valley, so that the line of sight is long and errors of curvature of the earth, refraction and collimation cannot be neglected. The level is set up near one bank and readings are taken on staffs held on both banks; the instrument is then moved to the other bank and the readings repeated. Taking the mean of the two differences of staff readings eliminates the collimation error, the curvature error and the bulk of the refraction error, leaving only the residual of non-symmetric refraction. Reciprocal levelling is the standard method for transferring RL across a river or a deep gorge.",
            ],
            bullets: [
              "Differential (fly) levelling: BS on BM, FS on next point, repeat - transfers RL between BMs.",
              "Profile levelling: staff at regular chainage along a centre line; plotted as longitudinal section.",
              "Cross-sectioning: staff at fixed offsets perpendicular to the centre line; feeds earthwork volumes.",
              "Reciprocal levelling: observe from both banks across a river; mean cancels collimation and curvature.",
              "Each method fits a job: differential for general, profile for roads, reciprocal for rivers.",
            ],
            table: {
              caption: "Levelling methods and their typical use.",
              headers: ["Method", "Setup pattern", "Use"],
              rows: [
                ["Differential", "BM to BM, BS/FS pairs", "general RL transfer"],
                ["Profile", "along centre line at chainage", "road, rail, pipeline gradient"],
                ["Cross-section", "perpendicular offsets", "earthwork volume"],
                ["Reciprocal", "both banks of a river", "long lines, no collimation error"],
                ["Check levelling", "closed loop on BMs", "verify existing BMs"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "A differential levelling run from BM to BM",
              caption:
                "Each setup contributes a BS and an FS; the change point carries the RL forward.",
              stages: [
                { label: "Setup at A: BS on BM1", note: "RL known" },
                { label: "FS on change point 1", note: "fix RL of CP1" },
                { label: "Shift to B: BS on CP1", note: "carry RL forward" },
                { label: "FS on change point 2", note: "fix RL of CP2" },
                { label: "Setup at C: FS on BM2", note: "close on known RL" },
              ],
            },
            callout: {
              type: "tip",
              title: "Equalise foresight and backsight distances",
              body: "In differential levelling, keep the foresight and backsight distances from the instrument roughly equal at every setup. Equal distances cancel the collimation error, the curvature error and most of the refraction error in the difference of the two readings. A pacing or stadia check of the two distances is the easiest way to protect a long levelling run from instrument error.",
            },
            keyTerms: [
              { term: "Differential levelling", definition: "The basic method of transferring reduced level from one bench mark to another by a sequence of back sight and fore sight observations from successive instrument setups." },
              { term: "Profile levelling", definition: "Levelling along the centre line of a road, railway or pipeline, taking staff readings at regular chainage and at breaks of slope to plot a longitudinal section." },
              { term: "Reciprocal levelling", definition: "Levelling across a wide river or valley by taking staff readings from both banks and meaning the two differences, so that collimation, curvature and refraction errors cancel." },
            ],
            examQuestions: [
              {
                q: "Describe the methods of levelling. State the purpose of each of differential, profile, cross-section and reciprocal levelling, with one field sketch each.",
                marks: 7,
                outline: [
                  "Differential (fly) levelling: BS on BM, FS on next point, repeat; transfers RL between BMs.",
                  "Sketch a run: BM1 -> CP1 -> CP2 -> BM2, with BS and FS at each setup.",
                  "Profile levelling: staff at regular chainage along a centre line; plots longitudinal section.",
                  "Sketch a centre line with staff points at 0, 20, 40, 60 m and the section plot below.",
                  "Cross-sectioning: perpendicular offsets left and right of the centre line at each chainage; feeds earthwork volumes.",
                  "Reciprocal levelling: observe staffs on both banks from both banks; mean cancels collimation and curvature.",
                  "Conclude that each method fits a job: differential for general, profile for roads, reciprocal for rivers.",
                ],
              },
              {
                q: "State the purpose of reciprocal levelling.",
                marks: 2,
              },
              {
                q: "Why is cross-sectioning carried out in a road survey? Give the typical offsets used.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "RL calculation - HI and rise-and-fall methods",
            body: [
              "Two computational methods extract reduced levels from the field-book readings; both use the same staff readings and yield the same answers, differing only in the arithmetic path. The height-of-instrument (HI) method computes the elevation of the line of sight at each setup as HI equals the RL of the BM plus the back sight. The RL of every subsequent point sighted from that setup equals the HI minus the staff reading on it. When a fore sight is taken on a change point, the HI for the next setup is recomputed as RL of the CP plus the next back sight. The HI method is faster when many intermediate sights are taken from one setup, because the single HI serves them all.",
              "The rise-and-fall method compares consecutive staff readings without computing the HI. For two successive points, the difference of the previous reading minus the current reading is a rise if positive (the staff moved down, the ground rose) and a fall if negative. The RL of the new point equals the RL of the previous point plus the rise (or minus the fall). At a change point, the FS of one setup and the BS of the next are compared: BS minus FS is a rise, FS minus BS is a fall. The rise-and-fall method is slower but self-checking: the sum of the BS minus the sum of the FS must equal the sum of the rises minus the sum of the falls, and must also equal the closing RL minus the opening RL - three independent checks that catch booking and arithmetic errors.",
              "The standard field book lays out the work in six columns: station, back sight, intermediate sight, fore sight, HI or rise-and-fall, and RL. After booking, an arithmetical check is mandatory: sum of BS minus sum of FS equals last RL minus first RL. If the check fails, the error is in the booking or arithmetic, not the field work, and the page is recomputed. A worked example clarifies both methods: BM RL 100.000, BS 1.250 -> HI 101.250; IS 0.950 on C -> RL_C 100.300; FS 2.100 on D -> RL_D 99.150; the same data via rise-and-fall gives 1.250 - 0.950 = +0.300 rise so RL_C 100.300, and 0.950 - 2.100 = -1.150 fall so RL_D 99.150. Both methods agree.",
            ],
            bullets: [
              "HI method: HI = RL_BM + BS; RL of point = HI - staff reading; recompute HI at each change point.",
              "Rise-and-fall: rise if previous reading > current; RL_new = RL_prev + rise (or - fall).",
              "Field book: six columns - station, BS, IS, FS, HI or R/F, RL.",
              "Arithmetic check: sum BS - sum FS = last RL - first RL = sum rise - sum fall.",
              "HI method suits many intermediate sights; rise-and-fall is slower but self-checking.",
            ],
            codeExample: {
              language: "python",
              caption: "Reduced levels by both HI and rise-and-fall methods from a level field book.",
              code: `# Level field book readings (station, staff reading, kind)
# kind: BS = back sight, IS = intermediate sight, FS = fore sight
book = [
    ("BM", 1.250, "BS"),   # known RL = 100.000
    ("C",  0.950, "IS"),
    ("D",  2.100, "FS"),   # change point
    ("E",  1.800, "BS"),
    ("F",  2.450, "FS"),   # closing FS
]
RL_BM = 100.000

# --- Method 1: Height of Instrument (HI) ---
hi = RL_BM + book[0][1]            # first HI
rl_hi = {"BM": RL_BM}
for name, r, kind in book[1:]:
    if kind in ("IS", "FS"):
        rl_hi[name] = round(hi - r, 3)
    if kind == "FS":
        hi = rl_hi[name] + next(b[1] for b in book if b[0] != name and b[2] == "BS" and b not in [])  # next BS
print("HI method:", rl_hi)

# --- Method 2: Rise and Fall ---
rl_rf = {"BM": RL_BM}
prev = book[0][1]
for name, r, kind in book[1:]:
    diff = prev - r
    if diff >= 0:
        rl_rf[name] = round(rl_rf["BM"] if name == "C" else rl_rf[last] + diff, 3)
    last = name
    prev = r
print("Rise/Fall method:", rl_rf)

# --- Arithmetic check ---
sum_bs = sum(b[1] for b in book if b[2] == "BS")
sum_fs = sum(b[1] for b in book if b[2] == "FS")
print(f"sum BS - sum FS = {sum_bs - sum_fs:.3f}")
print(f"last RL - first RL = {rl_hi['F'] - RL_BM:.3f}")`,
            },
            diagram: {
              kind: "flow",
              title: "Two arithmetic paths, one RL",
              caption:
                "HI method and rise-and-fall method arrive at the same reduced level by different routes.",
              steps: [
                { label: "Book BS, IS, FS, station", note: "field book" },
                { label: "Compute HI = RL_BM + BS", note: "HI method" },
                { label: "RL = HI - reading", note: "for every IS, FS" },
                { label: "Or compute rise/fall", note: "prev - current" },
                { label: "RL_new = RL_prev +/- diff", note: "rise-and-fall" },
                { label: "Arithmetic check sum BS - FS", note: "= last RL - first RL" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always run the arithmetic check",
              body: "A levelling computation that omits the arithmetical check loses method marks even if every RL is right. Write the check on the page before stating the final RL: sum of BS minus sum of FS equals last RL minus first RL. If the two sides do not agree, the error is in the booking and the page is recomputed - this discipline is exactly what RGPV examiners look for.",
            },
            keyTerms: [
              { term: "Height of instrument method", definition: "A method of computing reduced levels in which the elevation of the line of sight (HI = RL of BM + BS) is calculated at each setup and the RL of every point equals the HI minus the staff reading on it." },
              { term: "Rise-and-fall method", definition: "A method of computing reduced levels in which the difference between consecutive staff readings gives a rise or fall, and the RL of a point equals the previous RL plus the rise or minus the fall." },
              { term: "Arithmetic check", definition: "The mandatory verification that the sum of back sights minus the sum of fore sights equals the last RL minus the first RL (and also equals the sum of rises minus the sum of falls)." },
            ],
            examQuestions: [
              {
                q: "Explain the height-of-instrument and rise-and-fall methods of computing reduced levels. Set up the arithmetic check for each and apply both to the following: BM RL 100.000, BS 1.250; IS 0.950; FS 2.100; BS 1.800; FS 2.450.",
                marks: 7,
                outline: [
                  "HI method: HI = RL_BM + BS = 100.000 + 1.250 = 101.250.",
                  "RL_C = HI - IS = 101.250 - 0.950 = 100.300.",
                  "RL_D = HI - FS = 101.250 - 2.100 = 99.150 (change point).",
                  "New HI = RL_D + BS = 99.150 + 1.800 = 100.950; RL_F = 100.950 - 2.450 = 98.500.",
                  "Rise-and-fall: 1.250 - 0.950 = +0.300 rise -> RL_C = 100.000 + 0.300 = 100.300.",
                  "0.950 - 2.100 = -1.150 fall -> RL_D = 100.300 - 1.150 = 99.150; continue to RL_F = 98.500.",
                  "Arithmetic check: sum BS (1.250 + 1.800) - sum FS (2.100 + 2.450) = -1.500 = RL_F (98.500) - RL_BM (100.000).",
                ],
              },
              {
                q: "State the arithmetic check applied in levelling.",
                marks: 2,
              },
              {
                q: "Compute the RL of a point if the HI is 105.200 m and the staff reading is 1.840 m.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Contouring",
            body: [
              "A contour is a line on a map joining points of equal elevation above the datum. The vertical distance between two consecutive contours is the contour interval, chosen by the map scale and the terrain: 1 m for large-scale site plans, 5 m for 1:5000 cadastral sheets, 20 to 50 m for 1:50000 topographical maps. The horizontal distance between two consecutive contours on the ground is the horizontal equivalent, which varies with slope - small on steep ground where contours crowd, large on gentle ground where they spread. The ratio of the contour interval to the horizontal equivalent gives the slope at the place.",
              "Contouring methods suit the scale. The direct method locates the contour in the field: the level is set up, the staff is moved until the reading equals the HI minus the desired contour elevation, and the point is pegged; the contour line is then drawn through the pegged points. The direct method is precise but slow and is reserved for large-scale work. The indirect method takes staff readings on a grid of points or along selected lines, computes the RL of each, and interpolates the contour positions between adjacent points by proportion; this is the standard method for topographical sheets and route surveys, fast enough for the density of points required.",
              "The characteristics of contours encode the shape of the ground and are exam favourites. Contours are continuous closed curves, either within the map or extending to its edge. They never cross except at a vertical cliff or overhang, where they coincide. Closely spaced contours indicate steep ground; widely spaced contours indicate gentle ground. A concentric series of closed contours with increasing values inward marks a hill; with decreasing values inward it marks a depression or pond. A contour crossing a stream forms a V pointing upstream; crossing a ridge it forms a U pointing downhill. Saddle, overhanging cliff and waterfall have characteristic contour signatures the surveyor learns to read.",
            ],
            bullets: [
              "Contour: line joining points of equal elevation; contour interval is the vertical gap.",
              "Horizontal equivalent: ground distance between consecutive contours, varies with slope.",
              "Direct method: peg points at the desired elevation in the field; precise, slow, large scale.",
              "Indirect method: RL on a grid or lines, interpolate contours by proportion; fast, standard.",
              "Closely spaced = steep; widely spaced = gentle; V upstream for streams; U downhill for ridges.",
            ],
            table: {
              caption: "Contour characteristics and what they indicate.",
              headers: ["Pattern", "Indicates"],
              rows: [
                ["closed, increasing inward", "hill or peak"],
                ["closed, decreasing inward", "depression or pond"],
                ["closely spaced", "steep slope"],
                ["widely spaced", "gentle slope"],
                ["V pointing upstream", "stream or valley"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Contour patterns across terrain types",
              caption:
                "Two axes: spacing (close vs wide) and form (closed vs open) fix the ground type.",
              axes: { x: "Closed vs open form", y: "Close vs wide spacing" },
              quadrants: [
                { label: "Closed, close", note: "steep hill" },
                { label: "Open, close", note: "steep ridge or valley" },
                { label: "Closed, wide", note: "low hill, gentle" },
                { label: "Open, wide", note: "plain, gentle slope" },
              ],
            },
            callout: {
              type: "exam",
              title: "List the contour characteristics",
              body: "A 'state the characteristics of contours' question is a memory list. State at least six: continuous closed curves; never cross except at a cliff; close-spaced = steep, wide-spaced = gentle; hill = increasing inward; depression = decreasing inward; stream V points upstream; ridge U points downhill. Six one-line characteristics earn full marks.",
            },
            keyTerms: [
              { term: "Contour", definition: "A line on a map joining points of equal elevation above the datum." },
              { term: "Contour interval", definition: "The constant vertical distance between two consecutive contours on a map, chosen by the map scale and the nature of the terrain." },
              { term: "Horizontal equivalent", definition: "The horizontal ground distance between two consecutive contours, which varies inversely with the slope at that place." },
            ],
            examQuestions: [
              {
                q: "Define a contour and the contour interval. Describe the direct and indirect methods of contouring, and state at least six characteristics of contours.",
                marks: 7,
                outline: [
                  "Define a contour as a line joining points of equal elevation above the datum.",
                  "Contour interval: vertical gap between consecutive contours, fixed by scale and terrain.",
                  "Direct method: peg points whose staff reading equals HI minus the contour elevation; precise, slow.",
                  "Indirect method: RLs on a grid or along lines, interpolate contour positions by proportion; fast, standard.",
                  "Characteristic 1: contours are continuous closed curves, ending at the map edge if not closed.",
                  "Characteristics 2-6: never cross except at a cliff; close = steep, wide = gentle; hill = increasing inward; depression = decreasing inward; stream V points upstream; ridge U points downhill.",
                ],
              },
              {
                q: "State two characteristics of contours.",
                marks: 2,
              },
              {
                q: "Distinguish between the direct and indirect methods of contouring and state one use of each.",
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
      title: "Theodolite and Tacheometry",
      summary:
        "Angular precision arrives with the theodolite: its components and adjustments, the measurement of horizontal and vertical angles by repetition and reiteration, and the tacheometric and stadia formulae that derive distance and elevation from angular staff readings.",
      chapter: {
        number: "04",
        title: "Theodolite and Tacheometry",
        intro:
          "Unit IV brings the most precise angle-measuring instrument of the classical field. The theodolite's components - telescope, vertical circle, horizontal circle, plates, levelling head - and its adjustments are studied first; horizontal and vertical angles are measured by repetition and reiteration; the tacheometric formulae turn stadia staff readings into horizontal distance and elevation; and the stadia survey becomes a fast detail method over rough ground.",
        inOneBreath:
          "A theodolite is a precision instrument for measuring horizontal and vertical angles, consisting of a telescope mounted on a vertical spindle that revolves over a horizontal circle graduated in degrees and minutes, with a vertical circle attached to the telescope axis for vertical angles, a lower plate clamped to the tripod and an upper plate that rotates with the telescope, a levelling head with three or four foot-screws, and a plumb bob or optical plummet to centre the instrument over the station; the temporary adjustments are centring, levelling, focusing the eyepiece and focusing the objective; a horizontal angle is measured by setting the cross-hair on the left target, reading the horizontal circle, transiting to the right target and reading again, the difference being the angle; repetition measures an angle several times on different parts of the circle and means the readings to average out the graduation errors, while reiteration measures several angles from a common zero by a series of pointings; the vertical angle is read on the vertical circle with its index corrected for the index error; tacheometry uses the two stadia hairs in the telescope to read the intercept on a staff held vertical, the horizontal distance D = K s cos^2 theta + C cos theta and the vertical distance V = (K s sin 2 theta)/2 + C sin theta, where K is the multiplying constant (about 100), C is the additive constant (zero for an anallactic lens), s is the staff intercept and theta is the vertical angle; the RL of the staff station is RL of instrument + height of instrument +/- V - staff reading at the central hair; and the stadia survey's economy is its measurement of both distance and elevation from a single setup without chaining.",
        sections: [
          {
            number: "4.1",
            title: "Theodolite components and adjustments",
            body: [
              "A theodolite is a precision instrument for measuring horizontal and vertical angles. Its principal parts are: a telescope with reticule, mounted on a horizontal transit axis so it can be plunged; a vertical circle fixed to the telescope axis, graduated in degrees and minutes, with a vernier or microscope for reading; a horizontal circle graduated around its rim, attached to the lower plate; an upper plate that rotates over the lower plate and carries the telescope and the vertical circle; a lower plate clamped to a levelling head with three or four foot-screws; a tribrach and tripod; and a plumb bob or optical plummet to centre the instrument over the station. The lower clamp and tangent screw fix the lower plate to the levelling head; the upper clamp and tangent screw fix the upper plate to the lower.",
              "The temporary adjustments of a theodolite at every station are four. Centring places the vertical axis exactly over the station mark, using the plumb bob or optical plummet and shifting the instrument on the tripod head. Levelling brings the vertical axis truly vertical by means of the foot-screws and the plate bubble - the bubble is centred over each pair of foot-screws in turn, then checked after rotating ninety degrees. Focusing the eyepiece brings the cross-hairs into sharp focus against a light background; focusing the objective brings the target into sharp focus and removes parallax - the cross-hair must not appear to move when the eye is moved slightly. Only after these four adjustments is the instrument ready to measure.",
              "The permanent adjustments are the relations among the axes that should hold for all positions of the telescope: the vertical axis should be truly vertical when the plate bubble is centred; the horizontal (transit) axis should be perpendicular to the vertical axis; the line of sight should be perpendicular to the transit axis; the axis of the telescope bubble, if fitted, should be parallel to the line of sight; and the vertical circle index should read zero when the line of sight is horizontal. Failure of any of these relations introduces systematic errors into the angles. The permanent adjustments are tested periodically by the spire test, the striding level test, the collimation test and the index test, and corrected by the maker's provided screws.",
            ],
            bullets: [
              "Parts: telescope, vertical circle, horizontal circle, upper and lower plates, levelling head, plummet.",
              "Lower clamp fixes the lower plate; upper clamp fixes the upper plate to the lower.",
              "Temporary adjustments: centring, levelling, eyepiece focus, objective focus (remove parallax).",
              "Plate bubble centred over each pair of foot-screws in turn, then checked at 90 degrees.",
              "Permanent adjustments: axis perpendicularities and vertical circle index zero.",
            ],
            table: {
              caption: "Theodolite parts and their function.",
              headers: ["Part", "Function"],
              rows: [
                ["Telescope", "sight target and read cross-hair"],
                ["Vertical circle", "measure vertical angles"],
                ["Horizontal circle", "measure horizontal angles"],
                ["Upper/lower plates", "carry telescope / clamp to head"],
                ["Plate bubble + foot-screws", "bring vertical axis truly vertical"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Theodolite axes - the permanent adjustment relations",
              caption:
                "Each tier depends on the one below; failure of any introduces a systematic error.",
              tiers: [
                { label: "Line of sight", note: "perpendicular to transit axis" },
                { label: "Transit axis", note: "perpendicular to vertical axis" },
                { label: "Vertical axis", note: "truly vertical when bubble centred" },
                { label: "Vertical circle index", note: "zero when sight horizontal" },
              ],
            },
            callout: {
              type: "exam",
              title: "Separate temporary from permanent",
              body: "A 'describe the theodolite' question wants two clearly labelled lists. Temporary adjustments (centring, levelling, focusing the eyepiece, focusing the objective) are made at every station. Permanent adjustments (axis perpendicularities, index zero) are made periodically in the workshop or by the field engineer. Confusing the two loses the list marks.",
            },
            keyTerms: [
              { term: "Temporary adjustments", definition: "The four adjustments made at every theodolite station - centring, levelling, focusing the eyepiece and focusing the objective - that prepare the instrument for measurement." },
              { term: "Plate bubble", definition: "A sensitive spirit level attached to the upper plate of a theodolite, used with the foot-screws to bring the vertical axis truly vertical." },
              { term: "Permanent adjustments", definition: "The relations among the theodolite's axes (vertical, transit, line of sight and vertical circle index) that should hold for all positions of the telescope and are tested periodically." },
            ],
            examQuestions: [
              {
                q: "Describe the principal parts of a theodolite. State the temporary and permanent adjustments and explain why each is necessary.",
                marks: 7,
                outline: [
                  "Principal parts: telescope, vertical circle, horizontal circle, upper and lower plates, levelling head, plummet.",
                  "Lower clamp fixes the lower plate to the head; upper clamp fixes the upper plate to the lower.",
                  "Temporary adjustments (per station): centring (plumb over station), levelling (plate bubble + foot-screws).",
                  "Continue temporary: focus eyepiece (cross-hair sharp), focus objective (target sharp, no parallax).",
                  "Permanent adjustments: vertical axis vertical when bubble centred; transit axis perpendicular to vertical.",
                  "Line of sight perpendicular to transit axis; vertical circle index reads zero on horizontal sight.",
                  "Conclude that temporary errors are corrected each setup; permanent errors are tested periodically and corrected by maker's screws.",
                ],
              },
              {
                q: "State any two temporary adjustments of a theodolite.",
                marks: 2,
              },
              {
                q: "List the permanent adjustments of a theodolite and state the test for the line of collimation.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Measurement of horizontal and vertical angles",
            body: [
              "A horizontal angle is measured by the general method: set up and centre the theodolite over the station, level it, and focus; with the telescope on face left (or face right), set the upper clamp and bring the cross-hair onto the left target using the upper tangent screw, and read the horizontal circle (say 0 degrees 10 minutes); release the upper clamp, swing the telescope to the right target, clamp and fine-adjust with the tangent screw, and read again (say 65 degrees 30 minutes); the angle is the difference, 65 degrees 20 minutes. The two faces (left and right) are observed and the mean taken to cancel the errors of collimation, of the transit axis and of the vertical circle index.",
              "Repetition improves precision by measuring the same angle several times on different parts of the circle, accumulating the angle on the circle and dividing by the number of repetitions. With the instrument on face left, sight A and set the circle to zero; swing to B and read the angle (single measure); leaving the lower clamp undisturbed, release the upper clamp, sight A again, then B - the circle now reads twice the angle, having moved on by the angle a second time. After n repetitions the circle reads n times the angle; dividing by n gives the mean angle, averaging out graduation errors of the circle. Six or twelve repetitions are common for precise work.",
              "Reiteration (the directional method) measures several angles around a station from a common initial direction. Sight the initial station A and set the circle to zero; swing in turn to B, C, D, reading the directions at each; the angles AB, BC, CD are obtained by differencing the directions. Reiteration is faster when many angles meet at one station and is the standard method for triangulation. Vertical angles are read on the vertical circle: the telescope is set on the target, the altitude bubble (if any) is centred, and the circle is read; the vertical angle to a point above the horizontal is an angle of elevation (positive) and to a point below is an angle of depression (negative). Mean of face left and face right cancels the index error.",
            ],
            bullets: [
              "General method: face left, sight A, read; sight B, read; angle = difference; repeat on face right.",
              "Mean of two faces cancels collimation, transit axis and index errors.",
              "Repetition: accumulate the angle n times on the circle, divide by n - averages graduation errors.",
              "Reiteration: directions to several targets from one zero, angles by differencing - fast for triangulation.",
              "Vertical angles read on the vertical circle; elevation positive, depression negative; index error cancels on mean of faces.",
            ],
            table: {
              caption: "Horizontal angle measurement methods compared.",
              headers: ["Method", "Reads", "Best for"],
              rows: [
                ["General", "single angle, 2 faces", "single isolated angle"],
                ["Repetition", "n times accumulated", "high precision, one angle"],
                ["Reiteration", "directions from zero", "many angles at a station"],
                ["Both faces", "FL and FR meaned", "cancels instrument errors"],
                ["Vertical", "vertical circle", "elevation/depression"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Measuring a horizontal angle by the general method",
              caption:
                "Face left and face right are meaned to cancel instrument errors.",
              steps: [
                { label: "Set up, centre, level", note: "temporary adjustments" },
                { label: "Face left: sight A, read HA", note: "upper clamp + tangent" },
                { label: "Swing to B, read HB", note: "angle = HB - HA" },
                { label: "Transit to face right, repeat", note: "mean cancels errors" },
                { label: "Mean angle recorded", note: "book FL, FR, mean" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always book both faces",
              body: "An angle observed on only one face is uncheckable and loses method marks. Book face left and face right side by side and state that the mean cancels the collimation, transit-axis and index errors. If the two face readings differ by more than a minute or two, suspect a permanent adjustment failure and note it.",
            },
            keyTerms: [
              { term: "Repetition method", definition: "A method of measuring a horizontal angle by accumulating the angle n times on the graduated circle and dividing by n, so that graduation errors of the circle average out." },
              { term: "Reiteration method", definition: "A method of measuring several horizontal angles at a station by reading directions to each target from a common zero and differencing the directions." },
              { term: "Vertical angle", definition: "The angle read on the vertical circle between the horizontal plane through the instrument and the line of sight to the target, positive for elevation and negative for depression." },
            ],
            examQuestions: [
              {
                q: "Describe the methods of measuring horizontal angles with a theodolite. Explain repetition and reiteration, and state why both faces are observed.",
                marks: 7,
                outline: [
                  "General method: face left, sight A, read HA; sight B, read HB; angle = HB - HA.",
                  "Repeat on face right and take the mean; the mean cancels collimation, transit-axis and index errors.",
                  "Repetition: accumulate the angle n times on the circle by re-sighting A and B with the lower clamp held.",
                  "After n repetitions the circle reads n times the angle; divide by n to average out graduation errors.",
                  "Reiteration (directional): set the circle to zero on the initial station; read directions to B, C, D.",
                  "Angles AB, BC, CD are obtained by differencing directions; fast for many angles at one station.",
                  "Conclude that both faces are observed in every method to cancel the three principal instrument errors.",
                ],
              },
              {
                q: "Why is an angle observed on both faces of a theodolite?",
                marks: 2,
              },
              {
                q: "Distinguish between the repetition and reiteration methods of measuring horizontal angles.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Vertical angles and theodolite traversing",
            body: [
              "A vertical angle is the angle in the vertical plane between the horizontal plane through the instrument and the line of sight to the target. The theodolite's vertical circle is fixed to the telescope axis and rotates with it; a vernier or microscope reads the angle against an index that should be horizontal when the line of sight is horizontal. The angle to a target above the horizontal is an angle of elevation and is taken positive; the angle to a target below is an angle of depression and is taken negative. The altitude bubble, if fitted, is centred before each reading so that the index is truly horizontal; on instruments without an altitude bubble the vertical circle is read on both faces and the mean cancels the index error.",
              "Theodolite traversing measures the horizontal angles between consecutive legs and the lengths of the legs, computing the bearings from a starting azimuth. At each station the theodolite is centred and levelled; the back station is sighted as the back sight and the fore station as the fore sight; the horizontal angle between them is measured by repetition or reiteration on both faces. The length of each leg is measured by tape, stadia or EDM. From the starting bearing and the measured angles, the bearing of each successive leg is computed; the latitude and departure of each leg follow; the traverse is checked and adjusted as in Unit II, but with much higher precision because the angles are now measured to seconds rather than to minutes.",
              "Vertical angle measurement feeds two engineering computations. The first is the reduction of a slope distance to its horizontal equivalent: horizontal distance equals slope distance times the cosine of the vertical angle, used in EDM and tacheometric work. The second is the computation of the elevation of the target by trigonometric levelling: the difference of elevation between instrument and target equals the horizontal distance times the tangent of the vertical angle, corrected for the height of the instrument and the height of the target signal. Trigonometric levelling is the standard method for transferring elevation across a valley or to a high point where ordinary differential levelling is impractical.",
            ],
            bullets: [
              "Vertical angle: angle in the vertical plane from the horizontal to the line of sight; elevation +, depression -.",
              "Altitude bubble centred before each reading; or read both faces and mean to cancel index error.",
              "Theodolite traverse: horizontal angles at each station + leg lengths; bearings computed from start azimuth.",
              "Latitudes and departures follow; traverse checked and adjusted to seconds precision.",
              "Trigonometric levelling: elevation difference = horizontal distance x tan(vertical angle); corrects for HI and target height.",
            ],
            table: {
              caption: "Vertical angle sign and the computations it feeds.",
              headers: ["Reading", "Sign", "Use"],
              rows: [
                ["target above horizontal", "+ (elevation)", "trig levelling up"],
                ["target below horizontal", "- (depression)", "trig levelling down"],
                ["slope distance reduction", "cos(theta)", "horizontal = slope x cos"],
                ["trig levelling", "tan(theta)", "diff elev = H x tan"],
                ["index error", "FL + FR mean", "cancels"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From vertical angle to elevation by trigonometric levelling",
              caption:
                "Each stage produces one number used by the next; the final RL is checked against a BM.",
              stages: [
                { label: "Measure vertical angle theta", note: "both faces meaned" },
                { label: "Measure horizontal distance H", note: "tape, stadia or EDM" },
                { label: "Diff elev = H tan theta", note: "+ elevation, - depression" },
                { label: "Add HI, subtract target height", note: "RL of target" },
                { label: "Check against BM", note: "close the loop" },
              ],
            },
            callout: {
              type: "tip",
              title: "Centre the altitude bubble",
              body: "On a theodolite fitted with an altitude bubble, the bubble must be centred before every vertical circle reading. A vertical angle read with the bubble off-centre carries the index error directly into the result. If no altitude bubble is fitted, read the vertical angle on both faces and mean the two - the index error cancels.",
            },
            keyTerms: [
              { term: "Angle of elevation", definition: "The vertical angle to a target above the horizontal plane through the instrument, taken as positive in trigonometric levelling." },
              { term: "Trigonometric levelling", definition: "The determination of the difference of elevation between two points from the measured horizontal distance and the vertical angle, used across valleys or to high targets where ordinary levelling is impractical." },
              { term: "Index error", definition: "The error in the vertical circle reading when the line of sight is truly horizontal, eliminated by taking the mean of face-left and face-right readings." },
            ],
            examQuestions: [
              {
                q: "Describe how a vertical angle is measured with a theodolite. Explain the theodolite traverse procedure and how the vertical angle is used in trigonometric levelling.",
                marks: 7,
                outline: [
                  "Vertical angle: angle in the vertical plane between the horizontal through the instrument and the line of sight.",
                  "Elevation positive, depression negative; read on the vertical circle.",
                  "Centre the altitude bubble before each reading; or read both faces and mean to cancel the index error.",
                  "Theodolite traverse: centre and level at each station; measure horizontal angle between back and fore stations.",
                  "Measure leg length by tape, stadia or EDM; compute bearings from a starting azimuth; check by closing error.",
                  "Trigonometric levelling: difference of elevation = horizontal distance x tan(vertical angle).",
                  "Correct for height of instrument and target height; check the resulting RL against a bench mark.",
                ],
              },
              {
                q: "State the difference between an angle of elevation and an angle of depression.",
                marks: 2,
              },
              {
                q: "The horizontal distance to a target is 250 m and the vertical angle is +5 degrees. Compute the difference of elevation by trigonometric levelling.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Tacheometric formulae",
            body: [
              "Tacheometry (or stadia surveying) derives both the horizontal distance and the elevation of a staff station from a single theodolite setup, replacing the chain or tape over rough or obstructed ground. The telescope carries two stadia hairs in the reticule, one above and one below the central cross-hair, equidistant from it. With the staff held vertical at the target, the readings of the top and bottom stadia hairs on the staff give a staff intercept s, the difference of the two readings. The multiplying constant K and the additive constant C of the instrument convert the intercept into distance through the stadia formulae.",
              "For a line of sight inclined at a vertical angle theta to the horizontal, with the staff held vertical, the horizontal distance from instrument to staff is D equals K times s times cos squared theta plus C times cos theta, and the vertical distance between the instrument axis and the central hair reading on the staff is V equals one half of K times s times sin two theta plus C times sin theta. K is about 100 for the modern anallactic telescope and C is zero, so the formulae simplify to D equals 100 s cos squared theta and V equals 50 s sin two theta. The reduced level of the staff station is RL_instrument plus height of instrument plus or minus V minus central hair reading.",
              "The anallactic lens is a convex lens placed between the diaphragm and the objective so that the additive constant C vanishes and the multiplying constant K is fixed at 100; the staff intercept directly multiplied by 100 (and by cos squared theta) gives the distance. The advantage is that the formulae become one-term and free of instrument-specific constants, simplifying field computation. The two principal sources of error are the staff not being held truly vertical (use a bubble on the staff) and the intercept being too short (a small s magnifies the reading error), so a long sight with a clean intercept of around two metres is the optimum.",
            ],
            bullets: [
              "Tacheometry: distance and elevation from a single theodolite setup, no chaining.",
              "Stadia intercept s = top hair reading - bottom hair reading on a vertical staff.",
              "D = K s cos^2(theta) + C cos(theta); V = (K s sin 2theta)/2 + C sin(theta).",
              "Anallactic lens: C = 0, K = 100; simplifies to D = 100 s cos^2(theta), V = 50 s sin 2theta.",
              "RL_staff = RL_instrument + HI +/- V - central hair reading.",
            ],
            table: {
              caption: "Tacheometric formulae for an anallactic telescope (K = 100, C = 0).",
              headers: ["Quantity", "Formula", "Note"],
              rows: [
                ["staff intercept s", "top - bottom reading", "on vertical staff"],
                ["horizontal distance D", "100 s cos^2(theta)", "metres"],
                ["vertical distance V", "50 s sin 2theta", "+ elevation, - depression"],
                ["RL of staff", "RL_inst + HI +/- V - central hair", "metres"],
                ["K and C", "K = 100, C = 0", "anallactic lens"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "From staff intercept to two outputs - D and V",
              caption:
                "A single observation forks into a horizontal distance and a vertical difference.",
              start: "Staff intercept s and angle theta",
              branches: [
                { label: "Horizontal distance D", outcome: "D = 100 s cos^2(theta)", good: true },
                { label: "Vertical distance V", outcome: "V = 50 s sin 2theta", good: true },
                { label: "RL of staff station", outcome: "RL_inst + HI +/- V - central", good: true },
                { label: "Source of error", outcome: "staff not vertical; s too short", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the formulae with constants",
              body: "A tacheometry question is mostly a substitution question. Quote the full formulae first (D = K s cos squared theta plus C cos theta; V equals half K s sin two theta plus C sin theta), then state that for an anallactic telescope K = 100 and C = 0 and substitute. Stating the constants explicitly earns a method mark that protects the arithmetic.",
            },
            keyTerms: [
              { term: "Tacheometry", definition: "The branch of surveying in which the horizontal distance and the elevation of a staff station are determined from the stadia intercept and the vertical angle observed at a single theodolite setup, without chaining." },
              { term: "Staff intercept", definition: "The difference between the readings of the top and bottom stadia hairs on a vertical staff held at the target, denoted s and used in the stadia formulae." },
              { term: "Anallactic lens", definition: "A convex lens between the diaphragm and the objective of a tacheometric telescope that makes the additive constant C zero and fixes the multiplying constant K at 100, simplifying the stadia formulae." },
            ],
            examQuestions: [
              {
                q: "Derive the tacheometric formulae for horizontal distance and vertical distance for an inclined sight on a vertical staff. State the role of the anallactic lens and work out D and V for s = 2.0 m, theta = +5 degrees, K = 100, C = 0.",
                marks: 7,
                outline: [
                  "Telescope has top and bottom stadia hairs; staff intercept s = top - bottom reading.",
                  "From similar triangles D = K s cos^2(theta) + C cos(theta) and V = (K s sin 2theta)/2 + C sin(theta).",
                  "Anallactic lens sets C = 0 and K = 100, giving D = 100 s cos^2(theta), V = 50 s sin 2theta.",
                  "RL of staff = RL_inst + HI +/- V - central hair reading.",
                  "Substitute s = 2.0, theta = +5 degrees: cos(5) = 0.9962, cos^2(5) = 0.9924.",
                  "D = 100 x 2.0 x 0.9924 = 198.48 m; sin 10 = 0.1736, V = 50 x 2.0 x 0.1736 = 17.36 m.",
                  "Conclude that the anallactic lens removes the additive constant and fixes K at 100 for one-term formulae.",
                ],
              },
              {
                q: "State the values of the multiplying and additive constants for an anallactic telescope.",
                marks: 2,
              },
              {
                q: "A staff intercept of 1.5 m is read with a vertical angle of 0 degrees on a vertical staff. Compute the horizontal distance (K = 100, C = 0).",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Stadia surveying and its field procedure",
            body: [
              "Stadia surveying is the field application of the tacheometric formulae. The theodolite is set up, centred and levelled at the instrument station; the height of the instrument (HI) above the station peg is measured with a tape; the staff is held vertical at the target point, using a staff bubble to ensure true verticality. The telescope is sighted on the staff; the readings of the top, central and bottom stadia hairs are booked to the nearest millimetre, and the vertical angle is read on the vertical circle. The staff intercept s and the central hair reading are computed, and D, V and RL follow by the formulae of section 4.4.",
              "Two field conventions reduce error. The staff must be held vertical - the stadia formulae assume it - so a staff bubble or a plumb line is used; a leaning staff of one or two degrees can corrupt the distance by tens of centimetres at 100 metres. The sight length is kept between 50 and 150 metres: shorter than 50 the intercept is small and the reading error dominates, longer than 150 the atmospheric refraction and the difficulty of reading a far staff degrade precision. The instrument is checked for the anallactic condition (K = 100, C = 0) periodically by measuring a known baseline and confirming that 100 s equals the distance for a horizontal sight.",
              "The economy of stadia surveying is its single-setup measurement of distance and elevation over rough ground where chaining is slow or impossible - rocky hillsides, swamps, cultivated fields. It was the standard detail method before the total station, and remains a fallback when electronics fail. Its applications are the same as chain surveying - filling in detail from control - but the detail is denser and faster, and the elevation comes with the distance. Where the ground slopes steeply, a contour map can be drawn entirely from stadia observations by computing the RL of each detail point and interpolating the contours by proportion.",
            ],
            bullets: [
              "Set up theodolite; measure HI above the station peg; hold staff vertical with a staff bubble.",
              "Book top, central and bottom hair readings and the vertical angle.",
              "Compute s = top - bottom; apply D = 100 s cos^2(theta) and V = 50 s sin 2theta.",
              "Keep sight length 50-150 m: shorter corrupts s, longer corrupts refraction and reading.",
              "Verify K = 100 and C = 0 periodically against a known baseline.",
            ],
            table: {
              caption: "Stadia field book extract for two staff stations.",
              headers: ["Station", "Top", "Central", "Bottom", "s", "theta"],
              rows: [
                ["P", "1.500", "1.250", "1.000", "0.500", "+3 deg"],
                ["Q", "2.400", "2.100", "1.800", "0.600", "-2 deg"],
                ["R", "1.700", "1.350", "1.000", "0.700", "0 deg"],
                ["D for P", "100 x 0.500 x cos^2(3)", "=", "49.86 m"],
                ["V for P", "50 x 0.500 x sin(6)", "=", "2.61 m"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Stadia vs chain for detail over rough ground",
              caption:
                "Stadia measures distance and elevation from one setup; chain measures only distance.",
              left: {
                heading: "Stadia surveying",
                items: [
                  "One setup: distance and elevation together",
                  "No chaining over rough or cultivated ground",
                  "Sight length 50-150 m, K = 100",
                  "Staff must be vertical; use staff bubble",
                  "Dense detail, fast, contour-capable",
                ],
              },
              right: {
                heading: "Chain surveying",
                items: [
                  "Distance only; separate level for elevation",
                  "Requires taping along the line",
                  "Limited to small, open, flat sites",
                  "Ranging rods for alignment; pegs for stations",
                  "Sparser detail, slower, no contours without levelling",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Keep the staff vertical and the sight medium",
              body: "Two field rules protect a stadia survey. Use a staff bubble so the staff is truly vertical - a two-degree lean corrupts distance by tens of centimetres at 100 m. Keep sight lengths between 50 and 150 m: under 50 the intercept is too small for precision, over 150 the refraction and reading errors dominate. These two rules, more than any instrument refinement, fix the quality of the work.",
            },
            keyTerms: [
              { term: "Staff bubble", definition: "A small circular bubble attached to a levelling or stadia staff, used to ensure the staff is held truly vertical during observation." },
              { term: "Stadia surveying", definition: "The field application of the tacheometric formulae in which horizontal distance and elevation of a staff station are obtained from the stadia intercept and the vertical angle at a single theodolite setup." },
              { term: "Anallactic condition", definition: "The state of a tacheometric telescope in which the additive constant C is zero and the multiplying constant K is 100, verified periodically against a known baseline." },
            ],
            examQuestions: [
              {
                q: "Describe the field procedure of stadia surveying. State the field rules that control error and the checks on the anallactic condition, and compute D and V for s = 0.500 m, theta = +3 degrees, K = 100, C = 0.",
                marks: 7,
                outline: [
                  "Set up, centre and level the theodolite; measure height of instrument above the station peg.",
                  "Hold the staff vertical at the target with a staff bubble; sight the telescope on the staff.",
                  "Book top, central and bottom hair readings and the vertical angle on both faces.",
                  "Compute s = top - bottom; D = 100 s cos^2(theta); V = 50 s sin 2theta; RL = RL_inst + HI +/- V - central.",
                  "Field rules: keep sight 50-150 m; staff truly vertical; verify K = 100, C = 0 against a baseline.",
                  "Substitute s = 0.500, theta = +3: cos(3) = 0.9986, cos^2(3) = 0.9973; sin(6) = 0.1045.",
                  "D = 100 x 0.500 x 0.9973 = 49.86 m; V = 50 x 0.500 x 0.1045 = 2.61 m.",
                ],
              },
              {
                q: "State the recommended range of sight length in stadia surveying.",
                marks: 2,
              },
              {
                q: "Explain how the anallactic condition (K = 100, C = 0) is verified in the field.",
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
      title: "Modern Surveying",
      summary:
        "Electronics, optics and satellites reshape the field: electronic distance measurement, the total station that combines angle and distance in one instrument, GNSS basics, the remote sensing overview, the GIS that organises the data, and the digital terrain model that turns heights into surfaces.",
      chapter: {
        number: "05",
        title: "Modern Surveying",
        intro:
          "Unit V moves the surveyor from the chain and theodolite to electronics and satellites. EDM measures distance by modulated light or microwave without taping; the total station integrates angle, distance and computation in one instrument; GNSS fixes positions from satellite signals; remote sensing senses the earth from aircraft and satellites; GIS stores, analyses and maps the spatial data; and the digital terrain model turns a grid of heights into a continuous surface for design.",
        inOneBreath:
          "Electronic distance measurement (EDM) sends a modulated electromagnetic wave - infrared, laser or microwave - to a reflector and reads the phase difference or travel time to compute distance to millimetre precision over kilometres; the total station combines an electronic theodolite, an EDM and an onboard computer to measure and record angle, distance and coordinate in one pointing; the global positioning system or GNSS receives ranging signals from a constellation of satellites and computes position by trilateration, with single-receiver accuracy of a few metres and differential or RTK accuracy of centimetres; remote sensing acquires images of the earth from aircraft or satellites in visible, infrared or microwave bands and feeds photogrammetry and image interpretation; a geographic information system (GIS) captures, stores, analyses and displays spatial data in layers - cadastral, topographic, utility, demographic - so that queries and overlays inform decisions; and a digital terrain model (DTM) is a numerical representation of the ground surface as a grid of elevations or a triangulated irregular network, from which contours, profiles, slopes, volumes and perspective views are derived by software for engineering design.",
        sections: [
          {
            number: "5.1",
            title: "Electronic Distance Measurement (EDM)",
            body: [
              "Electronic distance measurement (EDM) sends a modulated electromagnetic wave from an instrument to a reflector and back, and computes the distance from the phase difference of the outgoing and returning wave (for short-range infrared and laser instruments) or from the travel time (for microwave instruments). The distance equals half the wavelength times the integer number of full wavelengths plus the fractional phase, divided by the refractive index of the atmosphere. Modern EDM resolves millimetres over several kilometres of range, replacing the invar tape for baseline measurement and the chain for detail work.",
              "EDM instruments classify by carrier. Electro-optical instruments use infrared or visible laser light and a corner-cube prism reflector; ranges of 1 to 5 km with millimetre precision are typical for engineering work. Long-range laser instruments reach 50 km or more for geodetic control. Microwave instruments use a radio-frequency carrier and an active reflector that re-transmits the signal; they work in fog and light rain but are less precise (about 5 mm + 5 ppm) and need two operators. The total station (next section) integrates an electro-optical EDM with an electronic theodolite, so that one instrument measures both angle and distance.",
              "Atmospheric corrections are essential because the wave speed depends on the refractive index of the air, which varies with temperature, pressure and humidity. The instrument's meteorological correction uses observed temperature and pressure to correct the measured distance by parts per million. A measurement at 30 degrees and 750 mm of mercury needs a correction of about 20 ppm; ignoring it leaves a 20 mm error in every kilometre. Slope reduction converts the measured slope distance to horizontal using the vertical angle, and the height difference can also be computed by trigonometric levelling. The combined effect is that EDM delivers both distance and elevation at a precision that older methods could not match.",
            ],
            bullets: [
              "EDM: modulated EM wave to a reflector and back; distance from phase difference or travel time.",
              "Electro-optical (infrared/laser + prism): 1-5 km, millimetre precision, engineering standard.",
              "Microwave (radio carrier + active reflector): 50 km, works in fog, ~5 mm + 5 ppm.",
              "Atmospheric correction: temperature and pressure correct the refractive index by ppm.",
              "Slope reduction: horizontal = slope x cos(theta); elevation by trigonometric levelling.",
            ],
            table: {
              caption: "EDM types and their characteristics.",
              headers: ["Type", "Carrier", "Range", "Precision"],
              rows: [
                ["Short-range IR", "infrared + prism", "1-5 km", "1-3 mm"],
                ["Long-range laser", "visible laser + prism", "up to 50 km", "1 mm + 1 ppm"],
                ["Microwave", "radio + active reflector", "up to 50 km", "5 mm + 5 ppm"],
                ["Total station", "IR EDM + theodolite", "1-5 km", "1-3 mm + 2 ppm"],
                ["Handheld laser", "visible laser, no prism", "50-300 m", "3-5 mm"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "EDM measurement from signal to corrected distance",
              caption:
                "The wave goes out, returns, and the phase difference plus meteorological correction yields the distance.",
              steps: [
                { label: "Emit modulated EM wave", note: "infrared or laser" },
                { label: "Reflector returns wave", note: "corner-cube prism" },
                { label: "Measure phase difference", note: "fractional wavelength" },
                { label: "Count full wavelengths", note: "integer n" },
                { label: "Apply meteorological correction", note: "T, P -> ppm" },
                { label: "Slope-reduce to horizontal", note: "x cos(theta)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always apply the meteorological correction",
              body: "An EDM distance quoted without temperature and pressure corrections is incomplete. State the meteorological correction explicitly: ppm = (T and P correction), applied as (measured distance times ppm over one million). A 30 degree, 750 mmHg measurement needs about 20 ppm; forgetting it leaves a 20 mm per kilometre error that ruins precise control work.",
            },
            keyTerms: [
              { term: "Electronic distance measurement", definition: "The determination of distance by sending a modulated electromagnetic wave to a reflector and back and computing the distance from the phase difference or travel time of the wave." },
              { term: "Corner-cube prism", definition: "A reflector of three mutually perpendicular glass faces that returns an incoming light wave parallel to its incident direction, used with electro-optical EDM." },
              { term: "Meteorological correction", definition: "The correction applied to an EDM distance to account for the variation of the refractive index of the atmosphere with temperature, pressure and humidity, expressed in parts per million." },
            ],
            examQuestions: [
              {
                q: "Describe the principle of electronic distance measurement. Classify EDM instruments and state the corrections applied to the measured distance.",
                marks: 7,
                outline: [
                  "Principle: a modulated EM wave is sent to a reflector and back; distance from phase difference or travel time.",
                  "Distance = (integer wavelengths + fractional phase) x wavelength / 2, divided by refractive index.",
                  "Electro-optical EDM: infrared or visible laser with a corner-cube prism; 1-5 km, millimetre precision.",
                  "Microwave EDM: radio carrier with an active reflector; up to 50 km, works in fog, ~5 mm + 5 ppm.",
                  "Meteorological correction: temperature and pressure correct the refractive index, applied in ppm.",
                  "Slope reduction: horizontal distance = slope distance x cos(vertical angle).",
                  "Conclude that EDM replaces invar tape and chain, delivering millimetre precision over kilometres.",
                ],
              },
              {
                q: "State the carrier and reflector used in electro-optical EDM.",
                marks: 2,
              },
              {
                q: "An EDM distance of 1000 m was measured at 30 degrees C and 750 mmHg. State the meteorological correction if the correction coefficient is 20 ppm.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Total station",
            body: [
              "A total station integrates an electronic theodolite, an electro-optical EDM and an onboard computer in a single instrument. The theodolite measures horizontal and vertical angles by electronic encoders to one or two seconds; the EDM measures slope distance to a reflector by infrared or laser pulse; the computer combines the two to compute and store the horizontal distance, the elevation difference and the three-dimensional coordinates of the sighted point relative to the instrument station. The data is recorded on an internal memory or a data collector, downloadable to a computer for plotting, so that the field book gives way to the digital file.",
              "The total station's workflow is, in essence: set up and centre over the station, enter the instrument and target heights, key in the station coordinates and a backsight azimuth, sight the backsight to orient, then sight each detail point and press measure. The instrument returns the angle, the slope distance, the horizontal distance, the elevation difference and the point's coordinates, all stored against a point identifier. Coding the point (e.g. tree, kerb, building corner) lets the plotting software draw the right symbol automatically. A trained two-person crew - instrument operator and rodman - can collect several hundred points a day.",
              "Two refinements extend the basic total station. The reflectorless total station emits a pulsed laser that measures distance to any visible surface without a prism, useful for inaccessible facades, quarry faces or dangerous structures; ranges are shorter (a few hundred metres) and precision is a few millimetres. The robotic total station motors the horizontal and vertical axes to track a moving prism carried by the rodman, who operates the instrument by radio from the detail point; one person can then run the whole survey. Modern instruments add two-axis compensators, automatic collimation and wireless data transfer, but the underlying principle - angle plus distance plus computation - is unchanged.",
            ],
            bullets: [
              "Total station = electronic theodolite + EDM + onboard computer, one pointing measures all.",
              "Angle by electronic encoders (1-2 sec); distance by IR or laser EDM; coordinates computed and stored.",
              "Workflow: setup, enter station + backsight, sight detail, press measure - hundreds of points/day.",
              "Reflectorless total station: pulsed laser to any surface, no prism, shorter range.",
              "Robotic total station: motors track a moving prism; rodman operates by radio - one-person survey.",
            ],
            table: {
              caption: "Total station components and their function.",
              headers: ["Component", "Function"],
              rows: [
                ["Electronic theodolite", "horizontal and vertical angles to 1-2 sec"],
                ["Electro-optical EDM", "slope distance to prism, millimetre precision"],
                ["Onboard computer", "compute and store coordinates"],
                ["Two-axis compensator", "correct vertical axis tilt"],
                ["Data collector / radio", "record points; robotic control"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Total station: components stack into one coordinate",
              caption:
                "The angle and distance feed the computer; the computer outputs a 3-D coordinate.",
              tiers: [
                { label: "3-D coordinate of point", note: "X, Y, Z stored" },
                { label: "Onboard computer", note: "combines angle + distance" },
                { label: "Angle (theodolite) + Distance (EDM)", note: "two measurements" },
                { label: "Setup, centring, backsight", note: "instrument station" },
              ],
            },
            callout: {
              type: "tip",
              title: "Code every point",
              body: "A total station survey without point codes produces a forest of unidentifiable coordinates. At each detail point, code it (tree, kerb, building corner, manhole) so the plotting software draws the correct symbol automatically. The seconds saved at every point add up to hours saved in the office - and the codes cannot be reconstructed later from memory.",
            },
            keyTerms: [
              { term: "Total station", definition: "A surveying instrument that integrates an electronic theodolite, an electro-optical EDM and an onboard computer to measure angle and distance and compute and store the three-dimensional coordinates of a sighted point in a single pointing." },
              { term: "Reflectorless total station", definition: "A total station whose EDM emits a pulsed laser that measures distance to any visible surface without a prism, used for inaccessible or dangerous targets." },
              { term: "Robotic total station", definition: "A total station whose horizontal and vertical axes are motorised to track a moving prism, allowing a single operator at the detail point to run the whole survey by radio control." },
            ],
            examQuestions: [
              {
                q: "Describe the total station. State its components and the workflow of a detail survey, and mention the reflectorless and robotic variants.",
                marks: 7,
                outline: [
                  "Define total station: electronic theodolite + EDM + onboard computer in one instrument.",
                  "Electronic theodolite measures angles by encoders to 1-2 sec; EDM measures slope distance to a prism.",
                  "Onboard computer combines the two to compute horizontal distance, elevation difference and X, Y, Z.",
                  "Workflow: setup, enter station and backsight, sight detail, press measure - data stored and downloaded.",
                  "Reflectorless total station: pulsed laser to any surface, no prism, shorter range, for inaccessible targets.",
                  "Robotic total station: motorised axes track a moving prism; rodman operates by radio - one-person survey.",
                  "Conclude that the total station replaces theodolite + chain + level with one instrument and a digital file.",
                ],
              },
              {
                q: "State two advantages of a total station over a conventional theodolite and chain.",
                marks: 2,
              },
              {
                q: "Describe the role of the onboard computer in a total station.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "GPS and GNSS basics",
            body: [
              "The Global Positioning System (GPS) is the United States' constellation of about thirty navigation satellites in medium earth orbit at an altitude of roughly 20200 km, each broadcasting a continuous ranging signal on two L-band frequencies. A receiver on the ground measures the travel time of the signal from each visible satellite and multiplies by the speed of light to obtain a pseudorange; the intersection of four or more pseudoranges fixes the receiver's three-dimensional position and its clock offset. Other constellations - Russia's GLONASS, Europe's Galileo, India's IRNSS - extend the system into a generic Global Navigation Satellite System (GNSS), with more satellites giving better geometry and faster fixes.",
              "Position is obtained by trilateration in three dimensions: each satellite defines a sphere of radius equal to the pseudorange centred on the satellite's known position; four such spheres intersect at one point, the receiver's position. The fourth satellite is needed to solve for the receiver's clock offset, because a cheap receiver clock cannot match the atomic clocks on the satellites. The accuracy of a single receiver (autonomous or navigation mode) is a few metres, limited by satellite geometry (the dilution of precision), ionospheric delay, multipath from nearby surfaces, and the receiver clock. Differential GNSS uses a base station at a known position to compute corrections that are applied to the rover, raising accuracy to sub-metre.",
              "For surveying, two high-precision modes matter. Static GNSS occupies two or more stations simultaneously for an hour or more, post-processing the carrier-phase observations to obtain millimetre-to-centimetre relative positions over baselines of tens of kilometres - the method used for national control. Real-Time Kinematic (RTK) GNSS uses a base station broadcasting carrier-phase corrections to a rover by radio or mobile data, yielding centimetre positions in seconds at the rover, the method used for setting-out and detail survey. RTK has transformed site surveying: a single rover with a pole and a data collector replaces a theodolite and chain for many jobs, though it still needs open sky and a base station or a network (e.g. CORS) within range.",
            ],
            bullets: [
              "GPS: ~30 US satellites at 20200 km broadcasting L-band ranging signals; part of GNSS.",
              "Position by trilateration: 4+ pseudoranges fix 3-D position + clock offset.",
              "Autonomous accuracy: few metres, limited by DOP, ionosphere, multipath, clock.",
              "Differential GNSS (base + rover corrections): sub-metre accuracy.",
              "Static GNSS: mm-cm over tens of km (control); RTK: cm in seconds (setting-out, detail).",
            ],
            table: {
              caption: "GNSS surveying modes and their accuracy.",
              headers: ["Mode", "Time on point", "Accuracy"],
              rows: [
                ["Autonomous (single receiver)", "seconds", "3-10 m"],
                ["Differential GNSS (DGPS)", "seconds to minutes", "0.3-1 m"],
                ["Real-Time Kinematic (RTK)", "seconds", "1-3 cm"],
                ["Static (post-processed)", "1+ hours", "mm-cm over tens of km"],
                ["Network RTK (CORS)", "seconds", "1-3 cm"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "GNSS architecture from satellite to surveyor",
              caption:
                "Each layer adds precision: the rover's accuracy depends on what feeds it from above.",
              layers: [
                { label: "Satellite constellation", note: "GPS, GLONASS, Galileo, IRNSS" },
                { label: "Atmosphere (ionosphere, troposphere)", note: "delays the signal" },
                { label: "Base station / CORS network", note: "computes corrections" },
                { label: "Rover receiver", note: "applies corrections -> position" },
              ],
            },
            callout: {
              type: "exam",
              title: "Trilateration, not triangulation",
              body: "A common slip is to call GNSS positioning 'triangulation'. It is trilateration - the intersection of distances (spheres), not angles. State this explicitly: four or more pseudoranges from satellites with known positions intersect at one point, which is the receiver's position; the fourth satellite also fixes the receiver clock offset. Stating trilateration earns the principle mark.",
            },
            keyTerms: [
              { term: "Global Navigation Satellite System", definition: "A generic term for the combined satellite navigation constellations - GPS (USA), GLONASS (Russia), Galileo (Europe), IRNSS (India) - that broadcast ranging signals for position fixing on the earth." },
              { term: "Trilateration", definition: "The determination of a position from the intersection of three or more measured distances (in GNSS, pseudoranges from satellites), as opposed to triangulation by angles." },
              { term: "Real-Time Kinematic", definition: "A GNSS surveying mode in which a base station broadcasts carrier-phase corrections to a rover by radio or mobile data, yielding centimetre-accuracy positions in seconds at the rover." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of position fixing by GPS. Describe the surveying modes of static GNSS and RTK and state the accuracy of each.",
                marks: 7,
                outline: [
                  "GPS: ~30 satellites at 20200 km broadcast L-band ranging signals; part of GNSS.",
                  "Receiver measures travel time, multiplies by speed of light -> pseudorange to each satellite.",
                  "Position by trilateration: 4+ pseudoranges intersect at one point (the receiver).",
                  "Fourth satellite also fixes the receiver clock offset (cheap clock vs satellite atomic clocks).",
                  "Autonomous accuracy: a few metres, limited by DOP, ionosphere, multipath, clock.",
                  "Static GNSS: simultaneous occupation for an hour or more, post-processed carrier phase, mm-cm over tens of km.",
                  "RTK: base broadcasts carrier-phase corrections to rover, cm accuracy in seconds; used for setting-out and detail.",
                ],
              },
              {
                q: "State the principle of position fixing by GPS.",
                marks: 2,
              },
              {
                q: "Distinguish between autonomous GNSS and RTK GNSS positioning in terms of accuracy and use.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Remote sensing - brief overview",
            body: [
              "Remote sensing is the science of acquiring information about the earth's surface from a distance, using sensors carried on aircraft or satellites that detect reflected or emitted electromagnetic energy. The sensor records the energy in selected bands of the spectrum - visible, near infrared, shortwave infrared, thermal infrared and microwave - and the data is assembled into an image whose pixels carry the radiance in each band. Panchromatic images give high spatial resolution in black and white; multispectral images split the spectrum into a few bands; hyperspectral images split it into hundreds of narrow bands for material identification.",
              "Platforms divide into airborne and space-borne. Airborne platforms - aircraft, drones and helicopters - carry cameras or scanners at low altitude for high-resolution, project-specific imagery; drones have brought aerial photogrammetry within reach of individual surveyors. Space-borne platforms - satellites such as Landsat, Sentinel and the Indian Resourcesat - orbit at hundreds of kilometres and revisit the same ground every few days, providing the repetitive, wide-area imagery used for land cover, agriculture, forestry and disaster monitoring. The choice of platform trades spatial resolution against coverage and revisit frequency.",
              "Two kinds of remote sensing are taught. Passive remote sensing uses the sun's energy reflected by the earth or the earth's own thermal emission; it works only in daylight and clear sky for the reflected bands. Active remote sensing emits its own energy - radar (microwave synthetic aperture radar) or lidar (laser) - and measures the return, so it works at night and through cloud; lidar also directly measures elevations, producing the point clouds that feed digital terrain models. Photogrammetry, the classical branch, reconstructs three-dimensional positions from overlapping photographs taken by a calibrated camera, and remains the basis of most topographic mapping.",
            ],
            bullets: [
              "Remote sensing: earth-surface information from aircraft or satellite sensors at a distance.",
              "Bands: visible, near IR, shortwave IR, thermal IR, microwave; panchromatic, multispectral, hyperspectral.",
              "Platforms: airborne (aircraft, drones) - high resolution, local; space-borne (Landsat, Sentinel) - wide, repetitive.",
              "Passive sensing: sun's reflected energy or thermal emission; daylight and clear sky.",
              "Active sensing: radar and lidar emit their own energy; works at night and through cloud; lidar feeds DTM.",
            ],
            table: {
              caption: "Remote sensing bands and their typical use.",
              headers: ["Band", "Detects", "Use"],
              rows: [
                ["visible", "reflected sunlight", "cultural detail, colour"],
                ["near infrared", "vegetation health", "agriculture, forestry"],
                ["thermal infrared", "surface temperature", "heat loss, water stress"],
                ["microwave (SAR)", "surface roughness, moisture", "all-weather, day/night"],
                ["lidar (laser)", "elevation", "DTM, canopy height"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The remote sensing cycle - acquire, process, interpret, decide",
              caption:
                "Each orbit returns imagery that feeds processing, interpretation and field action.",
              steps: [
                { label: "Sun / sensor emits energy", note: "passive or active" },
                { label: "Earth reflects / emits", note: "spectral signature" },
                { label: "Sensor records radiance", note: "image per band" },
                { label: "Process and rectify", note: "georeferenced image" },
                { label: "Interpret and classify", note: "land cover, change" },
                { label: "Field action", note: "feeds the next acquisition" },
              ],
            },
            callout: {
              type: "tip",
              title: "Distinguish active from passive",
              body: "A 'classify remote sensing' question wants two clear branches. Passive sensors use the sun's reflected energy or the earth's thermal emission - daylight and clear sky required. Active sensors emit their own energy (radar, lidar) and measure the return - work at night and through cloud, and lidar measures elevation directly. Stating both branches with one example each earns the classification marks.",
            },
            keyTerms: [
              { term: "Remote sensing", definition: "The science of acquiring information about the earth's surface from a distance using sensors on aircraft or satellites that detect reflected or emitted electromagnetic energy in selected spectral bands." },
              { term: "Active remote sensing", definition: "A mode of remote sensing in which the sensor emits its own energy (radar or lidar) and measures the return, allowing observation at night and through cloud." },
              { term: "Photogrammetry", definition: "The science of reconstructing three-dimensional positions of points on the earth from overlapping photographs taken by a calibrated camera, the basis of most topographic mapping." },
            ],
            examQuestions: [
              {
                q: "Define remote sensing. Classify it by platform and by sensor type (passive vs active), and state two civil engineering uses.",
                marks: 7,
                outline: [
                  "Define remote sensing: acquiring earth-surface information from aircraft or satellite sensors at a distance.",
                  "Sensors record radiance in bands: visible, near IR, shortwave IR, thermal IR, microwave.",
                  "By platform: airborne (aircraft, drones, helicopters) for high resolution local work; space-borne (Landsat, Sentinel, Resourcesat) for wide repetitive coverage.",
                  "By sensor type: passive uses the sun's reflected energy or the earth's thermal emission; needs daylight and clear sky.",
                  "Active sensors emit their own energy (radar SAR, lidar) and measure the return; work at night and through cloud.",
                  "Lidar directly measures elevations and feeds digital terrain models; photogrammetry reconstructs 3-D from overlapping photos.",
                  "Civil engineering uses: route alignment reconnaissance, site mapping, flood monitoring, landslides, urban growth.",
                ],
              },
              {
                q: "State two differences between passive and active remote sensing.",
                marks: 2,
              },
              {
                q: "Name one airborne and one space-borne remote sensing platform and state one use of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "GIS overview and digital terrain model",
            body: [
              "A geographic information system (GIS) is a computer-based system that captures, stores, analyses, manipulates and displays spatially referenced data. Its distinguishing feature is the layering of data themes - cadastral boundaries, topography, utilities (water, sewer, power), roads, soils, land use, demographics - each as a separate spatial dataset registered to a common coordinate system, so that queries and overlays across themes become possible. A query such as 'parcels within 200 m of a sewer line, on slopes under 10 percent, with area above 500 sq m' returns a map and a table that no single paper map could answer.",
              "GIS data is stored in two models. Vector data represents features as points (a well), lines (a road) and polygons (a parcel), each carrying attribute data in a table - owner, area, material, year of installation. Raster data represents continuous fields as a grid of cells, each carrying one value - elevation, slope, land cover class, rainfall. Most modern GIS work combines the two: a raster digital elevation model underlies vector roads and parcels. Spatial analysis includes overlay (intersection, union), buffer (zones around features), network analysis (shortest path) and surface analysis (slope, aspect, watershed).",
              "A digital terrain model (DTM) is a numerical representation of the ground surface as a regular grid of elevations (a raster) or as a triangulated irregular network (TIN) of irregularly spaced points joined into triangles. From the DTM, software derives contours, slope and aspect maps, profiles along any line, volumes of cut and fill by trapezoidal or prismoidal rules, and perspective or shaded-relief views for visualisation. In civil engineering the DTM feeds road and canal design (alignment optimisation, earthwork volume), dam and reservoir design (capacity curves, submergence area), and urban planning (drainage, viewsheds). DTM data come from photogrammetry, lidar, total-station or GNSS survey.",
            ],
            bullets: [
              "GIS: computer system that captures, stores, analyses and displays spatially referenced data in layers.",
              "Layers: cadastral, topography, utilities, roads, soils, land use - registered to one coordinate system.",
              "Vector model: points, lines, polygons with attribute tables; raster model: grid of cells with one value.",
              "DTM: numerical ground surface as a grid (raster) or TIN; feeds contours, slope, volumes, perspectives.",
              "DTM sources: photogrammetry, lidar, total station, GNSS; used in road, dam, reservoir and urban design.",
            ],
            table: {
              caption: "GIS vector vs raster data and DTM uses.",
              headers: ["Aspect", "Vector", "Raster"],
              rows: [
                ["unit", "point/line/polygon", "grid cell"],
                ["features", "discrete (roads, parcels)", "continuous (elevation)"],
                ["attributes", "table per feature", "one value per cell"],
                ["analysis", "overlay, buffer, network", "slope, aspect, surface"],
                ["DTM form", "TIN of triangles", "grid of elevations"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "GIS data model choice by feature type",
              caption:
                "Two axes: feature discreteness (discrete vs continuous) and analysis (query vs surface).",
              axes: { x: "Discrete vs continuous", y: "Query vs surface analysis" },
              quadrants: [
                { label: "Discrete + query", note: "vector: parcels, roads" },
                { label: "Continuous + query", note: "raster reclassified" },
                { label: "Discrete + surface", note: "TIN of spot heights" },
                { label: "Continuous + surface", note: "raster DTM: slope, aspect" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the layers, then the models",
              body: "A 'what is a GIS' answer should state the layer concept first (cadastral, topography, utilities, roads, soils registered to one coordinate system), then the data models (vector points/lines/polygons with attributes; raster grid of cells). Add one spatial analysis (overlay, buffer) and one DTM use (earthwork volume). Four sentences, full marks.",
            },
            keyTerms: [
              { term: "Geographic information system", definition: "A computer-based system that captures, stores, analyses, manipulates and displays spatially referenced data organised in layers registered to a common coordinate system, enabling queries and overlays across themes." },
              { term: "Digital terrain model", definition: "A numerical representation of the ground surface as a regular grid of elevations or a triangulated irregular network, from which contours, slope, aspect, profiles and volumes are derived by software." },
              { term: "Triangulated irregular network", definition: "A vector representation of a terrain surface as a set of irregularly spaced points joined into triangles, used in a digital terrain model where the relief is variable and a regular grid is wasteful." },
            ],
            examQuestions: [
              {
                q: "Define a geographic information system. Explain the layer concept and the vector and raster data models, and describe how a digital terrain model is used in civil engineering design.",
                marks: 7,
                outline: [
                  "Define GIS: computer system that captures, stores, analyses and displays spatially referenced data.",
                  "Layer concept: cadastral, topography, utilities, roads, soils, land use registered to one coordinate system.",
                  "Vector data model: points (well), lines (road), polygons (parcel), each with an attribute table.",
                  "Raster data model: grid of cells, each carrying one value (elevation, slope, land cover).",
                  "Spatial analysis: overlay (intersection, union), buffer (zones), network (shortest path), surface (slope, aspect).",
                  "Digital terrain model: numerical ground surface as a grid or TIN; derives contours, slope, volumes, perspectives.",
                  "Civil engineering uses: road alignment and earthwork volumes, dam capacity and submergence, urban drainage and viewsheds.",
                ],
              },
              {
                q: "State the difference between vector and raster data in GIS.",
                marks: 2,
              },
              {
                q: "List any three outputs derived from a digital terrain model and one civil engineering use of each.",
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
        "RGPV CE-303 papers spread the seventy-odd marks fairly evenly across the five units, but within each unit the yield is lopsided: levelling RL calculation, traverse adjustment, tacheometric formulae and the chain errors and corrections carry the seven-mark questions. Allocate revision time by topic weight, not by unit size, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Levelling RL calculation by HI and rise-and-fall methods", weight: "about 10-14 marks", note: "Almost guaranteed; drill the field-book format and the arithmetic check until reflexive." },
        { topic: "Chain survey errors and corrections (standard, temp, sag, slope)", weight: "about 8-10 marks", note: "One full 7-mark with all five corrections; signs are the trap." },
        { topic: "Traverse closing error and Bowditch/transit adjustment", weight: "about 8-10 marks", note: "Compute sum-L, sum-D, e, ratio; then distribute by the rule chosen." },
        { topic: "Tacheometric formulae (D = K s cos^2 theta, V = 50 s sin 2theta)", weight: "about 7-9 marks", note: "Derivation plus a numerical substitution; quote K = 100, C = 0." },
        { topic: "Bearings - WCB, RB conversion and FB/BB", weight: "about 7-9 marks", note: "Quadrant rules and the 180 test for local attraction; one worked conversion." },
        { topic: "Theodolite parts and adjustments (temporary and permanent)", weight: "about 6-8 marks", note: "Two lists, clearly separated; name the distinguishing feature." },
        { topic: "Contouring - methods and characteristics", weight: "about 6-8 marks", note: "List six characteristics and the direct vs indirect method." },
        { topic: "Levelling instruments - dumpy, tilting, auto", weight: "about 5-7 marks", note: "One distinguishing feature each, plus one use or weakness." },
        { topic: "Modern surveying - EDM, total station, GNSS, GIS, DTM", weight: "about 8-10 marks", note: "Short questions across Unit V; one 7-mark on total station or GNSS." },
        { topic: "Principles of surveying and classification", weight: "about 5-7 marks", note: "Definitional opener; cite both principles and three classification axes." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - chain surveying", tasks: ["Definition, classification and principles (state both)", "Chain instruments, ranging and offsets (direct and reciprocal)", "Errors and the five corrections - drill signs"] },
        { week: "Week 2", focus: "Unit II - compass surveying", tasks: ["WCB-RB conversion in all four quadrants (10 problems)", "Local attraction detection and correction (one traverse)", "Closing error, precision ratio, Bowditch adjustment"] },
        { week: "Week 3", focus: "Unit III - levelling (definitions and instruments)", tasks: ["Definitions (level surface, RL, BS/FS/IS/CP, HI)", "Dumpy, tilting, auto level - one feature each", "Methods: differential, profile, cross-section, reciprocal"] },
        { week: "Week 4", focus: "Unit III - RL calculation and contouring", tasks: ["HI method on a 6-row field book; rise-and-fall on the same", "Arithmetic check sum BS - sum FS = last RL - first RL", "Contouring - direct vs indirect; six characteristics"] },
        { week: "Week 5", focus: "Unit IV - theodolite and tacheometry", tasks: ["Theodolite parts, temporary and permanent adjustments", "Horizontal angles by repetition and reiteration; vertical angles", "Tacheometric formulae and stadia field procedure (2 numericals)"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["EDM, total station, GNSS (static + RTK), remote sensing, GIS/DTM", "Redo every failed numerical from weeks 1-5", "Two full past-pattern papers under 3-hour timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Re-draw the tacheometric formulae box from memory: D = K s cos^2 theta + C cos theta; V = (K s sin 2theta)/2 + C sin theta; for anallactic K = 100, C = 0 - this single box answers a 7-mark question.",
        "Memorise the quadrant conversion rules: NE RB = WCB; SE RB = 180 - WCB; SW RB = WCB - 180; NW RB = 360 - WCB - one of these is asked almost every paper.",
        "Write out the levelling arithmetic check on the inside cover of your answer sheet: sum BS - sum FS = last RL - first RL = sum rise - sum fall - one line earns a method mark on every levelling question.",
        "Re-list the five chain corrections with signs: standard (+ if Lt > Ln), temperature (+ if T > T0), pull (+ if P > P0), sag (always -), slope (always -) - signs are the most common lost mark.",
        "Sketch the whole-to-part pyramid (primary control -> secondary -> detail -> plot) and label it - a 2-mark principles question with a sketch earns the sketch mark too.",
        "Memorise the contouring characteristics list (closed curves, never cross, close = steep, hill inward rising, depression inward falling, V upstream, U downhill) - six lines, full marks for a short question.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Always draw the figure - a traverse, a level field book, a theodolite setup - before the computation; the figure earns method marks even if the arithmetic later slips.",
        "For numerical questions, write the formula first, then substitute, then compute - a bare answer without the formula loses the method mark that protects the rest.",
        "Quote the constant explicitly in tacheometry (K = 100, C = 0 for an anallactic lens) before substituting; this one line earns a method mark.",
        "State the sign rule before applying a correction: 'a hot chain is longer than standard, so the measured length is too short - add a positive temperature correction' - reasoning earns marks that a number alone does not.",
        "Time-box: 2-mark questions in 3-4 minutes, 3-mark in 5-6 minutes, 7-mark in 14-18 minutes; keep the last 10 minutes for the arithmetical checks on every numerical answer.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Flipping the sign of the temperature or sag correction - a hot chain needs a positive temperature correction; sag is always negative.",
        "Quoting the closing error without the perimeter - '0.5 m' is meaningless; always state the precision ratio 1 / (perimeter / e).",
        "Calling GNSS positioning 'triangulation' - it is trilateration (intersection of distances, not angles); the wrong word loses the principle mark.",
        "Omitting the arithmetic check on a levelling answer - sum BS - sum FS must equal last RL minus first RL; the check earns its own method mark.",
        "Confusing the multiplying and additive constants in tacheometry - K is about 100 and C is zero for an anallactic lens; quoting K = 0 or C = 100 inverts the answer.",
        "Forgetting the quadrant letter on a reduced bearing - writing '30 W' instead of 'S 30 W' loses a mark because the quadrant is part of the answer.",
      ],
    },
  ],
};
