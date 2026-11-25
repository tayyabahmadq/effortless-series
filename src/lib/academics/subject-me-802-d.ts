/**
 * Academics - RGPV ME 8th-semester elective: ME-802(D) Production Planning and Control.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me802d: AcademicSubject = {
  id: "me-802-d",
  code: "ME-802(D)",
  title: "Production Planning and Control",
  semester: "VIII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to production planning and control: PPC fundamentals, forecasting and aggregate planning, MRP-ERP and inventory control, shop-floor scheduling and lean, and the quality and project-management toolkit.",
  description:
    "Five units walk from the objectives and functions of PPC through demand forecasting with moving averages, exponential smoothing and aggregate strategies, then into MRP records, ERP architecture, EOQ and ABC/VED inventory control, across Gantt charts, sequencing rules and Johnson's rule to lean shop-floor practice, and finally into TQM, SPC charts, process capability, TPM/OEE and CPM/PERT networks. Every section pairs the concept with a worked numerical, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#fbbf24",
  emoji: "PP",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "PPC Fundamentals",
      summary:
        "The foundation unit: what production planning and control is, the objectives it serves, its four functions - routing, scheduling, dispatching and follow-up - and how job, batch and mass production systems change the emphasis of every one of them.",
      chapter: {
        number: "01",
        title: "Production Planning and Control: Fundamentals",
        intro:
          "Unit I defines the subject. Production planning and control is the function that decides what to make, how, when and how much before production begins, and then keeps actual output on that plan. Its four functions form a chain in time - routing sets the path, scheduling sets the calendar, dispatching pulls the trigger and follow-up fires the corrections - and the whole apparatus changes shape depending on whether the plant runs job, batch or mass production.",
        inOneBreath:
          "PPC = planning (routing, scheduling, loading) + control (dispatching, follow-up, expediting) arranged as a closed loop; its objectives are right quality, right quantity, right time and minimum cost with best utilisation of men, machines and materials; routing issues the route sheet, scheduling issues the master and machine schedules, dispatching issues job orders and tools, follow-up issues progress reports; and job, batch and mass production each shift the emphasis - fresh routing per order, lot sizing and changeovers, or forecasting and line balancing.",
        sections: [
          {
            number: "1.1",
            title: "Production systems and the objectives of PPC",
            body: [
              "Production planning and control is the management function that decides, before production begins, what to make, how much to make, how to make it and when — and then keeps actual output on that plan. Every production system converts inputs such as men, materials, machines, money and information into finished goods and services, and the conversion is never automatic: machines fail, demand shifts, materials arrive late. PPC exists to anticipate these disturbances. Planning sets the course; control measures the deviation between plan and actual and forces corrections, so the two halves operate as one continuous closed loop.",
              "A well-run PPC department is judged against a short list of objectives. It must deliver the right quality of product in the right quantity at the right time and at the least cost, while making the best use of men, machines and materials. Supporting goals follow from these: smooth work flow with minimum idle time and bottlenecks, inventory held at the optimum level rather than piling up, reliable delivery promises to customers, and a production programme flexible enough to absorb rush orders. Each objective is a balancing act — inventory targets fight flexibility targets, and cost cutting must never be allowed to eat quality.",
              "The scope of PPC spans the whole factory and its supply chain. It consumes the sales forecast and the order book, translates them into a master production schedule, explodes that schedule into material and machine requirements, and finally releases work to the shop floor. In a make-to-stock firm like a scooter plant the forecast drives everything; in a make-to-order job shop the customer order drives everything; assemble-to-order firms plan subassemblies ahead and final assembly late. The techniques of Units II to V differ in emphasis, but the loop — plan, release, measure, correct — never changes.",
            ],
            bullets: [
              "PPC = production planning (what, how, when, how much — decided before work starts) + production control (measure actual output against the plan and correct deviations).",
              "Production system: inputs of men, materials, machines, money and information are converted into outputs of goods and services.",
              "Primary objectives: right quality, right quantity, right time, minimum cost — supported by best utilisation of resources.",
              "Secondary objectives: smooth flow, low idle time, optimum inventory, dependable delivery dates, flexibility for rush orders.",
              "The loop never closes permanently: progress data from the shop floor feeds back and re-plans the next cycle.",
            ],
            table: {
              caption: "Objectives of PPC and how each is achieved.",
              headers: ["Objective", "Achieved through", "Measured by"],
              rows: [
                ["Right quality", "Process planning, route sheets, inspection plans", "Defect rate, rejections"],
                ["Right quantity", "Forecasting, MPS, inventory control", "Stock-outs vs holding cost"],
                ["Right time", "Scheduling, expediting, follow-up", "On-time delivery percentage"],
                ["Minimum cost", "Optimum routing, standard times, batch sizing", "Cost per unit"],
                ["Best utilisation", "Machine loading, capacity planning", "Machine and labour utilisation"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The PPC control loop",
              caption: "Planning sets the course, control steers back onto it — the sequence repeats every planning cycle.",
              steps: [
                { label: "Plan", note: "routing, scheduling, loading" },
                { label: "Dispatch", note: "release orders to the shop floor" },
                { label: "Produce", note: "work actually done" },
                { label: "Measure", note: "progress and output data collected" },
                { label: "Compare and correct", note: "expedite, re-plan, feed back" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The opener — 'Define PPC and state its objectives' — appears in some form almost every year. Write the definition in one sentence, split planning versus control explicitly, then list six objectives in bullets, each with one line of technique that delivers it.",
            },
            keyTerms: [
              { term: "Production planning", definition: "Deciding in advance what to produce, how much, by what process and when, so that production runs without interruption." },
              { term: "Production control", definition: "Checking actual output against the plan and applying corrections — dispatching, follow-up and expediting." },
              { term: "Production system", definition: "The arrangement that converts inputs (men, materials, machines, money) into finished goods or services." },
            ],
            examQuestions: [
              {
                q: "Define production planning and control. Explain its objectives and its importance in a manufacturing organisation.",
                marks: 7,
                outline: [
                  "Define PPC in one sentence: planning decides what/how/when/how much; control keeps output on plan.",
                  "Contrast the planning half (routing, scheduling, loading) with the control half (dispatching, follow-up, expediting).",
                  "List the four primary objectives: right quality, right quantity, right time, minimum cost.",
                  "Add supporting objectives: utilisation of men and machines, optimum inventory, smooth flow, dependable deliveries, flexibility.",
                  "For each objective name one technique that delivers it — e.g. right time via scheduling and expediting, cost via routing and standard times.",
                  "Explain importance: fewer stock-outs, lower WIP, reliable delivery promises, better capacity use.",
                  "Close with the closed-loop idea: progress feedback re-plans the next cycle.",
                ],
              },
              {
                q: "Distinguish between production planning and production control (any four points).",
                marks: 2,
              },
              {
                q: "List any six objectives of production planning and control.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "The four functions: routing, scheduling, dispatching, follow-up",
            body: [
              "PPC discharges its mission through four functions arranged as a chain over time. Routing determines the path a job follows — the sequence of operations, the machine for each operation, the tooling and the time standards. Scheduling fixes the calendar: when each operation starts and finishes so the product ships on the promised date. Dispatching is the action phase: the shop receives the authority and the means to run the plan. Follow-up, or expediting, is the control phase that compares actual progress with the schedule and chases the deviations. The first two functions plan; the last two act and control.",
              "Before routing can begin, two pre-planning jobs must be finished. Product design converts the customer requirement into drawings and specifications; process design decides the manufacturing method — whether the flange is cast or forged, whether the hole is drilled or punched. Pre-planning also settles forecasting, plant layout and the make-or-buy decision. Once these are frozen, routing becomes a concrete task: study the drawing, list the operations needed, select machines and fixtures, and sequence operations to minimise handling. The output is the route sheet, the document that travels with every job and tells each operator what comes next.",
              "The four functions differ in character. Routing and scheduling are paper exercises done in the planning office; dispatching is communication — issuing job orders, materials, tools and gauges to the right machine at the right moment, through a centralised or decentralised dispatch board. Follow-up is fieldwork: progress cards return from the shop, delay analysis spots the slipping jobs, and the expeditor intervenes — or the scheduler replans. In practice the functions overlap and iterate rather than follow one another in a single clean pass, which is why PPC is best drawn as a loop.",
            ],
            bullets: [
              "Routing: the path — sequence of operations, machine selection, jigs and fixtures, standard times; output is the route sheet.",
              "Scheduling: the calendar — start and finish times for every operation, balanced against machine capacity and due dates.",
              "Dispatching: the action — issuing job orders, materials, tools and instructions so the plan can actually start.",
              "Follow-up (expediting): the control — progress reporting, delay analysis, chasing and re-planning slipping jobs.",
              "Phases: pre-planning (design, process choice) -> planning (routing, scheduling) -> action (dispatching) -> control (follow-up).",
            ],
            table: {
              caption: "The four functions at a glance.",
              headers: ["Function", "Phase", "Key question", "Output"],
              rows: [
                ["Routing", "Planning", "What work, on which machine, in what order?", "Route sheet"],
                ["Scheduling", "Planning", "When does each operation start and finish?", "Master and machine schedules"],
                ["Dispatching", "Action", "Who may start work now, and with what?", "Job orders, tool tickets"],
                ["Follow-up", "Control", "Is actual progress on schedule?", "Progress reports, expediting memos"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From pre-planning to follow-up",
              caption: "The four PPC functions form a chain in time — planning first, then action, then control.",
              stages: [
                { label: "Pre-planning", note: "product design, process design, make-or-buy" },
                { label: "Routing", note: "the path of manufacture" },
                { label: "Scheduling", note: "the time-table" },
                { label: "Dispatching", note: "release work and tools" },
                { label: "Follow-up", note: "measure, expedite, feed back" },
              ],
            },
            callout: {
              type: "tip",
              title: "Remember the chain",
              body: "R-S-D-F: Routing sets the path, Scheduling sets the clock, Dispatching pulls the trigger, Follow-up fires the corrections. Examiners award full marks when each function is named, defined and paired with its output document.",
            },
            keyTerms: [
              { term: "Route sheet", definition: "The document listing operations in order with machines, tooling and times; it travels with the job through the shop." },
              { term: "Pre-planning", definition: "The design and process decisions — product design, process design, make-or-buy — that must be frozen before routing starts." },
              { term: "Expediting", definition: "Chasing jobs that slip behind schedule: locating the delay, removing it and reporting back to the planner." },
            ],
            examQuestions: [
              {
                q: "Explain the functions of production planning and control. How do routing, scheduling, dispatching and follow-up interact?",
                marks: 7,
                outline: [
                  "State that PPC works through four functions arranged in time: two planning, one action, one control.",
                  "Routing: define, list its decisions, name the route sheet as output.",
                  "Scheduling: define, list its inputs (routing, times, due dates, capacity), name master and machine schedules.",
                  "Dispatching: define, contrast centralised and decentralised issue of orders and tools.",
                  "Follow-up: define, mention progress reports, delay analysis and expediting.",
                  "Show the interaction: routing feeds scheduling, scheduling authorises dispatching, follow-up feeds back to re-plan.",
                  "Close with the phases: pre-planning -> planning -> action -> control.",
                ],
              },
              {
                q: "What is a route sheet? List any four items it carries.",
                marks: 2,
              },
              {
                q: "Differentiate between dispatching and follow-up.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Routing: the path of manufacture",
            body: [
              "Routing decides the path: the sequence of operations a component must pass through, from raw material issue to final inspection. The router studies the drawing and the process plan, lists every operation — turning, milling, drilling, heat treatment, grinding — then selects for each the machine, the cutting tool, the jig or fixture and the gauge. It also fixes speed, feed and depth of cut, and attaches standard times for setup and running. Good routing squeezes out wasted movement: operations are ordered so the part travels the shortest distance between machines and revisits a machine as rarely as possible.",
              "The route sheet is routing's formal output, and it carries: the part number and material specification, the operation numbers in sequence, the machine or work centre for each, the tooling required, setup and run times, and the inspection points. On the shop floor it functions like a railway timetable: every operator sees which operation is next, and the scheduler sees what load each routing decision imposes. Routing also feeds costing — the standard times it fixes become the basis of labour cost, machine-hour rates and the price quotation sent to the customer.",
              "Routing detail depends on the type of production. In a job shop every part is different, so each new job gets a freshly built route sheet and routing absorbs a large share of PPC effort. In batch production route sheets are grouped into families of similar parts to save planning time. In mass production the routing is done once, when the line is designed: thereafter the path is physically fixed by the conveyor, and routing work reduces to maintaining the standard. Whatever the system, an error in routing multiplies through every schedule built on top of it.",
            ],
            bullets: [
              "Routing = deciding the best path: operation sequence, machine selection, tooling, speeds and feeds, standard times.",
              "Inputs: part drawing, material specification, process plan, available machine capacity and operator skill.",
              "Output: the route sheet — operations in order with machines, jigs, gauges and times.",
              "Objectives: minimum handling, shortest flow distance, fewest machine revisits, lowest cost per operation.",
              "Depth varies by system: fresh route per job in job shops, part families in batch, a fixed line in mass production.",
            ],
            table: {
              caption: "A route sheet for a flanged bush (material: mild steel bar).",
              headers: ["Op no", "Operation", "Machine", "Tooling", "Std time (min)"],
              rows: [
                ["10", "Face and turn", "Turret lathe", "Turning fixture, carbide tool", "6"],
                ["20", "Drill 10 mm bore", "Turret lathe", "Drill jig", "3"],
                ["30", "Ream to 10.02 mm", "Turret lathe", "Reamer", "2"],
                ["40", "Deburr and inspect", "Bench", "Go/no-go gauge", "1"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building a route sheet",
              caption: "The router's working sequence — drawing in, route sheet out.",
              steps: [
                { label: "Study the part drawing and material spec" },
                { label: "List candidate operations", note: "turn, drill, ream, finish" },
                { label: "Select machine and tooling for each" },
                { label: "Sequence for minimum movement" },
                { label: "Fix setup and run times" },
                { label: "Issue the route sheet", note: "travels with the job" },
              ],
            },
            callout: {
              type: "warning",
              title: "Routing is not scheduling",
              body: "The classic slip: mixing routing with scheduling. Routing answers where and in what order; scheduling answers when. If your routing answer mentions dates and calendars, the examiner strikes the point.",
            },
            keyTerms: [
              { term: "Routing", definition: "Deciding the sequence of operations, machines and tooling a job will follow from raw material to finished part." },
              { term: "Route sheet", definition: "The routing document listing operations in order with machines, tooling, standard times and inspection points." },
              { term: "Standard time", definition: "The allowed time for setup and running of an operation, fixed by routing and used for loading and costing." },
            ],
            examQuestions: [
              {
                q: "What is routing? Explain the procedure of routing, the factors considered, and the contents of a route sheet with an example.",
                marks: 7,
                outline: [
                  "Define routing: the path — sequence of operations from raw material to finished part.",
                  "List the inputs: drawings, material specs, process plan, machine availability, operator skill.",
                  "Describe the procedure: list operations, select machines, choose tooling, sequence for minimum movement.",
                  "State that speeds, feeds and standard times are fixed during routing.",
                  "List route sheet contents: op numbers, machines, tooling, setup and run times, inspection points.",
                  "Give the flanged-bush example: turn, drill, ream, deburr on a turret lathe and bench.",
                  "Close with how routing depth varies by production type: job fresh, batch families, mass fixed line.",
                ],
              },
              {
                q: "Define routing. How does it differ from scheduling?",
                marks: 2,
              },
              {
                q: "List any six items of information a route sheet carries.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Scheduling, dispatching and follow-up",
            body: [
              "Scheduling converts the routing into a time-table. It fixes, for every operation, the start and finish dates so that the final assembly date promised to the customer is met while no machine is absurdly idle or overloaded. The scheduler works from four inputs: the route sheet, the processing and setup times, the due dates, and the capacity of each work centre. The output is layered — a master schedule for the whole plant month by month, an operation or machine schedule for each work centre week by week, and a product schedule that chains the parts of one product together.",
              "Dispatching is the go signal. When the schedule date arrives, the dispatch office issues the job order, releases material from stores, delivers tools and gauges to the machine, and hands the operator the instruction sheet and time ticket. In centralised dispatching one office controls every shop; in decentralised dispatching each section or foreman controls his own queue. Follow-up then takes over: progress cards and terminal data reveal how much work is actually complete; delay analysis separates material shortages, machine breakdowns and absenteeism; the expeditor chases the laggards or the schedule is rebuilt.",
              "Follow-up is more than chasing. Its deeper job is to find why jobs slip, so the same deviation does not recur, and to feed the true rates of output back into the next planning cycle. Techniques include daily progress reports, Gantt progress charts, and input-output analysis that compares the work sent to a department with the work it completes, exposing the bottleneck. Without follow-up, scheduling is fiction: schedules that are never measured against reality drift quietly until the promised date passes unnoticed.",
            ],
            bullets: [
              "Scheduling: fixing start and finish times per operation so the due date is met with balanced machine loads.",
              "Schedule layers: master schedule (plant, monthly), operation schedule (machine, weekly), product schedule (one product end-to-end).",
              "Dispatching: issuing job orders, material, tools and instructions — centralised from one office or decentralised to foremen.",
              "Follow-up: progress reporting, delay analysis, expediting — the feedback arm of PPC.",
              "Input-output control compares work sent to a work centre with work completed, exposing bottlenecks.",
            ],
            table: {
              caption: "Kinds of schedule and what each covers.",
              headers: ["Schedule", "Scope", "Horizon", "Example entry"],
              rows: [
                ["Master schedule", "Whole plant, all products", "Month to quarter", "1,000 pumps in July"],
                ["Operation schedule", "One machine or work centre", "Day to week", "Lathe OP-20 by Tuesday"],
                ["Product schedule", "One product with all parts", "Product lead time", "10 gearboxes in 3 weeks"],
                ["Product-part schedule", "One component's chain", "Component lead time", "30 shafts, week 23"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Planning versus control",
              caption: "The two halves of PPC meet at the moment work is dispatched to the shop floor.",
              left: {
                heading: "Planning — before production",
                items: [
                  "Routing fixes the path and machines",
                  "Scheduling fixes the calendar of start and finish",
                  "Loading checks capacity against assigned work",
                  "Master schedule balances forecast with plant load",
                ],
              },
              right: {
                heading: "Control — during and after",
                items: [
                  "Dispatching releases orders, materials and tools",
                  "Follow-up collects progress against the schedule",
                  "Expediting intervenes on slipping jobs",
                  "Feedback re-plans the next cycle",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Name the paperwork",
              body: "A frequent 7-marker asks: 'Explain scheduling, dispatching and follow-up with the documents each produces.' Name the document — master or operation schedule, job order and tool ticket, progress report — beside each function; examiners look specifically for the paperwork.",
            },
            keyTerms: [
              { term: "Master schedule", definition: "The plant-level schedule stating the quantity of each product per month or quarter, balancing forecast with capacity." },
              { term: "Dispatching", definition: "Releasing job orders, materials, tools and instructions to the shop floor so the schedule can start on time." },
              { term: "Follow-up", definition: "Collecting progress data, analysing delays and expediting so that output stays on the schedule." },
            ],
            examQuestions: [
              {
                q: "Explain scheduling, dispatching and follow-up as functions of PPC. What documents does each generate, and how do centralised and decentralised dispatching differ?",
                marks: 7,
                outline: [
                  "Define scheduling: converting routing into start and finish dates against due dates and capacity.",
                  "List schedule kinds: master, operation, product and product-part schedules.",
                  "Define dispatching: issuing job orders, material, tools, instructions at the scheduled moment.",
                  "Contrast centralised (one office, plant visibility) with decentralised (foreman-level, faster reaction) dispatching.",
                  "Define follow-up: progress reports, delay analysis, expediting, feedback to planners.",
                  "Name the documents: schedules, job order and tool ticket, progress report and expediting memo.",
                  "Conclude with input-output control as the tool that exposes bottlenecks.",
                ],
              },
              {
                q: "Distinguish between scheduling and dispatching.",
                marks: 2,
              },
              {
                q: "What is expediting? Why is follow-up called the feedback arm of PPC?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Types of production: job, batch and mass",
            body: [
              "Production systems are classified by volume and variety. Job production makes one item at a time to individual specification — a turbogenerator set, a wedding dress, a ship. General-purpose machines and highly skilled labour dominate; cost per unit is high and delivery depends on the longest chain of custom operations. Batch production sits in the middle: identical items are made in finite runs, then the line changes over — bakery ovens, machine spares, pharmaceutical batches. It is the commonest system in Indian manufacturing because it buys both flexibility and economy, but it pays a setup cost at every changeover.",
              "Mass production manufactures one standardised product continuously at high volume — ball bearings, bolts, soft drinks. Special-purpose machines and transfer lines are arranged in the sequence of operations, so routing is built into the layout, labour is semi-skilled and the unit cost falls steeply. Continuous production goes further: the plant never stops for a product that flows without interruption, such as oil refining or power generation. Between them these systems trade flexibility against productivity: as volume rises and variety falls, machines become more dedicated and planning gets simpler in routing but harder in line balancing.",
              "The type of production dictates the emphasis of PPC. In job shops, routing and scheduling are freshly built per order, dispatching is complex and follow-up heavy, so PPC effort is high and inventory low. In batch production the battle is with changeovers and lot sizes, and the schedule must sequence runs to minimise setups. In mass production, demand forecasting and line balancing replace detailed routing, and scheduling reduces to rate setting; a breakdown of one station stops everything, so maintenance planning becomes part of production planning. Examiners expect exactly this mapping of system to PPC emphasis.",
            ],
            bullets: [
              "Job production: one-off, high variety, general-purpose machines, skilled labour, fresh routing every order.",
              "Batch production: finite runs of identical items, changeovers between runs, moderate volume and variety — the most common system.",
              "Mass production: one standard product, special-purpose transfer lines, high volume, low unit cost, routing fixed by layout.",
              "Continuous production: uninterrupted flow product (refinery, power plant); stopping the line is the disaster to plan against.",
              "PPC emphasis shifts: job = routing and follow-up, batch = lot sizing and changeover sequencing, mass = forecasting and line balancing.",
            ],
            table: {
              caption: "Job vs batch vs mass production.",
              headers: ["Aspect", "Job", "Batch", "Mass"],
              rows: [
                ["Variety", "Very high", "Medium", "Very low"],
                ["Volume", "One or few", "Moderate runs", "Very high"],
                ["Machines", "General purpose", "Mixed", "Special purpose, transfer lines"],
                ["Labour skill", "Highly skilled", "Mixed", "Semi-skilled"],
                ["Unit cost", "Highest", "Intermediate", "Lowest"],
                ["PPC focus", "Routing, follow-up", "Lot sizing, changeovers", "Forecasting, line balance"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Volume-variety positions of production systems",
              caption: "Batch production lives along the diagonal between job and mass; project work sits at the top left.",
              axes: { x: "Production volume (low to high)", y: "Product variety (high to low)" },
              quadrants: [
                { label: "Project / job shop", note: "one-off, high variety, low volume — ships, turbines" },
                { label: "Mass customisation", note: "high variety at high volume — automotive variants" },
                { label: "Low-volume standard", note: "spares of phased-out designs, repair work" },
                { label: "Mass and continuous", note: "standard product, high volume — bearings, fuel" },
              ],
            },
            callout: {
              type: "exam",
              title: "The guaranteed table",
              body: "'Compare job, batch and mass production' is asked nearly every alternate year. Reproduce all six rows from memory and add the PPC-focus row: that final row is what converts a general answer into an ME-802(D) answer.",
            },
            keyTerms: [
              { term: "Job production", definition: "One-off production to individual customer specification using general-purpose machines and skilled labour." },
              { term: "Batch production", definition: "Production of identical items in finite runs separated by changeovers; the middle ground of volume and variety." },
              { term: "Mass production", definition: "Continuous high-volume production of one standardised product on special-purpose machines or transfer lines." },
            ],
            examQuestions: [
              {
                q: "Explain job, batch and mass production with examples. How does the type of production affect the functions of PPC?",
                marks: 7,
                outline: [
                  "Introduce the volume-variety trade-off as the classifying axis.",
                  "Job production: definition, examples, machine and labour character, cost and delivery.",
                  "Batch production: definition, examples, changeover economics, why it is the most common system.",
                  "Mass and continuous production: definition, examples, dedicated lines, low unit cost.",
                  "Draw the comparison table across variety, volume, machines, skill, unit cost.",
                  "Map PPC emphasis: job = routing and follow-up; batch = lot sizing and changeover sequencing; mass = forecasting and line balancing.",
                  "Conclude with maintenance planning entering PPC in mass production because one stoppage stops all.",
                ],
              },
              {
                q: "Give two examples each of job production and mass production.",
                marks: 2,
              },
              {
                q: "Why is batch production called the most common production system? State one advantage and one limitation.",
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
      title: "Forecasting and Aggregate Planning",
      summary:
        "Demand estimation for planning: qualitative judgement methods led by Delphi, quantitative time-series models — moving average and exponential smoothing — their error metrics MAD, MSE and MAPE, and the medium-range aggregate plan with its chase and level strategies.",
      chapter: {
        number: "02",
        title: "Forecasting and Aggregate Planning",
        intro:
          "Unit II supplies the demand signal every later plan depends on. Forecasting is classified into judgement-based (Delphi, survey, analogy) and data-based (moving average, exponential smoothing, regression) families; every forecast is scored with MAD, MSE and MAPE and watched with a tracking signal. Aggregate planning then converts the forecast into a 3-to-18-month output plan, choosing between the chase and level strategies and pricing every lever — overtime, hiring, inventory, backorder, subcontracting.",
        inOneBreath:
          "Qualitative methods serve new products — Delphi runs anonymous expert rounds until opinions converge; quantitative time-series models serve stable ones — the n-period moving average lags trends by (n-1)/2 periods while exponential smoothing F = alpha x D + (1 - alpha) x F reacts at once through alpha; accuracy is scored by MAD (absolute, demand units), MSE (squared, punishes big misses) and MAPE (percentage, comparable across items); and aggregate planning matches family demand to capacity over 3-18 months using the chase strategy (output tracks demand, minimum inventory, hiring and layoff) or the level strategy (constant output, stable workforce, inventory absorbs swings), evaluated on total cost.",
        sections: [
          {
            number: "2.1",
            title: "Forecasting: role, horizon and classification",
            body: [
              "Every plan in this subject — the master schedule, the MRP run, the workforce plan — is only as good as the demand forecast beneath it. Forecasting estimates future demand from whatever evidence exists: past sales, market surveys, expert judgement or the behaviour of related variables. Forecasts are classified by horizon. Short-range forecasts cover up to three months and drive scheduling and purchasing; medium-range forecasts, three months to two years, drive aggregate planning and capacity; long-range forecasts beyond that guide plant construction and product strategy. Accuracy falls as the horizon lengthens, so the further out the plan, the coarser it must be.",
              "Methods split into two families. Qualitative methods — Delphi, market surveys, panel consensus, historical analogy — rely on human judgement and are the only option when a product is new or data do not exist. Quantitative methods assume the future resembles the past. Time-series methods (moving average, exponential smoothing, trend projection, seasonal indices) extrapolate the item's own history; causal methods (regression) model demand as a function of drivers such as price, rainfall or GDP. Most real forecasting departments blend both: a statistical baseline adjusted by sales and marketing judgement.",
              "Choosing a method means weighing data availability, pattern complexity, cost, allowable error and the horizon. A stable spare part is served perfectly by exponential smoothing; a new scooter model needs Delphi and analogy until history accumulates; cement demand may follow construction indices and reward regression. Two disciplines govern all choices. First, always measure error — a forecast without a MAD or MAPE cannot be improved rationally. Second, forecast at the right level: aggregate families are far more predictable than individual items, so plan the family statistically and split it down by ratios.",
            ],
            bullets: [
              "Why forecast: every downstream plan — MPS, MRP, workforce — inherits its quality from the demand estimate.",
              "Horizons: short (to 3 months) for scheduling; medium (3 months to 2 years) for aggregate planning; long for plant and product strategy.",
              "Qualitative family: Delphi, market survey, panel consensus, historical analogy — judgement where data do not exist.",
              "Quantitative family: time-series (moving average, exponential smoothing, trend) and causal (regression on drivers).",
              "Rule of practice: forecast families, not items; always pair the forecast with an error measure.",
            ],
            table: {
              caption: "Choosing a forecasting approach.",
              headers: ["Situation", "Recommended method", "Why"],
              rows: [
                ["New product, no history", "Delphi, analogy", "Only judgement is available"],
                ["Stable repeat item", "Exponential smoothing", "Cheap, self-correcting, one parameter"],
                ["Seasonal pattern", "Seasonal index + trend", "Level alone misses the swing"],
                ["Demand tracks a driver", "Causal regression", "Explains, not just extrapolates"],
                ["Long-range plant decision", "Delphi + scenarios", "Error grows with horizon"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which forecasting method?",
              caption: "The decision every sales-and-operations cycle makes — data availability is the first gate.",
              start: "A demand forecast is needed",
              branches: [
                { label: "No history — new product", outcome: "Go qualitative: Delphi, market survey, analogy", good: true },
                { label: "History exists and is stable", outcome: "Go time-series: moving average or exponential smoothing", good: true },
                { label: "Demand tracks an external driver", outcome: "Go causal: regress on the driver variable", good: true },
                { label: "One salesperson's hunch", outcome: "Anecdote, not a forecast — no error can be measured", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Never a bare number",
              body: "Never state a forecast without its error band. In exams and in industry, 'next month demand = 1,200 units, MAPE = 8%' earns full credit; the bare number suggests you do not know it is an estimate.",
            },
            keyTerms: [
              { term: "Forecasting", definition: "Estimating future demand from historical data, judgement or related variables, as the input to all production planning." },
              { term: "Time-series method", definition: "A forecasting technique that extrapolates the item's own demand history — moving average, exponential smoothing, trend projection." },
              { term: "Causal forecasting", definition: "Modelling demand as a dependent variable of external drivers using regression, e.g. cement on construction index." },
            ],
            examQuestions: [
              {
                q: "What is demand forecasting? Classify forecasting methods and explain the factors that govern the choice of a method.",
                marks: 7,
                outline: [
                  "Define forecasting: estimating future demand as the basis of every production plan.",
                  "Classify by horizon: short (scheduling), medium (aggregate planning), long (plant strategy).",
                  "Qualitative family: Delphi, market survey, panel consensus, historical analogy — when data do not exist.",
                  "Quantitative family: time-series (moving average, exponential smoothing, trend) and causal (regression).",
                  "Factors of choice: data availability, pattern (trend, seasonality), cost, accuracy required, horizon.",
                  "Add the practice rules: forecast families not items; always compute an error measure.",
                  "Close with the mixed-method reality: statistical baseline plus sales judgement.",
                ],
              },
              {
                q: "Distinguish between qualitative and quantitative forecasting.",
                marks: 2,
              },
              {
                q: "Why does forecast accuracy fall as the horizon lengthens? Which horizon serves aggregate planning?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Qualitative methods: Delphi, survey and analogy",
            body: [
              "When a product is new, or the market is about to shift, no history exists to extrapolate, and judgement must be organised. The market survey questions a sample of potential customers and scales the results up; it is direct but expensive, and respondents often mispredict their own behaviour. Panel consensus locks sales, production and finance staff in a room until they agree; it is fast, but the loudest voice or the senior-most manager can capture the number. Historical analogy forecasts a new product from the life-cycle curve of a similar earlier product — a new bike model from the curve of its predecessor.",
              "The Delphi method is the disciplined version of group judgement. A coordinator selects a panel of experts who never meet; in each round the panel answers the same questionnaire, then receives an anonymised statistical summary of everyone's answers — median and range — and is invited to revise. Because arguments are anonymous, rank does not dominate, and because the summary is fed back, opinions converge over two or three rounds toward a defensible figure. Delphi is slow and cannot be checked against data, but for brand-new products and long-range technology forecasts it is often the only instrument available.",
              "Every qualitative technique should end in numbers a planner can use: an expected value with a pessimistic and an optimistic band. Practitioners combine methods — a Delphi on the market size, an analogy for the take-off rate, a survey for price tolerance — and reconcile the differences explicitly. The output feeds the medium-range plan as a scenario family: base, high and low demand, each with its own aggregate plan triggered when reality moves toward it. That way judgement is not a substitute for planning; it is the input planning is built to absorb.",
            ],
            bullets: [
              "Market survey: question a sample of customers and scale up — direct but costly; stated intent is not always behaviour.",
              "Panel consensus: one-room agreement — fast, but hierarchy and loud voices can capture the forecast.",
              "Historical analogy: transfer the life-cycle curve of a similar past product to the new one.",
              "Delphi: anonymous expert panel, iterative questionnaires with statistical feedback until convergence.",
              "Deliver judgement as a band (low-base-high), then attach a plan to each scenario.",
            ],
            table: {
              caption: "Qualitative methods compared.",
              headers: ["Method", "Procedure", "Strength", "Weakness"],
              rows: [
                ["Market survey", "Question a customer sample, project to the market", "Direct from the customer", "Costly; intent is not behaviour"],
                ["Panel consensus", "Committee argues to one number", "Fast, uses internal knowledge", "Dominance by rank or volume"],
                ["Historical analogy", "Copy the curve of a similar product", "Cheap, concrete anchor", "Past product may differ"],
                ["Delphi", "Anonymous rounds with summarised feedback", "Rank-free, converges", "Slow; no data check"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "One round of the Delphi method",
              caption: "Anonymity plus statistical feedback is what separates Delphi from a committee meeting.",
              stages: [
                { label: "Form the expert panel", note: "members never meet" },
                { label: "Round 1 questionnaire", note: "quantitative, with reasons" },
                { label: "Summarise anonymously", note: "median and range fed back" },
                { label: "Experts revise", note: "in light of the group's spread" },
                { label: "Repeat to convergence", note: "typically 2-3 rounds" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the rounds",
              body: "The 7-marker 'Describe the Delphi technique with a diagram' is best answered by drawing this round-pipeline, then naming two merits (rank-free, convergent) and two demerits (slow, no data check) — the merits and demerits carry the last two marks.",
            },
            keyTerms: [
              { term: "Delphi method", definition: "A forecasting technique in which an anonymous expert panel answers questionnaires in rounds, receiving a statistical summary between rounds, until estimates converge." },
              { term: "Market survey", definition: "Estimating demand by questioning a sample of potential customers and projecting the results to the market." },
              { term: "Historical analogy", definition: "Forecasting a new product from the demand curve of a similar product launched earlier." },
            ],
            examQuestions: [
              {
                q: "Describe the Delphi method of forecasting. Draw its working cycle and state its merits and demerits compared with a market survey.",
                marks: 7,
                outline: [
                  "Situate Delphi: the qualitative method of choice when no demand history exists.",
                  "Describe the panel: selected experts who never meet face to face.",
                  "Describe a round: questionnaire, anonymised statistical summary, invited revision.",
                  "Explain convergence: 2-3 rounds to a stable median and range.",
                  "Draw the round-pipeline: panel -> questionnaire -> summary -> revise -> repeat.",
                  "Merits: free of hierarchy and bandwagon, works for new products, cheap to run per expert.",
                  "Demerits: slow, subjective, no data check; contrast with the survey's directness and cost.",
                ],
              },
              {
                q: "What is historical analogy in forecasting? Give one example.",
                marks: 2,
              },
              {
                q: "List the steps of conducting a market survey for demand estimation.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Moving average and exponential smoothing",
            body: [
              "Time-series methods assume the item's own history contains its future. The simple moving average takes the arithmetic mean of the last n actual demands and issues it as the next forecast; when a new period arrives the oldest demand drops out and the newest enters, so the forecast 'moves'. A three-month average of 120, 130 and 125 units is 125. Small n tracks change quickly but is jittery; large n is stable but lags behind trends — the average always trails a trend by about (n - 1)/2 periods, a bias the planner must remember.",
              "Exponential smoothing refines the same idea with fading memory. The new forecast is a weighted sum: F(next) = alpha x D(this period) + (1 - alpha) x F(this period). The smoothing constant alpha lies between 0 and 1: a small alpha such as 0.1 smooths hard and suits stable demand; a large alpha such as 0.4 reacts fast and suits shifting demand. Because every past demand is carried inside the previous forecast, only two numbers are needed — the last actual and the last forecast — which is why ERP systems default to exponential smoothing for thousands of items. The weights decay geometrically into the past, never dropping any point abruptly.",
              "Both methods have blind spots. A plain moving average or a plain smoothing model follows a level but not a trend; a rising demand line will be persistently under-forecast, and a seasonal swing will be averaged away. The standard fixes are the trend-adjusted (double) smoothing model and the seasonal index that splits demand into level x trend x seasonality. The planner's discipline is numerical: recompute the forecast each period, compare against actuals with MAD or MAPE, and retune alpha when the error grows. Section 2.4 makes that error measurement exact.",
            ],
            bullets: [
              "Simple moving average: mean of the last n demands; drops the oldest, admits the newest each period.",
              "Window n is the trade-off: small n = responsive but jittery, large n = stable but lags trends by about (n-1)/2 periods.",
              "Weighted moving average: hand-picked weights that usually emphasise recent periods.",
              "Exponential smoothing: F(next) = alpha x D + (1 - alpha) x F; needs only the last forecast and the last actual.",
              "Alpha tunes responsiveness: 0.1 for stable demand, 0.3-0.4 for changing demand; plain models ignore trend and seasonality.",
            ],
            codeExample: {
              language: "python",
              caption: "Three-month moving average and exponential smoothing (alpha = 0.2) in a few lines of Python.",
              code: `demand = [120, 130, 125, 135, 140]

# 3-month simple moving average forecast for the next period
window = 3
ma = sum(demand[-window:]) / window
print(f"3-month moving average: {ma:.1f}")     # 133.3

# exponential smoothing, seeded with the first actual demand
alpha = 0.2
F = demand[0]
for d in demand[1:]:
    F = alpha * d + (1 - alpha) * F
print(f"Smoothed forecast: {F:.1f}")           # 128.1

# a rising series: both models lag the trend - remember the bias
print(f"Last actual: {demand[-1]}")`,
            },
            diagram: {
              kind: "compare",
              title: "Moving average versus exponential smoothing",
              caption: "Both smooth a level; they differ in memory, storage and reaction speed.",
              left: {
                heading: "Moving average",
                items: [
                  "Weights the last n periods, then forgets them",
                  "Needs n stored values per item",
                  "Lags a trend by about (n-1)/2 periods",
                  "The oldest point leaves the average abruptly",
                  "Easy to explain to non-statisticians",
                ],
              },
              right: {
                heading: "Exponential smoothing",
                items: [
                  "Weights all history, decaying geometrically",
                  "Stores one forecast and one actual",
                  "Reacts at once via alpha, no window lag",
                  "The standard ERP engine for item forecasts",
                  "One parameter, alpha, tunes the whole behaviour",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The guaranteed numerical",
              body: "'For the following demand, compute the 3-month moving average and the exponential smoothing forecast (alpha = 0.2).' Build a table with columns period, demand, forecast, and show the smoothing arithmetic line by line — the table is where the marks are.",
            },
            keyTerms: [
              { term: "Simple moving average", definition: "A forecast equal to the arithmetic mean of the last n actual demands, updated each period as the window slides." },
              { term: "Exponential smoothing", definition: "A forecast of the form F(next) = alpha x D + (1 - alpha) x F, weighting all history with geometrically decaying weights." },
              { term: "Smoothing constant (alpha)", definition: "The weight 0 to 1 given to the latest actual demand; small alpha smooths, large alpha reacts." },
            ],
            examQuestions: [
              {
                q: "Explain the simple moving average and exponential smoothing methods with formulae. For demand 120, 130, 125, 135, 140, compute the 3-month moving average and the smoothed forecast with alpha = 0.2.",
                marks: 7,
                outline: [
                  "Write the moving average formula: mean of the last n demands.",
                  "Compute: (125 + 135 + 140) / 3 = 133.3 units as the next forecast.",
                  "Write the smoothing formula: F(next) = alpha x D + (1 - alpha) x F.",
                  "Show the recursion step by step from the seed 120: 122.0, 122.6, 125.1, 128.1.",
                  "State the final smoothed forecast: 128.1 units.",
                  "Compare the two: MA uses a 3-period memory, ES uses all history with decay.",
                  "Note the trend bias: both lag a rising series; mention alpha choice 0.1-0.4.",
                ],
              },
              {
                q: "What is the role of the smoothing constant in exponential smoothing?",
                marks: 2,
              },
              {
                q: "Why does a moving average lag behind a trend? How large is the lag for an n-period average?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Measuring accuracy: MAD, MSE, MAPE and tracking",
            body: [
              "A forecast is a hypothesis, and hypotheses are scored. The error of period t is e(t) = actual demand minus forecast; over a run of periods the errors are condensed into single figures. The mean absolute deviation, MAD, averages the absolute errors and reads in the same units as demand, so a MAD of 4 units is instantly meaningful. The mean squared error, MSE, averages the squared errors; squaring punishes large misses heavily, so MSE distinguishes a method that is occasionally very wrong from one that is steadily a little wrong, though its units are squared units.",
              "The mean absolute percentage error, MAPE, divides each absolute error by the actual demand and expresses the mean as a percentage, making it scale-free: a MAPE of 8% can be compared across screws and scooters. Under 10% is usually rated good, over 20% poor. For bias detection, the tracking signal accumulates the signed errors and divides by MAD: a signal within about ±4 says the forecast is unbiased; a signal drifting outside that band means the forecast is consistently high or low and the model — or alpha — must change. Together these metrics let a planner compare methods on evidence.",
              "The practical loop is: record the pair (demand, forecast) every period; compute errors; update MAD, MSE, MAPE; compare candidate methods; retune parameters; and watch the tracking signal between reviews. As a worked check, with demands 120, 130, 125, 135 against forecasts 118, 126, 128, 130, the errors are 2, 4, -3, 5; MAD is 3.5, MSE is 13.5, and MAPE is about 2.7% — an accurate forecast by any standard. The same arithmetic, run for alpha 0.1 and 0.3 side by side, is how the smoothing constant is chosen in practice.",
            ],
            bullets: [
              "Forecast error e(t) = actual demand - forecast; keep the sign for bias, drop it for spread.",
              "MAD = mean of |e|; reads in demand units; the workhorse measure, reused for safety stock.",
              "MSE = mean of e^2; punishes large misses; used to compare methods; units are squared.",
              "MAPE = mean of |e| / actual x 100; scale-free; under 10% good, over 20% poor.",
              "Tracking signal = cumulative sum of errors / MAD; stays within about ±4 for an unbiased forecast.",
            ],
            codeExample: {
              language: "python",
              caption: "Scoring a forecast: MAD, MSE and MAPE from the demand-forecast pairs.",
              code: `demand   = [120, 130, 125, 135]
forecast = [118, 126, 128, 130]

errors = [d - f for d, f in zip(demand, forecast)]
n = len(errors)

mad  = sum(abs(e) for e in errors) / n
mse  = sum(e * e for e in errors) / n
mape = sum(abs(e) / d for e, d in zip(errors, demand)) / n * 100

print(f"Errors: {errors}")       # [2, 4, -3, 5]
print(f"MAD  = {mad:.2f}")       # 3.5
print(f"MSE  = {mse:.2f}")       # 13.5
print(f"MAPE = {mape:.2f}%")     # 2.71%`,
            },
            diagram: {
              kind: "flow",
              title: "The error-feedback loop",
              caption: "Forecasting is controlled by measurement — the metrics decide the next parameter change.",
              steps: [
                { label: "Record demand and forecast", note: "both from the last period" },
                { label: "Compute errors e = D - F" },
                { label: "Update MAD, MSE, MAPE" },
                { label: "Compare methods, retune alpha" },
                { label: "Watch the tracking signal", note: "outside ±4 means bias" },
              ],
            },
            callout: {
              type: "exam",
              title: "MAD vs MSE",
              body: "'Distinguish between MAD and MSE' is a repeated 2-3 marker. The one-line answer: both average the error, but MAD keeps the demand units by dropping signs, while MSE squares errors and therefore penalises the occasional large miss disproportionately.",
            },
            keyTerms: [
              { term: "Mean absolute deviation (MAD)", definition: "The arithmetic mean of absolute forecast errors; expressed in the same units as demand." },
              { term: "Mean squared error (MSE)", definition: "The arithmetic mean of squared forecast errors; heavily penalises large misses." },
              { term: "MAPE", definition: "Mean absolute percentage error: the mean of |error| / actual x 100; scale-free accuracy in percent." },
            ],
            examQuestions: [
              {
                q: "Explain MAD, MSE and MAPE with formulae. For demands 120, 130, 125, 135 and forecasts 118, 126, 128, 130, compute all three.",
                marks: 7,
                outline: [
                  "Define error: e(t) = D(t) - F(t), and compute 2, 4, -3, 5.",
                  "MAD formula and arithmetic: (2+4+3+5)/4 = 3.5 units.",
                  "MSE formula and arithmetic: (4+16+9+25)/4 = 13.5 squared units.",
                  "MAPE formula and arithmetic: (1.67+3.08+2.40+3.70)/4 = 2.7%.",
                  "Interpret: MAPE under 10% = accurate forecast.",
                  "Compare the measures: MAD in units, MSE punishes outliers, MAPE scale-free.",
                  "Add the tracking signal as the bias detector: cumulative e / MAD within ±4.",
                ],
              },
              {
                q: "Define the tracking signal and state its decision band.",
                marks: 2,
              },
              {
                q: "Why is MAPE preferred when comparing accuracy across different products?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Aggregate planning: chase and level strategies",
            body: [
              "Aggregate planning is the medium-range plan — three to eighteen months — that matches demand for product families with plant capacity, before detailed schedules exist. Demand over such a horizon is lumpy: festive peaks, monsoon troughs. The planner may change the supply side or the demand side. Supply levers: hiring and firing, overtime and idle time, subcontracting, part-time and temporary workers, inventory built in slack months, and backordering into later months. Demand levers: pricing and promotions, off-season discounts, and complementary products whose peaks fill each other's troughs. The plan minimises the total cost of the chosen mix.",
              "Two pure strategies bracket the choice. The chase strategy tracks demand: produce exactly what each month needs, varying the workforce or the working hours; inventory stays minimal but hiring, layoff and training costs mount, and the workforce suffers. The level strategy produces at a constant rate all year and lets inventory and backorders absorb the swings; employment is stable and overtime rare, but carrying cost rises and stock may become obsolete. Pure strategies are rarely optimal; real plans are mixed — a level core with overtime and subcontracting shaved over the peak, chosen by least-cost comparison over the horizon.",
              "The classic graphical or tabular method compares strategies: list the monthly demand forecast, propose a plan, compute its cost from rate tables — regular time, overtime, hiring and layoff, inventory carrying, backorder and subcontracting — and repeat until the cheapest acceptable plan appears. Spreadsheet and linear-programming formulations perform the same search exhaustively. The output of aggregate planning is the input to everything downstream: the master production schedule of Unit III and the workforce plan. A firm that skips aggregate planning makes the same choices later at higher cost, as expediting and panic subcontracting.",
            ],
            bullets: [
              "Aggregate planning: 3-18 month matching of family-level demand with capacity, at minimum total cost.",
              "Supply levers: workforce changes, overtime/idle time, subcontracting, inventory build, backorders.",
              "Demand levers: pricing, promotion, off-season discounts, complementary products.",
              "Chase strategy: output tracks demand — minimum inventory, maximum hiring/layoff churn.",
              "Level strategy: constant output — stable workforce, high carrying cost; real plans are mixed.",
            ],
            table: {
              caption: "Cost elements an aggregate plan must price.",
              headers: ["Cost element", "Driver", "Typical trigger"],
              rows: [
                ["Regular-time production", "Units made on normal hours", "Base labour and machine cost"],
                ["Overtime premium", "Hours beyond normal", "Peak months"],
                ["Hiring and layoff", "Change in workforce size", "Chase strategies"],
                ["Inventory carrying", "Ending stock x rate", "Level strategies"],
                ["Backorder", "Unfilled demand carried", "Service penalty, lost goodwill"],
                ["Subcontracting", "Units bought outside", "Capacity overflow"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Chase strategy versus level strategy",
              caption: "Both fit the same demand curve — they differ in which cost they accept.",
              left: {
                heading: "Chase strategy",
                items: [
                  "Output curve copies the demand curve",
                  "Workforce and hours flex every month",
                  "Inventory and backorders near zero",
                  "Hiring, layoff and training costs run high",
                  "Suited to perishable or bulky products",
                ],
              },
              right: {
                heading: "Level strategy",
                items: [
                  "Output is a flat line all year",
                  "Workforce constant, overtime rare",
                  "Inventory absorbs peaks, backorders troughs",
                  "Carrying cost and obsolescence risk",
                  "Suited to stable, storable products",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Draw the graphs",
              body: "Draw the two graphs even when the question only says 'explain': demand as a wavy line, chase as a line riding the waves, level as a horizontal line with inventory bars between them. The sketch is regularly worth three of the seven marks.",
            },
            keyTerms: [
              { term: "Aggregate planning", definition: "The 3-18 month plan matching family-level demand with capacity using workforce, inventory, overtime and subcontracting levers." },
              { term: "Chase strategy", definition: "An aggregate plan whose output tracks demand month by month, minimising inventory at the price of workforce churn." },
              { term: "Level strategy", definition: "An aggregate plan with constant output rate, using inventory and backorders to absorb demand swings." },
            ],
            examQuestions: [
              {
                q: "What is aggregate planning? Explain the chase and level strategies with sketches and state where each is appropriate.",
                marks: 7,
                outline: [
                  "Define aggregate planning: medium-range (3-18 months) matching of demand and capacity for families.",
                  "List the levers: workforce, overtime, subcontracting, inventory, backorders; plus demand-side pricing.",
                  "Chase strategy: output tracks demand; minimal inventory; hiring, layoff and training costs.",
                  "Level strategy: constant output; inventory and backorders absorb swings; stable employment.",
                  "Draw the demand curve with the chase line riding it and the level line flat with inventory bars.",
                  "State suitability: chase for perishable/bulky or low-inventory goods; level for stable storable products.",
                  "Close with mixed strategies chosen on least total cost over the horizon.",
                ],
              },
              {
                q: "Name any four variables an aggregate planner can adjust on the supply side.",
                marks: 2,
              },
              {
                q: "List the costs compared when evaluating alternative aggregate plans.",
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
      title: "MRP, ERP and Inventory Management",
      summary:
        "From dependent demand to enterprise systems: the BOM and MRP explosion, the time-phased record with its lot-sizing rules, the MRP-to-ERP evolution and module architecture, and independent-demand inventory control — EOQ, reorder point, safety stock, ABC/VED classification, and the JIT/Kanban pull philosophy.",
      chapter: {
        number: "03",
        title: "MRP, ERP and Inventory Management",
        intro:
          "Unit III splits inventory by the nature of its demand. Dependent-demand components are computed by material requirements planning, which explodes the master schedule through the bill of materials into time-phased order releases, with lot-sizing rules deciding order size. Independent-demand items are controlled by order policies — EOQ balances ordering against holding cost, safety stock protects service level, and ABC/VED analysis spends scarce control effort where it pays. ERP wraps the whole planning engine in one enterprise database, and JIT/Kanban attacks the reasons inventory exists at all.",
        inOneBreath:
          "MRP turns the MPS into component orders: explode the BOM, net off on-hand stock and scheduled receipts, lot-size the net requirement (LFL, FOQ or POQ) and offset by lead time to get planned order releases; ERP grew from MRP by adding capacity (MRP II) and then every enterprise function on one database; independent-demand items use EOQ = sqrt(2DS/H) ordered at the reorder point (lead-time demand + safety stock), classified by ABC (annual value) and VED (criticality); and JIT pulls production at takt time with Kanban cards authorising replacement of exactly what was consumed.",
        sections: [
          {
            number: "3.1",
            title: "Dependent demand, BOM and the logic of MRP",
            body: [
              "Independent demand items — finished scooters sold to customers — are forecast. Dependent demand items — the wheels, handlebars and bolts inside those scooters — should never be forecast independently: their demand is a multiplication of the parent's plan. Material requirements planning exploits this. It takes the master production schedule (MPS), which states how many end items will be made and when, and explodes it through the bill of materials (BOM), the structured list of every component and subassembly with the quantity needed per unit of parent, level by level down to raw material.",
              "The BOM is a product tree. A scooter (level 0) needs one frame assembly and two wheels (level 1); each wheel needs one rim, one tyre and four bolts (level 2). Common components appear at several places, so MRP processing uses low-level coding: an item is netted only after all its parents have been exploded, guaranteeing its total gross requirement is complete before netting. Alongside the BOM, MRP reads inventory records — on-hand stock, scheduled receipts, lead times and lot sizes — and computes, period by period, what to order and when to release the order so it arrives exactly when needed.",
              "The outputs of an MRP run are planned order releases for each component, rescheduling notices for existing orders, and exception reports flagging items short, late or expedited. The benefits over reorder-point systems are large for assembled products: inventory drops because components arrive just in time instead of just in case, priorities stay consistent because every item's due date descends from the MPS, and the reaction to a schedule change is a re-run rather than a renegotiation. The costs are equally real: BOM and inventory data must be near-perfect, and the MPS must be realistic, or the run amplifies garbage.",
            ],
            bullets: [
              "Independent demand (end items) is forecast; dependent demand (components) is computed from the parent plan.",
              "MPS: what end items to make and when — the driver at the top of every MRP run.",
              "BOM: product tree with quantity-per-parent at each level; low-level coding nets each item once, after all parents.",
              "Inventory records: on hand, scheduled receipts, lead times, lot-sizing rules — the third MRP input.",
              "Outputs: planned order releases, reschedule notices, exception reports; components arrive just in time, not just in case.",
            ],
            table: {
              caption: "MRP inputs and outputs.",
              headers: ["Element", "Type", "Example", "Feeds"],
              rows: [
                ["Master production schedule", "Input", "500 scooters in week 10", "Drives explosion for level 1"],
                ["Bill of materials", "Input", "1 frame + 2 wheels per scooter", "Defines quantity per parent"],
                ["Inventory records", "Input", "120 wheels on hand, 2-week lead", "Netting and timing"],
                ["Planned order releases", "Output", "Order 380 wheels, release week 8", "Purchasing and shop orders"],
                ["Exception reports", "Output", "Bolts short for week 10", "Expediting"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "One level of an MRP explosion",
              caption: "From the end-item schedule down to a component's order — the chain MRP automates for every item, every level.",
              stages: [
                { label: "MPS demand", note: "500 scooters, week 10" },
                { label: "Explode the BOM", note: "x 2 wheels per scooter" },
                { label: "Gross requirements", note: "1,000 wheels in week 10" },
                { label: "Net requirements", note: "minus on hand and scheduled receipts" },
                { label: "Planned order release", note: "offset by the 2-week lead time" },
              ],
            },
            callout: {
              type: "exam",
              title: "The block diagram",
              body: "'Explain MRP with a block diagram of inputs and outputs' is the standard 7-marker. Draw three inputs (MPS, BOM, inventory records) feeding the MRP engine and two outputs (planned orders, reschedule notices); label every arrow — the labels carry marks.",
            },
            keyTerms: [
              { term: "Dependent demand", definition: "Demand for a component that is derived from the production plan of its parent item, not forecast independently." },
              { term: "Bill of materials (BOM)", definition: "The structured, level-by-level list of components and quantities required to make one unit of a parent item." },
              { term: "Master production schedule (MPS)", definition: "The time-phased plan stating how many end items will be produced in each period; the top input to MRP." },
            ],
            examQuestions: [
              {
                q: "Explain material requirements planning. Draw its input-output structure and explain BOM explosion with a small product tree.",
                marks: 7,
                outline: [
                  "Define MRP: computing dependent-demand component orders from the end-item schedule.",
                  "Draw the block diagram: MPS, BOM and inventory records in; planned orders and reports out.",
                  "Explain the product tree with levels: scooter at level 0, wheel at level 1, rim and bolts at level 2.",
                  "Show explosion arithmetic: 500 scooters x 2 wheels = 1,000 wheels in week 10.",
                  "Show netting: subtract on-hand 120 and scheduled receipts to get the net requirement.",
                  "Explain lead-time offsetting turning receipts into planned order releases.",
                  "State the benefits: lower inventory, consistent priorities, fast reaction to schedule changes.",
                ],
              },
              {
                q: "Distinguish between independent and dependent demand.",
                marks: 2,
              },
              {
                q: "What is low-level coding in a BOM and why is it necessary?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "The time-phased record and lot-sizing rules",
            body: [
              "Every component inside MRP is managed by a time-phased record laid out in weekly buckets. Each week the record stacks five rows: gross requirements arriving from parents; scheduled receipts already on order; projected on-hand balance carried forward; net requirements — the shortfall after stock is consumed; and planned order receipts, which become planned order releases by shifting earlier by the item's lead time. Reading the record week by week is the core skill: stock is projected forward, and whenever the balance would go negative a requirement is created and then lot-sized.",
              "Lot sizing decides how big the created order should be. Lot-for-lot (LFL) orders exactly the net requirement each week — component inventory is minimal, and it is the natural rule for lumpy dependent demand; the price is paying an order cost every week there is demand. The fixed order quantity (FOQ) orders a standard batch — a pallet, a drum, a die-cast machine load — whenever net requirements appear; it earns quantity discounts and spreads setups but carries stock. The period order quantity (POQ) orders, every P periods, the total of those periods' net requirements — a compromise: fewer orders than LFL, less stock than FOQ.",
              "Safety stock enters the record as a floor: a net requirement is triggered when projected stock falls below the safety level rather than zero. Lead-time offsetting is the other essential mechanic — an order needed in week 10 with a three-week lead time must be released in week 7. A full worked record for one item over four weeks — gross requirements 0, 100, 150, 120; on hand 80; lot-for-lot; lead time one week — yields releases of 20 in week 1, 150 in week 2 and 120 in week 3; the same table structure answers any numerical the examiner builds.",
            ],
            bullets: [
              "Record rows: gross requirements, scheduled receipts, projected on hand, net requirements, planned order releases — one column per week.",
              "Net requirement arises when projected on hand would fall below zero (or below safety stock).",
              "LFL: order exactly the net need — minimum inventory, one order per demand week; standard for lumpy dependent demand.",
              "FOQ: order a fixed batch whenever needed — discounts and setup spreading at the price of stock.",
              "POQ: order every P periods the summed need — the compromise; release = requirement week shifted earlier by lead time.",
            ],
            table: {
              caption: "A lot-for-lot MRP record (component X: on hand 80, lead time 1 week).",
              headers: ["Week", "1", "2", "3", "4"],
              rows: [
                ["Gross requirements", "0", "100", "150", "120"],
                ["Scheduled receipts", "0", "0", "0", "0"],
                ["Projected on hand", "80", "0", "0", "0"],
                ["Net requirements", "0", "20", "150", "120"],
                ["Planned order release", "20", "150", "120", "-"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Reading an MRP record week by week",
              caption: "The same five questions in every weekly bucket of the time-phased record.",
              steps: [
                { label: "Gross requirements", note: "what parents need this week" },
                { label: "Add scheduled receipts", note: "orders already placed" },
                { label: "Project on hand", note: "carry the balance forward" },
                { label: "Net requirement", note: "shortfall below zero or safety stock" },
                { label: "Apply lot-sizing rule", note: "LFL, FOQ or POQ" },
                { label: "Offset by lead time", note: "release earlier — planned order release" },
              ],
            },
            callout: {
              type: "exam",
              title: "The release row carries the marks",
              body: "Numericals on the MRP record are set exactly like the table in this section. Recompute it with the examiner's numbers and always show the planned-order-release row — the release row, offset by lead time, is the row that carries the marks.",
            },
            keyTerms: [
              { term: "Lot-for-lot (LFL)", definition: "A lot-sizing rule that orders exactly the net requirement of each period; minimum inventory for lumpy demand." },
              { term: "Fixed order quantity (FOQ)", definition: "A lot-sizing rule that orders a fixed batch size whenever net requirements appear, trading inventory for discounts and setup spreading." },
              { term: "Period order quantity (POQ)", definition: "A lot-sizing rule that orders every P periods the total of those periods' net requirements." },
            ],
            examQuestions: [
              {
                q: "Explain the structure of an MRP record. Compare the lot-for-lot, FOQ and POQ lot-sizing rules with one example each.",
                marks: 7,
                outline: [
                  "Draw the record skeleton: five rows against weekly columns.",
                  "Define each row: gross requirements, scheduled receipts, projected on hand, net requirements, planned receipts/releases.",
                  "Explain netting: net requirement appears when projected on hand would go negative.",
                  "LFL: order exactly the net; give the worked record in this section as the example.",
                  "FOQ: order a standard batch (e.g. pallet of 200) whenever the net appears; note the stock carried.",
                  "POQ: order every P periods the summed need; the compromise between the two.",
                  "Close with lead-time offsetting: releases are receipts shifted earlier by the lead time.",
                ],
              },
              {
                q: "What is lead-time offsetting in MRP?",
                marks: 2,
              },
              {
                q: "Why is lot-for-lot considered the natural lot-sizing rule for dependent-demand items?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "From MRP to ERP: modules and architecture",
            body: [
              "MRP planned materials; closed-loop MRP and manufacturing resource planning (MRP II) added the feedback loops and the remaining resources — machine capacity, workforce, finance — so the whole plant worked from one plan. Enterprise resource planning extends the integration to the whole enterprise: sales, finance, human resources, quality, maintenance, purchasing and production all read and write a single central database in real time. One customer order, entered once, can check stock, reserve it, create a production order, demand materials, post costs and raise an invoice without rekeying — the 'single source of truth' that ERP sells.",
              "An ERP system is sold as modules on a common database. Typical modules: financial accounting and controlling; sales and distribution; materials management (purchasing, inventory); production planning (MPS, MRP, capacity); quality management; plant maintenance; human resources; and warehouse management. A firm implements the modules it needs, in phases, on a common data model. The PPC-relevant module holds the master data of this whole subject — item master, BOM, work centres, routings, calendars — and runs the MRP engine of Section 3.1 inside it.",
              "Benefits and risks travel together. Benefits: real-time visibility, elimination of redundant data entry, standardised processes, quicker closing of accounts, and planning that finally rests on consistent numbers. Risks: implementation is long and expensive; processes must often be redesigned to fit the software; user resistance is chronic; and a bad master-data foundation multiplies errors at company scale, since every module trusts the same database. The standard case-study lesson from Indian industry is that ERP succeeds as a process-change project owned by top management, and fails when bought as an IT purchase bolted onto old habits.",
            ],
            bullets: [
              "Evolution: MRP (materials) -> MRP II (capacity, workforce, finance, feedback loops) -> ERP (whole enterprise, all functions, one database).",
              "One order entered once flows through stock check, production order, material demand, costing and invoicing — no rekeying.",
              "Core modules: finance, sales and distribution, materials management, production planning, quality, maintenance, HR.",
              "PPC master data lives in ERP: item master, BOM, work centres, routings, calendars.",
              "Success factor: ERP is a process-change project owned by top management, not an IT purchase.",
            ],
            table: {
              caption: "Typical ERP modules and their PPC links.",
              headers: ["Module", "Handles", "Link to PPC"],
              rows: [
                ["Production planning", "MPS, MRP, capacity, shop orders", "Runs the planning engine of Units I-IV"],
                ["Materials management", "Purchasing, inventory, goods receipt", "Consumes planned order releases"],
                ["Sales and distribution", "Orders, pricing, delivery", "Creates the demand signal"],
                ["Finance and controlling", "Costing, budgets, accounts", "Prices what every plan costs"],
                ["Plant maintenance", "Breakdown and preventive schedules", "Protects available capacity"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "ERP architecture — one database, many functions",
              caption: "Every module reads and writes the same records; the top layers are only as honest as the bottom layer.",
              layers: [
                { label: "Dashboards and analytics", note: "KPIs and reports to management" },
                { label: "Planning layer", note: "MPS, MRP, CRP, budgets" },
                { label: "Execution layer", note: "shop orders, purchasing, sales, QC" },
                { label: "Central database", note: "one item master, one BOM, one stock figure" },
              ],
            },
            callout: {
              type: "exam",
              title: "Three named steps",
              body: "'Trace the evolution from MRP to ERP' is a favourite 7-marker. Move in three named steps — MRP (1960s, materials), MRP II (1980s, all manufacturing resources plus feedback), ERP (1990s, whole enterprise) — and give one capability added at each step.",
            },
            keyTerms: [
              { term: "ERP", definition: "Enterprise resource planning: integrated software running all enterprise functions on one shared real-time database." },
              { term: "MRP II", definition: "Manufacturing resource planning: MRP extended with capacity, workforce and finance in a closed feedback loop." },
              { term: "Module", definition: "A functional block of an ERP system (finance, sales, materials, production) sharing the central database." },
            ],
            examQuestions: [
              {
                q: "Trace the evolution of MRP into MRP II and ERP. What are the typical modules of an ERP system, and the benefits and risks of implementing one?",
                marks: 7,
                outline: [
                  "MRP (1960s): computes dependent-demand component orders from MPS, BOM, inventory records.",
                  "Closed-loop MRP and MRP II (1980s): adds capacity planning, workforce, finance and feedback.",
                  "ERP (1990s): extends integration to sales, HR, quality, maintenance on one database.",
                  "List modules: finance, sales and distribution, materials management, production planning, QM, PM, HR.",
                  "Benefits: single source of truth, no rekeying, real-time visibility, standard processes.",
                  "Risks: cost, duration, process redesign, user resistance, bad master data multiplying.",
                  "Conclude with the case-study lesson: top-management ownership decides success.",
                ],
              },
              {
                q: "How does MRP II differ from basic MRP?",
                marks: 2,
              },
              {
                q: "List any four master-data objects that a production-planning module maintains.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "EOQ, reorder point and safety stock",
            body: [
              "Independent-demand items — spares, consumables, bought-out parts — are controlled by order policies, not by MRP. Two costs pull against each other: the ordering cost S, incurred per purchase order or setup, falls when few large orders are placed; the holding cost H, the cost of carrying one unit for a year (capital, storage, insurance, obsolescence), rises with the same choice. The economic order quantity balances them exactly: EOQ = sqrt(2DS/H), where D is annual demand. At the EOQ the annual ordering and holding costs are equal, and the total cost curve is flat around it — which is why an approximate EOQ is still a good policy.",
              "Timing then decides when to place the EOQ. In the continuous-review (Q) system, stock is monitored, and when it falls to the reorder point an EOQ is ordered: ROP = demand during lead time + safety stock. Safety stock is the buffer against demand and lead-time variability; its size is set by the service level — for 95% service with known demand standard deviation, SS = z x sigma-d x sqrt(L) with z = 1.65. The periodic-review (P) system instead checks stock at fixed intervals and orders up to a target level; it is simpler to administer but needs more safety stock because it must cover the review interval plus the lead time.",
              "A worked anchor: D = 12,000 units per year, S = Rs 90 per order, H = Rs 24 per unit-year gives EOQ = sqrt(2 x 12000 x 90 / 24) = 300 units — forty orders a year. With a two-week lead time, ROP = 12000/52 x 2, about 462 units; adding a 95% safety stock lifts it further. Note the sensitivities: EOQ grows with the square root of demand, so a fourfold demand increase only doubles the order size, and quantity discounts justify ordering above EOQ whenever the price saving beats the extra holding cost — the classic stepwise comparison.",
            ],
            bullets: [
              "Ordering cost S falls with fewer, larger orders; holding cost H rises with them — EOQ balances the two.",
              "EOQ = sqrt(2DS/H); at the EOQ, annual ordering cost equals annual holding cost.",
              "ROP = (demand per period x lead time) + safety stock; the Q-system orders an EOQ whenever stock hits ROP.",
              "Safety stock = z x sigma-d x sqrt(L) for a chosen service level z; the P-system needs more because it covers review time + lead time.",
              "EOQ moves with the square root of demand; quantity discounts can justify ordering above EOQ.",
            ],
            codeExample: {
              language: "python",
              caption: "EOQ, orders per year, reorder point and a 95% safety stock.",
              code: `import math

D = 12000      # annual demand, units
S = 90         # ordering cost, rupees per order
H = 24         # holding cost, rupees per unit per year
L = 2          # lead time, weeks

eoq = math.sqrt(2 * D * S / H)
print(f"EOQ        = {eoq:.0f} units")        # 300
print(f"Orders/yr  = {D / eoq:.1f}")          # 40.0

rop = (D / 52) * L                            # demand during lead time
print(f"ROP        = {rop:.0f} units")        # 462

sigma_d = 30                                  # weekly demand std dev
z = 1.65                                     # 95% service level
ss = z * sigma_d * math.sqrt(L)
print(f"Safety stock (95%) = {ss:.0f} units") # 70`,
            },
            diagram: {
              kind: "cycle",
              title: "The Q-system (continuous review) loop",
              caption: "Every pass around this loop places exactly one EOQ-sized order.",
              steps: [
                { label: "Monitor stock", note: "perpetual, transaction by transaction" },
                { label: "Hit the reorder point", note: "lead-time demand + safety stock" },
                { label: "Place an EOQ order", note: "fixed quantity Q" },
                { label: "Stock keeps falling", note: "through the lead time" },
                { label: "Order arrives", note: "stock jumps back up; loop restarts" },
              ],
            },
            callout: {
              type: "exam",
              title: "The most repeated numerical",
              body: "The EOQ numerical is the most repeated calculation in this unit: compute EOQ, number of orders per year and total annual cost. Always write the formula first, substitute with units, and state both cost components separately — T = (D/Q) x S + (Q/2) x H.",
            },
            keyTerms: [
              { term: "EOQ", definition: "Economic order quantity, sqrt(2DS/H): the order size that equalises annual ordering and holding costs." },
              { term: "Reorder point (ROP)", definition: "The stock level that triggers an order: demand during the lead time plus safety stock." },
              { term: "Safety stock", definition: "Buffer inventory held against demand and lead-time variability, sized by the service level z-factor." },
            ],
            examQuestions: [
              {
                q: "Derive the economic order quantity formula. For D = 12,000 units/year, S = Rs 90 per order and H = Rs 24 per unit per year, compute the EOQ, orders per year and total annual cost.",
                marks: 7,
                outline: [
                  "State the cost components: ordering cost (D/Q) x S and holding cost (Q/2) x H.",
                  "Set total cost T = (D/Q)S + (Q/2)H and differentiate with respect to Q.",
                  "Solve dT/dQ = 0 to obtain Q = sqrt(2DS/H); verify it is a minimum.",
                  "Substitute: sqrt(2 x 12000 x 90 / 24) = sqrt(900000) = 300 units.",
                  "Orders per year: 12000 / 300 = 40 orders.",
                  "Total cost: 40 x 90 + 150 x 24 = 3600 + 3600 = Rs 7200 per year.",
                  "Note the EOQ property: ordering and holding costs are equal at the optimum.",
                ],
              },
              {
                q: "Define the reorder point. What two quantities make it up?",
                marks: 2,
              },
              {
                q: "Why does a periodic-review system need more safety stock than a continuous-review system?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "ABC and VED analysis, JIT and Kanban",
            body: [
              "A plant stocks thousands of items; controlling each with equal effort wastes management attention. ABC analysis ranks items by annual usage value (annual demand x unit cost) and applies Pareto's law: roughly 15% of items — the A class — carry about 75% of the value; the next 30%, the B class, carry about 20%; the remaining 55%, the C class, barely 5%. A items get tight control — frequent review, careful forecasting, low safety stock, reliable suppliers. B items get moderate rules. C items get simple, loose control: large infrequent orders, two-bin systems, minimal paperwork.",
              "Value alone is not the whole story: a cheap gasket that stops the line is worth more than an expensive spare that can wait. VED analysis classifies by criticality — Vital items stop production or endanger safety and deserve high stock; Essential items cause serious but tolerable disruption; Desirable items cause only minor inconvenience. Combining both gives a 3 x 3 grid: an A-V item (costly and vital, like a CNC spindle) is controlled most tightly; a C-D item is ordered in bulk and almost forgotten. Hospitals plan drugs by this grid; spare-parts planners live by it.",
              "JIT attacks inventory from a different direction: instead of managing stock, remove the reasons for it. Production is pulled by actual demand at takt time, setups are compressed (SMED), suppliers deliver in small frequent lots, and quality must be built in because there is no buffer to hide behind. The Kanban card is the signal: a card released by consumption authorises the preceding station to produce, or the supplier to ship, exactly the replaced quantity. JIT cuts carrying cost and exposes problems, but it is fragile — a strike or a breakdown upstream stops the whole chain, so single-source JIT risk is now part of every case study.",
            ],
            bullets: [
              "ABC ranks by annual usage value: A is about 15% of items and 75% of value, B about 30% and 20%, C about 55% and 5%.",
              "Control policy follows class: A tight (weekly review, low safety stock), B monthly, C simple bulk rules.",
              "VED ranks by criticality — Vital (stops production), Essential (serious disruption), Desirable (minor).",
              "The AV matrix combines both: A+V tightest control, C+D loosest; standard for spares and hospital pharmacies.",
              "JIT pulls production at takt time; Kanban cards authorise replacement; no buffer means zero tolerance for defects.",
            ],
            table: {
              caption: "VED classes and stock policy.",
              headers: ["Class", "Meaning", "Disruption if short", "Stock policy"],
              rows: [
                ["V", "Vital", "Line stops / safety risk", "High safety stock, dual sourcing"],
                ["E", "Essential", "Serious but manageable", "Moderate stock, close watch"],
                ["D", "Desirable", "Minor inconvenience", "Minimal stock, order on demand"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "ABC classification of inventory value",
              caption: "A few items own most of the money — attention should follow the same shape.",
              tiers: [
                { label: "A class", note: "about 15% of items, 75% of value — tight control" },
                { label: "B class", note: "about 30% of items, 20% of value — moderate rules" },
                { label: "C class", note: "about 55% of items, 5% of value — simple bulk control" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the Pareto curve",
              body: "'Explain ABC analysis with the Pareto curve' is near-certain. Draw value on the y-axis and percentage of items on the x-axis, show the steep A-segment and the long flat C-tail, then pair each class with its control policy — the policy pairing is where marks separate.",
            },
            keyTerms: [
              { term: "ABC analysis", definition: "Ranking inventory items by annual usage value so that A, B and C classes receive tight, moderate and loose control respectively." },
              { term: "VED analysis", definition: "Classifying items as Vital, Essential or Desirable by the criticality of their shortage, irrespective of cost." },
              { term: "Kanban", definition: "A card or signal in a pull system that authorises the upstream station or supplier to replace exactly what was consumed." },
            ],
            examQuestions: [
              {
                q: "Explain ABC analysis of inventory control with a sketch of the Pareto curve. State the control policy for each class and mention its limitations.",
                marks: 7,
                outline: [
                  "Define ABC analysis: ranking items by annual usage value (demand x unit cost).",
                  "State the split: A about 15% of items holding 75% of value; B about 30% and 20%; C about 55% and 5%.",
                  "Draw the Pareto curve: cumulative value vs percentage of items, steep then flat.",
                  "Policies: A — tight control, weekly review, low safety stock; B — monthly, moderate; C — bulk orders, two-bin.",
                  "Explain the benefit: scarce control effort follows the money.",
                  "Limitations: ignores criticality of cheap items, seasonal items, and needs good usage data.",
                  "Close with the AV (ABC-VED) matrix used for spare parts.",
                ],
              },
              {
                q: "What is a Kanban card? What does it authorise?",
                marks: 2,
              },
              {
                q: "Differentiate between VED and ABC analysis. Why are both used together for spare parts?",
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
      title: "Scheduling and Shop-Floor Control",
      summary:
        "The short-range plan on the floor: loading against capacity and the Gantt chart, sequencing rules FCFS, SPT and EDD, Johnson's rule for the two-machine flow shop, flow-shop versus job-shop scheduling with dispatching practice, and the lean shop floor of 5S, poka-yoke and value stream mapping.",
      chapter: {
        number: "04",
        title: "Scheduling and Shop-Floor Control",
        intro:
          "Unit IV takes the plan to the machines. Loading checks work against capacity and draws it on Gantt charts; sequencing decides which waiting job a machine runs next, with FCFS, SPT and EDD trading flow time against lateness; Johnson's rule gives the optimal makespan for n jobs on two machines. The shop's layout decides the problem's species — line balancing in flow shops, queue management in job shops — and lean practice (5S, poka-yoke, value stream mapping) removes the waste that makes scheduling hard in the first place.",
        inOneBreath:
          "Loading assigns work to work centres against available hours and shows it on Gantt charts (load, schedule and progress forms); at a machine the sequencing rules buy different measures — SPT minimises mean flow time, EDD minimises maximum lateness, FCFS is fair but blind, and on one machine makespan never changes; Johnson's rule sequences n jobs on two machines by placing the smallest remaining time at the head if it is on M1 and at the tail if on M2; flow shops schedule by line balancing while job shops fight queues with dispatching rules and controlled release; and lean strips the wastes away with 5S, poka-yoke and value stream maps.",
        sections: [
          {
            number: "4.1",
            title: "Loading and the Gantt chart",
            body: [
              "Scheduling operates at three levels: loading assigns work to work centres; sequencing orders the queue at each machine; monitoring keeps the plan honest. Loading starts from capacity — the hours each machine or work centre can offer in a period — and from the standard times fixed by routing. When assigned hours exceed available hours the centre is overloaded; underloaded centres waste capital. The planner levels the load by shifting jobs within their slack, subcontracting, approving overtime, or moving work to alternate routings — decisions taken inside the capacity-planning loop that feeds back into the master schedule.",
              "The Gantt chart is scheduling's native picture: a horizontal bar chart with time on the x-axis and machines, orders or departments on the y-axis, each bar spanning the planned start to finish of a task. Three standard forms appear in exams and plants. The load chart shows machine hours booked against available hours; the schedule or order chart shows each job's planned bar per machine; the progress chart overlays the actual progress bar — usually hatched — on the planned bar, so slippage is visible at a glance. Updating is manual and frequent; a chart a week old is already history.",
              "Gantt charts earned their place because they answer three questions on one sheet: what should be running now, what should come next, and how far behind the plan reality is. Their weaknesses are equally famous: they are static pictures, they do not show dependencies between jobs the way networks do, and beyond a few dozen jobs they become unreadable — the reason modern shop-floor systems animate the same data on screens. For the exam, the skill is drawing a small schedule chart for two or three machines and marking the idle and waiting periods on it.",
            ],
            bullets: [
              "Loading = assigning work to work centres against their available hours, using standard times from routing.",
              "Overload is levelled by shifting within slack, overtime, subcontracting or alternate routings; underload wastes capacity.",
              "Gantt chart: time on the x-axis, machines or orders on the y-axis; bars are planned task spans.",
              "Three forms: load chart (hours vs capacity), schedule chart (job bars per machine), progress chart (actual over planned).",
              "Limits: static, no dependency logic, unreadable beyond a few dozen jobs — networks and shop-floor screens take over.",
            ],
            table: {
              caption: "The three Gantt forms.",
              headers: ["Form", "Rows show", "Bars show", "Read for"],
              rows: [
                ["Load chart", "Machines or departments", "Hours booked vs available", "Overloads and idle capacity"],
                ["Schedule chart", "Machines", "Each job's planned span", "When each job runs and waits"],
                ["Progress chart", "Jobs or orders", "Planned bar with actual overlay", "Slippage against the plan"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building a machine loading plan",
              caption: "From job list to a levelled schedule — the weekly routine of a production scheduler.",
              steps: [
                { label: "List jobs with due dates and standard times" },
                { label: "Compute available capacity per centre" },
                { label: "Assign jobs to machines" },
                { label: "Compare load with capacity" },
                { label: "Level overloads", note: "slack moves, overtime, subcontract" },
                { label: "Freeze and publish the schedule" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch all three",
              body: "When asked to 'explain Gantt charts with sketches', draw all three forms — even small ones — and label the axes. A progress chart with one planned bar and one hatched actual bar, clearly showing slippage, is the expected figure.",
            },
            keyTerms: [
              { term: "Loading", definition: "Assigning work to work centres so that assigned standard hours match available capacity as closely as possible." },
              { term: "Gantt chart", definition: "A bar chart with time on one axis and machines or orders on the other, showing planned and actual task spans." },
              { term: "Capacity levelling", definition: "Removing overloads and underloads by shifting work within slack, overtime, subcontracting or alternate routings." },
            ],
            examQuestions: [
              {
                q: "What is machine loading? Explain how the Gantt chart is used for scheduling and progress control, with sketches of its standard forms.",
                marks: 7,
                outline: [
                  "Define loading: assigning work against available machine hours using routing's standard times.",
                  "Explain overload and underload and the levelling options: slack moves, overtime, subcontracting, alternate routing.",
                  "Introduce the Gantt chart: axes, bars, planned spans.",
                  "Sketch and explain the load chart: hours booked vs hours available per machine.",
                  "Sketch and explain the schedule chart: job bars per machine in time order.",
                  "Sketch the progress chart: hatched actual bar over the planned bar to expose slippage.",
                  "Close with limitations: static, no dependencies, unreadable when large.",
                ],
              },
              {
                q: "Distinguish between a load chart and a progress chart.",
                marks: 2,
              },
              {
                q: "List any three methods of resolving an overloaded work centre.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Sequencing rules: FCFS, SPT and EDD",
            body: [
              "When several jobs queue at one machine, the order of service changes their fate. Performance is measured by makespan (total elapsed time to finish all jobs — fixed for one machine anyway), mean flow time (average time a job spends in the shop), average tardiness (lateness beyond the due date), and the number of tardy jobs. Four rules dominate practice. FCFS serves in arrival order — fair and simple, but a single long job can wreck everyone behind it. SPT, shortest processing time first, clears the queue fastest and minimises mean flow time, but long jobs starve.",
              "EDD, earliest due date first, minimises maximum lateness and is the rule of choice when delivery promises rule; its weakness is that a long urgent-for-someone job can still delay a short one. LPT, longest processing time first, concentrates on big jobs and is used mainly to keep key machines loaded — it is the worst rule for flow time. Other rules appear inside software: critical ratio (time remaining to due date divided by work remaining) and slack rules re-rank the queue dynamically as time passes. No rule optimises everything; the choice depends on which performance measure management is buying.",
              "A worked example fixes the method. Four jobs with processing times 8, 4, 12 and 6 days: under FCFS the flow times are 8, 12, 24 and 30 and the mean is 18.5 days; under SPT the order becomes 4, 6, 8, 12 with flow times 4, 10, 18 and 30 and mean 15.5 days. Both finish all work at day 30 — makespan is order-invariant on a single machine — but SPT cuts mean flow time by three days and shrinks work-in-process accordingly. With due dates added, EDD would trade some flow time for lateness: the same arithmetic, scored differently.",
            ],
            bullets: [
              "Measures: makespan, mean flow time, average tardiness, number of tardy jobs — no rule optimises all of them.",
              "FCFS: arrival order — fair, simple, no due-date intelligence; one long job delays the whole queue.",
              "SPT: shortest job first — minimises mean flow time and WIP; long jobs may starve.",
              "EDD: earliest due date — minimises maximum lateness; the choice under tight delivery promises.",
              "On a single machine, makespan is the same for every sequence; only flow time and lateness move.",
            ],
            table: {
              caption: "The four classic sequencing rules.",
              headers: ["Rule", "Order by", "Buys you", "Risk"],
              rows: [
                ["FCFS", "Arrival time", "Fairness, zero data needed", "Long job blocks the queue"],
                ["SPT", "Shortest processing time", "Minimum mean flow time, low WIP", "Long jobs starve"],
                ["EDD", "Earliest due date", "Minimum maximum lateness", "Long urgent job hurts short ones"],
                ["LPT", "Longest processing time", "Keeps heavy machines loaded", "Worst mean flow time"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which rule for this queue?",
              caption: "Pick the rule that buys the performance measure management actually needs.",
              start: "Several jobs wait at one machine",
              branches: [
                { label: "Must cut average flow time", outcome: "SPT — shortest job first", good: true },
                { label: "Must protect due dates", outcome: "EDD — earliest due date first", good: true },
                { label: "Fairness is the only criterion", outcome: "FCFS — arrival order", good: true },
                { label: "Serve the longest job first", outcome: "LPT inflates flow time and WIP — rarely justified", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "The table earns the marks",
              body: "The numerical pattern is fixed: four or five jobs, times and due dates given, compare two rules on flow time and tardiness. Build a table with columns Job, processing time, flow time, due date, tardiness per rule; the examiner's marks sit in the table rows.",
            },
            keyTerms: [
              { term: "Sequencing", definition: "Deciding the order in which waiting jobs are processed at a machine or through a shop." },
              { term: "Flow time", definition: "The total time a job spends in the system, including waiting; its mean is minimised by the SPT rule." },
              { term: "Tardiness", definition: "The lateness of a job beyond its due date, zero if completed early; maximum tardiness is minimised by EDD." },
            ],
            examQuestions: [
              {
                q: "Explain the FCFS, SPT and EDD sequencing rules. For jobs with processing times 8, 4, 12 and 6 days, compare FCFS and SPT on mean flow time.",
                marks: 7,
                outline: [
                  "Define the performance measures: makespan, mean flow time, tardiness, number tardy.",
                  "FCFS: define; compute flow times 8, 12, 24, 30 and mean 18.5 days.",
                  "SPT: define; reorder to 4, 6, 8, 12 with flow times 4, 10, 18, 30 and mean 15.5 days.",
                  "Compare: SPT saves 3 days of mean flow time and cuts WIP.",
                  "Note makespan = 30 days under both rules — order-invariant on one machine.",
                  "EDD: define and state the property of minimising maximum lateness; mention its weakness.",
                  "Conclude: rule choice depends on which measure management is buying.",
                ],
              },
              {
                q: "Define flow time and tardiness.",
                marks: 2,
              },
              {
                q: "Why does SPT minimise average flow time, and what is its drawback?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Johnson's rule for two-machine sequencing",
            body: [
              "Johnson's rule solves a special but common case: n jobs must each pass through two machines, M1 then M2, in the same order — a two-machine flow shop. The objective is the makespan, the time the last job leaves M2. The rule: list each job's times on the two machines; find the smallest time among all remaining jobs; if it lies on M1, place that job as early as possible in the sequence; if on M2, place it as late as possible; remove the job and repeat until the sequence is complete. The result minimises makespan and total idle time on the second machine.",
              "Worked anchor: five jobs A-E with M1/M2 times A(5,2), B(1,6), C(9,7), D(3,8), E(10,4). The smallest time is 1, on M1, so B goes first. Next smallest is 2 on M2 (job A), so A goes last. Next 3 on M1 (job D), so D takes the next early slot. Next 4 on M2 (job E), so E takes the next late slot. C remains in the middle. Sequence: B, D, C, E, A. Simulating both machines gives a makespan of 30, with M2 idle only three minutes in total — the code example below verifies the arithmetic.",
              "Two cautions complete the topic. First, Johnson's rule works for two machines only; for three machines it applies solely when the middle machine's times are dominated — the largest M2 time no more than the smallest time on M1 or M3 — after which M1+M2 and M2+M3 are treated as two pseudo-machines. Second, the rule orders machines; it does not promise due-date performance — lateness must be checked separately once the sequence is fixed. Extensions to more machines are handled by heuristics such as the CDS algorithm, which builds several two-machine pseudo-problems and keeps the best sequence found.",
            ],
            bullets: [
              "Scope: n jobs, two machines, same technological order (two-machine flow shop); objective = minimum makespan.",
              "Rule: smallest remaining time — on M1 place early (head), on M2 place late (tail); remove the job and repeat.",
              "Worked sequence for A(5,2), B(1,6), C(9,7), D(3,8), E(10,4) is B, D, C, E, A with makespan 30.",
              "Three machines: valid only if the middle machine is dominated — then use pseudo-machines M1+M2 and M2+M3.",
              "The rule minimises makespan and second-machine idle time; check due dates separately.",
            ],
            codeExample: {
              language: "python",
              caption: "Johnson's rule and the makespan simulation for the five-job example.",
              code: `# Johnson's rule: n jobs on machines M1 then M2, minimise makespan
jobs = {
    "A": (5, 2),
    "B": (1, 6),
    "C": (9, 7),
    "D": (3, 8),
    "E": (10, 4),   # (time on M1, time on M2)
}

head, tail = [], []
remaining = dict(jobs)
while remaining:
    job = min(remaining, key=lambda j: min(remaining[j]))
    t1, t2 = remaining.pop(job)
    if t1 <= t2:
        head.append(job)        # small time on M1: early slot
    else:
        tail.insert(0, job)     # small time on M2: late slot
sequence = head + tail
print("Optimal sequence:", " -> ".join(sequence))

# simulate both machines to get makespan and M2 idle time
t1 = t2 = idle = 0
for j in sequence:
    t1 += jobs[j][0]
    idle += max(0, t1 - t2)
    t2 = max(t1, t2) + jobs[j][1]
print(f"Makespan = {t2}")       # 30
print(f"M2 idle  = {idle}")     # 3`,
            },
            diagram: {
              kind: "pipeline",
              title: "Johnson's rule, step by step",
              caption: "Head if the smallest time is on machine 1, tail if on machine 2 — repeat until the sequence is full.",
              stages: [
                { label: "Tabulate times on M1 and M2" },
                { label: "Find the smallest remaining time" },
                { label: "On M1? slot at the head" },
                { label: "On M2? slot at the tail" },
                { label: "Remove job, repeat", note: "ties broken arbitrarily" },
                { label: "Read the finished sequence" },
              ],
            },
            callout: {
              type: "exam",
              title: "The most predictable 7-marker",
              body: "The Johnson numerical is the most predictable question in the paper: five jobs, two machines. Practise the head-tail mechanic until it is reflexive, then always simulate both machines to report makespan and M2 idle time — the last two marks live in that simulation.",
            },
            keyTerms: [
              { term: "Johnson's rule", definition: "The sequencing rule that minimises makespan for n jobs on two machines: smallest time at the head if on M1, at the tail if on M2." },
              { term: "Makespan", definition: "The total elapsed time from the start of the first job to the completion of the last; the objective of flow-shop sequencing." },
              { term: "Two-machine flow shop", definition: "A layout in which every job passes through machine M1 and then machine M2 in the same order." },
            ],
            examQuestions: [
              {
                q: "State Johnson's rule. Find the optimal sequence and makespan for jobs A(5,2), B(1,6), C(9,7), D(3,8), E(10,4) on two machines, and the idle time on machine 2.",
                marks: 7,
                outline: [
                  "State the rule: smallest remaining time; head if on M1, tail if on M2.",
                  "Step through: 1 on M1 -> B first; 2 on M2 -> A last; 3 on M1 -> D next; 4 on M2 -> E next-last.",
                  "Sequence: B, D, C, E, A.",
                  "Simulate M1: finish times 1, 4, 13, 23, 28.",
                  "Simulate M2: start and finish 1-7, 7-15, 15-22, 23-27, 28-30; makespan = 30.",
                  "M2 idle: 1 + 1 + 1 = 3 minutes in total.",
                  "State the condition for the three-machine extension: middle machine dominated.",
                ],
              },
              {
                q: "Under what condition can Johnson's rule be extended to three machines?",
                marks: 2,
              },
              {
                q: "Why does Johnson's rule not guarantee minimum tardiness?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Flow shop and job shop; dispatching on the floor",
            body: [
              "The shop's layout decides how scheduling must be done. In a flow shop all products follow essentially the same route through machines arranged in that order — automotive assembly, bottling. Scheduling reduces to line balancing: set the cycle time from the demand rate, group tasks into stations of near-equal work content, and the schedule is the line's rhythm. In a job shop every order has its own routing among general-purpose machines; queues form at each machine, bottleneck machines wander as the product mix changes, flow is erratic, work-in-process piles up, and scheduling becomes a running negotiation between due dates and capacity.",
              "Dispatching is the minute-by-minute execution of that negotiation: deciding which of the waiting jobs a machine runs next, and when new orders are released to the floor. Centralised dispatching issues instructions from one office with full plant visibility; decentralised dispatching hands the decision to section supervisors with faster local knowledge. The rules of Section 4.2 become dispatching rules at each queue. Release control matters as much as queue discipline: releasing work early floods the floor with WIP and makes every queue slower; controlled release through input-output analysis keeps queues short and due dates honest.",
              "Modern practice adds two ideas. The theory of constraints argues for scheduling the bottleneck first — an hour lost at the constraint is an hour of plant output lost — and subordinating every other schedule to it, the drum-buffer-rope mechanism. Lean adds takt-time release: orders enter the floor at the rate of customer demand. Between them, the practical shop-floor control kit is: input-output charts to govern release, dispatching rules to order the queues, progress boards and barcode scans to track work, and expediting reserved for genuine exceptions instead of being the default management style.",
            ],
            bullets: [
              "Flow shop: one dominant route; scheduling = line balancing against a cycle time; WIP is low, flow predictable.",
              "Job shop: a route per order; queues at every machine, wandering bottlenecks, high WIP; scheduling = sequencing plus release control.",
              "Dispatching: choosing the next job at each machine — centralised from a planning office or decentralised to supervisors.",
              "Release discipline: input-output control; early release floods the floor and slows every queue.",
              "Bottleneck-first scheduling (drum-buffer-rope) and takt-time release are the modern refinements.",
            ],
            table: {
              caption: "Centralised vs decentralised dispatching.",
              headers: ["Aspect", "Centralised", "Decentralised"],
              rows: [
                ["Orders released by", "One dispatch office", "Section supervisor"],
                ["Visibility", "Plant-wide picture", "Local, immediate"],
                ["Coordination", "Strong, consistent priorities", "Risk of local optimisation"],
                ["Reaction speed", "Slower — information travels", "Fast at the machine"],
                ["Suits", "Large, complex shops", "Small shops, skilled foremen"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Flow shop versus job shop",
              caption: "One route for all jobs versus a route per job — the scheduling problem changes species.",
              left: {
                heading: "Flow shop",
                items: [
                  "Machines laid out in the product's order",
                  "One dominant routing for every job",
                  "Scheduling = line balancing to a cycle time",
                  "Low WIP, predictable, fast flow",
                  "Failure mode: any station stops the line",
                ],
              },
              right: {
                heading: "Job shop",
                items: [
                  "Similar machines grouped into sections",
                  "A fresh routing for every order",
                  "Scheduling = sequencing and release control",
                  "High WIP, erratic flow, wandering bottleneck",
                  "Failure mode: queues grow without bound",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Separate the words",
              body: "If a question mixes scheduling and dispatching, separate them explicitly: scheduling plans when work should run; dispatching authorises the next job at the machine when that moment arrives. The input-output chart sketch earns the extra mark.",
            },
            keyTerms: [
              { term: "Flow shop", definition: "A layout in which all jobs follow the same sequence of machines; scheduling becomes line balancing." },
              { term: "Job shop", definition: "A layout of general-purpose machines where each order has its own routing; scheduling becomes queue management." },
              { term: "Input-output control", definition: "Comparing the work released to a work centre with the work it completes, to keep queues and lead times honest." },
            ],
            examQuestions: [
              {
                q: "Differentiate between flow-shop and job-shop scheduling. Explain centralised and decentralised dispatching with the advantages of each.",
                marks: 7,
                outline: [
                  "Flow shop: definition, examples, one dominant route, scheduling = line balancing.",
                  "Job shop: definition, examples, a routing per order, queues and wandering bottlenecks.",
                  "Compare on WIP, flow predictability and scheduling difficulty.",
                  "Dispatching: define as the release and sequencing decision at machine level.",
                  "Centralised: one office, plant visibility, consistent priorities; suits large shops.",
                  "Decentralised: supervisor-level, fast reaction, local knowledge; suits small shops.",
                  "Close with input-output control and bottleneck-first scheduling as refinements.",
                ],
              },
              {
                q: "What is input-output control?",
                marks: 2,
              },
              {
                q: "Why is scheduling a job shop harder than scheduling a flow shop?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Lean shop floor: 5S, poka-yoke and VSM",
            body: [
              "Lean manufacturing pursues more value with less of everything, by hunting the seven wastes: overproduction, waiting, transport, over-processing, inventory, motion and defects (an eighth — unused talent — is often added). The 5S system creates the physical order that makes waste visible: Seiri (sort) removes what is not needed; Seiton (set in order) gives every tool a labelled home; Seiso (shine) cleans and inspects while cleaning; Seiketsu (standardise) fixes the first three in written routines; Shitsuke (sustain) makes the routine a habit through audits. A 5S floor is not cosmetic — search time and motion waste fall immediately.",
              "Poka-yoke, mistake-proofing, engineers defects out at the source: a fixture that accepts a part only one way round, a counter that confirms ten screws, a sensor that halts the press unless the guard closes. Shigeo Shingo's insight is that inspection after the error is too late; a device that makes the error impossible — or stops the line the instant it occurs — replaces vigilance with geometry. Together with jidoka (the authority of any worker to stop the line) and andon signals, poka-yoke converts quality from a final gate into a property of the process itself.",
              "Value stream mapping is lean's diagnostic instrument. A current-state map follows one product family through every process and inventory point, recording cycle time, changeover time, uptime and inventory at each step, and computes the timeline: how much of the lead time is processing versus waiting (typically minutes versus days). The future-state map then applies the lean questions — produce to takt, create continuous flow where possible, pull with supermarkets where not, level the mix — and the gap between the maps becomes the kaizen programme, a case-study exercise worth rehearsing.",
            ],
            bullets: [
              "Seven wastes: overproduction, waiting, transport, over-processing, inventory, motion, defects — learn the list verbatim.",
              "5S: sort, set in order, shine, standardise, sustain — physical order makes waste measurable.",
              "Poka-yoke: mistake-proofing devices — prevention (cannot do it wrong) or detection (stop on the spot).",
              "Jidoka and andon: any worker may stop the line; the stop is a signal, not a failure.",
              "VSM: current state -> future state around takt; lead time splits into seconds of processing and days of waiting.",
            ],
            table: {
              caption: "The 5S system.",
              headers: ["S", "Japanese", "English", "Action"],
              rows: [
                ["1", "Seiri", "Sort", "Remove what is not needed — red-tag candidates"],
                ["2", "Seiton", "Set in order", "A labelled place for every tool and part"],
                ["3", "Seiso", "Shine", "Clean to inspect — leaks and wear become visible"],
                ["4", "Seiketsu", "Standardise", "Write the first three S into routines and photos"],
                ["5", "Shitsuke", "Sustain", "Audits and habits keep the standard alive"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Drawing a value stream map",
              caption: "The VSM method: map reality, design the ideal, kaizen the gap.",
              steps: [
                { label: "Pick one product family" },
                { label: "Walk the flow, time every step", note: "cycle, changeover, uptime" },
                { label: "Draw the current state", note: "process boxes, inventory triangles" },
                { label: "Locate the wastes", note: "waiting dominates the timeline" },
                { label: "Design the future state", note: "takt, flow, pull supermarkets" },
                { label: "Kaizen the gap", note: "the improvement programme" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two repeaters",
              body: "'Explain the seven wastes with examples' and 'explain 5S' are the two most repeated lean questions. For VSM, sketch process boxes joined by inventory triangles with a data box under each process — that sketch distinguishes a studied answer from a memorised one.",
            },
            keyTerms: [
              { term: "5S", definition: "The lean workplace-order system: sort, set in order, shine, standardise, sustain." },
              { term: "Poka-yoke", definition: "A mistake-proofing device that makes an error impossible or stops the process the moment it occurs." },
              { term: "Value stream mapping", definition: "Drawing the current and future states of a product's flow to expose waste and target kaizen." },
            ],
            examQuestions: [
              {
                q: "Explain the seven wastes of lean manufacturing and the 5S system, with the action under each S.",
                marks: 7,
                outline: [
                  "Define lean: maximising value by removing waste.",
                  "List the seven wastes with a one-line example each.",
                  "Introduce 5S as the foundation that makes waste visible.",
                  "Seiri — sort: remove the unneeded, red-tagging.",
                  "Seiton — set in order: labelled homes for tools; Seiso — shine: clean to inspect.",
                  "Seiketsu — standardise: write the routine; Shitsuke — sustain: audit the habit.",
                  "Close with the benefit: search time, motion and defect wastes fall immediately.",
                ],
              },
              {
                q: "What is poka-yoke? Give two examples.",
                marks: 2,
              },
              {
                q: "List the steps of drawing a value stream map and name its two states.",
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
      title: "Quality and Project Management",
      summary:
        "The quality and project toolkit: TQM principles with PDCA and the ISO 9001 system, the seven QC tools and Six Sigma DMAIC, SPC control charts for variables and attributes, process capability Cp and Cpk with TPM and OEE, and CPM/PERT network scheduling for one-off projects.",
      chapter: {
        number: "05",
        title: "Quality and Project Management",
        intro:
          "Unit V closes the loop with quality and projects. TQM makes quality everyone's job and formalises it in the ISO 9001 management system; the seven QC tools and Six Sigma DMAIC give improvement its instruments; statistical process control separates chance from assignable causes on X-bar/R, p and c charts; process capability (Cp, Cpk) and TPM's OEE measure whether a stable process is actually fit. Project management finishes with CPM and PERT networks, where the critical path and its slack decide both the schedule and the crashing money.",
        inOneBreath:
          "Quality evolved from inspection to SQC to assurance to TQM, whose engine is PDCA and whose form is certified by ISO 9001; the seven QC tools (check sheet, Pareto, histogram, scatter, fishbone, control chart, stratification) feed both TQM circles and Six Sigma's DMAIC projects targeting 3.4 defects per million; SPC charts separate chance from assignable causes — X-bar and R for measurements, p for fraction defective, c for defects per unit — with limits at ±3 sigma; Cp measures potential spread against tolerance while Cpk penalises off-centre drift; TPM's OEE = availability x performance x quality; and CPM/PERT find the zero-slack critical path, with PERT adding expected time (to + 4tm + tp)/6, variance and completion probabilities.",
        sections: [
          {
            number: "5.1",
            title: "TQM and the ISO 9001 quality management system",
            body: [
              "Quality management evolved in four stages: inspection, which sorted defects out after the fact; statistical quality control, which monitored the process; quality assurance, which documented prevention procedures; and total quality management, which makes quality the job of everyone from the loading dock to the boardroom. TQM rests on a handful of principles: customer-defined quality, visible leadership, total employee involvement, process thinking, continuous improvement (kaizen), decisions made on facts and data, and partnership with suppliers. Its engine is the PDCA cycle — plan the change, do it on a small scale, check the result against the target, act to standardise or abandon — repeated forever.",
              "Quality circles are TQM's shop-floor organ: small voluntary teams from one area meet weekly to analyse and solve the problems of their own workplace with the basic QC tools. The advantages are cheap improvements and engagement; the risk is circles that decay when management stops responding to their proposals. ISO 9001 is TQM's formal cousin: a certifiable standard for a quality management system built on the process approach, the PDCA cycle and risk-based thinking. The 2015 version structures the QMS around clauses 4 to 10 — context, leadership, planning, support, operation, performance evaluation, improvement — and demands documented information that proves the system works.",
              "Certification is an audit exercise: gap analysis against the standard, documentation of processes, internal audits, a corrective-action loop, and finally the external registrar's audit. The value debated in case studies is real but conditional: the certificate opens export customers and forces discipline, but it certifies consistency — 'say what you do, do what you say' — not excellence. A firm can hold ISO 9001 and still make mediocre products consistently. TQM aims beyond compliance at a culture in which every process owner runs PDCA on their own work; the standard supplies the skeleton, the culture supplies the life.",
            ],
            bullets: [
              "Evolution: inspection -> statistical quality control -> quality assurance -> TQM — from sorting defects to everyone owning quality.",
              "TQM principles: customer focus, leadership, involvement, process approach, kaizen, fact-based decisions, supplier partnership.",
              "PDCA — plan, do, check, act — is TQM's repeating improvement engine.",
              "Quality circles: small voluntary shop-floor teams solving their own problems with QC tools.",
              "ISO 9001: a certifiable QMS on process approach + PDCA + risk-based thinking; certifies consistency, not excellence.",
            ],
            table: {
              caption: "Four generations of quality management.",
              headers: ["Stage", "Focus", "Question asked", "Typical tool"],
              rows: [
                ["Inspection", "Output — finished goods", "Which units are defective?", "Sorting, gauging"],
                ["Quality control", "Process — in production", "Is the process stable?", "Control charts, sampling"],
                ["Quality assurance", "System — prevention", "Are procedures followed?", "Documented QMS, audits"],
                ["TQM", "Whole organisation", "Is everyone improving?", "PDCA, kaizen, circles"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "PDCA — the engine of TQM",
              caption: "Improvement is a loop, not a milestone; every pass raises the standard a step.",
              steps: [
                { label: "Plan", note: "define the problem, set a target, find root causes" },
                { label: "Do", note: "implement the change on a small scale" },
                { label: "Check", note: "measure the result against the target" },
                { label: "Act", note: "standardise the win or discard it — then loop" },
              ],
            },
            callout: {
              type: "exam",
              title: "The opener combo",
              body: "The four-stage evolution table plus a PDCA circle sketch answers most Unit V openers in seven marks. Name the Japanese contribution (kaizen, quality circles) explicitly — papers reward the TQM-versus-inspection contrast.",
            },
            keyTerms: [
              { term: "TQM", definition: "Total quality management: an organisation-wide culture of continuous improvement centred on customer-defined quality." },
              { term: "PDCA cycle", definition: "Plan-do-check-act: the repeating improvement loop that standardises successful changes." },
              { term: "ISO 9001", definition: "The certifiable international standard for a quality management system based on the process approach, PDCA and risk-based thinking." },
            ],
            examQuestions: [
              {
                q: "Define total quality management. Explain its principles and how it differs from inspection-based quality control. Sketch the PDCA cycle.",
                marks: 7,
                outline: [
                  "Define TQM: everyone, everywhere, improving continuously toward customer-defined quality.",
                  "List the principles: customer focus, leadership, involvement, process approach, kaizen, fact-based decisions, supplier partnership.",
                  "Contrast with inspection: detection after the fact versus prevention and improvement built in.",
                  "Draw the PDCA circle and explain each quadrant in one line.",
                  "Mention quality circles and kaizen as the shop-floor organs.",
                  "State the role of ISO 9001 in formalising the system.",
                  "Conclude: TQM is a culture; inspection was a filter.",
                ],
              },
              {
                q: "What is a quality circle?",
                marks: 2,
              },
              {
                q: "What does ISO 9001 certify, and what does it not certify?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "The seven QC tools and Six Sigma",
            body: [
              "The seven quality-control (QC) tools are the vocabulary of every improvement meeting. The check sheet tallies events as they happen; the Pareto chart ranks causes by frequency and exposes the vital few behind most defects; the histogram shows the shape and spread of a measurement; the scatter diagram tests the relationship between two variables; the cause-and-effect (Ishikawa or fishbone) diagram arranges suspected causes under the 6M headings — man, machine, material, method, measurement, environment; stratification and flowcharts split data into layers to localise a problem; and the control chart (Section 5.3) distinguishes signal from noise.",
              "Six Sigma, pioneered at Motorola and GE, is a project-driven, statistical and management-led programme with the goal of 3.4 defects per million opportunities — process capability at the level of Section 5.4. Its roadmap is DMAIC: define the problem and the critical-to-quality characteristic, measure a baseline with trustworthy data (measurement system analysis), analyse to prove the root causes statistically, improve through designed experiments and pilot solutions, and control by locking the gains into standard work and SPC. Roles form a belt system — champions sponsor, black belts lead full-time, green belts lead projects part-time.",
              "Six Sigma differs from TQM in shape, not spirit: TQM invites everyone to improve everything continuously, while Six Sigma concentrates trained belts on a ranked portfolio of projects with quantified financial returns, and demands statistical proof at every gate. The QC tools serve both — a Pareto chart picks the Six Sigma project, a fishbone feeds its analyse phase, control charts hold its control phase. In exams the pairing to rehearse is tool-to-purpose: given a scenario (defect types in a foundry), name the tool (Pareto first, then fishbone on the tallest bar) and justify the choice.",
            ],
            bullets: [
              "Seven tools: check sheet, Pareto chart, histogram, scatter diagram, fishbone diagram, stratification/flowchart, control chart.",
              "Pareto principle: about 80% of defects flow from about 20% of causes — rank first, then attack the tallest bars.",
              "Fishbone: causes under the 6M heads — man, machine, material, method, measurement, environment.",
              "Six Sigma target: 3.4 defects per million opportunities; roadmap DMAIC — define, measure, analyse, improve, control.",
              "Belt hierarchy: champion (sponsor), black belt (full-time leader), green belt (part-time project leader).",
            ],
            table: {
              caption: "The seven QC tools and their jobs.",
              headers: ["Tool", "Shows", "Typical use"],
              rows: [
                ["Check sheet", "Frequency of events as they occur", "Counting defect types per shift"],
                ["Pareto chart", "Causes ranked by impact", "Choosing which defect to attack first"],
                ["Histogram", "Shape, centre and spread of data", "Is the dimension centred between limits?"],
                ["Scatter diagram", "Correlation between two variables", "Does oven temperature drive hardness?"],
                ["Fishbone diagram", "Cause categories feeding one effect", "Root-cause brainstorm in the 6M heads"],
                ["Control chart", "Stability of a process over time", "Signal versus noise (Section 5.3)"],
                ["Stratification / flowchart", "Data split into layers; process steps", "Localising a defect to one shift or station"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "DMAIC — the Six Sigma roadmap",
              caption: "Each gate demands statistical evidence before the project moves on.",
              stages: [
                { label: "Define", note: "problem, customer, CTQ, charter" },
                { label: "Measure", note: "baseline data, measurement system analysis" },
                { label: "Analyse", note: "prove the root causes statistically" },
                { label: "Improve", note: "pilot solutions, designed experiments" },
                { label: "Control", note: "standard work, SPC, handover" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two repeaters",
              body: "Two questions recur: 'explain the seven QC tools with sketches' and 'explain DMAIC'. For the tools, sketch Pareto and fishbone — the two the examiner can test numerically or as a case; for DMAIC, one line per phase plus the 3.4 DPMO target completes the answer.",
            },
            keyTerms: [
              { term: "Pareto analysis", definition: "Ranking defect causes by frequency or cost to focus effort on the vital few that cause most of the loss." },
              { term: "Cause-and-effect diagram", definition: "The Ishikawa fishbone that organises suspected causes of one effect under the 6M headings." },
              { term: "Six Sigma", definition: "A statistical, project-driven quality programme targeting 3.4 defects per million opportunities via the DMAIC roadmap." },
            ],
            examQuestions: [
              {
                q: "Explain the seven basic QC tools with sketches, stating the purpose of each in a quality-improvement programme.",
                marks: 7,
                outline: [
                  "Introduce the set as the standard vocabulary of improvement teams.",
                  "Check sheet: structured tally of events as they occur.",
                  "Pareto chart: sketch bars in descending order; the 80-20 reading.",
                  "Fishbone: sketch the spine and the 6M heads; use after Pareto picks the effect.",
                  "Histogram and scatter diagram: distribution shape; correlation between variables.",
                  "Control chart: stability of the process; stratification/flowchart: localise the problem.",
                  "Close with tool chaining: check sheet feeds Pareto feeds fishbone feeds control chart.",
                ],
              },
              {
                q: "State the Six Sigma quality target in defects per million opportunities.",
                marks: 2,
              },
              {
                q: "Explain the DMAIC phases of a Six Sigma project in one line each.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "SPC and control charts",
            body: [
              "Every process varies. Chance (common) causes are inherent — the small, stable randomness of a healthy process; assignable (special) causes are identifiable intruders: a worn tool, a new operator, a bad batch of material. A process with only chance causes is in statistical control, and its output is predictable; a process with assignable causes is drifting and must be investigated. The control chart is the instrument: samples are taken at intervals, a statistic (mean, range, fraction defective) is plotted in time order between a centre line and control limits set at three standard deviations — UCL and LCL — so that about 99.7% of points from a stable process fall inside.",
              "Charts are chosen by data type. Variable data (measurements like shaft diameter) use the X-bar and R pair: subgroups of about five parts are measured; the X-bar chart tracks the process mean and the R chart its spread. Attribute data use p (fraction defective, varying sample size), np (number defective, constant sample size), c (count of defects per unit, constant area) and u charts (defects per unit, varying area). Beyond single points outside limits, a process is suspect when it shows runs of seven points on one side, trends, or cycles — pattern recognition is part of the technique.",
              "Two disciplines govern use. First, control limits are computed from the process's own data — they are the voice of the process, not the specification limits, which are the voice of the customer; a process can be in control and still make every part out of tolerance (Section 5.4 measures that gap as capability). Second, reaction must be correct: a point outside limits calls for a search for the assignable cause, not a recalibration of the limits, and never blind adjustment after every blip — tampering doubles the variation, as Deming's funnel experiment demonstrates.",
            ],
            bullets: [
              "Chance (common) causes = inherent, stable variation; assignable (special) causes = traceable intruders — the chart detects the second.",
              "Chart anatomy: centre line, UCL and LCL at ±3 sigma; about 99.7% of a stable process's points fall inside.",
              "Variables: X-bar chart for the mean, R chart for the spread, subgroups of about five parts.",
              "Attributes: p (fraction defective), np (number defective), c (defects per unit), u (defects per unit, varying area).",
              "Control limits are the process's voice; specification limits are the customer's voice — never copy one from the other.",
            ],
            table: {
              caption: "Choosing the control chart.",
              headers: ["Chart", "Data", "Sample", "Watch for"],
              rows: [
                ["X-bar and R", "Variable (measurements)", "Subgroups of about 5", "Mean drift (X-bar) and spread growth (R)"],
                ["p", "Attribute — fraction defective", "May vary", "Proportion of bad units rising"],
                ["np", "Attribute — number defective", "Constant", "Count of bad units at fixed n"],
                ["c", "Attribute — defects per unit", "Constant area", "Multiple defects per unit, e.g. paint flaws"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "A point falls outside the control limit",
              caption: "The correct reaction to an out-of-control signal — and the three wrong ones.",
              start: "Sample statistic beyond the 3-sigma limits",
              branches: [
                { label: "Stop and hunt the assignable cause", outcome: "Find it, remove it, note it — the chart has done its job", good: true },
                { label: "Rewrite the limits to include the point", outcome: "Limits widen; the alarm is buried and drift is silently accepted", good: false },
                { label: "Ignore it as bad luck", outcome: "The special cause keeps producing defects downstream", good: false },
                { label: "Adjust the machine after every blip", outcome: "Tampering doubles the variability — Deming's funnel result", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Chart selection is a banker",
              body: "'Which control chart for this data?' is a near-certain 2-3 marker: measurements on a dimension -> X-bar and R; proportion defective -> p; defects per unit -> c. Memorise the data-type key, not the formulae, for the short questions.",
            },
            keyTerms: [
              { term: "Control chart", definition: "A time-ordered plot of a sample statistic between limits at ±3 sigma, separating chance from assignable variation." },
              { term: "Assignable cause", definition: "A special, traceable source of variation — worn tool, new operator, bad material — that the control chart is built to expose." },
              { term: "X-bar and R chart", definition: "The paired variable-data charts: X-bar tracks subgroup means, R tracks subgroup ranges (spread)." },
            ],
            examQuestions: [
              {
                q: "Explain the concepts of chance and assignable causes of variation. Describe the construction of X-bar and R charts and the patterns that signal an out-of-control process.",
                marks: 7,
                outline: [
                  "Define chance (common) causes: inherent, stable, predictable randomness.",
                  "Define assignable (special) causes: traceable intruders requiring removal.",
                  "Describe chart anatomy: centre line, UCL, LCL at ±3 sigma, 99.7% of points inside.",
                  "X-bar chart: subgroup means over time; subgroup size about five.",
                  "R chart: subgroup ranges to monitor spread; both are read together.",
                  "Out-of-control patterns: points beyond limits, runs of seven, trends, cycles.",
                  "State the reaction rule: search for the assignable cause; never rewrite limits or tamper.",
                ],
              },
              {
                q: "Which control chart is used for the fraction defective?",
                marks: 2,
              },
              {
                q: "Why are control limits not taken from specification limits?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Process capability, TPM and OEE",
            body: [
              "A stable process may still be an unfit one. Process capability compares the voice of the process (6 sigma of its natural spread) with the voice of the customer (the tolerance band USL - LSL). Cp = (USL - LSL) / (6 sigma) measures potential spread; Cpk = min(USL - mean, mean - LSL) / (3 sigma) additionally penalises off-centre operation. Values read: below 1.0 not capable; 1.0 to 1.33 barely capable; at or above 1.33 the healthy target; Six Sigma programmes aim at about 2.0. Cp says 'could this process meet the tolerance if centred?'; Cpk says 'does it, as it actually runs?'",
              "The order of operations matters: establish statistical control first (Section 5.3), then compute capability — the capability of an unstable process is a meaningless average of states. With mean 10.05, sigma 0.05 and limits 9.80 to 10.20, Cp = 0.40/0.30, about 1.33, while Cpk = min(0.15, 0.25)/0.15 = 1.0: the spread is adequate but the drift toward the upper limit wastes a third of the margin, and re-centring recovers it free of cost. That re-centring-before-investing logic is the practical heart of capability studies and of every Six Sigma improve phase.",
              "Total productive maintenance (TPM) applies the same ownership idea to equipment: operators do daily care — clean, inspect, lubricate — while maintenance does restoration and prevention, and the joint goal is zero breakdowns and zero defects. Its headline metric is overall equipment effectiveness, OEE = availability x performance x quality, multiplying the losses of downtime, slow running and defects against planned time. A shift of 480 minutes losing 60 to breakdown, producing 700 units at a 0.5-minute ideal cycle of which 665 are good, scores 87.5% availability, 83.3% performance and 95% quality — OEE about 69%, typical for many plants, against a world-class benchmark of about 85%.",
            ],
            bullets: [
              "Cp = (USL - LSL) / (6 sigma) — potential capability if the process were centred; Cpk = min(USL - mean, mean - LSL) / (3 sigma) — actual capability.",
              "Reading: below 1.0 not capable; 1.0-1.33 marginal; at or above 1.33 the capable target; Six Sigma aims near 2.0.",
              "Sequence: stabilise with SPC first, then measure capability — an unstable process has no single capability.",
              "Worked pair: mean 10.05, sigma 0.05, limits 9.80-10.20 gives Cp about 1.33 but Cpk 1.0; recentring is free capability.",
              "TPM: operator-owned care plus planned maintenance; OEE = availability x performance x quality, world class about 85%.",
            ],
            codeExample: {
              language: "python",
              caption: "Cp and Cpk from process data, and OEE from one shift's numbers.",
              code: `usl, lsl, mean, sigma = 10.20, 9.80, 10.05, 0.05

cp  = (usl - lsl) / (6 * sigma)
cpk = min(usl - mean, mean - lsl) / (3 * sigma)
print(f"Cp  = {cp:.2f}")                  # 1.33
print(f"Cpk = {cpk:.2f}")                 # 1.00

# OEE for one shift
planned, downtime = 480, 60               # minutes
run_time = planned - downtime
ideal_ct, total_units = 0.5, 700          # min/unit, units started
good = 665

availability = run_time / planned
performance  = (ideal_ct * total_units) / run_time
quality      = good / total_units
oee = availability * performance * quality

print(f"Availability = {availability*100:.1f}%")   # 87.5%
print(f"Performance  = {performance*100:.1f}%")    # 83.3%
print(f"Quality      = {quality*100:.1f}%")        # 95.0%
print(f"OEE          = {oee*100:.1f}%")            # 69.3%`,
            },
            diagram: {
              kind: "pipeline",
              title: "OEE — three multipliers, one number",
              caption: "Every loss category strikes a different multiplier; the product is what the customer receives.",
              stages: [
                { label: "Planned production time" },
                { label: "Availability", note: "= (planned - downtime) / planned" },
                { label: "Performance", note: "= ideal cycle time x output / run time" },
                { label: "Quality", note: "= good units / total units" },
                { label: "OEE = A x P x Q", note: "world class is about 85%" },
              ],
            },
            callout: {
              type: "exam",
              title: "Cp vs Cpk",
              body: "Cp versus Cpk is the single most repeated 2-3 marker of Unit V: Cp measures spread only, Cpk penalises off-centre too, and Cpk is always less than or equal to Cp. Add the 1.33 threshold and the answer is complete.",
            },
            keyTerms: [
              { term: "Process capability (Cp)", definition: "The ratio of the tolerance band to the process's 6-sigma natural spread: (USL - LSL) / 6 sigma." },
              { term: "Cpk", definition: "The capability index that also penalises off-centre operation: min(USL - mean, mean - LSL) / 3 sigma." },
              { term: "OEE", definition: "Overall equipment effectiveness: availability x performance x quality, the share of planned time producing good output." },
            ],
            examQuestions: [
              {
                q: "Define process capability. Derive Cp and Cpk and evaluate both for mean 10.05, sigma 0.05 and limits 9.80-10.20; interpret the gap between the two indices.",
                marks: 7,
                outline: [
                  "Define capability: comparing the process spread (6 sigma) with the tolerance band (USL - LSL).",
                  "Derive Cp = (USL - LSL) / 6 sigma; substitute: 0.40 / 0.30 = 1.33.",
                  "Derive Cpk = min(USL - mean, mean - LSL) / 3 sigma; substitute: 0.15 / 0.15 = 1.0.",
                  "Interpret: the spread is adequate but the mean drifts toward the USL.",
                  "State that Cpk is always less than or equal to Cp, with equality only when centred.",
                  "Give the thresholds: below 1.0 not capable; 1.33 the healthy target.",
                  "Recommend re-centring as the zero-cost recovery before any capital spend.",
                ],
              },
              {
                q: "Define OEE and write its formula with its three components.",
                marks: 2,
              },
              {
                q: "Why is Cpk always less than or equal to Cp? What does a Cpk below 1.0 demand from management?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Project management: CPM and PERT",
            body: [
              "Projects — a plant shutdown, a new-product launch — are one-off, so their planning cannot ride on repeating schedules; they need networks. Both CPM and PERT draw the project as an activity network: activities linked by predecessor relations. CPM, born in construction, uses single deterministic time estimates and asks about the time-cost trade-off: which activities, crashed at extra cost, shorten the project? PERT, born in the Polaris missile programme, is event-oriented and probabilistic: each activity gets optimistic, most likely and pessimistic times, from which the expected time te = (to + 4tm + tp)/6 and the variance ((tp - to)/6)^2 are computed.",
              "The analysis is the forward-backward pass. The forward pass computes each activity's earliest start and finish (ES = the maximum of predecessors' EF); the largest EF is the project duration. The backward pass computes latest start and finish (LF = the minimum of successors' LS); the slack or float of an activity is LS - ES. The chain of activities with zero slack is the critical path — it fixes the project duration, because any delay on it delays the whole project. Non-critical activities carry float and can lend resources to the critical path — the basis of resource levelling and of the crashing decision, which spends money only on critical activities.",
              "PERT adds probability statements: the project duration is the sum of expected times along the critical path, and its variance is the sum of the path variances, so the probability of finishing by a target date is read from the normal curve as z = (target - te)/sigma. Two case-study threads to rehearse: a plant maintenance shutdown (CPM with crashing, where every idle hour is lost production) and a new-product launch (PERT, where times are genuinely uncertain and a 95%-confidence date is quoted to management). The code example below runs the full pass on a four-activity network and prints the critical path.",
            ],
            bullets: [
              "CPM: deterministic single times, activity-oriented, built for time-cost crashing. PERT: three time estimates, event and probability oriented.",
              "te = (to + 4tm + tp)/6; variance = ((tp - to)/6)^2 per activity; path variance = sum along the critical path.",
              "Forward pass: ES/EF from predecessors; backward pass: LS/LF from successors; slack = LS - ES.",
              "Critical path = the zero-slack chain; it alone decides project duration; float activities can lend resources to it.",
              "Crashing spends money only on critical activities; PERT answers 'probability of finishing by date D' via z = (D - te)/sigma.",
            ],
            codeExample: {
              language: "python",
              caption: "Forward and backward pass on a small CPM network, with slack and critical path.",
              code: `# activity: (duration, [predecessors])
acts = {
    "A": (3, []),
    "B": (5, ["A"]),
    "C": (2, ["A"]),
    "D": (4, ["B", "C"]),
}

# forward pass: earliest start / finish
es, ef = {}, {}
for a in sorted(acts, key=lambda x: len(acts[x][1])):
    d, preds = acts[a]
    es[a] = max((ef[p] for p in preds), default=0)
    ef[a] = es[a] + d
project = max(ef.values())
print(f"Project duration = {project} weeks")     # 12

# backward pass: latest start / finish
ls, lf = {}, {}
for a in reversed(list(es)):
    succs = [s for s in acts if a in acts[s][1]]
    lf[a] = min((ls[s] for s in succs), default=project)
    ls[a] = lf[a] - acts[a][0]

for a in acts:
    slack = ls[a] - es[a]
    tag = "CRITICAL" if slack == 0 else f"slack {slack}"
    print(f"{a}: ES {es[a]:>2}  LS {ls[a]:>2}  ({tag})")`,
            },
            diagram: {
              kind: "flow",
              title: "CPM, step by step",
              caption: "The network is drawn once; the two passes and the slack decide everything after that.",
              steps: [
                { label: "List activities, durations, predecessors" },
                { label: "Draw the network" },
                { label: "Forward pass", note: "earliest start and finish" },
                { label: "Backward pass", note: "latest start and finish" },
                { label: "Compute slack", note: "zero-slack chain = critical path" },
                { label: "Crash or level", note: "spend only on the critical path" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the network first",
              body: "The PERT numerical is standard: three times per activity, compute te and variance, then the probability of finishing by a date using z = (D - te)/sigma with the normal table. Draw the network first — a correct network earns marks even if the arithmetic slips.",
            },
            keyTerms: [
              { term: "Critical path", definition: "The chain of zero-slack activities that determines the minimum project duration." },
              { term: "PERT", definition: "Programme evaluation and review technique: probabilistic network scheduling using three time estimates per activity." },
              { term: "Slack (float)", definition: "The spare time of an activity, LS - ES; delay within slack does not delay the project." },
            ],
            examQuestions: [
              {
                q: "Explain CPM and PERT. Describe the forward and backward passes for a small project, determine the critical path, and state the differences between CPM and PERT.",
                marks: 7,
                outline: [
                  "Introduce network planning for one-off projects; activities, events, predecessors.",
                  "Forward pass: ES = max of predecessors' EF; EF = ES + duration; project duration = max EF.",
                  "Backward pass: LF = min of successors' LS; LS = LF - duration.",
                  "Slack = LS - ES; the zero-slack chain is the critical path.",
                  "Work the four-activity example: A-B-D critical, C carrying slack 3, duration 12 weeks.",
                  "Differences: CPM deterministic, activity-oriented, crashing; PERT probabilistic, three times, variance.",
                  "Give the PERT formulae: te = (to + 4tm + tp)/6 and variance = ((tp - to)/6)^2.",
                ],
              },
              {
                q: "Write the formulae for the expected time and variance of a PERT activity.",
                marks: 2,
              },
              {
                q: "Why can crashing shorten a project only when applied to critical activities?",
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
        "RGPV ME-802(D) papers spread marks evenly across the five units, but they concentrate heavily on numericals: a forecasting calculation, an EOQ or MRP record, a Johnson's-rule sequence and a CPM/PERT network appear in almost every sitting, alongside definition-and-diagram questions from the quality and lean sections. Allocate revision time in the same ratio, and keep one full numerical drill slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Forecasting numericals: moving average, exponential smoothing", weight: "8-12 marks", note: "The 3-month MA and alpha = 0.2 pattern; build the period-demand-forecast table every time." },
        { topic: "Johnson's rule for two machines", weight: "7-10 marks", note: "Head-tail mechanic plus the makespan simulation; five jobs, two machines is the standard set." },
        { topic: "Sequencing rules: FCFS, SPT, EDD comparison", weight: "7-10 marks", note: "Flow-time and tardiness tables for two rules; memorise which rule buys which measure." },
        { topic: "EOQ, ROP and safety stock", weight: "8-12 marks", note: "Derivation, numerical and the equal-costs property at the optimum; ROP = lead-time demand + safety stock." },
        { topic: "MRP structure, record and lot sizing", weight: "7-10 marks", note: "Input-output block diagram plus the LFL record table; the release row carries the marks." },
        { topic: "Aggregate planning: chase and level", weight: "7-10 marks", note: "Two sketches with the cost levers table; mixed-strategy conclusion." },
        { topic: "SPC chart selection and interpretation", weight: "6-10 marks", note: "X-bar/R, p and c selection key; chance vs assignable causes; the tampering warning." },
        { topic: "Cp, Cpk, TPM and OEE", weight: "6-9 marks", note: "Cp vs Cpk distinction with the 1.33 threshold; OEE = A x P x Q with the 85% benchmark." },
        { topic: "CPM/PERT network and probability", weight: "8-12 marks", note: "Forward-backward pass, critical path, te and variance, z-score probability." },
        { topic: "TQM, ISO 9001, 7 QC tools, lean and 5S", weight: "6-10 marks", note: "Definition-and-diagram answers: PDCA circle, DMAIC pipeline, 7 wastes list, Pareto curve, ABC pyramid." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the last week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - PPC fundamentals", tasks: ["Objectives and the R-S-D-F function chain with documents", "Routing and route-sheet drawing; schedule kinds table", "Job-batch-mass comparison table and the volume-variety matrix"] },
        { week: "Week 2", focus: "Unit II - forecasting and aggregate planning", tasks: ["Delphi pipeline and qualitative methods table", "MA and ES numericals: 6 solves across alpha 0.1-0.4", "MAD/MSE/MAPE scoring; chase vs level sketches and cost table"] },
        { week: "Week 3", focus: "Unit III - MRP, ERP, inventory", tasks: ["BOM explosion block diagram; LFL record numericals", "MRP-to-ERP evolution speech and module layers diagram", "EOQ derivation and 4 solves; ABC/VED and Kanban definitions"] },
        { week: "Week 4", focus: "Unit IV - scheduling and shop floor", tasks: ["Gantt three-form sketches; FCFS/SPT/EDD comparison tables", "Johnson's rule: 5 solves with makespan simulation", "Flow vs job shop, dispatching, 5S table and VSM steps"] },
        { week: "Week 5", focus: "Unit V - quality and projects", tasks: ["TQM evolution table, PDCA circle, 7 QC tools sketches", "Chart selection key; Cp/Cpk and OEE numericals", "CPM forward-backward pass drill; PERT te, variance, z-probability"] },
        { week: "Week 6", focus: "Full revision and papers", tasks: ["Two full past papers under time; redo every numerical cold", "Redraw the ten money diagrams from memory", "Case-study thread: shutdown CPM, launch PERT, JIT risk, ERP failure"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last day before the exam",
      bullets: [
        "Rerun four numericals cold: EOQ with D = 12000, S = 90, H = 24; Johnson's B-D-C-E-A sequence; the LFL MRP record; a 4-job SPT vs FCFS comparison.",
        "Recite the formulae on one card: EOQ, ROP, te and variance, Cp and Cpk, OEE, tracking signal, exponential smoothing.",
        "Redraw the money sketches from memory: PPC loop, MRP block diagram, chase and level graphs, PDCA circle, DMAIC pipeline, Pareto curve, ABC pyramid, CPM network.",
        "Memorise the pairings: SPT buys flow time, EDD buys lateness, p-chart for fraction defective, c-chart for defects per unit.",
        "Read the comparison tables aloud: job-batch-mass, MA vs ES, LFL-FOQ-POQ, centralised vs decentralised, CPM vs PERT.",
        "Skim every callout box once, then sleep - the paper rewards rested arithmetic, not midnight cramming.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Any numerical: write the formula first, substitute with units, and box the result with a one-line interpretation.",
        "Definition questions: one-sentence definition, then bullets, then one example - never two paragraphs of prose.",
        "Comparison questions: answer as a table with the same rows for both sides, never as two separate essays.",
        "Draw the diagram even when the question does not ask for it - examiners mark the figure before the prose.",
        "Time-box: 2-mark shorts in 4 minutes, 7-mark longs in 15, and hold the last 10 minutes for checking arithmetic and labelling sketches.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Calling routing a time decision - routing is the path, scheduling is the clock; swapping them voids the point.",
        "Forgetting the (1 - alpha) term or seeding exponential smoothing with zero - the whole recursion drifts.",
        "Computing MSE with unsquared errors - that is just MAD wearing the wrong name.",
        "Missing the lead-time offset in the MRP record - the receipt row is right but the release row, the one that carries marks, is wrong.",
        "Quoting EOQ = 300 from D = 12000, S = 90, H = 24 but forgetting to check: at the optimum the two cost components must be equal.",
        "Confusing control limits with specification limits in SPC - one is the process's voice, the other the customer's; and never rewrite limits to bury an out-of-control point.",
      ],
    },
  ],
};
