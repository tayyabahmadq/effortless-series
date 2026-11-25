/**
 * Academics - RGPV Civil 7th-semester subject: CE-703(B) Project Management.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce703b: AcademicSubject = {
  id: "ce-703-b",
  code: "CE-703(B)",
  title: "Project Management",
  semester: "VII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to managing civil projects: from charters and WBS to CPM, PERT and earned value, through quality, safety and risk, to contracts, tendering, claims and closeout.",
  description:
    "Five units walk from what makes a project a project - the triple constraint, PMBOK's process groups and knowledge areas, life cycles, stakeholders and the charter - through planning and scheduling with WBS, CPM, PERT and Gantt charts, into cost with estimate classes, rate analysis, bills of quantities and earned value management, then quality, safety and risk on one integrated cycle, and finally procurement and closure: contract types, tendering, claims, closeout and the case studies that prove the lessons. Every section pairs the theory with a worked site example, a redrawable diagram and the questions RGPV actually asks.",
  accentColor: "#f59e0b",
  emoji: "PM",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Project Management Fundamentals",
      summary:
        "What a project is and how it differs from operations, the PMBOK framework of process groups and knowledge areas, the phased life cycle with its gates, the stakeholders who surround every project, and the charter that authorises it all.",
      chapter: {
        number: "01",
        title: "Projects, Frameworks and People",
        intro:
          "Unit I lays the foundation: the definition and anatomy of a project against ongoing operations, the triple constraint that governs every trade-off, the PMBOK architecture of five process groups and ten knowledge areas, the life cycle with its phases and gates, the stakeholder landscape with the power-interest grid, and the charter that turns an idea into an authorised project with an empowered manager.",
        inOneBreath:
          "A project is a temporary, unique endeavour; operations are permanent and repetitive; the triple constraint binds scope, time and cost with quality at the centre; PMBOK organises the discipline into five process groups and ten knowledge areas; the life cycle runs concept to handover with phase gates; stakeholders are mapped on power and interest and engaged deliberately; and the charter, issued by the sponsor, authorises the project and its manager before a single rupee is baselined.",
        sections: [
          {
            number: "1.1",
            title: "Project versus operations and the triple constraint",
            body: [
              "A project is a temporary endeavour undertaken to create a unique product, service or result. Temporary means it has a definite beginning and end; unique means the deliverable differs in some distinguishing way from everything built before it. Construction projects fit the definition perfectly: a new hostel block on a campus has an owner, a budget, a completion date and a one-off design shaped by its site. Operations, by contrast, are permanent and repetitive - running the campus canteen, maintaining the road network or operating a water treatment plant. The output of a project is a deliverable; the output of operations is a sustained service.",
              "The two are managed with different tools and different success measures. A project succeeds when it delivers its scope within an agreed time and cost; operations succeed when availability, utilisation and unit cost stay healthy year after year. Projects assemble a temporary, cross-functional team that disbands at handover, while operations run with a stable departmental structure. Projects face high uncertainty at start - soil, weather, approvals, market prices - which decreases as work progresses, whereas operations live with steady, well-understood variability. This contrast is a favourite two-mark definitional question and opens almost every RGPV paper.",
              "Project management is the application of knowledge, skills, tools and techniques to project activities to meet requirements, and it is anchored by the triple constraint: scope, time and cost, with quality sitting at the centre as the fourth dimension. Any change in one leg forces movement in another: add a floor (scope) and either the schedule grows, the budget grows, or both. Skilled managers make the trade explicit and get it approved, while weak managers absorb it silently and discover the mismatch at closeout. The constraint is why change control, contingency and earned value exist at all.",
            ],
            bullets: [
              "Project: temporary, unique deliverable; operations: permanent, repetitive output.",
              "Triple constraint: scope, time and cost, with quality at the centre - a push on one leg moves the others.",
              "Project success = scope + time + cost + quality; operational success = availability, utilisation, unit cost.",
              "Projects use temporary cross-functional teams; operations run stable departments.",
              "Uncertainty is highest at project start and falls with progress - the reverse of operations.",
              "The constraint is why change control, contingency and earned value exist.",
            ],
            table: {
              caption: "Project versus operations - the contrast examiners expect.",
              headers: ["Aspect", "Project", "Operations"],
              rows: [
                ["Duration", "Temporary - definite start and end", "Ongoing, repetitive"],
                ["Output", "Unique product or result", "Sustained standard service"],
                ["Team", "Temporary, cross-functional", "Stable departmental structure"],
                ["Risk profile", "High at start, falls with progress", "Steady, well-understood"],
                ["Success measure", "Scope, time, cost, quality met", "Availability and unit cost"],
                ["Management tool", "Networks, WBS, earned value", "Routine and maintenance regimes"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Project versus operations at a glance",
              caption:
                "Two different games - two different management toolkits.",
              left: {
                heading: "Project",
                items: [
                  "Temporary - definite start and end",
                  "Unique, one-off deliverable",
                  "Cross-functional team that disbands",
                  "Uncertainty falls as work progresses",
                  "Success: scope + time + cost + quality",
                ],
              },
              right: {
                heading: "Operations",
                items: [
                  "Ongoing and repetitive",
                  "Standard, identical output",
                  "Stable departmental structure",
                  "Steady, known variability",
                  "Success: availability and unit cost",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The two-mark opener 'Define project and operations with examples' wants: temporary + unique, permanent + repetitive, one construction example of each. Follow with the triple constraint triangle - scope, time, cost, quality at the centre - for the seven-mark version.",
            },
            keyTerms: [
              { term: "Project", definition: "A temporary endeavour undertaken to create a unique product, service or result." },
              { term: "Operations", definition: "Permanent, repetitive organisational work that sustains the business after projects deliver." },
              { term: "Triple constraint", definition: "The interdependent limits of scope, time and cost - with quality at the centre - that bound every project." },
            ],
            examQuestions: [
              {
                q: "Define a project and distinguish it from operations with suitable examples. Explain the triple constraint and show how a change in scope affects time and cost.",
                marks: 7,
                outline: [
                  "Define project: temporary, unique deliverable; give one construction example.",
                  "Define operations: permanent, repetitive output; give one example.",
                  "Contrast on duration, output, team, risk and success measure (five rows).",
                  "Draw the triple constraint triangle: scope, time, cost with quality at the centre.",
                  "Explain the interdependence: a scope increase forces time and/or cost movement.",
                  "Illustrate: adding one floor extends the programme and raises the budget.",
                  "Conclude: change control exists to manage the constraint consciously.",
                ],
              },
              {
                q: "Write two distinguishing features each of a project and of operations.",
                marks: 2,
              },
              {
                q: "List any three characteristics of construction projects that differentiate them from manufacturing.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "The PMBOK framework: process groups and knowledge areas",
            body: [
              "The Guide to the Project Management Body of Knowledge (PMBOK), published by the Project Management Institute, organises the discipline into five process groups and ten knowledge areas. The process groups describe how work flows through time: initiating, planning, executing, monitoring and controlling, and closing. The knowledge areas describe what must be managed in every project: integration, scope, schedule, cost, quality, resource, communications, risk, procurement and stakeholder management. Each of the forty-nine processes in the sixth edition sits at the intersection of one process group and one knowledge area, producing a matrix that maps the whole profession.",
              "The power of the framework is that it separates the lifecycle of management from the lifecycle of the product. Planning, for example, is not a single meeting in week one: schedule planning produces the programme, cost planning produces the budget, risk planning produces the register, and all of it is re-planned at every major change. Monitoring and controlling runs in parallel with execution rather than after it, which is why progress measurement, variance analysis and change control dominate the middle third of any project. A construction site's monthly review meeting is monitoring and controlling in action.",
              "PMBOK is not the only framework. PRINCE2, strong in the United Kingdom, is a process-based, staged method built around a business case; ISO 21500 offers guidance aligned with PMBOK; and agencies in different countries add procurement-heavy variants. In India, government works are shaped by the General Conditions of Contract and departmental manuals rather than PMBOK language, but the underlying knowledge areas - scope, schedule, cost, quality, risk, procurement - map one to one. Exam answers score when they name the five groups, the ten areas, and give one construction example each.",
            ],
            bullets: [
              "PMBOK: 5 process groups x 10 knowledge areas = 49 processes (sixth edition).",
              "Process groups: initiating, planning, executing, monitoring and controlling, closing.",
              "Knowledge areas: integration, scope, schedule, cost, quality, resource, communications, risk, procurement, stakeholder.",
              "Monitoring and controlling runs parallel to executing - not after it.",
              "Planning is iterative: every major change re-triggers planning processes.",
              "PRINCE2, ISO 21500 and GCC-based departmental manuals are sibling frameworks.",
            ],
            table: {
              caption: "The ten knowledge areas and the question each answers.",
              headers: ["Knowledge area", "Core question"],
              rows: [
                ["Integration", "How do all the pieces stay one project?"],
                ["Scope", "What is in and what is out?"],
                ["Schedule", "When is each piece done?"],
                ["Cost", "What will it cost and are we on budget?"],
                ["Quality", "Does the work meet the specification?"],
                ["Resource", "Who and what does the work?"],
                ["Communications", "Who needs what information, when?"],
                ["Risk", "What could go wrong (or right) and what do we do?"],
                ["Procurement", "What do we buy and from whom?"],
                ["Stakeholder", "Who cares and how do we engage them?"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The five PMBOK process groups as time layers",
              caption:
                "Every knowledge area lives inside each group; monitoring runs beside execution.",
              layers: [
                { label: "Initiating", note: "charter, identify stakeholders" },
                { label: "Planning", note: "the largest group - scope to procurement plans" },
                { label: "Executing", note: "the work itself" },
                { label: "Monitoring & Controlling", note: "runs parallel to executing" },
                { label: "Closing", note: "handover, final account, lessons" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "The four core areas follow the triple constraint - scope, schedule, cost, quality - then come the people areas (resource, communications, stakeholder), then the uncertainty areas (risk, procurement), with integration gluing all ten together. 5 groups x 10 areas = 49 processes in the sixth edition.",
            },
            keyTerms: [
              { term: "PMBOK", definition: "The Project Management Institute's Guide to the Project Management Body of Knowledge, organising the discipline into process groups and knowledge areas." },
              { term: "Process group", definition: "A cluster of processes - initiating, planning, executing, monitoring and controlling, closing - that describes how work flows through time." },
              { term: "Knowledge area", definition: "A subject domain of project management - scope, schedule, cost, quality and so on - that every project must manage." },
            ],
            examQuestions: [
              {
                q: "Explain the PMBOK framework: name and describe the five process groups and the ten knowledge areas, and show how a process maps onto their intersection.",
                marks: 7,
                outline: [
                  "Name PMI and PMBOK; state 5 groups, 10 areas, 49 processes (sixth edition).",
                  "Describe each process group in one line with its key output.",
                  "List the ten knowledge areas.",
                  "Explain the matrix: every process sits at a group-area intersection; e.g. Estimate Costs = planning x cost.",
                  "Note that monitoring and controlling runs parallel to executing.",
                  "Give one construction example: the monthly site review meeting.",
                  "State two differences from PRINCE2 or ISO 21500.",
                ],
              },
              {
                q: "Name the five process groups of project management.",
                marks: 2,
              },
              {
                q: "What is meant by progressive elaboration in project planning?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "The project life cycle and phase gates",
            body: [
              "A project life cycle is the series of phases a project passes through from its start to its closure, where each phase delivers an approved, verifiable result. A typical civil project moves through concept and feasibility, design and engineering, procurement, construction, and commissioning and handover. Each phase consumes money and produces documents - a feasibility report, detailed drawings, awarded contracts, the physical works, and finally an as-built facility with its manuals. The number and names of phases differ by owner and sector, but the pattern of phase, deliverable and approval repeats everywhere.",
              "Two curves give the life cycle its shape. Cost and staffing are low at initiation, rise to a peak during construction, and fall rapidly as the project closes. Stakeholder influence and risk are highest at the start, while the cost of making a change is lowest at the start and grows brutally with time: moving a column line costs a pencil stroke at concept, a revision at design, and a demolition order at construction. Phase gates or kill points let the owner stop a project at each boundary rather than pour money into a doomed concept.",
              "Phase gates also carry work forward properly: each phase closes with an approved deliverable that becomes the fixed input to the next. The feasibility study freezes the outline scope, tender documents freeze the design, and the construction programme freezes the sequence. When a phase is closed without its deliverable being complete - drawings issued for construction while still under review, for example - the defect simply migrates downstream and becomes more expensive. Examiners regularly ask candidates to list the phases, the deliverables, and the cost-versus-influence pattern; the table and pipeline in this section provide the full answer.",
            ],
            bullets: [
              "Life cycle = phases in sequence, each ending in an approved deliverable.",
              "Typical civil phases: concept and feasibility, design, procurement, construction, commissioning.",
              "Cost and staffing peak mid-project; influence and risk peak at the start.",
              "Cost of change rises steeply with time - cheap at concept, brutal in construction.",
              "Phase gates (kill points) let the owner stop or redirect at each boundary.",
              "Closing a phase without its deliverable pushes the defect downstream at higher cost.",
            ],
            table: {
              caption: "Phases, deliverables and the rough share of project money they consume.",
              headers: ["Phase", "Key deliverable", "Typical cost share"],
              rows: [
                ["Concept and feasibility", "Feasibility report, sanction", "3-5%"],
                ["Design and engineering", "IFC drawings, specifications, BOQ", "8-12%"],
                ["Procurement", "Awarded contracts and orders", "2-4%"],
                ["Construction", "The physical works", "70-80%"],
                ["Commissioning and handover", "As-built facility with manuals", "2-3%"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "A civil project life cycle",
              caption:
                "Each stage ends in an approved deliverable that freezes scope for the next.",
              stages: [
                { label: "Concept & feasibility", note: "options, rough cost, sanction" },
                { label: "Design & engineering", note: "drawings, specifications, BOQ" },
                { label: "Procurement", note: "tender, award, orders" },
                { label: "Construction", note: "70-80% of the money is spent" },
                { label: "Commissioning & handover", note: "tests, as-builts, closeout" },
              ],
            },
            callout: {
              type: "warning",
              title: "Groups are not phases",
              body: "Do not confuse the five process groups (initiating to closing - management logic that repeats in every phase) with the project phases (feasibility to handover - product stages that occur once). One exam question nearly every session tests exactly this confusion.",
            },
            keyTerms: [
              { term: "Project life cycle", definition: "The series of phases from initiation to closure, each ending in an approved, verifiable deliverable." },
              { term: "Phase gate", definition: "A review point at a phase boundary where the owner decides to continue, modify or kill the project." },
              { term: "Feasibility study", definition: "The early-phase analysis - technical, financial, economic, social - that establishes whether a concept justifies sanction." },
            ],
            examQuestions: [
              {
                q: "Describe the phases of a construction project life cycle with the deliverable and approximate cost share of each phase, and explain the phase-gate concept.",
                marks: 7,
                outline: [
                  "Define life cycle and the phase-deliverable-approval pattern.",
                  "Phase 1 concept and feasibility - feasibility report, 3-5%.",
                  "Phase 2 design and engineering - IFC drawings and BOQ, 8-12%.",
                  "Phase 3 procurement - awarded contracts, 2-4%.",
                  "Phase 4 construction - the works, 70-80%.",
                  "Phase 5 commissioning and handover - as-built facility, 2-3%.",
                  "Explain phase gates (kill points) and the cost-of-change curve.",
                ],
              },
              {
                q: "What is a phase gate (kill point) in a project life cycle?",
                marks: 2,
              },
              {
                q: "Why is the cost of a design change higher during construction than during concept?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Stakeholder identification and engagement",
            body: [
              "A stakeholder is any person, group or organisation that can affect, be affected by, or perceive itself to be affected by the project. A highway project touches the owner, financiers, the concessionaire, designers, contractors, suppliers, regulators, utility agencies, landowners, commuters and even shopkeepers who lose access during construction. Identification is done at initiation by brainstorming against a checklist - who pays, who approves, who builds, who inspects, who lives next door - and the result is recorded in a stakeholder register that is revisited at every phase boundary.",
              "Because no manager can engage a hundred parties equally, stakeholders are prioritised. The classic tool is the power-interest grid: power is the ability to change or stop the project, interest is the degree to which the stakeholder cares. High-power, high-interest parties are managed closely with weekly engagement; high-power, low-interest parties are kept satisfied with formal reporting; low-power, high-interest parties are kept informed; the rest are monitored. Current PMBOK thinking grades five engagement levels - unaware, resistant, neutral, supportive and leading - and plans a strategy to move each key stakeholder to the level the project needs.",
              "Engagement is continuous, not a one-time map. A community that is supportive during land acquisition can turn resistant when night-time haulage starts; a silent regulator can appear with a stop notice when river-work permits are checked. The register therefore records current and desired engagement, the gap, the owner of that relationship, and the next action. On Indian projects, the land-owning farmer, the district administration and the funding agency are the three relationships that most often decide the schedule; each deserves a named engagement owner and a standing agenda item in the monthly review.",
            ],
            bullets: [
              "Stakeholder: anyone who can affect, be affected by, or feels affected by the project.",
              "Identify early by checklist: who pays, approves, builds, inspects, lives next door.",
              "Power-interest grid strategies: manage closely, keep satisfied, keep informed, monitor.",
              "Engagement levels: unaware, resistant, neutral, supportive, leading.",
              "The register records current versus desired engagement, the gap, the owner, the next action.",
              "Re-scan stakeholders at every phase boundary - they change with the work.",
            ],
            table: {
              caption: "A highway project's stakeholder expectations and engagement strategies.",
              headers: ["Stakeholder", "Primary expectation", "Engagement strategy"],
              rows: [
                ["Client / owner", "Function delivered on time and budget", "Manage closely - weekly review"],
                ["Funding agency", "Assured utilisation of funds", "Keep satisfied - audit reports"],
                ["Contractor", "Payment on time, clear scope", "Manage closely - monthly billing meet"],
                ["Regulator", "Statutory compliance", "Keep satisfied - proactive filings"],
                ["Community", "Minimal disruption", "Keep informed - grievance desk"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The power-interest grid",
              caption:
                "Position decides the engagement strategy - not seniority, not volume.",
              axes: { x: "Interest", y: "Power" },
              quadrants: [
                { label: "Keep satisfied", note: "high power, low interest - formal reports" },
                { label: "Manage closely", note: "high power, high interest - weekly engagement" },
                { label: "Monitor", note: "low power, low interest - watch only" },
                { label: "Keep informed", note: "low power, high interest - newsletters, grievance desk" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw it for your own project",
              body: "Draw the grid in the answer book with one named stakeholder in each quadrant for a project you know - examiners award illustration marks for correctly placed labels, not for reciting a textbook list.",
            },
            keyTerms: [
              { term: "Stakeholder", definition: "Any person, group or organisation that can affect, be affected by, or perceives itself affected by the project." },
              { term: "Power-interest grid", definition: "A 2x2 prioritisation tool placing stakeholders by their power over and interest in the project." },
              { term: "Stakeholder register", definition: "The living document recording each stakeholder's expectations, current and desired engagement, owner and next action." },
            ],
            examQuestions: [
              {
                q: "Who is a stakeholder? Explain stakeholder analysis using the power-interest grid and describe four engagement strategies for a highway project.",
                marks: 7,
                outline: [
                  "Define stakeholder; list six parties for a highway project.",
                  "Explain the two axes: power (ability to affect) and interest (degree of concern).",
                  "Draw the 2x2 grid with the four quadrant strategies.",
                  "High-high: manage closely - weekly engagement with the land authority.",
                  "High power, low interest: keep satisfied - formal reporting to the financier.",
                  "Low power, high interest: keep informed - community grievance desk.",
                  "Mention the five engagement levels (unaware to leading) and the stakeholder register.",
                ],
              },
              {
                q: "Define a project stakeholder with two examples.",
                marks: 2,
              },
              {
                q: "What is a stakeholder register and what does it record?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "The project charter and project selection",
            body: [
              "The project charter is the document that formally authorises the project and gives the project manager the right to spend the organisation's money and direct its people. Issued by the sponsor - the executive who owns the business case - it can be a two-page memo for a small job or a formal board approval for a metro line. Without it, the manager negotiates with every department head; with it, authority flows from a name the organisation already obeys. The charter also names the sponsor, the top-level objectives and the initial constraints and assumptions.",
              "A usable charter states the business need and a measurable benefit, the product scope in outline, key milestones, a summary budget, the main risks and constraints, the reporting lines, and the signature that makes it real. It is deliberately written before detailed planning: it fixes the target so that planning can be judged as sufficient or insufficient against it. Between them, the business case answers 'why', the charter answers 'what and who', and the project management plan answers 'how'. Selection of the project itself may use benefit-cost ratio, net present value, internal rate of return or payback period, all summarised in the business case.",
              "In construction practice the contract often plays the charter's role for the contractor's organisation, while the owner's charter lives in the administrative approval and technical sanction. The distinction matters in disputes: the sanction defines what the government department is authorised to build and spend, and anything beyond it needs fresh approval, exactly as work beyond a charter needs sponsor change approval. Examiners like the definition, the elements, the issuing authority and one difference from the contract; the flow below shows the charter sitting between business case and baselines, which is the position that earns full marks.",
            ],
            bullets: [
              "The charter formally authorises the project and empowers the project manager.",
              "Issued by the sponsor; authority flows from the business case.",
              "Contents: business need, objectives, scope outline, milestones, budget, risks, PM authority, sign-off.",
              "Charter = what and who; PM plan = how; contract = external legal agreement.",
              "Selection metrics live in the business case: BCR, NPV, IRR, payback.",
              "In government works, administrative approval and technical sanction play the charter's role.",
            ],
            table: {
              caption: "A hostel block charter - elements and example entries.",
              headers: ["Charter element", "Example entry"],
              rows: [
                ["Business case", "Hostel for 300 students needed by July 2027"],
                ["Objectives (measurable)", "G+3 block, Rs 6.2 crore, 14 months"],
                ["Summary milestones", "Foundation day 90, handover day 420"],
                ["High-level risks", "Monsoon window, sand availability"],
                ["PM and authority level", "Named PM, sanction power Rs 25,000"],
                ["Sponsor sign-off", "Registrar, dated and signed"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From business case to baselines",
              caption:
                "The charter is the gateway document - nothing is planned against it until it is signed.",
              steps: [
                { label: "Business case", note: "why - with NPV or BCR" },
                { label: "Sponsor decides to invest" },
                { label: "Charter drafted and signed", note: "PM named and authorised" },
                { label: "Stakeholders identified" },
                { label: "Planning begins", note: "scope, schedule, cost baselines" },
              ],
            },
            callout: {
              type: "exam",
              title: "Mark-generous question",
              body: "Charter questions split cleanly: definition (1), issuing authority (1), six contents (3), difference from contract (1), role of sponsor (1). Memorise the table above as your template answer.",
            },
            keyTerms: [
              { term: "Project charter", definition: "The document that formally authorises a project and empowers the project manager, issued by the sponsor." },
              { term: "Sponsor", definition: "The executive who owns the business case, funds the project and champions it at the top table." },
              { term: "Business case", definition: "The investment argument - benefits, costs, options, risks - that justifies the project's existence." },
            ],
            examQuestions: [
              {
                q: "What is a project charter? List its contents, state who issues it, and explain how it differs from a contract and from the project management plan.",
                marks: 7,
                outline: [
                  "Define charter: formal authorisation of the project and the PM.",
                  "Issued by the sponsor; authority flows from the business case.",
                  "Contents: business need, objectives, scope outline, milestones, budget, risks, PM authority, sign-off (list six or more).",
                  "Role: fixes the target that planning is judged against.",
                  "Difference from contract: internal authorisation versus external legal agreement.",
                  "Difference from PM plan: what-and-who versus how.",
                  "Note: in government works, administrative approval and technical sanction play this role.",
                ],
              },
              {
                q: "Who signs the project charter and what authority does it confer?",
                marks: 2,
              },
              {
                q: "Name any three project selection methods used in the business case.",
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
      title: "Project Planning and Scheduling",
      summary:
        "Turning scope into a plan: the WBS, network analysis by CPM and PERT, bar and milestone charts, and the resource and time-cost optimisation of levelling and crashing.",
      chapter: {
        number: "02",
        title: "From Scope to Schedule",
        intro:
          "Unit II converts the approved scope into an executable, time-bound plan. The WBS decomposes scope into work packages; CPM builds the network, runs the two passes and isolates the critical path and floats; PERT replaces single durations with three-point estimates and probabilities; bar and milestone charts communicate the schedule; and resource levelling and crashing optimise it against crews and money.",
        inOneBreath:
          "The WBS decomposes all scope into work packages under the 100 percent rule; CPM computes the longest path through the network - the zero-float critical path - by a forward and a backward pass; PERT prices uncertainty with te = (a + 4m + b)/6 and sd = (b - a)/6 and reads completion probability through Z; Gantt bars communicate while milestones summarise; and the plan is optimised by levelling resources within float and crashing critical activities by cost slope to the minimum total-cost duration.",
        sections: [
          {
            number: "2.1",
            title: "The work breakdown structure",
            body: [
              "The work breakdown structure is a hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish the project objectives and create the required deliverables. It starts from the final product - a commissioned four-storey office block - and breaks it down into phases, then deliverables, then work packages small enough to be estimated, assigned and controlled. The organising rule is the 100 percent rule: the WBS captures all - and only - the approved scope, so every level sums exactly to its parent.",
              "The work package is the lowest planned level and the point where the WBS meets management: each package has an owner, a duration, a cost and an acceptance criterion. Below it live the schedule activities that produce it, but those belong to the programme, not the WBS. Each element carries an outline numbering code - 3.2.1 for substructure, foundations, pile caps - so that cost codes, purchase orders and progress reports all key into the same tree. The WBS dictionary records, for every element, its scope, boundaries, owner and acceptance test; it prevents two packages silently claiming the same wall.",
              "The WBS underwrites every later technique in this subject. Estimating prices packages, not dreams; the network diagram sequences packages; the cost baseline is the sum of package budgets; the responsibility assignment matrix crosses packages with people; and earned value measures progress against package budgets. When scope changes arrive, they are inserted into the tree before they are inserted into the budget, which is how scope creep becomes visible in one place. A two-hour WBS workshop with the site team before the first estimate is the cheapest schedule insurance a project can buy.",
            ],
            bullets: [
              "WBS: hierarchical, deliverable-oriented decomposition of total scope.",
              "100 percent rule: children sum exactly to the parent - no double count, no gap.",
              "Work package: lowest WBS level, with owner, duration, cost and acceptance criterion.",
              "Activities live below the WBS, in the schedule - not in the tree.",
              "WBS dictionary: scope, boundaries, owner and acceptance method per element.",
              "Everything keys to the WBS: estimates, programme, cost codes, responsibility matrix, earned value.",
            ],
            table: {
              caption: "Levels of a WBS for a campus administration block.",
              headers: ["Level", "Example element", "Purpose"],
              rows: [
                ["1 Project", "Campus admin block", "Total scope container"],
                ["2 Phase / deliverable", "Substructure", "Handover-sized chunk"],
                ["3 Deliverable", "Foundations", "Assignable to one agency"],
                ["4 Work package", "Pile caps (84 nos)", "Estimable, controllable unit"],
                ["5 Activities (below WBS)", "Rebar, shutter, pour, cure", "Scheduled in the programme"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Decomposing a project into work packages",
              caption: "The 100 percent rule: each tier sums exactly to the one above.",
              tiers: [
                { label: "Project: campus admin block" },
                { label: "Phase: substructure" },
                { label: "Deliverable: foundations" },
                { label: "Work package: pile caps (84 nos)" },
                { label: "Activities: rebar, shutter, pour, cure", note: "below the WBS - these live in the programme" },
              ],
            },
            callout: {
              type: "tip",
              title: "The checking tool",
              body: "The 100 percent rule is the audit: add the child budgets at every level - if they do not equal the parent, scope is double-counted or missing. Say this in the answer even if not asked; it reads like field experience.",
            },
            keyTerms: [
              { term: "WBS", definition: "A hierarchical, deliverable-oriented decomposition of total project scope down to work packages." },
              { term: "Work package", definition: "The lowest WBS level: an estimable, assignable, controllable unit of work with an owner and acceptance criterion." },
              { term: "WBS dictionary", definition: "The companion document describing each element's scope, boundaries, owner and acceptance method." },
            ],
            examQuestions: [
              {
                q: "What is a work breakdown structure? Explain its levels, the 100 percent rule and the role of the WBS dictionary, and state how the WBS supports estimating and control.",
                marks: 7,
                outline: [
                  "Define WBS: hierarchical, deliverable-oriented decomposition.",
                  "Levels: project, phase, deliverable, work package; activities lie below.",
                  "State and explain the 100 percent rule (all and only the scope).",
                  "Work package attributes: owner, duration, cost, acceptance criterion.",
                  "WBS dictionary prevents overlap and gaps between packages.",
                  "WBS supports estimating, scheduling, cost baseline, responsibility matrix, earned value.",
                  "Give a small example: campus admin block decomposed down to pile caps.",
                ],
              },
              {
                q: "State the 100 percent rule of the WBS.",
                marks: 2,
              },
              {
                q: "What is a work package and what four attributes does it carry?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Critical path method: passes, floats and the critical path",
            body: [
              "The critical path method, developed in the late 1950s, computes the longest chain of dependent activities through a network and hence the shortest possible project duration. Activities are drawn as nodes in the activity-on-node convention, joined by finish-to-start arrows; each carries a single deterministic duration. The forward pass pushes earliest start times from the first node to the last: an activity's earliest start is the largest earliest finish among its predecessors, and the project duration is the largest earliest finish of all. A small building example runs from site clearing to finishing in thirty-eight days.",
              "The backward pass pulls latest times from the end: an activity's latest finish is the smallest latest start among its successors. Total float is the slack - latest start minus earliest start - and measures how long an activity can slip without delaying the project. Zero-float activities form the critical path; here A-B-C-D-E-G at thirty-eight days, while plumbing activity F floats for eleven days. Free float is the part of total float that does not eat a successor's early start. Delay a critical activity by one day and the completion date moves by one day; that is the definition examiners want.",
              "The critical path is where management attention belongs: crashing - spending money to shorten activities - is only worthwhile on critical activities, and float is the negotiation space for resource conflicts and delay claims. The method assumes certainty in durations, which is its main weakness and the reason PERT exists. In practice, CPM output feeds the baseline programme attached to the contract, and monthly updates compare actual dates with early and late dates to compute the slip. The Python snippet and the float table below reproduce the full calculation end to end for the worked network.",
            ],
            bullets: [
              "AON convention: activities are nodes, arrows are finish-to-start logic.",
              "Forward pass: EST = max of predecessors' EFT; project duration = max EFT.",
              "Backward pass: LFT = min of successors' LST.",
              "Total float TF = LST - EST; free float protects the successor's early start.",
              "Critical path = zero-float chain; delay there moves the completion date day for day.",
              "Crashing is only worthwhile on critical activities - float is the negotiation space.",
            ],
            codeExample: {
              language: "python",
              caption: "CPM in twenty lines: two passes, floats and the critical path for the worked network.",
              code: `# Critical Path Method - forward and backward pass (activity-on-node)
acts = {
    "A": {"dur": 2,  "pred": []},
    "B": {"dur": 6,  "pred": ["A"]},
    "C": {"dur": 8,  "pred": ["B"]},
    "D": {"dur": 10, "pred": ["C"]},
    "E": {"dur": 5,  "pred": ["D"]},
    "F": {"dur": 4,  "pred": ["C"]},
    "G": {"dur": 7,  "pred": ["E", "F"]},
}

# Forward pass: earliest start/finish (topological order of this DAG)
for name in ["A", "B", "C", "D", "E", "F", "G"]:
    a = acts[name]
    a["est"] = max((acts[p]["eft"] for p in a["pred"]), default=0)
    a["eft"] = a["est"] + a["dur"]

project_end = max(a["eft"] for a in acts.values())

# Backward pass: latest start/finish (reverse topological order)
for name in ["G", "F", "E", "D", "C", "B", "A"]:
    a = acts[name]
    succ = [s for s in acts if name in acts[s]["pred"]]
    a["lft"] = min((acts[s]["lst"] for s in succ), default=project_end)
    a["lst"] = a["lft"] - a["dur"]
    a["tf"] = a["lst"] - a["est"]

for name in "ABCDEFG":
    a = acts[name]
    print(name, "ES", a["est"], "EF", a["eft"], "LS", a["lst"],
          "LF", a["lft"], "TF", a["tf"])

critical = [n for n in "ABCDEFG" if acts[n]["tf"] == 0]
print("Project duration:", project_end, "days")
print("Critical path:", " -> ".join(critical))`,
            },
            diagram: {
              kind: "flow",
              title: "The CPM computation sequence",
              caption: "Two passes and a filter: floats zero out the critical path.",
              steps: [
                { label: "List activities, durations, logic" },
                { label: "Draw the AON network" },
                { label: "Forward pass", note: "EST and EFT - project duration" },
                { label: "Backward pass", note: "LST and LFT from the end" },
                { label: "Compute total floats" },
                { label: "Read the critical path", note: "zero-float chain = 38 days" },
              ],
            },
            callout: {
              type: "exam",
              title: "Highest-yield numerical",
              body: "Practise drawing the AON network large, showing ES top-left and LF top-right of each node, with arrows for the two passes - method marks are awarded for the passes, not just the final path. The float table is the marking scheme in table form.",
            },
            keyTerms: [
              { term: "Critical path", definition: "The longest dependent chain through the network; its duration is the shortest possible project duration, and it has zero float." },
              { term: "Total float", definition: "The time an activity can slip without delaying the project: TF = LS - ES = LF - EF." },
              { term: "Forward pass", definition: "The network calculation that sets each activity's earliest start and finish, and hence the project duration." },
            ],
            examQuestions: [
              {
                q: "For the network A(2)-B(6)-C(8)-D(10)-E(5)-G(7), with F(4) running from C to G, perform the forward and backward passes, tabulate total floats and identify the critical path and project duration.",
                marks: 7,
                outline: [
                  "Draw the AON network listing durations and logic.",
                  "Forward pass: EST/EFT per activity - project duration 38 days.",
                  "Backward pass: LST/LFT computed backwards from node 38.",
                  "Tabulate total float TF = LST - EST for all seven activities.",
                  "F carries TF = 11; all other activities carry zero.",
                  "Critical path A-B-C-D-E-G = 38 days.",
                  "Conclude: any critical delay extends completion; management focus and crashing act here.",
                ],
              },
              {
                q: "Define total float and free float in network analysis.",
                marks: 2,
              },
              {
                q: "An activity has ES = 16, EF = 20 and LS = 27. Find its total float and state whether a 5-day slip delays the project.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "PERT: three-point estimates and completion probability",
            body: [
              "PERT - the programme evaluation and review technique - accepts that single-number durations are fiction and replaces each with three estimates: optimistic a (everything goes right), most likely m (the normal case) and pessimistic b (everything that can go wrong does). The three are combined into an expected time te = (a + 4m + b) / 6, a weighted mean that leans towards the most likely value and comes from an assumed beta distribution of durations. The spread is captured by the standard deviation sd = (b - a) / 6 and the variance sd squared, which measure schedule uncertainty activity by activity.",
              "Along a path, expected times simply add; variances add too, and the path standard deviation is the square root of their sum. That allows a probability statement: the probability of finishing by a target date Ts is read from the normal curve at Z = (Ts - Te) / sd, where Te is the path's expected duration. In the worked example, three critical activities give te values of 5, 6 and 6 days, a path Te of 17 days and sd of about 2.71 days; a 20-day target gives Z ≈ 1.11 and a completion probability of roughly 87 percent, leaving about 13 percent risk of overrun.",
              "CPM and PERT share network logic but differ in philosophy: CPM is deterministic, activity-oriented and suited to repetitive construction where durations are known from output constants, while PERT is probabilistic, event-oriented and built for first-of-a-kind work like research or novel structures. Real planning software blends them: deterministic networks seeded with three-point estimates, then Monte Carlo simulation instead of the single normal approximation. The exam pattern is fixed: state the formulas, compute te and sd for a small table, then answer one probability question using the Z statistic - exactly the sequence the code below automates.",
            ],
            bullets: [
              "Three estimates per activity: optimistic a, most likely m, pessimistic b.",
              "Expected time te = (a + 4m + b) / 6, from an assumed beta distribution.",
              "sd = (b - a) / 6; variance = sd squared - variances add along the path.",
              "Z = (Ts - Te) / sd converts a target date into a completion probability.",
              "CPM: deterministic, activity-oriented; PERT: probabilistic, event-oriented.",
              "Monte Carlo simulation is the modern industrial-strength PERT.",
            ],
            codeExample: {
              language: "python",
              caption: "PERT three-point analysis with path variance and the Z statistic.",
              code: `# PERT three-point analysis for one path of three activities
import math

acts = {
    "A": (2, 4, 12),   # (optimistic, most likely, pessimistic) in days
    "B": (3, 5, 13),
    "C": (4, 5, 12),
}

te = {}
var = {}
for name, (a, m, b) in acts.items():
    te[name] = (a + 4 * m + b) / 6.0
    var[name] = ((b - a) / 6.0) ** 2
    print(name, "te =", te[name], " sd =", round(math.sqrt(var[name]), 3))

path_te = sum(te.values())
path_sd = math.sqrt(sum(var.values()))
target = 20.0
z = (target - path_te) / path_sd

print("Path expected duration:", round(path_te, 2), "days")
print("Path standard deviation:", round(path_sd, 3))
print("Z for the 20-day target:", round(z, 3))
print("P(finish by day 20) is about 0.87 from normal tables")`,
            },
            diagram: {
              kind: "compare",
              title: "CPM versus PERT",
              caption:
                "Same network arithmetic, opposite philosophies about uncertainty.",
              left: {
                heading: "CPM",
                items: [
                  "Deterministic single duration",
                  "Activity-oriented",
                  "Built for repetitive construction",
                  "Durations from output constants",
                  "Enables time-cost trade-off (crashing)",
                ],
              },
              right: {
                heading: "PERT",
                items: [
                  "Probabilistic three-point estimate",
                  "Event-oriented",
                  "Built for first-of-a-kind work",
                  "te = (a + 4m + b) / 6, sd = (b - a) / 6",
                  "Enables completion probability via Z",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Memorise three formulas",
              body: "te = (a + 4m + b)/6, sd = (b - a)/6, Z = (Ts - Te)/sd - and one fact: Z = 1 gives about 84 percent probability of completion. Most numericals resolve to Z of 1 or 1.11.",
            },
            keyTerms: [
              { term: "Three-point estimate", definition: "The optimistic, most-likely and pessimistic duration triplet PERT uses per activity." },
              { term: "Expected time (te)", definition: "The PERT activity duration: te = (a + 4m + b) / 6, a beta-weighted mean." },
              { term: "Z statistic", definition: "The standard-normal score Z = (Ts - Te) / sd that converts a target date into a completion probability." },
            ],
            examQuestions: [
              {
                q: "Explain PERT three-point estimating. For activities with (a, m, b) of (2, 4, 12), (3, 5, 13) and (4, 5, 12) days on one path, compute the expected durations and standard deviations and the probability of finishing within 20 days.",
                marks: 7,
                outline: [
                  "State the three estimates and their meaning.",
                  "te = (a + 4m + b)/6: compute 5, 6 and 6 days.",
                  "sd = (b - a)/6: compute 1.67, 1.67 and 1.33 days.",
                  "Path Te = 17 days; variance sum = 7.33, so sd = 2.71.",
                  "Z = (20 - 17)/2.71 = 1.11.",
                  "Normal table: probability is about 0.87.",
                  "Interpret: 87 percent chance of meeting the target; add two CPM-PERT differences.",
                ],
              },
              {
                q: "Write the PERT formulas for expected time and standard deviation of an activity.",
                marks: 2,
              },
              {
                q: "What assumption does PERT make about the distribution of activity durations?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Gantt, milestone and schedule control charts",
            body: [
              "The Gantt or bar chart, popularised by Henry Gantt around 1910, draws each activity as a horizontal bar whose length is the duration and whose position is the calendar period. Bars are laid against a calendar scale, milestones appear as diamonds, and progress is shown by shading a proportional part of each bar or by a vertical time-now line. A crew can read off today's date and see in one glance which activities should be running - which is why the bar chart still rules the site office wall more than a century after network methods arrived.",
              "The bar chart has known weaknesses: it does not show dependencies clearly, it hides floats, and it cannot reveal which bar is critical unless the critical bars are specially marked. The milestone chart strips the bars away and marks only the major zero-duration events - foundation complete, structure topped out, power on, handover - making it the right summary for top management, while the network diagram remains the engineer's tool because it holds the full logic. Mature projects keep all three views generated from one network so that every level reads the same truth at its own altitude.",
              "A Gantt chart is only useful if it is kept honest. The baseline schedule is frozen at award; every month, actual start and finish dates are entered, remaining bars are re-forecast, and the slip against the baseline is reported. Percent complete should be measured physically - cubic metres poured, not rupees spent - otherwise progress is fiction. The layered diagram shows the reporting stack from milestone summary down to WBS data, and the ASCII chart in the code panel is the exact format exam questions ask candidates to sketch and update.",
            ],
            bullets: [
              "Bar chart: activity bars on a calendar scale - the site office language.",
              "Milestones are zero-duration events; diamond symbols on the chart.",
              "Time-now line plus shaded bars equals a one-look progress report.",
              "Weaknesses: dependencies and floats hidden; critical path invisible unless marked.",
              "Keep milestone, bar and network views generated from one network - one truth, three altitudes.",
              "Baseline is frozen at award; monthly updates compare actuals and re-forecast remaining bars.",
            ],
            codeExample: {
              language: "text",
              caption: "An ASCII Gantt chart for the worked 38-day network - the format to sketch in the exam.",
              code: `Legend: #### = one week of planned work; * marks the critical path.

Activity             W1   W2   W3   W4   W5   W6   W7   W8
A Site clearing  *   ####
B Excavation     *   #### ####
C Foundations    *        #### #### ####
D Framing        *                  #### #### ####
E Roofing        *                            #### ####
F Plumbing TF=11                  ####
G Finishing     *                               #### ####

Milestones (zero-duration events, drawn as diamonds):
  M1 foundations complete - end of day 16
  M2 structure topped out - end of day 26
  M3 handover - end of day 38

Update rule: draw the time-now line, shade actual progress,
re-forecast the remaining bars, never redraw the baseline.`,
            },
            diagram: {
              kind: "layers",
              title: "One programme, four altitudes of reporting",
              caption:
                "Every layer is generated from the same network - no separate truths.",
              layers: [
                { label: "Milestone chart", note: "key events only - for the board" },
                { label: "Gantt / bar chart", note: "durations and progress - for the site" },
                { label: "Network diagram", note: "logic and floats - for the planner" },
                { label: "WBS work packages", note: "the coded scope data source" },
              ],
            },
            callout: {
              type: "tip",
              title: "Updating questions",
              body: "When asked to update a Gantt chart in the exam: draw the time-now line vertically, shade completed portions, and re-forecast the remaining bars - three actions, three marks. Never redraw the baseline.",
            },
            keyTerms: [
              { term: "Gantt chart", definition: "A calendar-scaled bar chart showing each activity's planned duration, position and progress." },
              { term: "Milestone", definition: "A zero-duration significant event used to summarise and control progress." },
              { term: "Baseline", definition: "The approved frozen version of schedule or cost against which performance is measured." },
            ],
            examQuestions: [
              {
                q: "What is a Gantt chart? Explain its advantages and limitations, compare it with the milestone chart and the network diagram, and describe how a baseline Gantt chart is updated monthly.",
                marks: 7,
                outline: [
                  "Define the bar chart and its origin (Gantt, around 1910).",
                  "Elements: bars, calendar scale, milestones, time-now line, progress shading.",
                  "Advantages: readable, communication-friendly, site-wall ready.",
                  "Limitations: dependencies and floats hidden; critical path not evident.",
                  "Milestone chart: events only - a management summary; network: full logic - engineer's tool.",
                  "Updating: enter actuals, re-forecast remaining bars against the frozen baseline.",
                  "Sketch a small three-activity chart with a time-now line.",
                ],
              },
              {
                q: "What is a milestone chart?",
                marks: 2,
              },
              {
                q: "State any two limitations of the bar chart that the network diagram overcomes.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Resource allocation, levelling, smoothing and crashing",
            body: [
              "A schedule that ignores resources is a wish. Loading the network with the crew and machinery each activity needs produces a resource histogram, and the histogram almost always shows peaks that exceed what the organisation can actually field. Resource allocation assigns the scarce crews to activities by priority - usually critical first - and resource levelling then repositions non-critical activities within their float to shave the peaks and fill the valleys. Time-constrained levelling keeps the end date fixed and accepts idle time; resource-constrained levelling accepts a longer project rather than an impossible demand.",
              "Levelling manipulates float; crashing attacks the critical path itself. Crashing shortens an activity by adding resources - overtime, a second shift, an extra batching plant - at a price. The cost slope is (crash cost - normal cost) / (normal time - crash time), the rupees per day saved, and the optimum procedure crashes the cheapest critical activity first, re-checking the path after each step because the critical path can jump. Total project cost is direct cost, which rises as duration falls, plus indirect cost, which falls with duration; the minimum of their sum is the optimum duration.",
              "Fast-tracking is the other compression tool: re-sequencing so activities run in parallel that were planned in series - starting column reinforcement while footing concrete is still curing. It buys time without buying crews but multiplies rework risk if the overlap is optimistic. The exam loves the pairing: levelling uses free float and usually costs nothing, crashing shortens the critical path and always costs money, and a question that gives normal and crash data expects a step-by-step trade-off table ending at the optimum duration. The fork below drills the decision logic for a classic over-allocation week.",
            ],
            bullets: [
              "Resource histogram: demand per period; peaks usually exceed availability.",
              "Levelling shifts non-critical work within float to shave peaks (time-constrained keeps the date).",
              "Resource-constrained levelling accepts a longer project instead of an impossible demand.",
              "Smoothing uses free float only and never moves the end date.",
              "Crashing: cost slope = (crash cost - normal cost) / (normal time - crash time).",
              "Optimum duration minimises direct + indirect cost; re-check the critical path after every crash step.",
            ],
            table: {
              caption: "Levelling versus crashing - the contrast examiners ask for.",
              headers: ["Aspect", "Resource levelling", "Crashing"],
              rows: [
                ["Target", "Smooth resource demand", "Shorten project duration"],
                ["Acts on", "Non-critical activities' float", "Critical activities"],
                ["Cost impact", "Usually nil", "Premium direct cost per day saved"],
                ["Duration impact", "Unchanged (time-constrained)", "Reduced until a new path turns critical"],
                ["Key formula", "Shift within TF = LS - ES", "Slope = (CC - NC) / (NT - CT)"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Crew demand 12, availability 8 - what now?",
              caption:
                "Levelling spends float; crashing spends money. Never spend either without a record.",
              start: "Week 8: carpenters needed 12, available 8",
              branches: [
                { label: "Re-sequence within float", outcome: "Peak shaved, critical path untouched", good: true },
                { label: "Stretch or split activities", outcome: "Demand smoothed, end date holds", good: true },
                { label: "Crash with overtime", outcome: "Schedule held but premium cost incurred", good: false },
                { label: "Ignore the limit", outcome: "Idle crews, overtime claims, quality slips", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "The exam trap",
              body: "Crashing a non-critical activity buys nothing - the trap is always a table where the cheapest activity to crash sits on a non-critical path. Re-check the critical path after every single crash step.",
            },
            keyTerms: [
              { term: "Resource levelling", definition: "Rescheduling activities within float to smooth resource demand against a fixed limit." },
              { term: "Resource smoothing", definition: "Shaving peaks using free float only, leaving the end date untouched." },
              { term: "Crashing", definition: "Shortening the project by buying extra resources on critical activities; priced by cost slope." },
            ],
            examQuestions: [
              {
                q: "Distinguish resource levelling from crashing. Explain the time-cost trade-off with the cost-slope formula and describe the step-by-step procedure to find the optimum project duration.",
                marks: 7,
                outline: [
                  "Define resource histogram, allocation and levelling (time- versus resource-constrained).",
                  "Levelling acts on float, is usually cost-neutral, and may extend duration if resource-limited.",
                  "Define crashing; cost slope = (crash cost - normal cost) / (normal time - crash time).",
                  "Crash the cheapest critical activity first; re-check the path after each step.",
                  "Total cost = direct (rises when crashing) + indirect (falls with time).",
                  "Optimum duration = the minimum point of the total-cost curve.",
                  "Warn: crashing non-critical activities buys nothing; fast-tracking adds rework risk.",
                ],
              },
              {
                q: "Define cost slope in crashing.",
                marks: 2,
              },
              {
                q: "What is the difference between resource levelling and resource smoothing?",
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
      title: "Cost Estimating and Budgeting",
      summary:
        "The money map: estimate classes from order of magnitude to definitive, rate analysis for unit rates, the bill of quantities, earned value control with SPI and CPI, and cash flow on the S-curve.",
      chapter: {
        number: "03",
        title: "The Money Map",
        intro:
          "Unit III prices the plan. Estimates mature from order-of-magnitude screening numbers to tender-definitive accuracy through plinth area, cube rate and approximate quantity methods; rate analysis builds fair unit rates from material, labour, plant, overheads and profit; the bill of quantities converts drawings into measurable, priceable work; earned value management measures progress in money and forecasts the final cost; and time-phased budgeting produces the S-curve and the cash-flow forecast.",
        inOneBreath:
          "Estimate accuracy follows design maturity - benchmark to plinth area to approximate quantities to priced BOQ; rate analysis decomposes a unit rate into material, labour at constants, plant, overheads and profit; the BOQ prices identical measured scope for all bidders under IS 1200; earned value compares PV, EV and AC to yield SV, CV, SPI, CPI, EAC and TCPI; and the time-phased budget draws the S-curve whose middle third, after retention and payment lag, defines the contractor's working capital.",
        sections: [
          {
            number: "3.1",
            title: "Types of estimates and estimating methods",
            body: [
              "An estimate is a forecast of probable cost, and its accuracy is a direct function of design maturity: the less is known, the wider the band. Early in a project the owner needs an order-of-magnitude or rough cost estimate - accuracy roughly -25% to +75% - just to decide whether an idea survives. Sanction-stage estimates narrow to roughly ±10 to 15 percent, tender-stage definitive estimates to roughly ±5 percent, and the post-tender working budget is then managed line by line. Each class has a defined input: benchmark rates, plinth areas, quantities from preliminary drawings, or a fully measured bill of quantities.",
              "Indian estimating practice adds its own ladder of approximate methods for early decisions. The plinth area method multiplies the covered area by a prevailing rate per square metre; the cube rate method multiplies volume by a rate per cubic metre and suits tall, irregular buildings; the approximate quantities method prices the main bill items - earthwork, concrete, brickwork, finishes - from rough quantities per metre of the building; and service or functional unit methods use cost per bed for a hospital or per kilometre for a road. All four trade precision for speed at exactly the stage where speed matters.",
              "PMI groups the underlying techniques into analogous estimating (use a similar past job), parametric estimating (multiply a statistical unit rate), bottom-up estimating (price the WBS from the work packages upward) and three-point estimating (blend optimistic, likely and pessimistic to carry risk). Bottom-up is the most accurate and the most expensive to produce; analogous is quick but inherits the old project's luck. Every estimate should state its basis, its exclusions and its contingency - an unstated contingency is not prudence, it is an error waiting to be discovered, and the examiner rewards answers that say so.",
            ],
            bullets: [
              "Accuracy is a function of design maturity: wider early, tighter late.",
              "Order of magnitude: benchmark or functional-unit rate, about -25% to +75%.",
              "Preliminary: plinth area or cube rate method, about ±10-15%.",
              "Budget: approximate quantities of the main items, about ±10%.",
              "Definitive: fully priced BOQ from complete drawings, about ±5%.",
              "PMI techniques: analogous, parametric, bottom-up, three-point estimating.",
            ],
            table: {
              caption: "Estimate classes by stage, basis and typical accuracy.",
              headers: ["Estimate class", "Stage", "Basis", "Typical accuracy"],
              rows: [
                ["Order of magnitude", "Concept screening", "Benchmark, functional unit rates", "-25% to +75%"],
                ["Preliminary / sanction", "Feasibility", "Plinth area or cube rate", "±10-15%"],
                ["Budget estimate", "Design development", "Approximate quantities", "±10%"],
                ["Definitive / tender", "Complete design", "Priced bill of quantities", "±5%"],
                ["Detailed control estimate", "Pre-execution", "Priced BOQ + programme", "±3%"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Estimate classes from concept to control",
              caption: "Accuracy tightens as design matures - each tier needs a defined input.",
              tiers: [
                { label: "Order of magnitude", note: "-25% to +75% - concept screening" },
                { label: "Preliminary / sanction", note: "±10-15% - plinth area or cube rate" },
                { label: "Budget estimate", note: "±10% - approximate quantities" },
                { label: "Definitive / tender", note: "±5% - priced BOQ" },
                { label: "Detailed control estimate", note: "±3% - pre-execution baseline" },
              ],
            },
            callout: {
              type: "exam",
              title: "Classify by input",
              body: "Classify an estimate by its input, not its number: benchmark rate means order of magnitude; plinth area means preliminary; approximate quantities means budget; full BOQ means definitive. The accuracy band is the next mark.",
            },
            keyTerms: [
              { term: "Order-of-magnitude estimate", definition: "A concept-stage forecast, accuracy roughly -25% to +75%, used to test viability." },
              { term: "Plinth area method", definition: "An approximate estimate: covered area multiplied by a prevailing rate per square metre." },
              { term: "Contingency reserve", definition: "Money added to the base estimate for identified risks; owned by the project manager." },
            ],
            examQuestions: [
              {
                q: "Describe the types of estimates prepared at different stages of a project with their basis and typical accuracy, and explain the plinth area, cube rate and approximate quantity methods.",
                marks: 7,
                outline: [
                  "State that accuracy is a function of design maturity.",
                  "Order of magnitude: benchmark or functional-unit rate, -25% to +75%.",
                  "Preliminary/sanction: plinth area or cube rate, ±10-15%.",
                  "Budget: approximate quantities, ±10%.",
                  "Definitive/tender: priced BOQ from complete drawings, ±5%.",
                  "Explain plinth area (area x rate) and cube rate (volume x rate) with one example each.",
                  "Add PMI techniques: analogous, parametric, bottom-up, three-point; end with the contingency note.",
                ],
              },
              {
                q: "Which estimate type is prepared at the sanction stage and with what typical accuracy?",
                marks: 2,
              },
              {
                q: "Write one line each on the plinth area and cube rate methods of approximate estimating.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Rate analysis for unit rates",
            body: [
              "Rate analysis builds the fair price of one unit of finished work - one cubic metre of M20 concrete, one cubic metre of brickwork in 1:6 mortar - so that either party can check a quoted rate line by line. It is the arithmetic behind the schedule of rates, the deciding tool in rate disputes, and the basis for extra-item pricing. The analysis decomposes the unit into five cost streams: materials at site, labour at task output constants, plant and machinery, overheads, and the contractor's profit plus a margin for risk.",
              "Materials are computed from the nominal mix plus sanctioned wastage and priced delivered at site, including conveyance. Labour is computed from labour constants - the standard complement of head mason, mason and unskilled hands per unit of a day's output - multiplied by prevailing wages. Plant is charged by the hour or day owned or hired, with fuel and the operator. Overheads recover site establishment and head-office costs, typically as a percentage, and profit is added last on the subtotal. For earthwork, the lead (haul distance) and lift (height of lift) adjust the rate directly, which is a favourite short question.",
              "The worked example below prices one cubic metre of M20 (1:1.5:3) concrete at illustrative current rates: roughly eight bags of cement, 0.42 cubic metres of sand and 0.83 cubic metres of coarse aggregate, a small mason-and-gang complement, and a half day of mixer and vibrator, giving a direct cost near Rs 9,200 and a unit rate near Rs 11,100 after ten percent overheads and ten percent profit. Real analyses quote the current district schedule of rates and market prices; the method, not the money, is the marks. State the mix, state the constants, state the percentages, and total with the chain visible.",
            ],
            bullets: [
              "Rate analysis = material + labour + plant + overheads + profit for one unit of work.",
              "Materials priced delivered at site, including wastage and conveyance.",
              "Labour from constants: gang per unit output multiplied by wages.",
              "Plant charged per hour or day, with fuel and operator.",
              "Overheads (site + head office) and profit as stated percentages, added last.",
              "Lead and lift adjust earthwork rates directly.",
            ],
            table: {
              caption: "Rate analysis for 1 cum of M20 (1:1.5:3) concrete - illustrative rates.",
              headers: ["Component", "Quantity", "Rate (Rs)", "Amount (Rs)"],
              rows: [
                ["Cement", "8.0 bags", "380/bag", "3,040"],
                ["Sand", "0.42 cum", "1,500/cum", "630"],
                ["Coarse aggregate", "0.83 cum", "1,100/cum", "913"],
                ["Water", "lump", "-", "100"],
                ["Head mason", "0.4 day", "900/day", "360"],
                ["Mason", "0.8 day", "850/day", "680"],
                ["Unskilled labour", "3.5 day", "700/day", "2,450"],
                ["Mixer and vibrator", "0.5 day", "2,000/day", "1,000"],
                ["Direct cost", "-", "-", "9,173"],
                ["Overheads at 10%", "-", "-", "917"],
                ["Profit at 10%", "-", "-", "1,009"],
                ["Unit rate (per cum)", "-", "-", "≈ 11,100"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building a unit rate, step by step",
              caption: "Material, labour, plant, overheads, profit - always in that order.",
              steps: [
                { label: "Material quantities", note: "nominal mix + wastage" },
                { label: "Material cost at site", note: "delivered, with conveyance" },
                { label: "Labour constants x wages", note: "gang output per day" },
                { label: "Plant and machinery hours" },
                { label: "Add overheads %", note: "site + head office" },
                { label: "Add profit and risk", note: "the unit rate is born" },
              ],
            },
            callout: {
              type: "tip",
              title: "Label the basis",
              body: "Always state the basis - mix, labour constants, lead and lift, percentage overheads, percentage profit - before the arithmetic. An unlabelled rate-analysis table loses more marks than a wrong multiplier.",
            },
            keyTerms: [
              { term: "Rate analysis", definition: "The itemised build-up of a fair unit rate: material, labour, plant, overheads and profit." },
              { term: "Labour constant", definition: "The standard gang size per unit of output - the masons and hands needed per cubic metre per day." },
              { term: "Lead and lift", definition: "The haul distance and height of lift that adjust earthwork rates in analysis." },
            ],
            examQuestions: [
              {
                q: "What is rate analysis? Explain its components and prepare the rate for 1 cum of M20 (1:1.5:3) concrete using illustrative rates.",
                marks: 7,
                outline: [
                  "Define rate analysis and its uses: schedule of rates, extra items, dispute settlement.",
                  "Components: materials, labour, plant, overheads, profit.",
                  "Material: cement 8 bags, sand 0.42 cum, aggregate 0.83 cum plus water.",
                  "Labour: head mason 0.4, mason 0.8, unskilled 3.5 days at stated wages.",
                  "Plant: mixer and vibrator 0.5 day.",
                  "Direct cost ≈ Rs 9,173; add overheads 10% and profit 10%.",
                  "Unit rate ≈ Rs 11,100 per cum; mention the lead/lift adjustment for earthwork.",
                ],
              },
              {
                q: "Define labour constant in rate analysis.",
                marks: 2,
              },
              {
                q: "What do lead and lift mean in earthwork rate analysis?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "The bill of quantities",
            body: [
              "The bill of quantities is a structured list of all work items, descriptions, units and quantities prepared to a standard measurement code, usually IS 1200 in India, so that all tenderers price exactly the same scope. It converts drawings into countable work: item 2.3.1, providing and laying M20 reinforced concrete in columns, cubic metre, quantity 84.5. Because measurement rules - what is measured, what is deemed included - are fixed in advance, a rate comparison between bidders is fair even when their methods differ. The BOQ is both a pricing document and the core of the contract's financial machinery.",
              "Preparation runs from drawing to tender in a fixed sequence: taking off records each dimension from the drawings in the order of the work; squaring multiplies and totals the dimensions; abstracting collects like items into a single line; and billing assembles the abstracted items with descriptions and units into the final bill. The priced bill then becomes the valued contract, and re-measurement during execution adjusts payment to the quantity actually executed - which is why unit-rate contracts lean so heavily on the measurement book, the site record of measured work signed by both parties.",
              "A well-drafted BOQ carries preambles stating the basis of rates and site conditions, provisional sums for items not yet designable - say, Rs 2 lakh for a facade feature - provisional or prime cost items where only supply or only labour is priced, and day-work rates for work that cannot be measured. Its dangers are equally practical: a missed item becomes a claim, a wrong unit converts a rate into a dispute, and an unmeasured quantity risk lands on whoever did not read the measurement code. The text extract below shows the exact column layout exam sketches demand.",
            ],
            bullets: [
              "BOQ: itemised, code-measured (IS 1200) list of work for uniform pricing.",
              "Preparation chain: taking off, squaring, abstracting, billing, pricing.",
              "Descriptions fix what is included; units fix how it is measured.",
              "Provisional sums hold money for undefined work; day-work prices unmeasurable work.",
              "Unit-rate contracts are paid on re-measurement recorded in the measurement book.",
              "A missed item becomes a claim; a wrong unit becomes a dispute.",
            ],
            codeExample: {
              language: "text",
              caption: "A BOQ extract in exam format - the layout to reproduce on paper.",
              code: `EXTRACT - BILL OF QUANTITIES (CIVIL WORKS)
Project: Academic block, polytechnic campus   Measured per IS 1200

Item  Description                              Unit   Qty     Rate(Rs)  Amount(Rs)
1.1   Earthwork in excavation for foundations  cum    486.00     312.00     151,632
1.2   Filling with approved moorum, compacted  cum    210.00     265.00      55,650
2.1   PCC 1:4:8 in foundation bases            cum     54.00   4,250.00     229,500
2.3   RCC M20 in columns                       cum     84.50   6,900.00     583,050
3.2   230 mm brickwork in CM 1:6               cum    212.00   5,600.00   1,187,200
4.1   12 mm cement plaster in CM 1:4           sqm    940.00     285.00     267,900
PS-1  Provisional sum: entrance facade feature item      1.00 200,000.00     200,000

Preamble notes:
 - Rates include all leads, lifts, tools, plant, curing and taxes.
 - PS-1 spent only as directed by the Engineer-in-charge.
 - Day-work rates (Annexure B) apply where work cannot be measured.`,
            },
            diagram: {
              kind: "pipeline",
              title: "From drawings to a priced bill",
              caption:
                "Taking-off feeds abstracting; abstracting feeds the priced tender document.",
              stages: [
                { label: "Taking off", note: "dimensions off drawings in work order" },
                { label: "Squaring", note: "multiply and total the dimensions" },
                { label: "Abstracting", note: "collect like items to single lines" },
                { label: "Billing", note: "descriptions, units, quantities" },
                { label: "Pricing", note: "rates applied - the tender BOQ" },
              ],
            },
            callout: {
              type: "warning",
              title: "The unit decides the dispute",
              body: "A 'cum' rate measured per IS 1200 includes formwork, curing and all leads unless the preamble says otherwise. Read the measurement code before pricing - most claim battles start in a preamble.",
            },
            keyTerms: [
              { term: "Bill of quantities", definition: "The itemised, code-measured list of work priced by tenderers; the contract's financial backbone." },
              { term: "Provisional sum", definition: "A sum included for work not yet designable, spent only as directed." },
              { term: "Measurement book", definition: "The site register of measured work, signed by both parties, that converts the BOQ into payment." },
            ],
            examQuestions: [
              {
                q: "What is a bill of quantities? Describe the procedure of its preparation from taking-off to the priced bill, and explain provisional sums and day-work.",
                marks: 7,
                outline: [
                  "Define BOQ and its dual role: pricing document and contract machinery.",
                  "Measurement per IS 1200 keeps comparison between bidders fair.",
                  "Taking off: dimensions read off drawings in order of work.",
                  "Squaring and abstracting: multiply, total, collect like items.",
                  "Billing: descriptions, units, quantities; then pricing at tender.",
                  "Provisional sums and prime cost items - purpose and risk.",
                  "Day-work: payment at inserted rates when work cannot be measured; role of the measurement book.",
                ],
              },
              {
                q: "What is a provisional sum in a bill of quantities?",
                marks: 2,
              },
              {
                q: "Which Indian standard governs methods of measurement, and why is it referenced in the BOQ?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Earned value management: PV, EV, AC, SPI, CPI",
            body: [
              "Earned value management measures scope, schedule and cost in one currency - money - so that progress and spend can be compared directly. Three values anchor it: planned value PV is the budgeted cost of the work scheduled to date; earned value EV is the budgeted cost of the work actually performed; actual cost AC is what that work really cost. Variance follows immediately: schedule variance SV = EV - PV is negative when behind, cost variance CV = EV - AC is negative when over budget, and the indices SPI = EV / PV and CPI = EV / AC scale the same story as ratios.",
              "Indices forecast the future. The simplest estimate at completion assumes the current cost efficiency continues: EAC = BAC / CPI; estimate to complete is EAC - AC, and variance at completion BAC - EAC states the expected overrun in money. TCPI = (BAC - EV) / (BAC - AC) is the efficiency needed on every remaining rupee to still land on budget. In the worked project, BAC is Rs 40 lakh; at month four, PV = 16, EV = 12 and AC = 15 lakh, so SPI = 0.75 and CPI = 0.80: the project is 25 percent late and 20 percent over cost, and EAC = 40 / 0.8 = Rs 50 lakh.",
              "EVM's discipline is that earned value is measured physically, not financially: a column poured earns its budgeted cost whether or not the supplier has been paid, which kills the classic illusion of a project that feels on track because the cash register is quiet. Its weakness is that it says nothing about technical quality or remaining risk, so it is paired with a milestone review. The numerical question format - given PV, EV, AC, BAC, compute everything - appears almost every session; the code panel below prints the whole answer, and the table is the formula sheet to memorise first.",
            ],
            bullets: [
              "PV: budget of work scheduled; EV: budget of work performed; AC: actual spend.",
              "SV = EV - PV; CV = EV - AC; negative variances mean behind and over.",
              "SPI = EV/PV; CPI = EV/AC; below 1.0 is trouble on that dimension.",
              "EAC = BAC/CPI is the simplest final-cost forecast; VAC = BAC - EAC.",
              "TCPI = (BAC - EV)/(BAC - AC): efficiency demanded of all remaining work.",
              "EV is measured physically - money spent is not progress earned.",
            ],
            codeExample: {
              language: "python",
              caption: "The full EVM computation for the worked month-4 review.",
              code: `# Earned value metrics for month 4 of a Rs 40 lakh project
bac = 40.0      # budget at completion, in lakh rupees
pv  = 16.0      # planned value: budget of work scheduled to date
ev  = 12.0      # earned value: budget of work actually done
ac  = 15.0      # actual cost of the work performed

sv = ev - pv                  # schedule variance (negative = behind)
cv = ev - ac                  # cost variance (negative = over cost)
spi = ev / pv                 # schedule performance index
cpi = ev / ac                 # cost performance index

eac = bac / cpi               # estimate at completion (efficiency persists)
etc = eac - ac                # estimate to complete
vac = bac - eac               # variance at completion
tcpi = (bac - ev) / (bac - ac)  # efficiency needed on remaining work

print("SV =", sv, "lakh   CV =", cv, "lakh")
print("SPI =", spi, "     CPI =", cpi)
print("EAC =", eac, "lakh  ETC =", etc, "lakh")
print("VAC =", vac, "lakh  TCPI =", round(tcpi, 3))`,
            },
            diagram: {
              kind: "fork",
              title: "Month 4: SPI 0.75, CPI 0.80 - the response fork",
              caption:
                "Indices are only useful if someone acts on them within the month.",
              start: "Earned value review: behind schedule and over cost",
              branches: [
                { label: "Re-plan remaining work", outcome: "Realistic recovery baseline approved by sponsor", good: true },
                { label: "Crash or fast-track", outcome: "Time partly bought back at premium cost", good: true },
                { label: "Report and press on", outcome: "Overrun locked in - EAC Rs 50 lakh", good: false },
                { label: "Re-curve the dashboard", outcome: "Green chart, red project, nasty closeout", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Formula-marking heaven",
              body: "Write each formula before substituting. Even with an arithmetic slip, a correct formula chain earns most of the marks. And never swap them: SPI is schedule, CPI is cost; both below 1.0 mean behind and over.",
            },
            keyTerms: [
              { term: "Earned value", definition: "The budgeted cost of work actually performed - physical progress expressed in money." },
              { term: "SPI", definition: "Schedule performance index EV / PV; below 1.0 means the project is behind schedule." },
              { term: "EAC", definition: "Estimate at completion, the forecast final cost; simplest form BAC / CPI." },
            ],
            examQuestions: [
              {
                q: "Explain earned value management. For a project with BAC = Rs 40 lakh and, at month 4, PV = 16, EV = 12 and AC = 15 lakh, compute SV, CV, SPI, CPI, EAC, ETC, VAC and TCPI, and interpret the results.",
                marks: 7,
                outline: [
                  "Define PV, EV and AC with one line each.",
                  "SV = EV - PV = -4 lakh (behind); CV = EV - AC = -3 lakh (over cost).",
                  "SPI = 12/16 = 0.75; CPI = 12/15 = 0.80 - both below 1.",
                  "EAC = BAC/CPI = Rs 50 lakh.",
                  "ETC = EAC - AC = Rs 35 lakh.",
                  "VAC = 40 - 50 = -10 lakh, the expected overrun.",
                  "TCPI = (40 - 12)/(40 - 15) = 1.12 - interpret all values jointly.",
                ],
              },
              {
                q: "Write the formulas for SPI and CPI.",
                marks: 2,
              },
              {
                q: "A project has SPI = 1.05 and CPI = 0.90. State its status in one sentence.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Budgeting, cash flow and the S-curve",
            body: [
              "A budget is a time-phased plan, not just a total. The cost baseline distributes the approved budget across calendar periods using the schedule, producing the planned-value curve that earned value later measures against. When the cumulative expenditure is plotted against time it rises in a lazy S - slow mobilisation, a steep middle as construction peaks, and a flat tail as finishing dribbles to an end. The S-curve is the single most communicative cost chart in construction: baseline, actual and forecast curves on one page instantly answer where are we and where will we end.",
              "Cash flow forecasting converts the programme into monthly money. Outflow is built by time-phasing the bill of quantities with the schedule, adding overheads and taxes; inflow lags behind because certified running bills are paid one to two months after measurement, retention - commonly five percent until the defect liability period - is held back, and mobilisation advances must be recovered. The monthly gap between outflow and inflow is the contractor's working capital requirement, and under-quoting it sinks more contractors than any technical failure. Owners run the mirror image: a funding drawdown plan matched to the certified bills.",
              "The forecast is a live document: at every update, actual costs replace planned, the remaining S-curve is re-forecast, and the funding requirement is re-tested against the sanctioned limit. Front-end loading - pricing early activities richly - and back-end loading are pricing tactics that reshape the contractor's cash curve, and evaluators watch for them. Examiners ask for the S-curve shape and its reason, the retention mechanism, and one worked cash-flow table across quarters; the table and the flow diagram below give exactly that, and the earlier EVM section explains what to measure once the baseline is set.",
            ],
            bullets: [
              "Cost baseline = time-phased budget; the cumulative curve is the S-curve.",
              "S shape: slow mobilisation, steep middle, flat finishing tail.",
              "Cash outflow: BOQ phased with the programme plus overheads and taxes.",
              "Cash inflow lags 1-2 months: certification, retention (≈5%), advance recovery.",
              "The monthly gap between outflow and inflow is the working capital requirement.",
              "Owners mirror the exercise as a funding drawdown plan.",
            ],
            table: {
              caption: "A quarterly cash-flow forecast in lakh rupees (illustrative).",
              headers: ["Quarter", "Outflow (Rs lakh)", "Inflow (Rs lakh)", "Net", "Cumulative"],
              rows: [
                ["Q1", "18", "0", "-18", "-18"],
                ["Q2", "42", "30", "-12", "-30"],
                ["Q3", "55", "48", "-7", "-37"],
                ["Q4", "40", "52", "+12", "-25"],
                ["Q5", "15", "23", "+8", "-17"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Preparing the project cash-flow forecast",
              caption: "The S-curve is only as honest as its payment-lag assumptions.",
              steps: [
                { label: "Time-phase the BOQ", note: "cost per period from the programme" },
                { label: "Add overheads and taxes" },
                { label: "Apply retention (5%)", note: "and recover the mobilisation advance" },
                { label: "Lag payments 1-2 months", note: "certified bill to cash" },
                { label: "Net monthly position", note: "the working capital need" },
                { label: "Match with funding drawdown" },
              ],
            },
            callout: {
              type: "tip",
              title: "Do not forget the lag",
              body: "Retention and the 1-2 month certification lag are what make construction cash flow negative through the middle third. Draw the inflow curve one column to the right of the outflow curve and the examiner knows you have met a real project.",
            },
            keyTerms: [
              { term: "Cost baseline", definition: "The time-phased, approved budget - the S-curve - against which performance is measured." },
              { term: "S-curve", definition: "The lazy-S cumulative cost or progress curve across the project duration." },
              { term: "Retention money", definition: "A percentage - commonly 5% - held from each payment until the defect liability period ends." },
            ],
            examQuestions: [
              {
                q: "Explain the S-curve in project cost control and describe the preparation of a cash-flow forecast for a construction project, including retention and payment lag.",
                marks: 7,
                outline: [
                  "Define the cost baseline and time-phasing of the budget.",
                  "S-curve shape: slow start, steep middle, flat tail - reason: volume of work per period.",
                  "Forecast outflow: BOQ phased with the programme, plus overheads and taxes.",
                  "Apply retention 5% and recover the mobilisation advance.",
                  "Lag inflow 1-2 months behind certification.",
                  "Compute monthly net and cumulative - the working capital requirement.",
                  "State the owner-side mirror (funding drawdown) and note front-end loading as a pricing tactic.",
                ],
              },
              {
                q: "Why is the cumulative project cost curve S-shaped?",
                marks: 2,
              },
              {
                q: "What is retention money and when is it released?",
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
      title: "Quality, Safety and Risk Management",
      summary:
        "Building it right and keeping it safe: QA versus QC and the cost of quality, the PDCA cycle and seven basic tools, safety management with the hierarchy of controls, and the full risk cycle from identification to response.",
      chapter: {
        number: "04",
        title: "Building It Right, Keeping It Safe",
        intro:
          "Unit IV manages what can go wrong. Quality assurance builds quality into processes while quality control inspects it into products, both justified by the cost of quality; the PDCA cycle and the seven basic tools give the method; safety management attacks the accident pyramid through the hierarchy of controls, permits and audits; and risk management runs its own cycle - identify, analyse, respond, monitor - supported by the P-I matrix, EMV and the reserve structure.",
        inOneBreath:
          "QA prevents, QC detects, and the cost of quality - prevention, appraisal, internal and external failure - proves prevention cheapest; PDCA plus the seven tools (check sheet, histogram, Pareto, fishbone, scatter, control chart, flowchart) is the quality method; accidents follow the 1:29:300 pyramid and are controlled by elimination, substitution, engineering, administration and finally PPE; risks are identified into a register, scored P x I, analysed qualitatively and - where stakes justify it - quantitatively by EMV and simulation, and answered by avoid, transfer, mitigate or accept for threats and their twins for opportunities, with contingency and management reserves funding the accepted residue.",
        sections: [
          {
            number: "4.1",
            title: "Quality assurance versus quality control",
            body: [
              "Quality is the degree to which the work fulfils requirements. Quality assurance and quality control divide the job of achieving it. QA is process-focused and preventive: it builds quality into the way work is done through procedures, method statements, qualification of welders and batching plants, supplier approvals, audits and a certified quality management system such as ISO 9001. Its question is 'are we doing the right things, the right way?'. If QA works, most defects never happen, because the process that would have produced them was corrected first.",
              "QC is product-focused and detective: it inspects and tests the completed work against the specification. On a concrete pour that means a slump test at the point of placing, cubes cast and crushed at 7 and 28 days, cover-meter checks on reinforcement and core tests when doubts survive. Its question is 'did we do the work right?'. Every test feeds a record - test certificates, checklists, inspection reports - and failing results trigger non-conformance reports, rework or rectification, and root-cause analysis that feeds back into the QA system. The QC plan states what, when, how much and by whom.",
              "The economics of both is captured in the cost of quality: prevention costs (training, method statements, calibrated equipment), appraisal costs (testing and inspection), internal failure (rework found before handover) and external failure (defect liability claims, demolished and rebuilt work, lost reputation) - with external failure the most expensive by far. The iceberg model makes the same point: visible accident- or defect-costs float above a much larger submerged mass of rework, delay and disruption. A favourite exam pairing asks candidates to define both terms and give four examples of each, which the table below supplies verbatim.",
            ],
            bullets: [
              "Quality: the degree to which the work fulfils requirements.",
              "QA: process-focused, preventive, organisation-wide (procedures, audits, ISO 9001).",
              "QC: product-focused, detective, at the work face (slump, cubes, cover meter).",
              "Cost of quality: prevention, appraisal, internal failure, external failure.",
              "External failure is the most expensive - defects found after handover.",
              "NCRs from QC feed root-cause analysis back into the QA system.",
            ],
            table: {
              caption: "QA versus QC - the five-row contrast that mirrors the marking scheme.",
              headers: ["Aspect", "Quality assurance", "Quality control"],
              rows: [
                ["Focus", "Process", "Product"],
                ["Timing", "Before and during the work", "After the work is done"],
                ["Attitude", "Prevent defects", "Detect defects"],
                ["Tools", "Method statements, audits, ISO 9001", "Slump, cube, cover-meter tests"],
                ["Question", "Are we doing things the right way?", "Did the work come out right?"],
                ["Owner", "The whole organisation", "Site QC engineer and laboratory"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "QA builds it in, QC checks it out",
              caption:
                "One prevents, the other detects - a project needs both, in that order of importance.",
              left: {
                heading: "Quality assurance (process)",
                items: [
                  "Preventive - stops defects occurring",
                  "Method statements and procedures",
                  "System audits, ISO 9001 certification",
                  "Qualifies suppliers and workers",
                  "Owned by the whole organisation",
                ],
              },
              right: {
                heading: "Quality control (product)",
                items: [
                  "Detective - finds defects made",
                  "Inspection and testing",
                  "Slump, cubes, cover meter",
                  "Non-conformance reports",
                  "Owned by the site QC laboratory",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The classic seven-marker",
              body: "'Distinguish QA and QC with examples': answer in five rows - focus, timing, attitude, tools, owner - then add the cost of quality as prevention, appraisal, internal failure, external failure. The row structure is what the examiner's marking scheme mirrors.",
            },
            keyTerms: [
              { term: "Quality assurance", definition: "Process-focused, preventive management of quality through systems, procedures and audits." },
              { term: "Quality control", definition: "Product-focused, detective verification of quality through inspection and testing." },
              { term: "Cost of quality", definition: "The sum of prevention, appraisal and failure costs; external failure is the most expensive." },
            ],
            examQuestions: [
              {
                q: "Distinguish between quality assurance and quality control with examples from concrete construction, and explain the cost of quality.",
                marks: 7,
                outline: [
                  "Define quality: the degree to which work fulfils requirements.",
                  "QA: process-focused, preventive - method statements, audits, ISO 9001.",
                  "QA examples: batching plant qualification, welder certification, supplier approval.",
                  "QC: product-focused, detective - slump, cubes at 7 and 28 days, cover meter.",
                  "Contrast table: focus, timing, attitude, tools, owner.",
                  "Cost of quality: prevention, appraisal, internal failure, external failure.",
                  "External failure is the costliest; iceberg analogy; NCR feedback loop into QA.",
                ],
              },
              {
                q: "Give two examples each of QA and QC activities on a construction site.",
                marks: 2,
              },
              {
                q: "Classify rework discovered before handover, and a defect liability claim, under the cost of quality.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Quality management tools and the PDCA cycle",
            body: [
              "The PDCA cycle - plan, do, check, act - is the operating rhythm of quality management. Plan sets the standard and the method; do executes it, preferably on a small pilot first; check measures the result against the standard; act locks the improvement in as the new standard or discards it and loops back to planning. The cycle turns improvement from an event into a habit, and it works at every scale: a pour-card procedure, a subcontractor's month, or the whole company's ISO certification cycle.",
              "Seven basic tools make the checking concrete, and all seven are exam regulars. The check sheet tallies events as they happen; the histogram shows the shape of a measurement's distribution; the Pareto chart ranks causes so the vital few - typically about 20 percent of causes carrying 80 percent of defects - get fixed first; the cause-and-effect (Ishikawa or fishbone) diagram brainstorms causes under the classic headings of man, machine, material, method, measurement and environment; the scatter diagram tests whether two variables move together; the control chart tracks a process between statistically computed limits; and the flowchart exposes the process itself.",
              "On a concrete strength problem the seven tools chain naturally: a check sheet logs low cube results, a histogram shows the distribution dragging left, a Pareto chart blames one batching plant, a fishbone diagram traces its branch to a water meter, and the control chart confirms the process was unstable for two weeks. After the fix, control charts demonstrate the stability to the client. Quality circles and Six Sigma extend the same philosophy into the organisation; for the exam, one clear sentence per tool plus one site example earns the full seven marks.",
            ],
            bullets: [
              "PDCA: plan the standard, do (pilot), check against the standard, act to lock in or revise.",
              "Check sheet: tally events; histogram: distribution shape.",
              "Pareto: rank causes - the vital few carry most of the defects (80/20).",
              "Fishbone (Ishikawa): causes under man, machine, material, method, measurement, environment.",
              "Scatter: correlation of two variables; control chart: stability within limits.",
              "Flowchart: the process steps themselves, made visible.",
            ],
            table: {
              caption: "The seven basic tools with one site example each.",
              headers: ["Tool", "What it shows", "Site example"],
              rows: [
                ["Check sheet", "Frequency of events as they occur", "Defects logged per pour"],
                ["Histogram", "Shape of a measurement's distribution", "28-day cube strengths"],
                ["Pareto chart", "Ranked causes - the vital few", "Rework reasons by value"],
                ["Cause-effect diagram", "Causes traced to an effect (fishbone)", "Low-strength brainstorm"],
                ["Scatter diagram", "Correlation between two variables", "Water-cement ratio vs strength"],
                ["Control chart", "Process stability within limits", "Slump readings per batch"],
                ["Flowchart", "The process steps themselves", "Concrete approval cycle"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The PDCA improvement cycle",
              caption:
                "Deming's wheel - each turn ends with a better standard, not just a solved problem.",
              steps: [
                { label: "Plan", note: "set the target and the method" },
                { label: "Do", note: "execute, ideally as a pilot" },
                { label: "Check", note: "measure against the standard" },
                { label: "Act", note: "lock in or revise - then loop" },
              ],
            },
            callout: {
              type: "tip",
              title: "Positions, not names",
              body: "Learn the seven tools as problem positions: counting (check sheet), shape (histogram), ranking (Pareto), causes (fishbone), relationship (scatter), stability (control chart), process (flowchart). One phrase each wins the definition marks.",
            },
            keyTerms: [
              { term: "PDCA cycle", definition: "The plan-do-check-act improvement loop that turns quality into a habit." },
              { term: "Pareto analysis", definition: "Ranking causes to attack the vital few that produce most defects, typically in an 80/20 split." },
              { term: "Cause-and-effect diagram", definition: "The Ishikawa fishbone that organises brainstormed causes: man, machine, material, method, measurement, environment." },
            ],
            examQuestions: [
              {
                q: "Explain the PDCA cycle and the seven basic tools of quality management with one construction example of each.",
                marks: 7,
                outline: [
                  "PDCA: plan, do, check, act - improvement as a loop; give one example.",
                  "Check sheet: log defects per pour.",
                  "Histogram: distribution of 28-day cube strengths.",
                  "Pareto: rank rework causes - the vital few.",
                  "Cause-effect (Ishikawa): brainstorm causes of low strength under the six headings.",
                  "Scatter: water-cement ratio versus strength.",
                  "Control chart: slump readings between limits; flowchart: the approval cycle.",
                ],
              },
              {
                q: "What is the 80/20 rule in the context of Pareto analysis?",
                marks: 2,
              },
              {
                q: "List any five of the seven basic tools of quality.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Construction safety management",
            body: [
              "Construction is among the most hazardous industries, and safety management exists because accidents are predictable - caused, not fated. Heinrich's classic ratio places one major injury above twenty-nine minor injuries above three hundred near-misses with no injury: the near-misses are the free warnings, and a site that records and closes them starves the top of the pyramid. Accident costs split into direct costs - compensation, medical treatment, damaged plant - and much larger indirect costs: lost time, investigation, retraining, schedule disruption, fines and reputation. The iceberg metaphor again: most of the cost is underwater.",
              "Causes are classed as unsafe acts (working without a helmet, riding a hoist, removing a guard) and unsafe conditions (unshored excavation, unguarded opening, dangling cable), and control follows the hierarchy: eliminate the hazard by redesign if possible, substitute a safer method or material, engineer it away with guards, covers, edge protection and proper scaffolding, administer it with procedures, permits and training, and only then rely on personal protective equipment as the last line of defence. PPE protects one worker once; elimination protects everyone forever - which is why the hierarchy is ordered the way it is.",
              "A site safety programme names a competent safety officer, inducts every worker before first entry, runs daily toolbox talks on the day's specific hazards, issues hot-work, excavation, confined-space and work-at-height permits, inspects scaffolds and lifting gear weekly with recorded registers, and audits the whole system periodically. Statutory duties in India - under the Building and Other Construction Workers Act, the Factories Act and state rules - define welfare facilities, insurance and reporting. For the exam: define unsafe act and unsafe condition, draw the control hierarchy, and list six elements of a safety plan with one example each.",
            ],
            bullets: [
              "Heinrich ratio 1:29:300 - near-misses are the free warnings.",
              "Direct costs are the visible tip; indirect costs are the larger submerged mass.",
              "Causes: unsafe acts and unsafe conditions - both are manageable.",
              "Hierarchy of controls: eliminate, substitute, engineer, administrate, then PPE.",
              "Programme: safety officer, induction, toolbox talks, permits, inspections, audits.",
              "Statutory base: BOCW Act, Factories Act and state rules.",
            ],
            table: {
              caption: "Site hazards matched to controls and their hierarchy level.",
              headers: ["Hazard", "Control example (hierarchy level)"],
              rows: [
                ["Deep excavation collapse", "Shoring and battering (engineering)"],
                ["Fall from height", "Edge protection and lifelines (engineering)"],
                ["Scaffold failure", "Weekly tagged inspection (administrative)"],
                ["Falling objects", "Toe boards and debris nets (engineering)"],
                ["Dust and noise", "PPE: masks and earplugs (last line)"],
                ["Reversing plant", "Banksman and exclusion zone (administrative)"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The hierarchy of controls",
              caption:
                "Effectiveness falls from top to bottom - PPE is the last resort, never the first.",
              tiers: [
                { label: "Elimination", note: "redesign the hazard away" },
                { label: "Substitution", note: "safer method or material" },
                { label: "Engineering controls", note: "guards, edge protection, shoring" },
                { label: "Administrative controls", note: "permits, training, signage" },
                { label: "PPE", note: "helmet, harness, boots - the last line" },
              ],
            },
            callout: {
              type: "warning",
              title: "PPE is the wrong answer",
              body: "PPE is the answer examiners expect you to reject. The hierarchy exists precisely because a helmet does not remove the falling beam - always present controls top-down from elimination and mention PPE last.",
            },
            keyTerms: [
              { term: "Hierarchy of controls", definition: "The ranked order of hazard control: eliminate, substitute, engineer, administrate, then PPE." },
              { term: "Toolbox talk", definition: "A short daily site briefing on the specific hazards of the day's work." },
              { term: "Permit to work", definition: "A formal written authorisation for high-risk work: hot work, excavation, confined space, height." },
            ],
            examQuestions: [
              {
                q: "Explain the causes of construction accidents and describe a site safety programme built around the hierarchy of controls.",
                marks: 7,
                outline: [
                  "State Heinrich's ratio 1:29:300 - near-misses as warnings.",
                  "Direct versus indirect accident costs - the iceberg.",
                  "Unsafe acts and unsafe conditions with two examples each.",
                  "Hierarchy: eliminate, substitute, engineer, administrate, PPE - one example each.",
                  "Programme elements: safety officer, induction, toolbox talks, permits (hot work, excavation, confined space, height).",
                  "Weekly inspection of scaffolds and lifting gear; periodic safety audit.",
                  "Statutory duties under the BOCW Act; conclude on management commitment.",
                ],
              },
              {
                q: "Define an unsafe act and an unsafe condition with one example each.",
                marks: 2,
              },
              {
                q: "Name four types of permit-to-work used on a construction site.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Risk identification and analysis",
            body: [
              "A risk is an uncertain event or condition that, if it occurs, has a positive or negative effect on at least one project objective. Threats and opportunities are both risks in modern usage. Civil projects carry a thick catalogue: monsoon flooding of an open foundation, an unexpected soil stratum, price escalation of steel, a design freeze arriving late, land not handed over, or - on the positive side - an early monsoon retreat or a beneficial borrow pit discovery. Identification is deliberate: brainstorming, checklists from past projects, assumption testing, SWOT review and prompt lists, all feeding a risk register.",
              "Each register row records the risk, category, probability, impact, score, owner, response and status. Qualitative analysis scores probability and impact on simple scales - say one to five - and multiplies them into a risk score that sorts the register, feeding the probability-impact matrix where red-zone risks demand immediate response and green-zone risks sit on a watchlist. Quantitative analysis goes numerical where stakes justify it: expected monetary value multiplies probability by cost impact, decision trees fold EMV through choices, sensitivity analysis shows which uncertainty moves the outcome most, and Monte Carlo simulation samples thousands of duration or cost combinations.",
              "The two levels are complementary, not competing. Qualitative analysis is fast, cheap and mandatory - every risk gets scored; quantitative analysis is expensive and reserved for the handful of risks whose size threatens the business case, or for whole-project contingency sizing. A common failure is scoring theatre: numbers in a register that never touch the budget, whereas a mature process adds contingency reserve equal to the aggregated threat exposure. For the exam, define risk, list four identification techniques, explain the P-I matrix with a sketch, and compute one EMV example - the table and matrix below are the model answer.",
            ],
            bullets: [
              "Risk: an uncertain event with a positive or negative effect on objectives.",
              "Identification: brainstorming, checklists, assumption testing, SWOT, prompt lists.",
              "Register fields: description, category, P, I, score, owner, response, status.",
              "Qualitative: P x I scoring on the matrix; the red zone gets resources first.",
              "Quantitative: EMV, decision trees, sensitivity analysis, Monte Carlo simulation.",
              "EMV = probability x impact is the ceiling for mitigation spending.",
            ],
            table: {
              caption: "A sample risk register scored on 1-5 scales.",
              headers: ["Risk", "P (1-5)", "I (1-5)", "Score", "Response"],
              rows: [
                ["Monsoon floods open foundation", "3", "4", "12", "Mitigate - dewatering and cover"],
                ["Steel price escalation", "4", "3", "12", "Transfer - early procurement"],
                ["Land handover delayed", "2", "5", "10", "Avoid - re-sequence to other zones"],
                ["Crane breakdown", "2", "2", "4", "Accept - standby vendor list"],
                ["Favourable borrow pit find", "2", "3", "6", "Enhance - revise earthwork plan"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The probability-impact (risk) matrix",
              caption: "Score = probability x impact; the red zone gets resources first.",
              axes: { x: "Impact", y: "Probability" },
              quadrants: [
                { label: "Manage frequently", note: "high probability, low impact - nuisance zone" },
                { label: "Respond now (red zone)", note: "high probability, high impact" },
                { label: "Watchlist", note: "low probability, low impact" },
                { label: "Plan contingency", note: "low probability, high impact - the tail" },
              ],
            },
            callout: {
              type: "tip",
              title: "The one quantitative calculation",
              body: "EMV = probability x impact: a 0.3 chance of a Rs 20 lakh flood loss has an EMV of Rs 6 lakh, which is the ceiling for what you should spend mitigating it. If mitigation costs more than EMV, accept instead.",
            },
            keyTerms: [
              { term: "Risk register", definition: "The log of each risk's description, score, owner, response and current status." },
              { term: "Probability-impact matrix", definition: "The P-I grid that scores and sorts risks into response zones." },
              { term: "Expected monetary value", definition: "Probability multiplied by money impact - the risk-weighted cost of an uncertain event." },
            ],
            examQuestions: [
              {
                q: "Define risk. Explain the risk management process with identification techniques, the probability-impact matrix and one EMV computation.",
                marks: 7,
                outline: [
                  "Define risk (threat and opportunity) with three civil examples.",
                  "Identification: brainstorming, checklists, assumption analysis, SWOT.",
                  "Register fields: description, category, P, I, score, owner, response, status.",
                  "Qualitative: score = P x I on 1-5 scales; matrix zones red, amber, green.",
                  "Quantitative: EMV, decision tree, sensitivity, Monte Carlo.",
                  "EMV example: 0.3 x Rs 20 lakh = Rs 6 lakh.",
                  "Contingency reserve sized from aggregated exposure.",
                ],
              },
              {
                q: "Differentiate qualitative and quantitative risk analysis in one line each.",
                marks: 2,
              },
              {
                q: "A flood risk has probability 0.25 and impact Rs 40 lakh. Compute its EMV.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Risk response strategies and monitoring",
            body: [
              "Identified risks are managed by choosing a response strategy. For threats, the four classical strategies are: avoid - change the plan so the risk cannot occur, perhaps by re-routing a pipeline away from the landslide zone; transfer - shift the impact to a third party through insurance, subcontracting or a contractual indemnity; mitigate - reduce probability or impact, as fireproofing, dewatering and phased excavation do; and accept - when response costs more than the exposure, carry the risk actively with a contingency plan or passively with a reserve. Opportunities mirror them: exploit, share, enhance and accept.",
              "Every response creates its own arithmetic. A risk transferred to an insurer still leaves the deductible and the premium as retained cost; mitigation spends money now to reduce expected loss later, and it is justified only when the reduction exceeds the spend. Residual risk is what remains after response, secondary risk is the new risk the response itself creates - shoring an excavation to prevent collapse introduces a striking hazard - and both are recorded. Contingency reserves cover identified, accepted risks and belong to the project manager; management reserves cover the unknown-unknowns and belong to the sponsor, spent only through change control.",
              "Risk management is a cycle, not a register written once. Each period, owners re-scan for new risks, retire dead ones, re-score the living, check whether triggers - the early-warning signs such as a crack gauge reading or a steel price index threshold - have fired, execute planned responses and record the outcome in lessons learned. The risk review is a standing item in the monthly site meeting, and the register's audit trail often becomes decisive evidence in delay claims. Draw the cycle, define the eight strategies, distinguish residual from secondary risk, and name the two reserves - the complete seven marks.",
            ],
            bullets: [
              "Threat strategies: avoid, transfer, mitigate, accept.",
              "Opportunity strategies: exploit, share, enhance, accept.",
              "Residual risk remains after response; secondary risk is created by the response.",
              "Contingency reserve: PM-owned, for identified risks; management reserve: sponsor-owned, for unknowns.",
              "Triggers are early-warning signs; every risk has a named owner.",
              "The register is a live document - and later, claim evidence.",
            ],
            table: {
              caption: "Response strategies with construction examples.",
              headers: ["Strategy", "Meaning", "Civil example"],
              rows: [
                ["Avoid", "Remove the risk by changing the plan", "Re-route the pipeline clear of the slide zone"],
                ["Transfer", "Shift the impact to a third party", "Erection All Risk insurance"],
                ["Mitigate", "Cut probability or impact", "Dewatering; phased excavation"],
                ["Accept", "Carry with a reserve", "Minor rain delays in the contingency"],
                ["Exploit", "Grab the opportunity", "Early monsoon exit - pour ahead of plan"],
                ["Share / enhance", "Partner on, or strengthen, the upside", "Joint venture on a borrow pit"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Risk management is a loop, not a register",
              caption:
                "Every review re-identifies, re-scores and re-assigns - the register is never finished.",
              steps: [
                { label: "Identify", note: "brainstorm, checklists, assumptions" },
                { label: "Analyse", note: "score P x I; quantify if huge" },
                { label: "Plan response", note: "avoid, transfer, mitigate, accept" },
                { label: "Assign owner and trigger" },
                { label: "Monitor and review", note: "back to identify" },
              ],
            },
            callout: {
              type: "exam",
              title: "Eight strategies, two reserves",
              body: "Draw the four threat strategies in rough work and attach one example each, then add the opportunity twins (exploit, share, enhance) in one line - examiners reward knowing risks can be positive. Close with contingency versus management reserve.",
            },
            keyTerms: [
              { term: "Risk mitigation", definition: "Reducing a risk's probability and/or impact without removing it." },
              { term: "Residual risk", definition: "The risk that remains after the response has been implemented." },
              { term: "Management reserve", definition: "Money held by the sponsor for unknown-unknowns, spent only through change control." },
            ],
            examQuestions: [
              {
                q: "Explain the risk response strategies for threats and opportunities with construction examples, and define residual risk, secondary risk and the two reserves.",
                marks: 7,
                outline: [
                  "Threats: avoid, transfer, mitigate, accept - one example each.",
                  "Avoid: re-route the pipeline; transfer: insurance or subcontract; mitigate: dewatering; accept: reserve.",
                  "Opportunities: exploit, share, enhance, accept.",
                  "Residual risk remains after response; secondary risk is created by the response - give an example.",
                  "Contingency reserve (PM, identified risks) versus management reserve (sponsor, unknowns).",
                  "Monitoring cycle: re-scan, re-score, triggers, owners, monthly reviews.",
                  "Conclude: the register is live evidence in delay claims.",
                ],
              },
              {
                q: "Define residual risk and secondary risk.",
                marks: 2,
              },
              {
                q: "Which response strategy does buying an erection-all-risk policy represent, and why?",
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
      title: "Procurement, Contracts and Project Closure",
      summary:
        "Buying the work and finishing it: contract forms from lump sum to cost-plus, the tendering pipeline, claims and their resolution ladder, disciplined closeout, and the case studies that prove all of the above.",
      chapter: {
        number: "05",
        title: "Buying It and Handing It Over",
        intro:
          "Unit V spends the money and closes the file. Contract types - lump sum, unit price, cost-plus and their variants - allocate risk and price certainty; the tendering pipeline runs from notice to agreement with EMD, evaluation and LOA; claims and disputes are documented, noticed and resolved up a ladder to arbitration; closeout converts finished works into a completed contract with punch lists, as-builts, final accounts and lessons learned; and case studies from Sydney to Delhi show the whole subject in action.",
        inOneBreath:
          "Lump sum buys price certainty for defined scope, unit price shares quantity risk through re-measurement, and cost-plus buys speed for uncertain scope at the price of audit; tendering runs notice, documents, corrigenda, bids with EMD, technical and financial evaluation, L1, LOA and an agreement secured by performance guarantee; claims need notice, records and critical-path proof, and resolve from negotiation up through arbitration to litigation; closeout clears the punch list, delivers as-builts and manuals, settles the final account, releases retention and archives lessons learned - and the case studies say: freeze scope, empower governance, report honestly.",
        sections: [
          {
            number: "5.1",
            title: "Contract types: lump sum, unit price and cost-plus",
            body: [
              "A construction contract allocates work, risk and money between owner and contractor, and its pricing form is the most consequential choice in procurement. The fixed-price family puts a firm price on defined scope. In a lump sum contract the contractor prices the whole works for one figure - maximum price certainty for the owner, maximum estimating risk on the contractor, and change orders become expensive renegotiations; it suits fully designed, well-defined projects. In a unit price or item-rate contract the work is split into measurable items priced per unit, and payment follows re-measurement of the quantity actually executed; quantity risk is shared, because the owner pays only what is truly measured.",
              "The cost-reimbursable family pays actual allowable cost plus a fee - fixed fee, percentage fee, or fee with an incentive or a guaranteed maximum price. Certainty of price is abandoned for speed and flexibility: cost-plus suits emergencies, work with genuinely unknowable scope, or fast-track jobs where construction starts before design is complete, but it demands rigorous cost audit and an owner-side quantity and accounts machine. Between the poles sit percentage-rate contracts and schedule-of-rate contracts common in Indian departmental practice, and turnkey or EPC arrangements that fold design, procure and construct into one lump-sum wrapper for the owner's convenience.",
              "Selection logic follows three questions: how well is the scope defined, how much price certainty does the owner need, and who is best placed to carry the estimating risk - the party with the information should carry the risk. A hard lump sum on vague drawings does not transfer risk, it manufactures padding and disputes; a cost-plus on a mature design donates money. Examiners want each type defined, its risk posture stated, and one situation of use; the fork below rehearses that judgement call and the comparison table is the model answer skeleton.",
            ],
            bullets: [
              "Lump sum: firm total for defined scope - price certainty, contractor carries estimating risk.",
              "Unit price: rates per measured item, payment on re-measurement - quantity risk shared.",
              "Cost-plus: allowable cost + fee (fixed, percentage, incentive or GMP) - early start, owner cost risk.",
              "GMP caps cost-plus; savings above the ceiling are typically shared.",
              "EPC / turnkey: a single lump-sum wrapper for design-procure-construct.",
              "Rule: the party with the information should carry the risk.",
            ],
            table: {
              caption: "Contract types compared on certainty, scope and risk.",
              headers: ["Type", "Price certainty", "Scope needed", "Risk carried by"],
              rows: [
                ["Lump sum", "Highest", "Fully defined", "Contractor (estimating)"],
                ["Unit price / item rate", "Per unit only", "Measurable items", "Shared (quantity with owner)"],
                ["Cost plus fixed fee", "Lowest", "Can be vague", "Owner (cost overrun)"],
                ["Cost plus GMP", "Capped", "Partly defined", "Shared up to the ceiling"],
                ["EPC / turnkey", "High (one wrapper)", "Performance defined", "Contractor (design + build)"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the contract form",
              caption:
                "Match pricing form to scope maturity - the party with the information should carry the risk.",
              start: "Owner is selecting the contract form",
              branches: [
                { label: "Scope fully defined", outcome: "Lump sum - firm price, maximum competition", good: true },
                { label: "Quantities uncertain", outcome: "Unit price - fair re-measurement, shared quantity risk", good: true },
                { label: "Scope vague, speed vital", outcome: "Cost-plus with GMP - early start, audited costs", good: true },
                { label: "Vague scope forced to hard lump sum", outcome: "Padding, claims and disputes follow", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "The comparison question",
              body: "'Explain types of construction contracts and state the suitability of each' expects four types, one definition line, one risk note and one use-case each. The comparison table above is the marking scheme in table form.",
            },
            keyTerms: [
              { term: "Lump sum contract", definition: "A fixed total price for fully defined scope; maximum price certainty, full estimating risk on the contractor." },
              { term: "Cost-plus contract", definition: "Reimbursement of allowable actual cost plus a fee; used when scope is uncertain or speed is vital." },
              { term: "Guaranteed maximum price", definition: "A cost-plus contract capped at a ceiling, with savings above it typically shared." },
            ],
            examQuestions: [
              {
                q: "Explain lump sum, unit price and cost-plus contracts with their risk allocation and suitability, and state when each should be preferred.",
                marks: 7,
                outline: [
                  "A contract allocates work, risk and money.",
                  "Lump sum: firm total for defined scope; owner price certainty; contractor estimating risk; needs complete design.",
                  "Unit price: payment on re-measurement; quantity risk shared; suits measurable, variable-quantity work.",
                  "Cost-plus: actual cost + fee (fixed, percentage, incentive, GMP); earliest start; owner cost risk; audit burden.",
                  "Guiding principle: the party with the information should carry the risk.",
                  "Wrong pairing (lump sum on vague scope) breeds padding and claims.",
                  "Mention EPC / turnkey as a lump-sum wrapper for design-build.",
                ],
              },
              {
                q: "Which contract type suits emergency works and why?",
                marks: 2,
              },
              {
                q: "In a unit-rate contract, who carries the risk of quantity variation?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Tendering and contractor selection",
            body: [
              "Tendering is the competitive process by which an owner invites, receives and evaluates offers and awards the work. The modes differ in how widely the net is cast: open tendering publishes a notice so any qualified contractor may bid - maximum competition, but the field must then be pre-qualified or the evaluation is swamped; limited or selective tendering invites a shortlist chosen for capability and finance; single or nominated tendering asks one chosen contractor; and negotiated tendering discusses terms directly with one or few bidders, justified by emergency or specialised know-how. E-procurement portals now carry the whole cycle for public works.",
              "The procedure runs: publish the notice of invitation with eligibility criteria; issue the tender documents - invitation and instructions to tenderers, conditions of contract, specifications, drawings, bill of quantities and drafts; hold a site visit and answer pre-bid queries through formal corrigenda; receive sealed or electronic bids before the deadline together with the earnest money deposit; open and evaluate technical compliance; open the financial bids of qualified tenderers, correct arithmetical errors and adjust deviations; and award to the lowest substantially responsive bidder - the L1 - subject to the bid remaining valid through the stated validity period.",
              "Award is not the end of procurement: the letter of acceptance, the contractor's performance security - commonly ten percent of the contract value - and the signing of the agreement complete the chain before possession of site is handed over. Evaluation can be single-stage L1, two-envelope technical-then-financial, or quality-and-cost-based selection where marks for methodology and key personnel are combined with price in a stated ratio, as multilateral-funded projects require. For the exam, list the modes, narrate the procedure in order, and define EMD, corrigendum, LOA, performance security and L1 in one line each - the table below does exactly that.",
            ],
            bullets: [
              "Modes: open (anyone qualified), limited/selective (shortlist), single, negotiated.",
              "Chain: notice, documents, site visit, corrigenda, bids with EMD, evaluation, LOA, agreement.",
              "EMD (about 1-2%) stops casual withdrawal; performance security (about 10%) secures execution.",
              "L1 = lowest substantially responsive bid after corrections and deviation adjustments.",
              "QCBS blends technical marks with price in a stated ratio.",
              "The validity period keeps the bid open for acceptance, e.g. 90 days.",
            ],
            table: {
              caption: "The commercial vocabulary of tendering, one line each.",
              headers: ["Term", "One-line meaning"],
              rows: [
                ["EMD", "Bid security, typically 1-2%, forfeited on withdrawal"],
                ["Performance security", "About 10% guarantee held until the defect liability period ends"],
                ["Corrigendum", "Formal amendment to the tender documents"],
                ["L1", "Lowest substantially responsive bidder"],
                ["LOA", "Letter of acceptance that concludes the bid"],
                ["Validity period", "Bid remains open for acceptance, e.g. 90 days"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The open tendering pipeline",
              caption:
                "Every stage is documented - the audit trail is the process.",
              stages: [
                { label: "Notice published", note: "eligibility criteria stated" },
                { label: "Documents issued", note: "site visit, pre-bid queries, corrigenda" },
                { label: "Bids with EMD received", note: "sealed or e-portal, before the deadline" },
                { label: "Technical evaluation", note: "responsive bidders shortlisted" },
                { label: "Financial opening", note: "corrections, deviations, L1" },
                { label: "LOA and agreement", note: "performance security, possession of site" },
              ],
            },
            callout: {
              type: "tip",
              title: "Narrate it as a document chain",
              body: "Notice, documents, corrigendum, bid with EMD, evaluation, LOA, agreement with performance security. A chain answer cannot miss a step - and the EMD and security percentages are easy marks.",
            },
            keyTerms: [
              { term: "Tender", definition: "The formal competitive offer to execute defined work at stated rates and conditions." },
              { term: "Earnest money deposit", definition: "Bid security, typically 1-2%, forfeited if the bidder withdraws its offer." },
              { term: "Letter of acceptance", definition: "The communication that concludes the tender and creates the contract." },
            ],
            examQuestions: [
              {
                q: "Describe the modes of tendering and the step-by-step open tendering procedure from notice of invitation to signing of the agreement.",
                marks: 7,
                outline: [
                  "Modes: open, limited or selective, single, negotiated - one line each with merit.",
                  "Notice of invitation: scope, eligibility, EMD, dates.",
                  "Issue of documents: conditions, specifications, drawings, BOQ; site visit.",
                  "Pre-bid queries answered through formal corrigenda.",
                  "Receipt of bids with EMD before the deadline; public opening.",
                  "Evaluation: technical responsiveness, then financial; corrections and deviations; L1.",
                  "LOA, performance security (about 10%), agreement, possession of site; define validity period.",
                ],
              },
              {
                q: "What is an earnest money deposit and why is it taken?",
                marks: 2,
              },
              {
                q: "Distinguish open tendering from limited tendering.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Claims, disputes and their resolution",
            body: [
              "A claim is a demand by one contract party for time or money - or both - that the other party has not yet agreed. Claims arise wherever the contract's assumptions break: variation and change claims when the owner adds or alters scope; delay claims when excusable events - the owner's late drawings, a directed suspension, force majeure like flood or riot - push the critical path; disruption claims when the work is disorganised without net delay; acceleration claims when the owner directs a catch-up; and differing-site-condition claims when the ground or utilities differ materially from what the documents indicated.",
              "A claim succeeds on records and on notice. Contract conditions almost always require written notice within a stated number of days of the event becoming apparent, with particulars to follow; the site diary, the measurement book, the programme updates, weather records, drawing revision logs and correspondence are the evidence. Merit is tested against cause: a delay event only earns an extension of time if it actually touched the critical path, which is why a time-impact analysis on an updated CPM programme is the modern standard of proof. Concurrent delays - the owner's and the contractor's - typically leave each party to bear its own loss.",
              "Resolution climbs a ladder of rising cost and hostility: direct negotiation between project managers; standing dispute boards or mediation, where a neutral studies the records and recommends; conciliation under the Arbitration and Conciliation Act 1996; binding arbitration, contractually agreed and enforceable in India; and litigation in court as the last resort - slow, public and expensive. The best claim strategy is preventive: clear documents, fair risk allocation, contemporaneous records and prompt decision-making. Examiners ask for claim types, notice discipline, and the resolution ladder in order, which the flow diagram below supplies.",
            ],
            bullets: [
              "Claim: an asserted entitlement to time or money not yet agreed.",
              "Types: variation, delay (excusable/compensable), disruption, acceleration, differing site conditions.",
              "Notice within the stipulated days is a condition precedent - miss it, lose it.",
              "Evidence: site diary, measurement book, programme updates, drawings log, letters.",
              "Delay earns an extension only if it touches the critical path - time-impact analysis.",
              "Ladder: negotiation, mediation/DRB, arbitration (1996 Act), litigation.",
            ],
            table: {
              caption: "Claim types, their triggers and typical remedies.",
              headers: ["Claim type", "Trigger", "Typical remedy"],
              rows: [
                ["Variation", "Owner adds or changes scope", "Rate x measured quantity"],
                ["Excusable delay", "Late drawings, suspension, force majeure", "Extension of time"],
                ["Compensable delay", "Owner-caused critical delay", "EOT + prolongation cost"],
                ["Disruption", "Out-of-sequence access, stacked trades", "Loss-of-productivity cost"],
                ["Acceleration", "Directed catch-up", "Premium on direct cost"],
                ["Differing site condition", "Ground unlike the documents", "Extra item at a new rate"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The dispute resolution ladder",
              caption: "Cost, time and hostility rise at every step - settle as low as you can.",
              steps: [
                { label: "Dispute arises", note: "claim submitted and rejected" },
                { label: "Direct negotiation", note: "project managers, records on the table" },
                { label: "Mediation / dispute board", note: "a neutral's recommendation" },
                { label: "Arbitration", note: "binding, under the 1996 Act" },
                { label: "Litigation", note: "last resort - slow and public" },
              ],
            },
            callout: {
              type: "warning",
              title: "Claims die on notice",
              body: "'The contractor shall give written notice within 14 days' is the most common condition, and a claim served on day 15 may be time-barred regardless of merit. Record the dates in every answer.",
            },
            keyTerms: [
              { term: "Claim", definition: "A demand for time or money under the contract that the other party has not yet agreed." },
              { term: "Force majeure", definition: "An extraordinary external event - flood, riot, war - excusing performance under the contract." },
              { term: "Arbitration", definition: "Binding resolution of a dispute by a chosen neutral under the Arbitration and Conciliation Act 1996." },
            ],
            examQuestions: [
              {
                q: "What is a claim? Explain the types of construction claims and the ladder of dispute resolution from negotiation to arbitration.",
                marks: 7,
                outline: [
                  "Define claim: an asserted entitlement to time or money not yet agreed.",
                  "Types: variation, delay (excusable and compensable), disruption, acceleration, differing site conditions - one line each.",
                  "Notice discipline: written notice within the stipulated days; particulars to follow.",
                  "Evidence: site diary, MB, programme updates, correspondence.",
                  "Merit test: delay must touch the critical path - time-impact analysis.",
                  "Ladder: negotiation, mediation or DRB, arbitration (1996 Act), litigation.",
                  "Prevention: clear documents, fair risk sharing, records, prompt decisions.",
                ],
              },
              {
                q: "Define force majeure with one example.",
                marks: 2,
              },
              {
                q: "Why does a concurrent delay usually yield no compensation to either party?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Project closeout and handover",
            body: [
              "Closure is the phase that converts a finished physical work into a completed contract, and it is the most neglected part of project management - teams dissolve, managers are reassigned, and the file never closes. Proper closure is administrative and contractual at once: verify every deliverable, complete every document, settle every account, and release every resource. A punch list or snag list - the itemised register of incomplete or defective work found at the pre-completion inspection - is cleared item by item and signed off; testing and commissioning prove the systems; and statutory clearances, including the completion certificate, legalise occupation.",
              "The document set that travels with the handover is the project's permanent memory: as-built drawings recording what was actually constructed, operation and maintenance manuals, warranties and guarantees, test certificates, spare parts schedules and operator training records. Financial closure runs the final measurement through the measurement book, settles the final account with all variations and claims agreed, releases the retention money after the defect liability period - commonly twelve months - and returns the performance guarantee. Physical closure demobilises plant, restores the site, and releases and appraises the team; personnel are re-deployed, not simply let go.",
              "The final act is organisational learning: a lessons-learned workshop with owner, designer and contractor, asking what to repeat and what never to repeat, archived where the next estimator will actually find it. Closure also has a governance face - premature closure, when a project is killed mid-life, still requires the same discipline so that sunk costs are recorded honestly. Examiners ask for the closeout activities list, the meaning of a punch list and as-built drawings, the retention mechanism, and one paragraph on why lessons learned matter. The pipeline and the deliverables table below are the complete model answer.",
            ],
            bullets: [
              "Closure is administrative and contractual: deliverables, documents, accounts, resources.",
              "Punch list: itemised incomplete or defective work, cleared and signed before handover.",
              "Testing and commissioning prove systems; the completion certificate legalises occupation.",
              "As-built drawings, O&M manuals and warranties travel with the handover.",
              "The final account settles variations and claims; retention is released after the defect liability period.",
              "Lessons learned close the loop - archived where the next estimator will find them.",
            ],
            table: {
              caption: "Closeout deliverables and why each matters.",
              headers: ["Deliverable", "Prepared by", "Why it matters"],
              rows: [
                ["Punch list closure", "Site team + consultant", "Evidence of defect-free completion"],
                ["As-built drawings", "Contractor's engineer", "The legal record of what was built"],
                ["O&M manuals, warranties", "Vendors and contractor", "The basis for facility management"],
                ["Final measurement and account", "Quantity surveyor", "Settles every rupee; releases retention"],
                ["Statutory completion certificate", "Local authority", "Legal permission to occupy"],
                ["Lessons learned report", "Project manager", "Feeds the next estimate and plan"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Closeout: from practical completion to lessons learned",
              caption:
                "Closure is a process with its own deliverables - not a date on a certificate.",
              stages: [
                { label: "Pre-completion inspection", note: "punch list raised" },
                { label: "Punch list cleared", note: "item-by-item sign-off" },
                { label: "Testing and commissioning", note: "systems proven, statutory clearance" },
                { label: "Documents and manuals", note: "as-builts, O&M, warranties" },
                { label: "Final account", note: "last measurement, retention due date" },
                { label: "Handover and lessons learned", note: "team released, archive fed" },
              ],
            },
            callout: {
              type: "tip",
              title: "A process, not a date",
              body: "Closeout answers feel like list questions but are marked like process questions: sequence the activities from inspection to lessons learned and attach the why to each deliverable. The pipeline diagram is that sequence.",
            },
            keyTerms: [
              { term: "Punch list", definition: "The itemised register of incomplete or defective work to be cleared before handover." },
              { term: "As-built drawings", definition: "Drawings recording the works as actually constructed, including all site changes." },
              { term: "Lessons learned", definition: "The documented causes of success and failure, archived to improve the next project." },
            ],
            examQuestions: [
              {
                q: "Describe the activities of project closeout from pre-completion inspection to lessons learned, and state the purpose of each closeout deliverable.",
                marks: 7,
                outline: [
                  "Closure = administrative + contractual; explain why it is neglected.",
                  "Pre-completion inspection and the punch list; item-wise clearance.",
                  "Testing, commissioning, statutory completion certificate.",
                  "As-built drawings, O&M manuals, warranties, operator training.",
                  "Final measurement and account; retention release after the defect liability period; guarantee release.",
                  "Demobilisation, site restoration, team release and appraisal.",
                  "Lessons-learned workshop and archive; note premature closure needs the same discipline.",
                ],
              },
              {
                q: "What is a punch list?",
                marks: 2,
              },
              {
                q: "When is retention money released and why is it held at all?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Case studies: what makes projects succeed or fail",
            body: [
              "The Sydney Opera House is the canonical runaway: a design competition winner of 1957 was estimated at about A$7 million and four years, yet the shells were redesigned during construction, the government forced staged openings, and the building finally opened in 1973 at about A$102 million - roughly fourteen times the estimate. The engineering was eventually triumphant, but the management lessons are permanent: a concept estimate built on immature technology, a client who changed requirements mid-build, and no effective change control produced a decade of overrun. Scope freeze, not concrete, was the missing material.",
              "Boston's Big Dig - the Central Artery and Tunnel project - buried a freeway through a living city: an initial estimate of about US$2.8 billion grew to roughly $14.8 billion as unmapped utilities, contaminated soil, leaks and design changes compounded in the world's most complex urban workzone. The Channel Tunnel matched it in optimism, overrunning cost by roughly 80 percent on traffic forecasts that never materialised. Against these, Delhi Metro Phase 1 delivered largely on time and on budget through an empowered managing director, standardised station designs, phased opening of line segments, strict vendor development and open public reporting - the template for Indian megaproject governance.",
              "The comparative method is what the examiner rewards: pair a success and a failure, hold the variables side by side - estimate realism, scope definition, governance authority, stakeholder management, change control, learning - and derive the pattern. Successful projects freeze scope early, empower a strong project owner, report honestly and phase delivery; failing projects start on optimistic numbers, change scope late, share governance and discover risk at closeout. Any local flyover or campus building can serve as the third case if you can cite its dates, cost and one decision that mattered. Facts with sources beat adjectives every time.",
            ],
            bullets: [
              "Sydney Opera House: about A$7M to A$102M and 10 years late - scope and change failure.",
              "Boston Big Dig: about US$2.8B to US$14.8B - complexity and unknown site conditions.",
              "Channel Tunnel: roughly 80% cost overrun on optimistic traffic forecasts.",
              "Delhi Metro Phase 1: empowered PMO, standardised design, phased openings, honest reporting.",
              "Pattern: successes freeze scope early and empower governance; failures do neither.",
              "Case-study answers need planned-versus-actual numbers, two causes, one lesson.",
            ],
            table: {
              caption: "Four projects, planned versus actual (figures approximate, sources vary).",
              headers: ["Project", "Planned", "Actual", "Primary lesson"],
              rows: [
                ["Sydney Opera House", "A$7M, 4 years", "≈ A$102M, 10 years late", "Freeze scope before construction"],
                ["Boston Big Dig", "US$2.8B", "≈ US$14.8B", "Complexity hides cost until late"],
                ["Channel Tunnel", "≈ GBP 4.8B", "≈ GBP 9.5B (≈80% over)", "Optimism bias in forecasts"],
                ["Delhi Metro Phase 1", "≈ 65 km by 2005", "Segments opened early, near budget", "Empowered PMO + standardised design"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two projects, two management cultures",
              caption:
                "Same industry, same era - the difference is management, not engineering.",
              left: {
                heading: "Success pattern (Delhi Metro)",
                items: [
                  "Empowered, single-point PMO",
                  "Standardised station and element design",
                  "Phased opening of line segments",
                  "Honest public reporting of slippage",
                  "Vendor development before tendering",
                ],
              },
              right: {
                heading: "Runaway pattern (Sydney Opera House)",
                items: [
                  "Immature design at construction start",
                  "Client-driven scope changes mid-build",
                  "No effective change control",
                  "Political interference in staging",
                  "Estimate born before the technology existed",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Compare, do not narrate",
              body: "Case-study marks are for comparison, not storytelling: state the project, planned versus actual cost and time in one line, then two causes and one transferable lesson. Four sentences per case is the full-marks shape.",
            },
            keyTerms: [
              { term: "Scope creep", definition: "Uncontrolled growth of scope without matching time, cost or authority." },
              { term: "Optimism bias", definition: "The systematic tendency to underestimate cost and duration - the estimate disease behind most runaways." },
              { term: "Governance", definition: "The authority-and-accountability structure that lets a project decide and act fast." },
            ],
            examQuestions: [
              {
                q: "Compare two projects - one widely regarded as a success and one as a failure - and derive five transferable lessons of project management.",
                marks: 7,
                outline: [
                  "Success case: Delhi Metro Phase 1 - phased openings, standardised design, empowered PMO, public reporting.",
                  "Failure case: Sydney Opera House - from about A$7M to about A$102M and 10 years late.",
                  "State the failure mechanics: immature design, mid-build scope change, no change control.",
                  "Lesson 1: freeze scope early and control change ruthlessly.",
                  "Lesson 2: realism in estimates - guard against optimism bias.",
                  "Lesson 3: empowered single-point governance.",
                  "Lesson 4: phased delivery and honest reporting; close with archiving lessons learned.",
                ],
              },
              {
                q: "What is scope creep? Give one example.",
                marks: 2,
              },
              {
                q: "State any three reasons for the Sydney Opera House overrun.",
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
        "RGPV CE-703(B) papers split roughly in half between numerical questions and management theory. The numericals concentrate in Units II and III - CPM, PERT and earned value - while Units IV and V supply the long theory answers on quality, safety, risk, contracts and tendering. Allocate revision in that ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "CPM network analysis: passes, floats, critical path", weight: "10-14 marks", note: "The numerical banker - practise 5 full networks including the float table." },
        { topic: "PERT: te, sd, Z and completion probability", weight: "7-10 marks", note: "Formula plus one probability question; Z = 1 gives about 84%." },
        { topic: "Earned value: SV, CV, SPI, CPI, EAC, TCPI", weight: "7-10 marks", note: "One guaranteed numerical; write every formula before substituting." },
        { topic: "Contract types: lump sum, unit price, cost-plus", weight: "7-10 marks", note: "Definition + risk allocation + suitability; the comparison table answers it whole." },
        { topic: "Tendering procedure and its documents", weight: "6-8 marks", note: "Narrate the chain notice to LOA; EMD and security percentages are easy marks." },
        { topic: "Rate analysis of a unit rate", weight: "6-8 marks", note: "M20 concrete or brickwork; label basis, constants, overheads, profit." },
        { topic: "WBS: levels, 100 percent rule, dictionary", weight: "5-7 marks", note: "Draw a 5-level tree and attach the rule - rarely missed when drawn." },
        { topic: "Risk response strategies and the P-I matrix", weight: "5-7 marks", note: "Eight strategies with one example each; the matrix sketch carries half the marks." },
        { topic: "QA vs QC, PDCA and the seven tools", weight: "5-7 marks", note: "The five-row contrast plus one phrase per tool is the full answer." },
        { topic: "Claims, closeout and case studies", weight: "4-6 marks", note: "Resolution ladder order and closeout sequence; one case study with figures." },
      ],
    },
    {
      id: "six-weeks",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - fundamentals", tasks: ["Project vs operations and the triple constraint with one example each", "PMBOK groups and areas - draw the 5x10 matrix once from memory", "Stakeholder grid and charter contents for a project you know"] },
        { week: "Week 2", focus: "Unit II - WBS and CPM", tasks: ["Decompose a small building into a 4-level WBS", "Five CPM networks end to end: passes, float table, path", "Add a crash table to two of them and find the optimum duration"] },
        { week: "Week 3", focus: "Unit II - PERT, Gantt + start Unit III", tasks: ["Four PERT sums with Z-based probability", "Gantt sketching and a monthly update on paper", "Estimate classes: the ladder plus plinth and cube methods"] },
        { week: "Week 4", focus: "Unit III - the money", tasks: ["One full rate analysis (concrete) and one (brickwork)", "BOQ layout, provisional sums, IS 1200 - read the column format once", "Four EVM sets until the formulas are automatic"] },
        { week: "Week 5", focus: "Unit IV - quality, safety, risk", tasks: ["QA/QC contrast table and the seven tools with one example each", "Hierarchy of controls plus the safety programme list", "Build a risk register, sketch the P-I matrix, solve one EMV sum"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Contract types table and the tender chain from memory", "Claims ladder and closeout pipeline; revise one case study", "Two full past papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours",
      bullets: [
        "Rehearse the three numericals cold: the CPM float table, the PERT Z-value and the EVM index set - together they are close to half the paper.",
        "Redraw from memory: the triple constraint, the power-interest grid, the hierarchy of controls, the dispute ladder and the estimate pyramid.",
        "Memorise the formula strip: te = (a + 4m + b)/6; sd = (b - a)/6; SPI = EV/PV; CPI = EV/AC; EAC = BAC/CPI; cost slope = (CC - NC)/(NT - CT).",
        "Re-read the contract-types comparison table and the tender chain - two whole answers on one page.",
        "Skim one case study (Sydney Opera House or the Big Dig) and write its planned-versus-actual line twice.",
        "Sleep - the paper rewards calm pattern-matching, not a 3 a.m. cram of percentages.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Attempt the numerical questions first (CPM, PERT, EVM) while your arithmetic is freshest - they carry the most marks per minute.",
        "Draw the diagram in the first minute of every theory answer: a network, grid, pyramid or ladder earns structure marks before a word is written.",
        "Write formulas before substitution in every numerical - formula marks survive arithmetic slips.",
        "Time-box: 2-3 mark questions in 4-6 minutes, 7-mark questions in about 15, and keep the last 10 minutes to complete float and index tables.",
        "In contrast questions (QA/QC, CPM/PERT, levelling/crashing, contract types) use a ruled table - examiners mark row by row.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Swapping SPI and CPI interpretations: SPI is schedule (EV/PV), CPI is cost (EV/AC) - both below 1.0 mean trouble, never mixed.",
        "Crashing a non-critical activity because it is cheapest - only critical-path crashing shortens the project.",
        "Forgetting to re-check for a new critical path after crashing - the second path silently turns critical and the next crash buys nothing.",
        "Adding durations but not variances on a PERT path - te values add, variances add, standard deviations do not; take the square root of the sum.",
        "Confusing process groups with project phases - initiating-to-closing is management logic; feasibility-to-handover is the product's life.",
        "Writing quality control when the question asks for quality assurance - QC inspects the product afterwards; QA builds the process beforehand.",
      ],
    },
  ],
};
