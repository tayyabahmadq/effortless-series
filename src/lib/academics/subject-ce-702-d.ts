/**
 * Academics - RGPV 7th-semester Civil subject: CE-702(D) Structural Design
 * and Drawing (RCC-II).
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce702d: AcademicSubject = {
  id: "ce-702-d",
  code: "CE-702(D)",
  title: "Structural Design and Drawing (RCC-II)",
  semester: "VII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to RCC-II for RGPV: slabs and staircases, columns and footings, retaining walls and water tanks, and the IS 456 / IS 13920 detailing that turns calculations into buildable drawings.",
  description:
    "Five units walk the RCC designer from the slab underfoot - one-way strips, two-way panels with corner torsion, continuity and deflection control - up the stairs (dog-legged, open-well, spiral and cantilever), down the columns into isolated, combined, strap and raft footings, out to retaining walls and water tanks governed by IS 3370 crack control, and finally to the drawing board: detailing rules, bar bending schedules, IS 13920 ductile detailing and joints. Every section pairs the code clause with a worked figure, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#fb7185",
  emoji: "RC",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Design of Slabs",
      summary:
        "The floor system: one-way strips, two-way panels with corner torsion, continuity and its moment coefficients, the IS 456 limit state engine, and the deflection limits that really decide slab thickness.",
      chapter: {
        number: "01",
        title: "Slabs: From One-Way Strips to Deflection Limits",
        intro:
          "Unit I takes the member every building has the most of - the slab. It starts with one-way action where a metre-wide strip bends along the short span, moves to two-way panels that share load to all four edges with corner torsion, then to continuity and its approximate coefficients, the IS 456 limit state workflow that powers every design in this book, and the deflection checks that usually fix the thickness before strength ever gets a vote.",
        inOneBreath:
          "A panel with ly/lx of 2 or more bends one way and is designed as a metre-wide strip; below 2 it bends both ways with clause 24.4 or Annex D coefficients and corner torsion steel; continuity adds negative moments over supports and buys thinner sections through approximate coefficients; limit state design uses 1.5 on loads, 0.446 fck and 0.87 fy, checks Mu against 0.138 fck b d squared and keeps sections under-reinforced; and deflection - span/250 total, span/350 after finishes - is controlled by the basic l/d ratios 7, 20 and 26 with modification factors.",
        sections: [
          {
            number: "1.1",
            title: "One-way slabs: behaviour and design",
            body: [
              "A slab is a flat plate carrying loads perpendicular to its plane, and when the panel is long and narrow it finds an easier way down. If the ratio of longer to shorter span reaches two, more than ninety-five percent of the load travels across the short span, and the panel is called a one-way slab: it bends like a series of unit-wide strips side by side, each strip a simply supported beam of width one metre. The main reinforcement therefore runs along the short span where the bending lives, while nominal distribution steel runs along the long span to hold the main bars in place, distribute concentrated loads, and resist shrinkage and temperature effects.",
              "Design proceeds on a one-metre strip. Loads are self weight (25 kN per cubic metre times thickness), a floor finish of about one kilonewton per square metre, and the live load, all multiplied by the partial factor 1.5. For a simply supported strip the factored moment is w l squared over eight, compared with the limiting moment 0.138 fck b d squared for Fe415. The tension steel then follows from the limit state expression, and bars are chosen to respect the spacing limits: three times effective depth or 300 millimetres for main bars, five times depth or 450 millimetres for distribution steel, with minimum reinforcement of 0.12 percent of the gross area for deformed bars.",
              "Detailing turns numbers into buildable steel. Alternate bars are cranked or bent up at about one-fifth of the span from the supports so the same bars double as top steel over the supports, and every bar must achieve its development length beyond the section where it is fully stressed. Concrete is at least M20 and cover follows the exposure. As a feel for scale, a 3.0 metre clear span carrying a 3 kilonewton per square metre live load needs roughly a 125 millimetre slab with 8 millimetre bars at about 125 millimetre centres - thickness in slabs is usually governed not by strength but by the deflection limits of Section 1.5.",
            ],
            bullets: [
              "One-way action: when ly/lx is 2 or more, the slab bends only along the short span and is designed as a 1 m wide strip.",
              "Main steel along the short span at the bottom; distribution steel along the long span, at least 0.12 percent of gross area for deformed bars.",
              "Spacing limits: main bars 3d or 300 mm, distribution 5d or 450 mm, whichever is smaller.",
              "Loads: self weight + finishes + live load, factored by 1.5; Mu = w l^2/8 for a simply supported strip.",
              "Detailing: crank alternate bars at about l/5 from supports, anchor development length at ends, 20 mm nominal cover for mild exposure.",
            ],
            codeExample: {
              language: "python",
              caption: "One-way slab strip design - the complete limit state arithmetic.",
              code: `# One-way slab strip design - IS 456 limit state (M20, Fe415)
def oneway_slab(clear_span, D, LL, FF=1.0, fck=20, fy=415):
    d = D - 20 - 4                       # 20 mm cover, 8 mm bars
    L = clear_span + d / 1000.0          # effective span, m
    w = 25.0 * D / 1000.0 + FF + LL      # service kN/m per m width
    wu = 1.5 * w
    Mu = wu * L * L / 8.0                # simply supported, kNm
    Mulim = 0.138 * fck * 1000 * d * d / 1e6
    k = 4.6 * Mu * 1e6 / (fck * 1000 * d * d)
    Ast = 0.5 * fck / fy * (1 - (1 - k) ** 0.5) * 1000 * d
    return L, w, Mu, Mulim, round(Ast)

print(oneway_slab(3.0, 125, 3.0))
# -> (3.10, 7.13, 12.85, 28.2, 383): 8 mm at 125 c/c suits (402 mm2/m)`,
            },
            diagram: {
              kind: "flow",
              title: "One-way slab design workflow",
              caption: "Five stations from a guessed depth to a buildable strip.",
              steps: [
                { label: "Assume depth", note: "D = span/25 to span/30 trial" },
                { label: "Load a 1 m strip", note: "self weight + finish + live, x 1.5" },
                { label: "Mu = w l^2/8 vs Mu,lim", note: "0.138 fck b d^2 for Fe415" },
                { label: "Ast from the limit state expression", note: "0.5 fck/fy (1 - sqrt(1 - 4.6Mu/(fck b d^2))) b d" },
                { label: "Detail", note: "spacing, cranks, development length, distribution steel" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Practise the full sequence - loads, Mu, Mu,lim check, Ast, spacing - on a 3 to 3.6 m span with live load 2-4 kN/m2 until it takes under 15 minutes. RGPV asks exactly this as a 7-mark slab design that ends with a reinforcement sketch, and the same arithmetic returns in the stair and footing questions.",
            },
            keyTerms: [
              { term: "One-way slab", definition: "A panel whose longer span is at least twice the shorter span, so it transfers load across the short span alone, like parallel 1 m strips." },
              { term: "Distribution reinforcement", definition: "Steel running parallel to the longer span that ties main bars, distributes loads and resists shrinkage - at least 0.12% for deformed bars." },
              { term: "Effective span", definition: "The span used in design: for a monolithic slab, the clear span plus effective depth, or clear span plus support width, whichever is less." },
            ],
            examQuestions: [
              {
                q: "Design a one-way slab for a clear span of 3.2 m simply supported on 230 mm walls, for a live load of 3 kN/m2 with 1 kN/m2 finish. Use M20 concrete and Fe415 steel with 20 mm cover, and sketch the reinforcement.",
                marks: 7,
                outline: [
                  "Compute loads on a 1 m strip: self weight + finish + live load, factored by 1.5.",
                  "Assume D = span/25 to span/30 (try 125 mm), fix effective span and d.",
                  "Mu = wu l^2/8; check against Mu,lim = 0.138 fck b d^2.",
                  "Compute Ast from the limit state expression with b = 1000 mm.",
                  "Choose bar diameter and spacing within 3d or 300 mm; verify minimum steel 0.12%.",
                  "Provide distribution steel and check its spacing limit (5d or 450 mm).",
                  "Sketch the section: cranked bars, cover, distribution steel.",
                ],
              },
              {
                q: "Distinguish between one-way and two-way slabs with respect to aspect ratio, load transfer and reinforcement.",
                marks: 3,
              },
              {
                q: "State the maximum spacing permitted for main and distribution bars in a slab as per IS 456.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Two-way slabs: coefficients and corner torsion",
            body: [
              "When both dimensions of a panel are comparable - the longer span less than twice the shorter - the slab bends in two directions at once and is called a two-way slab. Both pairs of edges now receive load, a single central deflection is shared by strips spanning each way, and the shorter span still does more of the work, which is why its bars are kept in the outer layer with the larger effective depth. How the load divides depends on the supports: panels simply resting on walls behave differently from restrained panels held down by monolithic beams and neighbours, where negative moments develop over the supports.",
              "IS 456 handles both families with tabulated coefficients. Simply supported panels use the clause 24.4 coefficients, computed for zero Poisson's ratio, with the option of adding mu times the transverse moment for a refined answer; moments follow Mx = alpha-x w lx squared and My = alpha-y w lx squared. Restrained panels use the nine standard edge combinations of Annex D, each giving negative coefficients at the supported edges and positive coefficients at mid-span. Corners that can lift need torsion reinforcement - top and bottom layers both ways, extending about one-fifth of the shorter span from the corner - because simply supported corners tend to curl upward under load.",
              "Detailing a two-way panel means giving every edge what it expects. Continuous edges receive top steel sized from the negative coefficients, discontinuous edges get hooked anchors, and free corners get the torsion mesh regardless. Shear is checked per unit width on each edge using the sharing factors of the same tables. Deflection control uses the shorter span with the basic ratios, and minimum steel follows the slab rules of Section 1.4. Two-way panels are more economical than one-way for square and near-square rooms because both directions contribute strength and stiffness at once.",
            ],
            bullets: [
              "Two-way action: ly/lx < 2; bending in both directions and load travels to all four edges.",
              "Shorter-span bars go in the outer layer (larger d); longer-span bars sit inside them.",
              "Simply supported: clause 24.4 coefficients (zero Poisson); restrained slabs: nine Annex D cases with negative and positive coefficients.",
              "Corner torsion steel: three-quarters of maximum mid-span steel where both edges are discontinuous, half that where one is, none where both are continuous; extend lx/5 each way.",
              "Moments: Mx = alpha-x w lx^2 and My = alpha-y w lx^2; edge shears per metre from the tables' sharing factors.",
            ],
            table: {
              caption: "Corner torsion reinforcement for restrained two-way slabs (IS 456 Annex D).",
              headers: ["Corner condition", "Torsion steel required", "How it is placed"],
              rows: [
                ["Both edges continuous", "None", "Corner is held by adjacent panels; standard steel suffices"],
                ["One edge discontinuous", "Half of the both-discontinuous amount", "Two layers - top and bottom - at the corner"],
                ["Both edges discontinuous", "Three-quarters of maximum mid-span steel", "Top and bottom layers both ways, extending lx/5 each way"],
                ["Simply supported panel corners", "Anchorage against uplift", "Bars hooked or tied down along all four edges"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the design route for a slab panel",
              caption: "Fix the aspect ratio first, then the edge restraint - together they select the method.",
              axes: { x: "Simply supported ... Restrained", y: "ly/lx >= 2 ... ly/lx < 2" },
              quadrants: [
                { label: "One-way simply supported", note: "single-span strip: Mu = w lx^2/8" },
                { label: "One-way continuous", note: "coefficients cut steel and depth" },
                { label: "Two-way simply supported", note: "clause 24.4 coefficients; anchor corners against uplift" },
                { label: "Two-way restrained", note: "Annex D nine cases plus corner torsion steel" },
              ],
            },
            callout: {
              type: "warning",
              title: "The corner everyone forgets",
              body: "Do not omit corner torsion steel in restrained panels: examiners specifically look for the lx/5 extent and the three-quarters rule at free corners. Its absence is the single most common lost mark in two-way slab questions.",
            },
            keyTerms: [
              { term: "Two-way slab", definition: "A panel with ly/lx < 2 that deflects into a dish and shares load to all four edges, with bending in both directions." },
              { term: "Restrained slab", definition: "A two-way slab whose edges are held down by monolithic beams or adjacent panels, developing negative moments and corner torsion." },
              { term: "Torsion reinforcement", definition: "Top-and-bottom mesh at slab corners resisting corner curling and twist - three-quarters of mid-span steel at a free-free corner." },
            ],
            examQuestions: [
              {
                q: "A restrained two-way slab 4.0 m by 5.5 m (lx = 4.0 m) carries a live load of 3 kN/m2 with 1 kN/m2 finish. Describe the complete design procedure per IS 456 Annex D, including the shear check and corner torsion reinforcement.",
                marks: 7,
                outline: [
                  "Classify the panel: ly/lx = 1.375 < 2, restrained - select the matching Annex D edge case.",
                  "Compute the total factored load wu = 1.5 (self weight + finish + live).",
                  "Read alpha-x, alpha-y and the negative coefficients for the matched edge condition.",
                  "Compute Mx, My and support moments; verify Mu,lim and obtain Ast each way.",
                  "Place shorter-span steel in the outer layer; check spacing 3d or 300 mm.",
                  "Check edge shears per metre using the table's sharing factors.",
                  "Detail corner torsion steel: three-quarters of mid-span at discontinuous corners over lx/5.",
                ],
              },
              {
                q: "Why is torsion reinforcement provided at the corners of two-way slabs, and where is it maximum?",
                marks: 3,
              },
              {
                q: "A slab panel measures 3 m by 6.5 m. Does it bend one way or two ways? Justify.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Continuous slabs and moment coefficients",
            body: [
              "When a run of one-way slabs continues over supporting beams, the strips that sag at mid-span must also bend the other way over the supports. Continuity introduces negative moments at the supports and trims the positive moments in the spans: instead of wl squared over eight, a typical interior span sees a smaller figure, which is why continuous slabs can be thinner and lighter on steel than a row of simply supported panels. IS 456 permits an approximate coefficient analysis for three or more roughly equal spans under uniform load, with separate coefficients for dead and live load because pattern loading governs the supports.",
              "The coefficients deliver a design moment for every critical location - end-span mid-span, first interior support, interior-span mid-span, interior support - and each section is then designed exactly like Section 1.4: check the limiting moment, find steel, respect spacing. Top steel over supports is sized from the negative moments, and where adjacent spans differ, the worse end governs. The approximate method carries conditions: at least three spans, spans within about fifteen percent of each other, uniform load, and frames not prone to sway. Moment redistribution of up to about thirty percent is permitted where the neutral axis depth conditions for ductility are met.",
              "Detailing makes or breaks a continuous slab. Top steel over each support extends beyond the theoretical cutoff into both spans, alternate bottom bars crank up to serve the same purpose, and laps land near contraflexure where the steel is barely stressed. Deflection benefits from the continuous basic ratio of 26 instead of 20, and the effective span of monolithic panels runs to the centreline of supports, never more than clear span plus depth. Continuous one-way slabs are the default wherever a beam grid partitions a floor into long strips - classrooms, corridors and parking floors.",
            ],
            bullets: [
              "Continuity converts support regions into hogging zones: negative moment steel sits on top of every support.",
              "Design moments fall to roughly wl^2/10 to wl^2/12 at interior locations - lighter than the wl^2/8 of simple spans.",
              "Approximate coefficients need 3 or more spans, spans within about 15 percent, uniform load, non-sway frames.",
              "Separate dead and live coefficients automatically cover pattern (alternate-span) loading.",
              "Detailing: crank alternate bars, extend top steel beyond cutoffs, lap near contraflexure points.",
            ],
            table: {
              caption: "The value of continuity: order-of-magnitude moments for a uniformly loaded strip.",
              headers: ["System", "Mid-span moment", "Support moment", "Basic l/d"],
              rows: [
                ["Simply supported", "+wl^2/8", "nil", "20"],
                ["Fixed-ended", "+wl^2/24", "-wl^2/12 at each end", "26 (as continuous)"],
                ["Continuous end span", "of order wl^2/10", "of order wl^2/10 at first interior support", "26"],
                ["Continuous interior span", "of order wl^2/12 to wl^2/16", "of order wl^2/10 to wl^2/12", "26"],
                ["Cantilever", "hogging throughout", "-wl^2/2 at support", "7"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Simply supported vs continuous strip",
              caption: "Same span, same load - continuity changes the steel and the depth.",
              left: {
                heading: "Simply supported",
                items: [
                  "sagging +wl^2/8 at mid-span",
                  "steel only at the bottom",
                  "basic l/d ratio 20",
                  "simple formwork and details",
                  "no support-moment capacity",
                ],
              },
              right: {
                heading: "Continuous",
                items: [
                  "reduced sagging in the spans",
                  "top steel over every support",
                  "basic l/d ratio 26 - thinner slab",
                  "economical steel per square metre",
                  "laps and cutoffs need care",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Quote the conditions first",
              body: "If the question says analyse by the IS 456 approximate method, write the applicability conditions before any coefficient: three or more spans, roughly equal lengths (within about 15 percent), uniform load, no significant sway. The conditions are worth marks and tell the examiner you know where the method stops.",
            },
            keyTerms: [
              { term: "Continuous slab", definition: "A slab passing over three or more supports without hinges, developing negative moments over supports and thinner, more economical spans." },
              { term: "Contraflexure", definition: "The section where bending moment changes sign - the preferred spot for laps and curtailment because steel stress there is minimal." },
              { term: "Moment redistribution", definition: "Deliberate shifting of moments away from elastic peak values (up to about 30 percent in IS 456) valid while sections stay ductile." },
            ],
            examQuestions: [
              {
                q: "Explain the approximate analysis of continuous slabs and beams per IS 456: state the applicability conditions, explain why dead and live load coefficients differ, and sketch the reinforcement of a two-span continuous slab.",
                marks: 7,
                outline: [
                  "State the conditions: 3+ spans, lengths within about 15 percent, uniform load, non-sway.",
                  "Explain pattern loading: alternate spans loaded push support moments up - hence separate live coefficients.",
                  "List the critical sections the coefficients cover.",
                  "Design each section: Mu,lim check, Ast, spacing.",
                  "Show top steel over supports and cranked bottom steel in the sketch.",
                  "Note the deflection benefit: basic l/d of 26.",
                  "State the moment redistribution allowance and its ductility condition.",
                ],
              },
              {
                q: "Why can a continuous slab be thinner than a simply supported slab of the same span?",
                marks: 3,
              },
              {
                q: "What is contraflexure and why are reinforcement laps placed near it?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Limit state design of slabs per IS 456",
            body: [
              "Limit state design asks two questions of every member: will it collapse, and will it serve? The collapse question is answered with factored loads - 1.5 times dead plus live - and reduced material strengths: concrete divided by 1.5 and steel by 1.15, giving design stresses of 0.446 fck in the compression block and 0.87 fy for steel. The rectangular stress block with ultimate concrete strain 0.0035 produces a balanced neutral axis depth that depends on steel grade: 0.53d for Fe250, 0.48d for Fe415 and 0.46d for Fe500, from which the limiting moments 0.148, 0.138 and 0.133 times fck b d squared follow.",
              "Sections are deliberately kept under-reinforced - neutral axis below the balanced value - so steel yields before concrete crushes and failure announces itself through large deflections and cracking. The routine for a slab strip is short: assume a depth from the span-to-depth ratios, compute the factored moment, compare with the limiting moment, and solve the steel expression Ast = 0.5 fck/fy (1 - sqrt(1 - 4.6 Mu/(fck b d squared))) b d. Shear rarely governs a slab - depth is chosen by deflection - but the check is still written into every submission to close the argument.",
              "The limit state philosophy also fixes the background rules used across this book. Durability selects concrete grade and cover by exposure; serviceability sets the deflection and crack-control limits; and the same partial factors feed the beam, column, footing and wall designs of Units III and IV. Slab-specific constants worth memorising: minimum steel 0.12 percent for deformed bars, maximum spacing 3d or 300 millimetres for main bars, and design width one thousand millimetres for the strip. Master them once here and every later chapter becomes a variation on the same arithmetic.",
            ],
            bullets: [
              "Partial safety factors: 1.5 on loads; 1.5 on concrete and 1.15 on steel - design stresses 0.446 fck and 0.87 fy.",
              "Ultimate concrete strain 0.0035; xu,max/d = 0.53 (Fe250), 0.48 (Fe415), 0.46 (Fe500).",
              "Mu,lim = 0.148 / 0.138 / 0.133 fck b d^2 for the three grades respectively.",
              "Ast = 0.5 fck/fy [1 - sqrt(1 - 4.6 Mu/(fck b d^2))] b d - the formula behind every flexural design here.",
              "Design b = 1000 mm strip for slabs; keep sections under-reinforced for a ductile, warned failure.",
            ],
            codeExample: {
              language: "text",
              caption: "IS 456 limit state constants worth memorising before the exam.",
              code: `IS 456:2000 limit state constants (flexure)
Partial safety factors : 1.5 (DL + LL)   concrete 1.5   steel 1.15
Design strengths       : 0.446 fck (stress block)   0.87 fy (steel)
Ultimate concrete strain : 0.0035
xu,max/d               : Fe250 0.53   Fe415 0.48   Fe500 0.46
Mu,lim coefficients    : Fe250 0.148  Fe415 0.138  Fe500 0.133
Slab minimum steel (deformed bars) : 0.12% of gross area
Spacing: main <= 3d or 300 mm; distribution <= 5d or 450 mm`,
            },
            diagram: {
              kind: "pipeline",
              title: "The IS 456 limit state assembly line",
              caption: "Every flexural member in this subject passes through the same five stations.",
              stages: [
                { label: "Actions", note: "factored 1.5 (DL + LL)" },
                { label: "Mu at critical section", note: "w l^2/8 or coefficient value" },
                { label: "Compare with Mu,lim", note: "under-reinforced check" },
                { label: "Ast formula", note: "solve for steel area" },
                { label: "Detail and verify", note: "spacing, Ld, deflection, crack control" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise the pair",
              body: "Learn 0.138 fck b d squared and the Ast expression as a pair: writing both correctly earns method marks before any arithmetic, and every examiner checks the under-reinforced comparison as a separate step of its own.",
            },
            keyTerms: [
              { term: "Limit state", definition: "A condition beyond which the structure no longer fulfils its function - collapse (strength) or excessive deflection and cracking (serviceability)." },
              { term: "Partial safety factor", definition: "The factor applied to loads (1.5) or material strengths (1.5 concrete, 1.15 steel) to cover variability in limit state design." },
              { term: "Under-reinforced section", definition: "A section where steel yields before concrete crushes (xu < xu,max), giving a ductile failure with visible warning." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of the limit state method for flexure per IS 456 and derive the ultimate moment of resistance of a singly reinforced rectangular section; hence obtain the limiting moment for Fe415 steel.",
                marks: 7,
                outline: [
                  "List assumptions: stress block 0.446 fck over depth 0.42 xu, steel at 0.87 fy, ultimate strain 0.0035, plane sections remain plane.",
                  "Force equilibrium: 0.36 fck b xu = 0.87 fy Ast.",
                  "Moment about the tendon: Mu = 0.36 fck b xu (d - 0.42 xu).",
                  "Strain compatibility gives xu,max = 0.48d for Fe415.",
                  "Substitute to get Mu,lim = 0.138 fck b d^2.",
                  "State the under-reinforced requirement (xu <= xu,max) and why it is enforced.",
                  "Note the companion values 0.148 and 0.133 for Fe250 and Fe500.",
                ],
              },
              {
                q: "Why must RCC flexural sections be designed under-reinforced?",
                marks: 3,
              },
              {
                q: "Write the partial safety factors for load and materials as per IS 456.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Deflection control in slabs",
            body: [
              "A slab can pass every strength check and still fail its owner: sagging floors crack partitions and tiles, trap water on flat roofs, and alarm occupants long before any strength issue appears. IS 456 therefore limits the final deflection to span over 250, and the deflection occurring after finishes are applied to span over 350 or twenty millimetres, whichever is less. Deflection grows with time as creep and shrinkage act, so the long-term value - not the elastic one - is what must respect the limits. The deflection check, not strength, usually sets slab thickness.",
              "The everyday tool is the empirical span-to-depth ratio: basic values of 20 for simply supported spans, 26 for continuous and 7 for cantilevers, modified upward by factors for low steel stress and for compression steel. The tension factor uses the service steel stress, fs = 0.58 fy times required-over-provided steel, so generous steel or a deeper section buys a bigger allowable ratio; spans beyond ten metres are penalised (ten over span for cantilevers). Two-way panels are checked on the shorter span. When the ratio route is unavailable - unusual geometry, heavy loads, cantilevers - deflection must be computed explicitly.",
              "Computation follows elastic deflection formulae with IS 456 material data. The modulus is Ec = 5000 sqrt(fck); cracked sections use the effective moment of inertia of Annex C, interpolating between gross and cracked values by the Branson expression; and long-term movement multiplies the elastic value by a creep factor of about two. For the standard strip, delta equals 5 w l to the fourth over 384 Ec Ie. Practically, the ratio check catches problems years earlier: if the l/d arithmetic fails, add depth, add compression steel to raise the factor, or make the slab continuous - a reminder that system choices beat steel tonnage.",
            ],
            bullets: [
              "Limits: total deflection <= span/250; movement after finishes <= span/350 or 20 mm.",
              "Basic l/d: 7 cantilever, 20 simply supported, 26 continuous - then apply modification factors.",
              "Tension modification factor uses fs = 0.58 fy (Ast,required / Ast,provided) - more steel, more allowance.",
              "Spans above 10 m: reduce the basic ratios (multiply by 10/span for cantilevers).",
              "Computed route: Ec = 5000 sqrt(fck), effective Ie per Annex C, creep factor about 2 for long term.",
            ],
            codeExample: {
              language: "python",
              caption: "Quick l/d and short-term deflection check for a 3.6 m slab strip.",
              code: `# Service-load deflection of a simply supported slab strip (M20)
fck = 20
Ec = 5000 * fck ** 0.5                  # cl 6.2.2, N/mm2
L, b, D = 3600.0, 1000.0, 180.0         # mm; 1 m strip
w = 25.0 * D / 1000.0 + 1.0 + 3.0       # kN/m service (self + finish + LL)
I_gr = b * D ** 3 / 12.0                # gross I, mm4 (uncracked bound)
delta = 5.0 * w * L ** 4 / (384.0 * Ec * I_gr)
print("l/d = %.1f (basic limit 20)" % (L / D))
print("delta = %.2f mm; limit L/250 = %.1f mm" % (delta, L / 250.0))
print("cracked Ie per Annex C raises delta - keep the margin")`,
            },
            diagram: {
              kind: "fork",
              title: "Outcome of a deflection check",
              caption: "Three exits: accept, improve, or change the system.",
              start: "Compute actual l/d and compare with the modified limit",
              branches: [
                { label: "l/d within limit", outcome: "Accept the depth - deflection is controlled; document the check", good: true },
                { label: "Marginally over", outcome: "Add compression steel or a little depth - the modification factor rises with compression steel", good: false },
                { label: "Far over", outcome: "Change the system: deeper slab, continuous edge or shorter panel - arithmetic alone will not save it", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "The eight-line answer",
              body: "The deflection question almost always wants the two limiting values, the three basic ratios and the two modification factors with the fs formula. Write them as a list before applying numbers - each statement is an independent mark and the list takes ninety seconds.",
            },
            keyTerms: [
              { term: "Span-to-depth ratio", definition: "IS 456's empirical deflection control: actual l/d must not exceed the basic ratio (7, 20 or 26) times modification factors." },
              { term: "Effective moment of inertia", definition: "The Branson-interpolated value between gross and cracked inertia used to compute deflection of cracked members (Annex C)." },
              { term: "Creep", definition: "Time-dependent growth of deflection under sustained load; long-term deflection is roughly twice the elastic value." },
            ],
            examQuestions: [
              {
                q: "Explain the deflection control provisions of IS 456 for flexural members: the limiting deflections, the basic span-to-depth ratios and the modification factors. Illustrate with a simply supported slab of 3.6 m span.",
                marks: 7,
                outline: [
                  "State the two limits: span/250 total; span/350 or 20 mm after finishes.",
                  "State the basic l/d ratios: 7 cantilever, 20 simply supported, 26 continuous.",
                  "Explain the tension modification factor and the fs = 0.58 fy (Ast,req/Ast,prov) formula.",
                  "Explain the compression steel factor.",
                  "Note the penalty for spans above 10 m and the shorter-span rule for two-way slabs.",
                  "Apply: 3600/180 = 20 against the basic 20 - acceptable.",
                  "Add the computed route: Ec, Ie, creep factor, for members outside the ratio method.",
                ],
              },
              {
                q: "State the two permissible deflection limits in IS 456 and when each applies.",
                marks: 3,
              },
              {
                q: "How does compression reinforcement help control deflection?",
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
      title: "Staircase Design",
      summary:
        "Staircase geometry and loads, then the four classic types - dog-legged, open-well, spiral and cantilever - each with its own load path, supports and detailing.",
      chapter: {
        number: "02",
        title: "Staircases: Geometry, Loads and the Four Classic Types",
        intro:
          "Unit II climbs stairs. It begins with the vocabulary and comfort geometry, the loads on plan area and the effective span rules of IS 456 clause 33, then designs the four classic types: the dog-legged stair that packs two flights into a narrow well, the open-well stair that buys light and headroom, the spiral that threads a tight circular opening, and the cantilever stair that floats treads off a spandrel beam.",
        inOneBreath:
          "Comfort is 2R + T near 600 mm with R 150-200 and T 250-300; loads go on plan area - steps 12.5R plus waist 25t/cos theta plus finish and live - and IS 456 clause 33 fixes effective spans; the dog-leg packs two flights around a half landing; the open-well trades floor area for light, headroom and trimmer beams; the spiral cantilevers wedge treads off a newel with the going judged 400 mm out; and the cantilever stair floats treads from a spandrel beam designed for bending, shear and torsion together.",
        sections: [
          {
            number: "2.1",
            title: "Staircase geometry, components and loads",
            body: [
              "A staircase is a slab arranged to climb, and its vocabulary comes first. The tread is where the foot lands, the riser is the vertical face between treads, and the going is the horizontal distance of one step; the waist is the inclined slab thickness under the steps, a flight is a run of steps between landings, and a landing is the platform that breaks or turns the flight. Comfort has been codified from long experience: risers 150 to 200 millimetres, treads 250 to 300, and the stride sum twice the riser plus the tread kept near 600 millimetres - the natural pace of an average person on a slope.",
              "Loading a stair means loading a horizontal plan area. Live load is taken over plan: about 3 kilonewtons per square metre for residential stairs and more for public ones; finish adds another kilonewton. Self weight has two parts - the triangular steps, whose volume per square metre of plan works out to half the riser times twenty-five, and the waist slab, whose thickness becomes t over cos theta when spread over plan. The waist slab then spans longitudinally between floor beams, landing beams or walls, and IS 456 clause 33 fixes how to measure the effective span: the horizontal distance between centre lines of supports, with landings contributing up to a metre or half their span at each end.",
              "Structurally the waist slab is an inclined simply supported or continuous slab. Bending is computed on the horizontal projection with loads per plan area, but the slab depth is measured perpendicular to the slope, and the inclined thrust at the supports has a small axial component usually ignored in design. Steps are cast with the slab and add stiffness, conservatively neglected in calculations. Reinforcement follows slab rules: main steel along the slope at the bottom, distribution across, top steel where flights frame into landings, and a careful junction detail where the sloping bar layer meets the horizontal landing bars.",
            ],
            bullets: [
              "Geometry: riser 150-200 mm, tread 250-300 mm, 2R + T near 600 mm, flight width at least 900-1000 mm for homes.",
              "Headroom: keep about 2.1 m clear vertically above any tread - a plan-level check, not an afterthought.",
              "Loads on plan area: steps = 12.5 x R (kN/m2), waist = 25 x t / cos(theta), plus finish and live load.",
              "Effective span per IS 456 clause 33: horizontal distance between support centrelines; landings add up to 1 m or half their span each end.",
              "Waist slab designed as an inclined slab: bending on the horizontal span, depth measured perpendicular to the slope.",
            ],
            table: {
              caption: "Dimensional comfort rules for stairs.",
              headers: ["Item", "Comfortable range", "Rule of thumb"],
              rows: [
                ["Riser R", "150 - 200 mm", "Residential 150-175; gentler for public stairs"],
                ["Tread T", "250 - 300 mm", "Going measured tread nose to tread nose"],
                ["2R + T", "550 - 700 mm", "Target 600 mm for a natural stride"],
                ["Flight width", "900 - 1500 mm", "Match the landing; 1.0-1.2 m typical in homes"],
                ["Risers per flight", "3 - 12", "Beyond about 12, insert a landing to rest and limit falls"],
                ["Headroom", "about 2.1 m minimum", "Measured vertically above any tread nose"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Load path down a staircase",
              caption: "Every newton entering a stair finds the foundation through this stack.",
              layers: [
                { label: "Steps - tread and riser", note: "receive the foot; add weight to the waist" },
                { label: "Waist slab", note: "the real bending member, spanning between supports" },
                { label: "Landings", note: "half- and quarter-space platforms framing into beams" },
                { label: "Beams, strings and newels", note: "collect flights and landings" },
                { label: "Columns and foundations", note: "carry the stair into the frame" },
              ],
            },
            callout: {
              type: "exam",
              title: "Geometry before loads",
              body: "Write the geometry first - risers, treads, going, waist - before any load computation. RGPV staircase questions award these declarative marks separately, and a wrong riser count poisons every later number in an otherwise perfect answer.",
            },
            keyTerms: [
              { term: "Waist", definition: "The thickness of the inclined slab beneath the steps of a flight, measured perpendicular to the slope." },
              { term: "Going", definition: "The horizontal projection of one step - tread nose to tread nose - and by extension of a whole flight." },
              { term: "Landing", definition: "A level platform between flights providing rest, turning space and a change of direction." },
            ],
            examQuestions: [
              {
                q: "Define the parts of a staircase with a sketch; explain the computation of loads on a waist slab for R = 150 mm, T = 270 mm and waist 140 mm, and state the IS 456 effective span rules for stairs.",
                marks: 7,
                outline: [
                  "Sketch plan and section labelling tread, riser, going, waist, flight, landing.",
                  "State the comfort rules: R 150-200, T 250-300, 2R + T near 600 mm.",
                  "Step load: 25 x R/2 = 1.875 kN/m2 of plan for R = 0.15 m.",
                  "Waist load: 25 x t / cos(theta) kN/m2 spread on plan.",
                  "Add finish and live load; state the design strip per metre width.",
                  "Effective span rules of clause 33 for the support cases.",
                  "Conclude with the moment expression for the waist as an inclined slab.",
                ],
              },
              {
                q: "Why are stair loads computed on horizontal plan area rather than on the sloping surface?",
                marks: 3,
              },
              {
                q: "Why is 2R + T kept close to 600 mm in stair design?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Dog-legged staircase",
            body: [
              "The dog-legged staircase is the workhorse of Indian buildings: two flights rising in opposite directions, one above the other, joined by a half-space landing, with no open gap between them. The stairwell is compact - its plan width is one flight plus the landing depth - which is exactly why it suits residential plans where the stair must climb inside a tight core. All risers of the upper flight sit directly above the lower ones, so headroom works out comfortably when the landing is placed at half the floor height, and a newel or edge beam usually supports the landing at the well side.",
              "Design starts with geometry: divide the floor height into equal risers, split them into two flights, and lay out treads so that the going plus the landing fits the available plan. Each flight's waist slab spans from the floor beam at its foot to the landing beam at its head; if no landing beam exists, the waist and landing act together as one continuous slab whose effective span includes the landing. Loads follow Section 2.1 per plan area, and the waist is checked as an inclined simply supported or continuous slab, typically 120 to 160 millimetres thick for residential spans of 2.5 to 3.5 metres.",
              "Detailing respects the geometry of bending. Main bars run along the slope through the waist into the landing and are anchored their development length into the supporting beams; top steel bridges the kink where flight meets landing, because that junction attracts negative moment; distribution steel runs across the flight. The landing slab itself usually spans across the stairwell between edge beams - or cantilevers from a wall - and gets its own steel. Two load cases matter: both flights loaded together, and the worse single flight loaded when the landing spans between supports.",
            ],
            bullets: [
              "Two flights, opposite directions, one half-space landing between them - no open well.",
              "Plan width = one flight width + landing depth; the most space-efficient common stair.",
              "Waist slab spans floor beam to landing beam; without a landing beam, flight + landing form a continuous slab.",
              "Waist thickness typically 120-160 mm for residential spans of 2.5-3.5 m.",
              "Detail: main bars run flight to landing, top steel at the kink, landing slab designed separately.",
            ],
            codeExample: {
              language: "python",
              caption: "Dog-legged stair: geometry and the factored load per square metre of plan.",
              code: `# Dog-legged staircase - geometry and waist slab load (per m width)
H, R, T = 3.0, 0.15, 0.27          # floor height, riser, tread (m)
n_risers = round(H / R)            # 20 -> 10 per flight
n_treads = n_risers // 2 - 1       # 9 treads per flight
going = n_treads * T               # 2.43 m horizontal
rise = H / 2                       # 1.5 m vertical per flight
flight_len = (going ** 2 + rise ** 2) ** 0.5
cos_a = going / flight_len
waist = 0.14                       # m
steps_w = 25.0 * R / 2.0           # kN/m2 of plan area
waist_w = 25.0 * waist / cos_a     # kN/m2 spread on plan
w = steps_w + waist_w + 1.0 + 3.0  # + finish + live load
wu = 1.5 * w
print("going = %.2f m  factored wu = %.2f kN/m2" % (going, wu))`,
            },
            diagram: {
              kind: "flow",
              title: "Designing a dog-legged staircase",
              caption: "Geometry first, then loads, then the waist slab as an inclined member.",
              steps: [
                { label: "Fix R and T", note: "2R + T near 600 mm" },
                { label: "Split risers into two flights", note: "half-space landing at mid-height" },
                { label: "Load the plan area", note: "steps + waist/cos + finish + live" },
                { label: "Waist slab moment on horizontal span", note: "simple or continuous per supports" },
                { label: "Detail bars through flight and landing", note: "anchor development length everywhere" },
              ],
            },
            callout: {
              type: "exam",
              title: "The classic numbers",
              body: "The standard RGPV problem: floor height 3.0 m, stairwell about 2.0 by 4.0 m, live load 3 kN/m2. Rehearse it end to end - risers, going, span, loads, moment, steel for the waist, section sketch - because the same numbers reappear almost every year with cosmetic changes.",
            },
            keyTerms: [
              { term: "Dog-legged stair", definition: "A stair of two flights in opposite directions joined by a half-space landing, stacked within a single compact stairwell." },
              { term: "Half-space landing", definition: "A landing deep enough (usually one flight width) to reverse the direction of travel by 180 degrees." },
              { term: "Flight", definition: "A continuous run of steps between two landings, or between a floor and a landing." },
            ],
            examQuestions: [
              {
                q: "Design a dog-legged staircase for a floor-to-floor height of 3.0 m in a stairwell 2.0 m wide and 4.0 m long. Take R = 150 mm, T = 250 mm, live load 3 kN/m2, M20 concrete and Fe415 steel.",
                marks: 7,
                outline: [
                  "Risers = 3000/150 = 20, so 10 per flight; treads per flight = 9.",
                  "Going = 9 x 250 = 2250 mm; check it fits with the landing in the 4.0 m well.",
                  "Fix waist (try 140-150 mm) and the effective span including the landing.",
                  "Compute loads per plan area: steps, waist over cos theta, finish, live load - then x 1.5.",
                  "Mu for the waist strip; check Mu,lim; obtain Ast along the slope.",
                  "Distribution steel, development-length anchorage into beams, top steel at the kink.",
                  "Sketch the flight section and the landing detail.",
                ],
              },
              {
                q: "Differentiate a dog-legged staircase from an open-well staircase with sketches.",
                marks: 3,
              },
              {
                q: "What structural role does the half-space landing play in a dog-legged stair?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Open-well staircase",
            body: [
              "An open-well staircase surrounds a void. Two flights climb along the walls of a larger stairwell with an open well between them - or three flights wrap an L- or U-shaped well around quarter-space landings. The well buys light, ventilation and headroom, makes the stair a feature of the space, and eases movement on the landings; the price is a bigger stairwell and more complicated support geometry, because flights and landings now frame into newel posts, trimmer beams and edge beams around the void. Public buildings favour it precisely for the light and the capacity.",
              "The analysis follows IS 456 clause 33 with more attention to the effective span. Where a flight lands on a landing that spans at right angles to the flight, the effective span is measured from the kink between flight and landing; where the supporting landing spans parallel with the risers, the flight picks up half the landing span or a metre at that end. Landings supported on newels and trimmer beams are designed as beams and slabs in their own right, and the quarter-space landings of three-flight stairs behave as horizontal cantilevers or corner panels depending on their supports.",
              "Detailing centres on the supported edges. Each flight's bars anchor into whatever receives it - floor beam, landing beam or trimmer - and the trimmer beams that carry half landings over the well need closed stirrups because they work in combined bending and torsion. The balustrade and the well edge demand edge beams or upstands for safety and stiffness. Headroom over the lower flight, checked at the well edge, usually controls the landing position in three-flight arrangements. Otherwise the design arithmetic is that of Sections 2.1 and 2.2 - the types differ in geometry and supports, not in physics.",
            ],
            bullets: [
              "Open well between flights: better light, headroom and appearance at the cost of stairwell area.",
              "Common patterns: two flights around a rectangular well, or three flights with quarter-space landings.",
              "Effective span per clause 33 depends on whether the supporting landing spans parallel or perpendicular to the flight.",
              "Newel posts and trimmer beams carry landings over the well - design them for bending and torsion.",
              "Check headroom over the lower flight at the well edge; it often fixes the landing position.",
            ],
            table: {
              caption: "Dog-legged vs open-well: choosing the stair.",
              headers: ["Aspect", "Dog-legged", "Open-well"],
              rows: [
                ["Stairwell plan", "narrow and long: one flight + landing width", "wider: flights separated by a well"],
                ["Flights", "2, opposite directions", "2 or 3 with quarter-space landings"],
                ["Light and view", "closed core, relies on openings", "open well lights both flights"],
                ["Supports", "beams at top, bottom and landing", "newels, trimmer beams, edge beams around the well"],
                ["Best for", "residential cores, tight plans", "lobbies, public and institutional buildings"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Dog-legged vs open-well stairs",
              caption: "Same physics, different geometry - the well changes light, headroom and supports.",
              left: {
                heading: "Dog-legged",
                items: [
                  "two flights stacked, no well",
                  "half-space landing reverses travel",
                  "compact narrow stairwell",
                  "landing between edge beams",
                  "cheapest to build and detail",
                ],
              },
              right: {
                heading: "Open-well",
                items: [
                  "open void between flights",
                  "quarter-space landings at corners",
                  "wider, brighter stairhall",
                  "newel and trimmer beams at the well",
                  "three-flight variants for tall storeys",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Name the supports first",
              body: "Sketch the plan and name every support before computing any span. In open-well questions marks are lost by silently assuming a landing beam where the drawing shows only a newel - the support layout defines the spans, and the examiner checks that you read it.",
            },
            keyTerms: [
              { term: "Open-well stair", definition: "A stair arrangement leaving an uncovered well between flights or around which flights turn, improving light and headroom." },
              { term: "Quarter-space landing", definition: "A small corner landing, about a quarter of a full landing, turning a flight 90 degrees in three-flight stairs." },
              { term: "Trimmer beam", definition: "A beam inserted to carry a landing or well edge that would otherwise be unsupported." },
            ],
            examQuestions: [
              {
                q: "Describe an open-well staircase with a plan and section; explain the effective span rules of IS 456 clause 33 for flights supported on landings, and describe the design of the trimmer beam.",
                marks: 7,
                outline: [
                  "Draw plan and section; label flights, well, quarter- and half-space landings.",
                  "State when an open-well is chosen over a dog-leg.",
                  "Clause 33: landing spanning parallel to risers - flight gains half the landing span or 1 m.",
                  "Clause 33: landing spanning perpendicular - span measured from the flight-landing kink.",
                  "Design the flight waist slab with the resulting span and loads.",
                  "Design the trimmer beam for bending plus torsion with closed stirrups.",
                  "Check headroom over the lower flight at the well edge.",
                ],
              },
              {
                q: "What are the advantages and disadvantages of an open-well stair over a dog-legged one?",
                marks: 3,
              },
              {
                q: "What is a quarter-space landing and where is it used?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Spiral staircase",
            body: [
              "A spiral stair climbs around a central column: wedge-shaped treads radiate from a newel post, the plan is a circle, and the balustrade traces a helix. It answers the tightest plans - a 1.5 to 2.4 metre circle where a dog-leg would never fit - and it doubles as an architectural feature. Because the treads are triangular, the going varies continuously across the width, so the comfort geometry of Section 2.1 is judged on the walking line, conventionally about four hundred millimetres from the newel, where a person actually plants their foot.",
              "Structurally the spiral is a kit of cantilevers. Each tread fixes into the newel and cantilevers to its free edge; the newel post - often an RCC or steel circular column - collects all the tread moments and axial loads and delivers them to the foundation. Treads are designed for the distributed live load and, more severely, for a concentrated person load at the outer tip; the root section is checked for bending and the connection for pull-out. The geometry fixers are the risers per revolution - usually twelve to sixteen - which set both the going at the walking line and the headroom per turn.",
              "Design steps are short but unforgiving. Choose the circle diameter and newel size; set the riser at 150 to 200 millimetres, steeper tolerated only for private stairs; fix risers per revolution so the walking-line going reaches at least about 220 to 250 millimetres; verify headroom between successive turns; design the tread as a cantilever bending about the newel; then design the newel column for the accumulated moment and axial load with its foundation. Precast treads on a steel newel are common on sites; cast-in-place versions need careful starter-bar detailing. Escape routes and crowded public buildings generally demand conventional stairs - spirals are for convenience, not crowds.",
            ],
            bullets: [
              "Wedge treads radiate from a newel; the plan is a circle of about 1.5-2.4 m diameter.",
              "Going is judged on the walking line, roughly 400 mm from the newel post.",
              "Risers per revolution (typically 12-16) fix the tread angle, the walking-line going and the headroom.",
              "Each tread is a cantilever: distributed live load plus a concentrated load at the free tip governs the root.",
              "The newel absorbs every tread moment plus axial load - design it as a column and detail its base.",
            ],
            table: {
              caption: "Spiral stair geometry at a glance.",
              headers: ["Quantity", "Typical value", "What it governs"],
              rows: [
                ["Circle diameter", "1.5 - 2.4 m", "available opening and tread width"],
                ["Newel diameter", "150 - 300 mm", "tread fixity and column capacity"],
                ["Riser", "150 - 200 mm", "steepness; private stairs may take more"],
                ["Risers per revolution", "12 - 16", "going at the walking line and headroom"],
                ["Walking line", "400 mm from newel", "where going and comfort are measured"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "Spiral geometry: tread angle and going at the walking line.",
              code: `# Spiral stair geometry - one revolution of a 2.6 m circle
dia, newel = 2.6, 0.30                # overall dia, newel dia (m)
r_walk = newel / 2.0 + 0.40           # walking line, 400 mm from newel
treads_per_rev = 12
angle = 360.0 / treads_per_rev        # 30 degrees per tread
going = 2.0 * 3.1416 * r_walk / treads_per_rev
print("tread angle = %.0f deg" % angle)
print("going at walking line = %.0f mm" % (going * 1000.0))
# going near 288 mm - comfortable; verify headroom per revolution too`,
            },
            diagram: {
              kind: "pipeline",
              title: "Spiral stair design stages",
              caption: "From circle geometry down to the newel column base.",
              stages: [
                { label: "Choose circle and newel", note: "diameter fits the plan opening" },
                { label: "Set risers per revolution", note: "12-16 typical" },
                { label: "Check going at walking line", note: "400 mm from newel; about 220-250 mm minimum" },
                { label: "Design treads as cantilevers", note: "distributed + tip point load" },
                { label: "Design newel and base", note: "column with accumulated moments" },
              ],
            },
            callout: {
              type: "warning",
              title: "The tip load decides",
              body: "Never design a spiral tread for the distributed live load alone: the concentrated person at the free edge produces the larger root moment, and examining load cases rather than average loads is exactly what separates a design from a check.",
            },
            keyTerms: [
              { term: "Spiral stair", definition: "A helical stair of tapered treads radiating from a central newel column, occupying a circular plan." },
              { term: "Newel post", definition: "The central column of a spiral stair that supports every tread and collects their moments." },
              { term: "Walking line", definition: "The path along which a user actually climbs - about 400 mm from the newel on a spiral - where the going is measured." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and design of a spiral staircase for a floor height of 3.0 m in a 2.6 m circular opening: geometry at the walking line, tread design as a cantilever, and the newel column.",
                marks: 7,
                outline: [
                  "Risers: 3000/150 = 20; choose risers per revolution (say 12-14).",
                  "Tread angle = 360/risers per revolution; going at walking line 400 mm from newel.",
                  "Check going about 220-250 mm minimum and headroom per revolution.",
                  "Tread loads: self weight + finish + live, plus a person load at the free tip.",
                  "Root moment about the newel; tread depth and steel at the root.",
                  "Newel design: accumulated tread moments plus axial load, as a column.",
                  "Sketch plan and tread section with anchorage into the newel.",
                ],
              },
              {
                q: "Why is the going of a spiral tread measured at the walking line and not at the outer edge?",
                marks: 3,
              },
              {
                q: "What is the structural role of the newel in a spiral stair?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Cantilever (spandrel) staircase",
            body: [
              "A cantilever staircase deletes the waist slab: each step becomes an independent cantilever, fixed at a support and projecting freely into the stairwell. The support is either a wall, into which the treads are anchored by starter bars, or - far more common in RCC - a spandrel (stringer) beam cast along the slope at the side of the flight, from which the treads cantilever. The result feels light, can be open-risered, and leaves the stairwell visually clear, which is why architects reach for it in residences and showrooms. Structurally, every tread is its own little problem.",
              "Each tread carries its self weight and finish, the plan live load, and - decisively - a concentrated person load at the free end applied at the worst position. The design moment at the root is w l squared over two plus P l for a tread of projection l, and the critical section sits at the face of the wall or spandrel. Tread thickness at the root runs about 80 to 100 millimetres with the main steel on top, because cantilever tension sits on top. Deflection and vibration, not strength, usually size the member: the cantilever l/d limit of seven keeps the bounce in check.",
              "When the treads cantilever from a spandrel beam, the problem moves: the beam receives a torsional moment from every tread plus vertical load and must be designed as a member in combined bending, shear and torsion, with closed stirrups and longitudinal torsion steel properly anchored at the ends. Where treads build into a masonry wall, starter bars or dovetail sockets must develop the moment, and the wall itself must be able to resist the accumulated pull - a genuine check, not a footnote. Precast treads on steel stringers are the dry variant of the same idea.",
            ],
            bullets: [
              "No waist slab: each tread is a separate cantilever from a wall or spandrel beam.",
              "Root moment = w l^2/2 + P l; the concentrated tip load usually governs over the distributed live load.",
              "Main steel on top of the tread at the root - the tension face of a cantilever.",
              "Deflection and vibration set the size: cantilever l/d limit 7; root thickness typically 80-100 mm.",
              "The spandrel beam sees bending + shear + torsion: closed stirrups, torsion steel, end anchorage.",
            ],
            table: {
              caption: "Checks that make or break a cantilever tread.",
              headers: ["Check", "Requirement", "Why it matters"],
              rows: [
                ["Root moment", "w l^2/2 + P l at the support face", "sizes the tread and its top steel"],
                ["Tip point load", "person at the free edge", "worst case for moment and for bounce"],
                ["Deflection", "l/d <= 7 for cantilevers", "thin treads feel alive; the limit controls bounce"],
                ["Anchorage", "starter bars with Ld into spandrel or wall", "pull-out is the silent failure mode"],
                ["Spandrel torsion", "closed stirrups + torsion steel", "every tread twists the beam a little more"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Cantilever tread: three verdicts",
              caption: "The check sequence ends in accept, thicken or re-think.",
              start: "Analyse a tread cantilevering l from its support",
              branches: [
                { label: "Root moment and anchorage OK", outcome: "Accept the tread; detail top steel and Ld starter bars into the support", good: true },
                { label: "Bounce or deflection excessive", outcome: "Thicken the root, shorten the projection, or move to a waist-slab stair", good: false },
                { label: "Support cannot resist pull-out or torsion", outcome: "Upgrade to a spandrel beam designed for torsion - masonry bearing alone is not a fix", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Top face, not bottom",
              body: "Cantilever treads crack on top at the support, so the main steel sits on top and anchors into the support. Drawing a cantilever tread with bottom steel is the classic sketch error examiners penalise first - and the one sites notice fastest.",
            },
            keyTerms: [
              { term: "Cantilever tread", definition: "An individual stair step fixed at one end and free at the other, designed for root moment w l^2/2 + P l with steel on top." },
              { term: "Spandrel beam", definition: "The sloping side beam of a stair from which treads cantilever, designed for bending, shear and torsion together." },
              { term: "Starter bar", definition: "Reinforcement left projecting from a support into a later pour - here the bars anchoring cantilever treads." },
            ],
            examQuestions: [
              {
                q: "Design a cantilever stair tread with a projection of 1.0 m for a residential stair: live load 3 kN/m2 plus a 1.5 kN person at the tip, M20 concrete, Fe415 steel. Check the root depth against the cantilever l/d limit and sketch the tread steel.",
                marks: 7,
                outline: [
                  "Loads per tread: self weight + finish + distributed live, plus 1.5 kN at the free tip.",
                  "Root moment = w l^2/2 + P l at the support face.",
                  "Trial root depth from l/d = 7: about 140 mm at the root, tapering to the tip.",
                  "Check Mu against Mu,lim; compute Ast placed on top at the root.",
                  "Anchorage of top bars into the spandrel beam (development length).",
                  "Distribution steel and the deflection/vibration note.",
                  "Sketch the tread section showing top steel and starter bars.",
                ],
              },
              {
                q: "Why is the spandrel beam of a cantilever stair designed for torsion?",
                marks: 3,
              },
              {
                q: "State the basic span-to-depth ratio for cantilever slabs per IS 456.",
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
      title: "Columns and Footings",
      summary:
        "Axial members and their foundations: short and long classification, uniaxial and biaxial bending with SP 16 and Bresler, isolated pads with their shear sections, combined and strap solutions, and rafts for weak soils.",
      chapter: {
        number: "03",
        title: "Columns and Footings: From Section to Soil",
        intro:
          "Unit III drops from the top of the frame to the ground. Columns are classified short and long by slenderness, designed for axial load and for uniaxial and biaxial bending with the help of SP 16 interaction charts and Bresler's reciprocal equation, and then spread onto the soil through isolated pads, combined and strap footings when the pads crowd, and finally rafts when the soil runs out of strength.",
        inOneBreath:
          "Short columns (le/D < 12) take Pu = 0.4 fck Ac + 0.67 fy Asc once the minimum eccentricity l/500 + D/30 stays under 0.05D; long columns add slenderness moments; moments about one axis are read from SP 16 charts, two axes from Bresler's 1/Pu = 1/Pux + 1/Puy - 1/Pu0; isolated footings spread load against the SBC and are checked for punching at d/2, one-way shear at d and bending at the face; combined and strap footings unify or couple eccentric pads; and rafts cover the whole plan when soil, spacing or settlement demand it.",
        sections: [
          {
            number: "3.1",
            title: "Short and long columns",
            body: [
              "A column transmits load along its axis, but how it fails depends on its slimness. IS 456 classifies by slenderness: a column is short when both effective-length-to-least-lateral-dimension ratios stay below twelve, and long when either reaches twelve. Short columns fail by crushing of concrete and yielding of steel - the materials govern - while long columns bow sideways and fail by buckling at loads the materials could otherwise carry, so slenderness must be designed for explicitly. The effective length depends on end restraint: about 0.65 times the clear height for ends effectively held and restrained, 1.0 for hinged-hinged, and 2.0 for the cantilever case.",
              "Short columns under near-axial load get a generous formula. IS 456 requires every column to be designed for a minimum eccentricity of unsupported length over five hundred plus least lateral dimension over thirty; when this stays within five percent of the lateral dimension, the member may be designed axially as Pu = 0.4 fck Ac + 0.67 fy Asc. Long columns attract additional moments from their own deflection - the P-delta effect - which IS 456 clause 39.7 converts into extra eccentricity; braced frames, closer ties and stiffer sections keep the effect small.",
              "Detailing rules protect the axial path. Longitudinal steel runs 0.8 to 4 percent of gross area (up to 6 percent only where mechanical splices avoid congested laps), with at least four bars in a rectangular column and six in a circular one, none thinner than twelve millimetres. Ties hold the cage together: diameter at least a quarter of the largest longitudinal bar and not less than 6 millimetres in practice, pitched at the least of the least lateral dimension, sixteen times the smallest bar and three hundred millimetres. Helically reinforced columns earn a five percent strength bonus because the spiral confines the core.",
            ],
            bullets: [
              "Short: le/D < 12 on both axes; long: 12 or more - crushing versus buckling.",
              "Effective length factors: about 0.65 fixed-fixed (recommended), 1.0 hinged-hinged, 2.0 fixed-free.",
              "Minimum eccentricity: l/500 + D/30; if <= 0.05D, use Pu = 0.4 fck Ac + 0.67 fy Asc.",
              "Longitudinal steel 0.8-4% of gross area; at least 4 bars (rectangular) or 6 (circular), diameter >= 12 mm.",
              "Ties: diameter >= max(6 mm, quarter of largest bar); pitch <= least(lateral dimension, 16 x smallest bar, 300 mm).",
            ],
            codeExample: {
              language: "python",
              caption: "Short-column axial capacity and the minimum eccentricity check (M25, Fe415).",
              code: `# Short-column axial capacity - IS 456 cl 39.3 (M25, Fe415)
fck, fy = 25, 415
b, D, L = 400.0, 400.0, 3.2          # mm, mm, unsupported length (m)
Asc = 8 * 3.1416 * 20.0 ** 2 / 4.0   # 8 bars of 20 mm dia
Ac = b * D - Asc
Pu = 0.4 * fck * Ac + 0.67 * fy * Asc      # N
emin = L * 1000.0 / 500.0 + D / 30.0       # mm
print("Asc = %.0f mm2, Pu = %.0f kN" % (Asc, Pu / 1000.0))
print("emin = %.1f mm vs 0.05D = %.1f mm" % (emin, 0.05 * D))
# emin just under 0.05D -> axial formula is legitimate here`,
            },
            table: {
              caption: "IS 456 column essentials at a glance.",
              headers: ["Item", "Requirement"],
              rows: [
                ["Minimum steel", "0.8% of gross area"],
                ["Maximum steel", "4% (6% only with mechanical splices to avoid lap congestion)"],
                ["Minimum bars", "4 rectangular; 6 circular; diameter >= 12 mm"],
                ["Tie pitch", "Least of: least lateral dimension, 16 x smallest bar dia, 300 mm"],
                ["Tie diameter", "Larger of 6 mm and one-quarter of the largest longitudinal bar"],
                ["Helical columns", "Pitch 25-75 mm; axial strength may be taken 5% higher"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Short vs long columns",
              caption: "The same concrete and steel, two utterly different personalities.",
              left: {
                heading: "Short column (le/D < 12)",
                items: [
                  "fails by material crushing",
                  "designed with the axial formula",
                  "full section carries the load",
                  "ties are nominal confinement",
                  "most building columns",
                ],
              },
              right: {
                heading: "Long column (le/D >= 12)",
                items: [
                  "fails by buckling sideways",
                  "extra P-delta moments per clause 39.7",
                  "effective length governs capacity",
                  "needs bracing or a bigger section",
                  "stilts and slender pedestals"],
              },
            },
            callout: {
              type: "exam",
              title: "Declare the class first",
              body: "Write the classification test with numbers before designing: compute le/D for both axes, declare the column short or long, and only then pick the formula. Skipping the declaration costs method marks even when every later number is right.",
            },
            keyTerms: [
              { term: "Slenderness ratio", definition: "Effective length divided by least lateral dimension; below 12 the column is short, at or above 12 it is long." },
              { term: "Effective length", definition: "The length of an equivalent pin-ended column that buckles at the same load - fixed by end restraint from 0.65 to 2.0 times the clear height." },
              { term: "Minimum eccentricity", definition: "l/500 + D/30: the accidental eccentricity every axially loaded column must be designed for per IS 456." },
            ],
            examQuestions: [
              {
                q: "Classify columns as short and long per IS 456. Design a short column 400 x 400 mm for an axial service load of 1500 kN with M25 concrete and Fe415 steel: check minimum eccentricity, find the steel, and detail the ties.",
                marks: 7,
                outline: [
                  "State the rule: le/D < 12 both axes = short.",
                  "Factored load Pu = 1.5 x 1500 = 2250 kN.",
                  "Minimum eccentricity = l/500 + D/30; compare with 0.05D.",
                  "Pu = 0.4 fck Ac + 0.67 fy Asc; solve for Asc.",
                  "Check steel percentage within 0.8-4%; choose 8 bars of a suitable diameter.",
                  "Tie diameter and pitch per IS 456; sketch the section.",
                  "Note the P-delta treatment had the column been long.",
                ],
              },
              {
                q: "Why must every column be designed for minimum eccentricity even when the load looks axial?",
                marks: 3,
              },
              {
                q: "State the IS 456 requirements for lateral ties in columns.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Columns in uniaxial and biaxial bending",
            body: [
              "Real columns rarely see pure axial load. Beams frame into them eccentrically, frames sway, and moments arrive about one axis or both. A column carrying a moment about a single axis is in uniaxial bending; corner and edge columns of a framed building collect moments from both directions and are in biaxial bending. The full behaviour is a failure surface in three dimensions - axial capacity plotted against moments Mx and My - that shrinks smoothly from the pure axial point as either moment grows, and the designer's job is to place the point (Pu, Mux, Muy) safely inside that surface.",
              "Design runs on interaction diagrams: curves of Pu against M for a fixed section, steel percentage and effective cover, published as chart families in SP 16 for the standard d-prime-over-D ratios and p-over-fck values. For uniaxial bending, compute Pu/(fck b D) and Mu/(fck b D squared), pick the d'/D family, and read the required p; symmetric bar arrangements keep the section usable for reversed moments. For biaxial bending, Bresler's reciprocal method assembles the answer from three uniaxial capacities: one over Pu equals one over Pux plus one over Puy minus one over Pu-zero, each read from the charts.",
              "Where the charts run out - asymmetric sections, high eccentricity - the column is designed as a beam for the dominant moment, with the axial load helping or hurting as it does, and IS 456 clause 39.6 permits simplified checks when eccentricities on both axes are small. Detailing matters as much as analysis: bar congestion at beam-column joints must be avoided, laps go just above floor levels where moments are small, and in seismic zones the ends of every column receive special confining ties per IS 13920, the subject of Section 5.4.",
            ],
            bullets: [
              "Uniaxial: moment about one axis only; biaxial: moments about both - typical corner columns.",
              "Interaction diagrams plot Pu against M for fixed section, d'/D and p/fck - SP 16 publishes the families.",
              "Uniaxial route: compute Pu/(fck b D) and Mu/(fck b D^2), select the chart, read p, get Asc.",
              "Bresler (biaxial): 1/Pu = 1/Pux + 1/Puy - 1/Pu0, all three capacities from uniaxial charts.",
              "Small eccentricities on both axes allow the clause 39.6 simplified check.",
            ],
            table: {
              caption: "Choosing the design route for a loaded column.",
              headers: ["Load situation", "Typical member", "Design route"],
              rows: [
                ["Axial only (e <= emin)", "interior column of a braced frame", "Pu = 0.4 fck Ac + 0.67 fy Asc"],
                ["Uniaxial bending", "edge column, beam framing one side", "SP 16 interaction chart for the d'/D family"],
                ["Biaxial bending", "corner column", "Bresler: 1/Pu = 1/Pux + 1/Puy - 1/Pu0"],
                ["Large eccentricity", "portal frame leg", "design as a beam-column; the moment dominates"],
                ["Seismic zone", "any frame column", "IS 456 design + IS 13920 confinement at the ends"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Routing a column design",
              caption: "Three doors out of the same question.",
              start: "Factored Pu, Mux and Muy are known",
              branches: [
                { label: "Muy = 0", outcome: "Uniaxial: enter the SP 16 charts with Pu/(fck b D) and Mu/(fck b D^2); read p and place bars symmetrically", good: true },
                { label: "Both moments act", outcome: "Bresler: 1/Pu = 1/Pux + 1/Puy - 1/Pu0 assembled from three uniaxial chart lookups", good: true },
                { label: "Point lies outside the charts", outcome: "Do not extrapolate - enlarge the section or raise steel towards the 4% ceiling", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Bresler verbatim",
              body: "Bresler's equation is asked verbatim in most years: write it, name the three uniaxial capacities it needs, and show one chart lookup. A complete answer without finishing the arithmetic still collects most of the marks.",
            },
            keyTerms: [
              { term: "Interaction diagram", definition: "A curve (or family) of axial capacity versus moment capacity for a given section, steel and cover - the design map for combined loading." },
              { term: "Biaxial bending", definition: "Simultaneous bending about both principal axes, typical of corner columns under frame action." },
              { term: "SP 16", definition: "The Bureau of Indian Standards design handbook of interaction charts and tables used to design columns without solving section equations." },
            ],
            examQuestions: [
              {
                q: "What is an interaction diagram for a column? Explain the design of a column subjected to (a) uniaxial and (b) biaxial bending, including Bresler's reciprocal method.",
                marks: 7,
                outline: [
                  "Define the interaction surface: axial capacity versus Mx and My.",
                  "Describe the chart parameters: d'/D and p/fck families, symmetric reinforcement.",
                  "Uniaxial route: normalise Pu and Mu, enter the chart, read p, get Asc.",
                  "Write Bresler: 1/Pu = 1/Pux + 1/Puy - 1/Pu0.",
                  "Define Pux, Puy and Pu0 as uniaxial capacities of the same section.",
                  "State the small-eccentricity relaxation of clause 39.6.",
                  "Sketch a corner column showing why both moments arrive.",
                ],
              },
              {
                q: "Why are corner columns designed for biaxial bending?",
                marks: 3,
              },
              {
                q: "Write Bresler's reciprocal equation and define each term.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Isolated footings",
            body: [
              "The isolated footing is the translator between a column and the soil: it must spread the load until the pressure under it is smaller than the safe bearing capacity, without shearing, punching or cracking on the way. Plan shape follows the column - square pads under square columns, rectangular under rectangular - and the depth is fixed by three critical sections: punching shear at d/2 around the column, one-way shear at d from the column face, and bending at the face of the column. Edge thickness is kept at least 150 millimetres and cover is a generous 50 millimetres because the concrete sits against earth.",
              "The design sequence is crisp. Compute the plan area from the service load - column plus footing and any soil above - divided by the net safe bearing capacity; check pressures under service and factored loads, adding moments as P over A plus M over Z if the column is eccentric. Fix depth by the two shears - punching almost always governs square pads - then design the bending steel per metre strip in each direction at the column face, keeping the minimum slab steel. Finally the column must be started in the footing with dowels lapped their compression development length into both members.",
              "Detailing completes the transfer. Both steel mats sit at the bottom - the footing bends upward everywhere under soil pressure - with the larger-moment direction's bars in the outer layer; the 50 millimetre cover sits on lean concrete blinding, and sloped or stepped footings taper down to the 150 millimetre edge. Where pads crowd each other or a property line cuts one, the engineer abandons the isolated pad for the combined, strap and raft solutions of the next two sections - an isolated footing is only as good as the soil and space around it.",
            ],
            bullets: [
              "Plan area = service load (column + footing + overburden) / net SBC; check pmax <= SBC.",
              "Critical sections: punching at d/2 from the column face; one-way shear at d; bending at the face.",
              "Both mats at the bottom: soil pressure bends the footing upward - tension is at the bottom face.",
              "Minimum edge thickness 150 mm; cover 50 mm on blinding.",
              "Column dowels lapped the compression development length into footing and column; footing steel at least minimum slab steel.",
            ],
            codeExample: {
              language: "python",
              caption: "Footing size from SBC and the combined-pressure check with a moment.",
              code: `# Isolated footing: size by SBC, then combined-pressure check
P, SBC, M = 1300.0, 150.0, 90.0     # service kN, kN/m2, kNm
B = 3.2                             # trial square side, m
A, Z = B * B, B ** 3 / 6.0
p_max = P / A + M / Z
p_min = P / A - M / Z
print("p_max = %.1f, p_min = %.1f kN/m2" % (p_max, p_min))
# p_max = 143.4 < SBC and p_min = 110.5 > 0 -> 3.2 m side works`,
            },
            diagram: {
              kind: "flow",
              title: "Isolated footing design pipeline",
              caption: "Five stations from soil capacity to the steel detail.",
              steps: [
                { label: "Area from net SBC", note: "include footing and soil weight" },
                { label: "Depth by punching shear", note: "critical perimeter at d/2 around the column" },
                { label: "One-way shear check", note: "section at d from the column face" },
                { label: "Bending at the column face", note: "steel per metre each way" },
                { label: "Detailing", note: "50 cover, dowels with compression Ld, edge 150 mm" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the three sections",
              body: "Quote the three critical sections with their locations before any arithmetic: punching at d/2, one-way shear at d, bending at the column face. Each is marked independently, and a footing answer that checks bending but forgets punching shear loses more than an arithmetic slip would.",
            },
            keyTerms: [
              { term: "Net safe bearing capacity", definition: "The pressure the soil can carry after deducting the footing and overburden - the divisor for sizing the plan area." },
              { term: "Punching shear", definition: "Two-way shear around a loaded area: the column tends to punch a frustum through the footing, checked on a perimeter at d/2 from the column face." },
              { term: "Dowel", definition: "Short starter bars connecting column to footing, lapped the compression development length on both sides." },
            ],
            examQuestions: [
              {
                q: "Design a square isolated footing for a 400 mm column carrying 1200 kN service axial load on soil with net SBC 150 kN/m2. Use M20 and Fe415 with 50 mm cover: fix the size, check the shears, and find the reinforcement.",
                marks: 7,
                outline: [
                  "Plan area: (1200 + about 10% for footing and soil) / 150 - about 3.0 m square.",
                  "Net upward factored pressure for the design strip.",
                  "Assume d; check punching shear on the perimeter at d/2 around the column.",
                  "Check one-way shear at d from the column face.",
                  "Bending moment at the column face per metre strip; Ast both ways; minimum steel check.",
                  "Depth at the edge 150 mm, cover 50, dowels with compression laps.",
                  "Sketch the section showing both bottom mats.",
                ],
              },
              {
                q: "Distinguish between one-way and two-way shear in a footing and locate both critical sections.",
                marks: 3,
              },
              {
                q: "Why is footing reinforcement placed near the bottom face?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Combined and strap footings",
            body: [
              "Two situations retire the isolated pad. First, neighbouring columns so close that their pads would overlap; second, a pad that would project across a property line because its column stands near the boundary. Both are solved by merging or linking: a combined footing is a single pad under two or more columns, while a strap footing keeps two separate pads and couples them with a rigid strap beam that transfers the unbalanced moment of the eccentric outer pad to the inner one. In both cases the goal is identical - make the resultant of all loads pass through the centroid of the bearing area so the soil pressure is uniform and every part of the soil does equal work.",
              "A rectangular combined footing earns uniform pressure when its plan centroid coincides with the load resultant, possible when column loads are equal or the projections can be adjusted. Unequal loads with one projection blocked by the property line force the trapezoidal plan. Design then proceeds as an inverted structure: soil pressure loads the slab upward, column loads push down as the reactions, and the footing is analysed as a beam (or one-way strip) spanning the column loads - the moment and shear diagrams are drawn exactly like those of a continuous beam loaded upward, and the depth is fixed by shear at the column faces.",
              "The strap footing decouples the geometry. The outer pad is allowed to sit eccentrically under its column, and the strap beam - deep, stiff, and deliberately kept clear of the soil so it attracts no bearing pressure - carries the resulting moment to the inner pad, equalising the pressure under both. The strap works in bending and shear like a grade beam, with steel on both faces because the moment diagram reverses along its length, while the pads themselves remain ordinary isolated footings designed by Section 3.3.",
            ],
            bullets: [
              "Use a combined footing when pads would overlap or a property line blocks a single pad's projection.",
              "Uniform pressure rule: plan centroid of the combined footing under the resultant of column loads.",
              "Rectangular plan when loads are equal or adjustable; trapezoidal when unequal loads meet a fixed boundary.",
              "Analyse the footing as inverted: upward soil pressure is the load, column loads are the reactions.",
              "Strap footing: two pads + rigid strap clear of soil; the strap carries the eccentric pad's moment to the inner pad.",
            ],
            table: {
              caption: "Combined vs strap: choosing the shared solution.",
              headers: ["Aspect", "Combined footing", "Strap footing"],
              rows: [
                ["Geometry", "one monolithic pad under two columns", "two separate pads joined by a beam"],
                ["Uniform pressure by", "centroid under the load resultant", "strap moment balancing the outer eccentricity"],
                ["Preferred when", "columns are close, space is available", "a property line limits the outer pad"],
                ["Design model", "inverted beam/slab on uniform soil pressure", "pads as isolated + strap as a grade beam"],
                ["Watch for", "deep shear checks at the column faces", "the strap must not rest on and bear into soil"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two ways to share the load",
              caption: "Merge the concrete, or link it - the soil never knows the difference.",
              left: {
                heading: "Combined footing",
                items: [
                  "single pad under both columns",
                  "centroid aligned with the resultant",
                  "rectangular or trapezoidal plan",
                  "inverted-beam analysis",
                  "deep shear at the column faces",
                ],
              },
              right: {
                heading: "Strap footing",
                items: [
                  "two independent pads",
                  "rigid strap beam between them",
                  "outer pad eccentric under its column",
                  "strap carries the balancing moment",
                  "strap cast clear of bearing soil",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Draw the resultant first",
              body: "Draw the load resultant on the plan sketch before choosing the shape: one line - from column loads through the trial footing - decides rectangular versus trapezoidal versus strap, and examiners award the classification mark before any numbers appear.",
            },
            keyTerms: [
              { term: "Combined footing", definition: "A single footing supporting two or more columns, proportioned so its plan centroid sits under the resultant of the column loads for uniform bearing." },
              { term: "Strap footing", definition: "Two isolated pads connected by a rigid strap beam that transfers the moment of an eccentric outer pad to the inner pad, keeping both pads uniformly loaded." },
              { term: "Trapezoidal footing", definition: "A combined footing whose plan is a trapezium, used when unequal column loads and a fixed boundary prevent the centroid condition with a rectangle." },
            ],
            examQuestions: [
              {
                q: "When is a combined footing necessary? Explain the design of a rectangular combined footing for two columns - one at a property line - including the condition for uniform soil pressure, and sketch the reinforcement.",
                marks: 7,
                outline: [
                  "State the triggers: overlapping pads or a property line cutting the projection.",
                  "Resultant of column loads; place the footing centroid under it for uniform pressure.",
                  "Fix plan length beyond the inner column to satisfy the centroid condition.",
                  "Check average pressure against the SBC.",
                  "Inverted analysis: upward pressure as load, columns as reactions; moment and shear diagrams.",
                  "Depth by shear at the column faces; steel top and bottom plus transverse strips under columns.",
                  "Sketch the plan and section with the reinforcement.",
                ],
              },
              {
                q: "Explain the function of a strap beam in a strap footing and why it is kept clear of the soil.",
                marks: 3,
              },
              {
                q: "When is a trapezoidal combined footing preferred over a rectangular one?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Raft foundations",
            body: [
              "When the soil weakens or the building grows heavy, spreading the load means spreading the whole building: the raft (mat) foundation turns the entire ground floor area into one footing. The triggers are quantitative - safe bearing capacity too low for economical pads, pads that would overlap over about half the plan, or column loads so heavy that isolated solutions invite differential settlement - and qualitative: basements below the water table, or fills and soft lenses that would settle unevenly under separate pads. In effect, the raft trades individual footing capacity for whole-area averaging, buying uniform settlement by making everything settle together.",
              "The catalogue runs from simple to stiff. A flat plate raft is a thick slab under all columns; a thickened plate adds drops or column heads where punching would rule; a beam-and-slab raft runs beams between columns below or above a slab; and a cellular (box) raft stacks two slabs with ribs between them, gaining stiffness and hollow buoyancy - its hollows displace soil weight, which actually reduces the net pressure on weak ground. The stiffer the raft, the more it bridges soft spots instead of following them down.",
              "Design starts with contact pressure: total vertical load over raft area, plus moments shared through the section modulus as P/A plus M/Z on each axis, with the resultant kept inside the middle third so no edge goes into tension. Thickness then comes from punching shear around the columns and the two-way action of the slab, and the member is detailed like an inverted flat plate: top steel spanning between columns, bottom steel concentrated around them, both mats present because the moments reverse. Construction joints walk the pour lines with waterstops when a basement meets water, long rafts are split by settlement joints, and flotation is checked against the highest groundwater.",
            ],
            bullets: [
              "Choose a raft when SBC is low, pads would overlap over about half the plan, or differential settlement threatens.",
              "Types: flat plate, thickened plate, beam-and-slab, cellular (box); stiffness increases down the list.",
              "Contact pressure: P/A plus or minus M/Z on both axes; resultant within the middle third - no tension at any edge.",
              "Thickness by punching shear at column perimeters; detail like an inverted flat plate with both mats.",
              "Basement rafts: check flotation with a high water table; waterstop every construction joint.",
            ],
            table: {
              caption: "Raft types and where each earns its keep.",
              headers: ["Raft type", "Best when", "Notes"],
              rows: [
                ["Flat plate", "light loads, evenly spaced columns", "simplest formwork; thickness governed by punching"],
                ["Thickened plate", "moderate loads, isolated punching problems", "drops or column heads added locally"],
                ["Beam-and-slab", "heavy columns on wide grids", "beams up or down; the classic big-frame raft"],
                ["Cellular (box)", "very weak soil, deep basements", "two slabs + ribs; stiff and buoyant"],
                ["Piled raft", "even a raft pressures the soil too much", "piles share load and cut settlement"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The foundation ladder",
              caption: "As soil weakens or loads grow, climb down the pyramid.",
              tiers: [
                { label: "Spread footings", note: "good soil, moderate loads" },
                { label: "Combined and strap", note: "tight sites and property lines" },
                { label: "Raft", note: "weak soil, heavy or dense grids" },
                { label: "Piles and piled rafts", note: "very weak upper strata" },
              ],
            },
            callout: {
              type: "exam",
              title: "Triggers before thickness",
              body: "The raft question wants the trigger conditions and the contact-pressure arithmetic: list the triggers, write P/A plus-or-minus M/Z, check the middle-third rule, and only then discuss thickness and detailing. Reversing that order loses the structural-logic marks.",
            },
            keyTerms: [
              { term: "Raft foundation", definition: "A single slab (or slab-and-beam system) covering the whole building footprint, spreading all column loads over the available area." },
              { term: "Cellular raft", definition: "A box raft of two slabs connected by ribs: very stiff, and its hollows reduce the net pressure added to weak soil." },
              { term: "Differential settlement", definition: "Unequal settlement between parts of a structure - the cracking driver rafts exist to suppress by forcing everything to settle together." },
            ],
            examQuestions: [
              {
                q: "State the conditions under which a raft foundation is preferred, describe its types, and outline the design of a flat plate raft including the contact pressure and thickness checks.",
                marks: 7,
                outline: [
                  "List triggers: low SBC, pads overlapping over about half the plan, differential settlement risk, basements.",
                  "Describe the types: flat plate, thickened plate, beam-and-slab, cellular.",
                  "Contact pressure: P/A plus or minus M/Z on each axis; middle-third condition for no tension.",
                  "Thickness by punching shear at column perimeters and two-way action.",
                  "Detailing as an inverted flat plate: both mats, top steel between columns.",
                  "Joints: settlement joints in long rafts, waterstops and flotation check for basements.",
                  "Sketch a plan and section.",
                ],
              },
              {
                q: "How is the contact pressure under a raft checked, and why must the resultant stay inside the middle third?",
                marks: 3,
              },
              {
                q: "List two advantages of a cellular raft over a flat plate raft.",
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
      title: "Retaining Walls and Water Tanks",
      summary:
        "Members that hold back: earth pressure and wall types, the three stability checks, cantilever and counterfort proportioning, rectangular tanks in plate bending, circular tanks in hoop tension, and the IS 3370 crack-control philosophy.",
      chapter: {
        number: "04",
        title: "Retaining Walls and Water Tanks",
        intro:
          "Unit IV designs the members that hold back the world. Earth pressure and Rankine's coefficients size the retaining wall; overturning, sliding and bearing checks prove it stands; cantilever and counterfort forms distribute its steel; then the medium changes from soil to water and IS 3370's crack-first philosophy takes over, with rectangular walls bending as plates and circular walls working in pure hoop tension.",
        inOneBreath:
          "Rankine gives Ka = (1 - sin phi)/(1 + sin phi) and a thrust of Ka gamma H squared over two acting at H/3; stability demands an overturning FOS of 2, a sliding FOS of 1.5 and pressures kept inside the middle third; cantilever walls put steel on the stem's earth face, the heel's top and the toe's bottom, with counterforts beyond about six metres; IS 3370 keeps tank cracks hairline with working stress design and about 100-150 MPa steel stresses; rectangular walls cantilever or span as plates with direct tension at corners; and circular walls carry pure hoop tension T = pR/2 when their base can slide.",
        sections: [
          {
            number: "4.1",
            title: "Retaining wall types and earth pressure",
            body: [
              "A retaining wall holds a mass of earth (or water) at a level difference, and its family tree is sorted by how it does the job. Gravity walls rely on their own weight to tip the balance - sound up to about three metres. Cantilever walls borrow the earth itself: a thin stem with toe and heel slabs, the soil sitting on the heel to stabilise the whole; they carry the range from about three to six metres. Beyond six or so metres the stem of a cantilever grows too heavy, and counterforts - triangular braces tying stem to heel - take over the structural work.",
              "The enemy is lateral earth pressure, and Rankine's theory quantifies it. For a cohesionless backfill with friction angle phi, the active coefficient is Ka = (1 - sin phi)/(1 + sin phi): about one-third for the usual thirty degrees, meaning the soil pushes sideways with a third of its vertical weight. The pressure grows linearly with depth, the total thrust is Ka gamma H squared over two acting at one-third of the height, and a uniform surcharge q on top adds a rectangular Ka q H diagram. The passive resistance in front of the toe - three to nine times the active coefficient per unit depth - is the reserve the wall can mobilise, usually conservatively ignored.",
              "Design thinking starts with proportions and checks. A cantilever wall tries a base width of about half to seven-tenths of the height, a stem thickness near a tenth of the height, and a drainage layer with weep holes - because a water-filled backfill roughly doubles the thrust and is the classic real-world failure. Then come the three stability checks of Section 4.2 and the member design of Section 4.3. Rankine's theory assumes a smooth vertical wall and a level backfill; sloping or heavily surcharged backfills adjust the coefficient or move to trial-wedge methods.",
            ],
            bullets: [
              "Types by height: gravity (up to about 3 m), cantilever (about 3-6 m), counterfort (above about 6 m).",
              "Rankine active: Ka = (1 - sin phi)/(1 + sin phi); for phi = 30 degrees, Ka = 1/3.",
              "Thrust Pa = Ka gamma H^2/2 acting at H/3 above the base; a surcharge adds Ka q H at mid-height.",
              "Passive Kp = (1 + sin phi)/(1 - sin phi) - large, and usually ignored for safety.",
              "Weep holes and a granular drain layer keep the backfill dry; trapped water roughly doubles the thrust.",
            ],
            table: {
              caption: "Rankine coefficients for common backfill friction angles.",
              headers: ["phi (degrees)", "Ka active", "Kp passive"],
              rows: [
                ["25", "0.41", "2.46"],
                ["30", "0.33", "3.00"],
                ["35", "0.27", "3.69"],
                ["40", "0.22", "4.60"],
                ["45", "0.17", "5.83"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Selecting the retaining wall type",
              caption: "Height is the first sieve; the stability checks are the second.",
              start: "Retaining height H is known",
              branches: [
                { label: "H up to about 3 m", outcome: "Mass gravity wall: self weight does the work, no member design", good: true },
                { label: "H about 3 to 6 m", outcome: "RCC cantilever wall: stem + toe + heel with backfill on the heel as ballast", good: true },
                { label: "H above about 6 m", outcome: "Counterfort wall: triangular braces let the stem span horizontally", good: true },
                { label: "Skip the stability checks", outcome: "Unacceptable at any height - overturning, sliding and bearing must each be proven", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "One coefficient rules them all",
              body: "Compute Ka once per problem and reuse it: the 7-mark retaining-wall question chains thrust, moments and pressures from that single coefficient, and an early arithmetic error there poisons every later line of an otherwise perfect answer.",
            },
            keyTerms: [
              { term: "Active earth pressure", definition: "The minimum lateral pressure soil exerts as it tends to move the wall outward, quantified by Rankine's Ka = (1 - sin phi)/(1 + sin phi)." },
              { term: "Surcharge", definition: "Any additional load on the backfill surface - soil, traffic, stacking - adding a rectangular pressure Ka q over the wall height." },
              { term: "Weep hole", definition: "A drain opening through the stem that bleeds water from the backfill, keeping the design thrust from doubling." },
            ],
            examQuestions: [
              {
                q: "Classify retaining walls and their suitability by height. Using Rankine's theory, compute the active thrust on a 5 m wall with phi = 30 degrees and gamma = 18 kN/m3, with and without a 10 kN/m2 surcharge.",
                marks: 7,
                outline: [
                  "Types with height ranges: gravity, cantilever, counterfort.",
                  "State Rankine's assumptions: cohesionless soil, smooth vertical wall, level backfill.",
                  "Ka = (1 - sin 30)/(1 + sin 30) = 1/3.",
                  "Pa = Ka gamma H^2/2 = 0.5 x (1/3) x 18 x 25 = 75 kN/m at H/3 = 1.67 m.",
                  "Surcharge: Ka q H = (1/3) x 10 x 5 = 16.7 kN/m at H/2 = 2.5 m.",
                  "Combine: total 91.7 kN/m with a revised resultant height by moments.",
                  "Note the drainage provision that keeps water from doubling the thrust.",
                ],
              },
              {
                q: "Why do weep holes and a drainage layer matter so much in retaining wall design?",
                marks: 3,
              },
              {
                q: "Define active and passive earth pressure.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Stability of retaining walls",
            body: [
              "A retaining wall must prove three things about every metre of its length. Against overturning: the resisting moments of the wall's weight and the soil on its heel, taken about the toe, must exceed the overturning moment of the earth thrust by a factor of at least two. Against sliding: friction along the base - a coefficient of about 0.5 times the total vertical force - must hold the horizontal thrust with a factor of at least 1.5. And under the base: the maximum pressure must stay within the safe bearing capacity while the minimum edge pressure stays non-negative, which is the same as keeping the resultant inside the middle third of the base.",
              "The arithmetic is a tidy table. List every vertical force - stem, base slab, soil over the heel, surcharge - with its centroid distance from the toe, and sum moments to locate the resultant x-bar; the eccentricity is B/2 minus x-bar. Base pressures follow p = sigma-V over B times (1 plus or minus 6e/B) - the middle-third rule - and the two safety factors fall straight out of the moment and force sums. A shear key added below the toe mobilises passive pressure in front of the base and is the standard cure when friction alone cannot hold sliding.",
              "Failures point to their own fixes. Overturning short: widen the heel, lengthen the toe, or add more soil weight over the heel. Sliding short: add a key, roughen the base, or increase the vertical load. Base pressure too high: widen the base or improve the ground. Tension at the heel edge: shift the stem or widen the toe so the resultant recentres. And when everything is short at once, the counterfort wall of the next section restructures the problem instead of patching it. Iteration is normal - the checks are a loop, not a march.",
            ],
            bullets: [
              "Overturning: resisting moment about the toe >= 2 x overturning moment from Pa at H/3.",
              "Sliding: mu x sigma-V / sigma-H >= 1.5, with mu about 0.5 on granular soil.",
              "Base pressures: p = sigma-V/B x (1 plus or minus 6e/B); keep pmax <= SBC and pmin >= 0.",
              "Middle third: resultant eccentricity e <= B/6 prevents tension at the heel edge.",
              "Fixes: heel widening for overturning, a shear key for sliding, base widening for bearing.",
            ],
            codeExample: {
              language: "python",
              caption: "Overturning and sliding factors of safety for a trial cantilever wall.",
              code: `import math
# Cantilever wall stability check (drained granular backfill)
phi, gamma, H = 30.0, 18.0, 5.0      # degrees, kN/m3, m
Ka = (1 - math.sin(math.radians(phi))) / (1 + math.sin(math.radians(phi)))
Pa = 0.5 * Ka * gamma * H ** 2       # kN per m run
M_ot = Pa * H / 3.0                  # overturning moment about the toe
W, x_bar = 240.0, 1.30               # sigma-V (kN/m), centroid from toe (m)
M_R = W * x_bar
print("Ka = %.3f  Pa = %.1f kN/m" % (Ka, Pa))
print("FOS overturning = %.2f (want >= 2.0)" % (M_R / M_ot))
print("FOS sliding = %.2f (want >= 1.5, mu = 0.5)" % (0.5 * W / Pa))
# 2.50 and 1.60 - the trial proportions survive both checks`,
            },
            diagram: {
              kind: "cycle",
              title: "The stability loop",
              caption: "Sizing a wall is iterate-until-proven, not a single pass.",
              steps: [
                { label: "Compute Ka, Pa and weights", note: "thrust, self weight, soil on the heel" },
                { label: "Check overturning about the toe", note: "FOS >= 2.0" },
                { label: "Check sliding along the base", note: "FOS >= 1.5 with mu about 0.5" },
                { label: "Check base pressures", note: "pmax <= SBC, no tension at the heel" },
                { label: "Revise proportions and repeat", note: "heel, toe, key - then around again" },
              ],
            },
            callout: {
              type: "exam",
              title: "Tabulate forces first",
              body: "Tabulate forces with lever arms about the toe before computing anything: the table itself carries method marks, and every examiner checks the Pa lever arm (H/3) and the resultant-based eccentricity before reading your final pressures.",
            },
            keyTerms: [
              { term: "Factor of safety", definition: "The ratio of stabilising to destabilising action - at least 2.0 against overturning and 1.5 against sliding for retaining walls." },
              { term: "Middle-third rule", definition: "Keeping the resultant of vertical loads within the middle third of the base (e <= B/6) ensures no tensile pressure at the heel edge." },
              { term: "Shear key", definition: "A stub wall cast below the toe to mobilise passive soil pressure and raise the sliding resistance." },
            ],
            examQuestions: [
              {
                q: "Explain the stability requirements of a cantilever retaining wall: the two factor-of-safety checks, the base pressure computation with the middle-third rule, and the remedies when each check fails.",
                marks: 7,
                outline: [
                  "Name the three requirements: overturning, sliding, bearing.",
                  "Overturning: moments about the toe; Pa at H/3; FOS = MR/MOT >= 2.",
                  "Sliding: mu sigma-V versus sigma-H; FOS >= 1.5; the role of a shear key.",
                  "Base pressure: p = sigma-V/B (1 plus or minus 6e/B) with e = B/2 - x-bar.",
                  "Middle-third condition for no tension; pmax against SBC.",
                  "Remedies per failure mode: heel widening, key, base widening.",
                  "Sketch the pressure diagram under the base.",
                ],
              },
              {
                q: "How does a shear key improve a wall's sliding resistance?",
                marks: 3,
              },
              {
                q: "What is the middle-third rule and why does it matter?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Cantilever and counterfort walls",
            body: [
              "A cantilever wall is three small slabs in one pour: a vertical stem cantilevering from the base against the earth pressure, a toe slab cantilevering forward under the bearing pressure, and a heel slab cantilevering backward loaded by the soil it carries. Each bends in a known direction: the stem puts its main steel on the earth face, the toe puts it at the bottom, and the heel - pressed down by its soil column more than the pressure pushes up - puts it on top. Vertical steel from the stem runs down into the base as starters, and the construction joint at the top of the base is roughened to transfer shear.",
              "The counterfort wall adds the back-side braces once height makes a plain cantilever stem uneconomical. Counterforts are triangular slabs spaced about a third to half the wall height apart - commonly two to four metres - acting as cantilever beams fixed in the base and carrying the tributary strip of earth thrust; the stem then spans horizontally between counterforts and needs only light steel, and the heel spans between them likewise. When the brace sits on the front (toe) side instead, the wall is a buttress wall, chosen where the back face must stay flush or the front side has the room.",
              "Detailing tells the story of the forces. Stem bars develop full anchorage into the base; counterforts carry their tension steel along the sloping tension face; the heel steel laps over the stem starters; temperature and shrinkage steel runs the other way in every element. Drainage - a granular blanket with a geotextile filter and weep holes at one-and-a-half to three metre centres near the base - is structural, not cosmetic: the doubled thrust from trapped water, seen in Section 4.1, has felled more walls than design error ever has.",
            ],
            bullets: [
              "Cantilever wall parts: stem (steel on the earth face), toe (steel at the bottom), heel (steel on top).",
              "Trial proportions: stem near H/10 at the base tapering to 150-200 mm at top; base width 0.5-0.7 H.",
              "Counterforts at about H/3 to H/2 spacing (2-4 m typical): stem and heel span horizontally between them.",
              "Counterforts act as cantilever beams fixed in the base, each carrying a tributary strip of thrust.",
              "Buttress wall: braces on the front (toe) side - used when the back face must stay flush.",
            ],
            table: {
              caption: "First-trial proportions for cantilever walls.",
              headers: ["Element", "Practical proportion", "Then check"],
              rows: [
                ["Base width B", "0.5 - 0.7 H", "overturning, sliding, bearing"],
                ["Toe projection", "about B/3", "upward-pressure bending and shear"],
                ["Heel projection", "about 0.4 - 0.5 B", "net downward-load bending"],
                ["Stem at base", "about H/10", "earth pressure moment at each level"],
                ["Stem at top", "150 - 200 mm", "minimum placing plus temperature steel"],
                ["Counterfort spacing", "H/3 to H/2 (about 2-4 m)", "horizontal span of stem and heel"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Cantilever vs counterfort walls",
              caption: "Below about six metres, lean on the soil; above it, brace the back.",
              left: {
                heading: "Cantilever wall",
                items: [
                  "stem, toe and heel slabs",
                  "soil on the heel is the ballast",
                  "economical up to about 6 m",
                  "stem steel on the earth face",
                  "simple geometry, quick to build",
                ],
              },
              right: {
                heading: "Counterfort wall",
                items: [
                  "triangular braces behind the stem",
                  "stem spans horizontally between braces",
                  "used above about 6 m",
                  "counterforts are cantilever beams",
                  "economical steel at large heights",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Steel faces in sketches",
              body: "Get the steel faces right: stem on the earth face, heel on top, toe at the bottom - each placement follows the bending direction, and reversed faces are the single most deducted sketch error in Unit IV papers.",
            },
            keyTerms: [
              { term: "Heel slab", definition: "The rear projection of a cantilever wall base, whose soil column stabilises the wall and whose main steel runs on top." },
              { term: "Counterfort", definition: "A triangular back-side brace making stem and heel span horizontally; itself a cantilever beam fixed in the base." },
              { term: "Buttress wall", definition: "A braced retaining wall whose supports sit on the front (toe) side - chosen when the earth face must stay flush." },
            ],
            examQuestions: [
              {
                q: "Describe the components of a cantilever retaining wall and the bending and tension directions in stem, toe and heel. Explain how a counterfort wall differs and when it becomes necessary.",
                marks: 7,
                outline: [
                  "Sketch stem, toe, heel, backfill and drainage; name proportions.",
                  "Stem: vertical cantilever against earth pressure; main steel on the earth face.",
                  "Toe: bends upward under bearing pressure; steel at the bottom.",
                  "Heel: net downward load from the soil column; steel on top.",
                  "Starters into the base and the roughened construction joint.",
                  "Counterfort action: spacing, stem and heel spanning horizontally, counterforts as cantilevers.",
                  "The height threshold of about 6 m and the buttress variant.",
                ],
              },
              {
                q: "Why is the main steel of a heel slab placed on its top face near the stem?",
                marks: 3,
              },
              {
                q: "Differentiate counterfort and buttress walls.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Rectangular water tanks",
            body: [
              "Water tanks stop being ordinary structures at the crack. A hairline that a beam would ignore is a leak in a tank, so IS 3370 designs liquid-retaining concrete by the working stress method with stresses held low enough that cracks stay invisible: concrete in direct tension is limited to a small fraction of its strength, and steel stresses in tension zones sit around 100 to 150 megapascals rather than near yield. The mix is correspondingly rich and tight - M25 as the working minimum in current practice, water-cement ratio about 0.45 - and curing is extended, because every shrinkage crack is a permanent leak.",
              "A rectangular tank on the ground is a set of wall plates. Hydrostatic pressure grows linearly with depth - 9.81 kilonewtons per square metre per metre - peaking at the floor. Short walls are cantilevers fixed at the base, with the moment per metre reaching gamma H cubed over six at the base; taller walls with a roof or a top beam act as propped cantilevers, and long walls also span horizontally between cross walls and corners. Bending and direct tension - the pull transferred from the perpendicular walls pressing outward - combine at every section, and the corners, taking moment from both walls meeting, need rigid vertical reinforcement.",
              "Joints decide the service life. Movement joints at roughly ten to twenty metre centres let the concrete breathe; construction joints get PVC waterstops across every pour line; and the wall-to-floor joint is either monolithic - transmitting moment - or a deliberate sliding joint that frees the wall to act as a clean cantilever. The floor on a sound base needs only nominal steel above a blinding layer; testing the tank full before handover is the contract's cheapest insurance against a hidden defect.",
            ],
            bullets: [
              "IS 3370 crack-first philosophy: working stress design, concrete direct tension limited, steel about 100-150 MPa.",
              "Concrete: M25 working minimum, water-cement ratio about 0.45, extended wet curing (14+ days).",
              "Hydrostatic pressure: p = 9.81 h kN/m2, triangular, maximum at the floor.",
              "Short walls cantilever from the base: M = gamma H^3/6 per metre; taller walls act as propped cantilevers.",
              "Joints: movement joints every 10-20 m, waterstops at every construction joint, monolithic or sliding wall-floor joint.",
            ],
            table: {
              caption: "IS 3370 design essentials for liquid-retaining concrete.",
              headers: ["Aspect", "Requirement", "Reason"],
              rows: [
                ["Design method", "working stress with crack control", "hairline cracks leak; serviceability first"],
                ["Concrete grade", "M25 working minimum", "low permeability, dense matrix"],
                ["Water-cement ratio", "about 0.45", "tight paste, fewer bleed channels"],
                ["Steel stress in tension", "about 100-150 MPa", "keeps crack widths hairline"],
                ["Cover on liquid faces", "about 40 mm typical", "durability plus placement tolerance"],
                ["Joints", "waterstops at construction joints; movement joints 10-20 m", "restraint cracks otherwise split the walls"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a rest-on-ground rectangular tank",
              caption: "Each layer has its own job - and its own leakage risk.",
              layers: [
                { label: "Cover slab (where used)", note: "keeps debris out; can prop the wall top" },
                { label: "Walls", note: "plates in bending + direct tension from adjacent walls" },
                { label: "Wall-floor joint", note: "monolithic for moment, or sliding with a waterstop" },
                { label: "Floor slab", note: "nominal steel on a sound base with blinding" },
                { label: "Ground", note: "uniform support prevents differential cracking" },
              ],
            },
            callout: {
              type: "exam",
              title: "Derive, then use",
              body: "Write gamma H cubed over six with its derivation - thrust gamma H squared over two acting at H/3 - before using it. RGPV rectangular-tank questions award the pressure diagram and the cantilever wall moment as separate marks, and the combined bending-plus-tension corner note is the expected closing sentence.",
            },
            keyTerms: [
              { term: "Working stress design", definition: "The elastic method IS 3370 retains for tanks: low permissible stresses so concrete stays effectively uncracked at service load." },
              { term: "Direct tension", definition: "The axial pull in tank walls transferred from the perpendicular walls pressing outward - combined with bending at every section." },
              { term: "Waterstop", definition: "A PVC or metal strip crossing a joint to block leakage paths while permitting movement." },
            ],
            examQuestions: [
              {
                q: "Explain the design philosophy of IS 3370 for water tanks and design the walls of a small open rectangular tank (cantilever action) of depth 3 m: pressure diagram, wall moment, and the reinforcement approach.",
                marks: 7,
                outline: [
                  "State the crack-control philosophy: working stress, limited concrete and steel stresses.",
                  "Grade, water-cement ratio and curing requirements.",
                  "Pressure diagram: p = 9.81 h, triangular, maximum 29.4 kN/m2 at the floor.",
                  "Cantilever wall: thrust at H/3; base moment gamma H^3/6 per metre.",
                  "Steel at the limited stress; check spacing for crack control.",
                  "Combined bending and direct tension at the corners; corner reinforcement.",
                  "Joints and waterstops; sketch the wall elevation with the pressure diagram.",
                ],
              },
              {
                q: "Why is crack control the governing criterion in water tank design?",
                marks: 3,
              },
              {
                q: "Where is the hydrostatic pressure on a tank wall maximum?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Circular water tanks and IS 3370",
            body: [
              "Make the tank round and the walls stop bending: a circular tank on the ground with a wall free to slide at its base carries the water pressure entirely in hoop tension. At any depth h the pressure p = 9.81 h pushes outward, and the ring of wall resists with a uniform tension per metre of height, T = p R over two - derived by slicing the cylinder through a diameter and balancing the pressure on the half-cylinder against twice the tension. The tension grows linearly to the base, so hoop steel is denser low down, and vertical steel handles shrinkage, temperature and the base moment where the joint is monolithic.",
              "Fix the base and the story complicates: a monolithic wall-floor joint introduces a base moment and redistributes the hoop forces near the floor, which is the classic design choice between a sliding joint - pure hoop tension, T = pR/2, with a waterstop handling the joint - and a fixed base with vertical bending plus modified hoop tension. Elevated circular tanks, the Intze type, stack a cylindrical wall on a conical bottom with a central spherical dome beneath it and a domical cover on top; a ring beam at the cone-dome junction balances the horizontal thrusts, and the staging - braced columns or a single shaft - carries the whole assembly.",
              "IS 3370 arrives in four parts - general requirements, reinforced concrete, prestressed concrete, and design tables - and the tables are the fastest route to wall thicknesses and steel for standard sizes. Prestressing suits large circular tanks: circumferential tendons compress the wall so the water pressure never fully releases the compression and tension stays below the crack threshold even at full pool. Detailing keeps hoops closely spaced near the base, laps staggered and away from tension peaks, and every joint waterstopped; like its rectangular sibling, the tank is tested full before it is trusted.",
            ],
            bullets: [
              "Circular wall on the ground with a sliding base: pure hoop tension T = p R/2 per metre of height, maximum at the base.",
              "Derivation: cut the cylinder on a diameter; the pressure thrust on the half-cylinder equals 2T per unit height.",
              "A fixed base adds vertical bending and modifies the hoop forces near the floor; the sliding joint keeps the simple picture.",
              "Intze tank (elevated): cylinder + conical bottom + bottom dome + top dome + ring beams; staging carries it all.",
              "IS 3370 parts: I general requirements, II reinforced concrete, III prestressed concrete, IV design tables.",
            ],
            codeExample: {
              language: "python",
              caption: "Hoop tension profile and base-ring steel for a circular tank (sigma_st = 125 MPa).",
              code: `# Circular tank on ground: hoop tension at depth h (flexible joint)
gamma_w, H, R = 9.81, 4.0, 5.0      # kN/m3, m, m
for frac in (0.25, 0.5, 0.75, 1.0):
    h = frac * H
    p = gamma_w * h                  # kN/m2 at depth h
    T = p * R / 2.0                  # kN per m of height
    print("h = %.1f m  T = %.1f kN/m" % (h, T))
# steel for the base ring at sigma_st = 125 N/mm2:
T_base = gamma_w * H * R / 2.0       # 98.1 kN/m
Ast = T_base * 1000.0 / 125.0        # mm2 per m height
print("Ast (base ring) =", round(Ast), "mm2/m")`,
            },
            diagram: {
              kind: "matrix",
              title: "The tank family, classified",
              caption: "Shape times position selects the design mechanism.",
              axes: { x: "Circular ... Rectangular", y: "Elevated ... On ground" },
              quadrants: [
                { label: "Intze tank", note: "elevated circular: shells + ring beams on staging" },
                { label: "Elevated rectangular", note: "shaft or frame staging; walls in vertical bending" },
                { label: "Hoop tension tank", note: "circular on ground: T = p R/2 with a sliding base" },
                { label: "Plate-action tank", note: "rectangular on ground: walls bend, corners pull in direct tension" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two lines for the derivation",
              body: "T = pR/2 must be derived, not just quoted: cut through a diameter, resolve the pressure on the half-cylinder, equate to 2T per unit height. Two lines and the derivation mark is banked before any numbers for the hoop steel follow.",
            },
            keyTerms: [
              { term: "Hoop tension", definition: "The uniform circumferential tension in a cylindrical wall resisting internal pressure: T = p R/2 per unit height." },
              { term: "Intze tank", definition: "An elevated circular tank of cylindrical wall, conical bottom and spherical dome shells meeting at a ring beam, carried on staging." },
              { term: "Staging", definition: "The tower of columns and braces (or a single shaft) supporting an elevated tank and its contents above ground." },
            ],
            examQuestions: [
              {
                q: "Derive the hoop tension in the wall of a circular water tank resting on the ground with a flexible (sliding) base, and design the hoop steel at the base for H = 4 m, R = 5 m with a permissible steel stress of 125 MPa.",
                marks: 7,
                outline: [
                  "Pressure at depth h: p = 9.81 h kN/m2.",
                  "Free body: cut the cylinder on a diameter; resolve pressure on the half-cylinder.",
                  "Balance: 2T = p x 2R per unit height, so T = pR/2.",
                  "At the base: T = 9.81 x 4 x 5/2 = 98.1 kN/m.",
                  "Ast = T/sigma_st = 98.1 x 1000/125 = 785 mm2/m.",
                  "Choose bars and spacing; vertical steel and the sliding joint with waterstop.",
                  "Sketch the hoop tension diagram growing to the base.",
                ],
              },
              {
                q: "Sketch an Intze tank and label its parts and the forces in each.",
                marks: 3,
              },
              {
                q: "Why is a sliding joint sometimes preferred at the base of a circular tank wall?",
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
      title: "Detailing and Codes",
      summary:
        "The craft end of the subject: drawing sets and detailing rules, bar bending schedules, IS 456 anchorage and cover numbers, IS 13920 ductile detailing, and the joints every pour must respect.",
      chapter: {
        number: "05",
        title: "Detailing, Schedules and Joints",
        intro:
          "Unit V is where calculations become drawings. Section 5.1 sets out the drawing set and the detailing discipline, 5.2 turns drawings into steel through the bar bending schedule, 5.3 collects the IS 456 anchorage, cover and spacing numbers, 5.4 adds IS 13920's ductile detailing for seismic regions, and 5.5 closes with the joints - construction, expansion, isolation - that every site must place and prepare correctly.",
        inOneBreath:
          "Drawings fix every bar with mark, diameter, spacing, cover, shape and anchorage, curtailed beyond max(d, 12 dia); the BBS converts drawings to shop orders with cutting lengths minus bend deductions plus hooks and weights d squared over 162; IS 456 fixes cover by exposure, development length at about 47 and 38 diameters and laps at 30 and 24; IS 13920 confines beam and column ends with 135-degree hoops at 100-millimetre-class spacing over Lo zones; and joints - construction at low shear, expansion beyond about 45 metres, isolation around fixed elements, waterstops against liquid - are designed, never improvised.",
        sections: [
          {
            number: "5.1",
            title: "Structural drawings and detailing",
            body: [
              "A design exists only when it is drawn. The RCC drawing set tells the site everything it cannot infer: foundation layouts with footing sizes and levels, column schedules with bar marks and tie patterns, framing plans, beam schedules and sections, slab layouts with bar spacing, stair details, and the bar bending schedule of the next section. Plans are drawn at 1:100 (large buildings sometimes 1:200), sections at 1:50, and member details at 1:20 to 1:10 - each sheet titled, numbered and cross-referenced so nothing dangles in ambiguity.",
              "A good detail carries a complete instruction per bar: diameter, spacing or count, cover, shape, crank position, lap and its staggering, anchorage length, and the layer it sits in. Bars sharing a function get single bar marks reused across sheets; every mark then appears exactly once in the schedule, which is how the site orders, cuts and bends steel without interpretation. The draughtsman's habits that prevent the most errors: dimension to the concrete face, state covers in a general note, and never let a bar float without a dimension fixing it in space.",
              "Detailing principles follow the flow of tension. Steel goes where the moment pulls; bars are curtailed only beyond their theoretical cutoff by the larger of effective depth or twelve diameters, and anchored a development length from the point of maximum moment; laps avoid peak-moment zones and are staggered; spacing leaves room for concrete to flow - clear gaps at least the bar diameter or maximum aggregate plus five millimetres. Chairs and spacers hold the layers at their covers through the pour. A clean drawing is the cheapest quality control a project will ever buy.",
            ],
            bullets: [
              "The set: foundation layout, column schedule, framing plan, beam schedules, slab layout, stair detail, BBS.",
              "Scales: 1:100 plans, 1:50 sections, 1:20-1:10 details; every sheet cross-referenced.",
              "Every bar instruction: mark, dia, spacing, cover, shape, crank, lap, anchorage, layer.",
              "Curtailment: extend beyond the theoretical cutoff by max(d, 12 dia) and anchor Ld from the maximum-moment point.",
              "Chairs and spacers fix covers; clear gaps between bars at least max(bar dia, aggregate + 5 mm) for placement.",
            ],
            table: {
              caption: "The RCC drawing set, sheet by sheet.",
              headers: ["Sheet", "What it fixes"],
              rows: [
                ["Foundation layout", "footing positions, sizes, levels and the column grid"],
                ["Column schedule", "section sizes, longitudinal bars, ties and laps per floor"],
                ["Framing plan", "beam positions, marks and slab panel boundaries"],
                ["Beam schedule and sections", "sizes, top and bottom steel, stirrups, curtailment"],
                ["Slab layout", "bar spacing both ways, cranks, additional bars at edges"],
                ["Stair and special details", "waist, landings, treads and anchorage into beams"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From design numbers to site steel",
              caption: "The production line every project runs.",
              steps: [
                { label: "Design output", note: "sizes, moments, Ast per member" },
                { label: "Choose bars and layers", note: "respect spacing, cover and curtailment rules" },
                { label: "Draft the set", note: "plans, schedules and sections to scale" },
                { label: "Bar-mark everything", note: "each mark feeds one BBS line" },
                { label: "Issue and resolve queries", note: "answers on drawings, never by memory" },
              ],
            },
            callout: {
              type: "tip",
              title: "The seven-item checklist",
              body: "In drawing-based questions, examiners reward the checklist: mark, dia, spacing, cover, shape, development length, lap stagger. Write the seven-item list once and apply it to every bar you sketch - it turns a drawing into an answer key.",
            },
            keyTerms: [
              { term: "Bar mark", definition: "A unique label for an identical bar (same size, shape and length) repeated across drawings and collected as one line of the bending schedule." },
              { term: "Curtailment", definition: "Stopping a bar where it is no longer needed, extended beyond the theoretical cutoff by max(d, 12 dia) with development length from peak-moment sections." },
              { term: "Chair (spacer)", definition: "A small bent bar or plastic support holding reinforcement layers at their design cover and spacing during the pour." },
            ],
            examQuestions: [
              {
                q: "List the drawings in a complete RCC drawing set and explain the essentials of good detailing per IS 456: curtailment, development of bars, laps and spacing for placement.",
                marks: 7,
                outline: [
                  "List the set: foundation layout, column schedule, framing plan, beam and slab layouts, stair details.",
                  "State the per-bar instruction items and the role of bar marks.",
                  "Curtailment rule: beyond theoretical cutoff by max(d, 12 dia), anchored Ld from maximum moment.",
                  "Laps: staggered, away from peak moments, minimum lengths.",
                  "Spacing for placement: clear gaps at least bar dia or aggregate + 5 mm.",
                  "Covers by exposure; chairs and spacers.",
                  "Link to the bar bending schedule that consumes the marks.",
                ],
              },
              {
                q: "Why must reinforcement laps be staggered and kept away from sections of maximum moment?",
                marks: 3,
              },
              {
                q: "What are chairs in detailing and why are they needed?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Bar bending schedule",
            body: [
              "The bar bending schedule (BBS) is the bridge between the drawing and the shop: a table listing every bar mark once, with its shape, diameter, number of members, bars per member, cutting length, unit weight and total weight. It drives procurement and billing by weight, instructs the bending yard exactly what to fabricate, and lets the engineer check the steel tonnage before a single bar is cut. Whatever the project, the columns stay the same; only the rows change, and a clean BBS is also the site's best defence in measurement disputes.",
              "Cutting length is measured along the centre line of the finished bar: sum the outer dimensions of every leg, then correct for bends and hooks. Bending shortens a bar - the rounded bend uses less steel than the square corner - so deductions apply per bend: one bar diameter for 45 degrees, two for 90, three for 135, while a standard 180-degree hook adds about nine diameters. Unit weight follows the unforgettable d-squared-over-162 kilograms per metre, derived from the 7850 kg/m3 density of steel, so the schedule's weight column is arithmetic, never estimation.",
              "Preparation is a desk exercise in reading, not fieldwork. Take each bar mark from the drawings; write its shape with dimensions from cover and member size; compute the cutting length with deductions; count members and bars per member; multiply out the totals and weights; then add a contingency of two to three percent for laps, wastage and site cuts. The stirrup is the classic first entry: two times the sum of inside dimensions plus hook allowances minus bend deductions - then multiplied by the stirrups per beam and the beams per floor.",
            ],
            bullets: [
              "Columns: S. no., bar mark, shape and dia, member, bars per member, total number, cutting length, unit weight, total weight.",
              "Cutting length = sum of outer leg lengths - bend deductions + hook allowances.",
              "Deductions per bend: 1 dia at 45 degrees, 2 dia at 90, 3 dia at 135; a standard 180-degree hook adds about 9 dia.",
              "Unit weight = d^2/162 kg/m for d in mm - from the 7850 kg/m3 density of steel.",
              "Add 2-3 percent for laps, wastage and site adjustments when ordering.",
            ],
            codeExample: {
              language: "python",
              caption: "Stirrup cutting length and weight: one full BBS line computed.",
              code: `# Bar bending schedule: stirrup cutting length and weight
def cutting_length(dims, phi, cover, hooks=2):
    a = dims[0] - 2 * cover - phi       # inside stirrup sizes
    b = dims[1] - 2 * cover - phi
    bend_deduction = 3 * 2 * phi + 2 * 3 * phi   # 3 x 90, 2 x 135 deg
    hook_add = hooks * 9 * phi
    return 2 * (a + b) + hook_add - bend_deduction

phi = 8.0                              # mm stirrup in a 300 x 500 beam
cl = cutting_length((300, 500), phi, 25)
wt_per_m = phi ** 2 / 162.0            # kg/m
print("stirrup cutting length = %.0f mm" % cl)
print("weight per stirrup = %.2f kg" % (cl / 1000.0 * wt_per_m))
# 1416 mm and 0.56 kg - one BBS row, fully derived`,
            },
            diagram: {
              kind: "pipeline",
              title: "Producing a bar bending schedule",
              caption: "Drawing to steel, five stations, no improvisation.",
              stages: [
                { label: "Read bar marks from drawings", note: "every mark exactly once" },
                { label: "Compute cutting lengths", note: "legs - bends + hooks" },
                { label: "Count bars", note: "per member x number of members" },
                { label: "Weight per bar", note: "d^2/162 kg/m x length" },
                { label: "Total, check, release", note: "add 2-3% contingency; issue to the bending yard" },
              ],
            },
            callout: {
              type: "exam",
              title: "Rules first, numbers second",
              body: "The BBS question is bookkeeping with formulas: write the column list, the deduction rules and d-squared-over-162 before filling numbers. The rules are the marks, and one fully computed stirrup line - like the worked example above - is expected as the demonstration.",
            },
            keyTerms: [
              { term: "Bar bending schedule", definition: "The table listing every bar mark with shape, size, count, cutting length and weight - the drawing's translation into fabrication orders." },
              { term: "Cutting length", definition: "The centre-line length of a finished bar: outer legs minus bend deductions plus hook allowances." },
              { term: "Unit weight of steel", definition: "d^2/162 kg per metre for bar diameter d in mm - the BBS conversion from length to weight." },
            ],
            examQuestions: [
              {
                q: "What is a bar bending schedule and why is it prepared? List its usual columns and prepare schedule lines for the main bar and stirrup of a beam with given data.",
                marks: 7,
                outline: [
                  "Definition and purposes: procurement, billing by weight, fabrication orders, tonnage checking.",
                  "List the columns from serial number to total weight.",
                  "State the cutting length rule: outer legs minus bend deductions plus hooks.",
                  "Work the stirrup line: 2(a+b) + hook allowances - bend deductions.",
                  "Work the main bar line including development length.",
                  "Convert to weight with d^2/162; total with member counts.",
                  "Add the 2-3 percent contingency note.",
                ],
              },
              {
                q: "Show that the unit weight of a steel bar is d^2/162 kg/m for diameter d in mm.",
                marks: 3,
              },
              {
                q: "State the bend deductions used in computing cutting lengths.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "IS 456 detailing provisions",
            body: [
              "IS 456's detailing clauses exist so that the steel the design assumes actually arrives in the member. Durability sets the nominal cover by exposure: 20 millimetres mild, 30 moderate, 45 severe, 50 very severe and 75 extreme - with at least 50 millimetres for concrete cast against earth and not less than 40 millimetres for column longitudinal bars. Fire rating and fixing tolerance push practical covers higher still, but the exposure table is the legal floor below which the drawing may not go.",
              "Bond holds the system together, and its currency is the development length Ld = phi sigma-s over 4 tau-bd: about forty-seven diameters for Fe415 deformed bars in M20 tension and thirty-eight in compression, because bond stress runs 60 percent higher for deformed bars and 25 percent higher in compression. Hooks and bends add anchorage where a straight length will not fit; laps transfer force from bar to bar over the same development length, with tension laps never shorter than thirty diameters and compression laps twenty-four. These numbers - 47, 38, 30, 24 - anchor half the detailing answers in any paper.",
              "Spacing and steel limits prevent the remaining classic failures. Slabs: 3d or 300 millimetres for main bars, 5d or 450 for distribution, minimum 0.12 percent for deformed bars. Beams: minimum flexural steel 0.85 b d over fy, maximum 4 percent of the section, stirrup spacing capped at 0.75 d or 300 millimetres. Columns: 0.8 to 4 percent with ties per Section 3.1. None of these numbers is design arithmetic - they are the rules that make the arithmetic true on site.",
            ],
            bullets: [
              "Nominal cover by exposure: 20 mild, 30 moderate, 45 severe, 50 very severe, 75 extreme (mm); footings 50, column bars at least 40.",
              "Ld = phi sigma_s/(4 tau_bd): about 47 dia for Fe415 in M20 tension, 38 dia in compression.",
              "Bond boosts: +60 percent for deformed bars, +25 percent in compression - hence the shorter compression Ld.",
              "Laps: tension at least max(Ld, 30 dia); compression at least max(0.8 Ld, 24 dia); stagger and avoid peak moments.",
              "Spacing caps: slabs 3d/300 and 5d/450; beam stirrups 0.75d/300; maximum flexural steel 4 percent.",
            ],
            table: {
              caption: "IS 456 numbers to carry into every exam.",
              headers: ["Requirement", "IS 456 value"],
              rows: [
                ["Cover: mild / moderate / severe", "20 / 30 / 45 mm"],
                ["Cover: column bars / footings", "40 mm / 50 mm"],
                ["Ld, Fe415 in M20 (tension / compression)", "47 dia / 38 dia"],
                ["Tension lap", "at least max(Ld, 30 dia)"],
                ["Slab spacing: main / distribution", "3d or 300 / 5d or 450 mm"],
                ["Minimum slab steel (deformed bars)", "0.12% of gross area"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The detailing rule pyramid",
              caption: "From keeping steel alive to keeping it placeable.",
              tiers: [
                { label: "Durability", note: "covers by exposure - the base of service life" },
                { label: "Bond", note: "development length, hooks, laps - force must travel" },
                { label: "Quantity limits", note: "minimum and maximum steel per member" },
                { label: "Placeability", note: "spacing for concrete flow and vibration" },
              ],
            },
            callout: {
              type: "exam",
              title: "The easiest full marks in the paper",
              body: "This section is pure recall with no arithmetic: memorise the table cold - the cover ladder, 47/38 diameters, 30/24-dia laps, the spacing caps - and it converts any three short questions into banked marks before you touch a design question.",
            },
            keyTerms: [
              { term: "Nominal cover", definition: "The design distance from concrete surface to the outermost steel, fixed by exposure class - the durability floor of detailing." },
              { term: "Development length", definition: "The bonded length a bar needs to develop its design stress: Ld = phi sigma_s/(4 tau_bd), about 47 dia for Fe415 in M20 tension." },
              { term: "Lap length", definition: "The overlap transferring force between bars: at least the development length, never below 30 dia in tension or 24 dia in compression." },
            ],
            examQuestions: [
              {
                q: "State the IS 456 provisions for nominal cover, development length and laps, explaining why compression bars need shorter anchorage; give the values for Fe415 in M20 concrete.",
                marks: 7,
                outline: [
                  "Cover by exposure: 20/30/45/50/75 mm; footings 50, column bars 40 mm minimum.",
                  "Ld formula: phi sigma_s/(4 tau_bd); name the parameters.",
                  "Bond stress modifications: +60 percent deformed bars, +25 percent compression.",
                  "Values: 47 dia tension, 38 dia compression for Fe415 in M20.",
                  "Laps: tension max(Ld, 30 dia); compression max(0.8 Ld, 24 dia); staggering.",
                  "Why compression anchorage is shorter: higher permissible bond stress.",
                  "Consequences for detailing: hooks, curtailment, lap positions.",
                ],
              },
              {
                q: "Why is the development length of a bar in compression shorter than in tension?",
                marks: 3,
              },
              {
                q: "State the minimum nominal cover for footings and for column longitudinal bars.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "IS 13920 ductile detailing",
            body: [
              "IS 13920 accepts a hard truth: earthquakes will push frames beyond their elastic strength, so the code stops pretending otherwise and instead guarantees a ductile response. Capacity design makes beams yield before columns, keeps shear and bond stronger than flexure so they cannot fail first, and concentrates damage in detailed plastic hinge zones. The detailing itself is unglamorous - closer hoops, better hooks, more bars through joints - but it is the difference between a building that sways and a building that falls. IS 1893 supplies the forces; IS 13920 supplies the survival.",
              "Beams get the hinge treatment. At least two bars run continuously top and bottom through every joint; the positive moment capacity at a joint face must be at least half the negative capacity so the beam can absorb moment reversal; and within a critical length of twice the effective depth from each joint face, closed hoops close at spacing no more than a quarter of the effective depth, eight diameters of the smallest longitudinal bar, or one hundred millimetres - whichever is least - with the first hoop within fifty millimetres of the face. Beyond the critical region the spacing relaxes to half the effective depth.",
              "Columns receive confinement where it counts. Over a special confining length at each end - the largest of a sixth of the clear height, the larger lateral dimension, or 450 millimetres - hoops close at spacing no more than a quarter of the minimum lateral dimension, six diameters of the smallest longitudinal bar, or one hundred millimetres, all with 135-degree hooks and six-diameter extensions. Splices sit away from the plastic hinge zones. Shear walls get thickness minimums and boundary elements when demands are high; the philosophy never changes - confine the ends, protect the joints, let the hinges form where they were planned.",
            ],
            bullets: [
              "Capacity design: strong column-weak beam; shear and bond stronger than flexure; hinges form only where detailed.",
              "Beams: at least 2 bars each face through joints; positive capacity at least half the negative at joint faces.",
              "Beam critical zones (2d from the face): hoops <= min(d/4, 8 x smallest bar dia, 100 mm); first hoop within 50 mm.",
              "Column confining zones: Lo = max(clear height/6, larger lateral dimension, 450 mm) at each end.",
              "Confinement spacing: <= min(minimum lateral dimension/4, 6 x smallest longitudinal dia, 100 mm) with 135-degree hooks.",
            ],
            codeExample: {
              language: "text",
              caption: "The IS 13920 confinement card - five lines that answer the detailing question.",
              code: `IS 13920 column confinement card (ductile detailing)
Special confining zone length Lo at each end:
  Lo = largest of (clear span/6, larger lateral dimension, 450 mm)
Special tie spacing within Lo:
  least of (minimum lateral dimension/4,
            6 x smallest longitudinal bar dia, 100 mm)
Hooks: 135 degrees with 6-dia extensions (closed hoops)
Elsewhere in the column: tie spacing <= half the least lateral dimension
Beams - first 2d from each joint face:
  hoop pitch <= least of (d/4, 8 x smallest bar dia, 100 mm)
  first hoop within 50 mm of the joint face
  two bars top and bottom; positive capacity >= half negative`,
            },
            diagram: {
              kind: "compare",
              title: "Ordinary vs ductile detailing",
              caption: "Same column, two very different earthquakes.",
              left: {
                heading: "IS 456 ordinary",
                items: [
                  "90-degree stirrup hooks",
                  "uniform tie pitch up to 300 mm",
                  "no special end zones",
                  "splices wherever convenient",
                  "brittle end failure in a quake",
                ],
              },
              right: {
                heading: "IS 13920 ductile",
                items: [
                  "135-degree hooks, closed hoops",
                  "100 mm-class confinement at both ends",
                  "Lo zones at joints and laps",
                  "splices away from hinge zones",
                  "hinge rotates without losing load",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The three hunted numbers",
              body: "The three numbers examiners hunt: 450 millimetres (the confining length floor), 100 millimetres (the confinement spacing cap) and 135-degree hooks. Write them with their least-of and largest-of conditions - the conditions are half the marks.",
            },
            keyTerms: [
              { term: "Ductility", definition: "The ability to deform far beyond yield while carrying load - the property IS 13920 detailing buys for seismic survival." },
              { term: "Special confining reinforcement", definition: "Closely spaced closed hoops over the end zones (Lo) of beams and columns in seismic zones, confining concrete so hinges stay intact." },
              { term: "Plastic hinge", definition: "The detailed region where a member is intended to yield and rotate during a strong earthquake, absorbing energy without collapse." },
            ],
            examQuestions: [
              {
                q: "Explain the philosophy of ductile detailing per IS 13920 and state its important provisions for beams and columns, including the special confining zones and hoop spacing.",
                marks: 7,
                outline: [
                  "Capacity design idea: strong column-weak beam, shear and bond protected, planned hinges.",
                  "Beam bars through joints; positive capacity at least half the negative at joint faces.",
                  "Beam critical zone: within 2d of the face; hoop spacing min(d/4, 8 dia, 100 mm); first hoop within 50 mm.",
                  "Column confining length Lo = max(clear height/6, larger lateral dimension, 450 mm).",
                  "Confinement spacing: min(minimum lateral dimension/4, 6 x smallest longitudinal dia, 100 mm).",
                  "135-degree hooks with 6-dia extensions; splice locations away from hinge zones.",
                  "Why confinement improves ductility: confined concrete sustains compression while the hinge rotates.",
                ],
              },
              {
                q: "Why must IS 13920 stirrups use 135-degree hooks instead of 90-degree ones?",
                marks: 3,
              },
              {
                q: "Define the special confining length Lo for a column.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Joints in concrete structures",
            body: [
              "Concrete is poured in pieces, and the pieces meet at joints - chosen, not suffered. Construction joints are the planned stops between pours, placed where resuming the next day does the least harm: sections of low shear, which for slabs and beams means the middle third of spans, and for columns the joint just above the floor slab or just below the beam soffit. A good construction joint is roughened or keyed, cleaned of laitance, wetted, and restarted with a bonding layer of mortar or the same mix so the two pours behave as one.",
              "Movement joints answer concrete's chemistry. Shrinkage and temperature cycles shorten and lengthen a structure, and if it cannot move it cracks; so IS 456 expects expansion joints in buildings generally longer than about forty-five metres, formed with compressible filler board and sealed against water. Contraction joints are deliberate weakened planes that tell the concrete where to crack; isolation (separation) joints detach a slab from the things it would otherwise drag - columns, walls, machine bases - with compressible filler so each element moves alone.",
              "In water-retaining works the joints carry waterstops, because a joint that moves is a leak waiting to happen: PVC or metal strips centred on every construction and movement joint and made continuous through splices. Execution discipline finishes the job: put the joint where it was drawn, not where the pour happened to stop; prepare the surface while the concrete is young; seal movement joints with polysulfide or polyurethane sealant over a backer rod; and map every joint on as-built drawings so future alterations do not cut through one blindly. Joints are structure - drawn, numbered and inspected like any bar.",
            ],
            bullets: [
              "Construction joints: planned pour stops at low-shear sections - middle third of slab and beam spans; columns at floor level or below the beam soffit.",
              "Preparation: roughen or key, remove laitance, wet, and restart with a bonding layer.",
              "Expansion joints for buildings generally longer than about 45 m (IS 456): filler board plus sealant.",
              "Contraction joints: pre-formed weak planes that channel inevitable shrinkage cracks.",
              "Isolation joints: compressible filler detaching slabs from columns, walls and equipment; waterstops wherever joints hold liquid.",
            ],
            table: {
              caption: "Joints in concrete: purpose and typical detailing.",
              headers: ["Joint", "Purpose", "Typical detail"],
              rows: [
                ["Construction", "between two pours", "roughened or keyed, cleaned, bonded; at low-shear sections"],
                ["Contraction", "let shrinkage crack where told", "groove or partial cut forming a weak plane"],
                ["Expansion", "absorb thermal movement", "filler board + backer rod + sealant; the ~45 m rule"],
                ["Isolation (separation)", "free the slab from fixed elements", "compressible filler around columns and walls"],
                ["Waterstopped (tanks)", "any joint that must hold liquid", "PVC or metal waterstop, centred and continuous"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the joint",
              caption: "First ask why the concrete stops - then the type picks itself.",
              start: "A plane where concrete must stop or move",
              branches: [
                { label: "Pour resumes tomorrow", outcome: "Construction joint at a low-shear section, roughened, keyed and bonded", good: true },
                { label: "Thermal movement expected", outcome: "Expansion joint: filler board, backer rod and sealant, per the ~45 m rule", good: true },
                { label: "Elements must move independently", outcome: "Isolation joint with compressible filler around the fixed element", good: true },
                { label: "An accidental mid-span stoppage", outcome: "Unplanned cold joint at maximum shear - relocate the pour plan or treat it as a designed repair", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Never leave joints to the site",
              body: "Draw each joint on the plans with its preparation note. An accidental cold joint at maximum shear is the exact defect the placement rules exist to prevent - and a favourite theory question in the process examination.",
            },
            keyTerms: [
              { term: "Construction joint", definition: "The interface between consecutive pours, placed at low-shear sections and prepared by roughening, cleaning and bonding." },
              { term: "Expansion joint", definition: "A through-structure gap with compressible filler letting a building expand with temperature; IS 456 expects one beyond about 45 m." },
              { term: "Isolation joint", definition: "A compressible-filler separation letting a slab move independently of the columns, walls or equipment it would otherwise drag along." },
            ],
            examQuestions: [
              {
                q: "Classify the joints provided in concrete structures, state where construction joints are located in slabs, beams and columns and how they are prepared, and explain the expansion joint provision of IS 456.",
                marks: 7,
                outline: [
                  "Classify: construction, contraction, expansion, isolation.",
                  "Location rule: low shear - middle third of spans for slabs and beams.",
                  "Column joints: just above the floor slab or just below the beam soffit.",
                  "Preparation: roughening or keying, laitance removal, wetting, bonding layer.",
                  "Movement joints: contraction versus expansion; the ~45 m rule with filler and sealant.",
                  "Isolation joints around columns, walls and machine bases.",
                  "Waterstops where joints must hold liquid.",
                ],
              },
              {
                q: "Why should a construction joint avoid sections of maximum shear?",
                marks: 3,
              },
              {
                q: "Differentiate between an expansion joint and an isolation joint.",
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
        "RGPV RCC-II papers reward the full-design question above all: a slab, a stair, a footing or a retaining wall carried from geometry to a reinforcement sketch. Weight your hours toward whichever of these four you can complete fastest, and treat the detailing questions as the banked marks they are.",
      ],
      weightedTopics: [
        { topic: "Retaining wall design (Rankine thrust, stability checks, cantilever members)", weight: "10-14 marks", note: "The most reliably repeated full design; rehearse Pa, the FOS table, base pressures and member steel as one flowing answer." },
        { topic: "Water tanks: rectangular walls and circular hoop tension with IS 3370", weight: "10-12 marks", note: "Hoop tension T = pR/2 and the gamma H^3/6 cantilever moment are near-guaranteed numbers." },
        { topic: "One-way and two-way slab design", weight: "10-12 marks", note: "Full strip design plus Annex D coefficients and corner torsion steel." },
        { topic: "Staircase design (dog-legged end to end)", weight: "8-10 marks", note: "Geometry, loads, waist slab, sketch - the 3.0 m floor-height classic repeats with cosmetic changes." },
        { topic: "Isolated footing design", weight: "8-10 marks", note: "Area, punching at d/2, one-way shear at d, bending at the face - four independent check marks." },
        { topic: "Column design: short/axial and uniaxial/biaxial", weight: "6-8 marks", note: "Axial formula with minimum eccentricity, SP 16 chart steps, Bresler verbatim." },
        { topic: "Bar bending schedule and detailing", weight: "5-7 marks", note: "Column list, bend deductions, d^2/162 - pure recall converted into marks." },
        { topic: "IS 13920 ductile detailing", weight: "5-6 marks", note: "Lo, 100 mm confinement spacing, 135-degree hooks - short but almost certain." },
        { topic: "Deflection control and l/d ratios", weight: "4-6 marks", note: "Two limits, three basic ratios, two modification factors - a complete answer in eight lines." },
        { topic: "Combined, strap and raft foundations", weight: "4-6 marks", note: "Selection logic and contact-pressure arithmetic usually asked as shorts." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the last week for full papers under exam timing. Keep a formula card per unit and rebuild it from memory each weekend.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - slabs", tasks: ["One-way strip design, two full problems", "Two-way restrained slab with Annex D coefficients and corner torsion", "Continuous coefficients and the l/d deflection drill"] },
        { week: "Week 2", focus: "Unit II - staircases", tasks: ["Geometry, loads and effective spans per clause 33", "Dog-legged stair, two complete designs", "Open-well, spiral and cantilever read-throughs with sketches"] },
        { week: "Week 3", focus: "Unit III - columns", tasks: ["Short column with minimum eccentricity, three problems", "Uniaxial bending with SP 16 chart practice", "Bresler biaxial, one complete answer"] },
        { week: "Week 4", focus: "Unit III - footings", tasks: ["Isolated footing, two complete designs including punching", "Combined and strap footing sizing and sketches", "Raft types and contact-pressure problems"] },
        { week: "Week 5", focus: "Unit IV - walls and tanks", tasks: ["Rankine thrust and the stability table, two full walls", "Cantilever member steel and counterfort reading", "Rectangular and circular tanks with hoop tension"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["BBS line drill and the IS 456 numbers card", "IS 13920 confinement card and joints classification", "Two full past papers under time"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours",
      body: [
        "The final day is for consolidation, not new material. Rebuild the four sketches, recite the number ladders, and trust the six weeks of work.",
      ],
      bullets: [
        "Redraw from memory: slab strip section, dog-leg stair section, footing section, cantilever wall with pressure diagrams - the four sketches papers ask for.",
        "Recite the number ladders: covers 20/30/45, Ld 47/38, laps 30/24, l/d 7/20/26, Ka 1/3 at phi 30, T = pR/2.",
        "Reread the IS 13920 confinement card and the BBS column list once each - both fit on a single page.",
        "Walk one 7-mark design mentally end to end - a retaining wall is the best bet - narrating each step without pausing to compute.",
        "Check your sketches' steel faces one last time: stem earth face, heel top, toe bottom, cantilever tread top.",
        "Sleep properly: RCC-II is recall plus steady arithmetic, and both degrade fast without rest.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Attempt the full-design question first while fresh: it carries the most marks and rewards method marks even when arithmetic stalls.",
        "Write checks as checklist lines - punching at d/2, one-way shear at d, bending at the face; overturning, sliding, base pressures - because each named check scores on its own.",
        "Sketch every member in proportion with steel faces correct; a good sketch often rescues a shaky calculation.",
        "Quote clauses and values (0.138 fck b d^2, 47 dia, the minimum eccentricity formula) before substituting numbers - quoted rules earn marks even if the arithmetic slips.",
        "Budget 15-18 minutes per 7-mark design and 4-5 minutes per short; keep the last 10 minutes for a units pass (kN, m, mm) across every design chain.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Mixing units in the load chain: kN/m2 must become N/mm before entering the Ast formula - most wrong-steel answers die at this step.",
        "Checking Mu against Mu,lim for the wrong steel grade (0.148 / 0.138 / 0.133) - write the grade at the top of the page.",
        "Forgetting corner torsion steel, or its lx/5 extent, in two-way restrained slabs.",
        "Placing heel steel at the bottom or cantilever tread steel at the bottom - tension faces, always.",
        "Using the tension development length (47 dia) where a compression lap into a footing is meant (38 dia basis, 24 dia minimum).",
        "Computing Pa but dropping the surcharge rectangle, or drawing a wall without weep holes - both are separately marked items.",
      ],
    },
  ],
};
