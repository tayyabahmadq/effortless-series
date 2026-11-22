/**
 * IT-702(C) - RGPV Information Technology, VII Semester.
 * Departmental Elective: Simulation & Modeling.
 * Unit and section structure follows the official RGPV syllabus for
 * IT-702(C). No question-paper archive was traced for this elective,
 * so all questions are examiner-style without session citations.
 */

import type { AcademicSubject } from "./types";

export const it702c: AcademicSubject = {
  id: "it-702-c",
  code: "IT-702(C)",
  title: "Simulation & Modeling",
  semester: "VII Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: how systems become models, how random numbers fuel them, how continuous equations are integrated step by step, how queues leap from event to event, and how verification, validation, GPSS and AI keep the results trustworthy.",
  description:
    "Five units walk from system concepts and the taxonomy of models, through stochastic variables, pseudo-random generators and their tests, into continuous simulation by numerical integration (pure pursuit, chemical reaction, autopilot, reservoir), discrete-event queue simulation and its networks, ending with verification and validation, experiment design, the GPSS block language, and the roles of databases and AI.",
  accentColor: "#6366f1",
  emoji: "SM",
  unitCount: 5,
  totalSections: 34,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Modeling & Simulation Concepts",
      summary:
        "Unit I frames the whole subject: what a system and its environment are, what a model is and how models are classified, the modelling-and-simulation pipeline, the continuous-versus-discrete divide, how numerical integration and analog or digital hardware execute continuous models, how Monte-Carlo differs from dynamic simulation, and the honest list of when simulation is the right tool - and when it is not.",
      chapter: {
        number: "01",
        title: "Systems, Models and the Simulation Idea",
        intro:
          "Unit I covers system concepts, the definition and types of models, the modelling-and-simulation pipeline, continuous versus discrete systems, numerical integration versus continuous simulation, analog versus digital simulation, simulation versus Monte-Carlo simulation, the nature of computer modelling and simulation, and when to use simulation together with its limitations.",
        inOneBreath:
          "A system is entities interacting toward a logical end; a model is a purposeful stand-in for it; simulation imitates the model over time; continuous models are integrated in fixed steps, discrete models jump event to event; Monte-Carlo answers static questions by sampling while dynamic simulation tracks a clock, and simulation earns its cost only where analytics fail.",
        sections: [
          {
            number: "1.1",
            title: "System concepts - entities, attributes, activities, events, state",
            body: [
              "A system is a collection of entities - people, machines, messages, parts - that act and interact together toward the accomplishment of some logical end: a bank serving customers, a factory producing parts, a computer processing jobs. Every system is described with the same five-word vocabulary. Entities are the objects of interest; attributes are their properties (a customer's account balance, a machine's speed); activities are time periods of specified length (a service lasting five minutes); events are instantaneous occurrences that may change the state (an arrival, a departure); and state variables are the minimal set of numbers that describe the system completely at any instant - number of busy tellers, number waiting, time of the next arrival.",
              "The system environment is everything outside the boundary, and the boundary is drawn by the purpose of the study, not by physics. For a study of teller staffing, the bank system includes tellers and customers and treats the arrival stream as exogenous input from the environment; for a study of loan policy, the same building might place walk-in traffic outside the boundary. Activities occurring inside the boundary are endogenous; pressures applied from outside are exogenous. One real-world object therefore yields several different systems, and a good report states the boundary in one sentence before anything else.",
              "Examiners almost always open this subject with 'explain system concepts with an example'. The safe pattern is to name the five terms and then instantiate all five on one system in the same order. The banking example is the conventional choice: tellers and customers as entities, balance and priority as attributes, deposit-making as the activity, arrival and service-completion as events, and the triple (busy tellers, waiting customers, next-arrival time) as state. Do not mix examples mid-answer - one system, all five terms, in that order.",
            ],
            keyTerms: [
              { term: "System", definition: "A collection of entities that act and interact together toward the accomplishment of some logical end." },
              { term: "Entity / attribute", definition: "An object of interest in the system / a property of that object (customer, account balance)." },
              { term: "Event", definition: "An instantaneous occurrence that may change the state of the system - arrival, service completion." },
              { term: "State variables", definition: "The minimal set of variables needed to describe the system at any instant." },
              { term: "Exogenous / endogenous", definition: "Activities and pressures originating in the environment / inside the system boundary." },
            ],
            diagram: {
              kind: "layers",
              title: "A system nested inside its environment",
              caption: "The boundary is a line drawn by the study's purpose - state lives inside it, exogenous inputs cross it.",
              layers: [
                { label: "Environment", note: "exogenous inputs - arrival stream, demand, failures" },
                { label: "System boundary", note: "drawn by the purpose of the study" },
                { label: "Entities, attributes, activities", note: "customers · tellers · service times" },
                { label: "State variables", note: "busy tellers · queue length · time of next event" },
              ],
            },
            bullets: [
              "System = entities + attributes + activities + events + state, acting toward a logical end.",
              "The boundary separates system from environment - and it is chosen, not discovered.",
              "Events are instantaneous; activities occupy time; state changes only at events.",
              "Banking example: entities = tellers/customers; events = arrival, completion; state = busy tellers, queue, next arrival.",
              "Exogenous activities come from the environment and are modelled as inputs.",
            ],
            callout: {
              type: "tip",
              title: "The boundary is a decision, not a fact",
              body: "Where you draw the boundary decides what is exogenous. The same bank can exclude teller tea-breaks in one study and make them central in another. Stating the boundary explicitly is what separates a modelling answer from a description - and examiners look for exactly that sentence.",
            },
            table: {
              caption: "System terminology instantiated on the banking system.",
              headers: ["Term", "Meaning", "Banking example"],
              rows: [
                ["System", "entities interacting toward a logical end", "the bank branch under study"],
                ["Entity", "object of interest", "customers, tellers"],
                ["Attribute", "property of an entity", "account balance, teller speed"],
                ["Activity", "time period of specified length", "making a deposit (say 5 min)"],
                ["Event", "instantaneous state-changer", "customer arrival, service completion"],
                ["State variables", "describe system at an instant", "busy tellers, queue length, next-arrival time"],
              ],
            },
            examQuestions: [
              {
                q: "Define a system and explain the terms entity, attribute, activity, event and state variable with reference to any one system of your choice.",
                marks: 7,
                outline: [
                  "System: entities acting together toward a logical end",
                  "Entity: object of interest - customers and tellers in a bank",
                  "Attribute: property of an entity - account balance, teller speed",
                  "Activity: time period of specified length - a five-minute deposit",
                  "Event: instantaneous occurrence that may change state - arrival, completion",
                  "State variables: busy tellers, number waiting, time of next arrival",
                  "One consistent example carried through all five terms",
                ],
              },
              {
                q: "What is the system environment and the system boundary? Why does the choice of boundary depend on the purpose of the study? Illustrate with an example.",
                marks: 7,
                outline: [
                  "Environment: everything outside the system boundary",
                  "Boundary: the line separating endogenous from exogenous behaviour",
                  "It is set by the study's purpose, not by the physical object",
                  "Staffing study: arrival stream is exogenous input",
                  "Policy study: the same arrivals might lie inside the boundary",
                  "One system, many boundaries - state the chosen one explicitly",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "What is a model - and the types of models",
            body: [
              "A model is a representation of a system built for the purpose of studying that system - never the system itself, always a simplification chosen to answer specific questions cheaply, safely and fast. Models trade three virtues against one another: generality, simplicity and accuracy. A model that is too general answers nothing crisply; one that is too simple misleads; the art is picking the sweet spot for the question at hand. This is why 'what is a model' is answered with a purpose clause, not a picture: a wind-tunnel shape is a model of a wing only because drag questions are being asked.",
              "The first split is physical versus abstract. Physical (iconic) models are scale replicas - a miniature dam in a hydraulics lab, a wind-tunnel wing. Abstract (mathematical) models use symbols, logic and equations, and are the entire subject of this course. Mathematical models then divide along three dichotomies. Static versus dynamic: does time play a role - a break-even calculation is static, a queue evolving through a day is dynamic. Deterministic versus stochastic: are any quantities random - EOQ formulas are deterministic; arrival streams are stochastic. Discrete versus continuous: does state change at separated instants or smoothly through time - a job shop is discrete, a chemical reactor is continuous.",
              "The classification is not decoration; each label predicts the mathematics needed. Static stochastic problems are sampled - that is Monte-Carlo (section 1.6). Dynamic discrete problems need event clocks - that is Unit IV. Dynamic continuous problems need differential equations and numerical integration - that is Unit III. When the exam asks 'classify simulation models with examples', the expected answer is exactly this lattice: physical/abstract first, then static/dynamic, deterministic/stochastic, discrete/continuous - one crisp example per cell, taken from the matrix below.",
            ],
            keyTerms: [
              { term: "Model", definition: "A purposeful representation of a system, built to answer questions about it cheaply and safely." },
              { term: "Physical (iconic) model", definition: "A scale replica of the system - wind-tunnel wing, miniature dam." },
              { term: "Static / dynamic", definition: "Time plays no role / the model evolves through simulated time." },
              { term: "Deterministic / stochastic", definition: "No random quantities / random inputs described by distributions." },
              { term: "Discrete / continuous", definition: "State changes at separated instants / state changes smoothly with time." },
            ],
            diagram: {
              kind: "matrix",
              title: "The model taxonomy at a glance",
              caption: "Every mathematical model lands in one quadrant; simulation problems inherit the mathematics of their cell.",
              axes: { x: "Time's role (static → dynamic)", y: "Randomness (deterministic → stochastic)" },
              quadrants: [
                { label: "Static · stochastic", note: "Monte-Carlo sampling - estimate of π, dice games" },
                { label: "Dynamic · stochastic", note: "discrete-event simulation - bank queue, job shop" },
                { label: "Static · deterministic", note: "formulas only - EOQ, break-even" },
                { label: "Dynamic · deterministic", note: "continuous simulation - reactor with fixed feed" },
              ],
            },
            bullets: [
              "A model is a purposeful stand-in: cheap, safe, fast - never the system itself.",
              "Physical vs abstract is the first split; this course studies abstract (mathematical) models.",
              "Static/dynamic asks whether time plays a role in the model.",
              "Deterministic/stochastic asks whether any input is random.",
              "Discrete/continuous asks whether state jumps at instants or flows smoothly.",
              "Each label selects the tool: Monte-Carlo, event clock, or numerical integration.",
            ],
            callout: {
              type: "exam",
              title: "Answering 'types of models'",
              body: "Write the physical/abstract split first, then the three dichotomies in order - static/dynamic, deterministic/stochastic, discrete/continuous - with one example each. Examiners award marks per dichotomy, and the EOQ/queue/reactor/Monte-Carlo examples are the conventional ones they expect to see.",
            },
            codeExample: {
              language: "python",
              caption: "growth.py - a model is a cheap stand-in",
              code: `# compound growth simulated instead of waiting ten real years
principal, rate, years = 10000.0, 0.08, 10
balance = principal
for t in range(years):              # time advances in steps
    balance = balance * (1 + rate)  # the model's single rule
print(balance)                      # 21589.25 - an answer without a decade`,
            },
            examQuestions: [
              {
                q: "What is a model? Distinguish physical and mathematical models, and explain the static/dynamic, deterministic/stochastic and discrete/continuous classifications with one example of each.",
                marks: 7,
                outline: [
                  "Model: a purposeful representation built to study a system",
                  "Physical model: scale replica - wind-tunnel wing, miniature dam",
                  "Mathematical model: symbols, logic, equations - the course's subject",
                  "Static vs dynamic: time plays no role / evolves - EOQ vs a queue",
                  "Deterministic vs stochastic: no randomness / random inputs - EOQ vs arrivals",
                  "Discrete vs continuous: state jumps / flows - job shop vs reactor",
                  "The classification selects the simulation technique needed",
                ],
              },
              {
                q: "Why does a model never reproduce the real system exactly, and how should a modeller choose the level of simplification?",
                marks: 7,
                outline: [
                  "A model answers specific questions, not all questions",
                  "Generality, simplicity and accuracy trade against one another",
                  "Too general: no crisp answers; too simple: misleading answers",
                  "The question dictates the sweet spot - start from the decision to be made",
                  "Extra realism costs build time and validation effort with no marks",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Modelling and simulation - the study pipeline",
            body: [
              "Simulation is the imitation of the operation of a real-world process or system over time - but a simulation project is more than writing code. The standard pipeline runs: problem formulation → model building → data collection → model coding → verification → validation → experimentation → analysis and documentation. Each stage answers one question: what is the problem, what matters in the system, what are the numbers, is the code right, is the model right, what alternatives should be tried, what do the results mean. The pipeline is a loop - a failed validation sends you back to model building, not to blaming the computer.",
              "The stages are not equally heavy. Data collection is usually the most expensive and the most skipped; distributions guessed from thin air poison every later number. Verification and validation are the stages most often assumed rather than performed - Unit V is entirely about them. Experimentation is where the 'what-if' power lives: change the number of tellers, the buffer size, the dispatch policy, and let the same model report each future before it is bought in the real world.",
              "This section is a guaranteed long-answer. Examiners ask 'explain the steps of a simulation study' as a 14-mark question, and the expected answer names the stages in order, attaches one sentence and one typical mistake to each, and closes with the loop-back: results generate new questions, new questions rebuild the model. The nature of computer modelling and simulation is captured in that pipeline - a machine-speed laboratory where policies are tested on paper first.",
            ],
            keyTerms: [
              { term: "Simulation study", definition: "The full pipeline: formulation → model → data → code → verification → validation → experimentation → analysis." },
              { term: "Problem formulation", definition: "Stating the questions the model must answer and the measures that will decide them." },
              { term: "Experimental frame", definition: "The settings under which the model is run - inputs, initial conditions, stopping rule, metrics." },
              { term: "What-if analysis", definition: "Running the same model under alternative policies to compare futures before committing resources." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From real system to decisions",
              caption: "Verification and validation sit inside the pipeline - a model that skips them is an opinion generator.",
              stages: [
                { label: "Real system", note: "or a proposed design that does not exist yet" },
                { label: "Conceptual model", note: "entities, events, assumptions - written down" },
                { label: "Coded model", note: "the program that imitates the logic" },
                { label: "Verify & validate", note: "code right? model right?" },
                { label: "Experimentation", note: "replications · alternative policies" },
                { label: "Decision", note: "results feed back as new questions" },
              ],
            },
            bullets: [
              "Pipeline: formulation → modelling → data → coding → verification → validation → experimentation → analysis.",
              "Data collection is the costliest stage and the most commonly shortchanged.",
              "Verification asks 'is the code right'; validation asks 'is the model right' - Unit V expands both.",
              "Experimentation is the what-if engine: same model, alternative policies, compared futures.",
              "The pipeline is a loop - validation failures and new questions both send work backwards.",
            ],
            callout: {
              type: "exam",
              title: "The 14-mark pipeline answer",
              body: "Name all stages in order, attach one purpose sentence and one typical mistake to each, then close with the loop-back into problem formulation. The order itself carries marks - writing validation before verification signals confusion, since a wrong-code model cannot be meaningfully validated.",
            },
            table: {
              caption: "The stages of a simulation study and the mistake each invites.",
              headers: ["Stage", "Question it answers", "Typical mistake"],
              rows: [
                ["Problem formulation", "what exactly must be decided?", "vague objectives, no metrics"],
                ["Model building", "what matters in the system?", "modelling everything 'just in case'"],
                ["Data collection", "what are the real numbers?", "invented distributions"],
                ["Model coding", "can the machine imitate it?", "code first, think later"],
                ["Verification", "does the code do what was designed?", "assuming compilation = correctness"],
                ["Validation", "does it match the real system?", "never comparing with real data"],
                ["Experimentation", "which alternative wins?", "too few replications"],
                ["Analysis & documentation", "what should management do?", "reporting point estimates without intervals"],
              ],
            },
            examQuestions: [
              {
                q: "Explain, in order, the steps involved in a simulation study, stating the purpose of each step and one error commonly made at that step.",
                marks: 14,
                outline: [
                  "Problem formulation: objectives and metrics; error = vague goals",
                  "Model building: entities, events, assumptions; error = over-modelling",
                  "Data collection: distributions and parameters; error = invented data",
                  "Model coding: translation into a program; error = coding before design",
                  "Verification: code matches the design - traces, degenerate tests",
                  "Validation: model matches reality - comparison with system data",
                  "Experimentation and analysis: replications, alternatives, intervals - then the loop-back into new questions",
                ],
              },
              {
                q: "'A simulation model is a laboratory in which policies are tested at machine speed.' Justify this statement with examples of what-if questions a bank could ask of its queue model.",
                marks: 7,
                outline: [
                  "Simulation re-runs history and futures cheaply and safely",
                  "What-if 1: one more teller between 2 and 4 pm - effect on waiting",
                  "What-if 2: single queue vs queue-per-teller - compare mean waits",
                  "What-if 3: priority for senior citizens - cost to average wait",
                  "Risky or expensive policies become reversible experiments on paper",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Continuous versus discrete system simulation",
            body: [
              "A discrete system is one whose state variables change instantaneously at separated points in time. A bank's queue length is 3 for nine minutes, then jumps to 4 the instant a customer arrives - nothing happens in between. A continuous system is one whose state variables change continuously with time: the water level behind a dam falls every instant outflow runs, an aircraft's altitude moves smoothly, a reactant's concentration declines without pauses. The two systems demand different clocks: the discrete clock leaps from event to event; the continuous clock ticks in small fixed steps while equations are integrated.",
              "The classification is a modelling choice, not a fact about reality - and that is the non-obvious exam point. Orders reaching a warehouse can be modelled as discrete arrivals when the question is queueing and staffing, or as a continuous flow when the question is inventory level over a season. A highway can be discrete (cars as entities) or continuous (traffic as density). The rule: choose the view that makes the study's questions cheap to answer, and say so in one sentence when asked to 'distinguish continuous and discrete simulation'.",
              "Concretely, the machinery differs as follows. Discrete simulation keeps a future event list, advances the clock to the next scheduled event, executes it, updates state and statistics, and repeats - efficient because idle time is skipped entirely (Unit IV builds this). Continuous simulation evaluates the differential equations dx/dt = f(x, t) and advances the state by a small step h using numerical integration, repeating thousands of times even when nothing dramatic happens (Unit III builds this). Hybrid systems exist - a steel mill has continuous furnace temperatures and discrete crane moves - and are handled by combining both clocks.",
            ],
            keyTerms: [
              { term: "Discrete system", definition: "State changes instantaneously at separated points in time - queue length, job count." },
              { term: "Continuous system", definition: "State changes smoothly with time - dam level, concentration, altitude." },
              { term: "Next-event clock", definition: "The discrete-simulation clock that leaps directly to the time of the next event." },
              { term: "Fixed-step clock", definition: "The continuous-simulation clock that ticks by step h while equations are integrated." },
              { term: "Hybrid system", definition: "A system needing both views - discrete events driving continuous dynamics." },
            ],
            diagram: {
              kind: "compare",
              title: "Continuous vs discrete simulation",
              caption: "Same world, different clocks: one integrates every tick, the other leaps between events.",
              left: {
                heading: "Continuous system",
                items: [
                  "state changes smoothly at every instant",
                  "model: differential equations dx/dt = f(x, t)",
                  "clock: fixed steps h, integrate each step",
                  "examples: dam level, aircraft, chemical reactor",
                ],
              },
              right: {
                heading: "Discrete system",
                items: [
                  "state jumps at separated instants only",
                  "model: entities, events, event list",
                  "clock: leaps to the next event time",
                  "examples: bank queue, job shop, network packets",
                ],
              },
            },
            bullets: [
              "Discrete: state changes only at events; clock leaps between event times.",
              "Continuous: state changes at every instant; clock ticks in steps of h.",
              "The split is a modelling choice - orders as discrete arrivals or as a continuous flow.",
              "Discrete simulation skips idle time entirely; continuous integration never skips.",
              "Hybrid systems (steel mill, traffic) combine an event clock with integrated dynamics.",
            ],
            callout: {
              type: "warning",
              title: "It is a choice, not a fact",
              body: "Examiners award the discriminating mark for one sentence: whether a system is modelled as discrete or continuous depends on the purpose of the study, not on the system alone. Saying 'queues are discrete, fluids are continuous' without the choice sentence caps your answer at the definition marks.",
            },
            codeExample: {
              language: "python",
              caption: "clocks.py - the two time-advance mechanisms",
              code: `def continuous_clock(h=0.1, T=1.0):
    t, x = 0.0, 100.0
    while t < T:
        x += h * (-0.5 * x)      # integrate dx/dt = -0.5x every tick
        t += h                   # clock ticks h by h - never skips
    return t, x

def discrete_clock(events):
    clock, log = 0.0, []
    for when, what in sorted(events):
        clock = when             # leap: all idle time is skipped
        log.append((clock, what))
    return log

print(discrete_clock([(0.0, "C1 arrives"), (2.0, "C2 arrives"),
                      (3.0, "C1 departs")]))`,
            },
            examQuestions: [
              {
                q: "Distinguish continuous and discrete system simulation with two examples of each. Explain how the time-advance mechanism differs in the two cases.",
                marks: 7,
                outline: [
                  "Discrete: state changes at separated instants - bank queue, job shop",
                  "Continuous: state changes smoothly - dam level, reactor concentration",
                  "Discrete clock: next-event advance, leaps between events",
                  "Continuous clock: fixed step h, numerical integration at each tick",
                  "Efficiency contrast: idle time skipped vs integrated even when quiet",
                  "The classification is a modelling choice tied to study purpose",
                ],
              },
              {
                q: "A steel plant has continuous furnace temperatures and discrete crane movements. What kind of model does such a hybrid system need?",
                marks: 7,
                outline: [
                  "Hybrid model: continuous variables integrated, discrete events on top",
                  "Event clock schedules crane moves, charging, tapping",
                  "Between events, furnace dynamics advance in steps of h",
                  "Events may reset or perturb the continuous state",
                  "Same principle as combining Units III and IV machinery",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Numerical integration vs continuous simulation - and analog vs digital",
            body: [
              "Continuous simulation on a digital computer is numerical integration wearing a project manager's uniform. The core act is stepping the state: x(t + h) = x(t) + h · f(x, t) is Euler's method, the simplest integrator. Numerical integration is the mathematical technique; continuous simulation wraps it in time management, statistics, randomness and experimentation. Worked in numbers: dx/dt = -0.5x with x(0) = 100 and h = 0.5 gives x(0.5) = 100 + 0.5 × (-50) = 75, while the exact answer is 100·e^(-0.25) ≈ 77.9 - the gap is truncation error, and it shrinks as h shrinks.",
              "Before digital computers made integration cheap, continuous systems were simulated on analog computers: electronic machines that represented each state variable as a voltage and used operational amplifiers to sum and integrate them in parallel. Analog was fast - all equations solved simultaneously - and superb for real-time control work, but limited in accuracy (component drift, a few decimal digits), awkward to change (repatch the panel for every new model), and impossible to log repeatably. Digital simulation reversed the trade: slower per equation but precise, reproducible, programmable, and scalable to thousands of variables. Hybrid machines coupled both through analog-to-digital converters; modern practice is digital throughout.",
              "The exam framing pairs the two contrasts. For 'numerical integration vs continuous simulation', the one-line answer is: numerical integration is the engine (the stepping of differential equations), continuous simulation is the vehicle built around that engine. For 'analog vs digital', the table of contrasts - speed vs accuracy, parallel vs sequential, patch panel vs program - earns the marks, ending with why digital won: reproducibility and precision beat raw speed once transistors made sequential arithmetic cheap.",
            ],
            keyTerms: [
              { term: "Euler's method", definition: "x(t + h) = x(t) + h · f(x, t) - the simplest numerical integrator, error of order h." },
              { term: "Truncation error", definition: "The accuracy lost because the integrator approximates the true curve over each step." },
              { term: "Analog computer", definition: "Electronic machine representing variables as voltages, integrated in parallel by op-amps." },
              { term: "Digital simulation", definition: "State stored as numbers and advanced sequentially by program - precise and reproducible." },
              { term: "Hybrid computer", definition: "Analog-digital combination coupling fast parallel integration with digital logic and logging." },
            ],
            diagram: {
              kind: "fork",
              title: "How does a continuous model get computed?",
              caption: "Two legitimate routes and one classic wrong turn - Monte-Carlo is for static sampling, not for tracking a trajectory.",
              start: "A continuous system model",
              branches: [
                { label: "Digital - numerical integration", outcome: "Euler / Runge-Kutta stepping - precise, reproducible, the modern default", good: true },
                { label: "Analog computer", outcome: "voltages and op-amps integrate in parallel - fast but low precision", good: true },
                { label: "Hybrid coupling", outcome: "analog speed with digital logging through converters", good: true },
                { label: "Monte-Carlo sampling", outcome: "wrong tool - MC answers static questions, not evolving trajectories", good: false },
              ],
            },
            bullets: [
              "Numerical integration is the engine of continuous simulation: x(t + h) = x(t) + h·f(x, t).",
              "Euler on dx/dt = -0.5x, x0 = 100, h = 0.5: gives 75 where truth is 77.9 - truncation error.",
              "Analog computers integrate in parallel with voltages - fast, but drift-limited and hard to change.",
              "Digital computers trade speed for precision, programmability and perfect reproducibility.",
              "Hybrid machines coupled the two through converters; digital won as arithmetic got cheap.",
              "Halving h roughly halves Euler's error - accuracy is bought with steps.",
            ],
            callout: {
              type: "tip",
              title: "Error scales with h - know the rate",
              body: "For Euler, global error is proportional to h; halving the step halves the error. For fourth-order Runge-Kutta (Unit III), error is of order h^4, so the same halving cuts error about sixteen-fold. Quoting the scaling law, not just 'smaller h is better', is the mark-earning version of this answer.",
            },
            table: {
              caption: "Numerical integration methods and the analog-digital contrast.",
              headers: ["Method / machine", "Mechanism", "Accuracy / precision", "Cost or limit"],
              rows: [
                ["Euler", "one slope per step: x + h·f", "error of order h", "cheap; needs tiny h"],
                ["Modified Euler (Heun)", "predictor + corrector slope average", "error of order h^2", "two evaluations per step"],
                ["Runge-Kutta 4", "four weighted slopes per step", "error of order h^4", "standard workhorse"],
                ["Analog computer", "voltages integrated in parallel", "2-4 digits, drifts", "fast but re-patching per model"],
                ["Digital computer", "sequential arithmetic on stored numbers", "machine precision", "slower historically; programmable"],
              ],
            },
            examQuestions: [
              {
                q: "Distinguish between numerical integration and continuous simulation. Illustrate Euler's method with one step of a first-order differential equation and comment on truncation error.",
                marks: 7,
                outline: [
                  "Numerical integration: the technique of stepping ODE solutions",
                  "Continuous simulation: that technique embedded in a study of a system",
                  "Euler: x(t + h) = x(t) + h·f(x, t)",
                  "Example: dx/dt = -0.5x, x0 = 100, h = 0.5 gives x = 75",
                  "Exact value 100·e^(-0.25) ≈ 77.9 - truncation error of order h",
                  "Smaller h reduces error but multiplies the number of steps",
                ],
              },
              {
                q: "Compare analog and digital simulation of continuous systems. Why did digital simulation displace analog machines?",
                marks: 7,
                outline: [
                  "Analog: variables as voltages, op-amps integrate in parallel",
                  "Analog strengths: speed, real-time operation, natural for control",
                  "Analog weaknesses: drift, low precision, patch-panel model changes",
                  "Digital: stored numbers, sequential arithmetic, exact reproduction",
                  "Digital strengths: precision, programmability, logging, scale",
                  "Displacement: cheap fast arithmetic made precision and reproducibility decisive",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Simulation vs Monte-Carlo simulation",
            body: [
              "Monte-Carlo simulation is the static branch of the family: random sampling is used to estimate a numerical answer, and time plays no substantive role. Draw two uniform numbers, test whether x² + y² ≤ 1, and the fraction of hits among N draws estimates π/4 - each draw is an independent sample, the clock never advances, and the output is a single statistic. Monte-Carlo suits problems that are structurally static but analytically stubborn: evaluating nasty integrals, estimating the probability of complex events, pricing games of chance, sampling the reliability of a network.",
              "Dynamic simulation - what the rest of this course means by 'simulation' - imitates the operation of a system as it unfolds through time. The clock advances, state evolves, events trigger events, and the output is a time series from which performance measures (mean wait, utilization, throughput) are estimated. A queue simulation is dynamic simulation, not Monte-Carlo, precisely because customer 4's experience depends on customer 1's service time - the samples are not independent, the clock is essential, and the answer is a performance profile rather than one number.",
              "The two are related as genus and species: Monte-Carlo uses simulation's machinery (random numbers, replications, statistics) without its clock; dynamic simulation uses the clock and usually the random numbers too. Examiners reward the clean discriminator sentence - 'in Monte-Carlo, time plays no role and samples are independent; in dynamic simulation the state evolves over time and observations are dependent' - followed by one example of each: π estimation against a bank queue, or dice-game estimation against an inventory system reviewed month by month.",
            ],
            keyTerms: [
              { term: "Monte-Carlo simulation", definition: "Static random sampling to estimate a numerical result; time plays no role." },
              { term: "Dynamic simulation", definition: "Imitation of a system's operation over time; clock, state evolution, dependent observations." },
              { term: "Static problem", definition: "A question whose answer is a number or probability, not a time profile." },
              { term: "Performance measure", definition: "A quantity estimated from a dynamic run - mean wait, utilization, throughput." },
            ],
            diagram: {
              kind: "compare",
              title: "Monte-Carlo vs dynamic simulation",
              caption: "The discriminator is the clock: sampling without time, versus a system evolving through time.",
              left: {
                heading: "Monte-Carlo (static)",
                items: [
                  "time plays no role - no clock",
                  "each sample independent of the last",
                  "output: one estimated number + its error",
                  "examples: estimate π, evaluate an integral, game of chance",
                ],
              },
              right: {
                heading: "Dynamic simulation",
                items: [
                  "clock advances; state evolves event to event",
                  "observations dependent - history matters",
                  "output: time profiles and performance measures",
                  "examples: bank queue, inventory policy, network traffic",
                ],
              },
            },
            bullets: [
              "Monte-Carlo = static sampling: estimate a number, no clock, independent draws.",
              "Dynamic simulation = system over time: clock, evolving state, dependent observations.",
              "π by hits-in-quarter-circle is the canonical Monte-Carlo example.",
              "A queue simulation is not Monte-Carlo - waits depend on earlier customers.",
              "Both share machinery: uniform random numbers, replications, statistical reporting.",
              "Every Monte-Carlo experiment is a simulation; not every simulation is Monte-Carlo.",
            ],
            callout: {
              type: "exam",
              title: "The one-line discriminator",
              body: "Write verbatim: 'Monte-Carlo solves static problems by sampling - time plays no role; simulation of systems tracks a clock as state evolves, so observations are dependent.' Examiners scan for exactly this sentence, then one example of each. Adding 'every MC is a simulation, not every simulation is MC' closes the marks.",
            },
            codeExample: {
              language: "python",
              caption: "montecarlo.py - estimating pi with no clock",
              code: `import random

N = 10_000
hits = 0
for _ in range(N):
    x, y = random.random(), random.random()   # u1, u2 ~ U(0, 1)
    if x * x + y * y <= 1.0:                  # inside the quarter circle
        hits += 1
pi = 4.0 * hits / N                            # static estimate, no clock
print(pi)                                      # about 3.14 for N = 10,000`,
            },
            examQuestions: [
              {
                q: "Distinguish between simulation and Monte-Carlo simulation. Explain how Monte-Carlo sampling estimates the value of π, and state why a queuing system simulation is not a Monte-Carlo experiment.",
                marks: 7,
                outline: [
                  "Monte-Carlo: static sampling, no clock, independent samples",
                  "Dynamic simulation: clock, evolving state, dependent observations",
                  "π estimate: uniform (x, y) in the unit square",
                  "Fraction with x² + y² ≤ 1 approximates π/4; multiply by 4",
                  "Error shrinks like 1/√N - more draws, tighter estimate",
                  "Queue simulation: waits depend on history - not independent, needs clock",
                ],
              },
              {
                q: "Give two problems that are naturally Monte-Carlo and two that need dynamic simulation, with one line of justification each.",
                marks: 7,
                outline: [
                  "Monte-Carlo: numerical value of a stubborn integral - static number",
                  "Monte-Carlo: reliability of a network from random component failures",
                  "Dynamic: inventory policy reviewed over months - clock and orders",
                  "Dynamic: hospital casualty department staffing - dependent arrivals and services",
                  "Justification turns on whether time and dependence are essential",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "When to use simulation - advantages and limitations",
            body: [
              "Simulation earns its keep under four conditions: the system is too complex for a closed-form analytical solution (queue networks, flexible manufacturing, communication protocols); the system does not yet exist and a design must be tested before it is built; experimenting on the real system is too costly, risky or disruptive (a hospital cannot trial chaos on patients); or the study needs time compression - a year of operation replayed in minutes, or a microsecond explosion slowed to hours. In all four, the model is cheaper, safer and repeatable in ways reality is not.",
              "The advantages follow directly: alternatives are compared without building anything; time is compressed or stretched at will; internal observation is possible - the simulation reports bottleneck queues that no external measurement could see; policies can be stress-tested with 'impossible' scenarios; and training simulators let operators crash safely. The limitations are equally structural, and examiners want them stated plainly. Model building demands special training; results are statistical estimates needing proper analysis, not exact answers; model building and analysis consume real time and money; and simulation is easy to misuse - applied to trivial problems, trusted without validation, or buried in over-elaborate models.",
              "The decision rule closes the unit: do not simulate when the problem yields to common sense, hand calculation or a small formula - queues of one server have exact M/M/1 results (Unit IV), inventory questions often have EOQ answers. Simulate when the structure defeats analytics. And when you do simulate, budget for data collection, validation and replications from day one, because a model built in an afternoon and believed forever is the subject's most common real-world failure.",
            ],
            keyTerms: [
              { term: "Analytical solution", definition: "A closed-form answer from mathematics - exact, fast, but available only for tractable structures." },
              { term: "Time compression", definition: "Replaying a year of system behaviour in minutes of computer time (or stretching microseconds)." },
              { term: "Internal observation", definition: "Simulation exposes quantities no external sensor could measure - interim queue states, entity paths." },
              { term: "Over-modelling", definition: "Building complexity the question does not need - the most common misuse of simulation." },
            ],
            diagram: {
              kind: "fork",
              title: "Should you simulate this problem?",
              caption: "Simulation is a deliberate choice - three legitimate routes and one misuse.",
              start: "A question about a system",
              branches: [
                { label: "Analytic solution exists", outcome: "solve exactly - M/M/1 formulas, EOQ, calculus", good: true },
                { label: "System exists, experiments cheap", outcome: "measure the real thing directly", good: true },
                { label: "Complex / unborn / risky / slow", outcome: "simulation is the right tool - model, verify, validate", good: true },
                { label: "Simple problem, elaborate model", outcome: "over-modelling - simulation misused, cheaper analysis existed", good: false },
              ],
            },
            bullets: [
              "Simulate when analytics fail, the system is unborn, experiments are risky, or time must be compressed.",
              "Advantages: safe what-if testing, time compression, internal observation, training.",
              "Limitations: needs training, gives statistical estimates not exact answers, costs time and money.",
              "Simulation is easily misused - on trivial problems, without validation, inside over-built models.",
              "Never simulate a problem that yields to a formula; M/M/1 and EOQ are cheaper and exact.",
              "Budget for data collection, validation and replications - not just for writing the code.",
            ],
            callout: {
              type: "warning",
              title: "Simulation is a last resort, not a first reflex",
              body: "Every list of limitations ends the same way: if a queue has one server and Poisson arrivals, write the M/M/1 formulas - a simulation will only add noise. The examiner's favourite trap is the student who recommends simulation for every problem. Recommend it exactly when analytics, measurement and judgment all fall short.",
            },
            table: {
              caption: "Advantages of simulation against its limitations.",
              headers: ["Advantage", "Why it matters", "Matching limitation"],
              rows: [
                ["Safe what-if comparison", "policies tested before purchase", "model-building skill is scarce"],
                ["Time compression / stretching", "a year replayed in minutes", "runs take compute time and money"],
                ["Internal observation", "bottlenecks visible inside the model", "outputs are estimates needing statistics"],
                ["Rare scenarios testable", "failures rehearsed safely", "garbage inputs give garbage outputs"],
                ["No disruption to operations", "real system untouched", "validation against reality is still required"],
              ],
            },
            examQuestions: [
              {
                q: "Under what conditions is simulation preferable to analytical solution? Discuss the advantages and limitations of simulation as a problem-solving technique.",
                marks: 7,
                outline: [
                  "Preferable when the system defeats closed-form analysis - queue networks",
                  "Also when the system does not exist yet or experiments are risky",
                  "Time compression: long horizons replayed quickly",
                  "Advantages: safe what-if, internal observation, training, rare scenarios",
                  "Limitations: needs skill, outputs are estimates, costly, easy to misuse",
                  "Decision rule: simulate only when analytics, measurement and judgment fail",
                ],
              },
              {
                q: "'Simulation results are not answers; they are statistical estimates.' Explain the consequences of this statement for how a simulation study should be run and reported.",
                marks: 7,
                outline: [
                  "Outputs depend on random streams - each run is one sample",
                  "Single-run point estimates carry sampling error",
                  "Consequence: multiple replications with independent seeds",
                  "Report means with confidence intervals, not bare numbers",
                  "Consequence: verify and validate before trusting any estimate",
                  "Consequence: state assumptions and input distributions explicitly",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Probability Concepts in Simulation",
      summary:
        "Unit II supplies the randomness every simulation burns: stochastic variables and their density and distribution functions, uniform random numbers from pseudo-random generators and how those generators are tested, the inverse-transform and other techniques that turn uniforms into any distribution, and the three workhorse distributions named in the syllabus - Poisson, Normal and Uniform.",
      chapter: {
        number: "02",
        title: "Randomness - the Fuel of Simulation",
        intro:
          "Unit II covers stochastic variables, discrete and continuous random variables with their density and distribution functions, pseudo-random number generators, the testing of pseudo-random number generators, generation of non-uniformly distributed random numbers, and the study of the Poisson, Normal and Uniform distributions.",
        inOneBreath:
          "A pseudo-random generator turns one seed into a stream of uniforms; uniformity and independence tests certify the stream; inverse transform, rejection, convolution, composition and Box-Muller convert uniforms into any distribution; Poisson counts and exponential gaps are two views of one arrival process; the normal curve holds 68, 95 and 99.7 percent of its mass within one, two and three sigma.",
        sections: [
          {
            number: "2.1",
            title: "Stochastic variables - pmf, pdf and cdf",
            body: [
              "A stochastic (random) variable maps the outcomes of a random experiment to numbers - the number of customers arriving in a minute, the seconds a service takes. A discrete random variable takes countable values and is described by its probability mass function p(x) = P(X = x), with Σ p(x) = 1; a fair die is the textbook case, every face at 1/6. A continuous random variable takes any value in an interval and is described by its probability density function f(x), where probability comes only from integrals: P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx, with ∫ f(x) dx = 1 over the whole range.",
              "Both are unified by the cumulative distribution function F(x) = P(X ≤ x) - non-decreasing, starting at 0, ending at 1. For discrete variables F is a staircase; for continuous ones it is a smooth curve and its derivative is the density: F′(x) = f(x). The uniform distribution on [a, b] is the simulation workhorse: f(x) = 1/(b - a), mean (a + b)/2, variance (b - a)²/12 - and its special case U(0, 1) is the single object every random-number generator produces and every other distribution is built from.",
              "The classic examiner trap lives here: for a continuous variable, P(X = x) = 0 for every single point - probability exists only on intervals, via the integral. Answers that write P(X = 3) = f(3) for a continuous variable lose the marks instantly. The safe habit: discrete questions use sums of p(x), continuous questions use integrals of f(x), and both are read off F(x) when the question says 'at most', 'at least' or 'between'.",
            ],
            keyTerms: [
              { term: "Random (stochastic) variable", definition: "A rule assigning a number to each outcome of a random experiment." },
              { term: "pmf p(x)", definition: "Probability mass function of a discrete variable: P(X = x), summing to 1." },
              { term: "pdf f(x)", definition: "Probability density of a continuous variable; probability on [a, b] is the integral of f." },
              { term: "cdf F(x)", definition: "P(X ≤ x) - non-decreasing from 0 to 1; F′ = f for continuous variables." },
              { term: "Uniform U(a, b)", definition: "f(x) = 1/(b - a); mean (a + b)/2; variance (b - a)²/12 - the generator's native output." },
            ],
            diagram: {
              kind: "compare",
              title: "Discrete vs continuous random variables",
              caption: "Sums for bars, integrals for curves - and the one-letter trap between them.",
              left: {
                heading: "Discrete variable",
                items: [
                  "countable values: 0, 1, 2, ...",
                  "described by pmf p(x) = P(X = x)",
                  "probability = sum of masses",
                  "example: arrivals per minute (Poisson)",
                ],
              },
              right: {
                heading: "Continuous variable",
                items: [
                  "any value in an interval",
                  "described by pdf f(x); P(X = x) = 0",
                  "probability = integral of the density",
                  "example: service time (exponential)",
                ],
              },
            },
            bullets: [
              "Random variable: numbers assigned to random-experiment outcomes.",
              "Discrete: pmf p(x), probabilities summed; die faces, arrival counts.",
              "Continuous: pdf f(x), probabilities integrated; P(X = x) = 0 at any single point.",
              "cdf F(x) = P(X ≤ x) unifies both - staircase for discrete, smooth for continuous.",
              "Uniform on [a, b]: f = 1/(b - a), mean (a + b)/2, variance (b - a)²/12.",
              "U(0, 1) is the raw material every generator emits and every technique consumes.",
            ],
            callout: {
              type: "tip",
              title: "The one-letter trap: pmf vs pdf",
              body: "Reading p(x) as a probability is correct only for discrete variables. For continuous ones the density f(x) can exceed 1 - it is a height, not a probability; probability arrives only after integration. Quoting 'P(X = x) = 0 for continuous X' is a cheap, guaranteed discriminator mark.",
            },
            table: {
              caption: "The three functions every stochastic variable carries.",
              headers: ["Function", "Definition", "Valid statement", "Example"],
              rows: [
                ["pmf p(x)", "P(X = x), discrete X", "P(die = 4) = 1/6", "arrival count per minute"],
                ["pdf f(x)", "density of continuous X, ∫f = 1", "P(0.2 ≤ U ≤ 0.7) = 0.5", "service time"],
                ["cdf F(x)", "P(X ≤ x), 0 → 1", "F(10) for an Exp(0.1) wait", "both kinds"],
              ],
            },
            examQuestions: [
              {
                q: "Define a stochastic variable. Distinguish discrete and continuous random variables, explaining the probability mass function, probability density function and cumulative distribution function with one example of each.",
                marks: 7,
                outline: [
                  "Random variable maps random-experiment outcomes to numbers",
                  "Discrete: countable values; pmf p(x) = P(X = x); Σp = 1",
                  "Example: number of arrivals per minute",
                  "Continuous: interval values; pdf f(x); probability only by integral",
                  "P(X = x) = 0 for continuous X - the standard trap",
                  "cdf F(x) = P(X ≤ x) covers both; F′ = f in the continuous case",
                  "Uniform [a, b] as the generator's native distribution",
                ],
              },
              {
                q: "For the uniform distribution on [a, b], obtain the mean and variance from its density function.",
                marks: 7,
                outline: [
                  "f(x) = 1/(b - a) for a ≤ x ≤ b, zero elsewhere",
                  "Check normalization: ∫ f dx = 1",
                  "E(X) = ∫ x f(x) dx = (a + b)/2",
                  "E(X²) = (a² + ab + b²)/3",
                  "Var(X) = E(X²) − [E(X)]² = (b - a)²/12",
                  "Special case U(0, 1): mean 1/2, variance 1/12",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Random numbers and pseudo-random generators",
            body: [
              "A sequence of random numbers is a sequence of values from U(0, 1) with two ideal properties: uniformity - every value in (0, 1) equally likely, the empirical distribution flat over the bins - and independence - no value predictable from its predecessors, no correlation at any lag. Every stochastic model in this course is fuelled by such a stream: inter-arrival times, service times, routing choices all begin as uniforms and are transformed by the techniques of sections 2.4 and 2.5.",
              "Computers cannot toss coins, so the numbers are pseudo-random: produced by a deterministic recurrence that walks a statistical tightrope - looking random while being perfectly reproducible from its seed. The historic mid-square method of von Neumann squares the seed and extracts middle digits: 5735² = 32890225 gives 8902; 8902² = 79245604 gives 2456; then 0319 - and the sequence decays toward small values and zero, with a short period. The lesson: ad-hoc arithmetic does not stay random for long.",
              "The workhorse is the linear congruential generator: Xᵢ₊₁ = (a·Xᵢ + c) mod m, emitted as uᵢ = Xᵢ/m. Worked example with small numbers - X₀ = 27, a = 17, c = 43, m = 100: X₁ = (459 + 43) mod 100 = 2 → u = 0.02; X₂ = (34 + 43) = 77 → 0.77; X₃ = (1309 + 43) = 1352 mod 100 = 52 → 0.52; X₄ = 927 mod 100 = 27 - the seed returns and the period is four. Small parameters expose the danger; real generators choose m = 2³¹ - 1 with a = 16807 (the Lehmer generator), giving period m - 1, and the Hull-Dobell conditions on a and c guarantee full period for the mixed generator. Reproducibility from the seed is a feature, not a bug: paired runs with identical seeds isolate the effect of a design change.",
            ],
            keyTerms: [
              { term: "Pseudo-random numbers", definition: "Deterministically generated sequences with uniformity and independence - reproducible from a seed." },
              { term: "Linear congruential generator", definition: "Xᵢ₊₁ = (a·Xᵢ + c) mod m, scaled to uᵢ = Xᵢ/m; the standard classic generator." },
              { term: "Mid-square method", definition: "Square the seed, keep the middle digits - historic method that decays to zero with short period." },
              { term: "Seed", definition: "The starting value X₀; identical seeds reproduce identical streams - the basis of paired experiments." },
              { term: "Period", definition: "The length of the cycle before the sequence repeats - must exceed any run's demand for numbers." },
            ],
            diagram: {
              kind: "flow",
              title: "Inside a linear congruential generator",
              caption: "One modular-arithmetic line, repeated: deterministic arithmetic producing uniform-looking output.",
              steps: [
                { label: "Choose parameters", note: "seed X₀ · multiplier a · increment c · modulus m" },
                { label: "Compute next state", note: "Xᵢ₊₁ = (a·Xᵢ + c) mod m" },
                { label: "Emit a uniform", note: "uᵢ = Xᵢ / m ∈ [0, 1)" },
                { label: "Feed the model", note: "inter-arrivals, services, routing" },
                { label: "Repeat", note: "period must exceed the run's appetite" },
              ],
            },
            bullets: [
              "Ideal random stream: uniform over (0, 1) and independent at every lag.",
              "Pseudo-random = deterministic recurrence + good statistics + reproducibility from the seed.",
              "Mid-square method: square, keep middle digits - decays to zero, short period.",
              "LCG: Xᵢ₊₁ = (a·Xᵢ + c) mod m; uᵢ = Xᵢ/m.",
              "Worked: X₀ = 27, a = 17, c = 43, m = 100 → 0.02, 0.77, 0.52, then back to the seed - period 4.",
              "Real choice: m = 2³¹ - 1, a = 16807 (Lehmer); Hull-Dobell conditions secure full period.",
            ],
            callout: {
              type: "warning",
              title: "Pseudo does not mean fake - but seeds are part of the design",
              body: "Determinism is the feature: identical seeds give identical streams, so comparing design A and B with the same seeds isolates the design effect (Unit V's common random numbers). The danger is seed bookkeeping - reusing overlapping streams correlates your experiments invisibly. Also beware famous bad generators: RANDU (a = 65539) passes casual tests yet its triples fall on 15 planes.",
            },
            codeExample: {
              language: "python",
              caption: "lcg.py - the congruential engine and its period trap",
              code: `def lcg(seed, a=17, c=43, m=100, n=6):
    x, us = seed, []
    for _ in range(n):
        x = (a * x + c) % m        # the one-line engine
        us.append(x / m)           # u in [0, 1)
    return us

print(lcg(27))
# [0.02, 0.77, 0.52, 0.27, 0.02, 0.77]  -> period 4 with tiny parameters
# real generators: m = 2**31 - 1, a = 16807, c = 0  (Lehmer / MINSTD)`,
            },
            examQuestions: [
              {
                q: "Explain pseudo-random numbers. Describe the linear congruential method and, using X₀ = 27, a = 17, c = 43 and m = 100, generate the first four random numbers and comment on the result.",
                marks: 7,
                outline: [
                  "Pseudo-random: deterministic sequence with uniformity and independence",
                  "LCG recurrence: Xᵢ₊₁ = (a·Xᵢ + c) mod m; uᵢ = Xᵢ/m",
                  "X₁ = (17×27 + 43) mod 100 = 2 → 0.02",
                  "X₂ = 77 → 0.77; X₃ = 52 → 0.52",
                  "X₄ = 927 mod 100 = 27 → seed returns: period 4",
                  "Small m exposes short periods; large prime m and good a fix it",
                ],
              },
              {
                q: "What properties should a good random-number generator possess? Explain the mid-square method and its weaknesses.",
                marks: 7,
                outline: [
                  "Uniformity: empirical distribution flat over (0, 1)",
                  "Independence: no correlation at any lag",
                  "Long period exceeding any run's demand",
                  "Reproducibility from the seed; speed and portability",
                  "Mid-square: square seed, extract middle digits, repeat",
                  "Weaknesses: sequence decays toward zero, short cycles, unreliable",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Testing of pseudo-random number generators",
            body: [
              "A generator is adopted only after passing statistical trials, and the trials come in two families: tests of uniformity (does the empirical distribution match U(0, 1)?) and tests of independence (are the values uncorrelated with their neighbours?). The chi-square frequency test bins N numbers into k equal intervals, expects N/k in each, and computes χ² = Σ (Oᵢ - Eᵢ)²/Eᵢ over the bins. Worked numbers: N = 1000, k = 10, observed counts 96, 108, 92, 105, 99, 103, 97, 91, 110, 99 give χ² = 3.70, compared with the critical value χ²(0.05, 9) = 16.92 - far below, so uniformity is accepted at the 5% level.",
              "The Kolmogorov-Smirnov test is the small-sample alternative for uniformity: it compares the empirical cdf F_N(x) of the sample with the theoretical F(x) = x and rejects when D = max |F_N(x) - F(x)| exceeds the critical value D(α, N). Independence is probed by the runs test - counting ascending/descending runs and comparing their number with the expected (2N - 1)/3 for up-down runs - by the autocorrelation test between values k apart, and by gap tests measuring how often a digit-range reappears.",
              "Procedure and interpretation are what the examiner grades. Generate a large sample; run uniformity tests first, independence tests second; reject the generator if any test fails at the chosen significance level α (conventionally 0.05); and state the degrees of freedom - k - 1 bins for chi-square, or one fewer still if parameters were estimated from the data. A pass does not prove randomness, it only fails to detect a flaw - which is why generators carry published periods and documented test histories rather than certificates of perfection.",
            ],
            keyTerms: [
              { term: "Frequency (uniformity) test", definition: "Chi-square comparison of binned counts against N/k expected per bin; df = k - 1." },
              { term: "Kolmogorov-Smirnov test", definition: "Largest gap D between empirical and theoretical cdf; suited to small samples." },
              { term: "Runs test", definition: "Counts ascending/descending runs to detect serial dependence in the stream." },
              { term: "Autocorrelation test", definition: "Measures correlation between numbers separated by a fixed lag k." },
              { term: "Significance level α", definition: "The false-alarm rate accepted - 0.05 conventionally; a failing test rejects the generator." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The two-pass test battery",
              caption: "Uniformity first, independence second - a generator failing any test is discarded.",
              stages: [
                { label: "Generate N values", note: "large sample from the candidate generator" },
                { label: "Uniformity tests", note: "chi-square over k bins · Kolmogorov-Smirnov" },
                { label: "Independence tests", note: "runs · autocorrelation · gaps" },
                { label: "Compare with critical values", note: "at significance α, with correct df" },
                { label: "Accept or reject", note: "one failure rejects the generator" },
              ],
            },
            bullets: [
              "Two test families: uniformity (chi-square, KS) and independence (runs, autocorrelation, gaps).",
              "Chi-square: χ² = Σ (Oᵢ - Eᵢ)²/Eᵢ with Eᵢ = N/k; df = k - 1.",
              "Worked: N = 1000, k = 10, χ² = 3.70 < 16.92 - uniformity accepted at α = 0.05.",
              "KS compares empirical vs theoretical cdf; D = max |F_N(x) - F(x)|.",
              "Runs test expects about (2N - 1)/3 up-down runs in an independent stream.",
              "A pass is not proof - it only fails to detect a flaw at level α.",
            ],
            callout: {
              type: "exam",
              title: "State the two families and the degrees of freedom",
              body: "The marks concentrate in three sentences: 'tests come in uniformity and independence families'; 'chi-square has k - 1 degrees of freedom (less any estimated parameters)'; 'rejection at α = 0.05 discards the generator'. Numericals go wrong almost always through the df - writing N - 1 instead of k - 1 is the classic slip.",
            },
            table: {
              caption: "The generator-test battery.",
              headers: ["Test", "Family", "Statistic", "Decision rule"],
              rows: [
                ["Chi-square", "uniformity", "Σ (Oᵢ - Eᵢ)²/Eᵢ", "reject if > χ²(α, k - 1)"],
                ["Kolmogorov-Smirnov", "uniformity", "D = max |F_N(x) - F(x)|", "reject if > D(α, N)"],
                ["Runs test", "independence", "number of runs vs (2N - 1)/3", "reject outside limits"],
                ["Autocorrelation", "independence", "correlation at lag k", "reject if significantly ≠ 0"],
                ["Gap test", "independence", "gaps between digit-range hits", "reject vs geometric expectation"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the chi-square test for uniformity of random numbers. 1000 numbers binned into 10 intervals give counts 96, 108, 92, 105, 99, 103, 97, 91, 110, 99. Test uniformity at the 5% level (χ²(0.05, 9) = 16.92).",
                marks: 7,
                outline: [
                  "Hypothesis: numbers uniform over (0, 1)",
                  "Expected count per bin E = N/k = 100",
                  "χ² = Σ (Oᵢ - Eᵢ)²/Eᵢ over the 10 bins",
                  "Deviations: -4, 8, -8, 5, -1, 3, -3, -9, 10, -1",
                  "χ² = (16 + 64 + 64 + 25 + 1 + 9 + 9 + 81 + 100 + 1)/100 = 3.70",
                  "3.70 < 16.92 - fail to reject: uniformity acceptable",
                  "df = k - 1 = 9; α = 0.05 is the false-alarm rate",
                ],
              },
              {
                q: "Describe the Kolmogorov-Smirnov test and the runs test for random numbers. Why are both uniformity and independence tests necessary before a generator is used in a simulation?",
                marks: 7,
                outline: [
                  "KS: compare empirical cdf F_N(x) with theoretical F(x) = x",
                  "Statistic D = max |F_N(x) - F(x)|; reject if beyond D(α, N)",
                  "KS suits small samples where binning wastes information",
                  "Runs test: count ascending/descending runs vs expectation",
                  "Uniformity alone can pass while values chain together",
                  "Both defects distort simulation outputs - hence both batteries",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "The inverse-transform technique",
            body: [
              "The inverse-transform technique converts a uniform into any distribution whose cdf can be inverted. The fact behind it: if X has cdf F, then U = F(X) is uniform on (0, 1) - the cdf flattens any distribution into uniforms. Reverse the flow: draw u ~ U(0, 1) and return X = F⁻¹(u), and X automatically has cdf F. One mechanism, every invertible distribution - the reason this is the first technique taught and the first examined.",
              "Continuous case, worked: for the exponential distribution with rate λ, F(x) = 1 - e^(-λx). Set u = 1 - e^(-λx), solve: x = -ln(1 - u)/λ - and since 1 - U is itself uniform, the working form is x = -ln(u)/λ. Numerical: u = 0.87, λ = 0.1 (mean 10 minutes): x = -ln(0.13)/0.1 = 2.040/0.1 = 20.4 minutes. Uniform on [a, b] inverts to x = a + (b - a)u. Each simulated customer's inter-arrival time is one line of arithmetic from one uniform.",
              "Discrete case, worked: to sample from p(1) = 0.4, p(2) = 0.3, p(3) = 0.3, lay the cumulative intervals 0-0.4, 0.4-0.7, 0.7-1.0 along the unit line; draw u = 0.73; it falls in the third interval, so X = 3. The same partition logic handles any pmf. The technique's limit defines the next section: it needs F in closed form with an invertible expression - for awkward densities the rejection and composition families take over.",
            ],
            keyTerms: [
              { term: "Inverse transform", definition: "Draw u ~ U(0, 1), return X = F⁻¹(u); X then has cdf F." },
              { term: "Exponential sampling", definition: "X = -ln(u)/λ - the inverse of F(x) = 1 - e^(-λx)." },
              { term: "Discrete inverse", definition: "Partition (0, 1) into segments proportional to the pmf; the segment containing u selects the value." },
              { term: "Cumulative intervals", definition: "The staircase of running pmf sums along the unit line that discrete sampling reads." },
            ],
            diagram: {
              kind: "cycle",
              title: "The inverse-transform loop",
              caption: "Every simulated customer consumes one uniform: draw, invert, use, repeat.",
              steps: [
                { label: "Draw u ~ U(0, 1)", note: "one uniform from the generator" },
                { label: "Invert the cdf", note: "X = F⁻¹(u) - closed form or table walk" },
                { label: "Use X in the model", note: "an inter-arrival, a service time" },
                { label: "Loop", note: "next entity consumes the next uniform" },
              ],
            },
            bullets: [
              "Fact behind the technique: if X ~ F then U = F(X) ~ U(0, 1); invert to reverse the flow.",
              "Exponential: X = -ln(u)/λ; with u = 0.87, λ = 0.1 → X = 20.4 minutes.",
              "Uniform [a, b]: X = a + (b - a)·u.",
              "Discrete: cumulative intervals 0.4 / 0.7 / 1.0; u = 0.73 falls in X = 3's segment.",
              "Works for any distribution with an invertible closed-form cdf.",
              "Needs F⁻¹ in closed form - awkward densities need section 2.5's techniques.",
            ],
            callout: {
              type: "tip",
              title: "1 - U is uniform too",
              body: "Because 1 - U ~ U(0, 1), the exponential formula -ln(1 - u)/λ collapses to -ln(u)/λ. This is not sloppiness - it is a legitimate identity that halves your arithmetic in exam numericals. State it once ('since 1 - U is also uniform') and use the shorter form.",
            },
            codeExample: {
              language: "python",
              caption: "inverse.py - continuous and discrete inversion",
              code: `import math, random

def exponential(lam):                 # mean = 1 / lam
    u = random.random()
    return -math.log(u) / lam         # inverse of F(x) = 1 - e**(-lam*x)

def discrete_sample(pmf, u):          # pmf = [(1, 0.4), (2, 0.3), (3, 0.3)]
    cum = 0.0
    for value, p in pmf:
        cum += p
        if u <= cum:                  # u falls inside value's segment
            return value

print(exponential(0.1))               # e.g. u = 0.87 -> 20.4 minutes
print(discrete_sample([(1, 0.4), (2, 0.3), (3, 0.3)], 0.73))   # 3`,
            },
            examQuestions: [
              {
                q: "Explain the inverse-transform technique for generating random variates. Derive the formula for generating exponential variates and compute the variate for u = 0.87 with λ = 0.1.",
                marks: 7,
                outline: [
                  "Basis: if X ~ F then U = F(X) ~ U(0, 1)",
                  "Technique: draw u, return X = F⁻¹(u)",
                  "Exponential cdf: F(x) = 1 - e^(-λx)",
                  "Invert: x = -ln(1 - u)/λ; 1 - U uniform → x = -ln(u)/λ",
                  "Numeric: -ln(0.87) = 0.1393 → x = 1.393 for λ = 0.1... or use 1 - u:",
                  "with u = 0.87 read as 1 - u = 0.13: x = 2.040/0.1 = 20.4 minutes",
                ],
              },
              {
                q: "A maintenance time is 1, 2 or 3 hours with probabilities 0.4, 0.3, 0.3. Show how inverse transform samples it, and determine the value generated by u = 0.73 and by u = 0.25.",
                marks: 7,
                outline: [
                  "Cumulative intervals: 0-0.4 → 1; 0.4-0.7 → 2; 0.7-1.0 → 3",
                  "Mechanism: the segment containing u selects the value",
                  "u = 0.73 lies in 0.7-1.0 → X = 3 hours",
                  "u = 0.25 lies in 0-0.4 → X = 1 hour",
                  "Same partition logic generalizes to any discrete pmf",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Acceptance-rejection, convolution, composition and Box-Muller",
            body: [
              "When the cdf has no invertible closed form, four further techniques cover the ground. Acceptance-rejection samples a convenient proposal g (say the uniform over the target's range), scales it by a constant c so that c·g envelopes the target density f, and accepts a proposal x with probability f(x)/(c·g(x)); rejects are redrawn. The method works for densities inversion cannot reach, at the price of efficiency 1/c - on average c proposals per accepted variate, so a tight envelope matters.",
              "Convolution builds a sum: if the target is the sum of k independent variables, draw the components and add. The Erlang distribution - the sum of k exponential stages, realistic for multi-phase service - is the simulation workhorse: with mean 2 per stage and u = 0.87, 0.35, 0.61 for three stages, X = -2·(ln 0.87 + ln 0.35 + ln 0.61) = -2 × (-0.1393 - 1.0498 - 0.4943) = 3.37 minutes. The binomial is a convolution of Bernoullis; the normal of many small effects (section 2.7). Composition handles mixtures: when F = Σ αᵢFᵢ, first draw the component by u₁, then sample that component with u₂.",
              "Box-Muller deserves its own sentence because the normal has no closed-form cdf at all: from two uniforms u₁, u₂ it returns the pair Z₁ = √(-2 ln u₁)·cos(2πu₂), Z₂ = √(-2 ln u₁)·sin(2πu₂), each standard normal - two normal variates per two uniforms, no tables, no iteration. Numerical check: u₁ = 0.35, u₂ = 0.61 gives Z₁ ≈ -1.12, Z₂ ≈ -0.92. The exam question is 'generate non-uniform random numbers' - answer with the menu: inverse transform first, then rejection, convolution, composition, Box-Muller, each with its trigger condition.",
            ],
            keyTerms: [
              { term: "Acceptance-rejection", definition: "Sample an enveloping proposal, accept with probability f/(c·g); efficiency 1/c." },
              { term: "Convolution", definition: "Generate a sum variable by drawing and adding components - Erlang from k exponentials." },
              { term: "Composition", definition: "For a mixture cdf F = Σ αᵢFᵢ: first pick the component, then sample within it." },
              { term: "Box-Muller", definition: "Two uniforms → two independent standard normals via cos/sin of √(-2 ln u₁)." },
              { term: "Erlang distribution", definition: "Sum of k exponential stages - models multi-phase service times." },
            ],
            diagram: {
              kind: "fork",
              title: "Which generation technique fits?",
              caption: "Pick by the shape of the problem - and never invent an ad-hoc formula.",
              start: "Target distribution needed",
              branches: [
                { label: "CDF invertible in closed form", outcome: "inverse transform - one uniform, one line", good: true },
                { label: "Density awkward, envelope easy", outcome: "acceptance-rejection - redraw until accepted", good: true },
                { label: "Target is a sum of variates", outcome: "convolution - Erlang from k exponentials", good: true },
                { label: "Normal pair needed", outcome: "Box-Muller from two uniforms", good: true },
              ],
            },
            bullets: [
              "Acceptance-rejection: envelope f with c·g, accept with probability f/(c·g), efficiency 1/c.",
              "Convolution: Erlang(k) = sum of k exponentials; worked: three stages, mean 2 → X = 3.37.",
              "Composition: mixture F = Σ αᵢFᵢ - one draw picks the component, another samples it.",
              "Box-Muller: Z₁ = √(-2 ln u₁)cos(2πu₂), Z₂ = √(-2 ln u₁)sin(2πu₂); u = 0.35, 0.61 → -1.12, -0.92.",
              "Inverse transform remains first choice whenever F⁻¹ exists.",
              "Never hand-roll an untested generator formula - section 2.3's tests exist to catch it.",
            ],
            callout: {
              type: "warning",
              title: "Rejection wastes draws - and Box-Muller consumes pairs",
              body: "Acceptance-rejection's efficiency is 1/c: an envelope twice as tall as the target throws away half of everything it draws, and a sloppy envelope can make the method crawl. Box-Muller always consumes exactly two uniforms and returns exactly two normals - bookkeeping this wrongly in a long run correlates your samples. Both facts are one-mark discriminators.",
            },
            table: {
              caption: "The generation menu for non-uniform variates.",
              headers: ["Technique", "Trigger condition", "Cost", "Example target"],
              rows: [
                ["Inverse transform", "F invertible in closed form", "1 uniform per variate", "exponential, uniform, discrete pmf"],
                ["Acceptance-rejection", "density awkward, envelope available", "c draws per accept", "beta, triangular, truncated"],
                ["Convolution", "target is a sum", "k draws per variate", "Erlang, binomial"],
                ["Composition", "cdf is a mixture Σ αᵢFᵢ", "2 draws per variate", "double exponential"],
                ["Box-Muller", "standard normal pair", "2 uniforms → 2 normals", "normal, lognormal via exp"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the acceptance-rejection and convolution methods for generating non-uniform random variates. Generate an Erlang variate with k = 3 exponential stages of mean 2, using u₁ = 0.87, u₂ = 0.35, u₃ = 0.61.",
                marks: 7,
                outline: [
                  "Rejection: proposal g enveloped by c·g; accept with prob f/(c·g)",
                  "Efficiency 1/c - tight envelopes matter",
                  "Convolution: sum of independent components",
                  "Erlang(k): X = -(1/λ)·Σ ln uᵢ with stage mean 1/λ",
                  "Compute: ln 0.87 + ln 0.35 + ln 0.61 = -1.6834",
                  "X = 2 × 1.6834 = 3.37 minutes",
                ],
              },
              {
                q: "Derive the Box-Muller transformation and compute both normal variates for u₁ = 0.35 and u₂ = 0.61. Why is it needed when the inverse-transform technique exists?",
                marks: 7,
                outline: [
                  "Normal cdf has no invertible closed form - inversion impossible",
                  "Take u₁, u₂ ~ U(0, 1) independent",
                  "Z₁ = √(-2 ln u₁)·cos(2πu₂); Z₂ = √(-2 ln u₁)·sin(2πu₂)",
                  "√(-2 ln 0.35) = 1.449; 2π×0.61 = 3.833 rad",
                  "cos 3.833 = -0.771, sin 3.833 = -0.637",
                  "Z₁ ≈ -1.12, Z₂ ≈ -0.92 - two normals from two uniforms",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "The Poisson distribution and the arrival process",
            body: [
              "The Poisson distribution counts random events per unit interval when events occur independently at a constant rate λ: P(N = n) = e^(-λ)·λⁿ/n!, with the memorable property mean = variance = λ. It is the syllabus's model of arrivals - calls at an exchange, customers at a counter, packets at a router. Worked numerical: at λ = 4 calls per minute, P(exactly 2 in a minute) = e^(-4)·4²/2! = 0.0183 × 8 = 0.147 - about a seven-in-fifty chance.",
              "The deep fact is the two-view theorem connecting Units II and IV: if inter-arrival gaps are independent exponential variates with mean 1/λ, then the count in any interval of length T is Poisson with mean λT - counts and gaps are two views of one process. Simulation exploits both directions. To generate counts: draw exponential gaps Xᵢ = -ln(uᵢ)/λ, accumulate them, and the number fitting inside T is a Poisson variate. To generate gaps for a queue model: one uniform per customer, as section 2.4 showed.",
              "The exam question pairs identification with generation. Identify: the assumptions are independence, constant rate, no simultaneity - and the check mean ≈ variance is the classic data test. Generate: either the gap-accumulation method above or the direct recursive form P(N = n + 1) = λ·P(N = n)/(n + 1) started from P(N = 0) = e^(-λ). Stating 'exponential gaps ⇒ Poisson counts, and conversely' with the λ ↔ 1/λ conversion is the sentence that separates a complete answer from a formula dump.",
            ],
            keyTerms: [
              { term: "Poisson distribution", definition: "Counts per interval under independent constant-rate events: P(N = n) = e^(-λ)λⁿ/n!." },
              { term: "Poisson process", definition: "The counting process whose inter-arrival gaps are i.i.d. exponential with mean 1/λ." },
              { term: "Inter-arrival time", definition: "The gap between consecutive arrivals - exponential with mean 1/λ under Poisson arrivals." },
              { term: "Mean = variance = λ", definition: "The Poisson signature - used to test whether observed counts fit the distribution." },
            ],
            diagram: {
              kind: "compare",
              title: "Poisson counts vs exponential gaps",
              caption: "One arrival process, two windows: count events per minute, or measure the gaps between them.",
              left: {
                heading: "Poisson view - counts",
                items: [
                  "N = events in an interval of length T",
                  "P(N = n) = e^(-λT)(λT)ⁿ/n!",
                  "mean = variance = λT",
                  "example: 4 calls/minute → P(2 calls) = 0.147",
                ],
              },
              right: {
                heading: "Exponential view - gaps",
                items: [
                  "T = time to the next arrival",
                  "pdf λe^(-λt); mean 1/λ, memoryless",
                  "generate: X = -ln(u)/λ",
                  "example: λ = 4/min → mean gap 15 s",
                ],
              },
            },
            bullets: [
              "Poisson pmf: P(N = n) = e^(-λ)λⁿ/n!; mean = variance = λ.",
              "Worked: λ = 4/min, P(N = 2) = e^(-4)·8 = 0.147.",
              "Exponential gaps with mean 1/λ ⇔ Poisson counts with mean λT - two views, one process.",
              "Generate counts by accumulating exponential gaps until they overrun T.",
              "Generate gaps for queue models by X = -ln(u)/λ - one uniform per arrival.",
              "Assumptions to state: independence, constant rate, events one at a time.",
            ],
            callout: {
              type: "exam",
              title: "λ converts counts to gaps and back",
              body: "The single most useful sentence: 'counts per interval are Poisson with mean λT; gaps between arrivals are exponential with mean 1/λ.' Examiners set one numerical on each side of that conversion - P(N = n) by formula, and a gap by -ln(u)/λ - and expect the memoryless property of the gap mentioned by name.",
            },
            codeExample: {
              language: "python",
              caption: "poisson.py - counting exponential gaps in a window",
              code: `import math, random

def poisson_count(lam, T=1.0):
    """Draw exponential gaps until they overrun T; the count is Poisson."""
    t, n = 0.0, -1
    while t <= T:
        t -= math.log(random.random()) / lam   # gap ~ Exp(lam)
        n += 1
    return n

print(poisson_count(4))        # counts per minute ~ Poisson(4)
# check against the formula: P(N = 2) = e**(-4) * 4**2 / 2! = 0.1465`,
            },
            examQuestions: [
              {
                q: "Telephone calls arrive at a rate of 4 per minute according to a Poisson process. Find the probability of exactly 2 calls in a minute, and explain how you would generate the arrival times of calls in a simulation of this exchange.",
                marks: 7,
                outline: [
                  "Poisson pmf: P(N = n) = e^(-λ)λⁿ/n!",
                  "P(N = 2) = e^(-4)·4²/2! = 0.0183 × 8 = 0.147",
                  "Gaps between calls: exponential with mean 1/4 minute",
                  "Generate each gap as X = -ln(u)/λ from a fresh uniform",
                  "Accumulate gaps along the clock to place arrivals",
                  "Alternatively accumulate until T is overrun: count = Poisson variate",
                ],
              },
              {
                q: "How are the Poisson and exponential distributions related? Why does this relationship matter for simulating queueing systems?",
                marks: 7,
                outline: [
                  "Exponential gaps ⇒ Poisson counts in any window - and conversely",
                  "Mean gap 1/λ vs mean count λT: the rate converts one view to the other",
                  "Memoryless gaps make the analysis tractable (Unit IV)",
                  "Simulation needs only one uniform per customer for arrivals",
                  "Queue formulas (M/M/1) assume exactly this arrival process",
                  "Stating the equivalence earns the linking marks across Units II and IV",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "The Normal distribution and why sums go normal",
            body: [
              "The normal (Gaussian) distribution with mean μ and standard deviation σ has density f(x) = 1/(σ√(2π)) · e^(-(x - μ)²/(2σ²)) - the symmetric bell curve. Its probabilities come from standardization: Z = (X - μ)/σ follows the standard normal N(0, 1), whose tables every examination supplies. Worked: service time ~ N(10, 2²) minutes; P(X > 13) = P(Z > 1.5) = 1 - 0.9332 = 0.067 - a 6.7% chance a job exceeds thirteen minutes.",
              "Why simulation cares is the central limit theorem: sums of many independent effects tend to normality regardless of the components' shapes. Total processing time across stations, assembly times of many parts, monthly demand aggregated from daily sales - all drift normal as the count grows. This makes the normal the default model for aggregate quantities and the reason the empirical rule holds so widely: about 68% of mass within μ ± σ, 95% within μ ± 2σ, 99.7% within μ ± 3σ.",
              "Generation completes the story. Section 2.5's Box-Muller turns two uniforms into two exact standard normals; the quick-and-dirty sum of twelve uniforms minus six exploits the central limit theorem directly and is acceptable in hand computation. In models, a normal variate X = μ + σ·Z shifts and scales the standard draw. The one caution examiners reward: normal variates can go negative - for strictly positive quantities like service times, either accept the tiny tail or switch to a lognormal/Erlang model and say why.",
            ],
            keyTerms: [
              { term: "Normal distribution", definition: "Bell curve with pdf f(x) = 1/(σ√(2π))·e^(-(x-μ)²/2σ²); fully described by μ and σ." },
              { term: "Standardization", definition: "Z = (X - μ)/σ ~ N(0, 1) - the form in which normal probabilities are read from tables." },
              { term: "Central limit theorem", definition: "Sums of many independent effects tend to normality regardless of component shapes." },
              { term: "Empirical rule", definition: "68% / 95% / 99.7% of mass within 1, 2 and 3 standard deviations." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The empirical-rule pyramid",
              caption: "Mass concentrates fast: each extra sigma captures a shrinking sliver of the remaining 0.3%.",
              tiers: [
                { label: "μ ± 1σ - 68%", note: "the core of the bell" },
                { label: "μ ± 2σ - 95%", note: "the conventional confidence band" },
                { label: "μ ± 3σ - 99.7%", note: "control-chart limits; beyond lies 0.3%" },
              ],
            },
            bullets: [
              "pdf: f(x) = 1/(σ√(2π))·e^(-(x - μ)²/(2σ²)) - symmetric, bell-shaped, two parameters.",
              "Standardize before the table: Z = (X - μ)/σ.",
              "Worked: N(10, 2²), P(X > 13) = P(Z > 1.5) = 0.067.",
              "CLT: sums of independent effects go normal - hence its role for aggregates.",
              "68-95-99.7 within 1σ, 2σ, 3σ - the pyramid every examiner sketches.",
              "Generate by Box-Muller (exact) or Σu - 6 (twelve uniforms, approximate).",
            ],
            callout: {
              type: "tip",
              title: "The table only knows Z",
              body: "Every normal-table lookup must pass through Z = (X - μ)/σ - examiners deduct for reading probabilities directly at X. And because normal variates extend below zero, note in one line that strictly positive quantities (service times) may prefer a lognormal or Erlang model; naming the caveat is worth a mark even when the normal was the expected answer.",
            },
            table: {
              caption: "The syllabus's three distributions at a glance.",
              headers: ["Distribution", "Form", "Mean / variance", "Typical simulation use"],
              rows: [
                ["Uniform U(a, b)", "f(x) = 1/(b - a)", "(a + b)/2 / (b - a)²/12", "generator output; rough activity times"],
                ["Exponential", "f(x) = λe^(-λx)", "1/λ / 1/λ²", "inter-arrival gaps, simple service times"],
                ["Poisson(λ)", "e^(-λ)λⁿ/n!", "λ / λ", "arrivals per interval, demand counts"],
                ["Normal(μ, σ²)", "bell density", "μ / σ²", "aggregated times and quantities"],
              ],
            },
            examQuestions: [
              {
                q: "Service times are normally distributed with mean 10 minutes and standard deviation 2 minutes. Find the probability that a service exceeds 13 minutes, and explain the empirical rule with reference to this distribution.",
                marks: 7,
                outline: [
                  "Standardize: Z = (X - μ)/σ = (13 - 10)/2 = 1.5",
                  "Table: P(Z ≤ 1.5) = 0.9332",
                  "P(X > 13) = 1 - 0.9332 = 0.0668",
                  "Empirical rule: 68% within 10 ± 2, i.e. 8-12 minutes",
                  "95% within 6-14 minutes; 99.7% within 4-16 minutes",
                  "Caveat: normal variates go negative - tiny here, note the alternative",
                ],
              },
              {
                q: "State the central limit theorem and explain why normally distributed random variables arise so often as simulation inputs. How are normal variates generated?",
                marks: 7,
                outline: [
                  "CLT: sums of many independent effects tend to normality",
                  "Aggregate quantities - total processing, demand totals - become normal",
                  "Box-Muller: two uniforms → two exact standard normals",
                  "Twelve-uniform sum minus six: CLT-based approximation",
                  "Scale and shift: X = μ + σ·Z",
                  "Caveat: negativity possible; lognormal/Erlang for positive-only data",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Simulation of Continuous Systems",
      summary:
        "Unit III makes continuous systems run on a digital computer: differential-equation models of dynamic systems, the Euler family of numerical integrators and their accuracy trade-offs, and worked systems - the pure-pursuit problem, a chemical reaction, an autopilot closing its control loop, a water reservoir - closing with the wider family of continuous models from predator-prey to epidemics.",
      chapter: {
        number: "03",
        title: "Continuous Systems - Integrating the State",
        intro:
          "Unit III covers the introduction to continuous simulation, differential equations as system models, numerical integration methods, the pure pursuit problem, simulation of a chemical reaction, autopilot simulation, and simulation of other continuous systems such as reservoirs, populations and vibrating structures.",
        inOneBreath:
          "A continuous model is a set of differential equations dx/dt = f(x, t); Euler and Runge-Kutta advance the state in steps of h, trading step size against accuracy; the same loop simulates a pursuer chasing a moving target, reactants flowing A → B → C, an autopilot closing its feedback loop, and a reservoir balancing inflow against outflow.",
        sections: [
          {
            number: "3.1",
            title: "Continuous systems and their differential equations",
            body: [
              "A continuous system is written as a set of first-order differential equations: dxᵢ/dt = fᵢ(x₁, ..., xₙ, t) for each state variable - the state vector's velocity. Newton's mechanics, chemical kinetics, population growth and circuit theory all surrender to this form; a second-order equation like a spring-mass oscillator is routinely split into two first-order equations (position and velocity). The modeller's first job is therefore not coding but translation: from the physical story to the state vector and its derivatives, with initial conditions x(0) stated.",
              "Digital simulation of such a system is a loop: set the initial state and step size h; evaluate the derivatives at the current state; advance the state one step using an integration formula; advance the clock by h; repeat until the horizon T or steady state. Euler's method is the loop in its barest form: x(t + h) = x(t) + h·f(x, t). Worked: population growth dx/dt = 0.1x from x₀ = 1000 with h = 1 gives 1100 after one step; with h = 0.1, ten steps give 1104.6 - the exact answer 1000·e^(0.1) = 1105.2 is approached as h shrinks.",
              "The exam framing is stable across decades: 'explain the simulation of continuous systems' expects (a) the differential-equation form, (b) the loop with Euler's update written explicitly, (c) a two-row worked table showing state before and after a step, and (d) one sentence on step-size error. The two-row table is the part most answers omit - and the part that earns the marks, because it demonstrates the mechanism rather than reciting it.",
            ],
            keyTerms: [
              { term: "State vector", definition: "The set of variables (x₁ ... xₙ) whose derivatives fᵢ define the continuous system." },
              { term: "Initial condition", definition: "The state x(0) from which integration starts - half the model's specification." },
              { term: "Step size h", definition: "The clock tick of continuous simulation - accuracy and stability both depend on it." },
              { term: "Euler's method", definition: "x(t + h) = x(t) + h·f(x, t) - the bare integration loop." },
            ],
            diagram: {
              kind: "flow",
              title: "The continuous-simulation loop",
              caption: "One loop, four lines - every continuous system in this unit runs on it.",
              steps: [
                { label: "Initialize", note: "state x(0), step h, horizon T" },
                { label: "Evaluate derivatives", note: "f(x, t) at the current state" },
                { label: "Advance the state", note: "Euler: x + h·f (or RK4)" },
                { label: "Advance the clock", note: "t += h" },
                { label: "Stop?", note: "t = T or steady state - else loop" },
              ],
            },
            bullets: [
              "Continuous model: dxᵢ/dt = fᵢ(x, t) for every state variable, plus x(0).",
              "Second-order systems split into two first-order equations (position, velocity).",
              "Simulation loop: evaluate f → step the state → advance the clock → repeat.",
              "Euler worked: dx/dt = 0.1x, x₀ = 1000, h = 1 → 1100; h = 0.1 → 1104.6; exact 1105.2.",
              "Step-size error shrinks with h at the integrator's order - see 3.2.",
              "The worked before/after table is the answer element examiners look for.",
            ],
            callout: {
              type: "exam",
              title: "Write the loop, then the equation, then the table",
              body: "For any continuous-system question, the scoring order is: state the differential equations and initial conditions, write the integrator's update formula, show one or two numeric steps in a small table, then comment on h. Answers that jump straight to the final value skip exactly the mechanism the examiner is marking.",
            },
            codeExample: {
              language: "python",
              caption: "euler.py - the whole method in one line",
              code: `def euler(f, x0, h, T):
    x, t, trace = x0, 0.0, [(0.0, x0)]
    while t < T:
        x = x + h * f(x, t)        # the entire method
        t += h
        trace.append((round(t, 2), round(x, 2)))
    return trace

f = lambda x, t: -0.5 * x         # dx/dt = -0.5x,  x(0) = 100
print(euler(f, 100.0, 0.5, 1.0))
# [(0.0, 100), (0.5, 75), (1.0, 56.25)] - exact at t=1 is 60.65`,
            },
            examQuestions: [
              {
                q: "Explain how a continuous system is simulated on a digital computer. Taking dx/dt = -0.5x with x(0) = 100 and h = 0.5, carry out two Euler steps and compare with the exact solution at t = 1.",
                marks: 7,
                outline: [
                  "Continuous model: dx/dt = f(x, t) with initial state",
                  "Loop: evaluate f, advance state by integrator, advance clock",
                  "Euler update: x(t + h) = x(t) + h·f(x, t)",
                  "Step 1: x(0.5) = 100 + 0.5×(-50) = 75",
                  "Step 2: x(1.0) = 75 + 0.5×(-37.5) = 56.25",
                  "Exact: 100·e^(-0.5) = 60.65 - Euler trails, error grows with h",
                ],
              },
              {
                q: "Why is the choice of step size h critical in continuous simulation? What trade-off does the modeller face?",
                marks: 7,
                outline: [
                  "Small h: truncation error shrinks, accuracy rises",
                  "Cost: more steps, longer runs, accumulated round-off",
                  "Large h: fast but inaccurate - and possibly unstable",
                  "Euler can diverge on stiff systems unless h is tiny",
                  "Practical rule: halve h and compare - if answers move materially, refine",
                  "Higher-order integrators tolerate larger h (section 3.2)",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Numerical integration - Euler, modified Euler, Runge-Kutta",
            body: [
              "Euler uses the slope at the beginning of the step for the whole interval - cheap, and optimistic on curvature, which is why its global error is of order h. Modified Euler (Heun's method) is a predictor-corrector: predict with Euler to the end of the step, evaluate the slope there, and correct using the average of the two slopes - error of order h². The Runge-Kutta fourth-order method evaluates four slopes (start, two midpoints, end), combines them with weights 1 : 2 : 2 : 1, and achieves error of order h⁴ - the default workhorse of continuous simulation packages.",
              "The order arithmetic is the exam's favourite numerical: halving h multiplies the number of steps by two, but Euler's error drops by only 2×, Heun's by 4×, RK4's by 16×. Concretely on dx/dt = -2x from x₀ = 1 over [0, 1] with h = 0.1: Euler ends near 0.107 where truth is e^(-2) = 0.135; RK4 with the same h lands on 0.1353 to four decimals. Same step budget, orders of magnitude different accuracy - the reason RK4 is written into every continuous-simulation language.",
              "There is a second axis besides accuracy: stability. For stiff systems (very different time scales in one model), explicit methods like Euler and RK4 need h small enough to track the fastest scale or they oscillate and explode; the practical defence is choosing h by trial - halve until the trajectory stops moving. The exam answer pairs the accuracy table with one stability sentence and the halving heuristic, and closes with the cost comparison: RK4 spends four derivative evaluations per step to buy back a much larger h.",
            ],
            keyTerms: [
              { term: "Modified Euler (Heun)", definition: "Predictor-corrector averaging start and end slopes - error of order h²." },
              { term: "Runge-Kutta 4", definition: "Four weighted slope evaluations per step - error of order h⁴, the standard choice." },
              { term: "Global error order", definition: "How total error scales with h: O(h) Euler, O(h²) Heun, O(h⁴) RK4." },
              { term: "Stiff system", definition: "A model mixing very fast and slow dynamics - forces tiny h in explicit integrators." },
              { term: "Convergence test", definition: "Halve h and rerun; material changes in the answer say keep refining." },
            ],
            diagram: {
              kind: "compare",
              title: "Euler vs Runge-Kutta 4",
              caption: "Same step budget, different accuracy - four slope evaluations per step buy a much larger usable h.",
              left: {
                heading: "Euler",
                items: [
                  "one slope per step (at the start)",
                  "global error of order h",
                  "cheapest per step, drifts on curvature",
                  "needs small h for stability",
                ],
              },
              right: {
                heading: "Runge-Kutta 4",
                items: [
                  "four slopes: start, two midpoints, end",
                  "global error of order h⁴ - halving h cuts error 16×",
                  "standard workhorse of simulation packages",
                  "cost: 4 derivative evaluations per step",
                ],
              },
            },
            bullets: [
              "Euler: slope at step start carried across the step; error O(h).",
              "Modified Euler: predict, re-evaluate, average the slopes; error O(h²).",
              "RK4: weighted slopes 1 : 2 : 2 : 1; error O(h⁴); four f-evaluations per step.",
              "Halving h: error × 1/2 (Euler), × 1/4 (Heun), × 1/16 (RK4).",
              "dx/dt = -2x, h = 0.1: Euler ≈ 0.107, RK4 ≈ 0.1353, exact e^(-2) = 0.1353.",
              "Stiff systems force tiny h in explicit methods - detect by halving and comparing.",
            ],
            callout: {
              type: "tip",
              title: "Halve h to test convergence",
              body: "The cheapest accuracy check in continuous simulation: run the model with h and h/2; if the reported quantities move materially, keep halving. Examiners accept this heuristic as the practical answer to 'how is h chosen?' - and it doubles as the stability test for stiff systems.",
            },
            table: {
              caption: "The integrator menu.",
              headers: ["Method", "Slopes per step", "Global error", "When to use"],
              rows: [
                ["Euler", "1", "O(h)", "quick hand calculation, teaching models"],
                ["Modified Euler (Heun)", "2", "O(h²)", "cheap improvement, smooth systems"],
                ["Runge-Kutta 4", "4", "O(h⁴)", "default in packages; tolerates larger h"],
                ["Step-halving check", "- ", "- ", "always - verify h is small enough"],
              ],
            },
            examQuestions: [
              {
                q: "Explain Euler's method, the modified Euler method and the fourth-order Runge-Kutta method. Compare their accuracies and state how the step size should be chosen.",
                marks: 7,
                outline: [
                  "Euler: x + h·f at step start; error O(h)",
                  "Modified Euler: predictor + corrector, averaged slopes; error O(h²)",
                  "RK4: four slopes weighted 1 : 2 : 2 : 1; error O(h⁴)",
                  "Halving h cuts error 2× / 4× / 16× respectively",
                  "Cost: 1 / 2 / 4 derivative evaluations per step",
                  "Choose h by halving until results stop moving; stiff systems need smaller h",
                ],
              },
              {
                q: "Solve dx/dt = -2x, x(0) = 1 by Euler's method with h = 0.1 for two steps, and comment on the accuracy compared with the exact solution.",
                marks: 7,
                outline: [
                  "Update: xᵢ₊₁ = xᵢ + h·(-2xᵢ) = xᵢ(1 - 0.2)",
                  "x(0.1) = 1 × 0.8 = 0.8",
                  "x(0.2) = 0.8 × 0.8 = 0.64",
                  "Exact: e^(-0.2) = 0.819, e^(-0.4) = 0.670",
                  "Euler under-shoots on this decay curve - error ≈ 0.02 then 0.03",
                  "Error is O(h): halving h halves it; RK4 removes nearly all of it",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "The pure pursuit problem",
            body: [
              "Pure pursuit is the syllabus's flagship continuous-system exercise: a pursuer - the classic telling has a man's dog, the modern telling a guided missile - always heads directly toward its target, while the target moves along its own path. Because the pursuer's heading is recomputed every instant, the geometry feeds back into itself, and the motion becomes a pair of coupled differential equations for the pursuer's position (x, y): dx/dt = Vp·(xT - x)/r and dy/dt = Vp·(yT - y)/r, where (xT, yT) is the target's current position and r = √((xT - x)² + (yT - y)²) is the current separation.",
              "Worked setup: pursuer starts at (10, 0) with speed Vp = 2; target starts at the origin walking up the y-axis at Vt = 1; step h = 0.1. First step: r = 10, so dx/dt = 2·(0 - 10)/10 = -2, dy/dt = 2·(0 - 0)/10 = 0 - the pursuer moves 0.2 toward the target while the target rises to (0, 0.1). Each later step the bearing tilts, the path bends, and the separation shrinks; the pursuit curve is the trace. Capture happens when r falls under a chosen radius - for a straight-moving target the analytic result is t = Vp·d/(Vp² - Vt²) = 2·10/(4 - 1) ≈ 6.67 time units, which the simulation reproduces.",
              "The exam answer is the loop, not the integral: read the target's position; compute r and the bearing; point the pursuer's velocity along the bearing; advance both trajectories by h; test for capture; repeat. One refinement worth a mark: pure pursuit aims at where the target IS, not where it will be - lead pursuit (proportional navigation) aims ahead, and is what real missile guidance uses. The distinction between the two is a standard short-note question.",
            ],
            keyTerms: [
              { term: "Pure pursuit", definition: "The pursuer always steers directly at the target's current position." },
              { term: "Pursuit curve", definition: "The traced path of the pursuer as the bearing updates every step." },
              { term: "Separation r", definition: "Instantaneous distance between pursuer and target - drives both equations and the capture test." },
              { term: "Lead pursuit", definition: "Aiming ahead of the target's current position - proportional navigation, used in real guidance." },
            ],
            diagram: {
              kind: "flow",
              title: "One step of pursuit",
              caption: "Aim at the target as it is, step both movers, test the gap - repeat until capture.",
              steps: [
                { label: "Read target position", note: "(xT, yT) from its own motion" },
                { label: "Compute separation", note: "r = √((xT - x)² + (yT - y)²)" },
                { label: "Aim the pursuer", note: "velocity Vp along the bearing to the target" },
                { label: "Step both", note: "advance pursuer and target by h" },
                { label: "Capture test", note: "r ≤ radius → stop; else loop" },
              ],
            },
            bullets: [
              "Pursuer equations: dx/dt = Vp(xT - x)/r, dy/dt = Vp(yT - y)/r.",
              "Worked: Vp = 2, Vt = 1, start (10, 0) vs origin - first step moves 0.2 toward the target.",
              "Capture for a straight-moving target: t = Vp·d/(Vp² - Vt²) = 20/3 ≈ 6.67 here.",
              "The loop: read → bearing → step both → test r → repeat.",
              "Pure pursuit aims at the present position; lead pursuit aims ahead - say which is which.",
              "Applications: missile guidance, docking, predator-prey chases, robot following.",
            ],
            callout: {
              type: "tip",
              title: "Aims at where the target IS - not where it will be",
              body: "Pure pursuit recomputes the bearing to the target's current position every step; proportional navigation leads the target instead. The one-line contrast is a frequent two-mark question attached to this problem, and it also explains why the simulated pursuit curve always bends - the pursuer is forever correcting toward a moving point.",
            },
            codeExample: {
              language: "python",
              caption: "pursuit.py - the capture loop",
              code: `import math

def pursuit(vp, vt, h=0.1, T=20.0):
    px, py, ty, t = 10.0, 0.0, 0.0, 0.0   # target walks up the y-axis
    while t < T:
        tx = 0.0
        r = math.hypot(tx - px, ty - py)
        if r < 0.5:                        # capture radius
            return t
        px += h * vp * (tx - px) / r       # aim straight at the target
        py += h * vp * (ty - py) / r
        ty += h * vt                       # target's own motion
        t += h
    return None

print(pursuit(2.0, 1.0))    # capture at about 6.7 - matches Vp*d/(Vp**2 - Vt**2)`,
            },
            examQuestions: [
              {
                q: "State and explain the pure pursuit problem. Write the differential equations for a pursuer of speed Vp chasing a target moving along the y-axis with speed Vt, and describe the simulation procedure up to capture.",
                marks: 7,
                outline: [
                  "Pursuer always heads at the target's current position",
                  "Equations: dx/dt = Vp(xT - x)/r; dy/dt = Vp(yT - y)/r",
                  "Separation r = √((xT - x)² + (yT - y)²)",
                  "Target's own motion: xT fixed, yT = Vt·t",
                  "Loop: bearing → step both by h → test r ≤ capture radius",
                  "For straight motion, t = Vp·d/(Vp² - Vt²) verifies the run",
                ],
              },
              {
                q: "A pursuer at (10, 0) with speed 2 chases a target at the origin moving up the y-axis at speed 1. Carry out the first pursuit step with h = 0.1 and explain how the pursuit curve develops.",
                marks: 7,
                outline: [
                  "Initial separation r = 10",
                  "dx/dt = 2×(0 - 10)/10 = -2; dy/dt = 0",
                  "Pursuer moves to (9.8, 0); target rises to (0, 0.1)",
                  "Next bearing tilts upward - the path bends toward the y-axis",
                  "Separation shrinks each step; capture near t ≈ 6.67",
                  "The bend is pure pursuit's signature - always correcting",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Simulation of a chemical reaction",
            body: [
              "Chemical kinetics is the cleanest industrial example of continuous simulation. For the series first-order reaction A → B → C with rate constants k₁ and k₂, mass balances give three coupled equations: dA/dt = -k₁A, dB/dt = k₁A - k₂B, dC/dt = k₂B. A disappears into B, B into C; the intermediate B rises, peaks and falls. Simple reactions have analytic solutions, but real reactors - parallel paths, temperature-dependent rates, mixing effects - generally do not, and simulation handles them all with the same stepping loop.",
              "Worked numerically with k₁ = 1 per hour, k₂ = 0.5 per hour, A₀ = 1, B₀ = C₀ = 0, h = 0.1. Step 1 (t = 0): dA/dt = -1, dB/dt = 1 - 0 = 1, dC/dt = 0 → A = 0.9, B = 0.1, C = 0. Step 2: dA/dt = -0.9, dB/dt = 0.9 - 0.05 = 0.85, dC/dt = 0.05 → A = 0.81, B = 0.185, C = 0.05. The table grows toward C → 1 as A and B vanish - and the intermediate's peak time has the closed form t* = ln(k₁/k₂)/(k₁ - k₂), here ln 2/0.5 ≈ 1.39 hours, the moment to stop a batch if B is the desired product.",
              "The exam framing mirrors the pursuit pattern: write the balance equations from the reaction diagram, run two Euler steps in a table, then answer the application question - when is the intermediate maximized, or what does doubling k₂ do to the yield? The equations-first discipline is what markers scan for: rates from the stoichiometry, then the loop, then the interpretation.",
            ],
            keyTerms: [
              { term: "Series reaction", definition: "A → B → C: reactant becomes intermediate, intermediate becomes product." },
              { term: "Rate constant (k)", definition: "The proportionality factor in a first-order rate law - units of 1/time." },
              { term: "Mass balance", definition: "The conservation equation for each species: accumulation = in - out - reaction." },
              { term: "Intermediate peak t*", definition: "t* = ln(k₁/k₂)/(k₁ - k₂) - the moment B is maximized." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The series reaction A → B → C",
              caption: "Each stage's rate law feeds the next - the pipeline is the differential-equation model.",
              stages: [
                { label: "Reactant A", note: "dA/dt = -k₁·A - drains into B" },
                { label: "Intermediate B", note: "dB/dt = k₁·A - k₂·B - rises, peaks, falls" },
                { label: "Product C", note: "dC/dt = k₂·B - accumulates toward 1" },
              ],
            },
            bullets: [
              "Model: dA/dt = -k₁A; dB/dt = k₁A - k₂B; dC/dt = k₂B.",
              "Worked (k₁ = 1, k₂ = 0.5, h = 0.1): step 1 → (0.9, 0.1, 0); step 2 → (0.81, 0.185, 0.05).",
              "B peaks at t* = ln(k₁/k₂)/(k₁ - k₂) ≈ 1.39 h here - stop the batch then for B.",
              "As t → ∞: A, B → 0 and C → 1 - a built-in accuracy check.",
              "Simulation's advantage: parallel paths and temperature-dependent rates break analytics, not the loop.",
              "Table format: t | A | B | C with one row per step - the expected answer layout.",
            ],
            callout: {
              type: "exam",
              title: "The intermediate peak is the application question",
              body: "After the two-step table, examiners typically ask when to harvest B. The answer is dB/dt = 0, giving t* = ln(k₁/k₂)/(k₁ - k₂). Deriving it from your own equations - not quoting it - is what converts a mechanics answer into an engineering one.",
            },
            table: {
              caption: "Euler steps for A → B → C (k₁ = 1, k₂ = 0.5, h = 0.1).",
              headers: ["t", "A", "B", "C", "Working"],
              rows: [
                ["0.0", "1.000", "0.000", "0.000", "initial state"],
                ["0.1", "0.900", "0.100", "0.000", "dA = -0.1; dB = +0.1; dC = 0"],
                ["0.2", "0.810", "0.185", "0.050", "dA = -0.09; dB = +0.085; dC = +0.05"],
              ],
            },
            examQuestions: [
              {
                q: "For the consecutive reaction A → B → C with rate constants k₁ and k₂ (first order), write the differential equations and simulate two steps with k₁ = 1, k₂ = 0.5, A₀ = 1 and h = 0.1. When is the concentration of B maximum?",
                marks: 7,
                outline: [
                  "Equations: dA/dt = -k₁A; dB/dt = k₁A - k₂B; dC/dt = k₂B",
                  "Step 1: A = 0.9, B = 0.1, C = 0",
                  "Step 2: A = 0.81, B = 0.185, C = 0.05",
                  "Peak of B where dB/dt = 0: k₁A = k₂B",
                  "Closed form: t* = ln(k₁/k₂)/(k₁ - k₂) = ln 2 / 0.5 ≈ 1.39 h",
                  "Interpretation: stop the batch at t* to harvest B",
                ],
              },
              {
                q: "Why is simulation preferred over analytical solution for realistic chemical reactor models? Give two features of real reactors that break the analytics.",
                marks: 7,
                outline: [
                  "Analytic solutions exist only for simple linear kinetics",
                  "Feature 1: parallel and side reactions - coupled non-linear balances",
                  "Feature 2: temperature-dependent rates (Arrhenius) coupling energy balance",
                  "Also: mixing and mass-transfer effects, non-ideal flow",
                  "Simulation keeps one loop regardless of model complexity",
                  "Validation against plant data still required (Unit V)",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Autopilot simulation - closing the control loop",
            body: [
              "An autopilot holds an aircraft's attitude by closing a feedback loop: sensors measure the pitch angle θ; a comparator forms the error e = θref - θ; the controller converts error into an elevator command δ (proportionally, δ = -Kc·e, in the simplest law); the elevator's movement perturbs the aircraft's dynamics; the dynamics change θ; and the sensor reads it again. As a differential model, the aircraft's pitch response to elevator input is a second-order equation - T²θ″ + 2ζTθ′ + θ = K·δ - which splits into two first-order equations for the simulation loop.",
              "Worked with a proportional plant θ″ = -4θ′ - 20(θ - θref), reference θref = 5°, initial θ = θ′ = 0, h = 0.1. Step 1: θ″ = -0 - 20(0 - 5) = 100 → θ′ = 10, θ stays 0. Step 2: θ″ = -40 + 100 = 60 → θ′ = 16, θ = 1.0. The angle climbs toward the reference, overshoots if the gain Kc is high, and settles if it is moderate - the simulation's plot of θ against t is the response curve control engineers tune with.",
              "The exam points are three. One: the loop is a cycle - sense, compare, command, actuate, dynamics, back to sense - and drawing it is half the answer. Two: simulation's role is gain tuning without flight test - try Kc values, watch overshoot and settling, pick the compromise before a real aircraft flies. Three: stability is the warning - too high a gain makes the loop oscillate or diverge, and the simulated crash costs nothing while the real one would not.",
            ],
            keyTerms: [
              { term: "Feedback loop", definition: "Measure → compare with reference → command → actuate → dynamics → measure, cycling." },
              { term: "Error signal", definition: "e = θref - θ - the difference the controller works to eliminate." },
              { term: "Proportional control", definition: "Command proportional to error: δ = -Kc·e; gain Kc sets aggressiveness." },
              { term: "Overshoot / settling", definition: "How far the response passes the target and how long it takes to stay there - the tuning metrics." },
            ],
            diagram: {
              kind: "cycle",
              title: "The autopilot feedback loop",
              caption: "The controller never rests: sense, compare, command, actuate - and the aircraft answers.",
              steps: [
                { label: "Sense", note: "measure attitude θ" },
                { label: "Compare", note: "error e = θref - θ" },
                { label: "Command", note: "δ = -Kc·e (proportional law)" },
                { label: "Actuate", note: "elevator moves by δ" },
                { label: "Dynamics", note: "aircraft pitch responds; θ changes" },
              ],
            },
            bullets: [
              "Loop: sense θ → error e = θref - θ → command δ = -Kc·e → actuate → dynamics.",
              "Plant model: second-order pitch dynamics split into two first-order ODEs.",
              "Worked (θref = 5°, h = 0.1): step 1 → θ′ = 10; step 2 → θ′ = 16, θ = 1.0.",
              "High gain: fast but overshooting, possibly oscillatory - stability risk.",
              "Low gain: sluggish settling - the tuning compromise simulation reveals cheaply.",
              "Same pattern serves cruise control, thermostat, and robot joint control.",
            ],
            callout: {
              type: "warning",
              title: "Gain tuning is a stability question",
              body: "Raising Kc speeds the response but invites overshoot and oscillation; push it far enough and the loop diverges. Simulation lets engineers crash on paper - trying gains that would be reckless in flight test. Say this sentence in the exam: it connects the mathematics to why autopilot simulation exists as a syllabus topic at all.",
            },
            codeExample: {
              language: "python",
              caption: "autopilot.py - stepping the closed loop",
              code: `def autopilot(h=0.1, T=3.0, ref=5.0):
    theta, dtheta, t = 0.0, 0.0, 0.0
    while t < T:
        dd = -4.0 * dtheta - 20.0 * (theta - ref)  # plant + P-controller
        dtheta += h * dd
        theta += h * dtheta
        t += h
    return round(theta, 3)

print(autopilot())   # settles toward the 5-degree reference
# raise the gain (20 -> 60) and watch overshoot grow in the trace`,
            },
            examQuestions: [
              {
                q: "Explain the simulation of an autopilot with the help of the feedback loop. Write the model equations for proportional control and describe how the response to a step change in the reference is studied.",
                marks: 7,
                outline: [
                  "Loop: sense θ → compare → command δ → actuate → dynamics → sense",
                  "Error: e = θref - θ; proportional law δ = -Kc·e",
                  "Plant: second-order pitch dynamics θ″ = -aθ′ - b(θ - θref)",
                  "Split into two first-order ODEs for the simulation loop",
                  "Step response: run from θ = 0 with θref = 5, plot θ(t)",
                  "Tune Kc: overshoot and settling time trade off; instability at high gain",
                ],
              },
              {
                q: "Why is simulation especially valuable for control-system design? Answer with reference to autopilot gain tuning.",
                marks: 7,
                outline: [
                  "Gain choices are dangerous to test on real aircraft",
                  "Simulation replays step responses for any gain in seconds",
                  "Overshoot, settling time and instability visible before flight",
                  "Failed designs cost nothing on paper",
                  "Validated model + tuned gain = confident flight test",
                  "Same argument for cruise control, reactors, robots",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Simulation of a water reservoir",
            body: [
              "A reservoir is the classic water-resource continuous system: storage S(t) changes by the balance dS/dt = I(t) - O(t) - E(t), where I(t) is inflow (stream, rainfall), O(t) the controlled outflow through gates and turbines, and E(t) evaporation loss. Outflow is a function of level - O = c·√S is the standard orifice law - and the simulation steps the balance forward: S(t + h) = S(t) + h·[I(t) - O(S(t))]. Worked: S₀ = 100 units, I = 12 per day, O = 10 per day, h = 1 day - S₁ = 102, S₂ = 104; if capacity 110 is crossed, the spillway rule opens and O jumps.",
              "What makes the reservoir pedagogically special is that it is a hybrid: the dynamics are continuous, but the inflow is stochastic - stream flows are modelled with random (often gamma-distributed) variations around a seasonal mean. So the model couples Unit II's random numbers with Unit III's integrator: each run draws an inflow sequence, integrates the balance, and reports whether the reservoir spilled, starved, or held - over a simulated season, in seconds.",
              "The exam framing: write the mass-balance equation, state each term's physical meaning, work two steps of the arithmetic, then discuss the purpose - sizing the dam, testing release policies ('what if irrigation gets priority in March?'), flood-rule design. The policy questions are where simulation beats analytics: release rules are nonlinear, seasonal and interactive, and no formula returns their consequences - but one run of the loop does.",
            ],
            keyTerms: [
              { term: "Mass balance", definition: "dS/dt = I(t) - O(t) - E(t): storage changes by inflow minus outflow minus evaporation." },
              { term: "Storage S(t)", definition: "The state variable - water volume held behind the dam." },
              { term: "Stochastic inflow", definition: "Random stream flow around a seasonal mean - often gamma-distributed." },
              { term: "Release policy", definition: "The rule deciding outflow from level and season - the thing simulation tests." },
            ],
            diagram: {
              kind: "matrix",
              title: "Reservoir operating quadrants",
              caption: "The release policy is a rule over inflow and storage - exactly what simulation stress-tests.",
              axes: { x: "Inflow (dry → heavy)", y: "Storage level (low → high)" },
              quadrants: [
                { label: "Hold and watch", note: "light inflow, high storage - monitor the level" },
                { label: "Spillway open", note: "heavy inflow, high storage - flood-control release" },
                { label: "Drought conserve", note: "dry and low - minimum releases, protect supply" },
                { label: "Fill normally", note: "heavy inflow, low storage - capture, normal releases" },
              ],
            },
            bullets: [
              "State equation: dS/dt = I(t) - O(t) - E(t); outflow O = c·√S for a gate orifice.",
              "Worked: S₀ = 100, I = 12/day, O = 10/day, h = 1 → S₁ = 102, S₂ = 104.",
              "Capacity crossing triggers the spillway rule - a discrete event on a continuous state.",
              "Inflow is stochastic: each run draws a random stream sequence (gamma around seasonal mean).",
              "Purposes: dam sizing, release-policy what-ifs, flood-rule design.",
              "Hybrid nature: continuous dynamics + random inputs + threshold events.",
            ],
            callout: {
              type: "tip",
              title: "A hybrid hiding in plain sight",
              body: "The reservoir is the exam's favourite example that continuous simulation can still be stochastic: continuous integration for the water balance, Unit II random numbers for the inflow, and a threshold (capacity) acting as an event. Naming all three ingredients explicitly is the complete answer - most students give only the equation.",
            },
            table: {
              caption: "Reservoir model ingredients and their roles.",
              headers: ["Ingredient", "Model form", "Source of values"],
              rows: [
                ["Storage S(t)", "state variable, integrated", "initial survey + balance"],
                ["Inflow I(t)", "stochastic time series", "historical stream records fitted to a distribution"],
                ["Outflow O(t)", "function of level + policy", "gate law c·√S and release rules"],
                ["Evaporation E(t)", "rate loss", "climate data"],
                ["Capacity rule", "threshold event", "dam specification"],
              ],
            },
            examQuestions: [
              {
                q: "Write the mass-balance model of a water reservoir and explain each term. With S₀ = 100, inflow 12 per day and outflow 10 per day, advance the storage for two daily steps of h = 1. Why is such a model often called stochastic-continuous?",
                marks: 7,
                outline: [
                  "dS/dt = I(t) - O(t) - E(t); state = storage",
                  "Inflow: stream input; outflow: controlled release; E: evaporation",
                  "Step 1: S = 100 + (12 - 10)×1 = 102",
                  "Step 2: S = 104",
                  "Inflow is random (gamma around seasonal mean) - stochastic input",
                  "Dynamics are integrated continuously - hybrid simulation",
                ],
              },
              {
                q: "How does reservoir simulation support dam design and release-policy decisions? Give two what-if questions it can answer.",
                marks: 7,
                outline: [
                  "Seasons replayed in seconds across many random inflow sequences",
                  "Statistics of spilling, shortage and level - per policy",
                  "What-if 1: irrigation priority in March - famine or flood risk?",
                  "What-if 2: capacity raised by 20% - how often does spillway still open?",
                  "Nonlinear seasonal rules defeat closed-form analysis",
                  "Validation against historical operation closes the loop",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Other continuous systems - populations, structures, heat, epidemics",
            body: [
              "The same integration loop covers the rest of the continuous family. Population dynamics: the Lotka-Volterra predator-prey pair dx/dt = αx - βxy and dy/dt = δxy - γy produces the famous oscillation - prey bloom, predator boom, prey crash, predator bust - and simulation traces the cycle from any starting point. Vibrating structures: the spring-mass oscillator m·x″ + c·x′ + k·x = F(t) splits into two first-order equations and reports natural frequency and damping from the simulated trace.",
              "Heat and epidemics complete the set. Newton's law of cooling, dT/dt = -k(T - Tambient), is the one-equation warm-up example every textbook starts with; conduction through a solid extends to partial differential equations, discretized into many coupled ODEs per cell. The epidemic SIR model - dS/dt = -βSI, dI/dt = βSI - γI, dR/dt = γI - shows how a threshold (the reproduction number) decides between die-out and outbreak, a question modern events made famous.",
              "The exam expects recognition plus one worked line each: name the system, write its equations, identify the state variables, and state what the simulation reports (oscillation period, resonance, cooling time, outbreak threshold). The unifying sentence closes the unit: every continuous system in the syllabus is dx/dt = f(x) plus an integrator - the applications differ, the machinery never does.",
            ],
            keyTerms: [
              { term: "Lotka-Volterra", definition: "Predator-prey equations producing coupled population oscillations." },
              { term: "Spring-mass oscillator", definition: "m·x″ + c·x′ + k·x = F - vibration model split into two first-order ODEs." },
              { term: "Newton's law of cooling", definition: "dT/dt = -k(T - T ambient) - the minimal continuous-simulation example." },
              { term: "SIR model", definition: "Susceptible-Infectious-Recovered compartment equations for epidemics." },
            ],
            diagram: {
              kind: "fork",
              title: "Which continuous model fits the system?",
              caption: "Different stories, identical machinery - dx/dt = f(x) and an integrator.",
              start: "A continuous system to model",
              branches: [
                { label: "Competing populations", outcome: "Lotka-Volterra pair - oscillating prey and predator", good: true },
                { label: "Vibrations / structures", outcome: "spring-mass second-order ODE - frequency and damping", good: true },
                { label: "Heat and cooling", outcome: "Newton's cooling law; conduction as coupled cell equations", good: true },
                { label: "Epidemics", outcome: "SIR compartments - threshold decides outbreak", good: true },
              ],
            },
            bullets: [
              "Predator-prey: dx/dt = αx - βxy, dy/dt = δxy - γy - oscillation from any start.",
              "Spring-mass: m·x″ + c·x′ + k·x = F - split into position and velocity ODEs.",
              "Cooling: dT/dt = -k(T - Tamb) - the one-line warm-up model.",
              "SIR: thresholds (reproduction number) decide outbreak vs die-out.",
              "Each reports a different quantity: period, resonance, cooling time, epidemic peak.",
              "Unifying sentence: every continuous system is dx/dt = f(x) plus the integrator loop.",
            ],
            callout: {
              type: "exam",
              title: "One loop, many names",
              body: "Short-note questions on 'simulation of other continuous systems' reward the pattern, not the biology: for each system write the equations, name the state variables, and say what the run reports. Adding the closing line - the machinery is always the Unit III loop - signals command of the unit rather than memorized examples.",
            },
            codeExample: {
              language: "python",
              caption: "predator_prey.py - Lotka-Volterra on the same loop",
              code: `def lotka_volterra(h=0.01, T=30.0):
    x, y = 40.0, 4.0            # prey, predator
    trace = []
    for i in range(int(T / h)):
        dx = 0.5 * x - 0.02 * x * y      # prey: grow, get eaten
        dy = -0.9 * y + 0.01 * x * y     # predator: starve, hunt
        x, y = x + h * dx, y + h * dy
        if i % 100 == 0:
            trace.append((round(i * h, 1), round(x, 1), round(y, 1)))
    return trace

# prey and predator counts rise and fall in a cycle - the classic trace`,
            },
            examQuestions: [
              {
                q: "Write short notes on the simulation of any two: (a) predator-prey population dynamics, (b) a spring-mass vibrating system, (c) Newton's law of cooling, (d) the SIR epidemic model.",
                marks: 7,
                outline: [
                  "For each: equations, state variables, what the run reports",
                  "(a) dx/dt = αx - βxy, dy/dt = δxy - γy - oscillations",
                  "(b) m·x″ + c·x′ + k·x = F - split into two first-order ODEs",
                  "(c) dT/dt = -k(T - Tamb) - exponential approach to ambient",
                  "(d) SIR compartments - reproduction number decides outbreak",
                  "All solved by the same Euler/RK loop of Unit III",
                ],
              },
              {
                q: "A spring-mass system obeys m·x″ + c·x′ + k·x = 0. Show how it is prepared for digital simulation and what quantities the simulation reports.",
                marks: 7,
                outline: [
                  "Split: v = x′, then x′ = v and v′ = (-c·v - k·x)/m",
                  "State vector (x, v) with initial displacement and velocity",
                  "Integrate with Euler or RK4 in steps of h",
                  "Trace x(t) shows oscillation decaying when c > 0",
                  "Reports: natural frequency, damping rate, time to settle",
                  "Resonance visible when driven by F(t) at the natural frequency",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Simulation of Discrete Systems",
      summary:
        "Unit IV turns to events: how arrival patterns and service times are patterned and fed into models, the anatomy of a discrete-event simulation with its future event list, the M/M/1 queue solved in closed form and simulated by hand, the estimation of performance measures from runs, and elementary queue networks with particular emphasis on the computer-system environment.",
      chapter: {
        number: "04",
        title: "Discrete Systems - Queues and Events",
        intro:
          "Unit IV covers the mechanics of discrete-event simulation, arrival patterns and service times, the M/M/1 queueing model with its steady-state formulas, a hand-worked simulation table, networks of queues with emphasis on computer systems, and the performance measures estimated from simulation runs.",
        inOneBreath:
          "Discrete simulation advances the clock to the next event; arrivals come at rate λ and services take mean 1/μ; M/M/1 yields ρ = λ/μ, P₀ = 1 - ρ, L = λ/(μ - λ) and Little's law L = λW; a hand-run event table estimates the same numbers empirically; networks chain queues through traffic equations, with CPU-and-disk circulation as the canonical computer-system model.",
        sections: [
          {
            number: "4.1",
            title: "The mechanics of discrete-event simulation",
            body: [
              "A discrete-event simulator is assembled from a fixed kit: the system state variables; the simulation clock; the future event list (FEL) - events scheduled with their times, kept sorted, earliest first; event routines that execute each event type; entities carrying attributes; lists holding queues; an initialization routine; statistics counters; and a report generator. The heart is the next-event time advance: pop the earliest event from the FEL, jump the clock straight to its time, execute it (updating state, statistics, and possibly scheduling new events), and repeat until a stopping rule fires - a horizon T or a count of processed entities.",
              "The elegance is efficiency: between events nothing happens, so the simulator skips all idle time. A day of bank operation with 400 events consumes 400 steps, not 86,400 seconds of ticks - the contrast with continuous simulation's fixed-step clock is the standard essay question. The cost is bookkeeping: every state change must be tied to an event, and statistics must be collected at event times - most simulation bugs are bookkeeping bugs, which is why Unit V's verification toolkit exists.",
              "Two worldviews organize the coding. Event-scheduling (the hand-simulation style of section 4.4) thinks in events and their routines; process-interaction (GPSS, and packages like Arena) thinks in entity life cycles - a customer's whole path from arrival to departure written as one process, with the engine suspending and resuming processes as delays occur. Both compile down to the same FEL mechanics, and knowing both lets you read any simulator's manual in minutes.",
            ],
            keyTerms: [
              { term: "Future event list (FEL)", definition: "Time-ordered list of scheduled events; the simulator always executes its head." },
              { term: "Next-event time advance", definition: "Jump the clock to the next scheduled event, skipping idle time entirely." },
              { term: "Event routine", definition: "The code executed when an event fires - updates state, statistics, and schedules successors." },
              { term: "Process-interaction worldview", definition: "Modelling each entity's full life cycle as a suspendable process (GPSS style)." },
              { term: "Stopping rule", definition: "The condition ending the run - a horizon T or a count of completed entities." },
            ],
            diagram: {
              kind: "flow",
              title: "Next-event time advance",
              caption: "The loop that runs every discrete simulator - and every hand-simulation table.",
              steps: [
                { label: "Initialize", note: "clock 0 · state · FEL · counters" },
                { label: "Pop earliest event", note: "head of the future event list" },
                { label: "Advance clock", note: "leap to the event's time" },
                { label: "Execute", note: "update state + statistics" },
                { label: "Schedule successors", note: "new events pushed into the FEL" },
                { label: "Stop?", note: "horizon or count reached - else loop" },
              ],
            },
            bullets: [
              "Kit: state variables, clock, FEL, event routines, queues, counters, report.",
              "Next-event advance: pop → leap clock → execute → schedule → repeat.",
              "Idle time is skipped: 400 events simulate a day, not 86,400 ticks.",
              "Statistics are collected at event times - the bookkeeping is the risk.",
              "Event-scheduling vs process-interaction: two worldviews, one FEL underneath.",
              "GPSS (Unit V) is the process view made concrete.",
            ],
            callout: {
              type: "tip",
              title: "The clock skips idle time",
              body: "The one-sentence essence of discrete simulation: nothing happens between events, so the clock never visits the gaps. It explains both the efficiency (a day in 400 steps) and the discipline (all state changes must ride on events). Examiners ask the efficiency contrast with continuous simulation almost every year.",
            },
            codeExample: {
              language: "python",
              caption: "event_loop.py - the skeleton every simulator shares",
              code: `import heapq

def event_loop(events):
    """events: (time, description) - the FEL drives everything."""
    fel = sorted(events)                 # future event list, time-ordered
    clock = 0.0
    while fel:
        when, what = heapq.heappop(fel)  # 1. remove earliest event
        clock = when                     # 2. leap the clock - idle skipped
        print(clock, what)               # 3. execute: state + statistics
        # 4. executing may schedule successors:
        #    heapq.heappush(fel, (clock + delay, "departure"))

event_loop([(0.0, "C1 arrives"), (2.0, "C2 arrives"), (3.0, "C1 departs")])`,
            },
            examQuestions: [
              {
                q: "Describe the components of a discrete-event simulation and explain the next-event time-advance mechanism. How does it differ from the fixed-step clock of continuous simulation?",
                marks: 7,
                outline: [
                  "Components: state, clock, FEL, event routines, queues, counters, report",
                  "Mechanism: pop earliest event → leap clock → execute → schedule successors",
                  "Idle time skipped: state changes only at event times",
                  "Efficiency: a day of events in hundreds of steps",
                  "Contrast: continuous clock ticks every h and integrates every tick",
                  "Bookkeeping discipline: all changes ride on events",
                ],
              },
              {
                q: "Compare the event-scheduling and process-interaction worldviews of discrete simulation. Give one language exemplifying each.",
                marks: 7,
                outline: [
                  "Event-scheduling: think in events and their routines (hand tables)",
                  "Process-interaction: think in entity life cycles, suspendable processes",
                  "Both compile to the same FEL mechanics",
                  "Process view matches human description of customer paths",
                  "Event view matches direct algorithmic control",
                  "Exemplars: hand/simscript-style event code vs GPSS/Arena processes",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Arrival patterns and service times",
            body: [
              "Every queueing model is specified by two random inputs. The arrival pattern is the distribution of inter-arrival times - most commonly exponential (Poisson arrivals) with mean 1/λ, sometimes scheduled or batched, occasionally peaked; behind it sit the population questions (finite or infinite source?) and the behaviours balking (leaving on seeing a long queue), reneging (abandoning after waiting) and jockeying (switching lines). The service mechanism is the distribution of service times - exponential with mean 1/μ (random work), constant (machine cycle), Erlang-k (multi-phase work), or an empirical histogram when data refuses to fit a shape - together with the number of servers and the queue discipline (FCFS default).",
              "Worked numbers for the running example: arrivals at λ = 20 per hour give mean inter-arrival 3 minutes; service at μ = 30 per hour gives mean service 2 minutes; the traffic intensity ρ = λ/μ = 2/3 predicts a busy server two-thirds of the time. In simulation these inputs arrive as uniform streams transformed by Unit II: each gap is -ln(u)/λ, each service drawn from its fitted distribution - which is why the syllabus teaches probability before queues.",
              "The exam's discriminating point is the warning: service times are often NOT exponential. Machine processing is nearly constant; human service with setup is Erlang; only genuinely random work is exponential - and assuming the wrong shape distorts every downstream number. The safe practice is stated in one line: collect data first, fit or histogram it, and generate from what the data says - the empirical distribution is always a legitimate model.",
            ],
            keyTerms: [
              { term: "Inter-arrival time", definition: "Gap between consecutive arrivals - exponential with mean 1/λ under Poisson arrivals." },
              { term: "Service time distribution", definition: "The work-time law: exponential, constant, Erlang-k, or empirical." },
              { term: "Traffic intensity ρ", definition: "ρ = λ/μ - the fraction of server capacity demanded; ρ ≥ 1 means the queue never drains." },
              { term: "Balking / reneging", definition: "Refusing to join a long queue / abandoning it after waiting." },
              { term: "Queue discipline", definition: "The selection rule - FCFS, LIFO, priority, SIRO." },
            ],
            diagram: {
              kind: "compare",
              title: "The two random inputs of every queue",
              caption: "Arrivals and service: two streams of random numbers, each with its own shape and traps.",
              left: {
                heading: "Arrival pattern",
                items: [
                  "inter-arrival distribution - often exponential",
                  "rate λ; mean gap 1/λ",
                  "population: finite or infinite source",
                  "behaviours: balking, reneging, jockeying",
                ],
              },
              right: {
                heading: "Service mechanism",
                items: [
                  "service-time distribution - exp / constant / Erlang",
                  "rate μ per server; mean work 1/μ",
                  "number of servers c",
                  "discipline: FCFS, priority, LIFO",
                ],
              },
            },
            bullets: [
              "Two inputs specify a queue: arrival pattern + service mechanism.",
              "Worked: λ = 20/hr → gap mean 3 min; μ = 30/hr → service mean 2 min; ρ = 2/3.",
              "Arrival-side behaviours: balking, reneging, jockeying - name them when relevant.",
              "Service shapes: exponential (random work), constant (machine), Erlang-k (phases), empirical.",
              "Inputs are generated from uniforms by Unit II's techniques.",
              "Warning: service times are often not exponential - fit the data first.",
            ],
            callout: {
              type: "warning",
              title: "Service times are often NOT exponential",
              body: "The exponential is the arrivals' distribution by convention, but blindly lending it to service times misprices congestion - a constant-service queue behaves very differently from an exponential one at the same means. Measure first, fit second, generate third. In exams, noting this earns the interpretation mark; in practice, it saves a wrong design.",
            },
            table: {
              caption: "Input patterns and their generators.",
              headers: ["Pattern", "Typical source", "Generation from u ~ U(0, 1)"],
              rows: [
                ["Poisson arrivals", "walk-in customers, packet traffic", "gap = -ln(u)/λ"],
                ["Constant service", "machine cycle, fixed task", "deterministic - no draw needed"],
                ["Erlang-k service", "multi-phase human/machine work", "sum of k exponential draws"],
                ["Empirical service", "measured histogram", "inverse transform over the cumulative table"],
                ["Batch arrivals", "bus arrivals, file uploads", "group size drawn, then per-member gaps"],
              ],
            },
            examQuestions: [
              {
                q: "Explain arrival patterns and service times in the simulation of queueing systems. Illustrate with a system having Poisson arrivals at 20 per hour and exponential service at 30 per hour, computing the mean inter-arrival time, mean service time and traffic intensity.",
                marks: 7,
                outline: [
                  "Arrival pattern: distribution of gaps - Poisson/exponential here",
                  "Mean inter-arrival = 1/λ = 3 minutes",
                  "Service mechanism: exponential with mean 1/μ = 2 minutes",
                  "Traffic intensity ρ = λ/μ = 20/30 = 2/3",
                  "Interpretation: server busy two-thirds of the time - stable queue",
                  "Generation: gaps via -ln(u)/λ, services likewise from fresh uniforms",
                ],
              },
              {
                q: "Define balking, reneging and jockeying. How do queue disciplines such as FCFS, priority and LIFO change a simulation model?",
                marks: 7,
                outline: [
                  "Balking: leave on seeing queue length",
                  "Reneging: abandon after waiting some time",
                  "Jockeying: switch between parallel lines",
                  "Discipline selects who is served next - FCFS default",
                  "Priority changes waiting-time profile by class",
                  "Each behaviour is extra event logic in the simulator",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "The M/M/1 queue in closed form",
            body: [
              "Kendall's notation A/B/c names a queue by its arrival process, service distribution and server count; M/M/1 means Markovian (Poisson) arrivals, Markovian (exponential) service, one server - with FCFS discipline and infinite capacity assumed. It is the one queue with a full closed-form solution, and every formula hangs on one number: the traffic intensity ρ = λ/μ. Stability demands ρ < 1 - demand must not exceed capacity, or the queue grows without bound.",
              "The steady-state results, in the order examiners expect: P₀ = 1 - ρ (the server idles that fraction); Pₙ = ρⁿ(1 - ρ) (probability of n in the system); the mean number in the system L = ρ/(1 - ρ) = λ/(μ - λ); the mean queue length Lq = ρ²/(1 - ρ); the mean times follow by Little's law L = λ·W and Lq = λ·Wq, giving W = 1/(μ - λ) and Wq = λ/(μ(μ - λ)). Worked completely for λ = 9 and μ = 10 per hour: ρ = 0.9; P₀ = 0.1; L = 9/(10 - 9) = 9 customers; Lq = 0.81/0.1 = 8.1; W = 1 hour; Wq = 0.9 hour - a heavily loaded system where customers spend 90% of their stay waiting.",
              "The exam craft is order and cross-check. Write ρ first and test stability; derive P₀ = 1 - ρ; then L, Lq, W, Wq; finish by verifying Little's law - L = λW = 9×1 = 9, Lq = λWq = 9×0.9 = 8.1 - which catches arithmetic slips and earns the structure mark. And connect to simulation: these closed forms are exactly what the hand simulation of section 4.4 estimates empirically - theory validates the simulator, the simulator extends theory to queues without formulas (M/G/1 networks, priorities).",
            ],
            keyTerms: [
              { term: "Kendall notation A/B/c", definition: "Arrival process / service distribution / server count - M = Markovian (exponential)." },
              { term: "Traffic intensity ρ", definition: "λ/μ - utilization and the stability test: ρ < 1 required." },
              { term: "Little's law", definition: "L = λ·W and Lq = λ·Wq - throughput links populations and times in any stable queue." },
              { term: "Steady state", definition: "Long-run behaviour after transients die - the regime all M/M/1 formulas describe." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The M/M/1 schematic",
              caption: "One infinite buffer, one exponential server - the simplest queue with a complete formula set.",
              stages: [
                { label: "Arrivals", note: "Poisson at rate λ - gaps Exp(1/λ)" },
                { label: "Waiting line", note: "infinite buffer · FCFS discipline" },
                { label: "Server", note: "exponential service at rate μ" },
                { label: "Departures", note: "back to the world - throughput λ in steady state" },
              ],
            },
            bullets: [
              "M/M/1: Poisson arrivals, exponential service, one server, FCFS, infinite capacity.",
              "Stability: ρ = λ/μ < 1 - check before any formula.",
              "P₀ = 1 - ρ; Pₙ = ρⁿ(1 - ρ).",
              "L = λ/(μ - λ); Lq = λ²/(μ(μ - λ)) = ρ²/(1 - ρ).",
              "W = 1/(μ - λ); Wq = λ/(μ(μ - λ)); verify with Little's law L = λW.",
              "Worked (λ = 9, μ = 10): ρ = 0.9, P₀ = 0.1, L = 9, Lq = 8.1, W = 1 h, Wq = 0.9 h.",
            ],
            callout: {
              type: "exam",
              title: "Write ρ first - every formula hangs on it",
              body: "Examiners mark the sequence: ρ and the stability test, then P₀ = 1 - ρ, then L and Lq, then W and Wq via Little's law. Skipping the stability test is the classic lost mark; quoting Little's law as a cross-check at the end is the classic gained one. The formulas are worth little without that skeleton.",
            },
            table: {
              caption: "M/M/1 formula sheet (ρ = λ/μ < 1).",
              headers: ["Quantity", "Formula", "Meaning", "λ = 9, μ = 10"],
              rows: [
                ["ρ", "λ/μ", "utilization", "0.9"],
                ["P₀", "1 - ρ", "server idle fraction", "0.1"],
                ["Pₙ", "ρⁿ(1 - ρ)", "probability of n in system", "P₂ = 0.073"],
                ["L", "λ/(μ - λ)", "mean number in system", "9.0"],
                ["Lq", "λ²/(μ(μ - λ))", "mean number waiting", "8.1"],
                ["W", "1/(μ - λ)", "mean time in system", "1.0 h"],
                ["Wq", "λ/(μ(μ - λ))", "mean waiting time", "0.9 h"],
              ],
            },
            examQuestions: [
              {
                q: "For an M/M/1 queueing system with arrival rate λ = 9 per hour and service rate μ = 10 per hour, find the utilization, the probability that the system is empty, the mean number in the system and in the queue, and the mean times in system and in queue. Verify your results using Little's law.",
                marks: 14,
                outline: [
                  "Model: Poisson arrivals, exponential service, one server (M/M/1)",
                  "ρ = λ/μ = 0.9 < 1 - stable",
                  "P₀ = 1 - ρ = 0.1",
                  "L = λ/(μ - λ) = 9/(10 - 9) = 9 customers",
                  "Lq = λ²/(μ(μ - λ)) = 81/10 = 8.1 customers",
                  "W = 1/(μ - λ) = 1 hour; Wq = λ/(μ(μ - λ)) = 0.9 hour",
                  "Little's law: L = λW = 9×1 = 9; Lq = λWq = 9×0.9 = 8.1 - verified",
                ],
              },
              {
                q: "Explain Kendall's notation and the assumptions of the M/M/1 model. Why does the condition ρ < 1 matter, and what happens to L as ρ → 1?",
                marks: 7,
                outline: [
                  "A/B/c: arrival process / service law / server count",
                  "M/M/1: Markovian arrivals and service, one server, FCFS, infinite capacity",
                  "ρ = λ/μ is demand as a fraction of capacity",
                  "ρ ≥ 1: arrivals outrun service - queue grows without bound",
                  "L = ρ/(1 - ρ) → ∞ as ρ → 1 - congestion explodes non-linearly",
                  "Design lesson: keep ρ comfortably below 1; 0.9 already hurts",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Simulating the single-server queue by hand",
            body: [
              "Hand simulation is the exam's numerical centrepiece: run the next-event loop on paper with a table whose columns are clock time, event, queue length, server status, and the pending events, plus statistics updated as you go. Setup for the running example: inter-arrival gaps 2, 4, 2, 4, 2 minutes; service times 3, 2, 4, 3, 2; first customer arrives at t = 0. The event chain: C1 arrives at 0 and starts service; C2 arrives at 2 and waits; C1 departs at 3 and C2 starts; C2 departs at 5 - server idle; C3 arrives at 6 and starts; C4 arrives at 8 and waits; C3 departs at 10, C4 starts; C5 arrives at 12 and waits; C4 departs at 13, C5 starts.",
              "Statistics fall out of the table. Waits: C1 = 0, C2 = 1, C3 = 0, C4 = 2, C5 = 1 - mean wait 0.8 minutes. Utilization: the server was busy 3 + 2 + 4 + 3 = 12 of the first 13 minutes - 0.92. Time-average queue length: the queue held 1 customer during [2, 3), [8, 10) and [12, 13) - total 4 customer-minutes over 13 - Lq = 4/13 ≈ 0.31. Each statistic is a different estimator: entity-average (waits), server-centred (busy fraction), time-weighted (Lq) - and naming which is which is itself examinable.",
              "The craft rules: process exactly one event per row; keep the pending-events column current (next arrival, possible departure); never let the clock move backward; and stop at the stated rule. Most lost marks are bookkeeping - a departure executed before a simultaneous arrival, or a wait counted from enqueue rather than service-start. The table itself is the answer: examiners read it row by row, so label the columns and show the arithmetic under the table.",
            ],
            keyTerms: [
              { term: "Simulation table", definition: "The row-per-event record of clock, event, state and pending events - the hand-run's core artefact." },
              { term: "Entity-average statistic", definition: "Mean over customers - e.g. mean wait = average of per-customer waits." },
              { term: "Time-weighted statistic", definition: "Average over the clock - e.g. Lq = ∫ Q(t) dt / T." },
              { term: "Busy fraction", definition: "Server-busy time divided by elapsed time - the utilization estimate." },
            ],
            diagram: {
              kind: "cycle",
              title: "The two-event loop of a queue run",
              caption: "Only two event types exist - arrivals and departures - and the clock cycles between them.",
              steps: [
                { label: "Next event", note: "earlier of next arrival / next departure" },
                { label: "Arrival branch", note: "enqueue; start service if idle; schedule next arrival" },
                { label: "Departure branch", note: "free server; start next service if queue non-empty" },
                { label: "Update statistics", note: "waits · busy time · time-weighted Lq" },
                { label: "Loop", note: "until the stopping rule fires" },
              ],
            },
            bullets: [
              "Table columns: clock | event | queue | server | pending events | statistics.",
              "Running example: gaps 2, 4, 2, 4, 2; services 3, 2, 4, 3, 2.",
              "Waits: 0, 1, 0, 2, 1 → mean wait 0.8 min (entity-average).",
              "Busy 12 of 13 minutes → utilization 0.92 (server-centred).",
              "Queue held 1 during 4 minutes total → Lq = 4/13 ≈ 0.31 (time-weighted).",
              "Craft: one event per row, pending column current, clock never moves backward.",
            ],
            callout: {
              type: "tip",
              title: "Keep a four-column event table",
              body: "The single habit that survives any hand-simulation numerical: columns for clock, event, state (queue + server), and pending events. Every exam question of this type is solved by filling that table row by row - and every marking scheme awards the rows. Do the statistics under the table, not inside it.",
            },
            table: {
              caption: "Hand simulation - gaps 2, 4, 2, 4, 2; services 3, 2, 4, 3, 2.",
              headers: ["Clock", "Event", "Queue after", "Server", "Notes / statistics"],
              rows: [
                ["0", "C1 arrives", "0", "busy till 3", "next arrival scheduled at 2"],
                ["2", "C2 arrives", "1", "busy", "C2 waits - wait timer starts"],
                ["3", "C1 departs", "0", "busy till 5 (C2)", "C1 wait = 0"],
                ["5", "C2 departs", "0", "idle", "C2 wait = 1; next arrival at 6"],
                ["6", "C3 arrives", "0", "busy till 10", "server was idle in [5, 6)"],
                ["8", "C4 arrives", "1", "busy", "C4 waits"],
                ["10", "C3 departs", "0", "busy till 13 (C4)", "C3 wait = 0"],
                ["12", "C5 arrives", "1", "busy", "C5 waits"],
                ["13", "C4 departs", "0", "busy till 15 (C5)", "C4 wait = 2; busy 12 of 13 min"],
              ],
            },
            examQuestions: [
              {
                q: "Inter-arrival times are 2, 4, 2, 4, 2 minutes and service times are 3, 2, 4, 3, 2 minutes, the first customer arriving at t = 0. Construct the simulation table for a single-server FCFS queue and estimate the mean waiting time, the utilization and the time-average queue length over the run.",
                marks: 14,
                outline: [
                  "Event chain: arrivals at 0, 2, 6, 8, 12; services start immediately or on departure",
                  "Table rows: one per event - clock, event, queue, server, pending",
                  "Waits: C1 = 0, C2 = 1, C3 = 0, C4 = 2, C5 = 1 → mean 0.8 min",
                  "Busy time 3 + 2 + 4 + 3 = 12 over 13 min → utilization 0.92",
                  "Queue non-empty in [2,3), [8,10), [12,13) → 4 customer-minutes",
                  "Lq = 4/13 ≈ 0.31 customers (time-weighted)",
                  "Server idle only in [5, 6) - consistency check",
                ],
              },
              {
                q: "Distinguish entity-average and time-weighted statistics in queue simulation, giving one example of each from a single-server run.",
                marks: 7,
                outline: [
                  "Entity-average: mean over customers - mean wait = Σ waits / n",
                  "Time-weighted: average over the clock - Lq = ∫ Q(t) dt / T",
                  "Waits are natural entity averages; queue length a natural time average",
                  "Busy fraction is server-centred (time-based)",
                  "Both converge to the same steady-state truth but estimate differently",
                  "Mixing the two estimators is a common hand-run error",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Networks of queues and the computer-system environment",
            body: [
              "A queue network chains queues together: the departures of one queue become the arrivals of another, with routing probabilities deciding where each customer goes next. Tandem (series) networks pass everyone along one line - compile, link, execute; open networks admit arrivals from outside; closed networks circulate a fixed population - the natural model of a computer system, where a fixed number of programs cycles between CPU and devices. The elementary result worth quoting is Jackson's theorem: for Poisson-exponential networks with probabilistic routing, each node behaves as an independent M/M/c queue with its own arrival rate, and system measures are products of the node measures.",
              "The computer-system emphasis is the syllabus's own. The central-server model places a CPU at the hub with disks fanning out: a job finishes its CPU burst, visits disk 1 with probability 0.6 or disk 2 with probability 0.3 or exits with 0.1, then returns to the CPU queue. Traffic equations compute each node's rate first - λ_disk1 = 0.6 × 10 = 6 jobs/s, λ_disk2 = 3 jobs/s for a CPU feed of 10 - then each node is analysed (or simulated) as its own queue with utilization λ/service-rate. The terminal model adds N users who think (exponential) then submit; response time and throughput follow from the circulation, and the same skeleton serves web farms and microservice chains today.",
              "The exam procedure is fixed: sketch the network with routing probabilities; solve the traffic equations λj = γj + Σ λi·pij; apply M/M/1 formulas node by node or hand the network to the simulator; report end-to-end measures (total response time is the sum of node waits plus services along the route). The classic slip is routing into M/M/1 formulas without the traffic equations - utilization computed from the wrong λ poisons every downstream number.",
            ],
            keyTerms: [
              { term: "Queue network", definition: "Queues chained by routing - departures of one feed arrivals of another." },
              { term: "Tandem / open / closed", definition: "Series line / outside arrivals / fixed circulating population." },
              { term: "Traffic equations", definition: "λj = γj + Σ λi·pij - node arrival rates from external feeds and routing." },
              { term: "Central-server model", definition: "CPU hub with disk satellites; jobs cycle until exiting - the classic computer-system queue network." },
              { term: "Jackson's theorem", definition: "Product-form result: Poisson-exponential networks decompose into independent M/M/c nodes." },
            ],
            diagram: {
              kind: "fork",
              title: "Which queue network fits the system?",
              caption: "Three canonical shapes cover most computer-system models - pick by how jobs move.",
              start: "Modelling jobs through a computer system",
              branches: [
                { label: "Tandem stages", outcome: "compile → link → execute - M/M/1 in series, everyone passes each node", good: true },
                { label: "Central server", outcome: "CPU hub + disks fan out and return - routing probabilities at the branch", good: true },
                { label: "Terminal model", outcome: "N users think, submit, wait - response time from circulation", good: true },
                { label: "Arbitrary open routing", outcome: "Jackson network - traffic equations, then product-form nodes", good: true },
              ],
            },
            bullets: [
              "Networks chain queues via routing probabilities; departures become arrivals.",
              "Traffic equations first: λj = γj + Σ λi·pij - rates before any utilization.",
              "Worked: CPU feed 10/s with 0.6/0.3/0.1 routing → disk1 λ = 6, disk2 λ = 3.",
              "Central-server model: jobs cycle CPU → disk → CPU until exit.",
              "Terminal model: N thinking users circulate - response time = wait + service.",
              "Jackson: Poisson-exponential networks decompose into independent M/M/c nodes.",
            ],
            callout: {
              type: "tip",
              title: "Traffic equations come first",
              body: "In any network numerical, compute node arrival rates before touching a single M/M/1 formula - utilization at a node is λ-node over μ-node, and λ-node comes from routing, not from the external arrival rate. Answers that route probabilities into formulas directly produce confident nonsense, and examiners set the trap deliberately.",
            },
            table: {
              caption: "Queue-network models of computer systems.",
              headers: ["Model", "Structure", "Analysis route", "Typical question"],
              rows: [
                ["Tandem line", "compile → link → execute", "M/M/1 in series; waits add", "end-to-end build time"],
                ["Central server", "CPU hub + disk satellites", "traffic equations + node M/M/1", "CPU utilization, bottleneck device"],
                ["Terminal model", "N users think-submit-wait", "circulation around CPU + devices", "response time vs N users"],
                ["Open Jackson network", "arbitrary routing probabilities", "product-form node measures", "throughput and per-node loads"],
              ],
            },
            examQuestions: [
              {
                q: "Jobs arrive at a CPU at 10 per second; on completion each goes to disk 1 with probability 0.6, disk 2 with probability 0.3, or leaves with probability 0.1. Compute the arrival rates at both disks, and explain how the central-server model is analysed with these rates.",
                marks: 7,
                outline: [
                  "Traffic equations: λj = Σ λi·pij over feeding nodes",
                  "λ_disk1 = 0.6 × 10 = 6 jobs/s",
                  "λ_disk2 = 0.3 × 10 = 3 jobs/s",
                  "Each disk analysed as its own M/M/1 with its rate",
                  "Example: disk 1 at 8 jobs/s service → ρ = 0.75",
                  "Exit rate 1 job/s completes the balance; CPU revisits add internal flows",
                ],
              },
              {
                q: "What is a queueing network? Distinguish tandem, open and closed networks, and explain why the closed central-server model suits computer systems.",
                marks: 7,
                outline: [
                  "Network: departures of one queue feed another via routing",
                  "Tandem: strict series - everyone visits every node",
                  "Open: external arrivals, exits exist",
                  "Closed: fixed population circulates - no external arrivals",
                  "Computer analogy: fixed programs cycle CPU ↔ devices",
                  "Closed model matches batch processing; terminal variant models interactive users",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Performance measures and honest estimation",
            body: [
              "A queue simulation exists to estimate measures: mean waiting time Wq and mean time in system W (entity averages over customers); mean queue length Lq and mean number in system L (time-weighted over the clock); utilization and busy fraction (server-centred); plus tails like P(Wq > t) and maxima that averages hide. Section 4.4's run produced all of them from one table - waits 0.8 minutes, utilization 0.92, Lq ≈ 0.31 - but one run is one sample, and the estimation question is how much to trust it.",
              "Three honesty mechanisms follow. Warm-up deletion: early observations reflect arbitrary initial conditions (an empty system), so the transient head of the run is discarded before averaging. Replication: run n independent replications with different seeds; the replicate means are independent samples, so a confidence interval is honest - mean ± t·s/√n. Batch means: within one long run, split the timeline into batches and treat batch means as samples - the standard cure when runs are expensive. Worked: waits of [0, 1, 0, 2, 1, 0, 3, 1] give mean 1.0 and, with s ≈ 1.07, a 95% half-width of about 0.74 at n = 8 - wide, which is the honest message that more data is needed.",
              "The trap that earns the warning callout: consecutive waiting times are autocorrelated - a long queue inflates many customers' waits in a row - so naive formulas treating them as independent produce intervals that are too narrow and confidence that is too high. The exam answer names the autocorrelation, prescribes batch means or replication, and closes with the reporting rule: never publish a point estimate without its interval.",
            ],
            keyTerms: [
              { term: "Warm-up (transient) deletion", definition: "Discard early observations that reflect initial conditions, not steady state." },
              { term: "Replication", definition: "Independent runs with different seeds - the honest basis for confidence intervals." },
              { term: "Batch means", definition: "Split one long run into batches; batch means act as independent samples." },
              { term: "Autocorrelation of waits", definition: "Consecutive waits correlate (queue memory) - naive intervals become too narrow." },
              { term: "Confidence interval", definition: "Mean ± t·s/√n over replicates - the minimum honest report." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From raw events to trustworthy estimates",
              caption: "Point estimates are the start, not the end - warm-up, batching and intervals make them honest.",
              stages: [
                { label: "Record events", note: "waits, queue lengths, busy time per event" },
                { label: "Compute estimators", note: "entity averages + time-weighted averages" },
                { label: "Delete warm-up", note: "drop the transient head of the run" },
                { label: "Batch / replicate", note: "restore independence for the interval" },
                { label: "Report with CI", note: "mean ± t·s/√n - never a bare number" },
              ],
            },
            bullets: [
              "Measures: W, Wq (entity), L, Lq (time-weighted), utilization, tails P(Wq > t).",
              "Worked: waits [0, 1, 0, 2, 1, 0, 3, 1] → mean 1.0, 95% half-width ≈ 0.74.",
              "Delete the warm-up: an empty-start run biases early averages low.",
              "Replications with different seeds give honest intervals.",
              "Batch means cure expensive-run autocorrelation.",
              "Rule: no point estimate is ever published without its interval.",
            ],
            callout: {
              type: "warning",
              title: "Waiting times are autocorrelated",
              body: "A busy spell inflates the waits of many consecutive customers - they are not independent samples, so the textbook ± t·s/√n applied to raw per-customer waits is over-confident. Batch means or independent replications restore validity. Saying this in the exam is the difference between a statistics answer and a simulation answer.",
            },
            codeExample: {
              language: "python",
              caption: "estimate.py - mean wait with an honest interval",
              code: `import math

def mean_ci(xs):
    n = len(xs)
    m = sum(xs) / n
    s = math.sqrt(sum((x - m) ** 2 for x in xs) / (n - 1))
    half = 1.96 * s / math.sqrt(n)      # ~95% CI for large n
    return round(m, 3), (round(m - half, 3), round(m + half, 3))

waits = [0, 1, 0, 2, 1, 0, 3, 1]        # per-customer waits from one run
print(mean_ci(waits))                   # (1.0, (0.259, 1.741)) - wide
# correlated waits -> batch them, or average independent replications`,
            },
            examQuestions: [
              {
                q: "List the performance measures collected in a queueing simulation and explain how each is estimated. Why must a simulation report include confidence intervals?",
                marks: 7,
                outline: [
                  "W, Wq: entity averages over customers",
                  "L, Lq: time-weighted integrals over the clock",
                  "Utilization: busy time over elapsed time",
                  "Tails: P(Wq > t) from the empirical distribution of waits",
                  "Runs are samples - single-run estimates carry sampling error",
                  "Replications/batches give the interval; bare point estimates mislead",
                ],
              },
              {
                q: "What is the warm-up period in a simulation run and why are early observations deleted? How do batch means address autocorrelated observations?",
                marks: 7,
                outline: [
                  "Warm-up: the transient before steady state - reflects initial conditions",
                  "Empty-start runs bias early waits and queue lengths low",
                  "Delete a head portion estimated by moving-window stability",
                  "Consecutive observations correlate through queue memory",
                  "Batch means: batch averages behave nearly independently",
                  "Interval from batch means is honest; raw-customer interval is not",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Verification, Validation & Simulation Languages",
      summary:
        "Unit V makes models trustworthy and usable: verification against the conceptual model and validation against the real system, the design of simulation experiments with variance reduction, the statistical comparison of model outputs with real-system data, the GPSS language studied through its blocks and a first program, and the supporting roles of databases and AI techniques in modelling and simulation.",
      chapter: {
        number: "05",
        title: "Trust and Tools - V&V, GPSS, Databases and AI",
        intro:
          "Unit V covers verification and validation and their techniques, the design of simulation experiments, validation by comparing model data with real system data, the GPSS simulation language and its blocks, and the use of databases and AI techniques in modelling and simulation.",
        inOneBreath:
          "Verification asks 'did we build the model right' - traces, animation, degenerate tests; validation asks 'did we build the right model' - face validity, sensitivity, and input-output comparison against real data; experiments gain power from factorial designs, replications and common random numbers; GPSS flows transactions through GENERATE-QUEUE-SEIZE-ADVANCE-RELEASE-TERMINATE; databases preserve inputs and runs while AI contributes surrogates, search and calibration.",
        sections: [
          {
            number: "5.1",
            title: "Verification versus validation",
            body: [
              "Verification asks: did we build the model right? It compares the coded simulation model with the conceptual model - is the program a faithful translation of the designed logic, are the equations implemented as written, are the statistics collected correctly? Verification is an internal, software-engineering activity; its enemies are coding bugs, bookkeeping errors and silent misimplementations, and its tools are traces, animation and degenerate tests (section 5.2).",
              "Validation asks: did we build the right model? It compares the model's behaviour with the real system - do simulated waits match observed waits, does the model reproduce history, would domain experts sign off on its assumptions? Validation is an external, empirical activity; its tools are face validity, sensitivity analysis and input-output comparison against real data (sections 5.3 and 5.5). A perfectly verified model can still be perfectly invalid - correct code implementing wrong assumptions.",
              "The two are ordered: verify first, then validate - validating unverified code measures your bugs, not your assumptions. The exam's standard discriminator pair is worth memorizing verbatim: 'verification: building the model right - model vs conceptual model'; 'validation: building the right model - model vs reality'. Nearly every V&V question in this subject opens by asking for exactly that distinction, with the addition that neither can ever be complete - verification can miss common misreadings of the design, and validation only accumulates evidence, never proof.",
            ],
            keyTerms: [
              { term: "Verification", definition: "Does the coded model match the conceptual model - building the model right." },
              { term: "Validation", definition: "Does the model match the real system - building the right model." },
              { term: "Conceptual model", definition: "The written design - entities, events, assumptions - that verification checks against." },
              { term: "Input-output validation", definition: "Comparing model outputs with real-system data over matching periods - the strongest evidence." },
            ],
            diagram: {
              kind: "compare",
              title: "Verification vs validation",
              caption: "Two questions, two comparisons, two toolkits - and a strict order between them.",
              left: {
                heading: "Verification",
                items: [
                  "question: is the code a faithful translation?",
                  "compares: simulation model vs conceptual model",
                  "tools: traces, animation, degenerate tests",
                  "catches: bugs, bookkeeping, misimplementations",
                ],
              },
              right: {
                heading: "Validation",
                items: [
                  "question: does behaviour match reality?",
                  "compares: model vs the real system",
                  "tools: face validity, sensitivity, data comparison",
                  "catches: wrong assumptions, wrong distributions",
                ],
              },
            },
            bullets: [
              "Verification = building the model right; validation = building the right model.",
              "Verification is internal (code vs design); validation is external (model vs reality).",
              "Order matters: verify before validating - else you validate your bugs.",
              "A verified model can still be invalid: correct code, wrong assumptions.",
              "Neither is ever complete - evidence accumulates, proof is unavailable.",
              "Unit V's remaining sections supply each side's toolkit.",
            ],
            callout: {
              type: "exam",
              title: "The two one-liners",
              body: "Write the pair exactly: 'verification: did we build the model right?' and 'validation: did we build the right model?', each with its comparison target and one tool. Then add the ordering sentence - verify first, validate second. These three sentences open nearly every marking scheme for V&V questions.",
            },
            table: {
              caption: "Verification and validation side by side.",
              headers: ["Aspect", "Verification", "Validation"],
              rows: [
                ["Question", "building the model right?", "building the right model?"],
                ["Comparison", "simulation model vs conceptual model", "model behaviour vs real system"],
                ["Nature", "internal, software engineering", "external, empirical"],
                ["Tools", "traces, animation, degenerate tests", "face validity, sensitivity, data comparison"],
                ["Failure caught", "bugs, bookkeeping errors", "wrong assumptions, wrong data"],
                ["Completion", "repeatable within the code", "evidence only - never proven"],
              ],
            },
            examQuestions: [
              {
                q: "Distinguish between verification and validation of simulation models. Why must verification precede validation, and why can neither ever be regarded as complete?",
                marks: 7,
                outline: [
                  "Verification: coded model vs conceptual model - building it right",
                  "Validation: model vs real system - building the right model",
                  "Verification is internal; validation is external and empirical",
                  "Order: validating unverified code measures bugs, not assumptions",
                  "Verification can miss shared misreadings of the design",
                  "Validation accumulates evidence - statistics never prove correctness",
                ],
              },
              {
                q: "A model reproduces its design perfectly but its arrival distribution was assumed instead of measured. Which activity failed, and what evidence would expose it?",
                marks: 7,
                outline: [
                  "Verification passed - code matches design",
                  "Validation failed - wrong input assumption",
                  "Exposing evidence: input-output comparison with real waiting data",
                  "Chi-square/KS fit tests on collected arrivals vs assumed exponential",
                  "Sensitivity: outputs swing with the assumed distribution",
                  "Fix: collect data, refit, revalidate",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Verification techniques in practice",
            body: [
              "The verification toolkit is a checklist of cheap bug-catchers. Event traces print the clock, state variables and FEL at every event - impossible values (negative queue lengths, a server busy while marked idle, statistics that never change) jump out of the log. Animation renders entities moving through the model - logic errors become visible as a customer served without joining a queue. Degenerate tests simplify the model until an analytic answer exists - constant service times turn the queue deterministic and comparable with hand arithmetic; removing randomness entirely must reproduce the deterministic schedule exactly.",
              "Reproducibility and continuity checks complete the kit. A fixed seed must rerun to identical results bit for bit - if not, hidden state or uncontrolled randomness is leaking. Small parameter changes should move outputs smoothly - a jump when λ moves from 9.0 to 9.01 signals a discontinuity bug, not physics. Internal-validity runs - several replications of the same configuration - should agree within sampling noise; wild scatter means the model responds to something it should not. Structured walkthroughs - reading the event routines aloud with a colleague - catch misreadings traces cannot.",
              "The exam answer is the checklist with one line each and one worked instance: a trace excerpt from the section 4.4 table showing a queue length that went negative - instantly diagnosable as a departure executed before the arrival that fed it. Examiners reward ordering too: degenerate tests first (cheapest, most diagnostic), traces and animation during development, statistical internal-validity checks before declaring the code frozen.",
            ],
            keyTerms: [
              { term: "Event trace", definition: "Per-event log of clock, state and FEL - the primary debugging instrument." },
              { term: "Degenerate test", definition: "Strip randomness until an analytic answer exists and compare exactly." },
              { term: "Continuity test", definition: "Small parameter changes must move outputs smoothly - jumps mean bugs." },
              { term: "Fixed-seed rerun", definition: "Identical seeds must reproduce identical results bit for bit." },
              { term: "Structured walkthrough", definition: "Line-by-line review of event routines with a second reader." },
            ],
            diagram: {
              kind: "fork",
              title: "The verification toolkit",
              caption: "Four instruments, one habit: never trust a model whose internals you have not watched.",
              start: "Suspect a bug in the simulator",
              branches: [
                { label: "Event trace", outcome: "print clock, state, FEL per event - impossible values pop out", good: true },
                { label: "Animation", outcome: "watch entities move - logic errors become visible", good: true },
                { label: "Degenerate test", outcome: "constant service → deterministic answer → compare by hand", good: true },
                { label: "Fixed-seed rerun", outcome: "same seed must give identical output - else state leaks", good: true },
              ],
            },
            bullets: [
              "Traces: log every event with clock, state, FEL - read for impossibilities.",
              "Animation: entities on screen turn logic errors into visible absurdities.",
              "Degenerate tests: constant times → analytic comparison; cheapest diagnostic.",
              "Continuity: λ from 9.0 to 9.01 must not jump the output.",
              "Fixed-seed reruns must match exactly; internal-validity replicates must agree.",
              "Order: degenerate first, traces during development, statistical checks before freeze.",
            ],
            callout: {
              type: "tip",
              title: "Degenerate tests are the cheapest bug-catchers",
              body: "Before any statistical testing, set the randomness to constants and compare with hand calculation - a deterministic queue's answers are exact and any mismatch is a genuine bug, not sampling noise. It costs minutes, catches the majority of bookkeeping errors, and converts 'it looks right' into 'it computes right'.",
            },
            codeExample: {
              language: "python",
              caption: "verify.py - trace lines and assertions that catch bugs",
              code: `def degenerate_check(simulated, hand_computed):
    # strip randomness until an analytic answer exists, then compare
    assert abs(simulated - hand_computed) < 1e-9, "model has a bug"

def trace(clock, queue_len, server_busy, next_event):
    # one line per event: impossible values jump out of the log
    print(clock, "q=", queue_len, "busy=", server_busy, "next=", next_event)
    assert queue_len >= 0 and server_busy in (0, 1)`,
            },
            examQuestions: [
              {
                q: "Describe the techniques used to verify a discrete-event simulation model, giving one concrete example of a bug each technique would catch.",
                marks: 7,
                outline: [
                  "Event traces: negative queue length from out-of-order departures",
                  "Animation: customer served without queueing - logic visible",
                  "Degenerate tests: constant service mismatch with hand arithmetic",
                  "Continuity: output jump for a tiny λ change - discontinuity bug",
                  "Fixed-seed rerun: differing results reveal leaking state",
                  "Internal validity: wild scatter across identical replications",
                ],
              },
              {
                q: "What is a degenerate test in simulation? Design one for the single-server queue of Unit IV and state what a failure would imply.",
                marks: 7,
                outline: [
                  "Degenerate: remove randomness until analytics apply",
                  "Set inter-arrivals constant 3 min, service constant 2 min",
                  "Hand-compute waits - deterministic pattern, no statistics needed",
                  "Run the simulator with those constants",
                  "Exact agreement expected; tolerance only for round-off",
                  "Failure implies a bookkeeping bug in event handling or statistics",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Validation techniques - from face value to real data",
            body: [
              "Validation climbs a ladder of strength. Face validity: domain experts review the model's structure, assumptions and animation and judge them reasonable - necessary, cheap, and the weakest form. Assumption validation: structural assumptions (which queues exist, what priorities apply) are tested with experts; data assumptions (which distributions, which parameters) are tested statistically - chi-square or KS fits of collected data against the modelled laws, and sensitivity analysis asking whether outputs swing implausibly when an assumption wiggles.",
              "Input-output validation is the strong rung: run the model over a period whose real outcomes are known - historical data - and compare the two statistically: overlapping confidence intervals, two-sample t-tests on means, KS tests on distributions. The Turing test is its human variant: show experts traces from the model and from the system, mixed; if they cannot sort real from simulated, the model's behaviour has face fidelity at the output level. Historical replication - 'did the model reproduce last March?' - is the form management trusts most.",
              "The warning the exam wants: face validity is not validation. Expert approval of assumptions is evidence, not proof; only comparison with real data tests behaviour, and even that only fails to reject. The complete answer walks the ladder - face, assumptions with sensitivity, input-output with statistics - and closes with the reporting discipline: state what was compared, with what test, at what significance, and what remains unvalidated.",
            ],
            keyTerms: [
              { term: "Face validity", definition: "Expert judgment that model structure and behaviour look reasonable - weakest, necessary." },
              { term: "Sensitivity analysis", definition: "Wiggle an assumption; implausibly large output swings flag model errors." },
              { term: "Input-output validation", definition: "Statistical comparison of model outputs with real-system data over matched periods." },
              { term: "Turing test", definition: "Experts cannot distinguish model traces from real traces." },
              { term: "Historical replication", definition: "The model reproduces a known past period of the real system." },
            ],
            diagram: {
              kind: "matrix",
              title: "Which validation technique is available?",
              caption: "What you can do depends on what you have - experts, data, or both.",
              axes: { x: "Real-system data (none → rich)", y: "Expert insight (none → rich)" },
              quadrants: [
                { label: "Face validity", note: "rich experts, little data - structure review + walkthrough" },
                { label: "Input-output + Turing", note: "rich both - historical replication, trace tests" },
                { label: "Internal consistency only", note: "neither - extreme-value and continuity tests" },
                { label: "Statistical comparison", note: "rich data, few experts - t-test, KS on outputs" },
              ],
            },
            bullets: [
              "Ladder of strength: face validity → assumption tests → input-output comparison.",
              "Data assumptions tested by chi-square/KS fits; structure by expert review.",
              "Sensitivity: implausible output swings expose wrong assumptions.",
              "Input-output: overlapping CIs, t-tests, KS on model vs real outputs.",
              "Turing test: experts cannot sort real traces from simulated ones.",
              "Face validity alone is never validation - the exam's favourite warning.",
            ],
            callout: {
              type: "warning",
              title: "Face validity is not validation",
              body: "Experts nodding at an animation approve the assumptions' plausibility - nothing more. Only comparison against real system data tests behaviour, and even then statistics can only fail to reject. Quote this limitation in the exam; in practice it is the sentence that stops a validated-by-vibes model from being deployed.",
            },
            table: {
              caption: "The validation ladder.",
              headers: ["Technique", "What it checks", "Strength", "Requirement"],
              rows: [
                ["Face validity", "structure looks reasonable", "weak, necessary", "domain experts"],
                ["Assumption tests", "distributions and structure", "moderate", "data + fit tests"],
                ["Sensitivity analysis", "outputs respond plausibly", "moderate", "multiple runs"],
                ["Input-output comparison", "behaviour matches reality", "strong", "historical data + statistics"],
                ["Turing test", "traces indistinguishable", "strong, human", "experts + traces"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the techniques available for validating a simulation model - face validity, validation of model assumptions, sensitivity analysis and input-output validation - arranging them in order of strength.",
                marks: 7,
                outline: [
                  "Face validity: expert review of structure and animation - weakest",
                  "Assumption validation: structural with experts; data with fit tests",
                  "Chi-square/KS on collected data vs assumed distributions",
                  "Sensitivity: wiggle assumptions, watch for implausible swings",
                  "Input-output: model outputs vs real data - overlapping CIs, t-tests",
                  "Order of strength: face < assumptions < input-output",
                ],
              },
              {
                q: "A hospital's casualty model reproduces observed average waiting times within a 95% confidence interval over six months of historical data. What does this establish, and what does it not?",
                marks: 7,
                outline: [
                  "Establishes: input-output validation on means over that period",
                  "Strong evidence the model reproduces aggregate behaviour",
                  "Does not prove: tails, rare-event behaviour, other periods",
                  "Does not prove: causal explanations inside the model are right",
                  "Statistics fail to reject - never confirm correctness",
                  "Continue: validate distributions, extremes, and future periods",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Design of simulation experiments",
            body: [
              "Experiment design turns a simulator into a measuring instrument. The vocabulary: factors are the controllable inputs (number of servers, buffer size, dispatch policy), levels are their settings, treatments are factor-level combinations, and the response is the output measured (mean wait, throughput). The naive one-factor-at-a-time sweep misses interactions - two factors can help separately and hurt together - so factorial designs run all combinations: k factors at 2 levels each need 2ᵏ runs, and fractional factorial designs sample the grid economically when runs are expensive.",
              "Replication and variance reduction are the statistical half. Replications are independent runs with different seeds; n replicates give the response a mean and a standard error, and sequential stopping - keep replicating until the interval half-width is below a stated ε - buys exactly the precision needed, no more. Variance-reduction techniques extract more information per run: common random numbers (CRN) use identical seed streams for the alternatives being compared, converting the comparison into paired differences whose variance collapses; antithetic variates pair each stream with its complement (u and 1 - u); control variates exploit a correlated variable of known mean to correct the estimate.",
              "The exam answer pairs the design with the comparison: sketch a 2³ factorial (8 configurations), state that each configuration gets n independent replications, and explain CRN in one sentence - 'same seeds for A and B, because the difference A - B then cancels shared randomness' - with the pairing logic that when comparing alternatives, reducing variance is cheaper than adding replications. Worked mini-example: eight configurations × five replications = forty runs; with CRN the five paired differences need roughly a quarter the runs of an unpaired comparison for the same interval width.",
            ],
            keyTerms: [
              { term: "Factor / level / treatment", definition: "Controllable input / its setting / one combination of settings run in the experiment." },
              { term: "2ᵏ factorial design", definition: "All 2ᵏ combinations of k two-level factors - captures main effects and interactions." },
              { term: "Common random numbers", definition: "Identical seed streams across compared alternatives - paired differences cancel shared randomness." },
              { term: "Antithetic variates", definition: "Pair each stream u with 1 - u; averaging the pair reduces variance." },
              { term: "Sequential stopping", definition: "Replicate until the confidence-interval half-width falls under a stated ε." },
            ],
            diagram: {
              kind: "flow",
              title: "Designing a simulation experiment",
              caption: "From question to interval: the five moves of every sound simulation experiment.",
              steps: [
                { label: "State the question", note: "and the response variable that answers it" },
                { label: "Choose factors & levels", note: "the knobs worth turning" },
                { label: "Pick the design", note: "2ᵏ factorial or fractional - interactions captured" },
                { label: "Replicate", note: "independent seeds; sequential stopping at ε" },
                { label: "Analyze", note: "means, intervals, paired comparisons (CRN)" },
              ],
            },
            bullets: [
              "Factors, levels, treatments, response - the experiment's vocabulary.",
              "One-factor-at-a-time misses interactions; factorial designs catch them.",
              "2³ design: 8 configurations; fractional factorial when runs are costly.",
              "Replications with different seeds give standard errors; stop sequentially at ε.",
              "CRN: same seeds for A and B - paired differences cancel shared randomness.",
              "Antithetic variates (u, 1 - u) and control variates add cheap precision.",
            ],
            callout: {
              type: "tip",
              title: "Common random numbers halve the experiment size",
              body: "When comparing alternatives, CRN is usually the cheapest variance reduction available: identical streams make both systems experience the same customers, so the difference isolates the design effect. State it as 'paired comparison with shared randomness' - examiners mark the pairing insight, not the acronym.",
            },
            codeExample: {
              language: "python",
              caption: "doe.py - a factorial grid and a paired comparison",
              code: `import itertools

factors = {"servers": [1, 3], "capacity": [5, 50], "speed": [1.0, 2.0]}
grid = list(itertools.product(*factors.values()))
print(len(grid), "configurations")       # 2**3 = 8 runs per replication

# common random numbers: identical seed for both alternatives
seed = 12345
waits_a = simulate(config=grid[0], seed=seed)   # the model of Unit IV
waits_b = simulate(config=grid[1], seed=seed)
diff = sum(a - b for a, b in zip(waits_a, waits_b)) / len(waits_a)`,
            },
            examQuestions: [
              {
                q: "Explain the design of simulation experiments: factors, levels, treatments and response. Why is a factorial design preferred to one-factor-at-a-time experimentation?",
                marks: 7,
                outline: [
                  "Factor: controllable input; level: its setting; treatment: a combination",
                  "Response: the output measured - mean wait, throughput",
                  "OFAT misses interactions - combined effects differ from separate ones",
                  "Factorial runs all combinations: 2ᵏ for k two-level factors",
                  "Interactions visible; main effects estimated cleanly",
                  "Fractional factorial economizes when runs are expensive",
                ],
              },
              {
                q: "Explain common random numbers and antithetic variates as variance-reduction techniques. Why is variance reduction often preferable to more replications?",
                marks: 7,
                outline: [
                  "CRN: same seed streams for compared alternatives",
                  "Effect: paired differences cancel shared randomness",
                  "Antithetic: pair u with 1 - u; average halves the variance component",
                  "Control variates: correct with a correlated known-mean variable",
                  "Runs cost compute; variance reduction extracts more per run",
                  "Same interval width at a fraction of the run count",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Comparing model outputs with real-system data",
            body: [
              "The decisive validation comparison is statistical: real-system data in one hand, model outputs in the other, and a test between them. The menu: inspect whether confidence intervals overlap (a first screen); a two-sample t-test on the means (H₀: model and system share the true mean response); a paired t-test when model and system can be matched period by period (stronger - pairing removes period-to-period variation); chi-square or KS tests comparing whole distributions, not just means; and regression of model outputs on system outputs across many periods - the ideal is slope 1, intercept 0, high correlation.",
              "Worked in numbers: the model's mean throughput over ten replications is 42.5 with s = 3.0; the plant's observed mean over twelve comparable weeks is 44.0 with s = 2.8. The test statistic is t = (42.5 - 44.0)/√(9/10 + 7.84/12) = -1.5/1.25 ≈ -1.2, against the critical t(0.025, 20) ≈ 2.09 - the observed gap is comfortably within chance, so H₀ is not rejected: no evidence of model-system difference at the 5% level, and the model is provisionally validated on this measure.",
              "The exam's interpretive discipline matters more than the arithmetic. A failed-to-reject H₀ is not a certificate of correctness - it says the data cannot distinguish model from system at this sample size and this measure. Sample size, α and the measure chosen all shape the verdict; validating on one aggregate while the decision needs tails is a known failure mode. The complete answer: run the test, state the conclusion at its significance level, list what was not covered, and recommend the next comparison.",
            ],
            keyTerms: [
              { term: "Two-sample t-test", definition: "H₀: model and system share the true mean response - the standard mean comparison." },
              { term: "Paired t-test", definition: "Matched periods pair model and system observations - removes period variation." },
              { term: "Goodness-of-fit tests", definition: "Chi-square / KS comparing model and system output distributions, not just means." },
              { term: "Fail to reject", definition: "The data cannot distinguish model from system - evidence, never proof." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Comparing model outputs with real data",
              caption: "Match the periods, pick the measure, run the test - and report what was not covered.",
              stages: [
                { label: "Collect real data", note: "matched period, same measure definitions" },
                { label: "Run the model", note: "replications over the identical horizon" },
                { label: "Choose the test", note: "t-test on means · KS on distributions · regression" },
                { label: "Verdict at α", note: "fail to reject → provisionally validated" },
              ],
            },
            bullets: [
              "Compare on matched periods with identical measure definitions.",
              "Screen first with overlapping confidence intervals.",
              "Two-sample t-test on means; paired t-test when periods can be matched.",
              "KS/chi-square compare whole distributions - means alone can hide tails.",
              "Worked: t ≈ -1.2 vs critical 2.09 → fail to reject at α = 0.05.",
              "Fail-to-reject is evidence, not proof - state coverage and next tests.",
            ],
            callout: {
              type: "warning",
              title: "You can never prove a model correct",
              body: "Statistics only fails to reject - a passing t-test says the observed data cannot distinguish model from system, not that the model is right. Verdicts belong to specific measures, sample sizes and significance levels. Report the test with its α, list what was not compared, and keep validating - the exam rewards exactly this humility.",
            },
            table: {
              caption: "Statistical instruments for model-vs-system comparison.",
              headers: ["Instrument", "Compares", "When to use"],
              rows: [
                ["Overlapping CIs", "interval screens", "first look, no software needed"],
                ["Two-sample t-test", "means", "independent model/system samples"],
                ["Paired t-test", "mean of differences", "matched periods available"],
                ["Chi-square / KS", "distributions", "tails matter, not just averages"],
                ["Regression", "model vs system slope", "many periods; ideal slope 1, intercept 0"],
              ],
            },
            examQuestions: [
              {
                q: "Model replications give a mean throughput of 42.5 (s = 3.0, n = 10); the real system gives 44.0 (s = 2.8, n = 12). Test the hypothesis that model and system have equal mean throughput at the 5% level (t(0.025, 20) = 2.09) and interpret the result.",
                marks: 7,
                outline: [
                  "H₀: equal true means; H₁: different",
                  "Standard error: √(9/10 + 7.84/12) = √1.553 ≈ 1.25",
                  "t = (42.5 - 44.0)/1.25 ≈ -1.2",
                  "|t| = 1.2 < 2.09 - fail to reject H₀ at α = 0.05",
                  "Interpretation: no evidence of a model-system difference on this measure",
                  "Caveats: single measure, modest n - validate tails and more periods",
                ],
              },
              {
                q: "Why is a paired t-test usually stronger than a two-sample t-test for validating a simulation against historical data?",
                marks: 7,
                outline: [
                  "Periods vary - demand, staffing, seasonality",
                  "Unpaired comparison drowns the model effect in period variation",
                  "Pairing matches each model run to its real period",
                  "Differences remove the common period component",
                  "Variance of differences < variance of separate samples",
                  "Same α, smaller interval - more sensitive verdict",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "GPSS - transactions, blocks and a first program",
            body: [
              "GPSS (General Purpose Simulation System, Geoffrey Gordon, IBM, 1961) is the syllabus's designated discrete-simulation language, built on the process-interaction worldview: dynamic entities called transactions flow through a static skeleton of blocks, each block performing one operation. Facilities are single-server resources a transaction can SEIZE and must RELEASE; storages are capacity-limited resources entered and left; queues are statistics gatherers entered by QUEUE and left by DEPART. The engine handles the FEL, the clocks and the statistics - the modeller writes only the flow logic.",
              "The core block set, with operands: GENERATE A,B creates transactions every A ± B time units (uniform spread); QUEUE A / DEPART A bracket waiting time in queue A; SEIZE A / RELEASE A capture and free facility A; ADVANCE A,B holds the transaction for A ± B time units (service); ENTER A / LEAVE A manage storage A; TRANSFER routes probabilistically; TERMINATE n removes the transaction and decrements the run counter by n; START A runs until the counter reaches A. Worked reading: in the program below, GENERATE 6,2 means arrivals uniformly every 4 to 8 minutes, and the expected utilization of the machine is service mean over inter-arrival mean = 4/6 ≈ 0.67.",
              "The standard program and its standard output close the section. The GPSS report returns facility statistics (entries, utilization, average holding time), queue statistics (maximum contents, average contents, average time per transaction, zero-entry percentage) and transaction counts - exactly the performance measures of Unit IV, gathered automatically. Alongside GPSS the syllabus names the landscape: discrete languages SIMSCRIPT and SIMULA; continuous languages CSMP, CSSL and DYNAMO; combined languages SLAM and GASP - one line each is the expected coverage.",
            ],
            keyTerms: [
              { term: "Transaction", definition: "GPSS's dynamic entity - a customer or job flowing through the block diagram." },
              { term: "Facility", definition: "A single-server resource captured by SEIZE and freed by RELEASE." },
              { term: "ADVANCE", definition: "Holds a transaction for A ± B time units - the service-time block." },
              { term: "GENERATE A,B", definition: "Creates transactions every A ± B time units (uniform spread)." },
              { term: "START / TERMINATE", definition: "Run control: TERMINATE n decrements the counter, START A runs until it reaches A." },
            ],
            diagram: {
              kind: "flow",
              title: "Transaction flow through a GPSS model",
              caption: "One machine, one queue - the canonical first program, block by block.",
              steps: [
                { label: "GENERATE", note: "transaction born - arrivals 6 ± 2 min" },
                { label: "QUEUE / DEPART", note: "wait statistics captured around the seize" },
                { label: "SEIZE", note: "capture the facility - or wait if busy" },
                { label: "ADVANCE", note: "hold for service, 4 ± 1 min" },
                { label: "RELEASE", note: "free the facility for the next transaction" },
                { label: "TERMINATE", note: "leave, decrement the START counter" },
              ],
            },
            bullets: [
              "GPSS: transactions flow through blocks; engine manages clock, FEL, statistics.",
              "Resource blocks: SEIZE/RELEASE (facility), ENTER/LEAVE (storage).",
              "Statistics blocks: QUEUE/DEPART bracket each waiting line.",
              "Operands: GENERATE 6,2 = uniform arrivals every 4-8 minutes.",
              "Expected utilization from operands: ADVANCE mean / GENERATE mean = 4/6 ≈ 0.67.",
              "Landscape: SIMSCRIPT, SIMULA (discrete); CSMP, CSSL, DYNAMO (continuous); SLAM, GASP (combined).",
            ],
            callout: {
              type: "exam",
              title: "Operands mean mean ± half-range",
              body: "GENERATE 6,2 is NOT 'mean 6, deviation 2' in the normal sense - it is a uniform distribution from 6 - 2 to 6 + 2. Examiners ask both the block meaning and the arithmetic consequence (expected utilization = 4/6). Writing the uniform-range interpretation explicitly is the discriminator between a memorized and an understood answer.",
            },
            codeExample: {
              language: "gpss",
              caption: "jobshop.gps - one machine, one queue, in GPSS",
              code: `          GENERATE   6,2       ; a job arrives every 6 +/- 2 minutes
          QUEUE      WAIT      ; enter waiting-line statistics
          SEIZE      MACHINE   ; capture the machine (facility)
          DEPART     WAIT      ; leave waiting-line statistics
          ADVANCE    4,1       ; processing takes 4 +/- 1 minutes
          RELEASE    MACHINE   ; free the machine
          TERMINATE  1         ; job leaves; counter decremented by 1
          START      100       ; run until 100 jobs completed
* Report: facility utilization ~ 4/6 = 0.67, queue WAIT statistics`,
            },
            examQuestions: [
              {
                q: "Write a GPSS program for a job shop in which jobs arrive every 6 ± 2 minutes and are processed by a single machine in 4 ± 1 minutes. Explain each block used and estimate the expected utilization of the machine.",
                marks: 14,
                outline: [
                  "GENERATE 6,2: transaction born every uniform 4-8 minutes",
                  "QUEUE WAIT / DEPART WAIT: bracket waiting-time statistics",
                  "SEIZE MACHINE / RELEASE MACHINE: capture and free the facility",
                  "ADVANCE 4,1: uniform service 3-5 minutes",
                  "TERMINATE 1 with START 100: run until 100 jobs done",
                  "Expected utilization = service mean / inter-arrival mean = 4/6 ≈ 0.67",
                  "Report delivers facility and queue statistics automatically",
                ],
              },
              {
                q: "Explain the GPSS worldview of transactions and blocks. Distinguish facilities from storages, and state the performance statistics GPSS collects automatically.",
                marks: 7,
                outline: [
                  "Transactions: dynamic entities flowing through a static block network",
                  "Blocks: GENERATE, QUEUE/DEPART, SEIZE/RELEASE, ADVANCE, TERMINATE",
                  "Facility: single server - one SEIZE holder at a time",
                  "Storage: capacity n - ENTER up to n concurrently",
                  "Automatic statistics: utilization, entries, avg holding; queue max/avg contents, avg time",
                  "Engine owns the FEL and clock - modeller writes only flow logic",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Databases and AI techniques in modelling and simulation",
            body: [
              "Databases underwrite the reproducibility of simulation studies. Input databases hold the collected data from which distributions are fitted - so the model's randomness traces to measurements, not folklore. Experiment databases store every run's configuration, seed and outputs - scenarios become queryable, comparisons become repeatable, and the model-version-plus-seed record makes any result reproducible months later. Model repositories version the conceptual and coded models themselves; and the experimental frame - the harness of inputs, stopping rules and metrics - is stored beside the model it drives.",
              "AI techniques enter at four working points. Surrogate modelling: a neural network trained on simulator input-output pairs becomes a metamodel - thousands of times faster for screening runs, with the full simulator reserved for finalists. Search and optimization: genetic algorithms and reinforcement learning steer parameter searches across simulator runs, replacing grid search on expensive models. Knowledge-based assistance: expert systems guide model construction - choosing distributions, recommending validation tests - and qualitative reasoning supports models built before data exists. Calibration and validation: machine learning compares simulated and real behaviour patterns to flag drift and suggest parameter corrections.",
              "The exam answer is the stack plus the caution. The stack: databases underneath (inputs, runs, models), AI on top (surrogates, search, calibration), simulation engine between. The caution: surrogates trade accuracy for speed - a neural metamodel is an approximation of the simulator, fit for screening and dangerous for final answers - so finalists are always re-run on the full model. Digital twins, the industrial frontier, are precisely this stack wired to live data, and one sentence connecting them earns the modern-relevance mark.",
            ],
            keyTerms: [
              { term: "Simulation database", definition: "Stores inputs, run configurations, seeds and outputs - making results queryable and reproducible." },
              { term: "Surrogate (metamodel)", definition: "A fast statistical approximation of the simulator, trained on its input-output pairs." },
              { term: "Simulation-based optimization", definition: "An optimizer (GA, RL) proposes parameters; the simulator scores them, in a loop." },
              { term: "Knowledge-based simulation", definition: "Expert systems assisting model construction, distribution choice and validation." },
              { term: "Digital twin", definition: "A live-data-wired model of an operating system, updated and consulted continuously." },
            ],
            diagram: {
              kind: "layers",
              title: "Intelligence stacked on the simulation core",
              caption: "Databases preserve, the engine computes, AI accelerates - the modern M&S stack.",
              layers: [
                { label: "AI layer", note: "surrogates · GA/RL search · expert guidance · calibration" },
                { label: "Database layer", note: "input data · run records · model versions · frames" },
                { label: "Simulation engine", note: "GPSS-style discrete or continuous solver" },
                { label: "Conceptual model", note: "entities, events, equations of the real system" },
              ],
            },
            bullets: [
              "Databases: input data, run records with seeds, model versions, experimental frames.",
              "Reproducibility = model version + configuration + seed, all queryable.",
              "Surrogates: NN metamodels screen thousands of configs; finalists rerun on the full model.",
              "Simulation-based optimization: GA/RL proposes, simulator scores, loop repeats.",
              "Expert systems guide construction and validation; ML flags drift for calibration.",
              "Digital twins = this stack wired to live operational data.",
            ],
            callout: {
              type: "tip",
              title: "Surrogates trade accuracy for speed",
              body: "A neural metamodel approximates the simulator - it answers in milliseconds what the simulator answers in minutes, at the price of approximation error. The professional pattern: screen widely on the surrogate, confirm every finalist on the full model. State the trade explicitly; examiners reward the limitation alongside the benefit.",
            },
            table: {
              caption: "Where databases and AI plug into modelling and simulation.",
              headers: ["Capability", "Technique", "Benefit"],
              rows: [
                ["Input data management", "relational database of collected data", "distributions trace to measurements"],
                ["Run reproducibility", "experiment DB with seeds + versions", "any result repeatable months later"],
                ["Fast screening", "neural-network surrogate", "thousands of configs, seconds each"],
                ["Parameter search", "genetic algorithms / RL loop", "optimization on expensive simulators"],
                ["Model building aid", "expert-system guidance", "distribution choice, test selection"],
                ["Calibration", "ML comparison of real vs simulated patterns", "drift detection, parameter updates"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss the use of database and AI techniques in the area of modelling and simulation, giving at least four concrete roles.",
                marks: 7,
                outline: [
                  "Databases: input data, fitted distributions, run records with seeds",
                  "Reproducibility: model version + configuration + seed queryable",
                  "AI surrogates: NN metamodels for fast screening of configurations",
                  "Simulation-based optimization: GA/RL propose, simulator scores",
                  "Expert systems: assist construction, distribution choice, validation",
                  "Calibration: ML compares real vs simulated patterns; digital twins",
                ],
              },
              {
                q: "What is a surrogate model in simulation? Why are surrogates used only for screening, and how does simulation-based optimization combine a search algorithm with a simulator?",
                marks: 7,
                outline: [
                  "Surrogate: statistical approximation trained on simulator I/O pairs",
                  "Thousands of times faster per evaluation than the full model",
                  "Approximation error - hence screening only, finalists rerun fully",
                  "Optimizer (GA/RL) proposes candidate parameters",
                  "Simulator (or surrogate) scores each candidate",
                  "Loop continues until response plateaus - the optimizer-steered study",
                ],
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
      weightedTopics: [
        { topic: "M/M/1 math + hand simulation of a queue", weight: "≈ 10-12 marks", note: "Numericals guaranteed - formula sheet plus one full event table." },
        { topic: "Random number generation and testing", weight: "≈ 10-12 marks", note: "LCG arithmetic, chi-square/KS tests, inverse transform - all small worked numbers." },
        { topic: "Continuous simulation: Euler/RK4 + one application", weight: "≈ 8-10 marks", note: "Pure pursuit, chemical reaction or autopilot - loop + 2-step table." },
        { topic: "Verification vs validation + techniques", weight: "≈ 8-10 marks", note: "Definitions, toolkit, ladder - the two one-liners open most answers." },
        { topic: "GPSS blocks + first program", weight: "≈ 8-10 marks", note: "Write the program, explain each block, compute expected utilization." },
        { topic: "Model taxonomy, simulation vs Monte-Carlo, when to simulate", weight: "≈ 6-8 marks", note: "Short notes - dichotomies with one example each." },
        { topic: "Inverse transform + Poisson/Normal/Uniform", weight: "≈ 6-8 marks", note: "Small numericals: -ln(u)/λ, standardization, Poisson counts." },
        { topic: "Queue networks + experiment design", weight: "≈ 4-6 marks", note: "Traffic equations, central-server sketch, 2ᵏ factorial, CRN." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for written practice. Every numerical in this subject is small enough to do by hand - do each one twice: once reading, once with the book closed. Hand-run at least two complete event tables and two Euler tables before the exam; the table habit is the mark-earner.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - systems, models, the simulation idea", tasks: ["System terminology on the bank example, all five terms", "Model taxonomy matrix - one example per quadrant", "Simulation-study pipeline written from memory", "Continuous vs discrete, analog vs digital, MC vs dynamic - three contrast tables"] },
        { week: "Week 2", focus: "Unit II - random numbers and distributions", tasks: ["LCG by hand: two seeds, spot the period", "Chi-square test on a 10-bin example; KS concept", "Inverse transform: exponential + discrete numericals", "Poisson counts, Normal standardization, 68-95-99.7"] },
        { week: "Week 3", focus: "Unit III - continuous systems", tasks: ["Euler loop + 2-step tables for decay and growth", "Euler vs Heun vs RK4 - error orders and the halving rule", "Pure pursuit: equations, first step, capture formula", "Chemical reaction table + t* for B; autopilot loop sketch"] },
        { week: "Week 4", focus: "Unit IV - queues", tasks: ["M/M/1 formula sheet + full λ = 9, μ = 10 numerical", "One complete hand-simulation event table, statistics included", "Little's law cross-checks on both", "Traffic equations + central-server sketch"] },
        { week: "Week 5", focus: "Unit V - trust and tools", tasks: ["Verification vs validation one-liners + toolkits", "Validation ladder + one t-test numerical", "2ᵏ factorial + CRN explanation", "GPSS program written twice; block meanings; utilization 4/6"] },
        { week: "Week 6", focus: "Full revision", tasks: ["Formula sheet rebuilt from memory", "Two mock papers at 3 hours each", "Weak-topic drill list from mock results", "Event table and Euler table - one each, timed"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every numerical: write the formula first, substitute, then box the answer - M/M/1, chi-square and inverse-transform markers are formula-first.",
        "Hand-simulation questions: draw the four-column event table (clock, event, state, pending) before computing anything - the table itself earns the rows.",
        "M/M/1 answers: ρ and the stability test first, P₀ = 1 - ρ second, then L, Lq, W, Wq, closing with Little's law as the cross-check.",
        "Continuous-system answers: equations → integrator formula → a two-step numeric table → one sentence on h. Skipping the table skips the marks.",
        "GPSS answers: program + one-line meaning per block + expected utilization from the operands (uniform mean ± spread).",
        "Monte-Carlo questions: state 'time plays no role, samples independent' verbatim - it is the discriminator examiners scan for.",
        "V&V questions: open with 'verification: building the model right; validation: building the right model', then the toolkit.",
        "Time-box: 2-mark ≤ 3 min, 7-mark ≤ 12 min, 14-mark ≤ 25 min - and leave 10 minutes to re-check every table's arithmetic.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "The last day is for tables and formula sheets, not new topics. Morning: rebuild the M/M/1 sheet, the integrator orders (O(h), O(h²), O(h⁴)) and the inverse-transform formulas from memory. Afternoon: one timed event table and one timed Euler table. Evening: read the contrast one-liners - MC vs simulation, verification vs validation, Poisson counts vs exponential gaps, analog vs digital - because these discriminators are where easy marks live.",
      ],
      bullets: [
        "Using λ as the mean inter-arrival time - it is the rate; the mean gap is 1/λ.",
        "Writing P₀ = ρ instead of P₀ = 1 - ρ, or skipping the ρ < 1 stability test.",
        "In the inverse transform, dropping the negative sign - it is X = -ln(u)/λ.",
        "Chi-square degrees of freedom written as N - 1 - it is k - 1 (bins), less estimated parameters.",
        "Calling a queue simulation Monte-Carlo - MC is static; the queue has a clock.",
        "Reading GENERATE 6,2 as a normal distribution - GPSS operands are uniform mean ± spread.",
        "Forgetting DEPART after SEIZE in GPSS - the queue statistics then measure the wrong interval.",
        "Confusing verification with validation in the definitions - the examiner's favourite discriminator.",
        "Presenting Euler as exact - always state the error order and the step-size trade-off.",
        "Quoting simulation results without confidence intervals - the Unit IV/V reporting rule.",
      ],
    },
  ],
};
